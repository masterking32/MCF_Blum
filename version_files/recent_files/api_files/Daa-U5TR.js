import {
  _
} from "./BzjIj5x0.js";
import {
  _ as c
} from "./D4OA8D9u.js";
import {
  d as m,
  o as p,
  c as l,
  b as r,
  e,
  A as j,
  f as u,
  bs as f,
  j as a,
  a3 as h,
  ad as H,
  z as g
} from "./aUn4L-is.js";
import {
  a as b
} from "./BYDJ_6X1.js";
import "./B_VbrOBQ.js";
import "./Dl7VDv3R.js";
import "./D_uJVHJf.js";
import "./C4xhVgpL.js";
import "./DYzRnTQy.js";
import "./DIPJ66mM.js";
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
        const n = _,
          s = c;
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
    ["__scopeId", "data-v-f846198d"]
  ]),
  O = m({
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
  O as
  default
};