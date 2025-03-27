import {
  _ as i
} from "./DPiUs8-G.js";
import {
  d as _,
  j as l,
  cY as m,
  o as n,
  G as p,
  H as u,
  e,
  c as s,
  am as b,
  t as d,
  D as T,
  d9 as E,
  f as R
} from "./CCUb6gF6.js";
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
    setup(a) {
      const r = a,
        o = l(() => m(r.rank));
      return (t, I) => {
        const c = i;
        return n(), p(c, {
          tribe: a.tribe,
          source: ("ANALYTICS_TRIBE_CREATE_SOURCE" in t ? t.ANALYTICS_TRIBE_CREATE_SOURCE : e(E)).TOP_LIST,
          class: "pages-tribe-top-item",
          "no-open": a.noOpen
        }, {
          default: u(() => [e(o).icon ? (n(), s("img", {
            key: 0,
            src: ("imgResolver" in t ? t.imgResolver : e(b))(e(o).icon),
            class: "rank-icon"
          }, null, 8, C)) : e(o).label ? (n(), s("div", f, d(e(o).label), 1)) : T("", !0)]),
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