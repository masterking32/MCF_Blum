var ur = Object.defineProperty;
var dr = (r, e, t) => e in r ? ur(r, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : r[e] = t;
var d = (r, e, t) => dr(r, typeof e != "symbol" ? e + "" : e, t);
import {
  d as ot,
  h as hr,
  a9 as yr,
  a_ as fr,
  ac as Is,
  o as be,
  N as Fe,
  e as Q,
  C as Ft,
  Y as Fs,
  H as gr,
  x as xs,
  bg as De,
  bs as _r,
  bY as br,
  aG as vr,
  cd as We,
  n as Lt,
  ag as ye,
  G as Jt,
  f as Wt,
  A as Et,
  j as os,
  V as as,
  c as xt,
  w as wr,
  ce as kr,
  a as he,
  p as Tr,
  aP as is,
  t as Ar,
  cf as Sr,
  a2 as B,
  D as cs,
  b as jr,
  cg as qe,
  ch as Ke,
  ci as $e,
  bB as $,
  cj as _e,
  ck as qr,
  cl as Er,
  cm as ps,
  a7 as $r,
  cn as S,
  co as at,
  cp as W,
  ab as j,
  a6 as x,
  cq as U,
  cr as Os,
  b7 as Ze,
  bp as Ce,
  cs as Cr,
  ct as Br,
  cu as Pr,
  aN as Rr,
  be as Nr,
  a4 as xe,
  cc as Ms,
  cv as et,
  cw as Ir
} from "./BlYmRJuD.js";
import {
  _ as Fr
} from "./Dxt6bpfQ.js";
import {
  B as xr
} from "./Dh9S75dJ.js";
import {
  _ as Or
} from "./B5wii_a4.js";
import {
  _ as Mr
} from "./B1dmw9pe.js";
import {
  p as Dr,
  r as Ur,
  s as Gr,
  c as Ue,
  d as Kt,
  e as it,
  g as Lr
} from "./UlU3YeZN.js";
import {
  d as Ds
} from "./Ba-TP0Ck.js";
const _o = ot({
    __name: "TopUpButton",
    props: {
      jettonAddress: {},
      jettonShortname: {},
      details: {},
      inputValue: {},
      valueBalance: {},
      needMoreValue: {},
      source: {},
      flowType: {}
    },
    setup(r) {
      const e = r,
        t = hr().$webApp,
        s = yr(),
        n = fr(),
        o = n.usePaymentLink(),
        a = () => {
          const h = De().tonConnectUI.value,
            u = (h.walletInfo || h.wallet).universalLink;
          if (_r(u)) {
            const C = "https://t.me/wallet/start?startapp=main-rc__a0646df863";
            ["ios", "weba", "android", "tdesktop", "webk"].includes(t.platform) ? t.openTelegramLink(C) : t.openLink(C)
          } else t.openLink(u)
        },
        c = () => {
          var f;
          const h = (f = n.availableInfo.value) == null ? void 0 : f.available;
          s.memepad.memepadClickTopupButton({
            flowType: e.flowType,
            source: e.source,
            jettonShortname: e.jettonShortname,
            jettonAddress: e.jettonAddress,
            reason: e.details
          }), h ? o.getAndOpen() : a()
        },
        p = gr(() => s.memepad.memepadShowTopupButton({
          flowType: e.flowType,
          balance: e.valueBalance,
          value: e.inputValue,
          source: e.source
        }), 1e3).debouncedFunction;
      return Is(() => {
        p()
      }), (h, f) => {
        const u = xs;
        return be(), Fe(u, {
          label: ("t" in h ? h.t : Q(Ft))("memepad.top_up_wallet_button"),
          fill: "",
          size: Q(Fs).LARGE,
          loading: Q(o).isLoading.value,
          onClick: c
        }, null, 8, ["label", "size", "loading"])
      }
    }
  }),
  Jr = ot({
    __name: "StateButtonWrapper",
    props: {
      forceLoading: {
        type: Boolean,
        default: !1
      },
      buttonSize: {
        default: Fs.LARGE
      }
    },
    setup(r) {
      const e = br().status,
        t = vr();
      return (s, n) => {
        const o = xs,
          a = Fr;
        return Q(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : Q(We)).DISCONNECTED ? (be(), Fe(o, {
          key: 0,
          label: ("t" in s ? s.t : Q(Ft))("wallet.connect.btn"),
          fill: "",
          size: s.buttonSize,
          onClick: n[0] || (n[0] = c => Q(t).runConnectionFlow())
        }, null, 8, ["label", "size"])) : Q(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : Q(We)).MUST_RECONNECT ? (be(), Fe(o, {
          key: 1,
          label: ("t" in s ? s.t : Q(Ft))("wallet.reconnect.btn"),
          fill: "",
          size: s.buttonSize,
          onClick: n[1] || (n[1] = c => Q(t).runConnectionFlow())
        }, null, 8, ["label", "size"])) : Q(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : Q(We)).LOADING || s.forceLoading ? (be(), Fe(a, {
          key: 2,
          class: Lt(["skeleton", `is-${s.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : Q(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : Q(We)).CONNECTED ? ye(s.$slots, "default", {
          key: 3
        }, void 0, !0) : Jt("", !0)
      }
    }
  }),
  bo = Wt(Jr, [
    ["__scopeId", "data-v-1e641cbd"]
  ]),
  Wr = ot({
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
        o = Et("el"),
        a = Et("input"),
        c = Et("hiddenInput"),
        p = () => {
          Sr(() => {
            a.value && (a.value.style.width = "", a.value.style.width = a.value.scrollWidth + "px")
          })
        },
        h = os({
          get: () => s.modelValue,
          set: k => {
            if (a.value && a.value.value !== s.modelValue) {
              const P = [...a.value.value].findIndex((K, H) => K !== s.modelValue[H]);
              P !== -1 && a.value.value[P] === "," && (k = k.slice(0, P) + "." + k.slice(P))
            }
            k = (s.modifier || (P => P))(k), a.value && a.value.value !== k && (a.value.value = k), n("update:modelValue", k)
          }
        });
      as(() => s.modelValue, p), as(() => a.value, p);
      const f = os(() => {
          if (!o.value || !a.value || !c.value) return;
          const k = parseInt(getComputedStyle(c.value).getPropertyValue("font-size")),
            N = parseInt(getComputedStyle(c.value).getPropertyValue("line-height")),
            P = `${s.modelValue} ${s.postfix}`,
            K = o.value.offsetWidth,
            O = (ne => {
              const oe = document.createElement("canvas").getContext("2d");
              return oe ? (oe.font = `700 ${k}px RoobertPro`, oe.measureText(ne).width) : void 0
            })(P.trim());
          if (!O) return;
          const z = Math.min(K / O * .75, 1);
          return {
            fontSize: `${k*z}px`,
            lineHeight: `${N*z}px`
          }
        }),
        u = () => {
          var k;
          (k = c.value) == null || k.focus()
        };
      Is(() => {
        u()
      }), e({
        focusOnInput: u
      });
      const C = () => {
          setTimeout(() => {
            var k;
            (k = a.value) == null || k.focus()
          }, 100)
        },
        I = async () => {
          const k = new FontFace("RoobertPro", `url(${xr})`, {
            weight: "700"
          });
          await Promise.all([document.fonts.ready, k.load()]), document.fonts.add(k)
        };
      return (() => {
        I()
      })(), (k, N) => (be(), xt("label", {
        ref: "el",
        class: Lt(["memepad-jetton-actions-controls-input", {
          "is-centered": k.centered
        }])
      }, [wr(he("input", {
        ref: "input",
        "onUpdate:modelValue": N[0] || (N[0] = P => Tr(h) ? h.value = P : null),
        type: "text",
        inputmode: "decimal",
        style: is(Q(f)),
        onBlur: N[1] || (N[1] = P => n("blur"))
      }, null, 36), [
        [kr, Q(h)]
      ]), he("input", {
        ref: "hiddenInput",
        type: "text",
        inputmode: "decimal",
        class: "hidden",
        onFocus: C
      }, null, 544), k.postfix ? (be(), xt("span", {
        key: 0,
        class: "label",
        style: is(Q(f))
      }, Ar(k.postfix), 5)) : Jt("", !0)], 2))
    }
  }),
  vo = Wt(Wr, [
    ["__scopeId", "data-v-44264923"]
  ]),
  wo = r => new B(r.replaceAll(",", "") || "0"),
  Kr = {
    class: "top"
  },
  Hr = {
    class: "center"
  },
  zr = {
    class: "right"
  },
  Vr = {
    class: "inner"
  },
  Yr = {
    class: "action"
  },
  Qr = {
    key: 0,
    class: "helpers"
  },
  Xr = ot({
    __name: "Modal",
    setup(r) {
      return (e, t) => {
        const s = Or,
          n = Mr;
        return be(), Fe(n, {
          class: "memepad-jetton-modal"
        }, {
          default: cs(() => [ye(e.$slots, "top", {}, () => [he("div", Kr, [t[0] || (t[0] = he("div", {
            class: "left"
          }, null, -1)), he("div", Hr, [ye(e.$slots, "top-center", {}, void 0, !0)]), he("div", zr, [ye(e.$slots, "top-right", {}, void 0, !0)])])], !0), ye(e.$slots, "default", {}, () => [he("div", Vr, [ye(e.$slots, "inner", {}, void 0, !0)])], !0), jr(s, {
            "ignore-tabs": "",
            "hide-space": ""
          }, {
            default: cs(() => [he("div", {
              class: Lt(["memepad-jetton-modal-bottom", {
                "with-helpers": e.$slots["bottom-helpers"]
              }])
            }, [he("div", Yr, [ye(e.$slots, "bottom-action", {}, void 0, !0)]), e.$slots["bottom-helpers"] ? (be(), xt("div", Qr, [ye(e.$slots, "bottom-helpers", {}, void 0, !0)])) : Jt("", !0)], 2)]),
            _: 3
          })]),
          _: 3
        })
      }
    }
  }),
  ko = Wt(Xr, [
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
class ct extends ie {
  get info() {
    return "User rejects the action in the wallet."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, ct.prototype)
  }
}
class pt extends ie {
  get info() {
    return "Request to the wallet contains errors."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, pt.prototype)
  }
}
class lt extends ie {
  get info() {
    return "App tries to send rpc request to the injected wallet while not connected."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, lt.prototype)
  }
}
class mt extends ie {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, mt.prototype)
  }
}
qe.UNKNOWN_ERROR + "", qe.USER_REJECTS_ERROR + "", qe.BAD_REQUEST_ERROR + "", qe.UNKNOWN_APP_ERROR + "", qe.MANIFEST_NOT_FOUND_ERROR + "", qe.MANIFEST_CONTENT_ERROR + "";
Ke.UNKNOWN_ERROR + "", Ke.USER_REJECTS_ERROR + "", Ke.BAD_REQUEST_ERROR + "", Ke.UNKNOWN_APP_ERROR + "";
for (let r = 0; r <= 255; r++) {
  let e = r.toString(16);
  e.length < 2 && (e = "0" + e)
}
var L = {},
  ut, Vt = $e && $e.__importDefault || function(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  };
Object.defineProperty(L, "__esModule", {
  value: !0
});
var Us = L.Api = Gs = L.TonApiClient = L.ContentType = L.PoolImplementationType = L.TrustType = L.JettonVerificationType = L.BouncePhaseType = L.ComputeSkipReason = L.AccStatusChange = L.TransactionType = ut = L.AccountStatus = void 0,
  ls;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(ls || (ut = L.AccountStatus = ls = {}));
var ms;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(ms || (L.TransactionType = ms = {}));
var us;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(us || (L.AccStatusChange = us = {}));
var ds;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(ds || (L.ComputeSkipReason = ds = {}));
var hs;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(hs || (L.BouncePhaseType = hs = {}));
var ys;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(ys || (L.JettonVerificationType = ys = {}));
var fs;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(fs || (L.TrustType = fs = {}));
var gs;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(gs || (L.PoolImplementationType = gs = {}));
var fe;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(fe || (L.ContentType = fe = {}));
const Ot = $,
  Zr = Vt(Dr),
  en = Vt(Ur),
  tn = Vt(Gr),
  sn = r => (0, Zr.default)(r, (e, t, s) => {
    if (typeof t == "number") {
      const n = s.source;
      return Number.isSafeInteger(t) || /[\.eE]/.test(n) ? t : BigInt(n)
    }
    return t
  }),
  $t = r => (0, tn.default)(r, (e, t) => typeof t == "bigint" ? (0, en.default)(t.toString()) : t);
class rn {
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
      [fe.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? $t(e) : e,
      [fe.Text]: e => e !== null && typeof e != "string" ? $t(e) : e,
      [fe.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? $t(n) : `${n}`), t
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
      baseUrl: c,
      cancelToken: p,
      ...h
    }) => {
      const f = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        u = this.mergeRequestParams(h, f),
        C = o && this.toQueryString(o),
        I = n ?? fe.Json,
        F = this.contentFormatters[I],
        k = a || u.format;
      return this.customFetch(`${c||this.baseUrl||""}${s}${C?`?${C}`:""}`, {
        ...u,
        headers: {
          ...u.headers || {},
          ...I && I !== fe.FormData ? {
            "Content-Type": I
          } : {}
        },
        signal: (p ? this.createAbortSignal(p) : u.signal) || null,
        body: typeof e > "u" || e === null ? null : F(e)
      }).then(async N => {
        const P = N.clone();
        P.data = null, P.error = null;
        const K = k === "json" ? "text" : k,
          H = K ? await N[K]().then(O => (P.ok ? P.data = k === "json" ? sn(O) : O : P.error = O, P)).catch(O => (P.error = O, P)) : P;
        if (p && this.abortControllers.delete(p), !N.ok) throw H;
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
var Gs = L.TonApiClient = rn;
const Ls = {
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

function nn(r) {
  return r.replace(/(_\w)/g, e => {
    var t;
    return ((t = e[1]) == null ? void 0 : t.toUpperCase()) ?? ""
  })
}

function on(r) {
  return r.replace(/([A-Z])/g, e => `_${e.toLowerCase()}`)
}

function Ct(r) {
  return Ot.Cell.fromBase64(_e.from(r, "hex").toString("base64"))
}

function an(r) {
  return r.startsWith("-") ? BigInt(r.slice(1)) * -1n : BigInt(r)
}

function i(r, e) {
  const t = e && e.$ref,
    s = t ? Ls[t] : e;
  if (Array.isArray(r)) {
    const n = s && s.items;
    return r.map(o => i(o, n))
  } else if (s) {
    if (s.type === "string") {
      if (s.format === "address") return Ot.Address.parse(r);
      if (s.format === "cell") return r && Ct(r);
      if (s.format === "cell-base64") return r && Ot.Cell.fromBase64(r)
    }
    if (s.type === "integer") return s["x-js-format"] === "bigint" ? BigInt(r) : Number(r);
    if (s.type === "object" && s.format === "tuple-item") switch (r.type) {
      case "tuple":
        const n = s.properties.tuple.items;
        return {
          type: "tuple", items: r.tuple.map(o => i(o, n))
        };
      case "num":
        return {
          type: "int", value: an(r.num)
        };
      case "cell":
        return {
          type: "cell", cell: Ct(r.cell)
        };
      case "slice":
        return {
          type: "slice", slice: Ct(r.slice)
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
      c = nn(o);
    return n[c] = i(r[o], a), n
  }, {}) : r
}

function ee(r, e) {
  const t = e && e.$ref,
    s = t ? Ls[t] : e;
  if (Array.isArray(r)) {
    const n = s && s.items;
    return r.map(o => ee(o, n))
  } else if (s && s.type === "string") {
    if (s.format === "address") return r.toRawString();
    if (s.format === "cell") return r.toBoc().toString("hex");
    if (s.format === "cell-base64") return r.toBoc().toString("base64")
  }
  return r !== null && typeof r == "object" ? Object.keys(r).reduce((n, o) => {
    const a = (s == null ? void 0 : s.properties) && s.properties[o],
      c = on(o);
    return n[c] = ee(r[o], a), n
  }, {}) : r
}
let cn = class {
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
        return i(t, {
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
        return i(n, {
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
        return i(s, {
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
        return i(s, {
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
        return i(s, {
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
        return i(s, {
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
        return i(s, {
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
        return i(s, {
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
        return i(s, {
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
        return i(s, {
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
        return i(s, {
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
        return i(s, {
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
        return i(t, {
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
        return i(t, {
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
        return i(n, {
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
        return i(o, {
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
        return i(a, {
          $ref: "#/components/schemas/MethodExecutionResult"
        })
      },
      sendBlockchainMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/blockchain/message",
          method: "POST",
          body: ee(e, {
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
        return i(s)
      },
      getBlockchainConfig: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/blockchain/config",
          method: "GET",
          format: "json",
          ...e
        });
        return i(t, {
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
        return i(t, {
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
        return i(n, {
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
        return i(t, {
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
          body: ee(e, {
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
        return i(n, {
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
        return i(n, {
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
        return i(n, {
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
        return i(o, {
          $ref: "#/components/schemas/JettonsBalances"
        })
      },
      getAccountJettonBalance: async (e, t, s, n = {}) => {
        const o = e.toRawString(),
          a = t.toRawString(),
          c = await this.http.request({
            path: `/v2/accounts/${o}/jettons/${a}`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return i(c, {
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
        return i(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountJettonHistoryById: async (e, t, s, n = {}) => {
        const o = e.toRawString(),
          a = t.toRawString(),
          c = await this.http.request({
            path: `/v2/accounts/${o}/jettons/${a}/history`,
            method: "GET",
            query: s,
            format: "json",
            ...n
          });
        return i(c, {
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
        return i(o, {
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
        return i(o, {
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
        return i(a, {
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
        return i(o, {
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
        return i(n, {
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
        return i(n)
      },
      searchAccounts: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/accounts/search",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return i(s, {
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
        return i(o, {
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
        return i(n, {
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
        return i(n, {
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
        return i(o, {
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
        return i(n, {
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
        return i(o, {
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
        return i(s, {
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
        return i(n, {
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
        return i(o, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getNftItemsByAddresses: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/nfts/_bulk",
          method: "POST",
          body: ee(e, {
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
        return i(s, {
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
        return i(n, {
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
        return i(o, {
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
        return i(s, {
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
        return i(s, {
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
        return i(s, {
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
        return i(s, {
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
        return i(s, {
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
        return i(s, {
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
        return i(o, {
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
        return i(o, {
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
        return i(a, {
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
        return i(s, {
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
        return i(s, {
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
        return i(n, {
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
        return i(o, {
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
        return i(a, {
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
        return i(s, {
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
        return i(n, {
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
        return i(n, {
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
        return i(n, {
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
        return i(s, {
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
        return i(t, {
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
        return i(s, {
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
        return i(s, {
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
        return i(t, {
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
        return i(t, {
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
          body: ee(e, {
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
        return i(s, {
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
        return i(t, {
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
          body: ee(e),
          ...t
        });
        return i(s)
      },
      tonConnectProof: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/auth/proof",
          method: "POST",
          body: ee(e, {
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
        return i(s, {
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
        return i(n, {
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
        return i(s, {
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
        return i(t, {
          $ref: "#/components/schemas/GaslessConfig"
        })
      },
      gaslessEstimate: async (e, t, s = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/gasless/estimate/${n}`,
            method: "POST",
            body: ee(t, {
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
        return i(o, {
          $ref: "#/components/schemas/SignRawParams"
        })
      },
      gaslessSend: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/gasless/send",
          method: "POST",
          body: ee(e, {
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
        return i(s)
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
        return i(t, {
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
        return i(s, {
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
        return i(t, {
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
        return i(s, {
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
        return i(s, {
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
        return i(n, {
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
          body: ee(e, {
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
        return i(s, {
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
        return i(o, {
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
        return i(n, {
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
        return i(s, {
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
        return i(o, {
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
        return i(n, {
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
        return i(s, {
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
        return i(n, {
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
        return i(s, {
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
        return i(t, {
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
        return i(n, {
          $ref: "#/components/schemas/Multisig"
        })
      }
    });
    d(this, "emulation", {
      decodeMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/message/decode",
          method: "POST",
          body: ee(e, {
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
        return i(s, {
          $ref: "#/components/schemas/DecodedMessage"
        })
      },
      emulateMessageToEvent: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: "/v2/events/emulate",
          method: "POST",
          query: t,
          body: ee(e, {
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
        return i(n, {
          $ref: "#/components/schemas/Event"
        })
      },
      emulateMessageToTrace: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: "/v2/traces/emulate",
          method: "POST",
          query: t,
          body: ee(e, {
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
        return i(n, {
          $ref: "#/components/schemas/Trace"
        })
      },
      emulateMessageToWallet: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/emulate",
          method: "POST",
          body: ee(e, {
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
        return i(s, {
          $ref: "#/components/schemas/MessageConsequences"
        })
      },
      emulateMessageToAccountEvent: async (e, t, s, n = {}) => {
        const o = e.toRawString(),
          a = await this.http.request({
            path: `/v2/accounts/${o}/events/emulate`,
            method: "POST",
            query: s,
            body: ee(t, {
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
        return i(a, {
          $ref: "#/components/schemas/AccountEvent"
        })
      }
    });
    this.http = e
  }
};
Us = L.Api = cn;
var pn = class {
  constructor(r) {
    this.tonapi = r
  }
  open(r) {
    return $.openContract(r, e => Mt(this.tonapi, e.address, e.init))
  }
  provider(r, e) {
    return Mt(this.tonapi, r, e || null)
  }
};

function Mt(r, e, t) {
  return {
    async getState() {
      const s = await r.blockchain.getBlockchainRawAccount(e).catch(async a => {
          const c = await a.json();
          if (c.error === "entity not found") return {
            address: e,
            balance: 0n,
            lastTransactionLt: void 0,
            status: ut.Uninit,
            storage: {
              usedCells: 1,
              usedBits: 95,
              usedPublicCells: 0,
              lastPaid: Math.floor(new Date().getTime() / 1e3),
              duePayment: 0n
            }
          };
          throw new Error("Account request failed: ", c.error)
        }),
        n = s.lastTransactionHash !== void 0 && s.lastTransactionLt !== void 0 ? {
          lt: s.lastTransactionLt,
          hash: qr.from(s.lastTransactionHash, "base64")
        } : null,
        o = {
          active: a => {
            var c, p;
            return {
              type: "active",
              code: ((c = a.code) == null ? void 0 : c.toBoc()) ?? null,
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
        args: n.map(ln)
      });
      return {
        stack: new $.TupleReader(o.stack)
      }
    },
    async external(s) {
      let n = null;
      t && (await r.accounts.getAccount(e)).status !== "active" && (n = t);
      const o = $.external({
          to: e,
          init: n ? {
            code: n.code,
            data: n.data
          } : null,
          body: s
        }),
        a = $.beginCell().store($.storeMessage(o)).endCell();
      await r.blockchain.sendBlockchainMessage({
        boc: a
      })
    },
    async internal(s, n) {
      let o = null;
      t && (await r.accounts.getAccount(e)).status !== "active" && (o = t);
      let a = !0;
      n.bounce !== null && n.bounce !== void 0 && (a = n.bounce);
      let c;
      typeof n.value == "string" ? c = $.toNano(n.value) : c = n.value;
      let p = null;
      typeof n.body == "string" ? p = $.comment(n.body) : n.body && (p = n.body), await s.send({
        to: e,
        value: c,
        bounce: a,
        sendMode: n.sendMode,
        init: o,
        body: p
      })
    },
    open(s) {
      return $.openContract(s, n => Mt(r, n.address, n.init))
    },
    getTransactions(s, n, o, a) {
      return console.info("hash param in getTransactions action ignored, beacause not supported", o.toString("hex")), r.blockchain.getBlockchainAccountTransactions(s, {
        before_lt: n + 1n,
        limit: a
      }).then(({
        transactions: c
      }) => c.map(p => $.loadTransaction(p.raw.asSlice())))
    }
  }
}

function ln(r) {
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
const le = $,
  mn = Er();

function un(r) {
  return new Promise(e => {
    setTimeout(() => e(), r)
  })
}
Ae.sleep = un;

function dn(r) {
  const e = le.Dictionary.empty(le.Dictionary.Keys.Buffer(32), le.Dictionary.Values.Cell());
  for (const t in r) {
    if (r[t] === void 0) continue;
    const s = (0, le.beginCell)();
    if (t === "image_data") {
      const n = le.Dictionary.empty(le.Dictionary.Keys.Uint(32), le.Dictionary.Values.Cell()),
        o = _e.from(r[t], "base64");
      for (let a = 0; a * 127 < o.length; a++) n.set(a, (0, le.beginCell)().storeBuffer(o.subarray(a * 127, (a + 1) * 127)).endCell());
      s.storeUint(1, 8).storeDict(n).endCell()
    } else s.storeUint(0, 8).storeStringTail(r[t].toString());
    e.set((0, mn.sha256_sync)(t), s.endCell())
  }
  return (0, le.beginCell)().storeUint(0, 8).storeDict(e).endCell()
}
var Js = Ae.internalOnchainContentToCell = dn;

function hn(r) {
  return (...e) => r(...e)
}
Ae.defer = hn;

function M(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r
}
var yn = 0;

function ce(r) {
  return "__private_" + yn++ + "_" + r
}
var fn = function() {
    function r(t) {
      this.api = void 0, this.adapter = void 0;
      var s = new Gs(t);
      this.api = new Us(s), this.adapter = new pn(this.api)
    }
    var e = r.prototype;
    return e.open = function(t) {
      return this.adapter.open(t)
    }, e.isContractDeployed = function(t) {
      try {
        return Promise.resolve(this.api.accounts.getAccount(t)).then(function(s) {
          return s.status === ut.Active
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getAccountBalance = function(t) {
      try {
        return Promise.resolve(this.api.accounts.getAccount(t)).then(function(s) {
          return s.balance
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, r
  }(),
  te = function() {};
te.deployJettonGas = $.toNano(.05), te.initialGas = $.toNano(.015), te.buyGas = $.toNano(.08), te.sellGas = $.toNano(.08), te.unlockGas = $.toNano(.05);
var Me, Ws = function() {};
Ws.deployJetton = 3637132459,
  function(r) {
    r[r.STONFI = 0] = "STONFI", r[r.DEDUST = 1] = "DEDUST"
  }(Me || (Me = {}));
var _s, bs = function() {
    function r(t, s) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = s
    }
    r.createFromAddress = function(t) {
      return new r(t)
    };
    var e = r.prototype;
    return e.sendDeployJetton = function(t, s, n, o, a, c, p, h, f) {
      h === void 0 && (h = null), f === void 0 && (f = 0);
      try {
        return p === void 0 && (p = 0n), Promise.resolve(t.internal(s, {
          value: n,
          body: $.beginCell().storeUint(Ws.deployJetton, 32).storeUint(f, 64).storeUint(o, 1).storeRef(a).storeBit(c).storeCoins(p).storeMaybeRef(h).endCell()
        })).then(function() {})
      } catch (u) {
        return Promise.reject(u)
      }
    }, e.getConfig = function(t) {
      try {
        return Promise.resolve(t.get("get_config", [])).then(function(s) {
          return {
            admin: s.stack.readAddress(),
            jettonAdmin: s.stack.readAddress(),
            feeRecipient: s.stack.readAddress(),
            curveA: s.stack.readBigNumber(),
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
  Ks = function() {};
Ks.buy = 2943683892,
  function(r) {
    r[r.TRADING = 0] = "TRADING", r[r.PENDING_DEX_LIQUIDITY = 1] = "PENDING_DEX_LIQUIDITY", r[r.LISTED = 2] = "LISTED"
  }(_s || (_s = {}));
var Hs = function() {
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
          cell: $.beginCell().storeAddress(s).endCell()
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
    }, e.sendBuy = function(t, s, n, o, a, c, p) {
      a === void 0 && (a = null), c === void 0 && (c = null), p === void 0 && (p = 0);
      try {
        return Promise.resolve(t.internal(s, {
          value: n + te.buyGas,
          body: $.beginCell().storeUint(Ks.buy, 32).storeUint(p, 64).storeCoins(o).storeAddress(a).storeMaybeRef(c).endCell()
        })).then(function() {})
      } catch (h) {
        return Promise.reject(h)
      }
    }, e.getBclData = function(t) {
      try {
        return Promise.resolve(t.get("get_bcl_data", [])).then(function(s) {
          var n = s.stack.readNumber();
          return n == Me.STONFI ? {
            dexType: n,
            totalSupply: s.stack.readBigNumber(),
            bclSupply: s.stack.readBigNumber(),
            liqSupply: s.stack.readBigNumber(),
            factory: s.stack.readAddress(),
            author: s.stack.readAddress(),
            content: s.stack.readCell(),
            feeAddress: s.stack.readAddress(),
            buyFeeBasis: s.stack.readNumber(),
            sellFeeBasis: s.stack.readNumber(),
            lastTradeDate: s.stack.readNumber(),
            phase: s.stack.readNumber(),
            tonLiqCollected: s.stack.readBigNumber(),
            tradingCloseFee: s.stack.readBigNumber(),
            fullPriceTon: s.stack.readBigNumber(),
            fullPriceTonFees: s.stack.readBigNumber(),
            routerAddress: s.stack.readAddress(),
            routerPtonWalletAddress: s.stack.readAddress()
          } : n == Me.DEDUST ? {
            dexType: n,
            totalSupply: s.stack.readBigNumber(),
            bclSupply: s.stack.readBigNumber(),
            liqSupply: s.stack.readBigNumber(),
            factory: s.stack.readAddress(),
            admin: s.stack.readAddress(),
            author: s.stack.readAddress(),
            content: s.stack.readCell(),
            feeAddress: s.stack.readAddress(),
            buyFeeBasis: s.stack.readNumber(),
            sellFeeBasis: s.stack.readNumber(),
            lastTradeDate: s.stack.readNumber(),
            phase: s.stack.readNumber(),
            tonLiqCollected: s.stack.readBigNumber(),
            tradingCloseFee: s.stack.readBigNumber(),
            fullPriceTon: s.stack.readBigNumber(),
            fullPriceTonFees: s.stack.readBigNumber()
          } : {}
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, r
  }(),
  tt = function() {};
tt.sell = 1948989144, tt.unlock = 4043133115;
var Dt = function() {
    function r(t, s) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = s
    }
    r.createFromAddress = function(t) {
      return new r(t)
    }, r.sellMessage = function(t, s, n, o) {
      return n === void 0 && (n = null), o === void 0 && (o = 0), $.beginCell().storeUint(tt.sell, 32).storeUint(o, 64).storeCoins(t).storeCoins(s).storeMaybeRef(n).endCell()
    }, r.unlockMessage = function(t) {
      return t === void 0 && (t = 0), $.beginCell().storeUint(tt.unlock, 32).storeUint(t, 64).endCell()
    };
    var e = r.prototype;
    return e.getJettonBalance = function(t) {
      try {
        return Promise.resolve(t.getState()).then(function(s) {
          return s.state.type !== "active" ? 0n : Promise.resolve(t.get("get_wallet_data", [])).then(function(n) {
            return n.stack.readBigNumber()
          })
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getUnlocked = function(t) {
      try {
        return Promise.resolve(t.getState()).then(function(s) {
          return s.state.type === "active" && Promise.resolve(t.get("get_unlocked", [])).then(function(n) {
            return n.stack.readBoolean()
          })
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.sendSell = function(t, s, n, o, a, c, p) {
      c === void 0 && (c = null), p === void 0 && (p = 0);
      try {
        return Promise.resolve(t.internal(s, {
          sendMode: $.SendMode.PAY_GAS_SEPARATELY,
          body: r.sellMessage(o, a, c, p),
          value: n
        })).then(function() {})
      } catch (h) {
        return Promise.reject(h)
      }
    }, e.sendUnlock = function(t, s, n) {
      n === void 0 && (n = 0);
      try {
        return Promise.resolve(t.internal(s, {
          sendMode: $.SendMode.PAY_GAS_SEPARATELY,
          body: r.unlockMessage(n),
          value: te.unlockGas
        })).then(function() {})
      } catch (o) {
        return Promise.reject(o)
      }
    }, r
  }(),
  zs = 1000000000000000000n,
  st = 800000000000000000n,
  Ut = ce("sqrt"),
  Bt = ce("f"),
  me = ce("fReverse"),
  gn = ce("toNano"),
  Pt = ce("fromNano"),
  _n = function() {
    function r(t) {
      Object.defineProperty(this, Pt, {
        value: Tn
      }), Object.defineProperty(this, gn, {
        value: kn
      }), Object.defineProperty(this, me, {
        value: wn
      }), Object.defineProperty(this, Bt, {
        value: vn
      }), Object.defineProperty(this, Ut, {
        value: bn
      }), this.curveA = void 0, this.curveA = t
    }
    var e = r.prototype;
    return e.tonSupply = function(t) {
      return M(this, me)[me](t)
    }, e.calculateJettonAmount = function(t, s) {
      var n = M(this, me)[me](t);
      return M(this, Bt)[Bt](n + s) - t
    }, e.calculateTonAmount = function(t, s) {
      return M(this, me)[me](t) - M(this, me)[me](t - s)
    }, e.calculateBuyAmount = function(t, s, n) {
      var o = this.calculateJettonAmount(t, s - s * n / 10000n);
      return o + t > st ? st - t : o
    }, e.calculateSellAmount = function(t, s, n) {
      var o = this.calculateTonAmount(t, s);
      return o - o * n / 10000n
    }, e.calculatePrice = function(t) {
      var s = 1e9,
        n = this.calculateJettonAmount(t, BigInt(s));
      return s / Number(n)
    }, e.calculateMarketCap = function(t) {
      return this.calculatePrice(t) * M(this, Pt)[Pt](zs)
    }, r
  }();

function bn(r) {
  for (var e = r, t = e + 1n >> 1n; t < e;) t = (e = t) + r / e >> 1n;
  return e
}

function vn(r) {
  if (r == 0n) return 0n;
  var e = 10n ** 9n;
  return M(this, Ut)[Ut](r * e * e) * this.curveA / e
}

function wn(r) {
  if (r == 0n) return 0n;
  var e = 10n ** 9n;
  return r ** 2n * e / this.curveA ** 2n / e
}

function kn(r) {
  return Number(r) * 10 ** 9
}

function Tn(r) {
  return Number(r) / 10 ** 9
}
var An = function(r) {
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
        return e.init && (o.stateInit = $.beginCell().store($.storeStateInit(e.init)).endCell().toBoc().toString("base64")), {
          validUntil: Date.now() + 3e5,
          network: M(t, Oe)[Oe] ? ps.TESTNET : ps.MAINNET,
          messages: [o]
        }
      })
    } catch (n) {
      return Promise.reject(n)
    }
  },
  Oe = ce("testnet"),
  se = ce("tokenomics"),
  ue = ce("request"),
  de = ce("minterContractFromAddress"),
  Rt = ce("walletContractFromAddress"),
  Sn = function() {
    function r(t, s, n) {
      s === void 0 && (s = !1), n === void 0 && (n = !1), Object.defineProperty(this, Rt, {
        value: qn
      }), Object.defineProperty(this, de, {
        value: jn
      }), Object.defineProperty(this, ue, {
        value: An
      }), Object.defineProperty(this, Oe, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, se, {
        writable: !0,
        value: void 0
      }), this.client = void 0, M(this, Oe)[Oe] = s;
      var o = n ? 16000000000000n : 653197264742n;
      M(this, se)[se] = new _n(o), this.client = new fn({
        baseUrl: s ? "https://testnet.tonapi.io" : "https://tonapi.io",
        apiKey: t
      })
    }
    var e = r.prototype;
    return e.sendDeployJetton = function(t, s, n, o, a, c, p, h) {
      p === void 0 && (p = null), h === void 0 && (h = 0);
      try {
        var f = this.client.open(bs.createFromAddress(s));
        return Promise.resolve(f.getConfig()).then(function(u) {
          var C = u.deployFee + te.deployJettonGas + te.initialGas;
          a && (C += u.agentDeployFee), c > 0n && (C += c + te.buyGas);
          var I = Js(o);
          return Promise.resolve(f.sendDeployJetton(t, C, n, I, a, c, p, h)).then(function() {})
        })
      } catch (u) {
        return Promise.reject(u)
      }
    }, e.sendBuy = function(t, s, n, o, a, c) {
      a === void 0 && (a = null), c === void 0 && (c = 0);
      try {
        return Promise.resolve(M(this, de)[de](s).sendBuy(t, n, o, null, a, c)).then(function() {})
      } catch (p) {
        return Promise.reject(p)
      }
    }, e.sendSell = function(t, s, n, o, a, c) {
      a === void 0 && (a = null), c === void 0 && (c = 0);
      try {
        var p = Dt.createFromAddress(s),
          h = this.client.open(p);
        return Promise.resolve(h.sendSell(t, te.sellGas, n, o, a, c)).then(function() {})
      } catch (f) {
        return Promise.reject(f)
      }
    }, e.sendUnlock = function(t, s, n) {
      n === void 0 && (n = 0);
      try {
        var o = Dt.createFromAddress(s),
          a = this.client.open(o);
        return Promise.resolve(a.sendUnlock(t, n)).then(function() {})
      } catch (c) {
        return Promise.reject(c)
      }
    }, e.getThresholdTons = function() {
      return M(this, se)[se].tonSupply(st)
    }, e.getTonSupply = function(t) {
      return M(this, se)[se].tonSupply(t)
    }, e.getMaxSupply = function() {
      return zs
    }, e.getThresholdSupply = function() {
      return st
    }, e.getPrice = function(t) {
      return M(this, se)[se].calculatePrice(t)
    }, e.getMarketCap = function(t) {
      return M(this, se)[se].calculateMarketCap(t)
    }, e.getBuyAmount = function(t, s, n) {
      return M(this, se)[se].calculateBuyAmount(t, s, n)
    }, e.getSellAmount = function(t, s, n) {
      return M(this, se)[se].calculateSellAmount(t, s, n)
    }, e.getWalletAddress = function(t, s) {
      try {
        return Promise.resolve(M(this, de)[de](t).getWalletAddress(s))
      } catch (n) {
        return Promise.reject(n)
      }
    }, e.getTotalSupply = function(t) {
      try {
        return Promise.resolve(M(this, de)[de](t).getTotalSupply())
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getBlumBclData = function(t) {
      try {
        return Promise.resolve(M(this, de)[de](t).getBclData())
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getUnlocked = function(t) {
      try {
        return Promise.resolve(M(this, Rt)[Rt](t).getUnlocked())
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getDeployJettonRequest = function(t, s, n, o, a, c, p) {
      c === void 0 && (c = null), p === void 0 && (p = 0);
      try {
        var h = this;
        return Promise.resolve(M(h, ue)[ue](function(f) {
          return h.sendDeployJetton(f, t, s, n, o, a, c, p)
        }))
      } catch (f) {
        return Promise.reject(f)
      }
    }, e.getBuyRequest = function(t, s, n, o, a) {
      o === void 0 && (o = null), a === void 0 && (a = 0);
      try {
        var c = this;
        return Promise.resolve(M(c, ue)[ue](function(p) {
          return c.sendBuy(p, t, s, n, o, a)
        }))
      } catch (p) {
        return Promise.reject(p)
      }
    }, e.getSellRequest = function(t, s, n, o, a) {
      o === void 0 && (o = null), a === void 0 && (a = 0);
      try {
        var c = this;
        return Promise.resolve(M(c, ue)[ue](function(p) {
          return c.sendSell(p, t, s, n, o, a)
        }))
      } catch (p) {
        return Promise.reject(p)
      }
    }, e.getUnlockRequest = function(t, s) {
      s === void 0 && (s = 0);
      try {
        var n = this;
        return Promise.resolve(M(n, ue)[ue](function(o) {
          return n.sendUnlock(o, t, s)
        }))
      } catch (o) {
        return Promise.reject(o)
      }
    }, e.getJettonWalletAddress = function(t, s) {
      try {
        var n = this.client.open(Hs.createFromAddress(t));
        return Promise.resolve(n.getWalletAddress(s))
      } catch (o) {
        return Promise.reject(o)
      }
    }, e.getFactoryConfig = function(t) {
      try {
        var s = this.client.open(bs.createFromAddress(t));
        return Promise.resolve(s.getConfig())
      } catch (n) {
        return Promise.reject(n)
      }
    }, r
  }();

function jn(r) {
  var e = Hs.createFromAddress(r);
  return this.client.open(e)
}

function qn(r) {
  var e = Dt.createFromAddress(r);
  return this.client.open(e)
}
const Vs = () => {
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
      getMinReceive: c,
      wrapWithCache: p,
      memepadApi: h
    } = it(), {
      isProd: f
    } = $r(), u = new Sn(n, !1, !f.value), C = l => +String(l) / 1e4, I = {
      LAUNCH_STATUS_CHECK: 6e3,
      BUY_STATUS_CHECK: 6e3,
      SELL_STATUS_CHECK: 6e3,
      UNLOCK_STATUS_CHECK: 6e3
    }, F = {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: S(te.buyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: S(te.sellGas),
      MEMEPAD_JETTON_DEPLOY_NETWORK_FEE: S(te.deployJettonGas),
      MEMEPAD_JETTON_INITIAL_NETWORK_FEE: S(te.initialGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: S(te.unlockGas)
    }, k = {
      LAUNCH_FEE: new B(.0086),
      LAUNCH_BUY_FEE: new B(.009),
      BUY_FEE: new B(.0046),
      SELL_FEE: new B(.0044),
      UNLOCK_FEE: new B(.004)
    }, N = {
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
    }, P = ({
      hasShare: l
    }) => N.deployNetworkFee.plus(l ? 0 : N.initialNetworkFee), K = ({
      referrerToken: l
    }) => $.beginCell().storeUint(1675682413, 32).storeStringTail(l).endCell(), H = async l => {
      const m = await W(async () => await u.getTotalSupply(r(l)))();
      return j(m) ? x(S(m.data)) : m
    }, z = p(({
      masterAddress: l
    }) => `blumSdk:factoryConfig:${l.toString()}`, async ({
      masterAddress: l
    }) => {
      const m = await W(async () => await u.getFactoryConfig(r(l)))();
      return j(m) ? x(m.data) : m
    }), re = p(({
      masterAddress: l
    }) => `blumSdk:bclData:${l.toString()}`, async ({
      masterAddress: l
    }) => {
      const m = S(u.getThresholdSupply()),
        _ = S(u.getMaxSupply()),
        y = _.minus(m),
        A = S(u.getThresholdTons()),
        w = await z({
          masterAddress: l
        });
      if (!j(w)) return w;
      const {
        buyFeeBasis: q
      } = w.data, R = A.div(new B(1).minus(C(q))).toDecimalPlaces(9, B.ROUND_UP), D = w.data, V = S(w.data.agentDeployFee);
      return x({
        tokenForDexWithFees: R,
        tokenForDex: A,
        bclSupply: m,
        maxSupply: _,
        liqSupply: y,
        factoryConfig: D,
        aiAgentDeployFee: V
      })
    }), oe = async ({
      jettonAddress: l,
      masterAddress: m
    }) => {
      const _ = await re({
        masterAddress: m
      });
      if (!j(_)) return _;
      const {
        bclSupply: y,
        tokenForDex: A,
        liqSupply: w
      } = _.data, q = await H(l);
      if (!j(q)) return q;
      const R = q.data,
        D = new B(y).minus(R),
        V = S(u.getTonSupply(U(R))),
        Z = V.div(A).times(100);
      return x({
        tokenForDex: A,
        tokenCollected: V,
        tokenCollectedPercent: Z,
        bclSupply: y,
        liqSupply: w,
        totalSupply: R,
        availableSupply: D
      })
    }, Y = async ({
      masterAddress: l,
      tons: m
    }) => {
      const _ = U(new B(m)),
        y = await re({
          masterAddress: l
        });
      if (!j(y)) return y;
      const {
        tokenForDex: A,
        bclSupply: w,
        tokenForDexWithFees: q,
        maxSupply: R
      } = y.data, D = await z({
        masterAddress: l
      });
      if (!j(D)) return D;
      const {
        buyFeeBasis: V
      } = D.data, Z = S(u.getBuyAmount(0n, _, V)), ke = Z, je = Z, Ne = w.minus(ke), pe = S(u.getTonSupply(U(ke))), ns = new B(u.getPrice(U(ke))), cr = new B(ns).times(R), pr = pe.div(A).times(100), lr = Z.div(w).times(100), mr = new B(m).minus(pe);
      return x({
        share: new B(m),
        tokenForDexWithFees: q,
        tokenForDex: A,
        tokenCollected: pe,
        availableSupply: Ne,
        maxSupply: R,
        tokenCollectedPercent: pr,
        jettonReceivePercent: lr,
        priceToken: ns,
        marketCapToken: cr,
        platformFee: mr,
        minReceive: je,
        bclData: y.data
      })
    }, X = p(({
      jettonAddress: l,
      userAddress: m
    }) => `blumSdk:jettonWalletAddress:${l.toString()}:${m.toString()}`, async ({
      jettonAddress: l,
      userAddress: m
    }) => await W(async () => await u.getJettonWalletAddress(r(l), r(m)))()), we = async ({
      masterAddress: l,
      form: m,
      tonConnectUI: _,
      referrerToken: y
    }) => {
      const A = Os(m, at.STONFI),
        w = await h.saveMemepadJettonInfo(A);
      if (!j(w)) return w;
      const q = e(_),
        R = w.data.queryId,
        D = Me.STONFI,
        V = {
          name: m.name,
          description: m.description,
          image: Ze(m.iconFileKey),
          symbol: m.ticker,
          decimals: 9
        };
      A.socials.length && (V.social_links = JSON.stringify(A.socials.map(pe => pe.url))), A.bannerFileKey && (V.cover_image = Ze(A.bannerFileKey));
      const Z = y ? K({
          referrerToken: y
        }) : void 0,
        ke = m.aiAgentEnable,
        je = await W(async () => await u.sendDeployJetton(q, r(l), D, V, ke, U(new B(m.share)), Z, R))();
      if (!j(je)) return je;
      const Ne = (await q.getResult()).hash;
      return x({
        queryId: R,
        transactionHash: Ne
      })
    }, vt = t(o, I.LAUNCH_STATUS_CHECK), wt = async ({
      tons: l,
      jettonAddress: m,
      masterAddress: _
    }) => {
      const y = await H(m);
      if (!j(y)) return y;
      const A = y.data,
        w = await z({
          masterAddress: _
        });
      if (!j(w)) return w;
      const {
        buyFeeBasis: q
      } = w.data, R = S(u.getBuyAmount(U(A), U(l), q)), D = R, V = c(R), Z = l.times(C(q));
      return x({
        maxReceive: D,
        minReceive: V,
        platformFee: Z,
        additionalInfo: void 0
      })
    }, kt = async ({
      jettons: l,
      jettonAddress: m,
      masterAddress: _
    }) => {
      const y = await H(m);
      if (!j(y)) return y;
      const A = y.data,
        w = await z({
          masterAddress: _
        });
      if (!j(w)) return w;
      const {
        sellFeeBasis: q
      } = w.data, R = S(u.getSellAmount(U(A), U(l), q)), D = R, V = c(R), Z = R.div(1 - C(q)).minus(R);
      return x({
        maxReceive: D,
        minReceive: V,
        platformFee: Z,
        additionalInfo: void 0
      })
    }, Tt = async ({
      tons: l,
      jettonAddress: m,
      tradeInfoParams: _,
      tonConnectUI: y,
      referrerToken: A
    }) => {
      const w = e(y),
        q = A ? K({
          referrerToken: A
        }) : void 0,
        R = await W(async () => await u.sendBuy(w, r(m), U(l), U(_.minReceive), q))();
      return j(R) ? x((await w.getResult()).hash) : R
    }, At = async ({
      jettons: l,
      jettonAddress: m,
      tradeInfoParams: _,
      userAddress: y,
      tonConnectUI: A,
      referrerToken: w
    }) => {
      const q = e(A),
        R = w ? K({
          referrerToken: w
        }) : void 0,
        D = await X({
          jettonAddress: m,
          userAddress: y
        });
      if (!j(D)) return D;
      const V = D.data,
        Z = await W(async () => await u.sendSell(q, V, U(l), U(_.minReceive), R))();
      return j(Z) ? x((await q.getResult()).hash) : Z
    }, St = () => Ce(({
      transactionHash: l
    }) => o({
      transactionHash: l
    }), () => {}, I.BUY_STATUS_CHECK), jt = () => Ce(({
      transactionHash: l
    }) => o({
      transactionHash: l
    }), () => {}, I.SELL_STATUS_CHECK), qt = async ({
      jettonAddress: l,
      userAddress: m
    }) => {
      const _ = await a({
        jettonAddress: l,
        userAddress: m
      });
      if (j(_) && _.data.isZero()) return x(!1);
      const y = await X({
        jettonAddress: l,
        userAddress: m
      });
      if (!j(y)) return y;
      const A = y.data,
        w = await W(async () => await u.getUnlocked(A))();
      if (!j(w)) return w;
      const q = !w.data;
      return x(q)
    }, rs = async ({
      jettonAddress: l,
      userAddress: m,
      tonConnectUI: _
    }) => {
      const y = e(_),
        A = await X({
          jettonAddress: l,
          userAddress: m
        });
      if (!j(A)) return A;
      const w = A.data,
        q = await W(async () => await u.sendUnlock(y, w))();
      return j(q) ? x((await y.getResult()).hash) : q
    }, g = ({
      transactionHash: l
    }) => o({
      transactionHash: l
    }), b = () => Ce(g, () => {}, I.UNLOCK_STATUS_CHECK), E = s({
      getFees: ({
        share: l,
        overview: m
      }) => {
        const _ = !new B(l).isZero(),
          {
            buyNetworkFee: y,
            walletNetworkLaunchBuyFee: A,
            walletNetworkLaunchFee: w
          } = N,
          q = P({
            hasShare: _
          }),
          R = S(m.bclData.factoryConfig.deployFee);
        return {
          buyNetworkFee: y,
          launchNetworkFee: q,
          launchPlatformFee: R,
          walletNetworkLaunchFee: w,
          walletNetworkLaunchBuyFee: A
        }
      }
    });
    return {
      getJettonTotalSupply: H,
      getFactoryConfig: z,
      getBclData: re,
      createJetton: we,
      getUnlockEnabled: qt,
      unlockWallet: rs,
      getJettonOverview: Y,
      getJettonBclData: oe,
      getBuyInfo: wt,
      getSellInfo: kt,
      buyJetton: Tt,
      sellJetton: At,
      getWaitForBuyStatus: St,
      getWaitForSellStatus: jt,
      getUnlockStatus: g,
      getWaitForUnlockStatus: b,
      getWaitForCreateStatus: vt,
      getMaxShareAmount: ({
        tokenBalance: l,
        overview: m
      }) => {
        const {
          buyNetworkFee: _,
          walletNetworkLaunchBuyFee: y
        } = N, A = P({
          hasShare: !0
        }), w = S(m.bclData.factoryConfig.deployFee), q = l.value.minus(A.plus(w).plus(y).plus(_)), R = m.bclData.tokenForDexWithFees;
        return R.lt(q) ? R : q.gte(0) ? q : new B(0)
      },
      getMaxBuyAmount: ({
        tokenBalance: l
      }) => {
        const {
          buyNetworkFee: m,
          walletNetworkBuyFee: _
        } = N;
        return l.value.minus(m).minus(_)
      },
      getReviewInfo: E,
      fees: N
    }
  },
  En = ({
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
      getReviewInfo: c
    } = Vs(), p = r.masterAddresses[at.STONFI], h = De().tonConnectUI.value;
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
        tonConnectUI: h,
        referrerToken: t
      }),
      getWaitForCreateStatus: () => o(),
      getReviewInfo: ({
        overview: f,
        share: u,
        jettonTicker: C,
        withAiAgent: I
      }) => c({
        overview: f,
        share: u,
        jettonTicker: C,
        tonBalance: e,
        withAiAgent: I
      }),
      getMaxShareAmount: ({
        tokenBalance: f,
        overview: u
      }) => a({
        tokenBalance: f,
        overview: u
      })
    }
  },
  $n = ({
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
      getUserJettonBalance: c
    } = Kt(), {
      slippage: p
    } = it(), {
      getUnlockEnabled: h,
      getWaitForUnlockStatus: f,
      unlockWallet: u,
      buyJetton: C,
      sellJetton: I,
      getWaitForBuyStatus: F,
      getWaitForSellStatus: k,
      getBuyInfo: N,
      getSellInfo: P,
      getMaxBuyAmount: K,
      fees: H
    } = Vs(), O = r.address, z = r.masterContractAddress, ne = De().tonConnectUI.value, re = o(), oe = a({
      getFees: () => H
    });
    return {
      getUserJettonBalance: () => c({
        jettonAddress: O,
        userAddress: n()
      }),
      getUnlockEnabled: () => h({
        jettonAddress: O,
        userAddress: n()
      }),
      getWaitForUnlockStatus: () => f(),
      unlockWallet: () => u({
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
        tradeInfoParams: J
      }) => C({
        tons: Y,
        jettonAddress: O,
        tradeInfoParams: J,
        tonConnectUI: ne,
        referrerToken: s
      }),
      sellJetton: ({
        jettons: Y,
        tradeInfoParams: J
      }) => I({
        jettons: Y,
        jettonAddress: O,
        userAddress: n(),
        tradeInfoParams: J,
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
          amount: J
        }) => re.getImmediateState({
          amount: J,
          tonBalance: e,
          jettonBalance: t,
          operation: Y,
          jettonTicker: r.ticker,
          fees: H
        }),
        getState: ({
          operation: Y,
          amount: J
        }) => re.getState({
          tonBalance: e,
          jettonBalance: t,
          operation: Y,
          amount: J,
          jettonTicker: r.ticker,
          fees: H,
          getBuyInfo: ({
            tons: X
          }) => N({
            tons: X,
            jettonAddress: O,
            masterAddress: z
          }),
          getSellInfo: ({
            jettons: X
          }) => P({
            jettons: X,
            jettonAddress: O,
            masterAddress: z
          })
        })
      },
      getMaxBuyAmount: K
    }
  };
var ae = {},
  dt = {},
  ht = {},
  yt = {};
Object.defineProperty(yt, "__esModule", {
  value: !0
});
yt.normalizeCoin = Cn;
yt.normalizeCoinEvent = Bn;
const Te = $;

function Cn(r) {
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

function Bn(r) {
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
var ft = {};
const Pn = Cr(Br);
Object.defineProperty(ft, "__esModule", {
  value: !0
});
ft.OfetchHttpProvider = void 0;
const vs = Pn;
class Rn {
  get(e, t) {
    return (0, vs.ofetch)(e, {
      query: t.query
    })
  }
  post(e, t) {
    return (0, vs.ofetch)(e, {
      method: "POST",
      body: JSON.stringify(t)
    })
  }
}
ft.OfetchHttpProvider = Rn;
Object.defineProperty(ht, "__esModule", {
  value: !0
});
ht.BclClient = void 0;
const ws = $,
  He = yt,
  Nn = ft;
class In {
  constructor(e) {
    this.fetch = async (t, s) => await this.httpProvider.get(this.endpoint + t, {
      query: s == null ? void 0 : s.query
    }), this.fetchCoins = async t => {
      const s = await this.fetch("/getCoins", {
        query: t ?? {}
      });
      return {
        items: s.items.map(He.normalizeCoin),
        cursor: s.cursor
      }
    }, this.fetchCoin = async t => {
      let s = await this.fetch("/getCoin/" + t.toString({
        urlSafe: !0
      }));
      return (0, He.normalizeCoin)(s)
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
          event: (0, He.normalizeCoinEvent)(o.event),
          coinAddress: ws.Address.parse(o.coinAddress)
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
          event: (0, He.normalizeCoinEvent)(n.event),
          coinAddress: ws.Address.parse(n.coinAddress)
        })),
        cursor: s.cursor
      }
    }, this.endpoint = e.endpoint, this.httpProvider = e.httpProvider ?? new Nn.OfetchHttpProvider
  }
}
ht.BclClient = In;
var Pe = {},
  Se = {};
Object.defineProperty(Se, "__esModule", {
  value: !0
});
Se.Constants = void 0;
const ze = $;
Se.Constants = {
  CoinDeploymentGas: (0, ze.toNano)("0.05"),
  CoinBuyGas: (0, ze.toNano)("0.05"),
  CoinSellGas: (0, ze.toNano)("0.06"),
  WalletUnlockGas: (0, ze.toNano)("0.05")
};
var ve = {};
Object.defineProperty(ve, "__esModule", {
  value: !0
});
ve.crc32 = Ys;
ve.crc32str = On;
const Fn = -306674912;
let rt;

function xn() {
  rt = new Int32Array(256);
  for (let r = 0; r < 256; r++) {
    let e = r;
    for (let t = 8; t > 0; --t) e = e & 1 ? e >>> 1 ^ Fn : e >>> 1;
    rt[r] = e
  }
}

function Ys(r) {
  let e = 4294967295;
  rt === void 0 && xn();
  for (let t = 0; t < r.length; ++t) e = rt[(e ^ r[t]) & 255] ^ e >>> 8;
  return (e ^ -1) >>> 0
}

function On(r) {
  return Ys(_e.from(r))
}
var Ge = {};
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.BclWallet = void 0;
const Ve = $,
  ks = Se,
  Ts = ve;
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
      value: ks.Constants.CoinSellGas,
      sendMode: Ve.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, Ve.beginCell)().storeUint((0, Ts.crc32str)("op::sell"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.amount).storeCoins(s.minReceive).storeMaybeRef(s.referral).endCell()
    })
  }
  async sendUnlockWallet(e, t, s) {
    await e.internal(t, {
      value: ks.Constants.WalletUnlockGas,
      sendMode: Ve.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, Ve.beginCell)().storeUint((0, Ts.crc32str)("op::unlock_wallet"), 32).storeUint(s.queryId ?? 0, 64).endCell()
    })
  }
  async getTransfersEnabled(e) {
    return (await e.get("get_transfers_enabled", [])).stack.readBoolean()
  }
}
Ge.BclWallet = Yt;
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.BclJetton = void 0;
Pe.parseBclEvent = Un;
const Nt = $,
  Mn = Se,
  Xe = ve,
  Dn = Ge;

function Un(r) {
  let e = r.beginParse(),
    t = e.loadUint(32);
  if (t === (0, Xe.crc32str)("send_liq_log")) return {
    type: "send_liq",
    tonLiq: e.loadCoins(),
    jettonLiq: e.loadCoins()
  };
  if (t === (0, Xe.crc32str)("sell_log")) return {
    type: "sell",
    trader: e.loadAddress(),
    tonValue: e.loadCoins(),
    supplyDelta: e.loadCoins(),
    newSupply: e.loadCoins(),
    tonLiqCollected: e.loadCoins(),
    referral: e.loadMaybeRef()
  };
  if (t === (0, Xe.crc32str)("buy_log")) return {
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
      cell: (0, Nt.beginCell)().storeAddress(t).endCell()
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
    let n = (0, Nt.beginCell)().storeUint((0, Xe.crc32str)("op::buy"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.minReceive).storeMaybeRef(s.referral);
    s.buyerAddress && n.storeAddress(s.buyerAddress), await e.internal(t, {
      value: s.tons + Mn.Constants.CoinBuyGas,
      sendMode: Nt.SendMode.PAY_GAS_SEPARATELY,
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
    return e.open(Dn.BclWallet.createFromAddress(s))
  }
}
Pe.BclJetton = Qt;
var Le = {},
  Re = {},
  gt = {};
Object.defineProperty(gt, "__esModule", {
  value: !0
});
gt.sha256ToBigint = void 0;
const Gn = Pr(),
  Ln = r => BigInt("0x" + (0, Gn.createHash)("sha256").update(r).digest().toString("hex"));
gt.sha256ToBigint = Ln;
Object.defineProperty(Re, "__esModule", {
  value: !0
});
Re.storeSnakeContentData = Zs;
Re.loadSnakeContentData = er;
Re.storeTokenOnchainContent = Wn;
Re.loadTokenOnchainContent = Kn;
const nt = Ds,
  Jn = gt,
  Qs = 0,
  Xs = 0;

function Zs(r) {
  return e => e.storeUint(Xs, 8).storeStringTail(r)
}

function er(r) {
  if (r.loadUint(8) !== Xs) throw new Error("Not snake ContentData");
  return r.loadStringTail()
}
const tr = {
  serialize: (r, e) => {
    e.storeRef((0, nt.beginCell)().store(Zs(r)).endCell())
  },
  parse: r => er(r.loadRef().beginParse())
};

function Wn(r) {
  return e => {
    const t = nt.Dictionary.empty(nt.Dictionary.Keys.BigUint(256), tr);
    for (const s in r) r[s] && t.set((0, Jn.sha256ToBigint)(s), r[s]);
    return e.storeUint(Qs, 8).storeDict(t)
  }
}

function Kn(r) {
  if (r.loadUint(8) !== Qs) throw new Error("Not on-chain content");
  return r.loadDict(nt.Dictionary.Keys.BigUint(256), tr)
}
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.BclMaster = void 0;
const Ee = $,
  As = Se,
  Ss = ve,
  Hn = Re;
class Xt {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Xt(e)
  }
  async sendDeployCoin(e, t, s, n) {
    let o = (0, Ee.beginCell)().store((0, Hn.storeTokenOnchainContent)({
        name: s.name,
        description: s.description,
        image: s.imageUrl,
        symbol: s.symbol,
        decimals: "9",
        social_links: JSON.stringify(s.socialLinks),
        ...s.extraMetadata
      })).endCell(),
      a = (0, Ee.beginCell)().storeUint((0, Ss.crc32str)("op::deploy_coin"), 32).storeUint(s.queryId ?? 0, 64).storeRef(o).storeAddress(s.authorAddress).storeRef(s.referral ?? (0, Ee.beginCell)().endCell()),
      c = (0, Ee.beginCell)().storeUint(3547469196, 32).storeUint(s.queryId ?? 0, 64).endCell();
    if (n != null && n.firstBuy) {
      let f = (0, Ee.beginCell)().storeUint((0, Ss.crc32str)("op::buy"), 32).storeUint(n.firstBuy.queryId ?? 0, 64).storeCoins(n.firstBuy.minReceive).storeMaybeRef(n.firstBuy.referral);
      n.firstBuy.buyerAddress && f.storeAddress(n.firstBuy.buyerAddress), c = f.endCell()
    }
    a.storeMaybeRef(c);
    let p;
    n != null && n.forceDeploymentFee ? p = n.forceDeploymentFee : p = (await this.getMasterData(e)).deploymentFee;
    let h = p + As.Constants.CoinDeploymentGas;
    n != null && n.firstBuy && (h += As.Constants.CoinBuyGas + n.firstBuy.tons), await e.internal(t, {
      value: h,
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
Le.BclMaster = Xt;
Object.defineProperty(dt, "__esModule", {
  value: !0
});
dt.BclSDK = void 0;
const zn = ht,
  Vn = Pe,
  It = Le;
class Zt {
  constructor(e) {
    this.apiProvider = e.apiProvider, this.api = new zn.BclClient(e.clientOptions), this.masterAddress = e.masterAddress
  }
  openCoin(e) {
    return this.apiProvider.open(Vn.BclJetton.createFromAddress(e))
  }
  async openUserCoinWallet(e, t) {
    return await this.openCoin(e).getUserWallet(t)
  }
  async deployCoin(e, t, s) {
    await this.apiProvider.open(It.BclMaster.createFromAddress(this.masterAddress)).sendDeployCoin(e, t, s)
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
    return await this.apiProvider.open(It.BclMaster.createFromAddress(this.masterAddress)).getCoinsForTons(e)
  }
  async getMasterData() {
    return await this.apiProvider.open(It.BclMaster.createFromAddress(this.masterAddress)).getMasterData()
  }
  open(e) {
    return this.apiProvider.open(e)
  }
  static create(e) {
    return new Zt(e)
  }
}
dt.BclSDK = Zt;
var _t = {},
  G = {};
Object.defineProperty(G, "__esModule", {
  value: !0
});
var sr = G.Api = rr = G.HttpClient = G.ContentType = G.PoolImplementationType = G.TrustType = G.JettonVerificationType = G.BouncePhaseType = G.ComputeSkipReason = G.AccStatusChange = G.TransactionType = G.AccountStatus = void 0,
  js;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(js || (G.AccountStatus = js = {}));
var qs;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(qs || (G.TransactionType = qs = {}));
var Es;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(Es || (G.AccStatusChange = Es = {}));
var $s;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})($s || (G.ComputeSkipReason = $s = {}));
var Cs;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(Cs || (G.BouncePhaseType = Cs = {}));
var Bs;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(Bs || (G.JettonVerificationType = Bs = {}));
var Ps;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(Ps || (G.TrustType = Ps = {}));
var Rs;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(Rs || (G.PoolImplementationType = Rs = {}));
var ge;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(ge || (G.ContentType = ge = {}));
class Yn {
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
      [ge.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
      [ge.Text]: e => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
      [ge.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? JSON.stringify(n) : `${n}`), t
      }, new FormData),
      [ge.UrlEncoded]: e => this.toQueryString(e)
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
      baseUrl: c,
      cancelToken: p,
      ...h
    }) => {
      const f = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        u = this.mergeRequestParams(h, f),
        C = o && this.toQueryString(o),
        I = this.contentFormatters[n || ge.Json],
        F = a || u.format;
      return this.customFetch(`${c||this.baseUrl||""}${s}${C?`?${C}`:""}`, {
        ...u,
        headers: {
          ...u.headers || {},
          ...n && n !== ge.FormData ? {
            "Content-Type": n
          } : {}
        },
        signal: (p ? this.createAbortSignal(p) : u.signal) || null,
        body: typeof e > "u" || e === null ? null : I(e)
      }).then(async k => {
        const N = k.clone();
        N.data = null, N.error = null;
        const P = F ? await k[F]().then(K => (N.ok ? N.data = K : N.error = K, N)).catch(K => (N.error = K, N)) : N;
        if (p && this.abortControllers.delete(p), !k.ok) throw P;
        return P.data
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
var rr = G.HttpClient = Yn;
class Qn {
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
sr = G.Api = Qn;
var Je = {};
Object.defineProperty(Je, "__esModule", {
  value: !0
});
Je.runGetMethod = Xn;
Je.TvmStackRecordToTupleItem = es;
Je.TupleItemToTonapiString = nr;
const Gt = $;
async function Xn(r, e, t, s) {
  const n = await r.blockchain.execGetMethodForBlockchainAccount(e.toRawString(), t, {
    args: s == null ? void 0 : s.map(nr)
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
          cell: Gt.Cell.fromBase64(_e.from(r.cell, "hex").toString("base64"))
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

function nr(r) {
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
_t.simpleTonapiProvider = Zn;
_t.createProvider = ts;
const Ye = G,
  Ie = $,
  Ns = Je;

function Zn(r) {
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
      if (t.status === Ye.AccountStatus.Nonexist || t.status === Ye.AccountStatus.Uninit) s = {
        type: "uninit"
      };
      else if (t.status === Ye.AccountStatus.Active) s = {
        type: "active",
        code: t.code ? _e.from(t.code, "hex") : null,
        data: t.data ? _e.from(t.data, "hex") : null
      };
      else if (t.status === Ye.AccountStatus.Frozen) s = {
        type: "frozen",
        stateHash: _e.from(t.frozen_hash, "hex")
      };
      else throw new Error("Unknown state");
      return {
        balance: BigInt(t.balance),
        last: t.last_transaction_hash ? {
          lt: BigInt(t.last_transaction_lt),
          hash: _e.from(t.last_transaction_hash, "hex")
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
        stack: new Ie.TupleReader(n.stack.map(Ns.TvmStackRecordToTupleItem))
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
      let c = null;
      typeof s.body == "string" ? c = (0, Ie.comment)(s.body) : s.body && (c = s.body), await t.send({
        to: e.address,
        value: a,
        bounce: o,
        sendMode: s.sendMode,
        init: null,
        body: c
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
const eo = () => Math.floor(Date.now() / 1e3);
Be.unixtime = eo;
const to = r => new Promise(e => {
  setTimeout(() => e(), r)
});
Be.delay = to;
Object.defineProperty(ss, "__esModule", {
  value: !0
});
ss.tonConnectSender = ro;
const Qe = $,
  so = Be;

function ro(r) {
  let e;
  const t = [];
  return {
    get address() {
      var n;
      const s = (n = r.account) == null ? void 0 : n.address;
      return s ? Qe.Address.parse(s) : void 0
    },
    async send(s) {
      var C;
      const n = (0, so.unixtime)() + 600,
        o = s.to.toString({
          urlSafe: !0,
          bounceable: !0
        }),
        a = (C = this.address) == null ? void 0 : C.toRawString(),
        c = s.value.toString();
      let p;
      s.init && (p = (0, Qe.beginCell)().store((0, Qe.storeStateInit)(s.init)).endCell().toBoc().toString("base64"));
      let h;
      s.body && (h = s.body.toBoc().toString("base64"));
      const f = await r.sendTransaction({
          validUntil: n,
          from: a,
          messages: [{
            address: o,
            amount: c,
            stateInit: p,
            payload: h
          }]
        }),
        u = Qe.Cell.fromBase64(f.boc);
      e = {
        msg: u,
        hash: u.hash().toString("hex")
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
var or = {};
Object.defineProperty(or, "__esModule", {
  value: !0
});
var bt = {};
Object.defineProperty(bt, "__esModule", {
  value: !0
});
bt.packReferralConfig = oo;
bt.unpackReferralConfig = ao;
const no = Ds,
  ar = ve;

function oo(r) {
  let e = (0, no.beginCell)().storeUint((0, ar.crc32str)("ref_v1"), 32).storeAddress(r.partner);
  if (r.platformTag && e.storeAddress(r.platformTag), r.extraTag) {
    if (!r.platformTag) throw new Error("extraTag should only be set if platformTag is present");
    e.storeAddress(r.extraTag)
  }
  return e.endCell()
}

function ao(r) {
  let e = r.beginParse();
  if (e.loadUint(32) !== (0, ar.crc32str)("ref_v1")) throw new Error("Unknown referral format");
  let s = e.loadAddress(),
    n, o;
  return e.remainingBits > 0 && (n = e.loadAddress()), e.remainingBits > 0 && (o = e.loadAddress()), {
    partner: s,
    platformTag: n,
    extraTag: o
  }
}(function(r) {
  var e = $e && $e.__createBinding || (Object.create ? function(o, a, c, p) {
      p === void 0 && (p = c);
      var h = Object.getOwnPropertyDescriptor(a, c);
      (!h || ("get" in h ? !a.__esModule : h.writable || h.configurable)) && (h = {
        enumerable: !0,
        get: function() {
          return a[c]
        }
      }), Object.defineProperty(o, p, h)
    } : function(o, a, c, p) {
      p === void 0 && (p = c), o[p] = a[c]
    }),
    t = $e && $e.__exportStar || function(o, a) {
      for (var c in o) c !== "default" && !Object.prototype.hasOwnProperty.call(a, c) && e(a, o, c)
    };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.crc32 = r.crc32str = r.tonConnectSender = void 0, t(dt, r), t(_t, r);
  var s = ss;
  Object.defineProperty(r, "tonConnectSender", {
    enumerable: !0,
    get: function() {
      return s.tonConnectSender
    }
  });
  var n = ve;
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
  }), t(or, r), t(Le, r), t(Pe, r), t(Ge, r), t(Se, r), t(bt, r)
})(ae);
const ir = () => {
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
      memepadApi: c,
      wrapWithCache: p
    } = it(), h = new sr(new rr({
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
    }, u = {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: S(ae.Constants.CoinBuyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: S(ae.Constants.CoinSellGas),
      MEMEPAD_JETTON_LAUNCH_NETWORK_FEE: S(ae.Constants.CoinDeploymentGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: S(ae.Constants.WalletUnlockGas)
    }, C = {
      LAUNCH_FEE: new B(.0114),
      LAUNCH_BUY_FEE: new B(.012),
      BUY_FEE: new B(.0062),
      SELL_FEE: new B(.0044),
      UNLOCK_FEE: new B(.0037)
    }, I = {
      buyNetworkFee: u.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: u.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      launchNetworkFee: u.MEMEPAD_JETTON_LAUNCH_NETWORK_FEE,
      unlockNetworkFee: u.MEMEPAD_JETTON_UNLOCK_NETWORK_FEE,
      walletNetworkLaunchFee: C.LAUNCH_FEE,
      walletNetworkLaunchBuyFee: C.LAUNCH_BUY_FEE,
      walletNetworkBuyFee: C.BUY_FEE,
      walletNetworkSellFee: C.SELL_FEE,
      walletNetworkUnlockFee: C.UNLOCK_FEE
    }, F = g => {
      const b = `tonFunSdk:${g.toString()}`,
        E = Nr(b, () => new Map),
        T = E.value.get(b);
      if (T) return T;
      const v = ae.BclSDK.create({
        apiProvider: ae.simpleTonapiProvider(h),
        clientOptions: {
          endpoint: ""
        },
        masterAddress: r(g)
      });
      return E.value.set(b, v), v
    }, k = g => new B(1).minus(S(g.fees)).div(S(g.coins)), P = p(({
      masterAddress: g
    }) => `tonFunSdk:bclData:${g.toString()}`, async ({
      masterAddress: g
    }) => {
      const b = await W(async () => await F(g).getMasterData())();
      if (!j(b)) return Rr(b);
      const E = S(b.data.fullPriceTon),
        T = S(b.data.fullPriceTon).minus(S(b.data.fullPriceTonFees)),
        v = S(b.data.bclSupply),
        l = S(b.data.liqSupply),
        m = v.plus(l),
        _ = new B(0);
      return x({
        tokenForDexWithFees: E,
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
    }) => await W(async () => await F(b).getFirstCoinsForTons(U(new B(g))))()), z = p(({
      tons: g,
      masterAddress: b
    }) => `tonFunSdk:jettonOverview:${b.toString()}:${g.toString()}`, async ({
      tons: g,
      masterAddress: b
    }) => {
      const E = new B(g),
        T = await P({
          masterAddress: b
        });
      if (!j(T)) return T;
      const {
        tokenForDex: v,
        tokenForDexWithFees: l,
        bclSupply: m,
        maxSupply: _
      } = T.data, y = await (async () => new B(E).isZero() ? x({
        fees: U(new B(0)),
        coins: U(new B(0))
      }) : await H({
        tons: g,
        masterAddress: b
      }))();
      if (!j(y)) return y;
      const A = y.data,
        w = await (async () => {
          const pe = await H({
            masterAddress: b,
            tons: 1
          });
          return j(pe) ? x(k(pe.data)) : pe
        })();
      if (!j(w)) return w;
      const q = w.data,
        R = q.mul(_),
        D = new B(S(A.coins)),
        V = new B(S(A.fees)),
        Z = new B(E).minus(V),
        ke = Z.div(v).times(100),
        je = D.div(m).times(100),
        Ne = new B(m).sub(D);
      return x({
        share: E,
        tokenForDexWithFees: l,
        tokenForDex: v,
        tokenCollected: Z,
        tokenCollectedPercent: ke,
        jettonReceivePercent: je,
        priceToken: q,
        marketCapToken: R,
        availableSupply: Ne,
        maxSupply: _,
        platformFee: V,
        minReceive: D,
        bclData: T.data
      })
    }), ne = async ({
      form: g,
      userAddress: b,
      masterAddress: E,
      tonConnectUI: T
    }) => {
      const v = Os(g, at.STONFI_TON_FUN),
        l = await c.saveMemepadJettonInfo(v);
      if (!j(l)) return l;
      const m = new B(g.share),
        _ = g.overview.minReceive,
        y = {
          name: v.name,
          description: v.description,
          imageUrl: Ze(v.iconFileKey),
          symbol: v.ticker,
          share: U(m),
          referral: l.data.referral,
          partnerAddress: l.data.partnerAddress,
          queryId: l.data.queryId,
          minReceive: U(_)
        },
        A = {};
      v.socials.length && (A.social_links = JSON.stringify(v.socials.map(V => V.url))), v.bannerFileKey && (A.cover_image = Ze(v.bannerFileKey));
      const w = {
          authorAddress: r(b),
          name: y.name,
          description: y.description,
          imageUrl: y.imageUrl,
          symbol: y.symbol,
          referral: ae.packReferralConfig({
            partner: r(y.partnerAddress),
            platformTag: r(y.referral)
          }),
          queryId: $.toNano(y.queryId),
          extraMetadata: A
        },
        q = {
          firstBuy: m.isZero() ? void 0 : {
            tons: y.share,
            minReceive: y.minReceive,
            referral: ae.packReferralConfig({
              partner: r(y.partnerAddress)
            }),
            buyerAddress: r(b)
          }
        },
        R = e(T),
        D = await W(async () => await F(E).deployCoin(R, w, q))();
      return j(D) ? x({
        queryId: l.data.queryId,
        transactionHash: (await R.getResult()).hash
      }) : D
    }, re = () => t(o, f.LAUNCH_STATUS_CHECK), oe = async ({
      jettonAddress: g,
      masterAddress: b
    }) => {
      const E = await W(async () => await F(b).openCoin(r(g)))();
      if (!j(E)) return E;
      const T = await W(async () => await E.data.getBclData())();
      if (!j(T)) return T;
      const v = S(T.data.totalSupply),
        l = S(T.data.fullPriceTon).minus(S(T.data.fullPriceTonFees)),
        m = S(T.data.tonLiqCollected),
        _ = m.div(l).times(100),
        y = S(T.data.bclSupply),
        A = S(T.data.liqSupply),
        w = y.minus(v);
      return x({
        tokenForDex: l,
        tokenCollected: m,
        tokenCollectedPercent: _,
        bclSupply: y,
        liqSupply: A,
        totalSupply: v,
        availableSupply: w
      })
    }, Y = async ({
      jettonAddress: g,
      userAddress: b,
      masterAddress: E
    }) => {
      var m, _, y;
      const T = await W(async () => await F(E).openCoin(r(g)).getUserWallet(r(b)))();
      if (!j(T)) return T;
      const v = await W(async () => !await T.data.getTransfersEnabled())();
      if (!j(v)) return ((m = v.extra) == null ? void 0 : m.status) === 404 && ((y = (_ = v.extra) == null ? void 0 : _.error) == null ? void 0 : y.error) === "entity not found" ? x(!1) : v;
      const l = v.data;
      return x(l)
    }, J = async ({
      jettonAddress: g,
      userAddress: b,
      masterAddress: E,
      tonConnectUI: T
    }) => {
      const v = F(E).openCoin(r(g)),
        l = await W(async () => await v.getUserWallet(r(b)))();
      if (!j(l)) return l;
      const m = e(T),
        _ = await W(async () => await l.data.sendUnlockWallet(m, {}))();
      return j(_) ? x((await m.getResult()).hash) : _
    }, X = () => Ce(async ({
      transactionHash: g
    }) => await o({
      transactionHash: g
    }), () => {}, f.UNLOCK_STATUS_CHECK), we = async ({
      tons: g,
      masterAddress: b,
      jettonAddress: E,
      partnerAddress: T
    }) => {
      const v = await W(async () => await F(b).openCoin(r(E)).getCoinsForTons(U(g)))();
      if (!j(v)) return v;
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
    }, vt = async ({
      jettons: g,
      masterAddress: b,
      jettonAddress: E,
      partnerAddress: T
    }) => {
      const v = await W(async () => await F(b).openCoin(r(E)).getTonsForCoins(U(g)))();
      if (!j(v)) return v;
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
    }, wt = async ({
      userAddress: g,
      jettonAddress: b,
      masterAddress: E
    }) => {
      const T = await W(async () => await F(E).getUserCoinBalance(r(b), r(g)))();
      return j(T) ? x(S(T.data)) : T
    }, kt = async ({
      tons: g,
      tradeInfoParams: b,
      masterAddress: E,
      jettonAddress: T,
      tonConnectUI: v
    }) => {
      const l = {
          tons: U(g),
          minReceive: U(b.minReceive),
          referral: ae.packReferralConfig({
            partner: r(b.additionalInfo.partnerAddress)
          })
        },
        m = e(v),
        _ = await W(async () => await F(E).openCoin(r(T)).sendBuy(m, l))();
      return j(_) ? x((await m.getResult()).hash) : _
    }, Tt = async ({
      jettons: g,
      tradeInfoParams: b,
      jettonAddress: E,
      masterAddress: T,
      userAddress: v,
      tonConnectUI: l
    }) => {
      const m = await F(T).openCoin(r(E)).getUserWallet(r(v)),
        _ = e(l),
        y = await W(async () => await m.sendSellCoins(_, {
          amount: U(g),
          minReceive: U(b.minReceive),
          referral: ae.packReferralConfig({
            partner: r(b.additionalInfo.partnerAddress)
          }),
          queryId: 0n
        }))();
      return j(y) ? x((await _.getResult()).hash) : y
    }, At = () => Ce(({
      transactionHash: g
    }) => o({
      transactionHash: g
    }), () => {}, f.BUY_STATUS_CHECK), St = () => Ce(({
      transactionHash: g
    }) => o({
      transactionHash: g
    }), () => {}, f.SELL_STATUS_CHECK), jt = ({
      tokenBalance: g,
      overview: b
    }) => {
      const {
        buyNetworkFee: E,
        launchNetworkFee: T,
        walletNetworkLaunchBuyFee: v
      } = I, l = b.bclData.launchPlatformFee, m = g.value.minus(T.plus(l).plus(v).plus(E)), _ = b.bclData.tokenForDexWithFees;
      return _.lt(m) ? _ : m.gte(0) ? m : new B(0)
    }, qt = s({
      getFees: ({
        overview: g
      }) => {
        const {
          buyNetworkFee: b,
          launchNetworkFee: E,
          walletNetworkLaunchBuyFee: T,
          walletNetworkLaunchFee: v
        } = I, l = g.bclData.launchPlatformFee;
        return {
          buyNetworkFee: b,
          launchNetworkFee: E,
          launchPlatformFee: l,
          walletNetworkLaunchFee: v,
          walletNetworkLaunchBuyFee: T
        }
      }
    });
    return {
      getCoinPriceInTons: k,
      getBclData: P,
      getUnlockEnabled: Y,
      getJettonBclData: oe,
      unlockWallet: J,
      getWaitForUnlockStatus: X,
      getBuyInfo: we,
      getSellInfo: vt,
      buyJetton: kt,
      sellJetton: Tt,
      getUserJettonBalance: wt,
      getWaitForBuyStatus: At,
      getWaitForSellStatus: St,
      getJettonOverview: z,
      createJetton: ne,
      getWaitForCreateStatus: re,
      getMaxShareAmount: jt,
      getMaxBuyAmount: ({
        tokenBalance: g
      }) => {
        const {
          buyNetworkFee: b,
          walletNetworkBuyFee: E
        } = I;
        return g.value.minus(b).minus(E)
      },
      getReviewInfo: qt,
      fees: I
    }
  },
  io = ({
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
      getReviewInfo: c
    } = ir(), p = r.masterAddresses[at.STONFI_TON_FUN], h = De().tonConnectUI.value;
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
        tonConnectUI: h,
        userAddress: t()
      }),
      getWaitForCreateStatus: () => o()(),
      getReviewInfo: ({
        overview: f,
        share: u,
        jettonTicker: C,
        withAiAgent: I
      }) => c({
        overview: f,
        share: u,
        jettonTicker: C,
        tonBalance: e,
        withAiAgent: I
      }),
      getMaxShareAmount: ({
        tokenBalance: f,
        overview: u
      }) => a({
        tokenBalance: f,
        overview: u
      })
    }
  },
  co = ({
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
      slippage: c
    } = it(), {
      getUserJettonBalance: p,
      getUnlockEnabled: h,
      getWaitForUnlockStatus: f,
      unlockWallet: u,
      buyJetton: C,
      sellJetton: I,
      getWaitForBuyStatus: F,
      getWaitForSellStatus: k,
      getBuyInfo: N,
      getSellInfo: P,
      getMaxBuyAmount: K,
      fees: H
    } = ir(), O = e.address, z = e.masterContractAddress, ne = r.partnerAddress, re = De().tonConnectUI.value, oe = a({
      getFees: () => H
    }), Y = o();
    return {
      getUserJettonBalance: () => p({
        jettonAddress: O,
        userAddress: n(),
        masterAddress: z
      }),
      getUnlockEnabled: () => h({
        jettonAddress: O,
        userAddress: n(),
        masterAddress: z
      }),
      getWaitForUnlockStatus: () => f(),
      unlockWallet: () => u({
        jettonAddress: O,
        userAddress: n(),
        masterAddress: z,
        tonConnectUI: re
      }),
      getUnlockInfo: () => oe({
        tonBalance: t,
        jettonBalance: s
      }),
      getSlippage: () => c.value,
      updateSlippage: J => c.value = J,
      buyJetton: ({
        tons: J,
        tradeInfoParams: X
      }) => C({
        tons: J,
        jettonAddress: O,
        masterAddress: z,
        tradeInfoParams: X,
        tonConnectUI: re
      }),
      sellJetton: ({
        jettons: J,
        tradeInfoParams: X
      }) => I({
        jettons: J,
        jettonAddress: O,
        masterAddress: z,
        userAddress: n(),
        tradeInfoParams: X,
        tonConnectUI: re
      }),
      getWaitForBuyStatus: () => F(),
      getWaitForSellStatus: () => k(),
      tradeStateControls: {
        getEmptyState: ({
          operation: J
        }) => Y.getEmptyState({
          tonBalance: t,
          jettonBalance: s,
          operation: J
        }),
        getImmediateState: ({
          operation: J,
          amount: X
        }) => Y.getImmediateState({
          amount: X,
          tonBalance: t,
          jettonBalance: s,
          operation: J,
          jettonTicker: e.ticker,
          fees: H
        }),
        getState: ({
          operation: J,
          amount: X
        }) => Y.getState({
          tonBalance: t,
          jettonBalance: s,
          operation: J,
          amount: X,
          jettonTicker: e.ticker,
          fees: H,
          getBuyInfo: ({
            tons: we
          }) => N({
            tons: we,
            jettonAddress: O,
            masterAddress: z,
            partnerAddress: ne
          }),
          getSellInfo: ({
            jettons: we
          }) => P({
            jettons: we,
            jettonAddress: O,
            masterAddress: z,
            partnerAddress: ne
          })
        })
      },
      getMaxBuyAmount: K
    }
  },
  Ao = ({
    balances: r,
    addresses: e,
    networkType: t,
    referrerToken: s
  }) => {
    switch (t) {
      case Ms.TON:
        switch (e.sdkType) {
          case et.TON_FUN:
            return io({
              tonBalance: r.tokenBalance,
              addresses: e
            });
          case et.BLUM:
            return En({
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
  So = ({
    isReleased: r,
    sdkType: e,
    dexType: t,
    addresses: s,
    jetton: n,
    networkType: o,
    balances: a,
    referrerToken: c
  }) => {
    switch (o) {
      case Ms.TON: {
        const p = (() => {
          switch (e) {
            case et.TON_FUN:
              return co({
                addresses: s,
                jetton: n,
                tonBalance: a.tokenBalance,
                jettonBalance: a.jettonBalance
              });
            case et.BLUM:
              return $n({
                jetton: n,
                tonBalance: a.tokenBalance,
                jettonBalance: a.jettonBalance,
                referrerToken: c
              });
            default:
              throw xe("Unknown sdk type")
          }
        })();
        if (r) {
          const h = (() => {
            switch (t) {
              case Ir.STONFI:
                return Lr({
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
            ...h
          }
        }
        return p
      }
      default:
        throw xe("Unknown network type")
    }
  };
export {
  _o as _, bo as a, vo as b, ko as c, Ao as d, wo as f, So as g
};