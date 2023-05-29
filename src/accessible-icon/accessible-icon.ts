import { defineComponent, h, cloneVNode } from "vue";
import { Primitive } from "../primitive/primitive";
import { VisuallyHidden as VisuallyHiddenPrimitive } from "../visually-hidden/visually-hidden";

const NAME = "AccessibleIcon";

interface AccessibleIconProps {
  label: string;
}

function throwIfNotOneChild() {
  throw new Error("AccessibleIcon must have exactly one child");
}

let AccessibleIcon = defineComponent(
  (props: AccessibleIconProps, { attrs, slots }) => {
    // if (() => slots.default?.().length !== 1) {
    //   throw new Error("AccessibleIcon must have exactly one child");
    // }

    return () => {
      // return h([
      //   // cloneVNode(() => slots.default?.()[0], {
      //   //   "aria-hidden": "true",
      //   //   focusable: false,
      //   // }),
      //   h(VisuallyHiddenPrimitive, {}, props.label),
      // ]);
      // return h([
      //   h(
      //     // () =>
      //     //   slots.default?.().length !== 1
      //     //     ? throwIfNotOneChild()
      //     //     : slots.default?.()[0],
      //     // {
      //     //   "aria-hidden": "true",
      //     //   focusable: false,
      //     // }
      //     "div"
      //   ),
      //   h(VisuallyHiddenPrimitive, {}, props.label),
      // ]);
      // const node = cloneVNode(slots.default?.()[0]??null, {
      //   "aria-hidden": "true",
      //   focusable: false,
      // });

      // const nodes = h(slots);
      // console.log("nodes", nodes);

      return [
        h(() =>
          cloneVNode(slots.default?.()[0], {
            "aria-hidden": "true",
            focusable: false,
          })
        ),
        h(VisuallyHiddenPrimitive, {}, props.label),
      ];
    };
  },
  {
    name: NAME,
    props: ["label"],
  }
);

export { AccessibleIcon };
