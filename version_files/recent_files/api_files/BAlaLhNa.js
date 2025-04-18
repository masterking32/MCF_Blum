import {
  _ as i
} from "./FytguIjg.js";
import {
  d as _,
  j as l,
  o as a,
  N as m,
  D as p,
  e,
  c as s,
  X as u,
  t as d,
  G as b,
  dk as T,
  f as E
} from "./CkAWtTNJ.js";
import {
  g as R
} from "./rz0894NC.js";
const f = ["src"],
  k = {
    key: 1,
    class: "rank-label"
  },
  C = _({
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
      return (t, I) => {
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
          }, null, 8, f)) : e(o).label ? (a(), s("div", k, d(e(o).label), 1)) : b("", !0)]),
          _: 1
        }, 8, ["tribe", "source", "no-open"])
      }
    }
  }),
  S = E(C, [
    ["__scopeId", "data-v-28528445"]
  ]);
export {
  S as _
};