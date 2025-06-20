import {
  _ as D
} from "./D3iKaMGq.js";
import {
  d as y,
  j as b,
  J as g,
  o as f,
  c as N,
  b as _,
  D as O,
  a as U,
  z as R,
  e as n,
  A as i,
  B as V,
  G as L,
  p as w,
  b$ as $,
  F,
  x as K,
  aa as G,
  f as S,
  a4 as M,
  C as W,
  b_ as q,
  K as P,
  a2 as x,
  w as z,
  dC as h,
  t as H,
  ah as Y,
  cB as I,
  O as J,
  ai as B,
  dD as T,
  a9 as j,
  cT as Q,
  h as Z,
  a5 as X,
  k as ee,
  ad as k,
  dE as C,
  g as ae,
  Q as te
} from "./aUn4L-is.js";
import {
  K as ne
} from "./DdHiZ7hq.js";
import {
  a as oe
} from "./DfcTT092.js";
import {
  _ as se
} from "./lRdekDGC.js";
const re = {
    class: "account-avatar-modal"
  },
  le = y({
    __name: "AvatarModal",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      canDelete: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["update:modelValue", "avatar:changed", "avatar:progress"],
    setup(A, {
      emit: c
    }) {
      const r = A,
        l = c,
        a = b({
          get() {
            return r.modelValue
          },
          set(e) {
            l("update:modelValue", e)
          }
        }),
        s = () => a.value = !1,
        v = g(),
        d = () => {
          var e;
          return (e = v.value) == null ? void 0 : e.triggerFileUpload()
        },
        t = () => l("avatar:changed", void 0);
      return (e, o) => {
        const p = K,
          m = G,
          E = ne;
        return f(), N(F, null, [_(m, {
          modelValue: n(a),
          "onUpdate:modelValue": o[3] || (o[3] = u => w(a) ? a.value = u : null),
          title: ("t" in e ? e.t : n(i))("welcome.avatar.modal.title")
        }, {
          default: O(() => [U("div", re, [A.canDelete ? (f(), R(p, {
            key: 0,
            label: ("t" in e ? e.t : n(i))("welcome.avatar.modal.delete"),
            fill: "",
            type: n(V).SECONDARY,
            "is-danger": "",
            onClick: o[0] || (o[0] = u => (s(), t()))
          }, null, 8, ["label", "type"])) : L("", !0), _(p, {
            label: ("t" in e ? e.t : n(i))("welcome.avatar.modal.choose"),
            fill: "",
            onClick: o[1] || (o[1] = u => (s(), d()))
          }, null, 8, ["label"]), _(p, {
            label: ("t" in e ? e.t : n(i))("welcome.avatar.modal.cancel"),
            fill: "",
            type: n(V).GHOST,
            onClick: o[2] || (o[2] = u => s())
          }, null, 8, ["label", "type"])])]),
          _: 1
        }, 8, ["modelValue", "title"]), _(E, {
          ref_key: "fileUploaderRef",
          ref: v,
          accept: [n($).JPEG, n($).PNG],
          "max-file-size-mb": 10,
          "hide-ui": "",
          onUploaded: o[4] || (o[4] = u => e.$emit("avatar:changed", u)),
          "onUpdate:progress": o[5] || (o[5] = u => e.$emit("avatar:progress", u))
        }, null, 8, ["accept"])], 64)
      }
    }
  }),
  ue = S(le, [
    ["__scopeId", "data-v-0cd52560"]
  ]),
  ie = {
    class: "account-avatar"
  },
  ce = {
    class: "avatar-compose"
  },
  de = {
    class: "control",
    tabindex: "0"
  },
  me = y({
    __name: "Avatar",
    props: {
      modelValue: {
        default: void 0
      },
      modelModifiers: {}
    },
    emits: M(["update:lock-by-avatar-uploading"], ["update:modelValue"]),
    setup(A, {
      emit: c
    }) {
      const r = W(A, "modelValue"),
        l = c,
        a = g(!1),
        s = g(),
        v = b(() => {
          if (s.value && s.value.status === q.UPLOADING) return s.value.localUrl;
          if (r.value !== void 0) return typeof r.value == "string" ? r.value : r.value.url
        });
      return P(s, d => l("update:lock-by-avatar-uploading", !!d)), (d, t) => {
        const e = D,
          o = ue,
          p = x("activate");
        return f(), N("div", ie, [U("div", ce, [_(e, {
          "override-avatar-url": n(v),
          onOnImageError: t[0] || (t[0] = m => r.value = void 0)
        }, null, 8, ["override-avatar-url"]), z((f(), N("div", de, [t[4] || (t[4] = U("img", {
          src: h,
          alt: "Edit icon"
        }, null, -1)), U("span", null, H(("t" in d ? d.t : n(i))("welcome.avatar.edit")), 1)])), [
          [p, () => a.value = !0]
        ])]), _(o, {
          modelValue: n(a),
          "onUpdate:modelValue": t[1] || (t[1] = m => w(a) ? a.value = m : null),
          "can-delete": !!r.value,
          "onAvatar:changed": t[2] || (t[2] = m => r.value = m),
          "onAvatar:progress": t[3] || (t[3] = m => s.value = m)
        }, null, 8, ["modelValue", "can-delete"])])
      }
    }
  }),
  pe = S(me, [
    ["__scopeId", "data-v-02d5f2a9"]
  ]),
  ve = y({
    __name: "UsernameInput",
    emits: ["update:username"],
    setup(A, {
      emit: c
    }) {
      const r = c,
        l = g(""),
        a = g("WAITING"),
        s = b(() => {
          switch (a.value) {
            case "WAITING":
              return {
                status: I.REGULAR
              };
            case "SUCCESS":
              return {
                status: I.SUCCESS, caption: i("welcome.username.input.caption.success")
              };
            case "TAKEN":
              return {
                status: I.ERROR, caption: i("welcome.username.input.caption.already_taken")
              };
            case "INVALID":
              return {
                status: I.ERROR, caption: i("welcome.username.input.caption.invalid")
              };
            case "UNKNOWN":
              return {
                status: I.ERROR, caption: i("welcome.username.input.caption.unknown_error")
              };
            default:
              throw a.value, Y("Invalid stage")
          }
        }),
        v = async () => {
          const t = l.value;
          if (!t) return;
          const e = await B.checkUsername(t);
          if (e.err) {
            e.message === T.ERROR.USERNAME_INVALID ? a.value = "INVALID" : e.message === T.ERROR.USERNAME_TAKEN ? a.value = "TAKEN" : a.value = "UNKNOWN";
            return
          }
          a.value = "SUCCESS", r("update:username", t)
        }, {
          debouncedFunction: d
        } = J(v, 750);
      return P(l, () => {
        a.value = "WAITING", r("update:username", void 0), d()
      }), (t, e) => {
        const o = oe;
        return f(), R(o, {
          modelValue: n(l),
          "onUpdate:modelValue": e[0] || (e[0] = p => w(l) ? l.value = p : null),
          placeholder: ("t" in t ? t.t : n(i))("welcome.username.input.placeholder"),
          label: ("t" in t ? t.t : n(i))("welcome.username.input.label"),
          class: "account-username-input",
          status: n(s).status,
          caption: n(s).caption
        }, null, 8, ["modelValue", "placeholder", "label", "status", "caption"])
      }
    }
  }),
  _e = S(ve, [
    ["__scopeId", "data-v-78c9ccb1"]
  ]),
  fe = {
    class: "pages-welcome-screen-username"
  },
  Ae = ["innerHTML"],
  ge = {
    class: "profile"
  },
  Ue = y({
    __name: "ScreenUsername",
    props: {
      tgAvatarUrl: {
        type: String,
        default: void 0
      }
    },
    emits: ["continue"],
    setup(A, {
      emit: c
    }) {
      const r = A,
        l = c,
        a = g({
          avatar: r.tgAvatarUrl,
          username: void 0
        }),
        s = () => {
          const t = (() => {
            if (a.value.avatar !== void 0) return typeof a.value.avatar == "string" ? a.value.avatar : a.value.avatar.url
          })();
          l("continue", {
            username: Q(a.value.username, "username"),
            avatar: t
          })
        },
        v = g(!1),
        d = b(() => !!a.value.username && !v.value);
      return (t, e) => {
        const o = pe,
          p = _e,
          m = K,
          E = se;
        return f(), N("div", fe, [U("div", {
          class: "title",
          innerHTML: ("t" in t ? t.t : n(i))("welcome.title")
        }, null, 8, Ae), U("div", ge, [_(o, {
          modelValue: n(a).avatar,
          "onUpdate:modelValue": e[0] || (e[0] = u => n(a).avatar = u),
          "onUpdate:lockByAvatarUploading": e[1] || (e[1] = u => v.value = u)
        }, null, 8, ["modelValue"]), _(p, {
          "onUpdate:username": e[2] || (e[2] = u => n(a).username = u)
        })]), _(E, null, {
          default: O(() => [_(m, {
            label: ("t" in t ? t.t : n(i))("base.continue"),
            fill: "",
            size: n(j).LARGE,
            "has-continue-icon": "",
            disabled: !n(d),
            onClick: e[3] || (e[3] = u => s())
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        })])
      }
    }
  }),
  Ee = S(Ue, [
    ["__scopeId", "data-v-7fe250a0"]
  ]),
  Ie = {
    class: "pages-welcome-welcome"
  },
  Ne = y({
    __name: "Welcome",
    setup(A) {
      const c = Z().$webApp,
        r = X(),
        l = ee().external.welcome,
        a = c.dataUnsafe.query.tribe ? "tribe" : c.dataUnsafe.query.src === "qr" ? "qr" : c.dataUnsafe.query.ref ? "referral" : "direct",
        s = g("LOADING");
      (async () => {
        if (!l.has.value) {
          r.tutorial.usernameStep(), s.value = "USERNAME";
          return
        }
        await l.apply(), r.tutorial.accountCreated({
          username: "auto",
          avatar: !1,
          source: a
        }), k().replace(C())
      })();
      const d = b(() => {
          var o;
          const e = (o = c.dataUnsafe.user) == null ? void 0 : o.id;
          if (e) return B.getTgAvatarUrl(e)
        }),
        t = async e => {
          if (s.value = "LOADING", (await l.createAccount({
              username: e.username,
              avatarFileKey: e.avatar
            })).err) {
            ae().error("Failed to create account"), s.value = "USERNAME";
            return
          }
          r.tutorial.accountCreated({
            username: "manual",
            avatar: !!e.avatar,
            source: a
          }), k().replace(C())
        };
      return (e, o) => {
        const p = Ee,
          m = te;
        return f(), N("div", Ie, [n(s) === "USERNAME" ? (f(), R(p, {
          key: "onboarding",
          "tg-avatar-url": n(d),
          onContinue: o[0] || (o[0] = E => t(E))
        }, null, 8, ["tg-avatar-url"])) : (f(), R(m, {
          key: 1
        }))])
      }
    }
  }),
  Ve = S(Ne, [
    ["__scopeId", "data-v-59344a16"]
  ]);
export {
  Ve as _
};