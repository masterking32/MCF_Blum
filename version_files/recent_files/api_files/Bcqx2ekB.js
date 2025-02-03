import {
  d as f,
  j as l,
  h as g,
  d8 as c,
  k as A,
  N as U,
  o as m,
  c as _,
  a as d,
  t as h,
  e as r,
  w as E,
  D as N,
  n as y,
  f as C
} from "./to7Fy4ae.js";
const D = {
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
        p = l(() => {
          var a, i;
          const e = g().$webApp.dataUnsafe.user,
            t = "X";
          if (e) {
            const u = e.last_name && ((a = c(e.last_name)) == null ? void 0 : a.toUpperCase()),
              v = (i = c(e.first_name)) == null ? void 0 : i.toUpperCase();
            return [u, v].join("") || t
          }
          return t
        }),
        n = l(() => {
          var t;
          if (o.overrideAvatarUrl) return o.overrideAvatarUrl;
          const e = (t = A().getters.getUser.value) == null ? void 0 : t.avatarUrl;
          if (e) return e
        });
      return (e, t) => {
        const a = U("img-loader");
        return m(), _("div", {
          class: y(["account-avatar-plain", {
            "is-small": s.small
          }])
        }, [d("div", D, [d("span", k, h(r(p)), 1), r(n) ? E((m(), _("img", {
          key: 0,
          src: r(n),
          alt: "Avatar",
          class: "img"
        }, null, 8, x)), [
          [a, {
            onError: () => e.$emit("onImageError")
          }]
        ]) : N("", !0)])], 2)
      }
    }
  }),
  S = C(B, [
    ["__scopeId", "data-v-a273e927"]
  ]);
export {
  S as _
};