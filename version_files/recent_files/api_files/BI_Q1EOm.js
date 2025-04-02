import {
  _ as b,
  b as v
} from "./SHxx3mln.js";
import {
  _ as h
} from "./CiZWYFl0.js";
import {
  d as R,
  aF as k,
  cz as P,
  aj as $,
  o as s,
  c as i,
  e as t,
  M as r,
  V as j,
  C as n,
  b as u,
  f as _
} from "./GkJ71AXb.js";
import "./DGSIcZZQ.js";
import "./vEzqO8Uo.js";
import "./DQBmQleD.js";
import "./CRePYX_p.js";
const C = {
    class: "pages-stay-secure-stay-secure"
  },
  O = R({
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
        return s(), i("div", C, [t(y).isStaySecurePageCaptchaVisible ? (s(), r(d, {
          key: 0,
          appearance: "always",
          onResolve: t(m),
          onReject: t(l)
        }, null, 8, ["onResolve", "onReject"])) : (s(), r(f, {
          key: 1,
          icon: ("imgResolver" in e ? e.imgResolver : t(j))("emoji/Lightning"),
          title: ("t" in e ? e.t : t(n))("secure_options.stay_secure.title"),
          subtitle: ("t" in e ? e.t : t(n))("secure_options.stay_secure.subtitle"),
          "button-label": ("t" in e ? e.t : t(n))("secure_options.stay_secure.btn"),
          onButton: c[0] || (c[0] = K => t(S).main.show())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])), u(g)])
      }
    }
  }),
  B = _(O, [
    ["__scopeId", "data-v-c7244000"]
  ]),
  M = {},
  w = {
    class: "stay-secure-page page"
  };

function V(p, a) {
  const o = B;
  return s(), i("div", w, [u(o)])
}
const Q = _(M, [
  ["render", V]
]);
export {
  Q as
  default
};