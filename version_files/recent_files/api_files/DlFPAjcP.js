import {
  _ as le
} from "./DgvNSdjA.js";
import {
  _ as ce
} from "./BliXxM54.js";
import {
  d as k,
  a as m,
  c as E,
  b as u,
  t as I,
  e as s,
  f as g,
  k as v,
  x as D,
  j as C,
  ay as K,
  P as G,
  az as Z,
  r as b,
  F as T,
  m as O,
  g as P,
  V as J,
  B as ie,
  A as Q,
  N as z,
  C as re,
  aS as ue,
  h as pe,
  W,
  J as V,
  aT as $,
  aU as de,
  aV as me,
  aW as _e,
  aX as ve,
  aY as ee,
  n as Le,
  aZ as te,
  aH as se,
  a_ as Ie,
  a$ as he,
  b0 as Se,
  b1 as Ee,
  b2 as r,
  b3 as F,
  a4 as Te,
  X as ye,
  a7 as be,
  a9 as ne,
  b4 as Ae,
  ao as ge,
  b5 as B,
  b6 as x,
  ab as ae,
  b7 as Me,
  b8 as oe,
  K as H,
  b9 as fe,
  ba as Y,
  av as Oe,
  bb as U,
  ac as ke,
  aP as Ce,
  o as Ne
} from "./DwYsksKZ.js";
import {
  _ as $e,
  a as Pe
} from "./SAyoaBbC.js";
import {
  _ as we,
  u as De
} from "./BBKeLfGy.js";
import {
  _ as Ue
} from "./BYep004I.js";
import {
  _ as Re
} from "./B1l3_1k-.js";
import {
  _ as Be
} from "./D0LDu_rG.js";
import "./D4uVtbIj.js";
const xe = {
    class: "memepad-intro"
  },
  Ke = {
    class: "content"
  },
  Ve = {
    class: "title"
  },
  He = {
    class: "note"
  },
  Fe = k({
    __name: "Intro",
    emits: ["start"],
    setup(p) {
      return (t, o) => {
        const l = ce;
        return m(), E("div", xe, [u("div", Ke, [u("div", Ve, I(("t" in t ? t.t : s(g))("memepad.intro.title")), 1), u("button", {
          type: "button",
          class: "reset",
          onClick: o[0] || (o[0] = a => t.$emit("start"))
        }, I(("t" in t ? t.t : s(g))("memepad.intro.button_text")), 1)]), v(l, {
          "no-background": ""
        }, {
          default: D(() => [u("div", He, I(("t" in t ? t.t : s(g))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  We = C(Fe, [
    ["__scopeId", "data-v-59c654b1"]
  ]),
  je = {
    class: "memepad-sheet"
  },
  Ge = {
    class: "title"
  },
  Je = {
    class: "subtitle"
  },
  ze = {
    class: "label"
  },
  Ye = {
    class: "actions"
  },
  Xe = {
    key: 0,
    class: "dont-show"
  },
  qe = {
    class: "checkbox"
  },
  Ze = k({
    __name: "Sheet",
    props: K({
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
    emits: K(["close", "readMoreClick"], ["update:modelValue"]),
    setup(p, {
      emit: t
    }) {
      const {
        $webApp: o
      } = G(), l = p, a = t, n = Z(p, "modelValue"), e = b(!l.dontShowStorageKey), c = b(!1), i = T({
        get: () => n.value && e.value,
        set: _ => {
          n.value = _, c.value && l.dontShowStorageKey && o.storage.local.set(l.dontShowStorageKey, "true")
        }
      });
      (() => {
        l.dontShowStorageKey && (e.value = !o.storage.local.get(l.dontShowStorageKey))
      })();
      const h = () => a("readMoreClick"),
        y = () => {
          i.value = !1, a("close", {
            source: "modal"
          })
        },
        A = () => {
          i.value = !1, a("close", {
            source: "button"
          })
        };
      return (_, d) => {
        const M = Q,
          S = z,
          N = $e,
          f = re,
          w = ue;
        return m(), O(w, {
          "model-value": s(i),
          "onUpdate:modelValue": y
        }, {
          default: D(() => [u("div", je, [v(M, {
            name: _.lottie,
            size: 116
          }, null, 8, ["name"]), u("div", Ge, I(_.title), 1), u("div", null, [u("div", Je, I(_.subtitle), 1), _.hideReadMore ? P("", !0) : (m(), E("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: h
          }, [u("span", ze, I(("t" in _ ? _.t : s(g))("base.read_more")), 1), v(S, {
            name: "arrow-right",
            class: "icon"
          })]))]), u("div", Ye, [_.dontShowStorageKey ? (m(), E("div", Xe, [u("div", qe, [v(N, {
            modelValue: s(c),
            "onUpdate:modelValue": d[0] || (d[0] = R => J(c) ? c.value = R : null)
          }, null, 8, ["modelValue"]), u("span", {
            class: "label",
            onClick: d[1] || (d[1] = R => c.value = !s(c))
          }, I(("t" in _ ? _.t : s(g))("memepad.sheet.dont_show_again_label")), 1)])])) : P("", !0), v(f, {
            label: _.buttonText,
            fill: "",
            size: s(ie).LARGE,
            onClick: A
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  Qe = C(Ze, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  X = "memepad-launch-jetton",
  et = k({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(p, {
      emit: t
    }) {
      const {
        $webApp: o
      } = G(), l = t, a = b(!1), n = b(o.storage.local.get(X) ? "watched" : "unwatched"), e = () => {
        n.value === "watched" ? l("launch") : a.value = !0
      }, c = () => {
        o.storage.local.set(X, "true"), l("launch")
      };
      return (i, L) => {
        const h = Qe;
        return m(), E(W, null, [u("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: e
        }, [L[1] || (L[1] = u("i", {
          class: "seedling"
        }, null, -1)), pe(" " + I(("t" in i ? i.t : s(g))("memepad.explore.launch.button_text")), 1)]), v(h, {
          modelValue: s(a),
          "onUpdate:modelValue": L[0] || (L[0] = y => J(a) ? a.value = y : null),
          title: ("t" in i ? i.t : s(g))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in i ? i.t : s(g))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in i ? i.t : s(g))("memepad.explore.launch_modal.button_text"),
          "hide-read-more": "",
          lottie: "animations/Lightning",
          onClose: c
        }, null, 8, ["modelValue", "title", "subtitle", "button-text"])], 64)
      }
    }
  }),
  tt = C(et, [
    ["__scopeId", "data-v-9b8c98c6"]
  ]),
  st = ["src"],
  nt = {
    key: 1,
    class: "user-avatar-empty"
  },
  at = {
    class: "text"
  },
  ot = {
    key: 0,
    class: "user-name"
  },
  lt = {
    key: 1,
    class: "user-address"
  },
  ct = {
    class: "action"
  },
  it = {
    class: "amount"
  },
  rt = {
    class: "ticker"
  },
  ut = {
    class: "seconds"
  },
  pt = k({
    __name: "Event",
    props: {
      event: {}
    },
    setup(p) {
      const t = p,
        o = T(() => g(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        l = T(() => V().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.event.shortname
          },
          query: {
            from: $.ACTIONBAR
          }
        })),
        a = T(() => {
          const n = de(t.event.timestamp);
          return n.isDate ? n.label : `${n.label} ago`
        });
      return (n, e) => {
        const c = z,
          i = me("I18nT"),
          L = te,
          h = se;
        return m(), O(h, {
          to: s(l),
          class: Le(["memepad-explore-event", `is-${n.event.type.toLowerCase()}`])
        }, {
          default: D(() => [n.event.user.avatarUrl ? (m(), E("img", {
            key: 0,
            src: n.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, st)) : (m(), E("div", nt, [v(c, {
            name: "space-invader",
            class: "icon"
          })])), u("div", at, [n.event.user.nickname ? (m(), E("span", ot, I(n.event.user.nickname), 1)) : (m(), E("span", lt, I(("sliceWalletAddress" in n ? n.sliceWalletAddress : s(_e))(n.event.user.address)), 1)), u("span", ct, I(s(o)), 1), n.event.amount ? (m(), O(i, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: D(() => [u("span", it, I(`${("formatTon"in n?n.formatTon:s(ve))(n.event.amount)} TON`), 1)]),
            _: 1
          })) : P("", !0)]), v(L, {
            src: s(ee)(n.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), u("span", rt, I(n.event.ticker), 1), u("span", ut, I(s(a)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  dt = C(pt, [
    ["__scopeId", "data-v-9a23721a"]
  ]),
  mt = {
    class: "header"
  },
  _t = {
    class: "title"
  },
  vt = {
    class: "inner"
  },
  Lt = {
    class: "ticker"
  },
  It = k({
    __name: "Spotlight",
    props: {
      jetton: {},
      bclData: {}
    },
    setup(p) {
      const t = p,
        o = T(() => V().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: $.SPOTLIGHT
          }
        })),
        l = T(() => ({
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
        const e = Q,
          c = te,
          i = we,
          L = se;
        return m(), O(L, {
          to: s(o),
          class: "memepad-explore-spotlight"
        }, {
          default: D(() => [u("div", mt, [v(e, {
            name: "animations/Fire",
            size: 28
          }), u("div", _t, I(("t" in a ? a.t : s(g))("memepad.explore.spotlight.title")), 1)]), u("div", vt, [v(c, {
            src: s(ee)(a.jetton.iconFileKey),
            size: 56
          }, null, 8, ["src"]), u("span", Lt, I(a.jetton.ticker), 1)]), v(i, Ie(he(s(l))), null, 16)]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  ht = C(It, [
    ["__scopeId", "data-v-0f4dd182"]
  ]),
  St = {
    class: "memepad-explore-panel-list"
  },
  Et = {
    class: "top"
  },
  Tt = {
    key: 0,
    class: "connect"
  },
  yt = {
    key: 1,
    class: "connect"
  },
  bt = {
    key: 1,
    class: "empty-state"
  },
  At = k({
    __name: "PanelList",
    props: K({
      appearedItems: {},
      bclData: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: K(["search"], ["update:modelValue"]),
    setup(p) {
      const t = Z(p, "modelValue"),
        o = Se(),
        l = Ee(),
        a = [{
          value: r.FRESH,
          pingDot: !0
        }, {
          value: r.HOT
        }, {
          value: r.BLUMING
        }, {
          value: r.BLUMED
        }, {
          value: r.POSITIONS
        }].map(e => {
          const c = {
            [r.FRESH]: "Fresh",
            [r.HOT]: "Hot",
            [r.BLUMING]: "Bluming",
            [r.BLUMED]: "Blumed",
            [r.POSITIONS]: "My tokens"
          };
          return {
            ...e,
            label: c[e.value]
          }
        }),
        n = T(() => {
          switch (t.value) {
            case r.FRESH:
              return $.FRESH;
            case r.BLUMING:
              return $.BLUMING;
            case r.HOT:
              return $.HOT;
            case r.POSITIONS:
              return $.POSITIONS;
            case r.BLUMED:
              return $.BLUMED
          }
        });
      return (e, c) => {
        const i = z,
          L = Pe,
          h = be,
          y = Ue,
          A = Re;
        return m(), E("div", St, [u("div", Et, [v(L, {
          modelValue: t.value,
          "onUpdate:modelValue": c[1] || (c[1] = _ => t.value = _),
          items: s(a)
        }, {
          after: D(() => [u("button", {
            type: "button",
            class: "search reset",
            onClick: c[0] || (c[0] = _ => e.$emit("search"))
          }, [v(i, {
            name: "search",
            class: "icon"
          })])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (s(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : s(F)).DISCONNECTED || s(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : s(F)).MUST_RECONNECT) && t.value === s(r).POSITIONS ? (m(), E("div", Tt, [c[3] || (c[3] = u("div", {
          class: "label"
        }, "Connect you wallet to see your positions", -1)), u("button", {
          type: "button",
          class: "reset",
          onClick: c[2] || (c[2] = _ => s(l).runConnectionFlow())
        }, I(("t" in e ? e.t : s(g))("wallet.connect.btn")), 1)])) : s(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : s(F)).LOADING ? (m(), E("div", yt, [v(h, {
          type: s(Te).LIGHT
        }, null, 8, ["type"])])) : e.appearedItems ? (m(), E(W, {
          key: 2
        }, [e.appearedItems.length ? (m(), O(y, {
          key: t.value,
          items: e.appearedItems,
          "analytics-source": s(n),
          "bcl-data": e.bclData
        }, null, 8, ["items", "analytics-source", "bcl-data"])) : t.value === s(r).POSITIONS ? (m(), E("div", bt, [v(i, {
          name: "add-plus-circle",
          class: "icon"
        }), c[4] || (c[4] = u("div", {
          class: "label"
        }, "No tokens yet. Buy or launch one.", -1))])) : P("", !0)], 64)) : (m(), E(W, {
          key: 3
        }, ye(6, _ => u("div", {
          key: _,
          class: "skeleton"
        }, [v(A, {
          class: "image"
        }), v(A, {
          class: "ticker"
        }), v(A, {
          class: "stats"
        })])), 64))])
      }
    }
  }),
  gt = C(At, [
    ["__scopeId", "data-v-e0754f6a"]
  ]),
  j = (p, t, o) => {
    const l = Math.max(0, p.length - 1),
      a = b([...p]),
      n = b(l),
      e = () => {
        n.value < a.value.length - 1 && n.value++
      },
      c = T(() => [...a.value].slice(0, Math.min(n.value + 1, o)).reverse()),
      i = T(() => a.value.reverse()[n.value]);
    let L;
    return {
      init: () => {
        clearInterval(L), L = Ce(e, t)
      },
      destroy: () => {
        a.value = [], n.value = 0, clearInterval(L)
      },
      addItems: d => {
        a.value.push(...d)
      },
      setItems: d => {
        a.value = d, n.value = d.length - 1
      },
      items: T(() => a.value),
      appearedItems: c,
      currentAppearedItem: i
    }
  },
  Mt = () => {
    const p = Ae(),
      t = ge(),
      o = {
        [r.FRESH]: B.CREATED_AT,
        [r.HOT]: B.TRANSACTIONS,
        [r.BLUMING]: B.NEAREST_TO_LISTING,
        [r.BLUMED]: B.PUBLISHED_AT
      },
      l = {
        [r.FRESH]: x.EXCLUDE,
        [r.HOT]: x.INCLUDE,
        [r.BLUMING]: x.INCLUDE_LISTED,
        [r.BLUMED]: x.ONLY
      },
      a = ae(),
      n = async d => {
        if (d === r.POSITIONS)
          if (t.wallet.value.status === "connected") {
            const S = await H.getMemepadJettonsPositions(t.wallet.value.address.default);
            return fe(S) ? Y(S.data.jettons) : S
          } else return Y([]);
        const M = o[d];
        return await H.getMemepadJettonsList(M, l[d])
      }, e = b(), c = T(() => {
        var d;
        return (d = e.value) == null ? void 0 : d.stepList.appearedItems
      }), i = Me(() => r.FRESH, "$SbGDXlzgsy"), h = b(oe(async () => await n(i.value), d => {
        if (i.value === r.FRESH) {
          if (e.value) {
            const S = e.value.stepList.items.map(f => d.find(R => R.shortname === f.shortname) || f),
              N = S.concat(d.filter(f => !S.some(w => w.shortname === f.shortname)));
            e.value.stepList.setItems(N)
          } else {
            const M = [...d].reverse(),
              S = 10,
              N = M.slice(0, S),
              f = M.slice(S);
            e.value = {
              stepList: j(N, 1e3, 60)
            }, e.value.stepList.init(), e.value.stepList.addItems(f)
          }
          return
        }
        e.value ? e.value.stepList.setItems([...d].reverse()) : (e.value = {
          stepList: j([...d].reverse(), 1e3, 60)
        }, e.value.stepList.init())
      }, 6e4));
    let y;
    const A = async () => {
      await h.value.exec(), y = Oe(i, async d => {
        var S;
        h.value.destroy(), (S = e.value) == null || S.stepList.destroy(), e.value = void 0, await h.value.exec();
        const M = (() => {
          switch (d) {
            case r.FRESH:
              return U.FRESH;
            case r.BLUMING:
              return U.BLUMING;
            case r.HOT:
              return U.HOT;
            case r.POSITIONS:
              return U.POSITIONS;
            case r.BLUMED:
              return U.BLUMED
          }
        })();
        a.memepad.memepadOpenPanelListTab({
          source: M
        })
      })
    }, _ = () => {
      var d;
      h.value.destroy(), (d = e.value) == null || d.stepList.destroy(), e.value = void 0, y == null || y()
    };
    return p.onConnected(() => {
      i.value === r.POSITIONS && h.value.exec()
    }), {
      init: A,
      destroy: _,
      panelListActiveTab: i,
      panelListAppearedItems: T(() => c.value)
    }
  },
  ft = () => {
    const p = b(),
      t = T(() => {
        var e;
        return (e = p.value) == null ? void 0 : e.stepList.currentAppearedItem
      }),
      o = e => {
        p.value || (p.value = {
          stepList: j([], 1e3, 15)
        }, p.value.stepList.init()), p.value.stepList.addItems(e.reverse())
      },
      l = b(oe(async () => await H.getMemepadExploreEvents(), e => {
        o(e.transactions)
      }, 9e3));
    return {
      init: async () => {
        await l.value.exec()
      },
      destroy: () => {
        var e;
        l.value.destroy(), (e = p.value) == null || e.stepList.destroy(), p.value = void 0
      },
      eventAppearedItem: T(() => t.value)
    }
  },
  Ot = () => {
    const p = b(),
      o = ne(async () => ke(await H.getMemepadExploreSpotlight()), n => p.value = n.jettons, 6e4);
    return {
      init: async () => {
        await o.exec()
      },
      destroy: () => {
        o.destroy()
      },
      spotlight: T(() => p.value)
    }
  },
  kt = () => {
    const {
      defaultManagementSdk: p
    } = De(), t = ft(), o = Ot(), l = Mt(), a = b(), n = ne(async () => await p.getBclData(), i => a.value = i, 6e4);
    return {
      _flow: {
        init: async () => {
          await Promise.all([t.init(), o.init(), l.init(), n.exec()])
        },
        destroy: () => {
          t.destroy(), o.destroy(), l.destroy(), n.destroy()
        }
      },
      bclData: T(() => a.value),
      eventAppearedItem: t.eventAppearedItem,
      spotlight: o.spotlight,
      panelListActiveTab: l.panelListActiveTab,
      panelListAppearedItems: l.panelListAppearedItems
    }
  },
  Ct = {
    key: 0,
    class: "memepad-explore"
  },
  Nt = {
    class: "header"
  },
  $t = {
    class: "title"
  },
  Pt = k({
    __name: "Index",
    setup(p) {
      const {
        bclData: t,
        eventAppearedItem: o,
        spotlight: l,
        panelListActiveTab: a,
        panelListAppearedItems: n,
        _flow: {
          init: e,
          destroy: c
        }
      } = kt(), i = b(!1);
      e().then(() => {
        i.value = !0
      }), Ne(() => {
        c()
      });
      const L = () => V().push({
          name: "memepad-new"
        }),
        h = () => V().push({
          name: "memepad-search"
        });
      return (y, A) => {
        var f;
        const _ = tt,
          d = dt,
          M = ht,
          S = gt,
          N = Be;
        return s(i) ? (m(), E("div", Ct, [u("div", Nt, [u("div", $t, [u("span", null, I(("t" in y ? y.t : s(g))("memepad.explore.title")), 1), A[1] || (A[1] = u("div", {
          class: "beta"
        }, "beta", -1))]), v(_, {
          onLaunch: L
        })]), s(o) ? (m(), O(d, {
          key: 0,
          event: s(o),
          class: "event"
        }, null, 8, ["event"])) : P("", !0), (f = s(l)) != null && f[0] ? (m(), O(M, {
          key: 1,
          class: "spotlight",
          jetton: s(l)[0],
          "bcl-data": s(t)
        }, null, 8, ["jetton", "bcl-data"])) : P("", !0), v(S, {
          modelValue: s(a),
          "onUpdate:modelValue": A[0] || (A[0] = w => J(a) ? a.value = w : null),
          "appeared-items": s(n),
          "bcl-data": s(t),
          onSearch: h
        }, null, 8, ["modelValue", "appeared-items", "bcl-data"])])) : (m(), O(N, {
          key: 1
        }))
      }
    }
  }),
  wt = C(Pt, [
    ["__scopeId", "data-v-584d0ac6"]
  ]),
  Dt = {
    class: "memepad-index page"
  },
  q = "memepad-intro",
  Ut = k({
    __name: "index",
    setup(p) {
      const {
        $webApp: t
      } = G(), o = b(t.storage.local.get(q) ? "explore" : "intro"), l = () => {
        o.value = "explore", t.storage.local.set(q, "true")
      };
      return ae().memepad.memepadExploreOpen(), (n, e) => {
        const c = le,
          i = We,
          L = wt;
        return m(), E("div", Dt, [v(c), s(o) === "intro" ? (m(), O(i, {
          key: 0,
          onStart: l
        })) : s(o) === "explore" ? (m(), O(L, {
          key: 1
        })) : P("", !0)])
      }
    }
  }),
  Gt = C(Ut, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  Gt as
  default
};