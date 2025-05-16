import {
  _ as T
} from "./DURfk24L.js";
import {
  d as U,
  be as D,
  a8 as $,
  y as _,
  X as F,
  bd as L,
  ai as S,
  j as p,
  a7 as N,
  b4 as V,
  bf as Q,
  a5 as X,
  U as H,
  bg as K,
  bh as J,
  bi as x,
  C as u,
  h as z,
  o as f,
  c as C,
  e as a,
  N as R,
  a0 as G,
  ab as W,
  F as q,
  b as I,
  aM as Y,
  p as Z,
  u as ee,
  ah as te,
  bj as ae,
  ad as oe,
  aQ as ne,
  bk as se,
  a9 as M,
  aa as g,
  af as re,
  az as me,
  f as ie
} from "./1XbCgLiZ.js";
import {
  u as ue
} from "./oOHTyLym.js";
import {
  u as de
} from "./Dm17RVe9.js";
import {
  c as le
} from "./CjrCyY9h.js";
import "./CSwsF6Ry.js";
import "./2UWPMPm0.js";
const ce = {
    class: "memepad-jetton page"
  },
  pe = U({
    __name: "[shortname]",
    setup(fe) {
      const n = (() => {
          const e = D("shortname");
          if (!e) throw $("Jetton shortname is not provided");
          return e
        })(),
        c = _(!1),
        w = e => {
          d.memepad.memepadJettonShareClick({
            source: e
          }), c.value = !0
        },
        A = e => {
          if (o.value.status !== "loaded") return;
          const t = o.value.data.jetton.address;
          d.memepad.memepadJettonCopyAddress({
            source: e
          }), ee().copy(t)
        },
        d = F(),
        b = L(),
        y = S(),
        s = E(),
        h = P(),
        {
          _flow: j
        } = ue({
          jettonShortname: n
        }),
        o = p(() => s.state.value.status === "loading" ? {
          status: "loading"
        } : s.state.value.status === "error" ? {
          status: "error"
        } : {
          status: "loaded",
          data: {
            jetton: s.state.value.data,
            jettonShortname: n,
            jettonInformation: h.jettonInformation.value
          }
        }),
        O = async () => {
          const e = te("from");
          e && le(), b.name === "memepad-jetton-shortname" && y.replace({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: n
            }
          }), await ae().getReferralToken(), await s.init(), d.memepad.memepadJettonPageOpen({
            source: e,
            jettonShortname: n,
            jettonId: o.value.status === "loaded" ? o.value.data.jetton.id : void 0
          }), h.init(), j.init()
        }, B = () => {
          s.destroy(), h.destroy(), j.destroy()
        };
      O(), N(() => {
        B()
      });

      function E() {
        const e = V(() => new Map, "$LIXaimu3X5"),
          t = _({
            status: "loading"
          }),
          l = Q(async () => {
            const i = e.value.get(n);
            if (i) return g(i);
            const v = await M.getMemepadJetton(n);
            return v.err ? me() : (e.value.set(n, v.data), g(v.data))
          }, i => t.value = {
            status: "loaded",
            data: i
          }, 2e4);
        return {
          state: t,
          init: async () => {
            await l.exec()
          },
          destroy: () => {
            l.destroy(), t.value = {
              status: "loading"
            }
          }
        }
      }

      function P() {
        const e = _(),
          t = X(async () => {
            const m = await M.getMemepadJettonInformation(n);
            return g({
              information: (re(m) ? m.data : e.value) || e.value
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
          jettonInformation: p(() => e.value)
        }
      }
      return H().initHandler(() => {
        d.memepad.memepadJettonBackButtonClick(), S().push({
          name: "memepad"
        })
      }, "memepad-jetton-shortname"), de(p(() => s.state.value.status !== "loaded"), "memepad-jetton-modal-state"), K().useTabsOnPage(p(() => {
        var t;
        if (s.state.value.status !== "loaded") return [];
        const e = (t = s.state.value.data.socials) == null ? void 0 : t.filter(r => [J.TELEGRAM, J.WEBSITE].includes(r.type)).filter(r => x(r.url))[0];
        return [{
          type: "link",
          label: u("tabs.memepad.trade"),
          href: y.resolve({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: b.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-trade",
          code: "memepad-trade"
        }, {
          type: "link",
          label: u("tabs.memepad.about"),
          href: y.resolve({
            name: "memepad-jetton-shortname-about",
            params: {
              shortname: b.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-about",
          code: "memepad-about"
        }, ...e ? [{
          type: "button",
          label: u("tabs.memepad.chat"),
          icon: "special/tab-chat",
          code: "memepad-chat",
          onClick: () => {
            d.memepad.memepadJettonOpenChat(), z().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, t) => {
        const r = T,
          l = oe,
          m = ne,
          k = se;
        return f(), C("div", ce, [a(o).status === "error" ? (f(), R(r, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : a(G))("emoji/Collision"),
          title: ("t" in e ? e.t : a(u))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : a(u))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : a(u))("base.visit_community"),
          onButton: t[0] || (t[0] = i => ("useApp" in e ? e.useApp : a(W))().openBlumTelegram())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : a(o).status === "loading" ? (f(), R(l, {
          key: 1
        })) : (f(), C(q, {
          key: 2
        }, [I(m, Y(a(o).data, {
          onShare: w,
          onCopy: A
        }), null, 16), I(k, {
          modelValue: a(c),
          "onUpdate:modelValue": t[1] || (t[1] = i => Z(c) ? c.value = i : null),
          "jetton-shortname": a(o).data.jetton.shortname,
          ticker: a(o).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  ke = ie(pe, [
    ["__scopeId", "data-v-ee3bcc5d"]
  ]);
export {
  ke as
  default
};