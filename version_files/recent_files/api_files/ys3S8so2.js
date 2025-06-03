var _a = Object.defineProperty;
var va = (r, s, e) => s in r ? _a(r, s, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[s] = e;
var u = (r, s, e) => va(r, typeof s != "symbol" ? s + "" : s, e);
import {
  ct as ba,
  cu as Aa,
  cv as wa,
  cw as gs,
  ce as ze,
  bz as le,
  bf as Hn,
  h as _s,
  j as Ta,
  ai as vs,
  aj as H,
  an as K,
  l as Yn,
  A as b,
  bR as P,
  bm as jr,
  cx as $a,
  aG as Ze,
  af as ee,
  cy as bs,
  Y as Sa,
  bV as qa,
  ca as ja,
  cl as ve,
  cj as _e,
  bP as Oe,
  be as Pa,
  k as ka,
  cm as Fe
} from "./Izfnm6Yj.js";
import {
  d as m
} from "./BTK0DGc_.js";
var Qn = class extends Map {
    constructor(r = {}) {
      if (super(), !(r.maxSize && r.maxSize > 0)) throw new TypeError("`maxSize` must be a number greater than 0");
      if (typeof r.maxAge == "number" && r.maxAge === 0) throw new TypeError("`maxAge` must be a number greater than 0");
      this.maxSize = r.maxSize, this.maxAge = r.maxAge || Number.POSITIVE_INFINITY, this.onEviction = r.onEviction, this.cache = new Map, this.oldCache = new Map, this._size = 0
    }
    _emitEvictions(r) {
      if (typeof this.onEviction == "function")
        for (const [s, e] of r) this.onEviction(s, e.value)
    }
    _deleteIfExpired(r, s) {
      return typeof s.expiry == "number" && s.expiry <= Date.now() ? (typeof this.onEviction == "function" && this.onEviction(r, s.value), this.delete(r)) : !1
    }
    _getOrDeleteIfExpired(r, s) {
      if (this._deleteIfExpired(r, s) === !1) return s.value
    }
    _getItemValue(r, s) {
      return s.expiry ? this._getOrDeleteIfExpired(r, s) : s.value
    }
    _peek(r, s) {
      const e = s.get(r);
      return this._getItemValue(r, e)
    }
    _set(r, s) {
      this.cache.set(r, s), this._size++, this._size >= this.maxSize && (this._size = 0, this._emitEvictions(this.oldCache), this.oldCache = this.cache, this.cache = new Map)
    }
    _moveToRecent(r, s) {
      this.oldCache.delete(r), this._set(r, s)
    }* _entriesAscending() {
      for (const r of this.oldCache) {
        const [s, e] = r;
        this.cache.has(s) || this._deleteIfExpired(s, e) === !1 && (yield r)
      }
      for (const r of this.cache) {
        const [s, e] = r;
        this._deleteIfExpired(s, e) === !1 && (yield r)
      }
    }
    get(r) {
      if (this.cache.has(r)) {
        const s = this.cache.get(r);
        return this._getItemValue(r, s)
      }
      if (this.oldCache.has(r)) {
        const s = this.oldCache.get(r);
        if (this._deleteIfExpired(r, s) === !1) return this._moveToRecent(r, s), s.value
      }
    }
    set(r, s, {
      maxAge: e = this.maxAge
    } = {}) {
      const t = typeof e == "number" && e !== Number.POSITIVE_INFINITY ? Date.now() + e : void 0;
      return this.cache.has(r) ? this.cache.set(r, {
        value: s,
        expiry: t
      }) : this._set(r, {
        value: s,
        expiry: t
      }), this
    }
    has(r) {
      return this.cache.has(r) ? !this._deleteIfExpired(r, this.cache.get(r)) : this.oldCache.has(r) ? !this._deleteIfExpired(r, this.oldCache.get(r)) : !1
    }
    peek(r) {
      if (this.cache.has(r)) return this._peek(r, this.cache);
      if (this.oldCache.has(r)) return this._peek(r, this.oldCache)
    }
    delete(r) {
      const s = this.cache.delete(r);
      return s && this._size--, this.oldCache.delete(r) || s
    }
    clear() {
      this.cache.clear(), this.oldCache.clear(), this._size = 0
    }
    resize(r) {
      if (!(r && r > 0)) throw new TypeError("`maxSize` must be a number greater than 0");
      const s = [...this._entriesAscending()],
        e = s.length - r;
      e < 0 ? (this.cache = new Map(s), this.oldCache = new Map, this._size = s.length) : (e > 0 && this._emitEvictions(s.slice(0, e)), this.oldCache = new Map(s.slice(e)), this.cache = new Map, this._size = 0), this.maxSize = r
    }* keys() {
      for (const [r] of this) yield r
    }* values() {
      for (const [, r] of this) yield r
    }*[Symbol.iterator]() {
      for (const r of this.cache) {
        const [s, e] = r;
        this._deleteIfExpired(s, e) === !1 && (yield [s, e.value])
      }
      for (const r of this.oldCache) {
        const [s, e] = r;
        this.cache.has(s) || this._deleteIfExpired(s, e) === !1 && (yield [s, e.value])
      }
    }* entriesDescending() {
      let r = [...this.cache];
      for (let s = r.length - 1; s >= 0; --s) {
        const e = r[s],
          [t, n] = e;
        this._deleteIfExpired(t, n) === !1 && (yield [t, n.value])
      }
      r = [...this.oldCache];
      for (let s = r.length - 1; s >= 0; --s) {
        const e = r[s],
          [t, n] = e;
        this.cache.has(t) || this._deleteIfExpired(t, n) === !1 && (yield [t, n.value])
      }
    }* entriesAscending() {
      for (const [r, s] of this._entriesAscending()) yield [r, s.value]
    }
    get size() {
      if (!this._size) return this.oldCache.size;
      let r = 0;
      for (const s of this.oldCache.keys()) this.cache.has(s) || r++;
      return Math.min(this._size + r, this.maxSize)
    }
    entries() {
      return this.entriesAscending()
    }
    forEach(r, s = this) {
      for (const [e, t] of this.entriesAscending()) r.call(s, t, e, this)
    }
    get[Symbol.toStringTag]() {
      return JSON.stringify([...this.entriesAscending()])
    }
  },
  Ea = Object.create,
  Mr = Object.defineProperty,
  xa = Object.defineProperties,
  Ia = Object.getOwnPropertyDescriptor,
  Oa = Object.getOwnPropertyDescriptors,
  Xn = Object.getOwnPropertyNames,
  St = Object.getOwnPropertySymbols,
  Ca = Object.getPrototypeOf,
  Ur = Object.prototype.hasOwnProperty,
  Zn = Object.prototype.propertyIsEnumerable,
  As = (r, s, e) => s in r ? Mr(r, s, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
  }) : r[s] = e,
  ae = (r, s) => {
    for (var e in s || (s = {})) Ur.call(s, e) && As(r, e, s[e]);
    if (St)
      for (var e of St(s)) Zn.call(s, e) && As(r, e, s[e]);
    return r
  },
  Ce = (r, s) => xa(r, Oa(s)),
  De = (r, s) => {
    var e = {};
    for (var t in r) Ur.call(r, t) && s.indexOf(t) < 0 && (e[t] = r[t]);
    if (r != null && St)
      for (var t of St(r)) s.indexOf(t) < 0 && Zn.call(r, t) && (e[t] = r[t]);
    return e
  },
  Ra = (r, s) => function() {
    return s || (0, r[Xn(r)[0]])((s = {
      exports: {}
    }).exports, s), s.exports
  },
  Na = (r, s, e, t) => {
    if (s && typeof s == "object" || typeof s == "function")
      for (let n of Xn(s)) !Ur.call(r, n) && n !== e && Mr(r, n, {
        get: () => s[n],
        enumerable: !(t = Ia(s, n)) || t.enumerable
      });
    return r
  },
  Ba = (r, s, e) => (e = r != null ? Ea(Ca(r)) : {}, Na(Mr(e, "default", {
    value: r,
    enumerable: !0
  }), r)),
  k = (r, s, e) => new Promise((t, n) => {
    var o = l => {
        try {
          c(e.next(l))
        } catch (d) {
          n(d)
        }
      },
      i = l => {
        try {
          c(e.throw(l))
        } catch (d) {
          n(d)
        }
      },
      c = l => l.done ? t(l.value) : Promise.resolve(l.value).then(o, i);
    c((e = e.apply(r, s)).next())
  }),
  eo = r => typeof r == "object" && r !== null,
  ws = r => eo(r) && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  La = Symbol("mapObjectSkip"),
  Pr = (r, s, e, t = new WeakMap) => {
    if (e = ae({
        deep: !1,
        target: {}
      }, e), t.has(r)) return t.get(r);
    t.set(r, e.target);
    const {
      target: n
    } = e;
    delete e.target;
    const o = i => i.map(c => ws(c) ? Pr(c, s, e, t) : c);
    if (Array.isArray(r)) return o(r);
    for (const [i, c] of Object.entries(r)) {
      const l = s(i, c, r);
      if (l === La) continue;
      let [d, a, {
        shouldRecurse: y = !0
      } = {}] = l;
      d !== "__proto__" && (e.deep && y && ws(a) && (a = Array.isArray(a) ? o(a) : Pr(a, s, e, t)), n[d] = a)
    }
    return n
  };

function Ts(r, s, e) {
  if (!eo(r)) throw new TypeError(`Expected an object, got \`${r}\` (${typeof r})`);
  return Pr(r, s, e)
}
var Fa = /[\p{Lu}]/u,
  Da = /[\p{Ll}]/u,
  $s = /^[\p{Lu}](?![\p{Lu}])/gu,
  to = /([\p{Alpha}\p{N}_]|$)/u,
  Jr = /[_.\- ]+/,
  Ga = new RegExp("^" + Jr.source),
  Ss = new RegExp(Jr.source + to.source, "gu"),
  qs = new RegExp("\\d+" + to.source, "gu"),
  Ma = (r, s, e, t) => {
    let n = !1,
      o = !1,
      i = !1,
      c = !1;
    for (let l = 0; l < r.length; l++) {
      const d = r[l];
      c = l > 2 ? r[l - 3] === "-" : !0, n && Fa.test(d) ? (r = r.slice(0, l) + "-" + r.slice(l), n = !1, i = o, o = !0, l++) : o && i && Da.test(d) && (!c || t) ? (r = r.slice(0, l - 1) + "-" + r.slice(l - 1), i = o, o = !1, n = !0) : (n = s(d) === d && e(d) !== d, i = o, o = e(d) === d && s(d) !== d)
    }
    return r
  },
  Ua = (r, s) => ($s.lastIndex = 0, r.replaceAll($s, e => s(e))),
  Ja = (r, s) => (Ss.lastIndex = 0, qs.lastIndex = 0, r.replaceAll(qs, (e, t, n) => ["_", "-"].includes(r.charAt(n + e.length)) ? e : s(e)).replaceAll(Ss, (e, t) => s(t)));

function Wa(r, s) {
  if (!(typeof r == "string" || Array.isArray(r))) throw new TypeError("Expected the input to be `string | string[]`");
  if (s = ae({
      pascalCase: !1,
      preserveConsecutiveUppercase: !1
    }, s), Array.isArray(r) ? r = r.map(o => o.trim()).filter(o => o.length).join("-") : r = r.trim(), r.length === 0) return "";
  const e = s.locale === !1 ? o => o.toLowerCase() : o => o.toLocaleLowerCase(s.locale),
    t = s.locale === !1 ? o => o.toUpperCase() : o => o.toLocaleUpperCase(s.locale);
  return r.length === 1 ? Jr.test(r) ? "" : s.pascalCase ? t(r) : e(r) : (r !== e(r) && (r = Ma(r, e, t, s.preserveConsecutiveUppercase)), r = r.replace(Ga, ""), r = s.preserveConsecutiveUppercase ? Ua(r, e) : e(r), s.pascalCase && (r = t(r.charAt(0)) + r.slice(1)), Ja(r, t))
}
var Va = (r, s) => r.some(e => typeof e == "string" ? e === s : (e.lastIndex = 0, e.test(s))),
  Mt = new Qn({
    maxSize: 1e5
  }),
  js = r => typeof r == "object" && r !== null && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  Ps = (r, s = {}) => {
    if (!js(r)) return r;
    const {
      exclude: e,
      pascalCase: t = !1,
      stopPaths: n,
      deep: o = !1,
      preserveConsecutiveUppercase: i = !1
    } = s, c = new Set(n), l = d => (a, y) => {
      if (o && js(y)) {
        const h = d === void 0 ? a : `${d}.${a}`;
        c.has(h) || (y = Ts(y, l(h)))
      }
      if (!(e && Va(e, a))) {
        const h = t ? `${a}_` : a;
        if (Mt.has(h)) a = Mt.get(h);
        else {
          const f = Wa(a, {
            pascalCase: t,
            locale: !1,
            preserveConsecutiveUppercase: i
          });
          a.length < 100 && Mt.set(h, f), a = f
        }
      }
      return [a, y]
    };
    return Ts(r, l(void 0))
  };

function za(r, s) {
  return Array.isArray(r) ? Object.keys(r).map(e => Ps(r[e], s)) : Ps(r, s)
}

function Ka(r) {
  return za(r, {
    deep: !0
  })
}

function ro(r) {
  const s = {};
  for (const e in r) {
    const t = r[e];
    s[e] = t === null ? void 0 : t && typeof t == "object" && t.__proto__.constructor === Object ? ro(t) : t
  }
  return s
}

function E(r) {
  return ro(Ka(r))
}
var lt = r => r.toISOString().split(".")[0],
  Ha = Ra({
    "node_modules/.pnpm/map-obj@4.3.0/node_modules/map-obj/index.js"(r, s) {
      var e = i => typeof i == "object" && i !== null,
        t = Symbol("skip"),
        n = i => e(i) && !(i instanceof RegExp) && !(i instanceof Error) && !(i instanceof Date),
        o = (i, c, l, d = new WeakMap) => {
          if (l = ae({
              deep: !1,
              target: {}
            }, l), d.has(i)) return d.get(i);
          d.set(i, l.target);
          const {
            target: a
          } = l;
          delete l.target;
          const y = h => h.map(f => n(f) ? o(f, c, l, d) : f);
          if (Array.isArray(i)) return y(i);
          for (const [h, f] of Object.entries(i)) {
            const _ = c(h, f, i);
            if (_ === t) continue;
            let [g, v, {
              shouldRecurse: S = !0
            } = {}] = _;
            g !== "__proto__" && (l.deep && S && n(v) && (v = Array.isArray(v) ? y(v) : o(v, c, l, d)), a[g] = v)
          }
          return a
        };
      s.exports = (i, c, l) => {
        if (!e(i)) throw new TypeError(`Expected an object, got \`${i}\` (${typeof i})`);
        return o(i, c, l)
      }, s.exports.mapObjectSkip = t
    }
  }),
  ks = Ba(Ha()),
  Ya = (r, s) => (r = r.replace(new RegExp("((?<![\\p{Uppercase_Letter}\\d])[\\p{Uppercase_Letter}\\d](?![\\p{Uppercase_Letter}\\d]))", "gu"), e => e.toLowerCase()), r.replace(new RegExp("(\\p{Uppercase_Letter}+)(\\p{Uppercase_Letter}\\p{Lowercase_Letter}+)", "gu"), (e, t, n) => t + s + n.toLowerCase()));

function Qa(r, {
  separator: s = "_",
  preserveConsecutiveUppercase: e = !1
} = {}) {
  if (!(typeof r == "string" && typeof s == "string")) throw new TypeError("The `text` and `separator` arguments should be of type `string`");
  if (r.length < 2) return e ? r : r.toLowerCase();
  const t = `$1${s}$2`,
    n = r.replace(new RegExp("([\\p{Lowercase_Letter}\\d])(\\p{Uppercase_Letter})", "gu"), t);
  return e ? Ya(n, s) : n.replace(new RegExp("(\\p{Uppercase_Letter})(\\p{Uppercase_Letter}\\p{Lowercase_Letter}+)", "gu"), t).toLowerCase()
}
var Xa = (r, s) => r.some(e => typeof e == "string" ? e === s : (e.lastIndex = 0, e.test(s))),
  Ut = new Qn({
    maxSize: 1e5
  }),
  Es = r => typeof r == "object" && r !== null && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  xs = (r, s = {}) => {
    if (!Es(r)) return r;
    const {
      separator: e = "_",
      exclude: t,
      deep: n = !1
    } = s, o = i => (c, l) => {
      if (n && Es(l) && (l = (0, ks.default)(l, o())), !(t && Xa(t, c))) {
        const d = `${e}${c}`;
        if (Ut.has(d)) c = Ut.get(d);
        else {
          const a = Qa(c, {
            separator: e
          });
          c.length < 100 && Ut.set(d, a), c = a
        }
      }
      return [c, l]
    };
    return (0, ks.default)(r, o())
  };

function Za(r, s) {
  return Array.isArray(r) ? Object.keys(r).map(e => xs(r[e], s)) : xs(r, s)
}

function ei(r) {
  return Za(r, {
    deep: !0
  })
}

function Is(r) {
  let s = r;
  for (; s.indexOf("/") >= 0;) s = s.replace("/", "_");
  for (; s.indexOf("+") >= 0;) s = s.replace("+", "-");
  for (; s.indexOf("=") >= 0;) s = s.replace("=", "");
  return s
}

function x(r, s) {
  const e = r.replace(/{([a-zA-Z0-9_]+)}/g, (t, n) => {
    var o, i;
    const c = (o = s == null ? void 0 : s.query) == null ? void 0 : o[n];
    if (!c) throw new Error(`Missing value for path parameter "${n}"`);
    return (i = s == null ? void 0 : s.query) == null || delete i[n], Is(c)
  });
  if (s != null && s.query) {
    for (const t in s.query) {
      const n = s.query[t];
      typeof n == "string" && (s.query[t] = Is(n))
    }
    s.query = ei(s.query)
  }
  return [e, s]
}
class ti extends Error {
  constructor(s, e) {
    super(s, e), this.name = "FetchError", e != null && e.cause && !this.cause && (this.cause = e.cause)
  }
}

function ri(r) {
  var l, d, a, y, h;
  const s = ((l = r.error) == null ? void 0 : l.message) || ((d = r.error) == null ? void 0 : d.toString()) || "",
    e = ((a = r.request) == null ? void 0 : a.method) || ((y = r.options) == null ? void 0 : y.method) || "GET",
    t = ((h = r.request) == null ? void 0 : h.url) || String(r.request) || "/",
    n = `[${e}] ${JSON.stringify(t)}`,
    o = r.response ? `${r.response.status} ${r.response.statusText}` : "<no response>",
    i = `${n}: ${o}${s?` ${s}`:""}`,
    c = new ti(i, r.error ? {
      cause: r.error
    } : void 0);
  for (const f of ["request", "options", "response"]) Object.defineProperty(c, f, {
    get() {
      return r[f]
    }
  });
  for (const [f, _] of [
      ["data", "_data"],
      ["status", "status"],
      ["statusCode", "status"],
      ["statusText", "statusText"],
      ["statusMessage", "statusText"]
    ]) Object.defineProperty(c, f, {
    get() {
      return r.response && r.response[_]
    }
  });
  return c
}
const si = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function Os(r = "GET") {
  return si.has(r.toUpperCase())
}

function ni(r) {
  if (r === void 0) return !1;
  const s = typeof r;
  return s === "string" || s === "number" || s === "boolean" || s === null ? !0 : s !== "object" ? !1 : Array.isArray(r) ? !0 : r.buffer ? !1 : r.constructor && r.constructor.name === "Object" || typeof r.toJSON == "function"
}
const oi = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
  ai = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function ii(r = "") {
  if (!r) return "json";
  const s = r.split(";").shift() || "";
  return ai.test(s) ? "json" : oi.has(s) || s.startsWith("text/") ? "text" : "blob"
}

function ci(r, s, e, t) {
  const n = di((s == null ? void 0 : s.headers) ?? (r == null ? void 0 : r.headers), e == null ? void 0 : e.headers, t);
  let o;
  return (e != null && e.query || e != null && e.params || s != null && s.params || s != null && s.query) && (o = {
    ...e == null ? void 0 : e.params,
    ...e == null ? void 0 : e.query,
    ...s == null ? void 0 : s.params,
    ...s == null ? void 0 : s.query
  }), {
    ...e,
    ...s,
    query: o,
    params: o,
    headers: n
  }
}

function di(r, s, e) {
  if (!s) return new e(r);
  const t = new e(s);
  if (r)
    for (const [n, o] of Symbol.iterator in r || Array.isArray(r) ? r : new e(r)) t.set(n, o);
  return t
}
async function pt(r, s) {
  if (s)
    if (Array.isArray(s))
      for (const e of s) await e(r);
    else await s(r)
}
const li = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  pi = new Set([101, 204, 205, 304]);

function so(r = {}) {
  const {
    fetch: s = globalThis.fetch,
    Headers: e = globalThis.Headers,
    AbortController: t = globalThis.AbortController
  } = r;
  async function n(c) {
    const l = c.error && c.error.name === "AbortError" && !c.options.timeout || !1;
    if (c.options.retry !== !1 && !l) {
      let a;
      typeof c.options.retry == "number" ? a = c.options.retry : a = Os(c.options.method) ? 0 : 1;
      const y = c.response && c.response.status || 500;
      if (a > 0 && (Array.isArray(c.options.retryStatusCodes) ? c.options.retryStatusCodes.includes(y) : li.has(y))) {
        const h = typeof c.options.retryDelay == "function" ? c.options.retryDelay(c) : c.options.retryDelay || 0;
        return h > 0 && await new Promise(f => setTimeout(f, h)), o(c.request, {
          ...c.options,
          retry: a - 1
        })
      }
    }
    const d = ri(c);
    throw Error.captureStackTrace && Error.captureStackTrace(d, o), d
  }
  const o = async function(l, d = {}) {
    const a = {
      request: l,
      options: ci(l, d, r.defaults, e),
      response: void 0,
      error: void 0
    };
    a.options.method && (a.options.method = a.options.method.toUpperCase()), a.options.onRequest && await pt(a, a.options.onRequest), typeof a.request == "string" && (a.options.baseURL && (a.request = ba(a.request, a.options.baseURL)), a.options.query && (a.request = Aa(a.request, a.options.query), delete a.options.query), "query" in a.options && delete a.options.query, "params" in a.options && delete a.options.params), a.options.body && Os(a.options.method) && (ni(a.options.body) ? (a.options.body = typeof a.options.body == "string" ? a.options.body : JSON.stringify(a.options.body), a.options.headers = new e(a.options.headers || {}), a.options.headers.has("content-type") || a.options.headers.set("content-type", "application/json"), a.options.headers.has("accept") || a.options.headers.set("accept", "application/json")) : ("pipeTo" in a.options.body && typeof a.options.body.pipeTo == "function" || typeof a.options.body.pipe == "function") && ("duplex" in a.options || (a.options.duplex = "half")));
    let y;
    if (!a.options.signal && a.options.timeout) {
      const f = new t;
      y = setTimeout(() => {
        const _ = new Error("[TimeoutError]: The operation was aborted due to timeout");
        _.name = "TimeoutError", _.code = 23, f.abort(_)
      }, a.options.timeout), a.options.signal = f.signal
    }
    try {
      a.response = await s(a.request, a.options)
    } catch (f) {
      return a.error = f, a.options.onRequestError && await pt(a, a.options.onRequestError), await n(a)
    } finally {
      y && clearTimeout(y)
    }
    if ((a.response.body || a.response._bodyInit) && !pi.has(a.response.status) && a.options.method !== "HEAD") {
      const f = (a.options.parseResponse ? "json" : a.options.responseType) || ii(a.response.headers.get("content-type") || "");
      switch (f) {
        case "json": {
          const _ = await a.response.text(),
            g = a.options.parseResponse || wa;
          a.response._data = g(_);
          break
        }
        case "stream": {
          a.response._data = a.response.body || a.response._bodyInit;
          break
        }
        default:
          a.response._data = await a.response[f]()
      }
    }
    return a.options.onResponse && await pt(a, a.options.onResponse), !a.options.ignoreResponseError && a.response.status >= 400 && a.response.status < 600 ? (a.options.onResponseError && await pt(a, a.options.onResponseError), await n(a)) : a.response
  }, i = async function(l, d) {
    return (await o(l, d))._data
  };
  return i.raw = o, i.native = (...c) => s(...c), i.create = (c = {}, l = {}) => so({
    ...r,
    ...l,
    defaults: {
      ...r.defaults,
      ...l.defaults,
      ...c
    }
  }), i
}
const qt = function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof gs < "u") return gs;
    throw new Error("unable to locate global object")
  }(),
  ui = qt.fetch ? (...r) => qt.fetch(...r) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")),
  mi = qt.Headers,
  fi = qt.AbortController,
  yi = so({
    fetch: ui,
    Headers: mi,
    AbortController: fi
  });
var hi = class {
  constructor(r) {
    var s, e;
    const t = new URL((e = (s = r == null ? void 0 : r.baseURL) != null ? s : r == null ? void 0 : r.baseUrl) != null ? e : "https://api.ston.fi"),
      n = [...new URLSearchParams(t.search)].reduce((o, [i, c]) => Ce(ae({}, o), {
        [i]: c
      }), {});
    this.apiFetch = yi.create({
      baseURL: `${t.origin}${t.pathname}`,
      query: n
    })
  }
  getAsset(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/assets/{assetAddress}", {
        method: "GET",
        query: {
          assetAddress: r
        }
      }))).asset
    })
  }
  getAssets() {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/assets", {
        method: "GET"
      }))).assetList
    })
  }
  queryAssets(r) {
    return k(this, null, function*() {
      var s = r,
        {
          unconditionalAssets: e
        } = s,
        t = De(s, ["unconditionalAssets"]);
      return E(yield this.apiFetch(...x("/v1/assets/query", {
        method: "POST",
        query: Ce(ae({}, t), {
          unconditionalAsset: e
        })
      }))).assetList
    })
  }
  searchAssets(r) {
    return k(this, null, function*() {
      var s = r,
        {
          unconditionalAssets: e
        } = s,
        t = De(s, ["unconditionalAssets"]);
      return E(yield this.apiFetch(...x("/v1/assets/search", {
        method: "POST",
        query: Ce(ae({}, t), {
          unconditionalAsset: e
        })
      }))).assetList
    })
  }
  getFarm(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/farms/{farmAddress}", {
        method: "GET",
        query: {
          farmAddress: r
        }
      }))).farm
    })
  }
  getFarms(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/farms", {
        method: "GET",
        query: r
      }))).farmList
    })
  }
  getFarmsByPool(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/farms_by_pool/{poolAddress}", {
        method: "GET",
        query: {
          poolAddress: r
        }
      }))).farmList
    })
  }
  getSwapPairs(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/markets", {
        method: "GET",
        query: r
      }))).pairs
    })
  }
  getSwapStatus(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/swap/status", {
        method: "GET",
        query: r
      })))
    })
  }
  getPool(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/pools/{poolAddress}", {
        method: "GET",
        query: typeof r == "string" ? {
          poolAddress: r
        } : r
      }))).pool
    })
  }
  getPools(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/pools", {
        method: "GET",
        query: r
      }))).poolList
    })
  }
  getPoolsByAssetPair(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/pools/by_market/{asset0Address}/{asset1Address}", {
        method: "GET",
        query: r
      }))).poolList
    })
  }
  queryPools(r) {
    return k(this, null, function*() {
      var s = r,
        {
          unconditionalAssets: e
        } = s,
        t = De(s, ["unconditionalAssets"]);
      return E(yield this.apiFetch(...x("/v1/pool/query", {
        method: "POST",
        query: Ce(ae({}, t), {
          unconditionalAsset: e
        })
      }))).poolList
    })
  }
  simulateSwap(r) {
    return k(this, null, function*() {
      var s = r,
        {
          offerUnits: e
        } = s,
        t = De(s, ["offerUnits"]);
      return E(yield this.apiFetch(...x("/v1/swap/simulate", {
        method: "POST",
        query: Ce(ae({}, t), {
          units: e
        })
      })))
    })
  }
  simulateReverseSwap(r) {
    return k(this, null, function*() {
      var s = r,
        {
          askUnits: e
        } = s,
        t = De(s, ["askUnits"]);
      return E(yield this.apiFetch(...x("/v1/reverse_swap/simulate", {
        method: "POST",
        query: Ce(ae({}, t), {
          units: e
        })
      })))
    })
  }
  simulateLiquidityProvision(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/liquidity_provision/simulate", {
        method: "POST",
        query: r
      })))
    })
  }
  getJettonWalletAddress(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/jetton/{jettonAddress}/address", {
        method: "GET",
        query: r
      }))).address
    })
  }
  getWalletAsset(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/wallets/{walletAddress}/assets/{assetAddress}", {
        method: "GET",
        query: r
      }))).asset
    })
  }
  getWalletAssets(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/wallets/{walletAddress}/assets", {
        method: "GET",
        query: {
          walletAddress: r
        }
      }))).assetList
    })
  }
  getWalletFarm(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/wallets/{walletAddress}/farms/{farmAddress}", {
        method: "GET",
        query: r
      }))).farm
    })
  }
  getWalletFarms(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/wallets/{walletAddress}/farms", {
        method: "GET",
        query: typeof r == "string" ? {
          walletAddress: r
        } : r
      }))).farmList
    })
  }
  getWalletPool(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/wallets/{walletAddress}/pools/{poolAddress}", {
        method: "GET",
        query: r
      }))).pool
    })
  }
  getWalletPools(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/wallets/{walletAddress}/pools", {
        method: "GET",
        query: typeof r == "string" ? {
          walletAddress: r
        } : r
      }))).poolList
    })
  }
  getWalletOperations(r) {
    return k(this, null, function*() {
      var s = r,
        {
          since: e,
          until: t
        } = s,
        n = De(s, ["since", "until"]);
      return E(yield this.apiFetch(...x("/v1/wallets/{walletAddress}/operations", {
        method: "GET",
        query: Ce(ae({}, n), {
          since: lt(e),
          until: lt(t)
        })
      }))).operations
    })
  }
  getOperations(r) {
    return k(this, arguments, function*({
      since: s,
      until: e
    }) {
      return E(yield this.apiFetch(...x("/v1/stats/operations", {
        method: "GET",
        query: {
          since: lt(s),
          until: lt(e)
        }
      }))).operations
    })
  }
  getRouters(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/routers", {
        method: "GET",
        query: r
      }))).routerList
    })
  }
  getRouter(r) {
    return k(this, null, function*() {
      return E(yield this.apiFetch(...x("/v1/routers/{routerAddress}", {
        method: "GET",
        query: {
          routerAddress: r
        }
      }))).router
    })
  }
};

function A(r) {
  return r instanceof m.Address ? r : m.address(r.toString())
}
var Be = class {
    constructor(r, s) {
      u(this, "address");
      this.address = A(r)
    }
    static create(r) {
      return new this(r)
    }
  },
  R = class extends Be {
    async getWalletAddress(r, s) {
      return (await r.get("get_wallet_address", [{
        type: "slice",
        cell: m.beginCell().storeAddress(A(s)).endCell()
      }])).stack.readAddress()
    }
    async getJettonData(r) {
      const s = await r.get("get_jetton_data", []);
      return {
        totalSupply: s.stack.readBigNumber(),
        canIncSupply: !!s.stack.readNumber(),
        adminAddress: s.stack.readAddressOpt(),
        contentRaw: s.stack.readCell(),
        jettonWalletCode: s.stack.readCell()
      }
    }
  },
  no = class extends Be {
    async getBalance(r) {
      if ((await r.getState()).state.type !== "active") return BigInt(0);
      const {
        balance: e
      } = await this.getWalletData(r);
      return e
    }
    async getWalletData(r) {
      const s = await r.get("get_wallet_data", []);
      return {
        balance: s.stack.readBigNumber(),
        ownerAddress: s.stack.readAddress(),
        jettonMasterAddress: s.stack.readAddress(),
        jettonWalletCode: s.stack.readCell()
      }
    }
  };

function et(r) {
  const s = m.beginCell();
  return s.storeUint(260734629, 32), s.storeUint(r.queryId, 64), s.storeCoins(BigInt(r.amount)), s.storeAddress(A(r.destination)), s.storeAddress(r.responseDestination ? A(r.responseDestination) : void 0), r.customPayload ? (s.storeBit(!0), s.storeRef(r.customPayload)) : s.storeBit(!1), s.storeCoins(BigInt(r.forwardTonAmount)), r.forwardPayload ? (s.storeBit(!0), s.storeRef(r.forwardPayload)) : s.storeBit(!1), s.endCell()
}
var pe = {
    SWAP: 1717886506,
    CROSS_SWAP: 1775180379,
    PROVIDE_LP: 935368415,
    DIRECT_ADD_LIQUIDITY: 267960262,
    REFUND_ME: 321624620,
    RESET_GAS: 701638965,
    COLLECT_FEES: 518295838,
    BURN: 1499400124,
    WITHDRAW_FEE: 894160372
  },
  gi = 15 * 60,
  M = {
    v1: "v1",
    v2_1: "v2_1",
    v2_2: "v2_2"
  },
  xt = {
    CPI: "constant_product",
    Stable: "stableswap"
  },
  Ae, Wr = (Ae = class extends Be {
    constructor(e, {
      gasConstants: t,
      ...n
    } = {}) {
      super(e, n);
      u(this, "gasConstants");
      this.gasConstants = {
        ...Ae.gasConstants,
        ...t
      }
    }
    async createRefundBody(e) {
      return m.beginCell().storeUint(pe.REFUND_ME, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeMaybeRef(e == null ? void 0 : e.leftMaybePayload).storeMaybeRef(e == null ? void 0 : e.rightMaybePayload).endCell()
    }
    async getRefundTxParams(e, t) {
      const n = this.address,
        o = await this.createRefundBody({
          leftMaybePayload: t == null ? void 0 : t.leftMaybePayload,
          rightMaybePayload: t == null ? void 0 : t.rightMaybePayload,
          queryId: t == null ? void 0 : t.queryId
        }),
        i = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.refund);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendRefund(e, t, n) {
      const o = await this.getRefundTxParams(e, n);
      return t.send(o)
    }
    async createDirectAddLiquidityBody(e) {
      return m.beginCell().storeUint(pe.DIRECT_ADD_LIQUIDITY, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount0)).storeCoins(BigInt(e.amount1)).storeCoins(BigInt(e.minimumLpToMint ?? 1)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeAddress(A(e.userWalletAddress)).storeMaybeRef(e.dexCustomPayload).storeRef(m.beginCell().storeAddress(A(e.refundAddress ?? e.userWalletAddress)).storeAddress(A(e.excessesAddress ?? e.refundAddress ?? e.userWalletAddress)).endCell()).endCell()
    }
    async getDirectAddLiquidityTxParams(e, t) {
      const n = this.address,
        o = await this.createDirectAddLiquidityBody({
          amount0: t.amount0,
          amount1: t.amount1,
          minimumLpToMint: t.minimumLpToMint,
          userWalletAddress: t.userWalletAddress,
          refundAddress: t.refundAddress,
          excessesAddress: t.excessesAddress,
          dexCustomPayload: t.dexCustomPayload,
          dexCustomPayloadForwardGasAmount: t.dexCustomPayloadForwardGasAmount,
          queryId: t.queryId
        }),
        i = BigInt(t.gasAmount ?? this.gasConstants.directAddLp);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendDirectAddLiquidity(e, t, n) {
      const o = await this.getDirectAddLiquidityTxParams(e, n);
      return t.send(o)
    }
    async createResetGasBody(e) {
      return m.beginCell().storeUint(pe.RESET_GAS, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
    }
    async getResetGasTxParams(e, t) {
      const n = this.address,
        o = await this.createResetGasBody({
          queryId: t == null ? void 0 : t.queryId
        }),
        i = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.resetGas);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendResetGas(e, t, n) {
      const o = await this.getResetGasTxParams(e, n);
      return t.send(o)
    }
    async getLpAccountData(e) {
      const t = await e.get("get_lp_account_data", []);
      return {
        userAddress: t.stack.readAddress(),
        poolAddress: t.stack.readAddress(),
        amount0: t.stack.readBigNumber(),
        amount1: t.stack.readBigNumber()
      }
    }
  }, u(Ae, "version", M.v2_1), u(Ae, "gasConstants", {
    refund: m.toNano("0.8"),
    directAddLp: m.toNano("0.3"),
    resetGas: m.toNano("0.02")
  }), Ae),
  we, rt = (we = class extends R {
    constructor(e, {
      gasConstants: t,
      ...n
    } = {}) {
      super(e, n);
      u(this, "gasConstants");
      this.gasConstants = {
        ...we.gasConstants,
        ...t
      }
    }
    async createCollectFeesBody(e) {
      return m.beginCell().storeUint(pe.COLLECT_FEES, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
    }
    async getCollectFeeTxParams(e, t) {
      const n = this.address,
        o = await this.createCollectFeesBody({
          queryId: t == null ? void 0 : t.queryId
        }),
        i = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.collectFees);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendCollectFees(e, t, n) {
      const o = await this.getCollectFeeTxParams(e, n);
      return t.send(o)
    }
    async createBurnBody(e) {
      return m.beginCell().storeUint(pe.BURN, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount)).storeAddress(null).storeMaybeRef(e.dexCustomPayload).endCell()
    }
    async getBurnTxParams(e, t) {
      const [n, o] = await Promise.all([this.getWalletAddress(e, t.userWalletAddress), this.createBurnBody({
        amount: t.amount,
        dexCustomPayload: t.dexCustomPayload,
        queryId: t.queryId
      })]), i = BigInt(t.gasAmount ?? this.gasConstants.burn);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendBurn(e, t, n) {
      const o = await this.getBurnTxParams(e, n);
      return t.send(o)
    }
    async getPoolType(e) {
      return (await e.get("get_pool_type", [])).stack.readString()
    }
    async getLpAccountAddress(e, t) {
      return (await e.get("get_lp_account_address", [{
        type: "slice",
        cell: m.beginCell().storeAddress(A(t.ownerAddress)).endCell()
      }])).stack.readAddress()
    }
    async getLpAccount(e, t) {
      const n = await this.getLpAccountAddress(e, t);
      return Wr.create(n)
    }
    async getJettonWallet(e, t) {
      const n = await this.getWalletAddress(e, t.ownerAddress);
      return no.create(n)
    }
    async getPoolData(e) {
      return (await this.implGetPoolData(e)).commonPoolData
    }
    async implGetPoolData(e) {
      const t = await e.get("get_pool_data", []);
      return {
        commonPoolData: {
          isLocked: t.stack.readBoolean(),
          routerAddress: t.stack.readAddress(),
          totalSupplyLP: t.stack.readBigNumber(),
          reserve0: t.stack.readBigNumber(),
          reserve1: t.stack.readBigNumber(),
          token0WalletAddress: t.stack.readAddress(),
          token1WalletAddress: t.stack.readAddress(),
          lpFee: t.stack.readBigNumber(),
          protocolFee: t.stack.readBigNumber(),
          protocolFeeAddress: t.stack.readAddressOpt(),
          collectedToken0ProtocolFee: t.stack.readBigNumber(),
          collectedToken1ProtocolFee: t.stack.readBigNumber()
        },
        stack: t.stack
      }
    }
  }, u(we, "version", M.v2_1), u(we, "gasConstants", {
    collectFees: m.toNano("0.4"),
    burn: m.toNano("0.8")
  }), we),
  yr, Vr = (yr = class extends rt {
    async getPoolData(r) {
      return {
        ...(await this.implGetPoolData(r)).commonPoolData
      }
    }
  }, u(yr, "dexType", xt.CPI), yr),
  Te, zr = (Te = class extends Be {
    constructor(e, {
      gasConstants: t,
      ...n
    } = {}) {
      super(e, n);
      u(this, "gasConstants");
      this.gasConstants = {
        ...Te.gasConstants,
        ...t
      }
    }
    async createWithdrawFeeBody(e) {
      return m.beginCell().storeUint(pe.WITHDRAW_FEE, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
    }
    async getWithdrawFeeTxParams(e, t) {
      const n = this.address,
        o = await this.createWithdrawFeeBody({
          queryId: t == null ? void 0 : t.queryId
        }),
        i = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.withdrawFee);
      return {
        to: n,
        body: o,
        value: i
      }
    }
    async sendWithdrawFee(e, t, n) {
      const o = await this.getWithdrawFeeTxParams(e, n);
      return t.send(o)
    }
    async getVaultData(e) {
      const t = await e.get("get_vault_data", []);
      return {
        ownerAddress: t.stack.readAddress(),
        tokenAddress: t.stack.readAddress(),
        routerAddress: t.stack.readAddress(),
        depositedAmount: t.stack.readBigNumber()
      }
    }
  }, u(Te, "version", M.v2_1), u(Te, "gasConstants", {
    withdrawFee: m.toNano("0.3")
  }), Te),
  Pe = {
    v1: "v1",
    v2_1: "v2_1"
  },
  Ne = {
    SWAP: 630424929,
    PROVIDE_LP: 4244235663,
    DIRECT_ADD_LIQUIDITY: 1291331587,
    REFUND_ME: 200537159,
    RESET_GAS: 1117846339,
    COLLECT_FEES: 533429565,
    BURN: 1499400124
  },
  oo = "EQB3ncyBUTjZUA5EnFKR5_EnOMI9V1tTEAAPaiU71gc4TiUt",
  ao = class extends Error {
    constructor({
      expected: r,
      received: s
    }) {
      super(`The version of the provided pTON (${s}) does not match the expected version (${r})`)
    }
  },
  $e, It = ($e = class extends Be {
    constructor(e, {
      gasConstants: t,
      txDeadline: n,
      ...o
    } = {}) {
      super(e, o);
      u(this, "gasConstants");
      u(this, "txDeadline");
      if (this.address.equals(m.Address.parse(oo))) throw Error(["You are trying to create an instance v2.1 Router with a v1 address", "Please use the appropriate class for the v1 Router. Otherwise, all the funds will be permanently lost."].join(`
`));
      this.gasConstants = {
        ...$e.gasConstants,
        ...t
      }, this.txDeadline = n ?? gi
    }
    async createSwapBody(e) {
      if (e.referralValue && (BigInt(e.referralValue) < 0 || BigInt(e.referralValue) > 100)) throw Error("'referralValue' should be in range [0, 100] BPS");
      return m.beginCell().storeUint(pe.SWAP, 32).storeAddress(A(e.askJettonWalletAddress)).storeAddress(A(e.refundAddress)).storeAddress(A(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(m.beginCell().storeCoins(BigInt(e.minAskAmount)).storeAddress(A(e.receiverAddress)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).storeCoins(BigInt(e.refundForwardGasAmount ?? 0)).storeMaybeRef(e.refundPayload).storeUint(BigInt(e.referralValue ?? 10), 16).storeAddress(e.referralAddress ? A(e.referralAddress) : null).endCell()).endCell()
    }
    async createCrossSwapBody(e) {
      if (e.referralValue && (BigInt(e.referralValue) < 0 || BigInt(e.referralValue) > 100)) throw Error("'referralValue' should be in range [0, 100] BPS");
      return m.beginCell().storeUint(pe.CROSS_SWAP, 32).storeAddress(A(e.askJettonWalletAddress)).storeAddress(A(e.refundAddress)).storeAddress(A(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(m.beginCell().storeCoins(BigInt(e.minAskAmount)).storeAddress(A(e.receiverAddress)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).storeCoins(BigInt(e.refundForwardGasAmount ?? 0)).storeMaybeRef(e.refundPayload).storeUint(BigInt(e.referralValue ?? 10), 16).storeAddress(e.referralAddress ? A(e.referralAddress) : null).endCell()).endCell()
    }
    async getSwapJettonToJettonTxParams(e, t) {
      const n = this.address,
        [o, i] = await Promise.all([e.open(R.create(t.offerJettonAddress)).getWalletAddress(t.userWalletAddress), e.open(R.create(t.askJettonAddress)).getWalletAddress(n)]),
        c = BigInt(t.forwardGasAmount ?? this.gasConstants.swapJettonToJetton.forwardGasAmount),
        l = await this.createSwapBody({
          askJettonWalletAddress: i,
          receiverAddress: t.receiverAddress ?? t.userWalletAddress,
          minAskAmount: t.minAskAmount,
          refundAddress: t.refundAddress ?? t.userWalletAddress,
          excessesAddress: t.excessesAddress,
          referralAddress: t.referralAddress,
          referralValue: t.referralValue,
          dexCustomPayload: t.dexCustomPayload,
          dexCustomPayloadForwardGasAmount: t.dexCustomPayloadForwardGasAmount,
          refundPayload: t.refundPayload,
          refundForwardGasAmount: t.refundForwardGasAmount,
          deadline: t.deadline
        }),
        d = et({
          queryId: t.queryId ?? 0,
          amount: t.offerAmount,
          destination: n,
          responseDestination: t.userWalletAddress,
          customPayload: t.jettonCustomPayload,
          forwardTonAmount: c,
          forwardPayload: l
        }),
        a = BigInt(t.gasAmount ?? this.gasConstants.swapJettonToJetton.gasAmount);
      return {
        to: o,
        value: a,
        body: d
      }
    }
    async sendSwapJettonToJetton(e, t, n) {
      const o = await this.getSwapJettonToJettonTxParams(e, n);
      return t.send(o)
    }
    async getSwapJettonToTonTxParams(e, t) {
      return this.assertProxyTon(t.proxyTon), await this.getSwapJettonToJettonTxParams(e, {
        ...t,
        askJettonAddress: t.proxyTon.address,
        gasAmount: t.gasAmount ?? this.gasConstants.swapJettonToTon.gasAmount,
        forwardGasAmount: t.forwardGasAmount ?? this.gasConstants.swapJettonToTon.forwardGasAmount
      })
    }
    async sendSwapJettonToTon(e, t, n) {
      const o = await this.getSwapJettonToTonTxParams(e, n);
      return t.send(o)
    }
    async getSwapTonToJettonTxParams(e, t) {
      this.assertProxyTon(t.proxyTon);
      const n = this.address,
        o = await e.open(R.create(t.askJettonAddress)).getWalletAddress(n),
        i = await this.createSwapBody({
          askJettonWalletAddress: o,
          receiverAddress: t.receiverAddress ?? t.userWalletAddress,
          minAskAmount: t.minAskAmount,
          refundAddress: t.refundAddress ?? t.userWalletAddress,
          excessesAddress: t.excessesAddress,
          referralAddress: t.referralAddress,
          referralValue: t.referralValue,
          dexCustomPayload: t.dexCustomPayload,
          dexCustomPayloadForwardGasAmount: t.dexCustomPayloadForwardGasAmount,
          refundPayload: t.refundPayload,
          refundForwardGasAmount: t.refundForwardGasAmount,
          deadline: t.deadline
        }),
        c = BigInt(t.forwardGasAmount ?? this.gasConstants.swapTonToJetton.forwardGasAmount);
      return await e.open(t.proxyTon).getTonTransferTxParams({
        queryId: t.queryId ?? 0,
        tonAmount: t.offerAmount,
        destinationAddress: n,
        refundAddress: t.userWalletAddress,
        forwardPayload: i,
        forwardTonAmount: c
      })
    }
    async sendSwapTonToJetton(e, t, n) {
      const o = await this.getSwapTonToJettonTxParams(e, n);
      return t.send(o)
    }
    async createProvideLiquidityBody(e) {
      return m.beginCell().storeUint(pe.PROVIDE_LP, 32).storeAddress(A(e.routerWalletAddress)).storeAddress(A(e.refundAddress)).storeAddress(A(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(m.beginCell().storeCoins(BigInt(e.minLpOut)).storeAddress(A(e.receiverAddress)).storeUint(e.bothPositive ? 1 : 0, 1).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).endCell()).endCell()
    }
    async getProvideLiquidityJettonTxParams(e, t) {
      return this.implGetProvideLiquidityJettonTxParams(e, {
        ...t,
        gasAmount: t.gasAmount ?? this.gasConstants.provideLpJetton.gasAmount,
        forwardGasAmount: t.forwardGasAmount ?? this.gasConstants.provideLpJetton.forwardGasAmount,
        bothPositive: !0
      })
    }
    async sendProvideLiquidityJetton(e, t, n) {
      const o = await this.getProvideLiquidityJettonTxParams(e, n);
      return t.send(o)
    }
    async getSingleSideProvideLiquidityJettonTxParams(e, t) {
      return this.implGetProvideLiquidityJettonTxParams(e, {
        ...t,
        gasAmount: t.gasAmount ?? this.gasConstants.singleSideProvideLpJetton.gasAmount,
        forwardGasAmount: t.forwardGasAmount ?? this.gasConstants.singleSideProvideLpJetton.forwardGasAmount,
        bothPositive: !1
      })
    }
    async sendSingleSideProvideLiquidityJetton(e, t, n) {
      const o = await this.getSingleSideProvideLiquidityJettonTxParams(e, n);
      return t.send(o)
    }
    async implGetProvideLiquidityJettonTxParams(e, t) {
      const n = this.address,
        [o, i] = await Promise.all([e.open(R.create(t.sendTokenAddress)).getWalletAddress(t.userWalletAddress), e.open(R.create(t.otherTokenAddress)).getWalletAddress(n)]),
        c = await this.createProvideLiquidityBody({
          routerWalletAddress: i,
          receiverAddress: t.receiverAddress ?? t.userWalletAddress,
          minLpOut: t.minLpOut,
          refundAddress: t.refundAddress ?? t.userWalletAddress,
          excessesAddress: t.excessesAddress,
          dexCustomPayload: t.dexCustomPayload,
          dexCustomPayloadForwardGasAmount: t.dexCustomPayloadForwardGasAmount,
          bothPositive: t.bothPositive,
          deadline: t.deadline
        }),
        l = BigInt(t.forwardGasAmount),
        d = et({
          queryId: t.queryId ?? 0,
          amount: t.sendAmount,
          destination: n,
          responseDestination: t.userWalletAddress,
          customPayload: t.jettonCustomPayload,
          forwardTonAmount: l,
          forwardPayload: c
        }),
        a = BigInt(t.gasAmount);
      return {
        to: o,
        value: a,
        body: d
      }
    }
    async getProvideLiquidityTonTxParams(e, t) {
      return this.implGetProvideLiquidityTonTxParams(e, {
        ...t,
        forwardGasAmount: t.forwardGasAmount ?? this.gasConstants.provideLpTon.forwardGasAmount,
        bothPositive: !0
      })
    }
    async sendProvideLiquidityTon(e, t, n) {
      const o = await this.getProvideLiquidityTonTxParams(e, n);
      return t.send(o)
    }
    async getSingleSideProvideLiquidityTonTxParams(e, t) {
      return this.implGetProvideLiquidityTonTxParams(e, {
        ...t,
        forwardGasAmount: t.forwardGasAmount ?? this.gasConstants.singleSideProvideLpTon.forwardGasAmount,
        bothPositive: !1
      })
    }
    async sendSingleSideProvideLiquidityTon(e, t, n) {
      const o = await this.getSingleSideProvideLiquidityTonTxParams(e, n);
      return t.send(o)
    }
    async implGetProvideLiquidityTonTxParams(e, t) {
      this.assertProxyTon(t.proxyTon);
      const n = this.address,
        o = await e.open(R.create(t.otherTokenAddress)).getWalletAddress(n),
        i = await this.createProvideLiquidityBody({
          routerWalletAddress: o,
          receiverAddress: t.receiverAddress ?? t.userWalletAddress,
          minLpOut: t.minLpOut,
          refundAddress: t.refundAddress ?? t.userWalletAddress,
          excessesAddress: t.excessesAddress,
          dexCustomPayload: t.dexCustomPayload,
          dexCustomPayloadForwardGasAmount: t.dexCustomPayloadForwardGasAmount,
          bothPositive: t.bothPositive,
          deadline: t.deadline
        }),
        c = BigInt(t.forwardGasAmount);
      return await e.open(t.proxyTon).getTonTransferTxParams({
        queryId: t.queryId ?? 0,
        tonAmount: t.sendAmount,
        destinationAddress: n,
        refundAddress: t.userWalletAddress,
        forwardPayload: i,
        forwardTonAmount: c
      })
    }
    get defaultDeadline() {
      return Math.floor(Date.now() / 1e3) + this.txDeadline
    }
    assertProxyTon(e) {
      if (e.version !== Pe.v2_1) throw new ao({
        expected: Pe.v2_1,
        received: e.version
      })
    }
    async getPoolAddress(e, t) {
      return (await e.get("get_pool_address", [{
        type: "slice",
        cell: m.beginCell().storeAddress(A(t.token0)).endCell()
      }, {
        type: "slice",
        cell: m.beginCell().storeAddress(A(t.token1)).endCell()
      }])).stack.readAddress()
    }
    async getPoolAddressByJettonMinters(e, t) {
      const [n, o] = await Promise.all([e.open(R.create(t.token0)).getWalletAddress(this.address), e.open(R.create(t.token1)).getWalletAddress(this.address)]);
      return await this.getPoolAddress(e, {
        token0: n,
        token1: o
      })
    }
    async getPool(e, t) {
      const n = await this.getPoolAddressByJettonMinters(e, t);
      return rt.create(n)
    }
    async getVaultAddress(e, t) {
      return (await e.get("get_vault_address", [{
        type: "slice",
        cell: m.beginCell().storeAddress(A(t.user)).endCell()
      }, {
        type: "slice",
        cell: m.beginCell().storeAddress(A(t.tokenWallet)).endCell()
      }])).stack.readAddress()
    }
    async getVault(e, t) {
      const n = e.open(R.create(t.tokenMinter)),
        o = await this.getVaultAddress(e, {
          user: t.user,
          tokenWallet: await n.getWalletAddress(this.address)
        });
      return zr.create(o)
    }
    async getRouterVersion(e) {
      const t = await e.get("get_router_version", []);
      return {
        major: t.stack.readNumber(),
        minor: t.stack.readNumber(),
        development: t.stack.readString()
      }
    }
    async getRouterData(e) {
      const t = await e.get("get_router_data", []);
      return {
        routerId: t.stack.readNumber(),
        dexType: t.stack.readString(),
        isLocked: t.stack.readBoolean(),
        adminAddress: t.stack.readAddress(),
        tempUpgrade: t.stack.readCell(),
        poolCode: t.stack.readCell(),
        jettonLpWalletCode: t.stack.readCell(),
        lpAccountCode: t.stack.readCell(),
        vaultCode: t.stack.readCell()
      }
    }
  }, u($e, "version", M.v2_1), u($e, "gasConstants", {
    swapJettonToJetton: {
      gasAmount: m.toNano("0.3"),
      forwardGasAmount: m.toNano("0.24")
    },
    swapJettonToTon: {
      gasAmount: m.toNano("0.3"),
      forwardGasAmount: m.toNano("0.24")
    },
    swapTonToJetton: {
      forwardGasAmount: m.toNano("0.3")
    },
    provideLpJetton: {
      gasAmount: m.toNano("0.3"),
      forwardGasAmount: m.toNano("0.235")
    },
    provideLpTon: {
      forwardGasAmount: m.toNano("0.3")
    },
    singleSideProvideLpJetton: {
      gasAmount: m.toNano("1"),
      forwardGasAmount: m.toNano("0.8")
    },
    singleSideProvideLpTon: {
      forwardGasAmount: m.toNano("0.8")
    }
  }), $e),
  hr, io = (hr = class extends It {
    async getPool(r, s) {
      const e = await this.getPoolAddressByJettonMinters(r, s);
      return Vr.create(e)
    }
  }, u(hr, "dexType", xt.CPI), hr),
  gr, Kr = (gr = class extends rt {
    async getPoolData(r) {
      const s = await this.implGetPoolData(r);
      return {
        ...s.commonPoolData,
        amp: s.stack.readBigNumber()
      }
    }
  }, u(gr, "dexType", xt.Stable), gr),
  _r, co = (_r = class extends It {
    async getPool(r, s) {
      const e = await this.getPoolAddressByJettonMinters(r, s);
      return Kr.create(e)
    }
  }, u(_r, "dexType", xt.Stable), _r),
  gt, _i = (gt = class extends It {}, u(gt, "CPI", io), u(gt, "Stable", co), gt),
  _t, vi = (_t = class extends rt {}, u(_t, "CPI", Vr), u(_t, "Stable", Kr), _t),
  bi = {
    DEPLOY_WALLET: 1824798067
  },
  ne, Hr = (ne = class extends R {
    constructor(e = ne.address, {
      gasConstants: t,
      ...n
    } = {}) {
      super(e, n);
      u(this, "version", ne.version);
      u(this, "gasConstants");
      this.gasConstants = {
        ...ne.gasConstants,
        ...t
      }
    }
    async getTonTransferTxParams(e, t) {
      const n = await this.getWalletAddress(e, t.destinationAddress),
        o = et({
          queryId: t.queryId ?? 0,
          amount: t.tonAmount,
          destination: t.destinationAddress,
          forwardTonAmount: BigInt(t.forwardTonAmount ?? 0),
          forwardPayload: t.forwardPayload
        }),
        i = BigInt(t.tonAmount) + BigInt(t.forwardTonAmount ?? 0);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendTonTransfer(e, t, n) {
      const o = await this.getTonTransferTxParams(e, n);
      return t.send(o)
    }
    async createDeployWalletBody(e) {
      return m.beginCell().storeUint(bi.DEPLOY_WALLET, 32).storeUint(e.queryId ?? 0, 64).storeAddress(A(e.ownerAddress)).endCell()
    }
    async getDeployWalletTxParams(e, t) {
      const n = this.address,
        o = await this.createDeployWalletBody({
          ownerAddress: t.ownerAddress,
          queryId: t == null ? void 0 : t.queryId
        }),
        i = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.deployWallet);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendDeployWallet(e, t, n) {
      const o = await this.getDeployWalletTxParams(e, n);
      return t.send(o)
    }
  }, u(ne, "version", Pe.v1), u(ne, "address", m.address("EQCM3B12QK1e4yZSf8GtBRT0aLMNyEsBc_DhVfRRtOEffLez")), u(ne, "gasConstants", {
    deployWallet: m.toNano("1.05")
  }), ne),
  Cs = {
    TON_TRANSFER: 32736093,
    DEPLOY_WALLET: 1331643155
  },
  de, Yr = (de = class extends Hr {
    constructor(e, {
      gasConstants: t,
      ...n
    } = {}) {
      super(e, n);
      u(this, "version", de.version);
      u(this, "gasConstants");
      this.gasConstants = {
        ...de.gasConstants,
        ...t
      }
    }
    async createTonTransferBody(e) {
      const t = m.beginCell();
      return t.storeUint(Cs.TON_TRANSFER, 32), t.storeUint(e.queryId ?? 0, 64), t.storeCoins(BigInt(e.tonAmount)), t.storeAddress(A(e.refundAddress)), e.forwardPayload && (t.storeBit(!0), t.storeRef(e.forwardPayload)), t.endCell()
    }
    async getTonTransferTxParams(e, t) {
      const n = await this.getWalletAddress(e, t.destinationAddress),
        o = await this.createTonTransferBody({
          tonAmount: t.tonAmount,
          refundAddress: t.refundAddress,
          forwardPayload: t.forwardPayload,
          queryId: t.queryId
        }),
        i = BigInt(t.tonAmount) + BigInt(t.forwardTonAmount ?? 0) + BigInt(this.gasConstants.tonTransfer);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendTonTransfer(e, t, n) {
      const o = await this.getTonTransferTxParams(e, n);
      return t.send(o)
    }
    async createDeployWalletBody(e) {
      return m.beginCell().storeUint(Cs.DEPLOY_WALLET, 32).storeUint(e.queryId ?? 0, 64).storeAddress(A(e.ownerAddress)).storeAddress(A(e.excessAddress)).endCell()
    }
    async getDeployWalletTxParams(e, t) {
      const n = this.address,
        o = await this.createDeployWalletBody({
          ownerAddress: t.ownerAddress,
          excessAddress: t.excessAddress,
          queryId: t == null ? void 0 : t.queryId
        }),
        i = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.deployWallet);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendDeployWallet(e, t, n) {
      const o = await this.getDeployWalletTxParams(e, n);
      return t.send(o)
    }
  }, u(de, "version", Pe.v2_1), u(de, "gasConstants", {
    tonTransfer: m.toNano("0.01"),
    deployWallet: m.toNano("0.1")
  }), de),
  Ai = {
    Router: _i,
    Pool: vi,
    LpAccount: Wr,
    Vault: zr,
    pTON: Yr
  },
  vr, Ot = (vr = class extends Wr {}, u(vr, "version", M.v2_2), vr),
  br, lo = (br = class extends rt {
    async getLpAccount(r, s) {
      const e = await this.getLpAccountAddress(r, s);
      return Ot.create(e)
    }
  }, u(br, "version", M.v2_2), br),
  Ar, Ct = (Ar = class extends zr {}, u(Ar, "version", M.v2_2), Ar),
  wr, wi = (wr = class extends It {
    async getPool(r, s) {
      const e = await this.getPoolAddressByJettonMinters(r, s);
      return lo.create(e)
    }
    async getVault(r, s) {
      const e = r.open(R.create(s.tokenMinter)),
        t = await this.getVaultAddress(r, {
          user: s.user,
          tokenWallet: await e.getWalletAddress(this.address)
        });
      return Ct.create(t)
    }
  }, u(wr, "version", M.v2_2), wr),
  Tr, po = (Tr = class extends Vr {
    async getLpAccount(r, s) {
      const e = await this.getLpAccountAddress(r, s);
      return Ot.create(e)
    }
  }, u(Tr, "version", M.v2_2), Tr),
  $r, Ti = ($r = class extends io {
    async getPool(r, s) {
      const e = await this.getPoolAddressByJettonMinters(r, s);
      return po.create(e)
    }
    async getVault(r, s) {
      const e = r.open(R.create(s.tokenMinter)),
        t = await this.getVaultAddress(r, {
          user: s.user,
          tokenWallet: await e.getWalletAddress(this.address)
        });
      return Ct.create(t)
    }
  }, u($r, "version", M.v2_2), $r),
  Sr, uo = (Sr = class extends Kr {
    async getLpAccount(r, s) {
      const e = await this.getLpAccountAddress(r, s);
      return Ot.create(e)
    }
  }, u(Sr, "version", M.v2_2), Sr),
  qr, $i = (qr = class extends co {
    async getPool(r, s) {
      const e = await this.getPoolAddressByJettonMinters(r, s);
      return uo.create(e)
    }
    async getVault(r, s) {
      const e = r.open(R.create(s.tokenMinter)),
        t = await this.getVaultAddress(r, {
          user: s.user,
          tokenWallet: await e.getWalletAddress(this.address)
        });
      return Ct.create(t)
    }
  }, u(qr, "version", M.v2_2), qr),
  vt, Si = (vt = class extends wi {}, u(vt, "CPI", Ti), u(vt, "Stable", $i), vt),
  bt, qi = (bt = class extends lo {}, u(bt, "CPI", po), u(bt, "Stable", uo), bt),
  ji = {
    Router: Si,
    Pool: qi,
    LpAccount: Ot,
    Vault: Ct,
    pTON: Yr
  },
  Se, mo = (Se = class extends Be {
    constructor(e, {
      gasConstants: t,
      ...n
    } = {}) {
      super(e, n);
      u(this, "gasConstants");
      this.gasConstants = {
        ...Se.gasConstants,
        ...t
      }
    }
    async createRefundBody(e) {
      return m.beginCell().storeUint(Ne.REFUND_ME, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
    }
    async getRefundTxParams(e, t) {
      const n = this.address,
        o = await this.createRefundBody({
          queryId: t == null ? void 0 : t.queryId
        }),
        i = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.refund);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendRefund(e, t, n) {
      const o = await this.getRefundTxParams(e, n);
      return t.send(o)
    }
    async createDirectAddLiquidityBody(e) {
      return m.beginCell().storeUint(Ne.DIRECT_ADD_LIQUIDITY, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount0)).storeCoins(BigInt(e.amount1)).storeCoins(BigInt(e.minimumLpToMint ?? 1)).endCell()
    }
    async getDirectAddLiquidityTxParams(e, t) {
      const n = this.address,
        o = await this.createDirectAddLiquidityBody({
          amount0: t.amount0,
          amount1: t.amount1,
          minimumLpToMint: t.minimumLpToMint,
          queryId: t.queryId
        }),
        i = BigInt(t.gasAmount ?? this.gasConstants.directAddLp);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendDirectAddLiquidity(e, t, n) {
      const o = await this.getDirectAddLiquidityTxParams(e, n);
      return t.send(o)
    }
    async createResetGasBody(e) {
      return m.beginCell().storeUint(Ne.RESET_GAS, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
    }
    async getResetGasTxParams(e, t) {
      const n = this.address,
        o = await this.createResetGasBody({
          queryId: t == null ? void 0 : t.queryId
        }),
        i = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.resetGas);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendResetGas(e, t, n) {
      const o = await this.getResetGasTxParams(e, n);
      return t.send(o)
    }
    async getLpAccountData(e) {
      const t = await e.get("get_lp_account_data", []);
      return {
        userAddress: t.stack.readAddress(),
        poolAddress: t.stack.readAddress(),
        amount0: t.stack.readBigNumber(),
        amount1: t.stack.readBigNumber()
      }
    }
  }, u(Se, "version", M.v1), u(Se, "gasConstants", {
    refund: m.toNano("0.3"),
    directAddLp: m.toNano("0.3"),
    resetGas: m.toNano("0.3")
  }), Se),
  qe, fo = (qe = class extends R {
    constructor(e, {
      gasConstants: t,
      ...n
    } = {}) {
      super(e, n);
      u(this, "gasConstants");
      this.gasConstants = {
        ...qe.gasConstants,
        ...t
      }
    }
    async createCollectFeesBody(e) {
      return m.beginCell().storeUint(Ne.COLLECT_FEES, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).endCell()
    }
    async getCollectFeeTxParams(e, t) {
      const n = this.address,
        o = await this.createCollectFeesBody({
          queryId: t == null ? void 0 : t.queryId
        }),
        i = BigInt((t == null ? void 0 : t.gasAmount) ?? this.gasConstants.collectFees);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendCollectFees(e, t, n) {
      const o = await this.getCollectFeeTxParams(e, n);
      return t.send(o)
    }
    async createBurnBody(e) {
      return m.beginCell().storeUint(Ne.BURN, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount)).storeAddress(A(e.responseAddress)).storeMaybeRef().endCell()
    }
    async getBurnTxParams(e, t) {
      const [n, o] = await Promise.all([this.getWalletAddress(e, t.responseAddress), this.createBurnBody({
        amount: t.amount,
        responseAddress: t.responseAddress,
        queryId: t.queryId
      })]), i = BigInt(t.gasAmount ?? this.gasConstants.burn);
      return {
        to: n,
        value: i,
        body: o
      }
    }
    async sendBurn(e, t, n) {
      const o = await this.getBurnTxParams(e, n);
      return t.send(o)
    }
    async getExpectedOutputs(e, t) {
      const n = await e.get("get_expected_outputs", [{
        type: "int",
        value: BigInt(t.amount)
      }, {
        type: "slice",
        cell: m.beginCell().storeAddress(A(t.jettonWallet)).endCell()
      }]);
      return {
        jettonToReceive: n.stack.readBigNumber(),
        protocolFeePaid: n.stack.readBigNumber(),
        refFeePaid: n.stack.readBigNumber()
      }
    }
    async getExpectedTokens(e, t) {
      return (await e.get("get_expected_tokens", [{
        type: "int",
        value: BigInt(t.amount0)
      }, {
        type: "int",
        value: BigInt(t.amount1)
      }])).stack.readBigNumber()
    }
    async getExpectedLiquidity(e, t) {
      const n = await e.get("get_expected_liquidity", [{
        type: "int",
        value: BigInt(t.jettonAmount)
      }]);
      return {
        amount0: n.stack.readBigNumber(),
        amount1: n.stack.readBigNumber()
      }
    }
    async getLpAccountAddress(e, t) {
      return (await e.get("get_lp_account_address", [{
        type: "slice",
        cell: m.beginCell().storeAddress(A(t.ownerAddress)).endCell()
      }])).stack.readAddress()
    }
    async getJettonWallet(e, t) {
      const n = await this.getWalletAddress(e, t.ownerAddress);
      return no.create(n)
    }
    async getPoolData(e) {
      const t = await e.get("get_pool_data", []);
      return {
        reserve0: t.stack.readBigNumber(),
        reserve1: t.stack.readBigNumber(),
        token0WalletAddress: t.stack.readAddress(),
        token1WalletAddress: t.stack.readAddress(),
        lpFee: t.stack.readBigNumber(),
        protocolFee: t.stack.readBigNumber(),
        refFee: t.stack.readBigNumber(),
        protocolFeeAddress: t.stack.readAddress(),
        collectedToken0ProtocolFee: t.stack.readBigNumber(),
        collectedToken1ProtocolFee: t.stack.readBigNumber()
      }
    }
    async getLpAccount(e, t) {
      const n = await this.getLpAccountAddress(e, t);
      return mo.create(n)
    }
  }, u(qe, "version", M.v1), u(qe, "gasConstants", {
    collectFees: m.toNano("1.1"),
    burn: m.toNano("0.5")
  }), qe),
  ie, Pi = (ie = class extends Be {
    constructor(e = ie.address, {
      gasConstants: t,
      ...n
    } = {}) {
      super(e, n);
      u(this, "gasConstants");
      this.gasConstants = {
        ...ie.gasConstants,
        ...t
      }
    }
    async createSwapBody(e) {
      const t = m.beginCell();
      return t.storeUint(Ne.SWAP, 32), t.storeAddress(A(e.askJettonWalletAddress)), t.storeCoins(BigInt(e.minAskAmount)), t.storeAddress(A(e.userWalletAddress)), e.referralAddress ? (t.storeUint(1, 1), t.storeAddress(A(e.referralAddress))) : t.storeUint(0, 1), t.endCell()
    }
    async getSwapJettonToJettonTxParams(e, t) {
      const [n, o] = await Promise.all([e.open(R.create(t.offerJettonAddress)).getWalletAddress(t.userWalletAddress), e.open(R.create(t.askJettonAddress)).getWalletAddress(this.address)]), i = await this.createSwapBody({
        userWalletAddress: t.userWalletAddress,
        minAskAmount: t.minAskAmount,
        askJettonWalletAddress: o,
        referralAddress: t.referralAddress
      }), c = BigInt(t.forwardGasAmount ?? this.gasConstants.swapJettonToJetton.forwardGasAmount), l = et({
        queryId: t.queryId ?? 0,
        amount: t.offerAmount,
        destination: this.address,
        responseDestination: t.userWalletAddress,
        customPayload: t.jettonCustomPayload,
        forwardTonAmount: c,
        forwardPayload: i
      }), d = BigInt(t.gasAmount ?? this.gasConstants.swapJettonToJetton.gasAmount);
      return {
        to: n,
        value: d,
        body: l
      }
    }
    async sendSwapJettonToJetton(e, t, n) {
      const o = await this.getSwapJettonToJettonTxParams(e, n);
      return t.send(o)
    }
    async getSwapJettonToTonTxParams(e, t) {
      return this.assertProxyTon(t.proxyTon), await this.getSwapJettonToJettonTxParams(e, {
        ...t,
        askJettonAddress: t.proxyTon.address,
        gasAmount: t.gasAmount ?? this.gasConstants.swapJettonToTon.gasAmount,
        forwardGasAmount: t.forwardGasAmount ?? this.gasConstants.swapJettonToTon.forwardGasAmount
      })
    }
    async sendSwapJettonToTon(e, t, n) {
      const o = await this.getSwapJettonToTonTxParams(e, n);
      return t.send(o)
    }
    async getSwapTonToJettonTxParams(e, t) {
      this.assertProxyTon(t.proxyTon);
      const n = await e.open(R.create(t.askJettonAddress)).getWalletAddress(this.address),
        o = await this.createSwapBody({
          userWalletAddress: t.userWalletAddress,
          minAskAmount: t.minAskAmount,
          askJettonWalletAddress: n,
          referralAddress: t.referralAddress
        }),
        i = BigInt(t.forwardGasAmount ?? this.gasConstants.swapTonToJetton.forwardGasAmount);
      return await e.open(t.proxyTon).getTonTransferTxParams({
        queryId: t.queryId ?? 0,
        tonAmount: t.offerAmount,
        destinationAddress: this.address,
        refundAddress: t.userWalletAddress,
        forwardPayload: o,
        forwardTonAmount: i
      })
    }
    async sendSwapTonToJetton(e, t, n) {
      const o = await this.getSwapTonToJettonTxParams(e, n);
      return t.send(o)
    }
    async createProvideLiquidityBody(e) {
      return m.beginCell().storeUint(Ne.PROVIDE_LP, 32).storeAddress(A(e.routerWalletAddress)).storeCoins(BigInt(e.minLpOut)).endCell()
    }
    async getProvideLiquidityJettonTxParams(e, t) {
      const [n, o] = await Promise.all([e.open(R.create(t.sendTokenAddress)).getWalletAddress(t.userWalletAddress), e.open(R.create(t.otherTokenAddress)).getWalletAddress(this.address)]), i = await this.createProvideLiquidityBody({
        routerWalletAddress: o,
        minLpOut: t.minLpOut
      }), c = BigInt(t.forwardGasAmount ?? this.gasConstants.provideLpJetton.forwardGasAmount), l = et({
        queryId: t.queryId ?? 0,
        amount: t.sendAmount,
        destination: this.address,
        responseDestination: t.userWalletAddress,
        customPayload: t.jettonCustomPayload,
        forwardTonAmount: c,
        forwardPayload: i
      }), d = BigInt(t.gasAmount ?? this.gasConstants.provideLpJetton.gasAmount);
      return {
        to: n,
        value: d,
        body: l
      }
    }
    async sendProvideLiquidityJetton(e, t, n) {
      const o = await this.getProvideLiquidityJettonTxParams(e, n);
      return t.send(o)
    }
    async getProvideLiquidityTonTxParams(e, t) {
      this.assertProxyTon(t.proxyTon);
      const n = await e.open(R.create(t.otherTokenAddress)).getWalletAddress(this.address),
        o = await this.createProvideLiquidityBody({
          routerWalletAddress: n,
          minLpOut: t.minLpOut
        }),
        i = BigInt(t.forwardGasAmount ?? this.gasConstants.provideLpTon.forwardGasAmount);
      return await e.open(t.proxyTon).getTonTransferTxParams({
        queryId: t.queryId ?? 0,
        tonAmount: t.sendAmount,
        destinationAddress: this.address,
        refundAddress: t.userWalletAddress,
        forwardPayload: o,
        forwardTonAmount: i
      })
    }
    async sendProvideLiquidityTon(e, t, n) {
      const o = await this.getProvideLiquidityTonTxParams(e, n);
      return t.send(o)
    }
    assertProxyTon(e) {
      if (e.version !== Pe.v1) throw new ao({
        expected: Pe.v1,
        received: e.version
      })
    }
    async getPoolAddress(e, t) {
      return (await e.get("get_pool_address", [{
        type: "slice",
        cell: m.beginCell().storeAddress(A(t.token0)).endCell()
      }, {
        type: "slice",
        cell: m.beginCell().storeAddress(A(t.token1)).endCell()
      }])).stack.readAddress()
    }
    async getPoolAddressByJettonMinters(e, t) {
      const [n, o] = await Promise.all([e.open(R.create(t.token0)).getWalletAddress(this.address), e.open(R.create(t.token1)).getWalletAddress(this.address)]);
      return await this.getPoolAddress(e, {
        token0: n,
        token1: o
      })
    }
    async getPool(e, t) {
      const n = await this.getPoolAddressByJettonMinters(e, {
        token0: t.token0,
        token1: t.token1
      });
      return fo.create(n)
    }
    async getRouterData(e) {
      const t = await e.get("get_router_data", []);
      return {
        isLocked: t.stack.readBoolean(),
        adminAddress: t.stack.readAddress(),
        tempUpgrade: t.stack.readCell(),
        poolCode: t.stack.readCell(),
        jettonLpWalletCode: t.stack.readCell(),
        lpAccountCode: t.stack.readCell()
      }
    }
  }, u(ie, "version", M.v1), u(ie, "address", m.address(oo)), u(ie, "gasConstants", {
    swapJettonToJetton: {
      gasAmount: m.toNano("0.22"),
      forwardGasAmount: m.toNano("0.175")
    },
    swapJettonToTon: {
      gasAmount: m.toNano("0.17"),
      forwardGasAmount: m.toNano("0.125")
    },
    swapTonToJetton: {
      forwardGasAmount: m.toNano("0.185")
    },
    provideLpJetton: {
      gasAmount: m.toNano("0.3"),
      forwardGasAmount: m.toNano("0.24")
    },
    provideLpTon: {
      forwardGasAmount: m.toNano("0.26")
    }
  }), ie),
  ki = {
    Router: Pi,
    Pool: fo,
    LpAccount: mo,
    pTON: Hr
  },
  Ei = {
    [M.v1]: ki,
    [M.v2_1]: Ai,
    [M.v2_2]: ji
  },
  xi = {
    [Pe.v1]: Hr,
    [Pe.v2_1]: Yr
  },
  L = {},
  He = function(r) {
    return r && r.Math === Math && r
  },
  te = He(typeof globalThis == "object" && globalThis) || He(typeof window == "object" && window) || He(typeof self == "object" && self) || He(typeof ze == "object" && ze) || He(typeof ze == "object" && ze) || function() {
    return this
  }() || Function("return this")(),
  W = function(r) {
    try {
      return !!r()
    } catch {
      return !0
    }
  },
  Ii = W,
  Rt = !Ii(function() {
    var r = (function() {}).bind();
    return typeof r != "function" || r.hasOwnProperty("prototype")
  }),
  Oi = Rt,
  yo = Function.prototype,
  Rs = yo.apply,
  Ns = yo.call,
  Qr = typeof Reflect == "object" && Reflect.apply || (Oi ? Ns.bind(Rs) : function() {
    return Ns.apply(Rs, arguments)
  }),
  ho = Rt,
  go = Function.prototype,
  kr = go.call,
  Ci = ho && go.bind.bind(kr, kr),
  V = ho ? Ci : function(r) {
    return function() {
      return kr.apply(r, arguments)
    }
  },
  _o = V,
  Ri = _o({}.toString),
  Ni = _o("".slice),
  ke = function(r) {
    return Ni(Ri(r), 8, -1)
  },
  Bi = ke,
  Li = V,
  vo = function(r) {
    if (Bi(r) === "Function") return Li(r)
  },
  Jt = typeof document == "object" && document.all,
  Q = typeof Jt > "u" && Jt !== void 0 ? function(r) {
    return typeof r == "function" || r === Jt
  } : function(r) {
    return typeof r == "function"
  },
  bo = {},
  Fi = W,
  me = !Fi(function() {
    return Object.defineProperty({}, 1, {
      get: function() {
        return 7
      }
    })[1] !== 7
  }),
  Di = Rt,
  ut = Function.prototype.call,
  Le = Di ? ut.bind(ut) : function() {
    return ut.apply(ut, arguments)
  },
  Ao = {},
  wo = {}.propertyIsEnumerable,
  To = Object.getOwnPropertyDescriptor,
  Gi = To && !wo.call({
    1: 2
  }, 1);
Ao.f = Gi ? function(s) {
  var e = To(this, s);
  return !!e && e.enumerable
} : wo;
var Xr = function(r, s) {
    return {
      enumerable: !(r & 1),
      configurable: !(r & 2),
      writable: !(r & 4),
      value: s
    }
  },
  Mi = V,
  Ui = W,
  Ji = ke,
  Wt = Object,
  Wi = Mi("".split),
  Vi = Ui(function() {
    return !Wt("z").propertyIsEnumerable(0)
  }) ? function(r) {
    return Ji(r) === "String" ? Wi(r, "") : Wt(r)
  } : Wt,
  $o = function(r) {
    return r == null
  },
  zi = $o,
  Ki = TypeError,
  Nt = function(r) {
    if (zi(r)) throw new Ki("Can't call method on " + r);
    return r
  },
  Hi = Vi,
  Yi = Nt,
  st = function(r) {
    return Hi(Yi(r))
  },
  Qi = Q,
  ce = function(r) {
    return typeof r == "object" ? r !== null : Qi(r)
  },
  nt = {},
  Vt = nt,
  zt = te,
  Xi = Q,
  Bs = function(r) {
    return Xi(r) ? r : void 0
  },
  ot = function(r, s) {
    return arguments.length < 2 ? Bs(Vt[r]) || Bs(zt[r]) : Vt[r] && Vt[r][s] || zt[r] && zt[r][s]
  },
  Zi = V,
  ec = Zi({}.isPrototypeOf),
  tc = te,
  Ls = tc.navigator,
  Fs = Ls && Ls.userAgent,
  rc = Fs ? String(Fs) : "",
  So = te,
  Kt = rc,
  Ds = So.process,
  Gs = So.Deno,
  Ms = Ds && Ds.versions || Gs && Gs.version,
  Us = Ms && Ms.v8,
  se, jt;
Us && (se = Us.split("."), jt = se[0] > 0 && se[0] < 4 ? 1 : +(se[0] + se[1]));
!jt && Kt && (se = Kt.match(/Edge\/(\d+)/), (!se || se[1] >= 74) && (se = Kt.match(/Chrome\/(\d+)/), se && (jt = +se[1])));
var sc = jt,
  Js = sc,
  nc = W,
  oc = te,
  ac = oc.String,
  Bt = !!Object.getOwnPropertySymbols && !nc(function() {
    var r = Symbol("symbol detection");
    return !ac(r) || !(Object(r) instanceof Symbol) || !Symbol.sham && Js && Js < 41
  }),
  ic = Bt,
  qo = ic && !Symbol.sham && typeof Symbol.iterator == "symbol",
  cc = ot,
  dc = Q,
  lc = ec,
  pc = qo,
  uc = Object,
  Zr = pc ? function(r) {
    return typeof r == "symbol"
  } : function(r) {
    var s = cc("Symbol");
    return dc(s) && lc(s.prototype, uc(r))
  },
  mc = String,
  fc = function(r) {
    try {
      return mc(r)
    } catch {
      return "Object"
    }
  },
  yc = Q,
  hc = fc,
  gc = TypeError,
  jo = function(r) {
    if (yc(r)) return r;
    throw new gc(hc(r) + " is not a function")
  },
  _c = jo,
  vc = $o,
  bc = function(r, s) {
    var e = r[s];
    return vc(e) ? void 0 : _c(e)
  },
  Ht = Le,
  Yt = Q,
  Qt = ce,
  Ac = TypeError,
  wc = function(r, s) {
    var e, t;
    if (s === "string" && Yt(e = r.toString) && !Qt(t = Ht(e, r)) || Yt(e = r.valueOf) && !Qt(t = Ht(e, r)) || s !== "string" && Yt(e = r.toString) && !Qt(t = Ht(e, r))) return t;
    throw new Ac("Can't convert object to primitive value")
  },
  Po = {
    exports: {}
  },
  Ws = te,
  Tc = Object.defineProperty,
  $c = function(r, s) {
    try {
      Tc(Ws, r, {
        value: s,
        configurable: !0,
        writable: !0
      })
    } catch {
      Ws[r] = s
    }
    return s
  },
  Sc = te,
  qc = $c,
  Vs = "__core-js_shared__",
  zs = Po.exports = Sc[Vs] || qc(Vs, {});
(zs.versions || (zs.versions = [])).push({
  version: "3.38.1",
  mode: "pure",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var ko = Po.exports,
  Ks = ko,
  Eo = function(r, s) {
    return Ks[r] || (Ks[r] = s || {})
  },
  jc = Nt,
  Pc = Object,
  es = function(r) {
    return Pc(jc(r))
  },
  kc = V,
  Ec = es,
  xc = kc({}.hasOwnProperty),
  Ee = Object.hasOwn || function(s, e) {
    return xc(Ec(s), e)
  },
  Ic = V,
  Oc = 0,
  Cc = Math.random(),
  Rc = Ic(1 .toString),
  Lt = function(r) {
    return "Symbol(" + (r === void 0 ? "" : r) + ")_" + Rc(++Oc + Cc, 36)
  },
  Nc = te,
  Bc = Eo,
  Hs = Ee,
  Lc = Lt,
  Fc = Bt,
  Dc = qo,
  Ke = Nc.Symbol,
  Xt = Bc("wks"),
  Gc = Dc ? Ke.for || Ke : Ke && Ke.withoutSetter || Lc,
  ts = function(r) {
    return Hs(Xt, r) || (Xt[r] = Fc && Hs(Ke, r) ? Ke[r] : Gc("Symbol." + r)), Xt[r]
  },
  Mc = Le,
  Ys = ce,
  Qs = Zr,
  Uc = bc,
  Jc = wc,
  Wc = ts,
  Vc = TypeError,
  zc = Wc("toPrimitive"),
  xo = function(r, s) {
    if (!Ys(r) || Qs(r)) return r;
    var e = Uc(r, zc),
      t;
    if (e) {
      if (s === void 0 && (s = "default"), t = Mc(e, r, s), !Ys(t) || Qs(t)) return t;
      throw new Vc("Can't convert object to primitive value")
    }
    return s === void 0 && (s = "number"), Jc(r, s)
  },
  Kc = xo,
  Hc = Zr,
  Io = function(r) {
    var s = Kc(r, "string");
    return Hc(s) ? s : s + ""
  },
  Yc = te,
  Xs = ce,
  Er = Yc.document,
  Qc = Xs(Er) && Xs(Er.createElement),
  Oo = function(r) {
    return Qc ? Er.createElement(r) : {}
  },
  Xc = me,
  Zc = W,
  ed = Oo,
  Co = !Xc && !Zc(function() {
    return Object.defineProperty(ed("div"), "a", {
      get: function() {
        return 7
      }
    }).a !== 7
  }),
  td = me,
  rd = Le,
  sd = Ao,
  nd = Xr,
  od = st,
  ad = Io,
  id = Ee,
  cd = Co,
  Zs = Object.getOwnPropertyDescriptor;
bo.f = td ? Zs : function(s, e) {
  if (s = od(s), e = ad(e), cd) try {
    return Zs(s, e)
  } catch {}
  if (id(s, e)) return nd(!rd(sd.f, s, e), s[e])
};
var dd = W,
  ld = Q,
  pd = /#|\.prototype\./,
  at = function(r, s) {
    var e = md[ud(r)];
    return e === yd ? !0 : e === fd ? !1 : ld(s) ? dd(s) : !!s
  },
  ud = at.normalize = function(r) {
    return String(r).replace(pd, ".").toLowerCase()
  },
  md = at.data = {},
  fd = at.NATIVE = "N",
  yd = at.POLYFILL = "P",
  hd = at,
  en = vo,
  gd = jo,
  _d = Rt,
  vd = en(en.bind),
  bd = function(r, s) {
    return gd(r), s === void 0 ? r : _d ? vd(r, s) : function() {
      return r.apply(s, arguments)
    }
  },
  it = {},
  Ad = me,
  wd = W,
  Ro = Ad && wd(function() {
    return Object.defineProperty(function() {}, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42
  }),
  Td = ce,
  $d = String,
  Sd = TypeError,
  rs = function(r) {
    if (Td(r)) return r;
    throw new Sd($d(r) + " is not an object")
  },
  qd = me,
  jd = Co,
  Pd = Ro,
  mt = rs,
  tn = Io,
  kd = TypeError,
  Zt = Object.defineProperty,
  Ed = Object.getOwnPropertyDescriptor,
  er = "enumerable",
  tr = "configurable",
  rr = "writable";
it.f = qd ? Pd ? function(s, e, t) {
  if (mt(s), e = tn(e), mt(t), typeof s == "function" && e === "prototype" && "value" in t && rr in t && !t[rr]) {
    var n = Ed(s, e);
    n && n[rr] && (s[e] = t.value, t = {
      configurable: tr in t ? t[tr] : n[tr],
      enumerable: er in t ? t[er] : n[er],
      writable: !1
    })
  }
  return Zt(s, e, t)
} : Zt : function(s, e, t) {
  if (mt(s), e = tn(e), mt(t), jd) try {
    return Zt(s, e, t)
  } catch {}
  if ("get" in t || "set" in t) throw new kd("Accessors not supported");
  return "value" in t && (s[e] = t.value), s
};
var xd = me,
  Id = it,
  Od = Xr,
  No = xd ? function(r, s, e) {
    return Id.f(r, s, Od(1, e))
  } : function(r, s, e) {
    return r[s] = e, r
  },
  Ye = te,
  Cd = Qr,
  Rd = vo,
  Nd = Q,
  Bd = bo.f,
  Ld = hd,
  Ge = nt,
  Fd = bd,
  Me = No,
  rn = Ee,
  Dd = function(r) {
    var s = function(e, t, n) {
      if (this instanceof s) {
        switch (arguments.length) {
          case 0:
            return new r;
          case 1:
            return new r(e);
          case 2:
            return new r(e, t)
        }
        return new r(e, t, n)
      }
      return Cd(r, this, arguments)
    };
    return s.prototype = r.prototype, s
  },
  xe = function(r, s) {
    var e = r.target,
      t = r.global,
      n = r.stat,
      o = r.proto,
      i = t ? Ye : n ? Ye[e] : Ye[e] && Ye[e].prototype,
      c = t ? Ge : Ge[e] || Me(Ge, e, {})[e],
      l = c.prototype,
      d, a, y, h, f, _, g, v, S;
    for (h in s) d = Ld(t ? h : e + (n ? "." : "#") + h, r.forced), a = !d && i && rn(i, h), _ = c[h], a && (r.dontCallGetSet ? (S = Bd(i, h), g = S && S.value) : g = i[h]), f = a && g ? g : s[h], !(!d && !o && typeof _ == typeof f) && (r.bind && a ? v = Fd(f, Ye) : r.wrap && a ? v = Dd(f) : o && Nd(f) ? v = Rd(f) : v = f, (r.sham || f && f.sham || _ && _.sham) && Me(v, "sham", !0), Me(c, h, v), o && (y = e + "Prototype", rn(Ge, y) || Me(Ge, y, {}), Me(Ge[y], h, f), r.real && l && (d || !l[h]) && Me(l, h, f)))
  },
  Gd = Math.ceil,
  Md = Math.floor,
  Ud = Math.trunc || function(s) {
    var e = +s;
    return (e > 0 ? Md : Gd)(e)
  },
  Jd = Ud,
  ss = function(r) {
    var s = +r;
    return s !== s || s === 0 ? 0 : Jd(s)
  },
  Wd = ss,
  Vd = Math.max,
  zd = Math.min,
  Kd = function(r, s) {
    var e = Wd(r);
    return e < 0 ? Vd(e + s, 0) : zd(e, s)
  },
  Hd = ss,
  Yd = Math.min,
  Bo = function(r) {
    var s = Hd(r);
    return s > 0 ? Yd(s, 9007199254740991) : 0
  },
  Qd = Bo,
  Lo = function(r) {
    return Qd(r.length)
  },
  Xd = st,
  Zd = Kd,
  el = Lo,
  sn = function(r) {
    return function(s, e, t) {
      var n = Xd(s),
        o = el(n);
      if (o === 0) return !r && -1;
      var i = Zd(t, o),
        c;
      if (r && e !== e) {
        for (; o > i;)
          if (c = n[i++], c !== c) return !0
      } else
        for (; o > i; i++)
          if ((r || i in n) && n[i] === e) return r || i || 0;
      return !r && -1
    }
  },
  tl = {
    includes: sn(!0),
    indexOf: sn(!1)
  },
  Ft = {},
  rl = V,
  sr = Ee,
  sl = st,
  nl = tl.indexOf,
  ol = Ft,
  nn = rl([].push),
  Fo = function(r, s) {
    var e = sl(r),
      t = 0,
      n = [],
      o;
    for (o in e) !sr(ol, o) && sr(e, o) && nn(n, o);
    for (; s.length > t;) sr(e, o = s[t++]) && (~nl(n, o) || nn(n, o));
    return n
  },
  ns = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
  al = Fo,
  il = ns,
  Do = Object.keys || function(s) {
    return al(s, il)
  },
  cl = xe,
  dl = es,
  Go = Do,
  ll = W,
  pl = ll(function() {
    Go(1)
  });
cl({
  target: "Object",
  stat: !0,
  forced: pl
}, {
  keys: function(s) {
    return Go(dl(s))
  }
});
var ul = ke,
  Mo = Array.isArray || function(s) {
    return ul(s) === "Array"
  },
  ml = ts,
  fl = ml("toStringTag"),
  Uo = {};
Uo[fl] = "z";
var yl = String(Uo) === "[object z]",
  hl = yl,
  gl = Q,
  At = ke,
  _l = ts,
  vl = _l("toStringTag"),
  bl = Object,
  Al = At(function() {
    return arguments
  }()) === "Arguments",
  wl = function(r, s) {
    try {
      return r[s]
    } catch {}
  },
  Tl = hl ? At : function(r) {
    var s, e, t;
    return r === void 0 ? "Undefined" : r === null ? "Null" : typeof(e = wl(s = bl(r), vl)) == "string" ? e : Al ? At(s) : (t = At(s)) === "Object" && gl(s.callee) ? "Arguments" : t
  },
  $l = Tl,
  Sl = String,
  ct = function(r) {
    if ($l(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return Sl(r)
  },
  ql = me,
  jl = it,
  Pl = Xr,
  Jo = function(r, s, e) {
    ql ? jl.f(r, s, Pl(0, e)) : r[s] = e
  },
  os = V,
  kl = Ee,
  ft = SyntaxError,
  El = parseInt,
  xl = String.fromCharCode,
  Il = os("".charAt),
  on = os("".slice),
  an = os(/./.exec),
  cn = {
    '\\"': '"',
    "\\\\": "\\",
    "\\/": "/",
    "\\b": "\b",
    "\\f": "\f",
    "\\n": `
`,
    "\\r": "\r",
    "\\t": "	"
  },
  Ol = /^[\da-f]{4}$/i,
  Cl = /^[\u0000-\u001F]$/,
  Wo = function(r, s) {
    for (var e = !0, t = ""; s < r.length;) {
      var n = Il(r, s);
      if (n === "\\") {
        var o = on(r, s, s + 2);
        if (kl(cn, o)) t += cn[o], s += 2;
        else if (o === "\\u") {
          s += 2;
          var i = on(r, s, s + 4);
          if (!an(Ol, i)) throw new ft("Bad Unicode escape at: " + s);
          t += xl(El(i, 16)), s += 4
        } else throw new ft('Unknown escape sequence: "' + o + '"')
      } else if (n === '"') {
        e = !1, s++;
        break
      } else {
        if (an(Cl, n)) throw new ft("Bad control character in string literal at: " + s);
        t += n, s++
      }
    }
    if (e) throw new ft("Unterminated string at: " + s);
    return {
      value: t,
      end: s
    }
  },
  Rl = xe,
  Nl = me,
  as = te,
  Bl = ot,
  Dt = V,
  Ll = Le,
  Vo = Q,
  Fl = ce,
  Dl = Mo,
  Gl = Ee,
  Ml = ct,
  dn = Lo,
  xr = Jo,
  zo = W,
  Ul = Wo,
  Jl = Bt,
  ln = as.JSON,
  Wl = as.Number,
  Je = as.SyntaxError,
  is = ln && ln.parse,
  Vl = Bl("Object", "keys"),
  zl = Object.getOwnPropertyDescriptor,
  U = Dt("".charAt),
  nr = Dt("".slice),
  or = Dt(/./.exec),
  pn = Dt([].push),
  ar = /^\d$/,
  Kl = /^[1-9]$/,
  Hl = /^[\d-]$/,
  Qe = /^[\t\n\r ]$/,
  ir = 0,
  un = 1,
  Yl = function(r, s) {
    r = Ml(r);
    var e = new Or(r, 0),
      t = e.parse(),
      n = t.value,
      o = e.skip(Qe, t.end);
    if (o < r.length) throw new Je('Unexpected extra character: "' + U(r, o) + '" after the parsed data at: ' + o);
    return Vo(s) ? Ir({
      "": n
    }, "", s, t) : n
  },
  Ir = function(r, s, e, t) {
    var n = r[s],
      o = t && n === t.value,
      i = o && typeof t.source == "string" ? {
        source: t.source
      } : {},
      c, l, d, a, y;
    if (Fl(n)) {
      var h = Dl(n),
        f = o ? t.nodes : h ? [] : {};
      if (h)
        for (c = f.length, d = dn(n), a = 0; a < d; a++) mn(n, a, Ir(n, "" + a, e, a < c ? f[a] : void 0));
      else
        for (l = Vl(n), d = dn(l), a = 0; a < d; a++) y = l[a], mn(n, y, Ir(n, y, e, Gl(f, y) ? f[y] : void 0))
    }
    return Ll(e, r, s, n, i)
  },
  mn = function(r, s, e) {
    if (Nl) {
      var t = zl(r, s);
      if (t && !t.configurable) return
    }
    e === void 0 ? delete r[s] : xr(r, s, e)
  },
  Ql = function(r, s, e, t) {
    this.value = r, this.end = s, this.source = e, this.nodes = t
  },
  Or = function(r, s) {
    this.source = r, this.index = s
  };
Or.prototype = {
  fork: function(r) {
    return new Or(this.source, r)
  },
  parse: function() {
    var r = this.source,
      s = this.skip(Qe, this.index),
      e = this.fork(s),
      t = U(r, s);
    if (or(Hl, t)) return e.number();
    switch (t) {
      case "{":
        return e.object();
      case "[":
        return e.array();
      case '"':
        return e.string();
      case "t":
        return e.keyword(!0);
      case "f":
        return e.keyword(!1);
      case "n":
        return e.keyword(null)
    }
    throw new Je('Unexpected character: "' + t + '" at: ' + s)
  },
  node: function(r, s, e, t, n) {
    return new Ql(s, t, r ? null : nr(this.source, e, t), n)
  },
  object: function() {
    for (var r = this.source, s = this.index + 1, e = !1, t = {}, n = {}; s < r.length;) {
      if (s = this.until(['"', "}"], s), U(r, s) === "}" && !e) {
        s++;
        break
      }
      var o = this.fork(s).string(),
        i = o.value;
      s = o.end, s = this.until([":"], s) + 1, s = this.skip(Qe, s), o = this.fork(s).parse(), xr(n, i, o), xr(t, i, o.value), s = this.until([",", "}"], o.end);
      var c = U(r, s);
      if (c === ",") e = !0, s++;
      else if (c === "}") {
        s++;
        break
      }
    }
    return this.node(un, t, this.index, s, n)
  },
  array: function() {
    for (var r = this.source, s = this.index + 1, e = !1, t = [], n = []; s < r.length;) {
      if (s = this.skip(Qe, s), U(r, s) === "]" && !e) {
        s++;
        break
      }
      var o = this.fork(s).parse();
      if (pn(n, o), pn(t, o.value), s = this.until([",", "]"], o.end), U(r, s) === ",") e = !0, s++;
      else if (U(r, s) === "]") {
        s++;
        break
      }
    }
    return this.node(un, t, this.index, s, n)
  },
  string: function() {
    var r = this.index,
      s = Ul(this.source, this.index + 1);
    return this.node(ir, s.value, r, s.end)
  },
  number: function() {
    var r = this.source,
      s = this.index,
      e = s;
    if (U(r, e) === "-" && e++, U(r, e) === "0") e++;
    else if (or(Kl, U(r, e))) e = this.skip(ar, e + 1);
    else throw new Je("Failed to parse number at: " + e);
    if (U(r, e) === "." && (e = this.skip(ar, e + 1)), U(r, e) === "e" || U(r, e) === "E") {
      e++, (U(r, e) === "+" || U(r, e) === "-") && e++;
      var t = e;
      if (e = this.skip(ar, e), t === e) throw new Je("Failed to parse number's exponent value at: " + e)
    }
    return this.node(ir, Wl(nr(r, s, e)), s, e)
  },
  keyword: function(r) {
    var s = "" + r,
      e = this.index,
      t = e + s.length;
    if (nr(this.source, e, t) !== s) throw new Je("Failed to parse value at: " + e);
    return this.node(ir, r, e, t)
  },
  skip: function(r, s) {
    for (var e = this.source; s < e.length && or(r, U(e, s)); s++);
    return s
  },
  until: function(r, s) {
    s = this.skip(Qe, s);
    for (var e = U(this.source, s), t = 0; t < r.length; t++)
      if (r[t] === e) return s;
    throw new Je('Unexpected character: "' + e + '" at: ' + s)
  }
};
var Xl = zo(function() {
    var r = "9007199254740993",
      s;
    return is(r, function(e, t, n) {
      s = n.source
    }), s !== r
  }),
  Zl = Jl && !zo(function() {
    return 1 / is("-0 	") !== -1 / 0
  });
Rl({
  target: "JSON",
  stat: !0,
  forced: Xl
}, {
  parse: function(s, e) {
    return Zl && !Vo(e) ? is(s) : Yl(s, e)
  }
});
var ep = nt,
  tp = ep.JSON.parse,
  Ko = {},
  rp = me,
  sp = Ro,
  np = it,
  op = rs,
  ap = st,
  ip = Do;
Ko.f = rp && !sp ? Object.defineProperties : function(s, e) {
  op(s);
  for (var t = ap(e), n = ip(e), o = n.length, i = 0, c; o > i;) np.f(s, c = n[i++], t[c]);
  return s
};
var cp = ot,
  dp = cp("document", "documentElement"),
  lp = Eo,
  pp = Lt,
  fn = lp("keys"),
  Ho = function(r) {
    return fn[r] || (fn[r] = pp(r))
  },
  up = rs,
  mp = Ko,
  yn = ns,
  fp = Ft,
  yp = dp,
  hp = Oo,
  gp = Ho,
  hn = ">",
  gn = "<",
  Cr = "prototype",
  Rr = "script",
  Yo = gp("IE_PROTO"),
  cr = function() {},
  Qo = function(r) {
    return gn + Rr + hn + r + gn + "/" + Rr + hn
  },
  _n = function(r) {
    r.write(Qo("")), r.close();
    var s = r.parentWindow.Object;
    return r = null, s
  },
  _p = function() {
    var r = hp("iframe"),
      s = "java" + Rr + ":",
      e;
    return r.style.display = "none", yp.appendChild(r), r.src = String(s), e = r.contentWindow.document, e.open(), e.write(Qo("document.F=Object")), e.close(), e.F
  },
  yt, wt = function() {
    try {
      yt = new ActiveXObject("htmlfile")
    } catch {}
    wt = typeof document < "u" ? document.domain && yt ? _n(yt) : _p() : _n(yt);
    for (var r = yn.length; r--;) delete wt[Cr][yn[r]];
    return wt()
  };
fp[Yo] = !0;
var vp = Object.create || function(s, e) {
    var t;
    return s !== null ? (cr[Cr] = up(s), t = new cr, cr[Cr] = null, t[Yo] = s) : t = wt(), e === void 0 ? t : mp.f(t, e)
  },
  bp = xe,
  Ap = me,
  wp = vp;
bp({
  target: "Object",
  stat: !0,
  sham: !Ap
}, {
  create: wp
});
var Tp = W,
  cs = !Tp(function() {
    return Object.isExtensible(Object.preventExtensions({}))
  }),
  Xo = {
    exports: {}
  },
  ds = {},
  $p = Fo,
  Sp = ns,
  qp = Sp.concat("length", "prototype");
ds.f = Object.getOwnPropertyNames || function(s) {
  return $p(s, qp)
};
var Zo = {},
  jp = V,
  ea = jp([].slice),
  Pp = ke,
  kp = st,
  ta = ds.f,
  Ep = ea,
  ra = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
  xp = function(r) {
    try {
      return ta(r)
    } catch {
      return Ep(ra)
    }
  };
Zo.f = function(s) {
  return ra && Pp(s) === "Window" ? xp(s) : ta(kp(s))
};
var Ip = W,
  Op = Ip(function() {
    if (typeof ArrayBuffer == "function") {
      var r = new ArrayBuffer(8);
      Object.isExtensible(r) && Object.defineProperty(r, "a", {
        value: 8
      })
    }
  }),
  Cp = W,
  Rp = ce,
  Np = ke,
  vn = Op,
  Tt = Object.isExtensible,
  Bp = Cp(function() {
    Tt(1)
  }),
  Lp = Bp || vn ? function(s) {
    return !Rp(s) || vn && Np(s) === "ArrayBuffer" ? !1 : Tt ? Tt(s) : !0
  } : Tt,
  Fp = xe,
  Dp = V,
  Gp = Ft,
  Mp = ce,
  ls = Ee,
  Up = it.f,
  bn = ds,
  Jp = Zo,
  ps = Lp,
  Wp = Lt,
  Vp = cs,
  sa = !1,
  ue = Wp("meta"),
  zp = 0,
  us = function(r) {
    Up(r, ue, {
      value: {
        objectID: "O" + zp++,
        weakData: {}
      }
    })
  },
  Kp = function(r, s) {
    if (!Mp(r)) return typeof r == "symbol" ? r : (typeof r == "string" ? "S" : "P") + r;
    if (!ls(r, ue)) {
      if (!ps(r)) return "F";
      if (!s) return "E";
      us(r)
    }
    return r[ue].objectID
  },
  Hp = function(r, s) {
    if (!ls(r, ue)) {
      if (!ps(r)) return !0;
      if (!s) return !1;
      us(r)
    }
    return r[ue].weakData
  },
  Yp = function(r) {
    return Vp && sa && ps(r) && !ls(r, ue) && us(r), r
  },
  Qp = function() {
    Xp.enable = function() {}, sa = !0;
    var r = bn.f,
      s = Dp([].splice),
      e = {};
    e[ue] = 1, r(e).length && (bn.f = function(t) {
      for (var n = r(t), o = 0, i = n.length; o < i; o++)
        if (n[o] === ue) {
          s(n, o, 1);
          break
        } return n
    }, Fp({
      target: "Object",
      stat: !0,
      forced: !0
    }, {
      getOwnPropertyNames: Jp.f
    }))
  },
  Xp = Xo.exports = {
    enable: Qp,
    fastKey: Kp,
    getWeakData: Hp,
    onFreeze: Yp
  };
Gp[ue] = !0;
var Zp = Xo.exports,
  eu = xe,
  tu = cs,
  ru = W,
  su = ce,
  nu = Zp.onFreeze,
  Nr = Object.freeze,
  ou = ru(function() {
    Nr(1)
  });
eu({
  target: "Object",
  stat: !0,
  forced: ou,
  sham: !tu
}, {
  freeze: function(s) {
    return Nr && su(s) ? Nr(nu(s)) : s
  }
});
var au = W,
  iu = !au(function() {
    var r = "9007199254740993",
      s = JSON.rawJSON(r);
    return !JSON.isRawJSON(s) || JSON.stringify(s) !== r
  }),
  cu = te,
  du = Q,
  An = cu.WeakMap,
  lu = du(An) && /native code/.test(String(An)),
  pu = lu,
  na = te,
  uu = ce,
  mu = No,
  dr = Ee,
  lr = ko,
  fu = Ho,
  yu = Ft,
  wn = "Object already initialized",
  Br = na.TypeError,
  hu = na.WeakMap,
  Pt, tt, kt, gu = function(r) {
    return kt(r) ? tt(r) : Pt(r, {})
  },
  _u = function(r) {
    return function(s) {
      var e;
      if (!uu(s) || (e = tt(s)).type !== r) throw new Br("Incompatible receiver, " + r + " required");
      return e
    }
  };
if (pu || lr.state) {
  var oe = lr.state || (lr.state = new hu);
  oe.get = oe.get, oe.has = oe.has, oe.set = oe.set, Pt = function(r, s) {
    if (oe.has(r)) throw new Br(wn);
    return s.facade = r, oe.set(r, s), s
  }, tt = function(r) {
    return oe.get(r) || {}
  }, kt = function(r) {
    return oe.has(r)
  }
} else {
  var Ue = fu("state");
  yu[Ue] = !0, Pt = function(r, s) {
    if (dr(r, Ue)) throw new Br(wn);
    return s.facade = r, mu(r, Ue, s), s
  }, tt = function(r) {
    return dr(r, Ue) ? r[Ue] : {}
  }, kt = function(r) {
    return dr(r, Ue)
  }
}
var oa = {
    set: Pt,
    get: tt,
    has: kt,
    enforce: gu,
    getterFor: _u
  },
  vu = ce,
  bu = oa.get,
  Au = function(s) {
    if (!vu(s)) return !1;
    var e = bu(s);
    return !!e && e.type === "RawJSON"
  },
  wu = V,
  Tn = Mo,
  Tu = Q,
  $n = ke,
  $u = ct,
  Sn = wu([].push),
  aa = function(r) {
    if (Tu(r)) return r;
    if (Tn(r)) {
      for (var s = r.length, e = [], t = 0; t < s; t++) {
        var n = r[t];
        typeof n == "string" ? Sn(e, n) : (typeof n == "number" || $n(n) === "Number" || $n(n) === "String") && Sn(e, $u(n))
      }
      var o = e.length,
        i = !0;
      return function(c, l) {
        if (i) return i = !1, l;
        if (Tn(this)) return l;
        for (var d = 0; d < o; d++)
          if (e[d] === c) return l
      }
    }
  },
  ia = xe,
  Su = cs,
  ca = iu,
  Gt = ot,
  qu = Le,
  ms = V,
  ju = Q,
  Pu = Au,
  ku = ct,
  Eu = Jo,
  xu = Wo,
  Iu = aa,
  Ou = Lt,
  Cu = oa.set,
  Ru = String,
  qn = SyntaxError,
  Nu = Gt("JSON", "parse"),
  jn = Gt("JSON", "stringify"),
  Bu = Gt("Object", "create"),
  Lu = Gt("Object", "freeze"),
  Lr = ms("".charAt),
  pr = ms("".slice),
  Fu = ms([].push),
  Fr = Ou(),
  Pn = Fr.length,
  kn = "Unacceptable as raw JSON",
  En = function(r) {
    return r === " " || r === "	" || r === `
` || r === "\r"
  };
ia({
  target: "JSON",
  stat: !0,
  forced: !ca
}, {
  rawJSON: function(s) {
    var e = ku(s);
    if (e === "" || En(Lr(e, 0)) || En(Lr(e, e.length - 1))) throw new qn(kn);
    var t = Nu(e);
    if (typeof t == "object" && t !== null) throw new qn(kn);
    var n = Bu(null);
    return Cu(n, {
      type: "RawJSON"
    }), Eu(n, "rawJSON", e), Su ? Lu(n) : n
  }
});
jn && ia({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: !ca
}, {
  stringify: function(s, e, t) {
    var n = Iu(e),
      o = [],
      i = jn(s, function(f, _) {
        var g = ju(n) ? qu(n, this, Ru(f), _) : _;
        return Pu(g) ? Fr + (Fu(o, g.rawJSON) - 1) : g
      }, t);
    if (typeof i != "string") return i;
    for (var c = "", l = i.length, d = 0; d < l; d++) {
      var a = Lr(i, d);
      if (a === '"') {
        var y = xu(i, ++d).end - 1,
          h = pr(i, d, y);
        c += pr(h, 0, Pn) === Fr ? o[pr(h, Pn)] : '"' + h + '"', d = y
      } else c += a
    }
    return c
  }
});
var Du = nt,
  Gu = Du.JSON.rawJSON,
  Mu = ss,
  Uu = ct,
  Ju = Nt,
  Wu = RangeError,
  Vu = function(s) {
    var e = Uu(Ju(this)),
      t = "",
      n = Mu(s);
    if (n < 0 || n === 1 / 0) throw new Wu("Wrong number of repetitions");
    for (; n > 0;
      (n >>>= 1) && (e += e)) n & 1 && (t += e);
    return t
  },
  da = V,
  zu = Bo,
  xn = ct,
  Ku = Vu,
  Hu = Nt,
  Yu = da(Ku),
  Qu = da("".slice),
  Xu = Math.ceil,
  In = function(r) {
    return function(s, e, t) {
      var n = xn(Hu(s)),
        o = zu(e),
        i = n.length,
        c = t === void 0 ? " " : xn(t),
        l, d;
      return o <= i || c === "" ? n : (l = o - i, d = Yu(c, Xu(l / c.length)), d.length > l && (d = Qu(d, 0, l)), r ? n + d : d + n)
    }
  },
  Zu = {
    start: In(!1),
    end: In(!0)
  },
  Ie = V,
  On = W,
  Re = Zu.start,
  em = RangeError,
  tm = isFinite,
  rm = Math.abs,
  fe = Date.prototype,
  ur = fe.toISOString,
  sm = Ie(fe.getTime),
  nm = Ie(fe.getUTCDate),
  om = Ie(fe.getUTCFullYear),
  am = Ie(fe.getUTCHours),
  im = Ie(fe.getUTCMilliseconds),
  cm = Ie(fe.getUTCMinutes),
  dm = Ie(fe.getUTCMonth),
  lm = Ie(fe.getUTCSeconds),
  pm = On(function() {
    return ur.call(new Date(-5e13 - 1)) !== "0385-07-25T07:06:39.999Z"
  }) || !On(function() {
    ur.call(new Date(NaN))
  }) ? function() {
    if (!tm(sm(this))) throw new em("Invalid time value");
    var s = this,
      e = om(s),
      t = im(s),
      n = e < 0 ? "-" : e > 9999 ? "+" : "";
    return n + Re(rm(e), n ? 6 : 4, 0) + "-" + Re(dm(s) + 1, 2, 0) + "-" + Re(nm(s), 2, 0) + "T" + Re(am(s), 2, 0) + ":" + Re(cm(s), 2, 0) + ":" + Re(lm(s), 2, 0) + "." + Re(t, 3, 0) + "Z"
  } : ur,
  um = xe,
  la = Le,
  mm = es,
  fm = xo,
  ym = pm,
  hm = ke,
  gm = W,
  _m = gm(function() {
    return new Date(NaN).toJSON() !== null || la(Date.prototype.toJSON, {
      toISOString: function() {
        return 1
      }
    }) !== 1
  });
um({
  target: "Date",
  proto: !0,
  forced: _m
}, {
  toJSON: function(s) {
    var e = mm(this),
      t = fm(e, "number");
    return typeof t == "number" && !isFinite(t) ? null : !("toISOString" in e) && hm(e) === "Date" ? la(ym, e) : e.toISOString()
  }
});
var vm = xe,
  pa = ot,
  ua = Qr,
  bm = Le,
  dt = V,
  ma = W,
  Cn = Q,
  Rn = Zr,
  fa = ea,
  Am = aa,
  wm = Bt,
  Tm = String,
  je = pa("JSON", "stringify"),
  ht = dt(/./.exec),
  Nn = dt("".charAt),
  $m = dt("".charCodeAt),
  Sm = dt("".replace),
  qm = dt(1 .toString),
  jm = /[\uD800-\uDFFF]/g,
  Bn = /^[\uD800-\uDBFF]$/,
  Ln = /^[\uDC00-\uDFFF]$/,
  Fn = !wm || ma(function() {
    var r = pa("Symbol")("stringify detection");
    return je([r]) !== "[null]" || je({
      a: r
    }) !== "{}" || je(Object(r)) !== "{}"
  }),
  Dn = ma(function() {
    return je("\uDF06\uD834") !== '"\\udf06\\ud834"' || je("\uDEAD") !== '"\\udead"'
  }),
  Pm = function(r, s) {
    var e = fa(arguments),
      t = Am(s);
    if (!(!Cn(t) && (r === void 0 || Rn(r)))) return e[1] = function(n, o) {
      if (Cn(t) && (o = bm(t, this, Tm(n), o)), !Rn(o)) return o
    }, ua(je, null, e)
  },
  km = function(r, s, e) {
    var t = Nn(e, s - 1),
      n = Nn(e, s + 1);
    return ht(Bn, r) && !ht(Ln, n) || ht(Ln, r) && !ht(Bn, t) ? "\\u" + qm($m(r, 0), 16) : r
  };
je && vm({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: Fn || Dn
}, {
  stringify: function(s, e, t) {
    var n = fa(arguments),
      o = ua(Fn ? Pm : je, null, n);
    return Dn && typeof o == "string" ? Sm(o, jm, km) : o
  }
});
var Dr = nt,
  Em = Qr;
Dr.JSON || (Dr.JSON = {
  stringify: JSON.stringify
});
var xm = function(s, e, t) {
    return Em(Dr.JSON.stringify, null, arguments)
  },
  Im = xm,
  Om = Im,
  Cm = Om,
  Rm = Cm,
  fs = ze && ze.__importDefault || function(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  };
Object.defineProperty(L, "__esModule", {
  value: !0
});
var ya = L.TonApiClient = L.ContentType = L.PoolImplementationType = L.TrustType = L.JettonVerificationType = L.BouncePhaseType = L.ComputeSkipReason = L.AccStatusChange = L.TransactionType = L.AccountStatus = void 0,
  Gn;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(Gn || (L.AccountStatus = Gn = {}));
var Mn;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(Mn || (L.TransactionType = Mn = {}));
var Un;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(Un || (L.AccStatusChange = Un = {}));
var Jn;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(Jn || (L.ComputeSkipReason = Jn = {}));
var Wn;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(Wn || (L.BouncePhaseType = Wn = {}));
var Vn;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(Vn || (L.JettonVerificationType = Vn = {}));
var zn;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(zn || (L.TrustType = zn = {}));
var Kn;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(Kn || (L.PoolImplementationType = Kn = {}));
var be;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(be || (L.ContentType = be = {}));
const Gr = le,
  Nm = fs(tp),
  Bm = fs(Gu),
  Lm = fs(Rm),
  Fm = r => (0, Nm.default)(r, (s, e, t) => {
    if (typeof e == "number") {
      const n = t.source;
      return Number.isSafeInteger(e) || /[\.eE]/.test(n) ? e : BigInt(n)
    }
    return e
  }),
  mr = r => (0, Lm.default)(r, (s, e) => typeof e == "bigint" ? (0, Bm.default)(e.toString()) : e);
class Dm {
  constructor(s = {}) {
    u(this, "baseUrl", "https://tonapi.io");
    u(this, "abortControllers", new Map);
    u(this, "providedFetch", null);
    u(this, "customFetch", (...s) => this.providedFetch ? this.providedFetch(...s) : fetch(...s));
    u(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    u(this, "contentFormatters", {
      [be.Json]: s => s !== null && (typeof s == "object" || typeof s == "string") ? mr(s) : s,
      [be.Text]: s => s !== null && typeof s != "string" ? mr(s) : s,
      [be.FormData]: s => Object.keys(s || {}).reduce((e, t) => {
        const n = s[t];
        return e.append(t, n instanceof Blob ? n : typeof n == "object" && n !== null ? mr(n) : `${n}`), e
      }, new FormData),
      [be.UrlEncoded]: s => this.toQueryString(s)
    });
    u(this, "createAbortSignal", s => {
      if (this.abortControllers.has(s)) {
        const t = this.abortControllers.get(s);
        return t ? t.signal : void 0
      }
      const e = new AbortController;
      return this.abortControllers.set(s, e), e.signal
    });
    u(this, "abortRequest", s => {
      const e = this.abortControllers.get(s);
      e && (e.abort(), this.abortControllers.delete(s))
    });
    u(this, "request", async ({
      body: s,
      secure: e,
      path: t,
      type: n,
      query: o,
      format: i,
      baseUrl: c,
      cancelToken: l,
      ...d
    }) => {
      const a = this.mergeRequestParams(d),
        y = o && this.toQueryString(o),
        h = n ?? be.Json,
        f = this.contentFormatters[h],
        _ = i || a.format;
      return this.customFetch(`${c||this.baseUrl||""}${t}${y?`?${y}`:""}`, {
        ...a,
        headers: {
          ...a.headers || {},
          ...h && h !== be.FormData ? {
            "Content-Type": h
          } : {}
        },
        signal: (l ? this.createAbortSignal(l) : a.signal) || null,
        body: typeof s > "u" || s === null ? null : f(s)
      }).then(async g => {
        const v = g.clone();
        v.data = null, v.error = null;
        const S = _ === "json" ? "text" : _,
          D = S ? await g[S]().then($ => (v.ok ? v.data = _ === "json" ? Fm($) : $ : v.error = $, v)).catch($ => (v.error = $, v)) : v;
        if (l && this.abortControllers.delete(l), !g.ok) throw D;
        return D.data
      })
    });
    const e = typeof window < "u" && window && window.tonapi,
      t = s.fetch ?? (e && e.fetch) ?? null,
      n = s.baseApiParams || {},
      {
        apiKey: o,
        ...i
      } = s,
      c = {
        ...n.headers ?? {},
        ...o ? {
          Authorization: `Bearer ${o}`
        } : {},
        "x-tonapi-client": "tonapi-js@0.3.1"
      },
      l = {
        ...i,
        providedFetch: t,
        baseApiParams: {
          ...n,
          headers: c
        }
      };
    Object.assign(this, l)
  }
  encodeQueryParam(s, e) {
    return `${encodeURIComponent(s)}=${encodeURIComponent(typeof e=="number"?e:`${e}`)}`
  }
  addQueryParam(s, e) {
    return this.encodeQueryParam(e, s[e])
  }
  addArrayQueryParam(s, e) {
    return s[e].map(n => this.encodeQueryParam(e, n)).join("&")
  }
  toQueryString(s) {
    const e = s || {};
    return Object.keys(e).filter(n => typeof e[n] < "u").map(n => Array.isArray(e[n]) ? this.addArrayQueryParam(e, n) : this.addQueryParam(e, n)).join("&")
  }
  addQueryParams(s) {
    const e = this.toQueryString(s);
    return e ? `?${e}` : ""
  }
  mergeRequestParams(s, e) {
    return {
      ...this.baseApiParams,
      ...s,
      ...e || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...s.headers || {},
        ...e && e.headers || {}
      }
    }
  }
}
const ha = {
  "#/components/schemas/Error": {
    type: "object",
    required: ["error"],
    properties: {
      error: {
        type: "string"
      }
    }
  },
  "#/components/schemas/AccountAddress": {
    type: "object",
    required: ["address", "is_scam", "is_wallet"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      name: {
        type: "string"
      },
      is_scam: {
        type: "boolean"
      },
      icon: {
        type: "string"
      },
      is_wallet: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/BlockCurrencyCollection": {
    type: "object",
    required: ["grams", "other"],
    properties: {
      grams: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      other: {
        type: "array",
        items: {
          type: "object",
          required: ["id", "value"],
          properties: {
            id: {
              type: "integer",
              format: "int64"
            },
            value: {
              type: "string",
              "x-js-format": "bigint"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/BlockValueFlow": {
    type: "object",
    required: ["from_prev_blk", "to_next_blk", "imported", "exported", "fees_collected", "fees_imported", "recovered", "created", "minted"],
    properties: {
      from_prev_blk: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      to_next_blk: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      imported: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      exported: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      fees_collected: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      burned: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      fees_imported: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      recovered: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      created: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      minted: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      }
    }
  },
  "#/components/schemas/ServiceStatus": {
    type: "object",
    required: ["indexing_latency", "rest_online", "last_known_masterchain_seqno"],
    properties: {
      rest_online: {
        type: "boolean",
        default: !0
      },
      indexing_latency: {
        type: "integer"
      },
      last_known_masterchain_seqno: {
        type: "integer",
        format: "int32"
      }
    }
  },
  "#/components/schemas/ReducedBlock": {
    type: "object",
    required: ["workchain_id", "shard", "seqno", "tx_quantity", "utime", "shards_blocks", "parent"],
    properties: {
      workchain_id: {
        type: "integer",
        format: "int32"
      },
      shard: {
        type: "string"
      },
      seqno: {
        type: "integer",
        format: "int32"
      },
      master_ref: {
        type: "string"
      },
      tx_quantity: {
        type: "integer"
      },
      utime: {
        type: "integer",
        format: "int64"
      },
      shards_blocks: {
        type: "array",
        items: {
          type: "string"
        }
      },
      parent: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/BlockchainBlock": {
    type: "object",
    required: ["workchain_id", "shard", "seqno", "root_hash", "file_hash", "global_id", "value_flow", "version", "after_merge", "before_split", "after_split", "want_split", "want_merge", "key_block", "gen_utime", "start_lt", "end_lt", "vert_seqno", "gen_catchain_seqno", "min_ref_mc_seqno", "prev_key_block_seqno", "prev_refs", "in_msg_descr_length", "out_msg_descr_length", "rand_seed", "created_by", "tx_quantity"],
    properties: {
      tx_quantity: {
        type: "integer"
      },
      value_flow: {
        $ref: "#/components/schemas/BlockValueFlow"
      },
      workchain_id: {
        type: "integer",
        format: "int32"
      },
      shard: {
        type: "string"
      },
      seqno: {
        type: "integer",
        format: "int32"
      },
      root_hash: {
        type: "string"
      },
      file_hash: {
        type: "string"
      },
      global_id: {
        type: "integer",
        format: "int32"
      },
      version: {
        type: "integer",
        format: "int32"
      },
      after_merge: {
        type: "boolean"
      },
      before_split: {
        type: "boolean"
      },
      after_split: {
        type: "boolean"
      },
      want_split: {
        type: "boolean"
      },
      want_merge: {
        type: "boolean"
      },
      key_block: {
        type: "boolean"
      },
      gen_utime: {
        type: "integer",
        format: "int64"
      },
      start_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      end_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      vert_seqno: {
        type: "integer",
        format: "int32"
      },
      gen_catchain_seqno: {
        type: "integer",
        format: "int32"
      },
      min_ref_mc_seqno: {
        type: "integer",
        format: "int32"
      },
      prev_key_block_seqno: {
        type: "integer",
        format: "int32"
      },
      gen_software_version: {
        type: "integer",
        format: "int32"
      },
      gen_software_capabilities: {
        type: "integer",
        format: "int64"
      },
      master_ref: {
        type: "string"
      },
      prev_refs: {
        type: "array",
        items: {
          type: "string"
        }
      },
      in_msg_descr_length: {
        type: "integer",
        format: "int64"
      },
      out_msg_descr_length: {
        type: "integer",
        format: "int64"
      },
      rand_seed: {
        type: "string"
      },
      created_by: {
        type: "string"
      }
    }
  },
  "#/components/schemas/BlockchainBlocks": {
    type: "object",
    required: ["blocks"],
    properties: {
      blocks: {
        type: "array",
        items: {
          $ref: "#/components/schemas/BlockchainBlock"
        }
      }
    }
  },
  "#/components/schemas/ReducedBlocks": {
    type: "object",
    required: ["blocks"],
    properties: {
      blocks: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ReducedBlock"
        }
      }
    }
  },
  "#/components/schemas/BlockchainBlockShards": {
    type: "object",
    required: ["shards"],
    properties: {
      shards: {
        type: "array",
        items: {
          type: "object",
          required: ["last_known_block_id", "last_known_block"],
          properties: {
            last_known_block_id: {
              type: "string"
            },
            last_known_block: {
              $ref: "#/components/schemas/BlockchainBlock"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/AccountStatus": {
    type: "string",
    enum: ["nonexist", "uninit", "active", "frozen"]
  },
  "#/components/schemas/StateInit": {
    type: "object",
    required: ["boc", "interfaces"],
    properties: {
      boc: {
        type: "string",
        format: "cell"
      },
      interfaces: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/Message": {
    type: "object",
    required: ["msg_type", "created_lt", "ihr_disabled", "bounce", "bounced", "value", "fwd_fee", "ihr_fee", "import_fee", "created_at", "hash"],
    properties: {
      msg_type: {
        type: "string",
        enum: ["int_msg", "ext_in_msg", "ext_out_msg"]
      },
      created_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      ihr_disabled: {
        type: "boolean"
      },
      bounce: {
        type: "boolean"
      },
      bounced: {
        type: "boolean"
      },
      value: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      value_extra: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ExtraCurrency"
        }
      },
      fwd_fee: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      ihr_fee: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      destination: {
        $ref: "#/components/schemas/AccountAddress"
      },
      source: {
        $ref: "#/components/schemas/AccountAddress"
      },
      import_fee: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      created_at: {
        type: "integer",
        format: "int64"
      },
      op_code: {
        type: "string",
        "x-js-format": "bigint"
      },
      init: {
        $ref: "#/components/schemas/StateInit"
      },
      hash: {
        type: "string"
      },
      raw_body: {
        type: "string",
        format: "cell"
      },
      decoded_op_name: {
        type: "string"
      },
      decoded_body: {}
    }
  },
  "#/components/schemas/TransactionType": {
    type: "string",
    enum: ["TransOrd", "TransTickTock", "TransSplitPrepare", "TransSplitInstall", "TransMergePrepare", "TransMergeInstall", "TransStorage"]
  },
  "#/components/schemas/AccStatusChange": {
    type: "string",
    enum: ["acst_unchanged", "acst_frozen", "acst_deleted"]
  },
  "#/components/schemas/ComputeSkipReason": {
    type: "string",
    enum: ["cskip_no_state", "cskip_bad_state", "cskip_no_gas"]
  },
  "#/components/schemas/BouncePhaseType": {
    type: "string",
    enum: ["TrPhaseBounceNegfunds", "TrPhaseBounceNofunds", "TrPhaseBounceOk"]
  },
  "#/components/schemas/ComputePhase": {
    type: "object",
    required: ["skipped"],
    properties: {
      skipped: {
        type: "boolean"
      },
      skip_reason: {
        $ref: "#/components/schemas/ComputeSkipReason"
      },
      success: {
        type: "boolean"
      },
      gas_fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      gas_used: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      vm_steps: {
        type: "integer",
        format: "int32"
      },
      exit_code: {
        type: "integer",
        format: "int32"
      },
      exit_code_description: {
        type: "string"
      }
    }
  },
  "#/components/schemas/StoragePhase": {
    type: "object",
    required: ["fees_collected", "status_change"],
    properties: {
      fees_collected: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      fees_due: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      status_change: {
        $ref: "#/components/schemas/AccStatusChange"
      }
    }
  },
  "#/components/schemas/CreditPhase": {
    type: "object",
    required: ["fees_collected", "credit"],
    properties: {
      fees_collected: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      credit: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      }
    }
  },
  "#/components/schemas/ActionPhase": {
    type: "object",
    required: ["success", "result_code", "total_actions", "skipped_actions", "fwd_fees", "total_fees"],
    properties: {
      success: {
        type: "boolean"
      },
      result_code: {
        type: "integer",
        format: "int32"
      },
      total_actions: {
        type: "integer",
        format: "int32"
      },
      skipped_actions: {
        type: "integer",
        format: "int32"
      },
      fwd_fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      total_fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      result_code_description: {
        type: "string"
      }
    }
  },
  "#/components/schemas/Transaction": {
    type: "object",
    required: ["hash", "lt", "account", "end_balance", "success", "utime", "orig_status", "end_status", "total_fees", "transaction_type", "state_update_old", "state_update_new", "out_msgs", "block", "aborted", "destroyed", "raw"],
    properties: {
      hash: {
        type: "string"
      },
      lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      account: {
        $ref: "#/components/schemas/AccountAddress"
      },
      success: {
        type: "boolean"
      },
      utime: {
        type: "integer",
        format: "int64"
      },
      orig_status: {
        $ref: "#/components/schemas/AccountStatus"
      },
      end_status: {
        $ref: "#/components/schemas/AccountStatus"
      },
      total_fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      end_balance: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      transaction_type: {
        $ref: "#/components/schemas/TransactionType"
      },
      state_update_old: {
        type: "string"
      },
      state_update_new: {
        type: "string"
      },
      in_msg: {
        $ref: "#/components/schemas/Message"
      },
      out_msgs: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Message"
        }
      },
      block: {
        type: "string"
      },
      prev_trans_hash: {
        type: "string"
      },
      prev_trans_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      compute_phase: {
        $ref: "#/components/schemas/ComputePhase"
      },
      storage_phase: {
        $ref: "#/components/schemas/StoragePhase"
      },
      credit_phase: {
        $ref: "#/components/schemas/CreditPhase"
      },
      action_phase: {
        $ref: "#/components/schemas/ActionPhase"
      },
      bounce_phase: {
        $ref: "#/components/schemas/BouncePhaseType"
      },
      aborted: {
        type: "boolean"
      },
      destroyed: {
        type: "boolean"
      },
      raw: {
        type: "string",
        format: "cell"
      }
    }
  },
  "#/components/schemas/Transactions": {
    type: "object",
    required: ["transactions"],
    properties: {
      transactions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Transaction"
        }
      }
    }
  },
  "#/components/schemas/ConfigProposalSetup": {
    type: "object",
    required: ["min_tot_rounds", "max_tot_rounds", "min_wins", "max_losses", "min_store_sec", "max_store_sec", "bit_price", "cell_price"],
    properties: {
      min_tot_rounds: {
        type: "integer"
      },
      max_tot_rounds: {
        type: "integer"
      },
      min_wins: {
        type: "integer"
      },
      max_losses: {
        type: "integer"
      },
      min_store_sec: {
        type: "integer",
        format: "int64"
      },
      max_store_sec: {
        type: "integer",
        format: "int64"
      },
      bit_price: {
        type: "integer",
        format: "int64"
      },
      cell_price: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/GasLimitPrices": {
    type: "object",
    required: ["gas_price", "gas_limit", "gas_credit", "block_gas_limit", "freeze_due_limit", "delete_due_limit"],
    properties: {
      special_gas_limit: {
        type: "integer",
        format: "int64"
      },
      flat_gas_limit: {
        type: "integer",
        format: "int64"
      },
      flat_gas_price: {
        type: "integer",
        format: "int64"
      },
      gas_price: {
        type: "integer",
        format: "int64"
      },
      gas_limit: {
        type: "integer",
        format: "int64"
      },
      gas_credit: {
        type: "integer",
        format: "int64"
      },
      block_gas_limit: {
        type: "integer",
        format: "int64"
      },
      freeze_due_limit: {
        type: "integer",
        format: "int64"
      },
      delete_due_limit: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/BlockParamLimits": {
    type: "object",
    required: ["underload", "soft_limit", "hard_limit"],
    properties: {
      underload: {
        type: "integer",
        format: "int64"
      },
      soft_limit: {
        type: "integer",
        format: "int64"
      },
      hard_limit: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/BlockLimits": {
    type: "object",
    required: ["bytes", "gas", "lt_delta"],
    properties: {
      bytes: {
        $ref: "#/components/schemas/BlockParamLimits"
      },
      gas: {
        $ref: "#/components/schemas/BlockParamLimits"
      },
      lt_delta: {
        $ref: "#/components/schemas/BlockParamLimits"
      }
    }
  },
  "#/components/schemas/MsgForwardPrices": {
    type: "object",
    required: ["lump_price", "bit_price", "cell_price", "ihr_price_factor", "first_frac", "next_frac"],
    properties: {
      lump_price: {
        type: "integer",
        format: "int64"
      },
      bit_price: {
        type: "integer",
        format: "int64"
      },
      cell_price: {
        type: "integer",
        format: "int64"
      },
      ihr_price_factor: {
        type: "integer",
        format: "int64"
      },
      first_frac: {
        type: "integer",
        format: "int64"
      },
      next_frac: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/WorkchainDescr": {
    type: "object",
    required: ["workchain", "enabled_since", "actual_min_split", "min_split", "max_split", "basic", "active", "accept_msgs", "flags", "zerostate_root_hash", "zerostate_file_hash", "version"],
    properties: {
      workchain: {
        type: "integer",
        format: "int"
      },
      enabled_since: {
        type: "integer",
        format: "int64"
      },
      actual_min_split: {
        type: "integer",
        format: "int"
      },
      min_split: {
        type: "integer",
        format: "int"
      },
      max_split: {
        type: "integer",
        format: "int"
      },
      basic: {
        type: "integer"
      },
      active: {
        type: "boolean"
      },
      accept_msgs: {
        type: "boolean"
      },
      flags: {
        type: "integer",
        format: "int"
      },
      zerostate_root_hash: {
        type: "string"
      },
      zerostate_file_hash: {
        type: "string"
      },
      version: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/MisbehaviourPunishmentConfig": {
    type: "object",
    required: ["default_flat_fine", "default_proportional_fine", "severity_flat_mult", "severity_proportional_mult", "unpunishable_interval", "long_interval", "long_flat_mult", "long_proportional_mult", "medium_interval", "medium_flat_mult", "medium_proportional_mult"],
    properties: {
      default_flat_fine: {
        type: "integer",
        format: "int64"
      },
      default_proportional_fine: {
        type: "integer",
        format: "int64"
      },
      severity_flat_mult: {
        type: "integer"
      },
      severity_proportional_mult: {
        type: "integer"
      },
      unpunishable_interval: {
        type: "integer"
      },
      long_interval: {
        type: "integer"
      },
      long_flat_mult: {
        type: "integer"
      },
      long_proportional_mult: {
        type: "integer"
      },
      medium_interval: {
        type: "integer"
      },
      medium_flat_mult: {
        type: "integer"
      },
      medium_proportional_mult: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/SizeLimitsConfig": {
    type: "object",
    required: ["max_msg_bits", "max_msg_cells", "max_library_cells", "max_vm_data_depth", "max_ext_msg_size", "max_ext_msg_depth"],
    properties: {
      max_msg_bits: {
        type: "integer",
        format: "int64"
      },
      max_msg_cells: {
        type: "integer",
        format: "int64"
      },
      max_library_cells: {
        type: "integer",
        format: "int64"
      },
      max_vm_data_depth: {
        type: "integer",
        format: "int"
      },
      max_ext_msg_size: {
        type: "integer",
        format: "int64"
      },
      max_ext_msg_depth: {
        type: "integer",
        format: "int"
      },
      max_acc_state_cells: {
        type: "integer",
        format: "int64"
      },
      max_acc_state_bits: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/ValidatorsSet": {
    type: "object",
    required: ["utime_since", "utime_until", "total", "main", "list"],
    properties: {
      utime_since: {
        type: "integer"
      },
      utime_until: {
        type: "integer"
      },
      total: {
        type: "integer"
      },
      main: {
        type: "integer"
      },
      total_weight: {
        type: "string",
        "x-js-format": "bigint"
      },
      list: {
        type: "array",
        items: {
          type: "object",
          required: ["public_key", "weight"],
          properties: {
            public_key: {
              type: "string"
            },
            weight: {
              type: "integer",
              format: "int64",
              "x-js-format": "bigint"
            },
            adnl_addr: {
              type: "string"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/Oracle": {
    type: "object",
    required: ["address", "secp_pubkey"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      secp_pubkey: {
        type: "string"
      }
    }
  },
  "#/components/schemas/OracleBridgeParams": {
    type: "object",
    required: ["bridge_addr", "oracle_multisig_address", "external_chain_address", "oracles"],
    properties: {
      bridge_addr: {
        type: "string",
        format: "address"
      },
      oracle_multisig_address: {
        type: "string",
        format: "address"
      },
      external_chain_address: {
        type: "string"
      },
      oracles: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Oracle"
        }
      }
    }
  },
  "#/components/schemas/JettonBridgePrices": {
    type: "object",
    required: ["bridge_burn_fee", "bridge_mint_fee", "wallet_min_tons_for_storage", "wallet_gas_consumption", "minter_min_tons_for_storage", "discover_gas_consumption"],
    properties: {
      bridge_burn_fee: {
        type: "integer",
        format: "int64"
      },
      bridge_mint_fee: {
        type: "integer",
        format: "int64"
      },
      wallet_min_tons_for_storage: {
        type: "integer",
        format: "int64"
      },
      wallet_gas_consumption: {
        type: "integer",
        format: "int64"
      },
      minter_min_tons_for_storage: {
        type: "integer",
        format: "int64"
      },
      discover_gas_consumption: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/JettonBridgeParams": {
    type: "object",
    required: ["bridge_address", "oracles_address", "state_flags", "oracles"],
    properties: {
      bridge_address: {
        type: "string",
        format: "address"
      },
      oracles_address: {
        type: "string",
        format: "address"
      },
      state_flags: {
        type: "integer"
      },
      burn_bridge_fee: {
        type: "integer",
        format: "int64"
      },
      oracles: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Oracle"
        }
      },
      external_chain_address: {
        type: "string"
      },
      prices: {
        $ref: "#/components/schemas/JettonBridgePrices"
      }
    }
  },
  "#/components/schemas/Validator": {
    type: "object",
    required: ["address", "adnl_address", "stake", "max_factor"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      adnl_address: {
        type: "string"
      },
      stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      max_factor: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/Validators": {
    type: "object",
    required: ["validators", "elect_at", "elect_close", "min_stake", "total_stake"],
    properties: {
      elect_at: {
        type: "integer",
        format: "int64"
      },
      elect_close: {
        type: "integer",
        format: "int64"
      },
      min_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      total_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      validators: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Validator"
        }
      }
    }
  },
  "#/components/schemas/AccountStorageInfo": {
    type: "object",
    required: ["used_cells", "used_bits", "used_public_cells", "last_paid", "due_payment"],
    properties: {
      used_cells: {
        type: "integer",
        format: "int64"
      },
      used_bits: {
        type: "integer",
        format: "int64"
      },
      used_public_cells: {
        type: "integer",
        format: "int64"
      },
      last_paid: {
        type: "integer",
        format: "int64"
      },
      due_payment: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      }
    }
  },
  "#/components/schemas/BlockchainRawAccount": {
    type: "object",
    required: ["address", "balance", "status", "last_transaction_lt", "storage"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      balance: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      extra_balance: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      },
      code: {
        type: "string",
        format: "cell"
      },
      data: {
        type: "string",
        format: "cell"
      },
      last_transaction_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      last_transaction_hash: {
        type: "string"
      },
      frozen_hash: {
        type: "string"
      },
      status: {
        $ref: "#/components/schemas/AccountStatus"
      },
      storage: {
        $ref: "#/components/schemas/AccountStorageInfo"
      },
      libraries: {
        type: "array",
        items: {
          type: "object",
          required: ["public", "root"],
          properties: {
            public: {
              type: "boolean"
            },
            root: {
              type: "string",
              format: "cell"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/Account": {
    type: "object",
    required: ["address", "balance", "status", "last_activity", "get_methods", "is_wallet"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      balance: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      extra_balance: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ExtraCurrency"
        }
      },
      currencies_balance: {
        type: "object",
        additionalProperties: !0
      },
      last_activity: {
        type: "integer",
        format: "int64"
      },
      status: {
        $ref: "#/components/schemas/AccountStatus"
      },
      interfaces: {
        type: "array",
        items: {
          type: "string"
        }
      },
      name: {
        type: "string"
      },
      is_scam: {
        type: "boolean"
      },
      icon: {
        type: "string"
      },
      memo_required: {
        type: "boolean"
      },
      get_methods: {
        type: "array",
        items: {
          type: "string"
        }
      },
      is_suspended: {
        type: "boolean"
      },
      is_wallet: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/Accounts": {
    type: "object",
    required: ["accounts"],
    properties: {
      accounts: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Account"
        }
      }
    }
  },
  "#/components/schemas/GaslessConfig": {
    type: "object",
    required: ["gas_jettons", "relay_address"],
    properties: {
      relay_address: {
        type: "string",
        format: "address"
      },
      gas_jettons: {
        type: "array",
        items: {
          type: "object",
          required: ["master_id"],
          properties: {
            master_id: {
              type: "string",
              format: "address"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/SignRawMessage": {
    type: "object",
    required: ["address", "amount"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "string"
      },
      payload: {
        type: "string",
        format: "cell"
      },
      stateInit: {
        type: "string",
        format: "cell"
      }
    }
  },
  "#/components/schemas/SignRawParams": {
    type: "object",
    required: ["messages", "relay_address", "commission", "from", "valid_until"],
    properties: {
      relay_address: {
        type: "string",
        format: "address"
      },
      commission: {
        type: "string",
        "x-js-format": "bigint"
      },
      from: {
        type: "string",
        format: "address"
      },
      valid_until: {
        type: "integer",
        format: "int64"
      },
      messages: {
        type: "array",
        items: {
          $ref: "#/components/schemas/SignRawMessage"
        }
      }
    }
  },
  "#/components/schemas/MethodExecutionResult": {
    type: "object",
    required: ["success", "exit_code", "stack"],
    properties: {
      success: {
        type: "boolean"
      },
      exit_code: {
        type: "integer"
      },
      stack: {
        type: "array",
        items: {
          $ref: "#/components/schemas/TvmStackRecord"
        }
      },
      decoded: {}
    }
  },
  "#/components/schemas/TvmStackRecord": {
    type: "object",
    format: "tuple-item",
    required: ["type"],
    properties: {
      type: {
        type: "string",
        enum: ["cell", "num", "nan", "null", "tuple"]
      },
      cell: {
        type: "string",
        format: "cell"
      },
      slice: {
        type: "string",
        format: "cell"
      },
      num: {
        type: "string"
      },
      tuple: {
        type: "array",
        items: {
          $ref: "#/components/schemas/TvmStackRecord"
        }
      }
    }
  },
  "#/components/schemas/RawBlockchainConfig": {
    type: "object",
    required: ["config"],
    properties: {
      config: {
        type: "object",
        additionalProperties: !0
      }
    }
  },
  "#/components/schemas/BlockchainConfig": {
    type: "object",
    required: ["raw", "0", "1", "2", "4", "44"],
    properties: {
      0: {
        type: "string",
        format: "address"
      },
      1: {
        type: "string",
        format: "address"
      },
      2: {
        type: "string",
        format: "address"
      },
      3: {
        type: "string",
        format: "address"
      },
      4: {
        type: "string",
        format: "address"
      },
      5: {
        type: "object",
        required: ["fee_burn_nom", "fee_burn_denom"],
        properties: {
          blackhole_addr: {
            type: "string",
            format: "address"
          },
          fee_burn_nom: {
            type: "integer",
            format: "int64"
          },
          fee_burn_denom: {
            type: "integer",
            format: "int64"
          }
        }
      },
      6: {
        type: "object",
        required: ["mint_new_price", "mint_add_price"],
        properties: {
          mint_new_price: {
            type: "integer",
            format: "int64"
          },
          mint_add_price: {
            type: "integer",
            format: "int64"
          }
        }
      },
      7: {
        type: "object",
        required: ["currencies"],
        properties: {
          currencies: {
            type: "array",
            items: {
              type: "object",
              required: ["currency_id", "amount"],
              properties: {
                currency_id: {
                  type: "integer",
                  format: "int64"
                },
                amount: {
                  type: "string"
                }
              }
            }
          }
        }
      },
      8: {
        type: "object",
        required: ["version", "capabilities"],
        properties: {
          version: {
            type: "integer",
            format: "int64"
          },
          capabilities: {
            type: "integer",
            format: "int64"
          }
        }
      },
      9: {
        type: "object",
        required: ["mandatory_params"],
        properties: {
          mandatory_params: {
            type: "array",
            items: {
              type: "integer",
              format: "int32"
            }
          }
        }
      },
      10: {
        type: "object",
        required: ["critical_params"],
        properties: {
          critical_params: {
            type: "array",
            items: {
              type: "integer",
              format: "int32"
            }
          }
        }
      },
      11: {
        type: "object",
        required: ["normal_params", "critical_params"],
        properties: {
          normal_params: {
            $ref: "#/components/schemas/ConfigProposalSetup"
          },
          critical_params: {
            $ref: "#/components/schemas/ConfigProposalSetup"
          }
        }
      },
      12: {
        type: "object",
        required: ["workchains"],
        properties: {
          workchains: {
            type: "array",
            items: {
              $ref: "#/components/schemas/WorkchainDescr"
            }
          }
        }
      },
      13: {
        type: "object",
        required: ["deposit", "bit_price", "cell_price"],
        properties: {
          deposit: {
            type: "integer",
            format: "int64"
          },
          bit_price: {
            type: "integer",
            format: "int64"
          },
          cell_price: {
            type: "integer",
            format: "int64"
          }
        }
      },
      14: {
        type: "object",
        required: ["masterchain_block_fee", "basechain_block_fee"],
        properties: {
          masterchain_block_fee: {
            type: "integer",
            format: "int64"
          },
          basechain_block_fee: {
            type: "integer",
            format: "int64"
          }
        }
      },
      15: {
        type: "object",
        required: ["validators_elected_for", "elections_start_before", "elections_end_before", "stake_held_for"],
        properties: {
          validators_elected_for: {
            type: "integer",
            format: "int64"
          },
          elections_start_before: {
            type: "integer",
            format: "int64"
          },
          elections_end_before: {
            type: "integer",
            format: "int64"
          },
          stake_held_for: {
            type: "integer",
            format: "int64"
          }
        }
      },
      16: {
        type: "object",
        required: ["max_validators", "max_main_validators", "min_validators"],
        properties: {
          max_validators: {
            type: "integer"
          },
          max_main_validators: {
            type: "integer"
          },
          min_validators: {
            type: "integer"
          }
        }
      },
      17: {
        type: "object",
        required: ["min_stake", "max_stake", "min_total_stake", "max_stake_factor"],
        properties: {
          min_stake: {
            type: "string"
          },
          max_stake: {
            type: "string"
          },
          min_total_stake: {
            type: "string"
          },
          max_stake_factor: {
            type: "integer",
            format: "int64"
          }
        }
      },
      18: {
        type: "object",
        required: ["storage_prices"],
        properties: {
          storage_prices: {
            type: "array",
            items: {
              type: "object",
              required: ["utime_since", "bit_price_ps", "cell_price_ps", "mc_bit_price_ps", "mc_cell_price_ps"],
              properties: {
                utime_since: {
                  type: "integer",
                  format: "int64"
                },
                bit_price_ps: {
                  type: "integer",
                  format: "int64"
                },
                cell_price_ps: {
                  type: "integer",
                  format: "int64"
                },
                mc_bit_price_ps: {
                  type: "integer",
                  format: "int64"
                },
                mc_cell_price_ps: {
                  type: "integer",
                  format: "int64"
                }
              }
            }
          }
        }
      },
      20: {
        type: "object",
        required: ["gas_limits_prices"],
        properties: {
          gas_limits_prices: {
            $ref: "#/components/schemas/GasLimitPrices"
          }
        }
      },
      21: {
        type: "object",
        required: ["gas_limits_prices"],
        properties: {
          gas_limits_prices: {
            $ref: "#/components/schemas/GasLimitPrices"
          }
        }
      },
      22: {
        type: "object",
        required: ["block_limits"],
        properties: {
          block_limits: {
            $ref: "#/components/schemas/BlockLimits"
          }
        }
      },
      23: {
        type: "object",
        required: ["block_limits"],
        properties: {
          block_limits: {
            $ref: "#/components/schemas/BlockLimits"
          }
        }
      },
      24: {
        type: "object",
        required: ["msg_forward_prices"],
        properties: {
          msg_forward_prices: {
            $ref: "#/components/schemas/MsgForwardPrices"
          }
        }
      },
      25: {
        type: "object",
        required: ["msg_forward_prices"],
        properties: {
          msg_forward_prices: {
            $ref: "#/components/schemas/MsgForwardPrices"
          }
        }
      },
      28: {
        type: "object",
        required: ["mc_catchain_lifetime", "shard_catchain_lifetime", "shard_validators_lifetime", "shard_validators_num"],
        properties: {
          mc_catchain_lifetime: {
            type: "integer",
            format: "int64"
          },
          shard_catchain_lifetime: {
            type: "integer",
            format: "int64"
          },
          shard_validators_lifetime: {
            type: "integer",
            format: "int64"
          },
          shard_validators_num: {
            type: "integer",
            format: "int64"
          },
          flags: {
            type: "integer",
            format: "int"
          },
          shuffle_mc_validators: {
            type: "boolean"
          }
        }
      },
      29: {
        type: "object",
        required: ["round_candidates", "next_candidate_delay_ms", "consensus_timeout_ms", "fast_attempts", "attempt_duration", "catchain_max_deps", "max_block_bytes", "max_collated_bytes"],
        properties: {
          flags: {
            type: "integer",
            format: "int"
          },
          new_catchain_ids: {
            type: "boolean"
          },
          round_candidates: {
            type: "integer",
            format: "int64"
          },
          next_candidate_delay_ms: {
            type: "integer",
            format: "int64"
          },
          consensus_timeout_ms: {
            type: "integer",
            format: "int64"
          },
          fast_attempts: {
            type: "integer",
            format: "int64"
          },
          attempt_duration: {
            type: "integer",
            format: "int64"
          },
          catchain_max_deps: {
            type: "integer",
            format: "int64"
          },
          max_block_bytes: {
            type: "integer",
            format: "int64"
          },
          max_collated_bytes: {
            type: "integer",
            format: "int64"
          },
          proto_version: {
            type: "integer",
            format: "int64"
          },
          catchain_max_blocks_coeff: {
            type: "integer",
            format: "int64"
          }
        }
      },
      31: {
        type: "object",
        required: ["fundamental_smc_addr"],
        properties: {
          fundamental_smc_addr: {
            type: "array",
            items: {
              type: "string",
              format: "address"
            }
          }
        }
      },
      32: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      33: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      34: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      35: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      36: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      37: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      40: {
        type: "object",
        required: ["misbehaviour_punishment_config"],
        properties: {
          misbehaviour_punishment_config: {
            $ref: "#/components/schemas/MisbehaviourPunishmentConfig"
          }
        }
      },
      43: {
        type: "object",
        required: ["size_limits_config"],
        properties: {
          size_limits_config: {
            $ref: "#/components/schemas/SizeLimitsConfig"
          }
        }
      },
      44: {
        type: "object",
        required: ["accounts", "suspended_until"],
        properties: {
          accounts: {
            type: "array",
            items: {
              type: "string",
              format: "address"
            }
          },
          suspended_until: {
            type: "integer"
          }
        }
      },
      45: {
        type: "object",
        required: ["contracts"],
        properties: {
          contracts: {
            type: "array",
            items: {
              type: "object",
              required: ["code_hash", "gas_usage"],
              properties: {
                code_hash: {
                  type: "string",
                  format: "address"
                },
                gas_usage: {
                  type: "integer",
                  format: "int64"
                }
              }
            }
          }
        }
      },
      71: {
        type: "object",
        required: ["oracle_bridge_params"],
        properties: {
          oracle_bridge_params: {
            $ref: "#/components/schemas/OracleBridgeParams"
          }
        }
      },
      72: {
        type: "object",
        required: ["oracle_bridge_params"],
        properties: {
          oracle_bridge_params: {
            $ref: "#/components/schemas/OracleBridgeParams"
          }
        }
      },
      73: {
        type: "object",
        required: ["oracle_bridge_params"],
        properties: {
          oracle_bridge_params: {
            $ref: "#/components/schemas/OracleBridgeParams"
          }
        }
      },
      79: {
        type: "object",
        required: ["jetton_bridge_params"],
        properties: {
          jetton_bridge_params: {
            $ref: "#/components/schemas/JettonBridgeParams"
          }
        }
      },
      81: {
        type: "object",
        required: ["jetton_bridge_params"],
        properties: {
          jetton_bridge_params: {
            $ref: "#/components/schemas/JettonBridgeParams"
          }
        }
      },
      82: {
        type: "object",
        required: ["jetton_bridge_params"],
        properties: {
          jetton_bridge_params: {
            $ref: "#/components/schemas/JettonBridgeParams"
          }
        }
      },
      raw: {
        type: "string",
        format: "cell"
      }
    }
  },
  "#/components/schemas/DomainNames": {
    type: "object",
    required: ["domains"],
    properties: {
      domains: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/DomainBid": {
    type: "object",
    required: ["success", "value", "txTime", "bidder", "txHash"],
    properties: {
      success: {
        type: "boolean",
        default: !1
      },
      value: {
        type: "integer",
        format: "int64"
      },
      txTime: {
        type: "integer",
        format: "int64"
      },
      txHash: {
        type: "string"
      },
      bidder: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/DomainBids": {
    type: "object",
    required: ["data"],
    properties: {
      data: {
        type: "array",
        items: {
          $ref: "#/components/schemas/DomainBid"
        }
      }
    }
  },
  "#/components/schemas/JettonVerificationType": {
    type: "string",
    enum: ["whitelist", "blacklist", "none"]
  },
  "#/components/schemas/JettonPreview": {
    type: "object",
    required: ["address", "name", "symbol", "decimals", "verification", "image"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      name: {
        type: "string"
      },
      symbol: {
        type: "string"
      },
      decimals: {
        type: "integer"
      },
      image: {
        type: "string"
      },
      verification: {
        $ref: "#/components/schemas/JettonVerificationType"
      },
      custom_payload_api_uri: {
        type: "string"
      },
      score: {
        type: "integer",
        format: "int32"
      }
    }
  },
  "#/components/schemas/JettonBalance": {
    type: "object",
    required: ["balance", "wallet_address", "jetton"],
    properties: {
      balance: {
        type: "string",
        "x-js-format": "bigint"
      },
      price: {
        $ref: "#/components/schemas/TokenRates"
      },
      wallet_address: {
        $ref: "#/components/schemas/AccountAddress"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      },
      extensions: {
        type: "array",
        items: {
          type: "string"
        }
      },
      lock: {
        type: "object",
        required: ["amount", "till"],
        properties: {
          amount: {
            type: "string",
            "x-js-format": "bigint"
          },
          till: {
            type: "integer",
            format: "int64"
          }
        }
      }
    }
  },
  "#/components/schemas/JettonsBalances": {
    type: "object",
    required: ["balances"],
    properties: {
      balances: {
        type: "array",
        items: {
          $ref: "#/components/schemas/JettonBalance"
        }
      }
    }
  },
  "#/components/schemas/Price": {
    type: "object",
    required: ["value", "token_name"],
    properties: {
      value: {
        type: "string",
        "x-js-format": "bigint"
      },
      token_name: {
        type: "string"
      }
    }
  },
  "#/components/schemas/ImagePreview": {
    type: "object",
    required: ["resolution", "url"],
    properties: {
      resolution: {
        type: "string"
      },
      url: {
        type: "string"
      }
    }
  },
  "#/components/schemas/NftApprovedBy": {
    type: "array",
    items: {
      type: "string",
      enum: ["getgems", "tonkeeper"]
    }
  },
  "#/components/schemas/TrustType": {
    type: "string",
    enum: ["whitelist", "graylist", "blacklist", "none"]
  },
  "#/components/schemas/Sale": {
    type: "object",
    required: ["address", "market", "price"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      market: {
        $ref: "#/components/schemas/AccountAddress"
      },
      owner: {
        $ref: "#/components/schemas/AccountAddress"
      },
      price: {
        $ref: "#/components/schemas/Price"
      }
    }
  },
  "#/components/schemas/NftItem": {
    type: "object",
    required: ["address", "index", "verified", "metadata", "approved_by", "trust"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      index: {
        type: "integer",
        format: "int64"
      },
      owner: {
        $ref: "#/components/schemas/AccountAddress"
      },
      collection: {
        type: "object",
        required: ["address", "name", "description"],
        properties: {
          address: {
            type: "string",
            format: "address"
          },
          name: {
            type: "string"
          },
          description: {
            type: "string"
          }
        }
      },
      verified: {
        type: "boolean"
      },
      metadata: {
        type: "object",
        additionalProperties: !0
      },
      sale: {
        $ref: "#/components/schemas/Sale"
      },
      previews: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ImagePreview"
        }
      },
      dns: {
        type: "string"
      },
      approved_by: {
        deprecated: !0,
        description: "please use trust field",
        $ref: "#/components/schemas/NftApprovedBy"
      },
      include_cnft: {
        type: "boolean"
      },
      trust: {
        $ref: "#/components/schemas/TrustType"
      }
    }
  },
  "#/components/schemas/NftItems": {
    type: "object",
    required: ["nft_items"],
    properties: {
      nft_items: {
        type: "array",
        items: {
          $ref: "#/components/schemas/NftItem"
        }
      }
    }
  },
  "#/components/schemas/Multisigs": {
    type: "object",
    required: ["multisigs"],
    properties: {
      multisigs: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Multisig"
        }
      }
    }
  },
  "#/components/schemas/Multisig": {
    type: "object",
    required: ["address", "seqno", "threshold", "signers", "proposers", "orders"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      seqno: {
        type: "integer",
        format: "int64"
      },
      threshold: {
        type: "integer",
        format: "int32"
      },
      signers: {
        type: "array",
        items: {
          type: "string",
          format: "address"
        }
      },
      proposers: {
        type: "array",
        items: {
          type: "string",
          format: "address"
        }
      },
      orders: {
        type: "array",
        items: {
          $ref: "#/components/schemas/MultisigOrder"
        }
      }
    }
  },
  "#/components/schemas/MultisigOrder": {
    type: "object",
    required: ["address", "order_seqno", "threshold", "sent_for_execution", "signers", "approvals_num", "expiration_date", "risk", "creation_date", "signed_by"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      order_seqno: {
        type: "integer",
        format: "int64"
      },
      threshold: {
        type: "integer",
        format: "int32"
      },
      sent_for_execution: {
        type: "boolean"
      },
      signers: {
        type: "array",
        items: {
          type: "string",
          format: "address"
        }
      },
      approvals_num: {
        type: "integer",
        format: "int32"
      },
      expiration_date: {
        type: "integer",
        format: "int64"
      },
      risk: {
        $ref: "#/components/schemas/Risk"
      },
      creation_date: {
        type: "integer",
        format: "int64"
      },
      signed_by: {
        type: "array",
        items: {
          type: "string",
          format: "address"
        }
      }
    }
  },
  "#/components/schemas/Refund": {
    type: "object",
    required: ["type", "origin"],
    properties: {
      type: {
        type: "string",
        enum: ["DNS.ton", "DNS.tg", "GetGems"]
      },
      origin: {
        type: "string"
      }
    }
  },
  "#/components/schemas/ValueFlow": {
    type: "object",
    required: ["account", "ton", "fees"],
    properties: {
      account: {
        $ref: "#/components/schemas/AccountAddress"
      },
      ton: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      jettons: {
        type: "array",
        items: {
          type: "object",
          required: ["account", "qty", "quantity", "jetton"],
          properties: {
            account: {
              $ref: "#/components/schemas/AccountAddress"
            },
            jetton: {
              $ref: "#/components/schemas/JettonPreview"
            },
            qty: {
              type: "string",
              "x-js-format": "bigint"
            },
            quantity: {
              type: "integer",
              deprecated: !0,
              format: "int64",
              "x-js-format": "bigint"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/Action": {
    type: "object",
    required: ["type", "status", "simple_preview", "base_transactions"],
    properties: {
      type: {
        type: "string",
        enum: ["TonTransfer", "ExtraCurrencyTransfer", "JettonTransfer", "JettonBurn", "JettonMint", "NftItemTransfer", "ContractDeploy", "Subscribe", "UnSubscribe", "AuctionBid", "NftPurchase", "DepositStake", "WithdrawStake", "WithdrawStakeRequest", "JettonSwap", "SmartContractExec", "ElectionsRecoverStake", "ElectionsDepositStake", "DomainRenew", "InscriptionTransfer", "InscriptionMint", "Unknown"]
      },
      status: {
        type: "string",
        enum: ["ok", "failed"]
      },
      TonTransfer: {
        $ref: "#/components/schemas/TonTransferAction"
      },
      ExtraCurrencyTransfer: {
        $ref: "#/components/schemas/ExtraCurrencyTransferAction"
      },
      ContractDeploy: {
        $ref: "#/components/schemas/ContractDeployAction"
      },
      JettonTransfer: {
        $ref: "#/components/schemas/JettonTransferAction"
      },
      JettonBurn: {
        $ref: "#/components/schemas/JettonBurnAction"
      },
      JettonMint: {
        $ref: "#/components/schemas/JettonMintAction"
      },
      NftItemTransfer: {
        $ref: "#/components/schemas/NftItemTransferAction"
      },
      Subscribe: {
        $ref: "#/components/schemas/SubscriptionAction"
      },
      UnSubscribe: {
        $ref: "#/components/schemas/UnSubscriptionAction"
      },
      AuctionBid: {
        $ref: "#/components/schemas/AuctionBidAction"
      },
      NftPurchase: {
        $ref: "#/components/schemas/NftPurchaseAction"
      },
      DepositStake: {
        $ref: "#/components/schemas/DepositStakeAction"
      },
      WithdrawStake: {
        $ref: "#/components/schemas/WithdrawStakeAction"
      },
      WithdrawStakeRequest: {
        $ref: "#/components/schemas/WithdrawStakeRequestAction"
      },
      ElectionsDepositStake: {
        $ref: "#/components/schemas/ElectionsDepositStakeAction"
      },
      ElectionsRecoverStake: {
        $ref: "#/components/schemas/ElectionsRecoverStakeAction"
      },
      JettonSwap: {
        $ref: "#/components/schemas/JettonSwapAction"
      },
      SmartContractExec: {
        $ref: "#/components/schemas/SmartContractAction"
      },
      DomainRenew: {
        $ref: "#/components/schemas/DomainRenewAction"
      },
      InscriptionTransfer: {
        $ref: "#/components/schemas/InscriptionTransferAction"
      },
      InscriptionMint: {
        $ref: "#/components/schemas/InscriptionMintAction"
      },
      simple_preview: {
        $ref: "#/components/schemas/ActionSimplePreview"
      },
      base_transactions: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/TonTransferAction": {
    type: "object",
    required: ["sender", "recipient", "amount"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      comment: {
        type: "string"
      },
      encrypted_comment: {
        $ref: "#/components/schemas/EncryptedComment"
      },
      refund: {
        $ref: "#/components/schemas/Refund"
      }
    }
  },
  "#/components/schemas/EcPreview": {
    type: "object",
    required: ["id", "symbol", "decimals", "image"],
    properties: {
      id: {
        type: "integer",
        format: "int32"
      },
      symbol: {
        type: "string"
      },
      decimals: {
        type: "integer"
      },
      image: {
        type: "string"
      }
    }
  },
  "#/components/schemas/ExtraCurrencyTransferAction": {
    type: "object",
    required: ["sender", "recipient", "amount", "currency"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      amount: {
        type: "string",
        "x-js-format": "bigint"
      },
      comment: {
        type: "string"
      },
      encrypted_comment: {
        $ref: "#/components/schemas/EncryptedComment"
      },
      currency: {
        $ref: "#/components/schemas/EcPreview"
      }
    }
  },
  "#/components/schemas/SmartContractAction": {
    type: "object",
    required: ["executor", "contract", "ton_attached", "operation"],
    properties: {
      executor: {
        $ref: "#/components/schemas/AccountAddress"
      },
      contract: {
        $ref: "#/components/schemas/AccountAddress"
      },
      ton_attached: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      operation: {
        type: "string"
      },
      payload: {
        type: "string"
      },
      refund: {
        $ref: "#/components/schemas/Refund"
      }
    }
  },
  "#/components/schemas/DomainRenewAction": {
    type: "object",
    required: ["domain", "contract_address", "renewer"],
    properties: {
      domain: {
        type: "string"
      },
      contract_address: {
        type: "string",
        format: "address"
      },
      renewer: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/InscriptionMintAction": {
    type: "object",
    required: ["type", "ticker", "recipient", "amount", "decimals"],
    properties: {
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      amount: {
        type: "string",
        "x-js-format": "bigint"
      },
      type: {
        type: "string",
        enum: ["ton20", "gram20"]
      },
      ticker: {
        type: "string"
      },
      decimals: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/InscriptionTransferAction": {
    type: "object",
    required: ["sender", "recipient", "amount", "type", "ticker", "decimals"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      amount: {
        type: "string",
        "x-js-format": "bigint"
      },
      comment: {
        type: "string"
      },
      type: {
        type: "string",
        enum: ["ton20", "gram20"]
      },
      ticker: {
        type: "string"
      },
      decimals: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/NftItemTransferAction": {
    type: "object",
    required: ["nft"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      nft: {
        type: "string"
      },
      comment: {
        type: "string"
      },
      encrypted_comment: {
        $ref: "#/components/schemas/EncryptedComment"
      },
      payload: {
        type: "string"
      },
      refund: {
        $ref: "#/components/schemas/Refund"
      }
    }
  },
  "#/components/schemas/JettonTransferAction": {
    type: "object",
    required: ["amount", "jetton", "senders_wallet", "recipients_wallet"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      senders_wallet: {
        type: "string",
        format: "address"
      },
      recipients_wallet: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "string",
        "x-js-format": "bigint"
      },
      comment: {
        type: "string"
      },
      encrypted_comment: {
        $ref: "#/components/schemas/EncryptedComment"
      },
      refund: {
        $ref: "#/components/schemas/Refund"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/JettonBurnAction": {
    type: "object",
    required: ["amount", "jetton", "sender", "senders_wallet"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      senders_wallet: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "string",
        "x-js-format": "bigint"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/JettonMintAction": {
    type: "object",
    required: ["amount", "jetton", "recipient", "recipients_wallet"],
    properties: {
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipients_wallet: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "string",
        "x-js-format": "bigint"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/ContractDeployAction": {
    type: "object",
    required: ["address", "interfaces"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      interfaces: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/SubscriptionAction": {
    type: "object",
    required: ["subscriber", "subscription", "beneficiary", "amount", "initial"],
    properties: {
      subscriber: {
        $ref: "#/components/schemas/AccountAddress"
      },
      subscription: {
        type: "string",
        format: "address"
      },
      beneficiary: {
        $ref: "#/components/schemas/AccountAddress"
      },
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      initial: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/UnSubscriptionAction": {
    type: "object",
    required: ["subscriber", "subscription", "beneficiary"],
    properties: {
      subscriber: {
        $ref: "#/components/schemas/AccountAddress"
      },
      subscription: {
        type: "string",
        format: "address"
      },
      beneficiary: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/AuctionBidAction": {
    type: "object",
    required: ["amount", "bidder", "auction", "auction_type"],
    properties: {
      auction_type: {
        type: "string",
        enum: ["DNS.ton", "DNS.tg", "NUMBER.tg", "getgems"]
      },
      amount: {
        $ref: "#/components/schemas/Price"
      },
      nft: {
        $ref: "#/components/schemas/NftItem"
      },
      bidder: {
        $ref: "#/components/schemas/AccountAddress"
      },
      auction: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/DepositStakeAction": {
    type: "object",
    required: ["amount", "staker", "pool", "implementation"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      },
      pool: {
        $ref: "#/components/schemas/AccountAddress"
      },
      implementation: {
        $ref: "#/components/schemas/PoolImplementationType"
      }
    }
  },
  "#/components/schemas/WithdrawStakeAction": {
    type: "object",
    required: ["amount", "staker", "pool", "implementation"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      },
      pool: {
        $ref: "#/components/schemas/AccountAddress"
      },
      implementation: {
        $ref: "#/components/schemas/PoolImplementationType"
      }
    }
  },
  "#/components/schemas/WithdrawStakeRequestAction": {
    type: "object",
    required: ["staker", "pool", "implementation"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      },
      pool: {
        $ref: "#/components/schemas/AccountAddress"
      },
      implementation: {
        $ref: "#/components/schemas/PoolImplementationType"
      }
    }
  },
  "#/components/schemas/ElectionsRecoverStakeAction": {
    type: "object",
    required: ["amount", "staker"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/ElectionsDepositStakeAction": {
    type: "object",
    required: ["amount", "staker"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/JettonSwapAction": {
    type: "object",
    required: ["dex", "amount_in", "amount_out", "user_wallet", "router"],
    properties: {
      dex: {
        type: "string",
        enum: ["stonfi", "dedust", "megatonfi"]
      },
      amount_in: {
        type: "string",
        "x-js-format": "bigint"
      },
      amount_out: {
        type: "string",
        "x-js-format": "bigint"
      },
      ton_in: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      ton_out: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      user_wallet: {
        $ref: "#/components/schemas/AccountAddress"
      },
      router: {
        $ref: "#/components/schemas/AccountAddress"
      },
      jetton_master_in: {
        $ref: "#/components/schemas/JettonPreview"
      },
      jetton_master_out: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/NftPurchaseAction": {
    type: "object",
    required: ["amount", "seller", "buyer", "auction_type", "nft"],
    properties: {
      auction_type: {
        type: "string",
        enum: ["DNS.ton", "DNS.tg", "NUMBER.tg", "getgems"]
      },
      amount: {
        $ref: "#/components/schemas/Price"
      },
      nft: {
        $ref: "#/components/schemas/NftItem"
      },
      seller: {
        $ref: "#/components/schemas/AccountAddress"
      },
      buyer: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/ActionSimplePreview": {
    type: "object",
    required: ["name", "description", "accounts"],
    properties: {
      name: {
        type: "string"
      },
      description: {
        type: "string"
      },
      action_image: {
        type: "string"
      },
      value: {
        type: "string"
      },
      value_image: {
        type: "string"
      },
      accounts: {
        type: "array",
        items: {
          $ref: "#/components/schemas/AccountAddress"
        }
      }
    }
  },
  "#/components/schemas/AccountEvent": {
    type: "object",
    required: ["event_id", "timestamp", "actions", "account", "is_scam", "lt", "in_progress", "extra"],
    properties: {
      event_id: {
        type: "string"
      },
      account: {
        $ref: "#/components/schemas/AccountAddress"
      },
      timestamp: {
        type: "integer",
        format: "int64"
      },
      actions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Action"
        }
      },
      is_scam: {
        type: "boolean"
      },
      lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      in_progress: {
        type: "boolean"
      },
      extra: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/AccountEvents": {
    type: "object",
    required: ["events", "next_from"],
    properties: {
      events: {
        type: "array",
        items: {
          $ref: "#/components/schemas/AccountEvent"
        }
      },
      next_from: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/TraceID": {
    type: "object",
    required: ["id", "utime"],
    properties: {
      id: {
        type: "string"
      },
      utime: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/TraceIDs": {
    type: "object",
    required: ["traces"],
    properties: {
      traces: {
        type: "array",
        items: {
          $ref: "#/components/schemas/TraceID"
        }
      }
    }
  },
  "#/components/schemas/ApyHistory": {
    type: "object",
    required: ["apy", "time"],
    properties: {
      apy: {
        type: "number"
      },
      time: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/Subscription": {
    type: "object",
    required: ["address", "wallet_address", "beneficiary_address", "amount", "period", "start_time", "timeout", "last_payment_time", "last_request_time", "subscription_id", "failed_attempts"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      wallet_address: {
        type: "string",
        format: "address"
      },
      beneficiary_address: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "integer",
        format: "int64"
      },
      period: {
        type: "integer",
        format: "int64"
      },
      start_time: {
        type: "integer",
        format: "int64"
      },
      timeout: {
        type: "integer",
        format: "int64"
      },
      last_payment_time: {
        type: "integer",
        format: "int64"
      },
      last_request_time: {
        type: "integer",
        format: "int64"
      },
      subscription_id: {
        type: "integer",
        format: "int64"
      },
      failed_attempts: {
        type: "integer",
        format: "int32"
      }
    }
  },
  "#/components/schemas/Subscriptions": {
    type: "object",
    required: ["subscriptions"],
    properties: {
      subscriptions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Subscription"
        }
      }
    }
  },
  "#/components/schemas/Auction": {
    type: "object",
    required: ["domain", "owner", "price", "bids", "date"],
    properties: {
      domain: {
        type: "string"
      },
      owner: {
        type: "string",
        format: "address"
      },
      price: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      bids: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      date: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/Auctions": {
    type: "object",
    required: ["data", "total"],
    properties: {
      data: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Auction"
        }
      },
      total: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/WalletDNS": {
    type: "object",
    required: ["address", "is_wallet", "has_method_pubkey", "has_method_seqno", "names", "account"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      account: {
        $ref: "#/components/schemas/AccountAddress"
      },
      is_wallet: {
        type: "boolean"
      },
      has_method_pubkey: {
        type: "boolean"
      },
      has_method_seqno: {
        type: "boolean"
      },
      names: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/DomainInfo": {
    type: "object",
    required: ["name"],
    properties: {
      name: {
        type: "string"
      },
      expiring_at: {
        type: "integer",
        format: "int64"
      },
      item: {
        $ref: "#/components/schemas/NftItem"
      }
    }
  },
  "#/components/schemas/DnsRecord": {
    type: "object",
    required: ["sites"],
    properties: {
      wallet: {
        $ref: "#/components/schemas/WalletDNS"
      },
      next_resolver: {
        type: "string",
        format: "address"
      },
      sites: {
        type: "array",
        items: {
          type: "string"
        }
      },
      storage: {
        type: "string"
      }
    }
  },
  "#/components/schemas/NftCollection": {
    type: "object",
    required: ["address", "next_item_index", "raw_collection_content", "approved_by"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      next_item_index: {
        type: "integer",
        format: "int64"
      },
      owner: {
        $ref: "#/components/schemas/AccountAddress"
      },
      raw_collection_content: {
        type: "string",
        format: "cell"
      },
      metadata: {
        type: "object",
        additionalProperties: !0
      },
      previews: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ImagePreview"
        }
      },
      approved_by: {
        $ref: "#/components/schemas/NftApprovedBy"
      }
    }
  },
  "#/components/schemas/NftCollections": {
    type: "object",
    required: ["nft_collections"],
    properties: {
      nft_collections: {
        type: "array",
        items: {
          $ref: "#/components/schemas/NftCollection"
        }
      }
    }
  },
  "#/components/schemas/Trace": {
    type: "object",
    required: ["transaction", "interfaces"],
    properties: {
      transaction: {
        $ref: "#/components/schemas/Transaction"
      },
      interfaces: {
        type: "array",
        items: {
          type: "string"
        }
      },
      children: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Trace"
        }
      },
      emulated: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/MessageConsequences": {
    type: "object",
    required: ["trace", "risk", "event"],
    properties: {
      trace: {
        $ref: "#/components/schemas/Trace"
      },
      risk: {
        $ref: "#/components/schemas/Risk"
      },
      event: {
        $ref: "#/components/schemas/AccountEvent"
      }
    }
  },
  "#/components/schemas/Risk": {
    type: "object",
    required: ["transfer_all_remaining_balance", "ton", "jettons", "nfts"],
    properties: {
      transfer_all_remaining_balance: {
        type: "boolean"
      },
      ton: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      jettons: {
        type: "array",
        items: {
          $ref: "#/components/schemas/JettonQuantity"
        }
      },
      nfts: {
        type: "array",
        items: {
          $ref: "#/components/schemas/NftItem"
        }
      }
    }
  },
  "#/components/schemas/JettonQuantity": {
    type: "object",
    required: ["quantity", "wallet_address", "jetton"],
    properties: {
      quantity: {
        type: "string",
        "x-js-format": "bigint"
      },
      wallet_address: {
        $ref: "#/components/schemas/AccountAddress"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/DecodedMessage": {
    type: "object",
    required: ["destination", "destination_wallet_version"],
    properties: {
      destination: {
        $ref: "#/components/schemas/AccountAddress"
      },
      destination_wallet_version: {
        type: "string"
      },
      ext_in_msg_decoded: {
        type: "object",
        properties: {
          wallet_v3: {
            type: "object",
            required: ["subwallet_id", "valid_until", "seqno", "op", "raw_messages"],
            properties: {
              subwallet_id: {
                type: "integer",
                format: "int64"
              },
              valid_until: {
                type: "integer",
                format: "int64"
              },
              seqno: {
                type: "integer",
                format: "int64"
              },
              raw_messages: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/DecodedRawMessage"
                }
              }
            }
          },
          wallet_v4: {
            type: "object",
            required: ["subwallet_id", "valid_until", "seqno", "op", "raw_messages"],
            properties: {
              subwallet_id: {
                type: "integer",
                format: "int64"
              },
              valid_until: {
                type: "integer",
                format: "int64"
              },
              seqno: {
                type: "integer",
                format: "int64"
              },
              op: {
                type: "integer",
                format: "int32"
              },
              raw_messages: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/DecodedRawMessage"
                }
              }
            }
          },
          wallet_v5: {
            type: "object",
            required: ["raw_messages", "valid_until"],
            properties: {
              valid_until: {
                type: "integer",
                format: "int64"
              },
              raw_messages: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/DecodedRawMessage"
                }
              }
            }
          },
          wallet_highload_v2: {
            type: "object",
            required: ["subwallet_id", "bounded_query_id", "raw_messages"],
            properties: {
              subwallet_id: {
                type: "integer",
                format: "int64"
              },
              bounded_query_id: {
                type: "string"
              },
              raw_messages: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/DecodedRawMessage"
                }
              }
            }
          }
        }
      }
    }
  },
  "#/components/schemas/DecodedRawMessage": {
    type: "object",
    required: ["message", "mode"],
    properties: {
      message: {
        type: "object",
        required: ["boc"],
        properties: {
          boc: {
            type: "string",
            format: "cell"
          },
          decoded_op_name: {
            type: "string"
          },
          op_code: {
            type: "string",
            "x-js-format": "bigint"
          },
          decoded_body: {}
        }
      },
      mode: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/Event": {
    type: "object",
    required: ["event_id", "timestamp", "actions", "value_flow", "is_scam", "lt", "in_progress"],
    properties: {
      event_id: {
        type: "string"
      },
      timestamp: {
        type: "integer",
        format: "int64"
      },
      actions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Action"
        }
      },
      value_flow: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ValueFlow"
        }
      },
      is_scam: {
        type: "boolean"
      },
      lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      in_progress: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/JettonMetadata": {
    type: "object",
    required: ["address", "name", "symbol", "decimals"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      name: {
        type: "string"
      },
      symbol: {
        type: "string"
      },
      decimals: {
        type: "string"
      },
      image: {
        type: "string"
      },
      description: {
        type: "string"
      },
      social: {
        type: "array",
        items: {
          type: "string"
        }
      },
      websites: {
        type: "array",
        items: {
          type: "string"
        }
      },
      catalogs: {
        type: "array",
        items: {
          type: "string"
        }
      },
      custom_payload_api_uri: {
        type: "string"
      }
    }
  },
  "#/components/schemas/InscriptionBalances": {
    type: "object",
    required: ["inscriptions"],
    properties: {
      inscriptions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/InscriptionBalance"
        }
      }
    }
  },
  "#/components/schemas/InscriptionBalance": {
    type: "object",
    required: ["type", "ticker", "balance", "decimals"],
    properties: {
      type: {
        type: "string",
        enum: ["ton20", "gram20"]
      },
      ticker: {
        type: "string"
      },
      balance: {
        type: "string",
        "x-js-format": "bigint"
      },
      decimals: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/Jettons": {
    type: "object",
    required: ["jettons"],
    properties: {
      jettons: {
        type: "array",
        items: {
          $ref: "#/components/schemas/JettonInfo"
        }
      }
    }
  },
  "#/components/schemas/JettonInfo": {
    type: "object",
    required: ["mintable", "total_supply", "metadata", "verification", "holders_count", "preview"],
    properties: {
      mintable: {
        type: "boolean"
      },
      total_supply: {
        type: "string",
        "x-js-format": "bigint"
      },
      admin: {
        $ref: "#/components/schemas/AccountAddress"
      },
      metadata: {
        $ref: "#/components/schemas/JettonMetadata"
      },
      preview: {
        type: "string"
      },
      verification: {
        $ref: "#/components/schemas/JettonVerificationType"
      },
      holders_count: {
        type: "integer",
        format: "int32"
      },
      score: {
        type: "integer",
        format: "int32"
      }
    }
  },
  "#/components/schemas/JettonHolders": {
    type: "object",
    required: ["addresses", "total"],
    properties: {
      addresses: {
        type: "array",
        items: {
          type: "object",
          required: ["address", "owner", "balance"],
          properties: {
            address: {
              type: "string",
              format: "address"
            },
            owner: {
              $ref: "#/components/schemas/AccountAddress"
            },
            balance: {
              type: "string",
              "x-js-format": "bigint"
            }
          }
        }
      },
      total: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/JettonTransferPayload": {
    type: "object",
    required: ["payload"],
    properties: {
      custom_payload: {
        type: "string"
      },
      state_init: {
        type: "string"
      }
    }
  },
  "#/components/schemas/AccountStaking": {
    type: "object",
    required: ["pools"],
    properties: {
      pools: {
        type: "array",
        items: {
          $ref: "#/components/schemas/AccountStakingInfo"
        }
      }
    }
  },
  "#/components/schemas/AccountStakingInfo": {
    type: "object",
    required: ["pool", "amount", "pending_deposit", "pending_withdraw", "ready_withdraw"],
    properties: {
      pool: {
        type: "string"
      },
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      pending_deposit: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      pending_withdraw: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      ready_withdraw: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      }
    }
  },
  "#/components/schemas/PoolInfo": {
    type: "object",
    required: ["address", "total_amount", "implementation", "apy", "name", "min_stake", "cycle_start", "cycle_end", "verified", "current_nominators", "max_nominators", "nominators_stake", "validator_stake"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      name: {
        type: "string"
      },
      total_amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      implementation: {
        $ref: "#/components/schemas/PoolImplementationType"
      },
      apy: {
        type: "number"
      },
      min_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      cycle_start: {
        type: "integer",
        format: "int64"
      },
      cycle_end: {
        type: "integer",
        format: "int64"
      },
      verified: {
        type: "boolean"
      },
      current_nominators: {
        type: "integer"
      },
      max_nominators: {
        type: "integer"
      },
      liquid_jetton_master: {
        type: "string",
        format: "address"
      },
      nominators_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      validator_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      cycle_length: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/PoolImplementation": {
    type: "object",
    required: ["name", "description", "url", "socials"],
    properties: {
      name: {
        type: "string"
      },
      description: {
        type: "string"
      },
      url: {
        type: "string"
      },
      socials: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/StorageProvider": {
    type: "object",
    required: ["address", "accept_new_contracts", "rate_per_mb_day", "max_span", "minimal_file_size", "maximal_file_size"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      accept_new_contracts: {
        type: "boolean"
      },
      rate_per_mb_day: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      max_span: {
        type: "integer",
        format: "int64"
      },
      minimal_file_size: {
        type: "integer",
        format: "int64"
      },
      maximal_file_size: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/FoundAccounts": {
    type: "object",
    required: ["addresses"],
    properties: {
      addresses: {
        type: "array",
        items: {
          type: "object",
          required: ["address", "name", "preview"],
          properties: {
            address: {
              type: "string",
              format: "address"
            },
            name: {
              type: "string"
            },
            preview: {
              type: "string"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/DnsExpiring": {
    type: "object",
    required: ["items"],
    properties: {
      items: {
        type: "array",
        items: {
          type: "object",
          required: ["expiring_at", "name"],
          properties: {
            expiring_at: {
              type: "integer",
              format: "int64"
            },
            name: {
              type: "string"
            },
            dns_item: {
              $ref: "#/components/schemas/NftItem"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/ChartPoints": {
    type: "array",
    prefixItems: [{
      type: "integer",
      format: "int64",
      description: "Unix timestamp of the data point"
    }, {
      type: "number",
      description: "Decimal price of the token in the requested currency"
    }],
    additionalItems: !1,
    items: !1
  },
  "#/components/schemas/AccountInfoByStateInit": {
    type: "object",
    required: ["public_key", "address"],
    properties: {
      public_key: {
        type: "string"
      },
      address: {
        type: "string",
        format: "address"
      }
    }
  },
  "#/components/schemas/Seqno": {
    type: "object",
    required: ["seqno"],
    properties: {
      seqno: {
        type: "integer",
        format: "int32"
      }
    }
  },
  "#/components/schemas/BlockRaw": {
    type: "object",
    required: ["workchain", "shard", "seqno", "root_hash", "file_hash"],
    properties: {
      workchain: {
        type: "integer",
        format: "int32"
      },
      shard: {
        type: "string"
      },
      seqno: {
        type: "integer",
        format: "int32"
      },
      root_hash: {
        type: "string"
      },
      file_hash: {
        type: "string"
      }
    }
  },
  "#/components/schemas/InitStateRaw": {
    type: "object",
    required: ["workchain", "root_hash", "file_hash"],
    properties: {
      workchain: {
        type: "integer",
        format: "int32"
      },
      root_hash: {
        type: "string"
      },
      file_hash: {
        type: "string"
      }
    }
  },
  "#/components/schemas/EncryptedComment": {
    type: "object",
    required: ["encryption_type", "cipher_text"],
    properties: {
      encryption_type: {
        type: "string"
      },
      cipher_text: {
        type: "string"
      }
    }
  },
  "#/components/schemas/BlockchainAccountInspect": {
    type: "object",
    required: ["code", "code_hash", "methods", "compiler"],
    properties: {
      code: {
        type: "string",
        format: "cell"
      },
      code_hash: {
        type: "string"
      },
      methods: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Method"
        }
      },
      compiler: {
        type: "string",
        enum: ["func", "fift", "tact"]
      },
      source: {
        $ref: "#/components/schemas/Source"
      }
    }
  },
  "#/components/schemas/PoolImplementationType": {
    type: "string",
    enum: ["whales", "tf", "liquidTF"]
  },
  "#/components/schemas/TokenRates": {
    type: "object",
    properties: {
      prices: {
        type: "object",
        additionalProperties: {
          type: "number"
        }
      },
      diff_24h: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      },
      diff_7d: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      },
      diff_30d: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/MarketTonRates": {
    type: "object",
    required: ["market", "usd_price", "last_date_update"],
    properties: {
      market: {
        type: "string"
      },
      usd_price: {
        type: "number"
      },
      last_date_update: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/ExtraCurrency": {
    type: "object",
    required: ["amount", "preview"],
    properties: {
      amount: {
        type: "string",
        "x-js-format": "bigint"
      },
      preview: {
        $ref: "#/components/schemas/EcPreview"
      }
    }
  },
  "#/components/schemas/SourceFile": {
    type: "object",
    required: ["name", "content", "is_entrypoint", "is_std_lib", "include_in_command"],
    properties: {
      name: {
        type: "string"
      },
      content: {
        type: "string"
      },
      is_entrypoint: {
        type: "boolean"
      },
      is_std_lib: {
        type: "boolean"
      },
      include_in_command: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/Source": {
    type: "object",
    required: ["files"],
    properties: {
      files: {
        type: "array",
        items: {
          $ref: "#/components/schemas/SourceFile"
        }
      }
    }
  },
  "#/components/schemas/Method": {
    type: "object",
    required: ["id", "method"],
    properties: {
      id: {
        type: "integer",
        format: "int64"
      },
      method: {
        type: "string"
      }
    }
  }
};

function Gm(r) {
  return r.replace(/(_\w)/g, s => {
    var e;
    return ((e = s[1]) == null ? void 0 : e.toUpperCase()) ?? ""
  })
}

function Mm(r) {
  return r.replace(/([A-Z])/g, s => `_${s.toLowerCase()}`)
}

function fr(r) {
  return Gr.Cell.fromHex(r)
}

function Um(r) {
  return r.startsWith("-") ? BigInt(r.slice(1)) * -1n : BigInt(r)
}
async function p(r, s) {
  return await r.then(e => $t(e, s)).catch(async e => {
    let t;
    if (e && typeof e == "object" && "json" in e && typeof e.json == "function") try {
      const n = await e.json();
      t = typeof n == "string" ? n : (n == null ? void 0 : n.error) || "Unknown error"
    } catch (n) {
      n instanceof Error ? t = `Failed to parse error response: ${n.message}` : t = "Failed to parse error response: Unknown parsing error"
    } else e instanceof Error ? t = e.message || "Unknown error without JSON" : t = "Unknown error occurred";
    throw new Error(t, {
      cause: e
    })
  })
}

function $t(r, s) {
  const e = s && s.$ref,
    t = e ? ha[e] : s;
  if (Array.isArray(r)) {
    const n = t && t.items;
    return r.map(o => $t(o, n))
  } else if (t) {
    if (t.type === "string") {
      if (t.format === "address") return Gr.Address.parse(r);
      if (t.format === "cell") return r && fr(r);
      if (t["x-js-format"] === "bigint") return BigInt(r);
      if (t.format === "cell-base64") return r && Gr.Cell.fromBase64(r)
    }
    if (t.type === "integer") return t["x-js-format"] === "bigint" ? BigInt(r) : Number(r);
    if (t.type === "object" && t.format === "tuple-item") switch (r.type) {
      case "tuple":
        const n = t.properties.tuple.items;
        return {
          type: "tuple", items: r.tuple.map(o => $t(o, n))
        };
      case "num":
        return {
          type: "int", value: Um(r.num)
        };
      case "cell":
        return {
          type: "cell", cell: fr(r.cell)
        };
      case "slice":
        return {
          type: "slice", slice: fr(r.slice)
        };
      case "null":
        return {
          type: "null"
        };
      case "nan":
        return {
          type: "nan"
        };
      default:
        throw new Error(`Unknown tuple item type: ${r.type}`)
    }
  }
  return r !== null && typeof r == "object" ? Object.keys(r).reduce((n, o) => {
    const i = (t == null ? void 0 : t.properties) && t.properties[o],
      c = Gm(o);
    return n[c] = $t(r[o], i), n
  }, {}) : r
}

function J(r, s) {
  const e = s && s.$ref,
    t = e ? ha[e] : s;
  if (Array.isArray(r)) {
    const n = t && t.items;
    return r.map(o => J(o, n))
  } else if (t && t.type === "string") {
    if (t.format === "address") return r.toRawString();
    if (t.format === "cell") return r.toBoc().toString("hex");
    if (t.format === "cell-base64") return r.toBoc().toString("base64");
    if (t["x-js-format"] === "bigint") return r.toString()
  }
  return r !== null && typeof r == "object" ? Object.keys(r).reduce((n, o) => {
    const i = (t == null ? void 0 : t.properties) && t.properties[o],
      c = Mm(o);
    return n[c] = J(r[o], i), n
  }, {}) : r
}
class Jm {
  constructor(s = {}) {
    u(this, "http");
    u(this, "utilities", {
      getOpenapiJson: (s = {}) => {
        const e = this.http.request({
          path: "/v2/openapi.json",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {})
      },
      getOpenapiYml: (s = {}) => {
        const e = this.http.request({
          path: "/v2/openapi.yml",
          method: "GET",
          ...s
        });
        return p(e)
      },
      status: (s = {}) => {
        const e = this.http.request({
          path: "/v2/status",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {
          $ref: "#/components/schemas/ServiceStatus"
        })
      },
      addressParse: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/address/${t}/parse`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          type: "object",
          required: ["raw_form", "bounceable", "non_bounceable", "given_type", "test_only"],
          properties: {
            raw_form: {
              type: "string",
              format: "address"
            },
            bounceable: {
              required: ["b64", "b64url"],
              type: "object",
              properties: {
                b64: {
                  type: "string"
                },
                b64url: {
                  type: "string"
                }
              }
            },
            non_bounceable: {
              required: ["b64", "b64url"],
              type: "object",
              properties: {
                b64: {
                  type: "string"
                },
                b64url: {
                  type: "string"
                }
              }
            },
            given_type: {
              type: "string"
            },
            test_only: {
              type: "boolean"
            }
          }
        })
      }
    });
    u(this, "blockchain", {
      getReducedBlockchainBlocks: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/blockchain/reduced/blocks",
          method: "GET",
          query: s,
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/ReducedBlocks"
        })
      },
      getBlockchainBlock: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/blockchain/blocks/${s}`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/BlockchainBlock"
        })
      },
      getBlockchainMasterchainShards: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/blockchain/masterchain/${s}/shards`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/BlockchainBlockShards"
        })
      },
      getBlockchainMasterchainBlocks: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/blockchain/masterchain/${s}/blocks`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/BlockchainBlocks"
        })
      },
      getBlockchainMasterchainTransactions: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/blockchain/masterchain/${s}/transactions`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/Transactions"
        })
      },
      getBlockchainConfigFromBlock: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/blockchain/masterchain/${s}/config`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/BlockchainConfig"
        })
      },
      getRawBlockchainConfigFromBlock: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/blockchain/masterchain/${s}/config/raw`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/RawBlockchainConfig"
        })
      },
      getBlockchainBlockTransactions: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/blockchain/blocks/${s}/transactions`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/Transactions"
        })
      },
      getBlockchainTransaction: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/blockchain/transactions/${s}`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/Transaction"
        })
      },
      getBlockchainTransactionByMessageHash: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/blockchain/messages/${s}/transaction`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/Transaction"
        })
      },
      getBlockchainValidators: (s = {}) => {
        const e = this.http.request({
          path: "/v2/blockchain/validators",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {
          $ref: "#/components/schemas/Validators"
        })
      },
      getBlockchainMasterchainHead: (s = {}) => {
        const e = this.http.request({
          path: "/v2/blockchain/masterchain-head",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {
          $ref: "#/components/schemas/BlockchainBlock"
        })
      },
      getBlockchainRawAccount: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/blockchain/accounts/${t}`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          $ref: "#/components/schemas/BlockchainRawAccount"
        })
      },
      getBlockchainAccountTransactions: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/blockchain/accounts/${n}/transactions`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/Transactions"
        })
      },
      execGetMethodForBlockchainAccount: (s, e, t, n = {}) => {
        const o = s.toRawString(),
          i = this.http.request({
            path: `/v2/blockchain/accounts/${o}/methods/${e}`,
            method: "GET",
            query: t,
            format: "json",
            ...n
          });
        return p(i, {
          $ref: "#/components/schemas/MethodExecutionResult"
        })
      },
      sendBlockchainMessage: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/blockchain/message",
          method: "POST",
          body: J(s, {
            type: "object",
            properties: {
              boc: {
                type: "string",
                format: "cell"
              },
              batch: {
                type: "array",
                maxItems: 10,
                items: {
                  type: "string",
                  format: "cell"
                }
              },
              meta: {
                type: "object",
                additionalProperties: {
                  type: "string"
                }
              }
            }
          }),
          ...e
        });
        return p(t)
      },
      getBlockchainConfig: (s = {}) => {
        const e = this.http.request({
          path: "/v2/blockchain/config",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {
          $ref: "#/components/schemas/BlockchainConfig"
        })
      },
      getRawBlockchainConfig: (s = {}) => {
        const e = this.http.request({
          path: "/v2/blockchain/config/raw",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {
          $ref: "#/components/schemas/RawBlockchainConfig"
        })
      },
      blockchainAccountInspect: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/blockchain/accounts/${t}/inspect`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          $ref: "#/components/schemas/BlockchainAccountInspect"
        })
      },
      status: (s = {}) => {
        const e = this.http.request({
          path: "/v2/status",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {
          $ref: "#/components/schemas/ServiceStatus"
        })
      }
    });
    u(this, "accounts", {
      getAccounts: (s, e, t = {}) => {
        const n = this.http.request({
          path: "/v2/accounts/_bulk",
          method: "POST",
          query: e,
          body: J(s, {
            type: "object",
            required: ["accountIds"],
            properties: {
              accountIds: {
                type: "array",
                items: {
                  type: "string",
                  format: "address"
                }
              }
            }
          }),
          format: "json",
          ...t
        });
        return p(n, {
          $ref: "#/components/schemas/Accounts"
        })
      },
      getAccount: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/accounts/${t}`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          $ref: "#/components/schemas/Account"
        })
      },
      accountDnsBackResolve: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/accounts/${t}/dns/backresolve`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          $ref: "#/components/schemas/DomainNames"
        })
      },
      getAccountJettonsBalances: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/accounts/${n}/jettons`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/JettonsBalances"
        })
      },
      getAccountJettonBalance: (s, e, t, n = {}) => {
        const o = s.toRawString(),
          i = e.toRawString(),
          c = this.http.request({
            path: `/v2/accounts/${o}/jettons/${i}`,
            method: "GET",
            query: t,
            format: "json",
            ...n
          });
        return p(c, {
          $ref: "#/components/schemas/JettonBalance"
        })
      },
      getAccountJettonsHistory: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/accounts/${n}/jettons/history`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountJettonHistoryById: (s, e, t, n = {}) => {
        const o = s.toRawString(),
          i = e.toRawString(),
          c = this.http.request({
            path: `/v2/accounts/${o}/jettons/${i}/history`,
            method: "GET",
            query: t,
            format: "json",
            ...n
          });
        return p(c, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountNftItems: (s, e, t = {}) => {
        var i;
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/accounts/${n}/nfts`,
            method: "GET",
            query: e && {
              ...e,
              collection: (i = e.collection) == null ? void 0 : i.toRawString()
            },
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getAccountEvents: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/accounts/${n}/events`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountEvent: (s, e, t, n = {}) => {
        const o = s.toRawString(),
          i = this.http.request({
            path: `/v2/accounts/${o}/events/${e}`,
            method: "GET",
            query: t,
            format: "json",
            ...n
          });
        return p(i, {
          $ref: "#/components/schemas/AccountEvent"
        })
      },
      getAccountTraces: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/accounts/${n}/traces`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/TraceIDs"
        })
      },
      getAccountSubscriptions: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/accounts/${t}/subscriptions`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          $ref: "#/components/schemas/Subscriptions"
        })
      },
      reindexAccount: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/accounts/${t}/reindex`,
            method: "POST",
            ...e
          });
        return p(n)
      },
      searchAccounts: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/accounts/search",
          method: "GET",
          query: s,
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/FoundAccounts"
        })
      },
      getAccountDnsExpiring: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/accounts/${n}/dns/expiring`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/DnsExpiring"
        })
      },
      getAccountPublicKey: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/accounts/${t}/publickey`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          type: "object",
          required: ["public_key"],
          properties: {
            public_key: {
              type: "string"
            }
          }
        })
      },
      getAccountMultisigs: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/accounts/${t}/multisigs`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          $ref: "#/components/schemas/Multisigs"
        })
      },
      getAccountDiff: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/accounts/${n}/diff`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          type: "object",
          required: ["balance_change"],
          properties: {
            balance_change: {
              type: "integer",
              format: "int64"
            }
          }
        })
      },
      addressParse: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/address/${t}/parse`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          type: "object",
          required: ["raw_form", "bounceable", "non_bounceable", "given_type", "test_only"],
          properties: {
            raw_form: {
              type: "string",
              format: "address"
            },
            bounceable: {
              required: ["b64", "b64url"],
              type: "object",
              properties: {
                b64: {
                  type: "string"
                },
                b64url: {
                  type: "string"
                }
              }
            },
            non_bounceable: {
              required: ["b64", "b64url"],
              type: "object",
              properties: {
                b64: {
                  type: "string"
                },
                b64url: {
                  type: "string"
                }
              }
            },
            given_type: {
              type: "string"
            },
            test_only: {
              type: "boolean"
            }
          }
        })
      }
    });
    u(this, "nft", {
      getAccountNftHistory: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/accounts/${n}/nfts/history`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getNftCollections: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/nfts/collections",
          method: "GET",
          query: s,
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/NftCollections"
        })
      },
      getNftCollection: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/nfts/collections/${t}`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          $ref: "#/components/schemas/NftCollection"
        })
      },
      getNftCollectionItemsByAddresses: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/nfts/collections/_bulk",
          method: "POST",
          body: J(s, {
            type: "object",
            required: ["accountIds"],
            properties: {
              accountIds: {
                type: "array",
                items: {
                  type: "string",
                  format: "address"
                }
              }
            }
          }),
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/NftCollections"
        })
      },
      getItemsFromCollection: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/nfts/collections/${n}/items`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getNftItemsByAddresses: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/nfts/_bulk",
          method: "POST",
          body: J(s, {
            type: "object",
            required: ["accountIds"],
            properties: {
              accountIds: {
                type: "array",
                items: {
                  type: "string",
                  format: "address"
                }
              }
            }
          }),
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getNftItemByAddress: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/nfts/${t}`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          $ref: "#/components/schemas/NftItem"
        })
      },
      getNftHistoryById: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/nfts/${n}/history`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      }
    });
    u(this, "dns", {
      getDnsInfo: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/dns/${s}`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/DomainInfo"
        })
      },
      dnsResolve: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/dns/${s}/resolve`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/DnsRecord"
        })
      },
      getDomainBids: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/dns/${s}/bids`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/DomainBids"
        })
      },
      getAllAuctions: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/dns/auctions",
          method: "GET",
          query: s,
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/Auctions"
        })
      }
    });
    u(this, "traces", {
      getTrace: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/traces/${s}`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/Trace"
        })
      }
    });
    u(this, "events", {
      getEvent: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/events/${s}`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/Event"
        })
      }
    });
    u(this, "inscriptions", {
      getAccountInscriptions: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/experimental/accounts/${n}/inscriptions`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/InscriptionBalances"
        })
      },
      getAccountInscriptionsHistory: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/experimental/accounts/${n}/inscriptions/history`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountInscriptionsHistoryByTicker: (s, e, t, n = {}) => {
        const o = s.toRawString(),
          i = this.http.request({
            path: `/v2/experimental/accounts/${o}/inscriptions/${e}/history`,
            method: "GET",
            query: t,
            format: "json",
            ...n
          });
        return p(i, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getInscriptionOpTemplate: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/experimental/inscriptions/op-template",
          method: "GET",
          query: s,
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["comment", "destination"],
          properties: {
            comment: {
              type: "string"
            },
            destination: {
              type: "string"
            }
          }
        })
      }
    });
    u(this, "jettons", {
      getJettons: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/jettons",
          method: "GET",
          query: s,
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/Jettons"
        })
      },
      getJettonInfo: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/jettons/${t}`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          $ref: "#/components/schemas/JettonInfo"
        })
      },
      getJettonInfosByAddresses: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/jettons/_bulk",
          method: "POST",
          body: J(s, {
            type: "object",
            required: ["accountIds"],
            properties: {
              accountIds: {
                type: "array",
                items: {
                  type: "string",
                  format: "address"
                }
              }
            }
          }),
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/Jettons"
        })
      },
      getJettonHolders: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/jettons/${n}/holders`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/JettonHolders"
        })
      },
      getJettonTransferPayload: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = e.toRawString(),
          i = this.http.request({
            path: `/v2/jettons/${o}/transfer/${n}/payload`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(i, {
          $ref: "#/components/schemas/JettonTransferPayload"
        })
      },
      getJettonsEvents: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/events/${s}/jettons`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/Event"
        })
      }
    });
    u(this, "staking", {
      getAccountNominatorsPools: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/staking/nominator/${t}/pools`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          $ref: "#/components/schemas/AccountStaking"
        })
      },
      getStakingPoolInfo: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/staking/pool/${t}`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          type: "object",
          required: ["implementation", "pool"],
          properties: {
            implementation: {
              $ref: "#/components/schemas/PoolImplementation"
            },
            pool: {
              $ref: "#/components/schemas/PoolInfo"
            }
          }
        })
      },
      getStakingPoolHistory: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/staking/pool/${t}/history`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          type: "object",
          required: ["apy"],
          properties: {
            apy: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ApyHistory"
              }
            }
          }
        })
      },
      getStakingPools: (s, e = {}) => {
        var n;
        const t = this.http.request({
          path: "/v2/staking/pools",
          method: "GET",
          query: s && {
            ...s,
            available_for: (n = s.available_for) == null ? void 0 : n.toRawString()
          },
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["pools", "implementations"],
          properties: {
            pools: {
              type: "array",
              items: {
                $ref: "#/components/schemas/PoolInfo"
              }
            },
            implementations: {
              type: "object",
              additionalProperties: {
                $ref: "#/components/schemas/PoolImplementation"
              }
            }
          }
        })
      }
    });
    u(this, "storage", {
      getStorageProviders: (s = {}) => {
        const e = this.http.request({
          path: "/v2/storage/providers",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {
          type: "object",
          required: ["providers"],
          properties: {
            providers: {
              type: "array",
              items: {
                $ref: "#/components/schemas/StorageProvider"
              }
            }
          }
        })
      }
    });
    u(this, "rates", {
      getRates: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/rates",
          method: "GET",
          query: s,
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["rates"],
          properties: {
            rates: {
              type: "object",
              additionalProperties: {
                $ref: "#/components/schemas/TokenRates"
              }
            }
          }
        })
      },
      getChartRates: (s, e = {}) => {
        var n;
        const t = this.http.request({
          path: "/v2/rates/chart",
          method: "GET",
          query: s && {
            ...s,
            token: (n = s.token) == null ? void 0 : n.toRawString()
          },
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["points"],
          properties: {
            points: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ChartPoints"
              }
            }
          }
        })
      },
      getMarketsRates: (s = {}) => {
        const e = this.http.request({
          path: "/v2/rates/markets",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {
          type: "object",
          required: ["markets"],
          properties: {
            markets: {
              type: "array",
              items: {
                $ref: "#/components/schemas/MarketTonRates"
              }
            }
          }
        })
      }
    });
    u(this, "connect", {
      getTonConnectPayload: (s = {}) => {
        const e = this.http.request({
          path: "/v2/tonconnect/payload",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {
          type: "object",
          required: ["payload"],
          properties: {
            payload: {
              type: "string"
            }
          }
        })
      },
      getAccountInfoByStateInit: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/tonconnect/stateinit",
          method: "POST",
          body: J(s, {
            type: "object",
            required: ["stateInit"],
            properties: {
              stateInit: {
                type: "string",
                format: "cell-base64"
              }
            }
          }),
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/AccountInfoByStateInit"
        })
      }
    });
    u(this, "wallet", {
      tonConnectProof: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/wallet/auth/proof",
          method: "POST",
          body: J(s, {
            type: "object",
            required: ["address", "proof"],
            properties: {
              address: {
                type: "string",
                format: "address"
              },
              proof: {
                type: "object",
                required: ["timestamp", "domain", "signature", "payload"],
                properties: {
                  timestamp: {
                    type: "integer",
                    format: "int64"
                  },
                  domain: {
                    type: "object",
                    required: ["value"],
                    properties: {
                      lengthBytes: {
                        type: "integer",
                        format: "int32"
                      },
                      value: {
                        type: "string"
                      }
                    }
                  },
                  signature: {
                    type: "string"
                  },
                  payload: {
                    type: "string"
                  },
                  stateInit: {
                    type: "string",
                    format: "cell-base64"
                  }
                }
              }
            }
          }),
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["token"],
          properties: {
            token: {
              type: "string"
            }
          }
        })
      },
      getAccountSeqno: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/wallet/${t}/seqno`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          $ref: "#/components/schemas/Seqno"
        })
      },
      getWalletsByPublicKey: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/pubkeys/${s}/wallets`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/Accounts"
        })
      }
    });
    u(this, "gasless", {
      gaslessConfig: (s = {}) => {
        const e = this.http.request({
          path: "/v2/gasless/config",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {
          $ref: "#/components/schemas/GaslessConfig"
        })
      },
      gaslessEstimate: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/gasless/estimate/${n}`,
            method: "POST",
            body: J(e, {
              type: "object",
              required: ["messages", "walletAddress", "walletPublicKey"],
              properties: {
                walletAddress: {
                  type: "string",
                  format: "address"
                },
                walletPublicKey: {
                  type: "string"
                },
                messages: {
                  type: "array",
                  items: {
                    type: "object",
                    required: ["boc"],
                    properties: {
                      boc: {
                        type: "string",
                        format: "cell"
                      }
                    }
                  }
                }
              }
            }),
            format: "json",
            ...t
          });
        return p(o, {
          $ref: "#/components/schemas/SignRawParams"
        })
      },
      gaslessSend: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/gasless/send",
          method: "POST",
          body: J(s, {
            type: "object",
            required: ["boc", "walletPublicKey"],
            properties: {
              walletPublicKey: {
                type: "string"
              },
              boc: {
                type: "string",
                format: "cell"
              }
            }
          }),
          ...e
        });
        return p(t)
      }
    });
    u(this, "liteServer", {
      getRawMasterchainInfo: (s = {}) => {
        const e = this.http.request({
          path: "/v2/liteserver/get_masterchain_info",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {
          type: "object",
          required: ["last", "state_root_hash", "init"],
          properties: {
            last: {
              $ref: "#/components/schemas/BlockRaw"
            },
            state_root_hash: {
              type: "string"
            },
            init: {
              $ref: "#/components/schemas/InitStateRaw"
            }
          }
        })
      },
      getRawMasterchainInfoExt: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/liteserver/get_masterchain_info_ext",
          method: "GET",
          query: s,
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["mode", "version", "capabilities", "last", "last_utime", "now", "state_root_hash", "init"],
          properties: {
            mode: {
              type: "integer",
              format: "int32"
            },
            version: {
              type: "integer",
              format: "int32"
            },
            capabilities: {
              type: "integer",
              format: "int64"
            },
            last: {
              $ref: "#/components/schemas/BlockRaw"
            },
            last_utime: {
              type: "integer",
              format: "int32"
            },
            now: {
              type: "integer",
              format: "int32"
            },
            state_root_hash: {
              type: "string"
            },
            init: {
              $ref: "#/components/schemas/InitStateRaw"
            }
          }
        })
      },
      getRawTime: (s = {}) => {
        const e = this.http.request({
          path: "/v2/liteserver/get_time",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {
          type: "object",
          required: ["time"],
          properties: {
            time: {
              type: "integer",
              format: "int32"
            }
          }
        })
      },
      getRawBlockchainBlock: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/liteserver/get_block/${s}`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["id", "data"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            data: {
              type: "string"
            }
          }
        })
      },
      getRawBlockchainBlockState: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/liteserver/get_state/${s}`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["id", "root_hash", "file_hash", "data"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            root_hash: {
              type: "string"
            },
            file_hash: {
              type: "string"
            },
            data: {
              type: "string"
            }
          }
        })
      },
      getRawBlockchainBlockHeader: (s, e, t = {}) => {
        const n = this.http.request({
          path: `/v2/liteserver/get_block_header/${s}`,
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return p(n, {
          type: "object",
          required: ["id", "mode", "header_proof"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            mode: {
              type: "integer",
              format: "int32"
            },
            header_proof: {
              type: "string"
            }
          }
        })
      },
      sendRawMessage: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/liteserver/send_message",
          method: "POST",
          body: J(s, {
            type: "object",
            required: ["body"],
            properties: {
              body: {
                type: "string",
                format: "cell-base64"
              }
            }
          }),
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["code"],
          properties: {
            code: {
              type: "integer",
              format: "int32"
            }
          }
        })
      },
      getRawAccountState: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/liteserver/get_account_state/${n}`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          type: "object",
          required: ["id", "shardblk", "shard_proof", "proof", "state"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            shardblk: {
              $ref: "#/components/schemas/BlockRaw"
            },
            shard_proof: {
              type: "string"
            },
            proof: {
              type: "string"
            },
            state: {
              type: "string"
            }
          }
        })
      },
      getRawShardInfo: (s, e, t = {}) => {
        const n = this.http.request({
          path: `/v2/liteserver/get_shard_info/${s}`,
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return p(n, {
          type: "object",
          required: ["id", "shardblk", "shard_proof", "shard_descr"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            shardblk: {
              $ref: "#/components/schemas/BlockRaw"
            },
            shard_proof: {
              type: "string"
            },
            shard_descr: {
              type: "string"
            }
          }
        })
      },
      getAllRawShardsInfo: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/liteserver/get_all_shards_info/${s}`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["id", "proof", "data"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            proof: {
              type: "string"
            },
            data: {
              type: "string"
            }
          }
        })
      },
      getRawTransactions: (s, e, t = {}) => {
        const n = s.toRawString(),
          o = this.http.request({
            path: `/v2/liteserver/get_transactions/${n}`,
            method: "GET",
            query: e,
            format: "json",
            ...t
          });
        return p(o, {
          type: "object",
          required: ["ids", "transactions"],
          properties: {
            ids: {
              type: "array",
              items: {
                $ref: "#/components/schemas/BlockRaw"
              }
            },
            transactions: {
              type: "string"
            }
          }
        })
      },
      getRawListBlockTransactions: (s, e, t = {}) => {
        var o;
        const n = this.http.request({
          path: `/v2/liteserver/list_block_transactions/${s}`,
          method: "GET",
          query: e && {
            ...e,
            account_id: (o = e.account_id) == null ? void 0 : o.toRawString()
          },
          format: "json",
          ...t
        });
        return p(n, {
          type: "object",
          required: ["id", "req_count", "incomplete", "ids", "proof"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            req_count: {
              type: "integer",
              format: "int32"
            },
            incomplete: {
              type: "boolean"
            },
            ids: {
              type: "array",
              items: {
                type: "object",
                required: ["mode"],
                properties: {
                  mode: {
                    type: "integer",
                    format: "int32"
                  },
                  account: {
                    type: "string"
                  },
                  lt: {
                    type: "integer",
                    format: "bigint",
                    "x-js-format": "bigint"
                  },
                  hash: {
                    type: "string"
                  }
                }
              }
            },
            proof: {
              type: "string"
            }
          }
        })
      },
      getRawBlockProof: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/liteserver/get_block_proof",
          method: "GET",
          query: s,
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["complete", "from", "to", "steps"],
          properties: {
            complete: {
              type: "boolean"
            },
            from: {
              $ref: "#/components/schemas/BlockRaw"
            },
            to: {
              $ref: "#/components/schemas/BlockRaw"
            },
            steps: {
              type: "array",
              items: {
                type: "object",
                required: ["lite_server_block_link_back", "lite_server_block_link_forward"],
                properties: {
                  lite_server_block_link_back: {
                    type: "object",
                    required: ["to_key_block", "from", "to", "dest_proof", "proof", "state_proof"],
                    properties: {
                      to_key_block: {
                        type: "boolean"
                      },
                      from: {
                        $ref: "#/components/schemas/BlockRaw"
                      },
                      to: {
                        $ref: "#/components/schemas/BlockRaw"
                      },
                      dest_proof: {
                        type: "string"
                      },
                      proof: {
                        type: "string"
                      },
                      state_proof: {
                        type: "string"
                      }
                    }
                  },
                  lite_server_block_link_forward: {
                    type: "object",
                    required: ["to_key_block", "from", "to", "dest_proof", "config_proof", "signatures"],
                    properties: {
                      to_key_block: {
                        type: "boolean"
                      },
                      from: {
                        $ref: "#/components/schemas/BlockRaw"
                      },
                      to: {
                        $ref: "#/components/schemas/BlockRaw"
                      },
                      dest_proof: {
                        type: "string"
                      },
                      config_proof: {
                        type: "string"
                      },
                      signatures: {
                        type: "object",
                        required: ["validator_set_hash", "catchain_seqno", "signatures"],
                        properties: {
                          validator_set_hash: {
                            type: "integer",
                            format: "int64"
                          },
                          catchain_seqno: {
                            type: "integer",
                            format: "int32"
                          },
                          signatures: {
                            type: "array",
                            items: {
                              type: "object",
                              required: ["node_id_short", "signature"],
                              properties: {
                                node_id_short: {
                                  type: "string"
                                },
                                signature: {
                                  type: "string"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        })
      },
      getRawConfig: (s, e, t = {}) => {
        const n = this.http.request({
          path: `/v2/liteserver/get_config_all/${s}`,
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return p(n, {
          type: "object",
          required: ["mode", "id", "state_proof", "config_proof"],
          properties: {
            mode: {
              type: "integer",
              format: "int32"
            },
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            state_proof: {
              type: "string"
            },
            config_proof: {
              type: "string"
            }
          }
        })
      },
      getRawShardBlockProof: (s, e = {}) => {
        const t = this.http.request({
          path: `/v2/liteserver/get_shard_block_proof/${s}`,
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["masterchain_id", "links"],
          properties: {
            masterchain_id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            links: {
              type: "array",
              items: {
                type: "object",
                required: ["id", "proof"],
                properties: {
                  id: {
                    $ref: "#/components/schemas/BlockRaw"
                  },
                  proof: {
                    type: "string"
                  }
                }
              }
            }
          }
        })
      },
      getOutMsgQueueSizes: (s = {}) => {
        const e = this.http.request({
          path: "/v2/liteserver/get_out_msg_queue_sizes",
          method: "GET",
          format: "json",
          ...s
        });
        return p(e, {
          type: "object",
          required: ["ext_msg_queue_size_limit", "shards"],
          properties: {
            ext_msg_queue_size_limit: {
              type: "integer",
              format: "uint32"
            },
            shards: {
              type: "array",
              items: {
                type: "object",
                required: ["id", "size"],
                properties: {
                  id: {
                    $ref: "#/components/schemas/BlockRaw"
                  },
                  size: {
                    type: "integer",
                    format: "uint32"
                  }
                }
              }
            }
          }
        })
      }
    });
    u(this, "multisig", {
      getMultisigAccount: (s, e = {}) => {
        const t = s.toRawString(),
          n = this.http.request({
            path: `/v2/multisig/${t}`,
            method: "GET",
            format: "json",
            ...e
          });
        return p(n, {
          $ref: "#/components/schemas/Multisig"
        })
      }
    });
    u(this, "emulation", {
      decodeMessage: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/message/decode",
          method: "POST",
          body: J(s, {
            type: "object",
            required: ["boc"],
            properties: {
              boc: {
                type: "string",
                format: "cell"
              }
            }
          }),
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/DecodedMessage"
        })
      },
      emulateMessageToEvent: (s, e, t = {}) => {
        const n = this.http.request({
          path: "/v2/events/emulate",
          method: "POST",
          query: e,
          body: J(s, {
            type: "object",
            required: ["boc"],
            properties: {
              boc: {
                type: "string",
                format: "cell"
              }
            }
          }),
          format: "json",
          ...t
        });
        return p(n, {
          $ref: "#/components/schemas/Event"
        })
      },
      emulateMessageToTrace: (s, e, t = {}) => {
        const n = this.http.request({
          path: "/v2/traces/emulate",
          method: "POST",
          query: e,
          body: J(s, {
            type: "object",
            required: ["boc"],
            properties: {
              boc: {
                type: "string",
                format: "cell"
              }
            }
          }),
          format: "json",
          ...t
        });
        return p(n, {
          $ref: "#/components/schemas/Trace"
        })
      },
      emulateMessageToWallet: (s, e = {}) => {
        const t = this.http.request({
          path: "/v2/wallet/emulate",
          method: "POST",
          body: J(s, {
            type: "object",
            required: ["boc"],
            properties: {
              boc: {
                type: "string",
                format: "cell"
              },
              params: {
                type: "array",
                items: {
                  type: "object",
                  required: ["address"],
                  properties: {
                    address: {
                      type: "string",
                      format: "address"
                    },
                    balance: {
                      type: "integer",
                      format: "bigint",
                      "x-js-format": "bigint"
                    }
                  }
                }
              }
            }
          }),
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/MessageConsequences"
        })
      },
      emulateMessageToAccountEvent: (s, e, t, n = {}) => {
        const o = s.toRawString(),
          i = this.http.request({
            path: `/v2/accounts/${o}/events/emulate`,
            method: "POST",
            query: t,
            body: J(e, {
              type: "object",
              required: ["boc"],
              properties: {
                boc: {
                  type: "string",
                  format: "cell"
                }
              }
            }),
            format: "json",
            ...n
          });
        return p(i, {
          $ref: "#/components/schemas/AccountEvent"
        })
      }
    });
    this.http = new Dm(s)
  }
}
ya = L.TonApiClient = Jm;
var Et = (r => (r.TOO_LOW_AMOUNT = "TOO_LOW_AMOUNT", r))(Et || {}),
  We = (r => (r.NOT_ENOUGH_TOKEN = "NOT_ENOUGH_TOKEN", r.NOT_ENOUGH_JETTON = "NOT_ENOUGH_JETTON", r.TOO_LOW_AMOUNT = "TOO_LOW_AMOUNT", r))(We || {}),
  ga = (r => (r.NOT_ENOUGH_TOKEN = "NOT_ENOUGH_TOKEN", r))(ga || {}),
  Ve = (r => (r.NOT_ENOUGH_TOKEN = "NOT_ENOUGH_TOKEN", r.TOO_LOW_AMOUNT = "TOO_LOW_AMOUNT", r.EXCEEDS_MAX_SUPPLY = "EXCEEDS_MAX_SUPPLY", r))(Ve || {}),
  Xe = (r => (r.NOT_ENOUGH_FOR_FEES = "NOT_ENOUGH_FOR_FEES", r.NOT_ENOUGH_FOR_AMOUNT = "NOT_ENOUGH_FOR_AMOUNT", r))(Xe || {});
const Wm = () => {
    const r = "memepad-slippage",
      e = Hn(() => (() => {
        const i = _s().$webApp.storage.local.get(r);
        if (i === void 0) return;
        const c = Number(i);
        if (!isNaN(c)) return c
      })() ?? 10, "$lWcnl8jOnP");
    return Ta({
      get: () => e.value,
      set: o => {
        e.value = o, _s().$webApp.storage.local.set(r, String(o))
      }
    })
  },
  Vm = () => {
    const r = vs.getSaveMemepadJettonInfoStatus,
      s = vs.saveMemepadJettonInfo;
    return {
      getSaveMemepadJettonInfoStatus: r,
      saveMemepadJettonInfo: s
    }
  },
  ys = () => {
    const r = Wm(),
      s = Vm();
    return {
      slippage: r,
      memepadApi: s,
      getMinReceive: n => n.times(100 - r.value).div(100),
      wrapWithCache: (n, o) => {
        const i = c => {
          const l = Hn(c, () => new Map);
          return {
            get: d => l.value.get(d),
            set: (d, a) => l.value.set(d, a)
          }
        };
        return async (...c) => {
          const l = n(...c),
            d = i(l),
            a = d.get(l);
          if (a) return H(a);
          const y = await o(...c);
          return K(y) && d.set(l, y.data), y
        }
      }
    }
  },
  zm = () => s => {
    let e;
    const t = [];
    return {
      get address() {
        var o;
        const n = (o = s.account) == null ? void 0 : o.address;
        return n ? le.Address.parse(n) : void 0
      },
      async send(n) {
        var f;
        const o = Date.now() + 6e5,
          i = n.to.toString({
            urlSafe: !0,
            bounceable: !0
          }),
          c = (f = this.address) == null ? void 0 : f.toRawString(),
          l = n.value.toString();
        let d;
        n.init && (d = le.beginCell().store(le.storeStateInit(n.init)).endCell().toBoc().toString("base64"));
        let a;
        n.body && (a = n.body.toBoc().toString("base64"));
        const y = await s.sendTransaction({
            validUntil: o,
            from: c,
            messages: [{
              address: i,
              amount: l,
              stateInit: d,
              payload: a
            }]
          }),
          h = le.Cell.fromBase64(y.boc);
        e = {
          msg: h,
          hash: h.hash().toString("hex")
        }, t.forEach(_ => _(e))
      },
      async getResult() {
        return await new Promise(n => {
          if (e) {
            n(e);
            return
          }
          t.push(n)
        })
      }
    }
  },
  hs = () => {
    const {
      memepadApi: r
    } = ys(), s = zm(), e = 1e-9;
    return {
      getAddress: d => d instanceof le.Address ? d : le.Address.parse(d),
      tonConnectSender: s,
      createGetWaitForLaunchStatusUntilOk: (d, a) => () => jr((() => {
        let y;
        return async ({
          queryId: h,
          transactionHash: f
        }) => {
          const _ = await r.getSaveMemepadJettonInfoStatus(h),
            g = y ?? await d({
              transactionHash: f
            });
          return K(g) && g.data && (y = g), K(g) && !g.data ? H(void 0) : K(_) && _.data.status === $a.READY ? H(_.data) : Ze()
        }
      })(), () => {}, a),
      createGetReviewStepInfo: ({
        getFees: d
      }) => ({
        overview: a,
        share: y,
        jettonTicker: h,
        tonBalance: f,
        withAiAgent: _
      }) => {
        const g = !new ee(y).isZero() && new ee(y).lt(e),
          v = a.bclData.tokenForDexWithFees.lt(y),
          {
            buyNetworkFee: S,
            launchNetworkFee: D,
            launchPlatformFee: $,
            walletNetworkLaunchFee: N,
            walletNetworkLaunchBuyFee: C
          } = d({
            share: y,
            overview: a
          }),
          O = (() => {
            const X = [],
              T = !a.share.isZero(),
              q = T ? C : N,
              j = D.plus($).plus(q);
            if (_) {
              const F = a.bclData.aiAgentDeployFee;
              F.isZero() ? X.push({
                title: b("memepad.new.price_details.ai_agent.title"),
                badge: {
                  label: b("base.promo").toUpperCase()
                },
                tooltip: {
                  highlight: !1,
                  label: b("memepad.new.price_details.ai_agent.tooltip"),
                  props: {
                    textMinWidth: 140
                  }
                },
                label: b("base.free"),
                total: F
              }) : X.push({
                title: b("memepad.new.price_details.ai_agent.title"),
                label: `${P(F)} TON`,
                total: F
              })
            }
            if (X.push({
                title: b("memepad.new.price_details.launch"),
                tooltip: {
                  details: [{
                    highlight: !1,
                    label: `${b("memepad.jetton.fees_network")}: ${P(D)} TON`,
                    value: D
                  }, {
                    highlight: !1,
                    label: `${b("memepad.jetton.fees_wallet")}: ${P(q)} TON`,
                    value: q
                  }, {
                    highlight: $.isZero(),
                    label: `${b("memepad.jetton.fees_platform")}: ${P($)} TON`,
                    value: $
                  }]
                },
                label: `${P(j)} TON`,
                total: j
              }), T) {
              const F = new ee(a.share.plus(S)),
                z = v ? `${b("memepad.share_label")} ${b("memepad.new.step_review.subtitle_of_supply",{percentAmount:">100%"})}` : g ? `${b("memepad.share_label")} ${b("memepad.new.step_review.subtitle_of_supply",{percentAmount:"<0.01%"})}` : `${b("memepad.share_label")} ${bs(a.jettonReceivePercent)}%`;
              X.push({
                title: z,
                tooltip: {
                  details: [{
                    highlight: !1,
                    label: `${b("memepad.jetton.fees_network")}: ${P(S)} TON`,
                    value: S
                  }, {
                    highlight: !1,
                    label: `${b("memepad.jetton.fees_platform")}: ${P(a.platformFee)} TON`,
                    value: a.platformFee
                  }]
                },
                label: `${P(F)} TON`,
                total: F
              })
            }
            const w = X.reduce((F, z) => F.plus(z.total), new ee(0)),
              G = {
                title: `${b("memepad.new.price_details.total_label")} ${P(w)} TON`,
                value: w
              };
            return {
              sections: X,
              total: G
            }
          })(),
          I = (() => {
            if (g) return {
              type: Ve.TOO_LOW_AMOUNT,
              message: b("memepad.new.share.error.too_low_amount")
            };
            if (v) return {
              type: Ve.EXCEEDS_MAX_SUPPLY,
              message: b("memepad.new.share.error.exceeds_max_supply")
            };
            if (f && !f.value.gte(O.total.value)) return {
              type: Ve.NOT_ENOUGH_TOKEN,
              message: b("memepad.jetton.not_enough_balance_error", {
                balanceWithLabel: f.frontendWithSymbol
              }),
              balance: f,
              needMoreValue: O.total.value.minus(f.value),
              details: Xe.NOT_ENOUGH_FOR_AMOUNT
            }
          })(),
          B = (() => {
            if (I) return I.type === Ve.EXCEEDS_MAX_SUPPLY ? `${b("memepad.new.step_review.subtitle_of_supply",{percentAmount:">100%"})}` : I.type === Ve.TOO_LOW_AMOUNT ? `${b("memepad.new.step_review.subtitle_of_supply",{percentAmount:"<0.01%"})}` : "";
            const X = Sa(new ee(a.minReceive), h);
            return b("memepad.new.step_review.subtitle", {
              jettonsAmountWithSymbol: X.frontendWithSymbol,
              percentAmount: bs(a.jettonReceivePercent)
            })
          })(),
          Y = {
            amount: a.minReceive,
            percent: a.jettonReceivePercent
          },
          ye = f == null ? void 0 : f.frontendWithSymbol;
        return {
          error: I,
          subtitle: B,
          balance: ye,
          supplyInfo: Y,
          feesInfo: O
        }
      },
      createGetUnlockInfo: ({
        getFees: d
      }) => ({
        tonBalance: a,
        jettonBalance: y
      }) => {
        const {
          unlockNetworkFee: h,
          walletNetworkUnlockFee: f
        } = d(), _ = h.plus(f), g = {
          details: [{
            label: `${b("memepad.jetton.fees_network")}: ${P(h)} TON`,
            value: h
          }, {
            label: `${b("memepad.jetton.fees_wallet")}: ${P(f)} TON`,
            value: f
          }],
          total: _,
          totalLabel: `${b("memepad.jetton.fees_base")}: ${P(_)} TON`
        };
        return !a || !y ? {
          balanceLabel: void 0,
          feesInfo: void 0,
          error: void 0,
          ready: !1,
          loading: !0
        } : a.value.lt(_) ? {
          balanceLabel: y.frontendWithSymbol,
          feesInfo: g,
          error: {
            type: ga.NOT_ENOUGH_TOKEN,
            message: b("memepad.jetton.not_enough_error", {
              ticker: "TON"
            }),
            details: Xe.NOT_ENOUGH_FOR_FEES
          },
          ready: !1,
          loading: !1
        } : {
          balanceLabel: y.frontendWithSymbol,
          feesInfo: g,
          error: void 0,
          ready: !0,
          loading: !1
        }
      },
      getTradeStateControls: () => {
        const d = ({
            operation: _,
            fees: g
          }) => {
            const {
              buyNetworkFee: v,
              sellNetworkFee: S,
              walletNetworkBuyFee: D,
              walletNetworkSellFee: $
            } = g, N = new ee(0);
            if (_ === Oe.BUY) {
              const C = v,
                O = D,
                I = C.plus(O);
              return {
                details: [{
                  label: `${b("memepad.jetton.fees_network")}: ${P(C)} TON`,
                  value: C
                }, {
                  label: `${b("memepad.jetton.fees_wallet")}: ${P(O)} TON`,
                  value: O
                }, {
                  label: `${b("memepad.jetton.fees_platform")}: ${P(N)} TON`,
                  value: N
                }],
                total: I,
                totalLabel: `${b("memepad.jetton.fees_base")}: ${P(I)} TON`
              }
            } else {
              const C = S,
                O = $,
                I = C.plus(O);
              return {
                details: [{
                  label: `${b("memepad.jetton.fees_network")}: ${P(C)} TON`,
                  value: C
                }, {
                  label: `${b("memepad.jetton.fees_wallet")}: ${P(O)} TON`,
                  value: O
                }, {
                  label: `${b("memepad.jetton.fees_platform")}: ${P(N)} TON`,
                  value: N
                }],
                total: I,
                totalLabel: `${b("memepad.jetton.fees_base")}: ${P(I)} TON`
              }
            }
          },
          a = ({
            operation: _,
            amount: g,
            tradeInfo: v,
            fees: S
          }) => {
            if (g.isZero()) return d({
              operation: _,
              fees: S
            });
            const {
              buyNetworkFee: D,
              sellNetworkFee: $,
              walletNetworkBuyFee: N,
              walletNetworkSellFee: C
            } = S, O = v.platformFee;
            if (_ === Oe.BUY) {
              const I = D,
                B = N,
                Y = g.plus(I).plus(B);
              return {
                details: [{
                  label: `${b("memepad.jetton.fees_network")}: ${P(I)} TON`,
                  value: I
                }, {
                  label: `${b("memepad.jetton.fees_wallet")}: ${P(B)} TON`,
                  value: B
                }, {
                  label: `${b("memepad.jetton.fees_platform")}: ${P(O)} TON`,
                  value: O
                }],
                total: Y,
                totalLabel: `${b("memepad.jetton.fees_send")}: ${P(Y)} TON`
              }
            } else {
              const I = $,
                B = C,
                Y = O.plus(I).plus(B);
              return {
                details: [{
                  label: `${b("memepad.jetton.fees_network")}: ${P(I)} TON`,
                  value: I
                }, {
                  label: `${b("memepad.jetton.fees_wallet")}: ${P(B)} TON`,
                  value: B
                }, {
                  label: `${b("memepad.jetton.fees_platform")}: ${P(O)} TON`,
                  value: O
                }],
                total: Y,
                totalLabel: `${b("memepad.jetton.fees_base")}: ${P(Y)} TON`
              }
            }
          },
          y = ({
            operation: _,
            tonBalance: g,
            jettonBalance: v
          }) => ({
            balanceLabel: _ === Oe.BUY ? g == null ? void 0 : g.frontendWithSymbol : v == null ? void 0 : v.frontendWithSymbol,
            tradeInfo: void 0,
            feesInfo: void 0,
            error: void 0,
            ready: !1,
            loading: !1
          }),
          h = ({
            operation: _,
            amount: g,
            tonBalance: v,
            jettonBalance: S,
            jettonTicker: D,
            fees: $
          }) => {
            const {
              buyNetworkFee: N,
              sellNetworkFee: C,
              walletNetworkBuyFee: O,
              walletNetworkSellFee: I
            } = $;
            if (!v || !S) return {
              balanceLabel: void 0,
              tradeInfo: void 0,
              feesInfo: void 0,
              error: void 0,
              ready: !1,
              loading: !0
            };
            const B = _ === Oe.BUY ? v == null ? void 0 : v.frontendWithSymbol : S == null ? void 0 : S.frontendWithSymbol;
            if (g.isZero()) return {
              balanceLabel: B,
              tradeInfo: void 0,
              feesInfo: d({
                operation: _,
                fees: $
              }),
              error: void 0,
              ready: !1,
              loading: !1
            };
            if (!g.isZero() && g.lt(e)) return {
              balanceLabel: B,
              tradeInfo: void 0,
              feesInfo: void 0,
              error: {
                type: We.TOO_LOW_AMOUNT,
                message: b("memepad.jetton.too_low_amount_error")
              },
              ready: !1,
              loading: !1
            };
            if (_ === Oe.BUY) {
              const ye = N,
                X = O,
                T = g.plus(ye).plus(X);
              if (v.value.lt(T)) return {
                balanceLabel: B,
                tradeInfo: void 0,
                feesInfo: void 0,
                error: {
                  type: We.NOT_ENOUGH_TOKEN,
                  message: b("memepad.jetton.not_enough_error", {
                    ticker: "TON"
                  }),
                  needMoreValue: T.minus(v.value),
                  details: Xe.NOT_ENOUGH_FOR_FEES
                },
                ready: !1,
                loading: !1
              }
            } else {
              if (S.value.lt(g)) return {
                balanceLabel: B,
                tradeInfo: void 0,
                feesInfo: void 0,
                error: {
                  type: We.NOT_ENOUGH_JETTON,
                  message: b("memepad.jetton.not_enough_error", {
                    ticker: D
                  })
                },
                ready: !1,
                loading: !1
              };
              const T = C,
                q = I,
                j = T.plus(q);
              if (v.value.lt(j)) return {
                tradeInfo: void 0,
                feesInfo: void 0,
                balanceLabel: B,
                error: {
                  type: We.NOT_ENOUGH_TOKEN,
                  message: b("memepad.jetton.not_enough_error", {
                    ticker: "TON"
                  }),
                  needMoreValue: j.minus(v.value),
                  details: Xe.NOT_ENOUGH_FOR_FEES
                },
                ready: !1,
                loading: !1
              }
            }
          };
        return {
          getEmptyState: y,
          getImmediateState: h,
          getState: async ({
            operation: _,
            amount: g,
            tonBalance: v,
            jettonBalance: S,
            jettonTicker: D,
            getBuyInfo: $,
            getSellInfo: N,
            fees: C
          }) => {
            const O = h({
              operation: _,
              amount: g,
              tonBalance: v,
              jettonTicker: D,
              jettonBalance: S,
              fees: C
            });
            if (O) return O;
            const I = _ === Oe.BUY ? v.frontendWithSymbol : S.frontendWithSymbol;
            if (g.isZero()) return {
              tradeInfo: void 0,
              balanceLabel: I,
              feesInfo: d({
                operation: _,
                fees: C
              }),
              error: void 0,
              ready: !1,
              loading: !1
            };
            const B = await (_ === Oe.BUY ? $({
              tons: g
            }) : N({
              jettons: g
            }));
            if (!K(B)) return B.extra === Et.TOO_LOW_AMOUNT ? {
              tradeInfo: void 0,
              feesInfo: void 0,
              balanceLabel: I,
              error: {
                type: We.TOO_LOW_AMOUNT,
                message: b("memepad.jetton.too_low_amount_error")
              },
              ready: !1,
              loading: !1
            } : {
              tradeInfo: void 0,
              balanceLabel: void 0,
              feesInfo: void 0,
              ready: !1,
              error: void 0,
              loading: !0
            };
            const Y = B.data,
              ye = a({
                operation: _,
                amount: g,
                tradeInfo: Y,
                fees: C
              });
            return {
              tradeInfo: Y,
              balanceLabel: I,
              feesInfo: ye,
              error: void 0,
              ready: !0,
              loading: !1
            }
          }
        }
      },
      mustGetUserWalletAddress: () => {
        const d = qa().state.value;
        if (d.status === ja.CONNECTED) return d.address
      }
    }
  },
  Km = () => {
    const {
      getAddress: r
    } = hs(), s = Yn().public.TON_API_TOKEN, e = new ya({
      baseUrl: "https://tonapi.io",
      apiKey: s
    }), t = new m.TonClient({
      endpoint: "https://toncenter.com/api/v2/jsonRPC"
    });
    return {
      TON_API_TOKEN: s,
      tonApiClient: e,
      tonClient: t,
      getUserJettonBalance: async ({
        jettonAddress: i,
        userAddress: c
      }) => {
        const l = await ve(async () => await e.accounts.getAccountJettonBalance(r(c), r(i)))();
        return K(l) ? H(_e(l.data.balance)) : H(new ee(0))
      },
      getTransactionStatus: async ({
        transactionHash: i,
        actionTypes: c
      }) => {
        const l = await ve(async () => await e.events.getEvent(i))();
        if (!K(l)) return l;
        if (l.data.inProgress) return Ze("Transaction is in progress");
        if (c)
          for (const d of c) {
            const a = l.data.actions.find(y => y.type === d);
            if (!a || a.status !== "ok") return H(!1)
          } else if (l.data.actions.find(d => d.status !== "ok")) return H(!1);
        return H(!0)
      }
    }
  },
  Hm = () => {
    const {
      tonConnectSender: r,
      getTradeStateControls: s
    } = hs(), {
      tonClient: e,
      getTransactionStatus: t
    } = Km(), {
      wrapWithCache: n,
      slippage: o
    } = ys(), i = "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c", c = 1, l = Yn().public.STONFI_REFERRAL_ADDRESS, d = new hi, a = {
      BUY_STATUS_CHECK: 12e3,
      SELL_STATUS_CHECK: 12e3
    }, y = {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: new ee(.31),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: new ee(.3)
    }, h = {
      BUY_FEE: new ee(.0081),
      SELL_FEE: new ee(.0086)
    }, f = {
      buyNetworkFee: y.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: y.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      walletNetworkBuyFee: h.BUY_FEE,
      walletNetworkSellFee: h.SELL_FEE
    }, g = n(T => `stonfiSdk:router:${T.toString()}`, async T => await ve(async () => await d.getRouter(T.toString()))()), v = T => {
      const q = (() => {
          const z = "v2_2",
            Z = ["v2_1", "v2_2"],
            re = `v${T.majorVersion}_${T.minorVersion}`;
          return Z.includes(re) ? re : z
        })(),
        j = Ei[q].Router,
        w = e.open(j.create(T.address)),
        G = (() => {
          const z = "v2_1",
            Z = ["v2_1"],
            [re, he] = T.ptonVersion.split("."),
            ge = `v${re}_${he}`;
          return Z.includes(ge) ? ge : z
        })(),
        F = xi[G].create(T.ptonMasterAddress);
      return {
        routerInstance: j,
        router: w,
        proxyTon: F
      }
    }, S = () => jr(t, () => {}, a.BUY_STATUS_CHECK), D = () => jr(t, () => {}, a.SELL_STATUS_CHECK), $ = T => {
      var q, j, w;
      return ((q = T.extra) == null ? void 0 : q.statusCode) === 400 && ((w = (j = T.extra) == null ? void 0 : j.data) == null ? void 0 : w.startsWith("1012"))
    }, N = T => {
      var q, j, w;
      return ((q = T.extra) == null ? void 0 : q.statusCode) === 400 && ((w = (j = T.extra) == null ? void 0 : j.data) == null ? void 0 : w.startsWith("1040"))
    }, C = async ({
      tons: T,
      jettonAddress: q,
      decimals: j
    }) => {
      const w = await ve(async () => await d.simulateSwap({
        askAddress: q.toString(),
        offerAddress: i,
        offerUnits: Fe(T).toString(),
        slippageTolerance: String(o.value / 100),
        dexV2: !0,
        dexVersion: [2],
        referralAddress: l,
        referralFeeBps: String(c * 100)
      }))();
      if (!K(w)) return $(w) ? Ze(Et.TOO_LOW_AMOUNT) : w;
      const G = await g(w.data.routerAddress);
      if (!K(G)) return G;
      const F = _e(w.data.minAskUnits, j),
        z = _e(w.data.askUnits, j),
        Z = _e(w.data.feeUnits, j),
        re = Z.div(F.plus(Z)).times(T);
      return H({
        minReceive: F,
        maxReceive: z,
        platformFee: re,
        additionalInfo: {
          routerInfo: G.data,
          decimals: j
        }
      })
    }, O = async ({
      jettons: T,
      jettonAddress: q,
      decimals: j
    }) => {
      const w = await ve(async () => await d.simulateSwap({
        askAddress: i,
        offerAddress: q.toString(),
        offerUnits: Fe(T, j).toString(),
        slippageTolerance: String(o.value / 100),
        dexV2: !0,
        dexVersion: [2],
        referralAddress: l,
        referralFeeBps: String(c * 100)
      }))();
      if (!K(w)) return $(w) ? Ze(Et.TOO_LOW_AMOUNT) : w;
      const G = await g(w.data.routerAddress);
      if (!K(G)) return G;
      const F = _e(w.data.minAskUnits),
        z = _e(w.data.askUnits),
        Z = _e(w.data.feeUnits);
      return H({
        minReceive: F,
        maxReceive: z,
        platformFee: Z,
        additionalInfo: {
          routerInfo: G.data,
          decimals: j
        }
      })
    }, I = async ({
      userAddress: T,
      jettonAddress: q,
      decimals: j
    }) => {
      const w = await ve(async () => await d.getWalletAsset({
        walletAddress: T.toString(),
        assetAddress: q.toString()
      }))();
      return K(w) ? w.data.balance === void 0 ? H(new ee(0)) : H(_e(w.data.balance, j)) : N(w) ? Ze("Failed to get balance") : w
    }, B = async ({
      tons: T,
      tradeInfoParams: q,
      userAddress: j,
      jettonAddress: w,
      referrerToken: G,
      tonConnectUI: F
    }) => {
      const {
        router: z,
        proxyTon: Z
      } = v(q.additionalInfo.routerInfo), re = {
        userWalletAddress: j,
        proxyTon: Z,
        offerAmount: Fe(T),
        askJettonAddress: w,
        minAskAmount: Fe(q.minReceive, q.additionalInfo.decimals),
        queryId: void 0,
        referralAddress: l,
        referralValue: c * 100,
        dexCustomPayload: G ? le.beginCell().storeUint(10001, 32).storeStringTail(G).endCell() : void 0
      }, he = r(F), ge = await ve(async () => await z.sendSwapTonToJetton(he, re))();
      return K(ge) ? H((await he.getResult()).hash) : ge
    }, Y = async ({
      jettons: T,
      tradeInfoParams: q,
      userAddress: j,
      jettonAddress: w,
      referrerToken: G,
      tonConnectUI: F
    }) => {
      const {
        router: z,
        proxyTon: Z
      } = v(q.additionalInfo.routerInfo), re = {
        userWalletAddress: j,
        offerJettonAddress: w,
        offerAmount: Fe(T, q.additionalInfo.decimals),
        minAskAmount: Fe(q.minReceive),
        proxyTon: Z,
        queryId: void 0,
        referralAddress: l,
        referralValue: c * 100,
        dexCustomPayload: G ? le.beginCell().storeUint(10001, 32).storeStringTail(G).endCell() : void 0
      }, he = r(F), ge = await ve(async () => await z.sendSwapJettonToTon(he, re))();
      return K(ge) ? H((await he.getResult()).hash) : ge
    }, ye = s();
    return {
      getRouter: g,
      getRouterAndProxyTon: v,
      getWaitForBuyStatus: S,
      getWaitForSellStatus: D,
      getBuyInfo: C,
      getSellInfo: O,
      getUserJettonBalance: I,
      buyJetton: B,
      sellJetton: Y,
      tradeStateControls: ye,
      getMaxBuyAmount: ({
        tokenBalance: T
      }) => {
        const {
          buyNetworkFee: q,
          walletNetworkBuyFee: j
        } = f;
        return T.value.minus(q).minus(j)
      },
      fees: f
    }
  },
  Zm = ({
    jetton: r,
    tonBalance: s,
    jettonBalance: e
  }) => {
    var D;
    const {
      mustGetUserWalletAddress: t
    } = hs(), {
      slippage: n
    } = ys(), {
      getUserJettonBalance: o,
      buyJetton: i,
      sellJetton: c,
      getWaitForBuyStatus: l,
      getWaitForSellStatus: d,
      tradeStateControls: a,
      getBuyInfo: y,
      getSellInfo: h,
      getMaxBuyAmount: f,
      fees: _
    } = Hm(), g = r.address, v = Pa().tonConnectUI.value, S = (D = ka().getters.getUser.value) == null ? void 0 : D.referrerToken;
    return {
      getUserJettonBalance: () => o({
        jettonAddress: g,
        userAddress: t(),
        decimals: r.decimals
      }),
      getSlippage: () => n.value,
      updateSlippage: $ => n.value = $,
      buyJetton: ({
        tons: $,
        tradeInfoParams: N
      }) => i({
        tons: $,
        jettonAddress: g,
        userAddress: t(),
        tradeInfoParams: N,
        tonConnectUI: v,
        referrerToken: S
      }),
      sellJetton: ({
        jettons: $,
        tradeInfoParams: N
      }) => c({
        jettons: $,
        jettonAddress: g,
        userAddress: t(),
        tradeInfoParams: N,
        tonConnectUI: v,
        referrerToken: S
      }),
      getWaitForBuyStatus: () => l(),
      getWaitForSellStatus: () => d(),
      tradeStateControls: {
        getEmptyState: ({
          operation: $
        }) => a.getEmptyState({
          tonBalance: s,
          jettonBalance: e,
          operation: $
        }),
        getImmediateState: ({
          operation: $,
          amount: N
        }) => a.getImmediateState({
          amount: N,
          tonBalance: s,
          jettonBalance: e,
          operation: $,
          jettonTicker: r.ticker,
          fees: _
        }),
        getState: ({
          operation: $,
          amount: N
        }) => a.getState({
          tonBalance: s,
          jettonBalance: e,
          operation: $,
          amount: N,
          jettonTicker: r.ticker,
          fees: _,
          getBuyInfo: ({
            tons: C
          }) => y({
            tons: C,
            jettonAddress: g,
            decimals: r.decimals
          }),
          getSellInfo: ({
            jettons: C
          }) => h({
            jettons: C,
            jettonAddress: g,
            decimals: r.decimals
          })
        })
      },
      getMaxBuyAmount: f
    }
  };
export {
  ga as M, We as a, Ve as b, hs as c, Km as d, ys as e, Zm as g, tp as p, Gu as r, Rm as s, Hm as u
};