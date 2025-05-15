import {
  d as T,
  o as a,
  c as i,
  N as y,
  G as o,
  a as l,
  t as _,
  e as t,
  C as V,
  _ as F,
  f as I,
  j as b,
  n as E,
  cF as G,
  cw as c,
  c1 as M,
  cx as m,
  bG as z,
  a_ as Y,
  b$ as C,
  br as j,
  y as N,
  a8 as q,
  T as W,
  ak as k,
  w as X,
  cA as H,
  p as J,
  b as L,
  D as R,
  aR as Z,
  b2 as Q,
  ap as x,
  dx as ee,
  dy as se,
  aS as te,
  dz as ae
} from "./jpzGFStf.js";
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
        const r = F;
        return a(), i("div", oe, [n.iconName ? (a(), y(r, {
          key: 0,
          name: n.iconName,
          class: "icon"
        }, null, 8, ["name"])) : o("", !0), l("div", ne, [l("span", ie, _(n.title), 1), n.isOptional ? (a(), i("span", le, _(` ${("t"in n?n.t:t(V))("base.optional")}`), 1)) : o("", !0)])])
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
        v = Y(),
        h = b({
          get() {
            return s.modelValue
          },
          set(e) {
            s.modifiers && (s.modifiers.includes(C.UPPERCASE) && (e = e.toUpperCase()), s.modifiers.includes(C.AMOUNT) && e && (e = j(e, {
              join: "emptyFractional"
            }))), p.value && p.value.value !== e && (p.value.value = e), r("update:modelValue", e)
          }
        }),
        p = N(),
        g = N(!1),
        S = () => {
          g.value = !0, u == null || u.onInputFocused(), r("focus", p.value)
        },
        O = () => {
          g.value = !1, r("blur", p.value)
        },
        U = b(() => {
          const e = [];
          return e.push(`is-${s.status.toLowerCase()}`), e.push(`is-${s.size.toLowerCase()}`), g.value && e.push("is-focused"), s.disabled && e.push("is-disabled"), (s.errorCaption || s.isError) && e.push("is-error"), s.tertiary && e.push("is-tertiary"), e
        }),
        A = b(() => {
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
              throw s.type, q("Unknown input type")
          }
        }),
        w = () => {
          var e;
          return (e = p.value) == null ? void 0 : e.blur()
        };
      return (e, d) => {
        const B = ue,
          P = ce,
          D = te,
          K = W("click-outside");
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
        }, [e.prefix ? (a(), i("div", ye, _(e.prefix), 1)) : o("", !0), X(l("input", {
          id: t(v),
          ref_key: "inputRef",
          ref: p,
          "onUpdate:modelValue": d[0] || (d[0] = $ => J(h) ? h.value = $ : null),
          disabled: e.disabled,
          type: t(A),
          placeholder: e.placeholder,
          readonly: e.disabled,
          onChange: d[1] || (d[1] = $ => e.$emit("change")),
          onInput: d[2] || (d[2] = $ => e.$emit("input")),
          onBlur: O,
          onFocus: S
        }, null, 40, be), [
          [H, t(h)],
          [K, w]
        ]), l("div", ve, [k(e.$slots, "postfix", {}, void 0, !0)])], 10, he), l("div", ge, [L(Q, {
          name: "change-item-transition"
        }, {
          default: R(() => [e.status === t(m).SUCCESS ? (a(), i("img", $e)) : o("", !0), e.status === t(m).ERROR ? (a(), i("img", ke)) : o("", !0), e.status === t(m).LOADING ? (a(), y(D, {
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
          default: R(() => [e.errorCaption || e.caption ? (a(), i("p", Ee, _(e.errorCaption || e.caption), 1)) : o("", !0)]),
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