import {
  u as s,
  av as i,
  o as r
} from "./CfOYKG2j.js";
const c = (a, e) => {
    const o = s();
    i(a, n => {
      n ? o.internal.forceHideTabs(e) : o.internal.removeForceHideTabs(e)
    }, {
      immediate: !0
    }), r(() => {
      o.internal.removeForceHideTabs(e)
    })
  },
  d = a => {
    const e = s();
    e.internal.forceHideTabs(a), r(() => {
      e.internal.removeForceHideTabs(a)
    })
  };
export {
  d as a, c as u
};