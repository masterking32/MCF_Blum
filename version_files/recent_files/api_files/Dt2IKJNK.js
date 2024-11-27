import {
  _ as s
} from "./CYi1KByt.js";
import {
  d as n,
  F as o,
  ax as c,
  a as i,
  m as l,
  e as u,
  aL as m,
  j as p
} from "./DK5KlhXV.js";
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
  y = p(_, [
    ["__scopeId", "data-v-c9ca9109"]
  ]);
export {
  y as _
};