import {
  _ as T
} from "./BEgEHi6Q.js";
import {
  _ as k
} from "./DQByW88u.js";
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
  H as j,
  b as y,
  _ as B,
  K as I,
  F as b,
  p as x,
  q as P,
  aG as R,
  cM as V,
  bR as q,
  O as N,
  ac as S
} from "./D7slzxTT.js";
import {
  _ as K
} from "./DA-s_hrS.js";
import {
  _ as C
} from "./D9XjqWgU.js";
import "./Bv2Es5Cu.js";
import "./Bm077_gL.js";
import "./BNz_j5IC.js";
import "./C2v0uqaT.js";
const F = {
    class: "pages-tribe-search-no-results"
  },
  L = {
    class: "title"
  },
  O = {
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
      return (n, s) => (t(), a("div", F, [$("div", L, f(("t" in n ? n.t : i(h))("tribes.search.no_results.title")), 1), e.noSubtitle ? g("", !0) : (t(), a("div", O, f(("t" in n ? n.t : i(h))("tribes.search.no_results.subtitle")), 1))]))
    }
  }),
  A = _(w, [
    ["__scopeId", "data-v-7b7a9484"]
  ]),
  D = u({
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
      return (n, s) => {
        const o = B,
          r = K;
        return t(), l(r, {
          tribe: e.tribe,
          source: e.source,
          class: "pages-tribe-search-item"
        }, {
          default: j(() => [y(o, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["tribe", "source"])
      }
    }
  }),
  E = _(D, [
    ["__scopeId", "data-v-3c0fb88f"]
  ]),
  G = {
    class: "pages-tribe-search"
  },
  H = {
    key: 1,
    class: "list"
  },
  M = u({
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
      const s = I(e.initialSearch ?? "");
      return (o, r) => {
        const m = T,
          p = k,
          d = A,
          v = E;
        return t(), a("div", G, [!e.list && !e.isSearching ? (t(), l(m, {
          key: 0
        })) : (t(), a(b, {
          key: 1
        }, [y(p, {
          modelValue: i(s),
          "onUpdate:modelValue": r[0] || (r[0] = c => x(s) ? s.value = c : null),
          title: ("t" in o ? o.t : i(h))("tribes.search.title"),
          "is-loading": e.isSearching,
          onApply: r[1] || (r[1] = c => o.$emit("search", c))
        }, null, 8, ["modelValue", "title", "is-loading"]), e.list ? (t(), a(b, {
          key: 0
        }, [e.list.length === 0 ? (t(), l(d, {
          key: 0,
          class: "no-results"
        })) : (t(), a("div", H, [(t(!0), a(b, null, P(e.list, c => (t(), l(v, {
          key: c.id,
          tribe: c,
          source: e.joinTribeSource
        }, null, 8, ["tribe", "source"]))), 128))]))], 64)) : g("", !0)], 64))])
      }
    }
  }),
  U = _(M, [
    ["__scopeId", "data-v-161e69bb"]
  ]),
  z = {
    class: "tribe-join-list page"
  },
  W = u({
    __name: "list",
    setup(e) {
      const n = R(),
        s = V();
      return q(() => n.tribeOrUndefined.value && S().replace({
        name: "tribe-slug"
      })), N().initHandler(() => S().push({
        name: "tribe-join"
      }), "tribe-join-list"), (o, r) => {
        const m = U,
          p = C;
        return t(), a("div", z, [i(n).myTribeRes.value ? (t(), l(m, {
          key: 0,
          list: i(s).list.value,
          "initial-search": i(s).searchLine.value,
          "is-searching": i(s).isSearching.value,
          "join-tribe-source": i(s).joinTribeSource.value,
          onSearch: r[0] || (r[0] = d => i(s).search(d))
        }, null, 8, ["list", "initial-search", "is-searching", "join-tribe-source"])) : (t(), l(p, {
          key: 1
        }))])
      }
    }
  }),
  ne = _(W, [
    ["__scopeId", "data-v-5ccf0b2c"]
  ]);
export {
  ne as
  default
};