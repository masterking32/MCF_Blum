import {
  _ as Q
} from "./Cp707_QF.js";
import {
  _ as X
} from "./CXO-Cdt2.js";
import {
  h as C,
  d as x,
  bc as K,
  a3 as z,
  G as d,
  Z as H,
  ap as Y,
  ae as J,
  ad as Z,
  am as q,
  j as f,
  T as ee,
  b3 as te,
  bd as ae,
  R as w,
  be as ne,
  bf as I,
  bg as oe,
  z as b,
  o as S,
  c as A,
  e as s,
  J as P,
  ao as se,
  F as re,
  b as T,
  af as ue,
  p as le,
  bh as ie,
  bi as me,
  aQ as ce,
  bj as de,
  bk as h,
  ab as pe,
  X as k,
  au as M,
  aw as D,
  av as ve,
  f as fe
} from "./CEkQG6G2.js";
import {
  u as be
} from "./JYwA3zMO.js";
import {
  c as he
} from "./DPbxm6ol.js";
import {
  u as ye
} from "./DhlAJ15s.js";
import "./DCKbnw83.js";
const je = () => C().$webApp.openTelegramLink("https://t.me/BlumCrypto"),
  ge = {
    class: "memepad-jetton page"
  },
  _e = x({
    __name: "[shortname]",
    setup(Re) {
      const u = (() => {
          const e = K("shortname");
          if (!e) throw z("Jetton shortname is not provided");
          return e
        })(),
        R = d(!1),
        O = H(),
        p = Y(),
        E = J(),
        L = Z(),
        l = B(),
        o = F(),
        y = V();
      q(() => L.wallet.value.status, e => {
        e !== "connected" && o.controls.value.value && [h.SLIPPAGE, h.TRADE].includes(o.controls.value.value) && o.controls.clear()
      });
      const m = f(() => l.state.value.status === "loading" ? {
          status: "loading"
        } : l.state.value.status === "error" ? {
          status: "error"
        } : {
          status: "loaded",
          data: {
            jetton: l.state.value.data,
            jettonShortname: u,
            jettonModalControls: o.controls,
            jettonInformation: y.jettonInformation.value,
            jettonReactions: y.jettonReactions.value,
            updateJettonReaction: y.updateJettonReaction
          }
        }),
        U = async () => {
          const e = ie("from");
          e && he(), p.name === "memepad-jetton-shortname" && E.replace({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: u
            }
          }), await me().getReferralToken(), await l.init(), O.memepad.memepadJettonPageOpen({
            source: e,
            jettonShortname: u,
            jettonId: m.value.status === "loaded" ? m.value.data.jetton.id : void 0
          }), y.init()
        }, $ = () => {
          l.destroy(), y.destroy()
        };
      U(), ee(() => {
        $()
      });

      function B() {
        const e = te(() => new Map, "$LIXaimu3X5"),
          t = d({
            status: "loading"
          }),
          i = ae(async () => {
            const r = e.value.get(u);
            if (r) return M(r);
            const _ = await k.getMemepadJetton(u);
            return _.err ? ve() : (e.value.set(u, _.data), M(_.data))
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

      function V() {
        const e = d(),
          t = d(),
          n = d(),
          i = d(!1),
          j = w(async () => {
            const a = await k.getMemepadJettonInformation(u);
            return M({
              information: (D(a) ? a.data : e.value) || e.value
            })
          }, a => {
            e.value = a.information
          }, 5e3),
          g = w(async () => {
            const a = await k.getMemepadJettonReactions(u);
            return M({
              reactions: (D(a) ? a.data : t.value) || t.value
            })
          }, a => {
            var c;
            t.value = a.reactions, i.value || (n.value = (c = a.reactions) == null ? void 0 : c.user)
          }, 5e3),
          r = () => {
            j.exec(), g.exec()
          },
          _ = () => {
            j.destroy(), g.destroy(), e.value = void 0, t.value = void 0, n.value = void 0
          },
          G = pe(async a => {
            await k.setMemepadJettonReaction(u, a), i.value = !1
          }, 600).debouncedFunction,
          N = async a => {
            i.value = !0, n.value = a, await G(a)
          }, W = f(() => {
            if (!t.value) return;
            const a = t.value.user,
              c = n.value,
              v = {
                ...t.value
              };
            return a !== c && (v.user = n.value, c && (v[c] = v[c].plus(1)), a && (v[a] = v[a].minus(1))), v
          });
        return {
          init: r,
          destroy: _,
          jettonInformation: f(() => e.value),
          jettonReactions: W,
          updateJettonReaction: N
        }
      }

      function F() {
        const e = d([]);
        return {
          controls: {
            set: n => {
              e.value = [n]
            },
            clear: () => {
              e.value = []
            },
            add: n => {
              e.value = [...e.value, n]
            },
            isOpened: n => e.value.includes(n),
            value: f(() => e.value.at(-1))
          }
        }
      }
      return ye(() => p.name === "memepad-jetton-shortname-about-transactions" || p.name === "memepad-jetton-shortname-about-holders" ? J().push({
        name: "memepad-jetton-shortname-about"
      }) : p.name === "memepad-jetton-shortname-about" ? J().push({
        name: "memepad-jetton-shortname-trade"
      }) : o.controls.value.value === h.SLIPPAGE ? o.controls.set(h.TRADE) : o.controls.value.value === h.TRADE || o.controls.value.value === h.IMAGE_PREVIEW ? o.controls.clear() : J().push({
        name: "memepad"
      })), be(f(() => l.state.value.status !== "loaded" || !!o.controls.value.value), "memepad-jetton-modal-state"), ne().useTabsOnPage(f(() => {
        var t;
        if (l.state.value.status !== "loaded") return [];
        const e = (t = l.state.value.data.socials) == null ? void 0 : t.filter(n => [I.TELEGRAM, I.WEBSITE].includes(n.type)).filter(n => oe(n.url))[0];
        return [{
          type: "link",
          label: b("tabs.memepad.trade"),
          href: E.resolve({
            name: "memepad-jetton-shortname-trade",
            params: {
              shortname: p.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-trade",
          code: "memepad-trade"
        }, {
          type: "link",
          label: b("tabs.memepad.about"),
          href: E.resolve({
            name: "memepad-jetton-shortname-about",
            params: {
              shortname: p.params.shortname
            }
          }).href,
          icon: "special/tab-memepad-about",
          code: "memepad-about"
        }, ...e ? [{
          type: "button",
          label: b("tabs.memepad.chat"),
          icon: "special/tab-chat",
          code: "memepad-chat",
          onClick: () => {
            C().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, t) => {
        const n = Q,
          i = X,
          j = ce,
          g = de;
        return S(), A("div", ge, [s(m).status === "error" ? (S(), P(n, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : s(se))("emoji/Collision"),
          title: ("t" in e ? e.t : s(b))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : s(b))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : s(b))("memepad.jetton.error_screen.btn_label"),
          onButton: t[0] || (t[0] = r => ("visitCommunity" in e ? e.visitCommunity : s(je))())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : s(m).status === "loading" ? (S(), P(i, {
          key: 1
        })) : (S(), A(re, {
          key: 2
        }, [T(j, ue(s(m).data, {
          onShare: t[1] || (t[1] = r => R.value = !0)
        }), null, 16), T(g, {
          modelValue: s(R),
          "onUpdate:modelValue": t[2] || (t[2] = r => le(R) ? R.value = r : null),
          "jetton-shortname": s(m).data.jetton.shortname,
          ticker: s(m).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  Ae = fe(_e, [
    ["__scopeId", "data-v-9d9a8a84"]
  ]);
export {
  Ae as
  default
};