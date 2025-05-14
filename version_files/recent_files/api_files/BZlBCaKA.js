import {
  d as f,
  at as g,
  j as i,
  h as A,
  ai as l,
  k as U,
  T as h,
  o as c,
  c as m,
  a as p,
  t as C,
  e as s,
  w as E,
  G as N,
  n as k,
  f as x
} from "./CeLf80nu.js";
const y = {
    class: "circle"
  },
  B = {
    class: "letters"
  },
  D = ["src"],
  L = f({
    __name: "AvatarPlain",
    props: {
      overrideAvatarUrl: {
        default: void 0
      },
      small: {
        type: Boolean,
        default: !1
      },
      size: {
        default: "116px"
      }
    },
    emits: ["onImageError"],
    setup(_) {
      g(e => ({
        ef6a00a6: e.size
      }));
      const r = _,
        u = i(() => {
          var t, n;
          const e = A().$webApp.dataUnsafe.user,
            a = "X";
          if (e) {
            const d = e.last_name && ((t = l(e.last_name)) == null ? void 0 : t.toUpperCase()),
              v = (n = l(e.first_name)) == null ? void 0 : n.toUpperCase();
            return [d, v].join("") || a
          }
          return a
        }),
        o = i(() => {
          var a;
          if (r.overrideAvatarUrl) return r.overrideAvatarUrl;
          const e = (a = U().getters.getUser.value) == null ? void 0 : a.avatarUrl;
          if (e) return e
        });
      return (e, a) => {
        const t = h("img-loader");
        return c(), m("div", {
          class: k(["account-avatar-plain", {
            "is-small": e.small
          }])
        }, [p("div", y, [p("span", B, C(s(u)), 1), s(o) ? E((c(), m("img", {
          key: 0,
          src: s(o),
          alt: "Avatar",
          class: "img"
        }, null, 8, D)), [
          [t, {
            onError: () => e.$emit("onImageError")
          }]
        ]) : N("", !0)])], 2)
      }
    }
  }),
  b = x(L, [
    ["__scopeId", "data-v-a39a090c"]
  ]);
export {
  b as _
};