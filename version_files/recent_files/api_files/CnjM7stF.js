import {
  aW as n,
  a6 as c,
  P as i,
  U as d,
  Q as u
} from "./CALhxlCG.js";
const l = o => {
  const e = n(() => 0, "$TkhAoibwfi"),
    s = () => {
      const t = e.value + 1;
      e.value = t, u().meta.back = o ? () => {
        t === e.value && o()
      } : void 0
    };
  let a;
  c(() => {
    s(), a = i(() => u().meta.back, t => {
      t || s()
    })
  }), d(() => {
    a == null || a()
  })
};
export {
  l as u
};