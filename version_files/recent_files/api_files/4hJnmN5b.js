import {
  _ as F
} from "./DxQnliXx.js";
import {
  d as U,
  bi as V,
  ag as $,
  I as g,
  a5 as q,
  bb as L,
  ao as C,
  j as u,
  af as N,
  aO as H,
  bj as K,
  ad as Q,
  a3 as X,
  bk as x,
  bl as R,
  bm as z,
  z as l,
  h as G,
  o as f,
  c as I,
  e as a,
  y as w,
  a8 as W,
  aj as Z,
  F as Y,
  b as A,
  aV as ee,
  p as te,
  u as ae,
  an as oe,
  bn as ne,
  P as se,
  aZ as re,
  bo as me,
  ah as M,
  ai as j,
  am as ie,
  aF as ue,
  f as le
} from "./OTci2SnY.js";
import {
  u as de
} from "./C9fWHaux.js";
import {
  u as ce
} from "./CUsSTWSZ.js";
import {
  c as pe
} from "./CjrCyY9h.js";
import "./CpMdIGF_.js";
import "./CGEs3GdN.js";
const ye = {
    class: "memepad-jetton page"
  },
  fe = U({
    __name: "[shortname]",
    setup(ve) {
      const n = (() => {
          const e = V("shortname");
          if (!e) throw $("Jetton shortname is not provided");
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
        d = q(),
        y = L(),
        v = C(),
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
        S = u(() => y.query.discover === "1"),
        h = u(() => S.value ? {
          discover: "1"
        } : {}),
        B = async () => {
          const e = oe("from");
          e && pe(), y.name === "memepad-jetton-shortname" && await v.replace({
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
        const e = H(() => new Map, "$LIXaimu3X5"),
          t = g({
            status: "loading"
          }),
          c = K(async () => {
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
          t = Q(async () => {
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
      return X().initHandler(() => {
        d.memepad.memepadJettonBackButtonClick(), C().push({
          name: S.value ? "discover" : "memepad"
        })
      }, "memepad-jetton-shortname"), ce(u(() => s.state.value.status !== "loaded"), "memepad-jetton-modal-state"), x().useTabsOnPage(u(() => {
        var t;
        if (s.state.value.status !== "loaded") return [];
        const e = (t = s.state.value.data.socials) == null ? void 0 : t.filter(r => [R.TELEGRAM, R.WEBSITE].includes(r.type)).filter(r => z(r.url))[0];
        return [{
          type: "link",
          label: l("tabs.memepad.trade"),
          href: v.resolve({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: y.params.shortname
            },
            query: h.value
          }).href,
          icon: "special/tab-memepad-trade",
          code: "memepad-trade"
        }, {
          type: "link",
          label: l("tabs.memepad.about"),
          href: v.resolve({
            name: "memepad-jetton-shortname-about",
            params: {
              shortname: y.params.shortname
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
          J = me;
        return f(), I("div", ye, [a(o).status === "error" ? (f(), w(r, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : a(W))("emoji/Collision"),
          title: ("t" in e ? e.t : a(l))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : a(l))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : a(l))("base.visit_community"),
          onButton: t[0] || (t[0] = i => ("useApp" in e ? e.useApp : a(Z))().openBlumTelegram())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : a(o).status === "loading" ? (f(), w(c, {
          key: 1
        })) : (f(), I(Y, {
          key: 2
        }, [A(m, ee(a(o).data, {
          onShare: O,
          onCopy: P
        }), null, 16), A(J, {
          modelValue: a(p),
          "onUpdate:modelValue": t[1] || (t[1] = i => te(p) ? p.value = i : null),
          "jetton-shortname": a(o).data.jetton.shortname,
          ticker: a(o).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  Je = le(fe, [
    ["__scopeId", "data-v-1a9a953b"]
  ]);
export {
  Je as
  default
};