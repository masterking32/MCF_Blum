import {
  d as b,
  ao as g,
  ap as M,
  K as f,
  P as w,
  j as N,
  a$ as T,
  b0 as $,
  U as C,
  o as h,
  c as k,
  t as K,
  D,
  a as i,
  cL as R,
  w as m,
  bO as F,
  cM as P,
  cN as x,
  e as o,
  b as U,
  aX as z,
  cO as A,
  n as S,
  aY as I,
  f as O
} from "./7B743EeA.js";
const Y = {
    key: 0,
    class: "title"
  },
  j = ["placeholder", "autofocus"],
  H = {
    class: "right-asset"
  },
  W = b({
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
      emit: E
    }) {
      const p = a,
        v = E,
        s = M(a, "modelValue"),
        u = f(),
        l = f(!1),
        c = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        L = () => {
          s.value = "", v("apply", "")
        },
        d = f(l.value);
      w(l, e => {
        e ? d.value = !1 : setTimeout(() => d.value = !0, 300)
      });
      const r = N(() => p.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && c();
      window.addEventListener("keyup", y);
      const V = [];
      return w(u, async e => {
        e && p.autofocus && (await T(), await $(0), e.focus())
      }, {
        immediate: !0
      }), C(() => {
        V.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), B({
        blur: c
      }), (e, t) => {
        const _ = I;
        return h(), k("div", {
          class: S(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (h(), k("div", Y, K(a.title), 1)) : D("", !0), i("label", {
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
          onKeyup: t[3] || (t[3] = P(n => c(), ["enter"]))
        }, null, 40, j), [
          [F, s.value]
        ]), i("div", H, [m(U(_, {
          type: o(z).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [x, o(r)]
        ]), m(i("img", {
          src: A,
          alt: "Clear search",
          class: "close-icon",
          onClick: t[4] || (t[4] = n => L())
        }, null, 512), [
          [x, s.value.length > 0 && !o(d) && !o(r)]
        ])])], 2)], 2)
      }
    }
  }),
  q = O(W, [
    ["__scopeId", "data-v-e0665f8f"]
  ]);
export {
  q as _
};