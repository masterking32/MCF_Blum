import {
  d as L,
  ay as g,
  az as T,
  y as f,
  V as w,
  j as C,
  cf as M,
  bD as N,
  a3 as $,
  o as h,
  c as k,
  t as D,
  G as F,
  a as i,
  de as K,
  w as m,
  c0 as R,
  df as z,
  bF as x,
  e as o,
  b as A,
  b0 as I,
  dg as P,
  n as S,
  b1 as U,
  f as j
} from "./BtsWxTOZ.js";
const G = {
    key: 0,
    class: "title"
  },
  H = ["placeholder", "autofocus"],
  W = {
    class: "right-asset"
  },
  Y = L({
    __name: "SearchWithTitle",
    props: g({
      title: {
        type: String,
        default: void 0
      },
      isLoading: {
        type: Boolean,
        default: !1
      },
      placeholder: {
        type: String,
        default: void 0
      },
      activated: {
        type: Boolean,
        default: !1
      },
      autofocus: {
        type: Boolean,
        default: !1
      }
    }, {
      modelValue: {
        default: ""
      },
      modelModifiers: {}
    }),
    emits: g(["apply"], ["update:modelValue"]),
    setup(a, {
      expose: b,
      emit: B
    }) {
      const p = a,
        v = B,
        s = T(a, "modelValue"),
        u = f(),
        l = f(!1),
        d = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        V = () => {
          s.value = "", v("apply", "")
        },
        c = f(l.value);
      w(l, e => {
        e ? c.value = !1 : setTimeout(() => c.value = !0, 300)
      });
      const r = C(() => p.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && d();
      window.addEventListener("keyup", y);
      const E = [];
      return w(u, async e => {
        e && p.autofocus && (await M(), await N(0), e.focus())
      }, {
        immediate: !0
      }), $(() => {
        E.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), b({
        blur: d
      }), (e, t) => {
        const _ = U;
        return h(), k("div", {
          class: S(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (h(), k("div", G, D(a.title), 1)) : F("", !0), i("label", {
          class: S(["search-compose", {
            "is-focused": o(l) || a.activated,
            "is-loading": o(r)
          }])
        }, [t[5] || (t[5] = i("img", {
          src: K,
          alt: "Search icon"
        }, null, -1)), m(i("input", {
          ref_key: "inputRef",
          ref: u,
          "onUpdate:modelValue": t[0] || (t[0] = n => s.value = n),
          placeholder: a.placeholder,
          type: "text",
          autofocus: a.autofocus,
          onFocus: t[1] || (t[1] = n => l.value = !0),
          onBlur: t[2] || (t[2] = n => (l.value = !1, v("apply", s.value))),
          onKeyup: t[3] || (t[3] = z(n => d(), ["enter"]))
        }, null, 40, H), [
          [R, s.value]
        ]), i("div", W, [m(A(_, {
          type: o(I).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [x, o(r)]
        ]), m(i("img", {
          src: P,
          alt: "Clear search",
          class: "close-icon",
          onClick: t[4] || (t[4] = n => V())
        }, null, 512), [
          [x, s.value.length > 0 && !o(c) && !o(r)]
        ])])], 2)], 2)
      }
    }
  }),
  J = j(Y, [
    ["__scopeId", "data-v-e0665f8f"]
  ]);
export {
  J as _
};