import {
  _ as A,
  a as L
} from "./DkJsR-RZ.js";
import {
  d as E,
  L as y,
  c7 as u,
  z as a,
  j as x,
  o as T,
  c as N,
  a as c,
  t as B,
  e,
  b as r,
  I as p,
  bM as U,
  cK as $,
  cL as K,
  p as j,
  bL as D,
  am as z,
  W as M,
  B as F,
  ac as R,
  J as G,
  x as q,
  f as S,
  aD as W,
  bI as X,
  R as Y,
  G as C,
  X as Z
} from "./CVKQB8Rv.js";
import {
  a as H
} from "./DW_Q05yW.js";
import {
  _ as J
} from "./D5BIvriS.js";
import {
  _ as Q
} from "./DHPBEK3u.js";
import {
  _ as ee
} from "./XkP0CWxk.js";
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
        I = i,
        s = y(""),
        l = y(!1),
        _ = {
          status: u.REGULAR,
          caption: a("tribes.new.field_tg.caption_default")
        },
        o = y(_),
        d = x(() => l.value ? {
          status: u.LOADING
        } : o.value),
        V = async () => {
          if (l.value) return;
          l.value = !0, o.value = _;
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
          I("created")
        };
      return (t, n) => {
        const w = A,
          f = L,
          v = G,
          g = H,
          O = J,
          P = q,
          h = Q;
        return T(), N("div", te, [c("div", ne, B(("t" in t ? t.t : e(a))("tribes.new.title")), 1), r(f, {
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
          size: e(D).COMPACT,
          prefix: "t.me/",
          class: "link-input",
          onInput: n[1] || (n[1] = k => o.value = _)
        }, U({
          label: p(() => [c("div", ae, [n[3] || (n[3] = c("img", {
            src: K,
            alt: "icon",
            width: "14",
            height: "14"
          }, null, -1)), c("span", ie, B(("t" in t ? t.t : e(a))("tribes.new.field_tg.label")), 1)])]),
          _: 2
        }, [e(d).linkToTribe ? {
          name: "label-right",
          fn: p(() => [r(v, {
            class: "link-to-chat",
            to: e(d).linkToTribe
          }, {
            default: p(() => [c("span", null, B(("t" in t ? t.t : e(a))("tribes.new.field_tg.link_to_chat")), 1), n[4] || (n[4] = c("img", {
              src: $,
              alt: "Chevron right"
            }, null, -1))]),
            _: 1
          }, 8, ["to"])]),
          key: "0"
        } : void 0]), 1032, ["modelValue", "status", "caption", "size"]), r(h, null, {
          default: p(() => [r(O, {
            image: ("imgResolver" in t ? t.imgResolver : e(z))("emoji/Star"),
            text: ("t" in t ? t.t : e(a))("tribes.new.note")
          }, null, 8, ["image", "text"]), r(P, {
            label: ("t" in t ? t.t : e(a))("tribes.new.create_btn"),
            fill: "",
            size: e(M).LARGE,
            class: "create-btn",
            type: e(F).DROP,
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
      }), (I, s) => {
        const l = se,
          _ = ee;
        return T(), N("div", re, [e(i).myTribeRes.value && e(i).tribeValidationBot.value ? (T(), C(l, {
          key: 0,
          "create-tribe-fn": e(Z).createTribe,
          "tribe-validation-bot": e(i).tribeValidationBot.value,
          onCreated: s[0] || (s[0] = o => b())
        }, null, 8, ["create-tribe-fn", "tribe-validation-bot"])) : (T(), C(_, {
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