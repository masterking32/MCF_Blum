import {
  _ as b,
  b as v
} from "./DJmHoNse.js";
import {
  _ as R
} from "./wMudbX3E.js";
import {
  d as u,
  ay as h,
  cw as k,
  a8 as P,
  o as s,
  c as _,
  e as t,
  G as i,
  am as $,
  z as a,
  b as p,
  f as O,
  ac as j
} from "./CwaQmw2d.js";
import "./CoxSQ8KW.js";
import "./DT-cTtyN.js";
import "./Cs_-0Wvc.js";
import "./DSO2vn9M.js";
const w = {
    class: "pages-stay-secure-stay-secure"
  },
  B = u({
    __name: "StaySecure",
    setup(l) {
      const {
        handleStaySecureQueryParams: n,
        markStaySecurePageAsSeen: c,
        onStaySecurePageCaptchaReject: o,
        onStaySecurePageCaptchaResolve: m,
        secureOptionsModals: S
      } = h(), y = k();
      return P(async () => {
        c(), await n()
      }), (e, r) => {
        const d = b,
          g = R,
          f = v;
        return s(), _("div", w, [t(y).isStaySecurePageCaptchaVisible ? (s(), i(d, {
          key: 0,
          appearance: "always",
          onResolve: t(m),
          onReject: t(o)
        }, null, 8, ["onResolve", "onReject"])) : (s(), i(g, {
          key: 1,
          icon: ("imgResolver" in e ? e.imgResolver : t($))("emoji/Lightning"),
          title: ("t" in e ? e.t : t(a))("secure_options.stay_secure.title"),
          subtitle: ("t" in e ? e.t : t(a))("secure_options.stay_secure.subtitle"),
          "button-label": ("t" in e ? e.t : t(a))("secure_options.stay_secure.btn"),
          onButton: r[0] || (r[0] = K => t(S).main.show())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])), p(f)])
      }
    }
  }),
  C = O(B, [
    ["__scopeId", "data-v-c7244000"]
  ]),
  M = {
    class: "stay-secure-page page"
  },
  L = u({
    __name: "stay-secure",
    setup(l) {
      return j().replace({
        name: "index"
      }), (n, c) => {
        const o = C;
        return s(), _("div", M, [p(o)])
      }
    }
  });
export {
  L as
  default
};