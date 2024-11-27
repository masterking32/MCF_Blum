import {
  d as _,
  az as g,
  aA as N,
  r as m,
  av as k,
  F as T,
  b8 as C,
  b9 as M,
  o as $,
  a as w,
  c as h,
  t as F,
  g as K,
  b as i,
  cN as R,
  w as v,
  bL as z,
  cO as A,
  v as x,
  e as o,
  k as D,
  a4 as P,
  cP as I,
  n as S,
  a7 as U,
  j
} from "./2LbcXgIA.js";
const H = {
    key: 0,
    class: "title"
  },
  O = ["placeholder", "autofocus"],
  W = {
    class: "right-asset"
  },
  Y = _({
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
      const f = a,
        p = b,
        s = N(a, "modelValue"),
        u = m(),
        l = m(!1),
        c = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        E = () => {
          s.value = "", p("apply", "")
        },
        d = m(l.value);
      k(l, e => {
        e ? d.value = !1 : setTimeout(() => d.value = !0, 300)
      });
      const r = T(() => f.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && c();
      window.addEventListener("keyup", y);
      const L = [];
      return k(u, async e => {
        e && f.autofocus && (await C(), await M(0), e.focus())
      }, {
        immediate: !0
      }), $(() => {
        L.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), B({
        blur: c
      }), (e, t) => {
        const V = U;
        return w(), h("div", {
          class: S(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (w(), h("div", H, F(a.title), 1)) : K("", !0), i("label", {
          class: S(["search-compose", {
            "is-focused": o(l) || a.activated,
            "is-loading": o(r)
          }])
        }, [t[5] || (t[5] = i("img", {
          src: R,
          alt: "Search icon"
        }, null, -1)), v(i("input", {
          ref_key: "inputRef",
          ref: u,
          "onUpdate:modelValue": t[0] || (t[0] = n => s.value = n),
          placeholder: a.placeholder,
          type: "text",
          autofocus: a.autofocus,
          onFocus: t[1] || (t[1] = n => l.value = !0),
          onBlur: t[2] || (t[2] = n => (l.value = !1, p("apply", s.value))),
          onKeyup: t[3] || (t[3] = A(n => c(), ["enter"]))
        }, null, 40, O), [
          [z, s.value]
        ]), i("div", W, [v(D(V, {
          type: o(P).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [x, o(r)]
        ]), v(i("img", {
          src: I,
          alt: "Clear search",
          class: "close-icon",
          onClick: t[4] || (t[4] = n => E())
        }, null, 512), [
          [x, s.value.length > 0 && !o(d) && !o(r)]
        ])])], 2)], 2)
      }
    }
  }),
  G = j(Y, [
    ["__scopeId", "data-v-e0665f8f"]
  ]);
export {
  G as _
};