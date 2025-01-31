import {
  d as b,
  u as C,
  o as c,
  c as r,
  a as t,
  t as g,
  b as i,
  e as u,
  n as $,
  _ as S,
  f as k,
  g as p,
  h as w,
  i as B,
  j as D,
  r as I,
  k as y,
  l as N,
  m as R,
  w as T,
  v as E,
  p as V,
  F as x,
  q as L,
  B as M,
  s as U,
  S as q,
  x as K
} from "./CKELBEop.js";
const O = {
    class: "content"
  },
  F = {
    class: "label"
  },
  H = {
    class: "value"
  },
  Y = b({
    __name: "Copy",
    props: {
      label: {
        type: String,
        required: !0
      },
      value: {
        type: String,
        required: !0
      },
      fill: {
        type: Boolean,
        default: !1
      }
    },
    setup(n) {
      const {
        copy: d
      } = C();
      return (v, a) => {
        const l = S;
        return c(), r("div", {
          class: $(["kit-copy", {
            "is-fill": n.fill
          }])
        }, [t("div", O, [t("div", F, g(n.label), 1), t("div", H, g(n.value), 1)]), i(l, {
          name: "copy",
          class: "icon",
          onClick: a[0] || (a[0] = m => u(d)(n.value))
        })], 2)
      }
    }
  }),
  h = k(Y, [
    ["__scopeId", "data-v-323a9fac"]
  ]),
  j = {
    class: "debug-page page"
  },
  z = {
    class: "items"
  },
  G = ["value"],
  P = b({
    __name: "debug",
    setup(n) {
      p().info("Debug page loaded");
      const {
        copy: d
      } = C(), v = w().$webApp, a = B(), l = D({
        get: () => a.debug.store.get(),
        set: s => {
          a.debug.store.set(s), I({
            force: !0
          })
        }
      }), m = async () => {
        p().info("Destroying user"), await U.delete({
          url: "/user",
          service: q.USER
        }), v.close()
      }, A = () => {
        p().info("Copying access token");
        const s = y().getters.getAccessToken.value;
        s && d(s)
      };
      return (s, e) => {
        const f = h,
          _ = K;
        return c(), r("div", j, [e[5] || (e[5] = t("div", {
          class: "title"
        }, "Debug page", -1)), t("div", z, [i(f, {
          label: "My id",
          value: ("useAuth" in s ? s.useAuth : u(y))().getters.mustGetUser.value.id
        }, null, 8, ["value"]), i(f, {
          label: "Commit hash",
          value: ("useRuntimeConfig" in s ? s.useRuntimeConfig : u(N))().public.COMMIT_HASH.substring(0, 7)
        }, null, 8, ["value"]), t("label", null, [e[4] || (e[4] = R(" Language ")), T(t("select", {
          "onUpdate:modelValue": e[0] || (e[0] = o => V(l) ? l.value = o : null)
        }, [e[3] || (e[3] = t("option", {
          value: void 0
        }, "As system", -1)), (c(!0), r(x, null, L(s.$i18n.availableLocales, o => (c(), r("option", {
          key: o,
          value: o
        }, g(o), 9, G))), 128))], 512), [
          [E, u(l)]
        ])]), i(_, {
          label: "I want to copy my access token",
          fill: "",
          onClick: e[1] || (e[1] = o => A())
        }), i(_, {
          label: "I want to destroy myself",
          type: u(M).SECONDARY,
          fill: "",
          "is-danger": "",
          onClick: e[2] || (e[2] = o => m())
        }, null, 8, ["type"])])])
      }
    }
  }),
  Q = k(P, [
    ["__scopeId", "data-v-0f58de4a"]
  ]);
export {
  Q as
  default
};