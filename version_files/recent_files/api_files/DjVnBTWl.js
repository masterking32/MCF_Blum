var st = Object.defineProperty;
var ot = (n, e, t) => e in n ? st(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : n[e] = t;
var I = (n, e, t) => ot(n, typeof e != "symbol" ? e + "" : e, t);
import {
  _ as rt
} from "./HKUPTPvZ.js";
import {
  d as ne,
  o as b,
  c as k,
  b as $,
  f as se,
  a3 as m,
  a4 as x,
  a5 as _,
  W as X,
  T as ee,
  a6 as te,
  h as Se,
  K as L,
  a7 as it,
  j as B,
  M as Ee,
  a8 as at,
  a9 as He,
  Z as ve,
  U as je,
  a as h,
  H as U,
  e as d,
  D as G,
  aa as Oe,
  n as de,
  t as S,
  ab as ct,
  F as H,
  q as Ae,
  ac as Ve,
  _ as De,
  E as lt,
  z as y,
  G as D,
  m as ae,
  B as K,
  V as Q,
  p as Ye,
  a0 as Me,
  l as Ke,
  O as Pe,
  ad as Re,
  ae as qe,
  x as Ze,
  af as Ce,
  ag as ut,
  ah as Fe,
  ai as dt,
  aj as _t,
  ak as mt,
  al as pt,
  P as ft,
  am as gt,
  X as Ie,
  g as xe,
  an as re,
  $ as bt,
  Q as wt
} from "./7B743EeA.js";
import {
  _ as Xe
} from "./CL_Pnd-8.js";
import {
  _ as Je
} from "./DBVuT0ZG.js";
const ht = {
    class: "pages-game-init"
  },
  yt = ne({
    __name: "GameInit",
    emits: ["resolve", "reject"],
    setup(n, {
      emit: e
    }) {
      return e("resolve"), (s, o) => {
        const r = rt;
        return b(), k("div", ht, [$(r, {
          fixed: ""
        })])
      }
    }
  }),
  Et = se(yt, [
    ["__scopeId", "data-v-36c68e5b"]
  ]),
  $e = {
    bomb: {
      idle: () => _(() => import("./D0AuTG3U.js"), [], import.meta.url),
      exp: () => _(() => import("./VAbkGEP8.js"), [], import.meta.url)
    },
    tsubasa: {
      idle: () => _(() => import("./CU-59Qi6.js"), [], import.meta.url),
      exp: () => _(() => import("./Bna8SNzr.js"), [], import.meta.url)
    },
    clover: {
      idle: () => _(() => import("./Bel49BDH.js"), [], import.meta.url),
      exp: () => _(() => import("./DAJbdhbu.js"), [], import.meta.url)
    },
    dogs: {
      idle: () => _(() => import("./u8-ubWQv.js"), [], import.meta.url),
      exp: () => _(() => import("./DmRr-UYS.js"), [], import.meta.url)
    },
    harris: {
      idle: () => _(() => import("./Cnlj7wz7.js"), [], import.meta.url),
      exp: () => _(() => import("./BN5w9tdX.js"), [], import.meta.url)
    },
    trump: {
      idle: () => _(() => import("./dWkHQbnT.js"), [], import.meta.url),
      exp: () => _(() => import("./CMBTH3PQ.js"), [], import.meta.url)
    },
    freeze: {
      idle: () => _(() => import("./DLvoNWfm.js"), [], import.meta.url),
      exp: () => _(() => import("./5K18VY8c.js"), [], import.meta.url)
    },
    pumpkin: {
      idle: () => _(() => import("./CICfhgoV.js"), [], import.meta.url),
      exp: () => _(() => import("./BiJxrlLa.js"), [], import.meta.url)
    },
    nyBomb1: {
      idle: () => _(() => import("./DDVtcpgK.js"), [], import.meta.url),
      exp: () => _(() => import("./CoNdEQvB.js"), [], import.meta.url)
    },
    nyBomb2: {
      idle: () => _(() => import("./lajrCipI.js"), [], import.meta.url),
      exp: () => _(() => import("./C3qpXbYu.js"), [], import.meta.url)
    },
    nyFreeze1: {
      idle: () => _(() => import("./CgL1RGSf.js"), [], import.meta.url),
      exp: () => _(() => import("./5Gv6NAaF.js"), [], import.meta.url)
    },
    nyItem1: {
      idle: () => _(() => import("./BbAq37Hf.js"), [], import.meta.url),
      exp: () => _(() => import("./MIko73Hg.js"), [], import.meta.url)
    },
    nyItem2: {
      idle: () => _(() => import("./DEWBxJFe.js"), [], import.meta.url),
      exp: () => _(() => import("./BR_CpXHw.js"), [], import.meta.url)
    },
    nyItem3: {
      idle: () => _(() => import("./dYA8D5TX.js"), [], import.meta.url),
      exp: () => _(() => import("./BbqGAQN1.js"), [], import.meta.url)
    },
    nyItem4: {
      idle: () => _(() => import("./C9ViuJQJ.js"), [], import.meta.url),
      exp: () => _(() => import("./NITIQQO8.js"), [], import.meta.url)
    },
    nyItem5: {
      idle: () => _(() => import("./BfLZaIBP.js"), [], import.meta.url),
      exp: () => _(() => import("./PsXdmjgd.js"), [], import.meta.url)
    },
    nyItem6: {
      idle: () => _(() => import("./D6jOitZo.js"), [], import.meta.url),
      exp: () => _(() => import("./BDm3zlNn.js"), [], import.meta.url)
    },
    nyItem7: {
      idle: () => _(() => import("./B6jzVdzv.js"), [], import.meta.url),
      exp: () => _(() => import("./JOkXg6lF.js"), [], import.meta.url)
    },
    nyItem8: {
      idle: () => _(() => import("./DyML_CFl.js"), [], import.meta.url),
      exp: () => _(() => import("./g4p-tenb.js"), [], import.meta.url)
    },
    cnyCoins: {
      idle: () => _(() => import("./Yy0lxZK0.js"), [], import.meta.url),
      exp: () => _(() => import("./0NKW7pcF.js"), [], import.meta.url)
    },
    cnyFireworks: {
      idle: () => _(() => import("./CE3q4bse.js"), [], import.meta.url),
      exp: () => _(() => import("./BjLMVngq.js"), [], import.meta.url)
    },
    cnyLanterns: {
      idle: () => _(() => import("./Dnlbrfrw.js"), [], import.meta.url),
      exp: () => _(() => import("./DozLdMWF.js"), [], import.meta.url)
    },
    cnySnake: {
      idle: () => _(() => import("./BpOg54jW.js"), [], import.meta.url),
      exp: () => _(() => import("./CdDWlhkN.js"), [], import.meta.url)
    }
  },
  Ge = async n => {
    const e = async s => await new Promise(o => {
      const r = new Image;
      r.src = s, r.complete && o(r), r.onload = () => o(r)
    }), t = [...n.assets];
    return t.sort((s, o) => {
      const r = n.layers.find(c => c.refId === s.id),
        a = n.layers.find(c => c.refId === o.id);
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
      const [f, v] = await Promise.all([$e[i].idle(), $e[i].exp()]), [A, T] = await Promise.all([Ge(f), Ge(v)]);
      return [{
        lottie: [A, T],
        probability: 1
      }]
    }, s = async i => {
      const f = await Promise.all(i.map(A => t(A))),
        v = 1 / f.length;
      return f.map(A => ({
        lottie: A[0].lottie,
        probability: v
      }))
    }, o = async () => {
      switch (e) {
        case x.HALLOWEEN:
          return await t("pumpkin");
        case x.TSUBASA: {
          const i = await s(["clover", "tsubasa"]);
          return i[0].probability = .7, i[1].probability = .3, i
        }
        case x.NEW_YEAR:
          return await s(["nyItem1", "nyItem2", "nyItem3", "nyItem4", "nyItem5", "nyItem6", "nyItem7", "nyItem8"]);
        case x.CHINESE_NEW_YEAR:
          return await s(["cnyCoins", "cnyLanterns"]);
        default:
          return await t("clover")
      }
    }, r = async () => {
      switch (e) {
        case x.NEW_YEAR:
          return await s(["nyBomb1", "nyBomb2"]);
        case x.CHINESE_NEW_YEAR:
          return await t("cnyFireworks");
        default:
          return await t("bomb")
      }
    }, a = async () => {
      switch (e) {
        case x.NEW_YEAR:
          return await t("nyFreeze1");
        case x.CHINESE_NEW_YEAR:
          return await t("cnySnake");
        default:
          return await t("freeze")
      }
    };
    return await {
      [m.CLOVER]: o, [m.FREEZE]: a, [m.BOMB]: r, [m.DOGS]: () => t("dogs"), [m.TRUMP]: () => t("trump"), [m.HARRIS]: () => t("harris")
    } [n]()
  };
var Qe = (n => (n.BP = "bp", n.DOGS = "dogs", n))(Qe || {});
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
async function At(n, e) {
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
    o = ["bp", ...n[m.DOGS] ? ["dogs"] : []],
    r = o.reduce((v, A) => (v[A] = vt(s[A]), v), {}),
    a = o.map(v => s[v]).reverse(),
    c = Promise.resolve([{
      lottie: [{}, {}],
      probability: 1
    }]),
    i = await Promise.all([J(m.CLOVER, e), J(m.FREEZE, e), J(m.BOMB, e), ...n[m.DOGS] ? [J(m.DOGS, e)] : [c], ...n[m.TRUMP] ? [J(m.TRUMP, e)] : [c], ...n[m.HARRIS] ? [J(m.HARRIS, e)] : [c]]);
  t.push({
    assetType: m.CLOVER,
    probability: n[m.CLOVER].probability,
    lottie: i[0],
    pointType: "bp",
    clickValue: n[m.CLOVER].perClick
  }), t.push({
    assetType: m.FREEZE,
    probability: n[m.FREEZE].probability,
    lottie: i[1],
    freeze: !0
  });
  const f = () => {
    switch (e) {
      case x.HALLOWEEN:
        return 10;
      case x.CHINESE_NEW_YEAR:
        return 1;
      default:
        return -100
    }
  };
  return t.push({
    assetType: m.BOMB,
    probability: n[m.BOMB].probability,
    lottie: i[2],
    pointType: "bp",
    bomb: !0,
    clickValue: f()
  }), n[m.DOGS] && t.push({
    assetType: m.DOGS,
    probability: n[m.DOGS].probability,
    lottie: i[3],
    pointType: "dogs",
    clickValue: n[m.DOGS].perClick
  }), n[m.TRUMP] && t.push({
    assetType: m.TRUMP,
    probability: n[m.TRUMP].probability,
    lottie: i[4],
    pointType: "bp",
    clickValue: n[m.TRUMP].perClick
  }), n[m.HARRIS] && t.push({
    assetType: m.HARRIS,
    probability: n[m.HARRIS].probability,
    lottie: i[5],
    pointType: "bp",
    clickValue: n[m.HARRIS].perClick
  }), {
    points: a,
    gameOptions: {
      assets: t,
      scoresMap: r
    }
  }
}
const Rt = n => Object.entries(n).reduce((t, [s, o]) => (t[s.toUpperCase()] = {
    amount: o.value
  }, t), {}),
  kt = 30 * 1e3,
  It = 3 * 1e3,
  Tt = .85,
  et = 275 * Tt,
  Ot = 350 - 1e3 / et,
  Pt = .45,
  ce = 8,
  ge = 10,
  be = -10,
  we = 6,
  ze = ce * 2,
  Be = .7,
  Lt = 500,
  Ne = {
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
  St = ({
    asset: n,
    score: e
  }, {
    freeze: t,
    bomb: s
  }) => {
    const o = n.clickValue || 0;
    return o && e && e.update(o), n.freeze && t(n), n.bomb && s(n), o
  },
  Dt = n => {
    const e = Math.random();
    let t = 0;
    const s = Object.values(n).find(a => (t += a.probability, e < t));
    if (!s) return;
    const o = s.lottie,
      r = (() => {
        const a = Math.random();
        let c = 0;
        for (const i of o)
          if (c += i.probability, a < c) return i.lottie
      })();
    if (r) return {
      lottie: {
        base: r[0],
        exp: r[1]
      },
      asset: s
    }
  },
  Mt = n => {
    const e = [],
      t = Math.min(n, Lt),
      s = (t - ze * (we - 1)) / (we + 2 * Be);
    let o = Be * s + (n - t) / 2;
    for (let r = 0; r < we; r++) {
      const a = o,
        c = a + s / 2,
        i = a + s;
      e.push({
        start: a,
        center: c,
        end: i
      }), o += s + ze
    }
    return {
      width: s,
      arr: e
    }
  },
  Vt = n => [...Array(we)].map(() => {
    if (!(Math.random() > Pt)) return Dt(n)
  });
class Ct {
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
    }])), this.theme = s.theme || x.DEFAULT;
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
    this.ctx.clearRect(0, 0, this.width, this.height), this.width = window.innerWidth, this.height = window.innerHeight, this.canvas.width = this.width, this.canvas.height = this.height, this.columns = Mt(this.width)
  }
  getObjectRect(e, t, s) {
    const o = (() => {
        if (s) return t.top;
        const a = Ne[t.z].speed * et;
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
    const s = Ne[t].asset,
      o = e.width * s,
      r = e.height * s,
      a = (e.width - o) / 2,
      c = (e.height - r) / 2;
    return {
      x: e.x + a + be,
      y: e.y + c + be,
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
    if (this.frozenAt && e - this.frozenAt > It && (this.frozenAt = void 0, this.callbacks.onFreeze(!1)), this.frozenAt) this.totalFreezeTime += e - (this.lastRenderAt || e);
    else {
      const t = kt - this.msFromStart() + this.totalFreezeTime;
      if (t <= 0) {
        this.destroy(), this.endGame();
        return
      }
      this.callbacks.timeLeft(t)
    }(!this.lastGenerationAt || this.msFromStart() - this.lastGenerationAt > Ot) && !this.frozenAt && (Vt(this.assets).forEach((t, s) => {
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
          x: te(-1 * ce, ce),
          y: te(-1 * ce, ce)
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
        const c = t.isExplosion ? t.lottie.exp : t.lottie.base,
          i = Math.floor((e - t.addedAt) / c.frameDuration);
        if (!(t.isExplosion && i >= c.countFrames)) return c.images[i % c.countFrames]
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
        c = (() => {
          const f = t.top + t.offset.y,
            v = this.frozenAt ? f : f + 60,
            A = f - 40;
          if (o < .4) return f + (v - f) * (o / .4);
          const T = (o - .4) / (1 - .4);
          return v + (A - v) * T
        })();
      return t.points >= 0 ? (this.ctx.fillStyle = `rgba(234, 212, 12, ${r})`, this.ctx.fillText(`+${t.points}`, a, c)) : (this.ctx.fillStyle = `rgba(229, 57, 53, ${r})`, this.ctx.fillText(`${t.points}`, a, c)), !0
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
      r = St({
        asset: e.asset,
        score: o
      }, {
        freeze: () => this.onFreeze(s),
        bomb: c => this.bombCallback(c)
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
const Ft = {
    class: "canvas-wrapper"
  },
  xt = {
    key: 0,
    class: "bomb"
  },
  $t = {
    key: 0,
    class: "freeze"
  },
  Gt = {
    class: "overlays"
  },
  zt = {
    class: "points"
  },
  Bt = {
    class: "amount"
  },
  Nt = ne({
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
        o = Se().$webApp;
      let r;
      const a = L(),
        c = L(0),
        i = () => {
          const l = L(new ee(0)),
            g = L(!1),
            O = L(!1),
            p = L(!1),
            E = Ve(() => g.value = !1, 100).debouncedFunction,
            V = Ve(() => O.value = !1, 500).debouncedFunction;
          return {
            value: l,
            scaled: g,
            isBomb: O,
            frozen: p,
            scaleBack: E,
            bombBack: V
          }
        },
        f = it(Object.values(t.points).reduce((l, g) => (l[g.type] = l[g.type] ?? i(), l), {})),
        v = L(!1),
        A = B(() => Object.values(f).some(l => l.isBomb)),
        T = B(() => Object.values(t.points).map(l => ({
          value: (() => {
            const g = f[l.type].value;
            if (l.type === Qe.BP) return Ee(g);
            const O = g.decimalPlaces();
            return at(g, {
              accuracy: O,
              rounding: ee.ROUND_DOWN
            })
          })(),
          icon: l.icon,
          scaled: f[l.type].scaled,
          bomb: f[l.type].isBomb
        })));
      return He(() => {
        if (setTimeout(() => ve().blockOverflow(), 300), o.enableClosingConfirmation(), !a.value) throw X("Canvas not found");
        r = new Ct(a.value, {
          timeLeft: l => c.value = l,
          objectClicked: (l, g) => {
            l.pointType && g !== void 0 && (f[l.pointType].value = new ee(g), f[l.pointType].scaled = !0, f[l.pointType].scaleBack()), o.HapticFeedback.impactOccurred("heavy")
          },
          onGameEnd: l => {
            s("end", l)
          },
          onFreeze: l => {
            v.value = l
          },
          onBomb: l => {
            f[l.pointType].isBomb = !0, f[l.pointType].bombBack(), o.HapticFeedback.notificationOccurred("error")
          }
        }, t.gameOptions)
      }), je(() => {
        ve().unblockOverflow(), o.disableClosingConfirmation(), r && r.destroy()
      }), (l, g) => {
        const O = De;
        return b(), k("div", {
          class: de(["pages-game-process", {
            "is-bomb": d(A)
          }])
        }, [h("div", Ft, [$(Oe, {
          name: "bomb-transition"
        }, {
          default: U(() => [d(A) ? (b(), k("div", xt)) : G("", !0)]),
          _: 1
        }), h("canvas", {
          ref_key: "canvasRef",
          ref: a
        }, null, 512), $(Oe, {
          name: "freeze-transition",
          duration: 800
        }, {
          default: U(() => [d(v) ? (b(), k("div", $t)) : G("", !0)]),
          _: 1
        })]), h("div", Gt, [h("div", {
          class: de(["timer", {
            "is-frozen": d(v)
          }])
        }, S(("getMmSsFromMs" in l ? l.getMmSsFromMs : d(ct))(d(c))), 3), h("div", zt, [(b(!0), k(H, null, Ae(d(T), p => (b(), k("div", {
          key: p.icon,
          class: de(["item", {
            "is-scaled": p.scaled,
            "is-bomb": p.bomb
          }])
        }, [$(O, {
          name: p.icon,
          class: "icon"
        }, null, 8, ["name"]), h("div", Bt, S(p.value), 1)], 2))), 128))])])], 2)
      }
    }
  }),
  Ut = se(Nt, [
    ["__scopeId", "data-v-88a97006"]
  ]),
  Wt = {
    class: "pages-game-reward-item"
  },
  Ht = {
    class: "icon-wrapper"
  },
  jt = {
    class: "name"
  },
  Yt = {
    class: "right"
  },
  Kt = {
    class: "value"
  },
  qt = {
    key: 0,
    class: "description"
  },
  Zt = ne({
    __name: "GameRewardItem",
    props: {
      logo: {},
      name: {},
      value: {},
      description: {}
    },
    setup(n) {
      return (e, t) => {
        const s = De;
        return b(), k("div", Wt, [h("div", Ht, [$(s, {
          name: e.logo,
          class: "icon"
        }, null, 8, ["name"])]), h("div", jt, S(e.name), 1), h("div", Yt, [h("div", Kt, S(e.value), 1), e.description ? (b(), k("div", qt, S(e.description), 1)) : G("", !0)])])
      }
    }
  }),
  Xt = se(Zt, [
    ["__scopeId", "data-v-33b3b1eb"]
  ]),
  Jt = {
    class: "pages-game-end-with-rewards"
  },
  Qt = ["src"],
  en = {
    class: "content"
  },
  tn = ["src"],
  nn = ["innerHTML"],
  sn = {
    class: "inner"
  },
  on = {
    key: 0,
    class: "rewards"
  },
  rn = {
    class: "list"
  },
  an = {
    class: "rewards"
  },
  cn = {
    key: 0,
    class: "title"
  },
  ln = {
    class: "list"
  },
  un = {
    class: "buttons"
  },
  dn = {
    class: "grid"
  },
  _n = {
    class: "label"
  },
  mn = ne({
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
        t = B(() => Object.values(e.scores).map(i => {
          const f = lt(new ee(i.value), i.point.type);
          return {
            logo: i.point.logo,
            name: i.point.name,
            value: f.defaultWithSymbol.toUpperCase()
          }
        })),
        s = B(() => t.value.map(i => i.value).join(` ${y("base.and")} `)),
        o = L(!1),
        r = B(() => `${y("game.end.share_text",{bp:s.value})}`),
        a = () => {
          Me().game.shareWin(), Se().$webApp.shareLink(Ke().public.TELEGRAM_APP_URL, r.value)
        },
        c = () => {
          Pe().update(), Re().push({
            name: "wallet",
            query: {
              tab: "points"
            }
          })
        };
      return (i, f) => {
        var O, p;
        const v = Xe,
          A = qe,
          T = Xt,
          l = Ze,
          g = Je;
        return b(), k("div", Jt, [i.backgroundImage ? (b(), k("img", {
          key: 0,
          src: i.backgroundImage,
          class: "bg-image"
        }, null, 8, Qt)) : (b(), D(v, {
          key: 1
        })), h("div", en, [i.asset ? (b(), k(H, {
          key: 0
        }, [i.asset.type === "lottie" ? (b(), D(A, {
          key: 0,
          name: i.asset.src,
          class: "animation"
        }, null, 8, ["name"])) : (b(), k("img", {
          key: 1,
          src: i.asset.src,
          class: "animation"
        }, null, 8, tn))], 64)) : G("", !0), h("div", {
          class: "message",
          innerHTML: i.message
        }, null, 8, nn), h("div", sn, [(O = i.additionalRewardItems) != null && O.length ? (b(), k("div", on, [h("div", rn, [(b(!0), k(H, null, Ae(i.additionalRewardItems, E => (b(), D(T, Ce({
          key: E.name,
          ref_for: !0
        }, E), null, 16))), 128))])])) : G("", !0), h("div", an, [(p = i.additionalRewardItems) != null && p.length ? (b(), k("div", cn, S(("t" in i ? i.t : d(y))("game.end.total_earned_label")), 1)) : G("", !0), h("div", ln, [(b(!0), k(H, null, Ae(d(t), E => (b(), D(T, Ce({
          key: E.name,
          ref_for: !0
        }, E), null, 16))), 128))])])])]), h("div", un, [h("div", dn, [i.scores.bp.value && i.playPasses && i.playPasses > 4 ? (b(), D(l, {
          key: 0,
          type: d(K).SECONDARY,
          size: d(Q).LARGE,
          onClick: a
        }, {
          default: U(() => [ae(S(("t" in i ? i.t : d(y))("base.share")), 1)]),
          _: 1
        }, 8, ["type", "size"])) : (b(), D(l, {
          key: 1,
          type: d(K).SECONDARY,
          size: d(Q).LARGE,
          onClick: f[0] || (f[0] = E => o.value = !0)
        }, {
          default: U(() => [ae(S(("t" in i ? i.t : d(y))("game.end.additional.invite")), 1)]),
          _: 1
        }, 8, ["type", "size"])), $(l, {
          type: d(K).SECONDARY,
          size: d(Q).LARGE,
          onClick: f[1] || (f[1] = E => c())
        }, {
          default: U(() => [ae(S(("t" in i ? i.t : d(y))("game.end.additional.balance")), 1)]),
          _: 1
        }, 8, ["type", "size"])]), i.playPasses && i.playPasses > 0 ? (b(), D(l, {
          key: 0,
          size: d(Q).LARGE,
          class: "highlighted-btn",
          onClick: f[2] || (f[2] = E => i.$emit("playAgain"))
        }, {
          default: U(() => [h("span", _n, [h("span", null, S(`${("t"in i?i.t:d(y))("base.play")} (`), 1), f[5] || (f[5] = h("i", {
            class: "ticket"
          }, null, -1)), h("span", null, S(` ${("t"in i?i.t:d(y))("game.end.pp_left",{n:i.playPasses})})`), 1)])]),
          _: 1
        }, 8, ["size"])) : (b(), D(l, {
          key: 1,
          size: d(Q).LARGE,
          onClick: f[3] || (f[3] = () => i.$router.push({
            name: "index"
          }))
        }, {
          default: U(() => [ae(S(("t" in i ? i.t : d(y))("game.end.additional.return")), 1)]),
          _: 1
        }, 8, ["size"]))]), $(g, {
          modelValue: d(o),
          "onUpdate:modelValue": f[4] || (f[4] = E => Ye(o) ? o.value = E : null),
          "referral-token": i.referralToken
        }, null, 8, ["modelValue", "referral-token"])])
      }
    }
  }),
  pn = se(mn, [
    ["__scopeId", "data-v-81c1f8de"]
  ]),
  fn = ["src"],
  gn = {
    class: "content"
  },
  bn = ["src"],
  wn = ["innerHTML"],
  hn = {
    class: "reward"
  },
  yn = {
    class: "value"
  },
  En = {
    class: "amount"
  },
  vn = {
    class: "amount-hidden"
  },
  An = {
    class: "amount"
  },
  Rn = {
    class: "description"
  },
  kn = {
    class: "buttons"
  },
  In = {
    key: 2,
    src: ut,
    class: "pokras-images"
  },
  Tn = ne({
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
        c = L(null),
        i = {
          toCenter: {
            duration: 100,
            delay: 0
          }
        },
        f = () => {
          if (!a.value || !c.value) throw X("Points elements are not defined");
          const p = a.value,
            V = c.value.getBoundingClientRect(),
            F = () => {
              p.style.top = `${V.top}px`, p.style.right = `${V.left}px`, p.style.transition = `all ${i.toCenter.duration}ms ease`, r.value = "center-points"
            },
            N = () => {
              r.value = "final"
            },
            z = () => {
              p.style.position = "static"
            };
          o.push(setTimeout(F, i.toCenter.delay)), o.push(setTimeout(() => {
            N(), z()
          }, i.toCenter.duration + i.toCenter.delay))
        },
        v = ve().internal.isPokrasTheme,
        A = L(!1),
        T = B(() => Ee(t.reward)),
        l = B(() => `${y("game.end.share_text",{bp:T.value})} BP`),
        g = p => {
          const E = y("base.play"),
            V = Fe("i", {
              class: "ticket"
            }),
            F = y("game.end.pp_left", {
              n: p
            });
          return Fe("span", [E, " (", V, " ", F, ")"])
        },
        O = B(() => {
          const p = [];
          return t.reward && t.playPasses && t.playPasses > 4 && p.push({
            label: y("game.end.share_win"),
            type: v.value ? K.OUTLINE : K.SECONDARY,
            onClick: () => {
              Me().game.shareWin(), Se().$webApp.shareLink(Ke().public.TELEGRAM_APP_URL, l.value)
            }
          }), t.playPasses && t.playPasses > 0 ? p.push({
            label: g(t.playPasses),
            type: K.PRIMARY,
            onClick: () => s("playAgain")
          }) : p.push({
            label: y("base.continue"),
            type: K.PRIMARY,
            onClick: () => {
              Re().push({
                name: "index"
              })
            }
          }), p
        });
      return He(() => {
        f()
      }), je(() => {
        o.forEach(p => clearTimeout(p))
      }), (p, E) => {
        const V = Xe,
          F = qe,
          N = De,
          z = Ze,
          pe = Je;
        return b(), k("div", {
          class: de(["pages-game-end", `animation-stage-${d(r)}`])
        }, [p.backgroundImage ? (b(), k("img", {
          key: 0,
          src: p.backgroundImage,
          class: "bg-image"
        }, null, 8, fn)) : (b(), D(V, {
          key: 1
        })), h("div", gn, [p.asset ? (b(), k(H, {
          key: 0
        }, [p.asset.type === "lottie" ? (b(), D(F, {
          key: 0,
          name: p.asset.src,
          class: "animation"
        }, null, 8, ["name"])) : (b(), k("img", {
          key: 1,
          src: p.asset.src,
          class: "animation"
        }, null, 8, bn))], 64)) : G("", !0), h("div", {
          class: "message",
          innerHTML: p.message
        }, null, 8, wn), h("div", hn, [h("div", yn, [h("div", {
          ref_key: "pointsEl",
          ref: a,
          class: de(["animated-points visible", {
            "is-small": d(r) === "init"
          }])
        }, [$(N, {
          name: "logo-token",
          class: "token-img"
        }), h("div", En, S(d(T)), 1), h("div", vn, S(d(T)), 1)], 2), h("div", {
          ref_key: "pointsHiddenEl",
          ref: c,
          class: "animated-points hidden"
        }, [$(N, {
          name: "logo-token",
          class: "token-img"
        }), h("div", An, S(d(T)), 1)], 512)]), h("div", Rn, S(("t" in p ? p.t : d(y))("base.rewards")), 1)])]), h("div", kn, [(b(!0), k(H, null, Ae(d(O), (M, fe) => (b(), D(z, {
          key: fe,
          type: M.type,
          link: M.to,
          size: d(Q).LARGE,
          onClick: ke => M.onClick && M.onClick()
        }, {
          default: U(() => [typeof M.label == "string" ? (b(), k(H, {
            key: 0
          }, [ae(S(M.label), 1)], 64)) : (b(), D(dt(M.label), {
            key: 1
          }))]),
          _: 2
        }, 1032, ["type", "link", "size", "onClick"]))), 128))]), $(pe, {
          modelValue: d(A),
          "onUpdate:modelValue": E[0] || (E[0] = M => Ye(A) ? A.value = M : null),
          "share-text": d(l),
          "referral-token": p.referralToken
        }, null, 8, ["modelValue", "share-text", "referral-token"]), d(v) ? (b(), k("img", In)) : G("", !0)], 2)
      }
    }
  }),
  On = se(Tn, [
    ["__scopeId", "data-v-d95008e0"]
  ]),
  Pn = n => {
    const e = {
        101: [y("game.end.message.good.1"), y("game.end.message.good.2"), y("game.end.message.good.3"), y("game.end.message.good.4"), y("game.end.message.good.5")],
        51: [y("game.end.message.ok.1"), y("game.end.message.ok.2"), y("game.end.message.ok.3"), y("game.end.message.ok.4"), y("game.end.message.ok.5")],
        default: [y("game.end.message.default.1"), y("game.end.message.default.2"), y("game.end.message.default.3"), y("game.end.message.default.4"), y("game.end.message.default.5")]
      },
      t = {
        0: [y("game.end.message.zero.1")]
      },
      s = Object.keys(t).find(c => n === Number(c));
    if (s) return t[s][te(0, t[s].length - 1)];
    const {
      default: o,
      ...r
    } = e, a = Object.keys(r).sort((c, i) => Number(i) - Number(c)).find(c => n >= Number(c));
    return a ? r[a][te(0, r[a].length - 1)] : e.default[te(0, e.default.length - 1)]
  },
  Ue = () => _t(["animations/Unicorn", "animations/Lightning", "animations/PartyPopper", "animations/Firecracker", "animations/Collision"]);
let R;
const tt = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && tt.decode();
let le = null;

function he() {
  return (le === null || le.byteLength === 0) && (le = new Uint8Array(R.memory.buffer)), le
}

function ue(n, e) {
  return n = n >>> 0, tt.decode(he().subarray(n, n + e))
}
const W = new Array(128).fill(void 0);
W.push(void 0, null, !0, !1);
let _e = W.length;

function w(n) {
  _e === W.length && W.push(W.length + 1);
  const e = _e;
  return _e = W[e], W[e] = n, e
}

function u(n) {
  return W[n]
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

function me(n, e, t) {
  if (t === void 0) {
    const c = ye.encode(n),
      i = e(c.length, 1) >>> 0;
    return he().subarray(i, i + c.length).set(c), Z = c.length, i
  }
  let s = n.length,
    o = e(s, 1) >>> 0;
  const r = he();
  let a = 0;
  for (; a < s; a++) {
    const c = n.charCodeAt(a);
    if (c > 127) break;
    r[o + a] = c
  }
  if (a !== s) {
    a !== 0 && (n = n.slice(a)), o = t(o, s, s = a + n.length * 3, 1) >>> 0;
    const c = he().subarray(o + a, o + s),
      i = Ln(n, c);
    a += i.written, o = t(o, s, a, 1) >>> 0
  }
  return Z = a, o
}

function ie(n) {
  return n == null
}
let Y = null;

function P() {
  return (Y === null || Y.buffer.detached === !0 || Y.buffer.detached === void 0 && Y.buffer !== R.memory.buffer) && (Y = new DataView(R.memory.buffer)), Y
}

function Sn(n) {
  n < 132 || (W[n] = _e, _e = n)
}

function q(n) {
  const e = u(n);
  return Sn(n), e
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

function Dn(n) {
  try {
    const o = R.__wbindgen_add_to_stack_pointer(-16),
      r = me(n, R.__wbindgen_malloc, R.__wbindgen_realloc),
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

function Mn(n, e, t, s) {
  let o, r;
  try {
    const T = R.__wbindgen_add_to_stack_pointer(-16),
      l = me(n, R.__wbindgen_malloc, R.__wbindgen_realloc),
      g = Z;
    R.pack(T, l, g, w(e), w(t), w(s));
    var a = P().getInt32(T + 4 * 0, !0),
      c = P().getInt32(T + 4 * 1, !0),
      i = P().getInt32(T + 4 * 2, !0),
      f = P().getInt32(T + 4 * 3, !0),
      v = a,
      A = c;
    if (f) throw v = 0, A = 0, q(i);
    return o = v, r = A, ue(v, A)
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
    const s = new Error(ue(e, t));
    return w(s)
  }, n.wbg.__wbindgen_string_get = function(e, t) {
    const s = u(t),
      o = typeof s == "string" ? s : void 0;
    var r = ie(o) ? 0 : me(o, R.__wbindgen_malloc, R.__wbindgen_realloc),
      a = Z;
    P().setInt32(e + 4 * 1, a, !0), P().setInt32(e + 4 * 0, r, !0)
  }, n.wbg.__wbindgen_object_drop_ref = function(e) {
    q(e)
  }, n.wbg.__wbindgen_string_new = function(e, t) {
    const s = ue(e, t);
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
    P().setFloat64(e + 8 * 1, ie(o) ? 0 : o, !0), P().setInt32(e + 4 * 0, !ie(o), !0)
  }, n.wbg.__wbindgen_as_number = function(e) {
    return +u(e)
  }, n.wbg.__wbg_String_b9412f8799faab3e = function(e, t) {
    const s = String(u(t)),
      o = me(s, R.__wbindgen_malloc, R.__wbindgen_realloc),
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
    const s = new Function(ue(e, t));
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
      const e = mt.global;
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
    P().setBigInt64(e + 8 * 1, ie(o) ? BigInt(0) : o, !0), P().setInt32(e + 4 * 0, !ie(o), !0)
  }, n.wbg.__wbindgen_debug_string = function(e, t) {
    const s = Le(u(t)),
      o = me(s, R.__wbindgen_malloc, R.__wbindgen_realloc),
      r = Z;
    P().setInt32(e + 4 * 1, r, !0), P().setInt32(e + 4 * 0, o, !0)
  }, n.wbg.__wbindgen_throw = function(e, t) {
    throw new Error(ue(e, t))
  }, n.wbg.__wbindgen_memory = function() {
    const e = R.memory;
    return w(e)
  }, n
}

function Fn(n, e) {
  return R = n.exports, nt.__wbindgen_wasm_module = e, Y = null, le = null, R
}
async function nt(n) {
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
const We = (n, e) => new Promise(t => {
    const s = pt(),
      o = r => {
        r.data.id === s && (t(r.data), n.removeEventListener("message", o))
      };
    n.addEventListener("message", o), n.postMessage({
      id: s,
      ...e
    })
  }),
  xn = () => new Worker(new URL("" + new URL("game-fBF26Hhn.js", import.meta.url).href, import.meta.url), {
    type: "module"
  });
let Te;
const $n = async () => {
  Te === void 0 && (Te = nt()), await Te
};
self.onmessage = async n => {
  await $n();
  const {
    id: e,
    method: t,
    payload: s
  } = n.data;
  switch (t) {
    case "proof": {
      const o = Dn(s);
      return self.postMessage({
        id: e,
        ...o
      })
    }
    case "pack": {
      const o = Mn(s.gameId, s.challenge, s.earnedPoints, s.assetClicks);
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
      const e = B(() => {
          var l;
          return (l = Pe().pointSymbols.value.pp) == null ? void 0 : l.balance.value.toNumber()
        }),
        t = L({
          stage: "LOADING"
        }),
        s = ve(),
        o = xn(),
        r = L(),
        a = L(),
        c = L(),
        i = L(),
        f = async (l, {
          assetClicks: g,
          scores: O
        }) => {
          var pe;
          const p = ((pe = O.bp) == null ? void 0 : pe.value) ?? 0,
            E = (() => {
              var fe, ke;
              const M = [];
              if (m.HARRIS in g && g[m.HARRIS]) {
                const oe = (fe = l.gameOptions.assets.find(j => j.assetType === m.HARRIS)) == null ? void 0 : fe.clickValue;
                if (oe !== void 0) {
                  const j = oe * g[m.HARRIS].clicks;
                  M.push({
                    logo: "harris",
                    name: "Harris",
                    value: String(g[m.HARRIS].clicks),
                    description: `(+${Ee(j)} BP)`
                  })
                }
              }
              if (m.TRUMP in g && g[m.TRUMP]) {
                const oe = (ke = l.gameOptions.assets.find(j => j.assetType === m.TRUMP)) == null ? void 0 : ke.clickValue;
                if (oe !== void 0) {
                  const j = oe * g[m.TRUMP].clicks;
                  M.push({
                    logo: "trump",
                    name: "Trump",
                    value: String(g[m.TRUMP].clicks),
                    description: `(+${Ee(j)} BP)`
                  })
                }
              }
              return M
            })(),
            V = !!E.length || Object.values(O).length > 1,
            F = gt(l.pow);
          if (!F) throw X("Proof of work is not calculated");
          t.value = {
            stage: "END",
            id: l.id,
            scores: O,
            bpReward: p,
            message: Pn(p),
            endWithRewards: V,
            additionalRewardItems: E
          };
          const N = await We(o, {
            method: "pack",
            payload: {
              gameId: t.value.id,
              challenge: F,
              earnedPoints: Rt(O),
              assetClicks: g
            }
          });
          if ((await Ie.claimGame(N.hash)).err) throw X("Failed to claim game");
          Me().game.gameEnd(p)
        }, v = () => xe().warn("Rejected by turnstile"), A = async () => {
          t.value = {
            stage: "LOADING"
          }, r.value = void 0, i.value = void 0, s.internal.isTsubasaTheme.value ? (a.value = {
            type: "image",
            src: re("tsubasa/drop-game-result-image", "webp")
          }, c.value = re("tsubasa/drop-game-results-bg", "webp")) : s.internal.isNewYearTheme.value ? (a.value = {
            type: "image",
            src: re("new-year/drop-game-result-image", "webp")
          }, c.value = re("new-year/drop-game-background", "webp")) : s.internal.isChineseNewYearTheme.value ? (a.value = {
            type: "lottie",
            src: Ue()
          }, c.value = re("chinese-new-year/drop-game-background", "webp")) : a.value = {
            type: "lottie",
            src: Ue()
          };
          const l = await Ie.startGame();
          if (l.err) {
            l.message === "another game in progress" && bt().error(y("game.another_game_in_progress")), xe().warn("Failed to start game"), Re().push({
              name: "index"
            });
            return
          }
          const g = s.internal.theme.value,
            {
              points: O,
              gameOptions: p
            } = await At(l.data.assets, g);
          t.value = {
            stage: "GAME",
            id: l.data.gameId,
            pow: void 0,
            points: O,
            gameOptions: p
          }, We(o, {
            method: "proof",
            payload: l.data.gameId
          }).then(E => {
            t.value.stage === "GAME" && (t.value.pow = E)
          }), Pe().update(), Ie.getFrensUsing().then(E => {
            E.err || (r.value = E.data)
          })
        }, T = B(() => {
          if (t.value.stage === "END") return () => Re().push({
            name: "index"
          })
        });
      return ft(T, l => wt().meta.back = l), (l, g) => {
        var F, N;
        const O = Et,
          p = Ut,
          E = pn,
          V = On;
        return b(), k("div", Gn, [d(t).stage === "LOADING" ? (b(), D(O, {
          key: 0,
          onResolve: g[0] || (g[0] = z => A()),
          onReject: g[1] || (g[1] = z => (A(), v()))
        })) : G("", !0), $(Oe, {
          name: "game-process-transition"
        }, {
          default: U(() => [d(t).stage === "GAME" ? (b(), D(p, {
            key: "game",
            points: d(t).points,
            "game-options": d(t).gameOptions,
            onEnd: g[2] || (g[2] = z => f(d(t), z))
          }, null, 8, ["points", "game-options"])) : G("", !0)]),
          _: 1
        }), d(t).stage === "END" ? (b(), k(H, {
          key: 1
        }, [d(t).endWithRewards ? (b(), D(E, {
          key: "game-end-with-rewards",
          reward: d(t).bpReward,
          scores: d(t).scores,
          message: d(t).message,
          asset: d(a),
          "background-image": d(c),
          "play-passes": d(e),
          "referral-token": (F = d(r)) == null ? void 0 : F.referralToken,
          "additional-reward-items": d(t).additionalRewardItems,
          onPlayAgain: g[3] || (g[3] = z => t.value = {
            stage: "LOADING"
          })
        }, null, 8, ["reward", "scores", "message", "asset", "background-image", "play-passes", "referral-token", "additional-reward-items"])) : (b(), D(V, {
          key: "game-end",
          reward: d(t).bpReward,
          message: d(t).message,
          asset: d(a),
          "background-image": d(c),
          "play-passes": d(e),
          "referral-token": (N = d(r)) == null ? void 0 : N.referralToken,
          onPlayAgain: g[4] || (g[4] = z => t.value = {
            stage: "LOADING"
          })
        }, null, 8, ["reward", "message", "asset", "background-image", "play-passes", "referral-token"]))], 64)) : G("", !0)])
      }
    }
  }),
  jn = se(zn, [
    ["__scopeId", "data-v-572ac03a"]
  ]);
export {
  jn as
  default
};