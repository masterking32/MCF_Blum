var nt = Object.defineProperty;
var st = (n, e, t) => e in n ? nt(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : n[e] = t;
var T = (n, e, t) => st(n, typeof e != "symbol" ? e + "" : e, t);
import {
  _ as ot
} from "./CUxqzio7.js";
import {
  d as oe,
  o as f,
  c as k,
  b as $,
  f as re,
  a2 as p,
  a3 as x,
  a4 as d,
  V as X,
  R as ne,
  a5 as se,
  h as Le,
  K as L,
  a6 as rt,
  j as U,
  M as Ee,
  a7 as it,
  a8 as We,
  Y as ve,
  T as He,
  a as h,
  H as N,
  e as _,
  D as G,
  a9 as Te,
  n as de,
  t as D,
  aa as at,
  F as W,
  q as Ae,
  ab as Ve,
  _ as De,
  E as ct,
  z as y,
  G as S,
  m as ce,
  B as K,
  U as te,
  p as je,
  $ as Se,
  l as Ye,
  P as Oe,
  ac as Re,
  ad as Ke,
  x as qe,
  ae as Me,
  af as lt,
  ag as Ce,
  ah as ut,
  ai as _t,
  aj as dt,
  ak as mt,
  O as pt,
  al as gt,
  W as ke,
  g as xe,
  am as j,
  Z as ft
} from "./DSiomQd1.js";
import {
  _ as Ze
} from "./BK4G9Ytk.js";
import {
  _ as Xe
} from "./CiKhqiH6.js";
const bt = {
    class: "pages-game-init"
  },
  wt = oe({
    __name: "GameInit",
    emits: ["resolve", "reject"],
    setup(n, {
      emit: e
    }) {
      return e("resolve"), (s, o) => {
        const r = ot;
        return f(), k("div", bt, [$(r, {
          fixed: ""
        })])
      }
    }
  }),
  ht = re(wt, [
    ["__scopeId", "data-v-36c68e5b"]
  ]),
  Fe = {
    bomb: {
      idle: () => d(() => import("./D0AuTG3U.js"), [], import.meta.url),
      exp: () => d(() => import("./VAbkGEP8.js"), [], import.meta.url)
    },
    tsubasa: {
      idle: () => d(() => import("./CU-59Qi6.js"), [], import.meta.url),
      exp: () => d(() => import("./Bna8SNzr.js"), [], import.meta.url)
    },
    clover: {
      idle: () => d(() => import("./Bel49BDH.js"), [], import.meta.url),
      exp: () => d(() => import("./DAJbdhbu.js"), [], import.meta.url)
    },
    dogs: {
      idle: () => d(() => import("./u8-ubWQv.js"), [], import.meta.url),
      exp: () => d(() => import("./DmRr-UYS.js"), [], import.meta.url)
    },
    harris: {
      idle: () => d(() => import("./Cnlj7wz7.js"), [], import.meta.url),
      exp: () => d(() => import("./BN5w9tdX.js"), [], import.meta.url)
    },
    trump: {
      idle: () => d(() => import("./dWkHQbnT.js"), [], import.meta.url),
      exp: () => d(() => import("./CMBTH3PQ.js"), [], import.meta.url)
    },
    freeze: {
      idle: () => d(() => import("./DLvoNWfm.js"), [], import.meta.url),
      exp: () => d(() => import("./5K18VY8c.js"), [], import.meta.url)
    },
    pumpkin: {
      idle: () => d(() => import("./CICfhgoV.js"), [], import.meta.url),
      exp: () => d(() => import("./BiJxrlLa.js"), [], import.meta.url)
    },
    nyBomb1: {
      idle: () => d(() => import("./DDVtcpgK.js"), [], import.meta.url),
      exp: () => d(() => import("./CoNdEQvB.js"), [], import.meta.url)
    },
    nyBomb2: {
      idle: () => d(() => import("./lajrCipI.js"), [], import.meta.url),
      exp: () => d(() => import("./C3qpXbYu.js"), [], import.meta.url)
    },
    nyFreeze1: {
      idle: () => d(() => import("./CgL1RGSf.js"), [], import.meta.url),
      exp: () => d(() => import("./5Gv6NAaF.js"), [], import.meta.url)
    },
    nyItem1: {
      idle: () => d(() => import("./BbAq37Hf.js"), [], import.meta.url),
      exp: () => d(() => import("./MIko73Hg.js"), [], import.meta.url)
    },
    nyItem2: {
      idle: () => d(() => import("./DEWBxJFe.js"), [], import.meta.url),
      exp: () => d(() => import("./BR_CpXHw.js"), [], import.meta.url)
    },
    nyItem3: {
      idle: () => d(() => import("./dYA8D5TX.js"), [], import.meta.url),
      exp: () => d(() => import("./BbqGAQN1.js"), [], import.meta.url)
    },
    nyItem4: {
      idle: () => d(() => import("./C9ViuJQJ.js"), [], import.meta.url),
      exp: () => d(() => import("./NITIQQO8.js"), [], import.meta.url)
    },
    nyItem5: {
      idle: () => d(() => import("./BfLZaIBP.js"), [], import.meta.url),
      exp: () => d(() => import("./PsXdmjgd.js"), [], import.meta.url)
    },
    nyItem6: {
      idle: () => d(() => import("./D6jOitZo.js"), [], import.meta.url),
      exp: () => d(() => import("./BDm3zlNn.js"), [], import.meta.url)
    },
    nyItem7: {
      idle: () => d(() => import("./B6jzVdzv.js"), [], import.meta.url),
      exp: () => d(() => import("./JOkXg6lF.js"), [], import.meta.url)
    },
    nyItem8: {
      idle: () => d(() => import("./DyML_CFl.js"), [], import.meta.url),
      exp: () => d(() => import("./g4p-tenb.js"), [], import.meta.url)
    },
    cnyCoins: {
      idle: () => d(() => import("./Yy0lxZK0.js"), [], import.meta.url),
      exp: () => d(() => import("./0NKW7pcF.js"), [], import.meta.url)
    },
    cnyFireworks: {
      idle: () => d(() => import("./CE3q4bse.js"), [], import.meta.url),
      exp: () => d(() => import("./BjLMVngq.js"), [], import.meta.url)
    },
    cnyLanterns: {
      idle: () => d(() => import("./Dnlbrfrw.js"), [], import.meta.url),
      exp: () => d(() => import("./DozLdMWF.js"), [], import.meta.url)
    },
    cnySnake: {
      idle: () => d(() => import("./BpOg54jW.js"), [], import.meta.url),
      exp: () => d(() => import("./CdDWlhkN.js"), [], import.meta.url)
    },
    valentineHeart: {
      idle: () => d(() => import("./BGi39Lbv.js"), [], import.meta.url),
      exp: () => d(() => import("./Yjl88kXa.js"), [], import.meta.url)
    },
    valentineHeartLocked: {
      idle: () => d(() => import("./B9dQcdlu.js"), [], import.meta.url),
      exp: () => d(() => import("./wR1fNUxh.js"), [], import.meta.url)
    },
    valentineHeartWings: {
      idle: () => d(() => import("./BqCIi9q3.js"), [], import.meta.url),
      exp: () => d(() => import("./ien7UnBu.js"), [], import.meta.url)
    }
  },
  $e = async n => {
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
  }, ee = async (n, e) => {
    const t = async i => {
      const [g, v] = await Promise.all([Fe[i].idle(), Fe[i].exp()]), [A, w] = await Promise.all([$e(g), $e(v)]);
      return [{
        lottie: [A, w],
        probability: 1
      }]
    }, s = async i => {
      const g = await Promise.all(i.map(A => t(A))),
        v = 1 / g.length;
      return g.map(A => ({
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
        case x.VALENTINE:
          return await s(["valentineHeart", "valentineHeartLocked", "valentineHeartWings"]);
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
      [p.CLOVER]: o, [p.FREEZE]: a, [p.BOMB]: r, [p.DOGS]: () => t("dogs"), [p.TRUMP]: () => t("trump"), [p.HARRIS]: () => t("harris")
    } [n]()
  };
var Je = (n => (n.BP = "bp", n.DOGS = "dogs", n))(Je || {});
const yt = n => {
  let e = 0;
  return {
    getValue: () => e,
    update: o => {
      e = ne.max(new ne(e).plus(o), 0).toNumber()
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
    o = ["bp", ...n[p.DOGS] ? ["dogs"] : []],
    r = o.reduce((v, A) => (v[A] = yt(s[A]), v), {}),
    a = o.map(v => s[v]).reverse(),
    l = Promise.resolve([{
      lottie: [{}, {}],
      probability: 1
    }]),
    i = await Promise.all([ee(p.CLOVER, e), ee(p.FREEZE, e), ee(p.BOMB, e), ...n[p.DOGS] ? [ee(p.DOGS, e)] : [l], ...n[p.TRUMP] ? [ee(p.TRUMP, e)] : [l], ...n[p.HARRIS] ? [ee(p.HARRIS, e)] : [l]]);
  t.push({
    assetType: p.CLOVER,
    probability: n[p.CLOVER].probability,
    lottie: i[0],
    pointType: "bp",
    clickValue: n[p.CLOVER].perClick
  }), t.push({
    assetType: p.FREEZE,
    probability: n[p.FREEZE].probability,
    lottie: i[1],
    freeze: !0
  });
  const g = () => {
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
    assetType: p.BOMB,
    probability: n[p.BOMB].probability,
    lottie: i[2],
    pointType: "bp",
    bomb: !0,
    clickValue: g()
  }), n[p.DOGS] && t.push({
    assetType: p.DOGS,
    probability: n[p.DOGS].probability,
    lottie: i[3],
    pointType: "dogs",
    clickValue: n[p.DOGS].perClick
  }), n[p.TRUMP] && t.push({
    assetType: p.TRUMP,
    probability: n[p.TRUMP].probability,
    lottie: i[4],
    pointType: "bp",
    clickValue: n[p.TRUMP].perClick
  }), n[p.HARRIS] && t.push({
    assetType: p.HARRIS,
    probability: n[p.HARRIS].probability,
    lottie: i[5],
    pointType: "bp",
    clickValue: n[p.HARRIS].perClick
  }), {
    points: a,
    gameOptions: {
      assets: t,
      scoresMap: r
    }
  }
}
const vt = n => Object.entries(n).reduce((t, [s, o]) => (t[s.toUpperCase()] = {
    amount: o.value
  }, t), {}),
  At = 30 * 1e3,
  Rt = 3 * 1e3,
  kt = .85,
  Qe = 275 * kt,
  It = 350 - 1e3 / Qe,
  Tt = .45,
  le = 8,
  fe = 10,
  be = -10,
  we = 6,
  Ge = le * 2,
  ze = .7,
  Ot = 500,
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
  Pt = ({
    asset: n,
    score: e
  }, {
    freeze: t,
    bomb: s
  }) => {
    const o = n.clickValue || 0;
    return o && e && e.update(o), n.freeze && t(n), n.bomb && s(n), o
  },
  Lt = n => {
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
  Dt = n => {
    const e = [],
      t = Math.min(n, Ot),
      s = (t - Ge * (we - 1)) / (we + 2 * ze);
    let o = ze * s + (n - t) / 2;
    for (let r = 0; r < we; r++) {
      const a = o,
        l = a + s / 2,
        i = a + s;
      e.push({
        start: a,
        center: l,
        end: i
      }), o += s + Ge
    }
    return {
      width: s,
      arr: e
    }
  },
  St = n => [...Array(we)].map(() => {
    if (!(Math.random() > Tt)) return Lt(n)
  });
class Vt {
  constructor(e, t, s) {
    T(this, "canvas");
    T(this, "ctx");
    T(this, "callbacks");
    T(this, "width");
    T(this, "height");
    T(this, "isStopped", !1);
    T(this, "frozenAt");
    T(this, "totalFreezeTime", 0);
    T(this, "columns");
    T(this, "objects", []);
    T(this, "pointsAnimation", []);
    T(this, "startedAt");
    T(this, "lastGenerationAt");
    T(this, "lastRenderAt");
    T(this, "resizeFn", this.resize.bind(this));
    T(this, "processTouchesFn", this.processTouches.bind(this));
    T(this, "pointerEvent", window.ontouchstart === null ? "touchstart" : "mousedown");
    T(this, "assets");
    T(this, "scoresMap");
    T(this, "theme");
    T(this, "assetClicks");
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
      const o = this.objects.find(r => r.rect === void 0 || r.isExplosion ? !1 : s.x > r.rect.x - fe && s.x < r.rect.x + r.rect.width + fe && s.y > r.rect.y - fe && s.y < r.rect.y + r.rect.height + fe);
      o && (o.onClick(o), o.isExplosion = !0, o.addedAt = performance.now())
    })
  }
  resize() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.width = window.innerWidth, this.height = window.innerHeight, this.canvas.width = this.width, this.canvas.height = this.height, this.columns = Dt(this.width)
  }
  getObjectRect(e, t, s) {
    const o = (() => {
        if (s) return t.top;
        const a = Ne[t.z].speed * Qe;
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
    if (this.frozenAt && e - this.frozenAt > Rt && (this.frozenAt = void 0, this.callbacks.onFreeze(!1)), this.frozenAt) this.totalFreezeTime += e - (this.lastRenderAt || e);
    else {
      const t = At - this.msFromStart() + this.totalFreezeTime;
      if (t <= 0) {
        this.destroy(), this.endGame();
        return
      }
      this.callbacks.timeLeft(t)
    }(!this.lastGenerationAt || this.msFromStart() - this.lastGenerationAt > It) && !this.frozenAt && (St(this.assets).forEach((t, s) => {
      if (!t) return;
      const {
        lottie: o,
        asset: r
      } = t;
      this.objects.push({
        asset: r,
        lottie: o,
        top: -1 * this.columns.width,
        z: se(0, 2),
        column: s,
        lastRenderAt: e,
        addedAt: e,
        offset: {
          x: se(-1 * le, le),
          y: se(-1 * le, le)
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
          const g = t.top + t.offset.y,
            v = this.frozenAt ? g : g + 60,
            A = g - 40;
          if (o < .4) return g + (v - g) * (o / .4);
          const w = (o - .4) / (1 - .4);
          return v + (A - v) * w
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
      r = Pt({
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
const Mt = {
    class: "canvas-wrapper"
  },
  Ct = {
    key: 0,
    class: "bomb"
  },
  xt = {
    key: 0,
    class: "freeze"
  },
  Ft = {
    class: "overlays"
  },
  $t = {
    class: "points"
  },
  Gt = {
    class: "amount"
  },
  zt = oe({
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
        o = Le().$webApp;
      let r;
      const a = L(),
        l = L(0),
        i = () => {
          const c = L(new ne(0)),
            E = L(!1),
            O = L(!1),
            m = L(!1),
            I = Ve(() => E.value = !1, 100).debouncedFunction,
            V = Ve(() => O.value = !1, 500).debouncedFunction;
          return {
            value: c,
            scaled: E,
            isBomb: O,
            frozen: m,
            scaleBack: I,
            bombBack: V
          }
        },
        g = rt(Object.values(t.points).reduce((c, E) => (c[E.type] = c[E.type] ?? i(), c), {})),
        v = L(!1),
        A = U(() => Object.values(g).some(c => c.isBomb)),
        w = U(() => Object.values(t.points).map(c => ({
          value: (() => {
            const E = g[c.type].value;
            if (c.type === Je.BP) return Ee(E);
            const O = E.decimalPlaces();
            return it(E, {
              accuracy: O,
              rounding: ne.ROUND_DOWN
            })
          })(),
          icon: c.icon,
          scaled: g[c.type].scaled,
          bomb: g[c.type].isBomb
        })));
      return We(() => {
        if (setTimeout(() => ve().blockOverflow(), 300), o.enableClosingConfirmation(), !a.value) throw X("Canvas not found");
        r = new Vt(a.value, {
          timeLeft: c => l.value = c,
          objectClicked: (c, E) => {
            c.pointType && E !== void 0 && (g[c.pointType].value = new ne(E), g[c.pointType].scaled = !0, g[c.pointType].scaleBack()), o.HapticFeedback.impactOccurred("heavy")
          },
          onGameEnd: c => {
            s("end", c)
          },
          onFreeze: c => {
            v.value = c
          },
          onBomb: c => {
            g[c.pointType].isBomb = !0, g[c.pointType].bombBack(), o.HapticFeedback.notificationOccurred("error")
          }
        }, t.gameOptions)
      }), He(() => {
        ve().unblockOverflow(), o.disableClosingConfirmation(), r && r.destroy()
      }), (c, E) => {
        const O = De;
        return f(), k("div", {
          class: de(["pages-game-process", {
            "is-bomb": _(A)
          }])
        }, [h("div", Mt, [$(Te, {
          name: "bomb-transition"
        }, {
          default: N(() => [_(A) ? (f(), k("div", Ct)) : G("", !0)]),
          _: 1
        }), h("canvas", {
          ref_key: "canvasRef",
          ref: a
        }, null, 512), $(Te, {
          name: "freeze-transition",
          duration: 800
        }, {
          default: N(() => [_(v) ? (f(), k("div", xt)) : G("", !0)]),
          _: 1
        })]), h("div", Ft, [h("div", {
          class: de(["timer", {
            "is-frozen": _(v)
          }])
        }, D(("getMmSsFromMs" in c ? c.getMmSsFromMs : _(at))(_(l))), 3), h("div", $t, [(f(!0), k(W, null, Ae(_(w), m => (f(), k("div", {
          key: m.icon,
          class: de(["item", {
            "is-scaled": m.scaled,
            "is-bomb": m.bomb
          }])
        }, [$(O, {
          name: m.icon,
          class: "icon"
        }, null, 8, ["name"]), h("div", Gt, D(m.value), 1)], 2))), 128))])])], 2)
      }
    }
  }),
  Nt = re(zt, [
    ["__scopeId", "data-v-1ce77aad"]
  ]),
  Bt = {
    class: "pages-game-reward-item"
  },
  Ut = {
    class: "icon-wrapper"
  },
  Wt = {
    class: "name"
  },
  Ht = {
    class: "right"
  },
  jt = {
    class: "value"
  },
  Yt = {
    key: 0,
    class: "description"
  },
  Kt = oe({
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
        return f(), k("div", Bt, [h("div", Ut, [$(s, {
          name: e.logo,
          class: "icon"
        }, null, 8, ["name"])]), h("div", Wt, D(e.name), 1), h("div", Ht, [h("div", jt, D(e.value), 1), e.description ? (f(), k("div", Yt, D(e.description), 1)) : G("", !0)])])
      }
    }
  }),
  qt = re(Kt, [
    ["__scopeId", "data-v-33b3b1eb"]
  ]),
  Zt = {
    class: "pages-game-end-with-rewards"
  },
  Xt = ["src"],
  Jt = {
    class: "content"
  },
  Qt = ["src"],
  en = ["innerHTML"],
  tn = {
    class: "inner"
  },
  nn = {
    key: 0,
    class: "rewards"
  },
  sn = {
    class: "list"
  },
  on = {
    class: "rewards"
  },
  rn = {
    key: 0,
    class: "title"
  },
  an = {
    class: "list"
  },
  cn = {
    class: "buttons"
  },
  ln = {
    class: "grid"
  },
  un = {
    class: "label"
  },
  _n = oe({
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
        t = U(() => Object.values(e.scores).map(i => {
          const g = ct(new ne(i.value), i.point.type);
          return {
            logo: i.point.logo,
            name: i.point.name,
            value: g.defaultWithSymbol.toUpperCase()
          }
        })),
        s = U(() => t.value.map(i => i.value).join(` ${y("base.and")} `)),
        o = L(!1),
        r = U(() => `${y("game.end.share_text",{bp:s.value})}`),
        a = () => {
          Se().game.shareWin(), Le().$webApp.shareLink(Ye().public.TELEGRAM_APP_URL, r.value)
        },
        l = () => {
          Oe().update(), Re().push({
            name: "wallet",
            query: {
              tab: "points"
            }
          })
        };
      return (i, g) => {
        var O, m;
        const v = Ze,
          A = Ke,
          w = qt,
          c = qe,
          E = Xe;
        return f(), k("div", Zt, [i.backgroundImage ? (f(), k("img", {
          key: 0,
          src: i.backgroundImage,
          class: "bg-image"
        }, null, 8, Xt)) : (f(), S(v, {
          key: 1
        })), h("div", Jt, [i.asset ? (f(), k(W, {
          key: 0
        }, [i.asset.type === "lottie" ? (f(), S(A, {
          key: 0,
          name: i.asset.src,
          class: "animation"
        }, null, 8, ["name"])) : (f(), k("img", {
          key: 1,
          src: i.asset.src,
          class: "animation"
        }, null, 8, Qt))], 64)) : G("", !0), h("div", {
          class: "message",
          innerHTML: i.message
        }, null, 8, en), h("div", tn, [(O = i.additionalRewardItems) != null && O.length ? (f(), k("div", nn, [h("div", sn, [(f(!0), k(W, null, Ae(i.additionalRewardItems, I => (f(), S(w, Me({
          key: I.name,
          ref_for: !0
        }, I), null, 16))), 128))])])) : G("", !0), h("div", on, [(m = i.additionalRewardItems) != null && m.length ? (f(), k("div", rn, D(("t" in i ? i.t : _(y))("game.end.total_earned_label")), 1)) : G("", !0), h("div", an, [(f(!0), k(W, null, Ae(_(t), I => (f(), S(w, Me({
          key: I.name,
          ref_for: !0
        }, I), null, 16))), 128))])])])]), h("div", cn, [h("div", ln, [i.scores.bp.value && i.playPasses && i.playPasses > 4 ? (f(), S(c, {
          key: 0,
          type: _(K).SECONDARY,
          size: _(te).LARGE,
          onClick: a
        }, {
          default: N(() => [ce(D(("t" in i ? i.t : _(y))("base.share")), 1)]),
          _: 1
        }, 8, ["type", "size"])) : (f(), S(c, {
          key: 1,
          type: _(K).SECONDARY,
          size: _(te).LARGE,
          onClick: g[0] || (g[0] = I => o.value = !0)
        }, {
          default: N(() => [ce(D(("t" in i ? i.t : _(y))("game.end.additional.invite")), 1)]),
          _: 1
        }, 8, ["type", "size"])), $(c, {
          type: _(K).SECONDARY,
          size: _(te).LARGE,
          onClick: g[1] || (g[1] = I => l())
        }, {
          default: N(() => [ce(D(("t" in i ? i.t : _(y))("game.end.additional.balance")), 1)]),
          _: 1
        }, 8, ["type", "size"])]), i.playPasses && i.playPasses > 0 ? (f(), S(c, {
          key: 0,
          size: _(te).LARGE,
          class: "highlighted-btn",
          onClick: g[2] || (g[2] = I => i.$emit("playAgain"))
        }, {
          default: N(() => [h("span", un, [h("span", null, D(`${("t"in i?i.t:_(y))("base.play")} (`), 1), g[5] || (g[5] = h("i", {
            class: "ticket"
          }, null, -1)), h("span", null, D(` ${("t"in i?i.t:_(y))("game.end.pp_left",{n:i.playPasses})})`), 1)])]),
          _: 1
        }, 8, ["size"])) : (f(), S(c, {
          key: 1,
          size: _(te).LARGE,
          onClick: g[3] || (g[3] = () => i.$router.push({
            name: "index"
          }))
        }, {
          default: N(() => [ce(D(("t" in i ? i.t : _(y))("game.end.additional.return")), 1)]),
          _: 1
        }, 8, ["size"]))]), $(E, {
          modelValue: _(o),
          "onUpdate:modelValue": g[4] || (g[4] = I => je(o) ? o.value = I : null),
          "referral-token": i.referralToken
        }, null, 8, ["modelValue", "referral-token"])])
      }
    }
  }),
  dn = re(_n, [
    ["__scopeId", "data-v-81c1f8de"]
  ]),
  mn = ["src"],
  pn = {
    class: "content"
  },
  gn = ["src"],
  fn = ["innerHTML"],
  bn = {
    class: "reward"
  },
  wn = {
    class: "value"
  },
  hn = {
    class: "amount"
  },
  yn = {
    class: "amount-hidden"
  },
  En = {
    class: "amount"
  },
  vn = {
    class: "description"
  },
  An = {
    class: "buttons"
  },
  Rn = {
    key: 2,
    src: lt,
    class: "pokras-images"
  },
  kn = oe({
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
        g = () => {
          if (!a.value || !l.value) throw X("Points elements are not defined");
          const m = a.value,
            V = l.value.getBoundingClientRect(),
            z = () => {
              m.style.top = `${V.top}px`, m.style.right = `${V.left}px`, m.style.transition = `all ${i.toCenter.duration}ms ease`, r.value = "center-points"
            },
            F = () => {
              r.value = "final"
            },
            J = () => {
              m.style.position = "static"
            };
          o.push(setTimeout(z, i.toCenter.delay)), o.push(setTimeout(() => {
            F(), J()
          }, i.toCenter.duration + i.toCenter.delay))
        },
        v = ve().internal.isPokrasTheme,
        A = L(!1),
        w = U(() => Ee(t.reward)),
        c = U(() => `${y("game.end.share_text",{bp:w.value})} BP`),
        E = m => {
          const I = y("base.play"),
            V = Ce("i", {
              class: "ticket"
            }),
            z = y("game.end.pp_left", {
              n: m
            });
          return Ce("span", [I, " (", V, " ", z, ")"])
        },
        O = U(() => {
          const m = [];
          return t.reward && t.playPasses && t.playPasses > 4 && m.push({
            label: y("game.end.share_win"),
            type: v.value ? K.OUTLINE : K.SECONDARY,
            onClick: () => {
              Se().game.shareWin(), Le().$webApp.shareLink(Ye().public.TELEGRAM_APP_URL, c.value)
            }
          }), t.playPasses && t.playPasses > 0 ? m.push({
            label: E(t.playPasses),
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
        g()
      }), He(() => {
        o.forEach(m => clearTimeout(m))
      }), (m, I) => {
        const V = Ze,
          z = Ke,
          F = De,
          J = qe,
          ie = Xe;
        return f(), k("div", {
          class: de(["pages-game-end", `animation-stage-${_(r)}`])
        }, [m.backgroundImage ? (f(), k("img", {
          key: 0,
          src: m.backgroundImage,
          class: "bg-image"
        }, null, 8, mn)) : (f(), S(V, {
          key: 1
        })), h("div", pn, [m.asset ? (f(), k(W, {
          key: 0
        }, [m.asset.type === "lottie" ? (f(), S(z, {
          key: 0,
          name: m.asset.src,
          class: "animation"
        }, null, 8, ["name"])) : (f(), k("img", {
          key: 1,
          src: m.asset.src,
          class: "animation"
        }, null, 8, gn))], 64)) : G("", !0), h("div", {
          class: "message",
          innerHTML: m.message
        }, null, 8, fn), h("div", bn, [h("div", wn, [h("div", {
          ref_key: "pointsEl",
          ref: a,
          class: de(["animated-points visible", {
            "is-small": _(r) === "init"
          }])
        }, [$(F, {
          name: "logo-token",
          class: "token-img"
        }), h("div", hn, D(_(w)), 1), h("div", yn, D(_(w)), 1)], 2), h("div", {
          ref_key: "pointsHiddenEl",
          ref: l,
          class: "animated-points hidden"
        }, [$(F, {
          name: "logo-token",
          class: "token-img"
        }), h("div", En, D(_(w)), 1)], 512)]), h("div", vn, D(("t" in m ? m.t : _(y))("base.rewards")), 1)])]), h("div", An, [(f(!0), k(W, null, Ae(_(O), (M, ge) => (f(), S(J, {
          key: ge,
          type: M.type,
          link: M.to,
          size: _(te).LARGE,
          onClick: Q => M.onClick && M.onClick()
        }, {
          default: N(() => [typeof M.label == "string" ? (f(), k(W, {
            key: 0
          }, [ce(D(M.label), 1)], 64)) : (f(), S(ut(M.label), {
            key: 1
          }))]),
          _: 2
        }, 1032, ["type", "link", "size", "onClick"]))), 128))]), $(ie, {
          modelValue: _(A),
          "onUpdate:modelValue": I[0] || (I[0] = M => je(A) ? A.value = M : null),
          "share-text": _(c),
          "referral-token": m.referralToken
        }, null, 8, ["modelValue", "share-text", "referral-token"]), _(v) ? (f(), k("img", Rn)) : G("", !0)], 2)
      }
    }
  }),
  In = re(kn, [
    ["__scopeId", "data-v-3952b8cf"]
  ]),
  Tn = n => {
    const e = {
        101: [y("game.end.message.good.1"), y("game.end.message.good.2"), y("game.end.message.good.3"), y("game.end.message.good.4"), y("game.end.message.good.5")],
        51: [y("game.end.message.ok.1"), y("game.end.message.ok.2"), y("game.end.message.ok.3"), y("game.end.message.ok.4"), y("game.end.message.ok.5")],
        default: [y("game.end.message.default.1"), y("game.end.message.default.2"), y("game.end.message.default.3"), y("game.end.message.default.4"), y("game.end.message.default.5")]
      },
      t = {
        0: [y("game.end.message.zero.1")]
      },
      s = Object.keys(t).find(l => n === Number(l));
    if (s) return t[s][se(0, t[s].length - 1)];
    const {
      default: o,
      ...r
    } = e, a = Object.keys(r).sort((l, i) => Number(i) - Number(l)).find(l => n >= Number(l));
    return a ? r[a][se(0, r[a].length - 1)] : e.default[se(0, e.default.length - 1)]
  },
  Be = () => _t(["animations/Unicorn", "animations/Lightning", "animations/PartyPopper", "animations/Firecracker", "animations/Collision"]);
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
let ue = null;

function he() {
  return (ue === null || ue.byteLength === 0) && (ue = new Uint8Array(R.memory.buffer)), ue
}

function _e(n, e) {
  return n = n >>> 0, et.decode(he().subarray(n, n + e))
}
const B = new Array(128).fill(void 0);
B.push(void 0, null, !0, !1);
let me = B.length;

function b(n) {
  me === B.length && B.push(B.length + 1);
  const e = me;
  return me = B[e], B[e] = n, e
}

function u(n) {
  return B[n]
}
let Z = 0;
const ye = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  On = typeof ye.encodeInto == "function" ? function(n, e) {
    return ye.encodeInto(n, e)
  } : function(n, e) {
    const t = ye.encode(n);
    return e.set(t), {
      read: n.length,
      written: t.length
    }
  };

function pe(n, e, t) {
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
      i = On(n, l);
    a += i.written, o = t(o, s, a, 1) >>> 0
  }
  return Z = a, o
}

function ae(n) {
  return n == null
}
let Y = null;

function P() {
  return (Y === null || Y.buffer.detached === !0 || Y.buffer.detached === void 0 && Y.buffer !== R.memory.buffer) && (Y = new DataView(R.memory.buffer)), Y
}

function Pn(n) {
  n < 132 || (B[n] = me, me = n)
}

function q(n) {
  const e = u(n);
  return Pn(n), e
}

function Pe(n) {
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
    o > 0 && (r += Pe(n[0]));
    for (let a = 1; a < o; a++) r += ", " + Pe(n[a]);
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

function Ln(n) {
  try {
    const o = R.__wbindgen_add_to_stack_pointer(-16),
      r = pe(n, R.__wbindgen_malloc, R.__wbindgen_realloc),
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
    const w = R.__wbindgen_add_to_stack_pointer(-16),
      c = pe(n, R.__wbindgen_malloc, R.__wbindgen_realloc),
      E = Z;
    R.pack(w, c, E, b(e), b(t), b(s));
    var a = P().getInt32(w + 4 * 0, !0),
      l = P().getInt32(w + 4 * 1, !0),
      i = P().getInt32(w + 4 * 2, !0),
      g = P().getInt32(w + 4 * 3, !0),
      v = a,
      A = l;
    if (g) throw v = 0, A = 0, q(i);
    return o = v, r = A, _e(v, A)
  } finally {
    R.__wbindgen_add_to_stack_pointer(16), R.__wbindgen_free(o, r, 1)
  }
}

function C(n, e) {
  try {
    return n.apply(this, e)
  } catch (t) {
    R.__wbindgen_exn_store(b(t))
  }
}
async function Sn(n, e) {
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

function Vn() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbindgen_error_new = function(e, t) {
    const s = new Error(_e(e, t));
    return b(s)
  }, n.wbg.__wbindgen_string_get = function(e, t) {
    const s = u(t),
      o = typeof s == "string" ? s : void 0;
    var r = ae(o) ? 0 : pe(o, R.__wbindgen_malloc, R.__wbindgen_realloc),
      a = Z;
    P().setInt32(e + 4 * 1, a, !0), P().setInt32(e + 4 * 0, r, !0)
  }, n.wbg.__wbindgen_object_drop_ref = function(e) {
    q(e)
  }, n.wbg.__wbindgen_string_new = function(e, t) {
    const s = _e(e, t);
    return b(s)
  }, n.wbg.__wbindgen_is_object = function(e) {
    const t = u(e);
    return typeof t == "object" && t !== null
  }, n.wbg.__wbindgen_is_string = function(e) {
    return typeof u(e) == "string"
  }, n.wbg.__wbindgen_is_bigint = function(e) {
    return typeof u(e) == "bigint"
  }, n.wbg.__wbindgen_bigint_from_u64 = function(e) {
    const t = BigInt.asUintN(64, e);
    return b(t)
  }, n.wbg.__wbindgen_jsval_eq = function(e, t) {
    return u(e) === u(t)
  }, n.wbg.__wbindgen_is_undefined = function(e) {
    return u(e) === void 0
  }, n.wbg.__wbindgen_in = function(e, t) {
    return u(e) in u(t)
  }, n.wbg.__wbg_crypto_1d1f22824a6a080c = function(e) {
    const t = u(e).crypto;
    return b(t)
  }, n.wbg.__wbg_process_4a72847cc503995b = function(e) {
    const t = u(e).process;
    return b(t)
  }, n.wbg.__wbg_versions_f686565e586dd935 = function(e) {
    const t = u(e).versions;
    return b(t)
  }, n.wbg.__wbg_node_104a2ff8d6ea03a2 = function(e) {
    const t = u(e).node;
    return b(t)
  }, n.wbg.__wbg_require_cca90b1a94a0255b = function() {
    return C(function() {
      const e = module.require;
      return b(e)
    }, arguments)
  }, n.wbg.__wbindgen_is_function = function(e) {
    return typeof u(e) == "function"
  }, n.wbg.__wbg_msCrypto_eb05e62b530a1508 = function(e) {
    const t = u(e).msCrypto;
    return b(t)
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
    P().setFloat64(e + 8 * 1, ae(o) ? 0 : o, !0), P().setInt32(e + 4 * 0, !ae(o), !0)
  }, n.wbg.__wbindgen_as_number = function(e) {
    return +u(e)
  }, n.wbg.__wbg_String_b9412f8799faab3e = function(e, t) {
    const s = String(u(t)),
      o = pe(s, R.__wbindgen_malloc, R.__wbindgen_realloc),
      r = Z;
    P().setInt32(e + 4 * 1, r, !0), P().setInt32(e + 4 * 0, o, !0)
  }, n.wbg.__wbindgen_number_new = function(e) {
    return b(e)
  }, n.wbg.__wbindgen_object_clone_ref = function(e) {
    const t = u(e);
    return b(t)
  }, n.wbg.__wbg_getwithrefkey_edc2c8960f0f1191 = function(e, t) {
    const s = u(e)[u(t)];
    return b(s)
  }, n.wbg.__wbg_set_f975102236d3c502 = function(e, t, s) {
    u(e)[q(t)] = q(s)
  }, n.wbg.__wbg_get_5419cf6b954aa11d = function(e, t) {
    const s = u(e)[t >>> 0];
    return b(s)
  }, n.wbg.__wbg_length_f217bbbf7e8e4df4 = function(e) {
    return u(e).length
  }, n.wbg.__wbg_newnoargs_1ede4bf2ebbaaf43 = function(e, t) {
    const s = new Function(_e(e, t));
    return b(s)
  }, n.wbg.__wbg_next_13b477da1eaa3897 = function(e) {
    const t = u(e).next;
    return b(t)
  }, n.wbg.__wbg_next_b06e115d1b01e10b = function() {
    return C(function(e) {
      const t = u(e).next();
      return b(t)
    }, arguments)
  }, n.wbg.__wbg_done_983b5ffcaec8c583 = function(e) {
    return u(e).done
  }, n.wbg.__wbg_value_2ab8a198c834c26a = function(e) {
    const t = u(e).value;
    return b(t)
  }, n.wbg.__wbg_iterator_695d699a44d6234c = function() {
    return b(Symbol.iterator)
  }, n.wbg.__wbg_get_ef828680c64da212 = function() {
    return C(function(e, t) {
      const s = Reflect.get(u(e), u(t));
      return b(s)
    }, arguments)
  }, n.wbg.__wbg_call_a9ef466721e824f2 = function() {
    return C(function(e, t) {
      const s = u(e).call(u(t));
      return b(s)
    }, arguments)
  }, n.wbg.__wbg_new_e69b5f66fda8f13c = function() {
    const e = new Object;
    return b(e)
  }, n.wbg.__wbg_self_bf91bf94d9e04084 = function() {
    return C(function() {
      const e = self.self;
      return b(e)
    }, arguments)
  }, n.wbg.__wbg_window_52dd9f07d03fd5f8 = function() {
    return C(function() {
      const e = window.window;
      return b(e)
    }, arguments)
  }, n.wbg.__wbg_globalThis_05c129bf37fcf1be = function() {
    return C(function() {
      const e = globalThis.globalThis;
      return b(e)
    }, arguments)
  }, n.wbg.__wbg_global_3eca19bb09e9c484 = function() {
    return C(function() {
      const e = dt.global;
      return b(e)
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
      return b(o)
    }, arguments)
  }, n.wbg.__wbg_isSafeInteger_b9dff570f01a9100 = function(e) {
    return Number.isSafeInteger(u(e))
  }, n.wbg.__wbg_entries_c02034de337d3ee2 = function(e) {
    const t = Object.entries(u(e));
    return b(t)
  }, n.wbg.__wbg_buffer_ccaed51a635d8a2d = function(e) {
    const t = u(e).buffer;
    return b(t)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_7e3eb787208af730 = function(e, t, s) {
    const o = new Uint8Array(u(e), t >>> 0, s >>> 0);
    return b(o)
  }, n.wbg.__wbg_new_fec2611eb9180f95 = function(e) {
    const t = new Uint8Array(u(e));
    return b(t)
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
    return b(t)
  }, n.wbg.__wbg_subarray_975a06f9dbd16995 = function(e, t, s) {
    const o = u(e).subarray(t >>> 0, s >>> 0);
    return b(o)
  }, n.wbg.__wbg_has_bd717f25f195f23d = function() {
    return C(function(e, t) {
      return Reflect.has(u(e), u(t))
    }, arguments)
  }, n.wbg.__wbindgen_bigint_get_as_i64 = function(e, t) {
    const s = u(t),
      o = typeof s == "bigint" ? s : void 0;
    P().setBigInt64(e + 8 * 1, ae(o) ? BigInt(0) : o, !0), P().setInt32(e + 4 * 0, !ae(o), !0)
  }, n.wbg.__wbindgen_debug_string = function(e, t) {
    const s = Pe(u(t)),
      o = pe(s, R.__wbindgen_malloc, R.__wbindgen_realloc),
      r = Z;
    P().setInt32(e + 4 * 1, r, !0), P().setInt32(e + 4 * 0, o, !0)
  }, n.wbg.__wbindgen_throw = function(e, t) {
    throw new Error(_e(e, t))
  }, n.wbg.__wbindgen_memory = function() {
    const e = R.memory;
    return b(e)
  }, n
}

function Mn(n, e) {
  return R = n.exports, tt.__wbindgen_wasm_module = e, Y = null, ue = null, R
}
async function tt(n) {
  if (R !== void 0) return R;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("" + new URL("game_wasm_bg.Cu5SYoMx.wasm", import.meta.url).href, import.meta.url));
  const e = Vn();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: t,
    module: s
  } = await Sn(await n, e);
  return Mn(t, s)
}
const Ue = (n, e) => new Promise(t => {
    const s = mt(),
      o = r => {
        r.data.id === s && (t(r.data), n.removeEventListener("message", o))
      };
    n.addEventListener("message", o), n.postMessage({
      id: s,
      ...e
    })
  }),
  Cn = () => new Worker(new URL("" + new URL("game-fBF26Hhn.js", import.meta.url).href, import.meta.url), {
    type: "module"
  });
let Ie;
const xn = async () => {
  Ie === void 0 && (Ie = tt()), await Ie
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
      const o = Ln(s);
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
const Fn = {
    class: "game-page page"
  },
  $n = oe({
    __name: "game",
    setup(n) {
      const e = U(() => {
          var w;
          return (w = Oe().pointSymbols.value.pp) == null ? void 0 : w.balance.value.toNumber()
        }),
        t = L({
          stage: "LOADING"
        }),
        s = ve(),
        o = Cn(),
        r = L(),
        a = L(),
        l = L(),
        i = L(),
        g = async (w, {
          assetClicks: c,
          scores: E
        }) => {
          var J;
          const O = ((J = E.bp) == null ? void 0 : J.value) ?? 0,
            m = (() => {
              var M, ge;
              const ie = [];
              if (p.HARRIS in c && c[p.HARRIS]) {
                const Q = (M = w.gameOptions.assets.find(H => H.assetType === p.HARRIS)) == null ? void 0 : M.clickValue;
                if (Q !== void 0) {
                  const H = Q * c[p.HARRIS].clicks;
                  ie.push({
                    logo: "harris",
                    name: "Harris",
                    value: String(c[p.HARRIS].clicks),
                    description: `(+${Ee(H)} BP)`
                  })
                }
              }
              if (p.TRUMP in c && c[p.TRUMP]) {
                const Q = (ge = w.gameOptions.assets.find(H => H.assetType === p.TRUMP)) == null ? void 0 : ge.clickValue;
                if (Q !== void 0) {
                  const H = Q * c[p.TRUMP].clicks;
                  ie.push({
                    logo: "trump",
                    name: "Trump",
                    value: String(c[p.TRUMP].clicks),
                    description: `(+${Ee(H)} BP)`
                  })
                }
              }
              return ie
            })(),
            I = !!m.length || Object.values(E).length > 1,
            V = gt(w.pow);
          if (!V) throw X("Proof of work is not calculated");
          t.value = {
            stage: "END",
            id: w.id,
            scores: E,
            bpReward: O,
            message: Tn(O),
            endWithRewards: I,
            additionalRewardItems: m
          };
          const z = await Ue(o, {
            method: "pack",
            payload: {
              gameId: t.value.id,
              challenge: V,
              earnedPoints: vt(E),
              assetClicks: c
            }
          });
          if ((await ke.claimGame(z.hash)).err) throw X("Failed to claim game");
          Se().game.gameEnd(O)
        }, v = () => xe().warn("Rejected by turnstile"), A = async () => {
          t.value = {
            stage: "LOADING"
          }, r.value = void 0, i.value = void 0, s.internal.isTsubasaTheme.value ? (a.value = {
            type: "image",
            src: j("tsubasa/drop-game-result-image", "webp")
          }, l.value = j("tsubasa/drop-game-results-bg", "webp")) : s.internal.isNewYearTheme.value ? (a.value = {
            type: "image",
            src: j("new-year/drop-game-result-image", "webp")
          }, l.value = j("new-year/drop-game-background", "webp")) : s.internal.isChineseNewYearTheme.value ? (a.value = {
            type: "lottie",
            src: Be()
          }, l.value = j("chinese-new-year/drop-game-background", "webp")) : s.internal.isValentineTheme.value ? (a.value = {
            type: "image",
            src: j("valentine/drop-game-result-image", "webp")
          }, l.value = j("valentine/drop-game-background", "svg")) : a.value = {
            type: "lottie",
            src: Be()
          };
          const w = await ke.startGame();
          if (w.err) {
            w.message === "another game in progress" && ft().error(y("game.another_game_in_progress")), xe().warn("Failed to start game"), Re().push({
              name: "index"
            });
            return
          }
          const c = s.internal.theme.value,
            {
              points: E,
              gameOptions: O
            } = await Et(w.data.assets, c);
          t.value = {
            stage: "GAME",
            id: w.data.gameId,
            pow: void 0,
            points: E,
            gameOptions: O
          }, Ue(o, {
            method: "proof",
            payload: w.data.gameId
          }).then(m => {
            t.value.stage === "GAME" && (t.value.pow = m)
          }), Oe().update(), ke.getFrensUsing().then(m => {
            m.err || (r.value = m.data)
          })
        };
      return pt().initWatcher({
        key: "game",
        watchFn: () => t.value.stage === "END",
        callback: () => Re().push({
          name: "index"
        })
      }), (w, c) => {
        var V, z;
        const E = ht,
          O = Nt,
          m = dn,
          I = In;
        return f(), k("div", Fn, [_(t).stage === "LOADING" ? (f(), S(E, {
          key: 0,
          onResolve: c[0] || (c[0] = F => A()),
          onReject: c[1] || (c[1] = F => (A(), v()))
        })) : G("", !0), $(Te, {
          name: "game-process-transition"
        }, {
          default: N(() => [_(t).stage === "GAME" ? (f(), S(O, {
            key: "game",
            points: _(t).points,
            "game-options": _(t).gameOptions,
            onEnd: c[2] || (c[2] = F => g(_(t), F))
          }, null, 8, ["points", "game-options"])) : G("", !0)]),
          _: 1
        }), _(t).stage === "END" ? (f(), k(W, {
          key: 1
        }, [_(t).endWithRewards ? (f(), S(m, {
          key: "game-end-with-rewards",
          reward: _(t).bpReward,
          scores: _(t).scores,
          message: _(t).message,
          asset: _(a),
          "background-image": _(l),
          "play-passes": _(e),
          "referral-token": (V = _(r)) == null ? void 0 : V.referralToken,
          "additional-reward-items": _(t).additionalRewardItems,
          onPlayAgain: c[3] || (c[3] = F => t.value = {
            stage: "LOADING"
          })
        }, null, 8, ["reward", "scores", "message", "asset", "background-image", "play-passes", "referral-token", "additional-reward-items"])) : (f(), S(I, {
          key: "game-end",
          reward: _(t).bpReward,
          message: _(t).message,
          asset: _(a),
          "background-image": _(l),
          "play-passes": _(e),
          "referral-token": (z = _(r)) == null ? void 0 : z.referralToken,
          onPlayAgain: c[4] || (c[4] = F => t.value = {
            stage: "LOADING"
          })
        }, null, 8, ["reward", "message", "asset", "background-image", "play-passes", "referral-token"]))], 64)) : G("", !0)])
      }
    }
  }),
  Wn = re($n, [
    ["__scopeId", "data-v-25de7054"]
  ]);
export {
  Wn as
  default
};