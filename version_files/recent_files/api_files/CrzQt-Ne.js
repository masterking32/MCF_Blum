import {
  _ as A,
  a as x
} from "./BcupcHhp.js";
import {
  d as I,
  K as y,
  cc as u,
  z as a,
  j as U,
  o as g,
  c as N,
  a as c,
  t as B,
  e,
  b as r,
  H as p,
  bT as $,
  cP as K,
  cQ as L,
  p as j,
  bS as z,
  an as D,
  V as F,
  B as G,
  ad as R,
  I as M,
  x as q,
  f as S,
  aE as H,
  bP as Q,
  Q as X,
  G as C,
  X as Y
} from "./7B743EeA.js";
import {
  a as Z
} from "./DHWTYcqW.js";
import {
  _ as W
} from "./DJ1c_Q1_.js";
import {
  _ as J
} from "./CT7akwlJ.js";
import {
  _ as ee
} from "./HKUPTPvZ.js";
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
  oe = I({
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
        E = i,
        s = y(""),
        l = y(!1),
        _ = {
          status: u.REGULAR,
          caption: a("tribes.new.field_tg.caption_default")
        },
        o = y(_),
        b = U(() => l.value ? {
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
          E("created")
        };
      return (t, n) => {
        const w = A,
          f = x,
          v = M,
          T = Z,
          P = W,
          O = q,
          h = J;
        return g(), N("div", te, [c("div", ne, B(("t" in t ? t.t : e(a))("tribes.new.title")), 1), r(f, {
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
          status: e(b).status,
          caption: e(b).caption,
          size: e(z).COMPACT,
          prefix: "t.me/",
          class: "link-input",
          onInput: n[1] || (n[1] = k => o.value = _)
        }, $({
          label: p(() => [c("div", ae, [n[3] || (n[3] = c("img", {
            src: L,
            alt: "icon",
            width: "14",
            height: "14"
          }, null, -1)), c("span", ie, B(("t" in t ? t.t : e(a))("tribes.new.field_tg.label")), 1)])]),
          _: 2
        }, [e(b).linkToTribe ? {
          name: "label-right",
          fn: p(() => [r(v, {
            class: "link-to-chat",
            to: e(b).linkToTribe
          }, {
            default: p(() => [c("span", null, B(("t" in t ? t.t : e(a))("tribes.new.field_tg.link_to_chat")), 1), n[4] || (n[4] = c("img", {
              src: K,
              alt: "Chevron right"
            }, null, -1))]),
            _: 1
          }, 8, ["to"])]),
          key: "0"
        } : void 0]), 1032, ["modelValue", "status", "caption", "size"]), r(h, null, {
          default: p(() => [r(P, {
            image: ("imgResolver" in t ? t.imgResolver : e(D))("emoji/Star"),
            text: ("t" in t ? t.t : e(a))("tribes.new.note")
          }, null, 8, ["image", "text"]), r(O, {
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
  se = S(oe, [
    ["__scopeId", "data-v-2edec90a"]
  ]),
  re = {
    class: "tribe-join-new page"
  },
  le = I({
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
      }), X().meta.back = () => R().push({
        name: "tribe-join"
      }), (E, s) => {
        const l = se,
          _ = ee;
        return g(), N("div", re, [e(i).myTribeRes.value && e(i).tribeValidationBot.value ? (g(), C(l, {
          key: 0,
          "create-tribe-fn": e(Y).createTribe,
          "tribe-validation-bot": e(i).tribeValidationBot.value,
          onCreated: s[0] || (s[0] = o => d())
        }, null, 8, ["create-tribe-fn", "tribe-validation-bot"])) : (g(), C(_, {
          key: 1
        }))])
      }
    }
  }),
  be = S(le, [
    ["__scopeId", "data-v-5c731a18"]
  ]);
export {
  be as
  default
};