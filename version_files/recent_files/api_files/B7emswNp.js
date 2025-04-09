import {
  f as k,
  o as n,
  M as l,
  e as t,
  C as r,
  W as g,
  d as h,
  y as I,
  a2 as A,
  aY as N,
  U as v,
  aZ as B,
  aI as m,
  a8 as E,
  c as _,
  b as p,
  a_ as R
} from "./IIG1dV1T.js";
import {
  _ as b
} from "./w9rR_2PM.js";
import {
  _ as C
} from "./B2pk-guf.js";
import {
  u as M
} from "./B2aRd_zm.js";
import {
  c as S
} from "./CjrCyY9h.js";
import "./87RWik9K.js";
import "./B9f44bw8.js";
const U = {};

function w(e, s) {
  const o = b;
  return n(), l(o, {
    title: ("t" in e ? e.t : t(r))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(r))("errors.location.subtitle"),
    "icon-size": 64,
    icon: ("imgResolver" in e ? e.imgResolver : t(g))("emoji/EarthAmericas"),
    "with-space": ""
  }, null, 8, ["title", "subtitle", "icon"])
}
const x = k(U, [
    ["render", w]
  ]),
  P = {
    key: 1,
    class: "page"
  },
  T = {
    key: 2,
    class: "page"
  },
  F = h({
    __name: "memepad",
    setup(e) {
      const {
        _flow: {
          init: s,
          destroy: o
        }
      } = M(), a = I(!1);
      s().then(() => a.value = !0), A(() => {
        o()
      });
      const i = N().memepad.isBlocked;
      v(i, c => c && o(), {
        immediate: !0
      });
      const u = B("memepadFrom", m) ?? m.NA;
      return S(), E().memepad.memepadInitiation({
        source: u
      }), (c, K) => {
        const d = R,
          f = x,
          y = C;
        return t(a) ? (n(), l(d, {
          key: 0
        })) : t(i) ? (n(), _("div", P, [p(f)])) : (n(), _("div", T, [p(y)]))
      }
    }
  });
export {
  F as
  default
};