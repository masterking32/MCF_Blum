import {
  _ as te
} from "./DO9xrrcf.js";
import {
  _ as se
} from "./Db73XEIO.js";
import {
  d as g,
  j as y,
  C,
  a6 as L,
  aY as F,
  aU as D,
  bm as Y,
  a0 as N,
  a$ as x,
  o as s,
  c as r,
  a as d,
  b as h,
  e as i,
  t as v,
  G as B,
  n as J,
  u as K,
  _ as W,
  f as w,
  F as U,
  q as R,
  N as Q,
  aL as V,
  a3 as oe,
  k as re,
  b3 as ae,
  y as ne,
  Z as ie,
  bn as A,
  bo as le,
  bp as ce,
  bq as M,
  a7 as de,
  be as ue,
  br as T
} from "./CeLf80nu.js";
import {
  u as me
} from "./BJwKdmQj.js";
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
  Le = g({
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
        l = y(() => {
          if (t.isCreator) return C("memepad.holders.list_item.creator");
          if (t.isLiquidityPool) return C("memepad.holders.list_item.liquidity_pool")
        }),
        m = y(() => {
          const o = Math.min(new L(t.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${t.holder.percent.toFixed(o)}%`
        }),
        n = y(() => `${F(t.holder.amount).full} ${t.holder.ticker}`),
        c = y(() => D(Y(t.holder.address))),
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
        }, [d("div", ke, v(i(c)), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])), i(l) ? (s(), r("div", $e, v(i(l)), 1)) : B("", !0)]), d("div", Ce, [d("div", be, v(i(m)), 1), d("div", Pe, v(i(n)), 1)])], 2)
      }
    }
  }),
  ge = w(Le, [
    ["__scopeId", "data-v-a75e4c04"]
  ]),
  we = {
    class: "memepad-jetton-page-holders-important"
  },
  Ae = g({
    __name: "HoldersImportant",
    props: {
      items: {}
    },
    setup(_) {
      return (t, l) => {
        const m = ge;
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
  qe = ["src"],
  Me = ["src"],
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
  De = g({
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
        l = y(() => {
          const o = [];
          return t.isYourShare && o.push(C("memepad.holders.list_item.your_share")), t.isCreator && o.push(C("memepad.holders.list_item.creator")), o.join(" • ")
        }),
        m = y(() => {
          const o = Math.min(new L(t.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${t.holder.percent.toFixed(o)}%`
        }),
        n = y(() => `${F(t.holder.amount).full} ${t.holder.ticker}`),
        c = y(() => D(Y(t.holder.address))),
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
        }, null, 8, qe)) : (s(), r("img", {
          key: 1,
          src: i(b),
          class: "user-avatar-empty"
        }, null, 8, Me))]), d("div", Se, [(I = o.user) != null && I.nickname ? (s(), r("button", {
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
        }, [d("div", Re, v(i(c)), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])), i(l) ? (s(), r("div", Oe, v(i(l)), 1)) : B("", !0)]), d("div", Te, [d("div", Ee, v(i(m)), 1), d("div", Fe, v(i(n)), 1)])])
      }
    }
  }),
  Ye = w(De, [
    ["__scopeId", "data-v-9a577834"]
  ]),
  Ne = {
    class: "memepad-jetton-page-holders"
  },
  xe = g({
    __name: "Holders",
    props: {
      items: {}
    },
    setup(_) {
      return (t, l) => {
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
  E = 15,
  Ke = () => {
    const _ = oe(),
      t = re().getters.mustGetUser.value,
      l = ae(() => new Map, "$L5sA2BniqD");
    return {
      getHoldersInfo: n => {
        const c = ne();
        let u;
        const b = async () => {
          if (c.value) return;
          const a = l.value.get(n.jetton.address);
          if (a) {
            c.value = a;
            return
          }
          u = ue(async () => await me().getBuyInfo({
            tons: new L(1),
            jettonAddress: n.jetton.address
          }), () => {}, 4e3);
          const p = await u.exec();
          c.value = p.additionalInfo.routerInfo.address, l.value.set(n.jetton.address, c.value)
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
          if (!n.jettonHolders || !n.jettonInformation || n.jettonInformation.isReleased && !c.value) return;
          const p = (e, $) => T.Address.parse(e).equals(T.Address.parse($)),
            f = e => _.wallet.value.status !== "connected" ? !1 : p(e, _.wallet.value.address.default),
            I = n.jettonHolders.map(e => !!c.value && p(c.value, e.address) ? {
              ...e,
              affiliation: A.LIQUIDITY_POOL
            } : e),
            k = I.filter(e => e.affiliation !== A.LIQUIDITY_POOL).slice(0, S).reduce((e, $) => e.plus($.percent), new L(0)),
            j = k.gte(E),
            H = I.map(e => {
              const $ = (() => {
                  if (!(_.wallet.value.status !== "connected" || !f(e.address))) return le(ce, {
                    address: e.address,
                    nickname: t.username,
                    avatarUrl: t.avatarUrl
                  })
                })(),
                Z = e.affiliation === A.CREATOR,
                X = e.affiliation === A.LIQUIDITY_POOL,
                ee = f(e.address);
              return {
                holder: e,
                user: $,
                isCreator: Z,
                isYourShare: ee,
                isLiquidityPool: X
              }
            }),
            G = H.filter(e => e.isCreator ? f(e.holder.address) : !e.isLiquidityPool),
            P = H.find(e => e.isLiquidityPool),
            z = H.filter(e => e.isCreator ? !f(e.holder.address) : !1),
            q = [{
              title: C("memepad.about.holders.top_label", {
                count: S
              }),
              color: "#175BCC",
              label: `${M(k,{accuracy:2,trim:!0})}%`,
              percent: k,
              highlightText: j ? "" : C("memepad.holders.well_supply.tooltip"),
              warningText: j ? C("memepad.holders.holder_risk.tooltip", {
                count: S,
                percentLabel: `${E}%+`
              }) : ""
            }];
          P && q.push({
            title: C("memepad.holders.list_item.liquidity_pool"),
            color: "#166C3B",
            label: `${M(P.holder.percent,{accuracy:2,trim:!0})}%`,
            percent: P.holder.percent
          });
          const O = new L(100).minus(k).minus((P == null ? void 0 : P.holder.percent) ?? 0);
          return q.push({
            title: "",
            color: "#7C3EC3",
            label: `${M(O,{accuracy:2,trim:!0})}%`,
            percent: O,
            inChartOnly: !0
          }), {
            isRiskHolder: j,
            items: G,
            importantItems: z,
            statisticItems: q
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
  Ve = g({
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
        l = Ke().getHoldersInfo(t);
      return (m, n) => {
        const c = te,
          u = se,
          b = Ue,
          o = Je;
        return s(), r("div", We, [i(l) ? (s(), r(U, {
          key: 1
        }, [h(u, {
          items: i(l).statisticItems,
          class: "statistic-card"
        }, null, 8, ["items"]), h(b, {
          items: i(l).importantItems
        }, null, 8, ["items"]), m.preview ? B("", !0) : (s(), r("div", Qe, [h(o, {
          items: i(l).items
        }, null, 8, ["items"])]))], 64)) : (s(), r("div", {
          key: 0,
          class: J(["skeletons", {
            preview: m.preview
          }])
        }, [(s(!0), r(U, null, R(m.preview ? 2 : 6, a => (s(), r("div", {
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
    ["__scopeId", "data-v-4de89129"]
  ]);
export {
  tt as _
};