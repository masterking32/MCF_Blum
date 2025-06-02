import {
  d as I,
  y as G,
  j as v,
  o as a,
  z as b,
  e as o,
  A as w,
  C as J,
  M as h,
  f as T,
  c as f,
  b as g,
  a as D,
  t as S,
  _ as F,
  q as U,
  F as M,
  D as y,
  m as W,
  E as q,
  G as L,
  n as z,
  H as Y,
  I as k,
  J as C,
  K as N,
  L as Z,
  N as Q,
  O as X,
  p as V,
  w as A,
  P as B,
  Q as j
} from "./CTMy7kFf.js";
import {
  _ as ee
} from "./C2JfWK3k.js";
import {
  u as se
} from "./DCOpuAW3.js";
import {
  _ as te
} from "./CXgDoept.js";
import {
  _ as ne,
  u as oe,
  a as ae
} from "./CQYlZVZd.js";
import {
  _ as ce
} from "./B61P6QRF.js";
import {
  _ as ie
} from "./DAEi6Bn-.js";
import "./CE9IcG_c.js";
const re = I({
    __name: "Search",
    setup(t) {
      const n = G("search");
      return se(v(() => {
        var s;
        return ((s = n.value) == null ? void 0 : s.isFocused) ?? !1
      }), "discover-search-focus"), (s, c) => {
        const _ = ee;
        return a(), b(_, {
          ref: "search",
          activated: "",
          "focused-when-activated": !1,
          inverse: "",
          placeholder: ("t" in s ? s.t : o(w))("discover.search.input_placeholder")
        }, null, 8, ["placeholder"])
      }
    }
  }),
  _e = I({
    __name: "Tabs",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(t) {
      const n = J(t, "modelValue"),
        s = [h.MCAP, h.HOT, h.LISTINGS],
        c = {
          [h.MCAP]: "MCap",
          [h.HOT]: "Hot",
          [h.LISTINGS]: "Listed"
        },
        _ = s.map(m => ({
          value: m,
          label: c[m]
        }));
      return (m, u) => {
        const e = te;
        return a(), b(e, {
          modelValue: n.value,
          "onUpdate:modelValue": u[0] || (u[0] = l => n.value = l),
          items: o(_)
        }, null, 8, ["modelValue", "items"])
      }
    }
  }),
  le = {},
  me = {
    class: "not-found"
  },
  ue = {
    class: "label"
  };

function de(t, n) {
  const s = F;
  return a(), f("div", me, [g(s, {
    name: "note-search-lite",
    class: "icon"
  }), D("div", ue, S(("t" in t ? t.t : o(w))("discover.search.empty_text")), 1)])
}
const pe = T(le, [
    ["render", de],
    ["__scopeId", "data-v-5cebf448"]
  ]),
  fe = {};

function he(t, n) {
  const s = ce;
  return a(), f(M, null, U(6, c => D("div", {
    key: c,
    class: "skeleton"
  }, [g(s, {
    class: "image"
  }), g(s, {
    class: "ticker"
  }), g(s, {
    class: "stats"
  })])), 64)
}
const ve = T(fe, [
    ["render", he],
    ["__scopeId", "data-v-e92c9b5d"]
  ]),
  be = ({
    value: t,
    digitsBeforeSubscript: n = 9,
    digitsAfterSubscript: s = 3
  }) => {
    if (Math.abs(typeof t == "number" ? t : (t == null ? void 0 : t.toNumber()) ?? 0) < 1e-9) return {
      prefix: "$0",
      firstDecimal: "",
      exponent: null,
      suffix: ""
    };
    const [c, _] = t.toFixed(n).split("."), m = _[0], e = _.slice(1).match(/^0+/), l = e ? e[0].length : 0, i = l > 0 ? l + 1 : null, d = _.slice(l + 1).replace(/0+$/, "").slice(0, s);
    return {
      prefix: `$${c}.`,
      firstDecimal: m,
      exponent: i,
      suffix: d
    }
  },
  ge = {
    class: "item-ticker"
  },
  xe = {
    class: "item-base-stats"
  },
  Pe = {
    class: "item-base-value-price"
  },
  Se = {
    key: 0,
    class: "exponent"
  },
  De = {
    key: 1
  },
  Le = I({
    __name: "List",
    props: {
      items: {},
      tab: {}
    },
    setup(t) {
      const n = t,
        s = v(() => {
          var e;
          return (((e = n.items) == null ? void 0 : e.length) ?? 0) > 0
        }),
        c = v(() => n.items === void 0),
        _ = v(() => n.items ?? []),
        m = e => ({
          "item-base-value-price24h": !0,
          "item-base-value-price24h--positive": ((e == null ? void 0 : e.isPositive()) ?? !1) && ((e == null ? void 0 : e.gt(0)) ?? !1),
          "item-base-value-price24h--negative": (e == null ? void 0 : e.isNegative()) ?? !1
        }),
        u = e => {
          const {
            prefix: l,
            firstDecimal: i,
            exponent: d,
            suffix: p
          } = be({
            value: e,
            digitsBeforeSubscript: 18,
            digitsAfterSubscript: 5
          });
          return [
            ["prefix", l],
            ["firstDecimal", i],
            ["exponent", d],
            ["suffix", p]
          ]
        };
      return (e, l) => {
        const i = F,
          d = ne,
          p = ve;
        return a(), f(M, null, [o(s) ? (a(), b(d, {
          key: e.tab,
          items: o(_),
          mode: o(Y).BASE,
          "is-discover": ""
        }, {
          "item-ticker": y(({
            jetton: r
          }) => [D("div", ge, [W(S(r.ticker) + " ", 1), r.source === o(q).BLUM ? (a(), b(i, {
            key: 0,
            name: "blum"
          })) : L("", !0)])]),
          "item-base-stats": y(({
            mCap: r
          }) => [D("span", xe, "MCap: " + S(r), 1)]),
          "item-base-values": y(({
            jetton: r
          }) => [D("div", Pe, [(a(!0), f(M, null, U(u(r.stats.lastPrice ?? 0), ([x, P]) => (a(), f(M, {
            key: x
          }, [x === "exponent" ? (a(), f("span", Se, S(P), 1)) : (a(), f("span", De, S(P), 1))], 64))), 128))]), D("div", {
            class: z(m(r.stats.price24hChange))
          }, S(r.stats.price24hChange) + "%", 3)]),
          _: 1
        }, 8, ["items", "mode"])) : L("", !0), o(c) ? (a(), b(p, {
          key: 1
        })) : L("", !0)], 64)
      }
    }
  }),
  Ee = T(Le, [
    ["__scopeId", "data-v-12a85fcf"]
  ]),
  Me = () => {
    const {
      init: t,
      destroy: n,
      items: s,
      activeTab: c,
      onPaginationLoad: _
    } = oe({
      source: k.BLUM
    }), {
      _flow: {
        init: m,
        destroy: u
      },
      search: e,
      isSearching: l,
      data: i
    } = ae({
      source: k.BLUM
    }), d = C(!1), p = C(""), r = v(() => p.value !== ""), x = v(() => r.value && i.value !== void 0 && i.value.length === 0 && !l.value), P = v(() => r.value ? i.value : s.value), $ = async () => {
      r.value || await _()
    }, {
      debouncedFunction: E
    } = X(e, 600), K = () => {
      c.value = h.MCAP
    }, O = () => {
      c.value = h.NEW
    }, R = async () => {
      m(), await t(), K(), d.value = !0
    }, H = () => {
      u(), n(), O()
    };
    return N(p, E), N(c, () => {
      p.value = ""
    }), Z(async () => {
      await R()
    }), Q(() => {
      H()
    }), {
      isInit: v(() => d.value),
      isLoadingSearch: l,
      isNotFound: x,
      items: P,
      loadNextItems: $,
      searchTerm: p,
      tab: c
    }
  },
  Te = I({
    __name: "Discover",
    props: {
      searchable: {
        type: Boolean,
        default: !0
      }
    },
    setup(t) {
      const {
        isInit: n,
        isLoadingSearch: s,
        isNotFound: c,
        items: _,
        loadNextItems: m,
        searchTerm: u,
        tab: e
      } = Me();
      return (l, i) => {
        const d = j,
          p = re,
          r = _e,
          x = pe,
          P = Ee,
          $ = ie;
        return a(), f(M, null, [o(n) ? L("", !0) : (a(), b(d, {
          key: 0
        })), o(n) ? (a(), b($, {
          key: 1,
          class: "pages-discover-discover",
          onEnd: o(m)
        }, {
          default: y(() => [l.searchable ? (a(), b(p, {
            key: 0,
            modelValue: o(u),
            "onUpdate:modelValue": i[0] || (i[0] = E => V(u) ? u.value = E : null),
            "is-loading": o(s)
          }, null, 8, ["modelValue", "is-loading"])) : L("", !0), g(r, {
            modelValue: o(e),
            "onUpdate:modelValue": i[1] || (i[1] = E => V(e) ? e.value = E : null)
          }, null, 8, ["modelValue"]), A(g(x, null, null, 512), [
            [B, o(c)]
          ]), A(g(P, {
            tab: o(e),
            items: o(_)
          }, null, 8, ["tab", "items"]), [
            [B, !o(c)]
          ])]),
          _: 1
        }, 8, ["onEnd"])) : L("", !0)], 64)
      }
    }
  }),
  ye = T(Te, [
    ["__scopeId", "data-v-b5fd076c"]
  ]),
  Ie = {},
  $e = {
    class: "discover-page page"
  };

function ke(t, n) {
  const s = ye;
  return a(), f("div", $e, [g(s)])
}
const Ke = T(Ie, [
  ["render", ke]
]);
export {
  Ke as
  default
};