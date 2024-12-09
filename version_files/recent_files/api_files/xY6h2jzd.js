import {
  _ as D
} from "./BoZY2uSh.js";
import {
  _ as L
} from "./Cdj-cREA.js";
import {
  P as A,
  d as O,
  bf as B,
  L as $,
  ab as U,
  ay as G,
  J as h,
  ao as x,
  av as F,
  F as p,
  o as K,
  b4 as N,
  r as g,
  bg as W,
  a9 as Q,
  bh as V,
  bi as I,
  bj as X,
  f as l,
  a as y,
  c as z,
  e as s,
  m as E,
  ax as H,
  bk as Y,
  ap as q,
  bl as Z,
  bm as ee,
  aS as te,
  bn as u,
  K as w,
  bd as k,
  bc as ae,
  bo as ne,
  j as oe
} from "./Ddf_vcE7.js";
import {
  c as se
} from "./DPbxm6ol.js";
import {
  u as re
} from "./DSepsHuw.js";
import {
  u as le
} from "./BosT_D5z.js";
import "./B8aUunDU.js";
const me = () => A().$webApp.openTelegramLink("https://t.me/BlumCrypto"),
  ie = {
    class: "memepad-jetton page"
  },
  ue = O({
    __name: "[shortname]",
    setup(ce) {
      const r = (() => {
          const e = B("shortname");
          if (!e) throw $("Jetton shortname is not provided");
          return e
        })(),
        M = U(),
        m = G(),
        v = h(),
        P = x(),
        o = J(),
        n = C(),
        f = T();
      F(() => P.wallet.value.status, e => {
        e !== "connected" && n.controls.value.value && [u.SLIPPAGE, u.TRADE].includes(n.controls.value.value) && n.controls.clear()
      });
      const c = p(() => o.state.value.status === "loading" ? {
          status: "loading"
        } : o.state.value.status === "error" ? {
          status: "error"
        } : {
          status: "loaded",
          data: {
            jetton: o.state.value.data,
            jettonShortname: r,
            jettonModalControls: n.controls,
            jettonInformation: f.jettonInformation.value,
            jettonInformationControls: {
              update: f.update
            }
          }
        }),
        S = async () => {
          const e = Z("from");
          e && se(), m.name === "memepad-jetton-shortname" && v.replace({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: r
            }
          }), await ee().getReferralToken(), await o.init(), M.memepad.memepadJettonPageOpen({
            source: e,
            jettonShortname: r,
            jettonId: c.value.status === "loaded" ? c.value.data.jetton.id : void 0
          }), await f.init()
        }, R = () => {
          o.destroy(), f.destroy()
        };
      S(), K(() => {
        R()
      });

      function J() {
        const e = N(() => new Map, "$LIXaimu3X5"),
          t = g({
            status: "loading"
          }),
          d = W(async () => {
            const b = e.value.get(r);
            if (b) return k(b);
            const j = await w.getMemepadJetton(r);
            return j.err ? ne() : (e.value.set(r, j.data), k(j.data))
          }, b => t.value = {
            status: "loaded",
            data: b
          }, 2e4);
        return {
          state: t,
          init: async () => {
            await d.exec()
          },
          destroy: () => {
            d.destroy(), t.value = {
              status: "loading"
            }
          }
        }
      }

      function T() {
        const e = g(),
          t = Q(async () => {
            const i = await w.getMemepadJettonInformation(r);
            return k({
              information: (ae(i) ? i.data : e.value) || e.value
            })
          }, i => {
            e.value = i.information
          }, 5e3);
        return {
          init: async () => await t.exec(),
          destroy: () => {
            t.destroy(), e.value = void 0
          },
          update: async () => await t.exec(),
          jettonInformation: p(() => e.value)
        }
      }

      function C() {
        const e = g([]);
        return {
          controls: {
            set: a => {
              e.value = [a]
            },
            clear: () => {
              e.value = []
            },
            add: a => {
              e.value = [...e.value, a]
            },
            isOpened: a => e.value.includes(a),
            value: p(() => e.value.at(-1))
          }
        }
      }
      return re(() => m.name === "memepad-jetton-shortname-transactions" ? h().push({
        name: "memepad-jetton-shortname-trade"
      }) : m.name === "memepad-jetton-shortname-holders" ? h().push({
        name: "memepad-jetton-shortname-trade"
      }) : n.controls.value.value === u.SLIPPAGE ? n.controls.set(u.TRADE) : n.controls.value.value === u.TRADE || n.controls.value.value === u.IMAGE_PREVIEW ? n.controls.clear() : h().push({
        name: "memepad"
      })), le(p(() => o.state.value.status !== "loaded" || !!n.controls.value.value), "memepad-jetton-modal-state"), V().useTabsOnPage(p(() => {
        var t;
        if (o.state.value.status !== "loaded") return [];
        const e = (t = o.state.value.data.socials) == null ? void 0 : t.filter(a => [I.TELEGRAM, I.WEBSITE].includes(a.type)).filter(a => X(a.url))[0];
        return [{
          type: "link",
          label: l("tabs.memepad.trade"),
          href: v.resolve({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: m.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-trade",
          code: "memepad-trade"
        }, {
          type: "link",
          label: l("tabs.memepad.transactions"),
          href: v.resolve({
            name: "memepad-jetton-shortname-transactions",
            params: {
              shortname: m.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-transactions",
          code: "memepad-transactions"
        }, {
          type: "link",
          label: l("tabs.memepad.holders"),
          href: v.resolve({
            name: "memepad-jetton-shortname-holders",
            params: {
              shortname: m.params.shortname
            }
          }).href,
          icon: "special/tab-user-circle",
          code: "memepad-holders"
        }, ...e ? [{
          type: "button",
          label: l("tabs.memepad.chat"),
          icon: "special/tab-chat",
          code: "memepad-chat",
          onClick: () => {
            A().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, t) => {
        const a = D,
          d = L,
          _ = te;
        return y(), z("div", ie, [s(c).status === "error" ? (y(), E(a, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : s(H))("emoji/Collision"),
          title: ("t" in e ? e.t : s(l))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : s(l))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : s(l))("memepad.jetton.error_screen.btn_label"),
          onButton: t[0] || (t[0] = i => ("visitCommunity" in e ? e.visitCommunity : s(me))())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : s(c).status === "loading" ? (y(), E(d, {
          key: 1
        })) : (y(), E(_, Y(q({
          key: 2
        }, s(c).data)), null, 16))])
      }
    }
  }),
  _e = oe(ue, [
    ["__scopeId", "data-v-f60086cf"]
  ]);
export {
  _e as
  default
};