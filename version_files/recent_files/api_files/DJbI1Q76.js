import {
  d,
  z as f,
  K as y,
  j as k,
  o as n,
  c as v,
  a as C,
  t as b,
  n as i,
  e,
  G as o,
  b4 as m,
  D as B,
  b5 as $,
  _ as g,
  f as I
} from "./C5qtAAJO.js";
const K = d({
    __name: "PillClaim",
    props: {
      label: {
        default: () => f("base.claim")
      },
      type: {
        default: "default"
      },
      canClaim: {
        type: Boolean
      },
      claimFn: {}
    },
    setup(r) {
      const t = r,
        s = y(!1),
        a = k(() => s.value ? {
          state: "claiming"
        } : t.canClaim ? {
          state: "claim"
        } : {
          state: "claimed"
        }),
        p = async () => {
          a.value.state === "claim" && (s.value = !0, await t.claimFn(), s.value = !1)
        };
      return (l, c) => {
        const _ = $,
          u = g;
        return n(), v("button", {
          class: i(["kit-pill-claim reset", [`is-state-${e(a).state}`, `is-type-${l.type}`]]),
          onClick: c[0] || (c[0] = N => p())
        }, [C("div", {
          class: i(["label", {
            "is-hidden": e(a).state !== "claim"
          }])
        }, b(l.label), 3), e(a).state === "claiming" ? (n(), o(_, {
          key: 0,
          size: 16,
          class: "spinner",
          type: t.type === "dark" ? e(m).LIGHT : e(m).DARK
        }, null, 8, ["type"])) : e(a).state === "claimed" ? (n(), o(u, {
          key: 1,
          name: "circle-check-white",
          class: "claimed-icon"
        })) : B("", !0)], 2)
      }
    }
  }),
  z = I(K, [
    ["__scopeId", "data-v-af24ff4e"]
  ]);
export {
  z as _
};