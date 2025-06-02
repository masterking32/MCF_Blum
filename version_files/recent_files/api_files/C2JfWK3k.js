import {
  d as K,
  a4 as _,
  C as M,
  J as v,
  K as g,
  j as w,
  c9 as N,
  bA as F,
  ag as R,
  o as k,
  c as B,
  t as W,
  G as D,
  a as l,
  w as n,
  P as i,
  e as a,
  bW as P,
  db as $,
  b as z,
  aZ as I,
  dc as U,
  n as S,
  dd as j,
  de as G,
  a_ as H,
  f as J
} from "./CTMy7kFf.js";
const Y = {
    key: 0,
    class: "title"
  },
  Z = {
    src: j,
    alt: "Search icon"
  },
  q = {
    src: G,
    alt: "Search icon"
  },
  O = ["placeholder", "autofocus"],
  Q = {
    class: "right-asset"
  },
  X = K({
    __name: "SearchWithTitle",
    props: _({
      title: {
        default: void 0
      },
      isLoading: {
        type: Boolean,
        default: !1
      },
      placeholder: {
        default: void 0
      },
      activated: {
        type: Boolean,
        default: !1
      },
      autofocus: {
        type: Boolean,
        default: !1
      },
      focusedWhenActivated: {
        type: Boolean,
        default: !0
      },
      inverse: {
        type: Boolean,
        default: !1
      }
    }, {
      modelValue: {
        default: ""
      },
      modelModifiers: {}
    }),
    emits: _(["apply"], ["update:modelValue"]),
    setup(f, {
      expose: b,
      emit: E
    }) {
      const m = f,
        h = E,
        t = M(f, "modelValue"),
        u = v(),
        s = v(!1),
        c = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        V = () => {
          t.value = "", h("apply", "")
        },
        d = v(s.value);
      g(s, e => {
        e ? d.value = !1 : setTimeout(() => d.value = !0, 300)
      });
      const r = w(() => m.isLoading && t.value.length > 0),
        C = () => {
          s.value = !0
        },
        L = () => {
          s.value = !1, h("apply", t.value)
        },
        y = e => e.code === "Escape" && c();
      window.addEventListener("keyup", y);
      const T = [];
      return g(u, async e => {
        e && m.autofocus && (await N(), await F(0), e.focus())
      }, {
        immediate: !0
      }), R(() => {
        T.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), b({
        blur: c,
        isFocused: w(() => s.value)
      }), (e, o) => {
        const A = H;
        return k(), B("div", {
          class: S(["kit-search-with-title", {
            "is-activated": a(s) || t.value.length > 0 || e.activated
          }])
        }, [e.title ? (k(), B("div", Y, W(e.title), 1)) : D("", !0), l("label", {
          class: S(["search-compose", {
            "is-focused": a(s) || e.activated && e.focusedWhenActivated,
            "is-loading": a(r),
            "is-inverse": e.inverse
          }])
        }, [n(l("img", Z, null, 512), [
          [i, !e.inverse || e.inverse && a(s)]
        ]), n(l("img", q, null, 512), [
          [i, e.inverse && !a(s)]
        ]), n(l("input", {
          ref_key: "inputRef",
          ref: u,
          "onUpdate:modelValue": o[0] || (o[0] = p => t.value = p),
          placeholder: e.placeholder,
          type: "text",
          autofocus: e.autofocus,
          onFocus: C,
          onBlur: L,
          onKeyup: o[1] || (o[1] = $(p => c(), ["enter"]))
        }, null, 40, O), [
          [P, t.value]
        ]), l("div", Q, [n(z(A, {
          type: a(I).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [i, a(r)]
        ]), n(l("img", {
          src: U,
          alt: "Clear search",
          class: "close-icon",
          onClick: o[2] || (o[2] = p => V())
        }, null, 512), [
          [i, t.value.length > 0 && !a(d) && !a(r)]
        ])])], 2)], 2)
      }
    }
  }),
  ee = J(X, [
    ["__scopeId", "data-v-df78ac61"]
  ]);
export {
  ee as _
};