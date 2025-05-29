import {
  _ as Oe
} from "./D125EveM.js";
import {
  d as O,
  o as n,
  c as r,
  a as s,
  b as u,
  t as p,
  e,
  z as k,
  C as B,
  aJ as re,
  f as D,
  y as g,
  a_ as ke,
  a$ as ye,
  _ as H,
  a4 as ee,
  h as de,
  A as $e,
  I as N,
  j as L,
  E as I,
  p as ue,
  a9 as De,
  x as Ke,
  aa as Ue,
  m as Ve,
  F as W,
  ao as J,
  aR as U,
  b0 as xe,
  a7 as Be,
  b1 as je,
  b2 as Fe,
  b3 as be,
  n as te,
  b4 as Ee,
  U as Se,
  b5 as oe,
  aH as ie,
  av as pe,
  aj as Ge,
  ae,
  J as Q,
  a8 as q,
  af as X,
  ad as Ye,
  q as ce,
  N as Ae,
  aL as Je,
  b6 as We,
  b7 as He,
  b8 as le,
  ab as ze,
  ay as qe,
  M as m,
  G as _e,
  a5 as ne,
  a3 as Xe,
  b9 as Ze,
  ba as ve,
  bb as Qe,
  aD as et,
  P as tt
} from "./YXPW7IJg.js";
import {
  _ as ot
} from "./YJ664n06.js";
import {
  _ as nt
} from "./DCbQZWOF.js";
import {
  _ as st
} from "./CMeJX8BK.js";
import {
  _ as at
} from "./DEO02R65.js";
import {
  _ as Te,
  a as lt,
  b as it
} from "./BGnf9DJj.js";
import {
  _ as ct
} from "./lxtCRYSn.js";
import {
  _ as rt
} from "./DJBDGv2L.js";
import {
  _ as dt
} from "./BY-dlbbD.js";
import {
  u as ut,
  a as mt
} from "./CBfN3nev.js";
import "./DnFZ1JsJ.js";
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
  ft = O({
    __name: "Intro",
    emits: ["start"],
    setup(S) {
      return (t, d) => {
        const o = re,
          a = ot;
        return n(), r("div", pt, [s("div", _t, [u(o, {
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
  $t = O({
    __name: "StatusBanner",
    props: {
      title: {},
      loading: {
        type: Boolean
      }
    },
    setup(S) {
      return (t, d) => {
        const o = ye,
          a = H;
        return n(), r("button", {
          type: "button",
          class: "memepad-explore-status-banner reset",
          disabled: t.loading
        }, [d[0] || (d[0] = s("div", {
          class: "ping-dot"
        }, null, -1)), s("div", yt, p(t.title), 1), t.loading ? (n(), g(o, {
          key: 0,
          class: "spinner",
          size: 16,
          type: e(ke).DARK
        }, null, 8, ["type"])) : (n(), g(a, {
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
  Nt = O({
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
      } = de(), o = S, a = t, l = $e(S, "modelValue"), v = N(!o.dontShowStorageKey), i = N(!1), c = L({
        get: () => l.value && v.value,
        set: f => {
          l.value = f, i.value && o.dontShowStorageKey && d.storage.local.set(o.dontShowStorageKey, "true")
        }
      });
      (() => {
        o.dontShowStorageKey && (v.value = !d.storage.local.get(o.dontShowStorageKey))
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
        const w = re,
          z = H,
          h = nt,
          _ = Ke,
          T = Ue;
        return n(), g(T, {
          "model-value": e(c),
          "onUpdate:modelValue": $
        }, {
          default: B(() => [s("div", Et, [u(w, {
            name: f.lottie,
            size: 116
          }, null, 8, ["name"]), s("div", St, p(f.title), 1), s("div", null, [s("div", At, p(f.subtitle), 1), f.hideReadMore ? I("", !0) : (n(), r("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: A
          }, [s("span", Tt, p(("t" in f ? f.t : e(k))("base.read_more")), 1), u(z, {
            name: "arrow-right",
            class: "icon"
          })]))]), s("div", Ct, [f.dontShowStorageKey ? (n(), r("div", It, [s("div", Mt, [u(h, {
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
  wt = D(Nt, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  he = "memepad-launch-jetton",
  Lt = O({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(S, {
      emit: t
    }) {
      const {
        $webApp: d
      } = de(), o = t, a = N(!1), l = N(d.storage.local.get(he) ? "watched" : "unwatched"), v = () => {
        l.value === "watched" ? o("launch") : a.value = !0
      }, i = () => {
        d.storage.local.set(he, "true"), o("launch")
      };
      return (c, y) => {
        const A = wt;
        return n(), r(W, null, [s("button", {
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
  Pt = ["src"],
  Ot = {
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
  Ft = O({
    __name: "Event",
    props: {
      event: {}
    },
    setup(S) {
      const t = S,
        d = L(() => k(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        o = L(() => J().resolve({
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
        return n(), g(A, {
          to: e(o),
          class: te(["memepad-explore-event", `is-${l.event.type.toLowerCase()}`])
        }, {
          default: B(() => [l.event.user.avatarUrl ? (n(), r("img", {
            key: 0,
            src: l.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, Pt)) : (n(), r("div", Ot, [u(i, {
            name: "space-invader",
            class: "icon"
          })])), s("div", Dt, [l.event.user.nickname ? (n(), r("span", Kt, p(l.event.user.nickname), 1)) : (n(), r("span", Ut, p(("sliceWalletAddress" in l ? l.sliceWalletAddress : e(je))(l.event.user.address)), 1)), s("span", Vt, p(e(d)), 1), l.event.amount ? (n(), g(c, {
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
  Gt = D(Ft, [
    ["__scopeId", "data-v-5d587a0b"]
  ]),
  Yt = {
    class: "ticker"
  },
  Jt = {
    key: 0,
    class: "live"
  },
  Wt = {
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
  Zt = {
    class: "text"
  },
  Qt = O({
    __name: "Card",
    props: {
      jetton: {},
      index: {}
    },
    setup(S) {
      const t = S,
        d = L(() => J().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: `spotlight-${t.index+1}`
          }
        }));
      return (o, a) => {
        const l = Ee,
          v = H,
          i = Se;
        return n(), g(i, {
          to: e(d),
          class: "memepad-explore-spotlight-card"
        }, {
          default: B(() => [u(l, {
            src: e(be)(o.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), s("span", Yt, p(o.jetton.ticker), 1), o.jetton.streamOnline ? (n(), r("div", Jt, [a[0] || (a[0] = s("div", {
            class: "dot"
          }, null, -1)), s("div", Wt, p(("t" in o ? o.t : e(k))("memepad.explore.spotlight.live")), 1)])) : (n(), r("div", Ht, [s("div", zt, [u(v, {
            name: "personal",
            class: "icon"
          }), s("span", qt, p(o.jetton.stats.holdersCount ? ("formatCount" in o ? o.formatCount : e(oe))(o.jetton.stats.holdersCount, {
            accuracy: 0
          }).full : "-"), 1)]), s("div", Xt, [u(v, {
            name: "transfer",
            class: "icon"
          }), s("span", Zt, p(o.jetton.stats.transactionsCount ? ("formatCount" in o ? o.formatCount : e(oe))(o.jetton.stats.transactionsCount, {
            accuracy: 0
          }).full : "-"), 1)])]))]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  eo = D(Qt, [
    ["__scopeId", "data-v-20e41bcf"]
  ]),
  to = {
    class: "inner"
  },
  oo = {
    class: "left"
  },
  no = {
    class: "mc"
  },
  so = {
    key: 0,
    class: "diff"
  },
  ao = {
    key: 1,
    class: "percent"
  },
  lo = {
    class: "progress"
  },
  io = {
    class: "direction-wrapper"
  },
  co = {
    key: 0,
    class: "direction up"
  },
  ro = {
    key: 0,
    class: "direction down"
  },
  uo = O({
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
        const o = H;
        return n(), r("div", {
          class: te(["memepad-explore-spotlight-progress", [t.moveDirection && `is-${(a=t.moveDirection)==null?void 0:a.direction}`, {
            "is-released": t.jetton.isReleased
          }]])
        }, [s("div", to, [s("div", oo, [s("span", no, p(t.marketCap ? `$${t.marketCap.full}` : "-"), 1), t.moveDirection ? (n(), r("span", so, p(t.moveDirection.diffFormatted), 1)) : I("", !0)]), t.jetton.isReleased ? (n(), g(o, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (n(), r("span", ao, p(t.tokenCollectedPercent ?? "-") + "% ", 1))]), s("div", lo, [s("div", {
          class: "line",
          style: ie({
            width: `${t.tokenCollectedPercent}%`
          })
        }, [s("div", io, [u(pe, {
          name: "direction-opacity"
        }, {
          default: B(() => {
            var l;
            return [((l = t.moveDirection) == null ? void 0 : l.direction) === "up" ? (n(), r("div", co, [u(o, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), u(o, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), u(o, {
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
            return [((l = t.moveDirection) == null ? void 0 : l.direction) === "down" ? (n(), r("div", ro, [u(o, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), u(o, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), u(o, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : I("", !0)]
          }),
          _: 1
        })])], 4)])], 2)
      }
    }
  }),
  mo = D(uo, [
    ["__scopeId", "data-v-a683f66f"]
  ]),
  po = {
    class: "memepad-explore-spotlight"
  },
  _o = {
    class: "bg"
  },
  vo = ["src"],
  ho = ["src"],
  fo = {
    class: "content"
  },
  go = {
    class: "header"
  },
  ko = {
    class: "logo"
  },
  yo = {
    class: "title"
  },
  $o = ["src"],
  bo = O({
    __name: "Spotlight",
    props: {
      list: {},
      getReactions: {
        type: Function
      }
    },
    setup(S) {
      const t = S,
        d = Ge(),
        o = N(0),
        a = L(() => t.list[o.value]),
        l = h => {
          var _;
          (_ = v.value) == null || _.scrollTo({
            left: h * window.innerWidth + (o.value > h ? -1 : 1),
            behavior: "smooth"
          })
        },
        v = N(null),
        i = Ae(() => {
          if (!v.value) return;
          const h = v.value.children[0].offsetWidth + 10,
            _ = v.value.scrollLeft,
            T = Math.round(_ / h);
          o.value = T
        }, 50).debouncedFunction,
        c = L(() => {
          const h = (() => {
              if (!(!a.value.stats.tokenCollected || !a.value.tokenForDex)) return new ae(a.value.stats.tokenCollected.div(a.value.tokenForDex).times(100).toFixed(0, ae.ROUND_DOWN))
            })(),
            _ = a.value.stats.marketCap && oe(a.value.stats.marketCap);
          return {
            id: a.value.id,
            shortname: a.value.shortname,
            tokenCollectedPercent: h,
            marketCap: _
          }
        }),
        y = [],
        A = N();
      Q(c, (h, _) => {
        if (!h.marketCap || !_.marketCap || h.marketCap.full === _.marketCap.full || h.id !== _.id) {
          A.value = void 0;
          return
        }
        const T = h.marketCap.raw.minus(_.marketCap.raw),
          b = T.lt(0),
          M = oe(T.abs(), {
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
      Q(o, C, {
        immediate: !0
      }), X(() => {
        y.forEach(clearTimeout)
      });
      const w = L(() => a.value.isReleased ? q("memepad/dex-bg", "gif") : q("memepad/bg", "gif"));

      function z() {
        let T = 0;
        const b = [];
        let M;
        const R = N(),
          P = N([]),
          F = Ye(async () => await t.getReactions(c.value.shortname), Y => {
            if (!R.value) {
              R.value = Y;
              return
            }
            const {
              user: Yo,
              userStars: Jo,
              ...Ce
            } = R.value;
            R.value = Y;
            const {
              user: Wo,
              userStars: Ho,
              ...Ie
            } = R.value, me = Object.entries(Ie).reduce((x, [j, se]) => {
              const Le = Ce[j],
                Re = se,
                Pe = ae.max(Re.minus(Le), 0).toNumber();
              return {
                ...x,
                [j]: Pe
              }
            }, {}), Me = 5e3 / Object.values(me).reduce((x, j) => x + j, 0), Ne = T, we = x => ({
              id: We(),
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
                Ne === T && P.value.push(we(x))
              }, Me * j))
            })
          }, 5e3),
          E = async () => {
            await F.exec(), M = Je(() => {
              P.value = P.value.filter(Y => Date.now() - Y.createdAt < 6e3)
            }, 2e3)
          }, G = () => {
            F.destroy(), b.forEach(clearTimeout), M && clearInterval(M), R.value = void 0, P.value = []
          };
        Q(() => c.value.shortname, () => {
          T++, b.forEach(clearTimeout), G(), E()
        }), E(), X(G);
        const Z = () => {
          G(), E()
        };
        return {
          reactionsAnimations: L(() => P.value),
          ANIMATION_DURATION: 6e3,
          restart: Z
        }
      }
      return (h, _) => {
        var P, V, F;
        const T = re,
          b = st,
          M = eo,
          R = mo;
        return n(), r("div", po, [s("div", _o, [e(d).isLowEndDevice.value ? I("", !0) : (n(), r("img", {
          key: 0,
          src: e(w),
          alt: "Gif",
          class: te([{
            "is-version-1": ((P = e(c).tokenCollectedPercent) == null ? void 0 : P.lte(30)) && !e(a).isReleased,
            "is-version-2": ((V = e(c).tokenCollectedPercent) == null ? void 0 : V.gt(30)) && e(c).tokenCollectedPercent.lte(60) && !e(a).isReleased,
            "is-version-3": ((F = e(c).tokenCollectedPercent) == null ? void 0 : F.gt(60)) && !e(a).isReleased,
            "is-dex": e(a).isReleased
          }, "gif"])
        }, null, 10, vo)), s("img", {
          src: e($),
          alt: "Gif",
          class: "room"
        }, null, 8, ho), _[2] || (_[2] = s("div", {
          class: "gradient"
        }, null, -1))]), s("div", fo, [s("div", go, [s("div", ko, [u(T, {
          name: "animations/Fire",
          size: 28
        }), s("div", yo, p(("t" in h ? h.t : e(k))("memepad.explore.spotlight.title")), 1)]), h.list.length > 1 ? (n(), g(b, {
          key: 0,
          "model-value": e(o),
          count: h.list.length,
          timer: 15e3,
          "onUpdate:modelValue": l
        }, null, 8, ["model-value", "count"])) : I("", !0)]), s("div", {
          ref_key: "listEl",
          ref: v,
          class: "list",
          onScroll: _[0] || (_[0] = (...E) => e(i) && e(i)(...E)),
          onTouchmove: _[1] || (_[1] = (...E) => e(i) && e(i)(...E))
        }, [(n(!0), r(W, null, ce(t.list, (E, G) => (n(), g(M, {
          key: E.id,
          index: G,
          jetton: E,
          class: "item"
        }, null, 8, ["index", "jetton"]))), 128))], 544), (n(), g(R, {
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
        }, [(n(!0), r(W, null, ce(e(K), E => (n(), r("img", {
          key: E.id,
          src: E.image,
          class: te(`animation-${E.animationType}`),
          style: ie({
            "--x-offset": E.position.x + "px",
            "--y-offset": E.position.y + "px"
          })
        }, null, 14, $o))), 128))], 4)])])
      }
    }
  }),
  Eo = D(bo, [
    ["__scopeId", "data-v-42f23f4b"]
  ]),
  So = {
    class: "memepad-explore-panel-list"
  },
  Ao = {
    class: "top"
  },
  To = {
    key: 0,
    class: "search-btn-wrapper"
  },
  Co = {
    key: 0,
    class: "connect"
  },
  Io = {
    class: "label"
  },
  Mo = {
    key: 1,
    class: "connect"
  },
  No = {
    key: 1,
    class: "empty-state"
  },
  wo = {
    class: "label"
  },
  Lo = O({
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
        o = qe(),
        a = [{
          value: m.NEW,
          pingDot: !0
        }, {
          value: m.LISTINGS
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
        return n(), r("div", So, [s("div", Ao, [u(A, {
          modelValue: t.value,
          "onUpdate:modelValue": c[1] || (c[1] = w => t.value = w),
          items: e(a)
        }, {
          after: B(() => [i.searchable ? (n(), r("div", To, [s("button", {
            type: "button",
            class: "search reset",
            onClick: c[0] || (c[0] = w => i.$emit("search"))
          }, [u(y, {
            name: "search",
            class: "icon"
          })])])) : I("", !0)]),
          _: 1
        }, 8, ["modelValue", "items"])]), (e(d).wallet.value.status === "must_reconnect" || e(d).wallet.value.status === "not_found") && t.value === e(m).MY_TOKENS ? (n(), r("div", Co, [s("div", Io, p(("t" in i ? i.t : e(k))("memepad.explore.my_tokens.connect_text")), 1), s("button", {
          type: "button",
          class: "reset",
          onClick: c[2] || (c[2] = w => e(o).runConnectionFlow())
        }, p(("t" in i ? i.t : e(k))("wallet.connect.btn")), 1)])) : e(d).wallet.value.status === "loading" && t.value === e(m).MY_TOKENS ? (n(), r("div", Mo, [u($, {
          type: e(ke).LIGHT
        }, null, 8, ["type"])])) : i.items ? (n(), g(f, {
          key: 2,
          onEnd: c[3] || (c[3] = w => i.$emit("scrolled"))
        }, {
          default: B(() => [i.items.length ? (n(), g(K, {
            key: t.value,
            items: i.items,
            "analytics-source": e(l),
            mode: e(v)
          }, null, 8, ["items", "analytics-source", "mode"])) : t.value === e(m).MY_TOKENS ? (n(), r("div", No, [u(y, {
            name: "add-plus-circle",
            class: "icon"
          }), s("div", wo, p(("t" in i ? i.t : e(k))("memepad.explore.my_tokens.empty_text")), 1)])) : I("", !0)]),
          _: 1
        })) : (n(), r(W, {
          key: 3
        }, ce(6, w => s("div", {
          key: w,
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
  Ro = D(Lo, [
    ["__scopeId", "data-v-3a0e67cd"]
  ]),
  Po = {
    class: "memepad-search page"
  },
  Oo = {
    key: 0,
    class: "empty"
  },
  Do = O({
    __name: "Search",
    emits: ["close"],
    setup(S, {
      emit: t
    }) {
      const d = t,
        o = N(),
        a = lt();
      a._flow.init(), X(() => a._flow.destroy());
      const l = N(!1),
        v = N(""),
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
      return Q(v, y), ne().memepad.memepadSearchOpen(), Xe().initHandler(() => d("close"), "memepad-search"), ($, K) => {
        const f = dt,
          C = Te;
        return n(), r("div", Po, [u(f, {
          ref_key: "searchWithTitleComponent",
          ref: o,
          modelValue: e(v),
          "onUpdate:modelValue": K[0] || (K[0] = w => ue(v) ? v.value = w : null),
          placeholder: ("t" in $ ? $.t : e(k))("memepad.search.input_placeholder"),
          activated: e(l),
          autofocus: "",
          "is-loading": e(a).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), e(a).data.value ? (n(), r(W, {
          key: 0
        }, [e(a).data.value.length === 0 ? (n(), r("div", Oo, p(("t" in $ ? $.t : e(k))("memepad.search.empty_text")), 1)) : (n(), g(C, {
          key: 1,
          items: e(a).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in $ ? $.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : e(U)).SEARCH
        }, null, 8, ["items", "analytics-source"]))], 64)) : I("", !0)])
      }
    }
  }),
  Ko = D(Do, [
    ["__scopeId", "data-v-4ec42003"]
  ]),
  Uo = {
    key: 0,
    class: "memepad-explore"
  },
  Vo = {
    class: "header"
  },
  xo = {
    class: "title"
  },
  fe = !1,
  Bo = O({
    __name: "Index",
    setup(S) {
      const {
        events: t,
        spotlight: d,
        panelList: o,
        _flow: {
          init: a,
          destroy: l
        }
      } = it(), {
        addresses: v
      } = ut(), {
        launchingJettons: i
      } = Ze(), {
        aiAgentStatusesNotClickedList: c,
        loadAiAgentSocialsActivateLinkAndOpen: y,
        isAiAgentStatusBannerLoading: A,
        setAiAgentStatusBannerClicked: $
      } = mt(), K = N(!1);
      a().then(() => {
        K.value = !0
      }), X(() => {
        l()
      });
      const f = L(() => {
          var R, P;
          const T = (R = v.value) == null ? void 0 : R.isAvailableAI,
            b = (P = c.value) == null ? void 0 : P.at(0);
          if (b && T) {
            const V = b.shortname;
            return {
              onClick: async () => {
                ne().memepad.memepadJettonAiSocialsActivate({
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
              ne().memepad.memepadJettonLaunchingBannerClick({
                flowType: M.form.withAgent ? ve.AI : ve.REGULAR
              }), J().push({
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
        C = N(!!Qe().query.search),
        w = L(() => C.value && fe),
        z = () => {
          J().push({
            name: "memepad-new",
            query: {
              memepadNewFrom: et.MEMEPAD_MAIN
            }
          })
        },
        h = () => {
          J().push({
            query: {
              search: "1"
            }
          }), C.value = !0
        },
        _ = () => {
          C.value = !1, J().push({
            query: {
              search: void 0
            }
          })
        };
      return (T, b) => {
        var Z;
        const M = bt,
          R = Rt,
          P = Gt,
          V = Eo,
          F = Ro,
          E = tt,
          G = Ko;
        return n(), r(W, null, [e(K) ? (n(), r("div", Uo, [e(f) ? (n(), g(M, {
          key: 0,
          title: e(f).title,
          loading: e(f).loading,
          class: "status-banner",
          onClick: e(f).onClick
        }, null, 8, ["title", "loading", "onClick"])) : I("", !0), s("div", Vo, [s("div", xo, p(("t" in T ? T.t : e(k))("memepad.explore.title")), 1), u(R, {
          onLaunch: z
        })]), e(t).eventAppearedItem.value ? (n(), g(P, {
          key: 1,
          event: e(t).eventAppearedItem.value,
          class: "event"
        }, null, 8, ["event"])) : I("", !0), (Z = e(d).items.value) != null && Z.length ? (n(), g(V, {
          key: 2,
          list: e(d).items.value,
          "get-reactions": e(d).getReactions
        }, null, 8, ["list", "get-reactions"])) : I("", !0), u(F, {
          modelValue: e(o).activeTab.value,
          "onUpdate:modelValue": b[0] || (b[0] = Y => e(o).activeTab.value = Y),
          items: e(o).items.value,
          searchable: fe,
          onSearch: h,
          onScrolled: e(o).onPaginationLoad
        }, null, 8, ["modelValue", "items", "onScrolled"])])) : (n(), g(E, {
          key: 1
        })), e(w) ? (n(), g(G, {
          key: 2,
          onClose: _
        })) : I("", !0)], 64)
      }
    }
  }),
  jo = D(Bo, [
    ["__scopeId", "data-v-476989d4"]
  ]),
  Fo = {
    class: "memepad-index page"
  },
  ge = "memepad-intro",
  Go = O({
    __name: "index",
    setup(S) {
      const {
        $webApp: t
      } = de(), d = N(t.storage.local.get(ge) ? "explore" : "intro"), o = () => {
        d.value = "explore", t.storage.local.set(ge, "true")
      };
      return ne().memepad.memepadExploreOpen(), (l, v) => {
        const i = Oe,
          c = gt,
          y = jo;
        return n(), r("div", Fo, [u(i), e(d) === "intro" ? (n(), g(c, {
          key: 0,
          onStart: o
        })) : e(d) === "explore" ? (n(), g(y, {
          key: 1
        })) : I("", !0)])
      }
    }
  }),
  rn = D(Go, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  rn as
  default
};