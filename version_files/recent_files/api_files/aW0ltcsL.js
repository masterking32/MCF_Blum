import {
  d as L,
  ay as g,
  az as M,
  r as m,
  av as k,
  F as N,
  b7 as T,
  b8 as C,
  o as K,
  a as w,
  c as h,
  t as $,
  g as F,
  b as i,
  cM as R,
  w as v,
  bK as z,
  cN as D,
  v as x,
  e as o,
  k as A,
  a4 as I,
  cO as P,
  n as S,
  a7 as U,
  j
} from "./Brvr1E7g.js";
const H = {
    key: 0,
    class: "title"
  },
  O = ["placeholder", "autofocus"],
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
      expose: B,
      emit: b
    }) {
      const f = a,
        p = b,
        s = M(a, "modelValue"),
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
      const r = N(() => f.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && c();
      window.addEventListener("keyup", y);
      const V = [];
      return k(u, async e => {
        e && f.autofocus && (await T(), await C(0), e.focus())
      }, {
        immediate: !0
      }), K(() => {
        V.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), B({
        blur: c
      }), (e, t) => {
        const _ = U;
        return w(), h("div", {
          class: S(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (w(), h("div", H, $(a.title), 1)) : F("", !0), i("label", {
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
          onKeyup: t[3] || (t[3] = D(n => c(), ["enter"]))
        }, null, 40, O), [
          [z, s.value]
        ]), i("div", W, [v(A(_, {
          type: o(I).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [x, o(r)]
        ]), v(i("img", {
          src: P,
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