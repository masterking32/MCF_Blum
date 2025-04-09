import {
  d as F,
  o as d,
  c as b,
  a as E,
  aN as pe,
  f as M,
  j as h,
  a3 as ye,
  C as A,
  t as U,
  e,
  aw as se,
  aB as lt,
  ax as ne,
  U as ee,
  ad as it,
  E as D,
  w as Te,
  b$ as rt,
  p as Ne,
  n as fe,
  bu as ce,
  b as w,
  F as j,
  q as te,
  M as L,
  B as de,
  X as le,
  a8 as H,
  x as _e,
  ai as Fe,
  y as P,
  bj as we,
  ak as ke,
  ao as Se,
  D as V,
  bk as I,
  c0 as x,
  c1 as ve,
  a4 as re,
  aa as q,
  a7 as me,
  A as ie,
  b5 as Ye,
  c2 as Re,
  b0 as $e,
  c3 as We,
  c4 as oe,
  c5 as ct,
  b1 as ze,
  aQ as dt,
  bD as ut,
  N as pt,
  W as Ce,
  bE as He,
  m as Je,
  Y as qe,
  aL as Me,
  a5 as Ze,
  c6 as z,
  c7 as mt,
  c8 as _t,
  c9 as vt,
  b_ as Oe,
  aH as At,
  _ as Le,
  bp as he,
  ba as gt,
  al as Et,
  ca as ft,
  bc as Tt,
  a1 as Ue,
  aj as Nt,
  bB as je,
  G as Ve,
  k as bt,
  T as It,
  ab as ge,
  bC as ht,
  cb as wt
} from "./Cbo9LC6p.js";
import {
  M as O,
  g as St,
  _ as Rt,
  a as yt,
  r as kt,
  b as X
} from "./DMkLxlX3.js";
import {
  _ as be
} from "./DY3IUnyG.js";
import {
  _ as Qe
} from "./B0Xhtl34.js";
import {
  i as Ct,
  a as Ot,
  b as Lt,
  _ as xe,
  F as Ee,
  c as Xe
} from "./DCCbGgRz.js";
import {
  u as et
} from "./Bh_6txVy.js";
import {
  _ as Pe
} from "./BCT2FObz.js";
import {
  K as tt
} from "./De96923n.js";
import {
  _ as Pt
} from "./DdW72Z7B.js";
import {
  _ as Gt
} from "./CqK2dG-X.js";
import {
  f as Ft,
  b as Mt,
  _ as Ut,
  a as Vt,
  c as Kt,
  d as Bt
} from "./yc4oBeM4.js";
import {
  _ as Dt
} from "./D2euHmaP.js";
import {
  b as nt
} from "./BQIfgLwR.js";
const Yt = {
    class: "memepad-new-progress"
  },
  $t = F({
    __name: "NewProgress",
    props: {
      step: {},
      countSteps: {}
    },
    setup(i) {
      return (n, t) => (d(), b("div", Yt, [E("div", {
        class: "track",
        style: pe({
          width: `${n.step/n.countSteps*100}%`
        })
      }, null, 4)]))
    }
  }),
  Wt = M($t, [
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
  qt = F({
    __name: "NewStepHeading",
    props: {
      stepNumber: {},
      step: {}
    },
    setup(i) {
      const n = i,
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
      return (p, r) => (d(), b("div", zt, [E("div", Ht, U(p.stepNumber), 1), E("div", Jt, U(e(t)), 1)]))
    }
  }),
  Ie = M(qt, [
    ["__scopeId", "data-v-224a616e"]
  ]),
  Zt = {
    class: "overlays"
  },
  jt = ["max"],
  Qt = F({
    __name: "Range",
    props: se({
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
    setup(i) {
      lt(s => ({
        "6b93b9a5": s.color,
        "320b7ca0": s.pointerSize
      }));
      const n = i,
        t = ne(i, "modelValue"),
        p = h(() => {
          if (n.scale === "linear") {
            const s = [];
            for (let o = n.min; o <= n.max; o += n.step) s.push(o);
            return s
          } else if (n.scale === "log") {
            const s = [],
              o = Math.log10(n.min),
              c = Math.log10(n.max),
              a = Math.ceil(Math.log10(n.max / n.min) * 10 * 30);
            for (let v = 0; v <= a; v++) {
              const T = Math.pow(10, o + (c - o) * v / a);
              s.push(Math.round(T))
            }
            return [...new Set(s)]
          } else if (n.scale === "points") {
            const s = [];
            for (let o = n.min; o <= n.max; o++)(o <= 10 || o <= 100 && o % 2 === 0 || o <= 1e3 && o % 10 === 0 || o <= 1e4 && o % 100 === 0 || o % 1e3 === 0) && s.push(o);
            return s
          } else throw ye("Invalid scale")
        });
      ee(t, s => {
        const o = p.value.reduce((a, v) => Math.abs(v - s) < Math.abs(a - s) ? v : a, p.value[0]),
          c = p.value.indexOf(o);
        t.value = p.value[c]
      }, {
        immediate: !0
      });
      const r = h({
          get: () => p.value.indexOf(t.value),
          set: s => t.value = p.value[s]
        }),
        g = h(() => {
          const s = n.pointerSize,
            o = r.value / (p.value.length - 1),
            c = (1 - o) * s - s / 2;
          return `calc(${o*100}% + ${c}px)`
        });
      return (s, o) => (d(), b("div", {
        class: fe(["kit-range", {
          "has-tooltip": s.$slots.tooltip
        }])
      }, [E("div", Zt, [E("div", {
        class: "filled",
        style: pe({
          width: e(g)
        })
      }, null, 4), s.$slots.tooltip ? (d(), b("div", {
        key: 0,
        class: "tooltip",
        style: pe({
          left: e(g)
        })
      }, [it(s.$slots, "tooltip", {}, void 0, !0)], 4)) : D("", !0)]), Te(E("input", {
        "onUpdate:modelValue": o[0] || (o[0] = c => Ne(r) ? r.value = c : null),
        type: "range",
        min: 0,
        max: e(p).length - 1,
        step: 1
      }, null, 8, jt), [
        [rt, e(r)]
      ])], 2))
    }
  }),
  xt = M(Qt, [
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
  nn = F({
    __name: "Traits",
    props: se({
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
    setup(i) {
      const n = ne(i, "modelValue"),
        t = i,
        p = h(() => {
          const r = Object.entries(n.value),
            g = {
              [ce.MEMEPAD_AI_AGENT_TRAITS.SAD]: A("memepad.new.step_ai_agent.traits.sad_label"),
              [ce.MEMEPAD_AI_AGENT_TRAITS.CHEEKY]: A("memepad.new.step_ai_agent.traits.cheeky_label"),
              [ce.MEMEPAD_AI_AGENT_TRAITS.KIND]: A("memepad.new.step_ai_agent.traits.kind_label")
            };
          return r.map(([s, o]) => ({
            key: s,
            label: t.pending ? g[s] : `${g[s]} ${o}%`,
            value: h({
              get() {
                return n.value[s]
              },
              set(c) {
                n.value[s] = c
              }
            })
          }))
        });
      return (r, g) => {
        const s = be,
          o = Qe,
          c = xt;
        return d(), b("div", {
          class: fe(["memepad-new-form-traits", {
            "is-loading": r.pending
          }])
        }, [w(s, {
          title: ("t" in r ? r.t : e(A))("memepad.new.step_ai_agent.traits.field_title")
        }, null, 8, ["title"]), E("div", Xt, [(d(!0), b(j, null, te(e(p), a => (d(), b("div", {
          key: a.key,
          class: "item"
        }, [E("div", en, U(a.label), 1), r.pending ? (d(), L(o, {
          key: 0,
          class: "skeleton"
        })) : (d(), b("div", tn, [w(c, {
          modelValue: a.value.value,
          "onUpdate:modelValue": v => a.value.value = v,
          scale: "linear",
          min: 0,
          step: 1,
          max: 100
        }, null, 8, ["modelValue", "onUpdate:modelValue"])]))]))), 128))])], 2)
      }
    }
  }),
  an = M(nn, [
    ["__scopeId", "data-v-b0a6b734"]
  ]),
  on = F({
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
    setup(i, {
      emit: n
    }) {
      const t = n,
        {
          addresses: p
        } = et(),
        r = h(() => {
          var o;
          return !!((o = p.value) != null && o.isAvailableAI)
        }),
        g = h(() => {
          const o = i.onceGenerated ? A("memepad.new.ai_agent.generate_again_btn") : A("memepad.new.ai_agent.generate_btn"),
            c = i.onceGenerated ? de.GREYSTARS : de.GREENSTARS;
          return {
            label: o,
            type: c
          }
        }),
        s = () => {
          i.onceGenerated ? H().memepad.memepadJettonAiGenerateAgainButtonClick({
            flowType: i.analyticsType,
            page: i.analyticsPage,
            stage: i.analyticsStage
          }) : H().memepad.memepadJettonAiGenerateButtonClick({
            flowType: i.analyticsType,
            page: i.analyticsPage
          }), t("click")
        };
      return (o, c) => {
        const a = _e;
        return e(r) ? (d(), L(a, {
          key: 0,
          label: e(g).label,
          size: e(le).LARGE,
          type: e(g).type,
          loading: o.pending,
          onClick: s
        }, null, 8, ["label", "size", "type", "loading"])) : D("", !0)
      }
    }
  }),
  Ae = M(on, [
    ["__scopeId", "data-v-cd79f34a"]
  ]),
  sn = {
    required: i => {
      if (!i) return A("form.rules.required")
    },
    maxLength: (i, {
      maxLength: n
    }) => {
      const t = n - i.length;
      if (t < 0) return A("form.rules.max_length", {
        overCount: String(t * -1)
      })
    },
    isUrl: (i, n) => {
      const t = A("form.rules.is_url"),
        p = n != null && n.prefix ? `${n==null?void 0:n.prefix}${i}` : i;
      if (!Ct(p)) return t
    },
    isEmail: i => {
      if (!Ot(i)) return A("form.rules.is_email")
    }
  },
  ln = i => ({
    modelValue: i.value,
    "onUpdate:modelValue": n => {
      i.onUpdate(n)
    }
  }),
  rn = i => ({
    modelValue: i.value,
    "onUpdate:modelValue": n => {
      i.onUpdate(n)
    },
    errorCaption: i.error,
    isError: !!i.error
  }),
  cn = i => {
    const n = Fe({
        ...i.defaultValues
      }),
      t = P({}),
      p = Fe({}),
      r = (v = Object.keys(i.validationSchema)) => {
        const T = R => {
          const C = i.validationSchema[R];
          C && (t.value[R] = C(n[R], n)), p[R] = !0
        };
        for (const R of v) T(R)
      },
      g = (v, T) => {
        const R = h(() => t.value[v]),
          C = h({
            get: () => n[v],
            set: G => {
              n[v] = G, p[v] && r([v])
            }
          }),
          S = h(() => T({
            value: C.value,
            error: R.value,
            onUpdate: G => {
              C.value = G
            }
          }));
        return {
          error: R,
          value: C,
          binds: S
        }
      },
      s = (v, T) => {
        n[v] = T
      },
      o = h(() => {
        for (const v in i.validationSchema) {
          const T = i.validationSchema[v];
          if (T && T(n[v], n)) return !1
        }
        return !0
      }),
      c = h(() => Object.values(t.value).every(v => !v));
    return {
      errors: t,
      values: n,
      getField: g,
      isLazyValid: c,
      isValid: o,
      handleSubmit: v => () => {
        r(), o.value && v(n)
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
  pn = F({
    __name: "AiAgent",
    props: {
      state: {},
      stepNumber: {}
    },
    emits: ["continue"],
    setup(i, {
      emit: n
    }) {
      const t = i,
        p = n,
        {
          isAiAgentPayloadOnceGenerated: r
        } = we(),
        g = h(() => t.state.stepAiAgent),
        {
          getField: s,
          isLazyValid: o,
          handleSubmit: c,
          setValue: a
        } = cn({
          validationSchema: {
            traits: () => {},
            prompt: y => y ? sn.maxLength(y, {
              maxLength: Ke
            }) : void 0
          },
          defaultValues: {
            traits: g.value.aiAgentSettings.traits,
            prompt: g.value.aiAgentSettings.prompt ?? ""
          }
        }),
        v = s("traits", ln),
        T = s("prompt", rn),
        R = h(() => o.value),
        C = c(y => {
          p("continue", {
            aiAgentEnable: !0,
            aiAgentSettings: {
              traits: y.traits,
              prompt: y.prompt
            }
          })
        }),
        S = P(!1),
        G = async () => {
          S.value || (S.value = !0, await (async () => {
            const y = await re.generateMemepadAiAgentSetup();
            if (!q(y)) return me().error(A("memepad.new.step_ai_agent.generation_failed_alert"));
            a("traits", y.data.settings.traits), a("prompt", y.data.settings.prompt)
          })(), S.value = !1)
        };
      return ke(() => {
        r.value || (G(), r.value = !0)
      }), (y, Y) => {
        const $ = Ie,
          u = an,
          l = Lt,
          k = Ae,
          N = _e,
          m = Pe;
        return d(), b("div", dn, [w($, {
          "step-number": y.stepNumber,
          step: e(O).AI_AGENT
        }, null, 8, ["step-number", "step"]), w(u, Se(e(v).binds.value, {
          pending: e(S)
        }), null, 16, ["pending"]), w(l, Se(e(T).binds.value, {
          "max-length": Ke,
          "is-optional": "",
          loading: e(S),
          label: ("t" in y ? y.t : e(A))("memepad.new.step_ai_agent.field_prompt.label"),
          placeholder: ("t" in y ? y.t : e(A))("memepad.new.step_ai_agent.field_prompt.placeholder")
        }), null, 16, ["loading", "label", "placeholder"]), w(m, null, {
          default: V(() => [E("div", un, [w(k, {
            "once-generated": "",
            pending: e(S),
            "analytics-type": ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in y ? y.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in y ? y.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(x)).AI,
            "analytics-stage": e(ve).IMAGE_GENERATION,
            onClick: G
          }, null, 8, ["pending", "analytics-type", "analytics-page", "analytics-stage"]), w(N, {
            label: ("t" in y ? y.t : e(A))("base.continue"),
            fill: "",
            tertiary: "",
            disabled: !e(R) || e(S),
            size: e(le).LARGE,
            onClick: e(C)
          }, null, 8, ["label", "disabled", "size", "onClick"])])]),
          _: 1
        })])
      }
    }
  }),
  mn = M(pn, [
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
    src: ct,
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
  Be = 10,
  Tn = F({
    __name: "Avatar",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(i, {
      expose: n
    }) {
      const t = ne(i, "modelValue"),
        p = ie("file-uploader"),
        r = () => {
          var c;
          return (c = p.value) == null ? void 0 : c.triggerFileUpload()
        },
        g = P(),
        s = h(() => {
          if (t.value) return Ye(t.value)
        });
      return n({
        selectFile: c => {
          var a;
          (a = p.value) == null || a.onFileSelected(c)
        }
      }), (c, a) => {
        var R;
        const v = ze,
          T = tt;
        return d(), b("div", _n, [E("div", vn, [e(s) ? (d(), b("div", {
          key: 0,
          class: "image is-uploaded",
          style: pe({
            backgroundImage: `url(${e(s)})`
          })
        }, null, 4)) : (d(), b("div", {
          key: 1,
          class: "image wait-upload",
          onClick: a[0] || (a[0] = C => r())
        }, [((R = e(g)) == null ? void 0 : R.status) === e(Re).UPLOADING ? (d(), L(v, {
          key: 0,
          type: e($e).LIGHT,
          size: 16
        }, null, 8, ["type"])) : (d(), b("img", An))])), E("div", gn, [E("div", En, U(("t" in c ? c.t : e(A))("memepad.new.step_token_info.field_icon.label")), 1), E("div", fn, U(("t" in c ? c.t : e(A))("memepad.new.step_token_info.field_icon.description", {
          maxUploadSize: String(Be)
        })), 1)]), t.value ? (d(), b("div", {
          key: 2,
          class: "delete",
          onClick: a[1] || (a[1] = C => t.value = void 0)
        }, a[4] || (a[4] = [E("img", {
          src: We,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))) : D("", !0)]), w(T, {
          ref: "file-uploader",
          "hide-ui": "",
          "max-file-size-mb": Be,
          accept: [e(oe).JPEG, e(oe).PNG, e(oe).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 1,
            borderRadius: 999
          },
          "onUpdate:progress": a[2] || (a[2] = C => g.value = C),
          onUploaded: a[3] || (a[3] = C => t.value = C.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  Nn = M(Tn, [
    ["__scopeId", "data-v-f7a6c9a9"]
  ]),
  bn = {
    class: "loader"
  },
  In = {
    class: "description"
  },
  hn = 3e3,
  wn = F({
    __name: "GenerateContentLoader",
    setup(i) {
      let n;
      const t = h(() => [A("memepad.new.ai_agent.generate_loader_description.1"), A("memepad.new.ai_agent.generate_loader_description.2"), A("memepad.new.ai_agent.generate_loader_description.3"), A("memepad.new.ai_agent.generate_loader_description.4"), A("memepad.new.ai_agent.generate_loader_description.5"), A("memepad.new.ai_agent.generate_loader_description.6"), A("memepad.new.ai_agent.generate_loader_description.7"), A("memepad.new.ai_agent.generate_loader_description.8"), A("memepad.new.ai_agent.generate_loader_description.9"), A("memepad.new.ai_agent.generate_loader_description.10"), A("memepad.new.ai_agent.generate_loader_description.11"), A("memepad.new.ai_agent.generate_loader_description.12"), A("memepad.new.ai_agent.generate_loader_description.13"), A("memepad.new.ai_agent.generate_loader_description.14"), A("memepad.new.ai_agent.generate_loader_description.15"), A("memepad.new.ai_agent.generate_loader_description.16"), A("memepad.new.ai_agent.generate_loader_description.17"), A("memepad.new.ai_agent.generate_loader_description.18")]),
        p = P(t.value[0]),
        r = () => {
          p.value = t.value[Math.floor(Math.random() * t.value.length)]
        };
      return ke(() => {
        n = dt(r, hn)
      }), ut(() => {
        clearInterval(n)
      }), (g, s) => {
        const o = pt;
        return d(), b("div", bn, [w(o, {
          name: "animations/other/stars_sparkle_grey",
          height: "262px",
          "z-index": "1"
        }), E("div", In, U(e(p)), 1)])
      }
    }
  }),
  at = M(wn, [
    ["__scopeId", "data-v-d75545b6"]
  ]),
  Sn = {
    class: "menu"
  },
  Rn = ["onClick"],
  yn = {
    class: "item-image"
  },
  kn = ["src"],
  Cn = {
    class: "item-name"
  },
  On = {
    class: "item-arrow"
  },
  Ln = ["src"],
  Pn = F({
    __name: "Menu",
    props: {
      items: {}
    },
    setup(i) {
      return (n, t) => (d(), b("ul", Sn, [(d(!0), b(j, null, te(n.items, ({
        name: p,
        imageUrl: r,
        onClick: g
      }, s) => (d(), b("li", {
        key: s,
        class: "menu-item",
        onClick: g
      }, [E("div", yn, [E("img", {
        src: r,
        alt: ""
      }, null, 8, kn)]), E("div", Cn, U(p), 1), E("div", On, [E("img", {
        src: ("imgResolver" in n ? n.imgResolver : e(Ce))("menu-arrow-right", "svg"),
        alt: ""
      }, null, 8, Ln)])], 8, Rn))), 128))]))
    }
  }),
  Gn = M(Pn, [
    ["__scopeId", "data-v-e6475410"]
  ]);
var ue = (i => (i.ERROR = "ERROR", i.LOADING = "LOADING", i.LOADED = "LOADED", i))(ue || {});
const ot = i => {
    let n = new AbortController;
    const t = P({
        loadStatus: "LOADED",
        categories: [],
        selectedCategory: null,
        info: null,
        result: [],
        isSheetVisible: !1
      }),
      p = h(() => t.value.result.length > 0 && t.value.loadStatus === "LOADED"),
      r = h(() => t.value.loadStatus === "LOADING"),
      g = h(() => t.value.loadStatus === "ERROR"),
      s = h(() => p.value),
      o = h(() => !p.value && t.value.loadStatus !== "ERROR"),
      c = h(() => p.value),
      a = h(() => t.value.result.every(({
        isLoaded: N
      }) => N)),
      v = h(() => p.value || t.value.loadStatus === "ERROR"),
      T = h(() => t.value.categories.map(N => ({
        ...N,
        onClick: async () => {
          H().memepad.memepadJettonAiGeneratedCategorySelect({
            flowType: i ? I.AI : I.REGULAR,
            categoryName: N.name
          }), t.value.selectedCategory = N, await S()
        }
      }))),
      R = async () => {
        if (n.signal.aborted || t.value.categories.length > 0) return;
        t.value.loadStatus = "LOADING";
        const N = await re.getMemepadAiContentCategories({
          abortSignal: n.signal
        });
        if (!q(N)) {
          t.value.loadStatus = n.signal.aborted ? "LOADED" : "ERROR";
          return
        }
        t.value.categories = N.data.categories.map(({
          description: m,
          imageUrl: _,
          name: f
        }) => ({
          description: m,
          imageUrl: _,
          name: f
        })), t.value.loadStatus = "LOADED"
      }, C = async () => {
        if (n.signal.aborted) return;
        if (t.value.selectedCategory === null) {
          t.value.loadStatus = "ERROR";
          return
        }
        t.value.loadStatus = "LOADING";
        const N = await re.generateMemepadAiContent({
          payload: {
            category: t.value.selectedCategory.name,
            topic: t.value.selectedCategory.description
          },
          abortSignal: n.signal
        });
        if (!q(N)) {
          t.value.loadStatus = n.signal.aborted ? "LOADED" : "ERROR";
          return
        }
        t.value.info = {
          name: N.data.name,
          ticker: N.data.ticker,
          description: N.data.description
        }, t.value.loadStatus = "LOADED"
      }, S = async () => {
        if (t.value.info === null && await C(), n.signal.aborted) return;
        if (t.value.selectedCategory === null || t.value.info === null) {
          t.value.loadStatus = "ERROR";
          return
        }
        t.value.loadStatus = "LOADING";
        const N = await re.generateMemepadAiImages({
          payload: {
            type: ce.MEMEPAD_AI_IMAGE_TYPE.ICON,
            prompt: t.value.info.description
          },
          abortSignal: n.signal
        });
        if (!q(N)) {
          t.value.loadStatus = n.signal.aborted ? "LOADED" : "ERROR";
          return
        }
        t.value.result = N.data.images.map(m => ({
          imageUrl: m,
          isLoaded: !1
        }))
      }, G = async N => {
        if (n.signal.aborted) return;
        t.value.loadStatus = "LOADING";
        const m = await re.generateMemepadAiImages({
          payload: {
            type: ce.MEMEPAD_AI_IMAGE_TYPE.BANNER,
            prompt: N
          },
          abortSignal: n.signal
        });
        if (!q(m)) {
          t.value.loadStatus = n.signal.aborted ? "LOADED" : "ERROR";
          return
        }
        t.value.result = m.data.images.map(_ => ({
          imageUrl: _,
          isLoaded: !1
        }))
      }, y = () => {
        t.value.isSheetVisible = !0
      }, Y = () => {
        t.value.isSheetVisible = !1
      }, $ = () => {
        n.abort(), setTimeout(() => {
          n = new AbortController
        })
      };
    return {
      categoryMenuItems: T,
      fetchBanners: G,
      fetchCategoriesOnce: R,
      fetchIcons: S,
      generateContentSheetState: t,
      hasResult: p,
      hide: Y,
      isBackIconVisible: s,
      isErrorVisible: g,
      isLoadingBarVisible: r,
      isMenuVisible: o,
      isRegenerateButtonVisible: v,
      isResultVisible: c,
      onResultItemLoad: N => {
        var m;
        ((m = t.value.result) == null ? void 0 : m[N]) !== void 0 && (t.value.result[N].isLoaded = !0, a.value && (t.value.loadStatus = "LOADED"))
      },
      resetGenerateContentSheetResultState: () => {
        $(), t.value.loadStatus = "LOADED", t.value.selectedCategory = null, t.value.info = null, t.value.result = []
      },
      resetGenerateContentSheetState: () => {
        $(), t.value.loadStatus = "LOADED", t.value.categories = [], t.value.selectedCategory = null, t.value.info = null, t.value.result = []
      },
      show: y
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
  Kn = F({
    __name: "GenerateIconSheet",
    props: {
      withAi: {
        type: Boolean
      }
    },
    emits: ["back", "close", "select"],
    setup(i, {
      expose: n,
      emit: t
    }) {
      const p = t,
        {
          categoryMenuItems: r,
          fetchCategoriesOnce: g,
          fetchIcons: s,
          generateContentSheetState: o,
          hasResult: c,
          hide: a,
          isBackIconVisible: v,
          isErrorVisible: T,
          isLoadingBarVisible: R,
          isMenuVisible: C,
          isRegenerateButtonVisible: S,
          isResultVisible: G,
          onResultItemLoad: y,
          resetGenerateContentSheetResultState: Y,
          resetGenerateContentSheetState: $,
          show: u
        } = ot(i.withAi),
        l = h(() => {
          if (!c.value && o.value.loadStatus !== ue.ERROR) return A("memepad.new.ai_agent.select_model");
          if (c.value && o.value.loadStatus !== ue.ERROR) return A("memepad.new.ai_agent.select_icon")
        }),
        k = async () => {
          o.value.loadStatus === ue.ERROR && await g(), await s()
        }, N = f => {
          o.value.info !== null && (a(), p("select", {
            ...o.value.info,
            ...f
          }), $())
        }, m = () => {
          p("back"), Y()
        }, _ = () => {
          if (R.value) {
            const K = (() => {
              switch (!0) {
                case !r.value.length:
                  return "category_choice";
                case !o.value.info:
                  return "data_loading";
                case !o.value.result.length:
                  return "image_choice"
              }
            })();
            K && H().memepad.memepadJettonAiGenerationCancel({
              flowType: i.withAi ? I.AI : I.REGULAR,
              page: x.TOKEN_INFO,
              stage: K
            })
          }
          p("close"), Y()
        };
      return ee(() => o.value.isSheetVisible, async f => {
        f && await g()
      }), n({
        show: u,
        hide: a
      }), (f, K) => {
        const J = at,
          Q = Gn,
          Z = xe,
          B = Ae,
          W = qe;
        return d(), L(W, {
          modelValue: e(o).isSheetVisible,
          "onUpdate:modelValue": K[0] || (K[0] = ae => e(o).isSheetVisible = ae),
          title: e(l),
          "back-icon": e(v),
          "no-header-line": "",
          onBack: m,
          onClose: _
        }, {
          default: V(() => [E("div", Fn, [e(R) ? (d(), L(J, {
            key: 0
          })) : D("", !0), e(C) ? (d(), L(Q, {
            key: 1,
            items: e(r)
          }, null, 8, ["items"])) : D("", !0), Te(E("div", Mn, [(d(!0), b(j, null, te(e(o).result, (ae, Ge) => (d(), b("div", {
            key: Ge
          }, [E("img", {
            alt: "",
            src: ae.imageUrl,
            onClick: () => N(ae),
            onLoad: () => e(y)(Ge)
          }, null, 40, Un)]))), 128))], 512), [
            [He, e(G)]
          ]), e(T) ? (d(), L(Z, {
            key: 2
          }, {
            header: V(() => [E("img", {
              src: ("imgResolver" in f ? f.imgResolver : e(Ce))("special/big-pink-cross", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, Vn)]),
            title: V(() => [Je(U(("t" in f ? f.t : e(A))("memepad.new.ai_agent.generation_failed_error")), 1)]),
            _: 1
          })) : D("", !0), e(S) ? (d(), L(B, {
            key: 3,
            "once-generated": "",
            class: "button-regenerate",
            "analytics-type": f.withAi ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in f ? f.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in f ? f.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in f ? f.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(x)).TOKEN_INFO,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in f ? f.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e(ve)).FINAL_STAGE_OF_STEP,
            onClick: k
          }, null, 8, ["analytics-type", "analytics-page", "analytics-stage"])) : D("", !0)])]),
          _: 1
        }, 8, ["modelValue", "title", "back-icon"])
      }
    }
  }),
  Bn = M(Kn, [
    ["__scopeId", "data-v-30fa41a5"]
  ]),
  st = async i => {
    try {
      const n = await fetch(i);
      if (!n.ok) return Me("Failed to get image");
      const t = await n.arrayBuffer(),
        p = new File([t], "image.png", {
          type: "image/png"
        });
      return Ze(p)
    } catch {
      return Me("Failed to get image")
    }
  }, Dn = {
    class: "memepad-new-step-token-info"
  }, Yn = {
    class: "buttons"
  }, $n = F({
    __name: "TokenInfo",
    props: {
      state: {},
      stepNumber: {}
    },
    emits: ["continue"],
    setup(i, {
      emit: n
    }) {
      const t = i,
        p = n,
        r = ie("avatar"),
        g = ie("generate-icon-sheet"),
        s = P(!1),
        o = P(!1),
        c = P({
          ...t.state.stepTokenInfo
        }),
        a = P({
          [z.ICON]: !1,
          [z.TICKER]: !1,
          [z.NAME]: !1,
          [z.DESCRIPTION]: !1
        });
      ee(c, (l, k) => {
        [
          ["name", z.NAME],
          ["iconFileKey", z.ICON],
          ["ticker", z.TICKER],
          ["description", z.DESCRIPTION]
        ].forEach(([m, _]) => {
          l[m] !== k[m] && a.value[_] && (H().memepad.memepadJettonGenerationContentUpdate({
            flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
            page: x.TOKEN_INFO,
            contentType: _
          }), a.value[_] = !1)
        })
      });
      const v = P([{
          key: "name",
          type: Ee.STRING,
          value: h({
            get: () => c.value.name ?? "",
            set: l => c.value.name = l ?? ""
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
            get: () => c.value.ticker ?? "",
            set: l => c.value.ticker = l ?? ""
          }),
          props: {
            label: A("memepad.new.step_token_info.field_ticker.label"),
            placeholder: A("memepad.new.step_token_info.field_ticker.placeholder"),
            modifiers: [mt.UPPERCASE]
          },
          validators: {
            required: {},
            maxLength: {
              value: 10
            }
          },
          customValidator: l => {
            if (!l.match(/^[A-Z0-9]+$/)) return A("memepad.new.step_token_info.field_ticker.custom_validator_error")
          }
        }, {
          key: "description",
          type: Ee.TEXTAREA,
          value: h({
            get: () => c.value.description ?? "",
            set: l => c.value.description = l ?? ""
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
        T = P(),
        R = h(() => {
          var l;
          return ((l = T.value) == null ? void 0 : l.isFormValid) && !!c.value.iconFileKey
        }),
        C = () => p("continue", c.value),
        S = () => {
          var l;
          s.value = !0, (l = g.value) == null || l.show()
        },
        G = async ({
          imageUrl: l,
          name: k,
          ticker: N,
          description: m
        }) => {
          y({
            name: k,
            ticker: N,
            description: m
          }), await $(l), a.value = {
            [z.ICON]: !0,
            [z.TICKER]: !0,
            [z.NAME]: !0,
            [z.DESCRIPTION]: !0
          }, o.value = !0, s.value = !1
        }, y = l => {
          Object.entries(l).forEach(([k, N]) => {
            const m = v.value.find(({
              key: _
            }) => _ === k);
            m !== void 0 && (m.value = N)
          })
        }, Y = l => {
          H().memepad.memepadJettonSelectJettonIcon({
            flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
            aiPowered: !1
          }), c.value.iconFileKey = l
        }, $ = async l => {
          var N;
          const k = await st(l);
          q(k) ? ((N = r.value) == null || N.selectFile(k.data), H().memepad.memepadJettonSelectJettonIcon({
            flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
            aiPowered: !0
          })) : me().error(A("memepad.new.ai_generate.load_image_error"))
        }, u = () => {
          s.value = !1
        };
      return (l, k) => {
        const N = Ie,
          m = Nn,
          _ = Xe,
          f = Ae,
          K = _e,
          J = Pe,
          Q = Bn;
        return d(), b("div", Dn, [w(N, {
          "step-number": l.stepNumber,
          step: e(O).TOKEN_INFO
        }, null, 8, ["step-number", "step"]), w(m, {
          ref: "avatar",
          "model-value": e(c).iconFileKey,
          "onUpdate:modelValue": Y
        }, null, 8, ["model-value"]), w(_, {
          modelValue: e(v),
          "onUpdate:modelValue": k[0] || (k[0] = Z => Ne(v) ? v.value = Z : null),
          onChannel: k[1] || (k[1] = Z => T.value = Z)
        }, null, 8, ["modelValue"]), w(J, null, {
          default: V(() => [E("div", Yn, [w(f, {
            pending: e(s),
            "once-generated": e(o),
            "analytics-type": l.state.stepAiAgent.aiAgentEnable ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in l ? l.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in l ? l.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in l ? l.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(x)).TOKEN_INFO,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in l ? l.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e(ve)).IMAGE_GENERATION,
            onClick: S
          }, null, 8, ["pending", "once-generated", "analytics-type", "analytics-page", "analytics-stage"]), w(K, {
            label: ("t" in l ? l.t : e(A))("base.continue"),
            fill: "",
            disabled: !e(R),
            tertiary: "",
            size: e(le).LARGE,
            onClick: C
          }, null, 8, ["label", "disabled", "size"])])]),
          _: 1
        }), w(Q, {
          ref: "generate-icon-sheet",
          "with-ai": l.state.stepAiAgent.aiAgentEnable,
          onSelect: G,
          onClose: u
        }, null, 8, ["with-ai"])])
      }
    }
  }), Wn = M($n, [
    ["__scopeId", "data-v-292758a7"]
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
  }, De = 10, jn = F({
    __name: "Banner",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(i, {
      expose: n
    }) {
      const t = ne(i, "modelValue"),
        p = ie("file-uploader"),
        r = () => {
          var c;
          return (c = p.value) == null ? void 0 : c.triggerFileUpload()
        },
        g = P(),
        s = h(() => {
          if (g.value && g.value.status === Re.UPLOADING) return g.value.localUrl;
          if (t.value) return Ye(t.value)
        });
      return n({
        selectFile: c => {
          var a;
          (a = p.value) == null || a.onFileSelected(c)
        }
      }), (c, a) => {
        var C;
        const v = be,
          T = ze,
          R = tt;
        return d(), b("div", zn, [w(v, {
          title: ("t" in c ? c.t : e(A))("memepad.new.step_token_info.field_banner.label"),
          "is-optional": "",
          class: "heading"
        }, null, 8, ["title"]), t.value ? (d(), b("div", {
          key: 0,
          class: "banner is-uploaded",
          style: pe({
            backgroundImage: `url(${e(s)})`
          })
        }, [E("div", {
          class: "delete-btn",
          onClick: a[0] || (a[0] = S => t.value = void 0)
        }, a[4] || (a[4] = [E("img", {
          src: We,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))], 4)) : ((C = e(g)) == null ? void 0 : C.status) === e(Re).UPLOADING ? (d(), b("div", Hn, [w(T, {
          type: e($e).LIGHT,
          size: 16
        }, null, 8, ["type"]), E("div", Jn, U(("t" in c ? c.t : e(A))("memepad.new.step_token_info.field_banner.uploading")), 1)])) : (d(), b("div", {
          key: 2,
          class: "banner wait-upload",
          onClick: a[1] || (a[1] = S => r())
        }, [a[6] || (a[6] = E("img", {
          src: _t,
          alt: "Add"
        }, null, -1)), E("div", qn, [E("div", Zn, U(("t" in c ? c.t : e(A))("memepad.new.step_token_info.field_banner.description", {
          maxUploadSize: String(De)
        })), 1), a[5] || (a[5] = E("div", {
          class: "ratio"
        }, "361 × 119", -1))])])), w(R, {
          ref: "file-uploader",
          "hide-ui": "",
          "max-file-size-mb": De,
          accept: [e(oe).JPEG, e(oe).PNG, e(oe).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 361 / 119,
            borderRadius: 8
          },
          "onUpdate:progress": a[2] || (a[2] = S => g.value = S),
          onUploaded: a[3] || (a[3] = S => t.value = S.key)
        }, null, 8, ["accept"])])
      }
    }
  }), Qn = M(jn, [
    ["__scopeId", "data-v-e7cdbd52"]
  ]), xn = {
    class: "memepad-new-form-social-links-item"
  }, Xn = F({
    __name: "SocialLinksItem",
    props: se({
      meta: {},
      optional: {
        type: Boolean
      },
      caption: {}
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: se(["isValid", "delete"], ["update:modelValue"]),
    setup(i, {
      emit: n
    }) {
      const t = i,
        p = n,
        r = ne(i, "modelValue"),
        g = P([{
          type: Ee.STRING,
          key: t.meta.apiKey,
          value: h({
            get: () => r.value ?? "",
            set: o => r.value = o || void 0
          }),
          props: {
            placeholder: t.meta.placeholder,
            size: vt.COMPACT,
            caption: t.caption
          },
          validators: t.optional ? t.meta.skipUrlValidation ? {} : {
            url: {}
          } : {
            required: {}
          }
        }]),
        s = P();
      return Oe(() => {
        var o;
        return p("isValid", ((o = s.value) == null ? void 0 : o.isFormValid) ?? !1)
      }), (o, c) => {
        const a = be,
          v = Le,
          T = Xe;
        return d(), b("div", xn, [w(T, {
          modelValue: e(g),
          "onUpdate:modelValue": c[1] || (c[1] = R => Ne(g) ? g.value = R : null),
          onChannel: c[2] || (c[2] = R => s.value = R)
        }, At({
          [`${o.meta.apiKey}-label`]: V(() => [w(a, {
            "icon-name": o.meta.icon,
            title: o.meta.display,
            "is-optional": o.optional
          }, null, 8, ["icon-name", "title", "is-optional"])]),
          _: 2
        }, [o.optional ? {
          name: `${o.meta.apiKey}-after`,
          fn: V(() => [E("button", {
            type: "button",
            class: "delete-button reset",
            onClick: c[0] || (c[0] = R => o.$emit("delete"))
          }, [w(v, {
            name: "trash",
            class: "icon"
          })])]),
          key: "0"
        } : void 0]), 1032, ["modelValue"])])
      }
    }
  }), ea = M(Xn, [
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
  }, sa = F({
    __name: "SocialLinks",
    props: se({
      telegramRequired: {
        type: Boolean
      }
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: se(["isValid"], ["update:modelValue"]),
    setup(i, {
      emit: n
    }) {
      const t = St(),
        p = ne(i, "modelValue"),
        r = i,
        g = n,
        s = P([r.telegramRequired ? {
          provider: he.TELEGRAM,
          isValid: !1,
          optional: !1,
          caption: A("memepad.social_providers.telegram.ai_agent_caption")
        } : {
          provider: he.TELEGRAM,
          isValid: !1,
          optional: !0
        }]),
        o = h(() => Object.values(he).filter(v => !s.value.find(T => T.provider === v))),
        c = v => s.value.push({
          provider: v,
          isValid: !1,
          optional: !0
        }),
        a = v => {
          s.value.splice(v, 1)
        };
      return Oe(() => {
        const v = s.value.every(T => T.isValid);
        g("isValid", v)
      }), (v, T) => {
        const R = ea,
          C = Le;
        return d(), b("div", ta, [E("div", na, [w(gt, {
          name: "list-shuffle-transition"
        }, {
          default: V(() => [(d(!0), b(j, null, te(e(s), (S, G) => (d(), L(R, {
            key: S.provider,
            modelValue: p.value[S.provider],
            "onUpdate:modelValue": y => p.value[S.provider] = y,
            meta: e(t)[S.provider],
            optional: S.optional,
            caption: S.caption,
            class: "provider-input",
            onIsValid: y => S.isValid = y,
            onDelete: y => a(G)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "meta", "optional", "caption", "onIsValid", "onDelete"]))), 128))]),
          _: 1
        })]), w(Et, {
          name: "appear-from-right-transition"
        }, {
          default: V(() => [e(o).length > 0 ? (d(), b("div", aa, [w(C, {
            name: "plus",
            class: "plus-icon"
          }), E("div", oa, [(d(!0), b(j, null, te(e(o), S => (d(), b("div", {
            key: S,
            class: "provider"
          }, [w(C, {
            name: e(t)[S].icon,
            class: "provider-icon",
            onClick: G => c(S)
          }, null, 8, ["name", "onClick"])]))), 128))])])) : D("", !0)]),
          _: 1
        })])
      }
    }
  }), la = M(sa, [
    ["__scopeId", "data-v-09a28ccb"]
  ]), ia = {
    class: "kit-switch"
  }, ra = F({
    __name: "Switch",
    props: {
      modelValue: {
        type: Boolean
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(i) {
      const n = ne(i, "modelValue");
      return (t, p) => (d(), b("div", ia, [Te(E("input", {
        "onUpdate:modelValue": p[0] || (p[0] = r => n.value = r),
        type: "checkbox"
      }, null, 512), [
        [ft, n.value]
      ])]))
    }
  }), ca = M(ra, [
    ["__scopeId", "data-v-e0ffb56d"]
  ]), da = "data:image/webp;base64,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", ua = {
    class: "memepad-new-form-nsfw"
  }, pa = {
    class: "setting"
  }, ma = {
    class: "label"
  }, _a = F({
    __name: "NSFW",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(i) {
      const n = ne(i, "modelValue");
      return (t, p) => {
        const r = ca,
          g = Gt;
        return d(), b("div", ua, [E("div", pa, [E("div", ma, U(("t" in t ? t.t : e(A))("memepad.new.step_token_info.field_nsfw.label")), 1), w(r, {
          modelValue: n.value,
          "onUpdate:modelValue": p[0] || (p[0] = s => n.value = s)
        }, null, 8, ["modelValue"])]), w(g, {
          text: ("t" in t ? t.t : e(A))("memepad.new.step_token_info.field_nsfw.message"),
          image: e(da),
          class: "note",
          tertiary: ""
        }, null, 8, ["text", "image"])])
      }
    }
  }), va = M(_a, [
    ["__scopeId", "data-v-82a2ab70"]
  ]), Aa = {
    class: "body"
  }, ga = {
    class: "result"
  }, Ea = ["src"], fa = F({
    __name: "GenerateBannerSheet",
    props: {
      withAi: {
        type: Boolean
      },
      generationPrompt: {}
    },
    emits: ["close", "select"],
    setup(i, {
      expose: n,
      emit: t
    }) {
      const p = t,
        {
          fetchBanners: r,
          generateContentSheetState: g,
          hasResult: s,
          hide: o,
          isErrorVisible: c,
          isLoadingBarVisible: a,
          isRegenerateButtonVisible: v,
          isResultVisible: T,
          onResultItemLoad: R,
          resetGenerateContentSheetState: C,
          show: S
        } = ot(i.withAi),
        G = h(() => {
          if (s.value && g.value.loadStatus !== ue.ERROR) return A("memepad.new.ai_agent.select_banner")
        }),
        y = async () => {
          await r(i.generationPrompt.tokenDescription)
        }, Y = u => {
          o(), p("select", u), C()
        }, $ = () => {
          H().memepad.memepadJettonAiGenerationCancel({
            flowType: i.withAi ? I.AI : I.REGULAR,
            page: x.PERSONALIZE,
            stage: "image_choice"
          }), p("close"), C()
        };
      return ee(() => g.value.isSheetVisible, async u => {
        u && await r(i.generationPrompt.tokenDescription)
      }), n({
        show: S,
        hide: o
      }), (u, l) => {
        const k = at,
          N = Rt,
          m = xe,
          _ = Ae,
          f = qe;
        return d(), L(f, {
          modelValue: e(g).isSheetVisible,
          "onUpdate:modelValue": l[0] || (l[0] = K => e(g).isSheetVisible = K),
          title: e(G),
          "no-header-line": "",
          onClose: $
        }, {
          default: V(() => [E("div", Aa, [e(a) ? (d(), L(k, {
            key: 0
          })) : D("", !0), Te(E("div", ga, [(d(!0), b(j, null, te(e(g).result, (K, J) => (d(), L(N, {
            key: J,
            "banner-file-key": K.imageUrl,
            onLoad: () => e(R)(J),
            onClick: () => Y(K)
          }, null, 8, ["banner-file-key", "onLoad", "onClick"]))), 128))], 512), [
            [He, e(T)]
          ]), e(c) ? (d(), L(m, {
            key: 1
          }, {
            header: V(() => [E("img", {
              src: ("imgResolver" in u ? u.imgResolver : e(Ce))("special/big-pink-cross", "svg"),
              alt: "",
              class: "icon"
            }, null, 8, Ea)]),
            title: V(() => [Je(U(("t" in u ? u.t : e(A))("memepad.new.ai_agent.generation_failed_error")), 1)]),
            _: 1
          })) : D("", !0), e(v) ? (d(), L(_, {
            key: 2,
            "once-generated": "",
            class: "button-regenerate",
            "analytics-type": u.withAi ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in u ? u.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in u ? u.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in u ? u.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(x)).PERSONALIZE,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in u ? u.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e(ve)).FINAL_STAGE_OF_STEP,
            onClick: y
          }, null, 8, ["analytics-type", "analytics-page", "analytics-stage"])) : D("", !0)])]),
          _: 1
        }, 8, ["modelValue", "title"])
      }
    }
  }), Ta = M(fa, [
    ["__scopeId", "data-v-a4472d25"]
  ]), Na = {
    class: "memepad-new-step-personalize-token"
  }, ba = {
    class: "buttons"
  }, Ia = F({
    __name: "PersonalizeToken",
    props: {
      state: {},
      stepNumber: {}
    },
    emits: ["continue", "update"],
    setup(i, {
      emit: n
    }) {
      const t = i,
        p = n,
        r = ie("banner"),
        g = ie("generate-banner-sheet"),
        s = P(!1),
        o = P(!1),
        c = P(!1),
        a = P({
          ...t.state.stepPersonalizeToken
        }),
        v = P({
          [z.BANNER]: !1
        });
      ee(a, (l, k) => {
        [
          ["bannerFileKey", z.BANNER]
        ].forEach(([m, _]) => {
          l[m] !== k[m] && v.value[_] && (H().memepad.memepadJettonGenerationContentUpdate({
            flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
            page: x.PERSONALIZE,
            contentType: _
          }), v.value[_] = !1)
        })
      });
      const T = h(() => t.state.stepAiAgent.aiAgentEnable),
        R = h(() => t.state.stepTokenInfo.description),
        C = h(() => ({
          tokenDescription: R.value
        })),
        S = () => p("continue", a.value),
        G = () => {
          var l;
          s.value = !0, (l = g.value) == null || l.show()
        },
        y = async ({
          imageUrl: l
        }) => {
          await u(l), o.value = !0, s.value = !1
        }, Y = () => {
          s.value = !1
        }, $ = l => {
          H().memepad.memepadJettonSelectJettonBanner({
            flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
            aiPowered: !1
          }), a.value.bannerFileKey = l
        }, u = async l => {
          var N;
          const k = await st(l);
          q(k) ? ((N = r.value) == null || N.selectFile(k.data), H().memepad.memepadJettonSelectJettonBanner({
            flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
            aiPowered: !1
          })) : me().error(A("memepad.new.ai_generate.load_image_error")), v.value = {
            [z.BANNER]: !0
          }
        };
      return Oe(() => {
        p("update", a.value)
      }), (l, k) => {
        const N = Ie,
          m = Qn,
          _ = la,
          f = va,
          K = Ae,
          J = _e,
          Q = Pe,
          Z = Ta;
        return d(), b("div", Na, [w(N, {
          "step-number": l.stepNumber,
          step: e(O).PERSONALIZE_TOKEN
        }, null, 8, ["step-number", "step"]), w(m, {
          ref: "banner",
          "model-value": e(a).bannerFileKey,
          "onUpdate:modelValue": $
        }, null, 8, ["model-value"]), w(_, {
          modelValue: e(a).socialProviders,
          "onUpdate:modelValue": k[0] || (k[0] = B => e(a).socialProviders = B),
          "telegram-required": e(T),
          onIsValid: k[1] || (k[1] = B => c.value = B)
        }, null, 8, ["modelValue", "telegram-required"]), w(f, {
          modelValue: e(a).isNSFW,
          "onUpdate:modelValue": k[2] || (k[2] = B => e(a).isNSFW = B)
        }, null, 8, ["modelValue"]), w(Q, null, {
          default: V(() => [E("div", ba, [w(K, {
            pending: e(s),
            "once-generated": e(o),
            "analytics-type": l.state.stepAiAgent.aiAgentEnable ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in l ? l.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in l ? l.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).REGULAR,
            "analytics-page": ("ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE" in l ? l.ANALYTICS_TOKEN_GENERATE_CONTENT_PAGE : e(x)).PERSONALIZE,
            "analytics-stage": ("ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE" in l ? l.ANALYTICS_TOKEN_GENERATE_AGAIN_STAGE : e(ve)).IMAGE_GENERATION,
            onClick: G
          }, null, 8, ["pending", "once-generated", "analytics-type", "analytics-page", "analytics-stage"]), w(J, {
            label: ("t" in l ? l.t : e(A))("base.continue"),
            fill: "",
            tertiary: "",
            size: e(le).LARGE,
            disabled: !e(c),
            onClick: S
          }, null, 8, ["label", "size", "disabled"])])]),
          _: 1
        }), w(Z, {
          ref: "generate-banner-sheet",
          "generation-prompt": e(C),
          "with-ai": l.state.stepAiAgent.aiAgentEnable,
          onSelect: y,
          onClose: Y
        }, null, 8, ["generation-prompt", "with-ai"])])
      }
    }
  }), ha = M(Ia, [
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
  }, ka = {
    key: 1,
    class: "title"
  }, Ca = {
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
  }, Ma = F({
    __name: "NewPriceDetails",
    props: {
      withShare: {
        type: Boolean
      },
      reviewInfo: {}
    },
    setup(i) {
      const n = Tt(() => !1, "$xfInVJFPmx");
      return (t, p) => {
        const r = Le,
          g = Dt;
        return d(), b("div", wa, [E("button", {
          type: "button",
          class: "reset header-button",
          onClick: p[0] || (p[0] = s => n.value = !e(n))
        }, [E("div", Sa, [t.reviewInfo.error ? (d(), b("div", Ra, [t.reviewInfo.error.type === ("MEMEPAD_SHARE_ERRORS" in t ? t.MEMEPAD_SHARE_ERRORS : e(nt)).NOT_ENOUGH_TOKEN ? (d(), L(r, {
          key: 0,
          name: "wallet",
          class: "icon icon-wallet"
        })) : (d(), L(r, {
          key: 1,
          name: "circle-warning",
          class: "icon icon-circle"
        })), E("div", ya, U(t.reviewInfo.error.message), 1)])) : (d(), b("div", ka, U(t.reviewInfo.feesInfo.total.title), 1))]), w(r, {
          name: "arrow-caret-down-md",
          class: "icon"
        })]), e(n) ? (d(), b(j, {
          key: 0
        }, [p[1] || (p[1] = E("div", {
          class: "divider"
        }, null, -1)), (d(!0), b(j, null, te(t.reviewInfo.feesInfo.sections, s => (d(), b("div", {
          key: s.title,
          class: "row"
        }, [E("div", Ca, [E("div", Oa, U(s.title), 1), s.badge ? (d(), b("div", La, U(s.badge.label), 1)) : D("", !0)]), E("div", Pa, [s.tooltip ? (d(), L(g, Se({
          key: 0,
          ref_for: !0
        }, s.tooltip.props), {
          default: V(() => [w(r, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: V(() => [E("div", Ga, ["details" in s.tooltip ? (d(!0), b(j, {
            key: 0
          }, te(s.tooltip.details, o => (d(), b(j, {
            key: o.label
          }, [!o.value.isZero() || o.highlight ? (d(), b("span", {
            key: 0,
            class: fe(["details", {
              highlighted: o.highlight
            }])
          }, U(o.label), 3)) : D("", !0)], 64))), 128)) : (d(), b("span", {
            key: 1,
            class: fe({
              highlighted: s.tooltip.highlight
            })
          }, U(s.tooltip.label), 3))])]),
          _: 2
        }, 1040)) : D("", !0), E("span", Fa, U(s.label), 1)])]))), 128))], 64)) : D("", !0)])
      }
    }
  }), Ua = M(Ma, [
    ["__scopeId", "data-v-9cc2bad6"]
  ]), Va = {
    class: "header"
  }, Ka = {
    class: "content"
  }, Ba = {
    class: "inner"
  }, Da = {
    class: "input-wrapper"
  }, Ya = {
    class: "subtitle"
  }, $a = {
    key: 1,
    class: "label"
  }, Wa = {
    class: "buttons"
  }, za = {
    class: "controls"
  }, Ha = F({
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
    setup(i, {
      emit: n
    }) {
      const t = i,
        p = n,
        r = P(t.state.stepReview.overview ? {
          status: "loaded",
          share: t.state.stepReview.share,
          overview: t.state.stepReview.overview
        } : {
          status: "loading",
          share: t.state.stepReview.share
        }),
        g = P(!1),
        s = P(),
        o = h(() => r.value.status === "loading" || g.value),
        c = h(() => {
          var u;
          return !o.value && !!((u = T.value) != null && u.error)
        }),
        a = h({
          get: () => new Ue(r.value.share).toFixed(),
          set: u => r.value.share = +Ft(u).toFixed()
        }),
        v = u => t.launchControls.getReviewInfo({
          jettonTicker: t.state.stepTokenInfo.ticker,
          share: r.value.share,
          withAiAgent: t.state.stepAiAgent.aiAgentEnable,
          overview: u
        }),
        T = h(() => r.value.status === "loaded" ? v(r.value.overview) : void 0);
      ee(() => {
        var u;
        return (u = T.value) == null ? void 0 : u.error
      }, u => {
        u && H().memepad.memepadJettonLaunchReviewShareInputError({
          flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
          reason: u.type
        })
      });
      const R = Ve(u => H().memepad.memepadJettonLaunchReviewShareInputUpdate({
        flowType: t.state.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
        value: u
      }), 300).debouncedFunction;
      ee(() => r.value.share, R);
      const C = h(() => !T.value || !t.balances.tokenBalance ? !1 : t.balances.tokenBalance.value.gte(T.value.feesInfo.total.value)),
        S = ({
          tokenBalance: u,
          overview: l
        }) => {
          H().memepad.memepadLaunchJettonReviewStepMaxButtonClick();
          const k = t.launchControls.getMaxShareAmount({
            tokenBalance: u,
            overview: l
          });
          a.value = k.toFixed()
        },
        G = () => {
          var u;
          return (u = s.value) == null ? void 0 : u.focusOnInput()
        },
        y = async () => {
          var u;
          !C.value || g.value || (u = T.value) != null && u.error || (g.value = !0, await (async () => {
            const l = await (async () => {
              if (r.value.status === "loaded") return {
                share: +r.value.share,
                overview: r.value.overview
              };
              const f = await t.launchControls.getJettonOverview({
                tons: r.value.share
              });
              if (q(f)) return {
                share: +r.value.share,
                overview: f.data
              }
            })();
            if (!l) return me().success(A("memepad.jetton.new.error_alert"));
            const k = l,
              N = {
                step: O.REVIEW,
                stepAiAgent: t.state.stepAiAgent,
                stepTokenInfo: t.state.stepTokenInfo,
                stepPersonalizeToken: t.state.stepPersonalizeToken,
                stepReview: k
              },
              m = yt(N),
              _ = await t.launchCallback(m);
            q(_) ? p("continue", _.data) : me().success(A("memepad.jetton.new.error_alert"))
          })(), g.value = !1)
        }, Y = async () => {
          const u = r.value.share,
            l = await t.launchControls.getJettonOverview({
              tons: u
            });
          !new Ue(u).eq(r.value.share) || !q(l) || (r.value = {
            status: "loaded",
            share: u,
            overview: l.data
          }, p("update", {
            share: u,
            overview: q(l) ? l.data : void 0
          }))
        }, {
          debouncedFunction: $
        } = Ve(Y, 200);
      return ee(() => r.value.share, () => {
        r.value.status = "loading", $()
      }), ke(() => {
        r.value.status !== "loaded" && Y()
      }), (u, l) => {
        const k = Ie,
          N = be,
          m = Mt,
          _ = Qe,
          f = _e,
          K = Ua,
          J = Ut,
          Q = Vt,
          Z = Kt;
        return d(), L(Z, {
          class: "memepad-new-step-review"
        }, {
          top: V(() => [E("div", Va, [w(k, {
            "step-number": u.stepNumber,
            step: e(O).REVIEW
          }, null, 8, ["step-number", "step"])])]),
          default: V(() => [E("div", Ka, [w(N, {
            title: ("t" in u ? u.t : e(A))("memepad.holders.list_item.your_share"),
            "is-optional": ""
          }, null, 8, ["title"]), E("div", Ba, [E("div", Da, [w(m, {
            ref_key: "actionControlsInputComp",
            ref: s,
            modelValue: e(a),
            "onUpdate:modelValue": l[0] || (l[0] = B => Ne(a) ? a.value = B : null),
            postfix: "TON",
            modifier: B => ("formatFloatLine" in u ? u.formatFloatLine : e(Nt))(B, {
              join: "emptyFractional"
            }),
            onBlur: G
          }, null, 8, ["modelValue", "modifier"]), E("div", Ya, [e(T) ? (d(), b("span", $a, U(e(T).subtitle), 1)) : (d(), L(_, {
            key: 0,
            class: "skeleton"
          }))])]), E("div", Wa, [u.balances.tokenBalance && e(r).overview ? (d(), L(f, {
            key: 0,
            type: e(de).SECONDARY,
            size: e(le).MEDIUM,
            onClick: l[1] || (l[1] = B => S({
              tokenBalance: u.balances.tokenBalance,
              overview: e(r).overview
            }))
          }, {
            default: V(() => l[2] || (l[2] = [E("div", {
              class: "label"
            }, "MAX", -1)])),
            _: 1
          }, 8, ["type", "size"])) : D("", !0)])])])]),
          "bottom-action": V(() => [E("div", za, [e(T) ? (d(), L(K, {
            key: 0,
            "with-share": !!e(r).share,
            "review-info": e(T)
          }, null, 8, ["with-share", "review-info"])) : (d(), L(_, {
            key: 1,
            class: "price-details-skeleton"
          })), w(Q, null, {
            default: V(() => {
              var B, W, ae;
              return [((W = (B = e(T)) == null ? void 0 : B.error) == null ? void 0 : W.type) === e(nt).NOT_ENOUGH_TOKEN ? (d(), L(J, {
                key: 0,
                details: e(T).error.details,
                source: ("ANALYTICS_MEMEPAD_OPERATION_SOURCE" in u ? u.ANALYTICS_MEMEPAD_OPERATION_SOURCE : e(je)).LAUNCH,
                "flow-type": u.state.stepAiAgent.aiAgentEnable ? ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in u ? u.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).AI : ("ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE" in u ? u.ANALYTICS_LAUNCH_TOKEN_FLOW_TYPE : e(I)).REGULAR,
                "value-balance": (ae = u.balances.tokenBalance) == null ? void 0 : ae.value.toNumber(),
                "input-value": e(r).share
              }, null, 8, ["details", "source", "flow-type", "value-balance", "input-value"])) : (d(), L(f, {
                key: 1,
                label: ("t" in u ? u.t : e(A))("memepad.new.step_review.launch_btn"),
                loading: e(o),
                disabled: e(c),
                fill: "",
                size: e(le).LARGE,
                type: e(c) ? e(de).PRIMARY : e(de).DROP,
                tertiary: e(c),
                onClick: y
              }, null, 8, ["label", "loading", "disabled", "size", "type", "tertiary"]))]
            }),
            _: 1
          })])]),
          _: 1
        })
      }
    }
  }), Ja = M(Ha, [
    ["__scopeId", "data-v-24380128"]
  ]), qa = {
    class: "memepad-new"
  }, Za = F({
    __name: "New",
    props: {
      withAgent: {
        type: Boolean,
        default: !1
      }
    },
    setup(i) {
      const n = i,
        t = H(),
        {
          useWalletOperationsErrorsStack: p,
          getNetworkTokenBalance: r,
          addresses: g
        } = et(),
        {
          popRetryPayload: s
        } = we(),
        o = h(() => {
          var m;
          return (m = bt().getters.getUser.value) == null ? void 0 : m.referrerToken
        }),
        c = s(),
        a = P(c ? kt(c, n.withAgent) : n.withAgent ? {
          step: O.TOKEN_INFO,
          stepAiAgent: X.stepAiAgentEnabled(),
          stepTokenInfo: X.stepTokenInfo(),
          stepPersonalizeToken: X.stepPersonalizeToken(),
          stepReview: X.stepReview()
        } : {
          step: O.TOKEN_INFO,
          stepAiAgent: X.stepAiAgentDisabled(),
          stepTokenInfo: X.stepTokenInfo(),
          stepPersonalizeToken: X.stepPersonalizeToken(),
          stepReview: X.stepReview()
        }),
        v = h(() => {
          const m = [O.TOKEN_INFO, O.PERSONALIZE_TOKEN, O.REVIEW],
            _ = [O.TOKEN_INFO, O.PERSONALIZE_TOKEN, O.REVIEW],
            f = n.withAgent ? m : _;
          return {
            stepNumber: f.indexOf(a.value.step) + 1,
            countSteps: f.length
          }
        }),
        T = h(() => ({
          tokenBalance: a.value.stepTokenInfo.networkType ? r(a.value.stepTokenInfo.networkType) : void 0
        })),
        R = h(() => {
          if (!g.value) return;
          const m = a.value.stepTokenInfo.networkType;
          return Bt({
            balances: T.value,
            addresses: g.value,
            networkType: m,
            referrerToken: o.value
          })
        });
      (() => {
        c ? t.memepad.memepadJettonRetry({
          flowType: n.withAgent ? I.AI : I.REGULAR
        }) : n.withAgent ? t.memepad.memepadJettonStepAiAgent() : t.memepad.memepadJettonStepTokenInfo({
          flowType: n.withAgent ? I.AI : I.REGULAR
        })
      })();
      const S = (m, _) => {
          const f = {
            step: O.TOKEN_INFO,
            stepAiAgent: _,
            stepTokenInfo: m.stepTokenInfo,
            stepPersonalizeToken: m.stepPersonalizeToken,
            stepReview: m.stepReview
          };
          a.value = f, t.memepad.memepadJettonStepTokenInfo({
            flowType: n.withAgent ? I.AI : I.REGULAR
          })
        },
        G = (m, _) => {
          const f = {
            step: O.PERSONALIZE_TOKEN,
            stepAiAgent: m.stepAiAgent,
            stepTokenInfo: _,
            stepPersonalizeToken: m.stepPersonalizeToken,
            stepReview: m.stepReview
          };
          a.value = f, t.memepad.memepadJettonStepPersonaliseToken({
            flowType: m.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR
          })
        },
        y = (m, _) => {
          const f = {
            step: O.REVIEW,
            stepAiAgent: m.stepAiAgent,
            stepTokenInfo: m.stepTokenInfo,
            stepPersonalizeToken: _,
            stepReview: m.stepReview
          };
          a.value = f, t.memepad.memepadJettonStepReview({
            flowType: n.withAgent ? I.AI : I.REGULAR
          })
        },
        Y = async m => {
          await ht(100), await ge().push({
            name: "memepad-new-launching-id",
            params: {
              id: m.queryId
            }
          })
        }, $ = (m, _) => {
          a.value = {
            ...m,
            stepReview: _
          }
        }, u = (m, _) => {
          a.value = {
            ...m,
            stepPersonalizeToken: _
          }
        };
      It().initHandler(() => {
        var _;
        const m = a.value;
        switch (m.step) {
          case O.AI_AGENT:
            ge().push({
              name: "memepad-new"
            });
            break;
          case O.TOKEN_INFO:
            (_ = g.value) != null && _.isAvailableAI ? ge().push({
              name: "memepad-new"
            }) : ge().push({
              name: "memepad"
            });
            break;
          case O.PERSONALIZE_TOKEN:
            a.value = {
              ...m,
              step: O.TOKEN_INFO
            };
            break;
          case O.REVIEW:
            a.value = {
              ...m,
              step: O.PERSONALIZE_TOKEN
            };
            break;
          default:
            throw ye("Invalid step")
        }
      }, "memepad-new");
      const {
        addErrorToStackAndCheck: l
      } = p(), {
        runLaunchStatusFetchingInBackground: k
      } = we(), N = m => async _ => {
        const f = await m.createJetton({
          form: _
        });
        return q(f) ? (k({
          payload: _,
          data: f.data,
          getWaitForCreateStatus: m.getWaitForCreateStatus
        }), Ze(f.data)) : (t.memepad.memepadJettonLaunchWalletUiError({
          flowType: a.value.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR,
          reason: f.extra && f.extra instanceof Error && f.extra instanceof wt ? "ton_connect_ui_error" : "other"
        }), l({
          name: _.name,
          ticker: _.ticker,
          description: _.description,
          iconFileKey: _.iconFileKey,
          socialProviders: _.socialProviders,
          bannerFileKey: _.bannerFileKey,
          isNSFW: _.isNSFW,
          networkType: _.networkType,
          share: _.share
        }, {
          source: je.LAUNCH,
          flowType: a.value.stepAiAgent.aiAgentEnable ? I.AI : I.REGULAR
        }), f)
      };
      return (m, _) => {
        const f = Wt,
          K = mn,
          J = Wn,
          Q = Pt,
          Z = ha,
          B = Ja;
        return d(), b("div", qa, [w(f, {
          step: e(v).stepNumber,
          "count-steps": e(v).countSteps
        }, null, 8, ["step", "count-steps"]), e(a).step === e(O).AI_AGENT ? (d(), L(K, {
          key: 0,
          "step-number": e(v).stepNumber,
          state: e(a),
          onContinue: _[0] || (_[0] = W => S(e(a), W))
        }, null, 8, ["step-number", "state"])) : e(a).step === e(O).TOKEN_INFO ? (d(), L(J, {
          key: 1,
          "step-number": e(v).stepNumber,
          state: e(a),
          onContinue: _[1] || (_[1] = W => G(e(a), W))
        }, null, 8, ["step-number", "state"])) : e(R) ? e(a).step === e(O).PERSONALIZE_TOKEN ? (d(), L(Z, {
          key: 3,
          state: e(a),
          "step-number": e(v).stepNumber,
          onUpdate: _[2] || (_[2] = W => u(e(a), W)),
          onContinue: _[3] || (_[3] = W => y(e(a), W))
        }, null, 8, ["state", "step-number"])) : e(a).step === e(O).REVIEW ? (d(), L(B, {
          key: 4,
          state: e(a),
          "step-number": e(v).stepNumber,
          balances: e(T),
          "launch-controls": e(R),
          "launch-callback": N(e(R)),
          onContinue: _[4] || (_[4] = W => Y(W)),
          onUpdate: _[5] || (_[5] = W => $(e(a), W))
        }, null, 8, ["state", "step-number", "balances", "launch-controls", "launch-callback"])) : D("", !0) : (d(), L(Q, {
          key: 2
        }))])
      }
    }
  }), co = M(Za, [
    ["__scopeId", "data-v-06a6859d"]
  ]);
export {
  co as _
};