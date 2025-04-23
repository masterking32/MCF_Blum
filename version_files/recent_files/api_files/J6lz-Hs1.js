import {
  d as U,
  o as d,
  c as b,
  a as f,
  aP as ue,
  f as V,
  j as h,
  a4 as ye,
  C as A,
  t as K,
  e,
  ay as le,
  aI as it,
  az as ne,
  V as x,
  ag as rt,
  G as B,
  w as Te,
  c0 as ct,
  p as Ne,
  n as fe,
  bv as oe,
  b as w,
  F as j,
  q as te,
  N as L,
  B as ce,
  Y as ie,
  a9 as J,
  x as me,
  al as Fe,
  y as F,
  bk as we,
  ac as Ce,
  aq as Se,
  D as Y,
  bl as I,
  c1 as X,
  c2 as _e,
  a5 as ge,
  ab as Z,
  a8 as pe,
  A as re,
  b6 as De,
  c3 as Re,
  b1 as $e,
  c4 as We,
  c5 as se,
  c6 as dt,
  b2 as ze,
  aS as ut,
  bE as pt,
  O as mt,
  X as ke,
  bd as He,
  bF as Je,
  m as qe,
  Z as Ze,
  aN as Me,
  a6 as je,
  c7 as H,
  c8 as _t,
  c9 as vt,
  ca as At,
  b$ as Oe,
  aJ as gt,
  _ as Le,
  bq as he,
  bb as Et,
  an as ft,
  cb as Tt,
  a2 as Ue,
  am as Nt,
  bC as Qe,
  H as Ve,
  k as bt,
  U as It,
  ae as Ae,
  bD as ht,
  cc as wt
} from "./C8Db5TeO.js";
import {
  M as O,
  g as St,
  _ as Rt,
  a as yt,
  r as Ct,
  b as ee
} from "./96YLpMDA.js";
import {
  _ as be
} from "./D0cSnlRq.js";
import {
  _ as xe
} from "./DpJe3PZ1.js";
import {
  i as kt,
  a as Ot,
  b as Lt,
  _ as Xe,
  F as Ee,
  c as et
} from "./CND8u9hh.js";
import {
  u as tt
} from "./C86C4SjP.js";
import {
  _ as Pe
} from "./D0Q_M9gJ.js";
import {
  K as nt
} from "./Bag8CHPQ.js";
import {
  _ as Pt
} from "./Cu_G5LVe.js";
import {
  _ as Gt
} from "./CXC-mLiN.js";
import {
  f as Ft,
  b as Mt,
  _ as Ut,
  a as Vt,
  c as Kt,
  d as Yt
} from "./2siAeN87.js";
import {
  _ as Bt
} from "./BnIMAW9o.js";
import {
  b as at
} from "./Ct0-pT7_.js";
const Dt = {
    class: "memepad-new-progress"
  },
  $t = U({
    __name: "NewProgress",
    props: {
      step: {},
      countSteps: {}
    },
    setup(l) {
      return (n, t) => (d(), b("div", Dt, [f("div", {
        class: "track",
        style: ue({
          width: `${n.step/n.countSteps*100}%`
        })
      }, null, 4)]))
    }
  }),
  Wt = V($t, [
    ["__scopeId", "data-v-d5a07e30"]
  ]),
  zt = {
    class: "memepad-new-step-heading"
  },
  Ht = {
    class: "step"
  },
  Jt = {
    class: "label"
  },
  qt = U({
    __name: "NewStepHeading",
    props: {
      stepNumber: {},
      step: {}
    },
    setup(l) {
      const n = l,
        t = h(() => {
          switch (n.step) {
            case O.AI_AGENT:
              return A("memepad.new.step_ai_agent.title");
            case O.REVIEW:
              return A("memepad.new.step_review.title");
            case O.PERSONALIZE_TOKEN:
              return A("memepad.new.step_personalize_token.title");
            case O.TOKEN_INFO:
              return A("memepad.new.step_token_info.title");
            default:
              throw n.step, ye("Invalid step")
          }
        });
      return (p, c) => (d(), b("div", zt, [f("div", Ht, K(p.stepNumber), 1), f("div", Jt, K(e(t)), 1)]))
    }
  }),
  Ie = V(qt, [
    ["__scopeId", "data-v-224a616e"]
  ]),
  Zt = {
    class: "overlays"
  },
  jt = ["max"],
  Qt = U({
    __name: "Range",
    props: le({
      min: {},
      max: {},
      pointerSize: {
        default: 16
      },
      color: {
        default: "#fff"
      },
      scale: {},
      step: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(l) {
      it(s => ({
        "6b93b9a5": s.color,
        "320b7ca0": s.pointerSize
      }));
      const n = l,
        t = ne(l, "modelValue"),
        p = h(() => {
          if (n.scale === "linear") {
            const s = [];
            for (let o = n.min; o <= n.max; o += n.step) s.push(o);
            return s
          } else if (n.scale === "log") {
            const s = [],
              o = Math.log10(n.min),
              r = Math.log10(n.max),
              a = Math.ceil(Math.log10(n.max / n.min) * 10 * 30);
            for (let _ = 0; _ <= a; _++) {
              const N = Math.pow(10, o + (r - o) * _ / a);
              s.push(Math.round(N))
            }
            return [...new Set(s)]
          } else if (n.scale === "points") {
            const s = [];
            for (let o = n.min; o <= n.max; o++)(o <= 10 || o <= 100 && o % 2 === 0 || o <= 1e3 && o % 10 === 0 || o <= 1e4 && o % 100 === 0 || o % 1e3 === 0) && s.push(o);
            return s
          } else throw ye("Invalid scale")
        });
      x(t, s => {
        const o = p.value.reduce((a, _) => Math.abs(_ - s) < Math.abs(a - s) ? _ : a, p.value[0]),
          r = p.value.indexOf(o);
        t.value = p.value[r]
      }, {
        immediate: !0
      });
      const c = h({
          get: () => p.value.indexOf(t.value),
          set: s => t.value = p.value[s]
        }),
        E = h(() => {
          const s = n.pointerSize,
            o = c.value / (p.value.length - 1),
            r = (1 - o) * s - s / 2;
          return `calc(${o*100}% + ${r}px)`
        });
      return (s, o) => (d(), b("div", {
        class: fe(["kit-range", {
          "has-tooltip": s.$slots.tooltip
        }])
      }, [f("div", Zt, [f("div", {
        class: "filled",
        style: ue({
          width: e(E)
        })
      }, null, 4), s.$slots.tooltip ? (d(), b("div", {
        key: 0,
        class: "tooltip",
        style: ue({
          left: e(E)
        })
      }, [rt(s.$slots, "tooltip", {}, void 0, !0)], 4)) : B("", !0)]), Te(f("input", {
        "onUpdate:modelValue": o[0] || (o[0] = r => Ne(c) ? c.value = r : null),
        type: "range",
        min: 0,
        max: e(p).length - 1,
        step: 1
      }, null, 8, jt), [
        [ct, e(c)]
      ])], 2))
    }
  }),
  xt = V(Qt, [
    ["__scopeId", "data-v-e6d2338a"]
  ]),
  Xt = {
    class: "inner"
  },
  en = {
    class: "label"
  },
  tn = {
    key: 1,
    class: "range-wrapper"
  },
  nn = U({
    __name: "Traits",
    props: le({
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
    setup(l) {
      const n = ne(l, "modelValue"),
        t = l,
        p = h(() => {
          const c = Object.entries(n.value),
            E = {
              [oe.MEMEPAD_AI_AGENT_TRAITS.SAD]: A("memepad.new.step_ai_agent.traits.sad_label"),
              [oe.MEMEPAD_AI_AGENT_TRAITS.CHEEKY]: A("memepad.new.step_ai_agent.traits.cheeky_label"),
              [oe.MEMEPAD_AI_AGENT_TRAITS.KIND]: A("memepad.new.step_ai_agent.traits.kind_label")
            };
          return c.map(([s, o]) => ({
            key: s,
            label: t.pending ? E[s] : `${E[s]} ${o}%`,
            value: h({
              get() {
                return n.value[s]
              },
              set(r) {
                n.value[s] = r
              }
            })
          }))
        });
      return (c, E) => {
        const s = be,
          o = xe,
          r = xt;
        return d(), b("div", {
          class: fe(["memepad-new-form-traits", {
            "is-loading": c.pending
          }])
        }, [w(s, {
          title: ("t" in c ? c.t : e(A))("memepad.new.step_ai_agent.traits.field_title")
        }, null, 8, ["title"]), f("div", Xt, [(d(!0), b(j, null, te(e(p), a => (d(), b("div", {
          key: a.key,
          class: "item"
        }, [f("div", en, K(a.label), 1), c.pending ? (d(), L(o, {
          key: 0,
          class: "skeleton"
        })) : (d(), b("div", tn, [w(r, {
          modelValue: a.value.value,
          "onUpdate:modelValue": _ => a.value.value = _,
          scale: "linear",
          min: 0,
          step: 1,
          max: 100
        }, null, 8, ["modelValue", "onUpdate:modelValue"])]))]))), 128))])], 2)
      }
    }
  }),
  an = V(nn, [
    ["__scopeId", "data-v-b0a6b734"]
  ]),
  on = U({
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
    setup(l, {
      emit: n
    }) {
      const t = n,
        {
          addresses: p
        } = tt(),
        c = h(() => {
          var o;
          return !!((o = p.value) != null && o.isAvailableAI)
        }),
        E = h(() => {
          const o = l.onceGenerated ? A("memepad.new.ai_agent.generate_again_btn") : A("memepad.new.ai_agent.generate_btn"),
            r = l.onceGenerated ? ce.GREYSTARS : ce.GREENSTARS;
          return {
            label: o,
            type: r
          }
        }),
        s = () => {
          l.onceGenerated ? J().memepad.memepadJettonAiGenerateAgainButtonClick({
            flowType: l.analyticsType,
            page: l.analyticsPage,
            stage: l.analyticsStage
          }) : J().memepad.memepadJettonAiGenerateButtonClick({
            flowType: l.analyticsType,
            page: l.analyticsPage
          }), t("click")
        };
      return (o, r) => {
        const a = me;
        return e(c) ? (d(), L(a, {
          key: 0,
          label: e(E).label,
          size: e(ie).LARGE,
          type: e(E).type,
          loading: o.pending,
          onClick: s
        }, null, 8, ["label", "size", "type", "loading"])) : B("", !0)
      }
    }
  }),
  ve = V(on, [
    ["__scopeId", "data-v-cd79f34a"]
  ]),
  sn = {
    required: l => {
      if (!l) return A("form.rules.required")
    },
    maxLength: (l, {
      maxLength: n
    }) => {
      const t = n - l.length;
      if (t < 0) return A("form.rules.max_length", {
        overCount: String(t * -1)
      })
    },
    isUrl: (l, n) => {
      const t = A("form.rules.is_url"),
        p = n != null && n.prefix ? `${n==null?void 0:n.prefix}${l}` : l;
      if (!kt(p)) return t
    },
    isEmail: l => {
      if (!Ot(l)) return A("form.rules.is_email")
    }
  },
  ln = l => ({
    modelValue: l.value,
    "onUpdate:modelValue": n => {
      l.onUpdate(n)
    }
  }),
  rn = l => ({
    modelValue: l.value,
    "onUpdate:modelValue": n => {
      l.onUpdate(n)
    },
    errorCaption: l.error,
    isError: !!l.error
  }),
  cn = l => {
    const n = Fe({
        ...l.defaultValues
      }),
      t = F({}),
      p = Fe({}),
      c = (_ = Object.keys(l.validationSchema)) => {
        const N = R => {
          const C = l.validationSchema[R];
          C && (t.value[R] = C(n[R], n)), p[R] = !0
        };
        for (const R of _) N(R)
      },
      E = (_, N) => {
        const R = h(() => t.value[_]),
          C = h({
            get: () => n[_],
            set: P => {
              n[_] = P, p[_] && c([_])
            }
          }),
          S = h(() => N({
            value: C.value,
            error: R.value,
            onUpdate: P => {
              C.value = P
            }
          }));
        return {
          error: R,
          value: C,
          binds: S
        }
      },
      s = (_, N) => {
        n[_] = N
      },
      o = h(() => {
        for (const _ in l.validationSchema) {
          const N = l.validationSchema[_];
          if (N && N(n[_], n)) return !1
        }
        return !0
      }),
      r = h(() => Object.values(t.value).every(_ => !_));
    return {
      errors: t,
      values: n,
      getField: E,
      isLazyValid: r,
      isValid: o,
      handleSubmit: _ => () => {
        c(), o.value && _(n)
      },
      setValue: s
    }
  },
  dn = {
    class: "memepad-new-step-ai-agent"
  },
  un = {
    class: "buttons"
  },
  Ke = 135,
  pn = U({
    __name: "AiAgent",
    props: {
      state: {},
      stepNumber: {}
    },
    emits: ["continue"],
    setup(l, {
      emit: n
    }) {
      const t = l,
        p = n,
        {
          isAiAgentPayloadOnceGenerated: c
        } = we(),
        E = h(() => t.state.stepAiAgent),
        {
          getField: s,
          isLazyValid: o,
          handleSubmit: r,
          setValue: a
        } = cn({
          validationSchema: {
            traits: () => {},
            prompt: y => y ? sn.maxLength(y, {
              maxLength: Ke
            }) : void 0
          },
          defaultValues: {
            traits: E.value.aiAgentSettings.traits,
            prompt: E.value.aiAgentSettings.prompt ?? ""
          }
        }),
        _ = s("traits", ln),
        N = s("prompt", rn),
        R = h(() => o.value),
        C = r(y => {
          p("continue", {
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
            if (!Z(y)) return pe().error(A("memepad.new.step_ai_agent.generation_failed_alert"));
            a("traits", y.data.settings.traits), a("prompt", y.data.settings.prompt)
          })(), S.value = !1)
        };
      return Ce(() => {
        c.value || (P(), c.value = !0)
      }), (y, D) => {
        const W = Ie,
          u = an,
          T = Lt,
          v = ve,
          k = me,
          i = Pe;
        return d(), b("div", dn, [w(W, {
          "step-number": y.stepNumber,
          step: e(O).AI_AGENT
        }, null, 8, ["step-number", "step"]), w(u, Se(e(_).binds.value, {
          pending: e(S)
        }), null, 16, ["pending"]), w(T, Se(e(N).binds.value, {
          "max-length": Ke,
          "is-optional": "",
          loading: e(S),
          label: ("t" in y ? y.t : e(A))("memepad.new.step_ai_agent.field_prompt.label"),
          placeholder: ("t" in y ? y.t : e(A))("memepad.new.step_ai_agent.field_prompt.placeholder")
        }), null, 16, ["loading", "label", "placeholder"]), w(i, null, {
          default: Y(() => [f("div", un, [w(v, {
            "once-generated": "",
            pending: e(S),
            "analytics-type": ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in y ? y.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in y ? y.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(X)).AI,
            "analytics-stage": e(_e).IMAGE_GENERATION,
            onClick: P
          }, null, 8, ["pending", "analytics-type", "analytics-page", "analytics-stage"]), w(k, {
            label: ("t" in y ? y.t : e(A))("base.continue"),
            fill: "",
            tertiary: "",
            disabled: !e(R) || e(S),
            size: e(ie).LARGE,
            onClick: e(C)
          }, null, 8, ["label", "disabled", "size", "onClick"])])]),
          _: 1
        })])
      }
    }
  }),
  mn = V(pn, [
    ["__scopeId", "data-v-100d9e8b"]
  ]),
  _n = {
    class: "memepad-new-form-avatar"
  },
  vn = {
    class: "compose"
  },
  An = {
    key: 1,
    src: dt,
    alt: "Plus icon"
  },
  gn = {
    class: "content"
  },
  En = {
    class: "name"
  },
  fn = {
    class: "disclaimer"
  },
  Ye = 10,
  Tn = U({
    __name: "Avatar",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(l, {
      expose: n
    }) {
      const t = ne(l, "modelValue"),
        p = re("file-uploader"),
        c = () => {
          var r;
          return (r = p.value) == null ? void 0 : r.triggerFileUpload()
        },
        E = F(),
        s = h(() => {
          if (t.value) return De(t.value)
        });
      return n({
        selectFile: r => {
          var a;
          (a = p.value) == null || a.onFileSelected(r)
        }
      }), (r, a) => {
        var R;
        const _ = ze,
          N = nt;
        return d(), b("div", _n, [f("div", vn, [e(s) ? (d(), b("div", {
          key: 0,
          class: "image is-uploaded",
          style: ue({
            backgroundImage: `url(${e(s)})`
          })
        }, null, 4)) : (d(), b("div", {
          key: 1,
          class: "image wait-upload",
          onClick: a[0] || (a[0] = C => c())
        }, [((R = e(E)) == null ? void 0 : R.status) === e(Re).UPLOADING ? (d(), L(_, {
          key: 0,
          type: e($e).LIGHT,
          size: 16
        }, null, 8, ["type"])) : (d(), b("img", An))])), f("div", gn, [f("div", En, K(("t" in r ? r.t : e(A))("memepad.new.step_token_info.field_icon.label")), 1), f("div", fn, K(("t" in r ? r.t : e(A))("memepad.new.step_token_info.field_icon.description", {
          maxUploadSize: String(Ye)
        })), 1)]), t.value ? (d(), b("div", {
          key: 2,
          class: "delete",
          onClick: a[1] || (a[1] = C => t.value = void 0)
        }, a[4] || (a[4] = [f("img", {
          src: We,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))) : B("", !0)]), w(N, {
          ref: "file-uploader",
          "hide-ui": "",
          "max-file-size-mb": Ye,
          accept: [e(se).JPEG, e(se).PNG, e(se).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 1,
            borderRadius: 999
          },
          "onUpdate:progress": a[2] || (a[2] = C => E.value = C),
          onUploaded: a[3] || (a[3] = C => t.value = C.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  Nn = V(Tn, [
    ["__scopeId", "data-v-f7a6c9a9"]
  ]),
  bn = {
    class: "loader"
  },
  In = {
    class: "description"
  },
  hn = 3e3,
  wn = U({
    __name: "GenerateContentLoader",
    setup(l) {
      let n;
      const t = h(() => [A("memepad.new.ai_agent.generate_loader_description.1"), A("memepad.new.ai_agent.generate_loader_description.2"), A("memepad.new.ai_agent.generate_loader_description.3"), A("memepad.new.ai_agent.generate_loader_description.4"), A("memepad.new.ai_agent.generate_loader_description.5"), A("memepad.new.ai_agent.generate_loader_description.6"), A("memepad.new.ai_agent.generate_loader_description.7"), A("memepad.new.ai_agent.generate_loader_description.8"), A("memepad.new.ai_agent.generate_loader_description.9"), A("memepad.new.ai_agent.generate_loader_description.10"), A("memepad.new.ai_agent.generate_loader_description.11"), A("memepad.new.ai_agent.generate_loader_description.12"), A("memepad.new.ai_agent.generate_loader_description.13"), A("memepad.new.ai_agent.generate_loader_description.14"), A("memepad.new.ai_agent.generate_loader_description.15"), A("memepad.new.ai_agent.generate_loader_description.16"), A("memepad.new.ai_agent.generate_loader_description.17"), A("memepad.new.ai_agent.generate_loader_description.18")]),
        p = F(t.value[0]),
        c = () => {
          p.value = t.value[Math.floor(Math.random() * t.value.length)]
        };
      return Ce(() => {
        n = ut(c, hn)
      }), pt(() => {
        clearInterval(n)
      }), (E, s) => {
        const o = mt;
        return d(), b("div", bn, [w(o, {
          name: "animations/other/stars_sparkle_grey",
          height: "262px",
          "z-index": "1"
        }), f("div", In, K(e(p)), 1)])
      }
    }
  }),
  ot = V(wn, [
    ["__scopeId", "data-v-d75545b6"]
  ]),
  Sn = {
    class: "menu"
  },
  Rn = ["onClick"],
  yn = {
    class: "item-image"
  },
  Cn = ["src"],
  kn = {
    class: "item-name"
  },
  On = {
    class: "item-arrow"
  },
  Ln = ["src"],
  Pn = U({
    __name: "Menu",
    props: {
      items: {}
    },
    setup(l) {
      return (n, t) => (d(), b("ul", Sn, [(d(!0), b(j, null, te(n.items, ({
        name: p,
        imageUrl: c,
        onClick: E
      }, s) => (d(), b("li", {
        key: s,
        class: "menu-item",
        onClick: E
      }, [f("div", yn, [f("img", {
        src: c,
        alt: ""
      }, null, 8, Cn)]), f("div", kn, K(p), 1), f("div", On, [f("img", {
        src: ("imgResolver" in n ? n.imgResolver : e(ke))("menu-arrow-right", "svg"),
        alt: ""
      }, null, 8, Ln)])], 8, Rn))), 128))]))
    }
  }),
  Gn = V(Pn, [
    ["__scopeId", "data-v-e6475410"]
  ]);
var de = (l => (l.ERROR = "ERROR", l.LOADING = "LOADING", l.LOADED = "LOADED", l))(de || {});
const st = l => {
    let n = new AbortController;
    const t = He("aiGeneratedMemepadContent", () => ({
        loadStatus: "LOADED",
        categories: [],
        selectedCategory: null,
        promptId: null,
        info: null,
        result: [],
        isSheetVisible: !1
      })),
      p = h(() => t.value.result.length > 0 && t.value.loadStatus === "LOADED"),
      c = h(() => t.value.loadStatus === "LOADING"),
      E = h(() => t.value.loadStatus === "ERROR"),
      s = h(() => p.value),
      o = h(() => !p.value && t.value.loadStatus !== "ERROR"),
      r = h(() => p.value),
      a = h(() => t.value.result.every(({
        isLoaded: i
      }) => i)),
      _ = h(() => p.value || t.value.loadStatus === "ERROR"),
      N = h(() => t.value.categories.map(i => ({
        ...i,
        onClick: async () => {
          J().memepad.memepadJettonAiGeneratedCategorySelect({
            flowType: l ? I.AI : I.REGULAR,
            categoryName: i.name
          }), t.value.selectedCategory = i, await P()
        }
      }))),
      R = async () => {
        if (n.signal.aborted || t.value.categories.length > 0) return;
        t.value.loadStatus = "LOADING", t.value.categories = [];
        const i = await ge.getMemepadAiContentCategories({
          abortSignal: n.signal
        });
        if (!Z(i)) {
          t.value.loadStatus = n.signal.aborted ? "LOADED" : "ERROR";
          return
        }
        t.value.categories = i.data.categories.map(({
          description: m,
          imageUrl: g,
          name: G
        }) => ({
          description: m,
          imageUrl: g,
          name: G
        })), t.value.loadStatus = "LOADED"
      }, C = async () => {
        if (n.signal.aborted) return;
        if (t.value.selectedCategory === null) {
          t.value.loadStatus = "ERROR";
          return
        }
        t.value.loadStatus = "LOADING", t.value.promptId = null, t.value.info = null;
        const i = await ge.generateMemepadAiContent({
          payload: {
            category: t.value.selectedCategory.name,
            topic: t.value.selectedCategory.description
          },
          abortSignal: n.signal
        });
        if (!Z(i)) {
          t.value.loadStatus = n.signal.aborted ? "LOADED" : "ERROR";
          return
        }
        t.value.promptId = i.data.promptId, t.value.info = {
          name: i.data.name,
          ticker: i.data.ticker,
          description: i.data.description
        }, t.value.loadStatus = "LOADED"
      }, S = async (i, m) => {
        const g = t.value.result.length > 0 && i !== oe.MEMEPAD_AI_IMAGE_TYPE.ICON,
          G = {
            type: i,
            prompt: m
          };
        !g && t.value.promptId !== null && (G.promptId = t.value.promptId), t.value.loadStatus = "LOADING", t.value.result = [];
        const z = await ge.generateMemepadAiImages({
          payload: G,
          abortSignal: n.signal
        });
        if (!Z(z)) {
          t.value.loadStatus = n.signal.aborted ? "LOADED" : "ERROR";
          return
        }
        t.value.result = z.data.images.map(q => ({
          imageUrl: q,
          isLoaded: !1
        }))
      }, P = async () => {
        if (await C(), !n.signal.aborted) {
          if (t.value.selectedCategory === null || t.value.info === null) {
            t.value.loadStatus = "ERROR";
            return
          }
          await S(oe.MEMEPAD_AI_IMAGE_TYPE.ICON, t.value.info.description)
        }
      }, y = async i => {
        n.signal.aborted || await S(oe.MEMEPAD_AI_IMAGE_TYPE.BANNER, i)
      }, D = () => {
        t.value.isSheetVisible = !0
      }, W = () => {
        t.value.isSheetVisible = !1
      }, u = () => {
        n.abort(), setTimeout(() => {
          n = new AbortController
        })
      };
    return {
      categoryMenuItems: N,
      fetchBanners: y,
      fetchCategoriesOnce: R,
      fetchIcons: P,
      generateContentSheetState: t,
      hasResult: p,
      hide: W,
      isBackIconVisible: s,
      isErrorVisible: E,
      isLoadingBarVisible: c,
      isMenuVisible: o,
      isRegenerateButtonVisible: _,
      isResultVisible: r,
      onResultItemLoad: i => {
        var m;
        ((m = t.value.result) == null ? void 0 : m[i]) !== void 0 && (t.value.result[i].isLoaded = !0, a.value && (t.value.loadStatus = "LOADED"))
      },
      resetGenerateContentSheetResultState: () => {
        u(), t.value.loadStatus = "LOADED", t.value.selectedCategory = null, t.value.info = null, t.value.result = []
      },
      resetGenerateContentSheetState: () => {
        u(), t.value.loadStatus = "LOADED", t.value.categories = [], t.value.selectedCategory = null, t.value.info = null, t.value.result = []
      },
      show: D
    }
  },
  Fn = {
    class: "body"
  },
  Mn = {
    class: "result"
  },
  Un = ["src", "onClick", "onLoad"],
  Vn = ["src"],
  Kn = U({
    __name: "GenerateIconSheet",
    props: {
      withAi: {
        type: Boolean
      }
    },
    emits: ["back", "close", "select", "generate-prompt-id"],
    setup(l, {
      expose: n,
      emit: t
    }) {
      const p = t,
        {
          categoryMenuItems: c,
          fetchCategoriesOnce: E,
          fetchIcons: s,
          generateContentSheetState: o,
          hasResult: r,
          hide: a,
          isBackIconVisible: _,
          isErrorVisible: N,
          isLoadingBarVisible: R,
          isMenuVisible: C,
          isRegenerateButtonVisible: S,
          isResultVisible: P,
          onResultItemLoad: y,
          resetGenerateContentSheetResultState: D,
          resetGenerateContentSheetState: W,
          show: u
        } = st(l.withAi),
        T = h(() => {
          if (!r.value && o.value.loadStatus !== de.ERROR) return A("memepad.new.ai_agent.select_model");
          if (r.value && o.value.loadStatus !== de.ERROR) return A("memepad.new.ai_agent.select_icon")
        }),
        v = async () => {
          o.value.loadStatus === de.ERROR && await E(), await s()
        }, k = g => {
          o.value.info !== null && (a(), p("select", {
            ...o.value.info,
            ...g
          }), W())
        }, i = () => {
          p("back"), D()
        }, m = () => {
          if (R.value) {
            const G = (() => {
              switch (!0) {
                case !c.value.length:
                  return "category_choice";
                case !o.value.info:
                  return "data_loading";
                case !o.value.result.length:
                  return "image_choice"
              }
            })();
            G && J().memepad.memepadJettonAiGenerationCancel({
              flowType: l.withAi ? I.AI : I.REGULAR,
              page: X.TOKEN_INFO,
              stage: G
            })
          }
          p("close"), D()
        };
      return x(() => o.value.isSheetVisible, async g => {
        g && await E()
      }), n({
        show: u,
        hide: a
      }), x(() => o.value.promptId, g => {
        g && p("generate-prompt-id", g)
      }), (g, G) => {
        const z = ot,
          q = Gn,
          Q = Xe,
          M = ve,
          $ = Ze;
        return d(), L($, {
          modelValue: e(o).isSheetVisible,
          "onUpdate:modelValue": G[0] || (G[0] = ae => e(o).isSheetVisible = ae),
          title: e(T),
          "back-icon": e(_),
          "no-header-line": "",
          onBack: i,
          onClose: m
        }, {
          default: Y(() => [f("div", Fn, [e(R) ? (d(), L(z, {
            key: 0
          })) : B("", !0), e(C) ? (d(), L(q, {
            key: 1,
            items: e(c)
          }, null, 8, ["items"])) : B("", !0), Te(f("div", Mn, [(d(!0), b(j, null, te(e(o).result, (ae, Ge) => (d(), b("div", {
            key: Ge
          }, [f("img", {
            alt: "",
            src: ae.imageUrl,
            onClick: () => k(ae),
            onLoad: () => e(y)(Ge)
          }, null, 40, Un)]))), 128))], 512), [
            [Je, e(P)]
          ]), e(N) ? (d(), L(Q, {
            key: 2
          }, {
            header: Y(() => [f("img", {
              src: ("imgResolver" in g ? g.imgResolver : e(ke))("special/big-pink-cross", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, Vn)]),
            title: Y(() => [qe(K(("t" in g ? g.t : e(A))("memepad.new.ai_agent.generation_failed_error")), 1)]),
            _: 1
          })) : B("", !0), e(S) ? (d(), L(M, {
            key: 3,
            "once-generated": "",
            class: "button-regenerate",
            "analytics-type": g.withAi ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in g ? g.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in g ? g.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in g ? g.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(X)).TOKEN_INFO,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in g ? g.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e(_e)).FINAL_STAGE_OF_STEP,
            onClick: v
          }, null, 8, ["analytics-type", "analytics-page", "analytics-stage"])) : B("", !0)])]),
          _: 1
        }, 8, ["modelValue", "title", "back-icon"])
      }
    }
  }),
  Yn = V(Kn, [
    ["__scopeId", "data-v-515b114a"]
  ]),
  lt = async l => {
    try {
      const n = await fetch(l);
      if (!n.ok) return Me("Failed to get image");
      const t = await n.arrayBuffer(),
        p = new File([t], "image.png", {
          type: "image/png"
        });
      return je(p)
    } catch {
      return Me("Failed to get image")
    }
  }, Bn = {
    class: "memepad-new-step-token-info"
  }, Dn = {
    class: "buttons"
  }, $n = U({
    __name: "TokenInfo",
    props: {
      state: {},
      stepNumber: {}
    },
    emits: ["continue"],
    setup(l, {
      emit: n
    }) {
      const t = l,
        p = n,
        c = re("avatar"),
        E = re("generate-icon-sheet"),
        s = F(!1),
        o = F(!1),
        r = F({
          ...t.state.stepTokenInfo
        }),
        a = F({
          [H.ICON]: !1,
          [H.TICKER]: !1,
          [H.NAME]: !1,
          [H.DESCRIPTION]: !1
        });
      x(r, (v, k) => {
        [
          ["name", H.NAME],
          ["iconFileKey", H.ICON],
          ["ticker", H.TICKER],
          ["description", H.DESCRIPTION]
        ].forEach(([m, g]) => {
          v[m] !== k[m] && a.value[g] && (J().memepad.memepadJettonGenerationContentUpdate({
            flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
            page: X.TOKEN_INFO,
            contentType: g
          }), a.value[g] = !1)
        })
      });
      const _ = F([{
          key: "name",
          type: Ee.STRING,
          value: h({
            get: () => r.value.name ?? "",
            set: v => r.value.name = v ?? ""
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
          value: h({
            get: () => r.value.ticker ?? "",
            set: v => r.value.ticker = v ?? ""
          }),
          props: {
            label: A("memepad.new.step_token_info.field_ticker.label"),
            placeholder: A("memepad.new.step_token_info.field_ticker.placeholder"),
            modifiers: [_t.UPPERCASE]
          },
          validators: {
            required: {},
            maxLength: {
              value: 10
            }
          },
          customValidator: v => {
            if (!v.match(/^[A-Z0-9]+$/)) return A("memepad.new.step_token_info.field_ticker.custom_validator_error")
          }
        }, {
          key: "description",
          type: Ee.TEXTAREA,
          value: h({
            get: () => r.value.description ?? "",
            set: v => r.value.description = v ?? ""
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
        R = h(() => {
          var v;
          return ((v = N.value) == null ? void 0 : v.isFormValid) && !!r.value.iconFileKey
        }),
        C = () => p("continue", r.value),
        S = () => {
          var v;
          s.value = !0, (v = E.value) == null || v.show()
        },
        P = async ({
          imageUrl: v,
          name: k,
          ticker: i,
          description: m
        }) => {
          y({
            name: k,
            ticker: i,
            description: m
          }), await W(v), a.value = {
            [H.ICON]: !0,
            [H.TICKER]: !0,
            [H.NAME]: !0,
            [H.DESCRIPTION]: !0
          }, o.value = !0, s.value = !1
        }, y = v => {
          Object.entries(v).forEach(([k, i]) => {
            const m = _.value.find(({
              key: g
            }) => g === k);
            m !== void 0 && (m.value = i)
          })
        }, D = v => {
          J().memepad.memepadJettonSelectJettonIcon({
            flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
            aiPowered: !1
          }), r.value.iconFileKey = v
        }, W = async v => {
          var i;
          const k = await lt(v);
          Z(k) ? ((i = c.value) == null || i.selectFile(k.data), J().memepad.memepadJettonSelectJettonIcon({
            flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
            aiPowered: !0
          })) : pe().error(A("memepad.new.ai_generate.load_image_error"))
        }, u = () => {
          s.value = !1
        }, T = v => {
          r.value.promptId = v
        };
      return (v, k) => {
        const i = Ie,
          m = Nn,
          g = et,
          G = ve,
          z = me,
          q = Pe,
          Q = Yn;
        return d(), b("div", Bn, [w(i, {
          "step-number": v.stepNumber,
          step: e(O).TOKEN_INFO
        }, null, 8, ["step-number", "step"]), w(m, {
          ref: "avatar",
          "model-value": e(r).iconFileKey,
          "onUpdate:modelValue": D
        }, null, 8, ["model-value"]), w(g, {
          modelValue: e(_),
          "onUpdate:modelValue": k[0] || (k[0] = M => Ne(_) ? _.value = M : null),
          onChannel: k[1] || (k[1] = M => N.value = M)
        }, null, 8, ["modelValue"]), w(q, null, {
          default: Y(() => [f("div", Dn, [w(G, {
            pending: e(s),
            "once-generated": e(o),
            "analytics-type": v.state.stepAiAgent.aiAgentEnable ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in v ? v.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in v ? v.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in v ? v.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(X)).TOKEN_INFO,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in v ? v.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e(_e)).IMAGE_GENERATION,
            onClick: S
          }, null, 8, ["pending", "once-generated", "analytics-type", "analytics-page", "analytics-stage"]), w(z, {
            label: ("t" in v ? v.t : e(A))("base.continue"),
            fill: "",
            disabled: !e(R),
            tertiary: "",
            size: e(ie).LARGE,
            onClick: C
          }, null, 8, ["label", "disabled", "size"])])]),
          _: 1
        }), w(Q, {
          ref: "generate-icon-sheet",
          "with-ai": v.state.stepAiAgent.aiAgentEnable,
          onGeneratePromptId: T,
          onSelect: P,
          onClose: u
        }, null, 8, ["with-ai"])])
      }
    }
  }), Wn = V($n, [
    ["__scopeId", "data-v-ccc0e3f9"]
  ]), zn = {
    class: "memepad-new-form-banner"
  }, Hn = {
    key: 1,
    class: "banner is-uploading"
  }, Jn = {
    class: "description"
  }, qn = {
    class: "text"
  }, Zn = {
    class: "description"
  }, Be = 10, jn = U({
    __name: "Banner",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(l, {
      expose: n
    }) {
      const t = ne(l, "modelValue"),
        p = re("file-uploader"),
        c = () => {
          var r;
          return (r = p.value) == null ? void 0 : r.triggerFileUpload()
        },
        E = F(),
        s = h(() => {
          if (E.value && E.value.status === Re.UPLOADING) return E.value.localUrl;
          if (t.value) return De(t.value)
        });
      return n({
        selectFile: r => {
          var a;
          (a = p.value) == null || a.onFileSelected(r)
        }
      }), (r, a) => {
        var C;
        const _ = be,
          N = ze,
          R = nt;
        return d(), b("div", zn, [w(_, {
          title: ("t" in r ? r.t : e(A))("memepad.new.step_token_info.field_banner.label"),
          "is-optional": "",
          class: "heading"
        }, null, 8, ["title"]), t.value ? (d(), b("div", {
          key: 0,
          class: "banner is-uploaded",
          style: ue({
            backgroundImage: `url(${e(s)})`
          })
        }, [f("div", {
          class: "delete-btn",
          onClick: a[0] || (a[0] = S => t.value = void 0)
        }, a[4] || (a[4] = [f("img", {
          src: We,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))], 4)) : ((C = e(E)) == null ? void 0 : C.status) === e(Re).UPLOADING ? (d(), b("div", Hn, [w(N, {
          type: e($e).LIGHT,
          size: 16
        }, null, 8, ["type"]), f("div", Jn, K(("t" in r ? r.t : e(A))("memepad.new.step_token_info.field_banner.uploading")), 1)])) : (d(), b("div", {
          key: 2,
          class: "banner wait-upload",
          onClick: a[1] || (a[1] = S => c())
        }, [a[6] || (a[6] = f("img", {
          src: vt,
          alt: "Add"
        }, null, -1)), f("div", qn, [f("div", Zn, K(("t" in r ? r.t : e(A))("memepad.new.step_token_info.field_banner.description", {
          maxUploadSize: String(Be)
        })), 1), a[5] || (a[5] = f("div", {
          class: "ratio"
        }, "361 × 119", -1))])])), w(R, {
          ref: "file-uploader",
          "hide-ui": "",
          "max-file-size-mb": Be,
          accept: [e(se).JPEG, e(se).PNG, e(se).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 361 / 119,
            borderRadius: 8
          },
          "onUpdate:progress": a[2] || (a[2] = S => E.value = S),
          onUploaded: a[3] || (a[3] = S => t.value = S.key)
        }, null, 8, ["accept"])])
      }
    }
  }), Qn = V(jn, [
    ["__scopeId", "data-v-e7cdbd52"]
  ]), xn = {
    class: "memepad-new-form-social-links-item"
  }, Xn = U({
    __name: "SocialLinksItem",
    props: le({
      meta: {},
      optional: {
        type: Boolean
      },
      caption: {}
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: le(["isValid", "delete"], ["update:modelValue"]),
    setup(l, {
      emit: n
    }) {
      const t = l,
        p = n,
        c = ne(l, "modelValue"),
        E = F([{
          type: Ee.STRING,
          key: t.meta.apiKey,
          value: h({
            get: () => c.value ?? "",
            set: o => c.value = o || void 0
          }),
          props: {
            placeholder: t.meta.placeholder,
            size: At.COMPACT,
            caption: t.caption
          },
          validators: t.optional ? t.meta.skipUrlValidation ? {} : {
            url: {}
          } : {
            required: {}
          }
        }]),
        s = F();
      return Oe(() => {
        var o;
        return p("isValid", ((o = s.value) == null ? void 0 : o.isFormValid) ?? !1)
      }), (o, r) => {
        const a = be,
          _ = Le,
          N = et;
        return d(), b("div", xn, [w(N, {
          modelValue: e(E),
          "onUpdate:modelValue": r[1] || (r[1] = R => Ne(E) ? E.value = R : null),
          onChannel: r[2] || (r[2] = R => s.value = R)
        }, gt({
          [`${o.meta.apiKey}-label`]: Y(() => [w(a, {
            "icon-name": o.meta.icon,
            title: o.meta.display,
            "is-optional": o.optional
          }, null, 8, ["icon-name", "title", "is-optional"])]),
          _: 2
        }, [o.optional ? {
          name: `${o.meta.apiKey}-after`,
          fn: Y(() => [f("button", {
            type: "button",
            class: "delete-button reset",
            onClick: r[0] || (r[0] = R => o.$emit("delete"))
          }, [w(_, {
            name: "trash",
            class: "icon"
          })])]),
          key: "0"
        } : void 0]), 1032, ["modelValue"])])
      }
    }
  }), ea = V(Xn, [
    ["__scopeId", "data-v-4cb1d169"]
  ]), ta = {
    class: "memepad-new-form-social-links"
  }, na = {
    class: "inputs"
  }, aa = {
    key: 0,
    class: "add-panel"
  }, oa = {
    class: "providers"
  }, sa = U({
    __name: "SocialLinks",
    props: le({
      telegramRequired: {
        type: Boolean
      }
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: le(["isValid"], ["update:modelValue"]),
    setup(l, {
      emit: n
    }) {
      const t = St(),
        p = ne(l, "modelValue"),
        c = l,
        E = n,
        s = F([c.telegramRequired ? {
          provider: he.TELEGRAM,
          isValid: !1,
          optional: !1,
          caption: A("memepad.social_providers.telegram.ai_agent_caption")
        } : {
          provider: he.TELEGRAM,
          isValid: !1,
          optional: !0
        }]),
        o = h(() => Object.values(he).filter(_ => !s.value.find(N => N.provider === _))),
        r = _ => s.value.push({
          provider: _,
          isValid: !1,
          optional: !0
        }),
        a = _ => {
          s.value.splice(_, 1)
        };
      return Oe(() => {
        const _ = s.value.every(N => N.isValid);
        E("isValid", _)
      }), (_, N) => {
        const R = ea,
          C = Le;
        return d(), b("div", ta, [f("div", na, [w(Et, {
          name: "list-shuffle-transition"
        }, {
          default: Y(() => [(d(!0), b(j, null, te(e(s), (S, P) => (d(), L(R, {
            key: S.provider,
            modelValue: p.value[S.provider],
            "onUpdate:modelValue": y => p.value[S.provider] = y,
            meta: e(t)[S.provider],
            optional: S.optional,
            caption: S.caption,
            class: "provider-input",
            onIsValid: y => S.isValid = y,
            onDelete: y => a(P)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "meta", "optional", "caption", "onIsValid", "onDelete"]))), 128))]),
          _: 1
        })]), w(ft, {
          name: "appear-from-right-transition"
        }, {
          default: Y(() => [e(o).length > 0 ? (d(), b("div", aa, [w(C, {
            name: "plus",
            class: "plus-icon"
          }), f("div", oa, [(d(!0), b(j, null, te(e(o), S => (d(), b("div", {
            key: S,
            class: "provider"
          }, [w(C, {
            name: e(t)[S].icon,
            class: "provider-icon",
            onClick: P => r(S)
          }, null, 8, ["name", "onClick"])]))), 128))])])) : B("", !0)]),
          _: 1
        })])
      }
    }
  }), la = V(sa, [
    ["__scopeId", "data-v-09a28ccb"]
  ]), ia = {
    class: "kit-switch"
  }, ra = U({
    __name: "Switch",
    props: {
      modelValue: {
        type: Boolean
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(l) {
      const n = ne(l, "modelValue");
      return (t, p) => (d(), b("div", ia, [Te(f("input", {
        "onUpdate:modelValue": p[0] || (p[0] = c => n.value = c),
        type: "checkbox"
      }, null, 512), [
        [Tt, n.value]
      ])]))
    }
  }), ca = V(ra, [
    ["__scopeId", "data-v-e0ffb56d"]
  ]), da = "data:image/webp;base64,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", ua = {
    class: "memepad-new-form-nsfw"
  }, pa = {
    class: "setting"
  }, ma = {
    class: "label"
  }, _a = U({
    __name: "NSFW",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(l) {
      const n = ne(l, "modelValue");
      return (t, p) => {
        const c = ca,
          E = Gt;
        return d(), b("div", ua, [f("div", pa, [f("div", ma, K(("t" in t ? t.t : e(A))("memepad.new.step_token_info.field_nsfw.label")), 1), w(c, {
          modelValue: n.value,
          "onUpdate:modelValue": p[0] || (p[0] = s => n.value = s)
        }, null, 8, ["modelValue"])]), w(E, {
          text: ("t" in t ? t.t : e(A))("memepad.new.step_token_info.field_nsfw.message"),
          image: e(da),
          class: "note",
          tertiary: ""
        }, null, 8, ["text", "image"])])
      }
    }
  }), va = V(_a, [
    ["__scopeId", "data-v-82a2ab70"]
  ]), Aa = {
    class: "body"
  }, ga = {
    class: "result"
  }, Ea = ["src"], fa = U({
    __name: "GenerateBannerSheet",
    props: {
      withAi: {
        type: Boolean
      },
      generationPrompt: {}
    },
    emits: ["close", "select"],
    setup(l, {
      expose: n,
      emit: t
    }) {
      const p = t,
        {
          fetchBanners: c,
          generateContentSheetState: E,
          hasResult: s,
          hide: o,
          isErrorVisible: r,
          isLoadingBarVisible: a,
          isRegenerateButtonVisible: _,
          isResultVisible: N,
          onResultItemLoad: R,
          resetGenerateContentSheetState: C,
          show: S
        } = st(l.withAi),
        P = h(() => {
          if (s.value && E.value.loadStatus !== de.ERROR) return A("memepad.new.ai_agent.select_banner")
        }),
        y = async () => {
          await c(l.generationPrompt.tokenDescription)
        }, D = u => {
          o(), p("select", u), C()
        }, W = () => {
          J().memepad.memepadJettonAiGenerationCancel({
            flowType: l.withAi ? I.AI : I.REGULAR,
            page: X.PERSONALIZE,
            stage: "image_choice"
          }), p("close"), C()
        };
      return x(() => E.value.isSheetVisible, async u => {
        u && await c(l.generationPrompt.tokenDescription)
      }), n({
        show: S,
        hide: o
      }), (u, T) => {
        const v = ot,
          k = Rt,
          i = Xe,
          m = ve,
          g = Ze;
        return d(), L(g, {
          modelValue: e(E).isSheetVisible,
          "onUpdate:modelValue": T[0] || (T[0] = G => e(E).isSheetVisible = G),
          title: e(P),
          "no-header-line": "",
          onClose: W
        }, {
          default: Y(() => [f("div", Aa, [e(a) ? (d(), L(v, {
            key: 0
          })) : B("", !0), Te(f("div", ga, [(d(!0), b(j, null, te(e(E).result, (G, z) => (d(), L(k, {
            key: z,
            "banner-file-key": G.imageUrl,
            onLoad: () => e(R)(z),
            onClick: () => D(G)
          }, null, 8, ["banner-file-key", "onLoad", "onClick"]))), 128))], 512), [
            [Je, e(N)]
          ]), e(r) ? (d(), L(i, {
            key: 1
          }, {
            header: Y(() => [f("img", {
              src: ("imgResolver" in u ? u.imgResolver : e(ke))("special/big-pink-cross", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, Ea)]),
            title: Y(() => [qe(K(("t" in u ? u.t : e(A))("memepad.new.ai_agent.generation_failed_error")), 1)]),
            _: 1
          })) : B("", !0), e(_) ? (d(), L(m, {
            key: 2,
            "once-generated": "",
            class: "button-regenerate",
            "analytics-type": u.withAi ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in u ? u.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in u ? u.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in u ? u.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(X)).PERSONALIZE,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in u ? u.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e(_e)).FINAL_STAGE_OF_STEP,
            onClick: y
          }, null, 8, ["analytics-type", "analytics-page", "analytics-stage"])) : B("", !0)])]),
          _: 1
        }, 8, ["modelValue", "title"])
      }
    }
  }), Ta = V(fa, [
    ["__scopeId", "data-v-a4472d25"]
  ]), Na = {
    class: "memepad-new-step-personalize-token"
  }, ba = {
    class: "buttons"
  }, Ia = U({
    __name: "PersonalizeToken",
    props: {
      state: {},
      stepNumber: {}
    },
    emits: ["continue", "update"],
    setup(l, {
      emit: n
    }) {
      const t = l,
        p = n,
        c = re("banner"),
        E = re("generate-banner-sheet"),
        s = F(!1),
        o = F(!1),
        r = F(!1),
        a = F({
          ...t.state.stepPersonalizeToken
        }),
        _ = F({
          [H.BANNER]: !1
        });
      x(a, (T, v) => {
        [
          ["bannerFileKey", H.BANNER]
        ].forEach(([i, m]) => {
          T[i] !== v[i] && _.value[m] && (J().memepad.memepadJettonGenerationContentUpdate({
            flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
            page: X.PERSONALIZE,
            contentType: m
          }), _.value[m] = !1)
        })
      });
      const N = h(() => t.state.stepAiAgent.aiAgentEnable),
        R = h(() => t.state.stepTokenInfo.description),
        C = h(() => ({
          tokenDescription: R.value
        })),
        S = () => p("continue", a.value),
        P = () => {
          var T;
          s.value = !0, (T = E.value) == null || T.show()
        },
        y = async ({
          imageUrl: T
        }) => {
          await u(T), o.value = !0, s.value = !1
        }, D = () => {
          s.value = !1
        }, W = T => {
          J().memepad.memepadJettonSelectJettonBanner({
            flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
            aiPowered: !1
          }), a.value.bannerFileKey = T
        }, u = async T => {
          var k;
          const v = await lt(T);
          Z(v) ? ((k = c.value) == null || k.selectFile(v.data), J().memepad.memepadJettonSelectJettonBanner({
            flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
            aiPowered: !1
          })) : pe().error(A("memepad.new.ai_generate.load_image_error")), _.value = {
            [H.BANNER]: !0
          }
        };
      return Oe(() => {
        p("update", a.value)
      }), (T, v) => {
        const k = Ie,
          i = Qn,
          m = la,
          g = va,
          G = ve,
          z = me,
          q = Pe,
          Q = Ta;
        return d(), b("div", Na, [w(k, {
          "step-number": T.stepNumber,
          step: e(O).PERSONALIZE_TOKEN
        }, null, 8, ["step-number", "step"]), w(i, {
          ref: "banner",
          "model-value": e(a).bannerFileKey,
          "onUpdate:modelValue": W
        }, null, 8, ["model-value"]), w(m, {
          modelValue: e(a).socialProviders,
          "onUpdate:modelValue": v[0] || (v[0] = M => e(a).socialProviders = M),
          "telegram-required": e(N),
          onIsValid: v[1] || (v[1] = M => r.value = M)
        }, null, 8, ["modelValue", "telegram-required"]), w(g, {
          modelValue: e(a).isNSFW,
          "onUpdate:modelValue": v[2] || (v[2] = M => e(a).isNSFW = M)
        }, null, 8, ["modelValue"]), w(q, null, {
          default: Y(() => [f("div", ba, [w(G, {
            pending: e(s),
            "once-generated": e(o),
            "analytics-type": T.state.stepAiAgent.aiAgentEnable ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in T ? T.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in T ? T.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in T ? T.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(X)).PERSONALIZE,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in T ? T.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e(_e)).IMAGE_GENERATION,
            onClick: P
          }, null, 8, ["pending", "once-generated", "analytics-type", "analytics-page", "analytics-stage"]), w(z, {
            label: ("t" in T ? T.t : e(A))("base.continue"),
            fill: "",
            tertiary: "",
            size: e(ie).LARGE,
            disabled: !e(r),
            onClick: S
          }, null, 8, ["label", "size", "disabled"])])]),
          _: 1
        }), w(Q, {
          ref: "generate-banner-sheet",
          "generation-prompt": e(C),
          "with-ai": T.state.stepAiAgent.aiAgentEnable,
          onSelect: y,
          onClose: D
        }, null, 8, ["generation-prompt", "with-ai"])])
      }
    }
  }), ha = V(Ia, [
    ["__scopeId", "data-v-01a92ff8"]
  ]), wa = {
    class: "memepad-new-price-details"
  }, Sa = {
    class: "row"
  }, Ra = {
    key: 0,
    class: "error"
  }, ya = {
    class: "label"
  }, Ca = {
    key: 1,
    class: "title"
  }, ka = {
    class: "key-wrapper"
  }, Oa = {
    class: "key"
  }, La = {
    key: 0,
    class: "badge"
  }, Pa = {
    class: "value"
  }, Ga = {
    class: "fees"
  }, Fa = {
    class: "label"
  }, Ma = U({
    __name: "NewPriceDetails",
    props: {
      withShare: {
        type: Boolean
      },
      reviewInfo: {}
    },
    setup(l) {
      const n = He(() => !1, "$xfInVJFPmx");
      return (t, p) => {
        const c = Le,
          E = Bt;
        return d(), b("div", wa, [f("button", {
          type: "button",
          class: "reset header-button",
          onClick: p[0] || (p[0] = s => n.value = !e(n))
        }, [f("div", Sa, [t.reviewInfo.error ? (d(), b("div", Ra, [t.reviewInfo.error.type === ("MEMEPAD_SHARE_ERRORS" in t ? t.MEMEPAD_SHARE_ERRORS : e(at)).NOT_ENOUGH_TOKEN ? (d(), L(c, {
          key: 0,
          name: "wallet",
          class: "icon icon-wallet"
        })) : (d(), L(c, {
          key: 1,
          name: "circle-warning",
          class: "icon icon-circle"
        })), f("div", ya, K(t.reviewInfo.error.message), 1)])) : (d(), b("div", Ca, K(t.reviewInfo.feesInfo.total.title), 1))]), w(c, {
          name: "arrow-caret-down-md",
          class: "icon"
        })]), e(n) ? (d(), b(j, {
          key: 0
        }, [p[1] || (p[1] = f("div", {
          class: "divider"
        }, null, -1)), (d(!0), b(j, null, te(t.reviewInfo.feesInfo.sections, s => (d(), b("div", {
          key: s.title,
          class: "row"
        }, [f("div", ka, [f("div", Oa, K(s.title), 1), s.badge ? (d(), b("div", La, K(s.badge.label), 1)) : B("", !0)]), f("div", Pa, [s.tooltip ? (d(), L(E, Se({
          key: 0,
          ref_for: !0
        }, s.tooltip.props), {
          default: Y(() => [w(c, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: Y(() => [f("div", Ga, ["details" in s.tooltip ? (d(!0), b(j, {
            key: 0
          }, te(s.tooltip.details, o => (d(), b(j, {
            key: o.label
          }, [!o.value.isZero() || o.highlight ? (d(), b("span", {
            key: 0,
            class: fe(["details", {
              highlighted: o.highlight
            }])
          }, K(o.label), 3)) : B("", !0)], 64))), 128)) : (d(), b("span", {
            key: 1,
            class: fe({
              highlighted: s.tooltip.highlight
            })
          }, K(s.tooltip.label), 3))])]),
          _: 2
        }, 1040)) : B("", !0), f("span", Fa, K(s.label), 1)])]))), 128))], 64)) : B("", !0)])
      }
    }
  }), Ua = V(Ma, [
    ["__scopeId", "data-v-9cc2bad6"]
  ]), Va = {
    class: "header"
  }, Ka = {
    class: "content"
  }, Ya = {
    class: "inner"
  }, Ba = {
    class: "input-wrapper"
  }, Da = {
    class: "subtitle"
  }, $a = {
    key: 1,
    class: "label"
  }, Wa = {
    class: "buttons"
  }, za = {
    class: "controls"
  }, Ha = U({
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
    setup(l, {
      emit: n
    }) {
      const t = l,
        p = n,
        c = F(t.state.stepReview.overview ? {
          status: "loaded",
          share: t.state.stepReview.share,
          overview: t.state.stepReview.overview
        } : {
          status: "loading",
          share: t.state.stepReview.share
        }),
        E = F(!1),
        s = F(),
        o = h(() => c.value.status === "loading" || E.value),
        r = h(() => {
          var u;
          return !o.value && !!((u = N.value) != null && u.error)
        }),
        a = h({
          get: () => new Ue(c.value.share).toFixed(),
          set: u => c.value.share = +Ft(u).toFixed()
        }),
        _ = u => t.launchControls.getReviewInfo({
          jettonTicker: t.state.stepTokenInfo.ticker,
          share: c.value.share,
          withAiAgent: t.state.stepAiAgent.aiAgentEnable,
          overview: u
        }),
        N = h(() => c.value.status === "loaded" ? _(c.value.overview) : void 0);
      x(() => {
        var u;
        return (u = N.value) == null ? void 0 : u.error
      }, u => {
        u && J().memepad.memepadJettonLaunchReviewShareInputError({
          flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
          reason: u.type
        })
      });
      const R = Ve(u => J().memepad.memepadJettonLaunchReviewShareInputUpdate({
        flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
        value: u
      }), 300).debouncedFunction;
      x(() => c.value.share, R);
      const C = h(() => !N.value || !t.balances.tokenBalance ? !1 : t.balances.tokenBalance.value.gte(N.value.feesInfo.total.value)),
        S = ({
          tokenBalance: u,
          overview: T
        }) => {
          J().memepad.memepadLaunchJettonReviewStepMaxButtonClick();
          const v = t.launchControls.getMaxShareAmount({
            tokenBalance: u,
            overview: T
          });
          a.value = v.toFixed()
        },
        P = () => {
          var u;
          return (u = s.value) == null ? void 0 : u.focusOnInput()
        },
        y = async () => {
          var u;
          !C.value || E.value || (u = N.value) != null && u.error || (E.value = !0, await (async () => {
            const T = await (async () => {
              if (c.value.status === "loaded") return {
                share: +c.value.share,
                overview: c.value.overview
              };
              const g = await t.launchControls.getJettonOverview({
                tons: c.value.share
              });
              if (Z(g)) return {
                share: +c.value.share,
                overview: g.data
              }
            })();
            if (!T) return pe().success(A("memepad.jetton.new.error_alert"));
            const v = T,
              k = {
                step: O.REVIEW,
                stepAiAgent: t.state.stepAiAgent,
                stepTokenInfo: t.state.stepTokenInfo,
                stepPersonalizeToken: t.state.stepPersonalizeToken,
                stepReview: v
              },
              i = yt(k),
              m = await t.launchCallback(i);
            Z(m) ? p("continue", m.data) : pe().success(A("memepad.jetton.new.error_alert"))
          })(), E.value = !1)
        }, D = async () => {
          const u = c.value.share,
            T = await t.launchControls.getJettonOverview({
              tons: u
            });
          !new Ue(u).eq(c.value.share) || !Z(T) || (c.value = {
            status: "loaded",
            share: u,
            overview: T.data
          }, p("update", {
            share: u,
            overview: Z(T) ? T.data : void 0
          }))
        }, {
          debouncedFunction: W
        } = Ve(D, 200);
      return x(() => c.value.share, () => {
        c.value.status = "loading", W()
      }), Ce(() => {
        c.value.status !== "loaded" && D()
      }), (u, T) => {
        const v = Ie,
          k = be,
          i = Mt,
          m = xe,
          g = me,
          G = Ua,
          z = Ut,
          q = Vt,
          Q = Kt;
        return d(), L(Q, {
          class: "memepad-new-step-review"
        }, {
          top: Y(() => [f("div", Va, [w(v, {
            "step-number": u.stepNumber,
            step: e(O).REVIEW
          }, null, 8, ["step-number", "step"])])]),
          default: Y(() => [f("div", Ka, [w(k, {
            title: ("t" in u ? u.t : e(A))("memepad.holders.list_item.your_share"),
            "is-optional": ""
          }, null, 8, ["title"]), f("div", Ya, [f("div", Ba, [w(i, {
            ref_key: "actionControlsInputComp",
            ref: s,
            modelValue: e(a),
            "onUpdate:modelValue": T[0] || (T[0] = M => Ne(a) ? a.value = M : null),
            postfix: "TON",
            modifier: M => ("formatFloatLine" in u ? u.formatFloatLine : e(Nt))(M, {
              join: "emptyFractional"
            }),
            onBlur: P
          }, null, 8, ["modelValue", "modifier"]), f("div", Da, [e(N) ? (d(), b("span", $a, K(e(N).subtitle), 1)) : (d(), L(m, {
            key: 0,
            class: "skeleton"
          }))])]), f("div", Wa, [u.balances.tokenBalance && e(c).overview ? (d(), L(g, {
            key: 0,
            type: e(ce).SECONDARY,
            size: e(ie).MEDIUM,
            onClick: T[1] || (T[1] = M => S({
              tokenBalance: u.balances.tokenBalance,
              overview: e(c).overview
            }))
          }, {
            default: Y(() => T[2] || (T[2] = [f("div", {
              class: "label"
            }, "MAX", -1)])),
            _: 1
          }, 8, ["type", "size"])) : B("", !0)])])])]),
          "bottom-action": Y(() => [f("div", za, [e(N) ? (d(), L(G, {
            key: 0,
            "with-share": !!e(c).share,
            "review-info": e(N)
          }, null, 8, ["with-share", "review-info"])) : (d(), L(m, {
            key: 1,
            class: "price-details-skeleton"
          })), w(q, null, {
            default: Y(() => {
              var M, $, ae;
              return [(($ = (M = e(N)) == null ? void 0 : M.error) == null ? void 0 : $.type) === e(at).NOT_ENOUGH_TOKEN ? (d(), L(z, {
                key: 0,
                details: e(N).error.details,
                source: ("ANALYTICS_MEMEPAD_OPERATION_SOURCE" in u ? u.ANALYTICS_MEMEPAD_OPERATION_SOURCE : e(Qe)).LAUNCH,
                "flow-type": u.state.stepAiAgent.aiAgentEnable ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in u ? u.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in u ? u.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).REGULAR,
                "value-balance": (ae = u.balances.tokenBalance) == null ? void 0 : ae.value.toNumber(),
                "input-value": e(c).share
              }, null, 8, ["details", "source", "flow-type", "value-balance", "input-value"])) : (d(), L(g, {
                key: 1,
                label: ("t" in u ? u.t : e(A))("memepad.new.step_review.launch_btn"),
                loading: e(o),
                disabled: e(r),
                fill: "",
                size: e(ie).LARGE,
                type: e(r) ? e(ce).PRIMARY : e(ce).DROP,
                tertiary: e(r),
                onClick: y
              }, null, 8, ["label", "loading", "disabled", "size", "type", "tertiary"]))]
            }),
            _: 1
          })])]),
          _: 1
        })
      }
    }
  }), Ja = V(Ha, [
    ["__scopeId", "data-v-24380128"]
  ]), qa = {
    class: "memepad-new"
  }, Za = U({
    __name: "New",
    props: {
      withAgent: {
        type: Boolean,
        default: !1
      }
    },
    setup(l) {
      const n = l,
        t = J(),
        {
          useWalletOperationsErrorsStack: p,
          getNetworkTokenBalance: c,
          addresses: E
        } = tt(),
        {
          popRetryPayload: s
        } = we(),
        o = h(() => {
          var i;
          return (i = bt().getters.getUser.value) == null ? void 0 : i.referrerToken
        }),
        r = s(),
        a = F(r ? Ct(r, n.withAgent) : n.withAgent ? {
          step: O.TOKEN_INFO,
          stepAiAgent: ee.stepAiAgentEnabled(),
          stepTokenInfo: ee.stepTokenInfo(),
          stepPersonalizeToken: ee.stepPersonalizeToken(),
          stepReview: ee.stepReview()
        } : {
          step: O.TOKEN_INFO,
          stepAiAgent: ee.stepAiAgentDisabled(),
          stepTokenInfo: ee.stepTokenInfo(),
          stepPersonalizeToken: ee.stepPersonalizeToken(),
          stepReview: ee.stepReview()
        }),
        _ = h(() => {
          const i = [O.TOKEN_INFO, O.PERSONALIZE_TOKEN, O.REVIEW],
            m = [O.TOKEN_INFO, O.PERSONALIZE_TOKEN, O.REVIEW],
            g = n.withAgent ? i : m;
          return {
            stepNumber: g.indexOf(a.value.step) + 1,
            countSteps: g.length
          }
        }),
        N = h(() => ({
          tokenBalance: a.value.stepTokenInfo.networkType ? c(a.value.stepTokenInfo.networkType) : void 0
        })),
        R = h(() => {
          if (!E.value) return;
          const i = a.value.stepTokenInfo.networkType;
          return Yt({
            balances: N.value,
            addresses: E.value,
            networkType: i,
            referrerToken: o.value
          })
        });
      (() => {
        r ? t.memepad.memepadJettonRetry({
          flowType: n.withAgent ? I.AI : I.REGULAR
        }) : n.withAgent ? t.memepad.memepadJettonStepAiAgent() : t.memepad.memepadJettonStepTokenInfo({
          flowType: n.withAgent ? I.AI : I.REGULAR
        })
      })();
      const S = (i, m) => {
          const g = {
            step: O.TOKEN_INFO,
            stepAiAgent: m,
            stepTokenInfo: i.stepTokenInfo,
            stepPersonalizeToken: i.stepPersonalizeToken,
            stepReview: i.stepReview
          };
          a.value = g, t.memepad.memepadJettonStepTokenInfo({
            flowType: n.withAgent ? I.AI : I.REGULAR
          })
        },
        P = (i, m) => {
          const g = {
            step: O.PERSONALIZE_TOKEN,
            stepAiAgent: i.stepAiAgent,
            stepTokenInfo: m,
            stepPersonalizeToken: i.stepPersonalizeToken,
            stepReview: i.stepReview
          };
          a.value = g, t.memepad.memepadJettonStepPersonaliseToken({
            flowType: i.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR
          })
        },
        y = (i, m) => {
          const g = {
            step: O.REVIEW,
            stepAiAgent: i.stepAiAgent,
            stepTokenInfo: i.stepTokenInfo,
            stepPersonalizeToken: m,
            stepReview: i.stepReview
          };
          a.value = g, t.memepad.memepadJettonStepReview({
            flowType: n.withAgent ? I.AI : I.REGULAR
          })
        },
        D = async i => {
          await ht(100), await Ae().push({
            name: "memepad-new-launching-id",
            params: {
              id: i.queryId
            }
          })
        }, W = (i, m) => {
          a.value = {
            ...i,
            stepReview: m
          }
        }, u = (i, m) => {
          a.value = {
            ...i,
            stepPersonalizeToken: m
          }
        };
      It().initHandler(() => {
        var m;
        const i = a.value;
        switch (i.step) {
          case O.AI_AGENT:
            Ae().push({
              name: "memepad-new"
            });
            break;
          case O.TOKEN_INFO:
            (m = E.value) != null && m.isAvailableAI ? Ae().push({
              name: "memepad-new"
            }) : Ae().push({
              name: "memepad"
            });
            break;
          case O.PERSONALIZE_TOKEN:
            a.value = {
              ...i,
              step: O.TOKEN_INFO
            };
            break;
          case O.REVIEW:
            a.value = {
              ...i,
              step: O.PERSONALIZE_TOKEN
            };
            break;
          default:
            throw ye("Invalid step")
        }
      }, "memepad-new");
      const {
        addErrorToStackAndCheck: T
      } = p(), {
        runLaunchStatusFetchingInBackground: v
      } = we(), k = i => async m => {
        const g = await i.createJetton({
          form: m
        });
        return Z(g) ? (v({
          payload: m,
          data: g.data,
          getWaitForCreateStatus: i.getWaitForCreateStatus
        }), je(g.data)) : (t.memepad.memepadJettonLaunchWalletUiError({
          flowType: a.value.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
          reason: g.extra && g.extra instanceof Error && g.extra instanceof wt ? "ton_connect_ui_error" : "other"
        }), T({
          name: m.name,
          ticker: m.ticker,
          promptId: m.promptId,
          description: m.description,
          iconFileKey: m.iconFileKey,
          socialProviders: m.socialProviders,
          bannerFileKey: m.bannerFileKey,
          isNSFW: m.isNSFW,
          networkType: m.networkType,
          share: m.share
        }, {
          source: Qe.LAUNCH,
          flowType: a.value.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR
        }), g)
      };
      return (i, m) => {
        const g = Wt,
          G = mn,
          z = Wn,
          q = Pt,
          Q = ha,
          M = Ja;
        return d(), b("div", qa, [w(g, {
          step: e(_).stepNumber,
          "count-steps": e(_).countSteps
        }, null, 8, ["step", "count-steps"]), e(a).step === e(O).AI_AGENT ? (d(), L(G, {
          key: 0,
          "step-number": e(_).stepNumber,
          state: e(a),
          onContinue: m[0] || (m[0] = $ => S(e(a), $))
        }, null, 8, ["step-number", "state"])) : e(a).step === e(O).TOKEN_INFO ? (d(), L(z, {
          key: 1,
          "step-number": e(_).stepNumber,
          state: e(a),
          onContinue: m[1] || (m[1] = $ => P(e(a), $))
        }, null, 8, ["step-number", "state"])) : e(R) ? e(a).step === e(O).PERSONALIZE_TOKEN ? (d(), L(Q, {
          key: 3,
          state: e(a),
          "step-number": e(_).stepNumber,
          onUpdate: m[2] || (m[2] = $ => u(e(a), $)),
          onContinue: m[3] || (m[3] = $ => y(e(a), $))
        }, null, 8, ["state", "step-number"])) : e(a).step === e(O).REVIEW ? (d(), L(M, {
          key: 4,
          state: e(a),
          "step-number": e(_).stepNumber,
          balances: e(N),
          "launch-controls": e(R),
          "launch-callback": k(e(R)),
          onContinue: m[4] || (m[4] = $ => D($)),
          onUpdate: m[5] || (m[5] = $ => W(e(a), $))
        }, null, 8, ["state", "step-number", "balances", "launch-controls", "launch-callback"])) : B("", !0) : (d(), L(q, {
          key: 2
        }))])
      }
    }
  }), co = V(Za, [
    ["__scopeId", "data-v-42137974"]
  ]);
export {
  co as _
};