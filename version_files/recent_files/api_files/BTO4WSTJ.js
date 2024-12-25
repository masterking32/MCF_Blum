import {
  _ as o
} from "./CdD28nwc.js";
import {
  d as s,
  j as n,
  ao as c,
  o as l,
  J as u,
  e as i,
  ax as m,
  f as p
} from "./LwuWi-s8.js";
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