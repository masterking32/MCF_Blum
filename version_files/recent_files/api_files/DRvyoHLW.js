import {
  _ as T
} from "./Br8V_sI3.js";
import {
  _ as k
} from "./XWUbrtwU.js";
import {
  d as u,
  o as t,
  c as a,
  a as $,
  t as S,
  e as i,
  z as h,
  E as g,
  f as _,
  y as l,
  C as j,
  b as y,
  _ as I,
  I as B,
  F as b,
  p as x,
  q as P,
  aS as V,
  d9 as q,
  bW as N,
  a3 as R,
  ao as f,
  P as C
} from "./D0ZwcU5P.js";
import {
  _ as E
} from "./QgVuUtJa.js";
import "./CVcZ4oG3.js";
import "./Cg_-bryq.js";
import "./6jw9W9Wa.js";
import "./BcPp25he.js";
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
      return (n, s) => (t(), a("div", F, [$("div", K, S(("t" in n ? n.t : i(h))("tribes.search.no_results.title")), 1), e.noSubtitle ? g("", !0) : (t(), a("div", L, S(("t" in n ? n.t : i(h))("tribes.search.no_results.subtitle")), 1))]))
    }
  }),
  A = _(w, [
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
      return (n, s) => {
        const o = I,
          r = E;
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
  U = _(O, [
    ["__scopeId", "data-v-3c0fb88f"]
  ]),
  W = {
    class: "pages-tribe-search"
  },
  z = {
    key: 1,
    class: "list"
  },
  D = u({
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
      const s = B(e.initialSearch ?? "");
      return (o, r) => {
        const m = T,
          p = k,
          d = A,
          v = U;
        return t(), a("div", W, [!e.list && !e.isSearching ? (t(), l(m, {
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
  H = _(D, [
    ["__scopeId", "data-v-161e69bb"]
  ]),
  M = {
    class: "tribe-join-list page"
  },
  G = u({
    __name: "list",
    setup(e) {
      const n = V(),
        s = q();
      return N(() => n.tribeOrUndefined.value && f().replace({
        name: "tribe-slug"
      })), R().initHandler(() => f().push({
        name: "tribe-join"
      }), "tribe-join-list"), (o, r) => {
        const m = H,
          p = C;
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
  ie = _(G, [
    ["__scopeId", "data-v-5ccf0b2c"]
  ]);
export {
  ie as
  default
};