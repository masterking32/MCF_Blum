import {
  d,
  j as p,
  Y as u,
  o as t,
  c as n,
  a as i,
  bl as r,
  n as l,
  e as c,
  D as f,
  F as m,
  f as _
} from "./C5Di_0SZ.js";
const b = d({
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
      return (e, k) => (t(), n(m, null, [i("div", {
        class: l(["kit-fixed-wrapper", c(s)])
      }, [r(e.$slots, "default", {}, void 0, !0)], 2), a.hideSpace ? f("", !0) : (t(), n("div", {
        key: 0,
        class: l(["kit-fixed-wrapper-space", c(s)])
      }, [r(e.$slots, "default", {}, void 0, !0)], 2))], 64))
    }
  }),
  B = _(b, [
    ["__scopeId", "data-v-5e813a64"]
  ]);
export {
  B as _
};