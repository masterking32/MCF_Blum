import {
  _ as y
} from "./B8xlWNmc.js";
import {
  _ as g
} from "./BYep004I.js";
import {
  b7 as i,
  F as l,
  ch as M,
  K as N,
  d as C,
  o as _,
  r as p,
  J as P,
  av as k,
  ab as w,
  a as d,
  c as h,
  k as v,
  e as n,
  V as O,
  f as D,
  m as L,
  aT as R,
  g as U,
  am as V,
  j as f
} from "./DwYsksKZ.js";
import {
  u as $
} from "./NCFxGKl_.js";
const b = () => {
    const o = i(() => "", "$nnokZ0cAmU"),
      e = i(() => !1, "$dxYpAQPdtd"),
      t = i("$pDWqkemNGG"),
      c = M(async a => (e.value = !0, {
        res: await N.getMemepadSearch(a),
        search: a
      }), ({
        res: a,
        search: s
      }) => {
        e.value = !1, o.value = s, t.value = a.err ? void 0 : a.data
      });
    return {
      _flow: {
        init: () => {},
        destroy: () => {
          o.value = "", e.value = !1, t.value = void 0
        }
      },
      search: a => {
        a !== o.value && (a === "" ? (e.value = !1, t.value = void 0, o.value = "") : c(a))
      },
      searchLine: l(() => o.value),
      data: l(() => t.value ?? []),
      isSearching: l(() => e.value)
    }
  },
  G = {
    class: "memepad-search"
  },
  I = C({
    __name: "Search",
    setup(o) {
      const e = b();
      e._flow.init(), _(() => e._flow.destroy());
      const t = p(!1),
        c = p(""),
        r = [];
      (() => {
        r.push(setTimeout(() => {
          t.value = !0
        }, 400))
      })(), _(() => {
        r.forEach(s => clearTimeout(s))
      }), $(() => P().push({
        name: "memepad"
      }));
      const {
        debouncedFunction: u
      } = V(e.search, 600);
      return k(c, u), w().memepad.memepadSearchOpen(), (s, m) => {
        const E = y,
          A = g;
        return d(), h("div", G, [v(E, {
          modelValue: n(c),
          "onUpdate:modelValue": m[0] || (m[0] = T => O(c) ? c.value = T : null),
          placeholder: ("t" in s ? s.t : n(D))("memepad.search.input_placeholder"),
          activated: n(t),
          autofocus: "",
          "is-loading": n(e).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), n(e).data ? (d(), L(A, {
          key: 0,
          items: n(e).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in s ? s.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : n(R)).SEARCH
        }, null, 8, ["items", "analytics-source"])) : U("", !0)])
      }
    }
  }),
  J = f(I, [
    ["__scopeId", "data-v-46f4f17d"]
  ]),
  x = {},
  B = {
    class: "memepad-search page"
  };

function Y(o, e) {
  const t = J;
  return d(), h("div", B, [v(t)])
}
const q = f(x, [
  ["render", Y],
  ["__scopeId", "data-v-1414bdfa"]
]);
export {
  q as
  default
};