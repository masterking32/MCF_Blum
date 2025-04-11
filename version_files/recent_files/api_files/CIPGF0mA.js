import {
  _ as N
} from "./Cqq1dawi.js";
import {
  _ as W
} from "./BcWuMC2o.js";
import {
  d as x,
  bm as G,
  a3 as H,
  y as p,
  a8 as K,
  bl as Q,
  ab as C,
  j as g,
  a2 as X,
  bc as q,
  bn as z,
  a0 as M,
  T as Y,
  bo as Z,
  bp as I,
  bq as ee,
  C as v,
  h as te,
  o as j,
  c as w,
  e as s,
  M as A,
  W as ae,
  a6 as ne,
  F as oe,
  b as O,
  ao as se,
  p as re,
  u as ie,
  a_ as me,
  br as ue,
  a$ as ce,
  bs as le,
  G as de,
  a4 as R,
  a5 as J,
  aa as P,
  aL as pe,
  f as ve
} from "./C6ycOBuK.js";
import {
  u as fe
} from "./Br_Joraq.js";
import {
  c as be
} from "./CjrCyY9h.js";
import "./Bay6_qds.js";
import "./pSTeQkbo.js";
const ye = {
    class: "memepad-jetton page"
  },
  he = x({
    __name: "[shortname]",
    setup(ge) {
      const r = (() => {
          const e = G("shortname");
          if (!e) throw H("Jetton shortname is not provided");
          return e
        })(),
        _ = p(!1),
        T = e => {
          l.memepad.memepadJettonShareClick({
            source: e
          }), _.value = !0
        },
        B = e => {
          if (i.value.status !== "loaded") return;
          const a = i.value.data.jetton.address;
          l.memepad.memepadJettonCopyAddress({
            source: e
          }), ie().copy(a)
        },
        l = K(),
        k = Q(),
        S = C(),
        u = D(),
        f = L(),
        i = g(() => u.state.value.status === "loading" ? {
          status: "loading"
        } : u.state.value.status === "error" ? {
          status: "error"
        } : {
          status: "loaded",
          data: {
            jetton: u.state.value.data,
            jettonShortname: r,
            jettonInformation: f.jettonInformation.value,
            jettonReactions: f.jettonReactions.value,
            updateJettonReaction: f.updateJettonReaction
          }
        }),
        E = async () => {
          const e = me("from");
          e && be(), k.name === "memepad-jetton-shortname" && S.replace({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: r
            }
          }), await ue().getReferralToken(), await u.init(), l.memepad.memepadJettonPageOpen({
            source: e,
            jettonShortname: r,
            jettonId: i.value.status === "loaded" ? i.value.data.jetton.id : void 0
          }), f.init()
        }, U = () => {
          u.destroy(), f.destroy()
        };
      E(), X(() => {
        U()
      });

      function D() {
        const e = q(() => new Map, "$LIXaimu3X5"),
          a = p({
            status: "loading"
          }),
          c = z(async () => {
            const m = e.value.get(r);
            if (m) return J(m);
            const h = await R.getMemepadJetton(r);
            return h.err ? pe() : (e.value.set(r, h.data), J(h.data))
          }, m => a.value = {
            status: "loaded",
            data: m
          }, 2e4);
        return {
          state: a,
          init: async () => {
            await c.exec()
          },
          destroy: () => {
            c.destroy(), a.value = {
              status: "loading"
            }
          }
        }
      }

      function L() {
        const e = p(),
          a = p(),
          n = p(),
          c = p(!1),
          b = M(async () => {
            const t = await R.getMemepadJettonInformation(r);
            return J({
              information: (P(t) ? t.data : e.value) || e.value
            })
          }, t => {
            e.value = t.information
          }, 5e3),
          y = M(async () => {
            const t = await R.getMemepadJettonReactions(r);
            return J({
              reactions: (P(t) ? t.data : a.value) || a.value
            })
          }, t => {
            var o;
            a.value = t.reactions, c.value || (n.value = (o = t.reactions) == null ? void 0 : o.user)
          }, 5e3),
          m = () => {
            b.exec(), y.exec()
          },
          h = () => {
            b.destroy(), y.destroy(), e.value = void 0, a.value = void 0, n.value = void 0
          },
          $ = de(async ({
            type: t,
            value: o
          }) => {
            o ? l.memepad.memepadJettonReactionSetClick({
              type: t
            }) : l.memepad.memepadJettonReactionUnsetClick({
              type: t
            }), await R.setMemepadJettonReaction(r, t), c.value = !1
          }, 600).debouncedFunction,
          F = async ({
            type: t,
            value: o
          }) => {
            c.value = !0, n.value = t, await $({
              type: t,
              value: o
            })
          }, V = g(() => {
            if (!a.value) return;
            const t = a.value.user,
              o = n.value,
              d = {
                ...a.value
              };
            return t !== o && (d.user = n.value, o && (d[o] = d[o].plus(1)), t && (d[t] = d[t].minus(1))), d
          });
        return {
          init: m,
          destroy: h,
          jettonInformation: g(() => e.value),
          jettonReactions: V,
          updateJettonReaction: F
        }
      }
      return Y().initHandler(() => {
        l.memepad.memepadJettonBackButtonClick(), C().push({
          name: "memepad"
        })
      }, "memepad-jetton-shortname"), fe(g(() => u.state.value.status !== "loaded"), "memepad-jetton-modal-state"), Z().useTabsOnPage(g(() => {
        var a;
        if (u.state.value.status !== "loaded") return [];
        const e = (a = u.state.value.data.socials) == null ? void 0 : a.filter(n => [I.TELEGRAM, I.WEBSITE].includes(n.type)).filter(n => ee(n.url))[0];
        return [{
          type: "link",
          label: v("tabs.memepad.trade"),
          href: S.resolve({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: k.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-trade",
          code: "memepad-trade"
        }, {
          type: "link",
          label: v("tabs.memepad.about"),
          href: S.resolve({
            name: "memepad-jetton-shortname-about",
            params: {
              shortname: k.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-about",
          code: "memepad-about"
        }, ...e ? [{
          type: "button",
          label: v("tabs.memepad.chat"),
          icon: "special/tab-chat",
          code: "memepad-chat",
          onClick: () => {
            l.memepad.memepadJettonOpenChat(), te().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, a) => {
        const n = N,
          c = W,
          b = ce,
          y = le;
        return j(), w("div", ye, [s(i).status === "error" ? (j(), A(n, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : s(ae))("emoji/Collision"),
          title: ("t" in e ? e.t : s(v))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : s(v))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : s(v))("base.visit_community"),
          onButton: a[0] || (a[0] = m => ("useApp" in e ? e.useApp : s(ne))().openBlumTelegram())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : s(i).status === "loading" ? (j(), A(c, {
          key: 1
        })) : (j(), w(oe, {
          key: 2
        }, [O(b, se(s(i).data, {
          onShare: T,
          onCopy: B
        }), null, 16), O(y, {
          modelValue: s(_),
          "onUpdate:modelValue": a[1] || (a[1] = m => re(_) ? _.value = m : null),
          "jetton-shortname": s(i).data.jetton.shortname,
          ticker: s(i).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  Me = ve(he, [
    ["__scopeId", "data-v-36f59f39"]
  ]);
export {
  Me as
  default
};