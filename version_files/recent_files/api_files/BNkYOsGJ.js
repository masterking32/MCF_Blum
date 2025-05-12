import {
  d,
  y as u,
  cf as f,
  ac as _,
  a3 as m,
  o as p,
  c as g,
  ag as k,
  a as x,
  f as T,
  j as r
} from "./EtIub6tT.js";
const b = {
    class: "kit-scroll-observer"
  },
  h = d({
    __name: "KitScrollObserver",
    emits: ["end"],
    setup(i, {
      emit: a
    }) {
      const t = a,
        e = u(),
        o = new IntersectionObserver(l => {
          l[0].isIntersecting && (e.value && o.unobserve(e.value), t("end"), f(() => e.value && o.observe(e.value)))
        }, {
          threshold: 1
        });
      return _(() => e.value && o.observe(e.value)), m(() => o.disconnect()), (l, n) => (p(), g("div", b, [k(l.$slots, "default", {}, void 0, !0), x("div", {
        ref_key: "endRef",
        ref: e,
        class: "end"
      }, null, 512)]))
    }
  }),
  y = T(h, [
    ["__scopeId", "data-v-40698fd4"]
  ]),
  I = i => {
    const a = u(),
      t = u(!1),
      e = u(!1),
      o = async () => {
        var c, v;
        if (t.value || e.value) return;
        t.value = !0;
        const n = (v = (c = a.value) == null ? void 0 : c[a.value.length - 1]) == null ? void 0 : v.nextPageToken,
          s = await i(n);
        if (a.value || (a.value = []), a.value.push({
            nextPageToken: s.nextPageToken,
            items: s.items
          }), s.nextPageToken === "0" || s.nextPageToken === "" || n === s.nextPageToken) {
          e.value = !0, t.value = !1;
          return
        }
        t.value = !1
      }, l = r(() => {
        var n;
        return (n = a.value) == null ? void 0 : n.flatMap(s => s.items)
      });
    return {
      isInitialized: r(() => a.value !== void 0),
      isLoading: r(() => t.value),
      isEmpty: r(() => {
        var n;
        return ((n = l.value) == null ? void 0 : n.length) === 0
      }),
      data: r(() => l.value ?? []),
      load: o
    }
  };
export {
  y as _, I as u
};