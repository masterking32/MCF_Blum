import {
  d as L,
  j as _,
  o as a,
  c as n,
  e as t,
  E as o,
  a as l,
  t as h,
  n as k,
  cD as V,
  f as N,
  cv as d,
  c0 as M,
  cw as c,
  bI as F,
  at as G,
  b_ as T,
  ai as K,
  y as I,
  a2 as z,
  Q as Y,
  ac as E,
  M as C,
  w as j,
  cy as q,
  p as W,
  b as $,
  D as R,
  b9 as X,
  b7 as H,
  ak as J,
  du as Q,
  dv as Z,
  ba as x,
  dw as ee
} from "./DrkX69Hr.js";
const se = {
    key: 0,
    src: V,
    alt: "Warning icon"
  },
  te = L({
    __name: "KitInputOver",
    props: {
      value: {
        type: String,
        required: !0
      },
      maxLength: {
        type: Number,
        required: !0
      }
    },
    setup(y) {
      const f = y,
        s = _(() => {
          const u = f.value.length,
            r = f.maxLength - u;
          return r < 0 ? {
            type: "danger",
            label: `${r*-1} over`
          } : {
            type: "regular",
            label: r.toString()
          }
        });
      return (u, r) => (a(), n("div", {
        class: k(["kit-input-over", [`is-${t(s).type}`]])
      }, [t(s).type === "danger" ? (a(), n("img", se)) : o("", !0), l("div", null, h(t(s).label), 1)], 2))
    }
  }),
  ae = N(te, [
    ["__scopeId", "data-v-3535603d"]
  ]),
  oe = ["for"],
  ne = {
    key: 0
  },
  re = {
    class: "input-container"
  },
  ie = ["for"],
  le = {
    key: 0,
    class: "prefix"
  },
  ue = ["id", "disabled", "type", "placeholder", "readonly"],
  pe = {
    class: "postfix"
  },
  de = {
    class: "icon-container"
  },
  ce = {
    key: 0,
    src: Q,
    alt: "Check"
  },
  fe = {
    key: 1,
    src: Z,
    alt: "Cross"
  },
  me = {
    key: 0,
    class: "caption"
  },
  _e = L({
    __name: "Input",
    props: {
      modelValue: {},
      errorCaption: {},
      isError: {
        type: Boolean,
        default: !1
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      maxLength: {},
      type: {
        default: d.TEXT
      },
      label: {},
      placeholder: {},
      caption: {},
      prefix: {},
      size: {
        default: M.LARGE
      },
      status: {
        default: c.REGULAR
      },
      modifiers: {},
      tertiary: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["update:modelValue", "change", "input", "focus", "blur"],
    setup(y, {
      emit: f
    }) {
      const s = y,
        u = f,
        r = F(ee),
        v = G(),
        m = _({
          get() {
            return s.modelValue
          },
          set(e) {
            s.modifiers && (s.modifiers.includes(T.UPPERCASE) && (e = e.toUpperCase()), s.modifiers.includes(T.AMOUNT) && e && (e = K(e, {
              join: "emptyFractional"
            }))), i.value && i.value.value !== e && (i.value.value = e), u("update:modelValue", e)
          }
        }),
        i = I(),
        b = I(!1),
        S = () => {
          b.value = !0, r == null || r.onInputFocused(), u("focus", i.value)
        },
        U = () => {
          b.value = !1, u("blur", i.value)
        },
        w = _(() => {
          const e = [];
          return e.push(`is-${s.status.toLowerCase()}`), e.push(`is-${s.size.toLowerCase()}`), b.value && e.push("is-focused"), s.disabled && e.push("is-disabled"), (s.errorCaption || s.isError) && e.push("is-error"), s.tertiary && e.push("is-tertiary"), e
        }),
        A = _(() => {
          switch (s.type) {
            case d.TEXT:
              return "text";
            case d.PASSWORD:
              return "password";
            case d.EMAIL:
              return "email";
            case d.AMOUNT:
              return "number";
            default:
              throw s.type, z("Unknown input type")
          }
        }),
        O = () => {
          var e;
          return (e = i.value) == null ? void 0 : e.blur()
        };
      return (e, p) => {
        const P = ae,
          D = x,
          B = Y("click-outside");
        return a(), n("div", {
          class: k(["kit-input", t(w)])
        }, [e.label || e.$slots["label-right"] || e.$slots.label ? (a(), n("label", {
          key: 0,
          for: t(v),
          class: "label"
        }, [E(e.$slots, "label", {}, () => [l("span", null, h(e.label), 1)], !0), e.maxLength !== void 0 || e.$slots["label-right"] ? (a(), n("span", ne, [e.maxLength ? (a(), C(P, {
          key: 0,
          value: t(m),
          "max-length": e.maxLength
        }, null, 8, ["value", "max-length"])) : e.$slots["label-right"] ? E(e.$slots, "label-right", {
          key: 1
        }, void 0, !0) : o("", !0)])) : o("", !0)], 8, oe)) : o("", !0), l("div", re, [l("label", {
          for: t(v),
          class: k(["label-wrapper", {
            "has-icon-offset": e.status !== t(c).REGULAR
          }])
        }, [e.prefix ? (a(), n("div", le, h(e.prefix), 1)) : o("", !0), j(l("input", {
          id: t(v),
          ref_key: "inputRef",
          ref: i,
          "onUpdate:modelValue": p[0] || (p[0] = g => W(m) ? m.value = g : null),
          disabled: e.disabled,
          type: t(A),
          placeholder: e.placeholder,
          readonly: e.disabled,
          onChange: p[1] || (p[1] = g => e.$emit("change")),
          onInput: p[2] || (p[2] = g => e.$emit("input")),
          onBlur: U,
          onFocus: S
        }, null, 40, ue), [
          [q, t(m)],
          [B, O]
        ]), l("div", pe, [E(e.$slots, "postfix", {}, void 0, !0)])], 10, ie), l("div", de, [$(H, {
          name: "change-item-transition"
        }, {
          default: R(() => [e.status === t(c).SUCCESS ? (a(), n("img", ce)) : o("", !0), e.status === t(c).ERROR ? (a(), n("img", fe)) : o("", !0), e.status === t(c).LOADING ? (a(), C(D, {
            key: 2,
            type: t(X).DARK,
            size: 20,
            "track-dimmed": "",
            class: "spinner"
          }, null, 8, ["type"])) : o("", !0)]),
          _: 1
        })])]), $(J, {
          name: "caption-transition"
        }, {
          default: R(() => [e.errorCaption || e.caption ? (a(), n("p", me, h(e.errorCaption || e.caption), 1)) : o("", !0)]),
          _: 1
        })], 2)
      }
    }
  }),
  ye = N(_e, [
    ["__scopeId", "data-v-e0e7fed1"]
  ]);
export {
  ye as _, ae as a
};