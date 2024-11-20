import {
  _ as s
} from "./BAsxquqF.js";
import {
  d as n,
  F as o,
  bJ as c,
  a as i,
  m as l,
  e as u,
  aJ as m,
  j as p
} from "./ulDqqcK5.js";
const _ = n({
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
        a = o(() => t.avatarUrl ? t.avatarUrl : c(`tribe/avatars/${t.defaultAvatar}`));
      return (d, v) => {
        const r = s;
        return i(), l(r, {
          url: u(a),
          class: "pages-tribe-item-avatar",
          style: m({
            width: `${e.size}px`,
            height: `${e.size}px`
          })
        }, null, 8, ["url", "style"])
      }
    }
  }),
  b = p(_, [
    ["__scopeId", "data-v-c9ca9109"]
  ]);
export {
  b as _
};