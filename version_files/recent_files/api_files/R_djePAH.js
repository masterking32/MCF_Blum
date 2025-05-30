import {
  d as M,
  a4 as _,
  C as N,
  J as v,
  K as g,
  j as w,
  c8 as A,
  bz as F,
  ag as R,
  o as k,
  c as B,
  t as z,
  G as D,
  a as l,
  w as n,
  P as i,
  e as s,
  bV as P,
  da as W,
  b as $,
  aY as I,
  db as U,
  n as S,
  dc as Y,
  dd as j,
  aZ as G,
  f as H
} from "./Dy2of55E.js";
const J = {
    key: 0,
    class: "title"
  },
  Z = {
    src: Y,
    alt: "Search icon"
  },
  q = {
    src: j,
    alt: "Search icon"
  },
  O = ["placeholder", "autofocus"],
  Q = {
    class: "right-asset"
  },
  X = M({
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
      expose: V,
      emit: b
    }) {
      const m = f,
        h = b,
        t = N(f, "modelValue"),
        u = v(),
        a = v(!1),
        c = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        E = () => {
          t.value = "", h("apply", "")
        },
        d = v(a.value);
      g(a, e => {
        e ? d.value = !1 : setTimeout(() => d.value = !0, 300)
      });
      const r = w(() => m.isLoading && t.value.length > 0),
        C = () => {
          a.value = !0
        },
        L = () => {
          a.value = !1, h("apply", t.value)
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
      }), V({
        blur: c,
        isFocused: w(() => a.value)
      }), (e, o) => {
        const K = G;
        return k(), B("div", {
          class: S(["kit-search-with-title", {
            "is-activated": s(a) || t.value.length > 0 || e.activated
          }])
        }, [e.title ? (k(), B("div", J, z(e.title), 1)) : D("", !0), l("label", {
          class: S(["search-compose", {
            "is-focused": s(a) || e.activated && e.focusedWhenActivated,
            "is-loading": s(r),
            "is-inverse": e.inverse
          }])
        }, [n(l("img", Z, null, 512), [
          [i, !e.inverse || e.inverse && s(a)]
        ]), n(l("img", q, null, 512), [
          [i, e.inverse && !s(a)]
        ]), n(l("input", {
          ref_key: "inputRef",
          ref: u,
          "onUpdate:modelValue": o[0] || (o[0] = p => t.value = p),
          placeholder: e.placeholder,
          type: "text",
          autofocus: e.autofocus,
          onFocus: C,
          onBlur: L,
          onKeyup: o[1] || (o[1] = W(p => c(), ["enter"]))
        }, null, 40, O), [
          [P, t.value]
        ]), l("div", Q, [n($(K, {
          type: s(I).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [i, s(r)]
        ]), n(l("img", {
          src: U,
          alt: "Clear search",
          class: "close-icon",
          onClick: o[2] || (o[2] = p => E())
        }, null, 512), [
          [i, t.value.length > 0 && !s(d) && !s(r)]
        ])])], 2)], 2)
      }
    }
  }),
  ee = H(X, [
    ["__scopeId", "data-v-df78ac61"]
  ]);
export {
  ee as _
};