import {
  Y as o,
  Q as i,
  V as r
} from "./CVKQB8Rv.js";
const c = (a, e) => {
    const s = o();
    i(a, n => {
      n ? s.internal.forceHideTabs(e) : s.internal.removeForceHideTabs(e)
    }, {
      immediate: !0
    }), r(() => {
      s.internal.removeForceHideTabs(e)
    })
  },
  d = a => {
    const e = o();
    e.internal.forceHideTabs(a), r(() => {
      e.internal.removeForceHideTabs(a)
    })
  };
export {
  d as a, c as u
};