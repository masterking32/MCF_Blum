import {
  _ as re
} from "./BHHMs5Tb.js";
import {
  f as h,
  o as d,
  c as _,
  a as m,
  b as c,
  F as B,
  q as j,
  d as w,
  m as P,
  t as S,
  d0 as se,
  N as k,
  D as V,
  e as a,
  br as D,
  ai as F,
  G as I,
  h as G,
  O as oe,
  _ as J,
  I as Y,
  j as $,
  C as v,
  a0 as ie,
  ak as le,
  n as x,
  d1 as ue,
  d2 as W,
  d3 as N,
  d4 as de,
  V as M,
  W as O,
  X as H,
  Y as me,
  a1 as q,
  aD as ce,
  x as Z,
  a2 as Q,
  y as L,
  d5 as be,
  p as U,
  bj as ve,
  Z as K,
  av as pe,
  aR as _e,
  aS as fe,
  a8 as ge,
  c$ as ye,
  aJ as ke,
  U as Te,
  cQ as $e
} from "./DdW0p5VG.js";
import {
  _ as X
} from "./DgifReU1.js";
import {
  _ as ee,
  a as he
} from "./ChLE571G.js";
import {
  g as z
} from "./D8Lk1tlo.js";
import {
  _ as te
} from "./CgPn13lL.js";
import {
  _ as we
} from "./DWDlhzIa.js";
import "./B0rhmfWp.js";
import "./DUrAhy9e.js";
const Se = {},
  Ie = {
    class: "pages-tribe-item-skeleton"
  },
  Le = {
    class: "heading"
  },
  Re = {
    class: "buttons"
  };

function Ve(e, i) {
  const s = re;
  return d(), _("div", Ie, [m("div", Le, [c(s, {
    class: "avatar"
  }), c(s, {
    class: "title"
  })]), m("div", Re, [c(s, {
    class: "button"
  }), c(s, {
    class: "button"
  })]), (d(), _(B, null, j(2, n => m("div", {
    key: n,
    class: "title-with-body"
  }, [c(s, {
    class: "title"
  }), c(s, {
    class: "body"
  })])), 64))])
}
const Be = h(Se, [
    ["render", Ve],
    ["__scopeId", "data-v-1e369b14"]
  ]),
  Ae = {
    class: "page-tribe-tribe-item-banner"
  },
  Ee = {
    class: "container"
  },
  Ce = {
    class: "inner"
  },
  Ne = {
    class: "label"
  },
  Ue = w({
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
        s = () => G().$webApp.openTelegramLink(i.telegramUrl);
      return (n, r) => {
        const t = oe,
          l = X,
          o = J,
          u = Y;
        return d(), _("div", Ae, [m("div", Ee, [c(t), c(l, {
          "avatar-url": e.avatarUrl,
          "default-avatar": e.defaultAvatar
        }, null, 8, ["avatar-url", "default-avatar"]), m("div", Ce, [m("button", {
          class: "title-with-link reset",
          onClick: r[0] || (r[0] = g => s())
        }, [P(S(e.title) + " ", 1), r[1] || (r[1] = m("img", {
          src: se,
          alt: "External link"
        }, null, -1))]), e.rank ? (d(), k(u, {
          key: 0,
          class: "score",
          to: ("useRouter" in n ? n.useRouter : a(F))().resolve({
            name: "tribe-top"
          })
        }, {
          default: V(() => [c(o, {
            name: "special/left-wing",
            class: "left-wing"
          }), m("span", Ne, S(("formatFloatLine" in n ? n.formatFloatLine : a(D))(e.rank, {
            accuracy: 0
          })), 1), c(o, {
            name: "chevron-right",
            class: "icon"
          }), c(o, {
            name: "special/right-wing",
            class: "right-wing"
          })]),
          _: 1
        }, 8, ["to"])) : I("", !0)])])])
      }
    }
  }),
  Fe = h(Ue, [
    ["__scopeId", "data-v-cbee1891"]
  ]),
  Me = {
    class: "pages-tribe-item-controls"
  },
  Oe = {
    class: "container"
  },
  Pe = ["onClick"],
  je = ["src", "alt"],
  qe = w({
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
        n = i,
        r = $(() => {
          const t = g => ie(`special/${g}`, "svg"),
            l = {
              icon: t("control-user-add"),
              label: v("tribes.controls.invite"),
              onClick: () => n("invite")
            },
            o = {
              icon: t("control-add-plus"),
              label: v("tribes.controls.join"),
              onClick: () => n("join")
            },
            u = {
              icon: t("control-exit"),
              label: v("tribes.controls.leave"),
              onClick: () => n("leave")
            };
          return s.role ? [l, u] : [o, l]
        });
      return (t, l) => (d(), _("div", Me, [m("div", Oe, [(d(!0), _(B, null, j(a(r), (o, u) => (d(), _("button", {
        key: u,
        class: "reset",
        onClick: g => o.onClick && o.onClick()
      }, [m("img", {
        src: o.icon,
        alt: `${o.label} icon`
      }, null, 8, je), m("span", null, S(o.label), 1)], 8, Pe))), 128))])]))
    }
  }),
  xe = h(qe, [
    ["__scopeId", "data-v-51c7b8b8"]
  ]),
  Ke = {
    class: "label"
  },
  We = {
    class: "value"
  },
  He = w({
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
      return (n, r) => (d(), _("div", {
        class: x(["pages-tribe-item-summary-table-row", a(s)])
      }, [m("div", Ke, S(e.label), 1), m("div", We, [le(n.$slots, "default", {}, () => [P(S(e.value), 1)], !0)])], 2))
    }
  }),
  ze = h(He, [
    ["__scopeId", "data-v-3e4283ba"]
  ]),
  De = {
    class: "pages-tribe-item-summary"
  },
  Ge = {
    class: "content"
  },
  Je = {
    class: "label"
  },
  Ye = {
    class: "role"
  },
  Ze = w({
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
        n = $(() => z(s.rank));
      $(() => ue(s.perk)), $(() => z(s.userRank)), $(() => v(`tribes.item.summary.perks.value_${(s.perk??W.FARMING10).toLowerCase()}`));
      const r = t => v(`tribes.item.summary.user_rank.value_${t.toLowerCase()}`);
      return (t, l) => {
        const o = ee,
          u = ze,
          g = J,
          T = Y;
        return d(), _("div", De, [c(o, {
          label: ("t" in t ? t.t : a(v))("tribes.item.summary.title"),
          to: ("useRouter" in t ? t.useRouter : a(F))().resolve({
            name: "tribe-top"
          }).fullPath
        }, null, 8, ["label", "to"]), m("div", Ge, [e.role ? (d(), k(u, {
          key: 0,
          label: ("t" in t ? t.t : a(v))("tribes.item.summary.perks.label"),
          value: ("t" in t ? t.t : a(v))(`tribes.item.summary.perks.value_${a(W).FARMING10.toLowerCase()}`)
        }, null, 8, ["label", "value"])) : I("", !0), e.rank ? (d(), k(u, {
          key: 1,
          label: ("t" in t ? t.t : a(v))("tribes.item.summary.tribe_rank.label")
        }, {
          default: V(() => [c(T, {
            class: "tribe-rank",
            to: ("useRouter" in t ? t.useRouter : a(F))().resolve({
              name: "tribe-top"
            })
          }, {
            default: V(() => [m("span", Je, S(a(n).label), 1), c(g, {
              name: "chevron-right",
              class: "chevron-icon"
            })]),
            _: 1
          }, 8, ["to"])]),
          _: 1
        }, 8, ["label"])) : I("", !0), e.role ? (d(), k(u, {
          key: 2,
          label: ("t" in t ? t.t : a(v))("tribes.item.summary.user_rank.label"),
          highlighted: e.role === a(N).OWNER
        }, {
          default: V(() => [m("div", Ye, S(r(e.role)), 1)]),
          _: 1
        }, 8, ["label", "highlighted"])) : I("", !0), c(u, {
          label: ("t" in t ? t.t : a(v))("tribes.item.summary.earn_balance.label"),
          value: e.earnBalanceMessage,
          disabled: e.isEarnBalanceCalculating
        }, null, 8, ["label", "value", "disabled"]), c(u, {
          label: ("t" in t ? t.t : a(v))("tribes.item.summary.members.label"),
          value: ("formatFloatLine" in t ? t.formatFloatLine : a(D))(s.countMembers, {
            accuracy: 0
          })
        }, null, 8, ["label", "value"])])])
      }
    }
  }),
  Qe = h(Ze, [
    ["__scopeId", "data-v-77b04c2a"]
  ]),
  Xe = {
    class: "pages-tribe-item-leaderboard"
  },
  et = {
    class: "content"
  },
  tt = {
    class: "last-updated"
  },
  at = {
    class: "list"
  },
  nt = {
    key: 1,
    class: "empty"
  },
  rt = ["innerHTML"],
  st = w({
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
        n = $(() => {
          if (!(!i.leaderboard || !i.leaderboard.items.length)) return F().resolve({
            name: "tribe-slug-leaderboard",
            params: {
              slug: i.tribeChatName
            }
          }).fullPath
        });
      return $(() => {
        if (!i.leaderboard) return "";
        const r = new Date(i.leaderboard.updatedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric"
        });
        return v("tribes.users_leaderboard.card.empty.text", {
          dateText: r
        })
      }), (r, t) => {
        const l = ee,
          o = te;
        return d(), _("div", Xe, [c(l, {
          label: ("t" in r ? r.t : a(v))("tribes.users_leaderboard.card.title"),
          to: a(n)
        }, null, 8, ["label", "to"]), m("div", et, [e.leaderboard && e.leaderboard.items.length ? (d(), _(B, {
          key: 0
        }, [m("div", tt, S(("t" in r ? r.t : a(v))("tribes.users_leaderboard.card.update_in", {
          lastUpdated: a(s)
        })), 1), m("div", at, [(d(!0), _(B, null, j(e.leaderboard.items, (u, g) => (d(), k(o, {
          key: u.id,
          user: u,
          rank: g + 1
        }, null, 8, ["user", "rank"]))), 128))])], 64)) : (d(), _("div", nt, [m("div", {
          class: "title",
          innerHTML: ("t" in r ? r.t : a(v))("tribes.users_leaderboard.card.empty.title")
        }, null, 8, rt), m("button", {
          class: "reset",
          onClick: t[0] || (t[0] = u => r.$emit("invite"))
        }, S(("t" in r ? r.t : a(v))("tribes.users_leaderboard.card.invite_btn")), 1)]))])])
      }
    }
  }),
  ot = h(st, [
    ["__scopeId", "data-v-4e277188"]
  ]),
  it = w({
    __name: "TribeItemShare",
    props: M({
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
        s = O(e, "modelValue"),
        n = $(() => i.role === N.OWNER ? v("tribes.item.share.text_owner", {
          title: i.title
        }) : v("tribes.item.share.text_member", {
          title: i.title
        })),
        r = $(() => {
          let t = `tribe_${i.chatName}`;
          return i.referralToken && (t += `-ref_${i.referralToken}`), t
        });
      return (t, l) => {
        const o = me;
        return d(), k(o, {
          modelValue: s.value,
          "onUpdate:modelValue": l[0] || (l[0] = u => s.value = u),
          title: ("t" in t ? t.t : a(v))("tribes.item.share.title"),
          startapp: a(r),
          "share-text": a(n),
          onCopyLink: l[1] || (l[1] = u => ("useAnalytics" in t ? t.useAnalytics : a(H))().tribes.tribeInviteSent({
            method: "copy"
          })),
          onShareLink: l[2] || (l[2] = u => ("useAnalytics" in t ? t.useAnalytics : a(H))().tribes.tribeInviteSent({
            method: "share"
          }))
        }, null, 8, ["modelValue", "title", "startapp", "share-text"])
      }
    }
  }),
  lt = h(it, [
    ["__scopeId", "data-v-f8296a69"]
  ]),
  ut = {
    class: "pages-tribe-faster-farming-sheet"
  },
  dt = {
    class: "title"
  },
  mt = ["innerHTML"],
  ct = w({
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
      const i = O(e, "modelValue");
      return (s, n) => {
        const r = ce,
          t = Z,
          l = Q;
        return d(), k(l, {
          modelValue: i.value,
          "onUpdate:modelValue": n[1] || (n[1] = o => i.value = o)
        }, {
          default: V(() => [m("div", ut, [c(r, {
            name: "animations/Lightning",
            size: 116
          }), m("div", dt, S(("t" in s ? s.t : a(v))("tribes.faster_farming_sheet.title")), 1), m("div", {
            class: "subtitle",
            innerHTML: ("t" in s ? s.t : a(v))("tribes.faster_farming_sheet.subtitle")
          }, null, 8, mt), c(t, {
            label: ("t" in s ? s.t : a(v))("base.continue"),
            fill: "",
            size: a(q).LARGE,
            onClick: n[0] || (n[0] = o => i.value = !1)
          }, null, 8, ["label", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  bt = h(ct, [
    ["__scopeId", "data-v-92944601"]
  ]),
  vt = {
    class: "pages-tribe-tribe-item"
  },
  pt = w({
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
        s = L(!1),
        n = L(!1),
        r = L(!1),
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
        const u = Be,
          g = Fe,
          T = xe,
          b = Qe,
          y = ot,
          R = lt,
          A = bt,
          f = he;
        return d(), _("div", vt, [e.tribe ? (d(), _(B, {
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
          onShowFasterFarming: o[3] || (o[3] = p => n.value = !0),
          onShowFarmFaster: o[4] || (o[4] = p => r.value = !0)
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
          modelValue: a(n),
          "onUpdate:modelValue": o[7] || (o[7] = p => U(n) ? n.value = p : null)
        }, null, 8, ["modelValue"]), c(f, {
          modelValue: a(r),
          "onUpdate:modelValue": o[8] || (o[8] = p => U(r) ? r.value = p : null)
        }, null, 8, ["modelValue"])], 64)) : (d(), k(u, {
          key: 0
        }))])
      }
    }
  }),
  _t = h(pt, [
    ["__scopeId", "data-v-32089e29"]
  ]),
  ft = w({
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
      const i = O(e, "modelValue");
      return (s, n) => (d(), _("div", {
        class: x(["kit-radio-button", {
          "is-active": i.value
        }]),
        onClick: n[0] || (n[0] = r => i.value = !i.value)
      }, null, 2))
    }
  }),
  gt = h(ft, [
    ["__scopeId", "data-v-515425a1"]
  ]),
  yt = {
    class: "pages-tribe-leave-list"
  },
  kt = w({
    __name: "TribeLeaveList",
    props: M({
      users: {
        type: Array,
        required: !0
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: M(["select"], ["update:modelValue"]),
    setup(e, {
      emit: i
    }) {
      const s = i,
        n = O(e, "modelValue");
      return K(n, r => r && s("select", r)), (r, t) => {
        const l = gt,
          o = te;
        return d(), _("div", yt, [(d(!0), _(B, null, j(e.users, u => (d(), k(o, {
          key: u.id,
          user: u,
          class: "list-item"
        }, {
          right: V(() => [m("div", {
            class: x(["selector", {
              "is-active": n.value === u.id
            }])
          }, [t[0] || (t[0] = m("div", {
            class: "label"
          }, "Owner", -1)), c(l, {
            "model-value": n.value === u.id,
            "onUpdate:modelValue": g => n.value = g ? u.id : void 0
          }, null, 8, ["model-value", "onUpdate:modelValue"])], 2)]),
          _: 2
        }, 1032, ["user"]))), 128))])
      }
    }
  }),
  ae = h(kt, [
    ["__scopeId", "data-v-07fbf4eb"]
  ]),
  Tt = {
    class: "pages-tribe-leave-bottom-sheet"
  },
  $t = {
    class: "title"
  },
  ht = {
    key: 0,
    class: "disclaimer"
  },
  wt = {
    class: "disclaimer"
  },
  St = {
    class: "loading-content"
  },
  It = w({
    __name: "TribeLeaveBottomSheet",
    props: M({
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
    emits: M(["leave"], ["update:modelValue"]),
    setup(e, {
      emit: i
    }) {
      const s = e,
        n = i,
        r = O(e, "modelValue"),
        t = () => ({
          stage: "OVERVIEW",
          newOwnerId: void 0
        }),
        l = L(t());
      K(r, T => T && (l.value = t()));
      const o = $(() => s.users && s.users.slice(0, 3)),
        u = () => {
          s.needTransferRights ? l.value.stage = "TRANSFER" : n("leave")
        },
        g = T => {
          n("leave", T), r.value = !1
        };
      return (T, b) => {
        const y = X,
          R = ae,
          A = fe,
          f = Z,
          p = Q;
        return d(), k(p, {
          modelValue: r.value,
          "onUpdate:modelValue": b[3] || (b[3] = E => r.value = E),
          title: "Your tribe"
        }, pe({
          _: 2
        }, [e.myTribe ? {
          name: "default",
          fn: V(() => [m("div", Tt, [c(y, {
            "avatar-url": e.myTribe.getAvatarUrl(),
            "default-avatar": e.myTribe.defaultAvatar,
            size: 68
          }, null, 8, ["avatar-url", "default-avatar"]), m("div", $t, S(e.myTribe.title), 1), a(l).stage === "OVERVIEW" ? (d(), _("div", ht, [b[4] || (b[4] = P(" To join another tribe, you need")), b[5] || (b[5] = m("br", null, null, -1)), P(" to leave " + S(e.myTribe.title) + ". ", 1)])) : I("", !0), a(l).stage === "TRANSFER" ? (d(), _(B, {
            key: 1
          }, [m("div", wt, "To join another tribe, transfer ownership in " + S(e.myTribe.title) + " first. Then you can join a new tribe.", 1), b[6] || (b[6] = m("div", {
            class: "list-title"
          }, "Select a new owner", -1)), a(o) ? (d(), k(R, {
            key: 0,
            modelValue: a(l).newOwnerId,
            "onUpdate:modelValue": b[0] || (b[0] = E => a(l).newOwnerId = E),
            users: a(o),
            class: "list"
          }, null, 8, ["modelValue", "users"])) : I("", !0)], 64)) : I("", !0)])]),
          key: "0"
        } : {
          name: "default",
          fn: V(() => [m("div", St, [c(A, {
            type: a(_e).LIGHT
          }, null, 8, ["type"])])]),
          key: "1"
        }, e.myTribe ? {
          name: "footer",
          fn: V(() => [a(l).stage === "OVERVIEW" ? (d(), k(f, {
            key: 0,
            label: "Leave tribe",
            fill: "",
            size: a(q).LARGE,
            onClick: b[1] || (b[1] = E => u())
          }, null, 8, ["size"])) : I("", !0), a(l).stage === "TRANSFER" ? (d(), k(f, {
            key: 1,
            label: "Leave tribe",
            fill: "",
            size: a(q).LARGE,
            disabled: !a(l).newOwnerId,
            onClick: b[2] || (b[2] = E => g(a(l).newOwnerId))
          }, null, 8, ["size", "disabled"])) : I("", !0)]),
          key: "2"
        } : void 0]), 1032, ["modelValue"])
      }
    }
  }),
  Lt = h(It, [
    ["__scopeId", "data-v-c7cade4e"]
  ]),
  Rt = {
    class: "pages-tribe-new-owner-list"
  },
  Vt = {
    key: 1,
    class: "container"
  },
  Bt = w({
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
      const s = L();
      return i({
        resetSelection: () => s.value = void 0
      }), (r, t) => {
        const l = we,
          o = ae;
        return d(), _("div", Rt, [e.users ? (d(), _("div", Vt, [t[2] || (t[2] = m("div", {
          class: "title"
        }, "Select a new owner", -1)), c(o, {
          modelValue: a(s),
          "onUpdate:modelValue": t[0] || (t[0] = u => U(s) ? s.value = u : null),
          users: e.users,
          class: "list",
          onSelect: t[1] || (t[1] = u => r.$emit("select", u))
        }, null, 8, ["modelValue", "users"])])) : (d(), k(l, {
          key: 0
        }))])
      }
    }
  }),
  At = h(Bt, [
    ["__scopeId", "data-v-ead0d02a"]
  ]),
  Et = w({
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
      const n = e,
        r = s,
        t = G().$webApp,
        l = L(),
        o = L(!1),
        u = L(!1),
        g = L(!1),
        T = L(),
        b = $(() => !!(o.value || n.myTribe && n.myTribe.role === N.OWNER && n.myTribe.countMembers > 1)),
        y = () => {
          o.value = !0, R()
        },
        R = () => {
          if (b.value && !T.value && n.getUsers().then(f => T.value = f), n.variant === "bottom-sheet") {
            u.value = !0;
            return
          }
          if (n.variant === "list") {
            if (b.value) {
              g.value = !0;
              return
            }
            const f = [{
                type: "cancel"
              }, {
                type: "destructive",
                label: v("tribes.leave.buttons.destructive.label"),
                onClick: () => r("leave", {
                  showForceTransfer: y
                })
              }],
              p = `tribes.leave.popup.message_${(N.OWNER??N.MEMBER).toLowerCase()}`;
            t.popup(v("tribes.leave.popup.title"), p, f);
            return
          }
          throw n.variant, ge("Unknown variant")
        },
        A = f => {
          const p = [{
            type: "cancel"
          }, {
            type: "destructive",
            label: "Leave tribe",
            onClick: () => r("leave", {
              showForceTransfer: y,
              newOwnerId: f
            })
          }];
          t.popup("Ready to leave?", "Now that you've passed ownership, you can leave. You can rejoin as a member later.", p)
        };
      return t.onEvent("popupClosed", () => l.value && l.value.resetSelection()), K(g, f => r("hideTribeContent", f)), i({
        run: R
      }), (f, p) => {
        const E = Lt,
          ne = At;
        return d(), _(B, null, [e.variant === "bottom-sheet" ? (d(), k(E, {
          key: 0,
          modelValue: a(u),
          "onUpdate:modelValue": p[0] || (p[0] = C => U(u) ? u.value = C : null),
          "my-tribe": e.myTribe,
          users: a(T),
          "need-transfer-rights": a(b),
          onLeave: p[1] || (p[1] = C => f.$emit("leave", {
            showForceTransfer: y,
            newOwnerId: C
          }))
        }, null, 8, ["modelValue", "my-tribe", "users", "need-transfer-rights"])) : I("", !0), e.variant === "list" && a(g) ? (d(), k(ne, {
          key: 1,
          ref_key: "listApi",
          ref: l,
          users: a(T),
          onSelect: p[2] || (p[2] = C => A(C))
        }, null, 8, ["users"])) : I("", !0)], 64)
      }
    }
  }),
  Ct = {
    class: "tribe-index-page page"
  },
  Nt = w({
    __name: "index",
    setup(e) {
      const {
        tribe: i,
        usersLeaderboard: s,
        isMyTribe: n
      } = ye(), r = ke(), t = L(), l = L(!1), o = () => t.value && t.value.run(), u = async b => {
        if (r.tribeOrUndefined.value) {
          o();
          return
        }
        await r.joinTribe(b)
      }, g = async b => {
        var R;
        const y = await r.leaveMyTribe(b.newOwnerId);
        if (y.err) {
          y.message === "SELECT_NEW_OWNER" && b.showForceTransfer();
          return
        }!n.value && ((R = i.value) != null && R.id) && await r.joinTribe(i.value.id)
      }, T = async () => {
        const b = await r.getMyTribeUsers();
        return $e(b, "My tribe users")
      };
      return Te().initHandler(() => F().push({
        name: n.value ? "index" : "tribe-join"
      }), "tribe-slug-index"), (b, y) => {
        const R = _t,
          A = Et;
        return d(), _("div", Ct, [a(l) ? I("", !0) : (d(), k(R, {
          key: 0,
          tribe: a(i),
          "users-leaderboard": a(s),
          "is-my-tribe": a(n),
          onLeave: y[0] || (y[0] = f => o()),
          onJoin: y[1] || (y[1] = f => u(f))
        }, null, 8, ["tribe", "users-leaderboard", "is-my-tribe"])), c(A, {
          ref_key: "tribeLeaveApi",
          ref: t,
          variant: a(n) ? "list" : "bottom-sheet",
          "my-tribe": a(r).tribeOrUndefined.value,
          "get-users": T,
          onLeave: y[2] || (y[2] = f => g(f)),
          onHideTribeContent: y[3] || (y[3] = f => l.value = f)
        }, null, 8, ["variant", "my-tribe"])])
      }
    }
  }),
  Wt = h(Nt, [
    ["__scopeId", "data-v-c40aace4"]
  ]);
export {
  Wt as
  default
};