var ba = Object.defineProperty;
var Aa = (r, s, e) => s in r ? ba(r, s, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[s] = e;
var u = (r, s, e) => Aa(r, typeof s != "symbol" ? s + "" : s, e);
import {
  cx as wa,
  cy as Ta,
  cz as $a,
  av as gs,
  ci as ze,
  bA as le,
  bd as Qn,
  h as _s,
  j as Sa,
  a5 as vs,
  a6 as H,
  ab as z,
  l as Xn,
  C as b,
  bU as j,
  bo as jr,
  cA as bs,
  cB as As,
  aN as Ze,
  a2 as Z,
  cC as ws,
  M as qa,
  bX as ja,
  ce as Pa,
  cp as _e,
  cn as ge,
  bS as Oe,
  bf as ka,
  k as Ea,
  cq as Fe
} from "./CkAWtTNJ.js";
import {
  d as m
} from "./BXNQ_Pz4.js";
var Zn = class extends Map {
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
  xa = Object.create,
  Mr = Object.defineProperty,
  Ia = Object.defineProperties,
  Oa = Object.getOwnPropertyDescriptor,
  Ca = Object.getOwnPropertyDescriptors,
  eo = Object.getOwnPropertyNames,
  St = Object.getOwnPropertySymbols,
  Ra = Object.getPrototypeOf,
  Ur = Object.prototype.hasOwnProperty,
  to = Object.prototype.propertyIsEnumerable,
  Ts = (r, s, e) => s in r ? Mr(r, s, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
  }) : r[s] = e,
  oe = (r, s) => {
    for (var e in s || (s = {})) Ur.call(s, e) && Ts(r, e, s[e]);
    if (St)
      for (var e of St(s)) to.call(s, e) && Ts(r, e, s[e]);
    return r
  },
  Ce = (r, s) => Ia(r, Ca(s)),
  De = (r, s) => {
    var e = {};
    for (var t in r) Ur.call(r, t) && s.indexOf(t) < 0 && (e[t] = r[t]);
    if (r != null && St)
      for (var t of St(r)) s.indexOf(t) < 0 && to.call(r, t) && (e[t] = r[t]);
    return e
  },
  Na = (r, s) => function() {
    return s || (0, r[eo(r)[0]])((s = {
      exports: {}
    }).exports, s), s.exports
  },
  Ba = (r, s, e, t) => {
    if (s && typeof s == "object" || typeof s == "function")
      for (let n of eo(s)) !Ur.call(r, n) && n !== e && Mr(r, n, {
        get: () => s[n],
        enumerable: !(t = Oa(s, n)) || t.enumerable
      });
    return r
  },
  La = (r, s, e) => (e = r != null ? xa(Ra(r)) : {}, Ba(Mr(e, "default", {
    value: r,
    enumerable: !0
  }), r)),
  P = (r, s, e) => new Promise((t, n) => {
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
  ro = r => typeof r == "object" && r !== null,
  $s = r => ro(r) && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  Fa = Symbol("mapObjectSkip"),
  Pr = (r, s, e, t = new WeakMap) => {
    if (e = oe({
        deep: !1,
        target: {}
      }, e), t.has(r)) return t.get(r);
    t.set(r, e.target);
    const {
      target: n
    } = e;
    delete e.target;
    const o = i => i.map(c => $s(c) ? Pr(c, s, e, t) : c);
    if (Array.isArray(r)) return o(r);
    for (const [i, c] of Object.entries(r)) {
      const l = s(i, c, r);
      if (l === Fa) continue;
      let [d, a, {
        shouldRecurse: y = !0
      } = {}] = l;
      d !== "__proto__" && (e.deep && y && $s(a) && (a = Array.isArray(a) ? o(a) : Pr(a, s, e, t)), n[d] = a)
    }
    return n
  };

function Ss(r, s, e) {
  if (!ro(r)) throw new TypeError(`Expected an object, got \`${r}\` (${typeof r})`);
  return Pr(r, s, e)
}
var Da = /[\p{Lu}]/u,
  Ga = /[\p{Ll}]/u,
  qs = /^[\p{Lu}](?![\p{Lu}])/gu,
  so = /([\p{Alpha}\p{N}_]|$)/u,
  Jr = /[_.\- ]+/,
  Ma = new RegExp("^" + Jr.source),
  js = new RegExp(Jr.source + so.source, "gu"),
  Ps = new RegExp("\\d+" + so.source, "gu"),
  Ua = (r, s, e, t) => {
    let n = !1,
      o = !1,
      i = !1,
      c = !1;
    for (let l = 0; l < r.length; l++) {
      const d = r[l];
      c = l > 2 ? r[l - 3] === "-" : !0, n && Da.test(d) ? (r = r.slice(0, l) + "-" + r.slice(l), n = !1, i = o, o = !0, l++) : o && i && Ga.test(d) && (!c || t) ? (r = r.slice(0, l - 1) + "-" + r.slice(l - 1), i = o, o = !1, n = !0) : (n = s(d) === d && e(d) !== d, i = o, o = e(d) === d && s(d) !== d)
    }
    return r
  },
  Ja = (r, s) => (qs.lastIndex = 0, r.replaceAll(qs, e => s(e))),
  Wa = (r, s) => (js.lastIndex = 0, Ps.lastIndex = 0, r.replaceAll(Ps, (e, t, n) => ["_", "-"].includes(r.charAt(n + e.length)) ? e : s(e)).replaceAll(js, (e, t) => s(t)));

function Va(r, s) {
  if (!(typeof r == "string" || Array.isArray(r))) throw new TypeError("Expected the input to be `string | string[]`");
  if (s = oe({
      pascalCase: !1,
      preserveConsecutiveUppercase: !1
    }, s), Array.isArray(r) ? r = r.map(o => o.trim()).filter(o => o.length).join("-") : r = r.trim(), r.length === 0) return "";
  const e = s.locale === !1 ? o => o.toLowerCase() : o => o.toLocaleLowerCase(s.locale),
    t = s.locale === !1 ? o => o.toUpperCase() : o => o.toLocaleUpperCase(s.locale);
  return r.length === 1 ? Jr.test(r) ? "" : s.pascalCase ? t(r) : e(r) : (r !== e(r) && (r = Ua(r, e, t, s.preserveConsecutiveUppercase)), r = r.replace(Ma, ""), r = s.preserveConsecutiveUppercase ? Ja(r, e) : e(r), s.pascalCase && (r = t(r.charAt(0)) + r.slice(1)), Wa(r, t))
}
var za = (r, s) => r.some(e => typeof e == "string" ? e === s : (e.lastIndex = 0, e.test(s))),
  Mt = new Zn({
    maxSize: 1e5
  }),
  ks = r => typeof r == "object" && r !== null && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  Es = (r, s = {}) => {
    if (!ks(r)) return r;
    const {
      exclude: e,
      pascalCase: t = !1,
      stopPaths: n,
      deep: o = !1,
      preserveConsecutiveUppercase: i = !1
    } = s, c = new Set(n), l = d => (a, y) => {
      if (o && ks(y)) {
        const g = d === void 0 ? a : `${d}.${a}`;
        c.has(g) || (y = Ss(y, l(g)))
      }
      if (!(e && za(e, a))) {
        const g = t ? `${a}_` : a;
        if (Mt.has(g)) a = Mt.get(g);
        else {
          const f = Va(a, {
            pascalCase: t,
            locale: !1,
            preserveConsecutiveUppercase: i
          });
          a.length < 100 && Mt.set(g, f), a = f
        }
      }
      return [a, y]
    };
    return Ss(r, l(void 0))
  };

function Ka(r, s) {
  return Array.isArray(r) ? Object.keys(r).map(e => Es(r[e], s)) : Es(r, s)
}

function Ha(r) {
  return Ka(r, {
    deep: !0
  })
}

function no(r) {
  const s = {};
  for (const e in r) {
    const t = r[e];
    s[e] = t === null ? void 0 : t && typeof t == "object" && t.__proto__.constructor === Object ? no(t) : t
  }
  return s
}

function k(r) {
  return no(Ha(r))
}
var lt = r => r.toISOString().split(".")[0],
  Ya = Na({
    "node_modules/.pnpm/map-obj@4.3.0/node_modules/map-obj/index.js"(r, s) {
      var e = i => typeof i == "object" && i !== null,
        t = Symbol("skip"),
        n = i => e(i) && !(i instanceof RegExp) && !(i instanceof Error) && !(i instanceof Date),
        o = (i, c, l, d = new WeakMap) => {
          if (l = oe({
              deep: !1,
              target: {}
            }, l), d.has(i)) return d.get(i);
          d.set(i, l.target);
          const {
            target: a
          } = l;
          delete l.target;
          const y = g => g.map(f => n(f) ? o(f, c, l, d) : f);
          if (Array.isArray(i)) return y(i);
          for (const [g, f] of Object.entries(i)) {
            const v = c(g, f, i);
            if (v === t) continue;
            let [h, _, {
              shouldRecurse: S = !0
            } = {}] = v;
            h !== "__proto__" && (l.deep && S && n(_) && (_ = Array.isArray(_) ? y(_) : o(_, c, l, d)), a[h] = _)
          }
          return a
        };
      s.exports = (i, c, l) => {
        if (!e(i)) throw new TypeError(`Expected an object, got \`${i}\` (${typeof i})`);
        return o(i, c, l)
      }, s.exports.mapObjectSkip = t
    }
  }),
  xs = La(Ya()),
  Qa = (r, s) => (r = r.replace(new RegExp("((?<![\\p{Uppercase_Letter}\\d])[\\p{Uppercase_Letter}\\d](?![\\p{Uppercase_Letter}\\d]))", "gu"), e => e.toLowerCase()), r.replace(new RegExp("(\\p{Uppercase_Letter}+)(\\p{Uppercase_Letter}\\p{Lowercase_Letter}+)", "gu"), (e, t, n) => t + s + n.toLowerCase()));

function Xa(r, {
  separator: s = "_",
  preserveConsecutiveUppercase: e = !1
} = {}) {
  if (!(typeof r == "string" && typeof s == "string")) throw new TypeError("The `text` and `separator` arguments should be of type `string`");
  if (r.length < 2) return e ? r : r.toLowerCase();
  const t = `$1${s}$2`,
    n = r.replace(new RegExp("([\\p{Lowercase_Letter}\\d])(\\p{Uppercase_Letter})", "gu"), t);
  return e ? Qa(n, s) : n.replace(new RegExp("(\\p{Uppercase_Letter})(\\p{Uppercase_Letter}\\p{Lowercase_Letter}+)", "gu"), t).toLowerCase()
}
var Za = (r, s) => r.some(e => typeof e == "string" ? e === s : (e.lastIndex = 0, e.test(s))),
  Ut = new Zn({
    maxSize: 1e5
  }),
  Is = r => typeof r == "object" && r !== null && !(r instanceof RegExp) && !(r instanceof Error) && !(r instanceof Date),
  Os = (r, s = {}) => {
    if (!Is(r)) return r;
    const {
      separator: e = "_",
      exclude: t,
      deep: n = !1
    } = s, o = i => (c, l) => {
      if (n && Is(l) && (l = (0, xs.default)(l, o())), !(t && Za(t, c))) {
        const d = `${e}${c}`;
        if (Ut.has(d)) c = Ut.get(d);
        else {
          const a = Xa(c, {
            separator: e
          });
          c.length < 100 && Ut.set(d, a), c = a
        }
      }
      return [c, l]
    };
    return (0, xs.default)(r, o())
  };

function ei(r, s) {
  return Array.isArray(r) ? Object.keys(r).map(e => Os(r[e], s)) : Os(r, s)
}

function ti(r) {
  return ei(r, {
    deep: !0
  })
}

function Cs(r) {
  let s = r;
  for (; s.indexOf("/") >= 0;) s = s.replace("/", "_");
  for (; s.indexOf("+") >= 0;) s = s.replace("+", "-");
  for (; s.indexOf("=") >= 0;) s = s.replace("=", "");
  return s
}

function E(r, s) {
  const e = r.replace(/{([a-zA-Z0-9_]+)}/g, (t, n) => {
    var o, i;
    const c = (o = s == null ? void 0 : s.query) == null ? void 0 : o[n];
    if (!c) throw new Error(`Missing value for path parameter "${n}"`);
    return (i = s == null ? void 0 : s.query) == null || delete i[n], Cs(c)
  });
  if (s != null && s.query) {
    for (const t in s.query) {
      const n = s.query[t];
      typeof n == "string" && (s.query[t] = Cs(n))
    }
    s.query = ti(s.query)
  }
  return [e, s]
}
class ri extends Error {
  constructor(s, e) {
    super(s, e), this.name = "FetchError", e != null && e.cause && !this.cause && (this.cause = e.cause)
  }
}

function si(r) {
  var l, d, a, y, g;
  const s = ((l = r.error) == null ? void 0 : l.message) || ((d = r.error) == null ? void 0 : d.toString()) || "",
    e = ((a = r.request) == null ? void 0 : a.method) || ((y = r.options) == null ? void 0 : y.method) || "GET",
    t = ((g = r.request) == null ? void 0 : g.url) || String(r.request) || "/",
    n = `[${e}] ${JSON.stringify(t)}`,
    o = r.response ? `${r.response.status} ${r.response.statusText}` : "<no response>",
    i = `${n}: ${o}${s?` ${s}`:""}`,
    c = new ri(i, r.error ? {
      cause: r.error
    } : void 0);
  for (const f of ["request", "options", "response"]) Object.defineProperty(c, f, {
    get() {
      return r[f]
    }
  });
  for (const [f, v] of [
      ["data", "_data"],
      ["status", "status"],
      ["statusCode", "status"],
      ["statusText", "statusText"],
      ["statusMessage", "statusText"]
    ]) Object.defineProperty(c, f, {
    get() {
      return r.response && r.response[v]
    }
  });
  return c
}
const ni = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function Rs(r = "GET") {
  return ni.has(r.toUpperCase())
}

function oi(r) {
  if (r === void 0) return !1;
  const s = typeof r;
  return s === "string" || s === "number" || s === "boolean" || s === null ? !0 : s !== "object" ? !1 : Array.isArray(r) ? !0 : r.buffer ? !1 : r.constructor && r.constructor.name === "Object" || typeof r.toJSON == "function"
}
const ai = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
  ii = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function ci(r = "") {
  if (!r) return "json";
  const s = r.split(";").shift() || "";
  return ii.test(s) ? "json" : ai.has(s) || s.startsWith("text/") ? "text" : "blob"
}

function di(r, s, e, t) {
  const n = li((s == null ? void 0 : s.headers) ?? (r == null ? void 0 : r.headers), e == null ? void 0 : e.headers, t);
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

function li(r, s, e) {
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
const pi = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  ui = new Set([101, 204, 205, 304]);

function oo(r = {}) {
  const {
    fetch: s = globalThis.fetch,
    Headers: e = globalThis.Headers,
    AbortController: t = globalThis.AbortController
  } = r;
  async function n(c) {
    const l = c.error && c.error.name === "AbortError" && !c.options.timeout || !1;
    if (c.options.retry !== !1 && !l) {
      let a;
      typeof c.options.retry == "number" ? a = c.options.retry : a = Rs(c.options.method) ? 0 : 1;
      const y = c.response && c.response.status || 500;
      if (a > 0 && (Array.isArray(c.options.retryStatusCodes) ? c.options.retryStatusCodes.includes(y) : pi.has(y))) {
        const g = typeof c.options.retryDelay == "function" ? c.options.retryDelay(c) : c.options.retryDelay || 0;
        return g > 0 && await new Promise(f => setTimeout(f, g)), o(c.request, {
          ...c.options,
          retry: a - 1
        })
      }
    }
    const d = si(c);
    throw Error.captureStackTrace && Error.captureStackTrace(d, o), d
  }
  const o = async function(l, d = {}) {
    const a = {
      request: l,
      options: di(l, d, r.defaults, e),
      response: void 0,
      error: void 0
    };
    a.options.method && (a.options.method = a.options.method.toUpperCase()), a.options.onRequest && await pt(a, a.options.onRequest), typeof a.request == "string" && (a.options.baseURL && (a.request = wa(a.request, a.options.baseURL)), a.options.query && (a.request = Ta(a.request, a.options.query), delete a.options.query), "query" in a.options && delete a.options.query, "params" in a.options && delete a.options.params), a.options.body && Rs(a.options.method) && (oi(a.options.body) ? (a.options.body = typeof a.options.body == "string" ? a.options.body : JSON.stringify(a.options.body), a.options.headers = new e(a.options.headers || {}), a.options.headers.has("content-type") || a.options.headers.set("content-type", "application/json"), a.options.headers.has("accept") || a.options.headers.set("accept", "application/json")) : ("pipeTo" in a.options.body && typeof a.options.body.pipeTo == "function" || typeof a.options.body.pipe == "function") && ("duplex" in a.options || (a.options.duplex = "half")));
    let y;
    if (!a.options.signal && a.options.timeout) {
      const f = new t;
      y = setTimeout(() => {
        const v = new Error("[TimeoutError]: The operation was aborted due to timeout");
        v.name = "TimeoutError", v.code = 23, f.abort(v)
      }, a.options.timeout), a.options.signal = f.signal
    }
    try {
      a.response = await s(a.request, a.options)
    } catch (f) {
      return a.error = f, a.options.onRequestError && await pt(a, a.options.onRequestError), await n(a)
    } finally {
      y && clearTimeout(y)
    }
    if ((a.response.body || a.response._bodyInit) && !ui.has(a.response.status) && a.options.method !== "HEAD") {
      const f = (a.options.parseResponse ? "json" : a.options.responseType) || ci(a.response.headers.get("content-type") || "");
      switch (f) {
        case "json": {
          const v = await a.response.text(),
            h = a.options.parseResponse || $a;
          a.response._data = h(v);
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
  return i.raw = o, i.native = (...c) => s(...c), i.create = (c = {}, l = {}) => oo({
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
  mi = qt.fetch ? (...r) => qt.fetch(...r) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")),
  fi = qt.Headers,
  yi = qt.AbortController,
  hi = oo({
    fetch: mi,
    Headers: fi,
    AbortController: yi
  });
var gi = class {
  constructor(r) {
    var s, e;
    const t = new URL((e = (s = r == null ? void 0 : r.baseURL) != null ? s : r == null ? void 0 : r.baseUrl) != null ? e : "https://api.ston.fi"),
      n = [...new URLSearchParams(t.search)].reduce((o, [i, c]) => Ce(oe({}, o), {
        [i]: c
      }), {});
    this.apiFetch = hi.create({
      baseURL: `${t.origin}${t.pathname}`,
      query: n
    })
  }
  getAsset(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/assets/{assetAddress}", {
        method: "GET",
        query: {
          assetAddress: r
        }
      }))).asset
    })
  }
  getAssets() {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/assets", {
        method: "GET"
      }))).assetList
    })
  }
  queryAssets(r) {
    return P(this, null, function*() {
      var s = r,
        {
          unconditionalAssets: e
        } = s,
        t = De(s, ["unconditionalAssets"]);
      return k(yield this.apiFetch(...E("/v1/assets/query", {
        method: "POST",
        query: Ce(oe({}, t), {
          unconditionalAsset: e
        })
      }))).assetList
    })
  }
  searchAssets(r) {
    return P(this, null, function*() {
      var s = r,
        {
          unconditionalAssets: e
        } = s,
        t = De(s, ["unconditionalAssets"]);
      return k(yield this.apiFetch(...E("/v1/assets/search", {
        method: "POST",
        query: Ce(oe({}, t), {
          unconditionalAsset: e
        })
      }))).assetList
    })
  }
  getFarm(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/farms/{farmAddress}", {
        method: "GET",
        query: {
          farmAddress: r
        }
      }))).farm
    })
  }
  getFarms(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/farms", {
        method: "GET",
        query: r
      }))).farmList
    })
  }
  getFarmsByPool(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/farms_by_pool/{poolAddress}", {
        method: "GET",
        query: {
          poolAddress: r
        }
      }))).farmList
    })
  }
  getSwapPairs(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/markets", {
        method: "GET",
        query: r
      }))).pairs
    })
  }
  getSwapStatus(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/swap/status", {
        method: "GET",
        query: r
      })))
    })
  }
  getPool(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/pools/{poolAddress}", {
        method: "GET",
        query: typeof r == "string" ? {
          poolAddress: r
        } : r
      }))).pool
    })
  }
  getPools(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/pools", {
        method: "GET",
        query: r
      }))).poolList
    })
  }
  getPoolsByAssetPair(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/pools/by_market/{asset0Address}/{asset1Address}", {
        method: "GET",
        query: r
      }))).poolList
    })
  }
  queryPools(r) {
    return P(this, null, function*() {
      var s = r,
        {
          unconditionalAssets: e
        } = s,
        t = De(s, ["unconditionalAssets"]);
      return k(yield this.apiFetch(...E("/v1/pool/query", {
        method: "POST",
        query: Ce(oe({}, t), {
          unconditionalAsset: e
        })
      }))).poolList
    })
  }
  simulateSwap(r) {
    return P(this, null, function*() {
      var s = r,
        {
          offerUnits: e
        } = s,
        t = De(s, ["offerUnits"]);
      return k(yield this.apiFetch(...E("/v1/swap/simulate", {
        method: "POST",
        query: Ce(oe({}, t), {
          units: e
        })
      })))
    })
  }
  simulateReverseSwap(r) {
    return P(this, null, function*() {
      var s = r,
        {
          askUnits: e
        } = s,
        t = De(s, ["askUnits"]);
      return k(yield this.apiFetch(...E("/v1/reverse_swap/simulate", {
        method: "POST",
        query: Ce(oe({}, t), {
          units: e
        })
      })))
    })
  }
  simulateLiquidityProvision(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/liquidity_provision/simulate", {
        method: "POST",
        query: r
      })))
    })
  }
  getJettonWalletAddress(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/jetton/{jettonAddress}/address", {
        method: "GET",
        query: r
      }))).address
    })
  }
  getWalletAsset(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/wallets/{walletAddress}/assets/{assetAddress}", {
        method: "GET",
        query: r
      }))).asset
    })
  }
  getWalletAssets(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/wallets/{walletAddress}/assets", {
        method: "GET",
        query: {
          walletAddress: r
        }
      }))).assetList
    })
  }
  getWalletFarm(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/wallets/{walletAddress}/farms/{farmAddress}", {
        method: "GET",
        query: r
      }))).farm
    })
  }
  getWalletFarms(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/wallets/{walletAddress}/farms", {
        method: "GET",
        query: typeof r == "string" ? {
          walletAddress: r
        } : r
      }))).farmList
    })
  }
  getWalletPool(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/wallets/{walletAddress}/pools/{poolAddress}", {
        method: "GET",
        query: r
      }))).pool
    })
  }
  getWalletPools(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/wallets/{walletAddress}/pools", {
        method: "GET",
        query: typeof r == "string" ? {
          walletAddress: r
        } : r
      }))).poolList
    })
  }
  getWalletOperations(r) {
    return P(this, null, function*() {
      var s = r,
        {
          since: e,
          until: t
        } = s,
        n = De(s, ["since", "until"]);
      return k(yield this.apiFetch(...E("/v1/wallets/{walletAddress}/operations", {
        method: "GET",
        query: Ce(oe({}, n), {
          since: lt(e),
          until: lt(t)
        })
      }))).operations
    })
  }
  getOperations(r) {
    return P(this, arguments, function*({
      since: s,
      until: e
    }) {
      return k(yield this.apiFetch(...E("/v1/stats/operations", {
        method: "GET",
        query: {
          since: lt(s),
          until: lt(e)
        }
      }))).operations
    })
  }
  getRouters(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/routers", {
        method: "GET",
        query: r
      }))).routerList
    })
  }
  getRouter(r) {
    return P(this, null, function*() {
      return k(yield this.apiFetch(...E("/v1/routers/{routerAddress}", {
        method: "GET",
        query: {
          routerAddress: r
        }
      }))).router
    })
  }
};

function w(r) {
  return r instanceof m.Address ? r : m.address(r.toString())
}
var Be = class {
    constructor(r, s) {
      u(this, "address");
      this.address = w(r)
    }
    static create(r) {
      return new this(r)
    }
  },
  R = class extends Be {
    async getWalletAddress(r, s) {
      return (await r.get("get_wallet_address", [{
        type: "slice",
        cell: m.beginCell().storeAddress(w(s)).endCell()
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
  ao = class extends Be {
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
  return s.storeUint(260734629, 32), s.storeUint(r.queryId, 64), s.storeCoins(BigInt(r.amount)), s.storeAddress(w(r.destination)), s.storeAddress(r.responseDestination ? w(r.responseDestination) : void 0), r.customPayload ? (s.storeBit(!0), s.storeRef(r.customPayload)) : s.storeBit(!1), s.storeCoins(BigInt(r.forwardTonAmount)), r.forwardPayload ? (s.storeBit(!0), s.storeRef(r.forwardPayload)) : s.storeBit(!1), s.endCell()
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
  _i = 15 * 60,
  G = {
    v1: "v1",
    v2_1: "v2_1",
    v2_2: "v2_2"
  },
  xt = {
    CPI: "constant_product",
    Stable: "stableswap"
  },
  be, Wr = (be = class extends Be {
    constructor(e, {
      gasConstants: t,
      ...n
    } = {}) {
      super(e, n);
      u(this, "gasConstants");
      this.gasConstants = {
        ...be.gasConstants,
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
      return m.beginCell().storeUint(pe.DIRECT_ADD_LIQUIDITY, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount0)).storeCoins(BigInt(e.amount1)).storeCoins(BigInt(e.minimumLpToMint ?? 1)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeAddress(w(e.userWalletAddress)).storeMaybeRef(e.dexCustomPayload).storeRef(m.beginCell().storeAddress(w(e.refundAddress ?? e.userWalletAddress)).storeAddress(w(e.excessesAddress ?? e.refundAddress ?? e.userWalletAddress)).endCell()).endCell()
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
  }, u(be, "version", G.v2_1), u(be, "gasConstants", {
    refund: m.toNano("0.8"),
    directAddLp: m.toNano("0.3"),
    resetGas: m.toNano("0.02")
  }), be),
  Ae, rt = (Ae = class extends R {
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
        cell: m.beginCell().storeAddress(w(t.ownerAddress)).endCell()
      }])).stack.readAddress()
    }
    async getLpAccount(e, t) {
      const n = await this.getLpAccountAddress(e, t);
      return Wr.create(n)
    }
    async getJettonWallet(e, t) {
      const n = await this.getWalletAddress(e, t.ownerAddress);
      return ao.create(n)
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
  }, u(Ae, "version", G.v2_1), u(Ae, "gasConstants", {
    collectFees: m.toNano("0.4"),
    burn: m.toNano("0.8")
  }), Ae),
  yr, Vr = (yr = class extends rt {
    async getPoolData(r) {
      return {
        ...(await this.implGetPoolData(r)).commonPoolData
      }
    }
  }, u(yr, "dexType", xt.CPI), yr),
  we, zr = (we = class extends Be {
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
  }, u(we, "version", G.v2_1), u(we, "gasConstants", {
    withdrawFee: m.toNano("0.3")
  }), we),
  je = {
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
  io = "EQB3ncyBUTjZUA5EnFKR5_EnOMI9V1tTEAAPaiU71gc4TiUt",
  co = class extends Error {
    constructor({
      expected: r,
      received: s
    }) {
      super(`The version of the provided pTON (${s}) does not match the expected version (${r})`)
    }
  },
  Te, It = (Te = class extends Be {
    constructor(e, {
      gasConstants: t,
      txDeadline: n,
      ...o
    } = {}) {
      super(e, o);
      u(this, "gasConstants");
      u(this, "txDeadline");
      if (this.address.equals(m.Address.parse(io))) throw Error(["You are trying to create an instance v2.1 Router with a v1 address", "Please use the appropriate class for the v1 Router. Otherwise, all the funds will be permanently lost."].join(`
`));
      this.gasConstants = {
        ...Te.gasConstants,
        ...t
      }, this.txDeadline = n ?? _i
    }
    async createSwapBody(e) {
      if (e.referralValue && (BigInt(e.referralValue) < 0 || BigInt(e.referralValue) > 100)) throw Error("'referralValue' should be in range [0, 100] BPS");
      return m.beginCell().storeUint(pe.SWAP, 32).storeAddress(w(e.askJettonWalletAddress)).storeAddress(w(e.refundAddress)).storeAddress(w(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(m.beginCell().storeCoins(BigInt(e.minAskAmount)).storeAddress(w(e.receiverAddress)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).storeCoins(BigInt(e.refundForwardGasAmount ?? 0)).storeMaybeRef(e.refundPayload).storeUint(BigInt(e.referralValue ?? 10), 16).storeAddress(e.referralAddress ? w(e.referralAddress) : null).endCell()).endCell()
    }
    async createCrossSwapBody(e) {
      if (e.referralValue && (BigInt(e.referralValue) < 0 || BigInt(e.referralValue) > 100)) throw Error("'referralValue' should be in range [0, 100] BPS");
      return m.beginCell().storeUint(pe.CROSS_SWAP, 32).storeAddress(w(e.askJettonWalletAddress)).storeAddress(w(e.refundAddress)).storeAddress(w(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(m.beginCell().storeCoins(BigInt(e.minAskAmount)).storeAddress(w(e.receiverAddress)).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).storeCoins(BigInt(e.refundForwardGasAmount ?? 0)).storeMaybeRef(e.refundPayload).storeUint(BigInt(e.referralValue ?? 10), 16).storeAddress(e.referralAddress ? w(e.referralAddress) : null).endCell()).endCell()
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
      return m.beginCell().storeUint(pe.PROVIDE_LP, 32).storeAddress(w(e.routerWalletAddress)).storeAddress(w(e.refundAddress)).storeAddress(w(e.excessesAddress ?? e.refundAddress)).storeUint(e.deadline ?? this.defaultDeadline, 64).storeRef(m.beginCell().storeCoins(BigInt(e.minLpOut)).storeAddress(w(e.receiverAddress)).storeUint(e.bothPositive ? 1 : 0, 1).storeCoins(BigInt(e.dexCustomPayloadForwardGasAmount ?? 0)).storeMaybeRef(e.dexCustomPayload).endCell()).endCell()
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
      if (e.version !== je.v2_1) throw new co({
        expected: je.v2_1,
        received: e.version
      })
    }
    async getPoolAddress(e, t) {
      return (await e.get("get_pool_address", [{
        type: "slice",
        cell: m.beginCell().storeAddress(w(t.token0)).endCell()
      }, {
        type: "slice",
        cell: m.beginCell().storeAddress(w(t.token1)).endCell()
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
        cell: m.beginCell().storeAddress(w(t.user)).endCell()
      }, {
        type: "slice",
        cell: m.beginCell().storeAddress(w(t.tokenWallet)).endCell()
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
  }, u(Te, "version", G.v2_1), u(Te, "gasConstants", {
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
  }), Te),
  hr, lo = (hr = class extends It {
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
  _r, po = (_r = class extends It {
    async getPool(r, s) {
      const e = await this.getPoolAddressByJettonMinters(r, s);
      return Kr.create(e)
    }
  }, u(_r, "dexType", xt.Stable), _r),
  gt, vi = (gt = class extends It {}, u(gt, "CPI", lo), u(gt, "Stable", po), gt),
  _t, bi = (_t = class extends rt {}, u(_t, "CPI", Vr), u(_t, "Stable", Kr), _t),
  Ai = {
    DEPLOY_WALLET: 1824798067
  },
  re, Hr = (re = class extends R {
    constructor(e = re.address, {
      gasConstants: t,
      ...n
    } = {}) {
      super(e, n);
      u(this, "version", re.version);
      u(this, "gasConstants");
      this.gasConstants = {
        ...re.gasConstants,
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
      return m.beginCell().storeUint(Ai.DEPLOY_WALLET, 32).storeUint(e.queryId ?? 0, 64).storeAddress(w(e.ownerAddress)).endCell()
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
  }, u(re, "version", je.v1), u(re, "address", m.address("EQCM3B12QK1e4yZSf8GtBRT0aLMNyEsBc_DhVfRRtOEffLez")), u(re, "gasConstants", {
    deployWallet: m.toNano("1.05")
  }), re),
  Ns = {
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
      return t.storeUint(Ns.TON_TRANSFER, 32), t.storeUint(e.queryId ?? 0, 64), t.storeCoins(BigInt(e.tonAmount)), t.storeAddress(w(e.refundAddress)), e.forwardPayload && (t.storeBit(!0), t.storeRef(e.forwardPayload)), t.endCell()
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
      return m.beginCell().storeUint(Ns.DEPLOY_WALLET, 32).storeUint(e.queryId ?? 0, 64).storeAddress(w(e.ownerAddress)).storeAddress(w(e.excessAddress)).endCell()
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
  }, u(de, "version", je.v2_1), u(de, "gasConstants", {
    tonTransfer: m.toNano("0.01"),
    deployWallet: m.toNano("0.1")
  }), de),
  wi = {
    Router: vi,
    Pool: bi,
    LpAccount: Wr,
    Vault: zr,
    pTON: Yr
  },
  vr, Ot = (vr = class extends Wr {}, u(vr, "version", G.v2_2), vr),
  br, uo = (br = class extends rt {
    async getLpAccount(r, s) {
      const e = await this.getLpAccountAddress(r, s);
      return Ot.create(e)
    }
  }, u(br, "version", G.v2_2), br),
  Ar, Ct = (Ar = class extends zr {}, u(Ar, "version", G.v2_2), Ar),
  wr, Ti = (wr = class extends It {
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
  }, u(wr, "version", G.v2_2), wr),
  Tr, mo = (Tr = class extends Vr {
    async getLpAccount(r, s) {
      const e = await this.getLpAccountAddress(r, s);
      return Ot.create(e)
    }
  }, u(Tr, "version", G.v2_2), Tr),
  $r, $i = ($r = class extends lo {
    async getPool(r, s) {
      const e = await this.getPoolAddressByJettonMinters(r, s);
      return mo.create(e)
    }
    async getVault(r, s) {
      const e = r.open(R.create(s.tokenMinter)),
        t = await this.getVaultAddress(r, {
          user: s.user,
          tokenWallet: await e.getWalletAddress(this.address)
        });
      return Ct.create(t)
    }
  }, u($r, "version", G.v2_2), $r),
  Sr, fo = (Sr = class extends Kr {
    async getLpAccount(r, s) {
      const e = await this.getLpAccountAddress(r, s);
      return Ot.create(e)
    }
  }, u(Sr, "version", G.v2_2), Sr),
  qr, Si = (qr = class extends po {
    async getPool(r, s) {
      const e = await this.getPoolAddressByJettonMinters(r, s);
      return fo.create(e)
    }
    async getVault(r, s) {
      const e = r.open(R.create(s.tokenMinter)),
        t = await this.getVaultAddress(r, {
          user: s.user,
          tokenWallet: await e.getWalletAddress(this.address)
        });
      return Ct.create(t)
    }
  }, u(qr, "version", G.v2_2), qr),
  vt, qi = (vt = class extends Ti {}, u(vt, "CPI", $i), u(vt, "Stable", Si), vt),
  bt, ji = (bt = class extends uo {}, u(bt, "CPI", mo), u(bt, "Stable", fo), bt),
  Pi = {
    Router: qi,
    Pool: ji,
    LpAccount: Ot,
    Vault: Ct,
    pTON: Yr
  },
  $e, yo = ($e = class extends Be {
    constructor(e, {
      gasConstants: t,
      ...n
    } = {}) {
      super(e, n);
      u(this, "gasConstants");
      this.gasConstants = {
        ...$e.gasConstants,
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
  }, u($e, "version", G.v1), u($e, "gasConstants", {
    refund: m.toNano("0.3"),
    directAddLp: m.toNano("0.3"),
    resetGas: m.toNano("0.3")
  }), $e),
  Se, ho = (Se = class extends R {
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
      return m.beginCell().storeUint(Ne.BURN, 32).storeUint((e == null ? void 0 : e.queryId) ?? 0, 64).storeCoins(BigInt(e.amount)).storeAddress(w(e.responseAddress)).storeMaybeRef().endCell()
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
        cell: m.beginCell().storeAddress(w(t.jettonWallet)).endCell()
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
        cell: m.beginCell().storeAddress(w(t.ownerAddress)).endCell()
      }])).stack.readAddress()
    }
    async getJettonWallet(e, t) {
      const n = await this.getWalletAddress(e, t.ownerAddress);
      return ao.create(n)
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
      return yo.create(n)
    }
  }, u(Se, "version", G.v1), u(Se, "gasConstants", {
    collectFees: m.toNano("1.1"),
    burn: m.toNano("0.5")
  }), Se),
  ae, ki = (ae = class extends Be {
    constructor(e = ae.address, {
      gasConstants: t,
      ...n
    } = {}) {
      super(e, n);
      u(this, "gasConstants");
      this.gasConstants = {
        ...ae.gasConstants,
        ...t
      }
    }
    async createSwapBody(e) {
      const t = m.beginCell();
      return t.storeUint(Ne.SWAP, 32), t.storeAddress(w(e.askJettonWalletAddress)), t.storeCoins(BigInt(e.minAskAmount)), t.storeAddress(w(e.userWalletAddress)), e.referralAddress ? (t.storeUint(1, 1), t.storeAddress(w(e.referralAddress))) : t.storeUint(0, 1), t.endCell()
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
      return m.beginCell().storeUint(Ne.PROVIDE_LP, 32).storeAddress(w(e.routerWalletAddress)).storeCoins(BigInt(e.minLpOut)).endCell()
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
      if (e.version !== je.v1) throw new co({
        expected: je.v1,
        received: e.version
      })
    }
    async getPoolAddress(e, t) {
      return (await e.get("get_pool_address", [{
        type: "slice",
        cell: m.beginCell().storeAddress(w(t.token0)).endCell()
      }, {
        type: "slice",
        cell: m.beginCell().storeAddress(w(t.token1)).endCell()
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
      return ho.create(n)
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
  }, u(ae, "version", G.v1), u(ae, "address", m.address(io)), u(ae, "gasConstants", {
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
  }), ae),
  Ei = {
    Router: ki,
    Pool: ho,
    LpAccount: yo,
    pTON: Hr
  },
  xi = {
    [G.v1]: Ei,
    [G.v2_1]: wi,
    [G.v2_2]: Pi
  },
  Ii = {
    [je.v1]: Hr,
    [je.v2_1]: Yr
  },
  L = {},
  He = function(r) {
    return r && r.Math === Math && r
  },
  ee = He(typeof globalThis == "object" && globalThis) || He(typeof window == "object" && window) || He(typeof self == "object" && self) || He(typeof ze == "object" && ze) || He(typeof ze == "object" && ze) || function() {
    return this
  }() || Function("return this")(),
  J = function(r) {
    try {
      return !!r()
    } catch {
      return !0
    }
  },
  Oi = J,
  Rt = !Oi(function() {
    var r = (function() {}).bind();
    return typeof r != "function" || r.hasOwnProperty("prototype")
  }),
  Ci = Rt,
  go = Function.prototype,
  Bs = go.apply,
  Ls = go.call,
  Qr = typeof Reflect == "object" && Reflect.apply || (Ci ? Ls.bind(Bs) : function() {
    return Ls.apply(Bs, arguments)
  }),
  _o = Rt,
  vo = Function.prototype,
  kr = vo.call,
  Ri = _o && vo.bind.bind(kr, kr),
  V = _o ? Ri : function(r) {
    return function() {
      return kr.apply(r, arguments)
    }
  },
  bo = V,
  Ni = bo({}.toString),
  Bi = bo("".slice),
  Pe = function(r) {
    return Bi(Ni(r), 8, -1)
  },
  Li = Pe,
  Fi = V,
  Ao = function(r) {
    if (Li(r) === "Function") return Fi(r)
  },
  Jt = typeof document == "object" && document.all,
  Q = typeof Jt > "u" && Jt !== void 0 ? function(r) {
    return typeof r == "function" || r === Jt
  } : function(r) {
    return typeof r == "function"
  },
  wo = {},
  Di = J,
  me = !Di(function() {
    return Object.defineProperty({}, 1, {
      get: function() {
        return 7
      }
    })[1] !== 7
  }),
  Gi = Rt,
  ut = Function.prototype.call,
  Le = Gi ? ut.bind(ut) : function() {
    return ut.apply(ut, arguments)
  },
  To = {},
  $o = {}.propertyIsEnumerable,
  So = Object.getOwnPropertyDescriptor,
  Mi = So && !$o.call({
    1: 2
  }, 1);
To.f = Mi ? function(s) {
  var e = So(this, s);
  return !!e && e.enumerable
} : $o;
var Xr = function(r, s) {
    return {
      enumerable: !(r & 1),
      configurable: !(r & 2),
      writable: !(r & 4),
      value: s
    }
  },
  Ui = V,
  Ji = J,
  Wi = Pe,
  Wt = Object,
  Vi = Ui("".split),
  zi = Ji(function() {
    return !Wt("z").propertyIsEnumerable(0)
  }) ? function(r) {
    return Wi(r) === "String" ? Vi(r, "") : Wt(r)
  } : Wt,
  qo = function(r) {
    return r == null
  },
  Ki = qo,
  Hi = TypeError,
  Nt = function(r) {
    if (Ki(r)) throw new Hi("Can't call method on " + r);
    return r
  },
  Yi = zi,
  Qi = Nt,
  st = function(r) {
    return Yi(Qi(r))
  },
  Xi = Q,
  ie = function(r) {
    return typeof r == "object" ? r !== null : Xi(r)
  },
  nt = {},
  Vt = nt,
  zt = ee,
  Zi = Q,
  Fs = function(r) {
    return Zi(r) ? r : void 0
  },
  ot = function(r, s) {
    return arguments.length < 2 ? Fs(Vt[r]) || Fs(zt[r]) : Vt[r] && Vt[r][s] || zt[r] && zt[r][s]
  },
  ec = V,
  tc = ec({}.isPrototypeOf),
  rc = ee,
  Ds = rc.navigator,
  Gs = Ds && Ds.userAgent,
  sc = Gs ? String(Gs) : "",
  jo = ee,
  Kt = sc,
  Ms = jo.process,
  Us = jo.Deno,
  Js = Ms && Ms.versions || Us && Us.version,
  Ws = Js && Js.v8,
  te, jt;
Ws && (te = Ws.split("."), jt = te[0] > 0 && te[0] < 4 ? 1 : +(te[0] + te[1]));
!jt && Kt && (te = Kt.match(/Edge\/(\d+)/), (!te || te[1] >= 74) && (te = Kt.match(/Chrome\/(\d+)/), te && (jt = +te[1])));
var nc = jt,
  Vs = nc,
  oc = J,
  ac = ee,
  ic = ac.String,
  Bt = !!Object.getOwnPropertySymbols && !oc(function() {
    var r = Symbol("symbol detection");
    return !ic(r) || !(Object(r) instanceof Symbol) || !Symbol.sham && Vs && Vs < 41
  }),
  cc = Bt,
  Po = cc && !Symbol.sham && typeof Symbol.iterator == "symbol",
  dc = ot,
  lc = Q,
  pc = tc,
  uc = Po,
  mc = Object,
  Zr = uc ? function(r) {
    return typeof r == "symbol"
  } : function(r) {
    var s = dc("Symbol");
    return lc(s) && pc(s.prototype, mc(r))
  },
  fc = String,
  yc = function(r) {
    try {
      return fc(r)
    } catch {
      return "Object"
    }
  },
  hc = Q,
  gc = yc,
  _c = TypeError,
  ko = function(r) {
    if (hc(r)) return r;
    throw new _c(gc(r) + " is not a function")
  },
  vc = ko,
  bc = qo,
  Ac = function(r, s) {
    var e = r[s];
    return bc(e) ? void 0 : vc(e)
  },
  Ht = Le,
  Yt = Q,
  Qt = ie,
  wc = TypeError,
  Tc = function(r, s) {
    var e, t;
    if (s === "string" && Yt(e = r.toString) && !Qt(t = Ht(e, r)) || Yt(e = r.valueOf) && !Qt(t = Ht(e, r)) || s !== "string" && Yt(e = r.toString) && !Qt(t = Ht(e, r))) return t;
    throw new wc("Can't convert object to primitive value")
  },
  Eo = {
    exports: {}
  },
  zs = ee,
  $c = Object.defineProperty,
  Sc = function(r, s) {
    try {
      $c(zs, r, {
        value: s,
        configurable: !0,
        writable: !0
      })
    } catch {
      zs[r] = s
    }
    return s
  },
  qc = ee,
  jc = Sc,
  Ks = "__core-js_shared__",
  Hs = Eo.exports = qc[Ks] || jc(Ks, {});
(Hs.versions || (Hs.versions = [])).push({
  version: "3.38.1",
  mode: "pure",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var xo = Eo.exports,
  Ys = xo,
  Io = function(r, s) {
    return Ys[r] || (Ys[r] = s || {})
  },
  Pc = Nt,
  kc = Object,
  es = function(r) {
    return kc(Pc(r))
  },
  Ec = V,
  xc = es,
  Ic = Ec({}.hasOwnProperty),
  ke = Object.hasOwn || function(s, e) {
    return Ic(xc(s), e)
  },
  Oc = V,
  Cc = 0,
  Rc = Math.random(),
  Nc = Oc(1 .toString),
  Lt = function(r) {
    return "Symbol(" + (r === void 0 ? "" : r) + ")_" + Nc(++Cc + Rc, 36)
  },
  Bc = ee,
  Lc = Io,
  Qs = ke,
  Fc = Lt,
  Dc = Bt,
  Gc = Po,
  Ke = Bc.Symbol,
  Xt = Lc("wks"),
  Mc = Gc ? Ke.for || Ke : Ke && Ke.withoutSetter || Fc,
  ts = function(r) {
    return Qs(Xt, r) || (Xt[r] = Dc && Qs(Ke, r) ? Ke[r] : Mc("Symbol." + r)), Xt[r]
  },
  Uc = Le,
  Xs = ie,
  Zs = Zr,
  Jc = Ac,
  Wc = Tc,
  Vc = ts,
  zc = TypeError,
  Kc = Vc("toPrimitive"),
  Oo = function(r, s) {
    if (!Xs(r) || Zs(r)) return r;
    var e = Jc(r, Kc),
      t;
    if (e) {
      if (s === void 0 && (s = "default"), t = Uc(e, r, s), !Xs(t) || Zs(t)) return t;
      throw new zc("Can't convert object to primitive value")
    }
    return s === void 0 && (s = "number"), Wc(r, s)
  },
  Hc = Oo,
  Yc = Zr,
  Co = function(r) {
    var s = Hc(r, "string");
    return Yc(s) ? s : s + ""
  },
  Qc = ee,
  en = ie,
  Er = Qc.document,
  Xc = en(Er) && en(Er.createElement),
  Ro = function(r) {
    return Xc ? Er.createElement(r) : {}
  },
  Zc = me,
  ed = J,
  td = Ro,
  No = !Zc && !ed(function() {
    return Object.defineProperty(td("div"), "a", {
      get: function() {
        return 7
      }
    }).a !== 7
  }),
  rd = me,
  sd = Le,
  nd = To,
  od = Xr,
  ad = st,
  id = Co,
  cd = ke,
  dd = No,
  tn = Object.getOwnPropertyDescriptor;
wo.f = rd ? tn : function(s, e) {
  if (s = ad(s), e = id(e), dd) try {
    return tn(s, e)
  } catch {}
  if (cd(s, e)) return od(!sd(nd.f, s, e), s[e])
};
var ld = J,
  pd = Q,
  ud = /#|\.prototype\./,
  at = function(r, s) {
    var e = fd[md(r)];
    return e === hd ? !0 : e === yd ? !1 : pd(s) ? ld(s) : !!s
  },
  md = at.normalize = function(r) {
    return String(r).replace(ud, ".").toLowerCase()
  },
  fd = at.data = {},
  yd = at.NATIVE = "N",
  hd = at.POLYFILL = "P",
  gd = at,
  rn = Ao,
  _d = ko,
  vd = Rt,
  bd = rn(rn.bind),
  Ad = function(r, s) {
    return _d(r), s === void 0 ? r : vd ? bd(r, s) : function() {
      return r.apply(s, arguments)
    }
  },
  it = {},
  wd = me,
  Td = J,
  Bo = wd && Td(function() {
    return Object.defineProperty(function() {}, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42
  }),
  $d = ie,
  Sd = String,
  qd = TypeError,
  rs = function(r) {
    if ($d(r)) return r;
    throw new qd(Sd(r) + " is not an object")
  },
  jd = me,
  Pd = No,
  kd = Bo,
  mt = rs,
  sn = Co,
  Ed = TypeError,
  Zt = Object.defineProperty,
  xd = Object.getOwnPropertyDescriptor,
  er = "enumerable",
  tr = "configurable",
  rr = "writable";
it.f = jd ? kd ? function(s, e, t) {
  if (mt(s), e = sn(e), mt(t), typeof s == "function" && e === "prototype" && "value" in t && rr in t && !t[rr]) {
    var n = xd(s, e);
    n && n[rr] && (s[e] = t.value, t = {
      configurable: tr in t ? t[tr] : n[tr],
      enumerable: er in t ? t[er] : n[er],
      writable: !1
    })
  }
  return Zt(s, e, t)
} : Zt : function(s, e, t) {
  if (mt(s), e = sn(e), mt(t), Pd) try {
    return Zt(s, e, t)
  } catch {}
  if ("get" in t || "set" in t) throw new Ed("Accessors not supported");
  return "value" in t && (s[e] = t.value), s
};
var Id = me,
  Od = it,
  Cd = Xr,
  Lo = Id ? function(r, s, e) {
    return Od.f(r, s, Cd(1, e))
  } : function(r, s, e) {
    return r[s] = e, r
  },
  Ye = ee,
  Rd = Qr,
  Nd = Ao,
  Bd = Q,
  Ld = wo.f,
  Fd = gd,
  Ge = nt,
  Dd = Ad,
  Me = Lo,
  nn = ke,
  Gd = function(r) {
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
      return Rd(r, this, arguments)
    };
    return s.prototype = r.prototype, s
  },
  Ee = function(r, s) {
    var e = r.target,
      t = r.global,
      n = r.stat,
      o = r.proto,
      i = t ? Ye : n ? Ye[e] : Ye[e] && Ye[e].prototype,
      c = t ? Ge : Ge[e] || Me(Ge, e, {})[e],
      l = c.prototype,
      d, a, y, g, f, v, h, _, S;
    for (g in s) d = Fd(t ? g : e + (n ? "." : "#") + g, r.forced), a = !d && i && nn(i, g), v = c[g], a && (r.dontCallGetSet ? (S = Ld(i, g), h = S && S.value) : h = i[g]), f = a && h ? h : s[g], !(!d && !o && typeof v == typeof f) && (r.bind && a ? _ = Dd(f, Ye) : r.wrap && a ? _ = Gd(f) : o && Bd(f) ? _ = Nd(f) : _ = f, (r.sham || f && f.sham || v && v.sham) && Me(_, "sham", !0), Me(c, g, _), o && (y = e + "Prototype", nn(Ge, y) || Me(Ge, y, {}), Me(Ge[y], g, f), r.real && l && (d || !l[g]) && Me(l, g, f)))
  },
  Md = Math.ceil,
  Ud = Math.floor,
  Jd = Math.trunc || function(s) {
    var e = +s;
    return (e > 0 ? Ud : Md)(e)
  },
  Wd = Jd,
  ss = function(r) {
    var s = +r;
    return s !== s || s === 0 ? 0 : Wd(s)
  },
  Vd = ss,
  zd = Math.max,
  Kd = Math.min,
  Hd = function(r, s) {
    var e = Vd(r);
    return e < 0 ? zd(e + s, 0) : Kd(e, s)
  },
  Yd = ss,
  Qd = Math.min,
  Fo = function(r) {
    var s = Yd(r);
    return s > 0 ? Qd(s, 9007199254740991) : 0
  },
  Xd = Fo,
  Do = function(r) {
    return Xd(r.length)
  },
  Zd = st,
  el = Hd,
  tl = Do,
  on = function(r) {
    return function(s, e, t) {
      var n = Zd(s),
        o = tl(n);
      if (o === 0) return !r && -1;
      var i = el(t, o),
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
  rl = {
    includes: on(!0),
    indexOf: on(!1)
  },
  Ft = {},
  sl = V,
  sr = ke,
  nl = st,
  ol = rl.indexOf,
  al = Ft,
  an = sl([].push),
  Go = function(r, s) {
    var e = nl(r),
      t = 0,
      n = [],
      o;
    for (o in e) !sr(al, o) && sr(e, o) && an(n, o);
    for (; s.length > t;) sr(e, o = s[t++]) && (~ol(n, o) || an(n, o));
    return n
  },
  ns = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
  il = Go,
  cl = ns,
  Mo = Object.keys || function(s) {
    return il(s, cl)
  },
  dl = Ee,
  ll = es,
  Uo = Mo,
  pl = J,
  ul = pl(function() {
    Uo(1)
  });
dl({
  target: "Object",
  stat: !0,
  forced: ul
}, {
  keys: function(s) {
    return Uo(ll(s))
  }
});
var ml = Pe,
  Jo = Array.isArray || function(s) {
    return ml(s) === "Array"
  },
  fl = ts,
  yl = fl("toStringTag"),
  Wo = {};
Wo[yl] = "z";
var hl = String(Wo) === "[object z]",
  gl = hl,
  _l = Q,
  At = Pe,
  vl = ts,
  bl = vl("toStringTag"),
  Al = Object,
  wl = At(function() {
    return arguments
  }()) === "Arguments",
  Tl = function(r, s) {
    try {
      return r[s]
    } catch {}
  },
  $l = gl ? At : function(r) {
    var s, e, t;
    return r === void 0 ? "Undefined" : r === null ? "Null" : typeof(e = Tl(s = Al(r), bl)) == "string" ? e : wl ? At(s) : (t = At(s)) === "Object" && _l(s.callee) ? "Arguments" : t
  },
  Sl = $l,
  ql = String,
  ct = function(r) {
    if (Sl(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return ql(r)
  },
  jl = me,
  Pl = it,
  kl = Xr,
  Vo = function(r, s, e) {
    jl ? Pl.f(r, s, kl(0, e)) : r[s] = e
  },
  os = V,
  El = ke,
  ft = SyntaxError,
  xl = parseInt,
  Il = String.fromCharCode,
  Ol = os("".charAt),
  cn = os("".slice),
  dn = os(/./.exec),
  ln = {
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
  Cl = /^[\da-f]{4}$/i,
  Rl = /^[\u0000-\u001F]$/,
  zo = function(r, s) {
    for (var e = !0, t = ""; s < r.length;) {
      var n = Ol(r, s);
      if (n === "\\") {
        var o = cn(r, s, s + 2);
        if (El(ln, o)) t += ln[o], s += 2;
        else if (o === "\\u") {
          s += 2;
          var i = cn(r, s, s + 4);
          if (!dn(Cl, i)) throw new ft("Bad Unicode escape at: " + s);
          t += Il(xl(i, 16)), s += 4
        } else throw new ft('Unknown escape sequence: "' + o + '"')
      } else if (n === '"') {
        e = !1, s++;
        break
      } else {
        if (dn(Rl, n)) throw new ft("Bad control character in string literal at: " + s);
        t += n, s++
      }
    }
    if (e) throw new ft("Unterminated string at: " + s);
    return {
      value: t,
      end: s
    }
  },
  Nl = Ee,
  Bl = me,
  as = ee,
  Ll = ot,
  Dt = V,
  Fl = Le,
  Ko = Q,
  Dl = ie,
  Gl = Jo,
  Ml = ke,
  Ul = ct,
  pn = Do,
  xr = Vo,
  Ho = J,
  Jl = zo,
  Wl = Bt,
  un = as.JSON,
  Vl = as.Number,
  Je = as.SyntaxError,
  is = un && un.parse,
  zl = Ll("Object", "keys"),
  Kl = Object.getOwnPropertyDescriptor,
  M = Dt("".charAt),
  nr = Dt("".slice),
  or = Dt(/./.exec),
  mn = Dt([].push),
  ar = /^\d$/,
  Hl = /^[1-9]$/,
  Yl = /^[\d-]$/,
  Qe = /^[\t\n\r ]$/,
  ir = 0,
  fn = 1,
  Ql = function(r, s) {
    r = Ul(r);
    var e = new Or(r, 0),
      t = e.parse(),
      n = t.value,
      o = e.skip(Qe, t.end);
    if (o < r.length) throw new Je('Unexpected extra character: "' + M(r, o) + '" after the parsed data at: ' + o);
    return Ko(s) ? Ir({
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
    if (Dl(n)) {
      var g = Gl(n),
        f = o ? t.nodes : g ? [] : {};
      if (g)
        for (c = f.length, d = pn(n), a = 0; a < d; a++) yn(n, a, Ir(n, "" + a, e, a < c ? f[a] : void 0));
      else
        for (l = zl(n), d = pn(l), a = 0; a < d; a++) y = l[a], yn(n, y, Ir(n, y, e, Ml(f, y) ? f[y] : void 0))
    }
    return Fl(e, r, s, n, i)
  },
  yn = function(r, s, e) {
    if (Bl) {
      var t = Kl(r, s);
      if (t && !t.configurable) return
    }
    e === void 0 ? delete r[s] : xr(r, s, e)
  },
  Xl = function(r, s, e, t) {
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
      t = M(r, s);
    if (or(Yl, t)) return e.number();
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
    return new Xl(s, t, r ? null : nr(this.source, e, t), n)
  },
  object: function() {
    for (var r = this.source, s = this.index + 1, e = !1, t = {}, n = {}; s < r.length;) {
      if (s = this.until(['"', "}"], s), M(r, s) === "}" && !e) {
        s++;
        break
      }
      var o = this.fork(s).string(),
        i = o.value;
      s = o.end, s = this.until([":"], s) + 1, s = this.skip(Qe, s), o = this.fork(s).parse(), xr(n, i, o), xr(t, i, o.value), s = this.until([",", "}"], o.end);
      var c = M(r, s);
      if (c === ",") e = !0, s++;
      else if (c === "}") {
        s++;
        break
      }
    }
    return this.node(fn, t, this.index, s, n)
  },
  array: function() {
    for (var r = this.source, s = this.index + 1, e = !1, t = [], n = []; s < r.length;) {
      if (s = this.skip(Qe, s), M(r, s) === "]" && !e) {
        s++;
        break
      }
      var o = this.fork(s).parse();
      if (mn(n, o), mn(t, o.value), s = this.until([",", "]"], o.end), M(r, s) === ",") e = !0, s++;
      else if (M(r, s) === "]") {
        s++;
        break
      }
    }
    return this.node(fn, t, this.index, s, n)
  },
  string: function() {
    var r = this.index,
      s = Jl(this.source, this.index + 1);
    return this.node(ir, s.value, r, s.end)
  },
  number: function() {
    var r = this.source,
      s = this.index,
      e = s;
    if (M(r, e) === "-" && e++, M(r, e) === "0") e++;
    else if (or(Hl, M(r, e))) e = this.skip(ar, e + 1);
    else throw new Je("Failed to parse number at: " + e);
    if (M(r, e) === "." && (e = this.skip(ar, e + 1)), M(r, e) === "e" || M(r, e) === "E") {
      e++, (M(r, e) === "+" || M(r, e) === "-") && e++;
      var t = e;
      if (e = this.skip(ar, e), t === e) throw new Je("Failed to parse number's exponent value at: " + e)
    }
    return this.node(ir, Vl(nr(r, s, e)), s, e)
  },
  keyword: function(r) {
    var s = "" + r,
      e = this.index,
      t = e + s.length;
    if (nr(this.source, e, t) !== s) throw new Je("Failed to parse value at: " + e);
    return this.node(ir, r, e, t)
  },
  skip: function(r, s) {
    for (var e = this.source; s < e.length && or(r, M(e, s)); s++);
    return s
  },
  until: function(r, s) {
    s = this.skip(Qe, s);
    for (var e = M(this.source, s), t = 0; t < r.length; t++)
      if (r[t] === e) return s;
    throw new Je('Unexpected character: "' + e + '" at: ' + s)
  }
};
var Zl = Ho(function() {
    var r = "9007199254740993",
      s;
    return is(r, function(e, t, n) {
      s = n.source
    }), s !== r
  }),
  ep = Wl && !Ho(function() {
    return 1 / is("-0 	") !== -1 / 0
  });
Nl({
  target: "JSON",
  stat: !0,
  forced: Zl
}, {
  parse: function(s, e) {
    return ep && !Ko(e) ? is(s) : Ql(s, e)
  }
});
var tp = nt,
  rp = tp.JSON.parse,
  Yo = {},
  sp = me,
  np = Bo,
  op = it,
  ap = rs,
  ip = st,
  cp = Mo;
Yo.f = sp && !np ? Object.defineProperties : function(s, e) {
  ap(s);
  for (var t = ip(e), n = cp(e), o = n.length, i = 0, c; o > i;) op.f(s, c = n[i++], t[c]);
  return s
};
var dp = ot,
  lp = dp("document", "documentElement"),
  pp = Io,
  up = Lt,
  hn = pp("keys"),
  Qo = function(r) {
    return hn[r] || (hn[r] = up(r))
  },
  mp = rs,
  fp = Yo,
  gn = ns,
  yp = Ft,
  hp = lp,
  gp = Ro,
  _p = Qo,
  _n = ">",
  vn = "<",
  Cr = "prototype",
  Rr = "script",
  Xo = _p("IE_PROTO"),
  cr = function() {},
  Zo = function(r) {
    return vn + Rr + _n + r + vn + "/" + Rr + _n
  },
  bn = function(r) {
    r.write(Zo("")), r.close();
    var s = r.parentWindow.Object;
    return r = null, s
  },
  vp = function() {
    var r = gp("iframe"),
      s = "java" + Rr + ":",
      e;
    return r.style.display = "none", hp.appendChild(r), r.src = String(s), e = r.contentWindow.document, e.open(), e.write(Zo("document.F=Object")), e.close(), e.F
  },
  yt, wt = function() {
    try {
      yt = new ActiveXObject("htmlfile")
    } catch {}
    wt = typeof document < "u" ? document.domain && yt ? bn(yt) : vp() : bn(yt);
    for (var r = gn.length; r--;) delete wt[Cr][gn[r]];
    return wt()
  };
yp[Xo] = !0;
var bp = Object.create || function(s, e) {
    var t;
    return s !== null ? (cr[Cr] = mp(s), t = new cr, cr[Cr] = null, t[Xo] = s) : t = wt(), e === void 0 ? t : fp.f(t, e)
  },
  Ap = Ee,
  wp = me,
  Tp = bp;
Ap({
  target: "Object",
  stat: !0,
  sham: !wp
}, {
  create: Tp
});
var $p = J,
  cs = !$p(function() {
    return Object.isExtensible(Object.preventExtensions({}))
  }),
  ea = {
    exports: {}
  },
  ds = {},
  Sp = Go,
  qp = ns,
  jp = qp.concat("length", "prototype");
ds.f = Object.getOwnPropertyNames || function(s) {
  return Sp(s, jp)
};
var ta = {},
  Pp = V,
  ra = Pp([].slice),
  kp = Pe,
  Ep = st,
  sa = ds.f,
  xp = ra,
  na = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
  Ip = function(r) {
    try {
      return sa(r)
    } catch {
      return xp(na)
    }
  };
ta.f = function(s) {
  return na && kp(s) === "Window" ? Ip(s) : sa(Ep(s))
};
var Op = J,
  Cp = Op(function() {
    if (typeof ArrayBuffer == "function") {
      var r = new ArrayBuffer(8);
      Object.isExtensible(r) && Object.defineProperty(r, "a", {
        value: 8
      })
    }
  }),
  Rp = J,
  Np = ie,
  Bp = Pe,
  An = Cp,
  Tt = Object.isExtensible,
  Lp = Rp(function() {
    Tt(1)
  }),
  Fp = Lp || An ? function(s) {
    return !Np(s) || An && Bp(s) === "ArrayBuffer" ? !1 : Tt ? Tt(s) : !0
  } : Tt,
  Dp = Ee,
  Gp = V,
  Mp = Ft,
  Up = ie,
  ls = ke,
  Jp = it.f,
  wn = ds,
  Wp = ta,
  ps = Fp,
  Vp = Lt,
  zp = cs,
  oa = !1,
  ue = Vp("meta"),
  Kp = 0,
  us = function(r) {
    Jp(r, ue, {
      value: {
        objectID: "O" + Kp++,
        weakData: {}
      }
    })
  },
  Hp = function(r, s) {
    if (!Up(r)) return typeof r == "symbol" ? r : (typeof r == "string" ? "S" : "P") + r;
    if (!ls(r, ue)) {
      if (!ps(r)) return "F";
      if (!s) return "E";
      us(r)
    }
    return r[ue].objectID
  },
  Yp = function(r, s) {
    if (!ls(r, ue)) {
      if (!ps(r)) return !0;
      if (!s) return !1;
      us(r)
    }
    return r[ue].weakData
  },
  Qp = function(r) {
    return zp && oa && ps(r) && !ls(r, ue) && us(r), r
  },
  Xp = function() {
    Zp.enable = function() {}, oa = !0;
    var r = wn.f,
      s = Gp([].splice),
      e = {};
    e[ue] = 1, r(e).length && (wn.f = function(t) {
      for (var n = r(t), o = 0, i = n.length; o < i; o++)
        if (n[o] === ue) {
          s(n, o, 1);
          break
        } return n
    }, Dp({
      target: "Object",
      stat: !0,
      forced: !0
    }, {
      getOwnPropertyNames: Wp.f
    }))
  },
  Zp = ea.exports = {
    enable: Xp,
    fastKey: Hp,
    getWeakData: Yp,
    onFreeze: Qp
  };
Mp[ue] = !0;
var eu = ea.exports,
  tu = Ee,
  ru = cs,
  su = J,
  nu = ie,
  ou = eu.onFreeze,
  Nr = Object.freeze,
  au = su(function() {
    Nr(1)
  });
tu({
  target: "Object",
  stat: !0,
  forced: au,
  sham: !ru
}, {
  freeze: function(s) {
    return Nr && nu(s) ? Nr(ou(s)) : s
  }
});
var iu = J,
  cu = !iu(function() {
    var r = "9007199254740993",
      s = JSON.rawJSON(r);
    return !JSON.isRawJSON(s) || JSON.stringify(s) !== r
  }),
  du = ee,
  lu = Q,
  Tn = du.WeakMap,
  pu = lu(Tn) && /native code/.test(String(Tn)),
  uu = pu,
  aa = ee,
  mu = ie,
  fu = Lo,
  dr = ke,
  lr = xo,
  yu = Qo,
  hu = Ft,
  $n = "Object already initialized",
  Br = aa.TypeError,
  gu = aa.WeakMap,
  Pt, tt, kt, _u = function(r) {
    return kt(r) ? tt(r) : Pt(r, {})
  },
  vu = function(r) {
    return function(s) {
      var e;
      if (!mu(s) || (e = tt(s)).type !== r) throw new Br("Incompatible receiver, " + r + " required");
      return e
    }
  };
if (uu || lr.state) {
  var ne = lr.state || (lr.state = new gu);
  ne.get = ne.get, ne.has = ne.has, ne.set = ne.set, Pt = function(r, s) {
    if (ne.has(r)) throw new Br($n);
    return s.facade = r, ne.set(r, s), s
  }, tt = function(r) {
    return ne.get(r) || {}
  }, kt = function(r) {
    return ne.has(r)
  }
} else {
  var Ue = yu("state");
  hu[Ue] = !0, Pt = function(r, s) {
    if (dr(r, Ue)) throw new Br($n);
    return s.facade = r, fu(r, Ue, s), s
  }, tt = function(r) {
    return dr(r, Ue) ? r[Ue] : {}
  }, kt = function(r) {
    return dr(r, Ue)
  }
}
var ia = {
    set: Pt,
    get: tt,
    has: kt,
    enforce: _u,
    getterFor: vu
  },
  bu = ie,
  Au = ia.get,
  wu = function(s) {
    if (!bu(s)) return !1;
    var e = Au(s);
    return !!e && e.type === "RawJSON"
  },
  Tu = V,
  Sn = Jo,
  $u = Q,
  qn = Pe,
  Su = ct,
  jn = Tu([].push),
  ca = function(r) {
    if ($u(r)) return r;
    if (Sn(r)) {
      for (var s = r.length, e = [], t = 0; t < s; t++) {
        var n = r[t];
        typeof n == "string" ? jn(e, n) : (typeof n == "number" || qn(n) === "Number" || qn(n) === "String") && jn(e, Su(n))
      }
      var o = e.length,
        i = !0;
      return function(c, l) {
        if (i) return i = !1, l;
        if (Sn(this)) return l;
        for (var d = 0; d < o; d++)
          if (e[d] === c) return l
      }
    }
  },
  da = Ee,
  qu = cs,
  la = cu,
  Gt = ot,
  ju = Le,
  ms = V,
  Pu = Q,
  ku = wu,
  Eu = ct,
  xu = Vo,
  Iu = zo,
  Ou = ca,
  Cu = Lt,
  Ru = ia.set,
  Nu = String,
  Pn = SyntaxError,
  Bu = Gt("JSON", "parse"),
  kn = Gt("JSON", "stringify"),
  Lu = Gt("Object", "create"),
  Fu = Gt("Object", "freeze"),
  Lr = ms("".charAt),
  pr = ms("".slice),
  Du = ms([].push),
  Fr = Cu(),
  En = Fr.length,
  xn = "Unacceptable as raw JSON",
  In = function(r) {
    return r === " " || r === "	" || r === `
` || r === "\r"
  };
da({
  target: "JSON",
  stat: !0,
  forced: !la
}, {
  rawJSON: function(s) {
    var e = Eu(s);
    if (e === "" || In(Lr(e, 0)) || In(Lr(e, e.length - 1))) throw new Pn(xn);
    var t = Bu(e);
    if (typeof t == "object" && t !== null) throw new Pn(xn);
    var n = Lu(null);
    return Ru(n, {
      type: "RawJSON"
    }), xu(n, "rawJSON", e), qu ? Fu(n) : n
  }
});
kn && da({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: !la
}, {
  stringify: function(s, e, t) {
    var n = Ou(e),
      o = [],
      i = kn(s, function(f, v) {
        var h = Pu(n) ? ju(n, this, Nu(f), v) : v;
        return ku(h) ? Fr + (Du(o, h.rawJSON) - 1) : h
      }, t);
    if (typeof i != "string") return i;
    for (var c = "", l = i.length, d = 0; d < l; d++) {
      var a = Lr(i, d);
      if (a === '"') {
        var y = Iu(i, ++d).end - 1,
          g = pr(i, d, y);
        c += pr(g, 0, En) === Fr ? o[pr(g, En)] : '"' + g + '"', d = y
      } else c += a
    }
    return c
  }
});
var Gu = nt,
  Mu = Gu.JSON.rawJSON,
  Uu = ss,
  Ju = ct,
  Wu = Nt,
  Vu = RangeError,
  zu = function(s) {
    var e = Ju(Wu(this)),
      t = "",
      n = Uu(s);
    if (n < 0 || n === 1 / 0) throw new Vu("Wrong number of repetitions");
    for (; n > 0;
      (n >>>= 1) && (e += e)) n & 1 && (t += e);
    return t
  },
  pa = V,
  Ku = Fo,
  On = ct,
  Hu = zu,
  Yu = Nt,
  Qu = pa(Hu),
  Xu = pa("".slice),
  Zu = Math.ceil,
  Cn = function(r) {
    return function(s, e, t) {
      var n = On(Yu(s)),
        o = Ku(e),
        i = n.length,
        c = t === void 0 ? " " : On(t),
        l, d;
      return o <= i || c === "" ? n : (l = o - i, d = Qu(c, Zu(l / c.length)), d.length > l && (d = Xu(d, 0, l)), r ? n + d : d + n)
    }
  },
  em = {
    start: Cn(!1),
    end: Cn(!0)
  },
  xe = V,
  Rn = J,
  Re = em.start,
  tm = RangeError,
  rm = isFinite,
  sm = Math.abs,
  fe = Date.prototype,
  ur = fe.toISOString,
  nm = xe(fe.getTime),
  om = xe(fe.getUTCDate),
  am = xe(fe.getUTCFullYear),
  im = xe(fe.getUTCHours),
  cm = xe(fe.getUTCMilliseconds),
  dm = xe(fe.getUTCMinutes),
  lm = xe(fe.getUTCMonth),
  pm = xe(fe.getUTCSeconds),
  um = Rn(function() {
    return ur.call(new Date(-5e13 - 1)) !== "0385-07-25T07:06:39.999Z"
  }) || !Rn(function() {
    ur.call(new Date(NaN))
  }) ? function() {
    if (!rm(nm(this))) throw new tm("Invalid time value");
    var s = this,
      e = am(s),
      t = cm(s),
      n = e < 0 ? "-" : e > 9999 ? "+" : "";
    return n + Re(sm(e), n ? 6 : 4, 0) + "-" + Re(lm(s) + 1, 2, 0) + "-" + Re(om(s), 2, 0) + "T" + Re(im(s), 2, 0) + ":" + Re(dm(s), 2, 0) + ":" + Re(pm(s), 2, 0) + "." + Re(t, 3, 0) + "Z"
  } : ur,
  mm = Ee,
  ua = Le,
  fm = es,
  ym = Oo,
  hm = um,
  gm = Pe,
  _m = J,
  vm = _m(function() {
    return new Date(NaN).toJSON() !== null || ua(Date.prototype.toJSON, {
      toISOString: function() {
        return 1
      }
    }) !== 1
  });
mm({
  target: "Date",
  proto: !0,
  forced: vm
}, {
  toJSON: function(s) {
    var e = fm(this),
      t = ym(e, "number");
    return typeof t == "number" && !isFinite(t) ? null : !("toISOString" in e) && gm(e) === "Date" ? ua(hm, e) : e.toISOString()
  }
});
var bm = Ee,
  ma = ot,
  fa = Qr,
  Am = Le,
  dt = V,
  ya = J,
  Nn = Q,
  Bn = Zr,
  ha = ra,
  wm = ca,
  Tm = Bt,
  $m = String,
  qe = ma("JSON", "stringify"),
  ht = dt(/./.exec),
  Ln = dt("".charAt),
  Sm = dt("".charCodeAt),
  qm = dt("".replace),
  jm = dt(1 .toString),
  Pm = /[\uD800-\uDFFF]/g,
  Fn = /^[\uD800-\uDBFF]$/,
  Dn = /^[\uDC00-\uDFFF]$/,
  Gn = !Tm || ya(function() {
    var r = ma("Symbol")("stringify detection");
    return qe([r]) !== "[null]" || qe({
      a: r
    }) !== "{}" || qe(Object(r)) !== "{}"
  }),
  Mn = ya(function() {
    return qe("\uDF06\uD834") !== '"\\udf06\\ud834"' || qe("\uDEAD") !== '"\\udead"'
  }),
  km = function(r, s) {
    var e = ha(arguments),
      t = wm(s);
    if (!(!Nn(t) && (r === void 0 || Bn(r)))) return e[1] = function(n, o) {
      if (Nn(t) && (o = Am(t, this, $m(n), o)), !Bn(o)) return o
    }, fa(qe, null, e)
  },
  Em = function(r, s, e) {
    var t = Ln(e, s - 1),
      n = Ln(e, s + 1);
    return ht(Fn, r) && !ht(Dn, n) || ht(Dn, r) && !ht(Fn, t) ? "\\u" + jm(Sm(r, 0), 16) : r
  };
qe && bm({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: Gn || Mn
}, {
  stringify: function(s, e, t) {
    var n = ha(arguments),
      o = fa(Gn ? km : qe, null, n);
    return Mn && typeof o == "string" ? qm(o, Pm, Em) : o
  }
});
var Dr = nt,
  xm = Qr;
Dr.JSON || (Dr.JSON = {
  stringify: JSON.stringify
});
var Im = function(s, e, t) {
    return xm(Dr.JSON.stringify, null, arguments)
  },
  Om = Im,
  Cm = Om,
  Rm = Cm,
  Nm = Rm,
  fs = ze && ze.__importDefault || function(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  };
Object.defineProperty(L, "__esModule", {
  value: !0
});
var ga = L.TonApiClient = L.ContentType = L.PoolImplementationType = L.TrustType = L.JettonVerificationType = L.BouncePhaseType = L.ComputeSkipReason = L.AccStatusChange = L.TransactionType = L.AccountStatus = void 0,
  Un;
(function(r) {
  r.Nonexist = "nonexist", r.Uninit = "uninit", r.Active = "active", r.Frozen = "frozen"
})(Un || (L.AccountStatus = Un = {}));
var Jn;
(function(r) {
  r.TransOrd = "TransOrd", r.TransTickTock = "TransTickTock", r.TransSplitPrepare = "TransSplitPrepare", r.TransSplitInstall = "TransSplitInstall", r.TransMergePrepare = "TransMergePrepare", r.TransMergeInstall = "TransMergeInstall", r.TransStorage = "TransStorage"
})(Jn || (L.TransactionType = Jn = {}));
var Wn;
(function(r) {
  r.AcstUnchanged = "acst_unchanged", r.AcstFrozen = "acst_frozen", r.AcstDeleted = "acst_deleted"
})(Wn || (L.AccStatusChange = Wn = {}));
var Vn;
(function(r) {
  r.CskipNoState = "cskip_no_state", r.CskipBadState = "cskip_bad_state", r.CskipNoGas = "cskip_no_gas"
})(Vn || (L.ComputeSkipReason = Vn = {}));
var zn;
(function(r) {
  r.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", r.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", r.TrPhaseBounceOk = "TrPhaseBounceOk"
})(zn || (L.BouncePhaseType = zn = {}));
var Kn;
(function(r) {
  r.Whitelist = "whitelist", r.Blacklist = "blacklist", r.None = "none"
})(Kn || (L.JettonVerificationType = Kn = {}));
var Hn;
(function(r) {
  r.Whitelist = "whitelist", r.Graylist = "graylist", r.Blacklist = "blacklist", r.None = "none"
})(Hn || (L.TrustType = Hn = {}));
var Yn;
(function(r) {
  r.Whales = "whales", r.Tf = "tf", r.LiquidTF = "liquidTF"
})(Yn || (L.PoolImplementationType = Yn = {}));
var ve;
(function(r) {
  r.Json = "application/json", r.FormData = "multipart/form-data", r.UrlEncoded = "application/x-www-form-urlencoded", r.Text = "text/plain"
})(ve || (L.ContentType = ve = {}));
const Gr = le,
  Bm = fs(rp),
  Lm = fs(Mu),
  Fm = fs(Nm),
  Dm = r => (0, Bm.default)(r, (s, e, t) => {
    if (typeof e == "number") {
      const n = t.source;
      return Number.isSafeInteger(e) || /[\.eE]/.test(n) ? e : BigInt(n)
    }
    return e
  }),
  mr = r => (0, Fm.default)(r, (s, e) => typeof e == "bigint" ? (0, Lm.default)(e.toString()) : e);
class Gm {
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
      [ve.Json]: s => s !== null && (typeof s == "object" || typeof s == "string") ? mr(s) : s,
      [ve.Text]: s => s !== null && typeof s != "string" ? mr(s) : s,
      [ve.FormData]: s => Object.keys(s || {}).reduce((e, t) => {
        const n = s[t];
        return e.append(t, n instanceof Blob ? n : typeof n == "object" && n !== null ? mr(n) : `${n}`), e
      }, new FormData),
      [ve.UrlEncoded]: s => this.toQueryString(s)
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
        g = n ?? ve.Json,
        f = this.contentFormatters[g],
        v = i || a.format;
      return this.customFetch(`${c||this.baseUrl||""}${t}${y?`?${y}`:""}`, {
        ...a,
        headers: {
          ...a.headers || {},
          ...g && g !== ve.FormData ? {
            "Content-Type": g
          } : {}
        },
        signal: (l ? this.createAbortSignal(l) : a.signal) || null,
        body: typeof s > "u" || s === null ? null : f(s)
      }).then(async h => {
        const _ = h.clone();
        _.data = null, _.error = null;
        const S = v === "json" ? "text" : v,
          F = S ? await h[S]().then($ => (_.ok ? _.data = v === "json" ? Dm($) : $ : _.error = $, _)).catch($ => (_.error = $, _)) : _;
        if (l && this.abortControllers.delete(l), !h.ok) throw F;
        return F.data
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
const _a = {
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

function Mm(r) {
  return r.replace(/(_\w)/g, s => {
    var e;
    return ((e = s[1]) == null ? void 0 : e.toUpperCase()) ?? ""
  })
}

function Um(r) {
  return r.replace(/([A-Z])/g, s => `_${s.toLowerCase()}`)
}

function fr(r) {
  return Gr.Cell.fromHex(r)
}

function Jm(r) {
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
    t = e ? _a[e] : s;
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
          type: "int", value: Jm(r.num)
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
      c = Mm(o);
    return n[c] = $t(r[o], i), n
  }, {}) : r
}

function U(r, s) {
  const e = s && s.$ref,
    t = e ? _a[e] : s;
  if (Array.isArray(r)) {
    const n = t && t.items;
    return r.map(o => U(o, n))
  } else if (t && t.type === "string") {
    if (t.format === "address") return r.toRawString();
    if (t.format === "cell") return r.toBoc().toString("hex");
    if (t.format === "cell-base64") return r.toBoc().toString("base64");
    if (t["x-js-format"] === "bigint") return r.toString()
  }
  return r !== null && typeof r == "object" ? Object.keys(r).reduce((n, o) => {
    const i = (t == null ? void 0 : t.properties) && t.properties[o],
      c = Um(o);
    return n[c] = U(r[o], i), n
  }, {}) : r
}
class Wm {
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
          body: U(s, {
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
          body: U(s, {
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
          body: U(s, {
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
          body: U(s, {
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
          body: U(s, {
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
          body: U(s, {
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
          body: U(s, {
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
            body: U(e, {
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
          body: U(s, {
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
          body: U(s, {
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
          body: U(s, {
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
          body: U(s, {
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
          body: U(s, {
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
          body: U(s, {
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
            body: U(e, {
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
    this.http = new Gm(s)
  }
}
ga = L.TonApiClient = Wm;
var Et = (r => (r.TOO_LOW_AMOUNT = "TOO_LOW_AMOUNT", r))(Et || {}),
  We = (r => (r.NOT_ENOUGH_TOKEN = "NOT_ENOUGH_TOKEN", r.NOT_ENOUGH_JETTON = "NOT_ENOUGH_JETTON", r.TOO_LOW_AMOUNT = "TOO_LOW_AMOUNT", r))(We || {}),
  va = (r => (r.NOT_ENOUGH_TOKEN = "NOT_ENOUGH_TOKEN", r))(va || {}),
  Ve = (r => (r.NOT_ENOUGH_TOKEN = "NOT_ENOUGH_TOKEN", r.TOO_LOW_AMOUNT = "TOO_LOW_AMOUNT", r.EXCEEDS_MAX_SUPPLY = "EXCEEDS_MAX_SUPPLY", r))(Ve || {}),
  Xe = (r => (r.NOT_ENOUGH_FOR_FEES = "NOT_ENOUGH_FOR_FEES", r.NOT_ENOUGH_FOR_AMOUNT = "NOT_ENOUGH_FOR_AMOUNT", r))(Xe || {});
const Vm = () => {
    const r = "memepad-slippage",
      e = Qn(() => (() => {
        const i = _s().$webApp.storage.local.get(r);
        if (i === void 0) return;
        const c = Number(i);
        if (!isNaN(c)) return c
      })() ?? 10, "$lWcnl8jOnP");
    return Sa({
      get: () => e.value,
      set: o => {
        e.value = o, _s().$webApp.storage.local.set(r, String(o))
      }
    })
  },
  zm = () => {
    const r = vs.getSaveMemepadJettonInfoStatus,
      s = vs.saveMemepadJettonInfo;
    return {
      getSaveMemepadJettonInfoStatus: r,
      saveMemepadJettonInfo: s
    }
  },
  ys = () => {
    const r = Vm(),
      s = zm();
    return {
      slippage: r,
      memepadApi: s,
      getMinReceive: n => n.times(100 - r.value).div(100),
      wrapWithCache: (n, o) => {
        const i = c => {
          const l = Qn(c, () => new Map);
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
          return z(y) && d.set(l, y.data), y
        }
      }
    }
  },
  Km = () => s => {
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
          g = le.Cell.fromBase64(y.boc);
        e = {
          msg: g,
          hash: g.hash().toString("hex")
        }, t.forEach(v => v(e))
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
    } = ys(), s = Km(), e = 1e-9;
    return {
      getAddress: d => d instanceof le.Address ? d : le.Address.parse(d),
      tonConnectSender: s,
      createGetWaitForLaunchStatusUntilOk: (d, a) => () => jr((() => {
        let y, g;
        return async ({
          queryId: f,
          transactionHash: v
        }) => {
          const h = y ?? await r.getSaveMemepadJettonInfoStatus(f),
            _ = g ?? await d({
              transactionHash: v
            });
          return z(_) && _.data && (g = _), z(h) && h.data.status === bs.READY && (y = h), As(_) ? _ : As(h) ? h : z(h) && h.data.status === bs.READY ? H(h.data) : z(_) && !_.data ? H(void 0) : Ze()
        }
      })(), () => {}, a),
      createGetReviewStepInfo: ({
        getFees: d
      }) => ({
        overview: a,
        share: y,
        jettonTicker: g,
        tonBalance: f,
        withAiAgent: v
      }) => {
        const h = !new Z(y).isZero() && new Z(y).lt(e),
          _ = a.bclData.tokenForDexWithFees.lt(y),
          {
            buyNetworkFee: S,
            launchNetworkFee: F,
            launchPlatformFee: $,
            walletNetworkLaunchFee: N,
            walletNetworkLaunchBuyFee: O
          } = d({
            share: y,
            overview: a
          }),
          C = (() => {
            const X = [],
              T = !a.share.isZero(),
              q = T ? O : N,
              A = F.plus($).plus(q);
            if (v) {
              const D = a.bclData.aiAgentDeployFee;
              D.isZero() ? X.push({
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
                total: D
              }) : X.push({
                title: b("memepad.new.price_details.ai_agent.title"),
                label: `${j(D)} TON`,
                total: D
              })
            }
            if (X.push({
                title: b("memepad.new.price_details.launch"),
                tooltip: {
                  details: [{
                    highlight: !1,
                    label: `${b("memepad.jetton.fees_network")}: ${j(F)} TON`,
                    value: F
                  }, {
                    highlight: !1,
                    label: `${b("memepad.jetton.fees_wallet")}: ${j(q)} TON`,
                    value: q
                  }, {
                    highlight: $.isZero(),
                    label: `${b("memepad.jetton.fees_platform")}: ${j($)} TON`,
                    value: $
                  }]
                },
                label: `${j(A)} TON`,
                total: A
              }), T) {
              const D = new Z(a.share.plus(S)),
                W = _ ? `${b("memepad.share_label")} ${b("memepad.new.step_review.subtitle_of_supply",{percentAmount:">100%"})}` : h ? `${b("memepad.share_label")} ${b("memepad.new.step_review.subtitle_of_supply",{percentAmount:"<0.01%"})}` : `${b("memepad.share_label")} ${ws(a.jettonReceivePercent)}%`;
              X.push({
                title: W,
                tooltip: {
                  details: [{
                    highlight: !1,
                    label: `${b("memepad.jetton.fees_network")}: ${j(S)} TON`,
                    value: S
                  }, {
                    highlight: !1,
                    label: `${b("memepad.jetton.fees_platform")}: ${j(a.platformFee)} TON`,
                    value: a.platformFee
                  }]
                },
                label: `${j(D)} TON`,
                total: D
              })
            }
            const I = X.reduce((D, W) => D.plus(W.total), new Z(0)),
              K = {
                title: `${b("memepad.new.price_details.total_label")} ${j(I)} TON`,
                value: I
              };
            return {
              sections: X,
              total: K
            }
          })(),
          x = (() => {
            if (h) return {
              type: Ve.TOO_LOW_AMOUNT,
              message: b("memepad.new.share.error.too_low_amount")
            };
            if (_) return {
              type: Ve.EXCEEDS_MAX_SUPPLY,
              message: b("memepad.new.share.error.exceeds_max_supply")
            };
            if (f && !f.value.gte(C.total.value)) return {
              type: Ve.NOT_ENOUGH_TOKEN,
              message: b("memepad.jetton.not_enough_balance_error", {
                balanceWithLabel: f.frontendWithSymbol
              }),
              balance: f,
              details: Xe.NOT_ENOUGH_FOR_AMOUNT
            }
          })(),
          B = (() => {
            if (x) return x.type === Ve.EXCEEDS_MAX_SUPPLY ? `${b("memepad.new.step_review.subtitle_of_supply",{percentAmount:">100%"})}` : x.type === Ve.TOO_LOW_AMOUNT ? `${b("memepad.new.step_review.subtitle_of_supply",{percentAmount:"<0.01%"})}` : "";
            const X = qa(new Z(a.minReceive), g);
            return b("memepad.new.step_review.subtitle", {
              jettonsAmountWithSymbol: X.frontendWithSymbol,
              percentAmount: ws(a.jettonReceivePercent)
            })
          })(),
          Y = {
            amount: a.minReceive,
            percent: a.jettonReceivePercent
          },
          ye = f == null ? void 0 : f.frontendWithSymbol;
        return {
          error: x,
          subtitle: B,
          balance: ye,
          supplyInfo: Y,
          feesInfo: C
        }
      },
      createGetUnlockInfo: ({
        getFees: d
      }) => ({
        tonBalance: a,
        jettonBalance: y
      }) => {
        const {
          unlockNetworkFee: g,
          walletNetworkUnlockFee: f
        } = d(), v = g.plus(f), h = {
          details: [{
            label: `${b("memepad.jetton.fees_network")}: ${j(g)} TON`,
            value: g
          }, {
            label: `${b("memepad.jetton.fees_wallet")}: ${j(f)} TON`,
            value: f
          }],
          total: v,
          totalLabel: `${b("memepad.jetton.fees_base")}: ${j(v)} TON`
        };
        return !a || !y ? {
          balanceLabel: void 0,
          feesInfo: void 0,
          error: void 0,
          ready: !1,
          loading: !0
        } : a.value.lt(v) ? {
          balanceLabel: y.frontendWithSymbol,
          feesInfo: h,
          error: {
            type: va.NOT_ENOUGH_TOKEN,
            message: b("memepad.jetton.not_enough_error", {
              ticker: "TON"
            }),
            details: Xe.NOT_ENOUGH_FOR_FEES
          },
          ready: !1,
          loading: !1
        } : {
          balanceLabel: y.frontendWithSymbol,
          feesInfo: h,
          error: void 0,
          ready: !0,
          loading: !1
        }
      },
      getTradeStateControls: () => {
        const d = ({
            operation: v,
            fees: h
          }) => {
            const {
              buyNetworkFee: _,
              sellNetworkFee: S,
              walletNetworkBuyFee: F,
              walletNetworkSellFee: $
            } = h, N = new Z(0);
            if (v === Oe.BUY) {
              const O = _,
                C = F,
                x = O.plus(C);
              return {
                details: [{
                  label: `${b("memepad.jetton.fees_network")}: ${j(O)} TON`,
                  value: O
                }, {
                  label: `${b("memepad.jetton.fees_wallet")}: ${j(C)} TON`,
                  value: C
                }, {
                  label: `${b("memepad.jetton.fees_platform")}: ${j(N)} TON`,
                  value: N
                }],
                total: x,
                totalLabel: `${b("memepad.jetton.fees_base")}: ${j(x)} TON`
              }
            } else {
              const O = S,
                C = $,
                x = O.plus(C);
              return {
                details: [{
                  label: `${b("memepad.jetton.fees_network")}: ${j(O)} TON`,
                  value: O
                }, {
                  label: `${b("memepad.jetton.fees_wallet")}: ${j(C)} TON`,
                  value: C
                }, {
                  label: `${b("memepad.jetton.fees_platform")}: ${j(N)} TON`,
                  value: N
                }],
                total: x,
                totalLabel: `${b("memepad.jetton.fees_base")}: ${j(x)} TON`
              }
            }
          },
          a = ({
            operation: v,
            amount: h,
            tradeInfo: _,
            fees: S
          }) => {
            if (h.isZero()) return d({
              operation: v,
              fees: S
            });
            const {
              buyNetworkFee: F,
              sellNetworkFee: $,
              walletNetworkBuyFee: N,
              walletNetworkSellFee: O
            } = S, C = _.platformFee;
            if (v === Oe.BUY) {
              const x = F,
                B = N,
                Y = h.plus(x).plus(B);
              return {
                details: [{
                  label: `${b("memepad.jetton.fees_network")}: ${j(x)} TON`,
                  value: x
                }, {
                  label: `${b("memepad.jetton.fees_wallet")}: ${j(B)} TON`,
                  value: B
                }, {
                  label: `${b("memepad.jetton.fees_platform")}: ${j(C)} TON`,
                  value: C
                }],
                total: Y,
                totalLabel: `${b("memepad.jetton.fees_send")}: ${j(Y)} TON`
              }
            } else {
              const x = $,
                B = O,
                Y = C.plus(x).plus(B);
              return {
                details: [{
                  label: `${b("memepad.jetton.fees_network")}: ${j(x)} TON`,
                  value: x
                }, {
                  label: `${b("memepad.jetton.fees_wallet")}: ${j(B)} TON`,
                  value: B
                }, {
                  label: `${b("memepad.jetton.fees_platform")}: ${j(C)} TON`,
                  value: C
                }],
                total: Y,
                totalLabel: `${b("memepad.jetton.fees_base")}: ${j(Y)} TON`
              }
            }
          },
          y = ({
            operation: v,
            tonBalance: h,
            jettonBalance: _
          }) => ({
            balanceLabel: v === Oe.BUY ? h == null ? void 0 : h.frontendWithSymbol : _ == null ? void 0 : _.frontendWithSymbol,
            tradeInfo: void 0,
            feesInfo: void 0,
            error: void 0,
            ready: !1,
            loading: !1
          }),
          g = ({
            operation: v,
            amount: h,
            tonBalance: _,
            jettonBalance: S,
            jettonTicker: F,
            fees: $
          }) => {
            const {
              buyNetworkFee: N,
              sellNetworkFee: O,
              walletNetworkBuyFee: C,
              walletNetworkSellFee: x
            } = $;
            if (!_ || !S) return {
              balanceLabel: void 0,
              tradeInfo: void 0,
              feesInfo: void 0,
              error: void 0,
              ready: !1,
              loading: !0
            };
            const B = v === Oe.BUY ? _ == null ? void 0 : _.frontendWithSymbol : S == null ? void 0 : S.frontendWithSymbol;
            if (h.isZero()) return {
              balanceLabel: B,
              tradeInfo: void 0,
              feesInfo: d({
                operation: v,
                fees: $
              }),
              error: void 0,
              ready: !1,
              loading: !1
            };
            if (!h.isZero() && h.lt(e)) return {
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
            if (v === Oe.BUY) {
              const ye = N,
                X = C,
                T = h.plus(ye).plus(X);
              if (_.value.lt(T)) return {
                balanceLabel: B,
                tradeInfo: void 0,
                feesInfo: void 0,
                error: {
                  type: We.NOT_ENOUGH_TOKEN,
                  message: b("memepad.jetton.not_enough_error", {
                    ticker: "TON"
                  }),
                  details: Xe.NOT_ENOUGH_FOR_FEES
                },
                ready: !1,
                loading: !1
              }
            } else {
              if (S.value.lt(h)) return {
                balanceLabel: B,
                tradeInfo: void 0,
                feesInfo: void 0,
                error: {
                  type: We.NOT_ENOUGH_JETTON,
                  message: b("memepad.jetton.not_enough_error", {
                    ticker: F
                  })
                },
                ready: !1,
                loading: !1
              };
              const T = O,
                q = x,
                A = T.plus(q);
              if (_.value.lt(A)) return {
                tradeInfo: void 0,
                feesInfo: void 0,
                balanceLabel: B,
                error: {
                  type: We.NOT_ENOUGH_TOKEN,
                  message: b("memepad.jetton.not_enough_error", {
                    ticker: "TON"
                  }),
                  details: Xe.NOT_ENOUGH_FOR_FEES
                },
                ready: !1,
                loading: !1
              }
            }
          };
        return {
          getEmptyState: y,
          getImmediateState: g,
          getState: async ({
            operation: v,
            amount: h,
            tonBalance: _,
            jettonBalance: S,
            jettonTicker: F,
            getBuyInfo: $,
            getSellInfo: N,
            fees: O
          }) => {
            const C = g({
              operation: v,
              amount: h,
              tonBalance: _,
              jettonTicker: F,
              jettonBalance: S,
              fees: O
            });
            if (C) return C;
            const x = v === Oe.BUY ? _.frontendWithSymbol : S.frontendWithSymbol;
            if (h.isZero()) return {
              tradeInfo: void 0,
              balanceLabel: x,
              feesInfo: d({
                operation: v,
                fees: O
              }),
              error: void 0,
              ready: !1,
              loading: !1
            };
            const B = await (v === Oe.BUY ? $({
              tons: h
            }) : N({
              jettons: h
            }));
            if (!z(B)) return B.extra === Et.TOO_LOW_AMOUNT ? {
              tradeInfo: void 0,
              feesInfo: void 0,
              balanceLabel: x,
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
                operation: v,
                amount: h,
                tradeInfo: Y,
                fees: O
              });
            return {
              tradeInfo: Y,
              balanceLabel: x,
              feesInfo: ye,
              error: void 0,
              ready: !0,
              loading: !1
            }
          }
        }
      },
      mustGetUserWalletAddress: () => {
        const d = ja().state.value;
        if (d.status === Pa.CONNECTED) return d.address
      }
    }
  },
  Hm = () => {
    const {
      getAddress: r
    } = hs(), s = Xn().public.TON_API_TOKEN, e = new ga({
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
        const l = await _e(async () => await e.accounts.getAccountJettonBalance(r(c), r(i)))();
        return z(l) ? H(ge(l.data.balance)) : H(new Z(0))
      },
      getTransactionStatus: async ({
        transactionHash: i,
        actionTypes: c
      }) => {
        const l = await _e(async () => await e.events.getEvent(i))();
        if (!z(l)) return l;
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
  Ym = () => {
    const {
      tonConnectSender: r,
      getTradeStateControls: s
    } = hs(), {
      tonClient: e,
      getTransactionStatus: t
    } = Hm(), {
      wrapWithCache: n,
      slippage: o
    } = ys(), i = "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c", c = 1, l = Xn().public.STONFI_REFERRAL_ADDRESS, d = new gi, a = {
      BUY_STATUS_CHECK: 12e3,
      SELL_STATUS_CHECK: 12e3
    }, y = {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: new Z(.31),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: new Z(.3)
    }, g = {
      BUY_FEE: new Z(0),
      SELL_FEE: new Z(0)
    }, f = {
      buyNetworkFee: y.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: y.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      walletNetworkBuyFee: g.BUY_FEE,
      walletNetworkSellFee: g.SELL_FEE
    }, h = n(T => `stonfiSdk:router:${T.toString()}`, async T => await _e(async () => await d.getRouter(T.toString()))()), _ = T => {
      const q = (() => {
          const W = "v2_2",
            se = ["v2_1", "v2_2"],
            ce = `v${T.majorVersion}_${T.minorVersion}`;
          return se.includes(ce) ? ce : W
        })(),
        A = xi[q].Router,
        I = e.open(A.create(T.address)),
        K = (() => {
          const W = "v2_1",
            se = ["v2_1"],
            [ce, Ie] = T.ptonVersion.split("."),
            he = `v${ce}_${Ie}`;
          return se.includes(he) ? he : W
        })(),
        D = Ii[K].create(T.ptonMasterAddress);
      return {
        routerInstance: A,
        router: I,
        proxyTon: D
      }
    }, S = () => jr(t, () => {}, a.BUY_STATUS_CHECK), F = () => jr(t, () => {}, a.SELL_STATUS_CHECK), $ = T => {
      var q, A, I;
      return ((q = T.extra) == null ? void 0 : q.statusCode) === 400 && ((I = (A = T.extra) == null ? void 0 : A.data) == null ? void 0 : I.startsWith("1012"))
    }, N = T => {
      var q, A, I;
      return ((q = T.extra) == null ? void 0 : q.statusCode) === 400 && ((I = (A = T.extra) == null ? void 0 : A.data) == null ? void 0 : I.startsWith("1040"))
    }, O = async ({
      tons: T,
      jettonAddress: q
    }) => {
      const A = await _e(async () => await d.simulateSwap({
        askAddress: q.toString(),
        offerAddress: i,
        offerUnits: Fe(T).toString(),
        slippageTolerance: String(o.value / 100),
        dexV2: !0,
        referralAddress: l,
        referralFeeBps: String(c * 100)
      }))();
      if (!z(A)) return $(A) ? Ze(Et.TOO_LOW_AMOUNT) : A;
      const I = await h(A.data.routerAddress);
      if (!z(I)) return I;
      const K = ge(A.data.minAskUnits),
        D = ge(A.data.askUnits),
        W = ge(A.data.feeUnits),
        se = W.div(K.plus(W)).times(T);
      return H({
        minReceive: K,
        maxReceive: D,
        platformFee: se,
        additionalInfo: {
          routerInfo: I.data
        }
      })
    }, C = async ({
      jettons: T,
      jettonAddress: q
    }) => {
      const A = await _e(async () => await d.simulateSwap({
        askAddress: i,
        offerAddress: q.toString(),
        offerUnits: Fe(T).toString(),
        slippageTolerance: String(o.value / 100),
        dexV2: !0,
        referralAddress: l,
        referralFeeBps: String(c * 100)
      }))();
      if (!z(A)) return $(A) ? Ze(Et.TOO_LOW_AMOUNT) : A;
      const I = await h(A.data.routerAddress);
      if (!z(I)) return I;
      const K = ge(A.data.minAskUnits),
        D = ge(A.data.askUnits),
        W = ge(A.data.feeUnits);
      return H({
        minReceive: K,
        maxReceive: D,
        platformFee: W,
        additionalInfo: {
          routerInfo: I.data
        }
      })
    }, x = async ({
      userAddress: T,
      jettonAddress: q
    }) => {
      const A = await _e(async () => await d.getWalletAsset({
        walletAddress: T.toString(),
        assetAddress: q.toString()
      }))();
      return z(A) ? A.data.balance === void 0 ? H(new Z(0)) : H(ge(A.data.balance)) : N(A) ? Ze("Failed to get balance") : A
    }, B = async ({
      tons: T,
      tradeInfoParams: q,
      userAddress: A,
      jettonAddress: I,
      referrerToken: K,
      tonConnectUI: D
    }) => {
      const {
        router: W,
        proxyTon: se
      } = _(q.additionalInfo.routerInfo), ce = {
        userWalletAddress: A,
        proxyTon: se,
        offerAmount: Fe(T),
        askJettonAddress: I,
        minAskAmount: Fe(q.minReceive),
        queryId: void 0,
        referralAddress: l,
        referralValue: c * 100,
        dexCustomPayload: K ? le.beginCell().storeUint(10001, 32).storeStringTail(K).endCell() : void 0
      }, Ie = r(D), he = await _e(async () => await W.sendSwapTonToJetton(Ie, ce))();
      return z(he) ? H((await Ie.getResult()).hash) : he
    }, Y = async ({
      jettons: T,
      tradeInfoParams: q,
      userAddress: A,
      jettonAddress: I,
      referrerToken: K,
      tonConnectUI: D
    }) => {
      const {
        router: W,
        proxyTon: se
      } = _(q.additionalInfo.routerInfo), ce = {
        userWalletAddress: A,
        offerJettonAddress: I,
        offerAmount: Fe(T),
        minAskAmount: Fe(q.minReceive),
        proxyTon: se,
        queryId: void 0,
        referralAddress: l,
        referralValue: c * 100,
        dexCustomPayload: K ? le.beginCell().storeUint(10001, 32).storeStringTail(K).endCell() : void 0
      }, Ie = r(D), he = await _e(async () => await W.sendSwapJettonToTon(Ie, ce))();
      return z(he) ? H((await Ie.getResult()).hash) : he
    }, ye = s();
    return {
      getRouter: h,
      getRouterAndProxyTon: _,
      getWaitForBuyStatus: S,
      getWaitForSellStatus: F,
      getBuyInfo: O,
      getSellInfo: C,
      getUserJettonBalance: x,
      buyJetton: B,
      sellJetton: Y,
      tradeStateControls: ye,
      getMaxBuyAmount: ({
        tokenBalance: T
      }) => {
        const {
          buyNetworkFee: q,
          walletNetworkBuyFee: A
        } = f;
        return T.value.minus(q).minus(A)
      },
      fees: f
    }
  },
  ef = ({
    jetton: r,
    tonBalance: s,
    jettonBalance: e
  }) => {
    var F;
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
      getSellInfo: g,
      getMaxBuyAmount: f,
      fees: v
    } = Ym(), h = r.address, _ = ka().tonConnectUI.value, S = (F = Ea().getters.getUser.value) == null ? void 0 : F.referrerToken;
    return {
      getUserJettonBalance: () => o({
        jettonAddress: h,
        userAddress: t()
      }),
      getSlippage: () => n.value,
      updateSlippage: $ => n.value = $,
      buyJetton: ({
        tons: $,
        tradeInfoParams: N
      }) => i({
        tons: $,
        jettonAddress: h,
        userAddress: t(),
        tradeInfoParams: N,
        tonConnectUI: _,
        referrerToken: S
      }),
      sellJetton: ({
        jettons: $,
        tradeInfoParams: N
      }) => c({
        jettons: $,
        jettonAddress: h,
        userAddress: t(),
        tradeInfoParams: N,
        tonConnectUI: _,
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
          fees: v
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
          fees: v,
          getBuyInfo: ({
            tons: O
          }) => y({
            tons: O,
            jettonAddress: h
          }),
          getSellInfo: ({
            jettons: O
          }) => g({
            jettons: O,
            jettonAddress: h
          })
        })
      },
      getMaxBuyAmount: f
    }
  };
export {
  va as M, We as a, Ve as b, hs as c, Hm as d, ys as e, ef as g, rp as p, Mu as r, Nm as s, Ym as u
};