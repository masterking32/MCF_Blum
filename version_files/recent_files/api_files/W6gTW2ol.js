import {
  aO as l,
  cw as _,
  ab as C,
  aP as I,
  j as p,
  J as L,
  ah as d,
  aF as N,
  ai as b,
  ad as h,
  h as g,
  am as R,
  ag as y,
  al as E,
  bj as $,
  c6 as T,
  a5 as M,
  bd as J
} from "./OTci2SnY.js";
const B = () => {
    const r = l("$QC6n8gVQsn"),
      a = l(() => _(), "$twfLhCQTUJ");
    let o;
    const i = C(),
      c = async () => {
        const n = await a.value.promise,
          t = await d.getJettonRate({
            amount: 1,
            currencyFromId: n
          });
        return t.err ? N() : b(t.data.amount)
      }, u = l(() => I(c, n => r.value = n, 6e4 * 2), "$VN22jJpl0V");
    return {
      _flow: {
        init: async () => {
          o = L(() => {
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
  O = "ai-agent-activate-social-clicked-banners",
  P = () => {
    const r = l("$QPIW9be5pt"),
      a = l(() => new Set, "$OW3A71hCNI"),
      o = l(() => new Set(n()), "$Wg4nQYUREJ"),
      i = l(() => new Map, "$JOfssdvw5j"),
      c = h(async () => E(await d.getMemepadAiAgentsStatuses()), e => r.value = e, 3e4),
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
        const e = g().$webApp.storage.local.get(O);
        if (!e) return [];
        const s = JSON.parse(e);
        return Array.isArray(s) ? s : []
      } catch {
        return []
      }
    }
    const t = e => {
        o.value.add(e), g().$webApp.storage.local.set(O, JSON.stringify([...o.value]))
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
    const r = l("$JU3mIPe8CH"),
      a = B(),
      o = P(),
      i = l(() => $(async () => E(await d.getMemepadAddresses()), t => r.value = t, 4e3), "$P1Vozdfyic"),
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
            }), J().disconnect(), t = [])
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