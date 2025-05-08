import {
  d as L,
  ay as g,
  az as T,
  y as f,
  V as w,
  j as C,
  cf as M,
  bE as N,
  a3 as K,
  o as h,
  c as k,
  t as R,
  G as $,
  a as i,
  de as z,
  w as m,
  ce as D,
  df as F,
  bG as x,
  e as o,
  b as A,
  b1 as G,
  dg as I,
  n as S,
  b2 as P,
  f as U
} from "./BlYmRJuD.js";
const j = {
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
        E = () => {
          s.value = "", v("apply", "")
        },
        c = f(l.value);
      w(l, e => {
        e ? c.value = !1 : setTimeout(() => c.value = !0, 300)
      });
      const r = C(() => p.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && d();
      window.addEventListener("keyup", y);
      const V = [];
      return w(u, async e => {
        e && p.autofocus && (await M(), await N(0), e.focus())
      }, {
        immediate: !0
      }), K(() => {
        V.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), b({
        blur: d
      }), (e, t) => {
        const _ = P;
        return h(), k("div", {
          class: S(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (h(), k("div", j, R(a.title), 1)) : $("", !0), i("label", {
          class: S(["search-compose", {
            "is-focused": o(l) || a.activated,
            "is-loading": o(r)
          }])
        }, [t[5] || (t[5] = i("img", {
          src: z,
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
          onKeyup: t[3] || (t[3] = F(n => d(), ["enter"]))
        }, null, 40, H), [
          [D, s.value]
        ]), i("div", W, [m(A(_, {
          type: o(G).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [x, o(r)]
        ]), m(i("img", {
          src: I,
          alt: "Clear search",
          class: "close-icon",
          onClick: t[4] || (t[4] = n => E())
        }, null, 512), [
          [x, s.value.length > 0 && !o(c) && !o(r)]
        ])])], 2)], 2)
      }
    }
  }),
  J = U(Y, [
    ["__scopeId", "data-v-e0665f8f"]
  ]);
export {
  J as _
};