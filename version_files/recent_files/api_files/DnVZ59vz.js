import {
  d as T,
  G as B,
  o,
  c as _,
  a as r,
  cG as P,
  cO as j,
  e,
  z as i,
  m as y,
  t as h,
  b as p,
  U as g,
  J as b,
  C as w,
  ae as v,
  F as k,
  q as L,
  p as N,
  aH as S,
  f as V,
  K as E,
  V as O,
  B as I,
  O as K,
  x as M,
  aL as U,
  j as C,
  bQ as z,
  ap as A
} from "./CEkQG6G2.js";
import {
  _ as F,
  a as q
} from "./DIFQk9ma.js";
import {
  _ as D
} from "./Dfw_kTvk.js";
import {
  _ as H,
  a as G
} from "./BFXKbRWo.js";
import {
  _ as Y
} from "./Cp707_QF.js";
import {
  _ as W,
  a as Z
} from "./Hpkp5IEU.js";
import {
  _ as J
} from "./CXO-Cdt2.js";
import "./B0dYHWtj.js";
import "./CR8lMdFr.js";
import "./Cup1UUIa.js";
import "./BgKCkwpn.js";
import "./CcsfoEEB.js";
import "./DCKbnw83.js";
const Q = {
    class: "pages-tribe-welcome"
  },
  X = {
    class: "container"
  },
  x = ["innerHTML"],
  ee = {
    class: "subtitle"
  },
  te = {
    class: "buttons"
  },
  ne = {
    key: 0,
    class: "top-tribes"
  },
  se = {
    class: "list"
  },
  ie = T({
    __name: "TribeWelcome",
    props: {
      canCreateTribe: {
        type: Boolean,
        required: !0
      },
      leaderboard: {
        type: Array,
        default: void 0
      }
    },
    setup(a) {
      const l = B(!1);
      return (n, s) => {
        const c = S,
          t = F,
          d = D,
          m = q;
        return o(), _(k, null, [r("div", Q, [s[3] || (s[3] = r("video", {
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: P
        }, [r("source", {
          src: H,
          type: "video/webm"
        }), r("source", {
          src: G,
          type: "video/mp4"
        })], -1)), r("div", X, [s[2] || (s[2] = r("img", {
          src: j,
          alt: "Dizzy emoji"
        }, null, -1)), r("div", {
          class: "title",
          innerHTML: ("t" in n ? n.t : e(i))("tribes.welcome.title")
        }, null, 8, x), r("div", ee, [s[1] || (s[1] = r("i", {
          class: "lightning"
        }, null, -1)), y(" " + h(("t" in n ? n.t : e(i))("tribes.welcome.subtitle_old_version")), 1)]), r("div", te, [p(c, {
          class: "is-white",
          to: {
            name: "tribe-join-list"
          }
        }, {
          default: g(() => [y(h(("t" in n ? n.t : e(i))("tribes.welcome.buttons.join")), 1)]),
          _: 1
        }), a.canCreateTribe ? (o(), b(c, {
          key: 0,
          class: "is-gray",
          to: {
            name: "tribe-join-new"
          }
        }, {
          default: g(() => [y(h(("t" in n ? n.t : e(i))("tribes.welcome.buttons.new")), 1)]),
          _: 1
        })) : w("", !0)]), a.leaderboard ? (o(), _("div", ne, [p(t, {
          label: ("t" in n ? n.t : e(i))("tribes.welcome.leaderboard.label"),
          to: ("useRouter" in n ? n.useRouter : e(v))().resolve({
            name: "tribe-top"
          }).fullPath
        }, null, 8, ["label", "to"]), r("div", se, [(o(!0), _(k, null, L(a.leaderboard.slice(0, 3), (u, f) => (o(), b(d, {
          key: u.id,
          tribe: u,
          rank: f + 1
        }, null, 8, ["tribe", "rank"]))), 128))])])) : w("", !0)])]), p(m, {
          modelValue: e(l),
          "onUpdate:modelValue": s[0] || (s[0] = u => N(l) ? l.value = u : null)
        }, null, 8, ["modelValue"])], 64)
      }
    }
  }),
  oe = V(ie, [
    ["__scopeId", "data-v-58df8947"]
  ]),
  ae = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='64'%20height='64'%20rx='32'%20fill='%2357BC18'/%3e%3cpath%20d='M17%2033L26.8995%2042.8995L48.1145%2021.6865'%20stroke='white'%20stroke-width='3.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  re = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='64'%20height='64'%20rx='32'%20fill='%23E53935'/%3e%3cpath%20d='M32%2020V36M32.0996%2044V44.2L31.9004%2044.2004V44H32.0996Z'%20stroke='white'%20stroke-width='3.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  le = {
    class: "pages-tribe-create-statuses"
  },
  ue = {
    class: "note"
  },
  be = T({
    __name: "TribeCreateStatuses",
    props: {
      tribe: {
        type: Object,
        required: !0
      },
      tribeValidationBot: {
        type: Object,
        required: !0
      }
    },
    setup(a) {
      const l = a,
        n = () => {
          l.tribe.type === "not_created" && l.tribe.reset(), v().push({
            name: "index"
          })
        },
        s = B(!1),
        c = async () => {
          s.value || (s.value = !0, l.tribe.type === "validating" && await l.tribe.cancel(), s.value = !1)
        };
      return (t, d) => {
        const m = Y,
          u = K,
          f = W,
          R = Z,
          $ = M;
        return o(), _("div", le, [a.tribe.type === "ok" ? (o(), b(m, {
          key: 0,
          icon: e(ae),
          title: ("t" in t ? t.t : e(i))("tribes.new.statuses.ok.title"),
          subtitle: ("t" in t ? t.t : e(i))("tribes.new.statuses.ok.subtitle"),
          "button-label": ("t" in t ? t.t : e(i))("tribes.new.statuses.ok.button_label"),
          onButton: d[0] || (d[0] = () => ("useRouter" in t ? t.useRouter : e(v))().push({
            name: "tribe-slug"
          }))
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : w("", !0), a.tribe.type === "validating" ? (o(), b(m, {
          key: 1,
          title: ("t" in t ? t.t : e(i))("tribes.new.statuses.validating.title"),
          subtitle: ("t" in t ? t.t : e(i))("tribes.new.statuses.validating.subtitle"),
          "button-label": ("t" in t ? t.t : e(i))("tribes.new.statuses.validating.button_label"),
          onButton: d[1] || (d[1] = () => ("useRouter" in t ? t.useRouter : e(v))().push({
            name: "index"
          }))
        }, {
          icon: g(() => [p(u, {
            size: 64,
            type: e(E).DARK,
            "track-dimmed": "",
            class: "spinner"
          }, null, 8, ["type"])]),
          "before-button": g(() => [r("div", ue, [p(R, {
            title: ("t" in t ? t.t : e(i))("tribes.new.statuses.validating.note.title"),
            subtitle: a.tribeValidationBot.name,
            class: "bot-info"
          }, {
            default: g(() => [p(f, {
              value: a.tribeValidationBot.name
            }, null, 8, ["value"])]),
            _: 1
          }, 8, ["title", "subtitle"])]), p($, {
            label: ("t" in t ? t.t : e(i))("tribes.new.statuses.validating.cancel_btn_label"),
            fill: "",
            size: e(O).LARGE,
            type: e(I).SECONDARY,
            disabled: e(s),
            class: "cancel-verification-btn",
            onClick: c
          }, null, 8, ["label", "size", "type", "disabled"])]),
          _: 1
        }, 8, ["title", "subtitle", "button-label"])) : w("", !0), a.tribe.type === "not_created" ? (o(), b(m, {
          key: 2,
          icon: e(re),
          title: ("t" in t ? t.t : e(i))("tribes.new.statuses.not_created.title"),
          subtitle: a.tribe.messages.screen,
          "button-label": ("t" in t ? t.t : e(i))("tribes.new.statuses.not_created.button_label"),
          onButton: n
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : w("", !0)])
      }
    }
  }),
  ce = V(be, [
    ["__scopeId", "data-v-b8232daf"]
  ]),
  de = {
    class: "tribe-join-page page"
  },
  me = T({
    __name: "index",
    setup(a) {
      const l = B(!1),
        n = U({
          onCreated: () => l.value = !0
        }),
        s = C(() => n.myTribeRes.value),
        c = C(() => n.tribeValidationBot.value);
      return n.getBot(), z(() => n.tribeOrUndefined.value && !l.value && v().replace({
        name: "tribe-slug"
      })), A().meta.back = () => v().push({
        name: "index"
      }), (t, d) => {
        const m = oe,
          u = ce,
          f = J;
        return o(), _("div", de, [e(s) && e(c) ? (o(), _(k, {
          key: 0
        }, [e(s).type === "not_found" ? (o(), b(m, {
          key: 0,
          "can-create-tribe": e(n).canCreateTribe.value,
          leaderboard: e(n).leaderboard.value
        }, null, 8, ["can-create-tribe", "leaderboard"])) : (o(), b(u, {
          key: 1,
          tribe: e(s),
          "tribe-validation-bot": e(c),
          class: "create-statuses"
        }, null, 8, ["tribe", "tribe-validation-bot"]))], 64)) : (o(), b(f, {
          key: 1
        }))])
      }
    }
  }),
  Re = V(me, [
    ["__scopeId", "data-v-ffb4f48a"]
  ]);
export {
  Re as
  default
};