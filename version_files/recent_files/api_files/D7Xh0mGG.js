import {
  _ as T
} from "./8Z2NiE89.js";
import {
  _ as U
} from "./CiinTD8R.js";
import {
  d as D,
  bd as L,
  a8 as $,
  y as _,
  X as F,
  bc as N,
  ah as S,
  j as p,
  a7 as V,
  b3 as X,
  be as H,
  a5 as K,
  U as Q,
  bf as x,
  bg as J,
  bh as G,
  C as u,
  h as W,
  o as f,
  c as C,
  e as a,
  N as R,
  a0 as q,
  ab as z,
  F as Y,
  b as I,
  aL as Z,
  p as ee,
  u as te,
  ag as ae,
  bi as oe,
  aP as ne,
  bj as se,
  a9 as w,
  aa as g,
  ae as re,
  ay as me,
  f as ie
} from "./CeLf80nu.js";
import {
  u as ue
} from "./CAE_4re7.js";
import {
  u as de
} from "./BKc2VfQ7.js";
import {
  c as le
} from "./CjrCyY9h.js";
import "./CLPfiL4J.js";
import "./BSgRs94G.js";
const ce = {
    class: "memepad-jetton page"
  },
  pe = D({
    __name: "[shortname]",
    setup(fe) {
      const n = (() => {
          const e = L("shortname");
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
        b = N(),
        y = S(),
        s = B(),
        h = E(),
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
        }, P = () => {
          s.destroy(), h.destroy(), j.destroy()
        };
      O(), V(() => {
        P()
      });

      function B() {
        const e = X(() => new Map, "$LIXaimu3X5"),
          t = _({
            status: "loading"
          }),
          l = H(async () => {
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

      function E() {
        const e = _(),
          t = K(async () => {
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
      return Q().initHandler(() => {
        d.memepad.memepadJettonBackButtonClick(), S().push({
          name: "memepad"
        })
      }, "memepad-jetton-shortname"), de(p(() => s.state.value.status !== "loaded"), "memepad-jetton-modal-state"), x().useTabsOnPage(p(() => {
        var t;
        if (s.state.value.status !== "loaded") return [];
        const e = (t = s.state.value.data.socials) == null ? void 0 : t.filter(r => [J.TELEGRAM, J.WEBSITE].includes(r.type)).filter(r => G(r.url))[0];
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
            d.memepad.memepadJettonOpenChat(), W().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, t) => {
        const r = T,
          l = U,
          m = ne,
          k = se;
        return f(), C("div", ce, [a(o).status === "error" ? (f(), R(r, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : a(q))("emoji/Collision"),
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