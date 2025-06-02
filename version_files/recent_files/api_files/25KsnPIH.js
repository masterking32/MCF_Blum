import {
  d as w,
  j as f,
  o as s,
  c,
  e as d,
  F as x,
  a as e,
  q as N,
  aH as y,
  t as h,
  z as b,
  D as k,
  b as u,
  by as $,
  _ as B,
  f as O
} from "./CTMy7kFf.js";
import {
  _ as S
} from "./B91Fr_j1.js";
import {
  _ as j
} from "./B61P6QRF.js";
const E = {
    class: "memepad-jetton-statistics-card"
  },
  G = {
    class: "list"
  },
  H = {
    class: "header"
  },
  K = {
    class: "title"
  },
  L = {
    class: "value type-highlighted"
  },
  z = {
    class: "label"
  },
  D = {
    class: "value type-warning"
  },
  F = {
    class: "label"
  },
  M = {
    key: 2,
    class: "value"
  },
  P = {
    class: "label"
  },
  R = w({
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
        }, [e("div", G, [(s(!0), c(x, null, N(d(v), t => (s(), c("div", {
          key: t.title,
          class: "item"
        }, [e("div", H, [e("div", {
          class: "dot",
          style: y({
            "--bg-color": t.color
          })
        }, null, 4), e("div", K, h(t.title), 1)]), t.highlightText ? (s(), b(m, {
          key: 0,
          text: t.highlightText,
          "text-min-width": 150,
          alignment: d($).RIGHT
        }, {
          default: k(() => [e("div", L, [u(l, {
            name: "circle-check-white",
            class: "icon"
          }), e("div", z, h(t.label), 1)])]),
          _: 2
        }, 1032, ["text", "alignment"])) : t.warningText ? (s(), b(m, {
          key: 1,
          text: t.warningText,
          "text-min-width": 150,
          "text-alignment": "left",
          alignment: d($).RIGHT
        }, {
          default: k(() => [e("div", D, [u(l, {
            name: "triangle-warning",
            class: "icon"
          }), e("div", F, h(t.label), 1)])]),
          _: 2
        }, 1032, ["text", "alignment"])) : (s(), c("div", M, [e("div", P, h(t.label), 1)]))]))), 128))]), e("div", {
          class: "chart",
          style: y({
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