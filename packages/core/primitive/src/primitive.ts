import { defineComponent, h, onMounted } from "vue";

const NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul",
] as const;

type Primitives = Record<(typeof NODES)[number], any>;

interface PrimitiveProps {
  asChild?: boolean;
}

const Primitive = NODES.reduce((primitive, node) => {
  const componentName = `Primitive${capitalizeFirstLetter(node)}`;
  const component = defineComponent(
    (props: PrimitiveProps, { slots, attrs }) => {
      onMounted(() => {
        (window as any)[Symbol.for("radix-ui")] = true;
      });

      return () => {
        return props.asChild ? slots.default?.() : h(node, attrs, slots);
      };
    },
    {
      name: componentName,
      props: ["asChild"],
    }
  );

  return { ...primitive, [node]: component };
}, {} as Primitives);

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { Primitive };
export type { PrimitiveProps };
