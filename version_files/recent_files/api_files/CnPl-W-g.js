import {
  _ as te
} from "./C4V7Grzp.js";
import {
  _ as se
} from "./fM0ivJuQ.js";
import {
  d as L,
  j as y,
  z as C,
  R as g,
  aV as E,
  aR as F,
  bg as Y,
  am as N,
  a5 as x,
  o as s,
  c as r,
  a as d,
  b as f,
  e as i,
  t as v,
  D as S,
  n as J,
  u as K,
  _ as W,
  f as w,
  F as U,
  q as B,
  G as V,
  ae as Q,
  P as oe,
  k as re,
  b0 as ae,
  K as ne,
  aF as ie,
  bh as A,
  bi as ce,
  bj as le,
  a7 as q,
  T as de,
  b9 as ue,
  bk as O
} from "./CKELBEop.js";
import {
  M as me
} from "./C1a4eMWf.js";
const _e = {
    class: "user-avatar-wrapper"
  },
  pe = {
    key: 0,
    class: "logo"
  },
  he = ["src"],
  fe = ["src"],
  ve = {
    class: "content"
  },
  ye = {
    key: 0,
    class: "blum-name"
  },
  ke = {
    class: "label"
  },
  Ie = {
    class: "label"
  },
  $e = {
    key: 3,
    class: "description"
  },
  Ce = {
    class: "values"
  },
  be = {
    class: "percent"
  },
  Pe = {
    class: "amount"
  },
  ge = L({
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
    setup(p) {
      const t = p,
        c = y(() => {
          if (t.isCreator) return C("memepad.holders.list_item.creator");
          if (t.isLiquidityPool) return C("memepad.holders.list_item.liquidity_pool")
        }),
        m = y(() => {
          const o = Math.min(new g(t.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${t.holder.percent.toFixed(o)}%`
        }),
        n = y(() => `${E(t.holder.amount).full} ${t.holder.ticker}`),
        l = y(() => F(Y(t.holder.address))),
        u = () => K().copy(t.holder.address),
        b = N(`avatars/${x(0,9)}`, "webp");
      return (o, a) => {
        var _, k;
        const h = W;
        return s(), r("div", {
          class: J(["memepad-jetton-holder-important", {
            "is-liquidity-pool": o.isLiquidityPool
          }])
        }, [d("div", _e, [o.isLiquidityPool ? (s(), r("div", pe, [f(h, {
          name: "logo",
          class: "icon"
        })])) : (_ = o.user) != null && _.avatarUrl ? (s(), r("img", {
          key: 1,
          src: o.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, he)) : (s(), r("img", {
          key: 2,
          src: i(b),
          class: "user-avatar-empty"
        }, null, 8, fe))]), d("div", ve, [o.isLiquidityPool ? (s(), r("div", ye, "Blum")) : (k = o.user) != null && k.nickname ? (s(), r("button", {
          key: 1,
          class: "user-name reset",
          type: "button",
          onClick: a[0] || (a[0] = I => u())
        }, [d("div", ke, v(o.user.nickname), 1), f(h, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), r("button", {
          key: 2,
          class: "user-address reset",
          type: "button",
          onClick: a[1] || (a[1] = I => u())
        }, [d("div", Ie, v(i(l)), 1), f(h, {
          name: "edit-copy",
          class: "icon"
        })])), i(c) ? (s(), r("div", $e, v(i(c)), 1)) : S("", !0)]), d("div", Ce, [d("div", be, v(i(m)), 1), d("div", Pe, v(i(n)), 1)])], 2)
      }
    }
  }),
  Le = w(ge, [
    ["__scopeId", "data-v-a75e4c04"]
  ]),
  we = {
    class: "memepad-jetton-page-holders-important"
  },
  Ae = L({
    __name: "HoldersImportant",
    props: {
      items: {}
    },
    setup(p) {
      return (t, c) => {
        const m = Le;
        return s(), r("div", we, [(s(!0), r(U, null, B(t.items, n => (s(), V(m, Q({
          key: n.holder.address,
          ref_for: !0
        }, n), null, 16))), 128))])
      }
    }
  }),
  Ue = w(Ae, [
    ["__scopeId", "data-v-6e4d1dd7"]
  ]),
  je = {
    class: "memepad-jetton-holder"
  },
  He = {
    class: "user-avatar-wrapper"
  },
  Me = ["src"],
  qe = ["src"],
  Re = {
    class: "content"
  },
  Se = {
    class: "label"
  },
  Be = {
    class: "label"
  },
  Te = {
    key: 2,
    class: "description"
  },
  Oe = {
    class: "values"
  },
  De = {
    class: "percent"
  },
  Ee = {
    class: "amount"
  },
  Fe = L({
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
    setup(p) {
      const t = p,
        c = y(() => {
          const o = [];
          return t.isYourShare && o.push(C("memepad.holders.list_item.your_share")), t.isCreator && o.push(C("memepad.holders.list_item.creator")), o.join(" • ")
        }),
        m = y(() => {
          const o = Math.min(new g(t.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${t.holder.percent.toFixed(o)}%`
        }),
        n = y(() => `${E(t.holder.amount).full} ${t.holder.ticker}`),
        l = y(() => F(Y(t.holder.address))),
        u = () => K().copy(t.holder.address),
        b = N(`avatars/${x(0,9)}`, "webp");
      return (o, a) => {
        var _, k;
        const h = W;
        return s(), r("div", je, [d("div", He, [(_ = o.user) != null && _.avatarUrl ? (s(), r("img", {
          key: 0,
          src: o.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, Me)) : (s(), r("img", {
          key: 1,
          src: i(b),
          class: "user-avatar-empty"
        }, null, 8, qe))]), d("div", Re, [(k = o.user) != null && k.nickname ? (s(), r("button", {
          key: 0,
          class: "user-name reset",
          type: "button",
          onClick: a[0] || (a[0] = I => u())
        }, [d("div", Se, v(o.user.nickname), 1), f(h, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), r("button", {
          key: 1,
          class: "user-address reset",
          type: "button",
          onClick: a[1] || (a[1] = I => u())
        }, [d("div", Be, v(i(l)), 1), f(h, {
          name: "edit-copy",
          class: "icon"
        })])), i(c) ? (s(), r("div", Te, v(i(c)), 1)) : S("", !0)]), d("div", Oe, [d("div", De, v(i(m)), 1), d("div", Ee, v(i(n)), 1)])])
      }
    }
  }),
  Ye = w(Fe, [
    ["__scopeId", "data-v-9a577834"]
  ]),
  Ne = {
    class: "memepad-jetton-page-holders"
  },
  xe = L({
    __name: "Holders",
    props: {
      items: {}
    },
    setup(p) {
      return (t, c) => {
        const m = Ye;
        return s(), r("div", Ne, [(s(!0), r(U, null, B(t.items, n => (s(), V(m, Q({
          key: n.holder.address,
          ref_for: !0
        }, n), null, 16))), 128))])
      }
    }
  }),
  Je = w(xe, [
    ["__scopeId", "data-v-2c126f4f"]
  ]),
  R = 5,
  D = 15,
  Ke = () => {
    const p = oe(),
      t = re().getters.mustGetUser.value,
      c = ae(() => new Map, "$L5sA2BniqD");
    return {
      getHoldersInfo: n => {
        const l = ne();
        let u;
        const b = async () => {
          if (l.value) return;
          const a = c.value.get(n.jetton.address);
          if (a) {
            l.value = a;
            return
          }
          const h = new me({
            jettonAddress: n.jetton.address
          });
          u = ue(async () => await h.getBuyInfo(new g(1)), () => {}, 4e3);
          const _ = await u.exec();
          l.value = _.additionalInfo.routerInfo.address, c.value.set(n.jetton.address, l.value)
        };
        ie(() => {
          var a;
          return (a = n.jettonInformation) == null ? void 0 : a.isReleased
        }, a => {
          a && b()
        }, {
          immediate: !0
        });
        const o = y(() => {
          if (!n.jettonHolders || !n.jettonInformation || n.jettonInformation.isReleased && !l.value) return;
          const h = (e, $) => O.Address.parse(e).equals(O.Address.parse($)),
            _ = e => p.wallet.value.status !== "connected" ? !1 : h(e, p.wallet.value.address.default),
            k = n.jettonHolders.map(e => !!l.value && h(l.value, e.address) ? {
              ...e,
              affiliation: A.LIQUIDITY_POOL
            } : e),
            I = k.filter(e => e.affiliation !== A.LIQUIDITY_POOL).slice(0, R).reduce((e, $) => e.plus($.percent), new g(0)),
            j = I.gte(D),
            H = k.map(e => {
              const $ = (() => {
                  if (!(p.wallet.value.status !== "connected" || !_(e.address))) return ce(le, {
                    address: e.address,
                    nickname: t.username,
                    avatarUrl: t.avatarUrl
                  })
                })(),
                X = e.affiliation === A.CREATOR,
                Z = e.affiliation === A.LIQUIDITY_POOL,
                ee = _(e.address);
              return {
                holder: e,
                user: $,
                isCreator: X,
                isYourShare: ee,
                isLiquidityPool: Z
              }
            }),
            z = H.filter(e => e.isCreator ? _(e.holder.address) : !e.isLiquidityPool),
            P = H.find(e => e.isLiquidityPool),
            G = H.filter(e => e.isCreator ? !_(e.holder.address) : !1),
            M = [{
              title: C("memepad.about.holders.top_label", {
                count: R
              }),
              color: "#175BCC",
              label: `${q(I,{accuracy:2,trim:!0})}%`,
              percent: I,
              highlightText: j ? "" : C("memepad.holders.well_supply.tooltip"),
              warningText: j ? C("memepad.holders.holder_risk.tooltip", {
                count: R,
                percentLabel: `${D}%+`
              }) : ""
            }];
          P && M.push({
            title: C("memepad.holders.list_item.liquidity_pool"),
            color: "#166C3B",
            label: `${q(P.holder.percent,{accuracy:2,trim:!0})}%`,
            percent: P.holder.percent
          });
          const T = new g(100).minus(I).minus((P == null ? void 0 : P.holder.percent) ?? 0);
          return M.push({
            title: "",
            color: "#7C3EC3",
            label: `${q(T,{accuracy:2,trim:!0})}%`,
            percent: T,
            inChartOnly: !0
          }), {
            isRiskHolder: j,
            items: z,
            importantItems: G,
            statisticItems: M
          }
        });
        return de(() => {
          u == null || u.destroy()
        }), o
      }
    }
  },
  We = {
    class: "memepad-jetton-holders-section"
  },
  Ve = {
    key: 0,
    class: "items"
  },
  Qe = L({
    __name: "HoldersSection",
    props: {
      jetton: {},
      jettonHolders: {},
      jettonInformation: {},
      preview: {
        type: Boolean
      }
    },
    setup(p) {
      const t = p,
        c = Ke().getHoldersInfo(t);
      return (m, n) => {
        const l = te,
          u = se,
          b = Ue,
          o = Je;
        return s(), r("div", We, [i(c) ? (s(), r(U, {
          key: 1
        }, [f(u, {
          items: i(c).statisticItems,
          class: "statistic-card"
        }, null, 8, ["items"]), f(b, {
          items: i(c).importantItems
        }, null, 8, ["items"]), m.preview ? S("", !0) : (s(), r("div", Ve, [f(o, {
          items: i(c).items
        }, null, 8, ["items"])]))], 64)) : (s(), r("div", {
          key: 0,
          class: J(["skeletons", {
            preview: m.preview
          }])
        }, [(s(!0), r(U, null, B(m.preview ? 2 : 6, a => (s(), r("div", {
          key: a,
          class: "skeleton"
        }, [f(l, {
          class: "image",
          rounded: ""
        }), f(l, {
          class: "title"
        }), f(l, {
          class: "value"
        })]))), 128))], 2))])
      }
    }
  }),
  tt = w(Qe, [
    ["__scopeId", "data-v-ee68636c"]
  ]);
export {
  tt as _
};