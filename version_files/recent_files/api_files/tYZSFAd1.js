var wi = Object.defineProperty;
var Ti = (r, e, t) => e in r ? wi(r, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : r[e] = t;
var p = (r, e, t) => Ti(r, typeof e != "symbol" ? e + "" : e, t);
import {
  _ as $i
} from "./Clf4VBun.js";
import {
  d as ki,
  F as Si,
  f as v,
  ai as Wt,
  b0 as Pe,
  bu as Ei,
  a as S,
  c as I,
  b as N,
  m as st,
  W as Ce,
  t as V,
  e as H,
  c5 as Pi,
  g as qe,
  aX as Is,
  k as Ut,
  x as Ci,
  aJ as qi,
  X as ji,
  h as xs,
  N as Ii,
  j as xi,
  c6 as O,
  c7 as Ri,
  c8 as Bi,
  c9 as U,
  ca as Oi,
  cb as se,
  T as Mr,
  b8 as Rs,
  b5 as Ni,
  ao as Fi,
  L as Di,
  bt as x,
  af as F,
  b$ as Mi,
  bH as De,
  K as Gr,
  ba as E,
  cc as Bs,
  cd as Os,
  bM as $,
  bb as k,
  P as Ns,
  bY as Gi,
  br as ve,
  ce as B,
  cf as A,
  aY as Fs,
  cg as K,
  at as Ds
} from "./TkfSaITf.js";
import {
  _ as Li,
  d as f
} from "./CGLuwj_F.js";
const Ji = {
    class: "memepad-jetton-market-info"
  },
  Wi = {
    key: 0,
    class: "top"
  },
  Ui = {
    class: "data"
  },
  Vi = {
    class: "left"
  },
  Ki = {
    key: 0,
    class: "percent"
  },
  zi = {
    key: 1,
    class: "part"
  },
  Hi = {
    key: 0,
    class: "market-details"
  },
  Yi = {
    class: "holders-count"
  },
  Qi = {
    key: 0
  },
  Zi = {
    key: 1
  },
  Xi = {
    class: "transactions-count"
  },
  ec = {
    key: 0
  },
  tc = {
    key: 1
  },
  rc = {
    class: "market-cap"
  },
  sc = {
    class: "label"
  },
  nc = {
    class: "value"
  },
  oc = {
    key: 1
  },
  ac = {
    type: "button",
    class: "memepad-jetton-market-info-tooltip reset"
  },
  ic = {
    class: "text"
  },
  cc = {
    class: "progress"
  },
  dc = {
    key: 1,
    class: "metrics"
  },
  lc = {
    class: "cap"
  },
  uc = {
    class: "title"
  },
  pc = {
    key: 0,
    class: "value"
  },
  mc = {
    class: "list"
  },
  hc = {
    class: "title"
  },
  fc = {
    key: 1,
    class: "value"
  },
  yc = {
    key: 0,
    class: "prefix"
  },
  gc = {
    key: 1,
    class: "postfix"
  },
  _c = ki({
    __name: "MarketInfo",
    props: {
      isReleased: {
        type: Boolean
      },
      percent: {},
      total: {},
      collected: {},
      marketDetails: {}
    },
    setup(r) {
      const e = r,
        t = Si(() => {
          var n;
          if (!((n = e.marketDetails) != null && n.listRows)) return [];
          const s = [];
          if ("holdersCount" in e.marketDetails.listRows) {
            const o = e.marketDetails.listRows.holdersCount,
              a = e.marketDetails.listRows.transactionsCount,
              i = e.marketDetails.listRows.transactionsVolume;
            s.push({
              title: v("memepad.jetton.holders"),
              value: o != null ? Wt(o, {
                accuracy: 0
              }) : o
            }), s.push({
              title: v("memepad.jetton.transactions"),
              value: a != null ? Wt(a, {
                accuracy: 0
              }) : a
            }), s.push({
              title: v("memepad.jetton.trading_volume"),
              value: i != null ? (() => {
                const {
                  value: d,
                  postfix: l
                } = Pe(i);
                return {
                  prefix: "$",
                  value: d,
                  postfix: l
                }
              })() : i
            })
          } else if ("price" in e.marketDetails.listRows) {
            const o = e.marketDetails.listRows.price,
              a = e.marketDetails.listRows.maxSupply,
              i = e.marketDetails.listRows.availableSupply;
            s.push({
              title: v("memepad.jetton.price"),
              value: o != null ? {
                prefix: "$",
                value: Ei(o, 10)
              } : o
            }), s.push({
              title: v("memepad.jetton.max_supply"),
              value: a != null ? Pe(a) : a
            }), s.push({
              title: v("memepad.jetton.available"),
              value: i != null ? Wt(i, {
                accuracy: 0
              }) : i
            })
          }
          return s
        });
      return (s, n) => {
        var d, l;
        const o = $i,
          a = Ii,
          i = Li;
        return S(), I("div", Ji, [s.isReleased ? qe("", !0) : (S(), I("div", Wi, [N("div", Ui, [N("div", Vi, [s.total !== void 0 && s.collected !== void 0 || s.percent ? (S(), I(Ce, {
          key: 1
        }, [s.percent !== void 0 ? (S(), I("span", Ki, V(`${H(Pi)(s.percent)}%`), 1)) : qe("", !0), s.total !== void 0 && s.collected !== void 0 ? (S(), I("span", zi, V(`${("formatTon"in s?s.formatTon:H(Is))(s.collected,2)}/${("formatTon"in s?s.formatTon:H(Is))(s.total,2)} TON`), 1)) : qe("", !0)], 64)) : (S(), st(o, {
          key: 0,
          class: "skeleton"
        }))]), (d = s.marketDetails) != null && d.statistics ? (S(), I("div", Hi, [N("div", Yi, [Ut(a, {
          name: "personal",
          class: "icon"
        }), s.marketDetails.statistics.holdersCount ? (S(), I("span", Qi, V(("formatCount" in s ? s.formatCount : H(Pe))(s.marketDetails.statistics.holdersCount, 0).full), 1)) : (S(), I("span", Zi, "—"))]), N("div", Xi, [Ut(a, {
          name: "transfer",
          class: "icon"
        }), s.marketDetails.statistics.transactionsCount ? (S(), I("span", ec, V(("formatCount" in s ? s.formatCount : H(Pe))(s.marketDetails.statistics.transactionsCount, 0).full), 1)) : (S(), I("span", tc, "—"))]), N("div", rc, [s.marketDetails.statistics.marketCap ? (S(), I(Ce, {
          key: 0
        }, [N("span", sc, V(("t" in s ? s.t : H(v))("memepad.jetton.stats.market_cap")), 1), N("span", nc, V(`$${("formatCount"in s?s.formatCount:H(Pe))(s.marketDetails.statistics.marketCap).full}`), 1)], 64)) : (S(), I("span", oc, "—"))])])) : (S(), st(i, {
          key: 1,
          text: ("t" in s ? s.t : H(v))("memepad.jetton.market_info_tooltip.text"),
          "text-min-width": 155,
          "text-max-width": 155
        }, {
          default: Ci(() => [N("button", ac, [Ut(a, {
            name: "circle-help",
            class: "icon"
          }), N("span", ic, V(("t" in s ? s.t : H(v))("memepad.jetton.market_info_tooltip.label")), 1)])]),
          _: 1
        }, 8, ["text"]))]), N("div", cc, [N("div", {
          class: "line",
          style: qi({
            width: `${s.percent}%`
          })
        }, null, 4)])])), H(t).length ? (S(), I("div", dc, [N("div", lc, [N("div", uc, V(("t" in s ? s.t : H(v))("memepad.jetton.market_cap")), 1), (l = s.marketDetails) != null && l.marketCap ? (S(), I("div", pc, [n[0] || (n[0] = N("span", {
          class: "dollar"
        }, "$", -1)), N("span", null, V(("formatCount" in s ? s.formatCount : H(Pe))(s.marketDetails.marketCap).full), 1)])) : (S(), st(o, {
          key: 1,
          class: "skeleton"
        }))]), N("div", mc, [(S(!0), I(Ce, null, ji(H(t), c => (S(), I("div", {
          key: c.title,
          class: "item"
        }, [N("span", hc, V(c.title), 1), c.value === void 0 ? (S(), st(o, {
          key: 0,
          class: "skeleton"
        })) : (S(), I("span", fc, [typeof c.value == "string" ? (S(), I(Ce, {
          key: 0
        }, [xs(V(c.value), 1)], 64)) : c.value === null ? (S(), I(Ce, {
          key: 1
        }, [xs(" — ")], 64)) : (S(), I(Ce, {
          key: 2
        }, [c.value.prefix ? (S(), I("span", yc, V(c.value.prefix), 1)) : qe("", !0), N("span", null, V(c.value.value), 1), c.value.postfix ? (S(), I("span", gc, V(c.value.postfix), 1)) : qe("", !0)], 64))]))]))), 128))])])) : qe("", !0)])
      }
    }
  }),
  Uy = xi(_c, [
    ["__scopeId", "data-v-09c89e5c"]
  ]);
var Q = {},
  St = {},
  Et = {},
  Pt = {};
Object.defineProperty(Pt, "__esModule", {
  value: !0
});
Pt.normalizeCoin = vc;
Pt.normalizeCoinEvent = bc;
const we = O;

function vc(r) {
  return {
    id: r.id,
    address: we.Address.parse(r.address),
    metadata: r.metadata,
    totalSupply: BigInt(r.totalSupply),
    bclSupply: BigInt(r.bclSupply),
    liqSupply: BigInt(r.liqSupply),
    lastTradeDate: r.lastTradeDate,
    authorAddress: we.Address.parse(r.authorAddress),
    tradingEnabled: r.tradingEnabled,
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral,
    createdAt: r.createdAt,
    tradingCloseFee: BigInt(r.tradingCloseFee),
    routerAddress: we.Address.parse(r.routerAddress)
  }
}

function bc(r) {
  if (r.type === "buy") return {
    type: "buy",
    trader: r.trader === "" ? null : we.Address.parse(r.trader),
    tonValue: BigInt(r.tonValue),
    supplyDelta: BigInt(r.supplyDelta),
    newSupply: BigInt(r.newSupply),
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral
  };
  if (r.type === "sell") return {
    type: "sell",
    trader: r.trader === "" ? null : we.Address.parse(r.trader),
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
    authorAddress: r.authorAddress === "" ? null : we.Address.parse(r.authorAddress),
    tradingEnabled: r.tradingEnabled,
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral,
    createdAt: r.createdAt,
    tradingCloseFee: BigInt(r.tradingCloseFee),
    routerAddress: we.Address.parse(r.routerAddress)
  };
  throw new Error("Unknown BCL event: " + JSON.stringify(r))
}
var Ct = {};
const Ac = Ri(Bi);
Object.defineProperty(Ct, "__esModule", {
  value: !0
});
Ct.OfetchHttpProvider = void 0;
const Ms = Ac;
class wc {
  get(e, t) {
    return (0, Ms.ofetch)(e, {
      query: t.query
    })
  }
  post(e, t) {
    return (0, Ms.ofetch)(e, {
      method: "POST",
      body: JSON.stringify(t)
    })
  }
}
Ct.OfetchHttpProvider = wc;
Object.defineProperty(Et, "__esModule", {
  value: !0
});
Et.BclClient = void 0;
const Gs = O,
  nt = Pt,
  Tc = Ct;
class $c {
  constructor(e) {
    this.fetch = async (t, s) => await this.httpProvider.get(this.endpoint + t, {
      query: s == null ? void 0 : s.query
    }), this.fetchCoins = async t => {
      const s = await this.fetch("/getCoins", {
        query: t ?? {}
      });
      return {
        items: s.items.map(nt.normalizeCoin),
        cursor: s.cursor
      }
    }, this.fetchCoin = async t => {
      let s = await this.fetch("/getCoin/" + t.toString({
        urlSafe: !0
      }));
      return (0, nt.normalizeCoin)(s)
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
          event: (0, nt.normalizeCoinEvent)(o.event),
          coinAddress: Gs.Address.parse(o.coinAddress)
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
          event: (0, nt.normalizeCoinEvent)(n.event),
          coinAddress: Gs.Address.parse(n.coinAddress)
        })),
        cursor: s.cursor
      }
    }, this.endpoint = e.endpoint, this.httpProvider = e.httpProvider ?? new Tc.OfetchHttpProvider
  }
}
Et.BclClient = $c;
var $e = {},
  ke = {};
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.Constants = void 0;
const ot = O;
ke.Constants = {
  CoinDeploymentGas: (0, ot.toNano)("0.05"),
  CoinBuyGas: (0, ot.toNano)("0.05"),
  CoinSellGas: (0, ot.toNano)("0.06"),
  WalletUnlockGas: (0, ot.toNano)("0.05")
};
var me = {};
Object.defineProperty(me, "__esModule", {
  value: !0
});
me.crc32 = Io;
me.crc32str = Ec;
const kc = -306674912;
let At;

function Sc() {
  At = new Int32Array(256);
  for (let r = 0; r < 256; r++) {
    let e = r;
    for (let t = 8; t > 0; --t) e = e & 1 ? e >>> 1 ^ kc : e >>> 1;
    At[r] = e
  }
}

function Io(r) {
  let e = 4294967295;
  At === void 0 && Sc();
  for (let t = 0; t < r.length; ++t) e = At[(e ^ r[t]) & 255] ^ e >>> 8;
  return (e ^ -1) >>> 0
}

function Ec(r) {
  return Io(U.from(r))
}
var Ke = {};
Object.defineProperty(Ke, "__esModule", {
  value: !0
});
Ke.BclWallet = void 0;
const at = O,
  Ls = ke,
  Js = me;
class Lr {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Lr(e)
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
      value: Ls.Constants.CoinSellGas,
      sendMode: at.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, at.beginCell)().storeUint((0, Js.crc32str)("op::sell"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.amount).storeCoins(s.minReceive).storeMaybeRef(s.referral).endCell()
    })
  }
  async sendUnlockWallet(e, t, s) {
    await e.internal(t, {
      value: Ls.Constants.WalletUnlockGas,
      sendMode: at.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, at.beginCell)().storeUint((0, Js.crc32str)("op::unlock_wallet"), 32).storeUint(s.queryId ?? 0, 64).endCell()
    })
  }
  async getTransfersEnabled(e) {
    return (await e.get("get_transfers_enabled", [])).stack.readBoolean()
  }
}
Ke.BclWallet = Lr;
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.BclJetton = void 0;
$e.parseBclEvent = qc;
$e.parseStorage = jc;
const Vt = O,
  Pc = ke,
  yt = me,
  Cc = Ke;

function qc(r) {
  let e = r.beginParse(),
    t = e.loadUint(32);
  if (t === (0, yt.crc32str)("send_liq_log")) return {
    type: "send_liq",
    tonLiq: e.loadCoins(),
    jettonLiq: e.loadCoins()
  };
  if (t === (0, yt.crc32str)("sell_log")) return {
    type: "sell",
    trader: e.loadAddress(),
    tonValue: e.loadCoins(),
    supplyDelta: e.loadCoins(),
    newSupply: e.loadCoins(),
    tonLiqCollected: e.loadCoins(),
    referral: e.loadMaybeRef()
  };
  if (t === (0, yt.crc32str)("buy_log")) return {
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

function jc(r) {
  let e = r.beginParse(),
    t = e.loadCoins(),
    s = e.loadAddress(),
    n = e.loadRef(),
    o = e.loadRef(),
    a = e.loadUint(32),
    i = e.loadUint(32),
    d = e.loadCoins(),
    l = e.loadRef().beginParse(),
    c = l.loadCoins(),
    m = l.loadCoins(),
    h = l.loadAddress(),
    y = l.loadAddress(),
    w = l.loadUint(16),
    T = l.loadUint(16),
    g = l.loadBit(),
    b = l.loadRef(),
    D = l.loadUint(64),
    X = l.loadCoins(),
    z = l.loadRef().beginParse(),
    Jt = z.loadAddress(),
    js = z.loadAddress();
  return {
    admin: s,
    content: n,
    totalSupply: t,
    bclSupply: c,
    liqSupply: m,
    walletCode: o,
    ttl: a,
    lastTradeDate: i,
    tonLiqCollected: d,
    authorAddress: h,
    feeAddress: y,
    tradingFee: {
      numerator: w,
      denominator: T
    },
    tradingEnabled: g,
    referral: b,
    seed: D,
    tradingCloseFee: X,
    routerAddress: Jt,
    routerPtonWalletAddress: js
  }
}
class Jr {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Jr(e)
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
      cell: (0, Vt.beginCell)().storeAddress(t).endCell()
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
    let n = (0, Vt.beginCell)().storeUint((0, yt.crc32str)("op::buy"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.minReceive).storeMaybeRef(s.referral);
    s.buyerAddress && n.storeAddress(s.buyerAddress), await e.internal(t, {
      value: s.tons + Pc.Constants.CoinBuyGas,
      sendMode: Vt.SendMode.PAY_GAS_SEPARATELY,
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
      admin: t.readAddress(),
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
    return e.open(Cc.BclWallet.createFromAddress(s))
  }
}
$e.BclJetton = Jr;
var ze = {},
  he = {},
  qt = {};
Object.defineProperty(qt, "__esModule", {
  value: !0
});
qt.sha256ToBigint = void 0;
const Ic = Oi(),
  xc = r => BigInt("0x" + (0, Ic.createHash)("sha256").update(r).digest().toString("hex"));
qt.sha256ToBigint = xc;
Object.defineProperty(he, "__esModule", {
  value: !0
});
he.flattenSnakeCell = Ro;
he.makeSnakeCell = Wr;
he.encodeOffChainContent = Nc;
he.decodeOffChainContent = Fc;
he.encodeTextSnake = Ae;
he.encodeOnChainContent = Mc;
const Ne = f,
  je = qt,
  xo = 1,
  Rc = 0,
  Bc = 0;

function Ro(r) {
  let e = r,
    t = U.alloc(0);
  for (; e;) {
    const s = e.beginParse(),
      n = s.loadBuffer(s.remainingBits / 8);
    t = U.concat([t, n]), e = e.refs[0]
  }
  return t
}

function Oc(r, e) {
  const t = [];
  for (; r.byteLength > 0;) t.push(r.slice(0, e)), r = r.slice(e);
  return t
}

function Wr(r) {
  const e = Oc(r, 127),
    t = (0, Ne.beginCell)();
  let s = t;
  const n = [];
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (s.storeBuffer(a), e[o + 1]) {
      const i = (0, Ne.beginCell)();
      n.push(i), s = i
    }
  }
  if (n.length > 0) {
    let o = null;
    for (; n.length > 0;) {
      const a = n.pop();
      o && a.storeRef(o), o = a
    }
    t.storeRef(o)
  }
  return t
}

function Nc(r) {
  let e = U.from(r);
  const t = U.from([xo]);
  return e = U.concat([t, e]), Wr(e)
}

function Fc(r) {
  const e = Ro(r),
    t = e[0];
  if (t !== xo) throw new Error(`Unknown content prefix: ${t.toString(16)}`);
  return e.slice(1).toString()
}

function Ae(r) {
  const e = U.from(r),
    t = U.from([Bc]);
  return Wr(U.concat([t, e]))
}

function Dc() {
  return {
    serialize: (r, e) => {
      e.storeRef(r.endCell())
    },
    parse: r => (0, Ne.beginCell)()
  }
}

function Mc(r) {
  const e = Ne.Dictionary.empty(Ne.Dictionary.Keys.BigUint(256), Dc());
  if (r.name && e.set((0, je.sha256ToBigint)("name"), Ae(r.name)), r.description && e.set((0, je.sha256ToBigint)("description"), Ae(r.description)), r.image && e.set((0, je.sha256ToBigint)("image"), Ae(r.image)), r.decimals && e.set((0, je.sha256ToBigint)("decimals"), Ae(r.decimals.toString())), r.symbol && e.set((0, je.sha256ToBigint)("symbol"), Ae(r.symbol)), r.extra)
    for (let t in r.extra) {
      let s = r.extra[t];
      e.set((0, je.sha256ToBigint)(t), Ae(s))
    }
  return (0, Ne.beginCell)().storeUint(Rc, 8).storeDict(e).endCell()
}
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.BclMaster = void 0;
const it = O,
  Ws = ke,
  Us = me,
  Gc = he;
class Ur {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Ur(e)
  }
  async sendDeployCoin(e, t, s, n) {
    let o = (0, Gc.encodeOnChainContent)({
        name: s.name,
        description: s.description,
        image: s.imageUrl,
        symbol: s.symbol,
        decimals: 9,
        extra: s.extraMetadata
      }),
      a = (0, it.beginCell)().storeUint((0, Us.crc32str)("op::deploy_coin"), 32).storeUint(s.queryId ?? 0, 64).storeRef(o).storeAddress(s.authorAddress).storeRef(s.referral ?? (0, it.beginCell)().endCell()),
      i = null;
    if (n != null && n.firstBuy) {
      let c = (0, it.beginCell)().storeUint((0, Us.crc32str)("op::buy"), 32).storeUint(n.firstBuy.queryId ?? 0, 64).storeCoins(n.firstBuy.minReceive).storeMaybeRef(n.firstBuy.referral);
      n.firstBuy.buyerAddress && c.storeAddress(n.firstBuy.buyerAddress), i = c.endCell()
    }
    a.storeMaybeRef(i);
    let d;
    n != null && n.forceDeploymentFee ? d = n.forceDeploymentFee : d = (await this.getMasterData(e)).deploymentFee;
    let l = d + Ws.Constants.CoinDeploymentGas;
    n != null && n.firstBuy && (l += Ws.Constants.CoinBuyGas + n.firstBuy.tons), await e.internal(t, {
      value: l,
      sendMode: it.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: a.endCell()
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
ze.BclMaster = Ur;
Object.defineProperty(St, "__esModule", {
  value: !0
});
St.BclSDK = void 0;
const Lc = Et,
  Jc = $e,
  Kt = ze;
class Vr {
  constructor(e) {
    this.apiProvider = e.apiProvider, this.api = new Lc.BclClient(e.clientOptions), this.masterAddress = e.masterAddress
  }
  openCoin(e) {
    return this.apiProvider.open(Jc.BclJetton.createFromAddress(e))
  }
  async openUserCoinWallet(e, t) {
    return await this.openCoin(e).getUserWallet(t)
  }
  async deployCoin(e, t, s) {
    await this.apiProvider.open(Kt.BclMaster.createFromAddress(this.masterAddress)).sendDeployCoin(e, t, s)
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
    return await this.apiProvider.open(Kt.BclMaster.createFromAddress(this.masterAddress)).getCoinsForTons(e)
  }
  async getMasterData() {
    return await this.apiProvider.open(Kt.BclMaster.createFromAddress(this.masterAddress)).getMasterData()
  }
  open(e) {
    return this.apiProvider.open(e)
  }
  static create(e) {
    return new Vr(e)
  }
}
St.BclSDK = Vr;
var jt = {},
  q = {};
Object.defineProperty(q, "__esModule", {
  value: !0
});
var Bo = q.Api = Oo = q.HttpClient = q.ContentType = q.PoolImplementationType = q.TrustType = q.JettonVerificationType = q.BouncePhaseType = q.ComputeSkipReason = q.AccStatusChange = q.TransactionType = q.AccountStatus = void 0,
  Vs;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(Vs || (q.AccountStatus = Vs = {}));
var Ks;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(Ks || (q.TransactionType = Ks = {}));
var zs;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(zs || (q.AccStatusChange = zs = {}));
var Hs;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(Hs || (q.ComputeSkipReason = Hs = {}));
var Ys;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(Ys || (q.BouncePhaseType = Ys = {}));
var Qs;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(Qs || (q.JettonVerificationType = Qs = {}));
var Zs;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(Zs || (q.TrustType = Zs = {}));
var Xs;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(Xs || (q.PoolImplementationType = Xs = {}));
var le;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(le || (q.ContentType = le = {}));
class Wc {
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
      [le.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
      [le.Text]: e => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
      [le.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? JSON.stringify(n) : `${n}`), t
      }, new FormData),
      [le.UrlEncoded]: e => this.toQueryString(e)
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
      format: a,
      baseUrl: i,
      cancelToken: d,
      ...l
    }) => {
      const c = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        m = this.mergeRequestParams(l, c),
        h = o && this.toQueryString(o),
        y = this.contentFormatters[n || le.Json],
        w = a || m.format;
      return this.customFetch(`${i||this.baseUrl||""}${s}${h?`?${h}`:""}`, {
        ...m,
        headers: {
          ...m.headers || {},
          ...n && n !== le.FormData ? {
            "Content-Type": n
          } : {}
        },
        signal: (d ? this.createAbortSignal(d) : m.signal) || null,
        body: typeof e > "u" || e === null ? null : y(e)
      }).then(async T => {
        const g = T.clone();
        g.data = null, g.error = null;
        const b = w ? await T[w]().then(D => (g.ok ? g.data = D : g.error = D, g)).catch(D => (g.error = D, g)) : g;
        if (d && this.abortControllers.delete(d), !T.ok) throw b;
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
var Oo = q.HttpClient = Wc;
let Uc = class {
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
Bo = q.Api = Uc;
var He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.runGetMethod = Vc;
He.TvmStackRecordToTupleItem = Kr;
He.TupleItemToTonapiString = No;
const wr = O;
async function Vc(r, e, t, s) {
  const n = await r.blockchain.execGetMethodForBlockchainAccount(e.toRawString(), t, {
    args: s == null ? void 0 : s.map(No)
  });
  if (!n.success || n.exit_code !== 0) throw new Error;
  return {
    stack: new wr.TupleReader(n.stack.map(Kr))
  }
}

function Kr(r) {
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
          cell: wr.Cell.fromBase64(r.cell)
        }
      } catch {
        return {
          type: "cell",
          cell: wr.Cell.fromBase64(U.from(r.cell, "hex").toString("base64"))
        }
      }
    case "null":
      return {
        type: "null"
      };
    case "tuple":
      return {
        type: "tuple", items: r.tuple.map(Kr)
      };
    default:
      throw new Error(`Unknown type ${r.type}`)
  }
}

function No(r) {
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
Object.defineProperty(jt, "__esModule", {
  value: !0
});
jt.simpleTonapiProvider = Kc;
jt.createProvider = zr;
const ct = q,
  Je = O,
  en = He;

function Kc(r) {
  return {
    open(e) {
      return (0, Je.openContract)(e, t => zr(r, t))
    }
  }
}

function zr(r, e) {
  return {
    async getState() {
      const t = await r.blockchain.getBlockchainRawAccount(e.address.toRawString());
      let s;
      if (t.status === ct.AccountStatus.Nonexist || t.status === ct.AccountStatus.Uninit) s = {
        type: "uninit"
      };
      else if (t.status === ct.AccountStatus.Active) s = {
        type: "active",
        code: t.code ? U.from(t.code, "hex") : null,
        data: t.data ? U.from(t.data, "hex") : null
      };
      else if (t.status === ct.AccountStatus.Frozen) s = {
        type: "frozen",
        stateHash: U.from(t.frozen_hash, "hex")
      };
      else throw new Error("Unknown state");
      return {
        balance: BigInt(t.balance),
        last: t.last_transaction_hash ? {
          lt: BigInt(t.last_transaction_lt),
          hash: U.from(t.last_transaction_hash, "hex")
        } : null,
        state: s
      }
    },
    async get(t, s) {
      const n = await r.blockchain.execGetMethodForBlockchainAccount(e.address.toRawString(), t, {
        args: s == null ? void 0 : s.map(en.TupleItemToTonapiString)
      });
      if (!n.success || n.exit_code !== 0) throw new Error;
      return {
        stack: new Je.TupleReader(n.stack.map(en.TvmStackRecordToTupleItem))
      }
    },
    async external(t) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    },
    async internal(t, s) {
      let o = !0;
      s.bounce !== null && s.bounce !== void 0 && (o = s.bounce);
      let a;
      typeof s.value == "string" ? a = (0, Je.toNano)(s.value) : a = s.value;
      let i = null;
      typeof s.body == "string" ? i = (0, Je.comment)(s.body) : s.body && (i = s.body), await t.send({
        to: e.address,
        value: a,
        bounce: o,
        sendMode: s.sendMode,
        init: null,
        body: i
      })
    },
    open(t) {
      return (0, Je.openContract)(t, s => zr(r, s))
    },
    async getTransactions(t, s, n, o) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    }
  }
}
var Hr = {},
  Me = {};
Object.defineProperty(Me, "__esModule", {
  value: !0
});
Me.delay = Me.unixtime = void 0;
const zc = () => Math.floor(Date.now() / 1e3);
Me.unixtime = zc;
const Hc = r => new Promise(e => {
  setTimeout(() => e(), r)
});
Me.delay = Hc;
Object.defineProperty(Hr, "__esModule", {
  value: !0
});
Hr.tonConnectSender = Qc;
const dt = O,
  Yc = Me;

function Qc(r) {
  let e;
  const t = [];
  return {
    get address() {
      var n;
      const s = (n = r.account) == null ? void 0 : n.address;
      return s ? dt.Address.parse(s) : void 0
    },
    async send(s) {
      var h;
      const n = (0, Yc.unixtime)() + 600,
        o = s.to.toString({
          urlSafe: !0,
          bounceable: !0
        }),
        a = (h = this.address) == null ? void 0 : h.toRawString(),
        i = s.value.toString();
      let d;
      s.init && (d = (0, dt.beginCell)().store((0, dt.storeStateInit)(s.init)).endCell().toBoc().toString("base64"));
      let l;
      s.body && (l = s.body.toBoc().toString("base64"));
      const c = await r.sendTransaction({
          validUntil: n,
          from: a,
          messages: [{
            address: o,
            amount: i,
            stateInit: d,
            payload: l
          }]
        }),
        m = dt.Cell.fromBase64(c.boc);
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
var Fo = {};
Object.defineProperty(Fo, "__esModule", {
  value: !0
});
var It = {};
Object.defineProperty(It, "__esModule", {
  value: !0
});
It.packReferralConfig = Xc;
It.unpackReferralConfig = ed;
const Zc = f,
  Do = me;

function Xc(r) {
  let e = (0, Zc.beginCell)().storeUint((0, Do.crc32str)("ref_v1"), 32).storeAddress(r.partner);
  if (r.platformTag && e.storeAddress(r.platformTag), r.extraTag) {
    if (!r.platformTag) throw new Error("extraTag should only be set if platformTag is present");
    e.storeAddress(r.extraTag)
  }
  return e.endCell()
}

function ed(r) {
  let e = r.beginParse();
  if (e.loadUint(32) !== (0, Do.crc32str)("ref_v1")) throw new Error("Unknown referral format");
  let s = e.loadAddress(),
    n, o;
  return e.remainingBits > 0 && (n = e.loadAddress()), e.remainingBits > 0 && (o = e.loadAddress()), {
    partner: s,
    platformTag: n,
    extraTag: o
  }
}(function(r) {
  var e = se && se.__createBinding || (Object.create ? function(o, a, i, d) {
      d === void 0 && (d = i);
      var l = Object.getOwnPropertyDescriptor(a, i);
      (!l || ("get" in l ? !a.__esModule : l.writable || l.configurable)) && (l = {
        enumerable: !0,
        get: function() {
          return a[i]
        }
      }), Object.defineProperty(o, d, l)
    } : function(o, a, i, d) {
      d === void 0 && (d = i), o[d] = a[i]
    }),
    t = se && se.__exportStar || function(o, a) {
      for (var i in o) i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && e(a, o, i)
    };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.crc32 = r.crc32str = r.tonConnectSender = void 0, t(St, r), t(jt, r);
  var s = Hr;
  Object.defineProperty(r, "tonConnectSender", {
    enumerable: !0,
    get: function() {
      return s.tonConnectSender
    }
  });
  var n = me;
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
  }), t(Fo, r), t(ze, r), t($e, r), t(Ke, r), t(ke, r), t(It, r)
})(Q);
var j = {},
  Ge = function(r) {
    return r && r.Math === Math && r
  },
  Z = Ge(typeof globalThis == "object" && globalThis) || Ge(typeof window == "object" && window) || Ge(typeof self == "object" && self) || Ge(typeof se == "object" && se) || Ge(typeof se == "object" && se) || function() {
    return this
  }() || Function("return this")(),
  G = function(r) {
    try {
      return !!r()
    } catch {
      return !0
    }
  },
  td = G,
  xt = !td(function() {
    var r = (function() {}).bind();
    return typeof r != "function" || r.hasOwnProperty("prototype")
  }),
  rd = xt,
  Mo = Function.prototype,
  tn = Mo.apply,
  rn = Mo.call,
  Yr = typeof Reflect == "object" && Reflect.apply || (rd ? rn.bind(tn) : function() {
    return rn.apply(tn, arguments)
  }),
  Go = xt,
  Lo = Function.prototype,
  Tr = Lo.call,
  sd = Go && Lo.bind.bind(Tr, Tr),
  W = Go ? sd : function(r) {
    return function() {
      return Tr.apply(r, arguments)
    }
  },
  Jo = W,
  nd = Jo({}.toString),
  od = Jo("".slice),
  fe = function(r) {
    return od(nd(r), 8, -1)
  },
  ad = fe,
  id = W,
  Wo = function(r) {
    if (ad(r) === "Function") return id(r)
  },
  zt = typeof document == "object" && document.all,
  Y = typeof zt > "u" && zt !== void 0 ? function(r) {
    return typeof r == "function" || r === zt
  } : function(r) {
    return typeof r == "function"
  },
  Uo = {},
  cd = G,
  ce = !cd(function() {
    return Object.defineProperty({}, 1, {
      get: function() {
        return 7
      }
    })[1] !== 7
  }),
  dd = xt,
  lt = Function.prototype.call,
  Se = dd ? lt.bind(lt) : function() {
    return lt.apply(lt, arguments)
  },
  Vo = {},
  Ko = {}.propertyIsEnumerable,
  zo = Object.getOwnPropertyDescriptor,
  ld = zo && !Ko.call({
    1: 2
  }, 1);
Vo.f = ld ? function(e) {
  var t = zo(this, e);
  return !!t && t.enumerable
} : Ko;
var Qr = function(r, e) {
    return {
      enumerable: !(r & 1),
      configurable: !(r & 2),
      writable: !(r & 4),
      value: e
    }
  },
  ud = W,
  pd = G,
  md = fe,
  Ht = Object,
  hd = ud("".split),
  fd = pd(function() {
    return !Ht("z").propertyIsEnumerable(0)
  }) ? function(r) {
    return md(r) === "String" ? hd(r, "") : Ht(r)
  } : Ht,
  Ho = function(r) {
    return r == null
  },
  yd = Ho,
  gd = TypeError,
  Rt = function(r) {
    if (yd(r)) throw new gd("Can't call method on " + r);
    return r
  },
  _d = fd,
  vd = Rt,
  Ye = function(r) {
    return _d(vd(r))
  },
  bd = Y,
  ne = function(r) {
    return typeof r == "object" ? r !== null : bd(r)
  },
  Qe = {},
  Yt = Qe,
  Qt = Z,
  Ad = Y,
  sn = function(r) {
    return Ad(r) ? r : void 0
  },
  Ze = function(r, e) {
    return arguments.length < 2 ? sn(Yt[r]) || sn(Qt[r]) : Yt[r] && Yt[r][e] || Qt[r] && Qt[r][e]
  },
  wd = W,
  Td = wd({}.isPrototypeOf),
  $d = Z,
  nn = $d.navigator,
  on = nn && nn.userAgent,
  kd = on ? String(on) : "",
  Yo = Z,
  Zt = kd,
  an = Yo.process,
  cn = Yo.Deno,
  dn = an && an.versions || cn && cn.version,
  ln = dn && dn.v8,
  ee, wt;
ln && (ee = ln.split("."), wt = ee[0] > 0 && ee[0] < 4 ? 1 : +(ee[0] + ee[1]));
!wt && Zt && (ee = Zt.match(/Edge\/(\d+)/), (!ee || ee[1] >= 74) && (ee = Zt.match(/Chrome\/(\d+)/), ee && (wt = +ee[1])));
var Sd = wt,
  un = Sd,
  Ed = G,
  Pd = Z,
  Cd = Pd.String,
  Bt = !!Object.getOwnPropertySymbols && !Ed(function() {
    var r = Symbol("symbol detection");
    return !Cd(r) || !(Object(r) instanceof Symbol) || !Symbol.sham && un && un < 41
  }),
  qd = Bt,
  Qo = qd && !Symbol.sham && typeof Symbol.iterator == "symbol",
  jd = Ze,
  Id = Y,
  xd = Td,
  Rd = Qo,
  Bd = Object,
  Zr = Rd ? function(r) {
    return typeof r == "symbol"
  } : function(r) {
    var e = jd("Symbol");
    return Id(e) && xd(e.prototype, Bd(r))
  },
  Od = String,
  Nd = function(r) {
    try {
      return Od(r)
    } catch {
      return "Object"
    }
  },
  Fd = Y,
  Dd = Nd,
  Md = TypeError,
  Zo = function(r) {
    if (Fd(r)) return r;
    throw new Md(Dd(r) + " is not a function")
  },
  Gd = Zo,
  Ld = Ho,
  Jd = function(r, e) {
    var t = r[e];
    return Ld(t) ? void 0 : Gd(t)
  },
  Xt = Se,
  er = Y,
  tr = ne,
  Wd = TypeError,
  Ud = function(r, e) {
    var t, s;
    if (e === "string" && er(t = r.toString) && !tr(s = Xt(t, r)) || er(t = r.valueOf) && !tr(s = Xt(t, r)) || e !== "string" && er(t = r.toString) && !tr(s = Xt(t, r))) return s;
    throw new Wd("Can't convert object to primitive value")
  },
  Xo = {
    exports: {}
  },
  pn = Z,
  Vd = Object.defineProperty,
  Kd = function(r, e) {
    try {
      Vd(pn, r, {
        value: e,
        configurable: !0,
        writable: !0
      })
    } catch {
      pn[r] = e
    }
    return e
  },
  zd = Z,
  Hd = Kd,
  mn = "__core-js_shared__",
  hn = Xo.exports = zd[mn] || Hd(mn, {});
(hn.versions || (hn.versions = [])).push({
  version: "3.38.1",
  mode: "pure",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var ea = Xo.exports,
  fn = ea,
  ta = function(r, e) {
    return fn[r] || (fn[r] = e || {})
  },
  Yd = Rt,
  Qd = Object,
  Xr = function(r) {
    return Qd(Yd(r))
  },
  Zd = W,
  Xd = Xr,
  el = Zd({}.hasOwnProperty),
  ye = Object.hasOwn || function(e, t) {
    return el(Xd(e), t)
  },
  tl = W,
  rl = 0,
  sl = Math.random(),
  nl = tl(1 .toString),
  Ot = function(r) {
    return "Symbol(" + (r === void 0 ? "" : r) + ")_" + nl(++rl + sl, 36)
  },
  ol = Z,
  al = ta,
  yn = ye,
  il = Ot,
  cl = Bt,
  dl = Qo,
  Oe = ol.Symbol,
  rr = al("wks"),
  ll = dl ? Oe.for || Oe : Oe && Oe.withoutSetter || il,
  es = function(r) {
    return yn(rr, r) || (rr[r] = cl && yn(Oe, r) ? Oe[r] : ll("Symbol." + r)), rr[r]
  },
  ul = Se,
  gn = ne,
  _n = Zr,
  pl = Jd,
  ml = Ud,
  hl = es,
  fl = TypeError,
  yl = hl("toPrimitive"),
  ra = function(r, e) {
    if (!gn(r) || _n(r)) return r;
    var t = pl(r, yl),
      s;
    if (t) {
      if (e === void 0 && (e = "default"), s = ul(t, r, e), !gn(s) || _n(s)) return s;
      throw new fl("Can't convert object to primitive value")
    }
    return e === void 0 && (e = "number"), ml(r, e)
  },
  gl = ra,
  _l = Zr,
  sa = function(r) {
    var e = gl(r, "string");
    return _l(e) ? e : e + ""
  },
  vl = Z,
  vn = ne,
  $r = vl.document,
  bl = vn($r) && vn($r.createElement),
  na = function(r) {
    return bl ? $r.createElement(r) : {}
  },
  Al = ce,
  wl = G,
  Tl = na,
  oa = !Al && !wl(function() {
    return Object.defineProperty(Tl("div"), "a", {
      get: function() {
        return 7
      }
    }).a !== 7
  }),
  $l = ce,
  kl = Se,
  Sl = Vo,
  El = Qr,
  Pl = Ye,
  Cl = sa,
  ql = ye,
  jl = oa,
  bn = Object.getOwnPropertyDescriptor;
Uo.f = $l ? bn : function(e, t) {
  if (e = Pl(e), t = Cl(t), jl) try {
    return bn(e, t)
  } catch {}
  if (ql(e, t)) return El(!kl(Sl.f, e, t), e[t])
};
var Il = G,
  xl = Y,
  Rl = /#|\.prototype\./,
  Xe = function(r, e) {
    var t = Ol[Bl(r)];
    return t === Fl ? !0 : t === Nl ? !1 : xl(e) ? Il(e) : !!e
  },
  Bl = Xe.normalize = function(r) {
    return String(r).replace(Rl, ".").toLowerCase()
  },
  Ol = Xe.data = {},
  Nl = Xe.NATIVE = "N",
  Fl = Xe.POLYFILL = "P",
  Dl = Xe,
  An = Wo,
  Ml = Zo,
  Gl = xt,
  Ll = An(An.bind),
  Jl = function(r, e) {
    return Ml(r), e === void 0 ? r : Gl ? Ll(r, e) : function() {
      return r.apply(e, arguments)
    }
  },
  et = {},
  Wl = ce,
  Ul = G,
  aa = Wl && Ul(function() {
    return Object.defineProperty(function() {}, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42
  }),
  Vl = ne,
  Kl = String,
  zl = TypeError,
  ts = function(r) {
    if (Vl(r)) return r;
    throw new zl(Kl(r) + " is not an object")
  },
  Hl = ce,
  Yl = oa,
  Ql = aa,
  ut = ts,
  wn = sa,
  Zl = TypeError,
  sr = Object.defineProperty,
  Xl = Object.getOwnPropertyDescriptor,
  nr = "enumerable",
  or = "configurable",
  ar = "writable";
et.f = Hl ? Ql ? function(e, t, s) {
  if (ut(e), t = wn(t), ut(s), typeof e == "function" && t === "prototype" && "value" in s && ar in s && !s[ar]) {
    var n = Xl(e, t);
    n && n[ar] && (e[t] = s.value, s = {
      configurable: or in s ? s[or] : n[or],
      enumerable: nr in s ? s[nr] : n[nr],
      writable: !1
    })
  }
  return sr(e, t, s)
} : sr : function(e, t, s) {
  if (ut(e), t = wn(t), ut(s), Yl) try {
    return sr(e, t, s)
  } catch {}
  if ("get" in s || "set" in s) throw new Zl("Accessors not supported");
  return "value" in s && (e[t] = s.value), e
};
var eu = ce,
  tu = et,
  ru = Qr,
  ia = eu ? function(r, e, t) {
    return tu.f(r, e, ru(1, t))
  } : function(r, e, t) {
    return r[e] = t, r
  },
  Le = Z,
  su = Yr,
  nu = Wo,
  ou = Y,
  au = Uo.f,
  iu = Dl,
  Ie = Qe,
  cu = Jl,
  xe = ia,
  Tn = ye,
  du = function(r) {
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
      return su(r, this, arguments)
    };
    return e.prototype = r.prototype, e
  },
  ge = function(r, e) {
    var t = r.target,
      s = r.global,
      n = r.stat,
      o = r.proto,
      a = s ? Le : n ? Le[t] : Le[t] && Le[t].prototype,
      i = s ? Ie : Ie[t] || xe(Ie, t, {})[t],
      d = i.prototype,
      l, c, m, h, y, w, T, g, b;
    for (h in e) l = iu(s ? h : t + (n ? "." : "#") + h, r.forced), c = !l && a && Tn(a, h), w = i[h], c && (r.dontCallGetSet ? (b = au(a, h), T = b && b.value) : T = a[h]), y = c && T ? T : e[h], !(!l && !o && typeof w == typeof y) && (r.bind && c ? g = cu(y, Le) : r.wrap && c ? g = du(y) : o && ou(y) ? g = nu(y) : g = y, (r.sham || y && y.sham || w && w.sham) && xe(g, "sham", !0), xe(i, h, g), o && (m = t + "Prototype", Tn(Ie, m) || xe(Ie, m, {}), xe(Ie[m], h, y), r.real && d && (l || !d[h]) && xe(d, h, y)))
  },
  lu = Math.ceil,
  uu = Math.floor,
  pu = Math.trunc || function(e) {
    var t = +e;
    return (t > 0 ? uu : lu)(t)
  },
  mu = pu,
  rs = function(r) {
    var e = +r;
    return e !== e || e === 0 ? 0 : mu(e)
  },
  hu = rs,
  fu = Math.max,
  yu = Math.min,
  gu = function(r, e) {
    var t = hu(r);
    return t < 0 ? fu(t + e, 0) : yu(t, e)
  },
  _u = rs,
  vu = Math.min,
  ca = function(r) {
    var e = _u(r);
    return e > 0 ? vu(e, 9007199254740991) : 0
  },
  bu = ca,
  da = function(r) {
    return bu(r.length)
  },
  Au = Ye,
  wu = gu,
  Tu = da,
  $n = function(r) {
    return function(e, t, s) {
      var n = Au(e),
        o = Tu(n);
      if (o === 0) return !r && -1;
      var a = wu(s, o),
        i;
      if (r && t !== t) {
        for (; o > a;)
          if (i = n[a++], i !== i) return !0
      } else
        for (; o > a; a++)
          if ((r || a in n) && n[a] === t) return r || a || 0;
      return !r && -1
    }
  },
  $u = {
    includes: $n(!0),
    indexOf: $n(!1)
  },
  Nt = {},
  ku = W,
  ir = ye,
  Su = Ye,
  Eu = $u.indexOf,
  Pu = Nt,
  kn = ku([].push),
  la = function(r, e) {
    var t = Su(r),
      s = 0,
      n = [],
      o;
    for (o in t) !ir(Pu, o) && ir(t, o) && kn(n, o);
    for (; e.length > s;) ir(t, o = e[s++]) && (~Eu(n, o) || kn(n, o));
    return n
  },
  ss = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
  Cu = la,
  qu = ss,
  ua = Object.keys || function(e) {
    return Cu(e, qu)
  },
  ju = ge,
  Iu = Xr,
  pa = ua,
  xu = G,
  Ru = xu(function() {
    pa(1)
  });
ju({
  target: "Object",
  stat: !0,
  forced: Ru
}, {
  keys: function(e) {
    return pa(Iu(e))
  }
});
var Bu = fe,
  ma = Array.isArray || function(e) {
    return Bu(e) === "Array"
  },
  Ou = es,
  Nu = Ou("toStringTag"),
  ha = {};
ha[Nu] = "z";
var Fu = String(ha) === "[object z]",
  Du = Fu,
  Mu = Y,
  gt = fe,
  Gu = es,
  Lu = Gu("toStringTag"),
  Ju = Object,
  Wu = gt(function() {
    return arguments
  }()) === "Arguments",
  Uu = function(r, e) {
    try {
      return r[e]
    } catch {}
  },
  Vu = Du ? gt : function(r) {
    var e, t, s;
    return r === void 0 ? "Undefined" : r === null ? "Null" : typeof(t = Uu(e = Ju(r), Lu)) == "string" ? t : Wu ? gt(e) : (s = gt(e)) === "Object" && Mu(e.callee) ? "Arguments" : s
  },
  Ku = Vu,
  zu = String,
  tt = function(r) {
    if (Ku(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return zu(r)
  },
  Hu = ce,
  Yu = et,
  Qu = Qr,
  fa = function(r, e, t) {
    Hu ? Yu.f(r, e, Qu(0, t)) : r[e] = t
  },
  ns = W,
  Zu = ye,
  pt = SyntaxError,
  Xu = parseInt,
  ep = String.fromCharCode,
  tp = ns("".charAt),
  Sn = ns("".slice),
  En = ns(/./.exec),
  Pn = {
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
  rp = /^[\da-f]{4}$/i,
  sp = /^[\u0000-\u001F]$/,
  ya = function(r, e) {
    for (var t = !0, s = ""; e < r.length;) {
      var n = tp(r, e);
      if (n === "\\") {
        var o = Sn(r, e, e + 2);
        if (Zu(Pn, o)) s += Pn[o], e += 2;
        else if (o === "\\u") {
          e += 2;
          var a = Sn(r, e, e + 4);
          if (!En(rp, a)) throw new pt("Bad Unicode escape at: " + e);
          s += ep(Xu(a, 16)), e += 4
        } else throw new pt('Unknown escape sequence: "' + o + '"')
      } else if (n === '"') {
        t = !1, e++;
        break
      } else {
        if (En(sp, n)) throw new pt("Bad control character in string literal at: " + e);
        s += n, e++
      }
    }
    if (t) throw new pt("Unterminated string at: " + e);
    return {
      value: s,
      end: e
    }
  },
  np = ge,
  op = ce,
  os = Z,
  ap = Ze,
  Ft = W,
  ip = Se,
  ga = Y,
  cp = ne,
  dp = ma,
  lp = ye,
  up = tt,
  Cn = da,
  kr = fa,
  _a = G,
  pp = ya,
  mp = Bt,
  qn = os.JSON,
  hp = os.Number,
  Be = os.SyntaxError,
  as = qn && qn.parse,
  fp = ap("Object", "keys"),
  yp = Object.getOwnPropertyDescriptor,
  M = Ft("".charAt),
  cr = Ft("".slice),
  dr = Ft(/./.exec),
  jn = Ft([].push),
  lr = /^\d$/,
  gp = /^[1-9]$/,
  _p = /^[\d-]$/,
  We = /^[\t\n\r ]$/,
  ur = 0,
  In = 1,
  vp = function(r, e) {
    r = up(r);
    var t = new Er(r, 0),
      s = t.parse(),
      n = s.value,
      o = t.skip(We, s.end);
    if (o < r.length) throw new Be('Unexpected extra character: "' + M(r, o) + '" after the parsed data at: ' + o);
    return ga(e) ? Sr({
      "": n
    }, "", e, s) : n
  },
  Sr = function(r, e, t, s) {
    var n = r[e],
      o = s && n === s.value,
      a = o && typeof s.source == "string" ? {
        source: s.source
      } : {},
      i, d, l, c, m;
    if (cp(n)) {
      var h = dp(n),
        y = o ? s.nodes : h ? [] : {};
      if (h)
        for (i = y.length, l = Cn(n), c = 0; c < l; c++) xn(n, c, Sr(n, "" + c, t, c < i ? y[c] : void 0));
      else
        for (d = fp(n), l = Cn(d), c = 0; c < l; c++) m = d[c], xn(n, m, Sr(n, m, t, lp(y, m) ? y[m] : void 0))
    }
    return ip(t, r, e, n, a)
  },
  xn = function(r, e, t) {
    if (op) {
      var s = yp(r, e);
      if (s && !s.configurable) return
    }
    t === void 0 ? delete r[e] : kr(r, e, t)
  },
  bp = function(r, e, t, s) {
    this.value = r, this.end = e, this.source = t, this.nodes = s
  },
  Er = function(r, e) {
    this.source = r, this.index = e
  };
Er.prototype = {
  fork: function(r) {
    return new Er(this.source, r)
  },
  parse: function() {
    var r = this.source,
      e = this.skip(We, this.index),
      t = this.fork(e),
      s = M(r, e);
    if (dr(_p, s)) return t.number();
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
    throw new Be('Unexpected character: "' + s + '" at: ' + e)
  },
  node: function(r, e, t, s, n) {
    return new bp(e, s, r ? null : cr(this.source, t, s), n)
  },
  object: function() {
    for (var r = this.source, e = this.index + 1, t = !1, s = {}, n = {}; e < r.length;) {
      if (e = this.until(['"', "}"], e), M(r, e) === "}" && !t) {
        e++;
        break
      }
      var o = this.fork(e).string(),
        a = o.value;
      e = o.end, e = this.until([":"], e) + 1, e = this.skip(We, e), o = this.fork(e).parse(), kr(n, a, o), kr(s, a, o.value), e = this.until([",", "}"], o.end);
      var i = M(r, e);
      if (i === ",") t = !0, e++;
      else if (i === "}") {
        e++;
        break
      }
    }
    return this.node(In, s, this.index, e, n)
  },
  array: function() {
    for (var r = this.source, e = this.index + 1, t = !1, s = [], n = []; e < r.length;) {
      if (e = this.skip(We, e), M(r, e) === "]" && !t) {
        e++;
        break
      }
      var o = this.fork(e).parse();
      if (jn(n, o), jn(s, o.value), e = this.until([",", "]"], o.end), M(r, e) === ",") t = !0, e++;
      else if (M(r, e) === "]") {
        e++;
        break
      }
    }
    return this.node(In, s, this.index, e, n)
  },
  string: function() {
    var r = this.index,
      e = pp(this.source, this.index + 1);
    return this.node(ur, e.value, r, e.end)
  },
  number: function() {
    var r = this.source,
      e = this.index,
      t = e;
    if (M(r, t) === "-" && t++, M(r, t) === "0") t++;
    else if (dr(gp, M(r, t))) t = this.skip(lr, t + 1);
    else throw new Be("Failed to parse number at: " + t);
    if (M(r, t) === "." && (t = this.skip(lr, t + 1)), M(r, t) === "e" || M(r, t) === "E") {
      t++, (M(r, t) === "+" || M(r, t) === "-") && t++;
      var s = t;
      if (t = this.skip(lr, t), s === t) throw new Be("Failed to parse number's exponent value at: " + t)
    }
    return this.node(ur, hp(cr(r, e, t)), e, t)
  },
  keyword: function(r) {
    var e = "" + r,
      t = this.index,
      s = t + e.length;
    if (cr(this.source, t, s) !== e) throw new Be("Failed to parse value at: " + t);
    return this.node(ur, r, t, s)
  },
  skip: function(r, e) {
    for (var t = this.source; e < t.length && dr(r, M(t, e)); e++);
    return e
  },
  until: function(r, e) {
    e = this.skip(We, e);
    for (var t = M(this.source, e), s = 0; s < r.length; s++)
      if (r[s] === t) return e;
    throw new Be('Unexpected character: "' + t + '" at: ' + e)
  }
};
var Ap = _a(function() {
    var r = "9007199254740993",
      e;
    return as(r, function(t, s, n) {
      e = n.source
    }), e !== r
  }),
  wp = mp && !_a(function() {
    return 1 / as("-0 	") !== -1 / 0
  });
np({
  target: "JSON",
  stat: !0,
  forced: Ap
}, {
  parse: function(e, t) {
    return wp && !ga(t) ? as(e) : vp(e, t)
  }
});
var Tp = Qe,
  $p = Tp.JSON.parse,
  va = {},
  kp = ce,
  Sp = aa,
  Ep = et,
  Pp = ts,
  Cp = Ye,
  qp = ua;
va.f = kp && !Sp ? Object.defineProperties : function(e, t) {
  Pp(e);
  for (var s = Cp(t), n = qp(t), o = n.length, a = 0, i; o > a;) Ep.f(e, i = n[a++], s[i]);
  return e
};
var jp = Ze,
  Ip = jp("document", "documentElement"),
  xp = ta,
  Rp = Ot,
  Rn = xp("keys"),
  ba = function(r) {
    return Rn[r] || (Rn[r] = Rp(r))
  },
  Bp = ts,
  Op = va,
  Bn = ss,
  Np = Nt,
  Fp = Ip,
  Dp = na,
  Mp = ba,
  On = ">",
  Nn = "<",
  Pr = "prototype",
  Cr = "script",
  Aa = Mp("IE_PROTO"),
  pr = function() {},
  wa = function(r) {
    return Nn + Cr + On + r + Nn + "/" + Cr + On
  },
  Fn = function(r) {
    r.write(wa("")), r.close();
    var e = r.parentWindow.Object;
    return r = null, e
  },
  Gp = function() {
    var r = Dp("iframe"),
      e = "java" + Cr + ":",
      t;
    return r.style.display = "none", Fp.appendChild(r), r.src = String(e), t = r.contentWindow.document, t.open(), t.write(wa("document.F=Object")), t.close(), t.F
  },
  mt, _t = function() {
    try {
      mt = new ActiveXObject("htmlfile")
    } catch {}
    _t = typeof document < "u" ? document.domain && mt ? Fn(mt) : Gp() : Fn(mt);
    for (var r = Bn.length; r--;) delete _t[Pr][Bn[r]];
    return _t()
  };
Np[Aa] = !0;
var Lp = Object.create || function(e, t) {
    var s;
    return e !== null ? (pr[Pr] = Bp(e), s = new pr, pr[Pr] = null, s[Aa] = e) : s = _t(), t === void 0 ? s : Op.f(s, t)
  },
  Jp = ge,
  Wp = ce,
  Up = Lp;
Jp({
  target: "Object",
  stat: !0,
  sham: !Wp
}, {
  create: Up
});
var Vp = G,
  is = !Vp(function() {
    return Object.isExtensible(Object.preventExtensions({}))
  }),
  Ta = {
    exports: {}
  },
  cs = {},
  Kp = la,
  zp = ss,
  Hp = zp.concat("length", "prototype");
cs.f = Object.getOwnPropertyNames || function(e) {
  return Kp(e, Hp)
};
var $a = {},
  Yp = W,
  ka = Yp([].slice),
  Qp = fe,
  Zp = Ye,
  Sa = cs.f,
  Xp = ka,
  Ea = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
  em = function(r) {
    try {
      return Sa(r)
    } catch {
      return Xp(Ea)
    }
  };
$a.f = function(e) {
  return Ea && Qp(e) === "Window" ? em(e) : Sa(Zp(e))
};
var tm = G,
  rm = tm(function() {
    if (typeof ArrayBuffer == "function") {
      var r = new ArrayBuffer(8);
      Object.isExtensible(r) && Object.defineProperty(r, "a", {
        value: 8
      })
    }
  }),
  sm = G,
  nm = ne,
  om = fe,
  Dn = rm,
  vt = Object.isExtensible,
  am = sm(function() {
    vt(1)
  }),
  im = am || Dn ? function(e) {
    return !nm(e) || Dn && om(e) === "ArrayBuffer" ? !1 : vt ? vt(e) : !0
  } : vt,
  cm = ge,
  dm = W,
  lm = Nt,
  um = ne,
  ds = ye,
  pm = et.f,
  Mn = cs,
  mm = $a,
  ls = im,
  hm = Ot,
  fm = is,
  Pa = !1,
  ie = hm("meta"),
  ym = 0,
  us = function(r) {
    pm(r, ie, {
      value: {
        objectID: "O" + ym++,
        weakData: {}
      }
    })
  },
  gm = function(r, e) {
    if (!um(r)) return typeof r == "symbol" ? r : (typeof r == "string" ? "S" : "P") + r;
    if (!ds(r, ie)) {
      if (!ls(r)) return "F";
      if (!e) return "E";
      us(r)
    }
    return r[ie].objectID
  },
  _m = function(r, e) {
    if (!ds(r, ie)) {
      if (!ls(r)) return !0;
      if (!e) return !1;
      us(r)
    }
    return r[ie].weakData
  },
  vm = function(r) {
    return fm && Pa && ls(r) && !ds(r, ie) && us(r), r
  },
  bm = function() {
    Am.enable = function() {}, Pa = !0;
    var r = Mn.f,
      e = dm([].splice),
      t = {};
    t[ie] = 1, r(t).length && (Mn.f = function(s) {
      for (var n = r(s), o = 0, a = n.length; o < a; o++)
        if (n[o] === ie) {
          e(n, o, 1);
          break
        } return n
    }, cm({
      target: "Object",
      stat: !0,
      forced: !0
    }, {
      getOwnPropertyNames: mm.f
    }))
  },
  Am = Ta.exports = {
    enable: bm,
    fastKey: gm,
    getWeakData: _m,
    onFreeze: vm
  };
lm[ie] = !0;
var wm = Ta.exports,
  Tm = ge,
  $m = is,
  km = G,
  Sm = ne,
  Em = wm.onFreeze,
  qr = Object.freeze,
  Pm = km(function() {
    qr(1)
  });
Tm({
  target: "Object",
  stat: !0,
  forced: Pm,
  sham: !$m
}, {
  freeze: function(e) {
    return qr && Sm(e) ? qr(Em(e)) : e
  }
});
var Cm = G,
  qm = !Cm(function() {
    var r = "9007199254740993",
      e = JSON.rawJSON(r);
    return !JSON.isRawJSON(e) || JSON.stringify(e) !== r
  }),
  jm = Z,
  Im = Y,
  Gn = jm.WeakMap,
  xm = Im(Gn) && /native code/.test(String(Gn)),
  Rm = xm,
  Ca = Z,
  Bm = ne,
  Om = ia,
  mr = ye,
  hr = ea,
  Nm = ba,
  Fm = Nt,
  Ln = "Object already initialized",
  jr = Ca.TypeError,
  Dm = Ca.WeakMap,
  Tt, Ue, $t, Mm = function(r) {
    return $t(r) ? Ue(r) : Tt(r, {})
  },
  Gm = function(r) {
    return function(e) {
      var t;
      if (!Bm(e) || (t = Ue(e)).type !== r) throw new jr("Incompatible receiver, " + r + " required");
      return t
    }
  };
if (Rm || hr.state) {
  var te = hr.state || (hr.state = new Dm);
  te.get = te.get, te.has = te.has, te.set = te.set, Tt = function(r, e) {
    if (te.has(r)) throw new jr(Ln);
    return e.facade = r, te.set(r, e), e
  }, Ue = function(r) {
    return te.get(r) || {}
  }, $t = function(r) {
    return te.has(r)
  }
} else {
  var Re = Nm("state");
  Fm[Re] = !0, Tt = function(r, e) {
    if (mr(r, Re)) throw new jr(Ln);
    return e.facade = r, Om(r, Re, e), e
  }, Ue = function(r) {
    return mr(r, Re) ? r[Re] : {}
  }, $t = function(r) {
    return mr(r, Re)
  }
}
var qa = {
    set: Tt,
    get: Ue,
    has: $t,
    enforce: Mm,
    getterFor: Gm
  },
  Lm = ne,
  Jm = qa.get,
  Wm = function(e) {
    if (!Lm(e)) return !1;
    var t = Jm(e);
    return !!t && t.type === "RawJSON"
  },
  Um = W,
  Jn = ma,
  Vm = Y,
  Wn = fe,
  Km = tt,
  Un = Um([].push),
  ja = function(r) {
    if (Vm(r)) return r;
    if (Jn(r)) {
      for (var e = r.length, t = [], s = 0; s < e; s++) {
        var n = r[s];
        typeof n == "string" ? Un(t, n) : (typeof n == "number" || Wn(n) === "Number" || Wn(n) === "String") && Un(t, Km(n))
      }
      var o = t.length,
        a = !0;
      return function(i, d) {
        if (a) return a = !1, d;
        if (Jn(this)) return d;
        for (var l = 0; l < o; l++)
          if (t[l] === i) return d
      }
    }
  },
  Ia = ge,
  zm = is,
  xa = qm,
  Dt = Ze,
  Hm = Se,
  ps = W,
  Ym = Y,
  Qm = Wm,
  Zm = tt,
  Xm = fa,
  eh = ya,
  th = ja,
  rh = Ot,
  sh = qa.set,
  nh = String,
  Vn = SyntaxError,
  oh = Dt("JSON", "parse"),
  Kn = Dt("JSON", "stringify"),
  ah = Dt("Object", "create"),
  ih = Dt("Object", "freeze"),
  Ir = ps("".charAt),
  fr = ps("".slice),
  ch = ps([].push),
  xr = rh(),
  zn = xr.length,
  Hn = "Unacceptable as raw JSON",
  Yn = function(r) {
    return r === " " || r === "	" || r === `
` || r === "\r"
  };
Ia({
  target: "JSON",
  stat: !0,
  forced: !xa
}, {
  rawJSON: function(e) {
    var t = Zm(e);
    if (t === "" || Yn(Ir(t, 0)) || Yn(Ir(t, t.length - 1))) throw new Vn(Hn);
    var s = oh(t);
    if (typeof s == "object" && s !== null) throw new Vn(Hn);
    var n = ah(null);
    return sh(n, {
      type: "RawJSON"
    }), Xm(n, "rawJSON", t), zm ? ih(n) : n
  }
});
Kn && Ia({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: !xa
}, {
  stringify: function(e, t, s) {
    var n = th(t),
      o = [],
      a = Kn(e, function(y, w) {
        var T = Ym(n) ? Hm(n, this, nh(y), w) : w;
        return Qm(T) ? xr + (ch(o, T.rawJSON) - 1) : T
      }, s);
    if (typeof a != "string") return a;
    for (var i = "", d = a.length, l = 0; l < d; l++) {
      var c = Ir(a, l);
      if (c === '"') {
        var m = eh(a, ++l).end - 1,
          h = fr(a, l, m);
        i += fr(h, 0, zn) === xr ? o[fr(h, zn)] : '"' + h + '"', l = m
      } else i += c
    }
    return i
  }
});
var dh = Qe,
  lh = dh.JSON.rawJSON,
  uh = rs,
  ph = tt,
  mh = Rt,
  hh = RangeError,
  fh = function(e) {
    var t = ph(mh(this)),
      s = "",
      n = uh(e);
    if (n < 0 || n === 1 / 0) throw new hh("Wrong number of repetitions");
    for (; n > 0;
      (n >>>= 1) && (t += t)) n & 1 && (s += t);
    return s
  },
  Ra = W,
  yh = ca,
  Qn = tt,
  gh = fh,
  _h = Rt,
  vh = Ra(gh),
  bh = Ra("".slice),
  Ah = Math.ceil,
  Zn = function(r) {
    return function(e, t, s) {
      var n = Qn(_h(e)),
        o = yh(t),
        a = n.length,
        i = s === void 0 ? " " : Qn(s),
        d, l;
      return o <= a || i === "" ? n : (d = o - a, l = vh(i, Ah(d / i.length)), l.length > d && (l = bh(l, 0, d)), r ? n + l : l + n)
    }
  },
  wh = {
    start: Zn(!1),
    end: Zn(!0)
  },
  _e = W,
  Xn = G,
  be = wh.start,
  Th = RangeError,
  $h = isFinite,
  kh = Math.abs,
  de = Date.prototype,
  yr = de.toISOString,
  Sh = _e(de.getTime),
  Eh = _e(de.getUTCDate),
  Ph = _e(de.getUTCFullYear),
  Ch = _e(de.getUTCHours),
  qh = _e(de.getUTCMilliseconds),
  jh = _e(de.getUTCMinutes),
  Ih = _e(de.getUTCMonth),
  xh = _e(de.getUTCSeconds),
  Rh = Xn(function() {
    return yr.call(new Date(-5e13 - 1)) !== "0385-07-25T07:06:39.999Z"
  }) || !Xn(function() {
    yr.call(new Date(NaN))
  }) ? function() {
    if (!$h(Sh(this))) throw new Th("Invalid time value");
    var e = this,
      t = Ph(e),
      s = qh(e),
      n = t < 0 ? "-" : t > 9999 ? "+" : "";
    return n + be(kh(t), n ? 6 : 4, 0) + "-" + be(Ih(e) + 1, 2, 0) + "-" + be(Eh(e), 2, 0) + "T" + be(Ch(e), 2, 0) + ":" + be(jh(e), 2, 0) + ":" + be(xh(e), 2, 0) + "." + be(s, 3, 0) + "Z"
  } : yr,
  Bh = ge,
  Ba = Se,
  Oh = Xr,
  Nh = ra,
  Fh = Rh,
  Dh = fe,
  Mh = G,
  Gh = Mh(function() {
    return new Date(NaN).toJSON() !== null || Ba(Date.prototype.toJSON, {
      toISOString: function() {
        return 1
      }
    }) !== 1
  });
Bh({
  target: "Date",
  proto: !0,
  forced: Gh
}, {
  toJSON: function(e) {
    var t = Oh(this),
      s = Nh(t, "number");
    return typeof s == "number" && !isFinite(s) ? null : !("toISOString" in t) && Dh(t) === "Date" ? Ba(Fh, t) : t.toISOString()
  }
});
var Lh = ge,
  Oa = Ze,
  Na = Yr,
  Jh = Se,
  rt = W,
  Fa = G,
  eo = Y,
  to = Zr,
  Da = ka,
  Wh = ja,
  Uh = Bt,
  Vh = String,
  pe = Oa("JSON", "stringify"),
  ht = rt(/./.exec),
  ro = rt("".charAt),
  Kh = rt("".charCodeAt),
  zh = rt("".replace),
  Hh = rt(1 .toString),
  Yh = /[\uD800-\uDFFF]/g,
  so = /^[\uD800-\uDBFF]$/,
  no = /^[\uDC00-\uDFFF]$/,
  oo = !Uh || Fa(function() {
    var r = Oa("Symbol")("stringify detection");
    return pe([r]) !== "[null]" || pe({
      a: r
    }) !== "{}" || pe(Object(r)) !== "{}"
  }),
  ao = Fa(function() {
    return pe("\uDF06\uD834") !== '"\\udf06\\ud834"' || pe("\uDEAD") !== '"\\udead"'
  }),
  Qh = function(r, e) {
    var t = Da(arguments),
      s = Wh(e);
    if (!(!eo(s) && (r === void 0 || to(r)))) return t[1] = function(n, o) {
      if (eo(s) && (o = Jh(s, this, Vh(n), o)), !to(o)) return o
    }, Na(pe, null, t)
  },
  Zh = function(r, e, t) {
    var s = ro(t, e - 1),
      n = ro(t, e + 1);
    return ht(so, r) && !ht(no, n) || ht(no, r) && !ht(so, s) ? "\\u" + Hh(Kh(r, 0), 16) : r
  };
pe && Lh({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: oo || ao
}, {
  stringify: function(e, t, s) {
    var n = Da(arguments),
      o = Na(oo ? Qh : pe, null, n);
    return ao && typeof o == "string" ? zh(o, Yh, Zh) : o
  }
});
var Rr = Qe,
  Xh = Yr;
Rr.JSON || (Rr.JSON = {
  stringify: JSON.stringify
});
var ef = function(e, t, s) {
    return Xh(Rr.JSON.stringify, null, arguments)
  },
  tf = ef,
  rf = tf,
  sf = rf,
  nf = sf,
  ms = se && se.__importDefault || function(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  };
Object.defineProperty(j, "__esModule", {
  value: !0
});
var Ma = j.Api = Ga = j.TonApiClient = j.ContentType = j.PoolImplementationType = j.TrustType = j.JettonVerificationType = j.BouncePhaseType = j.ComputeSkipReason = j.AccStatusChange = j.TransactionType = j.AccountStatus = void 0,
  io;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(io || (j.AccountStatus = io = {}));
var co;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(co || (j.TransactionType = co = {}));
var lo;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(lo || (j.AccStatusChange = lo = {}));
var uo;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(uo || (j.ComputeSkipReason = uo = {}));
var po;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(po || (j.BouncePhaseType = po = {}));
var mo;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(mo || (j.JettonVerificationType = mo = {}));
var ho;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(ho || (j.TrustType = ho = {}));
var fo;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(fo || (j.PoolImplementationType = fo = {}));
var ue;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(ue || (j.ContentType = ue = {}));
const Br = O,
  of = ms($p),
  af = ms(lh),
  cf = ms(nf),
  df = r => (0, of.default)(r, (e, t, s) => {
    if (typeof t == "number") {
      const n = s.source;
      return Number.isSafeInteger(t) || /[\.eE]/.test(n) ? t : BigInt(n)
    }
    return t
  }),
  gr = r => (0, cf.default)(r, (e, t) => typeof t == "bigint" ? (0, af.default)(t.toString()) : t);
class lf {
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
      [ue.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? gr(e) : e,
      [ue.Text]: e => e !== null && typeof e != "string" ? gr(e) : e,
      [ue.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? gr(n) : `${n}`), t
      }, new FormData),
      [ue.UrlEncoded]: e => this.toQueryString(e)
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
      format: a,
      baseUrl: i,
      cancelToken: d,
      ...l
    }) => {
      const c = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        m = this.mergeRequestParams(l, c),
        h = o && this.toQueryString(o),
        y = n ?? ue.Json,
        w = this.contentFormatters[y],
        T = a || m.format;
      return this.customFetch(`${i||this.baseUrl||""}${s}${h?`?${h}`:""}`, {
        ...m,
        headers: {
          ...m.headers || {},
          ...y && y !== ue.FormData ? {
            "Content-Type": y
          } : {}
        },
        signal: (d ? this.createAbortSignal(d) : m.signal) || null,
        body: typeof e > "u" || e === null ? null : w(e)
      }).then(async g => {
        const b = g.clone();
        b.data = null, b.error = null;
        const D = T === "json" ? "text" : T,
          X = D ? await g[D]().then(z => (b.ok ? b.data = T === "json" ? df(z) : z : b.error = z, b)).catch(z => (b.error = z, b)) : b;
        if (d && this.abortControllers.delete(d), !g.ok) throw X;
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
var Ga = j.TonApiClient = lf;
const La = {
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

function uf(r) {
  return r.replace(/(_\w)/g, e => {
    var t;
    return ((t = e[1]) == null ? void 0 : t.toUpperCase()) ?? ""
  })
}

function pf(r) {
  return r.replace(/([A-Z])/g, e => `_${e.toLowerCase()}`)
}

function _r(r) {
  return Br.Cell.fromBase64(U.from(r, "hex").toString("base64"))
}

function mf(r) {
  return r.startsWith("-") ? BigInt(r.slice(1)) * -1n : BigInt(r)
}

function u(r, e) {
  const t = e && e.$ref,
    s = t ? La[t] : e;
  if (Array.isArray(r)) {
    const n = s && s.items;
    return r.map(o => u(o, n))
  } else if (s) {
    if (s.type === "string") {
      if (s.format === "address") return Br.Address.parse(r);
      if (s.format === "cell") return r && _r(r);
      if (s.format === "cell-base64") return r && Br.Cell.fromBase64(r)
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
          type: "int", value: mf(r.num)
        };
      case "cell":
        return {
          type: "cell", cell: _r(r.cell)
        };
      case "slice":
        return {
          type: "slice", slice: _r(r.slice)
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
    const a = (s == null ? void 0 : s.properties) && s.properties[o],
      i = uf(o);
    return n[i] = u(r[o], a), n
  }, {}) : r
}

function L(r, e) {
  const t = e && e.$ref,
    s = t ? La[t] : e;
  if (Array.isArray(r)) {
    const n = s && s.items;
    return r.map(o => L(o, n))
  } else if (s && s.type === "string") {
    if (s.format === "address") return r.toRawString();
    if (s.format === "cell") return r.toBoc().toString("hex");
    if (s.format === "cell-base64") return r.toBoc().toString("base64")
  }
  return r !== null && typeof r == "object" ? Object.keys(r).reduce((n, o) => {
    const a = (s == null ? void 0 : s.properties) && s.properties[o],
      i = pf(o);
    return n[i] = L(r[o], a), n
  }, {}) : r
}
class hf {
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
          a = await this.http.request({
            path: `/v2/blockchain/accounts/${o}/methods/${t}`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return u(a, {
          $ref: "#/components/schemas/MethodExecutionResult"
        })
      },
      sendBlockchainMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/blockchain/message",
          method: "POST",
          body: L(e, {
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
          body: L(e, {
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
          a = t.toRawString(),
          i = await this.http.request({
            path: `/v2/accounts/${o}/jettons/${a}`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return u(i, {
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
          a = t.toRawString(),
          i = await this.http.request({
            path: `/v2/accounts/${o}/jettons/${a}/history`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return u(i, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountNftItems: async (e, t, s = {}) => {
        var a;
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/nfts`,
            method: "GET",
            query: t && {
              ...t,
              collection: (a = t.collection) == null ? void 0 : a.toRawString()
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
          a = await this.http.request({
            path: `/v2/accounts/${o}/events/${t}`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return u(a, {
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
          body: L(e, {
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
          a = await this.http.request({
            path: `/v2/experimental/accounts/${o}/inscriptions/${t}/history`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return u(a, {
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
          a = await this.http.request({
            path: `/v2/jettons/${o}/transfer/${n}/payload`,
            method: "GET",
            format: "json",
            ...s
          });
        return u(a, {
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
          body: L(e, {
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
          body: L(e),
          ...t
        });
        return u(s)
      },
      tonConnectProof: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/auth/proof",
          method: "POST",
          body: L(e, {
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
            body: L(t, {
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
          body: L(e, {
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
          body: L(e, {
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
          body: L(e, {
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
          body: L(e, {
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
          body: L(e, {
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
          body: L(e, {
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
          a = await this.http.request({
            path: `/v2/accounts/${o}/events/emulate`,
            method: "POST",
            query: s,
            body: L(t, {
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
        return u(a, {
          $ref: "#/components/schemas/AccountEvent"
        })
      }
    });
    this.http = e
  }
}
Ma = j.Api = hf;
class Ja {
  constructor() {
    p(this, "TON_API_TOKEN");
    p(this, "ta");
    p(this, "MEMEPAD_DEFAULT_SLIPPAGE", 20);
    p(this, "MEMEPAD_ERRORS", {
      TOO_LOW_AMOUNT: "TOO_LOW_AMOUNT"
    });
    p(this, "createGetWaitForLaunchStatusUntilOk", e => () => De((() => {
      let t, s;
      return async ({
        queryId: n,
        launchTransactionHash: o
      }) => {
        const a = t ?? await Gr.getSaveMemepadJettonInfoStatus(n),
          i = s ?? await e(o);
        return E(i) && i.data && (s = i), E(a) && a.data.status === Bs.READY && (t = a), Os(i) || Os(a) ? $() : E(a) && a.data.status === Bs.READY ? k(a.data) : E(i) && !i.data ? k(void 0) : $()
      }
    })(), () => {}, 12e3));
    this.TON_API_TOKEN = Mr().public.TON_API_TOKEN, this.ta = new Ma(new Ga({
      baseUrl: "https://tonapi.io",
      apiKey: this.TON_API_TOKEN
    }))
  }
  getAddress(e) {
    return O.Address.parseFriendly(e).address
  }
  getMemepadJettonInfoFromForm(e) {
    const t = (s, n) => {
      if (n === Gi.TELEGRAM) try {
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
    const t = Rs(e, "$lWcnl8jOnP");
    return {
      get: () => t.value,
      set: s => t.value = s
    }
  }
  useCachedKeys(e) {
    const t = Rs(e, () => new Map);
    return {
      get: s => t.value.get(s),
      set: (s, n) => t.value.set(s, n)
    }
  }
  getTonConnectSender() {
    return Q.tonConnectSender(Ni().tonConnectUI.value)
  }
  mustGetUserWalletAddress() {
    const e = Fi();
    if (e.wallet.value.status !== "connected") throw Di("Wallet is not connected");
    return O.Address.parseFriendly(e.wallet.value.address.default).address
  }
  createGetPriceDetails({
    getFees: e
  }) {
    return t => {
      const s = [],
        {
          buyNetworkFee: n,
          launchPlatformFee: o,
          launchNetworkFee: a
        } = e(),
        i = a ? a.plus(o) : o;
      if (s.push({
          title: v("memepad.new.price_details.launch"),
          details: [...a ? [{
            highlight: !1,
            label: `${v("memepad.jetton.fees_network")}: ${x(a)} TON`
          }] : [], {
            highlight: o.isZero(),
            label: `${v("memepad.jetton.fees_platform")}: ${x(o)} TON`
          }],
          label: `${x(i)} TON`,
          total: i
        }), !t.share.isZero()) {
        const c = new F(t.share.plus(n));
        s.push({
          title: `${v("base.share")} ${Mi(t.jettonReceivePercent)}%`,
          details: [...n.isZero() ? [] : [{
            highlight: !1,
            label: `${v("memepad.jetton.fees_network")}: ${x(n)} TON`
          }], {
            highlight: !1,
            label: `${v("memepad.jetton.fees_platform")}: ${x(t.platformFee)} TON`
          }],
          label: `${x(c)} TON`,
          total: c
        })
      }
      const d = s.reduce((c, m) => c.plus(m.total), new F(0)),
        l = {
          title: v("memepad.new.price_details.total_label"),
          label: `${x(d)} TON`,
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
    const n = async (c, m) => await (c === ve.BUY ? t : s)(m), o = c => {
      const {
        buyNetworkFee: m,
        sellNetworkFee: h
      } = e();
      if (c === ve.BUY) {
        const y = m;
        return {
          details: [...y.isZero() ? [] : [{
            label: `${v("memepad.jetton.fees_network")}: ${x(y)} TON`
          }], {
            label: `${v("memepad.jetton.fees_platform")}: ${x(new F(0))} TON`
          }],
          total: new F(y),
          totalLabel: `${v("memepad.jetton.fees_base")}: ${x(y)} TON`
        }
      } else {
        const y = h;
        return {
          details: [...y.isZero() ? [] : [{
            label: `${v("memepad.jetton.fees_network")}: ${x(y)} TON`
          }], {
            label: `${v("memepad.jetton.fees_platform")}: ${x(new F(0))} TON`
          }],
          total: new F(y),
          totalLabel: `${v("memepad.jetton.fees_base")}: ${x(y)} TON`
        }
      }
    }, a = (c, m, h) => {
      if (m.isZero()) return o(c);
      const {
        buyNetworkFee: y,
        sellNetworkFee: w
      } = e(), T = h.platformFee;
      if (c === ve.BUY) {
        const g = y,
          b = m.plus(g);
        return {
          details: [...g.isZero() ? [] : [{
            label: `${v("memepad.jetton.fees_network")}: ${x(g)} TON`
          }], {
            label: `${v("memepad.jetton.fees_platform")}: ${x(T)} TON`
          }],
          total: b,
          totalLabel: `${v("memepad.jetton.fees_send")}: ${x(b)} TON`
        }
      } else {
        const g = w,
          b = T.plus(g);
        return {
          details: [...g.isZero() ? [] : [{
            label: `${v("memepad.jetton.fees_network")}: ${x(g)} TON`
          }], {
            label: `${v("memepad.jetton.fees_platform")}: ${x(T)} TON`
          }],
          total: b,
          totalLabel: `${v("memepad.jetton.fees_base")}: ${x(b)} TON`
        }
      }
    }, i = ({
      operation: c,
      tonBalance: m,
      jettonBalance: h
    }) => ({
      balanceLabel: c === ve.BUY ? m == null ? void 0 : m.frontendWithSymbol : h == null ? void 0 : h.frontendWithSymbol,
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
      jetton: w
    }) => {
      const {
        buyNetworkFee: T,
        sellNetworkFee: g
      } = e();
      if (!h || !y) return {
        balanceLabel: void 0,
        tradeInfo: void 0,
        feesInfo: void 0,
        error: void 0,
        ready: !1,
        loading: !0
      };
      const b = c === ve.BUY ? h.frontendWithSymbol : y == null ? void 0 : y.frontendWithSymbol;
      if (m.isZero()) return {
        balanceLabel: b,
        tradeInfo: void 0,
        feesInfo: o(c),
        error: void 0,
        ready: !1,
        loading: !1
      };
      if (c === ve.BUY) {
        const D = T,
          X = m.plus(D);
        if (h.value.lt(X)) return {
          balanceLabel: b,
          tradeInfo: void 0,
          feesInfo: void 0,
          error: {
            message: v("memepad.jetton.not_enough_error", {
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
            message: v("memepad.jetton.not_enough_error", {
              ticker: w.ticker
            }),
            notEnoughtTon: !1
          },
          ready: !1,
          loading: !1
        };
        const Jt = g;
        if (h.value.lt(Jt)) return {
          tradeInfo: void 0,
          feesInfo: void 0,
          balanceLabel: b,
          error: {
            message: v("memepad.jetton.not_enough_error", {
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
      getEmptyState: i,
      getImmediateState: d,
      getState: async ({
        operation: c,
        amount: m,
        tonBalance: h,
        jettonBalance: y,
        jetton: w
      }) => {
        const T = d({
          operation: c,
          amount: m,
          tonBalance: h,
          jettonBalance: y,
          jetton: w
        });
        if (T) return T;
        const g = c === ve.BUY ? h.frontendWithSymbol : y.frontendWithSymbol;
        if (m.isZero()) return {
          tradeInfo: void 0,
          balanceLabel: g,
          feesInfo: o(c),
          error: void 0,
          ready: !1,
          loading: !1
        };
        const b = await n(c, m);
        if (!E(b)) return b.extra === this.MEMEPAD_ERRORS.TOO_LOW_AMOUNT ? {
          tradeInfo: void 0,
          feesInfo: void 0,
          balanceLabel: g,
          error: {
            message: v("memepad.jetton.too_low_amount_error"),
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
        const D = b.data,
          X = a(c, m, D);
        return {
          tradeInfo: D,
          balanceLabel: g,
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
          label: `${v("memepad.jetton.fees_network")}: ${x(n)} TON`
        }],
        total: new F(n),
        totalLabel: `${v("memepad.jetton.fees_base")}: ${x(n)} TON`
      }
    };
    return {
      getState: ({
        tonBalance: n,
        jettonBalance: o
      }) => {
        const a = t();
        if (!n || !o || !a) return {
          balanceLabel: void 0,
          feesInfo: void 0,
          error: void 0,
          ready: !1,
          loading: !0
        };
        const i = a.total;
        return n.value.lt(i) ? {
          balanceLabel: o.frontendWithSymbol,
          feesInfo: a,
          error: {
            message: v("memepad.jetton.not_enough_error", {
              ticker: "TON"
            }),
            notEnoughtTon: !0
          },
          ready: !1,
          loading: !1
        } : {
          balanceLabel: o.frontendWithSymbol,
          feesInfo: a,
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
    const e = Ns().$webApp.storage.local.get(this.slippageStorageKey);
    if (e === void 0) return;
    const t = Number(e);
    if (!isNaN(t)) return t
  }
  updateSlippageInStorage(e) {
    return Ns().$webApp.storage.local.set(this.slippageStorageKey, String(e))
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
class Wa extends Ja {
  constructor() {
    super();
    p(this, "sdk");
    p(this, "tonApiClient");
    p(this, "MASTER_ADDRESS");
    p(this, "FEES", {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: A(Q.Constants.CoinBuyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: A(Q.Constants.CoinSellGas),
      MEMEPAD_JETTON_LAUNCH_PLATFORM_FEE: A(0n),
      MEMEPAD_JETTON_LAUNCH_NETWORK_FEE: A(Q.Constants.CoinDeploymentGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: A(Q.Constants.WalletUnlockGas)
    });
    p(this, "getBclData", async () => {
      const t = this.useCached("bclData"),
        s = t.get();
      if (s) return k(s);
      const n = await B(async () => await this.sdk.getMasterData())();
      if (!E(n)) return $(n);
      const o = A(n.data.fullPriceTon),
        a = A(n.data.fullPriceTon).minus(A(n.data.fullPriceTonFees)),
        i = A(n.data.bclSupply),
        d = A(n.data.liqSupply),
        l = i.plus(d);
      this.FEES.MEMEPAD_JETTON_LAUNCH_PLATFORM_FEE = A(n.data.deploymentFee);
      const c = {
        tonForDexWithFees: o,
        tonForDex: a,
        bclSupply: i,
        liqSupply: d,
        maxSupply: l
      };
      return t.set(c), k(c)
    });
    this.MASTER_ADDRESS = O.Address.parseFriendly(Mr().public.TON_FUN_MASTER_ADDRESS).address, this.tonApiClient = new Bo(new Oo({
      baseUrl: "https://tonapi.io",
      baseApiParams: {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${this.TON_API_TOKEN}`
        }
      }
    })), this.sdk = Q.BclSDK.create({
      apiProvider: Q.simpleTonapiProvider(this.tonApiClient),
      clientOptions: {
        endpoint: ""
      },
      masterAddress: this.MASTER_ADDRESS
    })
  }
  getCoinPriceInTons(t) {
    return new F(1).minus(A(t.fees)).div(A(t.coins))
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
class ff extends Wa {
  constructor() {
    super();
    p(this, "getJettonBclData", B(async t => {
      const s = this.getAddress(t),
        o = await this.sdk.openCoin(s).getBclData(),
        a = A(o.totalSupply),
        i = A(o.fullPriceTon).minus(A(o.fullPriceTonFees)),
        d = A(o.tonLiqCollected),
        l = d.div(i).times(100),
        c = A(o.bclSupply),
        m = A(o.liqSupply),
        h = c.minus(a);
      return {
        isReleased: !o.tradingEnabled,
        tonForDex: i,
        tonCollected: d,
        tonCollectedPercent: l,
        priceTon: void 0,
        marketCapTon: void 0,
        bclSupply: c,
        liqSupply: m,
        totalSupply: a,
        availableSupply: h
      }
    }));
    p(this, "getPriceDetails", this.createGetPriceDetails({
      getFees: () => this.fees
    }));
    p(this, "getWaitForCreateStatus", this.createGetWaitForLaunchStatusUntilOk(t => this.getCreateStatus(t)));
    p(this, "unlockStateControls", this.getUnlockStateControls(this.fees));
    p(this, "getUnlockEnabled", B(async t => {
      const s = this.useCachedKeys("unlockEnabled" + t),
        n = s.get(t);
      if (n !== void 0) return n;
      const o = this.getAddress(t),
        a = this.mustGetUserWalletAddress(),
        d = !await (await this.sdk.openCoin(o).getUserWallet(a)).getTransfersEnabled();
      return d === !1 && s.set(t, d), d
    }));
    p(this, "unlockWallet", B(async t => {
      const s = this.getAddress(t),
        n = this.sdk.openCoin(s),
        o = this.mustGetUserWalletAddress(),
        a = await n.getUserWallet(o),
        i = this.getTonConnectSender();
      return await a.sendUnlockWallet(i, {}), (await i.getResult()).hash
    }))
  }
  async getCreateStatus(t) {
    const s = await B(async () => await this.ta.events.getEvent(t))();
    if (!E(s)) return $();
    if (s.data.inProgress) return $();
    const n = s.data.actions.find(i => {
      var d;
      return i.type === "SmartContractExec" && ((d = i.SmartContractExec) == null ? void 0 : d.contract.address.equals(this.MASTER_ADDRESS))
    });
    return !n || n.status !== "ok" ? k(!1) : s.data.actions.find(i => i.type === "ContractDeploy") ? s.data.actions.find(i => i.status !== "ok") ? k(!1) : k(!0) : k(!1)
  }
  async getUnlockStatus({
    transactionHash: t,
    jettonAddress: s
  }) {
    const n = await B(async () => await this.ta.events.getEvent(t))();
    if (!E(n)) return $();
    if (n.data.inProgress) return $();
    const o = await this.getUnlockEnabled(s);
    if (!E(o)) return $();
    const a = !o.data;
    return k(a)
  }
  async getFirstCoinsForTons(t) {
    const s = this.useCachedKeys("coinsForTons"),
      n = s.get(t);
    if (n) return n;
    const o = await this.sdk.getFirstCoinsForTons(O.toNano(t));
    return s.set(t, o), o
  }
  async getJettonOverview(t) {
    const s = this.useCachedKeys("overview"),
      n = s.get(t);
    if (n) return k(n);
    const o = new F(t),
      a = await this.getBclData();
    if (!E(a)) return $();
    const {
      tonForDex: i,
      tonForDexWithFees: d,
      bclSupply: l,
      maxSupply: c
    } = a.data, m = new F(o).isZero() ? {
      fees: O.toNano(0),
      coins: O.toNano(0)
    } : await this.getFirstCoinsForTons(t), h = this.getCoinPriceInTons(await this.getFirstCoinsForTons(1)), y = h.mul(l), w = new F(A(m.coins)), T = new F(A(m.fees)), g = new F(o).minus(T), b = g.div(i).times(100), D = w.div(l).times(100), X = new F(l).sub(w), z = {
      share: o,
      tonForDexWithFees: d,
      tonForDex: i,
      tonCollected: g,
      tonCollectedPercent: b,
      jettonReceivePercent: D,
      priceTon: h,
      marketCapTon: y,
      availableSupply: X,
      maxSupply: c,
      platformFee: T,
      minReceive: w
    };
    return s.set(t, z), k(z)
  }
  async createJetton(t) {
    const s = this.getMemepadJettonInfoFromForm(t),
      n = await Gr.saveMemepadJettonInfo(s);
    if (!E(n)) return $();
    const o = new F(t.share),
      a = t.overview.minReceive,
      i = {
        name: s.name,
        description: s.description,
        imageUrl: Fs(s.iconFileKey),
        symbol: s.ticker,
        share: K(o),
        referral: n.data.referral,
        partnerAddress: n.data.partnerAddress,
        queryId: n.data.queryId,
        minReceive: K(a)
      },
      d = this.mustGetUserWalletAddress(),
      l = {};
    s.socials.length && (l.social_links = JSON.stringify(s.socials.map(w => w.url))), s.bannerFileKey && (l.cover_image = Fs(s.bannerFileKey));
    const c = {
        authorAddress: d,
        name: i.name,
        description: i.description,
        imageUrl: i.imageUrl,
        symbol: i.symbol,
        referral: Q.packReferralConfig({
          partner: this.getAddress(i.partnerAddress),
          platformTag: this.getAddress(i.referral)
        }),
        queryId: O.toNano(i.queryId),
        extraMetadata: l
      },
      m = {
        firstBuy: o.isZero() ? void 0 : {
          tons: i.share,
          minReceive: i.minReceive,
          referral: Q.packReferralConfig({
            partner: this.getAddress(i.partnerAddress)
          }),
          buyerAddress: d
        }
      },
      h = this.getTonConnectSender(),
      y = await B(async () => await this.sdk.deployCoin(h, c, m))();
    return E(y) ? k({
      queryId: n.data.queryId,
      launchTransactionHash: (await h.getResult()).hash
    }) : y
  }
  getWaitForUnlockStatus(t) {
    return De(async s => await this.getUnlockStatus({
      transactionHash: s,
      jettonAddress: t
    }), () => {}, 12e3)
  }
}
class yf extends Wa {
  constructor(t) {
    super();
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
  async getPartnerAddress() {
    const t = this.useCached("TonFunPartnerAddress"),
      s = t.get();
    if (s) return k(s);
    const n = await Gr.getMemepadTradeSdkPartnerAddress();
    return E(n) ? (t.set(n.data.address), k(n.data.address)) : $()
  }
  async getBuyInfo(t) {
    const s = await this.getPartnerAddress();
    if (!E(s)) return $();
    const n = await B(async () => await this.coin.getCoinsForTons(K(t)))();
    if (!E(n)) return $();
    const o = A(n.data.coins),
      a = this.getMinReceive(o);
    return k({
      minReceive: a,
      maxReceive: o,
      platformFee: A(n.data.fees),
      additionalInfo: {
        partnerAddress: s.data
      }
    })
  }
  async getSellInfo(t) {
    const s = await this.getPartnerAddress();
    if (!E(s)) return $();
    const n = await B(async () => await this.coin.getTonsForCoins(K(t)))();
    if (!E(n)) return $();
    const o = A(n.data.tons),
      a = this.getMinReceive(o);
    return k({
      minReceive: a,
      maxReceive: o,
      platformFee: A(n.data.fees),
      additionalInfo: {
        partnerAddress: s.data
      }
    })
  }
  async getTradeTransactionStatus(t) {
    const s = await B(async () => await this.ta.events.getEvent(t.transactionHash))();
    if (!E(s)) return $();
    if (s.data.inProgress) return $();
    const n = s.data.actions.find(o => {
      var a;
      return o.type === "SmartContractExec" && ((a = o.SmartContractExec) == null ? void 0 : a.contract.address.equals(O.Address.parseFriendly(t.jettonAddress).address))
    });
    return !n || n.status !== "ok" || s.data.actions.find(o => o.status !== "ok") ? k(!1) : k(!0)
  }
  async getUserJettonBalance() {
    const t = this.mustGetUserWalletAddress(),
      s = await B(async () => await this.sdk.getUserCoinBalance(this.address, t))();
    return E(s) ? k(A(s.data)) : $()
  }
  async buyJetton(t, s) {
    const n = {
        tons: K(t),
        minReceive: K(s.minReceive),
        referral: Q.packReferralConfig({
          partner: this.getAddress(s.additionalInfo.partnerAddress)
        })
      },
      o = this.getTonConnectSender();
    return await B(async () => (await this.coin.sendBuy(o, n), (await o.getResult()).hash))()
  }
  async sellJetton(t, s) {
    const n = this.mustGetUserWalletAddress(),
      o = await this.coin.getUserWallet(n),
      a = {
        amount: K(t),
        minReceive: K(s.minReceive),
        referral: Q.packReferralConfig({
          partner: this.getAddress(s.additionalInfo.partnerAddress)
        }),
        queryId: 0n
      },
      i = this.getTonConnectSender();
    return await B(async () => (await o.sendSellCoins(i, a), (await i.getResult()).hash))()
  }
  getWaitForBuyStatus() {
    return De(this.getTradeTransactionStatus.bind(this), () => {}, 12e3)
  }
  getWaitForSellStatus() {
    return De(this.getTradeTransactionStatus.bind(this), () => {}, 12e3)
  }
}
const gf = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  _f = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  vf = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function bf(r, e) {
  if (r === "__proto__" || r === "constructor" && e && typeof e == "object" && "prototype" in e) {
    Af(r);
    return
  }
  return e
}

function Af(r) {
  console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`)
}

function wf(r, e = {}) {
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
  if (!vf.test(r)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return r
  }
  try {
    if (gf.test(r) || _f.test(r)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(r, bf)
    }
    return JSON.parse(r)
  } catch (s) {
    if (e.strict) throw s;
    return r
  }
}
const Tf = /#/g,
  $f = /&/g,
  kf = /\//g,
  Sf = /=/g,
  hs = /\+/g,
  Ef = /%5e/gi,
  Pf = /%60/gi,
  Cf = /%7c/gi,
  qf = /%20/gi;

function jf(r) {
  return encodeURI("" + r).replace(Cf, "|")
}

function Or(r) {
  return jf(typeof r == "string" ? r : JSON.stringify(r)).replace(hs, "%2B").replace(qf, "+").replace(Tf, "%23").replace($f, "%26").replace(Pf, "`").replace(Ef, "^").replace(kf, "%2F")
}

function vr(r) {
  return Or(r).replace(Sf, "%3D")
}

function Ua(r = "") {
  try {
    return decodeURIComponent("" + r)
  } catch {
    return "" + r
  }
}

function If(r) {
  return Ua(r.replace(hs, " "))
}

function xf(r) {
  return Ua(r.replace(hs, " "))
}

function Rf(r = "") {
  const e = {};
  r[0] === "?" && (r = r.slice(1));
  for (const t of r.split("&")) {
    const s = t.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) continue;
    const n = If(s[1]);
    if (n === "__proto__" || n === "constructor") continue;
    const o = xf(s[2] || "");
    e[n] === void 0 ? e[n] = o : Array.isArray(e[n]) ? e[n].push(o) : e[n] = [e[n], o]
  }
  return e
}

function Bf(r, e) {
  return (typeof e == "number" || typeof e == "boolean") && (e = String(e)), e ? Array.isArray(e) ? e.map(t => `${vr(r)}=${Or(t)}`).join("&") : `${vr(r)}=${Or(e)}` : vr(r)
}

function Of(r) {
  return Object.keys(r).filter(e => r[e] !== void 0).map(e => Bf(e, r[e])).filter(Boolean).join("&")
}
const Nf = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  Ff = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  Df = /^([/\\]\s*){2,}[^/\\]/,
  Mf = /^\.?\//;

function Va(r, e = {}) {
  return typeof e == "boolean" && (e = {
    acceptRelative: e
  }), e.strict ? Nf.test(r) : Ff.test(r) || (e.acceptRelative ? Df.test(r) : !1)
}

function Gf(r = "", e) {
  return r.endsWith("/")
}

function Lf(r = "", e) {
  return (Gf(r) ? r.slice(0, -1) : r) || "/"
}

function Jf(r = "", e) {
  return r.endsWith("/") ? r : r + "/"
}

function Wf(r, e) {
  if (Vf(e) || Va(r)) return r;
  const t = Lf(e);
  return r.startsWith(t) ? r : zf(t, r)
}

function Uf(r, e) {
  const t = Hf(r),
    s = {
      ...Rf(t.search),
      ...e
    };
  return t.search = Of(s), Yf(t)
}

function Vf(r) {
  return !r || r === "/"
}

function Kf(r) {
  return r && r !== "/"
}

function zf(r, ...e) {
  let t = r || "";
  for (const s of e.filter(n => Kf(n)))
    if (t) {
      const n = s.replace(Mf, "");
      t = Jf(t) + n
    } else t = s;
  return t
}
const Ka = Symbol.for("ufo:protocolRelative");

function Hf(r = "", e) {
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
  if (!Va(r, {
      acceptRelative: !0
    })) return yo(r);
  const [, s = "", n, o = ""] = r.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, a = "", i = ""] = o.match(/([^#/?]*)(.*)?/) || [], {
    pathname: d,
    search: l,
    hash: c
  } = yo(i.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: s.toLowerCase(),
    auth: n ? n.slice(0, Math.max(0, n.length - 1)) : "",
    host: a,
    pathname: d,
    search: l,
    hash: c,
    [Ka]: !s
  }
}

function yo(r = "") {
  const [e = "", t = "", s = ""] = (r.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: e,
    search: t,
    hash: s
  }
}

function Yf(r) {
  const e = r.pathname || "",
    t = r.search ? (r.search.startsWith("?") ? "" : "?") + r.search : "",
    s = r.hash || "",
    n = r.auth ? r.auth + "@" : "",
    o = r.host || "";
  return (r.protocol || r[Ka] ? (r.protocol || "") + "//" : "") + n + o + e + t + s
}
class Qf extends Error {
  constructor(e, t) {
    super(e, t), this.name = "FetchError", t != null && t.cause && !this.cause && (this.cause = t.cause)
  }
}

function Zf(r) {
  var e, t, s, n, o;
  const a = ((e = r.error) == null ? void 0 : e.message) || ((t = r.error) == null ? void 0 : t.toString()) || "",
    i = ((s = r.request) == null ? void 0 : s.method) || ((n = r.options) == null ? void 0 : n.method) || "GET",
    d = ((o = r.request) == null ? void 0 : o.url) || String(r.request) || "/",
    l = `[${i}] ${JSON.stringify(d)}`,
    c = r.response ? `${r.response.status} ${r.response.statusText}` : "<no response>",
    m = `${l}: ${c}${a?` ${a}`:""}`,
    h = new Qf(m, r.error ? {
      cause: r.error
    } : void 0);
  for (const y of ["request", "options", "response"]) Object.defineProperty(h, y, {
    get() {
      return r[y]
    }
  });
  for (const [y, w] of [
      ["data", "_data"],
      ["status", "status"],
      ["statusCode", "status"],
      ["statusText", "statusText"],
      ["statusMessage", "statusText"]
    ]) Object.defineProperty(h, y, {
    get() {
      return r.response && r.response[w]
    }
  });
  return h
}
const Xf = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function go(r = "GET") {
  return Xf.has(r.toUpperCase())
}

function ey(r) {
  if (r === void 0) return !1;
  const e = typeof r;
  return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(r) ? !0 : r.buffer ? !1 : r.constructor && r.constructor.name === "Object" || typeof r.toJSON == "function"
}
const ty = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
  ry = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function sy(r = "") {
  if (!r) return "json";
  const e = r.split(";").shift() || "";
  return ry.test(e) ? "json" : ty.has(e) || e.startsWith("text/") ? "text" : "blob"
}

function ny(r, e, t = globalThis.Headers) {
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
const oy = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  ay = new Set([101, 204, 205, 304]);

function za(r = {}) {
  const {
    fetch: e = globalThis.fetch,
    Headers: t = globalThis.Headers,
    AbortController: s = globalThis.AbortController
  } = r;
  async function n(i) {
    const d = i.error && i.error.name === "AbortError" && !i.options.timeout || !1;
    if (i.options.retry !== !1 && !d) {
      let c;
      typeof i.options.retry == "number" ? c = i.options.retry : c = go(i.options.method) ? 0 : 1;
      const m = i.response && i.response.status || 500;
      if (c > 0 && (Array.isArray(i.options.retryStatusCodes) ? i.options.retryStatusCodes.includes(m) : oy.has(m))) {
        const h = i.options.retryDelay || 0;
        return h > 0 && await new Promise(y => setTimeout(y, h)), o(i.request, {
          ...i.options,
          retry: c - 1
        })
      }
    }
    const l = Zf(i);
    throw Error.captureStackTrace && Error.captureStackTrace(l, o), l
  }
  const o = async function(i, d = {}) {
    var l;
    const c = {
      request: i,
      options: ny(d, r.defaults, t),
      response: void 0,
      error: void 0
    };
    c.options.method = (l = c.options.method) == null ? void 0 : l.toUpperCase(), c.options.onRequest && await c.options.onRequest(c), typeof c.request == "string" && (c.options.baseURL && (c.request = Wf(c.request, c.options.baseURL)), (c.options.query || c.options.params) && (c.request = Uf(c.request, {
      ...c.options.params,
      ...c.options.query
    }))), c.options.body && go(c.options.method) && (ey(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body), c.options.headers = new t(c.options.headers || {}), c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half")));
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
    if (c.response.body && !ay.has(c.response.status) && c.options.method !== "HEAD") {
      const h = (c.options.parseResponse ? "json" : c.options.responseType) || sy(c.response.headers.get("content-type") || "");
      switch (h) {
        case "json": {
          const y = await c.response.text(),
            w = c.options.parseResponse || wf;
          c.response._data = w(y);
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
  }, a = async function(i, d) {
    return (await o(i, d))._data
  };
  return a.raw = o, a.native = (...i) => e(...i), a.create = (i = {}) => za({
    ...r,
    defaults: {
      ...r.defaults,
      ...i
    }
  }), a
}
const fs = function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof Ds < "u") return Ds;
    throw new Error("unable to locate global object")
  }(),
  iy = fs.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
  cy = fs.Headers,
  dy = fs.AbortController,
  ly = za({
    fetch: iy,
    Headers: cy,
    AbortController: dy
  }),
  ft = r => r.toISOString().split(".")[0];

function uy(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var ys = {
  exports: {}
};
const Ha = r => typeof r == "object" && r !== null,
  Ya = Symbol("skip"),
  _o = r => Ha(r) && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  Nr = (r, e, t, s = new WeakMap) => {
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
    const o = a => a.map(i => _o(i) ? Nr(i, e, t, s) : i);
    if (Array.isArray(r)) return o(r);
    for (const [a, i] of Object.entries(r)) {
      const d = e(a, i, r);
      if (d === Ya) continue;
      let [l, c, {
        shouldRecurse: m = !0
      } = {}] = d;
      l !== "__proto__" && (t.deep && m && _o(c) && (c = Array.isArray(c) ? o(c) : Nr(c, e, t, s)), n[l] = c)
    }
    return n
  };
ys.exports = (r, e, t) => {
  if (!Ha(r)) throw new TypeError(`Expected an object, got \`${r}\` (${typeof r})`);
  return Nr(r, e, t)
};
ys.exports.mapObjectSkip = Ya;
var py = ys.exports;
const vo = uy(py);
class Qa extends Map {
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
const my = (r, e) => (r = r.replace(new RegExp("((?<![\\p{Uppercase_Letter}\\d])[\\p{Uppercase_Letter}\\d](?![\\p{Uppercase_Letter}\\d]))", "gu"), t => t.toLowerCase()), r.replace(new RegExp("(\\p{Uppercase_Letter}+)(\\p{Uppercase_Letter}\\p{Lowercase_Letter}+)", "gu"), (t, s, n) => s + e + n.toLowerCase()));

function hy(r, {
  separator: e = "_",
  preserveConsecutiveUppercase: t = !1
} = {}) {
  if (!(typeof r == "string" && typeof e == "string")) throw new TypeError("The `text` and `separator` arguments should be of type `string`");
  if (r.length < 2) return t ? r : r.toLowerCase();
  const s = `$1${e}$2`,
    n = r.replace(new RegExp("([\\p{Lowercase_Letter}\\d])(\\p{Uppercase_Letter})", "gu"), s);
  return t ? my(n, e) : n.replace(new RegExp("(\\p{Uppercase_Letter})(\\p{Uppercase_Letter}\\p{Lowercase_Letter}+)", "gu"), s).toLowerCase()
}
const fy = (r, e) => r.some(t => typeof t == "string" ? t === e : (t.lastIndex = 0, t.test(e))),
  br = new Qa({
    maxSize: 1e5
  }),
  bo = r => typeof r == "object" && r !== null && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  Ao = (r, e = {}) => {
    if (!bo(r)) return r;
    const {
      separator: t = "_",
      exclude: s,
      deep: n = !1
    } = e, o = a => (i, d) => {
      if (n && bo(d) && (d = vo(d, o())), !(s && fy(s, i))) {
        const l = `${t}${i}`;
        if (br.has(l)) i = br.get(l);
        else {
          const c = hy(i, {
            separator: t
          });
          i.length < 100 && br.set(l, c), i = c
        }
      }
      return [i, d]
    };
    return vo(r, o())
  };

function yy(r, e) {
  return Array.isArray(r) ? Object.keys(r).map(t => Ao(r[t], e)) : Ao(r, e)
}

function gy(r) {
  return yy(r, {
    deep: !0
  })
}

function wo(r) {
  let e = r;
  for (; e.indexOf("/") >= 0;) e = e.replace("/", "_");
  for (; e.indexOf("+") >= 0;) e = e.replace("+", "-");
  for (; e.indexOf("=") >= 0;) e = e.replace("=", "");
  return e
}

function P(r, e) {
  const t = r.replace(/{([a-zA-Z0-9_]+)}/g, (s, n) => {
    var o, a;
    const i = (o = e == null ? void 0 : e.query) == null ? void 0 : o[n];
    if (!i) throw new Error(`Missing value for path parameter "${n}"`);
    return (a = e == null ? void 0 : e.query) == null || delete a[n], wo(i)
  });
  if (e != null && e.query) {
    for (const s in e.query) {
      const n = e.query[s];
      typeof n == "string" && (e.query[s] = wo(n))
    }
    e.query = gy(e.query)
  }
  return [t, e]
}
const Za = r => typeof r == "object" && r !== null,
  To = r => Za(r) && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  _y = Symbol("mapObjectSkip"),
  Fr = (r, e, t, s = new WeakMap) => {
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
    const o = a => a.map(i => To(i) ? Fr(i, e, t, s) : i);
    if (Array.isArray(r)) return o(r);
    for (const [a, i] of Object.entries(r)) {
      const d = e(a, i, r);
      if (d === _y) continue;
      let [l, c, {
        shouldRecurse: m = !0
      } = {}] = d;
      l !== "__proto__" && (t.deep && m && To(c) && (c = Array.isArray(c) ? o(c) : Fr(c, e, t, s)), n[l] = c)
    }
    return n
  };

function $o(r, e, t) {
  if (!Za(r)) throw new TypeError(`Expected an object, got \`${r}\` (${typeof r})`);
  return Fr(r, e, t)
}
const vy = /[\p{Lu}]/u,
  by = /[\p{Ll}]/u,
  ko = /^[\p{Lu}](?![\p{Lu}])/gu,
  Xa = /([\p{Alpha}\p{N}_]|$)/u,
  gs = /[_.\- ]+/,
  Ay = new RegExp("^" + gs.source),
  So = new RegExp(gs.source + Xa.source, "gu"),
  Eo = new RegExp("\\d+" + Xa.source, "gu"),
  wy = (r, e, t, s) => {
    let n = !1,
      o = !1,
      a = !1,
      i = !1;
    for (let d = 0; d < r.length; d++) {
      const l = r[d];
      i = d > 2 ? r[d - 3] === "-" : !0, n && vy.test(l) ? (r = r.slice(0, d) + "-" + r.slice(d), n = !1, a = o, o = !0, d++) : o && a && by.test(l) && (!i || s) ? (r = r.slice(0, d - 1) + "-" + r.slice(d - 1), a = o, o = !1, n = !0) : (n = e(l) === l && t(l) !== l, a = o, o = t(l) === l && e(l) !== l)
    }
    return r
  },
  Ty = (r, e) => (ko.lastIndex = 0, r.replaceAll(ko, t => e(t))),
  $y = (r, e) => (So.lastIndex = 0, Eo.lastIndex = 0, r.replaceAll(Eo, (t, s, n) => ["_", "-"].includes(r.charAt(n + t.length)) ? t : e(t)).replaceAll(So, (t, s) => e(s)));

function ky(r, e) {
  if (!(typeof r == "string" || Array.isArray(r))) throw new TypeError("Expected the input to be `string | string[]`");
  if (e = {
      pascalCase: !1,
      preserveConsecutiveUppercase: !1,
      ...e
    }, Array.isArray(r) ? r = r.map(n => n.trim()).filter(n => n.length).join("-") : r = r.trim(), r.length === 0) return "";
  const t = e.locale === !1 ? n => n.toLowerCase() : n => n.toLocaleLowerCase(e.locale),
    s = e.locale === !1 ? n => n.toUpperCase() : n => n.toLocaleUpperCase(e.locale);
  return r.length === 1 ? gs.test(r) ? "" : e.pascalCase ? s(r) : t(r) : (r !== t(r) && (r = wy(r, t, s, e.preserveConsecutiveUppercase)), r = r.replace(Ay, ""), r = e.preserveConsecutiveUppercase ? Ty(r, t) : t(r), e.pascalCase && (r = s(r.charAt(0)) + r.slice(1)), $y(r, s))
}
const Sy = (r, e) => r.some(t => typeof t == "string" ? t === e : (t.lastIndex = 0, t.test(e))),
  Ar = new Qa({
    maxSize: 1e5
  }),
  Po = r => typeof r == "object" && r !== null && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  Co = (r, e = {}) => {
    if (!Po(r)) return r;
    const {
      exclude: t,
      pascalCase: s = !1,
      stopPaths: n,
      deep: o = !1,
      preserveConsecutiveUppercase: a = !1
    } = e, i = new Set(n), d = l => (c, m) => {
      if (o && Po(m)) {
        const h = l === void 0 ? c : `${l}.${c}`;
        i.has(h) || (m = $o(m, d(h)))
      }
      if (!(t && Sy(t, c))) {
        const h = s ? `${c}_` : c;
        if (Ar.has(h)) c = Ar.get(h);
        else {
          const y = ky(c, {
            pascalCase: s,
            locale: !1,
            preserveConsecutiveUppercase: a
          });
          c.length < 100 && Ar.set(h, y), c = y
        }
      }
      return [c, m]
    };
    return $o(r, d(void 0))
  };

function Ey(r, e) {
  return Array.isArray(r) ? Object.keys(r).map(t => Co(r[t], e)) : Co(r, e)
}

function Py(r) {
  return Ey(r, {
    deep: !0
  })
}

function ei(r) {
  const e = {};
  for (const t in r) {
    const s = r[t];
    e[t] = s === null ? void 0 : s && typeof s == "object" && s.__proto__.constructor === Object ? ei(s) : s
  }
  return e
}

function C(r) {
  return ei(Py(r))
}
class Cy {
  constructor(e) {
    const t = new URL((e == null ? void 0 : e.baseURL) ?? (e == null ? void 0 : e.baseUrl) ?? "https://api.ston.fi"),
      s = [...new URLSearchParams(t.search)].reduce((n, [o, a]) => ({
        ...n,
        [o]: a
      }), {});
    this.apiFetch = ly.create({
      baseURL: `${t.origin}${t.pathname}`,
      query: s
    })
  }
  async getAsset(e) {
    return C(await this.apiFetch(...P("/v1/assets/{assetAddress}", {
      method: "GET",
      query: {
        assetAddress: e
      }
    }))).asset
  }
  async getAssets() {
    return C(await this.apiFetch(...P("/v1/assets", {
      method: "GET"
    }))).assetList
  }
  async queryAssets({
    unconditionalAssets: e,
    ...t
  }) {
    return C(await this.apiFetch(...P("/v1/assets/query", {
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
    return C(await this.apiFetch(...P("/v1/assets/search", {
      method: "POST",
      query: {
        ...t,
        unconditionalAsset: e
      }
    }))).assetList
  }
  async getFarm(e) {
    return C(await this.apiFetch(...P("/v1/farms/{farmAddress}", {
      method: "GET",
      query: {
        farmAddress: e
      }
    }))).farm
  }
  async getFarms(e) {
    return C(await this.apiFetch(...P("/v1/farms", {
      method: "GET",
      query: e
    }))).farmList
  }
  async getFarmsByPool(e) {
    return C(await this.apiFetch(...P("/v1/farms_by_pool/{poolAddress}", {
      method: "GET",
      query: {
        poolAddress: e
      }
    }))).farmList
  }
  async getSwapPairs(e) {
    return C(await this.apiFetch(...P("/v1/markets", {
      method: "GET",
      query: e
    }))).pairs
  }
  async getSwapStatus(e) {
    return C(await this.apiFetch(...P("/v1/swap/status", {
      method: "GET",
      query: e
    })))
  }
  async getPool(e) {
    return C(await this.apiFetch(...P("/v1/pools/{poolAddress}", {
      method: "GET",
      query: typeof e == "string" ? {
        poolAddress: e
      } : e
    }))).pool
  }
  async getPools(e) {
    return C(await this.apiFetch(...P("/v1/pools", {
      method: "GET",
      query: e
    }))).poolList
  }
  async queryPools({
    unconditionalAssets: e,
    ...t
  }) {
    return C(await this.apiFetch(...P("/v1/pool/query", {
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
    return C(await this.apiFetch(...P("/v1/swap/simulate", {
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
    return C(await this.apiFetch(...P("/v1/reverse_swap/simulate", {
      method: "POST",
      query: {
        ...t,
        units: e
      }
    })))
  }
  async getJettonWalletAddress(e) {
    return C(await this.apiFetch(...P("/v1/jetton/{jettonAddress}/address", {
      method: "GET",
      query: e
    }))).address
  }
  async getWalletAsset(e) {
    return C(await this.apiFetch(...P("/v1/wallets/{walletAddress}/assets/{assetAddress}", {
      method: "GET",
      query: e
    }))).asset
  }
  async getWalletAssets(e) {
    return C(await this.apiFetch(...P("/v1/wallets/{walletAddress}/assets", {
      method: "GET",
      query: {
        walletAddress: e
      }
    }))).assetList
  }
  async getWalletFarm(e) {
    return C(await this.apiFetch(...P("/v1/wallets/{walletAddress}/farms/{farmAddress}", {
      method: "GET",
      query: e
    }))).farm
  }
  async getWalletFarms(e) {
    return C(await this.apiFetch(...P("/v1/wallets/{walletAddress}/farms", {
      method: "GET",
      query: typeof e == "string" ? {
        walletAddress: e
      } : e
    }))).farmList
  }
  async getWalletPool(e) {
    return C(await this.apiFetch(...P("/v1/wallets/{walletAddress}/pools/{poolAddress}", {
      method: "GET",
      query: e
    }))).pool
  }
  async getWalletPools(e) {
    return C(await this.apiFetch(...P("/v1/wallets/{walletAddress}/pools", {
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
    return C(await this.apiFetch(...P("/v1/wallets/{walletAddress}/operations", {
      method: "GET",
      query: {
        ...s,
        since: ft(e),
        until: ft(t)
      }
    }))).operations
  }
  async getOperations({
    since: e,
    until: t
  }) {
    return C(await this.apiFetch(...P("/v1/stats/operations", {
      method: "GET",
      query: {
        since: ft(e),
        until: ft(t)
      }
    }))).operations
  }
  async getRouters(e) {
    return C(await this.apiFetch(...P("/v1/routers", {
      method: "GET",
      query: e
    }))).routerList
  }
  async getRouter(e) {
    return C(await this.apiFetch(...P("/v1/routers/{routerAddress}", {
      method: "GET",
      query: {
        routerAddress: e
      }
    }))).router
  }
}
const J = {
    v1: "v1",
    v2_1: "v2_1",
    v2_2: "v2_2"
  },
  ti = {
    CPI: "constant_product"
  };

function _(r) {
  return r instanceof f.Address ? r : f.address(r.toString())
}
class Ee {
  constructor(e, t) {
    this.address = _(e)
  }
  static create(e) {
    return new this(e)
  }
}
class R extends Ee {
  async getWalletAddress(e, t) {
    return (await e.get("get_wallet_address", [{
      type: "slice",
      cell: f.beginCell().storeAddress(_(t)).endCell()
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

function Ve(r) {
  const e = f.beginCell();
  return e.storeUint(260734629, 32), e.storeUint(r.queryId, 64), e.storeCoins(BigInt(r.amount)), e.storeAddress(_(r.destination)), e.storeAddress(r.responseDestination ? _(r.responseDestination) : void 0), r.customPayload ? (e.storeBit(!0), e.storeRef(r.customPayload)) : e.storeBit(!1), e.storeCoins(BigInt(r.forwardTonAmount)), r.forwardPayload ? (e.storeBit(!0), e.storeRef(r.forwardPayload)) : e.storeBit(!1), e.endCell()
}
class Fe extends Error {
  constructor({
    expected: e,
    received: t
  }) {
    super(`The version of the provided pTON (${t}) does not match the expected version (${e})`)
  }
}
const Te = {
    SWAP: 630424929,
    PROVIDE_LP: 4244235663,
    DIRECT_ADD_LIQUIDITY: 1291331587,
    REFUND_ME: 200537159,
    RESET_GAS: 1117846339,
    COLLECT_FEES: 533429565,
    BURN: 1499400124
  },
  ri = "EQB3ncyBUTjZUA5EnFKR5_EnOMI9V1tTEAAPaiU71gc4TiUt";
class si extends Ee {
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
const _s = class ni extends Ee {
  constructor(e, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...ni.gasConstants,
      ...t
    }
  }
  async createRefundBody(e) {
    return f.beginCell().storeUint(Te.REFUND_ME, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
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
    return f.beginCell().storeUint(Te.DIRECT_ADD_LIQUIDITY, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount0)).storeCoins(BigInt(e.amount1)).storeCoins(BigInt(e.minimumLpToMint ?? 1)).endCell()
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
    return f.beginCell().storeUint(Te.RESET_GAS, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
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
_s.version = J.v1;
_s.gasConstants = {
  refund: f.toNano("0.3"),
  directAddLp: f.toNano("0.3"),
  resetGas: f.toNano("0.3")
};
let oi = _s;
const vs = class ai extends R {
  constructor(e, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...ai.gasConstants,
      ...t
    }
  }
  async createCollectFeesBody(e) {
    return f.beginCell().storeUint(Te.COLLECT_FEES, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
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
    return f.beginCell().storeUint(Te.BURN, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount)).storeAddress(_(e.responseAddress)).endCell()
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
      cell: f.beginCell().storeAddress(_(t.jettonWallet)).endCell()
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
      cell: f.beginCell().storeAddress(_(t.ownerAddress)).endCell()
    }])).stack.readAddress()
  }
  async getJettonWallet(e, t) {
    const s = await this.getWalletAddress(e, t.ownerAddress);
    return si.create(s)
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
    return oi.create(s)
  }
};
vs.version = J.v1;
vs.gasConstants = {
  collectFees: f.toNano("1.1"),
  burn: f.toNano("0.5")
};
let ii = vs;
const Mt = class oe extends Ee {
  constructor(e = oe.address, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...oe.gasConstants,
      ...t
    }
  }
  async createSwapBody(e) {
    const t = f.beginCell();
    return t.storeUint(Te.SWAP, 32), t.storeAddress(_(e.askJettonWalletAddress)), t.storeCoins(BigInt(e.minAskAmount)), t.storeAddress(_(e.userWalletAddress)), e.referralAddress ? (t.storeUint(1, 1), t.storeAddress(_(e.referralAddress))) : t.storeUint(0, 1), t.endCell()
  }
  async getSwapJettonToJettonTxParams(e, t) {
    const [s, n] = await Promise.all([e.open(R.create(t.offerJettonAddress)).getWalletAddress(t.userWalletAddress), e.open(R.create(t.askJettonAddress)).getWalletAddress(this.address)]), o = await this.createSwapBody({
      userWalletAddress: t.userWalletAddress,
      minAskAmount: t.minAskAmount,
      askJettonWalletAddress: n,
      referralAddress: t.referralAddress
    }), a = BigInt(t.forwardGasAmount ?? this.gasConstants.swapJettonToJetton.forwardGasAmount), i = Ve({
      queryId: t.queryId ?? 0,
      amount: t.offerAmount,
      destination: this.address,
      responseDestination: t.userWalletAddress,
      customPayload: t.jettonCustomPayload,
      forwardTonAmount: a,
      forwardPayload: o
    }), d = BigInt(t.gasAmount ?? this.gasConstants.swapJettonToJetton.gasAmount);
    return {
      to: s,
      value: d,
      body: i
    }
  }
  async sendSwapJettonToJetton(e, t, s) {
    const n = await this.getSwapJettonToJettonTxParams(e, s);
    return t.send(n)
  }
  async getSwapJettonToTonTxParams(e, t) {
    if (t.proxyTon.version !== oe.version) throw new Fe({
      expected: oe.version,
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
    if (t.proxyTon.version !== oe.version) throw new Fe({
      expected: oe.version,
      received: t.proxyTon.version
    });
    const s = await e.open(R.create(t.askJettonAddress)).getWalletAddress(this.address),
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
    return f.beginCell().storeUint(Te.PROVIDE_LP, 32).storeAddress(_(e.routerWalletAddress)).storeCoins(BigInt(e.minLpOut)).endCell()
  }
  async getProvideLiquidityJettonTxParams(e, t) {
    const [s, n] = await Promise.all([e.open(R.create(t.sendTokenAddress)).getWalletAddress(t.userWalletAddress), e.open(R.create(t.otherTokenAddress)).getWalletAddress(this.address)]), o = await this.createProvideLiquidityBody({
      routerWalletAddress: n,
      minLpOut: t.minLpOut
    }), a = BigInt(t.forwardGasAmount ?? this.gasConstants.provideLpJetton.forwardGasAmount), i = Ve({
      queryId: t.queryId ?? 0,
      amount: t.sendAmount,
      destination: this.address,
      responseDestination: t.userWalletAddress,
      customPayload: t.jettonCustomPayload,
      forwardTonAmount: a,
      forwardPayload: o
    }), d = BigInt(t.gasAmount ?? this.gasConstants.provideLpJetton.gasAmount);
    return {
      to: s,
      value: d,
      body: i
    }
  }
  async sendProvideLiquidityJetton(e, t, s) {
    const n = await this.getProvideLiquidityJettonTxParams(e, s);
    return t.send(n)
  }
  async getProvideLiquidityTonTxParams(e, t) {
    if (t.proxyTon.version !== oe.version) throw new Fe({
      expected: oe.version,
      received: t.proxyTon.version
    });
    const s = await e.open(R.create(t.otherTokenAddress)).getWalletAddress(this.address),
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
      cell: f.beginCell().storeAddress(_(t.token0)).endCell()
    }, {
      type: "slice",
      cell: f.beginCell().storeAddress(_(t.token1)).endCell()
    }])).stack.readAddress()
  }
  async getPoolAddressByJettonMinters(e, t) {
    const [s, n] = await Promise.all([e.open(R.create(t.token0)).getWalletAddress(this.address), e.open(R.create(t.token1)).getWalletAddress(this.address)]);
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
    return ii.create(s)
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
Mt.version = J.v1;
Mt.address = f.address(ri);
Mt.gasConstants = {
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
let qy = Mt;
const kt = {
    v1: "v1",
    v2_1: "v2_1"
  },
  jy = {
    DEPLOY_WALLET: 1824798067
  },
  Gt = class bt extends R {
    constructor(e = bt.address, {
      gasConstants: t,
      ...s
    } = {}) {
      super(e, s), this.version = bt.version, this.gasConstants = {
        ...bt.gasConstants,
        ...t
      }
    }
    async getTonTransferTxParams(e, t) {
      const s = await this.getWalletAddress(e, t.destinationAddress),
        n = Ve({
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
      return f.beginCell().storeUint(jy.DEPLOY_WALLET, 32).storeUint(e.queryId ?? 0, 64).storeAddress(_(e.ownerAddress)).endCell()
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
Gt.version = kt.v1;
Gt.address = f.address("EQCM3B12QK1e4yZSf8GtBRT0aLMNyEsBc_DhVfRRtOEffLez");
Gt.gasConstants = {
  deployWallet: f.toNano("1.05")
};
let bs = Gt;
const Iy = {
    Router: qy,
    Pool: ii,
    LpAccount: oi,
    pTON: bs
  },
  qo = {
    TON_TRANSFER: 32736093,
    DEPLOY_WALLET: 1331643155
  },
  As = class Dr extends bs {
    constructor(e, {
      gasConstants: t,
      ...s
    } = {}) {
      super(e, s), this.version = Dr.version, this.gasConstants = {
        ...Dr.gasConstants,
        ...t
      }
    }
    async createTonTransferBody(e) {
      const t = f.beginCell();
      return t.storeUint(qo.TON_TRANSFER, 32), t.storeUint(e.queryId ?? 0, 64), t.storeCoins(BigInt(e.tonAmount)), t.storeAddress(_(e.refundAddress)), e.forwardPayload && (t.storeBit(!0), t.storeRef(e.forwardPayload)), t.endCell()
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
      return f.beginCell().storeUint(qo.DEPLOY_WALLET, 32).storeUint(e.queryId ?? 0, 64).storeAddress(_(e.ownerAddress)).storeAddress(_(e.excessAddress)).endCell()
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
As.version = kt.v2_1;
As.gasConstants = {
  tonTransfer: f.toNano("0.01"),
  deployWallet: f.toNano("0.1")
};
let ws = As;
const ae = {
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
  xy = 15 * 60,
  Ts = class ci extends Ee {
    constructor(e, {
      gasConstants: t,
      ...s
    } = {}) {
      super(e, s), this.gasConstants = {
        ...ci.gasConstants,
        ...t
      }
    }
    async createRefundBody(e) {
      return f.beginCell().storeUint(ae.REFUND_ME, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeMaybeRef(e == null ? void 0 : e.leftMaybePayload).storeMaybeRef(e == null ? void 0 : e.rightMaybePayload).endCell()
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
      return f.beginCell().storeUint(ae.DIRECT_ADD_LIQUIDITY, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount0)).storeCoins(BigInt(e.amount1)).storeCoins(BigInt(e.minimumLpToMint ?? 1)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeAddress(_(e.userWalletAddress)).storeMaybeRef(e.dexCustomPayload).storeRef(f.beginCell().storeAddress(_(e.refundAddress ?? e.userWalletAddress)).storeAddress(_(e.excessesAddress ?? e.refundAddress ?? e.userWalletAddress)).endCell()).endCell()
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
      return f.beginCell().storeUint(ae.RESET_GAS, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
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
Ts.version = J.v2_1;
Ts.gasConstants = {
  refund: f.toNano("0.8"),
  directAddLp: f.toNano("0.3"),
  resetGas: f.toNano("0.02")
};
let $s = Ts;
const ks = class di extends R {
  constructor(e, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...di.gasConstants,
      ...t
    }
  }
  async createCollectFeesBody(e) {
    return f.beginCell().storeUint(ae.COLLECT_FEES, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
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
    return f.beginCell().storeUint(ae.BURN, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount)).storeAddress(null).storeMaybeRef(e.dexCustomPayload).endCell()
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
      cell: f.beginCell().storeAddress(_(t.ownerAddress)).endCell()
    }])).stack.readAddress()
  }
  async getLpAccount(e, t) {
    const s = await this.getLpAccountAddress(e, t);
    return $s.create(s)
  }
  async getJettonWallet(e, t) {
    const s = await this.getWalletAddress(e, t.ownerAddress);
    return si.create(s)
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
ks.version = J.v2_1;
ks.gasConstants = {
  collectFees: f.toNano("0.4"),
  burn: f.toNano("0.8")
};
let re = ks;
const Ss = class li extends Ee {
  constructor(e, {
    gasConstants: t,
    ...s
  } = {}) {
    super(e, s), this.gasConstants = {
      ...li.gasConstants,
      ...t
    }
  }
  async createWithdrawFeeBody(e) {
    return f.beginCell().storeUint(ae.WITHDRAW_FEE, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
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
Ss.version = J.v2_1;
Ss.gasConstants = {
  withdrawFee: f.toNano("0.3")
};
let Es = Ss;
const Ps = class ui extends Ee {
  constructor(e, {
    gasConstants: t,
    txDeadline: s,
    ...n
  } = {}) {
    if (super(e, n), this.address.equals(f.Address.parse(ri))) throw Error(["You are trying to create an instance v2.1 Router with a v1 address", "Please use the appropriate class for the v1 Router. Otherwise, all the funds will be permanently lost."].join(`
`));
    this.gasConstants = {
      ...ui.gasConstants,
      ...t
    }, this.txDeadline = s ?? xy
  }
  async createSwapBody(e) {
    if (e.referralValue && (BigInt(e.referralValue) < 0 || BigInt(e.referralValue) > 100)) throw Error("'referralValue' should be in range [0, 100] BPS");
    return f.beginCell().storeUint(ae.SWAP, 32).storeAddress(_(e.askJettonWalletAddress)).storeAddress(_(e.refundAddress)).storeAddress(_(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(f.beginCell().storeCoins(BigInt(e.minAskAmount)).storeAddress(_(e.receiverAddress)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).storeCoins(BigInt(e.refundForwardGasAmount ?? 0)).storeMaybeRef(e.refundPayload).storeUint(BigInt(e.referralValue ?? 10), 16).storeAddress(e.referralAddress ? _(e.referralAddress) : null).endCell()).endCell()
  }
  async createCrossSwapBody(e) {
    if (e.referralValue && (BigInt(e.referralValue) < 0 || BigInt(e.referralValue) > 100)) throw Error("'referralValue' should be in range [0, 100] BPS");
    return f.beginCell().storeUint(ae.CROSS_SWAP, 32).storeAddress(_(e.askJettonWalletAddress)).storeAddress(_(e.refundAddress)).storeAddress(_(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(f.beginCell().storeCoins(BigInt(e.minAskAmount)).storeAddress(_(e.receiverAddress)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).storeCoins(BigInt(e.refundForwardGasAmount ?? 0)).storeMaybeRef(e.refundPayload).storeUint(BigInt(e.referralValue ?? 10), 16).storeAddress(e.referralAddress ? _(e.referralAddress) : null).endCell()).endCell()
  }
  async getSwapJettonToJettonTxParams(e, t) {
    const s = this.address,
      [n, o] = await Promise.all([e.open(R.create(t.offerJettonAddress)).getWalletAddress(t.userWalletAddress), e.open(R.create(t.askJettonAddress)).getWalletAddress(s)]),
      a = BigInt(t.forwardGasAmount ?? this.gasConstants.swapJettonToJetton.forwardGasAmount),
      i = await this.createSwapBody({
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
      d = Ve({
        queryId: t.queryId ?? 0,
        amount: t.offerAmount,
        destination: s,
        responseDestination: t.userWalletAddress,
        customPayload: t.jettonCustomPayload,
        forwardTonAmount: a,
        forwardPayload: i
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
    if (t.proxyTon.version !== re.version) throw new Fe({
      expected: re.version,
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
    if (t.proxyTon.version !== re.version) throw new Fe({
      expected: re.version,
      received: t.proxyTon.version
    });
    const s = this.address,
      n = await e.open(R.create(t.askJettonAddress)).getWalletAddress(s),
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
      a = BigInt(t.forwardGasAmount ?? this.gasConstants.swapTonToJetton.forwardGasAmount);
    return await e.open(t.proxyTon).getTonTransferTxParams({
      queryId: t.queryId ?? 0,
      tonAmount: t.offerAmount,
      destinationAddress: s,
      refundAddress: t.userWalletAddress,
      forwardPayload: o,
      forwardTonAmount: a
    })
  }
  async sendSwapTonToJetton(e, t, s) {
    const n = await this.getSwapTonToJettonTxParams(e, s);
    return t.send(n)
  }
  async createProvideLiquidityBody(e) {
    return f.beginCell().storeUint(ae.PROVIDE_LP, 32).storeAddress(_(e.routerWalletAddress)).storeAddress(_(e.refundAddress)).storeAddress(_(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(f.beginCell().storeCoins(BigInt(e.minLpOut)).storeAddress(_(e.receiverAddress)).storeUint(e.bothPositive ? 1 : 0, 1).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).endCell()).endCell()
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
      [n, o] = await Promise.all([e.open(R.create(t.sendTokenAddress)).getWalletAddress(t.userWalletAddress), e.open(R.create(t.otherTokenAddress)).getWalletAddress(s)]),
      a = await this.createProvideLiquidityBody({
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
      i = BigInt(t.forwardGasAmount),
      d = Ve({
        queryId: t.queryId ?? 0,
        amount: t.sendAmount,
        destination: s,
        responseDestination: t.userWalletAddress,
        customPayload: t.jettonCustomPayload,
        forwardTonAmount: i,
        forwardPayload: a
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
    if (t.proxyTon.version !== re.version) throw new Fe({
      expected: re.version,
      received: t.proxyTon.version
    });
    const s = this.address,
      n = await e.open(R.create(t.otherTokenAddress)).getWalletAddress(s),
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
      a = BigInt(t.forwardGasAmount);
    return await e.open(t.proxyTon).getTonTransferTxParams({
      queryId: t.queryId ?? 0,
      tonAmount: t.sendAmount,
      destinationAddress: s,
      refundAddress: t.userWalletAddress,
      forwardPayload: o,
      forwardTonAmount: a
    })
  }
  get defaultDeadline() {
    return Math.floor(Date.now() / 1e3) + this.txDeadline
  }
  async getPoolAddress(e, t) {
    return (await e.get("get_pool_address", [{
      type: "slice",
      cell: f.beginCell().storeAddress(_(t.token0)).endCell()
    }, {
      type: "slice",
      cell: f.beginCell().storeAddress(_(t.token1)).endCell()
    }])).stack.readAddress()
  }
  async getPoolAddressByJettonMinters(e, t) {
    const [s, n] = await Promise.all([e.open(R.create(t.token0)).getWalletAddress(this.address), e.open(R.create(t.token1)).getWalletAddress(this.address)]);
    return await this.getPoolAddress(e, {
      token0: s,
      token1: n
    })
  }
  async getPool(e, t) {
    const s = await this.getPoolAddressByJettonMinters(e, t);
    return re.create(s)
  }
  async getVaultAddress(e, t) {
    return (await e.get("get_vault_address", [{
      type: "slice",
      cell: f.beginCell().storeAddress(_(t.user)).endCell()
    }, {
      type: "slice",
      cell: f.beginCell().storeAddress(_(t.tokenWallet)).endCell()
    }])).stack.readAddress()
  }
  async getVault(e, t) {
    const s = e.open(R.create(t.tokenMinter)),
      n = await this.getVaultAddress(e, {
        user: t.user,
        tokenWallet: await s.getWalletAddress(this.address)
      });
    return Es.create(n)
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
Ps.version = J.v2_1;
Ps.gasConstants = {
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
let Cs = Ps;
class Lt extends re {
  async getPoolData(e) {
    return {
      ...(await this.implGetPoolData(e)).commonPoolData
    }
  }
}
Lt.dexType = ti.CPI;
class qs extends Cs {
  async getPool(e, t) {
    const s = await this.getPoolAddressByJettonMinters(e, t);
    return Lt.create(s)
  }
}
qs.dexType = ti.CPI;
class pi extends Cs {}
pi.CPI = qs;
class mi extends re {}
mi.CPI = Lt;
const Ry = {
  Router: pi,
  Pool: mi,
  LpAccount: $s,
  Vault: Es,
  pTON: ws
};
class hi extends Cs {}
hi.version = J.v2_2;
class fi extends qs {}
fi.version = J.v2_2;
class yi extends hi {}
yi.CPI = fi;
class gi extends re {}
gi.version = J.v2_2;
class _i extends Lt {}
_i.version = J.v2_2;
class vi extends gi {}
vi.CPI = _i;
class bi extends $s {}
bi.version = J.v2_2;
class Ai extends Es {}
Ai.version = J.v2_2;
const By = {
    Router: yi,
    Pool: vi,
    LpAccount: bi,
    Vault: Ai,
    pTON: ws
  },
  Oy = {
    [J.v1]: Iy,
    [J.v2_1]: Ry,
    [J.v2_2]: By
  },
  Ny = {
    [kt.v1]: bs,
    [kt.v2_1]: ws
  };
class Fy extends Ja {
  constructor(t) {
    super();
    p(this, "TonAddress", "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c");
    p(this, "jettonAddress");
    p(this, "REFERRAL_ADDRESS");
    p(this, "REFERRAL_PERCENT", 1);
    p(this, "stonApiClient", new Cy);
    p(this, "client", new f.TonClient({
      endpoint: "https://toncenter.com/api/v2/jsonRPC"
    }));
    p(this, "FEES", {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: new F(0),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: new F(0)
    });
    p(this, "tradeStateControls", this.getTradeInputStateControls({
      getFees: () => this.fees,
      getSellInfo: this.getSellInfo.bind(this),
      getBuyInfo: this.getBuyInfo.bind(this)
    }));
    p(this, "getWaitForBuyStatus", () => De(this.getTradeTransactionStatus.bind(this), () => {}, 12e3));
    p(this, "getWaitForSellStatus", () => De(this.getTradeTransactionStatus.bind(this), () => {}, 12e3));
    this.jettonAddress = t, this.REFERRAL_ADDRESS = Mr().public.STONFI_REFERRAL_ADDRESS
  }
  async getRouter(t) {
    const s = this.useCachedKeys("routersInfo"),
      n = s.get(t);
    if (n) return k(n);
    const o = await B(async () => await this.stonApiClient.getRouter(t))();
    if (!E(o)) return o;
    const {
      routerInstance: a
    } = this.getRouterAndProxyTon(o.data);
    return this.FEES.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE = A(a.gasConstants.swapTonToJetton.forwardGasAmount), this.FEES.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE = A(a.gasConstants.swapJettonToTon.forwardGasAmount), s.set(t, o.data), k(o.data)
  }
  getRouterAndProxyTon(t) {
    const s = (() => {
        const d = "v2_2",
          l = ["v2_1", "v2_2"],
          c = `v${t.majorVersion}_${t.minorVersion}`;
        return l.includes(c) ? c : d
      })(),
      n = Oy[s].Router,
      o = this.client.open(n.create(t.address)),
      a = (() => {
        const d = "v2_1",
          l = ["v2_1"],
          [c, m] = t.ptonVersion.split("."),
          h = `v${c}_${m}`;
        return l.includes(h) ? h : d
      })(),
      i = Ny[a].create(t.ptonMasterAddress);
    return {
      routerInstance: n,
      router: o,
      proxyTon: i
    }
  }
  async getTradeTransactionStatus(t) {
    const s = await B(async () => await this.ta.events.getEvent(t.transactionHash))();
    if (!E(s)) return $();
    if (s.data.inProgress) return $();
    const n = s.data.actions.find(o => {
      var a, i, d;
      return o.type === "JettonSwap" && ((d = ((a = o.JettonSwap) == null ? void 0 : a.jettonMasterIn) || ((i = o.JettonSwap) == null ? void 0 : i.jettonMasterOut)) == null ? void 0 : d.address.equals(O.Address.parseFriendly(t.jettonAddress).address))
    });
    return !n || n.status !== "ok" || s.data.actions.find(o => o.status !== "ok") ? k(!1) : k(!0)
  }
  async getBuyInfo(t) {
    var l, c, m;
    const s = await B(async () => await this.stonApiClient.simulateSwap({
      askAddress: this.jettonAddress,
      offerAddress: this.TonAddress,
      offerUnits: K(t).toString(),
      slippageTolerance: String(this.slippage / 100),
      dexV2: !0,
      referralAddress: this.REFERRAL_ADDRESS,
      referralFeeBps: this.REFERRAL_PERCENT * 100
    }))();
    if (!E(s)) return ((l = s.extra) == null ? void 0 : l.statusCode) === 400 && ((m = (c = s.extra) == null ? void 0 : c.data) == null ? void 0 : m.startsWith("1012")) ? $(this.MEMEPAD_ERRORS.TOO_LOW_AMOUNT) : $("Failed to get sell info");
    const n = await this.getRouter(s.data.routerAddress);
    if (!E(n)) return $("Failed to get router info");
    const o = A(s.data.minAskUnits),
      a = A(s.data.askUnits),
      i = A(s.data.feeUnits),
      d = i.div(o.plus(i)).times(t);
    return k({
      minReceive: o,
      maxReceive: a,
      platformFee: d,
      additionalInfo: {
        routerInfo: n.data
      }
    })
  }
  async getSellInfo(t) {
    var d, l, c;
    const s = await B(async () => await this.stonApiClient.simulateSwap({
      askAddress: this.TonAddress,
      offerAddress: this.jettonAddress,
      offerUnits: K(t).toString(),
      slippageTolerance: String(this.slippage / 100),
      dexV2: !0,
      referralAddress: this.REFERRAL_ADDRESS,
      referralFeeBps: this.REFERRAL_PERCENT * 100
    }))();
    if (!E(s)) return ((d = s.extra) == null ? void 0 : d.statusCode) === 400 && ((c = (l = s.extra) == null ? void 0 : l.data) == null ? void 0 : c.startsWith("1012")) ? $(this.MEMEPAD_ERRORS.TOO_LOW_AMOUNT) : $("Failed to get sell info");
    const n = await this.getRouter(s.data.routerAddress);
    if (!E(n)) return $("Failed to get router info");
    const o = A(s.data.minAskUnits),
      a = A(s.data.askUnits),
      i = A(s.data.feeUnits);
    return k({
      minReceive: o,
      maxReceive: a,
      platformFee: i,
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
    const t = await B(async () => await this.stonApiClient.getWalletAsset({
      walletAddress: this.mustGetUserWalletAddress().toString(),
      assetAddress: this.jettonAddress
    }))();
    return E(t) ? t.data.balance === void 0 ? k(new F(0)) : k(A(t.data.balance)) : $("Failed to get balance")
  }
  async buyJetton(t, s) {
    const n = this.mustGetUserWalletAddress(),
      {
        router: o,
        proxyTon: a
      } = this.getRouterAndProxyTon(s.additionalInfo.routerInfo),
      i = {
        userWalletAddress: n,
        proxyTon: a,
        offerAmount: K(t),
        askJettonAddress: this.jettonAddress,
        minAskAmount: K(s.minReceive),
        queryId: void 0,
        referralAddress: this.REFERRAL_ADDRESS,
        referralValue: this.REFERRAL_PERCENT * 100
      },
      d = this.getTonConnectSender();
    return await B(async () => (await o.sendSwapTonToJetton(d, i), (await d.getResult()).hash))()
  }
  async sellJetton(t, s) {
    const n = this.mustGetUserWalletAddress(),
      {
        router: o,
        proxyTon: a
      } = this.getRouterAndProxyTon(s.additionalInfo.routerInfo),
      i = {
        userWalletAddress: n,
        offerJettonAddress: this.jettonAddress,
        offerAmount: K(t),
        minAskAmount: K(s.minReceive),
        proxyTon: a,
        queryId: void 0,
        referralAddress: this.REFERRAL_ADDRESS,
        referralValue: this.REFERRAL_PERCENT * 100
      },
      d = this.getTonConnectSender();
    return await B(async () => (await o.sendSwapJettonToTon(d, i), (await d.getResult()).hash))()
  }
}
const jo = () => new ff,
  Dy = r => new yf(r),
  My = r => new Fy(r),
  Ky = () => ({
    defaultManagementSdk: jo(),
    getManagementSdk: () => jo(),
    getBeforeDexTradingSdk: n => Dy(n),
    getDexTradingSdk: n => My(n)
  });
export {
  Uy as _, Ky as u
};