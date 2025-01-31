import {
  _ as A,
  a as U
} from "./2Ansq1DR.js";
import {
  d as E,
  K as y,
  cf as u,
  z as a,
  j as x,
  o as g,
  c as I,
  a as _,
  t as B,
  e,
  b as r,
  H as p,
  bW as $,
  cS as j,
  cT as K,
  p as L,
  bV as z,
  am as D,
  U as F,
  B as G,
  ac as R,
  I as M,
  x as H,
  f as N,
  aG as W,
  bS as q,
  O as Y,
  G as C,
  W as Z
} from "./CKELBEop.js";
import {
  a as X
} from "./sXlWzexc.js";
import {
  _ as J
} from "./BFNTaMiC.js";
import {
  _ as Q
} from "./B7SKPvGY.js";
import {
  _ as ee
} from "./DSJTnyQR.js";
const te = {
    class: "pages-tribe-create-enter-link"
  },
  ne = {
    class: "title"
  },
  ae = {
    class: "input-label"
  },
  ie = {
    class: "text"
  },
  oe = E({
    __name: "TribeCreate",
    props: {
      createTribeFn: {
        type: Function,
        required: !0
      },
      tribeValidationBot: {
        type: Object,
        required: !0
      }
    },
    emits: ["created"],
    setup(m, {
      emit: i
    }) {
      const d = m,
        S = i,
        s = y(""),
        l = y(!1),
        c = {
          status: u.REGULAR,
          caption: a("tribes.new.field_tg.caption_default")
        },
        o = y(c),
        b = x(() => l.value ? {
          status: u.LOADING
        } : o.value),
        V = async () => {
          if (l.value) return;
          l.value = !0, o.value = c;
          const t = s.value;
          if (!t) {
            o.value = {
              status: u.ERROR,
              caption: a("tribes.new.field_tg.caption_error.no_name")
            };
            return
          }
          const n = await d.createTribeFn({
            chatName: t,
            botName: d.tribeValidationBot.name
          });
          if (l.value = !1, n.err) {
            if (n.message === "ALREADY_EXISTS") {
              const w = (() => {
                var v, T;
                const f = (T = (v = n.data) == null ? void 0 : v.data) == null ? void 0 : T.chatname;
                if (f) return R().resolve({
                  name: "tribe-slug",
                  params: {
                    slug: f
                  }
                }).fullPath
              })();
              o.value = {
                status: u.ERROR,
                caption: a("tribes.new.field_tg.caption_error.already_exists"),
                linkToTribe: w
              }
            } else n.message === "INVALID_CHATNAME" ? o.value = {
              status: u.ERROR,
              caption: a("tribes.new.field_tg.caption_error.invalid")
            } : o.value = {
              status: u.ERROR,
              caption: a("tribes.new.field_tg.caption_error.unknown")
            };
            return
          }
          S("created")
        };
      return (t, n) => {
        const w = A,
          f = U,
          v = M,
          T = X,
          O = J,
          P = H,
          h = Q;
        return g(), I("div", te, [_("div", ne, B(("t" in t ? t.t : e(a))("tribes.new.title")), 1), r(f, {
          title: ("t" in t ? t.t : e(a))("tribes.new.bot.title"),
          subtitle: m.tribeValidationBot.name
        }, {
          default: p(() => [r(w, {
            value: m.tribeValidationBot.name
          }, null, 8, ["value"])]),
          _: 1
        }, 8, ["title", "subtitle"]), r(T, {
          modelValue: e(s),
          "onUpdate:modelValue": n[0] || (n[0] = k => L(s) ? s.value = k : null),
          status: e(b).status,
          caption: e(b).caption,
          size: e(z).COMPACT,
          prefix: "t.me/",
          class: "link-input",
          onInput: n[1] || (n[1] = k => o.value = c)
        }, $({
          label: p(() => [_("div", ae, [n[3] || (n[3] = _("img", {
            src: K,
            alt: "icon",
            width: "14",
            height: "14"
          }, null, -1)), _("span", ie, B(("t" in t ? t.t : e(a))("tribes.new.field_tg.label")), 1)])]),
          _: 2
        }, [e(b).linkToTribe ? {
          name: "label-right",
          fn: p(() => [r(v, {
            class: "link-to-chat",
            to: e(b).linkToTribe
          }, {
            default: p(() => [_("span", null, B(("t" in t ? t.t : e(a))("tribes.new.field_tg.link_to_chat")), 1), n[4] || (n[4] = _("img", {
              src: j,
              alt: "Chevron right"
            }, null, -1))]),
            _: 1
          }, 8, ["to"])]),
          key: "0"
        } : void 0]), 1032, ["modelValue", "status", "caption", "size"]), r(h, null, {
          default: p(() => [r(O, {
            image: ("imgResolver" in t ? t.imgResolver : e(D))("emoji/Star"),
            text: ("t" in t ? t.t : e(a))("tribes.new.note")
          }, null, 8, ["image", "text"]), r(P, {
            label: ("t" in t ? t.t : e(a))("tribes.new.create_btn"),
            fill: "",
            size: e(F).LARGE,
            class: "create-btn",
            type: e(G).DROP,
            onClick: n[2] || (n[2] = k => V())
          }, null, 8, ["label", "size", "type"])]),
          _: 1
        })])
      }
    }
  }),
  se = N(oe, [
    ["__scopeId", "data-v-2edec90a"]
  ]),
  re = {
    class: "tribe-join-new page"
  },
  le = E({
    __name: "new",
    setup(m) {
      const i = W(),
        d = () => {
          i.setMyTribeValidation(), R().replace({
            name: "tribe-join"
          })
        };
      return i.getBot(), q(() => {
        (i.tribeOrUndefined.value || !i.canCreateTribe.value) && R().replace({
          name: "tribe-slug"
        })
      }), Y().initHandler(() => R().push({
        name: "tribe-join"
      }), "tribe-join-new"), (S, s) => {
        const l = se,
          c = ee;
        return g(), I("div", re, [e(i).myTribeRes.value && e(i).tribeValidationBot.value ? (g(), C(l, {
          key: 0,
          "create-tribe-fn": e(Z).createTribe,
          "tribe-validation-bot": e(i).tribeValidationBot.value,
          onCreated: s[0] || (s[0] = o => d())
        }, null, 8, ["create-tribe-fn", "tribe-validation-bot"])) : (g(), C(c, {
          key: 1
        }))])
      }
    }
  }),
  be = N(le, [
    ["__scopeId", "data-v-297ff87a"]
  ]);
export {
  be as
  default
};