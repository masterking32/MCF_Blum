import {
  _ as b,
  b as v
} from "./DUDhzfOo.js";
import {
  _ as h
} from "./CbNaXUH2.js";
import {
  d as R,
  ay as k,
  cw as P,
  a8 as $,
  o as s,
  c as i,
  e as t,
  G as r,
  am as O,
  z as n,
  b as u,
  f as _
} from "./Cdrd5uYj.js";
import "./JeyGELIn.js";
import "./CHXfFDR_.js";
import "./Cdo0kTLJ.js";
import "./BEFJCiIm.js";
const j = {
    class: "pages-stay-secure-stay-secure"
  },
  w = R({
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
          onButton: c[0] || (c[0] = N => t(S).main.show())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])), u(g)])
      }
    }
  }),
  B = _(w, [
    ["__scopeId", "data-v-c7244000"]
  ]),
  C = {},
  M = {
    class: "stay-secure-page page"
  };

function K(p, a) {
  const o = B;
  return s(), i("div", M, [u(o)])
}
const Q = _(C, [
  ["render", K]
]);
export {
  Q as
  default
};