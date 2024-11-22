import {
  _ as M
} from "./BX04Co-G.js";
import {
  _ as g
} from "./CItn2Db1.js";
import {
  b8 as i,
  F as l,
  c0 as N,
  K as C,
  d as P,
  o as p,
  r as h,
  J as b,
  av as k,
  ab as w,
  a as u,
  c as v,
  k as f,
  e as s,
  V as D,
  f as O,
  m as L,
  aT as R,
  g as U,
  am as V,
  j as S
} from "./BZXAykfw.js";
import {
  u as $
} from "./BApF9PQZ.js";
import {
  u as G
} from "./B2dRjhuK.js";
import "./CR0t1yhu.js";
const I = () => {
    const o = i(() => "", "$nnokZ0cAmU"),
      e = i(() => !1, "$dxYpAQPdtd"),
      t = i("$pDWqkemNGG"),
      r = N(async a => (e.value = !0, {
        res: await C.getMemepadSearch(a),
        search: a
      }), ({
        res: a,
        search: m
      }) => {
        e.value = !1, o.value = m, t.value = a.err ? void 0 : a.data
      });
    return {
      _flow: {
        init: () => {},
        destroy: () => {
          o.value = "", e.value = !1, t.value = void 0
        }
      },
      search: a => {
        a !== o.value && (a === "" ? (e.value = !1, t.value = void 0, o.value = "") : r(a))
      },
      searchLine: l(() => o.value),
      data: l(() => t.value ?? []),
      isSearching: l(() => e.value)
    }
  },
  J = {
    class: "memepad-search"
  },
  x = P({
    __name: "Search",
    setup(o) {
      const e = I();
      e._flow.init(), p(() => e._flow.destroy());
      const {
        bclData: t
      } = $(), r = h(!1), c = h(""), d = [];
      (() => {
        d.push(setTimeout(() => {
          r.value = !0
        }, 400))
      })(), p(() => {
        d.forEach(n => clearTimeout(n))
      }), G(() => b().push({
        name: "memepad"
      }));
      const {
        debouncedFunction: a
      } = V(e.search, 600);
      return k(c, a), w().memepad.memepadSearchOpen(), (n, _) => {
        const A = M,
          T = g;
        return u(), v("div", J, [f(A, {
          modelValue: s(c),
          "onUpdate:modelValue": _[0] || (_[0] = y => D(c) ? c.value = y : null),
          placeholder: ("t" in n ? n.t : s(O))("memepad.search.input_placeholder"),
          activated: s(r),
          autofocus: "",
          "is-loading": s(e).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), s(e).data ? (u(), L(T, {
          key: 0,
          items: s(e).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in n ? n.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : s(R)).SEARCH,
          "bcl-data": s(t)
        }, null, 8, ["items", "analytics-source", "bcl-data"])) : U("", !0)])
      }
    }
  }),
  B = S(x, [
    ["__scopeId", "data-v-de270a0d"]
  ]),
  Y = {},
  F = {
    class: "memepad-search page"
  };

function K(o, e) {
  const t = B;
  return u(), v("div", F, [f(t)])
}
const z = S(Y, [
  ["render", K],
  ["__scopeId", "data-v-1414bdfa"]
]);
export {
  z as
  default
};