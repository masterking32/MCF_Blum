import {
  d as U,
  r as m,
  F as g,
  d9 as S,
  a as _,
  c as v,
  e as x,
  O as F,
  G as z,
  f as I,
  j as y,
  av as k,
  k as b,
  g as R,
  bO as u,
  K as C,
  C as L
} from "./nFxUmw4d.js";
const M = ["accept"],
  A = 1e6,
  N = U({
    __name: "FileInput",
    props: {
      accept: {
        type: Array,
        required: !0
      },
      maxFileSizeMb: {
        type: Number,
        required: !0
      }
    },
    emits: ["selected"],
    setup(n, {
      expose: p,
      emit: d
    }) {
      const o = n,
        i = d,
        t = m(),
        r = g(() => o.accept.map(e => `.${e.toLowerCase()}`).join(",")),
        f = g(() => o.accept.map(e => S(e))),
        a = () => {
          if (!t.value || !t.value.files || t.value.files.length === 0) return;
          const e = t.value.files[0] ?? t.value.files.item(0);
          t.value.value = "", t.value.files = null, e && s(e)
        },
        s = e => {
          if (!f.value.includes(e.type)) {
            F().debug("File type is not supported.", {
              type: e.type
            });
            return
          }
          if (e.size > o.maxFileSizeMb * A) {
            F().debug("File is too big.", {
              size: e.size
            }), z().bottom.success(I("base.file.too_big", {
              maxUploadSize: String(o.maxFileSizeMb)
            }));
            return
          }
          i("selected", e)
        };
      return p({
        triggerFileUpload: () => t.value && t.value.click()
      }), (e, c) => (_(), v("input", {
        ref_key: "fileRef",
        ref: t,
        type: "file",
        class: "file-input",
        accept: x(r),
        onChange: c[0] || (c[0] = K => a())
      }, null, 40, M))
    }
  }),
  O = y(N, [
    ["__scopeId", "data-v-52fbf2a0"]
  ]),
  B = {
    class: "kit-file-uploader"
  },
  h = {
    key: 0,
    class: "upload-zone"
  },
  E = U({
    __name: "FileUploader",
    props: {
      hideUi: {
        type: Boolean,
        default: !1
      },
      accept: {
        type: Array,
        required: !0
      },
      maxFileSizeMb: {
        type: Number,
        default: 10
      }
    },
    emits: ["uploaded", "update:progress"],
    setup(n, {
      expose: p,
      emit: d
    }) {
      const o = d,
        i = m(),
        t = m(),
        r = () => {
          var a;
          return (a = t.value) == null ? void 0 : a.triggerFileUpload()
        },
        f = a => {
          const s = URL.createObjectURL(a);
          i.value = {
            status: u.UPLOADING,
            percent: 0,
            localUrl: s
          }, C.uploadFile(a, l => i.value = {
            status: u.UPLOADING,
            percent: l,
            localUrl: s
          }).then(l => {
            if (l.err) {
              i.value = {
                status: u.ERROR
              };
              return
            }
            i.value = {
              status: u.SUCCESS,
              file: l.data,
              localUrl: s
            }, o("uploaded", l.data)
          }).finally(() => i.value = void 0)
        };
      return k(i, a => o("update:progress", a), {
        deep: !0
      }), p({
        triggerFileUpload: r
      }), (a, s) => {
        const l = L,
          e = O;
        return _(), v("div", B, [n.hideUi ? R("", !0) : (_(), v("div", h, [b(l, {
          label: "upload",
          onClick: s[0] || (s[0] = c => r())
        })])), b(e, {
          ref_key: "fileInputRef",
          ref: t,
          accept: n.accept,
          "max-file-size-mb": n.maxFileSizeMb,
          onSelected: s[1] || (s[1] = c => f(c))
        }, null, 8, ["accept", "max-file-size-mb"])])
      }
    }
  }),
  T = y(E, [
    ["__scopeId", "data-v-75cc0cfe"]
  ]);
export {
  T as K
};