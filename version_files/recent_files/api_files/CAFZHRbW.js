var ti = Object.defineProperty;
var ri = (r, e, t) => e in r ? ti(r, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : r[e] = t;
var p = (r, e, t) => ri(r, typeof e != "symbol" ? e + "" : e, t);
import {
  bx as R,
  ca as si,
  cb as ni,
  cc as pe,
  cd as oi,
  ce as U,
  T as co,
  b6 as ms,
  ba as ai,
  ao as ii,
  L as ci,
  f as b,
  bL as k,
  af as M,
  b$ as di,
  bi as ar,
  K as li,
  be as N,
  cf as hs,
  cg as fs,
  bq as D,
  bf as F,
  P as ys,
  bl as ui,
  bK as de,
  at as gs,
  c5 as le,
  c6 as z,
  c7 as _e
} from "./CtIvpL0N.js";
import {
  d as h
} from "./Fk3aHGGV.js";
var lo = {},
  mt = {},
  ht = {},
  ft = {};
Object.defineProperty(ft, "__esModule", {
  value: !0
});
ft.normalizeCoin = pi;
ft.normalizeCoinEvent = mi;
const me = R;

function pi(r) {
  return {
    id: r.id,
    address: me.Address.parse(r.address),
    metadata: r.metadata,
    totalSupply: BigInt(r.totalSupply),
    bclSupply: BigInt(r.bclSupply),
    liqSupply: BigInt(r.liqSupply),
    lastTradeDate: r.lastTradeDate,
    authorAddress: me.Address.parse(r.authorAddress),
    tradingEnabled: r.tradingEnabled,
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral,
    createdAt: r.createdAt,
    tradingCloseFee: BigInt(r.tradingCloseFee),
    routerAddress: me.Address.parse(r.routerAddress)
  }
}

function mi(r) {
  if (r.type === "buy") return {
    type: "buy",
    trader: r.trader === "" ? null : me.Address.parse(r.trader),
    tonValue: BigInt(r.tonValue),
    supplyDelta: BigInt(r.supplyDelta),
    newSupply: BigInt(r.newSupply),
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral
  };
  if (r.type === "sell") return {
    type: "sell",
    trader: r.trader === "" ? null : me.Address.parse(r.trader),
    tonValue: BigInt(r.tonValue),
    supplyDelta: BigInt(r.supplyDelta),
    newSupply: BigInt(r.newSupply),
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral
  };
  if (r.type === "sendLiq") return {
    type: "send_liq",
    tonLiq: BigInt(r.tonLiq),
    jettonLiq: BigInt(r.jettonLiq)
  };
  if (r.type === "deployment") return {
    type: "deployment",
    metadata: r.metadata,
    totalSupply: BigInt(r.totalSupply),
    bclSupply: BigInt(r.bclSupply),
    liqSupply: BigInt(r.liqSupply),
    lastTradeDate: r.lastTradeDate,
    authorAddress: r.authorAddress === "" ? null : me.Address.parse(r.authorAddress),
    tradingEnabled: r.tradingEnabled,
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral,
    createdAt: r.createdAt,
    tradingCloseFee: BigInt(r.tradingCloseFee),
    routerAddress: me.Address.parse(r.routerAddress)
  };
  throw new Error("Unknown BCL event: " + JSON.stringify(r))
}
var yt = {};
const hi = si(ni);
Object.defineProperty(yt, "__esModule", {
  value: !0
});
yt.OfetchHttpProvider = void 0;
const _s = hi;
class fi {
  get(e, t) {
    return (0, _s.ofetch)(e, {
      query: t.query
    })
  }
  post(e, t) {
    return (0, _s.ofetch)(e, {
      method: "POST",
      body: JSON.stringify(t)
    })
  }
}
yt.OfetchHttpProvider = fi;
Object.defineProperty(ht, "__esModule", {
  value: !0
});
ht.BclClient = void 0;
const vs = R,
  Ue = ft,
  yi = yt;
class gi {
  constructor(e) {
    this.fetch = async (t, s) => await this.httpProvider.get(this.endpoint + t, {
      query: s == null ? void 0 : s.query
    }), this.fetchCoins = async t => {
      const s = await this.fetch("/getCoins", {
        query: t ?? {}
      });
      return {
        items: s.items.map(Ue.normalizeCoin),
        cursor: s.cursor
      }
    }, this.fetchCoin = async t => {
      let s = await this.fetch("/getCoin/" + t.toString({
        urlSafe: !0
      }));
      return (0, Ue.normalizeCoin)(s)
    }, this.fetchCoinEvents = async (t, s) => {
      const n = await this.fetch("/getCoinEvents/" + t.toString({
        urlSafe: !0
      }), {
        query: s ?? {}
      });
      return {
        items: n.items.map(o => ({
          id: o.id,
          lt: BigInt(o.lt),
          txUtime: o.txUtime,
          txHash: o.txHash,
          queryId: BigInt(o.queryId),
          event: (0, Ue.normalizeCoinEvent)(o.event),
          coinAddress: vs.Address.parse(o.coinAddress)
        })),
        cursor: n.cursor
      }
    }, this.fetchServerEvents = async t => {
      const s = await this.fetch("/getServerEvents", {
        query: t ?? {}
      });
      return {
        items: s.items.map(n => ({
          id: n.id,
          lt: BigInt(n.lt),
          txUtime: n.txUtime,
          txHash: n.txHash,
          queryId: BigInt(n.queryId),
          event: (0, Ue.normalizeCoinEvent)(n.event),
          coinAddress: vs.Address.parse(n.coinAddress)
        })),
        cursor: s.cursor
      }
    }, this.endpoint = e.endpoint, this.httpProvider = e.httpProvider ?? new yi.OfetchHttpProvider
  }
}
ht.BclClient = gi;
var ke = {},
  fe = {};
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.Constants = void 0;
const Ve = R;
fe.Constants = {
  CoinDeploymentGas: (0, Ve.toNano)("0.05"),
  CoinBuyGas: (0, Ve.toNano)("0.05"),
  CoinSellGas: (0, Ve.toNano)("0.06"),
  WalletUnlockGas: (0, Ve.toNano)("0.05")
};
var re = {};
Object.defineProperty(re, "__esModule", {
  value: !0
});
re.crc32 = uo;
re.crc32str = bi;
const _i = -306674912;
let it;

function vi() {
  it = new Int32Array(256);
  for (let r = 0; r < 256; r++) {
    let e = r;
    for (let t = 8; t > 0; --t) e = e & 1 ? e >>> 1 ^ _i : e >>> 1;
    it[r] = e
  }
}

function uo(r) {
  let e = 4294967295;
  it === void 0 && vi();
  for (let t = 0; t < r.length; ++t) e = it[(e ^ r[t]) & 255] ^ e >>> 8;
  return (e ^ -1) >>> 0
}

function bi(r) {
  return uo(pe.from(r))
}
var Re = {};
Object.defineProperty(Re, "__esModule", {
  value: !0
});
Re.BclWallet = void 0;
const ze = R,
  bs = fe,
  As = re;
class Sr {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Sr(e)
  }
  async getData(e) {
    const t = await e.get("get_wallet_data", []);
    return {
      balance: t.stack.readBigNumber(),
      owner: t.stack.readAddress()
    }
  }
  async sendSellCoins(e, t, s) {
    await e.internal(t, {
      value: bs.Constants.CoinSellGas,
      sendMode: ze.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, ze.beginCell)().storeUint((0, As.crc32str)("op::sell"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.amount).storeCoins(s.minReceive).storeMaybeRef(s.referral).endCell()
    })
  }
  async sendUnlockWallet(e, t, s) {
    await e.internal(t, {
      value: bs.Constants.WalletUnlockGas,
      sendMode: ze.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, ze.beginCell)().storeUint((0, As.crc32str)("op::unlock_wallet"), 32).storeUint(s.queryId ?? 0, 64).endCell()
    })
  }
  async getTransfersEnabled(e) {
    return (await e.get("get_transfers_enabled", [])).stack.readBoolean()
  }
}
Re.BclWallet = Sr;
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.BclJetton = void 0;
ke.parseBclEvent = Ti;
const Et = R,
  Ai = fe,
  rt = re,
  wi = Re;

function Ti(r) {
  let e = r.beginParse(),
    t = e.loadUint(32);
  if (t === (0, rt.crc32str)("send_liq_log")) return {
    type: "send_liq",
    tonLiq: e.loadCoins(),
    jettonLiq: e.loadCoins()
  };
  if (t === (0, rt.crc32str)("sell_log")) return {
    type: "sell",
    trader: e.loadAddress(),
    tonValue: e.loadCoins(),
    supplyDelta: e.loadCoins(),
    newSupply: e.loadCoins(),
    tonLiqCollected: e.loadCoins(),
    referral: e.loadMaybeRef()
  };
  if (t === (0, rt.crc32str)("buy_log")) return {
    type: "buy",
    trader: e.loadAddress(),
    tonValue: e.loadCoins(),
    supplyDelta: e.loadCoins(),
    newSupply: e.loadCoins(),
    tonLiqCollected: e.loadCoins(),
    referral: e.loadMaybeRef()
  };
  throw new Error("Unknown BCL event with id: " + t.toString(16))
}
class qr {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new qr(e)
  }
  async getData(e) {
    const t = (await e.get("get_jetton_data", [])).stack;
    return {
      totalSupply: t.readBigNumber(),
      mintable: t.readBigNumber() !== BigInt(0),
      adminAddress: t.readAddressOpt(),
      jettonContent: t.readCell(),
      jettonWalletCode: t.readCell()
    }
  }
  async getWalletAddress(e, t) {
    return (await e.get("get_wallet_address", [{
      type: "slice",
      cell: (0, Et.beginCell)().storeAddress(t).endCell()
    }])).stack.readAddress()
  }
  async getCoinPrice(e) {
    return (await e.get("coin_price", [])).stack.readBigNumber()
  }
  async getCoinsForTons(e, t) {
    const s = await e.get("coins_for_tons", [{
      type: "int",
      value: t
    }]);
    return {
      fees: s.stack.readBigNumber(),
      coins: s.stack.readBigNumber()
    }
  }
  async getTonsForCoins(e, t) {
    const s = await e.get("tons_for_coins", [{
      type: "int",
      value: t
    }]);
    return {
      fees: s.stack.readBigNumber(),
      tons: s.stack.readBigNumber()
    }
  }
  async sendBuy(e, t, s) {
    let n = (0, Et.beginCell)().storeUint((0, rt.crc32str)("op::buy"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.minReceive).storeMaybeRef(s.referral);
    s.buyerAddress && n.storeAddress(s.buyerAddress), await e.internal(t, {
      value: s.tons + Ai.Constants.CoinBuyGas,
      sendMode: Et.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: n.endCell()
    })
  }
  async getBclData(e) {
    const t = (await e.get("get_bcl_data", [])).stack;
    return {
      totalSupply: t.readBigNumber(),
      bclSupply: t.readBigNumber(),
      liqSupply: t.readBigNumber(),
      admin: t.readAddressOpt(),
      author: t.readAddress(),
      content: t.readCell(),
      feeAddress: t.readAddress(),
      tradeFeeNumerator: t.readNumber(),
      tradeFeeDenominator: t.readNumber(),
      ttl: t.readNumber(),
      lastTradeDate: t.readNumber(),
      tradingEnabled: t.readBoolean(),
      tonLiqCollected: t.readBigNumber(),
      referral: t.readCell(),
      tradingCloseFee: t.readBigNumber(),
      fullPriceTon: t.readBigNumber(),
      fullPriceTonFees: t.readBigNumber(),
      routerAddress: t.readAddress(),
      routerPtonWalletAddress: t.readAddress()
    }
  }
  async getUserWallet(e, t) {
    const s = await this.getWalletAddress(e, t);
    return e.open(wi.BclWallet.createFromAddress(s))
  }
}
ke.BclJetton = qr;
var Oe = {},
  je = {},
  gt = {};
Object.defineProperty(gt, "__esModule", {
  value: !0
});
gt.sha256ToBigint = void 0;
const $i = oi(),
  Si = r => BigInt("0x" + (0, $i.createHash)("sha256").update(r).digest().toString("hex"));
gt.sha256ToBigint = Si;
Object.defineProperty(je, "__esModule", {
  value: !0
});
je.storeSnakeContentData = ho;
je.loadSnakeContentData = fo;
je.storeTokenOnchainContent = ki;
je.loadTokenOnchainContent = ji;
const ct = h,
  qi = gt,
  po = 0,
  mo = 0;

function ho(r) {
  return e => e.storeUint(mo, 8).storeStringTail(r)
}

function fo(r) {
  if (r.loadUint(8) !== mo) throw new Error("Not snake ContentData");
  return r.loadStringTail()
}
const yo = {
  serialize: (r, e) => {
    e.storeRef((0, ct.beginCell)().store(ho(r)).endCell())
  },
  parse: r => fo(r.loadRef().beginParse())
};

function ki(r) {
  return e => {
    const t = ct.Dictionary.empty(ct.Dictionary.Keys.BigUint(256), yo);
    for (const s in r) r[s] && t.set((0, qi.sha256ToBigint)(s), r[s]);
    return e.storeUint(po, 8).storeDict(t)
  }
}

function ji(r) {
  if (r.loadUint(8) !== po) throw new Error("Not on-chain content");
  return r.loadDict(ct.Dictionary.Keys.BigUint(256), yo)
}
Object.defineProperty(Oe, "__esModule", {
  value: !0
});
Oe.BclMaster = void 0;
const ve = R,
  ws = fe,
  Ts = re,
  Pi = je;
class kr {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new kr(e)
  }
  async sendDeployCoin(e, t, s, n) {
    let o = (0, ve.beginCell)().store((0, Pi.storeTokenOnchainContent)({
        name: s.name,
        description: s.description,
        image: s.imageUrl,
        symbol: s.symbol,
        decimals: "9",
        social_links: JSON.stringify(s.socialLinks),
        ...s.extraMetadata
      })).endCell(),
      i = (0, ve.beginCell)().storeUint((0, Ts.crc32str)("op::deploy_coin"), 32).storeUint(s.queryId ?? 0, 64).storeRef(o).storeAddress(s.authorAddress).storeRef(s.referral ?? (0, ve.beginCell)().endCell()),
      c = (0, ve.beginCell)().storeUint(3547469196, 32).storeUint(s.queryId ?? 0, 64).endCell();
    if (n != null && n.firstBuy) {
      let a = (0, ve.beginCell)().storeUint((0, Ts.crc32str)("op::buy"), 32).storeUint(n.firstBuy.queryId ?? 0, 64).storeCoins(n.firstBuy.minReceive).storeMaybeRef(n.firstBuy.referral);
      n.firstBuy.buyerAddress && a.storeAddress(n.firstBuy.buyerAddress), c = a.endCell()
    }
    i.storeMaybeRef(c);
    let d;
    n != null && n.forceDeploymentFee ? d = n.forceDeploymentFee : d = (await this.getMasterData(e)).deploymentFee;
    let u = d + ws.Constants.CoinDeploymentGas;
    n != null && n.firstBuy && (u += ws.Constants.CoinBuyGas + n.firstBuy.tons), await e.internal(t, {
      value: u,
      sendMode: ve.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: i.endCell()
    })
  }
  async getCoinsForTons(e, t) {
    let s = await e.get("coins_for_tons", [{
      type: "int",
      value: t
    }]);
    return {
      fees: s.stack.readBigNumber(),
      coins: s.stack.readBigNumber()
    }
  }
  async getMasterData(e) {
    let t = await e.get("get_factory_data", []);
    return {
      admin: t.stack.readAddress(),
      deploymentFee: t.stack.readBigNumber(),
      coinAdmin: t.stack.readAddress(),
      coinTtl: t.stack.readNumber(),
      bclSupply: t.stack.readBigNumber(),
      liqSupply: t.stack.readBigNumber(),
      feeAddress: t.stack.readAddress(),
      feeNumerator: t.stack.readNumber(),
      feeDenominator: t.stack.readNumber(),
      tradingCloseFee: t.stack.readBigNumber(),
      fullPriceTon: t.stack.readBigNumber(),
      fullPriceTonFees: t.stack.readBigNumber(),
      isEnabled: t.stack.readBoolean(),
      seed: t.stack.readBigNumber(),
      coinCode: t.stack.readCell(),
      walletCode: t.stack.readCell()
    }
  }
}
Oe.BclMaster = kr;
Object.defineProperty(mt, "__esModule", {
  value: !0
});
mt.BclSDK = void 0;
const Ei = ht,
  Ci = ke,
  Ct = Oe;
class jr {
  constructor(e) {
    this.apiProvider = e.apiProvider, this.api = new Ei.BclClient(e.clientOptions), this.masterAddress = e.masterAddress
  }
  openCoin(e) {
    return this.apiProvider.open(Ci.BclJetton.createFromAddress(e))
  }
  async openUserCoinWallet(e, t) {
    return await this.openCoin(e).getUserWallet(t)
  }
  async deployCoin(e, t, s) {
    await this.apiProvider.open(Ct.BclMaster.createFromAddress(this.masterAddress)).sendDeployCoin(e, t, s)
  }
  async getCoinsForTons(e, t) {
    return await this.openCoin(e).getCoinsForTons(t)
  }
  async getTonsForCoins(e, t) {
    return await this.openCoin(e).getTonsForCoins(t)
  }
  async getUserCoinBalance(e, t) {
    const n = await this.openCoin(e).getUserWallet(t);
    try {
      return (await n.getData()).balance
    } catch {
      return 0n
    }
  }
  async getFirstCoinsForTons(e) {
    return await this.apiProvider.open(Ct.BclMaster.createFromAddress(this.masterAddress)).getCoinsForTons(e)
  }
  async getMasterData() {
    return await this.apiProvider.open(Ct.BclMaster.createFromAddress(this.masterAddress)).getMasterData()
  }
  open(e) {
    return this.apiProvider.open(e)
  }
  static create(e) {
    return new jr(e)
  }
}
mt.BclSDK = jr;
var _t = {},
  $ = {};
Object.defineProperty($, "__esModule", {
  value: !0
});
var Ii = $.Api = Bi = $.HttpClient = $.ContentType = $.PoolImplementationType = $.TrustType = $.JettonVerificationType = $.BouncePhaseType = $.ComputeSkipReason = $.AccStatusChange = $.TransactionType = $.AccountStatus = void 0,
  $s;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})($s || ($.AccountStatus = $s = {}));
var Ss;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(Ss || ($.TransactionType = Ss = {}));
var qs;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(qs || ($.AccStatusChange = qs = {}));
var ks;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(ks || ($.ComputeSkipReason = ks = {}));
var js;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(js || ($.BouncePhaseType = js = {}));
var Ps;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(Ps || ($.JettonVerificationType = Ps = {}));
var Es;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(Es || ($.TrustType = Es = {}));
var Cs;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(Cs || ($.PoolImplementationType = Cs = {}));
var X;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(X || ($.ContentType = X = {}));
class xi {
  constructor(e = {}) {
    p(this, "baseUrl", "https://tonapi.io");
    p(this, "securityData", null);
    p(this, "securityWorker");
    p(this, "abortControllers", new Map);
    p(this, "customFetch", (...e) => fetch(...e));
    p(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    p(this, "setSecurityData", e => {
      this.securityData = e
    });
    p(this, "contentFormatters", {
      [X.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
      [X.Text]: e => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
      [X.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? JSON.stringify(n) : `${n}`), t
      }, new FormData),
      [X.UrlEncoded]: e => this.toQueryString(e)
    });
    p(this, "createAbortSignal", e => {
      if (this.abortControllers.has(e)) {
        const s = this.abortControllers.get(e);
        return s ? s.signal : void 0
      }
      const t = new AbortController;
      return this.abortControllers.set(e, t), t.signal
    });
    p(this, "abortRequest", e => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e))
    });
    p(this, "request", async ({
      body: e,
      secure: t,
      path: s,
      type: n,
      query: o,
      format: i,
      baseUrl: c,
      cancelToken: d,
      ...u
    }) => {
      const a = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        m = this.mergeRequestParams(u, a),
        f = o && this.toQueryString(o),
        y = this.contentFormatters[n || X.Json],
        q = i || m.format;
      return this.customFetch(`${c||this.baseUrl||""}${s}${f?`?${f}`:""}`, {
        ...m,
        headers: {
          ...m.headers || {},
          ...n && n !== X.FormData ? {
            "Content-Type": n
          } : {}
        },
        signal: (d ? this.createAbortSignal(d) : m.signal) || null,
        body: typeof e > "u" || e === null ? null : y(e)
      }).then(async A => {
        const _ = A.clone();
        _.data = null, _.error = null;
        const v = q ? await A[q]().then(B => (_.ok ? _.data = B : _.error = B, _)).catch(B => (_.error = B, _)) : _;
        if (d && this.abortControllers.delete(d), !A.ok) throw v;
        return v.data
      })
    });
    Object.assign(this, e)
  }
  encodeQueryParam(e, t) {
    return `${encodeURIComponent(e)}=${encodeURIComponent(typeof t=="number"?t:`${t}`)}`
  }
  addQueryParam(e, t) {
    return this.encodeQueryParam(t, e[t])
  }
  addArrayQueryParam(e, t) {
    return e[t].map(n => this.encodeQueryParam(t, n)).join("&")
  }
  toQueryString(e) {
    const t = e || {};
    return Object.keys(t).filter(n => typeof t[n] < "u").map(n => Array.isArray(t[n]) ? this.addArrayQueryParam(t, n) : this.addQueryParam(t, n)).join("&")
  }
  addQueryParams(e) {
    const t = this.toQueryString(e);
    return t ? `?${t}` : ""
  }
  mergeRequestParams(e, t) {
    return {
      ...this.baseApiParams,
      ...e,
      ...t || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...e.headers || {},
        ...t && t.headers || {}
      }
    }
  }
}
var Bi = $.HttpClient = xi;
let Ri = class {
  constructor(e) {
    p(this, "http");
    p(this, "utilities", {
      status: (e = {}) => this.http.request({
        path: "/v2/status",
        method: "GET",
        format: "json",
        ...e
      }),
      addressParse: (e, t = {}) => this.http.request({
        path: `/v2/address/${e}/parse`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    p(this, "blockchain", {
      getReducedBlockchainBlocks: (e, t = {}) => this.http.request({
        path: "/v2/blockchain/reduced/blocks",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getBlockchainBlock: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/blocks/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainMasterchainShards: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/masterchain/${e}/shards`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainMasterchainBlocks: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/masterchain/${e}/blocks`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainMasterchainTransactions: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/masterchain/${e}/transactions`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainConfigFromBlock: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/masterchain/${e}/config`,
        method: "GET",
        format: "json",
        ...t
      }),
      getRawBlockchainConfigFromBlock: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/masterchain/${e}/config/raw`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainBlockTransactions: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/blocks/${e}/transactions`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainTransaction: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/transactions/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainTransactionByMessageHash: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/messages/${e}/transaction`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainValidators: (e = {}) => this.http.request({
        path: "/v2/blockchain/validators",
        method: "GET",
        format: "json",
        ...e
      }),
      getBlockchainMasterchainHead: (e = {}) => this.http.request({
        path: "/v2/blockchain/masterchain-head",
        method: "GET",
        format: "json",
        ...e
      }),
      getBlockchainRawAccount: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/accounts/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainAccountTransactions: (e, t, s = {}) => this.http.request({
        path: `/v2/blockchain/accounts/${e}/transactions`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      execGetMethodForBlockchainAccount: (e, t, s, n = {}) => this.http.request({
        path: `/v2/blockchain/accounts/${e}/methods/${t}`,
        method: "GET",
        query: s,
        format: "json",
        ...n
      }),
      sendBlockchainMessage: (e, t = {}) => this.http.request({
        path: "/v2/blockchain/message",
        method: "POST",
        body: e,
        ...t
      }),
      getBlockchainConfig: (e = {}) => this.http.request({
        path: "/v2/blockchain/config",
        method: "GET",
        format: "json",
        ...e
      }),
      getRawBlockchainConfig: (e = {}) => this.http.request({
        path: "/v2/blockchain/config/raw",
        method: "GET",
        format: "json",
        ...e
      }),
      blockchainAccountInspect: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/accounts/${e}/inspect`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    p(this, "accounts", {
      getAccounts: (e, t, s = {}) => this.http.request({
        path: "/v2/accounts/_bulk",
        method: "POST",
        query: t,
        body: e,
        format: "json",
        ...s
      }),
      getAccount: (e, t = {}) => this.http.request({
        path: `/v2/accounts/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      accountDnsBackResolve: (e, t = {}) => this.http.request({
        path: `/v2/accounts/${e}/dns/backresolve`,
        method: "GET",
        format: "json",
        ...t
      }),
      getAccountJettonsBalances: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/jettons`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountJettonBalance: (e, t, s, n = {}) => this.http.request({
        path: `/v2/accounts/${e}/jettons/${t}`,
        method: "GET",
        query: s,
        format: "json",
        ...n
      }),
      getAccountJettonsHistory: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/jettons/history`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountJettonHistoryById: (e, t, s, n = {}) => this.http.request({
        path: `/v2/accounts/${e}/jettons/${t}/history`,
        method: "GET",
        query: s,
        format: "json",
        ...n
      }),
      getAccountNftItems: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/nfts`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountEvents: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/events`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountEvent: (e, t, s, n = {}) => this.http.request({
        path: `/v2/accounts/${e}/events/${t}`,
        method: "GET",
        query: s,
        format: "json",
        ...n
      }),
      getAccountTraces: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/traces`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountSubscriptions: (e, t = {}) => this.http.request({
        path: `/v2/accounts/${e}/subscriptions`,
        method: "GET",
        format: "json",
        ...t
      }),
      reindexAccount: (e, t = {}) => this.http.request({
        path: `/v2/accounts/${e}/reindex`,
        method: "POST",
        ...t
      }),
      searchAccounts: (e, t = {}) => this.http.request({
        path: "/v2/accounts/search",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getAccountDnsExpiring: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/dns/expiring`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountPublicKey: (e, t = {}) => this.http.request({
        path: `/v2/accounts/${e}/publickey`,
        method: "GET",
        format: "json",
        ...t
      }),
      getAccountMultisigs: (e, t = {}) => this.http.request({
        path: `/v2/accounts/${e}/multisigs`,
        method: "GET",
        format: "json",
        ...t
      }),
      getAccountDiff: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/diff`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      })
    });
    p(this, "nft", {
      getAccountNftHistory: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/nfts/history`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getNftCollections: (e, t = {}) => this.http.request({
        path: "/v2/nfts/collections",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getNftCollection: (e, t = {}) => this.http.request({
        path: `/v2/nfts/collections/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getItemsFromCollection: (e, t, s = {}) => this.http.request({
        path: `/v2/nfts/collections/${e}/items`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getNftItemsByAddresses: (e, t = {}) => this.http.request({
        path: "/v2/nfts/_bulk",
        method: "POST",
        body: e,
        format: "json",
        ...t
      }),
      getNftItemByAddress: (e, t = {}) => this.http.request({
        path: `/v2/nfts/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getNftHistoryById: (e, t, s = {}) => this.http.request({
        path: `/v2/nfts/${e}/history`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      })
    });
    p(this, "dns", {
      getDnsInfo: (e, t = {}) => this.http.request({
        path: `/v2/dns/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      dnsResolve: (e, t = {}) => this.http.request({
        path: `/v2/dns/${e}/resolve`,
        method: "GET",
        format: "json",
        ...t
      }),
      getDomainBids: (e, t = {}) => this.http.request({
        path: `/v2/dns/${e}/bids`,
        method: "GET",
        format: "json",
        ...t
      }),
      getAllAuctions: (e, t = {}) => this.http.request({
        path: "/v2/dns/auctions",
        method: "GET",
        query: e,
        format: "json",
        ...t
      })
    });
    p(this, "traces", {
      getTrace: (e, t = {}) => this.http.request({
        path: `/v2/traces/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    p(this, "events", {
      getEvent: (e, t = {}) => this.http.request({
        path: `/v2/events/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    p(this, "inscriptions", {
      getAccountInscriptions: (e, t, s = {}) => this.http.request({
        path: `/v2/experimental/accounts/${e}/inscriptions`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountInscriptionsHistory: (e, t, s = {}) => this.http.request({
        path: `/v2/experimental/accounts/${e}/inscriptions/history`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountInscriptionsHistoryByTicker: (e, t, s, n = {}) => this.http.request({
        path: `/v2/experimental/accounts/${e}/inscriptions/${t}/history`,
        method: "GET",
        query: s,
        format: "json",
        ...n
      }),
      getInscriptionOpTemplate: (e, t = {}) => this.http.request({
        path: "/v2/experimental/inscriptions/op-template",
        method: "GET",
        query: e,
        format: "json",
        ...t
      })
    });
    p(this, "jettons", {
      getJettons: (e, t = {}) => this.http.request({
        path: "/v2/jettons",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getJettonInfo: (e, t = {}) => this.http.request({
        path: `/v2/jettons/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getJettonHolders: (e, t, s = {}) => this.http.request({
        path: `/v2/jettons/${e}/holders`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getJettonTransferPayload: (e, t, s = {}) => this.http.request({
        path: `/v2/jettons/${t}/transfer/${e}/payload`,
        method: "GET",
        format: "json",
        ...s
      }),
      getJettonsEvents: (e, t = {}) => this.http.request({
        path: `/v2/events/${e}/jettons`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    p(this, "staking", {
      getAccountNominatorsPools: (e, t = {}) => this.http.request({
        path: `/v2/staking/nominator/${e}/pools`,
        method: "GET",
        format: "json",
        ...t
      }),
      getStakingPoolInfo: (e, t = {}) => this.http.request({
        path: `/v2/staking/pool/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getStakingPoolHistory: (e, t = {}) => this.http.request({
        path: `/v2/staking/pool/${e}/history`,
        method: "GET",
        format: "json",
        ...t
      }),
      getStakingPools: (e, t = {}) => this.http.request({
        path: "/v2/staking/pools",
        method: "GET",
        query: e,
        format: "json",
        ...t
      })
    });
    p(this, "storage", {
      getStorageProviders: (e = {}) => this.http.request({
        path: "/v2/storage/providers",
        method: "GET",
        format: "json",
        ...e
      })
    });
    p(this, "rates", {
      getRates: (e, t = {}) => this.http.request({
        path: "/v2/rates",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getChartRates: (e, t = {}) => this.http.request({
        path: "/v2/rates/chart",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getMarketsRates: (e = {}) => this.http.request({
        path: "/v2/rates/markets",
        method: "GET",
        format: "json",
        ...e
      })
    });
    p(this, "connect", {
      getTonConnectPayload: (e = {}) => this.http.request({
        path: "/v2/tonconnect/payload",
        method: "GET",
        format: "json",
        ...e
      }),
      getAccountInfoByStateInit: (e, t = {}) => this.http.request({
        path: "/v2/tonconnect/stateinit",
        method: "POST",
        body: e,
        format: "json",
        ...t
      })
    });
    p(this, "wallet", {
      getWalletBackup: (e = {}) => this.http.request({
        path: "/v2/wallet/backup",
        method: "GET",
        format: "json",
        ...e
      }),
      setWalletBackup: (e, t = {}) => this.http.request({
        path: "/v2/wallet/backup",
        method: "PUT",
        body: e,
        ...t
      }),
      tonConnectProof: (e, t = {}) => this.http.request({
        path: "/v2/wallet/auth/proof",
        method: "POST",
        body: e,
        format: "json",
        ...t
      }),
      getAccountSeqno: (e, t = {}) => this.http.request({
        path: `/v2/wallet/${e}/seqno`,
        method: "GET",
        format: "json",
        ...t
      }),
      getWalletsByPublicKey: (e, t = {}) => this.http.request({
        path: `/v2/pubkeys/${e}/wallets`,
        method: "GET",
        format: "json",
        ...t
      }),
      emulateMessageToWallet: (e, t = {}) => this.http.request({
        path: "/v2/wallet/emulate",
        method: "POST",
        body: e,
        format: "json",
        ...t
      })
    });
    p(this, "gasless", {
      gaslessConfig: (e = {}) => this.http.request({
        path: "/v2/gasless/config",
        method: "GET",
        format: "json",
        ...e
      }),
      gaslessEstimate: (e, t, s = {}) => this.http.request({
        path: `/v2/gasless/estimate/${e}`,
        method: "POST",
        body: t,
        format: "json",
        ...s
      }),
      gaslessSend: (e, t = {}) => this.http.request({
        path: "/v2/gasless/send",
        method: "POST",
        body: e,
        ...t
      })
    });
    p(this, "liteServer", {
      getRawMasterchainInfo: (e = {}) => this.http.request({
        path: "/v2/liteserver/get_masterchain_info",
        method: "GET",
        format: "json",
        ...e
      }),
      getRawMasterchainInfoExt: (e, t = {}) => this.http.request({
        path: "/v2/liteserver/get_masterchain_info_ext",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getRawTime: (e = {}) => this.http.request({
        path: "/v2/liteserver/get_time",
        method: "GET",
        format: "json",
        ...e
      }),
      getRawBlockchainBlock: (e, t = {}) => this.http.request({
        path: `/v2/liteserver/get_block/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getRawBlockchainBlockState: (e, t = {}) => this.http.request({
        path: `/v2/liteserver/get_state/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getRawBlockchainBlockHeader: (e, t, s = {}) => this.http.request({
        path: `/v2/liteserver/get_block_header/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      sendRawMessage: (e, t = {}) => this.http.request({
        path: "/v2/liteserver/send_message",
        method: "POST",
        body: e,
        format: "json",
        ...t
      }),
      getRawAccountState: (e, t, s = {}) => this.http.request({
        path: `/v2/liteserver/get_account_state/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getRawShardInfo: (e, t, s = {}) => this.http.request({
        path: `/v2/liteserver/get_shard_info/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAllRawShardsInfo: (e, t = {}) => this.http.request({
        path: `/v2/liteserver/get_all_shards_info/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getRawTransactions: (e, t, s = {}) => this.http.request({
        path: `/v2/liteserver/get_transactions/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getRawListBlockTransactions: (e, t, s = {}) => this.http.request({
        path: `/v2/liteserver/list_block_transactions/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getRawBlockProof: (e, t = {}) => this.http.request({
        path: "/v2/liteserver/get_block_proof",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getRawConfig: (e, t, s = {}) => this.http.request({
        path: `/v2/liteserver/get_config_all/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getRawShardBlockProof: (e, t = {}) => this.http.request({
        path: `/v2/liteserver/get_shard_block_proof/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getOutMsgQueueSizes: (e = {}) => this.http.request({
        path: "/v2/liteserver/get_out_msg_queue_sizes",
        method: "GET",
        format: "json",
        ...e
      })
    });
    p(this, "multisig", {
      getMultisigAccount: (e, t = {}) => this.http.request({
        path: `/v2/multisig/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    p(this, "emulation", {
      decodeMessage: (e, t = {}) => this.http.request({
        path: "/v2/message/decode",
        method: "POST",
        body: e,
        format: "json",
        ...t
      }),
      emulateMessageToEvent: (e, t, s = {}) => this.http.request({
        path: "/v2/events/emulate",
        method: "POST",
        query: t,
        body: e,
        format: "json",
        ...s
      }),
      emulateMessageToTrace: (e, t, s = {}) => this.http.request({
        path: "/v2/traces/emulate",
        method: "POST",
        query: t,
        body: e,
        format: "json",
        ...s
      }),
      emulateMessageToAccountEvent: (e, t, s, n = {}) => this.http.request({
        path: `/v2/accounts/${e}/events/emulate`,
        method: "POST",
        query: s,
        body: t,
        format: "json",
        ...n
      })
    });
    this.http = e
  }
};
Ii = $.Api = Ri;
var Ne = {};
Object.defineProperty(Ne, "__esModule", {
  value: !0
});
Ne.runGetMethod = Oi;
Ne.TvmStackRecordToTupleItem = Pr;
Ne.TupleItemToTonapiString = go;
const ir = R;
async function Oi(r, e, t, s) {
  const n = await r.blockchain.execGetMethodForBlockchainAccount(e.toRawString(), t, {
    args: s == null ? void 0 : s.map(go)
  });
  if (!n.success || n.exit_code !== 0) throw new Error;
  return {
    stack: new ir.TupleReader(n.stack.map(Pr))
  }
}

function Pr(r) {
  var e, t;
  switch (r.type) {
    case "num":
      return (e = r.num) != null && e.startsWith("-") ? {
        type: "int",
        value: BigInt((t = r.num) == null ? void 0 : t.replace("-", "")) * BigInt(-1)
      } : {
        type: "int",
        value: BigInt(r.num)
      };
    case "nan":
      return {
        type: "nan"
      };
    case "cell":
      try {
        return {
          type: "cell",
          cell: ir.Cell.fromBase64(r.cell)
        }
      } catch {
        return {
          type: "cell",
          cell: ir.Cell.fromBase64(pe.from(r.cell, "hex").toString("base64"))
        }
      }
    case "null":
      return {
        type: "null"
      };
    case "tuple":
      return {
        type: "tuple", items: r.tuple.map(Pr)
      };
    default:
      throw new Error(`Unknown type ${r.type}`)
  }
}

function go(r) {
  switch (r.type) {
    case "int": {
      let e = r.value.toString(16);
      return e.length % 2 !== 0 && (e = "0" + e), "0x" + e
    }
    case "nan":
      return "NaN";
    case "null":
      return "Null";
    case "cell":
    case "builder":
      return r.cell.toBoc().toString("base64");
    case "slice":
      return r.cell.toBoc().toString("hex");
    case "tuple":
      throw new Error("Tuple is not supported in TonApi get method parameters");
    default:
      throw new Error(`Unknown type ${r.type}`)
  }
}
Object.defineProperty(_t, "__esModule", {
  value: !0
});
_t.simpleTonapiProvider = Ni;
_t.createProvider = Er;
const Ke = $,
  Ce = R,
  Is = Ne;

function Ni(r) {
  return {
    open(e) {
      return (0, Ce.openContract)(e, t => Er(r, t))
    }
  }
}

function Er(r, e) {
  return {
    async getState() {
      const t = await r.blockchain.getBlockchainRawAccount(e.address.toRawString());
      let s;
      if (t.status === Ke.AccountStatus.Nonexist || t.status === Ke.AccountStatus.Uninit) s = {
        type: "uninit"
      };
      else if (t.status === Ke.AccountStatus.Active) s = {
        type: "active",
        code: t.code ? pe.from(t.code, "hex") : null,
        data: t.data ? pe.from(t.data, "hex") : null
      };
      else if (t.status === Ke.AccountStatus.Frozen) s = {
        type: "frozen",
        stateHash: pe.from(t.frozen_hash, "hex")
      };
      else throw new Error("Unknown state");
      return {
        balance: BigInt(t.balance),
        last: t.last_transaction_hash ? {
          lt: BigInt(t.last_transaction_lt),
          hash: pe.from(t.last_transaction_hash, "hex")
        } : null,
        state: s
      }
    },
    async get(t, s) {
      const n = await r.blockchain.execGetMethodForBlockchainAccount(e.address.toRawString(), t, {
        args: s == null ? void 0 : s.map(Is.TupleItemToTonapiString)
      });
      if (!n.success || n.exit_code !== 0) throw new Error;
      return {
        stack: new Ce.TupleReader(n.stack.map(Is.TvmStackRecordToTupleItem))
      }
    },
    async external(t) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    },
    async internal(t, s) {
      let o = !0;
      s.bounce !== null && s.bounce !== void 0 && (o = s.bounce);
      let i;
      typeof s.value == "string" ? i = (0, Ce.toNano)(s.value) : i = s.value;
      let c = null;
      typeof s.body == "string" ? c = (0, Ce.comment)(s.body) : s.body && (c = s.body), await t.send({
        to: e.address,
        value: i,
        bounce: o,
        sendMode: s.sendMode,
        init: null,
        body: c
      })
    },
    open(t) {
      return (0, Ce.openContract)(t, s => Er(r, s))
    },
    async getTransactions(t, s, n, o) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    }
  }
}
var Cr = {},
  qe = {};
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.delay = qe.unixtime = void 0;
const Gi = () => Math.floor(Date.now() / 1e3);
qe.unixtime = Gi;
const Di = r => new Promise(e => {
  setTimeout(() => e(), r)
});
qe.delay = Di;
Object.defineProperty(Cr, "__esModule", {
  value: !0
});
Cr.tonConnectSender = Mi;
const He = R,
  Fi = qe;

function Mi(r) {
  let e;
  const t = [];
  return {
    get address() {
      var n;
      const s = (n = r.account) == null ? void 0 : n.address;
      return s ? He.Address.parse(s) : void 0
    },
    async send(s) {
      var f;
      const n = (0, Fi.unixtime)() + 600,
        o = s.to.toString({
          urlSafe: !0,
          bounceable: !0
        }),
        i = (f = this.address) == null ? void 0 : f.toRawString(),
        c = s.value.toString();
      let d;
      s.init && (d = (0, He.beginCell)().store((0, He.storeStateInit)(s.init)).endCell().toBoc().toString("base64"));
      let u;
      s.body && (u = s.body.toBoc().toString("base64"));
      const a = await r.sendTransaction({
          validUntil: n,
          from: i,
          messages: [{
            address: o,
            amount: c,
            stateInit: d,
            payload: u
          }]
        }),
        m = He.Cell.fromBase64(a.boc);
      e = {
        msg: m,
        hash: m.hash().toString("hex")
      }, t.forEach(y => y(e))
    },
    async getResult() {
      return new Promise(s => {
        if (e) {
          s(e);
          return
        }
        t.push(s)
      })
    }
  }
}
var _o = {};
Object.defineProperty(_o, "__esModule", {
  value: !0
});
var vt = {};
Object.defineProperty(vt, "__esModule", {
  value: !0
});
vt.packReferralConfig = Ji;
vt.unpackReferralConfig = Wi;
const Li = h,
  vo = re;

function Ji(r) {
  let e = (0, Li.beginCell)().storeUint((0, vo.crc32str)("ref_v1"), 32).storeAddress(r.partner);
  if (r.platformTag && e.storeAddress(r.platformTag), r.extraTag) {
    if (!r.platformTag) throw new Error("extraTag should only be set if platformTag is present");
    e.storeAddress(r.extraTag)
  }
  return e.endCell()
}

function Wi(r) {
  let e = r.beginParse();
  if (e.loadUint(32) !== (0, vo.crc32str)("ref_v1")) throw new Error("Unknown referral format");
  let s = e.loadAddress(),
    n, o;
  return e.remainingBits > 0 && (n = e.loadAddress()), e.remainingBits > 0 && (o = e.loadAddress()), {
    partner: s,
    platformTag: n,
    extraTag: o
  }
}(function(r) {
  var e = U && U.__createBinding || (Object.create ? function(o, i, c, d) {
      d === void 0 && (d = c);
      var u = Object.getOwnPropertyDescriptor(i, c);
      (!u || ("get" in u ? !i.__esModule : u.writable || u.configurable)) && (u = {
        enumerable: !0,
        get: function() {
          return i[c]
        }
      }), Object.defineProperty(o, d, u)
    } : function(o, i, c, d) {
      d === void 0 && (d = c), o[d] = i[c]
    }),
    t = U && U.__exportStar || function(o, i) {
      for (var c in o) c !== "default" && !Object.prototype.hasOwnProperty.call(i, c) && e(i, o, c)
    };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.crc32 = r.crc32str = r.tonConnectSender = void 0, t(mt, r), t(_t, r);
  var s = Cr;
  Object.defineProperty(r, "tonConnectSender", {
    enumerable: !0,
    get: function() {
      return s.tonConnectSender
    }
  });
  var n = re;
  Object.defineProperty(r, "crc32str", {
    enumerable: !0,
    get: function() {
      return n.crc32str
    }
  }), Object.defineProperty(r, "crc32", {
    enumerable: !0,
    get: function() {
      return n.crc32
    }
  }), t(_o, r), t(Oe, r), t(ke, r), t(Re, r), t(fe, r), t(vt, r)
})(lo);
var S = {},
  Pe = function(r) {
    return r && r.Math === Math && r
  },
  G = Pe(typeof globalThis == "object" && globalThis) || Pe(typeof window == "object" && window) || Pe(typeof self == "object" && self) || Pe(typeof U == "object" && U) || Pe(typeof U == "object" && U) || function() {
    return this
  }() || Function("return this")(),
  E = function(r) {
    try {
      return !!r()
    } catch {
      return !0
    }
  },
  Ui = E,
  bt = !Ui(function() {
    var r = (function() {}).bind();
    return typeof r != "function" || r.hasOwnProperty("prototype")
  }),
  Vi = bt,
  bo = Function.prototype,
  xs = bo.apply,
  Bs = bo.call,
  Ir = typeof Reflect == "object" && Reflect.apply || (Vi ? Bs.bind(xs) : function() {
    return Bs.apply(xs, arguments)
  }),
  Ao = bt,
  wo = Function.prototype,
  cr = wo.call,
  zi = Ao && wo.bind.bind(cr, cr),
  x = Ao ? zi : function(r) {
    return function() {
      return cr.apply(r, arguments)
    }
  },
  To = x,
  Ki = To({}.toString),
  Hi = To("".slice),
  se = function(r) {
    return Hi(Ki(r), 8, -1)
  },
  Yi = se,
  Qi = x,
  $o = function(r) {
    if (Yi(r) === "Function") return Qi(r)
  },
  It = typeof document == "object" && document.all,
  O = typeof It > "u" && It !== void 0 ? function(r) {
    return typeof r == "function" || r === It
  } : function(r) {
    return typeof r == "function"
  },
  So = {},
  Zi = E,
  Q = !Zi(function() {
    return Object.defineProperty({}, 1, {
      get: function() {
        return 7
      }
    })[1] !== 7
  }),
  Xi = bt,
  Ye = Function.prototype.call,
  ye = Xi ? Ye.bind(Ye) : function() {
    return Ye.apply(Ye, arguments)
  },
  qo = {},
  ko = {}.propertyIsEnumerable,
  jo = Object.getOwnPropertyDescriptor,
  ec = jo && !ko.call({
    1: 2
  }, 1);
qo.f = ec ? function(e) {
  var t = jo(this, e);
  return !!t && t.enumerable
} : ko;
var xr = function(r, e) {
    return {
      enumerable: !(r & 1),
      configurable: !(r & 2),
      writable: !(r & 4),
      value: e
    }
  },
  tc = x,
  rc = E,
  sc = se,
  xt = Object,
  nc = tc("".split),
  oc = rc(function() {
    return !xt("z").propertyIsEnumerable(0)
  }) ? function(r) {
    return sc(r) === "String" ? nc(r, "") : xt(r)
  } : xt,
  Po = function(r) {
    return r == null
  },
  ac = Po,
  ic = TypeError,
  At = function(r) {
    if (ac(r)) throw new ic("Can't call method on " + r);
    return r
  },
  cc = oc,
  dc = At,
  Ge = function(r) {
    return cc(dc(r))
  },
  lc = O,
  V = function(r) {
    return typeof r == "object" ? r !== null : lc(r)
  },
  De = {},
  Bt = De,
  Rt = G,
  uc = O,
  Rs = function(r) {
    return uc(r) ? r : void 0
  },
  Fe = function(r, e) {
    return arguments.length < 2 ? Rs(Bt[r]) || Rs(Rt[r]) : Bt[r] && Bt[r][e] || Rt[r] && Rt[r][e]
  },
  pc = x,
  mc = pc({}.isPrototypeOf),
  hc = G,
  Os = hc.navigator,
  Ns = Os && Os.userAgent,
  fc = Ns ? String(Ns) : "",
  Eo = G,
  Ot = fc,
  Gs = Eo.process,
  Ds = Eo.Deno,
  Fs = Gs && Gs.versions || Ds && Ds.version,
  Ms = Fs && Fs.v8,
  L, dt;
Ms && (L = Ms.split("."), dt = L[0] > 0 && L[0] < 4 ? 1 : +(L[0] + L[1]));
!dt && Ot && (L = Ot.match(/Edge\/(\d+)/), (!L || L[1] >= 74) && (L = Ot.match(/Chrome\/(\d+)/), L && (dt = +L[1])));
var yc = dt,
  Ls = yc,
  gc = E,
  _c = G,
  vc = _c.String,
  wt = !!Object.getOwnPropertySymbols && !gc(function() {
    var r = Symbol("symbol detection");
    return !vc(r) || !(Object(r) instanceof Symbol) || !Symbol.sham && Ls && Ls < 41
  }),
  bc = wt,
  Co = bc && !Symbol.sham && typeof Symbol.iterator == "symbol",
  Ac = Fe,
  wc = O,
  Tc = mc,
  $c = Co,
  Sc = Object,
  Br = $c ? function(r) {
    return typeof r == "symbol"
  } : function(r) {
    var e = Ac("Symbol");
    return wc(e) && Tc(e.prototype, Sc(r))
  },
  qc = String,
  kc = function(r) {
    try {
      return qc(r)
    } catch {
      return "Object"
    }
  },
  jc = O,
  Pc = kc,
  Ec = TypeError,
  Io = function(r) {
    if (jc(r)) return r;
    throw new Ec(Pc(r) + " is not a function")
  },
  Cc = Io,
  Ic = Po,
  xc = function(r, e) {
    var t = r[e];
    return Ic(t) ? void 0 : Cc(t)
  },
  Nt = ye,
  Gt = O,
  Dt = V,
  Bc = TypeError,
  Rc = function(r, e) {
    var t, s;
    if (e === "string" && Gt(t = r.toString) && !Dt(s = Nt(t, r)) || Gt(t = r.valueOf) && !Dt(s = Nt(t, r)) || e !== "string" && Gt(t = r.toString) && !Dt(s = Nt(t, r))) return s;
    throw new Bc("Can't convert object to primitive value")
  },
  xo = {
    exports: {}
  },
  Js = G,
  Oc = Object.defineProperty,
  Nc = function(r, e) {
    try {
      Oc(Js, r, {
        value: e,
        configurable: !0,
        writable: !0
      })
    } catch {
      Js[r] = e
    }
    return e
  },
  Gc = G,
  Dc = Nc,
  Ws = "__core-js_shared__",
  Us = xo.exports = Gc[Ws] || Dc(Ws, {});
(Us.versions || (Us.versions = [])).push({
  version: "3.38.1",
  mode: "pure",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Bo = xo.exports,
  Vs = Bo,
  Ro = function(r, e) {
    return Vs[r] || (Vs[r] = e || {})
  },
  Fc = At,
  Mc = Object,
  Rr = function(r) {
    return Mc(Fc(r))
  },
  Lc = x,
  Jc = Rr,
  Wc = Lc({}.hasOwnProperty),
  ne = Object.hasOwn || function(e, t) {
    return Wc(Jc(e), t)
  },
  Uc = x,
  Vc = 0,
  zc = Math.random(),
  Kc = Uc(1 .toString),
  Tt = function(r) {
    return "Symbol(" + (r === void 0 ? "" : r) + ")_" + Kc(++Vc + zc, 36)
  },
  Hc = G,
  Yc = Ro,
  zs = ne,
  Qc = Tt,
  Zc = wt,
  Xc = Co,
  $e = Hc.Symbol,
  Ft = Yc("wks"),
  ed = Xc ? $e.for || $e : $e && $e.withoutSetter || Qc,
  Or = function(r) {
    return zs(Ft, r) || (Ft[r] = Zc && zs($e, r) ? $e[r] : ed("Symbol." + r)), Ft[r]
  },
  td = ye,
  Ks = V,
  Hs = Br,
  rd = xc,
  sd = Rc,
  nd = Or,
  od = TypeError,
  ad = nd("toPrimitive"),
  Oo = function(r, e) {
    if (!Ks(r) || Hs(r)) return r;
    var t = rd(r, ad),
      s;
    if (t) {
      if (e === void 0 && (e = "default"), s = td(t, r, e), !Ks(s) || Hs(s)) return s;
      throw new od("Can't convert object to primitive value")
    }
    return e === void 0 && (e = "number"), sd(r, e)
  },
  id = Oo,
  cd = Br,
  No = function(r) {
    var e = id(r, "string");
    return cd(e) ? e : e + ""
  },
  dd = G,
  Ys = V,
  dr = dd.document,
  ld = Ys(dr) && Ys(dr.createElement),
  Go = function(r) {
    return ld ? dr.createElement(r) : {}
  },
  ud = Q,
  pd = E,
  md = Go,
  Do = !ud && !pd(function() {
    return Object.defineProperty(md("div"), "a", {
      get: function() {
        return 7
      }
    }).a !== 7
  }),
  hd = Q,
  fd = ye,
  yd = qo,
  gd = xr,
  _d = Ge,
  vd = No,
  bd = ne,
  Ad = Do,
  Qs = Object.getOwnPropertyDescriptor;
So.f = hd ? Qs : function(e, t) {
  if (e = _d(e), t = vd(t), Ad) try {
    return Qs(e, t)
  } catch {}
  if (bd(e, t)) return gd(!fd(yd.f, e, t), e[t])
};
var wd = E,
  Td = O,
  $d = /#|\.prototype\./,
  Me = function(r, e) {
    var t = qd[Sd(r)];
    return t === jd ? !0 : t === kd ? !1 : Td(e) ? wd(e) : !!e
  },
  Sd = Me.normalize = function(r) {
    return String(r).replace($d, ".").toLowerCase()
  },
  qd = Me.data = {},
  kd = Me.NATIVE = "N",
  jd = Me.POLYFILL = "P",
  Pd = Me,
  Zs = $o,
  Ed = Io,
  Cd = bt,
  Id = Zs(Zs.bind),
  xd = function(r, e) {
    return Ed(r), e === void 0 ? r : Cd ? Id(r, e) : function() {
      return r.apply(e, arguments)
    }
  },
  Le = {},
  Bd = Q,
  Rd = E,
  Fo = Bd && Rd(function() {
    return Object.defineProperty(function() {}, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42
  }),
  Od = V,
  Nd = String,
  Gd = TypeError,
  Nr = function(r) {
    if (Od(r)) return r;
    throw new Gd(Nd(r) + " is not an object")
  },
  Dd = Q,
  Fd = Do,
  Md = Fo,
  Qe = Nr,
  Xs = No,
  Ld = TypeError,
  Mt = Object.defineProperty,
  Jd = Object.getOwnPropertyDescriptor,
  Lt = "enumerable",
  Jt = "configurable",
  Wt = "writable";
Le.f = Dd ? Md ? function(e, t, s) {
  if (Qe(e), t = Xs(t), Qe(s), typeof e == "function" && t === "prototype" && "value" in s && Wt in s && !s[Wt]) {
    var n = Jd(e, t);
    n && n[Wt] && (e[t] = s.value, s = {
      configurable: Jt in s ? s[Jt] : n[Jt],
      enumerable: Lt in s ? s[Lt] : n[Lt],
      writable: !1
    })
  }
  return Mt(e, t, s)
} : Mt : function(e, t, s) {
  if (Qe(e), t = Xs(t), Qe(s), Fd) try {
    return Mt(e, t, s)
  } catch {}
  if ("get" in s || "set" in s) throw new Ld("Accessors not supported");
  return "value" in s && (e[t] = s.value), e
};
var Wd = Q,
  Ud = Le,
  Vd = xr,
  Mo = Wd ? function(r, e, t) {
    return Ud.f(r, e, Vd(1, t))
  } : function(r, e, t) {
    return r[e] = t, r
  },
  Ee = G,
  zd = Ir,
  Kd = $o,
  Hd = O,
  Yd = So.f,
  Qd = Pd,
  be = De,
  Zd = xd,
  Ae = Mo,
  en = ne,
  Xd = function(r) {
    var e = function(t, s, n) {
      if (this instanceof e) {
        switch (arguments.length) {
          case 0:
            return new r;
          case 1:
            return new r(t);
          case 2:
            return new r(t, s)
        }
        return new r(t, s, n)
      }
      return zd(r, this, arguments)
    };
    return e.prototype = r.prototype, e
  },
  oe = function(r, e) {
    var t = r.target,
      s = r.global,
      n = r.stat,
      o = r.proto,
      i = s ? Ee : n ? Ee[t] : Ee[t] && Ee[t].prototype,
      c = s ? be : be[t] || Ae(be, t, {})[t],
      d = c.prototype,
      u, a, m, f, y, q, A, _, v;
    for (f in e) u = Qd(s ? f : t + (n ? "." : "#") + f, r.forced), a = !u && i && en(i, f), q = c[f], a && (r.dontCallGetSet ? (v = Yd(i, f), A = v && v.value) : A = i[f]), y = a && A ? A : e[f], !(!u && !o && typeof q == typeof y) && (r.bind && a ? _ = Zd(y, Ee) : r.wrap && a ? _ = Xd(y) : o && Hd(y) ? _ = Kd(y) : _ = y, (r.sham || y && y.sham || q && q.sham) && Ae(_, "sham", !0), Ae(c, f, _), o && (m = t + "Prototype", en(be, m) || Ae(be, m, {}), Ae(be[m], f, y), r.real && d && (u || !d[f]) && Ae(d, f, y)))
  },
  el = Math.ceil,
  tl = Math.floor,
  rl = Math.trunc || function(e) {
    var t = +e;
    return (t > 0 ? tl : el)(t)
  },
  sl = rl,
  Gr = function(r) {
    var e = +r;
    return e !== e || e === 0 ? 0 : sl(e)
  },
  nl = Gr,
  ol = Math.max,
  al = Math.min,
  il = function(r, e) {
    var t = nl(r);
    return t < 0 ? ol(t + e, 0) : al(t, e)
  },
  cl = Gr,
  dl = Math.min,
  Lo = function(r) {
    var e = cl(r);
    return e > 0 ? dl(e, 9007199254740991) : 0
  },
  ll = Lo,
  Jo = function(r) {
    return ll(r.length)
  },
  ul = Ge,
  pl = il,
  ml = Jo,
  tn = function(r) {
    return function(e, t, s) {
      var n = ul(e),
        o = ml(n);
      if (o === 0) return !r && -1;
      var i = pl(s, o),
        c;
      if (r && t !== t) {
        for (; o > i;)
          if (c = n[i++], c !== c) return !0
      } else
        for (; o > i; i++)
          if ((r || i in n) && n[i] === t) return r || i || 0;
      return !r && -1
    }
  },
  hl = {
    includes: tn(!0),
    indexOf: tn(!1)
  },
  $t = {},
  fl = x,
  Ut = ne,
  yl = Ge,
  gl = hl.indexOf,
  _l = $t,
  rn = fl([].push),
  Wo = function(r, e) {
    var t = yl(r),
      s = 0,
      n = [],
      o;
    for (o in t) !Ut(_l, o) && Ut(t, o) && rn(n, o);
    for (; e.length > s;) Ut(t, o = e[s++]) && (~gl(n, o) || rn(n, o));
    return n
  },
  Dr = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
  vl = Wo,
  bl = Dr,
  Uo = Object.keys || function(e) {
    return vl(e, bl)
  },
  Al = oe,
  wl = Rr,
  Vo = Uo,
  Tl = E,
  $l = Tl(function() {
    Vo(1)
  });
Al({
  target: "Object",
  stat: !0,
  forced: $l
}, {
  keys: function(e) {
    return Vo(wl(e))
  }
});
var Sl = se,
  zo = Array.isArray || function(e) {
    return Sl(e) === "Array"
  },
  ql = Or,
  kl = ql("toStringTag"),
  Ko = {};
Ko[kl] = "z";
var jl = String(Ko) === "[object z]",
  Pl = jl,
  El = O,
  st = se,
  Cl = Or,
  Il = Cl("toStringTag"),
  xl = Object,
  Bl = st(function() {
    return arguments
  }()) === "Arguments",
  Rl = function(r, e) {
    try {
      return r[e]
    } catch {}
  },
  Ol = Pl ? st : function(r) {
    var e, t, s;
    return r === void 0 ? "Undefined" : r === null ? "Null" : typeof(t = Rl(e = xl(r), Il)) == "string" ? t : Bl ? st(e) : (s = st(e)) === "Object" && El(e.callee) ? "Arguments" : s
  },
  Nl = Ol,
  Gl = String,
  Je = function(r) {
    if (Nl(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return Gl(r)
  },
  Dl = Q,
  Fl = Le,
  Ml = xr,
  Ho = function(r, e, t) {
    Dl ? Fl.f(r, e, Ml(0, t)) : r[e] = t
  },
  Fr = x,
  Ll = ne,
  Ze = SyntaxError,
  Jl = parseInt,
  Wl = String.fromCharCode,
  Ul = Fr("".charAt),
  sn = Fr("".slice),
  nn = Fr(/./.exec),
  on = {
    '\\"': '"',
    "\\\\": "\\",
    "\\/": "/",
    "\\b": "\b",
    "\\f": "\f",
    "\\n": `
`,
    "\\r": "\r",
    "\\t": "	"
  },
  Vl = /^[\da-f]{4}$/i,
  zl = /^[\u0000-\u001F]$/,
  Yo = function(r, e) {
    for (var t = !0, s = ""; e < r.length;) {
      var n = Ul(r, e);
      if (n === "\\") {
        var o = sn(r, e, e + 2);
        if (Ll(on, o)) s += on[o], e += 2;
        else if (o === "\\u") {
          e += 2;
          var i = sn(r, e, e + 4);
          if (!nn(Vl, i)) throw new Ze("Bad Unicode escape at: " + e);
          s += Wl(Jl(i, 16)), e += 4
        } else throw new Ze('Unknown escape sequence: "' + o + '"')
      } else if (n === '"') {
        t = !1, e++;
        break
      } else {
        if (nn(zl, n)) throw new Ze("Bad control character in string literal at: " + e);
        s += n, e++
      }
    }
    if (t) throw new Ze("Unterminated string at: " + e);
    return {
      value: s,
      end: e
    }
  },
  Kl = oe,
  Hl = Q,
  Mr = G,
  Yl = Fe,
  St = x,
  Ql = ye,
  Qo = O,
  Zl = V,
  Xl = zo,
  eu = ne,
  tu = Je,
  an = Jo,
  lr = Ho,
  Zo = E,
  ru = Yo,
  su = wt,
  cn = Mr.JSON,
  nu = Mr.Number,
  Te = Mr.SyntaxError,
  Lr = cn && cn.parse,
  ou = Yl("Object", "keys"),
  au = Object.getOwnPropertyDescriptor,
  P = St("".charAt),
  Vt = St("".slice),
  zt = St(/./.exec),
  dn = St([].push),
  Kt = /^\d$/,
  iu = /^[1-9]$/,
  cu = /^[\d-]$/,
  Ie = /^[\t\n\r ]$/,
  Ht = 0,
  ln = 1,
  du = function(r, e) {
    r = tu(r);
    var t = new pr(r, 0),
      s = t.parse(),
      n = s.value,
      o = t.skip(Ie, s.end);
    if (o < r.length) throw new Te('Unexpected extra character: "' + P(r, o) + '" after the parsed data at: ' + o);
    return Qo(e) ? ur({
      "": n
    }, "", e, s) : n
  },
  ur = function(r, e, t, s) {
    var n = r[e],
      o = s && n === s.value,
      i = o && typeof s.source == "string" ? {
        source: s.source
      } : {},
      c, d, u, a, m;
    if (Zl(n)) {
      var f = Xl(n),
        y = o ? s.nodes : f ? [] : {};
      if (f)
        for (c = y.length, u = an(n), a = 0; a < u; a++) un(n, a, ur(n, "" + a, t, a < c ? y[a] : void 0));
      else
        for (d = ou(n), u = an(d), a = 0; a < u; a++) m = d[a], un(n, m, ur(n, m, t, eu(y, m) ? y[m] : void 0))
    }
    return Ql(t, r, e, n, i)
  },
  un = function(r, e, t) {
    if (Hl) {
      var s = au(r, e);
      if (s && !s.configurable) return
    }
    t === void 0 ? delete r[e] : lr(r, e, t)
  },
  lu = function(r, e, t, s) {
    this.value = r, this.end = e, this.source = t, this.nodes = s
  },
  pr = function(r, e) {
    this.source = r, this.index = e
  };
pr.prototype = {
  fork: function(r) {
    return new pr(this.source, r)
  },
  parse: function() {
    var r = this.source,
      e = this.skip(Ie, this.index),
      t = this.fork(e),
      s = P(r, e);
    if (zt(cu, s)) return t.number();
    switch (s) {
      case "{":
        return t.object();
      case "[":
        return t.array();
      case '"':
        return t.string();
      case "t":
        return t.keyword(!0);
      case "f":
        return t.keyword(!1);
      case "n":
        return t.keyword(null)
    }
    throw new Te('Unexpected character: "' + s + '" at: ' + e)
  },
  node: function(r, e, t, s, n) {
    return new lu(e, s, r ? null : Vt(this.source, t, s), n)
  },
  object: function() {
    for (var r = this.source, e = this.index + 1, t = !1, s = {}, n = {}; e < r.length;) {
      if (e = this.until(['"', "}"], e), P(r, e) === "}" && !t) {
        e++;
        break
      }
      var o = this.fork(e).string(),
        i = o.value;
      e = o.end, e = this.until([":"], e) + 1, e = this.skip(Ie, e), o = this.fork(e).parse(), lr(n, i, o), lr(s, i, o.value), e = this.until([",", "}"], o.end);
      var c = P(r, e);
      if (c === ",") t = !0, e++;
      else if (c === "}") {
        e++;
        break
      }
    }
    return this.node(ln, s, this.index, e, n)
  },
  array: function() {
    for (var r = this.source, e = this.index + 1, t = !1, s = [], n = []; e < r.length;) {
      if (e = this.skip(Ie, e), P(r, e) === "]" && !t) {
        e++;
        break
      }
      var o = this.fork(e).parse();
      if (dn(n, o), dn(s, o.value), e = this.until([",", "]"], o.end), P(r, e) === ",") t = !0, e++;
      else if (P(r, e) === "]") {
        e++;
        break
      }
    }
    return this.node(ln, s, this.index, e, n)
  },
  string: function() {
    var r = this.index,
      e = ru(this.source, this.index + 1);
    return this.node(Ht, e.value, r, e.end)
  },
  number: function() {
    var r = this.source,
      e = this.index,
      t = e;
    if (P(r, t) === "-" && t++, P(r, t) === "0") t++;
    else if (zt(iu, P(r, t))) t = this.skip(Kt, t + 1);
    else throw new Te("Failed to parse number at: " + t);
    if (P(r, t) === "." && (t = this.skip(Kt, t + 1)), P(r, t) === "e" || P(r, t) === "E") {
      t++, (P(r, t) === "+" || P(r, t) === "-") && t++;
      var s = t;
      if (t = this.skip(Kt, t), s === t) throw new Te("Failed to parse number's exponent value at: " + t)
    }
    return this.node(Ht, nu(Vt(r, e, t)), e, t)
  },
  keyword: function(r) {
    var e = "" + r,
      t = this.index,
      s = t + e.length;
    if (Vt(this.source, t, s) !== e) throw new Te("Failed to parse value at: " + t);
    return this.node(Ht, r, t, s)
  },
  skip: function(r, e) {
    for (var t = this.source; e < t.length && zt(r, P(t, e)); e++);
    return e
  },
  until: function(r, e) {
    e = this.skip(Ie, e);
    for (var t = P(this.source, e), s = 0; s < r.length; s++)
      if (r[s] === t) return e;
    throw new Te('Unexpected character: "' + t + '" at: ' + e)
  }
};
var uu = Zo(function() {
    var r = "9007199254740993",
      e;
    return Lr(r, function(t, s, n) {
      e = n.source
    }), e !== r
  }),
  pu = su && !Zo(function() {
    return 1 / Lr("-0 	") !== -1 / 0
  });
Kl({
  target: "JSON",
  stat: !0,
  forced: uu
}, {
  parse: function(e, t) {
    return pu && !Qo(t) ? Lr(e) : du(e, t)
  }
});
var mu = De,
  hu = mu.JSON.parse,
  Xo = {},
  fu = Q,
  yu = Fo,
  gu = Le,
  _u = Nr,
  vu = Ge,
  bu = Uo;
Xo.f = fu && !yu ? Object.defineProperties : function(e, t) {
  _u(e);
  for (var s = vu(t), n = bu(t), o = n.length, i = 0, c; o > i;) gu.f(e, c = n[i++], s[c]);
  return e
};
var Au = Fe,
  wu = Au("document", "documentElement"),
  Tu = Ro,
  $u = Tt,
  pn = Tu("keys"),
  ea = function(r) {
    return pn[r] || (pn[r] = $u(r))
  },
  Su = Nr,
  qu = Xo,
  mn = Dr,
  ku = $t,
  ju = wu,
  Pu = Go,
  Eu = ea,
  hn = ">",
  fn = "<",
  mr = "prototype",
  hr = "script",
  ta = Eu("IE_PROTO"),
  Yt = function() {},
  ra = function(r) {
    return fn + hr + hn + r + fn + "/" + hr + hn
  },
  yn = function(r) {
    r.write(ra("")), r.close();
    var e = r.parentWindow.Object;
    return r = null, e
  },
  Cu = function() {
    var r = Pu("iframe"),
      e = "java" + hr + ":",
      t;
    return r.style.display = "none", ju.appendChild(r), r.src = String(e), t = r.contentWindow.document, t.open(), t.write(ra("document.F=Object")), t.close(), t.F
  },
  Xe, nt = function() {
    try {
      Xe = new ActiveXObject("htmlfile")
    } catch {}
    nt = typeof document < "u" ? document.domain && Xe ? yn(Xe) : Cu() : yn(Xe);
    for (var r = mn.length; r--;) delete nt[mr][mn[r]];
    return nt()
  };
ku[ta] = !0;
var Iu = Object.create || function(e, t) {
    var s;
    return e !== null ? (Yt[mr] = Su(e), s = new Yt, Yt[mr] = null, s[ta] = e) : s = nt(), t === void 0 ? s : qu.f(s, t)
  },
  xu = oe,
  Bu = Q,
  Ru = Iu;
xu({
  target: "Object",
  stat: !0,
  sham: !Bu
}, {
  create: Ru
});
var Ou = E,
  Jr = !Ou(function() {
    return Object.isExtensible(Object.preventExtensions({}))
  }),
  sa = {
    exports: {}
  },
  Wr = {},
  Nu = Wo,
  Gu = Dr,
  Du = Gu.concat("length", "prototype");
Wr.f = Object.getOwnPropertyNames || function(e) {
  return Nu(e, Du)
};
var na = {},
  Fu = x,
  oa = Fu([].slice),
  Mu = se,
  Lu = Ge,
  aa = Wr.f,
  Ju = oa,
  ia = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
  Wu = function(r) {
    try {
      return aa(r)
    } catch {
      return Ju(ia)
    }
  };
na.f = function(e) {
  return ia && Mu(e) === "Window" ? Wu(e) : aa(Lu(e))
};
var Uu = E,
  Vu = Uu(function() {
    if (typeof ArrayBuffer == "function") {
      var r = new ArrayBuffer(8);
      Object.isExtensible(r) && Object.defineProperty(r, "a", {
        value: 8
      })
    }
  }),
  zu = E,
  Ku = V,
  Hu = se,
  gn = Vu,
  ot = Object.isExtensible,
  Yu = zu(function() {
    ot(1)
  }),
  Qu = Yu || gn ? function(e) {
    return !Ku(e) || gn && Hu(e) === "ArrayBuffer" ? !1 : ot ? ot(e) : !0
  } : ot,
  Zu = oe,
  Xu = x,
  ep = $t,
  tp = V,
  Ur = ne,
  rp = Le.f,
  _n = Wr,
  sp = na,
  Vr = Qu,
  np = Tt,
  op = Jr,
  ca = !1,
  Y = np("meta"),
  ap = 0,
  zr = function(r) {
    rp(r, Y, {
      value: {
        objectID: "O" + ap++,
        weakData: {}
      }
    })
  },
  ip = function(r, e) {
    if (!tp(r)) return typeof r == "symbol" ? r : (typeof r == "string" ? "S" : "P") + r;
    if (!Ur(r, Y)) {
      if (!Vr(r)) return "F";
      if (!e) return "E";
      zr(r)
    }
    return r[Y].objectID
  },
  cp = function(r, e) {
    if (!Ur(r, Y)) {
      if (!Vr(r)) return !0;
      if (!e) return !1;
      zr(r)
    }
    return r[Y].weakData
  },
  dp = function(r) {
    return op && ca && Vr(r) && !Ur(r, Y) && zr(r), r
  },
  lp = function() {
    up.enable = function() {}, ca = !0;
    var r = _n.f,
      e = Xu([].splice),
      t = {};
    t[Y] = 1, r(t).length && (_n.f = function(s) {
      for (var n = r(s), o = 0, i = n.length; o < i; o++)
        if (n[o] === Y) {
          e(n, o, 1);
          break
        } return n
    }, Zu({
      target: "Object",
      stat: !0,
      forced: !0
    }, {
      getOwnPropertyNames: sp.f
    }))
  },
  up = sa.exports = {
    enable: lp,
    fastKey: ip,
    getWeakData: cp,
    onFreeze: dp
  };
ep[Y] = !0;
var pp = sa.exports,
  mp = oe,
  hp = Jr,
  fp = E,
  yp = V,
  gp = pp.onFreeze,
  fr = Object.freeze,
  _p = fp(function() {
    fr(1)
  });
mp({
  target: "Object",
  stat: !0,
  forced: _p,
  sham: !hp
}, {
  freeze: function(e) {
    return fr && yp(e) ? fr(gp(e)) : e
  }
});
var vp = E,
  bp = !vp(function() {
    var r = "9007199254740993",
      e = JSON.rawJSON(r);
    return !JSON.isRawJSON(e) || JSON.stringify(e) !== r
  }),
  Ap = G,
  wp = O,
  vn = Ap.WeakMap,
  Tp = wp(vn) && /native code/.test(String(vn)),
  $p = Tp,
  da = G,
  Sp = V,
  qp = Mo,
  Qt = ne,
  Zt = Bo,
  kp = ea,
  jp = $t,
  bn = "Object already initialized",
  yr = da.TypeError,
  Pp = da.WeakMap,
  lt, xe, ut, Ep = function(r) {
    return ut(r) ? xe(r) : lt(r, {})
  },
  Cp = function(r) {
    return function(e) {
      var t;
      if (!Sp(e) || (t = xe(e)).type !== r) throw new yr("Incompatible receiver, " + r + " required");
      return t
    }
  };
if ($p || Zt.state) {
  var J = Zt.state || (Zt.state = new Pp);
  J.get = J.get, J.has = J.has, J.set = J.set, lt = function(r, e) {
    if (J.has(r)) throw new yr(bn);
    return e.facade = r, J.set(r, e), e
  }, xe = function(r) {
    return J.get(r) || {}
  }, ut = function(r) {
    return J.has(r)
  }
} else {
  var we = kp("state");
  jp[we] = !0, lt = function(r, e) {
    if (Qt(r, we)) throw new yr(bn);
    return e.facade = r, qp(r, we, e), e
  }, xe = function(r) {
    return Qt(r, we) ? r[we] : {}
  }, ut = function(r) {
    return Qt(r, we)
  }
}
var la = {
    set: lt,
    get: xe,
    has: ut,
    enforce: Ep,
    getterFor: Cp
  },
  Ip = V,
  xp = la.get,
  Bp = function(e) {
    if (!Ip(e)) return !1;
    var t = xp(e);
    return !!t && t.type === "RawJSON"
  },
  Rp = x,
  An = zo,
  Op = O,
  wn = se,
  Np = Je,
  Tn = Rp([].push),
  ua = function(r) {
    if (Op(r)) return r;
    if (An(r)) {
      for (var e = r.length, t = [], s = 0; s < e; s++) {
        var n = r[s];
        typeof n == "string" ? Tn(t, n) : (typeof n == "number" || wn(n) === "Number" || wn(n) === "String") && Tn(t, Np(n))
      }
      var o = t.length,
        i = !0;
      return function(c, d) {
        if (i) return i = !1, d;
        if (An(this)) return d;
        for (var u = 0; u < o; u++)
          if (t[u] === c) return d
      }
    }
  },
  pa = oe,
  Gp = Jr,
  ma = bp,
  qt = Fe,
  Dp = ye,
  Kr = x,
  Fp = O,
  Mp = Bp,
  Lp = Je,
  Jp = Ho,
  Wp = Yo,
  Up = ua,
  Vp = Tt,
  zp = la.set,
  Kp = String,
  $n = SyntaxError,
  Hp = qt("JSON", "parse"),
  Sn = qt("JSON", "stringify"),
  Yp = qt("Object", "create"),
  Qp = qt("Object", "freeze"),
  gr = Kr("".charAt),
  Xt = Kr("".slice),
  Zp = Kr([].push),
  _r = Vp(),
  qn = _r.length,
  kn = "Unacceptable as raw JSON",
  jn = function(r) {
    return r === " " || r === "	" || r === `
` || r === "\r"
  };
pa({
  target: "JSON",
  stat: !0,
  forced: !ma
}, {
  rawJSON: function(e) {
    var t = Lp(e);
    if (t === "" || jn(gr(t, 0)) || jn(gr(t, t.length - 1))) throw new $n(kn);
    var s = Hp(t);
    if (typeof s == "object" && s !== null) throw new $n(kn);
    var n = Yp(null);
    return zp(n, {
      type: "RawJSON"
    }), Jp(n, "rawJSON", t), Gp ? Qp(n) : n
  }
});
Sn && pa({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: !ma
}, {
  stringify: function(e, t, s) {
    var n = Up(t),
      o = [],
      i = Sn(e, function(y, q) {
        var A = Fp(n) ? Dp(n, this, Kp(y), q) : q;
        return Mp(A) ? _r + (Zp(o, A.rawJSON) - 1) : A
      }, s);
    if (typeof i != "string") return i;
    for (var c = "", d = i.length, u = 0; u < d; u++) {
      var a = gr(i, u);
      if (a === '"') {
        var m = Wp(i, ++u).end - 1,
          f = Xt(i, u, m);
        c += Xt(f, 0, qn) === _r ? o[Xt(f, qn)] : '"' + f + '"', u = m
      } else c += a
    }
    return c
  }
});
var Xp = De,
  em = Xp.JSON.rawJSON,
  tm = Gr,
  rm = Je,
  sm = At,
  nm = RangeError,
  om = function(e) {
    var t = rm(sm(this)),
      s = "",
      n = tm(e);
    if (n < 0 || n === 1 / 0) throw new nm("Wrong number of repetitions");
    for (; n > 0;
      (n >>>= 1) && (t += t)) n & 1 && (s += t);
    return s
  },
  ha = x,
  am = Lo,
  Pn = Je,
  im = om,
  cm = At,
  dm = ha(im),
  lm = ha("".slice),
  um = Math.ceil,
  En = function(r) {
    return function(e, t, s) {
      var n = Pn(cm(e)),
        o = am(t),
        i = n.length,
        c = s === void 0 ? " " : Pn(s),
        d, u;
      return o <= i || c === "" ? n : (d = o - i, u = dm(c, um(d / c.length)), u.length > d && (u = lm(u, 0, d)), r ? n + u : u + n)
    }
  },
  pm = {
    start: En(!1),
    end: En(!0)
  },
  ae = x,
  Cn = E,
  ue = pm.start,
  mm = RangeError,
  hm = isFinite,
  fm = Math.abs,
  Z = Date.prototype,
  er = Z.toISOString,
  ym = ae(Z.getTime),
  gm = ae(Z.getUTCDate),
  _m = ae(Z.getUTCFullYear),
  vm = ae(Z.getUTCHours),
  bm = ae(Z.getUTCMilliseconds),
  Am = ae(Z.getUTCMinutes),
  wm = ae(Z.getUTCMonth),
  Tm = ae(Z.getUTCSeconds),
  $m = Cn(function() {
    return er.call(new Date(-5e13 - 1)) !== "0385-07-25T07:06:39.999Z"
  }) || !Cn(function() {
    er.call(new Date(NaN))
  }) ? function() {
    if (!hm(ym(this))) throw new mm("Invalid time value");
    var e = this,
      t = _m(e),
      s = bm(e),
      n = t < 0 ? "-" : t > 9999 ? "+" : "";
    return n + ue(fm(t), n ? 6 : 4, 0) + "-" + ue(wm(e) + 1, 2, 0) + "-" + ue(gm(e), 2, 0) + "T" + ue(vm(e), 2, 0) + ":" + ue(Am(e), 2, 0) + ":" + ue(Tm(e), 2, 0) + "." + ue(s, 3, 0) + "Z"
  } : er,
  Sm = oe,
  fa = ye,
  qm = Rr,
  km = Oo,
  jm = $m,
  Pm = se,
  Em = E,
  Cm = Em(function() {
    return new Date(NaN).toJSON() !== null || fa(Date.prototype.toJSON, {
      toISOString: function() {
        return 1
      }
    }) !== 1
  });
Sm({
  target: "Date",
  proto: !0,
  forced: Cm
}, {
  toJSON: function(e) {
    var t = qm(this),
      s = km(t, "number");
    return typeof s == "number" && !isFinite(s) ? null : !("toISOString" in t) && Pm(t) === "Date" ? fa(jm, t) : t.toISOString()
  }
});
var Im = oe,
  ya = Fe,
  ga = Ir,
  xm = ye,
  We = x,
  _a = E,
  In = O,
  xn = Br,
  va = oa,
  Bm = ua,
  Rm = wt,
  Om = String,
  te = ya("JSON", "stringify"),
  et = We(/./.exec),
  Bn = We("".charAt),
  Nm = We("".charCodeAt),
  Gm = We("".replace),
  Dm = We(1 .toString),
  Fm = /[\uD800-\uDFFF]/g,
  Rn = /^[\uD800-\uDBFF]$/,
  On = /^[\uDC00-\uDFFF]$/,
  Nn = !Rm || _a(function() {
    var r = ya("Symbol")("stringify detection");
    return te([r]) !== "[null]" || te({
      a: r
    }) !== "{}" || te(Object(r)) !== "{}"
  }),
  Gn = _a(function() {
    return te("\uDF06\uD834") !== '"\\udf06\\ud834"' || te("\uDEAD") !== '"\\udead"'
  }),
  Mm = function(r, e) {
    var t = va(arguments),
      s = Bm(e);
    if (!(!In(s) && (r === void 0 || xn(r)))) return t[1] = function(n, o) {
      if (In(s) && (o = xm(s, this, Om(n), o)), !xn(o)) return o
    }, ga(te, null, t)
  },
  Lm = function(r, e, t) {
    var s = Bn(t, e - 1),
      n = Bn(t, e + 1);
    return et(Rn, r) && !et(On, n) || et(On, r) && !et(Rn, s) ? "\\u" + Dm(Nm(r, 0), 16) : r
  };
te && Im({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: Nn || Gn
}, {
  stringify: function(e, t, s) {
    var n = va(arguments),
      o = ga(Nn ? Mm : te, null, n);
    return Gn && typeof o == "string" ? Gm(o, Fm, Lm) : o
  }
});
var vr = De,
  Jm = Ir;
vr.JSON || (vr.JSON = {
  stringify: JSON.stringify
});
var Wm = function(e, t, s) {
    return Jm(vr.JSON.stringify, null, arguments)
  },
  Um = Wm,
  Vm = Um,
  zm = Vm,
  Km = zm,
  Hr = U && U.__importDefault || function(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  };
Object.defineProperty(S, "__esModule", {
  value: !0
});
var ba = S.Api = Aa = S.TonApiClient = S.ContentType = S.PoolImplementationType = S.TrustType = S.JettonVerificationType = S.BouncePhaseType = S.ComputeSkipReason = S.AccStatusChange = S.TransactionType = S.AccountStatus = void 0,
  Dn;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(Dn || (S.AccountStatus = Dn = {}));
var Fn;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(Fn || (S.TransactionType = Fn = {}));
var Mn;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(Mn || (S.AccStatusChange = Mn = {}));
var Ln;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(Ln || (S.ComputeSkipReason = Ln = {}));
var Jn;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(Jn || (S.BouncePhaseType = Jn = {}));
var Wn;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(Wn || (S.JettonVerificationType = Wn = {}));
var Un;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(Un || (S.TrustType = Un = {}));
var Vn;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(Vn || (S.PoolImplementationType = Vn = {}));
var ee;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(ee || (S.ContentType = ee = {}));
const br = R,
  Hm = Hr(hu),
  Ym = Hr(em),
  Qm = Hr(Km),
  Zm = r => (0, Hm.default)(r, (e, t, s) => {
    if (typeof t == "number") {
      const n = s.source;
      return Number.isSafeInteger(t) || /[\.eE]/.test(n) ? t : BigInt(n)
    }
    return t
  }),
  tr = r => (0, Qm.default)(r, (e, t) => typeof t == "bigint" ? (0, Ym.default)(t.toString()) : t);
class Xm {
  constructor(e = {}) {
    p(this, "baseUrl", "https://tonapi.io");
    p(this, "securityData", null);
    p(this, "securityWorker");
    p(this, "abortControllers", new Map);
    p(this, "customFetch", (...e) => fetch(...e));
    p(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    p(this, "setSecurityData", e => {
      this.securityData = e
    });
    p(this, "contentFormatters", {
      [ee.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? tr(e) : e,
      [ee.Text]: e => e !== null && typeof e != "string" ? tr(e) : e,
      [ee.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? tr(n) : `${n}`), t
      }, new FormData),
      [ee.UrlEncoded]: e => this.toQueryString(e)
    });
    p(this, "createAbortSignal", e => {
      if (this.abortControllers.has(e)) {
        const s = this.abortControllers.get(e);
        return s ? s.signal : void 0
      }
      const t = new AbortController;
      return this.abortControllers.set(e, t), t.signal
    });
    p(this, "abortRequest", e => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e))
    });
    p(this, "request", async ({
      body: e,
      secure: t,
      path: s,
      type: n,
      query: o,
      format: i,
      baseUrl: c,
      cancelToken: d,
      ...u
    }) => {
      const a = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        m = this.mergeRequestParams(u, a),
        f = o && this.toQueryString(o),
        y = n ?? ee.Json,
        q = this.contentFormatters[y],
        A = i || m.format;
      return this.customFetch(`${c||this.baseUrl||""}${s}${f?`?${f}`:""}`, {
        ...m,
        headers: {
          ...m.headers || {},
          ...y && y !== ee.FormData ? {
            "Content-Type": y
          } : {}
        },
        signal: (d ? this.createAbortSignal(d) : m.signal) || null,
        body: typeof e > "u" || e === null ? null : q(e)
      }).then(async _ => {
        const v = _.clone();
        v.data = null, v.error = null;
        const B = A === "json" ? "text" : A,
          ie = B ? await _[B]().then(ce => (v.ok ? v.data = A === "json" ? Zm(ce) : ce : v.error = ce, v)).catch(ce => (v.error = ce, v)) : v;
        if (d && this.abortControllers.delete(d), !_.ok) throw ie;
        return ie.data
      })
    });
    if (e.apiKey) {
      const t = e.baseApiParams || {};
      e.baseApiParams = {
        ...t,
        headers: {
          ...t.headers,
          Authorization: `Bearer ${e.apiKey}`
        }
      }
    }
    Object.assign(this, e)
  }
  encodeQueryParam(e, t) {
    return `${encodeURIComponent(e)}=${encodeURIComponent(typeof t=="number"?t:`${t}`)}`
  }
  addQueryParam(e, t) {
    return this.encodeQueryParam(t, e[t])
  }
  addArrayQueryParam(e, t) {
    return e[t].map(n => this.encodeQueryParam(t, n)).join("&")
  }
  toQueryString(e) {
    const t = e || {};
    return Object.keys(t).filter(n => typeof t[n] < "u").map(n => Array.isArray(t[n]) ? this.addArrayQueryParam(t, n) : this.addQueryParam(t, n)).join("&")
  }
  addQueryParams(e) {
    const t = this.toQueryString(e);
    return t ? `?${t}` : ""
  }
  mergeRequestParams(e, t) {
    return {
      ...this.baseApiParams,
      ...e,
      ...t || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...e.headers || {},
        ...t && t.headers || {}
      }
    }
  }
}
var Aa = S.TonApiClient = Xm;
const wa = {
  "#/components/schemas/Error": {
    type: "object",
    required: ["error"],
    properties: {
      error: {
        type: "string"
      }
    }
  },
  "#/components/schemas/AccountAddress": {
    type: "object",
    required: ["address", "is_scam", "is_wallet"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      name: {
        type: "string"
      },
      is_scam: {
        type: "boolean"
      },
      icon: {
        type: "string"
      },
      is_wallet: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/BlockCurrencyCollection": {
    type: "object",
    required: ["grams", "other"],
    properties: {
      grams: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      other: {
        type: "array",
        items: {
          type: "object",
          required: ["id", "value"],
          properties: {
            id: {
              type: "integer",
              format: "int64"
            },
            value: {
              type: "string"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/BlockValueFlow": {
    type: "object",
    required: ["from_prev_blk", "to_next_blk", "imported", "exported", "fees_collected", "fees_imported", "recovered", "created", "minted"],
    properties: {
      from_prev_blk: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      to_next_blk: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      imported: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      exported: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      fees_collected: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      burned: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      fees_imported: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      recovered: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      created: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      minted: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      }
    }
  },
  "#/components/schemas/ServiceStatus": {
    type: "object",
    required: ["indexing_latency", "rest_online", "last_known_masterchain_seqno"],
    properties: {
      rest_online: {
        type: "boolean",
        default: !0
      },
      indexing_latency: {
        type: "integer"
      },
      last_known_masterchain_seqno: {
        type: "integer",
        format: "int32"
      }
    }
  },
  "#/components/schemas/ReducedBlock": {
    type: "object",
    required: ["workchain_id", "shard", "seqno", "tx_quantity", "utime", "shards_blocks", "parent"],
    properties: {
      workchain_id: {
        type: "integer",
        format: "int32"
      },
      shard: {
        type: "string"
      },
      seqno: {
        type: "integer",
        format: "int32"
      },
      master_ref: {
        type: "string"
      },
      tx_quantity: {
        type: "integer"
      },
      utime: {
        type: "integer",
        format: "int64"
      },
      shards_blocks: {
        type: "array",
        items: {
          type: "string"
        }
      },
      parent: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/BlockchainBlock": {
    type: "object",
    required: ["workchain_id", "shard", "seqno", "root_hash", "file_hash", "global_id", "value_flow", "version", "after_merge", "before_split", "after_split", "want_split", "want_merge", "key_block", "gen_utime", "start_lt", "end_lt", "vert_seqno", "gen_catchain_seqno", "min_ref_mc_seqno", "prev_key_block_seqno", "prev_refs", "in_msg_descr_length", "out_msg_descr_length", "rand_seed", "created_by", "tx_quantity"],
    properties: {
      tx_quantity: {
        type: "integer"
      },
      value_flow: {
        $ref: "#/components/schemas/BlockValueFlow"
      },
      workchain_id: {
        type: "integer",
        format: "int32"
      },
      shard: {
        type: "string"
      },
      seqno: {
        type: "integer",
        format: "int32"
      },
      root_hash: {
        type: "string"
      },
      file_hash: {
        type: "string"
      },
      global_id: {
        type: "integer",
        format: "int32"
      },
      version: {
        type: "integer",
        format: "int32"
      },
      after_merge: {
        type: "boolean"
      },
      before_split: {
        type: "boolean"
      },
      after_split: {
        type: "boolean"
      },
      want_split: {
        type: "boolean"
      },
      want_merge: {
        type: "boolean"
      },
      key_block: {
        type: "boolean"
      },
      gen_utime: {
        type: "integer",
        format: "int64"
      },
      start_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      end_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      vert_seqno: {
        type: "integer",
        format: "int32"
      },
      gen_catchain_seqno: {
        type: "integer",
        format: "int32"
      },
      min_ref_mc_seqno: {
        type: "integer",
        format: "int32"
      },
      prev_key_block_seqno: {
        type: "integer",
        format: "int32"
      },
      gen_software_version: {
        type: "integer",
        format: "int32"
      },
      gen_software_capabilities: {
        type: "integer",
        format: "int64"
      },
      master_ref: {
        type: "string"
      },
      prev_refs: {
        type: "array",
        items: {
          type: "string"
        }
      },
      in_msg_descr_length: {
        type: "integer",
        format: "int64"
      },
      out_msg_descr_length: {
        type: "integer",
        format: "int64"
      },
      rand_seed: {
        type: "string"
      },
      created_by: {
        type: "string"
      }
    }
  },
  "#/components/schemas/BlockchainBlocks": {
    type: "object",
    required: ["blocks"],
    properties: {
      blocks: {
        type: "array",
        items: {
          $ref: "#/components/schemas/BlockchainBlock"
        }
      }
    }
  },
  "#/components/schemas/ReducedBlocks": {
    type: "object",
    required: ["blocks"],
    properties: {
      blocks: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ReducedBlock"
        }
      }
    }
  },
  "#/components/schemas/BlockchainBlockShards": {
    type: "object",
    required: ["shards"],
    properties: {
      shards: {
        type: "array",
        items: {
          type: "object",
          required: ["last_known_block_id", "last_known_block"],
          properties: {
            last_known_block_id: {
              type: "string"
            },
            last_known_block: {
              $ref: "#/components/schemas/BlockchainBlock"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/AccountStatus": {
    type: "string",
    enum: ["nonexist", "uninit", "active", "frozen"]
  },
  "#/components/schemas/StateInit": {
    type: "object",
    required: ["boc", "interfaces"],
    properties: {
      boc: {
        type: "string",
        format: "cell"
      },
      interfaces: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/Message": {
    type: "object",
    required: ["msg_type", "created_lt", "ihr_disabled", "bounce", "bounced", "value", "fwd_fee", "ihr_fee", "import_fee", "created_at", "hash"],
    properties: {
      msg_type: {
        type: "string",
        enum: ["int_msg", "ext_in_msg", "ext_out_msg"]
      },
      created_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      ihr_disabled: {
        type: "boolean"
      },
      bounce: {
        type: "boolean"
      },
      bounced: {
        type: "boolean"
      },
      value: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      fwd_fee: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      ihr_fee: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      destination: {
        $ref: "#/components/schemas/AccountAddress"
      },
      source: {
        $ref: "#/components/schemas/AccountAddress"
      },
      import_fee: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      created_at: {
        type: "integer",
        format: "int64"
      },
      op_code: {
        type: "string"
      },
      init: {
        $ref: "#/components/schemas/StateInit"
      },
      hash: {
        type: "string"
      },
      raw_body: {
        type: "string",
        format: "cell"
      },
      decoded_op_name: {
        type: "string"
      },
      decoded_body: {}
    }
  },
  "#/components/schemas/TransactionType": {
    type: "string",
    enum: ["TransOrd", "TransTickTock", "TransSplitPrepare", "TransSplitInstall", "TransMergePrepare", "TransMergeInstall", "TransStorage"]
  },
  "#/components/schemas/AccStatusChange": {
    type: "string",
    enum: ["acst_unchanged", "acst_frozen", "acst_deleted"]
  },
  "#/components/schemas/ComputeSkipReason": {
    type: "string",
    enum: ["cskip_no_state", "cskip_bad_state", "cskip_no_gas"]
  },
  "#/components/schemas/BouncePhaseType": {
    type: "string",
    enum: ["TrPhaseBounceNegfunds", "TrPhaseBounceNofunds", "TrPhaseBounceOk"]
  },
  "#/components/schemas/ComputePhase": {
    type: "object",
    required: ["skipped"],
    properties: {
      skipped: {
        type: "boolean"
      },
      skip_reason: {
        $ref: "#/components/schemas/ComputeSkipReason"
      },
      success: {
        type: "boolean"
      },
      gas_fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      gas_used: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      vm_steps: {
        type: "integer",
        format: "int32"
      },
      exit_code: {
        type: "integer",
        format: "int32"
      },
      exit_code_description: {
        type: "string"
      }
    }
  },
  "#/components/schemas/StoragePhase": {
    type: "object",
    required: ["fees_collected", "status_change"],
    properties: {
      fees_collected: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      fees_due: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      status_change: {
        $ref: "#/components/schemas/AccStatusChange"
      }
    }
  },
  "#/components/schemas/CreditPhase": {
    type: "object",
    required: ["fees_collected", "credit"],
    properties: {
      fees_collected: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      credit: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      }
    }
  },
  "#/components/schemas/ActionPhase": {
    type: "object",
    required: ["success", "result_code", "total_actions", "skipped_actions", "fwd_fees", "total_fees"],
    properties: {
      success: {
        type: "boolean"
      },
      result_code: {
        type: "integer",
        format: "int32"
      },
      total_actions: {
        type: "integer",
        format: "int32"
      },
      skipped_actions: {
        type: "integer",
        format: "int32"
      },
      fwd_fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      total_fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      result_code_description: {
        type: "string"
      }
    }
  },
  "#/components/schemas/Transaction": {
    type: "object",
    required: ["hash", "lt", "account", "end_balance", "success", "utime", "orig_status", "end_status", "total_fees", "transaction_type", "state_update_old", "state_update_new", "out_msgs", "block", "aborted", "destroyed", "raw"],
    properties: {
      hash: {
        type: "string"
      },
      lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      account: {
        $ref: "#/components/schemas/AccountAddress"
      },
      success: {
        type: "boolean"
      },
      utime: {
        type: "integer",
        format: "int64"
      },
      orig_status: {
        $ref: "#/components/schemas/AccountStatus"
      },
      end_status: {
        $ref: "#/components/schemas/AccountStatus"
      },
      total_fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      end_balance: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      transaction_type: {
        $ref: "#/components/schemas/TransactionType"
      },
      state_update_old: {
        type: "string"
      },
      state_update_new: {
        type: "string"
      },
      in_msg: {
        $ref: "#/components/schemas/Message"
      },
      out_msgs: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Message"
        }
      },
      block: {
        type: "string"
      },
      prev_trans_hash: {
        type: "string"
      },
      prev_trans_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      compute_phase: {
        $ref: "#/components/schemas/ComputePhase"
      },
      storage_phase: {
        $ref: "#/components/schemas/StoragePhase"
      },
      credit_phase: {
        $ref: "#/components/schemas/CreditPhase"
      },
      action_phase: {
        $ref: "#/components/schemas/ActionPhase"
      },
      bounce_phase: {
        $ref: "#/components/schemas/BouncePhaseType"
      },
      aborted: {
        type: "boolean"
      },
      destroyed: {
        type: "boolean"
      },
      raw: {
        type: "string",
        format: "cell"
      }
    }
  },
  "#/components/schemas/Transactions": {
    type: "object",
    required: ["transactions"],
    properties: {
      transactions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Transaction"
        }
      }
    }
  },
  "#/components/schemas/ConfigProposalSetup": {
    type: "object",
    required: ["min_tot_rounds", "max_tot_rounds", "min_wins", "max_losses", "min_store_sec", "max_store_sec", "bit_price", "cell_price"],
    properties: {
      min_tot_rounds: {
        type: "integer"
      },
      max_tot_rounds: {
        type: "integer"
      },
      min_wins: {
        type: "integer"
      },
      max_losses: {
        type: "integer"
      },
      min_store_sec: {
        type: "integer",
        format: "int64"
      },
      max_store_sec: {
        type: "integer",
        format: "int64"
      },
      bit_price: {
        type: "integer",
        format: "int64"
      },
      cell_price: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/GasLimitPrices": {
    type: "object",
    required: ["gas_price", "gas_limit", "gas_credit", "block_gas_limit", "freeze_due_limit", "delete_due_limit"],
    properties: {
      special_gas_limit: {
        type: "integer",
        format: "int64"
      },
      flat_gas_limit: {
        type: "integer",
        format: "int64"
      },
      flat_gas_price: {
        type: "integer",
        format: "int64"
      },
      gas_price: {
        type: "integer",
        format: "int64"
      },
      gas_limit: {
        type: "integer",
        format: "int64"
      },
      gas_credit: {
        type: "integer",
        format: "int64"
      },
      block_gas_limit: {
        type: "integer",
        format: "int64"
      },
      freeze_due_limit: {
        type: "integer",
        format: "int64"
      },
      delete_due_limit: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/BlockParamLimits": {
    type: "object",
    required: ["underload", "soft_limit", "hard_limit"],
    properties: {
      underload: {
        type: "integer",
        format: "int64"
      },
      soft_limit: {
        type: "integer",
        format: "int64"
      },
      hard_limit: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/BlockLimits": {
    type: "object",
    required: ["bytes", "gas", "lt_delta"],
    properties: {
      bytes: {
        $ref: "#/components/schemas/BlockParamLimits"
      },
      gas: {
        $ref: "#/components/schemas/BlockParamLimits"
      },
      lt_delta: {
        $ref: "#/components/schemas/BlockParamLimits"
      }
    }
  },
  "#/components/schemas/MsgForwardPrices": {
    type: "object",
    required: ["lump_price", "bit_price", "cell_price", "ihr_price_factor", "first_frac", "next_frac"],
    properties: {
      lump_price: {
        type: "integer",
        format: "int64"
      },
      bit_price: {
        type: "integer",
        format: "int64"
      },
      cell_price: {
        type: "integer",
        format: "int64"
      },
      ihr_price_factor: {
        type: "integer",
        format: "int64"
      },
      first_frac: {
        type: "integer",
        format: "int64"
      },
      next_frac: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/WorkchainDescr": {
    type: "object",
    required: ["workchain", "enabled_since", "actual_min_split", "min_split", "max_split", "basic", "active", "accept_msgs", "flags", "zerostate_root_hash", "zerostate_file_hash", "version"],
    properties: {
      workchain: {
        type: "integer",
        format: "int"
      },
      enabled_since: {
        type: "integer",
        format: "int64"
      },
      actual_min_split: {
        type: "integer",
        format: "int"
      },
      min_split: {
        type: "integer",
        format: "int"
      },
      max_split: {
        type: "integer",
        format: "int"
      },
      basic: {
        type: "integer"
      },
      active: {
        type: "boolean"
      },
      accept_msgs: {
        type: "boolean"
      },
      flags: {
        type: "integer",
        format: "int"
      },
      zerostate_root_hash: {
        type: "string"
      },
      zerostate_file_hash: {
        type: "string"
      },
      version: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/MisbehaviourPunishmentConfig": {
    type: "object",
    required: ["default_flat_fine", "default_proportional_fine", "severity_flat_mult", "severity_proportional_mult", "unpunishable_interval", "long_interval", "long_flat_mult", "long_proportional_mult", "medium_interval", "medium_flat_mult", "medium_proportional_mult"],
    properties: {
      default_flat_fine: {
        type: "integer",
        format: "int64"
      },
      default_proportional_fine: {
        type: "integer",
        format: "int64"
      },
      severity_flat_mult: {
        type: "integer"
      },
      severity_proportional_mult: {
        type: "integer"
      },
      unpunishable_interval: {
        type: "integer"
      },
      long_interval: {
        type: "integer"
      },
      long_flat_mult: {
        type: "integer"
      },
      long_proportional_mult: {
        type: "integer"
      },
      medium_interval: {
        type: "integer"
      },
      medium_flat_mult: {
        type: "integer"
      },
      medium_proportional_mult: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/SizeLimitsConfig": {
    type: "object",
    required: ["max_msg_bits", "max_msg_cells", "max_library_cells", "max_vm_data_depth", "max_ext_msg_size", "max_ext_msg_depth"],
    properties: {
      max_msg_bits: {
        type: "integer",
        format: "int64"
      },
      max_msg_cells: {
        type: "integer",
        format: "int64"
      },
      max_library_cells: {
        type: "integer",
        format: "int64"
      },
      max_vm_data_depth: {
        type: "integer",
        format: "int"
      },
      max_ext_msg_size: {
        type: "integer",
        format: "int64"
      },
      max_ext_msg_depth: {
        type: "integer",
        format: "int"
      },
      max_acc_state_cells: {
        type: "integer",
        format: "int64"
      },
      max_acc_state_bits: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/ValidatorsSet": {
    type: "object",
    required: ["utime_since", "utime_until", "total", "main", "list"],
    properties: {
      utime_since: {
        type: "integer"
      },
      utime_until: {
        type: "integer"
      },
      total: {
        type: "integer"
      },
      main: {
        type: "integer"
      },
      total_weight: {
        type: "string"
      },
      list: {
        type: "array",
        items: {
          type: "object",
          required: ["public_key", "weight"],
          properties: {
            public_key: {
              type: "string"
            },
            weight: {
              type: "integer",
              format: "int64",
              "x-js-format": "bigint"
            },
            adnl_addr: {
              type: "string"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/Oracle": {
    type: "object",
    required: ["address", "secp_pubkey"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      secp_pubkey: {
        type: "string"
      }
    }
  },
  "#/components/schemas/OracleBridgeParams": {
    type: "object",
    required: ["bridge_addr", "oracle_multisig_address", "external_chain_address", "oracles"],
    properties: {
      bridge_addr: {
        type: "string",
        format: "address"
      },
      oracle_multisig_address: {
        type: "string",
        format: "address"
      },
      external_chain_address: {
        type: "string"
      },
      oracles: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Oracle"
        }
      }
    }
  },
  "#/components/schemas/JettonBridgePrices": {
    type: "object",
    required: ["bridge_burn_fee", "bridge_mint_fee", "wallet_min_tons_for_storage", "wallet_gas_consumption", "minter_min_tons_for_storage", "discover_gas_consumption"],
    properties: {
      bridge_burn_fee: {
        type: "integer",
        format: "int64"
      },
      bridge_mint_fee: {
        type: "integer",
        format: "int64"
      },
      wallet_min_tons_for_storage: {
        type: "integer",
        format: "int64"
      },
      wallet_gas_consumption: {
        type: "integer",
        format: "int64"
      },
      minter_min_tons_for_storage: {
        type: "integer",
        format: "int64"
      },
      discover_gas_consumption: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/JettonBridgeParams": {
    type: "object",
    required: ["bridge_address", "oracles_address", "state_flags", "oracles"],
    properties: {
      bridge_address: {
        type: "string",
        format: "address"
      },
      oracles_address: {
        type: "string",
        format: "address"
      },
      state_flags: {
        type: "integer"
      },
      burn_bridge_fee: {
        type: "integer",
        format: "int64"
      },
      oracles: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Oracle"
        }
      },
      external_chain_address: {
        type: "string"
      },
      prices: {
        $ref: "#/components/schemas/JettonBridgePrices"
      }
    }
  },
  "#/components/schemas/Validator": {
    type: "object",
    required: ["address", "adnl_address", "stake", "max_factor"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      adnl_address: {
        type: "string"
      },
      stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      max_factor: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/Validators": {
    type: "object",
    required: ["validators", "elect_at", "elect_close", "min_stake", "total_stake"],
    properties: {
      elect_at: {
        type: "integer",
        format: "int64"
      },
      elect_close: {
        type: "integer",
        format: "int64"
      },
      min_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      total_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      validators: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Validator"
        }
      }
    }
  },
  "#/components/schemas/AccountStorageInfo": {
    type: "object",
    required: ["used_cells", "used_bits", "used_public_cells", "last_paid", "due_payment"],
    properties: {
      used_cells: {
        type: "integer",
        format: "int64"
      },
      used_bits: {
        type: "integer",
        format: "int64"
      },
      used_public_cells: {
        type: "integer",
        format: "int64"
      },
      last_paid: {
        type: "integer",
        format: "int64"
      },
      due_payment: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      }
    }
  },
  "#/components/schemas/BlockchainRawAccount": {
    type: "object",
    required: ["address", "balance", "status", "last_transaction_lt", "storage"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      balance: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      extra_balance: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      },
      code: {
        type: "string",
        format: "cell"
      },
      data: {
        type: "string",
        format: "cell"
      },
      last_transaction_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      last_transaction_hash: {
        type: "string"
      },
      frozen_hash: {
        type: "string"
      },
      status: {
        $ref: "#/components/schemas/AccountStatus"
      },
      storage: {
        $ref: "#/components/schemas/AccountStorageInfo"
      },
      libraries: {
        type: "array",
        items: {
          type: "object",
          required: ["public", "root"],
          properties: {
            public: {
              type: "boolean"
            },
            root: {
              type: "string",
              format: "cell"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/Account": {
    type: "object",
    required: ["address", "balance", "status", "last_activity", "get_methods", "is_wallet"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      balance: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      currencies_balance: {
        type: "object",
        additionalProperties: !0
      },
      last_activity: {
        type: "integer",
        format: "int64"
      },
      status: {
        $ref: "#/components/schemas/AccountStatus"
      },
      interfaces: {
        type: "array",
        items: {
          type: "string"
        }
      },
      name: {
        type: "string"
      },
      is_scam: {
        type: "boolean"
      },
      icon: {
        type: "string"
      },
      memo_required: {
        type: "boolean"
      },
      get_methods: {
        type: "array",
        items: {
          type: "string"
        }
      },
      is_suspended: {
        type: "boolean"
      },
      is_wallet: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/Accounts": {
    type: "object",
    required: ["accounts"],
    properties: {
      accounts: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Account"
        }
      }
    }
  },
  "#/components/schemas/GaslessConfig": {
    type: "object",
    required: ["gas_jettons", "relay_address"],
    properties: {
      relay_address: {
        type: "string",
        format: "address"
      },
      gas_jettons: {
        type: "array",
        items: {
          type: "object",
          required: ["master_id"],
          properties: {
            master_id: {
              type: "string",
              format: "address"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/SignRawMessage": {
    type: "object",
    required: ["address", "amount"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "string"
      },
      payload: {
        type: "string",
        format: "cell"
      },
      stateInit: {
        type: "string",
        format: "cell"
      }
    }
  },
  "#/components/schemas/SignRawParams": {
    type: "object",
    required: ["messages", "relay_address", "commission", "from", "valid_until"],
    properties: {
      relay_address: {
        type: "string",
        format: "address"
      },
      commission: {
        type: "string"
      },
      from: {
        type: "string",
        format: "address"
      },
      valid_until: {
        type: "integer",
        format: "int64"
      },
      messages: {
        type: "array",
        items: {
          $ref: "#/components/schemas/SignRawMessage"
        }
      }
    }
  },
  "#/components/schemas/MethodExecutionResult": {
    type: "object",
    required: ["success", "exit_code", "stack"],
    properties: {
      success: {
        type: "boolean"
      },
      exit_code: {
        type: "integer"
      },
      stack: {
        type: "array",
        items: {
          $ref: "#/components/schemas/TvmStackRecord"
        }
      },
      decoded: {}
    }
  },
  "#/components/schemas/TvmStackRecord": {
    type: "object",
    format: "tuple-item",
    required: ["type"],
    properties: {
      type: {
        type: "string",
        enum: ["cell", "num", "nan", "null", "tuple"]
      },
      cell: {
        type: "string",
        format: "cell"
      },
      slice: {
        type: "string",
        format: "cell"
      },
      num: {
        type: "string"
      },
      tuple: {
        type: "array",
        items: {
          $ref: "#/components/schemas/TvmStackRecord"
        }
      }
    }
  },
  "#/components/schemas/RawBlockchainConfig": {
    type: "object",
    required: ["config"],
    properties: {
      config: {
        type: "object",
        additionalProperties: !0
      }
    }
  },
  "#/components/schemas/BlockchainConfig": {
    type: "object",
    required: ["raw", "0", "1", "2", "4", "44"],
    properties: {
      0: {
        type: "string",
        format: "address"
      },
      1: {
        type: "string",
        format: "address"
      },
      2: {
        type: "string",
        format: "address"
      },
      3: {
        type: "string",
        format: "address"
      },
      4: {
        type: "string",
        format: "address"
      },
      5: {
        type: "object",
        required: ["fee_burn_nom", "fee_burn_denom"],
        properties: {
          blackhole_addr: {
            type: "string",
            format: "address"
          },
          fee_burn_nom: {
            type: "integer",
            format: "int64"
          },
          fee_burn_denom: {
            type: "integer",
            format: "int64"
          }
        }
      },
      6: {
        type: "object",
        required: ["mint_new_price", "mint_add_price"],
        properties: {
          mint_new_price: {
            type: "integer",
            format: "int64"
          },
          mint_add_price: {
            type: "integer",
            format: "int64"
          }
        }
      },
      7: {
        type: "object",
        required: ["currencies"],
        properties: {
          currencies: {
            type: "array",
            items: {
              type: "object",
              required: ["currency_id", "amount"],
              properties: {
                currency_id: {
                  type: "integer",
                  format: "int64"
                },
                amount: {
                  type: "string"
                }
              }
            }
          }
        }
      },
      8: {
        type: "object",
        required: ["version", "capabilities"],
        properties: {
          version: {
            type: "integer",
            format: "int64"
          },
          capabilities: {
            type: "integer",
            format: "int64"
          }
        }
      },
      9: {
        type: "object",
        required: ["mandatory_params"],
        properties: {
          mandatory_params: {
            type: "array",
            items: {
              type: "integer",
              format: "int32"
            }
          }
        }
      },
      10: {
        type: "object",
        required: ["critical_params"],
        properties: {
          critical_params: {
            type: "array",
            items: {
              type: "integer",
              format: "int32"
            }
          }
        }
      },
      11: {
        type: "object",
        required: ["normal_params", "critical_params"],
        properties: {
          normal_params: {
            $ref: "#/components/schemas/ConfigProposalSetup"
          },
          critical_params: {
            $ref: "#/components/schemas/ConfigProposalSetup"
          }
        }
      },
      12: {
        type: "object",
        required: ["workchains"],
        properties: {
          workchains: {
            type: "array",
            items: {
              $ref: "#/components/schemas/WorkchainDescr"
            }
          }
        }
      },
      13: {
        type: "object",
        required: ["deposit", "bit_price", "cell_price"],
        properties: {
          deposit: {
            type: "integer",
            format: "int64"
          },
          bit_price: {
            type: "integer",
            format: "int64"
          },
          cell_price: {
            type: "integer",
            format: "int64"
          }
        }
      },
      14: {
        type: "object",
        required: ["masterchain_block_fee", "basechain_block_fee"],
        properties: {
          masterchain_block_fee: {
            type: "integer",
            format: "int64"
          },
          basechain_block_fee: {
            type: "integer",
            format: "int64"
          }
        }
      },
      15: {
        type: "object",
        required: ["validators_elected_for", "elections_start_before", "elections_end_before", "stake_held_for"],
        properties: {
          validators_elected_for: {
            type: "integer",
            format: "int64"
          },
          elections_start_before: {
            type: "integer",
            format: "int64"
          },
          elections_end_before: {
            type: "integer",
            format: "int64"
          },
          stake_held_for: {
            type: "integer",
            format: "int64"
          }
        }
      },
      16: {
        type: "object",
        required: ["max_validators", "max_main_validators", "min_validators"],
        properties: {
          max_validators: {
            type: "integer"
          },
          max_main_validators: {
            type: "integer"
          },
          min_validators: {
            type: "integer"
          }
        }
      },
      17: {
        type: "object",
        required: ["min_stake", "max_stake", "min_total_stake", "max_stake_factor"],
        properties: {
          min_stake: {
            type: "string"
          },
          max_stake: {
            type: "string"
          },
          min_total_stake: {
            type: "string"
          },
          max_stake_factor: {
            type: "integer",
            format: "int64"
          }
        }
      },
      18: {
        type: "object",
        required: ["storage_prices"],
        properties: {
          storage_prices: {
            type: "array",
            items: {
              type: "object",
              required: ["utime_since", "bit_price_ps", "cell_price_ps", "mc_bit_price_ps", "mc_cell_price_ps"],
              properties: {
                utime_since: {
                  type: "integer",
                  format: "int64"
                },
                bit_price_ps: {
                  type: "integer",
                  format: "int64"
                },
                cell_price_ps: {
                  type: "integer",
                  format: "int64"
                },
                mc_bit_price_ps: {
                  type: "integer",
                  format: "int64"
                },
                mc_cell_price_ps: {
                  type: "integer",
                  format: "int64"
                }
              }
            }
          }
        }
      },
      20: {
        type: "object",
        required: ["gas_limits_prices"],
        properties: {
          gas_limits_prices: {
            $ref: "#/components/schemas/GasLimitPrices"
          }
        }
      },
      21: {
        type: "object",
        required: ["gas_limits_prices"],
        properties: {
          gas_limits_prices: {
            $ref: "#/components/schemas/GasLimitPrices"
          }
        }
      },
      22: {
        type: "object",
        required: ["block_limits"],
        properties: {
          block_limits: {
            $ref: "#/components/schemas/BlockLimits"
          }
        }
      },
      23: {
        type: "object",
        required: ["block_limits"],
        properties: {
          block_limits: {
            $ref: "#/components/schemas/BlockLimits"
          }
        }
      },
      24: {
        type: "object",
        required: ["msg_forward_prices"],
        properties: {
          msg_forward_prices: {
            $ref: "#/components/schemas/MsgForwardPrices"
          }
        }
      },
      25: {
        type: "object",
        required: ["msg_forward_prices"],
        properties: {
          msg_forward_prices: {
            $ref: "#/components/schemas/MsgForwardPrices"
          }
        }
      },
      28: {
        type: "object",
        required: ["mc_catchain_lifetime", "shard_catchain_lifetime", "shard_validators_lifetime", "shard_validators_num"],
        properties: {
          mc_catchain_lifetime: {
            type: "integer",
            format: "int64"
          },
          shard_catchain_lifetime: {
            type: "integer",
            format: "int64"
          },
          shard_validators_lifetime: {
            type: "integer",
            format: "int64"
          },
          shard_validators_num: {
            type: "integer",
            format: "int64"
          },
          flags: {
            type: "integer",
            format: "int"
          },
          shuffle_mc_validators: {
            type: "boolean"
          }
        }
      },
      29: {
        type: "object",
        required: ["round_candidates", "next_candidate_delay_ms", "consensus_timeout_ms", "fast_attempts", "attempt_duration", "catchain_max_deps", "max_block_bytes", "max_collated_bytes"],
        properties: {
          flags: {
            type: "integer",
            format: "int"
          },
          new_catchain_ids: {
            type: "boolean"
          },
          round_candidates: {
            type: "integer",
            format: "int64"
          },
          next_candidate_delay_ms: {
            type: "integer",
            format: "int64"
          },
          consensus_timeout_ms: {
            type: "integer",
            format: "int64"
          },
          fast_attempts: {
            type: "integer",
            format: "int64"
          },
          attempt_duration: {
            type: "integer",
            format: "int64"
          },
          catchain_max_deps: {
            type: "integer",
            format: "int64"
          },
          max_block_bytes: {
            type: "integer",
            format: "int64"
          },
          max_collated_bytes: {
            type: "integer",
            format: "int64"
          },
          proto_version: {
            type: "integer",
            format: "int64"
          },
          catchain_max_blocks_coeff: {
            type: "integer",
            format: "int64"
          }
        }
      },
      31: {
        type: "object",
        required: ["fundamental_smc_addr"],
        properties: {
          fundamental_smc_addr: {
            type: "array",
            items: {
              type: "string",
              format: "address"
            }
          }
        }
      },
      32: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      33: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      34: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      35: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      36: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      37: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      40: {
        type: "object",
        required: ["misbehaviour_punishment_config"],
        properties: {
          misbehaviour_punishment_config: {
            $ref: "#/components/schemas/MisbehaviourPunishmentConfig"
          }
        }
      },
      43: {
        type: "object",
        required: ["size_limits_config"],
        properties: {
          size_limits_config: {
            $ref: "#/components/schemas/SizeLimitsConfig"
          }
        }
      },
      44: {
        type: "object",
        required: ["accounts", "suspended_until"],
        properties: {
          accounts: {
            type: "array",
            items: {
              type: "string",
              format: "address"
            }
          },
          suspended_until: {
            type: "integer"
          }
        }
      },
      71: {
        type: "object",
        required: ["oracle_bridge_params"],
        properties: {
          oracle_bridge_params: {
            $ref: "#/components/schemas/OracleBridgeParams"
          }
        }
      },
      72: {
        type: "object",
        required: ["oracle_bridge_params"],
        properties: {
          oracle_bridge_params: {
            $ref: "#/components/schemas/OracleBridgeParams"
          }
        }
      },
      73: {
        type: "object",
        required: ["oracle_bridge_params"],
        properties: {
          oracle_bridge_params: {
            $ref: "#/components/schemas/OracleBridgeParams"
          }
        }
      },
      79: {
        type: "object",
        required: ["jetton_bridge_params"],
        properties: {
          jetton_bridge_params: {
            $ref: "#/components/schemas/JettonBridgeParams"
          }
        }
      },
      81: {
        type: "object",
        required: ["jetton_bridge_params"],
        properties: {
          jetton_bridge_params: {
            $ref: "#/components/schemas/JettonBridgeParams"
          }
        }
      },
      82: {
        type: "object",
        required: ["jetton_bridge_params"],
        properties: {
          jetton_bridge_params: {
            $ref: "#/components/schemas/JettonBridgeParams"
          }
        }
      },
      raw: {
        type: "string",
        format: "cell"
      }
    }
  },
  "#/components/schemas/DomainNames": {
    type: "object",
    required: ["domains"],
    properties: {
      domains: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/DomainBid": {
    type: "object",
    required: ["success", "value", "txTime", "bidder", "txHash"],
    properties: {
      success: {
        type: "boolean",
        default: !1
      },
      value: {
        type: "integer",
        format: "int64"
      },
      txTime: {
        type: "integer",
        format: "int64"
      },
      txHash: {
        type: "string"
      },
      bidder: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/DomainBids": {
    type: "object",
    required: ["data"],
    properties: {
      data: {
        type: "array",
        items: {
          $ref: "#/components/schemas/DomainBid"
        }
      }
    }
  },
  "#/components/schemas/JettonVerificationType": {
    type: "string",
    enum: ["whitelist", "blacklist", "none"]
  },
  "#/components/schemas/JettonPreview": {
    type: "object",
    required: ["address", "name", "symbol", "decimals", "verification", "image"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      name: {
        type: "string"
      },
      symbol: {
        type: "string"
      },
      decimals: {
        type: "integer"
      },
      image: {
        type: "string"
      },
      verification: {
        $ref: "#/components/schemas/JettonVerificationType"
      }
    }
  },
  "#/components/schemas/JettonBalance": {
    type: "object",
    required: ["balance", "wallet_address", "jetton"],
    properties: {
      balance: {
        type: "string"
      },
      price: {
        $ref: "#/components/schemas/TokenRates"
      },
      wallet_address: {
        $ref: "#/components/schemas/AccountAddress"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      },
      extensions: {
        type: "array",
        items: {
          type: "string"
        }
      },
      lock: {
        type: "object",
        required: ["amount", "till"],
        properties: {
          amount: {
            type: "string"
          },
          till: {
            type: "integer",
            format: "int64"
          }
        }
      }
    }
  },
  "#/components/schemas/JettonsBalances": {
    type: "object",
    required: ["balances"],
    properties: {
      balances: {
        type: "array",
        items: {
          $ref: "#/components/schemas/JettonBalance"
        }
      }
    }
  },
  "#/components/schemas/Price": {
    type: "object",
    required: ["value", "token_name"],
    properties: {
      value: {
        type: "string"
      },
      token_name: {
        type: "string"
      }
    }
  },
  "#/components/schemas/ImagePreview": {
    type: "object",
    required: ["resolution", "url"],
    properties: {
      resolution: {
        type: "string"
      },
      url: {
        type: "string"
      }
    }
  },
  "#/components/schemas/NftApprovedBy": {
    type: "array",
    items: {
      type: "string",
      enum: ["getgems", "tonkeeper", "ton.diamonds"]
    }
  },
  "#/components/schemas/TrustType": {
    type: "string",
    enum: ["whitelist", "graylist", "blacklist", "none"]
  },
  "#/components/schemas/Sale": {
    type: "object",
    required: ["address", "market", "price"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      market: {
        $ref: "#/components/schemas/AccountAddress"
      },
      owner: {
        $ref: "#/components/schemas/AccountAddress"
      },
      price: {
        $ref: "#/components/schemas/Price"
      }
    }
  },
  "#/components/schemas/NftItem": {
    type: "object",
    required: ["address", "index", "verified", "metadata", "approved_by", "trust"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      index: {
        type: "integer",
        format: "int64"
      },
      owner: {
        $ref: "#/components/schemas/AccountAddress"
      },
      collection: {
        type: "object",
        required: ["address", "name", "description"],
        properties: {
          address: {
            type: "string",
            format: "address"
          },
          name: {
            type: "string"
          },
          description: {
            type: "string"
          }
        }
      },
      verified: {
        type: "boolean"
      },
      metadata: {
        type: "object",
        additionalProperties: !0
      },
      sale: {
        $ref: "#/components/schemas/Sale"
      },
      previews: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ImagePreview"
        }
      },
      dns: {
        type: "string"
      },
      approved_by: {
        $ref: "#/components/schemas/NftApprovedBy"
      },
      include_cnft: {
        type: "boolean"
      },
      trust: {
        $ref: "#/components/schemas/TrustType"
      }
    }
  },
  "#/components/schemas/NftItems": {
    type: "object",
    required: ["nft_items"],
    properties: {
      nft_items: {
        type: "array",
        items: {
          $ref: "#/components/schemas/NftItem"
        }
      }
    }
  },
  "#/components/schemas/Multisigs": {
    type: "object",
    required: ["multisigs"],
    properties: {
      multisigs: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Multisig"
        }
      }
    }
  },
  "#/components/schemas/Multisig": {
    type: "object",
    required: ["address", "seqno", "threshold", "signers", "proposers", "orders"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      seqno: {
        type: "integer",
        format: "int64"
      },
      threshold: {
        type: "integer",
        format: "int32"
      },
      signers: {
        type: "array",
        items: {
          type: "string",
          format: "address"
        }
      },
      proposers: {
        type: "array",
        items: {
          type: "string",
          format: "address"
        }
      },
      orders: {
        type: "array",
        items: {
          $ref: "#/components/schemas/MultisigOrder"
        }
      }
    }
  },
  "#/components/schemas/MultisigOrder": {
    type: "object",
    required: ["address", "order_seqno", "threshold", "sent_for_execution", "signers", "approvals_num", "expiration_date", "risk"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      order_seqno: {
        type: "integer",
        format: "int64"
      },
      threshold: {
        type: "integer",
        format: "int32"
      },
      sent_for_execution: {
        type: "boolean"
      },
      signers: {
        type: "array",
        items: {
          type: "string",
          format: "address"
        }
      },
      approvals_num: {
        type: "integer",
        format: "int32"
      },
      expiration_date: {
        type: "integer",
        format: "int64"
      },
      risk: {
        $ref: "#/components/schemas/Risk"
      }
    }
  },
  "#/components/schemas/Refund": {
    type: "object",
    required: ["type", "origin"],
    properties: {
      type: {
        type: "string",
        enum: ["DNS.ton", "DNS.tg", "GetGems"]
      },
      origin: {
        type: "string"
      }
    }
  },
  "#/components/schemas/ValueFlow": {
    type: "object",
    required: ["account", "ton", "fees"],
    properties: {
      account: {
        $ref: "#/components/schemas/AccountAddress"
      },
      ton: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      jettons: {
        type: "array",
        items: {
          type: "object",
          required: ["account", "quantity", "jetton"],
          properties: {
            account: {
              $ref: "#/components/schemas/AccountAddress"
            },
            jetton: {
              $ref: "#/components/schemas/JettonPreview"
            },
            quantity: {
              type: "integer",
              format: "int64",
              "x-js-format": "bigint"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/Action": {
    type: "object",
    required: ["type", "status", "simple_preview", "base_transactions"],
    properties: {
      type: {
        type: "string",
        enum: ["TonTransfer", "JettonTransfer", "JettonBurn", "JettonMint", "NftItemTransfer", "ContractDeploy", "Subscribe", "UnSubscribe", "AuctionBid", "NftPurchase", "DepositStake", "WithdrawStake", "WithdrawStakeRequest", "JettonSwap", "SmartContractExec", "ElectionsRecoverStake", "ElectionsDepositStake", "DomainRenew", "InscriptionTransfer", "InscriptionMint", "Unknown"]
      },
      status: {
        type: "string",
        enum: ["ok", "failed"]
      },
      TonTransfer: {
        $ref: "#/components/schemas/TonTransferAction"
      },
      ContractDeploy: {
        $ref: "#/components/schemas/ContractDeployAction"
      },
      JettonTransfer: {
        $ref: "#/components/schemas/JettonTransferAction"
      },
      JettonBurn: {
        $ref: "#/components/schemas/JettonBurnAction"
      },
      JettonMint: {
        $ref: "#/components/schemas/JettonMintAction"
      },
      NftItemTransfer: {
        $ref: "#/components/schemas/NftItemTransferAction"
      },
      Subscribe: {
        $ref: "#/components/schemas/SubscriptionAction"
      },
      UnSubscribe: {
        $ref: "#/components/schemas/UnSubscriptionAction"
      },
      AuctionBid: {
        $ref: "#/components/schemas/AuctionBidAction"
      },
      NftPurchase: {
        $ref: "#/components/schemas/NftPurchaseAction"
      },
      DepositStake: {
        $ref: "#/components/schemas/DepositStakeAction"
      },
      WithdrawStake: {
        $ref: "#/components/schemas/WithdrawStakeAction"
      },
      WithdrawStakeRequest: {
        $ref: "#/components/schemas/WithdrawStakeRequestAction"
      },
      ElectionsDepositStake: {
        $ref: "#/components/schemas/ElectionsDepositStakeAction"
      },
      ElectionsRecoverStake: {
        $ref: "#/components/schemas/ElectionsRecoverStakeAction"
      },
      JettonSwap: {
        $ref: "#/components/schemas/JettonSwapAction"
      },
      SmartContractExec: {
        $ref: "#/components/schemas/SmartContractAction"
      },
      DomainRenew: {
        $ref: "#/components/schemas/DomainRenewAction"
      },
      InscriptionTransfer: {
        $ref: "#/components/schemas/InscriptionTransferAction"
      },
      InscriptionMint: {
        $ref: "#/components/schemas/InscriptionMintAction"
      },
      simple_preview: {
        $ref: "#/components/schemas/ActionSimplePreview"
      },
      base_transactions: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/TonTransferAction": {
    type: "object",
    required: ["sender", "recipient", "amount"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      comment: {
        type: "string"
      },
      encrypted_comment: {
        $ref: "#/components/schemas/EncryptedComment"
      },
      refund: {
        $ref: "#/components/schemas/Refund"
      }
    }
  },
  "#/components/schemas/SmartContractAction": {
    type: "object",
    required: ["executor", "contract", "ton_attached", "operation"],
    properties: {
      executor: {
        $ref: "#/components/schemas/AccountAddress"
      },
      contract: {
        $ref: "#/components/schemas/AccountAddress"
      },
      ton_attached: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      operation: {
        type: "string"
      },
      payload: {
        type: "string"
      },
      refund: {
        $ref: "#/components/schemas/Refund"
      }
    }
  },
  "#/components/schemas/DomainRenewAction": {
    type: "object",
    required: ["domain", "contract_address", "renewer"],
    properties: {
      domain: {
        type: "string"
      },
      contract_address: {
        type: "string",
        format: "address"
      },
      renewer: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/InscriptionMintAction": {
    type: "object",
    required: ["type", "ticker", "recipient", "amount", "decimals"],
    properties: {
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      amount: {
        type: "string"
      },
      type: {
        type: "string",
        enum: ["ton20", "gram20"]
      },
      ticker: {
        type: "string"
      },
      decimals: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/InscriptionTransferAction": {
    type: "object",
    required: ["sender", "recipient", "amount", "type", "ticker", "decimals"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      amount: {
        type: "string"
      },
      comment: {
        type: "string"
      },
      type: {
        type: "string",
        enum: ["ton20", "gram20"]
      },
      ticker: {
        type: "string"
      },
      decimals: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/NftItemTransferAction": {
    type: "object",
    required: ["nft"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      nft: {
        type: "string"
      },
      comment: {
        type: "string"
      },
      encrypted_comment: {
        $ref: "#/components/schemas/EncryptedComment"
      },
      payload: {
        type: "string"
      },
      refund: {
        $ref: "#/components/schemas/Refund"
      }
    }
  },
  "#/components/schemas/JettonTransferAction": {
    type: "object",
    required: ["amount", "jetton", "senders_wallet", "recipients_wallet"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      senders_wallet: {
        type: "string",
        format: "address"
      },
      recipients_wallet: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "string"
      },
      comment: {
        type: "string"
      },
      encrypted_comment: {
        $ref: "#/components/schemas/EncryptedComment"
      },
      refund: {
        $ref: "#/components/schemas/Refund"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/JettonBurnAction": {
    type: "object",
    required: ["amount", "jetton", "sender", "senders_wallet"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      senders_wallet: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "string"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/JettonMintAction": {
    type: "object",
    required: ["amount", "jetton", "recipient", "recipients_wallet"],
    properties: {
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipients_wallet: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "string"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/ContractDeployAction": {
    type: "object",
    required: ["address", "interfaces"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      interfaces: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/SubscriptionAction": {
    type: "object",
    required: ["subscriber", "subscription", "beneficiary", "amount", "initial"],
    properties: {
      subscriber: {
        $ref: "#/components/schemas/AccountAddress"
      },
      subscription: {
        type: "string",
        format: "address"
      },
      beneficiary: {
        $ref: "#/components/schemas/AccountAddress"
      },
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      initial: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/UnSubscriptionAction": {
    type: "object",
    required: ["subscriber", "subscription", "beneficiary"],
    properties: {
      subscriber: {
        $ref: "#/components/schemas/AccountAddress"
      },
      subscription: {
        type: "string",
        format: "address"
      },
      beneficiary: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/AuctionBidAction": {
    type: "object",
    required: ["amount", "bidder", "auction", "auction_type"],
    properties: {
      auction_type: {
        type: "string",
        enum: ["DNS.ton", "DNS.tg", "NUMBER.tg", "getgems"]
      },
      amount: {
        $ref: "#/components/schemas/Price"
      },
      nft: {
        $ref: "#/components/schemas/NftItem"
      },
      bidder: {
        $ref: "#/components/schemas/AccountAddress"
      },
      auction: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/DepositStakeAction": {
    type: "object",
    required: ["amount", "staker", "pool", "implementation"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      },
      pool: {
        $ref: "#/components/schemas/AccountAddress"
      },
      implementation: {
        $ref: "#/components/schemas/PoolImplementationType"
      }
    }
  },
  "#/components/schemas/WithdrawStakeAction": {
    type: "object",
    required: ["amount", "staker", "pool", "implementation"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      },
      pool: {
        $ref: "#/components/schemas/AccountAddress"
      },
      implementation: {
        $ref: "#/components/schemas/PoolImplementationType"
      }
    }
  },
  "#/components/schemas/WithdrawStakeRequestAction": {
    type: "object",
    required: ["staker", "pool", "implementation"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      },
      pool: {
        $ref: "#/components/schemas/AccountAddress"
      },
      implementation: {
        $ref: "#/components/schemas/PoolImplementationType"
      }
    }
  },
  "#/components/schemas/ElectionsRecoverStakeAction": {
    type: "object",
    required: ["amount", "staker"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/ElectionsDepositStakeAction": {
    type: "object",
    required: ["amount", "staker"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/JettonSwapAction": {
    type: "object",
    required: ["dex", "amount_in", "amount_out", "user_wallet", "router"],
    properties: {
      dex: {
        type: "string",
        enum: ["stonfi", "dedust", "megatonfi"]
      },
      amount_in: {
        type: "string"
      },
      amount_out: {
        type: "string"
      },
      ton_in: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      ton_out: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      user_wallet: {
        $ref: "#/components/schemas/AccountAddress"
      },
      router: {
        $ref: "#/components/schemas/AccountAddress"
      },
      jetton_master_in: {
        $ref: "#/components/schemas/JettonPreview"
      },
      jetton_master_out: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/NftPurchaseAction": {
    type: "object",
    required: ["amount", "seller", "buyer", "auction_type", "nft"],
    properties: {
      auction_type: {
        type: "string",
        enum: ["DNS.ton", "DNS.tg", "NUMBER.tg", "getgems"]
      },
      amount: {
        $ref: "#/components/schemas/Price"
      },
      nft: {
        $ref: "#/components/schemas/NftItem"
      },
      seller: {
        $ref: "#/components/schemas/AccountAddress"
      },
      buyer: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/ActionSimplePreview": {
    type: "object",
    required: ["name", "description", "accounts"],
    properties: {
      name: {
        type: "string"
      },
      description: {
        type: "string"
      },
      action_image: {
        type: "string"
      },
      value: {
        type: "string"
      },
      value_image: {
        type: "string"
      },
      accounts: {
        type: "array",
        items: {
          $ref: "#/components/schemas/AccountAddress"
        }
      }
    }
  },
  "#/components/schemas/AccountEvent": {
    type: "object",
    required: ["event_id", "timestamp", "actions", "account", "is_scam", "lt", "in_progress", "extra"],
    properties: {
      event_id: {
        type: "string"
      },
      account: {
        $ref: "#/components/schemas/AccountAddress"
      },
      timestamp: {
        type: "integer",
        format: "int64"
      },
      actions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Action"
        }
      },
      is_scam: {
        type: "boolean"
      },
      lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      in_progress: {
        type: "boolean"
      },
      extra: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/AccountEvents": {
    type: "object",
    required: ["events", "next_from"],
    properties: {
      events: {
        type: "array",
        items: {
          $ref: "#/components/schemas/AccountEvent"
        }
      },
      next_from: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/TraceID": {
    type: "object",
    required: ["id", "utime"],
    properties: {
      id: {
        type: "string"
      },
      utime: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/TraceIDs": {
    type: "object",
    required: ["traces"],
    properties: {
      traces: {
        type: "array",
        items: {
          $ref: "#/components/schemas/TraceID"
        }
      }
    }
  },
  "#/components/schemas/ApyHistory": {
    type: "object",
    required: ["apy", "time"],
    properties: {
      apy: {
        type: "number"
      },
      time: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/Subscription": {
    type: "object",
    required: ["address", "wallet_address", "beneficiary_address", "amount", "period", "start_time", "timeout", "last_payment_time", "last_request_time", "subscription_id", "failed_attempts"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      wallet_address: {
        type: "string",
        format: "address"
      },
      beneficiary_address: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "integer",
        format: "int64"
      },
      period: {
        type: "integer",
        format: "int64"
      },
      start_time: {
        type: "integer",
        format: "int64"
      },
      timeout: {
        type: "integer",
        format: "int64"
      },
      last_payment_time: {
        type: "integer",
        format: "int64"
      },
      last_request_time: {
        type: "integer",
        format: "int64"
      },
      subscription_id: {
        type: "integer",
        format: "int64"
      },
      failed_attempts: {
        type: "integer",
        format: "int32"
      }
    }
  },
  "#/components/schemas/Subscriptions": {
    type: "object",
    required: ["subscriptions"],
    properties: {
      subscriptions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Subscription"
        }
      }
    }
  },
  "#/components/schemas/Auction": {
    type: "object",
    required: ["domain", "owner", "price", "bids", "date"],
    properties: {
      domain: {
        type: "string"
      },
      owner: {
        type: "string",
        format: "address"
      },
      price: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      bids: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      date: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/Auctions": {
    type: "object",
    required: ["data", "total"],
    properties: {
      data: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Auction"
        }
      },
      total: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/WalletDNS": {
    type: "object",
    required: ["address", "is_wallet", "has_method_pubkey", "has_method_seqno", "names", "account"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      account: {
        $ref: "#/components/schemas/AccountAddress"
      },
      is_wallet: {
        type: "boolean"
      },
      has_method_pubkey: {
        type: "boolean"
      },
      has_method_seqno: {
        type: "boolean"
      },
      names: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/DomainInfo": {
    type: "object",
    required: ["name"],
    properties: {
      name: {
        type: "string"
      },
      expiring_at: {
        type: "integer",
        format: "int64"
      },
      item: {
        $ref: "#/components/schemas/NftItem"
      }
    }
  },
  "#/components/schemas/DnsRecord": {
    type: "object",
    required: ["sites"],
    properties: {
      wallet: {
        $ref: "#/components/schemas/WalletDNS"
      },
      next_resolver: {
        type: "string",
        format: "address"
      },
      sites: {
        type: "array",
        items: {
          type: "string"
        }
      },
      storage: {
        type: "string"
      }
    }
  },
  "#/components/schemas/NftCollection": {
    type: "object",
    required: ["address", "next_item_index", "raw_collection_content", "approved_by"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      next_item_index: {
        type: "integer",
        format: "int64"
      },
      owner: {
        $ref: "#/components/schemas/AccountAddress"
      },
      raw_collection_content: {
        type: "string",
        format: "cell"
      },
      metadata: {
        type: "object",
        additionalProperties: !0
      },
      previews: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ImagePreview"
        }
      },
      approved_by: {
        $ref: "#/components/schemas/NftApprovedBy"
      }
    }
  },
  "#/components/schemas/NftCollections": {
    type: "object",
    required: ["nft_collections"],
    properties: {
      nft_collections: {
        type: "array",
        items: {
          $ref: "#/components/schemas/NftCollection"
        }
      }
    }
  },
  "#/components/schemas/Trace": {
    type: "object",
    required: ["transaction", "interfaces"],
    properties: {
      transaction: {
        $ref: "#/components/schemas/Transaction"
      },
      interfaces: {
        type: "array",
        items: {
          type: "string"
        }
      },
      children: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Trace"
        }
      },
      emulated: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/MessageConsequences": {
    type: "object",
    required: ["trace", "risk", "event"],
    properties: {
      trace: {
        $ref: "#/components/schemas/Trace"
      },
      risk: {
        $ref: "#/components/schemas/Risk"
      },
      event: {
        $ref: "#/components/schemas/AccountEvent"
      }
    }
  },
  "#/components/schemas/Risk": {
    type: "object",
    required: ["transfer_all_remaining_balance", "ton", "jettons", "nfts"],
    properties: {
      transfer_all_remaining_balance: {
        type: "boolean"
      },
      ton: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      jettons: {
        type: "array",
        items: {
          $ref: "#/components/schemas/JettonQuantity"
        }
      },
      nfts: {
        type: "array",
        items: {
          $ref: "#/components/schemas/NftItem"
        }
      }
    }
  },
  "#/components/schemas/JettonQuantity": {
    type: "object",
    required: ["quantity", "wallet_address", "jetton"],
    properties: {
      quantity: {
        type: "string"
      },
      wallet_address: {
        $ref: "#/components/schemas/AccountAddress"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/DecodedMessage": {
    type: "object",
    required: ["destination", "destination_wallet_version"],
    properties: {
      destination: {
        $ref: "#/components/schemas/AccountAddress"
      },
      destination_wallet_version: {
        type: "string"
      },
      ext_in_msg_decoded: {
        type: "object",
        properties: {
          wallet_v3: {
            type: "object",
            required: ["subwallet_id", "valid_until", "seqno", "op", "raw_messages"],
            properties: {
              subwallet_id: {
                type: "integer",
                format: "int64"
              },
              valid_until: {
                type: "integer",
                format: "int64"
              },
              seqno: {
                type: "integer",
                format: "int64"
              },
              raw_messages: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/DecodedRawMessage"
                }
              }
            }
          },
          wallet_v4: {
            type: "object",
            required: ["subwallet_id", "valid_until", "seqno", "op", "raw_messages"],
            properties: {
              subwallet_id: {
                type: "integer",
                format: "int64"
              },
              valid_until: {
                type: "integer",
                format: "int64"
              },
              seqno: {
                type: "integer",
                format: "int64"
              },
              op: {
                type: "integer",
                format: "int32"
              },
              raw_messages: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/DecodedRawMessage"
                }
              }
            }
          },
          wallet_highload_v2: {
            type: "object",
            required: ["subwallet_id", "bounded_query_id", "raw_messages"],
            properties: {
              subwallet_id: {
                type: "integer",
                format: "int64"
              },
              bounded_query_id: {
                type: "string"
              },
              raw_messages: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/DecodedRawMessage"
                }
              }
            }
          }
        }
      }
    }
  },
  "#/components/schemas/DecodedRawMessage": {
    type: "object",
    required: ["message", "mode"],
    properties: {
      message: {
        type: "object",
        required: ["boc"],
        properties: {
          boc: {
            type: "string",
            format: "cell"
          },
          decoded_op_name: {
            type: "string"
          },
          op_code: {
            type: "string"
          },
          decoded_body: {}
        }
      },
      mode: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/Event": {
    type: "object",
    required: ["event_id", "timestamp", "actions", "value_flow", "is_scam", "lt", "in_progress"],
    properties: {
      event_id: {
        type: "string"
      },
      timestamp: {
        type: "integer",
        format: "int64"
      },
      actions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Action"
        }
      },
      value_flow: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ValueFlow"
        }
      },
      is_scam: {
        type: "boolean"
      },
      lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      in_progress: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/JettonMetadata": {
    type: "object",
    required: ["address", "name", "symbol", "decimals"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      name: {
        type: "string"
      },
      symbol: {
        type: "string"
      },
      decimals: {
        type: "string"
      },
      image: {
        type: "string"
      },
      description: {
        type: "string"
      },
      social: {
        type: "array",
        items: {
          type: "string"
        }
      },
      websites: {
        type: "array",
        items: {
          type: "string"
        }
      },
      catalogs: {
        type: "array",
        items: {
          type: "string"
        }
      },
      custom_payload_api_uri: {
        type: "string"
      }
    }
  },
  "#/components/schemas/InscriptionBalances": {
    type: "object",
    required: ["inscriptions"],
    properties: {
      inscriptions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/InscriptionBalance"
        }
      }
    }
  },
  "#/components/schemas/InscriptionBalance": {
    type: "object",
    required: ["type", "ticker", "balance", "decimals"],
    properties: {
      type: {
        type: "string",
        enum: ["ton20", "gram20"]
      },
      ticker: {
        type: "string"
      },
      balance: {
        type: "string"
      },
      decimals: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/Jettons": {
    type: "object",
    required: ["jettons"],
    properties: {
      jettons: {
        type: "array",
        items: {
          $ref: "#/components/schemas/JettonInfo"
        }
      }
    }
  },
  "#/components/schemas/JettonInfo": {
    type: "object",
    required: ["mintable", "total_supply", "metadata", "verification", "holders_count"],
    properties: {
      mintable: {
        type: "boolean"
      },
      total_supply: {
        type: "string"
      },
      admin: {
        $ref: "#/components/schemas/AccountAddress"
      },
      metadata: {
        $ref: "#/components/schemas/JettonMetadata"
      },
      verification: {
        $ref: "#/components/schemas/JettonVerificationType"
      },
      holders_count: {
        type: "integer",
        format: "int32"
      }
    }
  },
  "#/components/schemas/JettonHolders": {
    type: "object",
    required: ["addresses", "total"],
    properties: {
      addresses: {
        type: "array",
        items: {
          type: "object",
          required: ["address", "owner", "balance"],
          properties: {
            address: {
              type: "string",
              format: "address"
            },
            owner: {
              $ref: "#/components/schemas/AccountAddress"
            },
            balance: {
              type: "string"
            }
          }
        }
      },
      total: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/JettonTransferPayload": {
    type: "object",
    required: ["payload"],
    properties: {
      custom_payload: {
        type: "string"
      },
      state_init: {
        type: "string"
      }
    }
  },
  "#/components/schemas/AccountStaking": {
    type: "object",
    required: ["pools"],
    properties: {
      pools: {
        type: "array",
        items: {
          $ref: "#/components/schemas/AccountStakingInfo"
        }
      }
    }
  },
  "#/components/schemas/AccountStakingInfo": {
    type: "object",
    required: ["pool", "amount", "pending_deposit", "pending_withdraw", "ready_withdraw"],
    properties: {
      pool: {
        type: "string"
      },
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      pending_deposit: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      pending_withdraw: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      ready_withdraw: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      }
    }
  },
  "#/components/schemas/PoolInfo": {
    type: "object",
    required: ["address", "total_amount", "implementation", "apy", "name", "min_stake", "cycle_start", "cycle_end", "verified", "current_nominators", "max_nominators", "nominators_stake", "validator_stake"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      name: {
        type: "string"
      },
      total_amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      implementation: {
        $ref: "#/components/schemas/PoolImplementationType"
      },
      apy: {
        type: "number"
      },
      min_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      cycle_start: {
        type: "integer",
        format: "int64"
      },
      cycle_end: {
        type: "integer",
        format: "int64"
      },
      verified: {
        type: "boolean"
      },
      current_nominators: {
        type: "integer"
      },
      max_nominators: {
        type: "integer"
      },
      liquid_jetton_master: {
        type: "string",
        format: "address"
      },
      nominators_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      validator_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      cycle_length: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/PoolImplementation": {
    type: "object",
    required: ["name", "description", "url", "socials"],
    properties: {
      name: {
        type: "string"
      },
      description: {
        type: "string"
      },
      url: {
        type: "string"
      },
      socials: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/StorageProvider": {
    type: "object",
    required: ["address", "accept_new_contracts", "rate_per_mb_day", "max_span", "minimal_file_size", "maximal_file_size"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      accept_new_contracts: {
        type: "boolean"
      },
      rate_per_mb_day: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      max_span: {
        type: "integer",
        format: "int64"
      },
      minimal_file_size: {
        type: "integer",
        format: "int64"
      },
      maximal_file_size: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/FoundAccounts": {
    type: "object",
    required: ["addresses"],
    properties: {
      addresses: {
        type: "array",
        items: {
          type: "object",
          required: ["address", "name", "preview"],
          properties: {
            address: {
              type: "string",
              format: "address"
            },
            name: {
              type: "string"
            },
            preview: {
              type: "string"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/DnsExpiring": {
    type: "object",
    required: ["items"],
    properties: {
      items: {
        type: "array",
        items: {
          type: "object",
          required: ["expiring_at", "name"],
          properties: {
            expiring_at: {
              type: "integer",
              format: "int64"
            },
            name: {
              type: "string"
            },
            dns_item: {
              $ref: "#/components/schemas/NftItem"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/AccountInfoByStateInit": {
    type: "object",
    required: ["public_key", "address"],
    properties: {
      public_key: {
        type: "string"
      },
      address: {
        type: "string",
        format: "address"
      }
    }
  },
  "#/components/schemas/Seqno": {
    type: "object",
    required: ["seqno"],
    properties: {
      seqno: {
        type: "integer",
        format: "int32"
      }
    }
  },
  "#/components/schemas/BlockRaw": {
    type: "object",
    required: ["workchain", "shard", "seqno", "root_hash", "file_hash"],
    properties: {
      workchain: {
        type: "integer",
        format: "int32"
      },
      shard: {
        type: "string"
      },
      seqno: {
        type: "integer",
        format: "int32"
      },
      root_hash: {
        type: "string"
      },
      file_hash: {
        type: "string"
      }
    }
  },
  "#/components/schemas/InitStateRaw": {
    type: "object",
    required: ["workchain", "root_hash", "file_hash"],
    properties: {
      workchain: {
        type: "integer",
        format: "int32"
      },
      root_hash: {
        type: "string"
      },
      file_hash: {
        type: "string"
      }
    }
  },
  "#/components/schemas/EncryptedComment": {
    type: "object",
    required: ["encryption_type", "cipher_text"],
    properties: {
      encryption_type: {
        type: "string"
      },
      cipher_text: {
        type: "string"
      }
    }
  },
  "#/components/schemas/BlockchainAccountInspect": {
    type: "object",
    required: ["code", "code_hash", "methods"],
    properties: {
      code: {
        type: "string",
        format: "cell"
      },
      code_hash: {
        type: "string"
      },
      methods: {
        type: "array",
        items: {
          type: "object",
          required: ["id", "method"],
          properties: {
            id: {
              type: "integer",
              format: "int64"
            },
            method: {
              type: "string"
            }
          }
        }
      },
      compiler: {
        type: "string",
        enum: ["func"]
      }
    }
  },
  "#/components/schemas/PoolImplementationType": {
    type: "string",
    enum: ["whales", "tf", "liquidTF"]
  },
  "#/components/schemas/TokenRates": {
    type: "object",
    properties: {
      prices: {
        type: "object",
        additionalProperties: {
          type: "number"
        }
      },
      diff_24h: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      },
      diff_7d: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      },
      diff_30d: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/MarketTonRates": {
    type: "object",
    required: ["market", "usd_price", "last_date_update"],
    properties: {
      market: {
        type: "string"
      },
      usd_price: {
        type: "number"
      },
      last_date_update: {
        type: "integer",
        format: "int64"
      }
    }
  }
};

function eh(r) {
  return r.replace(/(_\w)/g, e => {
    var t;
    return ((t = e[1]) == null ? void 0 : t.toUpperCase()) ?? ""
  })
}

function th(r) {
  return r.replace(/([A-Z])/g, e => `_${e.toLowerCase()}`)
}

function rr(r) {
  return br.Cell.fromBase64(pe.from(r, "hex").toString("base64"))
}

function rh(r) {
  return r.startsWith("-") ? BigInt(r.slice(1)) * -1n : BigInt(r)
}

function l(r, e) {
  const t = e && e.$ref,
    s = t ? wa[t] : e;
  if (Array.isArray(r)) {
    const n = s && s.items;
    return r.map(o => l(o, n))
  } else if (s) {
    if (s.type === "string") {
      if (s.format === "address") return br.Address.parse(r);
      if (s.format === "cell") return r && rr(r);
      if (s.format === "cell-base64") return r && br.Cell.fromBase64(r)
    }
    if (s.type === "integer") return s["x-js-format"] === "bigint" ? BigInt(r) : Number(r);
    if (s.type === "object" && s.format === "tuple-item") switch (r.type) {
      case "tuple":
        const n = s.properties.tuple.items;
        return {
          type: "tuple", items: r.tuple.map(o => l(o, n))
        };
      case "num":
        return {
          type: "int", value: rh(r.num)
        };
      case "cell":
        return {
          type: "cell", cell: rr(r.cell)
        };
      case "slice":
        return {
          type: "slice", slice: rr(r.slice)
        };
      case "null":
        return {
          type: "null"
        };
      case "nan":
        return {
          type: "nan"
        };
      default:
        throw new Error(`Unknown tuple item type: ${r.type}`)
    }
  }
  return r !== null && typeof r == "object" ? Object.keys(r).reduce((n, o) => {
    const i = (s == null ? void 0 : s.properties) && s.properties[o],
      c = eh(o);
    return n[c] = l(r[o], i), n
  }, {}) : r
}

function C(r, e) {
  const t = e && e.$ref,
    s = t ? wa[t] : e;
  if (Array.isArray(r)) {
    const n = s && s.items;
    return r.map(o => C(o, n))
  } else if (s && s.type === "string") {
    if (s.format === "address") return r.toRawString();
    if (s.format === "cell") return r.toBoc().toString("hex");
    if (s.format === "cell-base64") return r.toBoc().toString("base64")
  }
  return r !== null && typeof r == "object" ? Object.keys(r).reduce((n, o) => {
    const i = (s == null ? void 0 : s.properties) && s.properties[o],
      c = th(o);
    return n[c] = C(r[o], i), n
  }, {}) : r
}
class sh {
  constructor(e) {
    p(this, "http");
    p(this, "utilities", {
      status: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/status",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          $ref: "#/components/schemas/ServiceStatus"
        })
      },
      addressParse: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/address/${s}/parse`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          type: "object",
          required: ["raw_form", "bounceable", "non_bounceable", "given_type", "test_only"],
          properties: {
            raw_form: {
              type: "string",
              format: "address"
            },
            bounceable: {
              required: ["b64", "b64url"],
              type: "object",
              properties: {
                b64: {
                  type: "string"
                },
                b64url: {
                  type: "string"
                }
              }
            },
            non_bounceable: {
              required: ["b64", "b64url"],
              type: "object",
              properties: {
                b64: {
                  type: "string"
                },
                b64url: {
                  type: "string"
                }
              }
            },
            given_type: {
              type: "string"
            },
            test_only: {
              type: "boolean"
            }
          }
        })
      }
    });
    p(this, "blockchain", {
      getReducedBlockchainBlocks: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/blockchain/reduced/blocks",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/ReducedBlocks"
        })
      },
      getBlockchainBlock: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/blocks/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/BlockchainBlock"
        })
      },
      getBlockchainMasterchainShards: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/shards`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/BlockchainBlockShards"
        })
      },
      getBlockchainMasterchainBlocks: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/blocks`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/BlockchainBlocks"
        })
      },
      getBlockchainMasterchainTransactions: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/transactions`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/Transactions"
        })
      },
      getBlockchainConfigFromBlock: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/config`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/BlockchainConfig"
        })
      },
      getRawBlockchainConfigFromBlock: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/config/raw`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/RawBlockchainConfig"
        })
      },
      getBlockchainBlockTransactions: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/blocks/${e}/transactions`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/Transactions"
        })
      },
      getBlockchainTransaction: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/transactions/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/Transaction"
        })
      },
      getBlockchainTransactionByMessageHash: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/messages/${e}/transaction`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/Transaction"
        })
      },
      getBlockchainValidators: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/blockchain/validators",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          $ref: "#/components/schemas/Validators"
        })
      },
      getBlockchainMasterchainHead: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/blockchain/masterchain-head",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          $ref: "#/components/schemas/BlockchainBlock"
        })
      },
      getBlockchainRawAccount: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/blockchain/accounts/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          $ref: "#/components/schemas/BlockchainRawAccount"
        })
      },
      getBlockchainAccountTransactions: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/blockchain/accounts/${n}/transactions`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/Transactions"
        })
      },
      execGetMethodForBlockchainAccount: async (e, t, s, n = {}) => {
        const o = e.toRawString(),
          i = await this.http.request({
            path: `/v2/blockchain/accounts/${o}/methods/${t}`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return l(i, {
          $ref: "#/components/schemas/MethodExecutionResult"
        })
      },
      sendBlockchainMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/blockchain/message",
          method: "POST",
          body: C(e, {
            type: "object",
            properties: {
              boc: {
                type: "string",
                format: "cell"
              },
              batch: {
                type: "array",
                maxItems: 10,
                items: {
                  type: "string",
                  format: "cell"
                }
              }
            }
          }),
          ...t
        });
        return l(s)
      },
      getBlockchainConfig: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/blockchain/config",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          $ref: "#/components/schemas/BlockchainConfig"
        })
      },
      getRawBlockchainConfig: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/blockchain/config/raw",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          $ref: "#/components/schemas/RawBlockchainConfig"
        })
      },
      blockchainAccountInspect: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/blockchain/accounts/${s}/inspect`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          $ref: "#/components/schemas/BlockchainAccountInspect"
        })
      },
      status: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/status",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          $ref: "#/components/schemas/ServiceStatus"
        })
      }
    });
    p(this, "accounts", {
      getAccounts: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: "/v2/accounts/_bulk",
          method: "POST",
          query: t,
          body: C(e, {
            type: "object",
            required: ["accountIds"],
            properties: {
              accountIds: {
                type: "array",
                items: {
                  type: "string",
                  format: "address"
                }
              }
            }
          }),
          format: "json",
          ...s
        });
        return l(n, {
          $ref: "#/components/schemas/Accounts"
        })
      },
      getAccount: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/accounts/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          $ref: "#/components/schemas/Account"
        })
      },
      accountDnsBackResolve: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/accounts/${s}/dns/backresolve`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          $ref: "#/components/schemas/DomainNames"
        })
      },
      getAccountJettonsBalances: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/jettons`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/JettonsBalances"
        })
      },
      getAccountJettonBalance: async (e, t, s, n = {}) => {
        const o = e.toRawString(),
          i = t.toRawString(),
          c = await this.http.request({
            path: `/v2/accounts/${o}/jettons/${i}`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return l(c, {
          $ref: "#/components/schemas/JettonBalance"
        })
      },
      getAccountJettonsHistory: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/jettons/history`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountJettonHistoryById: async (e, t, s, n = {}) => {
        const o = e.toRawString(),
          i = t.toRawString(),
          c = await this.http.request({
            path: `/v2/accounts/${o}/jettons/${i}/history`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return l(c, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountNftItems: async (e, t, s = {}) => {
        var i;
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/nfts`,
            method: "GET",
            query: t && {
              ...t,
              collection: (i = t.collection) == null ? void 0 : i.toRawString()
            },
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getAccountEvents: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/events`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountEvent: async (e, t, s, n = {}) => {
        const o = e.toRawString(),
          i = await this.http.request({
            path: `/v2/accounts/${o}/events/${t}`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return l(i, {
          $ref: "#/components/schemas/AccountEvent"
        })
      },
      getAccountTraces: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/traces`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/TraceIDs"
        })
      },
      getAccountSubscriptions: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/accounts/${s}/subscriptions`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          $ref: "#/components/schemas/Subscriptions"
        })
      },
      reindexAccount: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/accounts/${s}/reindex`,
            method: "POST",
            ...t
          });
        return l(n)
      },
      searchAccounts: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/accounts/search",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/FoundAccounts"
        })
      },
      getAccountDnsExpiring: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/dns/expiring`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/DnsExpiring"
        })
      },
      getAccountPublicKey: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/accounts/${s}/publickey`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          type: "object",
          required: ["public_key"],
          properties: {
            public_key: {
              type: "string"
            }
          }
        })
      },
      getAccountMultisigs: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/accounts/${s}/multisigs`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          $ref: "#/components/schemas/Multisigs"
        })
      },
      getAccountDiff: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/diff`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          type: "object",
          required: ["balance_change"],
          properties: {
            balance_change: {
              type: "integer",
              format: "int64"
            }
          }
        })
      },
      addressParse: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/address/${s}/parse`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          type: "object",
          required: ["raw_form", "bounceable", "non_bounceable", "given_type", "test_only"],
          properties: {
            raw_form: {
              type: "string",
              format: "address"
            },
            bounceable: {
              required: ["b64", "b64url"],
              type: "object",
              properties: {
                b64: {
                  type: "string"
                },
                b64url: {
                  type: "string"
                }
              }
            },
            non_bounceable: {
              required: ["b64", "b64url"],
              type: "object",
              properties: {
                b64: {
                  type: "string"
                },
                b64url: {
                  type: "string"
                }
              }
            },
            given_type: {
              type: "string"
            },
            test_only: {
              type: "boolean"
            }
          }
        })
      }
    });
    p(this, "nft", {
      getAccountNftHistory: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/nfts/history`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getNftCollections: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/nfts/collections",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/NftCollections"
        })
      },
      getNftCollection: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/nfts/collections/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          $ref: "#/components/schemas/NftCollection"
        })
      },
      getItemsFromCollection: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/nfts/collections/${n}/items`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getNftItemsByAddresses: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/nfts/_bulk",
          method: "POST",
          body: C(e, {
            type: "object",
            required: ["accountIds"],
            properties: {
              accountIds: {
                type: "array",
                items: {
                  type: "string",
                  format: "address"
                }
              }
            }
          }),
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getNftItemByAddress: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/nfts/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          $ref: "#/components/schemas/NftItem"
        })
      },
      getNftHistoryById: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/nfts/${n}/history`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      }
    });
    p(this, "dns", {
      getDnsInfo: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/dns/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/DomainInfo"
        })
      },
      dnsResolve: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/dns/${e}/resolve`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/DnsRecord"
        })
      },
      getDomainBids: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/dns/${e}/bids`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/DomainBids"
        })
      },
      getAllAuctions: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/dns/auctions",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/Auctions"
        })
      }
    });
    p(this, "traces", {
      getTrace: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/traces/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/Trace"
        })
      }
    });
    p(this, "events", {
      getEvent: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/events/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/Event"
        })
      }
    });
    p(this, "inscriptions", {
      getAccountInscriptions: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/experimental/accounts/${n}/inscriptions`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/InscriptionBalances"
        })
      },
      getAccountInscriptionsHistory: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/experimental/accounts/${n}/inscriptions/history`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountInscriptionsHistoryByTicker: async (e, t, s, n = {}) => {
        const o = e.toRawString(),
          i = await this.http.request({
            path: `/v2/experimental/accounts/${o}/inscriptions/${t}/history`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return l(i, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getInscriptionOpTemplate: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/experimental/inscriptions/op-template",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return l(s, {
          type: "object",
          required: ["comment", "destination"],
          properties: {
            comment: {
              type: "string"
            },
            destination: {
              type: "string"
            }
          }
        })
      }
    });
    p(this, "jettons", {
      getJettons: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/jettons",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/Jettons"
        })
      },
      getJettonInfo: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/jettons/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          $ref: "#/components/schemas/JettonInfo"
        })
      },
      getJettonHolders: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/jettons/${n}/holders`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/JettonHolders"
        })
      },
      getJettonTransferPayload: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = t.toRawString(),
          i = await this.http.request({
            path: `/v2/jettons/${o}/transfer/${n}/payload`,
            method: "GET",
            format: "json",
            ...s
          });
        return l(i, {
          $ref: "#/components/schemas/JettonTransferPayload"
        })
      },
      getJettonsEvents: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/events/${e}/jettons`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/Event"
        })
      }
    });
    p(this, "staking", {
      getAccountNominatorsPools: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/staking/nominator/${s}/pools`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          $ref: "#/components/schemas/AccountStaking"
        })
      },
      getStakingPoolInfo: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/staking/pool/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          type: "object",
          required: ["implementation", "pool"],
          properties: {
            implementation: {
              $ref: "#/components/schemas/PoolImplementation"
            },
            pool: {
              $ref: "#/components/schemas/PoolInfo"
            }
          }
        })
      },
      getStakingPoolHistory: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/staking/pool/${s}/history`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          type: "object",
          required: ["apy"],
          properties: {
            apy: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ApyHistory"
              }
            }
          }
        })
      },
      getStakingPools: async (e, t = {}) => {
        var n;
        const s = await this.http.request({
          path: "/v2/staking/pools",
          method: "GET",
          query: e && {
            ...e,
            available_for: (n = e.available_for) == null ? void 0 : n.toRawString()
          },
          format: "json",
          ...t
        });
        return l(s, {
          type: "object",
          required: ["pools", "implementations"],
          properties: {
            pools: {
              type: "array",
              items: {
                $ref: "#/components/schemas/PoolInfo"
              }
            },
            implementations: {
              type: "object",
              additionalProperties: {
                $ref: "#/components/schemas/PoolImplementation"
              }
            }
          }
        })
      }
    });
    p(this, "storage", {
      getStorageProviders: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/storage/providers",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          type: "object",
          required: ["providers"],
          properties: {
            providers: {
              type: "array",
              items: {
                $ref: "#/components/schemas/StorageProvider"
              }
            }
          }
        })
      }
    });
    p(this, "rates", {
      getRates: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/rates",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return l(s, {
          type: "object",
          required: ["rates"],
          properties: {
            rates: {
              type: "object",
              additionalProperties: {
                $ref: "#/components/schemas/TokenRates"
              }
            }
          }
        })
      },
      getChartRates: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/rates/chart",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return l(s, {
          type: "object",
          required: ["points"],
          properties: {
            points: {
              additionalProperties: !0,
              example: {}
            }
          }
        })
      },
      getMarketsRates: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/rates/markets",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          type: "object",
          required: ["markets"],
          properties: {
            markets: {
              type: "array",
              items: {
                $ref: "#/components/schemas/MarketTonRates"
              }
            }
          }
        })
      }
    });
    p(this, "connect", {
      getTonConnectPayload: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/tonconnect/payload",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          type: "object",
          required: ["payload"],
          properties: {
            payload: {
              type: "string"
            }
          }
        })
      },
      getAccountInfoByStateInit: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/tonconnect/stateinit",
          method: "POST",
          body: C(e, {
            type: "object",
            required: ["stateInit"],
            properties: {
              stateInit: {
                type: "string",
                format: "cell-base64"
              }
            }
          }),
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/AccountInfoByStateInit"
        })
      }
    });
    p(this, "wallet", {
      getWalletBackup: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/wallet/backup",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          type: "object",
          required: ["dump"],
          properties: {
            dump: {
              type: "string"
            }
          }
        })
      },
      setWalletBackup: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/backup",
          method: "PUT",
          body: C(e),
          ...t
        });
        return l(s)
      },
      tonConnectProof: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/auth/proof",
          method: "POST",
          body: C(e, {
            type: "object",
            required: ["address", "proof"],
            properties: {
              address: {
                type: "string",
                format: "address"
              },
              proof: {
                type: "object",
                required: ["timestamp", "domain", "signature", "payload"],
                properties: {
                  timestamp: {
                    type: "integer",
                    format: "int64"
                  },
                  domain: {
                    type: "object",
                    required: ["value"],
                    properties: {
                      lengthBytes: {
                        type: "integer",
                        format: "int32"
                      },
                      value: {
                        type: "string"
                      }
                    }
                  },
                  signature: {
                    type: "string"
                  },
                  payload: {
                    type: "string"
                  },
                  stateInit: {
                    type: "string",
                    format: "cell-base64"
                  }
                }
              }
            }
          }),
          format: "json",
          ...t
        });
        return l(s, {
          type: "object",
          required: ["token"],
          properties: {
            token: {
              type: "string"
            }
          }
        })
      },
      getAccountSeqno: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/wallet/${s}/seqno`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          $ref: "#/components/schemas/Seqno"
        })
      },
      getWalletsByPublicKey: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/pubkeys/${e}/wallets`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/Accounts"
        })
      }
    });
    p(this, "gasless", {
      gaslessConfig: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/gasless/config",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          $ref: "#/components/schemas/GaslessConfig"
        })
      },
      gaslessEstimate: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/gasless/estimate/${n}`,
            method: "POST",
            body: C(t, {
              type: "object",
              required: ["messages", "walletAddress", "walletPublicKey"],
              properties: {
                walletAddress: {
                  type: "string",
                  format: "address"
                },
                walletPublicKey: {
                  type: "string"
                },
                messages: {
                  type: "array",
                  items: {
                    type: "object",
                    required: ["boc"],
                    properties: {
                      boc: {
                        type: "string",
                        format: "cell"
                      }
                    }
                  }
                }
              }
            }),
            format: "json",
            ...s
          });
        return l(o, {
          $ref: "#/components/schemas/SignRawParams"
        })
      },
      gaslessSend: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/gasless/send",
          method: "POST",
          body: C(e, {
            type: "object",
            required: ["boc", "walletPublicKey"],
            properties: {
              walletPublicKey: {
                type: "string"
              },
              boc: {
                type: "string",
                format: "cell"
              }
            }
          }),
          ...t
        });
        return l(s)
      }
    });
    p(this, "liteServer", {
      getRawMasterchainInfo: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/liteserver/get_masterchain_info",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          type: "object",
          required: ["last", "state_root_hash", "init"],
          properties: {
            last: {
              $ref: "#/components/schemas/BlockRaw"
            },
            state_root_hash: {
              type: "string"
            },
            init: {
              $ref: "#/components/schemas/InitStateRaw"
            }
          }
        })
      },
      getRawMasterchainInfoExt: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/liteserver/get_masterchain_info_ext",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return l(s, {
          type: "object",
          required: ["mode", "version", "capabilities", "last", "last_utime", "now", "state_root_hash", "init"],
          properties: {
            mode: {
              type: "integer",
              format: "int32"
            },
            version: {
              type: "integer",
              format: "int32"
            },
            capabilities: {
              type: "integer",
              format: "int64"
            },
            last: {
              $ref: "#/components/schemas/BlockRaw"
            },
            last_utime: {
              type: "integer",
              format: "int32"
            },
            now: {
              type: "integer",
              format: "int32"
            },
            state_root_hash: {
              type: "string"
            },
            init: {
              $ref: "#/components/schemas/InitStateRaw"
            }
          }
        })
      },
      getRawTime: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/liteserver/get_time",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          type: "object",
          required: ["time"],
          properties: {
            time: {
              type: "integer",
              format: "int32"
            }
          }
        })
      },
      getRawBlockchainBlock: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/liteserver/get_block/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          type: "object",
          required: ["id", "data"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            data: {
              type: "string"
            }
          }
        })
      },
      getRawBlockchainBlockState: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/liteserver/get_state/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          type: "object",
          required: ["id", "root_hash", "file_hash", "data"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            root_hash: {
              type: "string"
            },
            file_hash: {
              type: "string"
            },
            data: {
              type: "string"
            }
          }
        })
      },
      getRawBlockchainBlockHeader: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: `/v2/liteserver/get_block_header/${e}`,
          method: "GET",
          query: t,
          format: "json",
          ...s
        });
        return l(n, {
          type: "object",
          required: ["id", "mode", "header_proof"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            mode: {
              type: "integer",
              format: "int32"
            },
            header_proof: {
              type: "string"
            }
          }
        })
      },
      sendRawMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/liteserver/send_message",
          method: "POST",
          body: C(e, {
            type: "object",
            required: ["body"],
            properties: {
              body: {
                type: "string",
                format: "cell-base64"
              }
            }
          }),
          format: "json",
          ...t
        });
        return l(s, {
          type: "object",
          required: ["code"],
          properties: {
            code: {
              type: "integer",
              format: "int32"
            }
          }
        })
      },
      getRawAccountState: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/liteserver/get_account_state/${n}`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          type: "object",
          required: ["id", "shardblk", "shard_proof", "proof", "state"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            shardblk: {
              $ref: "#/components/schemas/BlockRaw"
            },
            shard_proof: {
              type: "string"
            },
            proof: {
              type: "string"
            },
            state: {
              type: "string"
            }
          }
        })
      },
      getRawShardInfo: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: `/v2/liteserver/get_shard_info/${e}`,
          method: "GET",
          query: t,
          format: "json",
          ...s
        });
        return l(n, {
          type: "object",
          required: ["id", "shardblk", "shard_proof", "shard_descr"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            shardblk: {
              $ref: "#/components/schemas/BlockRaw"
            },
            shard_proof: {
              type: "string"
            },
            shard_descr: {
              type: "string"
            }
          }
        })
      },
      getAllRawShardsInfo: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/liteserver/get_all_shards_info/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          type: "object",
          required: ["id", "proof", "data"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            proof: {
              type: "string"
            },
            data: {
              type: "string"
            }
          }
        })
      },
      getRawTransactions: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/liteserver/get_transactions/${n}`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return l(o, {
          type: "object",
          required: ["ids", "transactions"],
          properties: {
            ids: {
              type: "array",
              items: {
                $ref: "#/components/schemas/BlockRaw"
              }
            },
            transactions: {
              type: "string"
            }
          }
        })
      },
      getRawListBlockTransactions: async (e, t, s = {}) => {
        var o;
        const n = await this.http.request({
          path: `/v2/liteserver/list_block_transactions/${e}`,
          method: "GET",
          query: t && {
            ...t,
            account_id: (o = t.account_id) == null ? void 0 : o.toRawString()
          },
          format: "json",
          ...s
        });
        return l(n, {
          type: "object",
          required: ["id", "req_count", "incomplete", "ids", "proof"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            req_count: {
              type: "integer",
              format: "int32"
            },
            incomplete: {
              type: "boolean"
            },
            ids: {
              type: "array",
              items: {
                type: "object",
                required: ["mode"],
                properties: {
                  mode: {
                    type: "integer",
                    format: "int32"
                  },
                  account: {
                    type: "string"
                  },
                  lt: {
                    type: "integer",
                    format: "bigint",
                    "x-js-format": "bigint"
                  },
                  hash: {
                    type: "string"
                  }
                }
              }
            },
            proof: {
              type: "string"
            }
          }
        })
      },
      getRawBlockProof: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/liteserver/get_block_proof",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return l(s, {
          type: "object",
          required: ["complete", "from", "to", "steps"],
          properties: {
            complete: {
              type: "boolean"
            },
            from: {
              $ref: "#/components/schemas/BlockRaw"
            },
            to: {
              $ref: "#/components/schemas/BlockRaw"
            },
            steps: {
              type: "array",
              items: {
                type: "object",
                required: ["lite_server_block_link_back", "lite_server_block_link_forward"],
                properties: {
                  lite_server_block_link_back: {
                    type: "object",
                    required: ["to_key_block", "from", "to", "dest_proof", "proof", "state_proof"],
                    properties: {
                      to_key_block: {
                        type: "boolean"
                      },
                      from: {
                        $ref: "#/components/schemas/BlockRaw"
                      },
                      to: {
                        $ref: "#/components/schemas/BlockRaw"
                      },
                      dest_proof: {
                        type: "string"
                      },
                      proof: {
                        type: "string"
                      },
                      state_proof: {
                        type: "string"
                      }
                    }
                  },
                  lite_server_block_link_forward: {
                    type: "object",
                    required: ["to_key_block", "from", "to", "dest_proof", "config_proof", "signatures"],
                    properties: {
                      to_key_block: {
                        type: "boolean"
                      },
                      from: {
                        $ref: "#/components/schemas/BlockRaw"
                      },
                      to: {
                        $ref: "#/components/schemas/BlockRaw"
                      },
                      dest_proof: {
                        type: "string"
                      },
                      config_proof: {
                        type: "string"
                      },
                      signatures: {
                        type: "object",
                        required: ["validator_set_hash", "catchain_seqno", "signatures"],
                        properties: {
                          validator_set_hash: {
                            type: "integer",
                            format: "int64"
                          },
                          catchain_seqno: {
                            type: "integer",
                            format: "int32"
                          },
                          signatures: {
                            type: "array",
                            items: {
                              type: "object",
                              required: ["node_id_short", "signature"],
                              properties: {
                                node_id_short: {
                                  type: "string"
                                },
                                signature: {
                                  type: "string"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        })
      },
      getRawConfig: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: `/v2/liteserver/get_config_all/${e}`,
          method: "GET",
          query: t,
          format: "json",
          ...s
        });
        return l(n, {
          type: "object",
          required: ["mode", "id", "state_proof", "config_proof"],
          properties: {
            mode: {
              type: "integer",
              format: "int32"
            },
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            state_proof: {
              type: "string"
            },
            config_proof: {
              type: "string"
            }
          }
        })
      },
      getRawShardBlockProof: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/liteserver/get_shard_block_proof/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return l(s, {
          type: "object",
          required: ["masterchain_id", "links"],
          properties: {
            masterchain_id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            links: {
              type: "array",
              items: {
                type: "object",
                required: ["id", "proof"],
                properties: {
                  id: {
                    $ref: "#/components/schemas/BlockRaw"
                  },
                  proof: {
                    type: "string"
                  }
                }
              }
            }
          }
        })
      },
      getOutMsgQueueSizes: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/liteserver/get_out_msg_queue_sizes",
          method: "GET",
          format: "json",
          ...e
        });
        return l(t, {
          type: "object",
          required: ["ext_msg_queue_size_limit", "shards"],
          properties: {
            ext_msg_queue_size_limit: {
              type: "integer",
              format: "uint32"
            },
            shards: {
              type: "array",
              items: {
                type: "object",
                required: ["id", "size"],
                properties: {
                  id: {
                    $ref: "#/components/schemas/BlockRaw"
                  },
                  size: {
                    type: "integer",
                    format: "uint32"
                  }
                }
              }
            }
          }
        })
      }
    });
    p(this, "multisig", {
      getMultisigAccount: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/multisig/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return l(n, {
          $ref: "#/components/schemas/Multisig"
        })
      }
    });
    p(this, "emulation", {
      decodeMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/message/decode",
          method: "POST",
          body: C(e, {
            type: "object",
            required: ["boc"],
            properties: {
              boc: {
                type: "string",
                format: "cell"
              }
            }
          }),
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/DecodedMessage"
        })
      },
      emulateMessageToEvent: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: "/v2/events/emulate",
          method: "POST",
          query: t,
          body: C(e, {
            type: "object",
            required: ["boc"],
            properties: {
              boc: {
                type: "string",
                format: "cell"
              }
            }
          }),
          format: "json",
          ...s
        });
        return l(n, {
          $ref: "#/components/schemas/Event"
        })
      },
      emulateMessageToTrace: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: "/v2/traces/emulate",
          method: "POST",
          query: t,
          body: C(e, {
            type: "object",
            required: ["boc"],
            properties: {
              boc: {
                type: "string",
                format: "cell"
              }
            }
          }),
          format: "json",
          ...s
        });
        return l(n, {
          $ref: "#/components/schemas/Trace"
        })
      },
      emulateMessageToWallet: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/emulate",
          method: "POST",
          body: C(e, {
            type: "object",
            required: ["boc"],
            properties: {
              boc: {
                type: "string",
                format: "cell"
              },
              params: {
                type: "array",
                items: {
                  type: "object",
                  required: ["address"],
                  properties: {
                    address: {
                      type: "string",
                      format: "address"
                    },
                    balance: {
                      type: "integer",
                      format: "bigint",
                      "x-js-format": "bigint"
                    }
                  }
                }
              }
            }
          }),
          format: "json",
          ...t
        });
        return l(s, {
          $ref: "#/components/schemas/MessageConsequences"
        })
      },
      emulateMessageToAccountEvent: async (e, t, s, n = {}) => {
        const o = e.toRawString(),
          i = await this.http.request({
            path: `/v2/accounts/${o}/events/emulate`,
            method: "POST",
            query: s,
            body: C(t, {
              type: "object",
              required: ["boc"],
              properties: {
                boc: {
                  type: "string",
                  format: "cell"
                }
              }
            }),
            format: "json",
            ...n
          });
        return l(i, {
          $ref: "#/components/schemas/AccountEvent"
        })
      }
    });
    this.http = e
  }
}
ba = S.Api = sh;
class nh {
  constructor() {
    p(this, "TON_API_TOKEN");
    p(this, "ta");
    p(this, "MEMEPAD_DEFAULT_SLIPPAGE", 20);
    p(this, "MEMEPAD_ERRORS", {
      TOO_LOW_AMOUNT: "TOO_LOW_AMOUNT"
    });
    p(this, "createGetWaitForLaunchStatusUntilOk", e => () => ar((() => {
      let t, s;
      return async ({
        queryId: n,
        launchTransactionHash: o
      }) => {
        const i = t ?? await li.getSaveMemepadJettonInfoStatus(n),
          c = s ?? await e(o);
        return N(c) && c.data && (s = c), N(i) && i.data.status === hs.READY && (t = i), fs(c) || fs(i) ? D() : N(i) && i.data.status === hs.READY ? F(i.data) : N(c) && !c.data ? F(void 0) : D()
      }
    })(), () => {}, 12e3));
    this.TON_API_TOKEN = co().public.TON_API_TOKEN, this.ta = new ba(new Aa({
      baseUrl: "https://tonapi.io",
      apiKey: this.TON_API_TOKEN
    }))
  }
  getAddress(e) {
    return R.Address.parseFriendly(e).address
  }
  getMemepadJettonInfoFromForm(e) {
    const t = (s, n) => {
      if (n === ui.TELEGRAM) try {
        return new URL(s.trim()).toString()
      } catch {
        return s.trim().startsWith("t.me") ? `https://${s.trim()}` : `https://t.me/${s.trim()}`
      } else try {
        return new URL(s.trim()).toString()
      } catch {
        return `https://${s}`
      }
    };
    return {
      name: e.name.trim(),
      description: e.description.trim(),
      iconFileKey: e.iconFileKey,
      ticker: e.ticker.trim(),
      bannerFileKey: e.bannerFileKey,
      isNSFW: e.isNSFW,
      socials: Object.entries(e.socialProviders).map(([s, n]) => ({
        type: s,
        url: n !== void 0 ? t(n, s) : void 0
      })).filter(({
        url: s
      }) => s)
    }
  }
  useCached(e) {
    const t = ms(e, "$lWcnl8jOnP");
    return {
      get: () => t.value,
      set: s => t.value = s
    }
  }
  useCachedKeys(e) {
    const t = ms(e, () => new Map);
    return {
      get: s => t.value.get(s),
      set: (s, n) => t.value.set(s, n)
    }
  }
  getTonConnectSender() {
    return lo.tonConnectSender(ai().tonConnectUI.value)
  }
  mustGetUserWalletAddress() {
    const e = ii();
    if (e.wallet.value.status !== "connected") throw ci("Wallet is not connected");
    return R.Address.parseFriendly(e.wallet.value.address.default).address
  }
  createGetPriceDetails({
    getFees: e
  }) {
    return t => {
      const s = [],
        {
          buyNetworkFee: n,
          launchPlatformFee: o,
          launchNetworkFee: i
        } = e(),
        c = i ? i.plus(o) : o;
      if (s.push({
          title: b("memepad.new.price_details.launch"),
          details: [...i ? [{
            highlight: !1,
            label: `${b("memepad.jetton.fees_network")}: ${k(i)} TON`
          }] : [], {
            highlight: o.isZero(),
            label: `${b("memepad.jetton.fees_platform")}: ${k(o)} TON`
          }],
          label: `${k(c)} TON`,
          total: c
        }), !t.share.isZero()) {
        const a = new M(t.share.plus(n));
        s.push({
          title: `${b("base.share")} ${di(t.jettonReceivePercent)}%`,
          details: [...n.isZero() ? [] : [{
            highlight: !1,
            label: `${b("memepad.jetton.fees_network")}: ${k(n)} TON`
          }], {
            highlight: !1,
            label: `${b("memepad.jetton.fees_platform")}: ${k(t.platformFee)} TON`
          }],
          label: `${k(a)} TON`,
          total: a
        })
      }
      const d = s.reduce((a, m) => a.plus(m.total), new M(0)),
        u = {
          title: b("memepad.new.price_details.total_label"),
          label: `${k(d)} TON`,
          value: d
        };
      return {
        tonCollected: t.tonCollected,
        tonCollectedPercent: t.tonCollectedPercent,
        sections: s,
        totalSection: u,
        total: d
      }
    }
  }
  getTradeInputStateControls({
    getFees: e,
    getBuyInfo: t,
    getSellInfo: s
  }) {
    const n = async (a, m) => await (a === de.BUY ? t : s)(m), o = a => {
      const {
        buyNetworkFee: m,
        sellNetworkFee: f
      } = e();
      if (a === de.BUY) {
        const y = m;
        return {
          details: [...y.isZero() ? [] : [{
            label: `${b("memepad.jetton.fees_network")}: ${k(y)} TON`
          }], {
            label: `${b("memepad.jetton.fees_platform")}: ${k(new M(0))} TON`
          }],
          total: new M(y),
          totalLabel: `${b("memepad.jetton.fees_base")}: ${k(y)} TON`
        }
      } else {
        const y = f;
        return {
          details: [...y.isZero() ? [] : [{
            label: `${b("memepad.jetton.fees_network")}: ${k(y)} TON`
          }], {
            label: `${b("memepad.jetton.fees_platform")}: ${k(new M(0))} TON`
          }],
          total: new M(y),
          totalLabel: `${b("memepad.jetton.fees_base")}: ${k(y)} TON`
        }
      }
    }, i = (a, m, f) => {
      if (m.isZero()) return o(a);
      const {
        buyNetworkFee: y,
        sellNetworkFee: q
      } = e(), A = f.platformFee;
      if (a === de.BUY) {
        const _ = y,
          v = m.plus(_);
        return {
          details: [..._.isZero() ? [] : [{
            label: `${b("memepad.jetton.fees_network")}: ${k(_)} TON`
          }], {
            label: `${b("memepad.jetton.fees_platform")}: ${k(A)} TON`
          }],
          total: v,
          totalLabel: `${b("memepad.jetton.fees_send")}: ${k(v)} TON`
        }
      } else {
        const _ = q,
          v = A.plus(_);
        return {
          details: [..._.isZero() ? [] : [{
            label: `${b("memepad.jetton.fees_network")}: ${k(_)} TON`
          }], {
            label: `${b("memepad.jetton.fees_platform")}: ${k(A)} TON`
          }],
          total: v,
          totalLabel: `${b("memepad.jetton.fees_base")}: ${k(v)} TON`
        }
      }
    }, c = ({
      operation: a,
      tonBalance: m,
      jettonBalance: f
    }) => ({
      balanceLabel: a === de.BUY ? m == null ? void 0 : m.frontendWithSymbol : f == null ? void 0 : f.frontendWithSymbol,
      tradeInfo: void 0,
      feesInfo: void 0,
      error: void 0,
      ready: !1,
      loading: !1
    }), d = ({
      operation: a,
      amount: m,
      tonBalance: f,
      jettonBalance: y,
      jetton: q
    }) => {
      const {
        buyNetworkFee: A,
        sellNetworkFee: _
      } = e();
      if (!f || !y) return {
        balanceLabel: void 0,
        tradeInfo: void 0,
        feesInfo: void 0,
        error: void 0,
        ready: !1,
        loading: !0
      };
      const v = a === de.BUY ? f.frontendWithSymbol : y == null ? void 0 : y.frontendWithSymbol;
      if (m.isZero()) return {
        balanceLabel: v,
        tradeInfo: void 0,
        feesInfo: o(a),
        error: void 0,
        ready: !1,
        loading: !1
      };
      if (a === de.BUY) {
        const B = A,
          ie = m.plus(B);
        if (f.value.lt(ie)) return {
          balanceLabel: v,
          tradeInfo: void 0,
          feesInfo: void 0,
          error: {
            message: b("memepad.jetton.not_enough_error", {
              ticker: "TON"
            }),
            notEnoughtTon: !0
          },
          ready: !1,
          loading: !1
        }
      } else {
        if (y.value.lt(m)) return {
          balanceLabel: v,
          tradeInfo: void 0,
          feesInfo: void 0,
          error: {
            message: b("memepad.jetton.not_enough_error", {
              ticker: q.ticker
            }),
            notEnoughtTon: !1
          },
          ready: !1,
          loading: !1
        };
        const ei = _;
        if (f.value.lt(ei)) return {
          tradeInfo: void 0,
          feesInfo: void 0,
          balanceLabel: v,
          error: {
            message: b("memepad.jetton.not_enough_error", {
              ticker: "TON"
            }),
            notEnoughtTon: !0
          },
          ready: !1,
          loading: !1
        }
      }
    };
    return {
      getEmptyState: c,
      getImmediateState: d,
      getState: async ({
        operation: a,
        amount: m,
        tonBalance: f,
        jettonBalance: y,
        jetton: q
      }) => {
        const A = d({
          operation: a,
          amount: m,
          tonBalance: f,
          jettonBalance: y,
          jetton: q
        });
        if (A) return A;
        const _ = a === de.BUY ? f.frontendWithSymbol : y.frontendWithSymbol;
        if (m.isZero()) return {
          tradeInfo: void 0,
          balanceLabel: _,
          feesInfo: o(a),
          error: void 0,
          ready: !1,
          loading: !1
        };
        const v = await n(a, m);
        if (!N(v)) return v.extra === this.MEMEPAD_ERRORS.TOO_LOW_AMOUNT ? {
          tradeInfo: void 0,
          feesInfo: void 0,
          balanceLabel: _,
          error: {
            message: b("memepad.jetton.too_low_amount_error"),
            notEnoughtTon: !1
          },
          ready: !1,
          loading: !1
        } : {
          tradeInfo: void 0,
          balanceLabel: void 0,
          feesInfo: void 0,
          ready: !1,
          error: void 0,
          loading: !0
        };
        const B = v.data,
          ie = i(a, m, B);
        return {
          tradeInfo: B,
          balanceLabel: _,
          feesInfo: ie,
          error: void 0,
          ready: !0,
          loading: !1
        }
      }
    }
  }
  getUnlockStateControls({
    unlockNetworkFee: e
  }) {
    const t = () => {
      const n = e;
      return {
        details: [{
          label: `${b("memepad.jetton.fees_network")}: ${k(n)} TON`
        }],
        total: new M(n),
        totalLabel: `${b("memepad.jetton.fees_base")}: ${k(n)} TON`
      }
    };
    return {
      getState: ({
        tonBalance: n,
        jettonBalance: o
      }) => {
        const i = t();
        if (!n || !o || !i) return {
          balanceLabel: void 0,
          feesInfo: void 0,
          error: void 0,
          ready: !1,
          loading: !0
        };
        const c = i.total;
        return n.value.lt(c) ? {
          balanceLabel: o.frontendWithSymbol,
          feesInfo: i,
          error: {
            message: b("memepad.jetton.not_enough_error", {
              ticker: "TON"
            }),
            notEnoughtTon: !0
          },
          ready: !1,
          loading: !1
        } : {
          balanceLabel: o.frontendWithSymbol,
          feesInfo: i,
          error: void 0,
          ready: !0,
          loading: !1
        }
      }
    }
  }
  get slippageStorageKey() {
    return "memepad-slippage"
  }
  getSlippageFromStorage() {
    const e = ys().$webApp.storage.local.get(this.slippageStorageKey);
    if (e === void 0) return;
    const t = Number(e);
    if (!isNaN(t)) return t
  }
  updateSlippageInStorage(e) {
    return ys().$webApp.storage.local.set(this.slippageStorageKey, String(e))
  }
  get slippage() {
    const e = this.getSlippageFromStorage();
    return e !== void 0 ? e : this.MEMEPAD_DEFAULT_SLIPPAGE
  }
  updateSlippage(e) {
    this.updateSlippageInStorage(e)
  }
  getMinReceive(e) {
    return e.times(100 - this.slippage).div(100)
  }
}
const oh = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  ah = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  ih = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function ch(r, e) {
  if (r === "__proto__" || r === "constructor" && e && typeof e == "object" && "prototype" in e) {
    dh(r);
    return
  }
  return e
}

function dh(r) {
  console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`)
}

function lh(r, e = {}) {
  if (typeof r != "string") return r;
  const t = r.trim();
  if (r[0] === '"' && r.endsWith('"') && !r.includes("\\")) return t.slice(1, -1);
  if (t.length <= 9) {
    const s = t.toLowerCase();
    if (s === "true") return !0;
    if (s === "false") return !1;
    if (s === "undefined") return;
    if (s === "null") return null;
    if (s === "nan") return Number.NaN;
    if (s === "infinity") return Number.POSITIVE_INFINITY;
    if (s === "-infinity") return Number.NEGATIVE_INFINITY
  }
  if (!ih.test(r)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return r
  }
  try {
    if (oh.test(r) || ah.test(r)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(r, ch)
    }
    return JSON.parse(r)
  } catch (s) {
    if (e.strict) throw s;
    return r
  }
}
const uh = /#/g,
  ph = /&/g,
  mh = /\//g,
  hh = /=/g,
  Yr = /\+/g,
  fh = /%5e/gi,
  yh = /%60/gi,
  gh = /%7c/gi,
  _h = /%20/gi;

function vh(r) {
  return encodeURI("" + r).replace(gh, "|")
}

function Ar(r) {
  return vh(typeof r == "string" ? r : JSON.stringify(r)).replace(Yr, "%2B").replace(_h, "+").replace(uh, "%23").replace(ph, "%26").replace(yh, "`").replace(fh, "^").replace(mh, "%2F")
}

function sr(r) {
  return Ar(r).replace(hh, "%3D")
}

function Ta(r = "") {
  try {
    return decodeURIComponent("" + r)
  } catch {
    return "" + r
  }
}

function bh(r) {
  return Ta(r.replace(Yr, " "))
}

function Ah(r) {
  return Ta(r.replace(Yr, " "))
}

function wh(r = "") {
  const e = {};
  r[0] === "?" && (r = r.slice(1));
  for (const t of r.split("&")) {
    const s = t.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) continue;
    const n = bh(s[1]);
    if (n === "__proto__" || n === "constructor") continue;
    const o = Ah(s[2] || "");
    e[n] === void 0 ? e[n] = o : Array.isArray(e[n]) ? e[n].push(o) : e[n] = [e[n], o]
  }
  return e
}

function Th(r, e) {
  return (typeof e == "number" || typeof e == "boolean") && (e = String(e)), e ? Array.isArray(e) ? e.map(t => `${sr(r)}=${Ar(t)}`).join("&") : `${sr(r)}=${Ar(e)}` : sr(r)
}

function $h(r) {
  return Object.keys(r).filter(e => r[e] !== void 0).map(e => Th(e, r[e])).filter(Boolean).join("&")
}
const Sh = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  qh = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  kh = /^([/\\]\s*){2,}[^/\\]/,
  jh = /^\.?\//;

function $a(r, e = {}) {
  return typeof e == "boolean" && (e = {
    acceptRelative: e
  }), e.strict ? Sh.test(r) : qh.test(r) || (e.acceptRelative ? kh.test(r) : !1)
}

function Ph(r = "", e) {
  return r.endsWith("/")
}

function Eh(r = "", e) {
  return (Ph(r) ? r.slice(0, -1) : r) || "/"
}

function Ch(r = "", e) {
  return r.endsWith("/") ? r : r + "/"
}

function Ih(r, e) {
  if (Bh(e) || $a(r)) return r;
  const t = Eh(e);
  return r.startsWith(t) ? r : Oh(t, r)
}

function xh(r, e) {
  const t = Nh(r),
    s = {
      ...wh(t.search),
      ...e
    };
  return t.search = $h(s), Gh(t)
}

function Bh(r) {
  return !r || r === "/"
}

function Rh(r) {
  return r && r !== "/"
}

function Oh(r, ...e) {
  let t = r || "";
  for (const s of e.filter(n => Rh(n)))
    if (t) {
      const n = s.replace(jh, "");
      t = Ch(t) + n
    } else t = s;
  return t
}
const Sa = Symbol.for("ufo:protocolRelative");

function Nh(r = "", e) {
  const t = r.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (t) {
    const [, m, f = ""] = t;
    return {
      protocol: m.toLowerCase(),
      pathname: f,
      href: m + f,
      auth: "",
      host: "",
      search: "",
      hash: ""
    }
  }
  if (!$a(r, {
      acceptRelative: !0
    })) return zn(r);
  const [, s = "", n, o = ""] = r.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, i = "", c = ""] = o.match(/([^#/?]*)(.*)?/) || [], {
    pathname: d,
    search: u,
    hash: a
  } = zn(c.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: s.toLowerCase(),
    auth: n ? n.slice(0, Math.max(0, n.length - 1)) : "",
    host: i,
    pathname: d,
    search: u,
    hash: a,
    [Sa]: !s
  }
}

function zn(r = "") {
  const [e = "", t = "", s = ""] = (r.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: e,
    search: t,
    hash: s
  }
}

function Gh(r) {
  const e = r.pathname || "",
    t = r.search ? (r.search.startsWith("?") ? "" : "?") + r.search : "",
    s = r.hash || "",
    n = r.auth ? r.auth + "@" : "",
    o = r.host || "";
  return (r.protocol || r[Sa] ? (r.protocol || "") + "//" : "") + n + o + e + t + s
}
class Dh extends Error {
  constructor(e, t) {
    super(e, t), this.name = "FetchError", t != null && t.cause && !this.cause && (this.cause = t.cause)
  }
}

function Fh(r) {
  var e, t, s, n, o;
  const i = ((e = r.error) == null ? void 0 : e.message) || ((t = r.error) == null ? void 0 : t.toString()) || "",
    c = ((s = r.request) == null ? void 0 : s.method) || ((n = r.options) == null ? void 0 : n.method) || "GET",
    d = ((o = r.request) == null ? void 0 : o.url) || String(r.request) || "/",
    u = `[${c}] ${JSON.stringify(d)}`,
    a = r.response ? `${r.response.status} ${r.response.statusText}` : "<no response>",
    m = `${u}: ${a}${i?` ${i}`:""}`,
    f = new Dh(m, r.error ? {
      cause: r.error
    } : void 0);
  for (const y of ["request", "options", "response"]) Object.defineProperty(f, y, {
    get() {
      return r[y]
    }
  });
  for (const [y, q] of [
      ["data", "_data"],
      ["status", "status"],
      ["statusCode", "status"],
      ["statusText", "statusText"],
      ["statusMessage", "statusText"]
    ]) Object.defineProperty(f, y, {
    get() {
      return r.response && r.response[q]
    }
  });
  return f
}
const Mh = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function Kn(r = "GET") {
  return Mh.has(r.toUpperCase())
}

function Lh(r) {
  if (r === void 0) return !1;
  const e = typeof r;
  return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(r) ? !0 : r.buffer ? !1 : r.constructor && r.constructor.name === "Object" || typeof r.toJSON == "function"
}
const Jh = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
  Wh = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function Uh(r = "") {
  if (!r) return "json";
  const e = r.split(";").shift() || "";
  return Wh.test(e) ? "json" : Jh.has(e) || e.startsWith("text/") ? "text" : "blob"
}

function Vh(r, e, t = globalThis.Headers) {
  const s = {
    ...e,
    ...r
  };
  if (e != null && e.params && r != null && r.params && (s.params = {
      ...e == null ? void 0 : e.params,
      ...r == null ? void 0 : r.params
    }), e != null && e.query && r != null && r.query && (s.query = {
      ...e == null ? void 0 : e.query,
      ...r == null ? void 0 : r.query
    }), e != null && e.headers && r != null && r.headers) {
    s.headers = new t((e == null ? void 0 : e.headers) || {});
    for (const [n, o] of new t((r == null ? void 0 : r.headers) || {})) s.headers.set(n, o)
  }
  return s
}
const zh = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  Kh = new Set([101, 204, 205, 304]);

function qa(r = {}) {
  const {
    fetch: e = globalThis.fetch,
    Headers: t = globalThis.Headers,
    AbortController: s = globalThis.AbortController
  } = r;
  async function n(c) {
    const d = c.error && c.error.name === "AbortError" && !c.options.timeout || !1;
    if (c.options.retry !== !1 && !d) {
      let a;
      typeof c.options.retry == "number" ? a = c.options.retry : a = Kn(c.options.method) ? 0 : 1;
      const m = c.response && c.response.status || 500;
      if (a > 0 && (Array.isArray(c.options.retryStatusCodes) ? c.options.retryStatusCodes.includes(m) : zh.has(m))) {
        const f = c.options.retryDelay || 0;
        return f > 0 && await new Promise(y => setTimeout(y, f)), o(c.request, {
          ...c.options,
          retry: a - 1
        })
      }
    }
    const u = Fh(c);
    throw Error.captureStackTrace && Error.captureStackTrace(u, o), u
  }
  const o = async function(c, d = {}) {
    var u;
    const a = {
      request: c,
      options: Vh(d, r.defaults, t),
      response: void 0,
      error: void 0
    };
    a.options.method = (u = a.options.method) == null ? void 0 : u.toUpperCase(), a.options.onRequest && await a.options.onRequest(a), typeof a.request == "string" && (a.options.baseURL && (a.request = Ih(a.request, a.options.baseURL)), (a.options.query || a.options.params) && (a.request = xh(a.request, {
      ...a.options.params,
      ...a.options.query
    }))), a.options.body && Kn(a.options.method) && (Lh(a.options.body) ? (a.options.body = typeof a.options.body == "string" ? a.options.body : JSON.stringify(a.options.body), a.options.headers = new t(a.options.headers || {}), a.options.headers.has("content-type") || a.options.headers.set("content-type", "application/json"), a.options.headers.has("accept") || a.options.headers.set("accept", "application/json")) : ("pipeTo" in a.options.body && typeof a.options.body.pipeTo == "function" || typeof a.options.body.pipe == "function") && ("duplex" in a.options || (a.options.duplex = "half")));
    let m;
    if (!a.options.signal && a.options.timeout) {
      const f = new s;
      m = setTimeout(() => f.abort(), a.options.timeout), a.options.signal = f.signal
    }
    try {
      a.response = await e(a.request, a.options)
    } catch (f) {
      return a.error = f, a.options.onRequestError && await a.options.onRequestError(a), await n(a)
    } finally {
      m && clearTimeout(m)
    }
    if (a.response.body && !Kh.has(a.response.status) && a.options.method !== "HEAD") {
      const f = (a.options.parseResponse ? "json" : a.options.responseType) || Uh(a.response.headers.get("content-type") || "");
      switch (f) {
        case "json": {
          const y = await a.response.text(),
            q = a.options.parseResponse || lh;
          a.response._data = q(y);
          break
        }
        case "stream": {
          a.response._data = a.response.body;
          break
        }
        default:
          a.response._data = await a.response[f]()
      }
    }
    return a.options.onResponse && await a.options.onResponse(a), !a.options.ignoreResponseError && a.response.status >= 400 && a.response.status < 600 ? (a.options.onResponseError && await a.options.onResponseError(a), await n(a)) : a.response
  }, i = async function(c, d) {
    return (await o(c, d))._data
  };
  return i.raw = o, i.native = (...c) => e(...c), i.create = (c = {}) => qa({
    ...r,
    defaults: {
      ...r.defaults,
      ...c
    }
  }), i
}
const Qr = function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof gs < "u") return gs;
    throw new Error("unable to locate global object")
  }(),
  Hh = Qr.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
  Yh = Qr.Headers,
  Qh = Qr.AbortController,
  Zh = qa({
    fetch: Hh,
    Headers: Yh,
    AbortController: Qh
  }),
  tt = r => r.toISOString().split(".")[0];

function Xh(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var Zr = {
  exports: {}
};
const ka = r => typeof r == "object" && r !== null,
  ja = Symbol("skip"),
  Hn = r => ka(r) && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  wr = (r, e, t, s = new WeakMap) => {
    if (t = {
        deep: !1,
        target: {},
        ...t
      }, s.has(r)) return s.get(r);
    s.set(r, t.target);
    const {
      target: n
    } = t;
    delete t.target;
    const o = i => i.map(c => Hn(c) ? wr(c, e, t, s) : c);
    if (Array.isArray(r)) return o(r);
    for (const [i, c] of Object.entries(r)) {
      const d = e(i, c, r);
      if (d === ja) continue;
      let [u, a, {
        shouldRecurse: m = !0
      } = {}] = d;
      u !== "__proto__" && (t.deep && m && Hn(a) && (a = Array.isArray(a) ? o(a) : wr(a, e, t, s)), n[u] = a)
    }
    return n
  };
Zr.exports = (r, e, t) => {
  if (!ka(r)) throw new TypeError(`Expected an object, got \`${r}\` (${typeof r})`);
  return wr(r, e, t)
};
Zr.exports.mapObjectSkip = ja;
var ef = Zr.exports;
const Yn = Xh(ef);
class Pa extends Map {
  constructor(e = {}) {
    if (super(), !(e.maxSize && e.maxSize > 0)) throw new TypeError("`maxSize` must be a number greater than 0");
    if (typeof e.maxAge == "number" && e.maxAge === 0) throw new TypeError("`maxAge` must be a number greater than 0");
    this.maxSize = e.maxSize, this.maxAge = e.maxAge || Number.POSITIVE_INFINITY, this.onEviction = e.onEviction, this.cache = new Map, this.oldCache = new Map, this._size = 0
  }
  _emitEvictions(e) {
    if (typeof this.onEviction == "function")
      for (const [t, s] of e) this.onEviction(t, s.value)
  }
  _deleteIfExpired(e, t) {
    return typeof t.expiry == "number" && t.expiry <= Date.now() ? (typeof this.onEviction == "function" && this.onEviction(e, t.value), this.delete(e)) : !1
  }
  _getOrDeleteIfExpired(e, t) {
    if (this._deleteIfExpired(e, t) === !1) return t.value
  }
  _getItemValue(e, t) {
    return t.expiry ? this._getOrDeleteIfExpired(e, t) : t.value
  }
  _peek(e, t) {
    const s = t.get(e);
    return this._getItemValue(e, s)
  }
  _set(e, t) {
    this.cache.set(e, t), this._size++, this._size >= this.maxSize && (this._size = 0, this._emitEvictions(this.oldCache), this.oldCache = this.cache, this.cache = new Map)
  }
  _moveToRecent(e, t) {
    this.oldCache.delete(e), this._set(e, t)
  }* _entriesAscending() {
    for (const e of this.oldCache) {
      const [t, s] = e;
      this.cache.has(t) || this._deleteIfExpired(t, s) === !1 && (yield e)
    }
    for (const e of this.cache) {
      const [t, s] = e;
      this._deleteIfExpired(t, s) === !1 && (yield e)
    }
  }
  get(e) {
    if (this.cache.has(e)) {
      const t = this.cache.get(e);
      return this._getItemValue(e, t)
    }
    if (this.oldCache.has(e)) {
      const t = this.oldCache.get(e);
      if (this._deleteIfExpired(e, t) === !1) return this._moveToRecent(e, t), t.value
    }
  }
  set(e, t, {
    maxAge: s = this.maxAge
  } = {}) {
    const n = typeof s == "number" && s !== Number.POSITIVE_INFINITY ? Date.now() + s : void 0;
    return this.cache.has(e) ? this.cache.set(e, {
      value: t,
      expiry: n
    }) : this._set(e, {
      value: t,
      expiry: n
    }), this
  }
  has(e) {
    return this.cache.has(e) ? !this._deleteIfExpired(e, this.cache.get(e)) : this.oldCache.has(e) ? !this._deleteIfExpired(e, this.oldCache.get(e)) : !1
  }
  peek(e) {
    if (this.cache.has(e)) return this._peek(e, this.cache);
    if (this.oldCache.has(e)) return this._peek(e, this.oldCache)
  }
  delete(e) {
    const t = this.cache.delete(e);
    return t && this._size--, this.oldCache.delete(e) || t
  }
  clear() {
    this.cache.clear(), this.oldCache.clear(), this._size = 0
  }
  resize(e) {
    if (!(e && e > 0)) throw new TypeError("`maxSize` must be a number greater than 0");
    const t = [...this._entriesAscending()],
      s = t.length - e;
    s < 0 ? (this.cache = new Map(t), this.oldCache = new Map, this._size = t.length) : (s > 0 && this._emitEvictions(t.slice(0, s)), this.oldCache = new Map(t.slice(s)), this.cache = new Map, this._size = 0), this.maxSize = e
  }* keys() {
    for (const [e] of this) yield e
  }* values() {
    for (const [, e] of this) yield e
  }*[Symbol.iterator]() {
    for (const e of this.cache) {
      const [t, s] = e;
      this._deleteIfExpired(t, s) === !1 && (yield [t, s.value])
    }
    for (const e of this.oldCache) {
      const [t, s] = e;
      this.cache.has(t) || this._deleteIfExpired(t, s) === !1 && (yield [t, s.value])
    }
  }* entriesDescending() {
    let e = [...this.cache];
    for (let t = e.length - 1; t >= 0; --t) {
      const s = e[t],
        [n, o] = s;
      this._deleteIfExpired(n, o) === !1 && (yield [n, o.value])
    }
    e = [...this.oldCache];
    for (let t = e.length - 1; t >= 0; --t) {
      const s = e[t],
        [n, o] = s;
      this.cache.has(n) || this._deleteIfExpired(n, o) === !1 && (yield [n, o.value])
    }
  }* entriesAscending() {
    for (const [e, t] of this._entriesAscending()) yield [e, t.value]
  }
  get size() {
    if (!this._size) return this.oldCache.size;
    let e = 0;
    for (const t of this.oldCache.keys()) this.cache.has(t) || e++;
    return Math.min(this._size + e, this.maxSize)
  }
  entries() {
    return this.entriesAscending()
  }
  forEach(e, t = this) {
    for (const [s, n] of this.entriesAscending()) e.call(t, n, s, this)
  }
  get[Symbol.toStringTag]() {
    return JSON.stringify([...this.entriesAscending()])
  }
}
const tf = (r, e) => (r = r.replace(new RegExp("((?<![\\p{Uppercase_Letter}\\d])[\\p{Uppercase_Letter}\\d](?![\\p{Uppercase_Letter}\\d]))", "gu"), t => t.toLowerCase()), r.replace(new RegExp("(\\p{Uppercase_Letter}+)(\\p{Uppercase_Letter}\\p{Lowercase_Letter}+)", "gu"), (t, s, n) => s + e + n.toLowerCase()));

function rf(r, {
  separator: e = "_",
  preserveConsecutiveUppercase: t = !1
} = {}) {
  if (!(typeof r == "string" && typeof e == "string")) throw new TypeError("The `text` and `separator` arguments should be of type `string`");
  if (r.length < 2) return t ? r : r.toLowerCase();
  const s = `$1${e}$2`,
    n = r.replace(new RegExp("([\\p{Lowercase_Letter}\\d])(\\p{Uppercase_Letter})", "gu"), s);
  return t ? tf(n, e) : n.replace(new RegExp("(\\p{Uppercase_Letter})(\\p{Uppercase_Letter}\\p{Lowercase_Letter}+)", "gu"), s).toLowerCase()
}
const sf = (r, e) => r.some(t => typeof t == "string" ? t === e : (t.lastIndex = 0, t.test(e))),
  nr = new Pa({
    maxSize: 1e5
  }),
  Qn = r => typeof r == "object" && r !== null && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  Zn = (r, e = {}) => {
    if (!Qn(r)) return r;
    const {
      separator: t = "_",
      exclude: s,
      deep: n = !1
    } = e, o = i => (c, d) => {
      if (n && Qn(d) && (d = Yn(d, o())), !(s && sf(s, c))) {
        const u = `${t}${c}`;
        if (nr.has(u)) c = nr.get(u);
        else {
          const a = rf(c, {
            separator: t
          });
          c.length < 100 && nr.set(u, a), c = a
        }
      }
      return [c, d]
    };
    return Yn(r, o())
  };

function nf(r, e) {
  return Array.isArray(r) ? Object.keys(r).map(t => Zn(r[t], e)) : Zn(r, e)
}

function of(r) {
  return nf(r, {
    deep: !0
  })
}

function Xn(r) {
  let e = r;
  for (; e.indexOf("/") >= 0;) e = e.replace("/", "_");
  for (; e.indexOf("+") >= 0;) e = e.replace("+", "-");
  for (; e.indexOf("=") >= 0;) e = e.replace("=", "");
  return e
}

function w(r, e) {
  const t = r.replace(/{([a-zA-Z0-9_]+)}/g, (s, n) => {
    var o, i;
    const c = (o = e == null ? void 0 : e.query) == null ? void 0 : o[n];
    if (!c) throw new Error(`Missing value for path parameter "${n}"`);
    return (i = e == null ? void 0 : e.query) == null || delete i[n], Xn(c)
  });
  if (e != null && e.query) {
    for (const s in e.query) {
      const n = e.query[s];
      typeof n == "string" && (e.query[s] = Xn(n))
    }
    e.query = of(e.query)
  }
  return [t, e]
}
const Ea = r => typeof r == "object" && r !== null,
  eo = r => Ea(r) && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  af = Symbol("mapObjectSkip"),
  Tr = (r, e, t, s = new WeakMap) => {
    if (t = {
        deep: !1,
        target: {},
        ...t
      }, s.has(r)) return s.get(r);
    s.set(r, t.target);
    const {
      target: n
    } = t;
    delete t.target;
    const o = i => i.map(c => eo(c) ? Tr(c, e, t, s) : c);
    if (Array.isArray(r)) return o(r);
    for (const [i, c] of Object.entries(r)) {
      const d = e(i, c, r);
      if (d === af) continue;
      let [u, a, {
        shouldRecurse: m = !0
      } = {}] = d;
      u !== "__proto__" && (t.deep && m && eo(a) && (a = Array.isArray(a) ? o(a) : Tr(a, e, t, s)), n[u] = a)
    }
    return n
  };

function to(r, e, t) {
  if (!Ea(r)) throw new TypeError(`Expected an object, got \`${r}\` (${typeof r})`);
  return Tr(r, e, t)
}
const cf = /[\p{Lu}]/u,
  df = /[\p{Ll}]/u,
  ro = /^[\p{Lu}](?![\p{Lu}])/gu,
  Ca = /([\p{Alpha}\p{N}_]|$)/u,
  Xr = /[_.\- ]+/,
  lf = new RegExp("^" + Xr.source),
  so = new RegExp(Xr.source + Ca.source, "gu"),
  no = new RegExp("\\d+" + Ca.source, "gu"),
  uf = (r, e, t, s) => {
    let n = !1,
      o = !1,
      i = !1,
      c = !1;
    for (let d = 0; d < r.length; d++) {
      const u = r[d];
      c = d > 2 ? r[d - 3] === "-" : !0, n && cf.test(u) ? (r = r.slice(0, d) + "-" + r.slice(d), n = !1, i = o, o = !0, d++) : o && i && df.test(u) && (!c || s) ? (r = r.slice(0, d - 1) + "-" + r.slice(d - 1), i = o, o = !1, n = !0) : (n = e(u) === u && t(u) !== u, i = o, o = t(u) === u && e(u) !== u)
    }
    return r
  },
  pf = (r, e) => (ro.lastIndex = 0, r.replaceAll(ro, t => e(t))),
  mf = (r, e) => (so.lastIndex = 0, no.lastIndex = 0, r.replaceAll(no, (t, s, n) => ["_", "-"].includes(r.charAt(n + t.length)) ? t : e(t)).replaceAll(so, (t, s) => e(s)));

function hf(r, e) {
  if (!(typeof r == "string" || Array.isArray(r))) throw new TypeError("Expected the input to be `string | string[]`");
  if (e = {
      pascalCase: !1,
      preserveConsecutiveUppercase: !1,
      ...e
    }, Array.isArray(r) ? r = r.map(n => n.trim()).filter(n => n.length).join("-") : r = r.trim(), r.length === 0) return "";
  const t = e.locale === !1 ? n => n.toLowerCase() : n => n.toLocaleLowerCase(e.locale),
    s = e.locale === !1 ? n => n.toUpperCase() : n => n.toLocaleUpperCase(e.locale);
  return r.length === 1 ? Xr.test(r) ? "" : e.pascalCase ? s(r) : t(r) : (r !== t(r) && (r = uf(r, t, s, e.preserveConsecutiveUppercase)), r = r.replace(lf, ""), r = e.preserveConsecutiveUppercase ? pf(r, t) : t(r), e.pascalCase && (r = s(r.charAt(0)) + r.slice(1)), mf(r, s))
}
const ff = (r, e) => r.some(t => typeof t == "string" ? t === e : (t.lastIndex = 0, t.test(e))),
  or = new Pa({
    maxSize: 1e5
  }),
  oo = r => typeof r == "object" && r !== null && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  ao = (r, e = {}) => {
    if (!oo(r)) return r;
    const {
      exclude: t,
      pascalCase: s = !1,
      stopPaths: n,
      deep: o = !1,
      preserveConsecutiveUppercase: i = !1
    } = e, c = new Set(n), d = u => (a, m) => {
      if (o && oo(m)) {
        const f = u === void 0 ? a : `${u}.${a}`;
        c.has(f) || (m = to(m, d(f)))
      }
      if (!(t && ff(t, a))) {
        const f = s ? `${a}_` : a;
        if (or.has(f)) a = or.get(f);
        else {
          const y = hf(a, {
            pascalCase: s,
            locale: !1,
            preserveConsecutiveUppercase: i
          });
          a.length < 100 && or.set(f, y), a = y
        }
      }
      return [a, m]
    };
    return to(r, d(void 0))
  };

function yf(r, e) {
  return Array.isArray(r) ? Object.keys(r).map(t => ao(r[t], e)) : ao(r, e)
}

function gf(r) {
  return yf(r, {
    deep: !0
  })
}

function Ia(r) {
  const e = {};
  for (const t in r) {
    const s = r[t];
    e[t] = s === null ? void 0 : s && typeof s == "object" && s.__proto__.constructor === Object ? Ia(s) : s
  }
  return e
}

function T(r) {
  return Ia(gf(r))
}
class _f {
  constructor(e) {
    const t = new URL((e == null ? void 0 : e.baseURL) ?? (e == null ? void 0 : e.baseUrl) ?? "https://api.ston.fi"),
      s = [...new URLSearchParams(t.search)].reduce((n, [o, i]) => ({
        ...n,
        [o]: i
      }), {});
    this.apiFetch = Zh.create({
      baseURL: `${t.origin}${t.pathname}`,
      query: s
    })
  }
  async getAsset(e) {
    return T(await this.apiFetch(...w("/v1/assets/{assetAddress}", {
      method: "GET",
      query: {
        assetAddress: e
      }
    }))).asset
  }
  async getAssets() {
    return T(await this.apiFetch(...w("/v1/assets", {
      method: "GET"
    }))).assetList
  }
  async queryAssets({
    unconditionalAssets: e,
    ...t
  }) {
    return T(await this.apiFetch(...w("/v1/assets/query", {
      method: "POST",
      query: {
        ...t,
        unconditionalAsset: e
      }
    }))).assetList
  }
  async searchAssets({
    unconditionalAssets: e,
    ...t
  }) {
    return T(await this.apiFetch(...w("/v1/assets/search", {
      method: "POST",
      query: {
        ...t,
        unconditionalAsset: e
      }
    }))).assetList
  }
  async getFarm(e) {
    return T(await this.apiFetch(...w("/v1/farms/{farmAddress}", {
      method: "GET",
      query: {
        farmAddress: e
      }
    }))).farm
  }
  async getFarms(e) {
    return T(await this.apiFetch(...w("/v1/farms", {
      method: "GET",
      query: e
    }))).farmList
  }
  async getFarmsByPool(e) {
    return T(await this.apiFetch(...w("/v1/farms_by_pool/{poolAddress}", {
      method: "GET",
      query: {
        poolAddress: e
      }
    }))).farmList
  }
  async getSwapPairs(e) {
    return T(await this.apiFetch(...w("/v1/markets", {
      method: "GET",
      query: e
    }))).pairs
  }
  async getSwapStatus(e) {
    return T(await this.apiFetch(...w("/v1/swap/status", {
      method: "GET",
      query: e
    })))
  }
  async getPool(e) {
    return T(await this.apiFetch(...w("/v1/pools/{poolAddress}", {
      method: "GET",
      query: typeof e == "string" ? {
        poolAddress: e
      } : e
    }))).pool
  }
  async getPools(e) {
    return T(await this.apiFetch(...w("/v1/pools", {
      method: "GET",
      query: e
    }))).poolList
  }
  async queryPools({
    unconditionalAssets: e,
    ...t
  }) {
    return T(await this.apiFetch(...w("/v1/pool/query", {
      method: "POST",
      query: {
        ...t,
        unconditionalAsset: e
      }
    }))).poolList
  }
  async simulateSwap({
    offerUnits: e,
    ...t
  }) {
    return T(await this.apiFetch(...w("/v1/swap/simulate", {
      method: "POST",
      query: {
        ...t,
        units: e
      }
    })))
  }
  async simulateReverseSwap({
    askUnits: e,
    ...t
  }) {
    return T(await this.apiFetch(...w("/v1/reverse_swap/simulate", {
      method: "POST",
      query: {
        ...t,
        units: e
      }
    })))
  }
  async getJettonWalletAddress(e) {
    return T(await this.apiFetch(...w("/v1/jetton/{jettonAddress}/address", {
      method: "GET",
      query: e
    }))).address
  }
  async getWalletAsset(e) {
    return T(await this.apiFetch(...w("/v1/wallets/{walletAddress}/assets/{assetAddress}", {
      method: "GET",
      query: e
    }))).asset
  }
  async getWalletAssets(e) {
    return T(await this.apiFetch(...w("/v1/wallets/{walletAddress}/assets", {
      method: "GET",
      query: {
        walletAddress: e
      }
    }))).assetList
  }
  async getWalletFarm(e) {
    return T(await this.apiFetch(...w("/v1/wallets/{walletAddress}/farms/{farmAddress}", {
      method: "GET",
      query: e
    }))).farm
  }
  async getWalletFarms(e) {
    return T(await this.apiFetch(...w("/v1/wallets/{walletAddress}/farms", {
      method: "GET",
      query: typeof e == "string" ? {
        walletAddress: e
      } : e
    }))).farmList
  }
  async getWalletPool(e) {
    return T(await this.apiFetch(...w("/v1/wallets/{walletAddress}/pools/{poolAddress}", {
      method: "GET",
      query: e
    }))).pool
  }
  async getWalletPools(e) {
    return T(await this.apiFetch(...w("/v1/wallets/{walletAddress}/pools", {
      method: "GET",
      query: typeof e == "string" ? {
        walletAddress: e
      } : e
    }))).poolList
  }
  async getWalletOperations({
    since: e,
    until: t,
    ...s
  }) {
    return T(await this.apiFetch(...w("/v1/wallets/{walletAddress}/operations", {
      method: "GET",
      query: {
        ...s,
        since: tt(e),
        until: tt(t)
      }
    }))).operations
  }
  async getOperations({
    since: e,
    until: t
  }) {
    return T(await this.apiFetch(...w("/v1/stats/operations", {
      method: "GET",
      query: {
        since: tt(e),
        until: tt(t)
      }
    }))).operations
  }
  async getRouters(e) {
    return T(await this.apiFetch(...w("/v1/routers", {
      method: "GET",
      query: e
    }))).routerList
  }
  async getRouter(e) {
    return T(await this.apiFetch(...w("/v1/routers/{routerAddress}", {
      method: "GET",
      query: {
        routerAddress: e
      }
    }))).router
  }
}
const I = {
    v1: "v1",
    v2_1: "v2_1",
    v2_2: "v2_2"
  },
  xa = {
    CPI: "constant_product"
  };

function g(r) {
  return r instanceof h.Address ? r : h.address(r.toString())
}
class ge {
  constructor(e, t) {
    this.address = g(e)
  }
  static create(e) {
    return new this(e)
  }
}
class j extends ge {
  async getWalletAddress(e, t) {
    return (await e.get("get_wallet_address", [{
      type: "slice",
      cell: h.beginCell().storeAddress(g(t)).endCell()
    }])).stack.readAddress()
  }
  async getJettonData(e) {
    const t = await e.get("get_jetton_data", []);
    return {
      totalSupply: t.stack.readBigNumber(),
      canIncSupply: !!t.stack.readNumber(),
      adminAddress: t.stack.readAddressOpt(),
      contentRaw: t.stack.readCell(),
      jettonWalletCode: t.stack.readCell()
    }
  }
}

function Be(r) {
  const e = h.beginCell();
  return e.storeUint(260734629, 32), e.storeUint(r.queryId, 64), e.storeCoins(BigInt(r.amount)), e.storeAddress(g(r.destination)), e.storeAddress(r.responseDestination ? g(r.responseDestination) : void 0), r.customPayload ? (e.storeBit(!0), e.storeRef(r.customPayload)) : e.storeBit(!1), e.storeCoins(BigInt(r.forwardTonAmount)), r.forwardPayload ? (e.storeBit(!0), e.storeRef(r.forwardPayload)) : e.storeBit(!1), e.endCell()
}
class Se extends Error {
  constructor({
    expected: e,
    received: t
  }) {
    super(`The version of the provided pTON (${t}) does not match the expected version (${e})`)
  }
}
const he = {
    SWAP: 630424929,
    PROVIDE_LP: 4244235663,
    DIRECT_ADD_LIQUIDITY: 1291331587,
    REFUND_ME: 200537159,
    RESET_GAS: 1117846339,
    COLLECT_FEES: 533429565,
    BURN: 1499400124
  },
  Ba = "EQB3ncyBUTjZUA5EnFKR5_EnOMI9V1tTEAAPaiU71gc4TiUt";
class Ra extends ge {
  async getBalance(e) {
    if ((await e.getState()).state.type !== "active") return BigInt(0);
    const {
      balance: s
    } = await this.getWalletData(e);
    return s
  }
  async getWalletData(e) {
    const t = await e.get("get_wallet_data", []);
    return {
      balance: t.stack.readBigNumber(),
      ownerAddress: t.stack.readAddress(),
      jettonMasterAddress: t.stack.readAddress(),
      jettonWalletCode: t.stack.readCell()
    }
  }
}
const es = class Oa extends ge {
  constructor(e, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...Oa.gasConstants,
      ...t
    }
  }
  async createRefundBody(e) {
    return h.beginCell().storeUint(he.REFUND_ME, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
  }
  async getRefundTxParams(e, t) {
    const s = this.address,
      n = await this.createRefundBody({
        queryId: t == null ? void 0 : t.queryId
      }),
      o = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.refund);
    return {
      to: s,
      value: o,
      body: n
    }
  }
  async sendRefund(e, t, s) {
    const n = await this.getRefundTxParams(e, s);
    return t.send(n)
  }
  async createDirectAddLiquidityBody(e) {
    return h.beginCell().storeUint(he.DIRECT_ADD_LIQUIDITY, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount0)).storeCoins(BigInt(e.amount1)).storeCoins(BigInt(e.minimumLpToMint ?? 1)).endCell()
  }
  async getDirectAddLiquidityTxParams(e, t) {
    const s = this.address,
      n = await this.createDirectAddLiquidityBody({
        amount0: t.amount0,
        amount1: t.amount1,
        minimumLpToMint: t.minimumLpToMint,
        queryId: t.queryId
      }),
      o = BigInt(t.gasAmount ?? this.gasConstants.directAddLp);
    return {
      to: s,
      value: o,
      body: n
    }
  }
  async sendDirectAddLiquidity(e, t, s) {
    const n = await this.getDirectAddLiquidityTxParams(e, s);
    return t.send(n)
  }
  async createResetGasBody(e) {
    return h.beginCell().storeUint(he.RESET_GAS, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
  }
  async getResetGasTxParams(e, t) {
    const s = this.address,
      n = await this.createResetGasBody({
        queryId: t == null ? void 0 : t.queryId
      }),
      o = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.resetGas);
    return {
      to: s,
      value: o,
      body: n
    }
  }
  async sendResetGas(e, t, s) {
    const n = await this.getResetGasTxParams(e, s);
    return t.send(n)
  }
  async getLpAccountData(e) {
    const t = await e.get("get_lp_account_data", []);
    return {
      userAddress: t.stack.readAddress(),
      poolAddress: t.stack.readAddress(),
      amount0: t.stack.readBigNumber(),
      amount1: t.stack.readBigNumber()
    }
  }
};
es.version = I.v1;
es.gasConstants = {
  refund: h.toNano("0.3"),
  directAddLp: h.toNano("0.3"),
  resetGas: h.toNano("0.3")
};
let Na = es;
const ts = class Ga extends j {
  constructor(e, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...Ga.gasConstants,
      ...t
    }
  }
  async createCollectFeesBody(e) {
    return h.beginCell().storeUint(he.COLLECT_FEES, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
  }
  async getCollectFeeTxParams(e, t) {
    const s = this.address,
      n = await this.createCollectFeesBody({
        queryId: t == null ? void 0 : t.queryId
      }),
      o = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.collectFees);
    return {
      to: s,
      value: o,
      body: n
    }
  }
  async sendCollectFees(e, t, s) {
    const n = await this.getCollectFeeTxParams(e, s);
    return t.send(n)
  }
  async createBurnBody(e) {
    return h.beginCell().storeUint(he.BURN, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount)).storeAddress(g(e.responseAddress)).endCell()
  }
  async getBurnTxParams(e, t) {
    const [s, n] = await Promise.all([this.getWalletAddress(e, t.responseAddress), this.createBurnBody({
      amount: t.amount,
      responseAddress: t.responseAddress,
      queryId: t.queryId
    })]), o = BigInt(t.gasAmount ?? this.gasConstants.burn);
    return {
      to: s,
      value: o,
      body: n
    }
  }
  async sendBurn(e, t, s) {
    const n = await this.getBurnTxParams(e, s);
    return t.send(n)
  }
  async getExpectedOutputs(e, t) {
    const s = await e.get("get_expected_outputs", [{
      type: "int",
      value: BigInt(t.amount)
    }, {
      type: "slice",
      cell: h.beginCell().storeAddress(g(t.jettonWallet)).endCell()
    }]);
    return {
      jettonToReceive: s.stack.readBigNumber(),
      protocolFeePaid: s.stack.readBigNumber(),
      refFeePaid: s.stack.readBigNumber()
    }
  }
  async getExpectedTokens(e, t) {
    return (await e.get("get_expected_tokens", [{
      type: "int",
      value: BigInt(t.amount0)
    }, {
      type: "int",
      value: BigInt(t.amount1)
    }])).stack.readBigNumber()
  }
  async getExpectedLiquidity(e, t) {
    const s = await e.get("get_expected_liquidity", [{
      type: "int",
      value: BigInt(t.jettonAmount)
    }]);
    return {
      amount0: s.stack.readBigNumber(),
      amount1: s.stack.readBigNumber()
    }
  }
  async getLpAccountAddress(e, t) {
    return (await e.get("get_lp_account_address", [{
      type: "slice",
      cell: h.beginCell().storeAddress(g(t.ownerAddress)).endCell()
    }])).stack.readAddress()
  }
  async getJettonWallet(e, t) {
    const s = await this.getWalletAddress(e, t.ownerAddress);
    return Ra.create(s)
  }
  async getPoolData(e) {
    const t = await e.get("get_pool_data", []);
    return {
      reserve0: t.stack.readBigNumber(),
      reserve1: t.stack.readBigNumber(),
      token0WalletAddress: t.stack.readAddress(),
      token1WalletAddress: t.stack.readAddress(),
      lpFee: t.stack.readBigNumber(),
      protocolFee: t.stack.readBigNumber(),
      refFee: t.stack.readBigNumber(),
      protocolFeeAddress: t.stack.readAddress(),
      collectedToken0ProtocolFee: t.stack.readBigNumber(),
      collectedToken1ProtocolFee: t.stack.readBigNumber()
    }
  }
  async getLpAccount(e, t) {
    const s = await this.getLpAccountAddress(e, t);
    return Na.create(s)
  }
};
ts.version = I.v1;
ts.gasConstants = {
  collectFees: h.toNano("1.1"),
  burn: h.toNano("0.5")
};
let Da = ts;
const kt = class K extends ge {
  constructor(e = K.address, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...K.gasConstants,
      ...t
    }
  }
  async createSwapBody(e) {
    const t = h.beginCell();
    return t.storeUint(he.SWAP, 32), t.storeAddress(g(e.askJettonWalletAddress)), t.storeCoins(BigInt(e.minAskAmount)), t.storeAddress(g(e.userWalletAddress)), e.referralAddress ? (t.storeUint(1, 1), t.storeAddress(g(e.referralAddress))) : t.storeUint(0, 1), t.endCell()
  }
  async getSwapJettonToJettonTxParams(e, t) {
    const [s, n] = await Promise.all([e.open(j.create(t.offerJettonAddress)).getWalletAddress(t.userWalletAddress), e.open(j.create(t.askJettonAddress)).getWalletAddress(this.address)]), o = await this.createSwapBody({
      userWalletAddress: t.userWalletAddress,
      minAskAmount: t.minAskAmount,
      askJettonWalletAddress: n,
      referralAddress: t.referralAddress
    }), i = BigInt(t.forwardGasAmount ?? this.gasConstants.swapJettonToJetton.forwardGasAmount), c = Be({
      queryId: t.queryId ?? 0,
      amount: t.offerAmount,
      destination: this.address,
      responseDestination: t.userWalletAddress,
      customPayload: t.jettonCustomPayload,
      forwardTonAmount: i,
      forwardPayload: o
    }), d = BigInt(t.gasAmount ?? this.gasConstants.swapJettonToJetton.gasAmount);
    return {
      to: s,
      value: d,
      body: c
    }
  }
  async sendSwapJettonToJetton(e, t, s) {
    const n = await this.getSwapJettonToJettonTxParams(e, s);
    return t.send(n)
  }
  async getSwapJettonToTonTxParams(e, t) {
    if (t.proxyTon.version !== K.version) throw new Se({
      expected: K.version,
      received: t.proxyTon.version
    });
    return await this.getSwapJettonToJettonTxParams(e, {
      ...t,
      askJettonAddress: t.proxyTon.address,
      gasAmount: t.gasAmount ?? this.gasConstants.swapJettonToTon.gasAmount,
      forwardGasAmount: t.forwardGasAmount ?? this.gasConstants.swapJettonToTon.forwardGasAmount
    })
  }
  async sendSwapJettonToTon(e, t, s) {
    const n = await this.getSwapJettonToTonTxParams(e, s);
    return t.send(n)
  }
  async getSwapTonToJettonTxParams(e, t) {
    if (t.proxyTon.version !== K.version) throw new Se({
      expected: K.version,
      received: t.proxyTon.version
    });
    const s = await e.open(j.create(t.askJettonAddress)).getWalletAddress(this.address),
      n = await this.createSwapBody({
        userWalletAddress: t.userWalletAddress,
        minAskAmount: t.minAskAmount,
        askJettonWalletAddress: s,
        referralAddress: t.referralAddress
      }),
      o = BigInt(t.forwardGasAmount ?? this.gasConstants.swapTonToJetton.forwardGasAmount);
    return await e.open(t.proxyTon).getTonTransferTxParams({
      queryId: t.queryId ?? 0,
      tonAmount: t.offerAmount,
      destinationAddress: this.address,
      refundAddress: t.userWalletAddress,
      forwardPayload: n,
      forwardTonAmount: o
    })
  }
  async sendSwapTonToJetton(e, t, s) {
    const n = await this.getSwapTonToJettonTxParams(e, s);
    return t.send(n)
  }
  async createProvideLiquidityBody(e) {
    return h.beginCell().storeUint(he.PROVIDE_LP, 32).storeAddress(g(e.routerWalletAddress)).storeCoins(BigInt(e.minLpOut)).endCell()
  }
  async getProvideLiquidityJettonTxParams(e, t) {
    const [s, n] = await Promise.all([e.open(j.create(t.sendTokenAddress)).getWalletAddress(t.userWalletAddress), e.open(j.create(t.otherTokenAddress)).getWalletAddress(this.address)]), o = await this.createProvideLiquidityBody({
      routerWalletAddress: n,
      minLpOut: t.minLpOut
    }), i = BigInt(t.forwardGasAmount ?? this.gasConstants.provideLpJetton.forwardGasAmount), c = Be({
      queryId: t.queryId ?? 0,
      amount: t.sendAmount,
      destination: this.address,
      responseDestination: t.userWalletAddress,
      customPayload: t.jettonCustomPayload,
      forwardTonAmount: i,
      forwardPayload: o
    }), d = BigInt(t.gasAmount ?? this.gasConstants.provideLpJetton.gasAmount);
    return {
      to: s,
      value: d,
      body: c
    }
  }
  async sendProvideLiquidityJetton(e, t, s) {
    const n = await this.getProvideLiquidityJettonTxParams(e, s);
    return t.send(n)
  }
  async getProvideLiquidityTonTxParams(e, t) {
    if (t.proxyTon.version !== K.version) throw new Se({
      expected: K.version,
      received: t.proxyTon.version
    });
    const s = await e.open(j.create(t.otherTokenAddress)).getWalletAddress(this.address),
      n = await this.createProvideLiquidityBody({
        routerWalletAddress: s,
        minLpOut: t.minLpOut
      }),
      o = BigInt(t.forwardGasAmount ?? this.gasConstants.provideLpTon.forwardGasAmount);
    return await e.open(t.proxyTon).getTonTransferTxParams({
      queryId: t.queryId ?? 0,
      tonAmount: t.sendAmount,
      destinationAddress: this.address,
      refundAddress: t.userWalletAddress,
      forwardPayload: n,
      forwardTonAmount: o
    })
  }
  async sendProvideLiquidityTon(e, t, s) {
    const n = await this.getProvideLiquidityTonTxParams(e, s);
    return t.send(n)
  }
  async getPoolAddress(e, t) {
    return (await e.get("get_pool_address", [{
      type: "slice",
      cell: h.beginCell().storeAddress(g(t.token0)).endCell()
    }, {
      type: "slice",
      cell: h.beginCell().storeAddress(g(t.token1)).endCell()
    }])).stack.readAddress()
  }
  async getPoolAddressByJettonMinters(e, t) {
    const [s, n] = await Promise.all([e.open(j.create(t.token0)).getWalletAddress(this.address), e.open(j.create(t.token1)).getWalletAddress(this.address)]);
    return await this.getPoolAddress(e, {
      token0: s,
      token1: n
    })
  }
  async getPool(e, t) {
    const s = await this.getPoolAddressByJettonMinters(e, {
      token0: t.token0,
      token1: t.token1
    });
    return Da.create(s)
  }
  async getRouterData(e) {
    const t = await e.get("get_router_data", []);
    return {
      isLocked: t.stack.readBoolean(),
      adminAddress: t.stack.readAddress(),
      tempUpgrade: t.stack.readCell(),
      poolCode: t.stack.readCell(),
      jettonLpWalletCode: t.stack.readCell(),
      lpAccountCode: t.stack.readCell()
    }
  }
};
kt.version = I.v1;
kt.address = h.address(Ba);
kt.gasConstants = {
  swapJettonToJetton: {
    gasAmount: h.toNano("0.22"),
    forwardGasAmount: h.toNano("0.175")
  },
  swapJettonToTon: {
    gasAmount: h.toNano("0.17"),
    forwardGasAmount: h.toNano("0.125")
  },
  swapTonToJetton: {
    forwardGasAmount: h.toNano("0.185")
  },
  provideLpJetton: {
    gasAmount: h.toNano("0.3"),
    forwardGasAmount: h.toNano("0.24")
  },
  provideLpTon: {
    forwardGasAmount: h.toNano("0.26")
  }
};
let vf = kt;
const pt = {
    v1: "v1",
    v2_1: "v2_1"
  },
  bf = {
    DEPLOY_WALLET: 1824798067
  },
  jt = class at extends j {
    constructor(e = at.address, {
      gasConstants: t,
      ...s
    } = {}) {
      super(e, s), this.version = at.version, this.gasConstants = {
        ...at.gasConstants,
        ...t
      }
    }
    async getTonTransferTxParams(e, t) {
      const s = await this.getWalletAddress(e, t.destinationAddress),
        n = Be({
          queryId: t.queryId ?? 0,
          amount: t.tonAmount,
          destination: t.destinationAddress,
          forwardTonAmount: BigInt(t.forwardTonAmount ?? 0),
          forwardPayload: t.forwardPayload
        }),
        o = BigInt(t.tonAmount) + BigInt(t.forwardTonAmount ?? 0);
      return {
        to: s,
        value: o,
        body: n
      }
    }
    async sendTonTransfer(e, t, s) {
      const n = await this.getTonTransferTxParams(e, s);
      return t.send(n)
    }
    async createDeployWalletBody(e) {
      return h.beginCell().storeUint(bf.DEPLOY_WALLET, 32).storeUint(e.queryId ?? 0, 64).storeAddress(g(e.ownerAddress)).endCell()
    }
    async getDeployWalletTxParams(e, t) {
      const s = this.address,
        n = await this.createDeployWalletBody({
          ownerAddress: t.ownerAddress,
          queryId: t == null ? void 0 : t.queryId
        }),
        o = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.deployWallet);
      return {
        to: s,
        value: o,
        body: n
      }
    }
    async sendDeployWallet(e, t, s) {
      const n = await this.getDeployWalletTxParams(e, s);
      return t.send(n)
    }
  };
jt.version = pt.v1;
jt.address = h.address("EQCM3B12QK1e4yZSf8GtBRT0aLMNyEsBc_DhVfRRtOEffLez");
jt.gasConstants = {
  deployWallet: h.toNano("1.05")
};
let rs = jt;
const Af = {
    Router: vf,
    Pool: Da,
    LpAccount: Na,
    pTON: rs
  },
  io = {
    TON_TRANSFER: 32736093,
    DEPLOY_WALLET: 1331643155
  },
  ss = class $r extends rs {
    constructor(e, {
      gasConstants: t,
      ...s
    } = {}) {
      super(e, s), this.version = $r.version, this.gasConstants = {
        ...$r.gasConstants,
        ...t
      }
    }
    async createTonTransferBody(e) {
      const t = h.beginCell();
      return t.storeUint(io.TON_TRANSFER, 32), t.storeUint(e.queryId ?? 0, 64), t.storeCoins(BigInt(e.tonAmount)), t.storeAddress(g(e.refundAddress)), e.forwardPayload && (t.storeBit(!0), t.storeRef(e.forwardPayload)), t.endCell()
    }
    async getTonTransferTxParams(e, t) {
      const s = await this.getWalletAddress(e, t.destinationAddress),
        n = await this.createTonTransferBody({
          tonAmount: t.tonAmount,
          refundAddress: t.refundAddress,
          forwardPayload: t.forwardPayload,
          queryId: t.queryId
        }),
        o = BigInt(t.tonAmount) + BigInt(t.forwardTonAmount ?? 0) + BigInt(this.gasConstants.tonTransfer);
      return {
        to: s,
        value: o,
        body: n
      }
    }
    async sendTonTransfer(e, t, s) {
      const n = await this.getTonTransferTxParams(e, s);
      return t.send(n)
    }
    async createDeployWalletBody(e) {
      return h.beginCell().storeUint(io.DEPLOY_WALLET, 32).storeUint(e.queryId ?? 0, 64).storeAddress(g(e.ownerAddress)).storeAddress(g(e.excessAddress)).endCell()
    }
    async getDeployWalletTxParams(e, t) {
      const s = this.address,
        n = await this.createDeployWalletBody({
          ownerAddress: t.ownerAddress,
          excessAddress: t.excessAddress,
          queryId: t == null ? void 0 : t.queryId
        }),
        o = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.deployWallet);
      return {
        to: s,
        value: o,
        body: n
      }
    }
    async sendDeployWallet(e, t, s) {
      const n = await this.getDeployWalletTxParams(e, s);
      return t.send(n)
    }
  };
ss.version = pt.v2_1;
ss.gasConstants = {
  tonTransfer: h.toNano("0.01"),
  deployWallet: h.toNano("0.1")
};
let ns = ss;
const H = {
    SWAP: 1717886506,
    CROSS_SWAP: 1775180379,
    PROVIDE_LP: 935368415,
    DIRECT_ADD_LIQUIDITY: 267960262,
    REFUND_ME: 321624620,
    RESET_GAS: 701638965,
    COLLECT_FEES: 518295838,
    BURN: 1499400124,
    WITHDRAW_FEE: 894160372
  },
  wf = 15 * 60,
  os = class Fa extends ge {
    constructor(e, {
      gasConstants: t,
      ...s
    } = {}) {
      super(e, s), this.gasConstants = {
        ...Fa.gasConstants,
        ...t
      }
    }
    async createRefundBody(e) {
      return h.beginCell().storeUint(H.REFUND_ME, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeMaybeRef(e == null ? void 0 : e.leftMaybePayload).storeMaybeRef(e == null ? void 0 : e.rightMaybePayload).endCell()
    }
    async getRefundTxParams(e, t) {
      const s = this.address,
        n = await this.createRefundBody({
          leftMaybePayload: t == null ? void 0 : t.leftMaybePayload,
          rightMaybePayload: t == null ? void 0 : t.rightMaybePayload,
          queryId: t == null ? void 0 : t.queryId
        }),
        o = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.refund);
      return {
        to: s,
        value: o,
        body: n
      }
    }
    async sendRefund(e, t, s) {
      const n = await this.getRefundTxParams(e, s);
      return t.send(n)
    }
    async createDirectAddLiquidityBody(e) {
      return h.beginCell().storeUint(H.DIRECT_ADD_LIQUIDITY, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount0)).storeCoins(BigInt(e.amount1)).storeCoins(BigInt(e.minimumLpToMint ?? 1)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeAddress(g(e.userWalletAddress)).storeMaybeRef(e.dexCustomPayload).storeRef(h.beginCell().storeAddress(g(e.refundAddress ?? e.userWalletAddress)).storeAddress(g(e.excessesAddress ?? e.refundAddress ?? e.userWalletAddress)).endCell()).endCell()
    }
    async getDirectAddLiquidityTxParams(e, t) {
      const s = this.address,
        n = await this.createDirectAddLiquidityBody({
          amount0: t.amount0,
          amount1: t.amount1,
          minimumLpToMint: t.minimumLpToMint,
          userWalletAddress: t.userWalletAddress,
          refundAddress: t.refundAddress,
          excessesAddress: t.excessesAddress,
          dexCustomPayload: t.dexCustomPayload,
          dexCustomPayloadForwardGasAmount: t.dexCustomPayloadForwardGasAmount,
          queryId: t.queryId
        }),
        o = BigInt(t.gasAmount ?? this.gasConstants.directAddLp);
      return {
        to: s,
        value: o,
        body: n
      }
    }
    async sendDirectAddLiquidity(e, t, s) {
      const n = await this.getDirectAddLiquidityTxParams(e, s);
      return t.send(n)
    }
    async createResetGasBody(e) {
      return h.beginCell().storeUint(H.RESET_GAS, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
    }
    async getResetGasTxParams(e, t) {
      const s = this.address,
        n = await this.createResetGasBody({
          queryId: t == null ? void 0 : t.queryId
        }),
        o = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.resetGas);
      return {
        to: s,
        value: o,
        body: n
      }
    }
    async sendResetGas(e, t, s) {
      const n = await this.getResetGasTxParams(e, s);
      return t.send(n)
    }
    async getLpAccountData(e) {
      const t = await e.get("get_lp_account_data", []);
      return {
        userAddress: t.stack.readAddress(),
        poolAddress: t.stack.readAddress(),
        amount0: t.stack.readBigNumber(),
        amount1: t.stack.readBigNumber()
      }
    }
  };
os.version = I.v2_1;
os.gasConstants = {
  refund: h.toNano("0.8"),
  directAddLp: h.toNano("0.3"),
  resetGas: h.toNano("0.02")
};
let as = os;
const is = class Ma extends j {
  constructor(e, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...Ma.gasConstants,
      ...t
    }
  }
  async createCollectFeesBody(e) {
    return h.beginCell().storeUint(H.COLLECT_FEES, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
  }
  async getCollectFeeTxParams(e, t) {
    const s = this.address,
      n = await this.createCollectFeesBody({
        queryId: t == null ? void 0 : t.queryId
      }),
      o = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.collectFees);
    return {
      to: s,
      value: o,
      body: n
    }
  }
  async sendCollectFees(e, t, s) {
    const n = await this.getCollectFeeTxParams(e, s);
    return t.send(n)
  }
  async createBurnBody(e) {
    return h.beginCell().storeUint(H.BURN, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount)).storeAddress(null).storeMaybeRef(e.dexCustomPayload).endCell()
  }
  async getBurnTxParams(e, t) {
    const [s, n] = await Promise.all([this.getWalletAddress(e, t.userWalletAddress), this.createBurnBody({
      amount: t.amount,
      dexCustomPayload: t.dexCustomPayload,
      queryId: t.queryId
    })]), o = BigInt(t.gasAmount ?? this.gasConstants.burn);
    return {
      to: s,
      value: o,
      body: n
    }
  }
  async sendBurn(e, t, s) {
    const n = await this.getBurnTxParams(e, s);
    return t.send(n)
  }
  async getPoolType(e) {
    return (await e.get("get_pool_type", [])).stack.readString()
  }
  async getLpAccountAddress(e, t) {
    return (await e.get("get_lp_account_address", [{
      type: "slice",
      cell: h.beginCell().storeAddress(g(t.ownerAddress)).endCell()
    }])).stack.readAddress()
  }
  async getLpAccount(e, t) {
    const s = await this.getLpAccountAddress(e, t);
    return as.create(s)
  }
  async getJettonWallet(e, t) {
    const s = await this.getWalletAddress(e, t.ownerAddress);
    return Ra.create(s)
  }
  async getPoolData(e) {
    return (await this.implGetPoolData(e)).commonPoolData
  }
  async implGetPoolData(e) {
    const t = await e.get("get_pool_data", []);
    return {
      commonPoolData: {
        isLocked: t.stack.readBoolean(),
        routerAddress: t.stack.readAddress(),
        totalSupplyLP: t.stack.readBigNumber(),
        reserve0: t.stack.readBigNumber(),
        reserve1: t.stack.readBigNumber(),
        token0WalletAddress: t.stack.readAddress(),
        token1WalletAddress: t.stack.readAddress(),
        lpFee: t.stack.readBigNumber(),
        protocolFee: t.stack.readBigNumber(),
        protocolFeeAddress: t.stack.readAddressOpt(),
        collectedToken0ProtocolFee: t.stack.readBigNumber(),
        collectedToken1ProtocolFee: t.stack.readBigNumber()
      },
      stack: t.stack
    }
  }
};
is.version = I.v2_1;
is.gasConstants = {
  collectFees: h.toNano("0.4"),
  burn: h.toNano("0.8")
};
let W = is;
const cs = class La extends ge {
  constructor(e, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...La.gasConstants,
      ...t
    }
  }
  async createWithdrawFeeBody(e) {
    return h.beginCell().storeUint(H.WITHDRAW_FEE, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
  }
  async getWithdrawFeeTxParams(e, t) {
    const s = this.address,
      n = await this.createWithdrawFeeBody({
        queryId: t == null ? void 0 : t.queryId
      }),
      o = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.withdrawFee);
    return {
      to: s,
      body: n,
      value: o
    }
  }
  async sendWithdrawFee(e, t, s) {
    const n = await this.getWithdrawFeeTxParams(e, s);
    return t.send(n)
  }
  async getVaultData(e) {
    const t = await e.get("get_vault_data", []);
    return {
      ownerAddress: t.stack.readAddress(),
      tokenAddress: t.stack.readAddress(),
      routerAddress: t.stack.readAddress(),
      depositedAmount: t.stack.readBigNumber()
    }
  }
};
cs.version = I.v2_1;
cs.gasConstants = {
  withdrawFee: h.toNano("0.3")
};
let ds = cs;
const ls = class Ja extends ge {
  constructor(e, {
    gasConstants: t,
    txDeadline: s,
    ...n
  } = {}) {
    if (super(e, n), this.address.equals(h.Address.parse(Ba))) throw Error(["You are trying to create an instance v2.1 Router with a v1 address", "Please use the appropriate class for the v1 Router. Otherwise, all the funds will be permanently lost."].join(`
`));
    this.gasConstants = {
      ...Ja.gasConstants,
      ...t
    }, this.txDeadline = s ?? wf
  }
  async createSwapBody(e) {
    if (e.referralValue && (BigInt(e.referralValue) < 0 || BigInt(e.referralValue) > 100)) throw Error("'referralValue' should be in range [0, 100] BPS");
    return h.beginCell().storeUint(H.SWAP, 32).storeAddress(g(e.askJettonWalletAddress)).storeAddress(g(e.refundAddress)).storeAddress(g(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(h.beginCell().storeCoins(BigInt(e.minAskAmount)).storeAddress(g(e.receiverAddress)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).storeCoins(BigInt(e.refundForwardGasAmount ?? 0)).storeMaybeRef(e.refundPayload).storeUint(BigInt(e.referralValue ?? 10), 16).storeAddress(e.referralAddress ? g(e.referralAddress) : null).endCell()).endCell()
  }
  async createCrossSwapBody(e) {
    if (e.referralValue && (BigInt(e.referralValue) < 0 || BigInt(e.referralValue) > 100)) throw Error("'referralValue' should be in range [0, 100] BPS");
    return h.beginCell().storeUint(H.CROSS_SWAP, 32).storeAddress(g(e.askJettonWalletAddress)).storeAddress(g(e.refundAddress)).storeAddress(g(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(h.beginCell().storeCoins(BigInt(e.minAskAmount)).storeAddress(g(e.receiverAddress)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).storeCoins(BigInt(e.refundForwardGasAmount ?? 0)).storeMaybeRef(e.refundPayload).storeUint(BigInt(e.referralValue ?? 10), 16).storeAddress(e.referralAddress ? g(e.referralAddress) : null).endCell()).endCell()
  }
  async getSwapJettonToJettonTxParams(e, t) {
    const s = this.address,
      [n, o] = await Promise.all([e.open(j.create(t.offerJettonAddress)).getWalletAddress(t.userWalletAddress), e.open(j.create(t.askJettonAddress)).getWalletAddress(s)]),
      i = BigInt(t.forwardGasAmount ?? this.gasConstants.swapJettonToJetton.forwardGasAmount),
      c = await this.createSwapBody({
        askJettonWalletAddress: o,
        receiverAddress: t.userWalletAddress,
        minAskAmount: t.minAskAmount,
        refundAddress: t.refundAddress ?? t.userWalletAddress,
        excessesAddress: t.excessesAddress,
        referralAddress: t.referralAddress,
        referralValue: t.referralValue,
        dexCustomPayload: t.dexCustomPayload,
        dexCustomPayloadForwardGasAmount: t.dexCustomPayloadForwardGasAmount,
        refundPayload: t.refundPayload,
        refundForwardGasAmount: t.refundForwardGasAmount,
        deadline: t.deadline
      }),
      d = Be({
        queryId: t.queryId ?? 0,
        amount: t.offerAmount,
        destination: s,
        responseDestination: t.userWalletAddress,
        customPayload: t.jettonCustomPayload,
        forwardTonAmount: i,
        forwardPayload: c
      }),
      u = BigInt(t.gasAmount ?? this.gasConstants.swapJettonToJetton.gasAmount);
    return {
      to: n,
      value: u,
      body: d
    }
  }
  async sendSwapJettonToJetton(e, t, s) {
    const n = await this.getSwapJettonToJettonTxParams(e, s);
    return t.send(n)
  }
  async getSwapJettonToTonTxParams(e, t) {
    if (t.proxyTon.version !== W.version) throw new Se({
      expected: W.version,
      received: t.proxyTon.version
    });
    return await this.getSwapJettonToJettonTxParams(e, {
      ...t,
      askJettonAddress: t.proxyTon.address,
      gasAmount: t.gasAmount ?? this.gasConstants.swapJettonToTon.gasAmount,
      forwardGasAmount: t.forwardGasAmount ?? this.gasConstants.swapJettonToTon.forwardGasAmount
    })
  }
  async sendSwapJettonToTon(e, t, s) {
    const n = await this.getSwapJettonToTonTxParams(e, s);
    return t.send(n)
  }
  async getSwapTonToJettonTxParams(e, t) {
    if (t.proxyTon.version !== W.version) throw new Se({
      expected: W.version,
      received: t.proxyTon.version
    });
    const s = this.address,
      n = await e.open(j.create(t.askJettonAddress)).getWalletAddress(s),
      o = await this.createSwapBody({
        askJettonWalletAddress: n,
        receiverAddress: t.userWalletAddress,
        minAskAmount: t.minAskAmount,
        refundAddress: t.refundAddress ?? t.userWalletAddress,
        excessesAddress: t.excessesAddress,
        referralAddress: t.referralAddress,
        referralValue: t.referralValue,
        dexCustomPayload: t.dexCustomPayload,
        dexCustomPayloadForwardGasAmount: t.dexCustomPayloadForwardGasAmount,
        refundPayload: t.refundPayload,
        refundForwardGasAmount: t.refundForwardGasAmount,
        deadline: t.deadline
      }),
      i = BigInt(t.forwardGasAmount ?? this.gasConstants.swapTonToJetton.forwardGasAmount);
    return await e.open(t.proxyTon).getTonTransferTxParams({
      queryId: t.queryId ?? 0,
      tonAmount: t.offerAmount,
      destinationAddress: s,
      refundAddress: t.userWalletAddress,
      forwardPayload: o,
      forwardTonAmount: i
    })
  }
  async sendSwapTonToJetton(e, t, s) {
    const n = await this.getSwapTonToJettonTxParams(e, s);
    return t.send(n)
  }
  async createProvideLiquidityBody(e) {
    return h.beginCell().storeUint(H.PROVIDE_LP, 32).storeAddress(g(e.routerWalletAddress)).storeAddress(g(e.refundAddress)).storeAddress(g(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(h.beginCell().storeCoins(BigInt(e.minLpOut)).storeAddress(g(e.receiverAddress)).storeUint(e.bothPositive ? 1 : 0, 1).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).endCell()).endCell()
  }
  async getProvideLiquidityJettonTxParams(e, t) {
    return this.implGetProvideLiquidityJettonTxParams(e, {
      ...t,
      gasAmount: t.gasAmount ?? this.gasConstants.provideLpJetton.gasAmount,
      forwardGasAmount: t.forwardGasAmount ?? this.gasConstants.provideLpJetton.forwardGasAmount,
      bothPositive: !0
    })
  }
  async sendProvideLiquidityJetton(e, t, s) {
    const n = await this.getProvideLiquidityJettonTxParams(e, s);
    return t.send(n)
  }
  async getSingleSideProvideLiquidityJettonTxParams(e, t) {
    return this.implGetProvideLiquidityJettonTxParams(e, {
      ...t,
      gasAmount: t.gasAmount ?? this.gasConstants.singleSideProvideLpJetton.gasAmount,
      forwardGasAmount: t.forwardGasAmount ?? this.gasConstants.singleSideProvideLpJetton.forwardGasAmount,
      bothPositive: !1
    })
  }
  async sendSingleSideProvideLiquidityJetton(e, t, s) {
    const n = await this.getSingleSideProvideLiquidityJettonTxParams(e, s);
    return t.send(n)
  }
  async implGetProvideLiquidityJettonTxParams(e, t) {
    const s = this.address,
      [n, o] = await Promise.all([e.open(j.create(t.sendTokenAddress)).getWalletAddress(t.userWalletAddress), e.open(j.create(t.otherTokenAddress)).getWalletAddress(s)]),
      i = await this.createProvideLiquidityBody({
        routerWalletAddress: o,
        receiverAddress: t.userWalletAddress,
        minLpOut: t.minLpOut,
        refundAddress: t.refundAddress ?? t.userWalletAddress,
        excessesAddress: t.excessesAddress,
        dexCustomPayload: t.dexCustomPayload,
        dexCustomPayloadForwardGasAmount: t.dexCustomPayloadForwardGasAmount,
        bothPositive: t.bothPositive,
        deadline: t.deadline
      }),
      c = BigInt(t.forwardGasAmount),
      d = Be({
        queryId: t.queryId ?? 0,
        amount: t.sendAmount,
        destination: s,
        responseDestination: t.userWalletAddress,
        customPayload: t.jettonCustomPayload,
        forwardTonAmount: c,
        forwardPayload: i
      }),
      u = BigInt(t.gasAmount);
    return {
      to: n,
      value: u,
      body: d
    }
  }
  async getProvideLiquidityTonTxParams(e, t) {
    return this.implGetProvideLiquidityTonTxParams(e, {
      ...t,
      forwardGasAmount: t.forwardGasAmount ?? this.gasConstants.provideLpTon.forwardGasAmount,
      bothPositive: !0
    })
  }
  async sendProvideLiquidityTon(e, t, s) {
    const n = await this.getProvideLiquidityTonTxParams(e, s);
    return t.send(n)
  }
  async getSingleSideProvideLiquidityTonTxParams(e, t) {
    return this.implGetProvideLiquidityTonTxParams(e, {
      ...t,
      forwardGasAmount: t.forwardGasAmount ?? this.gasConstants.singleSideProvideLpTon.forwardGasAmount,
      bothPositive: !1
    })
  }
  async sendSingleSideProvideLiquidityTon(e, t, s) {
    const n = await this.getSingleSideProvideLiquidityTonTxParams(e, s);
    return t.send(n)
  }
  async implGetProvideLiquidityTonTxParams(e, t) {
    if (t.proxyTon.version !== W.version) throw new Se({
      expected: W.version,
      received: t.proxyTon.version
    });
    const s = this.address,
      n = await e.open(j.create(t.otherTokenAddress)).getWalletAddress(s),
      o = await this.createProvideLiquidityBody({
        routerWalletAddress: n,
        receiverAddress: t.userWalletAddress,
        minLpOut: t.minLpOut,
        refundAddress: t.refundAddress ?? t.userWalletAddress,
        excessesAddress: t.excessesAddress,
        dexCustomPayload: t.dexCustomPayload,
        dexCustomPayloadForwardGasAmount: t.dexCustomPayloadForwardGasAmount,
        bothPositive: t.bothPositive,
        deadline: t.deadline
      }),
      i = BigInt(t.forwardGasAmount);
    return await e.open(t.proxyTon).getTonTransferTxParams({
      queryId: t.queryId ?? 0,
      tonAmount: t.sendAmount,
      destinationAddress: s,
      refundAddress: t.userWalletAddress,
      forwardPayload: o,
      forwardTonAmount: i
    })
  }
  get defaultDeadline() {
    return Math.floor(Date.now() / 1e3) + this.txDeadline
  }
  async getPoolAddress(e, t) {
    return (await e.get("get_pool_address", [{
      type: "slice",
      cell: h.beginCell().storeAddress(g(t.token0)).endCell()
    }, {
      type: "slice",
      cell: h.beginCell().storeAddress(g(t.token1)).endCell()
    }])).stack.readAddress()
  }
  async getPoolAddressByJettonMinters(e, t) {
    const [s, n] = await Promise.all([e.open(j.create(t.token0)).getWalletAddress(this.address), e.open(j.create(t.token1)).getWalletAddress(this.address)]);
    return await this.getPoolAddress(e, {
      token0: s,
      token1: n
    })
  }
  async getPool(e, t) {
    const s = await this.getPoolAddressByJettonMinters(e, t);
    return W.create(s)
  }
  async getVaultAddress(e, t) {
    return (await e.get("get_vault_address", [{
      type: "slice",
      cell: h.beginCell().storeAddress(g(t.user)).endCell()
    }, {
      type: "slice",
      cell: h.beginCell().storeAddress(g(t.tokenWallet)).endCell()
    }])).stack.readAddress()
  }
  async getVault(e, t) {
    const s = e.open(j.create(t.tokenMinter)),
      n = await this.getVaultAddress(e, {
        user: t.user,
        tokenWallet: await s.getWalletAddress(this.address)
      });
    return ds.create(n)
  }
  async getRouterVersion(e) {
    const t = await e.get("get_router_version", []);
    return {
      major: t.stack.readNumber(),
      minor: t.stack.readNumber(),
      development: t.stack.readString()
    }
  }
  async getRouterData(e) {
    const t = await e.get("get_router_data", []);
    return {
      routerId: t.stack.readNumber(),
      dexType: t.stack.readString(),
      isLocked: t.stack.readBoolean(),
      adminAddress: t.stack.readAddress(),
      tempUpgrade: t.stack.readCell(),
      poolCode: t.stack.readCell(),
      jettonLpWalletCode: t.stack.readCell(),
      lpAccountCode: t.stack.readCell(),
      vaultCode: t.stack.readCell()
    }
  }
};
ls.version = I.v2_1;
ls.gasConstants = {
  swapJettonToJetton: {
    gasAmount: h.toNano("0.3"),
    forwardGasAmount: h.toNano("0.24")
  },
  swapJettonToTon: {
    gasAmount: h.toNano("0.3"),
    forwardGasAmount: h.toNano("0.24")
  },
  swapTonToJetton: {
    forwardGasAmount: h.toNano("0.3")
  },
  provideLpJetton: {
    gasAmount: h.toNano("0.3"),
    forwardGasAmount: h.toNano("0.235")
  },
  provideLpTon: {
    forwardGasAmount: h.toNano("0.3")
  },
  singleSideProvideLpJetton: {
    gasAmount: h.toNano("1"),
    forwardGasAmount: h.toNano("0.8")
  },
  singleSideProvideLpTon: {
    forwardGasAmount: h.toNano("0.8")
  }
};
let us = ls;
class Pt extends W {
  async getPoolData(e) {
    return {
      ...(await this.implGetPoolData(e)).commonPoolData
    }
  }
}
Pt.dexType = xa.CPI;
class ps extends us {
  async getPool(e, t) {
    const s = await this.getPoolAddressByJettonMinters(e, t);
    return Pt.create(s)
  }
}
ps.dexType = xa.CPI;
class Wa extends us {}
Wa.CPI = ps;
class Ua extends W {}
Ua.CPI = Pt;
const Tf = {
  Router: Wa,
  Pool: Ua,
  LpAccount: as,
  Vault: ds,
  pTON: ns
};
class Va extends us {}
Va.version = I.v2_2;
class za extends ps {}
za.version = I.v2_2;
class Ka extends Va {}
Ka.CPI = za;
class Ha extends W {}
Ha.version = I.v2_2;
class Ya extends Pt {}
Ya.version = I.v2_2;
class Qa extends Ha {}
Qa.CPI = Ya;
class Za extends as {}
Za.version = I.v2_2;
class Xa extends ds {}
Xa.version = I.v2_2;
const $f = {
    Router: Ka,
    Pool: Qa,
    LpAccount: Za,
    Vault: Xa,
    pTON: ns
  },
  Sf = {
    [I.v1]: Af,
    [I.v2_1]: Tf,
    [I.v2_2]: $f
  },
  qf = {
    [pt.v1]: rs,
    [pt.v2_1]: ns
  };
class If extends nh {
  constructor(t) {
    super();
    p(this, "TonAddress", "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c");
    p(this, "jettonAddress");
    p(this, "REFERRAL_ADDRESS");
    p(this, "REFERRAL_PERCENT", 1);
    p(this, "stonApiClient", new _f);
    p(this, "client", new h.TonClient({
      endpoint: "https://toncenter.com/api/v2/jsonRPC"
    }));
    p(this, "FEES", {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: new M(0),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: new M(0)
    });
    p(this, "tradeStateControls", this.getTradeInputStateControls({
      getFees: () => this.fees,
      getSellInfo: this.getSellInfo.bind(this),
      getBuyInfo: this.getBuyInfo.bind(this)
    }));
    p(this, "getWaitForBuyStatus", () => ar(this.getTradeTransactionStatus.bind(this), () => {}, 12e3));
    p(this, "getWaitForSellStatus", () => ar(this.getTradeTransactionStatus.bind(this), () => {}, 12e3));
    this.jettonAddress = t, this.REFERRAL_ADDRESS = co().public.STONFI_REFERRAL_ADDRESS
  }
  async getRouter(t) {
    const s = this.useCachedKeys("routersInfo"),
      n = s.get(t);
    if (n) return F(n);
    const o = await le(async () => await this.stonApiClient.getRouter(t))();
    if (!N(o)) return o;
    const {
      routerInstance: i
    } = this.getRouterAndProxyTon(o.data);
    return this.FEES.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE = z(i.gasConstants.swapTonToJetton.forwardGasAmount), this.FEES.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE = z(i.gasConstants.swapJettonToTon.forwardGasAmount), s.set(t, o.data), F(o.data)
  }
  getRouterAndProxyTon(t) {
    const s = (() => {
        const d = "v2_2",
          u = ["v2_1", "v2_2"],
          a = `v${t.majorVersion}_${t.minorVersion}`;
        return u.includes(a) ? a : d
      })(),
      n = Sf[s].Router,
      o = this.client.open(n.create(t.address)),
      i = (() => {
        const d = "v2_1",
          u = ["v2_1"],
          [a, m] = t.ptonVersion.split("."),
          f = `v${a}_${m}`;
        return u.includes(f) ? f : d
      })(),
      c = qf[i].create(t.ptonMasterAddress);
    return {
      routerInstance: n,
      router: o,
      proxyTon: c
    }
  }
  async getTradeTransactionStatus(t) {
    const s = await le(async () => await this.ta.events.getEvent(t.transactionHash))();
    if (!N(s)) return D();
    if (s.data.inProgress) return D();
    const n = s.data.actions.find(o => {
      var i, c, d;
      return o.type === "JettonSwap" && ((d = ((i = o.JettonSwap) == null ? void 0 : i.jettonMasterIn) || ((c = o.JettonSwap) == null ? void 0 : c.jettonMasterOut)) == null ? void 0 : d.address.equals(R.Address.parseFriendly(t.jettonAddress).address))
    });
    return !n || n.status !== "ok" || s.data.actions.find(o => o.status !== "ok") ? F(!1) : F(!0)
  }
  async getBuyInfo(t) {
    var u, a, m;
    const s = await le(async () => await this.stonApiClient.simulateSwap({
      askAddress: this.jettonAddress,
      offerAddress: this.TonAddress,
      offerUnits: _e(t).toString(),
      slippageTolerance: String(this.slippage / 100),
      dexV2: !0,
      referralAddress: this.REFERRAL_ADDRESS,
      referralFeeBps: this.REFERRAL_PERCENT * 100
    }))();
    if (!N(s)) return ((u = s.extra) == null ? void 0 : u.statusCode) === 400 && ((m = (a = s.extra) == null ? void 0 : a.data) == null ? void 0 : m.startsWith("1012")) ? D(this.MEMEPAD_ERRORS.TOO_LOW_AMOUNT) : D("Failed to get sell info");
    const n = await this.getRouter(s.data.routerAddress);
    if (!N(n)) return D("Failed to get router info");
    const o = z(s.data.minAskUnits),
      i = z(s.data.askUnits),
      c = z(s.data.feeUnits),
      d = c.div(o.plus(c)).times(t);
    return F({
      minReceive: o,
      maxReceive: i,
      platformFee: d,
      additionalInfo: {
        routerInfo: n.data
      }
    })
  }
  async getSellInfo(t) {
    var d, u, a;
    const s = await le(async () => await this.stonApiClient.simulateSwap({
      askAddress: this.TonAddress,
      offerAddress: this.jettonAddress,
      offerUnits: _e(t).toString(),
      slippageTolerance: String(this.slippage / 100),
      dexV2: !0,
      referralAddress: this.REFERRAL_ADDRESS,
      referralFeeBps: this.REFERRAL_PERCENT * 100
    }))();
    if (!N(s)) return ((d = s.extra) == null ? void 0 : d.statusCode) === 400 && ((a = (u = s.extra) == null ? void 0 : u.data) == null ? void 0 : a.startsWith("1012")) ? D(this.MEMEPAD_ERRORS.TOO_LOW_AMOUNT) : D("Failed to get sell info");
    const n = await this.getRouter(s.data.routerAddress);
    if (!N(n)) return D("Failed to get router info");
    const o = z(s.data.minAskUnits),
      i = z(s.data.askUnits),
      c = z(s.data.feeUnits);
    return F({
      minReceive: o,
      maxReceive: i,
      platformFee: c,
      additionalInfo: {
        routerInfo: n.data
      }
    })
  }
  get fees() {
    return {
      buyNetworkFee: this.FEES.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: this.FEES.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE
    }
  }
  async getUserJettonBalance() {
    var s, n, o;
    const t = await le(async () => await this.stonApiClient.getWalletAsset({
      walletAddress: this.mustGetUserWalletAddress().toString(),
      assetAddress: this.jettonAddress
    }))();
    return N(t) ? t.data.balance === void 0 ? F(new M(0)) : F(z(t.data.balance)) : ((s = t.extra) == null ? void 0 : s.statusCode) === 400 && ((o = (n = t.extra) == null ? void 0 : n.data) == null ? void 0 : o.startsWith("1040")) ? F(new M(0)) : D("Failed to get balance")
  }
  async buyJetton(t, s) {
    const n = this.mustGetUserWalletAddress(),
      {
        router: o,
        proxyTon: i
      } = this.getRouterAndProxyTon(s.additionalInfo.routerInfo),
      c = {
        userWalletAddress: n,
        proxyTon: i,
        offerAmount: _e(t),
        askJettonAddress: this.jettonAddress,
        minAskAmount: _e(s.minReceive),
        queryId: void 0,
        referralAddress: this.REFERRAL_ADDRESS,
        referralValue: this.REFERRAL_PERCENT * 100
      },
      d = this.getTonConnectSender();
    return await le(async () => (await o.sendSwapTonToJetton(d, c), (await d.getResult()).hash))()
  }
  async sellJetton(t, s) {
    const n = this.mustGetUserWalletAddress(),
      {
        router: o,
        proxyTon: i
      } = this.getRouterAndProxyTon(s.additionalInfo.routerInfo),
      c = {
        userWalletAddress: n,
        offerJettonAddress: this.jettonAddress,
        offerAmount: _e(t),
        minAskAmount: _e(s.minReceive),
        proxyTon: i,
        queryId: void 0,
        referralAddress: this.REFERRAL_ADDRESS,
        referralValue: this.REFERRAL_PERCENT * 100
      },
      d = this.getTonConnectSender();
    return await le(async () => (await o.sendSwapJettonToTon(d, c), (await d.getResult()).hash))()
  }
}
export {
  Ii as A, Bi as H, If as M, nh as a, lo as d
};