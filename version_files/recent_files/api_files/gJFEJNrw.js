import {
  _ as i
} from "./p6-qFIyX.js";
import {
  _ as l
} from "./B10iGYz9.js";
import {
  d as u,
  j as c,
  ai as m,
  o as _,
  N as p,
  D as a,
  b,
  ak as d,
  e as f,
  f as v
} from "./BN1oUHf5.js";
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
      return (n, k) => {
        const o = i,
          s = l;
        return _(), p(s, {
          title: e.tribe.title,
          balance: e.tribe.earnBalance,
          link: f(r),
          class: "pages-tribe-base-item"
        }, {
          image: a(() => [b(o, {
            "avatar-url": e.tribe.getAvatarUrl(),
            "default-avatar": e.tribe.defaultAvatar,
            size: 38
          }, null, 8, ["avatar-url", "default-avatar"])]),
          right: a(() => [d(n.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["title", "balance", "link"])
      }
    }
  }),
  y = v(g, [
    ["__scopeId", "data-v-b9e78d30"]
  ]);
export {
  y as _
};