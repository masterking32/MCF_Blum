import {
  d as u,
  ay as d,
  C as o,
  az as p,
  o as f,
  N as m,
  e as a,
  a9 as r,
  aA as v,
  f as y
} from "./DmEY5NHF.js";
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
      const s = p(n, "modelValue");
      return (e, t) => {
        const l = v;
        return f(), m(l, {
          modelValue: s.value,
          "onUpdate:modelValue": t[0] || (t[0] = i => s.value = i),
          title: ("t" in e ? e.t : a(o))("frens.base.invite"),
          "share-text": n.shareText,
          startapp: `ref_${n.referralToken}`,
          "copied-notification": ("t" in e ? e.t : a(o))("frens.invite.link_copied"),
          qr: n.qr,
          onShareLink: t[1] || (t[1] = i => ("useAnalytics" in e ? e.useAnalytics : a(r))().friendsInvite.inviteSent({
            method: "share"
          })),
          onCopyLink: t[2] || (t[2] = i => ("useAnalytics" in e ? e.useAnalytics : a(r))().friendsInvite.inviteSent({
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