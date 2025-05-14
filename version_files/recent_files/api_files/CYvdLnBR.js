import {
  b4 as o,
  a5 as T,
  j as b,
  bS as p,
  a9 as l,
  h as g,
  aa as f,
  az as R,
  af as m,
  H as J
} from "./DkS1dxhG.js";
const P = ({
  jettonShortname: v
}) => {
  const n = o("$BEB7gIMuVm"),
    c = o("$8Lp66XCxxA"),
    s = o("$icIQ5dJTR0"),
    i = o(() => !1, "$rnJBroycQq"),
    d = T(async () => {
      const e = await l.getMemepadJettonReactions(v);
      return f({
        reactions: (m(e) ? e.data : n.value) || n.value
      })
    }, e => {
      var t;
      n.value = e.reactions, i.value || (c.value = (t = e.reactions) == null ? void 0 : t.user), s.value = void 0
    }, 5e3),
    y = () => d.exec(),
    S = () => {
      d.destroy(), n.value = void 0, c.value = void 0, s.value = void 0
    },
    w = J(async e => {
      await l.setMemepadJettonReaction(v, e), i.value = !1
    }, 600).debouncedFunction,
    A = async e => {
      i.value = !0, c.value = e, await w(e)
    }, I = async (e, t) => {
      const a = await (async () => {
        const u = await l.getMemepadStarsReactionsInvoiceLink(e, t);
        return u.err ? u : new Promise(r => {
          try {
            g().$webApp.openInvoice(u.data.invoiceLink, M => {
              r(M === "paid" ? f(void 0) : R())
            })
          } catch {
            r(R())
          }
        })
      })();
      return m(a) && (s.value = (s.value ?? 0) + t), a
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
      init: y,
      destroy: S
    },
    reactions: E,
    updateReaction: A,
    generateAndPayStarsInvoice: I
  }
};
export {
  P as u
};