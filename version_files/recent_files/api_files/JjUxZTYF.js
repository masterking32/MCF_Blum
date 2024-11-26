var mi = Object.defineProperty;
var hi = (r, e, t) => e in r ? mi(r, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : r[e] = t;
var p = (r, e, t) => hi(r, typeof e != "symbol" ? e + "" : e, t);
import {
  b$ as B,
  c0 as fi,
  c1 as yi,
  c2 as fe,
  c3 as gi,
  c4 as Q,
  T as ho,
  b5 as W,
  b9 as vi,
  ao as fo,
  L as _i,
  f as T,
  bs as C,
  af as R,
  bT as bi,
  bA as ve,
  K as De,
  bd as j,
  c5 as vs,
  c6 as _s,
  bD as E,
  be as $,
  P as bs,
  bR as Ai,
  br as me,
  c7 as x,
  c8 as _,
  aY as As,
  c9 as L,
  at as ws,
  ca as yo,
  F as Pe,
  cb as go,
  bc as wi,
  ac as Pr,
  av as Ti
} from "./CRu0zQdy.js";
import {
  d as f
} from "./pMUBu7ke.js";
var J = {},
  vt = {},
  _t = {},
  bt = {};
Object.defineProperty(bt, "__esModule", {
  value: !0
});
bt.normalizeCoin = $i;
bt.normalizeCoinEvent = Si;
const ye = B;

function $i(r) {
  return {
    id: r.id,
    address: ye.Address.parse(r.address),
    metadata: r.metadata,
    totalSupply: BigInt(r.totalSupply),
    bclSupply: BigInt(r.bclSupply),
    liqSupply: BigInt(r.liqSupply),
    lastTradeDate: r.lastTradeDate,
    authorAddress: ye.Address.parse(r.authorAddress),
    tradingEnabled: r.tradingEnabled,
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral,
    createdAt: r.createdAt,
    tradingCloseFee: BigInt(r.tradingCloseFee),
    routerAddress: ye.Address.parse(r.routerAddress)
  }
}

function Si(r) {
  if (r.type === "buy") return {
    type: "buy",
    trader: r.trader === "" ? null : ye.Address.parse(r.trader),
    tonValue: BigInt(r.tonValue),
    supplyDelta: BigInt(r.supplyDelta),
    newSupply: BigInt(r.newSupply),
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral
  };
  if (r.type === "sell") return {
    type: "sell",
    trader: r.trader === "" ? null : ye.Address.parse(r.trader),
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
    authorAddress: r.authorAddress === "" ? null : ye.Address.parse(r.authorAddress),
    tradingEnabled: r.tradingEnabled,
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral,
    createdAt: r.createdAt,
    tradingCloseFee: BigInt(r.tradingCloseFee),
    routerAddress: ye.Address.parse(r.routerAddress)
  };
  throw new Error("Unknown BCL event: " + JSON.stringify(r))
}
var At = {};
const ki = fi(yi);
Object.defineProperty(At, "__esModule", {
  value: !0
});
At.OfetchHttpProvider = void 0;
const Ts = ki;
class Ei {
  get(e, t) {
    return (0, Ts.ofetch)(e, {
      query: t.query
    })
  }
  post(e, t) {
    return (0, Ts.ofetch)(e, {
      method: "POST",
      body: JSON.stringify(t)
    })
  }
}
At.OfetchHttpProvider = Ei;
Object.defineProperty(_t, "__esModule", {
  value: !0
});
_t.BclClient = void 0;
const $s = B,
  Ye = bt,
  qi = At;
class Pi {
  constructor(e) {
    this.fetch = async (t, s) => await this.httpProvider.get(this.endpoint + t, {
      query: s == null ? void 0 : s.query
    }), this.fetchCoins = async t => {
      const s = await this.fetch("/getCoins", {
        query: t ?? {}
      });
      return {
        items: s.items.map(Ye.normalizeCoin),
        cursor: s.cursor
      }
    }, this.fetchCoin = async t => {
      let s = await this.fetch("/getCoin/" + t.toString({
        urlSafe: !0
      }));
      return (0, Ye.normalizeCoin)(s)
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
          event: (0, Ye.normalizeCoinEvent)(o.event),
          coinAddress: $s.Address.parse(o.coinAddress)
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
          event: (0, Ye.normalizeCoinEvent)(n.event),
          coinAddress: $s.Address.parse(n.coinAddress)
        })),
        cursor: s.cursor
      }
    }, this.endpoint = e.endpoint, this.httpProvider = e.httpProvider ?? new qi.OfetchHttpProvider
  }
}
_t.BclClient = Pi;
var Ce = {},
  _e = {};
Object.defineProperty(_e, "__esModule", {
  value: !0
});
_e.Constants = void 0;
const Qe = B;
_e.Constants = {
  CoinDeploymentGas: (0, Qe.toNano)("0.05"),
  CoinBuyGas: (0, Qe.toNano)("0.05"),
  CoinSellGas: (0, Qe.toNano)("0.06"),
  WalletUnlockGas: (0, Qe.toNano)("0.05")
};
var ce = {};
Object.defineProperty(ce, "__esModule", {
  value: !0
});
ce.crc32 = vo;
ce.crc32str = Ii;
const ji = -306674912;
let pt;

function Ci() {
  pt = new Int32Array(256);
  for (let r = 0; r < 256; r++) {
    let e = r;
    for (let t = 8; t > 0; --t) e = e & 1 ? e >>> 1 ^ ji : e >>> 1;
    pt[r] = e
  }
}

function vo(r) {
  let e = 4294967295;
  pt === void 0 && Ci();
  for (let t = 0; t < r.length; ++t) e = pt[(e ^ r[t]) & 255] ^ e >>> 8;
  return (e ^ -1) >>> 0
}

function Ii(r) {
  return vo(fe.from(r))
}
var Me = {};
Object.defineProperty(Me, "__esModule", {
  value: !0
});
Me.BclWallet = void 0;
const Ze = B,
  Ss = _e,
  ks = ce;
class jr {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new jr(e)
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
      value: Ss.Constants.CoinSellGas,
      sendMode: Ze.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, Ze.beginCell)().storeUint((0, ks.crc32str)("op::sell"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.amount).storeCoins(s.minReceive).storeMaybeRef(s.referral).endCell()
    })
  }
  async sendUnlockWallet(e, t, s) {
    await e.internal(t, {
      value: Ss.Constants.WalletUnlockGas,
      sendMode: Ze.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, Ze.beginCell)().storeUint((0, ks.crc32str)("op::unlock_wallet"), 32).storeUint(s.queryId ?? 0, 64).endCell()
    })
  }
  async getTransfersEnabled(e) {
    return (await e.get("get_transfers_enabled", [])).stack.readBoolean()
  }
}
Me.BclWallet = jr;
Object.defineProperty(Ce, "__esModule", {
  value: !0
});
Ce.BclJetton = void 0;
Ce.parseBclEvent = Bi;
const Bt = B,
  xi = _e,
  it = ce,
  Ri = Me;

function Bi(r) {
  let e = r.beginParse(),
    t = e.loadUint(32);
  if (t === (0, it.crc32str)("send_liq_log")) return {
    type: "send_liq",
    tonLiq: e.loadCoins(),
    jettonLiq: e.loadCoins()
  };
  if (t === (0, it.crc32str)("sell_log")) return {
    type: "sell",
    trader: e.loadAddress(),
    tonValue: e.loadCoins(),
    supplyDelta: e.loadCoins(),
    newSupply: e.loadCoins(),
    tonLiqCollected: e.loadCoins(),
    referral: e.loadMaybeRef()
  };
  if (t === (0, it.crc32str)("buy_log")) return {
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
class Cr {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Cr(e)
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
      cell: (0, Bt.beginCell)().storeAddress(t).endCell()
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
    let n = (0, Bt.beginCell)().storeUint((0, it.crc32str)("op::buy"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.minReceive).storeMaybeRef(s.referral);
    s.buyerAddress && n.storeAddress(s.buyerAddress), await e.internal(t, {
      value: s.tons + xi.Constants.CoinBuyGas,
      sendMode: Bt.SendMode.PAY_GAS_SEPARATELY,
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
    return e.open(Ri.BclWallet.createFromAddress(s))
  }
}
Ce.BclJetton = Cr;
var Ge = {},
  Ie = {},
  wt = {};
Object.defineProperty(wt, "__esModule", {
  value: !0
});
wt.sha256ToBigint = void 0;
const Oi = gi(),
  Ni = r => BigInt("0x" + (0, Oi.createHash)("sha256").update(r).digest().toString("hex"));
wt.sha256ToBigint = Ni;
Object.defineProperty(Ie, "__esModule", {
  value: !0
});
Ie.storeSnakeContentData = Ao;
Ie.loadSnakeContentData = wo;
Ie.storeTokenOnchainContent = Di;
Ie.loadTokenOnchainContent = Mi;
const mt = f,
  Fi = wt,
  _o = 0,
  bo = 0;

function Ao(r) {
  return e => e.storeUint(bo, 8).storeStringTail(r)
}

function wo(r) {
  if (r.loadUint(8) !== bo) throw new Error("Not snake ContentData");
  return r.loadStringTail()
}
const To = {
  serialize: (r, e) => {
    e.storeRef((0, mt.beginCell)().store(Ao(r)).endCell())
  },
  parse: r => wo(r.loadRef().beginParse())
};

function Di(r) {
  return e => {
    const t = mt.Dictionary.empty(mt.Dictionary.Keys.BigUint(256), To);
    for (const s in r) r[s] && t.set((0, Fi.sha256ToBigint)(s), r[s]);
    return e.storeUint(_o, 8).storeDict(t)
  }
}

function Mi(r) {
  if (r.loadUint(8) !== _o) throw new Error("Not on-chain content");
  return r.loadDict(mt.Dictionary.Keys.BigUint(256), To)
}
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.BclMaster = void 0;
const we = B,
  Es = _e,
  qs = ce,
  Gi = Ie;
class Ir {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Ir(e)
  }
  async sendDeployCoin(e, t, s, n) {
    let o = (0, we.beginCell)().store((0, Gi.storeTokenOnchainContent)({
        name: s.name,
        description: s.description,
        image: s.imageUrl,
        symbol: s.symbol,
        decimals: "9",
        social_links: JSON.stringify(s.socialLinks),
        ...s.extraMetadata
      })).endCell(),
      i = (0, we.beginCell)().storeUint((0, qs.crc32str)("op::deploy_coin"), 32).storeUint(s.queryId ?? 0, 64).storeRef(o).storeAddress(s.authorAddress).storeRef(s.referral ?? (0, we.beginCell)().endCell()),
      a = (0, we.beginCell)().storeUint(3547469196, 32).storeUint(s.queryId ?? 0, 64).endCell();
    if (n != null && n.firstBuy) {
      let c = (0, we.beginCell)().storeUint((0, qs.crc32str)("op::buy"), 32).storeUint(n.firstBuy.queryId ?? 0, 64).storeCoins(n.firstBuy.minReceive).storeMaybeRef(n.firstBuy.referral);
      n.firstBuy.buyerAddress && c.storeAddress(n.firstBuy.buyerAddress), a = c.endCell()
    }
    i.storeMaybeRef(a);
    let d;
    n != null && n.forceDeploymentFee ? d = n.forceDeploymentFee : d = (await this.getMasterData(e)).deploymentFee;
    let l = d + Es.Constants.CoinDeploymentGas;
    n != null && n.firstBuy && (l += Es.Constants.CoinBuyGas + n.firstBuy.tons), await e.internal(t, {
      value: l,
      sendMode: we.SendMode.PAY_GAS_SEPARATELY,
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
Ge.BclMaster = Ir;
Object.defineProperty(vt, "__esModule", {
  value: !0
});
vt.BclSDK = void 0;
const Li = _t,
  Ui = Ce,
  Ot = Ge;
class xr {
  constructor(e) {
    this.apiProvider = e.apiProvider, this.api = new Li.BclClient(e.clientOptions), this.masterAddress = e.masterAddress
  }
  openCoin(e) {
    return this.apiProvider.open(Ui.BclJetton.createFromAddress(e))
  }
  async openUserCoinWallet(e, t) {
    return await this.openCoin(e).getUserWallet(t)
  }
  async deployCoin(e, t, s) {
    await this.apiProvider.open(Ot.BclMaster.createFromAddress(this.masterAddress)).sendDeployCoin(e, t, s)
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
    return await this.apiProvider.open(Ot.BclMaster.createFromAddress(this.masterAddress)).getCoinsForTons(e)
  }
  async getMasterData() {
    return await this.apiProvider.open(Ot.BclMaster.createFromAddress(this.masterAddress)).getMasterData()
  }
  open(e) {
    return this.apiProvider.open(e)
  }
  static create(e) {
    return new xr(e)
  }
}
vt.BclSDK = xr;
var Tt = {},
  q = {};
Object.defineProperty(q, "__esModule", {
  value: !0
});
var $o = q.Api = So = q.HttpClient = q.ContentType = q.PoolImplementationType = q.TrustType = q.JettonVerificationType = q.BouncePhaseType = q.ComputeSkipReason = q.AccStatusChange = q.TransactionType = q.AccountStatus = void 0,
  Ps;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(Ps || (q.AccountStatus = Ps = {}));
var js;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(js || (q.TransactionType = js = {}));
var Cs;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(Cs || (q.AccStatusChange = Cs = {}));
var Is;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(Is || (q.ComputeSkipReason = Is = {}));
var xs;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(xs || (q.BouncePhaseType = xs = {}));
var Rs;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(Rs || (q.JettonVerificationType = Rs = {}));
var Bs;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(Bs || (q.TrustType = Bs = {}));
var Os;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(Os || (q.PoolImplementationType = Os = {}));
var oe;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(oe || (q.ContentType = oe = {}));
class Ji {
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
      [oe.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
      [oe.Text]: e => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
      [oe.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? JSON.stringify(n) : `${n}`), t
      }, new FormData),
      [oe.UrlEncoded]: e => this.toQueryString(e)
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
      baseUrl: a,
      cancelToken: d,
      ...l
    }) => {
      const c = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        m = this.mergeRequestParams(l, c),
        h = o && this.toQueryString(o),
        y = this.contentFormatters[n || oe.Json],
        A = i || m.format;
      return this.customFetch(`${a||this.baseUrl||""}${s}${h?`?${h}`:""}`, {
        ...m,
        headers: {
          ...m.headers || {},
          ...n && n !== oe.FormData ? {
            "Content-Type": n
          } : {}
        },
        signal: (d ? this.createAbortSignal(d) : m.signal) || null,
        body: typeof e > "u" || e === null ? null : y(e)
      }).then(async w => {
        const v = w.clone();
        v.data = null, v.error = null;
        const b = A ? await w[A]().then(G => (v.ok ? v.data = G : v.error = G, v)).catch(G => (v.error = G, v)) : v;
        if (d && this.abortControllers.delete(d), !w.ok) throw b;
        return b.data
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
var So = q.HttpClient = Ji;
let Wi = class {
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
$o = q.Api = Wi;
var Le = {};
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.runGetMethod = Vi;
Le.TvmStackRecordToTupleItem = Rr;
Le.TupleItemToTonapiString = ko;
const ur = B;
async function Vi(r, e, t, s) {
  const n = await r.blockchain.execGetMethodForBlockchainAccount(e.toRawString(), t, {
    args: s == null ? void 0 : s.map(ko)
  });
  if (!n.success || n.exit_code !== 0) throw new Error;
  return {
    stack: new ur.TupleReader(n.stack.map(Rr))
  }
}

function Rr(r) {
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
          cell: ur.Cell.fromBase64(r.cell)
        }
      } catch {
        return {
          type: "cell",
          cell: ur.Cell.fromBase64(fe.from(r.cell, "hex").toString("base64"))
        }
      }
    case "null":
      return {
        type: "null"
      };
    case "tuple":
      return {
        type: "tuple", items: r.tuple.map(Rr)
      };
    default:
      throw new Error(`Unknown type ${r.type}`)
  }
}

function ko(r) {
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
Object.defineProperty(Tt, "__esModule", {
  value: !0
});
Tt.simpleTonapiProvider = zi;
Tt.createProvider = Br;
const Xe = q,
  Be = B,
  Ns = Le;

function zi(r) {
  return {
    open(e) {
      return (0, Be.openContract)(e, t => Br(r, t))
    }
  }
}

function Br(r, e) {
  return {
    async getState() {
      const t = await r.blockchain.getBlockchainRawAccount(e.address.toRawString());
      let s;
      if (t.status === Xe.AccountStatus.Nonexist || t.status === Xe.AccountStatus.Uninit) s = {
        type: "uninit"
      };
      else if (t.status === Xe.AccountStatus.Active) s = {
        type: "active",
        code: t.code ? fe.from(t.code, "hex") : null,
        data: t.data ? fe.from(t.data, "hex") : null
      };
      else if (t.status === Xe.AccountStatus.Frozen) s = {
        type: "frozen",
        stateHash: fe.from(t.frozen_hash, "hex")
      };
      else throw new Error("Unknown state");
      return {
        balance: BigInt(t.balance),
        last: t.last_transaction_hash ? {
          lt: BigInt(t.last_transaction_lt),
          hash: fe.from(t.last_transaction_hash, "hex")
        } : null,
        state: s
      }
    },
    async get(t, s) {
      const n = await r.blockchain.execGetMethodForBlockchainAccount(e.address.toRawString(), t, {
        args: s == null ? void 0 : s.map(Ns.TupleItemToTonapiString)
      });
      if (!n.success || n.exit_code !== 0) throw new Error;
      return {
        stack: new Be.TupleReader(n.stack.map(Ns.TvmStackRecordToTupleItem))
      }
    },
    async external(t) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    },
    async internal(t, s) {
      let o = !0;
      s.bounce !== null && s.bounce !== void 0 && (o = s.bounce);
      let i;
      typeof s.value == "string" ? i = (0, Be.toNano)(s.value) : i = s.value;
      let a = null;
      typeof s.body == "string" ? a = (0, Be.comment)(s.body) : s.body && (a = s.body), await t.send({
        to: e.address,
        value: i,
        bounce: o,
        sendMode: s.sendMode,
        init: null,
        body: a
      })
    },
    open(t) {
      return (0, Be.openContract)(t, s => Br(r, s))
    },
    async getTransactions(t, s, n, o) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    }
  }
}
var Or = {},
  je = {};
Object.defineProperty(je, "__esModule", {
  value: !0
});
je.delay = je.unixtime = void 0;
const Ki = () => Math.floor(Date.now() / 1e3);
je.unixtime = Ki;
const Hi = r => new Promise(e => {
  setTimeout(() => e(), r)
});
je.delay = Hi;
Object.defineProperty(Or, "__esModule", {
  value: !0
});
Or.tonConnectSender = Qi;
const et = B,
  Yi = je;

function Qi(r) {
  let e;
  const t = [];
  return {
    get address() {
      var n;
      const s = (n = r.account) == null ? void 0 : n.address;
      return s ? et.Address.parse(s) : void 0
    },
    async send(s) {
      var h;
      const n = (0, Yi.unixtime)() + 600,
        o = s.to.toString({
          urlSafe: !0,
          bounceable: !0
        }),
        i = (h = this.address) == null ? void 0 : h.toRawString(),
        a = s.value.toString();
      let d;
      s.init && (d = (0, et.beginCell)().store((0, et.storeStateInit)(s.init)).endCell().toBoc().toString("base64"));
      let l;
      s.body && (l = s.body.toBoc().toString("base64"));
      const c = await r.sendTransaction({
          validUntil: n,
          from: i,
          messages: [{
            address: o,
            amount: a,
            stateInit: d,
            payload: l
          }]
        }),
        m = et.Cell.fromBase64(c.boc);
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
var Eo = {};
Object.defineProperty(Eo, "__esModule", {
  value: !0
});
var $t = {};
Object.defineProperty($t, "__esModule", {
  value: !0
});
$t.packReferralConfig = Xi;
$t.unpackReferralConfig = ec;
const Zi = f,
  qo = ce;

function Xi(r) {
  let e = (0, Zi.beginCell)().storeUint((0, qo.crc32str)("ref_v1"), 32).storeAddress(r.partner);
  if (r.platformTag && e.storeAddress(r.platformTag), r.extraTag) {
    if (!r.platformTag) throw new Error("extraTag should only be set if platformTag is present");
    e.storeAddress(r.extraTag)
  }
  return e.endCell()
}

function ec(r) {
  let e = r.beginParse();
  if (e.loadUint(32) !== (0, qo.crc32str)("ref_v1")) throw new Error("Unknown referral format");
  let s = e.loadAddress(),
    n, o;
  return e.remainingBits > 0 && (n = e.loadAddress()), e.remainingBits > 0 && (o = e.loadAddress()), {
    partner: s,
    platformTag: n,
    extraTag: o
  }
}(function(r) {
  var e = Q && Q.__createBinding || (Object.create ? function(o, i, a, d) {
      d === void 0 && (d = a);
      var l = Object.getOwnPropertyDescriptor(i, a);
      (!l || ("get" in l ? !i.__esModule : l.writable || l.configurable)) && (l = {
        enumerable: !0,
        get: function() {
          return i[a]
        }
      }), Object.defineProperty(o, d, l)
    } : function(o, i, a, d) {
      d === void 0 && (d = a), o[d] = i[a]
    }),
    t = Q && Q.__exportStar || function(o, i) {
      for (var a in o) a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && e(i, o, a)
    };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.crc32 = r.crc32str = r.tonConnectSender = void 0, t(vt, r), t(Tt, r);
  var s = Or;
  Object.defineProperty(r, "tonConnectSender", {
    enumerable: !0,
    get: function() {
      return s.tonConnectSender
    }
  });
  var n = ce;
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
  }), t(Eo, r), t(Ge, r), t(Ce, r), t(Me, r), t(_e, r), t($t, r)
})(J);
var P = {},
  xe = function(r) {
    return r && r.Math === Math && r
  },
  V = xe(typeof globalThis == "object" && globalThis) || xe(typeof window == "object" && window) || xe(typeof self == "object" && self) || xe(typeof Q == "object" && Q) || xe(typeof Q == "object" && Q) || function() {
    return this
  }() || Function("return this")(),
  N = function(r) {
    try {
      return !!r()
    } catch {
      return !0
    }
  },
  tc = N,
  St = !tc(function() {
    var r = (function() {}).bind();
    return typeof r != "function" || r.hasOwnProperty("prototype")
  }),
  rc = St,
  Po = Function.prototype,
  Fs = Po.apply,
  Ds = Po.call,
  Nr = typeof Reflect == "object" && Reflect.apply || (rc ? Ds.bind(Fs) : function() {
    return Ds.apply(Fs, arguments)
  }),
  jo = St,
  Co = Function.prototype,
  pr = Co.call,
  sc = jo && Co.bind.bind(pr, pr),
  M = jo ? sc : function(r) {
    return function() {
      return pr.apply(r, arguments)
    }
  },
  Io = M,
  nc = Io({}.toString),
  oc = Io("".slice),
  de = function(r) {
    return oc(nc(r), 8, -1)
  },
  ac = de,
  ic = M,
  xo = function(r) {
    if (ac(r) === "Function") return ic(r)
  },
  Nt = typeof document == "object" && document.all,
  U = typeof Nt > "u" && Nt !== void 0 ? function(r) {
    return typeof r == "function" || r === Nt
  } : function(r) {
    return typeof r == "function"
  },
  Ro = {},
  cc = N,
  se = !cc(function() {
    return Object.defineProperty({}, 1, {
      get: function() {
        return 7
      }
    })[1] !== 7
  }),
  dc = St,
  tt = Function.prototype.call,
  be = dc ? tt.bind(tt) : function() {
    return tt.apply(tt, arguments)
  },
  Bo = {},
  Oo = {}.propertyIsEnumerable,
  No = Object.getOwnPropertyDescriptor,
  lc = No && !Oo.call({
    1: 2
  }, 1);
Bo.f = lc ? function(e) {
  var t = No(this, e);
  return !!t && t.enumerable
} : Oo;
var Fr = function(r, e) {
    return {
      enumerable: !(r & 1),
      configurable: !(r & 2),
      writable: !(r & 4),
      value: e
    }
  },
  uc = M,
  pc = N,
  mc = de,
  Ft = Object,
  hc = uc("".split),
  fc = pc(function() {
    return !Ft("z").propertyIsEnumerable(0)
  }) ? function(r) {
    return mc(r) === "String" ? hc(r, "") : Ft(r)
  } : Ft,
  Fo = function(r) {
    return r == null
  },
  yc = Fo,
  gc = TypeError,
  kt = function(r) {
    if (yc(r)) throw new gc("Can't call method on " + r);
    return r
  },
  vc = fc,
  _c = kt,
  Ue = function(r) {
    return vc(_c(r))
  },
  bc = U,
  Z = function(r) {
    return typeof r == "object" ? r !== null : bc(r)
  },
  Je = {},
  Dt = Je,
  Mt = V,
  Ac = U,
  Ms = function(r) {
    return Ac(r) ? r : void 0
  },
  We = function(r, e) {
    return arguments.length < 2 ? Ms(Dt[r]) || Ms(Mt[r]) : Dt[r] && Dt[r][e] || Mt[r] && Mt[r][e]
  },
  wc = M,
  Tc = wc({}.isPrototypeOf),
  $c = V,
  Gs = $c.navigator,
  Ls = Gs && Gs.userAgent,
  Sc = Ls ? String(Ls) : "",
  Do = V,
  Gt = Sc,
  Us = Do.process,
  Js = Do.Deno,
  Ws = Us && Us.versions || Js && Js.version,
  Vs = Ws && Ws.v8,
  z, ht;
Vs && (z = Vs.split("."), ht = z[0] > 0 && z[0] < 4 ? 1 : +(z[0] + z[1]));
!ht && Gt && (z = Gt.match(/Edge\/(\d+)/), (!z || z[1] >= 74) && (z = Gt.match(/Chrome\/(\d+)/), z && (ht = +z[1])));
var kc = ht,
  zs = kc,
  Ec = N,
  qc = V,
  Pc = qc.String,
  Et = !!Object.getOwnPropertySymbols && !Ec(function() {
    var r = Symbol("symbol detection");
    return !Pc(r) || !(Object(r) instanceof Symbol) || !Symbol.sham && zs && zs < 41
  }),
  jc = Et,
  Mo = jc && !Symbol.sham && typeof Symbol.iterator == "symbol",
  Cc = We,
  Ic = U,
  xc = Tc,
  Rc = Mo,
  Bc = Object,
  Dr = Rc ? function(r) {
    return typeof r == "symbol"
  } : function(r) {
    var e = Cc("Symbol");
    return Ic(e) && xc(e.prototype, Bc(r))
  },
  Oc = String,
  Nc = function(r) {
    try {
      return Oc(r)
    } catch {
      return "Object"
    }
  },
  Fc = U,
  Dc = Nc,
  Mc = TypeError,
  Go = function(r) {
    if (Fc(r)) return r;
    throw new Mc(Dc(r) + " is not a function")
  },
  Gc = Go,
  Lc = Fo,
  Uc = function(r, e) {
    var t = r[e];
    return Lc(t) ? void 0 : Gc(t)
  },
  Lt = be,
  Ut = U,
  Jt = Z,
  Jc = TypeError,
  Wc = function(r, e) {
    var t, s;
    if (e === "string" && Ut(t = r.toString) && !Jt(s = Lt(t, r)) || Ut(t = r.valueOf) && !Jt(s = Lt(t, r)) || e !== "string" && Ut(t = r.toString) && !Jt(s = Lt(t, r))) return s;
    throw new Jc("Can't convert object to primitive value")
  },
  Lo = {
    exports: {}
  },
  Ks = V,
  Vc = Object.defineProperty,
  zc = function(r, e) {
    try {
      Vc(Ks, r, {
        value: e,
        configurable: !0,
        writable: !0
      })
    } catch {
      Ks[r] = e
    }
    return e
  },
  Kc = V,
  Hc = zc,
  Hs = "__core-js_shared__",
  Ys = Lo.exports = Kc[Hs] || Hc(Hs, {});
(Ys.versions || (Ys.versions = [])).push({
  version: "3.38.1",
  mode: "pure",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Uo = Lo.exports,
  Qs = Uo,
  Jo = function(r, e) {
    return Qs[r] || (Qs[r] = e || {})
  },
  Yc = kt,
  Qc = Object,
  Mr = function(r) {
    return Qc(Yc(r))
  },
  Zc = M,
  Xc = Mr,
  ed = Zc({}.hasOwnProperty),
  le = Object.hasOwn || function(e, t) {
    return ed(Xc(e), t)
  },
  td = M,
  rd = 0,
  sd = Math.random(),
  nd = td(1 .toString),
  qt = function(r) {
    return "Symbol(" + (r === void 0 ? "" : r) + ")_" + nd(++rd + sd, 36)
  },
  od = V,
  ad = Jo,
  Zs = le,
  id = qt,
  cd = Et,
  dd = Mo,
  Ee = od.Symbol,
  Wt = ad("wks"),
  ld = dd ? Ee.for || Ee : Ee && Ee.withoutSetter || id,
  Gr = function(r) {
    return Zs(Wt, r) || (Wt[r] = cd && Zs(Ee, r) ? Ee[r] : ld("Symbol." + r)), Wt[r]
  },
  ud = be,
  Xs = Z,
  en = Dr,
  pd = Uc,
  md = Wc,
  hd = Gr,
  fd = TypeError,
  yd = hd("toPrimitive"),
  Wo = function(r, e) {
    if (!Xs(r) || en(r)) return r;
    var t = pd(r, yd),
      s;
    if (t) {
      if (e === void 0 && (e = "default"), s = ud(t, r, e), !Xs(s) || en(s)) return s;
      throw new fd("Can't convert object to primitive value")
    }
    return e === void 0 && (e = "number"), md(r, e)
  },
  gd = Wo,
  vd = Dr,
  Vo = function(r) {
    var e = gd(r, "string");
    return vd(e) ? e : e + ""
  },
  _d = V,
  tn = Z,
  mr = _d.document,
  bd = tn(mr) && tn(mr.createElement),
  zo = function(r) {
    return bd ? mr.createElement(r) : {}
  },
  Ad = se,
  wd = N,
  Td = zo,
  Ko = !Ad && !wd(function() {
    return Object.defineProperty(Td("div"), "a", {
      get: function() {
        return 7
      }
    }).a !== 7
  }),
  $d = se,
  Sd = be,
  kd = Bo,
  Ed = Fr,
  qd = Ue,
  Pd = Vo,
  jd = le,
  Cd = Ko,
  rn = Object.getOwnPropertyDescriptor;
Ro.f = $d ? rn : function(e, t) {
  if (e = qd(e), t = Pd(t), Cd) try {
    return rn(e, t)
  } catch {}
  if (jd(e, t)) return Ed(!Sd(kd.f, e, t), e[t])
};
var Id = N,
  xd = U,
  Rd = /#|\.prototype\./,
  Ve = function(r, e) {
    var t = Od[Bd(r)];
    return t === Fd ? !0 : t === Nd ? !1 : xd(e) ? Id(e) : !!e
  },
  Bd = Ve.normalize = function(r) {
    return String(r).replace(Rd, ".").toLowerCase()
  },
  Od = Ve.data = {},
  Nd = Ve.NATIVE = "N",
  Fd = Ve.POLYFILL = "P",
  Dd = Ve,
  sn = xo,
  Md = Go,
  Gd = St,
  Ld = sn(sn.bind),
  Ud = function(r, e) {
    return Md(r), e === void 0 ? r : Gd ? Ld(r, e) : function() {
      return r.apply(e, arguments)
    }
  },
  ze = {},
  Jd = se,
  Wd = N,
  Ho = Jd && Wd(function() {
    return Object.defineProperty(function() {}, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42
  }),
  Vd = Z,
  zd = String,
  Kd = TypeError,
  Lr = function(r) {
    if (Vd(r)) return r;
    throw new Kd(zd(r) + " is not an object")
  },
  Hd = se,
  Yd = Ko,
  Qd = Ho,
  rt = Lr,
  nn = Vo,
  Zd = TypeError,
  Vt = Object.defineProperty,
  Xd = Object.getOwnPropertyDescriptor,
  zt = "enumerable",
  Kt = "configurable",
  Ht = "writable";
ze.f = Hd ? Qd ? function(e, t, s) {
  if (rt(e), t = nn(t), rt(s), typeof e == "function" && t === "prototype" && "value" in s && Ht in s && !s[Ht]) {
    var n = Xd(e, t);
    n && n[Ht] && (e[t] = s.value, s = {
      configurable: Kt in s ? s[Kt] : n[Kt],
      enumerable: zt in s ? s[zt] : n[zt],
      writable: !1
    })
  }
  return Vt(e, t, s)
} : Vt : function(e, t, s) {
  if (rt(e), t = nn(t), rt(s), Yd) try {
    return Vt(e, t, s)
  } catch {}
  if ("get" in s || "set" in s) throw new Zd("Accessors not supported");
  return "value" in s && (e[t] = s.value), e
};
var el = se,
  tl = ze,
  rl = Fr,
  Yo = el ? function(r, e, t) {
    return tl.f(r, e, rl(1, t))
  } : function(r, e, t) {
    return r[e] = t, r
  },
  Re = V,
  sl = Nr,
  nl = xo,
  ol = U,
  al = Ro.f,
  il = Dd,
  Te = Je,
  cl = Ud,
  $e = Yo,
  on = le,
  dl = function(r) {
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
      return sl(r, this, arguments)
    };
    return e.prototype = r.prototype, e
  },
  ue = function(r, e) {
    var t = r.target,
      s = r.global,
      n = r.stat,
      o = r.proto,
      i = s ? Re : n ? Re[t] : Re[t] && Re[t].prototype,
      a = s ? Te : Te[t] || $e(Te, t, {})[t],
      d = a.prototype,
      l, c, m, h, y, A, w, v, b;
    for (h in e) l = il(s ? h : t + (n ? "." : "#") + h, r.forced), c = !l && i && on(i, h), A = a[h], c && (r.dontCallGetSet ? (b = al(i, h), w = b && b.value) : w = i[h]), y = c && w ? w : e[h], !(!l && !o && typeof A == typeof y) && (r.bind && c ? v = cl(y, Re) : r.wrap && c ? v = dl(y) : o && ol(y) ? v = nl(y) : v = y, (r.sham || y && y.sham || A && A.sham) && $e(v, "sham", !0), $e(a, h, v), o && (m = t + "Prototype", on(Te, m) || $e(Te, m, {}), $e(Te[m], h, y), r.real && d && (l || !d[h]) && $e(d, h, y)))
  },
  ll = Math.ceil,
  ul = Math.floor,
  pl = Math.trunc || function(e) {
    var t = +e;
    return (t > 0 ? ul : ll)(t)
  },
  ml = pl,
  Ur = function(r) {
    var e = +r;
    return e !== e || e === 0 ? 0 : ml(e)
  },
  hl = Ur,
  fl = Math.max,
  yl = Math.min,
  gl = function(r, e) {
    var t = hl(r);
    return t < 0 ? fl(t + e, 0) : yl(t, e)
  },
  vl = Ur,
  _l = Math.min,
  Qo = function(r) {
    var e = vl(r);
    return e > 0 ? _l(e, 9007199254740991) : 0
  },
  bl = Qo,
  Zo = function(r) {
    return bl(r.length)
  },
  Al = Ue,
  wl = gl,
  Tl = Zo,
  an = function(r) {
    return function(e, t, s) {
      var n = Al(e),
        o = Tl(n);
      if (o === 0) return !r && -1;
      var i = wl(s, o),
        a;
      if (r && t !== t) {
        for (; o > i;)
          if (a = n[i++], a !== a) return !0
      } else
        for (; o > i; i++)
          if ((r || i in n) && n[i] === t) return r || i || 0;
      return !r && -1
    }
  },
  $l = {
    includes: an(!0),
    indexOf: an(!1)
  },
  Pt = {},
  Sl = M,
  Yt = le,
  kl = Ue,
  El = $l.indexOf,
  ql = Pt,
  cn = Sl([].push),
  Xo = function(r, e) {
    var t = kl(r),
      s = 0,
      n = [],
      o;
    for (o in t) !Yt(ql, o) && Yt(t, o) && cn(n, o);
    for (; e.length > s;) Yt(t, o = e[s++]) && (~El(n, o) || cn(n, o));
    return n
  },
  Jr = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
  Pl = Xo,
  jl = Jr,
  ea = Object.keys || function(e) {
    return Pl(e, jl)
  },
  Cl = ue,
  Il = Mr,
  ta = ea,
  xl = N,
  Rl = xl(function() {
    ta(1)
  });
Cl({
  target: "Object",
  stat: !0,
  forced: Rl
}, {
  keys: function(e) {
    return ta(Il(e))
  }
});
var Bl = de,
  ra = Array.isArray || function(e) {
    return Bl(e) === "Array"
  },
  Ol = Gr,
  Nl = Ol("toStringTag"),
  sa = {};
sa[Nl] = "z";
var Fl = String(sa) === "[object z]",
  Dl = Fl,
  Ml = U,
  ct = de,
  Gl = Gr,
  Ll = Gl("toStringTag"),
  Ul = Object,
  Jl = ct(function() {
    return arguments
  }()) === "Arguments",
  Wl = function(r, e) {
    try {
      return r[e]
    } catch {}
  },
  Vl = Dl ? ct : function(r) {
    var e, t, s;
    return r === void 0 ? "Undefined" : r === null ? "Null" : typeof(t = Wl(e = Ul(r), Ll)) == "string" ? t : Jl ? ct(e) : (s = ct(e)) === "Object" && Ml(e.callee) ? "Arguments" : s
  },
  zl = Vl,
  Kl = String,
  Ke = function(r) {
    if (zl(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return Kl(r)
  },
  Hl = se,
  Yl = ze,
  Ql = Fr,
  na = function(r, e, t) {
    Hl ? Yl.f(r, e, Ql(0, t)) : r[e] = t
  },
  Wr = M,
  Zl = le,
  st = SyntaxError,
  Xl = parseInt,
  eu = String.fromCharCode,
  tu = Wr("".charAt),
  dn = Wr("".slice),
  ln = Wr(/./.exec),
  un = {
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
  ru = /^[\da-f]{4}$/i,
  su = /^[\u0000-\u001F]$/,
  oa = function(r, e) {
    for (var t = !0, s = ""; e < r.length;) {
      var n = tu(r, e);
      if (n === "\\") {
        var o = dn(r, e, e + 2);
        if (Zl(un, o)) s += un[o], e += 2;
        else if (o === "\\u") {
          e += 2;
          var i = dn(r, e, e + 4);
          if (!ln(ru, i)) throw new st("Bad Unicode escape at: " + e);
          s += eu(Xl(i, 16)), e += 4
        } else throw new st('Unknown escape sequence: "' + o + '"')
      } else if (n === '"') {
        t = !1, e++;
        break
      } else {
        if (ln(su, n)) throw new st("Bad control character in string literal at: " + e);
        s += n, e++
      }
    }
    if (t) throw new st("Unterminated string at: " + e);
    return {
      value: s,
      end: e
    }
  },
  nu = ue,
  ou = se,
  Vr = V,
  au = We,
  jt = M,
  iu = be,
  aa = U,
  cu = Z,
  du = ra,
  lu = le,
  uu = Ke,
  pn = Zo,
  hr = na,
  ia = N,
  pu = oa,
  mu = Et,
  mn = Vr.JSON,
  hu = Vr.Number,
  ke = Vr.SyntaxError,
  zr = mn && mn.parse,
  fu = au("Object", "keys"),
  yu = Object.getOwnPropertyDescriptor,
  O = jt("".charAt),
  Qt = jt("".slice),
  Zt = jt(/./.exec),
  hn = jt([].push),
  Xt = /^\d$/,
  gu = /^[1-9]$/,
  vu = /^[\d-]$/,
  Oe = /^[\t\n\r ]$/,
  er = 0,
  fn = 1,
  _u = function(r, e) {
    r = uu(r);
    var t = new yr(r, 0),
      s = t.parse(),
      n = s.value,
      o = t.skip(Oe, s.end);
    if (o < r.length) throw new ke('Unexpected extra character: "' + O(r, o) + '" after the parsed data at: ' + o);
    return aa(e) ? fr({
      "": n
    }, "", e, s) : n
  },
  fr = function(r, e, t, s) {
    var n = r[e],
      o = s && n === s.value,
      i = o && typeof s.source == "string" ? {
        source: s.source
      } : {},
      a, d, l, c, m;
    if (cu(n)) {
      var h = du(n),
        y = o ? s.nodes : h ? [] : {};
      if (h)
        for (a = y.length, l = pn(n), c = 0; c < l; c++) yn(n, c, fr(n, "" + c, t, c < a ? y[c] : void 0));
      else
        for (d = fu(n), l = pn(d), c = 0; c < l; c++) m = d[c], yn(n, m, fr(n, m, t, lu(y, m) ? y[m] : void 0))
    }
    return iu(t, r, e, n, i)
  },
  yn = function(r, e, t) {
    if (ou) {
      var s = yu(r, e);
      if (s && !s.configurable) return
    }
    t === void 0 ? delete r[e] : hr(r, e, t)
  },
  bu = function(r, e, t, s) {
    this.value = r, this.end = e, this.source = t, this.nodes = s
  },
  yr = function(r, e) {
    this.source = r, this.index = e
  };
yr.prototype = {
  fork: function(r) {
    return new yr(this.source, r)
  },
  parse: function() {
    var r = this.source,
      e = this.skip(Oe, this.index),
      t = this.fork(e),
      s = O(r, e);
    if (Zt(vu, s)) return t.number();
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
    throw new ke('Unexpected character: "' + s + '" at: ' + e)
  },
  node: function(r, e, t, s, n) {
    return new bu(e, s, r ? null : Qt(this.source, t, s), n)
  },
  object: function() {
    for (var r = this.source, e = this.index + 1, t = !1, s = {}, n = {}; e < r.length;) {
      if (e = this.until(['"', "}"], e), O(r, e) === "}" && !t) {
        e++;
        break
      }
      var o = this.fork(e).string(),
        i = o.value;
      e = o.end, e = this.until([":"], e) + 1, e = this.skip(Oe, e), o = this.fork(e).parse(), hr(n, i, o), hr(s, i, o.value), e = this.until([",", "}"], o.end);
      var a = O(r, e);
      if (a === ",") t = !0, e++;
      else if (a === "}") {
        e++;
        break
      }
    }
    return this.node(fn, s, this.index, e, n)
  },
  array: function() {
    for (var r = this.source, e = this.index + 1, t = !1, s = [], n = []; e < r.length;) {
      if (e = this.skip(Oe, e), O(r, e) === "]" && !t) {
        e++;
        break
      }
      var o = this.fork(e).parse();
      if (hn(n, o), hn(s, o.value), e = this.until([",", "]"], o.end), O(r, e) === ",") t = !0, e++;
      else if (O(r, e) === "]") {
        e++;
        break
      }
    }
    return this.node(fn, s, this.index, e, n)
  },
  string: function() {
    var r = this.index,
      e = pu(this.source, this.index + 1);
    return this.node(er, e.value, r, e.end)
  },
  number: function() {
    var r = this.source,
      e = this.index,
      t = e;
    if (O(r, t) === "-" && t++, O(r, t) === "0") t++;
    else if (Zt(gu, O(r, t))) t = this.skip(Xt, t + 1);
    else throw new ke("Failed to parse number at: " + t);
    if (O(r, t) === "." && (t = this.skip(Xt, t + 1)), O(r, t) === "e" || O(r, t) === "E") {
      t++, (O(r, t) === "+" || O(r, t) === "-") && t++;
      var s = t;
      if (t = this.skip(Xt, t), s === t) throw new ke("Failed to parse number's exponent value at: " + t)
    }
    return this.node(er, hu(Qt(r, e, t)), e, t)
  },
  keyword: function(r) {
    var e = "" + r,
      t = this.index,
      s = t + e.length;
    if (Qt(this.source, t, s) !== e) throw new ke("Failed to parse value at: " + t);
    return this.node(er, r, t, s)
  },
  skip: function(r, e) {
    for (var t = this.source; e < t.length && Zt(r, O(t, e)); e++);
    return e
  },
  until: function(r, e) {
    e = this.skip(Oe, e);
    for (var t = O(this.source, e), s = 0; s < r.length; s++)
      if (r[s] === t) return e;
    throw new ke('Unexpected character: "' + t + '" at: ' + e)
  }
};
var Au = ia(function() {
    var r = "9007199254740993",
      e;
    return zr(r, function(t, s, n) {
      e = n.source
    }), e !== r
  }),
  wu = mu && !ia(function() {
    return 1 / zr("-0 	") !== -1 / 0
  });
nu({
  target: "JSON",
  stat: !0,
  forced: Au
}, {
  parse: function(e, t) {
    return wu && !aa(t) ? zr(e) : _u(e, t)
  }
});
var Tu = Je,
  $u = Tu.JSON.parse,
  ca = {},
  Su = se,
  ku = Ho,
  Eu = ze,
  qu = Lr,
  Pu = Ue,
  ju = ea;
ca.f = Su && !ku ? Object.defineProperties : function(e, t) {
  qu(e);
  for (var s = Pu(t), n = ju(t), o = n.length, i = 0, a; o > i;) Eu.f(e, a = n[i++], s[a]);
  return e
};
var Cu = We,
  Iu = Cu("document", "documentElement"),
  xu = Jo,
  Ru = qt,
  gn = xu("keys"),
  da = function(r) {
    return gn[r] || (gn[r] = Ru(r))
  },
  Bu = Lr,
  Ou = ca,
  vn = Jr,
  Nu = Pt,
  Fu = Iu,
  Du = zo,
  Mu = da,
  _n = ">",
  bn = "<",
  gr = "prototype",
  vr = "script",
  la = Mu("IE_PROTO"),
  tr = function() {},
  ua = function(r) {
    return bn + vr + _n + r + bn + "/" + vr + _n
  },
  An = function(r) {
    r.write(ua("")), r.close();
    var e = r.parentWindow.Object;
    return r = null, e
  },
  Gu = function() {
    var r = Du("iframe"),
      e = "java" + vr + ":",
      t;
    return r.style.display = "none", Fu.appendChild(r), r.src = String(e), t = r.contentWindow.document, t.open(), t.write(ua("document.F=Object")), t.close(), t.F
  },
  nt, dt = function() {
    try {
      nt = new ActiveXObject("htmlfile")
    } catch {}
    dt = typeof document < "u" ? document.domain && nt ? An(nt) : Gu() : An(nt);
    for (var r = vn.length; r--;) delete dt[gr][vn[r]];
    return dt()
  };
Nu[la] = !0;
var Lu = Object.create || function(e, t) {
    var s;
    return e !== null ? (tr[gr] = Bu(e), s = new tr, tr[gr] = null, s[la] = e) : s = dt(), t === void 0 ? s : Ou.f(s, t)
  },
  Uu = ue,
  Ju = se,
  Wu = Lu;
Uu({
  target: "Object",
  stat: !0,
  sham: !Ju
}, {
  create: Wu
});
var Vu = N,
  Kr = !Vu(function() {
    return Object.isExtensible(Object.preventExtensions({}))
  }),
  pa = {
    exports: {}
  },
  Hr = {},
  zu = Xo,
  Ku = Jr,
  Hu = Ku.concat("length", "prototype");
Hr.f = Object.getOwnPropertyNames || function(e) {
  return zu(e, Hu)
};
var ma = {},
  Yu = M,
  ha = Yu([].slice),
  Qu = de,
  Zu = Ue,
  fa = Hr.f,
  Xu = ha,
  ya = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
  ep = function(r) {
    try {
      return fa(r)
    } catch {
      return Xu(ya)
    }
  };
ma.f = function(e) {
  return ya && Qu(e) === "Window" ? ep(e) : fa(Zu(e))
};
var tp = N,
  rp = tp(function() {
    if (typeof ArrayBuffer == "function") {
      var r = new ArrayBuffer(8);
      Object.isExtensible(r) && Object.defineProperty(r, "a", {
        value: 8
      })
    }
  }),
  sp = N,
  np = Z,
  op = de,
  wn = rp,
  lt = Object.isExtensible,
  ap = sp(function() {
    lt(1)
  }),
  ip = ap || wn ? function(e) {
    return !np(e) || wn && op(e) === "ArrayBuffer" ? !1 : lt ? lt(e) : !0
  } : lt,
  cp = ue,
  dp = M,
  lp = Pt,
  up = Z,
  Yr = le,
  pp = ze.f,
  Tn = Hr,
  mp = ma,
  Qr = ip,
  hp = qt,
  fp = Kr,
  ga = !1,
  re = hp("meta"),
  yp = 0,
  Zr = function(r) {
    pp(r, re, {
      value: {
        objectID: "O" + yp++,
        weakData: {}
      }
    })
  },
  gp = function(r, e) {
    if (!up(r)) return typeof r == "symbol" ? r : (typeof r == "string" ? "S" : "P") + r;
    if (!Yr(r, re)) {
      if (!Qr(r)) return "F";
      if (!e) return "E";
      Zr(r)
    }
    return r[re].objectID
  },
  vp = function(r, e) {
    if (!Yr(r, re)) {
      if (!Qr(r)) return !0;
      if (!e) return !1;
      Zr(r)
    }
    return r[re].weakData
  },
  _p = function(r) {
    return fp && ga && Qr(r) && !Yr(r, re) && Zr(r), r
  },
  bp = function() {
    Ap.enable = function() {}, ga = !0;
    var r = Tn.f,
      e = dp([].splice),
      t = {};
    t[re] = 1, r(t).length && (Tn.f = function(s) {
      for (var n = r(s), o = 0, i = n.length; o < i; o++)
        if (n[o] === re) {
          e(n, o, 1);
          break
        } return n
    }, cp({
      target: "Object",
      stat: !0,
      forced: !0
    }, {
      getOwnPropertyNames: mp.f
    }))
  },
  Ap = pa.exports = {
    enable: bp,
    fastKey: gp,
    getWeakData: vp,
    onFreeze: _p
  };
lp[re] = !0;
var wp = pa.exports,
  Tp = ue,
  $p = Kr,
  Sp = N,
  kp = Z,
  Ep = wp.onFreeze,
  _r = Object.freeze,
  qp = Sp(function() {
    _r(1)
  });
Tp({
  target: "Object",
  stat: !0,
  forced: qp,
  sham: !$p
}, {
  freeze: function(e) {
    return _r && kp(e) ? _r(Ep(e)) : e
  }
});
var Pp = N,
  jp = !Pp(function() {
    var r = "9007199254740993",
      e = JSON.rawJSON(r);
    return !JSON.isRawJSON(e) || JSON.stringify(e) !== r
  }),
  Cp = V,
  Ip = U,
  $n = Cp.WeakMap,
  xp = Ip($n) && /native code/.test(String($n)),
  Rp = xp,
  va = V,
  Bp = Z,
  Op = Yo,
  rr = le,
  sr = Uo,
  Np = da,
  Fp = Pt,
  Sn = "Object already initialized",
  br = va.TypeError,
  Dp = va.WeakMap,
  ft, Ne, yt, Mp = function(r) {
    return yt(r) ? Ne(r) : ft(r, {})
  },
  Gp = function(r) {
    return function(e) {
      var t;
      if (!Bp(e) || (t = Ne(e)).type !== r) throw new br("Incompatible receiver, " + r + " required");
      return t
    }
  };
if (Rp || sr.state) {
  var H = sr.state || (sr.state = new Dp);
  H.get = H.get, H.has = H.has, H.set = H.set, ft = function(r, e) {
    if (H.has(r)) throw new br(Sn);
    return e.facade = r, H.set(r, e), e
  }, Ne = function(r) {
    return H.get(r) || {}
  }, yt = function(r) {
    return H.has(r)
  }
} else {
  var Se = Np("state");
  Fp[Se] = !0, ft = function(r, e) {
    if (rr(r, Se)) throw new br(Sn);
    return e.facade = r, Op(r, Se, e), e
  }, Ne = function(r) {
    return rr(r, Se) ? r[Se] : {}
  }, yt = function(r) {
    return rr(r, Se)
  }
}
var _a = {
    set: ft,
    get: Ne,
    has: yt,
    enforce: Mp,
    getterFor: Gp
  },
  Lp = Z,
  Up = _a.get,
  Jp = function(e) {
    if (!Lp(e)) return !1;
    var t = Up(e);
    return !!t && t.type === "RawJSON"
  },
  Wp = M,
  kn = ra,
  Vp = U,
  En = de,
  zp = Ke,
  qn = Wp([].push),
  ba = function(r) {
    if (Vp(r)) return r;
    if (kn(r)) {
      for (var e = r.length, t = [], s = 0; s < e; s++) {
        var n = r[s];
        typeof n == "string" ? qn(t, n) : (typeof n == "number" || En(n) === "Number" || En(n) === "String") && qn(t, zp(n))
      }
      var o = t.length,
        i = !0;
      return function(a, d) {
        if (i) return i = !1, d;
        if (kn(this)) return d;
        for (var l = 0; l < o; l++)
          if (t[l] === a) return d
      }
    }
  },
  Aa = ue,
  Kp = Kr,
  wa = jp,
  Ct = We,
  Hp = be,
  Xr = M,
  Yp = U,
  Qp = Jp,
  Zp = Ke,
  Xp = na,
  em = oa,
  tm = ba,
  rm = qt,
  sm = _a.set,
  nm = String,
  Pn = SyntaxError,
  om = Ct("JSON", "parse"),
  jn = Ct("JSON", "stringify"),
  am = Ct("Object", "create"),
  im = Ct("Object", "freeze"),
  Ar = Xr("".charAt),
  nr = Xr("".slice),
  cm = Xr([].push),
  wr = rm(),
  Cn = wr.length,
  In = "Unacceptable as raw JSON",
  xn = function(r) {
    return r === " " || r === "	" || r === `
` || r === "\r"
  };
Aa({
  target: "JSON",
  stat: !0,
  forced: !wa
}, {
  rawJSON: function(e) {
    var t = Zp(e);
    if (t === "" || xn(Ar(t, 0)) || xn(Ar(t, t.length - 1))) throw new Pn(In);
    var s = om(t);
    if (typeof s == "object" && s !== null) throw new Pn(In);
    var n = am(null);
    return sm(n, {
      type: "RawJSON"
    }), Xp(n, "rawJSON", t), Kp ? im(n) : n
  }
});
jn && Aa({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: !wa
}, {
  stringify: function(e, t, s) {
    var n = tm(t),
      o = [],
      i = jn(e, function(y, A) {
        var w = Yp(n) ? Hp(n, this, nm(y), A) : A;
        return Qp(w) ? wr + (cm(o, w.rawJSON) - 1) : w
      }, s);
    if (typeof i != "string") return i;
    for (var a = "", d = i.length, l = 0; l < d; l++) {
      var c = Ar(i, l);
      if (c === '"') {
        var m = em(i, ++l).end - 1,
          h = nr(i, l, m);
        a += nr(h, 0, Cn) === wr ? o[nr(h, Cn)] : '"' + h + '"', l = m
      } else a += c
    }
    return a
  }
});
var dm = Je,
  lm = dm.JSON.rawJSON,
  um = Ur,
  pm = Ke,
  mm = kt,
  hm = RangeError,
  fm = function(e) {
    var t = pm(mm(this)),
      s = "",
      n = um(e);
    if (n < 0 || n === 1 / 0) throw new hm("Wrong number of repetitions");
    for (; n > 0;
      (n >>>= 1) && (t += t)) n & 1 && (s += t);
    return s
  },
  Ta = M,
  ym = Qo,
  Rn = Ke,
  gm = fm,
  vm = kt,
  _m = Ta(gm),
  bm = Ta("".slice),
  Am = Math.ceil,
  Bn = function(r) {
    return function(e, t, s) {
      var n = Rn(vm(e)),
        o = ym(t),
        i = n.length,
        a = s === void 0 ? " " : Rn(s),
        d, l;
      return o <= i || a === "" ? n : (d = o - i, l = _m(a, Am(d / a.length)), l.length > d && (l = bm(l, 0, d)), r ? n + l : l + n)
    }
  },
  wm = {
    start: Bn(!1),
    end: Bn(!0)
  },
  pe = M,
  On = N,
  he = wm.start,
  Tm = RangeError,
  $m = isFinite,
  Sm = Math.abs,
  ne = Date.prototype,
  or = ne.toISOString,
  km = pe(ne.getTime),
  Em = pe(ne.getUTCDate),
  qm = pe(ne.getUTCFullYear),
  Pm = pe(ne.getUTCHours),
  jm = pe(ne.getUTCMilliseconds),
  Cm = pe(ne.getUTCMinutes),
  Im = pe(ne.getUTCMonth),
  xm = pe(ne.getUTCSeconds),
  Rm = On(function() {
    return or.call(new Date(-5e13 - 1)) !== "0385-07-25T07:06:39.999Z"
  }) || !On(function() {
    or.call(new Date(NaN))
  }) ? function() {
    if (!$m(km(this))) throw new Tm("Invalid time value");
    var e = this,
      t = qm(e),
      s = jm(e),
      n = t < 0 ? "-" : t > 9999 ? "+" : "";
    return n + he(Sm(t), n ? 6 : 4, 0) + "-" + he(Im(e) + 1, 2, 0) + "-" + he(Em(e), 2, 0) + "T" + he(Pm(e), 2, 0) + ":" + he(Cm(e), 2, 0) + ":" + he(xm(e), 2, 0) + "." + he(s, 3, 0) + "Z"
  } : or,
  Bm = ue,
  $a = be,
  Om = Mr,
  Nm = Wo,
  Fm = Rm,
  Dm = de,
  Mm = N,
  Gm = Mm(function() {
    return new Date(NaN).toJSON() !== null || $a(Date.prototype.toJSON, {
      toISOString: function() {
        return 1
      }
    }) !== 1
  });
Bm({
  target: "Date",
  proto: !0,
  forced: Gm
}, {
  toJSON: function(e) {
    var t = Om(this),
      s = Nm(t, "number");
    return typeof s == "number" && !isFinite(s) ? null : !("toISOString" in t) && Dm(t) === "Date" ? $a(Fm, t) : t.toISOString()
  }
});
var Lm = ue,
  Sa = We,
  ka = Nr,
  Um = be,
  He = M,
  Ea = N,
  Nn = U,
  Fn = Dr,
  qa = ha,
  Jm = ba,
  Wm = Et,
  Vm = String,
  ie = Sa("JSON", "stringify"),
  ot = He(/./.exec),
  Dn = He("".charAt),
  zm = He("".charCodeAt),
  Km = He("".replace),
  Hm = He(1 .toString),
  Ym = /[\uD800-\uDFFF]/g,
  Mn = /^[\uD800-\uDBFF]$/,
  Gn = /^[\uDC00-\uDFFF]$/,
  Ln = !Wm || Ea(function() {
    var r = Sa("Symbol")("stringify detection");
    return ie([r]) !== "[null]" || ie({
      a: r
    }) !== "{}" || ie(Object(r)) !== "{}"
  }),
  Un = Ea(function() {
    return ie("\uDF06\uD834") !== '"\\udf06\\ud834"' || ie("\uDEAD") !== '"\\udead"'
  }),
  Qm = function(r, e) {
    var t = qa(arguments),
      s = Jm(e);
    if (!(!Nn(s) && (r === void 0 || Fn(r)))) return t[1] = function(n, o) {
      if (Nn(s) && (o = Um(s, this, Vm(n), o)), !Fn(o)) return o
    }, ka(ie, null, t)
  },
  Zm = function(r, e, t) {
    var s = Dn(t, e - 1),
      n = Dn(t, e + 1);
    return ot(Mn, r) && !ot(Gn, n) || ot(Gn, r) && !ot(Mn, s) ? "\\u" + Hm(zm(r, 0), 16) : r
  };
ie && Lm({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: Ln || Un
}, {
  stringify: function(e, t, s) {
    var n = qa(arguments),
      o = ka(Ln ? Qm : ie, null, n);
    return Un && typeof o == "string" ? Km(o, Ym, Zm) : o
  }
});
var Tr = Je,
  Xm = Nr;
Tr.JSON || (Tr.JSON = {
  stringify: JSON.stringify
});
var eh = function(e, t, s) {
    return Xm(Tr.JSON.stringify, null, arguments)
  },
  th = eh,
  rh = th,
  sh = rh,
  nh = sh,
  es = Q && Q.__importDefault || function(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  };
Object.defineProperty(P, "__esModule", {
  value: !0
});
var Pa = P.Api = ja = P.TonApiClient = P.ContentType = P.PoolImplementationType = P.TrustType = P.JettonVerificationType = P.BouncePhaseType = P.ComputeSkipReason = P.AccStatusChange = P.TransactionType = P.AccountStatus = void 0,
  Jn;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(Jn || (P.AccountStatus = Jn = {}));
var Wn;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(Wn || (P.TransactionType = Wn = {}));
var Vn;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(Vn || (P.AccStatusChange = Vn = {}));
var zn;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(zn || (P.ComputeSkipReason = zn = {}));
var Kn;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(Kn || (P.BouncePhaseType = Kn = {}));
var Hn;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(Hn || (P.JettonVerificationType = Hn = {}));
var Yn;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(Yn || (P.TrustType = Yn = {}));
var Qn;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(Qn || (P.PoolImplementationType = Qn = {}));
var ae;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(ae || (P.ContentType = ae = {}));
const $r = B,
  oh = es($u),
  ah = es(lm),
  ih = es(nh),
  ch = r => (0, oh.default)(r, (e, t, s) => {
    if (typeof t == "number") {
      const n = s.source;
      return Number.isSafeInteger(t) || /[\.eE]/.test(n) ? t : BigInt(n)
    }
    return t
  }),
  ar = r => (0, ih.default)(r, (e, t) => typeof t == "bigint" ? (0, ah.default)(t.toString()) : t);
class dh {
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
      [ae.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? ar(e) : e,
      [ae.Text]: e => e !== null && typeof e != "string" ? ar(e) : e,
      [ae.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? ar(n) : `${n}`), t
      }, new FormData),
      [ae.UrlEncoded]: e => this.toQueryString(e)
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
      baseUrl: a,
      cancelToken: d,
      ...l
    }) => {
      const c = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        m = this.mergeRequestParams(l, c),
        h = o && this.toQueryString(o),
        y = n ?? ae.Json,
        A = this.contentFormatters[y],
        w = i || m.format;
      return this.customFetch(`${a||this.baseUrl||""}${s}${h?`?${h}`:""}`, {
        ...m,
        headers: {
          ...m.headers || {},
          ...y && y !== ae.FormData ? {
            "Content-Type": y
          } : {}
        },
        signal: (d ? this.createAbortSignal(d) : m.signal) || null,
        body: typeof e > "u" || e === null ? null : A(e)
      }).then(async v => {
        const b = v.clone();
        b.data = null, b.error = null;
        const G = w === "json" ? "text" : w,
          X = G ? await v[G]().then(K => (b.ok ? b.data = w === "json" ? ch(K) : K : b.error = K, b)).catch(K => (b.error = K, b)) : b;
        if (d && this.abortControllers.delete(d), !v.ok) throw X;
        return X.data
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
var ja = P.TonApiClient = dh;
const Ca = {
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

function lh(r) {
  return r.replace(/(_\w)/g, e => {
    var t;
    return ((t = e[1]) == null ? void 0 : t.toUpperCase()) ?? ""
  })
}

function uh(r) {
  return r.replace(/([A-Z])/g, e => `_${e.toLowerCase()}`)
}

function ir(r) {
  return $r.Cell.fromBase64(fe.from(r, "hex").toString("base64"))
}

function ph(r) {
  return r.startsWith("-") ? BigInt(r.slice(1)) * -1n : BigInt(r)
}

function u(r, e) {
  const t = e && e.$ref,
    s = t ? Ca[t] : e;
  if (Array.isArray(r)) {
    const n = s && s.items;
    return r.map(o => u(o, n))
  } else if (s) {
    if (s.type === "string") {
      if (s.format === "address") return $r.Address.parse(r);
      if (s.format === "cell") return r && ir(r);
      if (s.format === "cell-base64") return r && $r.Cell.fromBase64(r)
    }
    if (s.type === "integer") return s["x-js-format"] === "bigint" ? BigInt(r) : Number(r);
    if (s.type === "object" && s.format === "tuple-item") switch (r.type) {
      case "tuple":
        const n = s.properties.tuple.items;
        return {
          type: "tuple", items: r.tuple.map(o => u(o, n))
        };
      case "num":
        return {
          type: "int", value: ph(r.num)
        };
      case "cell":
        return {
          type: "cell", cell: ir(r.cell)
        };
      case "slice":
        return {
          type: "slice", slice: ir(r.slice)
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
      a = lh(o);
    return n[a] = u(r[o], i), n
  }, {}) : r
}

function F(r, e) {
  const t = e && e.$ref,
    s = t ? Ca[t] : e;
  if (Array.isArray(r)) {
    const n = s && s.items;
    return r.map(o => F(o, n))
  } else if (s && s.type === "string") {
    if (s.format === "address") return r.toRawString();
    if (s.format === "cell") return r.toBoc().toString("hex");
    if (s.format === "cell-base64") return r.toBoc().toString("base64")
  }
  return r !== null && typeof r == "object" ? Object.keys(r).reduce((n, o) => {
    const i = (s == null ? void 0 : s.properties) && s.properties[o],
      a = uh(o);
    return n[a] = F(r[o], i), n
  }, {}) : r
}
class mh {
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
        return u(t, {
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
        return u(n, {
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
        return u(s, {
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
        return u(s, {
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
        return u(s, {
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
        return u(s, {
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
        return u(s, {
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
        return u(s, {
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
        return u(s, {
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
        return u(s, {
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
        return u(s, {
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
        return u(s, {
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
        return u(t, {
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
        return u(t, {
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
        return u(n, {
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
        return u(o, {
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
        return u(i, {
          $ref: "#/components/schemas/MethodExecutionResult"
        })
      },
      sendBlockchainMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/blockchain/message",
          method: "POST",
          body: F(e, {
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
        return u(s)
      },
      getBlockchainConfig: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/blockchain/config",
          method: "GET",
          format: "json",
          ...e
        });
        return u(t, {
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
        return u(t, {
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
        return u(n, {
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
        return u(t, {
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
          body: F(e, {
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
        return u(n, {
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
        return u(n, {
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
        return u(n, {
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
        return u(o, {
          $ref: "#/components/schemas/JettonsBalances"
        })
      },
      getAccountJettonBalance: async (e, t, s, n = {}) => {
        const o = e.toRawString(),
          i = t.toRawString(),
          a = await this.http.request({
            path: `/v2/accounts/${o}/jettons/${i}`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return u(a, {
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
        return u(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountJettonHistoryById: async (e, t, s, n = {}) => {
        const o = e.toRawString(),
          i = t.toRawString(),
          a = await this.http.request({
            path: `/v2/accounts/${o}/jettons/${i}/history`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return u(a, {
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
        return u(o, {
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
        return u(o, {
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
        return u(i, {
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
        return u(o, {
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
        return u(n, {
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
        return u(n)
      },
      searchAccounts: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/accounts/search",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return u(s, {
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
        return u(o, {
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
        return u(n, {
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
        return u(n, {
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
        return u(o, {
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
        return u(n, {
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
        return u(o, {
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
        return u(s, {
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
        return u(n, {
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
        return u(o, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getNftItemsByAddresses: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/nfts/_bulk",
          method: "POST",
          body: F(e, {
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
        return u(s, {
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
        return u(n, {
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
        return u(o, {
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
        return u(s, {
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
        return u(s, {
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
        return u(s, {
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
        return u(s, {
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
        return u(s, {
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
        return u(s, {
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
        return u(o, {
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
        return u(o, {
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
        return u(i, {
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
        return u(s, {
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
        return u(s, {
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
        return u(n, {
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
        return u(o, {
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
        return u(i, {
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
        return u(s, {
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
        return u(n, {
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
        return u(n, {
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
        return u(n, {
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
        return u(s, {
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
        return u(t, {
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
        return u(s, {
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
        return u(s, {
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
        return u(t, {
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
        return u(t, {
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
          body: F(e, {
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
        return u(s, {
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
        return u(t, {
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
          body: F(e),
          ...t
        });
        return u(s)
      },
      tonConnectProof: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/auth/proof",
          method: "POST",
          body: F(e, {
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
        return u(s, {
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
        return u(n, {
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
        return u(s, {
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
        return u(t, {
          $ref: "#/components/schemas/GaslessConfig"
        })
      },
      gaslessEstimate: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/gasless/estimate/${n}`,
            method: "POST",
            body: F(t, {
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
        return u(o, {
          $ref: "#/components/schemas/SignRawParams"
        })
      },
      gaslessSend: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/gasless/send",
          method: "POST",
          body: F(e, {
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
        return u(s)
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
        return u(t, {
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
        return u(s, {
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
        return u(t, {
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
        return u(s, {
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
        return u(s, {
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
        return u(n, {
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
          body: F(e, {
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
        return u(s, {
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
        return u(o, {
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
        return u(n, {
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
        return u(s, {
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
        return u(o, {
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
        return u(n, {
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
        return u(s, {
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
        return u(n, {
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
        return u(s, {
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
        return u(t, {
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
        return u(n, {
          $ref: "#/components/schemas/Multisig"
        })
      }
    });
    p(this, "emulation", {
      decodeMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/message/decode",
          method: "POST",
          body: F(e, {
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
        return u(s, {
          $ref: "#/components/schemas/DecodedMessage"
        })
      },
      emulateMessageToEvent: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: "/v2/events/emulate",
          method: "POST",
          query: t,
          body: F(e, {
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
        return u(n, {
          $ref: "#/components/schemas/Event"
        })
      },
      emulateMessageToTrace: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: "/v2/traces/emulate",
          method: "POST",
          query: t,
          body: F(e, {
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
        return u(n, {
          $ref: "#/components/schemas/Trace"
        })
      },
      emulateMessageToWallet: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/emulate",
          method: "POST",
          body: F(e, {
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
        return u(s, {
          $ref: "#/components/schemas/MessageConsequences"
        })
      },
      emulateMessageToAccountEvent: async (e, t, s, n = {}) => {
        const o = e.toRawString(),
          i = await this.http.request({
            path: `/v2/accounts/${o}/events/emulate`,
            method: "POST",
            query: s,
            body: F(t, {
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
        return u(i, {
          $ref: "#/components/schemas/AccountEvent"
        })
      }
    });
    this.http = e
  }
}
Pa = P.Api = mh;
class Ia {
  constructor() {
    p(this, "TON_API_TOKEN");
    p(this, "ta");
    p(this, "MEMEPAD_DEFAULT_SLIPPAGE", 20);
    p(this, "MEMEPAD_ERRORS", {
      TOO_LOW_AMOUNT: "TOO_LOW_AMOUNT"
    });
    p(this, "createGetWaitForLaunchStatusUntilOk", e => () => ve((() => {
      let t, s;
      return async ({
        queryId: n,
        launchTransactionHash: o
      }) => {
        const i = t ?? await De.getSaveMemepadJettonInfoStatus(n),
          a = s ?? await e(o);
        return j(a) && a.data && (s = a), j(i) && i.data.status === vs.READY && (t = i), _s(a) || _s(i) ? E() : j(i) && i.data.status === vs.READY ? $(i.data) : j(a) && !a.data ? $(void 0) : E()
      }
    })(), () => {}, 12e3));
    this.TON_API_TOKEN = ho().public.TON_API_TOKEN, this.ta = new Pa(new ja({
      baseUrl: "https://tonapi.io",
      apiKey: this.TON_API_TOKEN
    }))
  }
  getAddress(e) {
    return B.Address.parseFriendly(e).address
  }
  getMemepadJettonInfoFromForm(e) {
    const t = (s, n) => {
      if (n === Ai.TELEGRAM) try {
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
    const t = W(e, "$lWcnl8jOnP");
    return {
      get: () => t.value,
      set: s => t.value = s
    }
  }
  useCachedKeys(e) {
    const t = W(e, () => new Map);
    return {
      get: s => t.value.get(s),
      set: (s, n) => t.value.set(s, n)
    }
  }
  getTonConnectSender() {
    return J.tonConnectSender(vi().tonConnectUI.value)
  }
  mustGetUserWalletAddress() {
    const e = fo();
    if (e.wallet.value.status !== "connected") throw _i("Wallet is not connected");
    return B.Address.parseFriendly(e.wallet.value.address.default).address
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
        a = i ? i.plus(o) : o;
      if (s.push({
          title: T("memepad.new.price_details.launch"),
          details: [...i ? [{
            highlight: !1,
            label: `${T("memepad.jetton.fees_network")}: ${C(i)} TON`
          }] : [], {
            highlight: o.isZero(),
            label: `${T("memepad.jetton.fees_platform")}: ${C(o)} TON`
          }],
          label: `${C(a)} TON`,
          total: a
        }), !t.share.isZero()) {
        const c = new R(t.share.plus(n));
        s.push({
          title: `${T("base.share")} ${bi(t.jettonReceivePercent)}%`,
          details: [...n.isZero() ? [] : [{
            highlight: !1,
            label: `${T("memepad.jetton.fees_network")}: ${C(n)} TON`
          }], {
            highlight: !1,
            label: `${T("memepad.jetton.fees_platform")}: ${C(t.platformFee)} TON`
          }],
          label: `${C(c)} TON`,
          total: c
        })
      }
      const d = s.reduce((c, m) => c.plus(m.total), new R(0)),
        l = {
          title: T("memepad.new.price_details.total_label"),
          label: `${C(d)} TON`,
          value: d
        };
      return {
        tonCollected: t.tonCollected,
        tonCollectedPercent: t.tonCollectedPercent,
        sections: s,
        totalSection: l,
        total: d
      }
    }
  }
  getTradeInputStateControls({
    getFees: e,
    getBuyInfo: t,
    getSellInfo: s
  }) {
    const n = async (c, m) => await (c === me.BUY ? t : s)(m), o = c => {
      const {
        buyNetworkFee: m,
        sellNetworkFee: h
      } = e();
      if (c === me.BUY) {
        const y = m;
        return {
          details: [...y.isZero() ? [] : [{
            label: `${T("memepad.jetton.fees_network")}: ${C(y)} TON`
          }], {
            label: `${T("memepad.jetton.fees_platform")}: ${C(new R(0))} TON`
          }],
          total: new R(y),
          totalLabel: `${T("memepad.jetton.fees_base")}: ${C(y)} TON`
        }
      } else {
        const y = h;
        return {
          details: [...y.isZero() ? [] : [{
            label: `${T("memepad.jetton.fees_network")}: ${C(y)} TON`
          }], {
            label: `${T("memepad.jetton.fees_platform")}: ${C(new R(0))} TON`
          }],
          total: new R(y),
          totalLabel: `${T("memepad.jetton.fees_base")}: ${C(y)} TON`
        }
      }
    }, i = (c, m, h) => {
      if (m.isZero()) return o(c);
      const {
        buyNetworkFee: y,
        sellNetworkFee: A
      } = e(), w = h.platformFee;
      if (c === me.BUY) {
        const v = y,
          b = m.plus(v);
        return {
          details: [...v.isZero() ? [] : [{
            label: `${T("memepad.jetton.fees_network")}: ${C(v)} TON`
          }], {
            label: `${T("memepad.jetton.fees_platform")}: ${C(w)} TON`
          }],
          total: b,
          totalLabel: `${T("memepad.jetton.fees_send")}: ${C(b)} TON`
        }
      } else {
        const v = A,
          b = w.plus(v);
        return {
          details: [...v.isZero() ? [] : [{
            label: `${T("memepad.jetton.fees_network")}: ${C(v)} TON`
          }], {
            label: `${T("memepad.jetton.fees_platform")}: ${C(w)} TON`
          }],
          total: b,
          totalLabel: `${T("memepad.jetton.fees_base")}: ${C(b)} TON`
        }
      }
    }, a = ({
      operation: c,
      tonBalance: m,
      jettonBalance: h
    }) => ({
      balanceLabel: c === me.BUY ? m == null ? void 0 : m.frontendWithSymbol : h == null ? void 0 : h.frontendWithSymbol,
      tradeInfo: void 0,
      feesInfo: void 0,
      error: void 0,
      ready: !1,
      loading: !1
    }), d = ({
      operation: c,
      amount: m,
      tonBalance: h,
      jettonBalance: y,
      jetton: A
    }) => {
      const {
        buyNetworkFee: w,
        sellNetworkFee: v
      } = e();
      if (!h || !y) return {
        balanceLabel: void 0,
        tradeInfo: void 0,
        feesInfo: void 0,
        error: void 0,
        ready: !1,
        loading: !0
      };
      const b = c === me.BUY ? h.frontendWithSymbol : y == null ? void 0 : y.frontendWithSymbol;
      if (m.isZero()) return {
        balanceLabel: b,
        tradeInfo: void 0,
        feesInfo: o(c),
        error: void 0,
        ready: !1,
        loading: !1
      };
      if (c === me.BUY) {
        const G = w,
          X = m.plus(G);
        if (h.value.lt(X)) return {
          balanceLabel: b,
          tradeInfo: void 0,
          feesInfo: void 0,
          error: {
            message: T("memepad.jetton.not_enough_error", {
              ticker: "TON"
            }),
            notEnoughtTon: !0
          },
          ready: !1,
          loading: !1
        }
      } else {
        if (y.value.lt(m)) return {
          balanceLabel: b,
          tradeInfo: void 0,
          feesInfo: void 0,
          error: {
            message: T("memepad.jetton.not_enough_error", {
              ticker: A.ticker
            }),
            notEnoughtTon: !1
          },
          ready: !1,
          loading: !1
        };
        const pi = v;
        if (h.value.lt(pi)) return {
          tradeInfo: void 0,
          feesInfo: void 0,
          balanceLabel: b,
          error: {
            message: T("memepad.jetton.not_enough_error", {
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
      getEmptyState: a,
      getImmediateState: d,
      getState: async ({
        operation: c,
        amount: m,
        tonBalance: h,
        jettonBalance: y,
        jetton: A
      }) => {
        const w = d({
          operation: c,
          amount: m,
          tonBalance: h,
          jettonBalance: y,
          jetton: A
        });
        if (w) return w;
        const v = c === me.BUY ? h.frontendWithSymbol : y.frontendWithSymbol;
        if (m.isZero()) return {
          tradeInfo: void 0,
          balanceLabel: v,
          feesInfo: o(c),
          error: void 0,
          ready: !1,
          loading: !1
        };
        const b = await n(c, m);
        if (!j(b)) return b.extra === this.MEMEPAD_ERRORS.TOO_LOW_AMOUNT ? {
          tradeInfo: void 0,
          feesInfo: void 0,
          balanceLabel: v,
          error: {
            message: T("memepad.jetton.too_low_amount_error"),
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
        const G = b.data,
          X = i(c, m, G);
        return {
          tradeInfo: G,
          balanceLabel: v,
          feesInfo: X,
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
          label: `${T("memepad.jetton.fees_network")}: ${C(n)} TON`
        }],
        total: new R(n),
        totalLabel: `${T("memepad.jetton.fees_base")}: ${C(n)} TON`
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
        const a = i.total;
        return n.value.lt(a) ? {
          balanceLabel: o.frontendWithSymbol,
          feesInfo: i,
          error: {
            message: T("memepad.jetton.not_enough_error", {
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
    const e = bs().$webApp.storage.local.get(this.slippageStorageKey);
    if (e === void 0) return;
    const t = Number(e);
    if (!isNaN(t)) return t
  }
  updateSlippageInStorage(e) {
    return bs().$webApp.storage.local.set(this.slippageStorageKey, String(e))
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
class xa extends Ia {
  constructor(t) {
    super();
    p(this, "sdk");
    p(this, "tonApiClient");
    p(this, "partnerAddresses");
    p(this, "FEES", {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: _(J.Constants.CoinBuyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: _(J.Constants.CoinSellGas),
      MEMEPAD_JETTON_LAUNCH_PLATFORM_FEE: _(0n),
      MEMEPAD_JETTON_LAUNCH_NETWORK_FEE: _(J.Constants.CoinDeploymentGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: _(J.Constants.WalletUnlockGas)
    });
    p(this, "getBclData", async () => {
      const t = this.useCached("bclData"),
        s = t.get();
      if (s) return $(s);
      const n = await x(async () => await this.sdk.getMasterData())();
      if (!j(n)) return E(n);
      const o = _(n.data.fullPriceTon),
        i = _(n.data.fullPriceTon).minus(_(n.data.fullPriceTonFees)),
        a = _(n.data.bclSupply),
        d = _(n.data.liqSupply),
        l = a.plus(d);
      this.FEES.MEMEPAD_JETTON_LAUNCH_PLATFORM_FEE = _(n.data.deploymentFee);
      const c = {
        tonForDexWithFees: o,
        tonForDex: i,
        bclSupply: a,
        liqSupply: d,
        maxSupply: l
      };
      return t.set(c), $(c)
    });
    this.partnerAddresses = t, this.tonApiClient = new $o(new So({
      baseUrl: "https://tonapi.io",
      baseApiParams: {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${this.TON_API_TOKEN}`
        }
      }
    })), this.sdk = J.BclSDK.create({
      apiProvider: J.simpleTonapiProvider(this.tonApiClient),
      clientOptions: {
        endpoint: ""
      },
      masterAddress: this.partnerAddresses.masterContractAddress
    })
  }
  getCoinPriceInTons(t) {
    return new R(1).minus(_(t.fees)).div(_(t.coins))
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
class hh extends xa {
  constructor(t) {
    super(t);
    p(this, "getJettonBclData", x(async t => {
      const s = this.getAddress(t),
        o = await this.sdk.openCoin(s).getBclData(),
        i = _(o.totalSupply),
        a = _(o.fullPriceTon).minus(_(o.fullPriceTonFees)),
        d = _(o.tonLiqCollected),
        l = d.div(a).times(100),
        c = _(o.bclSupply),
        m = _(o.liqSupply),
        h = c.minus(i);
      return {
        isReleased: !o.tradingEnabled,
        tonForDex: a,
        tonCollected: d,
        tonCollectedPercent: l,
        priceTon: void 0,
        marketCapTon: void 0,
        bclSupply: c,
        liqSupply: m,
        totalSupply: i,
        availableSupply: h
      }
    }));
    p(this, "getPriceDetails", this.createGetPriceDetails({
      getFees: () => this.fees
    }));
    p(this, "getWaitForCreateStatus", this.createGetWaitForLaunchStatusUntilOk(t => this.getCreateStatus(t)));
    p(this, "unlockStateControls", this.getUnlockStateControls(this.fees));
    p(this, "getUnlockEnabled", x(async t => {
      const s = this.useCachedKeys("unlockEnabled" + t),
        n = s.get(t);
      if (n !== void 0) return n;
      const o = this.getAddress(t),
        i = this.mustGetUserWalletAddress(),
        d = !await (await this.sdk.openCoin(o).getUserWallet(i)).getTransfersEnabled();
      return d === !1 && s.set(t, d), d
    }));
    p(this, "unlockWallet", x(async t => {
      const s = this.getAddress(t),
        n = this.sdk.openCoin(s),
        o = this.mustGetUserWalletAddress(),
        i = await n.getUserWallet(o),
        a = this.getTonConnectSender();
      return await i.sendUnlockWallet(a, {}), (await a.getResult()).hash
    }))
  }
  async getCreateStatus(t) {
    const s = await x(async () => await this.ta.events.getEvent(t))();
    if (!j(s)) return E();
    if (s.data.inProgress) return E();
    const n = s.data.actions.find(a => {
      var d;
      return a.type === "SmartContractExec" && ((d = a.SmartContractExec) == null ? void 0 : d.contract.address.equals(this.partnerAddresses.masterContractAddress))
    });
    return !n || n.status !== "ok" ? $(!1) : s.data.actions.find(a => a.type === "ContractDeploy") ? s.data.actions.find(a => a.status !== "ok") ? $(!1) : $(!0) : $(!1)
  }
  async getUnlockStatus({
    transactionHash: t,
    jettonAddress: s
  }) {
    const n = await x(async () => await this.ta.events.getEvent(t))();
    if (!j(n)) return E();
    if (n.data.inProgress) return E();
    const o = await this.getUnlockEnabled(s);
    if (!j(o)) return E();
    const i = !o.data;
    return $(i)
  }
  async getFirstCoinsForTons(t) {
    const s = this.useCachedKeys("coinsForTons"),
      n = s.get(t);
    if (n) return n;
    const o = await this.sdk.getFirstCoinsForTons(B.toNano(t));
    return s.set(t, o), o
  }
  async getJettonOverview(t) {
    const s = this.useCachedKeys("overview"),
      n = s.get(t);
    if (n) return $(n);
    const o = new R(t),
      i = await this.getBclData();
    if (!j(i)) return E();
    const {
      tonForDex: a,
      tonForDexWithFees: d,
      bclSupply: l,
      maxSupply: c
    } = i.data, m = new R(o).isZero() ? {
      fees: B.toNano(0),
      coins: B.toNano(0)
    } : await this.getFirstCoinsForTons(t), h = this.getCoinPriceInTons(await this.getFirstCoinsForTons(1)), y = h.mul(l), A = new R(_(m.coins)), w = new R(_(m.fees)), v = new R(o).minus(w), b = v.div(a).times(100), G = A.div(l).times(100), X = new R(l).sub(A), K = {
      share: o,
      tonForDexWithFees: d,
      tonForDex: a,
      tonCollected: v,
      tonCollectedPercent: b,
      jettonReceivePercent: G,
      priceTon: h,
      marketCapTon: y,
      availableSupply: X,
      maxSupply: c,
      platformFee: w,
      minReceive: A
    };
    return s.set(t, K), $(K)
  }
  async createJetton(t) {
    const s = this.getMemepadJettonInfoFromForm(t),
      n = await De.saveMemepadJettonInfo(s);
    if (!j(n)) return E();
    const o = new R(t.share),
      i = t.overview.minReceive,
      a = {
        name: s.name,
        description: s.description,
        imageUrl: As(s.iconFileKey),
        symbol: s.ticker,
        share: L(o),
        referral: n.data.referral,
        partnerAddress: n.data.partnerAddress,
        queryId: n.data.queryId,
        minReceive: L(i)
      },
      d = this.mustGetUserWalletAddress(),
      l = {};
    s.socials.length && (l.social_links = JSON.stringify(s.socials.map(A => A.url))), s.bannerFileKey && (l.cover_image = As(s.bannerFileKey));
    const c = {
        authorAddress: d,
        name: a.name,
        description: a.description,
        imageUrl: a.imageUrl,
        symbol: a.symbol,
        referral: J.packReferralConfig({
          partner: this.getAddress(a.partnerAddress),
          platformTag: this.getAddress(a.referral)
        }),
        queryId: B.toNano(a.queryId),
        extraMetadata: l
      },
      m = {
        firstBuy: o.isZero() ? void 0 : {
          tons: a.share,
          minReceive: a.minReceive,
          referral: J.packReferralConfig({
            partner: this.getAddress(a.partnerAddress)
          }),
          buyerAddress: d
        }
      },
      h = this.getTonConnectSender(),
      y = await x(async () => await this.sdk.deployCoin(h, c, m))();
    return j(y) ? $({
      queryId: n.data.queryId,
      launchTransactionHash: (await h.getResult()).hash
    }) : y
  }
  getWaitForUnlockStatus(t) {
    return ve(async s => await this.getUnlockStatus({
      transactionHash: s,
      jettonAddress: t
    }), () => {}, 12e3)
  }
}
class fh extends xa {
  constructor(t, s) {
    super(s);
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
    const s = await x(async () => await this.coin.getCoinsForTons(L(t)))();
    if (!j(s)) return E();
    const n = _(s.data.coins),
      o = this.getMinReceive(n);
    return $({
      minReceive: o,
      maxReceive: n,
      platformFee: _(s.data.fees),
      additionalInfo: {
        partnerAddress: this.partnerAddresses.partnerAddress
      }
    })
  }
  async getSellInfo(t) {
    const s = await x(async () => await this.coin.getTonsForCoins(L(t)))();
    if (!j(s)) return E();
    const n = _(s.data.tons),
      o = this.getMinReceive(n);
    return $({
      minReceive: o,
      maxReceive: n,
      platformFee: _(s.data.fees),
      additionalInfo: {
        partnerAddress: this.partnerAddresses.partnerAddress
      }
    })
  }
  async getTradeTransactionStatus(t) {
    const s = await x(async () => await this.ta.events.getEvent(t.transactionHash))();
    if (!j(s)) return E();
    if (s.data.inProgress) return E();
    const n = s.data.actions.find(o => {
      var i;
      return o.type === "SmartContractExec" && ((i = o.SmartContractExec) == null ? void 0 : i.contract.address.equals(B.Address.parseFriendly(t.jettonAddress).address))
    });
    return !n || n.status !== "ok" || s.data.actions.find(o => o.status !== "ok") ? $(!1) : $(!0)
  }
  async getUserJettonBalance() {
    const t = this.mustGetUserWalletAddress(),
      s = await x(async () => await this.sdk.getUserCoinBalance(this.address, t))();
    return j(s) ? $(_(s.data)) : E()
  }
  async buyJetton(t, s) {
    const n = {
        tons: L(t),
        minReceive: L(s.minReceive),
        referral: J.packReferralConfig({
          partner: this.getAddress(s.additionalInfo.partnerAddress)
        })
      },
      o = this.getTonConnectSender();
    return await x(async () => (await this.coin.sendBuy(o, n), (await o.getResult()).hash))()
  }
  async sellJetton(t, s) {
    const n = this.mustGetUserWalletAddress(),
      o = await this.coin.getUserWallet(n),
      i = {
        amount: L(t),
        minReceive: L(s.minReceive),
        referral: J.packReferralConfig({
          partner: this.getAddress(s.additionalInfo.partnerAddress)
        }),
        queryId: 0n
      },
      a = this.getTonConnectSender();
    return await x(async () => (await o.sendSellCoins(a, i), (await a.getResult()).hash))()
  }
  getWaitForBuyStatus() {
    return ve(this.getTradeTransactionStatus.bind(this), () => {}, 12e3)
  }
  getWaitForSellStatus() {
    return ve(this.getTradeTransactionStatus.bind(this), () => {}, 12e3)
  }
}
const yh = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  gh = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  vh = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function _h(r, e) {
  if (r === "__proto__" || r === "constructor" && e && typeof e == "object" && "prototype" in e) {
    bh(r);
    return
  }
  return e
}

function bh(r) {
  console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`)
}

function Ah(r, e = {}) {
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
  if (!vh.test(r)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return r
  }
  try {
    if (yh.test(r) || gh.test(r)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(r, _h)
    }
    return JSON.parse(r)
  } catch (s) {
    if (e.strict) throw s;
    return r
  }
}
const wh = /#/g,
  Th = /&/g,
  $h = /\//g,
  Sh = /=/g,
  ts = /\+/g,
  kh = /%5e/gi,
  Eh = /%60/gi,
  qh = /%7c/gi,
  Ph = /%20/gi;

function jh(r) {
  return encodeURI("" + r).replace(qh, "|")
}

function Sr(r) {
  return jh(typeof r == "string" ? r : JSON.stringify(r)).replace(ts, "%2B").replace(Ph, "+").replace(wh, "%23").replace(Th, "%26").replace(Eh, "`").replace(kh, "^").replace($h, "%2F")
}

function cr(r) {
  return Sr(r).replace(Sh, "%3D")
}

function Ra(r = "") {
  try {
    return decodeURIComponent("" + r)
  } catch {
    return "" + r
  }
}

function Ch(r) {
  return Ra(r.replace(ts, " "))
}

function Ih(r) {
  return Ra(r.replace(ts, " "))
}

function xh(r = "") {
  const e = {};
  r[0] === "?" && (r = r.slice(1));
  for (const t of r.split("&")) {
    const s = t.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) continue;
    const n = Ch(s[1]);
    if (n === "__proto__" || n === "constructor") continue;
    const o = Ih(s[2] || "");
    e[n] === void 0 ? e[n] = o : Array.isArray(e[n]) ? e[n].push(o) : e[n] = [e[n], o]
  }
  return e
}

function Rh(r, e) {
  return (typeof e == "number" || typeof e == "boolean") && (e = String(e)), e ? Array.isArray(e) ? e.map(t => `${cr(r)}=${Sr(t)}`).join("&") : `${cr(r)}=${Sr(e)}` : cr(r)
}

function Bh(r) {
  return Object.keys(r).filter(e => r[e] !== void 0).map(e => Rh(e, r[e])).filter(Boolean).join("&")
}
const Oh = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  Nh = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  Fh = /^([/\\]\s*){2,}[^/\\]/,
  Dh = /^\.?\//;

function Ba(r, e = {}) {
  return typeof e == "boolean" && (e = {
    acceptRelative: e
  }), e.strict ? Oh.test(r) : Nh.test(r) || (e.acceptRelative ? Fh.test(r) : !1)
}

function Mh(r = "", e) {
  return r.endsWith("/")
}

function Gh(r = "", e) {
  return (Mh(r) ? r.slice(0, -1) : r) || "/"
}

function Lh(r = "", e) {
  return r.endsWith("/") ? r : r + "/"
}

function Uh(r, e) {
  if (Wh(e) || Ba(r)) return r;
  const t = Gh(e);
  return r.startsWith(t) ? r : zh(t, r)
}

function Jh(r, e) {
  const t = Kh(r),
    s = {
      ...xh(t.search),
      ...e
    };
  return t.search = Bh(s), Hh(t)
}

function Wh(r) {
  return !r || r === "/"
}

function Vh(r) {
  return r && r !== "/"
}

function zh(r, ...e) {
  let t = r || "";
  for (const s of e.filter(n => Vh(n)))
    if (t) {
      const n = s.replace(Dh, "");
      t = Lh(t) + n
    } else t = s;
  return t
}
const Oa = Symbol.for("ufo:protocolRelative");

function Kh(r = "", e) {
  const t = r.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (t) {
    const [, m, h = ""] = t;
    return {
      protocol: m.toLowerCase(),
      pathname: h,
      href: m + h,
      auth: "",
      host: "",
      search: "",
      hash: ""
    }
  }
  if (!Ba(r, {
      acceptRelative: !0
    })) return Zn(r);
  const [, s = "", n, o = ""] = r.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, i = "", a = ""] = o.match(/([^#/?]*)(.*)?/) || [], {
    pathname: d,
    search: l,
    hash: c
  } = Zn(a.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: s.toLowerCase(),
    auth: n ? n.slice(0, Math.max(0, n.length - 1)) : "",
    host: i,
    pathname: d,
    search: l,
    hash: c,
    [Oa]: !s
  }
}

function Zn(r = "") {
  const [e = "", t = "", s = ""] = (r.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: e,
    search: t,
    hash: s
  }
}

function Hh(r) {
  const e = r.pathname || "",
    t = r.search ? (r.search.startsWith("?") ? "" : "?") + r.search : "",
    s = r.hash || "",
    n = r.auth ? r.auth + "@" : "",
    o = r.host || "";
  return (r.protocol || r[Oa] ? (r.protocol || "") + "//" : "") + n + o + e + t + s
}
class Yh extends Error {
  constructor(e, t) {
    super(e, t), this.name = "FetchError", t != null && t.cause && !this.cause && (this.cause = t.cause)
  }
}

function Qh(r) {
  var e, t, s, n, o;
  const i = ((e = r.error) == null ? void 0 : e.message) || ((t = r.error) == null ? void 0 : t.toString()) || "",
    a = ((s = r.request) == null ? void 0 : s.method) || ((n = r.options) == null ? void 0 : n.method) || "GET",
    d = ((o = r.request) == null ? void 0 : o.url) || String(r.request) || "/",
    l = `[${a}] ${JSON.stringify(d)}`,
    c = r.response ? `${r.response.status} ${r.response.statusText}` : "<no response>",
    m = `${l}: ${c}${i?` ${i}`:""}`,
    h = new Yh(m, r.error ? {
      cause: r.error
    } : void 0);
  for (const y of ["request", "options", "response"]) Object.defineProperty(h, y, {
    get() {
      return r[y]
    }
  });
  for (const [y, A] of [
      ["data", "_data"],
      ["status", "status"],
      ["statusCode", "status"],
      ["statusText", "statusText"],
      ["statusMessage", "statusText"]
    ]) Object.defineProperty(h, y, {
    get() {
      return r.response && r.response[A]
    }
  });
  return h
}
const Zh = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function Xn(r = "GET") {
  return Zh.has(r.toUpperCase())
}

function Xh(r) {
  if (r === void 0) return !1;
  const e = typeof r;
  return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(r) ? !0 : r.buffer ? !1 : r.constructor && r.constructor.name === "Object" || typeof r.toJSON == "function"
}
const ef = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
  tf = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function rf(r = "") {
  if (!r) return "json";
  const e = r.split(";").shift() || "";
  return tf.test(e) ? "json" : ef.has(e) || e.startsWith("text/") ? "text" : "blob"
}

function sf(r, e, t = globalThis.Headers) {
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
const nf = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  of = new Set([101, 204, 205, 304]);

function Na(r = {}) {
  const {
    fetch: e = globalThis.fetch,
    Headers: t = globalThis.Headers,
    AbortController: s = globalThis.AbortController
  } = r;
  async function n(a) {
    const d = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
    if (a.options.retry !== !1 && !d) {
      let c;
      typeof a.options.retry == "number" ? c = a.options.retry : c = Xn(a.options.method) ? 0 : 1;
      const m = a.response && a.response.status || 500;
      if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(m) : nf.has(m))) {
        const h = a.options.retryDelay || 0;
        return h > 0 && await new Promise(y => setTimeout(y, h)), o(a.request, {
          ...a.options,
          retry: c - 1
        })
      }
    }
    const l = Qh(a);
    throw Error.captureStackTrace && Error.captureStackTrace(l, o), l
  }
  const o = async function(a, d = {}) {
    var l;
    const c = {
      request: a,
      options: sf(d, r.defaults, t),
      response: void 0,
      error: void 0
    };
    c.options.method = (l = c.options.method) == null ? void 0 : l.toUpperCase(), c.options.onRequest && await c.options.onRequest(c), typeof c.request == "string" && (c.options.baseURL && (c.request = Uh(c.request, c.options.baseURL)), (c.options.query || c.options.params) && (c.request = Jh(c.request, {
      ...c.options.params,
      ...c.options.query
    }))), c.options.body && Xn(c.options.method) && (Xh(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body), c.options.headers = new t(c.options.headers || {}), c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half")));
    let m;
    if (!c.options.signal && c.options.timeout) {
      const h = new s;
      m = setTimeout(() => h.abort(), c.options.timeout), c.options.signal = h.signal
    }
    try {
      c.response = await e(c.request, c.options)
    } catch (h) {
      return c.error = h, c.options.onRequestError && await c.options.onRequestError(c), await n(c)
    } finally {
      m && clearTimeout(m)
    }
    if (c.response.body && !of.has(c.response.status) && c.options.method !== "HEAD") {
      const h = (c.options.parseResponse ? "json" : c.options.responseType) || rf(c.response.headers.get("content-type") || "");
      switch (h) {
        case "json": {
          const y = await c.response.text(),
            A = c.options.parseResponse || Ah;
          c.response._data = A(y);
          break
        }
        case "stream": {
          c.response._data = c.response.body;
          break
        }
        default:
          c.response._data = await c.response[h]()
      }
    }
    return c.options.onResponse && await c.options.onResponse(c), !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await c.options.onResponseError(c), await n(c)) : c.response
  }, i = async function(a, d) {
    return (await o(a, d))._data
  };
  return i.raw = o, i.native = (...a) => e(...a), i.create = (a = {}) => Na({
    ...r,
    defaults: {
      ...r.defaults,
      ...a
    }
  }), i
}
const rs = function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof ws < "u") return ws;
    throw new Error("unable to locate global object")
  }(),
  af = rs.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
  cf = rs.Headers,
  df = rs.AbortController,
  lf = Na({
    fetch: af,
    Headers: cf,
    AbortController: df
  }),
  at = r => r.toISOString().split(".")[0];

function uf(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var ss = {
  exports: {}
};
const Fa = r => typeof r == "object" && r !== null,
  Da = Symbol("skip"),
  eo = r => Fa(r) && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  kr = (r, e, t, s = new WeakMap) => {
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
    const o = i => i.map(a => eo(a) ? kr(a, e, t, s) : a);
    if (Array.isArray(r)) return o(r);
    for (const [i, a] of Object.entries(r)) {
      const d = e(i, a, r);
      if (d === Da) continue;
      let [l, c, {
        shouldRecurse: m = !0
      } = {}] = d;
      l !== "__proto__" && (t.deep && m && eo(c) && (c = Array.isArray(c) ? o(c) : kr(c, e, t, s)), n[l] = c)
    }
    return n
  };
ss.exports = (r, e, t) => {
  if (!Fa(r)) throw new TypeError(`Expected an object, got \`${r}\` (${typeof r})`);
  return kr(r, e, t)
};
ss.exports.mapObjectSkip = Da;
var pf = ss.exports;
const to = uf(pf);
class Ma extends Map {
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
const mf = (r, e) => (r = r.replace(new RegExp("((?<![\\p{Uppercase_Letter}\\d])[\\p{Uppercase_Letter}\\d](?![\\p{Uppercase_Letter}\\d]))", "gu"), t => t.toLowerCase()), r.replace(new RegExp("(\\p{Uppercase_Letter}+)(\\p{Uppercase_Letter}\\p{Lowercase_Letter}+)", "gu"), (t, s, n) => s + e + n.toLowerCase()));

function hf(r, {
  separator: e = "_",
  preserveConsecutiveUppercase: t = !1
} = {}) {
  if (!(typeof r == "string" && typeof e == "string")) throw new TypeError("The `text` and `separator` arguments should be of type `string`");
  if (r.length < 2) return t ? r : r.toLowerCase();
  const s = `$1${e}$2`,
    n = r.replace(new RegExp("([\\p{Lowercase_Letter}\\d])(\\p{Uppercase_Letter})", "gu"), s);
  return t ? mf(n, e) : n.replace(new RegExp("(\\p{Uppercase_Letter})(\\p{Uppercase_Letter}\\p{Lowercase_Letter}+)", "gu"), s).toLowerCase()
}
const ff = (r, e) => r.some(t => typeof t == "string" ? t === e : (t.lastIndex = 0, t.test(e))),
  dr = new Ma({
    maxSize: 1e5
  }),
  ro = r => typeof r == "object" && r !== null && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  so = (r, e = {}) => {
    if (!ro(r)) return r;
    const {
      separator: t = "_",
      exclude: s,
      deep: n = !1
    } = e, o = i => (a, d) => {
      if (n && ro(d) && (d = to(d, o())), !(s && ff(s, a))) {
        const l = `${t}${a}`;
        if (dr.has(l)) a = dr.get(l);
        else {
          const c = hf(a, {
            separator: t
          });
          a.length < 100 && dr.set(l, c), a = c
        }
      }
      return [a, d]
    };
    return to(r, o())
  };

function yf(r, e) {
  return Array.isArray(r) ? Object.keys(r).map(t => so(r[t], e)) : so(r, e)
}

function gf(r) {
  return yf(r, {
    deep: !0
  })
}

function no(r) {
  let e = r;
  for (; e.indexOf("/") >= 0;) e = e.replace("/", "_");
  for (; e.indexOf("+") >= 0;) e = e.replace("+", "-");
  for (; e.indexOf("=") >= 0;) e = e.replace("=", "");
  return e
}

function S(r, e) {
  const t = r.replace(/{([a-zA-Z0-9_]+)}/g, (s, n) => {
    var o, i;
    const a = (o = e == null ? void 0 : e.query) == null ? void 0 : o[n];
    if (!a) throw new Error(`Missing value for path parameter "${n}"`);
    return (i = e == null ? void 0 : e.query) == null || delete i[n], no(a)
  });
  if (e != null && e.query) {
    for (const s in e.query) {
      const n = e.query[s];
      typeof n == "string" && (e.query[s] = no(n))
    }
    e.query = gf(e.query)
  }
  return [t, e]
}
const Ga = r => typeof r == "object" && r !== null,
  oo = r => Ga(r) && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  vf = Symbol("mapObjectSkip"),
  Er = (r, e, t, s = new WeakMap) => {
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
    const o = i => i.map(a => oo(a) ? Er(a, e, t, s) : a);
    if (Array.isArray(r)) return o(r);
    for (const [i, a] of Object.entries(r)) {
      const d = e(i, a, r);
      if (d === vf) continue;
      let [l, c, {
        shouldRecurse: m = !0
      } = {}] = d;
      l !== "__proto__" && (t.deep && m && oo(c) && (c = Array.isArray(c) ? o(c) : Er(c, e, t, s)), n[l] = c)
    }
    return n
  };

function ao(r, e, t) {
  if (!Ga(r)) throw new TypeError(`Expected an object, got \`${r}\` (${typeof r})`);
  return Er(r, e, t)
}
const _f = /[\p{Lu}]/u,
  bf = /[\p{Ll}]/u,
  io = /^[\p{Lu}](?![\p{Lu}])/gu,
  La = /([\p{Alpha}\p{N}_]|$)/u,
  ns = /[_.\- ]+/,
  Af = new RegExp("^" + ns.source),
  co = new RegExp(ns.source + La.source, "gu"),
  lo = new RegExp("\\d+" + La.source, "gu"),
  wf = (r, e, t, s) => {
    let n = !1,
      o = !1,
      i = !1,
      a = !1;
    for (let d = 0; d < r.length; d++) {
      const l = r[d];
      a = d > 2 ? r[d - 3] === "-" : !0, n && _f.test(l) ? (r = r.slice(0, d) + "-" + r.slice(d), n = !1, i = o, o = !0, d++) : o && i && bf.test(l) && (!a || s) ? (r = r.slice(0, d - 1) + "-" + r.slice(d - 1), i = o, o = !1, n = !0) : (n = e(l) === l && t(l) !== l, i = o, o = t(l) === l && e(l) !== l)
    }
    return r
  },
  Tf = (r, e) => (io.lastIndex = 0, r.replaceAll(io, t => e(t))),
  $f = (r, e) => (co.lastIndex = 0, lo.lastIndex = 0, r.replaceAll(lo, (t, s, n) => ["_", "-"].includes(r.charAt(n + t.length)) ? t : e(t)).replaceAll(co, (t, s) => e(s)));

function Sf(r, e) {
  if (!(typeof r == "string" || Array.isArray(r))) throw new TypeError("Expected the input to be `string | string[]`");
  if (e = {
      pascalCase: !1,
      preserveConsecutiveUppercase: !1,
      ...e
    }, Array.isArray(r) ? r = r.map(n => n.trim()).filter(n => n.length).join("-") : r = r.trim(), r.length === 0) return "";
  const t = e.locale === !1 ? n => n.toLowerCase() : n => n.toLocaleLowerCase(e.locale),
    s = e.locale === !1 ? n => n.toUpperCase() : n => n.toLocaleUpperCase(e.locale);
  return r.length === 1 ? ns.test(r) ? "" : e.pascalCase ? s(r) : t(r) : (r !== t(r) && (r = wf(r, t, s, e.preserveConsecutiveUppercase)), r = r.replace(Af, ""), r = e.preserveConsecutiveUppercase ? Tf(r, t) : t(r), e.pascalCase && (r = s(r.charAt(0)) + r.slice(1)), $f(r, s))
}
const kf = (r, e) => r.some(t => typeof t == "string" ? t === e : (t.lastIndex = 0, t.test(e))),
  lr = new Ma({
    maxSize: 1e5
  }),
  uo = r => typeof r == "object" && r !== null && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  po = (r, e = {}) => {
    if (!uo(r)) return r;
    const {
      exclude: t,
      pascalCase: s = !1,
      stopPaths: n,
      deep: o = !1,
      preserveConsecutiveUppercase: i = !1
    } = e, a = new Set(n), d = l => (c, m) => {
      if (o && uo(m)) {
        const h = l === void 0 ? c : `${l}.${c}`;
        a.has(h) || (m = ao(m, d(h)))
      }
      if (!(t && kf(t, c))) {
        const h = s ? `${c}_` : c;
        if (lr.has(h)) c = lr.get(h);
        else {
          const y = Sf(c, {
            pascalCase: s,
            locale: !1,
            preserveConsecutiveUppercase: i
          });
          c.length < 100 && lr.set(h, y), c = y
        }
      }
      return [c, m]
    };
    return ao(r, d(void 0))
  };

function Ef(r, e) {
  return Array.isArray(r) ? Object.keys(r).map(t => po(r[t], e)) : po(r, e)
}

function qf(r) {
  return Ef(r, {
    deep: !0
  })
}

function Ua(r) {
  const e = {};
  for (const t in r) {
    const s = r[t];
    e[t] = s === null ? void 0 : s && typeof s == "object" && s.__proto__.constructor === Object ? Ua(s) : s
  }
  return e
}

function k(r) {
  return Ua(qf(r))
}
class Pf {
  constructor(e) {
    const t = new URL((e == null ? void 0 : e.baseURL) ?? (e == null ? void 0 : e.baseUrl) ?? "https://api.ston.fi"),
      s = [...new URLSearchParams(t.search)].reduce((n, [o, i]) => ({
        ...n,
        [o]: i
      }), {});
    this.apiFetch = lf.create({
      baseURL: `${t.origin}${t.pathname}`,
      query: s
    })
  }
  async getAsset(e) {
    return k(await this.apiFetch(...S("/v1/assets/{assetAddress}", {
      method: "GET",
      query: {
        assetAddress: e
      }
    }))).asset
  }
  async getAssets() {
    return k(await this.apiFetch(...S("/v1/assets", {
      method: "GET"
    }))).assetList
  }
  async queryAssets({
    unconditionalAssets: e,
    ...t
  }) {
    return k(await this.apiFetch(...S("/v1/assets/query", {
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
    return k(await this.apiFetch(...S("/v1/assets/search", {
      method: "POST",
      query: {
        ...t,
        unconditionalAsset: e
      }
    }))).assetList
  }
  async getFarm(e) {
    return k(await this.apiFetch(...S("/v1/farms/{farmAddress}", {
      method: "GET",
      query: {
        farmAddress: e
      }
    }))).farm
  }
  async getFarms(e) {
    return k(await this.apiFetch(...S("/v1/farms", {
      method: "GET",
      query: e
    }))).farmList
  }
  async getFarmsByPool(e) {
    return k(await this.apiFetch(...S("/v1/farms_by_pool/{poolAddress}", {
      method: "GET",
      query: {
        poolAddress: e
      }
    }))).farmList
  }
  async getSwapPairs(e) {
    return k(await this.apiFetch(...S("/v1/markets", {
      method: "GET",
      query: e
    }))).pairs
  }
  async getSwapStatus(e) {
    return k(await this.apiFetch(...S("/v1/swap/status", {
      method: "GET",
      query: e
    })))
  }
  async getPool(e) {
    return k(await this.apiFetch(...S("/v1/pools/{poolAddress}", {
      method: "GET",
      query: typeof e == "string" ? {
        poolAddress: e
      } : e
    }))).pool
  }
  async getPools(e) {
    return k(await this.apiFetch(...S("/v1/pools", {
      method: "GET",
      query: e
    }))).poolList
  }
  async queryPools({
    unconditionalAssets: e,
    ...t
  }) {
    return k(await this.apiFetch(...S("/v1/pool/query", {
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
    return k(await this.apiFetch(...S("/v1/swap/simulate", {
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
    return k(await this.apiFetch(...S("/v1/reverse_swap/simulate", {
      method: "POST",
      query: {
        ...t,
        units: e
      }
    })))
  }
  async getJettonWalletAddress(e) {
    return k(await this.apiFetch(...S("/v1/jetton/{jettonAddress}/address", {
      method: "GET",
      query: e
    }))).address
  }
  async getWalletAsset(e) {
    return k(await this.apiFetch(...S("/v1/wallets/{walletAddress}/assets/{assetAddress}", {
      method: "GET",
      query: e
    }))).asset
  }
  async getWalletAssets(e) {
    return k(await this.apiFetch(...S("/v1/wallets/{walletAddress}/assets", {
      method: "GET",
      query: {
        walletAddress: e
      }
    }))).assetList
  }
  async getWalletFarm(e) {
    return k(await this.apiFetch(...S("/v1/wallets/{walletAddress}/farms/{farmAddress}", {
      method: "GET",
      query: e
    }))).farm
  }
  async getWalletFarms(e) {
    return k(await this.apiFetch(...S("/v1/wallets/{walletAddress}/farms", {
      method: "GET",
      query: typeof e == "string" ? {
        walletAddress: e
      } : e
    }))).farmList
  }
  async getWalletPool(e) {
    return k(await this.apiFetch(...S("/v1/wallets/{walletAddress}/pools/{poolAddress}", {
      method: "GET",
      query: e
    }))).pool
  }
  async getWalletPools(e) {
    return k(await this.apiFetch(...S("/v1/wallets/{walletAddress}/pools", {
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
    return k(await this.apiFetch(...S("/v1/wallets/{walletAddress}/operations", {
      method: "GET",
      query: {
        ...s,
        since: at(e),
        until: at(t)
      }
    }))).operations
  }
  async getOperations({
    since: e,
    until: t
  }) {
    return k(await this.apiFetch(...S("/v1/stats/operations", {
      method: "GET",
      query: {
        since: at(e),
        until: at(t)
      }
    }))).operations
  }
  async getRouters(e) {
    return k(await this.apiFetch(...S("/v1/routers", {
      method: "GET",
      query: e
    }))).routerList
  }
  async getRouter(e) {
    return k(await this.apiFetch(...S("/v1/routers/{routerAddress}", {
      method: "GET",
      query: {
        routerAddress: e
      }
    }))).router
  }
}
const D = {
    v1: "v1",
    v2_1: "v2_1",
    v2_2: "v2_2"
  },
  Ja = {
    CPI: "constant_product"
  };

function g(r) {
  return r instanceof f.Address ? r : f.address(r.toString())
}
class Ae {
  constructor(e, t) {
    this.address = g(e)
  }
  static create(e) {
    return new this(e)
  }
}
class I extends Ae {
  async getWalletAddress(e, t) {
    return (await e.get("get_wallet_address", [{
      type: "slice",
      cell: f.beginCell().storeAddress(g(t)).endCell()
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

function Fe(r) {
  const e = f.beginCell();
  return e.storeUint(260734629, 32), e.storeUint(r.queryId, 64), e.storeCoins(BigInt(r.amount)), e.storeAddress(g(r.destination)), e.storeAddress(r.responseDestination ? g(r.responseDestination) : void 0), r.customPayload ? (e.storeBit(!0), e.storeRef(r.customPayload)) : e.storeBit(!1), e.storeCoins(BigInt(r.forwardTonAmount)), r.forwardPayload ? (e.storeBit(!0), e.storeRef(r.forwardPayload)) : e.storeBit(!1), e.endCell()
}
class qe extends Error {
  constructor({
    expected: e,
    received: t
  }) {
    super(`The version of the provided pTON (${t}) does not match the expected version (${e})`)
  }
}
const ge = {
    SWAP: 630424929,
    PROVIDE_LP: 4244235663,
    DIRECT_ADD_LIQUIDITY: 1291331587,
    REFUND_ME: 200537159,
    RESET_GAS: 1117846339,
    COLLECT_FEES: 533429565,
    BURN: 1499400124
  },
  Wa = "EQB3ncyBUTjZUA5EnFKR5_EnOMI9V1tTEAAPaiU71gc4TiUt";
class Va extends Ae {
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
const os = class za extends Ae {
  constructor(e, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...za.gasConstants,
      ...t
    }
  }
  async createRefundBody(e) {
    return f.beginCell().storeUint(ge.REFUND_ME, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
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
    return f.beginCell().storeUint(ge.DIRECT_ADD_LIQUIDITY, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount0)).storeCoins(BigInt(e.amount1)).storeCoins(BigInt(e.minimumLpToMint ?? 1)).endCell()
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
    return f.beginCell().storeUint(ge.RESET_GAS, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
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
os.version = D.v1;
os.gasConstants = {
  refund: f.toNano("0.3"),
  directAddLp: f.toNano("0.3"),
  resetGas: f.toNano("0.3")
};
let Ka = os;
const as = class Ha extends I {
  constructor(e, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...Ha.gasConstants,
      ...t
    }
  }
  async createCollectFeesBody(e) {
    return f.beginCell().storeUint(ge.COLLECT_FEES, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
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
    return f.beginCell().storeUint(ge.BURN, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount)).storeAddress(g(e.responseAddress)).endCell()
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
      cell: f.beginCell().storeAddress(g(t.jettonWallet)).endCell()
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
      cell: f.beginCell().storeAddress(g(t.ownerAddress)).endCell()
    }])).stack.readAddress()
  }
  async getJettonWallet(e, t) {
    const s = await this.getWalletAddress(e, t.ownerAddress);
    return Va.create(s)
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
    return Ka.create(s)
  }
};
as.version = D.v1;
as.gasConstants = {
  collectFees: f.toNano("1.1"),
  burn: f.toNano("0.5")
};
let Ya = as;
const It = class ee extends Ae {
  constructor(e = ee.address, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...ee.gasConstants,
      ...t
    }
  }
  async createSwapBody(e) {
    const t = f.beginCell();
    return t.storeUint(ge.SWAP, 32), t.storeAddress(g(e.askJettonWalletAddress)), t.storeCoins(BigInt(e.minAskAmount)), t.storeAddress(g(e.userWalletAddress)), e.referralAddress ? (t.storeUint(1, 1), t.storeAddress(g(e.referralAddress))) : t.storeUint(0, 1), t.endCell()
  }
  async getSwapJettonToJettonTxParams(e, t) {
    const [s, n] = await Promise.all([e.open(I.create(t.offerJettonAddress)).getWalletAddress(t.userWalletAddress), e.open(I.create(t.askJettonAddress)).getWalletAddress(this.address)]), o = await this.createSwapBody({
      userWalletAddress: t.userWalletAddress,
      minAskAmount: t.minAskAmount,
      askJettonWalletAddress: n,
      referralAddress: t.referralAddress
    }), i = BigInt(t.forwardGasAmount ?? this.gasConstants.swapJettonToJetton.forwardGasAmount), a = Fe({
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
      body: a
    }
  }
  async sendSwapJettonToJetton(e, t, s) {
    const n = await this.getSwapJettonToJettonTxParams(e, s);
    return t.send(n)
  }
  async getSwapJettonToTonTxParams(e, t) {
    if (t.proxyTon.version !== ee.version) throw new qe({
      expected: ee.version,
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
    if (t.proxyTon.version !== ee.version) throw new qe({
      expected: ee.version,
      received: t.proxyTon.version
    });
    const s = await e.open(I.create(t.askJettonAddress)).getWalletAddress(this.address),
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
    return f.beginCell().storeUint(ge.PROVIDE_LP, 32).storeAddress(g(e.routerWalletAddress)).storeCoins(BigInt(e.minLpOut)).endCell()
  }
  async getProvideLiquidityJettonTxParams(e, t) {
    const [s, n] = await Promise.all([e.open(I.create(t.sendTokenAddress)).getWalletAddress(t.userWalletAddress), e.open(I.create(t.otherTokenAddress)).getWalletAddress(this.address)]), o = await this.createProvideLiquidityBody({
      routerWalletAddress: n,
      minLpOut: t.minLpOut
    }), i = BigInt(t.forwardGasAmount ?? this.gasConstants.provideLpJetton.forwardGasAmount), a = Fe({
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
      body: a
    }
  }
  async sendProvideLiquidityJetton(e, t, s) {
    const n = await this.getProvideLiquidityJettonTxParams(e, s);
    return t.send(n)
  }
  async getProvideLiquidityTonTxParams(e, t) {
    if (t.proxyTon.version !== ee.version) throw new qe({
      expected: ee.version,
      received: t.proxyTon.version
    });
    const s = await e.open(I.create(t.otherTokenAddress)).getWalletAddress(this.address),
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
      cell: f.beginCell().storeAddress(g(t.token0)).endCell()
    }, {
      type: "slice",
      cell: f.beginCell().storeAddress(g(t.token1)).endCell()
    }])).stack.readAddress()
  }
  async getPoolAddressByJettonMinters(e, t) {
    const [s, n] = await Promise.all([e.open(I.create(t.token0)).getWalletAddress(this.address), e.open(I.create(t.token1)).getWalletAddress(this.address)]);
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
    return Ya.create(s)
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
It.version = D.v1;
It.address = f.address(Wa);
It.gasConstants = {
  swapJettonToJetton: {
    gasAmount: f.toNano("0.22"),
    forwardGasAmount: f.toNano("0.175")
  },
  swapJettonToTon: {
    gasAmount: f.toNano("0.17"),
    forwardGasAmount: f.toNano("0.125")
  },
  swapTonToJetton: {
    forwardGasAmount: f.toNano("0.185")
  },
  provideLpJetton: {
    gasAmount: f.toNano("0.3"),
    forwardGasAmount: f.toNano("0.24")
  },
  provideLpTon: {
    forwardGasAmount: f.toNano("0.26")
  }
};
let jf = It;
const gt = {
    v1: "v1",
    v2_1: "v2_1"
  },
  Cf = {
    DEPLOY_WALLET: 1824798067
  },
  xt = class ut extends I {
    constructor(e = ut.address, {
      gasConstants: t,
      ...s
    } = {}) {
      super(e, s), this.version = ut.version, this.gasConstants = {
        ...ut.gasConstants,
        ...t
      }
    }
    async getTonTransferTxParams(e, t) {
      const s = await this.getWalletAddress(e, t.destinationAddress),
        n = Fe({
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
      return f.beginCell().storeUint(Cf.DEPLOY_WALLET, 32).storeUint(e.queryId ?? 0, 64).storeAddress(g(e.ownerAddress)).endCell()
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
xt.version = gt.v1;
xt.address = f.address("EQCM3B12QK1e4yZSf8GtBRT0aLMNyEsBc_DhVfRRtOEffLez");
xt.gasConstants = {
  deployWallet: f.toNano("1.05")
};
let is = xt;
const If = {
    Router: jf,
    Pool: Ya,
    LpAccount: Ka,
    pTON: is
  },
  mo = {
    TON_TRANSFER: 32736093,
    DEPLOY_WALLET: 1331643155
  },
  cs = class qr extends is {
    constructor(e, {
      gasConstants: t,
      ...s
    } = {}) {
      super(e, s), this.version = qr.version, this.gasConstants = {
        ...qr.gasConstants,
        ...t
      }
    }
    async createTonTransferBody(e) {
      const t = f.beginCell();
      return t.storeUint(mo.TON_TRANSFER, 32), t.storeUint(e.queryId ?? 0, 64), t.storeCoins(BigInt(e.tonAmount)), t.storeAddress(g(e.refundAddress)), e.forwardPayload && (t.storeBit(!0), t.storeRef(e.forwardPayload)), t.endCell()
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
      return f.beginCell().storeUint(mo.DEPLOY_WALLET, 32).storeUint(e.queryId ?? 0, 64).storeAddress(g(e.ownerAddress)).storeAddress(g(e.excessAddress)).endCell()
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
cs.version = gt.v2_1;
cs.gasConstants = {
  tonTransfer: f.toNano("0.01"),
  deployWallet: f.toNano("0.1")
};
let ds = cs;
const te = {
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
  xf = 15 * 60,
  ls = class Qa extends Ae {
    constructor(e, {
      gasConstants: t,
      ...s
    } = {}) {
      super(e, s), this.gasConstants = {
        ...Qa.gasConstants,
        ...t
      }
    }
    async createRefundBody(e) {
      return f.beginCell().storeUint(te.REFUND_ME, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeMaybeRef(e == null ? void 0 : e.leftMaybePayload).storeMaybeRef(e == null ? void 0 : e.rightMaybePayload).endCell()
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
      return f.beginCell().storeUint(te.DIRECT_ADD_LIQUIDITY, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount0)).storeCoins(BigInt(e.amount1)).storeCoins(BigInt(e.minimumLpToMint ?? 1)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeAddress(g(e.userWalletAddress)).storeMaybeRef(e.dexCustomPayload).storeRef(f.beginCell().storeAddress(g(e.refundAddress ?? e.userWalletAddress)).storeAddress(g(e.excessesAddress ?? e.refundAddress ?? e.userWalletAddress)).endCell()).endCell()
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
      return f.beginCell().storeUint(te.RESET_GAS, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
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
ls.version = D.v2_1;
ls.gasConstants = {
  refund: f.toNano("0.8"),
  directAddLp: f.toNano("0.3"),
  resetGas: f.toNano("0.02")
};
let us = ls;
const ps = class Za extends I {
  constructor(e, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...Za.gasConstants,
      ...t
    }
  }
  async createCollectFeesBody(e) {
    return f.beginCell().storeUint(te.COLLECT_FEES, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
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
    return f.beginCell().storeUint(te.BURN, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount)).storeAddress(null).storeMaybeRef(e.dexCustomPayload).endCell()
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
      cell: f.beginCell().storeAddress(g(t.ownerAddress)).endCell()
    }])).stack.readAddress()
  }
  async getLpAccount(e, t) {
    const s = await this.getLpAccountAddress(e, t);
    return us.create(s)
  }
  async getJettonWallet(e, t) {
    const s = await this.getWalletAddress(e, t.ownerAddress);
    return Va.create(s)
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
ps.version = D.v2_1;
ps.gasConstants = {
  collectFees: f.toNano("0.4"),
  burn: f.toNano("0.8")
};
let Y = ps;
const ms = class Xa extends Ae {
  constructor(e, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...Xa.gasConstants,
      ...t
    }
  }
  async createWithdrawFeeBody(e) {
    return f.beginCell().storeUint(te.WITHDRAW_FEE, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
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
ms.version = D.v2_1;
ms.gasConstants = {
  withdrawFee: f.toNano("0.3")
};
let hs = ms;
const fs = class ei extends Ae {
  constructor(e, {
    gasConstants: t,
    txDeadline: s,
    ...n
  } = {}) {
    if (super(e, n), this.address.equals(f.Address.parse(Wa))) throw Error(["You are trying to create an instance v2.1 Router with a v1 address", "Please use the appropriate class for the v1 Router. Otherwise, all the funds will be permanently lost."].join(`
`));
    this.gasConstants = {
      ...ei.gasConstants,
      ...t
    }, this.txDeadline = s ?? xf
  }
  async createSwapBody(e) {
    if (e.referralValue && (BigInt(e.referralValue) < 0 || BigInt(e.referralValue) > 100)) throw Error("'referralValue' should be in range [0, 100] BPS");
    return f.beginCell().storeUint(te.SWAP, 32).storeAddress(g(e.askJettonWalletAddress)).storeAddress(g(e.refundAddress)).storeAddress(g(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(f.beginCell().storeCoins(BigInt(e.minAskAmount)).storeAddress(g(e.receiverAddress)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).storeCoins(BigInt(e.refundForwardGasAmount ?? 0)).storeMaybeRef(e.refundPayload).storeUint(BigInt(e.referralValue ?? 10), 16).storeAddress(e.referralAddress ? g(e.referralAddress) : null).endCell()).endCell()
  }
  async createCrossSwapBody(e) {
    if (e.referralValue && (BigInt(e.referralValue) < 0 || BigInt(e.referralValue) > 100)) throw Error("'referralValue' should be in range [0, 100] BPS");
    return f.beginCell().storeUint(te.CROSS_SWAP, 32).storeAddress(g(e.askJettonWalletAddress)).storeAddress(g(e.refundAddress)).storeAddress(g(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(f.beginCell().storeCoins(BigInt(e.minAskAmount)).storeAddress(g(e.receiverAddress)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).storeCoins(BigInt(e.refundForwardGasAmount ?? 0)).storeMaybeRef(e.refundPayload).storeUint(BigInt(e.referralValue ?? 10), 16).storeAddress(e.referralAddress ? g(e.referralAddress) : null).endCell()).endCell()
  }
  async getSwapJettonToJettonTxParams(e, t) {
    const s = this.address,
      [n, o] = await Promise.all([e.open(I.create(t.offerJettonAddress)).getWalletAddress(t.userWalletAddress), e.open(I.create(t.askJettonAddress)).getWalletAddress(s)]),
      i = BigInt(t.forwardGasAmount ?? this.gasConstants.swapJettonToJetton.forwardGasAmount),
      a = await this.createSwapBody({
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
      d = Fe({
        queryId: t.queryId ?? 0,
        amount: t.offerAmount,
        destination: s,
        responseDestination: t.userWalletAddress,
        customPayload: t.jettonCustomPayload,
        forwardTonAmount: i,
        forwardPayload: a
      }),
      l = BigInt(t.gasAmount ?? this.gasConstants.swapJettonToJetton.gasAmount);
    return {
      to: n,
      value: l,
      body: d
    }
  }
  async sendSwapJettonToJetton(e, t, s) {
    const n = await this.getSwapJettonToJettonTxParams(e, s);
    return t.send(n)
  }
  async getSwapJettonToTonTxParams(e, t) {
    if (t.proxyTon.version !== Y.version) throw new qe({
      expected: Y.version,
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
    if (t.proxyTon.version !== Y.version) throw new qe({
      expected: Y.version,
      received: t.proxyTon.version
    });
    const s = this.address,
      n = await e.open(I.create(t.askJettonAddress)).getWalletAddress(s),
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
    return f.beginCell().storeUint(te.PROVIDE_LP, 32).storeAddress(g(e.routerWalletAddress)).storeAddress(g(e.refundAddress)).storeAddress(g(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(f.beginCell().storeCoins(BigInt(e.minLpOut)).storeAddress(g(e.receiverAddress)).storeUint(e.bothPositive ? 1 : 0, 1).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).endCell()).endCell()
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
      [n, o] = await Promise.all([e.open(I.create(t.sendTokenAddress)).getWalletAddress(t.userWalletAddress), e.open(I.create(t.otherTokenAddress)).getWalletAddress(s)]),
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
      a = BigInt(t.forwardGasAmount),
      d = Fe({
        queryId: t.queryId ?? 0,
        amount: t.sendAmount,
        destination: s,
        responseDestination: t.userWalletAddress,
        customPayload: t.jettonCustomPayload,
        forwardTonAmount: a,
        forwardPayload: i
      }),
      l = BigInt(t.gasAmount);
    return {
      to: n,
      value: l,
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
    if (t.proxyTon.version !== Y.version) throw new qe({
      expected: Y.version,
      received: t.proxyTon.version
    });
    const s = this.address,
      n = await e.open(I.create(t.otherTokenAddress)).getWalletAddress(s),
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
      cell: f.beginCell().storeAddress(g(t.token0)).endCell()
    }, {
      type: "slice",
      cell: f.beginCell().storeAddress(g(t.token1)).endCell()
    }])).stack.readAddress()
  }
  async getPoolAddressByJettonMinters(e, t) {
    const [s, n] = await Promise.all([e.open(I.create(t.token0)).getWalletAddress(this.address), e.open(I.create(t.token1)).getWalletAddress(this.address)]);
    return await this.getPoolAddress(e, {
      token0: s,
      token1: n
    })
  }
  async getPool(e, t) {
    const s = await this.getPoolAddressByJettonMinters(e, t);
    return Y.create(s)
  }
  async getVaultAddress(e, t) {
    return (await e.get("get_vault_address", [{
      type: "slice",
      cell: f.beginCell().storeAddress(g(t.user)).endCell()
    }, {
      type: "slice",
      cell: f.beginCell().storeAddress(g(t.tokenWallet)).endCell()
    }])).stack.readAddress()
  }
  async getVault(e, t) {
    const s = e.open(I.create(t.tokenMinter)),
      n = await this.getVaultAddress(e, {
        user: t.user,
        tokenWallet: await s.getWalletAddress(this.address)
      });
    return hs.create(n)
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
fs.version = D.v2_1;
fs.gasConstants = {
  swapJettonToJetton: {
    gasAmount: f.toNano("0.3"),
    forwardGasAmount: f.toNano("0.24")
  },
  swapJettonToTon: {
    gasAmount: f.toNano("0.3"),
    forwardGasAmount: f.toNano("0.24")
  },
  swapTonToJetton: {
    forwardGasAmount: f.toNano("0.3")
  },
  provideLpJetton: {
    gasAmount: f.toNano("0.3"),
    forwardGasAmount: f.toNano("0.235")
  },
  provideLpTon: {
    forwardGasAmount: f.toNano("0.3")
  },
  singleSideProvideLpJetton: {
    gasAmount: f.toNano("1"),
    forwardGasAmount: f.toNano("0.8")
  },
  singleSideProvideLpTon: {
    forwardGasAmount: f.toNano("0.8")
  }
};
let ys = fs;
class Rt extends Y {
  async getPoolData(e) {
    return {
      ...(await this.implGetPoolData(e)).commonPoolData
    }
  }
}
Rt.dexType = Ja.CPI;
class gs extends ys {
  async getPool(e, t) {
    const s = await this.getPoolAddressByJettonMinters(e, t);
    return Rt.create(s)
  }
}
gs.dexType = Ja.CPI;
class ti extends ys {}
ti.CPI = gs;
class ri extends Y {}
ri.CPI = Rt;
const Rf = {
  Router: ti,
  Pool: ri,
  LpAccount: us,
  Vault: hs,
  pTON: ds
};
class si extends ys {}
si.version = D.v2_2;
class ni extends gs {}
ni.version = D.v2_2;
class oi extends si {}
oi.CPI = ni;
class ai extends Y {}
ai.version = D.v2_2;
class ii extends Rt {}
ii.version = D.v2_2;
class ci extends ai {}
ci.CPI = ii;
class di extends us {}
di.version = D.v2_2;
class li extends hs {}
li.version = D.v2_2;
const Bf = {
    Router: oi,
    Pool: ci,
    LpAccount: di,
    Vault: li,
    pTON: ds
  },
  Of = {
    [D.v1]: If,
    [D.v2_1]: Rf,
    [D.v2_2]: Bf
  },
  Nf = {
    [gt.v1]: is,
    [gt.v2_1]: ds
  };
class Ff extends Ia {
  constructor(t) {
    super();
    p(this, "TonAddress", "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c");
    p(this, "jettonAddress");
    p(this, "REFERRAL_ADDRESS");
    p(this, "REFERRAL_PERCENT", 1);
    p(this, "stonApiClient", new Pf);
    p(this, "client", new f.TonClient({
      endpoint: "https://toncenter.com/api/v2/jsonRPC"
    }));
    p(this, "FEES", {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: new R(0),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: new R(0)
    });
    p(this, "tradeStateControls", this.getTradeInputStateControls({
      getFees: () => this.fees,
      getSellInfo: this.getSellInfo.bind(this),
      getBuyInfo: this.getBuyInfo.bind(this)
    }));
    p(this, "getWaitForBuyStatus", () => ve(this.getTradeTransactionStatus.bind(this), () => {}, 12e3));
    p(this, "getWaitForSellStatus", () => ve(this.getTradeTransactionStatus.bind(this), () => {}, 12e3));
    this.jettonAddress = t, this.REFERRAL_ADDRESS = ho().public.STONFI_REFERRAL_ADDRESS
  }
  async getRouter(t) {
    const s = this.useCachedKeys("routersInfo"),
      n = s.get(t);
    if (n) return $(n);
    const o = await x(async () => await this.stonApiClient.getRouter(t))();
    if (!j(o)) return o;
    const {
      routerInstance: i
    } = this.getRouterAndProxyTon(o.data);
    return this.FEES.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE = _(i.gasConstants.swapTonToJetton.forwardGasAmount), this.FEES.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE = _(i.gasConstants.swapJettonToTon.forwardGasAmount), s.set(t, o.data), $(o.data)
  }
  getRouterAndProxyTon(t) {
    const s = (() => {
        const d = "v2_2",
          l = ["v2_1", "v2_2"],
          c = `v${t.majorVersion}_${t.minorVersion}`;
        return l.includes(c) ? c : d
      })(),
      n = Of[s].Router,
      o = this.client.open(n.create(t.address)),
      i = (() => {
        const d = "v2_1",
          l = ["v2_1"],
          [c, m] = t.ptonVersion.split("."),
          h = `v${c}_${m}`;
        return l.includes(h) ? h : d
      })(),
      a = Nf[i].create(t.ptonMasterAddress);
    return {
      routerInstance: n,
      router: o,
      proxyTon: a
    }
  }
  async getTradeTransactionStatus(t) {
    const s = await x(async () => await this.ta.events.getEvent(t.transactionHash))();
    if (!j(s)) return E();
    if (s.data.inProgress) return E();
    const n = s.data.actions.find(o => {
      var i, a, d;
      return o.type === "JettonSwap" && ((d = ((i = o.JettonSwap) == null ? void 0 : i.jettonMasterIn) || ((a = o.JettonSwap) == null ? void 0 : a.jettonMasterOut)) == null ? void 0 : d.address.equals(B.Address.parseFriendly(t.jettonAddress).address))
    });
    return !n || n.status !== "ok" || s.data.actions.find(o => o.status !== "ok") ? $(!1) : $(!0)
  }
  async getBuyInfo(t) {
    var l, c, m;
    const s = await x(async () => await this.stonApiClient.simulateSwap({
      askAddress: this.jettonAddress,
      offerAddress: this.TonAddress,
      offerUnits: L(t).toString(),
      slippageTolerance: String(this.slippage / 100),
      dexV2: !0,
      referralAddress: this.REFERRAL_ADDRESS,
      referralFeeBps: this.REFERRAL_PERCENT * 100
    }))();
    if (!j(s)) return ((l = s.extra) == null ? void 0 : l.statusCode) === 400 && ((m = (c = s.extra) == null ? void 0 : c.data) == null ? void 0 : m.startsWith("1012")) ? E(this.MEMEPAD_ERRORS.TOO_LOW_AMOUNT) : E("Failed to get sell info");
    const n = await this.getRouter(s.data.routerAddress);
    if (!j(n)) return E("Failed to get router info");
    const o = _(s.data.minAskUnits),
      i = _(s.data.askUnits),
      a = _(s.data.feeUnits),
      d = a.div(o.plus(a)).times(t);
    return $({
      minReceive: o,
      maxReceive: i,
      platformFee: d,
      additionalInfo: {
        routerInfo: n.data
      }
    })
  }
  async getSellInfo(t) {
    var d, l, c;
    const s = await x(async () => await this.stonApiClient.simulateSwap({
      askAddress: this.TonAddress,
      offerAddress: this.jettonAddress,
      offerUnits: L(t).toString(),
      slippageTolerance: String(this.slippage / 100),
      dexV2: !0,
      referralAddress: this.REFERRAL_ADDRESS,
      referralFeeBps: this.REFERRAL_PERCENT * 100
    }))();
    if (!j(s)) return ((d = s.extra) == null ? void 0 : d.statusCode) === 400 && ((c = (l = s.extra) == null ? void 0 : l.data) == null ? void 0 : c.startsWith("1012")) ? E(this.MEMEPAD_ERRORS.TOO_LOW_AMOUNT) : E("Failed to get sell info");
    const n = await this.getRouter(s.data.routerAddress);
    if (!j(n)) return E("Failed to get router info");
    const o = _(s.data.minAskUnits),
      i = _(s.data.askUnits),
      a = _(s.data.feeUnits);
    return $({
      minReceive: o,
      maxReceive: i,
      platformFee: a,
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
    const t = await x(async () => await this.stonApiClient.getWalletAsset({
      walletAddress: this.mustGetUserWalletAddress().toString(),
      assetAddress: this.jettonAddress
    }))();
    return j(t) ? t.data.balance === void 0 ? $(new R(0)) : $(_(t.data.balance)) : E("Failed to get balance")
  }
  async buyJetton(t, s) {
    const n = this.mustGetUserWalletAddress(),
      {
        router: o,
        proxyTon: i
      } = this.getRouterAndProxyTon(s.additionalInfo.routerInfo),
      a = {
        userWalletAddress: n,
        proxyTon: i,
        offerAmount: L(t),
        askJettonAddress: this.jettonAddress,
        minAskAmount: L(s.minReceive),
        queryId: void 0,
        referralAddress: this.REFERRAL_ADDRESS,
        referralValue: this.REFERRAL_PERCENT * 100
      },
      d = this.getTonConnectSender();
    return await x(async () => (await o.sendSwapTonToJetton(d, a), (await d.getResult()).hash))()
  }
  async sellJetton(t, s) {
    const n = this.mustGetUserWalletAddress(),
      {
        router: o,
        proxyTon: i
      } = this.getRouterAndProxyTon(s.additionalInfo.routerInfo),
      a = {
        userWalletAddress: n,
        offerJettonAddress: this.jettonAddress,
        offerAmount: L(t),
        minAskAmount: L(s.minReceive),
        proxyTon: i,
        queryId: void 0,
        referralAddress: this.REFERRAL_ADDRESS,
        referralValue: this.REFERRAL_PERCENT * 100
      },
      d = this.getTonConnectSender();
    return await x(async () => (await o.sendSwapJettonToTon(d, a), (await d.getResult()).hash))()
  }
}
const Df = () => ({
    getManagementSdk: s => new hh(s),
    getBeforeDexTradingSdk: (s, n) => new fh(s, n),
    getDexTradingSdk: s => new Ff(s)
  }),
  Mf = () => {
    const r = W(() => {}, "$JU3mIPe8CH"),
      e = W(() => yo(async () => Pr(await De.getMemepadEligible()), n => r.value = n.eligible, 2e3), "$P1Vozdfyic");
    return {
      init: async () => await e.value.exec(),
      destroy: () => {
        e.value.destroy()
      },
      isEligible: Pe(() => r.value)
    }
  },
  Gf = () => {
    const r = W("$5jtlbZZRyA"),
      e = W(() => go(), "$JwHI1YwVmt");
    let t;
    const s = fo(),
      n = async () => {
        const d = await e.value.promise,
          l = await De.getJettonRate({
            amount: 1,
            currencyFromId: d
          });
        return l.err ? E() : $(l.data.amount)
      }, o = W(() => wi(n, d => r.value = d, 6e4 * 2), "$VQxqx8b060");
    return {
      init: async () => {
        t = Ti(() => {
          var d;
          return s.wallet.value.status === "connected" && ((d = s.wallet.value.balance) == null ? void 0 : d.tonBalance.currencyId)
        }, d => {
          d && e.value.resolve(d)
        }, {
          immediate: !0
        }), await o.value.exec()
      },
      destroy: () => {
        o.value.destroy(), t == null || t()
      },
      tonUsdRate: Pe(() => r.value)
    }
  },
  ui = () => {
    const r = W("$tC3hjErcTF"),
      e = W(() => go(), "$6Ey6bBtimr"),
      t = W(() => yo(async () => Pr(await De.getMemepadPartnerAddresses()), o => {
        r.value = o, e.value.resolve(o)
      }, 2e3), "$H0u4sBShCB");
    return {
      init: async () => {
        await t.value.exec()
      },
      destroy: () => {
        t.value.destroy()
      },
      partnerAddresses: Pe(() => r.value),
      partnerAddressesResolver: Pe(() => e.value)
    }
  },
  Lf = () => {
    const r = W("$d76e37vW6g"),
      e = W("$wlySA2pCdu"),
      {
        getManagementSdk: t
      } = Df(),
      {
        partnerAddressesResolver: s
      } = ui(),
      n = ve(async () => {
        const a = await s.value.promise;
        return e.value = t(a), Pr(await e.value.getBclData())
      }, a => r.value = a);
    return {
      init: async () => {
        await n.exec()
      },
      destroy: () => {
        n.destroy()
      },
      bclData: Pe(() => r.value),
      memepadManagementSdk: Pe(() => e.value)
    }
  },
  Kf = () => {
    const {
      isEligible: r,
      ...e
    } = Mf(), {
      tonUsdRate: t,
      ...s
    } = Gf(), {
      partnerAddresses: n,
      ...o
    } = ui(), {
      bclData: i,
      memepadManagementSdk: a,
      ...d
    } = Lf();
    return {
      _flow: {
        init: async () => {
          (await e.init()).eligible && (await o.init(), await Promise.all([d.init(), s.init()]))
        },
        destroy: () => {
          e.destroy(), o.destroy(), s.destroy()
        }
      },
      isEligible: r,
      tonUsdRate: t,
      partnerAddresses: n,
      bclData: i,
      memepadManagementSdk: a
    }
  };
export {
  Df as a, Kf as u
};