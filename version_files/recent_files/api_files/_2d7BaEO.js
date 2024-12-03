var f = Object.defineProperty;
var m = (c, n, r) => n in c ? f(c, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : c[n] = r;
var s = (c, n, r) => m(c, typeof n != "symbol" ? n + "" : n, r);
import {
  d as p,
  r as v,
  aj as w,
  o as y,
  a as z,
  c as g,
  am as b,
  L as u,
  j as _
} from "./Cu_rX_ev.js";
const M = p({
    __name: "Space",
    setup(c) {
      class n {
        constructor(t) {
          s(this, "canvas");
          s(this, "ctx");
          s(this, "stars");
          s(this, "width");
          s(this, "height");
          s(this, "scale");
          s(this, "velocity", {
            x: 0,
            y: 0,
            tx: 0,
            ty: 0,
            z: .001
          });
          s(this, "onResizeFn", b(this.onResize.bind(this)).debouncedFunction);
          s(this, "fps", 30);
          s(this, "fpsInterval", 1e3 / this.fps);
          s(this, "lastTime", 0);
          s(this, "isStopped", !1);
          this.canvas = t;
          const i = t.getContext("2d");
          if (!i) throw u("Canvas 2D context not supported");
          this.ctx = i;
          const e = Math.round((window.innerWidth + window.innerHeight) / 30);
          this.stars = [...Array(e)].map(() => new r(this.canvas, this.ctx)), this.onResizeFn(), this.animate(), window.addEventListener("resize", this.onResizeFn)
        }
        destroy() {
          this.isStopped = !0, window.removeEventListener("resize", this.onResizeFn)
        }
        onResize() {
          this.width === window.innerWidth * this.scale && this.height === window.innerHeight * this.scale || (this.scale = window.devicePixelRatio, this.width = window.innerWidth * this.scale, this.height = window.innerHeight * this.scale, this.canvas.width = this.width, this.canvas.height = this.height, this.stars.forEach(t => t.place()))
        }
        render() {
          this.stars.forEach(t => t.render(this.velocity, this.scale))
        }
        update(t) {
          const e = Math.min(t / 8.333333333333334, 1.5);
          this.velocity.tx *= .96, this.velocity.ty *= .96, this.velocity.x += (this.velocity.tx - this.velocity.x) * .8, this.velocity.y += (this.velocity.ty - this.velocity.y) * .8, this.stars.forEach(h => h.update(this.velocity, this.width, this.height, e))
        }
        animate(t = 0) {
          if (this.isStopped) return;
          const i = t - this.lastTime;
          i >= this.fpsInterval && (this.lastTime = t, this.ctx.clearRect(0, 0, this.width, this.height), this.update(i), this.render()), requestAnimationFrame(this.animate.bind(this))
        }
      }
      class r {
        constructor(t, i) {
          s(this, "x");
          s(this, "y");
          s(this, "z");
          s(this, "alpha", Math.floor(Math.random() * 128 + 128).toString(16).padStart(2, "0"));
          s(this, "canvas");
          s(this, "ctx");
          s(this, "config", {
            starSize: 1.5,
            minScale: .1,
            overflowThreshold: 5
          });
          this.canvas = t, this.ctx = i, this.place(), this.z = this.config.minScale + Math.random() * (1 - this.config.minScale)
        }
        place() {
          this.x = Math.random() * this.canvas.width, this.y = Math.random() * this.canvas.height
        }
        render(t, i) {
          this.ctx.beginPath(), this.ctx.lineCap = "round";
          const e = this.config.starSize * this.z * i;
          this.ctx.lineWidth = e, this.ctx.strokeStyle = `#636363${this.alpha}`;
          let h = t.x * 2,
            a = t.y * 2;
          Math.abs(h) < .1 && (h = .5), Math.abs(a) < .1 && (a = .5);
          const o = e * 2;
          this.ctx.beginPath(), this.ctx.moveTo(this.x - o / 2 + h, this.y + a), this.ctx.lineTo(this.x + o / 2 + h, this.y + a), this.ctx.stroke(), this.ctx.beginPath(), this.ctx.moveTo(this.x + h, this.y - o / 2 + a), this.ctx.lineTo(this.x + h, this.y + o / 2 + a), this.ctx.stroke()
        }
        recycle(t, i, e) {
          let h = "z";
          const a = Math.abs(t.x),
            o = Math.abs(t.y);
          switch ((a > 1 || o > 1) && ((Math.random() < a / (a + o) ? "h" : "v") === "h" ? h = t.x > 0 ? "l" : "r" : h = t.y > 0 ? "t" : "b"), this.z = this.config.minScale + Math.random() * (1 - this.config.minScale), h) {
            case "z":
              this.z = .1, this.x = Math.random() * i, this.y = Math.random() * e;
              break;
            case "l":
              this.x = -1 * this.config.overflowThreshold, this.y = e * Math.random();
              break;
            case "r":
              this.x = i + this.config.overflowThreshold, this.y = e * Math.random();
              break;
            case "t":
              this.x = i * Math.random(), this.y = -1 * this.config.overflowThreshold;
              break;
            case "b":
              this.x = i * Math.random(), this.y = e + this.config.overflowThreshold;
              break
          }
        }
        update(t, i, e, h) {
          this.x += t.x * this.z * h, this.y += t.y * this.z * h, this.x += (this.x - i / 2) * t.z * this.z * h, this.y += (this.y - e / 2) * t.z * this.z * h, this.z += t.z * h, (this.x < -1 * this.config.overflowThreshold || this.x > i + this.config.overflowThreshold || this.y < -1 * this.config.overflowThreshold || this.y > e + this.config.overflowThreshold) && this.recycle(t, i, e)
        }
      }
      const d = v();
      let l;
      return w(() => {
        d.value && (l = new n(d.value))
      }), y(() => {
        l && l.destroy()
      }), (x, t) => (z(), g("canvas", {
        ref_key: "canvasRef",
        ref: d
      }, null, 512))
    }
  }),
  R = _(M, [
    ["__scopeId", "data-v-8b755bb9"]
  ]);
export {
  R as _
};