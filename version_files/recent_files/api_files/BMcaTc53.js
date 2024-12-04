import {
  _ as x,
  a as A
} from "./DF5CFQqu.js";
import {
  d as E,
  r as y,
  ci as u,
  f as a,
  F as U,
  a as T,
  c as N,
  b as _,
  t as B,
  e,
  k as r,
  x as p,
  bv as $,
  cU as K,
  cV as L,
  V as j,
  bZ as D,
  ax as F,
  B as z,
  Y as M,
  J as R,
  aJ as G,
  C as Y,
  j as I,
  aO as Z,
  bV as q,
  ay as J,
  m as C,
  K as H
} from "./BPAM48h1.js";
import {
  a as W
} from "./CowfBi6h.js";
import {
  _ as X
} from "./CA8Xtp6W.js";
import {
  _ as Q
} from "./VoK4CKOe.js";
import {
  _ as ee
} from "./HRaZwbrL.js";
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
        V = i,
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
          V("created")
        };
      return (t, n) => {
        const w = x,
          f = A,
          v = G,
          g = W,
          O = X,
          P = Y,
          h = Q;
        return T(), N("div", te, [_("div", ne, B(("t" in t ? t.t : e(a))("tribes.new.title")), 1), r(f, {
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
        } : void 0]), 1032, ["modelValue", "status", "caption", "size"]), r(h, null, {
          default: p(() => [r(O, {
            image: ("imgResolver" in t ? t.imgResolver : e(F))("emoji/Star"),
            text: ("t" in t ? t.t : e(a))("tribes.new.note")
          }, null, 8, ["image", "text"]), r(P, {
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
  le = E({
    __name: "new",
    setup(m) {
      const i = Z(),
        b = () => {
          i.setMyTribeValidation(), R().replace({
            name: "tribe-join"
          })
        };
      return i.getBot(), q(() => {
        (i.tribeOrUndefined.value || !i.canCreateTribe.value) && R().replace({
          name: "tribe-slug"
        })
      }), J().meta.back = () => R().push({
        name: "tribe-join"
      }), (V, s) => {
        const l = se,
          c = ee;
        return T(), N("div", re, [e(i).myTribeRes.value && e(i).tribeValidationBot.value ? (T(), C(l, {
          key: 0,
          "create-tribe-fn": e(H).createTribe,
          "tribe-validation-bot": e(i).tribeValidationBot.value,
          onCreated: s[0] || (s[0] = o => b())
        }, null, 8, ["create-tribe-fn", "tribe-validation-bot"])) : (T(), C(c, {
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