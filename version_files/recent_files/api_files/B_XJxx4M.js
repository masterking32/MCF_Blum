import {
  d as b,
  F as _,
  f as P,
  af as A,
  a$ as D,
  aX as F,
  bp as Y,
  ax as K,
  ag as W,
  a as o,
  c as r,
  b as i,
  k as f,
  e as a,
  t as y,
  g as x,
  n as Z,
  M as Q,
  N as O,
  j as L,
  W as M,
  X as q,
  m as B,
  ap as V,
  ao as ee,
  S as te,
  r as R,
  b4 as se,
  av as oe,
  bq as w,
  br as ne,
  bs as ae,
  o as G,
  bt as re,
  x as T,
  bu as ie,
  bv as E,
  bg as le,
  bw as de,
  a9 as ce,
  K as ue,
  bd as me,
  bc as _e
} from "./DY2exbLM.js";
import {
  _ as pe
} from "./DwY6G7dj.js";
import {
  _ as fe
} from "./BORrngx1.js";
import {
  _ as ve
} from "./B2KMU1na.js";
import {
  M as he
} from "./BQqyrcul.js";
import "./BIHLq8tr.js";
import "./DmbIYr1V.js";
const ye = {
    class: "user-avatar-wrapper"
  },
  ke = {
    key: 0,
    class: "logo"
  },
  je = ["src"],
  Ie = ["src"],
  $e = {
    class: "content"
  },
  ge = {
    key: 0,
    class: "blum-name"
  },
  Pe = {
    class: "label"
  },
  Ce = {
    class: "label"
  },
  be = {
    key: 3,
    class: "description"
  },
  Le = {
    class: "values"
  },
  we = {
    class: "percent"
  },
  Ae = {
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
    setup(I) {
      const e = I,
        p = _(() => {
          if (e.isCreator) return P("memepad.holders.list_item.creator");
          if (e.isLiquidityPool) return P("memepad.holders.list_item.liquidity_pool")
        }),
        v = _(() => {
          const n = Math.min(new A(e.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${e.holder.percent.toFixed(n)}%`
        }),
        m = _(() => `${D(e.holder.amount).full} ${e.holder.ticker}`),
        g = _(() => F(Y(e.holder.address))),
        d = () => Q().copy(e.holder.address),
        k = K(`avatars/${W(0,9)}`, "webp");
      return (n, c) => {
        var u, l;
        const t = O;
        return o(), r("div", {
          class: Z(["memepad-jetton-holder-important", {
            "is-liquidity-pool": n.isLiquidityPool
          }])
        }, [i("div", ye, [n.isLiquidityPool ? (o(), r("div", ke, [f(t, {
          name: "logo",
          class: "icon"
        })])) : (u = n.user) != null && u.avatarUrl ? (o(), r("img", {
          key: 1,
          src: n.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, je)) : (o(), r("img", {
          key: 2,
          src: a(k),
          class: "user-avatar-empty"
        }, null, 8, Ie))]), i("div", $e, [n.isLiquidityPool ? (o(), r("div", ge, "Blum")) : (l = n.user) != null && l.nickname ? (o(), r("button", {
          key: 1,
          class: "user-name reset",
          type: "button",
          onClick: c[0] || (c[0] = j => d())
        }, [i("div", Pe, y(n.user.nickname), 1), f(t, {
          name: "edit-copy",
          class: "icon"
        })])) : (o(), r("button", {
          key: 2,
          class: "user-address reset",
          type: "button",
          onClick: c[1] || (c[1] = j => d())
        }, [i("div", Ce, y(a(g)), 1), f(t, {
          name: "edit-copy",
          class: "icon"
        })])), a(p) ? (o(), r("div", be, y(a(p)), 1)) : x("", !0)]), i("div", Le, [i("div", we, y(a(v)), 1), i("div", Ae, y(a(m)), 1)])], 2)
      }
    }
  }),
  He = L(Me, [
    ["__scopeId", "data-v-a75e4c04"]
  ]),
  Ue = {
    class: "memepad-jetton-page-holders-important"
  },
  Se = b({
    __name: "HoldersImportant",
    props: {
      items: {}
    },
    setup(I) {
      return (e, p) => {
        const v = He;
        return o(), r("div", Ue, [(o(!0), r(M, null, q(e.items, m => (o(), B(v, V({
          key: m.holder.address,
          ref_for: !0
        }, m), null, 16))), 128))])
      }
    }
  }),
  Te = L(Se, [
    ["__scopeId", "data-v-9241a61f"]
  ]),
  Re = {
    class: "memepad-jetton-holder"
  },
  Oe = {
    class: "user-avatar-wrapper"
  },
  qe = ["src"],
  Be = ["src"],
  Ee = {
    class: "content"
  },
  Je = {
    class: "label"
  },
  Ne = {
    class: "label"
  },
  De = {
    key: 2,
    class: "description"
  },
  Fe = {
    class: "values"
  },
  Ye = {
    class: "percent"
  },
  Ke = {
    class: "amount"
  },
  We = b({
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
    setup(I) {
      const e = I,
        p = _(() => {
          const n = [];
          return e.isYourShare && n.push(P("memepad.holders.list_item.your_share")), e.isCreator && n.push(P("memepad.holders.list_item.creator")), n.join(" • ")
        }),
        v = _(() => {
          const n = Math.min(new A(e.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${e.holder.percent.toFixed(n)}%`
        }),
        m = _(() => `${D(e.holder.amount).full} ${e.holder.ticker}`),
        g = _(() => F(Y(e.holder.address))),
        d = () => Q().copy(e.holder.address),
        k = K(`avatars/${W(0,9)}`, "webp");
      return (n, c) => {
        var u, l;
        const t = O;
        return o(), r("div", Re, [i("div", Oe, [(u = n.user) != null && u.avatarUrl ? (o(), r("img", {
          key: 0,
          src: n.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, qe)) : (o(), r("img", {
          key: 1,
          src: a(k),
          class: "user-avatar-empty"
        }, null, 8, Be))]), i("div", Ee, [(l = n.user) != null && l.nickname ? (o(), r("button", {
          key: 0,
          class: "user-name reset",
          type: "button",
          onClick: c[0] || (c[0] = j => d())
        }, [i("div", Je, y(n.user.nickname), 1), f(t, {
          name: "edit-copy",
          class: "icon"
        })])) : (o(), r("button", {
          key: 1,
          class: "user-address reset",
          type: "button",
          onClick: c[1] || (c[1] = j => d())
        }, [i("div", Ne, y(a(g)), 1), f(t, {
          name: "edit-copy",
          class: "icon"
        })])), a(p) ? (o(), r("div", De, y(a(p)), 1)) : x("", !0)]), i("div", Fe, [i("div", Ye, y(a(v)), 1), i("div", Ke, y(a(m)), 1)])])
      }
    }
  }),
  xe = L(We, [
    ["__scopeId", "data-v-9a577834"]
  ]),
  Qe = {
    class: "memepad-jetton-page-holders"
  },
  Ve = b({
    __name: "Holders",
    props: {
      items: {}
    },
    setup(I) {
      return (e, p) => {
        const v = xe;
        return o(), r("div", Qe, [(o(!0), r(M, null, q(e.items, m => (o(), B(v, V({
          key: m.holder.address,
          ref_for: !0
        }, m), null, 16))), 128))])
      }
    }
  }),
  Ge = L(Ve, [
    ["__scopeId", "data-v-2c126f4f"]
  ]),
  Xe = {
    class: "memepad-jetton-page-holders"
  },
  ze = {
    class: "holder-rist"
  },
  Ze = {
    class: "label"
  },
  et = {
    class: "holder-rist-tooltip-detail"
  },
  tt = {
    key: 0,
    class: "skeletons"
  },
  J = 5,
  N = 15,
  st = b({
    __name: "PageHolders",
    props: {
      jetton: {},
      jettonHolders: {},
      jettonModalControls: {},
      jettonInformation: {}
    },
    setup(I) {
      const e = I,
        p = ee(),
        v = te().getters.mustGetUser.value,
        m = R(!1),
        g = se(() => new Map, "$f6cewRZPDp"),
        d = R();
      let k;
      const n = async () => {
        if (m.value || d.value) return;
        m.value = !0;
        const t = g.value.get(e.jetton.address);
        if (t) {
          d.value = t;
          return
        }
        const u = new he(e.jetton.address);
        k = le(async () => await u.getBuyInfo(new A(1)), () => {}, 4e3);
        const l = await k.exec();
        d.value = l.additionalInfo.routerInfo.address
      };
      oe(() => {
        var t;
        return (t = e.jettonInformation) == null ? void 0 : t.isReleased
      }, t => {
        t && n()
      }, {
        immediate: !0
      });
      const c = _(() => {
        if (!e.jettonHolders || !e.jettonInformation || e.jettonInformation.isReleased && !d.value) return;
        const u = (s, h) => E.Address.parse(s).equals(E.Address.parse(h)),
          l = s => p.wallet.value.status !== "connected" ? !1 : u(s, p.wallet.value.address.default),
          j = e.jettonHolders.map(s => !!d.value && u(d.value, s.address) ? {
            ...s,
            affiliation: w.LIQUIDITY_POOL
          } : s),
          $ = j.filter(h => h.affiliation !== w.LIQUIDITY_POOL).slice(0, J).reduce((h, S) => h.plus(S.percent), new A(0)).gte(N),
          C = j.map(s => {
            const h = (() => {
                if (!(p.wallet.value.status !== "connected" || !l(s.address))) return ne(ae, {
                  address: s.address,
                  nickname: v.username,
                  avatarUrl: v.avatarUrl
                })
              })(),
              S = s.affiliation === w.CREATOR,
              X = s.affiliation === w.LIQUIDITY_POOL,
              z = l(s.address);
            return {
              holder: s,
              user: h,
              isCreator: S,
              isYourShare: z,
              isLiquidityPool: X
            }
          }),
          H = C.filter(s => s.isCreator ? l(s.holder.address) : !s.isLiquidityPool),
          U = C.filter(s => s.isCreator ? !l(s.holder.address) : !!s.isLiquidityPool);
        return {
          isRiskHolder: $,
          items: H,
          importantItems: U
        }
      });
      return G(() => {
        k == null || k.destroy()
      }), (t, u) => {
        var s;
        const l = O,
          j = pe,
          $ = fe,
          C = ve,
          H = Te,
          U = Ge;
        return o(), r("div", Xe, [f($, {
          title: ("t" in t ? t.t : a(P))("memepad.holders.title", {
            ticker: t.jetton.ticker
          }),
          jetton: t.jetton,
          "jetton-modal-controls": t.jettonModalControls
        }, re({
          _: 2
        }, [(s = a(c)) != null && s.isRiskHolder ? {
          name: "right",
          fn: T(() => [f(j, {
            "text-min-width": 136,
            alignment: a(ie).LEFT
          }, {
            default: T(() => [i("div", ze, [f(l, {
              name: "circle-warning",
              class: "icon"
            }), i("span", Ze, y(("t" in t ? t.t : a(P))("memepad.holders.holder_risk.label")), 1)])]),
            inner: T(() => [i("div", et, y(("t" in t ? t.t : a(P))("memepad.holders.holder_risk.tooltip", {
              count: J,
              percentLabel: `${N}%+`
            })), 1)]),
            _: 1
          }, 8, ["alignment"])]),
          key: "0"
        } : void 0]), 1032, ["title", "jetton", "jetton-modal-controls"]), a(c) ? (o(), r(M, {
          key: 1
        }, [f(H, {
          items: a(c).importantItems
        }, null, 8, ["items"]), f(U, {
          items: a(c).items
        }, null, 8, ["items"])], 64)) : (o(), r("div", tt, [(o(), r(M, null, q(6, h => i("div", {
          key: h,
          class: "skeleton"
        }, [f(C, {
          class: "image",
          rounded: ""
        }), f(C, {
          class: "title"
        }), f(C, {
          class: "value"
        })])), 64))]))])
      }
    }
  }),
  ot = L(st, [
    ["__scopeId", "data-v-2314ce8e"]
  ]),
  mt = b({
    inheritAttrs: !1,
    __name: "holders",
    setup(I) {
      const e = de(),
        p = _(() => e.jetton),
        v = _(() => e.jettonShortname),
        m = _(() => e.jettonModalControls),
        g = _(() => e.jettonInformation),
        d = c(),
        k = async () => {
          await d.init()
        }, n = () => {
          d.destroy()
        };
      k(), G(() => {
        n()
      });

      function c() {
        const t = R(),
          u = ce(async () => {
            const $ = await ue.getMemepadJettonHolders(v.value);
            return me((_e($) ? $.data : t.value) || t.value)
          }, $ => {
            t.value = $
          }, 5e3);
        return {
          init: async () => await u.exec(),
          destroy: () => {
            u.destroy(), t.value = void 0
          },
          jettonHolders: _(() => t.value)
        }
      }
      return (t, u) => {
        const l = ot;
        return o(), B(l, {
          jetton: a(p),
          "jetton-holders": a(d).jettonHolders.value,
          "jetton-modal-controls": a(m),
          "jetton-information": a(g)
        }, null, 8, ["jetton", "jetton-holders", "jetton-modal-controls", "jetton-information"])
      }
    }
  });
export {
  mt as
  default
};