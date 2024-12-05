import {
  _ as h
} from "./6B_Xr7uX.js";
import {
  d as k,
  _ as b
} from "./Dv1uv4IR.js";
import {
  _ as w
} from "./RYa8JR7-.js";
import {
  d as v,
  a8 as B,
  a as n,
  c as r,
  k as f,
  b as s,
  w as x,
  e as i,
  t as d,
  m as l,
  ar as D,
  j as y,
  cW as S,
  ay as u,
  u as C,
  J as p,
  L as m,
  K as I,
  G as R
} from "./B8dH5Zvz.js";
import "./Dkna_G2k.js";
const K = {
    class: "pages-wallet-block-details-banner"
  },
  V = {
    class: "compose"
  },
  $ = ["src"],
  U = {
    class: "name"
  },
  W = {
    class: "value"
  },
  j = v({
    __name: "Banner",
    props: {
      point: {
        type: Object,
        required: !0
      }
    },
    setup(t) {
      return (_, o) => {
        const e = b,
          a = w,
          c = B("img-error");
        return n(), r("div", K, [f(e, {
          class: "background"
        }), s("div", V, [x(s("img", {
          src: t.point.imageUrl,
          alt: "Currency logo"
        }, null, 8, $), [
          [c, i(k)]
        ]), s("div", U, d(t.point.name), 1), t.point.fiatValue.USD === void 0 ? (n(), l(a, {
          key: 0,
          class: "fiat-value-skeleton"
        })) : (n(), l(D(t.point.fiatValue.USD.defaultH), {
          key: 1,
          class: "fiat-value"
        })), s("div", W, d(t.point.balance.defaultWithSymbol), 1)])])
      }
    }
  }),
  A = y(j, [
    ["__scopeId", "data-v-7f9246b7"]
  ]),
  N = {
    class: "pages-wallet-id page"
  },
  P = {
    key: 1,
    class: "container"
  },
  q = v({
    __name: "[id]",
    setup(t) {
      const _ = async () => {
        const {
          id: e
        } = u().params;
        if (typeof e != "string") throw m("Invalid wallet id");
        const a = await I.getCurrencyById(e);
        if (a.err) {
          if (a.code === 404) {
            R().bottom.error("Currency not found"), p().replace({
              name: "wallet"
            });
            return
          }
          throw m("Failed to get currency")
        }
        return {
          currency: a.data
        }
      }, o = S(void 0);
      return _().then(e => o.value = e), u().meta.back = (() => {
        const e = C().previousRoute.value;
        return () => p().push({
          name: e ? e.name : "wallet"
        })
      })(), (e, a) => {
        const c = h,
          g = A;
        return n(), r("div", N, [i(o) === void 0 ? (n(), l(c, {
          key: 0
        })) : (n(), r("div", P, [f(g, {
          point: i(o).currency,
          class: "banner"
        }, null, 8, ["point"])]))])
      }
    }
  }),
  L = y(q, [
    ["__scopeId", "data-v-8cd1ee2d"]
  ]);
export {
  L as
  default
};