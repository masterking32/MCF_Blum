import {
  d as L,
  V as g,
  W as T,
  y as f,
  Z as w,
  j as C,
  c7 as M,
  bv as N,
  a7 as R,
  o as h,
  c as k,
  t as $,
  G as K,
  a as i,
  d8 as D,
  w as m,
  c6 as F,
  d9 as z,
  bx as x,
  e as o,
  b as A,
  aR as I,
  da as P,
  n as S,
  aS as U,
  f as W
} from "./B3wbv-Ae.js";
const j = {
    key: 0,
    class: "title"
  },
  G = ["placeholder", "autofocus"],
  H = {
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
      emit: V
    }) {
      const p = a,
        v = V,
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
      const _ = [];
      return w(u, async e => {
        e && p.autofocus && (await M(), await N(0), e.focus())
      }, {
        immediate: !0
      }), R(() => {
        _.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), B({
        blur: d
      }), (e, t) => {
        const b = U;
        return h(), k("div", {
          class: S(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (h(), k("div", j, $(a.title), 1)) : K("", !0), i("label", {
          class: S(["search-compose", {
            "is-focused": o(l) || a.activated,
            "is-loading": o(r)
          }])
        }, [t[5] || (t[5] = i("img", {
          src: D,
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
        }, null, 40, G), [
          [F, s.value]
        ]), i("div", H, [m(A(b, {
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
          onClick: t[4] || (t[4] = n => E())
        }, null, 512), [
          [x, s.value.length > 0 && !o(c) && !o(r)]
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