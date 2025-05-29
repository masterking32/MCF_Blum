import {
  d as Ue,
  K as _s,
  af as xs,
  o as H,
  c as se,
  ag as he,
  d0 as Pe,
  z as W,
  j as we,
  F as ys,
  q as vs,
  n as yt,
  y as Le,
  e as q,
  a_ as bs,
  E as Je,
  a as ze,
  _ as vt,
  a$ as Ps,
  f as et,
  I as ws,
  b as le,
  t as Ts,
  bQ as Ss,
  bR as Rs,
  C as Es,
  a9 as Ms,
  ao as bt,
  x as Cs,
  ah as ks,
  bz as As,
  am as Fs,
  h as Is,
  a3 as Ds
} from "./YXPW7IJg.js";
import {
  _ as Os
} from "./YJ664n06.js";
import {
  a as Ls
} from "./BrfPAM8R.js";
(function(f, R) {
  typeof exports == "object" && typeof module < "u" ? R(exports) : typeof define == "function" && define.amd ? define(["exports"], R) : (f = typeof globalThis < "u" ? globalThis : f || self, R(f.UnicornStudio = {}))
})(void 0, function(f) {
  var R = Object.defineProperty,
    K = (a, e, t) => e in a ? R(a, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }) : a[e] = t,
    A = (a, e, t) => (K(a, typeof e != "symbol" ? e + "" : e, t), t);
  let $ = 0;

  function g() {
    if (!($ > 100)) {
      if ($ === 100) console.warn("Curtains: too many warnings thrown, stop logging.");
      else {
        const a = Array.prototype.slice.call(arguments);
        console.warn.apply(console, a)
      }
      $++
    }
  }

  function y() {
    const a = Array.prototype.slice.call(arguments);
    console.error.apply(console, a)
  }

  function me() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, a => {
      let e = Math.random() * 16 | 0;
      return (a === "x" ? e : e & 3 | 8).toString(16).toUpperCase()
    })
  }

  function G(a) {
    return (a & a - 1) === 0
  }

  function Z(a, e, t) {
    return (1 - t) * a + t * e
  }
  let tt = class {
    constructor(a) {
      if (this.type = "Scene", !a || a.type !== "Renderer") y(this.type + ": Renderer not passed as first argument", a);
      else if (!a.gl) {
        y(this.type + ": Renderer WebGL context is undefined", a);
        return
      }
      this.renderer = a, this.gl = a.gl, this.initStacks()
    }
    initStacks() {
      this.stacks = {
        pingPong: [],
        renderTargets: [],
        opaque: [],
        transparent: [],
        renderPasses: [],
        scenePasses: []
      }
    }
    resetPlaneStacks() {
      this.stacks.pingPong = [], this.stacks.renderTargets = [], this.stacks.opaque = [], this.stacks.transparent = [];
      for (let a = 0; a < this.renderer.planes.length; a++) this.addPlane(this.renderer.planes[a])
    }
    resetShaderPassStacks() {
      this.stacks.scenePasses = [], this.stacks.renderPasses = [];
      for (let a = 0; a < this.renderer.shaderPasses.length; a++) this.renderer.shaderPasses[a].index = a, this.renderer.shaderPasses[a]._isScenePass ? this.stacks.scenePasses.push(this.renderer.shaderPasses[a]) : this.stacks.renderPasses.push(this.renderer.shaderPasses[a]);
      this.stacks.scenePasses.length === 0 && (this.renderer.state.scenePassIndex = null)
    }
    addToRenderTargetsStack(a) {
      const e = this.renderer.planes.filter(s => s.type !== "PingPongPlane" && s.target && s.uuid !== a.uuid);
      let t = -1;
      if (a.target._depth) {
        for (let s = e.length - 1; s >= 0; s--)
          if (e[s].target.uuid === a.target.uuid) {
            t = s + 1;
            break
          }
      } else t = e.findIndex(s => s.target.uuid === a.target.uuid);
      t = Math.max(0, t), e.splice(t, 0, a), a.target._depth ? (e.sort((s, i) => s.index - i.index), e.sort((s, i) => i.renderOrder - s.renderOrder)) : (e.sort((s, i) => i.index - s.index), e.sort((s, i) => s.renderOrder - i.renderOrder)), e.sort((s, i) => s.target.index - i.target.index), this.stacks.renderTargets = e
    }
    addToRegularPlaneStack(a) {
      const e = this.renderer.planes.filter(s => s.type !== "PingPongPlane" && !s.target && s._transparent === a._transparent && s.uuid !== a.uuid);
      let t = -1;
      for (let s = e.length - 1; s >= 0; s--)
        if (e[s]._geometry.definition.id === a._geometry.definition.id) {
          t = s + 1;
          break
        } return t = Math.max(0, t), e.splice(t, 0, a), e.sort((s, i) => s.index - i.index), e
    }
    addPlane(a) {
      if (a.type === "PingPongPlane") this.stacks.pingPong.push(a);
      else if (a.target) this.addToRenderTargetsStack(a);
      else if (a._transparent) {
        const e = this.addToRegularPlaneStack(a);
        e.sort((t, s) => s.relativeTranslation.z - t.relativeTranslation.z), e.sort((t, s) => s.renderOrder - t.renderOrder), this.stacks.transparent = e
      } else {
        const e = this.addToRegularPlaneStack(a);
        e.sort((t, s) => s.renderOrder - t.renderOrder), this.stacks.opaque = e
      }
    }
    removePlane(a) {
      a.type === "PingPongPlane" ? this.stacks.pingPong = this.stacks.pingPong.filter(e => e.uuid !== a.uuid) : a.target ? this.stacks.renderTargets = this.stacks.renderTargets.filter(e => e.uuid !== a.uuid) : a._transparent ? this.stacks.transparent = this.stacks.transparent.filter(e => e.uuid !== a.uuid) : this.stacks.opaque = this.stacks.opaque.filter(e => e.uuid !== a.uuid)
    }
    setPlaneRenderOrder(a) {
      if (a.type === "ShaderPass") this.sortShaderPassStack(a._isScenePass ? this.stacks.scenePasses : this.stacks.renderPasses);
      else if (a.type === "PingPongPlane") return;
      if (a.target) a.target._depth ? (this.stacks.renderTargets.sort((e, t) => e.index - t.index), this.stacks.renderTargets.sort((e, t) => t.renderOrder - e.renderOrder)) : (this.stacks.renderTargets.sort((e, t) => t.index - e.index), this.stacks.renderTargets.sort((e, t) => e.renderOrder - t.renderOrder)), this.stacks.renderTargets.sort((e, t) => e.target.index - t.target.index);
      else {
        const e = a._transparent ? this.stacks.transparent : this.stacks.opaque,
          t = this.stacks.scenePasses.find((s, i) => s._isScenePass && !s._depth && i === 0);
        !this.renderer.depth || t ? (e.sort((s, i) => i.index - s.index), a._transparent && e.sort((s, i) => s.relativeTranslation.z - i.relativeTranslation.z), e.sort((s, i) => s.renderOrder - i.renderOrder)) : (e.sort((s, i) => s.index - i.index), a._transparent && e.sort((s, i) => i.relativeTranslation.z - s.relativeTranslation.z), e.sort((s, i) => i.renderOrder - s.renderOrder))
      }
    }
    addShaderPass(a) {
      a._isScenePass ? (this.stacks.scenePasses.push(a), this.sortShaderPassStack(this.stacks.scenePasses)) : (this.stacks.renderPasses.push(a), this.sortShaderPassStack(this.stacks.renderPasses))
    }
    removeShaderPass(a) {
      this.resetShaderPassStacks()
    }
    sortShaderPassStack(a) {
      a.sort((e, t) => e.index - t.index), a.sort((e, t) => e.renderOrder - t.renderOrder)
    }
    enableShaderPass() {
      this.stacks.scenePasses.length && this.stacks.renderPasses.length === 0 && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0, this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target))
    }
    drawRenderPasses() {
      this.stacks.scenePasses.length && this.stacks.renderPasses.length && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0, this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target));
      for (let a = 0; a < this.stacks.renderPasses.length; a++) this.stacks.renderPasses[a]._startDrawing(), this.renderer.clearDepth()
    }
    drawScenePasses() {
      for (let a = 0; a < this.stacks.scenePasses.length; a++) this.stacks.scenePasses[a]._startDrawing()
    }
    drawPingPongStack() {
      for (let a = 0; a < this.stacks.pingPong.length; a++) {
        const e = this.stacks.pingPong[a];
        e && e._startDrawing()
      }
    }
    drawStack(a) {
      for (let e = 0; e < this.stacks[a].length; e++) {
        const t = this.stacks[a][e];
        t && t._startDrawing()
      }
    }
    draw() {
      this.drawPingPongStack(), this.enableShaderPass(), this.drawStack("renderTargets"), this.drawRenderPasses(), this.renderer.setBlending(!1), this.drawStack("opaque"), this.stacks.transparent.length && (this.renderer.setBlending(!0), this.drawStack("transparent")), this.drawScenePasses()
    }
  };
  class Ve {
    constructor() {
      this.geometries = [], this.clear()
    }
    clear() {
      this.textures = [], this.programs = []
    }
    getGeometryFromID(e) {
      return this.geometries.find(t => t.id === e)
    }
    addGeometry(e, t, s) {
      this.geometries.push({
        id: e,
        vertices: t,
        uvs: s
      })
    }
    isSameShader(e, t) {
      return e.localeCompare(t) === 0
    }
    getProgramFromShaders(e, t) {
      return this.programs.find(s => this.isSameShader(s.vsCode, e) && this.isSameShader(s.fsCode, t))
    }
    addProgram(e) {
      this.programs.push(e)
    }
    getTextureFromSource(e) {
      const t = typeof e == "string" ? e : e.src;
      return this.textures.find(s => s.source && s.source.src === t)
    }
    addTexture(e) {
      this.getTextureFromSource(e.source) || this.textures.push(e)
    }
    removeTexture(e) {
      this.textures = this.textures.filter(t => t.uuid !== e.uuid)
    }
  }
  class Te {
    constructor() {
      this.clear()
    }
    clear() {
      this.queue = []
    }
    add(e, t = !1) {
      const s = {
        callback: e,
        keep: t,
        timeout: null
      };
      return s.timeout = setTimeout(() => {
        this.queue.push(s)
      }, 0), s
    }
    execute() {
      this.queue.map(e => {
        e.callback && e.callback(), clearTimeout(this.queue.timeout)
      }), this.queue = this.queue.filter(e => e.keep)
    }
  }
  class Be {
    constructor({
      alpha: e,
      antialias: t,
      premultipliedAlpha: s,
      depth: i,
      failIfMajorPerformanceCaveat: r,
      preserveDrawingBuffer: n,
      stencil: o,
      container: h,
      pixelRatio: l,
      renderingScale: d,
      production: u,
      onError: c,
      onSuccess: p,
      onContextLost: m,
      onContextRestored: P,
      onDisposed: M,
      onSceneChange: C
    }) {
      this.type = "Renderer", this.alpha = e, this.antialias = t, this.premultipliedAlpha = s, this.depth = i, this.failIfMajorPerformanceCaveat = r, this.preserveDrawingBuffer = n, this.stencil = o, this.container = h, this.pixelRatio = l, this._renderingScale = d, this.production = u, this.onError = c, this.onSuccess = p, this.onContextLost = m, this.onContextRestored = P, this.onDisposed = M, this.onSceneChange = C, this.initState(), this.canvas = document.createElement("canvas");
      const S = {
        alpha: this.alpha,
        premultipliedAlpha: this.premultipliedAlpha,
        antialias: this.antialias,
        depth: this.depth,
        failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
        preserveDrawingBuffer: this.preserveDrawingBuffer,
        stencil: this.stencil
      };
      if (this.gl = this.canvas.getContext("webgl2", S), this._isWebGL2 = !!this.gl, this.gl || (this.gl = this.canvas.getContext("webgl", S) || this.canvas.getContext("experimental-webgl", S)), this.gl) this.onSuccess && this.onSuccess();
      else {
        this.production || g(this.type + ": WebGL context could not be created"), this.state.isActive = !1, this.onError && this.onError();
        return
      }
      this.initRenderer()
    }
    initState() {
      this.state = {
        isActive: !0,
        isContextLost: !0,
        drawingEnabled: !0,
        forceRender: !1,
        currentProgramID: null,
        currentGeometryID: null,
        forceBufferUpdate: !1,
        depthTest: null,
        blending: null,
        cullFace: null,
        frameBufferID: null,
        scenePassIndex: null,
        activeTexture: null,
        unpackAlignment: null,
        flipY: null,
        premultiplyAlpha: null
      }
    }
    initCallbackQueueManager() {
      this.nextRender = new Te
    }
    initRenderer() {
      this.planes = [], this.renderTargets = [], this.shaderPasses = [], this.state.isContextLost = !1, this.state.maxTextureSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE), this.initCallbackQueueManager(), this.setBlendFunc(), this.setDepthFunc(), this.setDepthTest(!0), this.cache = new Ve, this.scene = new tt(this), this.getExtensions(), this._contextLostHandler = this.contextLost.bind(this), this.canvas.addEventListener("webglcontextlost", this._contextLostHandler, !1), this._contextRestoredHandler = this.contextRestored.bind(this), this.canvas.addEventListener("webglcontextrestored", this._contextRestoredHandler, !1)
    }
    getExtensions() {
      this.extensions = [], this._isWebGL2 ? (this.extensions.EXT_color_buffer_float = this.gl.getExtension("EXT_color_buffer_float"), this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"), this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"), this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context")) : (this.extensions.OES_vertex_array_object = this.gl.getExtension("OES_vertex_array_object"), this.extensions.OES_texture_float = this.gl.getExtension("OES_texture_float"), this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"), this.extensions.OES_texture_half_float = this.gl.getExtension("OES_texture_half_float"), this.extensions.OES_texture_half_float_linear = this.gl.getExtension("OES_texture_half_float_linear"), this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"), this.extensions.OES_element_index_uint = this.gl.getExtension("OES_element_index_uint"), this.extensions.OES_standard_derivatives = this.gl.getExtension("OES_standard_derivatives"), this.extensions.EXT_sRGB = this.gl.getExtension("EXT_sRGB"), this.extensions.WEBGL_depth_texture = this.gl.getExtension("WEBGL_depth_texture"), this.extensions.WEBGL_draw_buffers = this.gl.getExtension("WEBGL_draw_buffers"), this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context"))
    }
    contextLost(e) {
      this.state.isContextLost = !0, this.state.isActive && (e.preventDefault(), this.nextRender.add(() => this.onContextLost && this.onContextLost()))
    }
    restoreContext() {
      this.state.isActive && (this.initState(), this.gl && this.extensions.WEBGL_lose_context ? this.extensions.WEBGL_lose_context.restoreContext() : (!this.gl && !this.production ? g(this.type + ": Could not restore the context because the context is not defined") : !this.extensions.WEBGL_lose_context && !this.production && g(this.type + ": Could not restore the context because the restore context extension is not defined"), this.onError && this.onError()))
    }
    isContextexFullyRestored() {
      let e = !0;
      for (let t = 0; t < this.renderTargets.length; t++) {
        this.renderTargets[t].textures[0]._canDraw || (e = !1);
        break
      }
      if (e)
        for (let t = 0; t < this.planes.length; t++)
          if (this.planes[t]._canDraw) {
            for (let s = 0; s < this.planes[t].textures.length; s++)
              if (!this.planes[t].textures[s]._canDraw) {
                e = !1;
                break
              }
          } else {
            e = !1;
            break
          } if (e)
        for (let t = 0; t < this.shaderPasses.length; t++)
          if (this.shaderPasses[t]._canDraw) {
            for (let s = 0; s < this.shaderPasses[t].textures.length; s++)
              if (!this.shaderPasses[t].textures[s]._canDraw) {
                e = !1;
                break
              }
          } else {
            e = !1;
            break
          } return e
    }
    contextRestored() {
      this.getExtensions(), this.setBlendFunc(), this.setDepthFunc(), this.setDepthTest(!0), this.cache.clear(), this.scene.initStacks();
      for (let t = 0; t < this.renderTargets.length; t++) this.renderTargets[t]._restoreContext();
      for (let t = 0; t < this.planes.length; t++) this.planes[t]._restoreContext();
      for (let t = 0; t < this.shaderPasses.length; t++) this.shaderPasses[t]._restoreContext();
      const e = this.nextRender.add(() => {
        this.isContextexFullyRestored() && (e.keep = !1, this.state.isContextLost = !1, this.onContextRestored && this.onContextRestored(), this.onSceneChange(), this.needRender())
      }, !0)
    }
    setPixelRatio(e) {
      this.pixelRatio = e
    }
    setSize() {
      if (!this.gl) return;
      const e = this.container.getBoundingClientRect();
      this._boundingRect = {
        width: e.width * this.pixelRatio,
        height: e.height * this.pixelRatio,
        top: e.top * this.pixelRatio,
        left: e.left * this.pixelRatio
      }, this.canvas.style.width = Math.floor(this._boundingRect.width / this.pixelRatio) + "px", this.canvas.style.height = Math.floor(this._boundingRect.height / this.pixelRatio) + "px", this.canvas.width = Math.floor(this._boundingRect.width * this._renderingScale), this.canvas.height = Math.floor(this._boundingRect.height * this._renderingScale), this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)
    }
    resize() {
      for (let e = 0; e < this.planes.length; e++) this.planes[e]._canDraw && this.planes[e].resize();
      for (let e = 0; e < this.shaderPasses.length; e++) this.shaderPasses[e]._canDraw && this.shaderPasses[e].resize();
      for (let e = 0; e < this.renderTargets.length; e++) this.renderTargets[e].resize();
      this.needRender()
    }
    clear() {
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
    }
    clearDepth() {
      this.gl.clear(this.gl.DEPTH_BUFFER_BIT)
    }
    clearColor() {
      this.gl.clear(this.gl.COLOR_BUFFER_BIT)
    }
    bindFrameBuffer(e, t) {
      let s = null;
      e ? (s = e.index, s !== this.state.frameBufferID && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, e._frameBuffer), this.gl.viewport(0, 0, e._size.width, e._size.height), e._shouldClear && !t && this.clear())) : this.state.frameBufferID !== null && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)), this.state.frameBufferID = s
    }
    setDepthTest(e) {
      e && !this.state.depthTest ? (this.state.depthTest = e, this.gl.enable(this.gl.DEPTH_TEST)) : !e && this.state.depthTest && (this.state.depthTest = e, this.gl.disable(this.gl.DEPTH_TEST))
    }
    setDepthFunc() {
      this.gl.depthFunc(this.gl.LEQUAL)
    }
    setBlending(e = !1) {
      e && !this.state.blending ? (this.state.blending = e, this.gl.enable(this.gl.BLEND)) : !e && this.state.blending && (this.state.blending = e, this.gl.disable(this.gl.BLEND))
    }
    setBlendFunc() {
      this.gl.enable(this.gl.BLEND), this.premultipliedAlpha ? this.gl.blendFuncSeparate(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
    }
    setFaceCulling(e) {
      if (this.state.cullFace !== e)
        if (this.state.cullFace = e, e === "none") this.gl.disable(this.gl.CULL_FACE);
        else {
          const t = e === "front" ? this.gl.FRONT : this.gl.BACK;
          this.gl.enable(this.gl.CULL_FACE), this.gl.cullFace(t)
        }
    }
    useProgram(e) {
      (this.state.currentProgramID === null || this.state.currentProgramID !== e.id) && (this.gl.useProgram(e.program), this.state.currentProgramID = e.id)
    }
    removePlane(e) {
      this.gl && (this.planes = this.planes.filter(t => t.uuid !== e.uuid), this.scene.removePlane(e), e = null, this.gl && this.clear(), this.onSceneChange())
    }
    removeRenderTarget(e) {
      if (!this.gl) return;
      let t = this.planes.find(s => s.type !== "PingPongPlane" && s.target && s.target.uuid === e.uuid);
      for (let s = 0; s < this.planes.length; s++) this.planes[s].target && this.planes[s].target.uuid === e.uuid && (this.planes[s].target = null);
      this.renderTargets = this.renderTargets.filter(s => s.uuid !== e.uuid);
      for (let s = 0; s < this.renderTargets.length; s++) this.renderTargets[s].index = s;
      e = null, this.gl && this.clear(), t && this.scene.resetPlaneStacks(), this.onSceneChange()
    }
    removeShaderPass(e) {
      this.gl && (this.shaderPasses = this.shaderPasses.filter(t => t.uuid !== e.uuid), this.scene.removeShaderPass(e), e = null, this.gl && this.clear(), this.onSceneChange())
    }
    enableDrawing() {
      this.state.drawingEnabled = !0
    }
    disableDrawing() {
      this.state.drawingEnabled = !1
    }
    needRender() {
      this.state.forceRender = !0
    }
    render() {
      this.gl && (this.clear(), this.state.currentGeometryID = null, this.scene.draw())
    }
    deletePrograms() {
      for (let e = 0; e < this.cache.programs.length; e++) {
        const t = this.cache.programs[e];
        this.gl.deleteProgram(t.program)
      }
    }
    dispose() {
      if (!this.gl) return;
      for (this.state.isActive = !1; this.planes.length > 0;) this.removePlane(this.planes[0]);
      for (; this.shaderPasses.length > 0;) this.removeShaderPass(this.shaderPasses[0]);
      for (; this.renderTargets.length > 0;) this.removeRenderTarget(this.renderTargets[0]);
      let e = this.nextRender.add(() => {
        this.planes.length === 0 && this.shaderPasses.length === 0 && this.renderTargets.length === 0 && (e.keep = !1, this.deletePrograms(), this.clear(), this.canvas.removeEventListener("webgllost", this._contextLostHandler, !1), this.canvas.removeEventListener("webglrestored", this._contextRestoredHandler, !1), this.gl && this.extensions.WEBGL_lose_context && this.extensions.WEBGL_lose_context.loseContext(), this.canvas.width = this.canvas.width, this.gl = null, this.container.removeChild(this.canvas), this.container = null, this.canvas = null, this.onDisposed && this.onDisposed())
      }, !0)
    }
  }
  class Ne {
    constructor({
      xOffset: e = 0,
      yOffset: t = 0,
      lastXDelta: s = 0,
      lastYDelta: i = 0,
      shouldWatch: r = !0,
      onScroll: n = () => {}
    } = {}) {
      this.xOffset = e, this.yOffset = t, this.lastXDelta = s, this.lastYDelta = i, this.shouldWatch = r, this.onScroll = n, this.handler = this.scroll.bind(this, !0), this.shouldWatch && window.addEventListener("scroll", this.handler, {
        passive: !0
      })
    }
    scroll() {
      this.updateScrollValues(window.pageXOffset, window.pageYOffset)
    }
    updateScrollValues(e, t) {
      const s = this.xOffset;
      this.xOffset = e, this.lastXDelta = s - this.xOffset;
      const i = this.yOffset;
      this.yOffset = t, this.lastYDelta = i - this.yOffset, this.onScroll && this.onScroll(this.lastXDelta, this.lastYDelta)
    }
    dispose() {
      this.shouldWatch && window.removeEventListener("scroll", this.handler, {
        passive: !0
      })
    }
  }
  class We {
    constructor({
      container: e,
      alpha: t = !0,
      premultipliedAlpha: s = !1,
      antialias: i = !0,
      depth: r = !0,
      failIfMajorPerformanceCaveat: n = !0,
      preserveDrawingBuffer: o = !1,
      stencil: h = !1,
      autoResize: l = !0,
      autoRender: d = !0,
      watchScroll: u = !0,
      pixelRatio: c = window.devicePixelRatio || 1,
      renderingScale: p = 1,
      production: m = !1
    } = {}) {
      this.type = "Curtains", this._autoResize = l, this._autoRender = d, this._watchScroll = u, this.pixelRatio = c, p = isNaN(p) ? 1 : parseFloat(p), this._renderingScale = Math.max(.25, Math.min(1, p)), this.premultipliedAlpha = s, this.alpha = t, this.antialias = i, this.depth = r, this.failIfMajorPerformanceCaveat = n, this.preserveDrawingBuffer = o, this.stencil = h, this.production = m, this.errors = !1, e ? this.setContainer(e) : this.production || g(this.type + ": no container provided in the initial parameters. Use setContainer() method to set one later and initialize the WebGL context")
    }
    setContainer(e) {
      if (e)
        if (typeof e == "string")
          if (e = document.getElementById(e), e) this.container = e;
          else {
            let t = document.createElement("div");
            t.setAttribute("id", "curtains-canvas"), document.body.appendChild(t), this.container = t, this.production || g('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
          }
      else e instanceof Element && (this.container = e);
      else {
        let t = document.createElement("div");
        t.setAttribute("id", "curtains-canvas"), document.body.appendChild(t), this.container = t, this.production || g('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
      }
      this._initCurtains()
    }
    _initCurtains() {
      this.planes = [], this.renderTargets = [], this.shaderPasses = [], this._initRenderer(), this.gl && (this._initScroll(), this._setSize(), this._addListeners(), this.container.appendChild(this.canvas), this._animationFrameID = null, this._autoRender && this._animate())
    }
    _initRenderer() {
      this.renderer = new Be({
        alpha: this.alpha,
        antialias: this.antialias,
        premultipliedAlpha: this.premultipliedAlpha,
        depth: this.depth,
        failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
        preserveDrawingBuffer: this.preserveDrawingBuffer,
        stencil: this.stencil,
        container: this.container,
        pixelRatio: this.pixelRatio,
        renderingScale: this._renderingScale,
        production: this.production,
        onError: () => this._onRendererError(),
        onSuccess: () => this._onRendererSuccess(),
        onContextLost: () => this._onRendererContextLost(),
        onContextRestored: () => this._onRendererContextRestored(),
        onDisposed: () => this._onRendererDisposed(),
        onSceneChange: () => this._keepSync()
      }), this.gl = this.renderer.gl, this.canvas = this.renderer.canvas
    }
    restoreContext() {
      this.renderer.restoreContext()
    }
    _animate() {
      this.render(), this._animationFrameID = window.requestAnimationFrame(this._animate.bind(this))
    }
    enableDrawing() {
      this.renderer.enableDrawing()
    }
    disableDrawing() {
      this.renderer.disableDrawing()
    }
    needRender() {
      this.renderer.needRender()
    }
    nextRender(e, t = !1) {
      return this.renderer.nextRender.add(e, t)
    }
    clear() {
      this.renderer && this.renderer.clear()
    }
    clearDepth() {
      this.renderer && this.renderer.clearDepth()
    }
    clearColor() {
      this.renderer && this.renderer.clearColor()
    }
    isWebGL2() {
      return this.gl ? this.renderer._isWebGL2 : !1
    }
    render() {
      this.renderer.nextRender.execute(), !(!this.renderer.state.drawingEnabled && !this.renderer.state.forceRender) && (this.renderer.state.forceRender && (this.renderer.state.forceRender = !1), this._onRenderCallback && this._onRenderCallback(), this.renderer.render())
    }
    _addListeners() {
      this._resizeHandler = null, this._autoResize && (this._resizeHandler = this.resize.bind(this, !0), window.addEventListener("resize", this._resizeHandler, !1))
    }
    setPixelRatio(e, t) {
      this.pixelRatio = parseFloat(Math.max(e, 1)) || 1, this.renderer.setPixelRatio(e), this.resize(t)
    }
    _setSize() {
      this.renderer.setSize(), this._scrollManager.shouldWatch && (this._scrollManager.xOffset = window.pageXOffset, this._scrollManager.yOffset = window.pageYOffset)
    }
    getBoundingRect() {
      return this.renderer._boundingRect
    }
    resize(e) {
      this.gl && (this._setSize(), this.renderer.resize(), this.nextRender(() => {
        this._onAfterResizeCallback && e && this._onAfterResizeCallback()
      }))
    }
    _initScroll() {
      this._scrollManager = new Ne({
        xOffset: window.pageXOffset,
        yOffset: 0,
        lastXDelta: 0,
        lastYDelta: 0,
        shouldWatch: this._watchScroll,
        onScroll: (e, t) => this._updateScroll(e, t)
      })
    }
    _updateScroll(e, t) {
      for (let s = 0; s < this.planes.length; s++) this.planes[s].watchScroll && this.planes[s].updateScrollPosition(e, t);
      this.renderer.needRender(), this._onScrollCallback && this._onScrollCallback()
    }
    updateScrollValues(e, t) {
      this._scrollManager.updateScrollValues(e, t)
    }
    getScrollDeltas() {
      return {
        x: this._scrollManager.lastXDelta,
        y: this._scrollManager.lastYDelta
      }
    }
    getScrollValues() {
      return {
        x: this._scrollManager.xOffset,
        y: this._scrollManager.yOffset
      }
    }
    _keepSync() {
      this.planes = this.renderer.planes, this.shaderPasses = this.renderer.shaderPasses, this.renderTargets = this.renderer.renderTargets
    }
    lerp(e, t, s) {
      return Z(e, t, s)
    }
    onAfterResize(e) {
      return e && (this._onAfterResizeCallback = e), this
    }
    onError(e) {
      return e && (this._onErrorCallback = e), this
    }
    _onRendererError() {
      setTimeout(() => {
        this._onErrorCallback && !this.errors && this._onErrorCallback(), this.errors = !0
      }, 0)
    }
    onSuccess(e) {
      return e && (this._onSuccessCallback = e), this
    }
    _onRendererSuccess() {
      setTimeout(() => {
        this._onSuccessCallback && this._onSuccessCallback()
      }, 0)
    }
    onContextLost(e) {
      return e && (this._onContextLostCallback = e), this
    }
    _onRendererContextLost() {
      this._onContextLostCallback && this._onContextLostCallback()
    }
    onContextRestored(e) {
      return e && (this._onContextRestoredCallback = e), this
    }
    _onRendererContextRestored() {
      this._onContextRestoredCallback && this._onContextRestoredCallback()
    }
    onRender(e) {
      return e && (this._onRenderCallback = e), this
    }
    onScroll(e) {
      return e && (this._onScrollCallback = e), this
    }
    dispose() {
      this.renderer.dispose()
    }
    _onRendererDisposed() {
      this._animationFrameID && window.cancelAnimationFrame(this._animationFrameID), this._resizeHandler && window.removeEventListener("resize", this._resizeHandler, !1), this._scrollManager && this._scrollManager.dispose()
    }
  }
  class Pt {
    constructor(e, t, s) {
      if (this.type = "Uniforms", !e || e.type !== "Renderer") y(this.type + ": Renderer not passed as first argument", e);
      else if (!e.gl) {
        y(this.type + ": Renderer WebGL context is undefined", e);
        return
      }
      if (this.renderer = e, this.gl = e.gl, this.program = t, this.uniforms = {}, s)
        for (const i in s) {
          const r = s[i];
          this.uniforms[i] = {
            name: r.name,
            type: r.type,
            value: r.value.clone && typeof r.value.clone == "function" ? r.value.clone() : r.value,
            update: null
          }
        }
    }
    handleUniformSetting(e) {
      switch (e.type) {
        case "1i":
          e.update = this.setUniform1i.bind(this);
          break;
        case "1iv":
          e.update = this.setUniform1iv.bind(this);
          break;
        case "1f":
          e.update = this.setUniform1f.bind(this);
          break;
        case "1fv":
          e.update = this.setUniform1fv.bind(this);
          break;
        case "2i":
          e.update = this.setUniform2i.bind(this);
          break;
        case "2iv":
          e.update = this.setUniform2iv.bind(this);
          break;
        case "2f":
          e.update = this.setUniform2f.bind(this);
          break;
        case "2fv":
          e.update = this.setUniform2fv.bind(this);
          break;
        case "3i":
          e.update = this.setUniform3i.bind(this);
          break;
        case "3iv":
          e.update = this.setUniform3iv.bind(this);
          break;
        case "3f":
          e.update = this.setUniform3f.bind(this);
          break;
        case "3fv":
          e.update = this.setUniform3fv.bind(this);
          break;
        case "4i":
          e.update = this.setUniform4i.bind(this);
          break;
        case "4iv":
          e.update = this.setUniform4iv.bind(this);
          break;
        case "4f":
          e.update = this.setUniform4f.bind(this);
          break;
        case "4fv":
          e.update = this.setUniform4fv.bind(this);
          break;
        case "mat2":
          e.update = this.setUniformMatrix2fv.bind(this);
          break;
        case "mat3":
          e.update = this.setUniformMatrix3fv.bind(this);
          break;
        case "mat4":
          e.update = this.setUniformMatrix4fv.bind(this);
          break;
        default:
          this.renderer.production || g(this.type + ": This uniform type is not handled : ", e.type)
      }
    }
    setInternalFormat(e) {
      e.value.type === "Vec2" ? (e._internalFormat = "Vec2", e.lastValue = e.value.clone()) : e.value.type === "Vec3" ? (e._internalFormat = "Vec3", e.lastValue = e.value.clone()) : e.value.type === "Mat4" ? (e._internalFormat = "Mat4", e.lastValue = e.value.clone()) : e.value.type === "Quat" ? (e._internalFormat = "Quat", e.lastValue = e.value.clone()) : Array.isArray(e.value) ? (e._internalFormat = "array", e.lastValue = Array.from(e.value)) : e.value.constructor === Float32Array ? (e._internalFormat = "mat", e.lastValue = e.value) : (e._internalFormat = "float", e.lastValue = e.value)
    }
    setUniforms() {
      if (this.uniforms)
        for (const e in this.uniforms) {
          let t = this.uniforms[e];
          t.location = this.gl.getUniformLocation(this.program, t.name), t._internalFormat || this.setInternalFormat(t), t.type || (t._internalFormat === "Vec2" ? t.type = "2f" : t._internalFormat === "Vec3" ? t.type = "3f" : t._internalFormat === "Mat4" ? t.type = "mat4" : t._internalFormat === "array" ? t.value.length === 4 ? (t.type = "4f", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a 4f (array of 4 floats) uniform type")) : t.value.length === 3 ? (t.type = "3f", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a 3f (array of 3 floats) uniform type")) : t.value.length === 2 && (t.type = "2f", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a 2f (array of 2 floats) uniform type")) : t._internalFormat === "mat" ? t.value.length === 16 ? (t.type = "mat4", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a mat4 (4x4 matrix array) uniform type")) : t.value.length === 9 ? (t.type = "mat3", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a mat3 (3x3 matrix array) uniform type")) : t.value.length === 4 && (t.type = "mat2", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a mat2 (2x2 matrix array) uniform type")) : (t.type = "1f", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a 1f (float) uniform type"))), this.handleUniformSetting(t), t.update && t.update(t)
        }
    }
    updateUniforms() {
      if (this.uniforms)
        for (const e in this.uniforms) {
          const t = this.uniforms[e];
          let s = !1;
          t._internalFormat === "Vec2" || t._internalFormat === "Vec3" || t._internalFormat === "Quat" ? t.value.equals(t.lastValue) || (s = !0, t.lastValue.copy(t.value)) : t.value.length ? JSON.stringify(t.value) !== JSON.stringify(t.lastValue) && (s = !0, t.lastValue = Array.from(t.value)) : t.value !== t.lastValue && (s = !0, t.lastValue = t.value), s && t.update && t.update(t)
        }
    }
    setUniform1i(e) {
      this.gl.uniform1i(e.location, e.value)
    }
    setUniform1iv(e) {
      this.gl.uniform1iv(e.location, e.value)
    }
    setUniform1f(e) {
      this.gl.uniform1f(e.location, e.value)
    }
    setUniform1fv(e) {
      this.gl.uniform1fv(e.location, e.value)
    }
    setUniform2i(e) {
      e._internalFormat === "Vec2" ? this.gl.uniform2i(e.location, e.value.x, e.value.y) : this.gl.uniform2i(e.location, e.value[0], e.value[1])
    }
    setUniform2iv(e) {
      e._internalFormat === "Vec2" ? this.gl.uniform2iv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2iv(e.location, e.value)
    }
    setUniform2f(e) {
      e._internalFormat === "Vec2" ? this.gl.uniform2f(e.location, e.value.x, e.value.y) : this.gl.uniform2f(e.location, e.value[0], e.value[1])
    }
    setUniform2fv(e) {
      e._internalFormat === "Vec2" ? this.gl.uniform2fv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2fv(e.location, e.value)
    }
    setUniform3i(e) {
      e._internalFormat === "Vec3" ? this.gl.uniform3i(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3i(e.location, e.value[0], e.value[1], e.value[2])
    }
    setUniform3iv(e) {
      e._internalFormat === "Vec3" ? this.gl.uniform3iv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3iv(e.location, e.value)
    }
    setUniform3f(e) {
      e._internalFormat === "Vec3" ? this.gl.uniform3f(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3f(e.location, e.value[0], e.value[1], e.value[2])
    }
    setUniform3fv(e) {
      e._internalFormat === "Vec3" ? this.gl.uniform3fv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3fv(e.location, e.value)
    }
    setUniform4i(e) {
      e._internalFormat === "Quat" ? this.gl.uniform4i(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4i(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
    }
    setUniform4iv(e) {
      e._internalFormat === "Quat" ? this.gl.uniform4iv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4iv(e.location, e.value)
    }
    setUniform4f(e) {
      e._internalFormat === "Quat" ? this.gl.uniform4f(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4f(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
    }
    setUniform4fv(e) {
      e._internalFormat === "Quat" ? this.gl.uniform4fv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4fv(e.location, e.value)
    }
    setUniformMatrix2fv(e) {
      this.gl.uniformMatrix2fv(e.location, !1, e.value)
    }
    setUniformMatrix3fv(e) {
      this.gl.uniformMatrix3fv(e.location, !1, e.value)
    }
    setUniformMatrix4fv(e) {
      e._internalFormat === "Mat4" ? this.gl.uniformMatrix4fv(e.location, !1, e.value.elements) : this.gl.uniformMatrix4fv(e.location, !1, e.value)
    }
  }
  const Se = `
precision mediump float;
`.replace(/\n/g, ""),
    st = `
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
`.replace(/\n/g, ""),
    Re = `
varying vec3 vVertexPosition;
varying vec2 vTextureCoord;
`.replace(/\n/g, ""),
    wt = (Se + st + Re + `
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

void main() {
    vTextureCoord = aTextureCoord;
    vVertexPosition = aVertexPosition;
    
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
}
`).replace(/\n/g, ""),
    Tt = (Se + Re + `
void main() {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
`).replace(/\n/g, ""),
    St = (Se + st + Re + `
void main() {
    vTextureCoord = aTextureCoord;
    vVertexPosition = aVertexPosition;
    
    gl_Position = vec4(aVertexPosition, 1.0);
}
`).replace(/\n/g, ""),
    Rt = (Se + Re + `
uniform sampler2D uRenderTexture;

void main() {
    gl_FragColor = texture2D(uRenderTexture, vTextureCoord);
}
`).replace(/\n/g, "");
  let it = 0;
  class rt {
    constructor(e, {
      parent: t,
      vertexShader: s,
      fragmentShader: i
    } = {}) {
      if (this.type = "Program", !e || e.type !== "Renderer") y(this.type + ": Renderer not passed as first argument", e);
      else if (!e.gl) {
        y(this.type + ": Renderer WebGL context is undefined", e);
        return
      }
      this.renderer = e, this.gl = this.renderer.gl, this.parent = t, this.defaultVsCode = this.parent.type === "Plane" ? wt : St, this.defaultFsCode = this.parent.type === "Plane" ? Tt : Rt, s ? this.vsCode = s : (!this.renderer.production && this.parent.type === "Plane" && g(this.parent.type + ": No vertex shader provided, will use a default one"), this.vsCode = this.defaultVsCode), i ? this.fsCode = i : (this.renderer.production || g(this.parent.type + ": No fragment shader provided, will use a default one"), this.fsCode = this.defaultFsCode), this.compiled = !0, this.setupProgram()
    }
    createShader(e, t) {
      const s = this.gl.createShader(t);
      if (this.gl.shaderSource(s, e), this.gl.compileShader(s), !this.renderer.production && !this.gl.getShaderParameter(s, this.gl.COMPILE_STATUS)) {
        const i = t === this.gl.VERTEX_SHADER ? "vertex shader" : "fragment shader";
        let r = this.gl.getShaderSource(s).split(`
`);
        for (let n = 0; n < r.length; n++) r[n] = n + 1 + ": " + r[n];
        return r = r.join(`
`), g(this.type + ": Errors occurred while compiling the", i, `:
`, this.gl.getShaderInfoLog(s)), y(r), g(this.type + ": Will use a default", i), this.createShader(t === this.gl.VERTEX_SHADER ? this.defaultVsCode : this.defaultFsCode, t)
      }
      return s
    }
    useNewShaders() {
      this.vertexShader = this.createShader(this.vsCode, this.gl.VERTEX_SHADER), this.fragmentShader = this.createShader(this.fsCode, this.gl.FRAGMENT_SHADER), (!this.vertexShader || !this.fragmentShader) && (this.renderer.production || g(this.type + ": Unable to find or compile the vertex or fragment shader"))
    }
    setupProgram() {
      let e = this.renderer.cache.getProgramFromShaders(this.vsCode, this.fsCode);
      e ? (this.vertexShader = e.vertexShader, this.fragmentShader = e.fragmentShader, this.activeUniforms = e.activeUniforms, this.activeAttributes = e.activeAttributes, this.createProgram()) : (this.useNewShaders(), this.compiled && (this.createProgram(), this.renderer.cache.addProgram(this)))
    }
    createProgram() {
      if (it++, this.id = it, this.program = this.gl.createProgram(), this.gl.attachShader(this.program, this.vertexShader), this.gl.attachShader(this.program, this.fragmentShader), this.gl.linkProgram(this.program), !this.renderer.production && !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
        g(this.type + ": Unable to initialize the shader program: " + this.gl.getProgramInfoLog(this.program)), g(this.type + ": Will use default vertex and fragment shaders"), this.vertexShader = this.createShader(this.defaultVsCode, this.gl.VERTEX_SHADER), this.fragmentShader = this.createShader(this.defaultFsCode, this.gl.FRAGMENT_SHADER), this.createProgram();
        return
      }
      if (this.gl.deleteShader(this.vertexShader), this.gl.deleteShader(this.fragmentShader), !this.activeUniforms || !this.activeAttributes) {
        this.activeUniforms = {
          textures: [],
          textureMatrices: []
        };
        const e = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
        for (let s = 0; s < e; s++) {
          const i = this.gl.getActiveUniform(this.program, s);
          i.type === this.gl.SAMPLER_2D && this.activeUniforms.textures.push(i.name), i.type === this.gl.FLOAT_MAT4 && i.name !== "uMVMatrix" && i.name !== "uPMatrix" && this.activeUniforms.textureMatrices.push(i.name)
        }
        this.activeAttributes = [];
        const t = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
        for (let s = 0; s < t; s++) {
          const i = this.gl.getActiveAttrib(this.program, s);
          this.activeAttributes.push(i.name)
        }
      }
    }
    createUniforms(e) {
      this.uniformsManager = new Pt(this.renderer, this.program, e), this.setUniforms()
    }
    setUniforms() {
      this.renderer.useProgram(this), this.uniformsManager.setUniforms()
    }
    updateUniforms() {
      this.renderer.useProgram(this), this.uniformsManager.updateUniforms()
    }
  }
  class Et {
    constructor(e, {
      program: t = null,
      width: s = 1,
      height: i = 1
    } = {}) {
      if (this.type = "Geometry", !e || e.type !== "Renderer") y(this.type + ": Renderer not passed as first argument", e);
      else if (!e.gl) {
        y(this.type + ": Renderer WebGL context is undefined", e);
        return
      }
      this.renderer = e, this.gl = this.renderer.gl, this.definition = {
        id: s * i + s,
        width: s,
        height: i
      }, this.setDefaultAttributes(), this.setVerticesUVs()
    }
    restoreContext(e) {
      this.program = null, this.setDefaultAttributes(), this.setVerticesUVs(), this.setProgram(e)
    }
    setDefaultAttributes() {
      this.attributes = {
        vertexPosition: {
          name: "aVertexPosition",
          size: 3,
          isActive: !1
        },
        textureCoord: {
          name: "aTextureCoord",
          size: 3,
          isActive: !1
        }
      }
    }
    setVerticesUVs() {
      const e = this.renderer.cache.getGeometryFromID(this.definition.id);
      e ? (this.attributes.vertexPosition.array = e.vertices, this.attributes.textureCoord.array = e.uvs) : (this.computeVerticesUVs(), this.renderer.cache.addGeometry(this.definition.id, this.attributes.vertexPosition.array, this.attributes.textureCoord.array))
    }
    setProgram(e) {
      this.program = e, this.initAttributes(), this.renderer._isWebGL2 ? (this._vao = this.gl.createVertexArray(), this.gl.bindVertexArray(this._vao)) : this.renderer.extensions.OES_vertex_array_object && (this._vao = this.renderer.extensions.OES_vertex_array_object.createVertexArrayOES(), this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao)), this.initializeBuffers()
    }
    initAttributes() {
      for (const e in this.attributes) {
        if (this.attributes[e].isActive = this.program.activeAttributes.includes(this.attributes[e].name), !this.attributes[e].isActive) return;
        this.attributes[e].location = this.gl.getAttribLocation(this.program.program, this.attributes[e].name), this.attributes[e].buffer = this.gl.createBuffer(), this.attributes[e].numberOfItems = this.definition.width * this.definition.height * this.attributes[e].size * 2
      }
    }
    computeVerticesUVs() {
      this.attributes.vertexPosition.array = [], this.attributes.textureCoord.array = [];
      const e = this.attributes.vertexPosition.array,
        t = this.attributes.textureCoord.array;
      for (let s = 0; s < this.definition.height; s++) {
        const i = s / this.definition.height;
        for (let r = 0; r < this.definition.width; r++) {
          const n = r / this.definition.width;
          t.push(n), t.push(i), t.push(0), e.push((n - .5) * 2), e.push((i - .5) * 2), e.push(0), t.push(n + 1 / this.definition.width), t.push(i), t.push(0), e.push((n + 1 / this.definition.width - .5) * 2), e.push((i - .5) * 2), e.push(0), t.push(n), t.push(i + 1 / this.definition.height), t.push(0), e.push((n - .5) * 2), e.push((i + 1 / this.definition.height - .5) * 2), e.push(0), t.push(n), t.push(i + 1 / this.definition.height), t.push(0), e.push((n - .5) * 2), e.push((i + 1 / this.definition.height - .5) * 2), e.push(0), t.push(n + 1 / this.definition.width), t.push(i), t.push(0), e.push((n + 1 / this.definition.width - .5) * 2), e.push((i - .5) * 2), e.push(0), t.push(n + 1 / this.definition.width), t.push(i + 1 / this.definition.height), t.push(0), e.push((n + 1 / this.definition.width - .5) * 2), e.push((i + 1 / this.definition.height - .5) * 2), e.push(0)
        }
      }
    }
    initializeBuffers() {
      if (this.attributes) {
        for (const e in this.attributes) {
          if (!this.attributes[e].isActive) return;
          this.gl.enableVertexAttribArray(this.attributes[e].location), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.attributes[e].array), this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.attributes[e].location, this.attributes[e].size, this.gl.FLOAT, !1, 0, 0)
        }
        this.renderer.state.currentGeometryID = this.definition.id
      }
    }
    bindBuffers() {
      if (this._vao) this.renderer._isWebGL2 ? this.gl.bindVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao);
      else
        for (const e in this.attributes) {
          if (!this.attributes[e].isActive) return;
          this.gl.enableVertexAttribArray(this.attributes[e].location), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer), this.gl.vertexAttribPointer(this.attributes[e].location, this.attributes[e].size, this.gl.FLOAT, !1, 0, 0)
        }
      this.renderer.state.currentGeometryID = this.definition.id
    }
    draw() {
      this.gl.drawArrays(this.gl.TRIANGLES, 0, this.attributes.vertexPosition.numberOfItems)
    }
    dispose() {
      this._vao && (this.renderer._isWebGL2 ? this.gl.deleteVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.deleteVertexArrayOES(this._vao));
      for (const e in this.attributes) {
        if (!this.attributes[e].isActive) return;
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, 1, this.gl.STATIC_DRAW), this.gl.deleteBuffer(this.attributes[e].buffer)
      }
      this.attributes = null, this.renderer.state.currentGeometryID = null
    }
  }
  class J {
    constructor(e = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])) {
      this.type = "Mat4", this.elements = e
    }
    setFromArray(e) {
      for (let t = 0; t < this.elements.length; t++) this.elements[t] = e[t];
      return this
    }
    copy(e) {
      const t = e.elements;
      return this.elements[0] = t[0], this.elements[1] = t[1], this.elements[2] = t[2], this.elements[3] = t[3], this.elements[4] = t[4], this.elements[5] = t[5], this.elements[6] = t[6], this.elements[7] = t[7], this.elements[8] = t[8], this.elements[9] = t[9], this.elements[10] = t[10], this.elements[11] = t[11], this.elements[12] = t[12], this.elements[13] = t[13], this.elements[14] = t[14], this.elements[15] = t[15], this
    }
    clone() {
      return new J().copy(this)
    }
    multiply(e) {
      const t = this.elements,
        s = e.elements;
      let i = new J;
      return i.elements[0] = s[0] * t[0] + s[1] * t[4] + s[2] * t[8] + s[3] * t[12], i.elements[1] = s[0] * t[1] + s[1] * t[5] + s[2] * t[9] + s[3] * t[13], i.elements[2] = s[0] * t[2] + s[1] * t[6] + s[2] * t[10] + s[3] * t[14], i.elements[3] = s[0] * t[3] + s[1] * t[7] + s[2] * t[11] + s[3] * t[15], i.elements[4] = s[4] * t[0] + s[5] * t[4] + s[6] * t[8] + s[7] * t[12], i.elements[5] = s[4] * t[1] + s[5] * t[5] + s[6] * t[9] + s[7] * t[13], i.elements[6] = s[4] * t[2] + s[5] * t[6] + s[6] * t[10] + s[7] * t[14], i.elements[7] = s[4] * t[3] + s[5] * t[7] + s[6] * t[11] + s[7] * t[15], i.elements[8] = s[8] * t[0] + s[9] * t[4] + s[10] * t[8] + s[11] * t[12], i.elements[9] = s[8] * t[1] + s[9] * t[5] + s[10] * t[9] + s[11] * t[13], i.elements[10] = s[8] * t[2] + s[9] * t[6] + s[10] * t[10] + s[11] * t[14], i.elements[11] = s[8] * t[3] + s[9] * t[7] + s[10] * t[11] + s[11] * t[15], i.elements[12] = s[12] * t[0] + s[13] * t[4] + s[14] * t[8] + s[15] * t[12], i.elements[13] = s[12] * t[1] + s[13] * t[5] + s[14] * t[9] + s[15] * t[13], i.elements[14] = s[12] * t[2] + s[13] * t[6] + s[14] * t[10] + s[15] * t[14], i.elements[15] = s[12] * t[3] + s[13] * t[7] + s[14] * t[11] + s[15] * t[15], i
    }
    getInverse() {
      const e = this.elements,
        t = new J,
        s = t.elements;
      let i = e[0],
        r = e[1],
        n = e[2],
        o = e[3],
        h = e[4],
        l = e[5],
        d = e[6],
        u = e[7],
        c = e[8],
        p = e[9],
        m = e[10],
        P = e[11],
        M = e[12],
        C = e[13],
        S = e[14],
        L = e[15],
        z = i * l - r * h,
        U = i * d - n * h,
        w = i * u - o * h,
        k = r * d - n * l,
        Q = r * u - o * l,
        _ = n * u - o * d,
        x = c * C - p * M,
        T = c * S - m * M,
        E = c * L - P * M,
        F = p * S - m * C,
        V = p * L - P * C,
        I = m * L - P * S,
        b = z * I - U * V + w * F + k * E - Q * T + _ * x;
      return b ? (b = 1 / b, s[0] = (l * I - d * V + u * F) * b, s[1] = (n * V - r * I - o * F) * b, s[2] = (C * _ - S * Q + L * k) * b, s[3] = (m * Q - p * _ - P * k) * b, s[4] = (d * E - h * I - u * T) * b, s[5] = (i * I - n * E + o * T) * b, s[6] = (S * w - M * _ - L * U) * b, s[7] = (c * _ - m * w + P * U) * b, s[8] = (h * V - l * E + u * x) * b, s[9] = (r * E - i * V - o * x) * b, s[10] = (M * Q - C * w + L * z) * b, s[11] = (p * w - c * Q - P * z) * b, s[12] = (l * T - h * F - d * x) * b, s[13] = (i * F - r * T + n * x) * b, s[14] = (C * U - M * k - S * z) * b, s[15] = (c * k - p * U + m * z) * b, t) : null
    }
    scale(e) {
      let t = this.elements;
      return t[0] *= e.x, t[1] *= e.x, t[2] *= e.x, t[3] *= e.x, t[4] *= e.y, t[5] *= e.y, t[6] *= e.y, t[7] *= e.y, t[8] *= e.z, t[9] *= e.z, t[10] *= e.z, t[11] *= e.z, this
    }
    compose(e, t, s) {
      let i = this.elements;
      const r = t.elements[0],
        n = t.elements[1],
        o = t.elements[2],
        h = t.elements[3],
        l = r + r,
        d = n + n,
        u = o + o,
        c = r * l,
        p = r * d,
        m = r * u,
        P = n * d,
        M = n * u,
        C = o * u,
        S = h * l,
        L = h * d,
        z = h * u,
        U = s.x,
        w = s.y,
        k = s.z;
      return i[0] = (1 - (P + C)) * U, i[1] = (p + z) * U, i[2] = (m - L) * U, i[3] = 0, i[4] = (p - z) * w, i[5] = (1 - (c + C)) * w, i[6] = (M + S) * w, i[7] = 0, i[8] = (m + L) * k, i[9] = (M - S) * k, i[10] = (1 - (c + P)) * k, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this
    }
    composeFromOrigin(e, t, s, i) {
      let r = this.elements;
      const n = t.elements[0],
        o = t.elements[1],
        h = t.elements[2],
        l = t.elements[3],
        d = n + n,
        u = o + o,
        c = h + h,
        p = n * d,
        m = n * u,
        P = n * c,
        M = o * u,
        C = o * c,
        S = h * c,
        L = l * d,
        z = l * u,
        U = l * c,
        w = s.x,
        k = s.y,
        Q = s.z,
        _ = i.x,
        x = i.y,
        T = i.z,
        E = (1 - (M + S)) * w,
        F = (m + U) * w,
        V = (P - z) * w,
        I = (m - U) * k,
        b = (1 - (p + S)) * k,
        B = (C + L) * k,
        D = (P + z) * Q,
        oe = (C - L) * Q,
        Oe = (1 - (p + M)) * Q;
      return r[0] = E, r[1] = F, r[2] = V, r[3] = 0, r[4] = I, r[5] = b, r[6] = B, r[7] = 0, r[8] = D, r[9] = oe, r[10] = Oe, r[11] = 0, r[12] = e.x + _ - (E * _ + I * x + D * T), r[13] = e.y + x - (F * _ + b * x + oe * T), r[14] = e.z + T - (V * _ + B * x + Oe * T), r[15] = 1, this
    }
  }
  class O {
    constructor(e = 0, t = e) {
      this.type = "Vec2", this._x = e, this._y = t
    }
    get x() {
      return this._x
    }
    get y() {
      return this._y
    }
    set x(e) {
      const t = e !== this._x;
      this._x = e, t && this._onChangeCallback && this._onChangeCallback()
    }
    set y(e) {
      const t = e !== this._y;
      this._y = e, t && this._onChangeCallback && this._onChangeCallback()
    }
    onChange(e) {
      return e && (this._onChangeCallback = e), this
    }
    set(e, t) {
      return this._x = e, this._y = t, this
    }
    add(e) {
      return this._x += e.x, this._y += e.y, this
    }
    addScalar(e) {
      return this._x += e, this._y += e, this
    }
    sub(e) {
      return this._x -= e.x, this._y -= e.y, this
    }
    subScalar(e) {
      return this._x -= e, this._y -= e, this
    }
    multiply(e) {
      return this._x *= e.x, this._y *= e.y, this
    }
    multiplyScalar(e) {
      return this._x *= e, this._y *= e, this
    }
    copy(e) {
      return this._x = e.x, this._y = e.y, this
    }
    clone() {
      return new O(this._x, this._y)
    }
    sanitizeNaNValuesWith(e) {
      return this._x = isNaN(this._x) ? e.x : parseFloat(this._x), this._y = isNaN(this._y) ? e.y : parseFloat(this._y), this
    }
    max(e) {
      return this._x = Math.max(this._x, e.x), this._y = Math.max(this._y, e.y), this
    }
    min(e) {
      return this._x = Math.min(this._x, e.x), this._y = Math.min(this._y, e.y), this
    }
    equals(e) {
      return this._x === e.x && this._y === e.y
    }
    normalize() {
      let e = this._x * this._x + this._y * this._y;
      return e > 0 && (e = 1 / Math.sqrt(e)), this._x *= e, this._y *= e, this
    }
    dot(e) {
      return this._x * e.x + this._y * e.y
    }
  }
  class v {
    constructor(e = 0, t = e, s = e) {
      this.type = "Vec3", this._x = e, this._y = t, this._z = s
    }
    get x() {
      return this._x
    }
    get y() {
      return this._y
    }
    get z() {
      return this._z
    }
    set x(e) {
      const t = e !== this._x;
      this._x = e, t && this._onChangeCallback && this._onChangeCallback()
    }
    set y(e) {
      const t = e !== this._y;
      this._y = e, t && this._onChangeCallback && this._onChangeCallback()
    }
    set z(e) {
      const t = e !== this._z;
      this._z = e, t && this._onChangeCallback && this._onChangeCallback()
    }
    onChange(e) {
      return e && (this._onChangeCallback = e), this
    }
    set(e, t, s) {
      return this._x = e, this._y = t, this._z = s, this
    }
    add(e) {
      return this._x += e.x, this._y += e.y, this._z += e.z, this
    }
    addScalar(e) {
      return this._x += e, this._y += e, this._z += e, this
    }
    sub(e) {
      return this._x -= e.x, this._y -= e.y, this._z -= e.z, this
    }
    subScalar(e) {
      return this._x -= e, this._y -= e, this._z -= e, this
    }
    multiply(e) {
      return this._x *= e.x, this._y *= e.y, this._z *= e.z, this
    }
    multiplyScalar(e) {
      return this._x *= e, this._y *= e, this._z *= e, this
    }
    copy(e) {
      return this._x = e.x, this._y = e.y, this._z = e.z, this
    }
    clone() {
      return new v(this._x, this._y, this._z)
    }
    sanitizeNaNValuesWith(e) {
      return this._x = isNaN(this._x) ? e.x : parseFloat(this._x), this._y = isNaN(this._y) ? e.y : parseFloat(this._y), this._z = isNaN(this._z) ? e.z : parseFloat(this._z), this
    }
    max(e) {
      return this._x = Math.max(this._x, e.x), this._y = Math.max(this._y, e.y), this._z = Math.max(this._z, e.z), this
    }
    min(e) {
      return this._x = Math.min(this._x, e.x), this._y = Math.min(this._y, e.y), this._z = Math.min(this._z, e.z), this
    }
    equals(e) {
      return this._x === e.x && this._y === e.y && this._z === e.z
    }
    normalize() {
      let e = this._x * this._x + this._y * this._y + this._z * this._z;
      return e > 0 && (e = 1 / Math.sqrt(e)), this._x *= e, this._y *= e, this._z *= e, this
    }
    dot(e) {
      return this._x * e.x + this._y * e.y + this._z * e.z
    }
    applyMat4(e) {
      const t = this._x,
        s = this._y,
        i = this._z,
        r = e.elements;
      let n = r[3] * t + r[7] * s + r[11] * i + r[15];
      return n = n || 1, this._x = (r[0] * t + r[4] * s + r[8] * i + r[12]) / n, this._y = (r[1] * t + r[5] * s + r[9] * i + r[13]) / n, this._z = (r[2] * t + r[6] * s + r[10] * i + r[14]) / n, this
    }
    applyQuat(e) {
      const t = this._x,
        s = this._y,
        i = this._z,
        r = e.elements[0],
        n = e.elements[1],
        o = e.elements[2],
        h = e.elements[3],
        l = h * t + n * i - o * s,
        d = h * s + o * t - r * i,
        u = h * i + r * s - n * t,
        c = -r * t - n * s - o * i;
      return this._x = l * h + c * -r + d * -o - u * -n, this._y = d * h + c * -n + u * -r - l * -o, this._z = u * h + c * -o + l * -n - d * -r, this
    }
    project(e) {
      return this.applyMat4(e.viewMatrix).applyMat4(e.projectionMatrix), this
    }
    unproject(e) {
      return this.applyMat4(e.projectionMatrix.getInverse()).applyMat4(e.worldMatrix), this
    }
  }
  const He = new O,
    Mt = new v,
    Ct = new J;
  class de {
    constructor(e, {
      isFBOTexture: t = !1,
      fromTexture: s = !1,
      loader: i,
      sampler: r,
      floatingPoint: n = "none",
      premultiplyAlpha: o = !1,
      anisotropy: h = 1,
      generateMipmap: l = null,
      wrapS: d,
      wrapT: u,
      minFilter: c,
      magFilter: p
    } = {}) {
      if (this.type = "Texture", e = e && e.renderer || e, !e || e.type !== "Renderer") y(this.type + ": Renderer not passed as first argument", e);
      else if (!e.gl) {
        e.production || y(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined");
        return
      }
      if (this.renderer = e, this.gl = this.renderer.gl, this.uuid = me(), this._globalParameters = {
          unpackAlignment: 4,
          flipY: !t,
          premultiplyAlpha: !1,
          shouldPremultiplyAlpha: o,
          floatingPoint: n,
          type: this.gl.UNSIGNED_BYTE,
          internalFormat: this.gl.RGBA,
          format: this.gl.RGBA
        }, this.parameters = {
          anisotropy: h,
          generateMipmap: l,
          wrapS: d || this.gl.CLAMP_TO_EDGE,
          wrapT: u || this.gl.CLAMP_TO_EDGE,
          minFilter: c || this.gl.LINEAR,
          magFilter: p || this.gl.LINEAR,
          _shouldUpdate: !0
        }, this._initState(), this.sourceType = t ? "fbo" : "empty", this._useCache = !0, this._samplerName = r, this._sampler = {
          isActive: !1,
          isTextureBound: !1,
          texture: this.gl.createTexture()
        }, this._textureMatrix = {
          matrix: new J,
          isActive: !1
        }, this._size = {
          width: 1,
          height: 1
        }, this.scale = new O(1), this.scale.onChange(() => this.resize()), this.offset = new O, this.offset.onChange(() => this.resize()), this._loader = i, this._sourceLoaded = !1, this._uploaded = !1, this._willUpdate = !1, this.shouldUpdate = !1, this._forceUpdate = !1, this.userData = {}, this._canDraw = !1, s) {
        this._copyOnInit = !0, this._copiedFrom = s;
        return
      }
      this._copyOnInit = !1, this._initTexture()
    }
    _initState() {
      this._state = {
        anisotropy: 1,
        generateMipmap: !1,
        wrapS: null,
        wrapT: null,
        minFilter: null,
        magFilter: this.gl.LINEAR
      }
    }
    _initTexture() {
      this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), this.sourceType === "empty" && (this._globalParameters.flipY = !1, this._updateGlobalTexParameters(), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255])), this._canDraw = !0)
    }
    _restoreFromTexture() {
      this._copyOnInit || this._initTexture(), this._parent && (this._setTextureUniforms(), this._setSize()), this.copy(this._copiedFrom), this._canDraw = !0
    }
    _restoreContext() {
      if (this._canDraw = !1, this._sampler.texture = this.gl.createTexture(), this._sampler.isActive = !1, this._sampler.isTextureBound = !1, this._textureMatrix.isActive = !1, this._initState(), this._state.generateMipmap = !1, this.parameters._shouldUpdate = !0, !this._copiedFrom) this._initTexture(), this._parent && this._setParent(), this.source && (this.setSource(this.source), this.sourceType === "image" ? this.renderer.cache.addTexture(this) : this.needUpdate()), this._canDraw = !0;
      else {
        const e = this.renderer.nextRender.add(() => {
          this._copiedFrom._canDraw && (this._restoreFromTexture(), e.keep = !1)
        }, !0)
      }
    }
    addParent(e) {
      if (!e || e.type !== "Plane" && e.type !== "PingPongPlane" && e.type !== "ShaderPass" && e.type !== "RenderTarget") {
        this.renderer.production || g(this.type + ": cannot add texture as a child of ", e, " because it is not a valid parent");
        return
      }
      this._parent = e, this.index = this._parent.textures.length, this._parent.textures.push(this), this._setParent()
    }
    _setParent() {
      if (this._sampler.name = this._samplerName || "uSampler" + this.index, this._textureMatrix.name = this._samplerName ? this._samplerName + "Matrix" : "uTextureMatrix" + this.index, this._parent._program) {
        if (!this._parent._program.compiled) {
          this.renderer.production || g(this.type + ": Unable to create the texture because the program is not valid");
          return
        }
        if (this._setTextureUniforms(), this._copyOnInit) {
          const e = this.renderer.nextRender.add(() => {
            this._copiedFrom._canDraw && this._copiedFrom._uploaded && (this.copy(this._copiedFrom), e.keep = !1)
          }, !0);
          return
        }
        this.source ? this._parent.loader && this._parent.loader._addSourceToParent(this.source, this.sourceType) : this._size = {
          width: this._parent._boundingRect.document.width,
          height: this._parent._boundingRect.document.height
        }, this._setSize()
      } else this._parent.type === "RenderTarget" && (this._size = {
        width: this._parent._size && this._parent._size.width || this.renderer._boundingRect.width,
        height: this._parent._size && this._parent._size.height || this.renderer._boundingRect.height
      }, this._upload(), this._updateTexParameters(), this._canDraw = !0)
    }
    hasParent() {
      return !!this._parent
    }
    _setTextureUniforms() {
      const e = this._parent._program.activeUniforms;
      for (let t = 0; t < e.textures.length; t++) e.textures[t] === this._sampler.name && (this._sampler.isActive = !0, this.renderer.useProgram(this._parent._program), this._sampler.location = this.gl.getUniformLocation(this._parent._program.program, this._sampler.name), e.textureMatrices.find(s => s === this._textureMatrix.name) && (this._textureMatrix.isActive = !0, this._textureMatrix.location = this.gl.getUniformLocation(this._parent._program.program, this._textureMatrix.name)), this.gl.uniform1i(this._sampler.location, this.index))
    }
    copy(e) {
      if (!e || e.type !== "Texture") {
        this.renderer.production || g(this.type + ": Unable to set the texture from texture:", e);
        return
      }
      this._globalParameters = Object.assign({}, e._globalParameters), this._state = Object.assign({}, e._state), this.parameters.generateMipmap = e.parameters.generateMipmap, this._state.generateMipmap = null, this._size = e._size, !this._sourceLoaded && e._sourceLoaded && this._onSourceLoadedCallback && this._onSourceLoadedCallback(), this._sourceLoaded = e._sourceLoaded, !this._uploaded && e._uploaded && this._onSourceUploadedCallback && this._onSourceUploadedCallback(), this._uploaded = e._uploaded, this.sourceType = e.sourceType, this.source = e.source, this._videoFrameCallbackID = e._videoFrameCallbackID, this._sampler.texture = e._sampler.texture, this._copiedFrom = e, this._parent && this._parent._program && (!this._canDraw || !this._textureMatrix.matrix) && (this._setSize(), this._canDraw = !0), this._updateTexParameters(), this.renderer.needRender()
    }
    setSource(e) {
      this._sourceLoaded || this.renderer.nextRender.add(() => this._onSourceLoadedCallback && this._onSourceLoadedCallback());
      const t = e.tagName.toUpperCase() === "IMG" ? "image" : e.tagName.toLowerCase();
      if ((t === "video" || t === "canvas") && (this._useCache = !1), this._useCache) {
        const s = this.renderer.cache.getTextureFromSource(e);
        if (s && s.uuid !== this.uuid) {
          this._uploaded || (this.renderer.nextRender.add(() => this._onSourceUploadedCallback && this._onSourceUploadedCallback()), this._uploaded = !0), this.copy(s), this.resize();
          return
        }
      }
      if (this.sourceType === "empty" || this.sourceType !== t)
        if (t === "video") this._willUpdate = !1, this.shouldUpdate = !0;
        else if (t === "canvas") this._willUpdate = !0, this.shouldUpdate = !0;
      else if (t === "image") this._willUpdate = !1, this.shouldUpdate = !1;
      else {
        this.renderer.production || g(this.type + ": this HTML tag could not be converted into a texture:", e.tagName);
        return
      }
      this.source = e, this.sourceType = t, this._size = {
        width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
        height: this.source.naturalHeight || this.source.height || this.source.videoHeight
      }, this._sourceLoaded = !0, this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), this.resize(), this._globalParameters.flipY = !0, this._globalParameters.premultiplyAlpha = this._globalParameters.shouldPremultiplyAlpha, this.sourceType === "image" && (this.parameters.generateMipmap = this.parameters.generateMipmap || this.parameters.generateMipmap === null, this.parameters._shouldUpdate = this.parameters.generateMipmap, this._state.generateMipmap = !1, this._upload()), this.renderer.needRender()
    }
    _updateGlobalTexParameters() {
      this.renderer.state.unpackAlignment !== this._globalParameters.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this._globalParameters.unpackAlignment), this.renderer.state.unpackAlignment = this._globalParameters.unpackAlignment), this.renderer.state.flipY !== this._globalParameters.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this._globalParameters.flipY), this.renderer.state.flipY = this._globalParameters.flipY), this.renderer.state.premultiplyAlpha !== this._globalParameters.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._globalParameters.premultiplyAlpha), this.renderer.state.premultiplyAlpha = this._globalParameters.premultiplyAlpha), this._globalParameters.floatingPoint === "half-float" ? this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F, this._globalParameters.type = this.gl.HALF_FLOAT) : this.renderer.extensions.OES_texture_half_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES : this.renderer.production || g(this.type + ": could not use half-float textures because the extension is not available") : this._globalParameters.floatingPoint === "float" && (this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F, this._globalParameters.type = this.gl.FLOAT) : this.renderer.extensions.OES_texture_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.FLOAT : this.renderer.production || g(this.type + ": could not use float textures because the extension is not available"))
    }
    _updateTexParameters() {
      this.index && this.renderer.state.activeTexture !== this.index && this._bindTexture(), this.parameters.wrapS !== this._state.wrapS && (!this.renderer._isWebGL2 && (!G(this._size.width) || !G(this._size.height)) && (this.parameters.wrapS = this.gl.CLAMP_TO_EDGE), this.parameters.wrapS !== this.gl.REPEAT && this.parameters.wrapS !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapS !== this.gl.MIRRORED_REPEAT && (this.renderer.production || g(this.type + ": Wrong wrapS value", this.parameters.wrapS, "for this texture:", this, `
gl.CLAMP_TO_EDGE wrapping will be used instead`), this.parameters.wrapS = this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.parameters.wrapS), this._state.wrapS = this.parameters.wrapS), this.parameters.wrapT !== this._state.wrapT && (!this.renderer._isWebGL2 && (!G(this._size.width) || !G(this._size.height)) && (this.parameters.wrapT = this.gl.CLAMP_TO_EDGE), this.parameters.wrapT !== this.gl.REPEAT && this.parameters.wrapT !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapT !== this.gl.MIRRORED_REPEAT && (this.renderer.production || g(this.type + ": Wrong wrapT value", this.parameters.wrapT, "for this texture:", this, `
gl.CLAMP_TO_EDGE wrapping will be used instead`), this.parameters.wrapT = this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.parameters.wrapT), this._state.wrapT = this.parameters.wrapT), this.parameters.generateMipmap && !this._state.generateMipmap && this.source && (!this.renderer._isWebGL2 && (!G(this._size.width) || !G(this._size.height)) ? this.parameters.generateMipmap = !1 : this.gl.generateMipmap(this.gl.TEXTURE_2D), this._state.generateMipmap = this.parameters.generateMipmap), this.parameters.minFilter !== this._state.minFilter && (!this.renderer._isWebGL2 && (!G(this._size.width) || !G(this._size.height)) && (this.parameters.minFilter = this.gl.LINEAR), !this.parameters.generateMipmap && this.parameters.generateMipmap !== null && (this.parameters.minFilter = this.gl.LINEAR), this.parameters.minFilter !== this.gl.LINEAR && this.parameters.minFilter !== this.gl.NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_LINEAR && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_LINEAR && (this.renderer.production || g(this.type + ": Wrong minFilter value", this.parameters.minFilter, "for this texture:", this, `
gl.LINEAR filtering will be used instead`), this.parameters.minFilter = this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.parameters.minFilter), this._state.minFilter = this.parameters.minFilter), this.parameters.magFilter !== this._state.magFilter && (!this.renderer._isWebGL2 && (!G(this._size.width) || !G(this._size.height)) && (this.parameters.magFilter = this.gl.LINEAR), this.parameters.magFilter !== this.gl.LINEAR && this.parameters.magFilter !== this.gl.NEAREST && (this.renderer.production || g(this.type + ": Wrong magFilter value", this.parameters.magFilter, "for this texture:", this, `
gl.LINEAR filtering will be used instead`), this.parameters.magFilter = this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.parameters.magFilter), this._state.magFilter = this.parameters.magFilter);
      const e = this.renderer.extensions.EXT_texture_filter_anisotropic;
      if (e && this.parameters.anisotropy !== this._state.anisotropy) {
        const t = this.gl.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        this.parameters.anisotropy = Math.max(1, Math.min(this.parameters.anisotropy, t)), this.gl.texParameterf(this.gl.TEXTURE_2D, e.TEXTURE_MAX_ANISOTROPY_EXT, this.parameters.anisotropy), this._state.anisotropy = this.parameters.anisotropy
      }
    }
    setWrapS(e) {
      this.parameters.wrapS !== e && (this.parameters.wrapS = e, this.parameters._shouldUpdate = !0)
    }
    setWrapT(e) {
      this.parameters.wrapT !== e && (this.parameters.wrapT = e, this.parameters._shouldUpdate = !0)
    }
    setMinFilter(e) {
      this.parameters.minFilter !== e && (this.parameters.minFilter = e, this.parameters._shouldUpdate = !0)
    }
    setMagFilter(e) {
      this.parameters.magFilter !== e && (this.parameters.magFilter = e, this.parameters._shouldUpdate = !0)
    }
    setAnisotropy(e) {
      e = isNaN(e) ? this.parameters.anisotropy : e, this.parameters.anisotropy !== e && (this.parameters.anisotropy = e, this.parameters._shouldUpdate = !0)
    }
    needUpdate() {
      this._forceUpdate = !0
    }
    _videoFrameCallback() {
      if (this._willUpdate = !0, this.source) this.source.requestVideoFrameCallback(() => this._videoFrameCallback());
      else {
        const e = this.renderer.nextRender.add(() => {
          this.source && (e.keep = !1, this.source.requestVideoFrameCallback(() => this._videoFrameCallback()))
        }, !0)
      }
    }
    _upload() {
      this._updateGlobalTexParameters(), this.source ? this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._globalParameters.format, this._globalParameters.type, this.source) : this.sourceType === "fbo" && this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, this.source || null), this._uploaded || (this.renderer.nextRender.add(() => this._onSourceUploadedCallback && this._onSourceUploadedCallback()), this._uploaded = !0)
    }
    _getSizes() {
      if (this.sourceType === "fbo") return {
        parentWidth: this._parent._boundingRect.document.width,
        parentHeight: this._parent._boundingRect.document.height,
        sourceWidth: this._parent._boundingRect.document.width,
        sourceHeight: this._parent._boundingRect.document.height,
        xOffset: 0,
        yOffset: 0
      };
      const e = this._parent.scale ? He.set(this._parent.scale.x, this._parent.scale.y) : He.set(1, 1),
        t = this._parent._boundingRect.document.width * e.x,
        s = this._parent._boundingRect.document.height * e.y,
        i = this._size.width,
        r = this._size.height,
        n = i / r,
        o = t / s;
      let h = 0,
        l = 0;
      return o > n ? l = Math.min(0, s - t * (1 / n)) : o < n && (h = Math.min(0, t - s * n)), {
        parentWidth: t,
        parentHeight: s,
        sourceWidth: i,
        sourceHeight: r,
        xOffset: h,
        yOffset: l
      }
    }
    setScale(e) {
      if (!e.type || e.type !== "Vec2") {
        this.renderer.production || g(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", e);
        return
      }
      e.sanitizeNaNValuesWith(this.scale).max(He.set(.001, .001)), e.equals(this.scale) || (this.scale.copy(e), this.resize())
    }
    setOffset(e) {
      if (!e.type || e.type !== "Vec2") {
        this.renderer.production || g(this.type + ": Cannot set offset because the parameter passed is not of Vec2 type:", scale);
        return
      }
      e.sanitizeNaNValuesWith(this.offset), e.equals(this.offset) || (this.offset.copy(e), this.resize())
    }
    _setSize() {
      if (this._parent && this._parent._program) {
        const e = this._getSizes();
        this._updateTextureMatrix(e)
      }
    }
    resize() {
      this.sourceType === "fbo" ? (this._size = {
        width: this._parent._size && this._parent._size.width || this._parent._boundingRect.document.width,
        height: this._parent._size && this._parent._size.height || this._parent._boundingRect.document.height
      }, this._copiedFrom || (this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, null))) : this.source && (this._size = {
        width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
        height: this.source.naturalHeight || this.source.height || this.source.videoHeight
      }), this._setSize()
    }
    _updateTextureMatrix(e) {
      const t = Mt.set(e.parentWidth / (e.parentWidth - e.xOffset), e.parentHeight / (e.parentHeight - e.yOffset), 1);
      t.x /= this.scale.x, t.y /= this.scale.y, this._textureMatrix.matrix = Ct.setFromArray([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, (1 - t.x) / 2 + this.offset.x, (1 - t.y) / 2 + this.offset.y, 0, 1]), this._updateMatrixUniform()
    }
    _updateMatrixUniform() {
      this._textureMatrix.isActive && (this.renderer.useProgram(this._parent._program), this.gl.uniformMatrix4fv(this._textureMatrix.location, !1, this._textureMatrix.matrix.elements))
    }
    _onSourceLoaded(e) {
      this.setSource(e), this.sourceType === "image" && this.renderer.cache.addTexture(this)
    }
    _bindTexture() {
      this._canDraw && (this.renderer.state.activeTexture !== this.index && (this.gl.activeTexture(this.gl.TEXTURE0 + this.index), this.renderer.state.activeTexture = this.index), this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), this._sampler.isTextureBound || (this._sampler.isTextureBound = !!this.gl.getParameter(this.gl.TEXTURE_BINDING_2D), this._sampler.isTextureBound && this.renderer.needRender()))
    }
    _draw() {
      this._sampler.isActive && (this._bindTexture(), this.sourceType === "video" && this.source && !this._videoFrameCallbackID && this.source.readyState >= this.source.HAVE_CURRENT_DATA && !this.source.paused && (this._willUpdate = !0), (this._forceUpdate || this._willUpdate && this.shouldUpdate) && (this._state.generateMipmap = !1, this._upload()), this.sourceType === "video" && (this._willUpdate = !1), this._forceUpdate = !1), this.parameters._shouldUpdate && (this._updateTexParameters(), this.parameters._shouldUpdate = !1)
    }
    onSourceLoaded(e) {
      return e && (this._onSourceLoadedCallback = e), this
    }
    onSourceUploaded(e) {
      return e && (this._onSourceUploadedCallback = e), this
    }
    _dispose(e = !1) {
      var t;
      this.sourceType === "video" || this.sourceType === "image" && !this.renderer.state.isActive ? (this._loader && this._loader._removeSource(this), this.source = null) : this.sourceType === "canvas" && this.source && (this.source.width = (t = this.source) == null ? void 0 : t.width, this.source = null), this._parent = null, this.gl && !this._copiedFrom && (e || this.sourceType !== "image" || !this.renderer.state.isActive) && (this._canDraw = !1, this.renderer.cache.removeTexture(this), this.gl.activeTexture(this.gl.TEXTURE0 + this.index), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.deleteTexture(this._sampler.texture))
    }
  }
  class at {
    constructor(e, t = "anonymous") {
      if (this.type = "TextureLoader", e = e && e.renderer || e, !e || e.type !== "Renderer") y(this.type + ": Renderer not passed as first argument", e);
      else if (!e.gl) {
        y(this.type + ": Renderer WebGL context is undefined", e);
        return
      }
      this.renderer = e, this.gl = this.renderer.gl, this.crossOrigin = t, this.elements = []
    }
    _addElement(e, t, s, i) {
      const r = {
        source: e,
        texture: t,
        load: this._sourceLoaded.bind(this, e, t, s),
        error: this._sourceLoadError.bind(this, e, i)
      };
      return this.elements.push(r), r
    }
    _sourceLoadError(e, t, s) {
      t && t(e, s)
    }
    _sourceLoaded(e, t, s) {
      t._sourceLoaded || (t._onSourceLoaded(e), this._parent && (this._increment && this._increment(), this.renderer.nextRender.add(() => this._parent._onLoadingCallback && this._parent._onLoadingCallback(t))), s && s(t))
    }
    _getSourceType(e) {
      let t;
      return typeof e == "string" ? e.match(/\.(jpeg|jpg|jfif|pjpeg|pjp|gif|bmp|png|webp|svg|avif|apng)$/) !== null ? t = "image" : e.match(/\.(webm|mp4|mpg|mpeg|avi|ogg|ogm|ogv|mov|av1)$/) !== null && (t = "video") : e.tagName.toUpperCase() === "IMG" ? t = "image" : e.tagName.toUpperCase() === "VIDEO" ? t = "video" : e.tagName.toUpperCase() === "CANVAS" && (t = "canvas"), t
    }
    _createImage(e) {
      if (typeof e == "string" || !e.hasAttribute("crossOrigin")) {
        const t = new Image;
        return t.crossOrigin = this.crossOrigin, typeof e == "string" ? t.src = e : (t.src = e.src, e.hasAttribute("data-sampler") && t.setAttribute("data-sampler", e.getAttribute("data-sampler"))), t
      } else return e
    }
    _createVideo(e) {
      if (typeof e == "string" || e.getAttribute("crossOrigin") === null) {
        const t = document.createElement("video");
        return t.crossOrigin = this.crossOrigin, typeof e == "string" ? t.src = e : (t.src = e.src, e.hasAttribute("data-sampler") && t.setAttribute("data-sampler", e.getAttribute("data-sampler"))), t
      } else return e
    }
    loadSource(e, t, s, i) {
      switch (this._getSourceType(e)) {
        case "image":
          this.loadImage(e, t, s, i);
          break;
        case "video":
          this.loadVideo(e, t, s, i);
          break;
        case "canvas":
          this.loadCanvas(e, t, s);
          break;
        default:
          this._sourceLoadError(e, i, "this source could not be converted into a texture: " + e);
          break
      }
    }
    loadSources(e, t, s, i) {
      for (let r = 0; r < e.length; r++) this.loadSource(e[r], t, s, i)
    }
    loadImage(e, t = {}, s, i) {
      const r = this.renderer.cache.getTextureFromSource(e);
      let n = Object.assign({}, t);
      if (this._parent && (n = Object.assign(n, this._parent._texturesOptions)), n.loader = this, r) {
        n.sampler = typeof e != "string" && e.hasAttribute("data-sampler") ? e.getAttribute("data-sampler") : n.sampler, n.fromTexture = r;
        const d = new de(this.renderer, n);
        this._sourceLoaded(r.source, d, s), this._parent && this._addToParent(d, r.source, "image");
        return
      }
      const o = this._createImage(e);
      n.sampler = o.hasAttribute("data-sampler") ? o.getAttribute("data-sampler") : n.sampler;
      const h = new de(this.renderer, n),
        l = this._addElement(o, h, s, i);
      o.complete ? this._sourceLoaded(o, h, s) : o.decode ? o.decode().then(this._sourceLoaded.bind(this, o, h, s)).catch(() => {
        o.addEventListener("load", l.load, !1), o.addEventListener("error", l.error, !1)
      }) : (o.addEventListener("load", l.load, !1), o.addEventListener("error", l.error, !1)), this._parent && this._addToParent(h, o, "image")
    }
    loadImages(e, t, s, i) {
      for (let r = 0; r < e.length; r++) this.loadImage(e[r], t, s, i)
    }
    loadVideo(e, t = {}, s, i) {
      const r = this._createVideo(e);
      r.preload = !0, r.muted = !0, r.loop = !0, r.setAttribute("playsinline", ""), r.crossOrigin = this.crossOrigin;
      let n = Object.assign({}, t);
      this._parent && (n = Object.assign(t, this._parent._texturesOptions)), n.loader = this, n.sampler = r.hasAttribute("data-sampler") ? r.getAttribute("data-sampler") : n.sampler;
      const o = new de(this.renderer, n),
        h = this._addElement(r, o, s, i);
      r.addEventListener("canplaythrough", h.load, !1), r.addEventListener("error", h.error, !1), r.readyState >= r.HAVE_FUTURE_DATA && s && this._sourceLoaded(r, o, s), r.load(), this._addToParent && this._addToParent(o, r, "video"), "requestVideoFrameCallback" in HTMLVideoElement.prototype && (h.videoFrameCallback = o._videoFrameCallback.bind(o), o._videoFrameCallbackID = r.requestVideoFrameCallback(h.videoFrameCallback))
    }
    loadVideos(e, t, s, i) {
      for (let r = 0; r < e.length; r++) this.loadVideo(e[r], t, s, i)
    }
    loadCanvas(e, t = {}, s) {
      let i = Object.assign({}, t);
      this._parent && (i = Object.assign(t, this._parent._texturesOptions)), i.loader = this, i.sampler = e.hasAttribute("data-sampler") ? e.getAttribute("data-sampler") : i.sampler;
      const r = new de(this.renderer, i);
      this._addElement(e, r, s, null), this._sourceLoaded(e, r, s), this._parent && this._addToParent(r, e, "canvas")
    }
    loadCanvases(e, t, s) {
      for (let i = 0; i < e.length; i++) this.loadCanvas(e[i], t, s)
    }
    _removeSource(e) {
      const t = this.elements.find(s => s.texture.uuid === e.uuid);
      t && (e.sourceType === "image" ? t.source.removeEventListener("load", t.load, !1) : e.sourceType === "video" && (t.videoFrameCallback && e._videoFrameCallbackID && t.source.cancelVideoFrameCallback(e._videoFrameCallbackID), t.source.removeEventListener("canplaythrough", t.load, !1), t.source.pause(), t.source.removeAttribute("src"), t.source.load()), t.source.removeEventListener("error", t.error, !1))
    }
  }
  class kt extends at {
    constructor(e, t, {
      sourcesLoaded: s = 0,
      sourcesToLoad: i = 0,
      complete: r = !1,
      onComplete: n = () => {}
    } = {}) {
      super(e, t.crossOrigin), this.type = "PlaneTextureLoader", this._parent = t, this._parent.type !== "Plane" && this._parent.type !== "PingPongPlane" && this._parent.type !== "ShaderPass" && (g(this.type + ": Wrong parent type assigned to this loader"), this._parent = null), this.sourcesLoaded = s, this.sourcesToLoad = i, this.complete = r, this.onComplete = n
    }
    _setLoaderSize(e) {
      this.sourcesToLoad = e, this.sourcesToLoad === 0 && (this.complete = !0, this.renderer.nextRender.add(() => this.onComplete && this.onComplete()))
    }
    _increment() {
      this.sourcesLoaded++, this.sourcesLoaded >= this.sourcesToLoad && !this.complete && (this.complete = !0, this.renderer.nextRender.add(() => this.onComplete && this.onComplete()))
    }
    _addSourceToParent(e, t) {
      if (t === "image") {
        const s = this._parent.images;
        !s.find(i => i.src === e.src) && s.push(e)
      } else if (t === "video") {
        const s = this._parent.videos;
        !s.find(i => i.src === e.src) && s.push(e)
      } else if (t === "canvas") {
        const s = this._parent.canvases;
        !s.find(i => i.isSameNode(e)) && s.push(e)
      }
    }
    _addToParent(e, t, s) {
      this._addSourceToParent(t, s), this._parent && e.addParent(this._parent)
    }
  }
  class At {
    constructor(e, t = "Mesh", {
      vertexShaderID: s,
      fragmentShaderID: i,
      vertexShader: r,
      fragmentShader: n,
      uniforms: o = {},
      widthSegments: h = 1,
      heightSegments: l = 1,
      renderOrder: d = 0,
      depthTest: u = !0,
      cullFace: c = "back",
      texturesOptions: p = {},
      crossOrigin: m = "anonymous"
    } = {}) {
      if (this.type = t, e = e && e.renderer || e, (!e || e.type !== "Renderer") && (y(this.type + ": Curtains not passed as first argument or Curtains Renderer is missing", e), setTimeout(() => {
          this._onErrorCallback && this._onErrorCallback()
        }, 0)), this.renderer = e, this.gl = this.renderer.gl, !this.gl) {
        this.renderer.production || y(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined"), setTimeout(() => {
          this._onErrorCallback && this._onErrorCallback()
        }, 0);
        return
      }
      this._canDraw = !1, this.renderOrder = d, this._depthTest = u, this.cullFace = c, this.cullFace !== "back" && this.cullFace !== "front" && this.cullFace !== "none" && (this.cullFace = "back"), this.textures = [], this._texturesOptions = Object.assign({
        premultiplyAlpha: !1,
        anisotropy: 1,
        floatingPoint: "none",
        wrapS: this.gl.CLAMP_TO_EDGE,
        wrapT: this.gl.CLAMP_TO_EDGE,
        minFilter: this.gl.LINEAR,
        magFilter: this.gl.LINEAR
      }, p), this.crossOrigin = m, !r && s && document.getElementById(s) && (r = document.getElementById(s).innerHTML), !n && i && document.getElementById(i) && (n = document.getElementById(i).innerHTML), this._initMesh(), h = parseInt(h), l = parseInt(l), this._geometry = new Et(this.renderer, {
        width: h,
        height: l
      }), this._program = new rt(this.renderer, {
        parent: this,
        vertexShader: r,
        fragmentShader: n
      }), this._program.compiled ? (this._program.createUniforms(o), this.uniforms = this._program.uniformsManager.uniforms, this._geometry.setProgram(this._program), this.renderer.onSceneChange()) : this.renderer.nextRender.add(() => this._onErrorCallback && this._onErrorCallback())
    }
    _initMesh() {
      this.uuid = me(), this.loader = new kt(this.renderer, this, {
        sourcesLoaded: 0,
        initSourcesToLoad: 0,
        complete: !1,
        onComplete: () => {
          this._onReadyCallback && this._onReadyCallback(), this.renderer.needRender()
        }
      }), this.images = [], this.videos = [], this.canvases = [], this.userData = {}, this._canDraw = !0
    }
    _restoreContext() {
      this._canDraw = !1, this._matrices && (this._matrices = null), this._program = new rt(this.renderer, {
        parent: this,
        vertexShader: this._program.vsCode,
        fragmentShader: this._program.fsCode
      }), this._program.compiled && (this._geometry.restoreContext(this._program), this._program.createUniforms(this.uniforms), this.uniforms = this._program.uniformsManager.uniforms, this._programRestored())
    }
    setRenderTarget(e) {
      if (!e || e.type !== "RenderTarget") {
        this.renderer.production || g(this.type + ": Could not set the render target because the argument passed is not a RenderTarget class object", e);
        return
      }
      this.type === "Plane" && this.renderer.scene.removePlane(this), this.target = e, this.type === "Plane" && this.renderer.scene.addPlane(this)
    }
    setRenderOrder(e = 0) {
      e = isNaN(e) ? this.renderOrder : parseInt(e), e !== this.renderOrder && (this.renderOrder = e, this.renderer.scene.setPlaneRenderOrder(this))
    }
    createTexture(e = {}) {
      const t = new de(this.renderer, Object.assign(e, this._texturesOptions));
      return t.addParent(this), t
    }
    addTexture(e) {
      if (!e || e.type !== "Texture") {
        this.renderer.production || g(this.type + ": cannot add ", e, " to this " + this.type + " because it is not a valid texture");
        return
      }
      e.addParent(this)
    }
    loadSources(e, t = {}, s, i) {
      for (let r = 0; r < e.length; r++) this.loadSource(e[r], t, s, i)
    }
    loadSource(e, t = {}, s, i) {
      this.loader.loadSource(e, Object.assign(t, this._texturesOptions), r => {
        s && s(r)
      }, (r, n) => {
        this.renderer.production || g(this.type + ": this HTML tag could not be converted into a texture:", r.tagName), i && i(r, n)
      })
    }
    loadImage(e, t = {}, s, i) {
      this.loader.loadImage(e, Object.assign(t, this._texturesOptions), r => {
        s && s(r)
      }, (r, n) => {
        this.renderer.production || g(this.type + `: There has been an error:
`, n, `
while loading this image:
`, r), i && i(r, n)
      })
    }
    loadVideo(e, t = {}, s, i) {
      this.loader.loadVideo(e, Object.assign(t, this._texturesOptions), r => {
        s && s(r)
      }, (r, n) => {
        this.renderer.production || g(this.type + `: There has been an error:
`, n, `
while loading this video:
`, r), i && i(r, n)
      })
    }
    loadCanvas(e, t = {}, s) {
      this.loader.loadCanvas(e, Object.assign(t, this._texturesOptions), i => {
        s && s(i)
      })
    }
    loadImages(e, t = {}, s, i) {
      for (let r = 0; r < e.length; r++) this.loadImage(e[r], t, s, i)
    }
    loadVideos(e, t = {}, s, i) {
      for (let r = 0; r < e.length; r++) this.loadVideo(e[r], t, s, i)
    }
    loadCanvases(e, t = {}, s) {
      for (let i = 0; i < e.length; i++) this.loadCanvas(e[i], t, s)
    }
    playVideos() {
      for (let e = 0; e < this.textures.length; e++) {
        const t = this.textures[e];
        if (t.sourceType === "video") {
          const s = t.source.play();
          s !== void 0 && s.catch(i => {
            this.renderer.production || g(this.type + ": Could not play the video : ", i)
          })
        }
      }
    }
    _draw() {
      this.renderer.setDepthTest(this._depthTest), this.renderer.setFaceCulling(this.cullFace), this._program.updateUniforms(), this._geometry.bindBuffers(), this.renderer.state.forceBufferUpdate = !1;
      for (let e = 0; e < this.textures.length; e++)
        if (this.textures[e]._draw(), this.textures[e]._sampler.isActive && !this.textures[e]._sampler.isTextureBound) return;
      this._geometry.draw(), this.renderer.state.activeTexture = null, this._onAfterRenderCallback && this._onAfterRenderCallback()
    }
    onError(e) {
      return e && (this._onErrorCallback = e), this
    }
    onLoading(e) {
      return e && (this._onLoadingCallback = e), this
    }
    onReady(e) {
      return e && (this._onReadyCallback = e), this
    }
    onRender(e) {
      return e && (this._onRenderCallback = e), this
    }
    onAfterRender(e) {
      return e && (this._onAfterRenderCallback = e), this
    }
    remove() {
      this._canDraw = !1, this.target && this.renderer.bindFrameBuffer(null), this._dispose(), this.type === "Plane" ? this.renderer.removePlane(this) : this.type === "ShaderPass" && (this.target && (this.target._shaderPass = null, this.target.remove(), this.target = null), this.renderer.removeShaderPass(this))
    }
    _dispose() {
      if (this.gl) {
        this._geometry && this._geometry.dispose(), this.target && this.type === "ShaderPass" && (this.renderer.removeRenderTarget(this.target), this.textures.shift());
        for (let e = 0; e < this.textures.length; e++) this.textures[e]._dispose();
        this.textures = []
      }
    }
  }
  const nt = new O,
    Ft = new O;
  class It extends At {
    constructor(e, t, s = "DOMMesh", {
      widthSegments: i,
      heightSegments: r,
      renderOrder: n,
      depthTest: o,
      cullFace: h,
      uniforms: l,
      vertexShaderID: d,
      fragmentShaderID: u,
      vertexShader: c,
      fragmentShader: p,
      texturesOptions: m,
      crossOrigin: P
    } = {}) {
      d = d || t && t.getAttribute("data-vs-id"), u = u || t && t.getAttribute("data-fs-id"), super(e, s, {
        widthSegments: i,
        heightSegments: r,
        renderOrder: n,
        depthTest: o,
        cullFace: h,
        uniforms: l,
        vertexShaderID: d,
        fragmentShaderID: u,
        vertexShader: c,
        fragmentShader: p,
        texturesOptions: m,
        crossOrigin: P
      }), this.gl && (this.htmlElement = t, (!this.htmlElement || this.htmlElement.length === 0) && (this.renderer.production || g(this.type + ": The HTML element you specified does not currently exists in the DOM")), this._setDocumentSizes())
    }
    _setDocumentSizes() {
      let e = this.htmlElement.getBoundingClientRect();
      this._boundingRect || (this._boundingRect = {}), this._boundingRect.document = {
        width: e.width * this.renderer.pixelRatio,
        height: e.height * this.renderer.pixelRatio,
        top: e.top * this.renderer.pixelRatio,
        left: e.left * this.renderer.pixelRatio
      }
    }
    getBoundingRect() {
      return {
        width: this._boundingRect.document.width,
        height: this._boundingRect.document.height,
        top: this._boundingRect.document.top,
        left: this._boundingRect.document.left,
        right: this._boundingRect.document.left + this._boundingRect.document.width,
        bottom: this._boundingRect.document.top + this._boundingRect.document.height
      }
    }
    resize() {
      this._setDocumentSizes(), this.type === "Plane" && (this.setPerspective(this.camera.fov, this.camera.near, this.camera.far), this._setWorldSizes(), this._applyWorldPositions());
      for (let e = 0; e < this.textures.length; e++) this.textures[e].resize();
      this.renderer.nextRender.add(() => this._onAfterResizeCallback && this._onAfterResizeCallback())
    }
    mouseToPlaneCoords(e) {
      const t = this.scale ? this.scale : Ft.set(1, 1),
        s = nt.set((this._boundingRect.document.width - this._boundingRect.document.width * t.x) / 2, (this._boundingRect.document.height - this._boundingRect.document.height * t.y) / 2),
        i = {
          width: this._boundingRect.document.width * t.x / this.renderer.pixelRatio,
          height: this._boundingRect.document.height * t.y / this.renderer.pixelRatio,
          top: (this._boundingRect.document.top + s.y) / this.renderer.pixelRatio,
          left: (this._boundingRect.document.left + s.x) / this.renderer.pixelRatio
        };
      return nt.set((e.x - i.left) / i.width * 2 - 1, 1 - (e.y - i.top) / i.height * 2)
    }
    onAfterResize(e) {
      return e && (this._onAfterResizeCallback = e), this
    }
  }
  class Dt {
    constructor({
      fov: e = 50,
      near: t = .1,
      far: s = 150,
      width: i,
      height: r,
      pixelRatio: n = 1
    } = {}) {
      this.position = new v, this.projectionMatrix = new J, this.worldMatrix = new J, this.viewMatrix = new J, this._shouldUpdate = !1, this.setSize(), this.setPerspective(e, t, s, i, r, n)
    }
    setFov(e) {
      e = isNaN(e) ? this.fov : parseFloat(e), e = Math.max(1, Math.min(e, 179)), e !== this.fov && (this.fov = e, this.setPosition(), this._shouldUpdate = !0), this.setCSSPerspective()
    }
    setNear(e) {
      e = isNaN(e) ? this.near : parseFloat(e), e = Math.max(e, .01), e !== this.near && (this.near = e, this._shouldUpdate = !0)
    }
    setFar(e) {
      e = isNaN(e) ? this.far : parseFloat(e), e = Math.max(e, 50), e !== this.far && (this.far = e, this._shouldUpdate = !0)
    }
    setPixelRatio(e) {
      e !== this.pixelRatio && (this._shouldUpdate = !0), this.pixelRatio = e
    }
    setSize(e, t) {
      (e !== this.width || t !== this.height) && (this._shouldUpdate = !0), this.width = e, this.height = t
    }
    setPerspective(e, t, s, i, r, n) {
      this.setPixelRatio(n), this.setSize(i, r), this.setFov(e), this.setNear(t), this.setFar(s), this._shouldUpdate && this.updateProjectionMatrix()
    }
    setPosition() {
      this.position.set(0, 0, 1), this.worldMatrix.setFromArray([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, this.position.x, this.position.y, this.position.z, 1]), this.viewMatrix = this.viewMatrix.copy(this.worldMatrix).getInverse()
    }
    setCSSPerspective() {
      this.CSSPerspective = Math.pow(Math.pow(this.width / (2 * this.pixelRatio), 2) + Math.pow(this.height / (2 * this.pixelRatio), 2), .5) / Math.tan(this.fov * .5 * Math.PI / 180)
    }
    getScreenRatiosFromFov(e = 0) {
      const t = this.position.z;
      e < t ? e -= t : e += t;
      const s = this.fov * Math.PI / 180,
        i = 2 * Math.tan(s / 2) * Math.abs(e);
      return {
        width: i * this.width / this.height,
        height: i
      }
    }
    updateProjectionMatrix() {
      const e = this.width / this.height,
        t = this.near * Math.tan(Math.PI / 180 * .5 * this.fov),
        s = 2 * t,
        i = e * s,
        r = -.5 * i,
        n = r + i,
        o = t - s,
        h = 2 * this.near / (n - r),
        l = 2 * this.near / (t - o),
        d = (n + r) / (n - r),
        u = (t + o) / (t - o),
        c = -(this.far + this.near) / (this.far - this.near),
        p = -2 * this.far * this.near / (this.far - this.near);
      this.projectionMatrix.setFromArray([h, 0, 0, 0, 0, l, 0, 0, d, u, c, -1, 0, 0, p, 0])
    }
    forceUpdate() {
      this._shouldUpdate = !0
    }
    cancelUpdate() {
      this._shouldUpdate = !1
    }
  }
  class Ee {
    constructor(e = new Float32Array([0, 0, 0, 1]), t = "XYZ") {
      this.type = "Quat", this.elements = e, this.axisOrder = t
    }
    setFromArray(e) {
      return this.elements[0] = e[0], this.elements[1] = e[1], this.elements[2] = e[2], this.elements[3] = e[3], this
    }
    setAxisOrder(e) {
      switch (e = e.toUpperCase(), e) {
        case "XYZ":
        case "YXZ":
        case "ZXY":
        case "ZYX":
        case "YZX":
        case "XZY":
          this.axisOrder = e;
          break;
        default:
          this.axisOrder = "XYZ"
      }
      return this
    }
    copy(e) {
      return this.elements = e.elements, this.axisOrder = e.axisOrder, this
    }
    clone() {
      return new Ee().copy(this)
    }
    equals(e) {
      return this.elements[0] === e.elements[0] && this.elements[1] === e.elements[1] && this.elements[2] === e.elements[2] && this.elements[3] === e.elements[3] && this.axisOrder === e.axisOrder
    }
    setFromVec3(e) {
      const t = e.x * .5,
        s = e.y * .5,
        i = e.z * .5,
        r = Math.cos(t),
        n = Math.cos(s),
        o = Math.cos(i),
        h = Math.sin(t),
        l = Math.sin(s),
        d = Math.sin(i);
      return this.axisOrder === "XYZ" ? (this.elements[0] = h * n * o + r * l * d, this.elements[1] = r * l * o - h * n * d, this.elements[2] = r * n * d + h * l * o, this.elements[3] = r * n * o - h * l * d) : this.axisOrder === "YXZ" ? (this.elements[0] = h * n * o + r * l * d, this.elements[1] = r * l * o - h * n * d, this.elements[2] = r * n * d - h * l * o, this.elements[3] = r * n * o + h * l * d) : this.axisOrder === "ZXY" ? (this.elements[0] = h * n * o - r * l * d, this.elements[1] = r * l * o + h * n * d, this.elements[2] = r * n * d + h * l * o, this.elements[3] = r * n * o - h * l * d) : this.axisOrder === "ZYX" ? (this.elements[0] = h * n * o - r * l * d, this.elements[1] = r * l * o + h * n * d, this.elements[2] = r * n * d - h * l * o, this.elements[3] = r * n * o + h * l * d) : this.axisOrder === "YZX" ? (this.elements[0] = h * n * o + r * l * d, this.elements[1] = r * l * o + h * n * d, this.elements[2] = r * n * d - h * l * o, this.elements[3] = r * n * o - h * l * d) : this.axisOrder === "XZY" && (this.elements[0] = h * n * o - r * l * d, this.elements[1] = r * l * o - h * n * d, this.elements[2] = r * n * d + h * l * o, this.elements[3] = r * n * o + h * l * d), this
    }
  }
  const Ot = new O,
    Lt = new v,
    zt = new v,
    Ut = new v,
    Vt = new v,
    Bt = new v,
    Nt = new v,
    j = new v,
    X = new v,
    ot = new Ee,
    Wt = new v(.5, .5, 0),
    Ht = new v,
    Gt = new v,
    jt = new v,
    Xt = new v,
    Yt = new O;
  class ht extends It {
    constructor(e, t, {
      widthSegments: s,
      heightSegments: i,
      renderOrder: r,
      depthTest: n,
      cullFace: o,
      uniforms: h,
      vertexShaderID: l,
      fragmentShaderID: d,
      vertexShader: u,
      fragmentShader: c,
      texturesOptions: p,
      crossOrigin: m,
      alwaysDraw: P = !1,
      visible: M = !0,
      transparent: C = !1,
      drawCheckMargins: S = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      autoloadSources: L = !0,
      watchScroll: z = !0,
      fov: U = 50
    } = {}) {
      super(e, t, "Plane", {
        widthSegments: s,
        heightSegments: i,
        renderOrder: r,
        depthTest: n,
        cullFace: o,
        uniforms: h,
        vertexShaderID: l,
        fragmentShaderID: d,
        vertexShader: u,
        fragmentShader: c,
        texturesOptions: p,
        crossOrigin: m
      }), this.gl && (this.index = this.renderer.planes.length, this.target = null, this.alwaysDraw = P, this._shouldDraw = !0, this.visible = M, this._transparent = C, this.drawCheckMargins = S, this.autoloadSources = L, this.watchScroll = z, this._updateMVMatrix = !1, this.camera = new Dt({
        fov: U,
        width: this.renderer._boundingRect.width,
        height: this.renderer._boundingRect.height,
        pixelRatio: this.renderer.pixelRatio
      }), this._program.compiled && (this._initPlane(), this.renderer.scene.addPlane(this), this.renderer.planes.push(this)))
    }
    _programRestored() {
      this.target && this.setRenderTarget(this.renderer.renderTargets[this.target.index]), this._initMatrices(), this.setPerspective(this.camera.fov, this.camera.near, this.camera.far), this._setWorldSizes(), this._applyWorldPositions(), this.renderer.scene.addPlane(this);
      for (let e = 0; e < this.textures.length; e++) this.textures[e]._parent = this, this.textures[e]._restoreContext();
      this._canDraw = !0
    }
    _initPlane() {
      this._initTransformValues(), this._initPositions(), this.setPerspective(this.camera.fov, this.camera.near, this.camera.far), this._initSources()
    }
    _initTransformValues() {
      this.rotation = new v, this.rotation.onChange(() => this._applyRotation()), this.quaternion = new Ee, this.relativeTranslation = new v, this.relativeTranslation.onChange(() => this._setTranslation()), this._translation = new v, this.scale = new v(1), this.scale.onChange(() => {
        this.scale.z = 1, this._applyScale()
      }), this.transformOrigin = new v(.5, .5, 0), this.transformOrigin.onChange(() => {
        this._setWorldTransformOrigin(), this._updateMVMatrix = !0
      })
    }
    resetPlane(e) {
      this._initTransformValues(), this._setWorldTransformOrigin(), e !== null && e ? (this.htmlElement = e, this.resize()) : !e && !this.renderer.production && g(this.type + ": You are trying to reset a plane with a HTML element that does not exist. The old HTML element will be kept instead.")
    }
    removeRenderTarget() {
      this.target && (this.renderer.scene.removePlane(this), this.target = null, this.renderer.scene.addPlane(this))
    }
    _initPositions() {
      this._initMatrices(), this._setWorldSizes(), this._applyWorldPositions()
    }
    _initMatrices() {
      const e = new J;
      this._matrices = {
        world: {
          matrix: e
        },
        modelView: {
          name: "uMVMatrix",
          matrix: e,
          location: this.gl.getUniformLocation(this._program.program, "uMVMatrix")
        },
        projection: {
          name: "uPMatrix",
          matrix: e,
          location: this.gl.getUniformLocation(this._program.program, "uPMatrix")
        },
        modelViewProjection: {
          matrix: e
        }
      }
    }
    _setPerspectiveMatrix() {
      this.camera._shouldUpdate && (this.renderer.useProgram(this._program), this.gl.uniformMatrix4fv(this._matrices.projection.location, !1, this._matrices.projection.matrix.elements)), this.camera.cancelUpdate()
    }
    setPerspective(e, t, s) {
      this.camera.setPerspective(e, t, s, this.renderer._boundingRect.width, this.renderer._boundingRect.height, this.renderer.pixelRatio), this.renderer.state.isContextLost && this.camera.forceUpdate(), this._matrices.projection.matrix = this.camera.projectionMatrix, this.camera._shouldUpdate && (this._setWorldSizes(), this._applyWorldPositions(), this._translation.z = this.relativeTranslation.z / this.camera.CSSPerspective), this._updateMVMatrix = this.camera._shouldUpdate
    }
    _setMVMatrix() {
      this._updateMVMatrix && (this._matrices.world.matrix = this._matrices.world.matrix.composeFromOrigin(this._translation, this.quaternion, this.scale, this._boundingRect.world.transformOrigin), this._matrices.world.matrix.scale({
        x: this._boundingRect.world.width,
        y: this._boundingRect.world.height,
        z: 1
      }), this._matrices.modelView.matrix.copy(this._matrices.world.matrix), this._matrices.modelView.matrix.elements[14] -= this.camera.position.z, this._matrices.modelViewProjection.matrix = this._matrices.projection.matrix.multiply(this._matrices.modelView.matrix), this.alwaysDraw || this._shouldDrawCheck(), this.renderer.useProgram(this._program), this.gl.uniformMatrix4fv(this._matrices.modelView.location, !1, this._matrices.modelView.matrix.elements)), this._updateMVMatrix = !1
    }
    _setWorldTransformOrigin() {
      this._boundingRect.world.transformOrigin = new v((this.transformOrigin.x * 2 - 1) * this._boundingRect.world.width, -(this.transformOrigin.y * 2 - 1) * this._boundingRect.world.height, this.transformOrigin.z)
    }
    _documentToWorldSpace(e) {
      return zt.set(e.x * this.renderer.pixelRatio / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width, -(e.y * this.renderer.pixelRatio / this.renderer._boundingRect.height) * this._boundingRect.world.ratios.height, e.z)
    }
    _setWorldSizes() {
      const e = this.camera.getScreenRatiosFromFov();
      this._boundingRect.world = {
        width: this._boundingRect.document.width / this.renderer._boundingRect.width * e.width / 2,
        height: this._boundingRect.document.height / this.renderer._boundingRect.height * e.height / 2,
        ratios: e
      }, this._setWorldTransformOrigin()
    }
    _setWorldPosition() {
      const e = {
          x: this._boundingRect.document.width / 2 + this._boundingRect.document.left,
          y: this._boundingRect.document.height / 2 + this._boundingRect.document.top
        },
        t = {
          x: this.renderer._boundingRect.width / 2 + this.renderer._boundingRect.left,
          y: this.renderer._boundingRect.height / 2 + this.renderer._boundingRect.top
        };
      this._boundingRect.world.top = (t.y - e.y) / this.renderer._boundingRect.height * this._boundingRect.world.ratios.height, this._boundingRect.world.left = (e.x - t.x) / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width
    }
    setScale(e) {
      if (!e.type || e.type !== "Vec2") {
        this.renderer.production || g(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", e);
        return
      }
      e.sanitizeNaNValuesWith(this.scale).max(Ot.set(.001, .001)), (e.x !== this.scale.x || e.y !== this.scale.y) && (this.scale.set(e.x, e.y, 1), this._applyScale())
    }
    _applyScale() {
      for (let e = 0; e < this.textures.length; e++) this.textures[e].resize();
      this._updateMVMatrix = !0
    }
    setRotation(e) {
      if (!e.type || e.type !== "Vec3") {
        this.renderer.production || g(this.type + ": Cannot set rotation because the parameter passed is not of Vec3 type:", e);
        return
      }
      e.sanitizeNaNValuesWith(this.rotation), e.equals(this.rotation) || (this.rotation.copy(e), this._applyRotation())
    }
    _applyRotation() {
      this.quaternion.setFromVec3(this.rotation), this._updateMVMatrix = !0
    }
    setTransformOrigin(e) {
      if (!e.type || e.type !== "Vec3") {
        this.renderer.production || g(this.type + ": Cannot set transform origin because the parameter passed is not of Vec3 type:", e);
        return
      }
      e.sanitizeNaNValuesWith(this.transformOrigin), e.equals(this.transformOrigin) || (this.transformOrigin.copy(e), this._setWorldTransformOrigin(), this._updateMVMatrix = !0)
    }
    _setTranslation() {
      let e = Lt.set(0, 0, 0);
      this.relativeTranslation.equals(e) || (e = this._documentToWorldSpace(this.relativeTranslation)), this._translation.set(this._boundingRect.world.left + e.x, this._boundingRect.world.top + e.y, this.relativeTranslation.z / this.camera.CSSPerspective), this._updateMVMatrix = !0
    }
    setRelativeTranslation(e) {
      if (!e.type || e.type !== "Vec3") {
        this.renderer.production || g(this.type + ": Cannot set translation because the parameter passed is not of Vec3 type:", e);
        return
      }
      e.sanitizeNaNValuesWith(this.relativeTranslation), e.equals(this.relativeTranslation) || (this.relativeTranslation.copy(e), this._setTranslation())
    }
    _applyWorldPositions() {
      this._setWorldPosition(), this._setTranslation()
    }
    updatePosition() {
      this._setDocumentSizes(), this._applyWorldPositions()
    }
    updateScrollPosition(e, t) {
      (e || t) && (this._boundingRect.document.top += t * this.renderer.pixelRatio, this._boundingRect.document.left += e * this.renderer.pixelRatio, this._applyWorldPositions())
    }
    _getIntersection(e, t) {
      let s = t.clone().sub(e),
        i = e.clone();
      for (; i.z > -1;) i.add(s);
      return i
    }
    _getNearPlaneIntersections(e, t, s) {
      const i = this._matrices.modelViewProjection.matrix;
      if (s.length === 1) s[0] === 0 ? (t[0] = this._getIntersection(t[1], j.set(.95, 1, 0).applyMat4(i)), t.push(this._getIntersection(t[3], X.set(-1, -.95, 0).applyMat4(i)))) : s[0] === 1 ? (t[1] = this._getIntersection(t[0], j.set(-.95, 1, 0).applyMat4(i)), t.push(this._getIntersection(t[2], X.set(1, -.95, 0).applyMat4(i)))) : s[0] === 2 ? (t[2] = this._getIntersection(t[3], j.set(-.95, -1, 0).applyMat4(i)), t.push(this._getIntersection(t[1], X.set(1, .95, 0).applyMat4(i)))) : s[0] === 3 && (t[3] = this._getIntersection(t[2], j.set(.95, -1, 0).applyMat4(i)), t.push(this._getIntersection(t[0], X.set(-1, .95, 0).applyMat4(i))));
      else if (s.length === 2) s[0] === 0 && s[1] === 1 ? (t[0] = this._getIntersection(t[3], j.set(-1, -.95, 0).applyMat4(i)), t[1] = this._getIntersection(t[2], X.set(1, -.95, 0).applyMat4(i))) : s[0] === 1 && s[1] === 2 ? (t[1] = this._getIntersection(t[0], j.set(-.95, 1, 0).applyMat4(i)), t[2] = this._getIntersection(t[3], X.set(-.95, -1, 0).applyMat4(i))) : s[0] === 2 && s[1] === 3 ? (t[2] = this._getIntersection(t[1], j.set(1, .95, 0).applyMat4(i)), t[3] = this._getIntersection(t[0], X.set(-1, .95, 0).applyMat4(i))) : s[0] === 0 && s[1] === 3 && (t[0] = this._getIntersection(t[1], j.set(.95, 1, 0).applyMat4(i)), t[3] = this._getIntersection(t[2], X.set(.95, -1, 0).applyMat4(i)));
      else if (s.length === 3) {
        let r = 0;
        for (let n = 0; n < e.length; n++) s.includes(n) || (r = n);
        t = [t[r]], r === 0 ? (t.push(this._getIntersection(t[0], j.set(-.95, 1, 0).applyMat4(i))), t.push(this._getIntersection(t[0], X.set(-1, .95, 0).applyMat4(i)))) : r === 1 ? (t.push(this._getIntersection(t[0], j.set(.95, 1, 0).applyMat4(i))), t.push(this._getIntersection(t[0], X.set(1, .95, 0).applyMat4(i)))) : r === 2 ? (t.push(this._getIntersection(t[0], j.set(.95, -1, 0).applyMat4(i))), t.push(this._getIntersection(t[0], X.set(1, -.95, 0).applyMat4(i)))) : r === 3 && (t.push(this._getIntersection(t[0], j.set(-.95, -1, 0).applyMat4(i))), t.push(this._getIntersection(t[0], X.set(-1 - .95, 0).applyMat4(i))))
      } else
        for (let r = 0; r < e.length; r++) t[r][0] = 1e4, t[r][1] = 1e4;
      return t
    }
    _getWorldCoords() {
      const e = [Ut.set(-1, 1, 0), Vt.set(1, 1, 0), Bt.set(1, -1, 0), Nt.set(-1, -1, 0)];
      let t = [],
        s = [];
      for (let h = 0; h < e.length; h++) {
        const l = e[h].applyMat4(this._matrices.modelViewProjection.matrix);
        t.push(l), Math.abs(l.z) > 1 && s.push(h)
      }
      s.length && (t = this._getNearPlaneIntersections(e, t, s));
      let i = 1 / 0,
        r = -1 / 0,
        n = 1 / 0,
        o = -1 / 0;
      for (let h = 0; h < t.length; h++) {
        const l = t[h];
        l.x < i && (i = l.x), l.x > r && (r = l.x), l.y < n && (n = l.y), l.y > o && (o = l.y)
      }
      return {
        top: o,
        right: r,
        bottom: n,
        left: i
      }
    }
    _computeWebGLBoundingRect() {
      const e = this._getWorldCoords();
      let t = {
        top: 1 - (e.top + 1) / 2,
        right: (e.right + 1) / 2,
        bottom: 1 - (e.bottom + 1) / 2,
        left: (e.left + 1) / 2
      };
      t.width = t.right - t.left, t.height = t.bottom - t.top, this._boundingRect.worldToDocument = {
        width: t.width * this.renderer._boundingRect.width,
        height: t.height * this.renderer._boundingRect.height,
        top: t.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top,
        left: t.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left,
        right: t.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left + t.width * this.renderer._boundingRect.width,
        bottom: t.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top + t.height * this.renderer._boundingRect.height
      }
    }
    getWebGLBoundingRect() {
      if (this._matrices.modelViewProjection)(!this._boundingRect.worldToDocument || this.alwaysDraw) && this._computeWebGLBoundingRect();
      else return this._boundingRect.document;
      return this._boundingRect.worldToDocument
    }
    _getWebGLDrawRect() {
      return this._computeWebGLBoundingRect(), {
        top: this._boundingRect.worldToDocument.top - this.drawCheckMargins.top,
        right: this._boundingRect.worldToDocument.right + this.drawCheckMargins.right,
        bottom: this._boundingRect.worldToDocument.bottom + this.drawCheckMargins.bottom,
        left: this._boundingRect.worldToDocument.left - this.drawCheckMargins.left
      }
    }
    _shouldDrawCheck() {
      const e = this._getWebGLDrawRect();
      Math.round(e.right) <= this.renderer._boundingRect.left || Math.round(e.left) >= this.renderer._boundingRect.left + this.renderer._boundingRect.width || Math.round(e.bottom) <= this.renderer._boundingRect.top || Math.round(e.top) >= this.renderer._boundingRect.top + this.renderer._boundingRect.height ? this._shouldDraw && (this._shouldDraw = !1, this.renderer.nextRender.add(() => this._onLeaveViewCallback && this._onLeaveViewCallback())) : (this._shouldDraw || this.renderer.nextRender.add(() => this._onReEnterViewCallback && this._onReEnterViewCallback()), this._shouldDraw = !0)
    }
    isDrawn() {
      return this._canDraw && this.visible && (this._shouldDraw || this.alwaysDraw)
    }
    enableDepthTest(e) {
      this._depthTest = e
    }
    _initSources() {
      let e = 0;
      if (this.autoloadSources) {
        const t = this.htmlElement.getElementsByTagName("img"),
          s = this.htmlElement.getElementsByTagName("video"),
          i = this.htmlElement.getElementsByTagName("canvas");
        t.length && this.loadImages(t), s.length && this.loadVideos(s), i.length && this.loadCanvases(i), e = t.length + s.length + i.length
      }
      this.loader._setLoaderSize(e), this._canDraw = !0
    }
    _startDrawing() {
      this._canDraw && (this._onRenderCallback && this._onRenderCallback(), this.target ? this.renderer.bindFrameBuffer(this.target) : this.renderer.state.scenePassIndex === null && this.renderer.bindFrameBuffer(null), this._setPerspectiveMatrix(), this._setMVMatrix(), (this.alwaysDraw || this._shouldDraw) && this.visible && this._draw())
    }
    mouseToPlaneCoords(e) {
      if (ot.setAxisOrder(this.quaternion.axisOrder), ot.equals(this.quaternion) && Wt.equals(this.transformOrigin)) return super.mouseToPlaneCoords(e);
      {
        const t = {
            x: 2 * (e.x / (this.renderer._boundingRect.width / this.renderer.pixelRatio)) - 1,
            y: 2 * (1 - e.y / (this.renderer._boundingRect.height / this.renderer.pixelRatio)) - 1
          },
          s = this.camera.position.clone(),
          i = Ht.set(t.x, t.y, -.5);
        i.unproject(this.camera), i.sub(s).normalize();
        const r = Gt.set(0, 0, -1);
        r.applyQuat(this.quaternion).normalize();
        const n = Xt.set(0, 0, 0),
          o = r.dot(i);
        if (Math.abs(o) >= 1e-4) {
          const h = this._matrices.world.matrix.getInverse().multiply(this.camera.viewMatrix),
            l = this._boundingRect.world.transformOrigin.clone().add(this._translation),
            d = jt.set(this._translation.x - l.x, this._translation.y - l.y, this._translation.z - l.z);
          d.applyQuat(this.quaternion), l.add(d);
          const u = r.dot(l.clone().sub(s)) / o;
          n.copy(s.add(i.multiplyScalar(u))), n.applyMat4(h)
        } else n.set(1 / 0, 1 / 0, 1 / 0);
        return Yt.set(n.x, n.y)
      }
    }
    onReEnterView(e) {
      return e && (this._onReEnterViewCallback = e), this
    }
    onLeaveView(e) {
      return e && (this._onLeaveViewCallback = e), this
    }
  }
  class Ge {
    constructor(e, {
      shaderPass: t,
      depth: s = !1,
      clear: i = !0,
      maxWidth: r,
      maxHeight: n,
      minWidth: o = 1024,
      minHeight: h = 1024,
      texturesOptions: l = {}
    } = {}) {
      if (this.type = "RenderTarget", e = e && e.renderer || e, !e || e.type !== "Renderer") y(this.type + ": Renderer not passed as first argument", e);
      else if (!e.gl) {
        e.production || y(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined");
        return
      }
      this.renderer = e, this.gl = this.renderer.gl, this.index = this.renderer.renderTargets.length, this._shaderPass = t, this._depth = s, this._shouldClear = i, this._maxSize = {
        width: r ? Math.min(this.renderer.state.maxTextureSize / 4, r) : this.renderer.state.maxTextureSize / 4,
        height: n ? Math.min(this.renderer.state.maxTextureSize / 4, n) : this.renderer.state.maxTextureSize / 4
      }, this._minSize = {
        width: o * this.renderer.pixelRatio,
        height: h * this.renderer.pixelRatio
      }, l = Object.assign({
        sampler: "uRenderTexture",
        isFBOTexture: !0,
        premultiplyAlpha: !1,
        anisotropy: 1,
        generateMipmap: !1,
        floatingPoint: "none",
        wrapS: this.gl.CLAMP_TO_EDGE,
        wrapT: this.gl.CLAMP_TO_EDGE,
        minFilter: this.gl.LINEAR,
        magFilter: this.gl.LINEAR
      }, l), this._texturesOptions = l, this.userData = {}, this.uuid = me(), this.renderer.renderTargets.push(this), this.renderer.onSceneChange(), this._initRenderTarget()
    }
    _initRenderTarget() {
      this._setSize(), this.textures = [], this._createFrameBuffer()
    }
    _restoreContext() {
      this._setSize(), this._createFrameBuffer()
    }
    _setSize() {
      this._shaderPass && this._shaderPass._isScenePass ? this._size = {
        width: this.renderer._boundingRect.width,
        height: this.renderer._boundingRect.height
      } : this._size = {
        width: Math.min(this._maxSize.width, Math.max(this._minSize.width, this.renderer._boundingRect.width)),
        height: Math.min(this._maxSize.height, Math.max(this._minSize.height, this.renderer._boundingRect.height))
      }
    }
    resize() {
      this._shaderPass && (this._setSize(), this.textures[0].resize(), this.renderer.bindFrameBuffer(this, !0), this._depth && this._bindDepthBuffer(), this.renderer.bindFrameBuffer(null))
    }
    _bindDepthBuffer() {
      this._depthBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this._depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this._size.width, this._size.height), this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this._depthBuffer))
    }
    _createFrameBuffer() {
      this._frameBuffer = this.gl.createFramebuffer(), this.renderer.bindFrameBuffer(this, !0), this.textures.length ? (this.textures[0]._parent = this, this.textures[0]._restoreContext()) : new de(this.renderer, this._texturesOptions).addParent(this), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textures[0]._sampler.texture, 0), this._depth && (this._depthBuffer = this.gl.createRenderbuffer(), this._bindDepthBuffer()), this.renderer.bindFrameBuffer(null)
    }
    getTexture() {
      return this.textures[0]
    }
    remove() {
      if (this._shaderPass) {
        this.renderer.production || g(this.type + ": You're trying to remove a RenderTarget attached to a ShaderPass. You should remove that ShaderPass instead:", this._shaderPass);
        return
      }
      this._dispose(), this.renderer.removeRenderTarget(this)
    }
    _dispose() {
      this._frameBuffer && (this.gl.deleteFramebuffer(this._frameBuffer), this._frameBuffer = null), this._depthBuffer && (this.gl.deleteRenderbuffer(this._depthBuffer), this._depthBuffer = null), this.textures[0]._dispose(), this.textures = []
    }
  }
  class qt extends ht {
    constructor(e, t, {
      sampler: s = "uPingPongTexture",
      widthSegments: i,
      heightSegments: r,
      renderOrder: n,
      depthTest: o,
      cullFace: h,
      uniforms: l,
      vertexShaderID: d,
      fragmentShaderID: u,
      vertexShader: c,
      fragmentShader: p,
      texturesOptions: m,
      crossOrigin: P,
      alwaysDraw: M,
      visible: C,
      transparent: S,
      drawCheckMargins: L,
      autoloadSources: z,
      watchScroll: U,
      fov: w
    } = {}) {
      if (o = !1, z = !1, super(e, t, {
          widthSegments: i,
          heightSegments: r,
          renderOrder: n,
          depthTest: o,
          cullFace: h,
          uniforms: l,
          vertexShaderID: d,
          fragmentShaderID: u,
          vertexShader: c,
          fragmentShader: p,
          texturesOptions: m,
          crossOrigin: P,
          alwaysDraw: M,
          visible: C,
          transparent: S,
          drawCheckMargins: L,
          autoloadSources: z,
          watchScroll: U,
          fov: w
        }), !this.gl) return;
      this.renderer.scene.removePlane(this), this.type = "PingPongPlane", this.renderer.scene.addPlane(this), this.readPass = new Ge(e, {
        depth: !1,
        clear: !1,
        texturesOptions: m
      }), this.writePass = new Ge(e, {
        depth: !1,
        clear: !1,
        texturesOptions: m
      }), this.createTexture({
        sampler: s
      });
      let k = 0;
      this.readPass.getTexture().onSourceUploaded(() => {
        k++, this._checkIfReady(k)
      }), this.writePass.getTexture().onSourceUploaded(() => {
        k++, this._checkIfReady(k)
      }), this.setRenderTarget(this.readPass), this._onRenderCallback = () => {
        this.readPass && this.writePass && this.textures[0] && this.textures[0]._uploaded && this.setRenderTarget(this.writePass), this._onPingPongRenderCallback && this._onPingPongRenderCallback()
      }, this._onAfterRenderCallback = () => {
        this.readPass && this.writePass && this.textures[0] && this.textures[0]._uploaded && this._swapPasses(), this._onPingPongAfterRenderCallback && this._onPingPongAfterRenderCallback()
      }
    }
    _checkIfReady(e) {
      e === 2 && this.renderer.nextRender.add(() => {
        this.textures[0].copy(this.target.getTexture())
      })
    }
    _swapPasses() {
      const e = this.readPass;
      this.readPass = this.writePass, this.writePass = e, this.textures[0].copy(this.readPass.getTexture())
    }
    getTexture() {
      return this.textures[0]
    }
    onRender(e) {
      return e && (this._onPingPongRenderCallback = e), this
    }
    onAfterRender(e) {
      return e && (this._onPingPongAfterRenderCallback = e), this
    }
    remove() {
      this.target = null, this.renderer.bindFrameBuffer(null), this.writePass && (this.writePass.remove(), this.writePass = null), this.readPass && (this.readPass.remove(), this.readPass = null), super.remove()
    }
  }
  let Me, fe, je, Xe = !1,
    ne = window.innerHeight || document.documentElement.clientHeight,
    ee = window.innerWidth || document.documentElement.clientWidth,
    Y = window.scrollY || window.pageYOffset,
    Ye = 0,
    _e = 0,
    xe = 0,
    ye, ue;
  typeof document.hidden < "u" ? (Me = "hidden", fe = "visibilitychange") : typeof document.msHidden < "u" ? (Me = "msHidden", fe = "msvisibilitychange") : typeof document.webkitHidden < "u" && (Me = "webkitHidden", fe = "webkitvisibilitychange");

  function $t(a, e) {
    let t;
    return function(...s) {
      clearTimeout(t), t = setTimeout(() => {
        a.apply(this, s)
      }, e)
    }
  }

  function ve(a) {
    return window.atob(a)
  }

  function be() {
    return "id-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  function qe(a, e, t, s, i) {
    if (t.length > 1) {
      let r = s ? +s * 2 * Math.PI : 0,
        n = e.width / 2,
        o = e.height / 2,
        h = e.width / 2,
        l = e.height / 2,
        d;
      if (i === "radial") {
        const p = Math.max(h, l);
        d = a.createRadialGradient(n, o, p, n, o, 0)
      }
      const u = Math.cos(r) * h,
        c = Math.sin(r) * l;
      if (i === "linear" && (d = a.createLinearGradient(n - u, o - c, n + u, o + c)), i === "conic") {
        d = a.createConicGradient(-Math.PI + r, n, o);
        const p = [...t, ...t.slice().reverse()];
        p.forEach((m, P) => {
          d.addColorStop(P * (1 / (p.length - 1)), m)
        })
      } else t.forEach((p, m) => {
        d.addColorStop(m * (1 / (t.length - 1)), p)
      });
      return d
    }
    return t[0]
  }

  function lt(a) {
    const e = {
      linear: t => t,
      easeInQuad: t => t * t,
      easeOutQuad: t => 1 - (1 - t) * (1 - t),
      easeInOutQuad: t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
      easeInCubic: t => t * t * t,
      easeOutCubic: t => 1 - Math.pow(1 - t, 3),
      easeInOutCubic: t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
      easeInQuart: t => t ** 4,
      easeOutQuart: t => 1 - Math.pow(1 - t, 4),
      easeInOutQuart: t => t < .5 ? 8 * t ** 4 : 1 - Math.pow(-2 * t + 2, 4) / 2,
      easeInQuint: t => t ** 5,
      easeOutQuint: t => 1 - Math.pow(1 - t, 5),
      easeInOutQuint: t => t < .5 ? 16 * t ** 5 : 1 - Math.pow(-2 * t + 2, 5) / 2,
      easeOutElastic: t => {
        const s = 2 * Math.PI / 3;
        return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - .75) * s) + 1
      },
      easeInElastic: t => {
        const s = 2 * Math.PI / 3;
        return t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * s)
      },
      easeInOutElastic: t => {
        const s = 2 * Math.PI / 4.5;
        return t === 0 ? 0 : t === 1 ? 1 : t < .5 ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * s)) / 2 : Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * s) / 2 + 1
      },
      easeInSine: t => 1 - Math.cos(t * Math.PI / 2),
      easeOutSine: t => Math.sin(t * Math.PI / 2),
      easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
      easeInCirc: t => 1 - Math.sqrt(1 - t ** 2),
      easeOutCirc: t => Math.sqrt(1 - Math.pow(t - 1, 2)),
      easeInOutCirc: t => t < .5 ? (1 - Math.sqrt(1 - (2 * t) ** 2)) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2,
      easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * t - 10),
      easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      easeInOutExpo: t => t === 0 ? 0 : t === 1 ? 1 : t < .5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2
    };
    return e[a] || e.linear
  }

  function ie(a) {
    return a && typeof a == "string" && (a = JSON.parse(a)), Object.values(a)
  }

  function ce(a, e, t) {
    for (let s = 0; s < t; s++) a = (a + e) / 2;
    return +((a + e) / 2).toFixed(4)
  }

  function Ce() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  function ke(a) {
    return a.usesPingPong || ["mouse", "waterRipple"].includes(a.type)
  }

  function te(a, e) {
    return a.getAttribute(e)
  }

  function pe(a) {
    const e = a.hasOwnProperty("trackMouse") && a.trackMouse !== 0 || a.hasOwnProperty("axisTilt") && a.axisTilt !== 0 || a.hasOwnProperty("trackMouseMove") && a.trackMouseMove !== 0,
      t = a.states && [...a.states.appear, ...a.states.scroll, ...a.states.hover].length > 0,
      s = a.layerType === "effect" && (a.animating || ke(a)),
      i = a.type === "video";
    return e || t || s || i
  }

  function Zt(a, e, t) {
    const s = [];
    return a.forEach(i => {
      switch (i.layerType) {
        case "text":
          s.push(new ns(i, e, null, t).unpackage());
          break;
        case "image":
          s.push(new as(i, e, t).unpackage());
          break;
        case "shape":
          s.push(new is(i, e, t).unpackage());
          break;
        case "effect":
          s.push(new rs(i, e, t).unpackage());
          break
      }
    }), s
  }

  function Qt(a, e) {
    const t = document.createElement("a");
    t.href = "https://unicorn.studio?utm_source=public-url", t.style = "position: absolute; display: flex; bottom: 30px; left: 0; width: 190px; margin: 0 auto; right: 0rem; padding: 10px; border-radius: 6px; background-color: rgba(255, 255, 255, 1); box-shadow: 0 3px 9px 0 rgba(0, 0, 0, .2); z-index: 99999999; box-sizing: border-box;", t.target = "_blank";
    const s = document.createElement("img");
    s.src = ve("aHR0cHM6Ly9hc3NldHMudW5pY29ybi5zdHVkaW8vbWVkaWEvbWFkZV9pbl91c19zbWFsbF93ZWIuc3Zn"), s.alt = ve("TWFkZSB3aXRoIHVuaWNvcm4uc3R1ZGlv"), s.style = "width: 170px; height: auto;", t.appendChild(s), e.appendChild(t)
  }

  function dt(a, e) {
    if (!e) return;
    let t = a.widthMode === "fixed" ? a.width : a.width * e.offsetWidth,
      s = a.height,
      i = a.fontSizeMode === "fixed" ? a.fontSize : a.fontSize * e.offsetWidth,
      r = a.fontSizeMode === "fixed" ? a.lineHeight : a.lineHeight * i,
      n = a.fontSizeMode === "fixed" ? a.letterSpacing : a.letterSpacing * i,
      o = a.topMode === "fixed" ? a.top : a.top * e.offsetHeight,
      h = a.leftMode === "fixed" ? a.left : a.left * e.offsetWidth,
      l = ge(a.anchorPoint);
    h -= l.x * t, o -= l.y * s, o += e.offsetTop, h += e.offsetLeft;
    const d = document.querySelector(`[data-us-text="${a.local.id}"]`),
      u = d || document.createElement("div");
    u.setAttribute("data-us-text", a.local.id), u.style.cssText = `width:${t}px;top:${o}px;left:${h}px;font-size:${i}px;line-height:${r}px;letter-spacing:${n}px;font-family:${a.fontFamily};font-weight:${a.fontWeight};text-align:${a.textAlign};position:absolute;word-break:break-word;transform:rotateZ(${Math.round(a.rotation*360)}deg);color:transparent;z-index:2;`, u.innerText = a.textContent, d || e.appendChild(u)
  }

  function ut(a) {
    const e = a.split(",").map(r => r.trim()),
      t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      s = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (t || s) {
      const r = e.find(n => n.endsWith(".mov") || n.endsWith(".mp4"));
      if (r) return r
    }
    return e.find(r => r.endsWith(".webm")) || e[0]
  }

  function ct() {
    f.scenes.forEach((a, e) => {
      document.body.contains(a.element) || (a.curtain && a.curtain.dispose(), f.scenes.splice(e, 1))
    })
  }

  function Kt(a) {
    return a && a.renderer && a.renderer.nextRender && typeof a.renderer.nextRender.execute == "function"
  }

  function $e() {
    cancelAnimationFrame(ye);
    let a = f.scenes.filter(t => t.getDynamicLayers().length > 0);
    const e = t => {
      let s = !1;
      a.forEach(i => {
        i.isInView && i.initialized ? (i.rendering = !0, t - (i.lastTime || 0) >= i.frameDuration && (i.updateMouseTrail(), i.renderFrame(), i.lastTime = t), s = f.scenes.filter(r => r.getDynamicLayers().length > 0).length > 0) : i.rendering = !1
      }), (!xe || t - xe > 64) && (Y = window.scrollY || window.pageYOffset, _e = Y - Ye, Ye = Y, xe = t, (_e > 1e3 || _e < 0 && !Ye && !Y) && Qe()), s ? (hs(), ye = requestAnimationFrame(e)) : cancelAnimationFrame(ye)
    };
    a.length && (ye = requestAnimationFrame(e))
  }

  function Ae(a, e, t) {
    return (a == null ? void 0 : a.type) === "Vec3" && (e == null ? void 0 : e.type) === "Vec3" ? new v(a._x + (e._x - a._x) * t, a._y + (e._y - a._y) * t, a._z + (e._z - a._z) * t) : (a == null ? void 0 : a.type) === "Vec2" && (e == null ? void 0 : e.type) === "Vec2" ? new O(a._x + (e._x - a._x) * t, a._y + (e._y - a._y) * t) : a + (e - a) * t
  }

  function Fe(a, e) {
    return a.type === "Vec2" ? a = new O(a._x, a._y) : a.type === "Vec3" && (a = new v(a._x, a._y, a._z)), a
  }

  function Ie(a, e, t) {
    a != null && a.type && ((a == null ? void 0 : a.type) === "Vec2" || (a == null ? void 0 : a.type) === "Vec3") ? (e.value.x = a.x, t === "pos" ? e.value.y = 1 - a.y : e.value.y = a.y, a.type === "Vec3" && (e.value.z = a.z)) : e.value = a
  }

  function N(a, e, t) {
    a.createTexture({
      sampler: e,
      premultiplyAlpha: !0,
      fromTexture: t
    })
  }
  class Jt {
    constructor({
      prop: e,
      value: t,
      endValue: s,
      transition: i,
      breakpoints: r,
      uniformData: n
    }) {
      A(this, "id", be()), this.prop = e, this.transition = i, this.complete = !1, this.progress = 0, this.uniformData = n, this.value = Fe(t), this.endValue = s !== void 0 ? Fe(s || 0) : null, this.lastTick = void 0, this.initialized = !1, this.startTime = null, this.breakpoints = r || []
    }
    updateEffect(e, t) {
      if (e = this.endValue ?? e, e === void 0) return !1;
      const s = performance.now(),
        i = lt(this.transition.ease),
        r = (this.startTime || t) + this.transition.delay,
        n = Math.max(0, Math.min(1, (s - r) / this.transition.duration));
      return this.progress = i(n), this.progress === 0 ? !1 : (n >= 1 && (this.complete = !0, this.progress = 0), this.lastTick = s, this.complete ? !1 : Ae(this.value, e, this.progress))
    }
    resetState() {
      this.progress = 0, this.complete = !1, this.lastTick = void 0, this.initialized = !1
    }
  }
  class es {
    constructor({
      prop: e,
      value: t,
      range: s,
      offset: i,
      momentum: r,
      uniformData: n,
      mode: o = "scrollIntoView",
      delta: h = .01,
      absScrollValue: l = !0,
      breakpoints: d = []
    }) {
      A(this, "id", be()), this.prop = e, this.progress = 0, this.momentum = r, this.range = s, this.offset = i, this.mode = o, this.delta = h, this.absScrollValue = l, this.uniformData = n, this.value = Fe(t), this.lastTick = void 0, this.breakpoints = d || []
    }
    updateEffect(e, {
      top: t,
      height: s,
      isFixed: i
    }) {
      if (e === void 0) return !1;
      if (i && (t -= Y), this.mode === "scrollIntoView") {
        const r = t + Y - ne * this.offset,
          n = r + (ne + s) * this.range;
        let o = (Y - r) / (n - r),
          h = Math.max(0, Math.min(1, o));
        return this.lastTick !== void 0 && (h = ce(h, this.lastTick, this.momentum * 2)), this.lastTick !== void 0 && Math.abs(this.lastTick - h) < 1e-4 ? !1 : (this.lastTick = h, Ae(e, this.value, h))
      } else if (this.mode === "whileScrolling") {
        let r = _e * this.delta;
        return this.absScrollValue && (r = Math.abs(r)), this.lastTick !== void 0 && (r = ce(r, this.lastTick, this.momentum * 2), Math.abs(r) < .001) ? !1 : (this.lastScrollPos = Y, this.lastTick = r, Ae(e, this.value, r))
      }
      return !1
    }
    resetState() {
      this.lastTick = void 0
    }
  }
  class ts {
    constructor({
      prop: e,
      value: t,
      transition: s,
      breakpoints: i,
      uniformData: r,
      triggerOnElement: n
    }) {
      A(this, "id", be()), this.prop = e, this.transition = s, this.progress = 0, this.rawProgress = 0, this.lastProgress = null, this.value = Fe(t), this.uniformData = r, this.triggerOnElement = n !== void 0 ? n : 1, this.breakpoints = i || []
    }
    updateEffect(e, t, s) {
      var i;
      if (e === void 0) return !1;
      const r = (i = s == null ? void 0 : s.getParent) == null ? void 0 : i.call(s),
        n = performance.now();
      if (this.triggerOnElement && (s != null && s.isElement || r)) {
        let p = (r || s).isHovered();
        p && !this.lastEnterTime ? t = n : p ? t = this.lastEnterTime : t = null
      }
      const o = t === null,
        h = o ? this.lastTick || n : t + this.transition.delay,
        l = (n - h) / this.transition.duration,
        d = Math.max(0, Math.min(1, l));
      o ? this.rawProgress = Math.max(0, this.rawProgress - d) : (this.lastEnterTime !== t && (this.lastProgress = this.rawProgress || 0), this.rawProgress = Math.min(1, this.lastProgress + d));
      const u = lt(this.transition.ease)(this.rawProgress),
        c = Math.abs(this.progress - u) > 1e-7;
      return this.progress = u, !t && !c ? !1 : (!t && this.transition.forwardsOnly && (this.progress = 0, this.rawProgress = 0), this.lastTick = n, this.lastEnterTime = t, c ? Ae(e, this.value, this.progress) : !1)
    }
    resetState() {
      this.progress = 0
    }
  }

  function ss(a) {
    return a.forEach(e => {
      var t, s;
      for (let i in e.props)((t = e.props[i]) == null ? void 0 : t.type) === "Vec2" ? e.props[i] = new O(e.props[i]._x, e.props[i]._y) : ((s = e.props[i]) == null ? void 0 : s.type) === "Vec3" ? e.props[i] = new v(e.props[i]._x, e.props[i]._y, e.props[i]._z) : typeof e.props[i] == "object" && (e.props[i] = ie(e.props[i]))
    }), a
  }
  class pt {
    constructor(e, t) {
      A(this, "local", {
        id: "",
        projectId: "",
        lastMousePos: {
          x: .5,
          y: .5
        },
        createdAt: null
      }), this.locked = e.locked || !1, this.aspectRatio = e.aspectRatio || 1, this.layerName = e.layerName || "", this.userDownsample = e.userDownsample || 1, this.breakpoints = ss(e.breakpoints || []), this.local.sceneId = t, this.local.id = be(), this.states = {
        appear: e.states && e.states.appear ? e.states.appear.map(s => new Jt(s)) : [],
        scroll: e.states && e.states.scroll ? e.states.scroll.map(s => new es(s)) : [],
        hover: e.states && e.states.hover ? e.states.hover.map(s => new ts(s)) : []
      }
    }
    state() {
      return f.scenes.find(e => e.id === this.local.sceneId) || this.initOptions
    }
    getIndex() {
      return this.state().layers.map(e => e.local.id).indexOf(this.local.id)
    }
    getPlane() {
      var e, t, s;
      return (s = (t = (e = this.state()) == null ? void 0 : e.curtain) == null ? void 0 : t.planes) == null ? void 0 : s.find(i => i.type !== "PingPongPlane" && i.userData.id === this.local.id)
    }
    getPlanes() {
      var e, t, s;
      return ((s = (t = (e = this.state()) == null ? void 0 : e.curtain) == null ? void 0 : t.planes) == null ? void 0 : s.filter(i => i.type !== "PingPongPlane" && i.userData.id === this.local.id)) || []
    }
    getMaskedItem() {
      return this.mask ? this.state().layers.filter(e => !e.parentLayer)[this.getIndex() - 1] : !1
    }
    getChildEffectItems() {
      if (this.effects && this.effects.length) {
        const e = this.state();
        if (!e || !e.layers) return [];
        const t = e.layers.filter(s => this.effects.includes(s.parentLayer));
        return this.effects.map(s => t.find(i => i.parentLayer === s)).filter(s => s !== void 0)
      } else return []
    }
    setBreakpointValues() {
      const e = ee,
        t = this.breakpoints.sort((r, n) => n.min - r.min),
        s = {};
      if (t.length === 1 && t[0].name === "Desktop") return;
      if (t.length >= 1 && !t.find(r => r.name === "Desktop")) throw new Error("Malfored breakpoint data, missing Desktop");
      for (let r = t.length - 1; r >= 0; r--) {
        const n = t[r];
        if (n.max === null || e <= n.max)
          for (let o in n.props) s.hasOwnProperty(o) || (s[o] = n.props[o])
      }
      const i = this.breakpoints.find(r => r.name === "Desktop");
      if (i)
        for (let r in i.props) s.hasOwnProperty(r) || (s[r] = i.props[r]);
      for (let r in s)
        if (this.hasOwnProperty(r)) {
          let n = s[r];
          n.type ? (this[r].x = n._x, this[r].y = n._y, n._z !== void 0 && (this[r].z = n._z)) : this[r] = n
        } this.local.bpProps = s
    }
    updateStateEffects() {
      var e, t;
      if (!this.states.appear.some(r => !r.complete) && !((e = this.states) != null && e.scroll.length) && !((t = this.states) != null && t.hover.length)) return;
      this.local.uniformUpdatesPool || (this.local.uniformUpdatesPool = {});
      for (const r in this.local.uniformUpdatesPool) delete this.local.uniformUpdatesPool[r];
      this.local.hasUpdates = !1;
      const s = this.state(),
        i = r => !r.breakpoints || r.breakpoints.length === 0 ? !0 : r.breakpoints.find(n => {
          var o;
          return n === ((o = s.currentBreakpoint) == null ? void 0 : o.name)
        });
      s.isInView && (this.local.createdAt === null && (this.local.createdAt = performance.now()), this.states.appear.forEach(r => {
        if (!i(r)) return;
        let n = r.startTime || this.local.createdAt;
        if (!r.initialized) {
          const h = [...this.states.appear.filter(l => l.prop === r.prop)].sort((l, d) => (l.transition.delay || 0) - (d.transition.delay || 0))[0];
          (h == null ? void 0 : h.id) === r.id && (this.local.uniformUpdatesPool[r.prop] = r.value, this.local.hasUpdates = !0), r.initialized = !0, n || (r.startTime = performance.now())
        }
        s != null && s.pauseTime && (n += Math.abs(s == null ? void 0 : s.pauseTime));
        const o = r.updateEffect(this[r.prop], n);
        o !== !1 && (this.local.uniformUpdatesPool[r.prop] = o, this.local.hasUpdates = !0), this.isElement && r.complete && this.removeStateEffectProperty(r.prop)
      })), this.states.hover.forEach(r => {
        if (!i(r)) return;
        const n = r.updateEffect(this[r.prop], s.mouse.enterTime, this);
        n !== !1 && (this.local.uniformUpdatesPool[r.prop] = n, this.local.hasUpdates = !0)
      }), this.states.scroll.forEach(r => {
        var n;
        if (!i(r)) return;
        const o = s.bbox;
        if (!o) return;
        const h = r.updateEffect(this[r.prop], {
          top: s.isFixed ? 0 : (n = s.bbox) == null ? void 0 : n.top,
          height: o.height / 2,
          isFixed: s.isFixed
        });
        h !== !1 && (this.local.uniformUpdatesPool[r.prop] = h, this.local.hasUpdates = !0)
      }), this.local.hasUpdates && (this.getPlanes().forEach(r => {
        var n;
        for (let o in this.local.uniformUpdatesPool) {
          const h = this.local.uniformUpdatesPool[o];
          h !== void 0 && ((n = r.uniforms[o]) == null ? void 0 : n.lastValue) !== h && (r.uniforms[o] && Ie(h, r.uniforms[o], o), this.updateStateEffectProperty(o, h))
        }
      }), this.isElement && this.local.stateEffectProps && Object.keys(this.local.stateEffectProps).length && this.render())
    }
    updateStateEffectProperty(e, t) {
      this.local.stateEffectProps || (this.local.stateEffectProps = {}), this.local.stateEffectProps[e] = t
    }
    removeStateEffectProperty(e) {
      this.local.stateEffectProps && this.local.stateEffectProps[e] && delete this.local.stateEffectProps[e]
    }
  }

  function ge(a) {
    const e = {
      topLeft: {
        x: 0,
        y: 0
      },
      topCenter: {
        x: .5,
        y: 0
      },
      topRight: {
        x: 1,
        y: 0
      },
      rightCenter: {
        x: 1,
        y: .5
      },
      bottomRight: {
        x: 1,
        y: 1
      },
      bottomCenter: {
        x: .5,
        y: 1
      },
      bottomLeft: {
        x: 0,
        y: 1
      },
      leftCenter: {
        x: 0,
        y: .5
      },
      center: {
        x: .5,
        y: .5
      }
    };
    return e[a] || e.topLeft
  }
  let Ze = class extends pt {
    constructor(a, e, t) {
      super(a, e), A(this, "isElement", !0), this.anchorPoint = a.anchorPoint || "topLeft", this.initOptions = t, this.data = a.data || {}, this.opacity = a.opacity ?? 1, this.displace = a.displace || 0, this.effects = a.effects || [], this.trackMouse = a.trackMouse || 0, this.axisTilt = a.axisTilt || 0, this.bgDisplace = a.bgDisplace || 0, this.dispersion = a.dispersion || 0, this.rotation = a.rotation || 0, this.mouseMomentum = a.mouseMomentum || 0, this.maskAlpha = a.maskAlpha || 0, this.maskDepth = a.maskDepth || 0, this.maskBackground = a.maskBackground || {}, this.mask = a.mask || 0, this.blendMode = a.blendMode || "NORMAL", this.compiledFragmentShaders = a.compiledFragmentShaders || [], this.compiledVertexShaders = a.compiledVertexShaders || [], this.width = a.width || 0, this.height = a.height || 0, this.widthMode = a.widthMode || "fixed", this.heightMode = a.heightMode || "fixed", this.left = a.left || 0, this.top = a.top || 0, this.leftMode = a.leftMode || "relative", this.topMode = a.topMode || "relative"
    }
    unpackage() {
      return this.effects = ie(this.effects), this.maskBackground = new v(this.maskBackground._x, this.maskBackground._y, this.maskBackground._z), this.unpackageType(), this
    }
    getPixelRatio() {
      const a = this.state();
      return a.dpi * a.scale * this.userDownsample
    }
    createLocalCanvas() {
      const a = this.state(),
        e = document.createElement("canvas"),
        t = this.getPixelRatio();
      e.width = a.canvasWidth * t, e.height = a.canvasHeight * t;
      const s = e.getContext("2d");
      s.scale(t, t), this.local.canvas = e, this.local.ctx = s
    }
    resize() {
      const a = this.state();
      if (this.local.canvas) {
        const e = this.getPixelRatio();
        this.local.canvas.width = a.canvasWidth * e, this.local.canvas.height = a.canvasHeight * e, this.local.ctx.scale(e, e)
      }
      this.render(), this.layerType === "text" && dt(this, this.state().element)
    }
    dispose() {
      this.local.canvas && (this.local.canvas.width = 1, this.local.canvas.height = 1, this.local.canvas = null), this.local.ctx && (this.local.ctx = null)
    }
    box() {
      const a = ge(this.anchorPoint),
        {
          width: e,
          height: t
        } = this.getAbsoluteDimensions(),
        {
          left: s,
          top: i
        } = this.getAbsolutePosition(),
        r = e * (.5 - a.x),
        n = t * (.5 - a.y);
      return {
        anchor: {
          x: s + r,
          y: i + n
        },
        center: {
          x: s + e / 2,
          y: i + t / 2
        },
        left: s,
        top: i,
        width: e,
        height: t
      }
    }
    getAbsolutePosition() {
      var a, e, t, s;
      const i = this.state(),
        r = i.canvasWidth,
        n = i.canvasHeight;
      let o = ((e = (a = this.local) == null ? void 0 : a.stateEffectProps) == null ? void 0 : e.left) ?? this.left,
        h = ((s = (t = this.local) == null ? void 0 : t.stateEffectProps) == null ? void 0 : s.top) ?? this.top;
      const l = this.leftMode === "fixed" ? Math.round(o) : Math.round(o * r),
        d = this.topMode === "fixed" ? Math.round(h) : Math.round(h * n);
      return {
        left: l,
        top: d
      }
    }
    getAbsoluteDimensions() {
      var a, e, t, s;
      const i = this.state();
      let r, n;
      const o = i.canvasWidth,
        h = i.canvasHeight;
      let l = ((e = (a = this.local) == null ? void 0 : a.stateEffectProps) == null ? void 0 : e.width) ?? this.width,
        d = ((s = (t = this.local) == null ? void 0 : t.stateEffectProps) == null ? void 0 : s.height) ?? this.height;
      return this.widthMode !== "auto" && (r = this.widthMode === "fixed" ? l : l * o, this.heightMode === "auto" && (n = r / (this.aspectRatio || 1), this.height = this.widthMode === "fixed" ? n : n / h)), this.heightMode !== "auto" && (n = this.heightMode === "fixed" ? d : d * h, this.widthMode === "auto" && (r = n * (this.aspectRatio || 1), this.width = this.widthMode === "fixed" ? r : r / o)), this.layerType === "text" && (n = this.height), {
        width: r,
        height: n
      }
    }
    isHovered() {
      let {
        left: a,
        top: e,
        width: t,
        height: s
      } = this.box();
      const i = ge(this.anchorPoint);
      t < 0 && (t = Math.abs(t)), s < 0 && (e = e + s, s = Math.abs(s)), a = a - i.x * t, e = e - i.y * s;
      let r = this.state().mouse.movePos;
      return r.x * 2 >= a && r.x * 2 <= a + t && r.y * 2 >= e && r.y * 2 <= e + s
    }
  };
  class is extends Ze {
    constructor(e, t, s) {
      super(e, t), A(this, "layerType", "shape"), A(this, "isElement", !0), this.initOptions = s;
      let i = this.default(e || {});
      for (let r in i) this[r] = i[r];
      this.breakpoints.length && this.setBreakpointValues(), Object.keys(e).length && this.createLocalCanvas()
    }
    default (e) {
      return {
        borderRadius: e.borderRadius || 0,
        fill: e.fill || ["#777777"],
        fitToCanvas: e.fitToCanvas || !1,
        gradientAngle: e.gradientAngle || e.gradAngle || 0,
        gradientType: e.gradientType || e.gradType || "linear",
        numSides: e.numSides || 3,
        type: e.type || "rectangle",
        stroke: e.stroke || ["#000000"],
        strokeWidth: e.strokeWidth || 0
      }
    }
    unpackageType() {
      return this.fill = ie(this.fill), this.stroke = ie(this.stroke), this.render(), this
    }
    render() {
      var e, t;
      let s = this.local.ctx;
      const i = this.state();
      let {
        left: r,
        top: n,
        width: o,
        height: h
      } = this.box();
      const l = ge(this.anchorPoint);
      let d = ((e = this.local.stateEffectProps) == null ? void 0 : e.borderRadius) ?? this.borderRadius,
        u = ((t = this.local.stateEffectProps) == null ? void 0 : t.strokeWidth) ?? this.strokeWidth,
        c = r - l.x * o,
        p = n - l.y * h;
      if (s.clearRect(0, 0, i.canvasWidth, i.canvasHeight), s.beginPath(), this.fitToCanvas) s.rect(0, 0, i.canvasWidth, i.canvasHeight), s.fillStyle = qe(s, {
        width: i.canvasWidth,
        height: i.canvasHeight
      }, this.fill, this.gradientAngle, this.gradientType);
      else {
        if (s.save(), s.translate(c + o / 2, p + h / 2), s.rotate(this.rotation * 2 * Math.PI), s.translate(-o / 2, -h / 2), this.type === "rectangle") {
          let m = d * Math.min(Math.abs(o), Math.abs(h)) / 2;
          this.drawRoundedRect(s, 0, 0, o, h, m)
        } else this.type === "circle" ? s.ellipse(o / 2, h / 2, Math.abs(o) / 2, Math.abs(h) / 2, 0, 0, 2 * Math.PI) : this.type === "polygon" && this.drawPolygon(s, Math.abs(o), Math.abs(h), this.numSides);
        s.fillStyle = qe(s, this.box(), this.fill, this.gradientAngle, this.gradientType)
      }
      s.fill(), u && (s.strokeStyle = this.stroke[0], s.lineWidth = u, s.stroke()), s.restore()
    }
    drawRoundedRect(e, t, s, i, r, n) {
      e.beginPath(), e.moveTo(t + n, s), e.arcTo(t + i, s, t + i, s + r, n), e.arcTo(t + i, s + r, t, s + r, n), e.arcTo(t, s + r, t, s, n), e.arcTo(t, s, t + i, s, n), e.closePath()
    }
    drawPolygon(e, t, s, i) {
      e.beginPath();
      for (let r = 0; r < i; r++) {
        const n = r * 2 * Math.PI / i - Math.PI / 2,
          o = t * Math.cos(n),
          h = s * Math.sin(n);
        r === 0 ? e.moveTo(o, h) : e.lineTo(o, h)
      }
      e.closePath()
    }
  }
  class rs extends pt {
    constructor(e, t, s) {
      super(e, t), A(this, "layerType", "effect"), this.initOptions = s, this.type = e.type || "sine", this.usesPingPong = e.usesPingPong || !1, this.speed = e.speed || .5, this.data = e.data || {}, this.parentLayer = e.parentLayer || !1, this.animating = e.animating || !1, this.isMask = e.isMask || 0, this.texture = e.texture || null, this.mouseMomentum = e.mouseMomentum || 0, this.compiledFragmentShaders = e.compiledFragmentShaders || [], this.compiledVertexShaders = e.compiledVertexShaders || [];
      for (let i in e) this[i] || (this[i] = e[i]);
      this.breakpoints.length && this.setBreakpointValues()
    }
    unpackage() {
      for (let e in this) this[e] && this[e].type && (this[e].type === "Vec2" ? this[e] = new O(this[e]._x, this[e]._y) : this[e].type === "Vec3" && (this[e] = new v(this[e]._x, this[e]._y, this[e]._z)));
      return this
    }
    getParent() {
      return this.state().layers.filter(e => e.effects && e.effects.length).find(e => e.effects.includes(this.parentLayer))
    }
  }
  class as extends Ze {
    constructor(e, t, s) {
      super(e, t), A(this, "layerType", "image"), A(this, "isElement", !0), this.initOptions = s;
      let i = this.default(e || {});
      for (let r in i) this[r] = i[r];
      this.breakpoints.length && this.setBreakpointValues(), Object.keys(e).length && (this.createLocalCanvas(), this.loadImage())
    }
    default (e) {
      return {
        fitToCanvas: e.fitToCanvas || !1,
        src: e.src || ""
      }
    }
    unpackage() {
      return this.effects = ie(this.effects), this
    }
    loadImage() {
      const e = new Image;
      e.crossOrigin = "Anonymous", e.addEventListener("load", () => {
        const t = this.state();
        this.local.img = e, this.render = this.renderImage, this.render(), t.renderFrame && t.renderFrame(), this.local.loaded = !0
      }, !1), e.src = this.src
    }
    renderImage() {
      var e, t;
      if (!((e = this.local) != null && e.ctx)) return;
      let s = this.local.ctx;
      const i = this.state();
      s.clearRect(0, 0, i.canvasWidth, i.canvasHeight);
      let {
        left: r,
        top: n,
        width: o,
        height: h
      } = this.box(), l = i.canvasWidth, d = i.canvasHeight;
      if (this.fitToCanvas) {
        let u = this.local.img.width / this.local.img.height;
        l / d < u ? (h = d, o = d * u) : (o = l, h = l / u);
        const c = (l - o) / 2,
          p = (d - h) / 2;
        s.drawImage(this.local.img, c, p, o, h)
      } else {
        const u = ge(this.anchorPoint),
          c = (((t = this.local.stateEffectProps) == null ? void 0 : t.rotation) ?? this.rotation) * 2 * Math.PI;
        let p = u.x * o,
          m = u.y * h;
        s.save();
        let P = o / 2,
          M = h / 2,
          C = r - p + P,
          S = n - m + M;
        s.translate(C, S), s.rotate(c), s.drawImage(this.local.img, -P, -M, o, h), s.restore()
      }
    }
    render() {}
  }
  class ns extends Ze {
    constructor(e, t, s, i) {
      super(e, t), A(this, "layerType", "text"), this.initOptions = i;
      let r = this.default(e || {});
      for (let n in r) this[n] = r[n];
      this.breakpoints.length && this.setBreakpointValues(), this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), Object.keys(e).length && this.createLocalCanvas(), this.loadFont()
    }
    default (e) {
      return {
        fill: e.fill || ["#ffffff"],
        fontSize: e.fontSize ?? 24,
        fontSizeMode: e.fontSizeMode || "fixed",
        fontCSS: e.fontCSS || null,
        lineHeight: e.lineHeight ?? 25,
        letterSpacing: e.letterSpacing || 0,
        fontFamily: e.fontFamily || "arial",
        fontStyle: e.fontStyle || "normal",
        fontWeight: e.fontWeight || "normal",
        textAlign: e.textAlign || "left",
        textContent: e.textContent || "",
        gradientAngle: e.gradientAngle || e.gradAngle || 0,
        gradientType: e.gradientType || e.gradType || "linear"
      }
    }
    unpackage() {
      return this.fill = ie(this.fill), this.effects = ie(this.effects), this
    }
    loadFont() {
      const e = this.fontStyle.includes("italic") ? "italic" : "normal",
        t = n => n === "normal" || n === "400" || n === 400 ? "normal" : n.toString(),
        s = isNaN(parseInt(this.fontWeight)) ? "normal" : t(this.fontWeight);
      if (Array.from(document.fonts).some(n => n.family === this.fontFamily && n.style === e && t(n.weight) === s && n.status === "loaded")) {
        this.handleFontLoaded();
        return
      }
      let i = this.fontCSS.src.split(" ").join("%20");
      const r = new FontFace(this.fontFamily, `url(${i})`, {
        style: e,
        weight: s
      });
      document.fonts.add(r), r.load().then(() => {
        this.handleFontLoaded()
      }).catch(n => {
        console.error("Font loading error:", n)
      })
    }
    handleFontLoaded() {
      this.local.loaded = !0, this.render(), this.render();
      const e = this.state();
      e.renderFrame && e.renderFrame(), dt(this, this.state().element)
    }
    getAbsoluteFontValues(e) {
      var t, s, i, r, n, o;
      const h = ((s = (t = this.local) == null ? void 0 : t.stateEffectProps) == null ? void 0 : s.fontSize) || this.fontSize,
        l = ((r = (i = this.local) == null ? void 0 : i.stateEffectProps) == null ? void 0 : r.lineHeight) || this.lineHeight,
        d = ((o = (n = this.local) == null ? void 0 : n.stateEffectProps) == null ? void 0 : o.letterSpacing) || this.letterSpacing,
        u = this.fontSizeMode === "fixed" ? h : h * e.canvasWidth;
      return {
        fontSize: u,
        lineHeight: this.fontSizeMode === "fixed" ? l : l * u,
        letterSpacing: this.fontSizeMode === "fixed" ? d : d * u
      }
    }
    render() {
      var e;
      if (!((e = this.local) != null && e.ctx)) return;
      let t = this.local.ctx,
        {
          left: s,
          top: i,
          width: r
        } = this.box();
      const n = ge(this.anchorPoint);
      let o = this.state(),
        h = this.height,
        l = s - n.x * r,
        d = i - n.y * h,
        u = 0,
        {
          fontSize: c,
          lineHeight: p,
          letterSpacing: m
        } = this.getAbsoluteFontValues(o),
        P = this.fontStyle.includes("italic") ? "italic" : "normal",
        M = /^\d+$/.test(this.fontStyle) ? this.fontStyle : "400";
      t.clearRect(0, 0, o.canvasWidth, o.canvasHeight), t.font = `${P} ${M} ${c}px/${p}px ${this.fontFamily}, -apple-system, BlinkMacSystemFont, Helvetica, Arial`, this.isSafari || (t.textAlign = this.textAlign, t.letterSpacing = m + "px");
      const C = t.measureText("m").width;
      r = Math.max(r, C), t.save();
      let S = l + r / 2,
        L = d + h / 2;
      t.translate(S, L), t.rotate(this.rotation * 360 * Math.PI / 180), t.translate(-S, -L), this.textAlign === "center" && (l += r / 2), this.textAlign === "right" && (l += r), t.fillStyle = qe(t, this.box(), this.fill, this.gradientAngle, this.gradientType);
      const z = (_, x, T, E, F, V, I) => {
          let b = x.split("").reduce((D, oe, Oe) => D + _.measureText(oe).width + (Oe < x.length - 1 ? F : 0), 0),
            B;
          if (V === "center" ? B = T + (I - b) / 2 - I / 2 : B = T, V === "right")
            for (let D = x.length - 1; D >= 0; D--) {
              const oe = x[D];
              B -= _.measureText(oe).width, _.fillText(oe, B, E), D > 0 && (B -= F)
            } else
              for (let D = 0; D < x.length; D++) _.fillText(x[D], B, E), B += _.measureText(x[D]).width + F
        },
        U = (_, x) => {
          let T = d + p * x + p / 2 + c / 3;
          this.isSafari ? z(t, _, l, T, m, this.textAlign, r) : t.fillText(_, l, T)
        },
        w = this.textContent ? this.textContent.split(`
`) : [""];
      let k = w.length;
      const Q = (_, x, T) => x.split("").reduce((E, F, V) => (E += _.measureText(F).width, V < x.length - 1 && (E += T), E), 0);
      for (let _ = 0; _ < k; _++) {
        let x = "",
          T = w[_].split(/(\s|\n)/);
        for (let E = 0; E < T.length; E++) {
          const F = T[E],
            V = x + F;
          if ((this.isSafari && m ? Q(t, V, m) : t.measureText(V).width) > r || F === `
`) {
            if (x !== "") w[_] = x.trim(), E !== T.length - 1 ? (w.splice(_ + 1, 0, T.slice(E).join("")), k++) : F !== `
` && w.push(F);
            else {
              let I = F,
                b = _;
              for (; I.length > 0;) {
                let B = "";
                for (let D = 0; D < I.length && (t.measureText(B + I[D]).width <= r || D == 0); D++) B += I[D];
                I = I.slice(B.length), w[b] = B.trim(), I.length > 0 && (w.splice(b + 1, 0, I), b++, k++)
              }
              T.slice(E + 1).length > 0 && (w[b] += T.slice(E + 1).join(""))
            }
            break
          } else x = V;
          E === T.length - 1 && (w[_] = x.trim())
        }
      }
      w.forEach((_, x) => {
        U(_, u), x < w.length - 1 && u++
      }), t.translate(-(l + r / 2), -(d + h / 2)), t.restore(), this.height = p * u + p
    }
  }

  function gt() {
    document[Me] ? (cancelAnimationFrame(ye), f.scenes.forEach(a => {
      a.pauseTime = performance.now()
    })) : ($e(), f.scenes.forEach(a => {
      a.pauseTime = a.pauseTime - performance.now(), a.curtain.planes.forEach(e => {
        e.videos.forEach(t => {
          t.play()
        })
      })
    }))
  }

  function os() {
    ne = window.innerHeight || document.documentElement.clientHeight, ee = window.innerWidth || document.documentElement.clientWidth, f.scenes.filter(a => a.initialized).forEach(a => {
      a.refresh()
    }), Qe()
  }

  function mt(a, e, t = 50) {
    const s = e || a.getBoundingClientRect(),
      i = s.top >= -t && s.top <= ne + t || s.bottom >= -t && s.bottom <= ne + t || s.top <= 0 && s.bottom >= ne,
      r = s.left >= -t && s.left <= ee + t || s.right >= -t && s.right <= ee + t || s.left <= 0 && s.right >= ee;
    return i && r
  }

  function Qe() {
    f.scenes.filter(a => a.getDynamicLayers().length).forEach(a => {
      let e = a.element.getBoundingClientRect();
      a.scrollY = Y, a.lastBbox && (Math.abs(e.top - a.lastBbox.top) === 0 && _e > 0 ? (a.fixedCounter = (a.fixedCounter || 0) + 1, a.fixedCounter > 3 && (a.isFixed = !0)) : a.fixedCounter = 0), a.lastBbox = a.bbox, a.bbox = e
    })
  }

  function ft(a) {
    const e = f.scenes.filter(i => i.getDynamicLayers().length),
      t = f.scenes.filter(i => i.rendering);
    e.length && !t.length && $e();
    const s = performance.now();
    (!xe || s - xe > 64) && Qe(), e.forEach(i => {
      mt(i.element, i.bbox, 100) ? i.isInView || (i.isInView = !0, i.pauseTime = i.pauseTime - performance.now(), i.curtain.resize(), i.lazyLoad && !i.initialized && !i.initializing && i.initializePlanes()) : i.isInView && (i.isInView = !1, i.pauseTime = performance.now())
    })
  }

  function hs() {
    f.scenes.forEach(a => {
      var e, t, s, i;
      if (a.isInView && (t = (e = a.curtain) == null ? void 0 : e.planes) != null && t.find(r => r.uniforms.mousePos) && !(Ce() && (i = (s = a.interactivity) == null ? void 0 : s.mouse) != null && i.disableMobile)) {
        a.mouse.pos.y = a.mouse.movePos.y, a.mouse.pos.x = a.mouse.movePos.x, a.mouse.lastPos.x = a.mouse.pos.x, a.mouse.lastPos.y = a.mouse.pos.y;
        let r = a.isFixed ? a.bbox.top : a.bbox.top + a.scrollY,
          n = a.bbox.left;
        a.mouse.page.x > n && a.mouse.page.y > r && a.mouse.page.x < a.lastBbox.width + n && a.mouse.page.y < a.lastBbox.height + r ? a.mouse.enterTime || (a.mouse.enterTime = performance.now()) : a.mouse.enterTime = null
      }
    })
  }

  function _t(a) {
    f.scenes.filter(e => e.isInView).forEach(e => {
      e.mouse.page.x = 99999999999, e.mouse.page.y = 99999999999, e.mouse.enterTime = null
    })
  }

  function De(a) {
    f.scenes.filter(e => e.isInView).forEach(e => {
      let t = e.bbox,
        s, i;
      e.mouse.movedInView = !0, a.targetTouches ? (s = a.targetTouches[0].pageX, i = a.targetTouches[0].pageY) : (s = a.pageX, i = a.pageY), e.isFixed && (e.scrollY = 0, a.targetTouches ? i = a.targetTouches[0].clientY : i = a.clientY);
      const r = s - t.left,
        n = i - (t.top + (e.isFixed ? 0 : Y));
      e.mouse.page.x = s, e.mouse.page.y = i, e.mouse.movePos.x = r * .5, e.mouse.movePos.y = n * .5
    }), je || (je = !0)
  }
  f.scenes = [];
  class ls {
    constructor(e) {
      A(this, "local", {
        preloadedTextures: {}
      }), A(this, "scrollY", 0), this.id = e.id, this.breakpoints = [{
        name: "Desktop",
        max: 1 / 0,
        min: 992
      }, {
        name: "Tablet",
        max: 991,
        min: 576
      }, {
        name: "Mobile",
        max: 575,
        min: 0
      }], this.projectId = e.projectId, this.canvasWidth = e.width || e.element.offsetWidth || ee, this.canvasHeight = e.height || e.element.offsetHeight || ne, this.curtain = void 0, this.curtainRafId = void 0, this.dpi = +e.dpi || Math.min(1.5, window.devicePixelRatio), this.element = e.element, this.fps = e.fps || 60, this.name = e.name, this.frameDuration = Math.floor(1e3 / (e.fps || 60)), this.layers = e.layers, this.lazyLoad = e.lazyLoad, this.initialized = !1, this.lasTick = null, this.lastTime = 0, this.rendering = !1, this.bbox = {}, this.isFixed = window.getComputedStyle(this.element).position === "fixed", this.interactivity = {
        mouse: {
          disableMobile: !1
        }
      }, this.mouse = {
        downPos: {
          x: .5,
          y: .5
        },
        movePos: {
          x: .5,
          y: .5
        },
        lastPos: {
          x: .5,
          y: .5
        },
        delta: {
          x: 0,
          y: 0
        },
        page: {
          x: 99999999999,
          y: 99999999999
        },
        dragging: !1,
        movedInView: !1,
        trail: [],
        recordTrail: !1,
        enterTime: null,
        pos: {
          x: 0,
          y: 0
        }
      }, this.renderingScale = e.renderingScale || 1, this.scale = e.scale || 1, this.split = !1, this.versionId = "", e.width && e.height && (this.element.style.width = e.width + "px", this.element.style.height = e.height + "px"), this.bbox = this.element.getBoundingClientRect(), this.lastBbox = this.bbox, this.currentBreakpoint = this.breakpoints.find(t => ee >= t.min && ee <= t.max), this.createCurtains(), this.setCanvasScale(), this.curtain && (this.textureLoader = new at(this.curtain))
    }
    preloadTextures() {
      this.layers.forEach(e => {
        var t, s, i, r, n, o, h, l, d;
        if (e.isElement) e.local.canvas ? this.textureLoader.loadCanvas(e.local.canvas, {
          sampler: "uTexture",
          premultiplyAlpha: !0
        }, u => {
          u.userData.hasStateEffects = e.states.appear.length > 0 || e.states.scroll.length > 0 || e.states.hover.length > 0, e.preloadedCanvasTexture = u
        }, u => {
          console.error("Error loading canvas texture:", u)
        }) : console.error("Error loading canvas");
        else {
          if ((t = e == null ? void 0 : e.texture) != null && t.src || (i = (s = e == null ? void 0 : e.data) == null ? void 0 : s.texture) != null && i.src) {
            const u = ((r = e == null ? void 0 : e.texture) == null ? void 0 : r.src) || ((o = (n = e == null ? void 0 : e.data) == null ? void 0 : n.texture) == null ? void 0 : o.src),
              c = ((h = e == null ? void 0 : e.texture) == null ? void 0 : h.sampler) || ((d = (l = e == null ? void 0 : e.data) == null ? void 0 : l.texture) == null ? void 0 : d.sampler) || "uTexture";
            this.local.preloadedTextures[u] = null, this.local.preloadedTextures[u] || this.textureLoader.loadImage(u, {
              sampler: c,
              premultipliedAlpha: !1
            }, p => {
              this.local.preloadedTextures[u] = p
            })
          }
          if (e.type === "video" && e.src) {
            const u = e.src.includes(", ") ? ut(e.src) : e.src,
              c = u;
            this.local.preloadedTextures[c] || this.textureLoader.loadVideo(u, {
              sampler: "uVideoTexture",
              premultipliedAlpha: !0
            }, p => {
              this.local.preloadedTextures[c] = p;
              const m = p.source && p.source.element;
              m && typeof m.play == "function" && m.play().catch(() => {})
            })
          }
        }
      })
    }
    setCanvasScale() {
      this.canvasWidth = this.element.offsetWidth, this.canvasHeight = this.element.offsetHeight
    }
    destroy() {
      var e, t;
      (e = this.curtain) != null && e.gl && (this.curtain.dispose(), this.curtain = null), this.element && (this.element.removeAttribute("data-us-initialized"), this.element.removeAttribute("data-scene-id"), (t = this.element.querySelector("canvas")) == null || t.remove(), this.element.querySelectorAll("[data-us-text]").forEach(s => {
        s.remove()
      })), this.layers.filter(s => s.dispose).forEach(s => s.dispose()), this.layers = [], f.scenes = f.scenes.filter(s => s.id !== this.id), f.scenes.length || Ke()
    }
    resize() {
      this.setCanvasScale(), this.layers.filter(e => e.isElement).forEach(e => {
        e.resize()
      }), this.lastBbox = this.bbox, this.bbox = this.element.getBoundingClientRect(), this.currentBreakpoint = this.breakpoints.find(e => ee >= e.min && ee <= e.max), this.curtain && (this.curtain.resize(), this.curtain.planes.forEach(e => {
        e.uniforms.resolution && (e.uniforms.resolution.value.x = this.curtain.canvas.width, e.uniforms.resolution.value.y = this.curtain.canvas.height)
      }))
    }
    refresh() {
      this.initialized = !1, this.layers.forEach(e => {
        var t, s;
        (t = e.states) == null || t.scroll.forEach(i => i.resetState()), (s = e.states) == null || s.appear.forEach(i => {
          e[i.prop] = i.endValue ?? e[i.prop]
        }), e.breakpoints.length && (e.setBreakpointValues(), e.local.bpProps && Object.keys(e.local.bpProps).forEach(i => {
          e.getPlanes().forEach(r => {
            r.uniforms[i] && Ie(e.local.bpProps[i], r.uniforms[i], i)
          })
        })), e.preloadedCanvasTexture && (e.preloadedCanvasTexture.shouldUpdate = !0)
      }), this.mouse.trail = [], requestAnimationFrame(() => {
        this.curtain.planes.forEach(e => {
          e._canDraw = !0
        }), this.scrollY = Y, this.resize(), this.handlePlaneCreation()
      })
    }
    updateMouseTrail() {
      je && (this.mouse.trail.unshift([this.mouse.pos.x / (this.lastBbox.width * .5), 1 - this.mouse.pos.y / (this.lastBbox.height * .5)]), this.mouse.trail.length > 4 && this.mouse.trail.pop())
    }
    getDynamicLayers() {
      return this.layers.filter(e => pe(e))
    }
    createCurtains() {
      this.curtain = new We({
        container: this.element,
        premultipliedAlpha: !0,
        antialias: !1,
        autoRender: !1,
        autoResize: !1,
        watchScroll: !1,
        renderingScale: Math.min(Math.max(.25, this.renderingScale), 1),
        production: !1,
        pixelRatio: this.dpi
      }), this.curtain.onError(e => {
        console.warn("Unicorn.studio scene encountered an error", e), this.webglError = !0
      }), this.curtain.onContextLost(() => {
        console.warn("Unicorn.studio scene lost WebGL context"), this.curtain.restoreContext()
      }), this.scrollY = Y
    }
    renderFrame() {
      Kt(this.curtain) ? (this.layers.forEach(e => {
        e.local.currentFrameMouseValues = null
      }), this.handleStateEffects(), this.curtain.render()) : console.warn("Curtains instance is not valid")
    }
    renderNFrames(e, t) {
      let s = 0;
      const i = () => {
        this.renderFrame(), s < e ? (s++, requestAnimationFrame(i)) : t && t()
      };
      this.rendering || i()
    }
    setInteractiveParams(e, t) {
      let s = {
        mouse: {
          disableMobile: !1
        }
      };
      t && t.mouse && "disableMobile" in t.mouse && (s.mouse.disableMobile = t.mouse.disableMobile), e && e.interactivity && e.interactivity.mouse && "disableMobile" in e.interactivity.mouse && (s.mouse.disableMobile = e.interactivity.mouse.disableMobile), this.interactivity = s
    }
    getSplitOrderedItems() {
      let e = this.getOrderedItems(),
        t = 0,
        s = e[t];
      if (s) {
        let i = s.parentLayer ? s.getParent() : null,
          r = i && pe(i),
          n = i && i.effects && i.effects.length && i.getChildEffectItems().filter(o => pe(o)).length;
        for (; s && !pe(s) && !r && !n;) t++, s = e[t], s && (i = s.parentLayer ? s.getParent() : null, r = i && pe(i), n = i && i.effects && i.effects.length && i.getChildEffectItems().filter(o => pe(o)).length);
        return {
          static: this.getOrderedItems().splice(0, t),
          dynamic: this.getOrderedItems().splice(t)
        }
      } else return {
        static: [],
        dynamic: []
      }
    }
    initializePlanes(e) {
      this.initializing = !0, this.handleItemPlanes(() => {
        this.handlePlaneCreation(), e && e(this)
      })
    }
    getPassPlane(e, t) {
      return this.curtain.planes.find(s => s.userData.id === e.local.id && s.userData.passIndex === t)
    }
    getRenderTargets() {
      return this.curtain.renderTargets.filter(e => e.userData.id)
    }
    getPlanes() {
      return this.curtain.planes.filter(e => e.type !== "PingPongPlane")
    }
    getPlaneParams(e, t) {
      var s, i, r;
      let n = ["noise", "noiseField", "sine", "ripple", "bulge"].includes(e.type) ? 500 : 1;
      const o = {
        resolution: {
          name: "uResolution",
          type: "2f",
          value: new O(this.canvasWidth, this.canvasHeight)
        },
        mousePos: {
          name: "uMousePos",
          type: "2f",
          value: new O(.5)
        },
        time: {
          name: "uTime",
          type: "1f",
          value: 0
        },
        dpi: {
          name: "uDpi",
          type: "1f",
          value: this.dpi * +this.renderingScale
        }
      };
      e.isElement && (o.sampleBg = {
        name: "uSampleBg",
        type: "1i",
        value: 1
      }), ke(e) && (o.previousMousePos = {
        name: "uPreviousMousePos",
        type: "2f",
        value: new O(.5)
      });
      let h = e.compiledFragmentShaders[t] || e.compiledFragmentShaders[0],
        l = e.compiledVertexShaders[t] || e.compiledVertexShaders[0];
      if (e.states && [...e.states.appear, ...e.states.scroll, ...e.states.hover].forEach(d => {
          o[d.prop] || d.uniformData && (o[d.prop] = d.uniformData, o[d.prop].value = e[d.prop])
        }), (s = e.data) != null && s.uniforms)
        for (let d in e.data.uniforms) {
          let u = e.data.uniforms[d];
          o[d] = e.data.uniforms[d], ((i = u.value) == null ? void 0 : i.type) === "Vec3" ? o[d].value = new v(u.value._x, u.value._y, u.value._z) : ((r = u.value) == null ? void 0 : r.type) === "Vec2" ? o[d].value = new O(u.value._x, u.value._y) : typeof u.value == "object" && (o[d].value = ie(u.value))
        }
      return {
        fragmentShader: h,
        vertexShader: l,
        widthSegments: n,
        heightSegments: n,
        texturesOptions: {
          floatingPoint: "half-float",
          premultiplyAlpha: !0
        },
        uniforms: o
      }
    }
    createPlane(e, t, s) {
      var i;
      let r;
      e.isElement ? r = this.getPlaneParams(e) : r = this.getPlaneParams(e, s ? s.index : null), r.watchScroll = !1;
      let n = (s == null ? void 0 : s.downSample) || (s == null ? void 0 : s.index) === 0 && ((i = e.data) == null ? void 0 : i.downSample),
        o = this.renderingScale;
      n && (o = typeof n == "number" ? n : .5, o *= this.renderingScale), e.userDownsample && typeof e.userDownsample == "number" && (o *= e.userDownsample), this.curtain.renderer._renderingScale !== o ? (this.curtain.renderer._renderingScale = o, this.curtain.renderer.setSize()) : this.curtain.renderer._renderingScale !== this.renderingScale && (this.curtain.renderer._renderingScale = this.renderingScale, this.curtain.renderer.setSize());
      let h;
      try {
        if (!this.curtain.container) throw new Error("Can't find scene container");
        if (h = new ht(this.curtain, this.curtain.container, r), !h || !h.userData || !h.textures) throw new Error("Plane not properly initialized");
        return h.textures.length = 0, h.userData.id = e.local.id, h.userData.layerType = e.layerType, h.userData.type = e.type, h.userData.downSample = o, h.setRenderOrder(t), h
      } catch (l) {
        return console.error("Error creating plane:", l), null
      }
    }
    createPingPongPlane(e, t, s) {
      let i = this.getPlaneParams(e, 1 + ((s == null ? void 0 : s.length) || 0)),
        r = this.curtain.planes.find(n => n.type === "PingPongPlane" && n.userData.id === e.local.id);
      if (r) r.setRenderOrder(t);
      else {
        if (r = new qt(this.curtain, this.curtain.container, i), !r) return;
        r.userData.id = e.local.id, r.userData.pingpong = !0, r.setRenderOrder(t), this.setInitialEffectPlaneUniforms(r, e, e.getParent(), s), r.onReady(() => {
          r.userData.isReady = !0
        }).onRender(() => {
          this.setEffectPlaneUniforms(r, e)
        })
      }
      if (r) return r
    }
    createEffectPlane(e, t, s) {
      const i = this.createPlane(e, t, s);
      if (!i) return;
      const r = e.getParent();
      if (!i || !i.userData || !i.textures) throw new Error("Plane not properly initialized", i);
      s && (i.userData.passIndex = s.index, i.userData.length = e.data.passes.length, Object.entries(s).forEach(([n, o]) => {
        i.uniforms[n] && (i.uniforms[n].value = o)
      })), this.setInitialEffectPlaneUniforms(i, e, r, s), i.onReady(() => {
        i.userData.isReady = !0
      }).onRender(() => this.setEffectPlaneUniforms(i, e))
    }
    createElementPlane(e, t) {
      const s = this.createPlane(e, t);
      s && (this.setInitialElementPlaneUniforms(s, e), s.onReady(() => {
        s.userData.isReady = !0
      }).onRender(() => this.setElementPlaneUniforms(s, e)))
    }
    handleMediaTextures(e, t, s) {
      var i;
      if ([t.texture, (i = t.data) == null ? void 0 : i.texture].filter(r => r == null ? void 0 : r.src).forEach(r => {
          var n;
          if ((n = t.compiledFragmentShaders[s.passIndex ?? 0]) != null && n.includes(r.sampler)) {
            const o = this.local.preloadedTextures[r.src];
            o ? (e.addTexture(o), N(e, r.sampler, o), e.userData.textureLoaded = !0) : this.textureLoader.loadImage(r.src, {
              premultipliedAlpha: !1,
              sampler: r.sampler
            }, h => {
              N(e, r.sampler, h), e.userData.textureLoaded = !0
            })
          }
        }), t.type === "video") {
        const r = t.src.includes(", ") ? ut(t.src) : t.src,
          n = this.local.preloadedTextures[r];
        n ? e.addTexture(n) : e.loadVideo(r, {
          premultipliedAlpha: !0,
          sampler: "uVideoTexture"
        }, o => {
          e.videos.at(-1).play(), e.userData.textureLoaded = !0
        })
      }
    }
    handleEffectPlane(e, t, s) {
      const i = "passIndex" in s ? this.getPassPlane(e, s.passIndex) : e.getPlane();
      let r = this.getRenderTargets()[t - 1],
        n = this.curtain.planes.find(h => h.type === "PingPongPlane" && h.userData.id === e.local.id),
        o = e.compiledFragmentShaders[s.passIndex ?? 0];
      if (!i) return !1;
      n && o != null && o.includes("uPingPongTexture") && N(i, "uPingPongTexture", n.getTexture()), r ? N(i, "uTexture", r.getTexture()) : N(i, "uTexture"), o != null && o.includes("uBgTexture") && i && this.getRenderTargets()[t - (1 + s.passIndex)] && N(i, "uBgTexture", this.getRenderTargets()[t - (1 + s.passIndex)].getTexture()), this.handleMediaTextures(i, e, s)
    }
    handleElementPlane(e, t) {
      const s = e.getPlane(),
        i = e.getChildEffectItems(),
        r = this.layers.filter(l => !l.parentLayer);
      let n = this.getRenderTargets()[t - 1],
        o = r[r.indexOf(e) - 2],
        h;
      if (e.mask && o && (h = o.local.lastTarget), i.length || (s.textures.length = 0), n && i.length && s ? N(s, "uTexture", n.getTexture()) : s && s.addTexture(e.preloadedCanvasTexture), n) {
        if (i.length) {
          let l = i.reduce((d, u) => d + u.getPlanes().length, 0);
          n = this.getRenderTargets()[t - (1 + l)]
        }
        n && (N(s, "uBgTexture", n.getTexture()), h && e.mask && N(s, "uPreviousLayerTexture", h.getTexture()))
      }
    }
    handleChildEffectPlane(e, t, s) {
      const i = "passIndex" in s ? this.getPassPlane(e, s.passIndex) : e.getPlane();
      if (!i) return;
      const r = e.getParent();
      let n = this.getRenderTargets()[t - 1],
        o = this.curtain.planes.find(p => p.type === "PingPongPlane" && p.userData.id === e.local.id),
        h = e.compiledFragmentShaders[s.passIndex ?? 0],
        l = r.effects.filter(p => {
          if (this.layers.find(m => m.parentLayer === p)) return this.layers.find(m => m.parentLayer === p)
        }),
        d = l.indexOf(e.parentLayer),
        u = l[l.length - 1] === l[d],
        c = s.passIndex === s.length;
      if (n && (d || s.passIndex > 0) ? (e.isMask && (!s.length || u && c) && i.addTexture(r.preloadedCanvasTexture), N(i, "uTexture", n.getTexture())) : e.isMask ? (u && c && i.addTexture(r.preloadedCanvasTexture), n && N(i, "uTexture", n.getTexture())) : i.addTexture(r.preloadedCanvasTexture), o && h != null && h.includes("uPingPongTexture") && N(i, "uPingPongTexture", o.getTexture()), h != null && h.includes("uBgTexture"))
        if (d && s.length > 1) {
          let p = this.getRenderTargets()[t - (1 + s.length)];
          N(i, "uBgTexture", p.getTexture())
        } else r.preloadedCanvasTexture._samplerName = "uBgTexture", i.addTexture(r.preloadedCanvasTexture);
      e.type === "custom" && N(i, "uCustomTexture", this.getRenderTargets()[t]), this.handleMediaTextures(i, e, s)
    }
    createPlanes() {
      this.getOrderedItems().forEach((e, t) => {
        e.getPlanes().length ? e.getPlanes().forEach(s => s.setRenderOrder(t)) : e.isElement ? this.createElementPlane(e, t) : this.createEffectPlanes(e, t)
      })
    }
    createEffectPlanes(e, t) {
      const s = e.data;
      s.passes && s.passes.length ? (this.createEffectPlane(e, t, {
        index: 0,
        downSample: s.downSample,
        length: s.passes.length + 1
      }), s.passes.forEach((i, r) => {
        this.createEffectPlane(e, t, {
          index: r + 1,
          length: s.passes.length + 1,
          downSample: i.downSample,
          [i.prop]: i.value
        })
      }), ke(e) && this.createPingPongPlane(e, t, s.passes)) : (this.createEffectPlane(e, t), ke(e) && this.createPingPongPlane(e, t))
    }
    createTextures() {
      const e = this.getPlanes().sort((s, i) => s.renderOrder - i.renderOrder),
        t = e.length;
      for (let s = 0; s < t; s++) {
        const i = e[s];
        let r = this.layers.find(n => n.local.id === i.userData.id);
        s < t - 1 && this.assignRenderTargetToPlane(e, s, r, i), this.handleTextures(r, s, i.userData), r.local.lastTarget = i.target
      }
    }
    assignRenderTargetToPlane(e, t, s, i) {
      let r = this.getTextureParams(e, t, s),
        n = this.getRenderTargets()[t] || new Ge(this.curtain, r);
      n.userData.id = i.userData.id, i.setRenderTarget(n)
    }
    handleTextures(e, t, s) {
      e.isElement ? this.handleElementPlane(e, t) : e.parentLayer ? this.handleChildEffectPlane(e, t, s) : this.handleEffectPlane(e, t, s)
    }
    handleItemPlanes(e) {
      this.createPlanes(), this.createTextures(), this.checkIfReady(e)
    }
    isNotReady(e) {
      const t = this.layers.find(s => s.local.id === e.userData.id);
      return !!(t.layerType === "image" && !t.local.loaded || t.layerType === "text" && !t.local.loaded || e.userData.hasOwnProperty("textureLoaded") && !e.userData.textureLoaded)
    }
    checkIfReady(e) {
      const t = () => {
        var s;
        let i = !1;
        const r = (s = this.curtain) == null ? void 0 : s.planes;
        if (r) {
          for (let n = 0; n < r.length; n++)
            if (!r[n].userData.isReady) {
              i = !0;
              break
            } i ? (this.renderFrame(), requestAnimationFrame(t)) : e()
        }
      };
      t()
    }
    setInitialEffectPlaneUniforms(e, t, s, i) {
      var r;
      if (!e.userData.initialUniformsSet || !e.userData.isReady) {
        for (let n in e.uniforms)(r = t.states) != null && r.scroll.some(o => o.prop === n) || (t.local.bpProps && n in t.local.bpProps ? Ie(t.local.bpProps[n], e.uniforms[n], n) : n in t && Ie(t[n], e.uniforms[n], n));
        s && i && i.index < i.length - 1 && e.uniforms.isMask && (e.uniforms.isMask.value = 0), s && t.isMask && !t.mouseMomentum && (t.mouseMomentum = s.mouseMomentum), e.uniforms.resolution.value.x = this.curtain.canvas.width, e.uniforms.resolution.value.y = this.curtain.canvas.height, e.userData.initialUniformsSet = !0
      }
    }
    handleStateEffects() {
      this.layers.forEach(e => {
        e.updateStateEffects()
      })
    }
    setInitialElementPlaneUniforms(e, t) {
      e.uniforms.resolution.value.x = this.curtain.canvas.width, e.uniforms.resolution.value.y = this.curtain.canvas.height;
      for (let s in e.uniforms) t.local.bpProps && s in t.local.bpProps ? e.uniforms[s].value = t.local.bpProps[s] : s in t && (e.uniforms[s].value = t[s]);
      e.uniforms.sampleBg && (e.renderOrder - t.effects.length === 0 ? e.uniforms.sampleBg.value = 0 : e.uniforms.sampleBg.value = 1)
    }
    setElementPlaneUniforms(e, t) {
      let s = this.bbox.width * .5,
        i = this.bbox.height * .5;
      if (e.uniforms.mousePos) {
        let r = this.mouse.pos.x,
          n = this.mouse.pos.y,
          o = r / s,
          h = 1 - n / i;
        if (this.mouse.movedInView && t.mouseMomentum && t.type !== "mouse") {
          t.local.lastMousePos || (t.local.lastMousePos = {
            x: o,
            y: h
          });
          let l = t.local.lastMousePos.x * s,
            d = (1 - t.local.lastMousePos.y) * i;
          r = ce(r, l, t.mouseMomentum * 2), n = ce(n, d, t.mouseMomentum * 2), o = r / s, h = 1 - n / i, t.local.lastMousePos.x = o, t.local.lastMousePos.y = h
        }
        this.mouse.movedInView && (e.uniforms.mousePos.value.x !== o || e.uniforms.mousePos.value.y !== h) && (e.uniforms.mousePos.value.x = o, e.uniforms.mousePos.value.y = h)
      }
    }
    calculateItemMouseValues(e) {
      if (!this.mouse.movedInView) return null;
      const t = this.bbox.width / 2,
        s = this.bbox.height / 2;
      let i = this.mouse.pos.x,
        r = this.mouse.pos.y;
      if (e.mouseMomentum && e.type !== "mouse") {
        e.local.lastMousePos || (e.local.lastMousePos = {
          x: i / t,
          y: 1 - r / s
        });
        let o = e.local.lastMousePos.x * t,
          h = (1 - e.local.lastMousePos.y) * s;
        i = ce(i, o, e.mouseMomentum * 2), r = ce(r, h, e.mouseMomentum * 2), e.local.lastMousePos.x = i / t, e.local.lastMousePos.y = 1 - r / s
      }
      this.local.mouseValuePool || (this.local.mouseValuePool = {
        mousePos: new O(.5, .5),
        previousMousePos: new O(.5, .5),
        result: {
          mousePos: null,
          previousMousePos: null
        }
      });
      const n = this.local.mouseValuePool;
      return n.mousePos.x = i / t, n.mousePos.y = 1 - r / s, this.mouse.trail.length > 2 ? (n.previousMousePos.x = this.mouse.trail[this.mouse.trail.length - 3][0], n.previousMousePos.y = this.mouse.trail[this.mouse.trail.length - 3][1]) : (n.previousMousePos.x = n.mousePos.x, n.previousMousePos.y = n.mousePos.y), n.result.mousePos = n.mousePos, n.result.previousMousePos = n.previousMousePos, n.result
    }
    setEffectPlaneUniforms(e, t) {
      var s, i, r;
      let n = ((s = t.local.stateEffectProps) == null ? void 0 : s.speed) ?? t.speed ?? 1;
      if (t.animating && e.uniforms.time && (e.uniforms.time.value += n * 60 / this.fps), Ce() && (r = (i = this.interactivity) == null ? void 0 : i.mouse) != null && r.disableMobile) return !1;
      t.local.currentFrameMouseValues || (t.local.currentFrameMouseValues = this.calculateItemMouseValues(t));
      const o = t.local.currentFrameMouseValues;
      o && (e.uniforms.mousePos && !o.mousePos.equals(e.uniforms.mousePos.value) && (e.uniforms.mousePos.value.x = o.mousePos.x, e.uniforms.mousePos.value.y = o.mousePos.y), e.uniforms.previousMousePos && !o.previousMousePos.equals(e.uniforms.previousMousePos.value) && (e.uniforms.previousMousePos.value.x = o.previousMousePos.x, e.uniforms.previousMousePos.value.y = o.previousMousePos.y))
    }
    getOrderedItems() {
      let e = [];
      return this.layers.filter(t => !t.parentLayer).forEach(t => {
        t.effects && t.effects.length && e.push(...t.getChildEffectItems()), e.push(t)
      }), e
    }
    getTextureParams(e, t, s) {
      var i;
      const r = e[t];
      let n = 1;
      return r.userData.downSample && (n = typeof r.userData.downSample == "number" ? r.userData.downSample : .5), {
        maxWidth: this.curtain.canvas.width * n,
        maxHeight: this.curtain.canvas.height * n,
        depth: ((i = s == null ? void 0 : s.data) == null ? void 0 : i.depth) || (s == null ? void 0 : s.type) === "bulge"
      }
    }
    handlePlaneCreation() {
      this.initialized = !0, this.initializing = !1, this.rendering || this.renderNFrames(2), this.waitForAssetsAndDisablePlanes(), $e()
    }
    waitForAssetsAndDisablePlanes() {
      this.layers.some(e => (e.layerType === "image" || e.layerType === "text") && !e.local.loaded || Object.values(this.local.preloadedTextures).some(t => t === null)) ? setTimeout(() => this.waitForAssetsAndDisablePlanes(), 100) : (this.layers.filter(e => e.preloadedCanvasTexture).forEach(e => {
        e.preloadedCanvasTexture.shouldUpdate = e.preloadedCanvasTexture.userData.hasStateEffects || !1
      }), setTimeout(() => this.disablePlanes(), 16))
    }
    disablePlanes() {
      const e = this.getSplitOrderedItems();
      e.dynamic.length || e.static.pop();
      for (const t of e.static) t.getPlanes().forEach(s => {
        s._canDraw = !1
      })
    }
  }

  function ds(a) {
    return typeof HTMLElement == "object" ? a instanceof HTMLElement : a && typeof a == "object" && a !== null && a.nodeType === 1 && typeof a.nodeName == "string"
  }

  function re(a, e, t) {
    a.addEventListener(e, t, {
      passive: !0
    })
  }

  function ae(a, e, t) {
    a.removeEventListener(e, t)
  }

  function us() {
    re(window, "scroll", ft), Ce() ? re(window, "touchmove", De) : re(window, "mousemove", De), re(window, "routeChange", ct), re(document, "mouseleave", _t), ue = $t(os, 16), Ce() ? re(window, "orientationchange", ue) : re(window, "resize", ue), re(document, fe, gt), Xe = !0
  }

  function Ke() {
    ae(window, "mousemove", De), ae(window, "touchmove", De), ae(window, "scroll", ft), ae(window, "routeChange", ct), ae(document, "mouseleave", _t), ue && (ae(window, "resize", ue), ae(window, "orientationchange", ue)), ae(document, fe, gt), Xe = !1
  }

  function cs(a, e, t) {
    return {
      canvasWidth: a.offsetWidth,
      canvasHeight: a.offsetHeight,
      scale: e,
      dpi: t,
      element: a
    }
  }

  function ps() {
    f.scenes.forEach(a => {
      a.destroy()
    }), f.scenes.length = 0, Ke()
  }

  function gs(a, e, t, s, i) {
    let r;
    if (t) {
      r = t;
      const n = document.getElementById(t);
      if (n) try {
        let o = JSON.parse(n.innerText);
        return o != null && o.options && o != null && o.history ? Promise.resolve(o) : (s(new Error(`Did not find valid JSON inside ${t}`)), Promise.reject())
      } catch (o) {
        return s(new Error(`Error parsing JSON from ${t}: ${o.message}`)), Promise.reject()
      }
    } else {
      let n = "https://storage.googleapis.com/unicornstudio-production";
      i || e != null && e.includes("production=true") ? (n = "https://assets.unicorn.studio", e = `v=${Date.now()}`) : e != null && e.includes("update=") || (e = `v=${Date.now()}`), r = `${n}/embeds/${a}${e?"?"+e:""}`
    }
    return fetch(r).then(n => n.json()).then(n => n).catch(n => console.error("Error fetching data:", n))
  }

  function ms() {
    try {
      return !!document.createElement("canvas").getContext("webgl2")
    } catch {
      return !1
    }
  }

  function xt(a) {
    let e = a.projectId ? a.projectId.split("?")[0] : null,
      t = a.projectId ? a.projectId.split("?")[1] : null;
    return new Promise((s, i) => {
      gs(e, t, a.filePath, i, a.production).then(r => {
        (!r || !r.history || !r.options) && i(new Error(`Error fetching data for project id '${a.projectId}'`));
        const n = r.options || {},
          o = ds(a.element) ? a.element : document.getElementById(a.elementId);
        if (!o) {
          i(new Error(`Couldn't find an element with id '${a.elementId}' on the page.`));
          return
        }
        const h = be();
        o.setAttribute("data-scene-id", h);
        let l = a.scale || n.scale || 1,
          d = a.dpi || Math.min(1.5, window.devicePixelRatio);
        const u = Zt(r.history, h, cs(o, l, d)),
          c = new ls({
            id: h,
            fps: a.fps || n.fps || 60,
            dpi: d,
            name: n.name,
            projectId: e || a.filePath.split(".")[0],
            renderingScale: l,
            element: o,
            lazyLoad: a.lazyLoad,
            width: a.width,
            height: a.height
          });
        c.curtain.canvas.innerText = a.altText || "", c.curtain.canvas.setAttribute("aria-label", a.ariaLabel || "Unicorn Studio Scene"), c.curtain.canvas.setAttribute("role", "img");
        let p = n[ve("ZnJlZVBsYW4=")];
        (p || n[ve("aW5jbHVkZUxvZ28=")]) && Qt(h, o), p && console.log(ve("TWFkZSB3aXRoIHVuaWNvcm4uc3R1ZGlv")), f.scenes.push(c), c.layers = u, c.preloadTextures(), c.mouse.recordTrail = !!c.layers.find(m => m.type == "mouse"), c.setInteractiveParams(a, n), c.isInView = c.isFixed || mt(c.element, c.bbox, 50), (!c.lazyLoad || c.isInView) && c.initializePlanes(), console.log(c.getDynamicLayers(), c.layers), Xe || us(), s(c)
      }).catch(r => {
        console.error(r), i(r)
      })
    })
  }

  function fs() {
    return ms() ? new Promise((a, e) => {
      const t = [...document.querySelectorAll("[data-us-project], [data-us-project-src]")];
      t.filter(s => !s.getAttribute("data-us-initialized")).forEach((s, i) => {
        const r = te(s, "data-us-project"),
          n = te(s, "data-us-project-src"),
          o = te(s, "data-us-dpi"),
          h = te(s, "data-us-scale"),
          l = te(s, "data-us-lazyload"),
          d = te(s, "data-us-production"),
          u = te(s, "data-us-fps"),
          c = te(s, "data-us-alttext"),
          p = te(s, "data-us-arialabel"),
          m = te(s, "data-us-disablemobile");
        s.setAttribute("data-us-initialized", !0), xt({
          projectId: n ? null : r,
          filePath: n,
          element: s,
          dpi: +o,
          scale: +h,
          production: d,
          fps: +u,
          lazyLoad: l,
          altText: c,
          ariaLabel: p,
          interactivity: m ? {
            mouse: {
              disableMobile: !0
            }
          } : null
        }).then(P => {
          i === t.length - 1 && a(f.scenes)
        })
      })
    }) : (console.warn("WebGL2 is not supported in this browser. Unicorn Studio initialization skipped."), Promise.resolve([]))
  }
  f.addScene = xt, f.destroy = ps, f.init = fs, f.unbindEvents = Ke, Object.defineProperty(f, Symbol.toStringTag, {
    value: "Module"
  })
});
const zs = {
    "data-us-project": "jCxUxp4qqZQXWxJay47W"
  },
  Us = Ue({
    __name: "Animation",
    setup(f) {
      return _s(() => {
        window.UnicornStudio.init()
      }), xs(() => {
        window.UnicornStudio.destroy()
      }), (R, K) => (H(), se("div", zs))
    }
  }),
  Vs = f => {
    switch (f) {
      case Pe.BP:
        return {
          text: W("tge.criteria_bp.text", {
            amount: "100k"
          })
        };
      case Pe.MP:
        return {
          text: W("tge.criteria_mp.text", {
            amount: "750"
          })
        };
      case Pe.FRIENDS:
        return {
          text: W("tge.criteria_friends.text", {
            count: 2
          })
        };
      case Pe.NON_SYBIL:
        return {
          text: W("tge.criteria_non_sybil.text")
        };
      default:
        throw he("Unknown tge criteria")
    }
  },
  Bs = {
    class: "pages-tge-criteria-list"
  },
  Ns = ["innerHTML"],
  Ws = Ue({
    __name: "CriteriaList",
    props: {
      type: {},
      values: {}
    },
    setup(f) {
      const R = we(() => Object.values(Pe).map(K => {
        const A = Vs(K),
          $ = (() => {
            var y;
            return f.type === "info" ? "info" : f.type === "loading" ? "loading" : f.type === "success" || !!((y = f.values) != null && y[K]) ? "success" : "error"
          })();
        return {
          ...A,
          criteria: K,
          state: $
        }
      }));
      return (K, A) => {
        const $ = vt,
          g = Ps;
        return H(), se("div", Bs, [(H(!0), se(ys, null, vs(q(R), y => (H(), se("div", {
          key: y.criteria,
          class: yt(["item", `is-state-${y.state}`])
        }, [y.state === "info" ? (H(), Le($, {
          key: 0,
          name: "arrow-right",
          class: "icon"
        })) : y.state === "success" ? (H(), Le($, {
          key: 1,
          name: "check-big-2",
          class: "icon"
        })) : y.state === "error" ? (H(), Le($, {
          key: 2,
          name: "close-md",
          class: "icon"
        })) : y.state === "loading" ? (H(), Le(g, {
          key: 3,
          class: "spinner",
          size: 24,
          type: q(bs).LIGHT
        }, null, 8, ["type"])) : Je("", !0), ze("div", {
          class: "text",
          innerHTML: y.text
        }, null, 8, Ns)], 2))), 128))])
      }
    }
  }),
  Hs = et(Ws, [
    ["__scopeId", "data-v-0f04f386"]
  ]),
  Gs = {
    class: "heading"
  },
  js = {
    class: "title-wrapper"
  },
  Xs = {
    key: 0,
    class: "check-icon"
  },
  Ys = {
    key: 1,
    class: "close-icon"
  },
  qs = ["innerHTML"],
  $s = {
    key: 0,
    class: "subtitle"
  },
  Zs = Ue({
    __name: "Eligibility",
    setup(f) {
      const R = ws({
          status: "idle"
        }),
        K = we(() => {
          switch (R.value.status) {
            case "idle":
              return W("tge.eligibility.state_idle.title");
            case "checking":
              return W("tge.eligibility.state_checking.title");
            case "eligible":
              return W("tge.eligibility.state_eligible.title");
            case "not-eligible":
              return W("tge.eligibility.state_not_eligible.title");
            default:
              throw he("Unknown status")
          }
        }),
        A = we(() => {
          switch (R.value.status) {
            case "idle":
              return;
            case "checking":
              return;
            case "eligible":
              return W("tge.eligibility.state_eligible.subtitle");
            case "not-eligible":
              return W("tge.eligibility.state_not_eligible.subtitle");
            default:
              throw he("Unknown status")
          }
        }),
        $ = we(() => {
          switch (R.value.status) {
            case "idle":
            case "checking":
              return W("tge.eligibility.check_btn");
            case "eligible":
              return W("tge.eligibility.news_btn");
            case "not-eligible":
              return W("tge.eligibility.do_more");
            default:
              throw he("Unknown status")
          }
        }),
        g = we(() => {
          switch (R.value.status) {
            case "idle":
              return {
                type: "info"
              };
            case "checking":
              return {
                type: "loading"
              };
            case "eligible":
              return {
                type: "success"
              };
            case "not-eligible":
              return {
                type: "values", values: R.value.eligibility
              };
            default:
              throw he("Unknown status")
          }
        }),
        y = async () => {
          if (R.value.status !== "idle") return;
          R.value = {
            status: "checking"
          };
          const [Z] = await Promise.all([ks.getTgeEligibility(), As(500)]);
          if (!Fs(Z)) throw he("Failed to get eligibility");
          Z.data.eligible ? R.value = {
            status: "eligible"
          } : R.value = {
            status: "not-eligible",
            eligibility: Z.data
          }
        }, me = () => {
          Is().$webApp.openTelegramLink("https://t.me/blumcrypto")
        }, G = () => {
          switch (R.value.status) {
            case "idle":
              return y();
            case "checking":
              return;
            case "eligible":
              return me();
            case "not-eligible":
              return bt().push("/");
            default:
              throw he("Unknown status")
          }
        };
      return (Z, tt) => {
        const Ve = Us,
          Te = vt,
          Be = Hs,
          Ne = Cs,
          We = Os;
        return H(), se("div", {
          class: yt(["tge-eligible", `is-state-${q(R).status}`])
        }, [le(Ve, {
          class: "animation"
        }), ze("div", Gs, [ze("div", js, [q(R).status === "eligible" ? (H(), se("div", Xs, [le(Te, {
          name: "check-big-2",
          class: "icon"
        })])) : q(R).status === "not-eligible" ? (H(), se("div", Ys, [le(Te, {
          name: "close-sm",
          class: "icon"
        })])) : Je("", !0), ze("div", {
          class: "title",
          innerHTML: q(K)
        }, null, 8, qs)]), q(A) ? (H(), se("div", $s, Ts(q(A)), 1)) : Je("", !0)]), le(Be, Ss(Rs(q(g))), null, 16), le(We, null, {
          default: Es(() => [le(Ne, {
            size: q(Ms).LARGE,
            label: q($),
            loading: q(R).status === "checking",
            fill: "",
            onClick: G
          }, null, 8, ["size", "label", "loading"])]),
          _: 1
        })], 2)
      }
    }
  }),
  Qs = et(Zs, [
    ["__scopeId", "data-v-74d8a107"]
  ]),
  Ks = {
    class: "tge-page page"
  },
  Js = Ue({
    __name: "tge",
    setup(f) {
      return Ls("tge"), Ds().initHandler(() => {
        bt().push("/")
      }, "tge"), (R, K) => {
        const A = Qs;
        return H(), se("div", Ks, [le(A)])
      }
    }
  }),
  ii = et(Js, [
    ["__scopeId", "data-v-1cb1bdec"]
  ]);
export {
  ii as
  default
};