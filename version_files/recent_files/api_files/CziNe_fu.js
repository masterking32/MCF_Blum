import {
  d,
  aM as l,
  a3 as u,
  aj as _,
  ao as s,
  o as t,
  c as o,
  e as p,
  y as f,
  bb as m,
  ag as r,
  ah as v,
  ak as y,
  P as h,
  f as w
} from "./YXPW7IJg.js";
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
        const i = h;
        return t(), o("div", g, [p(n) === void 0 ? (t(), f(i, {
          key: 0
        })) : (t(), o("div", k))])
      }
    }
  }),
  b = w(B, [
    ["__scopeId", "data-v-0028c2bd"]
  ]);
export {
  b as
  default
};