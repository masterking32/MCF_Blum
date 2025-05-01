import {
  _ as te
} from "./Bp0DWu3U.js";
import {
  _ as se
} from "./rsna7nh4.js";
import {
  d as L,
  j as y,
  C,
  a2 as g,
  b8 as F,
  b4 as D,
  bw as N,
  X as Y,
  ak as x,
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
  N as V,
  aq as Q,
  $ as oe,
  k as re,
  bd as ae,
  y as ne,
  V as ie,
  bx as A,
  by as le,
  bz as ce,
  am as M,
  a3 as de,
  bo as ue,
  bA as T
} from "./BdCgqCrf.js";
import {
  u as me
} from "./D4RE33Cq.js";
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
    setup(_) {
      const t = _,
        l = y(() => {
          if (t.isCreator) return C("memepad.holders.list_item.creator");
          if (t.isLiquidityPool) return C("memepad.holders.list_item.liquidity_pool")
        }),
        m = y(() => {
          const o = Math.min(new g(t.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${t.holder.percent.toFixed(o)}%`
        }),
        n = y(() => `${F(t.holder.amount).full} ${t.holder.ticker}`),
        c = y(() => D(N(t.holder.address))),
        u = () => K().copy(t.holder.address),
        b = Y(`avatars/${x(0,9)}`, "webp");
      return (o, a) => {
        var f, k;
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
        }, null, 8, fe))]), d("div", ve, [o.isLiquidityPool ? (s(), r("div", ye, "Blum")) : (k = o.user) != null && k.nickname ? (s(), r("button", {
          key: 1,
          class: "user-name reset",
          type: "button",
          onClick: a[0] || (a[0] = I => u())
        }, [d("div", ke, v(o.user.nickname), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), r("button", {
          key: 2,
          class: "user-address reset",
          type: "button",
          onClick: a[1] || (a[1] = I => u())
        }, [d("div", Ie, v(i(c)), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])), i(l) ? (s(), r("div", $e, v(i(l)), 1)) : B("", !0)]), d("div", Ce, [d("div", be, v(i(m)), 1), d("div", Pe, v(i(n)), 1)])], 2)
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
      return (t, l) => {
        const m = Le;
        return s(), r("div", we, [(s(!0), r(U, null, R(t.items, n => (s(), V(m, Q({
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
        l = y(() => {
          const o = [];
          return t.isYourShare && o.push(C("memepad.holders.list_item.your_share")), t.isCreator && o.push(C("memepad.holders.list_item.creator")), o.join(" • ")
        }),
        m = y(() => {
          const o = Math.min(new g(t.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${t.holder.percent.toFixed(o)}%`
        }),
        n = y(() => `${F(t.holder.amount).full} ${t.holder.ticker}`),
        c = y(() => D(N(t.holder.address))),
        u = () => K().copy(t.holder.address),
        b = Y(`avatars/${x(0,9)}`, "webp");
      return (o, a) => {
        var f, k;
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
        }, null, 8, Me))]), d("div", Se, [(k = o.user) != null && k.nickname ? (s(), r("button", {
          key: 0,
          class: "user-name reset",
          type: "button",
          onClick: a[0] || (a[0] = I => u())
        }, [d("div", Be, v(o.user.nickname), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), r("button", {
          key: 1,
          class: "user-address reset",
          type: "button",
          onClick: a[1] || (a[1] = I => u())
        }, [d("div", Re, v(i(c)), 1), h(p, {
          name: "edit-copy",
          class: "icon"
        })])), i(l) ? (s(), r("div", Oe, v(i(l)), 1)) : B("", !0)]), d("div", Te, [d("div", Ee, v(i(m)), 1), d("div", Fe, v(i(n)), 1)])])
      }
    }
  }),
  Ne = w(De, [
    ["__scopeId", "data-v-9a577834"]
  ]),
  Ye = {
    class: "memepad-jetton-page-holders"
  },
  xe = L({
    __name: "Holders",
    props: {
      items: {}
    },
    setup(_) {
      return (t, l) => {
        const m = Ne;
        return s(), r("div", Ye, [(s(!0), r(U, null, R(t.items, n => (s(), V(m, Q({
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
            tons: new g(1),
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
            k = n.jettonHolders.map(e => !!c.value && p(c.value, e.address) ? {
              ...e,
              affiliation: A.LIQUIDITY_POOL
            } : e),
            I = k.filter(e => e.affiliation !== A.LIQUIDITY_POOL).slice(0, S).reduce((e, $) => e.plus($.percent), new g(0)),
            j = I.gte(E),
            H = k.map(e => {
              const $ = (() => {
                  if (!(_.wallet.value.status !== "connected" || !f(e.address))) return le(ce, {
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
            q = [{
              title: C("memepad.about.holders.top_label", {
                count: S
              }),
              color: "#175BCC",
              label: `${M(I,{accuracy:2,trim:!0})}%`,
              percent: I,
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
          const O = new g(100).minus(I).minus((P == null ? void 0 : P.holder.percent) ?? 0);
          return q.push({
            title: "",
            color: "#7C3EC3",
            label: `${M(O,{accuracy:2,trim:!0})}%`,
            percent: O,
            inChartOnly: !0
          }), {
            isRiskHolder: j,
            items: z,
            importantItems: G,
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
        }, null, 8, ["items"]), m.preview ? B("", !0) : (s(), r("div", Ve, [h(o, {
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
  tt = w(Qe, [
    ["__scopeId", "data-v-4de89129"]
  ]);
export {
  tt as _
};