import {
  _ as T
} from "./DTWuhP8N.js";
import {
  _ as M
} from "./CTQyGIdF.js";
import {
  a as P
} from "./BCrYy15O.js";
import {
  b8 as l,
  b9 as k,
  K as f,
  F as m,
  ch as w,
  d as N,
  o as C,
  r as h,
  av as S,
  J as D,
  ab as b,
  a as r,
  c as _,
  e as c,
  m as A,
  W as R,
  k as E,
  V as $,
  f as x,
  aT as I,
  g as O,
  am as V,
  j as y
} from "./TkfSaITf.js";
import {
  u as J
} from "./B27v4mDY.js";
const L = () => {
    const o = l(() => "", "$nnokZ0cAmU"),
      e = l(() => !1, "$dxYpAQPdtd"),
      t = l("$pDWqkemNGG"),
      s = l("$DXbJPfMbVT"),
      u = w(async a => (e.value = !0, {
        res: await f.getMemepadSearch(a),
        search: a
      }), ({
        res: a,
        search: i
      }) => {
        e.value = !1, o.value = i, s.value = a.err ? void 0 : a.data
      }),
      p = a => {
        a !== o.value && (a === "" ? (e.value = !1, s.value = void 0, o.value = "") : u(a))
      },
      n = l(() => k(async () => await f.getMemepadSearch(), a => t.value = a, 6e4), "$XaSXpnBR9r");
    return {
      _flow: {
        init: async () => {
          await n.value.exec(), s.value = t.value
        },
        destroy: () => {
          n.value.destroy(), t.value = void 0, o.value = "", e.value = !1, s.value = void 0
        }
      },
      search: p,
      searchLine: m(() => o.value),
      data: m(() => o.value === "" ? t.value : s.value),
      isSearching: m(() => e.value)
    }
  },
  U = {
    class: "memepad-search"
  },
  B = N({
    __name: "Search",
    setup(o) {
      const e = L();
      e._flow.init(), C(() => e._flow.destroy());
      const t = h(!1),
        s = h("");
      S(() => e.data.value, n => {
        n && !t.value && setTimeout(() => {
          t.value = !0
        }, 400)
      }), J(() => D().push({
        name: "memepad"
      }));
      const {
        debouncedFunction: u
      } = V(e.search, 600);
      return S(s, u), b().memepad.memepadSearchOpen(), (n, d) => {
        const v = T,
          a = M,
          i = P;
        return r(), _("div", U, [c(e).data.value ? (r(), _(R, {
          key: 1
        }, [E(a, {
          modelValue: c(s),
          "onUpdate:modelValue": d[0] || (d[0] = g => $(s) ? s.value = g : null),
          placeholder: ("t" in n ? n.t : c(x))("memepad.search.input_placeholder"),
          activated: c(t),
          autofocus: "",
          "is-loading": c(e).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), c(e).data ? (r(), A(i, {
          key: 0,
          items: c(e).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in n ? n.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : c(I)).SEARCH
        }, null, 8, ["items", "analytics-source"])) : O("", !0)], 64)) : (r(), A(v, {
          key: 0,
          fixed: ""
        }))])
      }
    }
  }),
  G = y(B, [
    ["__scopeId", "data-v-e895d6d7"]
  ]),
  F = {},
  Y = {
    class: "memepad-search page"
  };

function K(o, e) {
  const t = G;
  return r(), _("div", Y, [E(t)])
}
const Q = y(F, [
  ["render", K],
  ["__scopeId", "data-v-1414bdfa"]
]);
export {
  Q as
  default
};