var I = Object.defineProperty;
var K = (c, i, t) => i in c ? I(c, i, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : c[i] = t;
var l = (c, i, t) => K(c, typeof i != "symbol" ? i + "" : i, t);
import {
  c2 as h,
  a1 as m,
  aw as E,
  X as u,
  bk as C,
  R as p,
  c3 as r,
  W as b,
  aT as M,
  c4 as T,
  b9 as k,
  a6 as U,
  b0 as _,
  c5 as J,
  c6 as q,
  j as v,
  a0 as D
} from "./DconZeyr.js";
import {
  d as y,
  a as H,
  A as G,
  H as j,
  M as Y
} from "./6x6RsUL-.js";
class W extends H {
  constructor(t) {
    super();
    l(this, "sdk");
    l(this, "tonApiClient");
    l(this, "partnerAddresses");
    l(this, "FEES", U({
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: r(y.Constants.CoinBuyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: r(y.Constants.CoinSellGas),
      MEMEPAD_JETTON_LAUNCH_PLATFORM_FEE: r(0n),
      MEMEPAD_JETTON_LAUNCH_NETWORK_FEE: r(y.Constants.CoinDeploymentGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: r(y.Constants.WalletUnlockGas)
    }));
    l(this, "WALLET_NETWORK_FEES", U({
      LAUNCH_FEE: new p(.0114),
      LAUNCH_BUY_FEE: new p(.012),
      BUY_FEE: new p(.0062),
      SELL_FEE: new p(.0044),
      UNLOCK_FEE: new p(.0037)
    }));
    l(this, "getBclData", async () => {
      const t = this.useCached("bclData"),
        e = t.get();
      if (e) return u(e);
      const s = await h(async () => await this.sdk.getMasterData())();
      if (!m(s)) return E(s);
      const n = r(s.data.fullPriceTon),
        o = r(s.data.fullPriceTon).minus(r(s.data.fullPriceTonFees)),
        a = r(s.data.bclSupply),
        d = r(s.data.liqSupply),
        g = a.plus(d);
      this.FEES.MEMEPAD_JETTON_LAUNCH_PLATFORM_FEE = r(s.data.deploymentFee);
      const A = {
        tonForDexWithFees: n,
        tonForDex: o,
        bclSupply: a,
        liqSupply: d,
        maxSupply: g
      };
      return t.set(A), u(A)
    });
    this.partnerAddresses = t, this.tonApiClient = new G(new j({
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
    return new p(1).minus(r(t.fees)).div(r(t.coins))
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
class $ extends W {
  constructor(t) {
    super(t);
    l(this, "getJettonBclData", h(async t => {
      const e = this.getAddress(t),
        n = await this.sdk.openCoin(e).getBclData(),
        o = r(n.totalSupply),
        a = r(n.fullPriceTon).minus(r(n.fullPriceTonFees)),
        d = r(n.tonLiqCollected),
        g = d.div(a).times(100),
        A = r(n.bclSupply),
        F = r(n.liqSupply),
        f = A.minus(o);
      return {
        isReleased: !n.tradingEnabled,
        tonForDex: a,
        tonCollected: d,
        tonCollectedPercent: g,
        priceTon: void 0,
        marketCapTon: void 0,
        bclSupply: A,
        liqSupply: F,
        totalSupply: o,
        availableSupply: f
      }
    }));
    l(this, "getPriceDetails", this.createGetPriceDetails({
      getFees: () => this.fees
    }));
    l(this, "getWaitForCreateStatus", this.createGetWaitForLaunchStatusUntilOk(t => this.getCreateStatus(t)));
    l(this, "unlockStateControls", this.getUnlockStateControls(this.fees));
    l(this, "getUnlockEnabled", h(async t => {
      const e = this.useCachedKeys("unlockEnabled" + t),
        s = e.get(t);
      if (s !== void 0) return s;
      const n = this.getAddress(t),
        o = this.mustGetUserWalletAddress(),
        d = !await (await this.sdk.openCoin(n).getUserWallet(o)).getTransfersEnabled();
      return d === !1 && e.set(t, d), d
    }));
    l(this, "unlockWallet", h(async t => {
      const e = this.getAddress(t),
        s = this.sdk.openCoin(e),
        n = this.mustGetUserWalletAddress(),
        o = await s.getUserWallet(n),
        a = this.getTonConnectSender();
      return await o.sendUnlockWallet(a, {}), (await a.getResult()).hash
    }))
  }
  async getCreateStatus(t) {
    const e = await h(async () => await this.ta.events.getEvent(t))();
    if (!m(e)) return E();
    if (e.data.inProgress) return E();
    const s = e.data.actions.find(a => {
      var d;
      return a.type === "SmartContractExec" && ((d = a.SmartContractExec) == null ? void 0 : d.contract.address.equals(this.partnerAddresses.masterContractAddress))
    });
    return !s || s.status !== "ok" ? u(!1) : e.data.actions.find(a => a.type === "ContractDeploy") ? e.data.actions.find(a => a.status !== "ok") ? u(!1) : u(!0) : u(!1)
  }
  async getUnlockStatus({
    transactionHash: t,
    jettonAddress: e
  }) {
    const s = await h(async () => await this.ta.events.getEvent(t))();
    if (!m(s)) return E();
    if (s.data.inProgress) return E();
    const n = await this.getUnlockEnabled(e);
    if (!m(n)) return E();
    const o = !n.data;
    return u(o)
  }
  async getFirstCoinsForTons(t) {
    const e = this.useCachedKeys("coinsForTons"),
      s = e.get(t);
    if (s) return s;
    const n = await this.sdk.getFirstCoinsForTons(C.toNano(t));
    return e.set(t, n), n
  }
  async getJettonOverview(t) {
    const e = this.useCachedKeys("overview"),
      s = e.get(t);
    if (s) return u(s);
    const n = new p(t),
      o = await this.getBclData();
    if (!m(o)) return E();
    const {
      tonForDex: a,
      tonForDexWithFees: d,
      bclSupply: g,
      maxSupply: A
    } = o.data, F = new p(n).isZero() ? {
      fees: C.toNano(0),
      coins: C.toNano(0)
    } : await this.getFirstCoinsForTons(t), f = this.getCoinPriceInTons(await this.getFirstCoinsForTons(1)), w = f.mul(g), S = new p(r(F.coins)), N = new p(r(F.fees)), R = new p(n).minus(N), L = R.div(a).times(100), x = S.div(g).times(100), B = new p(g).sub(S), O = {
      share: n,
      tonForDexWithFees: d,
      tonForDex: a,
      tonCollected: R,
      tonCollectedPercent: L,
      jettonReceivePercent: x,
      priceTon: f,
      marketCapTon: w,
      availableSupply: B,
      maxSupply: A,
      platformFee: N,
      minReceive: S
    };
    return e.set(t, O), u(O)
  }
  async createJetton(t) {
    const e = this.getMemepadJettonInfoFromForm(t),
      s = await b.saveMemepadJettonInfo(e);
    if (!m(s)) return E();
    const n = new p(t.share),
      o = t.overview.minReceive,
      a = {
        name: e.name,
        description: e.description,
        imageUrl: M(e.iconFileKey),
        symbol: e.ticker,
        share: T(n),
        referral: s.data.referral,
        partnerAddress: s.data.partnerAddress,
        queryId: s.data.queryId,
        minReceive: T(o)
      },
      d = this.mustGetUserWalletAddress(),
      g = {};
    e.socials.length && (g.social_links = JSON.stringify(e.socials.map(S => S.url))), e.bannerFileKey && (g.cover_image = M(e.bannerFileKey));
    const A = {
        authorAddress: d,
        name: a.name,
        description: a.description,
        imageUrl: a.imageUrl,
        symbol: a.symbol,
        referral: y.packReferralConfig({
          partner: this.getAddress(a.partnerAddress),
          platformTag: this.getAddress(a.referral)
        }),
        queryId: C.toNano(a.queryId),
        extraMetadata: g
      },
      F = {
        firstBuy: n.isZero() ? void 0 : {
          tons: a.share,
          minReceive: a.minReceive,
          referral: y.packReferralConfig({
            partner: this.getAddress(a.partnerAddress)
          }),
          buyerAddress: d
        }
      },
      f = this.getTonConnectSender(),
      w = await h(async () => await this.sdk.deployCoin(f, A, F))();
    return m(w) ? u({
      queryId: s.data.queryId,
      launchTransactionHash: (await f.getResult()).hash
    }) : w
  }
  getWaitForUnlockStatus(t) {
    return k(async e => await this.getUnlockStatus({
      transactionHash: e,
      jettonAddress: t
    }), () => {}, 12e3)
  }
}
class Z extends W {
  constructor(t, e) {
    super(e);
    l(this, "jettomAddress");
    l(this, "tradeStateControls", this.getTradeInputStateControls({
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
    if (!m(e)) return E();
    const s = r(e.data.coins),
      n = this.getMinReceive(s);
    return u({
      minReceive: n,
      maxReceive: s,
      platformFee: r(e.data.fees),
      additionalInfo: {
        partnerAddress: this.partnerAddresses.partnerAddress
      }
    })
  }
  async getSellInfo(t) {
    const e = await h(async () => await this.coin.getTonsForCoins(T(t)))();
    if (!m(e)) return E();
    const s = r(e.data.tons),
      n = this.getMinReceive(s);
    return u({
      minReceive: n,
      maxReceive: s,
      platformFee: r(e.data.fees),
      additionalInfo: {
        partnerAddress: this.partnerAddresses.partnerAddress
      }
    })
  }
  async getTradeTransactionStatus(t) {
    const e = await h(async () => await this.ta.events.getEvent(t.transactionHash))();
    if (!m(e)) return E();
    if (e.data.inProgress) return E();
    const s = e.data.actions.find(n => {
      var o;
      return n.type === "SmartContractExec" && ((o = n.SmartContractExec) == null ? void 0 : o.contract.address.equals(C.Address.parseFriendly(t.jettonAddress).address))
    });
    return !s || s.status !== "ok" || e.data.actions.find(n => n.status !== "ok") ? u(!1) : u(!0)
  }
  async getUserJettonBalance() {
    const t = this.mustGetUserWalletAddress(),
      e = await h(async () => await this.sdk.getUserCoinBalance(this.address, t))();
    return m(e) ? u(r(e.data)) : E()
  }
  async buyJetton(t, e) {
    const s = {
        tons: T(t),
        minReceive: T(e.minReceive),
        referral: y.packReferralConfig({
          partner: this.getAddress(e.additionalInfo.partnerAddress)
        })
      },
      n = this.getTonConnectSender();
    return await h(async () => (await this.coin.sendBuy(n, s), (await n.getResult()).hash))()
  }
  async sellJetton(t, e) {
    const s = this.mustGetUserWalletAddress(),
      n = await this.coin.getUserWallet(s),
      o = {
        amount: T(t),
        minReceive: T(e.minReceive),
        referral: y.packReferralConfig({
          partner: this.getAddress(e.additionalInfo.partnerAddress)
        }),
        queryId: 0n
      },
      a = this.getTonConnectSender();
    return await h(async () => (await n.sendSellCoins(a, o), (await a.getResult()).hash))()
  }
  getWaitForBuyStatus() {
    return k(this.getTradeTransactionStatus.bind(this), () => {}, 12e3)
  }
  getWaitForSellStatus() {
    return k(this.getTradeTransactionStatus.bind(this), () => {}, 12e3)
  }
}
const V = () => ({
    getManagementSdk: e => new $(e),
    getBeforeDexTradingSdk: (e, s) => new Z(e, s),
    getDexTradingSdk: e => new Y(e)
  }),
  P = () => {
    const c = _("$JU3mIPe8CH"),
      i = _(() => J(), "$P1Vozdfyic"),
      t = _(() => q(async () => D(await b.getMemepadPartnerAddresses()), n => {
        c.value = n, i.value.resolve(n)
      }, 2e3), "$5jtlbZZRyA");
    return {
      init: async () => {
        await t.value.exec()
      },
      destroy: () => {
        t.value.destroy()
      },
      partnerAddresses: v(() => c.value),
      partnerAddressesResolver: v(() => i.value)
    }
  },
  z = () => {
    const c = _("$JwHI1YwVmt"),
      i = _("$VQxqx8b060"),
      {
        getManagementSdk: t
      } = V(),
      {
        partnerAddressesResolver: e
      } = P(),
      s = k(async () => {
        const a = await e.value.promise;
        return i.value = t(a), D(await i.value.getBclData())
      }, a => c.value = a);
    return {
      init: async () => {
        await s.exec()
      },
      destroy: () => {
        s.destroy()
      },
      bclData: v(() => c.value),
      memepadManagementSdk: v(() => i.value)
    }
  },
  te = () => {
    const {
      partnerAddresses: c,
      ...i
    } = P(), {
      bclData: t,
      memepadManagementSdk: e,
      ...s
    } = z();
    return {
      _flow: {
        init: async () => {
          await i.init(), await s.init()
        },
        destroy: () => {
          i.destroy()
        }
      },
      partnerAddresses: c,
      bclData: t,
      memepadManagementSdk: e
    }
  };
export {
  V as a, te as u
};