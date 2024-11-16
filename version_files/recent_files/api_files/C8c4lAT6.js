import {
  d as r,
  a as s,
  m as i,
  x as d,
  aB as n,
  b as t,
  t as o,
  n as m,
  e as _,
  q as g,
  g as h,
  N as u,
  aH as p,
  j as f
} from "./TkfSaITf.js";
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
      return (a, x) => {
        const l = u,
          c = p;
        return s(), i(c, {
          class: "pages-tribe-list-item-template",
          to: e.link
        }, {
          default: d(() => [n(a.$slots, "image", {}, void 0, !0), t("div", b, [t("div", v, o(e.title), 1), t("div", {
            class: m(["balance", {
              "is-highlighted": e.balanceHighlighted
            }])
          }, [t("span", B, o(("formatBp" in a ? a.formatBp : _(g))(e.balance)) + " BP ", 1), e.balanceHighlighted ? (s(), i(l, {
            key: 0,
            name: "circle-lightning",
            class: "icon"
          })) : h("", !0)], 2)]), t("div", k, [n(a.$slots, "right", {}, void 0, !0)])]),
          _: 3
        }, 8, ["to"])
      }
    }
  }),
  H = f(y, [
    ["__scopeId", "data-v-9c4a0bc6"]
  ]);
export {
  H as _
};