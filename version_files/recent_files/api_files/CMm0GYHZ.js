import {
  _ as i
} from "./C-K803kB.js";
import {
  d as _,
  j as l,
  cA as p,
  o as a,
  G as m,
  H as u,
  e,
  c as s,
  an as b,
  t as T,
  D as d,
  cO as E,
  f as R
} from "./BKd9vpCm.js";
const C = ["src"],
  f = {
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
        o = l(() => p(r.rank));
      return (t, A) => {
        const c = i;
        return a(), m(c, {
          tribe: n.tribe,
          source: ("ANALYTICS_TRIBE_CREATE_SOURCE" in t ? t.ANALYTICS_TRIBE_CREATE_SOURCE : e(E)).TOP_LIST,
          class: "pages-tribe-top-item",
          "no-open": n.noOpen
        }, {
          default: u(() => [e(o).icon ? (a(), s("img", {
            key: 0,
            src: ("imgResolver" in t ? t.imgResolver : e(b))(e(o).icon),
            class: "rank-icon"
          }, null, 8, C)) : e(o).label ? (a(), s("div", f, T(e(o).label), 1)) : d("", !0)]),
          _: 1
        }, 8, ["tribe", "source", "no-open"])
      }
    }
  }),
  B = R(k, [
    ["__scopeId", "data-v-3cca07ee"]
  ]);
export {
  B as _
};