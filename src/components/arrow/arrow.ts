import { defineComponent, h } from "vue";
import type { PrimitiveProps } from "../primitive/primitive";
import { Primitive } from "../primitive/primitive";
interface ArrowProps extends PrimitiveProps {
  width?: number;
  height?: number;
}

let Arrow = defineComponent(
  (props: ArrowProps) => {
    return () =>
      h(
        Primitive.svg,
        {
          width: props.width || 10,
          height: props.height || 5,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
        },
        () =>
          h("polygon", {
            points: "0,0 30,0 15,10",
          })
      );
  },
  { name: "Arrow", props: ["width", "height"] }
);

export { Arrow };
