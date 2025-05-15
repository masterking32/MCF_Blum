var hs = Object.defineProperty;
var ys = (s, e, t) => e in s ? hs(s, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : s[e] = t;
var d = (s, e, t) => ys(s, typeof e != "symbol" ? e + "" : e, t);
import {
  d as lt,
  h as fs,
  X as gs,
  aO as _s,
  ag as xr,
  o as ve,
  N as De,
  e as ee,
  C as Mt,
  a1 as Or,
  a6 as $,
  H as bs,
  x as Mr,
  b6 as Je,
  bi as vs,
  bQ as ws,
  as as ks,
  c5 as Ve,
  n as Wt,
  ak as fe,
  G as Kt,
  f as Ht,
  A as Rt,
  j as ir,
  Z as cr,
  c as Dt,
  w as Ts,
  c6 as As,
  a as he,
  p as Ss,
  aB as pr,
  t as js,
  c7 as qs,
  D as lr,
  b as Es,
  c8 as $e,
  c9 as Ye,
  ca as Pe,
  bs as q,
  cb as be,
  cc as Cs,
  cd as $s,
  ce as mr,
  ab as Bs,
  cf as S,
  cg as mt,
  ch as K,
  af as E,
  aa as O,
  ci as G,
  cj as Dr,
  aX as ot,
  bf as Re,
  ck as Ps,
  cl as Rs,
  cm as Ns,
  az as Is,
  b4 as Fs,
  a8 as Ue,
  c4 as Ur,
  cn as at,
  co as xs
} from "./DdW0p5VG.js";
import {
  _ as Os
} from "./BHHMs5Tb.js";
import {
  B as Ms
} from "./XZmCcw9f.js";
import {
  _ as Ds
} from "./BFEgGYK1.js";
import {
  _ as Us
} from "./DuMelggl.js";
import {
  p as Gs,
  r as Ls,
  s as Js,
  c as We,
  d as zt,
  e as ut,
  g as Ws
} from "./C0EZDGS0.js";
import {
  d as Gr
} from "./BIfqI3t8.js";
const vo = lt({
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
    emits: ["open-payment-sheet"],
    setup(s, {
      emit: e
    }) {
      const t = s,
        r = e,
        n = fs().$webApp,
        o = gs(),
        a = _s(),
        i = () => {
          const u = Je().tonConnectUI.value,
            C = (u.walletInfo || u.wallet).universalLink;
          if (vs(C)) {
            const x = "https://t.me/wallet/start?startapp=main-rc__a0646df863";
            ["ios", "weba", "android", "tdesktop", "webk"].includes(n.platform) ? n.openTelegramLink(x) : n.openLink(x)
          } else n.openLink(C)
        },
        p = u => {
          r("open-payment-sheet"), a.openPaymentSheet({
            amount: u
          })
        },
        y = () => {
          var B;
          const u = (B = a.availableInfo.value) == null ? void 0 : B.available;
          if (o.memepad.memepadClickTopupButton({
              flowType: t.flowType,
              source: t.source,
              jettonShortname: t.jettonShortname,
              jettonAddress: t.jettonAddress,
              reason: t.details
            }), u) {
            const C = (() => {
              if (!t.needMoreValue) return 10;
              const v = new $(new $(t.needMoreValue).toFixed(1, $.ROUND_UP));
              return v.gt(10) ? v.toNumber() : 10
            })();
            p(C)
          } else i()
        },
        f = bs(() => o.memepad.memepadShowTopupButton({
          flowType: t.flowType,
          balance: t.valueBalance,
          value: t.inputValue,
          source: t.source
        }), 1e3).debouncedFunction;
      return xr(() => {
        f()
      }), (u, B) => {
        const C = Mr;
        return ve(), De(C, {
          label: ("t" in u ? u.t : ee(Mt))("memepad.top_up_wallet_button"),
          fill: "",
          size: ee(Or).LARGE,
          onClick: y
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Ks = lt({
    __name: "StateButtonWrapper",
    props: {
      forceLoading: {
        type: Boolean,
        default: !1
      },
      buttonSize: {
        default: Or.LARGE
      }
    },
    setup(s) {
      const e = ws().status,
        t = ks();
      return (r, n) => {
        const o = Mr,
          a = Os;
        return ee(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in r ? r.WALLET_LOCAL_AND_REMOTE_STATUS : ee(Ve)).DISCONNECTED ? (ve(), De(o, {
          key: 0,
          label: ("t" in r ? r.t : ee(Mt))("wallet.connect.btn"),
          fill: "",
          size: r.buttonSize,
          onClick: n[0] || (n[0] = i => ee(t).runConnectionFlow())
        }, null, 8, ["label", "size"])) : ee(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in r ? r.WALLET_LOCAL_AND_REMOTE_STATUS : ee(Ve)).MUST_RECONNECT ? (ve(), De(o, {
          key: 1,
          label: ("t" in r ? r.t : ee(Mt))("wallet.reconnect.btn"),
          fill: "",
          size: r.buttonSize,
          onClick: n[1] || (n[1] = i => ee(t).runConnectionFlow())
        }, null, 8, ["label", "size"])) : ee(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in r ? r.WALLET_LOCAL_AND_REMOTE_STATUS : ee(Ve)).LOADING || r.forceLoading ? (ve(), De(a, {
          key: 2,
          class: Wt(["skeleton", `is-${r.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : ee(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in r ? r.WALLET_LOCAL_AND_REMOTE_STATUS : ee(Ve)).CONNECTED ? fe(r.$slots, "default", {
          key: 3
        }, void 0, !0) : Kt("", !0)
      }
    }
  }),
  wo = Ht(Ks, [
    ["__scopeId", "data-v-1e641cbd"]
  ]),
  Hs = lt({
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
    setup(s, {
      expose: e,
      emit: t
    }) {
      const r = s,
        n = t,
        o = Rt("el"),
        a = Rt("input"),
        i = Rt("hiddenInput"),
        p = () => {
          qs(() => {
            a.value && (a.value.style.width = "", a.value.style.width = a.value.scrollWidth + "px")
          })
        },
        y = ir({
          get: () => r.modelValue,
          set: v => {
            if (a.value && a.value.value !== r.modelValue) {
              const N = [...a.value.value].findIndex((H, z) => H !== r.modelValue[z]);
              N !== -1 && a.value.value[N] === "," && (v = v.slice(0, N) + "." + v.slice(N))
            }
            v = (r.modifier || (N => N))(v), a.value && a.value.value !== v && (a.value.value = v), n("update:modelValue", v)
          }
        });
      cr(() => r.modelValue, p), cr(() => a.value, p);
      const f = ir(() => {
          if (!o.value || !a.value || !i.value) return;
          const v = parseInt(getComputedStyle(i.value).getPropertyValue("font-size")),
            F = parseInt(getComputedStyle(i.value).getPropertyValue("line-height")),
            N = `${r.modelValue} ${r.postfix}`,
            H = o.value.offsetWidth,
            M = (ae => {
              const ie = document.createElement("canvas").getContext("2d");
              return ie ? (ie.font = `700 ${v}px RoobertPro`, ie.measureText(ae).width) : void 0
            })(N.trim());
          if (!M) return;
          const V = Math.min(H / M * .75, 1);
          return {
            fontSize: `${v*V}px`,
            lineHeight: `${F*V}px`
          }
        }),
        u = () => {
          var v;
          (v = i.value) == null || v.focus()
        };
      xr(() => {
        u()
      }), e({
        focusOnInput: u
      });
      const B = () => {
          setTimeout(() => {
            var v;
            (v = a.value) == null || v.focus()
          }, 100)
        },
        C = async () => {
          const v = new FontFace("RoobertPro", `url(${Ms})`, {
            weight: "700"
          });
          await Promise.all([document.fonts.ready, v.load()]), document.fonts.add(v)
        };
      return (() => {
        C()
      })(), (v, F) => (ve(), Dt("label", {
        ref: "el",
        class: Wt(["memepad-jetton-actions-controls-input", {
          "is-centered": v.centered
        }])
      }, [Ts(he("input", {
        ref: "input",
        "onUpdate:modelValue": F[0] || (F[0] = N => Ss(y) ? y.value = N : null),
        type: "text",
        inputmode: "decimal",
        style: pr(ee(f)),
        onBlur: F[1] || (F[1] = N => n("blur"))
      }, null, 36), [
        [As, ee(y)]
      ]), he("input", {
        ref: "hiddenInput",
        type: "text",
        inputmode: "decimal",
        class: "hidden",
        onFocus: B
      }, null, 544), v.postfix ? (ve(), Dt("span", {
        key: 0,
        class: "label",
        style: pr(ee(f))
      }, js(v.postfix), 5)) : Kt("", !0)], 2))
    }
  }),
  ko = Ht(Hs, [
    ["__scopeId", "data-v-44264923"]
  ]),
  To = s => new $(s.replaceAll(",", "") || "0"),
  zs = {
    class: "top"
  },
  Vs = {
    class: "center"
  },
  Ys = {
    class: "right"
  },
  Qs = {
    class: "inner"
  },
  Xs = {
    class: "action"
  },
  Zs = {
    key: 0,
    class: "helpers"
  },
  en = lt({
    __name: "Modal",
    setup(s) {
      return (e, t) => {
        const r = Ds,
          n = Us;
        return ve(), De(n, {
          class: "memepad-jetton-modal"
        }, {
          default: lr(() => [fe(e.$slots, "top", {}, () => [he("div", zs, [t[0] || (t[0] = he("div", {
            class: "left"
          }, null, -1)), he("div", Vs, [fe(e.$slots, "top-center", {}, void 0, !0)]), he("div", Ys, [fe(e.$slots, "top-right", {}, void 0, !0)])])], !0), fe(e.$slots, "default", {}, () => [he("div", Qs, [fe(e.$slots, "inner", {}, void 0, !0)])], !0), Es(r, {
            "ignore-tabs": "",
            "hide-space": ""
          }, {
            default: lr(() => [he("div", {
              class: Wt(["memepad-jetton-modal-bottom", {
                "with-helpers": e.$slots["bottom-helpers"]
              }])
            }, [he("div", Xs, [fe(e.$slots, "bottom-action", {}, void 0, !0)]), e.$slots["bottom-helpers"] ? (ve(), Dt("div", Zs, [fe(e.$slots, "bottom-helpers", {}, void 0, !0)])) : Kt("", !0)], 2)]),
            _: 3
          })]),
          _: 3
        })
      }
    }
  }),
  Ao = Ht(en, [
    ["__scopeId", "data-v-66054cb6"]
  ]);
class pe extends Error {
  constructor(e, t) {
    super(e, t), this.message = `${pe.prefix} ${this.constructor.name}${this.info?": "+this.info:""}${e?`
`+e:""}`, Object.setPrototypeOf(this, pe.prototype)
  }
  get info() {
    return ""
  }
}
pe.prefix = "[TON_CONNECT_SDK_ERROR]";
class Vt extends pe {
  get info() {
    return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Vt.prototype)
  }
}
class Yt extends pe {
  get info() {
    return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Yt.prototype)
  }
}
class dt extends pe {
  get info() {
    return "User rejects the action in the wallet."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, dt.prototype)
  }
}
class ht extends pe {
  get info() {
    return "Request to the wallet contains errors."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, ht.prototype)
  }
}
class yt extends pe {
  get info() {
    return "App tries to send rpc request to the injected wallet while not connected."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, yt.prototype)
  }
}
class ft extends pe {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, ft.prototype)
  }
}
$e.UNKNOWN_ERROR + "", $e.USER_REJECTS_ERROR + "", $e.BAD_REQUEST_ERROR + "", $e.UNKNOWN_APP_ERROR + "", $e.MANIFEST_NOT_FOUND_ERROR + "", $e.MANIFEST_CONTENT_ERROR + "";
Ye.UNKNOWN_ERROR + "", Ye.USER_REJECTS_ERROR + "", Ye.BAD_REQUEST_ERROR + "", Ye.UNKNOWN_APP_ERROR + "";
for (let s = 0; s <= 255; s++) {
  let e = s.toString(16);
  e.length < 2 && (e = "0" + e)
}
var J = {},
  gt, Qt = Pe && Pe.__importDefault || function(s) {
    return s && s.__esModule ? s : {
      default: s
    }
  };
Object.defineProperty(J, "__esModule", {
  value: !0
});
var Lr = J.Api = Jr = J.TonApiClient = J.ContentType = J.PoolImplementationType = J.TrustType = J.JettonVerificationType = J.BouncePhaseType = J.ComputeSkipReason = J.AccStatusChange = J.TransactionType = gt = J.AccountStatus = void 0,
  ur;
(function(s) {
  s.Nonexist = "nonexist", s.Uninit = "uninit", s.Active = "active", s.Frozen = "frozen"
})(ur || (gt = J.AccountStatus = ur = {}));
var dr;
(function(s) {
  s.TransOrd = "TransOrd", s.TransTickTock = "TransTickTock", s.TransSplitPrepare = "TransSplitPrepare", s.TransSplitInstall = "TransSplitInstall", s.TransMergePrepare = "TransMergePrepare", s.TransMergeInstall = "TransMergeInstall", s.TransStorage = "TransStorage"
})(dr || (J.TransactionType = dr = {}));
var hr;
(function(s) {
  s.AcstUnchanged = "acst_unchanged", s.AcstFrozen = "acst_frozen", s.AcstDeleted = "acst_deleted"
})(hr || (J.AccStatusChange = hr = {}));
var yr;
(function(s) {
  s.CskipNoState = "cskip_no_state", s.CskipBadState = "cskip_bad_state", s.CskipNoGas = "cskip_no_gas"
})(yr || (J.ComputeSkipReason = yr = {}));
var fr;
(function(s) {
  s.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", s.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", s.TrPhaseBounceOk = "TrPhaseBounceOk"
})(fr || (J.BouncePhaseType = fr = {}));
var gr;
(function(s) {
  s.Whitelist = "whitelist", s.Blacklist = "blacklist", s.None = "none"
})(gr || (J.JettonVerificationType = gr = {}));
var _r;
(function(s) {
  s.Whitelist = "whitelist", s.Graylist = "graylist", s.Blacklist = "blacklist", s.None = "none"
})(_r || (J.TrustType = _r = {}));
var br;
(function(s) {
  s.Whales = "whales", s.Tf = "tf", s.LiquidTF = "liquidTF"
})(br || (J.PoolImplementationType = br = {}));
var ge;
(function(s) {
  s.Json = "application/json", s.FormData = "multipart/form-data", s.UrlEncoded = "application/x-www-form-urlencoded", s.Text = "text/plain"
})(ge || (J.ContentType = ge = {}));
const Ut = q,
  tn = Qt(Gs),
  rn = Qt(Ls),
  sn = Qt(Js),
  nn = s => (0, tn.default)(s, (e, t, r) => {
    if (typeof t == "number") {
      const n = r.source;
      return Number.isSafeInteger(t) || /[\.eE]/.test(n) ? t : BigInt(n)
    }
    return t
  }),
  Nt = s => (0, sn.default)(s, (e, t) => typeof t == "bigint" ? (0, rn.default)(t.toString()) : t);
class on {
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
      [ge.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? Nt(e) : e,
      [ge.Text]: e => e !== null && typeof e != "string" ? Nt(e) : e,
      [ge.FormData]: e => Object.keys(e || {}).reduce((t, r) => {
        const n = e[r];
        return t.append(r, n instanceof Blob ? n : typeof n == "object" && n !== null ? Nt(n) : `${n}`), t
      }, new FormData),
      [ge.UrlEncoded]: e => this.toQueryString(e)
    });
    d(this, "createAbortSignal", e => {
      if (this.abortControllers.has(e)) {
        const r = this.abortControllers.get(e);
        return r ? r.signal : void 0
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
      path: r,
      type: n,
      query: o,
      format: a,
      baseUrl: i,
      cancelToken: p,
      ...y
    }) => {
      const f = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        u = this.mergeRequestParams(y, f),
        B = o && this.toQueryString(o),
        C = n ?? ge.Json,
        x = this.contentFormatters[C],
        v = a || u.format;
      return this.customFetch(`${i||this.baseUrl||""}${r}${B?`?${B}`:""}`, {
        ...u,
        headers: {
          ...u.headers || {},
          ...C && C !== ge.FormData ? {
            "Content-Type": C
          } : {}
        },
        signal: (p ? this.createAbortSignal(p) : u.signal) || null,
        body: typeof e > "u" || e === null ? null : x(e)
      }).then(async F => {
        const N = F.clone();
        N.data = null, N.error = null;
        const H = v === "json" ? "text" : v,
          z = H ? await F[H]().then(M => (N.ok ? N.data = v === "json" ? nn(M) : M : N.error = M, N)).catch(M => (N.error = M, N)) : N;
        if (p && this.abortControllers.delete(p), !F.ok) throw z;
        return z.data
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
var Jr = J.TonApiClient = on;
const Wr = {
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

function an(s) {
  return s.replace(/(_\w)/g, e => {
    var t;
    return ((t = e[1]) == null ? void 0 : t.toUpperCase()) ?? ""
  })
}

function cn(s) {
  return s.replace(/([A-Z])/g, e => `_${e.toLowerCase()}`)
}

function It(s) {
  return Ut.Cell.fromBase64(be.from(s, "hex").toString("base64"))
}

function pn(s) {
  return s.startsWith("-") ? BigInt(s.slice(1)) * -1n : BigInt(s)
}

function c(s, e) {
  const t = e && e.$ref,
    r = t ? Wr[t] : e;
  if (Array.isArray(s)) {
    const n = r && r.items;
    return s.map(o => c(o, n))
  } else if (r) {
    if (r.type === "string") {
      if (r.format === "address") return Ut.Address.parse(s);
      if (r.format === "cell") return s && It(s);
      if (r.format === "cell-base64") return s && Ut.Cell.fromBase64(s)
    }
    if (r.type === "integer") return r["x-js-format"] === "bigint" ? BigInt(s) : Number(s);
    if (r.type === "object" && r.format === "tuple-item") switch (s.type) {
      case "tuple":
        const n = r.properties.tuple.items;
        return {
          type: "tuple", items: s.tuple.map(o => c(o, n))
        };
      case "num":
        return {
          type: "int", value: pn(s.num)
        };
      case "cell":
        return {
          type: "cell", cell: It(s.cell)
        };
      case "slice":
        return {
          type: "slice", slice: It(s.slice)
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
        throw new Error(`Unknown tuple item type: ${s.type}`)
    }
  }
  return s !== null && typeof s == "object" ? Object.keys(s).reduce((n, o) => {
    const a = (r == null ? void 0 : r.properties) && r.properties[o],
      i = an(o);
    return n[i] = c(s[o], a), n
  }, {}) : s
}

function te(s, e) {
  const t = e && e.$ref,
    r = t ? Wr[t] : e;
  if (Array.isArray(s)) {
    const n = r && r.items;
    return s.map(o => te(o, n))
  } else if (r && r.type === "string") {
    if (r.format === "address") return s.toRawString();
    if (r.format === "cell") return s.toBoc().toString("hex");
    if (r.format === "cell-base64") return s.toBoc().toString("base64")
  }
  return s !== null && typeof s == "object" ? Object.keys(s).reduce((n, o) => {
    const a = (r == null ? void 0 : r.properties) && r.properties[o],
      i = cn(o);
    return n[i] = te(s[o], a), n
  }, {}) : s
}
let ln = class {
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
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/address/${r}/parse`,
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
        const r = await this.http.request({
          path: "/v2/blockchain/reduced/blocks",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/ReducedBlocks"
        })
      },
      getBlockchainBlock: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/blockchain/blocks/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/BlockchainBlock"
        })
      },
      getBlockchainMasterchainShards: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/shards`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/BlockchainBlockShards"
        })
      },
      getBlockchainMasterchainBlocks: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/blocks`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/BlockchainBlocks"
        })
      },
      getBlockchainMasterchainTransactions: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/transactions`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/Transactions"
        })
      },
      getBlockchainConfigFromBlock: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/config`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/BlockchainConfig"
        })
      },
      getRawBlockchainConfigFromBlock: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/config/raw`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/RawBlockchainConfig"
        })
      },
      getBlockchainBlockTransactions: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/blockchain/blocks/${e}/transactions`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/Transactions"
        })
      },
      getBlockchainTransaction: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/blockchain/transactions/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/Transaction"
        })
      },
      getBlockchainTransactionByMessageHash: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/blockchain/messages/${e}/transaction`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
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
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/blockchain/accounts/${r}`,
            method: "GET",
            format: "json",
            ...t
          });
        return c(n, {
          $ref: "#/components/schemas/BlockchainRawAccount"
        })
      },
      getBlockchainAccountTransactions: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/blockchain/accounts/${n}/transactions`,
            method: "GET",
            query: t,
            format: "json",
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/Transactions"
        })
      },
      execGetMethodForBlockchainAccount: async (e, t, r, n = {}) => {
        const o = e.toRawString(),
          a = await this.http.request({
            path: `/v2/blockchain/accounts/${o}/methods/${t}`,
            method: "GET",
            query: r,
            format: "json",
            ...n
          });
        return c(a, {
          $ref: "#/components/schemas/MethodExecutionResult"
        })
      },
      sendBlockchainMessage: async (e, t = {}) => {
        const r = await this.http.request({
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
        return c(r)
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
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/blockchain/accounts/${r}/inspect`,
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
      getAccounts: async (e, t, r = {}) => {
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
          ...r
        });
        return c(n, {
          $ref: "#/components/schemas/Accounts"
        })
      },
      getAccount: async (e, t = {}) => {
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/accounts/${r}`,
            method: "GET",
            format: "json",
            ...t
          });
        return c(n, {
          $ref: "#/components/schemas/Account"
        })
      },
      accountDnsBackResolve: async (e, t = {}) => {
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/accounts/${r}/dns/backresolve`,
            method: "GET",
            format: "json",
            ...t
          });
        return c(n, {
          $ref: "#/components/schemas/DomainNames"
        })
      },
      getAccountJettonsBalances: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/jettons`,
            method: "GET",
            query: t,
            format: "json",
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/JettonsBalances"
        })
      },
      getAccountJettonBalance: async (e, t, r, n = {}) => {
        const o = e.toRawString(),
          a = t.toRawString(),
          i = await this.http.request({
            path: `/v2/accounts/${o}/jettons/${a}`,
            method: "GET",
            query: r,
            format: "json",
            ...n
          });
        return c(i, {
          $ref: "#/components/schemas/JettonBalance"
        })
      },
      getAccountJettonsHistory: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/jettons/history`,
            method: "GET",
            query: t,
            format: "json",
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountJettonHistoryById: async (e, t, r, n = {}) => {
        const o = e.toRawString(),
          a = t.toRawString(),
          i = await this.http.request({
            path: `/v2/accounts/${o}/jettons/${a}/history`,
            method: "GET",
            query: r,
            format: "json",
            ...n
          });
        return c(i, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountNftItems: async (e, t, r = {}) => {
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
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getAccountEvents: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/events`,
            method: "GET",
            query: t,
            format: "json",
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountEvent: async (e, t, r, n = {}) => {
        const o = e.toRawString(),
          a = await this.http.request({
            path: `/v2/accounts/${o}/events/${t}`,
            method: "GET",
            query: r,
            format: "json",
            ...n
          });
        return c(a, {
          $ref: "#/components/schemas/AccountEvent"
        })
      },
      getAccountTraces: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/traces`,
            method: "GET",
            query: t,
            format: "json",
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/TraceIDs"
        })
      },
      getAccountSubscriptions: async (e, t = {}) => {
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/accounts/${r}/subscriptions`,
            method: "GET",
            format: "json",
            ...t
          });
        return c(n, {
          $ref: "#/components/schemas/Subscriptions"
        })
      },
      reindexAccount: async (e, t = {}) => {
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/accounts/${r}/reindex`,
            method: "POST",
            ...t
          });
        return c(n)
      },
      searchAccounts: async (e, t = {}) => {
        const r = await this.http.request({
          path: "/v2/accounts/search",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/FoundAccounts"
        })
      },
      getAccountDnsExpiring: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/dns/expiring`,
            method: "GET",
            query: t,
            format: "json",
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/DnsExpiring"
        })
      },
      getAccountPublicKey: async (e, t = {}) => {
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/accounts/${r}/publickey`,
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
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/accounts/${r}/multisigs`,
            method: "GET",
            format: "json",
            ...t
          });
        return c(n, {
          $ref: "#/components/schemas/Multisigs"
        })
      },
      getAccountDiff: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/diff`,
            method: "GET",
            query: t,
            format: "json",
            ...r
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
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/address/${r}/parse`,
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
      getAccountNftHistory: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${n}/nfts/history`,
            method: "GET",
            query: t,
            format: "json",
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getNftCollections: async (e, t = {}) => {
        const r = await this.http.request({
          path: "/v2/nfts/collections",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/NftCollections"
        })
      },
      getNftCollection: async (e, t = {}) => {
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/nfts/collections/${r}`,
            method: "GET",
            format: "json",
            ...t
          });
        return c(n, {
          $ref: "#/components/schemas/NftCollection"
        })
      },
      getItemsFromCollection: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/nfts/collections/${n}/items`,
            method: "GET",
            query: t,
            format: "json",
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getNftItemsByAddresses: async (e, t = {}) => {
        const r = await this.http.request({
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
        return c(r, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getNftItemByAddress: async (e, t = {}) => {
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/nfts/${r}`,
            method: "GET",
            format: "json",
            ...t
          });
        return c(n, {
          $ref: "#/components/schemas/NftItem"
        })
      },
      getNftHistoryById: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/nfts/${n}/history`,
            method: "GET",
            query: t,
            format: "json",
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      }
    });
    d(this, "dns", {
      getDnsInfo: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/dns/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/DomainInfo"
        })
      },
      dnsResolve: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/dns/${e}/resolve`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/DnsRecord"
        })
      },
      getDomainBids: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/dns/${e}/bids`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/DomainBids"
        })
      },
      getAllAuctions: async (e, t = {}) => {
        const r = await this.http.request({
          path: "/v2/dns/auctions",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/Auctions"
        })
      }
    });
    d(this, "traces", {
      getTrace: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/traces/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/Trace"
        })
      }
    });
    d(this, "events", {
      getEvent: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/events/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/Event"
        })
      }
    });
    d(this, "inscriptions", {
      getAccountInscriptions: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/experimental/accounts/${n}/inscriptions`,
            method: "GET",
            query: t,
            format: "json",
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/InscriptionBalances"
        })
      },
      getAccountInscriptionsHistory: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/experimental/accounts/${n}/inscriptions/history`,
            method: "GET",
            query: t,
            format: "json",
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountInscriptionsHistoryByTicker: async (e, t, r, n = {}) => {
        const o = e.toRawString(),
          a = await this.http.request({
            path: `/v2/experimental/accounts/${o}/inscriptions/${t}/history`,
            method: "GET",
            query: r,
            format: "json",
            ...n
          });
        return c(a, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getInscriptionOpTemplate: async (e, t = {}) => {
        const r = await this.http.request({
          path: "/v2/experimental/inscriptions/op-template",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(r, {
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
        const r = await this.http.request({
          path: "/v2/jettons",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/Jettons"
        })
      },
      getJettonInfo: async (e, t = {}) => {
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/jettons/${r}`,
            method: "GET",
            format: "json",
            ...t
          });
        return c(n, {
          $ref: "#/components/schemas/JettonInfo"
        })
      },
      getJettonHolders: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/jettons/${n}/holders`,
            method: "GET",
            query: t,
            format: "json",
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/JettonHolders"
        })
      },
      getJettonTransferPayload: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = t.toRawString(),
          a = await this.http.request({
            path: `/v2/jettons/${o}/transfer/${n}/payload`,
            method: "GET",
            format: "json",
            ...r
          });
        return c(a, {
          $ref: "#/components/schemas/JettonTransferPayload"
        })
      },
      getJettonsEvents: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/events/${e}/jettons`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
          $ref: "#/components/schemas/Event"
        })
      }
    });
    d(this, "staking", {
      getAccountNominatorsPools: async (e, t = {}) => {
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/staking/nominator/${r}/pools`,
            method: "GET",
            format: "json",
            ...t
          });
        return c(n, {
          $ref: "#/components/schemas/AccountStaking"
        })
      },
      getStakingPoolInfo: async (e, t = {}) => {
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/staking/pool/${r}`,
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
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/staking/pool/${r}/history`,
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
        const r = await this.http.request({
          path: "/v2/staking/pools",
          method: "GET",
          query: e && {
            ...e,
            available_for: (n = e.available_for) == null ? void 0 : n.toRawString()
          },
          format: "json",
          ...t
        });
        return c(r, {
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
        const r = await this.http.request({
          path: "/v2/rates",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(r, {
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
        const r = await this.http.request({
          path: "/v2/rates/chart",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(r, {
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
        const r = await this.http.request({
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
        return c(r, {
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
        const r = await this.http.request({
          path: "/v2/wallet/backup",
          method: "PUT",
          body: te(e),
          ...t
        });
        return c(r)
      },
      tonConnectProof: async (e, t = {}) => {
        const r = await this.http.request({
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
        return c(r, {
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
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/wallet/${r}/seqno`,
            method: "GET",
            format: "json",
            ...t
          });
        return c(n, {
          $ref: "#/components/schemas/Seqno"
        })
      },
      getWalletsByPublicKey: async (e, t = {}) => {
        const r = await this.http.request({
          path: `/v2/pubkeys/${e}/wallets`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
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
      gaslessEstimate: async (e, t, r = {}) => {
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
            ...r
          });
        return c(o, {
          $ref: "#/components/schemas/SignRawParams"
        })
      },
      gaslessSend: async (e, t = {}) => {
        const r = await this.http.request({
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
        return c(r)
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
        const r = await this.http.request({
          path: "/v2/liteserver/get_masterchain_info_ext",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(r, {
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
        const r = await this.http.request({
          path: `/v2/liteserver/get_block/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
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
        const r = await this.http.request({
          path: `/v2/liteserver/get_state/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
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
      getRawBlockchainBlockHeader: async (e, t, r = {}) => {
        const n = await this.http.request({
          path: `/v2/liteserver/get_block_header/${e}`,
          method: "GET",
          query: t,
          format: "json",
          ...r
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
        const r = await this.http.request({
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
        return c(r, {
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
      getRawAccountState: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/liteserver/get_account_state/${n}`,
            method: "GET",
            query: t,
            format: "json",
            ...r
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
      getRawShardInfo: async (e, t, r = {}) => {
        const n = await this.http.request({
          path: `/v2/liteserver/get_shard_info/${e}`,
          method: "GET",
          query: t,
          format: "json",
          ...r
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
        const r = await this.http.request({
          path: `/v2/liteserver/get_all_shards_info/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
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
      getRawTransactions: async (e, t, r = {}) => {
        const n = e.toRawString(),
          o = await this.http.request({
            path: `/v2/liteserver/get_transactions/${n}`,
            method: "GET",
            query: t,
            format: "json",
            ...r
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
      getRawListBlockTransactions: async (e, t, r = {}) => {
        var o;
        const n = await this.http.request({
          path: `/v2/liteserver/list_block_transactions/${e}`,
          method: "GET",
          query: t && {
            ...t,
            account_id: (o = t.account_id) == null ? void 0 : o.toRawString()
          },
          format: "json",
          ...r
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
        const r = await this.http.request({
          path: "/v2/liteserver/get_block_proof",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return c(r, {
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
      getRawConfig: async (e, t, r = {}) => {
        const n = await this.http.request({
          path: `/v2/liteserver/get_config_all/${e}`,
          method: "GET",
          query: t,
          format: "json",
          ...r
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
        const r = await this.http.request({
          path: `/v2/liteserver/get_shard_block_proof/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return c(r, {
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
        const r = e.toRawString(),
          n = await this.http.request({
            path: `/v2/multisig/${r}`,
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
        const r = await this.http.request({
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
        return c(r, {
          $ref: "#/components/schemas/DecodedMessage"
        })
      },
      emulateMessageToEvent: async (e, t, r = {}) => {
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
          ...r
        });
        return c(n, {
          $ref: "#/components/schemas/Event"
        })
      },
      emulateMessageToTrace: async (e, t, r = {}) => {
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
          ...r
        });
        return c(n, {
          $ref: "#/components/schemas/Trace"
        })
      },
      emulateMessageToWallet: async (e, t = {}) => {
        const r = await this.http.request({
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
        return c(r, {
          $ref: "#/components/schemas/MessageConsequences"
        })
      },
      emulateMessageToAccountEvent: async (e, t, r, n = {}) => {
        const o = e.toRawString(),
          a = await this.http.request({
            path: `/v2/accounts/${o}/events/emulate`,
            method: "POST",
            query: r,
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
Lr = J.Api = ln;
var mn = class {
  constructor(s) {
    this.tonapi = s
  }
  open(s) {
    return q.openContract(s, e => Gt(this.tonapi, e.address, e.init))
  }
  provider(s, e) {
    return Gt(this.tonapi, s, e || null)
  }
};

function Gt(s, e, t) {
  return {
    async getState() {
      const r = await s.blockchain.getBlockchainRawAccount(e).catch(async a => {
          const i = await a.json();
          if (i.error === "entity not found") return {
            address: e,
            balance: 0n,
            lastTransactionLt: void 0,
            status: gt.Uninit,
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
        n = r.lastTransactionHash !== void 0 && r.lastTransactionLt !== void 0 ? {
          lt: r.lastTransactionLt,
          hash: Cs.from(r.lastTransactionHash, "base64")
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
        balance: r.balance,
        last: n,
        state: o[r.status](r)
      }
    },
    async get(r, n) {
      if (n.some(a => a.type === "tuple")) throw new Error("Tuples as get parameters are not supported by tonapi");
      const o = await s.blockchain.execGetMethodForBlockchainAccount(e, r, {
        args: n.map(un)
      });
      return {
        stack: new q.TupleReader(o.stack)
      }
    },
    async external(r) {
      let n = null;
      t && (await s.accounts.getAccount(e)).status !== "active" && (n = t);
      const o = q.external({
          to: e,
          init: n ? {
            code: n.code,
            data: n.data
          } : null,
          body: r
        }),
        a = q.beginCell().store(q.storeMessage(o)).endCell();
      await s.blockchain.sendBlockchainMessage({
        boc: a
      })
    },
    async internal(r, n) {
      let o = null;
      t && (await s.accounts.getAccount(e)).status !== "active" && (o = t);
      let a = !0;
      n.bounce !== null && n.bounce !== void 0 && (a = n.bounce);
      let i;
      typeof n.value == "string" ? i = q.toNano(n.value) : i = n.value;
      let p = null;
      typeof n.body == "string" ? p = q.comment(n.body) : n.body && (p = n.body), await r.send({
        to: e,
        value: i,
        bounce: a,
        sendMode: n.sendMode,
        init: o,
        body: p
      })
    },
    open(r) {
      return q.openContract(r, n => Gt(s, n.address, n.init))
    },
    getTransactions(r, n, o, a) {
      return console.info("hash param in getTransactions action ignored, beacause not supported", o.toString("hex")), s.blockchain.getBlockchainAccountTransactions(r, {
        before_lt: n + 1n,
        limit: a
      }).then(({
        transactions: i
      }) => i.map(p => q.loadTransaction(p.raw.asSlice())))
    }
  }
}

function un(s) {
  switch (s.type) {
    case "int":
      return "0x" + s.value.toString(16);
    case "nan":
      return "NaN";
    case "null":
      return "Null";
    case "cell":
    case "builder":
      return s.cell.toBoc().toString("base64");
    case "slice":
      return s.cell.toBoc().toString("hex");
    case "tuple":
      throw new Error("Tuple is not supported in TonApi get method parameters");
    default:
      throw new Error(`Unknown type ${s.type}`)
  }
}
var qe = {};
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.defer = Kr = qe.internalOnchainContentToCell = qe.sleep = void 0;
const me = q,
  dn = $s();

function hn(s) {
  return new Promise(e => {
    setTimeout(() => e(), s)
  })
}
qe.sleep = hn;

function yn(s) {
  const e = me.Dictionary.empty(me.Dictionary.Keys.Buffer(32), me.Dictionary.Values.Cell());
  for (const t in s) {
    if (s[t] === void 0) continue;
    const r = (0, me.beginCell)();
    if (t === "image_data") {
      const n = me.Dictionary.empty(me.Dictionary.Keys.Uint(32), me.Dictionary.Values.Cell()),
        o = be.from(s[t], "base64");
      for (let a = 0; a * 127 < o.length; a++) n.set(a, (0, me.beginCell)().storeBuffer(o.subarray(a * 127, (a + 1) * 127)).endCell());
      r.storeUint(1, 8).storeDict(n).endCell()
    } else r.storeUint(0, 8).storeStringTail(s[t].toString());
    e.set((0, dn.sha256_sync)(t), r.endCell())
  }
  return (0, me.beginCell)().storeUint(0, 8).storeDict(e).endCell()
}
var Kr = qe.internalOnchainContentToCell = yn;

function fn(s) {
  return (...e) => s(...e)
}
qe.defer = fn;

function D(s, e) {
  if (!{}.hasOwnProperty.call(s, e)) throw new TypeError("attempted to use private field on non-instance");
  return s
}
var gn = 0;

function ye(s) {
  return "__private_" + gn++ + "_" + s
}
var _n = function() {
    function s(t) {
      this.api = void 0, this.adapter = void 0;
      var r = new Jr(t);
      this.api = new Lr(r), this.adapter = new mn(this.api)
    }
    var e = s.prototype;
    return e.open = function(t) {
      return this.adapter.open(t)
    }, e.isContractDeployed = function(t) {
      try {
        return Promise.resolve(this.api.accounts.getAccount(t)).then(function(r) {
          return r.status === gt.Active
        })
      } catch (r) {
        return Promise.reject(r)
      }
    }, e.getAccountBalance = function(t) {
      try {
        return Promise.resolve(this.api.accounts.getAccount(t)).then(function(r) {
          return r.balance
        })
      } catch (r) {
        return Promise.reject(r)
      }
    }, s
  }(),
  re = function() {};
re.deployJettonGas = q.toNano(.05), re.initialGas = q.toNano(.015), re.buyGas = q.toNano(.08), re.sellGas = q.toNano(.08), re.unlockGas = q.toNano(.05);
var Le, Hr = function() {};
Hr.deployJetton = 3637132459,
  function(s) {
    s[s.STONFI = 0] = "STONFI", s[s.DEDUST = 1] = "DEDUST"
  }(Le || (Le = {}));
var vr, wr = function() {
    function s(t, r) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = r
    }
    s.createFromAddress = function(t) {
      return new s(t)
    };
    var e = s.prototype;
    return e.sendDeployJetton = function(t, r, n, o, a, i, p, y, f) {
      y === void 0 && (y = null), f === void 0 && (f = 0);
      try {
        return p === void 0 && (p = 0n), Promise.resolve(t.internal(r, {
          value: n,
          body: q.beginCell().storeUint(Hr.deployJetton, 32).storeUint(f, 64).storeUint(o, 1).storeRef(a).storeBit(i).storeCoins(p).storeMaybeRef(y).endCell()
        })).then(function() {})
      } catch (u) {
        return Promise.reject(u)
      }
    }, e.getConfig = function(t) {
      try {
        return Promise.resolve(t.get("get_config", [])).then(function(r) {
          return {
            admin: r.stack.readAddress(),
            jettonAdmin: r.stack.readAddress(),
            feeRecipient: r.stack.readAddress(),
            curveTon: r.stack.readBigNumber(),
            deployFee: r.stack.readBigNumber(),
            agentDeployFee: r.stack.readBigNumber(),
            buyFeeBasis: r.stack.readBigNumber(),
            sellFeeBasis: r.stack.readBigNumber(),
            liquidityFee: r.stack.readBigNumber(),
            minterCodeStonFi: r.stack.readCell(),
            minterCodeDeDust: r.stack.readCell(),
            walletCode: r.stack.readCell()
          }
        })
      } catch (r) {
        return Promise.reject(r)
      }
    }, s
  }(),
  zr = function() {};
zr.buy = 2943683892,
  function(s) {
    s[s.TRADING = 0] = "TRADING", s[s.PENDING_DEX_LIQUIDITY = 1] = "PENDING_DEX_LIQUIDITY", s[s.LISTED = 2] = "LISTED"
  }(vr || (vr = {}));
var Vr = function() {
    function s(t, r) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = r
    }
    s.createFromAddress = function(t) {
      return new s(t)
    };
    var e = s.prototype;
    return e.getWalletAddress = function(t, r) {
      try {
        return Promise.resolve(t.get("get_wallet_address", [{
          type: "slice",
          cell: q.beginCell().storeAddress(r).endCell()
        }])).then(function(n) {
          return n.stack.readAddress()
        })
      } catch (n) {
        return Promise.reject(n)
      }
    }, e.getJettonData = function(t) {
      try {
        return Promise.resolve(t.get("get_jetton_data", [])).then(function(r) {
          return {
            totalSupply: r.stack.readBigNumber(),
            mintable: r.stack.readBoolean(),
            adminAddress: r.stack.readAddressOpt(),
            content: r.stack.readCell(),
            walletCode: r.stack.readCell()
          }
        })
      } catch (r) {
        return Promise.reject(r)
      }
    }, e.getTotalSupply = function(t) {
      try {
        return Promise.resolve(this.getJettonData(t)).then(function(r) {
          return r.totalSupply
        })
      } catch (r) {
        return Promise.reject(r)
      }
    }, e.getCoinPrice = function(t) {
      try {
        return Promise.resolve(t.get("coin_price", [])).then(function(r) {
          return Number(r.stack.readBigNumber()) / 10 ** 9
        })
      } catch (r) {
        return Promise.reject(r)
      }
    }, e.getCoinsForTons = function(t, r) {
      try {
        return Promise.resolve(t.get("coins_for_tons", [{
          type: "int",
          value: r
        }])).then(function(n) {
          return [n.stack.readBigNumber(), n.stack.readBigNumber()]
        })
      } catch (n) {
        return Promise.reject(n)
      }
    }, e.getTonsForCoins = function(t, r) {
      try {
        return Promise.resolve(t.get("tons_for_coins", [{
          type: "int",
          value: r
        }])).then(function(n) {
          return [n.stack.readBigNumber(), n.stack.readBigNumber()]
        })
      } catch (n) {
        return Promise.reject(n)
      }
    }, e.sendBuy = function(t, r, n, o, a, i, p) {
      a === void 0 && (a = null), i === void 0 && (i = null), p === void 0 && (p = 0);
      try {
        return Promise.resolve(t.internal(r, {
          value: n + re.buyGas,
          body: q.beginCell().storeUint(zr.buy, 32).storeUint(p, 64).storeCoins(o).storeAddress(a).storeMaybeRef(i).endCell()
        })).then(function() {})
      } catch (y) {
        return Promise.reject(y)
      }
    }, e.getBclData = function(t) {
      try {
        return Promise.resolve(t.get("get_bcl_data", [])).then(function(r) {
          var n = r.stack.readNumber();
          return n == Le.STONFI ? {
            dexType: n,
            totalSupply: r.stack.readBigNumber(),
            bclSupply: r.stack.readBigNumber(),
            liqSupply: r.stack.readBigNumber(),
            factory: r.stack.readAddress(),
            author: r.stack.readAddress(),
            content: r.stack.readCell(),
            feeAddress: r.stack.readAddress(),
            buyFeeBasis: r.stack.readNumber(),
            sellFeeBasis: r.stack.readNumber(),
            lastTradeDate: r.stack.readNumber(),
            phase: r.stack.readNumber(),
            tonLiqCollected: r.stack.readBigNumber(),
            tradingCloseFee: r.stack.readBigNumber(),
            fullPriceTon: r.stack.readBigNumber(),
            fullPriceTonFees: r.stack.readBigNumber(),
            routerAddress: r.stack.readAddress(),
            routerPtonWalletAddress: r.stack.readAddress()
          } : n == Le.DEDUST ? {
            dexType: n,
            totalSupply: r.stack.readBigNumber(),
            bclSupply: r.stack.readBigNumber(),
            liqSupply: r.stack.readBigNumber(),
            factory: r.stack.readAddress(),
            admin: r.stack.readAddress(),
            author: r.stack.readAddress(),
            content: r.stack.readCell(),
            feeAddress: r.stack.readAddress(),
            buyFeeBasis: r.stack.readNumber(),
            sellFeeBasis: r.stack.readNumber(),
            lastTradeDate: r.stack.readNumber(),
            phase: r.stack.readNumber(),
            tonLiqCollected: r.stack.readBigNumber(),
            tradingCloseFee: r.stack.readBigNumber(),
            fullPriceTon: r.stack.readBigNumber(),
            fullPriceTonFees: r.stack.readBigNumber()
          } : {}
        })
      } catch (r) {
        return Promise.reject(r)
      }
    }, s
  }(),
  it = function() {};
it.sell = 1948989144, it.unlock = 4043133115;
var j, Lt = function() {
    function s(t, r) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = r
    }
    s.createFromAddress = function(t) {
      return new s(t)
    }, s.sellMessage = function(t, r, n, o) {
      return n === void 0 && (n = null), o === void 0 && (o = 0), q.beginCell().storeUint(it.sell, 32).storeUint(o, 64).storeCoins(t).storeCoins(r).storeMaybeRef(n).endCell()
    }, s.unlockMessage = function(t) {
      return t === void 0 && (t = 0), q.beginCell().storeUint(it.unlock, 32).storeUint(t, 64).endCell()
    };
    var e = s.prototype;
    return e.getJettonBalance = function(t) {
      try {
        return Promise.resolve(t.getState()).then(function(r) {
          return r.state.type !== "active" ? 0n : Promise.resolve(t.get("get_wallet_data", [])).then(function(n) {
            return n.stack.readBigNumber()
          })
        })
      } catch (r) {
        return Promise.reject(r)
      }
    }, e.getUnlocked = function(t) {
      try {
        return Promise.resolve(t.getState()).then(function(r) {
          return r.state.type === "active" && Promise.resolve(t.get("get_unlocked", [])).then(function(n) {
            return n.stack.readBoolean()
          })
        })
      } catch (r) {
        return Promise.reject(r)
      }
    }, e.sendSell = function(t, r, n, o, a, i, p) {
      i === void 0 && (i = null), p === void 0 && (p = 0);
      try {
        return Promise.resolve(t.internal(r, {
          sendMode: q.SendMode.PAY_GAS_SEPARATELY,
          body: s.sellMessage(o, a, i, p),
          value: n
        })).then(function() {})
      } catch (y) {
        return Promise.reject(y)
      }
    }, e.sendUnlock = function(t, r, n) {
      n === void 0 && (n = 0);
      try {
        return Promise.resolve(t.internal(r, {
          sendMode: q.SendMode.PAY_GAS_SEPARATELY,
          body: s.unlockMessage(n),
          value: re.unlockGas
        })).then(function() {})
      } catch (o) {
        return Promise.reject(o)
      }
    }, s
  }(),
  Yr = q.toNano(1e9),
  oe = q.toNano(8e8);
(function(s) {
  (function(e) {
    var t = 1000000000000000000n,
      r = 1000000000n;

    function n(o, a, i) {
      return o * a / i
    }
    e.muldivr = function(o, a, i) {
      var p = o * a,
        y = i / 2n;
      return p >= 0 ? (p + y) / i : (p - y) / i
    }, e.muldiv = n, e.muldivc = function(o, a, i) {
      return (o * a + i - 1n) / i
    }, e.mul = function(o, a) {
      return n(o, a, t)
    }, e.div = function(o, a) {
      return n(o, t, a)
    }, e.to = function(o) {
      return o * r
    }, e.from = function(o) {
      return o / r
    }
  })(s.fp || (s.fp = {}))
})(j || (j = {}));
var rt = 333333333333333333n,
  st = 333333333333333333n,
  bn = ye("toNano"),
  Oe = ye("fromNano"),
  Ae = ye("realTon"),
  vn = function() {
    function s(t) {
      Object.defineProperty(this, Ae, {
        value: Tn
      }), Object.defineProperty(this, Oe, {
        value: kn
      }), Object.defineProperty(this, bn, {
        value: wn
      }), this.thresholdTons = void 0, this.thresholdTons = t
    }
    var e = s.prototype;
    return e.calculateJettonAmount = function(t, r) {
      var n = j.fp.to(oe - t),
        o = D(this, Ae)[Ae](n),
        a = j.fp.mul(st, j.fp.to(oe)),
        i = j.fp.mul(j.fp.to(r), a + n),
        p = j.fp.mul(rt, j.fp.to(this.thresholdTons)) + j.fp.to(r) + o;
      return j.fp.from(j.fp.div(i, p))
    }, e.calculateTonAmount = function(t, r) {
      var n = j.fp.to(r),
        o = j.fp.to(oe) - j.fp.to(t),
        a = D(this, Ae)[Ae](o),
        i = j.fp.mul(rt, j.fp.to(this.thresholdTons)),
        p = j.fp.mul(st, j.fp.to(oe)),
        y = j.fp.mul(n, i + a);
      return j.fp.from(j.fp.div(y, p + n + o))
    }, e.calculateBuyAmount = function(t, r, n) {
      var o = this.calculateJettonAmount(t, r - r * n / 10000n);
      return o + t > oe ? oe - t : o
    }, e.calculateSellAmount = function(t, r, n) {
      var o = this.calculateTonAmount(t, r);
      return o - o * n / 10000n
    }, e.calculateTonsForAllCoins = function(t) {
      var r = this.calculateTonAmount(oe, oe),
        n = j.fp.muldivc(r, 10000n, 10000n - t) + 1n;
      return [j.fp.muldiv(n, t, 10000n), n]
    }, e.calculatePrice = function(t) {
      if (t == 0n) return 0;
      var r = j.fp.to(oe) - j.fp.to(t),
        n = D(this, Ae)[Ae](r),
        o = j.fp.mul(rt, j.fp.to(this.thresholdTons)) + n,
        a = j.fp.mul(st, j.fp.to(oe)) + r;
      return D(this, Oe)[Oe](j.fp.from(j.fp.div(o, a)))
    }, e.calculateMarketCap = function(t) {
      return this.calculatePrice(t) * D(this, Oe)[Oe](Yr)
    }, s
  }();

function wn(s) {
  return Number(s) * 10 ** 9
}

function kn(s) {
  return Number(s) / 10 ** 9
}

function Tn(s) {
  var e = j.fp.to(oe),
    t = j.fp.mul(444444444444444444n, j.fp.to(this.thresholdTons)),
    r = j.fp.mul(st, e),
    n = j.fp.mul(t, e);
  return j.fp.div(n, r + s) - j.fp.mul(rt, j.fp.to(this.thresholdTons))
}
var An = function(s) {
    try {
      var e, t = this,
        r = {
          send: function(n) {
            return e = n, Promise.resolve()
          }
        };
      return Promise.resolve(s(r)).then(function() {
        var n, o = {
          address: e.to.toString(),
          amount: e.value.toString(),
          stateInit: void 0,
          payload: (n = e.body) == null ? void 0 : n.toBoc().toString("base64")
        };
        return e.init && (o.stateInit = q.beginCell().store(q.storeStateInit(e.init)).endCell().toBoc().toString("base64")), {
          validUntil: Date.now() + 3e5,
          network: D(t, Ge)[Ge] ? mr.TESTNET : mr.MAINNET,
          messages: [o]
        }
      })
    } catch (n) {
      return Promise.reject(n)
    }
  },
  Sn = q.toNano(1500),
  jn = q.toNano(2.5),
  Ge = ye("testnet"),
  Se = ye("curveTon"),
  ne = ye("tokenomics"),
  ue = ye("request"),
  de = ye("minterContractFromAddress"),
  Ft = ye("walletContractFromAddress"),
  qn = function() {
    function s(t, r, n) {
      r === void 0 && (r = !1), n === void 0 && (n = !1), Object.defineProperty(this, Ft, {
        value: Cn
      }), Object.defineProperty(this, de, {
        value: En
      }), Object.defineProperty(this, ue, {
        value: An
      }), Object.defineProperty(this, Ge, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, Se, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, ne, {
        writable: !0,
        value: void 0
      }), this.client = void 0, D(this, Ge)[Ge] = r, D(this, Se)[Se] = n ? jn : Sn, D(this, ne)[ne] = new vn(D(this, Se)[Se]), this.client = new _n({
        baseUrl: r ? "https://testnet.tonapi.io" : "https://tonapi.io",
        apiKey: t
      })
    }
    var e = s.prototype;
    return e.sendDeployJetton = function(t, r, n, o, a, i, p, y) {
      p === void 0 && (p = null), y === void 0 && (y = 0);
      try {
        var f = this.client.open(wr.createFromAddress(r));
        return Promise.resolve(f.getConfig()).then(function(u) {
          var B = u.deployFee + re.deployJettonGas + re.initialGas;
          a && (B += u.agentDeployFee), i > 0n && (B += i + re.buyGas);
          var C = Kr(o);
          return Promise.resolve(f.sendDeployJetton(t, B, n, C, a, i, p, y)).then(function() {})
        })
      } catch (u) {
        return Promise.reject(u)
      }
    }, e.sendBuy = function(t, r, n, o, a, i) {
      a === void 0 && (a = null), i === void 0 && (i = 0);
      try {
        return Promise.resolve(D(this, de)[de](r).sendBuy(t, n, o, null, a, i)).then(function() {})
      } catch (p) {
        return Promise.reject(p)
      }
    }, e.sendSell = function(t, r, n, o, a, i) {
      a === void 0 && (a = null), i === void 0 && (i = 0);
      try {
        var p = Lt.createFromAddress(r),
          y = this.client.open(p);
        return Promise.resolve(y.sendSell(t, re.sellGas, n, o, a, i)).then(function() {})
      } catch (f) {
        return Promise.reject(f)
      }
    }, e.sendUnlock = function(t, r, n) {
      n === void 0 && (n = 0);
      try {
        var o = Lt.createFromAddress(r),
          a = this.client.open(o);
        return Promise.resolve(a.sendUnlock(t, n)).then(function() {})
      } catch (i) {
        return Promise.reject(i)
      }
    }, e.getThresholdTons = function() {
      return D(this, Se)[Se]
    }, e.getTonSupply = function(t) {
      return D(this, ne)[ne].calculateTonAmount(t, t)
    }, e.getMaxSupply = function() {
      return Yr
    }, e.getThresholdSupply = function() {
      return oe
    }, e.getPrice = function(t) {
      return D(this, ne)[ne].calculatePrice(t)
    }, e.getMarketCap = function(t) {
      return D(this, ne)[ne].calculateMarketCap(t)
    }, e.getBuyAmount = function(t, r, n) {
      return D(this, ne)[ne].calculateBuyAmount(t, r, n)
    }, e.getSellAmount = function(t, r, n) {
      return D(this, ne)[ne].calculateSellAmount(t, r, n)
    }, e.getWalletAddress = function(t, r) {
      try {
        return Promise.resolve(D(this, de)[de](t).getWalletAddress(r))
      } catch (n) {
        return Promise.reject(n)
      }
    }, e.getTotalSupply = function(t) {
      try {
        return Promise.resolve(D(this, de)[de](t).getTotalSupply())
      } catch (r) {
        return Promise.reject(r)
      }
    }, e.getBlumBclData = function(t) {
      try {
        return Promise.resolve(D(this, de)[de](t).getBclData())
      } catch (r) {
        return Promise.reject(r)
      }
    }, e.getUnlocked = function(t) {
      try {
        return Promise.resolve(D(this, Ft)[Ft](t).getUnlocked())
      } catch (r) {
        return Promise.reject(r)
      }
    }, e.getDeployJettonRequest = function(t, r, n, o, a, i, p) {
      i === void 0 && (i = null), p === void 0 && (p = 0);
      try {
        var y = this;
        return Promise.resolve(D(y, ue)[ue](function(f) {
          return y.sendDeployJetton(f, t, r, n, o, a, i, p)
        }))
      } catch (f) {
        return Promise.reject(f)
      }
    }, e.getBuyRequest = function(t, r, n, o, a) {
      o === void 0 && (o = null), a === void 0 && (a = 0);
      try {
        var i = this;
        return Promise.resolve(D(i, ue)[ue](function(p) {
          return i.sendBuy(p, t, r, n, o, a)
        }))
      } catch (p) {
        return Promise.reject(p)
      }
    }, e.getSellRequest = function(t, r, n, o, a) {
      o === void 0 && (o = null), a === void 0 && (a = 0);
      try {
        var i = this;
        return Promise.resolve(D(i, ue)[ue](function(p) {
          return i.sendSell(p, t, r, n, o, a)
        }))
      } catch (p) {
        return Promise.reject(p)
      }
    }, e.getUnlockRequest = function(t, r) {
      r === void 0 && (r = 0);
      try {
        var n = this;
        return Promise.resolve(D(n, ue)[ue](function(o) {
          return n.sendUnlock(o, t, r)
        }))
      } catch (o) {
        return Promise.reject(o)
      }
    }, e.getJettonWalletAddress = function(t, r) {
      try {
        var n = this.client.open(Vr.createFromAddress(t));
        return Promise.resolve(n.getWalletAddress(r))
      } catch (o) {
        return Promise.reject(o)
      }
    }, e.getFactoryConfig = function(t) {
      try {
        var r = this.client.open(wr.createFromAddress(t));
        return Promise.resolve(r.getConfig())
      } catch (n) {
        return Promise.reject(n)
      }
    }, s
  }();

function En(s) {
  var e = Vr.createFromAddress(s);
  return this.client.open(e)
}

function Cn(s) {
  var e = Lt.createFromAddress(s);
  return this.client.open(e)
}
const Qr = () => {
    const {
      getAddress: s,
      tonConnectSender: e,
      createGetWaitForLaunchStatusUntilOk: t,
      createGetReviewStepInfo: r
    } = We(), {
      TON_API_TOKEN: n,
      getTransactionStatus: o,
      getUserJettonBalance: a
    } = zt(), {
      getMinReceive: i,
      wrapWithCache: p,
      memepadApi: y
    } = ut(), {
      isProd: f
    } = Bs(), u = new qn(n, !1, !f.value), B = l => +String(l) / 1e4, C = {
      LAUNCH_STATUS_CHECK: 6e3,
      BUY_STATUS_CHECK: 6e3,
      SELL_STATUS_CHECK: 6e3,
      UNLOCK_STATUS_CHECK: 6e3
    }, x = {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: S(re.buyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: S(re.sellGas),
      MEMEPAD_JETTON_DEPLOY_NETWORK_FEE: S(re.deployJettonGas),
      MEMEPAD_JETTON_INITIAL_NETWORK_FEE: S(re.initialGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: S(re.unlockGas)
    }, v = {
      LAUNCH_FEE: new $(.0086),
      LAUNCH_BUY_FEE: new $(.009),
      BUY_FEE: new $(.0046),
      SELL_FEE: new $(.0044),
      UNLOCK_FEE: new $(.004)
    }, F = {
      buyNetworkFee: x.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: x.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      deployNetworkFee: x.MEMEPAD_JETTON_DEPLOY_NETWORK_FEE,
      initialNetworkFee: x.MEMEPAD_JETTON_INITIAL_NETWORK_FEE,
      unlockNetworkFee: x.MEMEPAD_JETTON_UNLOCK_NETWORK_FEE,
      walletNetworkLaunchFee: v.LAUNCH_FEE,
      walletNetworkLaunchBuyFee: v.LAUNCH_BUY_FEE,
      walletNetworkBuyFee: v.BUY_FEE,
      walletNetworkSellFee: v.SELL_FEE,
      walletNetworkUnlockFee: v.UNLOCK_FEE
    }, N = ({
      hasShare: l
    }) => F.deployNetworkFee.plus(l ? 0 : F.initialNetworkFee), H = ({
      referrerToken: l
    }) => q.beginCell().storeUint(1675682413, 32).storeStringTail(l).endCell(), z = async l => {
      const m = await K(async () => await u.getTotalSupply(s(l)))();
      return E(m) ? O(S(m.data)) : m
    }, V = p(({
      masterAddress: l
    }) => `blumSdk:factoryConfig:${l.toString()}`, async ({
      masterAddress: l
    }) => {
      const m = await K(async () => await u.getFactoryConfig(s(l)))();
      return E(m) ? O(m.data) : m
    }), se = p(({
      masterAddress: l
    }) => `blumSdk:bclData:${l.toString()}`, async ({
      masterAddress: l
    }) => {
      const m = S(u.getThresholdSupply()),
        _ = S(u.getMaxSupply()),
        h = _.minus(m),
        A = S(u.getThresholdTons()),
        k = await V({
          masterAddress: l
        });
      if (!E(k)) return k;
      const {
        buyFeeBasis: P
      } = k.data, I = A.div(new $(1).minus(B(P))).toDecimalPlaces(9, $.ROUND_UP), U = k.data, Y = S(k.data.agentDeployFee);
      return O({
        tokenForDexWithFees: I,
        tokenForDex: A,
        bclSupply: m,
        maxSupply: _,
        liqSupply: h,
        factoryConfig: U,
        aiAgentDeployFee: Y
      })
    }), ie = async ({
      jettonAddress: l,
      masterAddress: m
    }) => {
      const _ = await se({
        masterAddress: m
      });
      if (!E(_)) return _;
      const {
        bclSupply: h,
        tokenForDex: A,
        liqSupply: k
      } = _.data, P = await z(l);
      if (!E(P)) return P;
      const I = P.data,
        U = new $(h).minus(I),
        Y = S(u.getTonSupply(G(I))),
        Z = Y.div(A).times(100);
      return O({
        tokenForDex: A,
        tokenCollected: Y,
        tokenCollectedPercent: Z,
        bclSupply: h,
        liqSupply: k,
        totalSupply: I,
        availableSupply: U
      })
    }, Q = async ({
      masterAddress: l,
      tons: m
    }) => {
      const _ = G(new $(m)),
        h = await se({
          masterAddress: l
        });
      if (!E(h)) return h;
      const {
        tokenForDex: A,
        bclSupply: k,
        tokenForDexWithFees: P,
        maxSupply: I
      } = h.data, U = await V({
        masterAddress: l
      });
      if (!E(U)) return U;
      const {
        buyFeeBasis: Y
      } = U.data, Z = S(u.getBuyAmount(0n, _, Y)), Te = Z, Ce = Z, xe = k.minus(Te), le = S(u.getTonSupply(G(Te))), ar = new $(u.getPrice(G(Te))), ls = new $(ar).times(I), ms = le.div(A).times(100), us = Z.div(k).times(100), ds = new $(m).minus(le);
      return O({
        share: new $(m),
        tokenForDexWithFees: P,
        tokenForDex: A,
        tokenCollected: le,
        availableSupply: xe,
        maxSupply: I,
        tokenCollectedPercent: ms,
        jettonReceivePercent: us,
        priceToken: ar,
        marketCapToken: ls,
        platformFee: ds,
        minReceive: Ce,
        bclData: h.data
      })
    }, X = p(({
      jettonAddress: l,
      userAddress: m
    }) => `blumSdk:jettonWalletAddress:${l.toString()}:${m.toString()}`, async ({
      jettonAddress: l,
      userAddress: m
    }) => await K(async () => await u.getJettonWalletAddress(s(l), s(m)))()), ke = async ({
      masterAddress: l,
      form: m,
      tonConnectUI: _,
      referrerToken: h
    }) => {
      const A = Dr(m, mt.STONFI),
        k = await y.saveMemepadJettonInfo(A);
      if (!E(k)) return k;
      const P = e(_),
        I = k.data.queryId,
        U = Le.STONFI,
        Y = {
          name: m.name,
          description: m.description,
          image: ot(m.iconFileKey),
          symbol: m.ticker,
          decimals: 9
        };
      A.socials.length && (Y.social_links = JSON.stringify(A.socials.map(le => le.url))), A.bannerFileKey && (Y.cover_image = ot(A.bannerFileKey));
      const Z = h ? H({
          referrerToken: h
        }) : void 0,
        Te = m.aiAgentEnable,
        Ce = await K(async () => await u.sendDeployJetton(P, s(l), U, Y, Te, G(new $(m.share)), Z, I))();
      if (!E(Ce)) return Ce;
      const xe = (await P.getResult()).hash;
      return O({
        queryId: I,
        transactionHash: xe
      })
    }, St = t(o, C.LAUNCH_STATUS_CHECK), jt = async ({
      tons: l,
      jettonAddress: m,
      masterAddress: _
    }) => {
      const h = await z(m);
      if (!E(h)) return h;
      const A = h.data,
        k = await V({
          masterAddress: _
        });
      if (!E(k)) return k;
      const {
        buyFeeBasis: P
      } = k.data, I = S(u.getBuyAmount(G(A), G(l), P)), U = I, Y = i(I), Z = l.times(B(P));
      return O({
        maxReceive: U,
        minReceive: Y,
        platformFee: Z,
        additionalInfo: void 0
      })
    }, qt = async ({
      jettons: l,
      jettonAddress: m,
      masterAddress: _
    }) => {
      const h = await z(m);
      if (!E(h)) return h;
      const A = h.data,
        k = await V({
          masterAddress: _
        });
      if (!E(k)) return k;
      const {
        sellFeeBasis: P
      } = k.data, I = S(u.getSellAmount(G(A), G(l), P)), U = I, Y = i(I), Z = I.div(1 - B(P)).minus(I);
      return O({
        maxReceive: U,
        minReceive: Y,
        platformFee: Z,
        additionalInfo: void 0
      })
    }, Et = async ({
      tons: l,
      jettonAddress: m,
      tradeInfoParams: _,
      tonConnectUI: h,
      referrerToken: A
    }) => {
      const k = e(h),
        P = A ? H({
          referrerToken: A
        }) : void 0,
        I = await K(async () => await u.sendBuy(k, s(m), G(l), G(_.minReceive), P))();
      return E(I) ? O((await k.getResult()).hash) : I
    }, Ct = async ({
      jettons: l,
      jettonAddress: m,
      tradeInfoParams: _,
      userAddress: h,
      tonConnectUI: A,
      referrerToken: k
    }) => {
      const P = e(A),
        I = k ? H({
          referrerToken: k
        }) : void 0,
        U = await X({
          jettonAddress: m,
          userAddress: h
        });
      if (!E(U)) return U;
      const Y = U.data,
        Z = await K(async () => await u.sendSell(P, Y, G(l), G(_.minReceive), I))();
      return E(Z) ? O((await P.getResult()).hash) : Z
    }, $t = () => Re(({
      transactionHash: l
    }) => o({
      transactionHash: l
    }), () => {}, C.BUY_STATUS_CHECK), Bt = () => Re(({
      transactionHash: l
    }) => o({
      transactionHash: l
    }), () => {}, C.SELL_STATUS_CHECK), Pt = async ({
      jettonAddress: l,
      userAddress: m
    }) => {
      const _ = await a({
        jettonAddress: l,
        userAddress: m
      });
      if (E(_) && _.data.isZero()) return O(!1);
      const h = await X({
        jettonAddress: l,
        userAddress: m
      });
      if (!E(h)) return h;
      const A = h.data,
        k = await K(async () => await u.getUnlocked(A))();
      if (!E(k)) return k;
      const P = !k.data;
      return O(P)
    }, or = async ({
      jettonAddress: l,
      userAddress: m,
      tonConnectUI: _
    }) => {
      const h = e(_),
        A = await X({
          jettonAddress: l,
          userAddress: m
        });
      if (!E(A)) return A;
      const k = A.data,
        P = await K(async () => await u.sendUnlock(h, k))();
      return E(P) ? O((await h.getResult()).hash) : P
    }, g = ({
      transactionHash: l
    }) => o({
      transactionHash: l
    }), b = () => Re(g, () => {}, C.UNLOCK_STATUS_CHECK), R = r({
      getFees: ({
        share: l,
        overview: m
      }) => {
        const _ = !new $(l).isZero(),
          {
            buyNetworkFee: h,
            walletNetworkLaunchBuyFee: A,
            walletNetworkLaunchFee: k
          } = F,
          P = N({
            hasShare: _
          }),
          I = S(m.bclData.factoryConfig.deployFee);
        return {
          buyNetworkFee: h,
          launchNetworkFee: P,
          launchPlatformFee: I,
          walletNetworkLaunchFee: k,
          walletNetworkLaunchBuyFee: A
        }
      }
    });
    return {
      getJettonTotalSupply: z,
      getFactoryConfig: V,
      getBclData: se,
      createJetton: ke,
      getUnlockEnabled: Pt,
      unlockWallet: or,
      getJettonOverview: Q,
      getJettonBclData: ie,
      getBuyInfo: jt,
      getSellInfo: qt,
      buyJetton: Et,
      sellJetton: Ct,
      getWaitForBuyStatus: $t,
      getWaitForSellStatus: Bt,
      getUnlockStatus: g,
      getWaitForUnlockStatus: b,
      getWaitForCreateStatus: St,
      getMaxShareAmount: ({
        tokenBalance: l,
        overview: m
      }) => {
        const {
          buyNetworkFee: _,
          walletNetworkLaunchBuyFee: h
        } = F, A = N({
          hasShare: !0
        }), k = S(m.bclData.factoryConfig.deployFee), P = l.value.minus(A.plus(k).plus(h).plus(_)), I = m.bclData.tokenForDexWithFees;
        return I.lt(P) ? I : P.gte(0) ? P : new $(0)
      },
      getMaxBuyAmount: ({
        tokenBalance: l
      }) => {
        const {
          buyNetworkFee: m,
          walletNetworkBuyFee: _
        } = F;
        return l.value.minus(m).minus(_)
      },
      getReviewInfo: R,
      fees: F
    }
  },
  $n = ({
    addresses: s,
    tonBalance: e,
    referrerToken: t
  }) => {
    if (!s) return;
    const {
      getJettonOverview: r,
      createJetton: n,
      getWaitForCreateStatus: o,
      getMaxShareAmount: a,
      getReviewInfo: i
    } = Qr(), p = s.masterAddresses[mt.STONFI], y = Je().tonConnectUI.value;
    return {
      getJettonOverview: ({
        tons: f
      }) => r({
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
        share: u,
        jettonTicker: B,
        withAiAgent: C
      }) => i({
        overview: f,
        share: u,
        jettonTicker: B,
        tonBalance: e,
        withAiAgent: C
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
  Bn = ({
    jetton: s,
    tonBalance: e,
    jettonBalance: t,
    referrerToken: r
  }) => {
    const {
      mustGetUserWalletAddress: n,
      getTradeStateControls: o,
      createGetUnlockInfo: a
    } = We(), {
      getUserJettonBalance: i
    } = zt(), {
      slippage: p
    } = ut(), {
      getUnlockEnabled: y,
      getWaitForUnlockStatus: f,
      unlockWallet: u,
      buyJetton: B,
      sellJetton: C,
      getWaitForBuyStatus: x,
      getWaitForSellStatus: v,
      getBuyInfo: F,
      getSellInfo: N,
      getMaxBuyAmount: H,
      fees: z
    } = Qr(), M = s.address, V = s.masterContractAddress, ae = Je().tonConnectUI.value, se = o(), ie = a({
      getFees: () => z
    });
    return {
      getUserJettonBalance: () => i({
        jettonAddress: M,
        userAddress: n()
      }),
      getUnlockEnabled: () => y({
        jettonAddress: M,
        userAddress: n()
      }),
      getWaitForUnlockStatus: () => f(),
      unlockWallet: () => u({
        jettonAddress: M,
        userAddress: n(),
        tonConnectUI: ae
      }),
      getUnlockInfo: () => ie({
        tonBalance: e,
        jettonBalance: t
      }),
      getSlippage: () => p.value,
      updateSlippage: Q => p.value = Q,
      buyJetton: ({
        tons: Q,
        tradeInfoParams: W
      }) => B({
        tons: Q,
        jettonAddress: M,
        tradeInfoParams: W,
        tonConnectUI: ae,
        referrerToken: r
      }),
      sellJetton: ({
        jettons: Q,
        tradeInfoParams: W
      }) => C({
        jettons: Q,
        jettonAddress: M,
        userAddress: n(),
        tradeInfoParams: W,
        tonConnectUI: ae,
        referrerToken: r
      }),
      getWaitForBuyStatus: () => x(),
      getWaitForSellStatus: () => v(),
      tradeStateControls: {
        getEmptyState: ({
          operation: Q
        }) => se.getEmptyState({
          tonBalance: e,
          jettonBalance: t,
          operation: Q
        }),
        getImmediateState: ({
          operation: Q,
          amount: W
        }) => se.getImmediateState({
          amount: W,
          tonBalance: e,
          jettonBalance: t,
          operation: Q,
          jettonTicker: s.ticker,
          fees: z
        }),
        getState: ({
          operation: Q,
          amount: W
        }) => se.getState({
          tonBalance: e,
          jettonBalance: t,
          operation: Q,
          amount: W,
          jettonTicker: s.ticker,
          fees: z,
          getBuyInfo: ({
            tons: X
          }) => F({
            tons: X,
            jettonAddress: M,
            masterAddress: V
          }),
          getSellInfo: ({
            jettons: X
          }) => N({
            jettons: X,
            jettonAddress: M,
            masterAddress: V
          })
        })
      },
      getMaxBuyAmount: H
    }
  };
var ce = {},
  _t = {},
  bt = {},
  vt = {};
Object.defineProperty(vt, "__esModule", {
  value: !0
});
vt.normalizeCoin = Pn;
vt.normalizeCoinEvent = Rn;
const je = q;

function Pn(s) {
  return {
    id: s.id,
    address: je.Address.parse(s.address),
    metadata: s.metadata,
    totalSupply: BigInt(s.totalSupply),
    bclSupply: BigInt(s.bclSupply),
    liqSupply: BigInt(s.liqSupply),
    lastTradeDate: s.lastTradeDate,
    authorAddress: s.authorAddress === "" ? null : je.Address.parse(s.authorAddress),
    tradingEnabled: s.tradingEnabled,
    tonLiqCollected: BigInt(s.tonLiqCollected),
    referral: s.referral,
    createdAt: s.createdAt,
    tradingCloseFee: BigInt(s.tradingCloseFee),
    routerAddress: je.Address.parse(s.routerAddress)
  }
}

function Rn(s) {
  if (s.type === "buy") return {
    type: "buy",
    trader: s.trader === "" ? null : je.Address.parse(s.trader),
    tonValue: BigInt(s.tonValue),
    supplyDelta: BigInt(s.supplyDelta),
    newSupply: BigInt(s.newSupply),
    tonLiqCollected: BigInt(s.tonLiqCollected),
    referral: s.referral
  };
  if (s.type === "sell") return {
    type: "sell",
    trader: s.trader === "" ? null : je.Address.parse(s.trader),
    tonValue: BigInt(s.tonValue),
    supplyDelta: BigInt(s.supplyDelta),
    newSupply: BigInt(s.newSupply),
    tonLiqCollected: BigInt(s.tonLiqCollected),
    referral: s.referral
  };
  if (s.type === "sendLiq") return {
    type: "send_liq",
    tonLiq: BigInt(s.tonLiq),
    jettonLiq: BigInt(s.jettonLiq)
  };
  if (s.type === "deployment") return {
    type: "deployment",
    metadata: s.metadata,
    totalSupply: BigInt(s.totalSupply),
    bclSupply: BigInt(s.bclSupply),
    liqSupply: BigInt(s.liqSupply),
    lastTradeDate: s.lastTradeDate,
    authorAddress: s.authorAddress === "" ? null : je.Address.parse(s.authorAddress),
    tradingEnabled: s.tradingEnabled,
    tonLiqCollected: BigInt(s.tonLiqCollected),
    referral: s.referral,
    createdAt: s.createdAt,
    tradingCloseFee: BigInt(s.tradingCloseFee),
    routerAddress: je.Address.parse(s.routerAddress)
  };
  throw new Error("Unknown BCL event: " + JSON.stringify(s))
}
var wt = {};
const Nn = Ps(Rs);
Object.defineProperty(wt, "__esModule", {
  value: !0
});
wt.OfetchHttpProvider = void 0;
const kr = Nn;
class In {
  get(e, t) {
    return (0, kr.ofetch)(e, {
      query: t.query
    })
  }
  post(e, t) {
    return (0, kr.ofetch)(e, {
      method: "POST",
      body: JSON.stringify(t)
    })
  }
}
wt.OfetchHttpProvider = In;
Object.defineProperty(bt, "__esModule", {
  value: !0
});
bt.BclClient = void 0;
const Tr = q,
  Qe = vt,
  Fn = wt;
class xn {
  constructor(e) {
    this.fetch = async (t, r) => await this.httpProvider.get(this.endpoint + t, {
      query: r == null ? void 0 : r.query
    }), this.fetchCoins = async t => {
      const r = await this.fetch("/getCoins", {
        query: t ?? {}
      });
      return {
        items: r.items.map(Qe.normalizeCoin),
        cursor: r.cursor
      }
    }, this.fetchCoin = async t => {
      let r = await this.fetch("/getCoin/" + t.toString({
        urlSafe: !0
      }));
      return (0, Qe.normalizeCoin)(r)
    }, this.fetchCoinEvents = async (t, r) => {
      const n = await this.fetch("/getCoinEvents/" + t.toString({
        urlSafe: !0
      }), {
        query: r ?? {}
      });
      return {
        items: n.items.map(o => ({
          id: o.id,
          lt: BigInt(o.lt),
          txUtime: o.txUtime,
          txHash: o.txHash,
          queryId: BigInt(o.queryId),
          event: (0, Qe.normalizeCoinEvent)(o.event),
          coinAddress: Tr.Address.parse(o.coinAddress)
        })),
        cursor: n.cursor
      }
    }, this.fetchServerEvents = async t => {
      const r = await this.fetch("/getServerEvents", {
        query: t ?? {}
      });
      return {
        items: r.items.map(n => ({
          id: n.id,
          lt: BigInt(n.lt),
          txUtime: n.txUtime,
          txHash: n.txHash,
          queryId: BigInt(n.queryId),
          event: (0, Qe.normalizeCoinEvent)(n.event),
          coinAddress: Tr.Address.parse(n.coinAddress)
        })),
        cursor: r.cursor
      }
    }, this.endpoint = e.endpoint, this.httpProvider = e.httpProvider ?? new Fn.OfetchHttpProvider
  }
}
bt.BclClient = xn;
var Ie = {},
  Ee = {};
Object.defineProperty(Ee, "__esModule", {
  value: !0
});
Ee.Constants = void 0;
const Xe = q;
Ee.Constants = {
  CoinDeploymentGas: (0, Xe.toNano)("0.05"),
  CoinBuyGas: (0, Xe.toNano)("0.05"),
  CoinSellGas: (0, Xe.toNano)("0.06"),
  WalletUnlockGas: (0, Xe.toNano)("0.05")
};
var we = {};
Object.defineProperty(we, "__esModule", {
  value: !0
});
we.crc32 = Xr;
we.crc32str = Dn;
const On = -306674912;
let ct;

function Mn() {
  ct = new Int32Array(256);
  for (let s = 0; s < 256; s++) {
    let e = s;
    for (let t = 8; t > 0; --t) e = e & 1 ? e >>> 1 ^ On : e >>> 1;
    ct[s] = e
  }
}

function Xr(s) {
  let e = 4294967295;
  ct === void 0 && Mn();
  for (let t = 0; t < s.length; ++t) e = ct[(e ^ s[t]) & 255] ^ e >>> 8;
  return (e ^ -1) >>> 0
}

function Dn(s) {
  return Xr(be.from(s))
}
var Ke = {};
Object.defineProperty(Ke, "__esModule", {
  value: !0
});
Ke.BclWallet = void 0;
const Ze = q,
  Ar = Ee,
  Sr = we;
class Xt {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Xt(e)
  }
  async getData(e) {
    const t = await e.get("get_wallet_data", []);
    return {
      balance: t.stack.readBigNumber(),
      owner: t.stack.readAddress()
    }
  }
  async sendSellCoins(e, t, r) {
    await e.internal(t, {
      value: Ar.Constants.CoinSellGas,
      sendMode: Ze.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, Ze.beginCell)().storeUint((0, Sr.crc32str)("op::sell"), 32).storeUint(r.queryId ?? 0, 64).storeCoins(r.amount).storeCoins(r.minReceive).storeMaybeRef(r.referral).endCell()
    })
  }
  async sendUnlockWallet(e, t, r) {
    await e.internal(t, {
      value: Ar.Constants.WalletUnlockGas,
      sendMode: Ze.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, Ze.beginCell)().storeUint((0, Sr.crc32str)("op::unlock_wallet"), 32).storeUint(r.queryId ?? 0, 64).endCell()
    })
  }
  async getTransfersEnabled(e) {
    return (await e.get("get_transfers_enabled", [])).stack.readBoolean()
  }
}
Ke.BclWallet = Xt;
Object.defineProperty(Ie, "__esModule", {
  value: !0
});
Ie.BclJetton = void 0;
Ie.parseBclEvent = Ln;
const xt = q,
  Un = Ee,
  nt = we,
  Gn = Ke;

function Ln(s) {
  let e = s.beginParse(),
    t = e.loadUint(32);
  if (t === (0, nt.crc32str)("send_liq_log")) return {
    type: "send_liq",
    tonLiq: e.loadCoins(),
    jettonLiq: e.loadCoins()
  };
  if (t === (0, nt.crc32str)("sell_log")) return {
    type: "sell",
    trader: e.loadAddress(),
    tonValue: e.loadCoins(),
    supplyDelta: e.loadCoins(),
    newSupply: e.loadCoins(),
    tonLiqCollected: e.loadCoins(),
    referral: e.loadMaybeRef()
  };
  if (t === (0, nt.crc32str)("buy_log")) return {
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
      cell: (0, xt.beginCell)().storeAddress(t).endCell()
    }])).stack.readAddress()
  }
  async getCoinPrice(e) {
    return (await e.get("coin_price", [])).stack.readBigNumber()
  }
  async getCoinsForTons(e, t) {
    const r = await e.get("coins_for_tons", [{
      type: "int",
      value: t
    }]);
    return {
      fees: r.stack.readBigNumber(),
      coins: r.stack.readBigNumber()
    }
  }
  async getTonsForCoins(e, t) {
    const r = await e.get("tons_for_coins", [{
      type: "int",
      value: t
    }]);
    return {
      fees: r.stack.readBigNumber(),
      tons: r.stack.readBigNumber()
    }
  }
  async sendBuy(e, t, r) {
    let n = (0, xt.beginCell)().storeUint((0, nt.crc32str)("op::buy"), 32).storeUint(r.queryId ?? 0, 64).storeCoins(r.minReceive).storeMaybeRef(r.referral);
    r.buyerAddress && n.storeAddress(r.buyerAddress), await e.internal(t, {
      value: r.tons + Un.Constants.CoinBuyGas,
      sendMode: xt.SendMode.PAY_GAS_SEPARATELY,
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
    const r = await this.getWalletAddress(e, t);
    return e.open(Gn.BclWallet.createFromAddress(r))
  }
}
Ie.BclJetton = Zt;
var He = {},
  Fe = {},
  kt = {};
Object.defineProperty(kt, "__esModule", {
  value: !0
});
kt.sha256ToBigint = void 0;
const Jn = Ns(),
  Wn = s => BigInt("0x" + (0, Jn.createHash)("sha256").update(s).digest().toString("hex"));
kt.sha256ToBigint = Wn;
Object.defineProperty(Fe, "__esModule", {
  value: !0
});
Fe.storeSnakeContentData = ts;
Fe.loadSnakeContentData = rs;
Fe.storeTokenOnchainContent = Hn;
Fe.loadTokenOnchainContent = zn;
const pt = Gr,
  Kn = kt,
  Zr = 0,
  es = 0;

function ts(s) {
  return e => e.storeUint(es, 8).storeStringTail(s)
}

function rs(s) {
  if (s.loadUint(8) !== es) throw new Error("Not snake ContentData");
  return s.loadStringTail()
}
const ss = {
  serialize: (s, e) => {
    e.storeRef((0, pt.beginCell)().store(ts(s)).endCell())
  },
  parse: s => rs(s.loadRef().beginParse())
};

function Hn(s) {
  return e => {
    const t = pt.Dictionary.empty(pt.Dictionary.Keys.BigUint(256), ss);
    for (const r in s) s[r] && t.set((0, Kn.sha256ToBigint)(r), s[r]);
    return e.storeUint(Zr, 8).storeDict(t)
  }
}

function zn(s) {
  if (s.loadUint(8) !== Zr) throw new Error("Not on-chain content");
  return s.loadDict(pt.Dictionary.Keys.BigUint(256), ss)
}
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.BclMaster = void 0;
const Be = q,
  jr = Ee,
  qr = we,
  Vn = Fe;
class er {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new er(e)
  }
  async sendDeployCoin(e, t, r, n) {
    let o = (0, Be.beginCell)().store((0, Vn.storeTokenOnchainContent)({
        name: r.name,
        description: r.description,
        image: r.imageUrl,
        symbol: r.symbol,
        decimals: "9",
        social_links: JSON.stringify(r.socialLinks),
        ...r.extraMetadata
      })).endCell(),
      a = (0, Be.beginCell)().storeUint((0, qr.crc32str)("op::deploy_coin"), 32).storeUint(r.queryId ?? 0, 64).storeRef(o).storeAddress(r.authorAddress).storeRef(r.referral ?? (0, Be.beginCell)().endCell()),
      i = (0, Be.beginCell)().storeUint(3547469196, 32).storeUint(r.queryId ?? 0, 64).endCell();
    if (n != null && n.firstBuy) {
      let f = (0, Be.beginCell)().storeUint((0, qr.crc32str)("op::buy"), 32).storeUint(n.firstBuy.queryId ?? 0, 64).storeCoins(n.firstBuy.minReceive).storeMaybeRef(n.firstBuy.referral);
      n.firstBuy.buyerAddress && f.storeAddress(n.firstBuy.buyerAddress), i = f.endCell()
    }
    a.storeMaybeRef(i);
    let p;
    n != null && n.forceDeploymentFee ? p = n.forceDeploymentFee : p = (await this.getMasterData(e)).deploymentFee;
    let y = p + jr.Constants.CoinDeploymentGas;
    n != null && n.firstBuy && (y += jr.Constants.CoinBuyGas + n.firstBuy.tons), await e.internal(t, {
      value: y,
      sendMode: Be.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: a.endCell()
    })
  }
  async getCoinsForTons(e, t) {
    let r = await e.get("coins_for_tons", [{
      type: "int",
      value: t
    }]);
    return {
      fees: r.stack.readBigNumber(),
      coins: r.stack.readBigNumber()
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
He.BclMaster = er;
Object.defineProperty(_t, "__esModule", {
  value: !0
});
_t.BclSDK = void 0;
const Yn = bt,
  Qn = Ie,
  Ot = He;
class tr {
  constructor(e) {
    this.apiProvider = e.apiProvider, this.api = new Yn.BclClient(e.clientOptions), this.masterAddress = e.masterAddress
  }
  openCoin(e) {
    return this.apiProvider.open(Qn.BclJetton.createFromAddress(e))
  }
  async openUserCoinWallet(e, t) {
    return await this.openCoin(e).getUserWallet(t)
  }
  async deployCoin(e, t, r) {
    await this.apiProvider.open(Ot.BclMaster.createFromAddress(this.masterAddress)).sendDeployCoin(e, t, r)
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
    return new tr(e)
  }
}
_t.BclSDK = tr;
var Tt = {},
  L = {};
Object.defineProperty(L, "__esModule", {
  value: !0
});
var ns = L.Api = os = L.HttpClient = L.ContentType = L.PoolImplementationType = L.TrustType = L.JettonVerificationType = L.BouncePhaseType = L.ComputeSkipReason = L.AccStatusChange = L.TransactionType = L.AccountStatus = void 0,
  Er;
(function(s) {
  s.Nonexist = "nonexist", s.Uninit = "uninit", s.Active = "active", s.Frozen = "frozen"
})(Er || (L.AccountStatus = Er = {}));
var Cr;
(function(s) {
  s.TransOrd = "TransOrd", s.TransTickTock = "TransTickTock", s.TransSplitPrepare = "TransSplitPrepare", s.TransSplitInstall = "TransSplitInstall", s.TransMergePrepare = "TransMergePrepare", s.TransMergeInstall = "TransMergeInstall", s.TransStorage = "TransStorage"
})(Cr || (L.TransactionType = Cr = {}));
var $r;
(function(s) {
  s.AcstUnchanged = "acst_unchanged", s.AcstFrozen = "acst_frozen", s.AcstDeleted = "acst_deleted"
})($r || (L.AccStatusChange = $r = {}));
var Br;
(function(s) {
  s.CskipNoState = "cskip_no_state", s.CskipBadState = "cskip_bad_state", s.CskipNoGas = "cskip_no_gas"
})(Br || (L.ComputeSkipReason = Br = {}));
var Pr;
(function(s) {
  s.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", s.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", s.TrPhaseBounceOk = "TrPhaseBounceOk"
})(Pr || (L.BouncePhaseType = Pr = {}));
var Rr;
(function(s) {
  s.Whitelist = "whitelist", s.Blacklist = "blacklist", s.None = "none"
})(Rr || (L.JettonVerificationType = Rr = {}));
var Nr;
(function(s) {
  s.Whitelist = "whitelist", s.Graylist = "graylist", s.Blacklist = "blacklist", s.None = "none"
})(Nr || (L.TrustType = Nr = {}));
var Ir;
(function(s) {
  s.Whales = "whales", s.Tf = "tf", s.LiquidTF = "liquidTF"
})(Ir || (L.PoolImplementationType = Ir = {}));
var _e;
(function(s) {
  s.Json = "application/json", s.FormData = "multipart/form-data", s.UrlEncoded = "application/x-www-form-urlencoded", s.Text = "text/plain"
})(_e || (L.ContentType = _e = {}));
class Xn {
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
      [_e.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
      [_e.Text]: e => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
      [_e.FormData]: e => Object.keys(e || {}).reduce((t, r) => {
        const n = e[r];
        return t.append(r, n instanceof Blob ? n : typeof n == "object" && n !== null ? JSON.stringify(n) : `${n}`), t
      }, new FormData),
      [_e.UrlEncoded]: e => this.toQueryString(e)
    });
    d(this, "createAbortSignal", e => {
      if (this.abortControllers.has(e)) {
        const r = this.abortControllers.get(e);
        return r ? r.signal : void 0
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
      path: r,
      type: n,
      query: o,
      format: a,
      baseUrl: i,
      cancelToken: p,
      ...y
    }) => {
      const f = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        u = this.mergeRequestParams(y, f),
        B = o && this.toQueryString(o),
        C = this.contentFormatters[n || _e.Json],
        x = a || u.format;
      return this.customFetch(`${i||this.baseUrl||""}${r}${B?`?${B}`:""}`, {
        ...u,
        headers: {
          ...u.headers || {},
          ...n && n !== _e.FormData ? {
            "Content-Type": n
          } : {}
        },
        signal: (p ? this.createAbortSignal(p) : u.signal) || null,
        body: typeof e > "u" || e === null ? null : C(e)
      }).then(async v => {
        const F = v.clone();
        F.data = null, F.error = null;
        const N = x ? await v[x]().then(H => (F.ok ? F.data = H : F.error = H, F)).catch(H => (F.error = H, F)) : F;
        if (p && this.abortControllers.delete(p), !v.ok) throw N;
        return N.data
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
var os = L.HttpClient = Xn;
class Zn {
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
      getBlockchainAccountTransactions: (e, t, r = {}) => this.http.request({
        path: `/v2/blockchain/accounts/${e}/transactions`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      execGetMethodForBlockchainAccount: (e, t, r, n = {}) => this.http.request({
        path: `/v2/blockchain/accounts/${e}/methods/${t}`,
        method: "GET",
        query: r,
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
      getAccounts: (e, t, r = {}) => this.http.request({
        path: "/v2/accounts/_bulk",
        method: "POST",
        query: t,
        body: e,
        format: "json",
        ...r
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
      getAccountJettonsBalances: (e, t, r = {}) => this.http.request({
        path: `/v2/accounts/${e}/jettons`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      getAccountJettonBalance: (e, t, r, n = {}) => this.http.request({
        path: `/v2/accounts/${e}/jettons/${t}`,
        method: "GET",
        query: r,
        format: "json",
        ...n
      }),
      getAccountJettonsHistory: (e, t, r = {}) => this.http.request({
        path: `/v2/accounts/${e}/jettons/history`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      getAccountJettonHistoryById: (e, t, r, n = {}) => this.http.request({
        path: `/v2/accounts/${e}/jettons/${t}/history`,
        method: "GET",
        query: r,
        format: "json",
        ...n
      }),
      getAccountNftItems: (e, t, r = {}) => this.http.request({
        path: `/v2/accounts/${e}/nfts`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      getAccountEvents: (e, t, r = {}) => this.http.request({
        path: `/v2/accounts/${e}/events`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      getAccountEvent: (e, t, r, n = {}) => this.http.request({
        path: `/v2/accounts/${e}/events/${t}`,
        method: "GET",
        query: r,
        format: "json",
        ...n
      }),
      getAccountTraces: (e, t, r = {}) => this.http.request({
        path: `/v2/accounts/${e}/traces`,
        method: "GET",
        query: t,
        format: "json",
        ...r
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
      getAccountDnsExpiring: (e, t, r = {}) => this.http.request({
        path: `/v2/accounts/${e}/dns/expiring`,
        method: "GET",
        query: t,
        format: "json",
        ...r
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
      getAccountDiff: (e, t, r = {}) => this.http.request({
        path: `/v2/accounts/${e}/diff`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      getAccountExtraCurrencyHistoryById: (e, t, r, n = {}) => this.http.request({
        path: `/v2/accounts/${e}/extra-currency/${t}/history`,
        method: "GET",
        query: r,
        format: "json",
        ...n
      })
    });
    d(this, "nft", {
      getAccountNftHistory: (e, t, r = {}) => this.http.request({
        path: `/v2/accounts/${e}/nfts/history`,
        method: "GET",
        query: t,
        format: "json",
        ...r
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
      getItemsFromCollection: (e, t, r = {}) => this.http.request({
        path: `/v2/nfts/collections/${e}/items`,
        method: "GET",
        query: t,
        format: "json",
        ...r
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
      getNftHistoryById: (e, t, r = {}) => this.http.request({
        path: `/v2/nfts/${e}/history`,
        method: "GET",
        query: t,
        format: "json",
        ...r
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
      getAccountInscriptions: (e, t, r = {}) => this.http.request({
        path: `/v2/experimental/accounts/${e}/inscriptions`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      getAccountInscriptionsHistory: (e, t, r = {}) => this.http.request({
        path: `/v2/experimental/accounts/${e}/inscriptions/history`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      getAccountInscriptionsHistoryByTicker: (e, t, r, n = {}) => this.http.request({
        path: `/v2/experimental/accounts/${e}/inscriptions/${t}/history`,
        method: "GET",
        query: r,
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
      getJettonHolders: (e, t, r = {}) => this.http.request({
        path: `/v2/jettons/${e}/holders`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      getJettonTransferPayload: (e, t, r = {}) => this.http.request({
        path: `/v2/jettons/${t}/transfer/${e}/payload`,
        method: "GET",
        format: "json",
        ...r
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
      gaslessEstimate: (e, t, r = {}) => this.http.request({
        path: `/v2/gasless/estimate/${e}`,
        method: "POST",
        body: t,
        format: "json",
        ...r
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
      getRawBlockchainBlockHeader: (e, t, r = {}) => this.http.request({
        path: `/v2/liteserver/get_block_header/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      sendRawMessage: (e, t = {}) => this.http.request({
        path: "/v2/liteserver/send_message",
        method: "POST",
        body: e,
        format: "json",
        ...t
      }),
      getRawAccountState: (e, t, r = {}) => this.http.request({
        path: `/v2/liteserver/get_account_state/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      getRawShardInfo: (e, t, r = {}) => this.http.request({
        path: `/v2/liteserver/get_shard_info/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      getAllRawShardsInfo: (e, t = {}) => this.http.request({
        path: `/v2/liteserver/get_all_shards_info/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getRawTransactions: (e, t, r = {}) => this.http.request({
        path: `/v2/liteserver/get_transactions/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      getRawListBlockTransactions: (e, t, r = {}) => this.http.request({
        path: `/v2/liteserver/list_block_transactions/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...r
      }),
      getRawBlockProof: (e, t = {}) => this.http.request({
        path: "/v2/liteserver/get_block_proof",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getRawConfig: (e, t, r = {}) => this.http.request({
        path: `/v2/liteserver/get_config_all/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...r
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
      emulateMessageToEvent: (e, t, r = {}) => this.http.request({
        path: "/v2/events/emulate",
        method: "POST",
        query: t,
        body: e,
        format: "json",
        ...r
      }),
      emulateMessageToTrace: (e, t, r = {}) => this.http.request({
        path: "/v2/traces/emulate",
        method: "POST",
        query: t,
        body: e,
        format: "json",
        ...r
      }),
      emulateMessageToWallet: (e, t = {}) => this.http.request({
        path: "/v2/wallet/emulate",
        method: "POST",
        body: e,
        format: "json",
        ...t
      }),
      emulateMessageToAccountEvent: (e, t, r, n = {}) => this.http.request({
        path: `/v2/accounts/${e}/events/emulate`,
        method: "POST",
        query: r,
        body: t,
        format: "json",
        ...n
      })
    });
    this.http = e
  }
}
ns = L.Api = Zn;
var ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.runGetMethod = eo;
ze.TvmStackRecordToTupleItem = rr;
ze.TupleItemToTonapiString = as;
const Jt = q;
async function eo(s, e, t, r) {
  const n = await s.blockchain.execGetMethodForBlockchainAccount(e.toRawString(), t, {
    args: r == null ? void 0 : r.map(as)
  });
  if (!n.success || n.exit_code !== 0) throw new Error;
  return {
    stack: new Jt.TupleReader(n.stack.map(rr))
  }
}

function rr(s) {
  var e, t;
  switch (s.type) {
    case "num":
      return (e = s.num) != null && e.startsWith("-") ? {
        type: "int",
        value: BigInt((t = s.num) == null ? void 0 : t.replace("-", "")) * BigInt(-1)
      } : {
        type: "int",
        value: BigInt(s.num)
      };
    case "nan":
      return {
        type: "nan"
      };
    case "cell":
      try {
        return {
          type: "cell",
          cell: Jt.Cell.fromBase64(s.cell)
        }
      } catch {
        return {
          type: "cell",
          cell: Jt.Cell.fromBase64(be.from(s.cell, "hex").toString("base64"))
        }
      }
    case "null":
      return {
        type: "null"
      };
    case "tuple":
      return {
        type: "tuple", items: s.tuple.map(rr)
      };
    default:
      throw new Error(`Unknown type ${s.type}`)
  }
}

function as(s) {
  switch (s.type) {
    case "int": {
      let e = s.value.toString(16);
      return e.length % 2 !== 0 && (e = "0" + e), "0x" + e
    }
    case "nan":
      return "NaN";
    case "null":
      return "Null";
    case "cell":
    case "builder":
      return s.cell.toBoc().toString("base64");
    case "slice":
      return s.cell.toBoc().toString("hex");
    case "tuple":
      throw new Error("Tuple is not supported in TonApi get method parameters");
    default:
      throw new Error(`Unknown type ${s.type}`)
  }
}
Object.defineProperty(Tt, "__esModule", {
  value: !0
});
Tt.simpleTonapiProvider = to;
Tt.createProvider = sr;
const et = L,
  Me = q,
  Fr = ze;

function to(s) {
  return {
    open(e) {
      return (0, Me.openContract)(e, t => sr(s, t))
    }
  }
}

function sr(s, e) {
  return {
    async getState() {
      const t = await s.blockchain.getBlockchainRawAccount(e.address.toRawString());
      let r;
      if (t.status === et.AccountStatus.Nonexist || t.status === et.AccountStatus.Uninit) r = {
        type: "uninit"
      };
      else if (t.status === et.AccountStatus.Active) r = {
        type: "active",
        code: t.code ? be.from(t.code, "hex") : null,
        data: t.data ? be.from(t.data, "hex") : null
      };
      else if (t.status === et.AccountStatus.Frozen) r = {
        type: "frozen",
        stateHash: be.from(t.frozen_hash, "hex")
      };
      else throw new Error("Unknown state");
      return {
        balance: BigInt(t.balance),
        last: t.last_transaction_hash ? {
          lt: BigInt(t.last_transaction_lt),
          hash: be.from(t.last_transaction_hash, "hex")
        } : null,
        state: r
      }
    },
    async get(t, r) {
      const n = await s.blockchain.execGetMethodForBlockchainAccount(e.address.toRawString(), t, {
        args: r == null ? void 0 : r.map(Fr.TupleItemToTonapiString)
      });
      if (!n.success || n.exit_code !== 0) throw new Error;
      return {
        stack: new Me.TupleReader(n.stack.map(Fr.TvmStackRecordToTupleItem))
      }
    },
    async external(t) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    },
    async internal(t, r) {
      let o = !0;
      r.bounce !== null && r.bounce !== void 0 && (o = r.bounce);
      let a;
      typeof r.value == "string" ? a = (0, Me.toNano)(r.value) : a = r.value;
      let i = null;
      typeof r.body == "string" ? i = (0, Me.comment)(r.body) : r.body && (i = r.body), await t.send({
        to: e.address,
        value: a,
        bounce: o,
        sendMode: r.sendMode,
        init: null,
        body: i
      })
    },
    open(t) {
      return (0, Me.openContract)(t, r => sr(s, r))
    },
    async getTransactions(t, r, n, o) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    }
  }
}
var nr = {},
  Ne = {};
Object.defineProperty(Ne, "__esModule", {
  value: !0
});
Ne.delay = Ne.unixtime = void 0;
const ro = () => Math.floor(Date.now() / 1e3);
Ne.unixtime = ro;
const so = s => new Promise(e => {
  setTimeout(() => e(), s)
});
Ne.delay = so;
Object.defineProperty(nr, "__esModule", {
  value: !0
});
nr.tonConnectSender = oo;
const tt = q,
  no = Ne;

function oo(s) {
  let e;
  const t = [];
  return {
    get address() {
      var n;
      const r = (n = s.account) == null ? void 0 : n.address;
      return r ? tt.Address.parse(r) : void 0
    },
    async send(r) {
      var B;
      const n = (0, no.unixtime)() + 600,
        o = r.to.toString({
          urlSafe: !0,
          bounceable: !0
        }),
        a = (B = this.address) == null ? void 0 : B.toRawString(),
        i = r.value.toString();
      let p;
      r.init && (p = (0, tt.beginCell)().store((0, tt.storeStateInit)(r.init)).endCell().toBoc().toString("base64"));
      let y;
      r.body && (y = r.body.toBoc().toString("base64"));
      const f = await s.sendTransaction({
          validUntil: n,
          from: a,
          messages: [{
            address: o,
            amount: i,
            stateInit: p,
            payload: y
          }]
        }),
        u = tt.Cell.fromBase64(f.boc);
      e = {
        msg: u,
        hash: u.hash().toString("hex")
      }, t.forEach(C => C(e))
    },
    async getResult() {
      return new Promise(r => {
        if (e) {
          r(e);
          return
        }
        t.push(r)
      })
    }
  }
}
var is = {};
Object.defineProperty(is, "__esModule", {
  value: !0
});
var At = {};
Object.defineProperty(At, "__esModule", {
  value: !0
});
At.packReferralConfig = io;
At.unpackReferralConfig = co;
const ao = Gr,
  cs = we;

function io(s) {
  let e = (0, ao.beginCell)().storeUint((0, cs.crc32str)("ref_v1"), 32).storeAddress(s.partner);
  if (s.platformTag && e.storeAddress(s.platformTag), s.extraTag) {
    if (!s.platformTag) throw new Error("extraTag should only be set if platformTag is present");
    e.storeAddress(s.extraTag)
  }
  return e.endCell()
}

function co(s) {
  let e = s.beginParse();
  if (e.loadUint(32) !== (0, cs.crc32str)("ref_v1")) throw new Error("Unknown referral format");
  let r = e.loadAddress(),
    n, o;
  return e.remainingBits > 0 && (n = e.loadAddress()), e.remainingBits > 0 && (o = e.loadAddress()), {
    partner: r,
    platformTag: n,
    extraTag: o
  }
}(function(s) {
  var e = Pe && Pe.__createBinding || (Object.create ? function(o, a, i, p) {
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
    t = Pe && Pe.__exportStar || function(o, a) {
      for (var i in o) i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && e(a, o, i)
    };
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.crc32 = s.crc32str = s.tonConnectSender = void 0, t(_t, s), t(Tt, s);
  var r = nr;
  Object.defineProperty(s, "tonConnectSender", {
    enumerable: !0,
    get: function() {
      return r.tonConnectSender
    }
  });
  var n = we;
  Object.defineProperty(s, "crc32str", {
    enumerable: !0,
    get: function() {
      return n.crc32str
    }
  }), Object.defineProperty(s, "crc32", {
    enumerable: !0,
    get: function() {
      return n.crc32
    }
  }), t(is, s), t(He, s), t(Ie, s), t(Ke, s), t(Ee, s), t(At, s)
})(ce);
const ps = () => {
    const {
      getAddress: s,
      tonConnectSender: e,
      createGetWaitForLaunchStatusUntilOk: t,
      createGetReviewStepInfo: r
    } = We(), {
      TON_API_TOKEN: n,
      getTransactionStatus: o
    } = zt(), {
      getMinReceive: a,
      memepadApi: i,
      wrapWithCache: p
    } = ut(), y = new ns(new os({
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
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: S(ce.Constants.CoinBuyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: S(ce.Constants.CoinSellGas),
      MEMEPAD_JETTON_LAUNCH_NETWORK_FEE: S(ce.Constants.CoinDeploymentGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: S(ce.Constants.WalletUnlockGas)
    }, B = {
      LAUNCH_FEE: new $(.0114),
      LAUNCH_BUY_FEE: new $(.012),
      BUY_FEE: new $(.0062),
      SELL_FEE: new $(.0044),
      UNLOCK_FEE: new $(.0037)
    }, C = {
      buyNetworkFee: u.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: u.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      launchNetworkFee: u.MEMEPAD_JETTON_LAUNCH_NETWORK_FEE,
      unlockNetworkFee: u.MEMEPAD_JETTON_UNLOCK_NETWORK_FEE,
      walletNetworkLaunchFee: B.LAUNCH_FEE,
      walletNetworkLaunchBuyFee: B.LAUNCH_BUY_FEE,
      walletNetworkBuyFee: B.BUY_FEE,
      walletNetworkSellFee: B.SELL_FEE,
      walletNetworkUnlockFee: B.UNLOCK_FEE
    }, x = g => {
      const b = `tonFunSdk:${g.toString()}`,
        R = Fs(b, () => new Map),
        T = R.value.get(b);
      if (T) return T;
      const w = ce.BclSDK.create({
        apiProvider: ce.simpleTonapiProvider(y),
        clientOptions: {
          endpoint: ""
        },
        masterAddress: s(g)
      });
      return R.value.set(b, w), w
    }, v = g => new $(1).minus(S(g.fees)).div(S(g.coins)), N = p(({
      masterAddress: g
    }) => `tonFunSdk:bclData:${g.toString()}`, async ({
      masterAddress: g
    }) => {
      const b = await K(async () => await x(g).getMasterData())();
      if (!E(b)) return Is(b);
      const R = S(b.data.fullPriceTon),
        T = S(b.data.fullPriceTon).minus(S(b.data.fullPriceTonFees)),
        w = S(b.data.bclSupply),
        l = S(b.data.liqSupply),
        m = w.plus(l),
        _ = new $(0);
      return O({
        tokenForDexWithFees: R,
        tokenForDex: T,
        bclSupply: w,
        liqSupply: l,
        maxSupply: m,
        launchPlatformFee: S(b.data.deploymentFee),
        aiAgentDeployFee: _
      })
    }), z = p(({
      tons: g,
      masterAddress: b
    }) => `tonFunSdk:firstCoinsForTons:${b.toString()}:${g.toString()}`, async ({
      tons: g,
      masterAddress: b
    }) => await K(async () => await x(b).getFirstCoinsForTons(G(new $(g))))()), V = p(({
      tons: g,
      masterAddress: b
    }) => `tonFunSdk:jettonOverview:${b.toString()}:${g.toString()}`, async ({
      tons: g,
      masterAddress: b
    }) => {
      const R = new $(g),
        T = await N({
          masterAddress: b
        });
      if (!E(T)) return T;
      const {
        tokenForDex: w,
        tokenForDexWithFees: l,
        bclSupply: m,
        maxSupply: _
      } = T.data, h = await (async () => new $(R).isZero() ? O({
        fees: G(new $(0)),
        coins: G(new $(0))
      }) : await z({
        tons: g,
        masterAddress: b
      }))();
      if (!E(h)) return h;
      const A = h.data,
        k = await (async () => {
          const le = await z({
            masterAddress: b,
            tons: 1
          });
          return E(le) ? O(v(le.data)) : le
        })();
      if (!E(k)) return k;
      const P = k.data,
        I = P.mul(_),
        U = new $(S(A.coins)),
        Y = new $(S(A.fees)),
        Z = new $(R).minus(Y),
        Te = Z.div(w).times(100),
        Ce = U.div(m).times(100),
        xe = new $(m).sub(U);
      return O({
        share: R,
        tokenForDexWithFees: l,
        tokenForDex: w,
        tokenCollected: Z,
        tokenCollectedPercent: Te,
        jettonReceivePercent: Ce,
        priceToken: P,
        marketCapToken: I,
        availableSupply: xe,
        maxSupply: _,
        platformFee: Y,
        minReceive: U,
        bclData: T.data
      })
    }), ae = async ({
      form: g,
      userAddress: b,
      masterAddress: R,
      tonConnectUI: T
    }) => {
      const w = Dr(g, mt.STONFI_TON_FUN),
        l = await i.saveMemepadJettonInfo(w);
      if (!E(l)) return l;
      const m = new $(g.share),
        _ = g.overview.minReceive,
        h = {
          name: w.name,
          description: w.description,
          imageUrl: ot(w.iconFileKey),
          symbol: w.ticker,
          share: G(m),
          referral: l.data.referral,
          partnerAddress: l.data.partnerAddress,
          queryId: l.data.queryId,
          minReceive: G(_)
        },
        A = {};
      w.socials.length && (A.social_links = JSON.stringify(w.socials.map(Y => Y.url))), w.bannerFileKey && (A.cover_image = ot(w.bannerFileKey));
      const k = {
          authorAddress: s(b),
          name: h.name,
          description: h.description,
          imageUrl: h.imageUrl,
          symbol: h.symbol,
          referral: ce.packReferralConfig({
            partner: s(h.partnerAddress),
            platformTag: s(h.referral)
          }),
          queryId: q.toNano(h.queryId),
          extraMetadata: A
        },
        P = {
          firstBuy: m.isZero() ? void 0 : {
            tons: h.share,
            minReceive: h.minReceive,
            referral: ce.packReferralConfig({
              partner: s(h.partnerAddress)
            }),
            buyerAddress: s(b)
          }
        },
        I = e(T),
        U = await K(async () => await x(R).deployCoin(I, k, P))();
      return E(U) ? O({
        queryId: l.data.queryId,
        transactionHash: (await I.getResult()).hash
      }) : U
    }, se = () => t(o, f.LAUNCH_STATUS_CHECK), ie = async ({
      jettonAddress: g,
      masterAddress: b
    }) => {
      const R = await K(async () => await x(b).openCoin(s(g)))();
      if (!E(R)) return R;
      const T = await K(async () => await R.data.getBclData())();
      if (!E(T)) return T;
      const w = S(T.data.totalSupply),
        l = S(T.data.fullPriceTon).minus(S(T.data.fullPriceTonFees)),
        m = S(T.data.tonLiqCollected),
        _ = m.div(l).times(100),
        h = S(T.data.bclSupply),
        A = S(T.data.liqSupply),
        k = h.minus(w);
      return O({
        tokenForDex: l,
        tokenCollected: m,
        tokenCollectedPercent: _,
        bclSupply: h,
        liqSupply: A,
        totalSupply: w,
        availableSupply: k
      })
    }, Q = async ({
      jettonAddress: g,
      userAddress: b,
      masterAddress: R
    }) => {
      var m, _, h;
      const T = await K(async () => await x(R).openCoin(s(g)).getUserWallet(s(b)))();
      if (!E(T)) return T;
      const w = await K(async () => !await T.data.getTransfersEnabled())();
      if (!E(w)) return ((m = w.extra) == null ? void 0 : m.status) === 404 && ((h = (_ = w.extra) == null ? void 0 : _.error) == null ? void 0 : h.error) === "entity not found" ? O(!1) : w;
      const l = w.data;
      return O(l)
    }, W = async ({
      jettonAddress: g,
      userAddress: b,
      masterAddress: R,
      tonConnectUI: T
    }) => {
      const w = x(R).openCoin(s(g)),
        l = await K(async () => await w.getUserWallet(s(b)))();
      if (!E(l)) return l;
      const m = e(T),
        _ = await K(async () => await l.data.sendUnlockWallet(m, {}))();
      return E(_) ? O((await m.getResult()).hash) : _
    }, X = () => Re(async ({
      transactionHash: g
    }) => await o({
      transactionHash: g
    }), () => {}, f.UNLOCK_STATUS_CHECK), ke = async ({
      tons: g,
      masterAddress: b,
      jettonAddress: R,
      partnerAddress: T
    }) => {
      const w = await K(async () => await x(b).openCoin(s(R)).getCoinsForTons(G(g)))();
      if (!E(w)) return w;
      const l = S(w.data.coins),
        m = a(l);
      return O({
        minReceive: m,
        maxReceive: l,
        platformFee: S(w.data.fees),
        additionalInfo: {
          partnerAddress: T.toString()
        }
      })
    }, St = async ({
      jettons: g,
      masterAddress: b,
      jettonAddress: R,
      partnerAddress: T
    }) => {
      const w = await K(async () => await x(b).openCoin(s(R)).getTonsForCoins(G(g)))();
      if (!E(w)) return w;
      const l = S(w.data.tons),
        m = a(l);
      return O({
        minReceive: m,
        maxReceive: l,
        platformFee: S(w.data.fees),
        additionalInfo: {
          partnerAddress: T.toString()
        }
      })
    }, jt = async ({
      userAddress: g,
      jettonAddress: b,
      masterAddress: R
    }) => {
      const T = await K(async () => await x(R).getUserCoinBalance(s(b), s(g)))();
      return E(T) ? O(S(T.data)) : T
    }, qt = async ({
      tons: g,
      tradeInfoParams: b,
      masterAddress: R,
      jettonAddress: T,
      tonConnectUI: w
    }) => {
      const l = {
          tons: G(g),
          minReceive: G(b.minReceive),
          referral: ce.packReferralConfig({
            partner: s(b.additionalInfo.partnerAddress)
          })
        },
        m = e(w),
        _ = await K(async () => await x(R).openCoin(s(T)).sendBuy(m, l))();
      return E(_) ? O((await m.getResult()).hash) : _
    }, Et = async ({
      jettons: g,
      tradeInfoParams: b,
      jettonAddress: R,
      masterAddress: T,
      userAddress: w,
      tonConnectUI: l
    }) => {
      const m = await x(T).openCoin(s(R)).getUserWallet(s(w)),
        _ = e(l),
        h = await K(async () => await m.sendSellCoins(_, {
          amount: G(g),
          minReceive: G(b.minReceive),
          referral: ce.packReferralConfig({
            partner: s(b.additionalInfo.partnerAddress)
          }),
          queryId: 0n
        }))();
      return E(h) ? O((await _.getResult()).hash) : h
    }, Ct = () => Re(({
      transactionHash: g
    }) => o({
      transactionHash: g
    }), () => {}, f.BUY_STATUS_CHECK), $t = () => Re(({
      transactionHash: g
    }) => o({
      transactionHash: g
    }), () => {}, f.SELL_STATUS_CHECK), Bt = ({
      tokenBalance: g,
      overview: b
    }) => {
      const {
        buyNetworkFee: R,
        launchNetworkFee: T,
        walletNetworkLaunchBuyFee: w
      } = C, l = b.bclData.launchPlatformFee, m = g.value.minus(T.plus(l).plus(w).plus(R)), _ = b.bclData.tokenForDexWithFees;
      return _.lt(m) ? _ : m.gte(0) ? m : new $(0)
    }, Pt = r({
      getFees: ({
        overview: g
      }) => {
        const {
          buyNetworkFee: b,
          launchNetworkFee: R,
          walletNetworkLaunchBuyFee: T,
          walletNetworkLaunchFee: w
        } = C, l = g.bclData.launchPlatformFee;
        return {
          buyNetworkFee: b,
          launchNetworkFee: R,
          launchPlatformFee: l,
          walletNetworkLaunchFee: w,
          walletNetworkLaunchBuyFee: T
        }
      }
    });
    return {
      getCoinPriceInTons: v,
      getBclData: N,
      getUnlockEnabled: Q,
      getJettonBclData: ie,
      unlockWallet: W,
      getWaitForUnlockStatus: X,
      getBuyInfo: ke,
      getSellInfo: St,
      buyJetton: qt,
      sellJetton: Et,
      getUserJettonBalance: jt,
      getWaitForBuyStatus: Ct,
      getWaitForSellStatus: $t,
      getJettonOverview: V,
      createJetton: ae,
      getWaitForCreateStatus: se,
      getMaxShareAmount: Bt,
      getMaxBuyAmount: ({
        tokenBalance: g
      }) => {
        const {
          buyNetworkFee: b,
          walletNetworkBuyFee: R
        } = C;
        return g.value.minus(b).minus(R)
      },
      getReviewInfo: Pt,
      fees: C
    }
  },
  po = ({
    addresses: s,
    tonBalance: e
  }) => {
    if (!s) return;
    const {
      mustGetUserWalletAddress: t
    } = We(), {
      getJettonOverview: r,
      createJetton: n,
      getWaitForCreateStatus: o,
      getMaxShareAmount: a,
      getReviewInfo: i
    } = ps(), p = s.masterAddresses[mt.STONFI_TON_FUN], y = Je().tonConnectUI.value;
    return {
      getJettonOverview: ({
        tons: f
      }) => r({
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
        share: u,
        jettonTicker: B,
        withAiAgent: C
      }) => i({
        overview: f,
        share: u,
        jettonTicker: B,
        tonBalance: e,
        withAiAgent: C
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
  lo = ({
    addresses: s,
    jetton: e,
    tonBalance: t,
    jettonBalance: r
  }) => {
    const {
      mustGetUserWalletAddress: n,
      getTradeStateControls: o,
      createGetUnlockInfo: a
    } = We(), {
      slippage: i
    } = ut(), {
      getUserJettonBalance: p,
      getUnlockEnabled: y,
      getWaitForUnlockStatus: f,
      unlockWallet: u,
      buyJetton: B,
      sellJetton: C,
      getWaitForBuyStatus: x,
      getWaitForSellStatus: v,
      getBuyInfo: F,
      getSellInfo: N,
      getMaxBuyAmount: H,
      fees: z
    } = ps(), M = e.address, V = e.masterContractAddress, ae = s.partnerAddress, se = Je().tonConnectUI.value, ie = a({
      getFees: () => z
    }), Q = o();
    return {
      getUserJettonBalance: () => p({
        jettonAddress: M,
        userAddress: n(),
        masterAddress: V
      }),
      getUnlockEnabled: () => y({
        jettonAddress: M,
        userAddress: n(),
        masterAddress: V
      }),
      getWaitForUnlockStatus: () => f(),
      unlockWallet: () => u({
        jettonAddress: M,
        userAddress: n(),
        masterAddress: V,
        tonConnectUI: se
      }),
      getUnlockInfo: () => ie({
        tonBalance: t,
        jettonBalance: r
      }),
      getSlippage: () => i.value,
      updateSlippage: W => i.value = W,
      buyJetton: ({
        tons: W,
        tradeInfoParams: X
      }) => B({
        tons: W,
        jettonAddress: M,
        masterAddress: V,
        tradeInfoParams: X,
        tonConnectUI: se
      }),
      sellJetton: ({
        jettons: W,
        tradeInfoParams: X
      }) => C({
        jettons: W,
        jettonAddress: M,
        masterAddress: V,
        userAddress: n(),
        tradeInfoParams: X,
        tonConnectUI: se
      }),
      getWaitForBuyStatus: () => x(),
      getWaitForSellStatus: () => v(),
      tradeStateControls: {
        getEmptyState: ({
          operation: W
        }) => Q.getEmptyState({
          tonBalance: t,
          jettonBalance: r,
          operation: W
        }),
        getImmediateState: ({
          operation: W,
          amount: X
        }) => Q.getImmediateState({
          amount: X,
          tonBalance: t,
          jettonBalance: r,
          operation: W,
          jettonTicker: e.ticker,
          fees: z
        }),
        getState: ({
          operation: W,
          amount: X
        }) => Q.getState({
          tonBalance: t,
          jettonBalance: r,
          operation: W,
          amount: X,
          jettonTicker: e.ticker,
          fees: z,
          getBuyInfo: ({
            tons: ke
          }) => F({
            tons: ke,
            jettonAddress: M,
            masterAddress: V,
            partnerAddress: ae
          }),
          getSellInfo: ({
            jettons: ke
          }) => N({
            jettons: ke,
            jettonAddress: M,
            masterAddress: V,
            partnerAddress: ae
          })
        })
      },
      getMaxBuyAmount: H
    }
  },
  jo = ({
    balances: s,
    addresses: e,
    networkType: t,
    referrerToken: r
  }) => {
    switch (t) {
      case Ur.TON:
        switch (e.sdkType) {
          case at.TON_FUN:
            return po({
              tonBalance: s.tokenBalance,
              addresses: e
            });
          case at.BLUM:
            return $n({
              tonBalance: s.tokenBalance,
              addresses: e,
              referrerToken: r
            });
          default: {
            const n = e.sdkType;
            throw Ue(`Unknown sdk type: ${n}`)
          }
        }
      default:
        throw Ue(`Unknown network type: ${t}`)
    }
  },
  qo = ({
    isReleased: s,
    sdkType: e,
    dexType: t,
    addresses: r,
    jetton: n,
    networkType: o,
    balances: a,
    referrerToken: i
  }) => {
    switch (o) {
      case Ur.TON: {
        const p = (() => {
          switch (e) {
            case at.TON_FUN:
              return lo({
                addresses: r,
                jetton: n,
                tonBalance: a.tokenBalance,
                jettonBalance: a.jettonBalance
              });
            case at.BLUM:
              return Bn({
                jetton: n,
                tonBalance: a.tokenBalance,
                jettonBalance: a.jettonBalance,
                referrerToken: i
              });
            default:
              throw Ue("Unknown sdk type")
          }
        })();
        if (s) {
          const y = (() => {
            switch (t) {
              case xs.STONFI:
                return Ws({
                  jetton: n,
                  tonBalance: a.tokenBalance,
                  jettonBalance: a.jettonBalance
                });
              default:
                throw Ue("Unknown dex type")
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
        throw Ue("Unknown network type")
    }
  };
export {
  vo as _, wo as a, ko as b, Ao as c, jo as d, To as f, qo as g
};