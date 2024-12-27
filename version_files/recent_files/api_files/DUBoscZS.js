import {
  _ as i
} from "./Cp651cne.js";
import {
  d as _,
  j as l,
  cA as p,
  o as n,
  G as m,
  I as u,
  e,
  c as s,
  ao as b,
  t as T,
  C as d,
  cO as C,
  f as E
} from "./DRqvt5pl.js";
const R = ["src"],
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
        o = l(() => p(r.rank));
      return (t, I) => {
        const c = i;
        return n(), m(c, {
          tribe: a.tribe,
          source: ("ANALYTICS_TRIBE_CREATE_SOURCE" in t ? t.ANALYTICS_TRIBE_CREATE_SOURCE : e(C)).TOP_LIST,
          class: "pages-tribe-top-item",
          "no-open": a.noOpen
        }, {
          default: u(() => [e(o).icon ? (n(), s("img", {
            key: 0,
            src: ("imgResolver" in t ? t.imgResolver : e(b))(e(o).icon),
            class: "rank-icon"
          }, null, 8, R)) : e(o).label ? (n(), s("div", f, T(e(o).label), 1)) : d("", !0)]),
          _: 1
        }, 8, ["tribe", "source", "no-open"])
      }
    }
  }),
  B = E(k, [
    ["__scopeId", "data-v-3cca07ee"]
  ]);
export {
  B as _
};