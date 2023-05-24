import { defineComponent } from "vue";

let AlertDialog = defineComponent({
  name: "AlertDialog",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let AlertDialogTrigger = defineComponent({
  name: "AlertDialogTrigger",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let AlertDialogPortal = defineComponent({
  name: "AlertDialogPortal",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let AlertDialogContent = defineComponent({
  name: "AlertDialogContent",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let AlertDialogTitle = defineComponent({
  name: "AlertDialogTitle",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let AlertDialogDescription = defineComponent({
  name: "AlertDialogDescription",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let AlertDialogCancel = defineComponent({
  name: "AlertDialogCancel",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("button", attrs, slots.default && slots.default());
    };
  },
});

let AlertDialogAction = defineComponent({
  name: "AlertDialogAction",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("button", attrs, slots.default && slots.default());
    };
  },
});

let AlertDialogOverlay = defineComponent({
  name: "AlertDialogOverlay",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
};
