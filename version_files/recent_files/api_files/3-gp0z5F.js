import {
  _ as T
} from "./Dxw4Lx_v.js";
import {
  _ as k
} from "./97GM9hpH.js";
import {
  d as u,
  o as t,
  c as a,
  a as $,
  t as f,
  e as i,
  z as h,
  C as g,
  f as _,
  G as l,
  I,
  b as y,
  _ as j,
  L as x,
  F as b,
  p as B,
  q as R,
  aF as P,
  cH as V,
  bK as q,
  R as N,
  ae as S
} from "./DRqvt5pl.js";
import {
  _ as C
} from "./Cp651cne.js";
import {
  _ as K
} from "./CMncxNGJ.js";
import "./2vZNcphP.js";
import "./DEjUTUb_.js";
import "./BpbNoRbL.js";
import "./DScZOzZe.js";
const L = {
    class: "pages-tribe-search-no-results"
  },
  F = {
    class: "title"
  },
  w = {
    key: 0,
    class: "subtitle"
  },
  A = u({
    __name: "TribeSearchNoResults",
    props: {
      noSubtitle: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      return (r, s) => (t(), a("div", L, [$("div", F, f(("t" in r ? r.t : i(h))("tribes.search.no_results.title")), 1), e.noSubtitle ? g("", !0) : (t(), a("div", w, f(("t" in r ? r.t : i(h))("tribes.search.no_results.subtitle")), 1))]))
    }
  }),
  E = _(A, [
    ["__scopeId", "data-v-7b7a9484"]
  ]),
  O = u({
    __name: "TribeSearchItem",
    props: {
      tribe: {
        type: Object,
        required: !0
      },
      source: {
        type: String,
        required: !0
      }
    },
    setup(e) {
      return (r, s) => {
        const o = j,
          n = C;
        return t(), l(n, {
          tribe: e.tribe,
          source: e.source,
          class: "pages-tribe-search-item"
        }, {
          default: I(() => [y(o, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["tribe", "source"])
      }
    }
  }),
  U = _(O, [
    ["__scopeId", "data-v-3c0fb88f"]
  ]),
  z = {
    class: "pages-tribe-search"
  },
  D = {
    key: 1,
    class: "list"
  },
  G = u({
    __name: "TribeSearch",
    props: {
      list: {
        type: Array,
        default: void 0
      },
      isSearching: {
        type: Boolean,
        required: !0
      },
      initialSearch: {
        type: String,
        default: void 0
      },
      joinTribeSource: {
        type: String,
        required: !0
      }
    },
    emits: ["search"],
    setup(e) {
      const s = x(e.initialSearch ?? "");
      return (o, n) => {
        const m = T,
          p = k,
          d = E,
          v = U;
        return t(), a("div", z, [!e.list && !e.isSearching ? (t(), l(m, {
          key: 0
        })) : (t(), a(b, {
          key: 1
        }, [y(p, {
          modelValue: i(s),
          "onUpdate:modelValue": n[0] || (n[0] = c => B(s) ? s.value = c : null),
          title: ("t" in o ? o.t : i(h))("tribes.search.title"),
          "is-loading": e.isSearching,
          onApply: n[1] || (n[1] = c => o.$emit("search", c))
        }, null, 8, ["modelValue", "title", "is-loading"]), e.list ? (t(), a(b, {
          key: 0
        }, [e.list.length === 0 ? (t(), l(d, {
          key: 0,
          class: "no-results"
        })) : (t(), a("div", D, [(t(!0), a(b, null, R(e.list, c => (t(), l(v, {
          key: c.id,
          tribe: c,
          source: e.joinTribeSource
        }, null, 8, ["tribe", "source"]))), 128))]))], 64)) : g("", !0)], 64))])
      }
    }
  }),
  H = _(G, [
    ["__scopeId", "data-v-161e69bb"]
  ]),
  M = {
    class: "tribe-join-list page"
  },
  W = u({
    __name: "list",
    setup(e) {
      const r = P(),
        s = V();
      return q(() => r.tribeOrUndefined.value && S().replace({
        name: "tribe-slug"
      })), N().meta.back = () => S().push({
        name: "tribe-join"
      }), (o, n) => {
        const m = H,
          p = K;
        return t(), a("div", M, [i(r).myTribeRes.value ? (t(), l(m, {
          key: 0,
          list: i(s).list.value,
          "initial-search": i(s).searchLine.value,
          "is-searching": i(s).isSearching.value,
          "join-tribe-source": i(s).joinTribeSource.value,
          onSearch: n[0] || (n[0] = d => i(s).search(d))
        }, null, 8, ["list", "initial-search", "is-searching", "join-tribe-source"])) : (t(), l(p, {
          key: 1
        }))])
      }
    }
  }),
  re = _(W, [
    ["__scopeId", "data-v-0b33d7eb"]
  ]);
export {
  re as
  default
};