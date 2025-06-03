import {
  g as t
} from "./Izfnm6Yj.js";
var e = {};
const l = (r, n) => (r = Math.abs(r), n === 1 || r % 10 === 1 && r % 100 !== 11 ? 0 : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 12 || r % 100 > 14) ? 1 : n < 3 ? n - 1 : 2),
  s = new Set,
  f = () => ({
    missingWarn: !1,
    fallbackWarn: !1,
    silentTranslationWarn: !0,
    pluralRules: {
      ru: l
    },
    fallbackLocale: (() => {
      if (e.ENVIRONMENT !== "dev") return "en"
    })(),
    missing: (r, n) => {
      const a = `${r}.${n}`;
      return s.has(a) || (s.add(a), t().error("Missing translation", a)), `*${n.toUpperCase()}*`
    }
  });
export {
  f as
  default
};