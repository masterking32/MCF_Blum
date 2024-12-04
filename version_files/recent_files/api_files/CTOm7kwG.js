import {
  _ as T
} from "./ArhTg56z.js";
import {
  _ as k
} from "./0OU_0X5M.js";
import {
  d as u,
  a as t,
  c as a,
  b as $,
  t as f,
  e as r,
  f as h,
  g as S,
  j as _,
  m as l,
  x as j,
  k as y,
  N as x,
  r as I,
  W as b,
  V,
  X as B,
  aO as N,
  cQ as P,
  bV as R,
  ay as q,
  J as g
} from "./DgYQtzR3.js";
import {
  _ as C
} from "./nZG5yK80.js";
import {
  _ as K
} from "./CS3n0RrJ.js";
import "./Fgn8LQaC.js";
import "./0VqT3Dfd.js";
import "./MQCxNrE4.js";
import "./DdpgpZ7T.js";
const L = {
    class: "pages-tribe-search-no-results"
  },
  O = {
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
      return (i, s) => (t(), a("div", L, [$("div", O, f(("t" in i ? i.t : r(h))("tribes.search.no_results.title")), 1), e.noSubtitle ? S("", !0) : (t(), a("div", w, f(("t" in i ? i.t : r(h))("tribes.search.no_results.subtitle")), 1))]))
    }
  }),
  E = _(A, [
    ["__scopeId", "data-v-7b7a9484"]
  ]),
  U = u({
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
      return (i, s) => {
        const o = x,
          n = C;
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
  W = _(U, [
    ["__scopeId", "data-v-3c0fb88f"]
  ]),
  D = {
    class: "pages-tribe-search"
  },
  F = {
    key: 1,
    class: "list"
  },
  J = u({
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
      return (o, n) => {
        const m = T,
          p = k,
          d = E,
          v = W;
        return t(), a("div", D, [!e.list && !e.isSearching ? (t(), l(m, {
          key: 0
        })) : (t(), a(b, {
          key: 1
        }, [y(p, {
          modelValue: r(s),
          "onUpdate:modelValue": n[0] || (n[0] = c => V(s) ? s.value = c : null),
          title: ("t" in o ? o.t : r(h))("tribes.search.title"),
          "is-loading": e.isSearching,
          onApply: n[1] || (n[1] = c => o.$emit("search", c))
        }, null, 8, ["modelValue", "title", "is-loading"]), e.list ? (t(), a(b, {
          key: 0
        }, [e.list.length === 0 ? (t(), l(d, {
          key: 0,
          class: "no-results"
        })) : (t(), a("div", F, [(t(!0), a(b, null, B(e.list, c => (t(), l(v, {
          key: c.id,
          tribe: c,
          source: e.joinTribeSource
        }, null, 8, ["tribe", "source"]))), 128))]))], 64)) : S("", !0)], 64))])
      }
    }
  }),
  M = _(J, [
    ["__scopeId", "data-v-161e69bb"]
  ]),
  Q = {
    class: "tribe-join-list page"
  },
  X = u({
    __name: "list",
    setup(e) {
      const i = N(),
        s = P();
      return R(() => i.tribeOrUndefined.value && g().replace({
        name: "tribe-slug"
      })), q().meta.back = () => g().push({
        name: "tribe-join"
      }), (o, n) => {
        const m = M,
          p = K;
        return t(), a("div", Q, [r(i).myTribeRes.value ? (t(), l(m, {
          key: 0,
          list: r(s).list.value,
          "initial-search": r(s).searchLine.value,
          "is-searching": r(s).isSearching.value,
          "join-tribe-source": r(s).joinTribeSource.value,
          onSearch: n[0] || (n[0] = d => r(s).search(d))
        }, null, 8, ["list", "initial-search", "is-searching", "join-tribe-source"])) : (t(), l(p, {
          key: 1
        }))])
      }
    }
  }),
  ie = _(X, [
    ["__scopeId", "data-v-0b33d7eb"]
  ]);
export {
  ie as
  default
};