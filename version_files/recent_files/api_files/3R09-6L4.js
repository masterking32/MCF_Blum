import {
  d as I,
  o as a,
  c as i,
  z as v,
  G as o,
  a as r,
  t as f,
  e as t,
  A as G,
  _ as F,
  f as T,
  j as y,
  n as E,
  cG as M,
  cx as d,
  c3 as z,
  cy as m,
  bI as Y,
  b4 as q,
  c0 as C,
  bv as j,
  J as N,
  ah as J,
  a2 as W,
  aq as $,
  w as X,
  cB as Z,
  p as H,
  b as L,
  D as R,
  aY as Q,
  ba as x,
  av as ee,
  du as se,
  dv as te,
  aZ as ae,
  dw as oe
} from "./Dy2of55E.js";
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
    setup(_) {
      return (n, s) => {
        const l = F;
        return a(), i("div", ne, [n.iconName ? (a(), v(l, {
          key: 0,
          name: n.iconName,
          class: "icon"
        }, null, 8, ["name"])) : o("", !0), r("div", ie, [r("span", le, f(n.title), 1), n.isOptional ? (a(), i("span", re, f(` ${("t"in n?n.t:t(G))("base.optional")}`), 1)) : o("", !0)])])
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
    setup(_) {
      const n = _,
        s = y(() => {
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
      }, [t(s).type === "danger" ? (a(), i("img", ce)) : o("", !0), r("div", null, f(t(s).label), 1)], 2))
    }
  }),
  me = T(de, [
    ["__scopeId", "data-v-3535603d"]
  ]),
  fe = ["for"],
  _e = {
    key: 0
  },
  he = ["for"],
  ve = {
    key: 0,
    class: "prefix"
  },
  ye = ["id", "disabled", "type", "placeholder", "readonly"],
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
    setup(_, {
      emit: n
    }) {
      const s = _,
        l = n,
        u = Y(oe),
        b = q(),
        h = y({
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
        A = y(() => {
          const e = [];
          return e.push(`is-${s.status.toLowerCase()}`), e.push(`is-${s.size.toLowerCase()}`), g.value && e.push("is-focused"), s.disabled && e.push("is-disabled"), (s.errorCaption || s.isError) && e.push("is-error"), s.tertiary && e.push("is-tertiary"), e
        }),
        B = y(() => {
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
              throw s.type, J("Unknown input type")
          }
        }),
        w = () => {
          var e;
          return (e = p.value) == null ? void 0 : e.blur()
        };
      return (e, c) => {
        const P = pe,
          D = me,
          K = ae,
          V = W("click-outside");
        return a(), i("div", {
          class: E(["kit-input", t(A)])
        }, [e.label || e.$slots["label-right"] || e.$slots.label ? (a(), i("label", {
          key: 0,
          for: t(b),
          class: "label"
        }, [$(e.$slots, "label", {}, () => [r("div", null, [e.label ? (a(), v(P, {
          key: 0,
          title: e.label,
          "is-optional": e.isOptional
        }, null, 8, ["title", "is-optional"])) : o("", !0)])], !0), e.maxLength !== void 0 || e.$slots["label-right"] ? (a(), i("span", _e, [e.maxLength ? (a(), v(D, {
          key: 0,
          value: t(h),
          "max-length": e.maxLength
        }, null, 8, ["value", "max-length"])) : e.$slots["label-right"] ? $(e.$slots, "label-right", {
          key: 1
        }, void 0, !0) : o("", !0)])) : o("", !0)], 8, fe)) : o("", !0), r("div", {
          class: "input-container",
          onClick: U
        }, [r("label", {
          for: t(b),
          class: E(["label-wrapper", {
            "has-icon-offset": e.status !== t(m).REGULAR
          }])
        }, [e.prefix ? (a(), i("div", ve, f(e.prefix), 1)) : o("", !0), X(r("input", {
          id: t(b),
          ref_key: "inputRef",
          ref: p,
          "onUpdate:modelValue": c[0] || (c[0] = k => H(h) ? h.value = k : null),
          disabled: e.disabled,
          type: t(B),
          placeholder: e.placeholder,
          readonly: e.disabled,
          onChange: c[1] || (c[1] = k => e.$emit("change")),
          onInput: c[2] || (c[2] = k => e.$emit("input")),
          onBlur: S,
          onFocus: O
        }, null, 40, ye), [
          [Z, t(h)],
          [V, w]
        ]), r("div", be, [$(e.$slots, "postfix", {}, void 0, !0)])], 10, he), r("div", ge, [L(x, {
          name: "change-item-transition"
        }, {
          default: R(() => [e.status === t(m).SUCCESS ? (a(), i("img", ke)) : o("", !0), e.status === t(m).ERROR ? (a(), i("img", $e)) : o("", !0), e.status === t(m).LOADING ? (a(), v(K, {
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
          default: R(() => [e.errorCaption || e.caption ? (a(), i("p", Ee, f(e.errorCaption || e.caption), 1)) : o("", !0)]),
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