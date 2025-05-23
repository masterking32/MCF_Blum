import {
  d as E,
  A as q,
  cC as x,
  o as v,
  c as P,
  a8 as J,
  l as Q,
  f as D,
  V as z,
  W as X,
  y as g,
  j as R,
  C as _,
  c1 as ee,
  cw as oe,
  b as f,
  e,
  p as te,
  a1 as w,
  x as M,
  al as L,
  cB as T,
  am as W,
  an as O,
  ag as se,
  ai as B,
  N as V,
  af as G,
  aq as Y,
  ac as A,
  $ as ae,
  D as r,
  a as y,
  a0 as N,
  m as C,
  t as k,
  ao as ne,
  a2 as I,
  F as ie
} from "./BN1oUHf5.js";
import {
  F as le,
  c as re,
  _ as U
} from "./CWniNr4v.js";
const ce = {
    ref: "turnstile",
    class: "kit-turnstile"
  },
  me = E({
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
    setup(h, {
      emit: l
    }) {
      const n = l,
        c = q("turnstile");
      return x({
        script: [{
          src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
          async: !0,
          defer: !0,
          onload: () => {
            if (!c.value) throw J("Turnstile container not found");
            window.turnstile.render(c.value, {
              sitekey: Q().public.CF_TURNSTILE_SITE_KEY,
              callback: o => n("resolve", o),
              "error-callback": () => n("reject"),
              theme: h.theme,
              appearance: h.appearance
            })
          }
        }]
      }), (o, m) => (v(), P("div", ce, null, 512))
    }
  }),
  H = D(me, [
    ["__scopeId", "data-v-76ba8ed7"]
  ]),
  ue = ["gamil.com", "gmai.com", "rambler.ru", "gmail.co", "gmial.com", "gmail.con"],
  de = {
    class: "form-email"
  },
  pe = E({
    __name: "OptionEmailForm",
    props: z({
      isDisabled: {
        type: Boolean,
        default: !1
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: z(["submit"], ["update:modelValue"]),
    setup(h, {
      emit: l
    }) {
      const n = X(h, "modelValue"),
        c = l,
        s = g([{
          type: le.STRING,
          value: R({
            get: () => n.value ?? "",
            set: a => n.value = a || void 0
          }),
          props: {
            placeholder: _("secure_options.options_modal.email.placeholder"),
            size: ee.LARGE,
            type: oe.EMAIL,
            tertiary: !0,
            disabled: R(() => h.isDisabled)
          },
          validators: {
            email: {}
          },
          customValidator(a) {
            var p;
            const i = ((p = a.split("@")) == null ? void 0 : p[1]) ?? "";
            if (ue.includes(i)) return _("secure_options.options_modal.email.invalid_domain", {
              domain: i
            })
          }
        }]),
        o = g(),
        m = R(() => {
          var a;
          return ((a = o.value) == null ? void 0 : a.isFormValid) ?? !1
        }),
        d = R(() => !m.value || h.isDisabled);
      return (a, i) => {
        const p = re,
          S = M;
        return v(), P("div", de, [f(p, {
          modelValue: e(s),
          "onUpdate:modelValue": i[0] || (i[0] = t => te(s) ? s.value = t : null),
          onChannel: i[1] || (i[1] = t => o.value = t)
        }, null, 8, ["modelValue"]), f(S, {
          label: ("t" in a ? a.t : e(_))("secure_options.options_modal.email.btn"),
          fill: "",
          size: e(w).LARGE,
          disabled: e(d),
          tertiary: "",
          onClick: i[2] || (i[2] = t => c("submit"))
        }, null, 8, ["label", "size", "disabled"])])
      }
    }
  }),
  _e = D(pe, [
    ["__scopeId", "data-v-0951d96e"]
  ]),
  fe = E({
    __name: "OptionEmail",
    setup(h) {
      const l = g(!1),
        n = g(!1),
        c = L(),
        s = T(),
        {
          connectEmailAuthProvider: o,
          fetchAuthProviders: m
        } = W(),
        {
          secureOptionsModals: d
        } = O(),
        a = async () => {
          l.value = !0;
          const u = await o({
            email: s.value.options.email.form.email,
            captchaToken: s.value.options.email.form.captchaToken
          });
          if (l.value = !1, !G(u)) {
            if (u.code === Y.Forbidden) {
              n.value = !0;
              return
            }
            A().error();
            return
          }
          S(), await m(), t()
        }, i = async u => {
          s.value.options.email.form.captchaToken = u, await a()
        }, p = () => {
          n.value = !1, l.value = !1, S()
        }, S = () => {
          s.value.options.email.form.captchaToken = "", s.value.options.email.form.email = ""
        }, t = () => {
          d.main.hide(), d.emailWait.show()
        };
      return se(async () => {
        var b;
        const u = ((b = c.value) == null ? void 0 : b.hasEmail) ?? !1;
        s.value.isMainVisible && u && (d.main.hide(), await B().push({
          name: "index"
        }))
      }), (u, b) => {
        const $ = H,
          F = _e;
        return e(n) ? (v(), V($, {
          key: 0,
          appearance: "always",
          onResolve: i,
          onReject: p
        })) : (v(), V(F, {
          key: 1,
          modelValue: e(s).options.email.form.email,
          "onUpdate:modelValue": b[0] || (b[0] = K => e(s).options.email.form.email = K),
          "is-disabled": e(l),
          onSubmit: a
        }, null, 8, ["modelValue", "is-disabled"]))
      }
    }
  }),
  he = ["src"],
  ve = E({
    __name: "EmailWaitModal",
    setup(h) {
      const l = L(),
        n = T(),
        {
          secureOptionsModals: c
        } = O(),
        {
          sendEmailAuthProviderVerification: s
        } = W(),
        o = g(!1),
        m = R(() => {
          var t;
          return ((t = l.value) == null ? void 0 : t.emailMasked) ?? ""
        }),
        d = () => B().push({
          name: "index"
        }),
        a = async t => {
          const u = await s({
            captchaToken: t
          });
          if (!G(u)) {
            if (u.code === Y.Forbidden) {
              o.value = !0;
              return
            }
            A().error();
            return
          }
          A().success(_("secure_options.message.email_code_sent"))
        }, i = async () => {
          c.emailWait.hide(), await d()
        }, p = async t => {
          await a(t), o.value = !1
        }, S = () => {
          o.value = !1
        };
      return (t, u) => {
        const b = H,
          $ = ae("I18nT"),
          F = M,
          K = U,
          Z = I;
        return v(), V(Z, {
          modelValue: e(n).options.email.modals.isWaitVisible,
          "onUpdate:modelValue": u[1] || (u[1] = j => e(n).options.email.modals.isWaitVisible = j),
          onClose: d
        }, {
          default: r(() => [f(K, null, {
            header: r(() => [y("img", {
              src: ("imgResolver" in t ? t.imgResolver : e(N))("emoji/SeeNoEvilMonkey"),
              alt: "",
              class: "icon"
            }, null, 8, he)]),
            title: r(() => [C(k(("t" in t ? t.t : e(_))("secure_options.email_wait_modal.title")), 1)]),
            subTitle: r(() => [e(o) ? (v(), V(b, {
              key: 0,
              appearance: "always",
              onResolve: p,
              onReject: S
            })) : (v(), V($, {
              key: 1,
              keypath: "secure_options.email_wait_modal.subtitle"
            }, {
              email: r(() => [C(k(e(m)), 1)]),
              resend: r(() => [y("a", {
                href: "#",
                class: "link",
                onClick: u[0] || (u[0] = ne(j => a(), ["prevent"]))
              }, k(("t" in t ? t.t : e(_))("secure_options.email_wait_modal.subtitle_resend")), 1)]),
              _: 1
            }))]),
            footer: r(() => [f(F, {
              label: ("t" in t ? t.t : e(_))("secure_options.email_wait_modal.btn"),
              fill: "",
              size: e(w).LARGE,
              onClick: i
            }, null, 8, ["label", "size"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  be = ["src"],
  Se = E({
    __name: "EmailSuccessModal",
    setup(h) {
      const l = T(),
        {
          secureOptionsModals: n
        } = O(),
        c = () => B().push({
          name: "index"
        }),
        s = async () => {
          n.emailSuccess.hide(), await c()
        };
      return (o, m) => {
        const d = M,
          a = U,
          i = I;
        return v(), V(i, {
          modelValue: e(l).options.email.modals.isSuccessVisible,
          "onUpdate:modelValue": m[0] || (m[0] = p => e(l).options.email.modals.isSuccessVisible = p),
          onClose: c
        }, {
          default: r(() => [f(a, null, {
            header: r(() => [y("img", {
              src: ("imgResolver" in o ? o.imgResolver : e(N))("special/big-green-check-transparent", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, be)]),
            title: r(() => [C(k(("t" in o ? o.t : e(_))("secure_options.email_success_modal.title")), 1)]),
            subTitle: r(() => [C(k(("t" in o ? o.t : e(_))("secure_options.email_success_modal.subtitle")), 1)]),
            footer: r(() => [f(d, {
              label: ("t" in o ? o.t : e(_))("secure_options.email_success_modal.btn"),
              fill: "",
              size: e(w).LARGE,
              onClick: s
            }, null, 8, ["label", "size"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Ve = ["src"],
  ke = E({
    __name: "EmailErrorModal",
    setup(h) {
      const l = T(),
        {
          secureOptionsModals: n
        } = O(),
        c = () => B().push({
          name: "index"
        }),
        s = async () => {
          n.emailError.hide(), await c()
        };
      return (o, m) => {
        const d = M,
          a = U,
          i = I;
        return v(), V(i, {
          modelValue: e(l).options.email.modals.isErrorVisible,
          "onUpdate:modelValue": m[0] || (m[0] = p => e(l).options.email.modals.isErrorVisible = p),
          onClose: c
        }, {
          default: r(() => [f(a, null, {
            header: r(() => [y("img", {
              src: ("imgResolver" in o ? o.imgResolver : e(N))("special/big-red-cross", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, Ve)]),
            title: r(() => [C(k(("t" in o ? o.t : e(_))("secure_options.email_error_modal.title")), 1)]),
            subTitle: r(() => [C(k(("t" in o ? o.t : e(_))("secure_options.email_error_modal.subtitle")), 1)]),
            footer: r(() => [f(d, {
              label: ("t" in o ? o.t : e(_))("secure_options.email_error_modal.btn"),
              fill: "",
              size: e(w).LARGE,
              onClick: s
            }, null, 8, ["label", "size"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Re = E({
    __name: "SecureOptionsModal",
    setup(h) {
      const l = _("secure_options.options_modal.email.title"),
        n = T(),
        {
          secureOptionsModals: c
        } = O(),
        s = () => {
          c.main.hide()
        };
      return (o, m) => {
        const d = fe,
          a = I,
          i = ve,
          p = Se,
          S = ke;
        return v(), P(ie, null, [f(a, {
          modelValue: e(n).isMainVisible,
          "onUpdate:modelValue": m[0] || (m[0] = t => e(n).isMainVisible = t),
          title: e(l),
          "back-icon": "",
          "no-header-line": "",
          onBack: s
        }, {
          default: r(() => [f(d)]),
          _: 1
        }, 8, ["modelValue", "title"]), f(i), f(p), f(S)], 64)
      }
    }
  });
export {
  H as _, Re as a
};