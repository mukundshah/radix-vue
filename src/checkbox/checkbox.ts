import { defineComponent, inject, provide, ref, h } from "vue";
import type { InjectionKey, Ref } from "vue";
import { Primitive } from "@/primitive/primitive";

type CheckedState = boolean | "indeterminate";

interface CheckboxContextValue {
  state: Ref<CheckedState>;
  disabled?: Ref<boolean>;
}

let CheckboxContext = Symbol(
  "CheckboxContext"
) as InjectionKey<CheckboxContextValue>;

function useCheckboxContext(component: string) {
  let context = inject(CheckboxContext, null);
  if (context === null) {
    let err = new Error(`<${component}> must be used inside <Checkbox>`);
    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(err, useCheckboxContext);
    // }
    throw err;
  }
  return context;
}

function isIndeterminate(checked?: CheckedState): checked is "indeterminate" {
  return checked === "indeterminate";
}

let Checkbox = defineComponent({
  name: "Checkbox",
  props: {},
  setup(props, { slots, attrs }) {
    let api: CheckboxContextValue = {
      state: ref<CheckedState>(false),
      disabled: ref<boolean>(false),
    };
    provide(CheckboxContext, api);
    return () => {
      return h(Primitive.button, {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(api.state.value)
          ? "mixed"
          : api.state.value,
        "aria-disabled": api.disabled?.value,
        disabled: api.disabled?.value,
      });
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
