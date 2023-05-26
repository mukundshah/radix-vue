import { defineComponent, h } from "vue";

let AspectRatio = defineComponent({
  name: "AspectRatio",
  props: {
    ratio: {
      type: [String, Number],
      default: "1 / 1",
    },
  },
  setup(props, { slots, attrs }) {
    const { ratio } = props;
    const [width, height] = ratio.toString().split("/").map(Number);
    return () => {
      return h(
        "div",
        {
          style: {
            position: "relative",
            width: "100%",
            paddingBottom: `${100 / (width / height)}%`,
          },
          "data-radix-aspect-ratio-wrapper": "",
        },
        h("div", {
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        })
      );
    };
  },
});

export { AspectRatio };
