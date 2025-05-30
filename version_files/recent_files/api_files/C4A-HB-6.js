import {
  d as C,
  a4 as _,
  A as M,
  I as f,
  J as g,
  j as N,
  c8 as K,
  bz as R,
  af as z,
  o as w,
  c as k,
  t as D,
  E as F,
  a as l,
  w as n,
  O as i,
  e as a,
  bV as I,
  da as W,
  b as $,
  aY as P,
  db as U,
  n as B,
  dc as Y,
  dd as j,
  aZ as H,
  f as J
} from "./BMIPMNvl.js";
const O = {
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
  G = ["placeholder", "autofocus"],
  Q = {
    class: "right-asset"
  },
  X = C({
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
      expose: b,
      emit: E
    }) {
      const m = v,
        h = E,
        t = M(v, "modelValue"),
        u = f(),
        s = f(!1),
        d = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        S = () => {
          t.value = "", h("apply", "")
        },
        c = f(s.value);
      g(s, e => {
        e ? c.value = !1 : setTimeout(() => c.value = !0, 300)
      });
      const r = N(() => m.isLoading && t.value.length > 0),
        V = () => {
          s.value = !0
        },
        L = () => {
          s.value = !1, h("apply", t.value)
        },
        y = e => e.code === "Escape" && d();
      window.addEventListener("keyup", y);
      const T = [];
      return g(u, async e => {
        e && m.autofocus && (await K(), await R(0), e.focus())
      }, {
        immediate: !0
      }), z(() => {
        T.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), b({
        blur: d
      }), (e, o) => {
        const A = H;
        return w(), k("div", {
          class: B(["kit-search-with-title", {
            "is-activated": a(s) || t.value.length > 0 || e.activated
          }])
        }, [e.title ? (w(), k("div", O, D(e.title), 1)) : F("", !0), l("label", {
          class: B(["search-compose", {
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
          onFocus: V,
          onBlur: L,
          onKeyup: o[1] || (o[1] = W(p => d(), ["enter"]))
        }, null, 40, G), [
          [I, t.value]
        ]), l("div", Q, [n($(A, {
          type: a(P).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [i, a(r)]
        ]), n(l("img", {
          src: U,
          alt: "Clear search",
          class: "close-icon",
          onClick: o[2] || (o[2] = p => S())
        }, null, 512), [
          [i, t.value.length > 0 && !a(c) && !a(r)]
        ])])], 2)], 2)
      }
    }
  }),
  ee = J(X, [
    ["__scopeId", "data-v-dfdb9de9"]
  ]);
export {
  ee as _
};