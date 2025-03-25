import {
  _ as M
} from "./wOye_MSZ.js";
import {
  d as I,
  j as S,
  K as A,
  o as f,
  c as E,
  b as _,
  H as O,
  a as b,
  G as R,
  e as n,
  z as u,
  B as V,
  D as K,
  p as k,
  bV as $,
  F,
  x as L,
  aA as G,
  f as w,
  an as W,
  ao as h,
  bT as x,
  aM as B,
  N as q,
  w as z,
  dk as H,
  t as Y,
  V as j,
  ct as y,
  ab as J,
  W as D,
  dl as T,
  Y as Z,
  U as Q,
  dm as X,
  cL as ee,
  h as ae,
  $ as te,
  k as ne,
  ac as P,
  dn as C,
  g as oe
} from "./Cdrd5uYj.js";
import {
  K as se
} from "./CecBW2lq.js";
import {
  _ as re
} from "./CHXfFDR_.js";
import {
  _ as le
} from "./BEFJCiIm.js";
import {
  _ as ue
} from "./Conyz2zC.js";
const ie = {
    class: "account-avatar-modal"
  },
  ce = I({
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
    setup(g, {
      emit: i
    }) {
      const r = g,
        l = i,
        t = S({
          get() {
            return r.modelValue
          },
          set(e) {
            l("update:modelValue", e)
          }
        }),
        s = () => t.value = !1,
        p = A(),
        c = () => {
          var e;
          return (e = p.value) == null ? void 0 : e.triggerFileUpload()
        },
        o = () => l("avatar:changed", void 0);
      return (e, a) => {
        const m = L,
          d = G,
          N = se;
        return f(), E(F, null, [_(d, {
          modelValue: n(t),
          "onUpdate:modelValue": a[3] || (a[3] = v => k(t) ? t.value = v : null),
          title: ("t" in e ? e.t : n(u))("welcome.avatar.modal.title")
        }, {
          default: O(() => [b("div", ie, [g.canDelete ? (f(), R(m, {
            key: 0,
            label: ("t" in e ? e.t : n(u))("welcome.avatar.modal.delete"),
            fill: "",
            type: n(V).SECONDARY,
            "is-danger": "",
            onClick: a[0] || (a[0] = v => (s(), o()))
          }, null, 8, ["label", "type"])) : K("", !0), _(m, {
            label: ("t" in e ? e.t : n(u))("welcome.avatar.modal.choose"),
            fill: "",
            onClick: a[1] || (a[1] = v => (s(), c()))
          }, null, 8, ["label"]), _(m, {
            label: ("t" in e ? e.t : n(u))("welcome.avatar.modal.cancel"),
            fill: "",
            type: n(V).GHOST,
            onClick: a[2] || (a[2] = v => s())
          }, null, 8, ["label", "type"])])]),
          _: 1
        }, 8, ["modelValue", "title"]), _(N, {
          ref_key: "fileUploaderRef",
          ref: p,
          accept: [n($).JPEG, n($).PNG],
          "max-file-size-mb": 10,
          "hide-ui": "",
          onUploaded: a[4] || (a[4] = v => e.$emit("avatar:changed", v)),
          "onUpdate:progress": a[5] || (a[5] = v => e.$emit("avatar:progress", v))
        }, null, 8, ["accept"])], 64)
      }
    }
  }),
  de = w(ce, [
    ["__scopeId", "data-v-0cd52560"]
  ]),
  me = {
    class: "account-avatar"
  },
  pe = {
    class: "avatar-compose"
  },
  ve = {
    class: "control",
    tabindex: "0"
  },
  _e = I({
    __name: "Avatar",
    props: {
      modelValue: {
        default: void 0
      },
      modelModifiers: {}
    },
    emits: W(["update:lock-by-avatar-uploading"], ["update:modelValue"]),
    setup(g, {
      emit: i
    }) {
      const r = h(g, "modelValue"),
        l = i,
        t = A(!1),
        s = A(),
        p = S(() => {
          if (s.value && s.value.status === x.UPLOADING) return s.value.localUrl;
          if (r.value !== void 0) return typeof r.value == "string" ? r.value : r.value.url
        });
      return B(s, c => l("update:lock-by-avatar-uploading", !!c)), (c, o) => {
        const e = M,
          a = de,
          m = q("activate");
        return f(), E("div", me, [b("div", pe, [_(e, {
          "override-avatar-url": n(p),
          onOnImageError: o[0] || (o[0] = d => r.value = void 0)
        }, null, 8, ["override-avatar-url"]), z((f(), E("div", ve, [o[4] || (o[4] = b("img", {
          src: H,
          alt: "Edit icon"
        }, null, -1)), b("span", null, Y(("t" in c ? c.t : n(u))("welcome.avatar.edit")), 1)])), [
          [m, () => t.value = !0]
        ])]), _(a, {
          modelValue: n(t),
          "onUpdate:modelValue": o[1] || (o[1] = d => k(t) ? t.value = d : null),
          "can-delete": !!r.value,
          "onAvatar:changed": o[2] || (o[2] = d => r.value = d),
          "onAvatar:progress": o[3] || (o[3] = d => s.value = d)
        }, null, 8, ["modelValue", "can-delete"])])
      }
    }
  }),
  fe = w(_e, [
    ["__scopeId", "data-v-02d5f2a9"]
  ]),
  ge = I({
    __name: "UsernameInput",
    emits: ["update:username"],
    setup(g, {
      emit: i
    }) {
      const r = i,
        l = A(""),
        t = A("WAITING"),
        s = S(() => {
          switch (t.value) {
            case "WAITING":
              return {
                status: y.REGULAR
              };
            case "SUCCESS":
              return {
                status: y.SUCCESS, caption: u("welcome.username.input.caption.success")
              };
            case "TAKEN":
              return {
                status: y.ERROR, caption: u("welcome.username.input.caption.already_taken")
              };
            case "INVALID":
              return {
                status: y.ERROR, caption: u("welcome.username.input.caption.invalid")
              };
            case "UNKNOWN":
              return {
                status: y.ERROR, caption: u("welcome.username.input.caption.unknown_error")
              };
            default:
              throw t.value, j("Invalid stage")
          }
        }),
        p = async () => {
          const o = l.value;
          if (!o) return;
          const e = await D.checkUsername(o);
          if (e.err) {
            e.message === T.ERROR.USERNAME_INVALID ? t.value = "INVALID" : e.message === T.ERROR.USERNAME_TAKEN ? t.value = "TAKEN" : t.value = "UNKNOWN";
            return
          }
          t.value = "SUCCESS", r("update:username", o)
        }, {
          debouncedFunction: c
        } = J(p, 750);
      return B(l, () => {
        t.value = "WAITING", r("update:username", void 0), c()
      }), (o, e) => {
        const a = re;
        return f(), R(a, {
          modelValue: n(l),
          "onUpdate:modelValue": e[0] || (e[0] = m => k(l) ? l.value = m : null),
          placeholder: ("t" in o ? o.t : n(u))("welcome.username.input.placeholder"),
          label: ("t" in o ? o.t : n(u))("welcome.username.input.label"),
          class: "account-username-input",
          status: n(s).status,
          caption: n(s).caption
        }, null, 8, ["modelValue", "placeholder", "label", "status", "caption"])
      }
    }
  }),
  Ae = w(ge, [
    ["__scopeId", "data-v-78c9ccb1"]
  ]),
  Ue = {
    class: "pages-welcome-screen-username"
  },
  be = ["innerHTML"],
  Ee = {
    key: 0,
    src: X,
    alt: "Pokras background text",
    class: "pokras-bg-text",
    width: "275",
    height: "125"
  },
  Ne = {
    class: "profile"
  },
  ye = I({
    __name: "ScreenUsername",
    props: {
      tgAvatarUrl: {
        type: String,
        default: void 0
      }
    },
    emits: ["continue"],
    setup(g, {
      emit: i
    }) {
      const r = g,
        l = i,
        t = A({
          avatar: r.tgAvatarUrl,
          username: void 0
        }),
        s = () => {
          const e = (() => {
            if (t.value.avatar !== void 0) return typeof t.value.avatar == "string" ? t.value.avatar : t.value.avatar.url
          })();
          l("continue", {
            username: ee(t.value.username, "username"),
            avatar: e
          })
        },
        p = A(!1),
        c = S(() => !!t.value.username && !p.value),
        o = Z().internal.isPokrasTheme;
      return (e, a) => {
        const m = fe,
          d = Ae,
          N = L,
          v = le;
        return f(), E("div", Ue, [b("div", {
          class: "title",
          innerHTML: ("t" in e ? e.t : n(u))("welcome.title")
        }, null, 8, be), n(o) ? (f(), E("img", Ee)) : K("", !0), b("div", Ne, [_(m, {
          modelValue: n(t).avatar,
          "onUpdate:modelValue": a[0] || (a[0] = U => n(t).avatar = U),
          "onUpdate:lockByAvatarUploading": a[1] || (a[1] = U => p.value = U)
        }, null, 8, ["modelValue"]), _(d, {
          "onUpdate:username": a[2] || (a[2] = U => n(t).username = U)
        })]), _(v, null, {
          default: O(() => [_(N, {
            label: ("t" in e ? e.t : n(u))("base.continue"),
            fill: "",
            size: n(Q).LARGE,
            "has-continue-icon": "",
            disabled: !n(c),
            onClick: a[3] || (a[3] = U => s())
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        })])
      }
    }
  }),
  Ie = w(ye, [
    ["__scopeId", "data-v-4a1c597a"]
  ]),
  Se = {
    class: "pages-welcome-welcome"
  },
  we = I({
    __name: "Welcome",
    setup(g) {
      const i = ae().$webApp,
        r = te(),
        l = ne().external.welcome,
        t = i.dataUnsafe.query.tribe ? "tribe" : i.dataUnsafe.query.src === "qr" ? "qr" : i.dataUnsafe.query.ref ? "referral" : "direct",
        s = A("LOADING");
      (async () => {
        if (!l.has.value) {
          r.tutorial.usernameStep(), s.value = "USERNAME";
          return
        }
        await l.apply(), r.tutorial.accountCreated({
          username: "auto",
          avatar: !1,
          source: t
        }), P().replace(C())
      })();
      const c = S(() => {
          var a;
          const e = (a = i.dataUnsafe.user) == null ? void 0 : a.id;
          if (e) return D.getTgAvatarUrl(e)
        }),
        o = async e => {
          if (s.value = "LOADING", (await l.createAccount({
              username: e.username,
              avatarFileKey: e.avatar
            })).err) {
            oe().error("Failed to create account"), s.value = "USERNAME";
            return
          }
          r.tutorial.accountCreated({
            username: "manual",
            avatar: !!e.avatar,
            source: t
          }), P().replace(C())
        };
      return (e, a) => {
        const m = Ie,
          d = ue;
        return f(), E("div", Se, [n(s) === "USERNAME" ? (f(), R(m, {
          key: "onboarding",
          "tg-avatar-url": n(c),
          onContinue: a[0] || (a[0] = N => o(N))
        }, null, 8, ["tg-avatar-url"])) : (f(), R(d, {
          key: 1
        }))])
      }
    }
  }),
  Ce = w(we, [
    ["__scopeId", "data-v-59344a16"]
  ]);
export {
  Ce as _
};