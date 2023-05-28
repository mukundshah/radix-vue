import { defineComponent, h, provide, ref, watch, watchEffect } from "vue";
import { Primitive } from "@/primitive/primitive";
import { useCreateContext } from "@/utils/context";

import type { Ref } from "vue";
import type { PrimitiveProps } from "@/primitive/primitive";

type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error";

type AvatarContextValue = {
  imageLoadingStatus: Ref<ImageLoadingStatus>;
  onImageLoadingStatusChange(status: ImageLoadingStatus): void;
};

const [AvatarContext, useAvatarContext] =
  useCreateContext<AvatarContextValue>("Avatar");

function useImageLoadingStatus(src?: string) {
  const loadingStatus = ref<ImageLoadingStatus>("idle");

  watchEffect(() => {
    if (!src) {
      loadingStatus.value = "error";
      return;
    }

    let img = new Image();
    const updateStatus = (status: ImageLoadingStatus) => {
      loadingStatus.value = status;
    };

    loadingStatus.value = "loading";
    img.onload = () => updateStatus("loaded");
    img.onerror = () => updateStatus("error");
    img.src = src;
  });

  return loadingStatus;
}

interface AvatarProps extends PrimitiveProps {}

let Avatar = defineComponent(
  (props: AvatarProps, { attrs, slots }) => {
    console.log("Avatar", props, attrs, slots);
    const imageLoadingStatus = ref<ImageLoadingStatus>("idle");
    let api: AvatarContextValue = {
      imageLoadingStatus: imageLoadingStatus,
      onImageLoadingStatusChange(value: ImageLoadingStatus) {
        api.imageLoadingStatus.value = value;
      },
    };
    provide(AvatarContext, api);
    return () =>
      h(
        Primitive.div,
        { ...attrs, id: "hgjhg" },
        slots.default && slots.default()
      );
  },
  { name: "Avatar" }
);

interface AvatarImageProps extends PrimitiveProps {
  src: string;
  alt?: string;
}

let AvatarImage = defineComponent(
  (props: AvatarImageProps, { attrs, emit }) => {
    let context = useAvatarContext("AvatarImage");
    const imageLoadingStatus = useImageLoadingStatus(props.src);
    watchEffect(() => {
      if (imageLoadingStatus.value !== "idle") {
        context.onImageLoadingStatusChange(imageLoadingStatus.value);
      }
    });
    watch(imageLoadingStatus, (value) => emit("loadingStatusChange", value));
    return () => {
      return imageLoadingStatus.value === "loaded"
        ? h(Primitive.img, { src: props.src, alt: props.alt, ...attrs })
        : null;
    };
  },
  {
    name: "AvatarImage",
    props: ["src", "alt"],
    emits: ["loadingStatusChange"],
  }
);

interface AvatarFallbackProps extends PrimitiveProps {
  delayMs?: number;
}

let AvatarFallback = defineComponent(
  (props: AvatarFallbackProps, { attrs, slots }) => {
    let context = useAvatarContext("AvatarFallback");
    const canRender = ref(props.delayMs === undefined);

    watchEffect(() => {
      if (props.delayMs !== undefined) {
        const timerId = setTimeout(
          () => (canRender.value = true),
          props.delayMs
        );
        return () => clearTimeout(timerId);
      }
    });

    return () => {
      return canRender.value && context.imageLoadingStatus.value !== "loaded"
        ? h(Primitive.span, attrs, slots.default && slots.default())
        : null;
    };
  },
  {
    name: "AvatarFallback",
    props: ["delayMs"],
  }
);

export { Avatar, AvatarImage, AvatarFallback };
