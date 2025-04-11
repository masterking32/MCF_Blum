import {
  _ as b,
  a as v
} from "./JeXF02wu.js";
import {
  _ as h
} from "./Cqq1dawi.js";
import {
  d as R,
  aB as k,
  cH as P,
  ak as $,
  o as s,
  c as i,
  e as t,
  M as r,
  W as B,
  C as n,
  b as u,
  f as _
} from "./C6ycOBuK.js";
import "./dgrI4AI7.js";
import "./Ce3hjnU9.js";
import "./CX4xpWp4.js";
import "./Bay6_qds.js";
import "./pSTeQkbo.js";
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
          icon: ("imgResolver" in e ? e.imgResolver : t(B))("emoji/Lightning"),
          title: ("t" in e ? e.t : t(n))("secure_options.stay_secure.title"),
          subtitle: ("t" in e ? e.t : t(n))("secure_options.stay_secure.subtitle"),
          "button-label": ("t" in e ? e.t : t(n))("secure_options.stay_secure.btn"),
          onButton: c[0] || (c[0] = N => t(S).main.show())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])), u(g)])
      }
    }
  }),
  j = _(O, [
    ["__scopeId", "data-v-c7244000"]
  ]),
  M = {},
  w = {
    class: "stay-secure-page page"
  };

function K(p, a) {
  const o = j;
  return s(), i("div", w, [u(o)])
}
const W = _(M, [
  ["render", K]
]);
export {
  W as
  default
};