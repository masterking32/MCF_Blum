import {
  Y as n,
  aM as i,
  T as o
} from "./C5qtAAJO.js";
const c = (a, e) => {
    const s = n();
    i(a, r => {
      r ? s.internal.forceHideTabs(e) : s.internal.removeForceHideTabs(e)
    }, {
      immediate: !0
    }), o(() => {
      s.internal.removeForceHideTabs(e)
    })
  },
  d = a => {
    const e = n();
    e.internal.forceHideTabs(a), o(() => {
      e.internal.removeForceHideTabs(a)
    })
  };
export {
  d as a, c as u
};