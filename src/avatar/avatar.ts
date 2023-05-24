import { defineComponent, h, inject, provide, ref, watchEffect } from "vue";
import type { InjectionKey, Ref } from "vue";

type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error";
interface StateDefinition {
  imageLoadingState: Ref<ImageLoadingStatus>;
  onImageLoadingStateChange: (value: ImageLoadingStatus) => void;
}

let AvatarContext = Symbol("AvatarContext") as InjectionKey<StateDefinition>;

function useAvatarContext(component: string) {
  let context = inject(AvatarContext, null);
  if (context === null) {
    let err = new Error(`<${component}> must be used inside <Avatar>`);
    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(err, useAvatarContext);
    // }
    throw err;
  }
  return context;
}

function useImageLoadingStatus(src?: string) {
  const loadingStatus = ref<ImageLoadingStatus>("idle");

  watchEffect(() => {
    if (!src) {
      loadingStatus.value = "error";
      return;
    }

    let isMounted = true;
    let img = new Image();
    const updateStatus = (status: ImageLoadingStatus) => {
      if (!isMounted) return;
      loadingStatus.value = status;
    };

    loadingStatus.value = "loading";
    img.onload = () => updateStatus("loaded");
    img.onerror = () => updateStatus("error");
    return () => {
      isMounted = false;
    };
  });

  return loadingStatus;
}

let Avatar = defineComponent({
  name: "Avatar",
  props: {
    as: {
      type: [String, Object],
      default: "div",
    },
  },
  setup(props, { slots, attrs }) {
    let api = {
      imageLoadingState: ref<ImageLoadingStatus>("idle"),
      onImageLoadingStateChange(value: ImageLoadingStatus) {
        api.imageLoadingState.value = value;
      },
    } satisfies StateDefinition;
    provide(AvatarContext, api);
    return () => {
      return h(props.as, attrs, slots.default && slots.default());
    };
  },
});

let AvatarImage = defineComponent({
  name: "AvatarImage",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "Avatar",
    },
  },
  setup(props, { attrs }) {
    let api = useAvatarContext("AvatarImage");
    // let imageLoadingStatus = useImageLoadingStatus(props.src);
    // api.value = props;
    return () => {
      return api.imageLoadingState.value === "loaded"
        ? h("img", {
            src: props.src,
            alt: props.alt,
            onLoad: () => api.onImageLoadingStateChange("loaded"),
            onError: () => api.onImageLoadingStateChange("error"),
          })
        : null;
    };
  },
});

let AvatarFallback = defineComponent({
  name: "AvatarFallback",
  props: {
    as: {
      type: [String, Object],
      default: "div",
    },
    delay: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots, attrs }) {
    const canRender = ref(props.delay === 0);
    setTimeout(() => {
      canRender.value = true;
    }, props.delay);
    let api = useAvatarContext("AvatarFallback");

    console.log("AvatarFallback", props, slots, attrs);
    return () => {
      return canRender.value && api.imageLoadingState.value !== "loaded"
        ? h(props.as, attrs, slots.default && slots.default())
        : null;
    };
  },
});

// Avatar.Image = AvatarImage;
// Avatar.Fallback = AvatarFallback;

export { Avatar, AvatarImage, AvatarFallback };
