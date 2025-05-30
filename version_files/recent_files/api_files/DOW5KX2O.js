import {
  _ as F
} from "./Cdakh6hV.js";
import {
  d as U,
  bi as $,
  ah as q,
  J as g,
  a5 as L,
  b9 as V,
  ad as C,
  j as u,
  ag as N,
  bc as Q,
  bj as X,
  ae as H,
  a3 as K,
  bk as x,
  bl as R,
  bm as z,
  A as l,
  h as G,
  o as y,
  c as w,
  e as a,
  z as A,
  a8 as W,
  ak as Y,
  F as Z,
  b as I,
  aT as ee,
  p as te,
  u as ae,
  ao as oe,
  bn as ne,
  Q as se,
  aX as re,
  bo as me,
  ai as M,
  aj as j,
  an as ie,
  aF as ue,
  f as le
} from "./Dy2of55E.js";
import {
  u as de
} from "./C2LgbcQ8.js";
import {
  u as ce
} from "./Dc-cQzMM.js";
import {
  c as pe
} from "./CjrCyY9h.js";
import "./xen9342n.js";
import "./DMnre1ol.js";
const ve = {
    class: "memepad-jetton page"
  },
  ye = U({
    __name: "[shortname]",
    setup(fe) {
      const n = (() => {
          const e = $("shortname");
          if (!e) throw q("Jetton shortname is not provided");
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
        v = V(),
        f = C(),
        s = E(),
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
        J = u(() => v.query.discover === "1"),
        h = u(() => J.value ? {
          discover: "1"
        } : {}),
        T = async () => {
          const e = oe("from");
          e && pe(), v.name === "memepad-jetton-shortname" && await f.replace({
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
        }, B = () => {
          s.destroy(), b.destroy(), k.destroy()
        };
      T(), N(() => {
        B()
      });

      function E() {
        const e = Q(() => new Map, "$LIXaimu3X5"),
          t = g({
            status: "loading"
          }),
          c = X(async () => {
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
      }, "memepad-jetton-shortname"), ce(u(() => s.state.value.status !== "loaded"), "memepad-jetton-modal-state"), x().useTabsOnPage(u(() => {
        var t;
        if (s.state.value.status !== "loaded") return [];
        const e = (t = s.state.value.data.socials) == null ? void 0 : t.filter(r => [R.TELEGRAM, R.WEBSITE].includes(r.type)).filter(r => z(r.url))[0];
        return [{
          type: "link",
          label: l("tabs.memepad.trade"),
          href: f.resolve({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: v.params.shortname
            },
            query: h.value
          }).href,
          icon: "special/tab-memepad-trade",
          code: "memepad-trade"
        }, {
          type: "link",
          label: l("tabs.memepad.about"),
          href: f.resolve({
            name: "memepad-jetton-shortname-about",
            params: {
              shortname: v.params.shortname
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
            d.memepad.memepadJettonOpenChat(), G().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, t) => {
        const r = F,
          c = se,
          m = re,
          S = me;
        return y(), w("div", ve, [a(o).status === "error" ? (y(), A(r, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : a(W))("emoji/Collision"),
          title: ("t" in e ? e.t : a(l))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : a(l))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : a(l))("base.visit_community"),
          onButton: t[0] || (t[0] = i => ("useApp" in e ? e.useApp : a(Y))().openBlumTelegram())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : a(o).status === "loading" ? (y(), A(c, {
          key: 1
        })) : (y(), w(Z, {
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
  Se = le(ye, [
    ["__scopeId", "data-v-1a9a953b"]
  ]);
export {
  Se as
  default
};