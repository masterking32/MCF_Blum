import {
  d,
  j as p,
  y as u,
  o as t,
  c as n,
  a as i,
  az as r,
  n as c,
  e as l,
  C as f,
  F as m,
  f as _
} from "./DQp58DI6.js";
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
      return (e, y) => (t(), n(m, null, [i("div", {
        class: c(["kit-fixed-wrapper", l(s)])
      }, [r(e.$slots, "default", {}, void 0, !0)], 2), a.hideSpace ? f("", !0) : (t(), n("div", {
        key: 0,
        class: c(["kit-fixed-wrapper-space", l(s)])
      }, [r(e.$slots, "default", {}, void 0, !0)], 2))], 64))
    }
  }),
  B = _(b, [
    ["__scopeId", "data-v-b7b82c32"]
  ]);
export {
  B as _
};