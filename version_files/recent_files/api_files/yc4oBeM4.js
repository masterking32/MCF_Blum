var pr = Object.defineProperty;
var lr = (r, e, t) => e in r ? pr(r, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : r[e] = t;
var y = (r, e, t) => lr(r, typeof e != "symbol" ? e + "" : e, t);
import {
  d as at,
  a8 as mr,
  h as dr,
  ak as Rs,
  o as fe,
  M as xe,
  e as X,
  C as Nt,
  X as Is,
  be as Ue,
  bq as ur,
  G as hr,
  x as Ns,
  bW as yr,
  az as fr,
  cd as He,
  n as Jt,
  ad as de,
  E as Lt,
  f as Wt,
  A as Et,
  j as ns,
  U as os,
  c as Ft,
  w as gr,
  b$ as _r,
  a as me,
  p as br,
  aN as as,
  t as vr,
  ce as wr,
  a1 as $,
  D as is,
  b as kr,
  cf as Se,
  cg as ze,
  ch as qe,
  bz as j,
  ci as ye,
  cj as Tr,
  ck as Ar,
  cl as cs,
  cm as k,
  cn as it,
  co as W,
  aa as S,
  a5 as x,
  cp as O,
  cq as Fs,
  b5 as tt,
  bn as Ee,
  cr as Sr,
  cs as jr,
  ct as qr,
  aL as Er,
  bc as $r,
  a3 as Oe,
  cc as xs,
  cu as st,
  cv as Cr
} from "./Cbo9LC6p.js";
import {
  _ as Br
} from "./B0Xhtl34.js";
import {
  B as Pr
} from "./BwULOWsZ.js";
import {
  _ as Rr
} from "./BCT2FObz.js";
import {
  _ as Ir
} from "./M3dUyArS.js";
import {
  p as Nr,
  r as Fr,
  s as xr,
  c as De,
  d as Kt,
  e as ct,
  g as Or
} from "./BQIfgLwR.js";
import {
  d as Os
} from "./dj0cmx8R.js";
const lo = at({
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
        t = mr(),
        s = dr().$webApp;

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
          const i = Ue().tonConnectUI.value,
            d = (i.walletInfo || i.wallet).universalLink;
          if (ur(d)) {
            const _ = "https://t.me/wallet/start?startapp=main-rc__a0646df863";
            n("ios", "weba", "android", "tdesktop", "webk") ? s.openTelegramLink(_) : s.openLink(_)
          } else s.openLink(d)
        },
        a = hr(() => t.memepad.memepadShowTopupButton({
          flowType: e.flowType,
          balance: e.valueBalance,
          value: e.inputValue,
          source: e.source
        }), 1e3).debouncedFunction;
      return Rs(() => {
        a()
      }), (i, m) => {
        const d = Ns;
        return fe(), xe(d, {
          label: ("t" in i ? i.t : X(Nt))("memepad.top_up_wallet_button"),
          fill: "",
          size: X(Is).LARGE,
          onClick: o
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Mr = at({
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
      const e = yr().status,
        t = fr();
      return (s, n) => {
        const o = Ns,
          a = Br;
        return X(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : X(He)).DISCONNECTED ? (fe(), xe(o, {
          key: 0,
          label: ("t" in s ? s.t : X(Nt))("wallet.connect.btn"),
          fill: "",
          size: s.buttonSize,
          onClick: n[0] || (n[0] = i => X(t).runConnectionFlow())
        }, null, 8, ["label", "size"])) : X(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : X(He)).MUST_RECONNECT ? (fe(), xe(o, {
          key: 1,
          label: ("t" in s ? s.t : X(Nt))("wallet.reconnect.btn"),
          fill: "",
          size: s.buttonSize,
          onClick: n[1] || (n[1] = i => X(t).runConnectionFlow())
        }, null, 8, ["label", "size"])) : X(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : X(He)).LOADING || s.forceLoading ? (fe(), xe(a, {
          key: 2,
          class: Jt(["skeleton", `is-${s.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : X(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : X(He)).CONNECTED ? de(s.$slots, "default", {
          key: 3
        }, void 0, !0) : Lt("", !0)
      }
    }
  }),
  mo = Wt(Mr, [
    ["__scopeId", "data-v-1e641cbd"]
  ]),
  Ur = at({
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
        i = Et("hiddenInput"),
        m = () => {
          wr(() => {
            a.value && (a.value.style.width = "", a.value.style.width = a.value.scrollWidth + "px")
          })
        },
        d = ns({
          get: () => s.modelValue,
          set: w => {
            if (a.value && a.value.value !== s.modelValue) {
              const E = [...a.value.value].findIndex((V, G) => V !== s.modelValue[G]);
              E !== -1 && a.value.value[E] === "," && (w = w.slice(0, E) + "." + w.slice(E))
            }
            w = (s.modifier || (E => E))(w), a.value && a.value.value !== w && (a.value.value = w), n("update:modelValue", w)
          }
        });
      os(() => s.modelValue, m), os(() => a.value, m);
      const _ = ns(() => {
          if (!o.value || !a.value || !i.value) return;
          const w = parseInt(getComputedStyle(i.value).getPropertyValue("font-size")),
            R = parseInt(getComputedStyle(i.value).getPropertyValue("line-height")),
            E = `${s.modelValue} ${s.postfix}`,
            V = o.value.offsetWidth,
            F = (te => {
              const oe = document.createElement("canvas").getContext("2d");
              return oe ? (oe.font = `700 ${w}px RoobertPro`, oe.measureText(te).width) : void 0
            })(E.trim());
          if (!F) return;
          const z = Math.min(V / F * .75, 1);
          return {
            fontSize: `${w*z}px`,
            lineHeight: `${R*z}px`
          }
        }),
        A = () => {
          var w;
          (w = i.value) == null || w.focus()
        };
      Rs(() => {
        A()
      }), e({
        focusOnInput: A
      });
      const B = () => {
          setTimeout(() => {
            var w;
            (w = a.value) == null || w.focus()
          }, 100)
        },
        P = async () => {
          const w = new FontFace("RoobertPro", `url(${Pr})`, {
            weight: "700"
          });
          await Promise.all([document.fonts.ready, w.load()]), document.fonts.add(w)
        };
      return (() => {
        P()
      })(), (w, R) => (fe(), Ft("label", {
        ref: "el",
        class: Jt(["memepad-jetton-actions-controls-input", {
          "is-centered": w.centered
        }])
      }, [gr(me("input", {
        ref: "input",
        "onUpdate:modelValue": R[0] || (R[0] = E => br(d) ? d.value = E : null),
        type: "text",
        inputmode: "decimal",
        style: as(X(_)),
        onBlur: R[1] || (R[1] = E => n("blur"))
      }, null, 36), [
        [_r, X(d)]
      ]), me("input", {
        ref: "hiddenInput",
        type: "text",
        inputmode: "decimal",
        class: "hidden",
        onFocus: B
      }, null, 544), w.postfix ? (fe(), Ft("span", {
        key: 0,
        class: "label",
        style: as(X(_))
      }, vr(w.postfix), 5)) : Lt("", !0)], 2))
    }
  }),
  uo = Wt(Ur, [
    ["__scopeId", "data-v-44264923"]
  ]),
  ho = r => new $(r.replaceAll(",", "") || "0"),
  Dr = {
    class: "top"
  },
  Gr = {
    class: "center"
  },
  Jr = {
    class: "right"
  },
  Lr = {
    class: "inner"
  },
  Wr = {
    class: "action"
  },
  Kr = {
    key: 0,
    class: "helpers"
  },
  Hr = at({
    __name: "Modal",
    setup(r) {
      return (e, t) => {
        const s = Rr,
          n = Ir;
        return fe(), xe(n, {
          class: "memepad-jetton-modal"
        }, {
          default: is(() => [de(e.$slots, "top", {}, () => [me("div", Dr, [t[0] || (t[0] = me("div", {
            class: "left"
          }, null, -1)), me("div", Gr, [de(e.$slots, "top-center", {}, void 0, !0)]), me("div", Jr, [de(e.$slots, "top-right", {}, void 0, !0)])])], !0), de(e.$slots, "default", {}, () => [me("div", Lr, [de(e.$slots, "inner", {}, void 0, !0)])], !0), kr(s, {
            "ignore-tabs": "",
            "hide-space": ""
          }, {
            default: is(() => [me("div", {
              class: Jt(["memepad-jetton-modal-bottom", {
                "with-helpers": e.$slots["bottom-helpers"]
              }])
            }, [me("div", Wr, [de(e.$slots, "bottom-action", {}, void 0, !0)]), e.$slots["bottom-helpers"] ? (fe(), Ft("div", Kr, [de(e.$slots, "bottom-helpers", {}, void 0, !0)])) : Lt("", !0)], 2)]),
            _: 3
          })]),
          _: 3
        })
      }
    }
  }),
  yo = Wt(Hr, [
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
class Ht extends ae {
  get info() {
    return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Ht.prototype)
  }
}
class zt extends ae {
  get info() {
    return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, zt.prototype)
  }
}
class pt extends ae {
  get info() {
    return "User rejects the action in the wallet."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, pt.prototype)
  }
}
class lt extends ae {
  get info() {
    return "Request to the wallet contains errors."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, lt.prototype)
  }
}
class mt extends ae {
  get info() {
    return "App tries to send rpc request to the injected wallet while not connected."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, mt.prototype)
  }
}
class dt extends ae {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, dt.prototype)
  }
}
Se.UNKNOWN_ERROR + "", Se.USER_REJECTS_ERROR + "", Se.BAD_REQUEST_ERROR + "", Se.UNKNOWN_APP_ERROR + "", Se.MANIFEST_NOT_FOUND_ERROR + "", Se.MANIFEST_CONTENT_ERROR + "";
ze.UNKNOWN_ERROR + "", ze.USER_REJECTS_ERROR + "", ze.BAD_REQUEST_ERROR + "", ze.UNKNOWN_APP_ERROR + "";
for (let r = 0; r <= 255; r++) {
  let e = r.toString(16);
  e.length < 2 && (e = "0" + e)
}
var D = {},
  ut, Vt = qe && qe.__importDefault || function(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  };
Object.defineProperty(D, "__esModule", {
  value: !0
});
var Ms = D.Api = Us = D.TonApiClient = D.ContentType = D.PoolImplementationType = D.TrustType = D.JettonVerificationType = D.BouncePhaseType = D.ComputeSkipReason = D.AccStatusChange = D.TransactionType = ut = D.AccountStatus = void 0,
  ps;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(ps || (ut = D.AccountStatus = ps = {}));
var ls;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(ls || (D.TransactionType = ls = {}));
var ms;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(ms || (D.AccStatusChange = ms = {}));
var ds;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(ds || (D.ComputeSkipReason = ds = {}));
var us;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(us || (D.BouncePhaseType = us = {}));
var hs;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(hs || (D.JettonVerificationType = hs = {}));
var ys;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(ys || (D.TrustType = ys = {}));
var fs;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(fs || (D.PoolImplementationType = fs = {}));
var ue;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(ue || (D.ContentType = ue = {}));
const xt = j,
  zr = Vt(Nr),
  Vr = Vt(Fr),
  Yr = Vt(xr),
  Qr = r => (0, zr.default)(r, (e, t, s) => {
    if (typeof t == "number") {
      const n = s.source;
      return Number.isSafeInteger(t) || /[\.eE]/.test(n) ? t : BigInt(n)
    }
    return t
  }),
  $t = r => (0, Yr.default)(r, (e, t) => typeof t == "bigint" ? (0, Vr.default)(t.toString()) : t);
class Xr {
  constructor(e = {}) {
    y(this, "baseUrl", "https://tonapi.io");
    y(this, "securityData", null);
    y(this, "securityWorker");
    y(this, "abortControllers", new Map);
    y(this, "customFetch", (...e) => fetch(...e));
    y(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    y(this, "setSecurityData", e => {
      this.securityData = e
    });
    y(this, "contentFormatters", {
      [ue.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? $t(e) : e,
      [ue.Text]: e => e !== null && typeof e != "string" ? $t(e) : e,
      [ue.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? $t(n) : `${n}`), t
      }, new FormData),
      [ue.UrlEncoded]: e => this.toQueryString(e)
    });
    y(this, "createAbortSignal", e => {
      if (this.abortControllers.has(e)) {
        const s = this.abortControllers.get(e);
        return s ? s.signal : void 0
      }
      const t = new AbortController;
      return this.abortControllers.set(e, t), t.signal
    });
    y(this, "abortRequest", e => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e))
    });
    y(this, "request", async ({
      body: e,
      secure: t,
      path: s,
      type: n,
      query: o,
      format: a,
      baseUrl: i,
      cancelToken: m,
      ...d
    }) => {
      const _ = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        A = this.mergeRequestParams(d, _),
        B = o && this.toQueryString(o),
        P = n ?? ue.Json,
        N = this.contentFormatters[P],
        w = a || A.format;
      return this.customFetch(`${i||this.baseUrl||""}${s}${B?`?${B}`:""}`, {
        ...A,
        headers: {
          ...A.headers || {},
          ...P && P !== ue.FormData ? {
            "Content-Type": P
          } : {}
        },
        signal: (m ? this.createAbortSignal(m) : A.signal) || null,
        body: typeof e > "u" || e === null ? null : N(e)
      }).then(async R => {
        const E = R.clone();
        E.data = null, E.error = null;
        const V = w === "json" ? "text" : w,
          G = V ? await R[V]().then(F => (E.ok ? E.data = w === "json" ? Qr(F) : F : E.error = F, E)).catch(F => (E.error = F, E)) : E;
        if (m && this.abortControllers.delete(m), !R.ok) throw G;
        return G.data
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
var Us = D.TonApiClient = Xr;
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

function Zr(r) {
  return r.replace(/(_\w)/g, e => {
    var t;
    return ((t = e[1]) == null ? void 0 : t.toUpperCase()) ?? ""
  })
}

function en(r) {
  return r.replace(/([A-Z])/g, e => `_${e.toLowerCase()}`)
}

function Ct(r) {
  return xt.Cell.fromBase64(ye.from(r, "hex").toString("base64"))
}

function tn(r) {
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
      if (s.format === "cell") return r && Ct(r);
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
          type: "int", value: tn(r.num)
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
      i = Zr(o);
    return n[i] = c(r[o], a), n
  }, {}) : r
}

function Z(r, e) {
  const t = e && e.$ref,
    s = t ? Ds[t] : e;
  if (Array.isArray(r)) {
    const n = s && s.items;
    return r.map(o => Z(o, n))
  } else if (s && s.type === "string") {
    if (s.format === "address") return r.toRawString();
    if (s.format === "cell") return r.toBoc().toString("hex");
    if (s.format === "cell-base64") return r.toBoc().toString("base64")
  }
  return r !== null && typeof r == "object" ? Object.keys(r).reduce((n, o) => {
    const a = (s == null ? void 0 : s.properties) && s.properties[o],
      i = en(o);
    return n[i] = Z(r[o], a), n
  }, {}) : r
}
let sn = class {
  constructor(e) {
    y(this, "http");
    y(this, "utilities", {
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
    y(this, "blockchain", {
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
          body: Z(e, {
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
    y(this, "accounts", {
      getAccounts: async (e, t, s = {}) => {
        const n = await this.http.request({
          path: "/v2/accounts/_bulk",
          method: "POST",
          query: t,
          body: Z(e, {
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
    y(this, "nft", {
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
          body: Z(e, {
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
    y(this, "dns", {
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
    y(this, "traces", {
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
    y(this, "events", {
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
    y(this, "inscriptions", {
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
    y(this, "jettons", {
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
    y(this, "staking", {
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
    y(this, "storage", {
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
    y(this, "rates", {
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
    y(this, "connect", {
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
          body: Z(e, {
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
    y(this, "wallet", {
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
          body: Z(e),
          ...t
        });
        return c(s)
      },
      tonConnectProof: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/auth/proof",
          method: "POST",
          body: Z(e, {
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
    y(this, "gasless", {
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
            body: Z(t, {
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
          body: Z(e, {
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
    y(this, "liteServer", {
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
          body: Z(e, {
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
    y(this, "multisig", {
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
    y(this, "emulation", {
      decodeMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/message/decode",
          method: "POST",
          body: Z(e, {
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
          body: Z(e, {
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
          body: Z(e, {
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
          body: Z(e, {
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
            body: Z(t, {
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
Ms = D.Api = sn;
var rn = class {
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
            status: ut.Uninit,
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
          hash: Tr.from(s.lastTransactionHash, "base64")
        } : null,
        o = {
          active: a => {
            var i, m;
            return {
              type: "active",
              code: ((i = a.code) == null ? void 0 : i.toBoc()) ?? null,
              data: ((m = a.data) == null ? void 0 : m.toBoc()) ?? null
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
        args: n.map(nn)
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
      let m = null;
      typeof n.body == "string" ? m = j.comment(n.body) : n.body && (m = n.body), await s.send({
        to: e,
        value: i,
        bounce: a,
        sendMode: n.sendMode,
        init: o,
        body: m
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
      }) => i.map(m => j.loadTransaction(m.raw.asSlice())))
    }
  }
}

function nn(r) {
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
var we = {};
Object.defineProperty(we, "__esModule", {
  value: !0
});
we.defer = Gs = we.internalOnchainContentToCell = we.sleep = void 0;
const ce = j,
  on = Ar();

function an(r) {
  return new Promise(e => {
    setTimeout(() => e(), r)
  })
}
we.sleep = an;

function cn(r) {
  const e = ce.Dictionary.empty(ce.Dictionary.Keys.Buffer(32), ce.Dictionary.Values.Cell());
  for (const t in r) {
    if (r[t] === void 0) continue;
    const s = (0, ce.beginCell)();
    if (t === "image_data") {
      const n = ce.Dictionary.empty(ce.Dictionary.Keys.Uint(32), ce.Dictionary.Values.Cell()),
        o = ye.from(r[t], "base64");
      for (let a = 0; a * 127 < o.length; a++) n.set(a, (0, ce.beginCell)().storeBuffer(o.subarray(a * 127, (a + 1) * 127)).endCell());
      s.storeUint(1, 8).storeDict(n).endCell()
    } else s.storeUint(0, 8).storeStringTail(r[t].toString());
    e.set((0, on.sha256_sync)(t), s.endCell())
  }
  return (0, ce.beginCell)().storeUint(0, 8).storeDict(e).endCell()
}
var Gs = we.internalOnchainContentToCell = cn;

function pn(r) {
  return (...e) => r(...e)
}
we.defer = pn;

function I(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r
}
var ln = 0;

function ie(r) {
  return "__private_" + ln++ + "_" + r
}
var mn = function() {
    function r(t) {
      this.api = void 0, this.adapter = void 0;
      var s = new Us(t);
      this.api = new Ms(s), this.adapter = new rn(this.api)
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
    }, r
  }(),
  Y = function() {};
Y.deployGas = j.toNano(.02), Y.initialGas = j.toNano(.015), Y.buyGas = j.toNano(.08), Y.sellNotificationGas = j.toNano(.02), Y.sellGas = j.toNano(.05), Y.unlockGas = j.toNano(.05), Y.buyForward = j.toNano(.04);
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
    }, e.sendBuy = function(t, s, n, o, a, i, m) {
      a === void 0 && (a = null), i === void 0 && (i = null), m === void 0 && (m = 0);
      try {
        return Promise.resolve(t.internal(s, {
          value: n + Y.buyGas,
          body: j.beginCell().storeUint(Js.buy, 32).storeUint(m, 64).storeCoins(o).storeAddress(a).storeMaybeRef(i).endCell()
        })).then(function() {})
      } catch (d) {
        return Promise.reject(d)
      }
    }, r
  }(),
  rt = function() {};
rt.sell = 1948989144, rt.unlock = 4043133115;
var Mt = function() {
    function r(t, s) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = s
    }
    r.createFromAddress = function(t) {
      return new r(t)
    }, r.sellMessage = function(t, s, n, o) {
      return n === void 0 && (n = null), o === void 0 && (o = 0), j.beginCell().storeUint(rt.sell, 32).storeUint(o, 64).storeCoins(t).storeCoins(s).storeMaybeRef(n).endCell()
    }, r.unlockMessage = function(t) {
      return t === void 0 && (t = 0), j.beginCell().storeUint(rt.unlock, 32).storeUint(t, 64).endCell()
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
    }, e.sendSell = function(t, s, n, o, a, i, m) {
      i === void 0 && (i = null), m === void 0 && (m = 0);
      try {
        return Promise.resolve(t.internal(s, {
          sendMode: j.SendMode.PAY_GAS_SEPARATELY,
          body: r.sellMessage(o, a, i, m),
          value: n
        })).then(function() {})
      } catch (d) {
        return Promise.reject(d)
      }
    }, e.sendUnlock = function(t, s, n) {
      n === void 0 && (n = 0);
      try {
        return Promise.resolve(t.internal(s, {
          sendMode: j.SendMode.PAY_GAS_SEPARATELY,
          body: r.unlockMessage(n),
          value: Y.unlockGas
        })).then(function() {})
      } catch (o) {
        return Promise.reject(o)
      }
    }, r
  }(),
  Ws = 1000000000000000000n,
  ke = ie("curveA"),
  Ut = ie("sqrt"),
  Ne = ie("f"),
  pe = ie("fReverse"),
  Bt = ie("fromNano"),
  dn = function() {
    function r(t) {
      t === void 0 && (t = !1), Object.defineProperty(this, Bt, {
        value: fn
      }), Object.defineProperty(this, pe, {
        value: yn
      }), Object.defineProperty(this, Ne, {
        value: hn
      }), Object.defineProperty(this, Ut, {
        value: un
      }), this.thresholdTons = void 0, this.thresholdSupply = void 0, Object.defineProperty(this, ke, {
        writable: !0,
        value: void 0
      }), this.thresholdTons = t ? 2500000000n : 1833000000000n, this.thresholdSupply = t ? 800000000000000000n : 799999999998688507n, I(this, ke)[ke] = t ? 16000000000000n : 590892876676n
    }
    var e = r.prototype;
    return e.tonSupply = function(t) {
      return I(this, pe)[pe](t)
    }, e.calculateJettonAmount = function(t, s) {
      var n = I(this, pe)[pe](t);
      return I(this, Ne)[Ne](n + s) - I(this, Ne)[Ne](n)
    }, e.calculateTonAmount = function(t, s) {
      return I(this, pe)[pe](t) - I(this, pe)[pe](t - s)
    }, e.calculateBuyAmount = function(t, s, n) {
      var o = this.calculateJettonAmount(t, s * (10000n - n) / 10000n);
      return o + t > this.thresholdSupply ? this.thresholdSupply - t : o
    }, e.calculateSellAmount = function(t, s, n) {
      return this.calculateTonAmount(t, s) * (10000n - n) / 10000n
    }, e.calculatePrice = function(t) {
      var s = 1e9,
        n = this.calculateJettonAmount(t, BigInt(s));
      return s / Number(n)
    }, e.calculateMarketCap = function(t) {
      return this.calculatePrice(t) * I(this, Bt)[Bt](Ws)
    }, r
  }();

function un(r) {
  for (var e = r, t = e + 1n >> 1n; t < e;) t = (e = t) + r / e >> 1n;
  return e
}

function hn(r) {
  if (r == 0n) return 0n;
  var e = 10n ** 9n;
  return I(this, Ut)[Ut](r * e * e) * I(this, ke)[ke] / e
}

function yn(r) {
  if (r == 0n) return 0n;
  var e = 10n ** 9n;
  return r ** 2n * e / I(this, ke)[ke] ** 2n / e
}

function fn(r) {
  return Number(r) / 10 ** 9
}
var Dt, Ks = function() {};
Ks.deployJetton = 3637132459,
  function(r) {
    r[r.STONFI = 0] = "STONFI", r[r.DEDUST = 1] = "DEDUST"
  }(Dt || (Dt = {}));
var gs = function() {
    function r(t, s) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = s
    }
    r.createFromAddress = function(t) {
      return new r(t)
    };
    var e = r.prototype;
    return e.sendDeployJetton = function(t, s, n, o, a, i, m, d) {
      m === void 0 && (m = null), d === void 0 && (d = 0);
      try {
        return i === void 0 && (i = 0n), Promise.resolve(t.internal(s, {
          value: n,
          body: j.beginCell().storeUint(Ks.deployJetton, 32).storeUint(d, 64).storeUint(o, 1).storeRef(a).storeCoins(i).storeMaybeRef(m).endCell()
        })).then(function() {})
      } catch (_) {
        return Promise.reject(_)
      }
    }, e.getConfig = function(t) {
      try {
        return Promise.resolve(t.get("get_config", [])).then(function(s) {
          return {
            admin: s.stack.readAddress(),
            jettonAdmin: s.stack.readAddress(),
            feeRecipient: s.stack.readAddress(),
            deployFee: s.stack.readBigNumber(),
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
  gn = function(r) {
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
          network: I(t, Me)[Me] ? cs.TESTNET : cs.MAINNET,
          messages: [o]
        }
      })
    } catch (n) {
      return Promise.reject(n)
    }
  },
  Me = ie("testnet"),
  Q = ie("tokenomics"),
  le = ie("request"),
  be = ie("minterContractFromAddress"),
  Pt = ie("walletContractFromAddress"),
  _n = function() {
    function r(t, s, n) {
      s === void 0 && (s = !1), n === void 0 && (n = !1), Object.defineProperty(this, Pt, {
        value: vn
      }), Object.defineProperty(this, be, {
        value: bn
      }), Object.defineProperty(this, le, {
        value: gn
      }), Object.defineProperty(this, Me, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, Q, {
        writable: !0,
        value: void 0
      }), this.client = void 0, I(this, Me)[Me] = s, I(this, Q)[Q] = new dn(n), this.client = new mn({
        baseUrl: s ? "https://testnet.tonapi.io" : "https://tonapi.io",
        apiKey: t
      })
    }
    var e = r.prototype;
    return e.sendDeployJetton = function(t, s, n, o, a, i, m) {
      i === void 0 && (i = null), m === void 0 && (m = 0);
      try {
        var d = this.client.open(gs.createFromAddress(s));
        return Promise.resolve(d.getConfig()).then(function(_) {
          var A = _.deployFee + Y.deployGas + (a == 0n ? Y.initialGas : a + Y.buyGas),
            B = Gs(o);
          return Promise.resolve(d.sendDeployJetton(t, A, n, B, a, i, m)).then(function() {})
        })
      } catch (_) {
        return Promise.reject(_)
      }
    }, e.sendBuy = function(t, s, n, o, a, i) {
      a === void 0 && (a = null), i === void 0 && (i = 0);
      try {
        return Promise.resolve(I(this, be)[be](s).sendBuy(t, n, o, null, a, i)).then(function() {})
      } catch (m) {
        return Promise.reject(m)
      }
    }, e.sendSell = function(t, s, n, o, a, i) {
      a === void 0 && (a = null), i === void 0 && (i = 0);
      try {
        var m = Mt.createFromAddress(s),
          d = this.client.open(m);
        return Promise.resolve(d.sendSell(t, Y.sellGas, n, o, a, i)).then(function() {})
      } catch (_) {
        return Promise.reject(_)
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
      return I(this, Q)[Q].thresholdTons
    }, e.getTonSupply = function(t) {
      return I(this, Q)[Q].tonSupply(t)
    }, e.getMaxSupply = function() {
      return Ws
    }, e.getThresholdSupply = function() {
      return I(this, Q)[Q].thresholdSupply
    }, e.getPrice = function(t) {
      return I(this, Q)[Q].calculatePrice(t)
    }, e.getMarketCap = function(t) {
      return I(this, Q)[Q].calculateMarketCap(t)
    }, e.getBuyAmount = function(t, s, n) {
      return I(this, Q)[Q].calculateBuyAmount(t, s, n)
    }, e.getSellAmount = function(t, s, n) {
      return I(this, Q)[Q].calculateSellAmount(t, s, n)
    }, e.getWalletAddress = function(t, s) {
      try {
        return Promise.resolve(I(this, be)[be](t).getWalletAddress(s))
      } catch (n) {
        return Promise.reject(n)
      }
    }, e.getTotalSupply = function(t) {
      try {
        return Promise.resolve(I(this, be)[be](t).getTotalSupply())
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getUnlocked = function(t) {
      try {
        return Promise.resolve(I(this, Pt)[Pt](t).getUnlocked())
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getDeployJettonRequest = function(t, s, n, o, a, i) {
      a === void 0 && (a = null), i === void 0 && (i = 0);
      try {
        var m = this;
        return Promise.resolve(I(m, le)[le](function(d) {
          return m.sendDeployJetton(d, t, s, n, o, a, i)
        }))
      } catch (d) {
        return Promise.reject(d)
      }
    }, e.getBuyRequest = function(t, s, n, o, a) {
      o === void 0 && (o = null), a === void 0 && (a = 0);
      try {
        var i = this;
        return Promise.resolve(I(i, le)[le](function(m) {
          return i.sendBuy(m, t, s, n, o, a)
        }))
      } catch (m) {
        return Promise.reject(m)
      }
    }, e.getSellRequest = function(t, s, n, o, a) {
      o === void 0 && (o = null), a === void 0 && (a = 0);
      try {
        var i = this;
        return Promise.resolve(I(i, le)[le](function(m) {
          return i.sendSell(m, t, s, n, o, a)
        }))
      } catch (m) {
        return Promise.reject(m)
      }
    }, e.getUnlockRequest = function(t, s) {
      s === void 0 && (s = 0);
      try {
        var n = this;
        return Promise.resolve(I(n, le)[le](function(o) {
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

function bn(r) {
  var e = Ls.createFromAddress(r);
  return this.client.open(e)
}

function vn(r) {
  var e = Mt.createFromAddress(r);
  return this.client.open(e)
}
const Hs = () => {
    const {
      getAddress: r,
      tonConnectSender: e,
      createGetWaitForLaunchStatusUntilOk: t,
      createGetReviewStepInfo: s
    } = De(), {
      TON_API_TOKEN: n,
      getTransactionStatus: o
    } = Kt(), {
      getMinReceive: a,
      wrapWithCache: i,
      memepadApi: m
    } = ct(), d = new _n(n, !1, !0), _ = p => +String(p) / 1e4, A = {
      LAUNCH_STATUS_CHECK: 6e3,
      BUY_STATUS_CHECK: 6e3,
      SELL_STATUS_CHECK: 6e3,
      UNLOCK_STATUS_CHECK: 6e3
    }, B = {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: k(Y.buyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: k(Y.sellGas),
      MEMEPAD_JETTON_DEPLOY_NETWORK_FEE: k(Y.deployGas),
      MEMEPAD_JETTON_INITIAL_NETWORK_FEE: k(Y.initialGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: k(Y.unlockGas)
    }, P = {
      LAUNCH_FEE: new $(.0114),
      LAUNCH_BUY_FEE: new $(.012),
      BUY_FEE: new $(.0062),
      SELL_FEE: new $(.0044),
      UNLOCK_FEE: new $(.0037)
    }, N = {
      buyNetworkFee: B.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: B.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      deployNetworkFee: B.MEMEPAD_JETTON_DEPLOY_NETWORK_FEE,
      initialNetworkFee: B.MEMEPAD_JETTON_INITIAL_NETWORK_FEE,
      unlockNetworkFee: B.MEMEPAD_JETTON_UNLOCK_NETWORK_FEE,
      walletNetworkLaunchFee: P.LAUNCH_FEE,
      walletNetworkLaunchBuyFee: P.LAUNCH_BUY_FEE,
      walletNetworkBuyFee: P.BUY_FEE,
      walletNetworkSellFee: P.SELL_FEE,
      walletNetworkUnlockFee: P.UNLOCK_FEE
    }, w = ({
      hasShare: p
    }) => N.deployNetworkFee.plus(p ? 0 : N.initialNetworkFee), R = ({
      referrerToken: p
    }) => j.beginCell().storeUint(1675682413, 32).storeStringTail(p).endCell(), E = async p => {
      const l = await W(async () => await d.getTotalSupply(r(p)))();
      return S(l) ? x(k(l.data)) : l
    }, G = i(({
      masterAddress: p
    }) => `blumSdk:factoryConfig:${p.toString()}`, async ({
      masterAddress: p
    }) => {
      const l = await W(async () => await d.getFactoryConfig(r(p)))();
      return S(l) ? x(l.data) : l
    }), z = i(({
      masterAddress: p
    }) => `blumSdk:bclData:${p.toString()}`, async ({
      masterAddress: p
    }) => {
      const l = k(d.getThresholdSupply()),
        u = k(d.getMaxSupply()),
        h = u.minus(l),
        f = k(d.getThresholdTons()),
        g = await G({
          masterAddress: p
        });
      if (!S(g)) return g;
      const {
        buyFeeBasis: T
      } = g.data, q = f.div(new $(1).minus(_(T))).toDecimalPlaces(9, $.ROUND_UP), L = g.data, K = new $(0);
      return x({
        tokenForDexWithFees: q,
        tokenForDex: f,
        bclSupply: l,
        maxSupply: u,
        liqSupply: h,
        factoryConfig: L,
        aiAgentDeployFee: K
      })
    }), te = async ({
      jettonAddress: p,
      masterAddress: l
    }) => {
      const u = await z({
        masterAddress: l
      });
      if (!S(u)) return u;
      const {
        bclSupply: h,
        tokenForDex: f,
        liqSupply: g
      } = u.data, T = await E(p);
      if (!S(T)) return T;
      const q = T.data,
        L = new $(h).minus(q),
        K = k(d.getTonSupply(O(q))),
        H = K.div(f).times(100);
      return x({
        tokenForDex: f,
        tokenCollected: K,
        tokenCollectedPercent: H,
        bclSupply: h,
        liqSupply: g,
        totalSupply: q,
        availableSupply: L
      })
    }, se = async ({
      masterAddress: p,
      tons: l
    }) => {
      const u = O(new $(l)),
        h = await z({
          masterAddress: p
        });
      if (!S(h)) return h;
      const {
        tokenForDex: f,
        bclSupply: g,
        tokenForDexWithFees: T,
        maxSupply: q
      } = h.data, L = await G({
        masterAddress: p
      });
      if (!S(L)) return L;
      const {
        buyFeeBasis: K
      } = L.data, H = k(d.getBuyAmount(0n, u, K)), re = H, Ae = H, Pe = g.minus(re), Re = k(d.getTonSupply(O(re))), Ke = new $(d.getPrice(O(re))), Ie = new $(Ke).times(q), ar = Re.div(f).times(100), ir = H.div(g).times(100), cr = new $(l).minus(Re);
      return x({
        share: new $(l),
        tokenForDexWithFees: T,
        tokenForDex: f,
        tokenCollected: Re,
        availableSupply: Pe,
        maxSupply: q,
        tokenCollectedPercent: ar,
        jettonReceivePercent: ir,
        priceToken: Ke,
        marketCapToken: Ie,
        platformFee: cr,
        minReceive: Ae,
        bclData: h.data
      })
    }, J = i(({
      jettonAddress: p,
      userAddress: l
    }) => `blumSdk:jettonWalletAddress:${p.toString()}:${l.toString()}`, async ({
      jettonAddress: p,
      userAddress: l
    }) => await W(async () => await d.getJettonWalletAddress(r(p), r(l)))()), U = async ({
      masterAddress: p,
      form: l,
      tonConnectUI: u,
      referrerToken: h
    }) => {
      const f = Fs(l, it.STONFI),
        g = await m.saveMemepadJettonInfo(f);
      if (!S(g)) return g;
      const T = e(u),
        q = g.data.queryId,
        L = Dt.STONFI,
        K = {
          name: l.name,
          description: l.description,
          image: tt(l.iconFileKey),
          symbol: l.ticker,
          decimals: 9
        };
      f.socials.length && (K.social_links = JSON.stringify(f.socials.map(Pe => Pe.url))), f.bannerFileKey && (K.cover_image = tt(f.bannerFileKey));
      const H = h ? R({
          referrerToken: h
        }) : void 0,
        re = await W(async () => await d.sendDeployJetton(T, r(p), L, K, O(new $(l.share)), H, q))();
      if (!S(re)) return re;
      const Ae = (await T.getResult()).hash;
      return x({
        queryId: q,
        transactionHash: Ae
      })
    }, ee = t(o, A.LAUNCH_STATUS_CHECK), _e = async ({
      tons: p,
      jettonAddress: l,
      masterAddress: u
    }) => {
      const h = await E(l);
      if (!S(h)) return h;
      const f = h.data,
        g = await G({
          masterAddress: u
        });
      if (!S(g)) return g;
      const {
        buyFeeBasis: T
      } = g.data, q = k(d.getBuyAmount(O(f), O(p), T)), L = q, K = a(q), H = p.times(_(T));
      return x({
        maxReceive: L,
        minReceive: K,
        platformFee: H,
        additionalInfo: void 0
      })
    }, wt = async ({
      jettons: p,
      jettonAddress: l,
      masterAddress: u
    }) => {
      const h = await E(l);
      if (!S(h)) return h;
      const f = h.data,
        g = await G({
          masterAddress: u
        });
      if (!S(g)) return g;
      const {
        sellFeeBasis: T
      } = g.data, q = k(d.getSellAmount(O(f), O(p), T)), L = q, K = a(q), H = q.div(1 - _(T)).minus(q);
      return x({
        maxReceive: L,
        minReceive: K,
        platformFee: H,
        additionalInfo: void 0
      })
    }, kt = async ({
      tons: p,
      jettonAddress: l,
      tradeInfoParams: u,
      tonConnectUI: h,
      referrerToken: f
    }) => {
      const g = e(h),
        T = f ? R({
          referrerToken: f
        }) : void 0,
        q = await W(async () => await d.sendBuy(g, r(l), O(p), O(u.minReceive), T))();
      return S(q) ? x((await g.getResult()).hash) : q
    }, Tt = async ({
      jettons: p,
      jettonAddress: l,
      tradeInfoParams: u,
      userAddress: h,
      tonConnectUI: f,
      referrerToken: g
    }) => {
      const T = e(f),
        q = g ? R({
          referrerToken: g
        }) : void 0,
        L = await J({
          jettonAddress: l,
          userAddress: h
        });
      if (!S(L)) return L;
      const K = L.data,
        H = await W(async () => await d.sendSell(T, K, O(p), O(u.minReceive), q))();
      return S(H) ? x((await T.getResult()).hash) : H
    }, At = () => Ee(({
      transactionHash: p
    }) => o({
      transactionHash: p
    }), () => {}, A.BUY_STATUS_CHECK), St = () => Ee(({
      transactionHash: p
    }) => o({
      transactionHash: p
    }), () => {}, A.SELL_STATUS_CHECK), jt = async ({
      jettonAddress: p,
      userAddress: l
    }) => {
      const u = await J({
        jettonAddress: p,
        userAddress: l
      });
      if (!S(u)) return u;
      const h = u.data,
        f = await W(async () => await d.getUnlocked(h))();
      if (!S(f)) return f;
      const g = !f.data;
      return x(g)
    }, qt = async ({
      jettonAddress: p,
      userAddress: l,
      tonConnectUI: u
    }) => {
      const h = e(u),
        f = await J({
          jettonAddress: p,
          userAddress: l
        });
      if (!S(f)) return f;
      const g = f.data,
        T = await W(async () => await d.sendUnlock(h, g))();
      return S(T) ? x((await h.getResult()).hash) : T
    }, We = ({
      transactionHash: p
    }) => o({
      transactionHash: p
    }), rs = () => Ee(We, () => {}, A.UNLOCK_STATUS_CHECK), b = s({
      getFees: ({
        share: p,
        overview: l
      }) => {
        const u = !new $(p).isZero(),
          {
            buyNetworkFee: h,
            walletNetworkLaunchBuyFee: f,
            walletNetworkLaunchFee: g
          } = N,
          T = w({
            hasShare: u
          }),
          q = k(l.bclData.factoryConfig.deployFee);
        return {
          buyNetworkFee: h,
          launchNetworkFee: T,
          launchPlatformFee: q,
          walletNetworkLaunchFee: g,
          walletNetworkLaunchBuyFee: f
        }
      }
    });
    return {
      getJettonTotalSupply: E,
      getFactoryConfig: G,
      getBclData: z,
      createJetton: U,
      getUnlockEnabled: jt,
      unlockWallet: qt,
      getJettonOverview: se,
      getJettonBclData: te,
      getBuyInfo: _e,
      getSellInfo: wt,
      buyJetton: kt,
      sellJetton: Tt,
      getWaitForBuyStatus: At,
      getWaitForSellStatus: St,
      getUnlockStatus: We,
      getWaitForUnlockStatus: rs,
      getWaitForCreateStatus: ee,
      getMaxShareAmount: ({
        tokenBalance: p,
        overview: l
      }) => {
        const {
          buyNetworkFee: u,
          walletNetworkLaunchBuyFee: h
        } = N, f = w({
          hasShare: !0
        }), g = k(l.bclData.factoryConfig.deployFee), T = p.value.minus(f.plus(g).plus(h).plus(u)), q = l.bclData.tokenForDexWithFees;
        return q.lt(T) ? q : T.gte(0) ? T : new $(0)
      },
      getMaxBuyAmount: ({
        tokenBalance: p
      }) => {
        const {
          buyNetworkFee: l,
          walletNetworkBuyFee: u
        } = N;
        return p.value.minus(l).minus(u)
      },
      getReviewInfo: b,
      fees: N
    }
  },
  wn = ({
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
    } = Hs(), m = r.masterAddresses[it.STONFI], d = Ue().tonConnectUI.value;
    return {
      getJettonOverview: ({
        tons: _
      }) => s({
        tons: _,
        masterAddress: m
      }),
      createJetton: ({
        form: _
      }) => n({
        form: _,
        masterAddress: m,
        tonConnectUI: d,
        referrerToken: t
      }),
      getWaitForCreateStatus: () => o(),
      getReviewInfo: ({
        overview: _,
        share: A,
        jettonTicker: B,
        withAiAgent: P
      }) => i({
        overview: _,
        share: A,
        jettonTicker: B,
        tonBalance: e,
        withAiAgent: P
      }),
      getMaxShareAmount: ({
        tokenBalance: _,
        overview: A
      }) => a({
        tokenBalance: _,
        overview: A
      })
    }
  },
  kn = ({
    jetton: r,
    tonBalance: e,
    jettonBalance: t,
    referrerToken: s
  }) => {
    const {
      mustGetUserWalletAddress: n,
      getTradeStateControls: o,
      createGetUnlockInfo: a
    } = De(), {
      getUserJettonBalance: i
    } = Kt(), {
      slippage: m
    } = ct(), {
      getUnlockEnabled: d,
      getWaitForUnlockStatus: _,
      unlockWallet: A,
      buyJetton: B,
      sellJetton: P,
      getWaitForBuyStatus: N,
      getWaitForSellStatus: w,
      getBuyInfo: R,
      getSellInfo: E,
      getMaxBuyAmount: V,
      fees: G
    } = Hs(), F = r.address, z = r.masterContractAddress, te = Ue().tonConnectUI.value, se = o(), oe = a({
      getFees: () => G
    });
    return {
      getUserJettonBalance: () => i({
        jettonAddress: F,
        userAddress: n()
      }),
      getUnlockEnabled: () => d({
        jettonAddress: F,
        userAddress: n()
      }),
      getWaitForUnlockStatus: () => _(),
      unlockWallet: () => A({
        jettonAddress: F,
        userAddress: n(),
        tonConnectUI: te
      }),
      getUnlockInfo: () => oe({
        tonBalance: e,
        jettonBalance: t
      }),
      getSlippage: () => m.value,
      updateSlippage: J => m.value = J,
      buyJetton: ({
        tons: J,
        tradeInfoParams: U
      }) => B({
        tons: J,
        jettonAddress: F,
        tradeInfoParams: U,
        tonConnectUI: te,
        referrerToken: s
      }),
      sellJetton: ({
        jettons: J,
        tradeInfoParams: U
      }) => P({
        jettons: J,
        jettonAddress: F,
        userAddress: n(),
        tradeInfoParams: U,
        tonConnectUI: te,
        referrerToken: s
      }),
      getWaitForBuyStatus: () => N(),
      getWaitForSellStatus: () => w(),
      tradeStateControls: {
        getEmptyState: ({
          operation: J
        }) => se.getEmptyState({
          tonBalance: e,
          jettonBalance: t,
          operation: J
        }),
        getImmediateState: ({
          operation: J,
          amount: U
        }) => se.getImmediateState({
          amount: U,
          tonBalance: e,
          jettonBalance: t,
          operation: J,
          jettonTicker: r.ticker,
          fees: G
        }),
        getState: ({
          operation: J,
          amount: U
        }) => se.getState({
          tonBalance: e,
          jettonBalance: t,
          operation: J,
          amount: U,
          jettonTicker: r.ticker,
          fees: G,
          getBuyInfo: ({
            tons: ee
          }) => R({
            tons: ee,
            jettonAddress: F,
            masterAddress: z
          }),
          getSellInfo: ({
            jettons: ee
          }) => E({
            jettons: ee,
            jettonAddress: F,
            masterAddress: z
          })
        })
      },
      getMaxBuyAmount: V
    }
  };
var ne = {},
  ht = {},
  yt = {},
  ft = {};
Object.defineProperty(ft, "__esModule", {
  value: !0
});
ft.normalizeCoin = Tn;
ft.normalizeCoinEvent = An;
const ve = j;

function Tn(r) {
  return {
    id: r.id,
    address: ve.Address.parse(r.address),
    metadata: r.metadata,
    totalSupply: BigInt(r.totalSupply),
    bclSupply: BigInt(r.bclSupply),
    liqSupply: BigInt(r.liqSupply),
    lastTradeDate: r.lastTradeDate,
    authorAddress: r.authorAddress === "" ? null : ve.Address.parse(r.authorAddress),
    tradingEnabled: r.tradingEnabled,
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral,
    createdAt: r.createdAt,
    tradingCloseFee: BigInt(r.tradingCloseFee),
    routerAddress: ve.Address.parse(r.routerAddress)
  }
}

function An(r) {
  if (r.type === "buy") return {
    type: "buy",
    trader: r.trader === "" ? null : ve.Address.parse(r.trader),
    tonValue: BigInt(r.tonValue),
    supplyDelta: BigInt(r.supplyDelta),
    newSupply: BigInt(r.newSupply),
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral
  };
  if (r.type === "sell") return {
    type: "sell",
    trader: r.trader === "" ? null : ve.Address.parse(r.trader),
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
    authorAddress: r.authorAddress === "" ? null : ve.Address.parse(r.authorAddress),
    tradingEnabled: r.tradingEnabled,
    tonLiqCollected: BigInt(r.tonLiqCollected),
    referral: r.referral,
    createdAt: r.createdAt,
    tradingCloseFee: BigInt(r.tradingCloseFee),
    routerAddress: ve.Address.parse(r.routerAddress)
  };
  throw new Error("Unknown BCL event: " + JSON.stringify(r))
}
var gt = {};
const Sn = Sr(jr);
Object.defineProperty(gt, "__esModule", {
  value: !0
});
gt.OfetchHttpProvider = void 0;
const _s = Sn;
class jn {
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
gt.OfetchHttpProvider = jn;
Object.defineProperty(yt, "__esModule", {
  value: !0
});
yt.BclClient = void 0;
const bs = j,
  Ve = ft,
  qn = gt;
class En {
  constructor(e) {
    this.fetch = async (t, s) => await this.httpProvider.get(this.endpoint + t, {
      query: s == null ? void 0 : s.query
    }), this.fetchCoins = async t => {
      const s = await this.fetch("/getCoins", {
        query: t ?? {}
      });
      return {
        items: s.items.map(Ve.normalizeCoin),
        cursor: s.cursor
      }
    }, this.fetchCoin = async t => {
      let s = await this.fetch("/getCoin/" + t.toString({
        urlSafe: !0
      }));
      return (0, Ve.normalizeCoin)(s)
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
          event: (0, Ve.normalizeCoinEvent)(o.event),
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
          event: (0, Ve.normalizeCoinEvent)(n.event),
          coinAddress: bs.Address.parse(n.coinAddress)
        })),
        cursor: s.cursor
      }
    }, this.endpoint = e.endpoint, this.httpProvider = e.httpProvider ?? new qn.OfetchHttpProvider
  }
}
yt.BclClient = En;
var Ce = {},
  Te = {};
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.Constants = void 0;
const Ye = j;
Te.Constants = {
  CoinDeploymentGas: (0, Ye.toNano)("0.05"),
  CoinBuyGas: (0, Ye.toNano)("0.05"),
  CoinSellGas: (0, Ye.toNano)("0.06"),
  WalletUnlockGas: (0, Ye.toNano)("0.05")
};
var ge = {};
Object.defineProperty(ge, "__esModule", {
  value: !0
});
ge.crc32 = zs;
ge.crc32str = Bn;
const $n = -306674912;
let nt;

function Cn() {
  nt = new Int32Array(256);
  for (let r = 0; r < 256; r++) {
    let e = r;
    for (let t = 8; t > 0; --t) e = e & 1 ? e >>> 1 ^ $n : e >>> 1;
    nt[r] = e
  }
}

function zs(r) {
  let e = 4294967295;
  nt === void 0 && Cn();
  for (let t = 0; t < r.length; ++t) e = nt[(e ^ r[t]) & 255] ^ e >>> 8;
  return (e ^ -1) >>> 0
}

function Bn(r) {
  return zs(ye.from(r))
}
var Ge = {};
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.BclWallet = void 0;
const Qe = j,
  vs = Te,
  ws = ge;
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
      value: vs.Constants.CoinSellGas,
      sendMode: Qe.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, Qe.beginCell)().storeUint((0, ws.crc32str)("op::sell"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.amount).storeCoins(s.minReceive).storeMaybeRef(s.referral).endCell()
    })
  }
  async sendUnlockWallet(e, t, s) {
    await e.internal(t, {
      value: vs.Constants.WalletUnlockGas,
      sendMode: Qe.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, Qe.beginCell)().storeUint((0, ws.crc32str)("op::unlock_wallet"), 32).storeUint(s.queryId ?? 0, 64).endCell()
    })
  }
  async getTransfersEnabled(e) {
    return (await e.get("get_transfers_enabled", [])).stack.readBoolean()
  }
}
Ge.BclWallet = Yt;
Object.defineProperty(Ce, "__esModule", {
  value: !0
});
Ce.BclJetton = void 0;
Ce.parseBclEvent = In;
const Rt = j,
  Pn = Te,
  et = ge,
  Rn = Ge;

function In(r) {
  let e = r.beginParse(),
    t = e.loadUint(32);
  if (t === (0, et.crc32str)("send_liq_log")) return {
    type: "send_liq",
    tonLiq: e.loadCoins(),
    jettonLiq: e.loadCoins()
  };
  if (t === (0, et.crc32str)("sell_log")) return {
    type: "sell",
    trader: e.loadAddress(),
    tonValue: e.loadCoins(),
    supplyDelta: e.loadCoins(),
    newSupply: e.loadCoins(),
    tonLiqCollected: e.loadCoins(),
    referral: e.loadMaybeRef()
  };
  if (t === (0, et.crc32str)("buy_log")) return {
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
    let n = (0, Rt.beginCell)().storeUint((0, et.crc32str)("op::buy"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.minReceive).storeMaybeRef(s.referral);
    s.buyerAddress && n.storeAddress(s.buyerAddress), await e.internal(t, {
      value: s.tons + Pn.Constants.CoinBuyGas,
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
    return e.open(Rn.BclWallet.createFromAddress(s))
  }
}
Ce.BclJetton = Qt;
var Je = {},
  Be = {},
  _t = {};
Object.defineProperty(_t, "__esModule", {
  value: !0
});
_t.sha256ToBigint = void 0;
const Nn = qr(),
  Fn = r => BigInt("0x" + (0, Nn.createHash)("sha256").update(r).digest().toString("hex"));
_t.sha256ToBigint = Fn;
Object.defineProperty(Be, "__esModule", {
  value: !0
});
Be.storeSnakeContentData = Qs;
Be.loadSnakeContentData = Xs;
Be.storeTokenOnchainContent = On;
Be.loadTokenOnchainContent = Mn;
const ot = Os,
  xn = _t,
  Vs = 0,
  Ys = 0;

function Qs(r) {
  return e => e.storeUint(Ys, 8).storeStringTail(r)
}

function Xs(r) {
  if (r.loadUint(8) !== Ys) throw new Error("Not snake ContentData");
  return r.loadStringTail()
}
const Zs = {
  serialize: (r, e) => {
    e.storeRef((0, ot.beginCell)().store(Qs(r)).endCell())
  },
  parse: r => Xs(r.loadRef().beginParse())
};

function On(r) {
  return e => {
    const t = ot.Dictionary.empty(ot.Dictionary.Keys.BigUint(256), Zs);
    for (const s in r) r[s] && t.set((0, xn.sha256ToBigint)(s), r[s]);
    return e.storeUint(Vs, 8).storeDict(t)
  }
}

function Mn(r) {
  if (r.loadUint(8) !== Vs) throw new Error("Not on-chain content");
  return r.loadDict(ot.Dictionary.Keys.BigUint(256), Zs)
}
Object.defineProperty(Je, "__esModule", {
  value: !0
});
Je.BclMaster = void 0;
const je = j,
  ks = Te,
  Ts = ge,
  Un = Be;
class Xt {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Xt(e)
  }
  async sendDeployCoin(e, t, s, n) {
    let o = (0, je.beginCell)().store((0, Un.storeTokenOnchainContent)({
        name: s.name,
        description: s.description,
        image: s.imageUrl,
        symbol: s.symbol,
        decimals: "9",
        social_links: JSON.stringify(s.socialLinks),
        ...s.extraMetadata
      })).endCell(),
      a = (0, je.beginCell)().storeUint((0, Ts.crc32str)("op::deploy_coin"), 32).storeUint(s.queryId ?? 0, 64).storeRef(o).storeAddress(s.authorAddress).storeRef(s.referral ?? (0, je.beginCell)().endCell()),
      i = (0, je.beginCell)().storeUint(3547469196, 32).storeUint(s.queryId ?? 0, 64).endCell();
    if (n != null && n.firstBuy) {
      let _ = (0, je.beginCell)().storeUint((0, Ts.crc32str)("op::buy"), 32).storeUint(n.firstBuy.queryId ?? 0, 64).storeCoins(n.firstBuy.minReceive).storeMaybeRef(n.firstBuy.referral);
      n.firstBuy.buyerAddress && _.storeAddress(n.firstBuy.buyerAddress), i = _.endCell()
    }
    a.storeMaybeRef(i);
    let m;
    n != null && n.forceDeploymentFee ? m = n.forceDeploymentFee : m = (await this.getMasterData(e)).deploymentFee;
    let d = m + ks.Constants.CoinDeploymentGas;
    n != null && n.firstBuy && (d += ks.Constants.CoinBuyGas + n.firstBuy.tons), await e.internal(t, {
      value: d,
      sendMode: je.SendMode.PAY_GAS_SEPARATELY,
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
Je.BclMaster = Xt;
Object.defineProperty(ht, "__esModule", {
  value: !0
});
ht.BclSDK = void 0;
const Dn = yt,
  Gn = Ce,
  It = Je;
class Zt {
  constructor(e) {
    this.apiProvider = e.apiProvider, this.api = new Dn.BclClient(e.clientOptions), this.masterAddress = e.masterAddress
  }
  openCoin(e) {
    return this.apiProvider.open(Gn.BclJetton.createFromAddress(e))
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
ht.BclSDK = Zt;
var bt = {},
  M = {};
Object.defineProperty(M, "__esModule", {
  value: !0
});
var er = M.Api = tr = M.HttpClient = M.ContentType = M.PoolImplementationType = M.TrustType = M.JettonVerificationType = M.BouncePhaseType = M.ComputeSkipReason = M.AccStatusChange = M.TransactionType = M.AccountStatus = void 0,
  As;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(As || (M.AccountStatus = As = {}));
var Ss;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(Ss || (M.TransactionType = Ss = {}));
var js;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(js || (M.AccStatusChange = js = {}));
var qs;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(qs || (M.ComputeSkipReason = qs = {}));
var Es;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(Es || (M.BouncePhaseType = Es = {}));
var $s;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})($s || (M.JettonVerificationType = $s = {}));
var Cs;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(Cs || (M.TrustType = Cs = {}));
var Bs;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(Bs || (M.PoolImplementationType = Bs = {}));
var he;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(he || (M.ContentType = he = {}));
class Jn {
  constructor(e = {}) {
    y(this, "baseUrl", "https://tonapi.io");
    y(this, "securityData", null);
    y(this, "securityWorker");
    y(this, "abortControllers", new Map);
    y(this, "customFetch", (...e) => fetch(...e));
    y(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    y(this, "setSecurityData", e => {
      this.securityData = e
    });
    y(this, "contentFormatters", {
      [he.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
      [he.Text]: e => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
      [he.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const n = e[s];
        return t.append(s, n instanceof Blob ? n : typeof n == "object" && n !== null ? JSON.stringify(n) : `${n}`), t
      }, new FormData),
      [he.UrlEncoded]: e => this.toQueryString(e)
    });
    y(this, "createAbortSignal", e => {
      if (this.abortControllers.has(e)) {
        const s = this.abortControllers.get(e);
        return s ? s.signal : void 0
      }
      const t = new AbortController;
      return this.abortControllers.set(e, t), t.signal
    });
    y(this, "abortRequest", e => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e))
    });
    y(this, "request", async ({
      body: e,
      secure: t,
      path: s,
      type: n,
      query: o,
      format: a,
      baseUrl: i,
      cancelToken: m,
      ...d
    }) => {
      const _ = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        A = this.mergeRequestParams(d, _),
        B = o && this.toQueryString(o),
        P = this.contentFormatters[n || he.Json],
        N = a || A.format;
      return this.customFetch(`${i||this.baseUrl||""}${s}${B?`?${B}`:""}`, {
        ...A,
        headers: {
          ...A.headers || {},
          ...n && n !== he.FormData ? {
            "Content-Type": n
          } : {}
        },
        signal: (m ? this.createAbortSignal(m) : A.signal) || null,
        body: typeof e > "u" || e === null ? null : P(e)
      }).then(async w => {
        const R = w.clone();
        R.data = null, R.error = null;
        const E = N ? await w[N]().then(V => (R.ok ? R.data = V : R.error = V, R)).catch(V => (R.error = V, R)) : R;
        if (m && this.abortControllers.delete(m), !w.ok) throw E;
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
var tr = M.HttpClient = Jn;
class Ln {
  constructor(e) {
    y(this, "http");
    y(this, "utilities", {
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
    y(this, "blockchain", {
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
    y(this, "accounts", {
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
    y(this, "nft", {
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
    y(this, "dns", {
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
    y(this, "traces", {
      getTrace: (e, t = {}) => this.http.request({
        path: `/v2/traces/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    y(this, "events", {
      getEvent: (e, t = {}) => this.http.request({
        path: `/v2/events/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    y(this, "inscriptions", {
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
    y(this, "jettons", {
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
    y(this, "extraCurrency", {
      getExtraCurrencyInfo: (e, t = {}) => this.http.request({
        path: `/v2/extra-currency/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    y(this, "staking", {
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
    y(this, "storage", {
      getStorageProviders: (e = {}) => this.http.request({
        path: "/v2/storage/providers",
        method: "GET",
        format: "json",
        ...e
      })
    });
    y(this, "rates", {
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
    y(this, "connect", {
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
    y(this, "wallet", {
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
    y(this, "gasless", {
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
    y(this, "liteServer", {
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
    y(this, "multisig", {
      getMultisigAccount: (e, t = {}) => this.http.request({
        path: `/v2/multisig/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    y(this, "emulation", {
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
er = M.Api = Ln;
var Le = {};
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.runGetMethod = Wn;
Le.TvmStackRecordToTupleItem = es;
Le.TupleItemToTonapiString = sr;
const Gt = j;
async function Wn(r, e, t, s) {
  const n = await r.blockchain.execGetMethodForBlockchainAccount(e.toRawString(), t, {
    args: s == null ? void 0 : s.map(sr)
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
          cell: Gt.Cell.fromBase64(ye.from(r.cell, "hex").toString("base64"))
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
Object.defineProperty(bt, "__esModule", {
  value: !0
});
bt.simpleTonapiProvider = Kn;
bt.createProvider = ts;
const Xe = M,
  Fe = j,
  Ps = Le;

function Kn(r) {
  return {
    open(e) {
      return (0, Fe.openContract)(e, t => ts(r, t))
    }
  }
}

function ts(r, e) {
  return {
    async getState() {
      const t = await r.blockchain.getBlockchainRawAccount(e.address.toRawString());
      let s;
      if (t.status === Xe.AccountStatus.Nonexist || t.status === Xe.AccountStatus.Uninit) s = {
        type: "uninit"
      };
      else if (t.status === Xe.AccountStatus.Active) s = {
        type: "active",
        code: t.code ? ye.from(t.code, "hex") : null,
        data: t.data ? ye.from(t.data, "hex") : null
      };
      else if (t.status === Xe.AccountStatus.Frozen) s = {
        type: "frozen",
        stateHash: ye.from(t.frozen_hash, "hex")
      };
      else throw new Error("Unknown state");
      return {
        balance: BigInt(t.balance),
        last: t.last_transaction_hash ? {
          lt: BigInt(t.last_transaction_lt),
          hash: ye.from(t.last_transaction_hash, "hex")
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
        stack: new Fe.TupleReader(n.stack.map(Ps.TvmStackRecordToTupleItem))
      }
    },
    async external(t) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    },
    async internal(t, s) {
      let o = !0;
      s.bounce !== null && s.bounce !== void 0 && (o = s.bounce);
      let a;
      typeof s.value == "string" ? a = (0, Fe.toNano)(s.value) : a = s.value;
      let i = null;
      typeof s.body == "string" ? i = (0, Fe.comment)(s.body) : s.body && (i = s.body), await t.send({
        to: e.address,
        value: a,
        bounce: o,
        sendMode: s.sendMode,
        init: null,
        body: i
      })
    },
    open(t) {
      return (0, Fe.openContract)(t, s => ts(r, s))
    },
    async getTransactions(t, s, n, o) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    }
  }
}
var ss = {},
  $e = {};
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.delay = $e.unixtime = void 0;
const Hn = () => Math.floor(Date.now() / 1e3);
$e.unixtime = Hn;
const zn = r => new Promise(e => {
  setTimeout(() => e(), r)
});
$e.delay = zn;
Object.defineProperty(ss, "__esModule", {
  value: !0
});
ss.tonConnectSender = Yn;
const Ze = j,
  Vn = $e;

function Yn(r) {
  let e;
  const t = [];
  return {
    get address() {
      var n;
      const s = (n = r.account) == null ? void 0 : n.address;
      return s ? Ze.Address.parse(s) : void 0
    },
    async send(s) {
      var B;
      const n = (0, Vn.unixtime)() + 600,
        o = s.to.toString({
          urlSafe: !0,
          bounceable: !0
        }),
        a = (B = this.address) == null ? void 0 : B.toRawString(),
        i = s.value.toString();
      let m;
      s.init && (m = (0, Ze.beginCell)().store((0, Ze.storeStateInit)(s.init)).endCell().toBoc().toString("base64"));
      let d;
      s.body && (d = s.body.toBoc().toString("base64"));
      const _ = await r.sendTransaction({
          validUntil: n,
          from: a,
          messages: [{
            address: o,
            amount: i,
            stateInit: m,
            payload: d
          }]
        }),
        A = Ze.Cell.fromBase64(_.boc);
      e = {
        msg: A,
        hash: A.hash().toString("hex")
      }, t.forEach(P => P(e))
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
var vt = {};
Object.defineProperty(vt, "__esModule", {
  value: !0
});
vt.packReferralConfig = Xn;
vt.unpackReferralConfig = Zn;
const Qn = Os,
  nr = ge;

function Xn(r) {
  let e = (0, Qn.beginCell)().storeUint((0, nr.crc32str)("ref_v1"), 32).storeAddress(r.partner);
  if (r.platformTag && e.storeAddress(r.platformTag), r.extraTag) {
    if (!r.platformTag) throw new Error("extraTag should only be set if platformTag is present");
    e.storeAddress(r.extraTag)
  }
  return e.endCell()
}

function Zn(r) {
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
  var e = qe && qe.__createBinding || (Object.create ? function(o, a, i, m) {
      m === void 0 && (m = i);
      var d = Object.getOwnPropertyDescriptor(a, i);
      (!d || ("get" in d ? !a.__esModule : d.writable || d.configurable)) && (d = {
        enumerable: !0,
        get: function() {
          return a[i]
        }
      }), Object.defineProperty(o, m, d)
    } : function(o, a, i, m) {
      m === void 0 && (m = i), o[m] = a[i]
    }),
    t = qe && qe.__exportStar || function(o, a) {
      for (var i in o) i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && e(a, o, i)
    };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.crc32 = r.crc32str = r.tonConnectSender = void 0, t(ht, r), t(bt, r);
  var s = ss;
  Object.defineProperty(r, "tonConnectSender", {
    enumerable: !0,
    get: function() {
      return s.tonConnectSender
    }
  });
  var n = ge;
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
  }), t(rr, r), t(Je, r), t(Ce, r), t(Ge, r), t(Te, r), t(vt, r)
})(ne);
const or = () => {
    const {
      getAddress: r,
      tonConnectSender: e,
      createGetWaitForLaunchStatusUntilOk: t,
      createGetReviewStepInfo: s
    } = De(), {
      TON_API_TOKEN: n,
      getTransactionStatus: o
    } = Kt(), {
      getMinReceive: a,
      memepadApi: i,
      wrapWithCache: m
    } = ct(), d = new er(new tr({
      baseUrl: "https://tonapi.io",
      baseApiParams: {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${n}`
        }
      }
    })), _ = {
      LAUNCH_STATUS_CHECK: 18e3,
      BUY_STATUS_CHECK: 18e3,
      SELL_STATUS_CHECK: 18e3,
      UNLOCK_STATUS_CHECK: 18e3
    }, A = {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: k(ne.Constants.CoinBuyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: k(ne.Constants.CoinSellGas),
      MEMEPAD_JETTON_LAUNCH_NETWORK_FEE: k(ne.Constants.CoinDeploymentGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: k(ne.Constants.WalletUnlockGas)
    }, B = {
      LAUNCH_FEE: new $(.0114),
      LAUNCH_BUY_FEE: new $(.012),
      BUY_FEE: new $(.0062),
      SELL_FEE: new $(.0044),
      UNLOCK_FEE: new $(.0037)
    }, P = {
      buyNetworkFee: A.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: A.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      launchNetworkFee: A.MEMEPAD_JETTON_LAUNCH_NETWORK_FEE,
      unlockNetworkFee: A.MEMEPAD_JETTON_UNLOCK_NETWORK_FEE,
      walletNetworkLaunchFee: B.LAUNCH_FEE,
      walletNetworkLaunchBuyFee: B.LAUNCH_BUY_FEE,
      walletNetworkBuyFee: B.BUY_FEE,
      walletNetworkSellFee: B.SELL_FEE,
      walletNetworkUnlockFee: B.UNLOCK_FEE
    }, N = b => {
      const v = `tonFunSdk:${b.toString()}`,
        C = $r(v, () => new Map),
        p = C.value.get(v);
      if (p) return p;
      const l = ne.BclSDK.create({
        apiProvider: ne.simpleTonapiProvider(d),
        clientOptions: {
          endpoint: ""
        },
        masterAddress: r(b)
      });
      return C.value.set(v, l), l
    }, w = b => new $(1).minus(k(b.fees)).div(k(b.coins)), E = m(({
      masterAddress: b
    }) => `tonFunSdk:bclData:${b.toString()}`, async ({
      masterAddress: b
    }) => {
      const v = await W(async () => await N(b).getMasterData())();
      if (!S(v)) return Er(v);
      const C = k(v.data.fullPriceTon),
        p = k(v.data.fullPriceTon).minus(k(v.data.fullPriceTonFees)),
        l = k(v.data.bclSupply),
        u = k(v.data.liqSupply),
        h = l.plus(u),
        f = new $(0);
      return x({
        tokenForDexWithFees: C,
        tokenForDex: p,
        bclSupply: l,
        liqSupply: u,
        maxSupply: h,
        launchPlatformFee: k(v.data.deploymentFee),
        aiAgentDeployFee: f
      })
    }), G = m(({
      tons: b,
      masterAddress: v
    }) => `tonFunSdk:firstCoinsForTons:${v.toString()}:${b.toString()}`, async ({
      tons: b,
      masterAddress: v
    }) => await W(async () => await N(v).getFirstCoinsForTons(O(new $(b))))()), z = m(({
      tons: b,
      masterAddress: v
    }) => `tonFunSdk:jettonOverview:${v.toString()}:${b.toString()}`, async ({
      tons: b,
      masterAddress: v
    }) => {
      const C = new $(b),
        p = await E({
          masterAddress: v
        });
      if (!S(p)) return p;
      const {
        tokenForDex: l,
        tokenForDexWithFees: u,
        bclSupply: h,
        maxSupply: f
      } = p.data, g = await (async () => new $(C).isZero() ? x({
        fees: O(new $(0)),
        coins: O(new $(0))
      }) : await G({
        tons: b,
        masterAddress: v
      }))();
      if (!S(g)) return g;
      const T = g.data,
        q = await (async () => {
          const Ie = await G({
            masterAddress: v,
            tons: 1
          });
          return S(Ie) ? x(w(Ie.data)) : Ie
        })();
      if (!S(q)) return q;
      const L = q.data,
        K = L.mul(f),
        H = new $(k(T.coins)),
        re = new $(k(T.fees)),
        Ae = new $(C).minus(re),
        Pe = Ae.div(l).times(100),
        Re = H.div(h).times(100),
        Ke = new $(h).sub(H);
      return x({
        share: C,
        tokenForDexWithFees: u,
        tokenForDex: l,
        tokenCollected: Ae,
        tokenCollectedPercent: Pe,
        jettonReceivePercent: Re,
        priceToken: L,
        marketCapToken: K,
        availableSupply: Ke,
        maxSupply: f,
        platformFee: re,
        minReceive: H,
        bclData: p.data
      })
    }), te = async ({
      form: b,
      userAddress: v,
      masterAddress: C,
      tonConnectUI: p
    }) => {
      const l = Fs(b, it.STONFI_TON_FUN),
        u = await i.saveMemepadJettonInfo(l);
      if (!S(u)) return u;
      const h = new $(b.share),
        f = b.overview.minReceive,
        g = {
          name: l.name,
          description: l.description,
          imageUrl: tt(l.iconFileKey),
          symbol: l.ticker,
          share: O(h),
          referral: u.data.referral,
          partnerAddress: u.data.partnerAddress,
          queryId: u.data.queryId,
          minReceive: O(f)
        },
        T = {};
      l.socials.length && (T.social_links = JSON.stringify(l.socials.map(re => re.url))), l.bannerFileKey && (T.cover_image = tt(l.bannerFileKey));
      const q = {
          authorAddress: r(v),
          name: g.name,
          description: g.description,
          imageUrl: g.imageUrl,
          symbol: g.symbol,
          referral: ne.packReferralConfig({
            partner: r(g.partnerAddress),
            platformTag: r(g.referral)
          }),
          queryId: j.toNano(g.queryId),
          extraMetadata: T
        },
        L = {
          firstBuy: h.isZero() ? void 0 : {
            tons: g.share,
            minReceive: g.minReceive,
            referral: ne.packReferralConfig({
              partner: r(g.partnerAddress)
            }),
            buyerAddress: r(v)
          }
        },
        K = e(p),
        H = await W(async () => await N(C).deployCoin(K, q, L))();
      return S(H) ? x({
        queryId: u.data.queryId,
        transactionHash: (await K.getResult()).hash
      }) : H
    }, se = () => t(o, _.LAUNCH_STATUS_CHECK), oe = async ({
      jettonAddress: b,
      masterAddress: v
    }) => {
      const C = await W(async () => await N(v).openCoin(r(b)))();
      if (!S(C)) return C;
      const p = await W(async () => await C.data.getBclData())();
      if (!S(p)) return p;
      const l = k(p.data.totalSupply),
        u = k(p.data.fullPriceTon).minus(k(p.data.fullPriceTonFees)),
        h = k(p.data.tonLiqCollected),
        f = h.div(u).times(100),
        g = k(p.data.bclSupply),
        T = k(p.data.liqSupply),
        q = g.minus(l);
      return x({
        tokenForDex: u,
        tokenCollected: h,
        tokenCollectedPercent: f,
        bclSupply: g,
        liqSupply: T,
        totalSupply: l,
        availableSupply: q
      })
    }, J = async ({
      jettonAddress: b,
      userAddress: v,
      masterAddress: C
    }) => {
      var h, f, g;
      const p = await W(async () => await N(C).openCoin(r(b)).getUserWallet(r(v)))();
      if (!S(p)) return p;
      const l = await W(async () => !await p.data.getTransfersEnabled())();
      if (!S(l)) return ((h = l.extra) == null ? void 0 : h.status) === 404 && ((g = (f = l.extra) == null ? void 0 : f.error) == null ? void 0 : g.error) === "entity not found" ? x(!1) : l;
      const u = l.data;
      return x(u)
    }, U = async ({
      jettonAddress: b,
      userAddress: v,
      masterAddress: C,
      tonConnectUI: p
    }) => {
      const l = N(C).openCoin(r(b)),
        u = await W(async () => await l.getUserWallet(r(v)))();
      if (!S(u)) return u;
      const h = e(p),
        f = await W(async () => await u.data.sendUnlockWallet(h, {}))();
      return S(f) ? x((await h.getResult()).hash) : f
    }, ee = () => Ee(async ({
      transactionHash: b
    }) => await o({
      transactionHash: b
    }), () => {}, _.UNLOCK_STATUS_CHECK), _e = async ({
      tons: b,
      masterAddress: v,
      jettonAddress: C,
      partnerAddress: p
    }) => {
      const l = await W(async () => await N(v).openCoin(r(C)).getCoinsForTons(O(b)))();
      if (!S(l)) return l;
      const u = k(l.data.coins),
        h = a(u);
      return x({
        minReceive: h,
        maxReceive: u,
        platformFee: k(l.data.fees),
        additionalInfo: {
          partnerAddress: p.toString()
        }
      })
    }, wt = async ({
      jettons: b,
      masterAddress: v,
      jettonAddress: C,
      partnerAddress: p
    }) => {
      const l = await W(async () => await N(v).openCoin(r(C)).getTonsForCoins(O(b)))();
      if (!S(l)) return l;
      const u = k(l.data.tons),
        h = a(u);
      return x({
        minReceive: h,
        maxReceive: u,
        platformFee: k(l.data.fees),
        additionalInfo: {
          partnerAddress: p.toString()
        }
      })
    }, kt = async ({
      userAddress: b,
      jettonAddress: v,
      masterAddress: C
    }) => {
      const p = await W(async () => await N(C).getUserCoinBalance(r(v), r(b)))();
      return S(p) ? x(k(p.data)) : p
    }, Tt = async ({
      tons: b,
      tradeInfoParams: v,
      masterAddress: C,
      jettonAddress: p,
      tonConnectUI: l
    }) => {
      const u = {
          tons: O(b),
          minReceive: O(v.minReceive),
          referral: ne.packReferralConfig({
            partner: r(v.additionalInfo.partnerAddress)
          })
        },
        h = e(l),
        f = await W(async () => await N(C).openCoin(r(p)).sendBuy(h, u))();
      return S(f) ? x((await h.getResult()).hash) : f
    }, At = async ({
      jettons: b,
      tradeInfoParams: v,
      jettonAddress: C,
      masterAddress: p,
      userAddress: l,
      tonConnectUI: u
    }) => {
      const h = await N(p).openCoin(r(C)).getUserWallet(r(l)),
        f = e(u),
        g = await W(async () => await h.sendSellCoins(f, {
          amount: O(b),
          minReceive: O(v.minReceive),
          referral: ne.packReferralConfig({
            partner: r(v.additionalInfo.partnerAddress)
          }),
          queryId: 0n
        }))();
      return S(g) ? x((await f.getResult()).hash) : g
    }, St = () => Ee(({
      transactionHash: b
    }) => o({
      transactionHash: b
    }), () => {}, _.BUY_STATUS_CHECK), jt = () => Ee(({
      transactionHash: b
    }) => o({
      transactionHash: b
    }), () => {}, _.SELL_STATUS_CHECK), qt = ({
      tokenBalance: b,
      overview: v
    }) => {
      const {
        buyNetworkFee: C,
        launchNetworkFee: p,
        walletNetworkLaunchBuyFee: l
      } = P, u = v.bclData.launchPlatformFee, h = b.value.minus(p.plus(u).plus(l).plus(C)), f = v.bclData.tokenForDexWithFees;
      return f.lt(h) ? f : h.gte(0) ? h : new $(0)
    }, We = s({
      getFees: ({
        overview: b
      }) => {
        const {
          buyNetworkFee: v,
          launchNetworkFee: C,
          walletNetworkLaunchBuyFee: p,
          walletNetworkLaunchFee: l
        } = P, u = b.bclData.launchPlatformFee;
        return {
          buyNetworkFee: v,
          launchNetworkFee: C,
          launchPlatformFee: u,
          walletNetworkLaunchFee: l,
          walletNetworkLaunchBuyFee: p
        }
      }
    });
    return {
      getCoinPriceInTons: w,
      getBclData: E,
      getUnlockEnabled: J,
      getJettonBclData: oe,
      unlockWallet: U,
      getWaitForUnlockStatus: ee,
      getBuyInfo: _e,
      getSellInfo: wt,
      buyJetton: Tt,
      sellJetton: At,
      getUserJettonBalance: kt,
      getWaitForBuyStatus: St,
      getWaitForSellStatus: jt,
      getJettonOverview: z,
      createJetton: te,
      getWaitForCreateStatus: se,
      getMaxShareAmount: qt,
      getMaxBuyAmount: ({
        tokenBalance: b
      }) => {
        const {
          buyNetworkFee: v,
          walletNetworkBuyFee: C
        } = P;
        return b.value.minus(v).minus(C)
      },
      getReviewInfo: We,
      fees: P
    }
  },
  eo = ({
    addresses: r,
    tonBalance: e
  }) => {
    if (!r) return;
    const {
      mustGetUserWalletAddress: t
    } = De(), {
      getJettonOverview: s,
      createJetton: n,
      getWaitForCreateStatus: o,
      getMaxShareAmount: a,
      getReviewInfo: i
    } = or(), m = r.masterAddresses[it.STONFI_TON_FUN], d = Ue().tonConnectUI.value;
    return {
      getJettonOverview: ({
        tons: _
      }) => s({
        tons: _,
        masterAddress: m
      }),
      createJetton: ({
        form: _
      }) => n({
        form: _,
        masterAddress: m,
        tonConnectUI: d,
        userAddress: t()
      }),
      getWaitForCreateStatus: () => o()(),
      getReviewInfo: ({
        overview: _,
        share: A,
        jettonTicker: B,
        withAiAgent: P
      }) => i({
        overview: _,
        share: A,
        jettonTicker: B,
        tonBalance: e,
        withAiAgent: P
      }),
      getMaxShareAmount: ({
        tokenBalance: _,
        overview: A
      }) => a({
        tokenBalance: _,
        overview: A
      })
    }
  },
  to = ({
    addresses: r,
    jetton: e,
    tonBalance: t,
    jettonBalance: s
  }) => {
    const {
      mustGetUserWalletAddress: n,
      getTradeStateControls: o,
      createGetUnlockInfo: a
    } = De(), {
      slippage: i
    } = ct(), {
      getUserJettonBalance: m,
      getUnlockEnabled: d,
      getWaitForUnlockStatus: _,
      unlockWallet: A,
      buyJetton: B,
      sellJetton: P,
      getWaitForBuyStatus: N,
      getWaitForSellStatus: w,
      getBuyInfo: R,
      getSellInfo: E,
      getMaxBuyAmount: V,
      fees: G
    } = or(), F = e.address, z = e.masterContractAddress, te = r.partnerAddress, se = Ue().tonConnectUI.value, oe = a({
      getFees: () => G
    }), J = o();
    return {
      getUserJettonBalance: () => m({
        jettonAddress: F,
        userAddress: n(),
        masterAddress: z
      }),
      getUnlockEnabled: () => d({
        jettonAddress: F,
        userAddress: n(),
        masterAddress: z
      }),
      getWaitForUnlockStatus: () => _(),
      unlockWallet: () => A({
        jettonAddress: F,
        userAddress: n(),
        masterAddress: z,
        tonConnectUI: se
      }),
      getUnlockInfo: () => oe({
        tonBalance: t,
        jettonBalance: s
      }),
      getSlippage: () => i.value,
      updateSlippage: U => i.value = U,
      buyJetton: ({
        tons: U,
        tradeInfoParams: ee
      }) => B({
        tons: U,
        jettonAddress: F,
        masterAddress: z,
        tradeInfoParams: ee,
        tonConnectUI: se
      }),
      sellJetton: ({
        jettons: U,
        tradeInfoParams: ee
      }) => P({
        jettons: U,
        jettonAddress: F,
        masterAddress: z,
        userAddress: n(),
        tradeInfoParams: ee,
        tonConnectUI: se
      }),
      getWaitForBuyStatus: () => N(),
      getWaitForSellStatus: () => w(),
      tradeStateControls: {
        getEmptyState: ({
          operation: U
        }) => J.getEmptyState({
          tonBalance: t,
          jettonBalance: s,
          operation: U
        }),
        getImmediateState: ({
          operation: U,
          amount: ee
        }) => J.getImmediateState({
          amount: ee,
          tonBalance: t,
          jettonBalance: s,
          operation: U,
          jettonTicker: e.ticker,
          fees: G
        }),
        getState: ({
          operation: U,
          amount: ee
        }) => J.getState({
          tonBalance: t,
          jettonBalance: s,
          operation: U,
          amount: ee,
          jettonTicker: e.ticker,
          fees: G,
          getBuyInfo: ({
            tons: _e
          }) => R({
            tons: _e,
            jettonAddress: F,
            masterAddress: z,
            partnerAddress: te
          }),
          getSellInfo: ({
            jettons: _e
          }) => E({
            jettons: _e,
            jettonAddress: F,
            masterAddress: z,
            partnerAddress: te
          })
        })
      },
      getMaxBuyAmount: V
    }
  },
  go = ({
    balances: r,
    addresses: e,
    networkType: t,
    referrerToken: s
  }) => {
    switch (t) {
      case xs.TON:
        switch (e.sdkType) {
          case st.TON_FUN:
            return eo({
              tonBalance: r.tokenBalance,
              addresses: e
            });
          case st.BLUM:
            return wn({
              tonBalance: r.tokenBalance,
              addresses: e,
              referrerToken: s
            });
          default: {
            const n = e.sdkType;
            throw Oe(`Unknown sdk type: ${n}`)
          }
        }
      default:
        throw Oe(`Unknown network type: ${t}`)
    }
  },
  _o = ({
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
        const m = (() => {
          switch (e) {
            case st.TON_FUN:
              return to({
                addresses: s,
                jetton: n,
                tonBalance: a.tokenBalance,
                jettonBalance: a.jettonBalance
              });
            case st.BLUM:
              return kn({
                jetton: n,
                tonBalance: a.tokenBalance,
                jettonBalance: a.jettonBalance,
                referrerToken: i
              });
            default:
              throw Oe("Unknown sdk type")
          }
        })();
        if (r) {
          const d = (() => {
            switch (t) {
              case Cr.STONFI:
                return Or({
                  jetton: n,
                  tonBalance: a.tokenBalance,
                  jettonBalance: a.jettonBalance
                });
              default:
                throw Oe("Unknown dex type")
            }
          })();
          return {
            ...m,
            ...d
          }
        }
        return m
      }
      default:
        throw Oe("Unknown network type")
    }
  };
export {
  lo as _, mo as a, uo as b, yo as c, go as d, ho as f, _o as g
};