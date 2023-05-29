import { defineComponent, h } from "vue";
import { Primitive } from "../primitive/primitive";

let VisuallyHidden = defineComponent((props, { attrs, slots }) => {
  return () => {
    return h(
      Primitive.span,
      {
        style: {
          position: "absolute",
          border: "0",
          width: "1",
          height: "1",
          padding: "0",
          margin: "-1",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...(attrs.style as any),
        },
        ...attrs,
      },
      slots
    );
  };
});

export { VisuallyHidden };
