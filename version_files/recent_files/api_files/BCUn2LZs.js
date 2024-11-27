import {
  d as V,
  aA as x,
  w as h,
  bT as B,
  a as n,
  c as r,
  j as C,
  az as I,
  r as i,
  av as T,
  aj as z,
  o as D,
  F,
  au as R,
  a8 as $,
  b as t,
  W as A,
  X as U,
  n as w,
  g as W,
  t as j,
  e as m,
  bl as q,
  aC as G
} from "./2LbcXgIA.js";
const N = V({
    __name: "CheckboxLegal",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(c) {
      const v = x(c, "modelValue");
      return (a, o) => h((n(), r("input", {
        "onUpdate:modelValue": o[0] || (o[0] = f => v.value = f),
        type: "checkbox",
        class: "checkbox-legal"
      }, null, 512)), [
        [B, v.value]
      ])
    }
  }),
  Z = C(N, [
    ["__scopeId", "data-v-f5d0d034"]
  ]),
  H = {
    class: "list"
  },
  K = ["data-tab"],
  O = {
    key: 0,
    class: "ping-dot"
  },
  X = {
    class: "label"
  },
  J = ["value", "name"],
  k = .4,
  P = V({
    __name: "KitTabsInline",
    props: I({
      items: {
        type: Array,
        default: void 0
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(c) {
      const v = c,
        a = x(c, "modelValue"),
        o = i(null),
        f = () => {
          var _;
          const s = a.value,
            e = (_ = o.value) == null ? void 0 : _.querySelector(`label[data-tab="${s}"]`);
          if (e) {
            const l = e.getBoundingClientRect(),
              b = window.innerWidth - l.right,
              M = l.left,
              S = e.offsetLeft;
            (b < 50 || M < 50) && (o.value.scrollLeft = S - window.innerWidth / 2 + l.width / 2)
          }
        };
      setTimeout(() => f(), 10), T(a, f);
      const g = i(!1),
        y = i(!1),
        d = i(null),
        u = i(null),
        p = new IntersectionObserver(([s]) => {
          const e = s.intersectionRatio < k;
          s.target.classList.contains("start") ? y.value = !e : g.value = !e
        }, {
          threshold: k
        });
      z(() => {
        d.value && p.observe(d.value), u.value && p.observe(u.value)
      }), D(() => {
        d.value && p.unobserve(d.value), u.value && p.unobserve(u.value)
      });
      const E = F(() => {
          var s;
          return ((s = v.items) == null ? void 0 : s.map(e => typeof e == "string" ? {
            value: e,
            label: e
          } : e)) ?? []
        }),
        L = R();
      return (s, e) => {
        const _ = $("horizontal-wheel-scroll");
        return n(), r("div", {
          class: w(["kit-tabs-inline", {
            "is-fully-right-scrolled": m(g),
            "is-fully-left-scrolled": m(y)
          }])
        }, [e[2] || (e[2] = t("div", {
          class: "shadow left-shadow"
        }, null, -1)), e[3] || (e[3] = t("div", {
          class: "shadow right-shadow"
        }, null, -1)), h((n(), r("div", {
          ref_key: "tabsEl",
          ref: o,
          class: "content"
        }, [t("div", H, [t("div", {
          ref_key: "startEl",
          ref: d,
          class: "start"
        }, null, 512), (n(!0), r(A, null, U(m(E), l => (n(), r("label", {
          key: l.value,
          class: w(["tab", {
            "is-active": a.value === l.value,
            "show-dot": l.dot
          }]),
          "data-tab": l.value
        }, [l.pingDot ? (n(), r("div", O)) : W("", !0), t("span", X, j(l.label), 1), e[1] || (e[1] = t("div", {
          class: "dot"
        }, null, -1)), h(t("input", {
          "onUpdate:modelValue": e[0] || (e[0] = b => a.value = b),
          type: "radio",
          value: l.value,
          name: m(L)
        }, null, 8, J), [
          [q, a.value]
        ])], 10, K))), 128)), t("div", {
          ref_key: "endEl",
          ref: u,
          class: "end"
        }, null, 512)]), G(s.$slots, "after", {}, void 0, !0)])), [
          [_]
        ])], 2)
      }
    }
  }),
  ee = C(P, [
    ["__scopeId", "data-v-5192c793"]
  ]);
export {
  Z as _, ee as a
};