import {
  bc as i,
  cw as U,
  ab as C,
  bd as _,
  j as p,
  K as I,
  ai as d,
  aF as L,
  aj as N,
  ae as h,
  h as g,
  an as R,
  ah as y,
  am as O,
  bj as $,
  c6 as T,
  a5 as M,
  bb as B
} from "./Dy2of55E.js";
const J = () => {
    const r = i("$QC6n8gVQsn"),
      a = i(() => U(), "$twfLhCQTUJ");
    let o;
    const l = C(),
      c = async () => {
        const n = await a.value.promise,
          t = await d.getJettonRate({
            amount: 1,
            currencyFromId: n
          });
        return t.err ? L() : N(t.data.amount)
      }, u = i(() => _(c, n => r.value = n, 6e4 * 2), "$VN22jJpl0V");
    return {
      _flow: {
        init: async () => {
          o = I(() => {
            var n;
            return l.wallet.value.status === "connected" && ((n = l.wallet.value.balance) == null ? void 0 : n.tonBalance.currencyId)
          }, n => {
            n && a.value.resolve(n)
          }, {
            immediate: !0
          }), await u.value.exec()
        },
        destroy: () => {
          u.value.destroy(), o == null || o()
        }
      },
      tonUsdRate: p(() => r.value)
    }
  },
  b = "ai-agent-activate-social-clicked-banners",
  P = () => {
    const r = i("$QPIW9be5pt"),
      a = i(() => new Set, "$OW3A71hCNI"),
      o = i(() => new Set(n()), "$Wg4nQYUREJ"),
      l = i(() => new Map, "$JOfssdvw5j"),
      c = h(async () => O(await d.getMemepadAiAgentsStatuses()), e => r.value = e, 3e4),
      u = p(() => {
        var e;
        return (e = r.value) == null ? void 0 : e.agents.filter(s => !o.value.has(s.shortname))
      }),
      A = async e => {
        a.value.add(e), await (async () => {
          const s = E => g().$webApp.openLink(E),
            m = l.value.get(e);
          if (m) {
            s(m.url);
            return
          }
          const f = await d.generateMemepadAiAgentLink(e);
          if (!R(f)) throw y("Failed to generate link");
          l.value.set(e, f.data), s(f.data.url)
        })(), a.value.delete(e)
      }, v = async e => {
        a.value.add(e);
        const s = await d.generateMemepadAiAgentLink(e);
        if (!R(s)) throw y("Failed to generate link");
        g().$webApp.openLink(s.data.url), a.value.delete(e)
      };

    function n() {
      try {
        const e = g().$webApp.storage.local.get(b);
        if (!e) return [];
        const s = JSON.parse(e);
        return Array.isArray(s) ? s : []
      } catch {
        return []
      }
    }
    const t = e => {
        o.value.add(e), g().$webApp.storage.local.set(b, JSON.stringify([...o.value]))
      },
      w = e => a.value.has(e);
    return {
      _flow: {
        init: () => {
          c.exec()
        },
        destroy: () => {
          c.destroy()
        }
      },
      aiAgentStatuses: p(() => r.value),
      aiAgentStatusesNotClickedList: u,
      loadAiAgentFineTuneLinkAndOpen: A,
      loadAiAgentSocialsActivateLinkAndOpen: v,
      isAiAgentStatusBannerLoading: w,
      setAiAgentStatusBannerClicked: t
    }
  },
  x = () => {
    const r = i("$JU3mIPe8CH"),
      a = J(),
      o = P(),
      l = i(() => $(async () => O(await d.getMemepadAddresses()), t => r.value = t, 4e3), "$P1Vozdfyic"),
      c = ({
        networkType: t,
        value: w
      }) => {
        switch (t) {
          case T.TON:
            return a.tonUsdRate.value ? a.tonUsdRate.value.mul(w) : void 0;
          default:
            throw y("Unknown network type")
        }
      },
      u = () => {
        let t = [];
        return {
          addErrorToStackAndCheck: (S, k) => {
            t.push(JSON.stringify(S)), t = t.slice(-3), t.length === 3 && t.every(s => s === t[0]) && (M().wallet.walletAttemptsErrorDisconnect({
              flowType: k.flowType,
              source: k.source
            }), B().disconnect(), t = [])
          }
        }
      },
      A = t => {
        switch (t) {
          case T.TON:
            return C().tonBalance.value;
          default:
            throw y("Invalid network type")
        }
      };
    return {
      _flow: {
        init: async () => {
          o._flow.init(), await l.value.exec(), a._flow.init()
        },
        destroy: () => {
          l.value.destroy(), a._flow.destroy(), o._flow.destroy()
        }
      },
      addresses: p(() => r.value),
      useWalletOperationsErrorsStack: u,
      getTokenUsdValue: c,
      getNetworkTokenBalance: A
    }
  };
export {
  P as a, x as u
};