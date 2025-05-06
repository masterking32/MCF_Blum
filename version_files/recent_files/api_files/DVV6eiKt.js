import {
  _ as i
} from "./CusTQ4rR.js";
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
  dj as T,
  f as E
} from "./BtsWxTOZ.js";
import {
  g as R
} from "./BrqpwyBw.js";
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