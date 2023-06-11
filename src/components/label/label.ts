import { defineComponent, h } from 'vue';
import { Primitive } from '../primitive/primitive';

let Label = defineComponent({
  name: 'Label',
  setup(props, { slots, attrs }) {
    return () => {
      return h(
        Primitive.label,
        {
          onmousedown: (e: MouseEvent) => {
            if (!e.defaultPrevented && e.detail > 1) e.preventDefault();
          },
          ...attrs,
        },
        slots.default?.()
      );
    };
  },
});

export { Label };
