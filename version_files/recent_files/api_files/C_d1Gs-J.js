import {
  f as k,
  o as n,
  N as l,
  e as t,
  C as r,
  X as g,
  d as h,
  y as N,
  a3 as A,
  a$ as I,
  V as v,
  ad as B,
  aK as m,
  a9 as E,
  c as _,
  b as p,
  b0 as b
} from "./C8Db5TeO.js";
import {
  _ as R
} from "./DwattNX2.js";
import {
  _ as C
} from "./Cu_G5LVe.js";
import {
  u as S
} from "./C86C4SjP.js";
import {
  c as $
} from "./CjrCyY9h.js";
import "./96ZsEyRA.js";
import "./D0Q_M9gJ.js";
const w = {};

function x(e, s) {
  const o = R;
  return n(), l(o, {
    title: ("t" in e ? e.t : t(r))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(r))("errors.location.subtitle"),
    "icon-size": 64,
    icon: ("imgResolver" in e ? e.imgResolver : t(g))("emoji/EarthAmericas"),
    "with-space": ""
  }, null, 8, ["title", "subtitle", "icon"])
}
const K = k(w, [
    ["render", x]
  ]),
  M = {
    key: 1,
    class: "page"
  },
  P = {
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
      } = S(), a = N(!1);
      s().then(() => a.value = !0), A(() => {
        o()
      });
      const i = I().memepad.isBlocked;
      v(i, c => c && o(), {
        immediate: !0
      });
      const u = B("memepadFrom", m) ?? m.NA;
      return $(), E().memepad.memepadInitiation({
        source: u
      }), (c, U) => {
        const d = b,
          f = K,
          y = C;
        return t(a) ? (n(), l(d, {
          key: 0
        })) : t(i) ? (n(), _("div", M, [p(f)])) : (n(), _("div", P, [p(y)]))
      }
    }
  });
export {
  F as
  default
};