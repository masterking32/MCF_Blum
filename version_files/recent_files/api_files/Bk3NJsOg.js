import {
  _ as Ie
} from "./CvWXG-8O.js";
import {
  _ as Me
} from "./B8aUunDU.js";
import {
  d as A,
  a as i,
  c as h,
  b as o,
  t as g,
  e as t,
  f as M,
  k as f,
  x as D,
  j as w,
  az as Z,
  P as oe,
  aA as ge,
  r as $,
  F as E,
  m as L,
  g as T,
  V as se,
  B as Le,
  A as ye,
  N as G,
  C as Te,
  aT as Ae,
  h as we,
  W as R,
  J as Y,
  aU as j,
  aV as Se,
  aW as Pe,
  aX as De,
  aY as Ne,
  aZ as ne,
  n as H,
  a_ as le,
  aJ as ce,
  a$ as B,
  aL as ie,
  ak as de,
  u as Oe,
  af as ue,
  av as Q,
  ax as x,
  o as ee,
  X as te,
  am as be,
  b0 as U,
  an as me,
  b1 as je,
  ao as Ee,
  b2 as Re,
  b3 as p,
  a4 as Ke,
  a7 as Ue,
  b4 as X,
  b5 as Be,
  K as q,
  ab as re,
  b6 as Fe,
  b7 as Ve,
  b8 as Ye,
  b9 as W,
  ba as z,
  bb as Ce,
  a9 as He,
  bc as Ge,
  bd as pe,
  be as V,
  ac as Je,
  aR as _e,
  ay as ve
} from "./Ddf_vcE7.js";
import {
  _ as xe,
  a as We
} from "./0f61ASuA.js";
import {
  g as ze
} from "./_5sz2Wx2.js";
import {
  _ as qe
} from "./DaQ9Brp1.js";
import {
  _ as Xe
} from "./Cdj-cREA.js";
import {
  _ as Ze
} from "./ChMumFOU.js";
import {
  u as $e
} from "./C_rAnSb-.js";
import {
  u as Qe
} from "./DSepsHuw.js";
import "./eLKKV7DO.js";
import "./B0_jbpN6.js";
const et = {
    class: "memepad-intro"
  },
  tt = {
    class: "content"
  },
  st = {
    class: "title"
  },
  at = {
    class: "note"
  },
  ot = A({
    __name: "Intro",
    emits: ["start"],
    setup(u) {
      return (e, n) => {
        const s = Me;
        return i(), h("div", et, [o("div", tt, [o("div", st, g(("t" in e ? e.t : t(M))("memepad.intro.title")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: n[0] || (n[0] = l => e.$emit("start"))
        }, g(("t" in e ? e.t : t(M))("memepad.intro.button_text")), 1)]), f(s, {
          "no-background": ""
        }, {
          default: D(() => [o("div", at, g(("t" in e ? e.t : t(M))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  nt = w(ot, [
    ["__scopeId", "data-v-59c654b1"]
  ]),
  lt = {
    class: "memepad-sheet"
  },
  ct = {
    class: "title"
  },
  it = {
    class: "subtitle"
  },
  rt = {
    class: "label"
  },
  dt = {
    class: "actions"
  },
  ut = {
    key: 0,
    class: "dont-show"
  },
  mt = {
    class: "checkbox"
  },
  pt = A({
    __name: "Sheet",
    props: Z({
      dontShowStorageKey: {},
      title: {},
      subtitle: {},
      buttonText: {},
      lottie: {},
      hideReadMore: {
        type: Boolean
      }
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: Z(["close", "readMoreClick"], ["update:modelValue"]),
    setup(u, {
      emit: e
    }) {
      const {
        $webApp: n
      } = oe(), s = u, l = e, c = ge(u, "modelValue"), v = $(!s.dontShowStorageKey), a = $(!1), d = E({
        get: () => c.value && v.value,
        set: S => {
          c.value = S, a.value && s.dontShowStorageKey && n.storage.local.set(s.dontShowStorageKey, "true")
        }
      });
      (() => {
        s.dontShowStorageKey && (v.value = !n.storage.local.get(s.dontShowStorageKey))
      })();
      const b = () => l("readMoreClick"),
        I = () => {
          d.value = !1, l("close", {
            source: "modal"
          })
        },
        C = () => {
          d.value = !1, l("close", {
            source: "button"
          })
        };
      return (S, _) => {
        const m = ye,
          y = G,
          k = xe,
          P = Te,
          O = Ae;
        return i(), L(O, {
          "model-value": t(d),
          "onUpdate:modelValue": I
        }, {
          default: D(() => [o("div", lt, [f(m, {
            name: S.lottie,
            size: 116
          }, null, 8, ["name"]), o("div", ct, g(S.title), 1), o("div", null, [o("div", it, g(S.subtitle), 1), S.hideReadMore ? T("", !0) : (i(), h("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: b
          }, [o("span", rt, g(("t" in S ? S.t : t(M))("base.read_more")), 1), f(y, {
            name: "arrow-right",
            class: "icon"
          })]))]), o("div", dt, [S.dontShowStorageKey ? (i(), h("div", ut, [o("div", mt, [f(k, {
            modelValue: t(a),
            "onUpdate:modelValue": _[0] || (_[0] = K => se(a) ? a.value = K : null)
          }, null, 8, ["modelValue"]), o("span", {
            class: "label",
            onClick: _[1] || (_[1] = K => a.value = !t(a))
          }, g(("t" in S ? S.t : t(M))("memepad.sheet.dont_show_again_label")), 1)])])) : T("", !0), f(P, {
            label: S.buttonText,
            fill: "",
            size: t(Le).LARGE,
            onClick: C
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  _t = w(pt, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  he = "memepad-launch-jetton",
  vt = A({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(u, {
      emit: e
    }) {
      const {
        $webApp: n
      } = oe(), s = e, l = $(!1), c = $(n.storage.local.get(he) ? "watched" : "unwatched"), v = () => {
        c.value === "watched" ? s("launch") : l.value = !0
      }, a = () => {
        n.storage.local.set(he, "true"), s("launch")
      };
      return (d, r) => {
        const b = _t;
        return i(), h(R, null, [o("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: v
        }, [r[1] || (r[1] = o("i", {
          class: "seedling"
        }, null, -1)), we(" " + g(("t" in d ? d.t : t(M))("memepad.explore.launch.button_text")), 1)]), f(b, {
          modelValue: t(l),
          "onUpdate:modelValue": r[0] || (r[0] = I => se(l) ? l.value = I : null),
          title: ("t" in d ? d.t : t(M))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in d ? d.t : t(M))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in d ? d.t : t(M))("memepad.explore.launch_modal.button_text"),
          "hide-read-more": "",
          lottie: "animations/Lightning",
          onClose: a
        }, null, 8, ["modelValue", "title", "subtitle", "button-text"])], 64)
      }
    }
  }),
  ht = w(vt, [
    ["__scopeId", "data-v-9b8c98c6"]
  ]),
  ft = ["src"],
  gt = {
    key: 1,
    class: "user-avatar-empty"
  },
  yt = {
    class: "text"
  },
  St = {
    key: 0,
    class: "user-name"
  },
  bt = {
    key: 1,
    class: "user-address"
  },
  Et = {
    class: "action"
  },
  Ct = {
    class: "amount"
  },
  $t = {
    class: "ticker"
  },
  kt = {
    class: "seconds"
  },
  It = A({
    __name: "Event",
    props: {
      event: {}
    },
    setup(u) {
      const e = u,
        n = E(() => M(`memepad.explore.event.kind.${e.event.type.toLowerCase()}`).toLowerCase()),
        s = E(() => Y().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: e.event.shortname
          },
          query: {
            from: j.ACTIONBAR
          }
        })),
        l = E(() => {
          const c = Se(e.event.timestamp);
          return c.isDate ? c.label : `${c.label} ago`
        });
      return (c, v) => {
        const a = G,
          d = Pe("I18nT"),
          r = le,
          b = ce;
        return i(), L(b, {
          to: t(s),
          class: H(["memepad-explore-event", `is-${c.event.type.toLowerCase()}`])
        }, {
          default: D(() => [c.event.user.avatarUrl ? (i(), h("img", {
            key: 0,
            src: c.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, ft)) : (i(), h("div", gt, [f(a, {
            name: "space-invader",
            class: "icon"
          })])), o("div", yt, [c.event.user.nickname ? (i(), h("span", St, g(c.event.user.nickname), 1)) : (i(), h("span", bt, g(("sliceWalletAddress" in c ? c.sliceWalletAddress : t(De))(c.event.user.address)), 1)), o("span", Et, g(t(n)), 1), c.event.amount ? (i(), L(d, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: D(() => [o("span", Ct, g(`${("formatTon"in c?c.formatTon:t(Ne))(c.event.amount)} TON`), 1)]),
            _: 1
          })) : T("", !0)]), f(r, {
            src: t(ne)(c.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), o("span", $t, g(c.event.ticker), 1), o("span", kt, g(t(l)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  Mt = w(It, [
    ["__scopeId", "data-v-9a23721a"]
  ]),
  Lt = {
    class: "ticker"
  },
  Tt = {
    class: "stats"
  },
  At = {
    class: "holders-count"
  },
  wt = {
    class: "text"
  },
  Pt = {
    class: "transactions-count"
  },
  Dt = {
    class: "text"
  },
  Nt = A({
    __name: "Card",
    props: {
      jetton: {},
      bclData: {},
      index: {}
    },
    setup(u) {
      const e = u,
        n = E(() => Y().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: e.jetton.shortname
          },
          query: {
            from: `spotlight-${e.index+1}`
          }
        }));
      return (s, l) => {
        const c = le,
          v = G,
          a = ce;
        return i(), L(a, {
          to: t(n),
          class: "memepad-explore-spotlight-card"
        }, {
          default: D(() => [f(c, {
            src: t(ne)(s.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), o("span", Lt, g(s.jetton.ticker), 1), o("div", Tt, [o("div", At, [f(v, {
            name: "personal",
            class: "icon"
          }), o("span", wt, g(s.jetton.stats.holdersCount ? ("formatCount" in s ? s.formatCount : t(B))(s.jetton.stats.holdersCount, 0).full : "-"), 1)]), o("div", Pt, [f(v, {
            name: "transfer",
            class: "icon"
          }), o("span", Dt, g(s.jetton.stats.transactionsCount ? ("formatCount" in s ? s.formatCount : t(B))(s.jetton.stats.transactionsCount, 0).full : "-"), 1)])])]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  Ot = w(Nt, [
    ["__scopeId", "data-v-232ad768"]
  ]),
  jt = {
    class: "inner"
  },
  Rt = {
    class: "left"
  },
  Kt = {
    class: "mc"
  },
  Ut = {
    key: 0,
    class: "diff"
  },
  Bt = {
    key: 1,
    class: "percent"
  },
  Ft = {
    class: "progress"
  },
  Vt = {
    class: "direction-wrapper"
  },
  Yt = {
    key: 0,
    class: "direction up"
  },
  Ht = {
    key: 0,
    class: "direction down"
  },
  Gt = A({
    __name: "Progress",
    props: {
      jetton: {},
      bclData: {},
      moveDirection: {},
      marketCap: {},
      tonCollectedPercent: {}
    },
    setup(u) {
      return (e, n) => {
        var l;
        const s = G;
        return i(), h("div", {
          class: H(["memepad-explore-spotlight-progress", [e.moveDirection && `is-${(l=e.moveDirection)==null?void 0:l.direction}`, {
            "is-released": e.jetton.isReleased
          }]])
        }, [o("div", jt, [o("div", Rt, [o("span", Kt, g(e.marketCap ? `$${e.marketCap.full}` : "-"), 1), e.moveDirection ? (i(), h("span", Ut, g(e.moveDirection.diffFormatted), 1)) : T("", !0)]), e.jetton.isReleased ? (i(), L(s, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (i(), h("span", Bt, g(e.tonCollectedPercent ?? "-") + "% ", 1))]), o("div", Ft, [o("div", {
          class: "line",
          style: ie({
            width: `${e.tonCollectedPercent}%`
          })
        }, [o("div", Vt, [f(de, {
          name: "direction-opacity"
        }, {
          default: D(() => {
            var c;
            return [((c = e.moveDirection) == null ? void 0 : c.direction) === "up" ? (i(), h("div", Yt, [f(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), f(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), f(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : T("", !0)]
          }),
          _: 1
        }), f(de, {
          name: "direction-opacity"
        }, {
          default: D(() => {
            var c;
            return [((c = e.moveDirection) == null ? void 0 : c.direction) === "down" ? (i(), h("div", Ht, [f(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), f(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), f(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : T("", !0)]
          }),
          _: 1
        })])], 4)])], 2)
      }
    }
  }),
  Jt = w(Gt, [
    ["__scopeId", "data-v-cefc26d8"]
  ]),
  xt = {
    class: "memepad-explore-spotlight"
  },
  Wt = {
    class: "bg"
  },
  zt = ["src"],
  qt = ["src"],
  Xt = {
    class: "content"
  },
  Zt = {
    class: "header"
  },
  Qt = {
    class: "logo"
  },
  es = {
    class: "title"
  },
  ts = ["onClick"],
  ss = A({
    __name: "Spotlight",
    props: {
      list: {},
      bclData: {}
    },
    setup(u) {
      const e = u,
        n = Oe(),
        s = $(0),
        l = E(() => e.list[s.value]),
        c = _ => {
          document.querySelector(".memepad-explore-spotlight .list").scrollTo({
            left: _ * window.innerWidth + (s.value > _ ? -1 : 1),
            behavior: "smooth"
          })
        },
        v = $(null),
        a = be(() => {
          if (!v.value) return;
          const _ = v.value.children[0].offsetWidth + 10,
            m = v.value.scrollLeft,
            y = Math.round(m / _);
          s.value = y
        }, 50).debouncedFunction,
        d = E(() => {
          const _ = (() => {
              if (!(!l.value.stats.tonCollected || !e.bclData)) return new ue(l.value.stats.tonCollected.div(e.bclData.tonForDex).times(100).toFixed(0, ue.ROUND_DOWN))
            })(),
            m = l.value.stats.marketCap && B(l.value.stats.marketCap);
          return {
            id: l.value.id,
            tonCollectedPercent: _,
            marketCap: m
          }
        }),
        r = [],
        b = $();
      Q(d, (_, m) => {
        if (!_.marketCap || !m.marketCap || _.marketCap.full === m.marketCap.full || _.id !== m.id) {
          b.value = void 0;
          return
        }
        const y = _.marketCap.raw.minus(m.marketCap.raw),
          k = y.lt(0),
          P = B(y.abs(), 0).full;
        P !== "0" && (b.value = {
          direction: k ? "down" : "up",
          diffFormatted: `${k?"-":"+"}${P}`
        }, r.push(setTimeout(() => b.value = void 0, 3e3)))
      });
      const I = E(() => {
          var _, m;
          return ((_ = b.value) == null ? void 0 : _.direction) === "down" ? x("memepad/spotlight-room-down", "svg") : ((m = b.value) == null ? void 0 : m.direction) === "up" ? x("memepad/spotlight-room-up", "svg") : x("memepad/spotlight-room", "svg")
        }),
        C = () => {
          r.push(setTimeout(() => {
            s.value === e.list.length - 1 ? c(0) : c(s.value + 1)
          }, 15e3))
        };
      Q(s, () => {
        r.forEach(clearTimeout), C()
      }, {
        immediate: !0
      }), ee(() => {
        r.forEach(clearTimeout)
      });
      const S = E(() => l.value.isReleased ? x("memepad/dex-bg", "gif") : x("memepad/bg", "gif"));
      return (_, m) => {
        var O, K, J;
        const y = ye,
          k = Ot,
          P = Jt;
        return i(), h("div", xt, [o("div", Wt, [t(n).isLowEndDevice.value ? T("", !0) : (i(), h("img", {
          key: 0,
          src: t(S),
          alt: "Gif",
          class: H([{
            "is-version-1": ((O = t(d).tonCollectedPercent) == null ? void 0 : O.lte(30)) && !t(l).isReleased,
            "is-version-2": ((K = t(d).tonCollectedPercent) == null ? void 0 : K.gt(30)) && t(d).tonCollectedPercent.lte(60) && !t(l).isReleased,
            "is-version-3": ((J = t(d).tonCollectedPercent) == null ? void 0 : J.gt(60)) && !t(l).isReleased,
            "is-dex": t(l).isReleased
          }, "gif"])
        }, null, 10, zt)), o("img", {
          src: t(I),
          alt: "Gif",
          class: "room"
        }, null, 8, qt), m[2] || (m[2] = o("div", {
          class: "gradient"
        }, null, -1))]), o("div", Xt, [o("div", Zt, [o("div", Qt, [f(y, {
          name: "animations/Fire",
          size: 28
        }), o("div", es, g(("t" in _ ? _.t : t(M))("memepad.explore.spotlight.title")), 1)]), e.list.length > 1 ? (i(), h("div", {
          key: 0,
          class: "controls",
          style: ie({
            gridTemplateColumns: `repeat(${e.list.length}, 1fr)`
          })
        }, [(i(!0), h(R, null, te(e.list, (N, F) => (i(), h("div", {
          key: F + "" + t(s),
          class: H(["item", {
            active: t(s) > F,
            current: t(s) === F
          }]),
          onClick: Zs => c(F)
        }, m[3] || (m[3] = [o("div", {
          class: "line"
        }, [o("div", {
          class: "fill"
        })], -1)]), 10, ts))), 128))], 4)) : T("", !0)]), o("div", {
          ref_key: "listEl",
          ref: v,
          class: "list",
          onScroll: m[0] || (m[0] = (...N) => t(a) && t(a)(...N)),
          onTouchmove: m[1] || (m[1] = (...N) => t(a) && t(a)(...N))
        }, [(i(!0), h(R, null, te(e.list, (N, F) => (i(), L(k, {
          key: N.id,
          index: F,
          jetton: N,
          "bcl-data": e.bclData,
          class: "item"
        }, null, 8, ["index", "jetton", "bcl-data"]))), 128))], 544), (i(), L(P, {
          key: t(l).id,
          jetton: t(l),
          "bcl-data": e.bclData,
          "move-direction": t(b),
          "market-cap": t(d).marketCap,
          "ton-collected-percent": t(d).tonCollectedPercent
        }, null, 8, ["jetton", "bcl-data", "move-direction", "market-cap", "ton-collected-percent"]))])])
      }
    }
  }),
  as = w(ss, [
    ["__scopeId", "data-v-aafe260e"]
  ]),
  os = A({
    __name: "ImageCollectedCircle",
    props: {
      image: {},
      collectedPercent: {},
      isReleased: {
        type: Boolean
      }
    },
    setup(u) {
      return (e, n) => {
        const s = le;
        return i(), h("div", {
          class: H(["memepad-jetton-image-collected-circle", {
            "is-released": e.isReleased
          }]),
          style: ie({
            "--collected-percent": e.collectedPercent
          })
        }, [f(s, {
          src: e.image,
          size: 48,
          class: "image"
        }, null, 8, ["src"])], 6)
      }
    }
  }),
  ns = w(os, [
    ["__scopeId", "data-v-e0e5954b"]
  ]),
  ls = {
    class: "center"
  },
  cs = {
    class: "ticker"
  },
  is = {
    key: 0,
    class: "base-stats"
  },
  rs = {
    key: 0,
    class: "holders-count"
  },
  ds = {
    class: "text"
  },
  us = {
    key: 1,
    class: "transactions-count"
  },
  ms = {
    class: "text"
  },
  ps = {
    key: 1,
    class: "my-tokens-stats"
  },
  _s = {
    class: "jettons"
  },
  vs = {
    key: 0,
    class: "base-values"
  },
  hs = {
    class: "market-cap"
  },
  fs = {
    class: "label"
  },
  gs = {
    class: "value"
  },
  ys = {
    class: "lifetime"
  },
  Ss = {
    class: "text"
  },
  bs = {
    key: 1,
    class: "my-tokens-values"
  },
  Es = {
    class: "fiat"
  },
  Cs = A({
    __name: "ListItem",
    props: {
      jetton: {},
      analyticsSource: {
        default: void 0
      },
      bclData: {
        default: void 0
      },
      mode: {
        default: U.BASE
      }
    },
    setup(u) {
      const e = u,
        n = E(() => Y().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: e.jetton.shortname
          },
          query: {
            from: e.analyticsSource
          }
        })),
        s = E(() => e.jetton.stats.tonCollected && e.bclData && e.jetton.stats.tonCollected.div(e.bclData.tonForDex).times(100).toNumber()),
        l = r => {
          const b = r.decimalPlaces();
          return Math.max(Math.min(1, b), 0)
        },
        c = E(() => Se(e.jetton.releaseTimestamp).label),
        v = E(() => e.jetton.ownedAmount ? me(e.jetton.ownedAmount, e.jetton.ticker).frontend : "-"),
        a = E(() => e.jetton.ownedAmountUSD ? me(e.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        d = E(() => e.jetton.pnlPercent ? ze(e.jetton.pnlPercent) : void 0);
      return (r, b) => {
        const I = ns,
          C = G,
          S = ce;
        return i(), L(S, {
          to: t(n),
          class: "memepad-jetton-list-item"
        }, {
          default: D(() => {
            var _;
            return [f(I, {
              image: t(ne)(r.jetton.iconFileKey),
              "collected-percent": t(s),
              "is-released": r.jetton.isReleased
            }, null, 8, ["image", "collected-percent", "is-released"]), o("div", ls, [o("div", cs, g(r.jetton.ticker), 1), r.mode === t(U).BASE ? (i(), h("div", is, [r.jetton.stats.holdersCount !== void 0 ? (i(), h("div", rs, [f(C, {
              name: "personal",
              class: "icon"
            }), o("span", ds, g(("formatCount" in r ? r.formatCount : t(B))(r.jetton.stats.holdersCount, 0).full), 1)])) : T("", !0), r.jetton.stats.transactionsCount !== void 0 ? (i(), h("div", us, [f(C, {
              name: "transfer",
              class: "icon"
            }), o("span", ms, g(("formatCount" in r ? r.formatCount : t(B))(r.jetton.stats.transactionsCount, 0).full), 1)])) : T("", !0)])) : r.mode === t(U).MY_TOKENS ? (i(), h("div", ps, [o("div", _s, g(t(v)), 1)])) : T("", !0)]), r.mode === t(U).BASE ? (i(), h("div", vs, [o("div", hs, [o("span", fs, g(("t" in r ? r.t : t(M))("memepad.jetton.stats.market_cap")), 1), o("span", gs, g(r.jetton.stats.marketCap ? `$${("formatCount"in r?r.formatCount:t(B))(r.jetton.stats.marketCap,l(r.jetton.stats.marketCap)).full}` : "-"), 1)]), o("div", ys, [f(C, {
              name: "environment-leaf",
              class: "icon"
            }), o("span", Ss, g(t(c)), 1)])])) : r.mode === t(U).MY_TOKENS ? (i(), h("div", bs, [o("div", Es, g(t(a)), 1), o("div", {
              class: H(["pnl", t(d) && t(d).cls])
            }, g(((_ = t(d)) == null ? void 0 : _.formatted) ?? "-"), 3)])) : T("", !0)]
          }),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  $s = w(Cs, [
    ["__scopeId", "data-v-3faa1caa"]
  ]),
  ks = A({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {},
      bclData: {},
      mode: {}
    },
    setup(u) {
      return (e, n) => {
        const s = $s;
        return i(), L(je, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: D(() => [(i(!0), h(R, null, te(e.items, l => (i(), L(s, {
            key: l.shortname,
            jetton: l,
            "analytics-source": e.analyticsSource,
            "bcl-data": e.bclData,
            mode: e.mode
          }, null, 8, ["jetton", "analytics-source", "bcl-data", "mode"]))), 128))]),
          _: 1
        })
      }
    }
  }),
  ke = w(ks, [
    ["__scopeId", "data-v-e4070fed"]
  ]),
  Is = {
    class: "memepad-explore-panel-list"
  },
  Ms = {
    class: "top"
  },
  Ls = {
    class: "search-btn-wrapper"
  },
  Ts = {
    key: 0,
    class: "connect"
  },
  As = {
    class: "label"
  },
  ws = {
    key: 1,
    class: "connect"
  },
  Ps = {
    key: 1,
    class: "empty-state"
  },
  Ds = {
    class: "label"
  },
  Ns = A({
    __name: "PanelList",
    props: Z({
      appearedItems: {},
      bclData: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: Z(["search"], ["update:modelValue"]),
    setup(u) {
      const e = ge(u, "modelValue"),
        n = Ee(),
        s = Re(),
        l = [{
          value: p.FRESH,
          pingDot: !0
        }, {
          value: p.HOT
        }, {
          value: p.BLUMING
        }, {
          value: p.BLUMED
        }, {
          value: p.MCAP
        }, {
          value: p.MY_TOKENS
        }].map(a => {
          const d = {
            [p.FRESH]: "New",
            [p.HOT]: "Hot",
            [p.BLUMING]: "Bluming",
            [p.BLUMED]: "Listed",
            [p.MCAP]: "MCap",
            [p.MY_TOKENS]: "My tokens"
          };
          return {
            ...a,
            label: d[a.value]
          }
        }),
        c = E(() => {
          switch (e.value) {
            case p.FRESH:
              return j.FRESH;
            case p.BLUMING:
              return j.BLUMING;
            case p.HOT:
              return j.HOT;
            case p.MY_TOKENS:
              return j.POSITIONS;
            case p.MCAP:
              return j.MCAP;
            case p.BLUMED:
              return j.BLUMED
          }
        }),
        v = E(() => e.value === p.MY_TOKENS ? U.MY_TOKENS : U.BASE);
      return (a, d) => {
        const r = G,
          b = We,
          I = Ue,
          C = ke,
          S = qe;
        return i(), h("div", Is, [o("div", Ms, [f(b, {
          modelValue: e.value,
          "onUpdate:modelValue": d[1] || (d[1] = _ => e.value = _),
          items: t(l)
        }, {
          after: D(() => [o("div", Ls, [o("button", {
            type: "button",
            class: "search reset",
            onClick: d[0] || (d[0] = _ => a.$emit("search"))
          }, [f(r, {
            name: "search",
            class: "icon"
          })])])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (t(n).wallet.value.status === "must_reconnect" || t(n).wallet.value.status === "not_found") && e.value === t(p).MY_TOKENS ? (i(), h("div", Ts, [o("div", As, g(("t" in a ? a.t : t(M))("memepad.explore.my_tokens.connect_text")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: d[2] || (d[2] = _ => t(s).runConnectionFlow())
        }, g(("t" in a ? a.t : t(M))("wallet.connect.btn")), 1)])) : t(n).wallet.value.status === "loading" && e.value === t(p).MY_TOKENS ? (i(), h("div", ws, [f(I, {
          type: t(Ke).LIGHT
        }, null, 8, ["type"])])) : a.appearedItems ? (i(), h(R, {
          key: 2
        }, [a.appearedItems.length ? (i(), L(C, {
          key: e.value,
          items: a.appearedItems,
          "analytics-source": t(c),
          "bcl-data": a.bclData,
          mode: t(v)
        }, null, 8, ["items", "analytics-source", "bcl-data", "mode"])) : e.value === t(p).MY_TOKENS ? (i(), h("div", Ps, [f(r, {
          name: "add-plus-circle",
          class: "icon"
        }), o("div", Ds, g(("t" in a ? a.t : t(M))("memepad.explore.my_tokens.empty_text")), 1)])) : T("", !0)], 64)) : (i(), h(R, {
          key: 3
        }, te(6, _ => o("div", {
          key: _,
          class: "skeleton"
        }, [f(S, {
          class: "image"
        }), f(S, {
          class: "ticker"
        }), f(S, {
          class: "stats"
        })])), 64))])
      }
    }
  }),
  Os = w(Ns, [
    ["__scopeId", "data-v-e42a36ca"]
  ]),
  js = () => {
    const u = X(() => "", "$nnokZ0cAmU"),
      e = X(() => !1, "$dxYpAQPdtd"),
      n = X("$pDWqkemNGG"),
      s = Be(async a => (e.value = !0, {
        res: await q.getMemepadSearch(a),
        search: a
      }), ({
        res: a,
        search: d
      }) => {
        e.value = !1, u.value = d, n.value = a.err ? void 0 : a.data
      });
    return {
      _flow: {
        init: () => {},
        destroy: () => {
          u.value = "", e.value = !1, n.value = void 0
        }
      },
      search: a => {
        a !== u.value && (a === "" ? (e.value = !1, n.value = void 0, u.value = "") : s(a))
      },
      searchLine: E(() => u.value),
      data: E(() => n.value),
      isSearching: E(() => e.value)
    }
  },
  Rs = {
    class: "memepad-search page"
  },
  Ks = {
    key: 0,
    class: "empty"
  },
  Us = A({
    __name: "Search",
    emits: ["close"],
    setup(u, {
      emit: e
    }) {
      const n = e,
        s = $(),
        l = js();
      l._flow.init(), ee(() => l._flow.destroy());
      const {
        bclData: c
      } = $e(), v = $(!1), a = $(""), d = [];
      (() => {
        d.push(setTimeout(() => {
          v.value = !0
        }, 400))
      })(), ee(() => {
        d.forEach(C => clearTimeout(C))
      });
      const {
        debouncedFunction: b
      } = be(l.search, 600);
      return Q(a, b), re().memepad.memepadSearchOpen(), Qe(async () => {
        var C;
        (C = s.value) == null || C.blur(), await Fe(), await Ve(0), n("close")
      }), (C, S) => {
        const _ = Ze,
          m = ke;
        return i(), h("div", Rs, [f(_, {
          ref_key: "searchWithTitleComponent",
          ref: s,
          modelValue: t(a),
          "onUpdate:modelValue": S[0] || (S[0] = y => se(a) ? a.value = y : null),
          placeholder: ("t" in C ? C.t : t(M))("memepad.search.input_placeholder"),
          activated: t(v),
          autofocus: "",
          "is-loading": t(l).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), t(l).data.value ? (i(), h(R, {
          key: 0
        }, [t(l).data.value.length === 0 ? (i(), h("div", Ks, g(("t" in C ? C.t : t(M))("memepad.search.empty_text")), 1)) : (i(), L(m, {
          key: 1,
          items: t(l).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in C ? C.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : t(j)).SEARCH,
          "bcl-data": t(c)
        }, null, 8, ["items", "analytics-source", "bcl-data"]))], 64)) : T("", !0)])
      }
    }
  }),
  Bs = w(Us, [
    ["__scopeId", "data-v-d0324906"]
  ]),
  ae = (u, e, n) => {
    const s = Math.max(0, u.length - 1),
      l = $([...u]),
      c = $(s),
      v = () => {
        c.value < l.value.length - 1 && c.value++
      },
      a = E(() => {
        const y = Math.max(0, c.value - n + 1),
          k = Math.min(c.value + 1, l.value.length);
        return [...l.value].slice(y, k).reverse()
      }),
      d = E(() => l.value.reverse()[c.value]);
    let r;
    return {
      init: () => {
        clearInterval(r), r = _e(v, e)
      },
      destroy: () => {
        l.value = [], c.value = 0, clearInterval(r)
      },
      addItems: y => {
        l.value.push(...y)
      },
      setItems: y => {
        l.value = y, c.value = y.length - 1
      },
      pause: () => {
        clearInterval(r)
      },
      unpause: () => {
        clearInterval(r), r = _e(v, e)
      },
      items: E(() => l.value),
      appearedItems: a,
      currentAppearedItem: d
    }
  },
  Fs = () => {
    const u = Ye(),
      e = Ee(),
      n = $(),
      s = {
        [p.FRESH]: W.CREATED_AT,
        [p.HOT]: W.TRANSACTIONS,
        [p.BLUMING]: W.NEAREST_TO_LISTING,
        [p.MCAP]: W.MARKET_CAP,
        [p.BLUMED]: W.PUBLISHED_AT
      },
      l = {
        [p.FRESH]: z.EXCLUDE,
        [p.HOT]: z.INCLUDE,
        [p.BLUMING]: z.INCLUDE_LISTED,
        [p.MCAP]: z.INCLUDE,
        [p.BLUMED]: z.ONLY
      },
      c = re(),
      v = async m => {
        if (m === p.MY_TOKENS)
          if (e.wallet.value.status === "connected") {
            const k = await q.getMemepadJettonsPositions(e.wallet.value.address.default);
            return Ge(k) ? pe(k.data.jettons) : k
          } else return pe([]);
        const y = s[m];
        return await q.getMemepadJettonsList(y, l[m])
      }, a = $(), d = X(() => p.FRESH, "$SbGDXlzgsy"), b = $(Ce(async () => await v(d.value), m => {
        if (d.value === p.FRESH) {
          if (n.value) {
            n.value.unpause();
            const y = n.value.items,
              k = m.filter(P => !y.some(O => O.id === P.id));
            n.value.addItems(k)
          } else {
            const y = [...m].reverse();
            n.value = ae(y, 1e3, 60), n.value.init()
          }
          return
        } else n.value && n.value.pause();
        a.value ? a.value.stepList.setItems([...m].reverse()) : (a.value = {
          stepList: ae([...m].reverse(), 1e3, 60)
        }, a.value.stepList.init())
      }, 5e3));
    let I;
    const C = async () => {
      await b.value.exec(), I = Q(d, async m => {
        var k;
        b.value.destroy(), (k = a.value) == null || k.stepList.destroy(), a.value = void 0, await b.value.exec();
        const y = (() => {
          switch (m) {
            case p.FRESH:
              return V.FRESH;
            case p.BLUMING:
              return V.BLUMING;
            case p.HOT:
              return V.HOT;
            case p.MY_TOKENS:
              return V.POSITIONS;
            case p.MCAP:
              return V.MCAP;
            case p.BLUMED:
              return V.BLUMED
          }
        })();
        c.memepad.memepadOpenPanelListTab({
          source: y
        })
      })
    }, S = () => {
      var m, y;
      b.value.destroy(), (m = a.value) == null || m.stepList.destroy(), a.value = void 0, (y = n.value) == null || y.destroy(), n.value = void 0, I == null || I()
    };
    u.onConnected(() => {
      d.value === p.MY_TOKENS && b.value.exec()
    });
    const _ = E(() => {
      var m, y;
      return d.value === p.FRESH ? (m = n.value) == null ? void 0 : m.appearedItems : (y = a.value) == null ? void 0 : y.stepList.appearedItems
    });
    return {
      init: C,
      destroy: S,
      panelListActiveTab: d,
      panelListAppearedItems: _
    }
  },
  Vs = () => {
    const u = $(),
      e = E(() => {
        var v;
        return (v = u.value) == null ? void 0 : v.stepList.currentAppearedItem
      }),
      n = v => {
        u.value || (u.value = {
          stepList: ae([], 1e3, 15)
        }, u.value.stepList.init()), u.value.stepList.addItems(v.reverse())
      },
      s = $(Ce(async () => await q.getMemepadExploreEvents(), v => {
        n(v.transactions)
      }, 9e3));
    return {
      init: async () => {
        await s.value.exec()
      },
      destroy: () => {
        var v;
        s.value.destroy(), (v = u.value) == null || v.stepList.destroy(), u.value = void 0
      },
      eventAppearedItem: E(() => e.value)
    }
  },
  Ys = () => {
    const u = $(),
      n = He(async () => Je(await q.getMemepadExploreSpotlight()), c => u.value = c.jettons, 5e3);
    return {
      init: async () => {
        await n.exec()
      },
      destroy: () => {
        n.destroy()
      },
      spotlight: E(() => u.value)
    }
  },
  Hs = () => {
    const u = Vs(),
      e = Ys(),
      n = Fs();
    return {
      _flow: {
        init: async () => {
          await Promise.all([u.init(), e.init(), n.init()])
        },
        destroy: () => {
          u.destroy(), e.destroy(), n.destroy()
        }
      },
      eventAppearedItem: u.eventAppearedItem,
      spotlight: e.spotlight,
      panelListActiveTab: n.panelListActiveTab,
      panelListAppearedItems: n.panelListAppearedItems
    }
  },
  Gs = {
    key: 0,
    class: "memepad-explore"
  },
  Js = {
    class: "header"
  },
  xs = {
    class: "title"
  },
  Ws = A({
    __name: "Index",
    setup(u) {
      const {
        eventAppearedItem: e,
        spotlight: n,
        panelListActiveTab: s,
        panelListAppearedItems: l,
        _flow: {
          init: c,
          destroy: v
        }
      } = Hs(), {
        bclData: a
      } = $e(), d = $(!1);
      c().then(() => {
        d.value = !0
      }), ee(() => {
        v()
      });
      const r = $(!!ve().query.search),
        b = () => Y().push({
          name: "memepad-new"
        }),
        I = () => {
          Y().push({
            query: {
              search: "1"
            }
          }), r.value = !0
        },
        C = () => {
          r.value = !1, Y().push({
            query: {
              search: void 0
            }
          }), ve().meta.back = void 0
        };
      return (S, _) => {
        var J;
        const m = ht,
          y = Mt,
          k = as,
          P = Os,
          O = Xe,
          K = Bs;
        return i(), h(R, null, [t(d) ? (i(), h("div", Gs, [o("div", Js, [o("div", xs, [o("span", null, g(("t" in S ? S.t : t(M))("memepad.explore.title")), 1), _[1] || (_[1] = o("div", {
          class: "beta"
        }, "beta", -1))]), f(m, {
          onLaunch: b
        })]), t(e) ? (i(), L(y, {
          key: 0,
          event: t(e),
          class: "event"
        }, null, 8, ["event"])) : T("", !0), (J = t(n)) != null && J[0] ? (i(), L(k, {
          key: 1,
          class: "spotlight",
          list: t(n),
          "bcl-data": t(a)
        }, null, 8, ["list", "bcl-data"])) : T("", !0), f(P, {
          modelValue: t(s),
          "onUpdate:modelValue": _[0] || (_[0] = N => se(s) ? s.value = N : null),
          "appeared-items": t(l),
          "bcl-data": t(a),
          onSearch: I
        }, null, 8, ["modelValue", "appeared-items", "bcl-data"])])) : (i(), L(O, {
          key: 1
        })), t(r) ? (i(), L(K, {
          key: 2,
          onClose: C
        })) : T("", !0)], 64)
      }
    }
  }),
  zs = w(Ws, [
    ["__scopeId", "data-v-135af7a4"]
  ]),
  qs = {
    class: "memepad-index page"
  },
  fe = "memepad-intro",
  Xs = A({
    __name: "index",
    setup(u) {
      const {
        $webApp: e
      } = oe(), n = $(e.storage.local.get(fe) ? "explore" : "intro"), s = () => {
        n.value = "explore", e.storage.local.set(fe, "true")
      };
      return re().memepad.memepadExploreOpen(), (c, v) => {
        const a = Ie,
          d = nt,
          r = zs;
        return i(), h("div", qs, [f(a), t(n) === "intro" ? (i(), L(d, {
          key: 0,
          onStart: s
        })) : t(n) === "explore" ? (i(), L(r, {
          key: 1
        })) : T("", !0)])
      }
    }
  }),
  ua = w(Xs, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  ua as
  default
};