import {
  f as k,
  o,
  N as u,
  e as t,
  C as m,
  a0 as v,
  d as N,
  aN as h,
  y as I,
  a7 as b,
  aO as A,
  Z as B,
  ag as E,
  av as _,
  X as P,
  c as l,
  b as p,
  aP as R
} from "./CeLf80nu.js";
import {
  _ as C
} from "./8Z2NiE89.js";
import {
  _ as S
} from "./CiinTD8R.js";
import {
  u as w
} from "./B3dAZRun.js";
import {
  c as x
} from "./CjrCyY9h.js";
import "./CLPfiL4J.js";
import "./BSgRs94G.js";
const M = {};

function O(e, s) {
  const n = C;
  return o(), u(n, {
    title: ("t" in e ? e.t : t(m))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(m))("errors.location.subtitle"),
    "icon-size": 64,
    icon: ("imgResolver" in e ? e.imgResolver : t(v))("emoji/EarthAmericas"),
    "with-space": ""
  }, null, 8, ["title", "subtitle", "icon"])
}
const T = k(M, [
    ["render", O]
  ]),
  U = {
    key: 1,
    class: "page"
  },
  $ = {
    key: 2,
    class: "page"
  },
  Y = N({
    __name: "memepad",
    setup(e) {
      const s = h(),
        {
          _flow: {
            init: n,
            destroy: a
          }
        } = w(),
        i = I(!1);
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
      }), (r, L) => {
        const f = R,
          y = T,
          g = S;
        return t(i) && t(s).availableInfo.value ? (o(), u(f, {
          key: 0
        })) : t(c) ? (o(), l("div", U, [p(y)])) : (o(), l("div", $, [p(g)]))
      }
    }
  });
export {
  Y as
  default
};