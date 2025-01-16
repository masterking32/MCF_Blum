import {
  _ as h
} from "./JGRitRBB.js";
import {
  _ as k
} from "./BZx_sfnN.js";
import {
  _ as w
} from "./CkmrTVeP.js";
import {
  d as b
} from "./DaCHxoB5.js";
import {
  d as f,
  N as B,
  o,
  c as r,
  b as v,
  a as s,
  w as x,
  e as i,
  t as d,
  G as l,
  af as D,
  f as y,
  aB as S,
  Q as u,
  X as C,
  aa as p,
  a2 as m,
  W as I,
  Y as R
} from "./DU-EduvJ.js";
import "./Bn-Bqpmh.js";
const V = {
    class: "pages-wallet-block-details-banner"
  },
  $ = {
    class: "compose"
  },
  K = ["src"],
  N = {
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
        ]), s("div", N, d(t.point.name), 1), t.point.fiatValue.USD === void 0 ? (o(), l(a, {
          key: 0,
          class: "fiat-value-skeleton"
        })) : (o(), l(D(t.point.fiatValue.USD.defaultH), {
          key: 1,
          class: "fiat-value"
        })), s("div", U, d(t.point.balance.defaultWithSymbol), 1)])])
      }
    }
  }),
  A = y(W, [
    ["__scopeId", "data-v-7f9246b7"]
  ]),
  P = {
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
      }, n = S(void 0);
      return _().then(e => n.value = e), u().meta.back = (() => {
        const e = C().previousRoute.value;
        return () => p().push({
          name: e ? e.name : "wallet"
        })
      })(), (e, a) => {
        const c = h,
          g = A;
        return o(), r("div", P, [i(n) === void 0 ? (o(), l(c, {
          key: 0
        })) : (o(), r("div", j, [v(g, {
          point: i(n).currency,
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