import {
  d as V,
  x as B,
  B as b,
  W as N,
  cv as G,
  cw as h,
  X as g,
  ap as R,
  bY as A,
  bi as j,
  y as M,
  T as P,
  o,
  c as l,
  a as p,
  F as d,
  q as k,
  e as n,
  M as O,
  aG as Y,
  an as D,
  aq as S,
  E as i,
  aa as q,
  cx as F,
  n as K,
  t as r,
  D as z,
  m as T,
  w as E,
  c2 as $,
  cy as X,
  v as W,
  f as Z
} from "./BhDmcp0J.js";
import {
  K as H
} from "./Drv3MqLz.js";
import {
  _ as J
} from "./PJWbrHhE.js";
import {
  _ as Q
} from "./BN4fCAen.js";
import "./pVpChByk.js";
import "./C2S_QJmL.js";
import "./Bbuyy3BV.js";
const ee = {
    class: "preview-page page no-wrapper"
  },
  te = {
    class: "menu-components"
  },
  ae = ["onClick"],
  oe = {
    class: "active-components"
  },
  se = {
    key: 0,
    class: "props"
  },
  le = {
    key: 0
  },
  ne = ["onUpdate:modelValue", "label"],
  ue = {
    key: 1
  },
  ce = ["onUpdate:modelValue", "type", "placeholder"],
  pe = {
    key: 2
  },
  ye = ["onUpdate:modelValue", "multiple"];
var C = (v => (v.CLOSE = "close", v))(C || {});
const f = "model-value",
  ie = V({
    __name: "preview",
    setup(v) {
      const U = [{
          component: B,
          key: "kit-button",
          props: [{
            key: "label",
            value: "Button",
            type: "STRING"
          }, {
            key: "type",
            type: "ENUM",
            value: b.PRIMARY,
            options: Object.values(b)
          }, {
            key: "size",
            type: "ENUM",
            value: N.MEDIUM,
            options: Object.values(N)
          }, {
            key: "isDanger",
            type: "TOGGLE",
            value: !1
          }, {
            key: "icon",
            type: "ENUM",
            value: "",
            options: Object.values(C)
          }, {
            key: "link",
            value: "",
            type: "STRING"
          }, {
            key: "disabled",
            value: !1,
            type: "TOGGLE"
          }, {
            key: "fill",
            value: !1,
            type: "TOGGLE"
          }, {
            key: "hasContinueIcon",
            value: !1,
            type: "TOGGLE"
          }]
        }, {
          component: J,
          key: "kit-input",
          props: [{
            key: f,
            value: "",
            type: "STRING"
          }, {
            key: "type",
            value: G.TEXT,
            type: "ENUM",
            options: Object.values(G)
          }, {
            key: "label",
            value: "Label",
            type: "STRING"
          }, {
            key: "placeholder",
            value: "Placeholder",
            type: "STRING"
          }, {
            key: "caption",
            value: "",
            type: "STRING"
          }, {
            key: "status",
            value: h.REGULAR,
            type: "ENUM",
            options: Object.values(h)
          }, {
            key: "disabled",
            value: !1,
            type: "TOGGLE"
          }]
        }, {
          component: g,
          key: "kit-bottom-modal",
          props: [{
            key: f,
            value: !0,
            type: "TOGGLE"
          }, {
            key: "title",
            value: "Modal Title",
            type: "STRING"
          }],
          slots: {
            default: () => R("div", [...Array(50)].map((a, t) => R("div", `${t+1} - Test`)))
          }
        }, {
          component: H,
          key: "kit-file-uploader",
          props: [{
            key: "hideUi",
            type: "TOGGLE",
            value: !1
          }, {
            key: "accept",
            type: "ENUM_ARRAY",
            value: [],
            options: Object.values(A)
          }, {
            key: "maxFileSizeMb",
            type: "NUMBER",
            value: 10
          }]
        }, {
          component: Q,
          key: "pages-welcome"
        }],
        I = (() => {
          const a = j().query.component;
          if (typeof a == "string") return a
        })(),
        _ = M(I),
        s = M(),
        x = a => a.split("-").map(t => t[0].toUpperCase() + t.substring(1).toLowerCase()).join(" "),
        w = a => a && Object.fromEntries(a.map(t => [t.key, t.value])),
        L = a => {
          var c, y;
          const t = (y = (c = s.value) == null ? void 0 : c.props) == null ? void 0 : y.find(e => e.key === f);
          t && typeof t.value == typeof a && (t.value = a)
        };
      return P(() => _.value, a => {
        const t = U.find(c => c.key === a);
        t ? (q().push({
          query: {
            component: a
          }
        }), s.value = {
          ...t,
          component: F(t.component)
        }) : window.history.replaceState({}, "", location.pathname)
      }, {
        immediate: !0
      }), (a, t) => {
        var c, y;
        return o(), l("div", ee, [p("div", te, [(o(), l(d, null, k(U, e => p("div", {
          key: e.key,
          class: K(["menu-components-item", {
            "is-current": n(_) === e.key
          }]),
          onClick: m => _.value = e.key
        }, r(x(e.key)), 11, ae)), 64))]), p("div", oe, [(c = n(s)) != null && c.key ? (o(), O(S(n(s).component), D({
          key: 0,
          style: n(s).customStyle
        }, w(n(s).props), {
          "onUpdate:modelValue": t[0] || (t[0] = e => L(e))
        }), Y({
          _: 2
        }, [k(n(s).slots ? Object.entries(n(s).slots) : [], ([e, m]) => ({
          name: e,
          fn: z(() => [(o(), O(S(m)))])
        }))]), 1040, ["style"])) : i("", !0)]), (y = n(s)) != null && y.props ? (o(), l("div", se, [(o(!0), l(d, null, k(n(s).props, (e, m) => (o(), l(d, {
          key: m
        }, [e.type === "TOGGLE" ? (o(), l("label", le, [T(r(e.key) + " ", 1), E(p("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: "checkbox",
          label: e.key
        }, null, 8, ne), [
          [$, e.value]
        ])])) : i("", !0), e.type === "STRING" || e.type === "NUMBER" ? (o(), l("label", ue, [T(r(e.key) + " ", 1), E(p("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: e.type === "NUMBER" ? "number" : "text",
          placeholder: e.key
        }, null, 8, ce), [
          [X, e.value]
        ])])) : i("", !0), e.type === "ENUM" || e.type === "ENUM_ARRAY" ? (o(), l("label", pe, [T(r(e.key) + " ", 1), E(p("select", {
          "onUpdate:modelValue": u => e.value = u,
          multiple: e.type === "ENUM_ARRAY"
        }, [(o(!0), l(d, null, k(e.options, u => (o(), l("option", {
          key: u
        }, r(u), 1))), 128))], 8, ye), [
          [W, e.value]
        ])])) : i("", !0)], 64))), 128))])) : i("", !0)])
      }
    }
  }),
  Ee = Z(ie, [
    ["__scopeId", "data-v-eed089be"]
  ]);
export {
  Ee as
  default
};