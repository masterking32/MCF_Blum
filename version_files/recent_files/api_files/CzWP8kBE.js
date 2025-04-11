import {
  bc as l,
  cC as L,
  Z as O,
  bf as _,
  j as p,
  U as b,
  a4 as d,
  aL as I,
  a5 as N,
  a0 as $,
  h as g,
  aa as R,
  a3 as y,
  a9 as U,
  bn as h,
  cc as T,
  a8 as M,
  be as B
} from "./C6VgFSU0.js";
const J = () => {
    const r = l("$QC6n8gVQsn"),
      a = l(() => L(), "$twfLhCQTUJ");
    let o;
    const i = O(),
      u = async () => {
        const n = await a.value.promise,
          t = await d.getJettonRate({
            amount: 1,
            currencyFromId: n
          });
        return t.err ? I() : N(t.data.amount)
      }, c = l(() => _(u, n => r.value = n, 6e4 * 2), "$VN22jJpl0V");
    return {
      _flow: {
        init: async () => {
          o = b(() => {
            var n;
            return i.wallet.value.status === "connected" && ((n = i.wallet.value.balance) == null ? void 0 : n.tonBalance.currencyId)
          }, n => {
            n && a.value.resolve(n)
          }, {
            immediate: !0
          }), await c.value.exec()
        },
        destroy: () => {
          c.value.destroy(), o == null || o()
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
      u = $(async () => U(await d.getMemepadAiAgentsStatuses()), e => r.value = e, 3e4),
      c = p(() => {
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
        init: () => {},
        destroy: () => {
          u.destroy()
        }
      },
      aiAgentStatuses: p(() => r.value),
      aiAgentStatusesNotClickedList: c,
      loadAiAgentFineTuneLinkAndOpen: A,
      loadAiAgentSocialsActivateLinkAndOpen: v,
      isAiAgentStatusBannerLoading: w,
      setAiAgentStatusBannerClicked: t
    }
  },
  V = () => {
    const r = l("$JU3mIPe8CH"),
      a = J(),
      o = P(),
      i = l(() => h(async () => U(await d.getMemepadAddresses()), t => r.value = t, 4e3), "$P1Vozdfyic"),
      u = ({
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
      c = () => {
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
      useWalletOperationsErrorsStack: c,
      getTokenUsdValue: u,
      getNetworkTokenBalance: A
    }
  };
export {
  P as a, V as u
};