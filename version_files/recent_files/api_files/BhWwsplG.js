import {
  d as I,
  o as a,
  c as i,
  y,
  E as o,
  a as r,
  t as _,
  e as t,
  z as F,
  _ as G,
  f as T,
  j as v,
  n as E,
  cG as M,
  cx as d,
  c3 as z,
  cy as m,
  bI as q,
  b6 as Y,
  c0 as C,
  bv as j,
  I as N,
  ag as W,
  a2 as X,
  aq as $,
  w as H,
  cB as J,
  p as Z,
  b as L,
  C as R,
  a_ as Q,
  bc as x,
  av as ee,
  du as se,
  dv as te,
  a$ as ae,
  dw as oe
} from "./YXPW7IJg.js";
const ne = {
    class: "kit-label"
  },
  ie = {
    class: "compose"
  },
  le = {
    class: "title"
  },
  re = {
    key: 0,
    class: "optional"
  },
  ue = I({
    __name: "KitLabel",
    props: {
      title: {},
      isOptional: {
        type: Boolean,
        default: !1
      },
      iconName: {
        default: void 0
      }
    },
    setup(f) {
      return (n, s) => {
        const l = G;
        return a(), i("div", ne, [n.iconName ? (a(), y(l, {
          key: 0,
          name: n.iconName,
          class: "icon"
        }, null, 8, ["name"])) : o("", !0), r("div", ie, [r("span", le, _(n.title), 1), n.isOptional ? (a(), i("span", re, _(` ${("t"in n?n.t:t(F))("base.optional")}`), 1)) : o("", !0)])])
      }
    }
  }),
  pe = T(ue, [
    ["__scopeId", "data-v-0ee1abfc"]
  ]),
  ce = {
    key: 0,
    src: M,
    alt: "Warning icon"
  },
  de = I({
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
    setup(f) {
      const n = f,
        s = v(() => {
          const l = n.value.length,
            u = n.maxLength - l;
          return u < 0 ? {
            type: "danger",
            label: `${u*-1} over`
          } : {
            type: "regular",
            label: u.toString()
          }
        });
      return (l, u) => (a(), i("div", {
        class: E(["kit-input-over", [`is-${t(s).type}`]])
      }, [t(s).type === "danger" ? (a(), i("img", ce)) : o("", !0), r("div", null, _(t(s).label), 1)], 2))
    }
  }),
  me = T(de, [
    ["__scopeId", "data-v-3535603d"]
  ]),
  _e = ["for"],
  fe = {
    key: 0
  },
  he = ["for"],
  ye = {
    key: 0,
    class: "prefix"
  },
  ve = ["id", "disabled", "type", "placeholder", "readonly"],
  be = {
    class: "postfix"
  },
  ge = {
    class: "icon-container"
  },
  ke = {
    key: 0,
    src: se,
    alt: "Check"
  },
  $e = {
    key: 1,
    src: te,
    alt: "Cross"
  },
  Ee = {
    key: 0,
    class: "caption"
  },
  Ie = I({
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
      isOptional: {
        type: Boolean,
        default: !1
      },
      type: {
        default: d.TEXT
      },
      label: {},
      placeholder: {},
      caption: {},
      prefix: {},
      size: {
        default: z.LARGE
      },
      status: {
        default: m.REGULAR
      },
      modifiers: {},
      tertiary: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["update:modelValue", "change", "input", "focus", "blur", "click"],
    setup(f, {
      emit: n
    }) {
      const s = f,
        l = n,
        u = q(oe),
        b = Y(),
        h = v({
          get() {
            return s.modelValue
          },
          set(e) {
            s.modifiers && (s.modifiers.includes(C.UPPERCASE) && (e = e.toUpperCase()), s.modifiers.includes(C.AMOUNT) && e && (e = j(e, {
              join: "emptyFractional"
            }))), p.value && p.value.value !== e && (p.value.value = e), l("update:modelValue", e)
          }
        }),
        p = N(),
        g = N(!1),
        O = () => {
          g.value = !0, u == null || u.onInputFocused(), l("focus", p.value)
        },
        S = () => {
          g.value = !1, l("blur", p.value)
        },
        U = () => l("click", p.value),
        B = v(() => {
          const e = [];
          return e.push(`is-${s.status.toLowerCase()}`), e.push(`is-${s.size.toLowerCase()}`), g.value && e.push("is-focused"), s.disabled && e.push("is-disabled"), (s.errorCaption || s.isError) && e.push("is-error"), s.tertiary && e.push("is-tertiary"), e
        }),
        w = v(() => {
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
              throw s.type, W("Unknown input type")
          }
        }),
        A = () => {
          var e;
          return (e = p.value) == null ? void 0 : e.blur()
        };
      return (e, c) => {
        const P = pe,
          D = me,
          K = ae,
          V = X("click-outside");
        return a(), i("div", {
          class: E(["kit-input", t(B)])
        }, [e.label || e.$slots["label-right"] || e.$slots.label ? (a(), i("label", {
          key: 0,
          for: t(b),
          class: "label"
        }, [$(e.$slots, "label", {}, () => [r("div", null, [e.label ? (a(), y(P, {
          key: 0,
          title: e.label,
          "is-optional": e.isOptional
        }, null, 8, ["title", "is-optional"])) : o("", !0)])], !0), e.maxLength !== void 0 || e.$slots["label-right"] ? (a(), i("span", fe, [e.maxLength ? (a(), y(D, {
          key: 0,
          value: t(h),
          "max-length": e.maxLength
        }, null, 8, ["value", "max-length"])) : e.$slots["label-right"] ? $(e.$slots, "label-right", {
          key: 1
        }, void 0, !0) : o("", !0)])) : o("", !0)], 8, _e)) : o("", !0), r("div", {
          class: "input-container",
          onClick: U
        }, [r("label", {
          for: t(b),
          class: E(["label-wrapper", {
            "has-icon-offset": e.status !== t(m).REGULAR
          }])
        }, [e.prefix ? (a(), i("div", ye, _(e.prefix), 1)) : o("", !0), H(r("input", {
          id: t(b),
          ref_key: "inputRef",
          ref: p,
          "onUpdate:modelValue": c[0] || (c[0] = k => Z(h) ? h.value = k : null),
          disabled: e.disabled,
          type: t(w),
          placeholder: e.placeholder,
          readonly: e.disabled,
          onChange: c[1] || (c[1] = k => e.$emit("change")),
          onInput: c[2] || (c[2] = k => e.$emit("input")),
          onBlur: S,
          onFocus: O
        }, null, 40, ve), [
          [J, t(h)],
          [V, A]
        ]), r("div", be, [$(e.$slots, "postfix", {}, void 0, !0)])], 10, he), r("div", ge, [L(x, {
          name: "change-item-transition"
        }, {
          default: R(() => [e.status === t(m).SUCCESS ? (a(), i("img", ke)) : o("", !0), e.status === t(m).ERROR ? (a(), i("img", $e)) : o("", !0), e.status === t(m).LOADING ? (a(), y(K, {
            key: 2,
            type: t(Q).DARK,
            size: 20,
            "track-dimmed": "",
            class: "spinner"
          }, null, 8, ["type"])) : o("", !0)]),
          _: 1
        })])]), L(ee, {
          name: "caption-transition"
        }, {
          default: R(() => [e.errorCaption || e.caption ? (a(), i("p", Ee, _(e.errorCaption || e.caption), 1)) : o("", !0)]),
          _: 1
        })], 2)
      }
    }
  }),
  Ce = T(Ie, [
    ["__scopeId", "data-v-0647f2d9"]
  ]);
export {
  pe as _, Ce as a, me as b
};