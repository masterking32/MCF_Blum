import {
  d as u,
  F as d,
  u as p,
  a as t,
  c as n,
  b as i,
  aC as r,
  n as c,
  e as l,
  g as f,
  W as m,
  j as _
} from "./BPAM48h1.js";
const b = u({
    __name: "KitFixedWrapper",
    props: {
      noBackground: {
        type: Boolean,
        default: !1
      },
      ignoreTabs: {
        type: Boolean,
        default: !1
      },
      hideSpace: {
        type: Boolean,
        default: !1
      }
    },
    setup(a) {
      const s = a,
        o = d(() => {
          const e = p().hasLayoutTabs.value && !s.ignoreTabs;
          return {
            "no-background": s.noBackground,
            "has-layout-tabs": e,
            "no-layout-tabs": !e
          }
        });
      return (e, k) => (t(), n(m, null, [i("div", {
        class: c(["kit-fixed-wrapper", l(o)])
      }, [r(e.$slots, "default", {}, void 0, !0)], 2), a.hideSpace ? f("", !0) : (t(), n("div", {
        key: 0,
        class: c(["kit-fixed-wrapper-space", l(o)])
      }, [r(e.$slots, "default", {}, void 0, !0)], 2))], 64))
    }
  }),
  B = _(b, [
    ["__scopeId", "data-v-b7b82c32"]
  ]);
export {
  B as _
};