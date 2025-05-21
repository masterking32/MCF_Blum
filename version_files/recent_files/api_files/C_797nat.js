import {
  d as u,
  j as n,
  ai as m,
  aM as s,
  o,
  N as c,
  D as f,
  a as d,
  t as h,
  e as l,
  G as k,
  aN as N,
  _ as C,
  aO as P,
  f as b
} from "./BN1oUHf5.js";
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
        const p = C,
          _ = P;
        return o(), c(_, N(l(i), {
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