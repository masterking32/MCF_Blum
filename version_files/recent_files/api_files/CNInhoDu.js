import {
  _ as A,
  a as x
} from "./B_QazZlf.js";
import {
  d as E,
  L as y,
  c9 as u,
  z as a,
  j as U,
  o as T,
  c as I,
  a as _,
  t as B,
  e,
  b as r,
  I as p,
  bO as L,
  cM as $,
  cN as K,
  p as j,
  bN as z,
  ao as D,
  W as F,
  B as M,
  ae as R,
  J as G,
  x as q,
  f as S,
  aF as W,
  bK as X,
  R as Y,
  G as C,
  X as Z
} from "./BrLCGJDp.js";
import {
  a as H
} from "./B4sF_YFV.js";
import {
  _ as J
} from "./DOxdg9-O.js";
import {
  _ as Q
} from "./LPIV59H5.js";
import {
  _ as ee
} from "./B3q5VDfN.js";
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
      const b = m,
        N = i,
        s = y(""),
        l = y(!1),
        c = {
          status: u.REGULAR,
          caption: a("tribes.new.field_tg.caption_default")
        },
        o = y(c),
        d = U(() => l.value ? {
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
          const n = await b.createTribeFn({
            chatName: t,
            botName: b.tribeValidationBot.name
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
          N("created")
        };
      return (t, n) => {
        const w = A,
          f = x,
          v = G,
          g = H,
          O = J,
          P = q,
          h = Q;
        return T(), I("div", te, [_("div", ne, B(("t" in t ? t.t : e(a))("tribes.new.title")), 1), r(f, {
          title: ("t" in t ? t.t : e(a))("tribes.new.bot.title"),
          subtitle: m.tribeValidationBot.name
        }, {
          default: p(() => [r(w, {
            value: m.tribeValidationBot.name
          }, null, 8, ["value"])]),
          _: 1
        }, 8, ["title", "subtitle"]), r(g, {
          modelValue: e(s),
          "onUpdate:modelValue": n[0] || (n[0] = k => j(s) ? s.value = k : null),
          status: e(d).status,
          caption: e(d).caption,
          size: e(z).COMPACT,
          prefix: "t.me/",
          class: "link-input",
          onInput: n[1] || (n[1] = k => o.value = c)
        }, L({
          label: p(() => [_("div", ae, [n[3] || (n[3] = _("img", {
            src: K,
            alt: "icon",
            width: "14",
            height: "14"
          }, null, -1)), _("span", ie, B(("t" in t ? t.t : e(a))("tribes.new.field_tg.label")), 1)])]),
          _: 2
        }, [e(d).linkToTribe ? {
          name: "label-right",
          fn: p(() => [r(v, {
            class: "link-to-chat",
            to: e(d).linkToTribe
          }, {
            default: p(() => [_("span", null, B(("t" in t ? t.t : e(a))("tribes.new.field_tg.link_to_chat")), 1), n[4] || (n[4] = _("img", {
              src: $,
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
            type: e(M).DROP,
            onClick: n[2] || (n[2] = k => V())
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
  le = E({
    __name: "new",
    setup(m) {
      const i = W(),
        b = () => {
          i.setMyTribeValidation(), R().replace({
            name: "tribe-join"
          })
        };
      return i.getBot(), X(() => {
        (i.tribeOrUndefined.value || !i.canCreateTribe.value) && R().replace({
          name: "tribe-slug"
        })
      }), Y().meta.back = () => R().push({
        name: "tribe-join"
      }), (N, s) => {
        const l = se,
          c = ee;
        return T(), I("div", re, [e(i).myTribeRes.value && e(i).tribeValidationBot.value ? (T(), C(l, {
          key: 0,
          "create-tribe-fn": e(Z).createTribe,
          "tribe-validation-bot": e(i).tribeValidationBot.value,
          onCreated: s[0] || (s[0] = o => b())
        }, null, 8, ["create-tribe-fn", "tribe-validation-bot"])) : (T(), C(c, {
          key: 1
        }))])
      }
    }
  }),
  de = S(le, [
    ["__scopeId", "data-v-5c731a18"]
  ]);
export {
  de as
  default
};