import {
  d as k,
  F as c,
  bn as v,
  r as f,
  a as _,
  c as h,
  b as s,
  k as u,
  e as n,
  aZ as M,
  n as E,
  aL as i,
  g as T,
  W as b,
  a_ as D,
  N as P,
  j as V
} from "./7Syd4Ho8.js";
const x = {
    class: "inner"
  },
  A = {
    class: "inner"
  },
  H = k({
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
            e ? l.jettonModalControls.set(v.IMAGE_PREVIEW) : l.jettonModalControls.clear()
          }
        }),
        y = f(null),
        o = f({
          start: void 0,
          current: void 0,
          touchFree: !0
        }),
        d = c(() => o.value.start === void 0 || o.value.current === void 0 ? 0 : Math.max(o.value.current - o.value.start, 0)),
        m = c(() => {
          const e = d.value,
            r = window.innerHeight / 2;
          return Math.abs(e) / r
        }),
        p = c(() => 1 - m.value),
        j = e => {
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
          e.preventDefault(), p.value < .3 && (a.value = !1), o.value = {
            start: void 0,
            current: void 0,
            touchFree: !0
          }
        };
      return (e, t) => {
        const r = D,
          F = P;
        return _(), h(b, null, [s("div", {
          class: E(["memepad-jetton-header-image", {
            "is-modal-opened": n(a)
          }]),
          style: i({
            "--move-percent": Math.min(n(m) * 100, 100)
          })
        }, [s("div", x, [u(r, {
          src: n(M)(e.jetton.iconFileKey),
          size: 36,
          onClick: t[0] || (t[0] = I => a.value = !0)
        }, null, 8, ["src"])])], 6), n(a) ? (_(), h("div", {
          key: 0,
          class: E(["memepad-jetton-header-modal-image", {
            "touch-free": n(o).touchFree
          }]),
          style: i({
            "--opacity": n(p)
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
          ref: y,
          class: "wrapper",
          style: i({
            "--diff": n(d)
          }),
          onTouchstart: j,
          onTouchmove: w,
          onTouchend: C
        }, [u(r, {
          src: n(M)(e.jetton.iconFileKey),
          "full-width": ""
        }, null, 8, ["src"])], 36)])], 6)) : T("", !0)], 64)
      }
    }
  }),
  Y = V(H, [
    ["__scopeId", "data-v-37ced4f4"]
  ]);
export {
  Y as _
};