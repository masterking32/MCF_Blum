import {
  c_ as Xt,
  cl as ar,
  c$ as Ua,
  cb as O,
  cc as B,
  bw as M,
  ce as It
} from "./BMIPMNvl.js";
var Va = {},
  yt = {},
  Rt = {};
Object.defineProperty(Rt, "__esModule", {
  value: !0
});
Rt.InMemoryCache = void 0;
class Da {
  constructor() {
    this.cache = new Map, this.set = async (e, n, r) => {
      r !== null ? this.cache.set(e + "$$" + n, r) : this.cache.delete(e + "$$" + n)
    }, this.get = async (e, n) => {
      let r = this.cache.get(e + "$$" + n);
      return r !== void 0 ? r : null
    }
  }
}
Rt.InMemoryCache = Da;
var Na = function() {
    function t(n, r) {
      if (typeof n != "function") throw new TypeError("DataLoader must be constructed with a function which accepts " + ("Array<key> and returns Promise<Array<value>>, but got: " + n + "."));
      this._batchLoadFn = n, this._maxBatchSize = Za(r), this._batchScheduleFn = $a(r), this._cacheKeyFn = Fa(r), this._cacheMap = Ha(r), this._batch = null, this.name = Ka(r)
    }
    var e = t.prototype;
    return e.load = function(r) {
      if (r == null) throw new TypeError("The loader.load() function must be called with a value, " + ("but got: " + String(r) + "."));
      var s = La(this),
        a = this._cacheMap,
        i = this._cacheKeyFn(r);
      if (a) {
        var o = a.get(i);
        if (o) {
          var l = s.cacheHits || (s.cacheHits = []);
          return new Promise(function(u) {
            l.push(function() {
              u(o)
            })
          })
        }
      }
      s.keys.push(r);
      var d = new Promise(function(u, v) {
        s.callbacks.push({
          resolve: u,
          reject: v
        })
      });
      return a && a.set(i, d), d
    }, e.loadMany = function(r) {
      if (!sr(r)) throw new TypeError("The loader.loadMany() function must be called with Array<key> " + ("but got: " + r + "."));
      for (var s = [], a = 0; a < r.length; a++) s.push(this.load(r[a]).catch(function(i) {
        return i
      }));
      return Promise.all(s)
    }, e.clear = function(r) {
      var s = this._cacheMap;
      if (s) {
        var a = this._cacheKeyFn(r);
        s.delete(a)
      }
      return this
    }, e.clearAll = function() {
      var r = this._cacheMap;
      return r && r.clear(), this
    }, e.prime = function(r, s) {
      var a = this._cacheMap;
      if (a) {
        var i = this._cacheKeyFn(r);
        if (a.get(i) === void 0) {
          var o;
          s instanceof Error ? (o = Promise.reject(s), o.catch(function() {})) : o = Promise.resolve(s), a.set(i, o)
        }
      }
      return this
    }, t
  }(),
  Wa = typeof Xt == "object" && typeof Xt.nextTick == "function" ? function(t) {
    en || (en = Promise.resolve()), en.then(function() {
      Xt.nextTick(t)
    })
  } : typeof setImmediate == "function" ? function(t) {
    setImmediate(t)
  } : function(t) {
    setTimeout(t)
  },
  en;

function La(t) {
  var e = t._batch;
  if (e !== null && !e.hasDispatched && e.keys.length < t._maxBatchSize) return e;
  var n = {
    hasDispatched: !1,
    keys: [],
    callbacks: []
  };
  return t._batch = n, t._batchScheduleFn(function() {
    qa(t, n)
  }), n
}

function qa(t, e) {
  if (e.hasDispatched = !0, e.keys.length === 0) {
    on(e);
    return
  }
  var n;
  try {
    n = t._batchLoadFn(e.keys)
  } catch (r) {
    return tn(t, e, new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function " + ("errored synchronously: " + String(r) + ".")))
  }
  if (!n || typeof n.then != "function") return tn(t, e, new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " + ("not return a Promise: " + String(n) + ".")));
  n.then(function(r) {
    if (!sr(r)) throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " + ("not return a Promise of an Array: " + String(r) + "."));
    if (r.length !== e.keys.length) throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys." + (`

Keys:
` + String(e.keys)) + (`

Values:
` + String(r)));
    on(e);
    for (var s = 0; s < e.callbacks.length; s++) {
      var a = r[s];
      a instanceof Error ? e.callbacks[s].reject(a) : e.callbacks[s].resolve(a)
    }
  }).catch(function(r) {
    tn(t, e, r)
  })
}

function tn(t, e, n) {
  on(e);
  for (var r = 0; r < e.keys.length; r++) t.clear(e.keys[r]), e.callbacks[r].reject(n)
}

function on(t) {
  if (t.cacheHits)
    for (var e = 0; e < t.cacheHits.length; e++) t.cacheHits[e]()
}

function Za(t) {
  var e = !t || t.batch !== !1;
  if (!e) return 1;
  var n = t && t.maxBatchSize;
  if (n === void 0) return 1 / 0;
  if (typeof n != "number" || n < 1) throw new TypeError("maxBatchSize must be a positive number: " + n);
  return n
}

function $a(t) {
  var e = t && t.batchScheduleFn;
  if (e === void 0) return Wa;
  if (typeof e != "function") throw new TypeError("batchScheduleFn must be a function: " + e);
  return e
}

function Fa(t) {
  var e = t && t.cacheKeyFn;
  if (e === void 0) return function(n) {
    return n
  };
  if (typeof e != "function") throw new TypeError("cacheKeyFn must be a function: " + e);
  return e
}

function Ha(t) {
  var e = !t || t.cache !== !1;
  if (!e) return null;
  var n = t && t.cacheMap;
  if (n === void 0) return new Map;
  if (n !== null) {
    var r = ["get", "set", "delete", "clear"],
      s = r.filter(function(a) {
        return n && typeof n[a] != "function"
      });
    if (s.length !== 0) throw new TypeError("Custom cacheMap missing methods: " + s.join(", "))
  }
  return n
}

function Ka(t) {
  return t && t.name ? t.name : null
}

function sr(t) {
  return typeof t == "object" && t !== null && typeof t.length == "number" && (t.length === 0 || t.length > 0 && Object.prototype.hasOwnProperty.call(t, t.length - 1))
}
var Qa = Na;
const ir = ar(Ua);
var x;
(function(t) {
  t.assertEqual = s => s;

  function e(s) {}
  t.assertIs = e;

  function n(s) {
    throw new Error
  }
  t.assertNever = n, t.arrayToEnum = s => {
    const a = {};
    for (const i of s) a[i] = i;
    return a
  }, t.getValidEnumValues = s => {
    const a = t.objectKeys(s).filter(o => typeof s[s[o]] != "number"),
      i = {};
    for (const o of a) i[o] = s[o];
    return t.objectValues(i)
  }, t.objectValues = s => t.objectKeys(s).map(function(a) {
    return s[a]
  }), t.objectKeys = typeof Object.keys == "function" ? s => Object.keys(s) : s => {
    const a = [];
    for (const i in s) Object.prototype.hasOwnProperty.call(s, i) && a.push(i);
    return a
  }, t.find = (s, a) => {
    for (const i of s)
      if (a(i)) return i
  }, t.isInteger = typeof Number.isInteger == "function" ? s => Number.isInteger(s) : s => typeof s == "number" && isFinite(s) && Math.floor(s) === s;

  function r(s, a = " | ") {
    return s.map(i => typeof i == "string" ? `'${i}'` : i).join(a)
  }
  t.joinValues = r, t.jsonStringifyReplacer = (s, a) => typeof a == "bigint" ? a.toString() : a
})(x || (x = {}));
var Bt;
(function(t) {
  t.mergeShapes = (e, n) => ({
    ...e,
    ...n
  })
})(Bt || (Bt = {}));
const p = x.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
  se = t => {
    switch (typeof t) {
      case "undefined":
        return p.undefined;
      case "string":
        return p.string;
      case "number":
        return isNaN(t) ? p.nan : p.number;
      case "boolean":
        return p.boolean;
      case "function":
        return p.function;
      case "bigint":
        return p.bigint;
      case "symbol":
        return p.symbol;
      case "object":
        return Array.isArray(t) ? p.array : t === null ? p.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? p.promise : typeof Map < "u" && t instanceof Map ? p.map : typeof Set < "u" && t instanceof Set ? p.set : typeof Date < "u" && t instanceof Date ? p.date : p.object;
      default:
        return p.unknown
    }
  },
  f = x.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]),
  or = t => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class $ extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = r => {
      this.issues = [...this.issues, r]
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r]
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = e
  }
  get errors() {
    return this.issues
  }
  format(e) {
    const n = e || function(a) {
        return a.message
      },
      r = {
        _errors: []
      },
      s = a => {
        for (const i of a.issues)
          if (i.code === "invalid_union") i.unionErrors.map(s);
          else if (i.code === "invalid_return_type") s(i.returnTypeError);
        else if (i.code === "invalid_arguments") s(i.argumentsError);
        else if (i.path.length === 0) r._errors.push(n(i));
        else {
          let o = r,
            l = 0;
          for (; l < i.path.length;) {
            const d = i.path[l];
            l === i.path.length - 1 ? (o[d] = o[d] || {
              _errors: []
            }, o[d]._errors.push(n(i))) : o[d] = o[d] || {
              _errors: []
            }, o = o[d], l++
          }
        }
      };
    return s(this), r
  }
  static assert(e) {
    if (!(e instanceof $)) throw new Error(`Not a ZodError: ${e}`)
  }
  toString() {
    return this.message
  }
  get message() {
    return JSON.stringify(this.issues, x.jsonStringifyReplacer, 2)
  }
  get isEmpty() {
    return this.issues.length === 0
  }
  flatten(e = n => n.message) {
    const n = {},
      r = [];
    for (const s of this.issues) s.path.length > 0 ? (n[s.path[0]] = n[s.path[0]] || [], n[s.path[0]].push(e(s))) : r.push(e(s));
    return {
      formErrors: r,
      fieldErrors: n
    }
  }
  get formErrors() {
    return this.flatten()
  }
}
$.create = t => new $(t);
const Ce = (t, e) => {
  let n;
  switch (t.code) {
    case f.invalid_type:
      t.received === p.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
      break;
    case f.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(t.expected,x.jsonStringifyReplacer)}`;
      break;
    case f.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${x.joinValues(t.keys,", ")}`;
      break;
    case f.invalid_union:
      n = "Invalid input";
      break;
    case f.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${x.joinValues(t.options)}`;
      break;
    case f.invalid_enum_value:
      n = `Invalid enum value. Expected ${x.joinValues(t.options)}, received '${t.received}'`;
      break;
    case f.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case f.invalid_return_type:
      n = "Invalid function return type";
      break;
    case f.invalid_date:
      n = "Invalid date";
      break;
    case f.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : x.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
      break;
    case f.too_small:
      t.type === "array" ? n = `Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
      break;
    case f.too_big:
      t.type === "array" ? n = `Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
      break;
    case f.custom:
      n = "Invalid input";
      break;
    case f.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case f.not_multiple_of:
      n = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case f.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = e.defaultError, x.assertNever(t)
  }
  return {
    message: n
  }
};
let cr = Ce;

function lr(t) {
  cr = t
}

function dt() {
  return cr
}
const ut = t => {
    const {
      data: e,
      path: n,
      errorMaps: r,
      issueData: s
    } = t, a = [...n, ...s.path || []], i = {
      ...s,
      path: a
    };
    if (s.message !== void 0) return {
      ...s,
      path: a,
      message: s.message
    };
    let o = "";
    const l = r.filter(d => !!d).slice().reverse();
    for (const d of l) o = d(i, {
      data: e,
      defaultError: o
    }).message;
    return {
      ...s,
      path: a,
      message: o
    }
  },
  dr = [];

function m(t, e) {
  const n = dt(),
    r = ut({
      issueData: e,
      data: t.data,
      path: t.path,
      errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, n, n === Ce ? void 0 : Ce].filter(s => !!s)
    });
  t.common.issues.push(r)
}
class j {
  constructor() {
    this.value = "valid"
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty")
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted")
  }
  static mergeArray(e, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted") return _;
      s.status === "dirty" && e.dirty(), r.push(s.value)
    }
    return {
      status: e.value,
      value: r
    }
  }
  static async mergeObjectAsync(e, n) {
    const r = [];
    for (const s of n) {
      const a = await s.key,
        i = await s.value;
      r.push({
        key: a,
        value: i
      })
    }
    return j.mergeObjectSync(e, r)
  }
  static mergeObjectSync(e, n) {
    const r = {};
    for (const s of n) {
      const {
        key: a,
        value: i
      } = s;
      if (a.status === "aborted" || i.status === "aborted") return _;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (r[a.value] = i.value)
    }
    return {
      status: e.value,
      value: r
    }
  }
}
const _ = Object.freeze({
    status: "aborted"
  }),
  _e = t => ({
    status: "dirty",
    value: t
  }),
  U = t => ({
    status: "valid",
    value: t
  }),
  Et = t => t.status === "aborted",
  Tt = t => t.status === "dirty",
  Me = t => t.status === "valid",
  Ie = t => typeof Promise < "u" && t instanceof Promise;

function Pt(t, e, n, r) {
  if (typeof e == "function" ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(t)
}

function ur(t, e, n, r, s) {
  if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(t, n), n
}
var y;
(function(t) {
  t.errToObj = e => typeof e == "string" ? {
    message: e
  } : e || {}, t.toString = e => typeof e == "string" ? e : e == null ? void 0 : e.message
})(y || (y = {}));
var it, ot;
class X {
  constructor(e, n, r, s) {
    this._cachedPath = [], this.parent = e, this.data = n, this._path = r, this._key = s
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
  }
}
const Un = (t, e) => {
  if (Me(e)) return {
    success: !0,
    data: e.value
  };
  if (!t.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new $(t.common.issues);
      return this._error = n, this._error
    }
  }
};

function k(t) {
  if (!t) return {};
  const {
    errorMap: e,
    invalid_type_error: n,
    required_error: r,
    description: s
  } = t;
  if (e && (n || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? {
    errorMap: e,
    description: s
  } : {
    errorMap: (i, o) => {
      var l, d;
      const {
        message: u
      } = t;
      return i.code === "invalid_enum_value" ? {
        message: u ?? o.defaultError
      } : typeof o.data > "u" ? {
        message: (l = u ?? r) !== null && l !== void 0 ? l : o.defaultError
      } : i.code !== "invalid_type" ? {
        message: o.defaultError
      } : {
        message: (d = u ?? n) !== null && d !== void 0 ? d : o.defaultError
      }
    },
    description: s
  }
}
class A {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
  }
  get description() {
    return this._def.description
  }
  _getType(e) {
    return se(e.data)
  }
  _getOrReturnCtx(e, n) {
    return n || {
      common: e.parent.common,
      data: e.data,
      parsedType: se(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    }
  }
  _processInputParams(e) {
    return {
      status: new j,
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: se(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    }
  }
  _parseSync(e) {
    const n = this._parse(e);
    if (Ie(n)) throw new Error("Synchronous parse encountered promise.");
    return n
  }
  _parseAsync(e) {
    const n = this._parse(e);
    return Promise.resolve(n)
  }
  parse(e, n) {
    const r = this.safeParse(e, n);
    if (r.success) return r.data;
    throw r.error
  }
  safeParse(e, n) {
    var r;
    const s = {
        common: {
          issues: [],
          async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: se(e)
      },
      a = this._parseSync({
        data: e,
        path: s.path,
        parent: s
      });
    return Un(s, a)
  }
  async parseAsync(e, n) {
    const r = await this.safeParseAsync(e, n);
    if (r.success) return r.data;
    throw r.error
  }
  async safeParseAsync(e, n) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: se(e)
      },
      s = this._parse({
        data: e,
        path: r.path,
        parent: r
      }),
      a = await (Ie(s) ? s : Promise.resolve(s));
    return Un(r, a)
  }
  refine(e, n) {
    const r = s => typeof n == "string" || typeof n > "u" ? {
      message: n
    } : typeof n == "function" ? n(s) : n;
    return this._refinement((s, a) => {
      const i = e(s),
        o = () => a.addIssue({
          code: f.custom,
          ...r(s)
        });
      return typeof Promise < "u" && i instanceof Promise ? i.then(l => l ? !0 : (o(), !1)) : i ? !0 : (o(), !1)
    })
  }
  refinement(e, n) {
    return this._refinement((r, s) => e(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1))
  }
  _refinement(e) {
    return new F({
      schema: this,
      typeName: b.ZodEffects,
      effect: {
        type: "refinement",
        refinement: e
      }
    })
  }
  superRefine(e) {
    return this._refinement(e)
  }
  optional() {
    return G.create(this, this._def)
  }
  nullable() {
    return le.create(this, this._def)
  }
  nullish() {
    return this.nullable().optional()
  }
  array() {
    return Q.create(this, this._def)
  }
  promise() {
    return ke.create(this, this._def)
  }
  or(e) {
    return Ue.create([this, e], this._def)
  }
  and(e) {
    return Ve.create(this, e, this._def)
  }
  transform(e) {
    return new F({
      ...k(this._def),
      schema: this,
      typeName: b.ZodEffects,
      effect: {
        type: "transform",
        transform: e
      }
    })
  }
  default (e) {
    const n = typeof e == "function" ? e : () => e;
    return new qe({
      ...k(this._def),
      innerType: this,
      defaultValue: n,
      typeName: b.ZodDefault
    })
  }
  brand() {
    return new Ot({
      typeName: b.ZodBranded,
      type: this,
      ...k(this._def)
    })
  } catch (e) {
    const n = typeof e == "function" ? e : () => e;
    return new Ze({
      ...k(this._def),
      innerType: this,
      catchValue: n,
      typeName: b.ZodCatch
    })
  }
  describe(e) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: e
    })
  }
  pipe(e) {
    return He.create(this, e)
  }
  readonly() {
    return $e.create(this)
  }
  isOptional() {
    return this.safeParse(void 0).success
  }
  isNullable() {
    return this.safeParse(null).success
  }
}
const Ga = /^c[^\s-]{8,}$/i,
  Ya = /^[0-9a-z]+$/,
  Ja = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  Xa = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  es = /^[a-z0-9_-]{21}$/i,
  ts = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  ns = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  rs = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let nn;
const as = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ss = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  is = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  fr = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  os = new RegExp(`^${fr}$`);

function hr(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e
}

function cs(t) {
  return new RegExp(`^${hr(t)}$`)
}

function pn(t) {
  let e = `${fr}T${hr(t)}`;
  const n = [];
  return n.push(t.local ? "Z?" : "Z"), t.offset && n.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${n.join("|")})`, new RegExp(`^${e}$`)
}

function ls(t, e) {
  return !!((e === "v4" || !e) && as.test(t) || (e === "v6" || !e) && ss.test(t))
}
class K extends A {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== p.string) {
      const a = this._getOrReturnCtx(e);
      return m(a, {
        code: f.invalid_type,
        expected: p.string,
        received: a.parsedType
      }), _
    }
    const r = new j;
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min") e.data.length < a.value && (s = this._getOrReturnCtx(e, s), m(s, {
        code: f.too_small,
        minimum: a.value,
        type: "string",
        inclusive: !0,
        exact: !1,
        message: a.message
      }), r.dirty());
      else if (a.kind === "max") e.data.length > a.value && (s = this._getOrReturnCtx(e, s), m(s, {
      code: f.too_big,
      maximum: a.value,
      type: "string",
      inclusive: !0,
      exact: !1,
      message: a.message
    }), r.dirty());
    else if (a.kind === "length") {
      const i = e.data.length > a.value,
        o = e.data.length < a.value;
      (i || o) && (s = this._getOrReturnCtx(e, s), i ? m(s, {
        code: f.too_big,
        maximum: a.value,
        type: "string",
        inclusive: !0,
        exact: !0,
        message: a.message
      }) : o && m(s, {
        code: f.too_small,
        minimum: a.value,
        type: "string",
        inclusive: !0,
        exact: !0,
        message: a.message
      }), r.dirty())
    } else if (a.kind === "email") ns.test(e.data) || (s = this._getOrReturnCtx(e, s), m(s, {
      validation: "email",
      code: f.invalid_string,
      message: a.message
    }), r.dirty());
    else if (a.kind === "emoji") nn || (nn = new RegExp(rs, "u")), nn.test(e.data) || (s = this._getOrReturnCtx(e, s), m(s, {
      validation: "emoji",
      code: f.invalid_string,
      message: a.message
    }), r.dirty());
    else if (a.kind === "uuid") Xa.test(e.data) || (s = this._getOrReturnCtx(e, s), m(s, {
      validation: "uuid",
      code: f.invalid_string,
      message: a.message
    }), r.dirty());
    else if (a.kind === "nanoid") es.test(e.data) || (s = this._getOrReturnCtx(e, s), m(s, {
      validation: "nanoid",
      code: f.invalid_string,
      message: a.message
    }), r.dirty());
    else if (a.kind === "cuid") Ga.test(e.data) || (s = this._getOrReturnCtx(e, s), m(s, {
      validation: "cuid",
      code: f.invalid_string,
      message: a.message
    }), r.dirty());
    else if (a.kind === "cuid2") Ya.test(e.data) || (s = this._getOrReturnCtx(e, s), m(s, {
      validation: "cuid2",
      code: f.invalid_string,
      message: a.message
    }), r.dirty());
    else if (a.kind === "ulid") Ja.test(e.data) || (s = this._getOrReturnCtx(e, s), m(s, {
      validation: "ulid",
      code: f.invalid_string,
      message: a.message
    }), r.dirty());
    else if (a.kind === "url") try {
      new URL(e.data)
    } catch {
      s = this._getOrReturnCtx(e, s), m(s, {
        validation: "url",
        code: f.invalid_string,
        message: a.message
      }), r.dirty()
    } else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), m(s, {
      validation: "regex",
      code: f.invalid_string,
      message: a.message
    }), r.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(e, s), m(s, {
      code: f.invalid_string,
      validation: {
        includes: a.value,
        position: a.position
      },
      message: a.message
    }), r.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (s = this._getOrReturnCtx(e, s), m(s, {
      code: f.invalid_string,
      validation: {
        startsWith: a.value
      },
      message: a.message
    }), r.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (s = this._getOrReturnCtx(e, s), m(s, {
      code: f.invalid_string,
      validation: {
        endsWith: a.value
      },
      message: a.message
    }), r.dirty()) : a.kind === "datetime" ? pn(a).test(e.data) || (s = this._getOrReturnCtx(e, s), m(s, {
      code: f.invalid_string,
      validation: "datetime",
      message: a.message
    }), r.dirty()) : a.kind === "date" ? os.test(e.data) || (s = this._getOrReturnCtx(e, s), m(s, {
      code: f.invalid_string,
      validation: "date",
      message: a.message
    }), r.dirty()) : a.kind === "time" ? cs(a).test(e.data) || (s = this._getOrReturnCtx(e, s), m(s, {
      code: f.invalid_string,
      validation: "time",
      message: a.message
    }), r.dirty()) : a.kind === "duration" ? ts.test(e.data) || (s = this._getOrReturnCtx(e, s), m(s, {
      validation: "duration",
      code: f.invalid_string,
      message: a.message
    }), r.dirty()) : a.kind === "ip" ? ls(e.data, a.version) || (s = this._getOrReturnCtx(e, s), m(s, {
      validation: "ip",
      code: f.invalid_string,
      message: a.message
    }), r.dirty()) : a.kind === "base64" ? is.test(e.data) || (s = this._getOrReturnCtx(e, s), m(s, {
      validation: "base64",
      code: f.invalid_string,
      message: a.message
    }), r.dirty()) : x.assertNever(a);
    return {
      status: r.value,
      value: e.data
    }
  }
  _regex(e, n, r) {
    return this.refinement(s => e.test(s), {
      validation: n,
      code: f.invalid_string,
      ...y.errToObj(r)
    })
  }
  _addCheck(e) {
    return new K({
      ...this._def,
      checks: [...this._def.checks, e]
    })
  }
  email(e) {
    return this._addCheck({
      kind: "email",
      ...y.errToObj(e)
    })
  }
  url(e) {
    return this._addCheck({
      kind: "url",
      ...y.errToObj(e)
    })
  }
  emoji(e) {
    return this._addCheck({
      kind: "emoji",
      ...y.errToObj(e)
    })
  }
  uuid(e) {
    return this._addCheck({
      kind: "uuid",
      ...y.errToObj(e)
    })
  }
  nanoid(e) {
    return this._addCheck({
      kind: "nanoid",
      ...y.errToObj(e)
    })
  }
  cuid(e) {
    return this._addCheck({
      kind: "cuid",
      ...y.errToObj(e)
    })
  }
  cuid2(e) {
    return this._addCheck({
      kind: "cuid2",
      ...y.errToObj(e)
    })
  }
  ulid(e) {
    return this._addCheck({
      kind: "ulid",
      ...y.errToObj(e)
    })
  }
  base64(e) {
    return this._addCheck({
      kind: "base64",
      ...y.errToObj(e)
    })
  }
  ip(e) {
    return this._addCheck({
      kind: "ip",
      ...y.errToObj(e)
    })
  }
  datetime(e) {
    var n, r;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof(e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (n = e == null ? void 0 : e.offset) !== null && n !== void 0 ? n : !1,
      local: (r = e == null ? void 0 : e.local) !== null && r !== void 0 ? r : !1,
      ...y.errToObj(e == null ? void 0 : e.message)
    })
  }
  date(e) {
    return this._addCheck({
      kind: "date",
      message: e
    })
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof(e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ...y.errToObj(e == null ? void 0 : e.message)
    })
  }
  duration(e) {
    return this._addCheck({
      kind: "duration",
      ...y.errToObj(e)
    })
  }
  regex(e, n) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...y.errToObj(n)
    })
  }
  includes(e, n) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: n == null ? void 0 : n.position,
      ...y.errToObj(n == null ? void 0 : n.message)
    })
  }
  startsWith(e, n) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...y.errToObj(n)
    })
  }
  endsWith(e, n) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...y.errToObj(n)
    })
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...y.errToObj(n)
    })
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...y.errToObj(n)
    })
  }
  length(e, n) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...y.errToObj(n)
    })
  }
  nonempty(e) {
    return this.min(1, y.errToObj(e))
  }
  trim() {
    return new K({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    })
  }
  toLowerCase() {
    return new K({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    })
  }
  toUpperCase() {
    return new K({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    })
  }
  get isDatetime() {
    return !!this._def.checks.find(e => e.kind === "datetime")
  }
  get isDate() {
    return !!this._def.checks.find(e => e.kind === "date")
  }
  get isTime() {
    return !!this._def.checks.find(e => e.kind === "time")
  }
  get isDuration() {
    return !!this._def.checks.find(e => e.kind === "duration")
  }
  get isEmail() {
    return !!this._def.checks.find(e => e.kind === "email")
  }
  get isURL() {
    return !!this._def.checks.find(e => e.kind === "url")
  }
  get isEmoji() {
    return !!this._def.checks.find(e => e.kind === "emoji")
  }
  get isUUID() {
    return !!this._def.checks.find(e => e.kind === "uuid")
  }
  get isNANOID() {
    return !!this._def.checks.find(e => e.kind === "nanoid")
  }
  get isCUID() {
    return !!this._def.checks.find(e => e.kind === "cuid")
  }
  get isCUID2() {
    return !!this._def.checks.find(e => e.kind === "cuid2")
  }
  get isULID() {
    return !!this._def.checks.find(e => e.kind === "ulid")
  }
  get isIP() {
    return !!this._def.checks.find(e => e.kind === "ip")
  }
  get isBase64() {
    return !!this._def.checks.find(e => e.kind === "base64")
  }
  get minLength() {
    let e = null;
    for (const n of this._def.checks) n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e
  }
  get maxLength() {
    let e = null;
    for (const n of this._def.checks) n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e
  }
}
K.create = t => {
  var e;
  return new K({
    checks: [],
    typeName: b.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...k(t)
  })
};

function ds(t, e) {
  const n = (t.toString().split(".")[1] || "").length,
    r = (e.toString().split(".")[1] || "").length,
    s = n > r ? n : r,
    a = parseInt(t.toFixed(s).replace(".", "")),
    i = parseInt(e.toFixed(s).replace(".", ""));
  return a % i / Math.pow(10, s)
}
class ie extends A {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== p.number) {
      const a = this._getOrReturnCtx(e);
      return m(a, {
        code: f.invalid_type,
        expected: p.number,
        received: a.parsedType
      }), _
    }
    let r;
    const s = new j;
    for (const a of this._def.checks) a.kind === "int" ? x.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
      code: f.invalid_type,
      expected: "integer",
      received: "float",
      message: a.message
    }), s.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (r = this._getOrReturnCtx(e, r), m(r, {
      code: f.too_small,
      minimum: a.value,
      type: "number",
      inclusive: a.inclusive,
      exact: !1,
      message: a.message
    }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (r = this._getOrReturnCtx(e, r), m(r, {
      code: f.too_big,
      maximum: a.value,
      type: "number",
      inclusive: a.inclusive,
      exact: !1,
      message: a.message
    }), s.dirty()) : a.kind === "multipleOf" ? ds(e.data, a.value) !== 0 && (r = this._getOrReturnCtx(e, r), m(r, {
      code: f.not_multiple_of,
      multipleOf: a.value,
      message: a.message
    }), s.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
      code: f.not_finite,
      message: a.message
    }), s.dirty()) : x.assertNever(a);
    return {
      status: s.value,
      value: e.data
    }
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, y.toString(n))
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, y.toString(n))
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, y.toString(n))
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, y.toString(n))
  }
  setLimit(e, n, r, s) {
    return new ie({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: n,
        inclusive: r,
        message: y.toString(s)
      }]
    })
  }
  _addCheck(e) {
    return new ie({
      ...this._def,
      checks: [...this._def.checks, e]
    })
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: y.toString(e)
    })
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: y.toString(e)
    })
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: y.toString(e)
    })
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: y.toString(e)
    })
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: y.toString(e)
    })
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: y.toString(n)
    })
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: y.toString(e)
    })
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: y.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: y.toString(e)
    })
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks) n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks) n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e
  }
  get isInt() {
    return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && x.isInteger(e.value))
  }
  get isFinite() {
    let e = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value)
    }
    return Number.isFinite(n) && Number.isFinite(e)
  }
}
ie.create = t => new ie({
  checks: [],
  typeName: b.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...k(t)
});
class oe extends A {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== p.bigint) {
      const a = this._getOrReturnCtx(e);
      return m(a, {
        code: f.invalid_type,
        expected: p.bigint,
        received: a.parsedType
      }), _
    }
    let r;
    const s = new j;
    for (const a of this._def.checks) a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (r = this._getOrReturnCtx(e, r), m(r, {
      code: f.too_small,
      type: "bigint",
      minimum: a.value,
      inclusive: a.inclusive,
      message: a.message
    }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (r = this._getOrReturnCtx(e, r), m(r, {
      code: f.too_big,
      type: "bigint",
      maximum: a.value,
      inclusive: a.inclusive,
      message: a.message
    }), s.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), m(r, {
      code: f.not_multiple_of,
      multipleOf: a.value,
      message: a.message
    }), s.dirty()) : x.assertNever(a);
    return {
      status: s.value,
      value: e.data
    }
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, y.toString(n))
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, y.toString(n))
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, y.toString(n))
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, y.toString(n))
  }
  setLimit(e, n, r, s) {
    return new oe({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: n,
        inclusive: r,
        message: y.toString(s)
      }]
    })
  }
  _addCheck(e) {
    return new oe({
      ...this._def,
      checks: [...this._def.checks, e]
    })
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: y.toString(e)
    })
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: y.toString(e)
    })
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: y.toString(e)
    })
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: y.toString(e)
    })
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: y.toString(n)
    })
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks) n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks) n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e
  }
}
oe.create = t => {
  var e;
  return new oe({
    checks: [],
    typeName: b.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...k(t)
  })
};
class Re extends A {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== p.boolean) {
      const r = this._getOrReturnCtx(e);
      return m(r, {
        code: f.invalid_type,
        expected: p.boolean,
        received: r.parsedType
      }), _
    }
    return U(e.data)
  }
}
Re.create = t => new Re({
  typeName: b.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...k(t)
});
class me extends A {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== p.date) {
      const a = this._getOrReturnCtx(e);
      return m(a, {
        code: f.invalid_type,
        expected: p.date,
        received: a.parsedType
      }), _
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return m(a, {
        code: f.invalid_date
      }), _
    }
    const r = new j;
    let s;
    for (const a of this._def.checks) a.kind === "min" ? e.data.getTime() < a.value && (s = this._getOrReturnCtx(e, s), m(s, {
      code: f.too_small,
      message: a.message,
      inclusive: !0,
      exact: !1,
      minimum: a.value,
      type: "date"
    }), r.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (s = this._getOrReturnCtx(e, s), m(s, {
      code: f.too_big,
      message: a.message,
      inclusive: !0,
      exact: !1,
      maximum: a.value,
      type: "date"
    }), r.dirty()) : x.assertNever(a);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    }
  }
  _addCheck(e) {
    return new me({
      ...this._def,
      checks: [...this._def.checks, e]
    })
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: y.toString(n)
    })
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: y.toString(n)
    })
  }
  get minDate() {
    let e = null;
    for (const n of this._def.checks) n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e != null ? new Date(e) : null
  }
  get maxDate() {
    let e = null;
    for (const n of this._def.checks) n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e != null ? new Date(e) : null
  }
}
me.create = t => new me({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: b.ZodDate,
  ...k(t)
});
class ft extends A {
  _parse(e) {
    if (this._getType(e) !== p.symbol) {
      const r = this._getOrReturnCtx(e);
      return m(r, {
        code: f.invalid_type,
        expected: p.symbol,
        received: r.parsedType
      }), _
    }
    return U(e.data)
  }
}
ft.create = t => new ft({
  typeName: b.ZodSymbol,
  ...k(t)
});
class Oe extends A {
  _parse(e) {
    if (this._getType(e) !== p.undefined) {
      const r = this._getOrReturnCtx(e);
      return m(r, {
        code: f.invalid_type,
        expected: p.undefined,
        received: r.parsedType
      }), _
    }
    return U(e.data)
  }
}
Oe.create = t => new Oe({
  typeName: b.ZodUndefined,
  ...k(t)
});
class je extends A {
  _parse(e) {
    if (this._getType(e) !== p.null) {
      const r = this._getOrReturnCtx(e);
      return m(r, {
        code: f.invalid_type,
        expected: p.null,
        received: r.parsedType
      }), _
    }
    return U(e.data)
  }
}
je.create = t => new je({
  typeName: b.ZodNull,
  ...k(t)
});
class Ae extends A {
  constructor() {
    super(...arguments), this._any = !0
  }
  _parse(e) {
    return U(e.data)
  }
}
Ae.create = t => new Ae({
  typeName: b.ZodAny,
  ...k(t)
});
class ge extends A {
  constructor() {
    super(...arguments), this._unknown = !0
  }
  _parse(e) {
    return U(e.data)
  }
}
ge.create = t => new ge({
  typeName: b.ZodUnknown,
  ...k(t)
});
class ee extends A {
  _parse(e) {
    const n = this._getOrReturnCtx(e);
    return m(n, {
      code: f.invalid_type,
      expected: p.never,
      received: n.parsedType
    }), _
  }
}
ee.create = t => new ee({
  typeName: b.ZodNever,
  ...k(t)
});
class ht extends A {
  _parse(e) {
    if (this._getType(e) !== p.undefined) {
      const r = this._getOrReturnCtx(e);
      return m(r, {
        code: f.invalid_type,
        expected: p.void,
        received: r.parsedType
      }), _
    }
    return U(e.data)
  }
}
ht.create = t => new ht({
  typeName: b.ZodVoid,
  ...k(t)
});
class Q extends A {
  _parse(e) {
    const {
      ctx: n,
      status: r
    } = this._processInputParams(e), s = this._def;
    if (n.parsedType !== p.array) return m(n, {
      code: f.invalid_type,
      expected: p.array,
      received: n.parsedType
    }), _;
    if (s.exactLength !== null) {
      const i = n.data.length > s.exactLength.value,
        o = n.data.length < s.exactLength.value;
      (i || o) && (m(n, {
        code: i ? f.too_big : f.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: i ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), r.dirty())
    }
    if (s.minLength !== null && n.data.length < s.minLength.value && (m(n, {
        code: f.too_small,
        minimum: s.minLength.value,
        type: "array",
        inclusive: !0,
        exact: !1,
        message: s.minLength.message
      }), r.dirty()), s.maxLength !== null && n.data.length > s.maxLength.value && (m(n, {
        code: f.too_big,
        maximum: s.maxLength.value,
        type: "array",
        inclusive: !0,
        exact: !1,
        message: s.maxLength.message
      }), r.dirty()), n.common.async) return Promise.all([...n.data].map((i, o) => s.type._parseAsync(new X(n, i, n.path, o)))).then(i => j.mergeArray(r, i));
    const a = [...n.data].map((i, o) => s.type._parseSync(new X(n, i, n.path, o)));
    return j.mergeArray(r, a)
  }
  get element() {
    return this._def.type
  }
  min(e, n) {
    return new Q({
      ...this._def,
      minLength: {
        value: e,
        message: y.toString(n)
      }
    })
  }
  max(e, n) {
    return new Q({
      ...this._def,
      maxLength: {
        value: e,
        message: y.toString(n)
      }
    })
  }
  length(e, n) {
    return new Q({
      ...this._def,
      exactLength: {
        value: e,
        message: y.toString(n)
      }
    })
  }
  nonempty(e) {
    return this.min(1, e)
  }
}
Q.create = (t, e) => new Q({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: b.ZodArray,
  ...k(e)
});

function Se(t) {
  if (t instanceof I) {
    const e = {};
    for (const n in t.shape) {
      const r = t.shape[n];
      e[n] = G.create(Se(r))
    }
    return new I({
      ...t._def,
      shape: () => e
    })
  } else return t instanceof Q ? new Q({
    ...t._def,
    type: Se(t.element)
  }) : t instanceof G ? G.create(Se(t.unwrap())) : t instanceof le ? le.create(Se(t.unwrap())) : t instanceof Y ? Y.create(t.items.map(e => Se(e))) : t
}
class I extends A {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const e = this._def.shape(),
      n = x.objectKeys(e);
    return this._cached = {
      shape: e,
      keys: n
    }
  }
  _parse(e) {
    if (this._getType(e) !== p.object) {
      const d = this._getOrReturnCtx(e);
      return m(d, {
        code: f.invalid_type,
        expected: p.object,
        received: d.parsedType
      }), _
    }
    const {
      status: r,
      ctx: s
    } = this._processInputParams(e), {
      shape: a,
      keys: i
    } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof ee && this._def.unknownKeys === "strip"))
      for (const d in s.data) i.includes(d) || o.push(d);
    const l = [];
    for (const d of i) {
      const u = a[d],
        v = s.data[d];
      l.push({
        key: {
          status: "valid",
          value: d
        },
        value: u._parse(new X(s, v, s.path, d)),
        alwaysSet: d in s.data
      })
    }
    if (this._def.catchall instanceof ee) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const u of o) l.push({
          key: {
            status: "valid",
            value: u
          },
          value: {
            status: "valid",
            value: s.data[u]
          }
        });
      else if (d === "strict") o.length > 0 && (m(s, {
        code: f.unrecognized_keys,
        keys: o
      }), r.dirty());
      else if (d !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.")
    } else {
      const d = this._def.catchall;
      for (const u of o) {
        const v = s.data[u];
        l.push({
          key: {
            status: "valid",
            value: u
          },
          value: d._parse(new X(s, v, s.path, u)),
          alwaysSet: u in s.data
        })
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const d = [];
      for (const u of l) {
        const v = await u.key,
          E = await u.value;
        d.push({
          key: v,
          value: E,
          alwaysSet: u.alwaysSet
        })
      }
      return d
    }).then(d => j.mergeObjectSync(r, d)) : j.mergeObjectSync(r, l)
  }
  get shape() {
    return this._def.shape()
  }
  strict(e) {
    return y.errToObj, new I({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (n, r) => {
          var s, a, i, o;
          const l = (i = (a = (s = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(s, n, r).message) !== null && i !== void 0 ? i : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (o = y.errToObj(e).message) !== null && o !== void 0 ? o : l
          } : {
            message: l
          }
        }
      } : {}
    })
  }
  strip() {
    return new I({
      ...this._def,
      unknownKeys: "strip"
    })
  }
  passthrough() {
    return new I({
      ...this._def,
      unknownKeys: "passthrough"
    })
  }
  extend(e) {
    return new I({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    })
  }
  merge(e) {
    return new I({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: b.ZodObject
    })
  }
  setKey(e, n) {
    return this.augment({
      [e]: n
    })
  }
  catchall(e) {
    return new I({
      ...this._def,
      catchall: e
    })
  }
  pick(e) {
    const n = {};
    return x.objectKeys(e).forEach(r => {
      e[r] && this.shape[r] && (n[r] = this.shape[r])
    }), new I({
      ...this._def,
      shape: () => n
    })
  }
  omit(e) {
    const n = {};
    return x.objectKeys(this.shape).forEach(r => {
      e[r] || (n[r] = this.shape[r])
    }), new I({
      ...this._def,
      shape: () => n
    })
  }
  deepPartial() {
    return Se(this)
  }
  partial(e) {
    const n = {};
    return x.objectKeys(this.shape).forEach(r => {
      const s = this.shape[r];
      e && !e[r] ? n[r] = s : n[r] = s.optional()
    }), new I({
      ...this._def,
      shape: () => n
    })
  }
  required(e) {
    const n = {};
    return x.objectKeys(this.shape).forEach(r => {
      if (e && !e[r]) n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof G;) a = a._def.innerType;
        n[r] = a
      }
    }), new I({
      ...this._def,
      shape: () => n
    })
  }
  keyof() {
    return gr(x.objectKeys(this.shape))
  }
}
I.create = (t, e) => new I({
  shape: () => t,
  unknownKeys: "strip",
  catchall: ee.create(),
  typeName: b.ZodObject,
  ...k(e)
});
I.strictCreate = (t, e) => new I({
  shape: () => t,
  unknownKeys: "strict",
  catchall: ee.create(),
  typeName: b.ZodObject,
  ...k(e)
});
I.lazycreate = (t, e) => new I({
  shape: t,
  unknownKeys: "strip",
  catchall: ee.create(),
  typeName: b.ZodObject,
  ...k(e)
});
class Ue extends A {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e), r = this._def.options;

    function s(a) {
      for (const o of a)
        if (o.result.status === "valid") return o.result;
      for (const o of a)
        if (o.result.status === "dirty") return n.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map(o => new $(o.ctx.common.issues));
      return m(n, {
        code: f.invalid_union,
        unionErrors: i
      }), _
    }
    if (n.common.async) return Promise.all(r.map(async a => {
      const i = {
        ...n,
        common: {
          ...n.common,
          issues: []
        },
        parent: null
      };
      return {
        result: await a._parseAsync({
          data: n.data,
          path: n.path,
          parent: i
        }),
        ctx: i
      }
    })).then(s);
    {
      let a;
      const i = [];
      for (const l of r) {
        const d = {
            ...n,
            common: {
              ...n.common,
              issues: []
            },
            parent: null
          },
          u = l._parseSync({
            data: n.data,
            path: n.path,
            parent: d
          });
        if (u.status === "valid") return u;
        u.status === "dirty" && !a && (a = {
          result: u,
          ctx: d
        }), d.common.issues.length && i.push(d.common.issues)
      }
      if (a) return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map(l => new $(l));
      return m(n, {
        code: f.invalid_union,
        unionErrors: o
      }), _
    }
  }
  get options() {
    return this._def.options
  }
}
Ue.create = (t, e) => new Ue({
  options: t,
  typeName: b.ZodUnion,
  ...k(e)
});
const ae = t => t instanceof Ne ? ae(t.schema) : t instanceof F ? ae(t.innerType()) : t instanceof We ? [t.value] : t instanceof ce ? t.options : t instanceof Le ? x.objectValues(t.enum) : t instanceof qe ? ae(t._def.innerType) : t instanceof Oe ? [void 0] : t instanceof je ? [null] : t instanceof G ? [void 0, ...ae(t.unwrap())] : t instanceof le ? [null, ...ae(t.unwrap())] : t instanceof Ot || t instanceof $e ? ae(t.unwrap()) : t instanceof Ze ? ae(t._def.innerType) : [];
class bt extends A {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    if (n.parsedType !== p.object) return m(n, {
      code: f.invalid_type,
      expected: p.object,
      received: n.parsedType
    }), _;
    const r = this.discriminator,
      s = n.data[r],
      a = this.optionsMap.get(s);
    return a ? n.common.async ? a._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : a._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (m(n, {
      code: f.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), _)
  }
  get discriminator() {
    return this._def.discriminator
  }
  get options() {
    return this._def.options
  }
  get optionsMap() {
    return this._def.optionsMap
  }
  static create(e, n, r) {
    const s = new Map;
    for (const a of n) {
      const i = ae(a.shape[e]);
      if (!i.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of i) {
        if (s.has(o)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        s.set(o, a)
      }
    }
    return new bt({
      typeName: b.ZodDiscriminatedUnion,
      discriminator: e,
      options: n,
      optionsMap: s,
      ...k(r)
    })
  }
}

function cn(t, e) {
  const n = se(t),
    r = se(e);
  if (t === e) return {
    valid: !0,
    data: t
  };
  if (n === p.object && r === p.object) {
    const s = x.objectKeys(e),
      a = x.objectKeys(t).filter(o => s.indexOf(o) !== -1),
      i = {
        ...t,
        ...e
      };
    for (const o of a) {
      const l = cn(t[o], e[o]);
      if (!l.valid) return {
        valid: !1
      };
      i[o] = l.data
    }
    return {
      valid: !0,
      data: i
    }
  } else if (n === p.array && r === p.array) {
    if (t.length !== e.length) return {
      valid: !1
    };
    const s = [];
    for (let a = 0; a < t.length; a++) {
      const i = t[a],
        o = e[a],
        l = cn(i, o);
      if (!l.valid) return {
        valid: !1
      };
      s.push(l.data)
    }
    return {
      valid: !0,
      data: s
    }
  } else return n === p.date && r === p.date && +t == +e ? {
    valid: !0,
    data: t
  } : {
    valid: !1
  }
}
class Ve extends A {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e), s = (a, i) => {
      if (Et(a) || Et(i)) return _;
      const o = cn(a.value, i.value);
      return o.valid ? ((Tt(a) || Tt(i)) && n.dirty(), {
        status: n.value,
        value: o.data
      }) : (m(r, {
        code: f.invalid_intersection_types
      }), _)
    };
    return r.common.async ? Promise.all([this._def.left._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    })]).then(([a, i]) => s(a, i)) : s(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }))
  }
}
Ve.create = (t, e, n) => new Ve({
  left: t,
  right: e,
  typeName: b.ZodIntersection,
  ...k(n)
});
class Y extends A {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.parsedType !== p.array) return m(r, {
      code: f.invalid_type,
      expected: p.array,
      received: r.parsedType
    }), _;
    if (r.data.length < this._def.items.length) return m(r, {
      code: f.too_small,
      minimum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), _;
    !this._def.rest && r.data.length > this._def.items.length && (m(r, {
      code: f.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((i, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new X(r, i, r.path, o)) : null
    }).filter(i => !!i);
    return r.common.async ? Promise.all(a).then(i => j.mergeArray(n, i)) : j.mergeArray(n, a)
  }
  get items() {
    return this._def.items
  }
  rest(e) {
    return new Y({
      ...this._def,
      rest: e
    })
  }
}
Y.create = (t, e) => {
  if (!Array.isArray(t)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Y({
    items: t,
    typeName: b.ZodTuple,
    rest: null,
    ...k(e)
  })
};
class De extends A {
  get keySchema() {
    return this._def.keyType
  }
  get valueSchema() {
    return this._def.valueType
  }
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.parsedType !== p.object) return m(r, {
      code: f.invalid_type,
      expected: p.object,
      received: r.parsedType
    }), _;
    const s = [],
      a = this._def.keyType,
      i = this._def.valueType;
    for (const o in r.data) s.push({
      key: a._parse(new X(r, o, r.path, o)),
      value: i._parse(new X(r, r.data[o], r.path, o)),
      alwaysSet: o in r.data
    });
    return r.common.async ? j.mergeObjectAsync(n, s) : j.mergeObjectSync(n, s)
  }
  get element() {
    return this._def.valueType
  }
  static create(e, n, r) {
    return n instanceof A ? new De({
      keyType: e,
      valueType: n,
      typeName: b.ZodRecord,
      ...k(r)
    }) : new De({
      keyType: K.create(),
      valueType: e,
      typeName: b.ZodRecord,
      ...k(n)
    })
  }
}
class gt extends A {
  get keySchema() {
    return this._def.keyType
  }
  get valueSchema() {
    return this._def.valueType
  }
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.parsedType !== p.map) return m(r, {
      code: f.invalid_type,
      expected: p.map,
      received: r.parsedType
    }), _;
    const s = this._def.keyType,
      a = this._def.valueType,
      i = [...r.data.entries()].map(([o, l], d) => ({
        key: s._parse(new X(r, o, r.path, [d, "key"])),
        value: a._parse(new X(r, l, r.path, [d, "value"]))
      }));
    if (r.common.async) {
      const o = new Map;
      return Promise.resolve().then(async () => {
        for (const l of i) {
          const d = await l.key,
            u = await l.value;
          if (d.status === "aborted" || u.status === "aborted") return _;
          (d.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(d.value, u.value)
        }
        return {
          status: n.value,
          value: o
        }
      })
    } else {
      const o = new Map;
      for (const l of i) {
        const d = l.key,
          u = l.value;
        if (d.status === "aborted" || u.status === "aborted") return _;
        (d.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(d.value, u.value)
      }
      return {
        status: n.value,
        value: o
      }
    }
  }
}
gt.create = (t, e, n) => new gt({
  valueType: e,
  keyType: t,
  typeName: b.ZodMap,
  ...k(n)
});
class pe extends A {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.parsedType !== p.set) return m(r, {
      code: f.invalid_type,
      expected: p.set,
      received: r.parsedType
    }), _;
    const s = this._def;
    s.minSize !== null && r.data.size < s.minSize.value && (m(r, {
      code: f.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), n.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (m(r, {
      code: f.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;

    function i(l) {
      const d = new Set;
      for (const u of l) {
        if (u.status === "aborted") return _;
        u.status === "dirty" && n.dirty(), d.add(u.value)
      }
      return {
        status: n.value,
        value: d
      }
    }
    const o = [...r.data.values()].map((l, d) => a._parse(new X(r, l, r.path, d)));
    return r.common.async ? Promise.all(o).then(l => i(l)) : i(o)
  }
  min(e, n) {
    return new pe({
      ...this._def,
      minSize: {
        value: e,
        message: y.toString(n)
      }
    })
  }
  max(e, n) {
    return new pe({
      ...this._def,
      maxSize: {
        value: e,
        message: y.toString(n)
      }
    })
  }
  size(e, n) {
    return this.min(e, n).max(e, n)
  }
  nonempty(e) {
    return this.min(1, e)
  }
}
pe.create = (t, e) => new pe({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: b.ZodSet,
  ...k(e)
});
class we extends A {
  constructor() {
    super(...arguments), this.validate = this.implement
  }
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    if (n.parsedType !== p.function) return m(n, {
      code: f.invalid_type,
      expected: p.function,
      received: n.parsedType
    }), _;

    function r(o, l) {
      return ut({
        data: o,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, dt(), Ce].filter(d => !!d),
        issueData: {
          code: f.invalid_arguments,
          argumentsError: l
        }
      })
    }

    function s(o, l) {
      return ut({
        data: o,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, dt(), Ce].filter(d => !!d),
        issueData: {
          code: f.invalid_return_type,
          returnTypeError: l
        }
      })
    }
    const a = {
        errorMap: n.common.contextualErrorMap
      },
      i = n.data;
    if (this._def.returns instanceof ke) {
      const o = this;
      return U(async function(...l) {
        const d = new $([]),
          u = await o._def.args.parseAsync(l, a).catch(R => {
            throw d.addIssue(r(l, R)), d
          }),
          v = await Reflect.apply(i, this, u);
        return await o._def.returns._def.type.parseAsync(v, a).catch(R => {
          throw d.addIssue(s(v, R)), d
        })
      })
    } else {
      const o = this;
      return U(function(...l) {
        const d = o._def.args.safeParse(l, a);
        if (!d.success) throw new $([r(l, d.error)]);
        const u = Reflect.apply(i, this, d.data),
          v = o._def.returns.safeParse(u, a);
        if (!v.success) throw new $([s(u, v.error)]);
        return v.data
      })
    }
  }
  parameters() {
    return this._def.args
  }
  returnType() {
    return this._def.returns
  }
  args(...e) {
    return new we({
      ...this._def,
      args: Y.create(e).rest(ge.create())
    })
  }
  returns(e) {
    return new we({
      ...this._def,
      returns: e
    })
  }
  implement(e) {
    return this.parse(e)
  }
  strictImplement(e) {
    return this.parse(e)
  }
  static create(e, n, r) {
    return new we({
      args: e || Y.create([]).rest(ge.create()),
      returns: n || ge.create(),
      typeName: b.ZodFunction,
      ...k(r)
    })
  }
}
class Ne extends A {
  get schema() {
    return this._def.getter()
  }
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    return this._def.getter()._parse({
      data: n.data,
      path: n.path,
      parent: n
    })
  }
}
Ne.create = (t, e) => new Ne({
  getter: t,
  typeName: b.ZodLazy,
  ...k(e)
});
class We extends A {
  _parse(e) {
    if (e.data !== this._def.value) {
      const n = this._getOrReturnCtx(e);
      return m(n, {
        received: n.data,
        code: f.invalid_literal,
        expected: this._def.value
      }), _
    }
    return {
      status: "valid",
      value: e.data
    }
  }
  get value() {
    return this._def.value
  }
}
We.create = (t, e) => new We({
  value: t,
  typeName: b.ZodLiteral,
  ...k(e)
});

function gr(t, e) {
  return new ce({
    values: t,
    typeName: b.ZodEnum,
    ...k(e)
  })
}
class ce extends A {
  constructor() {
    super(...arguments), it.set(this, void 0)
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const n = this._getOrReturnCtx(e),
        r = this._def.values;
      return m(n, {
        expected: x.joinValues(r),
        received: n.parsedType,
        code: f.invalid_type
      }), _
    }
    if (Pt(this, it) || ur(this, it, new Set(this._def.values)), !Pt(this, it).has(e.data)) {
      const n = this._getOrReturnCtx(e),
        r = this._def.values;
      return m(n, {
        received: n.data,
        code: f.invalid_enum_value,
        options: r
      }), _
    }
    return U(e.data)
  }
  get options() {
    return this._def.values
  }
  get enum() {
    const e = {};
    for (const n of this._def.values) e[n] = n;
    return e
  }
  get Values() {
    const e = {};
    for (const n of this._def.values) e[n] = n;
    return e
  }
  get Enum() {
    const e = {};
    for (const n of this._def.values) e[n] = n;
    return e
  }
  extract(e, n = this._def) {
    return ce.create(e, {
      ...this._def,
      ...n
    })
  }
  exclude(e, n = this._def) {
    return ce.create(this.options.filter(r => !e.includes(r)), {
      ...this._def,
      ...n
    })
  }
}
it = new WeakMap;
ce.create = gr;
class Le extends A {
  constructor() {
    super(...arguments), ot.set(this, void 0)
  }
  _parse(e) {
    const n = x.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(e);
    if (r.parsedType !== p.string && r.parsedType !== p.number) {
      const s = x.objectValues(n);
      return m(r, {
        expected: x.joinValues(s),
        received: r.parsedType,
        code: f.invalid_type
      }), _
    }
    if (Pt(this, ot) || ur(this, ot, new Set(x.getValidEnumValues(this._def.values))), !Pt(this, ot).has(e.data)) {
      const s = x.objectValues(n);
      return m(r, {
        received: r.data,
        code: f.invalid_enum_value,
        options: s
      }), _
    }
    return U(e.data)
  }
  get enum() {
    return this._def.values
  }
}
ot = new WeakMap;
Le.create = (t, e) => new Le({
  values: t,
  typeName: b.ZodNativeEnum,
  ...k(e)
});
class ke extends A {
  unwrap() {
    return this._def.type
  }
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    if (n.parsedType !== p.promise && n.common.async === !1) return m(n, {
      code: f.invalid_type,
      expected: p.promise,
      received: n.parsedType
    }), _;
    const r = n.parsedType === p.promise ? n.data : Promise.resolve(n.data);
    return U(r.then(s => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })))
  }
}
ke.create = (t, e) => new ke({
  type: t,
  typeName: b.ZodPromise,
  ...k(e)
});
class F extends A {
  innerType() {
    return this._def.schema
  }
  sourceType() {
    return this._def.schema._def.typeName === b.ZodEffects ? this._def.schema.sourceType() : this._def.schema
  }
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e), s = this._def.effect || null, a = {
      addIssue: i => {
        m(r, i), i.fatal ? n.abort() : n.dirty()
      },
      get path() {
        return r.path
      }
    };
    if (a.addIssue = a.addIssue.bind(a), s.type === "preprocess") {
      const i = s.transform(r.data, a);
      if (r.common.async) return Promise.resolve(i).then(async o => {
        if (n.value === "aborted") return _;
        const l = await this._def.schema._parseAsync({
          data: o,
          path: r.path,
          parent: r
        });
        return l.status === "aborted" ? _ : l.status === "dirty" || n.value === "dirty" ? _e(l.value) : l
      });
      {
        if (n.value === "aborted") return _;
        const o = this._def.schema._parseSync({
          data: i,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? _ : o.status === "dirty" || n.value === "dirty" ? _e(o.value) : o
      }
    }
    if (s.type === "refinement") {
      const i = o => {
        const l = s.refinement(o, a);
        if (r.common.async) return Promise.resolve(l);
        if (l instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o
      };
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? _ : (o.status === "dirty" && n.dirty(), i(o.value), {
          status: n.value,
          value: o.value
        })
      } else return this._def.schema._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }).then(o => o.status === "aborted" ? _ : (o.status === "dirty" && n.dirty(), i(o.value).then(() => ({
        status: n.value,
        value: o.value
      }))))
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Me(i)) return i;
        const o = s.transform(i.value, a);
        if (o instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return {
          status: n.value,
          value: o
        }
      } else return this._def.schema._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }).then(i => Me(i) ? Promise.resolve(s.transform(i.value, a)).then(o => ({
        status: n.value,
        value: o
      })) : i);
    x.assertNever(s)
  }
}
F.create = (t, e, n) => new F({
  schema: t,
  typeName: b.ZodEffects,
  effect: e,
  ...k(n)
});
F.createWithPreprocess = (t, e, n) => new F({
  schema: e,
  effect: {
    type: "preprocess",
    transform: t
  },
  typeName: b.ZodEffects,
  ...k(n)
});
class G extends A {
  _parse(e) {
    return this._getType(e) === p.undefined ? U(void 0) : this._def.innerType._parse(e)
  }
  unwrap() {
    return this._def.innerType
  }
}
G.create = (t, e) => new G({
  innerType: t,
  typeName: b.ZodOptional,
  ...k(e)
});
class le extends A {
  _parse(e) {
    return this._getType(e) === p.null ? U(null) : this._def.innerType._parse(e)
  }
  unwrap() {
    return this._def.innerType
  }
}
le.create = (t, e) => new le({
  innerType: t,
  typeName: b.ZodNullable,
  ...k(e)
});
class qe extends A {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    let r = n.data;
    return n.parsedType === p.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    })
  }
  removeDefault() {
    return this._def.innerType
  }
}
qe.create = (t, e) => new qe({
  innerType: t,
  typeName: b.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...k(e)
});
class Ze extends A {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return Ie(s) ? s.then(a => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new $(r.common.issues)
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new $(r.common.issues)
        },
        input: r.data
      })
    }
  }
  removeCatch() {
    return this._def.innerType
  }
}
Ze.create = (t, e) => new Ze({
  innerType: t,
  typeName: b.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...k(e)
});
class mt extends A {
  _parse(e) {
    if (this._getType(e) !== p.nan) {
      const r = this._getOrReturnCtx(e);
      return m(r, {
        code: f.invalid_type,
        expected: p.nan,
        received: r.parsedType
      }), _
    }
    return {
      status: "valid",
      value: e.data
    }
  }
}
mt.create = t => new mt({
  typeName: b.ZodNaN,
  ...k(t)
});
const mr = Symbol("zod_brand");
class Ot extends A {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    })
  }
  unwrap() {
    return this._def.type
  }
}
class He extends A {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.common.async) return (async () => {
      const a = await this._def.in._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return a.status === "aborted" ? _ : a.status === "dirty" ? (n.dirty(), _e(a.value)) : this._def.out._parseAsync({
        data: a.value,
        path: r.path,
        parent: r
      })
    })();
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return s.status === "aborted" ? _ : s.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: r.path,
        parent: r
      })
    }
  }
  static create(e, n) {
    return new He({
      in: e,
      out: n,
      typeName: b.ZodPipeline
    })
  }
}
class $e extends A {
  _parse(e) {
    const n = this._def.innerType._parse(e),
      r = s => (Me(s) && (s.value = Object.freeze(s.value)), s);
    return Ie(n) ? n.then(s => r(s)) : r(n)
  }
  unwrap() {
    return this._def.innerType
  }
}
$e.create = (t, e) => new $e({
  innerType: t,
  typeName: b.ZodReadonly,
  ...k(e)
});

function yn(t, e = {}, n) {
  return t ? Ae.create().superRefine((r, s) => {
    var a, i;
    if (!t(r)) {
      const o = typeof e == "function" ? e(r) : typeof e == "string" ? {
          message: e
        } : e,
        l = (i = (a = o.fatal) !== null && a !== void 0 ? a : n) !== null && i !== void 0 ? i : !0,
        d = typeof o == "string" ? {
          message: o
        } : o;
      s.addIssue({
        code: "custom",
        ...d,
        fatal: l
      })
    }
  }) : Ae.create()
}
const pr = {
  object: I.lazycreate
};
var b;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly"
})(b || (b = {}));
const yr = (t, e = {
    message: `Input not instance of ${t.name}`
  }) => yn(n => n instanceof t, e),
  bn = K.create,
  vn = ie.create,
  br = mt.create,
  vr = oe.create,
  _n = Re.create,
  _r = me.create,
  wr = ft.create,
  Cr = Oe.create,
  Ar = je.create,
  kr = Ae.create,
  xr = ge.create,
  Br = ee.create,
  Er = ht.create,
  Tr = Q.create,
  Pr = I.create,
  Sr = I.strictCreate,
  zr = Ue.create,
  Mr = bt.create,
  Ir = Ve.create,
  Rr = Y.create,
  Or = De.create,
  jr = gt.create,
  Ur = pe.create,
  Vr = we.create,
  Dr = Ne.create,
  Nr = We.create,
  Wr = ce.create,
  Lr = Le.create,
  qr = ke.create,
  St = F.create,
  Zr = G.create,
  $r = le.create,
  Fr = F.createWithPreprocess,
  Hr = He.create,
  Kr = () => bn().optional(),
  Qr = () => vn().optional(),
  Gr = () => _n().optional(),
  Yr = {
    string: t => K.create({
      ...t,
      coerce: !0
    }),
    number: t => ie.create({
      ...t,
      coerce: !0
    }),
    boolean: t => Re.create({
      ...t,
      coerce: !0
    }),
    bigint: t => oe.create({
      ...t,
      coerce: !0
    }),
    date: t => me.create({
      ...t,
      coerce: !0
    })
  },
  Jr = _;
var Vn = Object.freeze({
  __proto__: null,
  defaultErrorMap: Ce,
  setErrorMap: lr,
  getErrorMap: dt,
  makeIssue: ut,
  EMPTY_PATH: dr,
  addIssueToContext: m,
  ParseStatus: j,
  INVALID: _,
  DIRTY: _e,
  OK: U,
  isAborted: Et,
  isDirty: Tt,
  isValid: Me,
  isAsync: Ie,
  get util() {
    return x
  },
  get objectUtil() {
    return Bt
  },
  ZodParsedType: p,
  getParsedType: se,
  ZodType: A,
  datetimeRegex: pn,
  ZodString: K,
  ZodNumber: ie,
  ZodBigInt: oe,
  ZodBoolean: Re,
  ZodDate: me,
  ZodSymbol: ft,
  ZodUndefined: Oe,
  ZodNull: je,
  ZodAny: Ae,
  ZodUnknown: ge,
  ZodNever: ee,
  ZodVoid: ht,
  ZodArray: Q,
  ZodObject: I,
  ZodUnion: Ue,
  ZodDiscriminatedUnion: bt,
  ZodIntersection: Ve,
  ZodTuple: Y,
  ZodRecord: De,
  ZodMap: gt,
  ZodSet: pe,
  ZodFunction: we,
  ZodLazy: Ne,
  ZodLiteral: We,
  ZodEnum: ce,
  ZodNativeEnum: Le,
  ZodPromise: ke,
  ZodEffects: F,
  ZodTransformer: F,
  ZodOptional: G,
  ZodNullable: le,
  ZodDefault: qe,
  ZodCatch: Ze,
  ZodNaN: mt,
  BRAND: mr,
  ZodBranded: Ot,
  ZodPipeline: He,
  ZodReadonly: $e,
  custom: yn,
  Schema: A,
  ZodSchema: A,
  late: pr,
  get ZodFirstPartyTypeKind() {
    return b
  },
  coerce: Yr,
  any: kr,
  array: Tr,
  bigint: vr,
  boolean: _n,
  date: _r,
  discriminatedUnion: Mr,
  effect: St,
  enum: Wr,
  function: Vr,
  instanceof: yr,
  intersection: Ir,
  lazy: Dr,
  literal: Nr,
  map: jr,
  nan: br,
  nativeEnum: Lr,
  never: Br,
  null: Ar,
  nullable: $r,
  number: vn,
  object: Pr,
  oboolean: Gr,
  onumber: Qr,
  optional: Zr,
  ostring: Kr,
  pipeline: Hr,
  preprocess: Fr,
  promise: qr,
  record: Or,
  set: Ur,
  strictObject: Sr,
  string: bn,
  symbol: wr,
  transformer: St,
  tuple: Rr,
  undefined: Cr,
  union: zr,
  unknown: xr,
  void: Er,
  NEVER: Jr,
  ZodIssueCode: f,
  quotelessJson: or,
  ZodError: $
});
const us = Object.freeze(Object.defineProperty({
    __proto__: null,
    BRAND: mr,
    DIRTY: _e,
    EMPTY_PATH: dr,
    INVALID: _,
    NEVER: Jr,
    OK: U,
    ParseStatus: j,
    Schema: A,
    ZodAny: Ae,
    ZodArray: Q,
    ZodBigInt: oe,
    ZodBoolean: Re,
    ZodBranded: Ot,
    ZodCatch: Ze,
    ZodDate: me,
    ZodDefault: qe,
    ZodDiscriminatedUnion: bt,
    ZodEffects: F,
    ZodEnum: ce,
    ZodError: $,
    get ZodFirstPartyTypeKind() {
      return b
    },
    ZodFunction: we,
    ZodIntersection: Ve,
    ZodIssueCode: f,
    ZodLazy: Ne,
    ZodLiteral: We,
    ZodMap: gt,
    ZodNaN: mt,
    ZodNativeEnum: Le,
    ZodNever: ee,
    ZodNull: je,
    ZodNullable: le,
    ZodNumber: ie,
    ZodObject: I,
    ZodOptional: G,
    ZodParsedType: p,
    ZodPipeline: He,
    ZodPromise: ke,
    ZodReadonly: $e,
    ZodRecord: De,
    ZodSchema: A,
    ZodSet: pe,
    ZodString: K,
    ZodSymbol: ft,
    ZodTransformer: F,
    ZodTuple: Y,
    ZodType: A,
    ZodUndefined: Oe,
    ZodUnion: Ue,
    ZodUnknown: ge,
    ZodVoid: ht,
    addIssueToContext: m,
    any: kr,
    array: Tr,
    bigint: vr,
    boolean: _n,
    coerce: Yr,
    custom: yn,
    date: _r,
    datetimeRegex: pn,
    default: Vn,
    defaultErrorMap: Ce,
    discriminatedUnion: Mr,
    effect: St,
    enum: Wr,
    function: Vr,
    getErrorMap: dt,
    getParsedType: se,
    instanceof: yr,
    intersection: Ir,
    isAborted: Et,
    isAsync: Ie,
    isDirty: Tt,
    isValid: Me,
    late: pr,
    lazy: Dr,
    literal: Nr,
    makeIssue: ut,
    map: jr,
    nan: br,
    nativeEnum: Lr,
    never: Br,
    null: Ar,
    nullable: $r,
    number: vn,
    object: Pr,
    get objectUtil() {
      return Bt
    },
    oboolean: Gr,
    onumber: Qr,
    optional: Zr,
    ostring: Kr,
    pipeline: Hr,
    preprocess: Fr,
    promise: qr,
    quotelessJson: or,
    record: Or,
    set: Ur,
    setErrorMap: lr,
    strictObject: Sr,
    string: bn,
    symbol: wr,
    transformer: St,
    tuple: Rr,
    undefined: Cr,
    union: zr,
    unknown: xr,
    get util() {
      return x
    },
    void: Er,
    z: Vn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Xr = ar(us),
  fs = "@ton/ton",
  hs = "15.1.0",
  gs = "https://github.com/ton-org/ton.git",
  ms = "Whales Corp. <developers@whalescorp.com>",
  ps = "MIT",
  ys = "dist/index.js",
  bs = ["dist"],
  vs = {
    docs: "rm -fr docs && typedoc src/index.ts",
    build: "rm -fr dist && tsc --declaration",
    test: "jest --verbose --runInBand",
    release: "yarn build && yarn release-it --npm.yarn1"
  },
  _s = {
    "@release-it/keep-a-changelog": "^5.0.0",
    "@ton/core": "^0.59.0",
    "@ton/crypto": "3.2.0",
    "@ton/emulator": "^2.1.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.7.10",
    buffer: "^6.0.3",
    expect: "^27.1.0",
    jest: "^27.1.0",
    "jest-mock": "^27.1.0",
    karma: "^6.3.4",
    "karma-chrome-launcher": "^3.1.0",
    "karma-jasmine": "^4.0.1",
    "karma-typescript": "^5.5.2",
    "karma-webpack": "^5.0.0",
    prando: "^6.0.1",
    "release-it": "^17.1.1",
    "ts-jest": "^27.0.5",
    "ts-loader": "^9.2.5",
    "ts-node": "^10.7.0",
    typedoc: "^0.23.24",
    typescript: "^5.6.3",
    webpack: "^5.51.2"
  },
  ws = {
    axios: "^1.6.7",
    dataloader: "^2.0.0",
    "symbol.inspect": "1.0.1",
    teslabot: "^1.3.0",
    zod: "^3.21.4"
  },
  Cs = {
    "@ton/core": ">=0.59.0",
    "@ton/crypto": ">=3.2.0"
  },
  As = {
    access: "public",
    registry: "https://registry.npmjs.org/"
  },
  ks = "yarn@3.4.1",
  xs = {
    name: fs,
    version: hs,
    repository: gs,
    author: ms,
    license: ps,
    main: ys,
    files: bs,
    scripts: vs,
    devDependencies: _s,
    dependencies: ws,
    peerDependencies: Cs,
    publishConfig: As,
    "release-it": {
      github: {
        release: !0
      },
      plugins: {
        "@release-it/keep-a-changelog": {
          filename: "CHANGELOG.md"
        }
      }
    },
    packageManager: ks
  };
var ea = O && O.__importDefault || function(t) {
  return t && t.__esModule ? t : {
    default: t
  }
};
Object.defineProperty(yt, "__esModule", {
  value: !0
});
yt.HttpApi = void 0;
const Bs = Rt,
  Dn = ea(Qa),
  Es = ea(ir),
  h = Xr,
  Ts = xs.version,
  Fe = h.z.object({
    "@type": h.z.literal("ton.blockIdExt"),
    workchain: h.z.number(),
    shard: h.z.string(),
    seqno: h.z.number(),
    root_hash: h.z.string(),
    file_hash: h.z.string()
  }),
  Ps = h.z.object({
    balance: h.z.union([h.z.number(), h.z.string()]),
    state: h.z.union([h.z.literal("active"), h.z.literal("uninitialized"), h.z.literal("frozen")]),
    data: h.z.string(),
    code: h.z.string(),
    last_transaction_id: h.z.object({
      "@type": h.z.literal("internal.transactionId"),
      lt: h.z.string(),
      hash: h.z.string()
    }),
    block_id: Fe,
    sync_utime: h.z.number()
  }),
  Ss = h.z.object({
    "@type": h.z.literal("ok")
  }),
  zs = h.z.object({
    "@type": h.z.literal("query.fees"),
    source_fees: h.z.object({
      "@type": h.z.literal("fees"),
      in_fwd_fee: h.z.number(),
      storage_fee: h.z.number(),
      gas_fee: h.z.number(),
      fwd_fee: h.z.number()
    })
  }),
  Ms = h.z.object({
    gas_used: h.z.number(),
    exit_code: h.z.number(),
    stack: h.z.array(h.z.unknown())
  }),
  Is = h.z.union([h.z.object({
    "@type": h.z.literal("msg.dataRaw"),
    body: h.z.string()
  }), h.z.object({
    "@type": h.z.literal("msg.dataText"),
    text: h.z.string()
  }), h.z.object({
    "@type": h.z.literal("msg.dataDecryptedText"),
    text: h.z.string()
  }), h.z.object({
    "@type": h.z.literal("msg.dataEncryptedText"),
    text: h.z.string()
  })]),
  Nn = h.z.object({
    source: h.z.string(),
    destination: h.z.string(),
    value: h.z.string(),
    fwd_fee: h.z.string(),
    ihr_fee: h.z.string(),
    created_lt: h.z.string(),
    body_hash: h.z.string(),
    msg_data: Is,
    message: h.z.string().optional()
  }),
  ln = h.z.object({
    data: h.z.string(),
    utime: h.z.number(),
    transaction_id: h.z.object({
      lt: h.z.string(),
      hash: h.z.string()
    }),
    fee: h.z.string(),
    storage_fee: h.z.string(),
    other_fee: h.z.string(),
    in_msg: h.z.union([h.z.undefined(), Nn]),
    out_msgs: h.z.array(Nn)
  }),
  Wn = h.z.array(ln),
  Rs = h.z.object({
    state_root_hash: h.z.string(),
    last: Fe,
    init: Fe
  }),
  Os = h.z.object({
    shards: h.z.array(Fe)
  }),
  js = h.z.object({
    "@type": h.z.literal("blocks.shortTxId"),
    mode: h.z.number(),
    account: h.z.string(),
    lt: h.z.string(),
    hash: h.z.string()
  }),
  Ln = h.z.object({
    id: Fe,
    req_count: h.z.number(),
    incomplete: h.z.boolean(),
    transactions: h.z.array(js)
  });
class qn {
  constructor(e, n, r, s) {
    this.namespace = e, this.cache = n, this.codec = r, this.keyEncoder = s
  }
  async get(e) {
    let n = await this.cache.get(this.namespace, this.keyEncoder(e));
    if (n) {
      let r = this.codec.safeParse(JSON.parse(n));
      if (r.success) return r.data
    }
    return null
  }
  async set(e, n) {
    n !== null ? await this.cache.set(this.namespace, this.keyEncoder(e), JSON.stringify(n)) : await this.cache.set(this.namespace, this.keyEncoder(e), null)
  }
}
class Us {
  constructor(e, n) {
    this.endpoint = e, this.cache = new Bs.InMemoryCache, this.parameters = {
      timeout: (n == null ? void 0 : n.timeout) || 3e4,
      apiKey: n == null ? void 0 : n.apiKey,
      adapter: n == null ? void 0 : n.adapter
    }, this.shardCache = new qn("ton-shard", this.cache, h.z.array(Fe), r => r + ""), this.shardLoader = new Dn.default(async r => await Promise.all(r.map(async s => {
      const a = await this.shardCache.get(s);
      if (a) return a;
      let i = (await this.doCall("shards", {
        seqno: s
      }, Os)).shards;
      return await this.shardCache.set(s, i), i
    }))), this.shardTransactionsCache = new qn("ton-shard-tx", this.cache, Ln, r => r.workchain + ":" + r.shard + ":" + r.seqno), this.shardTransactionsLoader = new Dn.default(async r => await Promise.all(r.map(async s => {
      const a = await this.shardTransactionsCache.get(s);
      if (a) return a;
      let i = await this.doCall("getBlockTransactions", {
        workchain: s.workchain,
        seqno: s.seqno,
        shard: s.shard
      }, Ln);
      return await this.shardTransactionsCache.set(s, i), i
    })), {
      cacheKeyFn: r => r.workchain + ":" + r.shard + ":" + r.seqno
    })
  }
  getAddressInformation(e) {
    return this.doCall("getAddressInformation", {
      address: e.toString()
    }, Ps)
  }
  async getTransactions(e, n) {
    const r = n.inclusive;
    delete n.inclusive;
    let s;
    n.hash && (s = B.from(n.hash, "base64").toString("hex"));
    let a = n.limit;
    n.hash && n.lt && r !== !0 && a++;
    let i = await this.doCall("getTransactions", {
      address: e.toString(),
      ...n,
      limit: a,
      hash: s
    }, Wn);
    return i.length > a && (i = i.slice(0, a)), n.hash && n.lt && r !== !0 && i.shift(), i
  }
  async getMasterchainInfo() {
    return await this.doCall("getMasterchainInfo", {}, Rs)
  }
  async getShards(e) {
    return await this.shardLoader.load(e)
  }
  async getBlockTransactions(e, n, r) {
    return await this.shardTransactionsLoader.load({
      workchain: e,
      seqno: n,
      shard: r
    })
  }
  async getTransaction(e, n, r) {
    let s = B.from(r, "base64").toString("hex"),
      i = (await this.doCall("getTransactions", {
        address: e.toString(),
        lt: n,
        hash: s,
        limit: 1
      }, Wn)).find(o => o.transaction_id.lt === n && o.transaction_id.hash === r);
    return i || null
  }
  async callGetMethod(e, n, r) {
    return await this.doCall("runGetMethod", {
      address: e.toString(),
      method: n,
      stack: Vs(r)
    }, Ms)
  }
  async sendBoc(e) {
    await this.doCall("sendBoc", {
      boc: e.toString("base64")
    }, Ss)
  }
  async estimateFee(e, n) {
    return await this.doCall("estimateFee", {
      address: e.toString(),
      body: n.body.toBoc().toString("base64"),
      init_data: n.initData ? n.initData.toBoc().toString("base64") : "",
      init_code: n.initCode ? n.initCode.toBoc().toString("base64") : "",
      ignore_chksig: n.ignoreSignature
    }, zs)
  }
  async tryLocateResultTx(e, n, r) {
    return await this.doCall("tryLocateResultTx", {
      source: e.toString(),
      destination: n.toString(),
      created_lt: r
    }, ln)
  }
  async tryLocateSourceTx(e, n, r) {
    return await this.doCall("tryLocateSourceTx", {
      source: e.toString(),
      destination: n.toString(),
      created_lt: r
    }, ln)
  }
  async doCall(e, n, r) {
    let s = {
      "Content-Type": "application/json",
      "X-Ton-Client-Version": Ts
    };
    this.parameters.apiKey && (s["X-API-Key"] = this.parameters.apiKey);
    let a = await Es.default.post(this.endpoint, JSON.stringify({
      id: "1",
      jsonrpc: "2.0",
      method: e,
      params: n
    }), {
      headers: s,
      timeout: this.parameters.timeout,
      adapter: this.parameters.adapter
    });
    if (a.status !== 200 || !a.data.ok) throw Error("Received error: " + JSON.stringify(a.data));
    let i = r.safeParse(a.data.result);
    if (i.success) return i.data;
    throw Error("Malformed response: " + i.error.format()._errors.join(", "))
  }
}
yt.HttpApi = Us;

function Vs(t) {
  let e = [];
  for (let n of t)
    if (n.type === "int") e.push(["num", n.value.toString()]);
    else if (n.type === "cell") e.push(["tvm.Cell", n.cell.toBoc().toString("base64")]);
  else if (n.type === "slice") e.push(["tvm.Slice", n.cell.toBoc().toString("base64")]);
  else if (n.type === "builder") e.push(["tvm.Builder", n.cell.toBoc().toString("base64")]);
  else throw Error("Unsupported stack item type: " + n.type);
  return e
}
var jt = {};
Object.defineProperty(jt, "__esModule", {
  value: !0
});
jt.TonClient = void 0;
const Ds = yt,
  S = M;
class Ns {
  constructor(e) {
    this.parameters = {
      endpoint: e.endpoint
    }, this.api = new Ds.HttpApi(this.parameters.endpoint, {
      timeout: e.timeout,
      apiKey: e.apiKey,
      adapter: e.httpAdapter
    })
  }
  async getBalance(e) {
    return (await this.getContractState(e)).balance
  }
  async runMethod(e, n, r = []) {
    let s = await this.api.callGetMethod(e, n, r);
    if (s.exit_code !== 0) throw Error("Unable to execute get method. Got exit_code: " + s.exit_code);
    return {
      gas_used: s.gas_used,
      stack: Zn(s.stack)
    }
  }
  async callGetMethod(e, n, r = []) {
    return this.runMethod(e, n, r)
  }
  async runMethodWithError(e, n, r = []) {
    let s = await this.api.callGetMethod(e, n, r);
    return {
      gas_used: s.gas_used,
      stack: Zn(s.stack),
      exit_code: s.exit_code
    }
  }
  async callGetMethodWithError(e, n, r = []) {
    return this.runMethodWithError(e, n, r)
  }
  async getTransactions(e, n) {
    let r = await this.api.getTransactions(e, n),
      s = [];
    for (let a of r) s.push((0, S.loadTransaction)(S.Cell.fromBoc(B.from(a.data, "base64"))[0].beginParse()));
    return s
  }
  async getTransaction(e, n, r) {
    let s = await this.api.getTransaction(e, n, r);
    return s ? (0, S.loadTransaction)(S.Cell.fromBoc(B.from(s.data, "base64"))[0].beginParse()) : null
  }
  async tryLocateResultTx(e, n, r) {
    let s = await this.api.tryLocateResultTx(e, n, r);
    return (0, S.loadTransaction)(S.Cell.fromBase64(s.data).beginParse())
  }
  async tryLocateSourceTx(e, n, r) {
    let s = await this.api.tryLocateSourceTx(e, n, r);
    return (0, S.loadTransaction)(S.Cell.fromBase64(s.data).beginParse())
  }
  async getMasterchainInfo() {
    let e = await this.api.getMasterchainInfo();
    return {
      workchain: e.init.workchain,
      shard: e.last.shard,
      initSeqno: e.init.seqno,
      latestSeqno: e.last.seqno
    }
  }
  async getWorkchainShards(e) {
    return (await this.api.getShards(e)).map(r => ({
      workchain: r.workchain,
      shard: r.shard,
      seqno: r.seqno
    }))
  }
  async getShardTransactions(e, n, r) {
    let s = await this.api.getBlockTransactions(e, n, r);
    if (s.incomplete) throw Error("Unsupported");
    return s.transactions.map(a => ({
      account: S.Address.parseRaw(a.account),
      lt: a.lt,
      hash: a.hash
    }))
  }
  async sendMessage(e) {
    const n = (0, S.beginCell)().store((0, S.storeMessage)(e)).endCell().toBoc();
    await this.api.sendBoc(n)
  }
  async sendFile(e) {
    await this.api.sendBoc(e)
  }
  async estimateExternalMessageFee(e, n) {
    return await this.api.estimateFee(e, {
      body: n.body,
      initCode: n.initCode,
      initData: n.initData,
      ignoreSignature: n.ignoreSignature
    })
  }
  async sendExternalMessage(e, n) {
    if (await this.isContractDeployed(e.address) || !e.init) {
      const r = (0, S.external)({
        to: e.address,
        body: n
      });
      await this.sendMessage(r)
    } else {
      const r = (0, S.external)({
        to: e.address,
        init: e.init,
        body: n
      });
      await this.sendMessage(r)
    }
  }
  async isContractDeployed(e) {
    return (await this.getContractState(e)).state === "active"
  }
  async getContractState(e) {
    let n = await this.api.getAddressInformation(e),
      r = BigInt(n.balance),
      s = n.state;
    return {
      balance: r,
      state: s,
      code: n.code !== "" ? B.from(n.code, "base64") : null,
      data: n.data !== "" ? B.from(n.data, "base64") : null,
      lastTransaction: n.last_transaction_id.lt !== "0" ? {
        lt: n.last_transaction_id.lt,
        hash: n.last_transaction_id.hash
      } : null,
      blockId: {
        workchain: n.block_id.workchain,
        shard: n.block_id.shard,
        seqno: n.block_id.seqno
      },
      timestampt: n.sync_utime
    }
  }
  open(e) {
    return (0, S.openContract)(e, n => dn(this, n.address, n.init))
  }
  provider(e, n) {
    return dn(this, e, n ?? null)
  }
}
jt.TonClient = Ns;

function be(t) {
  const e = t["@type"];
  switch (e) {
    case "tvm.list":
    case "tvm.tuple":
      return t.elements.map(be);
    case "tvm.cell":
      return S.Cell.fromBoc(B.from(t.bytes, "base64"))[0];
    case "tvm.slice":
      return S.Cell.fromBoc(B.from(t.bytes, "base64"))[0];
    case "tvm.stackEntryCell":
      return be(t.cell);
    case "tvm.stackEntrySlice":
      return be(t.slice);
    case "tvm.stackEntryTuple":
      return be(t.tuple);
    case "tvm.stackEntryList":
      return be(t.list);
    case "tvm.stackEntryNumber":
      return be(t.number);
    case "tvm.numberDecimal":
      return BigInt(t.number);
    default:
      throw Error("Unsupported item type: " + e)
  }
}

function Ws(t) {
  if (t[0] === "num") {
    let e = t[1];
    return e.startsWith("-") ? {
      type: "int",
      value: -BigInt(e.slice(1))
    } : {
      type: "int",
      value: BigInt(e)
    }
  } else {
    if (t[0] === "null") return {
      type: "null"
    };
    if (t[0] === "cell") return {
      type: "cell",
      cell: S.Cell.fromBoc(B.from(t[1].bytes, "base64"))[0]
    };
    if (t[0] === "slice") return {
      type: "slice",
      cell: S.Cell.fromBoc(B.from(t[1].bytes, "base64"))[0]
    };
    if (t[0] === "builder") return {
      type: "builder",
      cell: S.Cell.fromBoc(B.from(t[1].bytes, "base64"))[0]
    };
    if (t[0] === "tuple" || t[0] === "list") return t[1].elements.length === 0 ? {
      type: "null"
    } : {
      type: "tuple",
      items: t[1].elements.map(be)
    };
    throw Error("Unsupported stack item type: " + t[0])
  }
}

function Zn(t) {
  let e = [];
  for (let n of t) e.push(Ws(n));
  return new S.TupleReader(e)
}

function dn(t, e, n) {
  return {
    async getState() {
      let r = await t.getContractState(e),
        s = r.balance,
        a = r.lastTransaction ? {
          lt: BigInt(r.lastTransaction.lt),
          hash: B.from(r.lastTransaction.hash, "base64")
        } : null,
        i;
      if (r.state === "active") i = {
        type: "active",
        code: r.code ? r.code : null,
        data: r.data ? r.data : null
      };
      else if (r.state === "uninitialized") i = {
        type: "uninit"
      };
      else if (r.state === "frozen") i = {
        type: "frozen",
        stateHash: B.alloc(0)
      };
      else throw Error("Unsupported state");
      return {
        balance: s,
        last: a,
        state: i
      }
    },
    async get(r, s) {
      if (typeof r != "string") throw new Error("Method name must be a string for TonClient provider");
      return {
        stack: (await t.runMethod(e, r, s)).stack
      }
    },
    async external(r) {
      let s = null;
      n && !await t.isContractDeployed(e) && (s = n);
      const a = (0, S.external)({
        to: e,
        init: s,
        body: r
      });
      let i = (0, S.beginCell)().store((0, S.storeMessage)(a)).endCell().toBoc();
      await t.sendFile(i)
    },
    async internal(r, s) {
      let a = null;
      n && !await t.isContractDeployed(e) && (a = n);
      let i = !0;
      s.bounce !== null && s.bounce !== void 0 && (i = s.bounce);
      let o;
      typeof s.value == "string" ? o = (0, S.toNano)(s.value) : o = s.value;
      let l = null;
      typeof s.body == "string" ? l = (0, S.comment)(s.body) : s.body && (l = s.body), await r.send({
        to: e,
        value: o,
        bounce: i,
        sendMode: s.sendMode,
        init: a,
        body: l
      })
    },
    open(r) {
      return (0, S.openContract)(r, s => dn(t, s.address, s.init ?? null))
    },
    getTransactions(r, s, a, i) {
      return t.getTransactions(r, {
        limit: i ?? 100,
        lt: s.toString(),
        hash: a.toString("base64"),
        inclusive: !0
      })
    }
  }
}
var Ut = {},
  wn = {};
Object.defineProperty(wn, "__esModule", {
  value: !0
});
wn.toUrlSafe = Ls;

function Ls(t) {
  for (; t.indexOf("/") >= 0;) t = t.replace("/", "_");
  for (; t.indexOf("+") >= 0;) t = t.replace("+", "-");
  for (; t.indexOf("=") >= 0;) t = t.replace("=", "");
  return t
}
var Ct = O && O.__classPrivateFieldSet || function(t, e, n, r, s) {
    if (r === "m") throw new TypeError("Private method is not writable");
    if (r === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
    if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return r === "a" ? s.call(t, n) : s ? s.value = n : e.set(t, n), n
  },
  C = O && O.__classPrivateFieldGet || function(t, e, n, r) {
    if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
    if (typeof e == "function" ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t)
  },
  qs = O && O.__importDefault || function(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  },
  W, L, q, V;
Object.defineProperty(Ut, "__esModule", {
  value: !0
});
Ut.TonClient4 = void 0;
const Zs = qs(ir),
  N = M,
  rn = wn,
  c = Xr;
class $s {
  constructor(e) {
    W.set(this, void 0), L.set(this, void 0), q.set(this, void 0), V.set(this, void 0), Ct(this, V, Zs.default.create(), "f"), Ct(this, W, e.endpoint, "f"), Ct(this, L, e.timeout || 5e3, "f"), Ct(this, q, e.httpAdapter, "f"), e.requestInterceptor && C(this, V, "f").interceptors.request.use(e.requestInterceptor)
  }
  async getLastBlock() {
    let e = await C(this, V, "f").get(C(this, W, "f") + "/block/latest", {
        adapter: C(this, q, "f"),
        timeout: C(this, L, "f")
      }),
      n = Fs.safeParse(e.data);
    if (!n.success) throw Error("Mailformed response: " + n.error.format()._errors.join(", "));
    return n.data
  }
  async getBlock(e) {
    let n = await C(this, V, "f").get(C(this, W, "f") + "/block/" + e, {
        adapter: C(this, q, "f"),
        timeout: C(this, L, "f")
      }),
      r = $n.safeParse(n.data);
    if (!r.success) throw Error("Mailformed response");
    if (!r.data.exist) throw Error("Block is out of scope");
    return r.data.block
  }
  async getBlockByUtime(e) {
    let n = await C(this, V, "f").get(C(this, W, "f") + "/block/utime/" + e, {
        adapter: C(this, q, "f"),
        timeout: C(this, L, "f")
      }),
      r = $n.safeParse(n.data);
    if (!r.success) throw Error("Mailformed response");
    if (!r.data.exist) throw Error("Block is out of scope");
    return r.data.block
  }
  async getAccount(e, n) {
    let r = await C(this, V, "f").get(C(this, W, "f") + "/block/" + e + "/" + n.toString({
        urlSafe: !0
      }), {
        adapter: C(this, q, "f"),
        timeout: C(this, L, "f")
      }),
      s = Hs.safeParse(r.data);
    if (!s.success) throw Error("Mailformed response");
    return s.data
  }
  async getAccountLite(e, n) {
    let r = await C(this, V, "f").get(C(this, W, "f") + "/block/" + e + "/" + n.toString({
        urlSafe: !0
      }) + "/lite", {
        adapter: C(this, q, "f"),
        timeout: C(this, L, "f")
      }),
      s = Ks.safeParse(r.data);
    if (!s.success) throw Error("Mailformed response");
    return s.data
  }
  async isContractDeployed(e, n) {
    return (await this.getAccountLite(e, n)).account.state.type === "active"
  }
  async isAccountChanged(e, n, r) {
    let s = await C(this, V, "f").get(C(this, W, "f") + "/block/" + e + "/" + n.toString({
        urlSafe: !0
      }) + "/changed/" + r.toString(10), {
        adapter: C(this, q, "f"),
        timeout: C(this, L, "f")
      }),
      a = Qs.safeParse(s.data);
    if (!a.success) throw Error("Mailformed response");
    return a.data
  }
  async getAccountTransactions(e, n, r) {
    let s = await C(this, V, "f").get(C(this, W, "f") + "/account/" + e.toString({
        urlSafe: !0
      }) + "/tx/" + n.toString(10) + "/" + (0, rn.toUrlSafe)(r.toString("base64")), {
        adapter: C(this, q, "f"),
        timeout: C(this, L, "f")
      }),
      a = Xs.safeParse(s.data);
    if (!a.success) throw Error("Mailformed response");
    let i = a.data,
      o = [],
      l = N.Cell.fromBoc(B.from(i.boc, "base64"));
    for (let d = 0; d < i.blocks.length; d++) o.push({
      block: i.blocks[d],
      tx: (0, N.loadTransaction)(l[d].beginParse())
    });
    return o
  }
  async getAccountTransactionsParsed(e, n, r, s = 20) {
    let a = await C(this, V, "f").get(C(this, W, "f") + "/account/" + e.toString({
        urlSafe: !0
      }) + "/tx/parsed/" + n.toString(10) + "/" + (0, rn.toUrlSafe)(r.toString("base64")), {
        adapter: C(this, q, "f"),
        timeout: C(this, L, "f"),
        params: {
          count: s
        }
      }),
      i = ci.safeParse(a.data);
    if (!i.success) throw Error("Mailformed response");
    return i.data
  }
  async getConfig(e, n) {
    let r = "";
    n && n.length > 0 && (r = "/" + [...n].sort().join(","));
    let s = await C(this, V, "f").get(C(this, W, "f") + "/block/" + e + "/config" + r, {
        adapter: C(this, q, "f"),
        timeout: C(this, L, "f")
      }),
      a = Ys.safeParse(s.data);
    if (!a.success) throw Error("Mailformed response");
    return a.data
  }
  async runMethod(e, n, r, s) {
    let a = s && s.length > 0 ? "/" + (0, rn.toUrlSafe)((0, N.serializeTuple)(s).toBoc({
        idx: !1,
        crc32: !1
      }).toString("base64")) : "",
      i = C(this, W, "f") + "/block/" + e + "/" + n.toString({
        urlSafe: !0
      }) + "/run/" + encodeURIComponent(r) + a,
      o = await C(this, V, "f").get(i, {
        adapter: C(this, q, "f"),
        timeout: C(this, L, "f")
      }),
      l = Gs.safeParse(o.data);
    if (!l.success) throw Error("Mailformed response");
    let d = l.data.resultRaw ? (0, N.parseTuple)(N.Cell.fromBoc(B.from(l.data.resultRaw, "base64"))[0]) : [];
    return {
      exitCode: l.data.exitCode,
      result: d,
      resultRaw: l.data.resultRaw,
      block: l.data.block,
      shardBlock: l.data.shardBlock,
      reader: new N.TupleReader(d)
    }
  }
  async sendMessage(e) {
    let n = await C(this, V, "f").post(C(this, W, "f") + "/send", {
      boc: e.toString("base64")
    }, {
      adapter: C(this, q, "f"),
      timeout: C(this, L, "f")
    });
    if (!Js.safeParse(n.data).success) throw Error("Mailformed response");
    return {
      status: n.data.status
    }
  }
  open(e) {
    return (0, N.openContract)(e, n => ct(this, null, n.address, n.init))
  }
  openAt(e, n) {
    return (0, N.openContract)(n, r => ct(this, e, r.address, r.init))
  }
  provider(e, n) {
    return ct(this, null, e, n ?? null)
  }
  providerAt(e, n, r) {
    return ct(this, e, n, r ?? null)
  }
}
Ut.TonClient4 = $s;
W = new WeakMap, L = new WeakMap, q = new WeakMap, V = new WeakMap;

function ct(t, e, n, r) {
  return {
    async getState() {
      let s = e;
      s === null && (s = (await t.getLastBlock()).last.seqno);
      let a = await t.getAccount(s, n),
        i = a.account.last ? {
          lt: BigInt(a.account.last.lt),
          hash: B.from(a.account.last.hash, "base64")
        } : null,
        o;
      if (a.account.state.type === "active") o = {
        type: "active",
        code: a.account.state.code ? B.from(a.account.state.code, "base64") : null,
        data: a.account.state.data ? B.from(a.account.state.data, "base64") : null
      };
      else if (a.account.state.type === "uninit") o = {
        type: "uninit"
      };
      else if (a.account.state.type === "frozen") o = {
        type: "frozen",
        stateHash: B.from(a.account.state.stateHash, "base64")
      };
      else throw Error("Unsupported state");
      return {
        balance: BigInt(a.account.balance.coins),
        last: i,
        state: o
      }
    },
    async get(s, a) {
      if (typeof s != "string") throw new Error("Method name must be a string for TonClient4 provider");
      let i = e;
      i === null && (i = (await t.getLastBlock()).last.seqno);
      let o = await t.runMethod(i, n, s, a);
      if (o.exitCode !== 0 && o.exitCode !== 1) throw Error("Exit code: " + o.exitCode);
      return {
        stack: new N.TupleReader(o.result)
      }
    },
    async external(s) {
      let a = await t.getLastBlock(),
        i = null;
      r && (await t.getAccountLite(a.last.seqno, n)).account.state.type !== "active" && (i = r);
      const o = (0, N.external)({
        to: n,
        init: i,
        body: s
      });
      let l = (0, N.beginCell)().store((0, N.storeMessage)(o)).endCell().toBoc();
      await t.sendMessage(l)
    },
    async internal(s, a) {
      let i = await t.getLastBlock(),
        o = null;
      r && (await t.getAccountLite(i.last.seqno, n)).account.state.type !== "active" && (o = r);
      let l = !0;
      a.bounce !== null && a.bounce !== void 0 && (l = a.bounce);
      let d;
      typeof a.value == "string" ? d = (0, N.toNano)(a.value) : d = a.value;
      let u = null;
      typeof a.body == "string" ? u = (0, N.comment)(a.body) : a.body && (u = a.body), await s.send({
        to: n,
        value: d,
        bounce: l,
        sendMode: a.sendMode,
        init: o,
        body: u
      })
    },
    open(s) {
      return (0, N.openContract)(s, a => ct(t, e, a.address, a.init ?? null))
    },
    async getTransactions(s, a, i, o) {
      const l = typeof o == "number";
      if (l && o <= 0) return [];
      let d = [];
      do {
        const u = await t.getAccountTransactions(s, a, i),
          v = u[0].tx,
          [E, R] = [v.lt, v.hash()];
        if (d.length > 0 && E === a && R.equals(i) && u.shift(), u.length === 0) break;
        const g = u[u.length - 1].tx,
          [w, T] = [g.lt, g.hash()];
        if (w === a && T.equals(i)) break;
        d.push(...u.map(fe => fe.tx)), a = w, i = T
      } while (l && d.length < o);
      return l && (d = d.slice(0, o)), d
    }
  }
}
const Fs = c.z.object({
    last: c.z.object({
      seqno: c.z.number(),
      shard: c.z.string(),
      workchain: c.z.number(),
      fileHash: c.z.string(),
      rootHash: c.z.string()
    }),
    init: c.z.object({
      fileHash: c.z.string(),
      rootHash: c.z.string()
    }),
    stateRootHash: c.z.string(),
    now: c.z.number()
  }),
  $n = c.z.union([c.z.object({
    exist: c.z.literal(!1)
  }), c.z.object({
    exist: c.z.literal(!0),
    block: c.z.object({
      shards: c.z.array(c.z.object({
        workchain: c.z.number(),
        seqno: c.z.number(),
        shard: c.z.string(),
        rootHash: c.z.string(),
        fileHash: c.z.string(),
        transactions: c.z.array(c.z.object({
          account: c.z.string(),
          hash: c.z.string(),
          lt: c.z.string()
        }))
      }))
    })
  })]),
  ta = c.z.object({
    lastPaid: c.z.number(),
    duePayment: c.z.union([c.z.null(), c.z.string()]),
    used: c.z.object({
      bits: c.z.number(),
      cells: c.z.number(),
      publicCells: c.z.number()
    })
  }),
  Hs = c.z.object({
    account: c.z.object({
      state: c.z.union([c.z.object({
        type: c.z.literal("uninit")
      }), c.z.object({
        type: c.z.literal("active"),
        code: c.z.union([c.z.string(), c.z.null()]),
        data: c.z.union([c.z.string(), c.z.null()])
      }), c.z.object({
        type: c.z.literal("frozen"),
        stateHash: c.z.string()
      })]),
      balance: c.z.object({
        coins: c.z.string()
      }),
      last: c.z.union([c.z.null(), c.z.object({
        lt: c.z.string(),
        hash: c.z.string()
      })]),
      storageStat: c.z.union([c.z.null(), ta])
    }),
    block: c.z.object({
      workchain: c.z.number(),
      seqno: c.z.number(),
      shard: c.z.string(),
      rootHash: c.z.string(),
      fileHash: c.z.string()
    })
  }),
  Ks = c.z.object({
    account: c.z.object({
      state: c.z.union([c.z.object({
        type: c.z.literal("uninit")
      }), c.z.object({
        type: c.z.literal("active"),
        codeHash: c.z.string(),
        dataHash: c.z.string()
      }), c.z.object({
        type: c.z.literal("frozen"),
        stateHash: c.z.string()
      })]),
      balance: c.z.object({
        coins: c.z.string()
      }),
      last: c.z.union([c.z.null(), c.z.object({
        lt: c.z.string(),
        hash: c.z.string()
      })]),
      storageStat: c.z.union([c.z.null(), ta])
    })
  }),
  Qs = c.z.object({
    changed: c.z.boolean(),
    block: c.z.object({
      workchain: c.z.number(),
      seqno: c.z.number(),
      shard: c.z.string(),
      rootHash: c.z.string(),
      fileHash: c.z.string()
    })
  }),
  Gs = c.z.object({
    exitCode: c.z.number(),
    resultRaw: c.z.union([c.z.string(), c.z.null()]),
    block: c.z.object({
      workchain: c.z.number(),
      seqno: c.z.number(),
      shard: c.z.string(),
      rootHash: c.z.string(),
      fileHash: c.z.string()
    }),
    shardBlock: c.z.object({
      workchain: c.z.number(),
      seqno: c.z.number(),
      shard: c.z.string(),
      rootHash: c.z.string(),
      fileHash: c.z.string()
    })
  }),
  Ys = c.z.object({
    config: c.z.object({
      cell: c.z.string(),
      address: c.z.string(),
      globalBalance: c.z.object({
        coins: c.z.string()
      })
    })
  }),
  Js = c.z.object({
    status: c.z.number()
  }),
  na = c.z.array(c.z.object({
    workchain: c.z.number(),
    seqno: c.z.number(),
    shard: c.z.string(),
    rootHash: c.z.string(),
    fileHash: c.z.string()
  })),
  Xs = c.z.object({
    blocks: na,
    boc: c.z.string()
  }),
  Fn = c.z.object({
    bits: c.z.number(),
    data: c.z.string()
  }),
  ei = c.z.union([c.z.object({
    type: c.z.literal("internal"),
    value: c.z.string(),
    dest: c.z.string(),
    src: c.z.string(),
    bounced: c.z.boolean(),
    bounce: c.z.boolean(),
    ihrDisabled: c.z.boolean(),
    createdAt: c.z.number(),
    createdLt: c.z.string(),
    fwdFee: c.z.string(),
    ihrFee: c.z.string()
  }), c.z.object({
    type: c.z.literal("external-in"),
    dest: c.z.string(),
    src: c.z.union([Fn, c.z.null()]),
    importFee: c.z.string()
  }), c.z.object({
    type: c.z.literal("external-out"),
    dest: c.z.union([Fn, c.z.null()])
  })]),
  ti = c.z.object({
    splitDepth: c.z.union([c.z.number(), c.z.null()]),
    code: c.z.union([c.z.string(), c.z.null()]),
    data: c.z.union([c.z.string(), c.z.null()]),
    special: c.z.union([c.z.object({
      tick: c.z.boolean(),
      tock: c.z.boolean()
    }), c.z.null()])
  }),
  Hn = c.z.object({
    body: c.z.string(),
    info: ei,
    init: c.z.union([ti, c.z.null()])
  }),
  Kn = c.z.union([c.z.literal("uninitialized"), c.z.literal("frozen"), c.z.literal("active"), c.z.literal("non-existing")]),
  ni = c.z.union([c.z.object({
    type: c.z.literal("comment"),
    comment: c.z.string()
  }), c.z.object({
    type: c.z.literal("payload"),
    cell: c.z.string()
  })]),
  ri = c.z.union([c.z.object({
    kind: c.z.literal("ton"),
    amount: c.z.string()
  }), c.z.object({
    kind: c.z.literal("token"),
    amount: c.z.string()
  })]),
  ai = c.z.union([c.z.literal("jetton::excesses"), c.z.literal("jetton::transfer"), c.z.literal("jetton::transfer_notification"), c.z.literal("deposit"), c.z.literal("deposit::ok"), c.z.literal("withdraw"), c.z.literal("withdraw::all"), c.z.literal("withdraw::delayed"), c.z.literal("withdraw::ok"), c.z.literal("airdrop")]),
  si = c.z.object({
    type: ai,
    options: c.z.optional(c.z.record(c.z.string()))
  }),
  ii = c.z.object({
    address: c.z.string(),
    comment: c.z.optional(c.z.string()),
    items: c.z.array(ri),
    op: c.z.optional(si)
  }),
  oi = c.z.object({
    address: c.z.string(),
    lt: c.z.string(),
    hash: c.z.string(),
    prevTransaction: c.z.object({
      lt: c.z.string(),
      hash: c.z.string()
    }),
    time: c.z.number(),
    outMessagesCount: c.z.number(),
    oldStatus: Kn,
    newStatus: Kn,
    fees: c.z.string(),
    update: c.z.object({
      oldHash: c.z.string(),
      newHash: c.z.string()
    }),
    inMessage: c.z.union([Hn, c.z.null()]),
    outMessages: c.z.array(Hn),
    parsed: c.z.object({
      seqno: c.z.union([c.z.number(), c.z.null()]),
      body: c.z.union([ni, c.z.null()]),
      status: c.z.union([c.z.literal("success"), c.z.literal("failed"), c.z.literal("pending")]),
      dest: c.z.union([c.z.string(), c.z.null()]),
      kind: c.z.union([c.z.literal("out"), c.z.literal("in")]),
      amount: c.z.string(),
      resolvedAddress: c.z.string(),
      bounced: c.z.boolean(),
      mentioned: c.z.array(c.z.string())
    }),
    operation: ii
  }),
  ci = c.z.object({
    blocks: na,
    transactions: c.z.array(oi)
  });
var Vt = {},
  re = {},
  Ge = {},
  vt = {};
Object.defineProperty(vt, "__esModule", {
  value: !0
});
vt.loadWalletIdV5Beta = li;
vt.storeWalletIdV5Beta = di;
const an = M,
  ra = {
    v5: 0
  };

function li(t) {
  var o;
  const e = new an.BitReader(new an.BitString(typeof t == "bigint" ? B.from(t.toString(16), "hex") : t instanceof an.Slice ? t.loadBuffer(10) : t, 0, 80)),
    n = e.loadInt(32),
    r = e.loadInt(8),
    s = e.loadUint(8),
    a = e.loadUint(32),
    i = (o = Object.entries(ra).find(([l, d]) => d === s)) == null ? void 0 : o[0];
  if (i === void 0) throw new Error(`Can't deserialize walletId: unknown wallet version ${s}`);
  return {
    networkGlobalId: n,
    workchain: r,
    walletVersion: i,
    subwalletNumber: a
  }
}

function di(t) {
  return e => {
    e.storeInt(t.networkGlobalId, 32), e.storeInt(t.workchain, 8), e.storeUint(ra[t.walletVersion], 8), e.storeUint(t.subwalletNumber, 32)
  }
}
var Qn;

function aa() {
  if (Qn) return Ge;
  Qn = 1, Object.defineProperty(Ge, "__esModule", {
    value: !0
  }), Ge.WalletContractV5Beta = void 0;
  const t = M,
    e = te(),
    n = vt;
  class r {
    static create(a) {
      var o, l, d, u;
      const i = {
        networkGlobalId: ((o = a.walletId) == null ? void 0 : o.networkGlobalId) ?? -239,
        workchain: ((l = a == null ? void 0 : a.walletId) == null ? void 0 : l.workchain) ?? 0,
        subwalletNumber: ((d = a == null ? void 0 : a.walletId) == null ? void 0 : d.subwalletNumber) ?? 0,
        walletVersion: ((u = a == null ? void 0 : a.walletId) == null ? void 0 : u.walletVersion) ?? "v5"
      };
      return new r(i, a.publicKey)
    }
    constructor(a, i) {
      this.walletId = a, this.publicKey = i, this.walletId = a;
      let o = t.Cell.fromBoc(B.from("te6cckEBAQEAIwAIQgLkzzsvTG1qYeoPK1RH0mZ4WyavNjfbLe7mvNGqgm80Eg3NjhE=", "base64"))[0],
        l = (0, t.beginCell)().storeInt(0, 33).store((0, n.storeWalletIdV5Beta)(this.walletId)).storeBuffer(this.publicKey, 32).storeBit(0).endCell();
      this.init = {
        code: o,
        data: l
      }, this.address = (0, t.contractAddress)(this.walletId.workchain, {
        code: o,
        data: l
      })
    }
    async getBalance(a) {
      return (await a.getState()).balance
    }
    async getSeqno(a) {
      return (await a.getState()).state.type === "active" ? (await a.get("seqno", [])).stack.readNumber() : 0
    }
    async getExtensions(a) {
      return (await a.getState()).state.type === "active" ? (await a.get("get_extensions", [])).stack.readCellOpt() : null
    }
    async getExtensionsArray(a) {
      const i = await this.getExtensions(a);
      if (!i) return [];
      const o = t.Dictionary.loadDirect(t.Dictionary.Keys.BigUint(256), t.Dictionary.Values.BigInt(8), i);
      return o.keys().map(l => {
        const d = o.get(l),
          u = l ^ d + 1n;
        return t.Address.parseRaw(`${d}:${u.toString(16).padStart(64,"0")}`)
      })
    }
    async getIsSecretKeyAuthEnabled(a) {
      return (await a.get("get_is_signature_auth_allowed", [])).stack.readNumber() !== 0
    }
    async send(a, i) {
      await a.external(i)
    }
    async sendTransfer(a, i) {
      const o = await this.createTransfer(i);
      await this.send(a, o)
    }
    async sendAddExtension(a, i) {
      const o = await this.createAddExtension(i);
      await this.send(a, o)
    }
    async sendRemoveExtension(a, i) {
      const o = await this.createRemoveExtension(i);
      await this.send(a, o)
    }
    async sendActionsBatch(a, i) {
      const o = await this.createRequest(i);
      await this.send(a, o)
    }
    createActions(a) {
      return a.messages.map(o => ({
        type: "sendMsg",
        mode: a.sendMode,
        outMsg: o
      }))
    }
    createTransfer(a) {
      return this.createRequest({
        ...a,
        actions: this.createActions({
          messages: a.messages,
          sendMode: a.sendMode
        })
      })
    }
    createAddExtension(a) {
      return this.createRequest({
        ...a,
        actions: [{
          type: "addExtension",
          address: a.extensionAddress
        }]
      })
    }
    createRemoveExtension(a) {
      return this.createRequest({
        ...a,
        actions: [{
          type: "removeExtension",
          address: a.extensionAddress
        }]
      })
    }
    createRequest(a) {
      return a.authType === "extension" ? (0, e.createWalletTransferV5Beta)(a) : (0, e.createWalletTransferV5Beta)({
        ...a,
        walletId: (0, n.storeWalletIdV5Beta)(this.walletId)
      })
    }
    sender(a, i) {
      return {
        send: async o => {
          let l = await this.getSeqno(a),
            d = this.createTransfer({
              seqno: l,
              secretKey: i,
              sendMode: o.sendMode ?? t.SendMode.PAY_GAS_SEPARATELY + t.SendMode.IGNORE_ERRORS,
              messages: [(0, t.internal)({
                to: o.to,
                value: o.value,
                init: o.init,
                body: o.body,
                bounce: o.bounce
              })]
            });
          await this.send(a, d)
        }
      }
    }
  }
  return Ge.WalletContractV5Beta = r, r.OpCodes = {
    auth_extension: 1702392942,
    auth_signed_external: 1936287598,
    auth_signed_internal: 1936289396
  }, Ge
}
var xe = {},
  _t = {};
Object.defineProperty(_t, "__esModule", {
  value: !0
});
_t.isOutActionExtended = sa;
_t.isOutActionBasic = ui;

function sa(t) {
  return t.type === "setIsPublicKeyEnabled" || t.type === "addExtension" || t.type === "removeExtension"
}

function ui(t) {
  return !sa(t)
}
Object.defineProperty(xe, "__esModule", {
  value: !0
});
xe.storeOutActionExtendedV5Beta = la;
xe.loadOutActionV5BetaExtended = da;
xe.storeOutListExtendedV5Beta = ua;
xe.loadOutListExtendedV5Beta = mi;
const kt = M,
  Gn = _t,
  ia = 550222170;

function fi(t) {
  return e => {
    e.storeUint(ia, 32).storeUint(t.isEnabled ? 1 : 0, 1)
  }
}
const oa = 474012575;

function hi(t) {
  return e => {
    e.storeUint(oa, 32).storeAddress(t.address)
  }
}
const ca = 1588524196;

function gi(t) {
  return e => {
    e.storeUint(ca, 32).storeAddress(t.address)
  }
}

function la(t) {
  switch (t.type) {
    case "setIsPublicKeyEnabled":
      return fi(t);
    case "addExtension":
      return hi(t);
    case "removeExtension":
      return gi(t);
    default:
      throw new Error("Unknown action type" + (t == null ? void 0 : t.type))
  }
}

function da(t) {
  const e = t.loadUint(32);
  switch (e) {
    case ia:
      return {
        type: "setIsPublicKeyEnabled", isEnabled: !!t.loadUint(1)
      };
    case oa:
      return {
        type: "addExtension", address: t.loadAddress()
      };
    case ca:
      return {
        type: "removeExtension", address: t.loadAddress()
      };
    default:
      throw new Error(`Unknown extended out action tag 0x${e.toString(16)}`)
  }
}

function ua(t) {
  const [e, ...n] = t;
  if (!e || !(0, Gn.isOutActionExtended)(e)) {
    if (t.some(Gn.isOutActionExtended)) throw new Error("Can't serialize actions list: all extended actions must be placed before out actions");
    return r => {
      r.storeUint(0, 1).storeRef((0, kt.beginCell)().store((0, kt.storeOutList)(t)).endCell())
    }
  }
  return r => {
    r.storeUint(1, 1).store(la(e)).storeRef((0, kt.beginCell)().store(ua(n)).endCell())
  }
}

function mi(t) {
  const e = [];
  for (; t.loadUint(1);) {
    const r = da(t);
    e.push(r), t = t.loadRef().beginParse()
  }
  const n = (0, kt.loadOutList)(t.loadRef().beginParse());
  if (n.some(r => r.type === "setCode")) throw new Error("Can't deserialize actions list: only sendMsg actions are allowed for wallet v5");
  return e.concat(n)
}
var Cn = {};
Object.defineProperty(Cn, "__esModule", {
  value: !0
});
Cn.signPayload = yi;
const pi = It();

function yi(t, e, n) {
  return "secretKey" in t ? n((0, pi.sign)(e.endCell().hash(), t.secretKey), e) : t.signer(e.endCell()).then(r => n(r, e))
}
var Ye = {},
  Ke = {};
Object.defineProperty(Ke, "__esModule", {
  value: !0
});
Ke.isWalletIdV5R1ClientContext = fa;
Ke.loadWalletIdV5R1 = bi;
Ke.storeWalletIdV5R1 = vi;
const ze = M;

function fa(t) {
  return typeof t != "number"
}
const ha = {
  v5r1: 0
};

function bi(t, e) {
  var i;
  const n = new ze.BitReader(new ze.BitString(typeof t == "bigint" ? B.from(t.toString(16), "hex") : t instanceof ze.Slice ? t.loadBuffer(4) : t, 0, 32)).loadInt(32),
    r = BigInt(n) ^ BigInt(e),
    s = (0, ze.beginCell)().storeInt(r, 32).endCell().beginParse();
  if (s.loadUint(1)) {
    const o = s.loadInt(8),
      l = s.loadUint(8),
      d = s.loadUint(15),
      u = (i = Object.entries(ha).find(([v, E]) => E === l)) == null ? void 0 : i[0];
    if (u === void 0) throw new Error(`Can't deserialize walletId: unknown wallet version ${l}`);
    return {
      networkGlobalId: e,
      context: {
        walletVersion: u,
        workchain: o,
        subwalletNumber: d
      }
    }
  } else {
    const o = s.loadUint(31);
    return {
      networkGlobalId: e,
      context: o
    }
  }
}

function vi(t) {
  return e => {
    let n;
    return fa(t.context) ? n = (0, ze.beginCell)().storeUint(1, 1).storeInt(t.context.workchain, 8).storeUint(ha[t.context.walletVersion], 8).storeUint(t.context.subwalletNumber, 15).endCell().beginParse().loadInt(32) : n = (0, ze.beginCell)().storeUint(0, 1).storeUint(t.context, 31).endCell().beginParse().loadInt(32), e.storeInt(BigInt(t.networkGlobalId) ^ BigInt(n), 32)
  }
}
var Yn;

function ga() {
  if (Yn) return Ye;
  Yn = 1, Object.defineProperty(Ye, "__esModule", {
    value: !0
  }), Ye.WalletContractV5R1 = void 0;
  const t = M,
    e = te(),
    n = Ke;
  class r {
    static create(a) {
      var o, l, d;
      let i = 0;
      return "workchain" in a && a.workchain != null && (i = a.workchain), (o = a.walletId) != null && o.context && (0, n.isWalletIdV5R1ClientContext)(a.walletId.context) && a.walletId.context.workchain != null && (i = a.walletId.context.workchain), new r(i, a.publicKey, {
        networkGlobalId: ((l = a.walletId) == null ? void 0 : l.networkGlobalId) ?? -239,
        context: ((d = a.walletId) == null ? void 0 : d.context) ?? {
          workchain: 0,
          walletVersion: "v5r1",
          subwalletNumber: 0
        }
      })
    }
    constructor(a, i, o) {
      this.publicKey = i, this.walletId = o, this.walletId = o;
      let l = t.Cell.fromBoc(B.from("b5ee9c7241021401000281000114ff00f4a413f4bcf2c80b01020120020d020148030402dcd020d749c120915b8f6320d70b1f2082106578746ebd21821073696e74bdb0925f03e082106578746eba8eb48020d72101d074d721fa4030fa44f828fa443058bd915be0ed44d0810141d721f4058307f40e6fa1319130e18040d721707fdb3ce03120d749810280b99130e070e2100f020120050c020120060902016e07080019adce76a2684020eb90eb85ffc00019af1df6a2684010eb90eb858fc00201480a0b0017b325fb51341c75c875c2c7e00011b262fb513435c280200019be5f0f6a2684080a0eb90fa02c0102f20e011e20d70b1f82107369676ebaf2e08a7f0f01e68ef0eda2edfb218308d722028308d723208020d721d31fd31fd31fed44d0d200d31f20d31fd3ffd70a000af90140ccf9109a28945f0adb31e1f2c087df02b35007b0f2d0845125baf2e0855036baf2e086f823bbf2d0882292f800de01a47fc8ca00cb1f01cf16c9ed542092f80fde70db3cd81003f6eda2edfb02f404216e926c218e4c0221d73930709421c700b38e2d01d72820761e436c20d749c008f2e09320d74ac002f2e09320d71d06c712c2005230b0f2d089d74cd7393001a4e86c128407bbf2e093d74ac000f2e093ed55e2d20001c000915be0ebd72c08142091709601d72c081c12e25210b1e30f20d74a111213009601fa4001fa44f828fa443058baf2e091ed44d0810141d718f405049d7fc8ca0040048307f453f2e08b8e14038307f45bf2e08c22d70a00216e01b3b0f2d090e2c85003cf1612f400c9ed54007230d72c08248e2d21f2e092d200ed44d0d2005113baf2d08f54503091319c01810140d721d70a00f2e08ee2c8ca0058cf16c9ed5493f2c08de20010935bdb31e1d74cd0b4d6c35e", "hex"))[0],
        d = (0, t.beginCell)().storeUint(1, 1).storeUint(0, 32).store((0, n.storeWalletIdV5R1)(this.walletId)).storeBuffer(this.publicKey, 32).storeBit(0).endCell();
      this.init = {
        code: l,
        data: d
      }, this.address = (0, t.contractAddress)(a, {
        code: l,
        data: d
      })
    }
    async getBalance(a) {
      return (await a.getState()).balance
    }
    async getSeqno(a) {
      return (await a.getState()).state.type === "active" ? (await a.get("seqno", [])).stack.readNumber() : 0
    }
    async getExtensions(a) {
      return (await a.getState()).state.type === "active" ? (await a.get("get_extensions", [])).stack.readCellOpt() : null
    }
    async getExtensionsArray(a) {
      const i = await this.getExtensions(a);
      return i ? t.Dictionary.loadDirect(t.Dictionary.Keys.BigUint(256), t.Dictionary.Values.BigInt(1), i).keys().map(l => {
        const d = this.address.workChain;
        return t.Address.parseRaw(`${d}:${l.toString(16).padStart(64,"0")}`)
      }) : []
    }
    async getIsSecretKeyAuthEnabled(a) {
      return (await a.get("is_signature_allowed", [])).stack.readBoolean()
    }
    async send(a, i) {
      await a.external(i)
    }
    async sendTransfer(a, i) {
      const o = await this.createTransfer(i);
      await this.send(a, o)
    }
    async sendAddExtension(a, i) {
      const o = await this.createAddExtension(i);
      await this.send(a, o)
    }
    async sendRemoveExtension(a, i) {
      const o = await this.createRemoveExtension(i);
      await this.send(a, o)
    }
    createActions(a) {
      return a.messages.map(o => ({
        type: "sendMsg",
        mode: a.sendMode,
        outMsg: o
      }))
    }
    createTransfer(a) {
      return this.createRequest({
        actions: this.createActions({
          messages: a.messages,
          sendMode: a.sendMode
        }),
        ...a
      })
    }
    createAddExtension(a) {
      return this.createRequest({
        actions: [{
          type: "addExtension",
          address: a.extensionAddress
        }],
        ...a
      })
    }
    createRemoveExtension(a) {
      return this.createRequest({
        actions: [{
          type: "removeExtension",
          address: a.extensionAddress
        }],
        ...a
      })
    }
    createRequest(a) {
      return a.authType === "extension" ? (0, e.createWalletTransferV5R1)(a) : (0, e.createWalletTransferV5R1)({
        ...a,
        walletId: (0, n.storeWalletIdV5R1)(this.walletId)
      })
    }
    sender(a, i) {
      return {
        send: async o => {
          let l = await this.getSeqno(a),
            d = this.createTransfer({
              seqno: l,
              secretKey: i,
              sendMode: o.sendMode ?? t.SendMode.PAY_GAS_SEPARATELY + t.SendMode.IGNORE_ERRORS,
              messages: [(0, t.internal)({
                to: o.to,
                value: o.value,
                init: o.init,
                body: o.body,
                bounce: o.bounce
              })]
            });
          await this.send(a, d)
        }
      }
    }
  }
  return Ye.WalletContractV5R1 = r, r.OpCodes = {
    auth_extension: 1702392942,
    auth_signed_external: 1936287598,
    auth_signed_internal: 1936289396
  }, Ye
}
var de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.storeOutActionExtendedV5R1 = An;
de.loadOutActionExtendedV5R1 = un;
de.storeOutListExtendedV5R1 = Ai;
de.loadOutListExtendedV5R1 = ki;
de.toSafeV5R1SendMode = va;
de.patchV5R1ActionsSendMode = xi;
const pt = M,
  Jn = _t,
  ma = 4;

function _i(t) {
  return e => {
    e.storeUint(ma, 8).storeUint(t.isEnabled ? 1 : 0, 1)
  }
}
const pa = 2;

function wi(t) {
  return e => {
    e.storeUint(pa, 8).storeAddress(t.address)
  }
}
const ya = 3;

function Ci(t) {
  return e => {
    e.storeUint(ya, 8).storeAddress(t.address)
  }
}

function An(t) {
  switch (t.type) {
    case "setIsPublicKeyEnabled":
      return _i(t);
    case "addExtension":
      return wi(t);
    case "removeExtension":
      return Ci(t);
    default:
      throw new Error("Unknown action type" + (t == null ? void 0 : t.type))
  }
}

function un(t) {
  const e = t.loadUint(8);
  switch (e) {
    case ma:
      return {
        type: "setIsPublicKeyEnabled", isEnabled: !!t.loadUint(1)
      };
    case pa:
      return {
        type: "addExtension", address: t.loadAddress()
      };
    case ya:
      return {
        type: "removeExtension", address: t.loadAddress()
      };
    default:
      throw new Error(`Unknown extended out action tag 0x${e.toString(16)}`)
  }
}

function Ai(t) {
  const e = t.filter(Jn.isOutActionExtended),
    n = t.filter(Jn.isOutActionBasic);
  return r => {
    const s = n.length ? (0, pt.beginCell)().store((0, pt.storeOutList)(n.slice().reverse())) : null;
    if (r.storeMaybeRef(s), e.length === 0) r.storeUint(0, 1);
    else {
      const [a, ...i] = e;
      r.storeUint(1, 1).store(An(a)), i.length > 0 && r.storeRef(ba(i))
    }
  }
}

function ba(t) {
  const [e, ...n] = t;
  let r = (0, pt.beginCell)().store(An(e));
  return n.length > 0 && (r = r.storeRef(ba(n))), r.endCell()
}

function ki(t) {
  const e = [],
    n = t.loadMaybeRef();
  if (n) {
    const r = (0, pt.loadOutList)(n.beginParse());
    if (r.some(s => s.type !== "sendMsg")) throw new Error("Can't deserialize actions list: only sendMsg actions are allowed for wallet v5r1");
    e.push(...r)
  }
  if (t.loadBoolean()) {
    const r = un(t);
    e.push(r)
  }
  for (; t.remainingRefs > 0;) {
    t = t.loadRef().beginParse();
    const r = un(t);
    e.push(r)
  }
  return e
}

function va(t, e) {
  return e === "internal" || e === "extension" ? t : t | pt.SendMode.IGNORE_ERRORS
}

function xi(t, e) {
  return t.map(n => n.type === "sendMsg" ? {
    ...n,
    mode: va(n.mode, e)
  } : n)
}
var Xn;

function te() {
  if (Xn) return re;
  Xn = 1, Object.defineProperty(re, "__esModule", {
    value: !0
  }), re.createWalletTransferV1 = d, re.createWalletTransferV2 = u, re.createWalletTransferV3 = v, re.createWalletTransferV4 = E, re.createWalletTransferV5Beta = R, re.createWalletTransferV5R1 = ue;
  const t = M,
    e = It(),
    n = aa(),
    r = xe,
    s = Cn,
    a = ga(),
    i = de;

  function o(g, w) {
    return (0, t.beginCell)().storeBuffer(g).storeBuilder(w).endCell()
  }

  function l(g, w) {
    return (0, t.beginCell)().storeBuilder(w).storeBuffer(g).endCell()
  }

  function d(g) {
    let w = (0, t.beginCell)().storeUint(g.seqno, 32);
    g.message && (w.storeUint(g.sendMode, 8), w.storeRef((0, t.beginCell)().store((0, t.storeMessageRelaxed)(g.message))));
    let T = (0, e.sign)(w.endCell().hash(), g.secretKey);
    return (0, t.beginCell)().storeBuffer(T).storeBuilder(w).endCell()
  }

  function u(g) {
    if (g.messages.length > 4) throw Error("Maximum number of messages in a single transfer is 4");
    let w = (0, t.beginCell)().storeUint(g.seqno, 32);
    if (g.seqno === 0)
      for (let ne = 0; ne < 32; ne++) w.storeBit(1);
    else w.storeUint(g.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
    for (let ne of g.messages) w.storeUint(g.sendMode, 8), w.storeRef((0, t.beginCell)().store((0, t.storeMessageRelaxed)(ne)));
    let T = (0, e.sign)(w.endCell().hash(), g.secretKey);
    return (0, t.beginCell)().storeBuffer(T).storeBuilder(w).endCell()
  }

  function v(g) {
    if (g.messages.length > 4) throw Error("Maximum number of messages in a single transfer is 4");
    let w = (0, t.beginCell)().storeUint(g.walletId, 32);
    if (g.seqno === 0)
      for (let T = 0; T < 32; T++) w.storeBit(1);
    else w.storeUint(g.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
    w.storeUint(g.seqno, 32);
    for (let T of g.messages) w.storeUint(g.sendMode, 8), w.storeRef((0, t.beginCell)().store((0, t.storeMessageRelaxed)(T)));
    return (0, s.signPayload)(g, w, o)
  }

  function E(g) {
    if (g.messages.length > 4) throw Error("Maximum number of messages in a single transfer is 4");
    let w = (0, t.beginCell)().storeUint(g.walletId, 32);
    if (g.seqno === 0)
      for (let T = 0; T < 32; T++) w.storeBit(1);
    else w.storeUint(g.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
    w.storeUint(g.seqno, 32), w.storeUint(0, 8);
    for (let T of g.messages) w.storeUint(g.sendMode, 8), w.storeRef((0, t.beginCell)().store((0, t.storeMessageRelaxed)(T)));
    return (0, s.signPayload)(g, w, o)
  }

  function R(g) {
    if (g.actions.length > 255) throw Error("Maximum number of OutActions in a single request is 255");
    if (g.authType === "extension") return (0, t.beginCell)().storeUint(n.WalletContractV5Beta.OpCodes.auth_extension, 32).store((0, r.storeOutListExtendedV5Beta)(g.actions)).endCell();
    const w = (0, t.beginCell)().storeUint(g.authType === "internal" ? n.WalletContractV5Beta.OpCodes.auth_signed_internal : n.WalletContractV5Beta.OpCodes.auth_signed_external, 32).store(g.walletId);
    if (g.seqno === 0)
      for (let T = 0; T < 32; T++) w.storeBit(1);
    else w.storeUint(g.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
    return w.storeUint(g.seqno, 32).store((0, r.storeOutListExtendedV5Beta)(g.actions)), (0, s.signPayload)(g, w, l)
  }

  function ue(g) {
    if (g.actions.length > 255) throw Error("Maximum number of OutActions in a single request is 255");
    if (g = {
        ...g
      }, g.authType === "extension") return (0, t.beginCell)().storeUint(a.WalletContractV5R1.OpCodes.auth_extension, 32).storeUint(g.queryId ?? 0, 64).store((0, i.storeOutListExtendedV5R1)(g.actions)).endCell();
    g.actions = (0, i.patchV5R1ActionsSendMode)(g.actions, g.authType);
    const w = (0, t.beginCell)().storeUint(g.authType === "internal" ? a.WalletContractV5R1.OpCodes.auth_signed_internal : a.WalletContractV5R1.OpCodes.auth_signed_external, 32).store(g.walletId);
    if (g.seqno === 0)
      for (let T = 0; T < 32; T++) w.storeBit(1);
    else w.storeUint(g.timeout || Math.floor(Date.now() / 1e3) + 60, 32);
    return w.storeUint(g.seqno, 32).store((0, i.storeOutListExtendedV5R1)(g.actions)), (0, s.signPayload)(g, w, l)
  }
  return re
}
Object.defineProperty(Vt, "__esModule", {
  value: !0
});
Vt.WalletContractV1R1 = void 0;
const Pe = M,
  Bi = te();
class kn {
  static create(e) {
    return new kn(e.workchain, e.publicKey)
  }
  constructor(e, n) {
    this.workchain = e, this.publicKey = n;
    let r = Pe.Cell.fromBoc(B.from("te6cckEBAQEARAAAhP8AIN2k8mCBAgDXGCDXCx/tRNDTH9P/0VESuvKhIvkBVBBE+RDyovgAAdMfMSDXSpbTB9QC+wDe0aTIyx/L/8ntVEH98Ik=", "base64"))[0],
      s = (0, Pe.beginCell)().storeUint(0, 32).storeBuffer(n).endCell();
    this.init = {
      code: r,
      data: s
    }, this.address = (0, Pe.contractAddress)(e, {
      code: r,
      data: s
    })
  }
  async getBalance(e) {
    return (await e.getState()).balance
  }
  async getSeqno(e) {
    let n = await e.getState();
    return n.state.type === "active" ? Pe.Cell.fromBoc(n.state.data)[0].beginParse().loadUint(32) : 0
  }
  async send(e, n) {
    await e.external(n)
  }
  async sendTransfer(e, n) {
    let r = this.createTransfer(n);
    await this.send(e, r)
  }
  createTransfer(e) {
    let n = Pe.SendMode.PAY_GAS_SEPARATELY;
    return e.sendMode !== null && e.sendMode !== void 0 && (n = e.sendMode), (0, Bi.createWalletTransferV1)({
      seqno: e.seqno,
      sendMode: n,
      secretKey: e.secretKey,
      message: e.message
    })
  }
  sender(e, n) {
    return {
      send: async r => {
        let s = await this.getSeqno(e),
          a = this.createTransfer({
            seqno: s,
            secretKey: n,
            sendMode: r.sendMode,
            message: (0, Pe.internal)({
              to: r.to,
              value: r.value,
              init: r.init,
              body: r.body,
              bounce: r.bounce
            })
          });
        await this.send(e, a)
      }
    }
  }
}
Vt.WalletContractV1R1 = kn;
var Dt = {};
Object.defineProperty(Dt, "__esModule", {
  value: !0
});
Dt.WalletContractV1R2 = void 0;
const Je = M,
  Ei = te();
class xn {
  static create(e) {
    return new xn(e.workchain, e.publicKey)
  }
  constructor(e, n) {
    this.workchain = e, this.publicKey = n;
    let r = Je.Cell.fromBoc(B.from("te6cckEBAQEAUwAAov8AIN0gggFMl7qXMO1E0NcLH+Ck8mCBAgDXGCDXCx/tRNDTH9P/0VESuvKhIvkBVBBE+RDyovgAAdMfMSDXSpbTB9QC+wDe0aTIyx/L/8ntVNDieG8=", "base64"))[0],
      s = (0, Je.beginCell)().storeUint(0, 32).storeBuffer(n).endCell();
    this.init = {
      code: r,
      data: s
    }, this.address = (0, Je.contractAddress)(e, {
      code: r,
      data: s
    })
  }
  async getBalance(e) {
    return (await e.getState()).balance
  }
  async getSeqno(e) {
    return (await e.getState()).state.type === "active" ? (await e.get("seqno", [])).stack.readNumber() : 0
  }
  async send(e, n) {
    await e.external(n)
  }
  async sendTransfer(e, n) {
    let r = this.createTransfer(n);
    await this.send(e, r)
  }
  createTransfer(e) {
    let n = Je.SendMode.PAY_GAS_SEPARATELY;
    return e.sendMode !== null && e.sendMode !== void 0 && (n = e.sendMode), (0, Ei.createWalletTransferV1)({
      seqno: e.seqno,
      sendMode: n,
      secretKey: e.secretKey,
      message: e.message
    })
  }
  sender(e, n) {
    return {
      send: async r => {
        let s = await this.getSeqno(e),
          a = this.createTransfer({
            seqno: s,
            secretKey: n,
            sendMode: r.sendMode,
            message: (0, Je.internal)({
              to: r.to,
              value: r.value,
              init: r.init,
              body: r.body,
              bounce: r.bounce
            })
          });
        await this.send(e, a)
      }
    }
  }
}
Dt.WalletContractV1R2 = xn;
var Nt = {};
Object.defineProperty(Nt, "__esModule", {
  value: !0
});
Nt.WalletContractV1R3 = void 0;
const Xe = M,
  Ti = te();
class Bn {
  static create(e) {
    return new Bn(e.workchain, e.publicKey)
  }
  constructor(e, n) {
    this.workchain = e, this.publicKey = n;
    let r = Xe.Cell.fromBoc(B.from("te6cckEBAQEAXwAAuv8AIN0gggFMl7ohggEznLqxnHGw7UTQ0x/XC//jBOCk8mCBAgDXGCDXCx/tRNDTH9P/0VESuvKhIvkBVBBE+RDyovgAAdMfMSDXSpbTB9QC+wDe0aTIyx/L/8ntVLW4bkI=", "base64"))[0],
      s = (0, Xe.beginCell)().storeUint(0, 32).storeBuffer(n).endCell();
    this.init = {
      code: r,
      data: s
    }, this.address = (0, Xe.contractAddress)(e, {
      code: r,
      data: s
    })
  }
  async getBalance(e) {
    return (await e.getState()).balance
  }
  async getSeqno(e) {
    return (await e.getState()).state.type === "active" ? (await e.get("seqno", [])).stack.readNumber() : 0
  }
  async send(e, n) {
    await e.external(n)
  }
  async sendTransfer(e, n) {
    let r = this.createTransfer(n);
    await this.send(e, r)
  }
  createTransfer(e) {
    let n = Xe.SendMode.PAY_GAS_SEPARATELY;
    return e.sendMode !== null && e.sendMode !== void 0 && (n = e.sendMode), (0, Ti.createWalletTransferV1)({
      seqno: e.seqno,
      sendMode: n,
      secretKey: e.secretKey,
      message: e.message
    })
  }
  sender(e, n) {
    return {
      send: async r => {
        let s = await this.getSeqno(e),
          a = this.createTransfer({
            seqno: s,
            secretKey: n,
            sendMode: r.sendMode,
            message: (0, Xe.internal)({
              to: r.to,
              value: r.value,
              init: r.init,
              body: r.body,
              bounce: r.bounce
            })
          });
        await this.send(e, a)
      }
    }
  }
}
Nt.WalletContractV1R3 = Bn;
var Wt = {};
Object.defineProperty(Wt, "__esModule", {
  value: !0
});
Wt.WalletContractV2R1 = void 0;
const et = M,
  Pi = te();
class En {
  static create(e) {
    return new En(e.workchain, e.publicKey)
  }
  constructor(e, n) {
    this.workchain = e, this.publicKey = n;
    let r = et.Cell.fromBoc(B.from("te6cckEBAQEAVwAAqv8AIN0gggFMl7qXMO1E0NcLH+Ck8mCDCNcYINMf0x8B+CO78mPtRNDTH9P/0VExuvKhA/kBVBBC+RDyovgAApMg10qW0wfUAvsA6NGkyMsfy//J7VShNwu2", "base64"))[0],
      s = (0, et.beginCell)().storeUint(0, 32).storeBuffer(n).endCell();
    this.init = {
      code: r,
      data: s
    }, this.address = (0, et.contractAddress)(e, {
      code: r,
      data: s
    })
  }
  async getBalance(e) {
    return (await e.getState()).balance
  }
  async getSeqno(e) {
    return (await e.getState()).state.type === "active" ? (await e.get("seqno", [])).stack.readNumber() : 0
  }
  async send(e, n) {
    await e.external(n)
  }
  async sendTransfer(e, n) {
    let r = this.createTransfer(n);
    await this.send(e, r)
  }
  createTransfer(e) {
    let n = et.SendMode.PAY_GAS_SEPARATELY;
    return e.sendMode !== null && e.sendMode !== void 0 && (n = e.sendMode), (0, Pi.createWalletTransferV2)({
      seqno: e.seqno,
      sendMode: n,
      secretKey: e.secretKey,
      messages: e.messages,
      timeout: e.timeout
    })
  }
  sender(e, n) {
    return {
      send: async r => {
        let s = await this.getSeqno(e),
          a = this.createTransfer({
            seqno: s,
            secretKey: n,
            sendMode: r.sendMode,
            messages: [(0, et.internal)({
              to: r.to,
              value: r.value,
              init: r.init,
              body: r.body,
              bounce: r.bounce
            })]
          });
        await this.send(e, a)
      }
    }
  }
}
Wt.WalletContractV2R1 = En;
var Lt = {};
Object.defineProperty(Lt, "__esModule", {
  value: !0
});
Lt.WalletContractV2R2 = void 0;
const tt = M,
  Si = te();
class Tn {
  static create(e) {
    return new Tn(e.workchain, e.publicKey)
  }
  constructor(e, n) {
    this.workchain = e, this.publicKey = n;
    let r = tt.Cell.fromBoc(B.from("te6cckEBAQEAYwAAwv8AIN0gggFMl7ohggEznLqxnHGw7UTQ0x/XC//jBOCk8mCDCNcYINMf0x8B+CO78mPtRNDTH9P/0VExuvKhA/kBVBBC+RDyovgAApMg10qW0wfUAvsA6NGkyMsfy//J7VQETNeh", "base64"))[0],
      s = (0, tt.beginCell)().storeUint(0, 32).storeBuffer(n).endCell();
    this.init = {
      code: r,
      data: s
    }, this.address = (0, tt.contractAddress)(e, {
      code: r,
      data: s
    })
  }
  async getBalance(e) {
    return (await e.getState()).balance
  }
  async getSeqno(e) {
    return (await e.getState()).state.type === "active" ? (await e.get("seqno", [])).stack.readNumber() : 0
  }
  async send(e, n) {
    await e.external(n)
  }
  async sendTransfer(e, n) {
    let r = this.createTransfer(n);
    await this.send(e, r)
  }
  createTransfer(e) {
    let n = tt.SendMode.PAY_GAS_SEPARATELY;
    return e.sendMode !== null && e.sendMode !== void 0 && (n = e.sendMode), (0, Si.createWalletTransferV2)({
      seqno: e.seqno,
      sendMode: n,
      secretKey: e.secretKey,
      messages: e.messages,
      timeout: e.timeout
    })
  }
  sender(e, n) {
    return {
      send: async r => {
        let s = await this.getSeqno(e),
          a = this.createTransfer({
            seqno: s,
            secretKey: n,
            sendMode: r.sendMode,
            messages: [(0, tt.internal)({
              to: r.to,
              value: r.value,
              init: r.init,
              body: r.body,
              bounce: r.bounce
            })]
          });
        await this.send(e, a)
      }
    }
  }
}
Lt.WalletContractV2R2 = Tn;
var qt = {};
Object.defineProperty(qt, "__esModule", {
  value: !0
});
qt.WalletContractV3R1 = void 0;
const nt = M,
  zi = te();
class Pn {
  static create(e) {
    return new Pn(e.workchain, e.publicKey, e.walletId)
  }
  constructor(e, n, r) {
    this.workchain = e, this.publicKey = n, r != null ? this.walletId = r : this.walletId = 698983191 + e;
    let s = nt.Cell.fromBoc(B.from("te6cckEBAQEAYgAAwP8AIN0gggFMl7qXMO1E0NcLH+Ck8mCDCNcYINMf0x/TH/gjE7vyY+1E0NMf0x/T/9FRMrryoVFEuvKiBPkBVBBV+RDyo/gAkyDXSpbTB9QC+wDo0QGkyMsfyx/L/8ntVD++buA=", "base64"))[0],
      a = (0, nt.beginCell)().storeUint(0, 32).storeUint(this.walletId, 32).storeBuffer(n).endCell();
    this.init = {
      code: s,
      data: a
    }, this.address = (0, nt.contractAddress)(e, {
      code: s,
      data: a
    })
  }
  async getBalance(e) {
    return (await e.getState()).balance
  }
  async getSeqno(e) {
    return (await e.getState()).state.type === "active" ? (await e.get("seqno", [])).stack.readNumber() : 0
  }
  async send(e, n) {
    await e.external(n)
  }
  async sendTransfer(e, n) {
    let r = this.createTransfer(n);
    await this.send(e, r)
  }
  createTransfer(e) {
    return (0, zi.createWalletTransferV3)({
      ...e,
      sendMode: e.sendMode ?? nt.SendMode.PAY_GAS_SEPARATELY,
      walletId: this.walletId
    })
  }
  sender(e, n) {
    return {
      send: async r => {
        let s = await this.getSeqno(e),
          a = this.createTransfer({
            seqno: s,
            secretKey: n,
            sendMode: r.sendMode,
            messages: [(0, nt.internal)({
              to: r.to,
              value: r.value,
              init: r.init,
              body: r.body,
              bounce: r.bounce
            })]
          });
        await this.send(e, a)
      }
    }
  }
}
qt.WalletContractV3R1 = Pn;
var Zt = {};
Object.defineProperty(Zt, "__esModule", {
  value: !0
});
Zt.WalletContractV3R2 = void 0;
const rt = M,
  Mi = te();
class Sn {
  static create(e) {
    return new Sn(e.workchain, e.publicKey, e.walletId)
  }
  constructor(e, n, r) {
    this.workchain = e, this.publicKey = n, r != null ? this.walletId = r : this.walletId = 698983191 + e;
    let s = rt.Cell.fromBoc(B.from("te6cckEBAQEAcQAA3v8AIN0gggFMl7ohggEznLqxn3Gw7UTQ0x/THzHXC//jBOCk8mCDCNcYINMf0x/TH/gjE7vyY+1E0NMf0x/T/9FRMrryoVFEuvKiBPkBVBBV+RDyo/gAkyDXSpbTB9QC+wDo0QGkyMsfyx/L/8ntVBC9ba0=", "base64"))[0],
      a = (0, rt.beginCell)().storeUint(0, 32).storeUint(this.walletId, 32).storeBuffer(n).endCell();
    this.init = {
      code: s,
      data: a
    }, this.address = (0, rt.contractAddress)(e, {
      code: s,
      data: a
    })
  }
  async getBalance(e) {
    return (await e.getState()).balance
  }
  async getSeqno(e) {
    return (await e.getState()).state.type === "active" ? (await e.get("seqno", [])).stack.readNumber() : 0
  }
  async send(e, n) {
    await e.external(n)
  }
  async sendTransfer(e, n) {
    let r = this.createTransfer(n);
    await this.send(e, r)
  }
  createTransfer(e) {
    return (0, Mi.createWalletTransferV3)({
      ...e,
      sendMode: e.sendMode ?? rt.SendMode.PAY_GAS_SEPARATELY,
      walletId: this.walletId
    })
  }
  sender(e, n) {
    return {
      send: async r => {
        let s = await this.getSeqno(e),
          a = this.createTransfer({
            seqno: s,
            secretKey: n,
            sendMode: r.sendMode,
            messages: [(0, rt.internal)({
              to: r.to,
              value: r.value,
              init: r.init,
              body: r.body,
              bounce: r.bounce
            })]
          });
        await this.send(e, a)
      }
    }
  }
}
Zt.WalletContractV3R2 = Sn;
var $t = {};
Object.defineProperty($t, "__esModule", {
  value: !0
});
$t.WalletContractV4 = void 0;
const at = M,
  Ii = te();
class zn {
  static create(e) {
    return new zn(e.workchain, e.publicKey, e.walletId)
  }
  constructor(e, n, r) {
    this.workchain = e, this.publicKey = n, r != null ? this.walletId = r : this.walletId = 698983191 + e;
    let s = at.Cell.fromBoc(B.from("te6ccgECFAEAAtQAART/APSkE/S88sgLAQIBIAIDAgFIBAUE+PKDCNcYINMf0x/THwL4I7vyZO1E0NMf0x/T//QE0VFDuvKhUVG68qIF+QFUEGT5EPKj+AAkpMjLH1JAyx9SMMv/UhD0AMntVPgPAdMHIcAAn2xRkyDXSpbTB9QC+wDoMOAhwAHjACHAAuMAAcADkTDjDQOkyMsfEssfy/8QERITAubQAdDTAyFxsJJfBOAi10nBIJJfBOAC0x8hghBwbHVnvSKCEGRzdHK9sJJfBeAD+kAwIPpEAcjKB8v/ydDtRNCBAUDXIfQEMFyBAQj0Cm+hMbOSXwfgBdM/yCWCEHBsdWe6kjgw4w0DghBkc3RyupJfBuMNBgcCASAICQB4AfoA9AQw+CdvIjBQCqEhvvLgUIIQcGx1Z4MesXCAGFAEywUmzxZY+gIZ9ADLaRfLH1Jgyz8gyYBA+wAGAIpQBIEBCPRZMO1E0IEBQNcgyAHPFvQAye1UAXKwjiOCEGRzdHKDHrFwgBhQBcsFUAPPFiP6AhPLassfyz/JgED7AJJfA+ICASAKCwBZvSQrb2omhAgKBrkPoCGEcNQICEekk30pkQzmkD6f+YN4EoAbeBAUiYcVnzGEAgFYDA0AEbjJftRNDXCx+AA9sp37UTQgQFA1yH0BDACyMoHy//J0AGBAQj0Cm+hMYAIBIA4PABmtznaiaEAga5Drhf/AABmvHfaiaEAQa5DrhY/AAG7SB/oA1NQi+QAFyMoHFcv/ydB3dIAYyMsFywIizxZQBfoCFMtrEszMyXP7AMhAFIEBCPRR8qcCAHCBAQjXGPoA0z/IVCBHgQEI9FHyp4IQbm90ZXB0gBjIywXLAlAGzxZQBPoCFMtqEssfyz/Jc/sAAgBsgQEI1xj6ANM/MFIkgQEI9Fnyp4IQZHN0cnB0gBjIywXLAlAFzxZQA/oCE8tqyx8Syz/Jc/sAAAr0AMntVA==", "base64"))[0],
      a = (0, at.beginCell)().storeUint(0, 32).storeUint(this.walletId, 32).storeBuffer(this.publicKey).storeBit(0).endCell();
    this.init = {
      code: s,
      data: a
    }, this.address = (0, at.contractAddress)(e, {
      code: s,
      data: a
    })
  }
  async getBalance(e) {
    return (await e.getState()).balance
  }
  async getSeqno(e) {
    return (await e.getState()).state.type === "active" ? (await e.get("seqno", [])).stack.readNumber() : 0
  }
  async send(e, n) {
    await e.external(n)
  }
  async sendTransfer(e, n) {
    let r = this.createTransfer(n);
    await this.send(e, r)
  }
  createTransfer(e) {
    return (0, Ii.createWalletTransferV4)({
      ...e,
      sendMode: e.sendMode ?? at.SendMode.PAY_GAS_SEPARATELY,
      walletId: this.walletId
    })
  }
  sender(e, n) {
    return {
      send: async r => {
        let s = await this.getSeqno(e),
          a = this.createTransfer({
            seqno: s,
            secretKey: n,
            sendMode: r.sendMode,
            messages: [(0, at.internal)({
              to: r.to,
              value: r.value,
              init: r.init,
              body: r.body,
              bounce: r.bounce
            })]
          });
        await this.send(e, a)
      }
    }
  }
}
$t.WalletContractV4 = zn;
var _a = {};
(function(t) {
  var e = O && O.__createBinding || (Object.create ? function(r, s, a, i) {
      i === void 0 && (i = a);
      var o = Object.getOwnPropertyDescriptor(s, a);
      (!o || ("get" in o ? !s.__esModule : o.writable || o.configurable)) && (o = {
        enumerable: !0,
        get: function() {
          return s[a]
        }
      }), Object.defineProperty(r, i, o)
    } : function(r, s, a, i) {
      i === void 0 && (i = a), r[i] = s[a]
    }),
    n = O && O.__exportStar || function(r, s) {
      for (var a in r) a !== "default" && !Object.prototype.hasOwnProperty.call(s, a) && e(s, r, a)
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n(aa(), t), n(xe, t), n(vt, t)
})(_a);
var wa = {};
(function(t) {
  var e = O && O.__createBinding || (Object.create ? function(r, s, a, i) {
      i === void 0 && (i = a);
      var o = Object.getOwnPropertyDescriptor(s, a);
      (!o || ("get" in o ? !s.__esModule : o.writable || o.configurable)) && (o = {
        enumerable: !0,
        get: function() {
          return s[a]
        }
      }), Object.defineProperty(r, i, o)
    } : function(r, s, a, i) {
      i === void 0 && (i = a), r[i] = s[a]
    }),
    n = O && O.__exportStar || function(r, s) {
      for (var a in r) a !== "default" && !Object.prototype.hasOwnProperty.call(s, a) && e(s, r, a)
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n(ga(), t), n(de, t), n(Ke, t)
})(wa);
var Ft = {};
Object.defineProperty(Ft, "__esModule", {
  value: !0
});
Ft.JettonMaster = void 0;
const Ri = M;
class Mn {
  static create(e) {
    return new Mn(e)
  }
  constructor(e) {
    this.address = e
  }
  async getWalletAddress(e, n) {
    return (await e.get("get_wallet_address", [{
      type: "slice",
      cell: (0, Ri.beginCell)().storeAddress(n).endCell()
    }])).stack.readAddress()
  }
  async getJettonData(e) {
    let n = await e.get("get_jetton_data", []),
      r = n.stack.readBigNumber(),
      s = n.stack.readBoolean(),
      a = n.stack.readAddress(),
      i = n.stack.readCell(),
      o = n.stack.readCell();
    return {
      totalSupply: r,
      mintable: s,
      adminAddress: a,
      content: i,
      walletCode: o
    }
  }
}
Ft.JettonMaster = Mn;
var Ht = {};
Object.defineProperty(Ht, "__esModule", {
  value: !0
});
Ht.JettonWallet = void 0;
class In {
  static create(e) {
    return new In(e)
  }
  constructor(e) {
    this.address = e
  }
  async getBalance(e) {
    return (await e.getState()).state.type !== "active" ? 0n : (await e.get("get_wallet_data", [])).stack.readBigNumber()
  }
}
Ht.JettonWallet = In;
var wt = {};
Object.defineProperty(wt, "__esModule", {
  value: !0
});
wt.MultisigOrder = void 0;
const er = It(),
  At = M;
class zt {
  constructor(e) {
    this.signatures = {}, this.payload = e
  }
  static fromCell(e) {
    var i;
    let n = e.beginParse(),
      r = (i = n.loadMaybeRef()) == null ? void 0 : i.beginParse();
    const s = n.asCell();
    let a = new zt(s);
    if (r) {
      for (; r.remainingBits > 0;) {
        const o = r.loadBuffer(64),
          l = r.loadUint(8);
        a.signatures[l] = o, r.remainingRefs > 0 ? r = r.loadRef().asSlice() : r.skip(1)
      }
      r.endParse()
    }
    return a
  }
  static fromPayload(e) {
    return new zt(e)
  }
  addSignature(e, n, r) {
    const s = this.payload.hash();
    if (!(0, er.signVerify)(s, n, r.owners.get(e).slice(0, -1))) throw Error("invalid signature");
    this.signatures[e] = n
  }
  sign(e, n) {
    const r = this.payload.hash();
    return this.signatures[e] = (0, er.sign)(r, n), r
  }
  unionSignatures(e) {
    this.signatures = Object.assign({}, this.signatures, e.signatures)
  }
  clearSignatures() {
    this.signatures = {}
  }
  toCell(e) {
    let n = (0, At.beginCell)().storeBit(0);
    for (const r in this.signatures) {
      const s = this.signatures[r];
      n = (0, At.beginCell)().storeBit(1).storeRef((0, At.beginCell)().storeBuffer(s).storeUint(parseInt(r), 8).storeBuilder(n).endCell())
    }
    return (0, At.beginCell)().storeUint(e, 8).storeBuilder(n).storeBuilder(this.payload.asBuilder()).endCell()
  }
}
wt.MultisigOrder = zt;
var Kt = {};
Object.defineProperty(Kt, "__esModule", {
  value: !0
});
Kt.MultisigOrderBuilder = void 0;
const st = M,
  Oi = wt;
class ji {
  constructor(e, n) {
    this.messages = (0, st.beginCell)(), this.queryId = 0n, this.walletId = e, this.queryOffset = n || 7200
  }
  addMessage(e, n) {
    if (this.messages.refs >= 4) throw Error("only 4 refs are allowed");
    this.updateQueryId(), this.messages.storeUint(n, 8), this.messages.storeRef((0, st.beginCell)().store((0, st.storeMessageRelaxed)(e)).endCell())
  }
  clearMessages() {
    this.messages = (0, st.beginCell)()
  }
  build() {
    return Oi.MultisigOrder.fromPayload((0, st.beginCell)().storeUint(this.walletId, 32).storeUint(this.queryId, 64).storeBuilder(this.messages).endCell())
  }
  updateQueryId() {
    const e = BigInt(Math.floor(Date.now() / 1e3 + this.queryOffset));
    this.queryId = e << 32n
  }
}
Kt.MultisigOrderBuilder = ji;
var Qt = {};
Object.defineProperty(Qt, "__esModule", {
  value: !0
});
Qt.MultisigWallet = void 0;
const tr = It(),
  D = M,
  Ui = D.Cell.fromBase64("te6ccgECKwEABBgAART/APSkE/S88sgLAQIBIAIDAgFIBAUE2vIgxwCOgzDbPOCDCNcYIPkBAdMH2zwiwAAToVNxePQOb6Hyn9s8VBq6+RDyoAb0BCD5AQHTH1EYuvKq0z9wUwHwCgHCCAGDCryx8mhTFYBA9A5voSCYDqQgwgryZw7f+COqH1NAufJhVCOjU04gIyEiAgLMBgcCASAMDQIBIAgJAgFmCgsAA9GEAiPymAvHoHN9CYbZ5S7Z4BPHohwhJQAtAKkItdJEqCTItdKlwLUAdAT8ArobBKAATwhbpEx4CBukTDgAdAg10rDAJrUAvALyFjPFszJ4HHXI8gBzxb0AMmACASAODwIBIBQVARW77ZbVA0cFUg2zyCoCAUgQEQIBIBITAXOxHXQgwjXGCD5AQHTB4IB1MTtQ9hTIHj0Dm+h8p/XC/9eMfkQ8qCuAfQEIW6TW3Ey4PkBWNs8AaQBgJwA9rtqA6ADoAPoCAXoCEfyAgPyA3XlP+AXkegAA54tkwAAXrhlXP8EA1WZ2oexAAgEgFhcCASAYGQFRtyVbZ4YmRmpGEAgegc30McJNhFpAADMaYeYuAFrgJhwLb+4cC3d0bhAjAYm1WZtnhqvgb+2xxsoicAgej430pBHEoFpAADHDhBACGuQkuuBk9kUWE5kAOeLKhACQCB6IYFImHFImHFImXEA2YlzNijAjAgEgGhsAF7UGtc4QQDVZnah7EAIBIBwdAgOZOB4fARGsGm2eL4G2CUAjABWt+UEAzJV2oewYQAENqTbPBVfBYCMAFa3f3CCAarM7UPYgAiDbPALyZfgAUENxQxPbPO1UIyoACtP/0wcwBKDbPC+uUyCw8mISsQKkJbNTHLmwJYEA4aojoCi8sPJpggGGoPgBBZcCERACPj4wjo0REB/bPEDXePRDEL0F4lQWW1Rz51YQU9zbPFRxClR6vCQlKCYAIO1E0NMf0wfTB9M/9AT0BNEAXgGOGjDSAAHyo9MH0wdQA9cBIPkBBfkBFbrypFAD4GwhIddKqgIi10m68qtwVCATAAwByMv/ywcE1ts87VT4D3AlblOJvrGYEG4QLVDHXwePGzBUJANQTds8UFWgRlAQSRA6SwlTuds8UFQWf+L4AAeDJaGOLCaAQPSWb6UglDBTA7neII4WODk5CNIAAZfTBzAW8AcFkTDifwgHBZJsMeKz5jAGKicoKQBgcI4pA9CDCNcY0wf0BDBTFnj0Dm+h8qXXC/9URUT5EPKmrlIgsVIDvRShI27mbCIyAH5SML6OIF8D+ACTItdKmALTB9QC+wAC6DJwyMoAQBSAQPRDAvAHjhdxyMsAFMsHEssHWM8BWM8WQBOAQPRDAeIBII6KEEUQNEMA2zztVJJfBuIqABzIyx/LB8sHyz/0APQAyQ==");
class Rn {
  constructor(e, n, r, s, a) {
    this.provider = null, this.owners = D.Dictionary.empty(), this.workchain = n, this.walletId = r, this.k = s;
    for (let i = 0; i < e.length; i += 1) this.owners.set(i, B.concat([e[i], B.alloc(1)]));
    this.init = {
      code: Ui,
      data: (0, D.beginCell)().storeUint(this.walletId, 32).storeUint(this.owners.size, 8).storeUint(this.k, 8).storeUint(0, 64).storeDict(this.owners, D.Dictionary.Keys.Uint(8), D.Dictionary.Values.Buffer(33)).storeBit(0).endCell()
    }, this.address = (a == null ? void 0 : a.address) || (0, D.contractAddress)(n, this.init), a != null && a.provider ? this.provider = a.provider : a != null && a.client && (this.provider = a.client.provider(this.address, {
      code: this.init.code,
      data: this.init.data
    }))
  }
  static async fromAddress(e, n) {
    let r;
    if (n.provider) r = n.provider;
    else {
      if (!n.client) throw Error("Either provider or client must be specified");
      r = n.client.provider(e, {
        code: null,
        data: null
      })
    }
    const s = (await r.getState()).state;
    if (s.type !== "active") throw Error("Contract must be active");
    const a = D.Cell.fromBoc(s.data)[0].beginParse(),
      i = a.loadUint(32);
    a.skip(8);
    const o = a.loadUint(8);
    a.skip(64);
    const l = a.loadDict(D.Dictionary.Keys.Uint(8), D.Dictionary.Values.Buffer(33));
    let d = [];
    for (const [u, v] of l) {
      const E = v.subarray(0, 32);
      d.push(E)
    }
    return new Rn(d, e.workChain, i, o, {
      address: e,
      provider: r,
      client: n.client
    })
  }
  async deployExternal(e) {
    if (!e && !this.provider) throw Error("you must specify provider if there is no such property in MultisigWallet instance");
    e || (e = this.provider), await e.external(D.Cell.EMPTY)
  }
  async deployInternal(e, n = 1000000000n) {
    await e.send({
      sendMode: D.SendMode.PAY_GAS_SEPARATELY + D.SendMode.IGNORE_ERRORS,
      to: this.address,
      value: n,
      init: this.init,
      body: D.Cell.EMPTY,
      bounce: !0
    })
  }
  async sendOrder(e, n, r) {
    if (!r && !this.provider) throw Error("you must specify provider if there is no such property in MultisigWallet instance");
    r || (r = this.provider);
    let s = (0, tr.keyPairFromSecretKey)(n).publicKey,
      a = this.getOwnerIdByPubkey(s),
      i = e.toCell(a),
      o = (0, tr.sign)(i.hash(), n);
    i = (0, D.beginCell)().storeBuffer(o).storeSlice(i.asSlice()).endCell(), await r.external(i)
  }
  async sendOrderWithoutSecretKey(e, n, r, s) {
    if (!s && !this.provider) throw Error("you must specify provider if there is no such property in MultisigWallet instance");
    s || (s = this.provider);
    let a = e.toCell(r);
    a = (0, D.beginCell)().storeBuffer(n).storeSlice(a.asSlice()).endCell(), await s.external(a)
  }
  getOwnerIdByPubkey(e) {
    for (const [n, r] of this.owners)
      if (r.subarray(0, 32).equals(e)) return n;
    throw Error("public key is not an owner")
  }
}
Qt.MultisigWallet = Rn;
var Gt = {};
Object.defineProperty(Gt, "__esModule", {
  value: !0
});
Gt.ElectorContract = void 0;
const H = M,
  Vi = {
    serialize(t, e) {
      throw Error("not implemented")
    },
    parse(t) {
      const e = new H.Address(-1, t.loadBuffer(32)),
        n = t.loadUintBig(64),
        r = t.loadCoins();
      return {
        address: e,
        weight: n,
        stake: r
      }
    }
  },
  Di = {
    serialize(t, e) {
      throw Error("not implemented")
    },
    parse(t) {
      const e = t.loadCoins();
      t.skip(64);
      const n = new H.Address(-1, t.loadBuffer(32)),
        r = t.loadBuffer(32);
      return {
        stake: e,
        address: n,
        adnl: r
      }
    }
  };
class On {
  static create() {
    return new On
  }
  constructor() {
    this.address = H.Address.parseRaw("-1:3333333333333333333333333333333333333333333333333333333333333333")
  }
  async getReturnedStake(e, n) {
    if (n.workChain !== -1) throw Error("Only masterchain addresses could have stake");
    return (await e.get("compute_returned_stake", [{
      type: "int",
      value: BigInt("0x" + n.hash.toString("hex"))
    }])).stack.readBigNumber()
  }
  async getPastElectionsList(e) {
    const n = await e.get("past_elections_list", []),
      r = new H.TupleReader(n.stack.readLispList()),
      s = [];
    for (; r.remaining > 0;) {
      const a = r.readTuple(),
        i = a.readNumber(),
        o = a.readNumber();
      a.pop();
      const l = a.readNumber();
      s.push({
        id: i,
        unfreezeAt: o,
        stakeHeld: l
      })
    }
    return s
  }
  async getPastElections(e) {
    const n = await e.get("past_elections", []),
      r = new H.TupleReader(n.stack.readLispList()),
      s = [];
    for (; r.remaining > 0;) {
      const a = r.readTuple(),
        i = a.readNumber(),
        o = a.readNumber(),
        l = a.readNumber();
      a.pop();
      const d = a.readCell(),
        u = a.readBigNumber(),
        v = a.readBigNumber();
      let E = new Map;
      const R = d.beginParse().loadDictDirect(H.Dictionary.Keys.Buffer(32), Vi);
      for (const [ue, g] of R) E.set(BigInt("0x" + ue.toString("hex")).toString(10), {
        address: g.address,
        weight: g.weight,
        stake: g.stake
      });
      s.push({
        id: i,
        unfreezeAt: o,
        stakeHeld: l,
        totalStake: u,
        bonuses: v,
        frozen: E
      })
    }
    return s
  }
  async getElectionEntities(e) {
    const n = await e.getState();
    if (n.state.type !== "active") throw Error("Unexpected error");
    const s = H.Cell.fromBoc(n.state.data)[0].beginParse();
    if (!s.loadBit()) return null;
    const a = s.loadRef().beginParse(),
      i = a.loadUint(32),
      o = a.loadUint(32),
      l = a.loadCoins(),
      d = a.loadCoins(),
      u = a.loadDict(H.Dictionary.Keys.Buffer(32), Di);
    let v = [];
    if (u)
      for (const [E, R] of u) v.push({
        pubkey: E,
        stake: R.stake,
        address: R.address,
        adnl: R.adnl
      });
    return {
      minStake: l,
      allStakes: d,
      endElectionsTime: o,
      startWorkTime: i,
      entities: v
    }
  }
  async getActiveElectionId(e) {
    const r = (await e.get("active_election_id", [])).stack.readNumber();
    return r > 0 ? r : null
  }
  async getComplaints(e, n) {
    const r = new H.TupleBuilder;
    r.writeNumber(n);
    const s = await e.get("list_complaints", r.build());
    if (s.stack.peek().type === "null") return [];
    const a = new H.TupleReader(s.stack.readLispList()),
      i = [];
    for (; a.remaining > 0;) {
      const o = a.readTuple(),
        l = o.readBigNumber(),
        d = o.readTuple(),
        u = d.readTuple(),
        v = B.from(u.readBigNumber().toString(16), "hex");
      u.readCell();
      const E = u.readNumber(),
        R = u.readNumber(),
        ue = new H.Address(-1, B.from(u.readBigNumber().toString(16), "hex")),
        g = u.readBigNumber(),
        w = u.readBigNumber(),
        T = u.readBigNumber(),
        fe = [],
        ne = new H.TupleReader(d.readLispList());
      for (; ne.remaining > 0;) fe.push(ne.readNumber());
      const Yt = d.readBigNumber(),
        Jt = d.readBigNumber();
      i.push({
        id: l,
        publicKey: v,
        createdAt: E,
        severity: R,
        paid: g,
        suggestedFine: w,
        suggestedFinePart: T,
        rewardAddress: ue,
        votes: fe,
        remainingWeight: Jt,
        vsetId: Yt
      })
    }
    return i
  }
}
Gt.ElectorContract = On;
var P = {};
Object.defineProperty(P, "__esModule", {
  value: !0
});
P.configParseMasterAddress = lt;
P.parseValidatorSet = Ca;
P.parseBridge = Aa;
P.configParseMasterAddressRequired = fn;
P.configParse5 = ka;
P.configParse13 = Ni;
P.configParse15 = xa;
P.configParse16 = Ba;
P.configParse17 = Ea;
P.configParse18 = Ta;
P.configParse8 = Pa;
P.configParse40 = Sa;
P.configParseWorkchainDescriptor = Li;
P.configParse12 = za;
P.configParseValidatorSet = ve;
P.configParseBridge = xt;
P.configParseGasLimitsPrices = hn;
P.configParseMsgPrices = gn;
P.configParse28 = Ma;
P.configParse29 = Ia;
P.parseProposalSetup = mn;
P.parseVotingSetup = Ra;
P.loadConfigParamById = $i;
P.loadConfigParamsAsSlice = Fi;
P.parseFullConfig = Hi;
const Z = M;

function lt(t) {
  return t ? new Z.Address(-1, t.loadBuffer(32)) : null
}

function nr(t) {
  if (t.loadUint(32) !== 2390828938) throw Error("Invalid config");
  return t.loadBuffer(32)
}
const rr = {
  serialize(t, e) {
    throw Error("not implemented")
  },
  parse(t) {
    const e = t.loadUint(8);
    if (e === 83) return {
      publicKey: nr(t),
      weight: t.loadUintBig(64),
      adnlAddress: null
    };
    if (e === 115) return {
      publicKey: nr(t),
      weight: t.loadUintBig(64),
      adnlAddress: t.loadBuffer(32)
    };
    throw Error("Invalid config")
  }
};

function Ca(t) {
  const e = t.loadUint(8);
  if (e === 17) {
    const n = t.loadUint(32),
      r = t.loadUint(32),
      s = t.loadUint(16),
      a = t.loadUint(16),
      i = t.loadDictDirect(Z.Dictionary.Keys.Uint(16), rr);
    return {
      timeSince: n,
      timeUntil: r,
      total: s,
      main: a,
      totalWeight: null,
      list: i
    }
  } else if (e === 18) {
    const n = t.loadUint(32),
      r = t.loadUint(32),
      s = t.loadUint(16),
      a = t.loadUint(16),
      i = t.loadUintBig(64),
      o = t.loadDict(Z.Dictionary.Keys.Uint(16), rr);
    return {
      timeSince: n,
      timeUntil: r,
      total: s,
      main: a,
      totalWeight: i,
      list: o
    }
  }
}

function Aa(t) {
  const e = new Z.Address(-1, t.loadBuffer(32)),
    n = new Z.Address(-1, t.loadBuffer(32)),
    r = t.loadDict(Z.Dictionary.Keys.Buffer(32), Z.Dictionary.Values.Buffer(32)),
    s = new Map;
  for (const [i, o] of r) s.set(new Z.Address(-1, i).toString(), o);
  const a = t.loadBuffer(32);
  return {
    bridgeAddress: e,
    oracleMultisigAddress: n,
    oracles: s,
    externalChainAddress: a
  }
}

function fn(t) {
  if (!t) throw Error("Invalid config");
  return lt(t)
}

function ka(t) {
  if (!t) throw Error("Invalid config");
  if (t.loadUint(8) === 1) {
    const n = t.loadBit() ? new Z.Address(-1, t.loadBuffer(32)) : null,
      r = t.loadUint(32),
      s = t.loadUint(32);
    return {
      blackholeAddr: n,
      feeBurnNominator: r,
      feeBurnDenominator: s
    }
  }
  throw new Error("Invalid config")
}

function Ni(t) {
  if (!t) throw Error("Invalid config");
  if (t.loadUint(8) === 26) {
    const n = t.loadCoins(),
      r = t.loadCoins(),
      s = t.loadCoins();
    return {
      deposit: n,
      bitPrice: r,
      cellPrice: s
    }
  }
  throw new Error("Invalid config")
}

function xa(t) {
  if (!t) throw Error("Invalid config");
  const e = t.loadUint(32),
    n = t.loadUint(32),
    r = t.loadUint(32),
    s = t.loadUint(32);
  return {
    validatorsElectedFor: e,
    electorsStartBefore: n,
    electorsEndBefore: r,
    stakeHeldFor: s
  }
}

function Ba(t) {
  if (!t) throw Error("Invalid config");
  const e = t.loadUint(16),
    n = t.loadUint(16),
    r = t.loadUint(16);
  return {
    maxValidators: e,
    maxMainValidators: n,
    minValidators: r
  }
}

function Ea(t) {
  if (!t) throw Error("Invalid config");
  const e = t.loadCoins(),
    n = t.loadCoins(),
    r = t.loadCoins(),
    s = t.loadUint(32);
  return {
    minStake: e,
    maxStake: n,
    minTotalStake: r,
    maxStakeFactor: s
  }
}
const Wi = {
  serialize(t, e) {
    throw Error("not implemented")
  },
  parse(t) {
    if (t.loadUint(8) !== 204) throw Error("Invalid config");
    const n = t.loadUint(32),
      r = t.loadUintBig(64),
      s = t.loadUintBig(64),
      a = t.loadUintBig(64),
      i = t.loadUintBig(64);
    return {
      utime_since: n,
      bit_price_ps: r,
      cell_price_ps: s,
      mc_bit_price_ps: a,
      mc_cell_price_ps: i
    }
  }
};

function Ta(t) {
  if (!t) throw Error("Invalid config");
  return t.loadDictDirect(Z.Dictionary.Keys.Buffer(4), Wi).values()
}

function Pa(t) {
  if (!t) return {
    version: 0,
    capabilities: 0n
  };
  const e = t.loadUint(32),
    n = t.loadUintBig(64);
  return {
    version: e,
    capabilities: n
  }
}

function Sa(t) {
  if (!t) return null;
  if (t.loadUint(8) !== 1) throw Error("Invalid config");
  const n = t.loadCoins(),
    r = t.loadCoins(),
    s = t.loadUint(16),
    a = t.loadUint(16),
    i = t.loadUint(16),
    o = t.loadUint(16),
    l = t.loadUint(16),
    d = t.loadUint(16),
    u = t.loadUint(16),
    v = t.loadUint(16),
    E = t.loadUint(16);
  return {
    defaultFlatFine: n,
    defaultProportionaFine: r,
    severityFlatMult: s,
    severityProportionalMult: a,
    unfunishableInterval: i,
    longInterval: o,
    longFlatMult: l,
    longProportionalMult: d,
    mediumInterval: u,
    mediumFlatMult: v,
    mediumProportionalMult: E
  }
}

function Li(t) {
  if (t.loadUint(8) !== 166) throw Error("Invalid config");
  const e = t.loadUint(32),
    n = t.loadUint(8),
    r = t.loadUint(8),
    s = t.loadUint(8),
    a = t.loadBit(),
    i = t.loadBit(),
    o = t.loadBit(),
    l = t.loadUint(13),
    d = t.loadBuffer(32),
    u = t.loadBuffer(32),
    v = t.loadUint(32);
  if (t.loadBit()) throw Error("Invalid config");
  const E = t.loadUint(32),
    R = t.loadUintBig(64);
  return {
    enabledSince: e,
    actialMinSplit: n,
    min_split: r,
    max_split: s,
    basic: a,
    active: i,
    accept_msgs: o,
    flags: l,
    zerostateRootHash: d,
    zerostateFileHash: u,
    version: v,
    format: {
      vmVersion: E,
      vmMode: R
    }
  }
}
const qi = {
  serialize(t, e) {
    throw Error("not implemented")
  },
  parse(t) {
    if (t.loadUint(8) !== 166) throw Error("Invalid config");
    const e = t.loadUint(32),
      n = t.loadUint(8),
      r = t.loadUint(8),
      s = t.loadUint(8),
      a = t.loadBit(),
      i = t.loadBit(),
      o = t.loadBit(),
      l = t.loadUint(13),
      d = t.loadBuffer(32),
      u = t.loadBuffer(32),
      v = t.loadUint(32);
    if (t.loadBit()) throw Error("Invalid config");
    const E = t.loadUint(32),
      R = t.loadUintBig(64);
    return {
      enabledSince: e,
      actialMinSplit: n,
      min_split: r,
      max_split: s,
      basic: a,
      active: i,
      accept_msgs: o,
      flags: l,
      zerostateRootHash: d,
      zerostateFileHash: u,
      version: v,
      format: {
        vmVersion: E,
        vmMode: R
      }
    }
  }
};

function za(t) {
  if (!t) throw Error("Invalid config");
  const e = t.loadDict(Z.Dictionary.Keys.Uint(32), qi);
  if (e) return e;
  throw Error("No workchains exist")
}

function ve(t) {
  return t ? Ca(t) : null
}

function xt(t) {
  return t ? Aa(t) : null
}

function Zi(t) {
  const e = t.loadUint(8);
  if (e === 222) {
    const n = t.loadUintBig(64),
      r = t.loadUintBig(64),
      s = t.loadUintBig(64),
      a = t.loadUintBig(64),
      i = t.loadUintBig(64),
      o = t.loadUintBig(64),
      l = t.loadUintBig(64);
    return {
      gasPrice: n,
      gasLimit: r,
      specialGasLimit: s,
      gasCredit: a,
      blockGasLimit: i,
      freezeDueLimit: o,
      deleteDueLimit: l
    }
  } else if (e === 221) {
    const n = t.loadUintBig(64),
      r = t.loadUintBig(64),
      s = t.loadUintBig(64),
      a = t.loadUintBig(64),
      i = t.loadUintBig(64),
      o = t.loadUintBig(64);
    return {
      gasPrice: n,
      gasLimit: r,
      gasCredit: s,
      blockGasLimit: a,
      freezeDueLimit: i,
      deleteDueLimit: o
    }
  } else throw Error("Invalid config")
}

function hn(t) {
  if (!t) throw Error("Invalid config");
  if (t.loadUint(8) === 209) {
    const n = t.loadUintBig(64),
      r = t.loadUintBig(64),
      s = Zi(t);
    return {
      flatLimit: n,
      flatGasPrice: r,
      other: s
    }
  } else throw Error("Invalid config")
}

function gn(t) {
  if (!t) throw new Error("Invalid config");
  if (t.loadUint(8) !== 234) throw new Error("Invalid msg prices param");
  return {
    lumpPrice: t.loadUintBig(64),
    bitPrice: t.loadUintBig(64),
    cellPrice: t.loadUintBig(64),
    ihrPriceFactor: t.loadUint(32),
    firstFrac: t.loadUint(16),
    nextFrac: t.loadUint(16)
  }
}

function Ma(t) {
  if (!t) throw new Error("Invalid config");
  const e = t.loadUint(8);
  if (e === 193) {
    const n = t.loadUint(32),
      r = t.loadUint(32),
      s = t.loadUint(32),
      a = t.loadUint(32);
    return {
      masterCatchainLifetime: n,
      shardCatchainLifetime: r,
      shardValidatorsLifetime: s,
      shardValidatorsCount: a
    }
  }
  if (e === 194) {
    const n = t.loadUint(7),
      r = t.loadBit(),
      s = t.loadUint(32),
      a = t.loadUint(32),
      i = t.loadUint(32),
      o = t.loadUint(32);
    return {
      flags: n,
      suffleMasterValidators: r,
      masterCatchainLifetime: s,
      shardCatchainLifetime: a,
      shardValidatorsLifetime: i,
      shardValidatorsCount: o
    }
  }
  throw new Error("Invalid config")
}

function Ia(t) {
  if (!t) throw new Error("Invalid config");
  const e = t.loadUint(8);
  if (e === 214) {
    const n = t.loadUint(32),
      r = t.loadUint(32),
      s = t.loadUint(32),
      a = t.loadUint(32),
      i = t.loadUint(32),
      o = t.loadUint(32),
      l = t.loadUint(32),
      d = t.loadUint(32);
    return {
      roundCandidates: n,
      nextCandidateDelay: r,
      consensusTimeout: s,
      fastAttempts: a,
      attemptDuration: i,
      catchainMaxDeps: o,
      maxBlockBytes: l,
      maxColaltedBytes: d
    }
  } else if (e === 215) {
    const n = t.loadUint(7),
      r = t.loadBit(),
      s = t.loadUint(8),
      a = t.loadUint(32),
      i = t.loadUint(32),
      o = t.loadUint(32),
      l = t.loadUint(32),
      d = t.loadUint(32),
      u = t.loadUint(32),
      v = t.loadUint(32);
    return {
      flags: n,
      newCatchainIds: r,
      roundCandidates: s,
      nextCandidateDelay: a,
      consensusTimeout: i,
      fastAttempts: o,
      attemptDuration: l,
      catchainMaxDeps: d,
      maxBlockBytes: u,
      maxColaltedBytes: v
    }
  } else if (e === 216) {
    const n = t.loadUint(7),
      r = t.loadBit(),
      s = t.loadUint(8),
      a = t.loadUint(32),
      i = t.loadUint(32),
      o = t.loadUint(32),
      l = t.loadUint(32),
      d = t.loadUint(32),
      u = t.loadUint(32),
      v = t.loadUint(32),
      E = t.loadUint(16);
    return {
      flags: n,
      newCatchainIds: r,
      roundCandidates: s,
      nextCandidateDelay: a,
      consensusTimeout: i,
      fastAttempts: o,
      attemptDuration: l,
      catchainMaxDeps: d,
      maxBlockBytes: u,
      maxColaltedBytes: v,
      protoVersion: E
    }
  } else if (e === 217) {
    const n = t.loadUint(7),
      r = t.loadBit(),
      s = t.loadUint(8),
      a = t.loadUint(32),
      i = t.loadUint(32),
      o = t.loadUint(32),
      l = t.loadUint(32),
      d = t.loadUint(32),
      u = t.loadUint(32),
      v = t.loadUint(32),
      E = t.loadUint(16),
      R = t.loadUint(32);
    return {
      flags: n,
      newCatchainIds: r,
      roundCandidates: s,
      nextCandidateDelay: a,
      consensusTimeout: i,
      fastAttempts: o,
      attemptDuration: l,
      catchainMaxDeps: d,
      maxBlockBytes: u,
      maxColaltedBytes: v,
      protoVersion: E,
      catchainMaxBlocksCoeff: R
    }
  }
  throw new Error("Invalid config")
}

function mn(t) {
  if (t.loadUint(8) !== 54) throw new Error("Invalid config");
  const n = t.loadUint(8),
    r = t.loadUint(8),
    s = t.loadUint(8),
    a = t.loadUint(8),
    i = t.loadUint(32),
    o = t.loadUint(32),
    l = t.loadUint(32),
    d = t.loadUint(32);
  return {
    minTotalRounds: n,
    maxTotalRounds: r,
    minWins: s,
    maxLoses: a,
    minStoreSec: i,
    maxStoreSec: o,
    bitPrice: l,
    cellPrice: d
  }
}

function Ra(t) {
  if (!t) throw new Error("Invalid config");
  if (t.loadUint(8) !== 145) throw new Error("Invalid config");
  const n = mn(t.loadRef().beginParse()),
    r = mn(t.loadRef().beginParse());
  return {
    normalParams: n,
    criticalParams: r
  }
}

function Oa(t) {
  return Z.Cell.fromBase64(t).beginParse().loadDictDirect(Z.Dictionary.Keys.Int(32), Z.Dictionary.Values.Cell())
}

function $i(t, e) {
  return Oa(t).get(e)
}

function Fi(t) {
  const e = Oa(t),
    n = new Map;
  for (const [r, s] of e) n.set(r, s.beginParse());
  return n
}

function Hi(t) {
  return {
    configAddress: fn(t.get(0)),
    electorAddress: fn(t.get(1)),
    minterAddress: lt(t.get(2)),
    feeCollectorAddress: lt(t.get(3)),
    dnsRootAddress: lt(t.get(4)),
    burningConfig: ka(t.get(5)),
    globalVersion: Pa(t.get(8)),
    workchains: za(t.get(12)),
    voting: Ra(t.get(11)),
    validators: {
      ...xa(t.get(15)),
      ...Ba(t.get(16)),
      ...Ea(t.get(17))
    },
    storagePrices: Ta(t.get(18)),
    gasPrices: {
      masterchain: hn(t.get(20)),
      workchain: hn(t.get(21))
    },
    msgPrices: {
      masterchain: gn(t.get(24)),
      workchain: gn(t.get(25))
    },
    validatorSets: {
      prevValidators: ve(t.get(32)),
      prevTempValidators: ve(t.get(33)),
      currentValidators: ve(t.get(34)),
      currentTempValidators: ve(t.get(35)),
      nextValidators: ve(t.get(36)),
      nextTempValidators: ve(t.get(37))
    },
    validatorsPunish: Sa(t.get(40)),
    bridges: {
      ethereum: xt(t.get(71)),
      binance: xt(t.get(72)),
      polygon: xt(t.get(73))
    },
    catchain: Ma(t.get(28)),
    consensus: Ia(t.get(29))
  }
}
var Be = {};
Object.defineProperty(Be, "__esModule", {
  value: !0
});
Be.computeStorageFees = Ki;
Be.computeFwdFees = jn;
Be.computeGasPrices = Qi;
Be.computeExternalMessageFees = Gi;
Be.computeMessageForwardFees = Yi;
const sn = M;

function Ki(t) {
  const {
    lastPaid: e,
    now: n,
    storagePrices: r,
    storageStat: s,
    special: a,
    masterchain: i
  } = t;
  if (n <= e || r.length === 0 || n < r[0].utime_since || a) return BigInt(0);
  let o = Math.max(e, r[0].utime_since),
    l = BigInt(0);
  for (let d = 0; d < r.length && o < n; d++) {
    let u = d < r.length - 1 ? Math.min(n, r[d + 1].utime_since) : n,
      v = BigInt(0);
    if (o < u) {
      let E = u - o;
      v += BigInt(s.cells) * (i ? r[d].mc_cell_price_ps : r[d].cell_price_ps), v += BigInt(s.bits) * (i ? r[d].mc_bit_price_ps : r[d].bit_price_ps), v = v * BigInt(E)
    }
    o = u, l += v
  }
  return ja(l)
}

function jn(t, e, n) {
  return t.lumpPrice + ja(t.bitPrice * n + t.cellPrice * e)
}

function Qi(t, e) {
  return t <= e.flatLimit ? e.flatPrice : e.flatPrice + (e.price * (t - e.flatLimit) >> 16n)
}

function Gi(t, e) {
  let n = Mt(e);
  return n.bits -= e.bits.length, n.cells -= 1, jn(t, BigInt(n.cells), BigInt(n.bits))
}

function Yi(t, e) {
  let n = (0, sn.loadMessageRelaxed)(e.beginParse()),
    r = {
      bits: 0,
      cells: 0
    };
  if (n.init) {
    const l = new sn.Cell().asBuilder();
    (0, sn.storeStateInit)(n.init)(l);
    const d = l.endCell();
    let u = Mt(d);
    u.bits -= d.bits.length, u.cells -= 1, r.bits += u.bits, r.cells += u.cells
  }
  let s = Mt(n.body);
  s.bits -= n.body.bits.length, s.cells -= 1, r.bits += s.bits, r.cells += s.cells;
  let a = jn(t, BigInt(r.cells), BigInt(r.bits)),
    i = a * BigInt(t.firstFrac) >> 16n,
    o = a - i;
  return {
    fees: i,
    remaining: o
  }
}

function Mt(t) {
  let e = t.bits.length,
    n = 1;
  for (let r of t.refs) {
    let s = Mt(r);
    n += s.cells, e += s.bits
  }
  return {
    bits: e,
    cells: n
  }
}

function ja(t) {
  let e = t % 65536n,
    n = t >> 16n;
  return e !== 0n && (n += 1n), n
}(function(t) {
  var e = O && O.__createBinding || (Object.create ? function(Ee, he, J, ye) {
      ye === void 0 && (ye = J);
      var Te = Object.getOwnPropertyDescriptor(he, J);
      (!Te || ("get" in Te ? !he.__esModule : Te.writable || Te.configurable)) && (Te = {
        enumerable: !0,
        get: function() {
          return he[J]
        }
      }), Object.defineProperty(Ee, ye, Te)
    } : function(Ee, he, J, ye) {
      ye === void 0 && (ye = J), Ee[ye] = he[J]
    }),
    n = O && O.__exportStar || function(Ee, he) {
      for (var J in Ee) J !== "default" && !Object.prototype.hasOwnProperty.call(he, J) && e(he, Ee, J)
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.computeStorageFees = t.computeMessageForwardFees = t.computeGasPrices = t.computeFwdFees = t.computeExternalMessageFees = t.loadConfigParamsAsSlice = t.loadConfigParamById = t.parseFullConfig = t.parseVotingSetup = t.parseValidatorSet = t.parseProposalSetup = t.parseBridge = t.configParseWorkchainDescriptor = t.configParseValidatorSet = t.configParseMsgPrices = t.configParseMasterAddressRequired = t.configParseMasterAddress = t.configParseGasLimitsPrices = t.configParseBridge = t.configParse40 = t.configParse29 = t.configParse28 = t.configParse18 = t.configParse17 = t.configParse16 = t.configParse15 = t.configParse13 = t.configParse12 = t.configParse8 = t.configParse5 = t.ElectorContract = t.MultisigWallet = t.MultisigOrderBuilder = t.MultisigOrder = t.JettonWallet = t.JettonMaster = t.WalletContractV5R1 = t.WalletContractV5Beta = t.WalletContractV4 = t.WalletContractV3R2 = t.WalletContractV3R1 = t.WalletContractV2R2 = t.WalletContractV2R1 = t.WalletContractV1R3 = t.WalletContractV1R2 = t.WalletContractV1R1 = t.TonClient4 = t.TonClient = t.HttpApi = void 0, n(M, t);
  var r = yt;
  Object.defineProperty(t, "HttpApi", {
    enumerable: !0,
    get: function() {
      return r.HttpApi
    }
  });
  var s = jt;
  Object.defineProperty(t, "TonClient", {
    enumerable: !0,
    get: function() {
      return s.TonClient
    }
  });
  var a = Ut;
  Object.defineProperty(t, "TonClient4", {
    enumerable: !0,
    get: function() {
      return a.TonClient4
    }
  });
  var i = Vt;
  Object.defineProperty(t, "WalletContractV1R1", {
    enumerable: !0,
    get: function() {
      return i.WalletContractV1R1
    }
  });
  var o = Dt;
  Object.defineProperty(t, "WalletContractV1R2", {
    enumerable: !0,
    get: function() {
      return o.WalletContractV1R2
    }
  });
  var l = Nt;
  Object.defineProperty(t, "WalletContractV1R3", {
    enumerable: !0,
    get: function() {
      return l.WalletContractV1R3
    }
  });
  var d = Wt;
  Object.defineProperty(t, "WalletContractV2R1", {
    enumerable: !0,
    get: function() {
      return d.WalletContractV2R1
    }
  });
  var u = Lt;
  Object.defineProperty(t, "WalletContractV2R2", {
    enumerable: !0,
    get: function() {
      return u.WalletContractV2R2
    }
  });
  var v = qt;
  Object.defineProperty(t, "WalletContractV3R1", {
    enumerable: !0,
    get: function() {
      return v.WalletContractV3R1
    }
  });
  var E = Zt;
  Object.defineProperty(t, "WalletContractV3R2", {
    enumerable: !0,
    get: function() {
      return E.WalletContractV3R2
    }
  });
  var R = $t;
  Object.defineProperty(t, "WalletContractV4", {
    enumerable: !0,
    get: function() {
      return R.WalletContractV4
    }
  });
  var ue = _a;
  Object.defineProperty(t, "WalletContractV5Beta", {
    enumerable: !0,
    get: function() {
      return ue.WalletContractV5Beta
    }
  });
  var g = wa;
  Object.defineProperty(t, "WalletContractV5R1", {
    enumerable: !0,
    get: function() {
      return g.WalletContractV5R1
    }
  });
  var w = Ft;
  Object.defineProperty(t, "JettonMaster", {
    enumerable: !0,
    get: function() {
      return w.JettonMaster
    }
  });
  var T = Ht;
  Object.defineProperty(t, "JettonWallet", {
    enumerable: !0,
    get: function() {
      return T.JettonWallet
    }
  });
  var fe = wt;
  Object.defineProperty(t, "MultisigOrder", {
    enumerable: !0,
    get: function() {
      return fe.MultisigOrder
    }
  });
  var ne = Kt;
  Object.defineProperty(t, "MultisigOrderBuilder", {
    enumerable: !0,
    get: function() {
      return ne.MultisigOrderBuilder
    }
  });
  var Yt = Qt;
  Object.defineProperty(t, "MultisigWallet", {
    enumerable: !0,
    get: function() {
      return Yt.MultisigWallet
    }
  });
  var Jt = Gt;
  Object.defineProperty(t, "ElectorContract", {
    enumerable: !0,
    get: function() {
      return Jt.ElectorContract
    }
  });
  var z = P;
  Object.defineProperty(t, "configParse5", {
    enumerable: !0,
    get: function() {
      return z.configParse5
    }
  }), Object.defineProperty(t, "configParse8", {
    enumerable: !0,
    get: function() {
      return z.configParse8
    }
  }), Object.defineProperty(t, "configParse12", {
    enumerable: !0,
    get: function() {
      return z.configParse12
    }
  }), Object.defineProperty(t, "configParse13", {
    enumerable: !0,
    get: function() {
      return z.configParse13
    }
  }), Object.defineProperty(t, "configParse15", {
    enumerable: !0,
    get: function() {
      return z.configParse15
    }
  }), Object.defineProperty(t, "configParse16", {
    enumerable: !0,
    get: function() {
      return z.configParse16
    }
  }), Object.defineProperty(t, "configParse17", {
    enumerable: !0,
    get: function() {
      return z.configParse17
    }
  }), Object.defineProperty(t, "configParse18", {
    enumerable: !0,
    get: function() {
      return z.configParse18
    }
  }), Object.defineProperty(t, "configParse28", {
    enumerable: !0,
    get: function() {
      return z.configParse28
    }
  }), Object.defineProperty(t, "configParse29", {
    enumerable: !0,
    get: function() {
      return z.configParse29
    }
  }), Object.defineProperty(t, "configParse40", {
    enumerable: !0,
    get: function() {
      return z.configParse40
    }
  }), Object.defineProperty(t, "configParseBridge", {
    enumerable: !0,
    get: function() {
      return z.configParseBridge
    }
  }), Object.defineProperty(t, "configParseGasLimitsPrices", {
    enumerable: !0,
    get: function() {
      return z.configParseGasLimitsPrices
    }
  }), Object.defineProperty(t, "configParseMasterAddress", {
    enumerable: !0,
    get: function() {
      return z.configParseMasterAddress
    }
  }), Object.defineProperty(t, "configParseMasterAddressRequired", {
    enumerable: !0,
    get: function() {
      return z.configParseMasterAddressRequired
    }
  }), Object.defineProperty(t, "configParseMsgPrices", {
    enumerable: !0,
    get: function() {
      return z.configParseMsgPrices
    }
  }), Object.defineProperty(t, "configParseValidatorSet", {
    enumerable: !0,
    get: function() {
      return z.configParseValidatorSet
    }
  }), Object.defineProperty(t, "configParseWorkchainDescriptor", {
    enumerable: !0,
    get: function() {
      return z.configParseWorkchainDescriptor
    }
  }), Object.defineProperty(t, "parseBridge", {
    enumerable: !0,
    get: function() {
      return z.parseBridge
    }
  }), Object.defineProperty(t, "parseProposalSetup", {
    enumerable: !0,
    get: function() {
      return z.parseProposalSetup
    }
  }), Object.defineProperty(t, "parseValidatorSet", {
    enumerable: !0,
    get: function() {
      return z.parseValidatorSet
    }
  }), Object.defineProperty(t, "parseVotingSetup", {
    enumerable: !0,
    get: function() {
      return z.parseVotingSetup
    }
  }), Object.defineProperty(t, "parseFullConfig", {
    enumerable: !0,
    get: function() {
      return z.parseFullConfig
    }
  }), Object.defineProperty(t, "loadConfigParamById", {
    enumerable: !0,
    get: function() {
      return z.loadConfigParamById
    }
  }), Object.defineProperty(t, "loadConfigParamsAsSlice", {
    enumerable: !0,
    get: function() {
      return z.loadConfigParamsAsSlice
    }
  });
  var Qe = Be;
  Object.defineProperty(t, "computeExternalMessageFees", {
    enumerable: !0,
    get: function() {
      return Qe.computeExternalMessageFees
    }
  }), Object.defineProperty(t, "computeFwdFees", {
    enumerable: !0,
    get: function() {
      return Qe.computeFwdFees
    }
  }), Object.defineProperty(t, "computeGasPrices", {
    enumerable: !0,
    get: function() {
      return Qe.computeGasPrices
    }
  }), Object.defineProperty(t, "computeMessageForwardFees", {
    enumerable: !0,
    get: function() {
      return Qe.computeMessageForwardFees
    }
  }), Object.defineProperty(t, "computeStorageFees", {
    enumerable: !0,
    get: function() {
      return Qe.computeStorageFees
    }
  })
})(Va);
export {
  Va as d
};