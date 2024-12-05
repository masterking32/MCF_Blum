import {
  _ as D
} from "./BfA8VFEM.js";
import {
  _ as L
} from "./6B_Xr7uX.js";
import {
  P as w,
  d as O,
  F as u,
  bg as B,
  L as $,
  ab as U,
  ay as G,
  J as b,
  ao as x,
  av as F,
  o as K,
  b5 as N,
  r as g,
  bh as W,
  a9 as Q,
  bi as V,
  bj as S,
  bk as X,
  f as l,
  a as y,
  c as z,
  e as s,
  m as E,
  ax as H,
  bl as Y,
  ap as q,
  bm as Z,
  bn as ee,
  aS as te,
  bo as c,
  K as I,
  be as k,
  bd as ae,
  bp as ne,
  j as oe
} from "./B8dH5Zvz.js";
import {
  c as se
} from "./DPbxm6ol.js";
import {
  u as re
} from "./DBS0BpEk.js";
import {
  u as le
} from "./B9YiaAtJ.js";
import "./Dgn7poWK.js";
const me = () => w().$webApp.openTelegramLink("https://t.me/BlumCrypto"),
  ie = {
    class: "memepad-jetton page"
  },
  ue = O({
    __name: "[shortname]",
    setup(ce) {
      const r = u(() => {
          const e = B("shortname");
          if (!e) throw $("Jetton shortname is not provided");
          return e
        }),
        A = U(),
        m = G(),
        v = b(),
        M = x(),
        o = J(),
        n = C(),
        f = T();
      F(() => M.wallet.value.status, e => {
        e !== "connected" && n.controls.value.value && [c.SLIPPAGE, c.TRADE].includes(n.controls.value.value) && n.controls.clear()
      });
      const d = u(() => o.state.value.status === "loading" ? {
          status: "loading"
        } : o.state.value.status === "error" ? {
          status: "error"
        } : {
          status: "loaded",
          data: {
            jetton: o.state.value.data,
            jettonShortname: r.value,
            jettonModalControls: n.controls,
            jettonInformation: f.jettonInformation.value,
            jettonInformationControls: {
              update: f.update
            }
          }
        }),
        P = async () => {
          const e = Z("from");
          e && se(), m.name === "memepad-jetton-shortname" && v.replace({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: r.value
            }
          }), await ee().getReferralToken(), await o.init(), A.memepad.memepadJettonPageOpen({
            source: e,
            jettonShortname: r.value,
            jettonId: d.value.status === "loaded" ? d.value.data.jetton.id : void 0
          }), await f.init()
        }, R = () => {
          o.destroy(), f.destroy()
        };
      P(), K(() => {
        R()
      });

      function J() {
        const e = N(() => new Map, "$LIXaimu3X5"),
          t = g({
            status: "loading"
          }),
          p = W(async () => {
            const h = e.value.get(r.value);
            if (h) return k(h);
            const _ = await I.getMemepadJetton(r.value);
            return _.err ? ne() : (e.value.set(r.value, _.data), k(_.data))
          }, h => t.value = {
            status: "loaded",
            data: h
          }, 2e4);
        return {
          state: t,
          init: async () => {
            await p.exec()
          },
          destroy: () => {
            p.destroy(), t.value = {
              status: "loading"
            }
          }
        }
      }

      function T() {
        const e = g(),
          t = Q(async () => {
            const i = await I.getMemepadJettonInformation(r.value);
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
          jettonInformation: u(() => e.value)
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
            value: u(() => e.value.at(-1))
          }
        }
      }
      return re(() => m.name === "memepad-jetton-shortname-transactions" ? b().push({
        name: "memepad-jetton-shortname-trade"
      }) : m.name === "memepad-jetton-shortname-holders" ? b().push({
        name: "memepad-jetton-shortname-trade"
      }) : n.controls.value.value === c.SLIPPAGE ? n.controls.set(c.TRADE) : n.controls.value.value === c.TRADE || n.controls.value.value === c.IMAGE_PREVIEW ? n.controls.clear() : b().push({
        name: "memepad"
      })), le(u(() => o.state.value.status !== "loaded" || !!n.controls.value.value), "memepad-jetton-modal-state"), V().useTabsOnPage(u(() => {
        var t;
        if (o.state.value.status !== "loaded") return [];
        const e = (t = o.state.value.data.socials) == null ? void 0 : t.filter(a => [S.TELEGRAM, S.WEBSITE].includes(a.type)).filter(a => X(a.url))[0];
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
            w().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, t) => {
        const a = D,
          p = L,
          j = te;
        return y(), z("div", ie, [s(d).status === "error" ? (y(), E(a, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : s(H))("emoji/Collision"),
          title: ("t" in e ? e.t : s(l))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : s(l))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : s(l))("memepad.jetton.error_screen.btn_label"),
          onButton: t[0] || (t[0] = i => ("visitCommunity" in e ? e.visitCommunity : s(me))())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : s(d).status === "loading" ? (y(), E(p, {
          key: 1
        })) : (y(), E(j, Y(q({
          key: 2
        }, s(d).data)), null, 16))])
      }
    }
  }),
  je = oe(ue, [
    ["__scopeId", "data-v-0d41efde"]
  ]);
export {
  je as
  default
};