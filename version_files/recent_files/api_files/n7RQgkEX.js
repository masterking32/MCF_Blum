import {
  _ as M
} from "./C4bN7jmb.js";
import {
  d as N,
  j as w,
  y as A,
  o as f,
  c as y,
  b as _,
  D as O,
  a as E,
  M as R,
  e as n,
  C as u,
  B as T,
  E as K,
  p as k,
  bY as V,
  F as W,
  x as L,
  X as F,
  f as S,
  av as G,
  aw as h,
  bW as x,
  T as B,
  Q as q,
  w as Y,
  dm as z,
  t as H,
  a2 as j,
  cw as I,
  G as J,
  a3 as D,
  dn as $,
  a5 as Q,
  W as X,
  dp as Z,
  cO as ee,
  h as ae,
  a7 as te,
  k as ne,
  aa as C,
  dq as P,
  g as oe
} from "./GkJ71AXb.js";
import {
  K as se
} from "./BOvPZD5t.js";
import {
  _ as re
} from "./vEzqO8Uo.js";
import {
  _ as le
} from "./CRePYX_p.js";
import {
  _ as ue
} from "./8hy96fXN.js";
const ie = {
    class: "account-avatar-modal"
  },
  ce = N({
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
        t = w({
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
          d = F,
          b = se;
        return f(), y(W, null, [_(d, {
          modelValue: n(t),
          "onUpdate:modelValue": a[3] || (a[3] = v => k(t) ? t.value = v : null),
          title: ("t" in e ? e.t : n(u))("welcome.avatar.modal.title")
        }, {
          default: O(() => [E("div", ie, [g.canDelete ? (f(), R(m, {
            key: 0,
            label: ("t" in e ? e.t : n(u))("welcome.avatar.modal.delete"),
            fill: "",
            type: n(T).SECONDARY,
            "is-danger": "",
            onClick: a[0] || (a[0] = v => (s(), o()))
          }, null, 8, ["label", "type"])) : K("", !0), _(m, {
            label: ("t" in e ? e.t : n(u))("welcome.avatar.modal.choose"),
            fill: "",
            onClick: a[1] || (a[1] = v => (s(), c()))
          }, null, 8, ["label"]), _(m, {
            label: ("t" in e ? e.t : n(u))("welcome.avatar.modal.cancel"),
            fill: "",
            type: n(T).GHOST,
            onClick: a[2] || (a[2] = v => s())
          }, null, 8, ["label", "type"])])]),
          _: 1
        }, 8, ["modelValue", "title"]), _(b, {
          ref_key: "fileUploaderRef",
          ref: p,
          accept: [n(V).JPEG, n(V).PNG],
          "max-file-size-mb": 10,
          "hide-ui": "",
          onUploaded: a[4] || (a[4] = v => e.$emit("avatar:changed", v)),
          "onUpdate:progress": a[5] || (a[5] = v => e.$emit("avatar:progress", v))
        }, null, 8, ["accept"])], 64)
      }
    }
  }),
  de = S(ce, [
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
  _e = N({
    __name: "Avatar",
    props: {
      modelValue: {
        default: void 0
      },
      modelModifiers: {}
    },
    emits: G(["update:lock-by-avatar-uploading"], ["update:modelValue"]),
    setup(g, {
      emit: i
    }) {
      const r = h(g, "modelValue"),
        l = i,
        t = A(!1),
        s = A(),
        p = w(() => {
          if (s.value && s.value.status === x.UPLOADING) return s.value.localUrl;
          if (r.value !== void 0) return typeof r.value == "string" ? r.value : r.value.url
        });
      return B(s, c => l("update:lock-by-avatar-uploading", !!c)), (c, o) => {
        const e = M,
          a = de,
          m = q("activate");
        return f(), y("div", me, [E("div", pe, [_(e, {
          "override-avatar-url": n(p),
          onOnImageError: o[0] || (o[0] = d => r.value = void 0)
        }, null, 8, ["override-avatar-url"]), Y((f(), y("div", ve, [o[4] || (o[4] = E("img", {
          src: z,
          alt: "Edit icon"
        }, null, -1)), E("span", null, H(("t" in c ? c.t : n(u))("welcome.avatar.edit")), 1)])), [
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
  fe = S(_e, [
    ["__scopeId", "data-v-02d5f2a9"]
  ]),
  ge = N({
    __name: "UsernameInput",
    emits: ["update:username"],
    setup(g, {
      emit: i
    }) {
      const r = i,
        l = A(""),
        t = A("WAITING"),
        s = w(() => {
          switch (t.value) {
            case "WAITING":
              return {
                status: I.REGULAR
              };
            case "SUCCESS":
              return {
                status: I.SUCCESS, caption: u("welcome.username.input.caption.success")
              };
            case "TAKEN":
              return {
                status: I.ERROR, caption: u("welcome.username.input.caption.already_taken")
              };
            case "INVALID":
              return {
                status: I.ERROR, caption: u("welcome.username.input.caption.invalid")
              };
            case "UNKNOWN":
              return {
                status: I.ERROR, caption: u("welcome.username.input.caption.unknown_error")
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
            e.message === $.ERROR.USERNAME_INVALID ? t.value = "INVALID" : e.message === $.ERROR.USERNAME_TAKEN ? t.value = "TAKEN" : t.value = "UNKNOWN";
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
  Ae = S(ge, [
    ["__scopeId", "data-v-78c9ccb1"]
  ]),
  Ue = {
    class: "pages-welcome-screen-username"
  },
  Ee = ["innerHTML"],
  ye = {
    key: 0,
    src: Z,
    alt: "Pokras background text",
    class: "pokras-bg-text",
    width: "275",
    height: "125"
  },
  be = {
    class: "profile"
  },
  Ie = N({
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
        c = w(() => !!t.value.username && !p.value),
        o = Q().internal.isPokrasTheme;
      return (e, a) => {
        const m = fe,
          d = Ae,
          b = L,
          v = le;
        return f(), y("div", Ue, [E("div", {
          class: "title",
          innerHTML: ("t" in e ? e.t : n(u))("welcome.title")
        }, null, 8, Ee), n(o) ? (f(), y("img", ye)) : K("", !0), E("div", be, [_(m, {
          modelValue: n(t).avatar,
          "onUpdate:modelValue": a[0] || (a[0] = U => n(t).avatar = U),
          "onUpdate:lockByAvatarUploading": a[1] || (a[1] = U => p.value = U)
        }, null, 8, ["modelValue"]), _(d, {
          "onUpdate:username": a[2] || (a[2] = U => n(t).username = U)
        })]), _(v, null, {
          default: O(() => [_(b, {
            label: ("t" in e ? e.t : n(u))("base.continue"),
            fill: "",
            size: n(X).LARGE,
            "has-continue-icon": "",
            disabled: !n(c),
            onClick: a[3] || (a[3] = U => s())
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        })])
      }
    }
  }),
  Ne = S(Ie, [
    ["__scopeId", "data-v-4a1c597a"]
  ]),
  we = {
    class: "pages-welcome-welcome"
  },
  Se = N({
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
        }), C().replace(P())
      })();
      const c = w(() => {
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
          }), C().replace(P())
        };
      return (e, a) => {
        const m = Ne,
          d = ue;
        return f(), y("div", we, [n(s) === "USERNAME" ? (f(), R(m, {
          key: "onboarding",
          "tg-avatar-url": n(c),
          onContinue: a[0] || (a[0] = b => o(b))
        }, null, 8, ["tg-avatar-url"])) : (f(), R(d, {
          key: 1
        }))])
      }
    }
  }),
  Pe = S(Se, [
    ["__scopeId", "data-v-59344a16"]
  ]);
export {
  Pe as _
};