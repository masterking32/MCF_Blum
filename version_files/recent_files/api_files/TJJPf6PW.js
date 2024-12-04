import {
  d as b,
  F as c,
  bj as v,
  r as _,
  a as f,
  c as h,
  b as s,
  k as u,
  e as n,
  a_ as M,
  n as E,
  aL as i,
  g as k,
  W as T,
  a$ as D,
  N as P,
  j as V
} from "./BtYZ0DEw.js";
const x = {
    class: "inner"
  },
  A = {
    class: "inner"
  },
  H = b({
    __name: "HeaderImage",
    props: {
      jetton: {},
      jettonModalControls: {}
    },
    setup(g) {
      const l = g,
        a = c({
          get() {
            return l.jettonModalControls.isOpened(v.IMAGE_PREVIEW)
          },
          set(e) {
            e ? l.jettonModalControls.update(v.IMAGE_PREVIEW) : l.jettonModalControls.update(void 0)
          }
        }),
        j = _(null),
        o = _({
          start: void 0,
          current: void 0,
          touchFree: !0
        }),
        d = c(() => o.value.start === void 0 || o.value.current === void 0 ? 0 : Math.max(o.value.current - o.value.start, 0)),
        p = c(() => {
          const e = d.value,
            r = window.innerHeight / 2;
          return Math.abs(e) / r
        }),
        m = c(() => 1 - p.value),
        y = e => {
          e.preventDefault();
          const t = e.touches[0];
          o.value = {
            start: t.clientY,
            current: t.clientY,
            touchFree: !1
          }
        },
        w = e => {
          e.preventDefault();
          const t = e.touches[0];
          o.value.current = t.clientY
        },
        C = e => {
          e.preventDefault(), m.value < .3 && (a.value = !1), o.value = {
            start: void 0,
            current: void 0,
            touchFree: !0
          }
        };
      return (e, t) => {
        const r = D,
          F = P;
        return f(), h(T, null, [s("div", {
          class: E(["memepad-jetton-header-image", {
            "is-modal-opened": n(a)
          }]),
          style: i({
            "--move-percent": Math.min(n(p) * 100, 100)
          })
        }, [s("div", x, [u(r, {
          src: n(M)(e.jetton.iconFileKey),
          size: 36,
          onClick: t[0] || (t[0] = I => a.value = !0)
        }, null, 8, ["src"])])], 6), n(a) ? (f(), h("div", {
          key: 0,
          class: E(["memepad-jetton-header-modal-image", {
            "touch-free": n(o).touchFree
          }]),
          style: i({
            "--opacity": n(m)
          })
        }, [s("div", A, [s("button", {
          type: "button",
          class: "close-btn reset",
          onClick: t[1] || (t[1] = I => a.value = !1)
        }, [u(F, {
          name: "close-md",
          class: "icon"
        })]), s("div", {
          ref_key: "wrapperEl",
          ref: j,
          class: "wrapper",
          style: i({
            "--diff": n(d)
          }),
          onTouchstart: y,
          onTouchmove: w,
          onTouchend: C
        }, [u(r, {
          src: n(M)(e.jetton.iconFileKey),
          "full-width": ""
        }, null, 8, ["src"])], 36)])], 6)) : k("", !0)], 64)
      }
    }
  }),
  Y = V(H, [
    ["__scopeId", "data-v-303017b3"]
  ]);
export {
  Y as _
};