import {
  _ as re
} from "./CRAtpxpj.js";
import {
  _ as ue
} from "./BpEFwugf.js";
import {
  d as C,
  a as m,
  c as I,
  b as r,
  t as L,
  e as s,
  f as T,
  k as h,
  x as w,
  j as $,
  ay as F,
  P as W,
  az as te,
  r as g,
  F as S,
  m as A,
  g as O,
  V as G,
  B as me,
  A as se,
  N as z,
  C as pe,
  aS as de,
  h as _e,
  W as V,
  J as x,
  aT as P,
  aU as ve,
  aV as he,
  aW as Ie,
  aX as Le,
  aY as Y,
  n as Se,
  aZ as ne,
  aH as X,
  a_ as be,
  a$ as Ee,
  b0 as ge,
  a8 as Te,
  w as ye,
  X as ae,
  b1 as Ae,
  b2 as Me,
  b3 as u,
  b4 as H,
  a4 as fe,
  a7 as ke,
  a9 as q,
  b5 as Ce,
  ao as $e,
  b6 as j,
  b7 as K,
  ab as oe,
  b8 as Oe,
  b9 as le,
  K as R,
  ac as ce,
  ba as ie,
  bb as Z,
  av as Ne,
  bc as B,
  aP as Pe,
  o as we
} from "./TkfSaITf.js";
import {
  _ as De,
  a as Ue
} from "./DqdsUiZE.js";
import {
  _ as Re,
  u as Be
} from "./tYZSFAd1.js";
import {
  _ as xe,
  a as je
} from "./BCrYy15O.js";
import {
  _ as Ke
} from "./Clf4VBun.js";
import {
  _ as Fe
} from "./DTWuhP8N.js";
import "./CGLuwj_F.js";
const Ve = {
    class: "memepad-intro"
  },
  He = {
    class: "content"
  },
  Je = {
    class: "title"
  },
  We = {
    class: "note"
  },
  Ge = C({
    __name: "Intro",
    emits: ["start"],
    setup(l) {
      return (t, o) => {
        const c = ue;
        return m(), I("div", Ve, [r("div", He, [r("div", Je, L(("t" in t ? t.t : s(T))("memepad.intro.title")), 1), r("button", {
          type: "button",
          class: "reset",
          onClick: o[0] || (o[0] = a => t.$emit("start"))
        }, L(("t" in t ? t.t : s(T))("memepad.intro.button_text")), 1)]), h(c, {
          "no-background": ""
        }, {
          default: w(() => [r("div", We, L(("t" in t ? t.t : s(T))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  ze = $(Ge, [
    ["__scopeId", "data-v-59c654b1"]
  ]),
  Ye = {
    class: "memepad-sheet"
  },
  Xe = {
    class: "title"
  },
  qe = {
    class: "subtitle"
  },
  Ze = {
    class: "label"
  },
  Qe = {
    class: "actions"
  },
  et = {
    key: 0,
    class: "dont-show"
  },
  tt = {
    class: "checkbox"
  },
  st = C({
    __name: "Sheet",
    props: F({
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
    emits: F(["close", "readMoreClick"], ["update:modelValue"]),
    setup(l, {
      emit: t
    }) {
      const {
        $webApp: o
      } = W(), c = l, a = t, n = te(l, "modelValue"), e = g(!c.dontShowStorageKey), i = g(!1), p = S({
        get: () => n.value && e.value,
        set: _ => {
          n.value = _, i.value && c.dontShowStorageKey && o.storage.local.set(c.dontShowStorageKey, "true")
        }
      });
      (() => {
        c.dontShowStorageKey && (e.value = !o.storage.local.get(c.dontShowStorageKey))
      })();
      const b = () => a("readMoreClick"),
        y = () => {
          p.value = !1, a("close", {
            source: "modal"
          })
        },
        M = () => {
          p.value = !1, a("close", {
            source: "button"
          })
        };
      return (_, d) => {
        const f = se,
          E = z,
          N = De,
          k = pe,
          D = de;
        return m(), A(D, {
          "model-value": s(p),
          "onUpdate:modelValue": y
        }, {
          default: w(() => [r("div", Ye, [h(f, {
            name: _.lottie,
            size: 116
          }, null, 8, ["name"]), r("div", Xe, L(_.title), 1), r("div", null, [r("div", qe, L(_.subtitle), 1), _.hideReadMore ? O("", !0) : (m(), I("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: b
          }, [r("span", Ze, L(("t" in _ ? _.t : s(T))("base.read_more")), 1), h(E, {
            name: "arrow-right",
            class: "icon"
          })]))]), r("div", Qe, [_.dontShowStorageKey ? (m(), I("div", et, [r("div", tt, [h(N, {
            modelValue: s(i),
            "onUpdate:modelValue": d[0] || (d[0] = U => G(i) ? i.value = U : null)
          }, null, 8, ["modelValue"]), r("span", {
            class: "label",
            onClick: d[1] || (d[1] = U => i.value = !s(i))
          }, L(("t" in _ ? _.t : s(T))("memepad.sheet.dont_show_again_label")), 1)])])) : O("", !0), h(k, {
            label: _.buttonText,
            fill: "",
            size: s(me).LARGE,
            onClick: M
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  nt = $(st, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  Q = "memepad-launch-jetton",
  at = C({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(l, {
      emit: t
    }) {
      const {
        $webApp: o
      } = W(), c = t, a = g(!1), n = g(o.storage.local.get(Q) ? "watched" : "unwatched"), e = () => {
        n.value === "watched" ? c("launch") : a.value = !0
      }, i = () => {
        o.storage.local.set(Q, "true"), c("launch")
      };
      return (p, v) => {
        const b = nt;
        return m(), I(V, null, [r("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: e
        }, [v[1] || (v[1] = r("i", {
          class: "seedling"
        }, null, -1)), _e(" " + L(("t" in p ? p.t : s(T))("memepad.explore.launch.button_text")), 1)]), h(b, {
          modelValue: s(a),
          "onUpdate:modelValue": v[0] || (v[0] = y => G(a) ? a.value = y : null),
          title: ("t" in p ? p.t : s(T))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in p ? p.t : s(T))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in p ? p.t : s(T))("memepad.explore.launch_modal.button_text"),
          "hide-read-more": "",
          lottie: "animations/Lightning",
          onClose: i
        }, null, 8, ["modelValue", "title", "subtitle", "button-text"])], 64)
      }
    }
  }),
  ot = $(at, [
    ["__scopeId", "data-v-9b8c98c6"]
  ]),
  lt = ["src"],
  ct = {
    key: 1,
    class: "user-avatar-empty"
  },
  it = {
    class: "text"
  },
  rt = {
    key: 0,
    class: "user-name"
  },
  ut = {
    key: 1,
    class: "user-address"
  },
  mt = {
    class: "action"
  },
  pt = {
    class: "amount"
  },
  dt = {
    class: "ticker"
  },
  _t = {
    class: "seconds"
  },
  vt = C({
    __name: "Event",
    props: {
      event: {}
    },
    setup(l) {
      const t = l,
        o = S(() => T(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        c = S(() => x().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.event.shortname
          },
          query: {
            from: P.ACTIONBAR
          }
        })),
        a = S(() => {
          const n = ve(t.event.timestamp);
          return n.isDate ? n.label : `${n.label} ago`
        });
      return (n, e) => {
        const i = z,
          p = he("I18nT"),
          v = ne,
          b = X;
        return m(), A(b, {
          to: s(c),
          class: Se(["memepad-explore-event", `is-${n.event.type.toLowerCase()}`])
        }, {
          default: w(() => [n.event.user.avatarUrl ? (m(), I("img", {
            key: 0,
            src: n.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, lt)) : (m(), I("div", ct, [h(i, {
            name: "space-invader",
            class: "icon"
          })])), r("div", it, [n.event.user.nickname ? (m(), I("span", rt, L(n.event.user.nickname), 1)) : (m(), I("span", ut, L(("sliceWalletAddress" in n ? n.sliceWalletAddress : s(Ie))(n.event.user.address)), 1)), r("span", mt, L(s(o)), 1), n.event.amount ? (m(), A(p, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: w(() => [r("span", pt, L(`${("formatTon"in n?n.formatTon:s(Le))(n.event.amount)} TON`), 1)]),
            _: 1
          })) : O("", !0)]), h(v, {
            src: s(Y)(n.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), r("span", dt, L(n.event.ticker), 1), r("span", _t, L(s(a)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  ht = $(vt, [
    ["__scopeId", "data-v-9a23721a"]
  ]),
  It = {
    class: "memepad-explore-bluming"
  },
  Lt = {
    class: "header"
  },
  St = {
    class: "title"
  },
  bt = {
    class: "ticker"
  },
  Et = C({
    __name: "Bluming",
    props: {
      jetton: {},
      bclData: {}
    },
    setup(l) {
      const t = l,
        o = x().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: P.SPOTLIGHT
          }
        }),
        c = S(() => ({
          isReleased: !1,
          percent: t.jetton.stats.tonCollected && t.bclData && t.jetton.stats.tonCollected.div(t.bclData.tonForDex).times(100),
          marketDetails: {
            statistics: {
              holdersCount: t.jetton.stats.holdersCount,
              transactionsCount: t.jetton.stats.transactionsCount,
              marketCap: t.jetton.stats.marketCap
            }
          }
        }));
      return (a, n) => {
        const e = se,
          i = ne,
          p = X,
          v = Re;
        return m(), I("div", It, [r("div", Lt, [h(e, {
          name: "animations/Fire",
          size: 28
        }), r("div", St, L(("t" in a ? a.t : s(T))("memepad.explore.bluming.title")), 1)]), h(p, {
          to: s(o),
          class: "inner"
        }, {
          default: w(() => [h(i, {
            src: s(Y)(a.jetton.iconFileKey),
            size: 56
          }, null, 8, ["src"]), r("span", bt, L(a.jetton.ticker), 1)]),
          _: 1
        }, 8, ["to"]), h(v, be(Ee(s(c))), null, 16)])
      }
    }
  }),
  gt = $(Et, [
    ["__scopeId", "data-v-b1bf22a4"]
  ]),
  Tt = {
    class: "inner"
  },
  yt = {
    class: "ticker"
  },
  At = {
    key: 0,
    class: "market-cap"
  },
  Mt = {
    class: "label"
  },
  ft = {
    class: "value"
  },
  kt = C({
    __name: "Card",
    props: {
      jetton: {},
      bclData: {}
    },
    setup(l) {
      const t = l,
        o = S(() => x().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          }
        })),
        c = S(() => t.jetton.stats.tonCollected && t.bclData && t.jetton.stats.tonCollected.div(t.bclData.tonForDex).times(100).toNumber());
      return (a, n) => {
        const e = xe,
          i = X;
        return m(), A(i, {
          to: s(o),
          class: "memepad-jetton-card"
        }, {
          default: w(() => [h(e, {
            image: s(Y)(a.jetton.iconFileKey),
            "collected-percent": s(c)
          }, null, 8, ["image", "collected-percent"]), r("div", Tt, [r("div", yt, L(a.jetton.ticker), 1), a.jetton.stats.marketCap ? (m(), I("div", At, [r("span", Mt, L(("t" in a ? a.t : s(T))("memepad.jetton.stats.market_cap")), 1), r("span", ft, L(`$${("formatCount"in a?a.formatCount:s(ge))(a.jetton.stats.marketCap,0).full}`), 1)])) : O("", !0)])]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  Ct = $(kt, [
    ["__scopeId", "data-v-533ec682"]
  ]),
  $t = {
    class: "memepad-explore-spotlight"
  },
  Ot = {
    class: "list"
  },
  Nt = C({
    __name: "Spotlight",
    props: {
      list: {},
      bclData: {}
    },
    setup(l) {
      const t = l;
      return (o, c) => {
        const a = Ct,
          n = Te("horizontal-wheel-scroll");
        return m(), I("div", $t, [ye((m(), I("div", Ot, [(m(!0), I(V, null, ae(t.list, e => (m(), A(a, {
          key: e.shortname,
          jetton: e,
          class: "item",
          "bcl-data": o.bclData
        }, null, 8, ["jetton", "bcl-data"]))), 128))])), [
          [n]
        ])])
      }
    }
  }),
  Pt = $(Nt, [
    ["__scopeId", "data-v-969f155d"]
  ]),
  wt = {
    class: "memepad-explore-panel-list"
  },
  Dt = {
    class: "top"
  },
  Ut = {
    key: 0,
    class: "connect"
  },
  Rt = {
    key: 1,
    class: "connect"
  },
  Bt = {
    key: 1,
    class: "empty-state"
  },
  xt = C({
    __name: "PanelList",
    props: F({
      appearedItems: {},
      bclData: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: F(["search"], ["update:modelValue"]),
    setup(l) {
      const t = te(l, "modelValue"),
        o = Ae(),
        c = Me(),
        a = [{
          value: u.FRESH,
          pingDot: !0
        }, {
          value: u.HOT
        }, {
          value: u.BLUMING
        }, {
          value: u.BLUMED
        }, {
          value: u.POSITIONS
        }].map(e => {
          const i = {
            [u.FRESH]: "Fresh",
            [u.HOT]: "Hot",
            [u.BLUMING]: "Bluming",
            [u.BLUMED]: "Blumed",
            [u.POSITIONS]: "Positions"
          };
          return {
            ...e,
            label: i[e.value]
          }
        }),
        n = S(() => {
          switch (t.value) {
            case u.FRESH:
              return P.FRESH;
            case u.BLUMING:
              return P.BLUMING;
            case u.HOT:
              return P.HOT;
            case u.POSITIONS:
              return P.POSITIONS;
            case u.BLUMED:
              return P.BLUMED
          }
        });
      return (e, i) => {
        const p = z,
          v = Ue,
          b = ke,
          y = je,
          M = Ke;
        return m(), I("div", wt, [r("div", Dt, [h(v, {
          modelValue: t.value,
          "onUpdate:modelValue": i[1] || (i[1] = _ => t.value = _),
          items: s(a)
        }, {
          after: w(() => [r("button", {
            type: "button",
            class: "search reset",
            onClick: i[0] || (i[0] = _ => e.$emit("search"))
          }, [h(p, {
            name: "search",
            class: "icon"
          })])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (s(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : s(H)).DISCONNECTED || s(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : s(H)).MUST_RECONNECT) && t.value === s(u).POSITIONS ? (m(), I("div", Ut, [i[3] || (i[3] = r("div", {
          class: "label"
        }, "Connect you wallet to see your positions", -1)), r("button", {
          type: "button",
          class: "reset",
          onClick: i[2] || (i[2] = _ => s(c).runConnectionFlow())
        }, L(("t" in e ? e.t : s(T))("wallet.connect.btn")), 1)])) : s(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : s(H)).LOADING ? (m(), I("div", Rt, [h(b, {
          type: s(fe).LIGHT
        }, null, 8, ["type"])])) : e.appearedItems ? (m(), I(V, {
          key: 2
        }, [e.appearedItems.length ? (m(), A(y, {
          key: t.value,
          items: e.appearedItems,
          "analytics-source": s(n),
          "bcl-data": e.bclData
        }, null, 8, ["items", "analytics-source", "bcl-data"])) : t.value === s(u).POSITIONS ? (m(), I("div", Bt, [h(p, {
          name: "add-plus-circle",
          class: "icon"
        }), i[4] || (i[4] = r("div", {
          class: "label"
        }, "No tokens yet. Buy or launch one.", -1))])) : O("", !0)], 64)) : (m(), I(V, {
          key: 3
        }, ae(6, _ => r("div", {
          key: _,
          class: "skeleton"
        }, [h(M, {
          class: "image"
        }), h(M, {
          class: "ticker"
        }), h(M, {
          class: "stats"
        })])), 64))])
      }
    }
  }),
  jt = $(xt, [
    ["__scopeId", "data-v-df2a2772"]
  ]),
  J = (l, t, o) => {
    const c = Math.max(0, l.length - 1),
      a = g([...l]),
      n = g(c),
      e = () => {
        n.value < a.value.length - 1 && n.value++
      },
      i = S(() => [...a.value].slice(0, Math.min(n.value + 1, o)).reverse()),
      p = S(() => i.value[0]);
    let v;
    return {
      init: () => {
        clearInterval(v), v = Pe(e, t)
      },
      destroy: () => {
        a.value = [], n.value = 0, clearInterval(v)
      },
      addItems: d => {
        a.value.push(...d)
      },
      setItems: d => {
        a.value = d, n.value = d.length - 1
      },
      items: S(() => a.value),
      appearedItems: i,
      currentAppearedItem: p
    }
  },
  Kt = () => {
    const l = Ce(),
      t = $e(),
      o = {
        [u.FRESH]: j.CREATED_AT,
        [u.HOT]: j.TRANSACTIONS,
        [u.BLUMING]: j.NEAREST_TO_LISTING,
        [u.BLUMED]: j.PUBLISHED_AT
      },
      c = {
        [u.FRESH]: K.EXCLUDE,
        [u.HOT]: K.INCLUDE,
        [u.BLUMING]: K.INCLUDE_LISTED,
        [u.BLUMED]: K.ONLY
      },
      a = oe(),
      n = async d => {
        if (d === u.POSITIONS)
          if (t.wallet.value.status === "connected") {
            const E = await R.getMemepadJettonsPositions(t.wallet.value.address.default);
            return ie(E) ? Z(E.data.jettons) : E
          } else return Z([]);
        const f = o[d];
        return await R.getMemepadJettonsList(f, c[d])
      }, e = g(), i = S(() => {
        var d;
        return (d = e.value) == null ? void 0 : d.stepList.appearedItems
      }), p = Oe(() => u.FRESH, "$SbGDXlzgsy"), b = g(le(async () => await n(p.value), d => {
        if (p.value === u.FRESH) {
          if (e.value) {
            const E = e.value.stepList.items.map(k => d.find(U => U.shortname === k.shortname) || k),
              N = E.concat(d.filter(k => !E.some(D => D.shortname === k.shortname)));
            e.value.stepList.setItems(N)
          } else {
            const f = [...d].reverse(),
              E = 10,
              N = f.slice(0, E),
              k = f.slice(E);
            e.value = {
              stepList: J(N, 1e3, 60)
            }, e.value.stepList.init(), e.value.stepList.addItems(k)
          }
          return
        }
        e.value ? e.value.stepList.setItems([...d].reverse()) : (e.value = {
          stepList: J([...d].reverse(), 1e3, 60)
        }, e.value.stepList.init())
      }, 6e4));
    let y;
    const M = async () => {
      await b.value.exec(), y = Ne(p, async d => {
        var E;
        b.value.destroy(), (E = e.value) == null || E.stepList.destroy(), e.value = void 0, await b.value.exec();
        const f = (() => {
          switch (d) {
            case u.FRESH:
              return B.FRESH;
            case u.BLUMING:
              return B.BLUMING;
            case u.HOT:
              return B.HOT;
            case u.POSITIONS:
              return B.POSITIONS;
            case u.BLUMED:
              return B.BLUMED
          }
        })();
        a.memepad.memepadOpenPanelListTab({
          source: f
        })
      })
    }, _ = () => {
      var d;
      b.value.destroy(), (d = e.value) == null || d.stepList.destroy(), e.value = void 0, y == null || y()
    };
    return l.onConnected(() => {
      p.value === u.POSITIONS && b.value.exec()
    }), {
      init: M,
      destroy: _,
      panelListActiveTab: p,
      panelListAppearedItems: S(() => i.value)
    }
  },
  Ft = () => {
    const l = g(),
      t = S(() => {
        var e;
        return (e = l.value) == null ? void 0 : e.stepList.currentAppearedItem
      }),
      o = e => {
        l.value || (l.value = {
          stepList: J([], 1e3, 15)
        }, l.value.stepList.init()), l.value.stepList.addItems(e.reverse())
      },
      c = g(le(async () => await R.getMemepadExploreEvents(), e => {
        o(e.transactions)
      }, 4e4));
    return {
      init: async () => {
        await c.value.exec()
      },
      destroy: () => {
        var e;
        c.value.destroy(), (e = l.value) == null || e.stepList.destroy(), l.value = void 0
      },
      eventAppearedItem: S(() => t.value)
    }
  },
  Vt = () => {
    const l = g(),
      t = q(async () => ce(await R.getMemepadExploreBluming()), n => l.value = n, 6e4),
      o = async () => {
        const n = await R.getMemepadExploreBluming();
        ie(n) && (l.value = n.data)
      };
    return {
      init: async () => {
        await o(), t.exec()
      },
      destroy: () => {
        t.destroy()
      },
      blumingJetton: S(() => l.value)
    }
  },
  Ht = () => {
    const l = g(),
      o = q(async () => ce(await R.getMemepadExploreSpotlight()), n => l.value = n.jettons, 6e4);
    return {
      init: async () => {
        await o.exec()
      },
      destroy: () => {
        o.destroy()
      },
      spotlight: S(() => l.value)
    }
  },
  Jt = () => {
    const {
      defaultManagementSdk: l
    } = Be(), t = Ft(), o = Vt(), c = Ht(), a = Kt(), n = g(), e = q(async () => await l.getBclData(), v => n.value = v, 6e4);
    return {
      _flow: {
        init: async () => {
          await Promise.all([t.init(), o.init(), c.init(), a.init(), e.exec()])
        },
        destroy: () => {
          t.destroy(), o.destroy(), c.destroy(), a.destroy(), e.destroy()
        }
      },
      bclData: S(() => n.value),
      eventAppearedItem: t.eventAppearedItem,
      blumingJetton: o.blumingJetton,
      spotlight: c.spotlight,
      panelListActiveTab: a.panelListActiveTab,
      panelListAppearedItems: a.panelListAppearedItems
    }
  },
  Wt = {
    key: 0,
    class: "memepad-explore"
  },
  Gt = {
    class: "header"
  },
  zt = {
    class: "title"
  },
  Yt = C({
    __name: "Index",
    setup(l) {
      const {
        bclData: t,
        eventAppearedItem: o,
        blumingJetton: c,
        spotlight: a,
        panelListActiveTab: n,
        panelListAppearedItems: e,
        _flow: {
          init: i,
          destroy: p
        }
      } = Jt(), v = g(!1);
      i().then(() => {
        v.value = !0
      }), we(() => {
        p()
      });
      const b = () => x().push({
          name: "memepad-new"
        }),
        y = () => x().push({
          name: "memepad-search"
        });
      return (M, _) => {
        const d = ot,
          f = ht,
          E = gt,
          N = Pt,
          k = jt,
          D = Fe;
        return s(v) ? (m(), I("div", Wt, [r("div", Gt, [r("div", zt, [r("span", null, L(("t" in M ? M.t : s(T))("memepad.explore.title")), 1), _[1] || (_[1] = r("div", {
          class: "beta"
        }, "beta", -1))]), h(d, {
          onLaunch: b
        })]), s(o) ? (m(), A(f, {
          key: 0,
          event: s(o),
          class: "event"
        }, null, 8, ["event"])) : O("", !0), s(c) ? (m(), A(E, {
          key: 1,
          class: "bluming",
          jetton: s(c),
          "bcl-data": s(t)
        }, null, 8, ["jetton", "bcl-data"])) : O("", !0), s(a) ? (m(), A(N, {
          key: 2,
          list: s(a),
          "bcl-data": s(t)
        }, null, 8, ["list", "bcl-data"])) : O("", !0), h(k, {
          modelValue: s(n),
          "onUpdate:modelValue": _[0] || (_[0] = U => G(n) ? n.value = U : null),
          "appeared-items": s(e),
          "bcl-data": s(t),
          onSearch: y
        }, null, 8, ["modelValue", "appeared-items", "bcl-data"])])) : (m(), A(D, {
          key: 1
        }))
      }
    }
  }),
  Xt = $(Yt, [
    ["__scopeId", "data-v-ce50507c"]
  ]),
  qt = {
    class: "memepad-index page"
  },
  ee = "memepad-intro",
  Zt = C({
    __name: "index",
    setup(l) {
      const {
        $webApp: t
      } = W(), o = g(t.storage.local.get(ee) ? "explore" : "intro"), c = () => {
        o.value = "explore", t.storage.local.set(ee, "true")
      };
      return oe().memepad.memepadExploreOpen(), (n, e) => {
        const i = re,
          p = ze,
          v = Xt;
        return m(), I("div", qt, [h(i), s(o) === "intro" ? (m(), A(p, {
          key: 0,
          onStart: c
        })) : s(o) === "explore" ? (m(), A(v, {
          key: 1
        })) : O("", !0)])
      }
    }
  }),
  is = $(Zt, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  is as
  default
};