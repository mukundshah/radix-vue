import { inject } from "vue";
import type { InjectionKey } from "vue";

export function useCreateContext<T>(component: string) {
  let comp = component;
  let context = Symbol(`${comp}Context`) as InjectionKey<T>;
  function useContext(component: string) {
    let ctx = inject(context, null);
    if (ctx === null) {
      let err = new Error(`<${component}> must be used inside <${comp}>`);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(err, useContext);
      }
      throw err;
    }
    return ctx;
  }
  return [context, useContext] as const;
}
