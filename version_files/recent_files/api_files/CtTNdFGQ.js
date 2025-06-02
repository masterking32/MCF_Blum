import {
  _ as T
} from "./CvbcY9vk.js";
import {
  _ as k
} from "./C2JfWK3k.js";
import {
  d as u,
  o as t,
  c as a,
  a as $,
  t as f,
  e as i,
  A as h,
  G as g,
  f as _,
  z as l,
  D as j,
  b as y,
  _ as B,
  J as I,
  F as b,
  p as x,
  q as P,
  aR as R,
  da as V,
  bX as q,
  a3 as N,
  ad as S,
  Q as A
} from "./CTMy7kFf.js";
import {
  _ as C
} from "./D6xeNRIc.js";
import "./B61P6QRF.js";
import "./CY-1SgiA.js";
import "./CUGKEGaF.js";
import "./Bfh3En8u.js";
const F = {
    class: "pages-tribe-search-no-results"
  },
  K = {
    class: "title"
  },
  L = {
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
      return (n, s) => (t(), a("div", F, [$("div", K, f(("t" in n ? n.t : i(h))("tribes.search.no_results.title")), 1), e.noSubtitle ? g("", !0) : (t(), a("div", L, f(("t" in n ? n.t : i(h))("tribes.search.no_results.subtitle")), 1))]))
    }
  }),
  D = _(w, [
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
      const s = I(e.initialSearch ?? "");
      return (o, r) => {
        const m = T,
          p = k,
          d = D,
          v = O;
        return t(), a("div", U, [!e.list && !e.isSearching ? (t(), l(m, {
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
        })) : (t(), a("div", z, [(t(!0), a(b, null, P(e.list, c => (t(), l(v, {
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
  J = {
    class: "tribe-join-list page"
  },
  M = u({
    __name: "list",
    setup(e) {
      const n = R(),
        s = V();
      return q(() => n.tribeOrUndefined.value && S().replace({
        name: "tribe-slug"
      })), N().initHandler(() => S().push({
        name: "tribe-join"
      }), "tribe-join-list"), (o, r) => {
        const m = H,
          p = A;
        return t(), a("div", J, [i(n).myTribeRes.value ? (t(), l(m, {
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
  ie = _(M, [
    ["__scopeId", "data-v-5ccf0b2c"]
  ]);
export {
  ie as
  default
};