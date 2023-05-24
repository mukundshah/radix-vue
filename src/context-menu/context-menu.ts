import { defineComponent } from "vue";

let ContextMenu = defineComponent({
  name: "ContextMenu",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let ContextMenuTrigger = defineComponent({
  name: "ContextMenuTrigger",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let ContextMenuPortal = defineComponent({
  name: "ContextMenuPortal",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let ContextMenuContent = defineComponent({
  name: "ContextMenuContent",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuContent,
};
