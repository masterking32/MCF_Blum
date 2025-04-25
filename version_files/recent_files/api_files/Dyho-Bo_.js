var mr = Object.defineProperty;
var dr = (r, e, t) => e in r ? mr(r, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : r[e] = t;
var d = (r, e, t) => dr(r, typeof e != "symbol" ? e + "" : e, t);
import {
  d as rt,
  a9 as ur,
  h as hr,
  ac as Ns,
  o as _e,
  N as Fe,
  e as ee,
  C as Nt,
  Y as Is,
  bf as Me,
  br as yr,
  H as fr,
  x as Fs,
  bX as gr,
  aG as _r,
  ce as Le,
  n as Jt,
  ag as he,
  G as Lt,
  f as Wt,
  A as qt,
  j as os,
  V as as,
  c as It,
  w as br,
  c0 as vr,
  a as de,
  p as wr,
  aP as is,
  t as kr,
  cf as Tr,
  a2 as C,
  D as cs,
  b as Ar,
  cg as je,
  ch as We,
  ci as $e,
  bA as j,
  cj as ge,
  ck as Sr,
  cl as qr,
  cm as ps,
  a7 as jr,
  cn as S,
  co as nt,
  cp as W,
  ab as q,
  a6 as x,
  cq as D,
  cr as xs,
  b6 as Ze,
  bo as Ce,
  cs as Er,
  ct as $r,
  cu as Cr,
  aN as Br,
  bd as Pr,
  a4 as xe,
  cd as Os,
  cv as Xe,
  cw as Rr
} from "./Ces7X5md.js";
import {
  _ as Nr
} from "./BM2rCHKW.js";
import {
  B as Ir
} from "./Gk5sAXTq.js";
import {
  _ as Fr
} from "./D4d-YLQF.js";
import {
  _ as xr
} from "./b3XoLL2v.js";
import {
  p as Or,
  r as Mr,
  s as Ur,
  c as Ue,
  d as Kt,
  e as ot,
  g as Dr
} from "./CK2ch3G4.js";
import {
  d as Ms
} from "./Cc0BcG0U.js";
const yo = rt({
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
        t = ur(),
        s = hr().$webApp;

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
            y = (i.walletInfo || i.wallet).universalLink;
          if (yr(y)) {
            const f = "https://t.me/wallet/start?startapp=main-rc__a0646df863";
            n("ios", "weba", "android", "tdesktop", "webk") ? s.openTelegramLink(f) : s.openLink(f)
          } else s.openLink(y)
        },
        a = fr(() => t.memepad.memepadShowTopupButton({
          flowType: e.flowType,
          balance: e.valueBalance,
          value: e.inputValue,
          source: e.source
        }), 1e3).debouncedFunction;
      return Ns(() => {
        a()
      }), (i, p) => {
        const y = Fs;
        return _e(), Fe(y, {
          label: ("t" in i ? i.t : ee(Nt))("memepad.top_up_wallet_button"),
          fill: "",
          size: ee(Is).LARGE,
          onClick: o
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Gr = rt({
    __name: "StateButtonWrapper",
    props: {
      forceLoading: {
        type: Boolean,
        default: !1
      },
      buttonSize: {
        default: Is.LARGE
      }
    },
    setup(r) {
      const e = gr().status,
        t = _r();
      return (s, n) => {
        const o = Fs,
          a = Nr;
        return ee(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : ee(Le)).DISCONNECTED ? (_e(), Fe(o, {
          key: 0,
          label: ("t" in s ? s.t : ee(Nt))("wallet.connect.btn"),
          fill: "",
          size: s.buttonSize,
          onClick: n[0] || (n[0] = i => ee(t).runConnectionFlow())
        }, null, 8, ["label", "size"])) : ee(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : ee(Le)).MUST_RECONNECT ? (_e(), Fe(o, {
          key: 1,
          label: ("t" in s ? s.t : ee(Nt))("wallet.reconnect.btn"),
          fill: "",
          size: s.buttonSize,
          onClick: n[1] || (n[1] = i => ee(t).runConnectionFlow())
        }, null, 8, ["label", "size"])) : ee(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : ee(Le)).LOADING || s.forceLoading ? (_e(), Fe(a, {
          key: 2,
          class: Jt(["skeleton", `is-${s.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : ee(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : ee(Le)).CONNECTED ? he(s.$slots, "default", {
          key: 3
        }, void 0, !0) : Lt("", !0)
      }
    }
  }),
  fo = Wt(Gr, [
    ["__scopeId", "data-v-1e641cbd"]
  ]),
  Jr = rt({
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
        o = qt("el"),
        a = qt("input"),
        i = qt("hiddenInput"),
        p = () => {
          Tr(() => {
            a.value && (a.value.style.width = "", a.value.style.width = a.value.scrollWidth + "px")
          })
        },
        y = os({
          get: () => s.modelValue,
          set: k => {
            if (a.value && a.value.value !== s.modelValue) {
              const B = [...a.value.value].findIndex((K, H) => K !== s.modelValue[H]);
              B !== -1 && a.value.value[B] === "," && (k = k.slice(0, B) + "." + k.slice(B))
            }
            k = (s.modifier || (B => B))(k), a.value && a.value.value !== k && (a.value.value = k), n("update:modelValue", k)
          }
        });
      as(() => s.modelValue, p), as(() => a.value, p);
      const f = os(() => {
          if (!o.value || !a.value || !i.value) return;
          const k = parseInt(getComputedStyle(i.value).getPropertyValue("font-size")),
            R = parseInt(getComputedStyle(i.value).getPropertyValue("line-height")),
            B = `${s.modelValue} ${s.postfix}`,
            K = o.value.offsetWidth,
            O = (ne => {
              const oe = document.createElement("canvas").getContext("2d");
              return oe ? (oe.font = `700 ${k}px RoobertPro`, oe.measureText(ne).width) : void 0
            })(B.trim());
          if (!O) return;
          const z = Math.min(K / O * .75, 1);
          return {
            fontSize: `${k*z}px`,
            lineHeight: `${R*z}px`
          }
        }),
        h = () => {
          var k;
          (k = i.value) == null || k.focus()
        };
      Ns(() => {
        h()
      }), e({
        focusOnInput: h
      });
      const N = () => {
          setTimeout(() => {
            var k;
            (k = a.value) == null || k.focus()
          }, 100)
        },
        I = async () => {
          const k = new FontFace("RoobertPro", `url(${Ir})`, {
            weight: "700"
          });
          await Promise.all([document.fonts.ready, k.load()]), document.fonts.add(k)
        };
      return (() => {
        I()
      })(), (k, R) => (_e(), It("label", {
        ref: "el",
        class: Jt(["memepad-jetton-actions-controls-input", {
          "is-centered": k.centered
        }])
      }, [br(de("input", {
        ref: "input",
        "onUpdate:modelValue": R[0] || (R[0] = B => wr(y) ? y.value = B : null),
        type: "text",
        inputmode: "decimal",
        style: is(ee(f)),
        onBlur: R[1] || (R[1] = B => n("blur"))
      }, null, 36), [
        [vr, ee(y)]
      ]), de("input", {
        ref: "hiddenInput",
        type: "text",
        inputmode: "decimal",
        class: "hidden",
        onFocus: N
      }, null, 544), k.postfix ? (_e(), It("span", {
        key: 0,
        class: "label",
        style: is(ee(f))
      }, kr(k.postfix), 5)) : Lt("", !0)], 2))
    }
  }),
  go = Wt(Jr, [
    ["__scopeId", "data-v-44264923"]
  ]),
  _o = r => new C(r.replaceAll(",", "") || "0"),
  Lr = {
    class: "top"
  },
  Wr = {
    class: "center"
  },
  Kr = {
    class: "right"
  },
  Hr = {
    class: "inner"
  },
  zr = {
    class: "action"
  },
  Vr = {
    key: 0,
    class: "helpers"
  },
  Yr = rt({
    __name: "Modal",
    setup(r) {
      return (e, t) => {
        const s = Fr,
          n = xr;
        return _e(), Fe(n, {
          class: "memepad-jetton-modal"
        }, {
          default: cs(() => [he(e.$slots, "top", {}, () => [de("div", Lr, [t[0] || (t[0] = de("div", {
            class: "left"
          }, null, -1)), de("div", Wr, [he(e.$slots, "top-center", {}, void 0, !0)]), de("div", Kr, [he(e.$slots, "top-right", {}, void 0, !0)])])], !0), he(e.$slots, "default", {}, () => [de("div", Hr, [he(e.$slots, "inner", {}, void 0, !0)])], !0), Ar(s, {
            "ignore-tabs": "",
            "hide-space": ""
          }, {
            default: cs(() => [de("div", {
              class: Jt(["memepad-jetton-modal-bottom", {
                "with-helpers": e.$slots["bottom-helpers"]
              }])
            }, [de("div", zr, [he(e.$slots, "bottom-action", {}, void 0, !0)]), e.$slots["bottom-helpers"] ? (_e(), It("div", Vr, [he(e.$slots, "bottom-helpers", {}, void 0, !0)])) : Lt("", !0)], 2)]),
            _: 3
          })]),
          _: 3
        })
      }
    }
  }),
  bo = Wt(Yr, [
    ["__scopeId", "data-v-192a6d56"]
  ]);
class ie extends Error {
  constructor(e, t) {
    super(e, t), this.message = `${ie.prefix} ${this.constructor.name}${this.info?": "+this.info:""}${e?`
`+e:""}`, Object.setPrototypeOf(this, ie.prototype)
  }
  get info() {
    return ""
  }
}
ie.prefix = "[TON_CONNECT_SDK_ERROR]";
class Ht extends ie {
  get info() {
    return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Ht.prototype)
  }
}
class zt extends ie {
  get info() {
    return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, zt.prototype)
  }
}
class at extends ie {
  get info() {
    return "User rejects the action in the wallet."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, at.prototype)
  }
}
class it extends ie {
  get info() {
    return "Request to the wallet contains errors."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, it.prototype)
  }
}
class ct extends ie {
  get info() {
    return "App tries to send rpc request to the injected wallet while not connected."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, ct.prototype)
  }
}
class pt extends ie {
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
  lt, Vt = $e && $e.__importDefault || function(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  };
Object.defineProperty(J, "__esModule", {
  value: !0
});
var Us = J.Api = Ds = J.TonApiClient = J.ContentType = J.PoolImplementationType = J.TrustType = J.JettonVerificationType = J.BouncePhaseType = J.ComputeSkipReason = J.AccStatusChange = J.TransactionType = lt = J.AccountStatus = void 0,
  ls;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(ls || (lt = J.AccountStatus = ls = {}));
var ms;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(ms || (J.TransactionType = ms = {}));
var ds;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(ds || (J.AccStatusChange = ds = {}));
var us;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(us || (J.ComputeSkipReason = us = {}));
var hs;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(hs || (J.BouncePhaseType = hs = {}));
var ys;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(ys || (J.JettonVerificationType = ys = {}));
var fs;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(fs || (J.TrustType = fs = {}));
var gs;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(gs || (J.PoolImplementationType = gs = {}));
var ye;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(ye || (J.ContentType = ye = {}));
const Ft = j,
  Qr = Vt(Or),
  Zr = Vt(Mr),
  Xr = Vt(Ur),
  en = r => (0, Qr.default)(r, (e, t, s) => {
    if (typeof t == "number") {
      const n = s.source;
      return Number.isSafeInteger(t) || /[\.eE]/.test(n) ? t : BigInt(n)
    }
    return t
  }),
  jt = r => (0, Xr.default)(r, (e, t) => typeof t == "bigint" ? (0, Zr.default)(t.toString()) : t);
class tn {
  constructor(e = {}) {
    d(this, "baseUrl", "https://tonapi.io");
    d(this, "securityData", null);
    d(this, "securityWorker");
    d(this, "abortControllers", new Map);
    d(this, "customFetch", (...e) => fetch(...e));
    d(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    d(this, "setSecurityData", e => {
      this.securityData = e
    });
    d(this, "contentFormatters", {
      [ye.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? jt(e) : e,
      [ye.Text]: e => e !== null && typeof e != "string" ? jt(e) : e,
      [ye.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? jt(n) : `${n}`), t
      }, new FormData),
      [ye.UrlEncoded]: e => this.toQueryString(e)
    });
    d(this, "createAbortSignal", e => {
      if (this.abortControllers.has(e)) {
        const s = this.abortControllers.get(e);
        return s ? s.signal : void 0
      }
      const t = new AbortController;
      return this.abortControllers.set(e, t), t.signal
    });
    d(this, "abortRequest", e => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e))
    });
    d(this, "request", async ({
      body: e,
      secure: t,
      path: s,
      type: n,
      query: o,
      format: a,
      baseUrl: i,
      cancelToken: p,
      ...y
    }) => {
      const f = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        h = this.mergeRequestParams(y, f),
        N = o && this.toQueryString(o),
        I = n ?? ye.Json,
        F = this.contentFormatters[I],
        k = a || h.format;
      return this.customFetch(`${i||this.baseUrl||""}${s}${N?`?${N}`:""}`, {
        ...h,
        headers: {
          ...h.headers || {},
          ...I && I !== ye.FormData ? {
            "Content-Type": I
          } : {}
        },
        signal: (p ? this.createAbortSignal(p) : h.signal) || null,
        body: typeof e > "u" || e === null ? null : F(e)
      }).then(async R => {
        const B = R.clone();
        B.data = null, B.error = null;
        const K = k === "json" ? "text" : k,
          H = K ? await R[K]().then(O => (B.ok ? B.data = k === "json" ? en(O) : O : B.error = O, B)).catch(O => (B.error = O, B)) : B;
        if (p && this.abortControllers.delete(p), !R.ok) throw H;
        return H.data
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
var Ds = J.TonApiClient = tn;
const Gs = {
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

function sn(r) {
  return r.replace(/(_\w)/g, e => {
    var t;
    return ((t = e[1]) == null ? void 0 : t.toUpperCase()) ?? ""
  })
}

function rn(r) {
  return r.replace(/([A-Z])/g, e => `_${e.toLowerCase()}`)
}

function Et(r) {
  return Ft.Cell.fromBase64(ge.from(r, "hex").toString("base64"))
}

function nn(r) {
  return r.startsWith("-") ? BigInt(r.slice(1)) * -1n : BigInt(r)
}

function c(r, e) {
  const t = e && e.$ref,
    s = t ? Gs[t] : e;
  if (Array.isArray(r)) {
    const n = s && s.items;
    return r.map(o => c(o, n))
  } else if (s) {
    if (s.type === "string") {
      if (s.format === "address") return Ft.Address.parse(r);
      if (s.format === "cell") return r && Et(r);
      if (s.format === "cell-base64") return r && Ft.Cell.fromBase64(r)
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
          type: "int", value: nn(r.num)
        };
      case "cell":
        return {
          type: "cell", cell: Et(r.cell)
        };
      case "slice":
        return {
          type: "slice", slice: Et(r.slice)
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
      i = sn(o);
    return n[i] = c(r[o], a), n
  }, {}) : r
}

function te(r, e) {
  const t = e && e.$ref,
    s = t ? Gs[t] : e;
  if (Array.isArray(r)) {
    const n = s && s.items;
    return r.map(o => te(o, n))
  } else if (s && s.type === "string") {
    if (s.format === "address") return r.toRawString();
    if (s.format === "cell") return r.toBoc().toString("hex");
    if (s.format === "cell-base64") return r.toBoc().toString("base64")
  }
  return r !== null && typeof r == "object" ? Object.keys(r).reduce((n, o) => {
    const a = (s == null ? void 0 : s.properties) && s.properties[o],
      i = rn(o);
    return n[i] = te(r[o], a), n
  }, {}) : r
}
let on = class {
  constructor(e) {
    d(this, "http");
    d(this, "utilities", {
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
    d(this, "blockchain", {
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
          body: te(e, {
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
    d(this, "accounts", {
      getAccounts: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: "/v2/accounts/_bulk",
          method: "POST",
          query: t,
          body: te(e, {
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
    d(this, "nft", {
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
          body: te(e, {
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
    d(this, "dns", {
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
    d(this, "traces", {
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
    d(this, "events", {
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
    d(this, "inscriptions", {
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
    d(this, "jettons", {
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
    d(this, "staking", {
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
    d(this, "storage", {
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
    d(this, "rates", {
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
    d(this, "connect", {
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
          body: te(e, {
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
    d(this, "wallet", {
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
          body: te(e),
          ...t
        });
        return c(s)
      },
      tonConnectProof: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/auth/proof",
          method: "POST",
          body: te(e, {
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
    d(this, "gasless", {
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
            body: te(t, {
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
          body: te(e, {
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
    d(this, "liteServer", {
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
          body: te(e, {
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
    d(this, "multisig", {
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
    d(this, "emulation", {
      decodeMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/message/decode",
          method: "POST",
          body: te(e, {
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
          body: te(e, {
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
          body: te(e, {
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
          body: te(e, {
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
            body: te(t, {
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
Us = J.Api = on;
var an = class {
  constructor(r) {
    this.tonapi = r
  }
  open(r) {
    return j.openContract(r, e => xt(this.tonapi, e.address, e.init))
  }
  provider(r, e) {
    return xt(this.tonapi, r, e || null)
  }
};

function xt(r, e, t) {
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
          hash: Sr.from(s.lastTransactionHash, "base64")
        } : null,
        o = {
          active: a => {
            var i, p;
            return {
              type: "active",
              code: ((i = a.code) == null ? void 0 : i.toBoc()) ?? null,
              data: ((p = a.data) == null ? void 0 : p.toBoc()) ?? null
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
        args: n.map(cn)
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
      let p = null;
      typeof n.body == "string" ? p = j.comment(n.body) : n.body && (p = n.body), await s.send({
        to: e,
        value: i,
        bounce: a,
        sendMode: n.sendMode,
        init: o,
        body: p
      })
    },
    open(s) {
      return j.openContract(s, n => xt(r, n.address, n.init))
    },
    getTransactions(s, n, o, a) {
      return console.info("hash param in getTransactions action ignored, beacause not supported", o.toString("hex")), r.blockchain.getBlockchainAccountTransactions(s, {
        before_lt: n + 1n,
        limit: a
      }).then(({
        transactions: i
      }) => i.map(p => j.loadTransaction(p.raw.asSlice())))
    }
  }
}

function cn(r) {
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
var Ae = {};
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.defer = Js = Ae.internalOnchainContentToCell = Ae.sleep = void 0;
const pe = j,
  pn = qr();

function ln(r) {
  return new Promise(e => {
    setTimeout(() => e(), r)
  })
}
Ae.sleep = ln;

function mn(r) {
  const e = pe.Dictionary.empty(pe.Dictionary.Keys.Buffer(32), pe.Dictionary.Values.Cell());
  for (const t in r) {
    if (r[t] === void 0) continue;
    const s = (0, pe.beginCell)();
    if (t === "image_data") {
      const n = pe.Dictionary.empty(pe.Dictionary.Keys.Uint(32), pe.Dictionary.Values.Cell()),
        o = ge.from(r[t], "base64");
      for (let a = 0; a * 127 < o.length; a++) n.set(a, (0, pe.beginCell)().storeBuffer(o.subarray(a * 127, (a + 1) * 127)).endCell());
      s.storeUint(1, 8).storeDict(n).endCell()
    } else s.storeUint(0, 8).storeStringTail(r[t].toString());
    e.set((0, pn.sha256_sync)(t), s.endCell())
  }
  return (0, pe.beginCell)().storeUint(0, 8).storeDict(e).endCell()
}
var Js = Ae.internalOnchainContentToCell = mn;

function dn(r) {
  return (...e) => r(...e)
}
Ae.defer = dn;

function U(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r
}
var un = 0;

function ue(r) {
  return "__private_" + un++ + "_" + r
}
var hn = function() {
    function r(t) {
      this.api = void 0, this.adapter = void 0;
      var s = new Ds(t);
      this.api = new Us(s), this.adapter = new an(this.api)
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
  Q = function() {};
Q.deployGas = j.toNano(.02), Q.initialGas = j.toNano(.015), Q.buyGas = j.toNano(.08), Q.sellNotificationGas = j.toNano(.02), Q.sellGas = j.toNano(.05), Q.unlockGas = j.toNano(.05), Q.buyForward = j.toNano(.04);
var Ls = function() {};
Ls.buy = 2943683892;
var Ws = function() {
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
    }, e.sendBuy = function(t, s, n, o, a, i, p) {
      a === void 0 && (a = null), i === void 0 && (i = null), p === void 0 && (p = 0);
      try {
        return Promise.resolve(t.internal(s, {
          value: n + Q.buyGas,
          body: j.beginCell().storeUint(Ls.buy, 32).storeUint(p, 64).storeCoins(o).storeAddress(a).storeMaybeRef(i).endCell()
        })).then(function() {})
      } catch (y) {
        return Promise.reject(y)
      }
    }, r
  }(),
  et = function() {};
et.sell = 1948989144, et.unlock = 4043133115;
var Ot = function() {
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
    }, e.sendSell = function(t, s, n, o, a, i, p) {
      i === void 0 && (i = null), p === void 0 && (p = 0);
      try {
        return Promise.resolve(t.internal(s, {
          sendMode: j.SendMode.PAY_GAS_SEPARATELY,
          body: r.sellMessage(o, a, i, p),
          value: n
        })).then(function() {})
      } catch (y) {
        return Promise.reject(y)
      }
    }, e.sendUnlock = function(t, s, n) {
      n === void 0 && (n = 0);
      try {
        return Promise.resolve(t.internal(s, {
          sendMode: j.SendMode.PAY_GAS_SEPARATELY,
          body: r.unlockMessage(n),
          value: Q.unlockGas
        })).then(function() {})
      } catch (o) {
        return Promise.reject(o)
      }
    }, r
  }(),
  Ks = 1000000000000000000n,
  Mt = 800000000000000000n,
  Ut = ue("sqrt"),
  $t = ue("f"),
  le = ue("fReverse"),
  Ct = ue("fromNano"),
  yn = function() {
    function r(t, s) {
      Object.defineProperty(this, Ct, {
        value: bn
      }), Object.defineProperty(this, le, {
        value: _n
      }), Object.defineProperty(this, $t, {
        value: gn
      }), Object.defineProperty(this, Ut, {
        value: fn
      }), this.thresholdTons = void 0, this.curveA = void 0, this.thresholdTons = t, this.curveA = s
    }
    var e = r.prototype;
    return e.tonSupply = function(t) {
      return U(this, le)[le](t)
    }, e.calculateJettonAmount = function(t, s) {
      var n = U(this, le)[le](t);
      return U(this, $t)[$t](n + s) - t
    }, e.calculateTonAmount = function(t, s) {
      return U(this, le)[le](t) - U(this, le)[le](t - s)
    }, e.calculateBuyAmount = function(t, s, n) {
      var o = this.calculateJettonAmount(t, s * (10000n - n) / 10000n);
      return o + t > Mt ? Mt - t : o
    }, e.calculateSellAmount = function(t, s, n) {
      return this.calculateTonAmount(t, s) * (10000n - n) / 10000n
    }, e.calculatePrice = function(t) {
      var s = 1e9,
        n = this.calculateJettonAmount(t, BigInt(s));
      return s / Number(n)
    }, e.calculateMarketCap = function(t) {
      return this.calculatePrice(t) * U(this, Ct)[Ct](Ks)
    }, r
  }();

function fn(r) {
  for (var e = r, t = e + 1n >> 1n; t < e;) t = (e = t) + r / e >> 1n;
  return e
}

function gn(r) {
  if (r == 0n) return 0n;
  var e = 10n ** 9n;
  return U(this, Ut)[Ut](r * e * e) * this.curveA / e
}

function _n(r) {
  if (r == 0n) return 0n;
  var e = 10n ** 9n;
  return r ** 2n * e / this.curveA ** 2n / e
}

function bn(r) {
  return Number(r) / 10 ** 9
}
var Dt, Hs = function() {};
Hs.deployJetton = 3637132459,
  function(r) {
    r[r.STONFI = 0] = "STONFI", r[r.DEDUST = 1] = "DEDUST"
  }(Dt || (Dt = {}));
var _s = function() {
    function r(t, s) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = s
    }
    r.createFromAddress = function(t) {
      return new r(t)
    };
    var e = r.prototype;
    return e.sendDeployJetton = function(t, s, n, o, a, i, p, y, f) {
      y === void 0 && (y = null), f === void 0 && (f = 0);
      try {
        return p === void 0 && (p = 0n), Promise.resolve(t.internal(s, {
          value: n,
          body: j.beginCell().storeUint(Hs.deployJetton, 32).storeUint(f, 64).storeUint(o, 1).storeRef(a).storeBit(i).storeCoins(p).storeMaybeRef(y).endCell()
        })).then(function() {})
      } catch (h) {
        return Promise.reject(h)
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
  vn = function(r) {
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
          network: U(t, Oe)[Oe] ? ps.TESTNET : ps.MAINNET,
          messages: [o]
        }
      })
    } catch (n) {
      return Promise.reject(n)
    }
  },
  wn = j.toNano(2.5),
  Oe = ue("testnet"),
  se = ue("tokenomics"),
  me = ue("request"),
  ke = ue("minterContractFromAddress"),
  Bt = ue("walletContractFromAddress"),
  kn = function() {
    function r(t, s, n) {
      s === void 0 && (s = !1), n === void 0 && (n = !1), Object.defineProperty(this, Bt, {
        value: An
      }), Object.defineProperty(this, ke, {
        value: Tn
      }), Object.defineProperty(this, me, {
        value: vn
      }), Object.defineProperty(this, Oe, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, se, {
        writable: !0,
        value: void 0
      }), this.client = void 0, U(this, Oe)[Oe] = s;
      var o = n ? 16000000000000n : 653197264742n,
        a = n ? wn : 1499997865536n;
      U(this, se)[se] = new yn(a, o), this.client = new hn({
        baseUrl: s ? "https://testnet.tonapi.io" : "https://tonapi.io",
        apiKey: t
      })
    }
    var e = r.prototype;
    return e.sendDeployJetton = function(t, s, n, o, a, i, p, y) {
      p === void 0 && (p = null), y === void 0 && (y = 0);
      try {
        var f = this.client.open(_s.createFromAddress(s));
        return Promise.resolve(f.getConfig()).then(function(h) {
          var N = h.deployFee + Q.deployGas + (i == 0n ? Q.initialGas : i + Q.buyGas);
          a && (N += h.agentDeployFee);
          var I = Js(o);
          return Promise.resolve(f.sendDeployJetton(t, N, n, I, a, i, p, y)).then(function() {})
        })
      } catch (h) {
        return Promise.reject(h)
      }
    }, e.sendBuy = function(t, s, n, o, a, i) {
      a === void 0 && (a = null), i === void 0 && (i = 0);
      try {
        return Promise.resolve(U(this, ke)[ke](s).sendBuy(t, n, o, null, a, i)).then(function() {})
      } catch (p) {
        return Promise.reject(p)
      }
    }, e.sendSell = function(t, s, n, o, a, i) {
      a === void 0 && (a = null), i === void 0 && (i = 0);
      try {
        var p = Ot.createFromAddress(s),
          y = this.client.open(p);
        return Promise.resolve(y.sendSell(t, Q.sellGas, n, o, a, i)).then(function() {})
      } catch (f) {
        return Promise.reject(f)
      }
    }, e.sendUnlock = function(t, s, n) {
      n === void 0 && (n = 0);
      try {
        var o = Ot.createFromAddress(s),
          a = this.client.open(o);
        return Promise.resolve(a.sendUnlock(t, n)).then(function() {})
      } catch (i) {
        return Promise.reject(i)
      }
    }, e.getThresholdTons = function() {
      return U(this, se)[se].thresholdTons
    }, e.getTonSupply = function(t) {
      return U(this, se)[se].tonSupply(t)
    }, e.getMaxSupply = function() {
      return Ks
    }, e.getThresholdSupply = function() {
      return Mt
    }, e.getPrice = function(t) {
      return U(this, se)[se].calculatePrice(t)
    }, e.getMarketCap = function(t) {
      return U(this, se)[se].calculateMarketCap(t)
    }, e.getBuyAmount = function(t, s, n) {
      return U(this, se)[se].calculateBuyAmount(t, s, n)
    }, e.getSellAmount = function(t, s, n) {
      return U(this, se)[se].calculateSellAmount(t, s, n)
    }, e.getWalletAddress = function(t, s) {
      try {
        return Promise.resolve(U(this, ke)[ke](t).getWalletAddress(s))
      } catch (n) {
        return Promise.reject(n)
      }
    }, e.getTotalSupply = function(t) {
      try {
        return Promise.resolve(U(this, ke)[ke](t).getTotalSupply())
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getUnlocked = function(t) {
      try {
        return Promise.resolve(U(this, Bt)[Bt](t).getUnlocked())
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getDeployJettonRequest = function(t, s, n, o, a, i, p) {
      i === void 0 && (i = null), p === void 0 && (p = 0);
      try {
        var y = this;
        return Promise.resolve(U(y, me)[me](function(f) {
          return y.sendDeployJetton(f, t, s, n, o, a, i, p)
        }))
      } catch (f) {
        return Promise.reject(f)
      }
    }, e.getBuyRequest = function(t, s, n, o, a) {
      o === void 0 && (o = null), a === void 0 && (a = 0);
      try {
        var i = this;
        return Promise.resolve(U(i, me)[me](function(p) {
          return i.sendBuy(p, t, s, n, o, a)
        }))
      } catch (p) {
        return Promise.reject(p)
      }
    }, e.getSellRequest = function(t, s, n, o, a) {
      o === void 0 && (o = null), a === void 0 && (a = 0);
      try {
        var i = this;
        return Promise.resolve(U(i, me)[me](function(p) {
          return i.sendSell(p, t, s, n, o, a)
        }))
      } catch (p) {
        return Promise.reject(p)
      }
    }, e.getUnlockRequest = function(t, s) {
      s === void 0 && (s = 0);
      try {
        var n = this;
        return Promise.resolve(U(n, me)[me](function(o) {
          return n.sendUnlock(o, t, s)
        }))
      } catch (o) {
        return Promise.reject(o)
      }
    }, e.getJettonWalletAddress = function(t, s) {
      try {
        var n = this.client.open(Ws.createFromAddress(t));
        return Promise.resolve(n.getWalletAddress(s))
      } catch (o) {
        return Promise.reject(o)
      }
    }, e.getFactoryConfig = function(t) {
      try {
        var s = this.client.open(_s.createFromAddress(t));
        return Promise.resolve(s.getConfig())
      } catch (n) {
        return Promise.reject(n)
      }
    }, r
  }();

function Tn(r) {
  var e = Ws.createFromAddress(r);
  return this.client.open(e)
}

function An(r) {
  var e = Ot.createFromAddress(r);
  return this.client.open(e)
}
const zs = () => {
    const {
      getAddress: r,
      tonConnectSender: e,
      createGetWaitForLaunchStatusUntilOk: t,
      createGetReviewStepInfo: s
    } = Ue(), {
      TON_API_TOKEN: n,
      getTransactionStatus: o,
      getUserJettonBalance: a
    } = Kt(), {
      getMinReceive: i,
      wrapWithCache: p,
      memepadApi: y
    } = ot(), {
      isProd: f
    } = jr(), h = new kn(n, !1, !f.value), N = l => +String(l) / 1e4, I = {
      LAUNCH_STATUS_CHECK: 6e3,
      BUY_STATUS_CHECK: 6e3,
      SELL_STATUS_CHECK: 6e3,
      UNLOCK_STATUS_CHECK: 6e3
    }, F = {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: S(Q.buyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: S(Q.sellGas),
      MEMEPAD_JETTON_DEPLOY_NETWORK_FEE: S(Q.deployGas),
      MEMEPAD_JETTON_INITIAL_NETWORK_FEE: S(Q.initialGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: S(Q.unlockGas)
    }, k = {
      LAUNCH_FEE: new C(.0114),
      LAUNCH_BUY_FEE: new C(.012),
      BUY_FEE: new C(.0062),
      SELL_FEE: new C(.0044),
      UNLOCK_FEE: new C(.0037)
    }, R = {
      buyNetworkFee: F.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: F.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      deployNetworkFee: F.MEMEPAD_JETTON_DEPLOY_NETWORK_FEE,
      initialNetworkFee: F.MEMEPAD_JETTON_INITIAL_NETWORK_FEE,
      unlockNetworkFee: F.MEMEPAD_JETTON_UNLOCK_NETWORK_FEE,
      walletNetworkLaunchFee: k.LAUNCH_FEE,
      walletNetworkLaunchBuyFee: k.LAUNCH_BUY_FEE,
      walletNetworkBuyFee: k.BUY_FEE,
      walletNetworkSellFee: k.SELL_FEE,
      walletNetworkUnlockFee: k.UNLOCK_FEE
    }, B = ({
      hasShare: l
    }) => R.deployNetworkFee.plus(l ? 0 : R.initialNetworkFee), K = ({
      referrerToken: l
    }) => j.beginCell().storeUint(1675682413, 32).storeStringTail(l).endCell(), H = async l => {
      const m = await W(async () => await h.getTotalSupply(r(l)))();
      return q(m) ? x(S(m.data)) : m
    }, z = p(({
      masterAddress: l
    }) => `blumSdk:factoryConfig:${l.toString()}`, async ({
      masterAddress: l
    }) => {
      const m = await W(async () => await h.getFactoryConfig(r(l)))();
      return q(m) ? x(m.data) : m
    }), re = p(({
      masterAddress: l
    }) => `blumSdk:bclData:${l.toString()}`, async ({
      masterAddress: l
    }) => {
      const m = S(h.getThresholdSupply()),
        _ = S(h.getMaxSupply()),
        u = _.minus(m),
        A = S(h.getThresholdTons()),
        w = await z({
          masterAddress: l
        });
      if (!q(w)) return w;
      const {
        buyFeeBasis: E
      } = w.data, P = A.div(new C(1).minus(N(E))).toDecimalPlaces(9, C.ROUND_UP), M = w.data, V = S(w.data.agentDeployFee);
      return x({
        tokenForDexWithFees: P,
        tokenForDex: A,
        bclSupply: m,
        maxSupply: _,
        liqSupply: u,
        factoryConfig: M,
        aiAgentDeployFee: V
      })
    }), oe = async ({
      jettonAddress: l,
      masterAddress: m
    }) => {
      const _ = await re({
        masterAddress: m
      });
      if (!q(_)) return _;
      const {
        bclSupply: u,
        tokenForDex: A,
        liqSupply: w
      } = _.data, E = await H(l);
      if (!q(E)) return E;
      const P = E.data,
        M = new C(u).minus(P),
        V = S(h.getTonSupply(D(P))),
        X = V.div(A).times(100);
      return x({
        tokenForDex: A,
        tokenCollected: V,
        tokenCollectedPercent: X,
        bclSupply: u,
        liqSupply: w,
        totalSupply: P,
        availableSupply: M
      })
    }, Y = async ({
      masterAddress: l,
      tons: m
    }) => {
      const _ = D(new C(m)),
        u = await re({
          masterAddress: l
        });
      if (!q(u)) return u;
      const {
        tokenForDex: A,
        bclSupply: w,
        tokenForDexWithFees: E,
        maxSupply: P
      } = u.data, M = await z({
        masterAddress: l
      });
      if (!q(M)) return M;
      const {
        buyFeeBasis: V
      } = M.data, X = S(h.getBuyAmount(0n, _, V)), we = X, qe = X, Ne = w.minus(we), ce = S(h.getTonSupply(D(we))), ns = new C(h.getPrice(D(we))), ir = new C(ns).times(P), cr = ce.div(A).times(100), pr = X.div(w).times(100), lr = new C(m).minus(ce);
      return x({
        share: new C(m),
        tokenForDexWithFees: E,
        tokenForDex: A,
        tokenCollected: ce,
        availableSupply: Ne,
        maxSupply: P,
        tokenCollectedPercent: cr,
        jettonReceivePercent: pr,
        priceToken: ns,
        marketCapToken: ir,
        platformFee: lr,
        minReceive: qe,
        bclData: u.data
      })
    }, Z = p(({
      jettonAddress: l,
      userAddress: m
    }) => `blumSdk:jettonWalletAddress:${l.toString()}:${m.toString()}`, async ({
      jettonAddress: l,
      userAddress: m
    }) => await W(async () => await h.getJettonWalletAddress(r(l), r(m)))()), ve = async ({
      masterAddress: l,
      form: m,
      tonConnectUI: _,
      referrerToken: u
    }) => {
      const A = xs(m, nt.STONFI),
        w = await y.saveMemepadJettonInfo(A);
      if (!q(w)) return w;
      const E = e(_),
        P = w.data.queryId,
        M = Dt.STONFI,
        V = {
          name: m.name,
          description: m.description,
          image: Ze(m.iconFileKey),
          symbol: m.ticker,
          decimals: 9
        };
      A.socials.length && (V.social_links = JSON.stringify(A.socials.map(ce => ce.url))), A.bannerFileKey && (V.cover_image = Ze(A.bannerFileKey));
      const X = u ? K({
          referrerToken: u
        }) : void 0,
        we = m.aiAgentEnable,
        qe = await W(async () => await h.sendDeployJetton(E, r(l), M, V, we, D(new C(m.share)), X, P))();
      if (!q(qe)) return qe;
      const Ne = (await E.getResult()).hash;
      return x({
        queryId: P,
        transactionHash: Ne
      })
    }, _t = t(o, I.LAUNCH_STATUS_CHECK), bt = async ({
      tons: l,
      jettonAddress: m,
      masterAddress: _
    }) => {
      const u = await H(m);
      if (!q(u)) return u;
      const A = u.data,
        w = await z({
          masterAddress: _
        });
      if (!q(w)) return w;
      const {
        buyFeeBasis: E
      } = w.data, P = S(h.getBuyAmount(D(A), D(l), E)), M = P, V = i(P), X = l.times(N(E));
      return x({
        maxReceive: M,
        minReceive: V,
        platformFee: X,
        additionalInfo: void 0
      })
    }, vt = async ({
      jettons: l,
      jettonAddress: m,
      masterAddress: _
    }) => {
      const u = await H(m);
      if (!q(u)) return u;
      const A = u.data,
        w = await z({
          masterAddress: _
        });
      if (!q(w)) return w;
      const {
        sellFeeBasis: E
      } = w.data, P = S(h.getSellAmount(D(A), D(l), E)), M = P, V = i(P), X = P.div(1 - N(E)).minus(P);
      return x({
        maxReceive: M,
        minReceive: V,
        platformFee: X,
        additionalInfo: void 0
      })
    }, wt = async ({
      tons: l,
      jettonAddress: m,
      tradeInfoParams: _,
      tonConnectUI: u,
      referrerToken: A
    }) => {
      const w = e(u),
        E = A ? K({
          referrerToken: A
        }) : void 0,
        P = await W(async () => await h.sendBuy(w, r(m), D(l), D(_.minReceive), E))();
      return q(P) ? x((await w.getResult()).hash) : P
    }, kt = async ({
      jettons: l,
      jettonAddress: m,
      tradeInfoParams: _,
      userAddress: u,
      tonConnectUI: A,
      referrerToken: w
    }) => {
      const E = e(A),
        P = w ? K({
          referrerToken: w
        }) : void 0,
        M = await Z({
          jettonAddress: m,
          userAddress: u
        });
      if (!q(M)) return M;
      const V = M.data,
        X = await W(async () => await h.sendSell(E, V, D(l), D(_.minReceive), P))();
      return q(X) ? x((await E.getResult()).hash) : X
    }, Tt = () => Ce(({
      transactionHash: l
    }) => o({
      transactionHash: l
    }), () => {}, I.BUY_STATUS_CHECK), At = () => Ce(({
      transactionHash: l
    }) => o({
      transactionHash: l
    }), () => {}, I.SELL_STATUS_CHECK), St = async ({
      jettonAddress: l,
      userAddress: m
    }) => {
      const _ = await a({
        jettonAddress: l,
        userAddress: m
      });
      if (q(_) && _.data.isZero()) return x(!1);
      const u = await Z({
        jettonAddress: l,
        userAddress: m
      });
      if (!q(u)) return u;
      const A = u.data,
        w = await W(async () => await h.getUnlocked(A))();
      if (!q(w)) return w;
      const E = !w.data;
      return x(E)
    }, rs = async ({
      jettonAddress: l,
      userAddress: m,
      tonConnectUI: _
    }) => {
      const u = e(_),
        A = await Z({
          jettonAddress: l,
          userAddress: m
        });
      if (!q(A)) return A;
      const w = A.data,
        E = await W(async () => await h.sendUnlock(u, w))();
      return q(E) ? x((await u.getResult()).hash) : E
    }, g = ({
      transactionHash: l
    }) => o({
      transactionHash: l
    }), b = () => Ce(g, () => {}, I.UNLOCK_STATUS_CHECK), $ = s({
      getFees: ({
        share: l,
        overview: m
      }) => {
        const _ = !new C(l).isZero(),
          {
            buyNetworkFee: u,
            walletNetworkLaunchBuyFee: A,
            walletNetworkLaunchFee: w
          } = R,
          E = B({
            hasShare: _
          }),
          P = S(m.bclData.factoryConfig.deployFee);
        return {
          buyNetworkFee: u,
          launchNetworkFee: E,
          launchPlatformFee: P,
          walletNetworkLaunchFee: w,
          walletNetworkLaunchBuyFee: A
        }
      }
    });
    return {
      getJettonTotalSupply: H,
      getFactoryConfig: z,
      getBclData: re,
      createJetton: ve,
      getUnlockEnabled: St,
      unlockWallet: rs,
      getJettonOverview: Y,
      getJettonBclData: oe,
      getBuyInfo: bt,
      getSellInfo: vt,
      buyJetton: wt,
      sellJetton: kt,
      getWaitForBuyStatus: Tt,
      getWaitForSellStatus: At,
      getUnlockStatus: g,
      getWaitForUnlockStatus: b,
      getWaitForCreateStatus: _t,
      getMaxShareAmount: ({
        tokenBalance: l,
        overview: m
      }) => {
        const {
          buyNetworkFee: _,
          walletNetworkLaunchBuyFee: u
        } = R, A = B({
          hasShare: !0
        }), w = S(m.bclData.factoryConfig.deployFee), E = l.value.minus(A.plus(w).plus(u).plus(_)), P = m.bclData.tokenForDexWithFees;
        return P.lt(E) ? P : E.gte(0) ? E : new C(0)
      },
      getMaxBuyAmount: ({
        tokenBalance: l
      }) => {
        const {
          buyNetworkFee: m,
          walletNetworkBuyFee: _
        } = R;
        return l.value.minus(m).minus(_)
      },
      getReviewInfo: $,
      fees: R
    }
  },
  Sn = ({
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
    } = zs(), p = r.masterAddresses[nt.STONFI], y = Me().tonConnectUI.value;
    return {
      getJettonOverview: ({
        tons: f
      }) => s({
        tons: f,
        masterAddress: p
      }),
      createJetton: ({
        form: f
      }) => n({
        form: f,
        masterAddress: p,
        tonConnectUI: y,
        referrerToken: t
      }),
      getWaitForCreateStatus: () => o(),
      getReviewInfo: ({
        overview: f,
        share: h,
        jettonTicker: N,
        withAiAgent: I
      }) => i({
        overview: f,
        share: h,
        jettonTicker: N,
        tonBalance: e,
        withAiAgent: I
      }),
      getMaxShareAmount: ({
        tokenBalance: f,
        overview: h
      }) => a({
        tokenBalance: f,
        overview: h
      })
    }
  },
  qn = ({
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
    } = Kt(), {
      slippage: p
    } = ot(), {
      getUnlockEnabled: y,
      getWaitForUnlockStatus: f,
      unlockWallet: h,
      buyJetton: N,
      sellJetton: I,
      getWaitForBuyStatus: F,
      getWaitForSellStatus: k,
      getBuyInfo: R,
      getSellInfo: B,
      getMaxBuyAmount: K,
      fees: H
    } = zs(), O = r.address, z = r.masterContractAddress, ne = Me().tonConnectUI.value, re = o(), oe = a({
      getFees: () => H
    });
    return {
      getUserJettonBalance: () => i({
        jettonAddress: O,
        userAddress: n()
      }),
      getUnlockEnabled: () => y({
        jettonAddress: O,
        userAddress: n()
      }),
      getWaitForUnlockStatus: () => f(),
      unlockWallet: () => h({
        jettonAddress: O,
        userAddress: n(),
        tonConnectUI: ne
      }),
      getUnlockInfo: () => oe({
        tonBalance: e,
        jettonBalance: t
      }),
      getSlippage: () => p.value,
      updateSlippage: Y => p.value = Y,
      buyJetton: ({
        tons: Y,
        tradeInfoParams: L
      }) => N({
        tons: Y,
        jettonAddress: O,
        tradeInfoParams: L,
        tonConnectUI: ne,
        referrerToken: s
      }),
      sellJetton: ({
        jettons: Y,
        tradeInfoParams: L
      }) => I({
        jettons: Y,
        jettonAddress: O,
        userAddress: n(),
        tradeInfoParams: L,
        tonConnectUI: ne,
        referrerToken: s
      }),
      getWaitForBuyStatus: () => F(),
      getWaitForSellStatus: () => k(),
      tradeStateControls: {
        getEmptyState: ({
          operation: Y
        }) => re.getEmptyState({
          tonBalance: e,
          jettonBalance: t,
          operation: Y
        }),
        getImmediateState: ({
          operation: Y,
          amount: L
        }) => re.getImmediateState({
          amount: L,
          tonBalance: e,
          jettonBalance: t,
          operation: Y,
          jettonTicker: r.ticker,
          fees: H
        }),
        getState: ({
          operation: Y,
          amount: L
        }) => re.getState({
          tonBalance: e,
          jettonBalance: t,
          operation: Y,
          amount: L,
          jettonTicker: r.ticker,
          fees: H,
          getBuyInfo: ({
            tons: Z
          }) => R({
            tons: Z,
            jettonAddress: O,
            masterAddress: z
          }),
          getSellInfo: ({
            jettons: Z
          }) => B({
            jettons: Z,
            jettonAddress: O,
            masterAddress: z
          })
        })
      },
      getMaxBuyAmount: K
    }
  };
var ae = {},
  mt = {},
  dt = {},
  ut = {};
Object.defineProperty(ut, "__esModule", {
  value: !0
});
ut.normalizeCoin = jn;
ut.normalizeCoinEvent = En;
const Te = j;

function jn(r) {
  return {
    id: r.id,
    address: Te.Address.parse(r.address),
    metadata: r.metadata,
    totalSupply: BigInt(r.totalSupply),
    bclSupply: BigInt(r.bclSupply),
    liqSupply: BigInt(r.liqSupply),
    lastTradeDate: r.lastTradeDate,
    authorAddress: r.authorAddress === "" ? null : Te.Address.parse(r.authorAddress),
    tradingEnabled: r.tradingEnabled,
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral,
    createdAt: r.createdAt,
    tradingCloseFee: BigInt(r.tradingCloseFee),
    routerAddress: Te.Address.parse(r.routerAddress)
  }
}

function En(r) {
  if (r.type === "buy") return {
    type: "buy",
    trader: r.trader === "" ? null : Te.Address.parse(r.trader),
    tonValue: BigInt(r.tonValue),
    supplyDelta: BigInt(r.supplyDelta),
    newSupply: BigInt(r.newSupply),
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral
  };
  if (r.type === "sell") return {
    type: "sell",
    trader: r.trader === "" ? null : Te.Address.parse(r.trader),
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
    authorAddress: r.authorAddress === "" ? null : Te.Address.parse(r.authorAddress),
    tradingEnabled: r.tradingEnabled,
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral,
    createdAt: r.createdAt,
    tradingCloseFee: BigInt(r.tradingCloseFee),
    routerAddress: Te.Address.parse(r.routerAddress)
  };
  throw new Error("Unknown BCL event: " + JSON.stringify(r))
}
var ht = {};
const $n = Er($r);
Object.defineProperty(ht, "__esModule", {
  value: !0
});
ht.OfetchHttpProvider = void 0;
const bs = $n;
class Cn {
  get(e, t) {
    return (0, bs.ofetch)(e, {
      query: t.query
    })
  }
  post(e, t) {
    return (0, bs.ofetch)(e, {
      method: "POST",
      body: JSON.stringify(t)
    })
  }
}
ht.OfetchHttpProvider = Cn;
Object.defineProperty(dt, "__esModule", {
  value: !0
});
dt.BclClient = void 0;
const vs = j,
  Ke = ut,
  Bn = ht;
class Pn {
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
          event: (0, Ke.normalizeCoinEvent)(n.event),
          coinAddress: vs.Address.parse(n.coinAddress)
        })),
        cursor: s.cursor
      }
    }, this.endpoint = e.endpoint, this.httpProvider = e.httpProvider ?? new Bn.OfetchHttpProvider
  }
}
dt.BclClient = Pn;
var Pe = {},
  Se = {};
Object.defineProperty(Se, "__esModule", {
  value: !0
});
Se.Constants = void 0;
const He = j;
Se.Constants = {
  CoinDeploymentGas: (0, He.toNano)("0.05"),
  CoinBuyGas: (0, He.toNano)("0.05"),
  CoinSellGas: (0, He.toNano)("0.06"),
  WalletUnlockGas: (0, He.toNano)("0.05")
};
var be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
be.crc32 = Vs;
be.crc32str = In;
const Rn = -306674912;
let tt;

function Nn() {
  tt = new Int32Array(256);
  for (let r = 0; r < 256; r++) {
    let e = r;
    for (let t = 8; t > 0; --t) e = e & 1 ? e >>> 1 ^ Rn : e >>> 1;
    tt[r] = e
  }
}

function Vs(r) {
  let e = 4294967295;
  tt === void 0 && Nn();
  for (let t = 0; t < r.length; ++t) e = tt[(e ^ r[t]) & 255] ^ e >>> 8;
  return (e ^ -1) >>> 0
}

function In(r) {
  return Vs(ge.from(r))
}
var De = {};
Object.defineProperty(De, "__esModule", {
  value: !0
});
De.BclWallet = void 0;
const ze = j,
  ws = Se,
  ks = be;
class Yt {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Yt(e)
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
      value: ws.Constants.CoinSellGas,
      sendMode: ze.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, ze.beginCell)().storeUint((0, ks.crc32str)("op::sell"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.amount).storeCoins(s.minReceive).storeMaybeRef(s.referral).endCell()
    })
  }
  async sendUnlockWallet(e, t, s) {
    await e.internal(t, {
      value: ws.Constants.WalletUnlockGas,
      sendMode: ze.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, ze.beginCell)().storeUint((0, ks.crc32str)("op::unlock_wallet"), 32).storeUint(s.queryId ?? 0, 64).endCell()
    })
  }
  async getTransfersEnabled(e) {
    return (await e.get("get_transfers_enabled", [])).stack.readBoolean()
  }
}
De.BclWallet = Yt;
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.BclJetton = void 0;
Pe.parseBclEvent = On;
const Pt = j,
  Fn = Se,
  Qe = be,
  xn = De;

function On(r) {
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
class Qt {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Qt(e)
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
      cell: (0, Pt.beginCell)().storeAddress(t).endCell()
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
    let n = (0, Pt.beginCell)().storeUint((0, Qe.crc32str)("op::buy"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.minReceive).storeMaybeRef(s.referral);
    s.buyerAddress && n.storeAddress(s.buyerAddress), await e.internal(t, {
      value: s.tons + Fn.Constants.CoinBuyGas,
      sendMode: Pt.SendMode.PAY_GAS_SEPARATELY,
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
    return e.open(xn.BclWallet.createFromAddress(s))
  }
}
Pe.BclJetton = Qt;
var Ge = {},
  Re = {},
  yt = {};
Object.defineProperty(yt, "__esModule", {
  value: !0
});
yt.sha256ToBigint = void 0;
const Mn = Cr(),
  Un = r => BigInt("0x" + (0, Mn.createHash)("sha256").update(r).digest().toString("hex"));
yt.sha256ToBigint = Un;
Object.defineProperty(Re, "__esModule", {
  value: !0
});
Re.storeSnakeContentData = Zs;
Re.loadSnakeContentData = Xs;
Re.storeTokenOnchainContent = Gn;
Re.loadTokenOnchainContent = Jn;
const st = Ms,
  Dn = yt,
  Ys = 0,
  Qs = 0;

function Zs(r) {
  return e => e.storeUint(Qs, 8).storeStringTail(r)
}

function Xs(r) {
  if (r.loadUint(8) !== Qs) throw new Error("Not snake ContentData");
  return r.loadStringTail()
}
const er = {
  serialize: (r, e) => {
    e.storeRef((0, st.beginCell)().store(Zs(r)).endCell())
  },
  parse: r => Xs(r.loadRef().beginParse())
};

function Gn(r) {
  return e => {
    const t = st.Dictionary.empty(st.Dictionary.Keys.BigUint(256), er);
    for (const s in r) r[s] && t.set((0, Dn.sha256ToBigint)(s), r[s]);
    return e.storeUint(Ys, 8).storeDict(t)
  }
}

function Jn(r) {
  if (r.loadUint(8) !== Ys) throw new Error("Not on-chain content");
  return r.loadDict(st.Dictionary.Keys.BigUint(256), er)
}
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.BclMaster = void 0;
const Ee = j,
  Ts = Se,
  As = be,
  Ln = Re;
class Zt {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Zt(e)
  }
  async sendDeployCoin(e, t, s, n) {
    let o = (0, Ee.beginCell)().store((0, Ln.storeTokenOnchainContent)({
        name: s.name,
        description: s.description,
        image: s.imageUrl,
        symbol: s.symbol,
        decimals: "9",
        social_links: JSON.stringify(s.socialLinks),
        ...s.extraMetadata
      })).endCell(),
      a = (0, Ee.beginCell)().storeUint((0, As.crc32str)("op::deploy_coin"), 32).storeUint(s.queryId ?? 0, 64).storeRef(o).storeAddress(s.authorAddress).storeRef(s.referral ?? (0, Ee.beginCell)().endCell()),
      i = (0, Ee.beginCell)().storeUint(3547469196, 32).storeUint(s.queryId ?? 0, 64).endCell();
    if (n != null && n.firstBuy) {
      let f = (0, Ee.beginCell)().storeUint((0, As.crc32str)("op::buy"), 32).storeUint(n.firstBuy.queryId ?? 0, 64).storeCoins(n.firstBuy.minReceive).storeMaybeRef(n.firstBuy.referral);
      n.firstBuy.buyerAddress && f.storeAddress(n.firstBuy.buyerAddress), i = f.endCell()
    }
    a.storeMaybeRef(i);
    let p;
    n != null && n.forceDeploymentFee ? p = n.forceDeploymentFee : p = (await this.getMasterData(e)).deploymentFee;
    let y = p + Ts.Constants.CoinDeploymentGas;
    n != null && n.firstBuy && (y += Ts.Constants.CoinBuyGas + n.firstBuy.tons), await e.internal(t, {
      value: y,
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
Ge.BclMaster = Zt;
Object.defineProperty(mt, "__esModule", {
  value: !0
});
mt.BclSDK = void 0;
const Wn = dt,
  Kn = Pe,
  Rt = Ge;
class Xt {
  constructor(e) {
    this.apiProvider = e.apiProvider, this.api = new Wn.BclClient(e.clientOptions), this.masterAddress = e.masterAddress
  }
  openCoin(e) {
    return this.apiProvider.open(Kn.BclJetton.createFromAddress(e))
  }
  async openUserCoinWallet(e, t) {
    return await this.openCoin(e).getUserWallet(t)
  }
  async deployCoin(e, t, s) {
    await this.apiProvider.open(Rt.BclMaster.createFromAddress(this.masterAddress)).sendDeployCoin(e, t, s)
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
    return await this.apiProvider.open(Rt.BclMaster.createFromAddress(this.masterAddress)).getCoinsForTons(e)
  }
  async getMasterData() {
    return await this.apiProvider.open(Rt.BclMaster.createFromAddress(this.masterAddress)).getMasterData()
  }
  open(e) {
    return this.apiProvider.open(e)
  }
  static create(e) {
    return new Xt(e)
  }
}
mt.BclSDK = Xt;
var ft = {},
  G = {};
Object.defineProperty(G, "__esModule", {
  value: !0
});
var tr = G.Api = sr = G.HttpClient = G.ContentType = G.PoolImplementationType = G.TrustType = G.JettonVerificationType = G.BouncePhaseType = G.ComputeSkipReason = G.AccStatusChange = G.TransactionType = G.AccountStatus = void 0,
  Ss;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(Ss || (G.AccountStatus = Ss = {}));
var qs;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(qs || (G.TransactionType = qs = {}));
var js;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(js || (G.AccStatusChange = js = {}));
var Es;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(Es || (G.ComputeSkipReason = Es = {}));
var $s;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})($s || (G.BouncePhaseType = $s = {}));
var Cs;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(Cs || (G.JettonVerificationType = Cs = {}));
var Bs;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(Bs || (G.TrustType = Bs = {}));
var Ps;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(Ps || (G.PoolImplementationType = Ps = {}));
var fe;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(fe || (G.ContentType = fe = {}));
class Hn {
  constructor(e = {}) {
    d(this, "baseUrl", "https://tonapi.io");
    d(this, "securityData", null);
    d(this, "securityWorker");
    d(this, "abortControllers", new Map);
    d(this, "customFetch", (...e) => fetch(...e));
    d(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    d(this, "setSecurityData", e => {
      this.securityData = e
    });
    d(this, "contentFormatters", {
      [fe.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
      [fe.Text]: e => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
      [fe.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? JSON.stringify(n) : `${n}`), t
      }, new FormData),
      [fe.UrlEncoded]: e => this.toQueryString(e)
    });
    d(this, "createAbortSignal", e => {
      if (this.abortControllers.has(e)) {
        const s = this.abortControllers.get(e);
        return s ? s.signal : void 0
      }
      const t = new AbortController;
      return this.abortControllers.set(e, t), t.signal
    });
    d(this, "abortRequest", e => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e))
    });
    d(this, "request", async ({
      body: e,
      secure: t,
      path: s,
      type: n,
      query: o,
      format: a,
      baseUrl: i,
      cancelToken: p,
      ...y
    }) => {
      const f = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        h = this.mergeRequestParams(y, f),
        N = o && this.toQueryString(o),
        I = this.contentFormatters[n || fe.Json],
        F = a || h.format;
      return this.customFetch(`${i||this.baseUrl||""}${s}${N?`?${N}`:""}`, {
        ...h,
        headers: {
          ...h.headers || {},
          ...n && n !== fe.FormData ? {
            "Content-Type": n
          } : {}
        },
        signal: (p ? this.createAbortSignal(p) : h.signal) || null,
        body: typeof e > "u" || e === null ? null : I(e)
      }).then(async k => {
        const R = k.clone();
        R.data = null, R.error = null;
        const B = F ? await k[F]().then(K => (R.ok ? R.data = K : R.error = K, R)).catch(K => (R.error = K, R)) : R;
        if (p && this.abortControllers.delete(p), !k.ok) throw B;
        return B.data
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
var sr = G.HttpClient = Hn;
class zn {
  constructor(e) {
    d(this, "http");
    d(this, "utilities", {
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
    d(this, "blockchain", {
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
    d(this, "accounts", {
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
    d(this, "nft", {
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
    d(this, "dns", {
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
    d(this, "traces", {
      getTrace: (e, t = {}) => this.http.request({
        path: `/v2/traces/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    d(this, "events", {
      getEvent: (e, t = {}) => this.http.request({
        path: `/v2/events/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    d(this, "inscriptions", {
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
    d(this, "jettons", {
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
    d(this, "extraCurrency", {
      getExtraCurrencyInfo: (e, t = {}) => this.http.request({
        path: `/v2/extra-currency/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    d(this, "staking", {
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
    d(this, "storage", {
      getStorageProviders: (e = {}) => this.http.request({
        path: "/v2/storage/providers",
        method: "GET",
        format: "json",
        ...e
      })
    });
    d(this, "rates", {
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
    d(this, "connect", {
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
    d(this, "wallet", {
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
    d(this, "gasless", {
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
    d(this, "liteServer", {
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
    d(this, "multisig", {
      getMultisigAccount: (e, t = {}) => this.http.request({
        path: `/v2/multisig/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    d(this, "emulation", {
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
tr = G.Api = zn;
var Je = {};
Object.defineProperty(Je, "__esModule", {
  value: !0
});
Je.runGetMethod = Vn;
Je.TvmStackRecordToTupleItem = es;
Je.TupleItemToTonapiString = rr;
const Gt = j;
async function Vn(r, e, t, s) {
  const n = await r.blockchain.execGetMethodForBlockchainAccount(e.toRawString(), t, {
    args: s == null ? void 0 : s.map(rr)
  });
  if (!n.success || n.exit_code !== 0) throw new Error;
  return {
    stack: new Gt.TupleReader(n.stack.map(es))
  }
}

function es(r) {
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
          cell: Gt.Cell.fromBase64(r.cell)
        }
      } catch {
        return {
          type: "cell",
          cell: Gt.Cell.fromBase64(ge.from(r.cell, "hex").toString("base64"))
        }
      }
    case "null":
      return {
        type: "null"
      };
    case "tuple":
      return {
        type: "tuple", items: r.tuple.map(es)
      };
    default:
      throw new Error(`Unknown type ${r.type}`)
  }
}

function rr(r) {
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
ft.simpleTonapiProvider = Yn;
ft.createProvider = ts;
const Ve = G,
  Ie = j,
  Rs = Je;

function Yn(r) {
  return {
    open(e) {
      return (0, Ie.openContract)(e, t => ts(r, t))
    }
  }
}

function ts(r, e) {
  return {
    async getState() {
      const t = await r.blockchain.getBlockchainRawAccount(e.address.toRawString());
      let s;
      if (t.status === Ve.AccountStatus.Nonexist || t.status === Ve.AccountStatus.Uninit) s = {
        type: "uninit"
      };
      else if (t.status === Ve.AccountStatus.Active) s = {
        type: "active",
        code: t.code ? ge.from(t.code, "hex") : null,
        data: t.data ? ge.from(t.data, "hex") : null
      };
      else if (t.status === Ve.AccountStatus.Frozen) s = {
        type: "frozen",
        stateHash: ge.from(t.frozen_hash, "hex")
      };
      else throw new Error("Unknown state");
      return {
        balance: BigInt(t.balance),
        last: t.last_transaction_hash ? {
          lt: BigInt(t.last_transaction_lt),
          hash: ge.from(t.last_transaction_hash, "hex")
        } : null,
        state: s
      }
    },
    async get(t, s) {
      const n = await r.blockchain.execGetMethodForBlockchainAccount(e.address.toRawString(), t, {
        args: s == null ? void 0 : s.map(Rs.TupleItemToTonapiString)
      });
      if (!n.success || n.exit_code !== 0) throw new Error;
      return {
        stack: new Ie.TupleReader(n.stack.map(Rs.TvmStackRecordToTupleItem))
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
      return (0, Ie.openContract)(t, s => ts(r, s))
    },
    async getTransactions(t, s, n, o) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    }
  }
}
var ss = {},
  Be = {};
Object.defineProperty(Be, "__esModule", {
  value: !0
});
Be.delay = Be.unixtime = void 0;
const Qn = () => Math.floor(Date.now() / 1e3);
Be.unixtime = Qn;
const Zn = r => new Promise(e => {
  setTimeout(() => e(), r)
});
Be.delay = Zn;
Object.defineProperty(ss, "__esModule", {
  value: !0
});
ss.tonConnectSender = eo;
const Ye = j,
  Xn = Be;

function eo(r) {
  let e;
  const t = [];
  return {
    get address() {
      var n;
      const s = (n = r.account) == null ? void 0 : n.address;
      return s ? Ye.Address.parse(s) : void 0
    },
    async send(s) {
      var N;
      const n = (0, Xn.unixtime)() + 600,
        o = s.to.toString({
          urlSafe: !0,
          bounceable: !0
        }),
        a = (N = this.address) == null ? void 0 : N.toRawString(),
        i = s.value.toString();
      let p;
      s.init && (p = (0, Ye.beginCell)().store((0, Ye.storeStateInit)(s.init)).endCell().toBoc().toString("base64"));
      let y;
      s.body && (y = s.body.toBoc().toString("base64"));
      const f = await r.sendTransaction({
          validUntil: n,
          from: a,
          messages: [{
            address: o,
            amount: i,
            stateInit: p,
            payload: y
          }]
        }),
        h = Ye.Cell.fromBase64(f.boc);
      e = {
        msg: h,
        hash: h.hash().toString("hex")
      }, t.forEach(I => I(e))
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
var nr = {};
Object.defineProperty(nr, "__esModule", {
  value: !0
});
var gt = {};
Object.defineProperty(gt, "__esModule", {
  value: !0
});
gt.packReferralConfig = so;
gt.unpackReferralConfig = ro;
const to = Ms,
  or = be;

function so(r) {
  let e = (0, to.beginCell)().storeUint((0, or.crc32str)("ref_v1"), 32).storeAddress(r.partner);
  if (r.platformTag && e.storeAddress(r.platformTag), r.extraTag) {
    if (!r.platformTag) throw new Error("extraTag should only be set if platformTag is present");
    e.storeAddress(r.extraTag)
  }
  return e.endCell()
}

function ro(r) {
  let e = r.beginParse();
  if (e.loadUint(32) !== (0, or.crc32str)("ref_v1")) throw new Error("Unknown referral format");
  let s = e.loadAddress(),
    n, o;
  return e.remainingBits > 0 && (n = e.loadAddress()), e.remainingBits > 0 && (o = e.loadAddress()), {
    partner: s,
    platformTag: n,
    extraTag: o
  }
}(function(r) {
  var e = $e && $e.__createBinding || (Object.create ? function(o, a, i, p) {
      p === void 0 && (p = i);
      var y = Object.getOwnPropertyDescriptor(a, i);
      (!y || ("get" in y ? !a.__esModule : y.writable || y.configurable)) && (y = {
        enumerable: !0,
        get: function() {
          return a[i]
        }
      }), Object.defineProperty(o, p, y)
    } : function(o, a, i, p) {
      p === void 0 && (p = i), o[p] = a[i]
    }),
    t = $e && $e.__exportStar || function(o, a) {
      for (var i in o) i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && e(a, o, i)
    };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.crc32 = r.crc32str = r.tonConnectSender = void 0, t(mt, r), t(ft, r);
  var s = ss;
  Object.defineProperty(r, "tonConnectSender", {
    enumerable: !0,
    get: function() {
      return s.tonConnectSender
    }
  });
  var n = be;
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
  }), t(nr, r), t(Ge, r), t(Pe, r), t(De, r), t(Se, r), t(gt, r)
})(ae);
const ar = () => {
    const {
      getAddress: r,
      tonConnectSender: e,
      createGetWaitForLaunchStatusUntilOk: t,
      createGetReviewStepInfo: s
    } = Ue(), {
      TON_API_TOKEN: n,
      getTransactionStatus: o
    } = Kt(), {
      getMinReceive: a,
      memepadApi: i,
      wrapWithCache: p
    } = ot(), y = new tr(new sr({
      baseUrl: "https://tonapi.io",
      baseApiParams: {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${n}`
        }
      }
    })), f = {
      LAUNCH_STATUS_CHECK: 18e3,
      BUY_STATUS_CHECK: 18e3,
      SELL_STATUS_CHECK: 18e3,
      UNLOCK_STATUS_CHECK: 18e3
    }, h = {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: S(ae.Constants.CoinBuyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: S(ae.Constants.CoinSellGas),
      MEMEPAD_JETTON_LAUNCH_NETWORK_FEE: S(ae.Constants.CoinDeploymentGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: S(ae.Constants.WalletUnlockGas)
    }, N = {
      LAUNCH_FEE: new C(.0114),
      LAUNCH_BUY_FEE: new C(.012),
      BUY_FEE: new C(.0062),
      SELL_FEE: new C(.0044),
      UNLOCK_FEE: new C(.0037)
    }, I = {
      buyNetworkFee: h.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: h.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      launchNetworkFee: h.MEMEPAD_JETTON_LAUNCH_NETWORK_FEE,
      unlockNetworkFee: h.MEMEPAD_JETTON_UNLOCK_NETWORK_FEE,
      walletNetworkLaunchFee: N.LAUNCH_FEE,
      walletNetworkLaunchBuyFee: N.LAUNCH_BUY_FEE,
      walletNetworkBuyFee: N.BUY_FEE,
      walletNetworkSellFee: N.SELL_FEE,
      walletNetworkUnlockFee: N.UNLOCK_FEE
    }, F = g => {
      const b = `tonFunSdk:${g.toString()}`,
        $ = Pr(b, () => new Map),
        T = $.value.get(b);
      if (T) return T;
      const v = ae.BclSDK.create({
        apiProvider: ae.simpleTonapiProvider(y),
        clientOptions: {
          endpoint: ""
        },
        masterAddress: r(g)
      });
      return $.value.set(b, v), v
    }, k = g => new C(1).minus(S(g.fees)).div(S(g.coins)), B = p(({
      masterAddress: g
    }) => `tonFunSdk:bclData:${g.toString()}`, async ({
      masterAddress: g
    }) => {
      const b = await W(async () => await F(g).getMasterData())();
      if (!q(b)) return Br(b);
      const $ = S(b.data.fullPriceTon),
        T = S(b.data.fullPriceTon).minus(S(b.data.fullPriceTonFees)),
        v = S(b.data.bclSupply),
        l = S(b.data.liqSupply),
        m = v.plus(l),
        _ = new C(0);
      return x({
        tokenForDexWithFees: $,
        tokenForDex: T,
        bclSupply: v,
        liqSupply: l,
        maxSupply: m,
        launchPlatformFee: S(b.data.deploymentFee),
        aiAgentDeployFee: _
      })
    }), H = p(({
      tons: g,
      masterAddress: b
    }) => `tonFunSdk:firstCoinsForTons:${b.toString()}:${g.toString()}`, async ({
      tons: g,
      masterAddress: b
    }) => await W(async () => await F(b).getFirstCoinsForTons(D(new C(g))))()), z = p(({
      tons: g,
      masterAddress: b
    }) => `tonFunSdk:jettonOverview:${b.toString()}:${g.toString()}`, async ({
      tons: g,
      masterAddress: b
    }) => {
      const $ = new C(g),
        T = await B({
          masterAddress: b
        });
      if (!q(T)) return T;
      const {
        tokenForDex: v,
        tokenForDexWithFees: l,
        bclSupply: m,
        maxSupply: _
      } = T.data, u = await (async () => new C($).isZero() ? x({
        fees: D(new C(0)),
        coins: D(new C(0))
      }) : await H({
        tons: g,
        masterAddress: b
      }))();
      if (!q(u)) return u;
      const A = u.data,
        w = await (async () => {
          const ce = await H({
            masterAddress: b,
            tons: 1
          });
          return q(ce) ? x(k(ce.data)) : ce
        })();
      if (!q(w)) return w;
      const E = w.data,
        P = E.mul(_),
        M = new C(S(A.coins)),
        V = new C(S(A.fees)),
        X = new C($).minus(V),
        we = X.div(v).times(100),
        qe = M.div(m).times(100),
        Ne = new C(m).sub(M);
      return x({
        share: $,
        tokenForDexWithFees: l,
        tokenForDex: v,
        tokenCollected: X,
        tokenCollectedPercent: we,
        jettonReceivePercent: qe,
        priceToken: E,
        marketCapToken: P,
        availableSupply: Ne,
        maxSupply: _,
        platformFee: V,
        minReceive: M,
        bclData: T.data
      })
    }), ne = async ({
      form: g,
      userAddress: b,
      masterAddress: $,
      tonConnectUI: T
    }) => {
      const v = xs(g, nt.STONFI_TON_FUN),
        l = await i.saveMemepadJettonInfo(v);
      if (!q(l)) return l;
      const m = new C(g.share),
        _ = g.overview.minReceive,
        u = {
          name: v.name,
          description: v.description,
          imageUrl: Ze(v.iconFileKey),
          symbol: v.ticker,
          share: D(m),
          referral: l.data.referral,
          partnerAddress: l.data.partnerAddress,
          queryId: l.data.queryId,
          minReceive: D(_)
        },
        A = {};
      v.socials.length && (A.social_links = JSON.stringify(v.socials.map(V => V.url))), v.bannerFileKey && (A.cover_image = Ze(v.bannerFileKey));
      const w = {
          authorAddress: r(b),
          name: u.name,
          description: u.description,
          imageUrl: u.imageUrl,
          symbol: u.symbol,
          referral: ae.packReferralConfig({
            partner: r(u.partnerAddress),
            platformTag: r(u.referral)
          }),
          queryId: j.toNano(u.queryId),
          extraMetadata: A
        },
        E = {
          firstBuy: m.isZero() ? void 0 : {
            tons: u.share,
            minReceive: u.minReceive,
            referral: ae.packReferralConfig({
              partner: r(u.partnerAddress)
            }),
            buyerAddress: r(b)
          }
        },
        P = e(T),
        M = await W(async () => await F($).deployCoin(P, w, E))();
      return q(M) ? x({
        queryId: l.data.queryId,
        transactionHash: (await P.getResult()).hash
      }) : M
    }, re = () => t(o, f.LAUNCH_STATUS_CHECK), oe = async ({
      jettonAddress: g,
      masterAddress: b
    }) => {
      const $ = await W(async () => await F(b).openCoin(r(g)))();
      if (!q($)) return $;
      const T = await W(async () => await $.data.getBclData())();
      if (!q(T)) return T;
      const v = S(T.data.totalSupply),
        l = S(T.data.fullPriceTon).minus(S(T.data.fullPriceTonFees)),
        m = S(T.data.tonLiqCollected),
        _ = m.div(l).times(100),
        u = S(T.data.bclSupply),
        A = S(T.data.liqSupply),
        w = u.minus(v);
      return x({
        tokenForDex: l,
        tokenCollected: m,
        tokenCollectedPercent: _,
        bclSupply: u,
        liqSupply: A,
        totalSupply: v,
        availableSupply: w
      })
    }, Y = async ({
      jettonAddress: g,
      userAddress: b,
      masterAddress: $
    }) => {
      var m, _, u;
      const T = await W(async () => await F($).openCoin(r(g)).getUserWallet(r(b)))();
      if (!q(T)) return T;
      const v = await W(async () => !await T.data.getTransfersEnabled())();
      if (!q(v)) return ((m = v.extra) == null ? void 0 : m.status) === 404 && ((u = (_ = v.extra) == null ? void 0 : _.error) == null ? void 0 : u.error) === "entity not found" ? x(!1) : v;
      const l = v.data;
      return x(l)
    }, L = async ({
      jettonAddress: g,
      userAddress: b,
      masterAddress: $,
      tonConnectUI: T
    }) => {
      const v = F($).openCoin(r(g)),
        l = await W(async () => await v.getUserWallet(r(b)))();
      if (!q(l)) return l;
      const m = e(T),
        _ = await W(async () => await l.data.sendUnlockWallet(m, {}))();
      return q(_) ? x((await m.getResult()).hash) : _
    }, Z = () => Ce(async ({
      transactionHash: g
    }) => await o({
      transactionHash: g
    }), () => {}, f.UNLOCK_STATUS_CHECK), ve = async ({
      tons: g,
      masterAddress: b,
      jettonAddress: $,
      partnerAddress: T
    }) => {
      const v = await W(async () => await F(b).openCoin(r($)).getCoinsForTons(D(g)))();
      if (!q(v)) return v;
      const l = S(v.data.coins),
        m = a(l);
      return x({
        minReceive: m,
        maxReceive: l,
        platformFee: S(v.data.fees),
        additionalInfo: {
          partnerAddress: T.toString()
        }
      })
    }, _t = async ({
      jettons: g,
      masterAddress: b,
      jettonAddress: $,
      partnerAddress: T
    }) => {
      const v = await W(async () => await F(b).openCoin(r($)).getTonsForCoins(D(g)))();
      if (!q(v)) return v;
      const l = S(v.data.tons),
        m = a(l);
      return x({
        minReceive: m,
        maxReceive: l,
        platformFee: S(v.data.fees),
        additionalInfo: {
          partnerAddress: T.toString()
        }
      })
    }, bt = async ({
      userAddress: g,
      jettonAddress: b,
      masterAddress: $
    }) => {
      const T = await W(async () => await F($).getUserCoinBalance(r(b), r(g)))();
      return q(T) ? x(S(T.data)) : T
    }, vt = async ({
      tons: g,
      tradeInfoParams: b,
      masterAddress: $,
      jettonAddress: T,
      tonConnectUI: v
    }) => {
      const l = {
          tons: D(g),
          minReceive: D(b.minReceive),
          referral: ae.packReferralConfig({
            partner: r(b.additionalInfo.partnerAddress)
          })
        },
        m = e(v),
        _ = await W(async () => await F($).openCoin(r(T)).sendBuy(m, l))();
      return q(_) ? x((await m.getResult()).hash) : _
    }, wt = async ({
      jettons: g,
      tradeInfoParams: b,
      jettonAddress: $,
      masterAddress: T,
      userAddress: v,
      tonConnectUI: l
    }) => {
      const m = await F(T).openCoin(r($)).getUserWallet(r(v)),
        _ = e(l),
        u = await W(async () => await m.sendSellCoins(_, {
          amount: D(g),
          minReceive: D(b.minReceive),
          referral: ae.packReferralConfig({
            partner: r(b.additionalInfo.partnerAddress)
          }),
          queryId: 0n
        }))();
      return q(u) ? x((await _.getResult()).hash) : u
    }, kt = () => Ce(({
      transactionHash: g
    }) => o({
      transactionHash: g
    }), () => {}, f.BUY_STATUS_CHECK), Tt = () => Ce(({
      transactionHash: g
    }) => o({
      transactionHash: g
    }), () => {}, f.SELL_STATUS_CHECK), At = ({
      tokenBalance: g,
      overview: b
    }) => {
      const {
        buyNetworkFee: $,
        launchNetworkFee: T,
        walletNetworkLaunchBuyFee: v
      } = I, l = b.bclData.launchPlatformFee, m = g.value.minus(T.plus(l).plus(v).plus($)), _ = b.bclData.tokenForDexWithFees;
      return _.lt(m) ? _ : m.gte(0) ? m : new C(0)
    }, St = s({
      getFees: ({
        overview: g
      }) => {
        const {
          buyNetworkFee: b,
          launchNetworkFee: $,
          walletNetworkLaunchBuyFee: T,
          walletNetworkLaunchFee: v
        } = I, l = g.bclData.launchPlatformFee;
        return {
          buyNetworkFee: b,
          launchNetworkFee: $,
          launchPlatformFee: l,
          walletNetworkLaunchFee: v,
          walletNetworkLaunchBuyFee: T
        }
      }
    });
    return {
      getCoinPriceInTons: k,
      getBclData: B,
      getUnlockEnabled: Y,
      getJettonBclData: oe,
      unlockWallet: L,
      getWaitForUnlockStatus: Z,
      getBuyInfo: ve,
      getSellInfo: _t,
      buyJetton: vt,
      sellJetton: wt,
      getUserJettonBalance: bt,
      getWaitForBuyStatus: kt,
      getWaitForSellStatus: Tt,
      getJettonOverview: z,
      createJetton: ne,
      getWaitForCreateStatus: re,
      getMaxShareAmount: At,
      getMaxBuyAmount: ({
        tokenBalance: g
      }) => {
        const {
          buyNetworkFee: b,
          walletNetworkBuyFee: $
        } = I;
        return g.value.minus(b).minus($)
      },
      getReviewInfo: St,
      fees: I
    }
  },
  no = ({
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
    } = ar(), p = r.masterAddresses[nt.STONFI_TON_FUN], y = Me().tonConnectUI.value;
    return {
      getJettonOverview: ({
        tons: f
      }) => s({
        tons: f,
        masterAddress: p
      }),
      createJetton: ({
        form: f
      }) => n({
        form: f,
        masterAddress: p,
        tonConnectUI: y,
        userAddress: t()
      }),
      getWaitForCreateStatus: () => o()(),
      getReviewInfo: ({
        overview: f,
        share: h,
        jettonTicker: N,
        withAiAgent: I
      }) => i({
        overview: f,
        share: h,
        jettonTicker: N,
        tonBalance: e,
        withAiAgent: I
      }),
      getMaxShareAmount: ({
        tokenBalance: f,
        overview: h
      }) => a({
        tokenBalance: f,
        overview: h
      })
    }
  },
  oo = ({
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
      getUserJettonBalance: p,
      getUnlockEnabled: y,
      getWaitForUnlockStatus: f,
      unlockWallet: h,
      buyJetton: N,
      sellJetton: I,
      getWaitForBuyStatus: F,
      getWaitForSellStatus: k,
      getBuyInfo: R,
      getSellInfo: B,
      getMaxBuyAmount: K,
      fees: H
    } = ar(), O = e.address, z = e.masterContractAddress, ne = r.partnerAddress, re = Me().tonConnectUI.value, oe = a({
      getFees: () => H
    }), Y = o();
    return {
      getUserJettonBalance: () => p({
        jettonAddress: O,
        userAddress: n(),
        masterAddress: z
      }),
      getUnlockEnabled: () => y({
        jettonAddress: O,
        userAddress: n(),
        masterAddress: z
      }),
      getWaitForUnlockStatus: () => f(),
      unlockWallet: () => h({
        jettonAddress: O,
        userAddress: n(),
        masterAddress: z,
        tonConnectUI: re
      }),
      getUnlockInfo: () => oe({
        tonBalance: t,
        jettonBalance: s
      }),
      getSlippage: () => i.value,
      updateSlippage: L => i.value = L,
      buyJetton: ({
        tons: L,
        tradeInfoParams: Z
      }) => N({
        tons: L,
        jettonAddress: O,
        masterAddress: z,
        tradeInfoParams: Z,
        tonConnectUI: re
      }),
      sellJetton: ({
        jettons: L,
        tradeInfoParams: Z
      }) => I({
        jettons: L,
        jettonAddress: O,
        masterAddress: z,
        userAddress: n(),
        tradeInfoParams: Z,
        tonConnectUI: re
      }),
      getWaitForBuyStatus: () => F(),
      getWaitForSellStatus: () => k(),
      tradeStateControls: {
        getEmptyState: ({
          operation: L
        }) => Y.getEmptyState({
          tonBalance: t,
          jettonBalance: s,
          operation: L
        }),
        getImmediateState: ({
          operation: L,
          amount: Z
        }) => Y.getImmediateState({
          amount: Z,
          tonBalance: t,
          jettonBalance: s,
          operation: L,
          jettonTicker: e.ticker,
          fees: H
        }),
        getState: ({
          operation: L,
          amount: Z
        }) => Y.getState({
          tonBalance: t,
          jettonBalance: s,
          operation: L,
          amount: Z,
          jettonTicker: e.ticker,
          fees: H,
          getBuyInfo: ({
            tons: ve
          }) => R({
            tons: ve,
            jettonAddress: O,
            masterAddress: z,
            partnerAddress: ne
          }),
          getSellInfo: ({
            jettons: ve
          }) => B({
            jettons: ve,
            jettonAddress: O,
            masterAddress: z,
            partnerAddress: ne
          })
        })
      },
      getMaxBuyAmount: K
    }
  },
  wo = ({
    balances: r,
    addresses: e,
    networkType: t,
    referrerToken: s
  }) => {
    switch (t) {
      case Os.TON:
        switch (e.sdkType) {
          case Xe.TON_FUN:
            return no({
              tonBalance: r.tokenBalance,
              addresses: e
            });
          case Xe.BLUM:
            return Sn({
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
  ko = ({
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
      case Os.TON: {
        const p = (() => {
          switch (e) {
            case Xe.TON_FUN:
              return oo({
                addresses: s,
                jetton: n,
                tonBalance: a.tokenBalance,
                jettonBalance: a.jettonBalance
              });
            case Xe.BLUM:
              return qn({
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
          const y = (() => {
            switch (t) {
              case Rr.STONFI:
                return Dr({
                  jetton: n,
                  tonBalance: a.tokenBalance,
                  jettonBalance: a.jettonBalance
                });
              default:
                throw xe("Unknown dex type")
            }
          })();
          return {
            ...p,
            ...y
          }
        }
        return p
      }
      default:
        throw xe("Unknown network type")
    }
  };
export {
  yo as _, fo as a, go as b, bo as c, wo as d, _o as f, ko as g
};