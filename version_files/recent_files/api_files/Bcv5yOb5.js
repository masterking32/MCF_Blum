import {
  f as l,
  o as n,
  G as u,
  e as t,
  z as r,
  am as g,
  d as h,
  K as I,
  T as N,
  aL as b,
  aF as v,
  aM as A,
  at as m,
  $ as B,
  c as _,
  b as p,
  aN as E
} from "./HMtIIKN9.js";
import {
  _ as R
} from "./Dn5tEXvb.js";
import {
  _ as M
} from "./CcZX2ME1.js";
import {
  u as S
} from "./DBB-sfjw.js";
import {
  c as T
} from "./CjrCyY9h.js";
import "./Bz1irRkk.js";
import "./BnMR0Hvn.js";
import "./DokjUYsk.js";
import "./CxEm-GmM.js";
const $ = {};

function w(e, s) {
  const o = R;
  return n(), u(o, {
    title: ("t" in e ? e.t : t(r))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(r))("errors.location.subtitle"),
    "icon-size": 64,
    icon: ("imgResolver" in e ? e.imgResolver : t(g))("emoji/EarthAmericas"),
    "with-space": ""
  }, null, 8, ["title", "subtitle", "icon"])
}
const x = l($, [
    ["render", w]
  ]),
  C = {
    key: 1,
    class: "page"
  },
  K = {
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
      } = S(), a = I(!1);
      s().then(() => a.value = !0), N(() => {
        o()
      });
      const c = b().memepad.isBlocked;
      v(c, i => i && o());
      const d = A("memepadFrom", m) ?? m.NA;
      return T(), B().memepad.memepadInitiation({
        source: d
      }), (i, U) => {
        const f = E,
          k = x,
          y = M;
        return t(a) ? (n(), u(f, {
          key: 0
        })) : t(c) ? (n(), _("div", C, [p(k)])) : (n(), _("div", K, [p(y)]))
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