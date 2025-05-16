import {
  d as K,
  o as i,
  c as I,
  a as f,
  aB as Se,
  f as B,
  j as w,
  a8 as Ye,
  C as A,
  t as V,
  e,
  V as pe,
  W as ae,
  bm as oe,
  b as R,
  F as j,
  q as te,
  N as L,
  n as be,
  B as ce,
  a1 as le,
  G as $,
  X as J,
  x as me,
  bN as Ge,
  y as F,
  bb as Ie,
  ag as he,
  aM as we,
  D as M,
  bc as b,
  bU as X,
  bV as _e,
  a9 as ge,
  af as Z,
  ac as ue,
  A as ie,
  aX as De,
  bW as Re,
  aR as $e,
  bX as We,
  bY as se,
  bZ as it,
  aS as ze,
  aF as rt,
  bw as ct,
  O as dt,
  a0 as ye,
  b4 as He,
  Z as ee,
  w as Ce,
  bx as Je,
  m as qe,
  a2 as Ze,
  az as Fe,
  aa as je,
  b_ as H,
  b$ as pt,
  p as ke,
  c0 as ut,
  c1 as mt,
  bT as Oe,
  av as _t,
  _ as Le,
  bh as Ne,
  b2 as At,
  ap as vt,
  c2 as gt,
  a6 as Ue,
  br as Et,
  bu as Qe,
  H as Ve,
  k as ft,
  U as Tt,
  ai as ve,
  bv as Nt,
  c3 as bt,
  ad as It
} from "./1XbCgLiZ.js";
import {
  M as O,
  g as wt,
  _ as Rt,
  a as St,
  r as ht,
  b as x
} from "./CpW4ikH8.js";
import {
  _ as fe
} from "./Bz_cBPXx.js";
import {
  _ as Xe
} from "./ClJ5rZsY.js";
import {
  _ as yt
} from "./D3NFvaLN.js";
import {
  i as Ct,
  a as kt,
  b as Ot,
  _ as xe,
  F as Ee,
  c as et
} from "./C8Tl-ksf.js";
import {
  u as tt
} from "./B7Z7kiCN.js";
import {
  _ as Pe
} from "./2UWPMPm0.js";
import {
  K as nt
} from "./DBEjUjn-.js";
import {
  _ as Lt
} from "./DqDK2P8T.js";
import {
  f as Pt,
  b as Gt,
  _ as Ft,
  a as Ut,
  c as Vt,
  d as Mt
} from "./CwzdnFN2.js";
import {
  _ as Kt
} from "./NA_AbPM5.js";
import {
  b as at
} from "./5ZBE_yEW.js";
const Bt = {
    class: "memepad-new-progress"
  },
  Yt = K({
    __name: "NewProgress",
    props: {
      step: {},
      countSteps: {}
    },
    setup(o) {
      return (a, t) => (i(), I("div", Bt, [f("div", {
        class: "track",
        style: Se({
          width: `${a.step/a.countSteps*100}%`
        })
      }, null, 4)]))
    }
  }),
  Dt = B(Yt, [
    ["__scopeId", "data-v-d5a07e30"]
  ]),
  $t = {
    class: "memepad-new-step-heading"
  },
  Wt = {
    class: "step"
  },
  zt = {
    class: "label"
  },
  Ht = K({
    __name: "NewStepHeading",
    props: {
      stepNumber: {},
      step: {}
    },
    setup(o) {
      const a = o,
        t = w(() => {
          switch (a.step) {
            case O.AI_AGENT:
              return A("memepad.new.step_ai_agent.title");
            case O.REVIEW:
              return A("memepad.new.step_review.title");
            case O.PERSONALIZE_TOKEN:
              return A("memepad.new.step_personalize_token.title");
            case O.TOKEN_INFO:
              return A("memepad.new.step_token_info.title");
            default:
              throw a.step, Ye("Invalid step")
          }
        });
      return (_, r) => (i(), I("div", $t, [f("div", Wt, V(_.stepNumber), 1), f("div", zt, V(e(t)), 1)]))
    }
  }),
  Te = B(Ht, [
    ["__scopeId", "data-v-224a616e"]
  ]),
  Jt = {
    class: "inner"
  },
  qt = {
    class: "label"
  },
  Zt = {
    key: 1,
    class: "range-wrapper"
  },
  jt = K({
    __name: "Traits",
    props: pe({
      pending: {
        type: Boolean
      }
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(o) {
      const a = ae(o, "modelValue"),
        t = o,
        _ = w(() => {
          const r = Object.entries(a.value),
            E = {
              [oe.MEMEPAD_AI_AGENT_TRAITS.SAD]: A("memepad.new.step_ai_agent.traits.sad_label"),
              [oe.MEMEPAD_AI_AGENT_TRAITS.CHEEKY]: A("memepad.new.step_ai_agent.traits.cheeky_label"),
              [oe.MEMEPAD_AI_AGENT_TRAITS.KIND]: A("memepad.new.step_ai_agent.traits.kind_label")
            };
          return r.map(([u, p]) => ({
            key: u,
            label: t.pending ? E[u] : `${E[u]} ${p}%`,
            value: w({
              get() {
                return a.value[u]
              },
              set(d) {
                a.value[u] = d
              }
            })
          }))
        });
      return (r, E) => {
        const u = fe,
          p = Xe,
          d = yt;
        return i(), I("div", {
          class: be(["memepad-new-form-traits", {
            "is-loading": r.pending
          }])
        }, [R(u, {
          title: ("t" in r ? r.t : e(A))("memepad.new.step_ai_agent.traits.field_title")
        }, null, 8, ["title"]), f("div", Jt, [(i(!0), I(j, null, te(e(_), n => (i(), I("div", {
          key: n.key,
          class: "item"
        }, [f("div", qt, V(n.label), 1), r.pending ? (i(), L(p, {
          key: 0,
          class: "skeleton"
        })) : (i(), I("div", Zt, [R(d, {
          modelValue: n.value.value,
          "onUpdate:modelValue": g => n.value.value = g,
          scale: "linear",
          min: 0,
          step: 1,
          max: 100
        }, null, 8, ["modelValue", "onUpdate:modelValue"])]))]))), 128))])], 2)
      }
    }
  }),
  Qt = B(jt, [
    ["__scopeId", "data-v-b0a6b734"]
  ]),
  Xt = K({
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
    setup(o, {
      emit: a
    }) {
      const t = a,
        {
          addresses: _
        } = tt(),
        r = w(() => {
          var p;
          return !!((p = _.value) != null && p.isAvailableAI)
        }),
        E = w(() => {
          const p = o.onceGenerated ? A("memepad.new.ai_agent.generate_again_btn") : A("memepad.new.ai_agent.generate_btn"),
            d = o.onceGenerated ? ce.GREYSTARS : ce.GREENSTARS;
          return {
            label: p,
            type: d
          }
        }),
        u = () => {
          o.onceGenerated ? J().memepad.memepadJettonAiGenerateAgainButtonClick({
            flowType: o.analyticsType,
            page: o.analyticsPage,
            stage: o.analyticsStage
          }) : J().memepad.memepadJettonAiGenerateButtonClick({
            flowType: o.analyticsType,
            page: o.analyticsPage
          }), t("click")
        };
      return (p, d) => {
        const n = me;
        return e(r) ? (i(), L(n, {
          key: 0,
          label: e(E).label,
          size: e(le).LARGE,
          type: e(E).type,
          loading: p.pending,
          onClick: u
        }, null, 8, ["label", "size", "type", "loading"])) : $("", !0)
      }
    }
  }),
  Ae = B(Xt, [
    ["__scopeId", "data-v-cd79f34a"]
  ]),
  xt = {
    required: o => {
      if (!o) return A("form.rules.required")
    },
    maxLength: (o, {
      maxLength: a
    }) => {
      const t = a - o.length;
      if (t < 0) return A("form.rules.max_length", {
        overCount: String(t * -1)
      })
    },
    isUrl: (o, a) => {
      const t = A("form.rules.is_url"),
        _ = a != null && a.prefix ? `${a==null?void 0:a.prefix}${o}` : o;
      if (!Ct(_)) return t
    },
    isEmail: o => {
      if (!kt(o)) return A("form.rules.is_email")
    }
  },
  en = o => ({
    modelValue: o.value,
    "onUpdate:modelValue": a => {
      o.onUpdate(a)
    }
  }),
  tn = o => ({
    modelValue: o.value,
    "onUpdate:modelValue": a => {
      o.onUpdate(a)
    },
    errorCaption: o.error,
    isError: !!o.error
  }),
  nn = o => {
    const a = Ge({
        ...o.defaultValues
      }),
      t = F({}),
      _ = Ge({}),
      r = (g = Object.keys(o.validationSchema)) => {
        const N = h => {
          const C = o.validationSchema[h];
          C && (t.value[h] = C(a[h], a)), _[h] = !0
        };
        for (const h of g) N(h)
      },
      E = (g, N) => {
        const h = w(() => t.value[g]),
          C = w({
            get: () => a[g],
            set: P => {
              a[g] = P, _[g] && r([g])
            }
          }),
          S = w(() => N({
            value: C.value,
            error: h.value,
            onUpdate: P => {
              C.value = P
            }
          }));
        return {
          error: h,
          value: C,
          binds: S
        }
      },
      u = (g, N) => {
        a[g] = N
      },
      p = w(() => {
        for (const g in o.validationSchema) {
          const N = o.validationSchema[g];
          if (N && N(a[g], a)) return !1
        }
        return !0
      }),
      d = w(() => Object.values(t.value).every(g => !g));
    return {
      errors: t,
      values: a,
      getField: E,
      isLazyValid: d,
      isValid: p,
      handleSubmit: g => () => {
        r(), p.value && g(a)
      },
      setValue: u
    }
  },
  an = {
    class: "memepad-new-step-ai-agent"
  },
  on = {
    class: "buttons"
  },
  Me = 135,
  sn = K({
    __name: "AiAgent",
    props: {
      state: {},
      stepNumber: {}
    },
    emits: ["continue"],
    setup(o, {
      emit: a
    }) {
      const t = o,
        _ = a,
        {
          isAiAgentPayloadOnceGenerated: r
        } = Ie(),
        E = w(() => t.state.stepAiAgent),
        {
          getField: u,
          isLazyValid: p,
          handleSubmit: d,
          setValue: n
        } = nn({
          validationSchema: {
            traits: () => {},
            prompt: y => y ? xt.maxLength(y, {
              maxLength: Me
            }) : void 0
          },
          defaultValues: {
            traits: E.value.aiAgentSettings.traits,
            prompt: E.value.aiAgentSettings.prompt ?? ""
          }
        }),
        g = u("traits", en),
        N = u("prompt", tn),
        h = w(() => p.value),
        C = d(y => {
          _("continue", {
            aiAgentEnable: !0,
            aiAgentSettings: {
              traits: y.traits,
              prompt: y.prompt
            }
          })
        }),
        S = F(!1),
        P = async () => {
          S.value || (S.value = !0, await (async () => {
            const y = await ge.generateMemepadAiAgentSetup();
            if (!Z(y)) return ue().error(A("memepad.new.step_ai_agent.generation_failed_alert"));
            n("traits", y.data.settings.traits), n("prompt", y.data.settings.prompt)
          })(), S.value = !1)
        };
      return he(() => {
        r.value || (P(), r.value = !0)
      }), (y, Y) => {
        const W = Te,
          l = Qt,
          T = Ot,
          m = Ae,
          k = me,
          s = Pe;
        return i(), I("div", an, [R(W, {
          "step-number": y.stepNumber,
          step: e(O).AI_AGENT
        }, null, 8, ["step-number", "step"]), R(l, we(e(g).binds.value, {
          pending: e(S)
        }), null, 16, ["pending"]), R(T, we(e(N).binds.value, {
          "max-length": Me,
          "is-optional": "",
          loading: e(S),
          label: ("t" in y ? y.t : e(A))("memepad.new.step_ai_agent.field_prompt.label"),
          placeholder: ("t" in y ? y.t : e(A))("memepad.new.step_ai_agent.field_prompt.placeholder")
        }), null, 16, ["loading", "label", "placeholder"]), R(s, null, {
          default: M(() => [f("div", on, [R(m, {
            "once-generated": "",
            pending: e(S),
            "analytics-type": ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in y ? y.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(b)).AI,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in y ? y.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(X)).AI,
            "analytics-stage": e(_e).IMAGE_GENERATION,
            onClick: P
          }, null, 8, ["pending", "analytics-type", "analytics-page", "analytics-stage"]), R(k, {
            label: ("t" in y ? y.t : e(A))("base.continue"),
            fill: "",
            tertiary: "",
            disabled: !e(h) || e(S),
            size: e(le).LARGE,
            onClick: e(C)
          }, null, 8, ["label", "disabled", "size", "onClick"])])]),
          _: 1
        })])
      }
    }
  }),
  ln = B(sn, [
    ["__scopeId", "data-v-100d9e8b"]
  ]),
  rn = {
    class: "memepad-new-form-avatar"
  },
  cn = {
    class: "compose"
  },
  dn = {
    key: 1,
    src: it,
    alt: "Plus icon"
  },
  pn = {
    class: "content"
  },
  un = {
    class: "name"
  },
  mn = {
    class: "disclaimer"
  },
  Ke = 10,
  _n = K({
    __name: "Avatar",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(o, {
      expose: a
    }) {
      const t = ae(o, "modelValue"),
        _ = ie("file-uploader"),
        r = () => {
          var d;
          return (d = _.value) == null ? void 0 : d.triggerFileUpload()
        },
        E = F(),
        u = w(() => {
          if (t.value) return De(t.value)
        });
      return a({
        selectFile: d => {
          var n;
          (n = _.value) == null || n.onFileSelected(d)
        }
      }), (d, n) => {
        var h;
        const g = ze,
          N = nt;
        return i(), I("div", rn, [f("div", cn, [e(u) ? (i(), I("div", {
          key: 0,
          class: "image is-uploaded",
          style: Se({
            backgroundImage: `url(${e(u)})`
          })
        }, null, 4)) : (i(), I("div", {
          key: 1,
          class: "image wait-upload",
          onClick: n[0] || (n[0] = C => r())
        }, [((h = e(E)) == null ? void 0 : h.status) === e(Re).UPLOADING ? (i(), L(g, {
          key: 0,
          type: e($e).LIGHT,
          size: 16
        }, null, 8, ["type"])) : (i(), I("img", dn))])), f("div", pn, [f("div", un, V(("t" in d ? d.t : e(A))("memepad.new.step_token_info.field_icon.label")), 1), f("div", mn, V(("t" in d ? d.t : e(A))("memepad.new.step_token_info.field_icon.description", {
          maxUploadSize: String(Ke)
        })), 1)]), t.value ? (i(), I("div", {
          key: 2,
          class: "delete",
          onClick: n[1] || (n[1] = C => t.value = void 0)
        }, n[4] || (n[4] = [f("img", {
          src: We,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))) : $("", !0)]), R(N, {
          ref: "file-uploader",
          "hide-ui": "",
          "max-file-size-mb": Ke,
          accept: [e(se).JPEG, e(se).PNG, e(se).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 1,
            borderRadius: 999
          },
          "onUpdate:progress": n[2] || (n[2] = C => E.value = C),
          onUploaded: n[3] || (n[3] = C => t.value = C.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  An = B(_n, [
    ["__scopeId", "data-v-f7a6c9a9"]
  ]),
  vn = {
    class: "loader"
  },
  gn = {
    class: "description"
  },
  En = 3e3,
  fn = K({
    __name: "GenerateContentLoader",
    setup(o) {
      let a;
      const t = w(() => [A("memepad.new.ai_agent.generate_loader_description.1"), A("memepad.new.ai_agent.generate_loader_description.2"), A("memepad.new.ai_agent.generate_loader_description.3"), A("memepad.new.ai_agent.generate_loader_description.4"), A("memepad.new.ai_agent.generate_loader_description.5"), A("memepad.new.ai_agent.generate_loader_description.6"), A("memepad.new.ai_agent.generate_loader_description.7"), A("memepad.new.ai_agent.generate_loader_description.8"), A("memepad.new.ai_agent.generate_loader_description.9"), A("memepad.new.ai_agent.generate_loader_description.10"), A("memepad.new.ai_agent.generate_loader_description.11"), A("memepad.new.ai_agent.generate_loader_description.12"), A("memepad.new.ai_agent.generate_loader_description.13"), A("memepad.new.ai_agent.generate_loader_description.14"), A("memepad.new.ai_agent.generate_loader_description.15"), A("memepad.new.ai_agent.generate_loader_description.16"), A("memepad.new.ai_agent.generate_loader_description.17"), A("memepad.new.ai_agent.generate_loader_description.18")]),
        _ = F(t.value[0]),
        r = () => {
          _.value = t.value[Math.floor(Math.random() * t.value.length)]
        };
      return he(() => {
        a = rt(r, En)
      }), ct(() => {
        clearInterval(a)
      }), (E, u) => {
        const p = dt;
        return i(), I("div", vn, [R(p, {
          name: "animations/other/stars_sparkle_grey",
          height: "262px",
          "z-index": "1"
        }), f("div", gn, V(e(_)), 1)])
      }
    }
  }),
  ot = B(fn, [
    ["__scopeId", "data-v-d75545b6"]
  ]),
  Tn = {
    class: "menu"
  },
  Nn = ["onClick"],
  bn = {
    class: "item-image"
  },
  In = ["src"],
  wn = {
    class: "item-name"
  },
  Rn = {
    class: "item-arrow"
  },
  Sn = ["src"],
  hn = K({
    __name: "Menu",
    props: {
      items: {}
    },
    setup(o) {
      return (a, t) => (i(), I("ul", Tn, [(i(!0), I(j, null, te(a.items, ({
        name: _,
        imageUrl: r,
        onClick: E
      }, u) => (i(), I("li", {
        key: u,
        class: "menu-item",
        onClick: E
      }, [f("div", bn, [f("img", {
        src: r,
        alt: ""
      }, null, 8, In)]), f("div", wn, V(_), 1), f("div", Rn, [f("img", {
        src: ("imgResolver" in a ? a.imgResolver : e(ye))("menu-arrow-right", "svg"),
        alt: ""
      }, null, 8, Sn)])], 8, Nn))), 128))]))
    }
  }),
  yn = B(hn, [
    ["__scopeId", "data-v-e6475410"]
  ]);
var de = (o => (o.ERROR = "ERROR", o.LOADING = "LOADING", o.LOADED = "LOADED", o))(de || {});
const st = o => {
    let a = new AbortController;
    const t = He("aiGeneratedMemepadContent", () => ({
        loadStatus: "LOADED",
        categories: [],
        selectedCategory: null,
        promptId: null,
        info: null,
        result: [],
        isSheetVisible: !1
      })),
      _ = w(() => t.value.result.length > 0 && t.value.loadStatus === "LOADED"),
      r = w(() => t.value.loadStatus === "LOADING"),
      E = w(() => t.value.loadStatus === "ERROR"),
      u = w(() => _.value),
      p = w(() => !_.value && t.value.loadStatus !== "ERROR"),
      d = w(() => _.value),
      n = w(() => t.value.result.every(({
        isLoaded: s
      }) => s)),
      g = w(() => _.value || t.value.loadStatus === "ERROR"),
      N = w(() => t.value.categories.map(s => ({
        ...s,
        onClick: async () => {
          J().memepad.memepadJettonAiGeneratedCategorySelect({
            flowType: o ? b.AI : b.REGULAR,
            categoryName: s.name
          }), t.value.selectedCategory = s, await P()
        }
      }))),
      h = async () => {
        if (a.signal.aborted || t.value.categories.length > 0) return;
        t.value.loadStatus = "LOADING", t.value.categories = [];
        const s = await ge.getMemepadAiContentCategories({
          abortSignal: a.signal
        });
        if (!Z(s)) {
          t.value.loadStatus = a.signal.aborted ? "LOADED" : "ERROR";
          return
        }
        t.value.categories = s.data.categories.map(({
          description: c,
          imageUrl: v,
          name: G
        }) => ({
          description: c,
          imageUrl: v,
          name: G
        })), t.value.loadStatus = "LOADED"
      }, C = async () => {
        if (a.signal.aborted) return;
        if (t.value.selectedCategory === null) {
          t.value.loadStatus = "ERROR";
          return
        }
        t.value.loadStatus = "LOADING", t.value.promptId = null, t.value.info = null;
        const s = await ge.generateMemepadAiContent({
          payload: {
            category: t.value.selectedCategory.name,
            topic: t.value.selectedCategory.description
          },
          abortSignal: a.signal
        });
        if (!Z(s)) {
          t.value.loadStatus = a.signal.aborted ? "LOADED" : "ERROR";
          return
        }
        t.value.promptId = s.data.promptId, t.value.info = {
          name: s.data.name,
          ticker: s.data.ticker,
          description: s.data.description
        }, t.value.loadStatus = "LOADED"
      }, S = async (s, c) => {
        const v = t.value.result.length > 0 && s !== oe.MEMEPAD_AI_IMAGE_TYPE.ICON,
          G = {
            type: s,
            prompt: c
          };
        !v && t.value.promptId !== null && (G.promptId = t.value.promptId), t.value.loadStatus = "LOADING", t.value.result = [];
        const z = await ge.generateMemepadAiImages({
          payload: G,
          abortSignal: a.signal
        });
        if (!Z(z)) {
          t.value.loadStatus = a.signal.aborted ? "LOADED" : "ERROR";
          return
        }
        t.value.result = z.data.images.map(q => ({
          imageUrl: q,
          isLoaded: !1
        }))
      }, P = async () => {
        if (await C(), !a.signal.aborted) {
          if (t.value.selectedCategory === null || t.value.info === null) {
            t.value.loadStatus = "ERROR";
            return
          }
          await S(oe.MEMEPAD_AI_IMAGE_TYPE.ICON, t.value.info.description)
        }
      }, y = async s => {
        a.signal.aborted || await S(oe.MEMEPAD_AI_IMAGE_TYPE.BANNER, s)
      }, Y = () => {
        t.value.isSheetVisible = !0
      }, W = () => {
        t.value.isSheetVisible = !1
      }, l = () => {
        a.abort(), setTimeout(() => {
          a = new AbortController
        })
      };
    return {
      categoryMenuItems: N,
      fetchBanners: y,
      fetchCategoriesOnce: h,
      fetchIcons: P,
      generateContentSheetState: t,
      hasResult: _,
      hide: W,
      isBackIconVisible: u,
      isErrorVisible: E,
      isLoadingBarVisible: r,
      isMenuVisible: p,
      isRegenerateButtonVisible: g,
      isResultVisible: d,
      onResultItemLoad: s => {
        var c;
        ((c = t.value.result) == null ? void 0 : c[s]) !== void 0 && (t.value.result[s].isLoaded = !0, n.value && (t.value.loadStatus = "LOADED"))
      },
      resetGenerateContentSheetResultState: () => {
        l(), t.value.loadStatus = "LOADED", t.value.selectedCategory = null, t.value.info = null, t.value.result = []
      },
      resetGenerateContentSheetState: () => {
        l(), t.value.loadStatus = "LOADED", t.value.categories = [], t.value.selectedCategory = null, t.value.info = null, t.value.result = []
      },
      show: Y
    }
  },
  Cn = {
    class: "body"
  },
  kn = {
    class: "result"
  },
  On = ["src", "onClick", "onLoad"],
  Ln = ["src"],
  Pn = K({
    __name: "GenerateIconSheet",
    props: {
      withAi: {
        type: Boolean
      }
    },
    emits: ["back", "close", "select", "generate-prompt-id"],
    setup(o, {
      expose: a,
      emit: t
    }) {
      const _ = t,
        {
          categoryMenuItems: r,
          fetchCategoriesOnce: E,
          fetchIcons: u,
          generateContentSheetState: p,
          hasResult: d,
          hide: n,
          isBackIconVisible: g,
          isErrorVisible: N,
          isLoadingBarVisible: h,
          isMenuVisible: C,
          isRegenerateButtonVisible: S,
          isResultVisible: P,
          onResultItemLoad: y,
          resetGenerateContentSheetResultState: Y,
          resetGenerateContentSheetState: W,
          show: l
        } = st(o.withAi),
        T = w(() => {
          if (!d.value && p.value.loadStatus !== de.ERROR) return A("memepad.new.ai_agent.select_model");
          if (d.value && p.value.loadStatus !== de.ERROR) return A("memepad.new.ai_agent.select_icon")
        }),
        m = async () => {
          p.value.loadStatus === de.ERROR && await E(), await u()
        }, k = v => {
          p.value.info !== null && (n(), _("select", {
            ...p.value.info,
            ...v
          }), W())
        }, s = () => {
          _("back"), Y()
        }, c = () => {
          if (h.value) {
            const G = (() => {
              switch (!0) {
                case !r.value.length:
                  return "category_choice";
                case !p.value.info:
                  return "data_loading";
                case !p.value.result.length:
                  return "image_choice"
              }
            })();
            G && J().memepad.memepadJettonAiGenerationCancel({
              flowType: o.withAi ? b.AI : b.REGULAR,
              page: X.TOKEN_INFO,
              stage: G
            })
          }
          _("close"), Y()
        };
      return ee(() => p.value.isSheetVisible, async v => {
        v && await E()
      }), a({
        show: l,
        hide: n
      }), ee(() => p.value.promptId, v => {
        v && _("generate-prompt-id", v)
      }), (v, G) => {
        const z = ot,
          q = yn,
          Q = xe,
          U = Ae,
          D = Ze;
        return i(), L(D, {
          modelValue: e(p).isSheetVisible,
          "onUpdate:modelValue": G[0] || (G[0] = ne => e(p).isSheetVisible = ne),
          title: e(T),
          "back-icon": e(g),
          "no-header-line": "",
          onBack: s,
          onClose: c
        }, {
          default: M(() => [f("div", Cn, [e(h) ? (i(), L(z, {
            key: 0
          })) : $("", !0), e(C) ? (i(), L(q, {
            key: 1,
            items: e(r)
          }, null, 8, ["items"])) : $("", !0), Ce(f("div", kn, [(i(!0), I(j, null, te(e(p).result, (ne, re) => (i(), I("div", {
            key: re
          }, [f("img", {
            alt: "",
            src: ne.imageUrl,
            onClick: () => k(ne),
            onLoad: () => e(y)(re)
          }, null, 40, On)]))), 128))], 512), [
            [Je, e(P)]
          ]), e(N) ? (i(), L(Q, {
            key: 2
          }, {
            header: M(() => [f("img", {
              src: ("imgResolver" in v ? v.imgResolver : e(ye))("special/big-pink-cross", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, Ln)]),
            title: M(() => [qe(V(("t" in v ? v.t : e(A))("memepad.new.ai_agent.generation_failed_error")), 1)]),
            _: 1
          })) : $("", !0), e(S) ? (i(), L(U, {
            key: 3,
            "once-generated": "",
            class: "button-regenerate",
            "analytics-type": v.withAi ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in v ? v.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(b)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in v ? v.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(b)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in v ? v.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(X)).TOKEN_INFO,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in v ? v.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e(_e)).FINAL_STAGE_OF_STEP,
            onClick: m
          }, null, 8, ["analytics-type", "analytics-page", "analytics-stage"])) : $("", !0)])]),
          _: 1
        }, 8, ["modelValue", "title", "back-icon"])
      }
    }
  }),
  Gn = B(Pn, [
    ["__scopeId", "data-v-515b114a"]
  ]),
  lt = async o => {
    try {
      const a = await fetch(o);
      if (!a.ok) return Fe("Failed to get image");
      const t = await a.arrayBuffer(),
        _ = new File([t], "image.png", {
          type: "image/png"
        });
      return je(_)
    } catch {
      return Fe("Failed to get image")
    }
  }, Fn = {
    class: "memepad-new-step-token-info"
  }, Un = {
    class: "buttons"
  }, Vn = K({
    __name: "TokenInfo",
    props: {
      state: {},
      stepNumber: {}
    },
    emits: ["continue"],
    setup(o, {
      emit: a
    }) {
      const t = o,
        _ = a,
        r = ie("avatar"),
        E = ie("generate-icon-sheet"),
        u = F(!1),
        p = F(!1),
        d = F({
          ...t.state.stepTokenInfo
        }),
        n = F({
          [H.ICON]: !1,
          [H.TICKER]: !1,
          [H.NAME]: !1,
          [H.DESCRIPTION]: !1
        });
      ee(d, (m, k) => {
        [
          ["name", H.NAME],
          ["iconFileKey", H.ICON],
          ["ticker", H.TICKER],
          ["description", H.DESCRIPTION]
        ].forEach(([c, v]) => {
          m[c] !== k[c] && n.value[v] && (J().memepad.memepadJettonGenerationContentUpdate({
            flowType: t.state.stepAiAgent.aiAgentEnable ? b.AI : b.REGULAR,
            page: X.TOKEN_INFO,
            contentType: v
          }), n.value[v] = !1)
        })
      });
      const g = F([{
          key: "name",
          type: Ee.STRING,
          value: w({
            get: () => d.value.name ?? "",
            set: m => d.value.name = m ?? ""
          }),
          props: {
            label: A("memepad.new.step_token_info.field_name.label"),
            placeholder: A("memepad.new.step_token_info.field_name.placeholder")
          },
          validators: {
            required: {},
            maxLength: {
              value: 20
            }
          }
        }, {
          key: "ticker",
          type: Ee.STRING,
          value: w({
            get: () => d.value.ticker ?? "",
            set: m => d.value.ticker = m ?? ""
          }),
          props: {
            label: A("memepad.new.step_token_info.field_ticker.label"),
            placeholder: A("memepad.new.step_token_info.field_ticker.placeholder"),
            modifiers: [pt.UPPERCASE]
          },
          validators: {
            required: {},
            maxLength: {
              value: 10
            }
          },
          customValidator: m => {
            if (!m.match(/^[A-Z0-9]+$/)) return A("memepad.new.step_token_info.field_ticker.custom_validator_error")
          }
        }, {
          key: "description",
          type: Ee.TEXTAREA,
          value: w({
            get: () => d.value.description ?? "",
            set: m => d.value.description = m ?? ""
          }),
          props: {
            label: A("memepad.new.step_token_info.field_description.label"),
            placeholder: A("memepad.new.step_token_info.field_description.placeholder")
          },
          validators: {
            required: {},
            maxLength: {
              value: 240
            }
          }
        }]),
        N = F(),
        h = w(() => {
          var m;
          return ((m = N.value) == null ? void 0 : m.isFormValid) && !!d.value.iconFileKey
        }),
        C = () => _("continue", d.value),
        S = () => {
          var m;
          u.value = !0, (m = E.value) == null || m.show()
        },
        P = async ({
          imageUrl: m,
          name: k,
          ticker: s,
          description: c
        }) => {
          y({
            name: k,
            ticker: s,
            description: c
          }), await W(m), n.value = {
            [H.ICON]: !0,
            [H.TICKER]: !0,
            [H.NAME]: !0,
            [H.DESCRIPTION]: !0
          }, p.value = !0, u.value = !1
        }, y = m => {
          Object.entries(m).forEach(([k, s]) => {
            const c = g.value.find(({
              key: v
            }) => v === k);
            c !== void 0 && (c.value = s)
          })
        }, Y = m => {
          J().memepad.memepadJettonSelectJettonIcon({
            flowType: t.state.stepAiAgent.aiAgentEnable ? b.AI : b.REGULAR,
            aiPowered: !1
          }), d.value.iconFileKey = m
        }, W = async m => {
          var s;
          const k = await lt(m);
          Z(k) ? ((s = r.value) == null || s.selectFile(k.data), J().memepad.memepadJettonSelectJettonIcon({
            flowType: t.state.stepAiAgent.aiAgentEnable ? b.AI : b.REGULAR,
            aiPowered: !0
          })) : ue().error(A("memepad.new.ai_generate.load_image_error"))
        }, l = () => {
          u.value = !1
        }, T = m => {
          d.value.promptId = m
        };
      return (m, k) => {
        const s = Te,
          c = An,
          v = et,
          G = Ae,
          z = me,
          q = Pe,
          Q = Gn;
        return i(), I("div", Fn, [R(s, {
          "step-number": m.stepNumber,
          step: e(O).TOKEN_INFO
        }, null, 8, ["step-number", "step"]), R(c, {
          ref: "avatar",
          "model-value": e(d).iconFileKey,
          "onUpdate:modelValue": Y
        }, null, 8, ["model-value"]), R(v, {
          modelValue: e(g),
          "onUpdate:modelValue": k[0] || (k[0] = U => ke(g) ? g.value = U : null),
          onChannel: k[1] || (k[1] = U => N.value = U)
        }, null, 8, ["modelValue"]), R(q, null, {
          default: M(() => [f("div", Un, [R(G, {
            pending: e(u),
            "once-generated": e(p),
            "analytics-type": m.state.stepAiAgent.aiAgentEnable ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in m ? m.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(b)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in m ? m.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(b)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in m ? m.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(X)).TOKEN_INFO,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in m ? m.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e(_e)).IMAGE_GENERATION,
            onClick: S
          }, null, 8, ["pending", "once-generated", "analytics-type", "analytics-page", "analytics-stage"]), R(z, {
            label: ("t" in m ? m.t : e(A))("base.continue"),
            fill: "",
            disabled: !e(h),
            tertiary: "",
            size: e(le).LARGE,
            onClick: C
          }, null, 8, ["label", "disabled", "size"])])]),
          _: 1
        }), R(Q, {
          ref: "generate-icon-sheet",
          "with-ai": m.state.stepAiAgent.aiAgentEnable,
          onGeneratePromptId: T,
          onSelect: P,
          onClose: l
        }, null, 8, ["with-ai"])])
      }
    }
  }), Mn = B(Vn, [
    ["__scopeId", "data-v-ccc0e3f9"]
  ]), Kn = {
    class: "memepad-new-form-banner"
  }, Bn = {
    key: 1,
    class: "banner is-uploading"
  }, Yn = {
    class: "description"
  }, Dn = {
    class: "text"
  }, $n = {
    class: "description"
  }, Be = 10, Wn = K({
    __name: "Banner",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(o, {
      expose: a
    }) {
      const t = ae(o, "modelValue"),
        _ = ie("file-uploader"),
        r = () => {
          var d;
          return (d = _.value) == null ? void 0 : d.triggerFileUpload()
        },
        E = F(),
        u = w(() => {
          if (E.value && E.value.status === Re.UPLOADING) return E.value.localUrl;
          if (t.value) return De(t.value)
        });
      return a({
        selectFile: d => {
          var n;
          (n = _.value) == null || n.onFileSelected(d)
        }
      }), (d, n) => {
        var C;
        const g = fe,
          N = ze,
          h = nt;
        return i(), I("div", Kn, [R(g, {
          title: ("t" in d ? d.t : e(A))("memepad.new.step_token_info.field_banner.label"),
          "is-optional": "",
          class: "heading"
        }, null, 8, ["title"]), t.value ? (i(), I("div", {
          key: 0,
          class: "banner is-uploaded",
          style: Se({
            backgroundImage: `url(${e(u)})`
          })
        }, [f("div", {
          class: "delete-btn",
          onClick: n[0] || (n[0] = S => t.value = void 0)
        }, n[4] || (n[4] = [f("img", {
          src: We,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))], 4)) : ((C = e(E)) == null ? void 0 : C.status) === e(Re).UPLOADING ? (i(), I("div", Bn, [R(N, {
          type: e($e).LIGHT,
          size: 16
        }, null, 8, ["type"]), f("div", Yn, V(("t" in d ? d.t : e(A))("memepad.new.step_token_info.field_banner.uploading")), 1)])) : (i(), I("div", {
          key: 2,
          class: "banner wait-upload",
          onClick: n[1] || (n[1] = S => r())
        }, [n[6] || (n[6] = f("img", {
          src: ut,
          alt: "Add"
        }, null, -1)), f("div", Dn, [f("div", $n, V(("t" in d ? d.t : e(A))("memepad.new.step_token_info.field_banner.description", {
          maxUploadSize: String(Be)
        })), 1), n[5] || (n[5] = f("div", {
          class: "ratio"
        }, "361 × 119", -1))])])), R(h, {
          ref: "file-uploader",
          "hide-ui": "",
          "max-file-size-mb": Be,
          accept: [e(se).JPEG, e(se).PNG, e(se).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 361 / 119,
            borderRadius: 8
          },
          "onUpdate:progress": n[2] || (n[2] = S => E.value = S),
          onUploaded: n[3] || (n[3] = S => t.value = S.key)
        }, null, 8, ["accept"])])
      }
    }
  }), zn = B(Wn, [
    ["__scopeId", "data-v-e7cdbd52"]
  ]), Hn = {
    class: "memepad-new-form-social-links-item"
  }, Jn = K({
    __name: "SocialLinksItem",
    props: pe({
      meta: {},
      optional: {
        type: Boolean
      },
      caption: {}
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: pe(["isValid", "delete"], ["update:modelValue"]),
    setup(o, {
      emit: a
    }) {
      const t = o,
        _ = a,
        r = ae(o, "modelValue"),
        E = F([{
          type: Ee.STRING,
          key: t.meta.apiKey,
          value: w({
            get: () => r.value ?? "",
            set: p => r.value = p || void 0
          }),
          props: {
            placeholder: t.meta.placeholder,
            size: mt.COMPACT,
            caption: t.caption
          },
          validators: t.optional ? t.meta.skipUrlValidation ? {} : {
            url: {}
          } : {
            required: {}
          }
        }]),
        u = F();
      return Oe(() => {
        var p;
        return _("isValid", ((p = u.value) == null ? void 0 : p.isFormValid) ?? !1)
      }), (p, d) => {
        const n = fe,
          g = Le,
          N = et;
        return i(), I("div", Hn, [R(N, {
          modelValue: e(E),
          "onUpdate:modelValue": d[1] || (d[1] = h => ke(E) ? E.value = h : null),
          onChannel: d[2] || (d[2] = h => u.value = h)
        }, _t({
          [`${p.meta.apiKey}-label`]: M(() => [R(n, {
            "icon-name": p.meta.icon,
            title: p.meta.display,
            "is-optional": p.optional
          }, null, 8, ["icon-name", "title", "is-optional"])]),
          _: 2
        }, [p.optional ? {
          name: `${p.meta.apiKey}-after`,
          fn: M(() => [f("button", {
            type: "button",
            class: "delete-button reset",
            onClick: d[0] || (d[0] = h => p.$emit("delete"))
          }, [R(g, {
            name: "trash",
            class: "icon"
          })])]),
          key: "0"
        } : void 0]), 1032, ["modelValue"])])
      }
    }
  }), qn = B(Jn, [
    ["__scopeId", "data-v-4cb1d169"]
  ]), Zn = {
    class: "memepad-new-form-social-links"
  }, jn = {
    class: "inputs"
  }, Qn = {
    key: 0,
    class: "add-panel"
  }, Xn = {
    class: "providers"
  }, xn = K({
    __name: "SocialLinks",
    props: pe({
      telegramRequired: {
        type: Boolean
      }
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: pe(["isValid"], ["update:modelValue"]),
    setup(o, {
      emit: a
    }) {
      const t = wt(),
        _ = ae(o, "modelValue"),
        r = o,
        E = a,
        u = F([r.telegramRequired ? {
          provider: Ne.TELEGRAM,
          isValid: !1,
          optional: !1,
          caption: A("memepad.social_providers.telegram.ai_agent_caption")
        } : {
          provider: Ne.TELEGRAM,
          isValid: !1,
          optional: !0
        }]),
        p = w(() => Object.values(Ne).filter(g => !u.value.find(N => N.provider === g))),
        d = g => u.value.push({
          provider: g,
          isValid: !1,
          optional: !0
        }),
        n = g => {
          u.value.splice(g, 1)
        };
      return Oe(() => {
        const g = u.value.every(N => N.isValid);
        E("isValid", g)
      }), (g, N) => {
        const h = qn,
          C = Le;
        return i(), I("div", Zn, [f("div", jn, [R(At, {
          name: "list-shuffle-transition"
        }, {
          default: M(() => [(i(!0), I(j, null, te(e(u), (S, P) => (i(), L(h, {
            key: S.provider,
            modelValue: _.value[S.provider],
            "onUpdate:modelValue": y => _.value[S.provider] = y,
            meta: e(t)[S.provider],
            optional: S.optional,
            caption: S.caption,
            class: "provider-input",
            onIsValid: y => S.isValid = y,
            onDelete: y => n(P)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "meta", "optional", "caption", "onIsValid", "onDelete"]))), 128))]),
          _: 1
        })]), R(vt, {
          name: "appear-from-right-transition"
        }, {
          default: M(() => [e(p).length > 0 ? (i(), I("div", Qn, [R(C, {
            name: "plus",
            class: "plus-icon"
          }), f("div", Xn, [(i(!0), I(j, null, te(e(p), S => (i(), I("div", {
            key: S,
            class: "provider"
          }, [R(C, {
            name: e(t)[S].icon,
            class: "provider-icon",
            onClick: P => d(S)
          }, null, 8, ["name", "onClick"])]))), 128))])])) : $("", !0)]),
          _: 1
        })])
      }
    }
  }), ea = B(xn, [
    ["__scopeId", "data-v-09a28ccb"]
  ]), ta = {
    class: "kit-switch"
  }, na = K({
    __name: "Switch",
    props: {
      modelValue: {
        type: Boolean
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(o) {
      const a = ae(o, "modelValue");
      return (t, _) => (i(), I("div", ta, [Ce(f("input", {
        "onUpdate:modelValue": _[0] || (_[0] = r => a.value = r),
        type: "checkbox"
      }, null, 512), [
        [gt, a.value]
      ])]))
    }
  }), aa = B(na, [
    ["__scopeId", "data-v-e0ffb56d"]
  ]), oa = "data:image/webp;base64,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", sa = {
    class: "memepad-new-form-nsfw"
  }, la = {
    class: "setting"
  }, ia = {
    class: "label"
  }, ra = K({
    __name: "NSFW",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(o) {
      const a = ae(o, "modelValue");
      return (t, _) => {
        const r = aa,
          E = Lt;
        return i(), I("div", sa, [f("div", la, [f("div", ia, V(("t" in t ? t.t : e(A))("memepad.new.step_token_info.field_nsfw.label")), 1), R(r, {
          modelValue: a.value,
          "onUpdate:modelValue": _[0] || (_[0] = u => a.value = u)
        }, null, 8, ["modelValue"])]), R(E, {
          text: ("t" in t ? t.t : e(A))("memepad.new.step_token_info.field_nsfw.message"),
          image: e(oa),
          class: "note",
          tertiary: ""
        }, null, 8, ["text", "image"])])
      }
    }
  }), ca = B(ra, [
    ["__scopeId", "data-v-82a2ab70"]
  ]), da = {
    class: "body"
  }, pa = {
    class: "result"
  }, ua = ["src"], ma = K({
    __name: "GenerateBannerSheet",
    props: {
      withAi: {
        type: Boolean
      },
      generationPrompt: {}
    },
    emits: ["close", "select"],
    setup(o, {
      expose: a,
      emit: t
    }) {
      const _ = t,
        {
          fetchBanners: r,
          generateContentSheetState: E,
          hasResult: u,
          hide: p,
          isErrorVisible: d,
          isLoadingBarVisible: n,
          isRegenerateButtonVisible: g,
          isResultVisible: N,
          onResultItemLoad: h,
          resetGenerateContentSheetState: C,
          show: S
        } = st(o.withAi),
        P = w(() => {
          if (u.value && E.value.loadStatus !== de.ERROR) return A("memepad.new.ai_agent.select_banner")
        }),
        y = async () => {
          await r(o.generationPrompt.tokenDescription)
        }, Y = l => {
          p(), _("select", l), C()
        }, W = () => {
          J().memepad.memepadJettonAiGenerationCancel({
            flowType: o.withAi ? b.AI : b.REGULAR,
            page: X.PERSONALIZE,
            stage: "image_choice"
          }), _("close"), C()
        };
      return ee(() => E.value.isSheetVisible, async l => {
        l && await r(o.generationPrompt.tokenDescription)
      }), a({
        show: S,
        hide: p
      }), (l, T) => {
        const m = ot,
          k = Rt,
          s = xe,
          c = Ae,
          v = Ze;
        return i(), L(v, {
          modelValue: e(E).isSheetVisible,
          "onUpdate:modelValue": T[0] || (T[0] = G => e(E).isSheetVisible = G),
          title: e(P),
          "no-header-line": "",
          onClose: W
        }, {
          default: M(() => [f("div", da, [e(n) ? (i(), L(m, {
            key: 0
          })) : $("", !0), Ce(f("div", pa, [(i(!0), I(j, null, te(e(E).result, (G, z) => (i(), L(k, {
            key: z,
            "banner-file-key": G.imageUrl,
            onLoad: () => e(h)(z),
            onClick: () => Y(G)
          }, null, 8, ["banner-file-key", "onLoad", "onClick"]))), 128))], 512), [
            [Je, e(N)]
          ]), e(d) ? (i(), L(s, {
            key: 1
          }, {
            header: M(() => [f("img", {
              src: ("imgResolver" in l ? l.imgResolver : e(ye))("special/big-pink-cross", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, ua)]),
            title: M(() => [qe(V(("t" in l ? l.t : e(A))("memepad.new.ai_agent.generation_failed_error")), 1)]),
            _: 1
          })) : $("", !0), e(g) ? (i(), L(c, {
            key: 2,
            "once-generated": "",
            class: "button-regenerate",
            "analytics-type": l.withAi ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in l ? l.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(b)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in l ? l.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(b)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in l ? l.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(X)).PERSONALIZE,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in l ? l.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e(_e)).FINAL_STAGE_OF_STEP,
            onClick: y
          }, null, 8, ["analytics-type", "analytics-page", "analytics-stage"])) : $("", !0)])]),
          _: 1
        }, 8, ["modelValue", "title"])
      }
    }
  }), _a = B(ma, [
    ["__scopeId", "data-v-a4472d25"]
  ]), Aa = {
    class: "memepad-new-step-personalize-token"
  }, va = {
    class: "buttons"
  }, ga = K({
    __name: "PersonalizeToken",
    props: {
      state: {},
      stepNumber: {}
    },
    emits: ["continue", "update"],
    setup(o, {
      emit: a
    }) {
      const t = o,
        _ = a,
        r = ie("banner"),
        E = ie("generate-banner-sheet"),
        u = F(!1),
        p = F(!1),
        d = F(!1),
        n = F({
          ...t.state.stepPersonalizeToken
        }),
        g = F({
          [H.BANNER]: !1
        });
      ee(n, (T, m) => {
        [
          ["bannerFileKey", H.BANNER]
        ].forEach(([s, c]) => {
          T[s] !== m[s] && g.value[c] && (J().memepad.memepadJettonGenerationContentUpdate({
            flowType: t.state.stepAiAgent.aiAgentEnable ? b.AI : b.REGULAR,
            page: X.PERSONALIZE,
            contentType: c
          }), g.value[c] = !1)
        })
      });
      const N = w(() => t.state.stepAiAgent.aiAgentEnable),
        h = w(() => t.state.stepTokenInfo.description),
        C = w(() => ({
          tokenDescription: h.value
        })),
        S = () => _("continue", n.value),
        P = () => {
          var T;
          u.value = !0, (T = E.value) == null || T.show()
        },
        y = async ({
          imageUrl: T
        }) => {
          await l(T), p.value = !0, u.value = !1
        }, Y = () => {
          u.value = !1
        }, W = T => {
          J().memepad.memepadJettonSelectJettonBanner({
            flowType: t.state.stepAiAgent.aiAgentEnable ? b.AI : b.REGULAR,
            aiPowered: !1
          }), n.value.bannerFileKey = T
        }, l = async T => {
          var k;
          const m = await lt(T);
          Z(m) ? ((k = r.value) == null || k.selectFile(m.data), J().memepad.memepadJettonSelectJettonBanner({
            flowType: t.state.stepAiAgent.aiAgentEnable ? b.AI : b.REGULAR,
            aiPowered: !1
          })) : ue().error(A("memepad.new.ai_generate.load_image_error")), g.value = {
            [H.BANNER]: !0
          }
        };
      return Oe(() => {
        _("update", n.value)
      }), (T, m) => {
        const k = Te,
          s = zn,
          c = ea,
          v = ca,
          G = Ae,
          z = me,
          q = Pe,
          Q = _a;
        return i(), I("div", Aa, [R(k, {
          "step-number": T.stepNumber,
          step: e(O).PERSONALIZE_TOKEN
        }, null, 8, ["step-number", "step"]), R(s, {
          ref: "banner",
          "model-value": e(n).bannerFileKey,
          "onUpdate:modelValue": W
        }, null, 8, ["model-value"]), R(c, {
          modelValue: e(n).socialProviders,
          "onUpdate:modelValue": m[0] || (m[0] = U => e(n).socialProviders = U),
          "telegram-required": e(N),
          onIsValid: m[1] || (m[1] = U => d.value = U)
        }, null, 8, ["modelValue", "telegram-required"]), R(v, {
          modelValue: e(n).isNSFW,
          "onUpdate:modelValue": m[2] || (m[2] = U => e(n).isNSFW = U)
        }, null, 8, ["modelValue"]), R(q, null, {
          default: M(() => [f("div", va, [R(G, {
            pending: e(u),
            "once-generated": e(p),
            "analytics-type": T.state.stepAiAgent.aiAgentEnable ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in T ? T.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(b)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in T ? T.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(b)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in T ? T.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(X)).PERSONALIZE,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in T ? T.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e(_e)).IMAGE_GENERATION,
            onClick: P
          }, null, 8, ["pending", "once-generated", "analytics-type", "analytics-page", "analytics-stage"]), R(z, {
            label: ("t" in T ? T.t : e(A))("base.continue"),
            fill: "",
            tertiary: "",
            size: e(le).LARGE,
            disabled: !e(d),
            onClick: S
          }, null, 8, ["label", "size", "disabled"])])]),
          _: 1
        }), R(Q, {
          ref: "generate-banner-sheet",
          "generation-prompt": e(C),
          "with-ai": T.state.stepAiAgent.aiAgentEnable,
          onSelect: y,
          onClose: Y
        }, null, 8, ["generation-prompt", "with-ai"])])
      }
    }
  }), Ea = B(ga, [
    ["__scopeId", "data-v-01a92ff8"]
  ]), fa = {
    class: "memepad-new-price-details"
  }, Ta = {
    class: "row"
  }, Na = {
    key: 0,
    class: "error"
  }, ba = {
    class: "label"
  }, Ia = {
    key: 1,
    class: "title"
  }, wa = {
    class: "key-wrapper"
  }, Ra = {
    class: "key"
  }, Sa = {
    key: 0,
    class: "badge"
  }, ha = {
    class: "value"
  }, ya = {
    class: "fees"
  }, Ca = {
    class: "label"
  }, ka = K({
    __name: "NewPriceDetails",
    props: {
      withShare: {
        type: Boolean
      },
      reviewInfo: {}
    },
    setup(o) {
      const a = He(() => !1, "$xfInVJFPmx");
      return (t, _) => {
        const r = Le,
          E = Kt;
        return i(), I("div", fa, [f("button", {
          type: "button",
          class: "reset header-button",
          onClick: _[0] || (_[0] = u => a.value = !e(a))
        }, [f("div", Ta, [t.reviewInfo.error ? (i(), I("div", Na, [t.reviewInfo.error.type === ("MEMEPAD_SHARE_ERRORS" in t ? t.MEMEPAD_SHARE_ERRORS : e(at)).NOT_ENOUGH_TOKEN ? (i(), L(r, {
          key: 0,
          name: "wallet",
          class: "icon icon-wallet"
        })) : (i(), L(r, {
          key: 1,
          name: "circle-warning",
          class: "icon icon-circle"
        })), f("div", ba, V(t.reviewInfo.error.message), 1)])) : (i(), I("div", Ia, V(t.reviewInfo.feesInfo.total.title), 1))]), R(r, {
          name: "arrow-caret-down-md",
          class: "icon"
        })]), e(a) ? (i(), I(j, {
          key: 0
        }, [_[1] || (_[1] = f("div", {
          class: "divider"
        }, null, -1)), (i(!0), I(j, null, te(t.reviewInfo.feesInfo.sections, u => (i(), I("div", {
          key: u.title,
          class: "row"
        }, [f("div", wa, [f("div", Ra, V(u.title), 1), u.badge ? (i(), I("div", Sa, V(u.badge.label), 1)) : $("", !0)]), f("div", ha, [u.tooltip ? (i(), L(E, we({
          key: 0,
          ref_for: !0
        }, u.tooltip.props), {
          default: M(() => [R(r, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: M(() => [f("div", ya, ["details" in u.tooltip ? (i(!0), I(j, {
            key: 0
          }, te(u.tooltip.details, p => (i(), I(j, {
            key: p.label
          }, [!p.value.isZero() || p.highlight ? (i(), I("span", {
            key: 0,
            class: be(["details", {
              highlighted: p.highlight
            }])
          }, V(p.label), 3)) : $("", !0)], 64))), 128)) : (i(), I("span", {
            key: 1,
            class: be({
              highlighted: u.tooltip.highlight
            })
          }, V(u.tooltip.label), 3))])]),
          _: 2
        }, 1040)) : $("", !0), f("span", Ca, V(u.label), 1)])]))), 128))], 64)) : $("", !0)])
      }
    }
  }), Oa = B(ka, [
    ["__scopeId", "data-v-d493d34a"]
  ]), La = {
    class: "header"
  }, Pa = {
    class: "content"
  }, Ga = {
    class: "inner"
  }, Fa = {
    class: "input-wrapper"
  }, Ua = {
    class: "subtitle"
  }, Va = {
    key: 1,
    class: "label"
  }, Ma = {
    class: "buttons"
  }, Ka = {
    class: "controls"
  }, Ba = K({
    __name: "Review",
    props: {
      state: {},
      stepNumber: {},
      balances: {},
      launchControls: {},
      launchCallback: {
        type: Function
      }
    },
    emits: ["continue", "update"],
    setup(o, {
      emit: a
    }) {
      const t = o,
        _ = a,
        r = F(t.state.stepReview.overview ? {
          status: "loaded",
          share: t.state.stepReview.share,
          overview: t.state.stepReview.overview
        } : {
          status: "loading",
          share: t.state.stepReview.share
        }),
        E = F(!1),
        u = F(),
        p = w(() => r.value.status === "loading" || E.value),
        d = w(() => {
          var l;
          return !p.value && !!((l = N.value) != null && l.error)
        }),
        n = w({
          get: () => new Ue(r.value.share).toFixed(),
          set: l => r.value.share = +Pt(l).toFixed()
        }),
        g = l => t.launchControls.getReviewInfo({
          jettonTicker: t.state.stepTokenInfo.ticker,
          share: r.value.share,
          withAiAgent: t.state.stepAiAgent.aiAgentEnable,
          overview: l
        }),
        N = w(() => r.value.status === "loaded" ? g(r.value.overview) : void 0);
      ee(() => {
        var l;
        return (l = N.value) == null ? void 0 : l.error
      }, l => {
        l && J().memepad.memepadJettonLaunchReviewShareInputError({
          flowType: t.state.stepAiAgent.aiAgentEnable ? b.AI : b.REGULAR,
          reason: l.type
        })
      });
      const h = Ve(l => J().memepad.memepadJettonLaunchReviewShareInputUpdate({
        flowType: t.state.stepAiAgent.aiAgentEnable ? b.AI : b.REGULAR,
        value: l
      }), 300).debouncedFunction;
      ee(() => r.value.share, h);
      const C = w(() => !N.value || !t.balances.tokenBalance ? !1 : t.balances.tokenBalance.value.gte(N.value.feesInfo.total.value)),
        S = ({
          tokenBalance: l,
          overview: T
        }) => {
          J().memepad.memepadLaunchJettonReviewStepMaxButtonClick();
          const m = t.launchControls.getMaxShareAmount({
            tokenBalance: l,
            overview: T
          });
          n.value = m.toFixed()
        },
        P = () => {
          var l;
          return (l = u.value) == null ? void 0 : l.focusOnInput()
        },
        y = async () => {
          var l;
          !C.value || E.value || (l = N.value) != null && l.error || (E.value = !0, await (async () => {
            const T = await (async () => {
              if (r.value.status === "loaded") return {
                share: +r.value.share,
                overview: r.value.overview
              };
              const v = await t.launchControls.getJettonOverview({
                tons: r.value.share
              });
              if (Z(v)) return {
                share: +r.value.share,
                overview: v.data
              }
            })();
            if (!T) return ue().success(A("memepad.jetton.new.error_alert"));
            const m = T,
              k = {
                step: O.REVIEW,
                stepAiAgent: t.state.stepAiAgent,
                stepTokenInfo: t.state.stepTokenInfo,
                stepPersonalizeToken: t.state.stepPersonalizeToken,
                stepReview: m
              },
              s = St(k),
              c = await t.launchCallback(s);
            Z(c) ? _("continue", c.data) : ue().success(A("memepad.jetton.new.error_alert"))
          })(), E.value = !1)
        }, Y = async () => {
          const l = r.value.share,
            T = await t.launchControls.getJettonOverview({
              tons: l
            });
          !new Ue(l).eq(r.value.share) || !Z(T) || (r.value = {
            status: "loaded",
            share: l,
            overview: T.data
          }, _("update", {
            share: l,
            overview: Z(T) ? T.data : void 0
          }))
        }, {
          debouncedFunction: W
        } = Ve(Y, 200);
      return ee(() => r.value.share, () => {
        r.value.status = "loading", W()
      }), he(() => {
        r.value.status !== "loaded" && Y()
      }), (l, T) => {
        const m = Te,
          k = fe,
          s = Gt,
          c = Xe,
          v = me,
          G = Oa,
          z = Ft,
          q = Ut,
          Q = Vt;
        return i(), L(Q, {
          class: "memepad-new-step-review"
        }, {
          top: M(() => [f("div", La, [R(m, {
            "step-number": l.stepNumber,
            step: e(O).REVIEW
          }, null, 8, ["step-number", "step"])])]),
          default: M(() => [f("div", Pa, [R(k, {
            title: ("t" in l ? l.t : e(A))("memepad.holders.list_item.your_share"),
            "is-optional": ""
          }, null, 8, ["title"]), f("div", Ga, [f("div", Fa, [R(s, {
            ref_key: "actionControlsInputComp",
            ref: u,
            modelValue: e(n),
            "onUpdate:modelValue": T[0] || (T[0] = U => ke(n) ? n.value = U : null),
            postfix: "TON",
            modifier: U => ("formatFloatLine" in l ? l.formatFloatLine : e(Et))(U, {
              join: "emptyFractional"
            }),
            onBlur: P
          }, null, 8, ["modelValue", "modifier"]), f("div", Ua, [e(N) ? (i(), I("span", Va, V(e(N).subtitle), 1)) : (i(), L(c, {
            key: 0,
            class: "skeleton"
          }))])]), f("div", Ma, [l.balances.tokenBalance && e(r).overview ? (i(), L(v, {
            key: 0,
            type: e(ce).SECONDARY,
            size: e(le).MEDIUM,
            onClick: T[1] || (T[1] = U => S({
              tokenBalance: l.balances.tokenBalance,
              overview: e(r).overview
            }))
          }, {
            default: M(() => T[2] || (T[2] = [f("div", {
              class: "label"
            }, "MAX", -1)])),
            _: 1
          }, 8, ["type", "size"])) : $("", !0)])])])]),
          "bottom-action": M(() => [f("div", Ka, [e(N) ? (i(), L(G, {
            key: 0,
            "with-share": !!e(r).share,
            "review-info": e(N)
          }, null, 8, ["with-share", "review-info"])) : (i(), L(c, {
            key: 1,
            class: "price-details-skeleton"
          })), R(q, null, {
            default: M(() => {
              var U, D, ne, re;
              return [((D = (U = e(N)) == null ? void 0 : U.error) == null ? void 0 : D.type) === e(at).NOT_ENOUGH_TOKEN ? (i(), L(z, {
                key: 0,
                details: e(N).error.details,
                source: ("ANALYTICS_MEMEPAD_OPERATION_SOURCE" in l ? l.ANALYTICS_MEMEPAD_OPERATION_SOURCE : e(Qe)).LAUNCH,
                "flow-type": l.state.stepAiAgent.aiAgentEnable ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in l ? l.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(b)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in l ? l.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(b)).REGULAR,
                "value-balance": (ne = l.balances.tokenBalance) == null ? void 0 : ne.value.toNumber(),
                "input-value": e(r).share,
                "need-more-value": (re = e(N).error.needMoreValue) == null ? void 0 : re.toNumber()
              }, null, 8, ["details", "source", "flow-type", "value-balance", "input-value", "need-more-value"])) : (i(), L(v, {
                key: 1,
                label: ("t" in l ? l.t : e(A))("memepad.new.step_review.launch_btn"),
                loading: e(p),
                disabled: e(d),
                fill: "",
                size: e(le).LARGE,
                type: e(d) ? e(ce).PRIMARY : e(ce).DROP,
                tertiary: e(d),
                onClick: y
              }, null, 8, ["label", "loading", "disabled", "size", "type", "tertiary"]))]
            }),
            _: 1
          })])]),
          _: 1
        })
      }
    }
  }), Ya = B(Ba, [
    ["__scopeId", "data-v-0ce41ec2"]
  ]), Da = {
    class: "memepad-new"
  }, $a = K({
    __name: "New",
    props: {
      withAgent: {
        type: Boolean,
        default: !1
      }
    },
    setup(o) {
      const a = o,
        t = J(),
        {
          useWalletOperationsErrorsStack: _,
          getNetworkTokenBalance: r,
          addresses: E
        } = tt(),
        {
          popRetryPayload: u
        } = Ie(),
        p = w(() => {
          var s;
          return (s = ft().getters.getUser.value) == null ? void 0 : s.referrerToken
        }),
        d = u(),
        n = F(d ? ht(d, a.withAgent) : a.withAgent ? {
          step: O.TOKEN_INFO,
          stepAiAgent: x.stepAiAgentEnabled(),
          stepTokenInfo: x.stepTokenInfo(),
          stepPersonalizeToken: x.stepPersonalizeToken(),
          stepReview: x.stepReview()
        } : {
          step: O.TOKEN_INFO,
          stepAiAgent: x.stepAiAgentDisabled(),
          stepTokenInfo: x.stepTokenInfo(),
          stepPersonalizeToken: x.stepPersonalizeToken(),
          stepReview: x.stepReview()
        }),
        g = w(() => {
          const s = [O.TOKEN_INFO, O.PERSONALIZE_TOKEN, O.REVIEW],
            c = [O.TOKEN_INFO, O.PERSONALIZE_TOKEN, O.REVIEW],
            v = a.withAgent ? s : c;
          return {
            stepNumber: v.indexOf(n.value.step) + 1,
            countSteps: v.length
          }
        }),
        N = w(() => ({
          tokenBalance: n.value.stepTokenInfo.networkType ? r(n.value.stepTokenInfo.networkType) : void 0
        })),
        h = w(() => {
          if (!E.value) return;
          const s = n.value.stepTokenInfo.networkType;
          return Mt({
            balances: N.value,
            addresses: E.value,
            networkType: s,
            referrerToken: p.value
          })
        });
      (() => {
        d ? t.memepad.memepadJettonRetry({
          flowType: a.withAgent ? b.AI : b.REGULAR
        }) : a.withAgent ? t.memepad.memepadJettonStepAiAgent() : t.memepad.memepadJettonStepTokenInfo({
          flowType: a.withAgent ? b.AI : b.REGULAR
        })
      })();
      const S = (s, c) => {
          const v = {
            step: O.TOKEN_INFO,
            stepAiAgent: c,
            stepTokenInfo: s.stepTokenInfo,
            stepPersonalizeToken: s.stepPersonalizeToken,
            stepReview: s.stepReview
          };
          n.value = v, t.memepad.memepadJettonStepTokenInfo({
            flowType: a.withAgent ? b.AI : b.REGULAR
          })
        },
        P = (s, c) => {
          const v = {
            step: O.PERSONALIZE_TOKEN,
            stepAiAgent: s.stepAiAgent,
            stepTokenInfo: c,
            stepPersonalizeToken: s.stepPersonalizeToken,
            stepReview: s.stepReview
          };
          n.value = v, t.memepad.memepadJettonStepPersonaliseToken({
            flowType: s.stepAiAgent.aiAgentEnable ? b.AI : b.REGULAR
          })
        },
        y = (s, c) => {
          const v = {
            step: O.REVIEW,
            stepAiAgent: s.stepAiAgent,
            stepTokenInfo: s.stepTokenInfo,
            stepPersonalizeToken: c,
            stepReview: s.stepReview
          };
          n.value = v, t.memepad.memepadJettonStepReview({
            flowType: a.withAgent ? b.AI : b.REGULAR
          })
        },
        Y = async s => {
          await Nt(100), await ve().push({
            name: "memepad-new-launching-id",
            params: {
              id: s.queryId
            }
          })
        }, W = (s, c) => {
          n.value = {
            ...s,
            stepReview: c
          }
        }, l = (s, c) => {
          n.value = {
            ...s,
            stepPersonalizeToken: c
          }
        };
      Tt().initHandler(() => {
        var c;
        const s = n.value;
        switch (s.step) {
          case O.AI_AGENT:
            ve().push({
              name: "memepad-new"
            });
            break;
          case O.TOKEN_INFO:
            (c = E.value) != null && c.isAvailableAI ? ve().push({
              name: "memepad-new"
            }) : ve().push({
              name: "memepad"
            });
            break;
          case O.PERSONALIZE_TOKEN:
            n.value = {
              ...s,
              step: O.TOKEN_INFO
            };
            break;
          case O.REVIEW:
            n.value = {
              ...s,
              step: O.PERSONALIZE_TOKEN
            };
            break;
          default:
            throw Ye("Invalid step")
        }
      }, "memepad-new");
      const {
        addErrorToStackAndCheck: T
      } = _(), {
        runLaunchStatusFetchingInBackground: m
      } = Ie(), k = s => async c => {
        const v = await s.createJetton({
          form: c
        });
        return Z(v) ? (m({
          payload: c,
          data: v.data,
          getWaitForCreateStatus: s.getWaitForCreateStatus
        }), je(v.data)) : (t.memepad.memepadJettonLaunchWalletUiError({
          flowType: n.value.stepAiAgent.aiAgentEnable ? b.AI : b.REGULAR,
          reason: v.extra && v.extra instanceof Error && v.extra instanceof bt ? "ton_connect_ui_error" : "other"
        }), T({
          name: c.name,
          ticker: c.ticker,
          promptId: c.promptId,
          description: c.description,
          iconFileKey: c.iconFileKey,
          socialProviders: c.socialProviders,
          bannerFileKey: c.bannerFileKey,
          isNSFW: c.isNSFW,
          networkType: c.networkType,
          share: c.share
        }, {
          source: Qe.LAUNCH,
          flowType: n.value.stepAiAgent.aiAgentEnable ? b.AI : b.REGULAR
        }), v)
      };
      return (s, c) => {
        const v = Dt,
          G = ln,
          z = Mn,
          q = It,
          Q = Ea,
          U = Ya;
        return i(), I("div", Da, [R(v, {
          step: e(g).stepNumber,
          "count-steps": e(g).countSteps
        }, null, 8, ["step", "count-steps"]), e(n).step === e(O).AI_AGENT ? (i(), L(G, {
          key: 0,
          "step-number": e(g).stepNumber,
          state: e(n),
          onContinue: c[0] || (c[0] = D => S(e(n), D))
        }, null, 8, ["step-number", "state"])) : e(n).step === e(O).TOKEN_INFO ? (i(), L(z, {
          key: 1,
          "step-number": e(g).stepNumber,
          state: e(n),
          onContinue: c[1] || (c[1] = D => P(e(n), D))
        }, null, 8, ["step-number", "state"])) : e(h) ? e(n).step === e(O).PERSONALIZE_TOKEN ? (i(), L(Q, {
          key: 3,
          state: e(n),
          "step-number": e(g).stepNumber,
          onUpdate: c[2] || (c[2] = D => l(e(n), D)),
          onContinue: c[3] || (c[3] = D => y(e(n), D))
        }, null, 8, ["state", "step-number"])) : e(n).step === e(O).REVIEW ? (i(), L(U, {
          key: 4,
          state: e(n),
          "step-number": e(g).stepNumber,
          balances: e(N),
          "launch-controls": e(h),
          "launch-callback": k(e(h)),
          onContinue: c[4] || (c[4] = D => Y(D)),
          onUpdate: c[5] || (c[5] = D => W(e(n), D))
        }, null, 8, ["state", "step-number", "balances", "launch-controls", "launch-callback"])) : $("", !0) : (i(), L(q, {
          key: 2
        }))])
      }
    }
  }), ao = B($a, [
    ["__scopeId", "data-v-42137974"]
  ]);
export {
  ao as _
};