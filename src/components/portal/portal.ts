import { defineComponent, h } from 'vue';
import { Primitive } from '../primitive/primitive';

const PORTAL_NAME = 'Portal';

let Portal = defineComponent(
  (props, { slots }) => {
    return () => h(Primitive.div, slots);
  },
  {
    name: PORTAL_NAME,
  }
);

export { Portal };
