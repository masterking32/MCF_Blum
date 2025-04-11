import {
  d as B,
  y as V,
  o as i,
  c as p,
  a as l,
  b,
  dc as j,
  e,
  C as s,
  m as h,
  t as k,
  D as w,
  M as c,
  E as y,
  ab as v,
  F as T,
  q as N,
  p as P,
  N as S,
  H as E,
  f as C,
  b0 as L,
  X as M,
  B as O,
  b1 as F,
  x as I,
  aV as K,
  j as R,
  b_ as U,
  T as A,
  a2 as z
} from "./C6ycOBuK.js";
import {
  _ as D,
  a as H
} from "./DwbDYxWP.js";
import {
  _ as q
} from "./DkkLsFCn.js";
import {
  _ as Y
} from "./Cqq1dawi.js";
import {
  _ as W,
  a as Z
} from "./ml5X9TTu.js";
import {
  _ as G
} from "./BcWuMC2o.js";
import "./CSwDaNtG.js";
import "./DjfitRWv.js";
import "./D4l7HQlD.js";
import "./CX4xpWp4.js";
import "./BplkP6_Z.js";
import "./yAtlAti0.js";
import "./Bay6_qds.js";
import "./pSTeQkbo.js";
const X = {
    class: "pages-tribe-welcome"
  },
  J = {
    class: "container"
  },
  Q = ["innerHTML"],
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
          g = H;
        return i(), p(T, null, [l("div", X, [l("div", J, [b(d), o[2] || (o[2] = l("img", {
          src: j,
          alt: "Dizzy emoji"
        }, null, -1)), l("div", {
          class: "title",
          innerHTML: ("t" in n ? n.t : e(s))("tribes.welcome.title")
        }, null, 8, Q), l("div", x, [o[1] || (o[1] = l("i", {
          class: "lightning"
        }, null, -1)), h(" " + k(("t" in n ? n.t : e(s))("tribes.welcome.subtitle_old_version")), 1)]), l("div", ee, [b(t, {
          class: "is-white",
          to: {
            name: "tribe-join-list"
          }
        }, {
          default: w(() => [h(k(("t" in n ? n.t : e(s))("tribes.welcome.buttons.join")), 1)]),
          _: 1
        }), a.canCreateTribe ? (i(), c(t, {
          key: 0,
          class: "is-gray",
          to: {
            name: "tribe-join-new"
          }
        }, {
          default: w(() => [h(k(("t" in n ? n.t : e(s))("tribes.welcome.buttons.new")), 1)]),
          _: 1
        })) : y("", !0)]), a.leaderboard ? (i(), p("div", te, [b(m, {
          label: ("t" in n ? n.t : e(s))("tribes.welcome.leaderboard.label"),
          to: ("useRouter" in n ? n.useRouter : e(v))().resolve({
            name: "tribe-top"
          }).fullPath
        }, null, 8, ["label", "to"]), l("div", ne, [(i(!0), p(T, null, N(a.leaderboard.slice(0, 3), (u, f) => (i(), c(_, {
          key: u.id,
          tribe: u,
          rank: f + 1
        }, null, 8, ["tribe", "rank"]))), 128))])])) : y("", !0)])]), b(g, {
          modelValue: e(r),
          "onUpdate:modelValue": o[0] || (o[0] = u => P(r) ? r.value = u : null)
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
        const _ = Y,
          g = F,
          u = W,
          f = Z,
          $ = I;
        return i(), p("div", re, [a.tribe.type === "ok" ? (i(), c(_, {
          key: 0,
          icon: e(oe),
          title: ("t" in t ? t.t : e(s))("tribes.new.statuses.ok.title"),
          subtitle: ("t" in t ? t.t : e(s))("tribes.new.statuses.ok.subtitle"),
          "button-label": ("t" in t ? t.t : e(s))("tribes.new.statuses.ok.button_label"),
          onButton: m[0] || (m[0] = () => ("useRouter" in t ? t.useRouter : e(v))().push({
            name: "tribe-slug"
          }))
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : y("", !0), a.tribe.type === "validating" ? (i(), c(_, {
          key: 1,
          title: ("t" in t ? t.t : e(s))("tribes.new.statuses.validating.title"),
          subtitle: ("t" in t ? t.t : e(s))("tribes.new.statuses.validating.subtitle"),
          "button-label": ("t" in t ? t.t : e(s))("tribes.new.statuses.validating.button_label"),
          onButton: m[1] || (m[1] = () => ("useRouter" in t ? t.useRouter : e(v))().push({
            name: "index"
          }))
        }, {
          icon: w(() => [b(g, {
            size: 64,
            type: e(L).DARK,
            "track-dimmed": "",
            class: "spinner"
          }, null, 8, ["type"])]),
          "before-button": w(() => [l("div", le, [b(f, {
            title: ("t" in t ? t.t : e(s))("tribes.new.statuses.validating.note.title"),
            subtitle: a.tribeValidationBot.name,
            class: "bot-info"
          }, {
            default: w(() => [b(u, {
              value: a.tribeValidationBot.name
            }, null, 8, ["value"])]),
            _: 1
          }, 8, ["title", "subtitle"])]), b($, {
            label: ("t" in t ? t.t : e(s))("tribes.new.statuses.validating.cancel_btn_label"),
            fill: "",
            size: e(M).LARGE,
            type: e(O).SECONDARY,
            disabled: e(o),
            class: "cancel-verification-btn",
            onClick: d
          }, null, 8, ["label", "size", "type", "disabled"])]),
          _: 1
        }, 8, ["title", "subtitle", "button-label"])) : y("", !0), a.tribe.type === "not_created" ? (i(), c(_, {
          key: 2,
          icon: e(ae),
          title: ("t" in t ? t.t : e(s))("tribes.new.statuses.not_created.title"),
          subtitle: a.tribe.messages.screen,
          "button-label": ("t" in t ? t.t : e(s))("tribes.new.statuses.not_created.button_label"),
          onButton: n
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : y("", !0)])
      }
    }
  }),
  be = C(ue, [
    ["__scopeId", "data-v-b8232daf"]
  ]),
  ce = {
    class: "tribe-join-page page"
  },
  de = B({
    __name: "index",
    setup(a) {
      const r = V(!1),
        n = K();
      n.getBot();
      const o = n.emitter("created", () => r.value = !0),
        d = R(() => n.myTribeRes.value),
        t = R(() => n.tribeValidationBot.value);
      return U(() => n.tribeOrUndefined.value && !r.value && v().replace({
        name: "tribe-slug"
      })), A().initHandler(() => v().push({
        name: "index"
      }), "tribe-join"), z(() => o()), (m, _) => {
        const g = ie,
          u = be,
          f = G;
        return i(), p("div", ce, [e(d) && e(t) ? (i(), p(T, {
          key: 0
        }, [e(d).type === "not_found" ? (i(), c(g, {
          key: 0,
          "can-create-tribe": e(n).canCreateTribe.value,
          leaderboard: e(n).leaderboard.value
        }, null, 8, ["can-create-tribe", "leaderboard"])) : (i(), c(u, {
          key: 1,
          tribe: e(d),
          "tribe-validation-bot": e(t),
          class: "create-statuses"
        }, null, 8, ["tribe", "tribe-validation-bot"]))], 64)) : (i(), c(f, {
          key: 1
        }))])
      }
    }
  }),
  Re = C(de, [
    ["__scopeId", "data-v-b4e4a5be"]
  ]);
export {
  Re as
  default
};