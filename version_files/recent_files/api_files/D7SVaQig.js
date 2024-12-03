import {
  d as b,
  M as C,
  a as c,
  c as r,
  b as t,
  t as g,
  k as i,
  e as u,
  n as $,
  N as S,
  j as k,
  O as p,
  P as N,
  Q as R,
  F as T,
  R as w,
  S as _,
  T as D,
  h as I,
  w as V,
  U as B,
  V as E,
  W as L,
  X as M,
  Y as U,
  Z as x,
  $ as O,
  C as K
} from "./Cu_rX_ev.js";
const Y = {
    class: "content"
  },
  q = {
    class: "label"
  },
  F = {
    class: "value"
  },
  H = b({
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
        }, [t("div", Y, [t("div", q, g(n.label), 1), t("div", F, g(n.value), 1)]), i(l, {
          name: "copy",
          class: "icon",
          onClick: a[0] || (a[0] = m => u(d)(n.value))
        })], 2)
      }
    }
  }),
  P = k(H, [
    ["__scopeId", "data-v-323a9fac"]
  ]),
  h = {
    class: "debug-page page"
  },
  j = {
    class: "items"
  },
  z = ["value"],
  G = b({
    __name: "debug",
    setup(n) {
      p().info("Debug page loaded");
      const {
        copy: d
      } = C(), v = N().$webApp, a = R(), l = T({
        get: () => a.debug.store.get(),
        set: s => {
          a.debug.store.set(s), w({
            force: !0
          })
        }
      }), m = async () => {
        p().info("Destroying user"), await x.delete({
          url: "/user",
          service: O.USER
        }), v.close()
      }, A = () => {
        p().info("Copying access token");
        const s = _().getters.getAccessToken.value;
        s && d(s)
      };
      return (s, e) => {
        const f = P,
          y = K;
        return c(), r("div", h, [e[5] || (e[5] = t("div", {
          class: "title"
        }, "Debug page", -1)), t("div", j, [i(f, {
          label: "My id",
          value: ("useAuth" in s ? s.useAuth : u(_))().getters.mustGetUser.value.id
        }, null, 8, ["value"]), i(f, {
          label: "Commit hash",
          value: ("useRuntimeConfig" in s ? s.useRuntimeConfig : u(D))().public.COMMIT_HASH.substring(0, 7)
        }, null, 8, ["value"]), t("label", null, [e[4] || (e[4] = I(" Language ")), V(t("select", {
          "onUpdate:modelValue": e[0] || (e[0] = o => E(l) ? l.value = o : null)
        }, [e[3] || (e[3] = t("option", {
          value: void 0
        }, "As system", -1)), (c(!0), r(L, null, M(s.$i18n.availableLocales, o => (c(), r("option", {
          key: o,
          value: o
        }, g(o), 9, z))), 128))], 512), [
          [B, u(l)]
        ])]), i(y, {
          label: "I want to copy my access token",
          fill: "",
          onClick: e[1] || (e[1] = o => A())
        }), i(y, {
          label: "I want to destroy myself",
          type: u(U).SECONDARY,
          fill: "",
          "is-danger": "",
          onClick: e[2] || (e[2] = o => m())
        }, null, 8, ["type"])])])
      }
    }
  }),
  W = k(G, [
    ["__scopeId", "data-v-0f58de4a"]
  ]);
export {
  W as
  default
};