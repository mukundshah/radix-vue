import { defineComponent, h } from "vue";

let Label = defineComponent({
  name: "Label",
  setup() {
    return () => {
      return h("label", {
        onmousedown: (e: MouseEvent) => {
          if (!e.defaultPrevented && e.detail > 1) e.preventDefault();
        },
      });
    };
  },
});

export { Label };
