import {
  _ as A,
  a as x
} from "./CUT1lJUp.js";
import {
  d as N,
  y as k,
  cw as u,
  C as a,
  j as U,
  o as T,
  c as S,
  a as _,
  t as B,
  e,
  b as r,
  D as p,
  aG as $,
  d9 as j,
  da as L,
  p as D,
  c0 as K,
  V as F,
  W as M,
  B as z,
  aa as R,
  H as G,
  x as H,
  f as V,
  aS as q,
  c1 as W,
  R as Y,
  M as E,
  a3 as Z
} from "./DAWpDGzr.js";
import {
  _ as X
} from "./0m3I9PyR.js";
import {
  _ as J
} from "./d_be4dnk.js";
import {
  _ as Q
} from "./p-EggjsI.js";
import {
  _ as ee
} from "./CXUCu0g7.js";
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
  oe = N({
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
        C = i,
        s = k(""),
        l = k(!1),
        c = {
          status: u.REGULAR,
          caption: a("tribes.new.field_tg.caption_default")
        },
        o = k(c),
        b = U(() => l.value ? {
          status: u.LOADING
        } : o.value),
        I = async () => {
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
                var v, g;
                const f = (g = (v = n.data) == null ? void 0 : v.data) == null ? void 0 : g.chatname;
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
          C("created")
        };
      return (t, n) => {
        const w = A,
          f = x,
          v = G,
          g = X,
          O = J,
          P = H,
          h = Q;
        return T(), S("div", te, [_("div", ne, B(("t" in t ? t.t : e(a))("tribes.new.title")), 1), r(f, {
          title: ("t" in t ? t.t : e(a))("tribes.new.bot.title"),
          subtitle: m.tribeValidationBot.name
        }, {
          default: p(() => [r(w, {
            value: m.tribeValidationBot.name
          }, null, 8, ["value"])]),
          _: 1
        }, 8, ["title", "subtitle"]), r(g, {
          modelValue: e(s),
          "onUpdate:modelValue": n[0] || (n[0] = y => D(s) ? s.value = y : null),
          status: e(b).status,
          caption: e(b).caption,
          size: e(K).COMPACT,
          prefix: "t.me/",
          class: "link-input",
          onInput: n[1] || (n[1] = y => o.value = c)
        }, $({
          label: p(() => [_("div", ae, [n[3] || (n[3] = _("img", {
            src: L,
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
            image: ("imgResolver" in t ? t.imgResolver : e(F))("emoji/Star"),
            text: ("t" in t ? t.t : e(a))("tribes.new.note")
          }, null, 8, ["image", "text"]), r(P, {
            label: ("t" in t ? t.t : e(a))("tribes.new.create_btn"),
            fill: "",
            size: e(M).LARGE,
            class: "create-btn",
            type: e(z).DROP,
            onClick: n[2] || (n[2] = y => I())
          }, null, 8, ["label", "size", "type"])]),
          _: 1
        })])
      }
    }
  }),
  se = V(oe, [
    ["__scopeId", "data-v-2edec90a"]
  ]),
  re = {
    class: "tribe-join-new page"
  },
  le = N({
    __name: "new",
    setup(m) {
      const i = q(),
        d = () => {
          i.setMyTribeValidation(), R().replace({
            name: "tribe-join"
          })
        };
      return i.getBot(), W(() => {
        (i.tribeOrUndefined.value || !i.canCreateTribe.value) && R().replace({
          name: "tribe-slug"
        })
      }), Y().initHandler(() => R().push({
        name: "tribe-join"
      }), "tribe-join-new"), (C, s) => {
        const l = se,
          c = ee;
        return T(), S("div", re, [e(i).myTribeRes.value && e(i).tribeValidationBot.value ? (T(), E(l, {
          key: 0,
          "create-tribe-fn": e(Z).createTribe,
          "tribe-validation-bot": e(i).tribeValidationBot.value,
          onCreated: s[0] || (s[0] = o => d())
        }, null, 8, ["create-tribe-fn", "tribe-validation-bot"])) : (T(), E(c, {
          key: 1
        }))])
      }
    }
  }),
  be = V(le, [
    ["__scopeId", "data-v-297ff87a"]
  ]);
export {
  be as
  default
};