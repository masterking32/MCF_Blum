import {
  d as $,
  aw as g,
  ax as C,
  y as f,
  U as w,
  j as L,
  ce as T,
  bC as M,
  a2 as N,
  o as h,
  c as k,
  t as K,
  E as R,
  a as i,
  de as D,
  w as m,
  b$ as F,
  df as U,
  bE as x,
  e as o,
  b as z,
  a$ as A,
  dg as I,
  n as E,
  b0 as P,
  f as j
} from "./BV1dF4C1.js";
const H = {
    key: 0,
    class: "title"
  },
  W = ["placeholder", "autofocus"],
  Y = {
    class: "right-asset"
  },
  q = $({
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
      expose: S,
      emit: b
    }) {
      const p = a,
        v = b,
        s = C(a, "modelValue"),
        u = f(),
        l = f(!1),
        d = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        B = () => {
          s.value = "", v("apply", "")
        },
        c = f(l.value);
      w(l, e => {
        e ? c.value = !1 : setTimeout(() => c.value = !0, 300)
      });
      const r = L(() => p.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && d();
      window.addEventListener("keyup", y);
      const V = [];
      return w(u, async e => {
        e && p.autofocus && (await T(), await M(0), e.focus())
      }, {
        immediate: !0
      }), N(() => {
        V.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), S({
        blur: d
      }), (e, t) => {
        const _ = P;
        return h(), k("div", {
          class: E(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (h(), k("div", H, K(a.title), 1)) : R("", !0), i("label", {
          class: E(["search-compose", {
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
          onKeyup: t[3] || (t[3] = U(n => d(), ["enter"]))
        }, null, 40, W), [
          [F, s.value]
        ]), i("div", Y, [m(z(_, {
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
          onClick: t[4] || (t[4] = n => B())
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