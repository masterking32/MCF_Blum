import {
  _ as T
} from "./BQeKYDDu.js";
import {
  _ as k
} from "./CYH8koay.js";
import {
  d as u,
  o as t,
  c as a,
  a as $,
  t as f,
  e as i,
  C as h,
  G as g,
  f as _,
  N as l,
  D as j,
  b as y,
  _ as B,
  y as I,
  F as b,
  p as x,
  q as N,
  aW as P,
  dd as V,
  b$ as q,
  U as R,
  ae as S
} from "./BlYmRJuD.js";
import {
  _ as C
} from "./o-mpYwei.js";
import {
  _ as F
} from "./C-7eHIco.js";
import "./Dxt6bpfQ.js";
import "./XI-nGgGL.js";
import "./CH43XQBs.js";
import "./D4c3NplN.js";
const K = {
    class: "pages-tribe-search-no-results"
  },
  L = {
    class: "title"
  },
  U = {
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
      return (n, s) => (t(), a("div", K, [$("div", L, f(("t" in n ? n.t : i(h))("tribes.search.no_results.title")), 1), e.noSubtitle ? g("", !0) : (t(), a("div", U, f(("t" in n ? n.t : i(h))("tribes.search.no_results.subtitle")), 1))]))
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
          r = C;
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
  O = {
    class: "pages-tribe-search"
  },
  W = {
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
      const s = I(e.initialSearch ?? "");
      return (o, r) => {
        const m = T,
          p = k,
          d = A,
          v = E;
        return t(), a("div", O, [!e.list && !e.isSearching ? (t(), l(m, {
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
        })) : (t(), a("div", W, [(t(!0), a(b, null, N(e.list, c => (t(), l(v, {
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
  z = u({
    __name: "list",
    setup(e) {
      const n = P(),
        s = V();
      return q(() => n.tribeOrUndefined.value && S().replace({
        name: "tribe-slug"
      })), R().initHandler(() => S().push({
        name: "tribe-join"
      }), "tribe-join-list"), (o, r) => {
        const m = H,
          p = F;
        return t(), a("div", M, [i(n).myTribeRes.value ? (t(), l(m, {
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
  ne = _(z, [
    ["__scopeId", "data-v-5ccf0b2c"]
  ]);
export {
  ne as
  default
};