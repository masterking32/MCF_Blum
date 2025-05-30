import {
  _ as o
} from "./ByF7UOeu.js";
import {
  d as s,
  j as n,
  a8 as c,
  o as l,
  y as u,
  e as i,
  aH as m,
  f as p
} from "./i5EetP0C.js";
const _ = s({
    __name: "TribeItemAvatar",
    props: {
      size: {
        type: Number,
        default: 102
      },
      avatarUrl: {
        type: String,
        default: void 0
      },
      defaultAvatar: {
        type: Number,
        required: !0
      }
    },
    setup(e) {
      const t = e,
        a = n(() => t.avatarUrl ? t.avatarUrl : c(`avatars/${t.defaultAvatar}`));
      return (d, f) => {
        const r = o;
        return l(), u(r, {
          url: i(a),
          class: "pages-tribe-item-avatar",
          style: m({
            width: `${e.size}px`,
            height: `${e.size}px`
          })
        }, null, 8, ["url", "style"])
      }
    }
  }),
  y = p(_, [
    ["__scopeId", "data-v-2c902ea0"]
  ]);
export {
  y as _
};