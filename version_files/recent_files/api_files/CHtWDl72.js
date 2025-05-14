import {
  d as u,
  j as n,
  ah as m,
  aK as s,
  o,
  N as c,
  D as f,
  a as h,
  t as d,
  e as l,
  G as k,
  aL as C,
  _ as N,
  aM as P,
  f as b
} from "./CeLf80nu.js";
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
          default: f(() => [h("div", v, d(t.label), 1), l(a) || t.clickCallback ? (o(), c(p, {
            key: 0,
            name: "chevron-right",
            class: "icon"
          })) : k("", !0)]),
          _: 1
        }, 16)
      }
    }
  }),
  K = b(g, [
    ["__scopeId", "data-v-e8a427ed"]
  ]);
export {
  K as _
};