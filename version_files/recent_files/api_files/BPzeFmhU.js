import {
  _
} from "./DUJ-kpAS.js";
import {
  d as p,
  r as m,
  F as u,
  q as v,
  av as f,
  aR as d,
  o as x,
  a as I,
  m as b,
  e as y,
  j as q
} from "./7Syd4Ho8.js";
const B = p({
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
        l = u(() => v(a.value, c.accuracy));
      let o;
      return f(() => c.value, s => {
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
  j = q(B, [
    ["__scopeId", "data-v-c2615662"]
  ]);
export {
  j as _
};