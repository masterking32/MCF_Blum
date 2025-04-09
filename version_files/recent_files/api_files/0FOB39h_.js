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
  aZ as N,
  U as v,
  a_ as B,
  aI as m,
  a8 as E,
  c as _,
  b as p,
  a$ as R
} from "./Cbo9LC6p.js";
import {
  _ as b
} from "./BaSIXO7X.js";
import {
  _ as C
} from "./DdW72Z7B.js";
import {
  u as M
} from "./Bh_6txVy.js";
import {
  c as S
} from "./CjrCyY9h.js";
import "./fsx4Y4h1.js";
import "./BCT2FObz.js";
const U = {};

function $(e, s) {
  const o = b;
  return n(), l(o, {
    title: ("t" in e ? e.t : t(r))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(r))("errors.location.subtitle"),
    "icon-size": 64,
    icon: ("imgResolver" in e ? e.imgResolver : t(g))("emoji/EarthAmericas"),
    "with-space": ""
  }, null, 8, ["title", "subtitle", "icon"])
}
const w = k(U, [
    ["render", $]
  ]),
  x = {
    key: 1,
    class: "page"
  },
  P = {
    key: 2,
    class: "page"
  },
  V = h({
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
          f = w,
          y = C;
        return t(a) ? (n(), l(d, {
          key: 0
        })) : t(i) ? (n(), _("div", x, [p(f)])) : (n(), _("div", P, [p(y)]))
      }
    }
  });
export {
  V as
  default
};