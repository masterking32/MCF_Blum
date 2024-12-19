import {
  _ as U
} from "./DY1d2Byh.js";
import {
  _ as V
} from "./D60r3JHg.js";
import {
  h as P,
  d as G,
  bb as F,
  a3 as N,
  G as b,
  Z as x,
  ap as W,
  ae as _,
  ad as X,
  am as K,
  j as d,
  T as Q,
  b2 as z,
  bc as H,
  R as E,
  bd as Y,
  be as J,
  bf as Z,
  z as p,
  o as g,
  c as S,
  e as s,
  J as w,
  ao as q,
  F as ee,
  b as I,
  af as te,
  p as ae,
  bg as oe,
  bh as ne,
  X as R,
  aP as se,
  bi as re,
  bj as v,
  au as M,
  aw as A,
  av as le,
  f as ue
} from "./Bxr-pE_l.js";
import {
  u as ie
} from "./67GUT98e.js";
import {
  c as me
} from "./DPbxm6ol.js";
import {
  u as ce
} from "./xEvtyJUq.js";
import "./dJKOKjL2.js";
const de = () => P().$webApp.openTelegramLink("https://t.me/BlumCrypto"),
  pe = {
    class: "memepad-jetton page"
  },
  ve = G({
    __name: "[shortname]",
    setup(fe) {
      const l = (() => {
          const e = F("shortname");
          if (!e) throw N("Jetton shortname is not provided");
          return e
        })(),
        h = b(!1),
        T = x(),
        c = W(),
        k = _(),
        C = X(),
        u = L(),
        n = B(),
        f = $();
      K(() => C.wallet.value.status, e => {
        e !== "connected" && n.controls.value.value && [v.SLIPPAGE, v.TRADE].includes(n.controls.value.value) && n.controls.clear()
      });
      const m = d(() => u.state.value.status === "loading" ? {
          status: "loading"
        } : u.state.value.status === "error" ? {
          status: "error"
        } : {
          status: "loaded",
          data: {
            jetton: u.state.value.data,
            jettonShortname: l,
            jettonModalControls: n.controls,
            jettonInformation: f.jettonInformation.value,
            jettonReactions: f.jettonReactions.value,
            updateJettonReaction: f.updateJettonReaction
          }
        }),
        D = async () => {
          const e = oe("from");
          e && me(), c.name === "memepad-jetton-shortname" && k.replace({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: l
            }
          }), await ne().getReferralToken(), await u.init(), T.memepad.memepadJettonPageOpen({
            source: e,
            jettonShortname: l,
            jettonId: m.value.status === "loaded" ? m.value.data.jetton.id : void 0
          }), f.init()
        }, O = () => {
          u.destroy(), f.destroy()
        };
      D(), Q(() => {
        O()
      });

      function L() {
        const e = z(() => new Map, "$LIXaimu3X5"),
          t = b({
            status: "loading"
          }),
          i = H(async () => {
            const r = e.value.get(l);
            if (r) return M(r);
            const o = await R.getMemepadJetton(l);
            return o.err ? le() : (e.value.set(l, o.data), M(o.data))
          }, r => t.value = {
            status: "loaded",
            data: r
          }, 2e4);
        return {
          state: t,
          init: async () => {
            await i.exec()
          },
          destroy: () => {
            i.destroy(), t.value = {
              status: "loading"
            }
          }
        }
      }

      function $() {
        const e = b(),
          t = b(),
          a = E(async () => {
            const o = await R.getMemepadJettonInformation(l);
            return M({
              information: (A(o) ? o.data : e.value) || e.value
            })
          }, o => {
            e.value = o.information
          }, 5e3),
          i = E(async () => {
            const o = await R.getMemepadJettonReactions(l);
            return M({
              reactions: (A(o) ? o.data : t.value) || t.value
            })
          }, o => {
            t.value = o.reactions
          }, 5e3),
          y = () => {
            a.exec(), i.exec()
          },
          j = () => {
            a.destroy(), i.destroy(), e.value = void 0, t.value = void 0
          },
          r = async o => {
            await R.setMemepadJettonReaction(l, o), await i.exec()
          };
        return {
          init: y,
          destroy: j,
          jettonInformation: d(() => e.value),
          jettonReactions: d(() => t.value),
          updateJettonReaction: r
        }
      }

      function B() {
        const e = b([]);
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
            value: d(() => e.value.at(-1))
          }
        }
      }
      return ce(() => c.name === "memepad-jetton-shortname-about-transactions" || c.name === "memepad-jetton-shortname-about-holders" ? _().push({
        name: "memepad-jetton-shortname-about"
      }) : c.name === "memepad-jetton-shortname-about" ? _().push({
        name: "memepad-jetton-shortname-trade"
      }) : n.controls.value.value === v.SLIPPAGE ? n.controls.set(v.TRADE) : n.controls.value.value === v.TRADE || n.controls.value.value === v.IMAGE_PREVIEW ? n.controls.clear() : _().push({
        name: "memepad"
      })), ie(d(() => u.state.value.status !== "loaded" || !!n.controls.value.value), "memepad-jetton-modal-state"), Y().useTabsOnPage(d(() => {
        var t;
        if (u.state.value.status !== "loaded") return [];
        const e = (t = u.state.value.data.socials) == null ? void 0 : t.filter(a => [J.TELEGRAM, J.WEBSITE].includes(a.type)).filter(a => Z(a.url))[0];
        return [{
          type: "link",
          label: p("tabs.memepad.trade"),
          href: k.resolve({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: c.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-trade",
          code: "memepad-trade"
        }, {
          type: "link",
          label: p("tabs.memepad.about"),
          href: k.resolve({
            name: "memepad-jetton-shortname-about",
            params: {
              shortname: c.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-about",
          code: "memepad-about"
        }, ...e ? [{
          type: "button",
          label: p("tabs.memepad.chat"),
          icon: "special/tab-chat",
          code: "memepad-chat",
          onClick: () => {
            P().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, t) => {
        const a = U,
          i = V,
          y = se,
          j = re;
        return g(), S("div", pe, [s(m).status === "error" ? (g(), w(a, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : s(q))("emoji/Collision"),
          title: ("t" in e ? e.t : s(p))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : s(p))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : s(p))("memepad.jetton.error_screen.btn_label"),
          onButton: t[0] || (t[0] = r => ("visitCommunity" in e ? e.visitCommunity : s(de))())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : s(m).status === "loading" ? (g(), w(i, {
          key: 1
        })) : (g(), S(ee, {
          key: 2
        }, [I(y, te(s(m).data, {
          onShare: t[1] || (t[1] = r => h.value = !0)
        }), null, 16), I(j, {
          modelValue: s(h),
          "onUpdate:modelValue": t[2] || (t[2] = r => ae(h) ? h.value = r : null),
          "jetton-shortname": s(m).data.jetton.shortname,
          ticker: s(m).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  Me = ue(ve, [
    ["__scopeId", "data-v-6faa7a74"]
  ]);
export {
  Me as
  default
};