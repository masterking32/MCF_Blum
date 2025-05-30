import {
  d as w,
  x as V,
  B as b,
  a9 as N,
  cx as h,
  cy as G,
  aa as g,
  cz as R,
  bY as A,
  b9 as j,
  I as M,
  J as P,
  o,
  c as l,
  a as y,
  F as d,
  q as k,
  e as n,
  y as O,
  aB as Y,
  aT as D,
  ax as C,
  E as i,
  ao as q,
  cA as F,
  n as z,
  t as r,
  C as K,
  m as T,
  w as E,
  c4 as $,
  cB as J,
  v as X,
  f as Z
} from "./BMIPMNvl.js";
import {
  K as H
} from "./DiwcvdI6.js";
import {
  a as Q
} from "./Cf1lM10g.js";
import {
  _ as W
} from "./Dhdd368s.js";
import "./CFSTP3Bq.js";
import "./B95wWjEa.js";
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
  ye = {
    key: 2
  },
  pe = ["onUpdate:modelValue", "multiple"];
var S = (v => (v.CLOSE = "close", v))(S || {});
const f = "model-value",
  ie = w({
    __name: "preview",
    setup(v) {
      const U = [{
          component: V,
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
            options: Object.values(S)
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
          component: Q,
          key: "kit-input",
          props: [{
            key: f,
            value: "",
            type: "STRING"
          }, {
            key: "type",
            value: h.TEXT,
            type: "ENUM",
            options: Object.values(h)
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
            value: G.REGULAR,
            type: "ENUM",
            options: Object.values(G)
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
          component: W,
          key: "pages-welcome"
        }],
        I = (() => {
          const a = j().query.component;
          if (typeof a == "string") return a
        })(),
        _ = M(I),
        s = M(),
        x = a => a.split("-").map(t => t[0].toUpperCase() + t.substring(1).toLowerCase()).join(" "),
        B = a => a && Object.fromEntries(a.map(t => [t.key, t.value])),
        L = a => {
          var c, p;
          const t = (p = (c = s.value) == null ? void 0 : c.props) == null ? void 0 : p.find(e => e.key === f);
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
        var c, p;
        return o(), l("div", ee, [y("div", te, [(o(), l(d, null, k(U, e => y("div", {
          key: e.key,
          class: z(["menu-components-item", {
            "is-current": n(_) === e.key
          }]),
          onClick: m => _.value = e.key
        }, r(x(e.key)), 11, ae)), 64))]), y("div", oe, [(c = n(s)) != null && c.key ? (o(), O(C(n(s).component), D({
          key: 0,
          style: n(s).customStyle
        }, B(n(s).props), {
          "onUpdate:modelValue": t[0] || (t[0] = e => L(e))
        }), Y({
          _: 2
        }, [k(n(s).slots ? Object.entries(n(s).slots) : [], ([e, m]) => ({
          name: e,
          fn: K(() => [(o(), O(C(m)))])
        }))]), 1040, ["style"])) : i("", !0)]), (p = n(s)) != null && p.props ? (o(), l("div", se, [(o(!0), l(d, null, k(n(s).props, (e, m) => (o(), l(d, {
          key: m
        }, [e.type === "TOGGLE" ? (o(), l("label", le, [T(r(e.key) + " ", 1), E(y("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: "checkbox",
          label: e.key
        }, null, 8, ne), [
          [$, e.value]
        ])])) : i("", !0), e.type === "STRING" || e.type === "NUMBER" ? (o(), l("label", ue, [T(r(e.key) + " ", 1), E(y("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: e.type === "NUMBER" ? "number" : "text",
          placeholder: e.key
        }, null, 8, ce), [
          [J, e.value]
        ])])) : i("", !0), e.type === "ENUM" || e.type === "ENUM_ARRAY" ? (o(), l("label", ye, [T(r(e.key) + " ", 1), E(y("select", {
          "onUpdate:modelValue": u => e.value = u,
          multiple: e.type === "ENUM_ARRAY"
        }, [(o(!0), l(d, null, k(e.options, u => (o(), l("option", {
          key: u
        }, r(u), 1))), 128))], 8, pe), [
          [X, e.value]
        ])])) : i("", !0)], 64))), 128))])) : i("", !0)])
      }
    }
  }),
  Te = Z(ie, [
    ["__scopeId", "data-v-eed089be"]
  ]);
export {
  Te as
  default
};