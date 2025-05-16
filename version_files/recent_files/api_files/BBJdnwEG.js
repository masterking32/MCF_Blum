import {
  f as k,
  o,
  N as u,
  e as t,
  C as m,
  a0 as g,
  d as v,
  aO as I,
  y as N,
  a7 as b,
  aP as A,
  Z as B,
  ah as E,
  aw as _,
  X as P,
  c as l,
  b as p,
  aQ as R,
  ad as w
} from "./B3wbv-Ae.js";
import {
  _ as C
} from "./Cj0Bsrvg.js";
import {
  u as S
} from "./D0SdzvDo.js";
import {
  c as x
} from "./CjrCyY9h.js";
import "./XyFDqTAs.js";
import "./3-RB_g6S.js";
const M = {};

function O(e, s) {
  const n = C;
  return o(), u(n, {
    title: ("t" in e ? e.t : t(m))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(m))("errors.location.subtitle"),
    "icon-size": 64,
    icon: ("imgResolver" in e ? e.imgResolver : t(g))("emoji/EarthAmericas"),
    "with-space": ""
  }, null, 8, ["title", "subtitle", "icon"])
}
const Q = k(M, [
    ["render", O]
  ]),
  T = {
    key: 1,
    class: "page"
  },
  U = {
    key: 2,
    class: "page"
  },
  X = v({
    __name: "memepad",
    setup(e) {
      const s = I(),
        {
          _flow: {
            init: n,
            destroy: a
          }
        } = S(),
        i = N(!1);
      n().then(() => i.value = !0), b(() => {
        a()
      });
      const c = A().memepad.isBlocked;
      B(c, r => r && a(), {
        immediate: !0
      });
      const d = E("memepadFrom", _) ?? _.NA;
      return x(), P().memepad.memepadInitiation({
        source: d
      }), (r, K) => {
        const f = R,
          y = Q,
          h = w;
        return t(i) && t(s).availableInfo.value ? (o(), u(f, {
          key: 0
        })) : t(c) ? (o(), l("div", T, [p(y)])) : (o(), l("div", U, [p(h)]))
      }
    }
  });
export {
  X as
  default
};