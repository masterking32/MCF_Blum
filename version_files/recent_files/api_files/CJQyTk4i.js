import {
  _ as h
} from "./B3q5VDfN.js";
import {
  _ as k
} from "./CFK4Iql6.js";
import {
  _ as w
} from "./BiY0FrNC.js";
import {
  d as b
} from "./DaCHxoB5.js";
import {
  d as f,
  O as B,
  o,
  c as r,
  b as v,
  a as s,
  w as x,
  e as i,
  t as d,
  G as l,
  aj as D,
  f as y,
  aE as S,
  R as u,
  Y as R,
  ae as p,
  a3 as m,
  X as C,
  Z as I
} from "./BrLCGJDp.js";
import "./3ibBY_JW.js";
const V = {
    class: "pages-wallet-block-details-banner"
  },
  $ = {
    class: "compose"
  },
  K = ["src"],
  U = {
    class: "name"
  },
  j = {
    class: "value"
  },
  A = f({
    __name: "Banner",
    props: {
      point: {
        type: Object,
        required: !0
      }
    },
    setup(t) {
      return (_, n) => {
        const e = k,
          a = w,
          c = B("img-error");
        return o(), r("div", V, [v(e, {
          class: "background"
        }), s("div", $, [x(s("img", {
          src: t.point.imageUrl,
          alt: "Currency logo"
        }, null, 8, K), [
          [c, i(b)]
        ]), s("div", U, d(t.point.name), 1), t.point.fiatValue.USD === void 0 ? (o(), l(a, {
          key: 0,
          class: "fiat-value-skeleton"
        })) : (o(), l(D(t.point.fiatValue.USD.defaultH), {
          key: 1,
          class: "fiat-value"
        })), s("div", j, d(t.point.balance.defaultWithSymbol), 1)])])
      }
    }
  }),
  E = y(A, [
    ["__scopeId", "data-v-7f9246b7"]
  ]),
  N = {
    class: "pages-wallet-id page"
  },
  O = {
    key: 1,
    class: "container"
  },
  P = f({
    __name: "[id]",
    setup(t) {
      const _ = async () => {
        const {
          id: e
        } = u().params;
        if (typeof e != "string") throw m("Invalid wallet id");
        const a = await C.getCurrencyById(e);
        if (a.err) {
          if (a.code === 404) {
            I().error("Currency not found"), p().replace({
              name: "wallet"
            });
            return
          }
          throw m("Failed to get currency")
        }
        return {
          currency: a.data
        }
      }, n = S(void 0);
      return _().then(e => n.value = e), u().meta.back = (() => {
        const e = R().previousRoute.value;
        return () => p().push({
          name: e ? e.name : "wallet"
        })
      })(), (e, a) => {
        const c = h,
          g = E;
        return o(), r("div", N, [i(n) === void 0 ? (o(), l(c, {
          key: 0
        })) : (o(), r("div", O, [v(g, {
          point: i(n).currency,
          class: "banner"
        }, null, 8, ["point"])]))])
      }
    }
  }),
  Y = y(P, [
    ["__scopeId", "data-v-5d86aa64"]
  ]);
export {
  Y as
  default
};