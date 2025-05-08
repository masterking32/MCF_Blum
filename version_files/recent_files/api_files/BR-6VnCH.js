import {
  d as f,
  aI as g,
  j as i,
  h as A,
  af as l,
  k as U,
  T as h,
  o as c,
  c as m,
  a as p,
  t as C,
  e as t,
  w as E,
  G as N,
  n as k,
  f as x
} from "./DmEY5NHF.js";
const y = {
    class: "circle"
  },
  B = {
    class: "letters"
  },
  D = ["src"],
  I = f({
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
          var s, n;
          const e = A().$webApp.dataUnsafe.user,
            a = "X";
          if (e) {
            const d = e.last_name && ((s = l(e.last_name)) == null ? void 0 : s.toUpperCase()),
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
        const s = h("img-loader");
        return c(), m("div", {
          class: k(["account-avatar-plain", {
            "is-small": e.small
          }])
        }, [p("div", y, [p("span", B, C(t(u)), 1), t(o) ? E((c(), m("img", {
          key: 0,
          src: t(o),
          alt: "Avatar",
          class: "img"
        }, null, 8, D)), [
          [s, {
            onError: () => e.$emit("onImageError")
          }]
        ]) : N("", !0)])], 2)
      }
    }
  }),
  V = x(I, [
    ["__scopeId", "data-v-a39a090c"]
  ]);
export {
  V as _
};