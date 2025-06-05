import {
  d,
  aN as l,
  a3 as u,
  ak as _,
  ad as s,
  o as t,
  c as o,
  e as p,
  z as f,
  bc as m,
  ah as r,
  ai as v,
  al as y,
  Q as h,
  f as w
} from "./P2UesN5H.js";
const k = {
    class: "pages-wallet-id page"
  },
  g = {
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
        const i = h;
        return t(), o("div", k, [p(n) === void 0 ? (t(), f(i, {
          key: 0
        })) : (t(), o("div", g))])
      }
    }
  }),
  C = w(B, [
    ["__scopeId", "data-v-0028c2bd"]
  ]);
export {
  C as
  default
};