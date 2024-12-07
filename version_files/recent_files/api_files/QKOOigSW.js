import {
  d as b,
  F as p,
  f as P,
  af as H,
  a$ as D,
  aX as F,
  bq as Y,
  a as n,
  c as a,
  b as i,
  k as m,
  t as k,
  e as r,
  g as K,
  n as X,
  M as W,
  N as q,
  j as L,
  W as w,
  X as R,
  m as B,
  ap as x,
  ao as z,
  S as Z,
  r as O,
  b5 as ee,
  av as te,
  br as M,
  bs as se,
  bt as oe,
  o as Q,
  bu as ne,
  x as T,
  bv as ae,
  bw as E,
  bh as re,
  bx as ie,
  a9 as le,
  K as de,
  be as ce,
  bd as ue
} from "./B8dH5Zvz.js";
import {
  _ as me
} from "./TgnQBGHB.js";
import {
  _ as _e
} from "./CrgK12fK.js";
import {
  _ as pe
} from "./RYa8JR7-.js";
import {
  M as fe
} from "./DkNNnlve.js";
import "./BXBf7By7.js";
import "./brWOrqBM.js";
const he = {
    class: "user-avatar-wrapper"
  },
  ve = {
    key: 0,
    class: "logo"
  },
  ye = ["src"],
  ke = {
    key: 2,
    class: "user-avatar-empty"
  },
  je = {
    class: "content"
  },
  Ie = {
    key: 0,
    class: "blum-name"
  },
  $e = {
    class: "label"
  },
  Pe = {
    class: "label"
  },
  Ce = {
    key: 3,
    class: "description"
  },
  be = {
    class: "values"
  },
  ge = {
    class: "percent"
  },
  Le = {
    class: "amount"
  },
  Me = b({
    __name: "HolderImportant",
    props: {
      holder: {},
      user: {},
      isYourShare: {
        type: Boolean
      },
      isCreator: {
        type: Boolean
      },
      isLiquidityPool: {
        type: Boolean
      }
    },
    setup(j) {
      const e = j,
        f = p(() => {
          if (e.isCreator) return P("memepad.holders.list_item.creator");
          if (e.isLiquidityPool) return P("memepad.holders.list_item.liquidity_pool")
        }),
        v = p(() => {
          const s = Math.min(new H(e.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${e.holder.percent.toFixed(s)}%`
        }),
        _ = p(() => `${D(e.holder.amount).full} ${e.holder.ticker}`),
        $ = p(() => F(Y(e.holder.address))),
        l = () => W().copy(e.holder.address);
      return (s, h) => {
        var t, c;
        const d = q;
        return n(), a("div", {
          class: X(["memepad-jetton-holder-important", {
            "is-liquidity-pool": s.isLiquidityPool
          }])
        }, [i("div", he, [s.isLiquidityPool ? (n(), a("div", ve, [m(d, {
          name: "logo",
          class: "icon"
        })])) : (t = s.user) != null && t.avatarUrl ? (n(), a("img", {
          key: 1,
          src: s.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, ye)) : (n(), a("div", ke, [m(d, {
          name: "space-invader",
          class: "icon"
        })]))]), i("div", je, [s.isLiquidityPool ? (n(), a("div", Ie, "Blum")) : (c = s.user) != null && c.nickname ? (n(), a("button", {
          key: 1,
          class: "user-name reset",
          type: "button",
          onClick: h[0] || (h[0] = u => l())
        }, [i("div", $e, k(s.user.nickname), 1), m(d, {
          name: "edit-copy",
          class: "icon"
        })])) : (n(), a("button", {
          key: 2,
          class: "user-address reset",
          type: "button",
          onClick: h[1] || (h[1] = u => l())
        }, [i("div", Pe, k(r($)), 1), m(d, {
          name: "edit-copy",
          class: "icon"
        })])), r(f) ? (n(), a("div", Ce, k(r(f)), 1)) : K("", !0)]), i("div", be, [i("div", ge, k(r(v)), 1), i("div", Le, k(r(_)), 1)])], 2)
      }
    }
  }),
  He = L(Me, [
    ["__scopeId", "data-v-c17fc71f"]
  ]),
  we = {
    class: "memepad-jetton-page-holders-important"
  },
  Ae = b({
    __name: "HoldersImportant",
    props: {
      items: {}
    },
    setup(j) {
      return (e, f) => {
        const v = He;
        return n(), a("div", we, [(n(!0), a(w, null, R(e.items, _ => (n(), B(v, x({
          key: _.holder.address,
          ref_for: !0
        }, _), null, 16))), 128))])
      }
    }
  }),
  Ue = L(Ae, [
    ["__scopeId", "data-v-9241a61f"]
  ]),
  Se = {
    class: "memepad-jetton-holder"
  },
  Te = {
    class: "user-avatar-wrapper"
  },
  Oe = ["src"],
  qe = {
    key: 1,
    class: "user-avatar-empty"
  },
  Re = {
    class: "content"
  },
  Be = {
    class: "label"
  },
  Ee = {
    class: "label"
  },
  Je = {
    key: 2,
    class: "description"
  },
  Ne = {
    class: "values"
  },
  De = {
    class: "percent"
  },
  Fe = {
    class: "amount"
  },
  Ye = b({
    __name: "Holder",
    props: {
      holder: {},
      user: {},
      isYourShare: {
        type: Boolean
      },
      isCreator: {
        type: Boolean
      },
      isLiquidityPool: {
        type: Boolean
      }
    },
    setup(j) {
      const e = j,
        f = p(() => {
          const s = [];
          return e.isYourShare && s.push(P("memepad.holders.list_item.your_share")), e.isCreator && s.push(P("memepad.holders.list_item.creator")), s.join(" • ")
        }),
        v = p(() => {
          const s = Math.min(new H(e.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${e.holder.percent.toFixed(s)}%`
        }),
        _ = p(() => `${D(e.holder.amount).full} ${e.holder.ticker}`),
        $ = p(() => F(Y(e.holder.address))),
        l = () => W().copy(e.holder.address);
      return (s, h) => {
        var t, c;
        const d = q;
        return n(), a("div", Se, [i("div", Te, [(t = s.user) != null && t.avatarUrl ? (n(), a("img", {
          key: 0,
          src: s.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, Oe)) : (n(), a("div", qe, [m(d, {
          name: "space-invader",
          class: "icon"
        })]))]), i("div", Re, [(c = s.user) != null && c.nickname ? (n(), a("button", {
          key: 0,
          class: "user-name reset",
          type: "button",
          onClick: h[0] || (h[0] = u => l())
        }, [i("div", Be, k(s.user.nickname), 1), m(d, {
          name: "edit-copy",
          class: "icon"
        })])) : (n(), a("button", {
          key: 1,
          class: "user-address reset",
          type: "button",
          onClick: h[1] || (h[1] = u => l())
        }, [i("div", Ee, k(r($)), 1), m(d, {
          name: "edit-copy",
          class: "icon"
        })])), r(f) ? (n(), a("div", Je, k(r(f)), 1)) : K("", !0)]), i("div", Ne, [i("div", De, k(r(v)), 1), i("div", Fe, k(r(_)), 1)])])
      }
    }
  }),
  Ke = L(Ye, [
    ["__scopeId", "data-v-f2ab8209"]
  ]),
  We = {
    class: "memepad-jetton-page-holders"
  },
  xe = b({
    __name: "Holders",
    props: {
      items: {}
    },
    setup(j) {
      return (e, f) => {
        const v = Ke;
        return n(), a("div", We, [(n(!0), a(w, null, R(e.items, _ => (n(), B(v, x({
          key: _.holder.address,
          ref_for: !0
        }, _), null, 16))), 128))])
      }
    }
  }),
  Qe = L(xe, [
    ["__scopeId", "data-v-2c126f4f"]
  ]),
  Ve = {
    class: "memepad-jetton-page-holders"
  },
  Ge = {
    class: "holder-rist"
  },
  Xe = {
    class: "label"
  },
  ze = {
    class: "holder-rist-tooltip-detail"
  },
  Ze = {
    key: 0,
    class: "skeletons"
  },
  J = 5,
  N = 15,
  et = b({
    __name: "PageHolders",
    props: {
      jetton: {},
      jettonHolders: {},
      jettonModalControls: {},
      jettonInformation: {}
    },
    setup(j) {
      const e = j,
        f = z(),
        v = Z().getters.mustGetUser.value,
        _ = O(!1),
        $ = ee(() => new Map, "$f6cewRZPDp"),
        l = O();
      let s;
      const h = async () => {
        if (_.value || l.value) return;
        _.value = !0;
        const t = $.value.get(e.jetton.address);
        if (t) {
          l.value = t;
          return
        }
        const c = new fe(e.jetton.address);
        s = re(async () => await c.getBuyInfo(new H(1)), () => {}, 4e3);
        const u = await s.exec();
        l.value = u.additionalInfo.routerInfo.address
      };
      te(() => {
        var t;
        return (t = e.jettonInformation) == null ? void 0 : t.isReleased
      }, t => {
        t && h()
      }, {
        immediate: !0
      });
      const d = p(() => {
        if (!e.jettonHolders || !e.jettonInformation || e.jettonInformation.isReleased && !l.value) return;
        const c = (o, y) => E.Address.parse(o).equals(E.Address.parse(y)),
          u = o => f.wallet.value.status !== "connected" ? !1 : c(o, f.wallet.value.address.default),
          g = e.jettonHolders.map(o => !!l.value && c(l.value, o.address) ? {
            ...o,
            affiliation: M.LIQUIDITY_POOL
          } : o),
          I = g.filter(y => y.affiliation !== M.LIQUIDITY_POOL).slice(0, J).reduce((y, S) => y.plus(S.percent), new H(0)).gte(N),
          C = g.map(o => {
            const y = (() => {
                if (!(f.wallet.value.status !== "connected" || !u(o.address))) return se(oe, {
                  address: o.address,
                  nickname: v.username,
                  avatarUrl: v.avatarUrl
                })
              })(),
              S = o.affiliation === M.CREATOR,
              V = o.affiliation === M.LIQUIDITY_POOL,
              G = u(o.address);
            return {
              holder: o,
              user: y,
              isCreator: S,
              isYourShare: G,
              isLiquidityPool: V
            }
          }),
          A = C.filter(o => o.isCreator ? u(o.holder.address) : !o.isLiquidityPool),
          U = C.filter(o => o.isCreator ? !u(o.holder.address) : !!o.isLiquidityPool);
        return {
          isRiskHolder: I,
          items: A,
          importantItems: U
        }
      });
      return Q(() => {
        s == null || s.destroy()
      }), (t, c) => {
        var o;
        const u = q,
          g = me,
          I = _e,
          C = pe,
          A = Ue,
          U = Qe;
        return n(), a("div", Ve, [m(I, {
          title: ("t" in t ? t.t : r(P))("memepad.holders.title", {
            ticker: t.jetton.ticker
          }),
          jetton: t.jetton,
          "jetton-modal-controls": t.jettonModalControls
        }, ne({
          _: 2
        }, [(o = r(d)) != null && o.isRiskHolder ? {
          name: "right",
          fn: T(() => [m(g, {
            "text-min-width": 136,
            alignment: r(ae).LEFT
          }, {
            default: T(() => [i("div", Ge, [m(u, {
              name: "circle-warning",
              class: "icon"
            }), i("span", Xe, k(("t" in t ? t.t : r(P))("memepad.holders.holder_risk.label")), 1)])]),
            inner: T(() => [i("div", ze, k(("t" in t ? t.t : r(P))("memepad.holders.holder_risk.tooltip", {
              count: J,
              percentLabel: `${N}%+`
            })), 1)]),
            _: 1
          }, 8, ["alignment"])]),
          key: "0"
        } : void 0]), 1032, ["title", "jetton", "jetton-modal-controls"]), r(d) ? (n(), a(w, {
          key: 1
        }, [m(A, {
          items: r(d).importantItems
        }, null, 8, ["items"]), m(U, {
          items: r(d).items
        }, null, 8, ["items"])], 64)) : (n(), a("div", Ze, [(n(), a(w, null, R(6, y => i("div", {
          key: y,
          class: "skeleton"
        }, [m(C, {
          class: "image",
          rounded: ""
        }), m(C, {
          class: "title"
        }), m(C, {
          class: "value"
        })])), 64))]))])
      }
    }
  }),
  tt = L(et, [
    ["__scopeId", "data-v-2314ce8e"]
  ]),
  ct = b({
    inheritAttrs: !1,
    __name: "holders",
    setup(j) {
      const e = ie(),
        f = p(() => e.jetton),
        v = p(() => e.jettonShortname),
        _ = p(() => e.jettonModalControls),
        $ = p(() => e.jettonInformation),
        l = d(),
        s = async () => {
          await l.init()
        }, h = () => {
          l.destroy()
        };
      s(), Q(() => {
        h()
      });

      function d() {
        const t = O(),
          c = le(async () => {
            const I = await de.getMemepadJettonHolders(v.value);
            return ce((ue(I) ? I.data : t.value) || t.value)
          }, I => {
            t.value = I
          }, 5e3);
        return {
          init: async () => await c.exec(),
          destroy: () => {
            c.destroy(), t.value = void 0
          },
          jettonHolders: p(() => t.value)
        }
      }
      return (t, c) => {
        const u = tt;
        return n(), B(u, {
          jetton: r(f),
          "jetton-holders": r(l).jettonHolders.value,
          "jetton-modal-controls": r(_),
          "jetton-information": r($)
        }, null, 8, ["jetton", "jetton-holders", "jetton-modal-controls", "jetton-information"])
      }
    }
  });
export {
  ct as
  default
};