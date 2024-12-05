import {
  d as _,
  F as m,
  a as i,
  c as l,
  W as f,
  X as x,
  k as h,
  x as k,
  t as y,
  ak as I,
  e as v,
  j as d,
  r as C,
  q as b,
  av as q,
  aR as B,
  o as g,
  m as A
} from "./B8dH5Zvz.js";
const L = {
    class: "kit-counter-animation"
  },
  j = _({
    __name: "CounterAnimation",
    props: {
      value: {
        type: String,
        required: !0
      }
    },
    setup(u) {
      const a = u,
        n = m(() => {
          let o = a.value.indexOf(".");
          return o === -1 && (o = a.value.length), a.value.split("").map((t, e) => ({
            char: t,
            idx: e - o
          }))
        });
      return (o, t) => (i(), l("div", L, [(i(!0), l(f, null, x(v(n), e => (i(), l("div", {
        key: e.idx,
        class: "el-char-wrapper"
      }, [h(I, {
        name: "change-item-transition"
      }, {
        default: k(() => [(i(), l("div", {
          key: e.char,
          class: "el-char"
        }, y(e.char), 1))]),
        _: 2
      }, 1024)]))), 128))]))
    }
  }),
  D = d(j, [
    ["__scopeId", "data-v-191230a7"]
  ]),
  F = _({
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
    setup(u) {
      const a = u,
        n = C(a.value),
        o = m(() => b(n.value, a.accuracy));
      let t;
      return q(() => a.value, e => {
        t && clearInterval(t);
        const c = e.sub(n.value).div(5).abs(),
          p = (s, r) => s.lt(r) ? s.plus(c).lte(r) ? s.plus(c) : r : s.gt(r) ? s.minus(c).gte(r) ? s.minus(c) : r : s;
        t = B(() => {
          n.value = p(n.value, e), n.value.equals(e) && clearInterval(t)
        }, 100)
      }), g(() => {
        t && clearInterval(t)
      }), (e, c) => {
        const p = D;
        return i(), A(p, {
          value: v(o)
        }, null, 8, ["value"])
      }
    }
  }),
  O = d(F, [
    ["__scopeId", "data-v-c2615662"]
  ]);
export {
  O as _, D as a
};