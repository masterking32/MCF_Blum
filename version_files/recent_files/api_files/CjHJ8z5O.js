import {
  d as T,
  an as g,
  ao as b,
  L as f,
  Q as w,
  j as C,
  aY as M,
  aZ as N,
  V as $,
  o as h,
  c as k,
  t as D,
  D as K,
  a as i,
  cG as R,
  w as m,
  bH as F,
  cH as H,
  cI as x,
  e as o,
  b as I,
  aU as U,
  cJ as z,
  n as S,
  aV as A,
  f as P
} from "./CVKQB8Rv.js";
const Y = {
    key: 0,
    class: "title"
  },
  j = ["placeholder", "autofocus"],
  G = {
    class: "right-asset"
  },
  J = T({
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
      expose: V,
      emit: B
    }) {
      const p = a,
        v = B,
        s = b(a, "modelValue"),
        u = f(),
        l = f(!1),
        c = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        E = () => {
          s.value = "", v("apply", "")
        },
        d = f(l.value);
      w(l, e => {
        e ? d.value = !1 : setTimeout(() => d.value = !0, 300)
      });
      const r = C(() => p.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && c();
      window.addEventListener("keyup", y);
      const L = [];
      return w(u, async e => {
        e && p.autofocus && (await M(), await N(0), e.focus())
      }, {
        immediate: !0
      }), $(() => {
        L.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), V({
        blur: c
      }), (e, t) => {
        const _ = A;
        return h(), k("div", {
          class: S(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (h(), k("div", Y, D(a.title), 1)) : K("", !0), i("label", {
          class: S(["search-compose", {
            "is-focused": o(l) || a.activated,
            "is-loading": o(r)
          }])
        }, [t[5] || (t[5] = i("img", {
          src: R,
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
          onKeyup: t[3] || (t[3] = H(n => c(), ["enter"]))
        }, null, 40, j), [
          [F, s.value]
        ]), i("div", G, [m(I(_, {
          type: o(U).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [x, o(r)]
        ]), m(i("img", {
          src: z,
          alt: "Clear search",
          class: "close-icon",
          onClick: t[4] || (t[4] = n => E())
        }, null, 512), [
          [x, s.value.length > 0 && !o(d) && !o(r)]
        ])])], 2)], 2)
      }
    }
  }),
  W = P(J, [
    ["__scopeId", "data-v-e0665f8f"]
  ]);
export {
  W as _
};