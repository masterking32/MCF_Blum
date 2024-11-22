import {
  d as _,
  ay as y,
  az as E,
  r as c,
  av as L,
  F as b,
  o as C,
  a as g,
  c as k,
  t as N,
  g as $,
  b as i,
  cO as F,
  w as r,
  bp as K,
  cP as M,
  v as h,
  e as o,
  k as R,
  a4 as T,
  cQ as z,
  n as w,
  a7 as D,
  j as P
} from "./BZXAykfw.js";
const A = {
    key: 0,
    class: "title"
  },
  I = ["placeholder", "autofocus"],
  U = {
    class: "right-asset"
  },
  j = _({
    __name: "SearchWithTitle",
    props: y({
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
    emits: y(["apply"], ["update:modelValue"]),
    setup(t, {
      emit: S
    }) {
      const B = t,
        v = S,
        a = E(t, "modelValue"),
        p = c(),
        l = c(!1),
        m = () => {
          var s;
          return (s = p.value) == null ? void 0 : s.blur()
        },
        x = () => {
          a.value = "", v("apply", "")
        },
        u = c(l.value);
      L(l, s => {
        s ? u.value = !1 : setTimeout(() => u.value = !0, 300)
      });
      const d = b(() => B.isLoading && a.value.length > 0),
        f = s => s.code === "Escape" && m();
      return window.addEventListener("keyup", f), C(() => window.removeEventListener("keyup", f)), (s, e) => {
        const V = D;
        return g(), k("div", {
          class: w(["kit-search-with-title", {
            "is-activated": o(l) || a.value.length > 0 || t.activated
          }])
        }, [t.title ? (g(), k("div", A, N(t.title), 1)) : $("", !0), i("div", {
          class: w(["search-compose", {
            "is-focused": o(l) || t.activated,
            "is-loading": o(d)
          }])
        }, [e[5] || (e[5] = i("img", {
          src: F,
          alt: "Search icon"
        }, null, -1)), r(i("input", {
          ref_key: "inputRef",
          ref: p,
          "onUpdate:modelValue": e[0] || (e[0] = n => a.value = n),
          placeholder: t.placeholder,
          type: "text",
          autofocus: t.autofocus,
          onFocus: e[1] || (e[1] = n => l.value = !0),
          onBlur: e[2] || (e[2] = n => (l.value = !1, v("apply", a.value))),
          onKeyup: e[3] || (e[3] = M(n => m(), ["enter"]))
        }, null, 40, I), [
          [K, a.value]
        ]), i("div", U, [r(R(V, {
          type: o(T).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [h, o(d)]
        ]), r(i("img", {
          src: z,
          alt: "Clear search",
          class: "close-icon",
          onClick: e[4] || (e[4] = n => x())
        }, null, 512), [
          [h, a.value.length > 0 && !o(u) && !o(d)]
        ])])], 2)], 2)
      }
    }
  }),
  O = P(j, [
    ["__scopeId", "data-v-289f3f4b"]
  ]);
export {
  O as _
};