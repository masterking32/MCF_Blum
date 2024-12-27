import {
  d as V,
  x as g,
  B as U,
  W as N,
  c8 as G,
  c9 as h,
  aK as B,
  ai as R,
  bG as j,
  R as A,
  L as M,
  Q as P,
  o,
  c as l,
  a as i,
  F as d,
  q as k,
  e as n,
  G as O,
  bO as Y,
  ag as D,
  aj as C,
  C as y,
  ae as q,
  ca as F,
  n as K,
  t as r,
  I as z,
  m as T,
  w as E,
  bP as $,
  cb as Q,
  v as W,
  f as X
} from "./DRqvt5pl.js";
import {
  K as Z
} from "./CAkeo1th.js";
import {
  a as H
} from "./CncdMT2L.js";
import {
  _ as J
} from "./CKRsUMsd.js";
import "./Dgy_2gUO.js";
import "./BvaVk8E1.js";
import "./CMncxNGJ.js";
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
  ie = {
    key: 2
  },
  pe = ["onUpdate:modelValue", "multiple"];
var S = (v => (v.CLOSE = "close", v))(S || {});
const b = "model-value",
  ye = V({
    __name: "preview",
    setup(v) {
      const f = [{
          component: g,
          key: "kit-button",
          props: [{
            key: "label",
            value: "Button",
            type: "STRING"
          }, {
            key: "type",
            type: "ENUM",
            value: U.PRIMARY,
            options: Object.values(U)
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
          component: H,
          key: "kit-input",
          props: [{
            key: b,
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
          component: B,
          key: "kit-bottom-modal",
          props: [{
            key: b,
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
          component: Z,
          key: "kit-file-uploader",
          props: [{
            key: "hideUi",
            type: "TOGGLE",
            value: !1
          }, {
            key: "accept",
            type: "ENUM_ARRAY",
            value: [],
            options: Object.values(j)
          }, {
            key: "maxFileSizeMb",
            type: "NUMBER",
            value: 10
          }]
        }, {
          component: J,
          key: "pages-welcome"
        }],
        I = (() => {
          const a = A().query.component;
          if (typeof a == "string") return a
        })(),
        _ = M(I),
        s = M(),
        L = a => a.split("-").map(t => t[0].toUpperCase() + t.substring(1).toLowerCase()).join(" "),
        x = a => a && Object.fromEntries(a.map(t => [t.key, t.value])),
        w = a => {
          var c, p;
          const t = (p = (c = s.value) == null ? void 0 : c.props) == null ? void 0 : p.find(e => e.key === b);
          t && typeof t.value == typeof a && (t.value = a)
        };
      return P(() => _.value, a => {
        const t = f.find(c => c.key === a);
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
        return o(), l("div", ee, [i("div", te, [(o(), l(d, null, k(f, e => i("div", {
          key: e.key,
          class: K(["menu-components-item", {
            "is-current": n(_) === e.key
          }]),
          onClick: m => _.value = e.key
        }, r(L(e.key)), 11, ae)), 64))]), i("div", oe, [(c = n(s)) != null && c.key ? (o(), O(C(n(s).component), D({
          key: 0,
          style: n(s).customStyle
        }, x(n(s).props), {
          "onUpdate:modelValue": t[0] || (t[0] = e => w(e))
        }), Y({
          _: 2
        }, [k(n(s).slots ? Object.entries(n(s).slots) : [], ([e, m]) => ({
          name: e,
          fn: z(() => [(o(), O(C(m)))])
        }))]), 1040, ["style"])) : y("", !0)]), (p = n(s)) != null && p.props ? (o(), l("div", se, [(o(!0), l(d, null, k(n(s).props, (e, m) => (o(), l(d, {
          key: m
        }, [e.type === "TOGGLE" ? (o(), l("label", le, [T(r(e.key) + " ", 1), E(i("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: "checkbox",
          label: e.key
        }, null, 8, ne), [
          [$, e.value]
        ])])) : y("", !0), e.type === "STRING" || e.type === "NUMBER" ? (o(), l("label", ue, [T(r(e.key) + " ", 1), E(i("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: e.type === "NUMBER" ? "number" : "text",
          placeholder: e.key
        }, null, 8, ce), [
          [Q, e.value]
        ])])) : y("", !0), e.type === "ENUM" || e.type === "ENUM_ARRAY" ? (o(), l("label", ie, [T(r(e.key) + " ", 1), E(i("select", {
          "onUpdate:modelValue": u => e.value = u,
          multiple: e.type === "ENUM_ARRAY"
        }, [(o(!0), l(d, null, k(e.options, u => (o(), l("option", {
          key: u
        }, r(u), 1))), 128))], 8, pe), [
          [W, e.value]
        ])])) : y("", !0)], 64))), 128))])) : y("", !0)])
      }
    }
  }),
  Ee = X(ye, [
    ["__scopeId", "data-v-eed089be"]
  ]);
export {
  Ee as
  default
};