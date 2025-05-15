import {
  f as c,
  o as n,
  c as o,
  ak as f,
  d as i,
  b as d,
  D as u,
  m as h,
  t as w,
  _ as y,
  ai as g,
  C as m,
  F as x,
  q as k,
  U as I,
  X as N,
  N as l,
  j as T,
  e as b,
  ad as M
} from "./jpzGFStf.js";
import {
  u as P
} from "./DG07VdQo.js";
const C = {},
  S = {
    class: "icon"
  };

function A(t, e) {
  return n(), o("div", S, [f(t.$slots, "default", {}, void 0, !0)])
}
const B = c(C, [
    ["render", A],
    ["__scopeId", "data-v-3b73aa0e"]
  ]),
  D = {},
  F = {
    class: "heading"
  };

function H(t, e) {
  return n(), o("div", F, [f(t.$slots, "default", {}, void 0, !0)])
}
const K = c(D, [
    ["render", H],
    ["__scopeId", "data-v-b5aba2e8"]
  ]),
  O = {},
  V = {
    class: "description"
  };

function j(t, e) {
  return n(), o("div", V, [f(t.$slots, "default", {}, void 0, !0)])
}
const q = c(O, [
    ["render", j],
    ["__scopeId", "data-v-4a8c206a"]
  ]),
  E = {
    type: "button",
    class: "reset option"
  },
  J = i({
    __name: "Option",
    props: {
      meta: {}
    },
    setup(t) {
      return (e, s) => {
        const a = y,
          _ = B,
          r = K,
          p = q;
        return n(), o("button", E, [d(_, null, {
          default: u(() => [d(a, {
            name: e.meta.icon
          }, null, 8, ["name"])]),
          _: 1
        }), d(r, null, {
          default: u(() => [h(w(e.meta.heading), 1)]),
          _: 1
        }), d(p, null, {
          default: u(() => [h(w(e.meta.description), 1)]),
          _: 1
        })])
      }
    }
  }),
  L = c(J, [
    ["__scopeId", "data-v-4f01f78e"]
  ]),
  R = {
    class: "selector"
  },
  U = i({
    __name: "Selector",
    setup(t) {
      const e = g(),
        s = [{
          meta: {
            icon: "environment-leaf-green",
            heading: m("memepad.new.step_flow_selector.regular.heading"),
            description: m("memepad.new.step_flow_selector.regular.description")
          },
          onClick: () => e.push({
            name: "memepad-new-regular"
          })
        }, {
          meta: {
            icon: "environment-bolt",
            heading: m("memepad.new.step_flow_selector.agent.heading"),
            description: m("memepad.new.step_flow_selector.agent.description")
          },
          onClick: () => e.push({
            name: "memepad-new-agent"
          })
        }];
      return (a, _) => {
        const r = L;
        return n(), o("div", R, [(n(), o(x, null, k(s, ({
          meta: p,
          onClick: $
        }, v) => d(r, {
          key: v,
          meta: p,
          onClick: $
        }, null, 8, ["meta", "onClick"])), 64))])
      }
    }
  }),
  X = c(U, [
    ["__scopeId", "data-v-53d4ff3d"]
  ]),
  z = i({
    __name: "NewType",
    setup(t) {
      const e = g();
      return I().initHandler(() => e.push({
        name: "memepad"
      }), "memepad-new-type"), N().memepad.memepadJettonStepTokenType(), (s, a) => {
        const _ = X;
        return n(), l(_)
      }
    }
  }),
  G = {
    class: "memepad-new-page page"
  },
  Q = i({
    __name: "index",
    setup(t) {
      const {
        addresses: e
      } = P(), s = T(() => {
        var a;
        return !!((a = e.value) != null && a.isAvailableAI)
      });
      return s.value || g().replace({
        name: "memepad-new-regular"
      }), (a, _) => {
        const r = z,
          p = M;
        return n(), o("div", G, [b(s) ? (n(), l(r, {
          key: 0
        })) : (n(), l(p, {
          key: 1
        }))])
      }
    }
  }),
  Z = c(Q, [
    ["__scopeId", "data-v-0c0ad502"]
  ]);
export {
  Z as
  default
};