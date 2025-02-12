import {
  d as V,
  an as g,
  ao as L,
  K as f,
  aF as w,
  j as R,
  bR as $,
  bn as C,
  T as K,
  o as h,
  c as k,
  t as M,
  D as N,
  a as i,
  cO as D,
  w as m,
  bQ as F,
  cP as P,
  cQ as x,
  e as o,
  b as z,
  a_ as A,
  cR as I,
  n as S,
  a$ as Q,
  f as U
} from "./C5Di_0SZ.js";
const j = {
    key: 0,
    class: "title"
  },
  H = ["placeholder", "autofocus"],
  O = {
    class: "right-asset"
  },
  W = V({
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
      emit: _
    }) {
      const p = a,
        v = _,
        s = L(a, "modelValue"),
        u = f(),
        l = f(!1),
        c = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        b = () => {
          s.value = "", v("apply", "")
        },
        d = f(l.value);
      w(l, e => {
        e ? d.value = !1 : setTimeout(() => d.value = !0, 300)
      });
      const r = R(() => p.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && c();
      window.addEventListener("keyup", y);
      const E = [];
      return w(u, async e => {
        e && p.autofocus && (await $(), await C(0), e.focus())
      }, {
        immediate: !0
      }), K(() => {
        E.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), B({
        blur: c
      }), (e, t) => {
        const T = Q;
        return h(), k("div", {
          class: S(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (h(), k("div", j, M(a.title), 1)) : N("", !0), i("label", {
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
          onKeyup: t[3] || (t[3] = P(n => c(), ["enter"]))
        }, null, 40, H), [
          [F, s.value]
        ]), i("div", O, [m(z(T, {
          type: o(A).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [x, o(r)]
        ]), m(i("img", {
          src: I,
          alt: "Clear search",
          class: "close-icon",
          onClick: t[4] || (t[4] = n => b())
        }, null, 512), [
          [x, s.value.length > 0 && !o(d) && !o(r)]
        ])])], 2)], 2)
      }
    }
  }),
  q = U(W, [
    ["__scopeId", "data-v-e0665f8f"]
  ]);
export {
  q as _
};