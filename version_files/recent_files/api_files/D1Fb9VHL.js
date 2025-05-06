import {
  d as r,
  o as s,
  N as i,
  D as d,
  ag as n,
  a as t,
  t as o,
  n as _,
  e as m,
  R as g,
  G as h,
  _ as u,
  I as p,
  f
} from "./BtsWxTOZ.js";
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
        const l = u,
          c = p;
        return s(), i(c, {
          class: "pages-tribe-list-item-template",
          to: e.link
        }, {
          default: d(() => [n(a.$slots, "image", {}, void 0, !0), t("div", b, [t("div", v, o(e.title), 1), t("div", {
            class: _(["balance", {
              "is-highlighted": e.balanceHighlighted
            }])
          }, [t("span", B, o(("formatBp" in a ? a.formatBp : m(g))(e.balance)) + " BP ", 1), e.balanceHighlighted ? (s(), i(l, {
            key: 0,
            name: "circle-lightning",
            class: "icon"
          })) : h("", !0)], 2)]), t("div", k, [n(a.$slots, "right", {}, void 0, !0)])]),
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