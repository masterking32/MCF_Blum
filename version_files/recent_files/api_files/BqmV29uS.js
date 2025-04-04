import {
  _ as N
} from "./-F-uACAl.js";
import {
  _ as K
} from "./Bbuyy3BV.js";
import {
  d as x,
  bj as G,
  a2 as H,
  y as p,
  a7 as Q,
  bi as W,
  aa as C,
  j as g,
  a1 as X,
  bb as Y,
  bk as Z,
  $ as M,
  R as q,
  bl as z,
  bm as I,
  bn as ee,
  C as v,
  h as te,
  o as _,
  c as w,
  e as s,
  M as A,
  V as ae,
  a5 as ne,
  F as oe,
  b as O,
  an as se,
  p as re,
  u as ie,
  aY as me,
  bo as ue,
  aZ as ce,
  bp as le,
  G as de,
  a3 as R,
  a4 as k,
  a9 as P,
  aK as pe,
  f as ve
} from "./BhDmcp0J.js";
import {
  u as fe
} from "./DClvwgrl.js";
import {
  c as be
} from "./CjrCyY9h.js";
import "./BU6lr6GK.js";
import "./C2S_QJmL.js";
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
        j = p(!1),
        B = e => {
          l.memepad.memepadJettonShareClick({
            source: e
          }), j.value = !0
        },
        E = e => {
          if (i.value.status !== "loaded") return;
          const a = i.value.data.jetton.address;
          l.memepad.memepadJettonCopyAddress({
            source: e
          }), ie().copy(a)
        },
        l = Q(),
        J = W(),
        S = C(),
        u = D(),
        f = $(),
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
        T = async () => {
          const e = me("from");
          e && be(), J.name === "memepad-jetton-shortname" && S.replace({
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
      T(), X(() => {
        U()
      });

      function D() {
        const e = Y(() => new Map, "$LIXaimu3X5"),
          a = p({
            status: "loading"
          }),
          c = Z(async () => {
            const m = e.value.get(r);
            if (m) return k(m);
            const h = await R.getMemepadJetton(r);
            return h.err ? pe() : (e.value.set(r, h.data), k(h.data))
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

      function $() {
        const e = p(),
          a = p(),
          n = p(),
          c = p(!1),
          b = M(async () => {
            const t = await R.getMemepadJettonInformation(r);
            return k({
              information: (P(t) ? t.data : e.value) || e.value
            })
          }, t => {
            e.value = t.information
          }, 5e3),
          y = M(async () => {
            const t = await R.getMemepadJettonReactions(r);
            return k({
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
          L = de(async ({
            type: t,
            value: o
          }) => {
            o ? l.memepad.memepadJettonReactionSetClick({
              type: t
            }) : l.memepad.memepadJettonReactionUnsetClick({
              type: t
            }), await R.setMemepadJettonReaction(r, t), c.value = !1
          }, 600).debouncedFunction,
          V = async ({
            type: t,
            value: o
          }) => {
            c.value = !0, n.value = t, await L({
              type: t,
              value: o
            })
          }, F = g(() => {
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
          jettonReactions: F,
          updateJettonReaction: V
        }
      }
      return q().initHandler(() => {
        l.memepad.memepadJettonBackButtonClick(), C().push({
          name: "memepad"
        })
      }, "memepad-jetton-shortname"), fe(g(() => u.state.value.status !== "loaded"), "memepad-jetton-modal-state"), z().useTabsOnPage(g(() => {
        var a;
        if (u.state.value.status !== "loaded") return [];
        const e = (a = u.state.value.data.socials) == null ? void 0 : a.filter(n => [I.TELEGRAM, I.WEBSITE].includes(n.type)).filter(n => ee(n.url))[0];
        return [{
          type: "link",
          label: v("tabs.memepad.trade"),
          href: S.resolve({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: J.params.shortname
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
              shortname: J.params.shortname
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
          c = K,
          b = ce,
          y = le;
        return _(), w("div", ye, [s(i).status === "error" ? (_(), A(n, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : s(ae))("emoji/Collision"),
          title: ("t" in e ? e.t : s(v))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : s(v))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : s(v))("base.visit_community"),
          onButton: a[0] || (a[0] = m => ("useApp" in e ? e.useApp : s(ne))().openBlumTelegram())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : s(i).status === "loading" ? (_(), A(c, {
          key: 1
        })) : (_(), w(oe, {
          key: 2
        }, [O(b, se(s(i).data, {
          onShare: B,
          onCopy: E
        }), null, 16), O(y, {
          modelValue: s(j),
          "onUpdate:modelValue": a[1] || (a[1] = m => re(j) ? j.value = m : null),
          "jetton-shortname": s(i).data.jetton.shortname,
          ticker: s(i).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  Me = ve(he, [
    ["__scopeId", "data-v-91c92bb4"]
  ]);
export {
  Me as
  default
};