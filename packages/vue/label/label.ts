import { defineComponent, h } from "vue";

let Label = defineComponent({
  name: "Label",
  props: {
    as: {
      type: [String, Object],
      default: "label",
    },
  },
  setup(props, { slots, attrs }) {
    return () => {
      // return h(props.as, {...attrs, onmousedown}, slots);
      // prevent text selection when clicking on the label

      // return h(props.as, { ...attrs }, slots);
      return h(
        props.as,

        {
          onmousedown: (event: MouseEvent) => {
            event.preventDefault();
          },
        },
        slots.default && slots.default()
      );
    };
  },
});

export { Label };
