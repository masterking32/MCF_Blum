import {
  d as V,
  ao as x,
  w as h,
  bN as B,
  o as n,
  c as r,
  f as L,
  an as D,
  L as i,
  Q as I,
  a7 as F,
  V as R,
  j as T,
  ak as $,
  O as q,
  a as t,
  F as z,
  q as N,
  n as w,
  D as U,
  t as A,
  e as m,
  bo as G,
  bk as O
} from "./DxboYIav.js";
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
  Z = L(W, [
    ["__scopeId", "data-v-f5d0d034"]
  ]),
  j = {
    class: "list"
  },
  H = ["data-tab"],
  K = {
    key: 0,
    class: "ping-dot"
  },
  Q = {
    class: "label"
  },
  J = ["value", "name"],
  k = .4,
  P = V({
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
              b = window.innerWidth - s.right,
              S = s.left,
              C = e.offsetLeft;
            (b < 50 || S < 50) && (o.value.scrollLeft = C - window.innerWidth / 2 + s.width / 2)
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
      F(() => {
        d.value && p.observe(d.value), u.value && p.observe(u.value)
      }), R(() => {
        d.value && p.unobserve(d.value), u.value && p.unobserve(u.value)
      });
      const E = T(() => {
          var l;
          return ((l = v.items) == null ? void 0 : l.map(e => typeof e == "string" ? {
            value: e,
            label: e
          } : e)) ?? []
        }),
        M = $();
      return (l, e) => {
        const _ = q("horizontal-wheel-scroll");
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
        }, [t("div", j, [t("div", {
          ref_key: "startEl",
          ref: d,
          class: "start"
        }, null, 512), (n(!0), r(z, null, N(m(E), s => (n(), r("label", {
          key: s.value,
          class: w(["tab", {
            "is-active": a.value === s.value,
            "show-dot": s.dot
          }]),
          "data-tab": s.value
        }, [s.pingDot ? (n(), r("div", K)) : U("", !0), t("span", Q, A(s.label), 1), e[1] || (e[1] = t("div", {
          class: "dot"
        }, null, -1)), h(t("input", {
          "onUpdate:modelValue": e[0] || (e[0] = b => a.value = b),
          type: "radio",
          value: s.value,
          name: m(M)
        }, null, 8, J), [
          [G, a.value]
        ])], 10, H))), 128)), t("div", {
          ref_key: "endEl",
          ref: u,
          class: "end"
        }, null, 512)]), O(l.$slots, "after", {}, void 0, !0)])), [
          [_]
        ])], 2)
      }
    }
  }),
  ee = L(P, [
    ["__scopeId", "data-v-5192c793"]
  ]);
export {
  Z as _, ee as a
};