import {
  Z as o,
  P as i,
  U as r
} from "./BKd9vpCm.js";
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