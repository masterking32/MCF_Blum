import {
  d as u,
  j as n,
  ab as m,
  aX as o,
  o as s,
  M as c,
  D as f,
  a as d,
  t as h,
  e as l,
  E as k,
  ao as C,
  _ as N,
  aY as P,
  f as b
} from "./C6ycOBuK.js";
const v = {
    class: "label"
  },
  g = u({
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
          type: o.LINK,
          link: a.value
        } : {
          type: o.DIV,
          onClick: e.clickCallback
        });
      return (t, y) => {
        const p = N,
          _ = P;
        return s(), c(_, C(l(i), {
          class: "kit-section-heading"
        }), {
          default: f(() => [d("div", v, h(t.label), 1), l(a) || t.clickCallback ? (s(), c(p, {
            key: 0,
            name: "chevron-right",
            class: "icon"
          })) : k("", !0)]),
          _: 1
        }, 16)
      }
    }
  }),
  x = b(g, [
    ["__scopeId", "data-v-e8a427ed"]
  ]);
export {
  x as _
};