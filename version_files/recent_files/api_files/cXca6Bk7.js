import {
  O as e
} from "./BZXAykfw.js";
var t = {};
const l = (r, n) => (r = Math.abs(r), n === 1 || r % 10 === 1 && r % 100 !== 11 ? 0 : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 12 || r % 100 > 14) ? 1 : 2),
  s = new Set,
  i = () => ({
    missingWarn: !1,
    fallbackWarn: !1,
    silentTranslationWarn: !0,
    pluralRules: {
      ru: l
    },
    fallbackLocale: (() => {
      if (t.ENVIRONMENT !== "dev") return "en"
    })(),
    missing: (r, n) => {
      const a = `${r}.${n}`;
      return s.has(a) || (s.add(a), e().error("Missing translation", a)), `*${n.toUpperCase()}*`
    }
  });
export {
  i as
  default
};