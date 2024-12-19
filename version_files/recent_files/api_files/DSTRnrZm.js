import {
  d as V,
  ar as x,
  w as h,
  bV as B,
  o as n,
  c as r,
  f as C,
  aq as I,
  G as i,
  am as T,
  a8 as q,
  T as z,
  j as D,
  al as F,
  P as R,
  a as t,
  F as $,
  q as G,
  n as w,
  C as U,
  t as A,
  e as m,
  bv as N,
  az as W
} from "./DQp58DI6.js";
const j = V({
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
  Z = C(j, [
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
  P = {
    class: "label"
  },
  J = ["value", "name"],
  k = .4,
  Q = V({
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
      const y = i(!1),
        g = i(!1),
        d = i(null),
        u = i(null),
        p = new IntersectionObserver(([s]) => {
          const e = s.intersectionRatio < k;
          s.target.classList.contains("start") ? g.value = !e : y.value = !e
        }, {
          threshold: k
        });
      q(() => {
        d.value && p.observe(d.value), u.value && p.observe(u.value)
      }), z(() => {
        d.value && p.unobserve(d.value), u.value && p.unobserve(u.value)
      });
      const E = D(() => {
          var s;
          return ((s = v.items) == null ? void 0 : s.map(e => typeof e == "string" ? {
            value: e,
            label: e
          } : e)) ?? []
        }),
        L = F();
      return (s, e) => {
        const _ = R("horizontal-wheel-scroll");
        return n(), r("div", {
          class: w(["kit-tabs-inline", {
            "is-fully-right-scrolled": m(y),
            "is-fully-left-scrolled": m(g)
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
        }, null, 512), (n(!0), r($, null, G(m(E), l => (n(), r("label", {
          key: l.value,
          class: w(["tab", {
            "is-active": a.value === l.value,
            "show-dot": l.dot
          }]),
          "data-tab": l.value
        }, [l.pingDot ? (n(), r("div", O)) : U("", !0), t("span", P, A(l.label), 1), e[1] || (e[1] = t("div", {
          class: "dot"
        }, null, -1)), h(t("input", {
          "onUpdate:modelValue": e[0] || (e[0] = b => a.value = b),
          type: "radio",
          value: l.value,
          name: m(L)
        }, null, 8, J), [
          [N, a.value]
        ])], 10, K))), 128)), t("div", {
          ref_key: "endEl",
          ref: u,
          class: "end"
        }, null, 512)]), W(s.$slots, "after", {}, void 0, !0)])), [
          [_]
        ])], 2)
      }
    }
  }),
  ee = C(Q, [
    ["__scopeId", "data-v-5192c793"]
  ]);
export {
  Z as _, ee as a
};