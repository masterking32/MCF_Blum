import {
  m as G,
  s as O,
  _ as q
} from "./MI4w0G8M.js";
import {
  _ as Q
} from "./1mUkb5B-.js";
import {
  d as J,
  j as m,
  bf as Z,
  o as l,
  c,
  a as s,
  t as a,
  e,
  z as u,
  F as $,
  q as A,
  b as r,
  n as I,
  C as y,
  f as N,
  be as U,
  b8 as g,
  L as w,
  Q as X,
  ao as Y,
  G as x,
  m as D,
  aO as ee,
  I as T,
  ae as W,
  u as te,
  _ as se,
  J as oe
} from "./BrLCGJDp.js";
import {
  _ as ne
} from "./BiY0FrNC.js";
import {
  _ as ae
} from "./CX1a6dbA.js";
import {
  _ as ie
} from "./C-sgWwUQ.js";
import "./BIjeZW-I.js";
import "./BHMDW0oD.js";
import "./B8N2krnO.js";
const re = {
    class: "memepad-jetton-about-reactions"
  },
  le = {
    class: "title"
  },
  ce = {
    class: "subtitle"
  },
  de = {
    class: "items"
  },
  pe = ["onClick"],
  me = ["src"],
  ue = {
    key: 0,
    class: "label"
  },
  _e = J({
    __name: "AboutReactions",
    props: {
      reactions: {},
      updateCallback: {
        type: Function
      }
    },
    setup(M) {
      const i = M,
        n = m(() => Z(i.reactions)),
        j = d => {
          var k;
          ((k = i.reactions) == null ? void 0 : k.user) === d ? i.updateCallback(void 0) : i.updateCallback(d)
        };
      return (d, k) => {
        const C = ne;
        return l(), c("div", re, [s("div", le, a(("t" in d ? d.t : e(u))("memepad.about.reactions.title")), 1), s("div", ce, a(("t" in d ? d.t : e(u))("memepad.about.reactions.subtitle")), 1), s("div", de, [e(n) ? (l(!0), c($, {
          key: 1
        }, A(e(n), p => (l(), c("button", {
          key: p.type,
          class: I([{
            active: p.active
          }, "reset"]),
          type: "button",
          onClick: E => j(p.type)
        }, [s("img", {
          src: p.image
        }, null, 8, me), p.count.isZero() ? y("", !0) : (l(), c("div", ue, a(p.label.full), 1))], 10, pe))), 128)) : (l(), c($, {
          key: 0
        }, A(3, p => r(C, {
          key: p,
          class: "skeleton"
        })), 64))])])
      }
    }
  }),
  be = N(_e, [
    ["__scopeId", "data-v-cd00bd98"]
  ]),
  he = {
    class: "memepad-jetton-about"
  },
  ve = ["src"],
  ke = {
    class: "inner"
  },
  fe = {
    class: "image"
  },
  ye = {
    class: "ticker"
  },
  je = {
    class: "description"
  },
  ge = {
    key: 0,
    class: "more"
  },
  Ce = {
    class: "socials"
  },
  Re = ["disabled", "onClick"],
  we = {
    class: "label"
  },
  $e = {
    key: 0,
    class: "nsfw"
  },
  Ae = {
    class: "label"
  },
  Ie = {
    class: "contract"
  },
  Me = {
    class: "inner"
  },
  Ee = {
    class: "title"
  },
  Fe = {
    class: "address"
  },
  Se = {
    class: "holders"
  },
  De = {
    class: "label"
  },
  Te = {
    class: "transactions"
  },
  We = {
    class: "label"
  },
  Je = {
    class: "disclaimer"
  },
  Ne = J({
    inheritAttrs: !1,
    __name: "index",
    emits: ["share"],
    setup(M) {
      const i = U(),
        n = m(() => i.jetton),
        j = m(() => i.jettonShortname),
        d = m(() => i.jettonModalControls),
        k = m(() => i.jettonInformation),
        C = m(() => i.jettonTransactions),
        p = m(() => i.jettonHolders),
        E = m(() => i.jettonReactions),
        H = m(() => i.updateJettonReaction),
        {
          showFullDescription: f,
          showDescriptionMore: F,
          descriptionWrapperEl: P
        } = L(),
        B = m(() => [g.TELEGRAM, g.TWITTER, g.INSTAGRAM, g.WEBSITE].map(t => ({
          ...G(t),
          type: t
        })).map(t => {
          var h;
          const o = (h = n.value.socials) == null ? void 0 : h.find(v => v.type === t.type);
          return {
            icon: t.icon,
            type: t.type,
            display: t.display,
            onClick: o ? () => O(t.type, o.url) : void 0
          }
        }).sort((t, o) => +!!o.onClick - +!!t.onClick)),
        K = () => te().copy(n.value.address);

      function L() {
        const t = w(!1),
          o = w(!1),
          h = w(null);
        return X(() => h.value, v => {
          if (!v) return;
          const _ = parseFloat(getComputedStyle(v).lineHeight),
            R = v.scrollHeight;
          o.value = R > _ * 2
        }, {
          immediate: !0
        }), {
          showFullDescription: t,
          showDescriptionMore: o,
          descriptionWrapperEl: h
        }
      }
      return (t, o) => {
        const h = q,
          v = Q,
          _ = se,
          R = be,
          S = oe,
          V = ae,
          z = ie;
        return l(), c("div", he, [s("div", {
          class: I(["first", {
            "has-banner": e(n).bannerFileKey
          }])
        }, [s("img", {
          src: ("imgResolver" in t ? t.imgResolver : e(Y))("memepad/about-grid", "svg"),
          alt: "Background grid room",
          class: "bg-room"
        }, null, 8, ve), s("div", ke, [e(n).bannerFileKey ? (l(), x(h, {
          key: 0,
          "banner-file-key": e(n).bannerFileKey,
          class: "banner",
          rounded: !1
        }, null, 8, ["banner-file-key"])) : y("", !0), s("div", fe, [r(v, {
          "jetton-modal-controls": e(d),
          jetton: e(n),
          size: 96
        }, null, 8, ["jetton-modal-controls", "jetton"])]), s("div", ye, a(e(n).ticker), 1)]), s("button", {
          type: "button",
          class: "reset share",
          onClick: o[0] || (o[0] = b => t.$emit("share"))
        }, [r(_, {
          name: "share",
          class: "icon"
        })])], 2), s("div", {
          ref_key: "descriptionWrapperEl",
          ref: P,
          class: I(["description-wrapper", {
            "show-full": e(f)
          }])
        }, [s("div", je, [D(a(e(n).description) + " ", 1), s("span", null, [e(F) && e(f) ? (l(), c("button", {
          key: 0,
          type: "button",
          class: "reset less-btn",
          onClick: o[1] || (o[1] = b => f.value = !1)
        }, a(("t" in t ? t.t : e(u))("memepad.about.description.less")), 1)) : y("", !0)])]), e(F) && !e(f) ? (l(), c("div", ge, [o[3] || (o[3] = s("div", {
          class: "shadow"
        }, null, -1)), s("button", {
          type: "button",
          class: "reset more-btn",
          onClick: o[2] || (o[2] = b => f.value = !0)
        }, a(("t" in t ? t.t : e(u))("memepad.about.description.more")), 1)])) : y("", !0)], 2), s("div", Ce, [(l(!0), c($, null, A(e(B), b => (l(), c("button", {
          key: b.type,
          type: "button",
          class: "item reset",
          disabled: !b.onClick,
          onClick: b.onClick
        }, [r(_, {
          name: b.icon,
          class: "icon"
        }, null, 8, ["name"]), s("div", we, a(b.display), 1)], 8, Re))), 128)), e(n).isNSFW ? (l(), c("div", $e, [r(_, {
          name: "stop-sign",
          class: "icon"
        }), s("span", Ae, a(("t" in t ? t.t : e(u))("memepad.jetton.nsfw")), 1)])) : y("", !0)]), s("div", Ie, [s("div", Me, [s("div", Ee, a(("t" in t ? t.t : e(u))("memepad.about.contract_address.title")), 1), s("div", Fe, a(("sliceWalletAddress" in t ? t.sliceWalletAddress : e(ee))(e(n).address)), 1)]), s("button", {
          type: "button",
          class: "reset copy-btn",
          onClick: K
        }, [r(_, {
          name: "edit-copy-2",
          class: "icon"
        })])]), r(R, {
          reactions: e(E),
          "update-callback": e(H),
          class: "reactions"
        }, null, 8, ["reactions", "update-callback"]), s("div", Se, [r(S, {
          to: ("useRouter" in t ? t.useRouter : e(W))().resolve({
            name: "memepad-jetton-shortname-about-holders",
            params: {
              shortname: e(j)
            }
          }),
          class: "header"
        }, {
          default: T(() => [s("div", De, a(("t" in t ? t.t : e(u))("memepad.jetton.holders")), 1), r(_, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), r(V, {
          jetton: e(n),
          "jetton-holders": e(p),
          "jetton-information": e(k),
          "jetton-modal-controls": e(d),
          preview: ""
        }, null, 8, ["jetton", "jetton-holders", "jetton-information", "jetton-modal-controls"])]), s("div", Te, [r(S, {
          to: ("useRouter" in t ? t.useRouter : e(W))().resolve({
            name: "memepad-jetton-shortname-about-transactions",
            params: {
              shortname: e(j)
            }
          }),
          class: "header"
        }, {
          default: T(() => [s("div", We, a(("t" in t ? t.t : e(u))("memepad.jetton.transactions")), 1), r(_, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), r(z, {
          transactions: e(C),
          preview: ""
        }, null, 8, ["transactions"])]), s("div", Je, [D(a(("t" in t ? t.t : e(u))("memepad.about.disclaimer")) + " ", 1), o[4] || (o[4] = s("i", {
          class: "warning"
        }, null, -1))])])
      }
    }
  }),
  qe = N(Ne, [
    ["__scopeId", "data-v-132e8858"]
  ]);
export {
  qe as
  default
};