import {
  d as T,
  o as a,
  c as i,
  N as y,
  G as o,
  a as l,
  t as _,
  e as t,
  C as K,
  _ as V,
  f as I,
  j as b,
  n as E,
  cM as G,
  cE as c,
  ca as M,
  cF as m,
  bO as z,
  aw as H,
  c8 as C,
  am as Y,
  y as N,
  a4 as j,
  T as q,
  ag as k,
  w as W,
  cH as X,
  p as J,
  b as L,
  D as O,
  b1 as Z,
  bb as Q,
  an as x,
  dF as ee,
  dG as se,
  b2 as te,
  dH as ae
} from "./BZz9wj6Z.js";
const oe = {
    class: "kit-label"
  },
  ne = {
    class: "compose"
  },
  ie = {
    class: "title"
  },
  le = {
    key: 0,
    class: "optional"
  },
  re = T({
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
        const r = V;
        return a(), i("div", oe, [n.iconName ? (a(), y(r, {
          key: 0,
          name: n.iconName,
          class: "icon"
        }, null, 8, ["name"])) : o("", !0), l("div", ne, [l("span", ie, _(n.title), 1), n.isOptional ? (a(), i("span", le, _(` ${("t"in n?n.t:t(K))("base.optional")}`), 1)) : o("", !0)])])
      }
    }
  }),
  ue = I(re, [
    ["__scopeId", "data-v-0ee1abfc"]
  ]),
  pe = {
    key: 0,
    src: G,
    alt: "Warning icon"
  },
  de = T({
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
        s = b(() => {
          const r = n.value.length,
            u = n.maxLength - r;
          return u < 0 ? {
            type: "danger",
            label: `${u*-1} over`
          } : {
            type: "regular",
            label: u.toString()
          }
        });
      return (r, u) => (a(), i("div", {
        class: E(["kit-input-over", [`is-${t(s).type}`]])
      }, [t(s).type === "danger" ? (a(), i("img", pe)) : o("", !0), l("div", null, _(t(s).label), 1)], 2))
    }
  }),
  ce = I(de, [
    ["__scopeId", "data-v-3535603d"]
  ]),
  me = ["for"],
  _e = {
    key: 0
  },
  fe = {
    class: "input-container"
  },
  he = ["for"],
  ye = {
    key: 0,
    class: "prefix"
  },
  be = ["id", "disabled", "type", "placeholder", "readonly"],
  ve = {
    class: "postfix"
  },
  ge = {
    class: "icon-container"
  },
  $e = {
    key: 0,
    src: ee,
    alt: "Check"
  },
  ke = {
    key: 1,
    src: se,
    alt: "Cross"
  },
  Ee = {
    key: 0,
    class: "caption"
  },
  Te = T({
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
        default: c.TEXT
      },
      label: {},
      placeholder: {},
      caption: {},
      prefix: {},
      size: {
        default: M.LARGE
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
    emits: ["update:modelValue", "change", "input", "focus", "blur"],
    setup(f, {
      emit: n
    }) {
      const s = f,
        r = n,
        u = z(ae),
        v = H(),
        h = b({
          get() {
            return s.modelValue
          },
          set(e) {
            s.modifiers && (s.modifiers.includes(C.UPPERCASE) && (e = e.toUpperCase()), s.modifiers.includes(C.AMOUNT) && e && (e = Y(e, {
              join: "emptyFractional"
            }))), p.value && p.value.value !== e && (p.value.value = e), r("update:modelValue", e)
          }
        }),
        p = N(),
        g = N(!1),
        R = () => {
          g.value = !0, u == null || u.onInputFocused(), r("focus", p.value)
        },
        S = () => {
          g.value = !1, r("blur", p.value)
        },
        U = b(() => {
          const e = [];
          return e.push(`is-${s.status.toLowerCase()}`), e.push(`is-${s.size.toLowerCase()}`), g.value && e.push("is-focused"), s.disabled && e.push("is-disabled"), (s.errorCaption || s.isError) && e.push("is-error"), s.tertiary && e.push("is-tertiary"), e
        }),
        w = b(() => {
          switch (s.type) {
            case c.TEXT:
              return "text";
            case c.PASSWORD:
              return "password";
            case c.EMAIL:
              return "email";
            case c.AMOUNT:
              return "number";
            default:
              throw s.type, j("Unknown input type")
          }
        }),
        A = () => {
          var e;
          return (e = p.value) == null ? void 0 : e.blur()
        };
      return (e, d) => {
        const B = ue,
          P = ce,
          D = te,
          F = q("click-outside");
        return a(), i("div", {
          class: E(["kit-input", t(U)])
        }, [e.label || e.$slots["label-right"] || e.$slots.label ? (a(), i("label", {
          key: 0,
          for: t(v),
          class: "label"
        }, [k(e.$slots, "label", {}, () => [l("div", null, [e.label ? (a(), y(B, {
          key: 0,
          title: e.label,
          "is-optional": e.isOptional
        }, null, 8, ["title", "is-optional"])) : o("", !0)])], !0), e.maxLength !== void 0 || e.$slots["label-right"] ? (a(), i("span", _e, [e.maxLength ? (a(), y(P, {
          key: 0,
          value: t(h),
          "max-length": e.maxLength
        }, null, 8, ["value", "max-length"])) : e.$slots["label-right"] ? k(e.$slots, "label-right", {
          key: 1
        }, void 0, !0) : o("", !0)])) : o("", !0)], 8, me)) : o("", !0), l("div", fe, [l("label", {
          for: t(v),
          class: E(["label-wrapper", {
            "has-icon-offset": e.status !== t(m).REGULAR
          }])
        }, [e.prefix ? (a(), i("div", ye, _(e.prefix), 1)) : o("", !0), W(l("input", {
          id: t(v),
          ref_key: "inputRef",
          ref: p,
          "onUpdate:modelValue": d[0] || (d[0] = $ => J(h) ? h.value = $ : null),
          disabled: e.disabled,
          type: t(w),
          placeholder: e.placeholder,
          readonly: e.disabled,
          onChange: d[1] || (d[1] = $ => e.$emit("change")),
          onInput: d[2] || (d[2] = $ => e.$emit("input")),
          onBlur: S,
          onFocus: R
        }, null, 40, be), [
          [X, t(h)],
          [F, A]
        ]), l("div", ve, [k(e.$slots, "postfix", {}, void 0, !0)])], 10, he), l("div", ge, [L(Q, {
          name: "change-item-transition"
        }, {
          default: O(() => [e.status === t(m).SUCCESS ? (a(), i("img", $e)) : o("", !0), e.status === t(m).ERROR ? (a(), i("img", ke)) : o("", !0), e.status === t(m).LOADING ? (a(), y(D, {
            key: 2,
            type: t(Z).DARK,
            size: 20,
            "track-dimmed": "",
            class: "spinner"
          }, null, 8, ["type"])) : o("", !0)]),
          _: 1
        })])]), L(x, {
          name: "caption-transition"
        }, {
          default: O(() => [e.errorCaption || e.caption ? (a(), i("p", Ee, _(e.errorCaption || e.caption), 1)) : o("", !0)]),
          _: 1
        })], 2)
      }
    }
  }),
  Ce = I(Te, [
    ["__scopeId", "data-v-42ed0bd4"]
  ]);
export {
  ue as _, Ce as a, ce as b
};