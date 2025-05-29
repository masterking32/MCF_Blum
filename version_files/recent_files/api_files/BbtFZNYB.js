import {
  f as I,
  o,
  y as u,
  e as t,
  z as m,
  a8 as g,
  d as h,
  aX as v,
  I as b,
  af as A,
  aY as N,
  J as B,
  an as E,
  aC as _,
  a5 as P,
  c as l,
  b as p,
  aZ as R,
  P as C
} from "./YXPW7IJg.js";
import {
  _ as S
} from "./G_1HF3wb.js";
import {
  u as w
} from "./CBfN3nev.js";
import {
  c as x
} from "./CjrCyY9h.js";
import "./D125EveM.js";
import "./YJ664n06.js";
const M = {};

function T(e, s) {
  const n = S;
  return o(), u(n, {
    title: ("t" in e ? e.t : t(m))("errors.location.title"),
    subtitle: ("t" in e ? e.t : t(m))("errors.location.subtitle"),
    "icon-size": 64,
    icon: ("imgResolver" in e ? e.imgResolver : t(g))("emoji/EarthAmericas"),
    "with-space": ""
  }, null, 8, ["title", "subtitle", "icon"])
}
const U = I(M, [
    ["render", T]
  ]),
  $ = {
    key: 1,
    class: "page"
  },
  z = {
    key: 2,
    class: "page"
  },
  J = h({
    __name: "memepad",
    setup(e) {
      const s = v(),
        {
          _flow: {
            init: n,
            destroy: a
          }
        } = w(),
        i = b(!1);
      n().then(() => i.value = !0), A(() => {
        a()
      });
      const c = N().memepad.isBlocked;
      B(c, r => r && a(), {
        immediate: !0
      });
      const d = E("memepadFrom", _) ?? _.NA;
      return x(), P().memepad.memepadInitiation({
        source: d
      }), (r, L) => {
        const f = R,
          y = U,
          k = C;
        return t(i) && t(s).availableInfo.value ? (o(), u(f, {
          key: 0
        })) : t(c) ? (o(), l("div", $, [p(y)])) : (o(), l("div", z, [p(k)]))
      }
    }
  });
export {
  J as
  default
};