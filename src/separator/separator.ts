import { defineComponent, h } from "vue";

const NAME = "Separator";
const DEFAULT_ORIENTATION = "horizontal";
const ORIENTATIONS = [DEFAULT_ORIENTATION, "vertical"] as const;

type Orientation = (typeof ORIENTATIONS)[number];

function getInvalidOrientationError(value: string, componentName: string) {
  return `Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${DEFAULT_ORIENTATION}\`.`;
}

function isValidOrientation(value: string) {
  return ORIENTATIONS.includes(value as Orientation);
}

let Separator = defineComponent({
  name: "Separator",
  props: {
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value: string) => {
        if (!isValidOrientation(value)) {
          console.warn(getInvalidOrientationError(value, NAME));
          return false;
        }
        return true;
      },
    },
    decorative: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs }) {
    let orientation = isValidOrientation(props.orientation)
      ? props.orientation
      : DEFAULT_ORIENTATION;
    let ariaOrientation =
      props.orientation === "vertical" ? props.orientation : undefined;
    let semanticProps = props.decorative
      ? { role: "none" }
      : { "aria-orientation": ariaOrientation, role: "separator" };

    return () => {
      return h("div", {
        ...attrs,
        ...semanticProps,
        "data-orientation": orientation,
      });
    };
  },
});

export { Separator };
