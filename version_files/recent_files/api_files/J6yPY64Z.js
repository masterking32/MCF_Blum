import {
  _ as N
} from "./wMudbX3E.js";
import {
  _ as K
} from "./DU9BxcPp.js";
import {
  d as Q,
  be as W,
  V as X,
  K as p,
  $ as x,
  bd as G,
  ac as C,
  j as g,
  T as H,
  b6 as z,
  bf as Y,
  Q as I,
  O as q,
  bg as Z,
  bh as M,
  bi as ee,
  z as v,
  h as te,
  o as _,
  c as w,
  e as s,
  G as A,
  am as ae,
  Y as ne,
  F as oe,
  b as O,
  ae as se,
  p as re,
  u as ie,
  aT as me,
  bj as ue,
  aU as ce,
  bk as le,
  ab as de,
  W as R,
  X as k,
  a1 as T,
  aE as pe,
  f as ve
} from "./CwaQmw2d.js";
import {
  u as fe
} from "./-1v9lzs1.js";
import {
  c as be
} from "./CjrCyY9h.js";
import "./Cs_-0Wvc.js";
import "./DSO2vn9M.js";
const he = {
    class: "memepad-jetton page"
  },
  ye = Q({
    __name: "[shortname]",
    setup(ge) {
      const r = (() => {
          const e = W("shortname");
          if (!e) throw X("Jetton shortname is not provided");
          return e
        })(),
        j = p(!1),
        E = e => {
          l.memepad.memepadJettonShareClick({
            source: e
          }), j.value = !0
        },
        P = e => {
          if (i.value.status !== "loaded") return;
          const a = i.value.data.jetton.address;
          l.memepad.memepadJettonCopyAddress({
            source: e
          }), ie().copy(a)
        },
        l = x(),
        J = G(),
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
        U = async () => {
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
        }, B = () => {
          u.destroy(), f.destroy()
        };
      U(), H(() => {
        B()
      });

      function D() {
        const e = z(() => new Map, "$LIXaimu3X5"),
          a = p({
            status: "loading"
          }),
          c = Y(async () => {
            const m = e.value.get(r);
            if (m) return k(m);
            const y = await R.getMemepadJetton(r);
            return y.err ? pe() : (e.value.set(r, y.data), k(y.data))
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
          b = I(async () => {
            const t = await R.getMemepadJettonInformation(r);
            return k({
              information: (T(t) ? t.data : e.value) || e.value
            })
          }, t => {
            e.value = t.information
          }, 5e3),
          h = I(async () => {
            const t = await R.getMemepadJettonReactions(r);
            return k({
              reactions: (T(t) ? t.data : a.value) || a.value
            })
          }, t => {
            var o;
            a.value = t.reactions, c.value || (n.value = (o = t.reactions) == null ? void 0 : o.user)
          }, 5e3),
          m = () => {
            b.exec(), h.exec()
          },
          y = () => {
            b.destroy(), h.destroy(), e.value = void 0, a.value = void 0, n.value = void 0
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
          destroy: y,
          jettonInformation: g(() => e.value),
          jettonReactions: F,
          updateJettonReaction: V
        }
      }
      return q().initHandler(() => {
        l.memepad.memepadJettonBackButtonClick(), C().push({
          name: "memepad"
        })
      }, "memepad-jetton-shortname"), fe(g(() => u.state.value.status !== "loaded"), "memepad-jetton-modal-state"), Z().useTabsOnPage(g(() => {
        var a;
        if (u.state.value.status !== "loaded") return [];
        const e = (a = u.state.value.data.socials) == null ? void 0 : a.filter(n => [M.TELEGRAM, M.WEBSITE].includes(n.type)).filter(n => ee(n.url))[0];
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
          h = le;
        return _(), w("div", he, [s(i).status === "error" ? (_(), A(n, {
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
          onShare: E,
          onCopy: P
        }), null, 16), O(h, {
          modelValue: s(j),
          "onUpdate:modelValue": a[1] || (a[1] = m => re(j) ? j.value = m : null),
          "jetton-shortname": s(i).data.jetton.shortname,
          ticker: s(i).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  Ie = ve(ye, [
    ["__scopeId", "data-v-91c92bb4"]
  ]);
export {
  Ie as
  default
};