import {
  _ as Te
} from "./BxlDNt9Q.js";
import {
  _ as $e
} from "./cFDpmBI3.js";
import {
  d as M,
  a as r,
  c as h,
  b as l,
  t as g,
  e as t,
  f as A,
  k as _,
  x as D,
  j as w,
  ay as X,
  P as ce,
  az as ye,
  r as C,
  F as E,
  m as $,
  g as k,
  V as te,
  B as ke,
  A as ge,
  N as F,
  C as Ie,
  aS as Ae,
  h as Me,
  W as B,
  J as U,
  aT as j,
  aU as we,
  aV as De,
  aW as Pe,
  aX as Ne,
  aY as se,
  n as G,
  aZ as ie,
  aH as ne,
  a_ as K,
  aJ as re,
  ak as ue,
  u as Oe,
  af as ae,
  av as Z,
  a$ as V,
  o as Q,
  X as ee,
  am as Se,
  an as me,
  ar as je,
  b0 as Re,
  b1 as Ue,
  b2 as Ke,
  b3 as p,
  b4 as oe,
  a4 as Be,
  a7 as Fe,
  b5 as z,
  b6 as We,
  K as J,
  ab as de,
  b7 as Ve,
  b8 as He,
  b9 as Ge,
  ao as Je,
  ba as Y,
  bb as q,
  bc as Ee,
  a9 as xe,
  bd as Ye,
  be as pe,
  bf as H,
  ac as qe,
  aP as _e,
  ax as ve
} from "./CRu0zQdy.js";
import {
  _ as ze,
  a as Xe
} from "./BXZB9Ezd.js";
import {
  _ as Ze
} from "./BEEnBspW.js";
import {
  _ as Qe
} from "./DJZN4H_e.js";
import {
  _ as et
} from "./DEEF-Wcy.js";
import {
  u as be
} from "./JjUxZTYF.js";
import {
  u as tt
} from "./41RCuQO5.js";
import "./pMUBu7ke.js";
const st = {
    class: "memepad-intro"
  },
  nt = {
    class: "content"
  },
  ot = {
    class: "title"
  },
  at = {
    class: "note"
  },
  lt = M({
    __name: "Intro",
    emits: ["start"],
    setup(u) {
      return (e, a) => {
        const n = $e;
        return r(), h("div", st, [l("div", nt, [l("div", ot, g(("t" in e ? e.t : t(A))("memepad.intro.title")), 1), l("button", {
          type: "button",
          class: "reset",
          onClick: a[0] || (a[0] = i => e.$emit("start"))
        }, g(("t" in e ? e.t : t(A))("memepad.intro.button_text")), 1)]), _(n, {
          "no-background": ""
        }, {
          default: D(() => [l("div", at, g(("t" in e ? e.t : t(A))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  ct = w(lt, [
    ["__scopeId", "data-v-59c654b1"]
  ]),
  it = {
    class: "memepad-sheet"
  },
  rt = {
    class: "title"
  },
  dt = {
    class: "subtitle"
  },
  ut = {
    class: "label"
  },
  mt = {
    class: "actions"
  },
  pt = {
    key: 0,
    class: "dont-show"
  },
  _t = {
    class: "checkbox"
  },
  vt = M({
    __name: "Sheet",
    props: X({
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
    emits: X(["close", "readMoreClick"], ["update:modelValue"]),
    setup(u, {
      emit: e
    }) {
      const {
        $webApp: a
      } = ce(), n = u, i = e, s = ye(u, "modelValue"), c = C(!n.dontShowStorageKey), o = C(!1), d = E({
        get: () => s.value && c.value,
        set: S => {
          s.value = S, o.value && n.dontShowStorageKey && a.storage.local.set(n.dontShowStorageKey, "true")
        }
      });
      (() => {
        n.dontShowStorageKey && (c.value = !a.storage.local.get(n.dontShowStorageKey))
      })();
      const b = () => i("readMoreClick"),
        I = () => {
          d.value = !1, i("close", {
            source: "modal"
          })
        },
        L = () => {
          d.value = !1, i("close", {
            source: "button"
          })
        };
      return (S, y) => {
        const m = ge,
          f = F,
          T = ze,
          P = Ie,
          O = Ae;
        return r(), $(O, {
          "model-value": t(d),
          "onUpdate:modelValue": I
        }, {
          default: D(() => [l("div", it, [_(m, {
            name: S.lottie,
            size: 116
          }, null, 8, ["name"]), l("div", rt, g(S.title), 1), l("div", null, [l("div", dt, g(S.subtitle), 1), S.hideReadMore ? k("", !0) : (r(), h("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: b
          }, [l("span", ut, g(("t" in S ? S.t : t(A))("base.read_more")), 1), _(f, {
            name: "arrow-right",
            class: "icon"
          })]))]), l("div", mt, [S.dontShowStorageKey ? (r(), h("div", pt, [l("div", _t, [_(T, {
            modelValue: t(o),
            "onUpdate:modelValue": y[0] || (y[0] = R => te(o) ? o.value = R : null)
          }, null, 8, ["modelValue"]), l("span", {
            class: "label",
            onClick: y[1] || (y[1] = R => o.value = !t(o))
          }, g(("t" in S ? S.t : t(A))("memepad.sheet.dont_show_again_label")), 1)])])) : k("", !0), _(P, {
            label: S.buttonText,
            fill: "",
            size: t(ke).LARGE,
            onClick: L
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  ht = w(vt, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  he = "memepad-launch-jetton",
  ft = M({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(u, {
      emit: e
    }) {
      const {
        $webApp: a
      } = ce(), n = e, i = C(!1), s = C(a.storage.local.get(he) ? "watched" : "unwatched"), c = () => {
        s.value === "watched" ? n("launch") : i.value = !0
      }, o = () => {
        a.storage.local.set(he, "true"), n("launch")
      };
      return (d, v) => {
        const b = ht;
        return r(), h(B, null, [l("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: c
        }, [v[1] || (v[1] = l("i", {
          class: "seedling"
        }, null, -1)), Me(" " + g(("t" in d ? d.t : t(A))("memepad.explore.launch.button_text")), 1)]), _(b, {
          modelValue: t(i),
          "onUpdate:modelValue": v[0] || (v[0] = I => te(i) ? i.value = I : null),
          title: ("t" in d ? d.t : t(A))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in d ? d.t : t(A))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in d ? d.t : t(A))("memepad.explore.launch_modal.button_text"),
          "hide-read-more": "",
          lottie: "animations/Lightning",
          onClose: o
        }, null, 8, ["modelValue", "title", "subtitle", "button-text"])], 64)
      }
    }
  }),
  yt = w(ft, [
    ["__scopeId", "data-v-9b8c98c6"]
  ]),
  gt = ["src"],
  St = {
    key: 1,
    class: "user-avatar-empty"
  },
  Et = {
    class: "text"
  },
  bt = {
    key: 0,
    class: "user-name"
  },
  Lt = {
    key: 1,
    class: "user-address"
  },
  Ct = {
    class: "action"
  },
  Tt = {
    class: "amount"
  },
  $t = {
    class: "ticker"
  },
  kt = {
    class: "seconds"
  },
  It = M({
    __name: "Event",
    props: {
      event: {}
    },
    setup(u) {
      const e = u,
        a = E(() => A(`memepad.explore.event.kind.${e.event.type.toLowerCase()}`).toLowerCase()),
        n = E(() => U().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: e.event.shortname
          },
          query: {
            from: j.ACTIONBAR
          }
        })),
        i = E(() => {
          const s = we(e.event.timestamp);
          return s.isDate ? s.label : `${s.label} ago`
        });
      return (s, c) => {
        const o = F,
          d = De("I18nT"),
          v = ie,
          b = ne;
        return r(), $(b, {
          to: t(n),
          class: G(["memepad-explore-event", `is-${s.event.type.toLowerCase()}`])
        }, {
          default: D(() => [s.event.user.avatarUrl ? (r(), h("img", {
            key: 0,
            src: s.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, gt)) : (r(), h("div", St, [_(o, {
            name: "space-invader",
            class: "icon"
          })])), l("div", Et, [s.event.user.nickname ? (r(), h("span", bt, g(s.event.user.nickname), 1)) : (r(), h("span", Lt, g(("sliceWalletAddress" in s ? s.sliceWalletAddress : t(Pe))(s.event.user.address)), 1)), l("span", Ct, g(t(a)), 1), s.event.amount ? (r(), $(d, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: D(() => [l("span", Tt, g(`${("formatTon"in s?s.formatTon:t(Ne))(s.event.amount)} TON`), 1)]),
            _: 1
          })) : k("", !0)]), _(v, {
            src: t(se)(s.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), l("span", $t, g(s.event.ticker), 1), l("span", kt, g(t(i)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  At = w(It, [
    ["__scopeId", "data-v-9a23721a"]
  ]),
  Mt = {
    class: "ticker"
  },
  wt = {
    class: "stats"
  },
  Dt = {
    class: "holders-count"
  },
  Pt = {
    class: "text"
  },
  Nt = {
    class: "transactions-count"
  },
  Ot = {
    class: "text"
  },
  jt = M({
    __name: "Card",
    props: {
      jetton: {},
      bclData: {}
    },
    setup(u) {
      const e = u,
        a = E(() => U().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: e.jetton.shortname
          },
          query: {
            from: j.SPOTLIGHT
          }
        }));
      return (n, i) => {
        const s = ie,
          c = F,
          o = ne;
        return r(), $(o, {
          to: t(a),
          class: "memepad-explore-spotlight-card"
        }, {
          default: D(() => [_(s, {
            src: t(se)(n.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), l("span", Mt, g(n.jetton.ticker), 1), l("div", wt, [l("div", Dt, [_(c, {
            name: "personal",
            class: "icon"
          }), l("span", Pt, g(n.jetton.stats.holdersCount ? ("formatCount" in n ? n.formatCount : t(K))(n.jetton.stats.holdersCount, 0).full : "-"), 1)]), l("div", Nt, [_(c, {
            name: "transfer",
            class: "icon"
          }), l("span", Ot, g(n.jetton.stats.transactionsCount ? ("formatCount" in n ? n.formatCount : t(K))(n.jetton.stats.transactionsCount, 0).full : "-"), 1)])])]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  Rt = w(jt, [
    ["__scopeId", "data-v-304ad5a2"]
  ]),
  Ut = {
    class: "inner"
  },
  Kt = {
    class: "left"
  },
  Bt = {
    class: "mc"
  },
  Ft = {
    key: 0,
    class: "diff"
  },
  Wt = {
    key: 1,
    class: "percent"
  },
  Vt = {
    class: "progress"
  },
  Ht = {
    class: "direction-wrapper"
  },
  Gt = {
    key: 0,
    class: "direction up"
  },
  Jt = {
    key: 0,
    class: "direction down"
  },
  xt = M({
    __name: "Progress",
    props: {
      jetton: {},
      bclData: {},
      moveDirection: {},
      marketCap: {},
      tonCollectedPercent: {}
    },
    setup(u) {
      return (e, a) => {
        var i;
        const n = F;
        return r(), h("div", {
          class: G(["memepad-explore-spotlight-progress", e.moveDirection ? `is-${(i=e.moveDirection)==null?void 0:i.direction}` : ""])
        }, [l("div", Ut, [l("div", Kt, [l("span", Bt, g(e.marketCap ? `$${e.marketCap.full}` : "-"), 1), e.moveDirection ? (r(), h("span", Ft, g(e.moveDirection.diffFormatted), 1)) : k("", !0)]), e.jetton.isReleased ? (r(), $(n, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (r(), h("span", Wt, g(e.tonCollectedPercent ?? "-") + "% ", 1))]), l("div", Vt, [l("div", {
          class: "line",
          style: re({
            width: `${e.tonCollectedPercent}%`
          })
        }, [l("div", Ht, [_(ue, {
          name: "direction-opacity"
        }, {
          default: D(() => {
            var s;
            return [((s = e.moveDirection) == null ? void 0 : s.direction) === "up" ? (r(), h("div", Gt, [_(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), _(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), _(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : k("", !0)]
          }),
          _: 1
        }), _(ue, {
          name: "direction-opacity"
        }, {
          default: D(() => {
            var s;
            return [((s = e.moveDirection) == null ? void 0 : s.direction) === "down" ? (r(), h("div", Jt, [_(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), _(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), _(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : k("", !0)]
          }),
          _: 1
        })])], 4)])], 2)
      }
    }
  }),
  Yt = w(xt, [
    ["__scopeId", "data-v-46453264"]
  ]),
  qt = {
    class: "memepad-explore-spotlight"
  },
  zt = {
    class: "bg"
  },
  Xt = ["src"],
  Zt = ["src"],
  Qt = {
    class: "content"
  },
  es = {
    class: "header"
  },
  ts = {
    class: "logo"
  },
  ss = {
    class: "title"
  },
  ns = ["onClick"],
  os = M({
    __name: "Spotlight",
    props: {
      list: {},
      bclData: {}
    },
    setup(u) {
      const e = u,
        a = Oe(),
        n = C(0),
        i = E(() => e.list[n.value]),
        s = y => {
          document.querySelector(".memepad-explore-spotlight .list").scrollTo({
            left: y * window.innerWidth + (n.value > y ? -1 : 1),
            behavior: "smooth"
          })
        },
        c = C(null),
        o = Se(() => {
          if (!c.value) return;
          const y = c.value.children[0].offsetWidth + 10,
            m = c.value.scrollLeft,
            f = Math.round(m / y);
          n.value = f
        }, 50).debouncedFunction,
        d = E(() => {
          const y = (() => {
              if (!(!i.value.stats.tonCollected || !e.bclData)) return new ae(i.value.stats.tonCollected.div(e.bclData.tonForDex).times(100).toFixed(0, ae.ROUND_DOWN))
            })(),
            m = i.value.stats.marketCap && K(i.value.stats.marketCap);
          return {
            id: i.value.id,
            tonCollectedPercent: y,
            marketCap: m
          }
        }),
        v = [],
        b = C();
      Z(d, (y, m) => {
        if (!y.marketCap || !m.marketCap || y.marketCap.full === m.marketCap.full || y.id !== m.id) {
          b.value = void 0;
          return
        }
        const f = y.marketCap.raw.minus(m.marketCap.raw),
          T = f.lt(0),
          P = K(f.abs(), 0).full;
        P !== "0" && (b.value = {
          direction: T ? "down" : "up",
          diffFormatted: `${T?"-":"+"}${P}`
        }, v.push(setTimeout(() => b.value = void 0, 3e3)))
      });
      const I = E(() => {
          var y, m;
          return ((y = b.value) == null ? void 0 : y.direction) === "down" ? V("memepad/spotlight-room-down", "svg") : ((m = b.value) == null ? void 0 : m.direction) === "up" ? V("memepad/spotlight-room-up", "svg") : V("memepad/spotlight-room", "svg")
        }),
        L = () => {
          v.push(setTimeout(() => {
            n.value === e.list.length - 1 ? s(0) : s(n.value + 1)
          }, 15e3))
        };
      Z(n, () => {
        v.forEach(clearTimeout), L()
      }, {
        immediate: !0
      }), Q(() => {
        v.forEach(clearTimeout)
      });
      const S = E(() => i.value.isReleased ? V("memepad/dex-bg", "gif") : V("memepad/bg", "gif"));
      return (y, m) => {
        var O, R, W;
        const f = ge,
          T = Rt,
          P = Yt;
        return r(), h("div", qt, [l("div", zt, [t(a).isLowEndDevice.value ? k("", !0) : (r(), h("img", {
          key: 0,
          src: t(S),
          alt: "Gif",
          class: G([{
            "is-version-1": ((O = t(d).tonCollectedPercent) == null ? void 0 : O.lte(30)) && !t(i).isReleased,
            "is-version-2": ((R = t(d).tonCollectedPercent) == null ? void 0 : R.gt(30)) && t(d).tonCollectedPercent.lte(60) && !t(i).isReleased,
            "is-version-3": ((W = t(d).tonCollectedPercent) == null ? void 0 : W.gt(60)) && !t(i).isReleased,
            "is-dex": t(i).isReleased
          }, "gif"])
        }, null, 10, Xt)), l("img", {
          src: t(I),
          alt: "Gif",
          class: "room"
        }, null, 8, Zt), m[2] || (m[2] = l("div", {
          class: "gradient"
        }, null, -1))]), l("div", Qt, [l("div", es, [l("div", ts, [_(f, {
          name: "animations/Fire",
          size: 28
        }), l("div", ss, g(("t" in y ? y.t : t(A))("memepad.explore.spotlight.title")), 1)]), e.list.length > 1 ? (r(), h("div", {
          key: 0,
          class: "controls",
          style: re({
            gridTemplateColumns: `repeat(${e.list.length}, 1fr)`
          })
        }, [(r(!0), h(B, null, ee(e.list, (N, x) => (r(), h("div", {
          key: x + "" + t(n),
          class: G(["item", {
            active: t(n) > x,
            current: t(n) === x
          }]),
          onClick: qs => s(x)
        }, m[3] || (m[3] = [l("div", {
          class: "line"
        }, [l("div", {
          class: "fill"
        })], -1)]), 10, ns))), 128))], 4)) : k("", !0)]), l("div", {
          ref_key: "listEl",
          ref: c,
          class: "list",
          onScroll: m[0] || (m[0] = (...N) => t(o) && t(o)(...N)),
          onTouchmove: m[1] || (m[1] = (...N) => t(o) && t(o)(...N))
        }, [(r(!0), h(B, null, ee(e.list, N => (r(), $(T, {
          key: N.id,
          jetton: N,
          "bcl-data": e.bclData,
          class: "item"
        }, null, 8, ["jetton", "bcl-data"]))), 128))], 544), (r(), $(P, {
          key: t(i).id,
          jetton: t(i),
          "bcl-data": e.bclData,
          "move-direction": t(b),
          "market-cap": t(d).marketCap,
          "ton-collected-percent": t(d).tonCollectedPercent
        }, null, 8, ["jetton", "bcl-data", "move-direction", "market-cap", "ton-collected-percent"]))])])
      }
    }
  }),
  as = w(os, [
    ["__scopeId", "data-v-7f51b29e"]
  ]),
  ls = M({
    __name: "ImageCollectedCircle",
    props: {
      image: {},
      collectedPercent: {}
    },
    setup(u) {
      return (e, a) => {
        const n = ie;
        return r(), h("div", {
          class: "memepad-jetton-image-collected-circle",
          style: re({
            "--collected-percent": e.collectedPercent
          })
        }, [_(n, {
          src: e.image,
          size: 28,
          class: "image"
        }, null, 8, ["src"])], 4)
      }
    }
  }),
  Le = w(ls, [
    ["__scopeId", "data-v-49dd4c7d"]
  ]),
  cs = {
    class: "center"
  },
  is = {
    class: "ticker"
  },
  rs = {
    class: "jettons"
  },
  ds = {
    class: "right"
  },
  us = {
    class: "fiat"
  },
  ms = M({
    __name: "MyTokensListItem",
    props: {
      jetton: {},
      analyticsSource: {},
      bclData: {}
    },
    setup(u) {
      const e = u,
        a = E(() => U().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: e.jetton.shortname
          },
          query: {
            from: e.analyticsSource
          }
        })),
        n = E(() => e.jetton.stats.tonCollected && e.bclData && e.jetton.stats.tonCollected.div(e.bclData.tonForDex).times(100).toNumber()),
        i = E(() => e.jetton.ownedAmount ? me(e.jetton.ownedAmount, e.jetton.ticker).frontend : "-"),
        s = E(() => e.jetton.ownedAmountUSD ? me(e.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        c = E(() => {
          if (!e.jetton.pnlPercent) return;
          const o = e.jetton.pnlPercent.lt(0),
            d = e.jetton.pnlPercent.abs(),
            v = Math.min(new ae(d.toFixed(2)).decimalPlaces(), 2);
          return {
            direction: o ? "down" : "up",
            formattedPnlPercent: d.toFixed(v)
          }
        });
      return (o, d) => {
        const v = Le,
          b = ne;
        return r(), $(b, {
          to: t(a),
          class: "memepad-jetton-list-item"
        }, {
          default: D(() => [_(v, {
            image: t(se)(o.jetton.iconFileKey),
            "collected-percent": t(n)
          }, null, 8, ["image", "collected-percent"]), l("div", cs, [l("div", is, g(o.jetton.ticker), 1), l("div", rs, g(t(i)), 1)]), l("div", ds, [l("div", us, g(t(s)), 1), l("div", {
            class: G(["pnl", t(c) && `is-${t(c).direction}`])
          }, g(t(c) ? `${t(c).direction==="up"?"+":"-"}${t(c).formattedPnlPercent}%` : "-"), 3)])]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  ps = w(ms, [
    ["__scopeId", "data-v-e8b07f30"]
  ]),
  _s = {
    class: "ticker"
  },
  vs = {
    key: 0,
    class: "values"
  },
  hs = {
    key: 0,
    class: "holders-count"
  },
  fs = {
    class: "text"
  },
  ys = {
    key: 1,
    class: "transactions-count"
  },
  gs = {
    class: "text"
  },
  Ss = {
    key: 2,
    class: "market-cap"
  },
  Es = {
    class: "label"
  },
  bs = {
    class: "value"
  },
  Ls = M({
    __name: "ListItem",
    props: {
      jetton: {},
      analyticsSource: {},
      bclData: {}
    },
    setup(u) {
      const e = u,
        a = E(() => U().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: e.jetton.shortname
          },
          query: {
            from: e.analyticsSource
          }
        })),
        n = E(() => e.jetton.stats.tonCollected && e.bclData && e.jetton.stats.tonCollected.div(e.bclData.tonForDex).times(100).toNumber()),
        i = s => {
          const c = s.decimalPlaces();
          return Math.max(Math.min(1, c), 0)
        };
      return (s, c) => {
        const o = Le,
          d = F,
          v = ne;
        return r(), $(v, {
          to: t(a),
          class: "memepad-jetton-list-item"
        }, {
          default: D(() => [_(o, {
            image: t(se)(s.jetton.iconFileKey),
            "collected-percent": t(n)
          }, null, 8, ["image", "collected-percent"]), l("div", _s, g(s.jetton.ticker), 1), s.jetton.stats.transactionsCount !== void 0 || s.jetton.stats.marketCap ? (r(), h("div", vs, [s.jetton.stats.holdersCount !== void 0 ? (r(), h("div", hs, [_(d, {
            name: "personal",
            class: "icon"
          }), l("span", fs, g(("formatCount" in s ? s.formatCount : t(K))(s.jetton.stats.holdersCount, 0).full), 1)])) : k("", !0), s.jetton.stats.transactionsCount !== void 0 ? (r(), h("div", ys, [_(d, {
            name: "transfer",
            class: "icon"
          }), l("span", gs, g(("formatCount" in s ? s.formatCount : t(K))(s.jetton.stats.transactionsCount, 0).full), 1)])) : k("", !0), s.jetton.stats.marketCap ? (r(), h("div", Ss, [l("span", Es, g(("t" in s ? s.t : t(A))("memepad.jetton.stats.market_cap")), 1), l("span", bs, g(`$${("formatCount"in s?s.formatCount:t(K))(s.jetton.stats.marketCap,i(s.jetton.stats.marketCap)).full}`), 1)])) : k("", !0)])) : k("", !0)]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  Cs = w(Ls, [
    ["__scopeId", "data-v-2503edef"]
  ]),
  Ts = M({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {},
      bclData: {},
      myTokens: {
        type: Boolean
      }
    },
    setup(u) {
      const e = u,
        a = E(() => e.myTokens ? ps : Cs);
      return (n, i) => (r(), $(Re, {
        tag: "div",
        name: "memepad-list-transitions",
        class: "memepad-jetton-list"
      }, {
        default: D(() => [(r(!0), h(B, null, ee(n.items, s => (r(), $(je(t(a)), {
          key: s.shortname,
          jetton: s,
          "analytics-source": n.analyticsSource,
          "bcl-data": n.bclData
        }, null, 8, ["jetton", "analytics-source", "bcl-data"]))), 128))]),
        _: 1
      }))
    }
  }),
  Ce = w(Ts, [
    ["__scopeId", "data-v-77701242"]
  ]),
  $s = {
    class: "memepad-explore-panel-list"
  },
  ks = {
    class: "top"
  },
  Is = {
    class: "search-btn-wrapper"
  },
  As = {
    key: 0,
    class: "connect"
  },
  Ms = {
    key: 1,
    class: "connect"
  },
  ws = {
    key: 1,
    class: "empty-state"
  },
  Ds = M({
    __name: "PanelList",
    props: X({
      appearedItems: {},
      bclData: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: X(["search"], ["update:modelValue"]),
    setup(u) {
      const e = ye(u, "modelValue"),
        a = Ue(),
        n = Ke(),
        i = [{
          value: p.FRESH,
          pingDot: !0
        }, {
          value: p.HOT
        }, {
          value: p.BLUMING
        }, {
          value: p.BLUMED
        }, {
          value: p.MY_TOKENS
        }].map(c => {
          const o = {
            [p.FRESH]: "New",
            [p.HOT]: "Hot",
            [p.BLUMING]: "Bluming",
            [p.BLUMED]: "Listed",
            [p.MY_TOKENS]: "My tokens"
          };
          return {
            ...c,
            label: o[c.value]
          }
        }),
        s = E(() => {
          switch (e.value) {
            case p.FRESH:
              return j.FRESH;
            case p.BLUMING:
              return j.BLUMING;
            case p.HOT:
              return j.HOT;
            case p.MY_TOKENS:
              return j.POSITIONS;
            case p.BLUMED:
              return j.BLUMED
          }
        });
      return (c, o) => {
        const d = F,
          v = Xe,
          b = Fe,
          I = Ce,
          L = Ze;
        return r(), h("div", $s, [l("div", ks, [_(v, {
          modelValue: e.value,
          "onUpdate:modelValue": o[1] || (o[1] = S => e.value = S),
          items: t(i)
        }, {
          after: D(() => [l("div", Is, [l("button", {
            type: "button",
            class: "search reset",
            onClick: o[0] || (o[0] = S => c.$emit("search"))
          }, [_(d, {
            name: "search",
            class: "icon"
          })])])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (t(a) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in c ? c.WALLET_LOCAL_AND_REMOTE_STATUS : t(oe)).DISCONNECTED || t(a) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in c ? c.WALLET_LOCAL_AND_REMOTE_STATUS : t(oe)).MUST_RECONNECT) && e.value === t(p).MY_TOKENS ? (r(), h("div", As, [o[3] || (o[3] = l("div", {
          class: "label"
        }, "Connect you wallet to see your positions", -1)), l("button", {
          type: "button",
          class: "reset",
          onClick: o[2] || (o[2] = S => t(n).runConnectionFlow())
        }, g(("t" in c ? c.t : t(A))("wallet.connect.btn")), 1)])) : t(a) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in c ? c.WALLET_LOCAL_AND_REMOTE_STATUS : t(oe)).LOADING ? (r(), h("div", Ms, [_(b, {
          type: t(Be).LIGHT
        }, null, 8, ["type"])])) : c.appearedItems ? (r(), h(B, {
          key: 2
        }, [c.appearedItems.length ? (r(), $(I, {
          key: e.value,
          items: c.appearedItems,
          "analytics-source": t(s),
          "bcl-data": c.bclData,
          "my-tokens": e.value === t(p).MY_TOKENS
        }, null, 8, ["items", "analytics-source", "bcl-data", "my-tokens"])) : e.value === t(p).MY_TOKENS ? (r(), h("div", ws, [_(d, {
          name: "add-plus-circle",
          class: "icon"
        }), o[4] || (o[4] = l("div", {
          class: "label"
        }, "No tokens yet. Buy or launch one.", -1))])) : k("", !0)], 64)) : (r(), h(B, {
          key: 3
        }, ee(6, S => l("div", {
          key: S,
          class: "skeleton"
        }, [_(L, {
          class: "image"
        }), _(L, {
          class: "ticker"
        }), _(L, {
          class: "stats"
        })])), 64))])
      }
    }
  }),
  Ps = w(Ds, [
    ["__scopeId", "data-v-ebbfb529"]
  ]),
  Ns = () => {
    const u = z(() => "", "$nnokZ0cAmU"),
      e = z(() => !1, "$dxYpAQPdtd"),
      a = z("$pDWqkemNGG"),
      n = We(async o => (e.value = !0, {
        res: await J.getMemepadSearch(o),
        search: o
      }), ({
        res: o,
        search: d
      }) => {
        e.value = !1, u.value = d, a.value = o.err ? void 0 : o.data
      });
    return {
      _flow: {
        init: () => {},
        destroy: () => {
          u.value = "", e.value = !1, a.value = void 0
        }
      },
      search: o => {
        o !== u.value && (o === "" ? (e.value = !1, a.value = void 0, u.value = "") : n(o))
      },
      searchLine: E(() => u.value),
      data: E(() => a.value ?? []),
      isSearching: E(() => e.value)
    }
  },
  Os = {
    class: "memepad-search page"
  },
  js = M({
    __name: "Search",
    emits: ["close"],
    setup(u, {
      emit: e
    }) {
      const a = e,
        n = C(),
        i = Ns();
      i._flow.init(), Q(() => i._flow.destroy());
      const {
        bclData: s
      } = be(), c = C(!1), o = C(""), d = [];
      (() => {
        d.push(setTimeout(() => {
          c.value = !0
        }, 400))
      })(), Q(() => {
        d.forEach(L => clearTimeout(L))
      });
      const {
        debouncedFunction: b
      } = Se(i.search, 600);
      return Z(o, b), de().memepad.memepadSearchOpen(), tt(async () => {
        var L;
        (L = n.value) == null || L.blur(), await Ve(), await He(0), a("close")
      }), (L, S) => {
        const y = et,
          m = Ce;
        return r(), h("div", Os, [_(y, {
          ref_key: "searchWithTitleComponent",
          ref: n,
          modelValue: t(o),
          "onUpdate:modelValue": S[0] || (S[0] = f => te(o) ? o.value = f : null),
          placeholder: ("t" in L ? L.t : t(A))("memepad.search.input_placeholder"),
          activated: t(c),
          autofocus: "",
          "is-loading": t(i).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), t(i).data ? (r(), $(m, {
          key: 0,
          items: t(i).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in L ? L.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : t(j)).SEARCH,
          "bcl-data": t(s)
        }, null, 8, ["items", "analytics-source", "bcl-data"])) : k("", !0)])
      }
    }
  }),
  Rs = w(js, [
    ["__scopeId", "data-v-751f134f"]
  ]),
  le = (u, e, a) => {
    const n = Math.max(0, u.length - 1),
      i = C([...u]),
      s = C(n),
      c = () => {
        s.value < i.value.length - 1 && s.value++
      },
      o = E(() => {
        const f = Math.max(0, s.value - a + 1),
          T = Math.min(s.value + 1, i.value.length);
        return [...i.value].slice(f, T).reverse()
      }),
      d = E(() => i.value.reverse()[s.value]);
    let v;
    return {
      init: () => {
        clearInterval(v), v = _e(c, e)
      },
      destroy: () => {
        i.value = [], s.value = 0, clearInterval(v)
      },
      addItems: f => {
        i.value.push(...f)
      },
      setItems: f => {
        i.value = f, s.value = f.length - 1
      },
      pause: () => {
        clearInterval(v)
      },
      unpause: () => {
        clearInterval(v), v = _e(c, e)
      },
      items: E(() => i.value),
      appearedItems: o,
      currentAppearedItem: d
    }
  },
  Us = () => {
    const u = Ge(),
      e = Je(),
      a = C(),
      n = {
        [p.FRESH]: Y.CREATED_AT,
        [p.HOT]: Y.TRANSACTIONS,
        [p.BLUMING]: Y.NEAREST_TO_LISTING,
        [p.BLUMED]: Y.PUBLISHED_AT
      },
      i = {
        [p.FRESH]: q.EXCLUDE,
        [p.HOT]: q.INCLUDE,
        [p.BLUMING]: q.INCLUDE_LISTED,
        [p.BLUMED]: q.ONLY
      },
      s = de(),
      c = async m => {
        if (m === p.MY_TOKENS)
          if (e.wallet.value.status === "connected") {
            const T = await J.getMemepadJettonsPositions(e.wallet.value.address.default);
            return Ye(T) ? pe(T.data.jettons) : T
          } else return pe([]);
        const f = n[m];
        return await J.getMemepadJettonsList(f, i[m])
      }, o = C(), d = z(() => p.FRESH, "$SbGDXlzgsy"), b = C(Ee(async () => await c(d.value), m => {
        if (d.value === p.FRESH) {
          if (a.value) {
            a.value.unpause();
            const f = a.value.items,
              T = m.filter(P => !f.some(O => O.id === P.id));
            a.value.addItems(T)
          } else {
            const f = [...m].reverse();
            a.value = le(f, 1e3, 60), a.value.init()
          }
          return
        } else a.value && a.value.pause();
        o.value ? o.value.stepList.setItems([...m].reverse()) : (o.value = {
          stepList: le([...m].reverse(), 1e3, 60)
        }, o.value.stepList.init())
      }, 5e3));
    let I;
    const L = async () => {
      await b.value.exec(), I = Z(d, async m => {
        var T;
        b.value.destroy(), (T = o.value) == null || T.stepList.destroy(), o.value = void 0, await b.value.exec();
        const f = (() => {
          switch (m) {
            case p.FRESH:
              return H.FRESH;
            case p.BLUMING:
              return H.BLUMING;
            case p.HOT:
              return H.HOT;
            case p.MY_TOKENS:
              return H.POSITIONS;
            case p.BLUMED:
              return H.BLUMED
          }
        })();
        s.memepad.memepadOpenPanelListTab({
          source: f
        })
      })
    }, S = () => {
      var m, f;
      b.value.destroy(), (m = o.value) == null || m.stepList.destroy(), o.value = void 0, (f = a.value) == null || f.destroy(), a.value = void 0, I == null || I()
    };
    u.onConnected(() => {
      d.value === p.MY_TOKENS && b.value.exec()
    });
    const y = E(() => {
      var m, f;
      return d.value === p.FRESH ? (m = a.value) == null ? void 0 : m.appearedItems : (f = o.value) == null ? void 0 : f.stepList.appearedItems
    });
    return {
      init: L,
      destroy: S,
      panelListActiveTab: d,
      panelListAppearedItems: y
    }
  },
  Ks = () => {
    const u = C(),
      e = E(() => {
        var c;
        return (c = u.value) == null ? void 0 : c.stepList.currentAppearedItem
      }),
      a = c => {
        u.value || (u.value = {
          stepList: le([], 1e3, 15)
        }, u.value.stepList.init()), u.value.stepList.addItems(c.reverse())
      },
      n = C(Ee(async () => await J.getMemepadExploreEvents(), c => {
        a(c.transactions)
      }, 9e3));
    return {
      init: async () => {
        await n.value.exec()
      },
      destroy: () => {
        var c;
        n.value.destroy(), (c = u.value) == null || c.stepList.destroy(), u.value = void 0
      },
      eventAppearedItem: E(() => e.value)
    }
  },
  Bs = () => {
    const u = C(),
      a = xe(async () => qe(await J.getMemepadExploreSpotlight()), s => u.value = s.jettons, 5e3);
    return {
      init: async () => {
        await a.exec()
      },
      destroy: () => {
        a.destroy()
      },
      spotlight: E(() => u.value)
    }
  },
  Fs = () => {
    const u = Ks(),
      e = Bs(),
      a = Us();
    return {
      _flow: {
        init: async () => {
          await Promise.all([u.init(), e.init(), a.init()])
        },
        destroy: () => {
          u.destroy(), e.destroy(), a.destroy()
        }
      },
      eventAppearedItem: u.eventAppearedItem,
      spotlight: e.spotlight,
      panelListActiveTab: a.panelListActiveTab,
      panelListAppearedItems: a.panelListAppearedItems
    }
  },
  Ws = {
    key: 0,
    class: "memepad-explore"
  },
  Vs = {
    class: "header"
  },
  Hs = {
    class: "title"
  },
  Gs = M({
    __name: "Index",
    setup(u) {
      const {
        eventAppearedItem: e,
        spotlight: a,
        panelListActiveTab: n,
        panelListAppearedItems: i,
        _flow: {
          init: s,
          destroy: c
        }
      } = Fs(), {
        bclData: o
      } = be(), d = C(!1);
      s().then(() => {
        d.value = !0
      }), Q(() => {
        c()
      });
      const v = C(!!ve().query.search),
        b = () => U().push({
          name: "memepad-new"
        }),
        I = () => {
          U().push({
            query: {
              search: "1"
            }
          }), v.value = !0
        },
        L = () => {
          v.value = !1, U().push({
            query: {
              search: void 0
            }
          }), ve().meta.back = void 0
        };
      return (S, y) => {
        var W;
        const m = yt,
          f = At,
          T = as,
          P = Ps,
          O = Qe,
          R = Rs;
        return r(), h(B, null, [t(d) ? (r(), h("div", Ws, [l("div", Vs, [l("div", Hs, [l("span", null, g(("t" in S ? S.t : t(A))("memepad.explore.title")), 1), y[1] || (y[1] = l("div", {
          class: "beta"
        }, "beta", -1))]), _(m, {
          onLaunch: b
        })]), t(e) ? (r(), $(f, {
          key: 0,
          event: t(e),
          class: "event"
        }, null, 8, ["event"])) : k("", !0), (W = t(a)) != null && W[0] ? (r(), $(T, {
          key: 1,
          class: "spotlight",
          list: t(a),
          "bcl-data": t(o)
        }, null, 8, ["list", "bcl-data"])) : k("", !0), _(P, {
          modelValue: t(n),
          "onUpdate:modelValue": y[0] || (y[0] = N => te(n) ? n.value = N : null),
          "appeared-items": t(i),
          "bcl-data": t(o),
          onSearch: I
        }, null, 8, ["modelValue", "appeared-items", "bcl-data"])])) : (r(), $(O, {
          key: 1
        })), t(v) ? (r(), $(R, {
          key: 2,
          onClose: L
        })) : k("", !0)], 64)
      }
    }
  }),
  Js = w(Gs, [
    ["__scopeId", "data-v-ac281d4d"]
  ]),
  xs = {
    class: "memepad-index page"
  },
  fe = "memepad-intro",
  Ys = M({
    __name: "index",
    setup(u) {
      const {
        $webApp: e
      } = ce(), a = C(e.storage.local.get(fe) ? "explore" : "intro"), n = () => {
        a.value = "explore", e.storage.local.set(fe, "true")
      };
      return de().memepad.memepadExploreOpen(), (s, c) => {
        const o = Te,
          d = ct,
          v = Js;
        return r(), h("div", xs, [_(o), t(a) === "intro" ? (r(), $(d, {
          key: 0,
          onStart: n
        })) : t(a) === "explore" ? (r(), $(v, {
          key: 1
        })) : k("", !0)])
      }
    }
  }),
  ln = w(Ys, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  ln as
  default
};