import {
  _ as J
} from "./Cp_F7dFt.js";
import {
  _ as O
} from "./CEGRz4Op.js";
import {
  P as k,
  d as D,
  F as l,
  bh as L,
  L as x,
  ab as B,
  ay as U,
  J as y,
  o as $,
  b6 as G,
  r as g,
  bi as N,
  a9 as F,
  bj as c,
  bk as K,
  bl as I,
  bm as V,
  f as u,
  a as _,
  c as Q,
  e as m,
  m as E,
  ax as W,
  bn as X,
  ap as Y,
  bo as q,
  bp as z,
  aT as H,
  aV as Z,
  K as S,
  bf as A,
  be as ee,
  bq as te,
  j as ae
} from "./BtYZ0DEw.js";
import {
  c as ne
} from "./DPbxm6ol.js";
import {
  u as oe
} from "./B30q485E.js";
import {
  u as se
} from "./DbLQUxKb.js";
import "./Blehfjji.js";
const re = () => k().$webApp.openTelegramLink("https://t.me/BlumCrypto"),
  me = {
    class: "memepad-jetton page"
  },
  ie = D({
    __name: "[shortname]",
    setup(le) {
      const i = l(() => {
          const e = L("shortname");
          if (!e) throw x("Jetton shortname is not provided");
          return e
        }),
        M = B(),
        d = U(),
        v = y(),
        s = T(),
        r = C(),
        b = w(),
        p = l(() => s.state.value.status === "loading" ? {
          status: "loading"
        } : s.state.value.status === "error" ? {
          status: "error"
        } : {
          status: "loaded",
          data: {
            jetton: s.state.value.data,
            jettonShortname: i.value,
            jettonModalControls: r.controls,
            jettonInformation: b.jettonInformation.value,
            jettonInformationControls: {
              update: b.update
            }
          }
        }),
        P = async () => {
          const e = q("from", Z);
          e && ne(), d.name === "memepad-jetton-shortname" && v.replace({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: i.value
            }
          }), await z().getReferralToken(), await s.init(), M.memepad.memepadJettonPageOpen({
            source: e,
            jettonShortname: i.value,
            jettonId: p.value.status === "loaded" ? p.value.data.jetton.id : void 0
          }), await b.init()
        }, R = () => {
          s.destroy(), b.destroy()
        };
      P(), $(() => {
        R()
      });

      function T() {
        const e = G(() => new Map, "$LIXaimu3X5"),
          t = g({
            status: "loading"
          }),
          n = N(async () => {
            const h = e.value.get(i.value);
            if (h) return A(h);
            const j = await S.getMemepadJetton(i.value);
            return j.err ? te() : (e.value.set(i.value, j.data), A(j.data))
          }, h => t.value = {
            status: "loaded",
            data: h
          }, 2e4);
        return {
          state: t,
          init: async () => {
            await n.exec()
          },
          destroy: () => {
            n.destroy(), t.value = {
              status: "loading"
            }
          }
        }
      }

      function w() {
        const e = g(),
          t = F(async () => {
            const o = await S.getMemepadJettonInformation(i.value);
            return A({
              information: (ee(o) ? o.data : e.value) || e.value
            })
          }, o => {
            e.value = o.information
          }, 5e3);
        return {
          init: async () => await t.exec(),
          destroy: () => {
            t.destroy(), e.value = void 0
          },
          update: async () => await t.exec(),
          jettonInformation: l(() => e.value)
        }
      }

      function C() {
        const e = [c.TRADE, c.SLIPPAGE],
          t = g(void 0),
          a = {
            update: n => {
              t.value = n
            },
            isOpened: n => {
              if (!t.value) return !1;
              const f = e.indexOf(t.value),
                o = e.indexOf(n);
              return o === -1 ? t.value === n : f >= o
            },
            value: l(() => t.value)
          };
        return {
          state: l(() => t.value),
          controls: a
        }
      }
      return oe(() => d.name === "memepad-jetton-shortname-transactions" ? y().push({
        name: "memepad-jetton-shortname-trade"
      }) : d.name === "memepad-jetton-shortname-holders" ? y().push({
        name: "memepad-jetton-shortname-trade"
      }) : r.state.value === c.SLIPPAGE ? r.controls.update(c.TRADE) : r.state.value === c.TRADE || r.state.value === c.IMAGE_PREVIEW ? r.controls.update(void 0) : y().push({
        name: "memepad"
      })), se(l(() => s.state.value.status !== "loaded" || !!r.state.value), "memepad-jetton-modal-state"), K().useTabsOnPage(l(() => {
        var t;
        if (s.state.value.status !== "loaded") return [];
        const e = (t = s.state.value.data.socials) == null ? void 0 : t.filter(a => [I.TELEGRAM, I.WEBSITE].includes(a.type)).filter(a => V(a.url))[0];
        return [{
          type: "link",
          label: u("tabs.memepad.trade"),
          href: v.resolve({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: d.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-trade",
          code: "memepad-trade"
        }, {
          type: "link",
          label: u("tabs.memepad.transactions"),
          href: v.resolve({
            name: "memepad-jetton-shortname-transactions",
            params: {
              shortname: d.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-transactions",
          code: "memepad-transactions"
        }, {
          type: "link",
          label: u("tabs.memepad.holders"),
          href: v.resolve({
            name: "memepad-jetton-shortname-holders",
            params: {
              shortname: d.params.shortname
            }
          }).href,
          icon: "special/tab-user-circle",
          code: "memepad-holders"
        }, ...e ? [{
          type: "button",
          label: u("tabs.memepad.chat"),
          icon: "special/tab-chat",
          code: "memepad-chat",
          onClick: () => {
            k().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, t) => {
        const a = J,
          n = O,
          f = H;
        return _(), Q("div", me, [m(p).status === "error" ? (_(), E(a, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : m(W))("emoji/Collision"),
          title: ("t" in e ? e.t : m(u))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : m(u))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : m(u))("memepad.jetton.error_screen.btn_label"),
          onButton: t[0] || (t[0] = o => ("visitCommunity" in e ? e.visitCommunity : m(re))())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : m(p).status === "loading" ? (_(), E(n, {
          key: 1
        })) : (_(), E(f, X(Y({
          key: 2
        }, m(p).data)), null, 16))])
      }
    }
  }),
  he = ae(ie, [
    ["__scopeId", "data-v-868b0b7f"]
  ]);
export {
  he as
  default
};