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

// type Node = typeof NODES[number];

const Primitive: Record<(typeof NODES)[number], any> = NODES.reduce(
  (primitive, node) => {
    const componentName = `Primitive${capitalizeFirstLetter(node)}`;
    const component = defineComponent({
      name: componentName,
      props: {
        asChild: {
          type: Boolean,
          default: false,
        },
      },
      setup(props, { slots, attrs }) {
        onMounted(() => {
          (window as any)[Symbol.for("radix-ui")] = true;
        });

        return () => {
          const Comp = props.asChild ? "slot" : node;
          return h(
            Comp,
            {
              ...attrs,
            },
            slots.default?.()
          );
        };
      },
    });

    return { ...primitive, [node]: component };
  },
  {} as Record<(typeof NODES)[number], any>
);

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { Primitive };
