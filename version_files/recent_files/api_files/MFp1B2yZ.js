import {
  _ as d
} from "./CCqriBvA.js";
import {
  d as l,
  aT as u,
  U as _,
  a7 as p,
  ae as s,
  o as t,
  c as o,
  e as f,
  N as m,
  bn as v,
  a4 as r,
  a5 as y,
  a8 as w,
  f as h
} from "./DmEY5NHF.js";
const g = {
    class: "pages-wallet-id page"
  },
  k = {
    key: 1,
    class: "container"
  },
  B = l({
    __name: "[id]",
    setup(R) {
      const c = async () => {
        const {
          id: e
        } = v().params;
        if (typeof e != "string") throw r("Invalid wallet id");
        const a = await y.getCurrencyById(e);
        if (a.err) {
          if (a.code === 404) {
            w().error("Currency not found"), s().replace({
              name: "wallet"
            });
            return
          }
          throw r("Failed to get currency")
        }
        return {
          currency: a.data
        }
      }, n = u(void 0);
      return c().then(e => n.value = e), _().initHandler(() => {
        const e = p().previousRoute.value;
        s().push({
          name: e ? e.name : "wallet"
        })
      }, "wallet-id"), (e, a) => {
        const i = d;
        return t(), o("div", g, [f(n) === void 0 ? (t(), m(i, {
          key: 0
        })) : (t(), o("div", k))])
      }
    }
  }),
  I = h(B, [
    ["__scopeId", "data-v-0028c2bd"]
  ]);
export {
  I as
  default
};