import {
  _ as V
} from "./DOMie8jR.js";
import {
  _ as H
} from "./CGHlrbYR.js";
import {
  d as X,
  bn as q,
  a4 as x,
  y as p,
  a9 as K,
  bm as Q,
  ae as C,
  j as g,
  a3 as W,
  bd as G,
  bo as z,
  a1 as I,
  U as Y,
  bp as Z,
  bq as M,
  br as ee,
  C as v,
  h as te,
  o as _,
  c as w,
  e as s,
  N as A,
  X as ae,
  a7 as ne,
  F as oe,
  b as O,
  aq as se,
  p as re,
  u as ie,
  ad as me,
  bs as ue,
  b0 as ce,
  bt as le,
  H as de,
  a5 as R,
  a6 as J,
  ab as P,
  aN as pe,
  f as ve
} from "./BRau-qVb.js";
import {
  u as fe
} from "./BvK8NkOs.js";
import {
  c as be
} from "./CjrCyY9h.js";
import "./Ch4SXJ2q.js";
import "./fp3De9Uk.js";
const ye = {
    class: "memepad-jetton page"
  },
  he = X({
    __name: "[shortname]",
    setup(ge) {
      const r = (() => {
          const e = q("shortname");
          if (!e) throw x("Jetton shortname is not provided");
          return e
        })(),
        j = p(!1),
        U = e => {
          l.memepad.memepadJettonShareClick({
            source: e
          }), j.value = !0
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
        }, T = () => {
          u.destroy(), f.destroy()
        };
      E(), W(() => {
        T()
      });

      function D() {
        const e = G(() => new Map, "$LIXaimu3X5"),
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
          b = I(async () => {
            const t = await R.getMemepadJettonInformation(r);
            return J({
              information: (P(t) ? t.data : e.value) || e.value
            })
          }, t => {
            e.value = t.information
          }, 5e3),
          y = I(async () => {
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
          N = de(async ({
            type: t,
            value: o
          }) => {
            o ? l.memepad.memepadJettonReactionSetClick({
              type: t
            }) : l.memepad.memepadJettonReactionUnsetClick({
              type: t
            }), await R.setMemepadJettonReaction(r, t), c.value = !1
          }, 600).debouncedFunction,
          $ = async ({
            type: t,
            value: o
          }) => {
            c.value = !0, n.value = t, await N({
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
          updateJettonReaction: $
        }
      }
      return Y().initHandler(() => {
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
        const n = V,
          c = H,
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
          onShare: U,
          onCopy: B
        }), null, 16), O(y, {
          modelValue: s(j),
          "onUpdate:modelValue": a[1] || (a[1] = m => re(j) ? j.value = m : null),
          "jetton-shortname": s(i).data.jetton.shortname,
          ticker: s(i).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  Ie = ve(he, [
    ["__scopeId", "data-v-36f59f39"]
  ]);
export {
  Ie as
  default
};