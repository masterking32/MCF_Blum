import {
  _ as i
} from "./CSwDaNtG.js";
import {
  d as _,
  j as l,
  o as a,
  M as m,
  D as p,
  e,
  c as s,
  W as u,
  t as d,
  E as b,
  dj as E,
  f as T
} from "./C6ycOBuK.js";
import {
  g as R
} from "./yAtlAti0.js";
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
      return (t, I) => {
        const c = i;
        return a(), m(c, {
          tribe: n.tribe,
          source: ("ANALYTICS_TRIBE_CREATE_SOURCE" in t ? t.ANALYTICS_TRIBE_CREATE_SOURCE : e(E)).TOP_LIST,
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
  S = T(k, [
    ["__scopeId", "data-v-28528445"]
  ]);
export {
  S as _
};