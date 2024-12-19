import {
  d as c,
  j as p,
  o as a,
  c as n,
  F as u,
  q as d,
  b as l,
  U as _,
  t as m,
  a9 as f,
  e as h,
  f as x
} from "./DQp58DI6.js";
const v = {
    class: "kit-counter-animation"
  },
  g = c({
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
      }, [l(f, {
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
  y = x(g, [
    ["__scopeId", "data-v-191230a7"]
  ]);
export {
  y as _
};