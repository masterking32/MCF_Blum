import {
  f as c,
  o as n,
  c as o,
  ad as f,
  d as i,
  b as d,
  D as u,
  m as h,
  t as w,
  _ as y,
  ab as g,
  C as m,
  F as x,
  q as k,
  T,
  a8 as b,
  M as l,
  j as I,
  e as N
} from "./Cbo9LC6p.js";
import {
  _ as M
} from "./DdW72Z7B.js";
import {
  u as P
} from "./Bh_6txVy.js";
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
  z = i({
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
  G = c(z, [
    ["__scopeId", "data-v-53d4ff3d"]
  ]),
  Q = i({
    __name: "NewType",
    setup(t) {
      const e = g();
      return T().initHandler(() => e.push({
        name: "memepad"
      }), "memepad-new-type"), b().memepad.memepadJettonStepTokenType(), (s, a) => {
        const _ = G;
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
      } = P(), s = I(() => {
        var a;
        return !!((a = e.value) != null && a.isAvailableAI)
      });
      return s.value || g().replace({
        name: "memepad-new-regular"
      }), (a, _) => {
        const r = Q,
          p = M;
        return n(), o("div", U, [N(s) ? (n(), l(r, {
          key: 0
        })) : (n(), l(p, {
          key: 1
        }))])
      }
    }
  }),
  ee = c(W, [
    ["__scopeId", "data-v-0c0ad502"]
  ]);
export {
  ee as
  default
};