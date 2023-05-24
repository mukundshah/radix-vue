import { h, mergeProps } from "vue";

export function render({ ourProps, theirProps, slots, attrs, name }) {
  let props = mergeProps(theirProps, ourProps);
}
