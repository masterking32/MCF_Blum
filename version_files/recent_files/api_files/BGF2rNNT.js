import {
  _ as te
} from "./RUxoXSp4.js";
import {
  _ as se
} from "./r8VnAEF5.js";
import {
  d as L,
  j as y,
  A as b,
  af as g,
  b6 as F,
  b2 as D,
  bu as Y,
  a8 as x,
  b9 as J,
  o as s,
  c as r,
  a as d,
  b as f,
  e as i,
  t as v,
  G as B,
  n as N,
  u as K,
  _ as W,
  f as w,
  F as U,
  q as R,
  z,
  aW as Q,
  ab as oe,
  k as re,
  bf as ae,
  J as ne,
  K as ie,
  bv as A,
  bw as le,
  bx as ce,
  by as q,
  ag as de,
  bm as ue,
  bz as T
} from "./BkRdN3CR.js";
import {
  u as me
} from "./BLN2DemD.js";
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
  be = {
    class: "values"
  },
  Ce = {
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
          if (t.isCreator) return b("memepad.holders.list_item.creator");
          if (t.isLiquidityPool) return b("memepad.holders.list_item.liquidity_pool")
        }),
        m = y(() => {
          const o = Math.min(new g(t.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${t.holder.percent.toFixed(o)}%`
        }),
        a = y(() => `${F(t.holder.amount).full} ${t.holder.ticker}`),
        c = y(() => D(Y(t.holder.address))),
        u = () => K().copy(t.holder.address),
        C = x(`avatars/${J(0,9)}`, "webp");
      return (o, n) => {
        var h, I;
        const p = W;
        return s(), r("div", {
          class: N(["memepad-jetton-holder-important", {
            "is-liquidity-pool": o.isLiquidityPool
          }])
        }, [d("div", _e, [o.isLiquidityPool ? (s(), r("div", pe, [f(p, {
          name: "logo",
          class: "icon"
        })])) : (h = o.user) != null && h.avatarUrl ? (s(), r("img", {
          key: 1,
          src: o.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, fe)) : (s(), r("img", {
          key: 2,
          src: i(C),
          class: "user-avatar-empty"
        }, null, 8, he))]), d("div", ve, [o.isLiquidityPool ? (s(), r("div", ye, "Blum")) : (I = o.user) != null && I.nickname ? (s(), r("button", {
          key: 1,
          class: "user-name reset",
          type: "button",
          onClick: n[0] || (n[0] = k => u())
        }, [d("div", Ie, v(o.user.nickname), 1), f(p, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), r("button", {
          key: 2,
          class: "user-address reset",
          type: "button",
          onClick: n[1] || (n[1] = k => u())
        }, [d("div", ke, v(i(c)), 1), f(p, {
          name: "edit-copy",
          class: "icon"
        })])), i(l) ? (s(), r("div", $e, v(i(l)), 1)) : B("", !0)]), d("div", be, [d("div", Ce, v(i(m)), 1), d("div", Pe, v(i(a)), 1)])], 2)
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
        return s(), r("div", we, [(s(!0), r(U, null, R(t.items, a => (s(), z(m, Q({
          key: a.holder.address,
          ref_for: !0
        }, a), null, 16))), 128))])
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
        l = y(() => {
          const o = [];
          return t.isYourShare && o.push(b("memepad.holders.list_item.your_share")), t.isCreator && o.push(b("memepad.holders.list_item.creator")), o.join(" • ")
        }),
        m = y(() => {
          const o = Math.min(new g(t.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${t.holder.percent.toFixed(o)}%`
        }),
        a = y(() => `${F(t.holder.amount).full} ${t.holder.ticker}`),
        c = y(() => D(Y(t.holder.address))),
        u = () => K().copy(t.holder.address),
        C = x(`avatars/${J(0,9)}`, "webp");
      return (o, n) => {
        var h, I;
        const p = W;
        return s(), r("div", je, [d("div", He, [(h = o.user) != null && h.avatarUrl ? (s(), r("img", {
          key: 0,
          src: o.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, Me)) : (s(), r("img", {
          key: 1,
          src: i(C),
          class: "user-avatar-empty"
        }, null, 8, qe))]), d("div", Se, [(I = o.user) != null && I.nickname ? (s(), r("button", {
          key: 0,
          class: "user-name reset",
          type: "button",
          onClick: n[0] || (n[0] = k => u())
        }, [d("div", Be, v(o.user.nickname), 1), f(p, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), r("button", {
          key: 1,
          class: "user-address reset",
          type: "button",
          onClick: n[1] || (n[1] = k => u())
        }, [d("div", Re, v(i(c)), 1), f(p, {
          name: "edit-copy",
          class: "icon"
        })])), i(l) ? (s(), r("div", Oe, v(i(l)), 1)) : B("", !0)]), d("div", Te, [d("div", Ee, v(i(m)), 1), d("div", Fe, v(i(a)), 1)])])
      }
    }
  }),
  Ye = w(De, [
    ["__scopeId", "data-v-9a577834"]
  ]),
  xe = {
    class: "memepad-jetton-page-holders"
  },
  Je = L({
    __name: "Holders",
    props: {
      items: {}
    },
    setup(_) {
      return (t, l) => {
        const m = Ye;
        return s(), r("div", xe, [(s(!0), r(U, null, R(t.items, a => (s(), z(m, Q({
          key: a.holder.address,
          ref_for: !0
        }, a), null, 16))), 128))])
      }
    }
  }),
  Ne = w(Je, [
    ["__scopeId", "data-v-2c126f4f"]
  ]),
  S = 5,
  E = 15,
  Ke = () => {
    const _ = oe(),
      t = re().getters.mustGetUser.value,
      l = ae(() => new Map, "$L5sA2BniqD");
    return {
      getHoldersInfo: a => {
        const c = ne();
        let u;
        const C = async () => {
          if (c.value) return;
          const n = l.value.get(a.jetton.address);
          if (n) {
            c.value = n;
            return
          }
          u = ue(async () => await me().getBuyInfo({
            tons: new g(1),
            jettonAddress: a.jetton.address,
            decimals: a.jetton.decimals
          }), () => {}, 4e3);
          const p = await u.exec();
          c.value = p.additionalInfo.routerInfo.address, l.value.set(a.jetton.address, c.value)
        };
        ie(() => {
          var n;
          return (n = a.jettonInformation) == null ? void 0 : n.isReleased
        }, n => {
          n && C()
        }, {
          immediate: !0
        });
        const o = y(() => {
          if (!a.jettonHolders || !a.jettonInformation || a.jettonInformation.isReleased && !c.value) return;
          const p = (e, $) => T.Address.parse(e).equals(T.Address.parse($)),
            h = e => _.wallet.value.status !== "connected" ? !1 : p(e, _.wallet.value.address.default),
            I = a.jettonHolders.map(e => !!c.value && p(c.value, e.address) ? {
              ...e,
              affiliation: A.LIQUIDITY_POOL
            } : e),
            k = I.filter(e => e.affiliation !== A.LIQUIDITY_POOL).slice(0, S).reduce((e, $) => e.plus($.percent), new g(0)),
            j = k.gte(E),
            H = I.map(e => {
              const $ = (() => {
                  if (!(_.wallet.value.status !== "connected" || !h(e.address))) return le(ce, {
                    address: e.address,
                    nickname: t.username,
                    avatarUrl: t.avatarUrl
                  })
                })(),
                X = e.affiliation === A.CREATOR,
                Z = e.affiliation === A.LIQUIDITY_POOL,
                ee = h(e.address);
              return {
                holder: e,
                user: $,
                isCreator: X,
                isYourShare: ee,
                isLiquidityPool: Z
              }
            }),
            V = H.filter(e => e.isCreator ? h(e.holder.address) : !e.isLiquidityPool),
            P = H.find(e => e.isLiquidityPool),
            G = H.filter(e => e.isCreator ? !h(e.holder.address) : !1),
            M = [{
              title: b("memepad.about.holders.top_label", {
                count: S
              }),
              color: "#175BCC",
              label: `${q(k,{accuracy:2,trim:!0})}%`,
              percent: k,
              highlightText: j ? "" : b("memepad.holders.well_supply.tooltip"),
              warningText: j ? b("memepad.holders.holder_risk.tooltip", {
                count: S,
                percentLabel: `${E}%+`
              }) : ""
            }];
          P && M.push({
            title: b("memepad.holders.list_item.liquidity_pool"),
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
            items: V,
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
  ze = {
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
      return (m, a) => {
        const c = te,
          u = se,
          C = Ue,
          o = Ne;
        return s(), r("div", We, [i(l) ? (s(), r(U, {
          key: 1
        }, [f(u, {
          items: i(l).statisticItems,
          class: "statistic-card"
        }, null, 8, ["items"]), f(C, {
          items: i(l).importantItems
        }, null, 8, ["items"]), m.preview ? B("", !0) : (s(), r("div", ze, [f(o, {
          items: i(l).items
        }, null, 8, ["items"])]))], 64)) : (s(), r("div", {
          key: 0,
          class: N(["skeletons", {
            preview: m.preview
          }])
        }, [(s(!0), r(U, null, R(m.preview ? 2 : 6, n => (s(), r("div", {
          key: n,
          class: "skeleton"
        }, [f(c, {
          class: "image",
          rounded: ""
        }), f(c, {
          class: "title"
        }), f(c, {
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