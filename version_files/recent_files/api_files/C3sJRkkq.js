import {
  d as _,
  aq as g,
  ar as C,
  G as m,
  am as w,
  j as L,
  b5 as M,
  b6 as K,
  T as N,
  o as h,
  c as k,
  t as R,
  C as $,
  a as i,
  cQ as D,
  w as f,
  bP as F,
  cR as P,
  aM as S,
  e as o,
  b as z,
  K as A,
  cS as I,
  n as x,
  O as U,
  f as j
} from "./Doz8XXSF.js";
const q = {
    key: 0,
    class: "title"
  },
  G = ["placeholder", "autofocus"],
  H = {
    class: "right-asset"
  },
  O = _({
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
      expose: B,
      emit: b
    }) {
      const p = a,
        v = b,
        s = C(a, "modelValue"),
        u = m(),
        l = m(!1),
        c = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        E = () => {
          s.value = "", v("apply", "")
        },
        d = m(l.value);
      w(l, e => {
        e ? d.value = !1 : setTimeout(() => d.value = !0, 300)
      });
      const r = L(() => p.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && c();
      window.addEventListener("keyup", y);
      const T = [];
      return w(u, async e => {
        e && p.autofocus && (await M(), await K(0), e.focus())
      }, {
        immediate: !0
      }), N(() => {
        T.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), B({
        blur: c
      }), (e, t) => {
        const V = U;
        return h(), k("div", {
          class: x(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (h(), k("div", q, R(a.title), 1)) : $("", !0), i("label", {
          class: x(["search-compose", {
            "is-focused": o(l) || a.activated,
            "is-loading": o(r)
          }])
        }, [t[5] || (t[5] = i("img", {
          src: D,
          alt: "Search icon"
        }, null, -1)), f(i("input", {
          ref_key: "inputRef",
          ref: u,
          "onUpdate:modelValue": t[0] || (t[0] = n => s.value = n),
          placeholder: a.placeholder,
          type: "text",
          autofocus: a.autofocus,
          onFocus: t[1] || (t[1] = n => l.value = !0),
          onBlur: t[2] || (t[2] = n => (l.value = !1, v("apply", s.value))),
          onKeyup: t[3] || (t[3] = P(n => c(), ["enter"]))
        }, null, 40, G), [
          [F, s.value]
        ]), i("div", H, [f(z(V, {
          type: o(A).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [S, o(r)]
        ]), f(i("img", {
          src: I,
          alt: "Clear search",
          class: "close-icon",
          onClick: t[4] || (t[4] = n => E())
        }, null, 512), [
          [S, s.value.length > 0 && !o(d) && !o(r)]
        ])])], 2)], 2)
      }
    }
  }),
  W = j(O, [
    ["__scopeId", "data-v-e0665f8f"]
  ]);
export {
  W as _
};