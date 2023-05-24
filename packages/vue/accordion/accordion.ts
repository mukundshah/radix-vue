import { defineComponent, render } from "vue";

export let Accordion = defineComponent({
  name: "Accordion",
  props: {
    as: {},
  },
  setup(props, { slots, attrs }) {
    return () => {
      // return render({
      //   props,
      //   slots,
      //   attrs,
      //   name: "Accordion",
      // });
    };
  },
});
