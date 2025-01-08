import {
  d as r,
  o as s,
  G as i,
  I as d,
  bk as n,
  a as t,
  t as o,
  n as _,
  e as m,
  N as h,
  D as u,
  _ as g,
  J as p,
  f
} from "./DxboYIav.js";
const b = {
    class: "title-balance"
  },
  v = {
    class: "title"
  },
  B = {
    class: "value"
  },
  k = {
    class: "right-slot"
  },
  y = r({
    __name: "TribeListItemTemplate",
    props: {
      title: {
        type: String,
        required: !0
      },
      balance: {
        type: Object,
        required: !0
      },
      balanceHighlighted: {
        type: Boolean,
        default: !1
      },
      link: {
        type: String,
        default: void 0
      }
    },
    setup(e) {
      return (a, C) => {
        const l = g,
          c = p;
        return s(), i(c, {
          class: "pages-tribe-list-item-template",
          to: e.link
        }, {
          default: d(() => [n(a.$slots, "image", {}, void 0, !0), t("div", b, [t("div", v, o(e.title), 1), t("div", {
            class: _(["balance", {
              "is-highlighted": e.balanceHighlighted
            }])
          }, [t("span", B, o(("formatBp" in a ? a.formatBp : m(h))(e.balance)) + " BP ", 1), e.balanceHighlighted ? (s(), i(l, {
            key: 0,
            name: "circle-lightning",
            class: "icon"
          })) : u("", !0)], 2)]), t("div", k, [n(a.$slots, "right", {}, void 0, !0)])]),
          _: 3
        }, 8, ["to"])
      }
    }
  }),
  N = f(y, [
    ["__scopeId", "data-v-9c4a0bc6"]
  ]);
export {
  N as _
};