import {
  m as $,
  s as K,
  _ as L
} from "./B1wM9cOM.js";
import {
  _ as V
} from "./BaCsvouh.js";
import {
  d as z,
  bd as G,
  j as r,
  b7 as v,
  K as y,
  P as O,
  o as _,
  c as h,
  a as s,
  e,
  an as q,
  G as Q,
  D as f,
  b as a,
  t as n,
  n as M,
  m as E,
  z as l,
  F as U,
  q as X,
  aM as Y,
  H as A,
  ad as I,
  u as Z,
  _ as x,
  I as tt,
  f as et
} from "./BKd9vpCm.js";
import {
  _ as st
} from "./Pdbhiway.js";
import {
  _ as ot
} from "./DmF5xSG1.js";
import {
  _ as nt
} from "./6YGsQuXI.js";
import "./CMi4VBYK.js";
import "./BELi7QKt.js";
import "./aeA2-tLS.js";
import "./PwI-DFlT.js";
import "./C6sBG1VD.js";
const at = {
    class: "memepad-jetton-about"
  },
  it = ["src"],
  rt = {
    class: "inner"
  },
  lt = {
    class: "image"
  },
  ct = {
    class: "ticker"
  },
  dt = {
    class: "description"
  },
  mt = {
    key: 0,
    class: "more"
  },
  pt = {
    class: "socials"
  },
  ut = ["disabled", "onClick"],
  _t = {
    class: "label"
  },
  ht = {
    key: 0,
    class: "nsfw"
  },
  bt = {
    class: "label"
  },
  vt = {
    class: "contract"
  },
  ft = {
    class: "inner"
  },
  jt = {
    class: "title"
  },
  yt = {
    class: "address"
  },
  kt = {
    class: "reactions"
  },
  gt = {
    class: "title"
  },
  Ct = {
    class: "subtitle"
  },
  Rt = {
    class: "holders"
  },
  wt = {
    class: "label"
  },
  Mt = {
    class: "transactions"
  },
  Et = {
    class: "label"
  },
  At = {
    class: "disclaimer"
  },
  It = z({
    inheritAttrs: !1,
    __name: "index",
    emits: ["share"],
    setup(Dt) {
      const c = G(),
        i = r(() => c.jetton),
        k = r(() => c.jettonShortname),
        g = r(() => c.jettonModalControls),
        C = r(() => c.jettonInformation),
        D = r(() => c.jettonTransactions),
        S = r(() => c.jettonHolders),
        F = r(() => c.jettonReactions),
        T = r(() => c.updateJettonReaction),
        {
          showFullDescription: b,
          showDescriptionMore: R,
          descriptionWrapperEl: W
        } = P(),
        H = r(() => [v.TELEGRAM, v.TWITTER, v.INSTAGRAM, v.WEBSITE].map(t => ({
          ...$(t),
          type: t
        })).map(t => {
          var p;
          const o = (p = i.value.socials) == null ? void 0 : p.find(u => u.type === t.type);
          return {
            icon: t.icon,
            type: t.type,
            display: t.display,
            onClick: o ? () => K(t.type, o.url) : void 0
          }
        }).sort((t, o) => +!!o.onClick - +!!t.onClick)),
        N = () => Z().copy(i.value.address);

      function P() {
        const t = y(!1),
          o = y(!1),
          p = y(null);
        return O(() => p.value, u => {
          if (!u) return;
          const d = parseFloat(getComputedStyle(u).lineHeight),
            j = u.scrollHeight;
          o.value = j > d * 2
        }, {
          immediate: !0
        }), {
          showFullDescription: t,
          showDescriptionMore: o,
          descriptionWrapperEl: p
        }
      }
      return (t, o) => {
        const p = L,
          u = V,
          d = x,
          j = st,
          w = tt,
          J = ot,
          B = nt;
        return _(), h("div", at, [s("div", {
          class: M(["first", {
            "has-banner": e(i).bannerFileKey
          }])
        }, [s("img", {
          src: ("imgResolver" in t ? t.imgResolver : e(q))("memepad/about-grid", "svg"),
          alt: "Background grid room",
          class: "bg-room"
        }, null, 8, it), s("div", rt, [e(i).bannerFileKey ? (_(), Q(p, {
          key: 0,
          "banner-file-key": e(i).bannerFileKey,
          class: "banner",
          rounded: !1
        }, null, 8, ["banner-file-key"])) : f("", !0), s("div", lt, [a(u, {
          "jetton-modal-controls": e(g),
          jetton: e(i),
          size: 96
        }, null, 8, ["jetton-modal-controls", "jetton"])]), s("div", ct, n(e(i).ticker), 1)]), s("button", {
          type: "button",
          class: "reset share",
          onClick: o[0] || (o[0] = m => t.$emit("share"))
        }, [a(d, {
          name: "share",
          class: "icon"
        })])], 2), s("div", {
          ref_key: "descriptionWrapperEl",
          ref: W,
          class: M(["description-wrapper", {
            "show-full": e(b)
          }])
        }, [s("div", dt, [E(n(e(i).description) + " ", 1), s("span", null, [e(R) && e(b) ? (_(), h("button", {
          key: 0,
          type: "button",
          class: "reset less-btn",
          onClick: o[1] || (o[1] = m => b.value = !1)
        }, n(("t" in t ? t.t : e(l))("memepad.about.description.less")), 1)) : f("", !0)])]), e(R) && !e(b) ? (_(), h("div", mt, [o[3] || (o[3] = s("div", {
          class: "shadow"
        }, null, -1)), s("button", {
          type: "button",
          class: "reset more-btn",
          onClick: o[2] || (o[2] = m => b.value = !0)
        }, n(("t" in t ? t.t : e(l))("memepad.about.description.more")), 1)])) : f("", !0)], 2), s("div", pt, [(_(!0), h(U, null, X(e(H), m => (_(), h("button", {
          key: m.type,
          type: "button",
          class: "item reset",
          disabled: !m.onClick,
          onClick: m.onClick
        }, [a(d, {
          name: m.icon,
          class: "icon"
        }, null, 8, ["name"]), s("div", _t, n(m.display), 1)], 8, ut))), 128)), e(i).isNSFW ? (_(), h("div", ht, [a(d, {
          name: "stop-sign",
          class: "icon"
        }), s("span", bt, n(("t" in t ? t.t : e(l))("memepad.jetton.nsfw")), 1)])) : f("", !0)]), s("div", vt, [s("div", ft, [s("div", jt, n(("t" in t ? t.t : e(l))("memepad.about.contract_address.title")), 1), s("div", yt, n(("sliceWalletAddress" in t ? t.sliceWalletAddress : e(Y))(e(i).address)), 1)]), s("button", {
          type: "button",
          class: "reset copy-btn",
          onClick: N
        }, [a(d, {
          name: "edit-copy-2",
          class: "icon"
        })])]), s("div", kt, [s("div", gt, n(("t" in t ? t.t : e(l))("memepad.about.reactions.title")), 1), s("div", Ct, n(("t" in t ? t.t : e(l))("memepad.about.reactions.subtitle")), 1), a(j, {
          reactions: e(F),
          "update-callback": e(T),
          type: "about",
          class: "list"
        }, null, 8, ["reactions", "update-callback"])]), s("div", Rt, [a(w, {
          to: ("useRouter" in t ? t.useRouter : e(I))().resolve({
            name: "memepad-jetton-shortname-about-holders",
            params: {
              shortname: e(k)
            }
          }),
          class: "header"
        }, {
          default: A(() => [s("div", wt, n(("t" in t ? t.t : e(l))("memepad.jetton.holders")), 1), a(d, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), a(J, {
          jetton: e(i),
          "jetton-holders": e(S),
          "jetton-information": e(C),
          "jetton-modal-controls": e(g),
          preview: ""
        }, null, 8, ["jetton", "jetton-holders", "jetton-information", "jetton-modal-controls"])]), s("div", Mt, [a(w, {
          to: ("useRouter" in t ? t.useRouter : e(I))().resolve({
            name: "memepad-jetton-shortname-about-transactions",
            params: {
              shortname: e(k)
            }
          }),
          class: "header"
        }, {
          default: A(() => [s("div", Et, n(("t" in t ? t.t : e(l))("memepad.jetton.transactions")), 1), a(d, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), a(B, {
          transactions: e(D),
          "jetton-information": e(C),
          preview: ""
        }, null, 8, ["transactions", "jetton-information"])]), s("div", At, [E(n(("t" in t ? t.t : e(l))("memepad.about.disclaimer")) + " ", 1), o[4] || (o[4] = s("i", {
          class: "warning"
        }, null, -1))])])
      }
    }
  }),
  Lt = et(It, [
    ["__scopeId", "data-v-b1916f48"]
  ]);
export {
  Lt as
  default
};