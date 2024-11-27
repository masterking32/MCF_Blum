import {
  _ as g
} from "./nKoJ2GBN.js";
import {
  _ as f
} from "./Dg58ZiU4.js";
import {
  d as v,
  o as y,
  ab as b,
  e as o,
  a,
  c as i,
  k as m,
  b as t,
  t as p,
  f as _,
  aS as k,
  m as x,
  aT as B,
  j as S
} from "./2LbcXgIA.js";
import {
  u as w
} from "./Ck-EjjkP.js";
import "./COqyxjq2.js";
const N = {
    key: 0,
    class: "page"
  },
  E = {
    key: 1,
    class: "memepad-not-eligible page"
  },
  I = {
    class: "title"
  },
  K = {
    class: "subtitle"
  },
  M = v({
    __name: "memepad",
    setup(P) {
      const {
        _flow: {
          init: c,
          destroy: d
        },
        isEligible: n
      } = w();
      return c(), y(() => {
        d()
      }), b().memepad.memepadInitiation(), (s, e) => {
        const l = g,
          r = f,
          u = B;
        return o(n) === void 0 ? (a(), i("div", N, [m(l)])) : o(n) ? (a(), x(u, {
          key: 2
        })) : (a(), i("div", E, [m(r), e[0] || (e[0] = t("i", {
          class: "magic-wand"
        }, null, -1)), t("div", I, p(("t" in s ? s.t : o(_))("memepad.coming_soon.title")), 1), t("div", K, p(("t" in s ? s.t : o(_))("memepad.coming_soon.subtitle")), 1), e[1] || (e[1] = t("div", {
          class: "image-container"
        }, [t("img", {
          src: k,
          alt: "Memepad explore page"
        })], -1)), e[2] || (e[2] = t("div", {
          class: "shadow"
        }, null, -1))]))
      }
    }
  }),
  T = S(M, [
    ["__scopeId", "data-v-089a782b"]
  ]);
export {
  T as
  default
};