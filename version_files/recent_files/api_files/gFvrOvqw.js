import {
  d as u,
  j as n,
  aa as m,
  aE as s,
  o,
  G as c,
  H as f,
  a as d,
  t as h,
  e as l,
  D as k,
  ac as C,
  _ as N,
  aF as P,
  f as b
} from "./DrQ2shF8.js";
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
          type: s.LINK,
          link: a.value
        } : {
          type: s.DIV,
          onClick: e.clickCallback
        });
      return (t, y) => {
        const p = N,
          _ = P;
        return o(), c(_, C(l(i), {
          class: "kit-section-heading"
        }), {
          default: f(() => [d("div", v, h(t.label), 1), l(a) || t.clickCallback ? (o(), c(p, {
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