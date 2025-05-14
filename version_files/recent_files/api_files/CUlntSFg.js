import {
  _ as b,
  a as v
} from "./Cr92bgwS.js";
import {
  _ as h
} from "./DALkbPAI.js";
import {
  d as R,
  an as k,
  cB as P,
  ag as $,
  o as s,
  c as i,
  e as t,
  N as r,
  a0 as B,
  C as n,
  b as u,
  f as _
} from "./DH7rD_-R.js";
import "./BXd7SB8J.js";
import "./BTy6XQLp.js";
import "./CMPhozjB.js";
import "./DUb3cRtU.js";
import "./Bta5jG-B.js";
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
          onButton: c[0] || (c[0] = K => t(S).main.show())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])), u(g)])
      }
    }
  }),
  j = _(O, [
    ["__scopeId", "data-v-c7244000"]
  ]),
  w = {},
  M = {
    class: "stay-secure-page page"
  };

function N(p, a) {
  const o = j;
  return s(), i("div", M, [u(o)])
}
const z = _(w, [
  ["render", N]
]);
export {
  z as
  default
};