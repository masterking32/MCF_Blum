var nt = Object.defineProperty;
var st = (n, e, t) => e in n ? nt(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : n[e] = t;
var I = (n, e, t) => st(n, typeof e != "symbol" ? e + "" : e, t);
import {
  _ as ot
} from "./Cqscaa7U.js";
import {
  d as ne,
  o as g,
  c as k,
  b as $,
  f as se,
  a3 as _,
  a4 as Y,
  a5 as b,
  W as X,
  T as ee,
  a6 as te,
  h as Me,
  K as L,
  a7 as rt,
  j as z,
  M as ve,
  a8 as it,
  a9 as We,
  Z as Ee,
  U as He,
  a as h,
  H as U,
  e as d,
  D as x,
  aa as Oe,
  n as ue,
  t as M,
  ab as at,
  F as W,
  q as Ae,
  ac as Ve,
  _ as Se,
  E as ct,
  z as y,
  G as S,
  m as ie,
  B as K,
  V as Q,
  p as je,
  a0 as De,
  l as Ye,
  O as Pe,
  ad as Re,
  ae as Ke,
  x as qe,
  af as Ce,
  ag as lt,
  ah as Fe,
  ai as ut,
  aj as dt,
  ak as _t,
  al as mt,
  P as pt,
  am as ft,
  X as Ie,
  g as $e,
  an as fe,
  $ as gt,
  Q as bt
} from "./1IBRWEJd.js";
import {
  _ as Ze
} from "./BOseS2KK.js";
import {
  _ as Xe
} from "./BZDX6LAZ.js";
const wt = {
    class: "pages-game-init"
  },
  ht = ne({
    __name: "GameInit",
    emits: ["resolve", "reject"],
    setup(n, {
      emit: e
    }) {
      return e("resolve"), (s, o) => {
        const r = ot;
        return g(), k("div", wt, [$(r, {
          fixed: ""
        })])
      }
    }
  }),
  yt = se(ht, [
    ["__scopeId", "data-v-36c68e5b"]
  ]),
  xe = {
    bomb: {
      idle: () => b(() => import("./D0AuTG3U.js"), [], import.meta.url),
      exp: () => b(() => import("./VAbkGEP8.js"), [], import.meta.url)
    },
    tsubasa: {
      idle: () => b(() => import("./CU-59Qi6.js"), [], import.meta.url),
      exp: () => b(() => import("./Bna8SNzr.js"), [], import.meta.url)
    },
    clover: {
      idle: () => b(() => import("./Bel49BDH.js"), [], import.meta.url),
      exp: () => b(() => import("./DAJbdhbu.js"), [], import.meta.url)
    },
    dogs: {
      idle: () => b(() => import("./u8-ubWQv.js"), [], import.meta.url),
      exp: () => b(() => import("./DmRr-UYS.js"), [], import.meta.url)
    },
    harris: {
      idle: () => b(() => import("./Cnlj7wz7.js"), [], import.meta.url),
      exp: () => b(() => import("./BN5w9tdX.js"), [], import.meta.url)
    },
    trump: {
      idle: () => b(() => import("./dWkHQbnT.js"), [], import.meta.url),
      exp: () => b(() => import("./CMBTH3PQ.js"), [], import.meta.url)
    },
    freeze: {
      idle: () => b(() => import("./DLvoNWfm.js"), [], import.meta.url),
      exp: () => b(() => import("./5K18VY8c.js"), [], import.meta.url)
    },
    pumpkin: {
      idle: () => b(() => import("./CICfhgoV.js"), [], import.meta.url),
      exp: () => b(() => import("./BiJxrlLa.js"), [], import.meta.url)
    },
    nyBomb1: {
      idle: () => b(() => import("./DDVtcpgK.js"), [], import.meta.url),
      exp: () => b(() => import("./CoNdEQvB.js"), [], import.meta.url)
    },
    nyBomb2: {
      idle: () => b(() => import("./lajrCipI.js"), [], import.meta.url),
      exp: () => b(() => import("./C3qpXbYu.js"), [], import.meta.url)
    },
    nyFreeze1: {
      idle: () => b(() => import("./CgL1RGSf.js"), [], import.meta.url),
      exp: () => b(() => import("./5Gv6NAaF.js"), [], import.meta.url)
    },
    nyItem1: {
      idle: () => b(() => import("./BbAq37Hf.js"), [], import.meta.url),
      exp: () => b(() => import("./MIko73Hg.js"), [], import.meta.url)
    },
    nyItem2: {
      idle: () => b(() => import("./DEWBxJFe.js"), [], import.meta.url),
      exp: () => b(() => import("./BR_CpXHw.js"), [], import.meta.url)
    },
    nyItem3: {
      idle: () => b(() => import("./dYA8D5TX.js"), [], import.meta.url),
      exp: () => b(() => import("./BbqGAQN1.js"), [], import.meta.url)
    },
    nyItem4: {
      idle: () => b(() => import("./C9ViuJQJ.js"), [], import.meta.url),
      exp: () => b(() => import("./NITIQQO8.js"), [], import.meta.url)
    },
    nyItem5: {
      idle: () => b(() => import("./BfLZaIBP.js"), [], import.meta.url),
      exp: () => b(() => import("./PsXdmjgd.js"), [], import.meta.url)
    },
    nyItem6: {
      idle: () => b(() => import("./D6jOitZo.js"), [], import.meta.url),
      exp: () => b(() => import("./BDm3zlNn.js"), [], import.meta.url)
    },
    nyItem7: {
      idle: () => b(() => import("./B6jzVdzv.js"), [], import.meta.url),
      exp: () => b(() => import("./JOkXg6lF.js"), [], import.meta.url)
    },
    nyItem8: {
      idle: () => b(() => import("./DyML_CFl.js"), [], import.meta.url),
      exp: () => b(() => import("./g4p-tenb.js"), [], import.meta.url)
    }
  },
  Ge = async n => {
    const e = async s => await new Promise(o => {
      const r = new Image;
      r.src = s, r.complete && o(r), r.onload = () => o(r)
    }), t = [...n.assets];
    return t.sort((s, o) => {
      const r = n.layers.find(l => l.refId === s.id),
        a = n.layers.find(l => l.refId === o.id);
      if (!r || !a) throw X("Layer not found");
      return a.ind - r.ind
    }), {
      fps: n.fr,
      countFrames: n.op - n.ip,
      frameDuration: 1e3 / n.fr,
      images: await Promise.all(t.map(s => e(s.p)))
    }
  }, J = async (n, e) => {
    const t = async i => {
      const [p, E] = await Promise.all([xe[i].idle(), xe[i].exp()]), [A, T] = await Promise.all([Ge(p), Ge(E)]);
      return [{
        lottie: [A, T],
        probability: 1
      }]
    }, s = async i => {
      const p = await Promise.all(i.map(A => t(A))),
        E = 1 / p.length;
      return p.map(A => ({
        lottie: A[0].lottie,
        probability: E
      }))
    }, o = async () => {
      switch (e) {
        case Y.HALLOWEEN:
          return await t("pumpkin");
        case Y.TSUBASA: {
          const i = await s(["clover", "tsubasa"]);
          return i[0].probability = .7, i[1].probability = .3, i
        }
        case Y.NEW_YEAR:
          return await s(["nyItem1", "nyItem2", "nyItem3", "nyItem4", "nyItem5", "nyItem6", "nyItem7", "nyItem8"]);
        default:
          return await t("clover")
      }
    }, r = async () => {
      switch (e) {
        case Y.NEW_YEAR:
          return await s(["nyBomb1", "nyBomb2"]);
        default:
          return await t("bomb")
      }
    }, a = async () => {
      switch (e) {
        case Y.NEW_YEAR:
          return await t("nyFreeze1");
        default:
          return await t("freeze")
      }
    };
    return await {
      [_.CLOVER]: o, [_.FREEZE]: a, [_.BOMB]: r, [_.DOGS]: () => t("dogs"), [_.TRUMP]: () => t("trump"), [_.HARRIS]: () => t("harris")
    } [n]()
  };
var Je = (n => (n.BP = "bp", n.DOGS = "dogs", n))(Je || {});
const vt = n => {
  let e = 0;
  return {
    getValue: () => e,
    update: o => {
      e = ee.max(new ee(e).plus(o), 0).toNumber()
    },
    point: n
  }
};
async function Et(n, e) {
  const t = [],
    s = {
      bp: {
        type: "bp",
        name: "Blum points",
        icon: "logo-token",
        logo: "bp-logo"
      },
      dogs: {
        type: "dogs",
        name: "Dogs",
        icon: "dogs-token",
        logo: "dogs-logo"
      }
    },
    o = ["bp", ...n[_.DOGS] ? ["dogs"] : []],
    r = o.reduce((E, A) => (E[A] = vt(s[A]), E), {}),
    a = o.map(E => s[E]).reverse(),
    l = Promise.resolve([{
      lottie: [{}, {}],
      probability: 1
    }]),
    i = await Promise.all([J(_.CLOVER, e), J(_.FREEZE, e), J(_.BOMB, e), ...n[_.DOGS] ? [J(_.DOGS, e)] : [l], ...n[_.TRUMP] ? [J(_.TRUMP, e)] : [l], ...n[_.HARRIS] ? [J(_.HARRIS, e)] : [l]]);
  t.push({
    assetType: _.CLOVER,
    probability: n[_.CLOVER].probability,
    lottie: i[0],
    pointType: "bp",
    clickValue: n[_.CLOVER].perClick
  }), t.push({
    assetType: _.FREEZE,
    probability: n[_.FREEZE].probability,
    lottie: i[1],
    freeze: !0
  });
  const p = () => {
    switch (e) {
      case Y.HALLOWEEN:
        return 10;
      default:
        return -100
    }
  };
  return t.push({
    assetType: _.BOMB,
    probability: n[_.BOMB].probability,
    lottie: i[2],
    pointType: "bp",
    bomb: !0,
    clickValue: p()
  }), n[_.DOGS] && t.push({
    assetType: _.DOGS,
    probability: n[_.DOGS].probability,
    lottie: i[3],
    pointType: "dogs",
    clickValue: n[_.DOGS].perClick
  }), n[_.TRUMP] && t.push({
    assetType: _.TRUMP,
    probability: n[_.TRUMP].probability,
    lottie: i[4],
    pointType: "bp",
    clickValue: n[_.TRUMP].perClick
  }), n[_.HARRIS] && t.push({
    assetType: _.HARRIS,
    probability: n[_.HARRIS].probability,
    lottie: i[5],
    pointType: "bp",
    clickValue: n[_.HARRIS].perClick
  }), {
    points: a,
    gameOptions: {
      assets: t,
      scoresMap: r
    }
  }
}
const At = n => Object.entries(n).reduce((t, [s, o]) => (t[s.toUpperCase()] = {
    amount: o.value
  }, t), {}),
  Rt = 30 * 1e3,
  kt = 3 * 1e3,
  It = .85,
  Qe = 275 * It,
  Tt = 350 - 1e3 / Qe,
  Ot = .45,
  ae = 8,
  ge = 10,
  be = -10,
  we = 6,
  ze = ae * 2,
  Be = .7,
  Pt = 500,
  Ue = {
    0: {
      speed: .9,
      asset: .7
    },
    1: {
      speed: 1,
      asset: 1
    },
    2: {
      speed: 1.1,
      asset: 1.3
    }
  },
  Lt = ({
    asset: n,
    score: e
  }, {
    freeze: t,
    bomb: s
  }) => {
    const o = n.clickValue || 0;
    return o && e && e.update(o), n.freeze && t(n), n.bomb && s(n), o
  },
  Mt = n => {
    const e = Math.random();
    let t = 0;
    const s = Object.values(n).find(a => (t += a.probability, e < t));
    if (!s) return;
    const o = s.lottie,
      r = (() => {
        const a = Math.random();
        let l = 0;
        for (const i of o)
          if (l += i.probability, a < l) return i.lottie
      })();
    if (r) return {
      lottie: {
        base: r[0],
        exp: r[1]
      },
      asset: s
    }
  },
  St = n => {
    const e = [],
      t = Math.min(n, Pt),
      s = (t - ze * (we - 1)) / (we + 2 * Be);
    let o = Be * s + (n - t) / 2;
    for (let r = 0; r < we; r++) {
      const a = o,
        l = a + s / 2,
        i = a + s;
      e.push({
        start: a,
        center: l,
        end: i
      }), o += s + ze
    }
    return {
      width: s,
      arr: e
    }
  },
  Dt = n => [...Array(we)].map(() => {
    if (!(Math.random() > Ot)) return Mt(n)
  });
class Vt {
  constructor(e, t, s) {
    I(this, "canvas");
    I(this, "ctx");
    I(this, "callbacks");
    I(this, "width");
    I(this, "height");
    I(this, "isStopped", !1);
    I(this, "frozenAt");
    I(this, "totalFreezeTime", 0);
    I(this, "columns");
    I(this, "objects", []);
    I(this, "pointsAnimation", []);
    I(this, "startedAt");
    I(this, "lastGenerationAt");
    I(this, "lastRenderAt");
    I(this, "resizeFn", this.resize.bind(this));
    I(this, "processTouchesFn", this.processTouches.bind(this));
    I(this, "pointerEvent", window.ontouchstart === null ? "touchstart" : "mousedown");
    I(this, "assets");
    I(this, "scoresMap");
    I(this, "theme");
    I(this, "assetClicks");
    this.canvas = e, this.callbacks = t, this.assets = s.assets, this.scoresMap = s.scoresMap, this.assetClicks = Object.fromEntries(s.assets.map(r => [r.assetType, {
      clicks: 0
    }])), this.theme = s.theme || Y.DEFAULT;
    const o = e.getContext("2d");
    if (!o) throw X("Canvas 2D context not supported");
    this.ctx = o, this.resize(), window.addEventListener("resize", this.resizeFn, {
      passive: !0
    }), this.canvas.addEventListener(this.pointerEvent, this.processTouchesFn, {
      passive: !0
    }), this.initAndRun()
  }
  destroy() {
    this.isStopped = !0, window.removeEventListener("resize", this.resizeFn), window.removeEventListener(this.pointerEvent, this.processTouchesFn)
  }
  msFromStart() {
    return performance.now() - this.startedAt
  }
  processTouches(e) {
    const t = (() => {
      if (e instanceof MouseEvent) return [{
        x: e.clientX,
        y: e.clientY
      }];
      if (e instanceof TouchEvent) return Array.from(e.touches).map(s => ({
        x: s.clientX,
        y: s.clientY
      }))
    })();
    !t || t.length === 0 || t.forEach(s => {
      const o = this.objects.find(r => r.rect === void 0 || r.isExplosion ? !1 : s.x > r.rect.x - ge && s.x < r.rect.x + r.rect.width + ge && s.y > r.rect.y - ge && s.y < r.rect.y + r.rect.height + ge);
      o && (o.onClick(o), o.isExplosion = !0, o.addedAt = performance.now())
    })
  }
  resize() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.width = window.innerWidth, this.height = window.innerHeight, this.canvas.width = this.width, this.canvas.height = this.height, this.columns = St(this.width)
  }
  getObjectRect(e, t, s) {
    const o = (() => {
        if (s) return t.top;
        const a = Ue[t.z].speed * Qe;
        return t.top + a * ((e - t.lastRenderAt) / 1e3)
      })(),
      r = {
        x: this.columns.arr[t.column].start + t.offset.x,
        y: o + t.offset.y,
        width: this.columns.width,
        height: this.columns.width
      };
    return {
      top: o,
      rect: r
    }
  }
  getImageRect(e, t) {
    const s = Ue[t].asset,
      o = e.width * s,
      r = e.height * s,
      a = (e.width - o) / 2,
      l = (e.height - r) / 2;
    return {
      x: e.x + a + be,
      y: e.y + l + be,
      width: o - be * 2,
      height: r - be * 2
    }
  }
  initAndRun() {
    this.ctx.imageSmoothingEnabled = !0, this.startedAt = performance.now(), this.step()
  }
  step() {
    if (this.isStopped) return;
    this.ctx.clearRect(0, 0, this.width, this.height);
    const e = performance.now();
    if (this.frozenAt && e - this.frozenAt > kt && (this.frozenAt = void 0, this.callbacks.onFreeze(!1)), this.frozenAt) this.totalFreezeTime += e - (this.lastRenderAt || e);
    else {
      const t = Rt - this.msFromStart() + this.totalFreezeTime;
      if (t <= 0) {
        this.destroy(), this.endGame();
        return
      }
      this.callbacks.timeLeft(t)
    }(!this.lastGenerationAt || this.msFromStart() - this.lastGenerationAt > Tt) && !this.frozenAt && (Dt(this.assets).forEach((t, s) => {
      if (!t) return;
      const {
        lottie: o,
        asset: r
      } = t;
      this.objects.push({
        asset: r,
        lottie: o,
        top: -1 * this.columns.width,
        z: te(0, 2),
        column: s,
        lastRenderAt: e,
        addedAt: e,
        offset: {
          x: te(-1 * ae, ae),
          y: te(-1 * ae, ae)
        },
        onClick: a => this.onObjClick(a),
        isExplosion: !1
      })
    }), this.objects.sort((t, s) => s.z - t.z), this.lastGenerationAt = this.msFromStart()), this.objects = this.objects.filter(t => {
      const {
        top: s,
        rect: o
      } = this.getObjectRect(e, t, !!this.frozenAt);
      if (t.top = s, t.rect = o, t.lastRenderAt = e, t.top > this.height) return !1;
      const r = (() => {
        const l = t.isExplosion ? t.lottie.exp : t.lottie.base,
          i = Math.floor((e - t.addedAt) / l.frameDuration);
        if (!(t.isExplosion && i >= l.countFrames)) return l.images[i % l.countFrames]
      })();
      if (r === void 0) return !1;
      const a = this.getImageRect(o, t.z);
      return this.ctx.drawImage(r, a.x, a.y, a.width, a.height), !0
    }), this.pointsAnimation = this.pointsAnimation.filter(t => {
      this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.font = "700 24px RoobertPro";
      const o = (e - t.addedAt) / 500;
      if (o >= 1) return !1;
      const r = 1 - o,
        a = this.columns.arr[t.column].center + t.offset.x,
        l = (() => {
          const p = t.top + t.offset.y,
            E = this.frozenAt ? p : p + 60,
            A = p - 40;
          if (o < .4) return p + (E - p) * (o / .4);
          const T = (o - .4) / (1 - .4);
          return E + (A - E) * T
        })();
      return t.points >= 0 ? (this.ctx.fillStyle = `rgba(234, 212, 12, ${r})`, this.ctx.fillText(`+${t.points}`, a, l)) : (this.ctx.fillStyle = `rgba(229, 57, 53, ${r})`, this.ctx.fillText(`${t.points}`, a, l)), !0
    }), this.lastRenderAt = e, requestAnimationFrame(this.step.bind(this))
  }
  endGame() {
    const e = Object.entries(this.scoresMap).reduce((s, [o, r]) => (s[o] = {
        value: r.getValue(),
        point: r.point
      }, s), {}),
      t = this.assetClicks;
    this.callbacks.onGameEnd({
      scores: e,
      assetClicks: t
    })
  }
  onObjClick(e) {
    var a;
    if (e.isExplosion) return;
    const t = e.asset.assetType;
    this.assetClicks[t] = {
      clicks: (((a = this.assetClicks[t]) == null ? void 0 : a.clicks) || 0) + 1
    };
    const s = performance.now(),
      o = e.asset.pointType && this.scoresMap[e.asset.pointType],
      r = Lt({
        asset: e.asset,
        score: o
      }, {
        freeze: () => this.onFreeze(s),
        bomb: l => this.bombCallback(l)
      });
    this.callbacks.objectClicked(e.asset, o == null ? void 0 : o.getValue()), this.pointsAnimation.push({
      points: r,
      column: e.column,
      top: e.top,
      offset: e.offset,
      addedAt: s
    })
  }
  onFreeze(e) {
    this.frozenAt = e, this.callbacks.onFreeze(!0)
  }
  bombCallback(e) {
    this.callbacks.onBomb(e)
  }
}
const Ct = {
    class: "canvas-wrapper"
  },
  Ft = {
    key: 0,
    class: "bomb"
  },
  $t = {
    key: 0,
    class: "freeze"
  },
  xt = {
    class: "overlays"
  },
  Gt = {
    class: "points"
  },
  zt = {
    class: "amount"
  },
  Bt = ne({
    __name: "GameProcess",
    props: {
      points: {
        type: Array,
        required: !0
      },
      gameOptions: {
        type: Object,
        required: !0
      }
    },
    emits: ["end"],
    setup(n, {
      emit: e
    }) {
      const t = n,
        s = e,
        o = Me().$webApp;
      let r;
      const a = L(),
        l = L(0),
        i = () => {
          const c = L(new ee(0)),
            f = L(!1),
            O = L(!1),
            m = L(!1),
            v = Ve(() => f.value = !1, 100).debouncedFunction,
            V = Ve(() => O.value = !1, 500).debouncedFunction;
          return {
            value: c,
            scaled: f,
            isBomb: O,
            frozen: m,
            scaleBack: v,
            bombBack: V
          }
        },
        p = rt(Object.values(t.points).reduce((c, f) => (c[f.type] = c[f.type] ?? i(), c), {})),
        E = L(!1),
        A = z(() => Object.values(p).some(c => c.isBomb)),
        T = z(() => Object.values(t.points).map(c => ({
          value: (() => {
            const f = p[c.type].value;
            if (c.type === Je.BP) return ve(f);
            const O = f.decimalPlaces();
            return it(f, {
              accuracy: O,
              rounding: ee.ROUND_DOWN
            })
          })(),
          icon: c.icon,
          scaled: p[c.type].scaled,
          bomb: p[c.type].isBomb
        })));
      return We(() => {
        if (setTimeout(() => Ee().blockOverflow(), 300), o.enableClosingConfirmation(), !a.value) throw X("Canvas not found");
        r = new Vt(a.value, {
          timeLeft: c => l.value = c,
          objectClicked: (c, f) => {
            c.pointType && f !== void 0 && (p[c.pointType].value = new ee(f), p[c.pointType].scaled = !0, p[c.pointType].scaleBack()), o.HapticFeedback.impactOccurred("heavy")
          },
          onGameEnd: c => {
            s("end", c)
          },
          onFreeze: c => {
            E.value = c
          },
          onBomb: c => {
            p[c.pointType].isBomb = !0, p[c.pointType].bombBack(), o.HapticFeedback.notificationOccurred("error")
          }
        }, t.gameOptions)
      }), He(() => {
        Ee().unblockOverflow(), o.disableClosingConfirmation(), r && r.destroy()
      }), (c, f) => {
        const O = Se;
        return g(), k("div", {
          class: ue(["pages-game-process", {
            "is-bomb": d(A)
          }])
        }, [h("div", Ct, [$(Oe, {
          name: "bomb-transition"
        }, {
          default: U(() => [d(A) ? (g(), k("div", Ft)) : x("", !0)]),
          _: 1
        }), h("canvas", {
          ref_key: "canvasRef",
          ref: a
        }, null, 512), $(Oe, {
          name: "freeze-transition",
          duration: 800
        }, {
          default: U(() => [d(E) ? (g(), k("div", $t)) : x("", !0)]),
          _: 1
        })]), h("div", xt, [h("div", {
          class: ue(["timer", {
            "is-frozen": d(E)
          }])
        }, M(("getMmSsFromMs" in c ? c.getMmSsFromMs : d(at))(d(l))), 3), h("div", Gt, [(g(!0), k(W, null, Ae(d(T), m => (g(), k("div", {
          key: m.icon,
          class: ue(["item", {
            "is-scaled": m.scaled,
            "is-bomb": m.bomb
          }])
        }, [$(O, {
          name: m.icon,
          class: "icon"
        }, null, 8, ["name"]), h("div", zt, M(m.value), 1)], 2))), 128))])])], 2)
      }
    }
  }),
  Ut = se(Bt, [
    ["__scopeId", "data-v-59de95b1"]
  ]),
  Nt = {
    class: "pages-game-reward-item"
  },
  Wt = {
    class: "icon-wrapper"
  },
  Ht = {
    class: "name"
  },
  jt = {
    class: "right"
  },
  Yt = {
    class: "value"
  },
  Kt = {
    key: 0,
    class: "description"
  },
  qt = ne({
    __name: "GameRewardItem",
    props: {
      logo: {},
      name: {},
      value: {},
      description: {}
    },
    setup(n) {
      return (e, t) => {
        const s = Se;
        return g(), k("div", Nt, [h("div", Wt, [$(s, {
          name: e.logo,
          class: "icon"
        }, null, 8, ["name"])]), h("div", Ht, M(e.name), 1), h("div", jt, [h("div", Yt, M(e.value), 1), e.description ? (g(), k("div", Kt, M(e.description), 1)) : x("", !0)])])
      }
    }
  }),
  Zt = se(qt, [
    ["__scopeId", "data-v-33b3b1eb"]
  ]),
  Xt = {
    class: "pages-game-end-with-rewards"
  },
  Jt = ["src"],
  Qt = {
    class: "content"
  },
  en = ["src"],
  tn = ["innerHTML"],
  nn = {
    class: "inner"
  },
  sn = {
    key: 0,
    class: "rewards"
  },
  on = {
    class: "list"
  },
  rn = {
    class: "rewards"
  },
  an = {
    key: 0,
    class: "title"
  },
  cn = {
    class: "list"
  },
  ln = {
    class: "buttons"
  },
  un = {
    class: "grid"
  },
  dn = {
    class: "label"
  },
  _n = ne({
    __name: "GameEndAdditional",
    props: {
      reward: {},
      message: {},
      asset: {},
      backgroundImage: {},
      playPasses: {},
      referralToken: {},
      scores: {},
      additionalRewardItems: {}
    },
    emits: ["playAgain"],
    setup(n) {
      const e = n,
        t = z(() => Object.values(e.scores).map(i => {
          const p = ct(new ee(i.value), i.point.type);
          return {
            logo: i.point.logo,
            name: i.point.name,
            value: p.defaultWithSymbol.toUpperCase()
          }
        })),
        s = z(() => t.value.map(i => i.value).join(` ${y("base.and")} `)),
        o = L(!1),
        r = z(() => `${y("game.end.share_text",{bp:s.value})}`),
        a = () => {
          De().game.shareWin(), Me().$webApp.shareLink(Ye().public.TELEGRAM_APP_URL, r.value)
        },
        l = () => {
          Pe().update(), Re().push({
            name: "wallet",
            query: {
              tab: "points"
            }
          })
        };
      return (i, p) => {
        var O, m;
        const E = Ze,
          A = Ke,
          T = Zt,
          c = qe,
          f = Xe;
        return g(), k("div", Xt, [i.backgroundImage ? (g(), k("img", {
          key: 0,
          src: i.backgroundImage,
          class: "bg-image"
        }, null, 8, Jt)) : (g(), S(E, {
          key: 1
        })), h("div", Qt, [i.asset ? (g(), k(W, {
          key: 0
        }, [i.asset.type === "lottie" ? (g(), S(A, {
          key: 0,
          name: i.asset.src,
          class: "animation"
        }, null, 8, ["name"])) : (g(), k("img", {
          key: 1,
          src: i.asset.src,
          class: "animation"
        }, null, 8, en))], 64)) : x("", !0), h("div", {
          class: "message",
          innerHTML: i.message
        }, null, 8, tn), h("div", nn, [(O = i.additionalRewardItems) != null && O.length ? (g(), k("div", sn, [h("div", on, [(g(!0), k(W, null, Ae(i.additionalRewardItems, v => (g(), S(T, Ce({
          key: v.name,
          ref_for: !0
        }, v), null, 16))), 128))])])) : x("", !0), h("div", rn, [(m = i.additionalRewardItems) != null && m.length ? (g(), k("div", an, M(("t" in i ? i.t : d(y))("game.end.total_earned_label")), 1)) : x("", !0), h("div", cn, [(g(!0), k(W, null, Ae(d(t), v => (g(), S(T, Ce({
          key: v.name,
          ref_for: !0
        }, v), null, 16))), 128))])])])]), h("div", ln, [h("div", un, [i.scores.bp.value && i.playPasses && i.playPasses > 4 ? (g(), S(c, {
          key: 0,
          type: d(K).SECONDARY,
          size: d(Q).LARGE,
          onClick: a
        }, {
          default: U(() => [ie(M(("t" in i ? i.t : d(y))("base.share")), 1)]),
          _: 1
        }, 8, ["type", "size"])) : (g(), S(c, {
          key: 1,
          type: d(K).SECONDARY,
          size: d(Q).LARGE,
          onClick: p[0] || (p[0] = v => o.value = !0)
        }, {
          default: U(() => [ie(M(("t" in i ? i.t : d(y))("game.end.additional.invite")), 1)]),
          _: 1
        }, 8, ["type", "size"])), $(c, {
          type: d(K).SECONDARY,
          size: d(Q).LARGE,
          onClick: p[1] || (p[1] = v => l())
        }, {
          default: U(() => [ie(M(("t" in i ? i.t : d(y))("game.end.additional.balance")), 1)]),
          _: 1
        }, 8, ["type", "size"])]), i.playPasses && i.playPasses > 0 ? (g(), S(c, {
          key: 0,
          size: d(Q).LARGE,
          class: "highlighted-btn",
          onClick: p[2] || (p[2] = v => i.$emit("playAgain"))
        }, {
          default: U(() => [h("span", dn, [h("span", null, M(`${("t"in i?i.t:d(y))("base.play")} (`), 1), p[5] || (p[5] = h("i", {
            class: "ticket"
          }, null, -1)), h("span", null, M(` ${("t"in i?i.t:d(y))("game.end.pp_left",{n:i.playPasses})})`), 1)])]),
          _: 1
        }, 8, ["size"])) : (g(), S(c, {
          key: 1,
          size: d(Q).LARGE,
          onClick: p[3] || (p[3] = () => i.$router.push({
            name: "index"
          }))
        }, {
          default: U(() => [ie(M(("t" in i ? i.t : d(y))("game.end.additional.return")), 1)]),
          _: 1
        }, 8, ["size"]))]), $(f, {
          modelValue: d(o),
          "onUpdate:modelValue": p[4] || (p[4] = v => je(o) ? o.value = v : null),
          "referral-token": i.referralToken
        }, null, 8, ["modelValue", "referral-token"])])
      }
    }
  }),
  mn = se(_n, [
    ["__scopeId", "data-v-81c1f8de"]
  ]),
  pn = ["src"],
  fn = {
    class: "content"
  },
  gn = ["src"],
  bn = ["innerHTML"],
  wn = {
    class: "reward"
  },
  hn = {
    class: "value"
  },
  yn = {
    class: "amount"
  },
  vn = {
    class: "amount-hidden"
  },
  En = {
    class: "amount"
  },
  An = {
    class: "description"
  },
  Rn = {
    class: "buttons"
  },
  kn = {
    key: 2,
    src: lt,
    class: "pokras-images"
  },
  In = ne({
    __name: "GameEnd",
    props: {
      reward: {},
      message: {},
      asset: {},
      backgroundImage: {},
      playPasses: {},
      referralToken: {}
    },
    emits: ["playAgain"],
    setup(n, {
      emit: e
    }) {
      const t = n,
        s = e,
        o = [],
        r = L("init"),
        a = L(null),
        l = L(null),
        i = {
          toCenter: {
            duration: 100,
            delay: 0
          }
        },
        p = () => {
          if (!a.value || !l.value) throw X("Points elements are not defined");
          const m = a.value,
            V = l.value.getBoundingClientRect(),
            F = () => {
              m.style.top = `${V.top}px`, m.style.right = `${V.left}px`, m.style.transition = `all ${i.toCenter.duration}ms ease`, r.value = "center-points"
            },
            B = () => {
              r.value = "final"
            },
            G = () => {
              m.style.position = "static"
            };
          o.push(setTimeout(F, i.toCenter.delay)), o.push(setTimeout(() => {
            B(), G()
          }, i.toCenter.duration + i.toCenter.delay))
        },
        E = Ee().internal.isPokrasTheme,
        A = L(!1),
        T = z(() => ve(t.reward)),
        c = z(() => `${y("game.end.share_text",{bp:T.value})} BP`),
        f = m => {
          const v = y("base.play"),
            V = Fe("i", {
              class: "ticket"
            }),
            F = y("game.end.pp_left", {
              n: m
            });
          return Fe("span", [v, " (", V, " ", F, ")"])
        },
        O = z(() => {
          const m = [];
          return t.reward && t.playPasses && t.playPasses > 4 && m.push({
            label: y("game.end.share_win"),
            type: E.value ? K.OUTLINE : K.SECONDARY,
            onClick: () => {
              De().game.shareWin(), Me().$webApp.shareLink(Ye().public.TELEGRAM_APP_URL, c.value)
            }
          }), t.playPasses && t.playPasses > 0 ? m.push({
            label: f(t.playPasses),
            type: K.PRIMARY,
            onClick: () => s("playAgain")
          }) : m.push({
            label: y("base.continue"),
            type: K.PRIMARY,
            onClick: () => {
              Re().push({
                name: "index"
              })
            }
          }), m
        });
      return We(() => {
        p()
      }), He(() => {
        o.forEach(m => clearTimeout(m))
      }), (m, v) => {
        const V = Ze,
          F = Ke,
          B = Se,
          G = qe,
          me = Xe;
        return g(), k("div", {
          class: ue(["pages-game-end", `animation-stage-${d(r)}`])
        }, [m.backgroundImage ? (g(), k("img", {
          key: 0,
          src: m.backgroundImage,
          class: "bg-image"
        }, null, 8, pn)) : (g(), S(V, {
          key: 1
        })), h("div", fn, [m.asset ? (g(), k(W, {
          key: 0
        }, [m.asset.type === "lottie" ? (g(), S(F, {
          key: 0,
          name: m.asset.src,
          class: "animation"
        }, null, 8, ["name"])) : (g(), k("img", {
          key: 1,
          src: m.asset.src,
          class: "animation"
        }, null, 8, gn))], 64)) : x("", !0), h("div", {
          class: "message",
          innerHTML: m.message
        }, null, 8, bn), h("div", wn, [h("div", hn, [h("div", {
          ref_key: "pointsEl",
          ref: a,
          class: ue(["animated-points visible", {
            "is-small": d(r) === "init"
          }])
        }, [$(B, {
          name: "logo-token",
          class: "token-img"
        }), h("div", yn, M(d(T)), 1), h("div", vn, M(d(T)), 1)], 2), h("div", {
          ref_key: "pointsHiddenEl",
          ref: l,
          class: "animated-points hidden"
        }, [$(B, {
          name: "logo-token",
          class: "token-img"
        }), h("div", En, M(d(T)), 1)], 512)]), h("div", An, M(("t" in m ? m.t : d(y))("base.rewards")), 1)])]), h("div", Rn, [(g(!0), k(W, null, Ae(d(O), (D, pe) => (g(), S(G, {
          key: pe,
          type: D.type,
          link: D.to,
          size: d(Q).LARGE,
          onClick: ke => D.onClick && D.onClick()
        }, {
          default: U(() => [typeof D.label == "string" ? (g(), k(W, {
            key: 0
          }, [ie(M(D.label), 1)], 64)) : (g(), S(ut(D.label), {
            key: 1
          }))]),
          _: 2
        }, 1032, ["type", "link", "size", "onClick"]))), 128))]), $(me, {
          modelValue: d(A),
          "onUpdate:modelValue": v[0] || (v[0] = D => je(A) ? A.value = D : null),
          "share-text": d(c),
          "referral-token": m.referralToken
        }, null, 8, ["modelValue", "share-text", "referral-token"]), d(E) ? (g(), k("img", kn)) : x("", !0)], 2)
      }
    }
  }),
  Tn = se(In, [
    ["__scopeId", "data-v-d95008e0"]
  ]),
  On = n => {
    const e = {
        101: [y("game.end.message.good.1"), y("game.end.message.good.2"), y("game.end.message.good.3"), y("game.end.message.good.4"), y("game.end.message.good.5")],
        51: [y("game.end.message.ok.1"), y("game.end.message.ok.2"), y("game.end.message.ok.3"), y("game.end.message.ok.4"), y("game.end.message.ok.5")],
        default: [y("game.end.message.default.1"), y("game.end.message.default.2"), y("game.end.message.default.3"), y("game.end.message.default.4"), y("game.end.message.default.5")]
      },
      t = {
        0: [y("game.end.message.zero.1")]
      },
      s = Object.keys(t).find(l => n === Number(l));
    if (s) return t[s][te(0, t[s].length - 1)];
    const {
      default: o,
      ...r
    } = e, a = Object.keys(r).sort((l, i) => Number(i) - Number(l)).find(l => n >= Number(l));
    return a ? r[a][te(0, r[a].length - 1)] : e.default[te(0, e.default.length - 1)]
  },
  Pn = () => dt(["animations/Unicorn", "animations/Lightning", "animations/PartyPopper", "animations/Firecracker", "animations/Collision"]);
let R;
const et = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && et.decode();
let ce = null;

function he() {
  return (ce === null || ce.byteLength === 0) && (ce = new Uint8Array(R.memory.buffer)), ce
}

function le(n, e) {
  return n = n >>> 0, et.decode(he().subarray(n, n + e))
}
const N = new Array(128).fill(void 0);
N.push(void 0, null, !0, !1);
let de = N.length;

function w(n) {
  de === N.length && N.push(N.length + 1);
  const e = de;
  return de = N[e], N[e] = n, e
}

function u(n) {
  return N[n]
}
let Z = 0;
const ye = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  Ln = typeof ye.encodeInto == "function" ? function(n, e) {
    return ye.encodeInto(n, e)
  } : function(n, e) {
    const t = ye.encode(n);
    return e.set(t), {
      read: n.length,
      written: t.length
    }
  };

function _e(n, e, t) {
  if (t === void 0) {
    const l = ye.encode(n),
      i = e(l.length, 1) >>> 0;
    return he().subarray(i, i + l.length).set(l), Z = l.length, i
  }
  let s = n.length,
    o = e(s, 1) >>> 0;
  const r = he();
  let a = 0;
  for (; a < s; a++) {
    const l = n.charCodeAt(a);
    if (l > 127) break;
    r[o + a] = l
  }
  if (a !== s) {
    a !== 0 && (n = n.slice(a)), o = t(o, s, s = a + n.length * 3, 1) >>> 0;
    const l = he().subarray(o + a, o + s),
      i = Ln(n, l);
    a += i.written, o = t(o, s, a, 1) >>> 0
  }
  return Z = a, o
}

function re(n) {
  return n == null
}
let j = null;

function P() {
  return (j === null || j.buffer.detached === !0 || j.buffer.detached === void 0 && j.buffer !== R.memory.buffer) && (j = new DataView(R.memory.buffer)), j
}

function Mn(n) {
  n < 132 || (N[n] = de, de = n)
}

function q(n) {
  const e = u(n);
  return Mn(n), e
}

function Le(n) {
  const e = typeof n;
  if (e == "number" || e == "boolean" || n == null) return `${n}`;
  if (e == "string") return `"${n}"`;
  if (e == "symbol") {
    const o = n.description;
    return o == null ? "Symbol" : `Symbol(${o})`
  }
  if (e == "function") {
    const o = n.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function"
  }
  if (Array.isArray(n)) {
    const o = n.length;
    let r = "[";
    o > 0 && (r += Le(n[0]));
    for (let a = 1; a < o; a++) r += ", " + Le(n[a]);
    return r += "]", r
  }
  const t = /\[object ([^\]]+)\]/.exec(toString.call(n));
  let s;
  if (t.length > 1) s = t[1];
  else return toString.call(n);
  if (s == "Object") try {
    return "Object(" + JSON.stringify(n) + ")"
  } catch {
    return "Object"
  }
  return n instanceof Error ? `${n.name}: ${n.message}
${n.stack}` : s
}

function Sn(n) {
  try {
    const o = R.__wbindgen_add_to_stack_pointer(-16),
      r = _e(n, R.__wbindgen_malloc, R.__wbindgen_realloc),
      a = Z;
    R.proof(o, r, a);
    var e = P().getInt32(o + 4 * 0, !0),
      t = P().getInt32(o + 4 * 1, !0),
      s = P().getInt32(o + 4 * 2, !0);
    if (s) throw q(t);
    return q(e)
  } finally {
    R.__wbindgen_add_to_stack_pointer(16)
  }
}

function Dn(n, e, t, s) {
  let o, r;
  try {
    const T = R.__wbindgen_add_to_stack_pointer(-16),
      c = _e(n, R.__wbindgen_malloc, R.__wbindgen_realloc),
      f = Z;
    R.pack(T, c, f, w(e), w(t), w(s));
    var a = P().getInt32(T + 4 * 0, !0),
      l = P().getInt32(T + 4 * 1, !0),
      i = P().getInt32(T + 4 * 2, !0),
      p = P().getInt32(T + 4 * 3, !0),
      E = a,
      A = l;
    if (p) throw E = 0, A = 0, q(i);
    return o = E, r = A, le(E, A)
  } finally {
    R.__wbindgen_add_to_stack_pointer(16), R.__wbindgen_free(o, r, 1)
  }
}

function C(n, e) {
  try {
    return n.apply(this, e)
  } catch (t) {
    R.__wbindgen_exn_store(w(t))
  }
}
async function Vn(n, e) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, e)
    } catch (s) {
      if (n.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
      else throw s
    }
    const t = await n.arrayBuffer();
    return await WebAssembly.instantiate(t, e)
  } else {
    const t = await WebAssembly.instantiate(n, e);
    return t instanceof WebAssembly.Instance ? {
      instance: t,
      module: n
    } : t
  }
}

function Cn() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbindgen_error_new = function(e, t) {
    const s = new Error(le(e, t));
    return w(s)
  }, n.wbg.__wbindgen_string_get = function(e, t) {
    const s = u(t),
      o = typeof s == "string" ? s : void 0;
    var r = re(o) ? 0 : _e(o, R.__wbindgen_malloc, R.__wbindgen_realloc),
      a = Z;
    P().setInt32(e + 4 * 1, a, !0), P().setInt32(e + 4 * 0, r, !0)
  }, n.wbg.__wbindgen_object_drop_ref = function(e) {
    q(e)
  }, n.wbg.__wbindgen_string_new = function(e, t) {
    const s = le(e, t);
    return w(s)
  }, n.wbg.__wbindgen_is_object = function(e) {
    const t = u(e);
    return typeof t == "object" && t !== null
  }, n.wbg.__wbindgen_is_string = function(e) {
    return typeof u(e) == "string"
  }, n.wbg.__wbindgen_is_bigint = function(e) {
    return typeof u(e) == "bigint"
  }, n.wbg.__wbindgen_bigint_from_u64 = function(e) {
    const t = BigInt.asUintN(64, e);
    return w(t)
  }, n.wbg.__wbindgen_jsval_eq = function(e, t) {
    return u(e) === u(t)
  }, n.wbg.__wbindgen_is_undefined = function(e) {
    return u(e) === void 0
  }, n.wbg.__wbindgen_in = function(e, t) {
    return u(e) in u(t)
  }, n.wbg.__wbg_crypto_1d1f22824a6a080c = function(e) {
    const t = u(e).crypto;
    return w(t)
  }, n.wbg.__wbg_process_4a72847cc503995b = function(e) {
    const t = u(e).process;
    return w(t)
  }, n.wbg.__wbg_versions_f686565e586dd935 = function(e) {
    const t = u(e).versions;
    return w(t)
  }, n.wbg.__wbg_node_104a2ff8d6ea03a2 = function(e) {
    const t = u(e).node;
    return w(t)
  }, n.wbg.__wbg_require_cca90b1a94a0255b = function() {
    return C(function() {
      const e = module.require;
      return w(e)
    }, arguments)
  }, n.wbg.__wbindgen_is_function = function(e) {
    return typeof u(e) == "function"
  }, n.wbg.__wbg_msCrypto_eb05e62b530a1508 = function(e) {
    const t = u(e).msCrypto;
    return w(t)
  }, n.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function() {
    return C(function(e, t) {
      u(e).randomFillSync(q(t))
    }, arguments)
  }, n.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function() {
    return C(function(e, t) {
      u(e).getRandomValues(u(t))
    }, arguments)
  }, n.wbg.__wbindgen_jsval_loose_eq = function(e, t) {
    return u(e) == u(t)
  }, n.wbg.__wbindgen_boolean_get = function(e) {
    const t = u(e);
    return typeof t == "boolean" ? t ? 1 : 0 : 2
  }, n.wbg.__wbindgen_number_get = function(e, t) {
    const s = u(t),
      o = typeof s == "number" ? s : void 0;
    P().setFloat64(e + 8 * 1, re(o) ? 0 : o, !0), P().setInt32(e + 4 * 0, !re(o), !0)
  }, n.wbg.__wbindgen_as_number = function(e) {
    return +u(e)
  }, n.wbg.__wbg_String_b9412f8799faab3e = function(e, t) {
    const s = String(u(t)),
      o = _e(s, R.__wbindgen_malloc, R.__wbindgen_realloc),
      r = Z;
    P().setInt32(e + 4 * 1, r, !0), P().setInt32(e + 4 * 0, o, !0)
  }, n.wbg.__wbindgen_number_new = function(e) {
    return w(e)
  }, n.wbg.__wbindgen_object_clone_ref = function(e) {
    const t = u(e);
    return w(t)
  }, n.wbg.__wbg_getwithrefkey_edc2c8960f0f1191 = function(e, t) {
    const s = u(e)[u(t)];
    return w(s)
  }, n.wbg.__wbg_set_f975102236d3c502 = function(e, t, s) {
    u(e)[q(t)] = q(s)
  }, n.wbg.__wbg_get_5419cf6b954aa11d = function(e, t) {
    const s = u(e)[t >>> 0];
    return w(s)
  }, n.wbg.__wbg_length_f217bbbf7e8e4df4 = function(e) {
    return u(e).length
  }, n.wbg.__wbg_newnoargs_1ede4bf2ebbaaf43 = function(e, t) {
    const s = new Function(le(e, t));
    return w(s)
  }, n.wbg.__wbg_next_13b477da1eaa3897 = function(e) {
    const t = u(e).next;
    return w(t)
  }, n.wbg.__wbg_next_b06e115d1b01e10b = function() {
    return C(function(e) {
      const t = u(e).next();
      return w(t)
    }, arguments)
  }, n.wbg.__wbg_done_983b5ffcaec8c583 = function(e) {
    return u(e).done
  }, n.wbg.__wbg_value_2ab8a198c834c26a = function(e) {
    const t = u(e).value;
    return w(t)
  }, n.wbg.__wbg_iterator_695d699a44d6234c = function() {
    return w(Symbol.iterator)
  }, n.wbg.__wbg_get_ef828680c64da212 = function() {
    return C(function(e, t) {
      const s = Reflect.get(u(e), u(t));
      return w(s)
    }, arguments)
  }, n.wbg.__wbg_call_a9ef466721e824f2 = function() {
    return C(function(e, t) {
      const s = u(e).call(u(t));
      return w(s)
    }, arguments)
  }, n.wbg.__wbg_new_e69b5f66fda8f13c = function() {
    const e = new Object;
    return w(e)
  }, n.wbg.__wbg_self_bf91bf94d9e04084 = function() {
    return C(function() {
      const e = self.self;
      return w(e)
    }, arguments)
  }, n.wbg.__wbg_window_52dd9f07d03fd5f8 = function() {
    return C(function() {
      const e = window.window;
      return w(e)
    }, arguments)
  }, n.wbg.__wbg_globalThis_05c129bf37fcf1be = function() {
    return C(function() {
      const e = globalThis.globalThis;
      return w(e)
    }, arguments)
  }, n.wbg.__wbg_global_3eca19bb09e9c484 = function() {
    return C(function() {
      const e = _t.global;
      return w(e)
    }, arguments)
  }, n.wbg.__wbg_instanceof_ArrayBuffer_74945570b4a62ec7 = function(e) {
    let t;
    try {
      t = u(e) instanceof ArrayBuffer
    } catch {
      t = !1
    }
    return t
  }, n.wbg.__wbg_call_3bfa248576352471 = function() {
    return C(function(e, t, s) {
      const o = u(e).call(u(t), u(s));
      return w(o)
    }, arguments)
  }, n.wbg.__wbg_isSafeInteger_b9dff570f01a9100 = function(e) {
    return Number.isSafeInteger(u(e))
  }, n.wbg.__wbg_entries_c02034de337d3ee2 = function(e) {
    const t = Object.entries(u(e));
    return w(t)
  }, n.wbg.__wbg_buffer_ccaed51a635d8a2d = function(e) {
    const t = u(e).buffer;
    return w(t)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_7e3eb787208af730 = function(e, t, s) {
    const o = new Uint8Array(u(e), t >>> 0, s >>> 0);
    return w(o)
  }, n.wbg.__wbg_new_fec2611eb9180f95 = function(e) {
    const t = new Uint8Array(u(e));
    return w(t)
  }, n.wbg.__wbg_set_ec2fcf81bc573fd9 = function(e, t, s) {
    u(e).set(u(t), s >>> 0)
  }, n.wbg.__wbg_length_9254c4bd3b9f23c4 = function(e) {
    return u(e).length
  }, n.wbg.__wbg_instanceof_Uint8Array_df0761410414ef36 = function(e) {
    let t;
    try {
      t = u(e) instanceof Uint8Array
    } catch {
      t = !1
    }
    return t
  }, n.wbg.__wbg_newwithlength_76462a666eca145f = function(e) {
    const t = new Uint8Array(e >>> 0);
    return w(t)
  }, n.wbg.__wbg_subarray_975a06f9dbd16995 = function(e, t, s) {
    const o = u(e).subarray(t >>> 0, s >>> 0);
    return w(o)
  }, n.wbg.__wbg_has_bd717f25f195f23d = function() {
    return C(function(e, t) {
      return Reflect.has(u(e), u(t))
    }, arguments)
  }, n.wbg.__wbindgen_bigint_get_as_i64 = function(e, t) {
    const s = u(t),
      o = typeof s == "bigint" ? s : void 0;
    P().setBigInt64(e + 8 * 1, re(o) ? BigInt(0) : o, !0), P().setInt32(e + 4 * 0, !re(o), !0)
  }, n.wbg.__wbindgen_debug_string = function(e, t) {
    const s = Le(u(t)),
      o = _e(s, R.__wbindgen_malloc, R.__wbindgen_realloc),
      r = Z;
    P().setInt32(e + 4 * 1, r, !0), P().setInt32(e + 4 * 0, o, !0)
  }, n.wbg.__wbindgen_throw = function(e, t) {
    throw new Error(le(e, t))
  }, n.wbg.__wbindgen_memory = function() {
    const e = R.memory;
    return w(e)
  }, n
}

function Fn(n, e) {
  return R = n.exports, tt.__wbindgen_wasm_module = e, j = null, ce = null, R
}
async function tt(n) {
  if (R !== void 0) return R;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("" + new URL("game_wasm_bg.Cu5SYoMx.wasm", import.meta.url).href, import.meta.url));
  const e = Cn();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: t,
    module: s
  } = await Vn(await n, e);
  return Fn(t, s)
}
const Ne = (n, e) => new Promise(t => {
    const s = mt(),
      o = r => {
        r.data.id === s && (t(r.data), n.removeEventListener("message", o))
      };
    n.addEventListener("message", o), n.postMessage({
      id: s,
      ...e
    })
  }),
  $n = () => new Worker(new URL("" + new URL("game-fBF26Hhn.js", import.meta.url).href, import.meta.url), {
    type: "module"
  });
let Te;
const xn = async () => {
  Te === void 0 && (Te = tt()), await Te
};
self.onmessage = async n => {
  await xn();
  const {
    id: e,
    method: t,
    payload: s
  } = n.data;
  switch (t) {
    case "proof": {
      const o = Sn(s);
      return self.postMessage({
        id: e,
        ...o
      })
    }
    case "pack": {
      const o = Dn(s.gameId, s.challenge, s.earnedPoints, s.assetClicks);
      return self.postMessage({
        id: e,
        hash: o
      })
    }
    default:
      throw X(`Unknown method: ${t}`)
  }
};
const Gn = {
    class: "game-page page"
  },
  zn = ne({
    __name: "game",
    setup(n) {
      const e = z(() => {
          var c;
          return (c = Pe().pointSymbols.value.pp) == null ? void 0 : c.balance.value.toNumber()
        }),
        t = L({
          stage: "LOADING"
        }),
        s = Ee(),
        o = $n(),
        r = L(),
        a = L(),
        l = L(),
        i = L(),
        p = async (c, {
          assetClicks: f,
          scores: O
        }) => {
          var me;
          const m = ((me = O.bp) == null ? void 0 : me.value) ?? 0,
            v = (() => {
              var pe, ke;
              const D = [];
              if (_.HARRIS in f && f[_.HARRIS]) {
                const oe = (pe = c.gameOptions.assets.find(H => H.assetType === _.HARRIS)) == null ? void 0 : pe.clickValue;
                if (oe !== void 0) {
                  const H = oe * f[_.HARRIS].clicks;
                  D.push({
                    logo: "harris",
                    name: "Harris",
                    value: String(f[_.HARRIS].clicks),
                    description: `(+${ve(H)} BP)`
                  })
                }
              }
              if (_.TRUMP in f && f[_.TRUMP]) {
                const oe = (ke = c.gameOptions.assets.find(H => H.assetType === _.TRUMP)) == null ? void 0 : ke.clickValue;
                if (oe !== void 0) {
                  const H = oe * f[_.TRUMP].clicks;
                  D.push({
                    logo: "trump",
                    name: "Trump",
                    value: String(f[_.TRUMP].clicks),
                    description: `(+${ve(H)} BP)`
                  })
                }
              }
              return D
            })(),
            V = !!v.length || Object.values(O).length > 1,
            F = ft(c.pow);
          if (!F) throw X("Proof of work is not calculated");
          t.value = {
            stage: "END",
            id: c.id,
            scores: O,
            bpReward: m,
            message: On(m),
            endWithRewards: V,
            additionalRewardItems: v
          };
          const B = await Ne(o, {
            method: "pack",
            payload: {
              gameId: t.value.id,
              challenge: F,
              earnedPoints: At(O),
              assetClicks: f
            }
          });
          if ((await Ie.claimGame(B.hash)).err) throw X("Failed to claim game");
          De().game.gameEnd(m)
        }, E = () => $e().warn("Rejected by turnstile"), A = async () => {
          t.value = {
            stage: "LOADING"
          }, r.value = void 0, i.value = void 0, s.internal.isTsubasaTheme.value ? (a.value = {
            type: "image",
            src: fe("tsubasa/drop-game-result-image", "webp")
          }, l.value = fe("tsubasa/drop-game-results-bg", "webp")) : s.internal.isNewYearTheme.value ? (a.value = {
            type: "image",
            src: fe("new-year/drop-game-result-image", "webp")
          }, l.value = fe("new-year/drop-game-background", "webp")) : a.value = {
            type: "lottie",
            src: Pn()
          };
          const c = await Ie.startGame();
          if (c.err) {
            c.message === "another game in progress" && gt().error(y("game.another_game_in_progress")), $e().warn("Failed to start game"), Re().push({
              name: "index"
            });
            return
          }
          const f = s.internal.theme.value,
            {
              points: O,
              gameOptions: m
            } = await Et(c.data.assets, f);
          t.value = {
            stage: "GAME",
            id: c.data.gameId,
            pow: void 0,
            points: O,
            gameOptions: m
          }, Ne(o, {
            method: "proof",
            payload: c.data.gameId
          }).then(v => {
            t.value.stage === "GAME" && (t.value.pow = v)
          }), Pe().update(), Ie.getFrensUsing().then(v => {
            v.err || (r.value = v.data)
          })
        }, T = z(() => {
          if (t.value.stage === "END") return () => Re().push({
            name: "index"
          })
        });
      return pt(T, c => bt().meta.back = c), (c, f) => {
        var F, B;
        const O = yt,
          m = Ut,
          v = mn,
          V = Tn;
        return g(), k("div", Gn, [d(t).stage === "LOADING" ? (g(), S(O, {
          key: 0,
          onResolve: f[0] || (f[0] = G => A()),
          onReject: f[1] || (f[1] = G => (A(), E()))
        })) : x("", !0), $(Oe, {
          name: "game-process-transition"
        }, {
          default: U(() => [d(t).stage === "GAME" ? (g(), S(m, {
            key: "game",
            points: d(t).points,
            "game-options": d(t).gameOptions,
            onEnd: f[2] || (f[2] = G => p(d(t), G))
          }, null, 8, ["points", "game-options"])) : x("", !0)]),
          _: 1
        }), d(t).stage === "END" ? (g(), k(W, {
          key: 1
        }, [d(t).endWithRewards ? (g(), S(v, {
          key: "game-end-with-rewards",
          reward: d(t).bpReward,
          scores: d(t).scores,
          message: d(t).message,
          asset: d(a),
          "background-image": d(l),
          "play-passes": d(e),
          "referral-token": (F = d(r)) == null ? void 0 : F.referralToken,
          "additional-reward-items": d(t).additionalRewardItems,
          onPlayAgain: f[3] || (f[3] = G => t.value = {
            stage: "LOADING"
          })
        }, null, 8, ["reward", "scores", "message", "asset", "background-image", "play-passes", "referral-token", "additional-reward-items"])) : (g(), S(V, {
          key: "game-end",
          reward: d(t).bpReward,
          message: d(t).message,
          asset: d(a),
          "background-image": d(l),
          "play-passes": d(e),
          "referral-token": (B = d(r)) == null ? void 0 : B.referralToken,
          onPlayAgain: f[4] || (f[4] = G => t.value = {
            stage: "LOADING"
          })
        }, null, 8, ["reward", "message", "asset", "background-image", "play-passes", "referral-token"]))], 64)) : x("", !0)])
      }
    }
  }),
  jn = se(zn, [
    ["__scopeId", "data-v-24f3880f"]
  ]);
export {
  jn as
  default
};