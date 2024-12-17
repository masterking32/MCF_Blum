import {
  _ as se
} from "./D9DHcFey.js";
import {
  d as L,
  F as $,
  a as e,
  c as n,
  b as c,
  W as j,
  X as S,
  aL as F,
  t as f,
  n as R,
  m as H,
  g as q,
  e as u,
  N,
  j as A,
  f as w,
  af as U,
  a$ as J,
  aX as K,
  bq as W,
  ax as Q,
  ag as V,
  k as y,
  M as z,
  ap as X,
  ao as oe,
  S as ne,
  b4 as re,
  r as ae,
  av as ie,
  br as M,
  bs as ce,
  bt as le,
  ai as O,
  o as de,
  bg as ue,
  bu as Y
} from "./Dq6b0IKe.js";
import {
  M as me
} from "./Ba-Qjaes.js";
const pe = {
    class: "memepad-jetton-statistics-card"
  },
  _e = {
    class: "list"
  },
  he = {
    class: "header"
  },
  ve = {
    class: "title"
  },
  fe = {
    class: "label"
  },
  ye = L({
    __name: "StatisticsCard",
    props: {
      items: {}
    },
    setup(v) {
      const t = v,
        m = $(() => t.items.filter(r => !r.inChartOnly).sort((r, a) => a.percent.minus(r.percent).toNumber())),
        h = $(() => {
          const a = [...t.items].filter(l => l.percent.gt(0)),
            _ = (100 - 4 * a.length) / 100,
            s = "#1C1C1E";
          return `conic-gradient(${a.sort((l,d)=>+!!l.inChartOnly-+!!d.inChartOnly).reduce((l,d,I,g)=>{const k=[...l.items];k.push(`${d.color} ${l.total}%`);const C=d.percent.mul(_).plus(l.total).toNumber();return k.push(`${d.color} ${C}%`),g.length!==1&&(k.push(`${s} ${C}%`),k.push(`${s} ${C+4}%`)),{total:C+4,items:k}},{total:0,items:[]}).items.join(", ")})`
        });
      return (r, a) => {
        const p = N;
        return e(), n("div", pe, [c("div", _e, [(e(!0), n(j, null, S(u(m), _ => (e(), n("div", {
          key: _.title,
          class: "item"
        }, [c("div", he, [c("div", {
          class: "dot",
          style: F({
            "--bg-color": _.color
          })
        }, null, 4), c("div", ve, f(_.title), 1)]), c("div", {
          class: R(["value", `type-${_.listType}`])
        }, [_.listType === "highlighted" ? (e(), H(p, {
          key: 0,
          name: "circle-check-white",
          class: "icon"
        })) : _.listType === "warning" ? (e(), H(p, {
          key: 1,
          name: "triangle-warning",
          class: "icon"
        })) : q("", !0), c("div", fe, f(_.label), 1)], 2)]))), 128))]), c("div", {
          class: "chart",
          style: F({
            backgroundImage: u(h)
          })
        }, null, 4)])
      }
    }
  }),
  $e = A(ye, [
    ["__scopeId", "data-v-e650f934"]
  ]),
  ge = {
    class: "user-avatar-wrapper"
  },
  Ie = {
    key: 0,
    class: "logo"
  },
  ke = ["src"],
  Ce = ["src"],
  be = {
    class: "content"
  },
  Pe = {
    key: 0,
    class: "blum-name"
  },
  we = {
    class: "label"
  },
  Le = {
    class: "label"
  },
  Ae = {
    key: 3,
    class: "description"
  },
  Ue = {
    class: "values"
  },
  je = {
    class: "percent"
  },
  Me = {
    class: "amount"
  },
  He = L({
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
    setup(v) {
      const t = v,
        m = $(() => {
          if (t.isCreator) return w("memepad.holders.list_item.creator");
          if (t.isLiquidityPool) return w("memepad.holders.list_item.liquidity_pool")
        }),
        h = $(() => {
          const s = Math.min(new U(t.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${t.holder.percent.toFixed(s)}%`
        }),
        r = $(() => `${J(t.holder.amount).full} ${t.holder.ticker}`),
        a = $(() => K(W(t.holder.address))),
        p = () => z().copy(t.holder.address),
        _ = Q(`avatars/${V(0,9)}`, "webp");
      return (s, i) => {
        var d, I;
        const l = N;
        return e(), n("div", {
          class: R(["memepad-jetton-holder-important", {
            "is-liquidity-pool": s.isLiquidityPool
          }])
        }, [c("div", ge, [s.isLiquidityPool ? (e(), n("div", Ie, [y(l, {
          name: "logo",
          class: "icon"
        })])) : (d = s.user) != null && d.avatarUrl ? (e(), n("img", {
          key: 1,
          src: s.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, ke)) : (e(), n("img", {
          key: 2,
          src: u(_),
          class: "user-avatar-empty"
        }, null, 8, Ce))]), c("div", be, [s.isLiquidityPool ? (e(), n("div", Pe, "Blum")) : (I = s.user) != null && I.nickname ? (e(), n("button", {
          key: 1,
          class: "user-name reset",
          type: "button",
          onClick: i[0] || (i[0] = g => p())
        }, [c("div", we, f(s.user.nickname), 1), y(l, {
          name: "edit-copy",
          class: "icon"
        })])) : (e(), n("button", {
          key: 2,
          class: "user-address reset",
          type: "button",
          onClick: i[1] || (i[1] = g => p())
        }, [c("div", Le, f(u(a)), 1), y(l, {
          name: "edit-copy",
          class: "icon"
        })])), u(m) ? (e(), n("div", Ae, f(u(m)), 1)) : q("", !0)]), c("div", Ue, [c("div", je, f(u(h)), 1), c("div", Me, f(u(r)), 1)])], 2)
      }
    }
  }),
  Se = A(He, [
    ["__scopeId", "data-v-a75e4c04"]
  ]),
  qe = {
    class: "memepad-jetton-page-holders-important"
  },
  Be = L({
    __name: "HoldersImportant",
    props: {
      items: {}
    },
    setup(v) {
      return (t, m) => {
        const h = Se;
        return e(), n("div", qe, [(e(!0), n(j, null, S(t.items, r => (e(), H(h, X({
          key: r.holder.address,
          ref_for: !0
        }, r), null, 16))), 128))])
      }
    }
  }),
  Oe = A(Be, [
    ["__scopeId", "data-v-6e4d1dd7"]
  ]),
  Te = {
    class: "memepad-jetton-holder"
  },
  Re = {
    class: "user-avatar-wrapper"
  },
  Ne = ["src"],
  Ee = ["src"],
  De = {
    class: "content"
  },
  Fe = {
    class: "label"
  },
  Ye = {
    class: "label"
  },
  xe = {
    key: 2,
    class: "description"
  },
  Je = {
    class: "values"
  },
  Ke = {
    class: "percent"
  },
  We = {
    class: "amount"
  },
  Qe = L({
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
    setup(v) {
      const t = v,
        m = $(() => {
          const s = [];
          return t.isYourShare && s.push(w("memepad.holders.list_item.your_share")), t.isCreator && s.push(w("memepad.holders.list_item.creator")), s.join(" • ")
        }),
        h = $(() => {
          const s = Math.min(new U(t.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${t.holder.percent.toFixed(s)}%`
        }),
        r = $(() => `${J(t.holder.amount).full} ${t.holder.ticker}`),
        a = $(() => K(W(t.holder.address))),
        p = () => z().copy(t.holder.address),
        _ = Q(`avatars/${V(0,9)}`, "webp");
      return (s, i) => {
        var d, I;
        const l = N;
        return e(), n("div", Te, [c("div", Re, [(d = s.user) != null && d.avatarUrl ? (e(), n("img", {
          key: 0,
          src: s.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, Ne)) : (e(), n("img", {
          key: 1,
          src: u(_),
          class: "user-avatar-empty"
        }, null, 8, Ee))]), c("div", De, [(I = s.user) != null && I.nickname ? (e(), n("button", {
          key: 0,
          class: "user-name reset",
          type: "button",
          onClick: i[0] || (i[0] = g => p())
        }, [c("div", Fe, f(s.user.nickname), 1), y(l, {
          name: "edit-copy",
          class: "icon"
        })])) : (e(), n("button", {
          key: 1,
          class: "user-address reset",
          type: "button",
          onClick: i[1] || (i[1] = g => p())
        }, [c("div", Ye, f(u(a)), 1), y(l, {
          name: "edit-copy",
          class: "icon"
        })])), u(m) ? (e(), n("div", xe, f(u(m)), 1)) : q("", !0)]), c("div", Je, [c("div", Ke, f(u(h)), 1), c("div", We, f(u(r)), 1)])])
      }
    }
  }),
  Ve = A(Qe, [
    ["__scopeId", "data-v-9a577834"]
  ]),
  ze = {
    class: "memepad-jetton-page-holders"
  },
  Xe = L({
    __name: "Holders",
    props: {
      items: {}
    },
    setup(v) {
      return (t, m) => {
        const h = Ve;
        return e(), n("div", ze, [(e(!0), n(j, null, S(t.items, r => (e(), H(h, X({
          key: r.holder.address,
          ref_for: !0
        }, r), null, 16))), 128))])
      }
    }
  }),
  Ge = A(Xe, [
    ["__scopeId", "data-v-2c126f4f"]
  ]),
  T = 5,
  x = 15,
  Ze = () => {
    const v = oe(),
      t = ne().getters.mustGetUser.value,
      m = re(() => new Map, "$L5sA2BniqD");
    return {
      getHoldersInfo: r => {
        const a = ae();
        let p;
        const _ = async () => {
          if (a.value) return;
          const i = m.value.get(r.jetton.address);
          if (i) {
            a.value = i;
            return
          }
          const l = new me(r.jetton.address);
          p = ue(async () => await l.getBuyInfo(new U(1)), () => {}, 4e3);
          const d = await p.exec();
          a.value = d.additionalInfo.routerInfo.address, m.value.set(r.jetton.address, a.value)
        };
        ie(() => {
          var i;
          return (i = r.jettonInformation) == null ? void 0 : i.isReleased
        }, i => {
          i && _()
        }, {
          immediate: !0
        });
        const s = $(() => {
          if (!r.jettonHolders || !r.jettonInformation || r.jettonInformation.isReleased && !a.value) return;
          const l = (o, b) => Y.Address.parse(o).equals(Y.Address.parse(b)),
            d = o => v.wallet.value.status !== "connected" ? !1 : l(o, v.wallet.value.address.default),
            I = r.jettonHolders.map(o => !!a.value && l(a.value, o.address) ? {
              ...o,
              affiliation: M.LIQUIDITY_POOL
            } : o),
            g = I.filter(o => o.affiliation !== M.LIQUIDITY_POOL).slice(0, T).reduce((o, b) => o.plus(b.percent), new U(0)),
            k = g.gte(x),
            C = I.map(o => {
              const b = (() => {
                  if (!(v.wallet.value.status !== "connected" || !d(o.address))) return ce(le, {
                    address: o.address,
                    nickname: t.username,
                    avatarUrl: t.avatarUrl
                  })
                })(),
                Z = o.affiliation === M.CREATOR,
                ee = o.affiliation === M.LIQUIDITY_POOL,
                te = d(o.address);
              return {
                holder: o,
                user: b,
                isCreator: Z,
                isYourShare: te,
                isLiquidityPool: ee
              }
            }),
            E = C.filter(o => o.isCreator ? d(o.holder.address) : !o.isLiquidityPool),
            P = C.find(o => o.isLiquidityPool),
            G = C.filter(o => o.isCreator ? !d(o.holder.address) : !1),
            B = [{
              title: w("memepad.about.holders.top_label", {
                count: T
              }),
              color: "#175BCC",
              label: `${O(g,{accuracy:2,trim:!0})}%`,
              percent: g,
              listType: k ? "warning" : "highlighted"
            }];
          P && B.push({
            title: w("memepad.holders.list_item.liquidity_pool"),
            color: "#166C3B",
            label: `${O(P.holder.percent,{accuracy:2,trim:!0})}%`,
            percent: P.holder.percent
          });
          const D = new U(100).minus(g).minus((P == null ? void 0 : P.holder.percent) ?? 0);
          return B.push({
            title: "",
            color: "#7C3EC3",
            label: `${O(D,{accuracy:2,trim:!0})}%`,
            percent: D,
            inChartOnly: !0
          }), {
            isRiskHolder: k,
            items: E,
            importantItems: G,
            statisticItems: B
          }
        });
        return de(() => {
          p == null || p.destroy()
        }), {
          state: s,
          riskHoldersCount: T,
          riskSupplyPercent: x
        }
      }
    }
  },
  et = {
    class: "memepad-jetton-holders-section"
  },
  tt = {
    key: 0,
    class: "items"
  },
  st = L({
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
    setup(v) {
      const t = v,
        {
          state: m
        } = Ze().getHoldersInfo(t);
      return (h, r) => {
        const a = se,
          p = $e,
          _ = Oe,
          s = Ge;
        return e(), n("div", et, [u(m) ? (e(), n(j, {
          key: 1
        }, [y(p, {
          items: u(m).statisticItems,
          class: "statistic-card"
        }, null, 8, ["items"]), y(_, {
          items: u(m).importantItems
        }, null, 8, ["items"]), h.preview ? q("", !0) : (e(), n("div", tt, [y(s, {
          items: u(m).items
        }, null, 8, ["items"])]))], 64)) : (e(), n("div", {
          key: 0,
          class: R(["skeletons", {
            preview: h.preview
          }])
        }, [(e(!0), n(j, null, S(h.preview ? 2 : 6, i => (e(), n("div", {
          key: i,
          class: "skeleton"
        }, [y(a, {
          class: "image",
          rounded: ""
        }), y(a, {
          class: "title"
        }), y(a, {
          class: "value"
        })]))), 128))], 2))])
      }
    }
  }),
  it = A(st, [
    ["__scopeId", "data-v-da275b2b"]
  ]);
export {
  it as _
};