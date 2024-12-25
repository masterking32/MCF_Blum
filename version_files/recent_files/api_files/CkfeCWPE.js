import {
  d as A,
  y as h,
  j as m,
  h as U,
  d9 as _,
  k,
  P as y,
  o as r,
  c as o,
  a as p,
  t as C,
  e as a,
  w as E,
  C as d,
  n as P,
  da as N,
  f as x
} from "./Doz8XXSF.js";
const B = {
    class: "circle"
  },
  D = {
    class: "letters"
  },
  L = ["src"],
  S = {
    key: 0,
    src: N,
    alt: "Pokras smile",
    class: "pokras-smile"
  },
  b = A({
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
    setup(n) {
      const i = n,
        u = h().internal.isPokrasTheme,
        v = m(() => {
          var t, c;
          const e = U().$webApp.dataUnsafe.user,
            s = "X";
          if (e) {
            const f = e.last_name && ((t = _(e.last_name)) == null ? void 0 : t.toUpperCase()),
              g = (c = _(e.first_name)) == null ? void 0 : c.toUpperCase();
            return [f, g].join("") || s
          }
          return s
        }),
        l = m(() => {
          var s;
          if (i.overrideAvatarUrl) return i.overrideAvatarUrl;
          const e = (s = k().getters.getUser.value) == null ? void 0 : s.avatarUrl;
          if (e) return e
        });
      return (e, s) => {
        const t = y("img-loader");
        return r(), o("div", {
          class: P(["account-avatar-plain", {
            "is-small": n.small
          }])
        }, [p("div", B, [p("span", D, C(a(v)), 1), a(l) ? E((r(), o("img", {
          key: 0,
          src: a(l),
          alt: "Avatar",
          class: "img"
        }, null, 8, L)), [
          [t, {
            onError: () => e.$emit("onImageError")
          }]
        ]) : d("", !0)]), a(u) ? (r(), o("img", S)) : d("", !0)], 2)
      }
    }
  }),
  F = x(b, [
    ["__scopeId", "data-v-6426e691"]
  ]);
export {
  F as _
};