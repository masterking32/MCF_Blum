import {
  d as C,
  A as J,
  cA as Q,
  o as p,
  c as k,
  a2 as x,
  l as ee,
  f as z,
  cB as te,
  j as S,
  e,
  ac as M,
  E as w,
  av as W,
  aw as oe,
  y as g,
  C as f,
  c0 as se,
  cv as ae,
  b as h,
  p as ne,
  W as $,
  x as F,
  aE as G,
  cz as y,
  aB as H,
  aF as O,
  aj as ie,
  aa as I,
  M as E,
  a9 as Y,
  aD as Z,
  a6 as j,
  U as le,
  D as m,
  a as B,
  V as D,
  m as R,
  t as T,
  aC as re,
  X as K,
  F as ce
} from "./3CxaBBML.js";
import {
  F as ue,
  _ as me
} from "./hEOWyKdS.js";
const de = {
    ref: "turnstile",
    class: "kit-turnstile"
  },
  pe = C({
    __name: "Turnstile",
    props: {
      theme: {
        default: "dark"
      },
      appearance: {
        default: "interaction-only"
      }
    },
    emits: ["resolve", "reject"],
    setup(v, {
      emit: i
    }) {
      const l = i,
        u = J("turnstile");
      return Q({
        script: [{
          src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
          async: !0,
          defer: !0,
          onload: () => {
            if (!u.value) throw x("Turnstile container not found");
            window.turnstile.render(u.value, {
              sitekey: ee().public.CF_TURNSTILE_SITE_KEY,
              callback: t => l("resolve", t),
              "error-callback": () => l("reject"),
              theme: v.theme,
              appearance: v.appearance
            })
          }
        }]
      }), (t, r) => (p(), k("div", de, null, 512))
    }
  }),
  X = z(pe, [
    ["__scopeId", "data-v-76ba8ed7"]
  ]),
  _e = {
    class: "kit-bottom-sheet-content"
  },
  fe = {
    key: 0,
    class: "header"
  },
  he = {
    key: 1,
    class: "title"
  },
  ve = {
    key: 2,
    class: "subtitle"
  },
  be = {
    key: 3,
    class: "footer"
  },
  Se = C({
    __name: "BottomSheetContent",
    setup(v) {
      const i = te(),
        l = S(() => r("header")),
        u = S(() => r("title")),
        s = S(() => r("subTitle")),
        t = S(() => r("footer")),
        r = a => typeof i[a] == "function" && i[a]().length > 0;
      return (a, n) => (p(), k("div", _e, [e(l) ? (p(), k("div", fe, [M(a.$slots, "header", {}, void 0, !0)])) : w("", !0), e(u) ? (p(), k("div", he, [M(a.$slots, "title", {}, void 0, !0)])) : w("", !0), e(s) ? (p(), k("div", ve, [M(a.$slots, "subTitle", {}, void 0, !0)])) : w("", !0), e(t) ? (p(), k("div", be, [M(a.$slots, "footer", {}, void 0, !0)])) : w("", !0)]))
    }
  }),
  N = z(Se, [
    ["__scopeId", "data-v-8c9f245f"]
  ]),
  Ve = ["gamil.com", "gmai.com", "rambler.ru", "gmail.co", "gmial.com", "gmail.con"],
  ke = {
    class: "form-email"
  },
  Ce = C({
    __name: "OptionEmailForm",
    props: W({
      isDisabled: {
        type: Boolean,
        default: !1
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: W(["submit"], ["update:modelValue"]),
    setup(v, {
      emit: i
    }) {
      const l = oe(v, "modelValue"),
        u = i,
        s = g([{
          type: ue.STRING,
          value: S({
            get: () => l.value ?? "",
            set: n => l.value = n || void 0
          }),
          props: {
            placeholder: f("secure_options.options_modal.email.placeholder"),
            size: se.LARGE,
            type: ae.EMAIL,
            tertiary: !0,
            disabled: S(() => v.isDisabled)
          },
          validators: {
            email: {}
          },
          customValidator(n) {
            var _;
            const c = ((_ = n.split("@")) == null ? void 0 : _[1]) ?? "";
            if (Ve.includes(c)) return f("secure_options.options_modal.email.invalid_domain", {
              domain: c
            })
          }
        }]),
        t = g(),
        r = S(() => {
          var n;
          return ((n = t.value) == null ? void 0 : n.isFormValid) ?? !1
        }),
        a = S(() => !r.value || v.isDisabled);
      return (n, c) => {
        const _ = me,
          V = F;
        return p(), k("div", ke, [h(_, {
          modelValue: e(s),
          "onUpdate:modelValue": c[0] || (c[0] = o => ne(s) ? s.value = o : null),
          onChannel: c[1] || (c[1] = o => t.value = o)
        }, null, 8, ["modelValue"]), h(V, {
          label: ("t" in n ? n.t : e(f))("secure_options.options_modal.email.btn"),
          fill: "",
          size: e($).LARGE,
          disabled: e(a),
          tertiary: "",
          onClick: c[2] || (c[2] = o => u("submit"))
        }, null, 8, ["label", "size", "disabled"])])
      }
    }
  }),
  Ee = z(Ce, [
    ["__scopeId", "data-v-0951d96e"]
  ]),
  Te = C({
    __name: "OptionEmail",
    setup(v) {
      const i = g(!1),
        l = g(!1),
        u = G(),
        s = y(),
        {
          connectEmailAuthProvider: t,
          fetchAuthProviders: r
        } = H(),
        {
          secureOptionsModals: a
        } = O(),
        n = async () => {
          i.value = !0;
          const d = await t({
            email: s.value.options.email.form.email,
            captchaToken: s.value.options.email.form.captchaToken
          });
          if (i.value = !1, !Y(d)) {
            if (d.code === Z.Forbidden) {
              l.value = !0;
              return
            }
            j().error();
            return
          }
          V(), await r(), o()
        }, c = async d => {
          s.value.options.email.form.captchaToken = d, await n()
        }, _ = () => {
          l.value = !1, i.value = !1, V()
        }, V = () => {
          s.value.options.email.form.captchaToken = "", s.value.options.email.form.email = ""
        }, o = () => {
          a.main.hide(), a.emailWait.show()
        };
      return ie(async () => {
        var b;
        const d = ((b = u.value) == null ? void 0 : b.hasEmail) ?? !1;
        s.value.isMainVisible && d && (a.main.hide(), await I().push({
          name: "index"
        }))
      }), (d, b) => {
        const A = X,
          P = Ee;
        return e(l) ? (p(), E(A, {
          key: 0,
          appearance: "always",
          onResolve: c,
          onReject: _
        })) : (p(), E(P, {
          key: 1,
          modelValue: e(s).options.email.form.email,
          "onUpdate:modelValue": b[0] || (b[0] = U => e(s).options.email.form.email = U),
          "is-disabled": e(i),
          onSubmit: n
        }, null, 8, ["modelValue", "is-disabled"]))
      }
    }
  }),
  Re = ["src"],
  ge = C({
    __name: "EmailWaitModal",
    setup(v) {
      const i = G(),
        l = y(),
        {
          secureOptionsModals: u
        } = O(),
        {
          sendEmailAuthProviderVerification: s
        } = H(),
        t = g(!1),
        r = S(() => {
          var o;
          return ((o = i.value) == null ? void 0 : o.emailMasked) ?? ""
        }),
        a = () => I().push({
          name: "index"
        }),
        n = async o => {
          const d = await s({
            captchaToken: o
          });
          if (!Y(d)) {
            if (d.code === Z.Forbidden) {
              t.value = !0;
              return
            }
            j().error();
            return
          }
          j().success(f("secure_options.message.email_code_sent"))
        }, c = async () => {
          u.emailWait.hide(), await a()
        }, _ = async o => {
          await n(o), t.value = !1
        }, V = () => {
          t.value = !1
        };
      return (o, d) => {
        const b = X,
          A = le("I18nT"),
          P = F,
          U = N,
          q = K;
        return p(), E(q, {
          modelValue: e(l).options.email.modals.isWaitVisible,
          "onUpdate:modelValue": d[1] || (d[1] = L => e(l).options.email.modals.isWaitVisible = L),
          onClose: a
        }, {
          default: m(() => [h(U, null, {
            header: m(() => [B("img", {
              src: ("imgResolver" in o ? o.imgResolver : e(D))("emoji/SeeNoEvilMonkey"),
              alt: "",
              class: "icon"
            }, null, 8, Re)]),
            title: m(() => [R(T(("t" in o ? o.t : e(f))("secure_options.email_wait_modal.title")), 1)]),
            subTitle: m(() => [e(t) ? (p(), E(b, {
              key: 0,
              appearance: "always",
              onResolve: _,
              onReject: V
            })) : (p(), E(A, {
              key: 1,
              keypath: "secure_options.email_wait_modal.subtitle"
            }, {
              email: m(() => [R(T(e(r)), 1)]),
              resend: m(() => [B("a", {
                href: "#",
                class: "link",
                onClick: d[0] || (d[0] = re(L => n(), ["prevent"]))
              }, T(("t" in o ? o.t : e(f))("secure_options.email_wait_modal.subtitle_resend")), 1)]),
              _: 1
            }))]),
            footer: m(() => [h(P, {
              label: ("t" in o ? o.t : e(f))("secure_options.email_wait_modal.btn"),
              fill: "",
              size: e($).LARGE,
              onClick: c
            }, null, 8, ["label", "size"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  ye = ["src"],
  Oe = C({
    __name: "EmailSuccessModal",
    setup(v) {
      const i = y(),
        {
          secureOptionsModals: l
        } = O(),
        u = () => I().push({
          name: "index"
        }),
        s = async () => {
          l.emailSuccess.hide(), await u()
        };
      return (t, r) => {
        const a = F,
          n = N,
          c = K;
        return p(), E(c, {
          modelValue: e(i).options.email.modals.isSuccessVisible,
          "onUpdate:modelValue": r[0] || (r[0] = _ => e(i).options.email.modals.isSuccessVisible = _),
          onClose: u
        }, {
          default: m(() => [h(n, null, {
            header: m(() => [B("img", {
              src: ("imgResolver" in t ? t.imgResolver : e(D))("special/big-green-check-transparent", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, ye)]),
            title: m(() => [R(T(("t" in t ? t.t : e(f))("secure_options.email_success_modal.title")), 1)]),
            subTitle: m(() => [R(T(("t" in t ? t.t : e(f))("secure_options.email_success_modal.subtitle")), 1)]),
            footer: m(() => [h(a, {
              label: ("t" in t ? t.t : e(f))("secure_options.email_success_modal.btn"),
              fill: "",
              size: e($).LARGE,
              onClick: s
            }, null, 8, ["label", "size"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Me = ["src"],
  we = C({
    __name: "EmailErrorModal",
    setup(v) {
      const i = y(),
        {
          secureOptionsModals: l
        } = O(),
        u = () => I().push({
          name: "index"
        }),
        s = async () => {
          l.emailError.hide(), await u()
        };
      return (t, r) => {
        const a = F,
          n = N,
          c = K;
        return p(), E(c, {
          modelValue: e(i).options.email.modals.isErrorVisible,
          "onUpdate:modelValue": r[0] || (r[0] = _ => e(i).options.email.modals.isErrorVisible = _),
          onClose: u
        }, {
          default: m(() => [h(n, null, {
            header: m(() => [B("img", {
              src: ("imgResolver" in t ? t.imgResolver : e(D))("special/big-red-cross", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, Me)]),
            title: m(() => [R(T(("t" in t ? t.t : e(f))("secure_options.email_error_modal.title")), 1)]),
            subTitle: m(() => [R(T(("t" in t ? t.t : e(f))("secure_options.email_error_modal.subtitle")), 1)]),
            footer: m(() => [h(a, {
              label: ("t" in t ? t.t : e(f))("secure_options.email_error_modal.btn"),
              fill: "",
              size: e($).LARGE,
              onClick: s
            }, null, 8, ["label", "size"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Fe = C({
    __name: "SecureOptionsModal",
    setup(v) {
      const i = f("secure_options.options_modal.email.title"),
        l = y(),
        {
          secureOptionsModals: u
        } = O(),
        s = () => {
          u.main.hide()
        };
      return (t, r) => {
        const a = Te,
          n = K,
          c = ge,
          _ = Oe,
          V = we;
        return p(), k(ce, null, [h(n, {
          modelValue: e(l).isMainVisible,
          "onUpdate:modelValue": r[0] || (r[0] = o => e(l).isMainVisible = o),
          title: e(i),
          "back-icon": "",
          "no-header-line": "",
          onBack: s
        }, {
          default: m(() => [h(a)]),
          _: 1
        }, 8, ["modelValue", "title"]), h(c), h(_), h(V)], 64)
      }
    }
  });
export {
  X as _, N as a, Fe as b
};