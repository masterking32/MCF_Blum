import {
  d as V,
  am as x,
  w as h,
  bP as B,
  o as n,
  c as r,
  f as E,
  al as D,
  K as u,
  P as I,
  a6 as F,
  U as R,
  j as T,
  ai as U,
  N as $,
  a as t,
  F as q,
  q as z,
  n as w,
  D as N,
  t as A,
  e as m,
  bn as G,
  bi as K
} from "./CALhxlCG.js";
const P = V({
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
  Z = E(P, [
    ["__scopeId", "data-v-f5d0d034"]
  ]),
  W = {
    class: "list"
  },
  j = ["data-tab"],
  H = {
    key: 0,
    class: "ping-dot"
  },
  O = {
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
        o = u(null),
        f = () => {
          var _;
          const s = a.value,
            e = (_ = o.value) == null ? void 0 : _.querySelector(`label[data-tab="${s}"]`);
          if (e) {
            const l = e.getBoundingClientRect(),
              b = window.innerWidth - l.right,
              S = l.left,
              C = e.offsetLeft;
            (b < 50 || S < 50) && (o.value.scrollLeft = C - window.innerWidth / 2 + l.width / 2)
          }
        };
      setTimeout(() => f(), 10), I(a, f);
      const y = u(!1),
        g = u(!1),
        d = u(null),
        i = u(null),
        p = new IntersectionObserver(([s]) => {
          const e = s.intersectionRatio < k;
          s.target.classList.contains("start") ? g.value = !e : y.value = !e
        }, {
          threshold: k
        });
      F(() => {
        d.value && p.observe(d.value), i.value && p.observe(i.value)
      }), R(() => {
        d.value && p.unobserve(d.value), i.value && p.unobserve(i.value)
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
        }, [t("div", W, [t("div", {
          ref_key: "startEl",
          ref: d,
          class: "start"
        }, null, 512), (n(!0), r(q, null, z(m(L), l => (n(), r("label", {
          key: l.value,
          class: w(["tab", {
            "is-active": a.value === l.value,
            "show-dot": l.dot
          }]),
          "data-tab": l.value
        }, [l.pingDot ? (n(), r("div", H)) : N("", !0), t("span", O, A(l.label), 1), e[1] || (e[1] = t("div", {
          class: "dot"
        }, null, -1)), h(t("input", {
          "onUpdate:modelValue": e[0] || (e[0] = b => a.value = b),
          type: "radio",
          value: l.value,
          name: m(M)
        }, null, 8, J), [
          [G, a.value]
        ])], 10, j))), 128)), t("div", {
          ref_key: "endEl",
          ref: i,
          class: "end"
        }, null, 512)]), K(s.$slots, "after", {}, void 0, !0)])), [
          [_]
        ])], 2)
      }
    }
  }),
  ee = E(Q, [
    ["__scopeId", "data-v-5192c793"]
  ]);
export {
  Z as _, ee as a
};