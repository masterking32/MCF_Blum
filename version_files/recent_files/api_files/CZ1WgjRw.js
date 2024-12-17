import {
  _ as s
} from "./B1YGGBgM.js";
import {
  d as n,
  F as o,
  ax as c,
  a as l,
  m as u,
  e as i,
  aL as m,
  j as p
} from "./Dq6b0IKe.js";
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
      const a = e,
        t = o(() => a.avatarUrl ? a.avatarUrl : c(`avatars/${a.defaultAvatar}`));
      return (d, v) => {
        const r = s;
        return l(), u(r, {
          url: i(t),
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