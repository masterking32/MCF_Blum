import {
  _ as T
} from "./DQ6dTWAO.js";
import {
  _ as k
} from "./aW0ltcsL.js";
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
  V as B,
  X as V,
  aM as N,
  cL as P,
  bL as R,
  ax as L,
  J as g
} from "./Brvr1E7g.js";
import {
  _ as q
} from "./BKqAlGRg.js";
import {
  _ as C
} from "./DlMo1ycV.js";
import "./CnTnF7Az.js";
import "./BHEQ3goZ.js";
import "./DIUw1uL7.js";
import "./BpCLhLHY.js";
const K = {
    class: "pages-tribe-search-no-results"
  },
  w = {
    class: "title"
  },
  A = {
    key: 0,
    class: "subtitle"
  },
  E = u({
    __name: "TribeSearchNoResults",
    props: {
      noSubtitle: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      return (i, s) => (t(), a("div", K, [$("div", w, f(("t" in i ? i.t : r(h))("tribes.search.no_results.title")), 1), e.noSubtitle ? S("", !0) : (t(), a("div", A, f(("t" in i ? i.t : r(h))("tribes.search.no_results.subtitle")), 1))]))
    }
  }),
  M = _(E, [
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
      return (i, s) => {
        const o = x,
          n = q;
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
  U = _(O, [
    ["__scopeId", "data-v-3c0fb88f"]
  ]),
  W = {
    class: "pages-tribe-search"
  },
  D = {
    key: 1,
    class: "list"
  },
  F = u({
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
          d = M,
          v = U;
        return t(), a("div", W, [!e.list && !e.isSearching ? (t(), l(m, {
          key: 0
        })) : (t(), a(b, {
          key: 1
        }, [y(p, {
          modelValue: r(s),
          "onUpdate:modelValue": n[0] || (n[0] = c => B(s) ? s.value = c : null),
          title: ("t" in o ? o.t : r(h))("tribes.search.title"),
          "is-loading": e.isSearching,
          onApply: n[1] || (n[1] = c => o.$emit("search", c))
        }, null, 8, ["modelValue", "title", "is-loading"]), e.list ? (t(), a(b, {
          key: 0
        }, [e.list.length === 0 ? (t(), l(d, {
          key: 0,
          class: "no-results"
        })) : (t(), a("div", D, [(t(!0), a(b, null, V(e.list, c => (t(), l(v, {
          key: c.id,
          tribe: c,
          source: e.joinTribeSource
        }, null, 8, ["tribe", "source"]))), 128))]))], 64)) : S("", !0)], 64))])
      }
    }
  }),
  J = _(F, [
    ["__scopeId", "data-v-161e69bb"]
  ]),
  X = {
    class: "tribe-join-list page"
  },
  z = u({
    __name: "list",
    setup(e) {
      const i = N(),
        s = P();
      return R(() => i.tribeOrUndefined.value && g().replace({
        name: "tribe-slug"
      })), L().meta.back = () => g().push({
        name: "tribe-join"
      }), (o, n) => {
        const m = J,
          p = C;
        return t(), a("div", X, [r(i).myTribeRes.value ? (t(), l(m, {
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
  ie = _(z, [
    ["__scopeId", "data-v-0b33d7eb"]
  ]);
export {
  ie as
  default
};