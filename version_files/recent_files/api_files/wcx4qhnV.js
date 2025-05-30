import {
  _ as P,
  a as U
} from "./D60MZ_Om.js";
import {
  d as N,
  J as B,
  cy as u,
  A as a,
  j as x,
  o as T,
  c as I,
  a as _,
  t as k,
  e,
  b as r,
  D as p,
  aB as $,
  de as j,
  df as L,
  p as D,
  c3 as K,
  a8 as z,
  a9 as F,
  B as M,
  ao as R,
  U as G,
  x as q,
  f as S,
  aQ as H,
  bW as Q,
  a3 as W,
  z as E,
  ah as Y,
  Q as Z
} from "./jPANuN8i.js";
import {
  a as J
} from "./C1e3sfBL.js";
import {
  _ as X
} from "./BcOsVxi3.js";
import {
  _ as ee
} from "./jOA2D9Ne.js";
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
        s = B(""),
        l = B(!1),
        c = {
          status: u.REGULAR,
          caption: a("tribes.new.field_tg.caption_default")
        },
        o = B(c),
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
        const w = P,
          f = U,
          v = G,
          g = J,
          h = X,
          A = q,
          O = ee;
        return T(), I("div", te, [_("div", ne, k(("t" in t ? t.t : e(a))("tribes.new.title")), 1), r(f, {
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
          }, null, -1)), _("span", ie, k(("t" in t ? t.t : e(a))("tribes.new.field_tg.label")), 1)])]),
          _: 2
        }, [e(b).linkToTribe ? {
          name: "label-right",
          fn: p(() => [r(v, {
            class: "link-to-chat",
            to: e(b).linkToTribe
          }, {
            default: p(() => [_("span", null, k(("t" in t ? t.t : e(a))("tribes.new.field_tg.link_to_chat")), 1), n[4] || (n[4] = _("img", {
              src: j,
              alt: "Chevron right"
            }, null, -1))]),
            _: 1
          }, 8, ["to"])]),
          key: "0"
        } : void 0]), 1032, ["modelValue", "status", "caption", "size"]), r(O, null, {
          default: p(() => [r(h, {
            image: ("imgResolver" in t ? t.imgResolver : e(z))("emoji/Star"),
            text: ("t" in t ? t.t : e(a))("tribes.new.note")
          }, null, 8, ["image", "text"]), r(A, {
            label: ("t" in t ? t.t : e(a))("tribes.new.create_btn"),
            fill: "",
            size: e(F).LARGE,
            class: "create-btn",
            type: e(M).DROP,
            onClick: n[2] || (n[2] = y => V())
          }, null, 8, ["label", "size", "type"])]),
          _: 1
        })])
      }
    }
  }),
  se = S(oe, [
    ["__scopeId", "data-v-2edec90a"]
  ]),
  re = {
    class: "tribe-join-new page"
  },
  le = N({
    __name: "new",
    setup(m) {
      const i = H(),
        d = () => {
          i.setMyTribeValidation(), R().replace({
            name: "tribe-join"
          })
        };
      return i.getBot(), Q(() => {
        (i.tribeOrUndefined.value || !i.canCreateTribe.value) && R().replace({
          name: "tribe-slug"
        })
      }), W().initHandler(() => R().push({
        name: "tribe-join"
      }), "tribe-join-new"), (C, s) => {
        const l = se,
          c = Z;
        return T(), I("div", re, [e(i).myTribeRes.value && e(i).tribeValidationBot.value ? (T(), E(l, {
          key: 0,
          "create-tribe-fn": e(Y).createTribe,
          "tribe-validation-bot": e(i).tribeValidationBot.value,
          onCreated: s[0] || (s[0] = o => d())
        }, null, 8, ["create-tribe-fn", "tribe-validation-bot"])) : (T(), E(c, {
          key: 1
        }))])
      }
    }
  }),
  de = S(le, [
    ["__scopeId", "data-v-297ff87a"]
  ]);
export {
  de as
  default
};