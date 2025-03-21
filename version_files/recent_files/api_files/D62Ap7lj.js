import {
  d as g,
  x as w,
  B as b,
  U as N,
  cd as h,
  ce as G,
  aN as B,
  ag as R,
  bM as A,
  b7 as j,
  K as M,
  aF as P,
  o,
  c as l,
  a as p,
  F as d,
  q as k,
  e as n,
  G as O,
  bV as D,
  ae as Y,
  ah as S,
  D as y,
  ac as F,
  cf as q,
  n as K,
  t as r,
  H as z,
  m as T,
  w as f,
  bW as $,
  cg as H,
  v as W,
  f as X
} from "./D7slzxTT.js";
import {
  K as Z
} from "./7Fl58YAv.js";
import {
  a as J
} from "./BrSnA8XT.js";
import {
  _ as Q
} from "./D5vqjlm1.js";
import "./B0HNtSUD.js";
import "./rwQW_dLy.js";
import "./D9XjqWgU.js";
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
  ie = ["onUpdate:modelValue", "multiple"];
var C = (v => (v.CLOSE = "close", v))(C || {});
const E = "model-value",
  ye = g({
    __name: "preview",
    setup(v) {
      const U = [{
          component: w,
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
            key: E,
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
          component: B,
          key: "kit-bottom-modal",
          props: [{
            key: E,
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
        L = a => a && Object.fromEntries(a.map(t => [t.key, t.value])),
        V = a => {
          var c, i;
          const t = (i = (c = s.value) == null ? void 0 : c.props) == null ? void 0 : i.find(e => e.key === E);
          t && typeof t.value == typeof a && (t.value = a)
        };
      return P(() => _.value, a => {
        const t = U.find(c => c.key === a);
        t ? (F().push({
          query: {
            component: a
          }
        }), s.value = {
          ...t,
          component: q(t.component)
        }) : window.history.replaceState({}, "", location.pathname)
      }, {
        immediate: !0
      }), (a, t) => {
        var c, i;
        return o(), l("div", ee, [p("div", te, [(o(), l(d, null, k(U, e => p("div", {
          key: e.key,
          class: K(["menu-components-item", {
            "is-current": n(_) === e.key
          }]),
          onClick: m => _.value = e.key
        }, r(x(e.key)), 11, ae)), 64))]), p("div", oe, [(c = n(s)) != null && c.key ? (o(), O(S(n(s).component), Y({
          key: 0,
          style: n(s).customStyle
        }, L(n(s).props), {
          "onUpdate:modelValue": t[0] || (t[0] = e => V(e))
        }), D({
          _: 2
        }, [k(n(s).slots ? Object.entries(n(s).slots) : [], ([e, m]) => ({
          name: e,
          fn: z(() => [(o(), O(S(m)))])
        }))]), 1040, ["style"])) : y("", !0)]), (i = n(s)) != null && i.props ? (o(), l("div", se, [(o(!0), l(d, null, k(n(s).props, (e, m) => (o(), l(d, {
          key: m
        }, [e.type === "TOGGLE" ? (o(), l("label", le, [T(r(e.key) + " ", 1), f(p("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: "checkbox",
          label: e.key
        }, null, 8, ne), [
          [$, e.value]
        ])])) : y("", !0), e.type === "STRING" || e.type === "NUMBER" ? (o(), l("label", ue, [T(r(e.key) + " ", 1), f(p("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: e.type === "NUMBER" ? "number" : "text",
          placeholder: e.key
        }, null, 8, ce), [
          [H, e.value]
        ])])) : y("", !0), e.type === "ENUM" || e.type === "ENUM_ARRAY" ? (o(), l("label", pe, [T(r(e.key) + " ", 1), f(p("select", {
          "onUpdate:modelValue": u => e.value = u,
          multiple: e.type === "ENUM_ARRAY"
        }, [(o(!0), l(d, null, k(e.options, u => (o(), l("option", {
          key: u
        }, r(u), 1))), 128))], 8, ie), [
          [W, e.value]
        ])])) : y("", !0)], 64))), 128))])) : y("", !0)])
      }
    }
  }),
  fe = X(ye, [
    ["__scopeId", "data-v-eed089be"]
  ]);
export {
  fe as
  default
};