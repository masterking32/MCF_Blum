import {
  u as s,
  av as i,
  o as n
} from "./B8dH5Zvz.js";
const c = (o, e) => {
  const a = s();
  i(o, r => {
    r ? a.internal.forceHideTabs(e) : a.internal.removeForceHideTabs(e)
  }, {
    immediate: !0
  }), n(() => {
    a.internal.removeForceHideTabs(e)
  })
};
export {
  c as u
};