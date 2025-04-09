import {
  _ as l
} from "./B3WRsq2s.js";
import {
  d,
  aR as u,
  T as _,
  a6 as p,
  ab as s,
  o as t,
  c as o,
  e as f,
  M as m,
  bl as v,
  a3 as r,
  a4 as y,
  a7 as w,
  f as h
} from "./BV1dF4C1.js";
const g = {
    class: "pages-wallet-id page"
  },
  k = {
    key: 1,
    class: "container"
  },
  R = d({
    __name: "[id]",
    setup(B) {
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
        const i = l;
        return t(), o("div", g, [f(n) === void 0 ? (t(), m(i, {
          key: 0
        })) : (t(), o("div", k))])
      }
    }
  }),
  C = h(R, [
    ["__scopeId", "data-v-0028c2bd"]
  ]);
export {
  C as
  default
};