import {
  d,
  j as p,
  ab as u,
  o as t,
  c as n,
  a as i,
  ak as r,
  n as l,
  e as c,
  G as f,
  F as m,
  f as _
} from "./DdW0p5VG.js";
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
      return (e, b) => (t(), n(m, null, [i("div", {
        class: l(["kit-fixed-wrapper", c(s)])
      }, [r(e.$slots, "default", {}, void 0, !0)], 2), a.hideSpace ? f("", !0) : (t(), n("div", {
        key: 0,
        class: l(["kit-fixed-wrapper-space", c(s)])
      }, [r(e.$slots, "default", {}, void 0, !0)], 2))], 64))
    }
  }),
  B = _(k, [
    ["__scopeId", "data-v-5e813a64"]
  ]);
export {
  B as _
};