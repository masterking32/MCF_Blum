import {
  b7 as u,
  aj as c,
  av as i,
  o as d,
  ax as s
} from "./DwYsksKZ.js";
const l = n => {
  const e = u(() => 0, "$TkhAoibwfi"),
    o = () => {
      const t = e.value + 1;
      e.value = t, s().meta.back = () => {
        t === e.value && n()
      }
    };
  let a;
  c(() => {
    o(), a = i(() => s().meta.back, t => {
      t || o()
    })
  }), d(() => {
    a == null || a()
  })
};
export {
  l as u
};