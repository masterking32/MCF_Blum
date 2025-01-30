import {
  _ as u
} from "./B9nPrNBv.js";
import {
  d as _,
  aC as l,
  Q as o,
  Z as p,
  ad as r,
  o as a,
  c as s,
  e as m,
  G as f,
  W as c,
  X as v,
  $ as y,
  f as h
} from "./guWQ5rpf.js";
const w = {
    class: "pages-wallet-id page"
  },
  g = {
    key: 1,
    class: "container"
  },
  k = _({
    __name: "[id]",
    setup(R) {
      const i = async () => {
        const {
          id: e
        } = o().params;
        if (typeof e != "string") throw c("Invalid wallet id");
        const t = await v.getCurrencyById(e);
        if (t.err) {
          if (t.code === 404) {
            y().error("Currency not found"), r().replace({
              name: "wallet"
            });
            return
          }
          throw c("Failed to get currency")
        }
        return {
          currency: t.data
        }
      }, n = l(void 0);
      return i().then(e => n.value = e), o().meta.back = (() => {
        const e = p().previousRoute.value;
        return () => r().push({
          name: e ? e.name : "wallet"
        })
      })(), (e, t) => {
        const d = u;
        return a(), s("div", w, [m(n) === void 0 ? (a(), f(d, {
          key: 0
        })) : (a(), s("div", g))])
      }
    }
  }),
  C = h(k, [
    ["__scopeId", "data-v-08e8d797"]
  ]);
export {
  C as
  default
};