import {
  f as c,
  o as n,
  c as o,
  aq as f,
  d as i,
  b as d,
  D as u,
  m as h,
  t as w,
  _ as y,
  ad as g,
  A as m,
  F as x,
  q as k,
  a3 as I,
  a5 as T,
  z as l,
  j as b,
  e as N,
  Q as M
} from "./aUn4L-is.js";
import {
  u as P
} from "./BoETRRB6.js";
const A = {},
  S = {
    class: "icon"
  };

function C(t, e) {
  return n(), o("div", S, [f(t.$slots, "default", {}, void 0, !0)])
}
const B = c(A, [
    ["render", C],
    ["__scopeId", "data-v-3b73aa0e"]
  ]),
  D = {},
  F = {
    class: "heading"
  };

function q(t, e) {
  return n(), o("div", F, [f(t.$slots, "default", {}, void 0, !0)])
}
const H = c(D, [
    ["render", q],
    ["__scopeId", "data-v-b5aba2e8"]
  ]),
  K = {},
  O = {
    class: "description"
  };

function V(t, e) {
  return n(), o("div", O, [f(t.$slots, "default", {}, void 0, !0)])
}
const j = c(K, [
    ["render", V],
    ["__scopeId", "data-v-4a8c206a"]
  ]),
  z = {
    type: "button",
    class: "reset option"
  },
  E = i({
    __name: "Option",
    props: {
      meta: {}
    },
    setup(t) {
      return (e, s) => {
        const a = y,
          _ = B,
          r = H,
          p = j;
        return n(), o("button", z, [d(_, null, {
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
  J = c(E, [
    ["__scopeId", "data-v-4f01f78e"]
  ]),
  L = {
    class: "selector"
  },
  Q = i({
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
        const r = J;
        return n(), o("div", L, [(n(), o(x, null, k(s, ({
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
  R = c(Q, [
    ["__scopeId", "data-v-53d4ff3d"]
  ]),
  G = i({
    __name: "NewType",
    setup(t) {
      const e = g();
      return I().initHandler(() => e.push({
        name: "memepad"
      }), "memepad-new-type"), T().memepad.memepadJettonStepTokenType(), (s, a) => {
        const _ = R;
        return n(), l(_)
      }
    }
  }),
  U = {
    class: "memepad-new-page page"
  },
  W = i({
    __name: "index",
    setup(t) {
      const {
        addresses: e
      } = P(), s = b(() => {
        var a;
        return !!((a = e.value) != null && a.isAvailableAI)
      });
      return s.value || g().replace({
        name: "memepad-new-regular"
      }), (a, _) => {
        const r = G,
          p = M;
        return n(), o("div", U, [N(s) ? (n(), l(r, {
          key: 0
        })) : (n(), l(p, {
          key: 1
        }))])
      }
    }
  }),
  Z = c(W, [
    ["__scopeId", "data-v-0c0ad502"]
  ]);
export {
  Z as
  default
};