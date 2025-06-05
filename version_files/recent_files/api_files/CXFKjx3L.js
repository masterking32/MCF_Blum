import {
  d as D,
  y as G,
  j as v,
  o,
  z as b,
  e as t,
  A as B,
  C as J,
  M as h,
  f as y,
  c as p,
  b as g,
  a as P,
  t as x,
  _ as F,
  q as K,
  F as I,
  D as M,
  m as W,
  E as q,
  G as E,
  n as z,
  H as Y,
  I as V,
  J as $,
  K as C,
  L as Q,
  N as X,
  O as Z,
  p as N,
  w as A,
  P as w,
  Q as j
} from "./BkRdN3CR.js";
import {
  _ as ee
} from "./ryqy8QS_.js";
import {
  u as se
} from "./B-B8tbtq.js";
import {
  _ as te
} from "./BjgdQXdO.js";
import {
  _ as oe,
  u as ne,
  a as ae
} from "./Vlq2oWjD.js";
import {
  _ as ce
} from "./RUxoXSp4.js";
import {
  g as ie
} from "./ChHelSWr.js";
import {
  _ as re
} from "./y3UEi0eL.js";
import "./Dw21CYt8.js";
const _e = D({
    __name: "Search",
    setup(i) {
      const n = G("search");
      return se(v(() => {
        var s;
        return ((s = n.value) == null ? void 0 : s.isFocused) ?? !1
      }), "discover-search-focus"), (s, a) => {
        const m = ee;
        return o(), b(m, {
          ref: "search",
          activated: "",
          "focused-when-activated": !1,
          inverse: "",
          placeholder: ("t" in s ? s.t : t(B))("discover.search.input_placeholder")
        }, null, 8, ["placeholder"])
      }
    }
  }),
  le = D({
    __name: "Tabs",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(i) {
      const n = J(i, "modelValue"),
        s = [h.MCAP, h.HOT, h.LISTINGS],
        a = {
          [h.MCAP]: "MCap",
          [h.HOT]: "Hot",
          [h.LISTINGS]: "Listed"
        },
        m = s.map(u => ({
          value: u,
          label: a[u]
        }));
      return (u, _) => {
        const e = te;
        return o(), b(e, {
          modelValue: n.value,
          "onUpdate:modelValue": _[0] || (_[0] = d => n.value = d),
          items: t(m)
        }, null, 8, ["modelValue", "items"])
      }
    }
  }),
  me = {},
  ue = {
    class: "not-found"
  },
  de = {
    class: "label"
  };

function pe(i, n) {
  const s = F;
  return o(), p("div", ue, [g(s, {
    name: "note-search-lite",
    class: "icon"
  }), P("div", de, x(("t" in i ? i.t : t(B))("discover.search.empty_text")), 1)])
}
const fe = y(me, [
    ["render", pe],
    ["__scopeId", "data-v-5cebf448"]
  ]),
  he = {};

function ve(i, n) {
  const s = ce;
  return o(), p(I, null, K(6, a => P("div", {
    key: a,
    class: "skeleton"
  }, [g(s, {
    class: "image"
  }), g(s, {
    class: "ticker"
  }), g(s, {
    class: "stats"
  })])), 64)
}
const be = y(he, [
    ["render", ve],
    ["__scopeId", "data-v-e92c9b5d"]
  ]),
  ge = {
    class: "item-ticker"
  },
  Le = {
    class: "item-base-stats"
  },
  Se = {
    class: "item-base-value-price"
  },
  xe = {
    key: 0,
    class: "exponent"
  },
  Pe = {
    key: 1
  },
  Ee = D({
    __name: "List",
    props: {
      items: {},
      tab: {}
    },
    setup(i) {
      const n = i,
        s = v(() => {
          var e;
          return (((e = n.items) == null ? void 0 : e.length) ?? 0) > 0
        }),
        a = v(() => n.items === void 0),
        m = v(() => n.items ?? []),
        u = e => ({
          "item-base-value-price24h": !0,
          "item-base-value-price24h--positive": ((e == null ? void 0 : e.isPositive()) ?? !1) && ((e == null ? void 0 : e.gt(0)) ?? !1),
          "item-base-value-price24h--negative": (e == null ? void 0 : e.isNegative()) ?? !1
        }),
        _ = e => {
          const {
            prefix: d,
            firstDecimal: r,
            exponent: f,
            suffix: l
          } = ie({
            value: e,
            digitsBeforeSubscript: 18,
            digitsAfterSubscript: 5,
            minExponent: 4,
            significantDigits: 5
          });
          return [
            ["prefix", d],
            ["firstDecimal", r],
            ["exponent", f],
            ["suffix", l]
          ]
        };
      return (e, d) => {
        const r = F,
          f = oe,
          l = be;
        return o(), p(I, null, [t(s) ? (o(), b(f, {
          key: e.tab,
          items: t(m),
          mode: t(Y).BASE,
          "is-discover": ""
        }, {
          "item-ticker": M(({
            jetton: c
          }) => [P("div", ge, [W(x(c.ticker) + " ", 1), c.source === t(q).BLUM ? (o(), b(r, {
            key: 0,
            name: "blum"
          })) : E("", !0)])]),
          "item-base-stats": M(({
            mCap: c
          }) => [P("span", Le, "MCap: " + x(c), 1)]),
          "item-base-values": M(({
            jetton: c
          }) => [P("div", Se, [(o(!0), p(I, null, K(_(c.stats.lastPrice ?? 0), ([L, S]) => (o(), p(I, {
            key: L
          }, [L === "exponent" ? (o(), p("span", xe, x(S), 1)) : (o(), p("span", Pe, x(S), 1))], 64))), 128))]), P("div", {
            class: z(u(c.stats.price24hChange))
          }, x(c.stats.price24hChange) + "%", 3)]),
          _: 1
        }, 8, ["items", "mode"])) : E("", !0), t(a) ? (o(), b(l, {
          key: 1
        })) : E("", !0)], 64)
      }
    }
  }),
  Te = y(Ee, [
    ["__scopeId", "data-v-3e83bf3e"]
  ]),
  Ie = () => {
    const {
      init: i,
      destroy: n,
      items: s,
      activeTab: a,
      onPaginationLoad: m
    } = ne({
      source: V.ALL
    }), {
      _flow: {
        init: u,
        destroy: _
      },
      search: e,
      isSearching: d,
      data: r
    } = ae({
      source: V.ALL
    }), f = $(!1), l = $(""), c = v(() => l.value !== ""), L = v(() => c.value && r.value !== void 0 && r.value.length === 0 && !d.value), S = v(() => c.value ? r.value : s.value), k = async () => {
      c.value || await m()
    }, {
      debouncedFunction: T
    } = Z(e, 600), O = () => {
      a.value = h.MCAP
    }, U = () => {
      a.value = h.NEW
    }, R = async () => {
      u(), await i(), O(), f.value = !0
    }, H = () => {
      _(), n(), U()
    };
    return C(l, T), C(a, () => {
      l.value = ""
    }), Q(async () => {
      await R()
    }), X(() => {
      H()
    }), {
      isInit: v(() => f.value),
      isLoadingSearch: d,
      isNotFound: L,
      items: S,
      loadNextItems: k,
      searchTerm: l,
      tab: a
    }
  },
  ye = D({
    __name: "Discover",
    props: {
      searchable: {
        type: Boolean,
        default: !0
      }
    },
    setup(i) {
      const {
        isInit: n,
        isLoadingSearch: s,
        isNotFound: a,
        items: m,
        loadNextItems: u,
        searchTerm: _,
        tab: e
      } = Ie();
      return (d, r) => {
        const f = j,
          l = _e,
          c = le,
          L = fe,
          S = Te,
          k = re;
        return o(), p(I, null, [t(n) ? E("", !0) : (o(), b(f, {
          key: 0
        })), t(n) ? (o(), b(k, {
          key: 1,
          class: "pages-discover-discover",
          onEnd: t(u)
        }, {
          default: M(() => [d.searchable ? (o(), b(l, {
            key: 0,
            modelValue: t(_),
            "onUpdate:modelValue": r[0] || (r[0] = T => N(_) ? _.value = T : null),
            "is-loading": t(s)
          }, null, 8, ["modelValue", "is-loading"])) : E("", !0), g(c, {
            modelValue: t(e),
            "onUpdate:modelValue": r[1] || (r[1] = T => N(e) ? e.value = T : null)
          }, null, 8, ["modelValue"]), A(g(L, null, null, 512), [
            [w, t(a)]
          ]), A(g(S, {
            tab: t(e),
            items: t(m)
          }, null, 8, ["tab", "items"]), [
            [w, !t(a)]
          ])]),
          _: 1
        }, 8, ["onEnd"])) : E("", !0)], 64)
      }
    }
  }),
  Me = y(ye, [
    ["__scopeId", "data-v-b5fd076c"]
  ]),
  De = {},
  ke = {
    class: "discover-page page"
  };

function Ve(i, n) {
  const s = Me;
  return o(), p("div", ke, [g(s)])
}
const Ue = y(De, [
  ["render", Ve]
]);
export {
  Ue as
  default
};