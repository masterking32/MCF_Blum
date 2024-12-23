import {
  _
} from "./BHiOm1rY.js";
import {
  d as p,
  G as m,
  j as u,
  Q as f,
  am as v,
  aP as d,
  T as x,
  o as I,
  J as b,
  e as y,
  f as B
} from "./CEkQG6G2.js";
const C = p({
    __name: "CounterLongAnimation",
    props: {
      value: {
        type: Object,
        required: !0
      },
      accuracy: {
        type: Number,
        default: 0
      }
    },
    setup(i) {
      const c = i,
        a = m(c.value),
        l = u(() => f(a.value, c.accuracy));
      let o;
      return v(() => c.value, s => {
        o && clearInterval(o);
        const n = s.sub(a.value).div(5).abs(),
          r = (e, t) => e.lt(t) ? e.plus(n).lte(t) ? e.plus(n) : t : e.gt(t) ? e.minus(n).gte(t) ? e.minus(n) : t : e;
        o = d(() => {
          a.value = r(a.value, s), a.value.equals(s) && clearInterval(o)
        }, 100)
      }), x(() => {
        o && clearInterval(o)
      }), (s, n) => {
        const r = _;
        return I(), b(r, {
          value: y(l)
        }, null, 8, ["value"])
      }
    }
  }),
  k = B(C, [
    ["__scopeId", "data-v-c2615662"]
  ]);
export {
  k as _
};