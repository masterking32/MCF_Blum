import {
  d as f,
  j as c,
  h as g,
  c$ as l,
  k as A,
  O as U,
  o as m,
  c as _,
  a as p,
  t as h,
  e as r,
  w as E,
  D as y,
  n as C,
  f as D
} from "./CZHgEWRg.js";
const N = {
    class: "circle"
  },
  k = {
    class: "letters"
  },
  x = ["src"],
  B = f({
    __name: "AvatarPlain",
    props: {
      overrideAvatarUrl: {
        type: String,
        default: void 0
      },
      small: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["onImageError"],
    setup(s) {
      const o = s,
        d = c(() => {
          var a, i;
          const e = g().$webApp.dataUnsafe.user,
            t = "X";
          if (e) {
            const u = e.last_name && ((a = l(e.last_name)) == null ? void 0 : a.toUpperCase()),
              v = (i = l(e.first_name)) == null ? void 0 : i.toUpperCase();
            return [u, v].join("") || t
          }
          return t
        }),
        n = c(() => {
          var t;
          if (o.overrideAvatarUrl) return o.overrideAvatarUrl;
          const e = (t = A().getters.getUser.value) == null ? void 0 : t.avatarUrl;
          if (e) return e
        });
      return (e, t) => {
        const a = U("img-loader");
        return m(), _("div", {
          class: C(["account-avatar-plain", {
            "is-small": s.small
          }])
        }, [p("div", N, [p("span", k, h(r(d)), 1), r(n) ? E((m(), _("img", {
          key: 0,
          src: r(n),
          alt: "Avatar",
          class: "img"
        }, null, 8, x)), [
          [a, {
            onError: () => e.$emit("onImageError")
          }]
        ]) : y("", !0)])], 2)
      }
    }
  }),
  S = D(B, [
    ["__scopeId", "data-v-a273e927"]
  ]);
export {
  S as _
};