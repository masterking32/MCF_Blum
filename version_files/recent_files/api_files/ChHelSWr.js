import {
  af as E
} from "./BkRdN3CR.js";
const b = e => String.fromCharCode(8320 + e - 1),
  C = ({
    value: e,
    digitsBeforeSubscript: f = 9,
    digitsAfterSubscript: o = 3,
    significantDigits: t = 4,
    minExponent: a = 4,
    symbol: n = "$"
  }) => {
    var g, S;
    const m = typeof e == "number" ? e : (e == null ? void 0 : e.toNumber()) ?? 0;
    if (Math.abs(m) < 1e-18) return {
      prefix: `${n}0`,
      firstDecimal: "",
      exponent: null,
      suffix: ""
    };
    const u = 12,
      $ = Math.max(f, t + u, o + u),
      M = new E(m).toDecimalPlaces($, E.ROUND_DOWN).toFixed($),
      [c, x = ""] = M.split(".");
    if (!x) return {
      prefix: `${n}${c}`,
      firstDecimal: "",
      exponent: null,
      suffix: ""
    };
    const h = x[0],
      i = x.replace(/0+$/, "");
    let l = null;
    if (c === "0") {
      const r = ((g = i.match(/^0+/)) == null ? void 0 : g[0].length) ?? 0;
      l = r > 0 ? r : null
    }
    const D = l !== null && l > a,
      d = D ? l : null;
    let s;
    if (D) s = i.slice(d).slice(0, o);
    else if (c === "0") {
      const r = ((S = i.slice(1).match(/^0+/)) == null ? void 0 : S[0].length) ?? 0,
        N = Math.max(t - (h !== "0" ? 1 : 0), 0),
        P = r + N;
      s = i.slice(1).slice(0, P)
    } else {
      const r = c.length,
        p = Math.max(t - r, 0);
      if (p === 0) return {
        prefix: `${n}${c}`,
        firstDecimal: "",
        exponent: null,
        suffix: ""
      };
      s = i.slice(1).slice(0, p - 1)
    }
    return s = s.replace(/0+$/, ""), {
      prefix: `${n}${c}.`,
      firstDecimal: h,
      exponent: d,
      suffix: s
    }
  },
  w = e => {
    const {
      prefix: f,
      firstDecimal: o,
      exponent: t,
      suffix: a
    } = C(e), n = t !== null && t <= 9 ? b(t) : "";
    return `${f}${o}${n}${a}`
  };
export {
  w as f, C as g
};