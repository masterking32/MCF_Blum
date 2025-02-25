var K = Object.defineProperty;
var J = (d, i, t) => i in d ? K(d, i, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : d[i] = t;
var u = (d, i, t) => J(d, typeof i != "symbol" ? i + "" : i, t);
import {
  c1 as m,
  a1 as g,
  aw as p,
  X as l,
  bl as _,
  R as h,
  c2 as o,
  W as R,
  aU as b,
  c3 as T,
  ba as k,
  a6 as M,
  b1 as w,
  c4 as D,
  P as q,
  b4 as H,
  j as v,
  aF as G,
  c5 as $,
  a0 as P
} from "./HMtIIKN9.js";
import {
  d as y,
  a as j,
  A as Y,
  H as X,
  M as Z
} from "./DokjUYsk.js";
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
        c = o(s.data.fullPriceTon).minus(o(s.data.fullPriceTonFees)),
        n = o(s.data.bclSupply),
        r = o(s.data.liqSupply),
        E = n.plus(r);
      this.FEES.MEMEPAD_JETTON_LAUNCH_PLATFORM_FEE = o(s.data.deploymentFee);
      const f = {
        tonForDexWithFees: a,
        tonForDex: c,
        bclSupply: n,
        liqSupply: r,
        maxSupply: E
      };
      return t.set(f), l(f)
    });
    this.partnerAddresses = t, this.tonApiClient = new Y(new X({
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
class V extends W {
  constructor(t) {
    super(t);
    u(this, "getJettonBclData", m(async t => {
      const e = this.getAddress(t),
        a = await this.sdk.openCoin(e).getBclData(),
        c = o(a.totalSupply),
        n = o(a.fullPriceTon).minus(o(a.fullPriceTonFees)),
        r = o(a.tonLiqCollected),
        E = r.div(n).times(100),
        f = o(a.bclSupply),
        F = o(a.liqSupply),
        A = f.minus(c);
      return {
        isReleased: !a.tradingEnabled,
        tonForDex: n,
        tonCollected: r,
        tonCollectedPercent: E,
        priceTon: void 0,
        marketCapTon: void 0,
        bclSupply: f,
        liqSupply: F,
        totalSupply: c,
        availableSupply: A
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
        c = this.mustGetUserWalletAddress(),
        r = !await (await this.sdk.openCoin(a).getUserWallet(c)).getTransfersEnabled();
      return r === !1 && e.set(t, r), r
    }));
    u(this, "unlockWallet", m(async t => {
      const e = this.getAddress(t),
        s = this.sdk.openCoin(e),
        a = this.mustGetUserWalletAddress(),
        c = await s.getUserWallet(a),
        n = this.getTonConnectSender();
      return await c.sendUnlockWallet(n, {}), (await n.getResult()).hash
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
    const c = !a.data;
    return l(c)
  }
  async getFirstCoinsForTons(t) {
    const e = this.useCachedKeys("coinsForTons"),
      s = e.get(t);
    if (s) return s;
    const a = await this.sdk.getFirstCoinsForTons(_.toNano(t));
    return e.set(t, a), a
  }
  async getJettonOverview(t) {
    const e = this.useCachedKeys("overview"),
      s = e.get(t);
    if (s) return l(s);
    const a = new h(t),
      c = await this.getBclData();
    if (!g(c)) return p();
    const {
      tonForDex: n,
      tonForDexWithFees: r,
      bclSupply: E,
      maxSupply: f
    } = c.data, F = new h(a).isZero() ? {
      fees: _.toNano(0),
      coins: _.toNano(0)
    } : await this.getFirstCoinsForTons(t), A = this.getCoinPriceInTons(await this.getFirstCoinsForTons(1)), S = A.mul(E), C = new h(o(F.coins)), N = new h(o(F.fees)), U = new h(a).minus(N), I = U.div(n).times(100), x = C.div(E).times(100), B = new h(E).sub(C), O = {
      share: a,
      tonForDexWithFees: r,
      tonForDex: n,
      tonCollected: U,
      tonCollectedPercent: I,
      jettonReceivePercent: x,
      priceTon: A,
      marketCapTon: S,
      availableSupply: B,
      maxSupply: f,
      platformFee: N,
      minReceive: C
    };
    return e.set(t, O), l(O)
  }
  async createJetton(t) {
    const e = this.getMemepadJettonInfoFromForm(t),
      s = await R.saveMemepadJettonInfo(e);
    if (!g(s)) return p();
    const a = new h(t.share),
      c = t.overview.minReceive,
      n = {
        name: e.name,
        description: e.description,
        imageUrl: b(e.iconFileKey),
        symbol: e.ticker,
        share: T(a),
        referral: s.data.referral,
        partnerAddress: s.data.partnerAddress,
        queryId: s.data.queryId,
        minReceive: T(c)
      },
      r = this.mustGetUserWalletAddress(),
      E = {};
    e.socials.length && (E.social_links = JSON.stringify(e.socials.map(C => C.url))), e.bannerFileKey && (E.cover_image = b(e.bannerFileKey));
    const f = {
        authorAddress: r,
        name: n.name,
        description: n.description,
        imageUrl: n.imageUrl,
        symbol: n.symbol,
        referral: y.packReferralConfig({
          partner: this.getAddress(n.partnerAddress),
          platformTag: this.getAddress(n.referral)
        }),
        queryId: _.toNano(n.queryId),
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
      A = this.getTonConnectSender(),
      S = await m(async () => await this.sdk.deployCoin(A, f, F))();
    return g(S) ? l({
      queryId: s.data.queryId,
      launchTransactionHash: (await A.getResult()).hash
    }) : S
  }
  getWaitForUnlockStatus(t) {
    return k(async e => await this.getUnlockStatus({
      transactionHash: e,
      jettonAddress: t
    }), () => {}, 12e3)
  }
}
class z extends W {
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
    const e = await m(async () => await this.coin.getCoinsForTons(T(t)))();
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
    const e = await m(async () => await this.coin.getTonsForCoins(T(t)))();
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
      var c;
      return a.type === "SmartContractExec" && ((c = a.SmartContractExec) == null ? void 0 : c.contract.address.equals(_.Address.parseFriendly(t.jettonAddress).address))
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
        tons: T(t),
        minReceive: T(e.minReceive),
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
      c = {
        amount: T(t),
        minReceive: T(e.minReceive),
        referral: y.packReferralConfig({
          partner: this.getAddress(e.additionalInfo.partnerAddress)
        }),
        queryId: 0n
      },
      n = this.getTonConnectSender();
    return await m(async () => (await a.sendSellCoins(n, c), (await n.getResult()).hash))()
  }
  getWaitForBuyStatus() {
    return k(this.getTradeTransactionStatus.bind(this), () => {}, 12e3)
  }
  getWaitForSellStatus() {
    return k(this.getTradeTransactionStatus.bind(this), () => {}, 12e3)
  }
}
const Q = () => ({
    getManagementSdk: e => new V(e),
    getBeforeDexTradingSdk: (e, s) => new z(e, s),
    getDexTradingSdk: e => new Z(e)
  }),
  ee = () => {
    const d = w("$ZCE1Jdancj"),
      i = w(() => D(), "$7oHpXl4XKX");
    let t;
    const e = q(),
      s = async () => {
        const r = await i.value.promise,
          E = await R.getJettonRate({
            amount: 1,
            currencyFromId: r
          });
        return E.err ? p() : l(E.data.amount)
      }, a = w(() => H(s, r => d.value = r, 6e4 * 2), "$0m3UFDX17P");
    return {
      _flow: {
        init: async () => {
          t = G(() => {
            var r;
            return e.wallet.value.status === "connected" && ((r = e.wallet.value.balance) == null ? void 0 : r.tonBalance.currencyId)
          }, r => {
            r && i.value.resolve(r)
          }, {
            immediate: !0
          }), await a.value.exec()
        },
        destroy: () => {
          a.value.destroy(), t == null || t()
        }
      },
      tonUsdRate: v(() => d.value)
    }
  },
  L = () => {
    const d = w("$JU3mIPe8CH"),
      i = w(() => D(), "$P1Vozdfyic"),
      t = w(() => $(async () => P(await R.getMemepadPartnerAddresses()), a => {
        d.value = a, i.value.resolve(a)
      }, 2e3), "$5jtlbZZRyA");
    return {
      init: async () => {
        await t.value.exec()
      },
      destroy: () => {
        t.value.destroy()
      },
      partnerAddresses: v(() => d.value),
      partnerAddressesResolver: v(() => i.value)
    }
  },
  te = () => {
    const d = w("$JwHI1YwVmt"),
      i = w("$VQxqx8b060"),
      {
        getManagementSdk: t
      } = Q(),
      {
        partnerAddressesResolver: e
      } = L(),
      s = k(async () => {
        const n = await e.value.promise;
        return i.value = t(n), P(await i.value.getBclData())
      }, n => d.value = n);
    return {
      init: async () => {
        await s.exec()
      },
      destroy: () => {
        s.destroy()
      },
      bclData: v(() => d.value),
      memepadManagementSdk: v(() => i.value)
    }
  },
  re = () => {
    const {
      partnerAddresses: d,
      ...i
    } = L(), {
      bclData: t,
      memepadManagementSdk: e,
      ...s
    } = te(), a = ee();
    return {
      _flow: {
        init: async () => {
          await i.init(), s.init(), a._flow.init()
        },
        destroy: () => {
          i.destroy(), a._flow.destroy()
        }
      },
      partnerAddresses: d,
      bclData: t,
      memepadManagementSdk: e
    }
  };
export {
  ee as a, Q as b, re as u
};