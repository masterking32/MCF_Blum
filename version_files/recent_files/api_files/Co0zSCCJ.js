import {
  m as G,
  s as O,
  _ as q
} from "./hbMZGSZp.js";
import {
  _ as U
} from "./BbRKoCmi.js";
import {
  d as H,
  j as p,
  bm as Z,
  o as l,
  c,
  a as s,
  t as a,
  e,
  z as u,
  F as $,
  q as A,
  b as r,
  n as M,
  C as y,
  f as J,
  bl as Q,
  bf as g,
  G as w,
  am as X,
  ao as Y,
  J as x,
  m as D,
  aV as ee,
  U as T,
  ae as W,
  u as te,
  _ as se,
  aH as oe
} from "./Doz8XXSF.js";
import {
  _ as ne
} from "./hzm3Cl5N.js";
import {
  _ as ae
} from "./Kt3qV8_n.js";
import {
  _ as ie
} from "./NJJnxnFM.js";
import "./DRaRYAXD.js";
import "./C9CdfMm_.js";
import "./BhPS1J5z.js";
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
  me = ["onClick"],
  pe = ["src"],
  ue = {
    key: 0,
    class: "label"
  },
  _e = H({
    __name: "AboutReactions",
    props: {
      reactions: {},
      updateCallback: {
        type: Function
      }
    },
    setup(E) {
      const i = E,
        n = p(() => Z(i.reactions)),
        j = d => {
          var k;
          ((k = i.reactions) == null ? void 0 : k.user) === d ? i.updateCallback(void 0) : i.updateCallback(d)
        };
      return (d, k) => {
        const C = ne;
        return l(), c("div", re, [s("div", le, a(("t" in d ? d.t : e(u))("memepad.about.reactions.title")), 1), s("div", ce, a(("t" in d ? d.t : e(u))("memepad.about.reactions.subtitle")), 1), s("div", de, [e(n) ? (l(!0), c($, {
          key: 1
        }, A(e(n), m => (l(), c("button", {
          key: m.type,
          class: M([{
            active: m.active
          }, "reset"]),
          type: "button",
          onClick: I => j(m.type)
        }, [s("img", {
          src: m.image
        }, null, 8, pe), m.count.isZero() ? y("", !0) : (l(), c("div", ue, a(m.label.full), 1))], 10, me))), 128)) : (l(), c($, {
          key: 0
        }, A(3, m => r(C, {
          key: m,
          class: "skeleton"
        })), 64))])])
      }
    }
  }),
  be = J(_e, [
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
  Me = {
    class: "contract"
  },
  Ee = {
    class: "inner"
  },
  Ie = {
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
  He = {
    class: "disclaimer"
  },
  Je = H({
    inheritAttrs: !1,
    __name: "index",
    emits: ["share"],
    setup(E) {
      const i = Q(),
        n = p(() => i.jetton),
        j = p(() => i.jettonShortname),
        d = p(() => i.jettonModalControls),
        k = p(() => i.jettonInformation),
        C = p(() => i.jettonTransactions),
        m = p(() => i.jettonHolders),
        I = p(() => i.jettonReactions),
        N = p(() => i.updateJettonReaction),
        {
          showFullDescription: f,
          showDescriptionMore: F,
          descriptionWrapperEl: P
        } = K(),
        B = p(() => [g.TELEGRAM, g.TWITTER, g.INSTAGRAM, g.WEBSITE].map(t => ({
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
        V = () => te().copy(n.value.address);

      function K() {
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
          v = U,
          _ = se,
          R = be,
          S = oe,
          L = ae,
          z = ie;
        return l(), c("div", he, [s("div", {
          class: M(["first", {
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
          class: M(["description-wrapper", {
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
        }), s("span", Ae, a(("t" in t ? t.t : e(u))("memepad.jetton.nsfw")), 1)])) : y("", !0)]), s("div", Me, [s("div", Ee, [s("div", Ie, a(("t" in t ? t.t : e(u))("memepad.about.contract_address.title")), 1), s("div", Fe, a(("sliceWalletAddress" in t ? t.sliceWalletAddress : e(ee))(e(n).address)), 1)]), s("button", {
          type: "button",
          class: "reset copy-btn",
          onClick: V
        }, [r(_, {
          name: "edit-copy-2",
          class: "icon"
        })])]), r(R, {
          reactions: e(I),
          "update-callback": e(N),
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
        }, 8, ["to"]), r(L, {
          jetton: e(n),
          "jetton-holders": e(m),
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
        }, null, 8, ["transactions"])]), s("div", He, [D(a(("t" in t ? t.t : e(u))("memepad.about.disclaimer")) + " ", 1), o[4] || (o[4] = s("i", {
          class: "warning"
        }, null, -1))])])
      }
    }
  }),
  qe = J(Je, [
    ["__scopeId", "data-v-132e8858"]
  ]);
export {
  qe as
  default
};