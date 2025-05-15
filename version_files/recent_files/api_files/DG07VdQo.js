import {
  b4 as l,
  cv as _,
  a3 as O,
  b7 as b,
  j as p,
  Z as I,
  a9 as d,
  az as L,
  aa as N,
  a5 as $,
  h as g,
  af as R,
  a8 as v,
  ae as E,
  bf as h,
  c4 as T,
  X as M,
  b6 as B
} from "./jpzGFStf.js";
const J = () => {
    const r = l("$QC6n8gVQsn"),
      a = l(() => _(), "$twfLhCQTUJ");
    let o;
    const i = O(),
      c = async () => {
        const n = await a.value.promise,
          t = await d.getJettonRate({
            amount: 1,
            currencyFromId: n
          });
        return t.err ? L() : N(t.data.amount)
      }, u = l(() => b(c, n => r.value = n, 6e4 * 2), "$VN22jJpl0V");
    return {
      _flow: {
        init: async () => {
          o = I(() => {
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
      c = $(async () => E(await d.getMemepadAiAgentsStatuses()), e => r.value = e, 3e4),
      u = p(() => {
        var e;
        return (e = r.value) == null ? void 0 : e.agents.filter(s => !o.value.has(s.shortname))
      }),
      A = async e => {
        a.value.add(e), await (async () => {
          const s = U => g().$webApp.openLink(U),
            m = i.value.get(e);
          if (m) {
            s(m.url);
            return
          }
          const f = await d.generateMemepadAiAgentLink(e);
          if (!R(f)) throw v("Failed to generate link");
          i.value.set(e, f.data), s(f.data.url)
        })(), a.value.delete(e)
      }, y = async e => {
        a.value.add(e);
        const s = await d.generateMemepadAiAgentLink(e);
        if (!R(s)) throw v("Failed to generate link");
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
      loadAiAgentSocialsActivateLinkAndOpen: y,
      isAiAgentStatusBannerLoading: w,
      setAiAgentStatusBannerClicked: t
    }
  },
  x = () => {
    const r = l("$JU3mIPe8CH"),
      a = J(),
      o = P(),
      i = l(() => h(async () => E(await d.getMemepadAddresses()), t => r.value = t, 4e3), "$P1Vozdfyic"),
      c = ({
        networkType: t,
        value: w
      }) => {
        switch (t) {
          case T.TON:
            return a.tonUsdRate.value ? a.tonUsdRate.value.mul(w) : void 0;
          default:
            throw v("Unknown network type")
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
            throw v("Invalid network type")
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
  P as a, x as u
};