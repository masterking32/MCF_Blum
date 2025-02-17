import {
  _ as K
} from "./BMgRZvsw.js";
import {
  _ as Q
} from "./7X64O2QS.js";
import {
  h as T,
  d as W,
  b8 as X,
  V as x,
  K as p,
  $ as G,
  b7 as H,
  ac as C,
  j as g,
  T as z,
  b0 as q,
  b9 as Y,
  Q as w,
  O as Z,
  ba as ee,
  bb as M,
  bc as te,
  z as v,
  o as _,
  c as I,
  e as s,
  G as O,
  am as ae,
  F as ne,
  b as A,
  ae as oe,
  p as se,
  u as re,
  aL as ie,
  bd as me,
  aM as ue,
  be as ce,
  ab as le,
  W as R,
  X as k,
  a1 as P,
  aw as de,
  f as pe
} from "./jalGrT4m.js";
import {
  u as ve
} from "./Bbo15jlz.js";
import {
  c as fe
} from "./CjrCyY9h.js";
import "./BkepT6Cs.js";
const be = () => T().$webApp.openTelegramLink("https://t.me/BlumCrypto"),
  ye = {
    class: "memepad-jetton page"
  },
  he = W({
    __name: "[shortname]",
    setup(ge) {
      const r = (() => {
          const e = X("shortname");
          if (!e) throw x("Jetton shortname is not provided");
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
          }), re().copy(a)
        },
        l = G(),
        J = H(),
        S = C(),
        u = $(),
        f = D(),
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
          e && fe(), J.name === "memepad-jetton-shortname" && S.replace({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: r
            }
          }), await me().getReferralToken(), await u.init(), l.memepad.memepadJettonPageOpen({
            source: e,
            jettonShortname: r,
            jettonId: i.value.status === "loaded" ? i.value.data.jetton.id : void 0
          }), f.init()
        }, L = () => {
          u.destroy(), f.destroy()
        };
      U(), z(() => {
        L()
      });

      function $() {
        const e = q(() => new Map, "$LIXaimu3X5"),
          a = p({
            status: "loading"
          }),
          c = Y(async () => {
            const m = e.value.get(r);
            if (m) return k(m);
            const h = await R.getMemepadJetton(r);
            return h.err ? de() : (e.value.set(r, h.data), k(h.data))
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

      function D() {
        const e = p(),
          a = p(),
          n = p(),
          c = p(!1),
          b = w(async () => {
            const t = await R.getMemepadJettonInformation(r);
            return k({
              information: (P(t) ? t.data : e.value) || e.value
            })
          }, t => {
            e.value = t.information
          }, 5e3),
          y = w(async () => {
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
          V = le(async ({
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
            c.value = !0, n.value = t, await V({
              type: t,
              value: o
            })
          }, N = g(() => {
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
          jettonReactions: N,
          updateJettonReaction: F
        }
      }
      return Z().initHandler(() => {
        l.memepad.memepadJettonBackButtonClick(), C().push({
          name: "memepad"
        })
      }, "memepad-jetton-shortname"), ve(g(() => u.state.value.status !== "loaded"), "memepad-jetton-modal-state"), ee().useTabsOnPage(g(() => {
        var a;
        if (u.state.value.status !== "loaded") return [];
        const e = (a = u.state.value.data.socials) == null ? void 0 : a.filter(n => [M.TELEGRAM, M.WEBSITE].includes(n.type)).filter(n => te(n.url))[0];
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
            l.memepad.memepadJettonOpenChat(), T().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, a) => {
        const n = K,
          c = Q,
          b = ue,
          y = ce;
        return _(), I("div", ye, [s(i).status === "error" ? (_(), O(n, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : s(ae))("emoji/Collision"),
          title: ("t" in e ? e.t : s(v))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : s(v))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : s(v))("memepad.jetton.error_screen.btn_label"),
          onButton: a[0] || (a[0] = m => ("visitCommunity" in e ? e.visitCommunity : s(be))())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : s(i).status === "loading" ? (_(), O(c, {
          key: 1
        })) : (_(), I(ne, {
          key: 2
        }, [A(b, oe(s(i).data, {
          onShare: B,
          onCopy: E
        }), null, 16), A(y, {
          modelValue: s(j),
          "onUpdate:modelValue": a[1] || (a[1] = m => se(j) ? j.value = m : null),
          "jetton-shortname": s(i).data.jetton.shortname,
          ticker: s(i).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  Ce = pe(he, [
    ["__scopeId", "data-v-004b2499"]
  ]);
export {
  Ce as
  default
};