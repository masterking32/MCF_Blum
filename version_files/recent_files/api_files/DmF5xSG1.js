import {
  _ as te
} from "./CMi4VBYK.js";
import {
  _ as se
} from "./BELi7QKt.js";
import {
  d as L,
  j as y,
  z as C,
  T as g,
  aQ as E,
  aM as F,
  be as Y,
  an as N,
  a6 as x,
  o as s,
  c as r,
  a as d,
  b as h,
  e as i,
  t as v,
  D as B,
  n as J,
  u as K,
  _ as W,
  f as w,
  F as U,
  q as T,
  G as Q,
  af as V,
  O as oe,
  k as re,
  aX as ae,
  K as ne,
  P as ie,
  bf as A,
  bg as le,
  bh as ce,
  a8 as q,
  U as de,
  b5 as ue,
  bi as R
} from "./BKd9vpCm.js";
import {
  M as me
} from "./PwI-DFlT.js";
const _e = {
    class: "user-avatar-wrapper"
  },
  pe = {
    key: 0,
    class: "logo"
  },
  fe = ["src"],
  he = ["src"],
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
  Pe = {
    class: "percent"
  },
  be = {
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
        l = y(() => {
          if (t.isCreator) return C("memepad.holders.list_item.creator");
          if (t.isLiquidityPool) return C("memepad.holders.list_item.liquidity_pool")
        }),
        m = y(() => {
          const o = Math.min(new g(t.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${t.holder.percent.toFixed(o)}%`
        }),
        n = y(() => `${E(t.holder.amount).full} ${t.holder.ticker}`),
        c = y(() => F(Y(t.holder.address))),
        u = () => K().copy(t.holder.address),
        P = N(`avatars/${x(0,9)}`, "webp");
      return (o, a) => {
        var _, k;
        const f = W;
        return s(), r("div", {
          class: J(["memepad-jetton-holder-important", {
            "is-liquidity-pool": o.isLiquidityPool
          }])
        }, [d("div", _e, [o.isLiquidityPool ? (s(), r("div", pe, [h(f, {
          name: "logo",
          class: "icon"
        })])) : (_ = o.user) != null && _.avatarUrl ? (s(), r("img", {
          key: 1,
          src: o.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, fe)) : (s(), r("img", {
          key: 2,
          src: i(P),
          class: "user-avatar-empty"
        }, null, 8, he))]), d("div", ve, [o.isLiquidityPool ? (s(), r("div", ye, "Blum")) : (k = o.user) != null && k.nickname ? (s(), r("button", {
          key: 1,
          class: "user-name reset",
          type: "button",
          onClick: a[0] || (a[0] = I => u())
        }, [d("div", ke, v(o.user.nickname), 1), h(f, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), r("button", {
          key: 2,
          class: "user-address reset",
          type: "button",
          onClick: a[1] || (a[1] = I => u())
        }, [d("div", Ie, v(i(c)), 1), h(f, {
          name: "edit-copy",
          class: "icon"
        })])), i(l) ? (s(), r("div", $e, v(i(l)), 1)) : B("", !0)]), d("div", Ce, [d("div", Pe, v(i(m)), 1), d("div", be, v(i(n)), 1)])], 2)
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
      return (t, l) => {
        const m = Le;
        return s(), r("div", we, [(s(!0), r(U, null, T(t.items, n => (s(), Q(m, V({
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
  Me = {
    class: "user-avatar-wrapper"
  },
  He = ["src"],
  qe = ["src"],
  Se = {
    class: "content"
  },
  Be = {
    class: "label"
  },
  Te = {
    class: "label"
  },
  Oe = {
    key: 2,
    class: "description"
  },
  Re = {
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
        l = y(() => {
          const o = [];
          return t.isYourShare && o.push(C("memepad.holders.list_item.your_share")), t.isCreator && o.push(C("memepad.holders.list_item.creator")), o.join(" • ")
        }),
        m = y(() => {
          const o = Math.min(new g(t.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${t.holder.percent.toFixed(o)}%`
        }),
        n = y(() => `${E(t.holder.amount).full} ${t.holder.ticker}`),
        c = y(() => F(Y(t.holder.address))),
        u = () => K().copy(t.holder.address),
        P = N(`avatars/${x(0,9)}`, "webp");
      return (o, a) => {
        var _, k;
        const f = W;
        return s(), r("div", je, [d("div", Me, [(_ = o.user) != null && _.avatarUrl ? (s(), r("img", {
          key: 0,
          src: o.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, He)) : (s(), r("img", {
          key: 1,
          src: i(P),
          class: "user-avatar-empty"
        }, null, 8, qe))]), d("div", Se, [(k = o.user) != null && k.nickname ? (s(), r("button", {
          key: 0,
          class: "user-name reset",
          type: "button",
          onClick: a[0] || (a[0] = I => u())
        }, [d("div", Be, v(o.user.nickname), 1), h(f, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), r("button", {
          key: 1,
          class: "user-address reset",
          type: "button",
          onClick: a[1] || (a[1] = I => u())
        }, [d("div", Te, v(i(c)), 1), h(f, {
          name: "edit-copy",
          class: "icon"
        })])), i(l) ? (s(), r("div", Oe, v(i(l)), 1)) : B("", !0)]), d("div", Re, [d("div", De, v(i(m)), 1), d("div", Ee, v(i(n)), 1)])])
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
      return (t, l) => {
        const m = Ye;
        return s(), r("div", Ne, [(s(!0), r(U, null, T(t.items, n => (s(), Q(m, V({
          key: n.holder.address,
          ref_for: !0
        }, n), null, 16))), 128))])
      }
    }
  }),
  Je = w(xe, [
    ["__scopeId", "data-v-2c126f4f"]
  ]),
  S = 5,
  D = 15,
  Ke = () => {
    const p = oe(),
      t = re().getters.mustGetUser.value,
      l = ae(() => new Map, "$L5sA2BniqD");
    return {
      getHoldersInfo: n => {
        const c = ne();
        let u;
        const P = async () => {
          if (c.value) return;
          const a = l.value.get(n.jetton.address);
          if (a) {
            c.value = a;
            return
          }
          const f = new me({
            jettonAddress: n.jetton.address
          });
          u = ue(async () => await f.getBuyInfo(new g(1)), () => {}, 4e3);
          const _ = await u.exec();
          c.value = _.additionalInfo.routerInfo.address, l.value.set(n.jetton.address, c.value)
        };
        ie(() => {
          var a;
          return (a = n.jettonInformation) == null ? void 0 : a.isReleased
        }, a => {
          a && P()
        }, {
          immediate: !0
        });
        const o = y(() => {
          if (!n.jettonHolders || !n.jettonInformation || n.jettonInformation.isReleased && !c.value) return;
          const f = (e, $) => R.Address.parse(e).equals(R.Address.parse($)),
            _ = e => p.wallet.value.status !== "connected" ? !1 : f(e, p.wallet.value.address.default),
            k = n.jettonHolders.map(e => !!c.value && f(c.value, e.address) ? {
              ...e,
              affiliation: A.LIQUIDITY_POOL
            } : e),
            I = k.filter(e => e.affiliation !== A.LIQUIDITY_POOL).slice(0, S).reduce((e, $) => e.plus($.percent), new g(0)),
            j = I.gte(D),
            M = k.map(e => {
              const $ = (() => {
                  if (!(p.wallet.value.status !== "connected" || !_(e.address))) return le(ce, {
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
            z = M.filter(e => e.isCreator ? _(e.holder.address) : !e.isLiquidityPool),
            b = M.find(e => e.isLiquidityPool),
            G = M.filter(e => e.isCreator ? !_(e.holder.address) : !1),
            H = [{
              title: C("memepad.about.holders.top_label", {
                count: S
              }),
              color: "#175BCC",
              label: `${q(I,{accuracy:2,trim:!0})}%`,
              percent: I,
              highlightText: j ? "" : C("memepad.holders.well_supply.tooltip"),
              warningText: j ? C("memepad.holders.holder_risk.tooltip", {
                count: S,
                percentLabel: `${D}%+`
              }) : ""
            }];
          b && H.push({
            title: C("memepad.holders.list_item.liquidity_pool"),
            color: "#166C3B",
            label: `${q(b.holder.percent,{accuracy:2,trim:!0})}%`,
            percent: b.holder.percent
          });
          const O = new g(100).minus(I).minus((b == null ? void 0 : b.holder.percent) ?? 0);
          return H.push({
            title: "",
            color: "#7C3EC3",
            label: `${q(O,{accuracy:2,trim:!0})}%`,
            percent: O,
            inChartOnly: !0
          }), {
            isRiskHolder: j,
            items: z,
            importantItems: G,
            statisticItems: H
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
  Qe = {
    key: 0,
    class: "items"
  },
  Ve = L({
    __name: "HoldersSection",
    props: {
      jetton: {},
      jettonHolders: {},
      jettonModalControls: {},
      jettonInformation: {},
      preview: {
        type: Boolean
      }
    },
    setup(p) {
      const t = p,
        l = Ke().getHoldersInfo(t);
      return (m, n) => {
        const c = te,
          u = se,
          P = Ue,
          o = Je;
        return s(), r("div", We, [i(l) ? (s(), r(U, {
          key: 1
        }, [h(u, {
          items: i(l).statisticItems,
          class: "statistic-card"
        }, null, 8, ["items"]), h(P, {
          items: i(l).importantItems
        }, null, 8, ["items"]), m.preview ? B("", !0) : (s(), r("div", Qe, [h(o, {
          items: i(l).items
        }, null, 8, ["items"])]))], 64)) : (s(), r("div", {
          key: 0,
          class: J(["skeletons", {
            preview: m.preview
          }])
        }, [(s(!0), r(U, null, T(m.preview ? 2 : 6, a => (s(), r("div", {
          key: a,
          class: "skeleton"
        }, [h(c, {
          class: "image",
          rounded: ""
        }), h(c, {
          class: "title"
        }), h(c, {
          class: "value"
        })]))), 128))], 2))])
      }
    }
  }),
  tt = w(Ve, [
    ["__scopeId", "data-v-0567d6cf"]
  ]);
export {
  tt as _
};