import {
  d as _,
  C as f,
  y,
  j as k,
  o as l,
  c as C,
  a as v,
  t as b,
  n as c,
  e as a,
  N as o,
  aR as m,
  G as g,
  aS as B,
  _ as N,
  f as I
} from "./DH7rD_-R.js";
const S = _({
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
        e = k(() => n.value ? {
          state: "claiming"
        } : s.canClaim ? {
          state: "claim"
        } : {
          state: "claimed"
        }),
        p = async () => {
          e.value.state === "claim" && (n.value = !0, await s.claimFn(), n.value = !1)
        };
      return (t, i) => {
        const d = B,
          u = N;
        return l(), C("button", {
          class: c(["kit-pill-claim reset", [`is-state-${a(e).state}`, `is-type-${t.type}`]]),
          onClick: i[0] || (i[0] = $ => p())
        }, [v("div", {
          class: c(["label", {
            "is-hidden": a(e).state !== "claim" || t.loading
          }])
        }, b(t.label), 3), a(e).state === "claiming" || t.loading ? (l(), o(d, {
          key: 0,
          size: 16,
          class: "spinner",
          type: s.type === "dark" ? a(m).LIGHT : a(m).DARK
        }, null, 8, ["type"])) : a(e).state === "claimed" ? (l(), o(u, {
          key: 1,
          name: "circle-check-white",
          class: "claimed-icon"
        })) : g("", !0)], 2)
      }
    }
  }),
  K = I(S, [
    ["__scopeId", "data-v-02ba071b"]
  ]);
export {
  K as _
};