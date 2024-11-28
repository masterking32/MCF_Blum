var K = Object.defineProperty;
var q = (d, i, t) => i in d ? K(d, i, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : d[i] = t;
var p = (d, i, t) => q(d, typeof i != "symbol" ? i + "" : i, t);
import {
  c5 as h,
  be as m,
  bq as g,
  bf as l,
  bx as k,
  af as A,
  c6 as o,
  K as b,
  a_ as O,
  c7 as T,
  bi as R,
  b6 as f,
  c8 as P,
  F as C,
  c9 as N,
  ao as L,
  bd as $,
  ac as _,
  av as G
} from "./CtIvpL0N.js";
import {
  d as E,
  a as H,
  A as j,
  H as Z,
  M as V
} from "./CAFZHRbW.js";
class I extends H {
  constructor(t) {
    super();
    p(this, "sdk");
    p(this, "tonApiClient");
    p(this, "partnerAddresses");
    p(this, "FEES", {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: o(E.Constants.CoinBuyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: o(E.Constants.CoinSellGas),
      MEMEPAD_JETTON_LAUNCH_PLATFORM_FEE: o(0n),
      MEMEPAD_JETTON_LAUNCH_NETWORK_FEE: o(E.Constants.CoinDeploymentGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: o(E.Constants.WalletUnlockGas)
    });
    p(this, "getBclData", async () => {
      const t = this.useCached("bclData"),
        e = t.get();
      if (e) return l(e);
      const s = await h(async () => await this.sdk.getMasterData())();
      if (!m(s)) return g(s);
      const a = o(s.data.fullPriceTon),
        c = o(s.data.fullPriceTon).minus(o(s.data.fullPriceTonFees)),
        n = o(s.data.bclSupply),
        r = o(s.data.liqSupply),
        u = n.plus(r);
      this.FEES.MEMEPAD_JETTON_LAUNCH_PLATFORM_FEE = o(s.data.deploymentFee);
      const y = {
        tonForDexWithFees: a,
        tonForDex: c,
        bclSupply: n,
        liqSupply: r,
        maxSupply: u
      };
      return t.set(y), l(y)
    });
    this.partnerAddresses = t, this.tonApiClient = new j(new Z({
      baseUrl: "https://tonapi.io",
      baseApiParams: {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${this.TON_API_TOKEN}`
        }
      }
    })), this.sdk = E.BclSDK.create({
      apiProvider: E.simpleTonapiProvider(this.tonApiClient),
      clientOptions: {
        endpoint: ""
      },
      masterAddress: this.partnerAddresses.masterContractAddress
    })
  }
  getCoinPriceInTons(t) {
    return new A(1).minus(o(t.fees)).div(o(t.coins))
  }
  get fees() {
    return {
      buyNetworkFee: this.FEES.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: this.FEES.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      launchPlatformFee: this.FEES.MEMEPAD_JETTON_LAUNCH_PLATFORM_FEE,
      launchNetworkFee: this.FEES.MEMEPAD_JETTON_LAUNCH_NETWORK_FEE,
      unlockNetworkFee: this.FEES.MEMEPAD_JETTON_UNLOCK_NETWORK_FEE
    }
  }
}
class Y extends I {
  constructor(t) {
    super(t);
    p(this, "getJettonBclData", h(async t => {
      const e = this.getAddress(t),
        a = await this.sdk.openCoin(e).getBclData(),
        c = o(a.totalSupply),
        n = o(a.fullPriceTon).minus(o(a.fullPriceTonFees)),
        r = o(a.tonLiqCollected),
        u = r.div(n).times(100),
        y = o(a.bclSupply),
        w = o(a.liqSupply),
        v = y.minus(c);
      return {
        isReleased: !a.tradingEnabled,
        tonForDex: n,
        tonCollected: r,
        tonCollectedPercent: u,
        priceTon: void 0,
        marketCapTon: void 0,
        bclSupply: y,
        liqSupply: w,
        totalSupply: c,
        availableSupply: v
      }
    }));
    p(this, "getPriceDetails", this.createGetPriceDetails({
      getFees: () => this.fees
    }));
    p(this, "getWaitForCreateStatus", this.createGetWaitForLaunchStatusUntilOk(t => this.getCreateStatus(t)));
    p(this, "unlockStateControls", this.getUnlockStateControls(this.fees));
    p(this, "getUnlockEnabled", h(async t => {
      const e = this.useCachedKeys("unlockEnabled" + t),
        s = e.get(t);
      if (s !== void 0) return s;
      const a = this.getAddress(t),
        c = this.mustGetUserWalletAddress(),
        r = !await (await this.sdk.openCoin(a).getUserWallet(c)).getTransfersEnabled();
      return r === !1 && e.set(t, r), r
    }));
    p(this, "unlockWallet", h(async t => {
      const e = this.getAddress(t),
        s = this.sdk.openCoin(e),
        a = this.mustGetUserWalletAddress(),
        c = await s.getUserWallet(a),
        n = this.getTonConnectSender();
      return await c.sendUnlockWallet(n, {}), (await n.getResult()).hash
    }))
  }
  async getCreateStatus(t) {
    const e = await h(async () => await this.ta.events.getEvent(t))();
    if (!m(e)) return g();
    if (e.data.inProgress) return g();
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
    const s = await h(async () => await this.ta.events.getEvent(t))();
    if (!m(s)) return g();
    if (s.data.inProgress) return g();
    const a = await this.getUnlockEnabled(e);
    if (!m(a)) return g();
    const c = !a.data;
    return l(c)
  }
  async getFirstCoinsForTons(t) {
    const e = this.useCachedKeys("coinsForTons"),
      s = e.get(t);
    if (s) return s;
    const a = await this.sdk.getFirstCoinsForTons(k.toNano(t));
    return e.set(t, a), a
  }
  async getJettonOverview(t) {
    const e = this.useCachedKeys("overview"),
      s = e.get(t);
    if (s) return l(s);
    const a = new A(t),
      c = await this.getBclData();
    if (!m(c)) return g();
    const {
      tonForDex: n,
      tonForDexWithFees: r,
      bclSupply: u,
      maxSupply: y
    } = c.data, w = new A(a).isZero() ? {
      fees: k.toNano(0),
      coins: k.toNano(0)
    } : await this.getFirstCoinsForTons(t), v = this.getCoinPriceInTons(await this.getFirstCoinsForTons(1)), S = v.mul(u), F = new A(o(w.coins)), M = new A(o(w.fees)), U = new A(a).minus(M), x = U.div(n).times(100), B = F.div(u).times(100), J = new A(u).sub(F), D = {
      share: a,
      tonForDexWithFees: r,
      tonForDex: n,
      tonCollected: U,
      tonCollectedPercent: x,
      jettonReceivePercent: B,
      priceTon: v,
      marketCapTon: S,
      availableSupply: J,
      maxSupply: y,
      platformFee: M,
      minReceive: F
    };
    return e.set(t, D), l(D)
  }
  async createJetton(t) {
    const e = this.getMemepadJettonInfoFromForm(t),
      s = await b.saveMemepadJettonInfo(e);
    if (!m(s)) return g();
    const a = new A(t.share),
      c = t.overview.minReceive,
      n = {
        name: e.name,
        description: e.description,
        imageUrl: O(e.iconFileKey),
        symbol: e.ticker,
        share: T(a),
        referral: s.data.referral,
        partnerAddress: s.data.partnerAddress,
        queryId: s.data.queryId,
        minReceive: T(c)
      },
      r = this.mustGetUserWalletAddress(),
      u = {};
    e.socials.length && (u.social_links = JSON.stringify(e.socials.map(F => F.url))), e.bannerFileKey && (u.cover_image = O(e.bannerFileKey));
    const y = {
        authorAddress: r,
        name: n.name,
        description: n.description,
        imageUrl: n.imageUrl,
        symbol: n.symbol,
        referral: E.packReferralConfig({
          partner: this.getAddress(n.partnerAddress),
          platformTag: this.getAddress(n.referral)
        }),
        queryId: k.toNano(n.queryId),
        extraMetadata: u
      },
      w = {
        firstBuy: a.isZero() ? void 0 : {
          tons: n.share,
          minReceive: n.minReceive,
          referral: E.packReferralConfig({
            partner: this.getAddress(n.partnerAddress)
          }),
          buyerAddress: r
        }
      },
      v = this.getTonConnectSender(),
      S = await h(async () => await this.sdk.deployCoin(v, y, w))();
    return m(S) ? l({
      queryId: s.data.queryId,
      launchTransactionHash: (await v.getResult()).hash
    }) : S
  }
  getWaitForUnlockStatus(t) {
    return R(async e => await this.getUnlockStatus({
      transactionHash: e,
      jettonAddress: t
    }), () => {}, 12e3)
  }
}
class z extends I {
  constructor(t, e) {
    super(e);
    p(this, "jettomAddress");
    p(this, "tradeStateControls", this.getTradeInputStateControls({
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
    const e = await h(async () => await this.coin.getCoinsForTons(T(t)))();
    if (!m(e)) return g();
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
    const e = await h(async () => await this.coin.getTonsForCoins(T(t)))();
    if (!m(e)) return g();
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
    const e = await h(async () => await this.ta.events.getEvent(t.transactionHash))();
    if (!m(e)) return g();
    if (e.data.inProgress) return g();
    const s = e.data.actions.find(a => {
      var c;
      return a.type === "SmartContractExec" && ((c = a.SmartContractExec) == null ? void 0 : c.contract.address.equals(k.Address.parseFriendly(t.jettonAddress).address))
    });
    return !s || s.status !== "ok" || e.data.actions.find(a => a.status !== "ok") ? l(!1) : l(!0)
  }
  async getUserJettonBalance() {
    const t = this.mustGetUserWalletAddress(),
      e = await h(async () => await this.sdk.getUserCoinBalance(this.address, t))();
    return m(e) ? l(o(e.data)) : g()
  }
  async buyJetton(t, e) {
    const s = {
        tons: T(t),
        minReceive: T(e.minReceive),
        referral: E.packReferralConfig({
          partner: this.getAddress(e.additionalInfo.partnerAddress)
        })
      },
      a = this.getTonConnectSender();
    return await h(async () => (await this.coin.sendBuy(a, s), (await a.getResult()).hash))()
  }
  async sellJetton(t, e) {
    const s = this.mustGetUserWalletAddress(),
      a = await this.coin.getUserWallet(s),
      c = {
        amount: T(t),
        minReceive: T(e.minReceive),
        referral: E.packReferralConfig({
          partner: this.getAddress(e.additionalInfo.partnerAddress)
        }),
        queryId: 0n
      },
      n = this.getTonConnectSender();
    return await h(async () => (await a.sendSellCoins(n, c), (await n.getResult()).hash))()
  }
  getWaitForBuyStatus() {
    return R(this.getTradeTransactionStatus.bind(this), () => {}, 12e3)
  }
  getWaitForSellStatus() {
    return R(this.getTradeTransactionStatus.bind(this), () => {}, 12e3)
  }
}
const Q = () => ({
    getManagementSdk: e => new Y(e),
    getBeforeDexTradingSdk: (e, s) => new z(e, s),
    getDexTradingSdk: e => new V(e)
  }),
  X = () => {
    const d = f(() => {}, "$JU3mIPe8CH"),
      i = f(() => P(async () => _(await b.getMemepadEligible()), s => d.value = s.eligible, 2e3), "$P1Vozdfyic");
    return {
      init: async () => await i.value.exec(),
      destroy: () => {
        i.value.destroy()
      },
      isEligible: C(() => d.value)
    }
  },
  ee = () => {
    const d = f("$5jtlbZZRyA"),
      i = f(() => N(), "$JwHI1YwVmt");
    let t;
    const e = L(),
      s = async () => {
        const r = await i.value.promise,
          u = await b.getJettonRate({
            amount: 1,
            currencyFromId: r
          });
        return u.err ? g() : l(u.data.amount)
      }, a = f(() => $(s, r => d.value = r, 6e4 * 2), "$VQxqx8b060");
    return {
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
      },
      tonUsdRate: C(() => d.value)
    }
  },
  W = () => {
    const d = f("$tC3hjErcTF"),
      i = f(() => N(), "$6Ey6bBtimr"),
      t = f(() => P(async () => _(await b.getMemepadPartnerAddresses()), a => {
        d.value = a, i.value.resolve(a)
      }, 2e3), "$H0u4sBShCB");
    return {
      init: async () => {
        await t.value.exec()
      },
      destroy: () => {
        t.value.destroy()
      },
      partnerAddresses: C(() => d.value),
      partnerAddressesResolver: C(() => i.value)
    }
  },
  te = () => {
    const d = f("$d76e37vW6g"),
      i = f("$wlySA2pCdu"),
      {
        getManagementSdk: t
      } = Q(),
      {
        partnerAddressesResolver: e
      } = W(),
      s = R(async () => {
        const n = await e.value.promise;
        return i.value = t(n), _(await i.value.getBclData())
      }, n => d.value = n);
    return {
      init: async () => {
        await s.exec()
      },
      destroy: () => {
        s.destroy()
      },
      bclData: C(() => d.value),
      memepadManagementSdk: C(() => i.value)
    }
  },
  re = () => {
    const {
      isEligible: d,
      ...i
    } = X(), {
      tonUsdRate: t,
      ...e
    } = ee(), {
      partnerAddresses: s,
      ...a
    } = W(), {
      bclData: c,
      memepadManagementSdk: n,
      ...r
    } = te();
    return {
      _flow: {
        init: async () => {
          (await i.init()).eligible && (await a.init(), await Promise.all([r.init(), e.init()]))
        },
        destroy: () => {
          i.destroy(), a.destroy(), e.destroy()
        }
      },
      isEligible: d,
      tonUsdRate: t,
      partnerAddresses: s,
      bclData: c,
      memepadManagementSdk: n
    }
  };
export {
  Q as a, re as u
};