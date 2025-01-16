(function() {
  "use strict";
  const M = globalThis || void 0 || self;
  let _;
  const E = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
  }) : {
    decode: () => {
      throw Error("TextDecoder not available")
    }
  };
  typeof TextDecoder < "u" && E.decode();
  let m = null;

  function S() {
    return (m === null || m.byteLength === 0) && (m = new Uint8Array(_.memory.buffer)), m
  }

  function p(e, n) {
    return e = e >>> 0, E.decode(S().subarray(e, e + n))
  }
  const g = new Array(128).fill(void 0);
  g.push(void 0, null, !0, !1);
  let h = g.length;

  function i(e) {
    h === g.length && g.push(g.length + 1);
    const n = h;
    return h = g[n], g[n] = e, n
  }

  function o(e) {
    return g[e]
  }
  let w = 0;
  const x = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
      encode: () => {
        throw Error("TextEncoder not available")
      }
    },
    W = typeof x.encodeInto == "function" ? function(e, n) {
      return x.encodeInto(e, n)
    } : function(e, n) {
      const t = x.encode(e);
      return n.set(t), {
        read: e.length,
        written: t.length
      }
    };

  function I(e, n, t) {
    if (t === void 0) {
      const a = x.encode(e),
        y = n(a.length, 1) >>> 0;
      return S().subarray(y, y + a.length).set(a), w = a.length, y
    }
    let r = e.length,
      c = n(r, 1) >>> 0;
    const u = S();
    let s = 0;
    for (; s < r; s++) {
      const a = e.charCodeAt(s);
      if (a > 127) break;
      u[c + s] = a
    }
    if (s !== r) {
      s !== 0 && (e = e.slice(s)), c = t(c, r, r = s + e.length * 3, 1) >>> 0;
      const a = S().subarray(c + s, c + r),
        y = W(e, a);
      s += y.written, c = t(c, r, s, 1) >>> 0
    }
    return w = s, c
  }

  function A(e) {
    return e == null
  }
  let d = null;

  function f() {
    return (d === null || d.buffer.detached === !0 || d.buffer.detached === void 0 && d.buffer !== _.memory.buffer) && (d = new DataView(_.memory.buffer)), d
  }

  function v(e) {
    e < 132 || (g[e] = h, h = e)
  }

  function l(e) {
    const n = o(e);
    return v(e), n
  }

  function O(e) {
    const n = typeof e;
    if (n == "number" || n == "boolean" || e == null) return `${e}`;
    if (n == "string") return `"${e}"`;
    if (n == "symbol") {
      const c = e.description;
      return c == null ? "Symbol" : `Symbol(${c})`
    }
    if (n == "function") {
      const c = e.name;
      return typeof c == "string" && c.length > 0 ? `Function(${c})` : "Function"
    }
    if (Array.isArray(e)) {
      const c = e.length;
      let u = "[";
      c > 0 && (u += O(e[0]));
      for (let s = 1; s < c; s++) u += ", " + O(e[s]);
      return u += "]", u
    }
    const t = /\[object ([^\]]+)\]/.exec(toString.call(e));
    let r;
    if (t.length > 1) r = t[1];
    else return toString.call(e);
    if (r == "Object") try {
      return "Object(" + JSON.stringify(e) + ")"
    } catch {
      return "Object"
    }
    return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r
  }

  function F(e) {
    try {
      const c = _.__wbindgen_add_to_stack_pointer(-16),
        u = I(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
        s = w;
      _.proof(c, u, s);
      var n = f().getInt32(c + 4 * 0, !0),
        t = f().getInt32(c + 4 * 1, !0),
        r = f().getInt32(c + 4 * 2, !0);
      if (r) throw l(t);
      return l(n)
    } finally {
      _.__wbindgen_add_to_stack_pointer(16)
    }
  }

  function D(e, n, t, r) {
    let c, u;
    try {
      const j = _.__wbindgen_add_to_stack_pointer(-16),
        N = I(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
        V = w;
      _.pack(j, N, V, i(n), i(t), i(r));
      var s = f().getInt32(j + 4 * 0, !0),
        a = f().getInt32(j + 4 * 1, !0),
        y = f().getInt32(j + 4 * 2, !0),
        q = f().getInt32(j + 4 * 3, !0),
        k = s,
        U = a;
      if (q) throw k = 0, U = 0, l(y);
      return c = k, u = U, p(k, U)
    } finally {
      _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(c, u, 1)
    }
  }

  function b(e, n) {
    try {
      return e.apply(this, n)
    } catch (t) {
      _.__wbindgen_exn_store(i(t))
    }
  }
  async function $(e, n) {
    if (typeof Response == "function" && e instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(e, n)
      } catch (r) {
        if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
        else throw r
      }
      const t = await e.arrayBuffer();
      return await WebAssembly.instantiate(t, n)
    } else {
      const t = await WebAssembly.instantiate(e, n);
      return t instanceof WebAssembly.Instance ? {
        instance: t,
        module: e
      } : t
    }
  }

  function B() {
    const e = {};
    return e.wbg = {}, e.wbg.__wbindgen_error_new = function(n, t) {
      const r = new Error(p(n, t));
      return i(r)
    }, e.wbg.__wbindgen_string_get = function(n, t) {
      const r = o(t),
        c = typeof r == "string" ? r : void 0;
      var u = A(c) ? 0 : I(c, _.__wbindgen_malloc, _.__wbindgen_realloc),
        s = w;
      f().setInt32(n + 4 * 1, s, !0), f().setInt32(n + 4 * 0, u, !0)
    }, e.wbg.__wbindgen_object_drop_ref = function(n) {
      l(n)
    }, e.wbg.__wbindgen_string_new = function(n, t) {
      const r = p(n, t);
      return i(r)
    }, e.wbg.__wbindgen_is_object = function(n) {
      const t = o(n);
      return typeof t == "object" && t !== null
    }, e.wbg.__wbindgen_is_string = function(n) {
      return typeof o(n) == "string"
    }, e.wbg.__wbindgen_is_bigint = function(n) {
      return typeof o(n) == "bigint"
    }, e.wbg.__wbindgen_bigint_from_u64 = function(n) {
      const t = BigInt.asUintN(64, n);
      return i(t)
    }, e.wbg.__wbindgen_jsval_eq = function(n, t) {
      return o(n) === o(t)
    }, e.wbg.__wbindgen_is_undefined = function(n) {
      return o(n) === void 0
    }, e.wbg.__wbindgen_in = function(n, t) {
      return o(n) in o(t)
    }, e.wbg.__wbg_crypto_1d1f22824a6a080c = function(n) {
      const t = o(n).crypto;
      return i(t)
    }, e.wbg.__wbg_process_4a72847cc503995b = function(n) {
      const t = o(n).process;
      return i(t)
    }, e.wbg.__wbg_versions_f686565e586dd935 = function(n) {
      const t = o(n).versions;
      return i(t)
    }, e.wbg.__wbg_node_104a2ff8d6ea03a2 = function(n) {
      const t = o(n).node;
      return i(t)
    }, e.wbg.__wbg_require_cca90b1a94a0255b = function() {
      return b(function() {
        const n = module.require;
        return i(n)
      }, arguments)
    }, e.wbg.__wbindgen_is_function = function(n) {
      return typeof o(n) == "function"
    }, e.wbg.__wbg_msCrypto_eb05e62b530a1508 = function(n) {
      const t = o(n).msCrypto;
      return i(t)
    }, e.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function() {
      return b(function(n, t) {
        o(n).randomFillSync(l(t))
      }, arguments)
    }, e.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function() {
      return b(function(n, t) {
        o(n).getRandomValues(o(t))
      }, arguments)
    }, e.wbg.__wbindgen_jsval_loose_eq = function(n, t) {
      return o(n) == o(t)
    }, e.wbg.__wbindgen_boolean_get = function(n) {
      const t = o(n);
      return typeof t == "boolean" ? t ? 1 : 0 : 2
    }, e.wbg.__wbindgen_number_get = function(n, t) {
      const r = o(t),
        c = typeof r == "number" ? r : void 0;
      f().setFloat64(n + 8 * 1, A(c) ? 0 : c, !0), f().setInt32(n + 4 * 0, !A(c), !0)
    }, e.wbg.__wbindgen_as_number = function(n) {
      return +o(n)
    }, e.wbg.__wbg_String_b9412f8799faab3e = function(n, t) {
      const r = String(o(t)),
        c = I(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
        u = w;
      f().setInt32(n + 4 * 1, u, !0), f().setInt32(n + 4 * 0, c, !0)
    }, e.wbg.__wbindgen_number_new = function(n) {
      return i(n)
    }, e.wbg.__wbindgen_object_clone_ref = function(n) {
      const t = o(n);
      return i(t)
    }, e.wbg.__wbg_getwithrefkey_edc2c8960f0f1191 = function(n, t) {
      const r = o(n)[o(t)];
      return i(r)
    }, e.wbg.__wbg_set_f975102236d3c502 = function(n, t, r) {
      o(n)[l(t)] = l(r)
    }, e.wbg.__wbg_get_5419cf6b954aa11d = function(n, t) {
      const r = o(n)[t >>> 0];
      return i(r)
    }, e.wbg.__wbg_length_f217bbbf7e8e4df4 = function(n) {
      return o(n).length
    }, e.wbg.__wbg_newnoargs_1ede4bf2ebbaaf43 = function(n, t) {
      const r = new Function(p(n, t));
      return i(r)
    }, e.wbg.__wbg_next_13b477da1eaa3897 = function(n) {
      const t = o(n).next;
      return i(t)
    }, e.wbg.__wbg_next_b06e115d1b01e10b = function() {
      return b(function(n) {
        const t = o(n).next();
        return i(t)
      }, arguments)
    }, e.wbg.__wbg_done_983b5ffcaec8c583 = function(n) {
      return o(n).done
    }, e.wbg.__wbg_value_2ab8a198c834c26a = function(n) {
      const t = o(n).value;
      return i(t)
    }, e.wbg.__wbg_iterator_695d699a44d6234c = function() {
      return i(Symbol.iterator)
    }, e.wbg.__wbg_get_ef828680c64da212 = function() {
      return b(function(n, t) {
        const r = Reflect.get(o(n), o(t));
        return i(r)
      }, arguments)
    }, e.wbg.__wbg_call_a9ef466721e824f2 = function() {
      return b(function(n, t) {
        const r = o(n).call(o(t));
        return i(r)
      }, arguments)
    }, e.wbg.__wbg_new_e69b5f66fda8f13c = function() {
      const n = new Object;
      return i(n)
    }, e.wbg.__wbg_self_bf91bf94d9e04084 = function() {
      return b(function() {
        const n = self.self;
        return i(n)
      }, arguments)
    }, e.wbg.__wbg_window_52dd9f07d03fd5f8 = function() {
      return b(function() {
        const n = window.window;
        return i(n)
      }, arguments)
    }, e.wbg.__wbg_globalThis_05c129bf37fcf1be = function() {
      return b(function() {
        const n = globalThis.globalThis;
        return i(n)
      }, arguments)
    }, e.wbg.__wbg_global_3eca19bb09e9c484 = function() {
      return b(function() {
        const n = M.global;
        return i(n)
      }, arguments)
    }, e.wbg.__wbg_instanceof_ArrayBuffer_74945570b4a62ec7 = function(n) {
      let t;
      try {
        t = o(n) instanceof ArrayBuffer
      } catch {
        t = !1
      }
      return t
    }, e.wbg.__wbg_call_3bfa248576352471 = function() {
      return b(function(n, t, r) {
        const c = o(n).call(o(t), o(r));
        return i(c)
      }, arguments)
    }, e.wbg.__wbg_isSafeInteger_b9dff570f01a9100 = function(n) {
      return Number.isSafeInteger(o(n))
    }, e.wbg.__wbg_entries_c02034de337d3ee2 = function(n) {
      const t = Object.entries(o(n));
      return i(t)
    }, e.wbg.__wbg_buffer_ccaed51a635d8a2d = function(n) {
      const t = o(n).buffer;
      return i(t)
    }, e.wbg.__wbg_newwithbyteoffsetandlength_7e3eb787208af730 = function(n, t, r) {
      const c = new Uint8Array(o(n), t >>> 0, r >>> 0);
      return i(c)
    }, e.wbg.__wbg_new_fec2611eb9180f95 = function(n) {
      const t = new Uint8Array(o(n));
      return i(t)
    }, e.wbg.__wbg_set_ec2fcf81bc573fd9 = function(n, t, r) {
      o(n).set(o(t), r >>> 0)
    }, e.wbg.__wbg_length_9254c4bd3b9f23c4 = function(n) {
      return o(n).length
    }, e.wbg.__wbg_instanceof_Uint8Array_df0761410414ef36 = function(n) {
      let t;
      try {
        t = o(n) instanceof Uint8Array
      } catch {
        t = !1
      }
      return t
    }, e.wbg.__wbg_newwithlength_76462a666eca145f = function(n) {
      const t = new Uint8Array(n >>> 0);
      return i(t)
    }, e.wbg.__wbg_subarray_975a06f9dbd16995 = function(n, t, r) {
      const c = o(n).subarray(t >>> 0, r >>> 0);
      return i(c)
    }, e.wbg.__wbg_has_bd717f25f195f23d = function() {
      return b(function(n, t) {
        return Reflect.has(o(n), o(t))
      }, arguments)
    }, e.wbg.__wbindgen_bigint_get_as_i64 = function(n, t) {
      const r = o(t),
        c = typeof r == "bigint" ? r : void 0;
      f().setBigInt64(n + 8 * 1, A(c) ? BigInt(0) : c, !0), f().setInt32(n + 4 * 0, !A(c), !0)
    }, e.wbg.__wbindgen_debug_string = function(n, t) {
      const r = O(o(t)),
        c = I(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
        u = w;
      f().setInt32(n + 4 * 1, u, !0), f().setInt32(n + 4 * 0, c, !0)
    }, e.wbg.__wbindgen_throw = function(n, t) {
      throw new Error(p(n, t))
    }, e.wbg.__wbindgen_memory = function() {
      const n = _.memory;
      return i(n)
    }, e
  }

  function C(e, n) {
    return _ = e.exports, R.__wbindgen_wasm_module = n, d = null, m = null, _
  }
  async function R(e) {
    if (_ !== void 0) return _;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? {
      module_or_path: e
    } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("game_wasm_bg-Cu5SYoMx.wasm", self.location.href).href, self.location.href));
    const n = B();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const {
      instance: t,
      module: r
    } = await $(await e, n);
    return C(t, r)
  }
  let T;
  const L = async () => {
    T === void 0 && (T = R()), await T
  };
  self.onmessage = async e => {
    await L();
    const {
      id: n,
      method: t,
      payload: r
    } = e.data;
    switch (t) {
      case "proof": {
        const c = F(r);
        return self.postMessage({
          id: n,
          ...c
        })
      }
      case "pack": {
        const c = D(r.gameId, r.challenge, r.earnedPoints, r.assetClicks);
        return self.postMessage({
          id: n,
          hash: c
        })
      }
      default: {
        const c = t;
        throw err(`Unknown method: ${c}`)
      }
    }
  }
})();