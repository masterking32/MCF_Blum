import {
  _ as b,
  a as v
} from "./DUhGNNrn.js";
import {
  _ as h
} from "./BaSIXO7X.js";
import {
  d as R,
  aG as k,
  cH as P,
  ak as $,
  o as s,
  c as i,
  e as t,
  M as r,
  W as C,
  C as n,
  b as u,
  f as _
} from "./Cbo9LC6p.js";
import "./DCCbGgRz.js";
import "./DY3IUnyG.js";
import "./B0Xhtl34.js";
import "./fsx4Y4h1.js";
import "./BCT2FObz.js";
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
          onButton: c[0] || (c[0] = N => t(S).main.show())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])), u(g)])
      }
    }
  }),
  B = _(j, [
    ["__scopeId", "data-v-c7244000"]
  ]),
  M = {},
  w = {
    class: "stay-secure-page page"
  };

function K(p, a) {
  const o = B;
  return s(), i("div", w, [u(o)])
}
const T = _(M, [
  ["render", K]
]);
export {
  T as
  default
};