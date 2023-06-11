import { Ref, defineComponent, h, provide, ref } from "vue";
import { useCreateContext } from "../utils/context";
import { Primitive } from "../primitive/primitive";

type CheckedState = boolean | "indeterminate";

type CheckboxContextValue = {
  state: Ref<CheckedState>;
  disabled?: Ref<boolean>;
};

const [CheckboxContext, useCheckboxContext] =
  useCreateContext<CheckboxContextValue>("Checkbox");

interface CheckboxProps {
  checked?: CheckedState;
  defaultChecked?: CheckedState;
  required?: boolean;
}

function isIndeterminate(checked?: CheckedState): checked is "indeterminate" {
  return checked === "indeterminate";
}

function getState(checked: CheckedState) {
  return isIndeterminate(checked)
    ? "indeterminate"
    : checked
    ? "checked"
    : "unchecked";
}

let Checkbox = defineComponent(
  (props: CheckboxProps, { slots, attrs, emit }) => {
    let { checked, defaultChecked, required } = props;
    let { disabled } = attrs;
    let api = {
      state: ref<CheckedState>(defaultChecked || false),
      disabled: ref<boolean>(false),
    };
    provide(CheckboxContext, api);
    return () => {
      return h(Primitive.button, {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(api.state.value),
        "data-disabled": disabled ? "" : undefined,
        value: api.state.value,
        onKeydown: (e: KeyboardEvent) => {
          // According to WAI ARIA, Checkboxes don't activate on enter keypress
          if (e.key === "Enter") e.preventDefault();
        },
        onClick: (e: MouseEvent) => {},
      });
    };
  }
);
