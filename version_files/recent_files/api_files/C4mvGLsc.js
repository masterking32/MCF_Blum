import {
  f as k,
  o as n,
  M as p,
  e as t,
  C as r,
  V as g,
  d as h,
  aW as A,
  y as I,
  a1 as N,
  aX as v,
  T as B,
  aY as E,
  aH as _,
  a7 as R,
  c as m,
  b as l,
  aZ as b
} from "./DAWpDGzr.js";
import {
  _ as C
} from "./ZpbYkB14.js";
import {
  _ as M
} from "./CXUCu0g7.js";
import {
  c as S
} from "./CjrCyY9h.js";
import "./CaoE7OLa.js";
import "./p-EggjsI.js";
const T = {};

function w(e, s) {
  const o = C;
  return n(), p(o, {
    title: ("t" in e ? e.t : t(r))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(r))("errors.location.subtitle"),
    "icon-size": 64,
    icon: ("imgResolver" in e ? e.imgResolver : t(g))("emoji/EarthAmericas"),
    "with-space": ""
  }, null, 8, ["title", "subtitle", "icon"])
}
const x = k(T, [
    ["render", w]
  ]),
  P = {
    key: 1,
    class: "page"
  },
  U = {
    key: 2,
    class: "page"
  },
  z = h({
    __name: "memepad",
    setup(e) {
      const {
        _flow: {
          init: s,
          destroy: o
        }
      } = A(), a = I(!1);
      s().then(() => a.value = !0), N(() => {
        o()
      });
      const c = v().memepad.isBlocked;
      B(c, i => i && o(), {
        immediate: !0
      });
      const u = E("memepadFrom", _) ?? _.NA;
      return S(), R().memepad.memepadInitiation({
        source: u
      }), (i, K) => {
        const d = b,
          f = x,
          y = M;
        return t(a) ? (n(), p(d, {
          key: 0
        })) : t(c) ? (n(), m("div", P, [l(f)])) : (n(), m("div", U, [l(y)]))
      }
    }
  });
export {
  z as
  default
};