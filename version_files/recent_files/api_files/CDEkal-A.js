import {
  _ as X
} from "./BdFDky-V.js";
import {
  _ as K
} from "./Cqscaa7U.js";
import {
  h as O,
  d as Q,
  b4 as x,
  W as H,
  K as d,
  a0 as Y,
  Q as z,
  ad as S,
  O as q,
  P as Z,
  j as f,
  U as ee,
  aX as te,
  b5 as ae,
  R as I,
  b6 as ne,
  b7 as P,
  b8 as oe,
  z as b,
  o as J,
  c as w,
  e as s,
  G as A,
  an as se,
  F as re,
  b as T,
  af as ue,
  p as le,
  b9 as ie,
  ba as ce,
  aH as me,
  bb as de,
  bc as h,
  ac as pe,
  X as M,
  Y as k,
  a2 as D,
  av as ve,
  f as fe
} from "./1IBRWEJd.js";
import {
  u as be
} from "./B6a_lriU.js";
import {
  c as he
} from "./DPbxm6ol.js";
import {
  u as ye
} from "./D7RaRiPG.js";
import "./CbbJ0lG1.js";
const je = () => O().$webApp.openTelegramLink("https://t.me/BlumCrypto"),
  _e = {
    class: "memepad-jetton page"
  },
  ge = Q({
    __name: "[shortname]",
    setup(Re) {
      const u = (() => {
          const e = x("shortname");
          if (!e) throw H("Jetton shortname is not provided");
          return e
        })(),
        R = d(!1),
        C = Y(),
        p = z(),
        E = S(),
        L = q(),
        l = B(),
        o = F(),
        y = V();
      Z(() => L.wallet.value.status, e => {
        e !== "connected" && o.controls.value.value && [h.SLIPPAGE, h.TRADE].includes(o.controls.value.value) && o.controls.clear()
      });
      const c = f(() => l.state.value.status === "loading" ? {
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
          }), await ce().getReferralToken(), await l.init(), C.memepad.memepadJettonPageOpen({
            source: e,
            jettonShortname: u,
            jettonId: c.value.status === "loaded" ? c.value.data.jetton.id : void 0
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
            if (r) return k(r);
            const g = await M.getMemepadJetton(u);
            return g.err ? ve() : (e.value.set(u, g.data), k(g.data))
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
          j = I(async () => {
            const a = await M.getMemepadJettonInformation(u);
            return k({
              information: (D(a) ? a.data : e.value) || e.value
            })
          }, a => {
            e.value = a.information
          }, 5e3),
          _ = I(async () => {
            const a = await M.getMemepadJettonReactions(u);
            return k({
              reactions: (D(a) ? a.data : t.value) || t.value
            })
          }, a => {
            var m;
            t.value = a.reactions, i.value || (n.value = (m = a.reactions) == null ? void 0 : m.user)
          }, 5e3),
          r = () => {
            j.exec(), _.exec()
          },
          g = () => {
            j.destroy(), _.destroy(), e.value = void 0, t.value = void 0, n.value = void 0
          },
          G = pe(async a => {
            await M.setMemepadJettonReaction(u, a), i.value = !1
          }, 600).debouncedFunction,
          W = async a => {
            i.value = !0, n.value = a, await G(a)
          }, N = f(() => {
            if (!t.value) return;
            const a = t.value.user,
              m = n.value,
              v = {
                ...t.value
              };
            return a !== m && (v.user = n.value, m && (v[m] = v[m].plus(1)), a && (v[a] = v[a].minus(1))), v
          });
        return {
          init: r,
          destroy: g,
          jettonInformation: f(() => e.value),
          jettonReactions: N,
          updateJettonReaction: W
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
      return ye(() => p.name === "memepad-jetton-shortname-about-transactions" || p.name === "memepad-jetton-shortname-about-holders" ? S().push({
        name: "memepad-jetton-shortname-about"
      }) : p.name === "memepad-jetton-shortname-about" ? S().push({
        name: "memepad-jetton-shortname-trade"
      }) : o.controls.value.value === h.SLIPPAGE ? o.controls.set(h.TRADE) : o.controls.value.value === h.TRADE || o.controls.value.value === h.IMAGE_PREVIEW ? o.controls.clear() : S().push({
        name: "memepad"
      })), be(f(() => l.state.value.status !== "loaded" || !!o.controls.value.value), "memepad-jetton-modal-state"), ne().useTabsOnPage(f(() => {
        var t;
        if (l.state.value.status !== "loaded") return [];
        const e = (t = l.state.value.data.socials) == null ? void 0 : t.filter(n => [P.TELEGRAM, P.WEBSITE].includes(n.type)).filter(n => oe(n.url))[0];
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
            O().$webApp.openTelegramLink(e.url)
          }
        }] : []]
      })), (e, t) => {
        const n = X,
          i = K,
          j = me,
          _ = de;
        return J(), w("div", _e, [s(c).status === "error" ? (J(), A(n, {
          key: 0,
          icon: ("imgResolver" in e ? e.imgResolver : s(se))("emoji/Collision"),
          title: ("t" in e ? e.t : s(b))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in e ? e.t : s(b))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in e ? e.t : s(b))("memepad.jetton.error_screen.btn_label"),
          onButton: t[0] || (t[0] = r => ("visitCommunity" in e ? e.visitCommunity : s(je))())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : s(c).status === "loading" ? (J(), A(i, {
          key: 1
        })) : (J(), w(re, {
          key: 2
        }, [T(j, ue(s(c).data, {
          onShare: t[1] || (t[1] = r => R.value = !0)
        }), null, 16), T(_, {
          modelValue: s(R),
          "onUpdate:modelValue": t[2] || (t[2] = r => le(R) ? R.value = r : null),
          "jetton-shortname": s(c).data.jetton.shortname,
          ticker: s(c).data.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64))])
      }
    }
  }),
  we = fe(ge, [
    ["__scopeId", "data-v-18573d7b"]
  ]);
export {
  we as
  default
};