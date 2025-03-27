import {
  d as C,
  bw as Q,
  cx as X,
  o as p,
  c as k,
  V as x,
  l as ee,
  f as j,
  cy as te,
  j as S,
  e,
  br as w,
  D as M,
  an as G,
  ao as se,
  K as R,
  z as f,
  bZ as oe,
  cs as ne,
  b as _,
  p as ae,
  U as B,
  x as I,
  ax as W,
  cw as O,
  at as H,
  ay as g,
  a8 as ie,
  ac as F,
  G as E,
  a1 as Z,
  aw as Y,
  Z as z,
  au as le,
  H as u,
  a as $,
  am as N,
  m as y,
  t as T,
  av as re,
  aA as K,
  F as ce
} from "./CCUb6gF6.js";
import {
  F as ue,
  _ as me
} from "./DtdzA_tf.js";
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
    setup(h, {
      emit: a
    }) {
      const i = a,
        c = Q("turnstile");
      return X({
        script: [{
          src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
          async: !0,
          defer: !0,
          onload: () => {
            if (!c.value) throw x("Turnstile container not found");
            window.turnstile.render(c.value, {
              sitekey: ee().public.CF_TURNSTILE_SITE_KEY,
              callback: t => i("resolve", t),
              "error-callback": () => i("reject"),
              theme: h.theme,
              appearance: h.appearance
            })
          }
        }]
      }), (t, l) => (p(), k("div", de, null, 512))
    }
  }),
  q = j(pe, [
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
    setup(h) {
      const a = te(),
        i = S(() => l("header")),
        c = S(() => l("title")),
        o = S(() => l("subTitle")),
        t = S(() => l("footer")),
        l = n => typeof a[n] == "function" && a[n]().length > 0;
      return (n, r) => (p(), k("div", _e, [e(i) ? (p(), k("div", fe, [w(n.$slots, "header", {}, void 0, !0)])) : M("", !0), e(c) ? (p(), k("div", he, [w(n.$slots, "title", {}, void 0, !0)])) : M("", !0), e(o) ? (p(), k("div", ve, [w(n.$slots, "subTitle", {}, void 0, !0)])) : M("", !0), e(t) ? (p(), k("div", be, [w(n.$slots, "footer", {}, void 0, !0)])) : M("", !0)]))
    }
  }),
  D = j(Se, [
    ["__scopeId", "data-v-8c9f245f"]
  ]),
  Ve = {
    class: "form-email"
  },
  ke = C({
    __name: "OptionEmailForm",
    props: G({
      isDisabled: {
        type: Boolean,
        default: !1
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: G(["submit"], ["update:modelValue"]),
    setup(h, {
      emit: a
    }) {
      const i = se(h, "modelValue"),
        c = a,
        o = R([{
          type: ue.STRING,
          value: S({
            get: () => i.value ?? "",
            set: r => i.value = r || void 0
          }),
          props: {
            placeholder: f("secure_options.options_modal.email.placeholder"),
            size: oe.LARGE,
            type: ne.EMAIL,
            tertiary: !0,
            disabled: S(() => h.isDisabled)
          },
          validators: {
            email: {}
          }
        }]),
        t = R(),
        l = S(() => {
          var r;
          return ((r = t.value) == null ? void 0 : r.isFormValid) ?? !1
        }),
        n = S(() => !l.value || h.isDisabled);
      return (r, m) => {
        const v = me,
          V = I;
        return p(), k("div", Ve, [_(v, {
          modelValue: e(o),
          "onUpdate:modelValue": m[0] || (m[0] = s => ae(o) ? o.value = s : null),
          onChannel: m[1] || (m[1] = s => t.value = s)
        }, null, 8, ["modelValue"]), _(V, {
          label: ("t" in r ? r.t : e(f))("secure_options.options_modal.email.btn"),
          fill: "",
          size: e(B).LARGE,
          disabled: e(n),
          tertiary: "",
          onClick: m[2] || (m[2] = s => c("submit"))
        }, null, 8, ["label", "size", "disabled"])])
      }
    }
  }),
  Ce = j(ke, [
    ["__scopeId", "data-v-28fc1a2e"]
  ]),
  Ee = C({
    __name: "OptionEmail",
    setup(h) {
      const a = R(!1),
        i = R(!1),
        c = W(),
        o = O(),
        {
          connectEmailAuthProvider: t,
          fetchAuthProviders: l
        } = H(),
        {
          secureOptionsModals: n
        } = g(),
        r = async () => {
          a.value = !0;
          const d = await t({
            email: o.value.options.email.form.email,
            captchaToken: o.value.options.email.form.captchaToken
          });
          if (a.value = !1, !Z(d)) {
            if (d.code === Y.Forbidden) {
              i.value = !0;
              return
            }
            z().error();
            return
          }
          V(), await l(), s()
        }, m = async d => {
          o.value.options.email.form.captchaToken = d, await r()
        }, v = () => {
          i.value = !1, a.value = !1, V()
        }, V = () => {
          o.value.options.email.form.captchaToken = "", o.value.options.email.form.email = ""
        }, s = () => {
          n.main.hide(), n.emailWait.show()
        };
      return ie(async () => {
        var b;
        const d = ((b = c.value) == null ? void 0 : b.hasEmail) ?? !1;
        o.value.isMainVisible && d && (n.main.hide(), await F().push({
          name: "index"
        }))
      }), (d, b) => {
        const A = q,
          P = Ce;
        return e(i) ? (p(), E(A, {
          key: 0,
          appearance: "always",
          onResolve: m,
          onReject: v
        })) : (p(), E(P, {
          key: 1,
          modelValue: e(o).options.email.form.email,
          "onUpdate:modelValue": b[0] || (b[0] = U => e(o).options.email.form.email = U),
          "is-disabled": e(a),
          onSubmit: r
        }, null, 8, ["modelValue", "is-disabled"]))
      }
    }
  }),
  Te = ["src"],
  ye = C({
    __name: "EmailWaitModal",
    setup(h) {
      const a = W(),
        i = O(),
        {
          secureOptionsModals: c
        } = g(),
        {
          sendEmailAuthProviderVerification: o
        } = H(),
        t = R(!1),
        l = S(() => {
          var s;
          return ((s = a.value) == null ? void 0 : s.emailMasked) ?? ""
        }),
        n = () => F().push({
          name: "index"
        }),
        r = async s => {
          const d = await o({
            captchaToken: s
          });
          if (!Z(d)) {
            if (d.code === Y.Forbidden) {
              t.value = !0;
              return
            }
            z().error();
            return
          }
          z().success(f("secure_options.message.email_code_sent"))
        }, m = async () => {
          c.emailWait.hide(), await n()
        }, v = async s => {
          await r(s), t.value = !1
        }, V = () => {
          t.value = !1
        };
      return (s, d) => {
        const b = q,
          A = le("I18nT"),
          P = I,
          U = D,
          J = K;
        return p(), E(J, {
          modelValue: e(i).options.email.modals.isWaitVisible,
          "onUpdate:modelValue": d[1] || (d[1] = L => e(i).options.email.modals.isWaitVisible = L),
          onClose: n
        }, {
          default: u(() => [_(U, null, {
            header: u(() => [$("img", {
              src: ("imgResolver" in s ? s.imgResolver : e(N))("emoji/SeeNoEvilMonkey"),
              alt: "",
              class: "icon"
            }, null, 8, Te)]),
            title: u(() => [y(T(("t" in s ? s.t : e(f))("secure_options.email_wait_modal.title")), 1)]),
            subTitle: u(() => [e(t) ? (p(), E(b, {
              key: 0,
              appearance: "always",
              onResolve: v,
              onReject: V
            })) : (p(), E(A, {
              key: 1,
              keypath: "secure_options.email_wait_modal.subtitle"
            }, {
              email: u(() => [y(T(e(l)), 1)]),
              resend: u(() => [$("a", {
                href: "#",
                class: "link",
                onClick: d[0] || (d[0] = re(L => r(), ["prevent"]))
              }, T(("t" in s ? s.t : e(f))("secure_options.email_wait_modal.subtitle_resend")), 1)]),
              _: 1
            }))]),
            footer: u(() => [_(P, {
              label: ("t" in s ? s.t : e(f))("secure_options.email_wait_modal.btn"),
              fill: "",
              size: e(B).LARGE,
              onClick: m
            }, null, 8, ["label", "size"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Re = ["src"],
  Oe = C({
    __name: "EmailSuccessModal",
    setup(h) {
      const a = O(),
        {
          secureOptionsModals: i
        } = g(),
        c = () => F().push({
          name: "index"
        }),
        o = async () => {
          i.emailSuccess.hide(), await c()
        };
      return (t, l) => {
        const n = I,
          r = D,
          m = K;
        return p(), E(m, {
          modelValue: e(a).options.email.modals.isSuccessVisible,
          "onUpdate:modelValue": l[0] || (l[0] = v => e(a).options.email.modals.isSuccessVisible = v),
          onClose: c
        }, {
          default: u(() => [_(r, null, {
            header: u(() => [$("img", {
              src: ("imgResolver" in t ? t.imgResolver : e(N))("special/big-green-check-transparent", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, Re)]),
            title: u(() => [y(T(("t" in t ? t.t : e(f))("secure_options.email_success_modal.title")), 1)]),
            subTitle: u(() => [y(T(("t" in t ? t.t : e(f))("secure_options.email_success_modal.subtitle")), 1)]),
            footer: u(() => [_(n, {
              label: ("t" in t ? t.t : e(f))("secure_options.email_success_modal.btn"),
              fill: "",
              size: e(B).LARGE,
              onClick: o
            }, null, 8, ["label", "size"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  ge = ["src"],
  we = C({
    __name: "EmailErrorModal",
    setup(h) {
      const a = O(),
        {
          secureOptionsModals: i
        } = g(),
        c = () => F().push({
          name: "index"
        }),
        o = async () => {
          i.emailError.hide(), await c()
        };
      return (t, l) => {
        const n = I,
          r = D,
          m = K;
        return p(), E(m, {
          modelValue: e(a).options.email.modals.isErrorVisible,
          "onUpdate:modelValue": l[0] || (l[0] = v => e(a).options.email.modals.isErrorVisible = v),
          onClose: c
        }, {
          default: u(() => [_(r, null, {
            header: u(() => [$("img", {
              src: ("imgResolver" in t ? t.imgResolver : e(N))("special/big-red-cross", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, ge)]),
            title: u(() => [y(T(("t" in t ? t.t : e(f))("secure_options.email_error_modal.title")), 1)]),
            subTitle: u(() => [y(T(("t" in t ? t.t : e(f))("secure_options.email_error_modal.subtitle")), 1)]),
            footer: u(() => [_(n, {
              label: ("t" in t ? t.t : e(f))("secure_options.email_error_modal.btn"),
              fill: "",
              size: e(B).LARGE,
              onClick: o
            }, null, 8, ["label", "size"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Be = C({
    __name: "SecureOptionsModal",
    setup(h) {
      const a = f("secure_options.options_modal.email.title"),
        i = O(),
        {
          secureOptionsModals: c
        } = g(),
        o = () => {
          c.main.hide()
        };
      return (t, l) => {
        const n = Ee,
          r = K,
          m = ye,
          v = Oe,
          V = we;
        return p(), k(ce, null, [_(r, {
          modelValue: e(i).isMainVisible,
          "onUpdate:modelValue": l[0] || (l[0] = s => e(i).isMainVisible = s),
          title: e(a),
          "back-icon": "",
          "no-header-line": "",
          onBack: o
        }, {
          default: u(() => [_(n)]),
          _: 1
        }, 8, ["modelValue", "title"]), _(m), _(v), _(V)], 64)
      }
    }
  });
export {
  q as _, D as a, Be as b
};