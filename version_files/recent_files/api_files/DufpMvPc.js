import {
  _ as re
} from "./Du29Vle8.js";
import {
  j as h,
  a as u,
  c as _,
  b as m,
  k as c,
  W as B,
  X as j,
  d as w,
  cH as se,
  h as P,
  t as S,
  cI as oe,
  m as k,
  x as V,
  e as a,
  ai as G,
  J as M,
  g as L,
  P as D,
  N as J,
  aJ as Y,
  F as $,
  f as v,
  ax as ie,
  aC as le,
  n as x,
  cJ as W,
  cK as ue,
  cL as z,
  cM as N,
  cN as de,
  az as O,
  aA as F,
  ab as H,
  aB as me,
  B as q,
  A as ce,
  C as X,
  aU as Z,
  r as I,
  cO as be,
  V as U,
  bp as ve,
  av as K,
  bv as pe,
  a4 as _e,
  a7 as fe,
  L as ye,
  cG as ge,
  aO as ke,
  ay as Te,
  cv as $e
} from "./Cu_rX_ev.js";
import {
  _ as Q
} from "./B4xGZNII.js";
import {
  _ as he,
  a as we
} from "./hZhn9mkx.js";
import {
  _ as ee,
  a as Se
} from "./Dw_k1G7f.js";
import {
  _ as te
} from "./Dl-XzFwV.js";
import {
  _ as Le
} from "./zZEL_ZLB.js";
import "./S3KJtSlf.js";
import "./BS8yo6Xx.js";
const Ie = {},
  Re = {
    class: "pages-tribe-item-skeleton"
  },
  Ve = {
    class: "heading"
  },
  Be = {
    class: "buttons"
  };

function Ae(e, i) {
  const s = re;
  return u(), _("div", Re, [m("div", Ve, [c(s, {
    class: "avatar"
  }), c(s, {
    class: "title"
  })]), m("div", Be, [c(s, {
    class: "button"
  }), c(s, {
    class: "button"
  })]), (u(), _(B, null, j(2, r => m("div", {
    key: r,
    class: "title-with-body"
  }, [c(s, {
    class: "title"
  }), c(s, {
    class: "body"
  })])), 64))])
}
const Ce = h(Ie, [
    ["render", Ae],
    ["__scopeId", "data-v-1e369b14"]
  ]),
  Ee = {
    class: "page-tribe-tribe-item-banner"
  },
  Ne = {
    class: "container"
  },
  Ue = {
    class: "inner"
  },
  Me = {
    class: "label"
  },
  Oe = w({
    __name: "TribeItemBanner",
    props: {
      title: {
        type: String,
        required: !0
      },
      telegramUrl: {
        type: String,
        required: !0
      },
      avatarUrl: {
        type: String,
        default: void 0
      },
      defaultAvatar: {
        type: Number,
        required: !0
      },
      rank: {
        type: Number,
        default: void 0
      }
    },
    setup(e) {
      const i = e,
        s = () => D().$webApp.openTelegramLink(i.telegramUrl);
      return (r, n) => {
        const t = Q,
          l = J,
          o = Y;
        return u(), _("div", Ee, [n[2] || (n[2] = m("video", {
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: se
        }, [m("source", {
          src: he,
          type: "video/webm"
        }), m("source", {
          src: we,
          type: "video/mp4"
        })], -1)), m("div", Ne, [c(t, {
          "avatar-url": e.avatarUrl,
          "default-avatar": e.defaultAvatar
        }, null, 8, ["avatar-url", "default-avatar"]), m("div", Ue, [m("button", {
          class: "title-with-link reset",
          onClick: n[0] || (n[0] = d => s())
        }, [P(S(e.title) + " ", 1), n[1] || (n[1] = m("img", {
          src: oe,
          alt: "External link"
        }, null, -1))]), e.rank ? (u(), k(o, {
          key: 0,
          class: "score",
          to: ("useRouter" in r ? r.useRouter : a(M))().resolve({
            name: "tribe-top"
          })
        }, {
          default: V(() => [c(l, {
            name: "special/left-wing",
            class: "left-wing"
          }), m("span", Me, S(("formatFloatLine" in r ? r.formatFloatLine : a(G))(e.rank, {
            accuracy: 0
          })), 1), c(l, {
            name: "chevron-right",
            class: "icon"
          }), c(l, {
            name: "special/right-wing",
            class: "right-wing"
          })]),
          _: 1
        }, 8, ["to"])) : L("", !0)])])])
      }
    }
  }),
  Fe = h(Oe, [
    ["__scopeId", "data-v-08627ba3"]
  ]),
  Pe = {
    class: "pages-tribe-item-controls"
  },
  je = {
    class: "container"
  },
  qe = ["onClick"],
  xe = ["src", "alt"],
  Ke = w({
    __name: "TribeItemControls",
    props: {
      role: {
        type: String,
        default: void 0
      }
    },
    emits: ["invite", "join", "leave"],
    setup(e, {
      emit: i
    }) {
      const s = e,
        r = i,
        n = $(() => {
          const t = g => ie(`special/${g}`, "svg"),
            l = {
              icon: t("control-user-add"),
              label: v("tribes.controls.invite"),
              onClick: () => r("invite")
            },
            o = {
              icon: t("control-add-plus"),
              label: v("tribes.controls.join"),
              onClick: () => r("join")
            },
            d = {
              icon: t("control-exit"),
              label: v("tribes.controls.leave"),
              onClick: () => r("leave")
            };
          return s.role ? [l, d] : [o, l]
        });
      return (t, l) => (u(), _("div", Pe, [m("div", je, [(u(!0), _(B, null, j(a(n), (o, d) => (u(), _("button", {
        key: d,
        class: "reset",
        onClick: g => o.onClick && o.onClick()
      }, [m("img", {
        src: o.icon,
        alt: `${o.label} icon`
      }, null, 8, xe), m("span", null, S(o.label), 1)], 8, qe))), 128))])]))
    }
  }),
  We = h(Ke, [
    ["__scopeId", "data-v-51c7b8b8"]
  ]),
  ze = {
    class: "label"
  },
  He = {
    class: "value"
  },
  Ge = w({
    __name: "TribeItemSummaryTableRow",
    props: {
      label: {
        type: String,
        required: !0
      },
      value: {
        type: String,
        default: void 0
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      highlighted: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      const i = e,
        s = $(() => ({
          "is-highlighted": i.highlighted,
          "is-disabled": i.disabled
        }));
      return (r, n) => (u(), _("div", {
        class: x(["pages-tribe-item-summary-table-row", a(s)])
      }, [m("div", ze, S(e.label), 1), m("div", He, [le(r.$slots, "default", {}, () => [P(S(e.value), 1)], !0)])], 2))
    }
  }),
  De = h(Ge, [
    ["__scopeId", "data-v-3e4283ba"]
  ]),
  Je = {
    class: "pages-tribe-item-summary"
  },
  Ye = {
    class: "content"
  },
  Xe = {
    class: "label"
  },
  Ze = {
    class: "role"
  },
  Qe = w({
    __name: "TribeItemSummary",
    props: {
      role: {
        type: String,
        default: void 0
      },
      rank: {
        type: Number,
        default: void 0
      },
      userRank: {
        type: Number,
        default: void 0
      },
      perk: {
        type: String,
        default: void 0
      },
      earnBalanceMessage: {
        type: String,
        required: !0
      },
      isEarnBalanceCalculating: {
        type: Boolean,
        required: !0
      },
      countMembers: {
        type: Number,
        required: !0
      }
    },
    emits: ["show-faster-farming", "show-farm-faster"],
    setup(e, {
      emit: i
    }) {
      const s = e,
        r = $(() => W(s.rank));
      $(() => ue(s.perk)), $(() => W(s.userRank)), $(() => v(`tribes.item.summary.perks.value_${(s.perk??z.FARMING10).toLowerCase()}`));
      const n = t => v(`tribes.item.summary.user_rank.value_${t.toLowerCase()}`);
      return (t, l) => {
        const o = ee,
          d = De,
          g = J,
          T = Y;
        return u(), _("div", Je, [c(o, {
          label: ("t" in t ? t.t : a(v))("tribes.item.summary.title"),
          to: ("useRouter" in t ? t.useRouter : a(M))().resolve({
            name: "tribe-top"
          }).fullPath
        }, null, 8, ["label", "to"]), m("div", Ye, [e.role ? (u(), k(d, {
          key: 0,
          label: ("t" in t ? t.t : a(v))("tribes.item.summary.perks.label"),
          value: ("t" in t ? t.t : a(v))(`tribes.item.summary.perks.value_${a(z).FARMING10.toLowerCase()}`)
        }, null, 8, ["label", "value"])) : L("", !0), e.rank ? (u(), k(d, {
          key: 1,
          label: ("t" in t ? t.t : a(v))("tribes.item.summary.tribe_rank.label")
        }, {
          default: V(() => [c(T, {
            class: "tribe-rank",
            to: ("useRouter" in t ? t.useRouter : a(M))().resolve({
              name: "tribe-top"
            })
          }, {
            default: V(() => [m("span", Xe, S(a(r).label), 1), c(g, {
              name: "chevron-right",
              class: "chevron-icon"
            })]),
            _: 1
          }, 8, ["to"])]),
          _: 1
        }, 8, ["label"])) : L("", !0), e.role ? (u(), k(d, {
          key: 2,
          label: ("t" in t ? t.t : a(v))("tribes.item.summary.user_rank.label"),
          highlighted: e.role === a(N).OWNER
        }, {
          default: V(() => [m("div", Ze, S(n(e.role)), 1)]),
          _: 1
        }, 8, ["label", "highlighted"])) : L("", !0), c(d, {
          label: ("t" in t ? t.t : a(v))("tribes.item.summary.earn_balance.label"),
          value: e.earnBalanceMessage,
          disabled: e.isEarnBalanceCalculating
        }, null, 8, ["label", "value", "disabled"]), c(d, {
          label: ("t" in t ? t.t : a(v))("tribes.item.summary.members.label"),
          value: ("formatFloatLine" in t ? t.formatFloatLine : a(G))(s.countMembers, {
            accuracy: 0
          })
        }, null, 8, ["label", "value"])])])
      }
    }
  }),
  et = h(Qe, [
    ["__scopeId", "data-v-6607d897"]
  ]),
  tt = {
    class: "pages-tribe-item-leaderboard"
  },
  at = {
    class: "content"
  },
  nt = {
    class: "last-updated"
  },
  rt = {
    class: "list"
  },
  st = {
    key: 1,
    class: "empty"
  },
  ot = ["innerHTML"],
  it = w({
    __name: "TribeItemLeaderboard",
    props: {
      tribeChatName: {
        type: String,
        required: !0
      },
      leaderboard: {
        type: Object,
        default: void 0
      }
    },
    emits: ["invite"],
    setup(e) {
      const i = e,
        s = $(() => i.leaderboard ? de(new Date(i.leaderboard.updatedAt).getTime() - new Date().getTime()) : ""),
        r = $(() => {
          if (!(!i.leaderboard || !i.leaderboard.items.length)) return M().resolve({
            name: "tribe-slug-leaderboard",
            params: {
              slug: i.tribeChatName
            }
          }).fullPath
        });
      return $(() => {
        if (!i.leaderboard) return "";
        const n = new Date(i.leaderboard.updatedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric"
        });
        return v("tribes.users_leaderboard.card.empty.text", {
          dateText: n
        })
      }), (n, t) => {
        const l = ee,
          o = te;
        return u(), _("div", tt, [c(l, {
          label: ("t" in n ? n.t : a(v))("tribes.users_leaderboard.card.title"),
          to: a(r)
        }, null, 8, ["label", "to"]), m("div", at, [e.leaderboard && e.leaderboard.items.length ? (u(), _(B, {
          key: 0
        }, [m("div", nt, S(("t" in n ? n.t : a(v))("tribes.users_leaderboard.card.update_in", {
          lastUpdated: a(s)
        })), 1), m("div", rt, [(u(!0), _(B, null, j(e.leaderboard.items, (d, g) => (u(), k(o, {
          key: d.id,
          user: d,
          rank: g + 1
        }, null, 8, ["user", "rank"]))), 128))])], 64)) : (u(), _("div", st, [m("div", {
          class: "title",
          innerHTML: ("t" in n ? n.t : a(v))("tribes.users_leaderboard.card.empty.title")
        }, null, 8, ot), m("button", {
          class: "reset",
          onClick: t[0] || (t[0] = d => n.$emit("invite"))
        }, S(("t" in n ? n.t : a(v))("tribes.users_leaderboard.card.invite_btn")), 1)]))])])
      }
    }
  }),
  lt = h(it, [
    ["__scopeId", "data-v-4e277188"]
  ]),
  ut = w({
    __name: "TribeItemShare",
    props: O({
      role: {
        type: String,
        default: void 0
      },
      chatName: {
        type: String,
        required: !0
      },
      title: {
        type: String,
        required: !0
      },
      referralToken: {
        type: String,
        default: void 0
      }
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
      const i = e,
        s = F(e, "modelValue"),
        r = $(() => i.role === N.OWNER ? v("tribes.item.share.text_owner", {
          title: i.title
        }) : v("tribes.item.share.text_member", {
          title: i.title
        })),
        n = $(() => {
          let t = `tribe_${i.chatName}`;
          return i.referralToken && (t += `-ref_${i.referralToken}`), t
        });
      return (t, l) => {
        const o = me;
        return u(), k(o, {
          modelValue: s.value,
          "onUpdate:modelValue": l[0] || (l[0] = d => s.value = d),
          title: ("t" in t ? t.t : a(v))("tribes.item.share.title"),
          startapp: a(n),
          "share-text": a(r),
          onCopyLink: l[1] || (l[1] = d => ("useAnalytics" in t ? t.useAnalytics : a(H))().tribes.tribeInviteSent({
            method: "copy"
          })),
          onShareLink: l[2] || (l[2] = d => ("useAnalytics" in t ? t.useAnalytics : a(H))().tribes.tribeInviteSent({
            method: "share"
          }))
        }, null, 8, ["modelValue", "title", "startapp", "share-text"])
      }
    }
  }),
  dt = h(ut, [
    ["__scopeId", "data-v-f8296a69"]
  ]),
  mt = {
    class: "pages-tribe-faster-farming-sheet"
  },
  ct = {
    class: "title"
  },
  bt = ["innerHTML"],
  vt = w({
    __name: "FasterFarmingSheet",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(e) {
      const i = F(e, "modelValue");
      return (s, r) => {
        const n = ce,
          t = X,
          l = Z;
        return u(), k(l, {
          modelValue: i.value,
          "onUpdate:modelValue": r[1] || (r[1] = o => i.value = o)
        }, {
          default: V(() => [m("div", mt, [c(n, {
            name: "animations/Lightning",
            size: 116
          }), m("div", ct, S(("t" in s ? s.t : a(v))("tribes.faster_farming_sheet.title")), 1), m("div", {
            class: "subtitle",
            innerHTML: ("t" in s ? s.t : a(v))("tribes.faster_farming_sheet.subtitle")
          }, null, 8, bt), c(t, {
            label: ("t" in s ? s.t : a(v))("base.continue"),
            fill: "",
            size: a(q).LARGE,
            onClick: r[0] || (r[0] = o => i.value = !1)
          }, null, 8, ["label", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  pt = h(vt, [
    ["__scopeId", "data-v-92944601"]
  ]),
  _t = {
    class: "pages-tribe-tribe-item"
  },
  ft = w({
    __name: "TribeItem",
    props: {
      tribe: {
        type: Object,
        default: void 0
      },
      usersLeaderboard: {
        type: Object,
        default: void 0
      },
      isMyTribe: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["join", "leave"],
    setup(e) {
      const i = e,
        s = I(!1),
        r = I(!1),
        n = I(!1),
        t = $(() => {
          const l = i.usersLeaderboard;
          return i.tribe instanceof be ? {
            tribeRank: i.tribe.rank.tribe,
            userRank: i.tribe.rank.user,
            perk: i.tribe.perk,
            leaderboard: l
          } : {
            tribeRank: void 0,
            userRank: void 0,
            perk: void 0,
            leaderboard: l
          }
        });
      return (l, o) => {
        const d = Ce,
          g = Fe,
          T = We,
          b = et,
          y = lt,
          R = dt,
          A = pt,
          f = Se;
        return u(), _("div", _t, [e.tribe ? (u(), _(B, {
          key: 1
        }, [c(g, {
          title: e.tribe.title,
          "telegram-url": e.tribe.getTelegramUrl(),
          "avatar-url": e.tribe.getAvatarUrl(),
          "default-avatar": e.tribe.defaultAvatar,
          rank: a(t).tribeRank
        }, null, 8, ["title", "telegram-url", "avatar-url", "default-avatar", "rank"]), c(T, {
          class: "controls",
          role: e.tribe.role,
          onInvite: o[0] || (o[0] = p => s.value = !0),
          onJoin: o[1] || (o[1] = p => l.$emit("join", e.tribe.id)),
          onLeave: o[2] || (o[2] = p => l.$emit("leave"))
        }, null, 8, ["role"]), c(b, {
          class: "summary",
          role: e.tribe.role,
          rank: a(t).tribeRank,
          "user-rank": a(t).userRank,
          perk: a(t).perk,
          "earn-balance-message": e.tribe.getEarnBalanceOrCalculating(),
          "is-earn-balance-calculating": e.tribe.getIsEarnBalanceCalculating(),
          "count-members": e.tribe.countMembers,
          onShowFasterFarming: o[3] || (o[3] = p => r.value = !0),
          onShowFarmFaster: o[4] || (o[4] = p => n.value = !0)
        }, null, 8, ["role", "rank", "user-rank", "perk", "earn-balance-message", "is-earn-balance-calculating", "count-members"]), c(y, {
          class: "leaderboard",
          leaderboard: a(t).leaderboard,
          "tribe-chat-name": e.isMyTribe ? "" : e.tribe.chatName,
          onInvite: o[5] || (o[5] = p => s.value = !0)
        }, null, 8, ["leaderboard", "tribe-chat-name"]), c(R, {
          modelValue: a(s),
          "onUpdate:modelValue": o[6] || (o[6] = p => U(s) ? s.value = p : null),
          role: e.tribe.role,
          "referral-token": ("useStore" in l ? l.useStore : a(ve))().referralToken.value,
          "chat-name": e.tribe.chatName,
          title: e.tribe.title
        }, null, 8, ["modelValue", "role", "referral-token", "chat-name", "title"]), c(A, {
          modelValue: a(r),
          "onUpdate:modelValue": o[7] || (o[7] = p => U(r) ? r.value = p : null)
        }, null, 8, ["modelValue"]), c(f, {
          modelValue: a(n),
          "onUpdate:modelValue": o[8] || (o[8] = p => U(n) ? n.value = p : null)
        }, null, 8, ["modelValue"])], 64)) : (u(), k(d, {
          key: 0
        }))])
      }
    }
  }),
  yt = h(ft, [
    ["__scopeId", "data-v-32089e29"]
  ]),
  gt = w({
    __name: "RadioButton",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(e) {
      const i = F(e, "modelValue");
      return (s, r) => (u(), _("div", {
        class: x(["kit-radio-button", {
          "is-active": i.value
        }]),
        onClick: r[0] || (r[0] = n => i.value = !i.value)
      }, null, 2))
    }
  }),
  kt = h(gt, [
    ["__scopeId", "data-v-515425a1"]
  ]),
  Tt = {
    class: "pages-tribe-leave-list"
  },
  $t = w({
    __name: "TribeLeaveList",
    props: O({
      users: {
        type: Array,
        required: !0
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: O(["select"], ["update:modelValue"]),
    setup(e, {
      emit: i
    }) {
      const s = i,
        r = F(e, "modelValue");
      return K(r, n => n && s("select", n)), (n, t) => {
        const l = kt,
          o = te;
        return u(), _("div", Tt, [(u(!0), _(B, null, j(e.users, d => (u(), k(o, {
          key: d.id,
          user: d,
          class: "list-item"
        }, {
          right: V(() => [m("div", {
            class: x(["selector", {
              "is-active": r.value === d.id
            }])
          }, [t[0] || (t[0] = m("div", {
            class: "label"
          }, "Owner", -1)), c(l, {
            "model-value": r.value === d.id,
            "onUpdate:modelValue": g => r.value = g ? d.id : void 0
          }, null, 8, ["model-value", "onUpdate:modelValue"])], 2)]),
          _: 2
        }, 1032, ["user"]))), 128))])
      }
    }
  }),
  ae = h($t, [
    ["__scopeId", "data-v-07fbf4eb"]
  ]),
  ht = {
    class: "pages-tribe-leave-bottom-sheet"
  },
  wt = {
    class: "title"
  },
  St = {
    key: 0,
    class: "disclaimer"
  },
  Lt = {
    class: "disclaimer"
  },
  It = {
    class: "loading-content"
  },
  Rt = w({
    __name: "TribeLeaveBottomSheet",
    props: O({
      myTribe: {
        type: Object,
        default: void 0
      },
      users: {
        type: Array,
        default: void 0
      },
      needTransferRights: {
        type: Boolean,
        required: !0
      }
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: O(["leave"], ["update:modelValue"]),
    setup(e, {
      emit: i
    }) {
      const s = e,
        r = i,
        n = F(e, "modelValue"),
        t = () => ({
          stage: "OVERVIEW",
          newOwnerId: void 0
        }),
        l = I(t());
      K(n, T => T && (l.value = t()));
      const o = $(() => s.users && s.users.slice(0, 3)),
        d = () => {
          s.needTransferRights ? l.value.stage = "TRANSFER" : r("leave")
        },
        g = T => {
          r("leave", T), n.value = !1
        };
      return (T, b) => {
        const y = Q,
          R = ae,
          A = fe,
          f = X,
          p = Z;
        return u(), k(p, {
          modelValue: n.value,
          "onUpdate:modelValue": b[3] || (b[3] = C => n.value = C),
          title: "Your tribe"
        }, pe({
          _: 2
        }, [e.myTribe ? {
          name: "default",
          fn: V(() => [m("div", ht, [c(y, {
            "avatar-url": e.myTribe.getAvatarUrl(),
            "default-avatar": e.myTribe.defaultAvatar,
            size: 68
          }, null, 8, ["avatar-url", "default-avatar"]), m("div", wt, S(e.myTribe.title), 1), a(l).stage === "OVERVIEW" ? (u(), _("div", St, [b[4] || (b[4] = P(" To join another tribe, you need")), b[5] || (b[5] = m("br", null, null, -1)), P(" to leave " + S(e.myTribe.title) + ". ", 1)])) : L("", !0), a(l).stage === "TRANSFER" ? (u(), _(B, {
            key: 1
          }, [m("div", Lt, "To join another tribe, transfer ownership in " + S(e.myTribe.title) + " first. Then you can join a new tribe.", 1), b[6] || (b[6] = m("div", {
            class: "list-title"
          }, "Select a new owner", -1)), a(o) ? (u(), k(R, {
            key: 0,
            modelValue: a(l).newOwnerId,
            "onUpdate:modelValue": b[0] || (b[0] = C => a(l).newOwnerId = C),
            users: a(o),
            class: "list"
          }, null, 8, ["modelValue", "users"])) : L("", !0)], 64)) : L("", !0)])]),
          key: "0"
        } : {
          name: "default",
          fn: V(() => [m("div", It, [c(A, {
            type: a(_e).LIGHT
          }, null, 8, ["type"])])]),
          key: "1"
        }, e.myTribe ? {
          name: "footer",
          fn: V(() => [a(l).stage === "OVERVIEW" ? (u(), k(f, {
            key: 0,
            label: "Leave tribe",
            fill: "",
            size: a(q).LARGE,
            onClick: b[1] || (b[1] = C => d())
          }, null, 8, ["size"])) : L("", !0), a(l).stage === "TRANSFER" ? (u(), k(f, {
            key: 1,
            label: "Leave tribe",
            fill: "",
            size: a(q).LARGE,
            disabled: !a(l).newOwnerId,
            onClick: b[2] || (b[2] = C => g(a(l).newOwnerId))
          }, null, 8, ["size", "disabled"])) : L("", !0)]),
          key: "2"
        } : void 0]), 1032, ["modelValue"])
      }
    }
  }),
  Vt = h(Rt, [
    ["__scopeId", "data-v-c7cade4e"]
  ]),
  Bt = {
    class: "pages-tribe-new-owner-list"
  },
  At = {
    key: 1,
    class: "container"
  },
  Ct = w({
    __name: "TribeLeaveNewOwnerList",
    props: {
      users: {
        type: Array,
        default: void 0
      }
    },
    emits: ["select"],
    setup(e, {
      expose: i
    }) {
      const s = I();
      return i({
        resetSelection: () => s.value = void 0
      }), (n, t) => {
        const l = Le,
          o = ae;
        return u(), _("div", Bt, [e.users ? (u(), _("div", At, [t[2] || (t[2] = m("div", {
          class: "title"
        }, "Select a new owner", -1)), c(o, {
          modelValue: a(s),
          "onUpdate:modelValue": t[0] || (t[0] = d => U(s) ? s.value = d : null),
          users: e.users,
          class: "list",
          onSelect: t[1] || (t[1] = d => n.$emit("select", d))
        }, null, 8, ["modelValue", "users"])])) : (u(), k(l, {
          key: 0
        }))])
      }
    }
  }),
  Et = h(Ct, [
    ["__scopeId", "data-v-ead0d02a"]
  ]),
  Nt = w({
    __name: "TribeLeave",
    props: {
      variant: {
        type: String,
        required: !0
      },
      getUsers: {
        type: Function,
        required: !0
      },
      myTribe: {
        type: Object,
        default: void 0
      }
    },
    emits: ["leave", "hideTribeContent"],
    setup(e, {
      expose: i,
      emit: s
    }) {
      const r = e,
        n = s,
        t = D().$webApp,
        l = I(),
        o = I(!1),
        d = I(!1),
        g = I(!1),
        T = I(),
        b = $(() => !!(o.value || r.myTribe && r.myTribe.role === N.OWNER && r.myTribe.countMembers > 1)),
        y = () => {
          o.value = !0, R()
        },
        R = () => {
          if (b.value && !T.value && r.getUsers().then(f => T.value = f), r.variant === "bottom-sheet") {
            d.value = !0;
            return
          }
          if (r.variant === "list") {
            if (b.value) {
              g.value = !0;
              return
            }
            const f = [{
                type: "cancel"
              }, {
                type: "destructive",
                label: v("tribes.leave.buttons.destructive.label"),
                onClick: () => n("leave", {
                  showForceTransfer: y
                })
              }],
              p = `tribes.leave.popup.message_${(N.OWNER??N.MEMBER).toLowerCase()}`;
            t.popup(v("tribes.leave.popup.title"), p, f);
            return
          }
          throw r.variant, ye("Unknown variant")
        },
        A = f => {
          const p = [{
            type: "cancel"
          }, {
            type: "destructive",
            label: "Leave tribe",
            onClick: () => n("leave", {
              showForceTransfer: y,
              newOwnerId: f
            })
          }];
          t.popup("Ready to leave?", "Now that you've passed ownership, you can leave. You can rejoin as a member later.", p)
        };
      return t.onEvent("popupClosed", () => l.value && l.value.resetSelection()), K(g, f => n("hideTribeContent", f)), i({
        run: R
      }), (f, p) => {
        const C = Vt,
          ne = Et;
        return u(), _(B, null, [e.variant === "bottom-sheet" ? (u(), k(C, {
          key: 0,
          modelValue: a(d),
          "onUpdate:modelValue": p[0] || (p[0] = E => U(d) ? d.value = E : null),
          "my-tribe": e.myTribe,
          users: a(T),
          "need-transfer-rights": a(b),
          onLeave: p[1] || (p[1] = E => f.$emit("leave", {
            showForceTransfer: y,
            newOwnerId: E
          }))
        }, null, 8, ["modelValue", "my-tribe", "users", "need-transfer-rights"])) : L("", !0), e.variant === "list" && a(g) ? (u(), k(ne, {
          key: 1,
          ref_key: "listApi",
          ref: l,
          users: a(T),
          onSelect: p[2] || (p[2] = E => A(E))
        }, null, 8, ["users"])) : L("", !0)], 64)
      }
    }
  }),
  Ut = {
    class: "tribe-index-page page"
  },
  Mt = w({
    __name: "index",
    setup(e) {
      const {
        tribe: i,
        usersLeaderboard: s,
        isMyTribe: r
      } = ge(), n = ke(), t = I(), l = I(!1), o = () => t.value && t.value.run(), d = async b => {
        if (n.tribeOrUndefined.value) {
          o();
          return
        }
        await n.joinTribe(b)
      }, g = async b => {
        var R;
        const y = await n.leaveMyTribe(b.newOwnerId);
        if (y.err) {
          y.message === "SELECT_NEW_OWNER" && b.showForceTransfer();
          return
        }!r.value && ((R = i.value) != null && R.id) && await n.joinTribe(i.value.id)
      }, T = async () => {
        const b = await n.getMyTribeUsers();
        return $e(b, "My tribe users")
      };
      return Te().meta.back = () => M().push({
        name: r.value ? "index" : "tribe-join"
      }), (b, y) => {
        const R = yt,
          A = Nt;
        return u(), _("div", Ut, [a(l) ? L("", !0) : (u(), k(R, {
          key: 0,
          tribe: a(i),
          "users-leaderboard": a(s),
          "is-my-tribe": a(r),
          onLeave: y[0] || (y[0] = f => o()),
          onJoin: y[1] || (y[1] = f => d(f))
        }, null, 8, ["tribe", "users-leaderboard", "is-my-tribe"])), c(A, {
          ref_key: "tribeLeaveApi",
          ref: t,
          variant: a(r) ? "list" : "bottom-sheet",
          "my-tribe": a(n).tribeOrUndefined.value,
          "get-users": T,
          onLeave: y[2] || (y[2] = f => g(f)),
          onHideTribeContent: y[3] || (y[3] = f => l.value = f)
        }, null, 8, ["variant", "my-tribe"])])
      }
    }
  }),
  Ht = h(Mt, [
    ["__scopeId", "data-v-32c3c248"]
  ]);
export {
  Ht as
  default
};