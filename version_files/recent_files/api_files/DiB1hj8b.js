import {
  d as F,
  o as _,
  c as L,
  a as v,
  b as B,
  G as $,
  n as ee,
  aI as ne,
  b5 as oe,
  f as H,
  H as U,
  j as m,
  ad as ie,
  b1 as le,
  Y as q,
  b6 as J,
  z as X,
  D as G,
  e as r,
  b4 as re,
  aq as w,
  m as ce,
  t as E,
  A as de,
  _ as ue,
  U as pe,
  F as me,
  q as ve,
  aW as K,
  bd as _e,
  be as ye,
  ab as Ie,
  a5 as Se,
  M as t,
  bf as Y,
  J as D,
  ah as O,
  I as te,
  bg as Ee,
  ai as b,
  ae as x,
  an as Q,
  K as ge,
  bh as g,
  am as Le,
  aj as Z,
  bi as T,
  bj as M,
  aM as fe,
  bk as he
} from "./aUn4L-is.js";
import {
  g as Te
} from "./Btvch9Xs.js";
import {
  u as Me
} from "./DfyM1DXl.js";
const ke = {
    class: "inner"
  },
  Ae = {
    key: 0,
    class: "live"
  },
  Pe = F({
    __name: "ImageCollectedCircle",
    props: {
      image: {},
      collectedPercent: {},
      isReleased: {
        type: Boolean
      },
      streamOnline: {
        type: Boolean
      }
    },
    setup(i) {
      return (e, o) => {
        const u = oe;
        return _(), L("div", {
          class: ee(["memepad-jetton-image-collected-circle", {
            "is-released": e.isReleased
          }]),
          style: ne({
            "--collected-percent": e.collectedPercent
          })
        }, [v("div", ke, [B(u, {
          src: e.image,
          size: 48,
          class: "image"
        }, null, 8, ["src"]), e.streamOnline ? (_(), L("div", Ae, "LIVE")) : $("", !0)])], 6)
      }
    }
  }),
  je = H(Pe, [
    ["__scopeId", "data-v-abe4cfd5"]
  ]),
  Ce = {
    class: "center"
  },
  Ne = {
    class: "ticker"
  },
  we = {
    key: 0,
    class: "base-stats"
  },
  De = {
    key: 0,
    class: "holders-count"
  },
  be = {
    class: "text"
  },
  Re = {
    key: 1,
    class: "transactions-count"
  },
  Ue = {
    class: "text"
  },
  Oe = {
    key: 1,
    class: "my-tokens-stats"
  },
  Be = {
    class: "jettons"
  },
  $e = {
    key: 0,
    class: "base-values"
  },
  Ge = {
    class: "market-cap"
  },
  We = {
    class: "label"
  },
  Ve = {
    class: "value"
  },
  Ye = {
    class: "lifetime"
  },
  Je = {
    class: "text"
  },
  Ke = {
    key: 1,
    class: "my-tokens-values"
  },
  Xe = {
    class: "fiat"
  },
  xe = F({
    __name: "ListItem",
    props: {
      jetton: {},
      analyticsSource: {
        default: void 0
      },
      mode: {
        default: U.BASE
      },
      isDiscover: {
        type: Boolean,
        default: !1
      }
    },
    setup(i) {
      const e = i,
        o = m(() => {
          const a = {
            from: e.analyticsSource
          };
          return e.isDiscover && (a.discover = "1"), ie().resolve({
            name: "memepad-jetton-shortname",
            params: {
              shortname: e.jetton.shortname
            },
            query: a
          })
        }),
        u = m(() => {
          if (e.jetton.tokenForDex) return e.jetton.stats.tokenCollected && e.jetton.stats.tokenCollected.div(e.jetton.tokenForDex).times(100).toNumber()
        }),
        c = a => {
          const k = a.decimalPlaces();
          return Math.max(Math.min(1, k), 0)
        },
        d = m(() => le(e.jetton.releaseTimestamp).label),
        n = m(() => e.jetton.ownedAmount ? q(e.jetton.ownedAmount, e.jetton.ticker).frontend : "-"),
        y = m(() => e.jetton.ownedAmountUSD ? q(e.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        p = m(() => e.jetton.pnlPercent ? Te(e.jetton.pnlPercent) : void 0),
        s = m(() => e.jetton.stats.marketCap ? `$${J(e.jetton.stats.marketCap,{accuracy:c(e.jetton.stats.marketCap)}).full}` : "-");
      return (a, k) => {
        const A = je,
          j = ue,
          I = pe;
        return _(), X(I, {
          to: r(o),
          class: "memepad-jetton-list-item"
        }, {
          default: G(() => {
            var C;
            return [B(A, {
              image: r(re)(a.jetton.iconFileKey),
              "collected-percent": r(u),
              "is-released": a.jetton.isReleased,
              "stream-online": a.jetton.streamOnline
            }, null, 8, ["image", "collected-percent", "is-released", "stream-online"]), v("div", Ce, [v("div", Ne, [w(a.$slots, "ticker", {
              jetton: a.jetton
            }, () => [ce(E(a.jetton.ticker), 1)], !0)]), a.mode === r(U).BASE ? (_(), L("div", we, [w(a.$slots, "base-stats", {
              jetton: a.jetton,
              mCap: r(s),
              timeSince: r(d)
            }, () => [a.jetton.stats.holdersCount !== void 0 ? (_(), L("div", De, [B(j, {
              name: "personal",
              class: "icon"
            }), v("span", be, E(("formatCount" in a ? a.formatCount : r(J))(a.jetton.stats.holdersCount, {
              accuracy: 0
            }).full), 1)])) : $("", !0), a.jetton.stats.transactionsCount !== void 0 ? (_(), L("div", Re, [B(j, {
              name: "transfer",
              class: "icon"
            }), v("span", Ue, E(("formatCount" in a ? a.formatCount : r(J))(a.jetton.stats.transactionsCount, {
              accuracy: 0
            }).full), 1)])) : $("", !0)], !0)])) : a.mode === r(U).MY_TOKENS ? (_(), L("div", Oe, [v("div", Be, E(r(n)), 1)])) : $("", !0)]), a.mode === r(U).BASE ? (_(), L("div", $e, [w(a.$slots, "base-values", {
              jetton: a.jetton,
              mCap: r(s),
              timeSince: r(d)
            }, () => [v("div", Ge, [v("span", We, E(("t" in a ? a.t : r(de))("memepad.jetton.stats.market_cap")), 1), v("span", Ve, E(r(s)), 1)]), v("div", Ye, [B(j, {
              name: "environment-leaf",
              class: "icon"
            }), v("span", Je, E(r(d)), 1)])], !0)])) : a.mode === r(U).MY_TOKENS ? (_(), L("div", Ke, [v("div", Xe, E(r(y)), 1), v("div", {
              class: ee(["pnl", r(p) && r(p).cls])
            }, E(((C = r(p)) == null ? void 0 : C.formatted) ?? "-"), 3)])) : $("", !0)]
          }),
          _: 3
        }, 8, ["to"])
      }
    }
  }),
  Fe = H(xe, [
    ["__scopeId", "data-v-caed6a86"]
  ]),
  He = F({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {
        default: void 0
      },
      mode: {
        default: void 0
      },
      isDiscover: {
        type: Boolean,
        default: !1
      }
    },
    setup(i) {
      const e = i;
      return (o, u) => {
        const c = Fe;
        return _(), X(_e, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: G(() => [(_(!0), L(me, null, ve(e.items, d => (_(), X(c, {
            key: d.shortname,
            jetton: d,
            "analytics-source": e.analyticsSource,
            mode: e.mode,
            "is-discover": e.isDiscover
          }, {
            ticker: G(n => [w(o.$slots, "item-ticker", K({
              ref_for: !0
            }, n), void 0, !0)]),
            "base-stats": G(n => [w(o.$slots, "item-base-stats", K({
              ref_for: !0
            }, n), void 0, !0)]),
            "base-values": G(n => [w(o.$slots, "item-base-values", K({
              ref_for: !0
            }, n), void 0, !0)]),
            _: 2
          }, 1032, ["jetton", "analytics-source", "mode", "is-discover"]))), 128))]),
          _: 3
        })
      }
    }
  }),
  at = H(He, [
    ["__scopeId", "data-v-2d4c5591"]
  ]),
  se = (i, e, o) => {
    const u = Math.max(0, i.length - 1),
      c = D([...i].reverse()),
      d = D(u),
      n = () => {
        d.value < c.value.length - 1 && d.value++
      },
      y = m(() => {
        const I = Math.max(0, d.value - o + 1),
          C = Math.min(d.value + 1, c.value.length);
        return [...c.value].slice(I, C).reverse()
      }),
      p = m(() => [...c.value].reverse()[d.value]);
    let s;
    return {
      init: () => {
        clearInterval(s), s = fe(n, e)
      },
      destroy: () => {
        c.value = [], d.value = 0, clearInterval(s)
      },
      addItems: I => {
        c.value.push(...[...I].reverse())
      },
      setItems: I => {
        c.value = I, d.value = I.length - 1
      },
      items: m(() => c.value),
      appearedItems: y,
      currentAppearedItem: p
    }
  },
  ze = ({
    source: i = te.BLUM
  } = {}) => {
    const e = ye(),
      o = Ie(),
      u = Se();
    let c;
    (l => {
      l.LIST = "list", l.STEP_LIST = "step-list", l.PAGINATION_LIST = "pagination-list"
    })(c || (c = {}));
    const d = {
        [t.NEW]: "step-list",
        [t.LIVE]: "list",
        [t.HOT]: "list",
        [t.BLUMING]: "pagination-list",
        [t.DEX]: "pagination-list",
        [t.MCAP]: "pagination-list",
        [t.MY_TOKENS]: "list",
        [t.LISTINGS]: "pagination-list",
        [t.STARRED]: "list"
      },
      n = async ({
        type: l,
        pageToken: P
      }) => {
        if (l === t.MY_TOKENS) {
          const W = o.wallet.value.status === "connected" ? o.wallet.value.address.default : void 0;
          if (!W) return Z({
            jettons: [],
            nextPageToken: ""
          });
          const R = await b.getMemepadJettonsPositions(W);
          return Q(R) ? Z({
            jettons: R.data.jettons,
            nextPageToken: ""
          }) : R
        }
        const f = {
            [t.NEW]: T.CREATED_AT,
            [t.HOT]: T.HOT,
            [t.LIVE]: T.LIVE_STREAMS,
            [t.BLUMING]: T.NEAREST_TO_LISTING,
            [t.MCAP]: T.MARKET_CAP,
            [t.DEX]: T.PUBLISHED_AT,
            [t.LISTINGS]: T.IS_LISTED_ON_BLUM,
            [t.STARRED]: T.STARRED
          },
          S = {
            [t.NEW]: M.EXCLUDE,
            [t.HOT]: M.INCLUDE,
            [t.LIVE]: M.INCLUDE,
            [t.BLUMING]: M.INCLUDE_LISTED,
            [t.MCAP]: M.INCLUDE,
            [t.DEX]: M.ONLY,
            [t.LISTINGS]: M.INCLUDE,
            [t.STARRED]: M.INCLUDE
          },
          h = f[l],
          N = S[l];
        return await b.getMemepadJettonsSection(h, N, i, P)
      }, y = Y(() => t.NEW, "$SbGDXlzgsy"), p = () => {
        const l = y.value;
        switch (d[l]) {
          case "step-list":
            return {
              type: "step-list", stepList: void 0, interval: x(async () => await n({
                type: l
              }), f => {
                var h;
                if (((h = s.value) == null ? void 0 : h.type) !== "step-list" || l !== y.value) return;
                const S = s.value.stepList;
                if (!S) s.value.stepList = se(f.jettons, 1e3, 60), s.value.stepList.init();
                else {
                  const N = S,
                    W = f.jettons.filter(V => !N.items.some(z => z.id === V.id)),
                    R = N.items.map(V => f.jettons.find(ae => ae.id === V.id) || V);
                  N.setItems(R), N.addItems(W)
                }
              }, 5e3)
            };
          case "pagination-list":
            return {
              type: "pagination-list", pagination: Me(async S => {
                const h = await n({
                  type: l,
                  pageToken: S
                });
                if (!Q(h)) throw O("Failed to get list");
                return {
                  items: h.data.jettons,
                  nextPageToken: h.data.nextPageToken ?? ""
                }
              })
            };
          case "list":
            return {
              type: "list", data: void 0, interval: x(async () => await n({
                type: l
              }), f => {
                var S;
                ((S = s.value) == null ? void 0 : S.type) !== "list" || l !== y.value || (s.value.data = f.jettons)
              }, 5e3)
            };
          default:
            throw O("Unknown type")
        }
      }, s = D(p()), a = () => {
        var l;
        if (s.value) switch (s.value.type) {
          case "list":
            s.value.interval.destroy();
            break;
          case "step-list":
            (l = s.value.stepList) == null || l.destroy(), s.value.interval.destroy();
            break;
          case "pagination-list":
            break;
          default:
            throw s.value, O("Unknown type")
        }
      }, k = async () => {
        switch (s.value = p(), s.value.type) {
          case "step-list": {
            await s.value.interval.exec();
            break
          }
          case "pagination-list": {
            await s.value.pagination.load();
            break
          }
          case "list": {
            await s.value.interval.exec();
            break
          }
          default:
            throw O("Unknown type")
        }
      };
    let A;
    const j = async () => {
      await k(), A = ge(y, async l => {
        a(), await k();
        const P = (() => {
          switch (l) {
            case t.NEW:
              return g.NEW;
            case t.BLUMING:
              return g.BLUMING;
            case t.HOT:
              return g.HOT;
            case t.LIVE:
              return g.LIVE;
            case t.MY_TOKENS:
              return g.POSITIONS;
            case t.MCAP:
              return g.MCAP;
            case t.DEX:
              return g.DEX;
            case t.LISTINGS:
              return g.LISTINGS;
            case t.STARRED:
              return g.STARRED
          }
        })();
        u.memepad.memepadOpenPanelListTab({
          source: P
        })
      })
    }, I = () => {
      a(), A == null || A()
    };
    e.onConnected(() => {
      y.value === t.MY_TOKENS && (a(), k())
    });
    const C = m(() => {
      var P;
      if (!s.value) return;
      switch (s.value.type) {
        case "step-list":
          return (P = s.value.stepList) == null ? void 0 : P.appearedItems;
        case "pagination-list":
          return s.value.pagination.isInitialized ? s.value.pagination.data : void 0;
        case "list":
          return s.value.data;
        default:
          throw O("Unknown type")
      }
    });
    return {
      init: j,
      destroy: I,
      onPaginationLoad: async () => {
        s.value.type === "pagination-list" && await s.value.pagination.load()
      },
      activeTab: y,
      items: C
    }
  },
  qe = () => {
    const i = D(),
      e = m(() => {
        var n;
        return (n = i.value) == null ? void 0 : n.stepList.currentAppearedItem
      }),
      o = n => {
        i.value || (i.value = {
          stepList: se([], 1e3, 15)
        }, i.value.stepList.init()), i.value.stepList.addItems(n)
      },
      u = D(Ee(async () => await b.getMemepadExploreEvents(), n => {
        o(n.transactions)
      }, 9e3));
    return {
      init: async () => {
        await u.value.exec()
      },
      destroy: () => {
        var n;
        u.value.destroy(), (n = i.value) == null || n.stepList.destroy(), i.value = void 0
      },
      eventAppearedItem: m(() => e.value)
    }
  },
  Qe = () => {
    const i = D(),
      o = x(async () => Le(await b.getMemepadExploreSpotlight()), n => i.value = n.jettons, 5e3);
    return {
      init: async () => {
        await o.exec()
      },
      destroy: () => {
        o.destroy()
      },
      getReactions: n => b.getMemepadJettonReactions(n),
      spotlight: m(() => i.value)
    }
  },
  nt = () => {
    const i = qe(),
      e = Qe(),
      o = ze();
    return {
      _flow: {
        init: async () => {
          await Promise.all([i.init(), e.init(), o.init()])
        },
        destroy: () => {
          i.destroy(), e.destroy(), o.destroy()
        }
      },
      events: {
        eventAppearedItem: i.eventAppearedItem
      },
      spotlight: {
        items: e.spotlight,
        getReactions: e.getReactions
      },
      panelList: {
        activeTab: o.activeTab,
        items: o.items,
        onPaginationLoad: o.onPaginationLoad
      }
    }
  },
  ot = ({
    source: i = te.BLUM
  } = {}) => {
    const e = Y(() => "", "$nnokZ0cAmU"),
      o = Y(() => !1, "$dxYpAQPdtd"),
      u = Y("$pDWqkemNGG"),
      c = he(async p => (o.value = !0, {
        res: await b.getMemepadSearch(p, i),
        search: p
      }), ({
        res: p,
        search: s
      }) => {
        o.value = !1, e.value = s, u.value = p.err ? void 0 : p.data
      });
    return {
      _flow: {
        init: () => {},
        destroy: () => {
          e.value = "", o.value = !1, u.value = void 0
        }
      },
      search: p => {
        p !== e.value && (p === "" ? (o.value = !1, u.value = void 0, e.value = "") : c(p))
      },
      searchLine: m(() => e.value),
      data: m(() => u.value),
      isSearching: m(() => o.value)
    }
  };
export {
  at as _, ot as a, nt as b, ze as u
};