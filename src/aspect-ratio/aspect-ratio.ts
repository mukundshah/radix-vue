import { defineComponent } from "vue";

let AspectRatio = defineComponent({
  name: "AspectRatio",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

export { AspectRatio };
