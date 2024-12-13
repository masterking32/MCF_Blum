var K = Object.defineProperty;
var J = (d, c, t) => c in d ? K(d, c, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : d[c] = t;
var u = (d, c, t) => J(d, typeof c != "symbol" ? c + "" : c, t);
import {
  c6 as m,
  bc as g,
  bo as p,
  bd as l,
  bv as v,
  af as h,
  c7 as o,
  K as R,
  aZ as O,
  c8 as f,
  bg as k,
  ah as M,
  b4 as A,
  c9 as D,
  ao as q,
  bb as H,
  F as _,
  ca as G,
  av as $,
  ac as P
} from "./CfOYKG2j.js";
import {
  d as y,
  a as j,
  A as Y,
  H as Z,
  M as V
} from "./D5KzDloA.js";
class W extends j {
  constructor(t) {
    super();
    u(this, "sdk");
    u(this, "tonApiClient");
    u(this, "partnerAddresses");
    u(this, "FEES", M({
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: o(y.Constants.CoinBuyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: o(y.Constants.CoinSellGas),
      MEMEPAD_JETTON_LAUNCH_PLATFORM_FEE: o(0n),
      MEMEPAD_JETTON_LAUNCH_NETWORK_FEE: o(y.Constants.CoinDeploymentGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: o(y.Constants.WalletUnlockGas)
    }));
    u(this, "WALLET_NETWORK_FEES", M({
      LAUNCH_FEE: new h(.0114),
      LAUNCH_BUY_FEE: new h(.012),
      BUY_FEE: new h(.0062),
      SELL_FEE: new h(.0044),
      UNLOCK_FEE: new h(.0037)
    }));
    u(this, "getBclData", async () => {
      const t = this.useCached("bclData"),
        e = t.get();
      if (e) return l(e);
      const s = await m(async () => await this.sdk.getMasterData())();
      if (!g(s)) return p(s);
      const a = o(s.data.fullPriceTon),
        i = o(s.data.fullPriceTon).minus(o(s.data.fullPriceTonFees)),
        n = o(s.data.bclSupply),
        r = o(s.data.liqSupply),
        E = n.plus(r);
      this.FEES.MEMEPAD_JETTON_LAUNCH_PLATFORM_FEE = o(s.data.deploymentFee);
      const T = {
        tonForDexWithFees: a,
        tonForDex: i,
        bclSupply: n,
        liqSupply: r,
        maxSupply: E
      };
      return t.set(T), l(T)
    });
    this.partnerAddresses = t, this.tonApiClient = new Y(new Z({
      baseUrl: "https://tonapi.io",
      baseApiParams: {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${this.TON_API_TOKEN}`
        }
      }
    })), this.sdk = y.BclSDK.create({
      apiProvider: y.simpleTonapiProvider(this.tonApiClient),
      clientOptions: {
        endpoint: ""
      },
      masterAddress: this.partnerAddresses.masterContractAddress
    })
  }
  getCoinPriceInTons(t) {
    return new h(1).minus(o(t.fees)).div(o(t.coins))
  }
  get fees() {
    return {
      buyNetworkFee: this.FEES.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: this.FEES.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      launchPlatformFee: this.FEES.MEMEPAD_JETTON_LAUNCH_PLATFORM_FEE,
      launchNetworkFee: this.FEES.MEMEPAD_JETTON_LAUNCH_NETWORK_FEE,
      unlockNetworkFee: this.FEES.MEMEPAD_JETTON_UNLOCK_NETWORK_FEE,
      walletNetworkLaunchFee: this.WALLET_NETWORK_FEES.LAUNCH_FEE,
      walletNetworkLaunchBuyFee: this.WALLET_NETWORK_FEES.LAUNCH_BUY_FEE,
      walletNetworkBuyFee: this.WALLET_NETWORK_FEES.BUY_FEE,
      walletNetworkSellFee: this.WALLET_NETWORK_FEES.SELL_FEE,
      walletNetworkUnlockFee: this.WALLET_NETWORK_FEES.UNLOCK_FEE
    }
  }
}
class z extends W {
  constructor(t) {
    super(t);
    u(this, "getJettonBclData", m(async t => {
      const e = this.getAddress(t),
        a = await this.sdk.openCoin(e).getBclData(),
        i = o(a.totalSupply),
        n = o(a.fullPriceTon).minus(o(a.fullPriceTonFees)),
        r = o(a.tonLiqCollected),
        E = r.div(n).times(100),
        T = o(a.bclSupply),
        F = o(a.liqSupply),
        w = T.minus(i);
      return {
        isReleased: !a.tradingEnabled,
        tonForDex: n,
        tonCollected: r,
        tonCollectedPercent: E,
        priceTon: void 0,
        marketCapTon: void 0,
        bclSupply: T,
        liqSupply: F,
        totalSupply: i,
        availableSupply: w
      }
    }));
    u(this, "getPriceDetails", this.createGetPriceDetails({
      getFees: () => this.fees
    }));
    u(this, "getWaitForCreateStatus", this.createGetWaitForLaunchStatusUntilOk(t => this.getCreateStatus(t)));
    u(this, "unlockStateControls", this.getUnlockStateControls(this.fees));
    u(this, "getUnlockEnabled", m(async t => {
      const e = this.useCachedKeys("unlockEnabled" + t),
        s = e.get(t);
      if (s !== void 0) return s;
      const a = this.getAddress(t),
        i = this.mustGetUserWalletAddress(),
        r = !await (await this.sdk.openCoin(a).getUserWallet(i)).getTransfersEnabled();
      return r === !1 && e.set(t, r), r
    }));
    u(this, "unlockWallet", m(async t => {
      const e = this.getAddress(t),
        s = this.sdk.openCoin(e),
        a = this.mustGetUserWalletAddress(),
        i = await s.getUserWallet(a),
        n = this.getTonConnectSender();
      return await i.sendUnlockWallet(n, {}), (await n.getResult()).hash
    }))
  }
  async getCreateStatus(t) {
    const e = await m(async () => await this.ta.events.getEvent(t))();
    if (!g(e)) return p();
    if (e.data.inProgress) return p();
    const s = e.data.actions.find(n => {
      var r;
      return n.type === "SmartContractExec" && ((r = n.SmartContractExec) == null ? void 0 : r.contract.address.equals(this.partnerAddresses.masterContractAddress))
    });
    return !s || s.status !== "ok" ? l(!1) : e.data.actions.find(n => n.type === "ContractDeploy") ? e.data.actions.find(n => n.status !== "ok") ? l(!1) : l(!0) : l(!1)
  }
  async getUnlockStatus({
    transactionHash: t,
    jettonAddress: e
  }) {
    const s = await m(async () => await this.ta.events.getEvent(t))();
    if (!g(s)) return p();
    if (s.data.inProgress) return p();
    const a = await this.getUnlockEnabled(e);
    if (!g(a)) return p();
    const i = !a.data;
    return l(i)
  }
  async getFirstCoinsForTons(t) {
    const e = this.useCachedKeys("coinsForTons"),
      s = e.get(t);
    if (s) return s;
    const a = await this.sdk.getFirstCoinsForTons(v.toNano(t));
    return e.set(t, a), a
  }
  async getJettonOverview(t) {
    const e = this.useCachedKeys("overview"),
      s = e.get(t);
    if (s) return l(s);
    const a = new h(t),
      i = await this.getBclData();
    if (!g(i)) return p();
    const {
      tonForDex: n,
      tonForDexWithFees: r,
      bclSupply: E,
      maxSupply: T
    } = i.data, F = new h(a).isZero() ? {
      fees: v.toNano(0),
      coins: v.toNano(0)
    } : await this.getFirstCoinsForTons(t), w = this.getCoinPriceInTons(await this.getFirstCoinsForTons(1)), S = w.mul(E), C = new h(o(F.coins)), N = new h(o(F.fees)), U = new h(a).minus(N), I = U.div(n).times(100), B = C.div(E).times(100), x = new h(E).sub(C), b = {
      share: a,
      tonForDexWithFees: r,
      tonForDex: n,
      tonCollected: U,
      tonCollectedPercent: I,
      jettonReceivePercent: B,
      priceTon: w,
      marketCapTon: S,
      availableSupply: x,
      maxSupply: T,
      platformFee: N,
      minReceive: C
    };
    return e.set(t, b), l(b)
  }
  async createJetton(t) {
    const e = this.getMemepadJettonInfoFromForm(t),
      s = await R.saveMemepadJettonInfo(e);
    if (!g(s)) return p();
    const a = new h(t.share),
      i = t.overview.minReceive,
      n = {
        name: e.name,
        description: e.description,
        imageUrl: O(e.iconFileKey),
        symbol: e.ticker,
        share: f(a),
        referral: s.data.referral,
        partnerAddress: s.data.partnerAddress,
        queryId: s.data.queryId,
        minReceive: f(i)
      },
      r = this.mustGetUserWalletAddress(),
      E = {};
    e.socials.length && (E.social_links = JSON.stringify(e.socials.map(C => C.url))), e.bannerFileKey && (E.cover_image = O(e.bannerFileKey));
    const T = {
        authorAddress: r,
        name: n.name,
        description: n.description,
        imageUrl: n.imageUrl,
        symbol: n.symbol,
        referral: y.packReferralConfig({
          partner: this.getAddress(n.partnerAddress),
          platformTag: this.getAddress(n.referral)
        }),
        queryId: v.toNano(n.queryId),
        extraMetadata: E
      },
      F = {
        firstBuy: a.isZero() ? void 0 : {
          tons: n.share,
          minReceive: n.minReceive,
          referral: y.packReferralConfig({
            partner: this.getAddress(n.partnerAddress)
          }),
          buyerAddress: r
        }
      },
      w = this.getTonConnectSender(),
      S = await m(async () => await this.sdk.deployCoin(w, T, F))();
    return g(S) ? l({
      queryId: s.data.queryId,
      launchTransactionHash: (await w.getResult()).hash
    }) : S
  }
  getWaitForUnlockStatus(t) {
    return k(async e => await this.getUnlockStatus({
      transactionHash: e,
      jettonAddress: t
    }), () => {}, 12e3)
  }
}
class Q extends W {
  constructor(t, e) {
    super(e);
    u(this, "jettomAddress");
    u(this, "tradeStateControls", this.getTradeInputStateControls({
      getFees: () => this.fees,
      getSellInfo: this.getSellInfo.bind(this),
      getBuyInfo: this.getBuyInfo.bind(this)
    }));
    this.jettomAddress = t
  }
  get address() {
    return this.getAddress(this.jettomAddress)
  }
  get coin() {
    return this.sdk.openCoin(this.address)
  }
  async getBuyInfo(t) {
    const e = await m(async () => await this.coin.getCoinsForTons(f(t)))();
    if (!g(e)) return p();
    const s = o(e.data.coins),
      a = this.getMinReceive(s);
    return l({
      minReceive: a,
      maxReceive: s,
      platformFee: o(e.data.fees),
      additionalInfo: {
        partnerAddress: this.partnerAddresses.partnerAddress
      }
    })
  }
  async getSellInfo(t) {
    const e = await m(async () => await this.coin.getTonsForCoins(f(t)))();
    if (!g(e)) return p();
    const s = o(e.data.tons),
      a = this.getMinReceive(s);
    return l({
      minReceive: a,
      maxReceive: s,
      platformFee: o(e.data.fees),
      additionalInfo: {
        partnerAddress: this.partnerAddresses.partnerAddress
      }
    })
  }
  async getTradeTransactionStatus(t) {
    const e = await m(async () => await this.ta.events.getEvent(t.transactionHash))();
    if (!g(e)) return p();
    if (e.data.inProgress) return p();
    const s = e.data.actions.find(a => {
      var i;
      return a.type === "SmartContractExec" && ((i = a.SmartContractExec) == null ? void 0 : i.contract.address.equals(v.Address.parseFriendly(t.jettonAddress).address))
    });
    return !s || s.status !== "ok" || e.data.actions.find(a => a.status !== "ok") ? l(!1) : l(!0)
  }
  async getUserJettonBalance() {
    const t = this.mustGetUserWalletAddress(),
      e = await m(async () => await this.sdk.getUserCoinBalance(this.address, t))();
    return g(e) ? l(o(e.data)) : p()
  }
  async buyJetton(t, e) {
    const s = {
        tons: f(t),
        minReceive: f(e.minReceive),
        referral: y.packReferralConfig({
          partner: this.getAddress(e.additionalInfo.partnerAddress)
        })
      },
      a = this.getTonConnectSender();
    return await m(async () => (await this.coin.sendBuy(a, s), (await a.getResult()).hash))()
  }
  async sellJetton(t, e) {
    const s = this.mustGetUserWalletAddress(),
      a = await this.coin.getUserWallet(s),
      i = {
        amount: f(t),
        minReceive: f(e.minReceive),
        referral: y.packReferralConfig({
          partner: this.getAddress(e.additionalInfo.partnerAddress)
        }),
        queryId: 0n
      },
      n = this.getTonConnectSender();
    return await m(async () => (await a.sendSellCoins(n, i), (await n.getResult()).hash))()
  }
  getWaitForBuyStatus() {
    return k(this.getTradeTransactionStatus.bind(this), () => {}, 12e3)
  }
  getWaitForSellStatus() {
    return k(this.getTradeTransactionStatus.bind(this), () => {}, 12e3)
  }
}
const X = () => ({
    getManagementSdk: e => new z(e),
    getBeforeDexTradingSdk: (e, s) => new Q(e, s),
    getDexTradingSdk: e => new V(e)
  }),
  ee = () => {
    const d = A("$JU3mIPe8CH"),
      c = A(() => D(), "$P1Vozdfyic");
    let t;
    const e = q(),
      s = async () => {
        const r = await c.value.promise,
          E = await R.getJettonRate({
            amount: 1,
            currencyFromId: r
          });
        return E.err ? p() : l(E.data.amount)
      }, a = A(() => H(s, r => d.value = r, 6e4 * 2), "$5jtlbZZRyA");
    return {
      init: async () => {
        t = $(() => {
          var r;
          return e.wallet.value.status === "connected" && ((r = e.wallet.value.balance) == null ? void 0 : r.tonBalance.currencyId)
        }, r => {
          r && c.value.resolve(r)
        }, {
          immediate: !0
        }), await a.value.exec()
      },
      destroy: () => {
        a.value.destroy(), t == null || t()
      },
      tonUsdRate: _(() => d.value)
    }
  },
  L = () => {
    const d = A("$JwHI1YwVmt"),
      c = A(() => D(), "$VQxqx8b060"),
      t = A(() => G(async () => P(await R.getMemepadPartnerAddresses()), a => {
        d.value = a, c.value.resolve(a)
      }, 2e3), "$tC3hjErcTF");
    return {
      init: async () => {
        await t.value.exec()
      },
      destroy: () => {
        t.value.destroy()
      },
      partnerAddresses: _(() => d.value),
      partnerAddressesResolver: _(() => c.value)
    }
  },
  te = () => {
    const d = A("$6Ey6bBtimr"),
      c = A("$H0u4sBShCB"),
      {
        getManagementSdk: t
      } = X(),
      {
        partnerAddressesResolver: e
      } = L(),
      s = k(async () => {
        const n = await e.value.promise;
        return c.value = t(n), P(await c.value.getBclData())
      }, n => d.value = n);
    return {
      init: async () => {
        await s.exec()
      },
      destroy: () => {
        s.destroy()
      },
      bclData: _(() => d.value),
      memepadManagementSdk: _(() => c.value)
    }
  },
  re = () => {
    const {
      tonUsdRate: d,
      ...c
    } = ee(), {
      partnerAddresses: t,
      ...e
    } = L(), {
      bclData: s,
      memepadManagementSdk: a,
      ...i
    } = te();
    return {
      _flow: {
        init: async () => {
          await e.init(), await Promise.all([i.init(), c.init()])
        },
        destroy: () => {
          e.destroy(), c.destroy()
        }
      },
      tonUsdRate: d,
      partnerAddresses: t,
      bclData: s,
      memepadManagementSdk: a
    }
  };
export {
  X as a, re as u
};