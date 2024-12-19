import {
  m as z,
  s as O,
  _ as U
} from "./B2xQ9zC5.js";
import {
  _ as q
} from "./DQ2hK8K4.js";
import {
  d as N,
  j as p,
  bl as Z,
  G as R,
  o as l,
  c,
  a as s,
  t as a,
  e,
  z as u,
  F as A,
  q as M,
  b as r,
  n as E,
  C as j,
  f as H,
  bk as Q,
  be as C,
  am as X,
  ao as Y,
  J as x,
  m as T,
  aU as ee,
  U as W,
  ae as J,
  u as te,
  _ as se,
  aG as oe
} from "./Bxr-pE_l.js";
import {
  _ as ne
} from "./D2Mdceld.js";
import {
  _ as ae
} from "./d3IJlTBt.js";
import {
  _ as ie
} from "./DGVtMOFk.js";
import "./jTITb4oO.js";
import "./DI7cdK8w.js";
import "./Dc1gyuav.js";
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
  _e = N({
    __name: "AboutReactions",
    props: {
      reactions: {},
      updateCallback: {
        type: Function
      }
    },
    setup(I) {
      const i = I,
        n = p(() => Z(i.reactions)),
        f = R(!1),
        g = async m => {
          var k;
          f.value || (f.value = !0, ((k = i.reactions) == null ? void 0 : k.user) === m ? await i.updateCallback(void 0) : await i.updateCallback(m), f.value = !1)
        };
      return (m, k) => {
        const w = ne;
        return l(), c("div", re, [s("div", le, a(("t" in m ? m.t : e(u))("memepad.about.reactions.title")), 1), s("div", ce, a(("t" in m ? m.t : e(u))("memepad.about.reactions.subtitle")), 1), s("div", de, [e(n) ? (l(!0), c(A, {
          key: 1
        }, M(e(n), d => (l(), c("button", {
          key: d.type,
          class: E([{
            active: d.active
          }, "reset"]),
          type: "button",
          onClick: F => g(d.type)
        }, [s("img", {
          src: d.image
        }, null, 8, me), d.count.isZero() ? j("", !0) : (l(), c("div", ue, a(d.label.full), 1))], 10, pe))), 128)) : (l(), c(A, {
          key: 0
        }, M(3, d => r(w, {
          key: d,
          class: "skeleton"
        })), 64))])])
      }
    }
  }),
  be = H(_e, [
    ["__scopeId", "data-v-4f4bf4ba"]
  ]),
  he = {
    class: "memepad-jetton-about"
  },
  ve = ["src"],
  fe = {
    class: "inner"
  },
  ke = {
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
  Je = {
    class: "disclaimer"
  },
  Ne = N({
    inheritAttrs: !1,
    __name: "index",
    emits: ["share"],
    setup(I) {
      const i = Q(),
        n = p(() => i.jetton),
        f = p(() => i.jettonShortname),
        g = p(() => i.jettonModalControls),
        m = p(() => i.jettonInformation),
        k = p(() => i.jettonTransactions),
        w = p(() => i.jettonHolders),
        d = p(() => i.jettonReactions),
        F = p(() => i.updateJettonReaction),
        {
          showFullDescription: y,
          showDescriptionMore: S,
          descriptionWrapperEl: P
        } = V(),
        B = p(() => [C.TELEGRAM, C.TWITTER, C.INSTAGRAM, C.WEBSITE].map(t => ({
          ...z(t),
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

      function V() {
        const t = R(!1),
          o = R(!1),
          h = R(null);
        return X(() => h.value, v => {
          if (!v) return;
          const _ = parseFloat(getComputedStyle(v).lineHeight),
            $ = v.scrollHeight;
          o.value = $ > _ * 2
        }, {
          immediate: !0
        }), {
          showFullDescription: t,
          showDescriptionMore: o,
          descriptionWrapperEl: h
        }
      }
      return (t, o) => {
        const h = U,
          v = q,
          _ = se,
          $ = be,
          D = oe,
          G = ae,
          L = ie;
        return l(), c("div", he, [s("div", {
          class: E(["first", {
            "has-banner": e(n).bannerFileKey
          }])
        }, [s("img", {
          src: ("imgResolver" in t ? t.imgResolver : e(Y))("memepad/about-grid", "svg"),
          alt: "Background grid room",
          class: "bg-room"
        }, null, 8, ve), s("div", fe, [e(n).bannerFileKey ? (l(), x(h, {
          key: 0,
          "banner-file-key": e(n).bannerFileKey,
          class: "banner",
          rounded: !1
        }, null, 8, ["banner-file-key"])) : j("", !0), s("div", ke, [r(v, {
          "jetton-modal-controls": e(g),
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
          class: E(["description-wrapper", {
            "show-full": e(y)
          }])
        }, [s("div", je, [T(a(e(n).description) + " ", 1), s("span", null, [e(S) && e(y) ? (l(), c("button", {
          key: 0,
          type: "button",
          class: "reset less-btn",
          onClick: o[1] || (o[1] = b => y.value = !1)
        }, a(("t" in t ? t.t : e(u))("memepad.about.description.less")), 1)) : j("", !0)])]), e(S) && !e(y) ? (l(), c("div", ge, [o[3] || (o[3] = s("div", {
          class: "shadow"
        }, null, -1)), s("button", {
          type: "button",
          class: "reset more-btn",
          onClick: o[2] || (o[2] = b => y.value = !0)
        }, a(("t" in t ? t.t : e(u))("memepad.about.description.more")), 1)])) : j("", !0)], 2), s("div", Ce, [(l(!0), c(A, null, M(e(B), b => (l(), c("button", {
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
        }), s("span", Ae, a(("t" in t ? t.t : e(u))("memepad.jetton.nsfw")), 1)])) : j("", !0)]), s("div", Me, [s("div", Ee, [s("div", Ie, a(("t" in t ? t.t : e(u))("memepad.about.contract_address.title")), 1), s("div", Fe, a(("sliceWalletAddress" in t ? t.sliceWalletAddress : e(ee))(e(n).address)), 1)]), s("button", {
          type: "button",
          class: "reset copy-btn",
          onClick: K
        }, [r(_, {
          name: "edit-copy-2",
          class: "icon"
        })])]), r($, {
          reactions: e(d),
          "update-callback": e(F),
          class: "reactions"
        }, null, 8, ["reactions", "update-callback"]), s("div", Se, [r(D, {
          to: ("useRouter" in t ? t.useRouter : e(J))().resolve({
            name: "memepad-jetton-shortname-about-holders",
            params: {
              shortname: e(f)
            }
          }),
          class: "header"
        }, {
          default: W(() => [s("div", De, a(("t" in t ? t.t : e(u))("memepad.jetton.holders")), 1), r(_, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), r(G, {
          jetton: e(n),
          "jetton-holders": e(w),
          "jetton-information": e(m),
          "jetton-modal-controls": e(g),
          preview: ""
        }, null, 8, ["jetton", "jetton-holders", "jetton-information", "jetton-modal-controls"])]), s("div", Te, [r(D, {
          to: ("useRouter" in t ? t.useRouter : e(J))().resolve({
            name: "memepad-jetton-shortname-about-transactions",
            params: {
              shortname: e(f)
            }
          }),
          class: "header"
        }, {
          default: W(() => [s("div", We, a(("t" in t ? t.t : e(u))("memepad.jetton.transactions")), 1), r(_, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), r(L, {
          transactions: e(k),
          preview: ""
        }, null, 8, ["transactions"])]), s("div", Je, [T(a(("t" in t ? t.t : e(u))("memepad.about.disclaimer")) + " ", 1), o[4] || (o[4] = s("i", {
          class: "warning"
        }, null, -1))])])
      }
    }
  }),
  Ue = H(Ne, [
    ["__scopeId", "data-v-132e8858"]
  ]);
export {
  Ue as
  default
};