import {
  d as V,
  ap as x,
  w as h,
  bV as B,
  o as n,
  c as r,
  f as E,
  ao as D,
  K as i,
  P as I,
  a9 as F,
  U as R,
  j as T,
  al as U,
  N as $,
  a as t,
  F as q,
  q as z,
  n as w,
  D as N,
  t as A,
  e as b,
  br as G,
  bl as K
} from "./guWQ5rpf.js";
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
  Z = E(W, [
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
  P = {
    class: "label"
  },
  J = ["value", "name"],
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
          const s = a.value,
            e = (_ = o.value) == null ? void 0 : _.querySelector(`label[data-tab="${s}"]`);
          if (e) {
            const l = e.getBoundingClientRect(),
              m = window.innerWidth - l.right,
              S = l.left,
              C = e.offsetLeft;
            (m < 50 || S < 50) && (o.value.scrollLeft = C - window.innerWidth / 2 + l.width / 2)
          }
        };
      setTimeout(() => f(), 10), I(a, f);
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
      F(() => {
        d.value && p.observe(d.value), u.value && p.observe(u.value)
      }), R(() => {
        d.value && p.unobserve(d.value), u.value && p.unobserve(u.value)
      });
      const L = T(() => {
          var s;
          return ((s = v.items) == null ? void 0 : s.map(e => typeof e == "string" ? {
            value: e,
            label: e
          } : e)) ?? []
        }),
        M = U();
      return (s, e) => {
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
        }, [t("div", j, [t("div", {
          ref_key: "startEl",
          ref: d,
          class: "start"
        }, null, 512), (n(!0), r(q, null, z(b(L), l => (n(), r("label", {
          key: l.value,
          class: w(["tab", {
            "is-active": a.value === l.value,
            "show-dot": l.dot
          }]),
          "data-tab": l.value
        }, [l.pingDot ? (n(), r("div", O)) : N("", !0), t("span", P, A(l.label), 1), e[1] || (e[1] = t("div", {
          class: "dot"
        }, null, -1)), h(t("input", {
          "onUpdate:modelValue": e[0] || (e[0] = m => a.value = m),
          type: "radio",
          value: l.value,
          name: b(M)
        }, null, 8, J), [
          [G, a.value]
        ])], 10, H))), 128)), t("div", {
          ref_key: "endEl",
          ref: u,
          class: "end"
        }, null, 512)]), K(s.$slots, "after", {}, void 0, !0)])), [
          [_]
        ])], 2)
      }
    }
  }),
  ee = E(Q, [
    ["__scopeId", "data-v-d98f083b"]
  ]);
export {
  Z as _, ee as a
};