import { defineComponent, h } from "vue";

let Accordion = defineComponent({
  name: "Accordion",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let AccordionItem = defineComponent({
  name: "AccordionItem",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let AccordionHeader = defineComponent({
  name: "AccordionHeader",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let AccordionTrigger = defineComponent({
  name: "AccordionTrigger",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let AccordionContent = defineComponent({
  name: "AccordionContent",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
