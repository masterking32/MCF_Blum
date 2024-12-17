import {
  d7 as i
} from "./Dq6b0IKe.js";
const s = r => {
  const t = r.lt(0),
    n = t ? "-" : "+";
  let o = i(r, {
    trim: !0
  }) + "%";
  return n === "+" && (o = `+${o}`), {
    direction: t ? "down" : "up",
    cls: `is-${t?"down":"up"}`,
    directionSymbol: n,
    formatted: o
  }
};
export {
  s as g
};