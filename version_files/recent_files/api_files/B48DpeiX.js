import {
  be as l,
  cC as N,
  $ as O,
  bh as U,
  j as p,
  V as _,
  a5 as d,
  aN as I,
  a6 as L,
  a1 as $,
  h as g,
  ab as R,
  a4 as y,
  aa as b,
  bp as h,
  cc as T,
  a9 as M,
  bg as B
} from "./DmEY5NHF.js";
const J = () => {
    const r = l("$QC6n8gVQsn"),
      a = l(() => N(), "$twfLhCQTUJ");
    let o;
    const i = O(),
      c = async () => {
        const n = await a.value.promise,
          t = await d.getJettonRate({
            amount: 1,
            currencyFromId: n
          });
        return t.err ? I() : L(t.data.amount)
      }, u = l(() => U(c, n => r.value = n, 6e4 * 2), "$VN22jJpl0V");
    return {
      _flow: {
        init: async () => {
          o = _(() => {
            var n;
            return i.wallet.value.status === "connected" && ((n = i.wallet.value.balance) == null ? void 0 : n.tonBalance.currencyId)
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
  C = "ai-agent-activate-social-clicked-banners",
  P = () => {
    const r = l("$QPIW9be5pt"),
      a = l(() => new Set, "$OW3A71hCNI"),
      o = l(() => new Set(n()), "$Wg4nQYUREJ"),
      i = l(() => new Map, "$JOfssdvw5j"),
      c = $(async () => b(await d.getMemepadAiAgentsStatuses()), e => r.value = e, 3e4),
      u = p(() => {
        var e;
        return (e = r.value) == null ? void 0 : e.agents.filter(s => !o.value.has(s.shortname))
      }),
      A = async e => {
        a.value.add(e), await (async () => {
          const s = E => g().$webApp.openLink(E),
            m = i.value.get(e);
          if (m) {
            s(m.url);
            return
          }
          const f = await d.generateMemepadAiAgentLink(e);
          if (!R(f)) throw y("Failed to generate link");
          i.value.set(e, f.data), s(f.data.url)
        })(), a.value.delete(e)
      }, v = async e => {
        a.value.add(e);
        const s = await d.generateMemepadAiAgentLink(e);
        if (!R(s)) throw y("Failed to generate link");
        g().$webApp.openLink(s.data.url), a.value.delete(e)
      };

    function n() {
      try {
        const e = g().$webApp.storage.local.get(C);
        if (!e) return [];
        const s = JSON.parse(e);
        return Array.isArray(s) ? s : []
      } catch {
        return []
      }
    }
    const t = e => {
        o.value.add(e), g().$webApp.storage.local.set(C, JSON.stringify([...o.value]))
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
  W = () => {
    const r = l("$JU3mIPe8CH"),
      a = J(),
      o = P(),
      i = l(() => h(async () => b(await d.getMemepadAddresses()), t => r.value = t, 4e3), "$P1Vozdfyic"),
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
            return O().tonBalance.value;
          default:
            throw y("Invalid network type")
        }
      };
    return {
      _flow: {
        init: async () => {
          o._flow.init(), await i.value.exec(), a._flow.init()
        },
        destroy: () => {
          i.value.destroy(), a._flow.destroy(), o._flow.destroy()
        }
      },
      addresses: p(() => r.value),
      useWalletOperationsErrorsStack: u,
      getTokenUsdValue: c,
      getNetworkTokenBalance: A
    }
  };
export {
  P as a, W as u
};