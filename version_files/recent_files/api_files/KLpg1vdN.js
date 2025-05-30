import {
  d as l,
  j as u,
  aj as c,
  o as t,
  c as r,
  a as i,
  aq as n,
  aV as d,
  e as p,
  E as f,
  F as m,
  f as b
} from "./D0ZwcU5P.js";
const _ = l({
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
        o = u(() => {
          const e = c().hasLayoutTabs.value && !s.ignoreTabs;
          return {
            "no-background": s.noBackground,
            "has-layout-tabs": e,
            "no-layout-tabs": !e
          }
        });
      return (e, k) => (t(), r(m, null, [i("div", d({
        class: ["kit-fixed-wrapper", p(o)]
      }, e.$attrs), [n(e.$slots, "default", {}, void 0, !0)], 16), a.hideSpace ? f("", !0) : (t(), r("div", d({
        key: 0,
        class: ["kit-fixed-wrapper-space", p(o)]
      }, e.$attrs), [n(e.$slots, "default", {}, void 0, !0)], 16))], 64))
    }
  }),
  B = b(_, [
    ["__scopeId", "data-v-8229d5bb"]
  ]);
export {
  B as _
};