import {
  d as z,
  y as c,
  j as l,
  U as b,
  o as p,
  c as v,
  a as s,
  b as i,
  e as n,
  aX as f,
  aN as j,
  n as M,
  aB as h,
  G as T,
  F as B,
  aY as C,
  _ as $,
  f as D
} from "./BN1oUHf5.js";
const E = {
    class: "inner"
  },
  H = {
    class: "inner"
  },
  I = z({
    __name: "HeaderImage",
    props: {
      jetton: {},
      size: {
        default: 36
      }
    },
    setup(N) {
      const o = c(!1),
        _ = c(null),
        a = c({
          start: void 0,
          current: void 0,
          touchFree: !0
        }),
        u = l(() => a.value.start === void 0 || a.value.current === void 0 ? 0 : Math.max(a.value.current - a.value.start, 0)),
        d = l(() => {
          const e = u.value,
            r = window.innerHeight / 2;
          return Math.abs(e) / r
        }),
        m = l(() => 1 - d.value),
        g = e => {
          e.preventDefault();
          const t = e.touches[0];
          a.value = {
            start: t.clientY,
            current: t.clientY,
            touchFree: !1
          }
        },
        y = e => {
          e.preventDefault();
          const t = e.touches[0];
          a.value.current = t.clientY
        },
        w = e => {
          e.preventDefault(), m.value < .3 && (o.value = !1), a.value = {
            start: void 0,
            current: void 0,
            touchFree: !0
          }
        };
      return b().initWatcher({
        key: "memepad-jetton-shortname-image-modal",
        watchFn: () => o.value,
        callback: () => o.value = !1
      }), (e, t) => {
        const r = C,
          F = $;
        return p(), v(B, null, [s("div", j({
          class: "memepad-jetton-header-image",
          style: {
            "--move-percent": Math.min(n(d) * 100, 100),
            "--image-size": `${e.size}px`
          }
        }, e.$attrs, {
          class: {
            "is-modal-opened": n(o)
          }
        }), [s("div", E, [i(r, {
          src: n(f)(e.jetton.iconFileKey),
          size: e.size,
          onClick: t[0] || (t[0] = k => o.value = !0)
        }, null, 8, ["src", "size"])])], 16), n(o) ? (p(), v("div", {
          key: 0,
          class: M(["memepad-jetton-header-modal-image", {
            "touch-free": n(a).touchFree
          }]),
          style: h({
            "--opacity": n(m)
          })
        }, [s("div", H, [s("button", {
          type: "button",
          class: "close-btn reset",
          onClick: t[1] || (t[1] = k => o.value = !1)
        }, [i(F, {
          name: "close-md",
          class: "icon"
        })]), s("div", {
          ref_key: "wrapperEl",
          ref: _,
          class: "wrapper",
          style: h({
            "--diff": n(u)
          }),
          onTouchstart: g,
          onTouchmove: y,
          onTouchend: w
        }, [i(r, {
          src: n(f)(e.jetton.iconFileKey),
          "full-width": ""
        }, null, 8, ["src"])], 36)])], 6)) : T("", !0)], 64)
      }
    }
  }),
  Y = D(I, [
    ["__scopeId", "data-v-b0848317"]
  ]);
export {
  Y as _
};