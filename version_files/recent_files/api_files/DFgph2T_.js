import {
  d as T,
  J as V,
  o as i,
  c as p,
  a as l,
  b as c,
  d8 as j,
  e,
  A as s,
  m as y,
  t as k,
  D as w,
  z as b,
  G as h,
  ao as v,
  F as B,
  q as P,
  p as S,
  Z as N,
  U as E,
  f as C,
  aY as L,
  a9 as O,
  B as U,
  aZ as A,
  x as F,
  aQ as I,
  j as R,
  bW as K,
  a3 as M,
  af as z,
  Q as D
} from "./Q7ZkUOCs.js";
import {
  _ as q,
  a as H
} from "./DjHfI6R_.js";
import {
  _ as Y
} from "./dvTwcLUG.js";
import {
  _ as Z
} from "./Dj-UTuuJ.js";
import {
  _ as W,
  a as G
} from "./CLXRc7ka.js";
import "./Bebxa3Md.js";
import "./CwB0pGGs.js";
import "./Cy_jAjho.js";
import "./Xmv6NS9R.js";
import "./Mw76Z4Ld.js";
import "./fQL3VVTV.js";
import "./o1Oj3uQj.js";
import "./CcAYJJ_r.js";
const Q = {
    class: "pages-tribe-welcome"
  },
  J = {
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
  se = T({
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
        const d = N,
          t = E,
          m = q,
          _ = Y,
          g = H;
        return i(), p(B, null, [l("div", Q, [l("div", J, [c(d), o[2] || (o[2] = l("img", {
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
        }, null, 8, ["label", "to"]), l("div", ne, [(i(!0), p(B, null, P(a.leaderboard.slice(0, 3), (u, f) => (i(), b(_, {
          key: u.id,
          tribe: u,
          rank: f + 1
        }, null, 8, ["tribe", "rank"]))), 128))])])) : h("", !0)])]), c(g, {
          modelValue: e(r),
          "onUpdate:modelValue": o[0] || (o[0] = u => S(r) ? r.value = u : null)
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
  ue = T({
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
        const _ = Z,
          g = A,
          u = W,
          f = G,
          $ = F;
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
          icon: w(() => [c(g, {
            size: 64,
            type: e(L).DARK,
            "track-dimmed": "",
            class: "spinner"
          }, null, 8, ["type"])]),
          "before-button": w(() => [l("div", le, [c(f, {
            title: ("t" in t ? t.t : e(s))("tribes.new.statuses.validating.note.title"),
            subtitle: a.tribeValidationBot.name,
            class: "bot-info"
          }, {
            default: w(() => [c(u, {
              value: a.tribeValidationBot.name
            }, null, 8, ["value"])]),
            _: 1
          }, 8, ["title", "subtitle"])]), c($, {
            label: ("t" in t ? t.t : e(s))("tribes.new.statuses.validating.cancel_btn_label"),
            fill: "",
            size: e(O).LARGE,
            type: e(U).SECONDARY,
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
  de = T({
    __name: "index",
    setup(a) {
      const r = V(!1),
        n = I();
      n.getBot();
      const o = n.emitter("created", () => r.value = !0),
        d = R(() => n.myTribeRes.value),
        t = R(() => n.tribeValidationBot.value);
      return K(() => n.tribeOrUndefined.value && !r.value && v().replace({
        name: "tribe-slug"
      })), M().initHandler(() => v().push({
        name: "index"
      }), "tribe-join"), z(() => o()), (m, _) => {
        const g = ie,
          u = ce,
          f = D;
        return i(), p("div", be, [e(d) && e(t) ? (i(), p(B, {
          key: 0
        }, [e(d).type === "not_found" ? (i(), b(g, {
          key: 0,
          "can-create-tribe": e(n).canCreateTribe.value,
          leaderboard: e(n).leaderboard.value
        }, null, 8, ["can-create-tribe", "leaderboard"])) : (i(), b(u, {
          key: 1,
          tribe: e(d),
          "tribe-validation-bot": e(t),
          class: "create-statuses"
        }, null, 8, ["tribe", "tribe-validation-bot"]))], 64)) : (i(), b(f, {
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