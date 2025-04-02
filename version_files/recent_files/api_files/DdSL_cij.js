import {
  _ as d
} from "./8hy96fXN.js";
import {
  d as l,
  aP as u,
  R as _,
  a5 as p,
  aa as s,
  o as t,
  c as o,
  e as f,
  M as m,
  bi as v,
  a2 as r,
  a3 as y,
  a6 as w,
  f as h
} from "./GkJ71AXb.js";
const g = {
    class: "pages-wallet-id page"
  },
  k = {
    key: 1,
    class: "container"
  },
  R = l({
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
        const i = d;
        return t(), o("div", g, [f(n) === void 0 ? (t(), m(i, {
          key: 0
        })) : (t(), o("div", k))])
      }
    }
  }),
  I = h(R, [
    ["__scopeId", "data-v-0028c2bd"]
  ]);
export {
  I as
  default
};