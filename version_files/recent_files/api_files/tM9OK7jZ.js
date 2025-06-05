import {
  _ as q
} from "./BDeU0lKd.js";
import {
  d as U,
  bl as $,
  ah as F,
  J as g,
  a5 as L,
  bc as V,
  ad as C,
  j as u,
  ag as N,
  bf as Q,
  bm as G,
  ae as H,
  a3 as K,
  bn as W,
  bo as R,
  bp as X,
  A as l,
  h as x,
  o as v,
  c as w,
  e as a,
  z as A,
  a8 as z,
  ak as Y,
  F as Z,
  b as I,
  aW as ee,
  p as te,
  u as ae,
  ao as oe,
  bq as ne,
  Q as se,
  a_ as re,
  br as me,
  ai as M,
  aj as j,
  an as ie,
  aG as ue,
  f as le
} from "./P2UesN5H.js";
import {
  u as de
} from "./C9Lcb4u0.js";
import {
  u as ce
} from "./flrgGBTp.js";
import {
  c as pe
} from "./CjrCyY9h.js";
import "./BW67EIGw.js";
import "./CaHasfcf.js";
const fe = {
    class: "memepad-jetton page"
  },
  ve = U({
    __name: "[shortname]",
    setup(ye) {
      const n = (() => {
          const e = $("shortname");
          if (!e) throw F("Jetton shortname is not provided");
          return e
        })(),
        p = g(!1),
        O = e => {
          d.memepad.memepadJettonShareClick({
            source: e
          }), p.value = !0
        },
        P = e => {
          if (o.value.status !== "loaded") return;
          const t = o.value.data.jetton.address;
          d.memepad.memepadJettonCopyAddress({
            source: e
          }), ae().copy(t)
        },
        d = L(),
        f = V(),
        y = C(),
        s = T(),
        b = D(),
        {
          _flow: k
        } = de({
          jettonShortname: n
        }),
        o = u(() => s.state.value.status === "loading" ? {
          status: "loading"
        } : s.state.value.status === "error" ? {
          status: "error"
        } : {
          status: "loaded",
          data: {
            jetton: s.state.value.data,
            jettonShortname: n,
            jettonInformation: b.jettonInformation.value
          }
        }),
        J = u(() => f.query.discover === "1"),
        h = u(() => J.value ? {
          discover: "1"
        } : {}),
        B = async () => {
          const e = oe("from");
          e && pe(), f.name === "memepad-jetton-shortname" && await y.replace({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: n
            },
            query: h.value
          }), await ne().getReferralToken(), await s.init(), d.memepad.memepadJettonPageOpen({
            source: e,
            jettonShortname: n,
            jettonId: o.value.status === "loaded" ? o.value.data.jetton.id : void 0
          }), b.init(), k.init()
        }, E = () => {
          s.destroy(), b.destroy(), k.destroy()
        };
      B(), N(() => {
        E()
      });

      function T() {
        const e = Q(() => new Map, "$LIXaimu3X5"),
          t = g({
            status: "loading"
          }),
          c = G(async () => {
            const i = e.value.get(n);
            if (i) return j(i);
            const _ = await M.getMemepadJetton(n);
            return _.err ? ue() : (e.value.set(n, _.data), j(_.data))
          }, i => t.value = {
            status: "loaded",
            data: i
          }, 2e4);
        return {
          state: t,
          init: async () => {
            await c.exec()
          },
          destroy: () => {
            c.destroy(), t.value = {
              status: "loading"
            }
          }
        }
      }

      function D() {
        const e = g(),
          t = H(async () => {
            const m = await M.getMemepadJettonInformation(n);
            return j({
              information: (ie(m) ? m.data : e.value) || e.value
            })
          }, m => {
            e.value = m.information
          }, 5e3);
        return {
          init: () => {
            t.exec()
          },
          destroy: () => {
            t.destroy(), e.value = void 0
          },
          jettonInformation: u(() => e.value)
        }
      }
      return K().initHandler(() => {
        d.memepad.memepadJettonBackButtonClick(), C().push({
          name: J.value ? "discover" : "memepad"
        })
      }, "memepad-jetton-shortname"), ce(u(() => s.state.value.status !== "loaded"), "memepad-jetton-modal-state"), W().useTabsOnPage(u(() => {
        var t;
        if (s.state.value.status !== "loaded") return [];
        const e = (t = s.state.value.data.socials) == null ? void 0 : t.filter(r => [R.TELEGRAM, R.WEBSITE].includes(r.type)).filter(r => X(r.url))[0];
        return [{
          type: "link",
          label: l("tabs.memepad.trade"),
          href: y.resolve({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: f.params.shortname
            },
            query: h.value
          }).href,
          icon: "special/tab-memepad-trade",
          code: "memepad-trade"
        }, {
          type: "link",
          label: l("tabs.memepad.about"),
          href: y.resolve({
            name: "memepad-jetton-shortname-about",
            params: {
              shortname: f.params.shortname
            },
            query: h.value
          }).href,
          icon: "special/tab-memepad-about",
          code: "memepad-about"
        }, ...e ? [{
          type: "button",
          label: l("tabs.memepad.chat"),
          icon: "special/tab-chat",
          code: "memepad-chat",
          onClick: () => {
            d.memepad.memepadJettonOpenChat(), x().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, t) => {
        const r = q,
          c = se,
          m = re,
          S = me;
        return v(), w("div", fe, [a(o).status === "error" ? (v(), A(r, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : a(z))("emoji/Collision"),
          title: ("t" in e ? e.t : a(l))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : a(l))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : a(l))("base.visit_community"),
          onButton: t[0] || (t[0] = i => ("useApp" in e ? e.useApp : a(Y))().openBlumTelegram())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : a(o).status === "loading" ? (v(), A(c, {
          key: 1
        })) : (v(), w(Z, {
          key: 2
        }, [I(m, ee(a(o).data, {
          onShare: O,
          onCopy: P
        }), null, 16), I(S, {
          modelValue: a(p),
          "onUpdate:modelValue": t[1] || (t[1] = i => te(p) ? p.value = i : null),
          "jetton-shortname": a(o).data.jetton.shortname,
          ticker: a(o).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  Se = le(ve, [
    ["__scopeId", "data-v-1a9a953b"]
  ]);
export {
  Se as
  default
};