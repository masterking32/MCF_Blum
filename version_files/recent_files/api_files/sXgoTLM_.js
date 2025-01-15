var Z = Object.defineProperty;
var K = (d, h, i) => h in d ? Z(d, h, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: i
}) : d[h] = i;
var M = (d, h, i) => K(d, typeof h != "symbol" ? h + "" : h, i);
import {
  d as defineComponent,
  K as ref,
  j as computed,
  d3 as getMimeType,
  o as openBlock,
  c as createElementBlock,
  e as unref,
  g as useLogger,
  Y as useAlert,
  z as t$3,
  f as _export_sfc,
  d4 as commonjsRequire,
  bD as getDefaultExportFromCjs,
  c3 as Buffer,
  P as watch,
  G as createBlock,
  a as createBaseVNode,
  ay as withModifiers,
  t as toDisplayString,
  b as createVNode,
  av as normalizeStyle,
  d5 as Teleport,
  aY as nextTick,
  _ as _sfc_main$3,
  D as createCommentVNode,
  x as __nuxt_component_0,
  bE as FILE_UPLOAD_STATUS,
  W as client
} from "./DrQ2shF8.js";
const _hoisted_1$2 = ["accept"],
  BYTES_IN_MB = 1e6,
  _sfc_main$2 = defineComponent({
    __name: "FileInput",
    props: {
      accept: {
        type: Array,
        required: !0
      },
      maxFileSizeMb: {
        type: Number,
        required: !0
      }
    },
    emits: ["selected"],
    setup(d, {
      expose: h,
      emit: i
    }) {
      const c = d,
        f = i,
        l = ref(),
        u = computed(() => c.accept.map(m => `.${m.toLowerCase()}`).join(",")),
        x = computed(() => c.accept.map(m => getMimeType(m))),
        y = () => {
          if (!l.value || !l.value.files || l.value.files.length === 0) return;
          const m = l.value.files[0] ?? l.value.files.item(0);
          l.value.value = "", l.value.files = null, m && b(m)
        },
        b = m => {
          if (!x.value.includes(m.type)) {
            useLogger().debug("File type is not supported.", {
              type: m.type
            });
            return
          }
          if (m.size > c.maxFileSizeMb * BYTES_IN_MB) {
            useLogger().debug("File is too big.", {
              size: m.size
            }), useAlert().success(t$3("base.file.too_big", {
              maxUploadSize: String(c.maxFileSizeMb)
            }));
            return
          }
          f("selected", m)
        };
      return h({
        triggerFileUpload: () => l.value && l.value.click()
      }), (m, v) => (openBlock(), createElementBlock("input", {
        ref_key: "fileRef",
        ref: l,
        type: "file",
        class: "file-input",
        accept: unref(u),
        onChange: v[0] || (v[0] = w => y())
      }, null, 40, _hoisted_1$2))
    }
  }),
  __nuxt_component_1 = _export_sfc(_sfc_main$2, [
    ["__scopeId", "data-v-7befee2e"]
  ]);
/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:05.335Z
 */
function ownKeys(d, h) {
  var i = Object.keys(d);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(d);
    h && (c = c.filter(function(f) {
      return Object.getOwnPropertyDescriptor(d, f).enumerable
    })), i.push.apply(i, c)
  }
  return i
}

function _objectSpread2(d) {
  for (var h = 1; h < arguments.length; h++) {
    var i = arguments[h] != null ? arguments[h] : {};
    h % 2 ? ownKeys(Object(i), !0).forEach(function(c) {
      _defineProperty(d, c, i[c])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(i)) : ownKeys(Object(i)).forEach(function(c) {
      Object.defineProperty(d, c, Object.getOwnPropertyDescriptor(i, c))
    })
  }
  return d
}

function _toPrimitive(d, h) {
  if (typeof d != "object" || !d) return d;
  var i = d[Symbol.toPrimitive];
  if (i !== void 0) {
    var c = i.call(d, h || "default");
    if (typeof c != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return (h === "string" ? String : Number)(d)
}

function _toPropertyKey(d) {
  var h = _toPrimitive(d, "string");
  return typeof h == "symbol" ? h : h + ""
}

function _typeof(d) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
    return typeof h
  } : function(h) {
    return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h
  }, _typeof(d)
}

function _classCallCheck(d, h) {
  if (!(d instanceof h)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(d, h) {
  for (var i = 0; i < h.length; i++) {
    var c = h[i];
    c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(d, _toPropertyKey(c.key), c)
  }
}

function _createClass(d, h, i) {
  return h && _defineProperties(d.prototype, h), i && _defineProperties(d, i), Object.defineProperty(d, "prototype", {
    writable: !1
  }), d
}

function _defineProperty(d, h, i) {
  return h = _toPropertyKey(h), h in d ? Object.defineProperty(d, h, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : d[h] = i, d
}

function _toConsumableArray(d) {
  return _arrayWithoutHoles(d) || _iterableToArray(d) || _unsupportedIterableToArray(d) || _nonIterableSpread()
}

function _arrayWithoutHoles(d) {
  if (Array.isArray(d)) return _arrayLikeToArray(d)
}

function _iterableToArray(d) {
  if (typeof Symbol < "u" && d[Symbol.iterator] != null || d["@@iterator"] != null) return Array.from(d)
}

function _unsupportedIterableToArray(d, h) {
  if (d) {
    if (typeof d == "string") return _arrayLikeToArray(d, h);
    var i = Object.prototype.toString.call(d).slice(8, -1);
    if (i === "Object" && d.constructor && (i = d.constructor.name), i === "Map" || i === "Set") return Array.from(d);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return _arrayLikeToArray(d, h)
  }
}

function _arrayLikeToArray(d, h) {
  (h == null || h > d.length) && (h = d.length);
  for (var i = 0, c = new Array(h); i < h; i++) c[i] = d[i];
  return c
}

function _nonIterableSpread() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var IS_BROWSER = typeof window < "u" && typeof window.document < "u",
  WINDOW = IS_BROWSER ? window : {},
  IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : !1,
  HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : !1,
  NAMESPACE = "cropper",
  ACTION_ALL = "all",
  ACTION_CROP = "crop",
  ACTION_MOVE = "move",
  ACTION_ZOOM = "zoom",
  ACTION_EAST = "e",
  ACTION_WEST = "w",
  ACTION_SOUTH = "s",
  ACTION_NORTH = "n",
  ACTION_NORTH_EAST = "ne",
  ACTION_NORTH_WEST = "nw",
  ACTION_SOUTH_EAST = "se",
  ACTION_SOUTH_WEST = "sw",
  CLASS_CROP = "".concat(NAMESPACE, "-crop"),
  CLASS_DISABLED = "".concat(NAMESPACE, "-disabled"),
  CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden"),
  CLASS_HIDE = "".concat(NAMESPACE, "-hide"),
  CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible"),
  CLASS_MODAL = "".concat(NAMESPACE, "-modal"),
  CLASS_MOVE = "".concat(NAMESPACE, "-move"),
  DATA_ACTION = "".concat(NAMESPACE, "Action"),
  DATA_PREVIEW = "".concat(NAMESPACE, "Preview"),
  DRAG_MODE_CROP = "crop",
  DRAG_MODE_MOVE = "move",
  DRAG_MODE_NONE = "none",
  EVENT_CROP = "crop",
  EVENT_CROP_END = "cropend",
  EVENT_CROP_MOVE = "cropmove",
  EVENT_CROP_START = "cropstart",
  EVENT_DBLCLICK = "dblclick",
  EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown",
  EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove",
  EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup",
  EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START,
  EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE,
  EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END,
  EVENT_READY = "ready",
  EVENT_RESIZE = "resize",
  EVENT_WHEEL = "wheel",
  EVENT_ZOOM = "zoom",
  MIME_TYPE_JPEG = "image/jpeg",
  REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
  REGEXP_DATA_URL = /^data:/,
  REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/,
  REGEXP_TAG_NAME = /^img|canvas$/i,
  MIN_CONTAINER_WIDTH = 200,
  MIN_CONTAINER_HEIGHT = 100,
  DEFAULTS = {
    viewMode: 0,
    dragMode: DRAG_MODE_CROP,
    initialAspectRatio: NaN,
    aspectRatio: NaN,
    data: null,
    preview: "",
    responsive: !0,
    restore: !0,
    checkCrossOrigin: !0,
    checkOrientation: !0,
    modal: !0,
    guides: !0,
    center: !0,
    highlight: !0,
    background: !0,
    autoCrop: !0,
    autoCropArea: .8,
    movable: !0,
    rotatable: !0,
    scalable: !0,
    zoomable: !0,
    zoomOnTouch: !0,
    zoomOnWheel: !0,
    wheelZoomRatio: .1,
    cropBoxMovable: !0,
    cropBoxResizable: !0,
    toggleDragModeOnDblclick: !0,
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: MIN_CONTAINER_WIDTH,
    minContainerHeight: MIN_CONTAINER_HEIGHT,
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  },
  TEMPLATE = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
  isNaN$1 = Number.isNaN || WINDOW.isNaN;

function isNumber(d) {
  return typeof d == "number" && !isNaN$1(d)
}
var isPositiveNumber = function(h) {
  return h > 0 && h < 1 / 0
};

function isUndefined(d) {
  return typeof d > "u"
}

function isObject(d) {
  return _typeof(d) === "object" && d !== null
}
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isPlainObject(d) {
  if (!isObject(d)) return !1;
  try {
    var h = d.constructor,
      i = h.prototype;
    return h && i && hasOwnProperty.call(i, "isPrototypeOf")
  } catch {
    return !1
  }
}

function isFunction(d) {
  return typeof d == "function"
}
var slice = Array.prototype.slice;

function toArray(d) {
  return Array.from ? Array.from(d) : slice.call(d)
}

function forEach(d, h) {
  return d && isFunction(h) && (Array.isArray(d) || isNumber(d.length) ? toArray(d).forEach(function(i, c) {
    h.call(d, i, c, d)
  }) : isObject(d) && Object.keys(d).forEach(function(i) {
    h.call(d, d[i], i, d)
  })), d
}
var assign = Object.assign || function(h) {
    for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), f = 1; f < i; f++) c[f - 1] = arguments[f];
    return isObject(h) && c.length > 0 && c.forEach(function(l) {
      isObject(l) && Object.keys(l).forEach(function(u) {
        h[u] = l[u]
      })
    }), h
  },
  REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;

function normalizeDecimalNumber(d) {
  var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return REGEXP_DECIMALS.test(d) ? Math.round(d * h) / h : d
}
var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;

function setStyle(d, h) {
  var i = d.style;
  forEach(h, function(c, f) {
    REGEXP_SUFFIX.test(f) && isNumber(c) && (c = "".concat(c, "px")), i[f] = c
  })
}

function hasClass(d, h) {
  return d.classList ? d.classList.contains(h) : d.className.indexOf(h) > -1
}

function addClass(d, h) {
  if (h) {
    if (isNumber(d.length)) {
      forEach(d, function(c) {
        addClass(c, h)
      });
      return
    }
    if (d.classList) {
      d.classList.add(h);
      return
    }
    var i = d.className.trim();
    i ? i.indexOf(h) < 0 && (d.className = "".concat(i, " ").concat(h)) : d.className = h
  }
}

function removeClass(d, h) {
  if (h) {
    if (isNumber(d.length)) {
      forEach(d, function(i) {
        removeClass(i, h)
      });
      return
    }
    if (d.classList) {
      d.classList.remove(h);
      return
    }
    d.className.indexOf(h) >= 0 && (d.className = d.className.replace(h, ""))
  }
}

function toggleClass(d, h, i) {
  if (h) {
    if (isNumber(d.length)) {
      forEach(d, function(c) {
        toggleClass(c, h, i)
      });
      return
    }
    i ? addClass(d, h) : removeClass(d, h)
  }
}
var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;

function toParamCase(d) {
  return d.replace(REGEXP_CAMEL_CASE, "$1-$2").toLowerCase()
}

function getData(d, h) {
  return isObject(d[h]) ? d[h] : d.dataset ? d.dataset[h] : d.getAttribute("data-".concat(toParamCase(h)))
}

function setData(d, h, i) {
  isObject(i) ? d[h] = i : d.dataset ? d.dataset[h] = i : d.setAttribute("data-".concat(toParamCase(h)), i)
}

function removeData(d, h) {
  if (isObject(d[h])) try {
    delete d[h]
  } catch {
    d[h] = void 0
  } else if (d.dataset) try {
    delete d.dataset[h]
  } catch {
    d.dataset[h] = void 0
  } else d.removeAttribute("data-".concat(toParamCase(h)))
}
var REGEXP_SPACES = /\s\s*/,
  onceSupported = function() {
    var d = !1;
    if (IS_BROWSER) {
      var h = !1,
        i = function() {},
        c = Object.defineProperty({}, "once", {
          get: function() {
            return d = !0, h
          },
          set: function(l) {
            h = l
          }
        });
      WINDOW.addEventListener("test", i, c), WINDOW.removeEventListener("test", i, c)
    }
    return d
  }();

function removeListener(d, h, i) {
  var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    f = i;
  h.trim().split(REGEXP_SPACES).forEach(function(l) {
    if (!onceSupported) {
      var u = d.listeners;
      u && u[l] && u[l][i] && (f = u[l][i], delete u[l][i], Object.keys(u[l]).length === 0 && delete u[l], Object.keys(u).length === 0 && delete d.listeners)
    }
    d.removeEventListener(l, f, c)
  })
}

function addListener(d, h, i) {
  var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    f = i;
  h.trim().split(REGEXP_SPACES).forEach(function(l) {
    if (c.once && !onceSupported) {
      var u = d.listeners,
        x = u === void 0 ? {} : u;
      f = function() {
        delete x[l][i], d.removeEventListener(l, f, c);
        for (var b = arguments.length, g = new Array(b), m = 0; m < b; m++) g[m] = arguments[m];
        i.apply(d, g)
      }, x[l] || (x[l] = {}), x[l][i] && d.removeEventListener(l, x[l][i], c), x[l][i] = f, d.listeners = x
    }
    d.addEventListener(l, f, c)
  })
}

function dispatchEvent(d, h, i) {
  var c;
  return isFunction(Event) && isFunction(CustomEvent) ? c = new CustomEvent(h, {
    detail: i,
    bubbles: !0,
    cancelable: !0
  }) : (c = document.createEvent("CustomEvent"), c.initCustomEvent(h, !0, !0, i)), d.dispatchEvent(c)
}

function getOffset(d) {
  var h = d.getBoundingClientRect();
  return {
    left: h.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: h.top + (window.pageYOffset - document.documentElement.clientTop)
  }
}
var location$1 = WINDOW.location,
  REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;

function isCrossOriginURL(d) {
  var h = d.match(REGEXP_ORIGINS);
  return h !== null && (h[1] !== location$1.protocol || h[2] !== location$1.hostname || h[3] !== location$1.port)
}

function addTimestamp(d) {
  var h = "timestamp=".concat(new Date().getTime());
  return d + (d.indexOf("?") === -1 ? "?" : "&") + h
}

function getTransforms(d) {
  var h = d.rotate,
    i = d.scaleX,
    c = d.scaleY,
    f = d.translateX,
    l = d.translateY,
    u = [];
  isNumber(f) && f !== 0 && u.push("translateX(".concat(f, "px)")), isNumber(l) && l !== 0 && u.push("translateY(".concat(l, "px)")), isNumber(h) && h !== 0 && u.push("rotate(".concat(h, "deg)")), isNumber(i) && i !== 1 && u.push("scaleX(".concat(i, ")")), isNumber(c) && c !== 1 && u.push("scaleY(".concat(c, ")"));
  var x = u.length ? u.join(" ") : "none";
  return {
    WebkitTransform: x,
    msTransform: x,
    transform: x
  }
}

function getMaxZoomRatio(d) {
  var h = _objectSpread2({}, d),
    i = 0;
  return forEach(d, function(c, f) {
    delete h[f], forEach(h, function(l) {
      var u = Math.abs(c.startX - l.startX),
        x = Math.abs(c.startY - l.startY),
        y = Math.abs(c.endX - l.endX),
        b = Math.abs(c.endY - l.endY),
        g = Math.sqrt(u * u + x * x),
        m = Math.sqrt(y * y + b * b),
        v = (m - g) / g;
      Math.abs(v) > Math.abs(i) && (i = v)
    })
  }), i
}

function getPointer(d, h) {
  var i = d.pageX,
    c = d.pageY,
    f = {
      endX: i,
      endY: c
    };
  return h ? f : _objectSpread2({
    startX: i,
    startY: c
  }, f)
}

function getPointersCenter(d) {
  var h = 0,
    i = 0,
    c = 0;
  return forEach(d, function(f) {
    var l = f.startX,
      u = f.startY;
    h += l, i += u, c += 1
  }), h /= c, i /= c, {
    pageX: h,
    pageY: i
  }
}

function getAdjustedSizes(d) {
  var h = d.aspectRatio,
    i = d.height,
    c = d.width,
    f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain",
    l = isPositiveNumber(c),
    u = isPositiveNumber(i);
  if (l && u) {
    var x = i * h;
    f === "contain" && x > c || f === "cover" && x < c ? i = c / h : c = i * h
  } else l ? i = c / h : u && (c = i * h);
  return {
    width: c,
    height: i
  }
}

function getRotatedSizes(d) {
  var h = d.width,
    i = d.height,
    c = d.degree;
  if (c = Math.abs(c) % 180, c === 90) return {
    width: i,
    height: h
  };
  var f = c % 90 * Math.PI / 180,
    l = Math.sin(f),
    u = Math.cos(f),
    x = h * u + i * l,
    y = h * l + i * u;
  return c > 90 ? {
    width: y,
    height: x
  } : {
    width: x,
    height: y
  }
}

function getSourceCanvas(d, h, i, c) {
  var f = h.aspectRatio,
    l = h.naturalWidth,
    u = h.naturalHeight,
    x = h.rotate,
    y = x === void 0 ? 0 : x,
    b = h.scaleX,
    g = b === void 0 ? 1 : b,
    m = h.scaleY,
    v = m === void 0 ? 1 : m,
    w = i.aspectRatio,
    C = i.naturalWidth,
    T = i.naturalHeight,
    E = c.fillColor,
    A = E === void 0 ? "transparent" : E,
    O = c.imageSmoothingEnabled,
    D = O === void 0 ? !0 : O,
    B = c.imageSmoothingQuality,
    N = B === void 0 ? "low" : B,
    _ = c.maxWidth,
    S = _ === void 0 ? 1 / 0 : _,
    I = c.maxHeight,
    P = I === void 0 ? 1 / 0 : I,
    R = c.minWidth,
    L = R === void 0 ? 0 : R,
    j = c.minHeight,
    z = j === void 0 ? 0 : j,
    k = document.createElement("canvas"),
    F = k.getContext("2d"),
    U = getAdjustedSizes({
      aspectRatio: w,
      width: S,
      height: P
    }),
    H = getAdjustedSizes({
      aspectRatio: w,
      width: L,
      height: z
    }, "cover"),
    W = Math.min(U.width, Math.max(H.width, C)),
    G = Math.min(U.height, Math.max(H.height, T)),
    V = getAdjustedSizes({
      aspectRatio: f,
      width: S,
      height: P
    }),
    X = getAdjustedSizes({
      aspectRatio: f,
      width: L,
      height: z
    }, "cover"),
    $ = Math.min(V.width, Math.max(X.width, l)),
    Y = Math.min(V.height, Math.max(X.height, u)),
    q = [-$ / 2, -Y / 2, $, Y];
  return k.width = normalizeDecimalNumber(W), k.height = normalizeDecimalNumber(G), F.fillStyle = A, F.fillRect(0, 0, W, G), F.save(), F.translate(W / 2, G / 2), F.rotate(y * Math.PI / 180), F.scale(g, v), F.imageSmoothingEnabled = D, F.imageSmoothingQuality = N, F.drawImage.apply(F, [d].concat(_toConsumableArray(q.map(function(J) {
    return Math.floor(normalizeDecimalNumber(J))
  })))), F.restore(), k
}
var fromCharCode = String.fromCharCode;

function getStringFromCharCode(d, h, i) {
  var c = "";
  i += h;
  for (var f = h; f < i; f += 1) c += fromCharCode(d.getUint8(f));
  return c
}
var REGEXP_DATA_URL_HEAD = /^data:.*,/;

function dataURLToArrayBuffer(d) {
  var h = d.replace(REGEXP_DATA_URL_HEAD, ""),
    i = atob(h),
    c = new ArrayBuffer(i.length),
    f = new Uint8Array(c);
  return forEach(f, function(l, u) {
    f[u] = i.charCodeAt(u)
  }), c
}

function arrayBufferToDataURL(d, h) {
  for (var i = [], c = 8192, f = new Uint8Array(d); f.length > 0;) i.push(fromCharCode.apply(null, toArray(f.subarray(0, c)))), f = f.subarray(c);
  return "data:".concat(h, ";base64,").concat(btoa(i.join("")))
}

function resetAndGetOrientation(d) {
  var h = new DataView(d),
    i;
  try {
    var c, f, l;
    if (h.getUint8(0) === 255 && h.getUint8(1) === 216)
      for (var u = h.byteLength, x = 2; x + 1 < u;) {
        if (h.getUint8(x) === 255 && h.getUint8(x + 1) === 225) {
          f = x;
          break
        }
        x += 1
      }
    if (f) {
      var y = f + 4,
        b = f + 10;
      if (getStringFromCharCode(h, y, 4) === "Exif") {
        var g = h.getUint16(b);
        if (c = g === 18761, (c || g === 19789) && h.getUint16(b + 2, c) === 42) {
          var m = h.getUint32(b + 4, c);
          m >= 8 && (l = b + m)
        }
      }
    }
    if (l) {
      var v = h.getUint16(l, c),
        w, C;
      for (C = 0; C < v; C += 1)
        if (w = l + C * 12 + 2, h.getUint16(w, c) === 274) {
          w += 8, i = h.getUint16(w, c), h.setUint16(w, 1, c);
          break
        }
    }
  } catch {
    i = 1
  }
  return i
}

function parseOrientation(d) {
  var h = 0,
    i = 1,
    c = 1;
  switch (d) {
    case 2:
      i = -1;
      break;
    case 3:
      h = -180;
      break;
    case 4:
      c = -1;
      break;
    case 5:
      h = 90, c = -1;
      break;
    case 6:
      h = 90;
      break;
    case 7:
      h = 90, i = -1;
      break;
    case 8:
      h = -90;
      break
  }
  return {
    rotate: h,
    scaleX: i,
    scaleY: c
  }
}
var render = {
    render: function() {
      this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox()
    },
    initContainer: function() {
      var h = this.element,
        i = this.options,
        c = this.container,
        f = this.cropper,
        l = Number(i.minContainerWidth),
        u = Number(i.minContainerHeight);
      addClass(f, CLASS_HIDDEN), removeClass(h, CLASS_HIDDEN);
      var x = {
        width: Math.max(c.offsetWidth, l >= 0 ? l : MIN_CONTAINER_WIDTH),
        height: Math.max(c.offsetHeight, u >= 0 ? u : MIN_CONTAINER_HEIGHT)
      };
      this.containerData = x, setStyle(f, {
        width: x.width,
        height: x.height
      }), addClass(h, CLASS_HIDDEN), removeClass(f, CLASS_HIDDEN)
    },
    initCanvas: function() {
      var h = this.containerData,
        i = this.imageData,
        c = this.options.viewMode,
        f = Math.abs(i.rotate) % 180 === 90,
        l = f ? i.naturalHeight : i.naturalWidth,
        u = f ? i.naturalWidth : i.naturalHeight,
        x = l / u,
        y = h.width,
        b = h.height;
      h.height * x > h.width ? c === 3 ? y = h.height * x : b = h.width / x : c === 3 ? b = h.width / x : y = h.height * x;
      var g = {
        aspectRatio: x,
        naturalWidth: l,
        naturalHeight: u,
        width: y,
        height: b
      };
      this.canvasData = g, this.limited = c === 1 || c === 2, this.limitCanvas(!0, !0), g.width = Math.min(Math.max(g.width, g.minWidth), g.maxWidth), g.height = Math.min(Math.max(g.height, g.minHeight), g.maxHeight), g.left = (h.width - g.width) / 2, g.top = (h.height - g.height) / 2, g.oldLeft = g.left, g.oldTop = g.top, this.initialCanvasData = assign({}, g)
    },
    limitCanvas: function(h, i) {
      var c = this.options,
        f = this.containerData,
        l = this.canvasData,
        u = this.cropBoxData,
        x = c.viewMode,
        y = l.aspectRatio,
        b = this.cropped && u;
      if (h) {
        var g = Number(c.minCanvasWidth) || 0,
          m = Number(c.minCanvasHeight) || 0;
        x > 1 ? (g = Math.max(g, f.width), m = Math.max(m, f.height), x === 3 && (m * y > g ? g = m * y : m = g / y)) : x > 0 && (g ? g = Math.max(g, b ? u.width : 0) : m ? m = Math.max(m, b ? u.height : 0) : b && (g = u.width, m = u.height, m * y > g ? g = m * y : m = g / y));
        var v = getAdjustedSizes({
          aspectRatio: y,
          width: g,
          height: m
        });
        g = v.width, m = v.height, l.minWidth = g, l.minHeight = m, l.maxWidth = 1 / 0, l.maxHeight = 1 / 0
      }
      if (i)
        if (x > (b ? 0 : 1)) {
          var w = f.width - l.width,
            C = f.height - l.height;
          l.minLeft = Math.min(0, w), l.minTop = Math.min(0, C), l.maxLeft = Math.max(0, w), l.maxTop = Math.max(0, C), b && this.limited && (l.minLeft = Math.min(u.left, u.left + (u.width - l.width)), l.minTop = Math.min(u.top, u.top + (u.height - l.height)), l.maxLeft = u.left, l.maxTop = u.top, x === 2 && (l.width >= f.width && (l.minLeft = Math.min(0, w), l.maxLeft = Math.max(0, w)), l.height >= f.height && (l.minTop = Math.min(0, C), l.maxTop = Math.max(0, C))))
        } else l.minLeft = -l.width, l.minTop = -l.height, l.maxLeft = f.width, l.maxTop = f.height
    },
    renderCanvas: function(h, i) {
      var c = this.canvasData,
        f = this.imageData;
      if (i) {
        var l = getRotatedSizes({
            width: f.naturalWidth * Math.abs(f.scaleX || 1),
            height: f.naturalHeight * Math.abs(f.scaleY || 1),
            degree: f.rotate || 0
          }),
          u = l.width,
          x = l.height,
          y = c.width * (u / c.naturalWidth),
          b = c.height * (x / c.naturalHeight);
        c.left -= (y - c.width) / 2, c.top -= (b - c.height) / 2, c.width = y, c.height = b, c.aspectRatio = u / x, c.naturalWidth = u, c.naturalHeight = x, this.limitCanvas(!0, !1)
      }(c.width > c.maxWidth || c.width < c.minWidth) && (c.left = c.oldLeft), (c.height > c.maxHeight || c.height < c.minHeight) && (c.top = c.oldTop), c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth), c.height = Math.min(Math.max(c.height, c.minHeight), c.maxHeight), this.limitCanvas(!1, !0), c.left = Math.min(Math.max(c.left, c.minLeft), c.maxLeft), c.top = Math.min(Math.max(c.top, c.minTop), c.maxTop), c.oldLeft = c.left, c.oldTop = c.top, setStyle(this.canvas, assign({
        width: c.width,
        height: c.height
      }, getTransforms({
        translateX: c.left,
        translateY: c.top
      }))), this.renderImage(h), this.cropped && this.limited && this.limitCropBox(!0, !0)
    },
    renderImage: function(h) {
      var i = this.canvasData,
        c = this.imageData,
        f = c.naturalWidth * (i.width / i.naturalWidth),
        l = c.naturalHeight * (i.height / i.naturalHeight);
      assign(c, {
        width: f,
        height: l,
        left: (i.width - f) / 2,
        top: (i.height - l) / 2
      }), setStyle(this.image, assign({
        width: c.width,
        height: c.height
      }, getTransforms(assign({
        translateX: c.left,
        translateY: c.top
      }, c)))), h && this.output()
    },
    initCropBox: function() {
      var h = this.options,
        i = this.canvasData,
        c = h.aspectRatio || h.initialAspectRatio,
        f = Number(h.autoCropArea) || .8,
        l = {
          width: i.width,
          height: i.height
        };
      c && (i.height * c > i.width ? l.height = l.width / c : l.width = l.height * c), this.cropBoxData = l, this.limitCropBox(!0, !0), l.width = Math.min(Math.max(l.width, l.minWidth), l.maxWidth), l.height = Math.min(Math.max(l.height, l.minHeight), l.maxHeight), l.width = Math.max(l.minWidth, l.width * f), l.height = Math.max(l.minHeight, l.height * f), l.left = i.left + (i.width - l.width) / 2, l.top = i.top + (i.height - l.height) / 2, l.oldLeft = l.left, l.oldTop = l.top, this.initialCropBoxData = assign({}, l)
    },
    limitCropBox: function(h, i) {
      var c = this.options,
        f = this.containerData,
        l = this.canvasData,
        u = this.cropBoxData,
        x = this.limited,
        y = c.aspectRatio;
      if (h) {
        var b = Number(c.minCropBoxWidth) || 0,
          g = Number(c.minCropBoxHeight) || 0,
          m = x ? Math.min(f.width, l.width, l.width + l.left, f.width - l.left) : f.width,
          v = x ? Math.min(f.height, l.height, l.height + l.top, f.height - l.top) : f.height;
        b = Math.min(b, f.width), g = Math.min(g, f.height), y && (b && g ? g * y > b ? g = b / y : b = g * y : b ? g = b / y : g && (b = g * y), v * y > m ? v = m / y : m = v * y), u.minWidth = Math.min(b, m), u.minHeight = Math.min(g, v), u.maxWidth = m, u.maxHeight = v
      }
      i && (x ? (u.minLeft = Math.max(0, l.left), u.minTop = Math.max(0, l.top), u.maxLeft = Math.min(f.width, l.left + l.width) - u.width, u.maxTop = Math.min(f.height, l.top + l.height) - u.height) : (u.minLeft = 0, u.minTop = 0, u.maxLeft = f.width - u.width, u.maxTop = f.height - u.height))
    },
    renderCropBox: function() {
      var h = this.options,
        i = this.containerData,
        c = this.cropBoxData;
      (c.width > c.maxWidth || c.width < c.minWidth) && (c.left = c.oldLeft), (c.height > c.maxHeight || c.height < c.minHeight) && (c.top = c.oldTop), c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth), c.height = Math.min(Math.max(c.height, c.minHeight), c.maxHeight), this.limitCropBox(!1, !0), c.left = Math.min(Math.max(c.left, c.minLeft), c.maxLeft), c.top = Math.min(Math.max(c.top, c.minTop), c.maxTop), c.oldLeft = c.left, c.oldTop = c.top, h.movable && h.cropBoxMovable && setData(this.face, DATA_ACTION, c.width >= i.width && c.height >= i.height ? ACTION_MOVE : ACTION_ALL), setStyle(this.cropBox, assign({
        width: c.width,
        height: c.height
      }, getTransforms({
        translateX: c.left,
        translateY: c.top
      }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output()
    },
    output: function() {
      this.preview(), dispatchEvent(this.element, EVENT_CROP, this.getData())
    }
  },
  preview = {
    initPreview: function() {
      var h = this.element,
        i = this.crossOrigin,
        c = this.options.preview,
        f = i ? this.crossOriginUrl : this.url,
        l = h.alt || "The image to preview",
        u = document.createElement("img");
      if (i && (u.crossOrigin = i), u.src = f, u.alt = l, this.viewBox.appendChild(u), this.viewBoxImage = u, !!c) {
        var x = c;
        typeof c == "string" ? x = h.ownerDocument.querySelectorAll(c) : c.querySelector && (x = [c]), this.previews = x, forEach(x, function(y) {
          var b = document.createElement("img");
          setData(y, DATA_PREVIEW, {
            width: y.offsetWidth,
            height: y.offsetHeight,
            html: y.innerHTML
          }), i && (b.crossOrigin = i), b.src = f, b.alt = l, b.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', y.innerHTML = "", y.appendChild(b)
        })
      }
    },
    resetPreview: function() {
      forEach(this.previews, function(h) {
        var i = getData(h, DATA_PREVIEW);
        setStyle(h, {
          width: i.width,
          height: i.height
        }), h.innerHTML = i.html, removeData(h, DATA_PREVIEW)
      })
    },
    preview: function() {
      var h = this.imageData,
        i = this.canvasData,
        c = this.cropBoxData,
        f = c.width,
        l = c.height,
        u = h.width,
        x = h.height,
        y = c.left - i.left - h.left,
        b = c.top - i.top - h.top;
      !this.cropped || this.disabled || (setStyle(this.viewBoxImage, assign({
        width: u,
        height: x
      }, getTransforms(assign({
        translateX: -y,
        translateY: -b
      }, h)))), forEach(this.previews, function(g) {
        var m = getData(g, DATA_PREVIEW),
          v = m.width,
          w = m.height,
          C = v,
          T = w,
          E = 1;
        f && (E = v / f, T = l * E), l && T > w && (E = w / l, C = f * E, T = w), setStyle(g, {
          width: C,
          height: T
        }), setStyle(g.getElementsByTagName("img")[0], assign({
          width: u * E,
          height: x * E
        }, getTransforms(assign({
          translateX: -y * E,
          translateY: -b * E
        }, h))))
      }))
    }
  },
  events = {
    bind: function() {
      var h = this.element,
        i = this.options,
        c = this.cropper;
      isFunction(i.cropstart) && addListener(h, EVENT_CROP_START, i.cropstart), isFunction(i.cropmove) && addListener(h, EVENT_CROP_MOVE, i.cropmove), isFunction(i.cropend) && addListener(h, EVENT_CROP_END, i.cropend), isFunction(i.crop) && addListener(h, EVENT_CROP, i.crop), isFunction(i.zoom) && addListener(h, EVENT_ZOOM, i.zoom), addListener(c, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this)), i.zoomable && i.zoomOnWheel && addListener(c, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
        passive: !1,
        capture: !0
      }), i.toggleDragModeOnDblclick && addListener(c, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this)), addListener(h.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this)), addListener(h.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this)), i.responsive && addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this))
    },
    unbind: function() {
      var h = this.element,
        i = this.options,
        c = this.cropper;
      isFunction(i.cropstart) && removeListener(h, EVENT_CROP_START, i.cropstart), isFunction(i.cropmove) && removeListener(h, EVENT_CROP_MOVE, i.cropmove), isFunction(i.cropend) && removeListener(h, EVENT_CROP_END, i.cropend), isFunction(i.crop) && removeListener(h, EVENT_CROP, i.crop), isFunction(i.zoom) && removeListener(h, EVENT_ZOOM, i.zoom), removeListener(c, EVENT_POINTER_DOWN, this.onCropStart), i.zoomable && i.zoomOnWheel && removeListener(c, EVENT_WHEEL, this.onWheel, {
        passive: !1,
        capture: !0
      }), i.toggleDragModeOnDblclick && removeListener(c, EVENT_DBLCLICK, this.onDblclick), removeListener(h.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove), removeListener(h.ownerDocument, EVENT_POINTER_UP, this.onCropEnd), i.responsive && removeListener(window, EVENT_RESIZE, this.onResize)
    }
  },
  handlers = {
    resize: function() {
      if (!this.disabled) {
        var h = this.options,
          i = this.container,
          c = this.containerData,
          f = i.offsetWidth / c.width,
          l = i.offsetHeight / c.height,
          u = Math.abs(f - 1) > Math.abs(l - 1) ? f : l;
        if (u !== 1) {
          var x, y;
          h.restore && (x = this.getCanvasData(), y = this.getCropBoxData()), this.render(), h.restore && (this.setCanvasData(forEach(x, function(b, g) {
            x[g] = b * u
          })), this.setCropBoxData(forEach(y, function(b, g) {
            y[g] = b * u
          })))
        }
      }
    },
    dblclick: function() {
      this.disabled || this.options.dragMode === DRAG_MODE_NONE || this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP)
    },
    wheel: function(h) {
      var i = this,
        c = Number(this.options.wheelZoomRatio) || .1,
        f = 1;
      this.disabled || (h.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
        i.wheeling = !1
      }, 50), h.deltaY ? f = h.deltaY > 0 ? 1 : -1 : h.wheelDelta ? f = -h.wheelDelta / 120 : h.detail && (f = h.detail > 0 ? 1 : -1), this.zoom(-f * c, h)))
    },
    cropStart: function(h) {
      var i = h.buttons,
        c = h.button;
      if (!(this.disabled || (h.type === "mousedown" || h.type === "pointerdown" && h.pointerType === "mouse") && (isNumber(i) && i !== 1 || isNumber(c) && c !== 0 || h.ctrlKey))) {
        var f = this.options,
          l = this.pointers,
          u;
        h.changedTouches ? forEach(h.changedTouches, function(x) {
          l[x.identifier] = getPointer(x)
        }) : l[h.pointerId || 0] = getPointer(h), Object.keys(l).length > 1 && f.zoomable && f.zoomOnTouch ? u = ACTION_ZOOM : u = getData(h.target, DATA_ACTION), REGEXP_ACTIONS.test(u) && dispatchEvent(this.element, EVENT_CROP_START, {
          originalEvent: h,
          action: u
        }) !== !1 && (h.preventDefault(), this.action = u, this.cropping = !1, u === ACTION_CROP && (this.cropping = !0, addClass(this.dragBox, CLASS_MODAL)))
      }
    },
    cropMove: function(h) {
      var i = this.action;
      if (!(this.disabled || !i)) {
        var c = this.pointers;
        h.preventDefault(), dispatchEvent(this.element, EVENT_CROP_MOVE, {
          originalEvent: h,
          action: i
        }) !== !1 && (h.changedTouches ? forEach(h.changedTouches, function(f) {
          assign(c[f.identifier] || {}, getPointer(f, !0))
        }) : assign(c[h.pointerId || 0] || {}, getPointer(h, !0)), this.change(h))
      }
    },
    cropEnd: function(h) {
      if (!this.disabled) {
        var i = this.action,
          c = this.pointers;
        h.changedTouches ? forEach(h.changedTouches, function(f) {
          delete c[f.identifier]
        }) : delete c[h.pointerId || 0], i && (h.preventDefault(), Object.keys(c).length || (this.action = ""), this.cropping && (this.cropping = !1, toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal)), dispatchEvent(this.element, EVENT_CROP_END, {
          originalEvent: h,
          action: i
        }))
      }
    }
  },
  change = {
    change: function(h) {
      var i = this.options,
        c = this.canvasData,
        f = this.containerData,
        l = this.cropBoxData,
        u = this.pointers,
        x = this.action,
        y = i.aspectRatio,
        b = l.left,
        g = l.top,
        m = l.width,
        v = l.height,
        w = b + m,
        C = g + v,
        T = 0,
        E = 0,
        A = f.width,
        O = f.height,
        D = !0,
        B;
      !y && h.shiftKey && (y = m && v ? m / v : 1), this.limited && (T = l.minLeft, E = l.minTop, A = T + Math.min(f.width, c.width, c.left + c.width), O = E + Math.min(f.height, c.height, c.top + c.height));
      var N = u[Object.keys(u)[0]],
        _ = {
          x: N.endX - N.startX,
          y: N.endY - N.startY
        },
        S = function(P) {
          switch (P) {
            case ACTION_EAST:
              w + _.x > A && (_.x = A - w);
              break;
            case ACTION_WEST:
              b + _.x < T && (_.x = T - b);
              break;
            case ACTION_NORTH:
              g + _.y < E && (_.y = E - g);
              break;
            case ACTION_SOUTH:
              C + _.y > O && (_.y = O - C);
              break
          }
        };
      switch (x) {
        case ACTION_ALL:
          b += _.x, g += _.y;
          break;
        case ACTION_EAST:
          if (_.x >= 0 && (w >= A || y && (g <= E || C >= O))) {
            D = !1;
            break
          }
          S(ACTION_EAST), m += _.x, m < 0 && (x = ACTION_WEST, m = -m, b -= m), y && (v = m / y, g += (l.height - v) / 2);
          break;
        case ACTION_NORTH:
          if (_.y <= 0 && (g <= E || y && (b <= T || w >= A))) {
            D = !1;
            break
          }
          S(ACTION_NORTH), v -= _.y, g += _.y, v < 0 && (x = ACTION_SOUTH, v = -v, g -= v), y && (m = v * y, b += (l.width - m) / 2);
          break;
        case ACTION_WEST:
          if (_.x <= 0 && (b <= T || y && (g <= E || C >= O))) {
            D = !1;
            break
          }
          S(ACTION_WEST), m -= _.x, b += _.x, m < 0 && (x = ACTION_EAST, m = -m, b -= m), y && (v = m / y, g += (l.height - v) / 2);
          break;
        case ACTION_SOUTH:
          if (_.y >= 0 && (C >= O || y && (b <= T || w >= A))) {
            D = !1;
            break
          }
          S(ACTION_SOUTH), v += _.y, v < 0 && (x = ACTION_NORTH, v = -v, g -= v), y && (m = v * y, b += (l.width - m) / 2);
          break;
        case ACTION_NORTH_EAST:
          if (y) {
            if (_.y <= 0 && (g <= E || w >= A)) {
              D = !1;
              break
            }
            S(ACTION_NORTH), v -= _.y, g += _.y, m = v * y
          } else S(ACTION_NORTH), S(ACTION_EAST), _.x >= 0 ? w < A ? m += _.x : _.y <= 0 && g <= E && (D = !1) : m += _.x, _.y <= 0 ? g > E && (v -= _.y, g += _.y) : (v -= _.y, g += _.y);
          m < 0 && v < 0 ? (x = ACTION_SOUTH_WEST, v = -v, m = -m, g -= v, b -= m) : m < 0 ? (x = ACTION_NORTH_WEST, m = -m, b -= m) : v < 0 && (x = ACTION_SOUTH_EAST, v = -v, g -= v);
          break;
        case ACTION_NORTH_WEST:
          if (y) {
            if (_.y <= 0 && (g <= E || b <= T)) {
              D = !1;
              break
            }
            S(ACTION_NORTH), v -= _.y, g += _.y, m = v * y, b += l.width - m
          } else S(ACTION_NORTH), S(ACTION_WEST), _.x <= 0 ? b > T ? (m -= _.x, b += _.x) : _.y <= 0 && g <= E && (D = !1) : (m -= _.x, b += _.x), _.y <= 0 ? g > E && (v -= _.y, g += _.y) : (v -= _.y, g += _.y);
          m < 0 && v < 0 ? (x = ACTION_SOUTH_EAST, v = -v, m = -m, g -= v, b -= m) : m < 0 ? (x = ACTION_NORTH_EAST, m = -m, b -= m) : v < 0 && (x = ACTION_SOUTH_WEST, v = -v, g -= v);
          break;
        case ACTION_SOUTH_WEST:
          if (y) {
            if (_.x <= 0 && (b <= T || C >= O)) {
              D = !1;
              break
            }
            S(ACTION_WEST), m -= _.x, b += _.x, v = m / y
          } else S(ACTION_SOUTH), S(ACTION_WEST), _.x <= 0 ? b > T ? (m -= _.x, b += _.x) : _.y >= 0 && C >= O && (D = !1) : (m -= _.x, b += _.x), _.y >= 0 ? C < O && (v += _.y) : v += _.y;
          m < 0 && v < 0 ? (x = ACTION_NORTH_EAST, v = -v, m = -m, g -= v, b -= m) : m < 0 ? (x = ACTION_SOUTH_EAST, m = -m, b -= m) : v < 0 && (x = ACTION_NORTH_WEST, v = -v, g -= v);
          break;
        case ACTION_SOUTH_EAST:
          if (y) {
            if (_.x >= 0 && (w >= A || C >= O)) {
              D = !1;
              break
            }
            S(ACTION_EAST), m += _.x, v = m / y
          } else S(ACTION_SOUTH), S(ACTION_EAST), _.x >= 0 ? w < A ? m += _.x : _.y >= 0 && C >= O && (D = !1) : m += _.x, _.y >= 0 ? C < O && (v += _.y) : v += _.y;
          m < 0 && v < 0 ? (x = ACTION_NORTH_WEST, v = -v, m = -m, g -= v, b -= m) : m < 0 ? (x = ACTION_SOUTH_WEST, m = -m, b -= m) : v < 0 && (x = ACTION_NORTH_EAST, v = -v, g -= v);
          break;
        case ACTION_MOVE:
          this.move(_.x, _.y), D = !1;
          break;
        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(u), h), D = !1;
          break;
        case ACTION_CROP:
          if (!_.x || !_.y) {
            D = !1;
            break
          }
          B = getOffset(this.cropper), b = N.startX - B.left, g = N.startY - B.top, m = l.minWidth, v = l.minHeight, _.x > 0 ? x = _.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST : _.x < 0 && (b -= m, x = _.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST), _.y < 0 && (g -= v), this.cropped || (removeClass(this.cropBox, CLASS_HIDDEN), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
          break
      }
      D && (l.width = m, l.height = v, l.left = b, l.top = g, this.action = x, this.renderCropBox()), forEach(u, function(I) {
        I.startX = I.endX, I.startY = I.endY
      })
    }
  },
  methods = {
    crop: function() {
      return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && addClass(this.dragBox, CLASS_MODAL), removeClass(this.cropBox, CLASS_HIDDEN), this.setCropBoxData(this.initialCropBoxData)), this
    },
    reset: function() {
      return this.ready && !this.disabled && (this.imageData = assign({}, this.initialImageData), this.canvasData = assign({}, this.initialCanvasData), this.cropBoxData = assign({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this
    },
    clear: function() {
      return this.cropped && !this.disabled && (assign(this.cropBoxData, {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), removeClass(this.dragBox, CLASS_MODAL), addClass(this.cropBox, CLASS_HIDDEN)), this
    },
    replace: function(h) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return !this.disabled && h && (this.isImg && (this.element.src = h), i ? (this.url = h, this.image.src = h, this.ready && (this.viewBoxImage.src = h, forEach(this.previews, function(c) {
        c.getElementsByTagName("img")[0].src = h
      }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(h))), this
    },
    enable: function() {
      return this.ready && this.disabled && (this.disabled = !1, removeClass(this.cropper, CLASS_DISABLED)), this
    },
    disable: function() {
      return this.ready && !this.disabled && (this.disabled = !0, addClass(this.cropper, CLASS_DISABLED)), this
    },
    destroy: function() {
      var h = this.element;
      return h[NAMESPACE] ? (h[NAMESPACE] = void 0, this.isImg && this.replaced && (h.src = this.originalUrl), this.uncreate(), this) : this
    },
    move: function(h) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h,
        c = this.canvasData,
        f = c.left,
        l = c.top;
      return this.moveTo(isUndefined(h) ? h : f + Number(h), isUndefined(i) ? i : l + Number(i))
    },
    moveTo: function(h) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h,
        c = this.canvasData,
        f = !1;
      return h = Number(h), i = Number(i), this.ready && !this.disabled && this.options.movable && (isNumber(h) && (c.left = h, f = !0), isNumber(i) && (c.top = i, f = !0), f && this.renderCanvas(!0)), this
    },
    zoom: function(h, i) {
      var c = this.canvasData;
      return h = Number(h), h < 0 ? h = 1 / (1 - h) : h = 1 + h, this.zoomTo(c.width * h / c.naturalWidth, null, i)
    },
    zoomTo: function(h, i, c) {
      var f = this.options,
        l = this.canvasData,
        u = l.width,
        x = l.height,
        y = l.naturalWidth,
        b = l.naturalHeight;
      if (h = Number(h), h >= 0 && this.ready && !this.disabled && f.zoomable) {
        var g = y * h,
          m = b * h;
        if (dispatchEvent(this.element, EVENT_ZOOM, {
            ratio: h,
            oldRatio: u / y,
            originalEvent: c
          }) === !1) return this;
        if (c) {
          var v = this.pointers,
            w = getOffset(this.cropper),
            C = v && Object.keys(v).length ? getPointersCenter(v) : {
              pageX: c.pageX,
              pageY: c.pageY
            };
          l.left -= (g - u) * ((C.pageX - w.left - l.left) / u), l.top -= (m - x) * ((C.pageY - w.top - l.top) / x)
        } else isPlainObject(i) && isNumber(i.x) && isNumber(i.y) ? (l.left -= (g - u) * ((i.x - l.left) / u), l.top -= (m - x) * ((i.y - l.top) / x)) : (l.left -= (g - u) / 2, l.top -= (m - x) / 2);
        l.width = g, l.height = m, this.renderCanvas(!0)
      }
      return this
    },
    rotate: function(h) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(h))
    },
    rotateTo: function(h) {
      return h = Number(h), isNumber(h) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = h % 360, this.renderCanvas(!0, !0)), this
    },
    scaleX: function(h) {
      var i = this.imageData.scaleY;
      return this.scale(h, isNumber(i) ? i : 1)
    },
    scaleY: function(h) {
      var i = this.imageData.scaleX;
      return this.scale(isNumber(i) ? i : 1, h)
    },
    scale: function(h) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h,
        c = this.imageData,
        f = !1;
      return h = Number(h), i = Number(i), this.ready && !this.disabled && this.options.scalable && (isNumber(h) && (c.scaleX = h, f = !0), isNumber(i) && (c.scaleY = i, f = !0), f && this.renderCanvas(!0, !0)), this
    },
    getData: function() {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
        i = this.options,
        c = this.imageData,
        f = this.canvasData,
        l = this.cropBoxData,
        u;
      if (this.ready && this.cropped) {
        u = {
          x: l.left - f.left,
          y: l.top - f.top,
          width: l.width,
          height: l.height
        };
        var x = c.width / c.naturalWidth;
        if (forEach(u, function(g, m) {
            u[m] = g / x
          }), h) {
          var y = Math.round(u.y + u.height),
            b = Math.round(u.x + u.width);
          u.x = Math.round(u.x), u.y = Math.round(u.y), u.width = b - u.x, u.height = y - u.y
        }
      } else u = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      return i.rotatable && (u.rotate = c.rotate || 0), i.scalable && (u.scaleX = c.scaleX || 1, u.scaleY = c.scaleY || 1), u
    },
    setData: function(h) {
      var i = this.options,
        c = this.imageData,
        f = this.canvasData,
        l = {};
      if (this.ready && !this.disabled && isPlainObject(h)) {
        var u = !1;
        i.rotatable && isNumber(h.rotate) && h.rotate !== c.rotate && (c.rotate = h.rotate, u = !0), i.scalable && (isNumber(h.scaleX) && h.scaleX !== c.scaleX && (c.scaleX = h.scaleX, u = !0), isNumber(h.scaleY) && h.scaleY !== c.scaleY && (c.scaleY = h.scaleY, u = !0)), u && this.renderCanvas(!0, !0);
        var x = c.width / c.naturalWidth;
        isNumber(h.x) && (l.left = h.x * x + f.left), isNumber(h.y) && (l.top = h.y * x + f.top), isNumber(h.width) && (l.width = h.width * x), isNumber(h.height) && (l.height = h.height * x), this.setCropBoxData(l)
      }
      return this
    },
    getContainerData: function() {
      return this.ready ? assign({}, this.containerData) : {}
    },
    getImageData: function() {
      return this.sized ? assign({}, this.imageData) : {}
    },
    getCanvasData: function() {
      var h = this.canvasData,
        i = {};
      return this.ready && forEach(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(c) {
        i[c] = h[c]
      }), i
    },
    setCanvasData: function(h) {
      var i = this.canvasData,
        c = i.aspectRatio;
      return this.ready && !this.disabled && isPlainObject(h) && (isNumber(h.left) && (i.left = h.left), isNumber(h.top) && (i.top = h.top), isNumber(h.width) ? (i.width = h.width, i.height = h.width / c) : isNumber(h.height) && (i.height = h.height, i.width = h.height * c), this.renderCanvas(!0)), this
    },
    getCropBoxData: function() {
      var h = this.cropBoxData,
        i;
      return this.ready && this.cropped && (i = {
        left: h.left,
        top: h.top,
        width: h.width,
        height: h.height
      }), i || {}
    },
    setCropBoxData: function(h) {
      var i = this.cropBoxData,
        c = this.options.aspectRatio,
        f, l;
      return this.ready && this.cropped && !this.disabled && isPlainObject(h) && (isNumber(h.left) && (i.left = h.left), isNumber(h.top) && (i.top = h.top), isNumber(h.width) && h.width !== i.width && (f = !0, i.width = h.width), isNumber(h.height) && h.height !== i.height && (l = !0, i.height = h.height), c && (f ? i.height = i.width / c : l && (i.width = i.height * c)), this.renderCropBox()), this
    },
    getCroppedCanvas: function() {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!this.ready || !window.HTMLCanvasElement) return null;
      var i = this.canvasData,
        c = getSourceCanvas(this.image, this.imageData, i, h);
      if (!this.cropped) return c;
      var f = this.getData(h.rounded),
        l = f.x,
        u = f.y,
        x = f.width,
        y = f.height,
        b = c.width / Math.floor(i.naturalWidth);
      b !== 1 && (l *= b, u *= b, x *= b, y *= b);
      var g = x / y,
        m = getAdjustedSizes({
          aspectRatio: g,
          width: h.maxWidth || 1 / 0,
          height: h.maxHeight || 1 / 0
        }),
        v = getAdjustedSizes({
          aspectRatio: g,
          width: h.minWidth || 0,
          height: h.minHeight || 0
        }, "cover"),
        w = getAdjustedSizes({
          aspectRatio: g,
          width: h.width || (b !== 1 ? c.width : x),
          height: h.height || (b !== 1 ? c.height : y)
        }),
        C = w.width,
        T = w.height;
      C = Math.min(m.width, Math.max(v.width, C)), T = Math.min(m.height, Math.max(v.height, T));
      var E = document.createElement("canvas"),
        A = E.getContext("2d");
      E.width = normalizeDecimalNumber(C), E.height = normalizeDecimalNumber(T), A.fillStyle = h.fillColor || "transparent", A.fillRect(0, 0, C, T);
      var O = h.imageSmoothingEnabled,
        D = O === void 0 ? !0 : O,
        B = h.imageSmoothingQuality;
      A.imageSmoothingEnabled = D, B && (A.imageSmoothingQuality = B);
      var N = c.width,
        _ = c.height,
        S = l,
        I = u,
        P, R, L, j, z, k;
      S <= -x || S > N ? (S = 0, P = 0, L = 0, z = 0) : S <= 0 ? (L = -S, S = 0, P = Math.min(N, x + S), z = P) : S <= N && (L = 0, P = Math.min(x, N - S), z = P), P <= 0 || I <= -y || I > _ ? (I = 0, R = 0, j = 0, k = 0) : I <= 0 ? (j = -I, I = 0, R = Math.min(_, y + I), k = R) : I <= _ && (j = 0, R = Math.min(y, _ - I), k = R);
      var F = [S, I, P, R];
      if (z > 0 && k > 0) {
        var U = C / x;
        F.push(L * U, j * U, z * U, k * U)
      }
      return A.drawImage.apply(A, [c].concat(_toConsumableArray(F.map(function(H) {
        return Math.floor(normalizeDecimalNumber(H))
      })))), E
    },
    setAspectRatio: function(h) {
      var i = this.options;
      return !this.disabled && !isUndefined(h) && (i.aspectRatio = Math.max(0, h) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this
    },
    setDragMode: function(h) {
      var i = this.options,
        c = this.dragBox,
        f = this.face;
      if (this.ready && !this.disabled) {
        var l = h === DRAG_MODE_CROP,
          u = i.movable && h === DRAG_MODE_MOVE;
        h = l || u ? h : DRAG_MODE_NONE, i.dragMode = h, setData(c, DATA_ACTION, h), toggleClass(c, CLASS_CROP, l), toggleClass(c, CLASS_MOVE, u), i.cropBoxMovable || (setData(f, DATA_ACTION, h), toggleClass(f, CLASS_CROP, l), toggleClass(f, CLASS_MOVE, u))
      }
      return this
    }
  },
  AnotherCropper = WINDOW.Cropper,
  Cropper = function() {
    function d(h) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (_classCallCheck(this, d), !h || !REGEXP_TAG_NAME.test(h.tagName)) throw new Error("The first argument is required and must be an <img> or <canvas> element.");
      this.element = h, this.options = assign({}, DEFAULTS, isPlainObject(i) && i), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init()
    }
    return _createClass(d, [{
      key: "init",
      value: function() {
        var i = this.element,
          c = i.tagName.toLowerCase(),
          f;
        if (!i[NAMESPACE]) {
          if (i[NAMESPACE] = this, c === "img") {
            if (this.isImg = !0, f = i.getAttribute("src") || "", this.originalUrl = f, !f) return;
            f = i.src
          } else c === "canvas" && window.HTMLCanvasElement && (f = i.toDataURL());
          this.load(f)
        }
      }
    }, {
      key: "load",
      value: function(i) {
        var c = this;
        if (i) {
          this.url = i, this.imageData = {};
          var f = this.element,
            l = this.options;
          if (!l.rotatable && !l.scalable && (l.checkOrientation = !1), !l.checkOrientation || !window.ArrayBuffer) {
            this.clone();
            return
          }
          if (REGEXP_DATA_URL.test(i)) {
            REGEXP_DATA_URL_JPEG.test(i) ? this.read(dataURLToArrayBuffer(i)) : this.clone();
            return
          }
          var u = new XMLHttpRequest,
            x = this.clone.bind(this);
          this.reloading = !0, this.xhr = u, u.onabort = x, u.onerror = x, u.ontimeout = x, u.onprogress = function() {
            u.getResponseHeader("content-type") !== MIME_TYPE_JPEG && u.abort()
          }, u.onload = function() {
            c.read(u.response)
          }, u.onloadend = function() {
            c.reloading = !1, c.xhr = null
          }, l.checkCrossOrigin && isCrossOriginURL(i) && f.crossOrigin && (i = addTimestamp(i)), u.open("GET", i, !0), u.responseType = "arraybuffer", u.withCredentials = f.crossOrigin === "use-credentials", u.send()
        }
      }
    }, {
      key: "read",
      value: function(i) {
        var c = this.options,
          f = this.imageData,
          l = resetAndGetOrientation(i),
          u = 0,
          x = 1,
          y = 1;
        if (l > 1) {
          this.url = arrayBufferToDataURL(i, MIME_TYPE_JPEG);
          var b = parseOrientation(l);
          u = b.rotate, x = b.scaleX, y = b.scaleY
        }
        c.rotatable && (f.rotate = u), c.scalable && (f.scaleX = x, f.scaleY = y), this.clone()
      }
    }, {
      key: "clone",
      value: function() {
        var i = this.element,
          c = this.url,
          f = i.crossOrigin,
          l = c;
        this.options.checkCrossOrigin && isCrossOriginURL(c) && (f || (f = "anonymous"), l = addTimestamp(c)), this.crossOrigin = f, this.crossOriginUrl = l;
        var u = document.createElement("img");
        f && (u.crossOrigin = f), u.src = l || c, u.alt = i.alt || "The image to crop", this.image = u, u.onload = this.start.bind(this), u.onerror = this.stop.bind(this), addClass(u, CLASS_HIDE), i.parentNode.insertBefore(u, i.nextSibling)
      }
    }, {
      key: "start",
      value: function() {
        var i = this,
          c = this.image;
        c.onload = null, c.onerror = null, this.sizing = !0;
        var f = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent),
          l = function(b, g) {
            assign(i.imageData, {
              naturalWidth: b,
              naturalHeight: g,
              aspectRatio: b / g
            }), i.initialImageData = assign({}, i.imageData), i.sizing = !1, i.sized = !0, i.build()
          };
        if (c.naturalWidth && !f) {
          l(c.naturalWidth, c.naturalHeight);
          return
        }
        var u = document.createElement("img"),
          x = document.body || document.documentElement;
        this.sizingImage = u, u.onload = function() {
          l(u.width, u.height), f || x.removeChild(u)
        }, u.src = c.src, f || (u.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", x.appendChild(u))
      }
    }, {
      key: "stop",
      value: function() {
        var i = this.image;
        i.onload = null, i.onerror = null, i.parentNode.removeChild(i), this.image = null
      }
    }, {
      key: "build",
      value: function() {
        if (!(!this.sized || this.ready)) {
          var i = this.element,
            c = this.options,
            f = this.image,
            l = i.parentNode,
            u = document.createElement("div");
          u.innerHTML = TEMPLATE;
          var x = u.querySelector(".".concat(NAMESPACE, "-container")),
            y = x.querySelector(".".concat(NAMESPACE, "-canvas")),
            b = x.querySelector(".".concat(NAMESPACE, "-drag-box")),
            g = x.querySelector(".".concat(NAMESPACE, "-crop-box")),
            m = g.querySelector(".".concat(NAMESPACE, "-face"));
          this.container = l, this.cropper = x, this.canvas = y, this.dragBox = b, this.cropBox = g, this.viewBox = x.querySelector(".".concat(NAMESPACE, "-view-box")), this.face = m, y.appendChild(f), addClass(i, CLASS_HIDDEN), l.insertBefore(x, i.nextSibling), removeClass(f, CLASS_HIDE), this.initPreview(), this.bind(), c.initialAspectRatio = Math.max(0, c.initialAspectRatio) || NaN, c.aspectRatio = Math.max(0, c.aspectRatio) || NaN, c.viewMode = Math.max(0, Math.min(3, Math.round(c.viewMode))) || 0, addClass(g, CLASS_HIDDEN), c.guides || addClass(g.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN), c.center || addClass(g.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN), c.background && addClass(x, "".concat(NAMESPACE, "-bg")), c.highlight || addClass(m, CLASS_INVISIBLE), c.cropBoxMovable && (addClass(m, CLASS_MOVE), setData(m, DATA_ACTION, ACTION_ALL)), c.cropBoxResizable || (addClass(g.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN), addClass(g.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN)), this.render(), this.ready = !0, this.setDragMode(c.dragMode), c.autoCrop && this.crop(), this.setData(c.data), isFunction(c.ready) && addListener(i, EVENT_READY, c.ready, {
            once: !0
          }), dispatchEvent(i, EVENT_READY)
        }
      }
    }, {
      key: "unbuild",
      value: function() {
        if (this.ready) {
          this.ready = !1, this.unbind(), this.resetPreview();
          var i = this.cropper.parentNode;
          i && i.removeChild(this.cropper), removeClass(this.element, CLASS_HIDDEN)
        }
      }
    }, {
      key: "uncreate",
      value: function() {
        this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop()
      }
    }], [{
      key: "noConflict",
      value: function() {
        return window.Cropper = AnotherCropper, d
      }
    }, {
      key: "setDefaults",
      value: function(i) {
        assign(DEFAULTS, isPlainObject(i) && i)
      }
    }])
  }();
assign(Cropper.prototype, render, preview, events, handlers, change, methods);
var lib$1 = {},
  gif$1 = {},
  lib = {};
Object.defineProperty(lib, "__esModule", {
  value: !0
});
lib.loop = lib.conditional = lib.parse = void 0;
var parse = function d(h, i) {
  var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : c;
  if (Array.isArray(i)) i.forEach(function(u) {
    return d(h, u, c, f)
  });
  else if (typeof i == "function") i(h, c, f, d);
  else {
    var l = Object.keys(i)[0];
    Array.isArray(i[l]) ? (f[l] = {}, d(h, i[l], c, f[l])) : f[l] = i[l](h, c, f, d)
  }
  return c
};
lib.parse = parse;
var conditional = function(h, i) {
  return function(c, f, l, u) {
    i(c, f, l) && u(c, h, f, l)
  }
};
lib.conditional = conditional;
var loop = function(h, i) {
  return function(c, f, l, u) {
    for (var x = [], y = c.pos; i(c, f, l);) {
      var b = {};
      if (u(c, h, f, b), c.pos === y) break;
      y = c.pos, x.push(b)
    }
    return x
  }
};
lib.loop = loop;
var uint8 = {};
Object.defineProperty(uint8, "__esModule", {
  value: !0
});
uint8.readBits = uint8.readArray = uint8.readUnsigned = uint8.readString = uint8.peekBytes = uint8.readBytes = uint8.peekByte = uint8.readByte = uint8.buildStream = void 0;
var buildStream = function(h) {
  return {
    data: h,
    pos: 0
  }
};
uint8.buildStream = buildStream;
var readByte = function() {
  return function(h) {
    return h.data[h.pos++]
  }
};
uint8.readByte = readByte;
var peekByte = function() {
  var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return function(i) {
    return i.data[i.pos + h]
  }
};
uint8.peekByte = peekByte;
var readBytes = function(h) {
  return function(i) {
    return i.data.subarray(i.pos, i.pos += h)
  }
};
uint8.readBytes = readBytes;
var peekBytes = function(h) {
  return function(i) {
    return i.data.subarray(i.pos, i.pos + h)
  }
};
uint8.peekBytes = peekBytes;
var readString = function(h) {
  return function(i) {
    return Array.from(readBytes(h)(i)).map(function(c) {
      return String.fromCharCode(c)
    }).join("")
  }
};
uint8.readString = readString;
var readUnsigned = function(h) {
  return function(i) {
    var c = readBytes(2)(i);
    return h ? (c[1] << 8) + c[0] : (c[0] << 8) + c[1]
  }
};
uint8.readUnsigned = readUnsigned;
var readArray = function(h, i) {
  return function(c, f, l) {
    for (var u = typeof i == "function" ? i(c, f, l) : i, x = readBytes(h), y = new Array(u), b = 0; b < u; b++) y[b] = x(c);
    return y
  }
};
uint8.readArray = readArray;
var subBitsTotal = function(h, i, c) {
    for (var f = 0, l = 0; l < c; l++) f += h[i + l] && Math.pow(2, c - l - 1);
    return f
  },
  readBits = function(h) {
    return function(i) {
      for (var c = readByte()(i), f = new Array(8), l = 0; l < 8; l++) f[7 - l] = !!(c & 1 << l);
      return Object.keys(h).reduce(function(u, x) {
        var y = h[x];
        return y.length ? u[x] = subBitsTotal(f, y.index, y.length) : u[x] = f[y.index], u
      }, {})
    }
  };
uint8.readBits = readBits;
(function(d) {
  Object.defineProperty(d, "__esModule", {
    value: !0
  }), d.default = void 0;
  var h = lib,
    i = uint8,
    c = {
      blocks: function(v) {
        for (var w = 0, C = [], T = v.data.length, E = 0, A = (0, i.readByte)()(v); A !== w && A; A = (0, i.readByte)()(v)) {
          if (v.pos + A >= T) {
            var O = T - v.pos;
            C.push((0, i.readBytes)(O)(v)), E += O;
            break
          }
          C.push((0, i.readBytes)(A)(v)), E += A
        }
        for (var D = new Uint8Array(E), B = 0, N = 0; N < C.length; N++) D.set(C[N], B), B += C[N].length;
        return D
      }
    },
    f = (0, h.conditional)({
      gce: [{
        codes: (0, i.readBytes)(2)
      }, {
        byteSize: (0, i.readByte)()
      }, {
        extras: (0, i.readBits)({
          future: {
            index: 0,
            length: 3
          },
          disposal: {
            index: 3,
            length: 3
          },
          userInput: {
            index: 6
          },
          transparentColorGiven: {
            index: 7
          }
        })
      }, {
        delay: (0, i.readUnsigned)(!0)
      }, {
        transparentColorIndex: (0, i.readByte)()
      }, {
        terminator: (0, i.readByte)()
      }]
    }, function(m) {
      var v = (0, i.peekBytes)(2)(m);
      return v[0] === 33 && v[1] === 249
    }),
    l = (0, h.conditional)({
      image: [{
        code: (0, i.readByte)()
      }, {
        descriptor: [{
          left: (0, i.readUnsigned)(!0)
        }, {
          top: (0, i.readUnsigned)(!0)
        }, {
          width: (0, i.readUnsigned)(!0)
        }, {
          height: (0, i.readUnsigned)(!0)
        }, {
          lct: (0, i.readBits)({
            exists: {
              index: 0
            },
            interlaced: {
              index: 1
            },
            sort: {
              index: 2
            },
            future: {
              index: 3,
              length: 2
            },
            size: {
              index: 5,
              length: 3
            }
          })
        }]
      }, (0, h.conditional)({
        lct: (0, i.readArray)(3, function(m, v, w) {
          return Math.pow(2, w.descriptor.lct.size + 1)
        })
      }, function(m, v, w) {
        return w.descriptor.lct.exists
      }), {
        data: [{
          minCodeSize: (0, i.readByte)()
        }, c]
      }]
    }, function(m) {
      return (0, i.peekByte)()(m) === 44
    }),
    u = (0, h.conditional)({
      text: [{
        codes: (0, i.readBytes)(2)
      }, {
        blockSize: (0, i.readByte)()
      }, {
        preData: function(v, w, C) {
          return (0, i.readBytes)(C.text.blockSize)(v)
        }
      }, c]
    }, function(m) {
      var v = (0, i.peekBytes)(2)(m);
      return v[0] === 33 && v[1] === 1
    }),
    x = (0, h.conditional)({
      application: [{
        codes: (0, i.readBytes)(2)
      }, {
        blockSize: (0, i.readByte)()
      }, {
        id: function(v, w, C) {
          return (0, i.readString)(C.blockSize)(v)
        }
      }, c]
    }, function(m) {
      var v = (0, i.peekBytes)(2)(m);
      return v[0] === 33 && v[1] === 255
    }),
    y = (0, h.conditional)({
      comment: [{
        codes: (0, i.readBytes)(2)
      }, c]
    }, function(m) {
      var v = (0, i.peekBytes)(2)(m);
      return v[0] === 33 && v[1] === 254
    }),
    b = [{
      header: [{
        signature: (0, i.readString)(3)
      }, {
        version: (0, i.readString)(3)
      }]
    }, {
      lsd: [{
        width: (0, i.readUnsigned)(!0)
      }, {
        height: (0, i.readUnsigned)(!0)
      }, {
        gct: (0, i.readBits)({
          exists: {
            index: 0
          },
          resolution: {
            index: 1,
            length: 3
          },
          sort: {
            index: 4
          },
          size: {
            index: 5,
            length: 3
          }
        })
      }, {
        backgroundColorIndex: (0, i.readByte)()
      }, {
        pixelAspectRatio: (0, i.readByte)()
      }]
    }, (0, h.conditional)({
      gct: (0, i.readArray)(3, function(m, v) {
        return Math.pow(2, v.lsd.gct.size + 1)
      })
    }, function(m, v) {
      return v.lsd.gct.exists
    }), {
      frames: (0, h.loop)([f, x, y, l, u], function(m) {
        var v = (0, i.peekByte)()(m);
        return v === 33 || v === 44
      })
    }],
    g = b;
  d.default = g
})(gif$1);
var deinterlace$1 = {};
Object.defineProperty(deinterlace$1, "__esModule", {
  value: !0
});
deinterlace$1.deinterlace = void 0;
var deinterlace = function(h, i) {
  for (var c = new Array(h.length), f = h.length / i, l = function(v, w) {
      var C = h.slice(w * i, (w + 1) * i);
      c.splice.apply(c, [v * i, i].concat(C))
    }, u = [0, 4, 2, 1], x = [8, 8, 4, 2], y = 0, b = 0; b < 4; b++)
    for (var g = u[b]; g < f; g += x[b]) l(g, y), y++;
  return c
};
deinterlace$1.deinterlace = deinterlace;
var lzw$1 = {};
Object.defineProperty(lzw$1, "__esModule", {
  value: !0
});
lzw$1.lzw = void 0;
var lzw = function(h, i, c) {
  var f = 4096,
    l = -1,
    u = c,
    x, y, b, g, m, v, w, _, C, T, N, E, S, I, R, P, A = new Array(c),
    O = new Array(f),
    D = new Array(f),
    B = new Array(f + 1);
  for (E = h, y = 1 << E, m = y + 1, x = y + 2, w = l, g = E + 1, b = (1 << g) - 1, C = 0; C < y; C++) O[C] = 0, D[C] = C;
  var N, _, S, I, P, R;
  for (N = _ = S = I = P = R = 0, T = 0; T < u;) {
    if (I === 0) {
      if (_ < g) {
        N += i[R] << _, _ += 8, R++;
        continue
      }
      if (C = N & b, N >>= g, _ -= g, C > x || C == m) break;
      if (C == y) {
        g = E + 1, b = (1 << g) - 1, x = y + 2, w = l;
        continue
      }
      if (w == l) {
        B[I++] = D[C], w = C, S = C;
        continue
      }
      for (v = C, C == x && (B[I++] = S, C = w); C > y;) B[I++] = D[C], C = O[C];
      S = D[C] & 255, B[I++] = S, x < f && (O[x] = w, D[x] = S, x++, !(x & b) && x < f && (g++, b += x)), w = v
    }
    I--, A[P++] = B[I], T++
  }
  for (T = P; T < u; T++) A[T] = 0;
  return A
};
lzw$1.lzw = lzw;
Object.defineProperty(lib$1, "__esModule", {
  value: !0
});
var decompressFrames_1 = lib$1.decompressFrames = lib$1.decompressFrame = parseGIF_1 = lib$1.parseGIF = void 0,
  _gif = _interopRequireDefault(gif$1),
  _jsBinarySchemaParser = lib,
  _uint = uint8,
  _deinterlace = deinterlace$1,
  _lzw = lzw$1;

function _interopRequireDefault(d) {
  return d && d.__esModule ? d : {
    default: d
  }
}
var parseGIF = function(h) {
    var i = new Uint8Array(h);
    return (0, _jsBinarySchemaParser.parse)((0, _uint.buildStream)(i), _gif.default)
  },
  parseGIF_1 = lib$1.parseGIF = parseGIF,
  generatePatch = function(h) {
    for (var i = h.pixels.length, c = new Uint8ClampedArray(i * 4), f = 0; f < i; f++) {
      var l = f * 4,
        u = h.pixels[f],
        x = h.colorTable[u] || [0, 0, 0];
      c[l] = x[0], c[l + 1] = x[1], c[l + 2] = x[2], c[l + 3] = u !== h.transparentIndex ? 255 : 0
    }
    return c
  },
  decompressFrame = function(h, i, c) {
    if (!h.image) {
      console.warn("gif frame does not have associated image.");
      return
    }
    var f = h.image,
      l = f.descriptor.width * f.descriptor.height,
      u = (0, _lzw.lzw)(f.data.minCodeSize, f.data.blocks, l);
    f.descriptor.lct.interlaced && (u = (0, _deinterlace.deinterlace)(u, f.descriptor.width));
    var x = {
      pixels: u,
      dims: {
        top: h.image.descriptor.top,
        left: h.image.descriptor.left,
        width: h.image.descriptor.width,
        height: h.image.descriptor.height
      }
    };
    return f.descriptor.lct && f.descriptor.lct.exists ? x.colorTable = f.lct : x.colorTable = i, h.gce && (x.delay = (h.gce.delay || 10) * 10, x.disposalType = h.gce.extras.disposal, h.gce.extras.transparentColorGiven && (x.transparentIndex = h.gce.transparentColorIndex)), c && (x.patch = generatePatch(x)), x
  };
lib$1.decompressFrame = decompressFrame;
var decompressFrames = function(h, i) {
  return h.frames.filter(function(c) {
    return c.image
  }).map(function(c) {
    return decompressFrame(c, h.gct, i)
  })
};
decompressFrames_1 = lib$1.decompressFrames = decompressFrames;
let a$1 = class {
  constructor(h) {
    M(this, "url");
    M(this, "parseGIF");
    M(this, "validateAndFixFrame", h => {
      let i = null;
      for (const c of h.frames) i = c.gce ? c.gce : i, "image" in c && !("gce" in c) && (c.gce = i)
    });
    this.url = h
  }
  async decode() {
    const h = await this.fetchImageData(this.url);
    return this.parseGIF = parseGIF_1(h), this.validateAndFixFrame(this.parseGIF), this.parseGIF
  }
  async decompressFrames() {
    this.parseGIF || await this.decode();
    const h = await decompressFrames_1(this.parseGIF, !0);
    return {
      frames: this.generate2ImageData(h),
      delays: h.map(i => i.delay),
      parsedFrames: h
    }
  }
  generate2ImageData(h) {
    return h.map(i => {
      const c = i == null ? void 0 : i.dims,
        f = new ImageData(c.width, c.height);
      return f.data.set(i.patch), f
    })
  }
  generate2ImageDataWithPixelsModified(h, i) {
    return h.map((c, f) => {
      i[f];
      const l = this.parseGIF.lsd,
        u = new ImageData(l.width, l.height);
      return u.data.set(new Uint8ClampedArray(c)), u
    })
  }
  fetchImageData(h) {
    return new Promise((i, c) => {
      const f = new XMLHttpRequest;
      f.open("GET", h, !0), f.responseType = "arraybuffer", f.onload = l => {
        if (!(l.target instanceof XMLHttpRequest)) return;
        if (l.target.status !== 200 && l.target.status !== 304) return void c("Status Error: " + l.target.status);
        let u = l.target.response;
        u.toString().indexOf("ArrayBuffer") > 0 && (u = new Uint8Array(u)), i(u)
      }, f.onerror = l => {
        c(l)
      }, f.send()
    })
  }
  handlePixels(h) {
    const i = this.parseGIF.lsd,
      c = i.width * i.height * 4,
      f = [];
    for (let l = 0; l < h.length; ++l) {
      const u = h[l],
        x = l === 0 || h[l - 1].disposalType === 2 ? new Uint8ClampedArray(c) : f[l - 1].slice();
      f.push(this.putPixels(x, u, i))
    }
    return f
  }
  putPixels(h, i, c) {
    if (!i.dims) return h;
    const {
      width: f,
      height: l,
      top: u,
      left: x
    } = i.dims, y = u * c.width + x;
    for (let b = 0; b < l; b++)
      for (let g = 0; g < f; g++) {
        const m = b * f + g,
          v = i.pixels[m],
          w = y + b * c.width + g,
          C = i.colorTable[v] || [0, 0, 0];
        v === i.transparentIndex ? (h[4 * w] = 0, h[4 * w + 1] = 0, h[4 * w + 2] = 0, h[4 * w + 3] = 0) : (h[4 * w] = C[0], h[4 * w + 1] = C[1], h[4 * w + 2] = C[2], h[4 * w + 3] = 255)
      }
    return h
  }
};
var t$2 = `(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){var NeuQuant=require("./TypedNeuQuant.js");var LZWEncoder=require("./LZWEncoder.js");function ByteArray(){this.page=-1;this.pages=[];this.newPage()}ByteArray.pageSize=4096;ByteArray.charMap={};for(var i=0;i<256;i++)ByteArray.charMap[i]=String.fromCharCode(i);ByteArray.prototype.newPage=function(){this.pages[++this.page]=new Uint8Array(ByteArray.pageSize);this.cursor=0};ByteArray.prototype.getData=function(){var rv="";for(var p=0;p<this.pages.length;p++){for(var i=0;i<ByteArray.pageSize;i++){rv+=ByteArray.charMap[this.pages[p][i]]}}return rv};ByteArray.prototype.writeByte=function(val){if(this.cursor>=ByteArray.pageSize)this.newPage();this.pages[this.page][this.cursor++]=val};ByteArray.prototype.writeUTFBytes=function(string){for(var l=string.length,i=0;i<l;i++)this.writeByte(string.charCodeAt(i))};ByteArray.prototype.writeBytes=function(array,offset,length){for(var l=length||array.length,i=offset||0;i<l;i++)this.writeByte(array[i])};function GIFEncoder(width,height){this.width=~~width;this.height=~~height;this.transparent=null;this.transIndex=0;this.repeat=-1;this.delay=0;this.image=null;this.pixels=null;this.indexedPixels=null;this.colorDepth=null;this.colorTab=null;this.neuQuant=null;this.usedEntry=new Array;this.palSize=7;this.dispose=-1;this.firstFrame=true;this.sample=10;this.dither=false;this.globalPalette=false;this.out=new ByteArray}GIFEncoder.prototype.setDelay=function(milliseconds){this.delay=Math.round(milliseconds/10)};GIFEncoder.prototype.setFrameRate=function(fps){this.delay=Math.round(100/fps)};GIFEncoder.prototype.setDispose=function(disposalCode){if(disposalCode>=0)this.dispose=disposalCode};GIFEncoder.prototype.setRepeat=function(repeat){this.repeat=repeat};GIFEncoder.prototype.setTransparent=function(color){this.transparent=color};GIFEncoder.prototype.addFrame=function(imageData){this.image=imageData;this.colorTab=this.globalPalette&&this.globalPalette.slice?this.globalPalette:null;this.getImagePixels();this.analyzePixels();if(this.globalPalette===true)this.globalPalette=this.colorTab;if(this.firstFrame){this.writeLSD();this.writePalette();if(this.repeat>=0){this.writeNetscapeExt()}}this.writeGraphicCtrlExt();this.writeImageDesc();if(!this.firstFrame&&!this.globalPalette)this.writePalette();this.writePixels();this.firstFrame=false};GIFEncoder.prototype.finish=function(){this.out.writeByte(59)};GIFEncoder.prototype.setQuality=function(quality){if(quality<1)quality=1;this.sample=quality};GIFEncoder.prototype.setDither=function(dither){if(dither===true)dither="FloydSteinberg";this.dither=dither};GIFEncoder.prototype.setGlobalPalette=function(palette){this.globalPalette=palette};GIFEncoder.prototype.getGlobalPalette=function(){return this.globalPalette&&this.globalPalette.slice&&this.globalPalette.slice(0)||this.globalPalette};GIFEncoder.prototype.writeHeader=function(){this.out.writeUTFBytes("GIF89a")};GIFEncoder.prototype.analyzePixels=function(){if(!this.colorTab){this.neuQuant=new NeuQuant(this.pixels,this.sample);this.neuQuant.buildColormap();this.colorTab=this.neuQuant.getColormap()}if(this.dither){this.ditherPixels(this.dither.replace("-serpentine",""),this.dither.match(/-serpentine/)!==null)}else{this.indexPixels()}this.pixels=null;this.colorDepth=8;this.palSize=7;if(this.transparent!==null){this.transIndex=this.findClosest(this.transparent,true)}};GIFEncoder.prototype.indexPixels=function(imgq){var nPix=this.pixels.length/3;this.indexedPixels=new Uint8Array(nPix);var k=0;for(var j=0;j<nPix;j++){var index=this.findClosestRGB(this.pixels[k++]&255,this.pixels[k++]&255,this.pixels[k++]&255);this.usedEntry[index]=true;this.indexedPixels[j]=index}};GIFEncoder.prototype.ditherPixels=function(kernel,serpentine){var kernels={FalseFloydSteinberg:[[3/8,1,0],[3/8,0,1],[2/8,1,1]],FloydSteinberg:[[7/16,1,0],[3/16,-1,1],[5/16,0,1],[1/16,1,1]],Stucki:[[8/42,1,0],[4/42,2,0],[2/42,-2,1],[4/42,-1,1],[8/42,0,1],[4/42,1,1],[2/42,2,1],[1/42,-2,2],[2/42,-1,2],[4/42,0,2],[2/42,1,2],[1/42,2,2]],Atkinson:[[1/8,1,0],[1/8,2,0],[1/8,-1,1],[1/8,0,1],[1/8,1,1],[1/8,0,2]]};if(!kernel||!kernels[kernel]){throw"Unknown dithering kernel: "+kernel}var ds=kernels[kernel];var index=0,height=this.height,width=this.width,data=this.pixels;var direction=serpentine?-1:1;this.indexedPixels=new Uint8Array(this.pixels.length/3);for(var y=0;y<height;y++){if(serpentine)direction=direction*-1;for(var x=direction==1?0:width-1,xend=direction==1?width:0;x!==xend;x+=direction){index=y*width+x;var idx=index*3;var r1=data[idx];var g1=data[idx+1];var b1=data[idx+2];idx=this.findClosestRGB(r1,g1,b1);this.usedEntry[idx]=true;this.indexedPixels[index]=idx;idx*=3;var r2=this.colorTab[idx];var g2=this.colorTab[idx+1];var b2=this.colorTab[idx+2];var er=r1-r2;var eg=g1-g2;var eb=b1-b2;for(var i=direction==1?0:ds.length-1,end=direction==1?ds.length:0;i!==end;i+=direction){var x1=ds[i][1];var y1=ds[i][2];if(x1+x>=0&&x1+x<width&&y1+y>=0&&y1+y<height){var d=ds[i][0];idx=index+x1+y1*width;idx*=3;data[idx]=Math.max(0,Math.min(255,data[idx]+er*d));data[idx+1]=Math.max(0,Math.min(255,data[idx+1]+eg*d));data[idx+2]=Math.max(0,Math.min(255,data[idx+2]+eb*d))}}}}};GIFEncoder.prototype.findClosest=function(c,used){return this.findClosestRGB((c&16711680)>>16,(c&65280)>>8,c&255,used)};GIFEncoder.prototype.findClosestRGB=function(r,g,b,used){if(this.colorTab===null)return-1;if(this.neuQuant&&!used){return this.neuQuant.lookupRGB(r,g,b)}var c=b|g<<8|r<<16;var minpos=0;var dmin=256*256*256;var len=this.colorTab.length;for(var i=0,index=0;i<len;index++){var dr=r-(this.colorTab[i++]&255);var dg=g-(this.colorTab[i++]&255);var db=b-(this.colorTab[i++]&255);var d=dr*dr+dg*dg+db*db;if((!used||this.usedEntry[index])&&d<dmin){dmin=d;minpos=index}}return minpos};GIFEncoder.prototype.getImagePixels=function(){var w=this.width;var h=this.height;this.pixels=new Uint8Array(w*h*3);var data=this.image;var srcPos=0;var count=0;for(var i=0;i<h;i++){for(var j=0;j<w;j++){this.pixels[count++]=data[srcPos++];this.pixels[count++]=data[srcPos++];this.pixels[count++]=data[srcPos++];srcPos++}}};GIFEncoder.prototype.writeGraphicCtrlExt=function(){this.out.writeByte(33);this.out.writeByte(249);this.out.writeByte(4);var transp,disp;if(this.transparent===null){transp=0;disp=0}else{transp=1;disp=2}if(this.dispose>=0){disp=dispose&7}disp<<=2;this.out.writeByte(0|disp|0|transp);this.writeShort(this.delay);this.out.writeByte(this.transIndex);this.out.writeByte(0)};GIFEncoder.prototype.writeImageDesc=function(){this.out.writeByte(44);this.writeShort(0);this.writeShort(0);this.writeShort(this.width);this.writeShort(this.height);if(this.firstFrame||this.globalPalette){this.out.writeByte(0)}else{this.out.writeByte(128|0|0|0|this.palSize)}};GIFEncoder.prototype.writeLSD=function(){this.writeShort(this.width);this.writeShort(this.height);this.out.writeByte(128|112|0|this.palSize);this.out.writeByte(0);this.out.writeByte(0)};GIFEncoder.prototype.writeNetscapeExt=function(){this.out.writeByte(33);this.out.writeByte(255);this.out.writeByte(11);this.out.writeUTFBytes("NETSCAPE2.0");this.out.writeByte(3);this.out.writeByte(1);this.writeShort(this.repeat);this.out.writeByte(0)};GIFEncoder.prototype.writePalette=function(){this.out.writeBytes(this.colorTab);var n=3*256-this.colorTab.length;for(var i=0;i<n;i++)this.out.writeByte(0)};GIFEncoder.prototype.writeShort=function(pValue){this.out.writeByte(pValue&255);this.out.writeByte(pValue>>8&255)};GIFEncoder.prototype.writePixels=function(){var enc=new LZWEncoder(this.width,this.height,this.indexedPixels,this.colorDepth);enc.encode(this.out)};GIFEncoder.prototype.stream=function(){return this.out};module.exports=GIFEncoder},{"./LZWEncoder.js":2,"./TypedNeuQuant.js":3}],2:[function(require,module,exports){var EOF=-1;var BITS=12;var HSIZE=5003;var masks=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];function LZWEncoder(width,height,pixels,colorDepth){var initCodeSize=Math.max(2,colorDepth);var accum=new Uint8Array(256);var htab=new Int32Array(HSIZE);var codetab=new Int32Array(HSIZE);var cur_accum,cur_bits=0;var a_count;var free_ent=0;var maxcode;var clear_flg=false;var g_init_bits,ClearCode,EOFCode;function char_out(c,outs){accum[a_count++]=c;if(a_count>=254)flush_char(outs)}function cl_block(outs){cl_hash(HSIZE);free_ent=ClearCode+2;clear_flg=true;output(ClearCode,outs)}function cl_hash(hsize){for(var i=0;i<hsize;++i)htab[i]=-1}function compress(init_bits,outs){var fcode,c,i,ent,disp,hsize_reg,hshift;g_init_bits=init_bits;clear_flg=false;n_bits=g_init_bits;maxcode=MAXCODE(n_bits);ClearCode=1<<init_bits-1;EOFCode=ClearCode+1;free_ent=ClearCode+2;a_count=0;ent=nextPixel();hshift=0;for(fcode=HSIZE;fcode<65536;fcode*=2)++hshift;hshift=8-hshift;hsize_reg=HSIZE;cl_hash(hsize_reg);output(ClearCode,outs);outer_loop:while((c=nextPixel())!=EOF){fcode=(c<<BITS)+ent;i=c<<hshift^ent;if(htab[i]===fcode){ent=codetab[i];continue}else if(htab[i]>=0){disp=hsize_reg-i;if(i===0)disp=1;do{if((i-=disp)<0)i+=hsize_reg;if(htab[i]===fcode){ent=codetab[i];continue outer_loop}}while(htab[i]>=0)}output(ent,outs);ent=c;if(free_ent<1<<BITS){codetab[i]=free_ent++;htab[i]=fcode}else{cl_block(outs)}}output(ent,outs);output(EOFCode,outs)}function encode(outs){outs.writeByte(initCodeSize);remaining=width*height;curPixel=0;compress(initCodeSize+1,outs);outs.writeByte(0)}function flush_char(outs){if(a_count>0){outs.writeByte(a_count);outs.writeBytes(accum,0,a_count);a_count=0}}function MAXCODE(n_bits){return(1<<n_bits)-1}function nextPixel(){if(remaining===0)return EOF;--remaining;var pix=pixels[curPixel++];return pix&255}function output(code,outs){cur_accum&=masks[cur_bits];if(cur_bits>0)cur_accum|=code<<cur_bits;else cur_accum=code;cur_bits+=n_bits;while(cur_bits>=8){char_out(cur_accum&255,outs);cur_accum>>=8;cur_bits-=8}if(free_ent>maxcode||clear_flg){if(clear_flg){maxcode=MAXCODE(n_bits=g_init_bits);clear_flg=false}else{++n_bits;if(n_bits==BITS)maxcode=1<<BITS;else maxcode=MAXCODE(n_bits)}}if(code==EOFCode){while(cur_bits>0){char_out(cur_accum&255,outs);cur_accum>>=8;cur_bits-=8}flush_char(outs)}}this.encode=encode}module.exports=LZWEncoder},{}],3:[function(require,module,exports){var ncycles=100;var netsize=256;var maxnetpos=netsize-1;var netbiasshift=4;var intbiasshift=16;var intbias=1<<intbiasshift;var gammashift=10;var gamma=1<<gammashift;var betashift=10;var beta=intbias>>betashift;var betagamma=intbias<<gammashift-betashift;var initrad=netsize>>3;var radiusbiasshift=6;var radiusbias=1<<radiusbiasshift;var initradius=initrad*radiusbias;var radiusdec=30;var alphabiasshift=10;var initalpha=1<<alphabiasshift;var alphadec;var radbiasshift=8;var radbias=1<<radbiasshift;var alpharadbshift=alphabiasshift+radbiasshift;var alpharadbias=1<<alpharadbshift;var prime1=499;var prime2=491;var prime3=487;var prime4=503;var minpicturebytes=3*prime4;function NeuQuant(pixels,samplefac){var network;var netindex;var bias;var freq;var radpower;function init(){network=[];netindex=new Int32Array(256);bias=new Int32Array(netsize);freq=new Int32Array(netsize);radpower=new Int32Array(netsize>>3);var i,v;for(i=0;i<netsize;i++){v=(i<<netbiasshift+8)/netsize;network[i]=new Float64Array([v,v,v,0]);freq[i]=intbias/netsize;bias[i]=0}}function unbiasnet(){for(var i=0;i<netsize;i++){network[i][0]>>=netbiasshift;network[i][1]>>=netbiasshift;network[i][2]>>=netbiasshift;network[i][3]=i}}function altersingle(alpha,i,b,g,r){network[i][0]-=alpha*(network[i][0]-b)/initalpha;network[i][1]-=alpha*(network[i][1]-g)/initalpha;network[i][2]-=alpha*(network[i][2]-r)/initalpha}function alterneigh(radius,i,b,g,r){var lo=Math.abs(i-radius);var hi=Math.min(i+radius,netsize);var j=i+1;var k=i-1;var m=1;var p,a;while(j<hi||k>lo){a=radpower[m++];if(j<hi){p=network[j++];p[0]-=a*(p[0]-b)/alpharadbias;p[1]-=a*(p[1]-g)/alpharadbias;p[2]-=a*(p[2]-r)/alpharadbias}if(k>lo){p=network[k--];p[0]-=a*(p[0]-b)/alpharadbias;p[1]-=a*(p[1]-g)/alpharadbias;p[2]-=a*(p[2]-r)/alpharadbias}}}function contest(b,g,r){var bestd=~(1<<31);var bestbiasd=bestd;var bestpos=-1;var bestbiaspos=bestpos;var i,n,dist,biasdist,betafreq;for(i=0;i<netsize;i++){n=network[i];dist=Math.abs(n[0]-b)+Math.abs(n[1]-g)+Math.abs(n[2]-r);if(dist<bestd){bestd=dist;bestpos=i}biasdist=dist-(bias[i]>>intbiasshift-netbiasshift);if(biasdist<bestbiasd){bestbiasd=biasdist;bestbiaspos=i}betafreq=freq[i]>>betashift;freq[i]-=betafreq;bias[i]+=betafreq<<gammashift}freq[bestpos]+=beta;bias[bestpos]-=betagamma;return bestbiaspos}function inxbuild(){var i,j,p,q,smallpos,smallval,previouscol=0,startpos=0;for(i=0;i<netsize;i++){p=network[i];smallpos=i;smallval=p[1];for(j=i+1;j<netsize;j++){q=network[j];if(q[1]<smallval){smallpos=j;smallval=q[1]}}q=network[smallpos];if(i!=smallpos){j=q[0];q[0]=p[0];p[0]=j;j=q[1];q[1]=p[1];p[1]=j;j=q[2];q[2]=p[2];p[2]=j;j=q[3];q[3]=p[3];p[3]=j}if(smallval!=previouscol){netindex[previouscol]=startpos+i>>1;for(j=previouscol+1;j<smallval;j++)netindex[j]=i;previouscol=smallval;startpos=i}}netindex[previouscol]=startpos+maxnetpos>>1;for(j=previouscol+1;j<256;j++)netindex[j]=maxnetpos}function inxsearch(b,g,r){var a,p,dist;var bestd=1e3;var best=-1;var i=netindex[g];var j=i-1;while(i<netsize||j>=0){if(i<netsize){p=network[i];dist=p[1]-g;if(dist>=bestd)i=netsize;else{i++;if(dist<0)dist=-dist;a=p[0]-b;if(a<0)a=-a;dist+=a;if(dist<bestd){a=p[2]-r;if(a<0)a=-a;dist+=a;if(dist<bestd){bestd=dist;best=p[3]}}}}if(j>=0){p=network[j];dist=g-p[1];if(dist>=bestd)j=-1;else{j--;if(dist<0)dist=-dist;a=p[0]-b;if(a<0)a=-a;dist+=a;if(dist<bestd){a=p[2]-r;if(a<0)a=-a;dist+=a;if(dist<bestd){bestd=dist;best=p[3]}}}}}return best}function learn(){var i;var lengthcount=pixels.length;var alphadec=30+(samplefac-1)/3;var samplepixels=lengthcount/(3*samplefac);var delta=~~(samplepixels/ncycles);var alpha=initalpha;var radius=initradius;var rad=radius>>radiusbiasshift;if(rad<=1)rad=0;for(i=0;i<rad;i++)radpower[i]=alpha*((rad*rad-i*i)*radbias/(rad*rad));var step;if(lengthcount<minpicturebytes){samplefac=1;step=3}else if(lengthcount%prime1!==0){step=3*prime1}else if(lengthcount%prime2!==0){step=3*prime2}else if(lengthcount%prime3!==0){step=3*prime3}else{step=3*prime4}var b,g,r,j;var pix=0;i=0;while(i<samplepixels){b=(pixels[pix]&255)<<netbiasshift;g=(pixels[pix+1]&255)<<netbiasshift;r=(pixels[pix+2]&255)<<netbiasshift;j=contest(b,g,r);altersingle(alpha,j,b,g,r);if(rad!==0)alterneigh(rad,j,b,g,r);pix+=step;if(pix>=lengthcount)pix-=lengthcount;i++;if(delta===0)delta=1;if(i%delta===0){alpha-=alpha/alphadec;radius-=radius/radiusdec;rad=radius>>radiusbiasshift;if(rad<=1)rad=0;for(j=0;j<rad;j++)radpower[j]=alpha*((rad*rad-j*j)*radbias/(rad*rad))}}}function buildColormap(){init();learn();unbiasnet();inxbuild()}this.buildColormap=buildColormap;function getColormap(){var map=[];var index=[];for(var i=0;i<netsize;i++)index[network[i][3]]=i;var k=0;for(var l=0;l<netsize;l++){var j=index[l];map[k++]=network[j][0];map[k++]=network[j][1];map[k++]=network[j][2]}return map}this.getColormap=getColormap;this.lookupRGB=inxsearch}module.exports=NeuQuant},{}],4:[function(require,module,exports){var GIFEncoder,renderFrame;GIFEncoder=require("./GIFEncoder.js");renderFrame=function(frame){var encoder,page,stream,transfer;encoder=new GIFEncoder(frame.width,frame.height);if(frame.index===0){encoder.writeHeader()}else{encoder.firstFrame=false}encoder.setTransparent(frame.transparent);encoder.setRepeat(frame.repeat);encoder.setDelay(frame.delay);encoder.setQuality(frame.quality);encoder.setDither(frame.dither);encoder.setGlobalPalette(frame.globalPalette);encoder.addFrame(frame.data);if(frame.last){encoder.finish()}if(frame.globalPalette===true){frame.globalPalette=encoder.getGlobalPalette()}stream=encoder.stream();frame.data=stream.pages;frame.cursor=stream.cursor;frame.pageSize=stream.constructor.pageSize;if(frame.canTransfer){transfer=function(){var i,len,ref,results;ref=frame.data;results=[];for(i=0,len=ref.length;i<len;i++){page=ref[i];results.push(page.buffer)}return results}();return self.postMessage(frame,transfer)}else{return self.postMessage(frame)}};self.onmessage=function(event){return renderFrame(event.data)}},{"./GIFEncoder.js":1}]},{},[4]);`;
const r$2 = () => {
    const d = new Blob([e$1], {
      type: "application/javascript"
    });
    return URL.createObjectURL(d)
  },
  e$1 = t$2;
var gif = {
  exports: {}
};
(function(d, h) {
  (function(i) {
    d.exports = i()
  })(function() {
    return function i(c, f, l) {
      function u(b, g) {
        if (!f[b]) {
          if (!c[b]) {
            var m = typeof commonjsRequire == "function" && commonjsRequire;
            if (!g && m) return m(b, !0);
            if (x) return x(b, !0);
            var v = new Error("Cannot find module '" + b + "'");
            throw v.code = "MODULE_NOT_FOUND", v
          }
          var w = f[b] = {
            exports: {}
          };
          c[b][0].call(w.exports, function(C) {
            var T = c[b][1][C];
            return u(T || C)
          }, w, w.exports, i, c, f, l)
        }
        return f[b].exports
      }
      for (var x = typeof commonjsRequire == "function" && commonjsRequire, y = 0; y < l.length; y++) u(l[y]);
      return u
    }({
      1: [function(i, c, f) {
        function l() {
          this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }
        c.exports = l, l.EventEmitter = l, l.prototype._events = void 0, l.prototype._maxListeners = void 0, l.defaultMaxListeners = 10, l.prototype.setMaxListeners = function(g) {
          if (!x(g) || g < 0 || isNaN(g)) throw TypeError("n must be a positive number");
          return this._maxListeners = g, this
        }, l.prototype.emit = function(g) {
          var m, v, w, C, T, E;
          if (this._events || (this._events = {}), g === "error" && (!this._events.error || y(this._events.error) && !this._events.error.length)) {
            if (m = arguments[1], m instanceof Error) throw m;
            var A = new Error('Uncaught, unspecified "error" event. (' + m + ")");
            throw A.context = m, A
          }
          if (v = this._events[g], b(v)) return !1;
          if (u(v)) switch (arguments.length) {
            case 1:
              v.call(this);
              break;
            case 2:
              v.call(this, arguments[1]);
              break;
            case 3:
              v.call(this, arguments[1], arguments[2]);
              break;
            default:
              C = Array.prototype.slice.call(arguments, 1), v.apply(this, C)
          } else if (y(v))
            for (C = Array.prototype.slice.call(arguments, 1), E = v.slice(), w = E.length, T = 0; T < w; T++) E[T].apply(this, C);
          return !0
        }, l.prototype.addListener = function(g, m) {
          var v;
          if (!u(m)) throw TypeError("listener must be a function");
          return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", g, u(m.listener) ? m.listener : m), this._events[g] ? y(this._events[g]) ? this._events[g].push(m) : this._events[g] = [this._events[g], m] : this._events[g] = m, y(this._events[g]) && !this._events[g].warned && (b(this._maxListeners) ? v = l.defaultMaxListeners : v = this._maxListeners, v && v > 0 && this._events[g].length > v && (this._events[g].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[g].length), typeof console.trace == "function" && console.trace())), this
        }, l.prototype.on = l.prototype.addListener, l.prototype.once = function(g, m) {
          if (!u(m)) throw TypeError("listener must be a function");
          var v = !1;

          function w() {
            this.removeListener(g, w), v || (v = !0, m.apply(this, arguments))
          }
          return w.listener = m, this.on(g, w), this
        }, l.prototype.removeListener = function(g, m) {
          var v, w, C, T;
          if (!u(m)) throw TypeError("listener must be a function");
          if (!this._events || !this._events[g]) return this;
          if (v = this._events[g], C = v.length, w = -1, v === m || u(v.listener) && v.listener === m) delete this._events[g], this._events.removeListener && this.emit("removeListener", g, m);
          else if (y(v)) {
            for (T = C; T-- > 0;)
              if (v[T] === m || v[T].listener && v[T].listener === m) {
                w = T;
                break
              } if (w < 0) return this;
            v.length === 1 ? (v.length = 0, delete this._events[g]) : v.splice(w, 1), this._events.removeListener && this.emit("removeListener", g, m)
          }
          return this
        }, l.prototype.removeAllListeners = function(g) {
          var m, v;
          if (!this._events) return this;
          if (!this._events.removeListener) return arguments.length === 0 ? this._events = {} : this._events[g] && delete this._events[g], this;
          if (arguments.length === 0) {
            for (m in this._events) m !== "removeListener" && this.removeAllListeners(m);
            return this.removeAllListeners("removeListener"), this._events = {}, this
          }
          if (v = this._events[g], u(v)) this.removeListener(g, v);
          else if (v)
            for (; v.length;) this.removeListener(g, v[v.length - 1]);
          return delete this._events[g], this
        }, l.prototype.listeners = function(g) {
          var m;
          return !this._events || !this._events[g] ? m = [] : u(this._events[g]) ? m = [this._events[g]] : m = this._events[g].slice(), m
        }, l.prototype.listenerCount = function(g) {
          if (this._events) {
            var m = this._events[g];
            if (u(m)) return 1;
            if (m) return m.length
          }
          return 0
        }, l.listenerCount = function(g, m) {
          return g.listenerCount(m)
        };

        function u(g) {
          return typeof g == "function"
        }

        function x(g) {
          return typeof g == "number"
        }

        function y(g) {
          return typeof g == "object" && g !== null
        }

        function b(g) {
          return g === void 0
        }
      }, {}],
      2: [function(i, c, f) {
        var l, u, x, y, b;
        b = navigator.userAgent.toLowerCase(), y = navigator.platform.toLowerCase(), l = b.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0], x = l[1] === "ie" && document.documentMode, u = {
          name: l[1] === "version" ? l[3] : l[1],
          version: x || parseFloat(l[1] === "opera" && l[4] ? l[4] : l[2]),
          platform: {
            name: b.match(/ip(?:ad|od|hone)/) ? "ios" : (b.match(/(?:webos|android)/) || y.match(/mac|win|linux/) || ["other"])[0]
          }
        }, u[u.name] = !0, u[u.name + parseInt(u.version, 10)] = !0, u.platform[u.platform.name] = !0, c.exports = u
      }, {}],
      3: [function(i, c, f) {
        var l, u, x, y = function(v, w) {
            for (var C in w) b.call(w, C) && (v[C] = w[C]);

            function T() {
              this.constructor = v
            }
            return T.prototype = w.prototype, v.prototype = new T, v.__super__ = w.prototype, v
          },
          b = {}.hasOwnProperty,
          g = [].indexOf || function(v) {
            for (var w = 0, C = this.length; w < C; w++)
              if (w in this && this[w] === v) return w;
            return -1
          },
          m = [].slice;
        l = i("events").EventEmitter, x = i("./browser.coffee"), u = function(v) {
          var w, C;
          y(T, v), w = {
            workerScript: "gif.worker.js",
            workers: 2,
            repeat: 0,
            background: "#fff",
            quality: 10,
            width: null,
            height: null,
            transparent: null,
            debug: !1,
            dither: !1
          }, C = {
            delay: 500,
            copy: !1
          };

          function T(E) {
            var A, O, D;
            this.running = !1, this.options = {}, this.frames = [], this.freeWorkers = [], this.activeWorkers = [], this.setOptions(E);
            for (O in w) D = w[O], (A = this.options)[O] == null && (A[O] = D)
          }
          return T.prototype.setOption = function(E, A) {
            if (this.options[E] = A, this._canvas != null && (E === "width" || E === "height")) return this._canvas[E] = A
          }, T.prototype.setOptions = function(E) {
            var A, O, D;
            O = [];
            for (A in E) b.call(E, A) && (D = E[A], O.push(this.setOption(A, D)));
            return O
          }, T.prototype.addFrame = function(E, A) {
            var O, D;
            A == null && (A = {}), O = {}, O.transparent = this.options.transparent;
            for (D in C) O[D] = A[D] || C[D];
            if (this.options.width == null && this.setOption("width", E.width), this.options.height == null && this.setOption("height", E.height), typeof ImageData < "u" && ImageData !== null && E instanceof ImageData) O.data = E.data;
            else if (typeof CanvasRenderingContext2D < "u" && CanvasRenderingContext2D !== null && E instanceof CanvasRenderingContext2D || typeof WebGLRenderingContext < "u" && WebGLRenderingContext !== null && E instanceof WebGLRenderingContext) A.copy ? O.data = this.getContextData(E) : O.context = E;
            else if (E.childNodes != null) A.copy ? O.data = this.getImageData(E) : O.image = E;
            else throw new Error("Invalid image");
            return this.frames.push(O)
          }, T.prototype.render = function() {
            var E, A, O;
            if (this.running) throw new Error("Already running");
            if (this.options.width == null || this.options.height == null) throw new Error("Width and height must be set prior to rendering");
            if (this.running = !0, this.nextFrame = 0, this.finishedFrames = 0, this.imageParts = (function() {
                var D, B, N;
                for (N = [], D = 0, B = this.frames.length; 0 <= B ? D < B : D > B; 0 <= B ? ++D : --D) N.push(null);
                return N
              }).call(this), A = this.spawnWorkers(), this.options.globalPalette === !0) this.renderNextFrame();
            else
              for (E = 0, O = A; 0 <= O ? E < O : E > O; 0 <= O ? ++E : --E) this.renderNextFrame();
            return this.emit("start"), this.emit("progress", 0)
          }, T.prototype.abort = function() {
            for (var E; E = this.activeWorkers.shift(), E != null;) this.log("killing active worker"), E.terminate();
            return this.running = !1, this.emit("abort")
          }, T.prototype.spawnWorkers = function() {
            var E, A, O;
            return E = Math.min(this.options.workers, this.frames.length), (function() {
              O = [];
              for (var D = A = this.freeWorkers.length; A <= E ? D < E : D > E; A <= E ? D++ : D--) O.push(D);
              return O
            }).apply(this).forEach(function(D) {
              return function(B) {
                var N;
                return D.log("spawning worker " + B), N = new Worker(D.options.workerScript), N.onmessage = function(_) {
                  return D.activeWorkers.splice(D.activeWorkers.indexOf(N), 1), D.freeWorkers.push(N), D.frameFinished(_.data)
                }, D.freeWorkers.push(N)
              }
            }(this)), E
          }, T.prototype.frameFinished = function(E) {
            var A, O;
            if (this.log("frame " + E.index + " finished - " + this.activeWorkers.length + " active"), this.finishedFrames++, this.emit("progress", this.finishedFrames / this.frames.length), this.imageParts[E.index] = E, this.options.globalPalette === !0 && (this.options.globalPalette = E.globalPalette, this.log("global palette analyzed"), this.frames.length > 2))
              for (A = 1, O = this.freeWorkers.length; 1 <= O ? A < O : A > O; 1 <= O ? ++A : --A) this.renderNextFrame();
            return g.call(this.imageParts, null) >= 0 ? this.renderNextFrame() : this.finishRendering()
          }, T.prototype.finishRendering = function() {
            var E, A, O, D, B, N, _, S, I, P, R, L, j, z, k, F;
            for (S = 0, z = this.imageParts, B = 0, I = z.length; B < I; B++) A = z[B], S += (A.data.length - 1) * A.pageSize + A.cursor;
            for (S += A.pageSize - A.cursor, this.log("rendering finished - filesize " + Math.round(S / 1e3) + "kb"), E = new Uint8Array(S), L = 0, k = this.imageParts, N = 0, P = k.length; N < P; N++)
              for (A = k[N], F = A.data, O = _ = 0, R = F.length; _ < R; O = ++_) j = F[O], E.set(j, L), O === A.data.length - 1 ? L += A.cursor : L += A.pageSize;
            return D = new Blob([E], {
              type: "image/gif"
            }), this.emit("finished", D, E)
          }, T.prototype.renderNextFrame = function() {
            var E, A, O;
            if (this.freeWorkers.length === 0) throw new Error("No free workers");
            if (!(this.nextFrame >= this.frames.length)) return E = this.frames[this.nextFrame++], O = this.freeWorkers.shift(), A = this.getTask(E), this.log("starting frame " + (A.index + 1) + " of " + this.frames.length), this.activeWorkers.push(O), O.postMessage(A)
          }, T.prototype.getContextData = function(E) {
            return E.getImageData(0, 0, this.options.width, this.options.height).data
          }, T.prototype.getImageData = function(E) {
            var A;
            return this._canvas == null && (this._canvas = document.createElement("canvas"), this._canvas.width = this.options.width, this._canvas.height = this.options.height), A = this._canvas.getContext("2d"), A.setFill = this.options.background, A.fillRect(0, 0, this.options.width, this.options.height), A.drawImage(E, 0, 0), this.getContextData(A)
          }, T.prototype.getTask = function(E) {
            var A, O;
            if (A = this.frames.indexOf(E), O = {
                index: A,
                last: A === this.frames.length - 1,
                delay: E.delay,
                transparent: E.transparent,
                width: this.options.width,
                height: this.options.height,
                quality: this.options.quality,
                dither: this.options.dither,
                globalPalette: this.options.globalPalette,
                repeat: this.options.repeat,
                canTransfer: x.name === "chrome"
              }, E.data != null) O.data = E.data;
            else if (E.context != null) O.data = this.getContextData(E.context);
            else if (E.image != null) O.data = this.getImageData(E.image);
            else throw new Error("Invalid frame");
            return O
          }, T.prototype.log = function() {
            var E;
            if (E = 1 <= arguments.length ? m.call(arguments, 0) : [], !!this.options.debug) return console.log.apply(console, E)
          }, T
        }(l), c.exports = u
      }, {
        "./browser.coffee": 2,
        events: 1
      }]
    }, {}, [3])(3)
  })
})(gif);
var gifExports = gif.exports;
const s = getDefaultExportFromCjs(gifExports);
let r$1 = class {
    constructor({
      frames: h,
      commonCropOptions: i,
      frameDelays: c,
      gifJsOptions: f = {},
      outputType: l
    }) {
      M(this, "cropperJsOpts");
      M(this, "frames");
      M(this, "frameDelays");
      M(this, "gifJsOptions");
      M(this, "outputType");
      this.cropperJsOpts = i.cropperJsOpts, this.frames = h, this.frameDelays = c, this.gifJsOptions = f, this.outputType = l
    }
    bootstrap() {
      return new Promise((h, i) => {
        const c = r$2(),
          f = Object.assign({
            workers: 2,
            quality: 10,
            workerScript: c,
            width: this.cropperJsOpts.width,
            height: this.cropperJsOpts.height,
            transparent: "transparent"
          }, this.gifJsOptions || {}),
          l = new s(f);
        l.on("finished", u => {
          if (this.outputType === o.BLOB) h(u);
          else if (this.outputType === o.BASE64) h(this.convertBlob2Base64(u));
          else {
            const x = window.URL.createObjectURL(u);
            h(x)
          }
        }), this.frames.forEach((u, x) => {
          l.addFrame(u, {
            delay: this.frameDelays[x],
            copy: !0
          })
        }), l.render()
      })
    }
    convertBlob2Base64(h) {
      return new Promise((i, c) => {
        const f = new FileReader;
        f.onload = function(l) {
          var u;
          i((u = l == null ? void 0 : l.target) == null ? void 0 : u.result)
        }, f.onerror = l => {
          c(l)
        }, f.readAsDataURL(h)
      })
    }
  },
  t$1 = class {
    constructor(h) {
      M(this, "frames");
      M(this, "parsedFrames");
      M(this, "commonCropOptions");
      M(this, "convertorCanvas");
      M(this, "containerCanvas");
      M(this, "convertCtx");
      M(this, "containerCtx");
      M(this, "cropperJsOpts");
      M(this, "offsetX", 0);
      M(this, "offsetY", 0);
      M(this, "containerCenterX", 0);
      M(this, "containerCenterY", 0);
      M(this, "resultFrames", []);
      this.init(h)
    }
    init({
      commonCropOptions: h
    }) {
      this.commonCropOptions = h, this.cropperJsOpts = h.cropperJsOpts, this.resultFrames = [], this.containerCanvas && this.convertorCanvas || this.setupCanvas(), this.setCanvasWH()
    }
    async cropGif(h) {
      var l, u;
      const {
        frames: i,
        parsedFrames: c
      } = h;
      this.frames = i, this.parsedFrames = c;
      let f = 0;
      for (; f < this.frames.length;) {
        const x = this.frames[f];
        if (this.parsedFrames[f].disposalType !== 1 && this.containerCtx.clearRect(0, 0, this.containerCanvas.width, this.containerCanvas.height), this.containerCtx.globalCompositeOperation && ((l = this.cropperJsOpts) != null && l.background) && (this.containerCtx.fillStyle = ((u = this.cropperJsOpts) == null ? void 0 : u.background) || "", this.containerCtx.globalCompositeOperation = "destination-over", this.containerCtx.fillRect(0, 0, this.containerCanvas.width, this.containerCanvas.height), this.containerCtx.globalCompositeOperation = "source-over"), !x) continue;
        const y = this.transformFrame(this.drawImgDataToCanvas(x, f));
        this.resultFrames.push(y), this.ifDebugRun(y, f), f++
      }
      return this.resultFrames
    }
    cropStaticImage(h) {
      return this.transformFrame(h)
    }
    transformFrame(h) {
      return this.containerCtx.save(), this.containerCtx.translate(this.containerCenterX, this.containerCenterY), this.containerCtx.rotate(this.cropperJsOpts.rotate * Math.PI / 180), this.containerCtx.scale(this.cropperJsOpts.scaleX, this.cropperJsOpts.scaleY), this.containerCtx.drawImage(h, -this.convertorCanvas.width / 2, -this.convertorCanvas.height / 2), this.containerCtx.restore(), this.containerCtx.getImageData(1 * this.cropperJsOpts.x + this.offsetX, 1 * this.cropperJsOpts.y + this.offsetY, this.cropperJsOpts.width, this.cropperJsOpts.height)
    }
    drawImgDataToCanvas(h, i) {
      var f;
      const c = (f = this.parsedFrames[i]) == null ? void 0 : f.dims;
      return this.convertCtx.clearRect(0, 0, this.convertorCanvas.width, this.convertorCanvas.height), this.convertCtx.putImageData(h, c.left, c.top), this.convertorCanvas
    }
    ifDebugRun(h, i) {
      location.search.includes("isCropDebug=true") && i && this.renderEachFrame(h, i)
    }
    renderEachFrame(h, i) {
      var u;
      const c = (u = this.parsedFrames[i]) == null ? void 0 : u.dims,
        f = document.createElement("canvas");
      f.width = this.convertorCanvas.width, f.height = this.convertorCanvas.height;
      const l = f.getContext("2d");
      l && (l == null || l.putImageData(h, c.left, c.top), l.fillStyle = "red", l.strokeStyle = "blue", l.lineWidth = 5, l.save(), l.beginPath(), l.font = "70px orbitron", l.fillText(String(i), 10, 50), l.restore(), l.closePath(), document.body.appendChild(f))
    }
    setupCanvas() {
      const h = this.containerCanvas = document.createElement("canvas"),
        i = this.convertorCanvas = document.createElement("canvas");
      h.className = "containerCanvas", i.className = "convertorCanvas", h.style.display = "none", i.style.display = "none";
      const c = h.getContext("2d"),
        f = i.getContext("2d");
      c && (this.containerCtx = c), f && (this.convertCtx = f), document.body.appendChild(i), document.body.appendChild(h)
    }
    setCanvasWH() {
      this.cropperJsOpts.rotate;
      const h = this.commonCropOptions.imageData,
        i = h.naturalWidth,
        c = h.naturalHeight;
      this.offsetX = -Math.min(this.cropperJsOpts.x, 0), this.offsetY = -Math.min(this.cropperJsOpts.y, 0), this.containerCenterX = this.offsetX + i / 2, this.containerCenterY = this.offsetY + c / 2, this.containerCanvas.width = Math.max(this.offsetX + i, this.offsetX + this.cropperJsOpts.width, this.cropperJsOpts.x + this.cropperJsOpts.width), this.containerCanvas.height = Math.max(this.offsetY + c, this.offsetY + this.cropperJsOpts.height, this.cropperJsOpts.y + this.cropperJsOpts.height), this.convertorCanvas.width = h.naturalWidth, this.convertorCanvas.height = h.naturalHeight, this.containerCtx.clearRect(0, 0, this.containerCanvas.width, this.containerCanvas.height), this.convertCtx.clearRect(0, 0, this.convertorCanvas.width, this.convertorCanvas.height)
    }
    frameToImgData(h, i) {
      if (!h) return;
      const c = i.pixels.length,
        f = h.createImageData(i.dims.width, i.dims.height),
        l = f.data;
      for (let u = 0; u < c; u++) {
        const x = 4 * u,
          y = i.pixels[u],
          b = i.colorTable[y];
        l[x] = b[0], l[x + 1] = b[1], l[x + 2] = b[2], l[x + 3] = y !== i.transparentIndex ? 255 : 0
      }
      return f
    }
  };
var imageType$1 = {
    exports: {}
  },
  fileType$1 = {
    exports: {}
  };
(function(module) {
  const toBytes = d => [...d].map(h => h.charCodeAt(0)),
    xpiZipFilename = toBytes("META-INF/mozilla.rsa"),
    oxmlContentTypes = toBytes("[Content_Types].xml"),
    oxmlRels = toBytes("_rels/.rels");

  function readUInt64LE(d, h = 0) {
    let i = d[h],
      c = 1,
      f = 0;
    for (; ++f < 8;) c *= 256, i += d[h + f] * c;
    return i
  }
  const fileType = d => {
    if (!(d instanceof Uint8Array || d instanceof ArrayBuffer || Buffer.isBuffer(d))) throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof d}\``);
    const h = d instanceof Uint8Array ? d : new Uint8Array(d);
    if (!(h && h.length > 1)) return null;
    const i = (f, l) => {
        l = Object.assign({
          offset: 0
        }, l);
        for (let u = 0; u < f.length; u++)
          if (l.mask) {
            if (f[u] !== (l.mask[u] & h[u + l.offset])) return !1
          } else if (f[u] !== h[u + l.offset]) return !1;
        return !0
      },
      c = (f, l) => i(toBytes(f), l);
    if (i([255, 216, 255])) return {
      ext: "jpg",
      mime: "image/jpeg"
    };
    if (i([137, 80, 78, 71, 13, 10, 26, 10])) return {
      ext: "png",
      mime: "image/png"
    };
    if (i([71, 73, 70])) return {
      ext: "gif",
      mime: "image/gif"
    };
    if (i([87, 69, 66, 80], {
        offset: 8
      })) return {
      ext: "webp",
      mime: "image/webp"
    };
    if (i([70, 76, 73, 70])) return {
      ext: "flif",
      mime: "image/flif"
    };
    if ((i([73, 73, 42, 0]) || i([77, 77, 0, 42])) && i([67, 82], {
        offset: 8
      })) return {
      ext: "cr2",
      mime: "image/x-canon-cr2"
    };
    if (i([73, 73, 42, 0]) || i([77, 77, 0, 42])) return {
      ext: "tif",
      mime: "image/tiff"
    };
    if (i([66, 77])) return {
      ext: "bmp",
      mime: "image/bmp"
    };
    if (i([73, 73, 188])) return {
      ext: "jxr",
      mime: "image/vnd.ms-photo"
    };
    if (i([56, 66, 80, 83])) return {
      ext: "psd",
      mime: "image/vnd.adobe.photoshop"
    };
    if (i([80, 75, 3, 4])) {
      if (i([109, 105, 109, 101, 116, 121, 112, 101, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 101, 112, 117, 98, 43, 122, 105, 112], {
          offset: 30
        })) return {
        ext: "epub",
        mime: "application/epub+zip"
      };
      if (i(xpiZipFilename, {
          offset: 30
        })) return {
        ext: "xpi",
        mime: "application/x-xpinstall"
      };
      if (c("mimetypeapplication/vnd.oasis.opendocument.text", {
          offset: 30
        })) return {
        ext: "odt",
        mime: "application/vnd.oasis.opendocument.text"
      };
      if (c("mimetypeapplication/vnd.oasis.opendocument.spreadsheet", {
          offset: 30
        })) return {
        ext: "ods",
        mime: "application/vnd.oasis.opendocument.spreadsheet"
      };
      if (c("mimetypeapplication/vnd.oasis.opendocument.presentation", {
          offset: 30
        })) return {
        ext: "odp",
        mime: "application/vnd.oasis.opendocument.presentation"
      };
      const f = (y, b = 0) => y.findIndex((g, m, v) => m >= b && v[m] === 80 && v[m + 1] === 75 && v[m + 2] === 3 && v[m + 3] === 4);
      let l = 0,
        u = !1,
        x = null;
      do {
        const y = l + 30;
        if (u || (u = i(oxmlContentTypes, {
            offset: y
          }) || i(oxmlRels, {
            offset: y
          })), x || (c("word/", {
            offset: y
          }) ? x = {
            ext: "docx",
            mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          } : c("ppt/", {
            offset: y
          }) ? x = {
            ext: "pptx",
            mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
          } : c("xl/", {
            offset: y
          }) && (x = {
            ext: "xlsx",
            mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          })), u && x) return x;
        l = f(h, y)
      } while (l >= 0);
      if (x) return x
    }
    if (i([80, 75]) && (h[2] === 3 || h[2] === 5 || h[2] === 7) && (h[3] === 4 || h[3] === 6 || h[3] === 8)) return {
      ext: "zip",
      mime: "application/zip"
    };
    if (i([117, 115, 116, 97, 114], {
        offset: 257
      })) return {
      ext: "tar",
      mime: "application/x-tar"
    };
    if (i([82, 97, 114, 33, 26, 7]) && (h[6] === 0 || h[6] === 1)) return {
      ext: "rar",
      mime: "application/x-rar-compressed"
    };
    if (i([31, 139, 8])) return {
      ext: "gz",
      mime: "application/gzip"
    };
    if (i([66, 90, 104])) return {
      ext: "bz2",
      mime: "application/x-bzip2"
    };
    if (i([55, 122, 188, 175, 39, 28])) return {
      ext: "7z",
      mime: "application/x-7z-compressed"
    };
    if (i([120, 1])) return {
      ext: "dmg",
      mime: "application/x-apple-diskimage"
    };
    if (i([51, 103, 112, 53]) || i([0, 0, 0]) && i([102, 116, 121, 112], {
        offset: 4
      }) && (i([109, 112, 52, 49], {
        offset: 8
      }) || i([109, 112, 52, 50], {
        offset: 8
      }) || i([105, 115, 111, 109], {
        offset: 8
      }) || i([105, 115, 111, 50], {
        offset: 8
      }) || i([109, 109, 112, 52], {
        offset: 8
      }) || i([77, 52, 86], {
        offset: 8
      }) || i([100, 97, 115, 104], {
        offset: 8
      }))) return {
      ext: "mp4",
      mime: "video/mp4"
    };
    if (i([77, 84, 104, 100])) return {
      ext: "mid",
      mime: "audio/midi"
    };
    if (i([26, 69, 223, 163])) {
      const f = h.subarray(4, 4100),
        l = f.findIndex((u, x, y) => y[x] === 66 && y[x + 1] === 130);
      if (l !== -1) {
        const u = l + 3,
          x = y => [...y].every((b, g) => f[u + g] === b.charCodeAt(0));
        if (x("matroska")) return {
          ext: "mkv",
          mime: "video/x-matroska"
        };
        if (x("webm")) return {
          ext: "webm",
          mime: "video/webm"
        }
      }
    }
    if (i([0, 0, 0, 20, 102, 116, 121, 112, 113, 116, 32, 32]) || i([102, 114, 101, 101], {
        offset: 4
      }) || i([102, 116, 121, 112, 113, 116, 32, 32], {
        offset: 4
      }) || i([109, 100, 97, 116], {
        offset: 4
      }) || i([109, 111, 111, 118], {
        offset: 4
      }) || i([119, 105, 100, 101], {
        offset: 4
      })) return {
      ext: "mov",
      mime: "video/quicktime"
    };
    if (i([82, 73, 70, 70])) {
      if (i([65, 86, 73], {
          offset: 8
        })) return {
        ext: "avi",
        mime: "video/vnd.avi"
      };
      if (i([87, 65, 86, 69], {
          offset: 8
        })) return {
        ext: "wav",
        mime: "audio/vnd.wave"
      };
      if (i([81, 76, 67, 77], {
          offset: 8
        })) return {
        ext: "qcp",
        mime: "audio/qcelp"
      }
    }
    if (i([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
      let f = 30;
      do {
        const l = readUInt64LE(h, f + 16);
        if (i([145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101], {
            offset: f
          })) {
          if (i([64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], {
              offset: f + 24
            })) return {
            ext: "wma",
            mime: "audio/x-ms-wma"
          };
          if (i([192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], {
              offset: f + 24
            })) return {
            ext: "wmv",
            mime: "video/x-ms-asf"
          };
          break
        }
        f += l
      } while (f + 24 <= h.length);
      return {
        ext: "asf",
        mime: "application/vnd.ms-asf"
      }
    }
    if (i([0, 0, 1, 186]) || i([0, 0, 1, 179])) return {
      ext: "mpg",
      mime: "video/mpeg"
    };
    if (i([102, 116, 121, 112, 51, 103], {
        offset: 4
      })) return {
      ext: "3gp",
      mime: "video/3gpp"
    };
    for (let f = 0; f < 2 && f < h.length - 16; f++) {
      if (i([73, 68, 51], {
          offset: f
        }) || i([255, 226], {
          offset: f,
          mask: [255, 226]
        })) return {
        ext: "mp3",
        mime: "audio/mpeg"
      };
      if (i([255, 228], {
          offset: f,
          mask: [255, 228]
        })) return {
        ext: "mp2",
        mime: "audio/mpeg"
      };
      if (i([255, 248], {
          offset: f,
          mask: [255, 252]
        })) return {
        ext: "mp2",
        mime: "audio/mpeg"
      };
      if (i([255, 240], {
          offset: f,
          mask: [255, 252]
        })) return {
        ext: "mp4",
        mime: "audio/mpeg"
      }
    }
    if (i([102, 116, 121, 112, 77, 52, 65], {
        offset: 4
      })) return {
      ext: "m4a",
      mime: "audio/mp4"
    };
    if (i([79, 112, 117, 115, 72, 101, 97, 100], {
        offset: 28
      })) return {
      ext: "opus",
      mime: "audio/opus"
    };
    if (i([79, 103, 103, 83])) return i([128, 116, 104, 101, 111, 114, 97], {
      offset: 28
    }) ? {
      ext: "ogv",
      mime: "video/ogg"
    } : i([1, 118, 105, 100, 101, 111, 0], {
      offset: 28
    }) ? {
      ext: "ogm",
      mime: "video/ogg"
    } : i([127, 70, 76, 65, 67], {
      offset: 28
    }) ? {
      ext: "oga",
      mime: "audio/ogg"
    } : i([83, 112, 101, 101, 120, 32, 32], {
      offset: 28
    }) ? {
      ext: "spx",
      mime: "audio/ogg"
    } : i([1, 118, 111, 114, 98, 105, 115], {
      offset: 28
    }) ? {
      ext: "ogg",
      mime: "audio/ogg"
    } : {
      ext: "ogx",
      mime: "application/ogg"
    };
    if (i([102, 76, 97, 67])) return {
      ext: "flac",
      mime: "audio/x-flac"
    };
    if (i([77, 65, 67, 32])) return {
      ext: "ape",
      mime: "audio/ape"
    };
    if (i([119, 118, 112, 107])) return {
      ext: "wv",
      mime: "audio/wavpack"
    };
    if (i([35, 33, 65, 77, 82, 10])) return {
      ext: "amr",
      mime: "audio/amr"
    };
    if (i([37, 80, 68, 70])) return {
      ext: "pdf",
      mime: "application/pdf"
    };
    if (i([77, 90])) return {
      ext: "exe",
      mime: "application/x-msdownload"
    };
    if ((h[0] === 67 || h[0] === 70) && i([87, 83], {
        offset: 1
      })) return {
      ext: "swf",
      mime: "application/x-shockwave-flash"
    };
    if (i([123, 92, 114, 116, 102])) return {
      ext: "rtf",
      mime: "application/rtf"
    };
    if (i([0, 97, 115, 109])) return {
      ext: "wasm",
      mime: "application/wasm"
    };
    if (i([119, 79, 70, 70]) && (i([0, 1, 0, 0], {
        offset: 4
      }) || i([79, 84, 84, 79], {
        offset: 4
      }))) return {
      ext: "woff",
      mime: "font/woff"
    };
    if (i([119, 79, 70, 50]) && (i([0, 1, 0, 0], {
        offset: 4
      }) || i([79, 84, 84, 79], {
        offset: 4
      }))) return {
      ext: "woff2",
      mime: "font/woff2"
    };
    if (i([76, 80], {
        offset: 34
      }) && (i([0, 0, 1], {
        offset: 8
      }) || i([1, 0, 2], {
        offset: 8
      }) || i([2, 0, 2], {
        offset: 8
      }))) return {
      ext: "eot",
      mime: "application/vnd.ms-fontobject"
    };
    if (i([0, 1, 0, 0, 0])) return {
      ext: "ttf",
      mime: "font/ttf"
    };
    if (i([79, 84, 84, 79, 0])) return {
      ext: "otf",
      mime: "font/otf"
    };
    if (i([0, 0, 1, 0])) return {
      ext: "ico",
      mime: "image/x-icon"
    };
    if (i([0, 0, 2, 0])) return {
      ext: "cur",
      mime: "image/x-icon"
    };
    if (i([70, 76, 86, 1])) return {
      ext: "flv",
      mime: "video/x-flv"
    };
    if (i([37, 33])) return {
      ext: "ps",
      mime: "application/postscript"
    };
    if (i([253, 55, 122, 88, 90, 0])) return {
      ext: "xz",
      mime: "application/x-xz"
    };
    if (i([83, 81, 76, 105])) return {
      ext: "sqlite",
      mime: "application/x-sqlite3"
    };
    if (i([78, 69, 83, 26])) return {
      ext: "nes",
      mime: "application/x-nintendo-nes-rom"
    };
    if (i([67, 114, 50, 52])) return {
      ext: "crx",
      mime: "application/x-google-chrome-extension"
    };
    if (i([77, 83, 67, 70]) || i([73, 83, 99, 40])) return {
      ext: "cab",
      mime: "application/vnd.ms-cab-compressed"
    };
    if (i([33, 60, 97, 114, 99, 104, 62, 10, 100, 101, 98, 105, 97, 110, 45, 98, 105, 110, 97, 114, 121])) return {
      ext: "deb",
      mime: "application/x-deb"
    };
    if (i([33, 60, 97, 114, 99, 104, 62])) return {
      ext: "ar",
      mime: "application/x-unix-archive"
    };
    if (i([237, 171, 238, 219])) return {
      ext: "rpm",
      mime: "application/x-rpm"
    };
    if (i([31, 160]) || i([31, 157])) return {
      ext: "Z",
      mime: "application/x-compress"
    };
    if (i([76, 90, 73, 80])) return {
      ext: "lz",
      mime: "application/x-lzip"
    };
    if (i([208, 207, 17, 224, 161, 177, 26, 225])) return {
      ext: "msi",
      mime: "application/x-msi"
    };
    if (i([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) return {
      ext: "mxf",
      mime: "application/mxf"
    };
    if (i([71], {
        offset: 4
      }) && (i([71], {
        offset: 192
      }) || i([71], {
        offset: 196
      }))) return {
      ext: "mts",
      mime: "video/mp2t"
    };
    if (i([66, 76, 69, 78, 68, 69, 82])) return {
      ext: "blend",
      mime: "application/x-blender"
    };
    if (i([66, 80, 71, 251])) return {
      ext: "bpg",
      mime: "image/bpg"
    };
    if (i([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
      if (i([106, 112, 50, 32], {
          offset: 20
        })) return {
        ext: "jp2",
        mime: "image/jp2"
      };
      if (i([106, 112, 120, 32], {
          offset: 20
        })) return {
        ext: "jpx",
        mime: "image/jpx"
      };
      if (i([106, 112, 109, 32], {
          offset: 20
        })) return {
        ext: "jpm",
        mime: "image/jpm"
      };
      if (i([109, 106, 112, 50], {
          offset: 20
        })) return {
        ext: "mj2",
        mime: "image/mj2"
      }
    }
    if (i([70, 79, 82, 77])) return {
      ext: "aif",
      mime: "audio/aiff"
    };
    if (c("<?xml ")) return {
      ext: "xml",
      mime: "application/xml"
    };
    if (i([66, 79, 79, 75, 77, 79, 66, 73], {
        offset: 60
      })) return {
      ext: "mobi",
      mime: "application/x-mobipocket-ebook"
    };
    if (i([102, 116, 121, 112], {
        offset: 4
      })) {
      if (i([109, 105, 102, 49], {
          offset: 8
        })) return {
        ext: "heic",
        mime: "image/heif"
      };
      if (i([109, 115, 102, 49], {
          offset: 8
        })) return {
        ext: "heic",
        mime: "image/heif-sequence"
      };
      if (i([104, 101, 105, 99], {
          offset: 8
        }) || i([104, 101, 105, 120], {
          offset: 8
        })) return {
        ext: "heic",
        mime: "image/heic"
      };
      if (i([104, 101, 118, 99], {
          offset: 8
        }) || i([104, 101, 118, 120], {
          offset: 8
        })) return {
        ext: "heic",
        mime: "image/heic-sequence"
      }
    }
    return i([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]) ? {
      ext: "ktx",
      mime: "image/ktx"
    } : i([68, 73, 67, 77], {
      offset: 128
    }) ? {
      ext: "dcm",
      mime: "application/dicom"
    } : i([77, 80, 43]) ? {
      ext: "mpc",
      mime: "audio/x-musepack"
    } : i([77, 80, 67, 75]) ? {
      ext: "mpc",
      mime: "audio/x-musepack"
    } : i([66, 69, 71, 73, 78, 58]) ? {
      ext: "ics",
      mime: "text/calendar"
    } : i([103, 108, 84, 70, 2, 0, 0, 0]) ? {
      ext: "glb",
      mime: "model/gltf-binary"
    } : i([212, 195, 178, 161]) || i([161, 178, 195, 212]) ? {
      ext: "pcap",
      mime: "application/vnd.tcpdump.pcap"
    } : null
  };
  module.exports = fileType, module.exports.default = fileType, Object.defineProperty(fileType, "minimumBytes", {
    value: 4100
  }), module.exports.stream = readableStream => new Promise((resolve, reject) => {
    const stream = eval("require")("stream");
    readableStream.once("readable", () => {
      const d = new stream.PassThrough,
        h = readableStream.read(module.exports.minimumBytes) || readableStream.read();
      try {
        d.fileType = fileType(h)
      } catch (i) {
        reject(i)
      }
      readableStream.unshift(h), stream.pipeline ? resolve(stream.pipeline(readableStream, d, () => {})) : resolve(readableStream.pipe(d))
    })
  })
})(fileType$1);
var fileTypeExports = fileType$1.exports;
const fileType = fileTypeExports,
  imageExts = new Set(["jpg", "png", "gif", "webp", "flif", "cr2", "tif", "bmp", "jxr", "psd", "ico", "bpg", "jp2", "jpm", "jpx", "heic", "cur", "dcm"]),
  imageType = d => {
    const h = fileType(d);
    return imageExts.has(h && h.ext) ? h : null
  };
imageType$1.exports = imageType;
imageType$1.exports.default = imageType;
Object.defineProperty(imageType, "minimumBytes", {
  value: fileType.minimumBytes
});
var imageTypeExports = imageType$1.exports;
const t = getDefaultExportFromCjs(imageTypeExports),
  n = async d => {
    const {
      src: h = ""
    } = d;
    if (!h) return {
      width: 0,
      height: 0,
      naturalWidth: 0,
      naturalHeight: 0
    };
    const {
      imageInstance: i
    } = await a(d);
    return {
      width: i.width,
      height: i.height,
      naturalWidth: i.naturalWidth,
      naturalHeight: i.naturalHeight
    }
  }, e = async d => t(new Uint8Array(d)), a = async d => {
    const {
      src: h = "",
      crossOrigin: i
    } = d;
    return {
      ...await new Promise((c, f) => {
        const l = new Image;
        i !== void 0 && (l.crossOrigin = i), l.onload = async u => {
          console.log(u), c({
            imageInstance: l,
            data: u
          })
        }, l.src = h, l.onerror = f
      }),
      imageType: await e(await r(h))
    }
  }, r = (d = "") => new Promise((h, i) => {
    const c = new XMLHttpRequest;
    c.open("GET", d), c.responseType = "arraybuffer", c.onload = () => {
      h(c.response)
    }, c.onerror = i, c.send()
  });
var o;
(function(d) {
  d.BASE64 = "base64", d.BLOB = "blob", d.BLOB_URL = "blobURL"
})(o || (o = {}));
class p {
  constructor() {
    M(this, "cropperJsInstance");
    M(this, "parsedFrameInfo");
    M(this, "commonCropOptions");
    M(this, "frameCropperInstance");
    M(this, "inputCropperOptions");
    M(this, "imageTypeInfo", null)
  }
  async crop(h) {
    var c;
    this.userInputValidator(h), this.inputCropperOptions = this.cleanUserInput(h), await this.init(), await this.decodeGIF();
    const i = await this.checkIsStaticImage();
    if (i.isStatic) return this.handleStaticImage(i.imageInfo.imageInstance);
    {
      const f = await this.cropFrames();
      return this.saveGif(f, ((c = this.parsedFrameInfo) == null ? void 0 : c.delays) || [])
    }
  }
  async init() {
    var c, f, l;
    this.cropperJsInstance = this.inputCropperOptions.cropperInstance;
    const h = Object.assign({
        width: 100,
        height: 100,
        scaleX: 1,
        scaleY: 1,
        x: 0,
        y: 0,
        rotate: 0,
        left: 0,
        top: 0
      }, this.inputCropperOptions.cropperJsOpts || {}, ((c = this.cropperJsInstance) == null ? void 0 : c.getData()) || {}),
      i = ((f = this.cropperJsInstance) == null ? void 0 : f.getImageData()) || await n({
        src: this.inputCropperOptions.src,
        crossOrigin: this.inputCropperOptions.crossOrigin
      }) || {};
    this.commonCropOptions = {
      cropperJsOpts: this.imageDataFormat(h, i),
      imageData: i,
      cropBoxData: ((l = this.cropperJsInstance) == null ? void 0 : l.getCropBoxData()) || h
    }, this.commonCropOptions.cropperJsOpts.rotate = this.normalizeRotate(this.commonCropOptions.cropperJsOpts.rotate)
  }
  cleanUserInput(h) {
    const {
      cropperInstance: i
    } = h;
    return i && (delete h.cropperJsOpts, delete h.src), h
  }
  userInputValidator(h) {
    const {
      cropperInstance: i,
      cropperJsOpts: c,
      src: f
    } = h;
    if (!i) {
      if (!c) throw new Error("If cropperInstance is not specified, cropperJsOpts must be specified.");
      if (!f) throw new Error("If cropperInstance is not specified, src must be specified.")
    }
  }
  normalizeRotate(h) {
    return h < 0 ? 360 + h % 360 : h
  }
  imageDataFormat(h, i) {
    return h.left = h.x, h.top = h.y, h.width = h.width || i.naturalWidth, h.height = h.height || i.naturalHeight, h
  }
  async decodeGIF() {
    var c;
    const h = new a$1(this.inputCropperOptions.src || ((c = this.cropperJsInstance) == null ? void 0 : c.url) || ""),
      i = await h.decompressFrames();
    this.parsedFrameInfo = i
  }
  ensureFrameCropperExist() {
    this.frameCropperInstance || (this.frameCropperInstance = new t$1({
      commonCropOptions: this.commonCropOptions
    }))
  }
  async cropFrames() {
    return this.ensureFrameCropperExist(), this.frameCropperInstance.init({
      commonCropOptions: this.commonCropOptions
    }), this.frameCropperInstance.cropGif(this.parsedFrameInfo)
  }
  async saveGif(h, i) {
    return new r$1({
      frames: h,
      commonCropOptions: this.commonCropOptions,
      frameDelays: i,
      gifJsOptions: this.inputCropperOptions.gifJsOptions,
      outputType: this.inputCropperOptions.outputType
    }).bootstrap()
  }
  async checkIsStaticImage() {
    var c, f, l;
    const h = ((c = this.cropperJsInstance) == null ? void 0 : c.url) ?? ((f = this.inputCropperOptions) == null ? void 0 : f.src),
      i = await a({
        src: h,
        crossOrigin: this.inputCropperOptions.crossOrigin
      });
    return {
      isStatic: ((l = i == null ? void 0 : i.imageType) == null ? void 0 : l.mime) !== "image/gif",
      imageInfo: i
    }
  }
  async handleStaticImage(h) {
    const i = document.createElement("canvas"),
      c = i.getContext("2d");
    i.width = h.width, i.height = h.height, c == null || c.drawImage(h, 0, 0), this.ensureFrameCropperExist(), this.frameCropperInstance.init({
      commonCropOptions: this.commonCropOptions
    });
    const f = await this.frameCropperInstance.cropStaticImage(i);
    return c == null || c.clearRect(0, 0, i.width, i.height), i.width = f.width, i.height = f.height, c == null || c.putImageData(f, 0, 0), new Promise((l, u) => {
      var y, b;
      const {
        outputType: x = o.BLOB_URL
      } = this.inputCropperOptions;
      x === o.BASE64 ? l(i.toDataURL((y = this.imageTypeInfo) == null ? void 0 : y.mime)) : i.toBlob(g => {
        if (!g) return u(null);
        if (x === o.BLOB) l(g);
        else {
          const m = window.URL.createObjectURL(g);
          l(m)
        }
      }, (b = this.imageTypeInfo) == null ? void 0 : b.mime)
    })
  }
}
const _hoisted_1$1 = {
    class: "controls"
  },
  _sfc_main$1 = defineComponent({
    __name: "ImageCropperModal",
    props: {
      file: {},
      params: {}
    },
    emits: ["cancel", "done"],
    setup(d, {
      emit: h
    }) {
      const i = d,
        c = h,
        f = ref(),
        l = ref(),
        u = async () => {
          var w;
          const m = f.value,
            v = l.value;
          m || !v || (await new Promise(C => {
            const T = new FileReader;
            v.title = i.file.name, T.onload = function(E) {
              v.src = E.target.result, C(void 0)
            }, T.readAsDataURL(i.file)
          }), await nextTick(), f.value = new Cropper(v, {
            aspectRatio: (w = i.params) == null ? void 0 : w.aspectRatio,
            checkCrossOrigin: !1,
            dragMode: "move",
            autoCropArea: 1,
            restore: !1,
            guides: !1,
            center: !1,
            highlight: !1,
            cropBoxMovable: !1,
            cropBoxResizable: !1,
            toggleDragModeOnDblclick: !1,
            background: !1,
            minCropBoxWidth: window.innerWidth - 32,
            viewMode: 1
          }))
        };
      u(), watch(l, u);
      const x = () => {
          var m;
          return (m = f.value) == null ? void 0 : m.rotate(-90)
        },
        y = () => {
          var m;
          return (m = f.value) == null ? void 0 : m.rotate(90)
        },
        b = () => c("cancel"),
        g = async () => {
          if (!f.value) return;
          if (i.file.type === "image/gif") {
            const v = await new Promise(C => {
                new p().crop({
                  cropperInstance: f.value,
                  src: "xxx.gif",
                  outputType: "blob"
                }).then(T => C(T))
              }),
              w = new File([v], i.file.name, {
                type: i.file.type
              });
            c("done", w)
          } else f.value.getCroppedCanvas().toBlob(w => {
            if (!w) return;
            const C = new File([w], i.file.name, {
              type: i.file.type
            });
            c("done", C)
          })
        };
      return (m, v) => {
        var C;
        const w = _sfc_main$3;
        return openBlock(), createBlock(Teleport, {
          to: "body"
        }, [createBaseVNode("div", {
          class: "kit-image-cropper-modal",
          style: normalizeStyle({
            "--border-radius": (C = m.params) != null && C.borderRadius ? `${m.params.borderRadius}px` : "0"
          })
        }, [createBaseVNode("div", {
          class: "container",
          onTouchmove: v[0] || (v[0] = withModifiers(() => {}, ["stop", "prevent"]))
        }, [createBaseVNode("img", {
          ref_key: "imgEl",
          ref: l
        }, null, 512)], 32), createBaseVNode("div", _hoisted_1$1, [createBaseVNode("button", {
          type: "button",
          class: "reset button cancel-btn",
          onClick: b
        }, toDisplayString(("t" in m ? m.t : unref(t$3))("base.cancel")), 1), createBaseVNode("button", {
          type: "button",
          class: "reset rotate-left",
          onClick: x
        }, [createVNode(w, {
          name: "arrow-rotate-left",
          class: "icon"
        })]), createBaseVNode("button", {
          type: "button",
          class: "reset rotate-right",
          onClick: y
        }, [createVNode(w, {
          name: "arrow-rotate-right",
          class: "icon"
        })]), createBaseVNode("button", {
          type: "button",
          class: "reset button done-btn",
          onClick: g
        }, toDisplayString(("t" in m ? m.t : unref(t$3))("base.done")), 1)])], 4)])
      }
    }
  }),
  __nuxt_component_2 = _export_sfc(_sfc_main$1, [
    ["__scopeId", "data-v-d06ac28b"]
  ]),
  _hoisted_1 = {
    class: "kit-file-uploader"
  },
  _hoisted_2 = {
    key: 0,
    class: "upload-zone"
  },
  _sfc_main = defineComponent({
    __name: "FileUploader",
    props: {
      hideUi: {
        type: Boolean,
        default: !1
      },
      accept: {
        type: Array,
        required: !0
      },
      maxFileSizeMb: {
        type: Number,
        default: 10
      },
      cropperParams: {
        type: Object,
        default: void 0
      },
      crop: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["uploaded", "update:progress"],
    setup(d, {
      expose: h,
      emit: i
    }) {
      const c = d,
        f = i,
        l = ref(),
        u = ref(),
        x = () => {
          var w;
          return (w = u.value) == null ? void 0 : w.triggerFileUpload()
        },
        y = w => {
          const C = URL.createObjectURL(w);
          l.value = {
            status: FILE_UPLOAD_STATUS.UPLOADING,
            percent: 0,
            localUrl: C
          }, client.uploadFile(w, T => l.value = {
            status: FILE_UPLOAD_STATUS.UPLOADING,
            percent: T,
            localUrl: C
          }).then(T => {
            if (T.err) {
              l.value = {
                status: FILE_UPLOAD_STATUS.ERROR
              };
              return
            }
            l.value = {
              status: FILE_UPLOAD_STATUS.SUCCESS,
              file: T.data,
              localUrl: C
            }, f("uploaded", T.data)
          }).finally(() => l.value = void 0)
        },
        b = ref(),
        g = w => {
          c.crop ? b.value = w : y(w)
        },
        m = w => {
          b.value = void 0, y(w)
        },
        v = () => {
          b.value = void 0
        };
      return watch(l, w => f("update:progress", w), {
        deep: !0
      }), h({
        triggerFileUpload: x
      }), (w, C) => {
        const T = __nuxt_component_0,
          E = __nuxt_component_1,
          A = __nuxt_component_2;
        return openBlock(), createElementBlock("div", _hoisted_1, [d.hideUi ? createCommentVNode("", !0) : (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(T, {
          label: "upload",
          onClick: C[0] || (C[0] = O => x())
        })])), createVNode(E, {
          ref_key: "fileInputRef",
          ref: u,
          accept: d.accept,
          "max-file-size-mb": d.maxFileSizeMb,
          onSelected: C[1] || (C[1] = O => g(O))
        }, null, 8, ["accept", "max-file-size-mb"]), unref(b) ? (openBlock(), createBlock(A, {
          key: 1,
          file: unref(b),
          class: "cropper",
          params: d.cropperParams,
          onCancel: v,
          onDone: m
        }, null, 8, ["file", "params"])) : createCommentVNode("", !0)])
      }
    }
  }),
  KitFileUploader = _export_sfc(_sfc_main, [
    ["__scopeId", "data-v-71c10083"]
  ]);
export {
  KitFileUploader as K
};