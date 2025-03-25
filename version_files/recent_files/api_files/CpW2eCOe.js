import {
  _ as te
} from "./CXzcKdcd.js";
import {
  _ as se
} from "./73Ne-Q-A.js";
import {
  d as L,
  j as y,
  z as C,
  R as g,
  a$ as E,
  aX as F,
  bm as Y,
  am as N,
  a5 as x,
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
  q as R,
  G as Q,
  ae as V,
  P as oe,
  k as re,
  b6 as ae,
  K as ne,
  aM as ie,
  bn as A,
  bo as ce,
  bp as le,
  a7 as q,
  T as de,
  bf as ue,
  bq as O
} from "./CwaQmw2d.js";
import {
  u as me
} from "./BxfFYhjP.js";
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
  Ie = {
    class: "label"
  },
  ke = {
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
    setup(_) {
      const t = _,
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
        var f, I;
        const p = W;
        return s(), r("div", {
          class: J(["memepad-jetton-holder-important", {
            "is-liquidity-pool": o.isLiquidityPool
          }])
        }, [d("div", _e, [o.isLiquidityPool ? (s(), r("div", pe, [h(p, {
          name: "logo",
          class: "icon"
        })])) : (f = o.user) != null && f.avatarUrl ? (s(), r("img", {
          key: 1,
          src: o.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, he)) : (s(), r("img", {
          key: 2,
          src: i(b),
          class: "user-avatar-empty"
        }, null, 8, fe))]), d("div", ve, [o.isLiquidityPool ? (s(), r("div", ye, "Blum")) : (I = o.user) != null && I.nickname ? (s(), r("button", {
          key: 1,
          class: "user-name reset",
          type: "button",
          onClick: a[0] || (a[0] = k => u())
        }, [d("div", Ie, v(o.user.nickname), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), r("button", {
          key: 2,
          class: "user-address reset",
          type: "button",
          onClick: a[1] || (a[1] = k => u())
        }, [d("div", ke, v(i(l)), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])), i(c) ? (s(), r("div", $e, v(i(c)), 1)) : B("", !0)]), d("div", Ce, [d("div", be, v(i(m)), 1), d("div", Pe, v(i(n)), 1)])], 2)
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
    setup(_) {
      return (t, c) => {
        const m = Le;
        return s(), r("div", we, [(s(!0), r(U, null, R(t.items, n => (s(), Q(m, V({
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
  Se = {
    class: "content"
  },
  Be = {
    class: "label"
  },
  Re = {
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
    setup(_) {
      const t = _,
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
        var f, I;
        const p = W;
        return s(), r("div", je, [d("div", He, [(f = o.user) != null && f.avatarUrl ? (s(), r("img", {
          key: 0,
          src: o.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, Me)) : (s(), r("img", {
          key: 1,
          src: i(b),
          class: "user-avatar-empty"
        }, null, 8, qe))]), d("div", Se, [(I = o.user) != null && I.nickname ? (s(), r("button", {
          key: 0,
          class: "user-name reset",
          type: "button",
          onClick: a[0] || (a[0] = k => u())
        }, [d("div", Be, v(o.user.nickname), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), r("button", {
          key: 1,
          class: "user-address reset",
          type: "button",
          onClick: a[1] || (a[1] = k => u())
        }, [d("div", Re, v(i(l)), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])), i(c) ? (s(), r("div", Te, v(i(c)), 1)) : B("", !0)]), d("div", Oe, [d("div", De, v(i(m)), 1), d("div", Ee, v(i(n)), 1)])])
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
    setup(_) {
      return (t, c) => {
        const m = Ye;
        return s(), r("div", Ne, [(s(!0), r(U, null, R(t.items, n => (s(), Q(m, V({
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
    const _ = oe(),
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
          u = ue(async () => await me().getBuyInfo({
            tons: new g(1),
            jettonAddress: n.jetton.address
          }), () => {}, 4e3);
          const p = await u.exec();
          l.value = p.additionalInfo.routerInfo.address, c.value.set(n.jetton.address, l.value)
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
          const p = (e, $) => O.Address.parse(e).equals(O.Address.parse($)),
            f = e => _.wallet.value.status !== "connected" ? !1 : p(e, _.wallet.value.address.default),
            I = n.jettonHolders.map(e => !!l.value && p(l.value, e.address) ? {
              ...e,
              affiliation: A.LIQUIDITY_POOL
            } : e),
            k = I.filter(e => e.affiliation !== A.LIQUIDITY_POOL).slice(0, S).reduce((e, $) => e.plus($.percent), new g(0)),
            j = k.gte(D),
            H = I.map(e => {
              const $ = (() => {
                  if (!(_.wallet.value.status !== "connected" || !f(e.address))) return ce(le, {
                    address: e.address,
                    nickname: t.username,
                    avatarUrl: t.avatarUrl
                  })
                })(),
                X = e.affiliation === A.CREATOR,
                Z = e.affiliation === A.LIQUIDITY_POOL,
                ee = f(e.address);
              return {
                holder: e,
                user: $,
                isCreator: X,
                isYourShare: ee,
                isLiquidityPool: Z
              }
            }),
            z = H.filter(e => e.isCreator ? f(e.holder.address) : !e.isLiquidityPool),
            P = H.find(e => e.isLiquidityPool),
            G = H.filter(e => e.isCreator ? !f(e.holder.address) : !1),
            M = [{
              title: C("memepad.about.holders.top_label", {
                count: S
              }),
              color: "#175BCC",
              label: `${q(k,{accuracy:2,trim:!0})}%`,
              percent: k,
              highlightText: j ? "" : C("memepad.holders.well_supply.tooltip"),
              warningText: j ? C("memepad.holders.holder_risk.tooltip", {
                count: S,
                percentLabel: `${D}%+`
              }) : ""
            }];
          P && M.push({
            title: C("memepad.holders.list_item.liquidity_pool"),
            color: "#166C3B",
            label: `${q(P.holder.percent,{accuracy:2,trim:!0})}%`,
            percent: P.holder.percent
          });
          const T = new g(100).minus(k).minus((P == null ? void 0 : P.holder.percent) ?? 0);
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
  Qe = {
    key: 0,
    class: "items"
  },
  Ve = L({
    __name: "HoldersSection",
    props: {
      jetton: {},
      jettonHolders: {},
      jettonInformation: {},
      preview: {
        type: Boolean
      }
    },
    setup(_) {
      const t = _,
        c = Ke().getHoldersInfo(t);
      return (m, n) => {
        const l = te,
          u = se,
          b = Ue,
          o = Je;
        return s(), r("div", We, [i(c) ? (s(), r(U, {
          key: 1
        }, [h(u, {
          items: i(c).statisticItems,
          class: "statistic-card"
        }, null, 8, ["items"]), h(b, {
          items: i(c).importantItems
        }, null, 8, ["items"]), m.preview ? B("", !0) : (s(), r("div", Qe, [h(o, {
          items: i(c).items
        }, null, 8, ["items"])]))], 64)) : (s(), r("div", {
          key: 0,
          class: J(["skeletons", {
            preview: m.preview
          }])
        }, [(s(!0), r(U, null, R(m.preview ? 2 : 6, a => (s(), r("div", {
          key: a,
          class: "skeleton"
        }, [h(l, {
          class: "image",
          rounded: ""
        }), h(l, {
          class: "title"
        }), h(l, {
          class: "value"
        })]))), 128))], 2))])
      }
    }
  }),
  tt = w(Ve, [
    ["__scopeId", "data-v-ee68636c"]
  ]);
export {
  tt as _
};