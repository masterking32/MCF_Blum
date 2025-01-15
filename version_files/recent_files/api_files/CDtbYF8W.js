import {
  d as K,
  al as g,
  am as T,
  K as m,
  P as w,
  j as b,
  aY as C,
  aZ as M,
  U as N,
  o as h,
  c as k,
  t as $,
  D,
  a as i,
  cI as R,
  w as f,
  bJ as U,
  cJ as F,
  cK as x,
  e as o,
  b as I,
  aU as P,
  cL as z,
  n as S,
  aV as A,
  f as J
} from "./DrQ2shF8.js";
const Y = {
    key: 0,
    class: "title"
  },
  j = ["placeholder", "autofocus"],
  H = {
    class: "right-asset"
  },
  W = K({
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
        u = m(),
        l = m(!1),
        c = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        E = () => {
          s.value = "", v("apply", "")
        },
        d = m(l.value);
      w(l, e => {
        e ? d.value = !1 : setTimeout(() => d.value = !0, 300)
      });
      const r = b(() => p.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && c();
      window.addEventListener("keyup", y);
      const L = [];
      return w(u, async e => {
        e && p.autofocus && (await C(), await M(0), e.focus())
      }, {
        immediate: !0
      }), N(() => {
        L.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), B({
        blur: c
      }), (e, t) => {
        const _ = A;
        return h(), k("div", {
          class: S(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (h(), k("div", Y, $(a.title), 1)) : D("", !0), i("label", {
          class: S(["search-compose", {
            "is-focused": o(l) || a.activated,
            "is-loading": o(r)
          }])
        }, [t[5] || (t[5] = i("img", {
          src: R,
          alt: "Search icon"
        }, null, -1)), f(i("input", {
          ref_key: "inputRef",
          ref: u,
          "onUpdate:modelValue": t[0] || (t[0] = n => s.value = n),
          placeholder: a.placeholder,
          type: "text",
          autofocus: a.autofocus,
          onFocus: t[1] || (t[1] = n => l.value = !0),
          onBlur: t[2] || (t[2] = n => (l.value = !1, v("apply", s.value))),
          onKeyup: t[3] || (t[3] = F(n => c(), ["enter"]))
        }, null, 40, j), [
          [U, s.value]
        ]), i("div", H, [f(I(_, {
          type: o(P).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [x, o(r)]
        ]), f(i("img", {
          src: z,
          alt: "Clear search",
          class: "close-icon",
          onClick: t[4] || (t[4] = n => E())
        }, null, 512), [
          [x, s.value.length > 0 && !o(d) && !o(r)]
        ])])], 2)], 2)
      }
    }
  }),
  q = J(W, [
    ["__scopeId", "data-v-e0665f8f"]
  ]);
export {
  q as _
};