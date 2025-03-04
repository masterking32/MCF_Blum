import {
  _ as N
} from "./Db3q1a3c.js";
import {
  _ as K
} from "./D5qC8F6h.js";
import {
  d as Q,
  b9 as W,
  V as X,
  K as p,
  $ as x,
  b8 as G,
  ac as C,
  j as g,
  T as H,
  b1 as z,
  ba as q,
  Q as M,
  O as Y,
  bb as Z,
  bc as w,
  bd as ee,
  z as v,
  h as te,
  o as _,
  c as I,
  e as s,
  G as O,
  am as ae,
  F as ne,
  b as P,
  ae as oe,
  p as se,
  u as re,
  aM as ie,
  be as me,
  aN as ue,
  bf as ce,
  ab as de,
  W as R,
  X as J,
  a1 as A,
  aw as le,
  f as pe
} from "./BFi5NhLo.js";
import {
  v as ve
} from "./Di2jLlgj.js";
import {
  u as fe
} from "./WgLMR5yH.js";
import {
  c as be
} from "./CjrCyY9h.js";
import "./DCtS1F-e.js";
import "./CcwzNHcN.js";
const ye = {
    class: "memepad-jetton page"
  },
  he = Q({
    __name: "[shortname]",
    setup(ge) {
      const r = (() => {
          const e = W("shortname");
          if (!e) throw X("Jetton shortname is not provided");
          return e
        })(),
        j = p(!1),
        E = e => {
          d.memepad.memepadJettonShareClick({
            source: e
          }), j.value = !0
        },
        T = e => {
          if (i.value.status !== "loaded") return;
          const a = i.value.data.jetton.address;
          d.memepad.memepadJettonCopyAddress({
            source: e
          }), re().copy(a)
        },
        d = x(),
        k = G(),
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
          const e = ie("from");
          e && be(), k.name === "memepad-jetton-shortname" && S.replace({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: r
            }
          }), await me().getReferralToken(), await u.init(), d.memepad.memepadJettonPageOpen({
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
          c = q(async () => {
            const m = e.value.get(r);
            if (m) return J(m);
            const h = await R.getMemepadJetton(r);
            return h.err ? le() : (e.value.set(r, h.data), J(h.data))
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
            return J({
              information: (A(t) ? t.data : e.value) || e.value
            })
          }, t => {
            e.value = t.information
          }, 5e3),
          y = M(async () => {
            const t = await R.getMemepadJettonReactions(r);
            return J({
              reactions: (A(t) ? t.data : a.value) || a.value
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
            o ? d.memepad.memepadJettonReactionSetClick({
              type: t
            }) : d.memepad.memepadJettonReactionUnsetClick({
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
              l = {
                ...a.value
              };
            return t !== o && (l.user = n.value, o && (l[o] = l[o].plus(1)), t && (l[t] = l[t].minus(1))), l
          });
        return {
          init: m,
          destroy: h,
          jettonInformation: g(() => e.value),
          jettonReactions: F,
          updateJettonReaction: V
        }
      }
      return Y().initHandler(() => {
        d.memepad.memepadJettonBackButtonClick(), C().push({
          name: "memepad"
        })
      }, "memepad-jetton-shortname"), fe(g(() => u.state.value.status !== "loaded"), "memepad-jetton-modal-state"), Z().useTabsOnPage(g(() => {
        var a;
        if (u.state.value.status !== "loaded") return [];
        const e = (a = u.state.value.data.socials) == null ? void 0 : a.filter(n => [w.TELEGRAM, w.WEBSITE].includes(n.type)).filter(n => ee(n.url))[0];
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
            d.memepad.memepadJettonOpenChat(), te().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, a) => {
        const n = N,
          c = K,
          b = ue,
          y = ce;
        return _(), I("div", ye, [s(i).status === "error" ? (_(), O(n, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : s(ae))("emoji/Collision"),
          title: ("t" in e ? e.t : s(v))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : s(v))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : s(v))("base.visit_community"),
          onButton: a[0] || (a[0] = m => ("visitCommunity" in e ? e.visitCommunity : s(ve))())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : s(i).status === "loading" ? (_(), O(c, {
          key: 1
        })) : (_(), I(ne, {
          key: 2
        }, [P(b, oe(s(i).data, {
          onShare: E,
          onCopy: T
        }), null, 16), P(y, {
          modelValue: s(j),
          "onUpdate:modelValue": a[1] || (a[1] = m => se(j) ? j.value = m : null),
          "jetton-shortname": s(i).data.jetton.shortname,
          ticker: s(i).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  we = pe(he, [
    ["__scopeId", "data-v-5de62dad"]
  ]);
export {
  we as
  default
};