import {
  d as _,
  av as g,
  aw as L,
  y as f,
  T as w,
  j as C,
  c7 as M,
  by as N,
  a1 as $,
  o as h,
  c as k,
  t as K,
  E as R,
  a as i,
  d6 as A,
  w as m,
  c6 as D,
  d7 as F,
  bA as x,
  e as o,
  b as z,
  b9 as I,
  d8 as P,
  n as S,
  ba as U,
  f as j
} from "./DyOz13Ed.js";
const H = {
    key: 0,
    class: "title"
  },
  W = ["placeholder", "autofocus"],
  Y = {
    class: "right-asset"
  },
  q = _({
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
        s = L(a, "modelValue"),
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
      const T = [];
      return w(u, async e => {
        e && p.autofocus && (await M(), await N(0), e.focus())
      }, {
        immediate: !0
      }), $(() => {
        T.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), b({
        blur: d
      }), (e, t) => {
        const V = U;
        return h(), k("div", {
          class: S(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (h(), k("div", H, K(a.title), 1)) : R("", !0), i("label", {
          class: S(["search-compose", {
            "is-focused": o(l) || a.activated,
            "is-loading": o(r)
          }])
        }, [t[5] || (t[5] = i("img", {
          src: A,
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
        }, null, 40, W), [
          [D, s.value]
        ]), i("div", Y, [m(z(V, {
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
  J = j(q, [
    ["__scopeId", "data-v-e0665f8f"]
  ]);
export {
  J as _
};