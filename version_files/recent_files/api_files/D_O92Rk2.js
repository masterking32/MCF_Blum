import {
  _ as b,
  a as v
} from "./CmiGOXGI.js";
import {
  _ as h
} from "./DdCdTu0K.js";
import {
  d as R,
  aD as k,
  cI as P,
  ac as $,
  o as s,
  c as i,
  e as t,
  N as r,
  X as C,
  C as n,
  b as u,
  f as _
} from "./BZz9wj6Z.js";
import "./hGtteMUW.js";
import "./BTmgmGlp.js";
import "./CmXKpe7A.js";
import "./DjC5wntP.js";
import "./FLeABffM.js";
const O = {
    class: "pages-stay-secure-stay-secure"
  },
  j = R({
    __name: "StaySecure",
    setup(p) {
      const {
        handleStaySecureQueryParams: a,
        markStaySecurePageAsSeen: o,
        onStaySecurePageCaptchaReject: l,
        onStaySecurePageCaptchaResolve: m,
        secureOptionsModals: S
      } = k(), y = P();
      return $(async () => {
        o(), await a()
      }), (e, c) => {
        const d = b,
          f = h,
          g = v;
        return s(), i("div", O, [t(y).isStaySecurePageCaptchaVisible ? (s(), r(d, {
          key: 0,
          appearance: "always",
          onResolve: t(m),
          onReject: t(l)
        }, null, 8, ["onResolve", "onReject"])) : (s(), r(f, {
          key: 1,
          icon: ("imgResolver" in e ? e.imgResolver : t(C))("emoji/Lightning"),
          title: ("t" in e ? e.t : t(n))("secure_options.stay_secure.title"),
          subtitle: ("t" in e ? e.t : t(n))("secure_options.stay_secure.subtitle"),
          "button-label": ("t" in e ? e.t : t(n))("secure_options.stay_secure.btn"),
          onButton: c[0] || (c[0] = I => t(S).main.show())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])), u(g)])
      }
    }
  }),
  B = _(j, [
    ["__scopeId", "data-v-c7244000"]
  ]),
  w = {},
  M = {
    class: "stay-secure-page page"
  };

function N(p, a) {
  const o = B;
  return s(), i("div", M, [u(o)])
}
const X = _(w, [
  ["render", N]
]);
export {
  X as
  default
};