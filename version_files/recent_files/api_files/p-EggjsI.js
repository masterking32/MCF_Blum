import {
  d,
  j as p,
  a5 as u,
  o as t,
  c as n,
  a as i,
  ac as r,
  n as c,
  e as l,
  E as f,
  F as m,
  f as _
} from "./DAWpDGzr.js";
const k = d({
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
      const o = a,
        s = p(() => {
          const e = u().hasLayoutTabs.value && !o.ignoreTabs;
          return {
            "no-background": o.noBackground,
            "has-layout-tabs": e,
            "no-layout-tabs": !e
          }
        });
      return (e, y) => (t(), n(m, null, [i("div", {
        class: c(["kit-fixed-wrapper", l(s)])
      }, [r(e.$slots, "default", {}, void 0, !0)], 2), a.hideSpace ? f("", !0) : (t(), n("div", {
        key: 0,
        class: c(["kit-fixed-wrapper-space", l(s)])
      }, [r(e.$slots, "default", {}, void 0, !0)], 2))], 64))
    }
  }),
  b = _(k, [
    ["__scopeId", "data-v-5e813a64"]
  ]);
export {
  b as _
};