import {
  d as V,
  ao as x,
  w as h,
  b$ as B,
  o as n,
  c as r,
  f as M,
  an as D,
  K as i,
  aM as I,
  a8 as T,
  T as $,
  j as F,
  ak as R,
  N as q,
  a as t,
  F as z,
  q as N,
  n as w,
  D as U,
  t as A,
  e as b,
  bC as G,
  br as K
} from "./C5qtAAJO.js";
const W = V({
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
  Z = M(W, [
    ["__scopeId", "data-v-f5d0d034"]
  ]),
  j = {
    class: "list"
  },
  H = ["data-tab"],
  O = {
    key: 0,
    class: "ping-dot"
  },
  J = {
    class: "label"
  },
  P = ["value", "name"],
  k = .4,
  Q = V({
    __name: "KitTabsInline",
    props: D({
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
              L = s.left,
              S = e.offsetLeft;
            (m < 50 || L < 50) && (o.value.scrollLeft = S - window.innerWidth / 2 + s.width / 2)
          }
        };
      setTimeout(() => f(), 10), I(a, f);
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
      T(() => {
        d.value && p.observe(d.value), u.value && p.observe(u.value)
      }), $(() => {
        d.value && p.unobserve(d.value), u.value && p.unobserve(u.value)
      });
      const C = F(() => {
          var l;
          return ((l = v.items) == null ? void 0 : l.map(e => typeof e == "string" ? {
            value: e,
            label: e
          } : e)) ?? []
        }),
        E = R();
      return (l, e) => {
        const _ = q("horizontal-wheel-scroll");
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
        }, [t("div", j, [t("div", {
          ref_key: "startEl",
          ref: d,
          class: "start"
        }, null, 512), (n(!0), r(z, null, N(b(C), s => (n(), r("label", {
          key: s.value,
          class: w(["tab", {
            "is-active": a.value === s.value,
            "show-dot": s.dot
          }]),
          "data-tab": s.value
        }, [s.pingDot ? (n(), r("div", O)) : U("", !0), t("span", J, A(s.label), 1), e[1] || (e[1] = t("div", {
          class: "dot"
        }, null, -1)), h(t("input", {
          "onUpdate:modelValue": e[0] || (e[0] = m => a.value = m),
          type: "radio",
          value: s.value,
          name: b(E)
        }, null, 8, P), [
          [G, a.value]
        ])], 10, H))), 128)), t("div", {
          ref_key: "endEl",
          ref: u,
          class: "end"
        }, null, 512)]), K(l.$slots, "after", {}, void 0, !0)])), [
          [_]
        ])], 2)
      }
    }
  }),
  ee = M(Q, [
    ["__scopeId", "data-v-d98f083b"]
  ]);
export {
  Z as _, ee as a
};