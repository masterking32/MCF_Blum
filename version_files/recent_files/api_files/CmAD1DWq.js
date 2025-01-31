import {
  _ as S
} from "./DM5G6j4v.js";
import {
  d as B,
  K as V,
  o as i,
  c as p,
  a as l,
  b as c,
  cM as j,
  e,
  z as s,
  m as y,
  t as k,
  H as w,
  G as b,
  D as h,
  ac as v,
  F as T,
  q as P,
  p as N,
  I as E,
  f as C,
  a_ as L,
  U as O,
  B as I,
  a$ as K,
  x as M,
  aG as U,
  j as $,
  bS as F,
  O as z,
  T as A
} from "./CKELBEop.js";
import {
  _ as D,
  a as H
} from "./d31K_UXx.js";
import {
  _ as q
} from "./LUrGzr3G.js";
import {
  _ as G
} from "./wLuGxhoR.js";
import {
  _ as Y,
  a as W
} from "./2Ansq1DR.js";
import {
  _ as Z
} from "./DSJTnyQR.js";
import "./BlfvQq2f.js";
import "./DEuHrI4Q.js";
import "./DPWllNgH.js";
import "./C4V7Grzp.js";
import "./D1_O7cyA.js";
import "./B7SKPvGY.js";
const J = {
    class: "pages-tribe-welcome"
  },
  Q = {
    class: "container"
  },
  X = ["innerHTML"],
  x = {
    class: "subtitle"
  },
  ee = {
    class: "buttons"
  },
  te = {
    key: 0,
    class: "top-tribes"
  },
  ne = {
    class: "list"
  },
  se = B({
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
      const r = V(!1);
      return (n, o) => {
        const d = S,
          t = E,
          m = D,
          _ = q,
          f = H;
        return i(), p(T, null, [l("div", J, [l("div", Q, [c(d), o[2] || (o[2] = l("img", {
          src: j,
          alt: "Dizzy emoji"
        }, null, -1)), l("div", {
          class: "title",
          innerHTML: ("t" in n ? n.t : e(s))("tribes.welcome.title")
        }, null, 8, X), l("div", x, [o[1] || (o[1] = l("i", {
          class: "lightning"
        }, null, -1)), y(" " + k(("t" in n ? n.t : e(s))("tribes.welcome.subtitle_old_version")), 1)]), l("div", ee, [c(t, {
          class: "is-white",
          to: {
            name: "tribe-join-list"
          }
        }, {
          default: w(() => [y(k(("t" in n ? n.t : e(s))("tribes.welcome.buttons.join")), 1)]),
          _: 1
        }), a.canCreateTribe ? (i(), b(t, {
          key: 0,
          class: "is-gray",
          to: {
            name: "tribe-join-new"
          }
        }, {
          default: w(() => [y(k(("t" in n ? n.t : e(s))("tribes.welcome.buttons.new")), 1)]),
          _: 1
        })) : h("", !0)]), a.leaderboard ? (i(), p("div", te, [c(m, {
          label: ("t" in n ? n.t : e(s))("tribes.welcome.leaderboard.label"),
          to: ("useRouter" in n ? n.useRouter : e(v))().resolve({
            name: "tribe-top"
          }).fullPath
        }, null, 8, ["label", "to"]), l("div", ne, [(i(!0), p(T, null, P(a.leaderboard.slice(0, 3), (u, g) => (i(), b(_, {
          key: u.id,
          tribe: u,
          rank: g + 1
        }, null, 8, ["tribe", "rank"]))), 128))])])) : h("", !0)])]), c(f, {
          modelValue: e(r),
          "onUpdate:modelValue": o[0] || (o[0] = u => N(r) ? r.value = u : null)
        }, null, 8, ["modelValue"])], 64)
      }
    }
  }),
  ie = C(se, [
    ["__scopeId", "data-v-0e02f5ce"]
  ]),
  oe = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='64'%20height='64'%20rx='32'%20fill='%2357BC18'/%3e%3cpath%20d='M17%2033L26.8995%2042.8995L48.1145%2021.6865'%20stroke='white'%20stroke-width='3.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  ae = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='64'%20height='64'%20rx='32'%20fill='%23E53935'/%3e%3cpath%20d='M32%2020V36M32.0996%2044V44.2L31.9004%2044.2004V44H32.0996Z'%20stroke='white'%20stroke-width='3.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  re = {
    class: "pages-tribe-create-statuses"
  },
  le = {
    class: "note"
  },
  ue = B({
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
      const r = a,
        n = () => {
          r.tribe.type === "not_created" && r.tribe.reset(), v().push({
            name: "index"
          })
        },
        o = V(!1),
        d = async () => {
          o.value || (o.value = !0, r.tribe.type === "validating" && await r.tribe.cancel(), o.value = !1)
        };
      return (t, m) => {
        const _ = G,
          f = K,
          u = Y,
          g = W,
          R = M;
        return i(), p("div", re, [a.tribe.type === "ok" ? (i(), b(_, {
          key: 0,
          icon: e(oe),
          title: ("t" in t ? t.t : e(s))("tribes.new.statuses.ok.title"),
          subtitle: ("t" in t ? t.t : e(s))("tribes.new.statuses.ok.subtitle"),
          "button-label": ("t" in t ? t.t : e(s))("tribes.new.statuses.ok.button_label"),
          onButton: m[0] || (m[0] = () => ("useRouter" in t ? t.useRouter : e(v))().push({
            name: "tribe-slug"
          }))
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : h("", !0), a.tribe.type === "validating" ? (i(), b(_, {
          key: 1,
          title: ("t" in t ? t.t : e(s))("tribes.new.statuses.validating.title"),
          subtitle: ("t" in t ? t.t : e(s))("tribes.new.statuses.validating.subtitle"),
          "button-label": ("t" in t ? t.t : e(s))("tribes.new.statuses.validating.button_label"),
          onButton: m[1] || (m[1] = () => ("useRouter" in t ? t.useRouter : e(v))().push({
            name: "index"
          }))
        }, {
          icon: w(() => [c(f, {
            size: 64,
            type: e(L).DARK,
            "track-dimmed": "",
            class: "spinner"
          }, null, 8, ["type"])]),
          "before-button": w(() => [l("div", le, [c(g, {
            title: ("t" in t ? t.t : e(s))("tribes.new.statuses.validating.note.title"),
            subtitle: a.tribeValidationBot.name,
            class: "bot-info"
          }, {
            default: w(() => [c(u, {
              value: a.tribeValidationBot.name
            }, null, 8, ["value"])]),
            _: 1
          }, 8, ["title", "subtitle"])]), c(R, {
            label: ("t" in t ? t.t : e(s))("tribes.new.statuses.validating.cancel_btn_label"),
            fill: "",
            size: e(O).LARGE,
            type: e(I).SECONDARY,
            disabled: e(o),
            class: "cancel-verification-btn",
            onClick: d
          }, null, 8, ["label", "size", "type", "disabled"])]),
          _: 1
        }, 8, ["title", "subtitle", "button-label"])) : h("", !0), a.tribe.type === "not_created" ? (i(), b(_, {
          key: 2,
          icon: e(ae),
          title: ("t" in t ? t.t : e(s))("tribes.new.statuses.not_created.title"),
          subtitle: a.tribe.messages.screen,
          "button-label": ("t" in t ? t.t : e(s))("tribes.new.statuses.not_created.button_label"),
          onButton: n
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : h("", !0)])
      }
    }
  }),
  ce = C(ue, [
    ["__scopeId", "data-v-b8232daf"]
  ]),
  be = {
    class: "tribe-join-page page"
  },
  de = B({
    __name: "index",
    setup(a) {
      const r = V(!1),
        n = U();
      n.getBot();
      const o = n.emitter("created", () => r.value = !0),
        d = $(() => n.myTribeRes.value),
        t = $(() => n.tribeValidationBot.value);
      return F(() => n.tribeOrUndefined.value && !r.value && v().replace({
        name: "tribe-slug"
      })), z().initHandler(() => v().push({
        name: "index"
      }), "tribe-join"), A(() => o()), (m, _) => {
        const f = ie,
          u = ce,
          g = Z;
        return i(), p("div", be, [e(d) && e(t) ? (i(), p(T, {
          key: 0
        }, [e(d).type === "not_found" ? (i(), b(f, {
          key: 0,
          "can-create-tribe": e(n).canCreateTribe.value,
          leaderboard: e(n).leaderboard.value
        }, null, 8, ["can-create-tribe", "leaderboard"])) : (i(), b(u, {
          key: 1,
          tribe: e(d),
          "tribe-validation-bot": e(t),
          class: "create-statuses"
        }, null, 8, ["tribe", "tribe-validation-bot"]))], 64)) : (i(), b(g, {
          key: 1
        }))])
      }
    }
  }),
  Ce = C(de, [
    ["__scopeId", "data-v-b4e4a5be"]
  ]);
export {
  Ce as
  default
};