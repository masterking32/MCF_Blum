import {
  d as C,
  ap as g,
  aq as T,
  L as f,
  Q as w,
  j as $,
  a_ as b,
  a$ as K,
  V as M,
  o as h,
  c as k,
  t as N,
  C as R,
  a as i,
  cI as D,
  w as m,
  bJ as F,
  cJ as I,
  cK as x,
  e as o,
  b as z,
  aW as A,
  cL as J,
  n as S,
  aX as P,
  f as U
} from "./DRqvt5pl.js";
const W = {
    key: 0,
    class: "title"
  },
  j = ["placeholder", "autofocus"],
  q = {
    class: "right-asset"
  },
  H = C({
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
      emit: L
    }) {
      const p = a,
        v = L,
        s = T(a, "modelValue"),
        u = f(),
        l = f(!1),
        c = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        V = () => {
          s.value = "", v("apply", "")
        },
        d = f(l.value);
      w(l, e => {
        e ? d.value = !1 : setTimeout(() => d.value = !0, 300)
      });
      const r = $(() => p.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && c();
      window.addEventListener("keyup", y);
      const _ = [];
      return w(u, async e => {
        e && p.autofocus && (await b(), await K(0), e.focus())
      }, {
        immediate: !0
      }), M(() => {
        _.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), B({
        blur: c
      }), (e, t) => {
        const E = P;
        return h(), k("div", {
          class: S(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (h(), k("div", W, N(a.title), 1)) : R("", !0), i("label", {
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
          onKeyup: t[3] || (t[3] = I(n => c(), ["enter"]))
        }, null, 40, j), [
          [F, s.value]
        ]), i("div", q, [m(z(E, {
          type: o(A).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [x, o(r)]
        ]), m(i("img", {
          src: J,
          alt: "Clear search",
          class: "close-icon",
          onClick: t[4] || (t[4] = n => V())
        }, null, 512), [
          [x, s.value.length > 0 && !o(d) && !o(r)]
        ])])], 2)], 2)
      }
    }
  }),
  X = U(H, [
    ["__scopeId", "data-v-e0665f8f"]
  ]);
export {
  X as _
};