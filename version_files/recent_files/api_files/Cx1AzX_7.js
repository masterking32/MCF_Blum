import {
  _ as T
} from "./QdFRFfhU.js";
import {
  _ as k
} from "./D_RVv4fM.js";
import {
  d as u,
  o as t,
  c as a,
  a as $,
  t as f,
  e as i,
  z as h,
  D as g,
  f as _,
  G as l,
  I,
  b as y,
  _ as j,
  L as x,
  F as b,
  p as B,
  q as R,
  aD as P,
  cF as V,
  bI as q,
  R as N,
  ac as S
} from "./CZHgEWRg.js";
import {
  _ as L
} from "./DURNgwaw.js";
import {
  _ as C
} from "./DEDnj9sq.js";
import "./DbRNdSO4.js";
import "./_hg1PMzr.js";
import "./CQjDcIBW.js";
import "./BCiLhOz2.js";
const D = {
    class: "pages-tribe-search-no-results"
  },
  F = {
    class: "title"
  },
  K = {
    key: 0,
    class: "subtitle"
  },
  w = u({
    __name: "TribeSearchNoResults",
    props: {
      noSubtitle: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      return (r, s) => (t(), a("div", D, [$("div", F, f(("t" in r ? r.t : i(h))("tribes.search.no_results.title")), 1), e.noSubtitle ? g("", !0) : (t(), a("div", K, f(("t" in r ? r.t : i(h))("tribes.search.no_results.subtitle")), 1))]))
    }
  }),
  A = _(w, [
    ["__scopeId", "data-v-7b7a9484"]
  ]),
  E = u({
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
          n = L;
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
  O = _(E, [
    ["__scopeId", "data-v-3c0fb88f"]
  ]),
  U = {
    class: "pages-tribe-search"
  },
  z = {
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
          d = A,
          v = O;
        return t(), a("div", U, [!e.list && !e.isSearching ? (t(), l(m, {
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
        })) : (t(), a("div", z, [(t(!0), a(b, null, R(e.list, c => (t(), l(v, {
          key: c.id,
          tribe: c,
          source: e.joinTribeSource
        }, null, 8, ["tribe", "source"]))), 128))]))], 64)) : g("", !0)], 64))])
      }
    }
  }),
  M = _(G, [
    ["__scopeId", "data-v-161e69bb"]
  ]),
  W = {
    class: "tribe-join-list page"
  },
  H = u({
    __name: "list",
    setup(e) {
      const r = P(),
        s = V();
      return q(() => r.tribeOrUndefined.value && S().replace({
        name: "tribe-slug"
      })), N().meta.back = () => S().push({
        name: "tribe-join"
      }), (o, n) => {
        const m = M,
          p = C;
        return t(), a("div", W, [i(r).myTribeRes.value ? (t(), l(m, {
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
  re = _(H, [
    ["__scopeId", "data-v-0b33d7eb"]
  ]);
export {
  re as
  default
};