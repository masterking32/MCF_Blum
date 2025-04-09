import {
  _ as te
} from "./B0Xhtl34.js";
import {
  _ as se
} from "./BHi0EV0H.js";
import {
  d as L,
  j as y,
  C,
  a1 as g,
  b7 as F,
  b3 as D,
  bv as Y,
  W as x,
  ah as N,
  o as s,
  c as r,
  a as d,
  b as h,
  e as i,
  t as f,
  E as B,
  n as J,
  u as W,
  _ as K,
  f as w,
  F as U,
  q as R,
  M as Q,
  ao as V,
  Z as oe,
  k as re,
  bc as ae,
  y as ne,
  U as ie,
  bw as A,
  bx as ce,
  by as le,
  aj as q,
  a2 as de,
  bn as ue,
  bz as T
} from "./Cbo9LC6p.js";
import {
  u as me
} from "./BQIfgLwR.js";
const _e = {
    class: "user-avatar-wrapper"
  },
  pe = {
    key: 0,
    class: "logo"
  },
  he = ["src"],
  ve = ["src"],
  fe = {
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
        n = y(() => `${F(t.holder.amount).full} ${t.holder.ticker}`),
        l = y(() => D(Y(t.holder.address))),
        u = () => W().copy(t.holder.address),
        b = x(`avatars/${N(0,9)}`, "webp");
      return (o, a) => {
        var v, I;
        const p = K;
        return s(), r("div", {
          class: J(["memepad-jetton-holder-important", {
            "is-liquidity-pool": o.isLiquidityPool
          }])
        }, [d("div", _e, [o.isLiquidityPool ? (s(), r("div", pe, [h(p, {
          name: "logo",
          class: "icon"
        })])) : (v = o.user) != null && v.avatarUrl ? (s(), r("img", {
          key: 1,
          src: o.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, he)) : (s(), r("img", {
          key: 2,
          src: i(b),
          class: "user-avatar-empty"
        }, null, 8, ve))]), d("div", fe, [o.isLiquidityPool ? (s(), r("div", ye, "Blum")) : (I = o.user) != null && I.nickname ? (s(), r("button", {
          key: 1,
          class: "user-name reset",
          type: "button",
          onClick: a[0] || (a[0] = k => u())
        }, [d("div", Ie, f(o.user.nickname), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), r("button", {
          key: 2,
          class: "user-address reset",
          type: "button",
          onClick: a[1] || (a[1] = k => u())
        }, [d("div", ke, f(i(l)), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])), i(c) ? (s(), r("div", $e, f(i(c)), 1)) : B("", !0)]), d("div", Ce, [d("div", be, f(i(m)), 1), d("div", Pe, f(i(n)), 1)])], 2)
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
  Oe = {
    key: 2,
    class: "description"
  },
  Te = {
    class: "values"
  },
  Ee = {
    class: "percent"
  },
  Fe = {
    class: "amount"
  },
  De = L({
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
        n = y(() => `${F(t.holder.amount).full} ${t.holder.ticker}`),
        l = y(() => D(Y(t.holder.address))),
        u = () => W().copy(t.holder.address),
        b = x(`avatars/${N(0,9)}`, "webp");
      return (o, a) => {
        var v, I;
        const p = K;
        return s(), r("div", je, [d("div", He, [(v = o.user) != null && v.avatarUrl ? (s(), r("img", {
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
        }, [d("div", Be, f(o.user.nickname), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), r("button", {
          key: 1,
          class: "user-address reset",
          type: "button",
          onClick: a[1] || (a[1] = k => u())
        }, [d("div", Re, f(i(l)), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])), i(c) ? (s(), r("div", Oe, f(i(c)), 1)) : B("", !0)]), d("div", Te, [d("div", Ee, f(i(m)), 1), d("div", Fe, f(i(n)), 1)])])
      }
    }
  }),
  Ye = w(De, [
    ["__scopeId", "data-v-9a577834"]
  ]),
  xe = {
    class: "memepad-jetton-page-holders"
  },
  Ne = L({
    __name: "Holders",
    props: {
      items: {}
    },
    setup(_) {
      return (t, c) => {
        const m = Ye;
        return s(), r("div", xe, [(s(!0), r(U, null, R(t.items, n => (s(), Q(m, V({
          key: n.holder.address,
          ref_for: !0
        }, n), null, 16))), 128))])
      }
    }
  }),
  Je = w(Ne, [
    ["__scopeId", "data-v-2c126f4f"]
  ]),
  S = 5,
  E = 15,
  We = () => {
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
          const p = (e, $) => T.Address.parse(e).equals(T.Address.parse($)),
            v = e => _.wallet.value.status !== "connected" ? !1 : p(e, _.wallet.value.address.default),
            I = n.jettonHolders.map(e => !!l.value && p(l.value, e.address) ? {
              ...e,
              affiliation: A.LIQUIDITY_POOL
            } : e),
            k = I.filter(e => e.affiliation !== A.LIQUIDITY_POOL).slice(0, S).reduce((e, $) => e.plus($.percent), new g(0)),
            j = k.gte(E),
            H = I.map(e => {
              const $ = (() => {
                  if (!(_.wallet.value.status !== "connected" || !v(e.address))) return ce(le, {
                    address: e.address,
                    nickname: t.username,
                    avatarUrl: t.avatarUrl
                  })
                })(),
                Z = e.affiliation === A.CREATOR,
                X = e.affiliation === A.LIQUIDITY_POOL,
                ee = v(e.address);
              return {
                holder: e,
                user: $,
                isCreator: Z,
                isYourShare: ee,
                isLiquidityPool: X
              }
            }),
            z = H.filter(e => e.isCreator ? v(e.holder.address) : !e.isLiquidityPool),
            P = H.find(e => e.isLiquidityPool),
            G = H.filter(e => e.isCreator ? !v(e.holder.address) : !1),
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
                percentLabel: `${E}%+`
              }) : ""
            }];
          P && M.push({
            title: C("memepad.holders.list_item.liquidity_pool"),
            color: "#166C3B",
            label: `${q(P.holder.percent,{accuracy:2,trim:!0})}%`,
            percent: P.holder.percent
          });
          const O = new g(100).minus(k).minus((P == null ? void 0 : P.holder.percent) ?? 0);
          return M.push({
            title: "",
            color: "#7C3EC3",
            label: `${q(O,{accuracy:2,trim:!0})}%`,
            percent: O,
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
  Ke = {
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
        c = We().getHoldersInfo(t);
      return (m, n) => {
        const l = te,
          u = se,
          b = Ue,
          o = Je;
        return s(), r("div", Ke, [i(c) ? (s(), r(U, {
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
    ["__scopeId", "data-v-4de89129"]
  ]);
export {
  tt as _
};