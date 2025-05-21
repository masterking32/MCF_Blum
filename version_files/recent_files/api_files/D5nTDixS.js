import {
  f as k,
  o,
  N as u,
  e as t,
  C as m,
  a0 as g,
  d as v,
  aP as I,
  y as N,
  a7 as b,
  aQ as A,
  Z as B,
  ah as E,
  aw as _,
  X as R,
  c as l,
  b as p,
  aR as P,
  ad as w
} from "./BN1oUHf5.js";
import {
  _ as C
} from "./Bt364Uv_.js";
import {
  u as S
} from "./DZj5oRZm.js";
import {
  c as x
} from "./CjrCyY9h.js";
import "./B52RePBE.js";
import "./BBwPzKah.js";
const M = {};

function Q(e, s) {
  const n = C;
  return o(), u(n, {
    title: ("t" in e ? e.t : t(m))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(m))("errors.location.subtitle"),
    "icon-size": 64,
    icon: ("imgResolver" in e ? e.imgResolver : t(g))("emoji/EarthAmericas"),
    "with-space": ""
  }, null, 8, ["title", "subtitle", "icon"])
}
const T = k(M, [
    ["render", Q]
  ]),
  U = {
    key: 1,
    class: "page"
  },
  $ = {
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
      return x(), R().memepad.memepadInitiation({
        source: d
      }), (r, L) => {
        const f = P,
          y = T,
          h = w;
        return t(i) && t(s).availableInfo.value ? (o(), u(f, {
          key: 0
        })) : t(c) ? (o(), l("div", U, [p(y)])) : (o(), l("div", $, [p(h)]))
      }
    }
  });
export {
  X as
  default
};