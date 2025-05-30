import {
  f as L,
  o as a,
  y as b,
  e as n,
  z as O,
  d as I,
  A as R,
  M as g,
  c as f,
  b as h,
  a as E,
  t as P,
  _ as B,
  q as K,
  F as M,
  j as v,
  C as T,
  m as J,
  D as q,
  E as $,
  n as z,
  G as Y,
  H as k,
  I as N,
  J as V,
  K as Z,
  L as G,
  N as X,
  p as C,
  w as A,
  O as w,
  P as Q
} from "./BMIPMNvl.js";
import {
  _ as j
} from "./C4A-HB-6.js";
import {
  _ as ee
} from "./CzQNU9CG.js";
import {
  _ as te,
  u as se,
  a as ne
} from "./tEcDIoVq.js";
import {
  _ as oe
} from "./DQDvD5n6.js";
import {
  _ as ae
} from "./CaZHxbqM.js";
import "./CHAhIK1O.js";
const ie = {};

function ce(t, o) {
  const s = j;
  return a(), b(s, {
    activated: "",
    "focused-when-activated": !1,
    inverse: "",
    placeholder: ("t" in t ? t.t : n(O))("discover.search.input_placeholder")
  }, null, 8, ["placeholder"])
}
const re = L(ie, [
    ["render", ce]
  ]),
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
      const o = R(t, "modelValue"),
        s = [g.HOT, g.NEW, g.MCAP],
        i = {
          [g.HOT]: "Hot",
          [g.NEW]: "New",
          [g.MCAP]: "MCap"
        },
        l = s.map(m => ({
          value: m,
          label: i[m]
        }));
      return (m, d) => {
        const e = ee;
        return a(), b(e, {
          modelValue: o.value,
          "onUpdate:modelValue": d[0] || (d[0] = _ => o.value = _),
          items: n(l)
        }, null, 8, ["modelValue", "items"])
      }
    }
  }),
  le = {},
  me = {
    class: "not-found"
  },
  de = {
    class: "label"
  };

function ue(t, o) {
  const s = B;
  return a(), f("div", me, [h(s, {
    name: "note-search-lite",
    class: "icon"
  }), E("div", de, P(("t" in t ? t.t : n(O))("discover.search.empty_text")), 1)])
}
const pe = L(le, [
    ["render", ue],
    ["__scopeId", "data-v-5cebf448"]
  ]),
  fe = {};

function he(t, o) {
  const s = oe;
  return a(), f(M, null, K(6, i => E("div", {
    key: i,
    class: "skeleton"
  }, [h(s, {
    class: "image"
  }), h(s, {
    class: "ticker"
  }), h(s, {
    class: "stats"
  })])), 64)
}
const ge = L(fe, [
    ["render", he],
    ["__scopeId", "data-v-e92c9b5d"]
  ]),
  ve = ({
    value: t,
    digitsBeforeSubscript: o = 9,
    digitsAfterSubscript: s = 3
  }) => {
    if (Math.abs(typeof t == "number" ? t : (t == null ? void 0 : t.toNumber()) ?? 0) < 1e-9) return {
      prefix: "$0",
      firstDecimal: "",
      exponent: null,
      suffix: ""
    };
    const [i, l] = t.toFixed(o).split("."), m = l[0], e = l.slice(1).match(/^0+/), _ = e ? e[0].length : 0, c = _ > 0 ? _ + 1 : null, u = l.slice(_ + 1).replace(/0+$/, "").slice(0, s);
    return {
      prefix: `$${i}.`,
      firstDecimal: m,
      exponent: c,
      suffix: u
    }
  },
  be = {
    class: "item-ticker"
  },
  xe = {
    class: "item-base-stats"
  },
  De = {
    class: "item-base-value-price"
  },
  Pe = {
    key: 0,
    class: "exponent"
  },
  Ee = {
    key: 1
  },
  Le = I({
    __name: "List",
    props: {
      items: {},
      tab: {}
    },
    setup(t) {
      const o = t,
        s = v(() => {
          var e;
          return (((e = o.items) == null ? void 0 : e.length) ?? 0) > 0
        }),
        i = v(() => o.items === void 0),
        l = v(() => o.items ?? []),
        m = e => ({
          "item-base-value-price24h": !0,
          "item-base-value-price24h--positive": ((e == null ? void 0 : e.isPositive()) ?? !1) && ((e == null ? void 0 : e.gt(0)) ?? !1),
          "item-base-value-price24h--negative": (e == null ? void 0 : e.isNegative()) ?? !1
        }),
        d = e => {
          const {
            prefix: _,
            firstDecimal: c,
            exponent: u,
            suffix: p
          } = ve({
            value: e,
            digitsBeforeSubscript: 18,
            digitsAfterSubscript: 5
          });
          return [
            ["prefix", _],
            ["firstDecimal", c],
            ["exponent", u],
            ["suffix", p]
          ]
        };
      return (e, _) => {
        const c = B,
          u = te,
          p = ge;
        return a(), f(M, null, [n(s) ? (a(), b(u, {
          key: e.tab,
          items: n(l),
          mode: n(Y).BASE,
          "is-discover": ""
        }, {
          "item-ticker": T(({
            jetton: r
          }) => [E("div", be, [J(P(r.ticker) + " ", 1), r.source === n(q).BLUM ? (a(), b(c, {
            key: 0,
            name: "blum"
          })) : $("", !0)])]),
          "item-base-stats": T(({
            mCap: r
          }) => [E("span", xe, "MCap: " + P(r), 1)]),
          "item-base-values": T(({
            jetton: r
          }) => [E("div", De, [(a(!0), f(M, null, K(d(r.stats.lastPrice ?? 0), ([x, D]) => (a(), f(M, {
            key: x
          }, [x === "exponent" ? (a(), f("span", Pe, P(D), 1)) : (a(), f("span", Ee, P(D), 1))], 64))), 128))]), E("div", {
            class: z(m(r.stats.price24hChange))
          }, P(r.stats.price24hChange) + "%", 3)]),
          _: 1
        }, 8, ["items", "mode"])) : $("", !0), n(i) ? (a(), b(p, {
          key: 1
        })) : $("", !0)], 64)
      }
    }
  }),
  Se = L(Le, [
    ["__scopeId", "data-v-12a85fcf"]
  ]),
  Me = () => {
    const {
      init: t,
      destroy: o,
      items: s,
      activeTab: i,
      onPaginationLoad: l
    } = se({
      source: k.ALL
    }), {
      _flow: {
        init: m,
        destroy: d
      },
      search: e,
      isSearching: _,
      data: c
    } = ne({
      source: k.ALL
    }), u = N(!1), p = N(""), r = v(() => p.value !== ""), x = v(() => r.value && c.value !== void 0 && c.value.length === 0 && !_.value), D = v(() => r.value ? c.value : s.value), y = async () => {
      r.value || await l()
    }, {
      debouncedFunction: S
    } = X(e, 600), F = () => {
      i.value = g.HOT
    }, U = () => {
      i.value = g.NEW
    }, H = async () => {
      m(), await t(), F(), u.value = !0
    }, W = () => {
      d(), o(), U()
    };
    return V(p, S), V(i, () => {
      p.value = ""
    }), Z(async () => {
      await H()
    }), G(() => {
      W()
    }), {
      isInit: v(() => u.value),
      isLoadingSearch: _,
      isNotFound: x,
      items: D,
      loadNextItems: y,
      searchTerm: p,
      tab: i
    }
  },
  $e = I({
    __name: "Discover",
    setup(t) {
      const {
        isInit: o,
        isLoadingSearch: s,
        isNotFound: i,
        items: l,
        loadNextItems: m,
        searchTerm: d,
        tab: e
      } = Me();
      return (_, c) => {
        const u = Q,
          p = re,
          r = _e,
          x = pe,
          D = Se,
          y = ae;
        return a(), f(M, null, [n(o) ? $("", !0) : (a(), b(u, {
          key: 0
        })), n(o) ? (a(), b(y, {
          key: 1,
          class: "pages-discover-discover",
          onEnd: n(m)
        }, {
          default: T(() => [h(p, {
            modelValue: n(d),
            "onUpdate:modelValue": c[0] || (c[0] = S => C(d) ? d.value = S : null),
            "is-loading": n(s)
          }, null, 8, ["modelValue", "is-loading"]), h(r, {
            modelValue: n(e),
            "onUpdate:modelValue": c[1] || (c[1] = S => C(e) ? e.value = S : null)
          }, null, 8, ["modelValue"]), A(h(x, null, null, 512), [
            [w, n(i)]
          ]), A(h(D, {
            tab: n(e),
            items: n(l)
          }, null, 8, ["tab", "items"]), [
            [w, !n(i)]
          ])]),
          _: 1
        }, 8, ["onEnd"])) : $("", !0)], 64)
      }
    }
  }),
  Te = L($e, [
    ["__scopeId", "data-v-faa2de5f"]
  ]),
  ye = {},
  Ie = {
    class: "discover-page page"
  };

function ke(t, o) {
  const s = Te;
  return a(), f("div", Ie, [h(s)])
}
const Ke = L(ye, [
  ["render", ke]
]);
export {
  Ke as
  default
};