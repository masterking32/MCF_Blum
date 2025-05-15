import {
  _ as l
} from "./DZtIfGR6.js";
import {
  _
} from "./DjbbxcqF.js";
import {
  d as m,
  o as p,
  c,
  b as r,
  e,
  C as j,
  f as u,
  bl as f,
  j as a,
  U as h,
  ai as H,
  N as g
} from "./jpzGFStf.js";
import {
  a as b
} from "./CT1mDmbE.js";
import "./DsymdmTc.js";
import "./VmqcnqKa.js";
import "./P1wTr3YD.js";
import "./Cov7EpLg.js";
import "./Ce8OHEp9.js";
import "./jDDblI53.js";
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
        const n = l,
          s = _;
        return p(), c("div", k, [r(n, {
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
    ["__scopeId", "data-v-f846198d"]
  ]),
  R = m({
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
  R as
  default
};