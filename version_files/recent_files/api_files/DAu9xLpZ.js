import {
  d as _,
  C as f,
  y,
  j as k,
  o as l,
  c as b,
  a as C,
  t as v,
  n as c,
  e,
  M as o,
  b0 as m,
  E as g,
  b1 as B,
  _ as E,
  f as I
} from "./C6ycOBuK.js";
const N = _({
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
          u = E;
        return l(), b("button", {
          class: c(["kit-pill-claim reset", [`is-state-${e(a).state}`, `is-type-${t.type}`]]),
          onClick: i[0] || (i[0] = $ => p())
        }, [C("div", {
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
  P = I(N, [
    ["__scopeId", "data-v-02ba071b"]
  ]);
export {
  P as _
};