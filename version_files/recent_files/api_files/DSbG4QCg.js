import {
  m as B,
  s as V,
  _ as L
} from "./BMOF40G7.js";
import {
  _ as K
} from "./CknyPLan.js";
import {
  d as q,
  bq as z,
  a7 as G,
  j as d,
  bm as v,
  y as k,
  T as O,
  o as _,
  c as h,
  a as s,
  e as t,
  V as Q,
  M as U,
  E as f,
  b as a,
  t as n,
  n as w,
  m as E,
  C as l,
  F as X,
  q as Y,
  b0 as Z,
  D as M,
  aa as S,
  _ as x,
  H as ee,
  f as te
} from "./BhDmcp0J.js";
import {
  _ as se
} from "./DtUuChXS.js";
import {
  _ as oe
} from "./D9L0pH-g.js";
import {
  _ as ne
} from "./ORiVfypb.js";
import "./DKXENsc2.js";
import "./FlASshpV.js";
import "./CWVdJjrF.js";
import "./DUx2c9nr.js";
import "./D7gYk2DF.js";
const ae = {
    class: "memepad-jetton-about"
  },
  ie = ["src"],
  re = {
    class: "inner"
  },
  le = {
    class: "image"
  },
  ce = {
    class: "ticker"
  },
  de = {
    class: "description"
  },
  me = {
    key: 0,
    class: "more"
  },
  pe = {
    class: "socials"
  },
  ue = ["disabled", "onClick"],
  _e = {
    class: "label"
  },
  he = {
    key: 0,
    class: "nsfw"
  },
  be = {
    class: "label"
  },
  ve = {
    class: "contract"
  },
  fe = {
    class: "inner"
  },
  ye = {
    class: "title"
  },
  ke = {
    class: "address"
  },
  je = {
    class: "reactions"
  },
  ge = {
    class: "title"
  },
  Ce = {
    class: "subtitle"
  },
  Re = {
    class: "holders"
  },
  we = {
    class: "label"
  },
  Ee = {
    class: "transactions"
  },
  Me = {
    class: "label"
  },
  Se = {
    class: "disclaimer"
  },
  Ae = q({
    inheritAttrs: !1,
    __name: "index",
    emits: ["share", "copy"],
    setup(De) {
      const m = z(),
        A = G(),
        i = d(() => m.jetton),
        j = d(() => m.jettonShortname),
        g = d(() => m.jettonInformation),
        D = d(() => m.jettonTransactions),
        I = d(() => m.jettonHolders),
        T = d(() => m.jettonReactions),
        F = d(() => m.updateJettonReaction),
        {
          showFullDescription: b,
          showDescriptionMore: C,
          descriptionWrapperEl: W
        } = N(),
        H = d(() => [v.TELEGRAM, v.TWITTER, v.INSTAGRAM, v.WEBSITE].map(e => ({
          ...B(e),
          type: e
        })).map(e => {
          var p;
          const o = (p = i.value.socials) == null ? void 0 : p.find(u => u.type === e.type);
          return {
            icon: e.icon,
            type: e.type,
            display: e.display,
            onClick: o ? () => V(e.type, o.url) : void 0
          }
        }).sort((e, o) => +!!o.onClick - +!!e.onClick)),
        J = e => {
          var o;
          A.memepad.memepadJettonSocialClick({
            source: e.type
          }), (o = e.onClick) == null || o.call(e)
        };

      function N() {
        const e = k(!1),
          o = k(!1),
          p = k(null);
        return O(() => p.value, u => {
          if (!u) return;
          const c = parseFloat(getComputedStyle(u).lineHeight),
            y = u.scrollHeight;
          o.value = y > c * 2
        }, {
          immediate: !0
        }), {
          showFullDescription: e,
          showDescriptionMore: o,
          descriptionWrapperEl: p
        }
      }
      return (e, o) => {
        const p = L,
          u = K,
          c = x,
          y = se,
          R = ee,
          $ = oe,
          P = ne;
        return _(), h("div", ae, [s("div", {
          class: w(["first", {
            "has-banner": t(i).bannerFileKey
          }])
        }, [s("img", {
          src: ("imgResolver" in e ? e.imgResolver : t(Q))("memepad/about-grid", "svg"),
          alt: "Background grid room",
          class: "bg-room"
        }, null, 8, ie), s("div", re, [t(i).bannerFileKey ? (_(), U(p, {
          key: 0,
          "banner-file-key": t(i).bannerFileKey,
          class: "banner",
          rounded: !1
        }, null, 8, ["banner-file-key"])) : f("", !0), s("div", le, [a(u, {
          jetton: t(i),
          size: 96
        }, null, 8, ["jetton"])]), s("div", ce, n(t(i).ticker), 1)]), s("button", {
          type: "button",
          class: "reset share",
          onClick: o[0] || (o[0] = r => e.$emit("share"))
        }, [a(c, {
          name: "share",
          class: "icon"
        })])], 2), s("div", {
          ref_key: "descriptionWrapperEl",
          ref: W,
          class: w(["description-wrapper", {
            "show-full": t(b)
          }])
        }, [s("div", de, [E(n(t(i).description) + " ", 1), s("span", null, [t(C) && t(b) ? (_(), h("button", {
          key: 0,
          type: "button",
          class: "reset less-btn",
          onClick: o[1] || (o[1] = r => b.value = !1)
        }, n(("t" in e ? e.t : t(l))("memepad.about.description.less")), 1)) : f("", !0)])]), t(C) && !t(b) ? (_(), h("div", me, [o[4] || (o[4] = s("div", {
          class: "shadow"
        }, null, -1)), s("button", {
          type: "button",
          class: "reset more-btn",
          onClick: o[2] || (o[2] = r => b.value = !0)
        }, n(("t" in e ? e.t : t(l))("memepad.about.description.more")), 1)])) : f("", !0)], 2), s("div", pe, [(_(!0), h(X, null, Y(t(H), r => (_(), h("button", {
          key: r.type,
          type: "button",
          class: "item reset",
          disabled: !r.onClick,
          onClick: Ie => J(r)
        }, [a(c, {
          name: r.icon,
          class: "icon"
        }, null, 8, ["name"]), s("div", _e, n(r.display), 1)], 8, ue))), 128)), t(i).isNSFW ? (_(), h("div", he, [a(c, {
          name: "stop-sign",
          class: "icon"
        }), s("span", be, n(("t" in e ? e.t : t(l))("memepad.jetton.nsfw")), 1)])) : f("", !0)]), s("div", ve, [s("div", fe, [s("div", ye, n(("t" in e ? e.t : t(l))("memepad.about.contract_address.title")), 1), s("div", ke, n(("sliceWalletAddress" in e ? e.sliceWalletAddress : t(Z))(t(i).address)), 1)]), s("button", {
          type: "button",
          class: "reset copy-btn",
          onClick: o[3] || (o[3] = r => e.$emit("copy"))
        }, [a(c, {
          name: "edit-copy-2",
          class: "icon"
        })])]), s("div", je, [s("div", ge, n(("t" in e ? e.t : t(l))("memepad.about.reactions.title")), 1), s("div", Ce, n(("t" in e ? e.t : t(l))("memepad.about.reactions.subtitle")), 1), a(y, {
          reactions: t(T),
          "update-callback": t(F),
          type: "about",
          class: "list"
        }, null, 8, ["reactions", "update-callback"])]), s("div", Re, [a(R, {
          to: ("useRouter" in e ? e.useRouter : t(S))().resolve({
            name: "memepad-jetton-shortname-about-holders",
            params: {
              shortname: t(j)
            }
          }),
          class: "header"
        }, {
          default: M(() => [s("div", we, n(("t" in e ? e.t : t(l))("memepad.jetton.holders")), 1), a(c, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), a($, {
          jetton: t(i),
          "jetton-holders": t(I),
          "jetton-information": t(g),
          preview: ""
        }, null, 8, ["jetton", "jetton-holders", "jetton-information"])]), s("div", Ee, [a(R, {
          to: ("useRouter" in e ? e.useRouter : t(S))().resolve({
            name: "memepad-jetton-shortname-about-transactions",
            params: {
              shortname: t(j)
            }
          }),
          class: "header"
        }, {
          default: M(() => [s("div", Me, n(("t" in e ? e.t : t(l))("memepad.jetton.transactions")), 1), a(c, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), a(P, {
          transactions: t(D),
          "jetton-information": t(g),
          preview: ""
        }, null, 8, ["transactions", "jetton-information"])]), s("div", Se, [E(n(("t" in e ? e.t : t(l))("memepad.about.disclaimer")) + " ", 1), o[5] || (o[5] = s("i", {
          class: "warning"
        }, null, -1))])])
      }
    }
  }),
  Ke = te(Ae, [
    ["__scopeId", "data-v-d2017fd6"]
  ]);
export {
  Ke as
  default
};