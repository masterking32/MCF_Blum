import {
  f as k,
  o,
  z as u,
  e as t,
  A as _,
  a8 as h,
  d as v,
  aY as A,
  J as I,
  ag as b,
  aZ as N,
  K as B,
  ao as E,
  aD as m,
  a5 as R,
  c as l,
  b as p,
  a_ as P,
  Q as S
} from "./Izfnm6Yj.js";
import {
  _ as w
} from "./BMLwL9DE.js";
import {
  u as x
} from "./B4ikC4tr.js";
import {
  c as C
} from "./CjrCyY9h.js";
import "./D79MLhE5.js";
import "./DutP__Ts.js";
const K = {};

function M(e, s) {
  const n = w;
  return o(), u(n, {
    title: ("t" in e ? e.t : t(_))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(_))("errors.location.subtitle"),
    "icon-size": 64,
    icon: ("imgResolver" in e ? e.imgResolver : t(h))("emoji/EarthAmericas"),
    "with-space": ""
  }, null, 8, ["title", "subtitle", "icon"])
}
const Q = k(K, [
    ["render", M]
  ]),
  T = {
    key: 1,
    class: "page"
  },
  U = {
    key: 2,
    class: "page"
  },
  J = v({
    __name: "memepad",
    setup(e) {
      const s = A(),
        {
          _flow: {
            init: n,
            destroy: a
          }
        } = x(),
        i = I(!1);
      n().then(() => i.value = !0), b(() => {
        a()
      });
      const c = N().memepad.isBlocked;
      B(c, r => r && a(), {
        immediate: !0
      });
      const d = E("memepadFrom", m) ?? m.NA;
      return C(), R().memepad.memepadInitiation({
        source: d
      }), (r, z) => {
        const f = P,
          y = Q,
          g = S;
        return t(i) && t(s).availableInfo.value ? (o(), u(f, {
          key: 0
        })) : t(c) ? (o(), l("div", T, [p(y)])) : (o(), l("div", U, [p(g)]))
      }
    }
  });
export {
  J as
  default
};