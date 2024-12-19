import {
  y as o,
  am as i,
  T as r
} from "./DQp58DI6.js";
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