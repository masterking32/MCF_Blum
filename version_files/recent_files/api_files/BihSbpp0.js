var lr = Object.defineProperty;
var mr = (r, e, t) => e in r ? lr(r, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : r[e] = t;
var u = (r, e, t) => mr(r, typeof e != "symbol" ? e + "" : e, t);
import {
  d as rt,
  a9 as dr,
  h as ur,
  ac as Rs,
  o as ge,
  N as Fe,
  e as Q,
  C as It,
  Y as Ns,
  bf as Me,
  br as hr,
  H as yr,
  x as Is,
  bX as fr,
  aG as gr,
  ce as Le,
  n as Lt,
  ag as ue,
  G as Wt,
  f as Kt,
  A as jt,
  j as ns,
  V as os,
  c as Ft,
  w as _r,
  c0 as br,
  a as le,
  p as vr,
  aP as as,
  t as wr,
  cf as kr,
  a2 as C,
  D as is,
  b as Tr,
  cg as je,
  ch as We,
  ci as $e,
  bA as j,
  cj as fe,
  ck as Ar,
  cl as Sr,
  cm as cs,
  cn as A,
  co as nt,
  cp as K,
  ab as q,
  a6 as x,
  cq as U,
  cr as Fs,
  b6 as Ze,
  bo as Ce,
  cs as qr,
  ct as jr,
  cu as Er,
  aN as $r,
  bd as Cr,
  a4 as xe,
  cd as xs,
  cv as Xe,
  cw as Br
} from "./CkAWtTNJ.js";
import {
  _ as Pr
} from "./_0AndDZn.js";
import {
  B as Rr
} from "./CCvVEOMv.js";
import {
  _ as Nr
} from "./BSze9QjK.js";
import {
  _ as Ir
} from "./KNwHMxPM.js";
import {
  p as Fr,
  r as xr,
  s as Or,
  c as Ue,
  d as Ht,
  e as ot,
  g as Mr
} from "./DaRf-u4s.js";
import {
  d as Os
} from "./BXNQ_Pz4.js";
const uo = rt({
    __name: "TopUpButton",
    props: {
      jettonAddress: {},
      jettonShortname: {},
      details: {},
      inputValue: {},
      valueBalance: {},
      source: {},
      flowType: {}
    },
    setup(r) {
      const e = r,
        t = dr(),
        s = ur().$webApp;

      function n(...i) {
        return i.includes(s.platform)
      }
      const o = () => {
          t.memepad.memepadClickTopupButton({
            flowType: e.flowType,
            source: e.source,
            jettonShortname: e.jettonShortname,
            jettonAddress: e.jettonAddress,
            reason: e.details
          });
          const i = Me().tonConnectUI.value,
            g = (i.walletInfo || i.wallet).universalLink;
          if (hr(g)) {
            const d = "https://t.me/wallet/start?startapp=main-rc__a0646df863";
            n("ios", "weba", "android", "tdesktop", "webk") ? s.openTelegramLink(d) : s.openLink(d)
          } else s.openLink(g)
        },
        a = yr(() => t.memepad.memepadShowTopupButton({
          flowType: e.flowType,
          balance: e.valueBalance,
          value: e.inputValue,
          source: e.source
        }), 1e3).debouncedFunction;
      return Rs(() => {
        a()
      }), (i, l) => {
        const g = Is;
        return ge(), Fe(g, {
          label: ("t" in i ? i.t : Q(It))("memepad.top_up_wallet_button"),
          fill: "",
          size: Q(Ns).LARGE,
          onClick: o
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Ur = rt({
    __name: "StateButtonWrapper",
    props: {
      forceLoading: {
        type: Boolean,
        default: !1
      },
      buttonSize: {
        default: Ns.LARGE
      }
    },
    setup(r) {
      const e = fr().status,
        t = gr();
      return (s, n) => {
        const o = Is,
          a = Pr;
        return Q(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : Q(Le)).DISCONNECTED ? (ge(), Fe(o, {
          key: 0,
          label: ("t" in s ? s.t : Q(It))("wallet.connect.btn"),
          fill: "",
          size: s.buttonSize,
          onClick: n[0] || (n[0] = i => Q(t).runConnectionFlow())
        }, null, 8, ["label", "size"])) : Q(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : Q(Le)).MUST_RECONNECT ? (ge(), Fe(o, {
          key: 1,
          label: ("t" in s ? s.t : Q(It))("wallet.reconnect.btn"),
          fill: "",
          size: s.buttonSize,
          onClick: n[1] || (n[1] = i => Q(t).runConnectionFlow())
        }, null, 8, ["label", "size"])) : Q(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : Q(Le)).LOADING || s.forceLoading ? (ge(), Fe(a, {
          key: 2,
          class: Lt(["skeleton", `is-${s.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : Q(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : Q(Le)).CONNECTED ? ue(s.$slots, "default", {
          key: 3
        }, void 0, !0) : Wt("", !0)
      }
    }
  }),
  ho = Kt(Ur, [
    ["__scopeId", "data-v-1e641cbd"]
  ]),
  Dr = rt({
    __name: "Input",
    props: {
      modelValue: {},
      postfix: {},
      modifier: {
        type: Function
      },
      centered: {
        type: Boolean
      }
    },
    emits: ["update:modelValue", "blur"],
    setup(r, {
      expose: e,
      emit: t
    }) {
      const s = r,
        n = t,
        o = jt("el"),
        a = jt("input"),
        i = jt("hiddenInput"),
        l = () => {
          kr(() => {
            a.value && (a.value.style.width = "", a.value.style.width = a.value.scrollWidth + "px")
          })
        },
        g = ns({
          get: () => s.modelValue,
          set: w => {
            if (a.value && a.value.value !== s.modelValue) {
              const E = [...a.value.value].findIndex((L, Y) => L !== s.modelValue[Y]);
              E !== -1 && a.value.value[E] === "," && (w = w.slice(0, E) + "." + w.slice(E))
            }
            w = (s.modifier || (E => E))(w), a.value && a.value.value !== w && (a.value.value = w), n("update:modelValue", w)
          }
        });
      os(() => s.modelValue, l), os(() => a.value, l);
      const d = ns(() => {
          if (!o.value || !a.value || !i.value) return;
          const w = parseInt(getComputedStyle(i.value).getPropertyValue("font-size")),
            I = parseInt(getComputedStyle(i.value).getPropertyValue("line-height")),
            E = `${s.modelValue} ${s.postfix}`,
            L = o.value.offsetWidth,
            N = (se => {
              const ne = document.createElement("canvas").getContext("2d");
              return ne ? (ne.font = `700 ${w}px RoobertPro`, ne.measureText(se).width) : void 0
            })(E.trim());
          if (!N) return;
          const Z = Math.min(L / N * .75, 1);
          return {
            fontSize: `${w*Z}px`,
            lineHeight: `${I*Z}px`
          }
        }),
        k = () => {
          var w;
          (w = i.value) == null || w.focus()
        };
      Rs(() => {
        k()
      }), e({
        focusOnInput: k
      });
      const P = () => {
          setTimeout(() => {
            var w;
            (w = a.value) == null || w.focus()
          }, 100)
        },
        R = async () => {
          const w = new FontFace("RoobertPro", `url(${Rr})`, {
            weight: "700"
          });
          await Promise.all([document.fonts.ready, w.load()]), document.fonts.add(w)
        };
      return (() => {
        R()
      })(), (w, I) => (ge(), Ft("label", {
        ref: "el",
        class: Lt(["memepad-jetton-actions-controls-input", {
          "is-centered": w.centered
        }])
      }, [_r(le("input", {
        ref: "input",
        "onUpdate:modelValue": I[0] || (I[0] = E => vr(g) ? g.value = E : null),
        type: "text",
        inputmode: "decimal",
        style: as(Q(d)),
        onBlur: I[1] || (I[1] = E => n("blur"))
      }, null, 36), [
        [br, Q(g)]
      ]), le("input", {
        ref: "hiddenInput",
        type: "text",
        inputmode: "decimal",
        class: "hidden",
        onFocus: P
      }, null, 544), w.postfix ? (ge(), Ft("span", {
        key: 0,
        class: "label",
        style: as(Q(d))
      }, wr(w.postfix), 5)) : Wt("", !0)], 2))
    }
  }),
  yo = Kt(Dr, [
    ["__scopeId", "data-v-44264923"]
  ]),
  fo = r => new C(r.replaceAll(",", "") || "0"),
  Gr = {
    class: "top"
  },
  Jr = {
    class: "center"
  },
  Lr = {
    class: "right"
  },
  Wr = {
    class: "inner"
  },
  Kr = {
    class: "action"
  },
  Hr = {
    key: 0,
    class: "helpers"
  },
  zr = rt({
    __name: "Modal",
    setup(r) {
      return (e, t) => {
        const s = Nr,
          n = Ir;
        return ge(), Fe(n, {
          class: "memepad-jetton-modal"
        }, {
          default: is(() => [ue(e.$slots, "top", {}, () => [le("div", Gr, [t[0] || (t[0] = le("div", {
            class: "left"
          }, null, -1)), le("div", Jr, [ue(e.$slots, "top-center", {}, void 0, !0)]), le("div", Lr, [ue(e.$slots, "top-right", {}, void 0, !0)])])], !0), ue(e.$slots, "default", {}, () => [le("div", Wr, [ue(e.$slots, "inner", {}, void 0, !0)])], !0), Tr(s, {
            "ignore-tabs": "",
            "hide-space": ""
          }, {
            default: is(() => [le("div", {
              class: Lt(["memepad-jetton-modal-bottom", {
                "with-helpers": e.$slots["bottom-helpers"]
              }])
            }, [le("div", Kr, [ue(e.$slots, "bottom-action", {}, void 0, !0)]), e.$slots["bottom-helpers"] ? (ge(), Ft("div", Hr, [ue(e.$slots, "bottom-helpers", {}, void 0, !0)])) : Wt("", !0)], 2)]),
            _: 3
          })]),
          _: 3
        })
      }
    }
  }),
  go = Kt(zr, [
    ["__scopeId", "data-v-192a6d56"]
  ]);
class ae extends Error {
  constructor(e, t) {
    super(e, t), this.message = `${ae.prefix} ${this.constructor.name}${this.info?": "+this.info:""}${e?`
`+e:""}`, Object.setPrototypeOf(this, ae.prototype)
  }
  get info() {
    return ""
  }
}
ae.prefix = "[TON_CONNECT_SDK_ERROR]";
class zt extends ae {
  get info() {
    return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, zt.prototype)
  }
}
class Vt extends ae {
  get info() {
    return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Vt.prototype)
  }
}
class at extends ae {
  get info() {
    return "User rejects the action in the wallet."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, at.prototype)
  }
}
class it extends ae {
  get info() {
    return "Request to the wallet contains errors."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, it.prototype)
  }
}
class ct extends ae {
  get info() {
    return "App tries to send rpc request to the injected wallet while not connected."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, ct.prototype)
  }
}
class pt extends ae {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, pt.prototype)
  }
}
je.UNKNOWN_ERROR + "", je.USER_REJECTS_ERROR + "", je.BAD_REQUEST_ERROR + "", je.UNKNOWN_APP_ERROR + "", je.MANIFEST_NOT_FOUND_ERROR + "", je.MANIFEST_CONTENT_ERROR + "";
We.UNKNOWN_ERROR + "", We.USER_REJECTS_ERROR + "", We.BAD_REQUEST_ERROR + "", We.UNKNOWN_APP_ERROR + "";
for (let r = 0; r <= 255; r++) {
  let e = r.toString(16);
  e.length < 2 && (e = "0" + e)
}
var J = {},
  lt, Yt = $e && $e.__importDefault || function(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  };
Object.defineProperty(J, "__esModule", {
  value: !0
});
var Ms = J.Api = Us = J.TonApiClient = J.ContentType = J.PoolImplementationType = J.TrustType = J.JettonVerificationType = J.BouncePhaseType = J.ComputeSkipReason = J.AccStatusChange = J.TransactionType = lt = J.AccountStatus = void 0,
  ps;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(ps || (lt = J.AccountStatus = ps = {}));
var ls;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(ls || (J.TransactionType = ls = {}));
var ms;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(ms || (J.AccStatusChange = ms = {}));
var ds;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(ds || (J.ComputeSkipReason = ds = {}));
var us;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(us || (J.BouncePhaseType = us = {}));
var hs;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(hs || (J.JettonVerificationType = hs = {}));
var ys;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(ys || (J.TrustType = ys = {}));
var fs;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(fs || (J.PoolImplementationType = fs = {}));
var he;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(he || (J.ContentType = he = {}));
const xt = j,
  Vr = Yt(Fr),
  Yr = Yt(xr),
  Qr = Yt(Or),
  Zr = r => (0, Vr.default)(r, (e, t, s) => {
    if (typeof t == "number") {
      const n = s.source;
      return Number.isSafeInteger(t) || /[\.eE]/.test(n) ? t : BigInt(n)
    }
    return t
  }),
  Et = r => (0, Qr.default)(r, (e, t) => typeof t == "bigint" ? (0, Yr.default)(t.toString()) : t);
class Xr {
  constructor(e = {}) {
    u(this, "baseUrl", "https://tonapi.io");
    u(this, "securityData", null);
    u(this, "securityWorker");
    u(this, "abortControllers", new Map);
    u(this, "customFetch", (...e) => fetch(...e));
    u(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    u(this, "setSecurityData", e => {
      this.securityData = e
    });
    u(this, "contentFormatters", {
      [he.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? Et(e) : e,
      [he.Text]: e => e !== null && typeof e != "string" ? Et(e) : e,
      [he.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? Et(n) : `${n}`), t
      }, new FormData),
      [he.UrlEncoded]: e => this.toQueryString(e)
    });
    u(this, "createAbortSignal", e => {
      if (this.abortControllers.has(e)) {
        const s = this.abortControllers.get(e);
        return s ? s.signal : void 0
      }
      const t = new AbortController;
      return this.abortControllers.set(e, t), t.signal
    });
    u(this, "abortRequest", e => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e))
    });
    u(this, "request", async ({
      body: e,
      secure: t,
      path: s,
      type: n,
      query: o,
      format: a,
      baseUrl: i,
      cancelToken: l,
      ...g
    }) => {
      const d = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        k = this.mergeRequestParams(g, d),
        P = o && this.toQueryString(o),
        R = n ?? he.Json,
        F = this.contentFormatters[R],
        w = a || k.format;
      return this.customFetch(`${i||this.baseUrl||""}${s}${P?`?${P}`:""}`, {
        ...k,
        headers: {
          ...k.headers || {},
          ...R && R !== he.FormData ? {
            "Content-Type": R
          } : {}
        },
        signal: (l ? this.createAbortSignal(l) : k.signal) || null,
        body: typeof e > "u" || e === null ? null : F(e)
      }).then(async I => {
        const E = I.clone();
        E.data = null, E.error = null;
        const L = w === "json" ? "text" : w,
          Y = L ? await I[L]().then(N => (E.ok ? E.data = w === "json" ? Zr(N) : N : E.error = N, E)).catch(N => (E.error = N, E)) : E;
        if (l && this.abortControllers.delete(l), !I.ok) throw Y;
        return Y.data
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
var Us = J.TonApiClient = Xr;
const Ds = {
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

function en(r) {
  return r.replace(/(_\w)/g, e => {
    var t;
    return ((t = e[1]) == null ? void 0 : t.toUpperCase()) ?? ""
  })
}

function tn(r) {
  return r.replace(/([A-Z])/g, e => `_${e.toLowerCase()}`)
}

function $t(r) {
  return xt.Cell.fromBase64(fe.from(r, "hex").toString("base64"))
}

function sn(r) {
  return r.startsWith("-") ? BigInt(r.slice(1)) * -1n : BigInt(r)
}

function c(r, e) {
  const t = e && e.$ref,
    s = t ? Ds[t] : e;
  if (Array.isArray(r)) {
    const n = s && s.items;
    return r.map(o => c(o, n))
  } else if (s) {
    if (s.type === "string") {
      if (s.format === "address") return xt.Address.parse(r);
      if (s.format === "cell") return r && $t(r);
      if (s.format === "cell-base64") return r && xt.Cell.fromBase64(r)
    }
    if (s.type === "integer") return s["x-js-format"] === "bigint" ? BigInt(r) : Number(r);
    if (s.type === "object" && s.format === "tuple-item") switch (r.type) {
      case "tuple":
        const n = s.properties.tuple.items;
        return {
          type: "tuple", items: r.tuple.map(o => c(o, n))
        };
      case "num":
        return {
          type: "int", value: sn(r.num)
        };
      case "cell":
        return {
          type: "cell", cell: $t(r.cell)
        };
      case "slice":
        return {
          type: "slice", slice: $t(r.slice)
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
      i = en(o);
    return n[i] = c(r[o], a), n
  }, {}) : r
}

function X(r, e) {
  const t = e && e.$ref,
    s = t ? Ds[t] : e;
  if (Array.isArray(r)) {
    const n = s && s.items;
    return r.map(o => X(o, n))
  } else if (s && s.type === "string") {
    if (s.format === "address") return r.toRawString();
    if (s.format === "cell") return r.toBoc().toString("hex");
    if (s.format === "cell-base64") return r.toBoc().toString("base64")
  }
  return r !== null && typeof r == "object" ? Object.keys(r).reduce((n, o) => {
    const a = (s == null ? void 0 : s.properties) && s.properties[o],
      i = tn(o);
    return n[i] = X(r[o], a), n
  }, {}) : r
}
let rn = class {
  constructor(e) {
    u(this, "http");
    u(this, "utilities", {
      status: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/status",
          method: "GET",
          format: "json",
          ...e
        });
        return c(t, {
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
        return c(n, {
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
    u(this, "blockchain", {
      getReducedBlockchainBlocks: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/blockchain/reduced/blocks",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(s, {
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
        return c(s, {
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
        return c(s, {
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
        return c(s, {
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
        return c(s, {
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
        return c(s, {
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
        return c(s, {
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
        return c(s, {
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
        return c(s, {
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
        return c(s, {
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
        return c(t, {
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
        return c(t, {
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
        return c(n, {
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
        return c(o, {
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
        return c(a, {
          $ref: "#/components/schemas/MethodExecutionResult"
        })
      },
      sendBlockchainMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/blockchain/message",
          method: "POST",
          body: X(e, {
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
        return c(s)
      },
      getBlockchainConfig: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/blockchain/config",
          method: "GET",
          format: "json",
          ...e
        });
        return c(t, {
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
        return c(t, {
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
        return c(n, {
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
        return c(t, {
          $ref: "#/components/schemas/ServiceStatus"
        })
      }
    });
    u(this, "accounts", {
      getAccounts: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: "/v2/accounts/_bulk",
          method: "POST",
          query: t,
          body: X(e, {
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
        return c(n, {
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
        return c(n, {
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
        return c(n, {
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
        return c(o, {
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
        return c(i, {
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
        return c(o, {
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
        return c(i, {
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
        return c(o, {
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
        return c(o, {
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
        return c(a, {
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
        return c(o, {
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
        return c(n, {
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
        return c(n)
      },
      searchAccounts: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/accounts/search",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(s, {
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
        return c(o, {
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
        return c(n, {
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
        return c(n, {
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
        return c(o, {
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
        return c(n, {
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
    u(this, "nft", {
      getAccountNftHistory: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/nfts/history`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return c(o, {
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
        return c(s, {
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
        return c(n, {
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
        return c(o, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getNftItemsByAddresses: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/nfts/_bulk",
          method: "POST",
          body: X(e, {
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
        return c(s, {
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
        return c(n, {
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
        return c(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      }
    });
    u(this, "dns", {
      getDnsInfo: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/dns/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(s, {
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
        return c(s, {
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
        return c(s, {
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
        return c(s, {
          $ref: "#/components/schemas/Auctions"
        })
      }
    });
    u(this, "traces", {
      getTrace: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/traces/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(s, {
          $ref: "#/components/schemas/Trace"
        })
      }
    });
    u(this, "events", {
      getEvent: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/events/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(s, {
          $ref: "#/components/schemas/Event"
        })
      }
    });
    u(this, "inscriptions", {
      getAccountInscriptions: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/experimental/accounts/${n}/inscriptions`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return c(o, {
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
        return c(o, {
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
        return c(a, {
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
        return c(s, {
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
    u(this, "jettons", {
      getJettons: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/jettons",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(s, {
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
        return c(n, {
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
        return c(o, {
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
        return c(a, {
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
        return c(s, {
          $ref: "#/components/schemas/Event"
        })
      }
    });
    u(this, "staking", {
      getAccountNominatorsPools: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/staking/nominator/${s}/pools`,
            method: "GET",
            format: "json",
            ...t
          });
        return c(n, {
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
        return c(n, {
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
        return c(n, {
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
        return c(s, {
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
    u(this, "storage", {
      getStorageProviders: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/storage/providers",
          method: "GET",
          format: "json",
          ...e
        });
        return c(t, {
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
    u(this, "rates", {
      getRates: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/rates",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(s, {
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
        return c(s, {
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
        return c(t, {
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
    u(this, "connect", {
      getTonConnectPayload: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/tonconnect/payload",
          method: "GET",
          format: "json",
          ...e
        });
        return c(t, {
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
          body: X(e, {
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
        return c(s, {
          $ref: "#/components/schemas/AccountInfoByStateInit"
        })
      }
    });
    u(this, "wallet", {
      getWalletBackup: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/wallet/backup",
          method: "GET",
          format: "json",
          ...e
        });
        return c(t, {
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
          body: X(e),
          ...t
        });
        return c(s)
      },
      tonConnectProof: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/auth/proof",
          method: "POST",
          body: X(e, {
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
        return c(s, {
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
        return c(n, {
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
        return c(s, {
          $ref: "#/components/schemas/Accounts"
        })
      }
    });
    u(this, "gasless", {
      gaslessConfig: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/gasless/config",
          method: "GET",
          format: "json",
          ...e
        });
        return c(t, {
          $ref: "#/components/schemas/GaslessConfig"
        })
      },
      gaslessEstimate: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/gasless/estimate/${n}`,
            method: "POST",
            body: X(t, {
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
        return c(o, {
          $ref: "#/components/schemas/SignRawParams"
        })
      },
      gaslessSend: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/gasless/send",
          method: "POST",
          body: X(e, {
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
        return c(s)
      }
    });
    u(this, "liteServer", {
      getRawMasterchainInfo: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/liteserver/get_masterchain_info",
          method: "GET",
          format: "json",
          ...e
        });
        return c(t, {
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
        return c(s, {
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
        return c(t, {
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
        return c(s, {
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
        return c(s, {
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
        return c(n, {
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
          body: X(e, {
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
        return c(s, {
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
        return c(o, {
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
        return c(n, {
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
        return c(s, {
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
        return c(o, {
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
        return c(n, {
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
        return c(s, {
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
        return c(n, {
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
        return c(s, {
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
        return c(t, {
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
    u(this, "multisig", {
      getMultisigAccount: async (e, t = {}) => {
        const s = e.toRawString(),
          n = await this.http.request({
            path: `/v2/multisig/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return c(n, {
          $ref: "#/components/schemas/Multisig"
        })
      }
    });
    u(this, "emulation", {
      decodeMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/message/decode",
          method: "POST",
          body: X(e, {
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
        return c(s, {
          $ref: "#/components/schemas/DecodedMessage"
        })
      },
      emulateMessageToEvent: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: "/v2/events/emulate",
          method: "POST",
          query: t,
          body: X(e, {
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
        return c(n, {
          $ref: "#/components/schemas/Event"
        })
      },
      emulateMessageToTrace: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: "/v2/traces/emulate",
          method: "POST",
          query: t,
          body: X(e, {
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
        return c(n, {
          $ref: "#/components/schemas/Trace"
        })
      },
      emulateMessageToWallet: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/emulate",
          method: "POST",
          body: X(e, {
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
        return c(s, {
          $ref: "#/components/schemas/MessageConsequences"
        })
      },
      emulateMessageToAccountEvent: async (e, t, s, n = {}) => {
        const o = e.toRawString(),
          a = await this.http.request({
            path: `/v2/accounts/${o}/events/emulate`,
            method: "POST",
            query: s,
            body: X(t, {
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
        return c(a, {
          $ref: "#/components/schemas/AccountEvent"
        })
      }
    });
    this.http = e
  }
};
Ms = J.Api = rn;
var nn = class {
  constructor(r) {
    this.tonapi = r
  }
  open(r) {
    return j.openContract(r, e => Ot(this.tonapi, e.address, e.init))
  }
  provider(r, e) {
    return Ot(this.tonapi, r, e || null)
  }
};

function Ot(r, e, t) {
  return {
    async getState() {
      const s = await r.blockchain.getBlockchainRawAccount(e).catch(async a => {
          const i = await a.json();
          if (i.error === "entity not found") return {
            address: e,
            balance: 0n,
            lastTransactionLt: void 0,
            status: lt.Uninit,
            storage: {
              usedCells: 1,
              usedBits: 95,
              usedPublicCells: 0,
              lastPaid: Math.floor(new Date().getTime() / 1e3),
              duePayment: 0n
            }
          };
          throw new Error("Account request failed: ", i.error)
        }),
        n = s.lastTransactionHash !== void 0 && s.lastTransactionLt !== void 0 ? {
          lt: s.lastTransactionLt,
          hash: Ar.from(s.lastTransactionHash, "base64")
        } : null,
        o = {
          active: a => {
            var i, l;
            return {
              type: "active",
              code: ((i = a.code) == null ? void 0 : i.toBoc()) ?? null,
              data: ((l = a.data) == null ? void 0 : l.toBoc()) ?? null
            }
          },
          uninit: () => ({
            type: "uninit"
          }),
          nonexist: () => ({
            type: "uninit"
          }),
          frozen: () => {
            throw new Error("Frozen accounts are not supported by TonApi")
          }
        };
      return {
        balance: s.balance,
        last: n,
        state: o[s.status](s)
      }
    },
    async get(s, n) {
      if (n.some(a => a.type === "tuple")) throw new Error("Tuples as get parameters are not supported by tonapi");
      const o = await r.blockchain.execGetMethodForBlockchainAccount(e, s, {
        args: n.map(on)
      });
      return {
        stack: new j.TupleReader(o.stack)
      }
    },
    async external(s) {
      let n = null;
      t && (await r.accounts.getAccount(e)).status !== "active" && (n = t);
      const o = j.external({
          to: e,
          init: n ? {
            code: n.code,
            data: n.data
          } : null,
          body: s
        }),
        a = j.beginCell().store(j.storeMessage(o)).endCell();
      await r.blockchain.sendBlockchainMessage({
        boc: a
      })
    },
    async internal(s, n) {
      let o = null;
      t && (await r.accounts.getAccount(e)).status !== "active" && (o = t);
      let a = !0;
      n.bounce !== null && n.bounce !== void 0 && (a = n.bounce);
      let i;
      typeof n.value == "string" ? i = j.toNano(n.value) : i = n.value;
      let l = null;
      typeof n.body == "string" ? l = j.comment(n.body) : n.body && (l = n.body), await s.send({
        to: e,
        value: i,
        bounce: a,
        sendMode: n.sendMode,
        init: o,
        body: l
      })
    },
    open(s) {
      return j.openContract(s, n => Ot(r, n.address, n.init))
    },
    getTransactions(s, n, o, a) {
      return console.info("hash param in getTransactions action ignored, beacause not supported", o.toString("hex")), r.blockchain.getBlockchainAccountTransactions(s, {
        before_lt: n + 1n,
        limit: a
      }).then(({
        transactions: i
      }) => i.map(l => j.loadTransaction(l.raw.asSlice())))
    }
  }
}

function on(r) {
  switch (r.type) {
    case "int":
      return "0x" + r.value.toString(16);
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
var Te = {};
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.defer = Gs = Te.internalOnchainContentToCell = Te.sleep = void 0;
const ie = j,
  an = Sr();

function cn(r) {
  return new Promise(e => {
    setTimeout(() => e(), r)
  })
}
Te.sleep = cn;

function pn(r) {
  const e = ie.Dictionary.empty(ie.Dictionary.Keys.Buffer(32), ie.Dictionary.Values.Cell());
  for (const t in r) {
    if (r[t] === void 0) continue;
    const s = (0, ie.beginCell)();
    if (t === "image_data") {
      const n = ie.Dictionary.empty(ie.Dictionary.Keys.Uint(32), ie.Dictionary.Values.Cell()),
        o = fe.from(r[t], "base64");
      for (let a = 0; a * 127 < o.length; a++) n.set(a, (0, ie.beginCell)().storeBuffer(o.subarray(a * 127, (a + 1) * 127)).endCell());
      s.storeUint(1, 8).storeDict(n).endCell()
    } else s.storeUint(0, 8).storeStringTail(r[t].toString());
    e.set((0, an.sha256_sync)(t), s.endCell())
  }
  return (0, ie.beginCell)().storeUint(0, 8).storeDict(e).endCell()
}
var Gs = Te.internalOnchainContentToCell = pn;

function ln(r) {
  return (...e) => r(...e)
}
Te.defer = ln;

function M(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r
}
var mn = 0;

function me(r) {
  return "__private_" + mn++ + "_" + r
}
var dn = function() {
    function r(t) {
      this.api = void 0, this.adapter = void 0;
      var s = new Us(t);
      this.api = new Ms(s), this.adapter = new nn(this.api)
    }
    var e = r.prototype;
    return e.open = function(t) {
      return this.adapter.open(t)
    }, e.isContractDeployed = function(t) {
      try {
        return Promise.resolve(this.api.accounts.getAccount(t)).then(function(s) {
          return s.status === lt.Active
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, r
  }(),
  V = function() {};
V.deployGas = j.toNano(.02), V.initialGas = j.toNano(.015), V.buyGas = j.toNano(.08), V.sellNotificationGas = j.toNano(.02), V.sellGas = j.toNano(.05), V.unlockGas = j.toNano(.05), V.buyForward = j.toNano(.04);
var Js = function() {};
Js.buy = 2943683892;
var Ls = function() {
    function r(t, s) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = s
    }
    r.createFromAddress = function(t) {
      return new r(t)
    };
    var e = r.prototype;
    return e.getWalletAddress = function(t, s) {
      try {
        return Promise.resolve(t.get("get_wallet_address", [{
          type: "slice",
          cell: j.beginCell().storeAddress(s).endCell()
        }])).then(function(n) {
          return n.stack.readAddress()
        })
      } catch (n) {
        return Promise.reject(n)
      }
    }, e.getJettonData = function(t) {
      try {
        return Promise.resolve(t.get("get_jetton_data", [])).then(function(s) {
          return {
            totalSupply: s.stack.readBigNumber(),
            mintable: s.stack.readBoolean(),
            adminAddress: s.stack.readAddressOpt(),
            content: s.stack.readCell(),
            walletCode: s.stack.readCell()
          }
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getTotalSupply = function(t) {
      try {
        return Promise.resolve(this.getJettonData(t)).then(function(s) {
          return s.totalSupply
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.sendBuy = function(t, s, n, o, a, i, l) {
      a === void 0 && (a = null), i === void 0 && (i = null), l === void 0 && (l = 0);
      try {
        return Promise.resolve(t.internal(s, {
          value: n + V.buyGas,
          body: j.beginCell().storeUint(Js.buy, 32).storeUint(l, 64).storeCoins(o).storeAddress(a).storeMaybeRef(i).endCell()
        })).then(function() {})
      } catch (g) {
        return Promise.reject(g)
      }
    }, r
  }(),
  et = function() {};
et.sell = 1948989144, et.unlock = 4043133115;
var Mt = function() {
    function r(t, s) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = s
    }
    r.createFromAddress = function(t) {
      return new r(t)
    }, r.sellMessage = function(t, s, n, o) {
      return n === void 0 && (n = null), o === void 0 && (o = 0), j.beginCell().storeUint(et.sell, 32).storeUint(o, 64).storeCoins(t).storeCoins(s).storeMaybeRef(n).endCell()
    }, r.unlockMessage = function(t) {
      return t === void 0 && (t = 0), j.beginCell().storeUint(et.unlock, 32).storeUint(t, 64).endCell()
    };
    var e = r.prototype;
    return e.getUnlocked = function(t) {
      try {
        return Promise.resolve(t.getState()).then(function(s) {
          return s.state.type === "active" && Promise.resolve(t.get("get_unlocked", [])).then(function(n) {
            return n.stack.readBoolean()
          })
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.sendSell = function(t, s, n, o, a, i, l) {
      i === void 0 && (i = null), l === void 0 && (l = 0);
      try {
        return Promise.resolve(t.internal(s, {
          sendMode: j.SendMode.PAY_GAS_SEPARATELY,
          body: r.sellMessage(o, a, i, l),
          value: n
        })).then(function() {})
      } catch (g) {
        return Promise.reject(g)
      }
    }, e.sendUnlock = function(t, s, n) {
      n === void 0 && (n = 0);
      try {
        return Promise.resolve(t.internal(s, {
          sendMode: j.SendMode.PAY_GAS_SEPARATELY,
          body: r.unlockMessage(n),
          value: V.unlockGas
        })).then(function() {})
      } catch (o) {
        return Promise.reject(o)
      }
    }, r
  }(),
  Ws = 1000000000000000000n,
  Ut = 800000000000000000n,
  Dt = me("sqrt"),
  Ct = me("f"),
  ce = me("fReverse"),
  Bt = me("fromNano"),
  un = function() {
    function r(t, s) {
      Object.defineProperty(this, Bt, {
        value: gn
      }), Object.defineProperty(this, ce, {
        value: fn
      }), Object.defineProperty(this, Ct, {
        value: yn
      }), Object.defineProperty(this, Dt, {
        value: hn
      }), this.thresholdTons = void 0, this.curveA = void 0, this.thresholdTons = t, this.curveA = s
    }
    var e = r.prototype;
    return e.tonSupply = function(t) {
      return M(this, ce)[ce](t)
    }, e.calculateJettonAmount = function(t, s) {
      var n = M(this, ce)[ce](t);
      return M(this, Ct)[Ct](n + s) - t
    }, e.calculateTonAmount = function(t, s) {
      return M(this, ce)[ce](t) - M(this, ce)[ce](t - s)
    }, e.calculateBuyAmount = function(t, s, n) {
      var o = this.calculateJettonAmount(t, s * (10000n - n) / 10000n);
      return o + t > Ut ? Ut - t : o
    }, e.calculateSellAmount = function(t, s, n) {
      return this.calculateTonAmount(t, s) * (10000n - n) / 10000n
    }, e.calculatePrice = function(t) {
      var s = 1e9,
        n = this.calculateJettonAmount(t, BigInt(s));
      return s / Number(n)
    }, e.calculateMarketCap = function(t) {
      return this.calculatePrice(t) * M(this, Bt)[Bt](Ws)
    }, r
  }();

function hn(r) {
  for (var e = r, t = e + 1n >> 1n; t < e;) t = (e = t) + r / e >> 1n;
  return e
}

function yn(r) {
  if (r == 0n) return 0n;
  var e = 10n ** 9n;
  return M(this, Dt)[Dt](r * e * e) * this.curveA / e
}

function fn(r) {
  if (r == 0n) return 0n;
  var e = 10n ** 9n;
  return r ** 2n * e / this.curveA ** 2n / e
}

function gn(r) {
  return Number(r) / 10 ** 9
}
var Gt, Ks = function() {};
Ks.deployJetton = 3637132459,
  function(r) {
    r[r.STONFI = 0] = "STONFI", r[r.DEDUST = 1] = "DEDUST"
  }(Gt || (Gt = {}));
var gs = function() {
    function r(t, s) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = s
    }
    r.createFromAddress = function(t) {
      return new r(t)
    };
    var e = r.prototype;
    return e.sendDeployJetton = function(t, s, n, o, a, i, l, g, d) {
      g === void 0 && (g = null), d === void 0 && (d = 0);
      try {
        return l === void 0 && (l = 0n), Promise.resolve(t.internal(s, {
          value: n,
          body: j.beginCell().storeUint(Ks.deployJetton, 32).storeUint(d, 64).storeUint(o, 1).storeRef(a).storeBit(i).storeCoins(l).storeMaybeRef(g).endCell()
        })).then(function() {})
      } catch (k) {
        return Promise.reject(k)
      }
    }, e.getConfig = function(t) {
      try {
        return Promise.resolve(t.get("get_config", [])).then(function(s) {
          return {
            admin: s.stack.readAddress(),
            jettonAdmin: s.stack.readAddress(),
            feeRecipient: s.stack.readAddress(),
            curveA: s.stack.readBigNumber(),
            curveTon: s.stack.readBigNumber(),
            deployFee: s.stack.readBigNumber(),
            agentDeployFee: s.stack.readBigNumber(),
            buyFeeBasis: s.stack.readBigNumber(),
            sellFeeBasis: s.stack.readBigNumber(),
            liquidityFee: s.stack.readBigNumber(),
            minterCodeStonFi: s.stack.readCell(),
            minterCodeDeDust: s.stack.readCell(),
            walletCode: s.stack.readCell()
          }
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, r
  }(),
  _n = function(r) {
    try {
      var e, t = this,
        s = {
          send: function(n) {
            return e = n, Promise.resolve()
          }
        };
      return Promise.resolve(r(s)).then(function() {
        var n, o = {
          address: e.to.toString(),
          amount: e.value.toString(),
          stateInit: void 0,
          payload: (n = e.body) == null ? void 0 : n.toBoc().toString("base64")
        };
        return e.init && (o.stateInit = j.beginCell().store(j.storeStateInit(e.init)).endCell().toBoc().toString("base64")), {
          validUntil: Date.now() + 3e5,
          network: M(t, Oe)[Oe] ? cs.TESTNET : cs.MAINNET,
          messages: [o]
        }
      })
    } catch (n) {
      return Promise.reject(n)
    }
  },
  bn = j.toNano(2.5),
  Oe = me("testnet"),
  te = me("tokenomics"),
  pe = me("request"),
  we = me("minterContractFromAddress"),
  Pt = me("walletContractFromAddress"),
  vn = function() {
    function r(t, s, n) {
      s === void 0 && (s = !1), n === void 0 && (n = !1), Object.defineProperty(this, Pt, {
        value: kn
      }), Object.defineProperty(this, we, {
        value: wn
      }), Object.defineProperty(this, pe, {
        value: _n
      }), Object.defineProperty(this, Oe, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, te, {
        writable: !0,
        value: void 0
      }), this.client = void 0, M(this, Oe)[Oe] = s;
      var o = n ? 16000000000000n : 653197264742n,
        a = n ? bn : 1499997865536n;
      M(this, te)[te] = new un(a, o), this.client = new dn({
        baseUrl: s ? "https://testnet.tonapi.io" : "https://tonapi.io",
        apiKey: t
      })
    }
    var e = r.prototype;
    return e.sendDeployJetton = function(t, s, n, o, a, i, l, g) {
      l === void 0 && (l = null), g === void 0 && (g = 0);
      try {
        var d = this.client.open(gs.createFromAddress(s));
        return Promise.resolve(d.getConfig()).then(function(k) {
          var P = k.deployFee + V.deployGas + (i == 0n ? V.initialGas : i + V.buyGas);
          a && (P += k.agentDeployFee);
          var R = Gs(o);
          return Promise.resolve(d.sendDeployJetton(t, P, n, R, a, i, l, g)).then(function() {})
        })
      } catch (k) {
        return Promise.reject(k)
      }
    }, e.sendBuy = function(t, s, n, o, a, i) {
      a === void 0 && (a = null), i === void 0 && (i = 0);
      try {
        return Promise.resolve(M(this, we)[we](s).sendBuy(t, n, o, null, a, i)).then(function() {})
      } catch (l) {
        return Promise.reject(l)
      }
    }, e.sendSell = function(t, s, n, o, a, i) {
      a === void 0 && (a = null), i === void 0 && (i = 0);
      try {
        var l = Mt.createFromAddress(s),
          g = this.client.open(l);
        return Promise.resolve(g.sendSell(t, V.sellGas, n, o, a, i)).then(function() {})
      } catch (d) {
        return Promise.reject(d)
      }
    }, e.sendUnlock = function(t, s, n) {
      n === void 0 && (n = 0);
      try {
        var o = Mt.createFromAddress(s),
          a = this.client.open(o);
        return Promise.resolve(a.sendUnlock(t, n)).then(function() {})
      } catch (i) {
        return Promise.reject(i)
      }
    }, e.getThresholdTons = function() {
      return M(this, te)[te].thresholdTons
    }, e.getTonSupply = function(t) {
      return M(this, te)[te].tonSupply(t)
    }, e.getMaxSupply = function() {
      return Ws
    }, e.getThresholdSupply = function() {
      return Ut
    }, e.getPrice = function(t) {
      return M(this, te)[te].calculatePrice(t)
    }, e.getMarketCap = function(t) {
      return M(this, te)[te].calculateMarketCap(t)
    }, e.getBuyAmount = function(t, s, n) {
      return M(this, te)[te].calculateBuyAmount(t, s, n)
    }, e.getSellAmount = function(t, s, n) {
      return M(this, te)[te].calculateSellAmount(t, s, n)
    }, e.getWalletAddress = function(t, s) {
      try {
        return Promise.resolve(M(this, we)[we](t).getWalletAddress(s))
      } catch (n) {
        return Promise.reject(n)
      }
    }, e.getTotalSupply = function(t) {
      try {
        return Promise.resolve(M(this, we)[we](t).getTotalSupply())
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getUnlocked = function(t) {
      try {
        return Promise.resolve(M(this, Pt)[Pt](t).getUnlocked())
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getDeployJettonRequest = function(t, s, n, o, a, i, l) {
      i === void 0 && (i = null), l === void 0 && (l = 0);
      try {
        var g = this;
        return Promise.resolve(M(g, pe)[pe](function(d) {
          return g.sendDeployJetton(d, t, s, n, o, a, i, l)
        }))
      } catch (d) {
        return Promise.reject(d)
      }
    }, e.getBuyRequest = function(t, s, n, o, a) {
      o === void 0 && (o = null), a === void 0 && (a = 0);
      try {
        var i = this;
        return Promise.resolve(M(i, pe)[pe](function(l) {
          return i.sendBuy(l, t, s, n, o, a)
        }))
      } catch (l) {
        return Promise.reject(l)
      }
    }, e.getSellRequest = function(t, s, n, o, a) {
      o === void 0 && (o = null), a === void 0 && (a = 0);
      try {
        var i = this;
        return Promise.resolve(M(i, pe)[pe](function(l) {
          return i.sendSell(l, t, s, n, o, a)
        }))
      } catch (l) {
        return Promise.reject(l)
      }
    }, e.getUnlockRequest = function(t, s) {
      s === void 0 && (s = 0);
      try {
        var n = this;
        return Promise.resolve(M(n, pe)[pe](function(o) {
          return n.sendUnlock(o, t, s)
        }))
      } catch (o) {
        return Promise.reject(o)
      }
    }, e.getJettonWalletAddress = function(t, s) {
      try {
        var n = this.client.open(Ls.createFromAddress(t));
        return Promise.resolve(n.getWalletAddress(s))
      } catch (o) {
        return Promise.reject(o)
      }
    }, e.getFactoryConfig = function(t) {
      try {
        var s = this.client.open(gs.createFromAddress(t));
        return Promise.resolve(s.getConfig())
      } catch (n) {
        return Promise.reject(n)
      }
    }, r
  }();

function wn(r) {
  var e = Ls.createFromAddress(r);
  return this.client.open(e)
}

function kn(r) {
  var e = Mt.createFromAddress(r);
  return this.client.open(e)
}
const Hs = () => {
    const {
      getAddress: r,
      tonConnectSender: e,
      createGetWaitForLaunchStatusUntilOk: t,
      createGetReviewStepInfo: s
    } = Ue(), {
      TON_API_TOKEN: n,
      getTransactionStatus: o,
      getUserJettonBalance: a
    } = Ht(), {
      getMinReceive: i,
      wrapWithCache: l,
      memepadApi: g
    } = ot(), d = new vn(n, !1, !0), k = p => +String(p) / 1e4, P = {
      LAUNCH_STATUS_CHECK: 6e3,
      BUY_STATUS_CHECK: 6e3,
      SELL_STATUS_CHECK: 6e3,
      UNLOCK_STATUS_CHECK: 6e3
    }, R = {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: A(V.buyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: A(V.sellGas),
      MEMEPAD_JETTON_DEPLOY_NETWORK_FEE: A(V.deployGas),
      MEMEPAD_JETTON_INITIAL_NETWORK_FEE: A(V.initialGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: A(V.unlockGas)
    }, F = {
      LAUNCH_FEE: new C(.0114),
      LAUNCH_BUY_FEE: new C(.012),
      BUY_FEE: new C(.0062),
      SELL_FEE: new C(.0044),
      UNLOCK_FEE: new C(.0037)
    }, w = {
      buyNetworkFee: R.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: R.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      deployNetworkFee: R.MEMEPAD_JETTON_DEPLOY_NETWORK_FEE,
      initialNetworkFee: R.MEMEPAD_JETTON_INITIAL_NETWORK_FEE,
      unlockNetworkFee: R.MEMEPAD_JETTON_UNLOCK_NETWORK_FEE,
      walletNetworkLaunchFee: F.LAUNCH_FEE,
      walletNetworkLaunchBuyFee: F.LAUNCH_BUY_FEE,
      walletNetworkBuyFee: F.BUY_FEE,
      walletNetworkSellFee: F.SELL_FEE,
      walletNetworkUnlockFee: F.UNLOCK_FEE
    }, I = ({
      hasShare: p
    }) => w.deployNetworkFee.plus(p ? 0 : w.initialNetworkFee), E = ({
      referrerToken: p
    }) => j.beginCell().storeUint(1675682413, 32).storeStringTail(p).endCell(), L = async p => {
      const m = await K(async () => await d.getTotalSupply(r(p)))();
      return q(m) ? x(A(m.data)) : m
    }, N = l(({
      masterAddress: p
    }) => `blumSdk:factoryConfig:${p.toString()}`, async ({
      masterAddress: p
    }) => {
      const m = await K(async () => await d.getFactoryConfig(r(p)))();
      return q(m) ? x(m.data) : m
    }), se = l(({
      masterAddress: p
    }) => `blumSdk:bclData:${p.toString()}`, async ({
      masterAddress: p
    }) => {
      const m = A(d.getThresholdSupply()),
        h = A(d.getMaxSupply()),
        y = h.minus(m),
        f = A(d.getThresholdTons()),
        v = await N({
          masterAddress: p
        });
      if (!q(v)) return v;
      const {
        buyFeeBasis: S
      } = v.data, B = f.div(new C(1).minus(k(S))).toDecimalPlaces(9, C.ROUND_UP), W = v.data, G = A(v.data.agentDeployFee);
      return x({
        tokenForDexWithFees: B,
        tokenForDex: f,
        bclSupply: m,
        maxSupply: h,
        liqSupply: y,
        factoryConfig: W,
        aiAgentDeployFee: G
      })
    }), re = async ({
      jettonAddress: p,
      masterAddress: m
    }) => {
      const h = await se({
        masterAddress: m
      });
      if (!q(h)) return h;
      const {
        bclSupply: y,
        tokenForDex: f,
        liqSupply: v
      } = h.data, S = await L(p);
      if (!q(S)) return S;
      const B = S.data,
        W = new C(y).minus(B),
        G = A(d.getTonSupply(U(B))),
        z = G.div(f).times(100);
      return x({
        tokenForDex: f,
        tokenCollected: G,
        tokenCollectedPercent: z,
        bclSupply: y,
        liqSupply: v,
        totalSupply: B,
        availableSupply: W
      })
    }, ne = async ({
      masterAddress: p,
      tons: m
    }) => {
      const h = U(new C(m)),
        y = await se({
          masterAddress: p
        });
      if (!q(y)) return y;
      const {
        tokenForDex: f,
        bclSupply: v,
        tokenForDexWithFees: S,
        maxSupply: B
      } = y.data, W = await N({
        masterAddress: p
      });
      if (!q(W)) return W;
      const {
        buyFeeBasis: G
      } = W.data, z = A(d.getBuyAmount(0n, h, G)), de = z, Se = z, Ne = v.minus(de), ve = A(d.getTonSupply(U(de))), qe = new C(d.getPrice(U(de))), ar = new C(qe).times(B), ir = ve.div(f).times(100), cr = z.div(v).times(100), pr = new C(m).minus(ve);
      return x({
        share: new C(m),
        tokenForDexWithFees: S,
        tokenForDex: f,
        tokenCollected: ve,
        availableSupply: Ne,
        maxSupply: B,
        tokenCollectedPercent: ir,
        jettonReceivePercent: cr,
        priceToken: qe,
        marketCapToken: ar,
        platformFee: pr,
        minReceive: Se,
        bclData: y.data
      })
    }, O = l(({
      jettonAddress: p,
      userAddress: m
    }) => `blumSdk:jettonWalletAddress:${p.toString()}:${m.toString()}`, async ({
      jettonAddress: p,
      userAddress: m
    }) => await K(async () => await d.getJettonWalletAddress(r(p), r(m)))()), ee = async ({
      masterAddress: p,
      form: m,
      tonConnectUI: h,
      referrerToken: y
    }) => {
      const f = Fs(m, nt.STONFI),
        v = await g.saveMemepadJettonInfo(f);
      if (!q(v)) return v;
      const S = e(h),
        B = v.data.queryId,
        W = Gt.STONFI,
        G = {
          name: m.name,
          description: m.description,
          image: Ze(m.iconFileKey),
          symbol: m.ticker,
          decimals: 9
        };
      f.socials.length && (G.social_links = JSON.stringify(f.socials.map(ve => ve.url))), f.bannerFileKey && (G.cover_image = Ze(f.bannerFileKey));
      const z = y ? E({
          referrerToken: y
        }) : void 0,
        de = m.aiAgentEnable,
        Se = await K(async () => await d.sendDeployJetton(S, r(p), W, G, de, U(new C(m.share)), z, B))();
      if (!q(Se)) return Se;
      const Ne = (await S.getResult()).hash;
      return x({
        queryId: B,
        transactionHash: Ne
      })
    }, be = t(o, P.LAUNCH_STATUS_CHECK), _t = async ({
      tons: p,
      jettonAddress: m,
      masterAddress: h
    }) => {
      const y = await L(m);
      if (!q(y)) return y;
      const f = y.data,
        v = await N({
          masterAddress: h
        });
      if (!q(v)) return v;
      const {
        buyFeeBasis: S
      } = v.data, B = A(d.getBuyAmount(U(f), U(p), S)), W = B, G = i(B), z = p.times(k(S));
      return x({
        maxReceive: W,
        minReceive: G,
        platformFee: z,
        additionalInfo: void 0
      })
    }, bt = async ({
      jettons: p,
      jettonAddress: m,
      masterAddress: h
    }) => {
      const y = await L(m);
      if (!q(y)) return y;
      const f = y.data,
        v = await N({
          masterAddress: h
        });
      if (!q(v)) return v;
      const {
        sellFeeBasis: S
      } = v.data, B = A(d.getSellAmount(U(f), U(p), S)), W = B, G = i(B), z = B.div(1 - k(S)).minus(B);
      return x({
        maxReceive: W,
        minReceive: G,
        platformFee: z,
        additionalInfo: void 0
      })
    }, vt = async ({
      tons: p,
      jettonAddress: m,
      tradeInfoParams: h,
      tonConnectUI: y,
      referrerToken: f
    }) => {
      const v = e(y),
        S = f ? E({
          referrerToken: f
        }) : void 0,
        B = await K(async () => await d.sendBuy(v, r(m), U(p), U(h.minReceive), S))();
      return q(B) ? x((await v.getResult()).hash) : B
    }, wt = async ({
      jettons: p,
      jettonAddress: m,
      tradeInfoParams: h,
      userAddress: y,
      tonConnectUI: f,
      referrerToken: v
    }) => {
      const S = e(f),
        B = v ? E({
          referrerToken: v
        }) : void 0,
        W = await O({
          jettonAddress: m,
          userAddress: y
        });
      if (!q(W)) return W;
      const G = W.data,
        z = await K(async () => await d.sendSell(S, G, U(p), U(h.minReceive), B))();
      return q(z) ? x((await S.getResult()).hash) : z
    }, kt = () => Ce(({
      transactionHash: p
    }) => o({
      transactionHash: p
    }), () => {}, P.BUY_STATUS_CHECK), Tt = () => Ce(({
      transactionHash: p
    }) => o({
      transactionHash: p
    }), () => {}, P.SELL_STATUS_CHECK), At = async ({
      jettonAddress: p,
      userAddress: m
    }) => {
      const h = await a({
        jettonAddress: p,
        userAddress: m
      });
      if (q(h) && h.data.isZero()) return x(!1);
      const y = await O({
        jettonAddress: p,
        userAddress: m
      });
      if (!q(y)) return y;
      const f = y.data,
        v = await K(async () => await d.getUnlocked(f))();
      if (!q(v)) return v;
      const S = !v.data;
      return x(S)
    }, St = async ({
      jettonAddress: p,
      userAddress: m,
      tonConnectUI: h
    }) => {
      const y = e(h),
        f = await O({
          jettonAddress: p,
          userAddress: m
        });
      if (!q(f)) return f;
      const v = f.data,
        S = await K(async () => await d.sendUnlock(y, v))();
      return q(S) ? x((await y.getResult()).hash) : S
    }, qt = ({
      transactionHash: p
    }) => o({
      transactionHash: p
    }), _ = () => Ce(qt, () => {}, P.UNLOCK_STATUS_CHECK), b = s({
      getFees: ({
        share: p,
        overview: m
      }) => {
        const h = !new C(p).isZero(),
          {
            buyNetworkFee: y,
            walletNetworkLaunchBuyFee: f,
            walletNetworkLaunchFee: v
          } = w,
          S = I({
            hasShare: h
          }),
          B = A(m.bclData.factoryConfig.deployFee);
        return {
          buyNetworkFee: y,
          launchNetworkFee: S,
          launchPlatformFee: B,
          walletNetworkLaunchFee: v,
          walletNetworkLaunchBuyFee: f
        }
      }
    });
    return {
      getJettonTotalSupply: L,
      getFactoryConfig: N,
      getBclData: se,
      createJetton: ee,
      getUnlockEnabled: At,
      unlockWallet: St,
      getJettonOverview: ne,
      getJettonBclData: re,
      getBuyInfo: _t,
      getSellInfo: bt,
      buyJetton: vt,
      sellJetton: wt,
      getWaitForBuyStatus: kt,
      getWaitForSellStatus: Tt,
      getUnlockStatus: qt,
      getWaitForUnlockStatus: _,
      getWaitForCreateStatus: be,
      getMaxShareAmount: ({
        tokenBalance: p,
        overview: m
      }) => {
        const {
          buyNetworkFee: h,
          walletNetworkLaunchBuyFee: y
        } = w, f = I({
          hasShare: !0
        }), v = A(m.bclData.factoryConfig.deployFee), S = p.value.minus(f.plus(v).plus(y).plus(h)), B = m.bclData.tokenForDexWithFees;
        return B.lt(S) ? B : S.gte(0) ? S : new C(0)
      },
      getMaxBuyAmount: ({
        tokenBalance: p
      }) => {
        const {
          buyNetworkFee: m,
          walletNetworkBuyFee: h
        } = w;
        return p.value.minus(m).minus(h)
      },
      getReviewInfo: b,
      fees: w
    }
  },
  Tn = ({
    addresses: r,
    tonBalance: e,
    referrerToken: t
  }) => {
    if (!r) return;
    const {
      getJettonOverview: s,
      createJetton: n,
      getWaitForCreateStatus: o,
      getMaxShareAmount: a,
      getReviewInfo: i
    } = Hs(), l = r.masterAddresses[nt.STONFI], g = Me().tonConnectUI.value;
    return {
      getJettonOverview: ({
        tons: d
      }) => s({
        tons: d,
        masterAddress: l
      }),
      createJetton: ({
        form: d
      }) => n({
        form: d,
        masterAddress: l,
        tonConnectUI: g,
        referrerToken: t
      }),
      getWaitForCreateStatus: () => o(),
      getReviewInfo: ({
        overview: d,
        share: k,
        jettonTicker: P,
        withAiAgent: R
      }) => i({
        overview: d,
        share: k,
        jettonTicker: P,
        tonBalance: e,
        withAiAgent: R
      }),
      getMaxShareAmount: ({
        tokenBalance: d,
        overview: k
      }) => a({
        tokenBalance: d,
        overview: k
      })
    }
  },
  An = ({
    jetton: r,
    tonBalance: e,
    jettonBalance: t,
    referrerToken: s
  }) => {
    const {
      mustGetUserWalletAddress: n,
      getTradeStateControls: o,
      createGetUnlockInfo: a
    } = Ue(), {
      getUserJettonBalance: i
    } = Ht(), {
      slippage: l
    } = ot(), {
      getUnlockEnabled: g,
      getWaitForUnlockStatus: d,
      unlockWallet: k,
      buyJetton: P,
      sellJetton: R,
      getWaitForBuyStatus: F,
      getWaitForSellStatus: w,
      getBuyInfo: I,
      getSellInfo: E,
      getMaxBuyAmount: L,
      fees: Y
    } = Hs(), N = r.address, Z = r.masterContractAddress, se = Me().tonConnectUI.value, re = o(), ne = a({
      getFees: () => Y
    });
    return {
      getUserJettonBalance: () => i({
        jettonAddress: N,
        userAddress: n()
      }),
      getUnlockEnabled: () => g({
        jettonAddress: N,
        userAddress: n()
      }),
      getWaitForUnlockStatus: () => d(),
      unlockWallet: () => k({
        jettonAddress: N,
        userAddress: n(),
        tonConnectUI: se
      }),
      getUnlockInfo: () => ne({
        tonBalance: e,
        jettonBalance: t
      }),
      getSlippage: () => l.value,
      updateSlippage: H => l.value = H,
      buyJetton: ({
        tons: H,
        tradeInfoParams: O
      }) => P({
        tons: H,
        jettonAddress: N,
        tradeInfoParams: O,
        tonConnectUI: se,
        referrerToken: s
      }),
      sellJetton: ({
        jettons: H,
        tradeInfoParams: O
      }) => R({
        jettons: H,
        jettonAddress: N,
        userAddress: n(),
        tradeInfoParams: O,
        tonConnectUI: se,
        referrerToken: s
      }),
      getWaitForBuyStatus: () => F(),
      getWaitForSellStatus: () => w(),
      tradeStateControls: {
        getEmptyState: ({
          operation: H
        }) => re.getEmptyState({
          tonBalance: e,
          jettonBalance: t,
          operation: H
        }),
        getImmediateState: ({
          operation: H,
          amount: O
        }) => re.getImmediateState({
          amount: O,
          tonBalance: e,
          jettonBalance: t,
          operation: H,
          jettonTicker: r.ticker,
          fees: Y
        }),
        getState: ({
          operation: H,
          amount: O
        }) => re.getState({
          tonBalance: e,
          jettonBalance: t,
          operation: H,
          amount: O,
          jettonTicker: r.ticker,
          fees: Y,
          getBuyInfo: ({
            tons: ee
          }) => I({
            tons: ee,
            jettonAddress: N,
            masterAddress: Z
          }),
          getSellInfo: ({
            jettons: ee
          }) => E({
            jettons: ee,
            jettonAddress: N,
            masterAddress: Z
          })
        })
      },
      getMaxBuyAmount: L
    }
  };
var oe = {},
  mt = {},
  dt = {},
  ut = {};
Object.defineProperty(ut, "__esModule", {
  value: !0
});
ut.normalizeCoin = Sn;
ut.normalizeCoinEvent = qn;
const ke = j;

function Sn(r) {
  return {
    id: r.id,
    address: ke.Address.parse(r.address),
    metadata: r.metadata,
    totalSupply: BigInt(r.totalSupply),
    bclSupply: BigInt(r.bclSupply),
    liqSupply: BigInt(r.liqSupply),
    lastTradeDate: r.lastTradeDate,
    authorAddress: r.authorAddress === "" ? null : ke.Address.parse(r.authorAddress),
    tradingEnabled: r.tradingEnabled,
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral,
    createdAt: r.createdAt,
    tradingCloseFee: BigInt(r.tradingCloseFee),
    routerAddress: ke.Address.parse(r.routerAddress)
  }
}

function qn(r) {
  if (r.type === "buy") return {
    type: "buy",
    trader: r.trader === "" ? null : ke.Address.parse(r.trader),
    tonValue: BigInt(r.tonValue),
    supplyDelta: BigInt(r.supplyDelta),
    newSupply: BigInt(r.newSupply),
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral
  };
  if (r.type === "sell") return {
    type: "sell",
    trader: r.trader === "" ? null : ke.Address.parse(r.trader),
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
    authorAddress: r.authorAddress === "" ? null : ke.Address.parse(r.authorAddress),
    tradingEnabled: r.tradingEnabled,
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral,
    createdAt: r.createdAt,
    tradingCloseFee: BigInt(r.tradingCloseFee),
    routerAddress: ke.Address.parse(r.routerAddress)
  };
  throw new Error("Unknown BCL event: " + JSON.stringify(r))
}
var ht = {};
const jn = qr(jr);
Object.defineProperty(ht, "__esModule", {
  value: !0
});
ht.OfetchHttpProvider = void 0;
const _s = jn;
class En {
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
ht.OfetchHttpProvider = En;
Object.defineProperty(dt, "__esModule", {
  value: !0
});
dt.BclClient = void 0;
const bs = j,
  Ke = ut,
  $n = ht;
class Cn {
  constructor(e) {
    this.fetch = async (t, s) => await this.httpProvider.get(this.endpoint + t, {
      query: s == null ? void 0 : s.query
    }), this.fetchCoins = async t => {
      const s = await this.fetch("/getCoins", {
        query: t ?? {}
      });
      return {
        items: s.items.map(Ke.normalizeCoin),
        cursor: s.cursor
      }
    }, this.fetchCoin = async t => {
      let s = await this.fetch("/getCoin/" + t.toString({
        urlSafe: !0
      }));
      return (0, Ke.normalizeCoin)(s)
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
          event: (0, Ke.normalizeCoinEvent)(o.event),
          coinAddress: bs.Address.parse(o.coinAddress)
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
          event: (0, Ke.normalizeCoinEvent)(n.event),
          coinAddress: bs.Address.parse(n.coinAddress)
        })),
        cursor: s.cursor
      }
    }, this.endpoint = e.endpoint, this.httpProvider = e.httpProvider ?? new $n.OfetchHttpProvider
  }
}
dt.BclClient = Cn;
var Pe = {},
  Ae = {};
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.Constants = void 0;
const He = j;
Ae.Constants = {
  CoinDeploymentGas: (0, He.toNano)("0.05"),
  CoinBuyGas: (0, He.toNano)("0.05"),
  CoinSellGas: (0, He.toNano)("0.06"),
  WalletUnlockGas: (0, He.toNano)("0.05")
};
var _e = {};
Object.defineProperty(_e, "__esModule", {
  value: !0
});
_e.crc32 = zs;
_e.crc32str = Rn;
const Bn = -306674912;
let tt;

function Pn() {
  tt = new Int32Array(256);
  for (let r = 0; r < 256; r++) {
    let e = r;
    for (let t = 8; t > 0; --t) e = e & 1 ? e >>> 1 ^ Bn : e >>> 1;
    tt[r] = e
  }
}

function zs(r) {
  let e = 4294967295;
  tt === void 0 && Pn();
  for (let t = 0; t < r.length; ++t) e = tt[(e ^ r[t]) & 255] ^ e >>> 8;
  return (e ^ -1) >>> 0
}

function Rn(r) {
  return zs(fe.from(r))
}
var De = {};
Object.defineProperty(De, "__esModule", {
  value: !0
});
De.BclWallet = void 0;
const ze = j,
  vs = Ae,
  ws = _e;
class Qt {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Qt(e)
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
      value: vs.Constants.CoinSellGas,
      sendMode: ze.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, ze.beginCell)().storeUint((0, ws.crc32str)("op::sell"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.amount).storeCoins(s.minReceive).storeMaybeRef(s.referral).endCell()
    })
  }
  async sendUnlockWallet(e, t, s) {
    await e.internal(t, {
      value: vs.Constants.WalletUnlockGas,
      sendMode: ze.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, ze.beginCell)().storeUint((0, ws.crc32str)("op::unlock_wallet"), 32).storeUint(s.queryId ?? 0, 64).endCell()
    })
  }
  async getTransfersEnabled(e) {
    return (await e.get("get_transfers_enabled", [])).stack.readBoolean()
  }
}
De.BclWallet = Qt;
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.BclJetton = void 0;
Pe.parseBclEvent = Fn;
const Rt = j,
  Nn = Ae,
  Qe = _e,
  In = De;

function Fn(r) {
  let e = r.beginParse(),
    t = e.loadUint(32);
  if (t === (0, Qe.crc32str)("send_liq_log")) return {
    type: "send_liq",
    tonLiq: e.loadCoins(),
    jettonLiq: e.loadCoins()
  };
  if (t === (0, Qe.crc32str)("sell_log")) return {
    type: "sell",
    trader: e.loadAddress(),
    tonValue: e.loadCoins(),
    supplyDelta: e.loadCoins(),
    newSupply: e.loadCoins(),
    tonLiqCollected: e.loadCoins(),
    referral: e.loadMaybeRef()
  };
  if (t === (0, Qe.crc32str)("buy_log")) return {
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
class Zt {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Zt(e)
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
      cell: (0, Rt.beginCell)().storeAddress(t).endCell()
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
    let n = (0, Rt.beginCell)().storeUint((0, Qe.crc32str)("op::buy"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.minReceive).storeMaybeRef(s.referral);
    s.buyerAddress && n.storeAddress(s.buyerAddress), await e.internal(t, {
      value: s.tons + Nn.Constants.CoinBuyGas,
      sendMode: Rt.SendMode.PAY_GAS_SEPARATELY,
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
    return e.open(In.BclWallet.createFromAddress(s))
  }
}
Pe.BclJetton = Zt;
var Ge = {},
  Re = {},
  yt = {};
Object.defineProperty(yt, "__esModule", {
  value: !0
});
yt.sha256ToBigint = void 0;
const xn = Er(),
  On = r => BigInt("0x" + (0, xn.createHash)("sha256").update(r).digest().toString("hex"));
yt.sha256ToBigint = On;
Object.defineProperty(Re, "__esModule", {
  value: !0
});
Re.storeSnakeContentData = Qs;
Re.loadSnakeContentData = Zs;
Re.storeTokenOnchainContent = Un;
Re.loadTokenOnchainContent = Dn;
const st = Os,
  Mn = yt,
  Vs = 0,
  Ys = 0;

function Qs(r) {
  return e => e.storeUint(Ys, 8).storeStringTail(r)
}

function Zs(r) {
  if (r.loadUint(8) !== Ys) throw new Error("Not snake ContentData");
  return r.loadStringTail()
}
const Xs = {
  serialize: (r, e) => {
    e.storeRef((0, st.beginCell)().store(Qs(r)).endCell())
  },
  parse: r => Zs(r.loadRef().beginParse())
};

function Un(r) {
  return e => {
    const t = st.Dictionary.empty(st.Dictionary.Keys.BigUint(256), Xs);
    for (const s in r) r[s] && t.set((0, Mn.sha256ToBigint)(s), r[s]);
    return e.storeUint(Vs, 8).storeDict(t)
  }
}

function Dn(r) {
  if (r.loadUint(8) !== Vs) throw new Error("Not on-chain content");
  return r.loadDict(st.Dictionary.Keys.BigUint(256), Xs)
}
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.BclMaster = void 0;
const Ee = j,
  ks = Ae,
  Ts = _e,
  Gn = Re;
class Xt {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Xt(e)
  }
  async sendDeployCoin(e, t, s, n) {
    let o = (0, Ee.beginCell)().store((0, Gn.storeTokenOnchainContent)({
        name: s.name,
        description: s.description,
        image: s.imageUrl,
        symbol: s.symbol,
        decimals: "9",
        social_links: JSON.stringify(s.socialLinks),
        ...s.extraMetadata
      })).endCell(),
      a = (0, Ee.beginCell)().storeUint((0, Ts.crc32str)("op::deploy_coin"), 32).storeUint(s.queryId ?? 0, 64).storeRef(o).storeAddress(s.authorAddress).storeRef(s.referral ?? (0, Ee.beginCell)().endCell()),
      i = (0, Ee.beginCell)().storeUint(3547469196, 32).storeUint(s.queryId ?? 0, 64).endCell();
    if (n != null && n.firstBuy) {
      let d = (0, Ee.beginCell)().storeUint((0, Ts.crc32str)("op::buy"), 32).storeUint(n.firstBuy.queryId ?? 0, 64).storeCoins(n.firstBuy.minReceive).storeMaybeRef(n.firstBuy.referral);
      n.firstBuy.buyerAddress && d.storeAddress(n.firstBuy.buyerAddress), i = d.endCell()
    }
    a.storeMaybeRef(i);
    let l;
    n != null && n.forceDeploymentFee ? l = n.forceDeploymentFee : l = (await this.getMasterData(e)).deploymentFee;
    let g = l + ks.Constants.CoinDeploymentGas;
    n != null && n.firstBuy && (g += ks.Constants.CoinBuyGas + n.firstBuy.tons), await e.internal(t, {
      value: g,
      sendMode: Ee.SendMode.PAY_GAS_SEPARATELY,
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
Ge.BclMaster = Xt;
Object.defineProperty(mt, "__esModule", {
  value: !0
});
mt.BclSDK = void 0;
const Jn = dt,
  Ln = Pe,
  Nt = Ge;
class es {
  constructor(e) {
    this.apiProvider = e.apiProvider, this.api = new Jn.BclClient(e.clientOptions), this.masterAddress = e.masterAddress
  }
  openCoin(e) {
    return this.apiProvider.open(Ln.BclJetton.createFromAddress(e))
  }
  async openUserCoinWallet(e, t) {
    return await this.openCoin(e).getUserWallet(t)
  }
  async deployCoin(e, t, s) {
    await this.apiProvider.open(Nt.BclMaster.createFromAddress(this.masterAddress)).sendDeployCoin(e, t, s)
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
    return await this.apiProvider.open(Nt.BclMaster.createFromAddress(this.masterAddress)).getCoinsForTons(e)
  }
  async getMasterData() {
    return await this.apiProvider.open(Nt.BclMaster.createFromAddress(this.masterAddress)).getMasterData()
  }
  open(e) {
    return this.apiProvider.open(e)
  }
  static create(e) {
    return new es(e)
  }
}
mt.BclSDK = es;
var ft = {},
  D = {};
Object.defineProperty(D, "__esModule", {
  value: !0
});
var er = D.Api = tr = D.HttpClient = D.ContentType = D.PoolImplementationType = D.TrustType = D.JettonVerificationType = D.BouncePhaseType = D.ComputeSkipReason = D.AccStatusChange = D.TransactionType = D.AccountStatus = void 0,
  As;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(As || (D.AccountStatus = As = {}));
var Ss;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(Ss || (D.TransactionType = Ss = {}));
var qs;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(qs || (D.AccStatusChange = qs = {}));
var js;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(js || (D.ComputeSkipReason = js = {}));
var Es;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(Es || (D.BouncePhaseType = Es = {}));
var $s;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})($s || (D.JettonVerificationType = $s = {}));
var Cs;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(Cs || (D.TrustType = Cs = {}));
var Bs;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(Bs || (D.PoolImplementationType = Bs = {}));
var ye;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(ye || (D.ContentType = ye = {}));
class Wn {
  constructor(e = {}) {
    u(this, "baseUrl", "https://tonapi.io");
    u(this, "securityData", null);
    u(this, "securityWorker");
    u(this, "abortControllers", new Map);
    u(this, "customFetch", (...e) => fetch(...e));
    u(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    u(this, "setSecurityData", e => {
      this.securityData = e
    });
    u(this, "contentFormatters", {
      [ye.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
      [ye.Text]: e => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
      [ye.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? JSON.stringify(n) : `${n}`), t
      }, new FormData),
      [ye.UrlEncoded]: e => this.toQueryString(e)
    });
    u(this, "createAbortSignal", e => {
      if (this.abortControllers.has(e)) {
        const s = this.abortControllers.get(e);
        return s ? s.signal : void 0
      }
      const t = new AbortController;
      return this.abortControllers.set(e, t), t.signal
    });
    u(this, "abortRequest", e => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e))
    });
    u(this, "request", async ({
      body: e,
      secure: t,
      path: s,
      type: n,
      query: o,
      format: a,
      baseUrl: i,
      cancelToken: l,
      ...g
    }) => {
      const d = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        k = this.mergeRequestParams(g, d),
        P = o && this.toQueryString(o),
        R = this.contentFormatters[n || ye.Json],
        F = a || k.format;
      return this.customFetch(`${i||this.baseUrl||""}${s}${P?`?${P}`:""}`, {
        ...k,
        headers: {
          ...k.headers || {},
          ...n && n !== ye.FormData ? {
            "Content-Type": n
          } : {}
        },
        signal: (l ? this.createAbortSignal(l) : k.signal) || null,
        body: typeof e > "u" || e === null ? null : R(e)
      }).then(async w => {
        const I = w.clone();
        I.data = null, I.error = null;
        const E = F ? await w[F]().then(L => (I.ok ? I.data = L : I.error = L, I)).catch(L => (I.error = L, I)) : I;
        if (l && this.abortControllers.delete(l), !w.ok) throw E;
        return E.data
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
var tr = D.HttpClient = Wn;
class Kn {
  constructor(e) {
    u(this, "http");
    u(this, "utilities", {
      getOpenapiJson: (e = {}) => this.http.request({
        path: "/v2/openapi.json",
        method: "GET",
        format: "json",
        ...e
      }),
      getOpenapiYml: (e = {}) => this.http.request({
        path: "/v2/openapi.yml",
        method: "GET",
        ...e
      }),
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
    u(this, "blockchain", {
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
    u(this, "accounts", {
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
      }),
      getAccountExtraCurrencyHistoryById: (e, t, s, n = {}) => this.http.request({
        path: `/v2/accounts/${e}/extra-currency/${t}/history`,
        method: "GET",
        query: s,
        format: "json",
        ...n
      })
    });
    u(this, "nft", {
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
      getNftCollectionItemsByAddresses: (e, t = {}) => this.http.request({
        path: "/v2/nfts/collections/_bulk",
        method: "POST",
        body: e,
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
    u(this, "dns", {
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
    u(this, "traces", {
      getTrace: (e, t = {}) => this.http.request({
        path: `/v2/traces/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    u(this, "events", {
      getEvent: (e, t = {}) => this.http.request({
        path: `/v2/events/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    u(this, "inscriptions", {
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
    u(this, "jettons", {
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
      getJettonInfosByAddresses: (e, t = {}) => this.http.request({
        path: "/v2/jettons/_bulk",
        method: "POST",
        body: e,
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
    u(this, "extraCurrency", {
      getExtraCurrencyInfo: (e, t = {}) => this.http.request({
        path: `/v2/extra-currency/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    u(this, "staking", {
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
    u(this, "storage", {
      getStorageProviders: (e = {}) => this.http.request({
        path: "/v2/storage/providers",
        method: "GET",
        format: "json",
        ...e
      })
    });
    u(this, "rates", {
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
    u(this, "connect", {
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
    u(this, "wallet", {
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
      })
    });
    u(this, "gasless", {
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
    u(this, "liteServer", {
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
    u(this, "multisig", {
      getMultisigAccount: (e, t = {}) => this.http.request({
        path: `/v2/multisig/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    u(this, "emulation", {
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
      emulateMessageToWallet: (e, t = {}) => this.http.request({
        path: "/v2/wallet/emulate",
        method: "POST",
        body: e,
        format: "json",
        ...t
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
}
er = D.Api = Kn;
var Je = {};
Object.defineProperty(Je, "__esModule", {
  value: !0
});
Je.runGetMethod = Hn;
Je.TvmStackRecordToTupleItem = ts;
Je.TupleItemToTonapiString = sr;
const Jt = j;
async function Hn(r, e, t, s) {
  const n = await r.blockchain.execGetMethodForBlockchainAccount(e.toRawString(), t, {
    args: s == null ? void 0 : s.map(sr)
  });
  if (!n.success || n.exit_code !== 0) throw new Error;
  return {
    stack: new Jt.TupleReader(n.stack.map(ts))
  }
}

function ts(r) {
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
          cell: Jt.Cell.fromBase64(r.cell)
        }
      } catch {
        return {
          type: "cell",
          cell: Jt.Cell.fromBase64(fe.from(r.cell, "hex").toString("base64"))
        }
      }
    case "null":
      return {
        type: "null"
      };
    case "tuple":
      return {
        type: "tuple", items: r.tuple.map(ts)
      };
    default:
      throw new Error(`Unknown type ${r.type}`)
  }
}

function sr(r) {
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
Object.defineProperty(ft, "__esModule", {
  value: !0
});
ft.simpleTonapiProvider = zn;
ft.createProvider = ss;
const Ve = D,
  Ie = j,
  Ps = Je;

function zn(r) {
  return {
    open(e) {
      return (0, Ie.openContract)(e, t => ss(r, t))
    }
  }
}

function ss(r, e) {
  return {
    async getState() {
      const t = await r.blockchain.getBlockchainRawAccount(e.address.toRawString());
      let s;
      if (t.status === Ve.AccountStatus.Nonexist || t.status === Ve.AccountStatus.Uninit) s = {
        type: "uninit"
      };
      else if (t.status === Ve.AccountStatus.Active) s = {
        type: "active",
        code: t.code ? fe.from(t.code, "hex") : null,
        data: t.data ? fe.from(t.data, "hex") : null
      };
      else if (t.status === Ve.AccountStatus.Frozen) s = {
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
        args: s == null ? void 0 : s.map(Ps.TupleItemToTonapiString)
      });
      if (!n.success || n.exit_code !== 0) throw new Error;
      return {
        stack: new Ie.TupleReader(n.stack.map(Ps.TvmStackRecordToTupleItem))
      }
    },
    async external(t) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    },
    async internal(t, s) {
      let o = !0;
      s.bounce !== null && s.bounce !== void 0 && (o = s.bounce);
      let a;
      typeof s.value == "string" ? a = (0, Ie.toNano)(s.value) : a = s.value;
      let i = null;
      typeof s.body == "string" ? i = (0, Ie.comment)(s.body) : s.body && (i = s.body), await t.send({
        to: e.address,
        value: a,
        bounce: o,
        sendMode: s.sendMode,
        init: null,
        body: i
      })
    },
    open(t) {
      return (0, Ie.openContract)(t, s => ss(r, s))
    },
    async getTransactions(t, s, n, o) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    }
  }
}
var rs = {},
  Be = {};
Object.defineProperty(Be, "__esModule", {
  value: !0
});
Be.delay = Be.unixtime = void 0;
const Vn = () => Math.floor(Date.now() / 1e3);
Be.unixtime = Vn;
const Yn = r => new Promise(e => {
  setTimeout(() => e(), r)
});
Be.delay = Yn;
Object.defineProperty(rs, "__esModule", {
  value: !0
});
rs.tonConnectSender = Zn;
const Ye = j,
  Qn = Be;

function Zn(r) {
  let e;
  const t = [];
  return {
    get address() {
      var n;
      const s = (n = r.account) == null ? void 0 : n.address;
      return s ? Ye.Address.parse(s) : void 0
    },
    async send(s) {
      var P;
      const n = (0, Qn.unixtime)() + 600,
        o = s.to.toString({
          urlSafe: !0,
          bounceable: !0
        }),
        a = (P = this.address) == null ? void 0 : P.toRawString(),
        i = s.value.toString();
      let l;
      s.init && (l = (0, Ye.beginCell)().store((0, Ye.storeStateInit)(s.init)).endCell().toBoc().toString("base64"));
      let g;
      s.body && (g = s.body.toBoc().toString("base64"));
      const d = await r.sendTransaction({
          validUntil: n,
          from: a,
          messages: [{
            address: o,
            amount: i,
            stateInit: l,
            payload: g
          }]
        }),
        k = Ye.Cell.fromBase64(d.boc);
      e = {
        msg: k,
        hash: k.hash().toString("hex")
      }, t.forEach(R => R(e))
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
var rr = {};
Object.defineProperty(rr, "__esModule", {
  value: !0
});
var gt = {};
Object.defineProperty(gt, "__esModule", {
  value: !0
});
gt.packReferralConfig = eo;
gt.unpackReferralConfig = to;
const Xn = Os,
  nr = _e;

function eo(r) {
  let e = (0, Xn.beginCell)().storeUint((0, nr.crc32str)("ref_v1"), 32).storeAddress(r.partner);
  if (r.platformTag && e.storeAddress(r.platformTag), r.extraTag) {
    if (!r.platformTag) throw new Error("extraTag should only be set if platformTag is present");
    e.storeAddress(r.extraTag)
  }
  return e.endCell()
}

function to(r) {
  let e = r.beginParse();
  if (e.loadUint(32) !== (0, nr.crc32str)("ref_v1")) throw new Error("Unknown referral format");
  let s = e.loadAddress(),
    n, o;
  return e.remainingBits > 0 && (n = e.loadAddress()), e.remainingBits > 0 && (o = e.loadAddress()), {
    partner: s,
    platformTag: n,
    extraTag: o
  }
}(function(r) {
  var e = $e && $e.__createBinding || (Object.create ? function(o, a, i, l) {
      l === void 0 && (l = i);
      var g = Object.getOwnPropertyDescriptor(a, i);
      (!g || ("get" in g ? !a.__esModule : g.writable || g.configurable)) && (g = {
        enumerable: !0,
        get: function() {
          return a[i]
        }
      }), Object.defineProperty(o, l, g)
    } : function(o, a, i, l) {
      l === void 0 && (l = i), o[l] = a[i]
    }),
    t = $e && $e.__exportStar || function(o, a) {
      for (var i in o) i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && e(a, o, i)
    };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.crc32 = r.crc32str = r.tonConnectSender = void 0, t(mt, r), t(ft, r);
  var s = rs;
  Object.defineProperty(r, "tonConnectSender", {
    enumerable: !0,
    get: function() {
      return s.tonConnectSender
    }
  });
  var n = _e;
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
  }), t(rr, r), t(Ge, r), t(Pe, r), t(De, r), t(Ae, r), t(gt, r)
})(oe);
const or = () => {
    const {
      getAddress: r,
      tonConnectSender: e,
      createGetWaitForLaunchStatusUntilOk: t,
      createGetReviewStepInfo: s
    } = Ue(), {
      TON_API_TOKEN: n,
      getTransactionStatus: o
    } = Ht(), {
      getMinReceive: a,
      memepadApi: i,
      wrapWithCache: l
    } = ot(), g = new er(new tr({
      baseUrl: "https://tonapi.io",
      baseApiParams: {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${n}`
        }
      }
    })), d = {
      LAUNCH_STATUS_CHECK: 18e3,
      BUY_STATUS_CHECK: 18e3,
      SELL_STATUS_CHECK: 18e3,
      UNLOCK_STATUS_CHECK: 18e3
    }, k = {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: A(oe.Constants.CoinBuyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: A(oe.Constants.CoinSellGas),
      MEMEPAD_JETTON_LAUNCH_NETWORK_FEE: A(oe.Constants.CoinDeploymentGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: A(oe.Constants.WalletUnlockGas)
    }, P = {
      LAUNCH_FEE: new C(.0114),
      LAUNCH_BUY_FEE: new C(.012),
      BUY_FEE: new C(.0062),
      SELL_FEE: new C(.0044),
      UNLOCK_FEE: new C(.0037)
    }, R = {
      buyNetworkFee: k.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: k.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      launchNetworkFee: k.MEMEPAD_JETTON_LAUNCH_NETWORK_FEE,
      unlockNetworkFee: k.MEMEPAD_JETTON_UNLOCK_NETWORK_FEE,
      walletNetworkLaunchFee: P.LAUNCH_FEE,
      walletNetworkLaunchBuyFee: P.LAUNCH_BUY_FEE,
      walletNetworkBuyFee: P.BUY_FEE,
      walletNetworkSellFee: P.SELL_FEE,
      walletNetworkUnlockFee: P.UNLOCK_FEE
    }, F = _ => {
      const b = `tonFunSdk:${_.toString()}`,
        $ = Cr(b, () => new Map),
        T = $.value.get(b);
      if (T) return T;
      const p = oe.BclSDK.create({
        apiProvider: oe.simpleTonapiProvider(g),
        clientOptions: {
          endpoint: ""
        },
        masterAddress: r(_)
      });
      return $.value.set(b, p), p
    }, w = _ => new C(1).minus(A(_.fees)).div(A(_.coins)), E = l(({
      masterAddress: _
    }) => `tonFunSdk:bclData:${_.toString()}`, async ({
      masterAddress: _
    }) => {
      const b = await K(async () => await F(_).getMasterData())();
      if (!q(b)) return $r(b);
      const $ = A(b.data.fullPriceTon),
        T = A(b.data.fullPriceTon).minus(A(b.data.fullPriceTonFees)),
        p = A(b.data.bclSupply),
        m = A(b.data.liqSupply),
        h = p.plus(m),
        y = new C(0);
      return x({
        tokenForDexWithFees: $,
        tokenForDex: T,
        bclSupply: p,
        liqSupply: m,
        maxSupply: h,
        launchPlatformFee: A(b.data.deploymentFee),
        aiAgentDeployFee: y
      })
    }), Y = l(({
      tons: _,
      masterAddress: b
    }) => `tonFunSdk:firstCoinsForTons:${b.toString()}:${_.toString()}`, async ({
      tons: _,
      masterAddress: b
    }) => await K(async () => await F(b).getFirstCoinsForTons(U(new C(_))))()), Z = l(({
      tons: _,
      masterAddress: b
    }) => `tonFunSdk:jettonOverview:${b.toString()}:${_.toString()}`, async ({
      tons: _,
      masterAddress: b
    }) => {
      const $ = new C(_),
        T = await E({
          masterAddress: b
        });
      if (!q(T)) return T;
      const {
        tokenForDex: p,
        tokenForDexWithFees: m,
        bclSupply: h,
        maxSupply: y
      } = T.data, f = await (async () => new C($).isZero() ? x({
        fees: U(new C(0)),
        coins: U(new C(0))
      }) : await Y({
        tons: _,
        masterAddress: b
      }))();
      if (!q(f)) return f;
      const v = f.data,
        S = await (async () => {
          const qe = await Y({
            masterAddress: b,
            tons: 1
          });
          return q(qe) ? x(w(qe.data)) : qe
        })();
      if (!q(S)) return S;
      const B = S.data,
        W = B.mul(y),
        G = new C(A(v.coins)),
        z = new C(A(v.fees)),
        de = new C($).minus(z),
        Se = de.div(p).times(100),
        Ne = G.div(h).times(100),
        ve = new C(h).sub(G);
      return x({
        share: $,
        tokenForDexWithFees: m,
        tokenForDex: p,
        tokenCollected: de,
        tokenCollectedPercent: Se,
        jettonReceivePercent: Ne,
        priceToken: B,
        marketCapToken: W,
        availableSupply: ve,
        maxSupply: y,
        platformFee: z,
        minReceive: G,
        bclData: T.data
      })
    }), se = async ({
      form: _,
      userAddress: b,
      masterAddress: $,
      tonConnectUI: T
    }) => {
      const p = Fs(_, nt.STONFI_TON_FUN),
        m = await i.saveMemepadJettonInfo(p);
      if (!q(m)) return m;
      const h = new C(_.share),
        y = _.overview.minReceive,
        f = {
          name: p.name,
          description: p.description,
          imageUrl: Ze(p.iconFileKey),
          symbol: p.ticker,
          share: U(h),
          referral: m.data.referral,
          partnerAddress: m.data.partnerAddress,
          queryId: m.data.queryId,
          minReceive: U(y)
        },
        v = {};
      p.socials.length && (v.social_links = JSON.stringify(p.socials.map(z => z.url))), p.bannerFileKey && (v.cover_image = Ze(p.bannerFileKey));
      const S = {
          authorAddress: r(b),
          name: f.name,
          description: f.description,
          imageUrl: f.imageUrl,
          symbol: f.symbol,
          referral: oe.packReferralConfig({
            partner: r(f.partnerAddress),
            platformTag: r(f.referral)
          }),
          queryId: j.toNano(f.queryId),
          extraMetadata: v
        },
        B = {
          firstBuy: h.isZero() ? void 0 : {
            tons: f.share,
            minReceive: f.minReceive,
            referral: oe.packReferralConfig({
              partner: r(f.partnerAddress)
            }),
            buyerAddress: r(b)
          }
        },
        W = e(T),
        G = await K(async () => await F($).deployCoin(W, S, B))();
      return q(G) ? x({
        queryId: m.data.queryId,
        transactionHash: (await W.getResult()).hash
      }) : G
    }, re = () => t(o, d.LAUNCH_STATUS_CHECK), ne = async ({
      jettonAddress: _,
      masterAddress: b
    }) => {
      const $ = await K(async () => await F(b).openCoin(r(_)))();
      if (!q($)) return $;
      const T = await K(async () => await $.data.getBclData())();
      if (!q(T)) return T;
      const p = A(T.data.totalSupply),
        m = A(T.data.fullPriceTon).minus(A(T.data.fullPriceTonFees)),
        h = A(T.data.tonLiqCollected),
        y = h.div(m).times(100),
        f = A(T.data.bclSupply),
        v = A(T.data.liqSupply),
        S = f.minus(p);
      return x({
        tokenForDex: m,
        tokenCollected: h,
        tokenCollectedPercent: y,
        bclSupply: f,
        liqSupply: v,
        totalSupply: p,
        availableSupply: S
      })
    }, H = async ({
      jettonAddress: _,
      userAddress: b,
      masterAddress: $
    }) => {
      var h, y, f;
      const T = await K(async () => await F($).openCoin(r(_)).getUserWallet(r(b)))();
      if (!q(T)) return T;
      const p = await K(async () => !await T.data.getTransfersEnabled())();
      if (!q(p)) return ((h = p.extra) == null ? void 0 : h.status) === 404 && ((f = (y = p.extra) == null ? void 0 : y.error) == null ? void 0 : f.error) === "entity not found" ? x(!1) : p;
      const m = p.data;
      return x(m)
    }, O = async ({
      jettonAddress: _,
      userAddress: b,
      masterAddress: $,
      tonConnectUI: T
    }) => {
      const p = F($).openCoin(r(_)),
        m = await K(async () => await p.getUserWallet(r(b)))();
      if (!q(m)) return m;
      const h = e(T),
        y = await K(async () => await m.data.sendUnlockWallet(h, {}))();
      return q(y) ? x((await h.getResult()).hash) : y
    }, ee = () => Ce(async ({
      transactionHash: _
    }) => await o({
      transactionHash: _
    }), () => {}, d.UNLOCK_STATUS_CHECK), be = async ({
      tons: _,
      masterAddress: b,
      jettonAddress: $,
      partnerAddress: T
    }) => {
      const p = await K(async () => await F(b).openCoin(r($)).getCoinsForTons(U(_)))();
      if (!q(p)) return p;
      const m = A(p.data.coins),
        h = a(m);
      return x({
        minReceive: h,
        maxReceive: m,
        platformFee: A(p.data.fees),
        additionalInfo: {
          partnerAddress: T.toString()
        }
      })
    }, _t = async ({
      jettons: _,
      masterAddress: b,
      jettonAddress: $,
      partnerAddress: T
    }) => {
      const p = await K(async () => await F(b).openCoin(r($)).getTonsForCoins(U(_)))();
      if (!q(p)) return p;
      const m = A(p.data.tons),
        h = a(m);
      return x({
        minReceive: h,
        maxReceive: m,
        platformFee: A(p.data.fees),
        additionalInfo: {
          partnerAddress: T.toString()
        }
      })
    }, bt = async ({
      userAddress: _,
      jettonAddress: b,
      masterAddress: $
    }) => {
      const T = await K(async () => await F($).getUserCoinBalance(r(b), r(_)))();
      return q(T) ? x(A(T.data)) : T
    }, vt = async ({
      tons: _,
      tradeInfoParams: b,
      masterAddress: $,
      jettonAddress: T,
      tonConnectUI: p
    }) => {
      const m = {
          tons: U(_),
          minReceive: U(b.minReceive),
          referral: oe.packReferralConfig({
            partner: r(b.additionalInfo.partnerAddress)
          })
        },
        h = e(p),
        y = await K(async () => await F($).openCoin(r(T)).sendBuy(h, m))();
      return q(y) ? x((await h.getResult()).hash) : y
    }, wt = async ({
      jettons: _,
      tradeInfoParams: b,
      jettonAddress: $,
      masterAddress: T,
      userAddress: p,
      tonConnectUI: m
    }) => {
      const h = await F(T).openCoin(r($)).getUserWallet(r(p)),
        y = e(m),
        f = await K(async () => await h.sendSellCoins(y, {
          amount: U(_),
          minReceive: U(b.minReceive),
          referral: oe.packReferralConfig({
            partner: r(b.additionalInfo.partnerAddress)
          }),
          queryId: 0n
        }))();
      return q(f) ? x((await y.getResult()).hash) : f
    }, kt = () => Ce(({
      transactionHash: _
    }) => o({
      transactionHash: _
    }), () => {}, d.BUY_STATUS_CHECK), Tt = () => Ce(({
      transactionHash: _
    }) => o({
      transactionHash: _
    }), () => {}, d.SELL_STATUS_CHECK), At = ({
      tokenBalance: _,
      overview: b
    }) => {
      const {
        buyNetworkFee: $,
        launchNetworkFee: T,
        walletNetworkLaunchBuyFee: p
      } = R, m = b.bclData.launchPlatformFee, h = _.value.minus(T.plus(m).plus(p).plus($)), y = b.bclData.tokenForDexWithFees;
      return y.lt(h) ? y : h.gte(0) ? h : new C(0)
    }, St = s({
      getFees: ({
        overview: _
      }) => {
        const {
          buyNetworkFee: b,
          launchNetworkFee: $,
          walletNetworkLaunchBuyFee: T,
          walletNetworkLaunchFee: p
        } = R, m = _.bclData.launchPlatformFee;
        return {
          buyNetworkFee: b,
          launchNetworkFee: $,
          launchPlatformFee: m,
          walletNetworkLaunchFee: p,
          walletNetworkLaunchBuyFee: T
        }
      }
    });
    return {
      getCoinPriceInTons: w,
      getBclData: E,
      getUnlockEnabled: H,
      getJettonBclData: ne,
      unlockWallet: O,
      getWaitForUnlockStatus: ee,
      getBuyInfo: be,
      getSellInfo: _t,
      buyJetton: vt,
      sellJetton: wt,
      getUserJettonBalance: bt,
      getWaitForBuyStatus: kt,
      getWaitForSellStatus: Tt,
      getJettonOverview: Z,
      createJetton: se,
      getWaitForCreateStatus: re,
      getMaxShareAmount: At,
      getMaxBuyAmount: ({
        tokenBalance: _
      }) => {
        const {
          buyNetworkFee: b,
          walletNetworkBuyFee: $
        } = R;
        return _.value.minus(b).minus($)
      },
      getReviewInfo: St,
      fees: R
    }
  },
  so = ({
    addresses: r,
    tonBalance: e
  }) => {
    if (!r) return;
    const {
      mustGetUserWalletAddress: t
    } = Ue(), {
      getJettonOverview: s,
      createJetton: n,
      getWaitForCreateStatus: o,
      getMaxShareAmount: a,
      getReviewInfo: i
    } = or(), l = r.masterAddresses[nt.STONFI_TON_FUN], g = Me().tonConnectUI.value;
    return {
      getJettonOverview: ({
        tons: d
      }) => s({
        tons: d,
        masterAddress: l
      }),
      createJetton: ({
        form: d
      }) => n({
        form: d,
        masterAddress: l,
        tonConnectUI: g,
        userAddress: t()
      }),
      getWaitForCreateStatus: () => o()(),
      getReviewInfo: ({
        overview: d,
        share: k,
        jettonTicker: P,
        withAiAgent: R
      }) => i({
        overview: d,
        share: k,
        jettonTicker: P,
        tonBalance: e,
        withAiAgent: R
      }),
      getMaxShareAmount: ({
        tokenBalance: d,
        overview: k
      }) => a({
        tokenBalance: d,
        overview: k
      })
    }
  },
  ro = ({
    addresses: r,
    jetton: e,
    tonBalance: t,
    jettonBalance: s
  }) => {
    const {
      mustGetUserWalletAddress: n,
      getTradeStateControls: o,
      createGetUnlockInfo: a
    } = Ue(), {
      slippage: i
    } = ot(), {
      getUserJettonBalance: l,
      getUnlockEnabled: g,
      getWaitForUnlockStatus: d,
      unlockWallet: k,
      buyJetton: P,
      sellJetton: R,
      getWaitForBuyStatus: F,
      getWaitForSellStatus: w,
      getBuyInfo: I,
      getSellInfo: E,
      getMaxBuyAmount: L,
      fees: Y
    } = or(), N = e.address, Z = e.masterContractAddress, se = r.partnerAddress, re = Me().tonConnectUI.value, ne = a({
      getFees: () => Y
    }), H = o();
    return {
      getUserJettonBalance: () => l({
        jettonAddress: N,
        userAddress: n(),
        masterAddress: Z
      }),
      getUnlockEnabled: () => g({
        jettonAddress: N,
        userAddress: n(),
        masterAddress: Z
      }),
      getWaitForUnlockStatus: () => d(),
      unlockWallet: () => k({
        jettonAddress: N,
        userAddress: n(),
        masterAddress: Z,
        tonConnectUI: re
      }),
      getUnlockInfo: () => ne({
        tonBalance: t,
        jettonBalance: s
      }),
      getSlippage: () => i.value,
      updateSlippage: O => i.value = O,
      buyJetton: ({
        tons: O,
        tradeInfoParams: ee
      }) => P({
        tons: O,
        jettonAddress: N,
        masterAddress: Z,
        tradeInfoParams: ee,
        tonConnectUI: re
      }),
      sellJetton: ({
        jettons: O,
        tradeInfoParams: ee
      }) => R({
        jettons: O,
        jettonAddress: N,
        masterAddress: Z,
        userAddress: n(),
        tradeInfoParams: ee,
        tonConnectUI: re
      }),
      getWaitForBuyStatus: () => F(),
      getWaitForSellStatus: () => w(),
      tradeStateControls: {
        getEmptyState: ({
          operation: O
        }) => H.getEmptyState({
          tonBalance: t,
          jettonBalance: s,
          operation: O
        }),
        getImmediateState: ({
          operation: O,
          amount: ee
        }) => H.getImmediateState({
          amount: ee,
          tonBalance: t,
          jettonBalance: s,
          operation: O,
          jettonTicker: e.ticker,
          fees: Y
        }),
        getState: ({
          operation: O,
          amount: ee
        }) => H.getState({
          tonBalance: t,
          jettonBalance: s,
          operation: O,
          amount: ee,
          jettonTicker: e.ticker,
          fees: Y,
          getBuyInfo: ({
            tons: be
          }) => I({
            tons: be,
            jettonAddress: N,
            masterAddress: Z,
            partnerAddress: se
          }),
          getSellInfo: ({
            jettons: be
          }) => E({
            jettons: be,
            jettonAddress: N,
            masterAddress: Z,
            partnerAddress: se
          })
        })
      },
      getMaxBuyAmount: L
    }
  },
  bo = ({
    balances: r,
    addresses: e,
    networkType: t,
    referrerToken: s
  }) => {
    switch (t) {
      case xs.TON:
        switch (e.sdkType) {
          case Xe.TON_FUN:
            return so({
              tonBalance: r.tokenBalance,
              addresses: e
            });
          case Xe.BLUM:
            return Tn({
              tonBalance: r.tokenBalance,
              addresses: e,
              referrerToken: s
            });
          default: {
            const n = e.sdkType;
            throw xe(`Unknown sdk type: ${n}`)
          }
        }
      default:
        throw xe(`Unknown network type: ${t}`)
    }
  },
  vo = ({
    isReleased: r,
    sdkType: e,
    dexType: t,
    addresses: s,
    jetton: n,
    networkType: o,
    balances: a,
    referrerToken: i
  }) => {
    switch (o) {
      case xs.TON: {
        const l = (() => {
          switch (e) {
            case Xe.TON_FUN:
              return ro({
                addresses: s,
                jetton: n,
                tonBalance: a.tokenBalance,
                jettonBalance: a.jettonBalance
              });
            case Xe.BLUM:
              return An({
                jetton: n,
                tonBalance: a.tokenBalance,
                jettonBalance: a.jettonBalance,
                referrerToken: i
              });
            default:
              throw xe("Unknown sdk type")
          }
        })();
        if (r) {
          const g = (() => {
            switch (t) {
              case Br.STONFI:
                return Mr({
                  jetton: n,
                  tonBalance: a.tokenBalance,
                  jettonBalance: a.jettonBalance
                });
              default:
                throw xe("Unknown dex type")
            }
          })();
          return {
            ...l,
            ...g
          }
        }
        return l
      }
      default:
        throw xe("Unknown network type")
    }
  };
export {
  uo as _, ho as a, yo as b, go as c, bo as d, fo as f, vo as g
};