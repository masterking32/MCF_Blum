import {
  aO as o,
  ad as T,
  j as g,
  bU as p,
  ah as l,
  h as J,
  ai as R,
  aF as f,
  am as m,
  N as b
} from "./BWHpvzE-.js";
const O = ({
  jettonShortname: d
}) => {
  const n = o("$BEB7gIMuVm"),
    c = o("$8Lp66XCxxA"),
    s = o("$icIQ5dJTR0"),
    i = o(() => !1, "$rnJBroycQq"),
    v = T(async () => {
      const e = await l.getMemepadJettonReactions(d);
      return R({
        reactions: (m(e) ? e.data : n.value) || n.value
      })
    }, e => {
      var t;
      n.value = e.reactions, i.value || (c.value = (t = e.reactions) == null ? void 0 : t.user), s.value = void 0
    }, 5e3),
    y = () => v.exec(),
    w = () => {
      v.destroy(), n.value = void 0, c.value = void 0, s.value = void 0
    },
    A = b(async e => {
      await l.setMemepadJettonReaction(d, e), i.value = !1
    }, 600).debouncedFunction,
    I = async e => {
      i.value = !0, c.value = e, await A(e)
    }, S = async (e, t) => {
      const a = await (async () => {
        const u = await l.getMemepadStarsReactionsInvoiceLink(e, t);
        return u.err ? u : new Promise(r => {
          try {
            J().$webApp.openInvoice(u.data.invoiceLink, M => {
              r(M === "paid" ? R(void 0) : f())
            })
          } catch {
            r(f())
          }
        })
      })();
      return m(a) && (s.value = (s.value ?? 0) + t), a
    }, E = g(() => {
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
      destroy: w
    },
    reactions: E,
    updateReaction: I,
    generateAndPayStarsInvoice: S
  }
};
export {
  O as u
};