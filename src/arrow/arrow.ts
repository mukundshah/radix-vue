import { defineComponent, h } from "vue";

let Arrow = defineComponent({
  name: "Arrow",
  props: {
    width: {
      type: Number,
      default: 10,
    },
    height: {
      type: Number,
      default: 5,
    },
  },
  setup(props) {
    return () =>
      h(
        "svg",
        {
          width: props.width,
          height: props.height,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
        },
        h("polygon", {
          points: "0,0 30,0 15,10",
        })
      );
  },
});

export { Arrow };
