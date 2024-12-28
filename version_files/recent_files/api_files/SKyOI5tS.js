import {
  d as u,
  j as n,
  ae as m,
  aH as s,
  o,
  G as c,
  I as f,
  a as d,
  t as h,
  e as l,
  C as k,
  ag as C,
  _ as N,
  aI as P,
  f as b
} from "./BrLCGJDp.js";
const g = {
    class: "label"
  },
  v = u({
    __name: "SectionHeading",
    props: {
      label: {},
      pathName: {},
      clickCallback: {
        type: Function
      },
      fullPath: {}
    },
    setup(r) {
      const e = r,
        a = n(() => {
          if (e.fullPath) return e.fullPath;
          if (e.pathName) return m().resolve({
            name: e.pathName
          }).fullPath
        }),
        i = n(() => a.value ? {
          type: s.LINK,
          link: a.value
        } : {
          type: s.DIV,
          onClick: e.clickCallback
        });
      return (t, I) => {
        const p = N,
          _ = P;
        return o(), c(_, C(l(i), {
          class: "kit-section-heading"
        }), {
          default: f(() => [d("div", g, h(t.label), 1), l(a) || t.clickCallback ? (o(), c(p, {
            key: 0,
            name: "chevron-right",
            class: "icon"
          })) : k("", !0)]),
          _: 1
        }, 16)
      }
    }
  }),
  x = b(v, [
    ["__scopeId", "data-v-e8a427ed"]
  ]);
export {
  x as _
};