import {
  _ as i
} from "./CY-1SgiA.js";
import {
  _ as l
} from "./Bfh3En8u.js";
import {
  d as u,
  j as c,
  ad as m,
  o as _,
  z as p,
  D as a,
  b as d,
  aq as b,
  e as f,
  f as v
} from "./CTMy7kFf.js";
const g = u({
    __name: "TribeBaseItem",
    props: {
      tribe: {
        type: Object,
        required: !0
      },
      source: {
        type: String,
        required: !0
      },
      noOpen: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      const t = e,
        r = c(() => {
          if (!t.noOpen) return m().resolve({
            name: "tribe-slug",
            params: {
              slug: t.tribe.chatName
            },
            query: {
              from: t.source
            }
          }).fullPath
        });
      return (n, x) => {
        const o = i,
          s = l;
        return _(), p(s, {
          title: e.tribe.title,
          balance: e.tribe.earnBalance,
          link: f(r),
          class: "pages-tribe-base-item"
        }, {
          image: a(() => [d(o, {
            "avatar-url": e.tribe.getAvatarUrl(),
            "default-avatar": e.tribe.defaultAvatar,
            size: 38
          }, null, 8, ["avatar-url", "default-avatar"])]),
          right: a(() => [b(n.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["title", "balance", "link"])
      }
    }
  }),
  q = v(g, [
    ["__scopeId", "data-v-b9e78d30"]
  ]);
export {
  q as _
};