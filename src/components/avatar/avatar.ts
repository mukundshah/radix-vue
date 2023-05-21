import { defineComponent, h } from "vue";

function useId() {
  return "id";
}

let Avatar = defineComponent({
  name: "Avatar",
  props: {
    as: {
      type: [String, Object],
      default: "div",
    },
    id: {
      type: String,
      default: () => `radix-avatar-${useId()}`,
    },
  },
  setup(props, { slots, attrs }) {
    return () => {
      return h(props.as, {}, slots.default?.());
    };
  },
});

// let AvatarImage = defineComponent({
//   name: "AvatarImage",
//   props: {
//     as: {

//   },
//   setup(props, { slots, attrs }) {
//     return () => {
//       // return render({
//       //   props,
//       //   slots,
//       //   attrs,
//       //   name: "AvatarImage",
//       // });
//     };
//   },
// });

// let AvatarFallback = defineComponent({
//   name: "AvatarFallback",
//   props: {
//     as: {},
//   },
//   setup(props, { slots, attrs }) {
//     return () => {
//       // return render({
//       //   props,
//       //   slots,
//       //   attrs,
//       //   name: "AvatarFallback",
//       // });
//     };
//   },
// });

// export { Avatar, AvatarImage, AvatarFallback };
