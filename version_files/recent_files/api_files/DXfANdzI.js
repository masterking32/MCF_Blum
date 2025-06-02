import {
  f as k,
  o,
  z as u,
  e as t,
  A as m,
  a8 as h,
  d as v,
  aW as A,
  J as I,
  ag as b,
  aX as N,
  K as B,
  ao as E,
  aC as _,
  a5 as R,
  c as l,
  b as p,
  aY as C,
  Q as P
} from "./CTMy7kFf.js";
import {
  _ as S
} from "./WeJSoXqS.js";
import {
  u as w
} from "./B-ysUPuj.js";
import {
  c as x
} from "./CjrCyY9h.js";
import "./CLFR7Fhn.js";
import "./rkMPStGi.js";
const K = {};

function M(e, s) {
  const n = S;
  return o(), u(n, {
    title: ("t" in e ? e.t : t(m))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(m))("errors.location.subtitle"),
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
        } = w(),
        i = I(!1);
      n().then(() => i.value = !0), b(() => {
        a()
      });
      const c = N().memepad.isBlocked;
      B(c, r => r && a(), {
        immediate: !0
      });
      const d = E("memepadFrom", _) ?? _.NA;
      return x(), R().memepad.memepadInitiation({
        source: d
      }), (r, z) => {
        const f = C,
          y = Q,
          g = P;
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