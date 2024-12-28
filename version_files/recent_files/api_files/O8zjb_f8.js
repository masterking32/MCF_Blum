import {
  d as u,
  ap as d,
  z as o,
  aq as p,
  o as f,
  G as m,
  e as a,
  $ as s,
  ar as v,
  f as y
} from "./BrLCGJDp.js";
const k = u({
    __name: "InviteFrenModal",
    props: d({
      referralToken: {
        type: String,
        required: !0
      },
      shareText: {
        type: String,
        default: () => o("frens.invite.share_text")
      },
      qr: {
        type: Boolean,
        default: !1
      }
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(n) {
      const r = p(n, "modelValue");
      return (e, t) => {
        const l = v;
        return f(), m(l, {
          modelValue: r.value,
          "onUpdate:modelValue": t[0] || (t[0] = i => r.value = i),
          title: ("t" in e ? e.t : a(o))("frens.base.invite"),
          "share-text": n.shareText,
          startapp: `ref_${n.referralToken}`,
          "copied-notification": ("t" in e ? e.t : a(o))("frens.invite.link_copied"),
          qr: n.qr,
          onShareLink: t[1] || (t[1] = i => ("useAnalytics" in e ? e.useAnalytics : a(s))().friendsInvite.inviteSent({
            method: "share"
          })),
          onCopyLink: t[2] || (t[2] = i => ("useAnalytics" in e ? e.useAnalytics : a(s))().friendsInvite.inviteSent({
            method: "copy"
          }))
        }, null, 8, ["modelValue", "title", "share-text", "startapp", "copied-notification", "qr"])
      }
    }
  }),
  q = y(k, [
    ["__scopeId", "data-v-ea93b515"]
  ]);
export {
  q as _
};