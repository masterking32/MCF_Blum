import {
  d as C,
  a4 as M,
  C as B,
  J as r,
  K as D,
  L as F,
  ag as G,
  j as I,
  b5 as R,
  a2 as T,
  o as d,
  c as i,
  a as t,
  w,
  F as q,
  q as x,
  n as g,
  G as z,
  t as A,
  e as v,
  bG as K,
  aq as N,
  f as U
} from "./CTMy7kFf.js";
const W = {
    class: "list"
  },
  $ = ["data-tab"],
  j = {
    key: 0,
    class: "ping-dot"
  },
  H = {
    class: "label"
  },
  J = ["value", "name"],
  y = .4,
  O = C({
    __name: "KitTabsInline",
    props: M({
      items: {
        type: Array,
        default: void 0
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(b) {
      const k = b,
        a = B(b, "modelValue"),
        f = r(null),
        _ = () => {
          var c;
          const l = a.value,
            e = (c = f.value) == null ? void 0 : c.querySelector(`label[data-tab="${l}"]`);
          if (e) {
            const s = e.getBoundingClientRect(),
              p = window.innerWidth - s.right,
              S = s.left,
              V = e.offsetLeft;
            (p < 50 || S < 50) && (f.value.scrollLeft = V - window.innerWidth / 2 + s.width / 2)
          }
        };
      setTimeout(() => _(), 10), D(a, _);
      const m = r(!1),
        h = r(!1),
        o = r(null),
        n = r(null),
        u = new IntersectionObserver(([l]) => {
          const e = l.intersectionRatio < y;
          l.target.classList.contains("start") ? h.value = !e : m.value = !e
        }, {
          threshold: y
        });
      F(() => {
        o.value && u.observe(o.value), n.value && u.observe(n.value)
      }), G(() => {
        o.value && u.unobserve(o.value), n.value && u.unobserve(n.value)
      });
      const E = I(() => {
          var l;
          return ((l = k.items) == null ? void 0 : l.map(e => typeof e == "string" ? {
            value: e,
            label: e
          } : e)) ?? []
        }),
        L = R();
      return (l, e) => {
        const c = T("horizontal-wheel-scroll");
        return d(), i("div", {
          class: g(["kit-tabs-inline", {
            "is-fully-right-scrolled": v(m),
            "is-fully-left-scrolled": v(h)
          }])
        }, [e[2] || (e[2] = t("div", {
          class: "shadow left-shadow"
        }, null, -1)), e[3] || (e[3] = t("div", {
          class: "shadow right-shadow"
        }, null, -1)), w((d(), i("div", {
          ref_key: "tabsEl",
          ref: f,
          class: "content"
        }, [t("div", W, [t("div", {
          ref_key: "startEl",
          ref: o,
          class: "start"
        }, null, 512), (d(!0), i(q, null, x(v(E), s => (d(), i("label", {
          key: s.value,
          class: g(["tab", {
            "is-active": a.value === s.value,
            "show-dot": s.dot
          }]),
          "data-tab": s.value
        }, [s.pingDot ? (d(), i("div", j)) : z("", !0), t("span", H, A(s.label), 1), e[1] || (e[1] = t("div", {
          class: "dot"
        }, null, -1)), w(t("input", {
          "onUpdate:modelValue": e[0] || (e[0] = p => a.value = p),
          type: "radio",
          value: s.value,
          name: v(L)
        }, null, 8, J), [
          [K, a.value]
        ])], 10, $))), 128)), t("div", {
          ref_key: "endEl",
          ref: n,
          class: "end"
        }, null, 512)]), N(l.$slots, "after", {}, void 0, !0)])), [
          [c]
        ])], 2)
      }
    }
  }),
  X = U(O, [
    ["__scopeId", "data-v-d98f083b"]
  ]);
export {
  X as _
};