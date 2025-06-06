import {
  _ as Pe
} from "./Bunl_J3B.js";
import {
  d as P,
  o,
  c as r,
  a as s,
  b as u,
  t as p,
  e,
  A as k,
  D as B,
  aK as re,
  f as D,
  z as g,
  a$ as ke,
  b0 as ye,
  _ as H,
  a4 as ee,
  h as de,
  C as $e,
  J as w,
  j as L,
  G as I,
  p as ue,
  a9 as De,
  x as Ke,
  aa as Ue,
  m as Ve,
  F as J,
  ad as W,
  aS as U,
  b1 as xe,
  a7 as Be,
  b2 as je,
  b3 as Fe,
  b4 as be,
  n as te,
  b5 as Ee,
  U as Se,
  b6 as ne,
  aI as ie,
  av as pe,
  ak as Ye,
  af as ae,
  K as Z,
  a8 as q,
  ag as X,
  ae as Ge,
  q as ce,
  O as Ae,
  aM as We,
  b7 as Je,
  b8 as He,
  b9 as le,
  ab as ze,
  ay as qe,
  M as m,
  H as _e,
  a5 as oe,
  a3 as Xe,
  ba as Qe,
  bb as ve,
  bc as Ze,
  aE as et,
  Q as tt
} from "./aUn4L-is.js";
import {
  _ as nt
} from "./lRdekDGC.js";
import {
  _ as ot
} from "./Bi-6ky94.js";
import {
  _ as st
} from "./br8C2I_s.js";
import {
  _ as at
} from "./DzPbYUGw.js";
import {
  _ as Te,
  a as lt,
  b as it
} from "./DiB1hj8b.js";
import {
  _ as ct
} from "./DfyM1DXl.js";
import {
  _ as rt
} from "./Dl7VDv3R.js";
import {
  _ as dt
} from "./ZD6K_azC.js";
import {
  u as ut,
  a as mt
} from "./BoETRRB6.js";
import "./Btvch9Xs.js";
const pt = {
    class: "memepad-intro"
  },
  _t = {
    class: "content"
  },
  vt = {
    class: "title"
  },
  ht = {
    class: "note"
  },
  ft = P({
    __name: "Intro",
    emits: ["start"],
    setup(S) {
      return (t, d) => {
        const n = re,
          a = nt;
        return o(), r("div", pt, [s("div", _t, [u(n, {
          name: "animations/Moon",
          class: "background"
        }), s("div", vt, p(("t" in t ? t.t : e(k))("memepad.intro.title")), 1), s("button", {
          type: "button",
          class: "reset",
          onClick: d[0] || (d[0] = l => t.$emit("start"))
        }, p(("t" in t ? t.t : e(k))("memepad.intro.button_text")), 1)]), u(a, {
          "no-background": ""
        }, {
          default: B(() => [s("div", ht, p(("t" in t ? t.t : e(k))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  gt = D(ft, [
    ["__scopeId", "data-v-2da05feb"]
  ]),
  kt = ["disabled"],
  yt = {
    class: "title"
  },
  $t = P({
    __name: "StatusBanner",
    props: {
      title: {},
      loading: {
        type: Boolean
      }
    },
    setup(S) {
      return (t, d) => {
        const n = ye,
          a = H;
        return o(), r("button", {
          type: "button",
          class: "memepad-explore-status-banner reset",
          disabled: t.loading
        }, [d[0] || (d[0] = s("div", {
          class: "ping-dot"
        }, null, -1)), s("div", yt, p(t.title), 1), t.loading ? (o(), g(n, {
          key: 0,
          class: "spinner",
          size: 16,
          type: e(ke).DARK
        }, null, 8, ["type"])) : (o(), g(a, {
          key: 1,
          name: "chevron-right",
          class: "icon"
        }))], 8, kt)
      }
    }
  }),
  bt = D($t, [
    ["__scopeId", "data-v-92bc20c2"]
  ]),
  Et = {
    class: "memepad-sheet"
  },
  St = {
    class: "title"
  },
  At = {
    class: "subtitle"
  },
  Tt = {
    class: "label"
  },
  Ct = {
    class: "actions"
  },
  It = {
    key: 0,
    class: "dont-show"
  },
  Mt = {
    class: "checkbox"
  },
  wt = P({
    __name: "Sheet",
    props: ee({
      dontShowStorageKey: {},
      title: {},
      subtitle: {},
      buttonText: {},
      lottie: {},
      hideReadMore: {
        type: Boolean
      }
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ee(["close", "readMoreClick"], ["update:modelValue"]),
    setup(S, {
      emit: t
    }) {
      const {
        $webApp: d
      } = de(), n = S, a = t, l = $e(S, "modelValue"), v = w(!n.dontShowStorageKey), i = w(!1), c = L({
        get: () => l.value && v.value,
        set: f => {
          l.value = f, i.value && n.dontShowStorageKey && d.storage.local.set(n.dontShowStorageKey, "true")
        }
      });
      (() => {
        n.dontShowStorageKey && (v.value = !d.storage.local.get(n.dontShowStorageKey))
      })();
      const A = () => a("readMoreClick"),
        $ = () => {
          c.value = !1, a("close", {
            source: "modal"
          })
        },
        K = () => {
          c.value = !1, a("close", {
            source: "button"
          })
        };
      return (f, C) => {
        const N = re,
          z = H,
          h = ot,
          _ = Ke,
          T = Ue;
        return o(), g(T, {
          "model-value": e(c),
          "onUpdate:modelValue": $
        }, {
          default: B(() => [s("div", Et, [u(N, {
            name: f.lottie,
            size: 116
          }, null, 8, ["name"]), s("div", St, p(f.title), 1), s("div", null, [s("div", At, p(f.subtitle), 1), f.hideReadMore ? I("", !0) : (o(), r("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: A
          }, [s("span", Tt, p(("t" in f ? f.t : e(k))("base.read_more")), 1), u(z, {
            name: "arrow-right",
            class: "icon"
          })]))]), s("div", Ct, [f.dontShowStorageKey ? (o(), r("div", It, [s("div", Mt, [u(h, {
            modelValue: e(i),
            "onUpdate:modelValue": C[0] || (C[0] = b => ue(i) ? i.value = b : null)
          }, null, 8, ["modelValue"]), s("span", {
            class: "label",
            onClick: C[1] || (C[1] = b => i.value = !e(i))
          }, p(("t" in f ? f.t : e(k))("memepad.sheet.dont_show_again_label")), 1)])])) : I("", !0), u(_, {
            label: f.buttonText,
            fill: "",
            size: e(De).LARGE,
            onClick: K
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  Nt = D(wt, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  he = "memepad-launch-jetton",
  Lt = P({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(S, {
      emit: t
    }) {
      const {
        $webApp: d
      } = de(), n = t, a = w(!1), l = w(d.storage.local.get(he) ? "watched" : "unwatched"), v = () => {
        l.value === "watched" ? n("launch") : a.value = !0
      }, i = () => {
        d.storage.local.set(he, "true"), n("launch")
      };
      return (c, y) => {
        const A = Nt;
        return o(), r(J, null, [s("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: v
        }, [y[1] || (y[1] = s("i", {
          class: "seedling"
        }, null, -1)), Ve(" " + p(("t" in c ? c.t : e(k))("memepad.explore.launch.button_text")), 1)]), u(A, {
          modelValue: e(a),
          "onUpdate:modelValue": y[0] || (y[0] = $ => ue(a) ? a.value = $ : null),
          title: ("t" in c ? c.t : e(k))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in c ? c.t : e(k))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in c ? c.t : e(k))("memepad.explore.launch_modal.button_text"),
          "hide-read-more": "",
          lottie: "animations/Lightning",
          onClose: i
        }, null, 8, ["modelValue", "title", "subtitle", "button-text"])], 64)
      }
    }
  }),
  Rt = D(Lt, [
    ["__scopeId", "data-v-9b8c98c6"]
  ]),
  Ot = ["src"],
  Pt = {
    key: 1,
    class: "user-avatar-empty"
  },
  Dt = {
    class: "text"
  },
  Kt = {
    key: 0,
    class: "user-name"
  },
  Ut = {
    key: 1,
    class: "user-address"
  },
  Vt = {
    class: "action"
  },
  xt = {
    class: "amount"
  },
  Bt = {
    class: "ticker"
  },
  jt = {
    class: "seconds"
  },
  Ft = P({
    __name: "Event",
    props: {
      event: {}
    },
    setup(S) {
      const t = S,
        d = L(() => k(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        n = L(() => W().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.event.shortname
          },
          query: {
            from: U.ACTIONBAR
          }
        })),
        a = L(() => {
          const l = xe(t.event.timestamp);
          return l.isDate ? l.label : `${l.label} ago`
        });
      return (l, v) => {
        const i = H,
          c = Be("I18nT"),
          y = Ee,
          A = Se;
        return o(), g(A, {
          to: e(n),
          class: te(["memepad-explore-event", `is-${l.event.type.toLowerCase()}`])
        }, {
          default: B(() => [l.event.user.avatarUrl ? (o(), r("img", {
            key: 0,
            src: l.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, Ot)) : (o(), r("div", Pt, [u(i, {
            name: "space-invader",
            class: "icon"
          })])), s("div", Dt, [l.event.user.nickname ? (o(), r("span", Kt, p(l.event.user.nickname), 1)) : (o(), r("span", Ut, p(("sliceWalletAddress" in l ? l.sliceWalletAddress : e(je))(l.event.user.address)), 1)), s("span", Vt, p(e(d)), 1), l.event.amount ? (o(), g(c, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: B(() => [s("span", xt, p(`${("formatTon"in l?l.formatTon:e(Fe))(l.event.amount)} TON`), 1)]),
            _: 1
          })) : I("", !0)]), u(y, {
            src: e(be)(l.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), s("span", Bt, p(l.event.ticker), 1), s("span", jt, p(e(a)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  Yt = D(Ft, [
    ["__scopeId", "data-v-5d587a0b"]
  ]),
  Gt = {
    class: "ticker"
  },
  Wt = {
    key: 0,
    class: "live"
  },
  Jt = {
    class: "label"
  },
  Ht = {
    key: 1,
    class: "stats"
  },
  zt = {
    class: "holders-count"
  },
  qt = {
    class: "text"
  },
  Xt = {
    class: "transactions-count"
  },
  Qt = {
    class: "text"
  },
  Zt = P({
    __name: "Card",
    props: {
      jetton: {},
      index: {}
    },
    setup(S) {
      const t = S,
        d = L(() => W().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: `spotlight-${t.index+1}`
          }
        }));
      return (n, a) => {
        const l = Ee,
          v = H,
          i = Se;
        return o(), g(i, {
          to: e(d),
          class: "memepad-explore-spotlight-card"
        }, {
          default: B(() => [u(l, {
            src: e(be)(n.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), s("span", Gt, p(n.jetton.ticker), 1), n.jetton.streamOnline ? (o(), r("div", Wt, [a[0] || (a[0] = s("div", {
            class: "dot"
          }, null, -1)), s("div", Jt, p(("t" in n ? n.t : e(k))("memepad.explore.spotlight.live")), 1)])) : (o(), r("div", Ht, [s("div", zt, [u(v, {
            name: "personal",
            class: "icon"
          }), s("span", qt, p(n.jetton.stats.holdersCount ? ("formatCount" in n ? n.formatCount : e(ne))(n.jetton.stats.holdersCount, {
            accuracy: 0
          }).full : "-"), 1)]), s("div", Xt, [u(v, {
            name: "transfer",
            class: "icon"
          }), s("span", Qt, p(n.jetton.stats.transactionsCount ? ("formatCount" in n ? n.formatCount : e(ne))(n.jetton.stats.transactionsCount, {
            accuracy: 0
          }).full : "-"), 1)])]))]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  en = D(Zt, [
    ["__scopeId", "data-v-20e41bcf"]
  ]),
  tn = {
    class: "inner"
  },
  nn = {
    class: "left"
  },
  on = {
    class: "mc"
  },
  sn = {
    key: 0,
    class: "diff"
  },
  an = {
    key: 1,
    class: "percent"
  },
  ln = {
    class: "progress"
  },
  cn = {
    class: "direction-wrapper"
  },
  rn = {
    key: 0,
    class: "direction up"
  },
  dn = {
    key: 0,
    class: "direction down"
  },
  un = P({
    __name: "Progress",
    props: {
      jetton: {},
      moveDirection: {},
      marketCap: {},
      tokenCollectedPercent: {}
    },
    setup(S) {
      return (t, d) => {
        var a;
        const n = H;
        return o(), r("div", {
          class: te(["memepad-explore-spotlight-progress", [t.moveDirection && `is-${(a=t.moveDirection)==null?void 0:a.direction}`, {
            "is-released": t.jetton.isReleased
          }]])
        }, [s("div", tn, [s("div", nn, [s("span", on, p(t.marketCap ? `$${t.marketCap.full}` : "-"), 1), t.moveDirection ? (o(), r("span", sn, p(t.moveDirection.diffFormatted), 1)) : I("", !0)]), t.jetton.isReleased ? (o(), g(n, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (o(), r("span", an, p(t.tokenCollectedPercent ?? "-") + "% ", 1))]), s("div", ln, [s("div", {
          class: "line",
          style: ie({
            width: `${t.tokenCollectedPercent}%`
          })
        }, [s("div", cn, [u(pe, {
          name: "direction-opacity"
        }, {
          default: B(() => {
            var l;
            return [((l = t.moveDirection) == null ? void 0 : l.direction) === "up" ? (o(), r("div", rn, [u(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), u(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), u(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : I("", !0)]
          }),
          _: 1
        }), u(pe, {
          name: "direction-opacity"
        }, {
          default: B(() => {
            var l;
            return [((l = t.moveDirection) == null ? void 0 : l.direction) === "down" ? (o(), r("div", dn, [u(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), u(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), u(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : I("", !0)]
          }),
          _: 1
        })])], 4)])], 2)
      }
    }
  }),
  mn = D(un, [
    ["__scopeId", "data-v-a683f66f"]
  ]),
  pn = {
    class: "memepad-explore-spotlight"
  },
  _n = {
    class: "bg"
  },
  vn = ["src"],
  hn = ["src"],
  fn = {
    class: "content"
  },
  gn = {
    class: "header"
  },
  kn = {
    class: "logo"
  },
  yn = {
    class: "title"
  },
  $n = ["src"],
  bn = P({
    __name: "Spotlight",
    props: {
      list: {},
      getReactions: {
        type: Function
      }
    },
    setup(S) {
      const t = S,
        d = Ye(),
        n = w(0),
        a = L(() => t.list[n.value]),
        l = h => {
          var _;
          (_ = v.value) == null || _.scrollTo({
            left: h * window.innerWidth + (n.value > h ? -1 : 1),
            behavior: "smooth"
          })
        },
        v = w(null),
        i = Ae(() => {
          if (!v.value) return;
          const h = v.value.children[0].offsetWidth + 10,
            _ = v.value.scrollLeft,
            T = Math.round(_ / h);
          n.value = T
        }, 50).debouncedFunction,
        c = L(() => {
          const h = (() => {
              if (!(!a.value.stats.tokenCollected || !a.value.tokenForDex)) return new ae(a.value.stats.tokenCollected.div(a.value.tokenForDex).times(100).toFixed(0, ae.ROUND_DOWN))
            })(),
            _ = a.value.stats.marketCap && ne(a.value.stats.marketCap);
          return {
            id: a.value.id,
            shortname: a.value.shortname,
            tokenCollectedPercent: h,
            marketCap: _
          }
        }),
        y = [],
        A = w();
      Z(c, (h, _) => {
        if (!h.marketCap || !_.marketCap || h.marketCap.full === _.marketCap.full || h.id !== _.id) {
          A.value = void 0;
          return
        }
        const T = h.marketCap.raw.minus(_.marketCap.raw),
          b = T.lt(0),
          M = ne(T.abs(), {
            accuracy: 0
          }).full;
        M !== "0" && (A.value = {
          direction: b ? "down" : "up",
          diffFormatted: `${b?"-":"+"}${M}`
        }, y.push(setTimeout(() => A.value = void 0, 3e3)))
      });
      const $ = L(() => {
          var h, _;
          return ((h = A.value) == null ? void 0 : h.direction) === "down" ? q("memepad/spotlight-room-down", "svg") : ((_ = A.value) == null ? void 0 : _.direction) === "up" ? q("memepad/spotlight-room-up", "svg") : q("memepad/spotlight-room", "svg")
        }),
        {
          reactionsAnimations: K,
          ANIMATION_DURATION: f,
          restart: C
        } = z();
      Z(n, C, {
        immediate: !0
      }), X(() => {
        y.forEach(clearTimeout)
      });
      const N = L(() => a.value.isReleased ? q("memepad/dex-bg", "gif") : q("memepad/bg", "gif"));

      function z() {
        let T = 0;
        const b = [];
        let M;
        const R = w(),
          O = w([]),
          F = Ge(async () => await t.getReactions(c.value.shortname), G => {
            if (!R.value) {
              R.value = G;
              return
            }
            const {
              user: Gn,
              userStars: Wn,
              ...Ce
            } = R.value;
            R.value = G;
            const {
              user: Jn,
              userStars: Hn,
              ...Ie
            } = R.value, me = Object.entries(Ie).reduce((x, [j, se]) => {
              const Le = Ce[j],
                Re = se,
                Oe = ae.max(Re.minus(Le), 0).toNumber();
              return {
                ...x,
                [j]: Oe
              }
            }, {}), Me = 5e3 / Object.values(me).reduce((x, j) => x + j, 0), we = T, Ne = x => ({
              id: Je(),
              image: He(x),
              position: {
                x: le(0, 20) - 10,
                y: le(0, 20) - 10
              },
              animationType: le(1, 2),
              createdAt: Date.now()
            });
            Object.entries(me).reduce((x, [j, se]) => x.concat(Array(se).fill(j)), []).sort(() => Math.random() - .5).forEach((x, j) => {
              b.push(setTimeout(() => {
                we === T && O.value.push(Ne(x))
              }, Me * j))
            })
          }, 5e3),
          E = async () => {
            await F.exec(), M = We(() => {
              O.value = O.value.filter(G => Date.now() - G.createdAt < 6e3)
            }, 2e3)
          }, Y = () => {
            F.destroy(), b.forEach(clearTimeout), M && clearInterval(M), R.value = void 0, O.value = []
          };
        Z(() => c.value.shortname, () => {
          T++, b.forEach(clearTimeout), Y(), E()
        }), E(), X(Y);
        const Q = () => {
          Y(), E()
        };
        return {
          reactionsAnimations: L(() => O.value),
          ANIMATION_DURATION: 6e3,
          restart: Q
        }
      }
      return (h, _) => {
        var O, V, F;
        const T = re,
          b = st,
          M = en,
          R = mn;
        return o(), r("div", pn, [s("div", _n, [e(d).isLowEndDevice.value ? I("", !0) : (o(), r("img", {
          key: 0,
          src: e(N),
          alt: "Gif",
          class: te([{
            "is-version-1": ((O = e(c).tokenCollectedPercent) == null ? void 0 : O.lte(30)) && !e(a).isReleased,
            "is-version-2": ((V = e(c).tokenCollectedPercent) == null ? void 0 : V.gt(30)) && e(c).tokenCollectedPercent.lte(60) && !e(a).isReleased,
            "is-version-3": ((F = e(c).tokenCollectedPercent) == null ? void 0 : F.gt(60)) && !e(a).isReleased,
            "is-dex": e(a).isReleased
          }, "gif"])
        }, null, 10, vn)), s("img", {
          src: e($),
          alt: "Gif",
          class: "room"
        }, null, 8, hn), _[2] || (_[2] = s("div", {
          class: "gradient"
        }, null, -1))]), s("div", fn, [s("div", gn, [s("div", kn, [u(T, {
          name: "animations/Fire",
          size: 28
        }), s("div", yn, p(("t" in h ? h.t : e(k))("memepad.explore.spotlight.title")), 1)]), h.list.length > 1 ? (o(), g(b, {
          key: 0,
          "model-value": e(n),
          count: h.list.length,
          timer: 15e3,
          "onUpdate:modelValue": l
        }, null, 8, ["model-value", "count"])) : I("", !0)]), s("div", {
          ref_key: "listEl",
          ref: v,
          class: "list",
          onScroll: _[0] || (_[0] = (...E) => e(i) && e(i)(...E)),
          onTouchmove: _[1] || (_[1] = (...E) => e(i) && e(i)(...E))
        }, [(o(!0), r(J, null, ce(t.list, (E, Y) => (o(), g(M, {
          key: E.id,
          index: Y,
          jetton: E,
          class: "item"
        }, null, 8, ["index", "jetton"]))), 128))], 544), (o(), g(R, {
          key: e(a).id,
          jetton: e(a),
          "move-direction": e(A),
          "market-cap": e(c).marketCap,
          "token-collected-percent": e(c).tokenCollectedPercent
        }, null, 8, ["jetton", "move-direction", "market-cap", "token-collected-percent"])), s("div", {
          class: "reactions",
          style: ie({
            "--animation-duration": `${e(f)}ms`
          })
        }, [(o(!0), r(J, null, ce(e(K), E => (o(), r("img", {
          key: E.id,
          src: E.image,
          class: te(`animation-${E.animationType}`),
          style: ie({
            "--x-offset": E.position.x + "px",
            "--y-offset": E.position.y + "px"
          })
        }, null, 14, $n))), 128))], 4)])])
      }
    }
  }),
  En = D(bn, [
    ["__scopeId", "data-v-42f23f4b"]
  ]),
  Sn = {
    class: "memepad-explore-panel-list"
  },
  An = {
    class: "top"
  },
  Tn = {
    key: 0,
    class: "search-btn-wrapper"
  },
  Cn = {
    key: 0,
    class: "connect"
  },
  In = {
    class: "label"
  },
  Mn = {
    key: 1,
    class: "connect"
  },
  wn = {
    key: 1,
    class: "empty-state"
  },
  Nn = {
    class: "label"
  },
  Ln = P({
    __name: "PanelList",
    props: ee({
      items: {
        default: void 0
      },
      searchable: {
        type: Boolean,
        default: !0
      }
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ee(["search", "scrolled"], ["update:modelValue"]),
    setup(S) {
      const t = $e(S, "modelValue"),
        d = ze(),
        n = qe(),
        a = [{
          value: m.NEW,
          pingDot: !0
        }, {
          value: m.HOT
        }, {
          value: m.BLUMING
        }, {
          value: m.DEX
        }, {
          value: m.MCAP
        }, {
          value: m.STARRED
        }, {
          value: m.LIVE
        }, {
          value: m.MY_TOKENS
        }].map(i => {
          const c = {
            [m.NEW]: "New",
            [m.HOT]: "Hot",
            [m.LISTINGS]: "Listings",
            [m.BLUMING]: "Bluming",
            [m.DEX]: "DEX",
            [m.MCAP]: "MCap",
            [m.STARRED]: "Starred",
            [m.LIVE]: "Live",
            [m.MY_TOKENS]: "My tokens"
          };
          return {
            ...i,
            label: c[i.value]
          }
        }),
        l = L(() => {
          switch (t.value) {
            case m.NEW:
              return U.NEW;
            case m.BLUMING:
              return U.BLUMING;
            case m.HOT:
              return U.HOT;
            case m.MY_TOKENS:
              return U.POSITIONS;
            case m.MCAP:
              return U.MCAP;
            case m.LISTINGS:
              return U.LISTINGS;
            case m.DEX:
              return U.DEX;
            case m.STARRED:
              return U.STARRED
          }
        }),
        v = L(() => t.value === m.MY_TOKENS ? _e.MY_TOKENS : _e.BASE);
      return (i, c) => {
        const y = H,
          A = at,
          $ = ye,
          K = Te,
          f = ct,
          C = rt;
        return o(), r("div", Sn, [s("div", An, [u(A, {
          modelValue: t.value,
          "onUpdate:modelValue": c[1] || (c[1] = N => t.value = N),
          items: e(a)
        }, {
          after: B(() => [i.searchable ? (o(), r("div", Tn, [s("button", {
            type: "button",
            class: "search reset",
            onClick: c[0] || (c[0] = N => i.$emit("search"))
          }, [u(y, {
            name: "search",
            class: "icon"
          })])])) : I("", !0)]),
          _: 1
        }, 8, ["modelValue", "items"])]), (e(d).wallet.value.status === "must_reconnect" || e(d).wallet.value.status === "not_found") && t.value === e(m).MY_TOKENS ? (o(), r("div", Cn, [s("div", In, p(("t" in i ? i.t : e(k))("memepad.explore.my_tokens.connect_text")), 1), s("button", {
          type: "button",
          class: "reset",
          onClick: c[2] || (c[2] = N => e(n).runConnectionFlow())
        }, p(("t" in i ? i.t : e(k))("wallet.connect.btn")), 1)])) : e(d).wallet.value.status === "loading" && t.value === e(m).MY_TOKENS ? (o(), r("div", Mn, [u($, {
          type: e(ke).LIGHT
        }, null, 8, ["type"])])) : i.items ? (o(), g(f, {
          key: 2,
          onEnd: c[3] || (c[3] = N => i.$emit("scrolled"))
        }, {
          default: B(() => [i.items.length ? (o(), g(K, {
            key: t.value,
            items: i.items,
            "analytics-source": e(l),
            mode: e(v)
          }, null, 8, ["items", "analytics-source", "mode"])) : t.value === e(m).MY_TOKENS ? (o(), r("div", wn, [u(y, {
            name: "add-plus-circle",
            class: "icon"
          }), s("div", Nn, p(("t" in i ? i.t : e(k))("memepad.explore.my_tokens.empty_text")), 1)])) : I("", !0)]),
          _: 1
        })) : (o(), r(J, {
          key: 3
        }, ce(6, N => s("div", {
          key: N,
          class: "skeleton"
        }, [u(C, {
          class: "image"
        }), u(C, {
          class: "ticker"
        }), u(C, {
          class: "stats"
        })])), 64))])
      }
    }
  }),
  Rn = D(Ln, [
    ["__scopeId", "data-v-d0910cca"]
  ]),
  On = {
    class: "memepad-search page"
  },
  Pn = {
    key: 0,
    class: "empty"
  },
  Dn = P({
    __name: "Search",
    emits: ["close"],
    setup(S, {
      emit: t
    }) {
      const d = t,
        n = w(),
        a = lt();
      a._flow.init(), X(() => a._flow.destroy());
      const l = w(!1),
        v = w(""),
        i = [];
      (() => {
        i.push(setTimeout(() => {
          l.value = !0
        }, 400))
      })(), X(() => {
        i.forEach($ => clearTimeout($))
      });
      const {
        debouncedFunction: y
      } = Ae(a.search, 600);
      return Z(v, y), oe().memepad.memepadSearchOpen(), Xe().initHandler(() => d("close"), "memepad-search"), ($, K) => {
        const f = dt,
          C = Te;
        return o(), r("div", On, [u(f, {
          ref_key: "searchWithTitleComponent",
          ref: n,
          modelValue: e(v),
          "onUpdate:modelValue": K[0] || (K[0] = N => ue(v) ? v.value = N : null),
          placeholder: ("t" in $ ? $.t : e(k))("memepad.search.input_placeholder"),
          activated: e(l),
          autofocus: "",
          "is-loading": e(a).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), e(a).data.value ? (o(), r(J, {
          key: 0
        }, [e(a).data.value.length === 0 ? (o(), r("div", Pn, p(("t" in $ ? $.t : e(k))("memepad.search.empty_text")), 1)) : (o(), g(C, {
          key: 1,
          items: e(a).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in $ ? $.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : e(U)).SEARCH
        }, null, 8, ["items", "analytics-source"]))], 64)) : I("", !0)])
      }
    }
  }),
  Kn = D(Dn, [
    ["__scopeId", "data-v-4ec42003"]
  ]),
  Un = {
    key: 0,
    class: "memepad-explore"
  },
  Vn = {
    class: "header"
  },
  xn = {
    class: "title"
  },
  fe = !1,
  Bn = P({
    __name: "Index",
    setup(S) {
      const {
        events: t,
        spotlight: d,
        panelList: n,
        _flow: {
          init: a,
          destroy: l
        }
      } = it(), {
        addresses: v
      } = ut(), {
        launchingJettons: i
      } = Qe(), {
        aiAgentStatusesNotClickedList: c,
        loadAiAgentSocialsActivateLinkAndOpen: y,
        isAiAgentStatusBannerLoading: A,
        setAiAgentStatusBannerClicked: $
      } = mt(), K = w(!1);
      a().then(() => {
        K.value = !0
      }), X(() => {
        l()
      });
      const f = L(() => {
          var R, O;
          const T = (R = v.value) == null ? void 0 : R.isAvailableAI,
            b = (O = c.value) == null ? void 0 : O.at(0);
          if (b && T) {
            const V = b.shortname;
            return {
              onClick: async () => {
                oe().memepad.memepadJettonAiSocialsActivate({
                  source: "main"
                }), await y(V), $(V)
              },
              title: k("memepad.ai_agent.activate_banner_label", {
                ticker: b.ticker
              }),
              loading: A(V)
            }
          }
          const M = i.value.at(0);
          if (M) return {
            onClick: () => {
              oe().memepad.memepadJettonLaunchingBannerClick({
                flowType: M.form.withAgent ? ve.AI : ve.REGULAR
              }), W().push({
                name: "memepad-new-launching-id",
                params: {
                  id: M.id
                }
              })
            },
            title: k("memepad.explore.launching_jetton_banner.label", {
              ticker: M.form.ticker
            }),
            loading: !1
          }
        }),
        C = w(!!Ze().query.search),
        N = L(() => C.value && fe),
        z = () => {
          W().push({
            name: "memepad-new",
            query: {
              memepadNewFrom: et.MEMEPAD_MAIN
            }
          })
        },
        h = () => {
          W().push({
            query: {
              search: "1"
            }
          }), C.value = !0
        },
        _ = () => {
          C.value = !1, W().push({
            query: {
              search: void 0
            }
          })
        };
      return (T, b) => {
        var Q;
        const M = bt,
          R = Rt,
          O = Yt,
          V = En,
          F = Rn,
          E = tt,
          Y = Kn;
        return o(), r(J, null, [e(K) ? (o(), r("div", Un, [e(f) ? (o(), g(M, {
          key: 0,
          title: e(f).title,
          loading: e(f).loading,
          class: "status-banner",
          onClick: e(f).onClick
        }, null, 8, ["title", "loading", "onClick"])) : I("", !0), s("div", Vn, [s("div", xn, p(("t" in T ? T.t : e(k))("memepad.explore.title")), 1), u(R, {
          onLaunch: z
        })]), e(t).eventAppearedItem.value ? (o(), g(O, {
          key: 1,
          event: e(t).eventAppearedItem.value,
          class: "event"
        }, null, 8, ["event"])) : I("", !0), (Q = e(d).items.value) != null && Q.length ? (o(), g(V, {
          key: 2,
          list: e(d).items.value,
          "get-reactions": e(d).getReactions
        }, null, 8, ["list", "get-reactions"])) : I("", !0), u(F, {
          modelValue: e(n).activeTab.value,
          "onUpdate:modelValue": b[0] || (b[0] = G => e(n).activeTab.value = G),
          items: e(n).items.value,
          searchable: fe,
          onSearch: h,
          onScrolled: e(n).onPaginationLoad
        }, null, 8, ["modelValue", "items", "onScrolled"])])) : (o(), g(E, {
          key: 1
        })), e(N) ? (o(), g(Y, {
          key: 2,
          onClose: _
        })) : I("", !0)], 64)
      }
    }
  }),
  jn = D(Bn, [
    ["__scopeId", "data-v-476989d4"]
  ]),
  Fn = {
    class: "memepad-index page"
  },
  ge = "memepad-intro",
  Yn = P({
    __name: "index",
    setup(S) {
      const {
        $webApp: t
      } = de(), d = w(t.storage.local.get(ge) ? "explore" : "intro"), n = () => {
        d.value = "explore", t.storage.local.set(ge, "true")
      };
      return oe().memepad.memepadExploreOpen(), (l, v) => {
        const i = Pe,
          c = gt,
          y = jn;
        return o(), r("div", Fn, [u(i), e(d) === "intro" ? (o(), g(c, {
          key: 0,
          onStart: n
        })) : e(d) === "explore" ? (o(), g(y, {
          key: 1
        })) : I("", !0)])
      }
    }
  }),
  co = D(Yn, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  co as
  default
};