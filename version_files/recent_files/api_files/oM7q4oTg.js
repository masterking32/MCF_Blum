import {
  m as B,
  s as J,
  _ as P
} from "./BDZzlBcY.js";
import {
  _ as H
} from "./DxQXZVfI.js";
import {
  d as $,
  bp as V,
  F as d,
  bi as b,
  r as j,
  av as K,
  a as m,
  c as _,
  b as s,
  e as t,
  ax as L,
  m as z,
  g as f,
  k as a,
  t as i,
  n as w,
  h as G,
  f as h,
  W as O,
  X,
  aX as q,
  x as M,
  J as E,
  M as Q,
  N as U,
  aJ as Y,
  j as Z
} from "./Dq6b0IKe.js";
import {
  _ as x
} from "./CQVsZIcG.js";
import {
  _ as ee
} from "./DWHnwUSm.js";
import "./D9DHcFey.js";
import "./Ba-Qjaes.js";
import "./L5NW8KQx.js";
const te = {
    class: "memepad-jetton-about"
  },
  se = ["src"],
  oe = {
    class: "inner"
  },
  ne = {
    class: "image"
  },
  ae = {
    class: "ticker"
  },
  ie = {
    class: "description"
  },
  re = {
    key: 0,
    class: "more"
  },
  le = {
    class: "socials"
  },
  ce = ["disabled", "onClick"],
  de = {
    class: "label"
  },
  me = {
    key: 0,
    class: "nsfw"
  },
  pe = {
    class: "label"
  },
  ue = {
    class: "contract"
  },
  _e = {
    class: "inner"
  },
  he = {
    class: "title"
  },
  ve = {
    class: "address"
  },
  be = {
    class: "holders"
  },
  fe = {
    class: "label"
  },
  je = {
    class: "transactions"
  },
  ye = {
    class: "label"
  },
  ke = $({
    inheritAttrs: !1,
    __name: "index",
    emits: ["share"],
    setup(ge) {
      const p = V(),
        n = d(() => p.jetton),
        y = d(() => p.jettonShortname),
        k = d(() => p.jettonModalControls),
        R = d(() => p.jettonInformation),
        A = d(() => p.jettonTransactions),
        I = d(() => p.jettonHolders),
        {
          showFullDescription: v,
          showDescriptionMore: g,
          descriptionWrapperEl: W
        } = T(),
        D = d(() => [b.TELEGRAM, b.TWITTER, b.INSTAGRAM, b.WEBSITE].map(e => ({
          ...B(e),
          type: e
        })).map(e => {
          var l;
          const o = (l = n.value.socials) == null ? void 0 : l.find(c => c.type === e.type);
          return {
            icon: e.icon,
            type: e.type,
            display: e.display,
            onClick: o ? () => J(e.type, o.url) : void 0
          }
        }).sort((e, o) => +!!o.onClick - +!!e.onClick)),
        N = () => Q().copy(n.value.address);

      function T() {
        const e = j(!1),
          o = j(!1),
          l = j(null);
        return K(() => l.value, c => {
          c && (o.value = c.scrollHeight > c.clientHeight)
        }, {
          immediate: !0
        }), {
          showFullDescription: e,
          showDescriptionMore: o,
          descriptionWrapperEl: l
        }
      }
      return (e, o) => {
        const l = P,
          c = H,
          u = U,
          C = Y,
          F = x,
          S = ee;
        return m(), _("div", te, [s("div", {
          class: w(["first", {
            "has-banner": t(n).bannerFileKey
          }])
        }, [s("img", {
          src: ("imgResolver" in e ? e.imgResolver : t(L))("memepad/about-grid", "svg"),
          alt: "Background grid room",
          class: "bg-room"
        }, null, 8, se), s("div", oe, [t(n).bannerFileKey ? (m(), z(l, {
          key: 0,
          "banner-file-key": t(n).bannerFileKey,
          class: "banner"
        }, null, 8, ["banner-file-key"])) : f("", !0), s("div", ne, [a(c, {
          "jetton-modal-controls": t(k),
          jetton: t(n),
          size: 96
        }, null, 8, ["jetton-modal-controls", "jetton"])]), s("div", ae, i(t(n).ticker), 1)]), s("button", {
          type: "button",
          class: "reset share",
          onClick: o[0] || (o[0] = r => e.$emit("share"))
        }, [a(u, {
          name: "share",
          class: "icon"
        })])], 2), s("div", {
          ref_key: "descriptionWrapperEl",
          ref: W,
          class: w(["description-wrapper", {
            "show-full": t(v)
          }])
        }, [s("div", ie, [G(i(t(n).description) + " ", 1), s("span", null, [t(g) && t(v) ? (m(), _("button", {
          key: 0,
          type: "button",
          class: "reset less-btn",
          onClick: o[1] || (o[1] = r => v.value = !1)
        }, i(("t" in e ? e.t : t(h))("memepad.about.description.less")), 1)) : f("", !0)])]), t(g) && !t(v) ? (m(), _("div", re, [o[3] || (o[3] = s("div", {
          class: "shadow"
        }, null, -1)), s("button", {
          type: "button",
          class: "reset more-btn",
          onClick: o[2] || (o[2] = r => v.value = !0)
        }, i(("t" in e ? e.t : t(h))("memepad.about.description.more")), 1)])) : f("", !0)], 2), s("div", le, [(m(!0), _(O, null, X(t(D), r => (m(), _("button", {
          key: r.type,
          type: "button",
          class: "item reset",
          disabled: !r.onClick,
          onClick: r.onClick
        }, [a(u, {
          name: r.icon,
          class: "icon"
        }, null, 8, ["name"]), s("div", de, i(r.display), 1)], 8, ce))), 128)), t(n).isNSFW ? (m(), _("div", me, [a(u, {
          name: "stop-sign",
          class: "icon"
        }), s("span", pe, i(("t" in e ? e.t : t(h))("memepad.jetton.nsfw")), 1)])) : f("", !0)]), s("div", ue, [s("div", _e, [s("div", he, i(("t" in e ? e.t : t(h))("memepad.about.contract_address.title")), 1), s("div", ve, i(("sliceWalletAddress" in e ? e.sliceWalletAddress : t(q))(t(n).address)), 1)]), s("button", {
          type: "button",
          class: "reset copy-btn",
          onClick: N
        }, [a(u, {
          name: "edit-copy-2",
          class: "icon"
        })])]), s("div", be, [a(C, {
          to: ("useRouter" in e ? e.useRouter : t(E))().resolve({
            name: "memepad-jetton-shortname-about-holders",
            params: {
              shortname: t(y)
            }
          }),
          class: "header"
        }, {
          default: M(() => [s("div", fe, i(("t" in e ? e.t : t(h))("memepad.jetton.holders")), 1), a(u, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), a(F, {
          jetton: t(n),
          "jetton-holders": t(I),
          "jetton-information": t(R),
          "jetton-modal-controls": t(k),
          preview: ""
        }, null, 8, ["jetton", "jetton-holders", "jetton-information", "jetton-modal-controls"])]), s("div", je, [a(C, {
          to: ("useRouter" in e ? e.useRouter : t(E))().resolve({
            name: "memepad-jetton-shortname-about-transactions",
            params: {
              shortname: t(y)
            }
          }),
          class: "header"
        }, {
          default: M(() => [s("div", ye, i(("t" in e ? e.t : t(h))("memepad.jetton.transactions")), 1), a(u, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), a(S, {
          transactions: t(A),
          preview: ""
        }, null, 8, ["transactions"])])])
      }
    }
  }),
  De = Z(ke, [
    ["__scopeId", "data-v-a11390fb"]
  ]);
export {
  De as
  default
};