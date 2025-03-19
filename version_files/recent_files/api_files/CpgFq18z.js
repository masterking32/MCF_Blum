import {
  f as l,
  o as n,
  G as u,
  e as t,
  z as r,
  am as g,
  d as h,
  K as I,
  T as b,
  aK as v,
  aF as A,
  aL as N,
  at as m,
  $ as B,
  c as _,
  b as p,
  aM as E
} from "./D3vp-PHy.js";
import {
  _ as R
} from "./BbyNlrpn.js";
import {
  _ as K
} from "./Bfm323Wz.js";
import {
  u as M
} from "./DpJdyk5r.js";
import {
  c as S
} from "./CjrCyY9h.js";
import "./BOuOQgvB.js";
import "./BHv4xUi1.js";
import "./2b0PpkJe.js";
import "./CzEnx2Cd.js";
const T = {};

function $(e, s) {
  const o = R;
  return n(), u(o, {
    title: ("t" in e ? e.t : t(r))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(r))("errors.location.subtitle"),
    "icon-size": 64,
    icon: ("imgResolver" in e ? e.imgResolver : t(g))("emoji/EarthAmericas"),
    "with-space": ""
  }, null, 8, ["title", "subtitle", "icon"])
}
const w = l(T, [
    ["render", $]
  ]),
  x = {
    key: 1,
    class: "page"
  },
  C = {
    key: 2,
    class: "page"
  },
  L = h({
    __name: "memepad",
    setup(e) {
      const {
        _flow: {
          init: s,
          destroy: o
        }
      } = M(), a = I(!1);
      s().then(() => a.value = !0), b(() => {
        o()
      });
      const c = v().memepad.isBlocked;
      A(c, i => i && o());
      const d = N("memepadFrom", m) ?? m.NA;
      return S(), B().memepad.memepadInitiation({
        source: d
      }), (i, U) => {
        const f = E,
          k = w,
          y = K;
        return t(a) ? (n(), u(f, {
          key: 0
        })) : t(c) ? (n(), _("div", x, [p(k)])) : (n(), _("div", C, [p(y)]))
      }
    }
  }),
  q = l(L, [
    ["__scopeId", "data-v-bd01b44b"]
  ]);
export {
  q as
  default
};