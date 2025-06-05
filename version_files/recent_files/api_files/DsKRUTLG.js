import {
  _ as b,
  a as v
} from "./DbU_jN9D.js";
import {
  _ as h
} from "./DA1mhlG1.js";
import {
  d as R,
  at as k,
  cF as P,
  L as $,
  o as s,
  c as i,
  e as t,
  z as r,
  a8 as O,
  A as n,
  b as u,
  f as _
} from "./BkRdN3CR.js";
import "./BGcSFzIa.js";
import "./CEojg05g.js";
import "./RUxoXSp4.js";
import "./DybcgIe9.js";
import "./r4eKNJIi.js";
const j = {
    class: "pages-stay-secure-stay-secure"
  },
  B = R({
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
        return s(), i("div", j, [t(y).isStaySecurePageCaptchaVisible ? (s(), r(d, {
          key: 0,
          appearance: "always",
          onResolve: t(m),
          onReject: t(l)
        }, null, 8, ["onResolve", "onReject"])) : (s(), r(f, {
          key: 1,
          icon: ("imgResolver" in e ? e.imgResolver : t(O))("emoji/Lightning"),
          title: ("t" in e ? e.t : t(n))("secure_options.stay_secure.title"),
          subtitle: ("t" in e ? e.t : t(n))("secure_options.stay_secure.subtitle"),
          "button-label": ("t" in e ? e.t : t(n))("secure_options.stay_secure.btn"),
          onButton: c[0] || (c[0] = K => t(S).main.show())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])), u(g)])
      }
    }
  }),
  C = _(B, [
    ["__scopeId", "data-v-c7244000"]
  ]),
  w = {},
  M = {
    class: "stay-secure-page page"
  };

function A(p, a) {
  const o = C;
  return s(), i("div", M, [u(o)])
}
const T = _(w, [
  ["render", A]
]);
export {
  T as
  default
};