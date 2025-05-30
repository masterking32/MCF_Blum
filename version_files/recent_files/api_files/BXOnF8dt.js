import {
  d as D,
  o as a,
  c as h,
  a as _,
  aH as he,
  f as $,
  j as E,
  ag as Ge,
  z as m,
  t as V,
  e,
  a4 as X,
  A as ie,
  R as oe,
  I as Y,
  b1 as Ue,
  bX as we,
  y as L,
  aY as Ve,
  b as R,
  E as B,
  bY as ne,
  n as be,
  bZ as ot,
  aZ as Me,
  _ as me,
  B as le,
  a9 as ce,
  a5 as H,
  x as _e,
  K as Ke,
  aL as st,
  L as it,
  Z as lt,
  F as Z,
  q as ee,
  a8 as ye,
  bc as Be,
  b8 as I,
  ah as Se,
  am as x,
  J as ae,
  C as M,
  w as Ie,
  O as De,
  m as Re,
  b_ as ue,
  b$ as $e,
  p as de,
  aa as We,
  aF as Le,
  ai as Ye,
  c0 as rt,
  N as Ee,
  ak as se,
  c1 as ct,
  c2 as dt,
  aq as pt,
  c3 as ut,
  bW as ke,
  aB as ze,
  bl as ge,
  ba as mt,
  av as _t,
  c4 as vt,
  aT as gt,
  ae as Ce,
  bv as ft,
  by as Je,
  b7 as Oe,
  k as At,
  a3 as wt,
  ao as fe,
  bz as bt,
  c5 as Et,
  P as ht
} from "./BMIPMNvl.js";
import {
  M as G,
  g as yt,
  _ as It,
  a as Rt,
  r as kt,
  b as Ae
} from "./B0bBwALp.js";
import {
  K as He
} from "./DiwcvdI6.js";
import {
  _ as qe,
  F as pe,
  a as Ze
} from "./DCVGY8oi.js";
import {
  u as xe
} from "./DHGEUMNW.js";
import {
  _ as je
} from "./B95wWjEa.js";
import {
  _ as Ne
} from "./Cf1lM10g.js";
import {
  _ as Nt
} from "./DpzDarUa.js";
import {
  f as Tt,
  b as St,
  _ as Lt,
  a as Ct,
  c as Ot,
  d as Pt
} from "./C-y03AGA.js";
import {
  _ as Ft
} from "./DQDvD5n6.js";
import {
  _ as Gt
} from "./DYqrf8bs.js";
import {
  b as Qe
} from "./DXF7pX89.js";
const Ut = {
    class: "memepad-new-progress"
  },
  Vt = D({
    __name: "NewProgress",
    props: {
      step: {},
      countSteps: {}
    },
    setup(s) {
      return (r, t) => (a(), h("div", Ut, [_("div", {
        class: "track",
        style: he({
          width: `${r.step/r.countSteps*100}%`
        })
      }, null, 4)]))
    }
  }),
  Mt = $(Vt, [
    ["__scopeId", "data-v-d5a07e30"]
  ]),
  Kt = {
    class: "memepad-new-step-heading"
  },
  Bt = {
    class: "step"
  },
  Dt = {
    class: "label"
  },
  $t = D({
    __name: "NewStepHeading",
    props: {
      stepNumber: {},
      step: {}
    },
    setup(s) {
      const r = s,
        t = E(() => {
          switch (r.step) {
            case G.REVIEW:
              return m("memepad.new.step_review.title");
            case G.PERSONALIZE_TOKEN:
              return m("memepad.new.step_personalize_token.title");
            case G.TOKEN_INFO:
              return m("memepad.new.step_token_info.title");
            default:
              throw r.step, Ge("Invalid step")
          }
        });
      return (p, i) => (a(), h("div", Kt, [_("div", Bt, V(p.stepNumber), 1), _("div", Dt, V(e(t)), 1)]))
    }
  }),
  Te = $($t, [
    ["__scopeId", "data-v-632af9bb"]
  ]),
  Wt = {
    class: "compose"
  },
  Yt = {
    key: 1,
    src: ot,
    alt: "Plus icon"
  },
  zt = {
    class: "content"
  },
  Jt = {
    class: "name"
  },
  Ht = {
    class: "disclaimer"
  },
  qt = {
    key: 2,
    class: "controls"
  },
  Pe = 10,
  Zt = D({
    __name: "Avatar",
    props: X({
      disabled: {
        type: Boolean,
        default: !1
      },
      editable: {
        type: Boolean,
        default: !0
      },
      deletable: {
        type: Boolean,
        default: !0
      }
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: X(["edit"], ["update:modelValue"]),
    setup(s, {
      expose: r
    }) {
      const t = ie(s, "modelValue"),
        p = oe("file-uploader"),
        i = () => {
          var v;
          return (v = p.value) == null ? void 0 : v.triggerFileUpload()
        },
        f = Y(),
        u = E(() => {
          if (t.value) return Ue(t.value)
        }),
        o = E(() => t.value !== void 0 || s.editable),
        c = E(() => t.value !== void 0 && s.deletable),
        l = E(() => o.value || c.value);
      return r({
        selectFile: v => {
          var y;
          (y = p.value) == null || y.onFileSelected(v)
        },
        triggerFileUpload: i
      }), (v, y) => {
        var C;
        const F = Me,
          g = me,
          k = He;
        return a(), h("div", {
          class: be(["memepad-new-form-avatar", {
            "is-disabled": v.disabled
          }])
        }, [_("div", Wt, [e(u) ? (a(), h("div", {
          key: 0,
          class: "image is-uploaded",
          style: he({
            backgroundImage: `url(${e(u)})`
          })
        }, null, 4)) : (a(), h("div", {
          key: 1,
          class: "image wait-upload",
          onClick: y[0] || (y[0] = O => i())
        }, [((C = e(f)) == null ? void 0 : C.status) === e(we).UPLOADING ? (a(), L(F, {
          key: 0,
          type: e(Ve).LIGHT,
          size: 16
        }, null, 8, ["type"])) : (a(), h("img", Yt))])), _("div", zt, [_("div", Jt, V(("t" in v ? v.t : e(m))("memepad.new.step_token_info.field_icon.label")), 1), _("div", Ht, V(("t" in v ? v.t : e(m))("memepad.new.step_token_info.field_icon.description", {
          maxUploadSize: String(Pe)
        })), 1)]), e(l) ? (a(), h("div", qt, [e(c) ? (a(), h("div", {
          key: 0,
          class: "delete",
          onClick: y[1] || (y[1] = O => t.value = void 0)
        }, [R(g, {
          name: "trash",
          class: "icon"
        })])) : B("", !0), e(o) ? (a(), h("div", {
          key: 1,
          class: "edit",
          onClick: y[2] || (y[2] = O => v.$emit("edit"))
        }, [R(g, {
          name: "edit-pencil",
          class: "icon"
        })])) : B("", !0)])) : B("", !0)]), R(k, {
          ref: "file-uploader",
          "hide-ui": "",
          "max-file-size-mb": Pe,
          accept: [e(ne).JPEG, e(ne).PNG, e(ne).GIF],
          disabled: v.disabled,
          crop: "",
          "cropper-params": {
            aspectRatio: 1,
            borderRadius: 999
          },
          "onUpdate:progress": y[3] || (y[3] = O => f.value = O),
          onUploaded: y[4] || (y[4] = O => t.value = O.key)
        }, null, 8, ["accept", "disabled"])], 2)
      }
    }
  }),
  xt = $(Zt, [
    ["__scopeId", "data-v-0fddc1f3"]
  ]),
  jt = D({
    __name: "GenerateButton",
    props: {
      onceGenerated: {
        type: Boolean,
        default: !1
      },
      pending: {
        type: Boolean,
        default: !1
      },
      analyticsType: {},
      analyticsPage: {},
      analyticsStage: {}
    },
    emits: ["click"],
    setup(s, {
      emit: r
    }) {
      const t = r,
        {
          addresses: p
        } = xe(),
        i = E(() => {
          var o;
          return !!((o = p.value) != null && o.isAvailableAI)
        }),
        f = E(() => {
          const o = s.onceGenerated ? m("memepad.new.ai_agent.generate_again_btn") : m("memepad.new.ai_agent.generate_btn"),
            c = s.onceGenerated ? le.GREYSTARS : le.GREENSTARS;
          return {
            label: o,
            type: c
          }
        }),
        u = () => {
          s.onceGenerated ? H().memepad.memepadJettonAiGenerateAgainButtonClick({
            flowType: s.analyticsType,
            page: s.analyticsPage,
            stage: s.analyticsStage
          }) : H().memepad.memepadJettonAiGenerateButtonClick({
            flowType: s.analyticsType,
            page: s.analyticsPage
          }), t("click")
        };
      return (o, c) => {
        const l = _e;
        return e(i) ? (a(), L(l, {
          key: 0,
          label: e(f).label,
          size: e(ce).LARGE,
          type: e(f).type,
          loading: o.pending,
          onClick: u
        }, null, 8, ["label", "size", "type", "loading"])) : B("", !0)
      }
    }
  }),
  Xe = $(jt, [
    ["__scopeId", "data-v-cd79f34a"]
  ]),
  Qt = {
    class: "loader"
  },
  Xt = {
    class: "description"
  },
  en = 3e3,
  tn = D({
    __name: "GenerateContentLoader",
    setup(s) {
      let r;
      const t = E(() => [m("memepad.new.ai_agent.generate_loader_description.1"), m("memepad.new.ai_agent.generate_loader_description.2"), m("memepad.new.ai_agent.generate_loader_description.3"), m("memepad.new.ai_agent.generate_loader_description.4"), m("memepad.new.ai_agent.generate_loader_description.5"), m("memepad.new.ai_agent.generate_loader_description.6"), m("memepad.new.ai_agent.generate_loader_description.7"), m("memepad.new.ai_agent.generate_loader_description.8"), m("memepad.new.ai_agent.generate_loader_description.9"), m("memepad.new.ai_agent.generate_loader_description.10"), m("memepad.new.ai_agent.generate_loader_description.11"), m("memepad.new.ai_agent.generate_loader_description.12"), m("memepad.new.ai_agent.generate_loader_description.13"), m("memepad.new.ai_agent.generate_loader_description.14"), m("memepad.new.ai_agent.generate_loader_description.15"), m("memepad.new.ai_agent.generate_loader_description.16"), m("memepad.new.ai_agent.generate_loader_description.17"), m("memepad.new.ai_agent.generate_loader_description.18")]),
        p = Y(t.value[0]),
        i = () => {
          p.value = t.value[Math.floor(Math.random() * t.value.length)]
        };
      return Ke(() => {
        r = st(i, en)
      }), it(() => {
        clearInterval(r)
      }), (f, u) => {
        const o = lt;
        return a(), h("div", Qt, [R(o, {
          name: "animations/other/stars_sparkle_grey",
          height: "262px",
          "z-index": "1"
        }), _("div", Xt, V(e(p)), 1)])
      }
    }
  }),
  et = $(tn, [
    ["__scopeId", "data-v-d75545b6"]
  ]),
  nn = {
    class: "menu"
  },
  an = ["onClick"],
  on = {
    class: "item-image"
  },
  sn = ["src"],
  ln = {
    class: "item-name"
  },
  rn = {
    class: "item-arrow"
  },
  cn = ["src"],
  dn = D({
    __name: "Menu",
    props: {
      items: {}
    },
    setup(s) {
      return (r, t) => (a(), h("ul", nn, [(a(!0), h(Z, null, ee(r.items, ({
        name: p,
        imageUrl: i,
        onClick: f
      }, u) => (a(), h("li", {
        key: u,
        class: "menu-item",
        onClick: f
      }, [_("div", on, [_("img", {
        src: i,
        alt: ""
      }, null, 8, sn)]), _("div", ln, V(p), 1), _("div", rn, [_("img", {
        src: ("imgResolver" in r ? r.imgResolver : e(ye))("menu-arrow-right", "svg"),
        alt: ""
      }, null, 8, cn)])], 8, an))), 128))]))
    }
  }),
  pn = $(dn, [
    ["__scopeId", "data-v-e6475410"]
  ]);
var re = (s => (s.ERROR = "ERROR", s.LOADING = "LOADING", s.LOADED = "LOADED", s))(re || {}),
  j = (s => (s.GENERAL = "general", s.ICON = "icon", s.BANNER = "banner", s.NONE = "none", s))(j || {});
const tt = s => {
    let r = new AbortController;
    const t = Be("aiGeneratedMemepadContent", () => ({
        status: "LOADED",
        appearance: "none",
        categories: [],
        selectedCategory: null,
        promptId: null,
        promptExpireAt: null,
        info: null,
        icons: [],
        banners: []
      })),
      p = E(() => (t.value.icons.length > 0 && f.value || t.value.banners.length > 0 && u.value) && t.value.status === "LOADED"),
      i = E(() => t.value.appearance === "general"),
      f = E(() => t.value.appearance === "icon"),
      u = E(() => t.value.appearance === "banner"),
      o = E(() => t.value.status === "LOADING"),
      c = E(() => t.value.status === "ERROR"),
      l = E(() => p.value && f.value),
      N = E(() => !p.value && t.value.status !== "ERROR" && i.value),
      v = E(() => p.value && (f.value || u.value)),
      y = E(() => f.value && t.value.icons.every(({
        isLoaded: n
      }) => n)),
      F = E(() => u.value && t.value.banners.every(({
        isLoaded: n
      }) => n)),
      g = E(() => s && (p.value || t.value.status === "ERROR") && f.value),
      k = E({
        get() {
          return t.value.appearance !== "none"
        },
        set() {
          t.value.appearance = "none"
        }
      }),
      C = E(() => t.value.categories.map(n => ({
        ...n,
        onClick: async () => {
          H().memepad.memepadJettonAiGeneratedCategorySelect({
            flowType: s ? I.AI : I.REGULAR,
            categoryName: n.name
          }), t.value.selectedCategory = n, await W()
        }
      }))),
      O = async () => {
        if (r.signal.aborted || t.value.categories.length > 0) return;
        t.value.status = "LOADING", t.value.categories = [];
        const n = await Se.getMemepadAiContentCategories({
          abortSignal: r.signal
        });
        if (!x(n)) {
          t.value.status = r.signal.aborted ? "LOADED" : "ERROR";
          return
        }
        t.value.categories = n.data.categories.map(({
          description: T,
          imageUrl: K,
          name: J
        }) => ({
          description: T,
          imageUrl: K,
          name: J
        })), t.value.status = "LOADED"
      }, W = async () => {
        if (r.signal.aborted) return;
        if (t.value.selectedCategory === null) {
          t.value.status = "ERROR";
          return
        }
        t.value.status = "LOADING", t.value.promptId = null, t.value.promptExpireAt = null, t.value.info = null, t.value.icons = [], t.value.banners = [];
        const n = await Se.generateMemepadAiContent({
          payload: {
            category: t.value.selectedCategory.name,
            topic: t.value.selectedCategory.description
          },
          abortSignal: r.signal
        });
        if (!x(n)) {
          t.value.status = r.signal.aborted ? "LOADED" : "ERROR";
          return
        }
        t.value.promptId = n.data.promptId, t.value.promptExpireAt = n.data.expireAt, t.value.info = {
          name: n.data.name,
          ticker: n.data.ticker,
          description: n.data.description
        };
        for (const T of ["icons", "banners"]) t.value[T] = n.data[T].map(K => ({
          imageUrl: K,
          isLoaded: !1
        }));
        d("icon")
      }, d = n => {
        t.value.appearance = n
      }, S = () => {
        r.abort(), setTimeout(() => {
          r = new AbortController
        })
      }, U = () => {
        t.value.status = "LOADED", t.value.promptId = null, t.value.promptExpireAt = null, t.value.info = null, t.value.icons = [], t.value.banners = []
      }, z = () => {
        S(), t.value.status = "LOADED"
      }, b = n => {
        var T;
        ((T = t.value.icons) == null ? void 0 : T[n]) !== void 0 && (t.value.icons[n].isLoaded = !0, y.value && (t.value.status = "LOADED"))
      }, A = n => {
        var T;
        ((T = t.value.banners) == null ? void 0 : T[n]) !== void 0 && (t.value.banners[n].isLoaded = !0, F.value && (t.value.status = "LOADED"))
      };
    return {
      categoryMenuItems: C,
      fetchCategoriesOnce: O,
      fetchContent: W,
      generateContentSheetState: t,
      hasResult: p,
      isBackIconVisible: l,
      isErrorVisible: c,
      isLoadingBarVisible: o,
      isMenuVisible: N,
      isRegenerateButtonVisible: g,
      isResultVisible: v,
      isSheetVisible: k,
      onResultItemLoad: n => {
        switch (t.value.appearance) {
          case "icon":
            b(n);
            break;
          case "banner":
            A(n);
            break
        }
      },
      resetGenerateContentSheetState: U,
      setAppearance: d,
      setAsLoadedAndAbort: z
    }
  },
  un = {
    class: "body"
  },
  mn = {
    class: "result"
  },
  _n = ["src", "onClick", "onLoad"],
  vn = ["src"],
  gn = D({
    __name: "GenerateIconSheet",
    props: {
      withAi: {
        type: Boolean
      }
    },
    emits: ["close", "select", "generate-prompt-id", "generate-prompt-expire-at"],
    setup(s, {
      expose: r,
      emit: t
    }) {
      const p = t,
        {
          categoryMenuItems: i,
          fetchCategoriesOnce: f,
          fetchContent: u,
          generateContentSheetState: o,
          hasResult: c,
          isBackIconVisible: l,
          isErrorVisible: N,
          isLoadingBarVisible: v,
          isMenuVisible: y,
          isRegenerateButtonVisible: F,
          isResultVisible: g,
          isSheetVisible: k,
          onResultItemLoad: C,
          resetGenerateContentSheetState: O,
          setAppearance: W,
          setAsLoadedAndAbort: d
        } = tt(s.withAi),
        S = E(() => {
          if (!c.value && o.value.status !== re.ERROR) return m("memepad.new.ai_agent.select_model");
          if (c.value && o.value.status !== re.ERROR) return m("memepad.new.ai_agent.select_icon")
        }),
        U = async () => {
          O(), o.value.status === re.ERROR && await f(), await u()
        }, z = w => {
          o.value.info !== null && (W(j.NONE), p("select", {
            ...o.value.info,
            ...w
          }))
        }, b = () => {
          d(), W(j.GENERAL)
        }, A = () => {
          if (v.value) {
            const n = (() => {
              switch (!0) {
                case !i.value.length:
                  return "category_choice";
                case !o.value.info:
                  return "data_loading";
                case !o.value.icons.length:
                  return "image_choice"
              }
            })();
            n && H().memepad.memepadJettonAiGenerationCancel({
              flowType: s.withAi ? I.AI : I.REGULAR,
              page: ue.TOKEN_INFO,
              stage: n
            })
          }
          p("close"), W(j.NONE), d()
        };
      return ae(() => o.value.appearance, async w => {
        w === j.GENERAL && await f()
      }), r({
        setAppearance: W
      }), ae(() => o.value.promptId, w => {
        w && p("generate-prompt-id", w)
      }), ae(() => o.value.promptExpireAt, w => {
        w && p("generate-prompt-expire-at", w)
      }), (w, n) => {
        const T = et,
          K = pn,
          J = qe,
          P = Xe,
          te = We;
        return a(), L(te, {
          modelValue: e(k),
          "onUpdate:modelValue": n[0] || (n[0] = q => de(k) ? k.value = q : null),
          title: e(S),
          "back-icon": e(l),
          "no-header-line": "",
          onBack: b,
          onClose: A
        }, {
          default: M(() => [_("div", un, [e(v) ? (a(), L(T, {
            key: 0
          })) : B("", !0), e(y) ? (a(), L(K, {
            key: 1,
            items: e(i)
          }, null, 8, ["items"])) : B("", !0), Ie(_("div", mn, [(a(!0), h(Z, null, ee(e(o).icons, (q, Q) => (a(), h("div", {
            key: Q
          }, [_("img", {
            alt: "",
            src: q.imageUrl,
            onClick: () => z(q),
            onLoad: () => e(C)(Q)
          }, null, 40, _n)]))), 128))], 512), [
            [De, e(g)]
          ]), e(N) ? (a(), L(J, {
            key: 2
          }, {
            header: M(() => [_("img", {
              src: ("imgResolver" in w ? w.imgResolver : e(ye))("special/big-pink-cross", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, vn)]),
            title: M(() => [Re(V(("t" in w ? w.t : e(m))("memepad.new.ai_agent.generation_failed_error")), 1)]),
            _: 1
          })) : B("", !0), e(F) ? (a(), L(P, {
            key: 3,
            "once-generated": "",
            class: "button-regenerate",
            "analytics-type": w.withAi ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in w ? w.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in w ? w.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in w ? w.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(ue)).TOKEN_INFO,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in w ? w.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e($e)).FINAL_STAGE_OF_STEP,
            onClick: U
          }, null, 8, ["analytics-type", "analytics-page", "analytics-stage"])) : B("", !0)])]),
          _: 1
        }, 8, ["modelValue", "title", "back-icon"])
      }
    }
  }),
  fn = $(gn, [
    ["__scopeId", "data-v-3ce057ec"]
  ]),
  nt = async s => {
    try {
      const r = await fetch(s);
      if (!r.ok) return Le("Failed to get image");
      const t = await r.arrayBuffer(),
        p = new File([t], "image.png", {
          type: "image/png"
        });
      return Ye(p)
    } catch {
      return Le("Failed to get image")
    }
  }, An = {
    class: "memepad-new-step-token-info"
  }, wn = {
    class: "buttons"
  }, bn = D({
    __name: "TokenInfo",
    props: {
      state: {},
      stepNumber: {},
      withAgent: {
        type: Boolean
      }
    },
    emits: ["continue"],
    setup(s, {
      emit: r
    }) {
      const t = s,
        p = r,
        i = oe("avatar"),
        f = oe("generate-icon-sheet"),
        u = Y(!1),
        o = Y(!1),
        c = Y({
          ...t.state.stepTokenInfo
        }),
        l = E(() => t.withAgent),
        N = E(() => t.withAgent && c.value.promptId !== void 0),
        v = E(() => !t.withAgent),
        y = Y([{
          key: "name",
          type: pe.STRING,
          value: E({
            get: () => c.value.name ?? "",
            set: n => c.value.name = n ?? ""
          }),
          props: {
            label: m("memepad.new.step_token_info.field_name.label"),
            placeholder: m("memepad.new.step_token_info.field_name.placeholder"),
            disabled: l.value
          },
          validators: {
            required: {},
            maxLength: {
              value: 20
            }
          },
          eventHandlers: {
            onClick() {
              O()
            }
          }
        }, {
          key: "ticker",
          type: pe.STRING,
          value: E({
            get: () => c.value.ticker ?? "",
            set: n => c.value.ticker = n ?? ""
          }),
          props: {
            label: m("memepad.new.step_token_info.field_ticker.label"),
            placeholder: m("memepad.new.step_token_info.field_ticker.placeholder"),
            modifiers: [rt.UPPERCASE],
            disabled: l.value
          },
          validators: {
            required: {},
            maxLength: {
              value: 10
            }
          },
          customValidator: n => {
            if (!n.match(/^[A-Z0-9]+$/)) return m("memepad.new.step_token_info.field_ticker.custom_validator_error")
          },
          eventHandlers: {
            onClick() {
              O()
            }
          }
        }, {
          key: "description",
          type: pe.TEXTAREA,
          value: E({
            get: () => c.value.description ?? "",
            set: n => c.value.description = n ?? ""
          }),
          props: {
            label: m("memepad.new.step_token_info.field_description.label"),
            placeholder: m("memepad.new.step_token_info.field_description.placeholder"),
            disabled: l.value
          },
          validators: {
            required: {},
            maxLength: {
              value: 240
            }
          },
          eventHandlers: {
            onClick() {
              O()
            }
          }
        }]),
        F = Y(),
        g = E(() => {
          var n;
          return ((n = F.value) == null ? void 0 : n.isFormValid) && !!c.value.iconFileKey
        }),
        k = () => p("continue", c.value),
        C = () => {
          var n;
          u.value = !0, (n = f.value) == null || n.setAppearance(j.GENERAL)
        },
        O = Ee(() => {
          t.withAgent && se().warning(m("memepad.new.ai_agent.input_disabled_warning"))
        }, 500).debouncedFunction,
        W = () => {
          var n, T;
          if (t.withAgent) {
            (n = f.value) == null || n.setAppearance(j.ICON);
            return
          }(T = i.value) == null || T.triggerFileUpload()
        },
        d = async ({
          imageUrl: n,
          name: T,
          ticker: K,
          description: J
        }) => {
          S({
            name: T,
            ticker: K,
            description: J
          }), await z(n), o.value = !0, u.value = !1
        }, S = n => {
          Object.entries(n).forEach(([T, K]) => {
            const J = y.value.find(({
              key: P
            }) => P === T);
            J !== void 0 && (J.value = K)
          })
        }, U = n => {
          H().memepad.memepadJettonSelectJettonIcon({
            flowType: t.withAgent ? I.AI : I.REGULAR,
            aiPowered: !1
          }), c.value.iconFileKey = n
        }, z = async n => {
          var K;
          const T = await nt(n);
          x(T) ? ((K = i.value) == null || K.selectFile(T.data), H().memepad.memepadJettonSelectJettonIcon({
            flowType: t.withAgent ? I.AI : I.REGULAR,
            aiPowered: !0
          })) : se().error(m("memepad.new.ai_generate.load_image_error"))
        }, b = () => {
          u.value = !1
        }, A = n => {
          c.value.promptId = n
        }, w = n => {
          c.value.promptExpireAt = n
        };
      return (n, T) => {
        const K = Te,
          J = xt,
          P = Ze,
          te = Xe,
          q = _e,
          Q = je,
          at = fn;
        return a(), h("div", An, [R(K, {
          "step-number": n.stepNumber,
          step: e(G).TOKEN_INFO
        }, null, 8, ["step-number", "step"]), R(J, {
          ref: "avatar",
          disabled: e(l),
          "model-value": e(c).iconFileKey,
          editable: e(N),
          deletable: e(v),
          "onUpdate:modelValue": U,
          onEdit: W
        }, null, 8, ["disabled", "model-value", "editable", "deletable"]), R(P, {
          modelValue: e(y),
          "onUpdate:modelValue": T[0] || (T[0] = ve => de(y) ? y.value = ve : null),
          onChannel: T[1] || (T[1] = ve => F.value = ve)
        }, null, 8, ["modelValue"]), R(Q, null, {
          default: M(() => [_("div", wn, [n.withAgent ? (a(), L(te, {
            key: 0,
            pending: e(u),
            "once-generated": e(o),
            "analytics-type": n.withAgent ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in n ? n.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in n ? n.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in n ? n.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(ue)).TOKEN_INFO,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in n ? n.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e($e)).IMAGE_GENERATION,
            onClick: C
          }, null, 8, ["pending", "once-generated", "analytics-type", "analytics-page", "analytics-stage"])) : B("", !0), R(q, {
            label: ("t" in n ? n.t : e(m))("base.continue"),
            fill: "",
            disabled: !e(g),
            tertiary: "",
            size: e(ce).LARGE,
            onClick: k
          }, null, 8, ["label", "disabled", "size"])])]),
          _: 1
        }), R(at, {
          ref: "generate-icon-sheet",
          "with-ai": n.withAgent,
          onGeneratePromptId: A,
          onGeneratePromptExpireAt: w,
          onSelect: d,
          onClose: b
        }, null, 8, ["with-ai"])])
      }
    }
  }), En = $(bn, [
    ["__scopeId", "data-v-841da9ca"]
  ]), hn = {
    class: "memepad-new-form-banner"
  }, yn = {
    key: 1,
    class: "banner is-uploading"
  }, In = {
    class: "description"
  }, Rn = {
    class: "text"
  }, Fe = 10, kn = D({
    __name: "Banner",
    props: X({
      disabled: {
        type: Boolean
      }
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(s, {
      expose: r
    }) {
      const t = ie(s, "modelValue"),
        p = oe("file-uploader"),
        i = () => {
          var c;
          return (c = p.value) == null ? void 0 : c.triggerFileUpload()
        },
        f = Y(),
        u = E(() => {
          if (f.value && f.value.status === we.UPLOADING) return f.value.localUrl;
          if (t.value) return Ue(t.value)
        });
      return r({
        selectFile: c => {
          var l;
          (l = p.value) == null || l.onFileSelected(c)
        }
      }), (c, l) => {
        var F;
        const N = Ne,
          v = Me,
          y = He;
        return a(), h("div", hn, [R(N, {
          title: ("t" in c ? c.t : e(m))("memepad.new.step_token_info.field_banner.label"),
          "is-optional": "",
          class: "heading"
        }, null, 8, ["title"]), t.value ? (a(), h("div", {
          key: 0,
          class: "banner is-uploaded",
          style: he({
            backgroundImage: `url(${e(u)})`
          })
        }, [_("div", {
          class: "delete-btn",
          onClick: l[0] || (l[0] = g => t.value = void 0)
        }, l[4] || (l[4] = [_("img", {
          src: ct,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))], 4)) : ((F = e(f)) == null ? void 0 : F.status) === e(we).UPLOADING ? (a(), h("div", yn, [R(v, {
          type: e(Ve).LIGHT,
          size: 16
        }, null, 8, ["type"]), _("div", In, V(("t" in c ? c.t : e(m))("memepad.new.step_token_info.field_banner.uploading")), 1)])) : (a(), h("div", {
          key: 2,
          class: "banner wait-upload",
          onClick: l[1] || (l[1] = g => i())
        }, [l[6] || (l[6] = _("img", {
          src: dt,
          alt: "Add"
        }, null, -1)), _("div", Rn, [pt(c.$slots, "text", {}, () => [_("div", null, V(("t" in c ? c.t : e(m))("memepad.new.step_token_info.field_banner.description", {
          maxUploadSize: String(Fe)
        })), 1), l[5] || (l[5] = _("div", null, "361 × 119", -1))], !0)])])), R(y, {
          ref: "file-uploader",
          "hide-ui": "",
          "max-file-size-mb": Fe,
          accept: [e(ne).JPEG, e(ne).PNG, e(ne).GIF],
          crop: "",
          disabled: c.disabled,
          "cropper-params": {
            aspectRatio: 361 / 119,
            borderRadius: 8
          },
          "onUpdate:progress": l[2] || (l[2] = g => f.value = g),
          onUploaded: l[3] || (l[3] = g => t.value = g.key)
        }, null, 8, ["accept", "disabled"])])
      }
    }
  }), Nn = $(kn, [
    ["__scopeId", "data-v-728195ce"]
  ]), Tn = {
    class: "memepad-new-form-social-links-item"
  }, Sn = D({
    __name: "SocialLinksItem",
    props: X({
      meta: {},
      optional: {
        type: Boolean
      },
      caption: {}
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: X(["isValid", "delete"], ["update:modelValue"]),
    setup(s, {
      emit: r
    }) {
      const t = s,
        p = r,
        i = ie(s, "modelValue"),
        f = Y([{
          type: pe.STRING,
          key: t.meta.apiKey,
          value: E({
            get: () => i.value ?? "",
            set: o => i.value = o || void 0
          }),
          props: {
            placeholder: t.meta.placeholder,
            size: ut.COMPACT,
            caption: t.caption
          },
          validators: t.optional ? t.meta.skipUrlValidation ? {} : {
            url: {}
          } : {
            required: {}
          }
        }]),
        u = Y();
      return ke(() => {
        var o;
        return p("isValid", ((o = u.value) == null ? void 0 : o.isFormValid) ?? !1)
      }), (o, c) => {
        const l = Ne,
          N = me,
          v = Ze;
        return a(), h("div", Tn, [R(v, {
          modelValue: e(f),
          "onUpdate:modelValue": c[1] || (c[1] = y => de(f) ? f.value = y : null),
          onChannel: c[2] || (c[2] = y => u.value = y)
        }, ze({
          [`${o.meta.apiKey}-label`]: M(() => [R(l, {
            "icon-name": o.meta.icon,
            title: o.meta.display,
            "is-optional": o.optional
          }, null, 8, ["icon-name", "title", "is-optional"])]),
          _: 2
        }, [o.optional ? {
          name: `${o.meta.apiKey}-after`,
          fn: M(() => [_("button", {
            type: "button",
            class: "delete-button reset",
            onClick: c[0] || (c[0] = y => o.$emit("delete"))
          }, [R(N, {
            name: "trash",
            class: "icon"
          })])]),
          key: "0"
        } : void 0]), 1032, ["modelValue"])])
      }
    }
  }), Ln = $(Sn, [
    ["__scopeId", "data-v-4cb1d169"]
  ]), Cn = {
    class: "memepad-new-form-social-links"
  }, On = {
    class: "inputs"
  }, Pn = {
    key: 0,
    class: "add-panel"
  }, Fn = {
    class: "providers"
  }, Gn = D({
    __name: "SocialLinks",
    props: X({
      telegramRequired: {
        type: Boolean
      }
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: X(["isValid"], ["update:modelValue"]),
    setup(s, {
      emit: r
    }) {
      const t = yt(),
        p = ie(s, "modelValue"),
        i = s,
        f = r,
        u = Y([i.telegramRequired ? {
          provider: ge.TELEGRAM,
          isValid: !1,
          optional: !1,
          caption: m("memepad.social_providers.telegram.ai_agent_caption")
        } : {
          provider: ge.TELEGRAM,
          isValid: !1,
          optional: !0
        }]),
        o = E(() => Object.values(ge).filter(N => !u.value.find(v => v.provider === N))),
        c = N => u.value.push({
          provider: N,
          isValid: !1,
          optional: !0
        }),
        l = N => {
          u.value.splice(N, 1)
        };
      return ke(() => {
        const N = u.value.every(v => v.isValid);
        f("isValid", N)
      }), (N, v) => {
        const y = Ln,
          F = me;
        return a(), h("div", Cn, [_("div", On, [R(mt, {
          name: "list-shuffle-transition"
        }, {
          default: M(() => [(a(!0), h(Z, null, ee(e(u), (g, k) => (a(), L(y, {
            key: g.provider,
            modelValue: p.value[g.provider],
            "onUpdate:modelValue": C => p.value[g.provider] = C,
            meta: e(t)[g.provider],
            optional: g.optional,
            caption: g.caption,
            class: "provider-input",
            onIsValid: C => g.isValid = C,
            onDelete: C => l(k)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "meta", "optional", "caption", "onIsValid", "onDelete"]))), 128))]),
          _: 1
        })]), R(_t, {
          name: "appear-from-right-transition"
        }, {
          default: M(() => [e(o).length > 0 ? (a(), h("div", Pn, [R(F, {
            name: "plus",
            class: "plus-icon"
          }), _("div", Fn, [(a(!0), h(Z, null, ee(e(o), g => (a(), h("div", {
            key: g,
            class: "provider"
          }, [R(F, {
            name: e(t)[g].icon,
            class: "provider-icon",
            onClick: k => c(g)
          }, null, 8, ["name", "onClick"])]))), 128))])])) : B("", !0)]),
          _: 1
        })])
      }
    }
  }), Un = $(Gn, [
    ["__scopeId", "data-v-09a28ccb"]
  ]), Vn = {
    class: "kit-switch"
  }, Mn = D({
    __name: "Switch",
    props: {
      modelValue: {
        type: Boolean
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(s) {
      const r = ie(s, "modelValue");
      return (t, p) => (a(), h("div", Vn, [Ie(_("input", {
        "onUpdate:modelValue": p[0] || (p[0] = i => r.value = i),
        type: "checkbox"
      }, null, 512), [
        [vt, r.value]
      ])]))
    }
  }), Kn = $(Mn, [
    ["__scopeId", "data-v-e0ffb56d"]
  ]), Bn = "data:image/webp;base64,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", Dn = {
    class: "memepad-new-form-nsfw"
  }, $n = {
    class: "setting"
  }, Wn = {
    class: "label"
  }, Yn = D({
    __name: "NSFW",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(s) {
      const r = ie(s, "modelValue");
      return (t, p) => {
        const i = Kn,
          f = Nt;
        return a(), h("div", Dn, [_("div", $n, [_("div", Wn, V(("t" in t ? t.t : e(m))("memepad.new.step_token_info.field_nsfw.label")), 1), R(i, {
          modelValue: r.value,
          "onUpdate:modelValue": p[0] || (p[0] = u => r.value = u)
        }, null, 8, ["modelValue"])]), R(f, {
          text: ("t" in t ? t.t : e(m))("memepad.new.step_token_info.field_nsfw.message"),
          image: e(Bn),
          class: "note",
          tertiary: ""
        }, null, 8, ["text", "image"])])
      }
    }
  }), zn = $(Yn, [
    ["__scopeId", "data-v-82a2ab70"]
  ]), Jn = {
    class: "body"
  }, Hn = {
    class: "result"
  }, qn = ["src"], Zn = D({
    __name: "GenerateBannerSheet",
    props: {
      withAi: {
        type: Boolean
      }
    },
    emits: ["close", "select"],
    setup(s, {
      expose: r,
      emit: t
    }) {
      const p = t,
        {
          isSheetVisible: i,
          generateContentSheetState: f,
          hasResult: u,
          isErrorVisible: o,
          isLoadingBarVisible: c,
          isResultVisible: l,
          onResultItemLoad: N,
          setAppearance: v
        } = tt(s.withAi),
        y = E(() => {
          if (u.value && f.value.status !== re.ERROR) return m("memepad.new.ai_agent.select_banner")
        }),
        F = k => {
          v(j.NONE), p("select", k)
        },
        g = () => {
          H().memepad.memepadJettonAiGenerationCancel({
            flowType: s.withAi ? I.AI : I.REGULAR,
            page: ue.PERSONALIZE,
            stage: "image_choice"
          }), p("close")
        };
      return r({
        setAppearance: v
      }), (k, C) => {
        const O = et,
          W = It,
          d = qe,
          S = We;
        return a(), L(S, {
          modelValue: e(i),
          "onUpdate:modelValue": C[0] || (C[0] = U => de(i) ? i.value = U : null),
          title: e(y),
          "no-header-line": "",
          onClose: g
        }, {
          default: M(() => [_("div", Jn, [e(c) ? (a(), L(O, {
            key: 0
          })) : B("", !0), Ie(_("div", Hn, [(a(!0), h(Z, null, ee(e(f).banners, (U, z) => (a(), L(W, {
            key: z,
            "banner-file-key": U.imageUrl,
            onLoad: () => e(N)(z),
            onClick: () => F(U)
          }, null, 8, ["banner-file-key", "onLoad", "onClick"]))), 128))], 512), [
            [De, e(l)]
          ]), e(o) ? (a(), L(d, {
            key: 1
          }, {
            header: M(() => [_("img", {
              src: ("imgResolver" in k ? k.imgResolver : e(ye))("special/big-pink-cross", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, qn)]),
            title: M(() => [Re(V(("t" in k ? k.t : e(m))("memepad.new.ai_agent.generation_failed_error")), 1)]),
            _: 1
          })) : B("", !0)])]),
          _: 1
        }, 8, ["modelValue", "title"])
      }
    }
  }), xn = $(Zn, [
    ["__scopeId", "data-v-dc13c02f"]
  ]), jn = {
    class: "memepad-new-step-personalize-token"
  }, Qn = D({
    __name: "PersonalizeToken",
    props: {
      state: {},
      stepNumber: {},
      withAgent: {
        type: Boolean
      }
    },
    emits: ["continue", "update"],
    setup(s, {
      emit: r
    }) {
      const t = s,
        p = r,
        i = oe("banner"),
        f = oe("generate-banner-sheet"),
        u = Y(!1),
        o = Y({
          ...t.state.stepPersonalizeToken
        }),
        c = E(() => t.withAgent),
        l = () => p("continue", o.value),
        N = () => {
          var g;
          !t.withAgent || o.value.bannerFileKey !== void 0 || (g = f.value) == null || g.setAppearance(j.BANNER)
        },
        v = async ({
          imageUrl: g
        }) => {
          await F(g)
        }, y = g => {
          H().memepad.memepadJettonSelectJettonBanner({
            flowType: t.withAgent ? I.AI : I.REGULAR,
            aiPowered: !1
          }), o.value.bannerFileKey = g
        }, F = async g => {
          var C;
          const k = await nt(g);
          x(k) ? ((C = i.value) == null || C.selectFile(k.data), H().memepad.memepadJettonSelectJettonBanner({
            flowType: t.withAgent ? I.AI : I.REGULAR,
            aiPowered: !1
          })) : se().error(m("memepad.new.ai_generate.load_image_error"))
        };
      return ke(() => {
        p("update", o.value)
      }), (g, k) => {
        const C = Te,
          O = Nn,
          W = Un,
          d = zn,
          S = _e,
          U = je,
          z = xn;
        return a(), h("div", jn, [R(C, {
          "step-number": g.stepNumber,
          step: e(G).PERSONALIZE_TOKEN
        }, null, 8, ["step-number", "step"]), R(O, {
          ref: "banner",
          disabled: g.withAgent,
          "model-value": e(o).bannerFileKey,
          "onUpdate:modelValue": y,
          onClick: N
        }, ze({
          _: 2
        }, [g.withAgent ? {
          name: "text",
          fn: M(() => [Re(V(("t" in g ? g.t : e(m))("memepad.new.ai_agent.select_image")), 1)]),
          key: "0"
        } : void 0]), 1032, ["disabled", "model-value"]), R(W, {
          modelValue: e(o).socialProviders,
          "onUpdate:modelValue": k[0] || (k[0] = b => e(o).socialProviders = b),
          "telegram-required": e(c),
          onIsValid: k[1] || (k[1] = b => u.value = b)
        }, null, 8, ["modelValue", "telegram-required"]), R(d, {
          modelValue: e(o).isNSFW,
          "onUpdate:modelValue": k[2] || (k[2] = b => e(o).isNSFW = b)
        }, null, 8, ["modelValue"]), R(U, null, {
          default: M(() => [R(S, {
            label: ("t" in g ? g.t : e(m))("base.continue"),
            fill: "",
            tertiary: "",
            size: e(ce).LARGE,
            disabled: !e(u),
            onClick: l
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        }), R(z, {
          ref: "generate-banner-sheet",
          "with-ai": g.withAgent,
          onSelect: v
        }, null, 8, ["with-ai"])])
      }
    }
  }), Xn = $(Qn, [
    ["__scopeId", "data-v-bfcedb01"]
  ]), ea = {
    class: "memepad-new-price-details"
  }, ta = {
    class: "row"
  }, na = {
    key: 0,
    class: "error"
  }, aa = {
    class: "label"
  }, oa = {
    key: 1,
    class: "title"
  }, sa = {
    class: "key-wrapper"
  }, ia = {
    class: "key"
  }, la = {
    key: 0,
    class: "badge"
  }, ra = {
    class: "value"
  }, ca = {
    class: "fees"
  }, da = {
    class: "label"
  }, pa = D({
    __name: "NewPriceDetails",
    props: {
      withShare: {
        type: Boolean
      },
      reviewInfo: {}
    },
    setup(s) {
      const r = Be(() => !1, "$xfInVJFPmx");
      return (t, p) => {
        const i = me,
          f = Gt;
        return a(), h("div", ea, [_("button", {
          type: "button",
          class: "reset header-button",
          onClick: p[0] || (p[0] = u => r.value = !e(r))
        }, [_("div", ta, [t.reviewInfo.error ? (a(), h("div", na, [t.reviewInfo.error.type === ("MEMEPAD_SHARE_ERRORS" in t ? t.MEMEPAD_SHARE_ERRORS : e(Qe)).NOT_ENOUGH_TOKEN ? (a(), L(i, {
          key: 0,
          name: "wallet",
          class: "icon icon-wallet"
        })) : (a(), L(i, {
          key: 1,
          name: "circle-warning",
          class: "icon icon-circle"
        })), _("div", aa, V(t.reviewInfo.error.message), 1)])) : (a(), h("div", oa, V(t.reviewInfo.feesInfo.total.title), 1))]), R(i, {
          name: "arrow-caret-down-md",
          class: "icon"
        })]), e(r) ? (a(), h(Z, {
          key: 0
        }, [p[1] || (p[1] = _("div", {
          class: "divider"
        }, null, -1)), (a(!0), h(Z, null, ee(t.reviewInfo.feesInfo.sections, u => (a(), h("div", {
          key: u.title,
          class: "row"
        }, [_("div", sa, [_("div", ia, V(u.title), 1), u.badge ? (a(), h("div", la, V(u.badge.label), 1)) : B("", !0)]), _("div", ra, [u.tooltip ? (a(), L(f, gt({
          key: 0,
          ref_for: !0
        }, u.tooltip.props), {
          default: M(() => [R(i, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: M(() => [_("div", ca, ["details" in u.tooltip ? (a(!0), h(Z, {
            key: 0
          }, ee(u.tooltip.details, o => (a(), h(Z, {
            key: o.label
          }, [!o.value.isZero() || o.highlight ? (a(), h("span", {
            key: 0,
            class: be(["details", {
              highlighted: o.highlight
            }])
          }, V(o.label), 3)) : B("", !0)], 64))), 128)) : (a(), h("span", {
            key: 1,
            class: be({
              highlighted: u.tooltip.highlight
            })
          }, V(u.tooltip.label), 3))])]),
          _: 2
        }, 1040)) : B("", !0), _("span", da, V(u.label), 1)])]))), 128))], 64)) : B("", !0)])
      }
    }
  }), ua = $(pa, [
    ["__scopeId", "data-v-d493d34a"]
  ]), ma = {
    class: "header"
  }, _a = {
    class: "content"
  }, va = {
    class: "inner"
  }, ga = {
    class: "input-wrapper"
  }, fa = {
    class: "subtitle"
  }, Aa = {
    key: 1,
    class: "label"
  }, wa = {
    class: "buttons"
  }, ba = {
    class: "controls"
  }, Ea = D({
    __name: "Review",
    props: {
      state: {},
      stepNumber: {},
      balances: {},
      launchControls: {},
      launchCallback: {
        type: Function
      },
      withAgent: {
        type: Boolean
      }
    },
    emits: ["continue", "update", "prompt-expired"],
    setup(s, {
      emit: r
    }) {
      const t = s,
        p = r,
        i = Y(t.state.stepReview.overview ? {
          status: "loaded",
          share: t.state.stepReview.share,
          overview: t.state.stepReview.overview
        } : {
          status: "loading",
          share: t.state.stepReview.share
        }),
        f = Y(!1),
        u = Y(),
        o = E(() => i.value.status === "loading" || f.value),
        c = E(() => {
          var d;
          return !o.value && !!((d = v.value) != null && d.error)
        }),
        l = E({
          get: () => new Ce(i.value.share).toFixed(),
          set: d => i.value.share = +Tt(d).toFixed()
        }),
        N = d => t.launchControls.getReviewInfo({
          jettonTicker: t.state.stepTokenInfo.ticker,
          share: i.value.share,
          withAiAgent: t.withAgent,
          overview: d
        }),
        v = E(() => i.value.status === "loaded" ? N(i.value.overview) : void 0);
      ae(() => {
        var d;
        return (d = v.value) == null ? void 0 : d.error
      }, d => {
        d && H().memepad.memepadJettonLaunchReviewShareInputError({
          flowType: t.withAgent ? I.AI : I.REGULAR,
          reason: d.type
        })
      });
      const y = Ee(d => H().memepad.memepadJettonLaunchReviewShareInputUpdate({
        flowType: t.withAgent ? I.AI : I.REGULAR,
        value: d
      }), 300).debouncedFunction;
      ae(() => i.value.share, y);
      const F = E(() => !v.value || !t.balances.tokenBalance ? !1 : t.balances.tokenBalance.value.gte(v.value.feesInfo.total.value)),
        g = ({
          tokenBalance: d,
          overview: S
        }) => {
          H().memepad.memepadLaunchJettonReviewStepMaxButtonClick();
          const U = t.launchControls.getMaxShareAmount({
            tokenBalance: d,
            overview: S
          });
          l.value = U.toFixed()
        },
        k = () => {
          var d;
          return (d = u.value) == null ? void 0 : d.focusOnInput()
        },
        C = async () => {
          var d;
          if (t.withAgent && new Date(t.state.stepTokenInfo.promptExpireAt) < new Date) {
            p("prompt-expired");
            return
          }!F.value || f.value || (d = v.value) != null && d.error || (f.value = !0, await (async () => {
            const S = await (async () => {
              if (i.value.status === "loaded") return {
                share: +i.value.share,
                overview: i.value.overview
              };
              const w = await t.launchControls.getJettonOverview({
                tons: i.value.share
              });
              if (x(w)) return {
                share: +i.value.share,
                overview: w.data
              }
            })();
            if (!S) return se().success(m("memepad.jetton.new.error_alert"));
            const U = S,
              z = {
                step: G.REVIEW,
                stepTokenInfo: t.state.stepTokenInfo,
                stepPersonalizeToken: t.state.stepPersonalizeToken,
                stepReview: U
              },
              b = Rt(z, t.withAgent),
              A = await t.launchCallback(b);
            x(A) ? p("continue", A.data) : se().success(m("memepad.jetton.new.error_alert"))
          })(), f.value = !1)
        }, O = async () => {
          const d = i.value.share,
            S = await t.launchControls.getJettonOverview({
              tons: d
            });
          !new Ce(d).eq(i.value.share) || !x(S) || (i.value = {
            status: "loaded",
            share: d,
            overview: S.data
          }, p("update", {
            share: d,
            overview: x(S) ? S.data : void 0
          }))
        }, {
          debouncedFunction: W
        } = Ee(O, 200);
      return ae(() => i.value.share, () => {
        i.value.status = "loading", W()
      }), Ke(() => {
        i.value.status !== "loaded" && O()
      }), (d, S) => {
        const U = Te,
          z = Ne,
          b = St,
          A = Ft,
          w = _e,
          n = ua,
          T = Lt,
          K = Ct,
          J = Ot;
        return a(), L(J, {
          class: "memepad-new-step-review"
        }, {
          top: M(() => [_("div", ma, [R(U, {
            "step-number": d.stepNumber,
            step: e(G).REVIEW
          }, null, 8, ["step-number", "step"])])]),
          default: M(() => [_("div", _a, [R(z, {
            title: ("t" in d ? d.t : e(m))("memepad.holders.list_item.your_share"),
            "is-optional": ""
          }, null, 8, ["title"]), _("div", va, [_("div", ga, [R(b, {
            ref_key: "actionControlsInputComp",
            ref: u,
            modelValue: e(l),
            "onUpdate:modelValue": S[0] || (S[0] = P => de(l) ? l.value = P : null),
            postfix: "TON",
            modifier: P => ("formatFloatLine" in d ? d.formatFloatLine : e(ft))(P, {
              join: "emptyFractional"
            }),
            onBlur: k
          }, null, 8, ["modelValue", "modifier"]), _("div", fa, [e(v) ? (a(), h("span", Aa, V(e(v).subtitle), 1)) : (a(), L(A, {
            key: 0,
            class: "skeleton"
          }))])]), _("div", wa, [d.balances.tokenBalance && e(i).overview ? (a(), L(w, {
            key: 0,
            type: e(le).SECONDARY,
            size: e(ce).MEDIUM,
            onClick: S[1] || (S[1] = P => g({
              tokenBalance: d.balances.tokenBalance,
              overview: e(i).overview
            }))
          }, {
            default: M(() => S[2] || (S[2] = [_("div", {
              class: "label"
            }, "MAX", -1)])),
            _: 1
          }, 8, ["type", "size"])) : B("", !0)])])])]),
          "bottom-action": M(() => [_("div", ba, [e(v) ? (a(), L(n, {
            key: 0,
            "with-share": !!e(i).share,
            "review-info": e(v)
          }, null, 8, ["with-share", "review-info"])) : (a(), L(A, {
            key: 1,
            class: "price-details-skeleton"
          })), R(K, null, {
            default: M(() => {
              var P, te, q, Q;
              return [((te = (P = e(v)) == null ? void 0 : P.error) == null ? void 0 : te.type) === e(Qe).NOT_ENOUGH_TOKEN ? (a(), L(T, {
                key: 0,
                details: e(v).error.details,
                source: ("ANALYTICS_MEMEPAD_OPERATION_SOURCE" in d ? d.ANALYTICS_MEMEPAD_OPERATION_SOURCE : e(Je)).LAUNCH,
                "flow-type": d.withAgent ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in d ? d.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in d ? d.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).REGULAR,
                "value-balance": (q = d.balances.tokenBalance) == null ? void 0 : q.value.toNumber(),
                "input-value": e(i).share,
                "need-more-value": (Q = e(v).error.needMoreValue) == null ? void 0 : Q.toNumber()
              }, null, 8, ["details", "source", "flow-type", "value-balance", "input-value", "need-more-value"])) : (a(), L(w, {
                key: 1,
                label: ("t" in d ? d.t : e(m))("memepad.new.step_review.launch_btn"),
                loading: e(o),
                disabled: e(c),
                fill: "",
                size: e(ce).LARGE,
                type: e(c) ? e(le).PRIMARY : e(le).DROP,
                tertiary: e(c),
                onClick: C
              }, null, 8, ["label", "loading", "disabled", "size", "type", "tertiary"]))]
            }),
            _: 1
          })])]),
          _: 1
        })
      }
    }
  }), ha = $(Ea, [
    ["__scopeId", "data-v-d08c80fc"]
  ]), ya = {
    class: "memepad-new"
  }, Ia = D({
    __name: "New",
    props: {
      withAgent: {
        type: Boolean,
        default: !1
      }
    },
    setup(s) {
      const r = H(),
        {
          useWalletOperationsErrorsStack: t,
          getNetworkTokenBalance: p,
          addresses: i
        } = xe(),
        {
          popRetryPayload: f
        } = Oe(),
        u = E(() => {
          var b;
          return (b = At().getters.getUser.value) == null ? void 0 : b.referrerToken
        }),
        o = () => ({
          step: G.TOKEN_INFO,
          stepTokenInfo: Ae.stepTokenInfo(),
          stepPersonalizeToken: Ae.stepPersonalizeToken(),
          stepReview: Ae.stepReview()
        }),
        c = f(),
        l = Y(c ? kt(c) : o()),
        N = E(() => {
          const b = [G.TOKEN_INFO, G.PERSONALIZE_TOKEN, G.REVIEW];
          return {
            stepNumber: b.indexOf(l.value.step) + 1,
            countSteps: b.length
          }
        }),
        v = E(() => ({
          tokenBalance: l.value.stepTokenInfo.networkType ? p(l.value.stepTokenInfo.networkType) : void 0
        })),
        y = E(() => {
          if (!i.value) return;
          const b = l.value.stepTokenInfo.networkType;
          return Pt({
            balances: v.value,
            addresses: i.value,
            networkType: b,
            referrerToken: u.value
          })
        }),
        F = () => {
          l.value = o(), se().error(m("memepad.new.ai_agent.prompt_expired"))
        };
      (() => {
        c ? r.memepad.memepadJettonRetry({
          flowType: s.withAgent ? I.AI : I.REGULAR
        }) : s.withAgent ? r.memepad.memepadJettonStepAiAgent() : r.memepad.memepadJettonStepTokenInfo({
          flowType: s.withAgent ? I.AI : I.REGULAR
        })
      })();
      const k = (b, A) => {
          const w = {
            step: G.PERSONALIZE_TOKEN,
            stepTokenInfo: A,
            stepPersonalizeToken: b.stepPersonalizeToken,
            stepReview: b.stepReview
          };
          l.value = w, r.memepad.memepadJettonStepPersonaliseToken({
            flowType: s.withAgent ? I.AI : I.REGULAR
          })
        },
        C = (b, A) => {
          const w = {
            step: G.REVIEW,
            stepTokenInfo: b.stepTokenInfo,
            stepPersonalizeToken: A,
            stepReview: b.stepReview
          };
          l.value = w, r.memepad.memepadJettonStepReview({
            flowType: s.withAgent ? I.AI : I.REGULAR
          })
        },
        O = async b => {
          await bt(100), await fe().push({
            name: "memepad-new-launching-id",
            params: {
              id: b.queryId
            }
          })
        }, W = (b, A) => {
          l.value = {
            ...b,
            stepReview: A
          }
        }, d = (b, A) => {
          l.value = {
            ...b,
            stepPersonalizeToken: A
          }
        };
      wt().initHandler(() => {
        var A;
        const b = l.value;
        switch (b.step) {
          case G.TOKEN_INFO:
            (A = i.value) != null && A.isAvailableAI ? fe().push({
              name: "memepad-new"
            }) : fe().push({
              name: "memepad"
            });
            break;
          case G.PERSONALIZE_TOKEN:
            l.value = {
              ...b,
              step: G.TOKEN_INFO
            };
            break;
          case G.REVIEW:
            l.value = {
              ...b,
              step: G.PERSONALIZE_TOKEN
            };
            break;
          default:
            throw Ge("Invalid step")
        }
      }, "memepad-new");
      const {
        addErrorToStackAndCheck: S
      } = t(), {
        runLaunchStatusFetchingInBackground: U
      } = Oe(), z = b => async A => {
        const w = await b.createJetton({
          form: A
        });
        return x(w) ? (U({
          payload: A,
          data: w.data,
          getWaitForCreateStatus: b.getWaitForCreateStatus,
          withAgent: s.withAgent
        }), Ye(w.data)) : (r.memepad.memepadJettonLaunchWalletUiError({
          flowType: s.withAgent ? I.AI : I.REGULAR,
          reason: w.extra && w.extra instanceof Error && w.extra instanceof Et ? "ton_connect_ui_error" : "other"
        }), S({
          name: A.name,
          ticker: A.ticker,
          promptId: A.promptId,
          promptExpireAt: A.promptExpireAt,
          description: A.description,
          iconFileKey: A.iconFileKey,
          socialProviders: A.socialProviders,
          bannerFileKey: A.bannerFileKey,
          isNSFW: A.isNSFW,
          networkType: A.networkType,
          share: A.share
        }, {
          source: Je.LAUNCH,
          flowType: s.withAgent ? I.AI : I.REGULAR
        }), w)
      };
      return (b, A) => {
        const w = Mt,
          n = En,
          T = ht,
          K = Xn,
          J = ha;
        return a(), h("div", ya, [R(w, {
          step: e(N).stepNumber,
          "count-steps": e(N).countSteps
        }, null, 8, ["step", "count-steps"]), e(l).step === e(G).TOKEN_INFO ? (a(), L(n, {
          key: 0,
          "step-number": e(N).stepNumber,
          state: e(l),
          "with-agent": b.withAgent,
          onContinue: A[0] || (A[0] = P => k(e(l), P))
        }, null, 8, ["step-number", "state", "with-agent"])) : e(y) ? e(l).step === e(G).PERSONALIZE_TOKEN ? (a(), L(K, {
          key: 2,
          state: e(l),
          "step-number": e(N).stepNumber,
          "with-agent": b.withAgent,
          onUpdate: A[1] || (A[1] = P => d(e(l), P)),
          onContinue: A[2] || (A[2] = P => C(e(l), P))
        }, null, 8, ["state", "step-number", "with-agent"])) : e(l).step === e(G).REVIEW ? (a(), L(J, {
          key: 3,
          state: e(l),
          "step-number": e(N).stepNumber,
          balances: e(v),
          "launch-controls": e(y),
          "launch-callback": z(e(y)),
          "with-agent": b.withAgent,
          onContinue: A[3] || (A[3] = P => O(P)),
          onUpdate: A[4] || (A[4] = P => W(e(l), P)),
          onPromptExpired: F
        }, null, 8, ["state", "step-number", "balances", "launch-controls", "launch-callback", "with-agent"])) : B("", !0) : (a(), L(T, {
          key: 1
        }))])
      }
    }
  }), Va = $(Ia, [
    ["__scopeId", "data-v-b75a0181"]
  ]);
export {
  Va as _
};