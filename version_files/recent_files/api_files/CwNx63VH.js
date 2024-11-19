import {
  d as V,
  az as x,
  w as h,
  b_ as C,
  a as n,
  c as r,
  j as E,
  ay as I,
  r as i,
  av as z,
  aj as D,
  o as F,
  F as R,
  au as T,
  a8 as $,
  b as t,
  W as U,
  X as W,
  n as w,
  g as j,
  t as q,
  e as b,
  bi as A,
  aB as G
} from "./nFxUmw4d.js";
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
        [C, v.value]
      ])
    }
  }),
  Z = E(N, [
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
          const l = a.value,
            e = (_ = o.value) == null ? void 0 : _.querySelector(`label[data-tab="${l}"]`);
          if (e) {
            const s = e.getBoundingClientRect(),
              m = window.innerWidth - s.right,
              S = s.left,
              B = e.offsetLeft;
            (m < 50 || S < 50) && (o.value.scrollLeft = B - window.innerWidth / 2 + s.width / 2)
          }
        };
      setTimeout(() => f(), 10), z(a, f);
      const y = i(!1),
        g = i(!1),
        d = i(null),
        u = i(null),
        p = new IntersectionObserver(([l]) => {
          const e = l.intersectionRatio < k;
          l.target.classList.contains("start") ? g.value = !e : y.value = !e
        }, {
          threshold: k
        });
      D(() => {
        d.value && p.observe(d.value), u.value && p.observe(u.value)
      }), F(() => {
        d.value && p.unobserve(d.value), u.value && p.unobserve(u.value)
      });
      const L = R(() => {
          var l;
          return ((l = v.items) == null ? void 0 : l.map(e => typeof e == "string" ? {
            value: e,
            label: e
          } : e)) ?? []
        }),
        M = T();
      return (l, e) => {
        const _ = $("horizontal-wheel-scroll");
        return n(), r("div", {
          class: w(["kit-tabs-inline", {
            "is-fully-right-scrolled": b(y),
            "is-fully-left-scrolled": b(g)
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
        }, null, 512), (n(!0), r(U, null, W(b(L), s => (n(), r("label", {
          key: s.value,
          class: w(["tab", {
            "is-active": a.value === s.value,
            "show-dot": s.dot
          }]),
          "data-tab": s.value
        }, [s.pingDot ? (n(), r("div", O)) : j("", !0), t("span", X, q(s.label), 1), e[1] || (e[1] = t("div", {
          class: "dot"
        }, null, -1)), h(t("input", {
          "onUpdate:modelValue": e[0] || (e[0] = m => a.value = m),
          type: "radio",
          value: s.value,
          name: b(M)
        }, null, 8, J), [
          [A, a.value]
        ])], 10, K))), 128)), t("div", {
          ref_key: "endEl",
          ref: u,
          class: "end"
        }, null, 512)]), G(l.$slots, "after", {}, void 0, !0)])), [
          [_]
        ])], 2)
      }
    }
  }),
  ee = E(P, [
    ["__scopeId", "data-v-b934ca6e"]
  ]);
export {
  Z as _, ee as a
};