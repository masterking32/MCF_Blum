import {
  d as u,
  z as f,
  I as y,
  j as k,
  o as l,
  c as v,
  a as C,
  t as b,
  n as c,
  e as a,
  y as o,
  a_ as m,
  E as g,
  a$ as B,
  _ as I,
  f as $
} from "./YXPW7IJg.js";
const E = u({
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
          _ = I;
        return l(), v("button", {
          class: c(["kit-pill-claim reset", [`is-state-${a(e).state}`, `is-type-${t.type}`]]),
          onClick: i[0] || (i[0] = N => p())
        }, [C("div", {
          class: c(["label", {
            "is-hidden": a(e).state !== "claim" || t.loading
          }])
        }, b(t.label), 3), a(e).state === "claiming" || t.loading ? (l(), o(d, {
          key: 0,
          size: 16,
          class: "spinner",
          type: s.type === "dark" ? a(m).LIGHT : a(m).DARK
        }, null, 8, ["type"])) : a(e).state === "claimed" ? (l(), o(_, {
          key: 1,
          name: "circle-check-white",
          class: "claimed-icon"
        })) : g("", !0)], 2)
      }
    }
  }),
  K = $(E, [
    ["__scopeId", "data-v-02ba071b"]
  ]);
export {
  K as _
};