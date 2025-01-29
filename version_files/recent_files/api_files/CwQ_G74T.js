import {
  _ as n
} from "./BZ9AKuBx.js";
import {
  d as o,
  j as s,
  an as c,
  o as l,
  G as u,
  e as i,
  aw as m,
  f as p
} from "./7B743EeA.js";
const _ = o({
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
        a = s(() => t.avatarUrl ? t.avatarUrl : c(`avatars/${t.defaultAvatar}`));
      return (d, f) => {
        const r = n;
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