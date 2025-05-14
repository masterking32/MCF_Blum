import {
  d,
  aG as l,
  U as u,
  ab as _,
  ai as s,
  o as t,
  c as o,
  e as p,
  N as f,
  bd as m,
  a8 as r,
  a9 as v,
  ac as y,
  ad as w,
  f as h
} from "./DkS1dxhG.js";
const g = {
    class: "pages-wallet-id page"
  },
  k = {
    key: 1,
    class: "container"
  },
  B = d({
    __name: "[id]",
    setup(R) {
      const c = async () => {
        const {
          id: e
        } = m().params;
        if (typeof e != "string") throw r("Invalid wallet id");
        const a = await v.getCurrencyById(e);
        if (a.err) {
          if (a.code === 404) {
            y().error("Currency not found"), s().replace({
              name: "wallet"
            });
            return
          }
          throw r("Failed to get currency")
        }
        return {
          currency: a.data
        }
      }, n = l(void 0);
      return c().then(e => n.value = e), u().initHandler(() => {
        const e = _().previousRoute.value;
        s().push({
          name: e ? e.name : "wallet"
        })
      }, "wallet-id"), (e, a) => {
        const i = w;
        return t(), o("div", g, [p(n) === void 0 ? (t(), f(i, {
          key: 0
        })) : (t(), o("div", k))])
      }
    }
  }),
  b = h(B, [
    ["__scopeId", "data-v-0028c2bd"]
  ]);
export {
  b as
  default
};