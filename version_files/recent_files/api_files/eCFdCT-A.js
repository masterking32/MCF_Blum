import {
  _ as c
} from "./BYwhiZrf.js";
import {
  _
} from "./CX1JzNlD.js";
import {
  d as m,
  o as p,
  c as l,
  b as r,
  e,
  z as j,
  f as u,
  bf as f,
  j as a,
  O as h,
  ac as H,
  G as g
} from "./MBrxpesf.js";
import {
  a as b
} from "./DDmCUNeW.js";
import "./ClsK5JHb.js";
import "./B3GYFcVc.js";
import "./DlFE4Gkj.js";
import "./C42QYMOC.js";
import "./DJlBMuqu.js";
import "./BZt6E_f9.js";
const k = {
    class: "memepad-jetton-page-holders"
  },
  P = m({
    __name: "PageHolders",
    props: {
      jetton: {},
      jettonHolders: {},
      jettonInformation: {}
    },
    setup(i) {
      return (t, o) => {
        const n = c,
          s = _;
        return p(), l("div", k, [r(n, {
          title: ("t" in t ? t.t : e(j))("memepad.holders.title", {
            ticker: t.jetton.ticker
          }),
          jetton: t.jetton
        }, null, 8, ["title", "jetton"]), r(s, {
          jetton: t.jetton,
          "jetton-holders": t.jettonHolders,
          "jetton-information": t.jettonInformation
        }, null, 8, ["jetton", "jetton-holders", "jetton-information"])])
      }
    }
  }),
  I = u(P, [
    ["__scopeId", "data-v-588f4547"]
  ]),
  G = m({
    inheritAttrs: !1,
    __name: "holders",
    setup(i) {
      const t = f(),
        o = a(() => t.jetton),
        n = a(() => t.jettonInformation),
        s = a(() => t.jettonHolders);
      return b("memepad-jetton-shortname-about-holders"), h().initHandler(() => {
        H().push({
          name: "memepad-jetton-shortname-about",
          params: {
            shortname: o.value.shortname
          }
        })
      }, "memepad-jetton-shortname-about-holders"), (B, v) => {
        const d = I;
        return p(), g(d, {
          jetton: e(o),
          "jetton-holders": e(s),
          "jetton-information": e(n)
        }, null, 8, ["jetton", "jetton-holders", "jetton-information"])
      }
    }
  });
export {
  G as
  default
};