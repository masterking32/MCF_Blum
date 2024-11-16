import {
  _ as i
} from "./DR8K_r7g.js";
import {
  d as _,
  F as l,
  cL as m,
  a as n,
  m as p,
  x as u,
  e,
  c as s,
  bJ as b,
  t as T,
  g as d,
  cY as E,
  j as R
} from "./TkfSaITf.js";
const C = ["src"],
  k = {
    key: 1,
    class: "rank-label"
  },
  f = _({
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
          }, null, 8, C)) : e(o).label ? (n(), s("div", k, T(e(o).label), 1)) : d("", !0)]),
          _: 1
        }, 8, ["tribe", "source", "no-open"])
      }
    }
  }),
  B = R(f, [
    ["__scopeId", "data-v-3cca07ee"]
  ]);
export {
  B as _
};