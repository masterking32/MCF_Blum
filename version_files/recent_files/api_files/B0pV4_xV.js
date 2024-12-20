import {
  _ as h,
  a as A
} from "./B7RMmeKl.js";
import {
  d as N,
  G as y,
  cf as u,
  z as a,
  j as $,
  o as g,
  c as S,
  a as _,
  t as B,
  e,
  b as r,
  U as p,
  bU as x,
  cS as K,
  cT as L,
  p as j,
  bT as z,
  ao as D,
  V as G,
  B as F,
  ae as R,
  aG as M,
  x as q,
  f as V,
  aK as X,
  bP as Y,
  ap as Z,
  J as E,
  X as H
} from "./B4CS4-WO.js";
import {
  a as J
} from "./tbvojRBy.js";
import {
  _ as W
} from "./ngjfgl3R.js";
import {
  _ as Q
} from "./hK_PEfkf.js";
import {
  _ as ee
} from "./CZY9852W.js";
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
      const b = m,
        C = i,
        s = y(""),
        l = y(!1),
        c = {
          status: u.REGULAR,
          caption: a("tribes.new.field_tg.caption_default")
        },
        o = y(c),
        d = $(() => l.value ? {
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
          const n = await b.createTribeFn({
            chatName: t,
            botName: b.tribeValidationBot.name
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
          C("created")
        };
      return (t, n) => {
        const w = h,
          f = A,
          v = M,
          T = J,
          P = W,
          O = q,
          U = Q;
        return g(), S("div", te, [_("div", ne, B(("t" in t ? t.t : e(a))("tribes.new.title")), 1), r(f, {
          title: ("t" in t ? t.t : e(a))("tribes.new.bot.title"),
          subtitle: m.tribeValidationBot.name
        }, {
          default: p(() => [r(w, {
            value: m.tribeValidationBot.name
          }, null, 8, ["value"])]),
          _: 1
        }, 8, ["title", "subtitle"]), r(T, {
          modelValue: e(s),
          "onUpdate:modelValue": n[0] || (n[0] = k => j(s) ? s.value = k : null),
          status: e(d).status,
          caption: e(d).caption,
          size: e(z).COMPACT,
          prefix: "t.me/",
          class: "link-input",
          onInput: n[1] || (n[1] = k => o.value = c)
        }, x({
          label: p(() => [_("div", ae, [n[3] || (n[3] = _("img", {
            src: L,
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
              src: K,
              alt: "Chevron right"
            }, null, -1))]),
            _: 1
          }, 8, ["to"])]),
          key: "0"
        } : void 0]), 1032, ["modelValue", "status", "caption", "size"]), r(U, null, {
          default: p(() => [r(P, {
            image: ("imgResolver" in t ? t.imgResolver : e(D))("emoji/Star"),
            text: ("t" in t ? t.t : e(a))("tribes.new.note")
          }, null, 8, ["image", "text"]), r(O, {
            label: ("t" in t ? t.t : e(a))("tribes.new.create_btn"),
            fill: "",
            size: e(G).LARGE,
            class: "create-btn",
            type: e(F).DROP,
            onClick: n[2] || (n[2] = k => I())
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
      const i = X(),
        b = () => {
          i.setMyTribeValidation(), R().replace({
            name: "tribe-join"
          })
        };
      return i.getBot(), Y(() => {
        (i.tribeOrUndefined.value || !i.canCreateTribe.value) && R().replace({
          name: "tribe-slug"
        })
      }), Z().meta.back = () => R().push({
        name: "tribe-join"
      }), (C, s) => {
        const l = se,
          c = ee;
        return g(), S("div", re, [e(i).myTribeRes.value && e(i).tribeValidationBot.value ? (g(), E(l, {
          key: 0,
          "create-tribe-fn": e(H).createTribe,
          "tribe-validation-bot": e(i).tribeValidationBot.value,
          onCreated: s[0] || (s[0] = o => b())
        }, null, 8, ["create-tribe-fn", "tribe-validation-bot"])) : (g(), E(c, {
          key: 1
        }))])
      }
    }
  }),
  de = V(le, [
    ["__scopeId", "data-v-5c731a18"]
  ]);
export {
  de as
  default
};