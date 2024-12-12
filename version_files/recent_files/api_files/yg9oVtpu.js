import {
  d as c,
  F as p,
  a,
  c as n,
  W as u,
  X as d,
  k as l,
  x as _,
  t as m,
  ak as x,
  e as h,
  j as f
} from "./DY2exbLM.js";
const v = {
    class: "kit-counter-animation"
  },
  k = c({
    __name: "CounterAnimation",
    props: {
      value: {
        type: String,
        required: !0
      }
    },
    setup(o) {
      const s = o,
        i = p(() => {
          let t = s.value.indexOf(".");
          return t === -1 && (t = s.value.length), s.value.split("").map((r, e) => ({
            char: r,
            idx: e - t
          }))
        });
      return (t, r) => (a(), n("div", v, [(a(!0), n(u, null, d(h(i), e => (a(), n("div", {
        key: e.idx,
        class: "el-char-wrapper"
      }, [l(x, {
        name: "change-item-transition"
      }, {
        default: _(() => [(a(), n("div", {
          key: e.char,
          class: "el-char"
        }, m(e.char), 1))]),
        _: 2
      }, 1024)]))), 128))]))
    }
  }),
  y = f(k, [
    ["__scopeId", "data-v-191230a7"]
  ]);
export {
  y as _
};