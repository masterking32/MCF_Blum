import {
  _ as b,
  a as v
} from "./BRti5xiK.js";
import {
  _ as h
} from "./Cdakh6hV.js";
import {
  d as R,
  at as k,
  cC as P,
  L as $,
  o as s,
  c as i,
  e as t,
  z as r,
  a8 as C,
  A as n,
  b as u,
  f as _
} from "./Dy2of55E.js";
import "./BxXfhuu3.js";
import "./3R09-6L4.js";
import "./cn9qoHZw.js";
import "./xen9342n.js";
import "./DMnre1ol.js";
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
          onButton: c[0] || (c[0] = K => t(S).main.show())
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

function A(p, a) {
  const o = B;
  return s(), i("div", M, [u(o)])
}
const q = _(w, [
  ["render", A]
]);
export {
  q as
  default
};