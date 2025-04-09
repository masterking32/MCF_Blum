import {
  d as _,
  C as f,
  y,
  j as k,
  o as l,
  c as C,
  a as b,
  t as v,
  n as c,
  e,
  M as o,
  a$ as m,
  E as g,
  b0 as B,
  _ as $,
  f as E
} from "./BV1dF4C1.js";
const I = _({
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
      claimFn: {},
      loading: {
        type: Boolean
      }
    },
    setup(r) {
      const s = r,
        n = y(!1),
        a = k(() => n.value ? {
          state: "claiming"
        } : s.canClaim ? {
          state: "claim"
        } : {
          state: "claimed"
        }),
        p = async () => {
          a.value.state === "claim" && (n.value = !0, await s.claimFn(), n.value = !1)
        };
      return (t, i) => {
        const d = B,
          u = $;
        return l(), C("button", {
          class: c(["kit-pill-claim reset", [`is-state-${e(a).state}`, `is-type-${t.type}`]]),
          onClick: i[0] || (i[0] = N => p())
        }, [b("div", {
          class: c(["label", {
            "is-hidden": e(a).state !== "claim" || t.loading
          }])
        }, v(t.label), 3), e(a).state === "claiming" || t.loading ? (l(), o(d, {
          key: 0,
          size: 16,
          class: "spinner",
          type: s.type === "dark" ? e(m).LIGHT : e(m).DARK
        }, null, 8, ["type"])) : e(a).state === "claimed" ? (l(), o(u, {
          key: 1,
          name: "circle-check-white",
          class: "claimed-icon"
        })) : g("", !0)], 2)
      }
    }
  }),
  P = E(I, [
    ["__scopeId", "data-v-02ba071b"]
  ]);
export {
  P as _
};