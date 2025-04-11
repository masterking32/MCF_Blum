import {
  d as x,
  ax as V,
  w as h,
  ca as B,
  o as n,
  c as d,
  f as E,
  aw as I,
  y as i,
  U as R,
  ak as D,
  a2 as F,
  j as T,
  au as U,
  R as $,
  a as t,
  F as q,
  q as z,
  n as g,
  E as A,
  t as G,
  e as m,
  bK as K,
  ad as N
} from "./C6VgFSU0.js";
const W = x({
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
      const v = V(c, "modelValue");
      return (a, o) => h((n(), d("input", {
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
  J = {
    class: "label"
  },
  P = ["value", "name"],
  k = .4,
  Q = x({
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
        a = V(c, "modelValue"),
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
      setTimeout(() => f(), 10), R(a, f);
      const y = i(!1),
        w = i(!1),
        r = i(null),
        u = i(null),
        p = new IntersectionObserver(([l]) => {
          const e = l.intersectionRatio < k;
          l.target.classList.contains("start") ? w.value = !e : y.value = !e
        }, {
          threshold: k
        });
      D(() => {
        r.value && p.observe(r.value), u.value && p.observe(u.value)
      }), F(() => {
        r.value && p.unobserve(r.value), u.value && p.unobserve(u.value)
      });
      const L = T(() => {
          var l;
          return ((l = v.items) == null ? void 0 : l.map(e => typeof e == "string" ? {
            value: e,
            label: e
          } : e)) ?? []
        }),
        M = U();
      return (l, e) => {
        const _ = $("horizontal-wheel-scroll");
        return n(), d("div", {
          class: g(["kit-tabs-inline", {
            "is-fully-right-scrolled": m(y),
            "is-fully-left-scrolled": m(w)
          }])
        }, [e[2] || (e[2] = t("div", {
          class: "shadow left-shadow"
        }, null, -1)), e[3] || (e[3] = t("div", {
          class: "shadow right-shadow"
        }, null, -1)), h((n(), d("div", {
          ref_key: "tabsEl",
          ref: o,
          class: "content"
        }, [t("div", j, [t("div", {
          ref_key: "startEl",
          ref: r,
          class: "start"
        }, null, 512), (n(!0), d(q, null, z(m(L), s => (n(), d("label", {
          key: s.value,
          class: g(["tab", {
            "is-active": a.value === s.value,
            "show-dot": s.dot
          }]),
          "data-tab": s.value
        }, [s.pingDot ? (n(), d("div", O)) : A("", !0), t("span", J, G(s.label), 1), e[1] || (e[1] = t("div", {
          class: "dot"
        }, null, -1)), h(t("input", {
          "onUpdate:modelValue": e[0] || (e[0] = b => a.value = b),
          type: "radio",
          value: s.value,
          name: m(M)
        }, null, 8, P), [
          [K, a.value]
        ])], 10, H))), 128)), t("div", {
          ref_key: "endEl",
          ref: u,
          class: "end"
        }, null, 512)]), N(l.$slots, "after", {}, void 0, !0)])), [
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