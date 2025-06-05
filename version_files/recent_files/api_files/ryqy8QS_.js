import {
  d as M,
  a4 as _,
  C as N,
  J as f,
  K as g,
  j as w,
  cb as A,
  bC as F,
  ag as R,
  o as k,
  c as B,
  t as $,
  G as D,
  a as l,
  w as n,
  P as i,
  e as a,
  bY as P,
  dc as W,
  b as z,
  a$ as I,
  dd as U,
  n as b,
  de as Y,
  df as j,
  b0 as G,
  f as H
} from "./BkRdN3CR.js";
const J = {
    key: 0,
    class: "title"
  },
  q = {
    src: Y,
    alt: "Search icon"
  },
  O = {
    src: j,
    alt: "Search icon"
  },
  Q = ["placeholder", "autofocus"],
  X = {
    class: "right-asset"
  },
  Z = M({
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
    setup(v, {
      expose: S,
      emit: C
    }) {
      const m = v,
        h = C,
        t = N(v, "modelValue"),
        u = f(),
        s = f(!1),
        c = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        E = () => {
          t.value = "", h("apply", "")
        },
        d = f(s.value);
      g(s, e => {
        e ? d.value = !1 : setTimeout(() => d.value = !0, 300)
      });
      const r = w(() => m.isLoading && t.value.length > 0),
        V = () => {
          s.value = !0
        },
        L = () => {
          s.value = !1, h("apply", t.value)
        },
        y = e => e.code === "Escape" && c();
      window.addEventListener("keyup", y);
      const T = [];
      return g(u, async e => {
        e && m.autofocus && (await A(), await F(0), e.focus())
      }, {
        immediate: !0
      }), R(() => {
        T.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), S({
        blur: c,
        isFocused: w(() => s.value)
      }), (e, o) => {
        const K = G;
        return k(), B("div", {
          class: b(["kit-search-with-title", {
            "is-activated": a(s) || t.value.length > 0 || e.activated
          }])
        }, [e.title ? (k(), B("div", J, $(e.title), 1)) : D("", !0), l("label", {
          class: b(["search-compose", {
            "is-focused": a(s) || e.activated && e.focusedWhenActivated,
            "is-loading": a(r),
            "is-inverse": e.inverse
          }])
        }, [n(l("img", q, null, 512), [
          [i, !e.inverse || e.inverse && a(s)]
        ]), n(l("img", O, null, 512), [
          [i, e.inverse && !a(s)]
        ]), n(l("input", {
          ref_key: "inputRef",
          ref: u,
          "onUpdate:modelValue": o[0] || (o[0] = p => t.value = p),
          placeholder: e.placeholder,
          type: "text",
          autofocus: e.autofocus,
          onFocus: V,
          onBlur: L,
          onKeyup: o[1] || (o[1] = W(p => c(), ["enter"]))
        }, null, 40, Q), [
          [P, t.value]
        ]), l("div", X, [n(z(K, {
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
          onClick: o[2] || (o[2] = p => E())
        }, null, 512), [
          [i, t.value.length > 0 && !a(d) && !a(r)]
        ])])], 2)], 2)
      }
    }
  }),
  ee = H(Z, [
    ["__scopeId", "data-v-df78ac61"]
  ]);
export {
  ee as _
};