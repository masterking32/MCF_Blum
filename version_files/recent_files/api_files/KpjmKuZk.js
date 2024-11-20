import {
  _ as B
} from "./C_aJ6USS.js";
import {
  d as E,
  F as I,
  r as g,
  a as f,
  c as k,
  k as _,
  x as O,
  b as y,
  m as w,
  e as n,
  f as i,
  Y as $,
  g as W,
  V as R,
  bQ as C,
  W as F,
  C as K,
  aS as D,
  j as N,
  ay as M,
  az as h,
  bO as G,
  av as L,
  a8 as q,
  w as x,
  d4 as z,
  t as H,
  L as Y,
  cj as b,
  am as j,
  K as V,
  d5 as P,
  u as J,
  B as Q,
  d6 as Z,
  cw as X,
  P as ee,
  ab as ae,
  S as T,
  O as te,
  J as ne
} from "./ulDqqcK5.js";
import {
  K as oe
} from "./CRTwOsOn.js";
import {
  a as se
} from "./BLhZcUo4.js";
import {
  _ as re
} from "./DfdpEqBk.js";
import {
  _ as le
} from "./CGuwd9aU.js";
const ue = {
    class: "account-avatar-modal"
  },
  ie = E({
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
    setup(U, {
      emit: u
    }) {
      const s = U,
        r = u,
        t = I({
          get() {
            return s.modelValue
          },
          set(e) {
            r("update:modelValue", e)
          }
        }),
        l = () => t.value = !1,
        m = g(),
        c = () => {
          var e;
          return (e = m.value) == null ? void 0 : e.triggerFileUpload()
        },
        o = () => r("avatar:changed", void 0);
      return (e, a) => {
        const p = K,
          d = D,
          S = oe;
        return f(), k(F, null, [_(d, {
          modelValue: n(t),
          "onUpdate:modelValue": a[3] || (a[3] = v => R(t) ? t.value = v : null),
          title: ("t" in e ? e.t : n(i))("welcome.avatar.modal.title")
        }, {
          default: O(() => [y("div", ue, [U.canDelete ? (f(), w(p, {
            key: 0,
            label: ("t" in e ? e.t : n(i))("welcome.avatar.modal.delete"),
            fill: "",
            type: n($).SECONDARY,
            "is-danger": "",
            onClick: a[0] || (a[0] = v => (l(), o()))
          }, null, 8, ["label", "type"])) : W("", !0), _(p, {
            label: ("t" in e ? e.t : n(i))("welcome.avatar.modal.choose"),
            fill: "",
            onClick: a[1] || (a[1] = v => (l(), c()))
          }, null, 8, ["label"]), _(p, {
            label: ("t" in e ? e.t : n(i))("welcome.avatar.modal.cancel"),
            fill: "",
            type: n($).GHOST,
            onClick: a[2] || (a[2] = v => l())
          }, null, 8, ["label", "type"])])]),
          _: 1
        }, 8, ["modelValue", "title"]), _(S, {
          ref_key: "fileUploaderRef",
          ref: m,
          accept: [n(C).JPEG, n(C).PNG],
          "max-file-size-mb": 10,
          "hide-ui": "",
          onUploaded: a[4] || (a[4] = v => e.$emit("avatar:changed", v)),
          "onUpdate:progress": a[5] || (a[5] = v => e.$emit("avatar:progress", v))
        }, null, 8, ["accept"])], 64)
      }
    }
  }),
  ce = N(ie, [
    ["__scopeId", "data-v-0cd52560"]
  ]),
  de = {
    class: "account-avatar"
  },
  me = {
    class: "avatar-compose"
  },
  pe = {
    class: "control",
    tabindex: "0"
  },
  ve = E({
    __name: "Avatar",
    props: {
      modelValue: {
        default: void 0
      },
      modelModifiers: {}
    },
    emits: M(["update:lock-by-avatar-uploading"], ["update:modelValue"]),
    setup(U, {
      emit: u
    }) {
      const s = h(U, "modelValue"),
        r = u,
        t = g(!1),
        l = g(),
        m = I(() => {
          if (l.value && l.value.status === G.UPLOADING) return l.value.localUrl;
          if (s.value !== void 0) return typeof s.value == "string" ? s.value : s.value.url
        });
      return L(l, c => r("update:lock-by-avatar-uploading", !!c)), (c, o) => {
        const e = B,
          a = ce,
          p = q("activate");
        return f(), k("div", de, [y("div", me, [_(e, {
          "override-avatar-url": n(m),
          onOnImageError: o[0] || (o[0] = d => s.value = void 0)
        }, null, 8, ["override-avatar-url"]), x((f(), k("div", pe, [o[4] || (o[4] = y("img", {
          src: z,
          alt: "Edit icon"
        }, null, -1)), y("span", null, H(("t" in c ? c.t : n(i))("welcome.avatar.edit")), 1)])), [
          [p, () => t.value = !0]
        ])]), _(a, {
          modelValue: n(t),
          "onUpdate:modelValue": o[1] || (o[1] = d => R(t) ? t.value = d : null),
          "can-delete": !!s.value,
          "onAvatar:changed": o[2] || (o[2] = d => s.value = d),
          "onAvatar:progress": o[3] || (o[3] = d => l.value = d)
        }, null, 8, ["modelValue", "can-delete"])])
      }
    }
  }),
  _e = N(ve, [
    ["__scopeId", "data-v-02d5f2a9"]
  ]),
  fe = E({
    __name: "UsernameInput",
    emits: ["update:username"],
    setup(U, {
      emit: u
    }) {
      const s = u,
        r = g(""),
        t = g("WAITING"),
        l = I(() => {
          switch (t.value) {
            case "WAITING":
              return {
                status: b.REGULAR
              };
            case "SUCCESS":
              return {
                status: b.SUCCESS, caption: i("welcome.username.input.caption.success")
              };
            case "TAKEN":
              return {
                status: b.ERROR, caption: i("welcome.username.input.caption.already_taken")
              };
            case "INVALID":
              return {
                status: b.ERROR, caption: i("welcome.username.input.caption.invalid")
              };
            case "UNKNOWN":
              return {
                status: b.ERROR, caption: i("welcome.username.input.caption.unknown_error")
              };
            default:
              throw t.value, Y("Invalid stage")
          }
        }),
        m = async () => {
          const o = r.value;
          if (!o) return;
          const e = await V.checkUsername({
            username: o
          });
          if (e.err) {
            e.message === P.USERNAME_INVALID ? t.value = "INVALID" : e.message === P.USERNAME_TAKEN ? t.value = "TAKEN" : t.value = "UNKNOWN";
            return
          }
          t.value = "SUCCESS", s("update:username", o)
        }, {
          debouncedFunction: c
        } = j(m, 750);
      return L(r, () => {
        t.value = "WAITING", s("update:username", void 0), c()
      }), (o, e) => {
        const a = se;
        return f(), w(a, {
          modelValue: n(r),
          "onUpdate:modelValue": e[0] || (e[0] = p => R(r) ? r.value = p : null),
          placeholder: ("t" in o ? o.t : n(i))("welcome.username.input.placeholder"),
          label: ("t" in o ? o.t : n(i))("welcome.username.input.label"),
          class: "account-username-input",
          status: n(l).status,
          caption: n(l).caption
        }, null, 8, ["modelValue", "placeholder", "label", "status", "caption"])
      }
    }
  }),
  Ue = N(fe, [
    ["__scopeId", "data-v-2814d794"]
  ]),
  ge = {
    class: "pages-welcome-screen-username"
  },
  Ae = ["innerHTML"],
  ye = {
    key: 0,
    src: Z,
    alt: "Pokras background text",
    class: "pokras-bg-text",
    width: "275",
    height: "125"
  },
  ke = {
    class: "profile"
  },
  Se = E({
    __name: "ScreenUsername",
    props: {
      tgAvatarUrl: {
        type: String,
        default: void 0
      }
    },
    emits: ["continue"],
    setup(U, {
      emit: u
    }) {
      const s = U,
        r = u,
        t = g({
          avatar: s.tgAvatarUrl,
          username: void 0
        }),
        l = () => {
          const e = (() => {
            if (t.value.avatar !== void 0) return typeof t.value.avatar == "string" ? t.value.avatar : t.value.avatar.url
          })();
          r("continue", {
            username: X(t.value.username, "username"),
            avatar: e
          })
        },
        m = g(!1),
        c = I(() => !!t.value.username && !m.value),
        o = J().internal.isPokrasTheme;
      return (e, a) => {
        const p = _e,
          d = Ue,
          S = K,
          v = re;
        return f(), k("div", ge, [y("div", {
          class: "title",
          innerHTML: ("t" in e ? e.t : n(i))("welcome.title")
        }, null, 8, Ae), n(o) ? (f(), k("img", ye)) : W("", !0), y("div", ke, [_(p, {
          modelValue: n(t).avatar,
          "onUpdate:modelValue": a[0] || (a[0] = A => n(t).avatar = A),
          "onUpdate:lockByAvatarUploading": a[1] || (a[1] = A => m.value = A)
        }, null, 8, ["modelValue"]), _(d, {
          "onUpdate:username": a[2] || (a[2] = A => n(t).username = A)
        })]), _(v, null, {
          default: O(() => [_(S, {
            label: ("t" in e ? e.t : n(i))("base.continue"),
            fill: "",
            size: n(Q).LARGE,
            "has-continue-icon": "",
            disabled: !n(c),
            onClick: a[3] || (a[3] = A => l())
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        })])
      }
    }
  }),
  be = N(Se, [
    ["__scopeId", "data-v-4a1c597a"]
  ]),
  Ee = {
    class: "pages-welcome-welcome"
  },
  Ie = E({
    __name: "Welcome",
    setup(U) {
      const u = ee().$webApp,
        s = ae(),
        r = u.dataUnsafe.query.tribe ? "tribe" : u.dataUnsafe.query.src === "qr" ? "qr" : u.dataUnsafe.query.ref ? "referral" : "direct",
        t = g("LOADING");
      (async () => {
        const e = T().getters.userToSetAfterWelcome.value;
        if (!e) {
          s.tutorial.usernameStep(), t.value = "USERNAME";
          return
        }
        await T().setters.setTokensWithUser(e.tokenWithUser.user, e.tokenWithUser), s.tutorial.accountCreated({
          username: "auto",
          avatar: !1,
          source: r
        }), o()
      })();
      const m = I(() => {
          var a;
          const e = (a = u.dataUnsafe.user) == null ? void 0 : a.id;
          if (e) return V.getTgAvatarUrl(e)
        }),
        c = async e => {
          t.value = "LOADING";
          const a = await V.authOrCreate({
            query: u.data,
            username: e.username,
            avatarFileKey: e.avatar,
            referralToken: u.dataUnsafe.query.ref
          });
          if (a.err) {
            te().error("Failed to create account"), t.value = "USERNAME";
            return
          }
          await T().setters.setTokensWithUser(a.data.tokenWithUser.user, a.data.tokenWithUser), s.tutorial.accountCreated({
            username: "manual",
            avatar: !!e.avatar,
            source: r
          }), o()
        }, o = () => ne().replace({
          name: "daily-reward"
        });
      return (e, a) => {
        const p = be,
          d = le;
        return f(), k("div", Ee, [n(t) === "USERNAME" ? (f(), w(p, {
          key: "onboarding",
          "tg-avatar-url": n(m),
          onContinue: a[0] || (a[0] = S => c(S))
        }, null, 8, ["tg-avatar-url"])) : (f(), w(d, {
          key: 1
        }))])
      }
    }
  }),
  Ce = N(Ie, [
    ["__scopeId", "data-v-e0b76d96"]
  ]);
export {
  Ce as _
};