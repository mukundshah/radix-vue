import { defineComponent, h, ref } from "vue";

let Toggle = defineComponent({
  name: "Toggle",
  props: {
    pressed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots, attrs }) {
    const pressed = ref(props.pressed);
    return () => {
      return h(
        "button",
        {
          type: "button",
          "aria-pressed": pressed.value,
          "data-state": pressed.value ? "on" : "off",
          "data-disabled": attrs.disabled ? "" : undefined,
          onClick: (e: MouseEvent) => {
            if (!attrs.disabled) {
              pressed.value = !pressed.value;
            }
          },
        },
        slots.default && slots.default({ pressed: pressed.value })
      );
    };
  },
});

export { Toggle };
