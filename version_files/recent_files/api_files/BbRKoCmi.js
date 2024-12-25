import {
  d as z,
  j as c,
  bk as p,
  G as v,
  o as f,
  c as _,
  a,
  b as i,
  e as n,
  aX as h,
  af as I,
  n as k,
  ax as M,
  C as P,
  F as T,
  aY as b,
  _ as D,
  f as V
} from "./Doz8XXSF.js";
const Y = {
    class: "inner"
  },
  $ = {
    class: "inner"
  },
  x = z({
    __name: "HeaderImage",
    props: {
      jetton: {},
      jettonModalControls: {},
      size: {
        default: 36
      }
    },
    setup(g) {
      const l = g,
        s = c({
          get() {
            return l.jettonModalControls.isOpened(p.IMAGE_PREVIEW)
          },
          set(e) {
            e ? l.jettonModalControls.set(p.IMAGE_PREVIEW) : l.jettonModalControls.clear()
          }
        }),
        E = v(null),
        o = v({
          start: void 0,
          current: void 0,
          touchFree: !0
        }),
        u = c(() => o.value.start === void 0 || o.value.current === void 0 ? 0 : Math.max(o.value.current - o.value.start, 0)),
        d = c(() => {
          const e = u.value,
            r = window.innerHeight / 2;
          return Math.abs(e) / r
        }),
        m = c(() => 1 - d.value),
        y = e => {
          e.preventDefault();
          const t = e.touches[0];
          o.value = {
            start: t.clientY,
            current: t.clientY,
            touchFree: !1
          }
        },
        j = e => {
          e.preventDefault();
          const t = e.touches[0];
          o.value.current = t.clientY
        },
        w = e => {
          e.preventDefault(), m.value < .3 && (s.value = !1), o.value = {
            start: void 0,
            current: void 0,
            touchFree: !0
          }
        };
      return (e, t) => {
        const r = b,
          C = D;
        return f(), _(T, null, [a("div", I({
          class: "memepad-jetton-header-image",
          style: {
            "--move-percent": Math.min(n(d) * 100, 100),
            "--image-size": `${e.size}px`
          }
        }, e.$attrs, {
          class: {
            "is-modal-opened": n(s)
          }
        }), [a("div", Y, [i(r, {
          src: n(h)(e.jetton.iconFileKey),
          size: e.size,
          onClick: t[0] || (t[0] = F => s.value = !0)
        }, null, 8, ["src", "size"])])], 16), n(s) ? (f(), _("div", {
          key: 0,
          class: k(["memepad-jetton-header-modal-image", {
            "touch-free": n(o).touchFree
          }]),
          style: M({
            "--opacity": n(m)
          })
        }, [a("div", $, [a("button", {
          type: "button",
          class: "close-btn reset",
          onClick: t[1] || (t[1] = F => s.value = !1)
        }, [i(C, {
          name: "close-md",
          class: "icon"
        })]), a("div", {
          ref_key: "wrapperEl",
          ref: E,
          class: "wrapper",
          style: M({
            "--diff": n(u)
          }),
          onTouchstart: y,
          onTouchmove: j,
          onTouchend: w
        }, [i(r, {
          src: n(h)(e.jetton.iconFileKey),
          "full-width": ""
        }, null, 8, ["src"])], 36)])], 6)) : P("", !0)], 64)
      }
    }
  }),
  H = V(x, [
    ["__scopeId", "data-v-ad056224"]
  ]);
export {
  H as _
};