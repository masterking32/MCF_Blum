import {
  d as f,
  as as g,
  j as i,
  h as A,
  dp as l,
  k as U,
  N as h,
  o as c,
  c as m,
  a as p,
  t as C,
  e as t,
  w as E,
  D as N,
  n as D,
  f as k
} from "./CcLbrFeo.js";
const x = {
    class: "circle"
  },
  y = {
    class: "letters"
  },
  B = ["src"],
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
        d = i(() => {
          var s, n;
          const e = A().$webApp.dataUnsafe.user,
            a = "X";
          if (e) {
            const u = e.last_name && ((s = l(e.last_name)) == null ? void 0 : s.toUpperCase()),
              v = (n = l(e.first_name)) == null ? void 0 : n.toUpperCase();
            return [u, v].join("") || a
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
        const s = h("img-loader");
        return c(), m("div", {
          class: D(["account-avatar-plain", {
            "is-small": e.small
          }])
        }, [p("div", x, [p("span", y, C(t(d)), 1), t(o) ? E((c(), m("img", {
          key: 0,
          src: t(o),
          alt: "Avatar",
          class: "img"
        }, null, 8, B)), [
          [s, {
            onError: () => e.$emit("onImageError")
          }]
        ]) : N("", !0)])], 2)
      }
    }
  }),
  b = k(L, [
    ["__scopeId", "data-v-a39a090c"]
  ]);
export {
  b as _
};