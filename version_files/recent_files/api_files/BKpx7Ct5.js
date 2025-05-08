import {
  f as b,
  o,
  N as u,
  e as t,
  C as m,
  X as g,
  d as h,
  a_ as v,
  y as I,
  a3 as N,
  a$ as A,
  V as B,
  ad as E,
  aK as _,
  a9 as R,
  c as l,
  b as p,
  b0 as C
} from "./DmEY5NHF.js";
import {
  _ as P
} from "./CZpPO4Z5.js";
import {
  _ as S
} from "./CCqriBvA.js";
import {
  u as $
} from "./B48DpeiX.js";
import {
  c as w
} from "./CjrCyY9h.js";
import "./oP8A2iYc.js";
import "./Ky2DfqVd.js";
const x = {};

function K(e, s) {
  const n = P;
  return o(), u(n, {
    title: ("t" in e ? e.t : t(m))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(m))("errors.location.subtitle"),
    "icon-size": 64,
    icon: ("imgResolver" in e ? e.imgResolver : t(g))("emoji/EarthAmericas"),
    "with-space": ""
  }, null, 8, ["title", "subtitle", "icon"])
}
const M = b(x, [
    ["render", K]
  ]),
  T = {
    key: 1,
    class: "page"
  },
  U = {
    key: 2,
    class: "page"
  },
  Y = h({
    __name: "memepad",
    setup(e) {
      const s = v(),
        {
          _flow: {
            init: n,
            destroy: a
          }
        } = $(),
        i = I(!1);
      n().then(() => i.value = !0), N(() => {
        a()
      });
      const c = A().memepad.isBlocked;
      B(c, r => r && a(), {
        immediate: !0
      });
      const d = E("memepadFrom", _) ?? _.NA;
      return w(), R().memepad.memepadInitiation({
        source: d
      }), (r, O) => {
        const f = C,
          y = M,
          k = S;
        return t(i) && t(s).availableInfo.value ? (o(), u(f, {
          key: 0
        })) : t(c) ? (o(), l("div", T, [p(y)])) : (o(), l("div", U, [p(k)]))
      }
    }
  });
export {
  Y as
  default
};