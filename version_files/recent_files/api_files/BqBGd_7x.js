import {
  b3 as n,
  a8 as c,
  am as i,
  T as d,
  ap as u
} from "./DiQ4YSNT.js";
const k = o => {
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
  k as u
};