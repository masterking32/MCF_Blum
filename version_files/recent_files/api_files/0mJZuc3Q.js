import {
  _ as i
} from "./DosryNA2.js";
import {
  d as _,
  j as l,
  cA as p,
  o as n,
  G as m,
  H as u,
  e,
  c as s,
  ak as b,
  t as T,
  D as d,
  cO as E,
  f as R
} from "./DrQ2shF8.js";
const k = ["src"],
  C = {
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
        o = l(() => p(r.rank));
      return (t, A) => {
        const c = i;
        return n(), m(c, {
          tribe: a.tribe,
          source: ("ANALYTICS_TRIBE_CREATE_SOURCE" in t ? t.ANALYTICS_TRIBE_CREATE_SOURCE : e(E)).TOP_LIST,
          class: "pages-tribe-top-item",
          "no-open": a.noOpen
        }, {
          default: u(() => [e(o).icon ? (n(), s("img", {
            key: 0,
            src: ("imgResolver" in t ? t.imgResolver : e(b))(e(o).icon),
            class: "rank-icon"
          }, null, 8, k)) : e(o).label ? (n(), s("div", C, T(e(o).label), 1)) : d("", !0)]),
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