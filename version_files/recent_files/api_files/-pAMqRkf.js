import {
  _ as U,
  a as x
} from "./DtrdJRbm.js";
import {
  d as N,
  r as y,
  ch as u,
  f as a,
  F as A,
  a as g,
  c as V,
  b as _,
  t as B,
  e,
  k as r,
  x as p,
  bu as $,
  cT as K,
  cU as L,
  V as j,
  bY as D,
  ax as F,
  B as z,
  Y as M,
  J as R,
  aJ as Y,
  C as G,
  j as I,
  aO as q,
  bU as J,
  ay as Z,
  m as E,
  K as H
} from "./B8dH5Zvz.js";
import {
  a as W
} from "./BOz5Ia2g.js";
import {
  _ as X
} from "./Dvq_Wwre.js";
import {
  _ as Q
} from "./Dgn7poWK.js";
import {
  _ as ee
} from "./6B_Xr7uX.js";
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
        d = A(() => l.value ? {
          status: u.LOADING
        } : o.value),
        S = async () => {
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
        const w = U,
          f = x,
          v = Y,
          T = W,
          O = X,
          h = G,
          P = Q;
        return g(), V("div", te, [_("div", ne, B(("t" in t ? t.t : e(a))("tribes.new.title")), 1), r(f, {
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
          size: e(D).COMPACT,
          prefix: "t.me/",
          class: "link-input",
          onInput: n[1] || (n[1] = k => o.value = c)
        }, $({
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
        } : void 0]), 1032, ["modelValue", "status", "caption", "size"]), r(P, null, {
          default: p(() => [r(O, {
            image: ("imgResolver" in t ? t.imgResolver : e(F))("emoji/Star"),
            text: ("t" in t ? t.t : e(a))("tribes.new.note")
          }, null, 8, ["image", "text"]), r(h, {
            label: ("t" in t ? t.t : e(a))("tribes.new.create_btn"),
            fill: "",
            size: e(z).LARGE,
            class: "create-btn",
            type: e(M).DROP,
            onClick: n[2] || (n[2] = k => S())
          }, null, 8, ["label", "size", "type"])]),
          _: 1
        })])
      }
    }
  }),
  se = I(oe, [
    ["__scopeId", "data-v-2edec90a"]
  ]),
  re = {
    class: "tribe-join-new page"
  },
  le = N({
    __name: "new",
    setup(m) {
      const i = q(),
        b = () => {
          i.setMyTribeValidation(), R().replace({
            name: "tribe-join"
          })
        };
      return i.getBot(), J(() => {
        (i.tribeOrUndefined.value || !i.canCreateTribe.value) && R().replace({
          name: "tribe-slug"
        })
      }), Z().meta.back = () => R().push({
        name: "tribe-join"
      }), (C, s) => {
        const l = se,
          c = ee;
        return g(), V("div", re, [e(i).myTribeRes.value && e(i).tribeValidationBot.value ? (g(), E(l, {
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
  de = I(le, [
    ["__scopeId", "data-v-5c731a18"]
  ]);
export {
  de as
  default
};