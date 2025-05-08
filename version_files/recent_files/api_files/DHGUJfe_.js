import {
  _ as T
} from "./CLTkpfqv.js";
import {
  _ as U
} from "./C-7eHIco.js";
import {
  d as D,
  bo as N,
  a4 as $,
  y as _,
  a9 as F,
  bn as L,
  ae as S,
  j as p,
  a3 as V,
  be as X,
  bp as q,
  a1 as H,
  U as K,
  bq as Q,
  br as J,
  bs as x,
  C as u,
  h as G,
  o as f,
  c as C,
  e as a,
  N as R,
  X as W,
  a7 as z,
  F as Y,
  b as I,
  aq as Z,
  p as ee,
  u as te,
  ad as ae,
  bt as oe,
  b0 as ne,
  bu as se,
  a5 as w,
  a6 as g,
  ab as re,
  aN as me,
  f as ie
} from "./BlYmRJuD.js";
import {
  u as ue
} from "./840mZJKb.js";
import {
  u as de
} from "./BOpcyubt.js";
import {
  c as le
} from "./CjrCyY9h.js";
import "./D35qgfxr.js";
import "./B5wii_a4.js";
const ce = {
    class: "memepad-jetton page"
  },
  pe = D({
    __name: "[shortname]",
    setup(fe) {
      const n = (() => {
          const e = N("shortname");
          if (!e) throw $("Jetton shortname is not provided");
          return e
        })(),
        c = _(!1),
        A = e => {
          d.memepad.memepadJettonShareClick({
            source: e
          }), c.value = !0
        },
        M = e => {
          if (o.value.status !== "loaded") return;
          const t = o.value.data.jetton.address;
          d.memepad.memepadJettonCopyAddress({
            source: e
          }), te().copy(t)
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
          const e = ae("from");
          e && le(), b.name === "memepad-jetton-shortname" && y.replace({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: n
            }
          }), await oe().getReferralToken(), await s.init(), d.memepad.memepadJettonPageOpen({
            source: e,
            jettonShortname: n,
            jettonId: o.value.status === "loaded" ? o.value.data.jetton.id : void 0
          }), h.init(), j.init()
        }, B = () => {
          s.destroy(), h.destroy(), j.destroy()
        };
      O(), V(() => {
        B()
      });

      function E() {
        const e = X(() => new Map, "$LIXaimu3X5"),
          t = _({
            status: "loading"
          }),
          l = q(async () => {
            const i = e.value.get(n);
            if (i) return g(i);
            const v = await w.getMemepadJetton(n);
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
          t = H(async () => {
            const m = await w.getMemepadJettonInformation(n);
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
      return K().initHandler(() => {
        d.memepad.memepadJettonBackButtonClick(), S().push({
          name: "memepad"
        })
      }, "memepad-jetton-shortname"), de(p(() => s.state.value.status !== "loaded"), "memepad-jetton-modal-state"), Q().useTabsOnPage(p(() => {
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
            d.memepad.memepadJettonOpenChat(), G().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, t) => {
        const r = T,
          l = U,
          m = ne,
          k = se;
        return f(), C("div", ce, [a(o).status === "error" ? (f(), R(r, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : a(W))("emoji/Collision"),
          title: ("t" in e ? e.t : a(u))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : a(u))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : a(u))("base.visit_community"),
          onButton: t[0] || (t[0] = i => ("useApp" in e ? e.useApp : a(z))().openBlumTelegram())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : a(o).status === "loading" ? (f(), R(l, {
          key: 1
        })) : (f(), C(Y, {
          key: 2
        }, [I(m, Z(a(o).data, {
          onShare: A,
          onCopy: M
        }), null, 16), I(k, {
          modelValue: a(c),
          "onUpdate:modelValue": t[1] || (t[1] = i => ee(c) ? c.value = i : null),
          "jetton-shortname": a(o).data.jetton.shortname,
          ticker: a(o).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  Se = ie(pe, [
    ["__scopeId", "data-v-ee3bcc5d"]
  ]);
export {
  Se as
  default
};