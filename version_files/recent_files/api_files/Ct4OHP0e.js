import {
  d as N,
  j as f,
  o as s,
  c,
  e as d,
  F as x,
  a as e,
  q as w,
  aN as b,
  t as h,
  M as k,
  D as y,
  b as u,
  bA as $,
  _ as B,
  f as O
} from "./C6ycOBuK.js";
import {
  _ as S
} from "./lYovtXhb.js";
import {
  _ as j
} from "./CX4xpWp4.js";
const E = {
    class: "memepad-jetton-statistics-card"
  },
  G = {
    class: "list"
  },
  K = {
    class: "header"
  },
  L = {
    class: "title"
  },
  M = {
    class: "value type-highlighted"
  },
  A = {
    class: "label"
  },
  D = {
    class: "value type-warning"
  },
  F = {
    class: "label"
  },
  H = {
    key: 2,
    class: "value"
  },
  P = {
    class: "label"
  },
  R = N({
    __name: "StatsCard",
    props: {
      items: {}
    },
    setup(C) {
      const g = C,
        v = f(() => {
          var n;
          return (n = g.items) == null ? void 0 : n.filter(o => !o.inChartOnly).sort((o, l) => l.percent.minus(o.percent).toNumber())
        }),
        T = f(() => {
          if (!g.items) return;
          const n = 4,
            o = [...g.items].filter(a => a.percent.gt(0)),
            l = o.length,
            m = (100 - n * l) / 100,
            i = "#1C1C1E";
          return `conic-gradient(${o.sort((a,r)=>+!!a.inChartOnly-+!!r.inChartOnly).reduce((a,r,V,I)=>{const _=[...a.items];_.push(`${r.color} ${a.total}%`);const p=r.percent.mul(m).plus(a.total).toNumber();return _.push(`${r.color} ${p}%`),I.length!==1&&(_.push(`${i} ${p}%`),_.push(`${i} ${p+n}%`)),{total:p+n,items:_}},{total:0,items:[]}).items.join(", ")})`
        });
      return (n, o) => {
        const l = B,
          m = S,
          i = j;
        return s(), c("div", E, [d(v) ? (s(), c(x, {
          key: 0
        }, [e("div", G, [(s(!0), c(x, null, w(d(v), t => (s(), c("div", {
          key: t.title,
          class: "item"
        }, [e("div", K, [e("div", {
          class: "dot",
          style: b({
            "--bg-color": t.color
          })
        }, null, 4), e("div", L, h(t.title), 1)]), t.highlightText ? (s(), k(m, {
          key: 0,
          text: t.highlightText,
          "text-min-width": 150,
          alignment: d($).RIGHT
        }, {
          default: y(() => [e("div", M, [u(l, {
            name: "circle-check-white",
            class: "icon"
          }), e("div", A, h(t.label), 1)])]),
          _: 2
        }, 1032, ["text", "alignment"])) : t.warningText ? (s(), k(m, {
          key: 1,
          text: t.warningText,
          "text-min-width": 150,
          "text-alignment": "left",
          alignment: d($).RIGHT
        }, {
          default: y(() => [e("div", D, [u(l, {
            name: "triangle-warning",
            class: "icon"
          }), e("div", F, h(t.label), 1)])]),
          _: 2
        }, 1032, ["text", "alignment"])) : (s(), c("div", H, [e("div", P, h(t.label), 1)]))]))), 128))]), e("div", {
          class: "chart",
          style: b({
            backgroundImage: d(T)
          })
        }, null, 4)], 64)) : (s(), c(x, {
          key: 1
        }, [u(i, {
          class: "skeleton-list"
        }), u(i, {
          class: "skeleton-chart"
        })], 64))])
      }
    }
  }),
  U = O(R, [
    ["__scopeId", "data-v-d01cc7b5"]
  ]);
export {
  U as _
};