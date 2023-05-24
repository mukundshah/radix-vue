import { defineComponent } from "vue";

let Checkbox = defineComponent({
  name: "Checkbox",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

let CheckboxIndicator = defineComponent({
  name: "CheckboxIndicator",
  props: {},
  setup(props, { slots, attrs }) {
    return () => {
      // return h("div", attrs, slots.default && slots.default());
    };
  },
});

export { Checkbox, CheckboxIndicator };
