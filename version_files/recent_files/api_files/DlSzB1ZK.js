import {
  d as K,
  ao as g,
  ap as M,
  K as f,
  P as w,
  j as T,
  aZ as b,
  a_ as C,
  U as N,
  o as h,
  c as k,
  t as $,
  D,
  a as i,
  cI as R,
  w as m,
  bM as F,
  cJ as I,
  cK as x,
  e as o,
  b as P,
  aV as U,
  cL as z,
  n as S,
  aW as A,
  f as W
} from "./BKd9vpCm.js";
const j = {
    key: 0,
    class: "title"
  },
  H = ["placeholder", "autofocus"],
  J = {
    class: "right-asset"
  },
  Y = K({
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
      emit: V
    }) {
      const p = a,
        v = V,
        s = M(a, "modelValue"),
        u = f(),
        l = f(!1),
        c = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        _ = () => {
          s.value = "", v("apply", "")
        },
        d = f(l.value);
      w(l, e => {
        e ? d.value = !1 : setTimeout(() => d.value = !0, 300)
      });
      const r = T(() => p.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && c();
      window.addEventListener("keyup", y);
      const E = [];
      return w(u, async e => {
        e && p.autofocus && (await b(), await C(0), e.focus())
      }, {
        immediate: !0
      }), N(() => {
        E.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), B({
        blur: c
      }), (e, t) => {
        const L = A;
        return h(), k("div", {
          class: S(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (h(), k("div", j, $(a.title), 1)) : D("", !0), i("label", {
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
          onKeyup: t[3] || (t[3] = I(n => c(), ["enter"]))
        }, null, 40, H), [
          [F, s.value]
        ]), i("div", J, [m(P(L, {
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
          onClick: t[4] || (t[4] = n => _())
        }, null, 512), [
          [x, s.value.length > 0 && !o(d) && !o(r)]
        ])])], 2)], 2)
      }
    }
  }),
  q = W(Y, [
    ["__scopeId", "data-v-e0665f8f"]
  ]);
export {
  q as _
};