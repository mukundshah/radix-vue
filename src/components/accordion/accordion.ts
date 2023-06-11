import { type } from "os";
import { VNode, VueElement, defineComponent, h } from "vue";
import { Primitive, PrimitiveProps } from "../primitive/primitive";

type Direction = "ltr" | "rtl";
type Orientation = "horizontal" | "vertical";

interface AccordionImplProps extends PrimitiveProps {
  disabled?: boolean;
  orientation?: Orientation;
  dir?: Direction;
}

interface AccordionImplSingleProps extends AccordionImplProps {
  value?: string;
  defaultValue?: string;
  collapsible?: boolean;
}

interface AccordionImplMultipleProps extends AccordionImplProps {
  value?: string[];
  defaultValue?: string[];
}

interface AccordionSingleProps extends AccordionImplSingleProps {
  type: "single";
}
interface AccordionMultipleProps extends AccordionImplMultipleProps {
  type: "multiple";
}

const ACCORDION_NAME = "Accordion";
const ACCORDION_KEYS = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight",
];

let Accordion = defineComponent(
  (props, { slots }) => {
    return () => h();
  },
  {
    name: "Accordion",
  }
);

let AccordionItem = defineComponent(
  (props: AccordionSingleProps | AccordionMultipleProps, { slots }) => {
    const { type, ...rest } = props;
    return () => (type === "single" ? h() : h());
  },
  {
    name: "AccordionItem",
  }
);

let AccordionHeader = defineComponent(
  (props, { slots }) => {
    return () => h();
  },
  {
    name: "AccordionHeader",
  }
);

let AccordionTrigger = defineComponent(
  (props, { slots }) => {
    return () => h();
  },
  {
    name: "AccordionTrigger",
  }
);

let AccordionContent = defineComponent(
  (props, { slots }) => {
    return () => h();
  },
  {
    name: "AccordionContent",
  }
);

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
};
