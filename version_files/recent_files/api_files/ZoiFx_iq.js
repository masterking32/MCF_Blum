import {
  _ as b,
  a as v
} from "./BufJdFh9.js";
import {
  _ as h
} from "./DsKEV7jD.js";
import {
  d as R,
  at as k,
  cC as P,
  K as $,
  o as s,
  c as i,
  e as t,
  y as r,
  a8 as C,
  z as n,
  b as u,
  f as _
} from "./BWHpvzE-.js";
import "./nDYoAjb7.js";
import "./Bvojrs0f.js";
import "./DBXJ1HIh.js";
import "./BNE4iQF0.js";
import "./CP_pkFyg.js";
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
  w = {},
  K = {
    class: "stay-secure-page page"
  };

function M(p, a) {
  const o = B;
  return s(), i("div", K, [u(o)])
}
const q = _(w, [
  ["render", M]
]);
export {
  q as
  default
};