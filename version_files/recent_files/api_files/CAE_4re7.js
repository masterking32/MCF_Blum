import {
  b3 as o,
  a5 as T,
  j as b,
  bR as p,
  a9 as l,
  h as g,
  aa as R,
  ay as f,
  ae as y,
  H as J
} from "./CeLf80nu.js";
const P = ({
  jettonShortname: v
}) => {
  const n = o("$BEB7gIMuVm"),
    c = o("$8Lp66XCxxA"),
    s = o("$icIQ5dJTR0"),
    i = o(() => !1, "$rnJBroycQq"),
    d = T(async () => {
      const e = await l.getMemepadJettonReactions(v);
      return R({
        reactions: (y(e) ? e.data : n.value) || n.value
      })
    }, e => {
      var t;
      n.value = e.reactions, i.value || (c.value = (t = e.reactions) == null ? void 0 : t.user), s.value = void 0
    }, 5e3),
    m = () => d.exec(),
    w = () => {
      d.destroy(), n.value = void 0, c.value = void 0, s.value = void 0
    },
    A = J(async e => {
      await l.setMemepadJettonReaction(v, e), i.value = !1
    }, 600).debouncedFunction,
    I = async e => {
      i.value = !0, c.value = e, await A(e)
    }, S = async (e, t) => {
      const a = await (async () => {
        const u = await l.getMemepadStarsReactionsInvoiceLink(e, t);
        return u.err ? u : new Promise(r => {
          try {
            g().$webApp.openInvoice(u.data.invoiceLink, M => {
              r(M === "paid" ? R(void 0) : f())
            })
          } catch {
            r(f())
          }
        })
      })();
      return y(a) && (s.value = (s.value ?? 0) + t), a
    }, E = b(() => {
      if (!n.value) return;
      const e = n.value.user,
        t = c.value,
        a = {
          ...n.value
        };
      return e !== t && (a.user = c.value, t && (a[t] = a[t].plus(1)), e && (a[e] = a[e].minus(1))), s.value && (a[p.STAR] = a[p.STAR].plus(s.value)), a
    });
  return {
    _flow: {
      init: m,
      destroy: w
    },
    reactions: E,
    updateReaction: I,
    generateAndPayStarsInvoice: S
  }
};
export {
  P as u
};