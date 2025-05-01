var nt = Object.defineProperty;
var st = (n, e, t) => e in n ? nt(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : n[e] = t;
var k = (n, e, t) => st(n, typeof e != "symbol" ? e + "" : e, t);
import {
  _ as ot
} from "./IX8JM5E_.js";
import {
  d as re,
  o as f,
  c as R,
  b as F,
  f as ie,
  ah as p,
  ai as S,
  aj as l,
  a4 as X,
  a2 as ne,
  ak as se,
  h as De,
  y as P,
  al as rt,
  j as U,
  R as ve,
  am as it,
  ac as He,
  a7 as Ae,
  a3 as We,
  a as h,
  D as N,
  e as d,
  G as $,
  an as Le,
  n as me,
  t as D,
  ao as at,
  F as H,
  q as Re,
  H as Me,
  _ as Ve,
  M as ct,
  C as y,
  N as V,
  m as le,
  B as K,
  Y as te,
  p as je,
  a9 as Se,
  l as Ye,
  $ as Oe,
  ae as Ie,
  ap as Ke,
  x as qe,
  aq as xe,
  ar as lt,
  as as Ce,
  at as ut,
  au as _t,
  av as dt,
  aw as mt,
  U as pt,
  ax as gt,
  a5 as Te,
  g as Ge,
  X as j,
  a8 as ft
} from "./BdCgqCrf.js";
import {
  _ as Ze
} from "./DvkWx-zc.js";
import {
  _ as Xe
} from "./C7wM6uhi.js";
const bt = {
    class: "pages-game-init"
  },
  wt = re({
    __name: "GameInit",
    emits: ["resolve", "reject"],
    setup(n, {
      emit: e
    }) {
      return e("resolve"), (s, o) => {
        const r = ot;
        return f(), R("div", bt, [F(r, {
          fixed: ""
        })])
      }
    }
  }),
  ht = ie(wt, [
    ["__scopeId", "data-v-36c68e5b"]
  ]),
  Fe = {
    bomb: {
      idle: () => l(() => import("./D0AuTG3U.js"), [], import.meta.url),
      exp: () => l(() => import("./VAbkGEP8.js"), [], import.meta.url)
    },
    tsubasa: {
      idle: () => l(() => import("./CU-59Qi6.js"), [], import.meta.url),
      exp: () => l(() => import("./Bna8SNzr.js"), [], import.meta.url)
    },
    clover: {
      idle: () => l(() => import("./Bel49BDH.js"), [], import.meta.url),
      exp: () => l(() => import("./DAJbdhbu.js"), [], import.meta.url)
    },
    dogs: {
      idle: () => l(() => import("./u8-ubWQv.js"), [], import.meta.url),
      exp: () => l(() => import("./DmRr-UYS.js"), [], import.meta.url)
    },
    harris: {
      idle: () => l(() => import("./Cnlj7wz7.js"), [], import.meta.url),
      exp: () => l(() => import("./BN5w9tdX.js"), [], import.meta.url)
    },
    trump: {
      idle: () => l(() => import("./dWkHQbnT.js"), [], import.meta.url),
      exp: () => l(() => import("./CMBTH3PQ.js"), [], import.meta.url)
    },
    freeze: {
      idle: () => l(() => import("./DLvoNWfm.js"), [], import.meta.url),
      exp: () => l(() => import("./5K18VY8c.js"), [], import.meta.url)
    },
    pumpkin: {
      idle: () => l(() => import("./CICfhgoV.js"), [], import.meta.url),
      exp: () => l(() => import("./BiJxrlLa.js"), [], import.meta.url)
    },
    nyBomb1: {
      idle: () => l(() => import("./DDVtcpgK.js"), [], import.meta.url),
      exp: () => l(() => import("./CoNdEQvB.js"), [], import.meta.url)
    },
    nyBomb2: {
      idle: () => l(() => import("./lajrCipI.js"), [], import.meta.url),
      exp: () => l(() => import("./C3qpXbYu.js"), [], import.meta.url)
    },
    nyFreeze1: {
      idle: () => l(() => import("./CgL1RGSf.js"), [], import.meta.url),
      exp: () => l(() => import("./5Gv6NAaF.js"), [], import.meta.url)
    },
    nyItem1: {
      idle: () => l(() => import("./BbAq37Hf.js"), [], import.meta.url),
      exp: () => l(() => import("./MIko73Hg.js"), [], import.meta.url)
    },
    nyItem2: {
      idle: () => l(() => import("./DEWBxJFe.js"), [], import.meta.url),
      exp: () => l(() => import("./BR_CpXHw.js"), [], import.meta.url)
    },
    nyItem3: {
      idle: () => l(() => import("./dYA8D5TX.js"), [], import.meta.url),
      exp: () => l(() => import("./BbqGAQN1.js"), [], import.meta.url)
    },
    nyItem4: {
      idle: () => l(() => import("./C9ViuJQJ.js"), [], import.meta.url),
      exp: () => l(() => import("./NITIQQO8.js"), [], import.meta.url)
    },
    nyItem5: {
      idle: () => l(() => import("./BfLZaIBP.js"), [], import.meta.url),
      exp: () => l(() => import("./PsXdmjgd.js"), [], import.meta.url)
    },
    nyItem6: {
      idle: () => l(() => import("./D6jOitZo.js"), [], import.meta.url),
      exp: () => l(() => import("./BDm3zlNn.js"), [], import.meta.url)
    },
    nyItem7: {
      idle: () => l(() => import("./B6jzVdzv.js"), [], import.meta.url),
      exp: () => l(() => import("./JOkXg6lF.js"), [], import.meta.url)
    },
    nyItem8: {
      idle: () => l(() => import("./DyML_CFl.js"), [], import.meta.url),
      exp: () => l(() => import("./g4p-tenb.js"), [], import.meta.url)
    },
    cnyCoins: {
      idle: () => l(() => import("./Yy0lxZK0.js"), [], import.meta.url),
      exp: () => l(() => import("./0NKW7pcF.js"), [], import.meta.url)
    },
    cnyFireworks: {
      idle: () => l(() => import("./CE3q4bse.js"), [], import.meta.url),
      exp: () => l(() => import("./BjLMVngq.js"), [], import.meta.url)
    },
    cnyLanterns: {
      idle: () => l(() => import("./Dnlbrfrw.js"), [], import.meta.url),
      exp: () => l(() => import("./DozLdMWF.js"), [], import.meta.url)
    },
    cnySnake: {
      idle: () => l(() => import("./BpOg54jW.js"), [], import.meta.url),
      exp: () => l(() => import("./CdDWlhkN.js"), [], import.meta.url)
    },
    valentineHeart: {
      idle: () => l(() => import("./BGi39Lbv.js"), [], import.meta.url),
      exp: () => l(() => import("./Yjl88kXa.js"), [], import.meta.url)
    },
    valentineHeartLocked: {
      idle: () => l(() => import("./B9dQcdlu.js"), [], import.meta.url),
      exp: () => l(() => import("./wR1fNUxh.js"), [], import.meta.url)
    },
    valentineHeartWings: {
      idle: () => l(() => import("./BqCIi9q3.js"), [], import.meta.url),
      exp: () => l(() => import("./ien7UnBu.js"), [], import.meta.url)
    },
    tgeLetterT: {
      idle: () => l(() => import("./Df-2RVRn.js"), [], import.meta.url),
      exp: () => l(() => import("./tKOtGKUA.js"), [], import.meta.url)
    },
    tgeLetterG: {
      idle: () => l(() => import("./DqMIhfrS.js"), [], import.meta.url),
      exp: () => l(() => import("./CQpDdhhI.js"), [], import.meta.url)
    },
    tgeLetterE: {
      idle: () => l(() => import("./YUzaaxHE.js"), [], import.meta.url),
      exp: () => l(() => import("./a-PBRCW4.js"), [], import.meta.url)
    },
    tgeLetterS: {
      idle: () => l(() => import("./CrcgLwVC.js"), [], import.meta.url),
      exp: () => l(() => import("./DwrCd7_f.js"), [], import.meta.url)
    },
    tgeLetterP: {
      idle: () => l(() => import("./45COjGbn.js"), [], import.meta.url),
      exp: () => l(() => import("./D-7B0Cr-.js"), [], import.meta.url)
    },
    tgeLetterR: {
      idle: () => l(() => import("./B2VjYitN.js"), [], import.meta.url),
      exp: () => l(() => import("./BW1dFuC7.js"), [], import.meta.url)
    },
    tgeLetterI: {
      idle: () => l(() => import("./BK9PEIOW.js"), [], import.meta.url),
      exp: () => l(() => import("./tf8YdrdM.js"), [], import.meta.url)
    },
    tgeLetterN: {
      idle: () => l(() => import("./DXyeWPq3.js"), [], import.meta.url),
      exp: () => l(() => import("./Dsu0DzKE.js"), [], import.meta.url)
    }
  },
  $e = async n => {
    const e = async s => await new Promise(o => {
      const r = new Image;
      r.src = s, r.complete && o(r), r.onload = () => o(r)
    }), t = [...n.assets];
    return t.sort((s, o) => {
      const r = n.layers.find(u => u.refId === s.id),
        a = n.layers.find(u => u.refId === o.id);
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
      const [g, I] = await Promise.all([Fe[i].idle(), Fe[i].exp()]), [A, w] = await Promise.all([$e(g), $e(I)]);
      return [{
        lottie: [A, w],
        probability: 1
      }]
    }, s = async i => {
      const g = await Promise.all(i.map(A => t(A))),
        I = 1 / g.length;
      return g.map(A => ({
        lottie: A[0].lottie,
        probability: I
      }))
    }, o = async () => {
      switch (e) {
        case S.HALLOWEEN:
          return await t("pumpkin");
        case S.TSUBASA: {
          const i = await s(["clover", "tsubasa"]);
          return i[0].probability = .7, i[1].probability = .3, i
        }
        case S.NEW_YEAR:
          return await s(["nyItem1", "nyItem2", "nyItem3", "nyItem4", "nyItem5", "nyItem6", "nyItem7", "nyItem8"]);
        case S.CHINESE_NEW_YEAR:
          return await s(["cnyCoins", "cnyLanterns"]);
        case S.VALENTINE:
          return await s(["valentineHeart", "valentineHeartLocked", "valentineHeartWings"]);
        case S.TGE:
          return await s(["tgeLetterT", "tgeLetterG", "tgeLetterE", "tgeLetterS", "tgeLetterP", "tgeLetterR", "tgeLetterI", "tgeLetterN"]);
        default:
          return await t("clover")
      }
    }, r = async () => {
      switch (e) {
        case S.NEW_YEAR:
          return await s(["nyBomb1", "nyBomb2"]);
        case S.CHINESE_NEW_YEAR:
          return await t("cnyFireworks");
        default:
          return await t("bomb")
      }
    }, a = async () => {
      switch (e) {
        case S.NEW_YEAR:
          return await t("nyFreeze1");
        case S.CHINESE_NEW_YEAR:
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
  },
  oe = {
    SMALL: {
      speed: .9,
      asset: .7
    },
    MEDIUM: {
      speed: 1,
      asset: 1
    },
    LARGE: {
      speed: 1.1,
      asset: 1.3
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
    r = o.reduce((c, E) => (c[E] = yt(s[E]), c), {}),
    a = o.map(c => s[c]).reverse(),
    u = Promise.resolve([{
      lottie: [{}, {}],
      probability: 1
    }]),
    i = await Promise.all([ee(p.CLOVER, e), ee(p.FREEZE, e), ee(p.BOMB, e), ...n[p.DOGS] ? [ee(p.DOGS, e)] : [u], ...n[p.TRUMP] ? [ee(p.TRUMP, e)] : [u], ...n[p.HARRIS] ? [ee(p.HARRIS, e)] : [u]]),
    g = () => {
      switch (e) {
        case S.TGE:
          return oe.MEDIUM
      }
    };
  t.push({
    assetType: p.CLOVER,
    probability: n[p.CLOVER].probability,
    lottie: i[0],
    pointType: "bp",
    clickValue: n[p.CLOVER].perClick,
    size: g()
  });
  const I = () => {
    switch (e) {
      case S.TGE:
        return oe.LARGE
    }
  };
  t.push({
    assetType: p.FREEZE,
    probability: n[p.FREEZE].probability,
    lottie: i[1],
    freeze: !0,
    size: I()
  });
  const A = () => {
      switch (e) {
        case S.HALLOWEEN:
          return 10;
        case S.CHINESE_NEW_YEAR:
          return 1;
        default:
          return -100
      }
    },
    w = () => {
      switch (e) {
        case S.TGE:
          return oe.LARGE
      }
    };
  return t.push({
    assetType: p.BOMB,
    probability: n[p.BOMB].probability,
    lottie: i[2],
    pointType: "bp",
    bomb: !0,
    size: w(),
    clickValue: A()
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
  It = .85,
  Qe = 275 * It,
  Tt = 350 - 1e3 / Qe,
  kt = .45,
  ue = 8,
  be = 10,
  we = -10,
  he = 6,
  ze = ue * 2,
  Ne = .7,
  Lt = 500,
  Ot = ({
    asset: n,
    score: e
  }, {
    freeze: t,
    bomb: s
  }) => {
    const o = n.clickValue || 0;
    return o && e && e.update(o), n.freeze && t(n), n.bomb && s(n), o
  },
  Pt = n => {
    const e = Math.random();
    let t = 0;
    const s = Object.values(n).find(a => (t += a.probability, e < t));
    if (!s) return;
    const o = s.lottie,
      r = (() => {
        const a = Math.random();
        let u = 0;
        for (const i of o)
          if (u += i.probability, a < u) return i.lottie
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
      t = Math.min(n, Lt),
      s = (t - ze * (he - 1)) / (he + 2 * Ne);
    let o = Ne * s + (n - t) / 2;
    for (let r = 0; r < he; r++) {
      const a = o,
        u = a + s / 2,
        i = a + s;
      e.push({
        start: a,
        center: u,
        end: i
      }), o += s + ze
    }
    return {
      width: s,
      arr: e
    }
  },
  Vt = n => [...Array(he)].map(() => {
    if (!(Math.random() > kt)) return Pt(n)
  }),
  St = () => {
    const n = [oe.SMALL, oe.MEDIUM, oe.LARGE];
    return n[se(0, n.length - 1)]
  };
class Mt {
  constructor(e, t, s) {
    k(this, "canvas");
    k(this, "ctx");
    k(this, "callbacks");
    k(this, "width");
    k(this, "height");
    k(this, "isStopped", !1);
    k(this, "frozenAt");
    k(this, "totalFreezeTime", 0);
    k(this, "columns");
    k(this, "objects", []);
    k(this, "pointsAnimation", []);
    k(this, "startedAt");
    k(this, "lastGenerationAt");
    k(this, "lastRenderAt");
    k(this, "resizeFn", this.resize.bind(this));
    k(this, "processTouchesFn", this.processTouches.bind(this));
    k(this, "pointerEvent", window.ontouchstart === null ? "touchstart" : "mousedown");
    k(this, "assets");
    k(this, "scoresMap");
    k(this, "assetClicks");
    this.canvas = e, this.callbacks = t, this.assets = s.assets, this.scoresMap = s.scoresMap, this.assetClicks = Object.fromEntries(s.assets.map(r => [r.assetType, {
      clicks: 0
    }]));
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
      const o = this.objects.find(r => r.rect === void 0 || r.isExplosion ? !1 : s.x > r.rect.x - be && s.x < r.rect.x + r.rect.width + be && s.y > r.rect.y - be && s.y < r.rect.y + r.rect.height + be);
      o && (o.onClick(o), o.isExplosion = !0, o.addedAt = performance.now())
    })
  }
  resize() {
    this.ctx.clearRect(0, 0, this.width, this.height), this.width = window.innerWidth, this.height = window.innerHeight, this.canvas.width = this.width, this.canvas.height = this.height, this.columns = Dt(this.width)
  }
  getObjectRect(e, t, s) {
    const o = (() => {
        if (s) return t.top;
        const a = t.size.speed * Qe;
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
    const s = t.asset,
      o = e.width * s,
      r = e.height * s,
      a = (e.width - o) / 2,
      u = (e.height - r) / 2;
    return {
      x: e.x + a + we,
      y: e.y + u + we,
      width: o - we * 2,
      height: r - we * 2
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
    }(!this.lastGenerationAt || this.msFromStart() - this.lastGenerationAt > Tt) && !this.frozenAt && (Vt(this.assets).forEach((t, s) => {
      if (!t) return;
      const {
        lottie: o,
        asset: r
      } = t;
      this.objects.push({
        asset: r,
        lottie: o,
        top: -1 * this.columns.width,
        size: r.size ?? St(),
        column: s,
        lastRenderAt: e,
        addedAt: e,
        offset: {
          x: se(-1 * ue, ue),
          y: se(-1 * ue, ue)
        },
        onClick: a => this.onObjClick(a),
        isExplosion: !1
      })
    }), this.objects.sort((t, s) => s.size.speed - t.size.speed), this.lastGenerationAt = this.msFromStart()), this.objects = this.objects.filter(t => {
      const {
        top: s,
        rect: o
      } = this.getObjectRect(e, t, !!this.frozenAt);
      if (t.top = s, t.rect = o, t.lastRenderAt = e, t.top > this.height) return !1;
      const r = (() => {
        const u = t.isExplosion ? t.lottie.exp : t.lottie.base,
          i = Math.floor((e - t.addedAt) / u.frameDuration);
        if (!(t.isExplosion && i >= u.countFrames)) return u.images[i % u.countFrames]
      })();
      if (r === void 0) return !1;
      const a = this.getImageRect(o, t.size);
      return this.ctx.drawImage(r, a.x, a.y, a.width, a.height), !0
    }), this.pointsAnimation = this.pointsAnimation.filter(t => {
      this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.font = "700 24px RoobertPro";
      const o = (e - t.addedAt) / 500;
      if (o >= 1) return !1;
      const r = 1 - o,
        a = this.columns.arr[t.column].center + t.offset.x,
        u = (() => {
          const g = t.top + t.offset.y,
            I = this.frozenAt ? g : g + 60,
            A = g - 40;
          if (o < .4) return g + (I - g) * (o / .4);
          const w = (o - .4) / (1 - .4);
          return I + (A - I) * w
        })();
      return t.points >= 0 ? (this.ctx.fillStyle = `rgba(234, 212, 12, ${r})`, this.ctx.fillText(`+${t.points}`, a, u)) : (this.ctx.fillStyle = `rgba(229, 57, 53, ${r})`, this.ctx.fillText(`${t.points}`, a, u)), !0
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
      r = Ot({
        asset: e.asset,
        score: o
      }, {
        freeze: () => this.onFreeze(s),
        bomb: u => this.bombCallback(u)
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
const xt = {
    class: "canvas-wrapper"
  },
  Ct = {
    key: 0,
    class: "bomb"
  },
  Gt = {
    key: 0,
    class: "freeze"
  },
  Ft = {
    class: "overlays"
  },
  $t = {
    class: "points"
  },
  zt = {
    class: "amount"
  },
  Nt = re({
    __name: "GameProcess",
    props: {
      points: {},
      gameOptions: {}
    },
    emits: ["end"],
    setup(n, {
      emit: e
    }) {
      const t = n,
        s = e,
        o = De().$webApp;
      let r;
      const a = P(),
        u = P(0),
        i = () => {
          const c = P(new ne(0)),
            E = P(!1),
            L = P(!1),
            m = P(!1),
            T = Me(() => E.value = !1, 100).debouncedFunction,
            M = Me(() => L.value = !1, 500).debouncedFunction;
          return {
            value: c,
            scaled: E,
            isBomb: L,
            frozen: m,
            scaleBack: T,
            bombBack: M
          }
        },
        g = rt(Object.values(t.points).reduce((c, E) => (c[E.type] = c[E.type] ?? i(), c), {})),
        I = P(!1),
        A = U(() => Object.values(g).some(c => c.isBomb)),
        w = U(() => Object.values(t.points).map(c => ({
          value: (() => {
            const E = g[c.type].value;
            if (c.type === Je.BP) return ve(E);
            const L = E.decimalPlaces();
            return it(E, {
              accuracy: L,
              rounding: ne.ROUND_DOWN
            })
          })(),
          icon: c.icon,
          scaled: g[c.type].scaled,
          bomb: g[c.type].isBomb
        })));
      return He(() => {
        if (setTimeout(() => Ae().blockOverflow(), 300), o.enableClosingConfirmation(), !a.value) throw X("Canvas not found");
        r = new Mt(a.value, {
          timeLeft: c => u.value = c,
          objectClicked: (c, E) => {
            c.pointType && E !== void 0 && (g[c.pointType].value = new ne(E), g[c.pointType].scaled = !0, g[c.pointType].scaleBack()), o.HapticFeedback.impactOccurred("heavy")
          },
          onGameEnd: c => {
            s("end", c)
          },
          onFreeze: c => {
            I.value = c
          },
          onBomb: c => {
            g[c.pointType].isBomb = !0, g[c.pointType].bombBack(), o.HapticFeedback.notificationOccurred("error")
          }
        }, t.gameOptions)
      }), We(() => {
        Ae().unblockOverflow(), o.disableClosingConfirmation(), r && r.destroy()
      }), (c, E) => {
        const L = Ve;
        return f(), R("div", {
          class: me(["pages-game-process", {
            "is-bomb": d(A)
          }])
        }, [h("div", xt, [F(Le, {
          name: "bomb-transition"
        }, {
          default: N(() => [d(A) ? (f(), R("div", Ct)) : $("", !0)]),
          _: 1
        }), h("canvas", {
          ref_key: "canvasRef",
          ref: a
        }, null, 512), F(Le, {
          name: "freeze-transition",
          duration: 800
        }, {
          default: N(() => [d(I) ? (f(), R("div", Gt)) : $("", !0)]),
          _: 1
        })]), h("div", Ft, [h("div", {
          class: me(["timer", {
            "is-frozen": d(I)
          }])
        }, D(("getMmSsFromMs" in c ? c.getMmSsFromMs : d(at))(d(u))), 3), h("div", $t, [(f(!0), R(H, null, Re(d(w), m => (f(), R("div", {
          key: m.icon,
          class: me(["item", {
            "is-scaled": m.scaled,
            "is-bomb": m.bomb
          }])
        }, [F(L, {
          name: m.icon,
          class: "icon"
        }, null, 8, ["name"]), h("div", zt, D(m.value), 1)], 2))), 128))])])], 2)
      }
    }
  }),
  Bt = ie(Nt, [
    ["__scopeId", "data-v-db27bd65"]
  ]),
  Ut = {
    class: "pages-game-reward-item"
  },
  Ht = {
    class: "icon-wrapper"
  },
  Wt = {
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
  qt = re({
    __name: "GameRewardItem",
    props: {
      logo: {},
      name: {},
      value: {},
      description: {}
    },
    setup(n) {
      return (e, t) => {
        const s = Ve;
        return f(), R("div", Ut, [h("div", Ht, [F(s, {
          name: e.logo,
          class: "icon"
        }, null, 8, ["name"])]), h("div", Wt, D(e.name), 1), h("div", jt, [h("div", Yt, D(e.value), 1), e.description ? (f(), R("div", Kt, D(e.description), 1)) : $("", !0)])])
      }
    }
  }),
  Zt = ie(qt, [
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
  _n = {
    class: "label"
  },
  dn = re({
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
        o = P(!1),
        r = U(() => `${y("game.end.share_text",{bp:s.value})}`),
        a = () => {
          Se().game.shareWin(), De().$webApp.shareLink(Ye().public.TELEGRAM_APP_URL, r.value)
        },
        u = () => {
          Oe().update(), Ie().push({
            name: "wallet",
            query: {
              tab: "points"
            }
          })
        };
      return (i, g) => {
        var L, m;
        const I = Ze,
          A = Ke,
          w = Zt,
          c = qe,
          E = Xe;
        return f(), R("div", Xt, [i.backgroundImage ? (f(), R("img", {
          key: 0,
          src: i.backgroundImage,
          class: "bg-image"
        }, null, 8, Jt)) : (f(), V(I, {
          key: 1
        })), h("div", Qt, [i.asset ? (f(), R(H, {
          key: 0
        }, [i.asset.type === "lottie" ? (f(), V(A, {
          key: 0,
          name: i.asset.src,
          class: "animation"
        }, null, 8, ["name"])) : (f(), R("img", {
          key: 1,
          src: i.asset.src,
          class: "animation"
        }, null, 8, en))], 64)) : $("", !0), h("div", {
          class: "message",
          innerHTML: i.message
        }, null, 8, tn), h("div", nn, [(L = i.additionalRewardItems) != null && L.length ? (f(), R("div", sn, [h("div", on, [(f(!0), R(H, null, Re(i.additionalRewardItems, T => (f(), V(w, xe({
          key: T.name,
          ref_for: !0
        }, T), null, 16))), 128))])])) : $("", !0), h("div", rn, [(m = i.additionalRewardItems) != null && m.length ? (f(), R("div", an, D(("t" in i ? i.t : d(y))("game.end.total_earned_label")), 1)) : $("", !0), h("div", cn, [(f(!0), R(H, null, Re(d(t), T => (f(), V(w, xe({
          key: T.name,
          ref_for: !0
        }, T), null, 16))), 128))])])])]), h("div", ln, [h("div", un, [i.scores.bp.value && i.playPasses && i.playPasses > 4 ? (f(), V(c, {
          key: 0,
          type: d(K).SECONDARY,
          size: d(te).LARGE,
          onClick: a
        }, {
          default: N(() => [le(D(("t" in i ? i.t : d(y))("base.share")), 1)]),
          _: 1
        }, 8, ["type", "size"])) : (f(), V(c, {
          key: 1,
          type: d(K).SECONDARY,
          size: d(te).LARGE,
          onClick: g[0] || (g[0] = T => o.value = !0)
        }, {
          default: N(() => [le(D(("t" in i ? i.t : d(y))("game.end.additional.invite")), 1)]),
          _: 1
        }, 8, ["type", "size"])), F(c, {
          type: d(K).SECONDARY,
          size: d(te).LARGE,
          onClick: g[1] || (g[1] = T => u())
        }, {
          default: N(() => [le(D(("t" in i ? i.t : d(y))("game.end.additional.balance")), 1)]),
          _: 1
        }, 8, ["type", "size"])]), i.playPasses && i.playPasses > 0 ? (f(), V(c, {
          key: 0,
          size: d(te).LARGE,
          class: "highlighted-btn",
          onClick: g[2] || (g[2] = T => i.$emit("playAgain"))
        }, {
          default: N(() => [h("span", _n, [h("span", null, D(`${("t"in i?i.t:d(y))("base.play")} (`), 1), g[5] || (g[5] = h("i", {
            class: "ticket"
          }, null, -1)), h("span", null, D(` ${("t"in i?i.t:d(y))("game.end.pp_left",{n:i.playPasses})})`), 1)])]),
          _: 1
        }, 8, ["size"])) : (f(), V(c, {
          key: 1,
          size: d(te).LARGE,
          onClick: g[3] || (g[3] = () => i.$router.push({
            name: "index"
          }))
        }, {
          default: N(() => [le(D(("t" in i ? i.t : d(y))("game.end.additional.return")), 1)]),
          _: 1
        }, 8, ["size"]))]), F(E, {
          modelValue: d(o),
          "onUpdate:modelValue": g[4] || (g[4] = T => je(o) ? o.value = T : null),
          "referral-token": i.referralToken
        }, null, 8, ["modelValue", "referral-token"])])
      }
    }
  }),
  mn = ie(dn, [
    ["__scopeId", "data-v-81c1f8de"]
  ]),
  pn = ["src"],
  gn = {
    class: "content"
  },
  fn = ["src"],
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
  En = {
    class: "amount-hidden"
  },
  vn = {
    class: "amount"
  },
  An = {
    class: "description"
  },
  Rn = {
    class: "buttons"
  },
  In = {
    key: 2,
    src: lt,
    class: "pokras-images"
  },
  Tn = re({
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
        r = P("init"),
        a = P(null),
        u = P(null),
        i = {
          toCenter: {
            duration: 100,
            delay: 0
          }
        },
        g = () => {
          if (!a.value || !u.value) throw X("Points elements are not defined");
          const m = a.value,
            M = u.value.getBoundingClientRect(),
            z = () => {
              m.style.top = `${M.top}px`, m.style.right = `${M.left}px`, m.style.transition = `all ${i.toCenter.duration}ms ease`, r.value = "center-points"
            },
            G = () => {
              r.value = "final"
            },
            J = () => {
              m.style.position = "static"
            };
          o.push(setTimeout(z, i.toCenter.delay)), o.push(setTimeout(() => {
            G(), J()
          }, i.toCenter.duration + i.toCenter.delay))
        },
        I = Ae().internal.isPokrasTheme,
        A = P(!1),
        w = U(() => ve(t.reward)),
        c = U(() => `${y("game.end.share_text",{bp:w.value})} BP`),
        E = m => {
          const T = y("base.play"),
            M = Ce("i", {
              class: "ticket"
            }),
            z = y("game.end.pp_left", {
              n: m
            });
          return Ce("span", [T, " (", M, " ", z, ")"])
        },
        L = U(() => {
          const m = [];
          return t.reward && t.playPasses && t.playPasses > 4 && m.push({
            label: y("game.end.share_win"),
            type: I.value ? K.OUTLINE : K.SECONDARY,
            onClick: () => {
              Se().game.shareWin(), De().$webApp.shareLink(Ye().public.TELEGRAM_APP_URL, c.value)
            }
          }), t.playPasses && t.playPasses > 0 ? m.push({
            label: E(t.playPasses),
            type: K.PRIMARY,
            onClick: () => s("playAgain")
          }) : m.push({
            label: y("base.continue"),
            type: K.PRIMARY,
            onClick: () => {
              Ie().push({
                name: "index"
              })
            }
          }), m
        });
      return He(() => {
        g()
      }), We(() => {
        o.forEach(m => clearTimeout(m))
      }), (m, T) => {
        const M = Ze,
          z = Ke,
          G = Ve,
          J = qe,
          ae = Xe;
        return f(), R("div", {
          class: me(["pages-game-end", `animation-stage-${d(r)}`])
        }, [m.backgroundImage ? (f(), R("img", {
          key: 0,
          src: m.backgroundImage,
          class: "bg-image"
        }, null, 8, pn)) : (f(), V(M, {
          key: 1
        })), h("div", gn, [m.asset ? (f(), R(H, {
          key: 0
        }, [m.asset.type === "lottie" ? (f(), V(z, {
          key: 0,
          name: m.asset.src,
          class: "animation"
        }, null, 8, ["name"])) : (f(), R("img", {
          key: 1,
          src: m.asset.src,
          class: "animation"
        }, null, 8, fn))], 64)) : $("", !0), h("div", {
          class: "message",
          innerHTML: m.message
        }, null, 8, bn), h("div", wn, [h("div", hn, [h("div", {
          ref_key: "pointsEl",
          ref: a,
          class: me(["animated-points visible", {
            "is-small": d(r) === "init"
          }])
        }, [F(G, {
          name: "logo-token",
          class: "token-img"
        }), h("div", yn, D(d(w)), 1), h("div", En, D(d(w)), 1)], 2), h("div", {
          ref_key: "pointsHiddenEl",
          ref: u,
          class: "animated-points hidden"
        }, [F(G, {
          name: "logo-token",
          class: "token-img"
        }), h("div", vn, D(d(w)), 1)], 512)]), h("div", An, D(("t" in m ? m.t : d(y))("base.rewards")), 1)])]), h("div", Rn, [(f(!0), R(H, null, Re(d(L), (x, fe) => (f(), V(J, {
          key: fe,
          type: x.type,
          link: x.to,
          size: d(te).LARGE,
          onClick: Q => x.onClick && x.onClick()
        }, {
          default: N(() => [typeof x.label == "string" ? (f(), R(H, {
            key: 0
          }, [le(D(x.label), 1)], 64)) : (f(), V(ut(x.label), {
            key: 1
          }))]),
          _: 2
        }, 1032, ["type", "link", "size", "onClick"]))), 128))]), F(ae, {
          modelValue: d(A),
          "onUpdate:modelValue": T[0] || (T[0] = x => je(A) ? A.value = x : null),
          "share-text": d(c),
          "referral-token": m.referralToken
        }, null, 8, ["modelValue", "share-text", "referral-token"]), d(I) ? (f(), R("img", In)) : $("", !0)], 2)
      }
    }
  }),
  kn = ie(Tn, [
    ["__scopeId", "data-v-3952b8cf"]
  ]),
  Ln = n => {
    const e = {
        101: [y("game.end.message.good.1"), y("game.end.message.good.2"), y("game.end.message.good.3"), y("game.end.message.good.4"), y("game.end.message.good.5")],
        51: [y("game.end.message.ok.1"), y("game.end.message.ok.2"), y("game.end.message.ok.3"), y("game.end.message.ok.4"), y("game.end.message.ok.5")],
        default: [y("game.end.message.default.1"), y("game.end.message.default.2"), y("game.end.message.default.3"), y("game.end.message.default.4"), y("game.end.message.default.5")]
      },
      t = {
        0: [y("game.end.message.zero.1")]
      },
      s = Object.keys(t).find(u => n === Number(u));
    if (s) return t[s][se(0, t[s].length - 1)];
    const {
      default: o,
      ...r
    } = e, a = Object.keys(r).sort((u, i) => Number(i) - Number(u)).find(u => n >= Number(u));
    return a ? r[a][se(0, r[a].length - 1)] : e.default[se(0, e.default.length - 1)]
  },
  Be = () => _t(["animations/Unicorn", "animations/Lightning", "animations/PartyPopper", "animations/Firecracker", "animations/Collision"]);
let v;
const et = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && et.decode();
let _e = null;

function ye() {
  return (_e === null || _e.byteLength === 0) && (_e = new Uint8Array(v.memory.buffer)), _e
}

function de(n, e) {
  return n = n >>> 0, et.decode(ye().subarray(n, n + e))
}
const B = new Array(128).fill(void 0);
B.push(void 0, null, !0, !1);
let pe = B.length;

function b(n) {
  pe === B.length && B.push(B.length + 1);
  const e = pe;
  return pe = B[e], B[e] = n, e
}

function _(n) {
  return B[n]
}
let Z = 0;
const Ee = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  On = typeof Ee.encodeInto == "function" ? function(n, e) {
    return Ee.encodeInto(n, e)
  } : function(n, e) {
    const t = Ee.encode(n);
    return e.set(t), {
      read: n.length,
      written: t.length
    }
  };

function ge(n, e, t) {
  if (t === void 0) {
    const u = Ee.encode(n),
      i = e(u.length, 1) >>> 0;
    return ye().subarray(i, i + u.length).set(u), Z = u.length, i
  }
  let s = n.length,
    o = e(s, 1) >>> 0;
  const r = ye();
  let a = 0;
  for (; a < s; a++) {
    const u = n.charCodeAt(a);
    if (u > 127) break;
    r[o + a] = u
  }
  if (a !== s) {
    a !== 0 && (n = n.slice(a)), o = t(o, s, s = a + n.length * 3, 1) >>> 0;
    const u = ye().subarray(o + a, o + s),
      i = On(n, u);
    a += i.written, o = t(o, s, a, 1) >>> 0
  }
  return Z = a, o
}

function ce(n) {
  return n == null
}
let Y = null;

function O() {
  return (Y === null || Y.buffer.detached === !0 || Y.buffer.detached === void 0 && Y.buffer !== v.memory.buffer) && (Y = new DataView(v.memory.buffer)), Y
}

function Pn(n) {
  n < 132 || (B[n] = pe, pe = n)
}

function q(n) {
  const e = _(n);
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

function Dn(n) {
  try {
    const o = v.__wbindgen_add_to_stack_pointer(-16),
      r = ge(n, v.__wbindgen_malloc, v.__wbindgen_realloc),
      a = Z;
    v.proof(o, r, a);
    var e = O().getInt32(o + 4 * 0, !0),
      t = O().getInt32(o + 4 * 1, !0),
      s = O().getInt32(o + 4 * 2, !0);
    if (s) throw q(t);
    return q(e)
  } finally {
    v.__wbindgen_add_to_stack_pointer(16)
  }
}

function Vn(n, e, t, s) {
  let o, r;
  try {
    const w = v.__wbindgen_add_to_stack_pointer(-16),
      c = ge(n, v.__wbindgen_malloc, v.__wbindgen_realloc),
      E = Z;
    v.pack(w, c, E, b(e), b(t), b(s));
    var a = O().getInt32(w + 4 * 0, !0),
      u = O().getInt32(w + 4 * 1, !0),
      i = O().getInt32(w + 4 * 2, !0),
      g = O().getInt32(w + 4 * 3, !0),
      I = a,
      A = u;
    if (g) throw I = 0, A = 0, q(i);
    return o = I, r = A, de(I, A)
  } finally {
    v.__wbindgen_add_to_stack_pointer(16), v.__wbindgen_free(o, r, 1)
  }
}

function C(n, e) {
  try {
    return n.apply(this, e)
  } catch (t) {
    v.__wbindgen_exn_store(b(t))
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

function Mn() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbindgen_error_new = function(e, t) {
    const s = new Error(de(e, t));
    return b(s)
  }, n.wbg.__wbindgen_string_get = function(e, t) {
    const s = _(t),
      o = typeof s == "string" ? s : void 0;
    var r = ce(o) ? 0 : ge(o, v.__wbindgen_malloc, v.__wbindgen_realloc),
      a = Z;
    O().setInt32(e + 4 * 1, a, !0), O().setInt32(e + 4 * 0, r, !0)
  }, n.wbg.__wbindgen_object_drop_ref = function(e) {
    q(e)
  }, n.wbg.__wbindgen_string_new = function(e, t) {
    const s = de(e, t);
    return b(s)
  }, n.wbg.__wbindgen_is_object = function(e) {
    const t = _(e);
    return typeof t == "object" && t !== null
  }, n.wbg.__wbindgen_is_string = function(e) {
    return typeof _(e) == "string"
  }, n.wbg.__wbindgen_is_bigint = function(e) {
    return typeof _(e) == "bigint"
  }, n.wbg.__wbindgen_bigint_from_u64 = function(e) {
    const t = BigInt.asUintN(64, e);
    return b(t)
  }, n.wbg.__wbindgen_jsval_eq = function(e, t) {
    return _(e) === _(t)
  }, n.wbg.__wbindgen_is_undefined = function(e) {
    return _(e) === void 0
  }, n.wbg.__wbindgen_in = function(e, t) {
    return _(e) in _(t)
  }, n.wbg.__wbg_crypto_1d1f22824a6a080c = function(e) {
    const t = _(e).crypto;
    return b(t)
  }, n.wbg.__wbg_process_4a72847cc503995b = function(e) {
    const t = _(e).process;
    return b(t)
  }, n.wbg.__wbg_versions_f686565e586dd935 = function(e) {
    const t = _(e).versions;
    return b(t)
  }, n.wbg.__wbg_node_104a2ff8d6ea03a2 = function(e) {
    const t = _(e).node;
    return b(t)
  }, n.wbg.__wbg_require_cca90b1a94a0255b = function() {
    return C(function() {
      const e = module.require;
      return b(e)
    }, arguments)
  }, n.wbg.__wbindgen_is_function = function(e) {
    return typeof _(e) == "function"
  }, n.wbg.__wbg_msCrypto_eb05e62b530a1508 = function(e) {
    const t = _(e).msCrypto;
    return b(t)
  }, n.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function() {
    return C(function(e, t) {
      _(e).randomFillSync(q(t))
    }, arguments)
  }, n.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function() {
    return C(function(e, t) {
      _(e).getRandomValues(_(t))
    }, arguments)
  }, n.wbg.__wbindgen_jsval_loose_eq = function(e, t) {
    return _(e) == _(t)
  }, n.wbg.__wbindgen_boolean_get = function(e) {
    const t = _(e);
    return typeof t == "boolean" ? t ? 1 : 0 : 2
  }, n.wbg.__wbindgen_number_get = function(e, t) {
    const s = _(t),
      o = typeof s == "number" ? s : void 0;
    O().setFloat64(e + 8 * 1, ce(o) ? 0 : o, !0), O().setInt32(e + 4 * 0, !ce(o), !0)
  }, n.wbg.__wbindgen_as_number = function(e) {
    return +_(e)
  }, n.wbg.__wbg_String_b9412f8799faab3e = function(e, t) {
    const s = String(_(t)),
      o = ge(s, v.__wbindgen_malloc, v.__wbindgen_realloc),
      r = Z;
    O().setInt32(e + 4 * 1, r, !0), O().setInt32(e + 4 * 0, o, !0)
  }, n.wbg.__wbindgen_number_new = function(e) {
    return b(e)
  }, n.wbg.__wbindgen_object_clone_ref = function(e) {
    const t = _(e);
    return b(t)
  }, n.wbg.__wbg_getwithrefkey_edc2c8960f0f1191 = function(e, t) {
    const s = _(e)[_(t)];
    return b(s)
  }, n.wbg.__wbg_set_f975102236d3c502 = function(e, t, s) {
    _(e)[q(t)] = q(s)
  }, n.wbg.__wbg_get_5419cf6b954aa11d = function(e, t) {
    const s = _(e)[t >>> 0];
    return b(s)
  }, n.wbg.__wbg_length_f217bbbf7e8e4df4 = function(e) {
    return _(e).length
  }, n.wbg.__wbg_newnoargs_1ede4bf2ebbaaf43 = function(e, t) {
    const s = new Function(de(e, t));
    return b(s)
  }, n.wbg.__wbg_next_13b477da1eaa3897 = function(e) {
    const t = _(e).next;
    return b(t)
  }, n.wbg.__wbg_next_b06e115d1b01e10b = function() {
    return C(function(e) {
      const t = _(e).next();
      return b(t)
    }, arguments)
  }, n.wbg.__wbg_done_983b5ffcaec8c583 = function(e) {
    return _(e).done
  }, n.wbg.__wbg_value_2ab8a198c834c26a = function(e) {
    const t = _(e).value;
    return b(t)
  }, n.wbg.__wbg_iterator_695d699a44d6234c = function() {
    return b(Symbol.iterator)
  }, n.wbg.__wbg_get_ef828680c64da212 = function() {
    return C(function(e, t) {
      const s = Reflect.get(_(e), _(t));
      return b(s)
    }, arguments)
  }, n.wbg.__wbg_call_a9ef466721e824f2 = function() {
    return C(function(e, t) {
      const s = _(e).call(_(t));
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
      t = _(e) instanceof ArrayBuffer
    } catch {
      t = !1
    }
    return t
  }, n.wbg.__wbg_call_3bfa248576352471 = function() {
    return C(function(e, t, s) {
      const o = _(e).call(_(t), _(s));
      return b(o)
    }, arguments)
  }, n.wbg.__wbg_isSafeInteger_b9dff570f01a9100 = function(e) {
    return Number.isSafeInteger(_(e))
  }, n.wbg.__wbg_entries_c02034de337d3ee2 = function(e) {
    const t = Object.entries(_(e));
    return b(t)
  }, n.wbg.__wbg_buffer_ccaed51a635d8a2d = function(e) {
    const t = _(e).buffer;
    return b(t)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_7e3eb787208af730 = function(e, t, s) {
    const o = new Uint8Array(_(e), t >>> 0, s >>> 0);
    return b(o)
  }, n.wbg.__wbg_new_fec2611eb9180f95 = function(e) {
    const t = new Uint8Array(_(e));
    return b(t)
  }, n.wbg.__wbg_set_ec2fcf81bc573fd9 = function(e, t, s) {
    _(e).set(_(t), s >>> 0)
  }, n.wbg.__wbg_length_9254c4bd3b9f23c4 = function(e) {
    return _(e).length
  }, n.wbg.__wbg_instanceof_Uint8Array_df0761410414ef36 = function(e) {
    let t;
    try {
      t = _(e) instanceof Uint8Array
    } catch {
      t = !1
    }
    return t
  }, n.wbg.__wbg_newwithlength_76462a666eca145f = function(e) {
    const t = new Uint8Array(e >>> 0);
    return b(t)
  }, n.wbg.__wbg_subarray_975a06f9dbd16995 = function(e, t, s) {
    const o = _(e).subarray(t >>> 0, s >>> 0);
    return b(o)
  }, n.wbg.__wbg_has_bd717f25f195f23d = function() {
    return C(function(e, t) {
      return Reflect.has(_(e), _(t))
    }, arguments)
  }, n.wbg.__wbindgen_bigint_get_as_i64 = function(e, t) {
    const s = _(t),
      o = typeof s == "bigint" ? s : void 0;
    O().setBigInt64(e + 8 * 1, ce(o) ? BigInt(0) : o, !0), O().setInt32(e + 4 * 0, !ce(o), !0)
  }, n.wbg.__wbindgen_debug_string = function(e, t) {
    const s = Pe(_(t)),
      o = ge(s, v.__wbindgen_malloc, v.__wbindgen_realloc),
      r = Z;
    O().setInt32(e + 4 * 1, r, !0), O().setInt32(e + 4 * 0, o, !0)
  }, n.wbg.__wbindgen_throw = function(e, t) {
    throw new Error(de(e, t))
  }, n.wbg.__wbindgen_memory = function() {
    const e = v.memory;
    return b(e)
  }, n
}

function xn(n, e) {
  return v = n.exports, tt.__wbindgen_wasm_module = e, Y = null, _e = null, v
}
async function tt(n) {
  if (v !== void 0) return v;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("" + new URL("game_wasm_bg.Cu5SYoMx.wasm", import.meta.url).href, import.meta.url));
  const e = Mn();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: t,
    module: s
  } = await Sn(await n, e);
  return xn(t, s)
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
let ke;
const Gn = async () => {
  ke === void 0 && (ke = tt()), await ke
};
self.onmessage = async n => {
  await Gn();
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
      const o = Vn(s.gameId, s.challenge, s.earnedPoints, s.assetClicks);
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
  $n = re({
    __name: "game",
    setup(n) {
      const e = U(() => {
          var w;
          return (w = Oe().pointSymbols.value.pp) == null ? void 0 : w.balance.value.toNumber()
        }),
        t = P({
          stage: "LOADING"
        }),
        s = Ae(),
        o = Cn(),
        r = P(),
        a = P(),
        u = P(),
        i = P(),
        g = async (w, {
          assetClicks: c,
          scores: E
        }) => {
          var J;
          const L = ((J = E.bp) == null ? void 0 : J.value) ?? 0,
            m = (() => {
              var x, fe;
              const ae = [];
              if (p.HARRIS in c && c[p.HARRIS]) {
                const Q = (x = w.gameOptions.assets.find(W => W.assetType === p.HARRIS)) == null ? void 0 : x.clickValue;
                if (Q !== void 0) {
                  const W = Q * c[p.HARRIS].clicks;
                  ae.push({
                    logo: "harris",
                    name: "Harris",
                    value: String(c[p.HARRIS].clicks),
                    description: `(+${ve(W)} BP)`
                  })
                }
              }
              if (p.TRUMP in c && c[p.TRUMP]) {
                const Q = (fe = w.gameOptions.assets.find(W => W.assetType === p.TRUMP)) == null ? void 0 : fe.clickValue;
                if (Q !== void 0) {
                  const W = Q * c[p.TRUMP].clicks;
                  ae.push({
                    logo: "trump",
                    name: "Trump",
                    value: String(c[p.TRUMP].clicks),
                    description: `(+${ve(W)} BP)`
                  })
                }
              }
              return ae
            })(),
            T = !!m.length || Object.values(E).length > 1,
            M = gt(w.pow);
          if (!M) throw X("Proof of work is not calculated");
          t.value = {
            stage: "END",
            id: w.id,
            scores: E,
            bpReward: L,
            message: Ln(L),
            endWithRewards: T,
            additionalRewardItems: m
          };
          const z = await Ue(o, {
            method: "pack",
            payload: {
              gameId: t.value.id,
              challenge: M,
              earnedPoints: vt(E),
              assetClicks: c
            }
          });
          if ((await Te.claimGame(z.hash)).err) throw X("Failed to claim game");
          Se().game.gameEnd(L)
        }, I = () => Ge().warn("Rejected by turnstile"), A = async () => {
          t.value = {
            stage: "LOADING"
          }, r.value = void 0, i.value = void 0, s.internal.isTsubasaTheme.value ? (a.value = {
            type: "image",
            src: j("tsubasa/drop-game-result-image", "webp")
          }, u.value = j("tsubasa/drop-game-results-bg", "webp")) : s.internal.isNewYearTheme.value ? (a.value = {
            type: "image",
            src: j("new-year/drop-game-result-image", "webp")
          }, u.value = j("new-year/drop-game-background", "webp")) : s.internal.isChineseNewYearTheme.value ? (a.value = {
            type: "lottie",
            src: Be()
          }, u.value = j("chinese-new-year/drop-game-background", "webp")) : s.internal.isValentineTheme.value ? (a.value = {
            type: "image",
            src: j("valentine/drop-game-result-image", "webp")
          }, u.value = j("valentine/drop-game-background", "svg")) : a.value = {
            type: "lottie",
            src: Be()
          };
          const w = await Te.startGame();
          if (w.err) {
            w.message === "another game in progress" && ft().error(y("game.another_game_in_progress")), Ge().warn("Failed to start game"), Ie().push({
              name: "index"
            });
            return
          }
          const c = s.internal.theme.value,
            {
              points: E,
              gameOptions: L
            } = await Et(w.data.assets, c);
          t.value = {
            stage: "GAME",
            id: w.data.gameId,
            pow: void 0,
            points: E,
            gameOptions: L
          }, Ue(o, {
            method: "proof",
            payload: w.data.gameId
          }).then(m => {
            t.value.stage === "GAME" && (t.value.pow = m)
          }), Oe().update(), Te.getFrensUsing().then(m => {
            m.err || (r.value = m.data)
          })
        };
      return pt().initWatcher({
        key: "game",
        watchFn: () => t.value.stage === "END",
        callback: () => Ie().push({
          name: "index"
        })
      }), (w, c) => {
        var M, z;
        const E = ht,
          L = Bt,
          m = mn,
          T = kn;
        return f(), R("div", Fn, [d(t).stage === "LOADING" ? (f(), V(E, {
          key: 0,
          onResolve: c[0] || (c[0] = G => A()),
          onReject: c[1] || (c[1] = G => (A(), I()))
        })) : $("", !0), F(Le, {
          name: "game-process-transition"
        }, {
          default: N(() => [d(t).stage === "GAME" ? (f(), V(L, {
            key: "game",
            points: d(t).points,
            "game-options": d(t).gameOptions,
            onEnd: c[2] || (c[2] = G => g(d(t), G))
          }, null, 8, ["points", "game-options"])) : $("", !0)]),
          _: 1
        }), d(t).stage === "END" ? (f(), R(H, {
          key: 1
        }, [d(t).endWithRewards ? (f(), V(m, {
          key: "game-end-with-rewards",
          reward: d(t).bpReward,
          scores: d(t).scores,
          message: d(t).message,
          asset: d(a),
          "background-image": d(u),
          "play-passes": d(e),
          "referral-token": (M = d(r)) == null ? void 0 : M.referralToken,
          "additional-reward-items": d(t).additionalRewardItems,
          onPlayAgain: c[3] || (c[3] = G => t.value = {
            stage: "LOADING"
          })
        }, null, 8, ["reward", "scores", "message", "asset", "background-image", "play-passes", "referral-token", "additional-reward-items"])) : (f(), V(T, {
          key: "game-end",
          reward: d(t).bpReward,
          message: d(t).message,
          asset: d(a),
          "background-image": d(u),
          "play-passes": d(e),
          "referral-token": (z = d(r)) == null ? void 0 : z.referralToken,
          onPlayAgain: c[4] || (c[4] = G => t.value = {
            stage: "LOADING"
          })
        }, null, 8, ["reward", "message", "asset", "background-image", "play-passes", "referral-token"]))], 64)) : $("", !0)])
      }
    }
  }),
  Wn = ie($n, [
    ["__scopeId", "data-v-25de7054"]
  ]);
export {
  Wn as
  default
};