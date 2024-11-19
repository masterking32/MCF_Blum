import {
  d as L,
  F as _,
  a,
  c as n,
  e as t,
  g as o,
  b as l,
  t as h,
  n as k,
  bS as D,
  j as R,
  ci as d,
  bW as O,
  cj as c,
  au as F,
  bU as E,
  ai as G,
  r as $,
  L as M,
  a8 as z,
  aB as g,
  m as C,
  w as K,
  cl as j,
  V as W,
  k as T,
  x as I,
  a4 as q,
  bZ as X,
  ak as Y,
  da as Z,
  db as H,
  a7 as J
} from "./nFxUmw4d.js";
const Q = {
    key: 0,
    src: D,
    alt: "Warning icon"
  },
  x = L({
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
    setup(b) {
      const m = b,
        s = _(() => {
          const u = m.value.length,
            r = m.maxLength - u;
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
      }, [t(s).type === "danger" ? (a(), n("img", Q)) : o("", !0), l("div", null, h(t(s).label), 1)], 2))
    }
  }),
  ee = R(x, [
    ["__scopeId", "data-v-3535603d"]
  ]),
  se = ["for"],
  te = {
    key: 0
  },
  ae = {
    class: "input-container"
  },
  oe = ["for"],
  ne = {
    key: 0,
    class: "prefix"
  },
  re = ["id", "disabled", "type", "placeholder", "readonly"],
  ie = {
    class: "postfix"
  },
  le = {
    class: "icon-container"
  },
  ue = {
    key: 0,
    src: Z,
    alt: "Check"
  },
  pe = {
    key: 1,
    src: H,
    alt: "Cross"
  },
  de = {
    key: 0,
    class: "caption"
  },
  ce = L({
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
        default: O.LARGE
      },
      status: {
        default: c.REGULAR
      },
      modifiers: {}
    },
    emits: ["update:modelValue", "change", "input", "focus", "blur"],
    setup(b, {
      emit: m
    }) {
      const s = b,
        u = m,
        r = F(),
        f = _({
          get() {
            return s.modelValue
          },
          set(e) {
            s.modifiers && (s.modifiers.includes(E.UPPERCASE) && (e = e.toUpperCase()), s.modifiers.includes(E.AMOUNT) && e && (e = G(e, {
              join: "emptyFractional"
            }))), i.value && i.value.value !== e && (i.value.value = e), u("update:modelValue", e)
          }
        }),
        i = $(),
        v = $(!1),
        S = () => {
          v.value = !0, u("focus", i.value)
        },
        U = () => {
          v.value = !1, u("blur", i.value)
        },
        N = _(() => {
          const e = [];
          return e.push(`is-${s.status.toLowerCase()}`), e.push(`is-${s.size.toLowerCase()}`), v.value && e.push("is-focused"), s.disabled && e.push("is-disabled"), (s.errorCaption || s.isError) && e.push("is-error"), e
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
              throw s.type, M("Unknown input type")
          }
        }),
        P = () => {
          var e;
          return (e = i.value) == null ? void 0 : e.blur()
        };
      return (e, p) => {
        const w = ee,
          V = J,
          B = z("click-outside");
        return a(), n("div", {
          class: k(["kit-input", t(N)])
        }, [e.label || e.$slots["label-right"] || e.$slots.label ? (a(), n("label", {
          key: 0,
          for: t(r),
          class: "label"
        }, [g(e.$slots, "label", {}, () => [l("span", null, h(e.label), 1)], !0), e.maxLength !== void 0 || e.$slots["label-right"] ? (a(), n("span", te, [e.maxLength ? (a(), C(w, {
          key: 0,
          value: t(f),
          "max-length": e.maxLength
        }, null, 8, ["value", "max-length"])) : e.$slots["label-right"] ? g(e.$slots, "label-right", {
          key: 1
        }, void 0, !0) : o("", !0)])) : o("", !0)], 8, se)) : o("", !0), l("div", ae, [l("label", {
          for: t(r),
          class: k(["label-wrapper", {
            "has-icon-offset": e.status !== t(c).REGULAR
          }])
        }, [e.prefix ? (a(), n("div", ne, h(e.prefix), 1)) : o("", !0), K(l("input", {
          id: t(r),
          ref_key: "inputRef",
          ref: i,
          "onUpdate:modelValue": p[0] || (p[0] = y => W(f) ? f.value = y : null),
          disabled: e.disabled,
          type: t(A),
          placeholder: e.placeholder,
          readonly: e.disabled,
          onChange: p[1] || (p[1] = y => e.$emit("change")),
          onInput: p[2] || (p[2] = y => e.$emit("input")),
          onBlur: U,
          onFocus: S
        }, null, 40, re), [
          [j, t(f)],
          [B, P]
        ]), l("div", ie, [g(e.$slots, "postfix", {}, void 0, !0)])], 10, oe), l("div", le, [T(X, {
          name: "change-item-transition"
        }, {
          default: I(() => [e.status === t(c).SUCCESS ? (a(), n("img", ue)) : o("", !0), e.status === t(c).ERROR ? (a(), n("img", pe)) : o("", !0), e.status === t(c).LOADING ? (a(), C(V, {
            key: 2,
            type: t(q).DARK,
            size: 20,
            "track-dimmed": "",
            class: "spinner"
          }, null, 8, ["type"])) : o("", !0)]),
          _: 1
        })])]), T(Y, {
          name: "caption-transition"
        }, {
          default: I(() => [e.errorCaption || e.caption ? (a(), n("p", de, h(e.errorCaption || e.caption), 1)) : o("", !0)]),
          _: 1
        })], 2)
      }
    }
  }),
  fe = R(ce, [
    ["__scopeId", "data-v-62b0230d"]
  ]);
export {
  ee as _, fe as a
};