import {
  _ as T
} from "./DgLhri_N.js";
import {
  _ as k
} from "./unG66nJI.js";
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
  _ as I,
  K as x,
  F as b,
  p as B,
  q as P,
  aE as R,
  cL as V,
  bQ as q,
  Q as N,
  ad as S
} from "./guWQ5rpf.js";
import {
  _ as K
} from "./SA-CxJJf.js";
import {
  _ as L
} from "./B9nPrNBv.js";
import "./DSCwoL6x.js";
import "./DPDc0K5p.js";
import "./B5woiiH4.js";
import "./BuQgB0E8.js";
const C = {
    class: "pages-tribe-search-no-results"
  },
  E = {
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
      return (r, s) => (t(), a("div", C, [$("div", E, f(("t" in r ? r.t : i(h))("tribes.search.no_results.title")), 1), e.noSubtitle ? g("", !0) : (t(), a("div", w, f(("t" in r ? r.t : i(h))("tribes.search.no_results.subtitle")), 1))]))
    }
  }),
  D = _(A, [
    ["__scopeId", "data-v-7b7a9484"]
  ]),
  F = u({
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
        const o = I,
          n = K;
        return t(), l(n, {
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
  O = _(F, [
    ["__scopeId", "data-v-3c0fb88f"]
  ]),
  Q = {
    class: "pages-tribe-search"
  },
  U = {
    key: 1,
    class: "list"
  },
  z = u({
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
          d = D,
          v = O;
        return t(), a("div", Q, [!e.list && !e.isSearching ? (t(), l(m, {
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
        })) : (t(), a("div", U, [(t(!0), a(b, null, P(e.list, c => (t(), l(v, {
          key: c.id,
          tribe: c,
          source: e.joinTribeSource
        }, null, 8, ["tribe", "source"]))), 128))]))], 64)) : g("", !0)], 64))])
      }
    }
  }),
  G = _(z, [
    ["__scopeId", "data-v-161e69bb"]
  ]),
  H = {
    class: "tribe-join-list page"
  },
  M = u({
    __name: "list",
    setup(e) {
      const r = R(),
        s = V();
      return q(() => r.tribeOrUndefined.value && S().replace({
        name: "tribe-slug"
      })), N().meta.back = () => S().push({
        name: "tribe-join"
      }), (o, n) => {
        const m = G,
          p = L;
        return t(), a("div", H, [i(r).myTribeRes.value ? (t(), l(m, {
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
  re = _(M, [
    ["__scopeId", "data-v-0b33d7eb"]
  ]);
export {
  re as
  default
};