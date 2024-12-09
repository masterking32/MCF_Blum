import {
  d as _,
  az as g,
  aA as L,
  r as m,
  av as k,
  F as C,
  b6 as M,
  b7 as N,
  o as $,
  a as w,
  c as h,
  t as F,
  g as K,
  b as i,
  cS as R,
  w as v,
  bU as U,
  cT as z,
  v as S,
  e as o,
  k as A,
  a4 as D,
  cU as I,
  n as x,
  a7 as P,
  j
} from "./4q655kMI.js";
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
      expose: B,
      emit: b
    }) {
      const f = a,
        p = b,
        s = L(a, "modelValue"),
        u = m(),
        l = m(!1),
        c = () => {
          var e;
          return (e = u.value) == null ? void 0 : e.blur()
        },
        E = () => {
          s.value = "", p("apply", "")
        },
        d = m(l.value);
      k(l, e => {
        e ? d.value = !1 : setTimeout(() => d.value = !0, 300)
      });
      const r = C(() => f.isLoading && s.value.length > 0),
        y = e => e.code === "Escape" && c();
      window.addEventListener("keyup", y);
      const T = [];
      return k(u, async e => {
        e && f.autofocus && (await M(), await N(0), e.focus())
      }, {
        immediate: !0
      }), $(() => {
        T.forEach(e => clearTimeout(e)), window.removeEventListener("keyup", y)
      }), B({
        blur: c
      }), (e, t) => {
        const V = P;
        return w(), h("div", {
          class: x(["kit-search-with-title", {
            "is-activated": o(l) || s.value.length > 0 || a.activated
          }])
        }, [a.title ? (w(), h("div", H, F(a.title), 1)) : K("", !0), i("label", {
          class: x(["search-compose", {
            "is-focused": o(l) || a.activated,
            "is-loading": o(r)
          }])
        }, [t[5] || (t[5] = i("img", {
          src: R,
          alt: "Search icon"
        }, null, -1)), v(i("input", {
          ref_key: "inputRef",
          ref: u,
          "onUpdate:modelValue": t[0] || (t[0] = n => s.value = n),
          placeholder: a.placeholder,
          type: "text",
          autofocus: a.autofocus,
          onFocus: t[1] || (t[1] = n => l.value = !0),
          onBlur: t[2] || (t[2] = n => (l.value = !1, p("apply", s.value))),
          onKeyup: t[3] || (t[3] = z(n => c(), ["enter"]))
        }, null, 40, W), [
          [U, s.value]
        ]), i("div", Y, [v(A(V, {
          type: o(D).DARK,
          size: 20,
          "track-dimmed": "",
          class: "spinner"
        }, null, 8, ["type"]), [
          [S, o(r)]
        ]), v(i("img", {
          src: I,
          alt: "Clear search",
          class: "close-icon",
          onClick: t[4] || (t[4] = n => E())
        }, null, 512), [
          [S, s.value.length > 0 && !o(d) && !o(r)]
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