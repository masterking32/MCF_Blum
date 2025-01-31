import {
  d as v,
  K as i,
  a8 as f,
  T as _,
  o as m,
  c as p,
  bl as g,
  a as k,
  f as x,
  j as l
} from "./BZtpgRro.js";
const h = {
    class: "kit-scroll-observer"
  },
  T = v({
    __name: "KitScrollObserver",
    emits: ["end"],
    setup(u, {
      emit: e
    }) {
      const t = e,
        s = i(),
        r = new IntersectionObserver(o => o[0].isIntersecting && t("end"), {
          threshold: 1
        });
      return f(() => s.value && r.observe(s.value)), _(() => r.disconnect()), (o, a) => (m(), p("div", h, [g(o.$slots, "default", {}, void 0, !0), k("div", {
        ref_key: "endRef",
        ref: s,
        class: "end"
      }, null, 512)]))
    }
  }),
  P = x(T, [
    ["__scopeId", "data-v-a9019fbd"]
  ]),
  I = u => {
    const e = i(),
      t = i(!1),
      s = i(!1),
      r = async () => {
        var c, d;
        if (t.value || s.value) return;
        t.value = !0;
        const a = (d = (c = e.value) == null ? void 0 : c[e.value.length - 1]) == null ? void 0 : d.nextPageToken,
          n = await u(a);
        if (e.value || (e.value = []), e.value.push({
            nextPageToken: n.nextPageToken,
            items: n.items
          }), n.items.length === 0 || n.nextPageToken === "0" || n.nextPageToken === "" || a === n.nextPageToken) {
          s.value = !0, t.value = !1;
          return
        }
        t.value = !1
      }, o = l(() => {
        var a;
        return (a = e.value) == null ? void 0 : a.flatMap(n => n.items)
      });
    return {
      isInitialized: l(() => e.value !== void 0),
      isLoading: l(() => t.value),
      isEmpty: l(() => {
        var a;
        return ((a = o.value) == null ? void 0 : a.length) === 0
      }),
      data: l(() => o.value ?? []),
      load: r
    }
  };
export {
  P as _, I as u
};