import {
  f as y,
  o as n,
  G as p,
  e as t,
  z as r,
  am as g,
  d as h,
  aR as A,
  K as B,
  T as I,
  aS as N,
  aM as v,
  aT as E,
  aB as m,
  $ as R,
  c as _,
  b as l,
  aU as S
} from "./CcLbrFeo.js";
import {
  _ as T
} from "./Co0nMzaK.js";
import {
  _ as b
} from "./B1ZF3Kca.js";
import {
  c as M
} from "./CjrCyY9h.js";
import "./aFhFtxYC.js";
import "./CC7wLBK_.js";
const U = {};

function $(e, s) {
  const o = T;
  return n(), p(o, {
    title: ("t" in e ? e.t : t(r))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(r))("errors.location.subtitle"),
    "icon-size": 64,
    icon: ("imgResolver" in e ? e.imgResolver : t(g))("emoji/EarthAmericas"),
    "with-space": ""
  }, null, 8, ["title", "subtitle", "icon"])
}
const w = y(U, [
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
  F = h({
    __name: "memepad",
    setup(e) {
      const {
        _flow: {
          init: s,
          destroy: o
        }
      } = A(), a = B(!1);
      s().then(() => a.value = !0), I(() => {
        o()
      });
      const c = N().memepad.isBlocked;
      v(c, i => i && o(), {
        immediate: !0
      });
      const u = E("memepadFrom", m) ?? m.NA;
      return M(), R().memepad.memepadInitiation({
        source: u
      }), (i, P) => {
        const d = S,
          f = w,
          k = b;
        return t(a) ? (n(), p(d, {
          key: 0
        })) : t(c) ? (n(), _("div", x, [l(f)])) : (n(), _("div", C, [l(k)]))
      }
    }
  });
export {
  F as
  default
};