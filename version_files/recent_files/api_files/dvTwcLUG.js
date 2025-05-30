import {
  _ as i
} from "./Bebxa3Md.js";
import {
  d as _,
  j as l,
  o as a,
  z as m,
  D as p,
  e,
  c as s,
  a8 as u,
  t as d,
  G as b,
  dg as T,
  f as E
} from "./Q7ZkUOCs.js";
import {
  g as R
} from "./fQL3VVTV.js";
const f = ["src"],
  C = {
    key: 1,
    class: "rank-label"
  },
  k = _({
    __name: "TribeTopItem",
    props: {
      tribe: {
        type: Object,
        required: !0
      },
      rank: {
        type: Number,
        default: void 0
      },
      noOpen: {
        type: Boolean,
        default: !1
      }
    },
    setup(n) {
      const r = n,
        o = l(() => R(r.rank));
      return (t, g) => {
        const c = i;
        return a(), m(c, {
          tribe: n.tribe,
          source: ("ANALYTICS_TRIBE_CREATE_SOURCE" in t ? t.ANALYTICS_TRIBE_CREATE_SOURCE : e(T)).TOP_LIST,
          class: "pages-tribe-top-item",
          "no-open": n.noOpen
        }, {
          default: p(() => [e(o).icon ? (a(), s("img", {
            key: 0,
            src: ("imgResolver" in t ? t.imgResolver : e(u))(e(o).icon),
            class: "rank-icon"
          }, null, 8, f)) : e(o).label ? (a(), s("div", C, d(e(o).label), 1)) : b("", !0)]),
          _: 1
        }, 8, ["tribe", "source", "no-open"])
      }
    }
  }),
  S = E(k, [
    ["__scopeId", "data-v-28528445"]
  ]);
export {
  S as _
};