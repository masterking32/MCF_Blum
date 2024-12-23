import {
  _ as h
} from "./CXO-Cdt2.js";
import {
  d as k,
  _ as w
} from "./DH0L8qbi.js";
import {
  _ as b
} from "./BgKCkwpn.js";
import {
  d as f,
  P as B,
  o as n,
  c as r,
  b as v,
  a as s,
  w as x,
  e as i,
  t as d,
  J as l,
  ai as D,
  f as y,
  cW as S,
  ap as u,
  y as C,
  ae as p,
  a3 as m,
  X as I,
  Y as R
} from "./CEkQG6G2.js";
import "./BFXKbRWo.js";
const V = {
    class: "pages-wallet-block-details-banner"
  },
  $ = {
    class: "compose"
  },
  K = ["src"],
  P = {
    class: "name"
  },
  U = {
    class: "value"
  },
  W = f({
    __name: "Banner",
    props: {
      point: {
        type: Object,
        required: !0
      }
    },
    setup(t) {
      return (_, o) => {
        const e = w,
          a = b,
          c = B("img-error");
        return n(), r("div", V, [v(e, {
          class: "background"
        }), s("div", $, [x(s("img", {
          src: t.point.imageUrl,
          alt: "Currency logo"
        }, null, 8, K), [
          [c, i(k)]
        ]), s("div", P, d(t.point.name), 1), t.point.fiatValue.USD === void 0 ? (n(), l(a, {
          key: 0,
          class: "fiat-value-skeleton"
        })) : (n(), l(D(t.point.fiatValue.USD.defaultH), {
          key: 1,
          class: "fiat-value"
        })), s("div", U, d(t.point.balance.defaultWithSymbol), 1)])])
      }
    }
  }),
  A = y(W, [
    ["__scopeId", "data-v-7f9246b7"]
  ]),
  N = {
    class: "pages-wallet-id page"
  },
  j = {
    key: 1,
    class: "container"
  },
  q = f({
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
            R().error("Currency not found"), p().replace({
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
        })) : (n(), r("div", j, [v(g, {
          point: i(o).currency,
          class: "banner"
        }, null, 8, ["point"])]))])
      }
    }
  }),
  X = y(q, [
    ["__scopeId", "data-v-5d86aa64"]
  ]);
export {
  X as
  default
};