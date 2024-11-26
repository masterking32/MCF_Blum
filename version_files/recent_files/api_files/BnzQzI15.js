import {
  d as T,
  ay as h,
  az as b,
  r,
  av as k,
  F as C,
  o as w,
  a as S,
  c as B,
  t as N,
  g as $,
  b as i,
  cO as F,
  w as v,
  bp as K,
  cP as M,
  v as x,
  e as o,
  k as R,
  a4 as z,
  cQ as D,
  n as E,
  a7 as P,
  j as A
} from "./CLQlII_v.js";
const I = {
    key: 0,
    class: "title"
  },
  U = ["placeholder", "autofocus"],
  j = {
    class: "right-asset"
  },
  H = T({
    __name: "SearchWithTitle",
    props: h({
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
    emits: h(["apply"], ["update:modelValue"]),
    setup(a, {
      emit: V
    }) {
      const p = a,
        m = V,
        s = b(a, "modelValue"),
        u = r(),
        l = r(!1),
        f = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        _ = () => {
          s.value = "", m("apply", "")
        },
        c = r(l.value);
      k(l, e => {
        e ? c.value = !1 : setTimeout(() => c.value = !0, 300)
      });
      const d = C(() => p.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && f();
      window.addEventListener("keyup", y), w(() => window.removeEventListener("keyup", y));
      const g = [];
      return k(u, e => {
        e && p.autofocus && g.push(setTimeout(() => e.focus(), 200))
      }), w(() => {
        g.forEach(e => clearTimeout(e))
      }), (e, t) => {
        const L = P;
        return S(), B("div", {
          class: E(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (S(), B("div", I, N(a.title), 1)) : $("", !0), i("div", {
          class: E(["search-compose", {
            "is-focused": o(l) || a.activated,
            "is-loading": o(d)
          }])
        }, [t[5] || (t[5] = i("img", {
          src: F,
          alt: "Search icon"
        }, null, -1)), v(i("input", {
          ref_key: "inputRef",
          ref: u,
          "onUpdate:modelValue": t[0] || (t[0] = n => s.value = n),
          placeholder: a.placeholder,
          type: "text",
          autofocus: a.autofocus,
          onFocus: t[1] || (t[1] = n => l.value = !0),
          onBlur: t[2] || (t[2] = n => (l.value = !1, m("apply", s.value))),
          onKeyup: t[3] || (t[3] = M(n => f(), ["enter"]))
        }, null, 40, U), [
          [K, s.value]
        ]), i("div", j, [v(R(L, {
          type: o(z).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [x, o(d)]
        ]), v(i("img", {
          src: D,
          alt: "Clear search",
          class: "close-icon",
          onClick: t[4] || (t[4] = n => _())
        }, null, 512), [
          [x, s.value.length > 0 && !o(c) && !o(d)]
        ])])], 2)], 2)
      }
    }
  }),
  Q = A(H, [
    ["__scopeId", "data-v-acb8f0d5"]
  ]);
export {
  Q as _
};