import {
  d as k,
  az as V,
  w as h,
  b_ as B,
  a as o,
  c as n,
  j as x,
  ay as C,
  r as u,
  av as I,
  aj as z,
  o as D,
  F,
  au as R,
  a8 as $,
  b as t,
  W as U,
  X as W,
  n as g,
  g as j,
  t as q,
  e as b,
  bi as G,
  aB as N
} from "./TkfSaITf.js";
const A = k({
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
      return (r, a) => h((o(), n("input", {
        "onUpdate:modelValue": a[0] || (a[0] = f => v.value = f),
        type: "checkbox",
        class: "checkbox-legal"
      }, null, 512)), [
        [B, v.value]
      ])
    }
  }),
  Y = x(A, [
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
  T = {
    class: "label"
  },
  X = ["value", "name"],
  w = .4,
  J = k({
    __name: "KitTabsInline",
    props: C({
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
        r = V(c, "modelValue"),
        a = u(null);
      I(r, l => {
        var _;
        const e = (_ = a.value) == null ? void 0 : _.querySelector(`label[data-tab="${l}"]`);
        if (e) {
          const s = e.getBoundingClientRect(),
            m = window.innerWidth - s.right,
            M = s.left,
            S = e.offsetLeft;
          (m < 50 || M < 50) && (a.value.scrollLeft = S - window.innerWidth / 2 + s.width / 2)
        }
      });
      const f = u(!1),
        y = u(!1),
        d = u(null),
        i = u(null),
        p = new IntersectionObserver(([l]) => {
          const e = l.intersectionRatio < w;
          l.target.classList.contains("start") ? y.value = !e : f.value = !e
        }, {
          threshold: w
        });
      z(() => {
        d.value && p.observe(d.value), i.value && p.observe(i.value)
      }), D(() => {
        d.value && p.unobserve(d.value), i.value && p.unobserve(i.value)
      });
      const E = F(() => {
          var l;
          return ((l = v.items) == null ? void 0 : l.map(e => typeof e == "string" ? {
            value: e,
            label: e
          } : e)) ?? []
        }),
        L = R();
      return (l, e) => {
        const _ = $("horizontal-wheel-scroll");
        return o(), n("div", {
          class: g(["kit-tabs-inline", {
            "is-fully-right-scrolled": b(f),
            "is-fully-left-scrolled": b(y)
          }])
        }, [e[2] || (e[2] = t("div", {
          class: "shadow left-shadow"
        }, null, -1)), e[3] || (e[3] = t("div", {
          class: "shadow right-shadow"
        }, null, -1)), h((o(), n("div", {
          ref_key: "tabsEl",
          ref: a,
          class: "content"
        }, [t("div", H, [t("div", {
          ref_key: "startEl",
          ref: d,
          class: "start"
        }, null, 512), (o(!0), n(U, null, W(b(E), s => (o(), n("label", {
          key: s.value,
          class: g(["tab", {
            "is-active": r.value === s.value,
            "show-dot": s.dot
          }]),
          "data-tab": s.value
        }, [s.pingDot ? (o(), n("div", O)) : j("", !0), t("span", T, q(s.label), 1), e[1] || (e[1] = t("div", {
          class: "dot"
        }, null, -1)), h(t("input", {
          "onUpdate:modelValue": e[0] || (e[0] = m => r.value = m),
          type: "radio",
          value: s.value,
          name: b(L)
        }, null, 8, X), [
          [G, r.value]
        ])], 10, K))), 128)), t("div", {
          ref_key: "endEl",
          ref: i,
          class: "end"
        }, null, 512)]), N(l.$slots, "after", {}, void 0, !0)])), [
          [_]
        ])], 2)
      }
    }
  }),
  Z = x(J, [
    ["__scopeId", "data-v-3030b3fc"]
  ]);
export {
  Y as _, Z as a
};