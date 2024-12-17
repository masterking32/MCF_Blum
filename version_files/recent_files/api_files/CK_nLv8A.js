import {
  _ as $
} from "./B-C8jhdy.js";
import {
  _ as B
} from "./D-Sqbfrx.js";
import {
  P,
  d as V,
  bf as U,
  L as F,
  r as h,
  ab as G,
  ay as N,
  J as y,
  ao as W,
  av as x,
  F as v,
  o as K,
  b4 as Q,
  bg as X,
  a9 as H,
  bh as Y,
  bi as E,
  bj as q,
  f as c,
  a as j,
  c as I,
  e as n,
  m as M,
  ax as z,
  W as Z,
  k as w,
  ap as ee,
  V as te,
  bk as ae,
  bl as oe,
  aS as ne,
  bm as se,
  bn as d,
  K as A,
  bd as S,
  bc as re,
  bo as le,
  j as me
} from "./Dq6b0IKe.js";
import {
  u as ue
} from "./DvSiAemu.js";
import {
  c as ie
} from "./DPbxm6ol.js";
import {
  u as ce
} from "./AzJ87D8l.js";
import "./DZs_7pon.js";
const de = () => P().$webApp.openTelegramLink("https://t.me/BlumCrypto"),
  pe = {
    class: "memepad-jetton page"
  },
  ve = V({
    __name: "[shortname]",
    setup(fe) {
      const l = (() => {
          const e = U("shortname");
          if (!e) throw F("Jetton shortname is not provided");
          return e
        })(),
        f = h(!1),
        R = G(),
        i = N(),
        _ = y(),
        J = W(),
        s = D(),
        o = L(),
        b = O();
      x(() => J.wallet.value.status, e => {
        e !== "connected" && o.controls.value.value && [d.SLIPPAGE, d.TRADE].includes(o.controls.value.value) && o.controls.clear()
      });
      const m = v(() => s.state.value.status === "loading" ? {
          status: "loading"
        } : s.state.value.status === "error" ? {
          status: "error"
        } : {
          status: "loaded",
          data: {
            jetton: s.state.value.data,
            jettonShortname: l,
            jettonModalControls: o.controls,
            jettonInformation: b.jettonInformation.value,
            jettonInformationControls: {
              update: b.update
            }
          }
        }),
        T = async () => {
          const e = ae("from");
          e && ie(), i.name === "memepad-jetton-shortname" && _.replace({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: l
            }
          }), await oe().getReferralToken(), await s.init(), R.memepad.memepadJettonPageOpen({
            source: e,
            jettonShortname: l,
            jettonId: m.value.status === "loaded" ? m.value.data.jetton.id : void 0
          }), await b.init()
        }, C = () => {
          s.destroy(), b.destroy()
        };
      T(), K(() => {
        C()
      });

      function D() {
        const e = Q(() => new Map, "$LIXaimu3X5"),
          t = h({
            status: "loading"
          }),
          p = X(async () => {
            const r = e.value.get(l);
            if (r) return S(r);
            const k = await A.getMemepadJetton(l);
            return k.err ? le() : (e.value.set(l, k.data), S(k.data))
          }, r => t.value = {
            status: "loaded",
            data: r
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

      function O() {
        const e = h(),
          t = H(async () => {
            const u = await A.getMemepadJettonInformation(l);
            return S({
              information: (re(u) ? u.data : e.value) || e.value
            })
          }, u => {
            e.value = u.information
          }, 5e3);
        return {
          init: async () => await t.exec(),
          destroy: () => {
            t.destroy(), e.value = void 0
          },
          update: async () => await t.exec(),
          jettonInformation: v(() => e.value)
        }
      }

      function L() {
        const e = h([]);
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
            value: v(() => e.value.at(-1))
          }
        }
      }
      return ce(() => i.name === "memepad-jetton-shortname-about-transactions" || i.name === "memepad-jetton-shortname-about-holders" ? y().push({
        name: "memepad-jetton-shortname-about"
      }) : i.name === "memepad-jetton-shortname-about" ? y().push({
        name: "memepad-jetton-shortname-trade"
      }) : o.controls.value.value === d.SLIPPAGE ? o.controls.set(d.TRADE) : o.controls.value.value === d.TRADE || o.controls.value.value === d.IMAGE_PREVIEW ? o.controls.clear() : y().push({
        name: "memepad"
      })), ue(v(() => s.state.value.status !== "loaded" || !!o.controls.value.value), "memepad-jetton-modal-state"), Y().useTabsOnPage(v(() => {
        var t;
        if (s.state.value.status !== "loaded") return [];
        const e = (t = s.state.value.data.socials) == null ? void 0 : t.filter(a => [E.TELEGRAM, E.WEBSITE].includes(a.type)).filter(a => q(a.url))[0];
        return [{
          type: "link",
          label: c("tabs.memepad.trade"),
          href: _.resolve({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: i.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-trade",
          code: "memepad-trade"
        }, {
          type: "link",
          label: c("tabs.memepad.about"),
          href: _.resolve({
            name: "memepad-jetton-shortname-about",
            params: {
              shortname: i.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-about",
          code: "memepad-about"
        }, ...e ? [{
          type: "button",
          label: c("tabs.memepad.chat"),
          icon: "special/tab-chat",
          code: "memepad-chat",
          onClick: () => {
            P().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, t) => {
        const a = $,
          p = B,
          g = ne,
          u = se;
        return j(), I("div", pe, [n(m).status === "error" ? (j(), M(a, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : n(z))("emoji/Collision"),
          title: ("t" in e ? e.t : n(c))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : n(c))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : n(c))("memepad.jetton.error_screen.btn_label"),
          onButton: t[0] || (t[0] = r => ("visitCommunity" in e ? e.visitCommunity : n(de))())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : n(m).status === "loading" ? (j(), M(p, {
          key: 1
        })) : (j(), I(Z, {
          key: 2
        }, [w(g, ee(n(m).data, {
          onShare: t[1] || (t[1] = r => f.value = !0)
        }), null, 16), w(u, {
          modelValue: n(f),
          "onUpdate:modelValue": t[2] || (t[2] = r => te(f) ? f.value = r : null),
          "jetton-shortname": n(m).data.jetton.shortname,
          ticker: n(m).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  Se = me(ve, [
    ["__scopeId", "data-v-97b433d1"]
  ]);
export {
  Se as
  default
};