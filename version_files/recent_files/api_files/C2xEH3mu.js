import {
  aZ as n,
  bf as e,
  cz as v,
  bg as d,
  j as i,
  cT as y,
  K as b,
  am as g,
  ai as f
} from "./aUn4L-is.js";
const w = () => {
  const l = n().tge,
    s = e(() => !1, "$6Qqf8BnP2w"),
    t = e("$VkxvlmafEQ"),
    u = e(() => v(), "$srODd5uWDC"),
    o = e(() => d(async () => g(await f.tgeGetEligibility()), a => t.value = a, 6e4 * 2), "$Bx5ImO3Xde"),
    r = i(() => {
      if (l.isBlocked.value) return {
        status: "restricted"
      };
      if (t.value) return {
        status: "available",
        value: t.value
      }
    }),
    c = i(() => y(r.value, "eligibility state"));
  return (async () => {
    s.value || (s.value = !0, b(l.isBlocked, a => a && o.value.destroy()), await o.value.exec(), u.value.resolve(void 0))
  })(), {
    eligibilityState: r,
    mustEligibilityState: c,
    delayedResolver: i(() => u.value)
  }
};
export {
  w as u
};