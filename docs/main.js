/*! For license information please see main.js.LICENSE.txt */
(() => {
  var __webpack_modules__ = {
      150: (t, e, n) => {
        "use strict";
        n.d(e, { Z: () => a });
        var i = n(81),
          o = n.n(i),
          s = n(645),
          r = n.n(s)()(o());
        r.push([
          t.id,
          "#pane{\n  padding: 10px;\n}\n\n.factorType {\n  background-color: aliceblue;\n  margin: 0;\n}\n\n.factorGroup {\n  min-height: 280px;\n  background-color: floralwhite;\n  padding: 5px;\n  margin-bottom: 20px;\n}\n\n.factorType,\n.finalScores,\n.score-vector,\n.score-description {\n  padding: 0px;\n  margin-top: 10px;\n}\n\n.score-vector{\n  word-wrap: break-word;\n  word-break: break-all;\n  padding: 10px;\n}\n\n.menu {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\n\n.chart-pane{\n  margin-top: 50px;\n}\n\n/* ************************* */\n\nh2{\n  font-size: 1.5em;\n  margin-top: 5px;\n}\n\nh3{\n  font-size: 1.2em;\n  margin-top: 30px;\n}\n\nh4{\n  font-size: 1.1em;\n  margin-top: 20px;\n}\n\nh5{\n  font-size: 0.9em;\n  margin-top: 10px;\n}\n\nh6{\n  font-size: 0.6em;\n  margin-top: 5px;\n}\n\n.text-0, .text-None {\n  color: #ffffff;\n  background-color: #9cc2e5;\n}\n\n.text-1, .text-Low {\n  color: #ffffff;\n  background-color: #3178bf;\n}\n\n.text-2, .text-Medium  {\n  color: #ffffff;\n  background-color: #fec50d;\n}\n\n.text-3, .text-High {\n  color: #ffffff;\n  background-color: #f09426;\n}\n\n.text-4, .text-Extreme {\n  color: #ffffff;\n  background-color: #d63e34;\n}",
          "",
        ]);
        const a = r;
      },
      645: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  i = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  i &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  i && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, i, o, s) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var r = {};
              if (i)
                for (var a = 0; a < this.length; a++) {
                  var l = this[a][0];
                  null != l && (r[l] = !0);
                }
              for (var c = 0; c < t.length; c++) {
                var h = [].concat(t[c]);
                (i && r[h[0]]) ||
                  (void 0 !== s &&
                    (void 0 === h[5] ||
                      (h[1] = "@layer"
                        .concat(h[5].length > 0 ? " ".concat(h[5]) : "", " {")
                        .concat(h[1], "}")),
                    (h[5] = s)),
                  n &&
                    (h[2]
                      ? ((h[1] = "@media "
                          .concat(h[2], " {")
                          .concat(h[1], "}")),
                        (h[2] = n))
                      : (h[2] = n)),
                  o &&
                    (h[4]
                      ? ((h[1] = "@supports ("
                          .concat(h[4], ") {")
                          .concat(h[1], "}")),
                        (h[4] = o))
                      : (h[4] = "".concat(o))),
                  e.push(h));
              }
            }),
            e
          );
        };
      },
      81: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      379: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, i = 0; i < e.length; i++)
            if (e[i].identifier === t) {
              n = i;
              break;
            }
          return n;
        }
        function i(t, i) {
          for (var s = {}, r = [], a = 0; a < t.length; a++) {
            var l = t[a],
              c = i.base ? l[0] + i.base : l[0],
              h = s[c] || 0,
              d = "".concat(c, " ").concat(h);
            s[c] = h + 1;
            var u = n(d),
              p = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(p);
            else {
              var f = o(p, i);
              (i.byIndex = a),
                e.splice(a, 0, { identifier: d, updater: f, references: 1 });
            }
            r.push(d);
          }
          return r;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var s = i((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var r = 0; r < s.length; r++) {
              var a = n(s[r]);
              e[a].references--;
            }
            for (var l = i(t, o), c = 0; c < s.length; c++) {
              var h = n(s[c]);
              0 === e[h].references && (e[h].updater(), e.splice(h, 1));
            }
            s = l;
          };
        };
      },
      569: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var i = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          i.appendChild(n);
        };
      },
      216: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var i = "";
                n.supports && (i += "@supports (".concat(n.supports, ") {")),
                  n.media && (i += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (i += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (i += n.css),
                  o && (i += "}"),
                  n.media && (i += "}"),
                  n.supports && (i += "}");
                var s = n.sourceMap;
                s &&
                  "undefined" != typeof btoa &&
                  (i +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                      " */"
                    )),
                  e.styleTagTransform(i, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      140: (__unused_webpack_module, exports) => {
        var indexOf = function (t, e) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0; n < t.length; n++) if (t[n] === e) return n;
            return -1;
          },
          Object_keys = function (t) {
            if (Object.keys) return Object.keys(t);
            var e = [];
            for (var n in t) e.push(n);
            return e;
          },
          forEach = function (t, e) {
            if (t.forEach) return t.forEach(e);
            for (var n = 0; n < t.length; n++) e(t[n], n, t);
          },
          defineProp = (function () {
            try {
              return (
                Object.defineProperty({}, "_", {}),
                function (t, e, n) {
                  Object.defineProperty(t, e, {
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                    value: n,
                  });
                }
              );
            } catch (t) {
              return function (t, e, n) {
                t[e] = n;
              };
            }
          })(),
          globals = [
            "Array",
            "Boolean",
            "Date",
            "Error",
            "EvalError",
            "Function",
            "Infinity",
            "JSON",
            "Math",
            "NaN",
            "Number",
            "Object",
            "RangeError",
            "ReferenceError",
            "RegExp",
            "String",
            "SyntaxError",
            "TypeError",
            "URIError",
            "decodeURI",
            "decodeURIComponent",
            "encodeURI",
            "encodeURIComponent",
            "escape",
            "eval",
            "isFinite",
            "isNaN",
            "parseFloat",
            "parseInt",
            "undefined",
            "unescape",
          ];
        function Context() {}
        Context.prototype = {};
        var Script = (exports.Script = function (t) {
          if (!(this instanceof Script)) return new Script(t);
          this.code = t;
        });
        (Script.prototype.runInContext = function (t) {
          if (!(t instanceof Context))
            throw new TypeError("needs a 'context' argument.");
          var e = document.createElement("iframe");
          e.style || (e.style = {}),
            (e.style.display = "none"),
            document.body.appendChild(e);
          var n = e.contentWindow,
            i = n.eval,
            o = n.execScript;
          !i && o && (o.call(n, "null"), (i = n.eval)),
            forEach(Object_keys(t), function (e) {
              n[e] = t[e];
            }),
            forEach(globals, function (e) {
              t[e] && (n[e] = t[e]);
            });
          var s = Object_keys(n),
            r = i.call(n, this.code);
          return (
            forEach(Object_keys(n), function (e) {
              (e in t || -1 === indexOf(s, e)) && (t[e] = n[e]);
            }),
            forEach(globals, function (e) {
              e in t || defineProp(t, e, n[e]);
            }),
            document.body.removeChild(e),
            r
          );
        }),
          (Script.prototype.runInThisContext = function () {
            return eval(this.code);
          }),
          (Script.prototype.runInNewContext = function (t) {
            var e = Script.createContext(t),
              n = this.runInContext(e);
            return (
              t &&
                forEach(Object_keys(e), function (n) {
                  t[n] = e[n];
                }),
              n
            );
          }),
          forEach(Object_keys(Script.prototype), function (t) {
            exports[t] = Script[t] = function (e) {
              var n = Script(e);
              return n[t].apply(n, [].slice.call(arguments, 1));
            };
          }),
          (exports.isContext = function (t) {
            return t instanceof Context;
          }),
          (exports.createScript = function (t) {
            return exports.Script(t);
          }),
          (exports.createContext = Script.createContext =
            function (t) {
              var e = new Context();
              return (
                "object" == typeof t &&
                  forEach(Object_keys(t), function (n) {
                    e[n] = t[n];
                  }),
                e
              );
            });
      },
      997: (t, e, n) => {
        "use strict";
        function i(t, e) {
          const n = Object.create(null),
            i = t.split(",");
          for (let t = 0; t < i.length; t++) n[i[t]] = !0;
          return e ? (t) => !!n[t.toLowerCase()] : (t) => !!n[t];
        }
        n.r(e),
          n.d(e, {
            createI18n: () => Se,
            i18nSymbol: () => we,
            useI18n: () => Ce,
          });
        const o = {},
          s = () => {},
          r = Object.assign,
          a = Object.prototype.hasOwnProperty,
          l = (t, e) => a.call(t, e),
          c = Array.isArray,
          h = (t) => "[object Map]" === m(t),
          d = (t) => "function" == typeof t,
          u = (t) => "string" == typeof t,
          p = (t) => "symbol" == typeof t,
          f = (t) => null !== t && "object" == typeof t,
          g = Object.prototype.toString,
          m = (t) => g.call(t),
          b = (t) =>
            u(t) && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t,
          y = (t) => {
            const e = Object.create(null);
            return (n) => e[n] || (e[n] = t(n));
          },
          v = /-(\w)/g,
          x =
            (y((t) => t.replace(v, (t, e) => (e ? e.toUpperCase() : ""))),
            /\B([A-Z])/g),
          _ =
            (y((t) => t.replace(x, "-$1").toLowerCase()),
            y((t) => t.charAt(0).toUpperCase() + t.slice(1))),
          w = (y((t) => (t ? `on${_(t)}` : "")), (t, e) => !Object.is(t, e));
        const k = (t) => {
            const e = new Set(t);
            return (e.w = 0), (e.n = 0), e;
          },
          S = (t) => (t.w & P) > 0,
          C = (t) => (t.n & P) > 0,
          T = new WeakMap();
        let A,
          M = 0,
          P = 1;
        const D = Symbol(""),
          R = Symbol("");
        class O {
          constructor(t, e = null, n) {
            (this.fn = t),
              (this.scheduler = e),
              (this.active = !0),
              (this.deps = []),
              (this.parent = void 0),
              (function (t, e) {
                e && e.active && e.effects.push(t);
              })(this, n);
          }
          run() {
            if (!this.active) return this.fn();
            let t = A,
              e = L;
            for (; t; ) {
              if (t === this) return;
              t = t.parent;
            }
            try {
              return (
                (this.parent = A),
                (A = this),
                (L = !0),
                (P = 1 << ++M),
                M <= 30
                  ? (({ deps: t }) => {
                      if (t.length)
                        for (let e = 0; e < t.length; e++) t[e].w |= P;
                    })(this)
                  : E(this),
                this.fn()
              );
            } finally {
              M <= 30 &&
                ((t) => {
                  const { deps: e } = t;
                  if (e.length) {
                    let n = 0;
                    for (let i = 0; i < e.length; i++) {
                      const o = e[i];
                      S(o) && !C(o) ? o.delete(t) : (e[n++] = o),
                        (o.w &= ~P),
                        (o.n &= ~P);
                    }
                    e.length = n;
                  }
                })(this),
                (P = 1 << --M),
                (A = this.parent),
                (L = e),
                (this.parent = void 0);
            }
          }
          stop() {
            this.active &&
              (E(this), this.onStop && this.onStop(), (this.active = !1));
          }
        }
        function E(t) {
          const { deps: e } = t;
          if (e.length) {
            for (let n = 0; n < e.length; n++) e[n].delete(t);
            e.length = 0;
          }
        }
        let L = !0;
        const I = [];
        function V() {
          I.push(L), (L = !1);
        }
        function F() {
          const t = I.pop();
          L = void 0 === t || t;
        }
        function N(t, e, n) {
          if (L && A) {
            let e = T.get(t);
            e || T.set(t, (e = new Map()));
            let i = e.get(n);
            i || e.set(n, (i = k())), B(i);
          }
        }
        function B(t, e) {
          let n = !1;
          M <= 30 ? C(t) || ((t.n |= P), (n = !S(t))) : (n = !t.has(A)),
            n && (t.add(A), A.deps.push(t));
        }
        function j(t, e, n, i, o, s) {
          const r = T.get(t);
          if (!r) return;
          let a = [];
          if ("clear" === e) a = [...r.values()];
          else if ("length" === n && c(t))
            r.forEach((t, e) => {
              ("length" === e || e >= i) && a.push(t);
            });
          else
            switch ((void 0 !== n && a.push(r.get(n)), e)) {
              case "add":
                c(t)
                  ? b(n) && a.push(r.get("length"))
                  : (a.push(r.get(D)), h(t) && a.push(r.get(R)));
                break;
              case "delete":
                c(t) || (a.push(r.get(D)), h(t) && a.push(r.get(R)));
                break;
              case "set":
                h(t) && a.push(r.get(D));
            }
          if (1 === a.length) a[0] && z(a[0]);
          else {
            const t = [];
            for (const e of a) e && t.push(...e);
            z(k(t));
          }
        }
        function z(t, e) {
          for (const e of c(t) ? t : [...t])
            (e !== A || e.allowRecurse) &&
              (e.scheduler ? e.scheduler() : e.run());
        }
        const $ = i("__proto__,__v_isRef,__isVue"),
          W = new Set(
            Object.getOwnPropertyNames(Symbol)
              .map((t) => Symbol[t])
              .filter(p)
          ),
          H = Y(),
          U = Y(!0),
          q = G();
        function G() {
          const t = {};
          return (
            ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
              t[e] = function (...t) {
                const n = Mt(this);
                for (let t = 0, e = this.length; t < e; t++) N(n, 0, t + "");
                const i = n[e](...t);
                return -1 === i || !1 === i ? n[e](...t.map(Mt)) : i;
              };
            }),
            ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
              t[e] = function (...t) {
                V();
                const n = Mt(this)[e].apply(this, t);
                return F(), n;
              };
            }),
            t
          );
        }
        function Y(t = !1, e = !1) {
          return function (n, i, o) {
            if ("__v_isReactive" === i) return !t;
            if ("__v_isReadonly" === i) return t;
            if ("__v_isShallow" === i) return e;
            if (
              "__v_raw" === i &&
              o === (t ? (e ? _t : xt) : e ? vt : yt).get(n)
            )
              return n;
            const s = c(n);
            if (!t && s && l(q, i)) return Reflect.get(q, i, o);
            const r = Reflect.get(n, i, o);
            return (p(i) ? W.has(i) : $(i))
              ? r
              : (t || N(n, 0, i),
                e
                  ? r
                  : Ot(r)
                  ? s && b(i)
                    ? r
                    : r.value
                  : f(r)
                  ? t
                    ? kt(r)
                    : wt(r)
                  : r);
          };
        }
        function K(t = !1) {
          return function (e, n, i, o) {
            let s = e[n];
            if (Tt(s) && Ot(s) && !Ot(i)) return !1;
            if (
              !t &&
              !Tt(i) &&
              (At(i) || ((i = Mt(i)), (s = Mt(s))), !c(e) && Ot(s) && !Ot(i))
            )
              return (s.value = i), !0;
            const r = c(e) && b(n) ? Number(n) < e.length : l(e, n),
              a = Reflect.set(e, n, i, o);
            return (
              e === Mt(o) &&
                (r ? w(i, s) && j(e, "set", n, i) : j(e, "add", n, i)),
              a
            );
          };
        }
        const J = {
            get: H,
            set: K(),
            deleteProperty: function (t, e) {
              const n = l(t, e),
                i = (t[e], Reflect.deleteProperty(t, e));
              return i && n && j(t, "delete", e, void 0), i;
            },
            has: function (t, e) {
              const n = Reflect.has(t, e);
              return (p(e) && W.has(e)) || N(t, 0, e), n;
            },
            ownKeys: function (t) {
              return N(t, 0, c(t) ? "length" : D), Reflect.ownKeys(t);
            },
          },
          X = { get: U, set: (t, e) => !0, deleteProperty: (t, e) => !0 },
          Z = (t) => t,
          Q = (t) => Reflect.getPrototypeOf(t);
        function tt(t, e, n = !1, i = !1) {
          const o = Mt((t = t.__v_raw)),
            s = Mt(e);
          e !== s && !n && N(o, 0, e), !n && N(o, 0, s);
          const { has: r } = Q(o),
            a = i ? Z : n ? Rt : Dt;
          return r.call(o, e)
            ? a(t.get(e))
            : r.call(o, s)
            ? a(t.get(s))
            : void (t !== o && t.get(e));
        }
        function et(t, e = !1) {
          const n = this.__v_raw,
            i = Mt(n),
            o = Mt(t);
          return (
            t !== o && !e && N(i, 0, t),
            !e && N(i, 0, o),
            t === o ? n.has(t) : n.has(t) || n.has(o)
          );
        }
        function nt(t, e = !1) {
          return (
            (t = t.__v_raw), !e && N(Mt(t), 0, D), Reflect.get(t, "size", t)
          );
        }
        function it(t) {
          t = Mt(t);
          const e = Mt(this);
          return Q(e).has.call(e, t) || (e.add(t), j(e, "add", t, t)), this;
        }
        function ot(t, e) {
          e = Mt(e);
          const n = Mt(this),
            { has: i, get: o } = Q(n);
          let s = i.call(n, t);
          s || ((t = Mt(t)), (s = i.call(n, t)));
          const r = o.call(n, t);
          return (
            n.set(t, e),
            s ? w(e, r) && j(n, "set", t, e) : j(n, "add", t, e),
            this
          );
        }
        function st(t) {
          const e = Mt(this),
            { has: n, get: i } = Q(e);
          let o = n.call(e, t);
          o || ((t = Mt(t)), (o = n.call(e, t))), i && i.call(e, t);
          const s = e.delete(t);
          return o && j(e, "delete", t, void 0), s;
        }
        function rt() {
          const t = Mt(this),
            e = 0 !== t.size,
            n = t.clear();
          return e && j(t, "clear", void 0, void 0), n;
        }
        function at(t, e) {
          return function (n, i) {
            const o = this,
              s = o.__v_raw,
              r = Mt(s),
              a = e ? Z : t ? Rt : Dt;
            return (
              !t && N(r, 0, D), s.forEach((t, e) => n.call(i, a(t), a(e), o))
            );
          };
        }
        function lt(t, e, n) {
          return function (...i) {
            const o = this.__v_raw,
              s = Mt(o),
              r = h(s),
              a = "entries" === t || (t === Symbol.iterator && r),
              l = "keys" === t && r,
              c = o[t](...i),
              d = n ? Z : e ? Rt : Dt;
            return (
              !e && N(s, 0, l ? R : D),
              {
                next() {
                  const { value: t, done: e } = c.next();
                  return e
                    ? { value: t, done: e }
                    : { value: a ? [d(t[0]), d(t[1])] : d(t), done: e };
                },
                [Symbol.iterator]() {
                  return this;
                },
              }
            );
          };
        }
        function ct(t) {
          return function (...e) {
            return "delete" !== t && this;
          };
        }
        function ht() {
          const t = {
              get(t) {
                return tt(this, t);
              },
              get size() {
                return nt(this);
              },
              has: et,
              add: it,
              set: ot,
              delete: st,
              clear: rt,
              forEach: at(!1, !1),
            },
            e = {
              get(t) {
                return tt(this, t, !1, !0);
              },
              get size() {
                return nt(this);
              },
              has: et,
              add: it,
              set: ot,
              delete: st,
              clear: rt,
              forEach: at(!1, !0),
            },
            n = {
              get(t) {
                return tt(this, t, !0);
              },
              get size() {
                return nt(this, !0);
              },
              has(t) {
                return et.call(this, t, !0);
              },
              add: ct("add"),
              set: ct("set"),
              delete: ct("delete"),
              clear: ct("clear"),
              forEach: at(!0, !1),
            },
            i = {
              get(t) {
                return tt(this, t, !0, !0);
              },
              get size() {
                return nt(this, !0);
              },
              has(t) {
                return et.call(this, t, !0);
              },
              add: ct("add"),
              set: ct("set"),
              delete: ct("delete"),
              clear: ct("clear"),
              forEach: at(!0, !0),
            };
          return (
            ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
              (t[o] = lt(o, !1, !1)),
                (n[o] = lt(o, !0, !1)),
                (e[o] = lt(o, !1, !0)),
                (i[o] = lt(o, !0, !0));
            }),
            [t, n, e, i]
          );
        }
        const [dt, ut, pt, ft] = ht();
        function gt(t, e) {
          const n = e ? (t ? ft : pt) : t ? ut : dt;
          return (e, i, o) =>
            "__v_isReactive" === i
              ? !t
              : "__v_isReadonly" === i
              ? t
              : "__v_raw" === i
              ? e
              : Reflect.get(l(n, i) && i in e ? n : e, i, o);
        }
        const mt = { get: gt(!1, !1) },
          bt = { get: gt(!0, !1) },
          yt = new WeakMap(),
          vt = new WeakMap(),
          xt = new WeakMap(),
          _t = new WeakMap();
        function wt(t) {
          return Tt(t) ? t : St(t, !1, J, mt, yt);
        }
        function kt(t) {
          return St(t, !0, X, bt, xt);
        }
        function St(t, e, n, i, o) {
          if (!f(t)) return t;
          if (t.__v_raw && (!e || !t.__v_isReactive)) return t;
          const s = o.get(t);
          if (s) return s;
          const r =
            (a = t).__v_skip || !Object.isExtensible(a)
              ? 0
              : (function (t) {
                  switch (t) {
                    case "Object":
                    case "Array":
                      return 1;
                    case "Map":
                    case "Set":
                    case "WeakMap":
                    case "WeakSet":
                      return 2;
                    default:
                      return 0;
                  }
                })(((t) => m(t).slice(8, -1))(a));
          var a;
          if (0 === r) return t;
          const l = new Proxy(t, 2 === r ? i : n);
          return o.set(t, l), l;
        }
        function Ct(t) {
          return Tt(t) ? Ct(t.__v_raw) : !(!t || !t.__v_isReactive);
        }
        function Tt(t) {
          return !(!t || !t.__v_isReadonly);
        }
        function At(t) {
          return !(!t || !t.__v_isShallow);
        }
        function Mt(t) {
          const e = t && t.__v_raw;
          return e ? Mt(e) : t;
        }
        function Pt(t) {
          return (
            ((t, e, n) => {
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: n,
              });
            })(t, "__v_skip", !0),
            t
          );
        }
        const Dt = (t) => (f(t) ? wt(t) : t),
          Rt = (t) => (f(t) ? kt(t) : t);
        function Ot(t) {
          return !(!t || !0 !== t.__v_isRef);
        }
        class Et {
          constructor(t, e) {
            (this.__v_isShallow = e),
              (this.dep = void 0),
              (this.__v_isRef = !0),
              (this._rawValue = e ? t : Mt(t)),
              (this._value = e ? t : Dt(t));
          }
          get value() {
            return (
              (t = this),
              L && A && B((t = Mt(t)).dep || (t.dep = k())),
              this._value
            );
            var t;
          }
          set value(t) {
            var e;
            (t = this.__v_isShallow ? t : Mt(t)),
              w(t, this._rawValue) &&
                ((this._rawValue = t),
                (this._value = this.__v_isShallow ? t : Dt(t)),
                (e = Mt((e = this))).dep && z(e.dep));
          }
        }
        const Lt = {
          get: (t, e, n) => {
            return Ot((i = Reflect.get(t, e, n))) ? i.value : i;
            var i;
          },
          set: (t, e, n, i) => {
            const o = t[e];
            return Ot(o) && !Ot(n)
              ? ((o.value = n), !0)
              : Reflect.set(t, e, n, i);
          },
        };
        function It(t, e, n, i) {
          let o;
          try {
            o = i ? t(...i) : t();
          } catch (t) {
            Ft(t, e, n);
          }
          return o;
        }
        function Vt(t, e, n, i) {
          if (d(t)) {
            const s = It(t, e, n, i);
            return (
              s &&
                f((o = s)) &&
                d(o.then) &&
                d(o.catch) &&
                s.catch((t) => {
                  Ft(t, e, n);
                }),
              s
            );
          }
          var o;
          const s = [];
          for (let o = 0; o < t.length; o++) s.push(Vt(t[o], e, n, i));
          return s;
        }
        function Ft(t, e, n, i = !0) {
          if ((e && e.vnode, e)) {
            let i = e.parent;
            const o = e.proxy,
              s = n;
            for (; i; ) {
              const e = i.ec;
              if (e)
                for (let n = 0; n < e.length; n++)
                  if (!1 === e[n](t, o, s)) return;
              i = i.parent;
            }
            const r = e.appContext.config.errorHandler;
            if (r) return void It(r, null, 10, [t, o, s]);
          }
          !(function (t, e, n, i = !0) {
            console.error(t);
          })(t, 0, 0, i);
        }
        Promise.resolve();
        let Nt = !1,
          Bt = !1;
        const jt = [];
        let zt = 0;
        const $t = [];
        let Wt = null,
          Ht = 0;
        const Ut = [];
        let qt = null,
          Gt = 0;
        const Yt = Promise.resolve();
        let Kt = null,
          Jt = null;
        function Xt(t) {
          const e = Kt || Yt;
          return t ? e.then(this ? t.bind(this) : t) : e;
        }
        function Zt() {
          Nt || Bt || ((Bt = !0), (Kt = Yt.then(ne)));
        }
        function Qt(t, e, n, i) {
          c(t)
            ? n.push(...t)
            : (e && e.includes(t, t.allowRecurse ? i + 1 : i)) || n.push(t),
            Zt();
        }
        function te(t, e = null) {
          if ($t.length) {
            for (
              Jt = e, Wt = [...new Set($t)], $t.length = 0, Ht = 0;
              Ht < Wt.length;
              Ht++
            )
              Wt[Ht]();
            (Wt = null), (Ht = 0), (Jt = null), te(t, e);
          }
        }
        const ee = (t) => (null == t.id ? 1 / 0 : t.id);
        function ne(t) {
          (Bt = !1), (Nt = !0), te(t), jt.sort((t, e) => ee(t) - ee(e));
          try {
            for (zt = 0; zt < jt.length; zt++) {
              const t = jt[zt];
              t && !1 !== t.active && It(t, null, 14);
            }
          } finally {
            (zt = 0),
              (jt.length = 0),
              (function (t) {
                if (Ut.length) {
                  const t = [...new Set(Ut)];
                  if (((Ut.length = 0), qt)) return void qt.push(...t);
                  for (
                    qt = t, qt.sort((t, e) => ee(t) - ee(e)), Gt = 0;
                    Gt < qt.length;
                    Gt++
                  )
                    qt[Gt]();
                  (qt = null), (Gt = 0);
                }
              })(),
              (Nt = !1),
              (Kt = null),
              (jt.length || $t.length || Ut.length) && ne(t);
          }
        }
        new Set(), new Map();
        let ie = null;
        const oe = {};
        function se(
          t,
          e,
          { immediate: n, deep: i, flush: r, onTrack: a, onTrigger: l } = o
        ) {
          const h = ye;
          let u,
            p,
            f = !1,
            g = !1;
          if (
            (Ot(t)
              ? ((u = () => t.value), (f = At(t)))
              : Ct(t)
              ? ((u = () => t), (i = !0))
              : c(t)
              ? ((g = !0),
                (f = t.some(Ct)),
                (u = () =>
                  t.map((t) =>
                    Ot(t)
                      ? t.value
                      : Ct(t)
                      ? ae(t)
                      : d(t)
                      ? It(t, h, 2)
                      : void 0
                  )))
              : (u = d(t)
                  ? e
                    ? () => It(t, h, 2)
                    : () => {
                        if (!h || !h.isUnmounted)
                          return p && p(), Vt(t, h, 3, [m]);
                      }
                  : s),
            e && i)
          ) {
            const t = u;
            u = () => ae(t());
          }
          let m = (t) => {
            p = x.onStop = () => {
              It(t, h, 4);
            };
          };
          if (_e)
            return (
              (m = s), e ? n && Vt(e, h, 3, [u(), g ? [] : void 0, m]) : u(), s
            );
          let b = g ? [] : oe;
          const y = () => {
            if (x.active)
              if (e) {
                const t = x.run();
                (i || f || (g ? t.some((t, e) => w(t, b[e])) : w(t, b))) &&
                  (p && p(),
                  Vt(e, h, 3, [t, b === oe ? void 0 : b, m]),
                  (b = t));
              } else x.run();
          };
          let v;
          (y.allowRecurse = !!e),
            (v =
              "sync" === r
                ? y
                : "post" === r
                ? () => ge(y, h && h.suspense)
                : () => {
                    !h || h.isMounted
                      ? (function (t) {
                          Qt(t, Wt, $t, Ht);
                        })(y)
                      : y();
                  });
          const x = new O(u, v);
          return (
            e
              ? n
                ? y()
                : (b = x.run())
              : "post" === r
              ? ge(x.run.bind(x), h && h.suspense)
              : x.run(),
            () => {
              x.stop(),
                h &&
                  h.scope &&
                  ((t, e) => {
                    const n = t.indexOf(e);
                    n > -1 && t.splice(n, 1);
                  })(h.scope.effects, x);
            }
          );
        }
        function re(t, e, n) {
          const i = this.proxy,
            o = u(t)
              ? t.includes(".")
                ? (function (t, e) {
                    const n = e.split(".");
                    return () => {
                      let e = t;
                      for (let t = 0; t < n.length && e; t++) e = e[n[t]];
                      return e;
                    };
                  })(i, t)
                : () => i[t]
              : t.bind(i, i);
          let s;
          d(e) ? (s = e) : ((s = e.handler), (n = e));
          const r = ye;
          ve(this);
          const a = se(o, s.bind(i), n);
          return r ? ve(r) : xe(), a;
        }
        function ae(t, e) {
          if (!f(t) || t.__v_skip) return t;
          if ((e = e || new Set()).has(t)) return t;
          if ((e.add(t), Ot(t))) ae(t.value, e);
          else if (c(t)) for (let n = 0; n < t.length; n++) ae(t[n], e);
          else if ("[object Set]" === m(t) || h(t))
            t.forEach((t) => {
              ae(t, e);
            });
          else if (((t) => "[object Object]" === m(t))(t))
            for (const n in t) ae(t[n], e);
          return t;
        }
        Boolean, Boolean;
        RegExp, RegExp;
        const le =
          (t) =>
          (e, n = ye) =>
            (!_e || "sp" === t) &&
            (function (t, e, n = ye, i = !1) {
              if (n) {
                const o = n[t] || (n[t] = []),
                  s =
                    e.__weh ||
                    (e.__weh = (...i) => {
                      if (n.isUnmounted) return;
                      V(), ve(n);
                      const o = Vt(e, n, t, i);
                      return xe(), F(), o;
                    });
                return i ? o.unshift(s) : o.push(s), s;
              }
            })(t, e, n);
        le("bm"), le("m"), le("bu"), le("u"), le("bum");
        function ce(t, e, n, i = !1) {
          const { mixins: o, extends: s } = e;
          s && ce(t, s, n, !0), o && o.forEach((e) => ce(t, e, n, !0));
          for (const o in e)
            if (i && "expose" === o);
            else {
              const i = he[o] || (n && n[o]);
              t[o] = i ? i(t[o], e[o]) : e[o];
            }
          return t;
        }
        le("um"), le("sp"), le("rtg"), le("rtc");
        const he = {
          data: de,
          props: fe,
          emits: fe,
          methods: fe,
          computed: fe,
          beforeCreate: pe,
          created: pe,
          beforeMount: pe,
          mounted: pe,
          beforeUpdate: pe,
          updated: pe,
          beforeDestroy: pe,
          beforeUnmount: pe,
          destroyed: pe,
          unmounted: pe,
          activated: pe,
          deactivated: pe,
          errorCaptured: pe,
          serverPrefetch: pe,
          components: fe,
          directives: fe,
          watch: function (t, e) {
            if (!t) return e;
            if (!e) return t;
            const n = r(Object.create(null), t);
            for (const i in e) n[i] = pe(t[i], e[i]);
            return n;
          },
          provide: de,
          inject: function (t, e) {
            return fe(ue(t), ue(e));
          },
        };
        function de(t, e) {
          return e
            ? t
              ? function () {
                  return r(
                    d(t) ? t.call(this, this) : t,
                    d(e) ? e.call(this, this) : e
                  );
                }
              : e
            : t;
        }
        function ue(t) {
          if (c(t)) {
            const e = {};
            for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
            return e;
          }
          return t;
        }
        function pe(t, e) {
          return t ? [...new Set([].concat(t, e))] : e;
        }
        function fe(t, e) {
          return t ? r(r(Object.create(null), t), e) : e;
        }
        const ge = function (t, e) {
          e && e.pendingBranch
            ? c(t)
              ? e.effects.push(...t)
              : e.effects.push(t)
            : Qt(t, qt, Ut, Gt);
        };
        Symbol();
        Symbol(void 0), Symbol(void 0), Symbol(void 0);
        Symbol(void 0);
        const me = (t) =>
            t
              ? 4 & t.vnode.shapeFlag
                ? (function (t) {
                    if (t.exposed)
                      return (
                        t.exposeProxy ||
                        (t.exposeProxy = new Proxy(
                          ((e = Pt(t.exposed)), Ct(e) ? e : new Proxy(e, Lt)),
                          {
                            get: (e, n) =>
                              n in e ? e[n] : n in be ? be[n](t) : void 0,
                          }
                        ))
                      );
                    var e;
                  })(t) || t.proxy
                : me(t.parent)
              : null,
          be = r(Object.create(null), {
            $: (t) => t,
            $el: (t) => t.vnode.el,
            $data: (t) => t.data,
            $props: (t) => t.props,
            $attrs: (t) => t.attrs,
            $slots: (t) => t.slots,
            $refs: (t) => t.refs,
            $parent: (t) => me(t.parent),
            $root: (t) => me(t.root),
            $emit: (t) => t.emit,
            $options: (t) =>
              __VUE_OPTIONS_API__
                ? (function (t) {
                    const e = t.type,
                      { mixins: n, extends: i } = e,
                      {
                        mixins: o,
                        optionsCache: s,
                        config: { optionMergeStrategies: r },
                      } = t.appContext,
                      a = s.get(e);
                    let l;
                    return (
                      a
                        ? (l = a)
                        : o.length || n || i
                        ? ((l = {}),
                          o.length && o.forEach((t) => ce(l, t, r, !0)),
                          ce(l, e, r))
                        : (l = e),
                      s.set(e, l),
                      l
                    );
                  })(t)
                : t.type,
            $forceUpdate: (t) => () => {
              return (
                (e = t.update),
                void (
                  (jt.length &&
                    jt.includes(e, Nt && e.allowRecurse ? zt + 1 : zt)) ||
                  e === Jt ||
                  (null == e.id
                    ? jt.push(e)
                    : jt.splice(
                        (function (t) {
                          let e = zt + 1,
                            n = jt.length;
                          for (; e < n; ) {
                            const i = (e + n) >>> 1;
                            ee(jt[i]) < t ? (e = i + 1) : (n = i);
                          }
                          return e;
                        })(e.id),
                        0,
                        e
                      ),
                  Zt())
                )
              );
              var e;
            },
            $nextTick: (t) => Xt.bind(t.proxy),
            $watch: (t) => (__VUE_OPTIONS_API__ ? re.bind(t) : s),
          });
        Object.create(null), new WeakMap(), new WeakMap(), new WeakMap();
        let ye = null;
        const ve = (t) => {
            (ye = t), t.scope.on();
          },
          xe = () => {
            ye && ye.scope.off(), (ye = null);
          };
        let _e = !1;
        Symbol("");
        const we = Symbol("i18n"),
          ke = (t, e, n) => {
            const i = t[0];
            if (~i.indexOf("[")) {
              const [o, s] = i.split("["),
                r = parseInt(s.replace("]", ""));
              if (r > -1) {
                if (!e[o] && e[o].length > 0 && e[o][r] && "" !== e[o][r])
                  throw new Error("Not Found");
                return 1 === t.length
                  ? "string" == typeof e[o][r]
                    ? e[o][r]
                    : ""
                  : ke(t.slice(1), e[o][r], n);
              }
              throw new Error(`Not Found: ${i}`);
            }
            if (e[t[0]] || "" === e[t[0]]) {
              if (1 === t.length) {
                let i = "string" == typeof e[t[0]] ? e[t[0]] : "";
                return (
                  n &&
                    (i = ((t, e) => {
                      const n = /{(\w*)}/g;
                      let i,
                        o = t;
                      for (; null !== (i = n.exec(t)); ) {
                        if (!Object.prototype.hasOwnProperty.call(e, i[1]))
                          throw new Error(`Not Found Params: ${i[1]}`);
                        o = o.replace(i[0], e[i[1]]);
                      }
                      return o;
                    })(i, n)),
                  i
                );
              }
              return ke(t.slice(1), e[t[0]], n);
            }
            throw new Error("Not Found");
          },
          Se = (t) => {
            const e =
                ((i = t.locale || "en"), (o = !1), Ot(i) ? i : new Et(i, o)),
              n = t.messages;
            var i, o;
            return {
              messages: n,
              t: (t, i) => {
                const o = n[e.value] || n.en;
                if ("string" != typeof t)
                  return (
                    console.warn(
                      "Warn(i18n):",
                      "keypath must be a type of string"
                    ),
                    ""
                  );
                try {
                  return ke(t.split("."), o, i);
                } catch (i) {
                  return (
                    console.warn(`Warn(i18n): the keypath '${t}' not found`), ""
                  );
                }
              },
              setLocale: (t) => {
                n[t] ||
                  console.warn(
                    `Warn(i18n): the '${t}' language pack not found, fall back to English language pack`
                  ),
                  (e.value = t);
              },
              getLocale: () => e.value,
              install(t) {
                const e = this;
                t.provide(we, e),
                  (t.config.globalProperties.$t = e.t),
                  (t.config.globalProperties.$i18n = e);
              },
            };
          };
        function Ce() {
          return (function (t, e, n = !1) {
            const i = ye || ie;
            if (i) {
              const o =
                null == i.parent
                  ? i.vnode.appContext && i.vnode.appContext.provides
                  : i.parent.provides;
              if (o && t in o) return o[t];
              if (arguments.length > 1) return n && d(e) ? e.call(i.proxy) : e;
            }
          })(we);
        }
      },
      354: (t, e, n) => {
        const { createI18n: i } = n(997),
          o = n(384),
          s = n(112);
        (o.RTASS = n(809)),
          (s.RTASS = n(199)),
          (o.doc = n(439)),
          (s.doc = n(753));
        const r = i({ locale: "cn", messages: { en: o, cn: s } });
        (e.a = r), (e.M = { en: "English", cn: "中文" });
      },
      199: (t) => {
        "use strict";
        t.exports = JSON.parse(
          '{"title":"红蓝对抗评分系统 (RTASS)","keyword":"Red Team Assessment Scoring System","description":"红蓝对抗评分系统（RTASS，Red Team Assessment Scoring System）是一个开放式框架，用来评估单次网络红蓝对抗或实战演习中的攻防双方能力投入情况，以及涉及业务及所在企业所面临的风险程度。通过RTASS可以对红蓝对抗式网络实战攻防演练中，攻击方、防守方、业务方以及企业风险状况进行量化评分。本框架适用于网络红蓝对抗演练、网络实战攻防演习、红队评估、蓝军评估等通过模拟黑客APT手段对企业开展实网攻击的安全评估场景。","maintainer":"Monyer","license":"Apache","rights":"RTASS由JD.Army创建、拥有和进行管理。JD.Army是专注于挖掘和解决企业安全运行风险隐患的专业型红队。JD.Army保留自行决定定期更新RTASS和本文档的权利。虽然JD.Army拥有RTASS的所有权利和利益，但它许可公众自由使用，遵循相关开源协议。","calculator":"https://rtass.jd.army","github":"https://github.com/JDArmy/RTASS","version":"0.3.2","abilities":{"IRC":{"keyword":"Intelligence Reconnaissance Capability","name":"情报侦察能力","description":"攻击者在信息收集、情报侦察阶段的能力","options":["0 - 不能获得有效的情报信息","1 - 有基本的IT资产与网络信息收集能力","2 - 有较强的资产收集能力，能够找到偏僻脆弱资产；有较强的组织人员侦察能力，能够找到关键社工目标","3 - 能够通过主被动多种手段全面掌握目标组织、运营、协同、人员、资产、安全、网络架构等情报，并制定针对性攻击方案","4 - 能够在目标无感知前提下，掌握目标企业线上线下运营全貌以及靶标细节，准确绘制攻击路径，快速精准找到据点建立方案"]},"WC":{"keyword":"Weaponization Capability","name":"武器化能力","description":"攻击者在武器化、资源开发阶段的能力","options":["0 - 无编程或程序设计能力","1 - 具备简单的脚本EXP编写能力","2 - 能够编写较为复杂的渗透工具","3 - 能够自研C2、自动化渗透平台","4 - 能够设计实现高级复杂的核弹级武器（如Stuxnet、Bvp47、Wannacry等）"]},"VMEC":{"keyword":"Vulnerability Mining and Exploitation Capability","name":"漏洞挖掘利用能力","description":"攻击者的黑白盒漏洞挖掘能力和实战化漏洞利用能力","options":["0 - 不能挖掘出有利用价值的漏洞或不能成功利用漏洞","1 - 能够挖掘应用常规漏洞并成功利用","2 - 能够挖掘应用高复杂漏洞并成功利用","3 - 能够挖掘通用组件或中间件漏洞并成功利用","4 - 能够挖掘操作系统及通用系统组件级漏洞并成功利用"]},"ATDC":{"keyword":"Anti Threat Detection Capability","name":"抗威胁检测能力","description":"攻击者绕过WAF、防火墙、杀软，以及威胁检测设备的能力","options":["0 - 基本没有对抗威胁检测系统的手段或能力","1 - 能够绕过WAF、NGFW等防御手段实现漏洞利用","2 - 能够绕过杀软、HIDPS等防御手段实现C2无告警上线","3 - 在打点及内网横向移动过程中有较低的威胁感知","4 - 防守实力极强情况下，在靶标突破后可实现无感知、长期、稳定目标行动"]},"SEC":{"keyword":"Social Engineering Capability","name":"社会工程能力","description":"攻击者在网络或地面的社工能力以及成功率","options":["0 - 不能实施成功的社工","1 - 对一般人员成功社工且取得权限","2 - 对经过安全意识培训过的非安全从业人员成功社工且取得权限","3 - 对从事安全岗位人员成功社工并取得权限","4 - 能够对最专业的安全工程师成功社工且取得权限"]},"PPC":{"keyword":"Permission Persistence Capability","name":"权限维持能力","description":"攻击者在获得初始访问后，对立足点的权限维持能力","options":["0 - 无法维持据点权限的稳定性与持续性","1 - 能够在据点上实现长期稳定的基本命令执行","2 - 在重启的情况下实现无感知权限维持","3 - 能够无感知提升据点权限执行更多命令","4 - 在经过应急响应后依然实现可权限维持"]},"TCC":{"keyword":"Tunnel Construction Capability","name":"隧道搭建能力","description":"攻击者在获得初始访问后的隧道搭建能力","options":["0 - 无法搭建畅通稳定隧道","1 - 能够搭建简单跳板，实现C2上线和内网漫游","2 - 能够根据环境所需搭建多层级跳板隧道","3 - 能够将跳板流量隐匿到正常网络流量中，实现威胁无感知","4 - 在前者基础上，能够穿透目标多层内网、采用多种不同协议搭建长期、稳定隧道链路"]},"LMC":{"keyword":"Lateral Movement Capability","name":"横向移动能力","description":"攻击者在获得初始访问后，获取更多权限，扩大战果的网络拓展能力","options":["0 - 据点即终点，无继续网络拓展能力","1 - 能够通过信息采集确认据点身份、位置，获得有用情报信息","2 - 前者基础上，能够进行无感知内网刺探，找到横向移动路径或靶标进行移动","3 - 前者基础上，能够获取访问凭证并成功实现凭证利用进行横向移动","4 - 前者基础上，通过水坑、社工、供应链等多种复杂技术手段实现无感知横向移动"]},"GAT":{"keyword":"Goal Achievement Time","name":"目标达成时间","description":"攻击者对靶标进行突破控制的最小达成时间。","options":["0 - 设定时间内未完成对目标系统的突破控制","1 - 设定时间内未完成靶标突破，但对多个核心系统突破控制","2 - 设定时间内完成对部分靶标的突破控制","3 - 1-3周内完成主要核心靶标突破控制","4 - 1-3天内完成主要核心靶标突破控制"]},"GAC":{"keyword":"Goal Achievement Cost","name":"目标达成成本","description":"攻击者为了达成目标所需要付出的武器、人力、漏洞等的工作成本","options":["0 - 严重入不敷出","1 - 很大成本(核弹级0day等)","2 - 较大成本(通用级0day等)","3 - 较低的成本","4 - 几乎没有成本"]},"GAA":{"keyword":"Goal Action Ability","name":"目标行动能力","description":"攻击者在获得对靶标访问权限后，所能够最大程度达成最终目标的能力","options":["0 - 无法在靶标上达成目标行动","1 - 可实现对靶标的部分数据渗漏","2 - 可实现对靶标的部分操作影响","3 - 可实现对靶标的全部数据渗漏","4 - 可在无感知情况下完成全部数据渗漏，或造成长期持续性影响"]},"IEMC":{"keyword":"Information Event Management Capability","name":"日志事件管理能力","description":"防守者对各类日志及事件的管理能力","options":["0 - 日志管理规范落实不到位，存在大量日志缺失","1 - 有分散的日志和事件追查能力","2 - 有集中的安全日志与事件管理系统","3 - 能够对日志事件进行归类汇总，对威胁进行识别、定级和告警","4 - 有全面且系统化日志事件响应与自动化安全运营能力"]},"SUMC":{"keyword":"Software Update Management Capability","name":"软件更新管理能力","description":"防守者对各类软件、系统、组件、依赖的漏洞管理能力。","options":["0 - 没有软件更新管理能力，存在大量长期严重漏洞","1 - 可以对生产服务器的操作系统补丁进行及时安全更新","2 - 前者基础上，可以对开发、运维常用软件及员工办公终端软件进行统一管理和及时安全更新","3 - 前者基础上，可以对系统、容器的服务程序、中间件进行版本管理和及时安全更新","4 - 前者基础上，可以对应用依赖、引用的各项组件进行版本管理和及时安全更新"]},"TIBC":{"keyword":"Threat Identification Blocking Capability","name":"威胁识别阻断能力","description":"企业内外网络及终端对威胁的识别和阻断能力。","options":["0 - 没有威胁识别阻断设施","1 - 有边界流量防护及阻断设施","2 - 前者基础上，有内部流量防护及阻断设施","3 - 前者基础上，有端点防护和阻拦设施","4 - 前者基础上，有安全编排与自动化响应设施"]},"BSMC":{"keyword":"Baseline Security Management Capabilities","name":"基线安全管理能力","description":"防守者对各类系统、应用的基线安全管理能力。","options":["0 - 没有基线安全管理能力","1 - 有服务安全配置及审计日志基线管理","2 - 前者基础上，有访问控制基线管理","3 - 前者基础上，有账号权限及认证授权基线管理","4 - 前者基础上，有针对服务、网络、供应链的安全测试评估流程"]},"ASMC":{"keyword":"Account Security Management Capabilities","name":"账号安全管理能力","description":"防守者对各类账号的统一管理、动态威胁识别能力。","options":["0 - 没有身份统一管理能力","1 - 统一的账号管理与认证","2 - 更安全的认证技术（去密码或MFA等)","3 - 基于可信设备的统一身份管理","4 - 动态自适应及持续认证"]},"PSMC":{"keyword":"Privilege Security Management Capability","name":"权限安全管理能力","description":"防守者对各类账号的统一权限收口及动态管控能力。","options":["0 - 没有权限统一管理能力","1 - 统一的功能粒度权限管理（授权、鉴权等）","2 - 权限最小化的持续评估和在线治理","3 - 统一的数据粒度权限管理","4 - 权限防滥用的持续评估与动态管控"]},"NACC":{"keyword":"Network Access Control Capability","name":"网络访问控制能力","description":"企业内外网络及终端互相间访问控制及颗粒度。","options":["0 - 网络没有进行任何访问控制","1 - 办公网与生产网有网络隔离，通过堡垒机访问","2 - 前者基础上，外部客户服务与内部员工服务有网络隔离","3 - 前者基础上，不同的应用服务之间有网络隔离","4 - 前者基础上，有更细粒度的微隔离能力"]},"ETTA":{"keyword":"External Threat Traffic Awareness","name":"外部威胁流量感知","description":"企业在遭受外部网络攻击时的威胁流量感知能力。","options":["0 - 几乎无任何感知","1 - 有少量感知","2 - 有中量感知","3 - 有大量感知","4 - 几乎全部感知"]},"EHAA":{"keyword":"External Harpoon Attack Awareness","name":"外部鱼叉攻击感知","description":"企业在遭受外部鱼叉攻击时的威胁感知及处置能力。","options":["0 - 无任何感知","1 - 感知到攻击事件并能够捕获攻击样本","2 - 前者基础上，能够溯源出所有被钓人员并告警","3 - 前者基础上，能够感知到钓鱼中招员工，提取终端样本，还原攻击手法","4 - 前者基础上，快速感知到钓鱼木马的落地、执行与上线动作，并能及时阻断"]},"PPAA":{"keyword":"Proximity Penetration Attack Awareness","name":"近源渗透攻击感知","description":"企业在遭受近源临场攻击、物理渗透时的威胁感知及处置能力。","options":["0 - 几乎无任何感知","1 - 在被成功攻击后，通过溯源确定近源渗透攻击路径。","2 - 通过技术监控与行政手段，成功发现近源渗透痕迹，包括但不限于收集到U盘、捕获到HID攻击、wifi爆破等行为","3 - 前者基础上，能详细分析出攻击者所用攻击手段、攻击的过程，包括但不限于针对wifi的攻击手段分析、投放木马的分析","4 - 前者基础上，具备独立近源感知能力来快速发现近源攻击行为并及时阻断。"]},"ITTA":{"keyword":"Intranet Threat Traffic Awareness","name":"内网威胁流量感知","description":"企业在遭受从内部发起的网络攻击时的威胁流量感知能力。","options":["0 - 几乎无任何感知","1 - 可感知到无差别全内网扫描行为，识别出异常点并迅速定位扫描来源IP","2 - 可基于流量特征捕获到小范围如C段的内网扫描，还原目标及目的。","3 - 前者基础上，感知部分凭证利用与横向移动行为，或数据渗漏行为","4 - 几乎感知全部攻击过程，及攻击者使用的加密C2信道"]},"EMA":{"keyword":"Endpoint Malware Awareness","name":"端点恶意软件感知","description":"企业个人办公机、服务器及其他终端设备在遭受恶意软件攻击时的威胁感知能力。","options":["0 - 几乎无任何感知","1 - 有畅通的员工安全问题反馈途径，快速感知到终端攻击","2 - 能够通过终端检测响应、威胁流量分析感知到终端攻击","3 - 有能力捕获到攻击样本，提取有效网络或主机IOC并实施监控、阻断能力部署","4 - 有完善的自动化沙盒分析、威胁识别情报及策略、安全编排与威胁自动化处置机制"]},"EABA":{"keyword":"Endpoint Abnormal Behavior Awareness","name":"端点异常行为感知","description":"企业个人办公机、服务器及其他终端设备对危险操作以及异常行为的威胁感知能力。","options":["0 - 几乎无任何感知","1 - 能够感知到针对本机的大规模网络扫描行为并告警","2 - 能够感知到针对本机的网络密码爆破行为并告警","3 - 前者基础上，能够感知终端上对特权账号、敏感文件、进程的的异常操作行为","4 - 前者基础上，能够感知终端之间的异常远程访问行为"]},"TDR":{"keyword":"Threat Detection Rate","name":"威胁检出率","description":"防守者在系统检测威胁后，通过人工或其他手段实际鉴别出的高危威胁覆盖率。","options":["0 - 无任何威胁检出（12小时内）","1 - 检出率：0 < N <= 25%","2 - 检出率：25% < N <= 50%","3 - 检出率：50% < N <= 80%","4 - 检出率：80% < N <= 100%"]},"TITR":{"keyword":"Threat Identification Timeliness Rate","name":"威胁鉴别及时率","description":"防守者在系统检出威胁后，通过人工或其他手段实际鉴别出的高危威胁及时率。","options":["0 - 未及时鉴别威胁（12小时内）","1 - 及时率：0 < N <= 25%","2 - 及时率：25% < N <= 50%","3 - 及时率：50% < N <= 80%","4 - 及时率：80% < N <= 100%"]},"THC":{"keyword":"Threat Handling Capability","name":"威胁处置能力","description":"防守者在检测到威胁后的威胁处置覆盖率。","options":["0 - 未进行任何处置（12小时内）","1 - 处置率：0 < N <= 25%","2 - 处置率：25% < N <= 50%","3 - 处置率：50% < N <= 80%","4 - 处置率：80% < N <= 100%"]},"TDTR":{"keyword":"Threat Disposal Timely Rate","name":"威胁处置及时率","description":"防守者在检测到威胁后的威胁处置及时率。","options":["0 - 未进行及时处置（12小时内）","1 - 及时率：0 < N <= 25%","2 - 及时率：25% < N <= 50%","3 - 及时率：50% < N <= 80%","4 - 及时率：80% < N <= 100%"]},"TAC":{"keyword":"Threat Analysis Capability","name":"威胁分析能力","description":"防守者对威胁的识别、分析、逆向等能力","options":["0 - 没有威胁分析能力","1 - 能够准确识别威胁，提取有效IOC","2 - 有自动化威胁分析与情报共享机制","3 - 能够进行复杂的威胁分析，还原攻击手法及目标","4 - 有自动化威胁分析技术，以及专业化的逆向分析能力，可形成完整分析报告"]},"IPTC":{"keyword":"Intrusion Path Traceability Capability","name":"入侵路径溯源能力","description":"防守者对入侵者的入侵路径的溯源能力","options":["0 - 没有入侵路径溯源能力","1 - 攻击路径还原度 0 - 25%","2 - 攻击路径还原度 25% - 50%","3 - 攻击路径还原度 50% - 80%","4 - 攻击路径还原度 80% - 100%"]},"ATCC":{"keyword":"Attacker Traceability and Countermeasure Capability","name":"攻击者溯源反制能力","description":"防守者对攻击者的溯源反制能力","options":["0 - 几乎溯源不到任何有用的信息","1 - 攻击者的C2服务器IP或跳板IP被溯源","2 - 攻击者常用虚拟身份或境内真实IP被溯源","3 - 攻击者的攻击资产或计算机被反向控制","4 - 攻击者真实身份信息被溯源"]},"DEC":{"keyword":"Deception and Entrapment Capabilities","name":"欺骗诱捕能力","description":"企业蜜罐蜜网建设，以及对攻击者的欺骗诱捕能力","options":["0 - 无欺骗诱捕能力","1 - 在网络中搭建了高仿真蜜罐","2 - 在网络中搭建了高仿真蜜网，可以将攻击者引入到蜜网中","3 - 动态蜜网能力，可以直接从生产环境将攻击者所有流量引入蜜网","4 - 有完善的密令喷洒、蜜标与蜜应用定制、蜜场管理能力，可实现主动式吸引、动态自适应及反制诱捕能力"]}},"factors":{"OL":{"keyword":"Offensive Level","name":"进攻水平","description":"攻击者在评估路径中使用的最高技术水平。","options":["0 - 相当于入门级黑客","1 - 相当于普通水平黑客或工具、脚本黑客","2 - 等同精通渗透技术的黑客","3 - 需要较为专业的团队配合","4 - 相当于国家级APT黑客团队"],"vectors":{"IRC":{"algorithm":" IRC * 1 ","description":""},"WC":{"algorithm":" WC * 1 ","description":""},"VMEC":{"algorithm":" VMEC * 1 ","description":""},"ATDC":{"algorithm":" ATDC * 1 ","description":""},"SEC":{"algorithm":" SEC * 1 ","description":""},"PPC":{"algorithm":" PPC * 1 ","description":""},"TCC":{"algorithm":" TCC * 1 ","description":""},"LMC":{"algorithm":" LMC * 1 ","description":""}}},"OD":{"keyword":"Offensive Difficulty","name":"进攻难度","description":"攻击者在整个评估路径中搞定难题的最高难度。","options":["0 - 对于专业黑客来说，几乎没有难度","1 - 对于专业黑客来说，有点难度","2 - 对于专业黑客来说，有较大难度","3 - 对于专业黑客来说，很难搞定","4 - 对于专业黑客来说，几乎不能搞定"]},"TR":{"keyword":"Target Reach","name":"目标达成","description":"攻击者是否达成预期目标。","options":["0 - 基本没达成","1 - 少量达成","2 - 中量达成","3 - 大量达成","4 - 完全达成"],"vectors":{"GAT":{"algorithm":" GAT * 1 ","description":""},"GAC":{"algorithm":" GAC * 1 ","description":""},"GAA":{"algorithm":" GAA * 1 ","description":""}}},"AL":{"keyword":"Anti-traceability Level","name":"对抗溯源能力","description":"攻击者的对抗溯源能力如何。","options":["0 - 攻击者真实身份信息被溯源，或者攻击资产或计算机被反向控制","1 - 攻击者虚拟身份特征或境内真实IP被溯源","2 - 攻击者的持续性攻击行为被指纹标定，或大量攻击指标（IOA）被（蜜罐等）记录标定","3 - 攻击者的固定C2服务器IP或固定隧道回连IP被溯源","4 - 几乎溯源不到任何有用的信息"]},"PL":{"keyword":"Prevention Level","name":"防护水平","description":"防守者对关键渗透路径的拦截能力。","options":["0 - 几乎没有拦截","1 - 轻微的拦截","2 - 较强的拦截","3 - 非常强的拦截","4 - 几乎难以突破"],"vectors":{"IEMC":{"algorithm":" IEMC * 1 ","description":""},"SUMC":{"algorithm":" SUMC * 1 ","description":""},"TIBC":{"algorithm":" TIBC * 1 ","description":""},"BSMC":{"algorithm":" BSMC * 1 ","description":""},"ASMC":{"algorithm":" ASMC * 1 ","description":""},"PSMC":{"algorithm":" PSMC * 1 ","description":""},"NACC":{"algorithm":" NACC * 1 ","description":""}}},"DL":{"keyword":"Detection Level","name":"监测水平","description":"防守者对关键渗透路径的网络威胁发现能力。","options":["0 - 几乎监测不到威胁","1 - 监测到非重要资产的零星攻击威胁","2 - 监测到少量关键路径威胁","3 - 监测到大量关键路径威胁","4 - 几乎监测到全部威胁"],"vectors":{"ETTA":{"algorithm":" ETTA * 1 ","description":""},"EHAA":{"algorithm":" EHAA * 1 ","description":""},"PPAA":{"algorithm":" PPAA * 1 ","description":""},"ITTA":{"algorithm":" ITTA * 1 ","description":""},"EMA":{"algorithm":" EMA * 1 ","description":""},"EABA":{"algorithm":" EABA * 1 ","description":""},"TDR":{"algorithm":" TDR * 1 ","description":""},"TITR":{"algorithm":" TITR * 1 ","description":""}}},"RL":{"keyword":"Response Level","name":"响应水平","description":"防守者对沦陷系统的恢复能力、修复能力和应急响应能力。","options":["0 - 几乎难以推进（3天以上）","1 - 响应较为缓慢（12小时以上）","2 - 响应较为及时（12小时内）","3 - 响应接近实时（2小时内）","4 - 实时响应（30分钟内）"],"vectors":{"THC":{"algorithm":" THC * 1 ","description":""},"TDTR":{"algorithm":" TDTR * 1 ","description":""},"TAC":{"algorithm":" TAC * 1 ","description":""}}},"TL":{"keyword":"Traceability Level","name":"溯源水平","description":"防守者是否能够对攻击者进行有效溯源。","options":["0 - 几乎溯源不到任何有用的信息","1 - 攻击者的固定C2服务器IP或固定隧道回连IP被溯源","2 - 攻击者的持续性攻击行为被指纹标定，或大量攻击指标（IOA）被（蜜罐等）记录标定","3 - 攻击者虚拟身份特征或境内真实IP被溯源","4 - 攻击者真实身份信息被溯源，或者攻击资产或计算机被反向控制"],"vectors":{"IPTC":{"algorithm":" IPTC * 1 ","description":""},"ATCC":{"algorithm":" ATCC * 1 ","description":""},"DEC":{"algorithm":" DEC * 1 ","description":""}}},"VD":{"keyword":"Vulnerability Discoverability","name":"漏洞可发现性","description":"渗透路径中的关键漏洞的可发现性。","options":["0 - 几乎难以发现","1 - 对于专业黑客来说，发现比较困难","2 - 对于专业黑客来说，发现难度中等","3 - 对于专业黑客来说，发现比较简单","4 - 使用通用自动化工具即可发现"]},"VE":{"keyword":"Vulnerability Exploitability","name":"漏洞可利用性","description":"渗透路径中的关键漏洞的可利用性。","options":["0 - 几乎难以利用","1 - 对于专业黑客来说，利用比较困难","2 - 对于专业黑客来说，利用难度中等","3 - 对于专业黑客来说，利用比较简单","4 - 使用通用自动化工具即可利用"]},"VL":{"keyword":"Vulnerability Lethality","name":"漏洞杀伤力","description":"渗透路径中的关键漏洞的最大杀伤力。","options":["0 - 几乎没有危害","1 - 较低的杀伤力，影响个别非核心资产","2 - 中等规模的杀伤力，影响一部分非核心资产","3 - 大范围的杀伤力，影响个别核心资产","4 - 极其广泛的杀伤力，影响一部分核心资产"]},"VDW":{"keyword":"Vulnerability Disclosure Window","name":"漏洞暴露窗口","description":"渗透路径中的关键漏洞的最大暴露时间窗口。","options":["0 - 几乎没有对外披露","1 - 黑客圈小范围的非公开传播披露","2 - 公开披露小于3天","3 - 公开披露大于3天","4 - 公开披露大于1周"]},"LC":{"keyword":"Loss of Confidentiality","name":"失去保密性","description":"可以泄露多少数据以及它的敏感度如何。","options":["0 - 不能造成数据泄露","1 - 可泄露少量的非敏感数据","2 - 可泄露大量的非敏感数据","3 - 可泄露少量的敏感数据","4 - 可泄露大量的敏感数据"]},"LI":{"keyword":"Loss of Integrity","name":"失去完整性","description":"有多少数据可能被损坏，损坏程度如何。","options":["0 - 不能造成数据损坏","1 - 可损坏少量非核心数据","2 - 可损坏大量非核心数据","3 - 可损坏少量的核心数据","4 - 可损坏大量核心数据"]},"LA":{"keyword":"Loss of Availability","name":"失去可用性","description":"可能会丢失多少服务，它有多重要。","options":["0 - 不能造成业务中断","1 - 可导致企业少量的非核心业务中断","2 - 可导致企业大量的非核心业务中断","3 - 可导致企业少量的核心业务中断","4 - 可导致企业大量的核心业务中断"]},"FD":{"keyword":"Financial Damage","name":"经济损失","description":"可对企业经济造成的最大影响。","options":["0 - 低于修复漏洞的成本","1 - 不会对企业年利润有明显影响","2 - 可以影响一定的企业年利润","3 - 对企业年度利润有显著影响","4 - 对企业年利润影响重大"]},"RD":{"keyword":"Reputation Damage","name":"商誉损失","description":"是否会导致企业声誉受损从而损害业务。","options":["0 - 不能造成商誉损失","1 - 可造成轻微的商誉损害","2 - 可造成严重的商誉损害","3 - 可导致大客户或大量客户流失","4 - 可造成品牌重大损害"]},"CI":{"keyword":"Compliance Impact","name":"合规影响","description":"出现的问题或攻击者进行恶意行动会带来多少违规风险。","options":["0 - 不能造成违规风险","1 - 能造成轻微的违规风险","2 - 能造成较为明显的违规风险","3 - 能造成非常高调的违规风险","4 - 严重违规或造成违法"]},"DLC":{"keyword":"Development Life Circle","name":"开发生命周期","description":"是否发现在软件开发生命周期中存在安全问题。","options":["0 - 几乎没有考虑安全问题","1 - 有大量的安全流程问题","2 - 有中量的安全流程问题","3 - 有少量的安全流程问题","4 - 基本没有安全流程问题"]},"OLC":{"keyword":"Operation Life Circle","name":"运维生命周期","description":"是否发现在运维生命周期中存在安全问题。","options":["0 - 几乎没有考虑安全问题","1 - 有大量的安全流程问题","2 - 有中量的安全流程问题","3 - 有少量的安全流程问题","4 - 基本没有安全流程问题"]},"ESA":{"keyword":"Employment Security Awareness","name":"员工安全意识","description":"在评估过程中大部分员工是否有安全意识问题。","options":["0 - 几乎全员没有安全意识","1 - 大部分关键岗位员工安全意识较弱","2 - 少部分关键岗位员工安全意识较弱","3 - 大部分关键岗位员工安全意识较高","4 - 全部员工都有极高的安全意识"]}},"factorCategories":{"CF":{"keyword":"Confrontation Factors","name":"攻防因素","description":"主要从进攻以及防守角度上去衡量各自的强度，对渗透路径中的关键漏洞的杀伤力进行评价，最终结合业务因素形成“进攻能量”和“防守能量”分值。","processScores":["OS","DS","VR"]},"BF":{"keyword":"Business Factors","name":"业务因素","description":"主要是从可对企业造成的影响，业务安全能力水平，以及CIA信息安全三要素角度进行评价，最终结合攻防因素形成“业务风险”和“企业风险”分值。","processScores":["TI","EI","BS"]}},"processScores":{"OS":{"keyword":"Offensive Strength","name":"进攻实力","description":"指攻击方在单场次红蓝对抗演练中，在关键渗透路径上使用攻击技术的最高水平。","vectors":{"OL":{"algorithm":" OL * 1 * 2.5 ","description":""},"OD":{"algorithm":" OD * 1 * 2.5 ","description":""},"TR":{"algorithm":" TR * 1 * 2.5 ","description":""},"AL":{"algorithm":" AL * 1 * 2.5 ","description":""}}},"DS":{"keyword":"Defensive Strength","name":"防守实力","description":"指防守方在单场次红蓝对抗演练中，在关键渗透路径上使用防守技术的最低水平。","vectors":{"PL":{"algorithm":" PL * 1 * 2.5 ","description":""},"DL":{"algorithm":" DL * 1 * 2.5 ","description":""},"RL":{"algorithm":" RL * 1 * 2.5 ","description":""},"TL":{"algorithm":" TL * 1 * 2.5 ","description":""}}},"VR":{"keyword":"Vulnerability Risk","name":"漏洞风险","description":"指在单场次红蓝对抗演练中，在演练的关键渗透路径上对最关键漏洞的风险性评价。","vectors":{"VD":{"algorithm":" VD * 1 * 2.5 ","description":""},"VE":{"algorithm":" VE * 1 * 2.5 ","description":""},"VL":{"algorithm":" VL * 1 * 2.5 ","description":""},"VDW":{"algorithm":" VDW * 1 * 2.5 ","description":""}}},"TI":{"keyword":"Technical Impact","name":"技术影响","description":"指攻击方所拿下的权限或数据有可能造成的保密性、完整性和可用性最大影响。","vectors":{"LC":{"algorithm":" LC * 1 * 2.5 ","description":""},"LI":{"algorithm":" LI * 1 * 2.5 ","description":""},"LA":{"algorithm":" LA * 1 * 2.5 ","description":""}}},"EI":{"keyword":"Enterprise Impact","name":"企业影响","description":"指攻击方所拿下的权限或数据有可能造成对企业商誉、经济以及合规上的最大影响。","vectors":{"FD":{"algorithm":" FD * 1 * 2.5 ","description":""},"RD":{"algorithm":" RD * 1 * 2.5 ","description":""},"CI":{"algorithm":" CI * 1 * 2.5 ","description":""}}},"BS":{"keyword":"Business Strength","name":"业务实力","description":"指在攻击过程中，业务人员或系统及运营所体现的最低专业性。","vectors":{"DLC":{"algorithm":" DLC * 1 * 2.5 ","description":""},"OLC":{"algorithm":" OLC * 1 * 2.5 ","description":""},"ESA":{"algorithm":" ESA * 1 * 2.5 ","description":""}}}},"finalScores":{"OE":{"keyword":"Offensive Energy","name":"进攻能量分值","description":"是攻击方在单次演练中做的有效输出，可代表攻击方之于本次演练的水平。","vectors":{"OS":{"algorithm":" OS * 1 ","description":"进攻实力代表攻击者在本次红蓝对抗中的攻击输出的最高水平。但还需要其他因子分值来校正：如果使用了很高级的技术，费了很大力气，但是没有取得功效，那么相当于在本次演练中做了无用功，就意味着进攻能量很低。"},"DS":{"algorithm":" DS * 1 ","description":"引入“防守实力”因素是为了校正“进攻实力”在能力上的有效展现。一般来讲，防守的实力越强，在达成同等目标的前提下，说明攻击的实力越强；反之，如果防守者的实力越弱，那么为了达成目标，攻击者通常可以有更少的投入，进攻能量则没那么大。"},"EI":{"algorithm":" EI * 1 ","description":"“企业影响”是用于衡量攻击者“做功”上的有效性。在单次演练中暴露的企业风险越多，说明攻击者的能量越强；反制，暴露的企业风险越少，说明攻击者在演练中的能量越小。"}}},"DE":{"keyword":"Defensive Energy","name":"防守能量分值","description":"是防守方在单次演练中的有效输出，可代表防守方之于本次演练的水平。","vectors":{"DS":{"algorithm":" DS * 1 ","description":"防守实力一般是防守者在本次红蓝对抗中的防守能力输出的较低水平。但不能简单认为“防守实力”就是防守的能量体现。因为不管防守实力再强，靶标最终被攻击者拿下，还是说明防守能力较低。"},"VR":{"algorithm":" ( 10 - VR ) * 1 ","description":"漏洞风险的引入是为了校正“防守实力”在能力上的有效展现，与防守能量呈负相关。漏洞风险越高，防守能量越低。即便防守实力很强，但在进攻关键路径上暴露了严重的漏洞风险，那么说明防守的实力并没有落在实处，应该予以减分。"},"EI":{"algorithm":" ( 10 - EI ) * 1 ","description":"企业影响与防守能量呈负相关，企业影响越大，防守能量越低。即便防守实力很强，漏洞面也很小，但是依然能给企业带来重大的影响，说明防守产生的有效能量是不够的，要予以减分。"}}},"BR":{"keyword":"Business Risk","name":"业务风险分值","description":"指业务在安全上暴露的风险程度，可代表参演业务方在本次演练中的安全水平。","vectors":{"TI":{"algorithm":" TI * 1 ","description":"技术影响主要从安全三要素：保密性、完整性和可用性衡量对业务造成的影响。业务的技术影响越大，说明业务的风险性越高。"},"EI":{"algorithm":" EI * 1 ","description":"企业影响与业务风险息息相关，如果能给企业带来较大的影响，不管是经济损失、商誉损失还是合规影响，那么都会较大程度上影响企业的发展，进而影响业务的发展。"},"BS":{"algorithm":" ( 10 - BS ) * 1 ","description":"业务实力主要体现在SDL或者是DevSecOps的落实上，如果出现了问题，那么将会在安全的推进以及风险的消除上带来较大的阻碍，进而会给业务造成重大风险。因此业务实力与业务风险分值呈现负相关，实力越低风险越大。"}}},"ER":{"keyword":"Enterprise Risk","name":"企业风险分值","description":"指企业在安全上暴露的风险程度，可代表企业整体上在本次演练中表现出的安全水平。","vectors":{"DS":{"algorithm":" ( 10 - DS ) * 1 ","description":"防守实力与企业风险呈现负相关。一个企业如果在安全建设上的投入不大，一般会直接作用在防护能力、检测能力和响应能力上，即防守实力上。反之，如果企业防守实力弱，那么说明企业在安全建设或者防守团队建设上面临问题，将使企业面临更多的风险。"},"VR":{"algorithm":" VR * 1 ","description":"如果渗透路径上的关键漏洞是非常容易被发现、被利用，且杀伤力极大的，一般说明防守在日常的安全运营、SDL或DevSecOps的安全流程落地上出现了比较大的问题，企业的风险性会增加。"},"EI":{"algorithm":" EI * 1 ","description":"而“企业影响”更是关系到企业的正常运营、营收甚至是生死存亡，因此与企业风险相关。"}}}},"levels":[{"index":0,"name":"无","keyword":"None"},{"index":1,"name":"低","keyword":"Low"},{"index":2,"name":"低","keyword":"Low"},{"index":3,"name":"低","keyword":"Low"},{"index":4,"name":"中","keyword":"Medium"},{"index":5,"name":"中","keyword":"Medium"},{"index":6,"name":"中","keyword":"Medium"},{"index":7,"name":"高","keyword":"High"},{"index":8,"name":"高","keyword":"High"},{"index":9,"name":"极","keyword":"Extreme"},{"index":10,"name":"极","keyword":"Extreme"}],"charts":{"data":{"OS":{"name":"攻击者能力","plusmode":true,"factors":{"OL":1,"OD":1,"TR":1,"AL":1}},"DS":{"name":"安全运营能力","plusmode":true,"factors":{"PL":1,"DL":1,"RL":1,"TL":1,"ESA":1,"DLC":1,"OLC":1,"VD":-1,"VDW":-1,"CI":-1}}},"references":{"current":{"name":"当前评分","backgroundColor":"rgba(255, 99, 132, 0.5)","borderColor":"rgba(255, 99, 132, 0.5)"},"standardLevel":{"name":"业内平均水平","backgroundColor":"rgba(132, 255, 99, 0.5)","borderColor":"rgba(132, 255, 99, 0.5)","vectorStr":"RTASS:0.3.2/OL:2/OD:2/TR:2/AL:2/PL:2/DL:2/RL:2/TL:2/VD:2/VE:3/VL:3/VDW:2/LC:3/LI:3/LA:3/FD:2/RD:2/CI:2/DLC:3/OLC:2/ESA:2/IRC:2/WC:2/VMEC:2/ATDC:2/SEC:2/PPC:2/TCC:2/LMC:2/GAT:2/GAC:2/GAA:2/IEMC:2/SUMC:2/TIBC:2/BSMC:2/ASMC:2/PSMC:2/NACC:2/ETTA:2/EHAA:2/PPAA:2/ITTA:2/EMA:2/EABA:2/TDR:2/TITR:2/THC:2/TDTR:2/TAC:2/IPTC:2/ATCC:2/DEC:2"},"highLevel":{"name":"业内高水平","backgroundColor":"rgba(99, 132, 255, 0.5)","borderColor":"rgba(99, 132, 255, 0.5)","vectorStr":"RTASS:0.3.2/OL:3/OD:3/TR:3/AL:4/PL:3/DL:3/RL:3/TL:3/VD:1/VE:1/VL:1/VDW:1/LC:0/LI:0/LA:0/FD:0/RD:0/CI:0/DLC:4/OLC:4/ESA:4/IRC:3/WC:3/VMEC:3/ATDC:3/SEC:3/PPC:3/TCC:4/LMC:4/GAT:3/GAC:3/GAA:4/IEMC:3/SUMC:3/TIBC:3/BSMC:3/ASMC:3/PSMC:2/NACC:3/ETTA:3/EHAA:3/PPAA:2/ITTA:3/EMA:3/EABA:3/TDR:4/TITR:4/THC:4/TDTR:3/TAC:3/IPTC:3/ATCC:2/DEC:3"}}},"thanks":[{"name":"devils","url":"","email":"","description":"感谢 devils 在能力评价模型中的贡献。"},{"name":"makato","url":"","email":"","description":"感谢 makato 在对各评分项的意见。"},{"name":"vf3ng","url":"","email":"","description":"感谢 vf3ng 对框架评估准确性的度量和意见。"}],"references":[{"name":"OWASP","url":"https://owasp.org/www-community/OWASP_Risk_Rating_Methodology","description":"OWASP风险评级理论"},{"name":"FIRST CVSSv3","url":"https://www.first.org/cvss/v3.1/specification-document","description":"CVSSv3规范文档"},{"name":"维基百科","url":"https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System","description":"维基百科关于CVSS的解释"}]}'
        );
      },
      753: (t) => {
        "use strict";
        t.exports = JSON.parse(
          '{"maintainer":"维护者","collaborators":"贡献者","background":"背景","changelog":"更新日志","license":"开源许可证","introduction":"介绍","backgroundDesc":"很多年前，企业通常仅靠采用“渗透测试”挖掘单个应用系统漏洞的方式来评估自身安全。为了评估漏洞的危害性，美国国家基础设施顾问委员会（NIAC）开发了一套通用漏洞评估系统CVSS，并交由事件响应和安全团队论坛（FIRST）进行托管。FIRST在前序版本基础上，又继续迭代了v2和v3版本，针对单个漏洞的危害性评估标准越来越精确和完善，也被各大安全组织和漏洞收录平台所使用。随着网络安全的发展，面临的网络威胁与日俱增，通过模拟黑客APT攻击手段与行为，对企业开展综合性安全评估的红蓝对抗实战演习方式开始被广泛采用。有些组织单位为了对攻击方之间以及防守方之间进行评估，也制定了一些评分制度。但这种评分制度只能衡量攻击方与攻击方之间，防守方与防守方之间的差异，科学性也有待商榷，也无法做攻击方与防守方间的能力对比。而在仅有一支攻击队伍和一支防守队伍的情况下，问题则更加突出：如果核心系统被突破，那么是说明攻击队伍强，还是说明防守队伍弱呢？如果核心系统没有被突破，那么是攻击队伍弱，还是防守队伍强呢？这是非常难衡量的，业内也没有一套成熟的体系来进行评价。因此JD.Army结合多年网络实战攻防演习以及红蓝对抗经验，参考CVSS以及OWASP风险评级方法，开发了这套针对实战演习场景下的红蓝对抗评分框架。","categoryIntro":"`RTASS评分框架整体上由“${RTASS.factorCategories.CF.name}”与“${RTASS.factorCategories.BF.name}”两大类别构成。`","categoryDesc":"`由${RTASS.factorCategories.CF.processScores.map(ps=>RTASS.processScores[ps].name).join(\', \')}等过程因子及分值组成。`","methods":"方法","methodsDesc":"`为什么一定是“关键路径”和“最高”、“最低”、“最大”、“最关键”呢？\\n\\n这是因为在单场次红蓝对抗当中，攻击者能够采取不同的战略形成不同的攻击路径，并在攻击路径中使用数十、上百种不同的TTPs。如果依次针对这些TTPs进行衡量，很明显是不现实的，也大幅增加了评估的工作量。\\n\\n安全遵循“短板原理”，同样也遵循“长板原理” —— 攻击者不需要保证每一次TTPs的投入都是最高的技术能力，只要在关键路径上有一次或几次的高水平攻击，就有可能把企业目标拿下。所以我们以攻击者在进攻关键路径上投入的最高水平作为他们的进攻实力的表现。\\n\\n显然，我们也能看出：攻击者实力并不能代表攻击者在单次红蓝对抗演练中的总的有效技术投入。我们拿物理学做个比喻：一个人在一个物体上施加的最大力，并不能代表这个人在物体上做的有效功。所以，为了衡量攻击者的“功”，我们引入“进攻能量”概念，用以表示攻击者在单次红蓝对抗演习中的总有效投入，也即攻击者在本次演练中投入的技术水平。\\n\\nRTASS通过评估因子形成${Object.keys(RTASS.processScores).length}个过程分值，过程分值再通过不同组合，形成针对攻击方、防守方、业务以及企业等不同角色的四项最终分值：${Object.values(RTASS.finalScores).map(fs=>fs.name).join(\'、\')}。这${Object.keys(RTASS.finalScores).length}项分值均指代在单次演练中的情况，因此在不同的演练中，分值可能会有所不同。下面将对评分的方法和因子进行详细介绍。`","finalScoresDesc":"fs.name+\'[\'+fsKey+\']由\'+Object.keys(fs.vectors).map(f=>RTASS.processScores[f].name+\'[\'+f+\']\').join(\'、\')+\'等\'+Object.keys(fs.vectors).length+\'个过程分值计算得出，\'+fs.description","finalScoresPS":"当然，上述关联也有可能随着RTASS的进化有所改变。","scoringDesc":"在本评分框架中，每个评分因子都有0到4共5个评分项。而过程分值和最终分值：最低分0分，最高分为10分。其中，各分值对应等级的分布如下：","scoringDescHeader":"| 分值           | 等级 |","scoringDescPS":"注：本框架部分评分因子如“漏洞风险”、“企业影响”等参考借鉴了OWASP风险评级方法中相关因子。","scoreFactor":"评分因子","scoreAbility":"能力因素","scoreAbilityDesc":"为了能够对评分因子进行更细化的衡量，RTASS在Base版本基础上研发了Plus版本，给评分因子增加了更细化的“能力因素”。有了能力因素后，RTASS在可以对攻击方、防守方、业务方与企业进行宏观评价外，还可以更细致地指示出它们的能力点强弱，以及需要进一步提升的方向。截止目前，如下评分因子具有能力选项：","processScoreDesc":"fc.name+\'由\'+fc.processScores.map(ps=>RTASS.processScores[ps].name).join(\'、\')+fc.processScores.length+\'部分组成。\'","processScoringDesc":"RTASS.processScores[ps].name+\'由\'+Object.keys(psVectors).map(f=>RTASS.factors[f].name+\'[\'+f+\']\').join(\'、\')+Object.keys(psVectors).length+\'个因子计算得出。\'+\'计算方法为：\'","factorDesc":"f.name+\'主要评估\'+f.description","factorScoreDesc":"f.name + \'由\'+ Object.keys(f.vectors).map(aKey=>RTASS.abilities[aKey].name+\'[\'+aKey+\']\').join(\'、\')+\' \'+ Object.keys(f.vectors).length + \'个能力项组成。计算方法为：\'","abilityDesc":"a.name+\'主要评估\'+a.description","vectorString":"向量字符串","vectorStringDesc":"参考CVSS评分框架，RTASS同样使用“向量字符串”来记录评分过程，以及对RTASS指标信息进行传输。RTASS向量字符串以标签“RTASS:”和当前版本的数字表示（譬如：1.0.0）开头。指标信息以一组指标的形式出现，每个指标前面都有一个正斜杠“/”，作为分隔符。每个指标都是缩写形式的指标名称、冒号及指标值构成。缩写形式在本规范的前面定义（在每个因子名称后面的括号中），并在下表中进行了总结。","factor":"因子","ability":"能力","vectorStringDescFactorHeader":"| 因子名称          | 可能的值 |","vectorStringDescAbilityHeader":"| 能力名称          | 可能的值 |","vectorStringDescPS":"注：在RTASS Base评分模式下，能力因素不是必须的；在RTASS Plus评分模式下，能力因素是必须的。","vectorStringExample":"模式向量字符串示例如下：","vectorStringExamplePS":"向量字符串应包含表中所示全部指标，接受任何顺序的度量。如果向量字符串多次包含相同度量，则以最后一次度量为准。","oneThingAbout":"关于RTASS的一句话","ontThingAboutDesc":"RTASS框架在设计上通过各基本因子计算生成过程分值，再通过过程分值生成最终分值。算法为未来的扩展预留了空间，但在现阶段数据还不太充足的情况下，因子的系数基本还是为1。\\n\\nCVSS在解决此问题上，采取的方式是通过CVSS特别兴趣小组(SIG)人工构建了一套真实漏洞对应严重性的查找表，再反过来调整参数。最终保证人工评估漏洞分值与CVSS框架评估分值的偏差值小于0.5.\\n\\n由于红蓝对抗演练与漏洞的不同，目前无法通过大量现成的样本来调整参数。但我们会不断收集新样本，通过人工评定以及参考更新的方法论，来使得RTASS的分值更加精确。这也需要阅读本规范的您的多加参与和大力支持。","collaborateAndContribute":"协作 & 贡献","collaborateAndContributeDesc":"本框架采用JSON格式进行了系统描述，详见“/src/RTASS.json”文件，其中：\\n\\n- 能力评分放于“abilities”对象中，包括每个因子的0到4的中英文分值描述。\\n- 评分因子放于“factors”对象中，包括每个因子的0到4的中英文分值描述。\\n- 过程分值通过“processScores”进行描述，其中“algorithm”为评分算法。\\n- 最终得分通过“finalScores”进行描述，其中“algorithm”为评分算法。\\n- “levels”对象存储分值与极、高、中、低之前的对应关系。\\n- “factorGroups”对象存储攻防因素和业务因素两大分组与过程分值的对应关系。\\n\\n各协作者可以通过修改RTASS.json文件对各评分因子的描述以及评分算法来与我们进行该系统框架的协作开发。","thanks":"致谢","reference":"参考链接","onlineCalculator":"在线计算器"}'
        );
      },
      112: (t) => {
        "use strict";
        t.exports = JSON.parse(
          '{"language":"中文","reset":"重置","inThisAssessment":"本次红蓝对抗演练中：","processingScore":"过程分值如下：","inProcessingScore":"其中","current":"本次"}'
        );
      },
      809: (t) => {
        "use strict";
        t.exports = JSON.parse(
          '{"title":"Red Team Assessment Scoring System (RTASS)","keyword":"Red Team Assessment Scoring System","description":"The Red Team Assessment Scoring System (RTASS) is an open framework used to assess the capability investment of both offensive and defensive sides in a single cyber red-blue confrontation or actual combat exercise, as well as the degree of risk faced by the business and the enterprise involved. Through RTASS, it is possible to quantify the risk status of attackers, defenders, business parties and enterprises in the red-blue adversarial network attack and defense drills. This framework is suitable for security assessment scenarios that conduct real network attacks on enterprises by simulating hacker APT methods, such as network red-blue confrontation drills, network actual offensive and defensive exercises, red team assessments, and blue army assessments.","maintainer":"Monyer","license":"Apache","rights":"RTASS is founded, owned, and managed by the JD.Army team. JD.Army is a professional red team which focuses on excavating and solving the hidden security risks of enterprise safe operation. JD.Army reserves the right to update RTASS and this document regularly at its sole discretion. Although JD.Army owns all the rights and interests in RTASS, it permits the public to use it freely and follows the Apache open source agreement.","calculator":"https://rtass.jd.army","github":"https://github.com/JDArmy/RTASS","version":"0.3.2","abilities":{"IRC":{"keyword":"Intelligence Reconnaissance Capability","name":"Intelligence Reconnaissance Capability","description":"The attacker\'s capabilities in the information gathering, intelligence reconnaissance phase","options":["0 - Could not obtain valid intelligence information","1 - Basic IT asset and network information collection capabilities","2 - Strong asset collection ability, able to find remote and vulnerable assets; strong organizational personnel reconnaissance ability, able to find key social work targets","3 - Ability to fully grasp the intelligence of the target organization, operations, collaboration, personnel, assets, security, network architecture, etc. through active and passive means, and formulate targeted attack plans","4 - Under the premise that the target is not aware of the target, it can grasp the overall picture of the online and offline operations of the target enterprise and the details of the target, accurately draw the attack path, and quickly and accurately find the stronghold establishment plan"]},"WC":{"keyword":"Weaponization Capability","name":"Weaponization Capability","description":"Attacker capabilities during the weaponization, resource development phase","options":["0 - no programming or programming ability","1 - Ability to write simple script EXP","2 - Ability to write more complex penetration tools","3 - Able to develop C2, automated penetration platform","4 - Ability to design and implement advanced complex nuclear bomb-level weapons (eg Stuxnet, Bvp47, Wannacry, etc.)"]},"VMEC":{"keyword":"Vulnerability Mining and Exploitation Capability","name":"Vulnerability Mining and Exploitation Capability","description":"Attacker\'s black and white box vulnerability mining ability and actual combat vulnerability exploitation ability","options":["0 - Unable to find valuable exploits or exploited exploits successfully","1 - Able to exploit general vulnerabilities in applications and exploit them successfully","2 - Ability to mine and exploit highly complex vulnerabilities in applications","3 - Ability to mine common component or middleware vulnerabilities and exploit them successfully","4 - Ability to mine operating system and common system component-level vulnerabilities and exploit them successfully"]},"ATDC":{"keyword":"Anti Threat Detection Capability","name":"Anti Threat Detection Capability","description":"Attacker\'s ability to bypass WAFs, firewalls, antivirus, and threat detection devices","options":["0 - Little means or ability to counter threat detection systems","1 - Able to bypass WAF, NGFW and other defenses to achieve vulnerability exploitation","2 - It can bypass anti-virus, HIDPS and other defense methods to achieve C2 online without alarm","3 - Low threat perception during RBI and intranet lateral movement","4 - In the case of extremely strong defensive strength, non-perceptual, long-term, and stable target action can be achieved after target breakthrough"]},"SEC":{"keyword":"Social Engineering Capability","name":"Social Engineering Capability","description":"The attacker\'s social engineering capabilities on the network or on the ground and the success rate","options":["0 - cannot implement successful social work","1 - Successful social worker with access to general staff","2 - Successful social work and access to security awareness trained non-security practitioners","3 - Successful social work and authorization for those who are engaged in security positions","4 - Able to successfully social work and gain access to the most professional security engineers"]},"PPC":{"keyword":"Permission Persistence Capability","name":"Permission Persistence Capability","description":"The attacker\'s ability to maintain permissions on the foothold after gaining initial access","options":["0 - Unable to maintain stability and continuity of stronghold authority","1 - Enables long-term stable execution of basic orders at the base","2 - Invisible permission maintenance in case of reboot","3 - Ability to execute more commands without perceptually elevating the base\'s privileges","4 - Privilege Sustainability After Emergency Response"]},"TCC":{"keyword":"Tunnel Construction Capability","name":"Tunnel Construction Capability","description":"Attacker\'s ability to build tunnels after gaining initial access","options":["0 - Unable to build a smooth and stable tunnel","1 - Able to build a simple springboard to achieve C2 online and intranet roaming","2 - Ability to build multi-level springboard tunnels according to the needs of the environment","3 - Ability to hide springboard traffic into normal network traffic to achieve threat insensitivity","4 - On the basis of the former, it can penetrate the target multi-layer intranet and use a variety of different protocols to build long-term and stable tunnel links"]},"LMC":{"keyword":"Lateral Movement Capability","name":"Lateral Movement Capability","description":"After gaining initial access, the attacker gains more permissions and expands the network expansion capabilities of the results","options":["0 - The base is the end point, no continuous network expansion capability","1 - The identity and location of the base can be confirmed through information collection, and useful intelligence information can be obtained","2 - On the basis of the former, it can conduct non-perceptual intranet spying, find a lateral movement path or target to move","3 - On the basis of the former, access credentials can be obtained and the credentials can be successfully used for lateral movement","4 - On the basis of the former, non-perceptual lateral movement is realized through various complex technical means such as puddles, social work, and supply chains."]},"GAT":{"keyword":"Goal Achievement Time","name":"Goal Achievement Time","description":"The minimum time to achieve breakthrough control of the target by an attacker.","options":["0 - The breakout control of the target system has not been completed within the set time","1 - The target breakthrough was not completed within the set time, but the breakthrough control of multiple core systems","2 - Complete the breakthrough control of some targets within the set time","3 - Complete the main core target breakthrough control within 1-3 weeks","4 - Complete the main core target breakthrough control within 1-3 days"]},"GAC":{"keyword":"Goal Achievement Cost","name":"Goal Achievement Cost","description":"The work cost of weapons, manpower, vulnerabilities, etc. that the attacker needs to pay in order to achieve the goal","options":["0 - Severely making ends meet","1 - great cost (nuclear 0day, etc.)","2 - Larger cost (generic 0day, etc.)","3 - lower cost","4 - almost no cost"]},"GAA":{"keyword":"Goal Action Ability","name":"Goal Action Ability","description":"The attacker\'s ability to maximize the ability to achieve the ultimate goal after gaining access to the target","options":["0 - Unable to achieve target action on target","1 - Partial data leakage to target can be achieved","2 - A partial operational impact on the target can be achieved","3 - Full data leakage to the target can be achieved","4 - Full data exfiltration can be accomplished without perception, or with long-term lasting effects"]},"IEMC":{"keyword":"Information Event Management Capability","name":"Information Event Management Capability","description":"Defender\'s ability to manage various logs and events","options":["0 - The implementation of log management specifications is not in place, and a large number of logs are missing","1 - Decentralized logging and event tracing capabilities","2 - There is a centralized security log and event management system","3 - Ability to classify and summarize log events, identify, rate and alert on threats","4 - Comprehensive and systematic log incident response and automated security operations capabilities"]},"SUMC":{"keyword":"Software Update Management Capability","name":"Software Update Management Capability","description":"The defender\'s vulnerability management capabilities for various software, systems, components, and dependencies.","options":["0 - No software update management capabilities, with a large number of long-term critical vulnerabilities","1 - Timely security updates can be made to the operating system patches of production servers","2 - On the basis of the former, the software commonly used in development, operation and maintenance, and employee office terminal software can be managed in a unified manner and updated safely in a timely manner","3 - On the basis of the former, version management and timely security updates can be performed on the system, container service programs, and middleware","4 - On the basis of the former, version management and timely security updates can be performed on the components that the application relies on and references"]},"TIBC":{"keyword":"Threat Identification Blocking Capability","name":"Threat Identification Blocking Capability","description":"Ability to identify and block threats on internal and external networks and terminals.","options":["0 - No threat identification blocking facility","1 - There are border traffic protection and blocking facilities","2 - On the basis of the former, there are internal traffic protection and blocking facilities","3 - On the basis of the former, there are endpoint protection and blocking facilities","4 - On the basis of the former, there are security orchestration and automated response facilities"]},"BSMC":{"keyword":"Baseline Security Management Capabilities","name":"Baseline Security Management Capabilities","description":"The defender\'s baseline security management capability for various systems and applications.","options":["0 - No baseline security management capability","1 - With service security configuration and audit log baseline management","2 - Based on the former, there is access control baseline management","3 - On the basis of the former, there are account permissions and authentication authorization baseline management","4 - On the basis of the former, there are security testing and evaluation processes for services, networks, and supply chains"]},"ASMC":{"keyword":"Account Security Management Capabilities","name":"Account Security Management Capabilities","description":"Defenders have unified management of various accounts and dynamic threat identification capabilities.","options":["0 - no unified identity management capability","1 - Unified account management and authentication","2 - More secure authentication techniques (go password or MFA etc.)","3 - Unified Identity Management Based on Trusted Devices","4 - Dynamic Adaptive and Continuous Authentication"]},"PSMC":{"keyword":"Privilege Security Management Capability","name":"Privilege Security Management Capability","description":"Defenders have unified access and dynamic management and control capabilities for various accounts.","options":["0 - no authority unified management capability","1 - Unified functional granularity rights management (authorization, authentication, etc.)","2 - Ongoing Evaluation and Online Governance of Privilege Minimization","3 - Unified data granularity rights management","4 - Continuous Evaluation and Dynamic Control of Privilege Abuse Prevention"]},"NACC":{"keyword":"Network Access Control Capability","name":"Network Access Control Capability","description":"Access control and granularity between networks and terminals inside and outside the enterprise.","options":["0 - the network does not perform any access control","1 - The office network is isolated from the production network and accessed through the bastion machine","2 - On the basis of the former, there is network isolation between external customer service and internal employee service","3 - On the basis of the former, there is network isolation between different application services","4 - On the basis of the former, there are more fine-grained micro-isolation capabilities"]},"ETTA":{"keyword":"External Threat Traffic Awareness","name":"External Threat Traffic Awareness","description":"Threat traffic awareness of an enterprise when it is attacked by an external network.","options":["0 - almost no perception","1 - has a small amount of perception","2 - has moderate perception","3 - has a lot of perception","4 - almost all perception"]},"EHAA":{"keyword":"External Harpoon Attack Awareness","name":"External Harpoon Attack Awareness","description":"Threat perception and handling capabilities of an enterprise when it is attacked by an external spear.","options":["0 - no perception","1 - Perceives an attack event and is able to capture attack samples","2 - On the basis of the former, it is possible to trace out all the fished persons and alert them","3 - On the basis of the former, it is possible to sense that employees are recruited by phishing, extract terminal samples, and restore the attack method","4 - On the basis of the former, the landing, execution and online actions of the fishing Trojan can be quickly sensed, and can be blocked in time"]},"PPAA":{"keyword":"Proximity Penetration Attack Awareness","name":"Proximity Penetration Attack Awareness","description":"The ability of enterprises to perceive and deal with threats when they are subjected to near-source on-the-spot attacks and physical penetration.","options":["0 - almost no perception","1 - After a successful attack, determine the path of the near-source penetration attack through source tracing.","2 - Successfully found traces of near-source penetration through technical monitoring and administrative means, including but not limited to collecting U disks, capturing HID attacks, wifi blasting, etc.","3 - On the basis of the former, it can analyze in detail the attack methods and attack processes used by the attackers, including but not limited to the analysis of attack methods against wifi and the analysis of Trojan horses","4 - On the basis of the former, it has independent near-source perception capabilities to quickly detect near-source attacks and block them in time."]},"ITTA":{"keyword":"Intranet Threat Traffic Awareness","name":"Intranet Threat Traffic Awareness","description":"Threat-traffic awareness of an enterprise under attack from the inside.","options":["0 - almost no perception","1 - Can perceive indiscriminate full intranet scanning behavior, identify abnormal points and quickly locate the scanning source IP","2 - Based on traffic characteristics, small-scale intranet scans such as C segment can be captured, and the target and purpose can be restored.","3 - On the basis of the former, perception of partial credential exploitation and lateral movement behavior, or data exfiltration behavior","4 - Perception of almost the entire attack process, and the encrypted C2 channel used by the attacker"]},"EMA":{"keyword":"Endpoint Malware Awareness","name":"Endpoint Malware Awareness","description":"The threat perception capability of enterprise personal office computers, servers and other terminal devices when they are attacked by malware.","options":["0 - almost no perception","1 - There is a smooth feedback channel for employee security issues, and terminal attacks are quickly detected","2 - Ability to sense endpoint attacks through endpoint detection responses, threat traffic analysis","3 - Capable of capturing attack samples, extracting effective network or host IOC and implementing monitoring and blocking capability deployment","4 - Complete automated sandbox analysis, threat identification intelligence and strategies, security orchestration and automated threat handling mechanisms"]},"EABA":{"keyword":"Endpoint Abnormal Behavior Awareness","name":"Endpoint Abnormal Behavior Awareness","description":"The threat perception ability of enterprise personal office computers, servers and other terminal equipment to dangerous operations and abnormal behaviors.","options":["0 - almost no perception","1 - Able to perceive large-scale network scanning behavior for this machine and alert","2 - Able to perceive the network password blasting behavior against this machine and give an alarm","3 - On the basis of the former, it can perceive the abnormal operation behavior of privileged accounts, sensitive files and processes on the terminal","4 - On the basis of the former, it can perceive abnormal remote access behavior between terminals"]},"TDR":{"keyword":"Threat Detection Rate","name":"Threat Detection Rate","description":"The coverage rate of high-risk threats actually identified by the defender through manual or other means after the system detects the threat.","options":["0 - no threat detected (within 12 hours)","1 - detection rate: 0 < N <= 25%","2 - Detection rate: 25% < N <= 50%","3 - Detection rate: 50% < N <= 80%","4 - Detection rate: 80% < N <= 100%"]},"TITR":{"keyword":"Threat Identification Timeliness Rate","name":"Threat Identification Timeliness Rate","description":"The timely rate of high-risk threats actually identified by the defender through manual or other means after the system detects the threat.","options":["0 - Threat not identified in time (within 12 hours)","1 - Timely rate: 0 < N <= 25%","2 - Timeliness: 25% < N <= 50%","3 - Timeliness: 50% < N <= 80%","4 - Timeliness: 80% < N <= 100%"]},"THC":{"keyword":"Threat Handling Capability","name":"Threat Handling Capability","description":"Threat disposition coverage by defenders after a threat is detected.","options":["0 - No action taken (within 12 hours)","1 - Disposal rate: 0 < N <= 25%","2 - Disposal rate: 25% < N <= 50%","3 - Disposal rate: 50% < N <= 80%","4 - Disposal rate: 80% < N <= 100%"]},"TDTR":{"keyword":"Threat Disposal Timely Rate","name":"Threat Disposal Timely Rate","description":"The defender\'s timely threat resolution rate after a threat is detected.","options":["0 - No timely disposal (within 12 hours)","1 - Timely rate: 0 < N <= 25%","2 - Timeliness: 25% < N <= 50%","3 - Timeliness: 50% < N <= 80%","4 - Timeliness: 80% < N <= 100%"]},"TAC":{"keyword":"Threat Analysis Capability","name":"Threat Analysis Capability","description":"Defender\'s ability to identify, analyze, and reverse threats","options":["0 - no threat analysis capability","1 - Ability to accurately identify threats and extract valid IOCs","2 - Has automated threat analysis and intelligence sharing mechanisms","3 - Able to perform complex threat analysis, restore attack methods and targets","4 - With automated threat analysis technology and professional reverse analysis capabilities, a complete analysis report can be formed"]},"IPTC":{"keyword":"Intrusion Path Traceability Capability","name":"Intrusion Path Traceability Capability","description":"The ability of the defender to trace the intrusion path of the intruder","options":["0 - no intrusion path traceability","1 - Attack path restoration 0 - 25%","2 - Attack path restoration 25% - 50%","3 - Attack path restoration 50% - 80%","4 - Attack Path Recovery 80% - 100%"]},"ATCC":{"keyword":"Attacker Traceability and Countermeasure Capability","name":"Attacker Traceability and Countermeasure Capability","description":"The ability of the defender to trace the source to the attacker","options":["0 - hardly any useful information can be traced back to the source","1 - Attacker\'s C2 server IP or springboard IP is traced","2 - Attackers commonly use virtual identities or real IPs in China to be traced","3 - Attacker\'s attack asset or computer is reversely controlled","4 - The real identity information of the attacker is traced to the source"]},"DEC":{"keyword":"Deception and Entrapment Capabilities","name":"Deception and Entrapment Capabilities","description":"Enterprise honeypot honeynet construction, and the ability to deceive and trap attackers","options":["0 - no deception trapping ability","1 - Build a high-fidelity honeypot in the network","2 - A highly simulated honeynet is built in the network, which can introduce attackers into the honeynet","3 - Dynamic honeynet capability, which can direct all attacker traffic into the honeynet from the production environment","4 - It has perfect secret spraying, honey tagging and honey application customization, honey farm management capabilities, and can realize active attraction, dynamic adaptation and anti-trapping capabilities"]}},"factors":{"OL":{"keyword":"Offensive Level","name":"Offensive Level","description":"The highest level of skill used by the attacker in the evaluation path.","options":["0 - equivalent to entry-level hacker","1 - Equivalent to a normal level hacker or a tool, script hacker","2 - equivalent to a hacker proficient in penetration techniques","3 - Requires more professional teamwork","4 - Equivalent to National APT Hacking Team"],"vectors":{"IRC":{"algorithm":" IRC * 1 ","description":""},"WC":{"algorithm":" WC * 1 ","description":""},"VMEC":{"algorithm":" VMEC * 1 ","description":""},"ATDC":{"algorithm":" ATDC * 1 ","description":""},"SEC":{"algorithm":" SEC * 1 ","description":""},"PPC":{"algorithm":" PPC * 1 ","description":""},"TCC":{"algorithm":" TCC * 1 ","description":""},"LMC":{"algorithm":" LMC * 1 ","description":""}}},"OD":{"keyword":"Offensive Difficulty","name":"Offensive Difficulty","description":"The highest difficulty the attacker has to solve the puzzle in the entire evaluation path.","options":["0 - almost no difficulty for professional hackers","1 - a bit difficult for professional hackers","2 - more difficult for professional hackers","3 - difficult for professional hackers","4 - Almost impossible for professional hackers"]},"TR":{"keyword":"Target Reach","name":"Target Reach","description":"Whether the attacker achieved the intended goal","options":["0 - basically not achieved","1 - small amount achieved","2 - medium volume reached","3 - Mass Achievement","4 - Fully Achieved"],"vectors":{"GAT":{"algorithm":" GAT * 1 ","description":""},"GAC":{"algorithm":" GAC * 1 ","description":""},"GAA":{"algorithm":" GAA * 1 ","description":""}}},"AL":{"keyword":"Anti-traceability Level","name":"Anti-traceability Level","description":"What is the attacker\'s ability to trace back to the source?","options":["0 - The attacker\'s real identity information is traced to the source, or the attacking asset or computer is reversely controlled","1 - The attacker\'s virtual identity feature or the real IP in the territory is traced","2 - The attacker\'s persistent attack behavior is marked by fingerprints, or a large number of indicators of attack (IOAs) are marked by records (honeypots, etc.)","3 - The attacker\'s fixed C2 server IP or fixed tunnel return IP is traced back to the source","4 - hardly any useful information can be traced back to the source"]},"PL":{"keyword":"Prevention Level","name":"Prevention Level","description":"A defender\'s ability to block critical penetration paths.","options":["0 - almost no interception","1 - slight interception","2 - stronger interception","3 - very strong interception","4 - almost hard to break"],"vectors":{"IEMC":{"algorithm":" IEMC * 1 ","description":""},"SUMC":{"algorithm":" SUMC * 1 ","description":""},"TIBC":{"algorithm":" TIBC * 1 ","description":""},"BSMC":{"algorithm":" BSMC * 1 ","description":""},"ASMC":{"algorithm":" ASMC * 1 ","description":""},"PSMC":{"algorithm":" PSMC * 1 ","description":""},"NACC":{"algorithm":" NACC * 1 ","description":""}}},"DL":{"keyword":"Detection Level","name":"Detection Level","description":"Defender\'s cyber threat discovery capabilities for critical penetration paths.","options":["0 - almost no threat detected","1 - Threat of sporadic attack on non-critical assets detected","2 - few critical path threats detected","3 - Significant critical path threats detected","4 - Nearly all threats detected"],"vectors":{"ETTA":{"algorithm":" ETTA * 1 ","description":""},"EHAA":{"algorithm":" EHAA * 1 ","description":""},"PPAA":{"algorithm":" PPAA * 1 ","description":""},"ITTA":{"algorithm":" ITTA * 1 ","description":""},"EMA":{"algorithm":" EMA * 1 ","description":""},"EABA":{"algorithm":" EABA * 1 ","description":""},"TDR":{"algorithm":" TDR * 1 ","description":""},"TITR":{"algorithm":" TITR * 1 ","description":""}}},"RL":{"keyword":"Response Level","name":"Response Level","description":"Defender\'s ability to recover, repair, and respond to a compromised system.","options":["0 - almost difficult to advance (3+ days)","1 - slow response (12+ hours)","2 - The response is more timely (within 12 hours)","3 - Response near real time (within 2 hours)","4 - Real-time response (within 30 minutes)"],"vectors":{"THC":{"algorithm":" THC * 1 ","description":""},"TDTR":{"algorithm":" TDTR * 1 ","description":""},"TAC":{"algorithm":" TAC * 1 ","description":""}}},"TL":{"keyword":"Traceability Level","name":"Traceability Level","description":"Whether the defender can effectively trace the source of the attacker.","options":["0 - hardly any useful information can be traced back to the source","1 - The attacker\'s fixed C2 server IP or fixed tunnel back-up IP is traced back to the source","2 - The attacker\'s persistent attack behavior is marked by fingerprints, or a large number of indicators of attack (IOAs) are marked by records (honeypots, etc.)","3 - The attacker\'s virtual identity feature or the real IP in the territory is traced","4 - The attacker\'s real identity information is traced, or the attacked assets or computers are reversely controlled"],"vectors":{"IPTC":{"algorithm":" IPTC * 1 ","description":""},"ATCC":{"algorithm":" ATCC * 1 ","description":""},"DEC":{"algorithm":" DEC * 1 ","description":""}}},"VD":{"keyword":"Vulnerability Discoverability","name":"Vulnerability Discoverability","description":"Discoverability of critical vulnerabilities in the penetration path.","options":["0 - almost impossible to find","1 - harder to spot for professional hackers","2 - Medium difficulty to find for professional hackers","3 - For professional hackers, discovery is easier","4 - Discovery with common automation tools"]},"VE":{"keyword":"Vulnerability Exploitability","name":"Vulnerability Exploitability","description":"Exploitability of critical vulnerabilities in the penetration path.","options":["0 - almost impossible to exploit","1 - Difficult to exploit for professional hackers","2 - Moderately difficult to exploit for professional hackers","3 - easier to exploit for professional hackers","4 - Can be exploited using common automation tools"]},"VL":{"keyword":"Vulnerability Lethality","name":"Vulnerability Lethality","description":"Maximum lethality for critical vulnerabilities in the penetration path.","options":["0 - almost no harm","1 - lower lethality, affects individual non-core assets","2 - medium-scale lethality, affecting a subset of non-core assets","3 - Massive lethality, affecting individual core assets","4 - Extremely broad lethality, affecting a subset of core assets"]},"VDW":{"keyword":"Vulnerability Disclosure Window","name":"Vulnerability Disclosure Window","description":"The maximum exposure time window for critical vulnerabilities in the penetration path.","options":["0 - little public disclosure","1 - Small-scale private dissemination of hacker circles","2 - Public disclosure less than 3 days","3 - public disclosure greater than 3 days","4 - Public disclosure greater than 1 week"]},"LC":{"keyword":"Loss of Confidentiality","name":"Loss of Confidentiality","description":"How much data can be leaked and how sensitive it is.","options":["0 - cannot cause data leakage","1 - can leak a small amount of non-sensitive data","2 - can leak large amounts of non-sensitive data","3 - A small amount of sensitive data can be leaked","4 - Can reveal large amounts of sensitive data"]},"LI":{"keyword":"Loss of Integrity","name":"Loss of Integrity","description":"How much data might be damaged and how much.","options":["0 - no data corruption","1 - can corrupt a small amount of non-core data","2 - can corrupt a lot of non-core data","3 - can corrupt a small amount of core data","4 - can corrupt a lot of core data"]},"LA":{"keyword":"Loss of Availability","name":"Loss of Availability","description":"How much service can be lost and how important it is.","options":["0 - no business interruption","1 - Can cause a small amount of non-core business disruption to the business","2 - Can cause substantial disruption to the non-core business of the enterprise","3 - Can cause a small amount of disruption to the company\'s core business","4 - Can cause substantial disruption to the company\'s core business"]},"FD":{"keyword":"Financial Damage","name":"Financial Damage","description":"the greatest impact on the business economy.","options":["0 - less than the cost of fixing the bug","1 - will not have a significant impact on the company\'s annual profit","2 - Can affect a certain company\'s annual profit","3 - Significant impact on the company\'s annual profit","4 - Significant impact on the company\'s annual profit"]},"RD":{"keyword":"Reputation Damage","name":"Reputation Damage","description":"Whether it will cause damage to the company\'s reputation and thus damage the business.","options":["0 - no loss of goodwill","1 - May cause slight damage to goodwill","2 - Can cause serious damage to goodwill","3 - Can lead to large or large customer churn","4 - Can cause significant brand damage"]},"CI":{"keyword":"Compliance Impact","name":"Compliance Impact","description":"How much breach risk arises from a problem that arises or a malicious action by an attacker.","options":["0 - no risk of violation","1 - can create a slight risk of non-compliance","2 - Can cause a more obvious risk of violation","3 - Can create a very high profile breach risk","4 - Serious Violation or Contribution to Violation"]},"DLC":{"keyword":"Development Life Circle","name":"Development Life Circle","description":"Whether there are security issues identified in the software development life cycle.","options":["0 - almost no security concerns","1 - There are a lot of security process issues","2 - has a moderate amount of security process issues","3 - There are minor security process issues","4 - basically no security process issues"]},"OLC":{"keyword":"Operation Life Circle","name":"Operation Life Circle","description":"Whether there are security issues found in the operation and maintenance life cycle.","options":["0 - almost no security concerns","1 - There are a lot of security process issues","2 - has a moderate amount of security process issues","3 - There are minor security process issues","4 - basically no security process issues"]},"ESA":{"keyword":"Employment Security Awareness","name":"Employment Security Awareness","description":"Whether the majority of employees have security awareness issues during the assessment process.","options":["0 - almost no security awareness","1 - Most of the employees in key positions have weak safety awareness","2 - A small number of employees in key positions have weak safety awareness","3 - Most of the employees in key positions have high safety awareness","4 - All staff have high safety awareness"]}},"factorCategories":{"CF":{"keyword":"Confrontation Factors","name":"Confrontation Factors","description":"Mainly measure their respective strengths from the perspective of offense and defense, evaluate the lethality of key vulnerabilities in the penetration path, and finally combine business factors to form \\"offensive energy\\" and \\"defensive energy\\" scores.","processScores":["OS","DS","VR"]},"BF":{"keyword":"Business Factors","name":"Business Factors","description":"It mainly evaluates from the perspective of the impact on the enterprise, the level of business security capabilities, and the three elements of CIA information security, and finally combines the offensive and defensive factors to form the \\"business risk\\" and \\"enterprise risk\\" scores.","processScores":["TI","EI","BS"]}},"processScores":{"OS":{"keyword":"Offensive Strength","name":"Offensive Strength","description":"Refers to the highest level of attack technology used by the attacker on the key penetration path in a single red-blue confrontation exercise.","vectors":{"OL":{"algorithm":" OL * 1 * 2.5 ","description":""},"OD":{"algorithm":" OD * 1 * 2.5 ","description":""},"TR":{"algorithm":" TR * 1 * 2.5 ","description":""},"AL":{"algorithm":" AL * 1 * 2.5 ","description":""}}},"DS":{"keyword":"Defensive Strength","name":"Defensive Strength","description":"Refers to the minimum level of defensive technology used by the defending team on the key penetration path in a single red-blue confrontation exercise.","vectors":{"PL":{"algorithm":" PL * 1 * 2.5 ","description":""},"DL":{"algorithm":" DL * 1 * 2.5 ","description":""},"RL":{"algorithm":" RL * 1 * 2.5 ","description":""},"TL":{"algorithm":" TL * 1 * 2.5 ","description":""}}},"VR":{"keyword":"Vulnerability Risk","name":"Vulnerability Risk","description":"Refers to the risk assessment of the most critical vulnerabilities on the critical penetration path of the drill in a single red-blue confrontation exercise.","vectors":{"VD":{"algorithm":" VD * 1 * 2.5 ","description":""},"VE":{"algorithm":" VE * 1 * 2.5 ","description":""},"VL":{"algorithm":" VL * 1 * 2.5 ","description":""},"VDW":{"algorithm":" VDW * 1 * 2.5 ","description":""}}},"TI":{"keyword":"Technical Impact","name":"Technical Impact","description":"Refers to the maximum impact on confidentiality, integrity and availability that may be caused by the rights or data obtained by the attacker.","vectors":{"LC":{"algorithm":" LC * 1 * 2.5 ","description":""},"LI":{"algorithm":" LI * 1 * 2.5 ","description":""},"LA":{"algorithm":" LA * 1 * 2.5 ","description":""}}},"EI":{"keyword":"Enterprise Impact","name":"Enterprise Impact","description":"Refers to the authority or data obtained by the attacker that may have the greatest impact on corporate reputation, economy and compliance.","vectors":{"FD":{"algorithm":" FD * 1 * 2.5 ","description":""},"RD":{"algorithm":" RD * 1 * 2.5 ","description":""},"CI":{"algorithm":" CI * 1 * 2.5 ","description":""}}},"BS":{"keyword":"Business Strength","name":"Business Strength","description":"Refers to the minimum professionalism of business personnel or systems and operations during an attack.","vectors":{"DLC":{"algorithm":" DLC * 1 * 2.5 ","description":""},"OLC":{"algorithm":" OLC * 1 * 2.5 ","description":""},"ESA":{"algorithm":" ESA * 1 * 2.5 ","description":""}}}},"finalScores":{"OE":{"keyword":"Offensive Energy","name":"Offensive Energy","description":"It is the effective output of the attacker in a single exercise, which can represent the level of the attacker in this exercise.","vectors":{"OS":{"algorithm":" OS * 1 ","description":"The offensive strength represents the highest level of the attacker\'s attack output in this red-blue confrontation. But other factor scores are needed to correct it: if a very advanced technique is used, it takes a lot of effort, but no effect is achieved, then it is equivalent to doing useless work in this exercise, which means that the offensive energy is very low."},"DS":{"algorithm":" DS * 1 ","description":"The introduction of the \\"defensive strength\\" factor is to correct the effective display of the \\"offensive strength\\" in terms of ability. Generally speaking, the stronger the defense is, the stronger the attack is on the premise of achieving the same goal; on the contrary, if the defender is weaker, the attacker can usually have less investment in order to achieve the goal. Offensive energy is not so great."},"EI":{"algorithm":" EI * 1 ","description":"\\"Enterprise Impact\\" is a measure of the effectiveness of an attacker\'s \\"work done\\". The more enterprise risks exposed in a single exercise, the stronger the attacker\'s energy; the less enterprise risks exposed in countermeasures, the lower the attacker\'s energy in the exercise."}}},"DE":{"keyword":"Defensive Energy","name":"Defensive Energy","description":"It is the effective output of the defender in a single exercise, and can represent the level of the defender in this exercise.","vectors":{"DS":{"algorithm":" DS * 1 ","description":"The defensive strength is generally the lower level of the defender\'s defensive ability output in this red-blue confrontation. But you can\'t simply think that \\"defensive strength\\" is the embodiment of defensive energy. Because no matter how strong the defense is, if the target is finally taken by the attacker, it still shows that the defense ability is low."},"VR":{"algorithm":" ( 10 - VR ) * 1 ","description":"The introduction of vulnerability risk is to correct the effective display of \\"defensive strength\\" in ability, which is negatively correlated with defensive energy. The higher the vulnerability risk, the lower the defensive energy. Even if the defensive strength is very strong, but a serious vulnerability risk is exposed on the critical path of the offense, it means that the defensive strength has not been fulfilled, and points should be deducted."},"EI":{"algorithm":" ( 10 - EI ) * 1 ","description":"Corporate influence is negatively correlated with defensive energy, the greater the corporate influence, the lower the defensive energy. Even if the defense is strong and the loopholes are small, it can still have a significant impact on the enterprise, indicating that the effective energy generated by the defense is not enough, and points should be deducted."}}},"BR":{"keyword":"Business Risk","name":"Business Risk","description":"It refers to the risk level of business exposure in terms of security, which can represent the security level of the participating business parties in this exercise.","vectors":{"TI":{"algorithm":" TI * 1 ","description":"The technical impact is mainly measured from the three elements of security: confidentiality, integrity and availability. The greater the technical impact of the business, the higher the risk of the business."},"EI":{"algorithm":" EI * 1 ","description":"Enterprise impact is closely related to business risks. If it can bring a greater impact on the enterprise, whether it is economic loss, loss of goodwill or compliance impact, it will affect the development of the enterprise to a large extent, and then affect the development of the business."},"BS":{"algorithm":" ( 10 - BS ) * 1 ","description":"Business strength is mainly reflected in the implementation of SDL or DevSecOps. If there is a problem, it will bring great obstacles to the promotion of security and the elimination of risks, which will cause major risks to the business. Therefore, business strength is negatively correlated with business risk score, and the lower the strength, the greater the risk."}}},"ER":{"keyword":"Enterprise Risk","name":"Enterprise Risk","description":"It refers to the degree of risk exposed by the enterprise in terms of security, which can represent the security level of the enterprise as a whole in this exercise.","vectors":{"DS":{"algorithm":" ( 10 - DS ) * 1 ","description":"Defensive strength is negatively correlated with corporate risk. If an enterprise does not invest much in security construction, it will generally directly affect its protection capability, detection capability and response capability, that is, its defensive strength. On the other hand, if the defensive strength of the enterprise is weak, it means that the enterprise is facing problems in safety construction or defensive team building, which will make the enterprise face more risks."},"VR":{"algorithm":" VR * 1 ","description":"If the key vulnerabilities on the penetration path are very easy to be discovered, exploited, and have great lethality, it generally means that the defense has a relatively large problem in the daily security operations, SDL or DevSecOps security process landing, and the risk of the enterprise Sex will increase."},"EI":{"algorithm":" EI * 1 ","description":"The \\"corporate impact\\" is more related to the normal operation, revenue and even life and death of the company, so it is related to corporate risks."}}}},"levels":[{"index":0,"name":"None","keyword":"None"},{"index":1,"name":"Low","keyword":"Low"},{"index":2,"name":"Low","keyword":"Low"},{"index":3,"name":"Low","keyword":"Low"},{"index":4,"name":"Medium","keyword":"Medium"},{"index":5,"name":"Medium","keyword":"Medium"},{"index":6,"name":"Medium","keyword":"Medium"},{"index":7,"name":"High","keyword":"High"},{"index":8,"name":"High","keyword":"High"},{"index":9,"name":"Extreme","keyword":"Extreme"},{"index":10,"name":"Extreme","keyword":"Extreme"}],"charts":{"data":{"OS":{"name":"Attacker Ability","plusmode":true,"factors":{"OL":1,"OD":1,"TR":1,"AL":1}},"DS":{"name":"Security Operation Ability","plusmode":true,"factors":{"PL":1,"DL":1,"RL":1,"TL":1,"ESA":1,"DLC":1,"OLC":1,"VD":-1,"VDW":-1,"CI":-1}}},"references":{"current":{"name":"Current Score","backgroundColor":"rgba(255, 99, 132, 0.5)","borderColor":"rgba(255, 99, 132, 0.5)"},"standardLevel":{"name":"Industry Average","backgroundColor":"rgba(132, 255, 99, 0.5)","borderColor":"rgba(132, 255, 99, 0.5)","vectorStr":"RTASS:0.3.2/OL:2/OD:2/TR:2/AL:2/PL:2/DL:2/RL:2/TL:2/VD:2/VE:3/VL:3/VDW:2/LC:3/LI:3/LA:3/FD:2/RD:2/CI:2/DLC:3/OLC:2/ESA:2/IRC:2/WC:2/VMEC:2/ATDC:2/SEC:2/PPC:2/TCC:2/LMC:2/GAT:2/GAC:2/GAA:2/IEMC:2/SUMC:2/TIBC:2/BSMC:2/ASMC:2/PSMC:2/NACC:2/ETTA:2/EHAA:2/PPAA:2/ITTA:2/EMA:2/EABA:2/TDR:2/TITR:2/THC:2/TDTR:2/TAC:2/IPTC:2/ATCC:2/DEC:2"},"highLevel":{"name":"Industry High Level","backgroundColor":"rgba(99, 132, 255, 0.5)","borderColor":"rgba(99, 132, 255, 0.5)","vectorStr":"RTASS:0.3.2/OL:3/OD:3/TR:3/AL:4/PL:3/DL:3/RL:3/TL:3/VD:1/VE:1/VL:1/VDW:1/LC:0/LI:0/LA:0/FD:0/RD:0/CI:0/DLC:4/OLC:4/ESA:4/IRC:3/WC:3/VMEC:3/ATDC:3/SEC:3/PPC:3/TCC:4/LMC:4/GAT:3/GAC:3/GAA:4/IEMC:3/SUMC:3/TIBC:3/BSMC:3/ASMC:3/PSMC:2/NACC:3/ETTA:3/EHAA:3/PPAA:2/ITTA:3/EMA:3/EABA:3/TDR:4/TITR:4/THC:4/TDTR:3/TAC:3/IPTC:3/ATCC:2/DEC:3"}}},"thanks":[{"name":"devils","url":"","email":"","description":"Thanks to devils for his contribution to the competency evaluation model."},{"name":"makato","url":"","email":"","description":"Thanks to makato for the comments on each rating item."},{"name":"vf3ng","url":"","email":"","description":"Thanks to vf3ng for metrics and comments on the accuracy of the framework evaluation."}],"references":[{"name":"OWASP","url":"https://owasp.org/www-community/OWASP_Risk_Rating_Methodology","description":"OWASP Risk Rating Methodology"},{"name":"FIRST CVSSv3","url":"https://www.first.org/cvss/v3.1/specification-document","description":"CVSSv3.1 Specification Document"},{"name":"Wikipedia","url":"https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System","description":"Common Vulnerability Scoring System"}]}'
        );
      },
      439: (t) => {
        "use strict";
        t.exports = JSON.parse(
          '{"maintainer":"Maintainer","collaborators":"Collaborators","background":"Background","changelog":"Change Log","license":"License","introduction":"Introduction","backgroundDesc":"Years ago, companies often assessed their own security by simply using \\"penetration testing\\" to find vulnerabilities in individual application systems. To assess the criticality of vulnerabilities, the National Infrastructure Advisory Council (NIAC) developed a Common Vulnerability Assessment System, CVSS, hosted by the Forum for Incident Response and Security Teams (FIRST). Based on the previous version, FIRST has continued to iterate the v2 and v3 versions. The hazard assessment criteria for a single vulnerability are more and more accurate and perfect, and are also used by major security organizations and vulnerability recording platforms. With the development of network security, the threats to the network are increasing day by day. By simulating the APT attack methods and behaviors of hackers, the red-blue confrontation exercise method to carry out comprehensive security assessment on enterprises has been widely adopted. Some organizational units have also developed some scoring systems in order to evaluate between attackers and defenders. However, this scoring system can only measure the difference between the attacker and the attacker, and between the defender and the defender. In the case of only one attacking team and one defending team, the problem is even more prominent: if the core system is breached, does it mean that the attacking team is strong or the defending team is weak? If the core system is not broken, is the attacking team weak or the defending team strong? This is very difficult to measure, and there is no mature system for evaluation in the industry. Therefore, JD.Army has developed a red-blue confrontation scoring framework for the actual combat exercise scenario based on years of cyber offensive and defensive exercises and red-blue confrontation experience, referring to CVSS and OWASP risk rating methods.","categoryIntro":"`RTASS consists of two categories, \\"${RTASS.factorCategories.CF.name}\\" and \\"${RTASS.factorCategories.BF.name}\\".`","categoryDesc":"`It consists of process factors and scores such as ${RTASS.factorCategories.CF.processScores.map(ps=>RTASS.processScores[ps].name).join(\', \')}.`","methods":"Methods","methodsDesc":"`Why must it be \\"critical path\\" and \\"highest\\", \\"lowest\\", \\"largest\\" and \\"most critical\\"? \\n\\nThis is because in a single red-blue confrontation, the attacker can adopt different strategies to form different attack paths, and use dozens or hundreds of different TTPs in the attack path. If these TTPs are measured in turn, it is obviously unrealistic and greatly increases the workload of the evaluation. \\n\\nSecurity follows the \\"short board principle\\" as well as the \\"long board principle\\" - the attacker does not need to ensure that every TTPs investment is the highest technical ability, as long as there are one or several attacks on the critical path High-level attacks may take down corporate targets. So we take the highest level of attack attackers invest in the critical path as a measure of their offensive prowess. \\n\\nObviously, we can also see that the strength of the attacker does not represent the total effective technical investment of the attacker in a single red-blue confrontation exercise. Let\'s take physics as an analogy: the maximum force a person exerts on an object does not represent the effective work the person does on the object. Therefore, in order to measure the \\"work\\" of the attacker, we introduce the concept of \\"offensive energy\\" to represent the total effective investment of the attacker in a single red-blue confrontation exercise, that is, the technical level of the attacker in this exercise. \\n\\nRTASS uses the evaluation factor to form ${Object.keys(RTASS.processScores).length} process scores, and the process scores are combined in different ways to form four different roles for the attacker, defender, business, and enterprise. Item final score: ${Object.values(RTASS.finalScores).map(fs=>fs.name).join(\', \')}. These ${Object.keys(RTASS.finalScores).length} items refer to the situation in a single exercise, so in different exercises, the score may be different. The scoring methods and factors will be described in detail below.`","finalScoresDesc":"fs.name+\'[\'+fsKey+\'] is calculated from \'+Object.keys(fs.vectors).length+\' process scores such as \'+Object.keys(fs.vectors).map(f=>RTASS.processScores[f].name+\'[\'+f+\']\').join(\', \')+\', \'+fs.description","finalScoresPS":"The above associations may change with the evolution of RTASS.","scoringDesc":"In this scoring framework, each scoring factor has a total of 5 scoring items from 0 to 4. The process score and final score: the lowest score is 0 points, and the highest score is 10 points. Among them, the distribution of the corresponding grades for each score is as follows:","scoringDescHeader":"| Score  | Level |","scoringDescPS":"Note: Some scoring factors in this framework, such as \\"vulnerability risk\\" and \\"enterprise impact\\", refer to the relevant factors in the OWASP risk rating method.","scoreFactor":"Score Factor","scoreAbility":"Score Ability","scoreAbilityDesc":"In order to be able to measure the scoring factor in more detail, RTASS developed the Plus version on the basis of the Base version, adding a more refined \\"ability factor\\" to the scoring factor. With the capability factor, RTASS can not only make a macro evaluation of the attackers, defenders, business parties and enterprises, but also indicate the strengths and weaknesses of their capability points and the direction that needs to be further improved in a more detailed manner. As of now, the following scoring factors have capability options:","processScoreDesc":"fc.name +\' consists of \'+fc.processScores.length+\' parts, such as \'+fc.processScores.map(ps=>RTASS.processScores[ps].name).join(\', \')+\'.\'","processScoringDesc":"RTASS.processScores[ps].name+\' is calculated from \'+Object.keys(psVectors).length+\' factor scores such as \'+Object.keys(psVectors).map(f=>RTASS.factors[f].name+\'[\'+f+\']\').join(\', \')+\'. The calculation algorithm is: \'","factorDesc":"f.name+\' mainly used for evaluate when \'+f.description","factorScoreDesc":"f.name + \' consists of \'+ Object.keys(f.vectors).length + \' parts, such as \' +Object.keys(f.vectors).map(aKey=>RTASS.abilities[aKey].name+\'[\'+aKey+\']\').join(\', \')+\'. The calculation algorithm is: \'","abilityDesc":"a.name+\' mainly used for evaluate when \'+a.description","vectorString":"Vector String","vectorStringDesc":"With reference to the CVSS scoring framework, RTASS also uses \\"vector strings\\" to record the scoring process and to transmit RTASS indicator information. The RTASS vector string starts with the label \\"RTASS:\\" and the digital representation of the current version (for example 1.0.0). The indicator information appears in the form of a set of indicators, each indicator is preceded by a forward slash \\"/\\" as a separator. Each indicator is composed of an abbreviated indicator name, colon, and indicator value. The abbreviations are defined earlier in this specification (in parentheses after each factor name) and are summarized in the table below.","factor":"Factor","ability":"Ability","vectorStringDescFactorHeader":"| Factor Name  | Possible Value |","vectorStringDescAbilityHeader":"| Ability Name | Possible Value |","vectorStringDescPS":"Note: In the RTASS Base scoring mode, the ability factor is not required; in the RTASS Plus scoring mode, the ability factor is required.","vectorStringExample":" Mode ector string Example:","vectorStringExamplePS":"The vector string should contain all the indicators shown in the table above, accepting any order of measurement. If the vector string contains the same metric multiple times, the last metric shall prevail.","oneThingAbout":"One Thing About RTASS","ontThingAboutDesc":"In the RTASS framework, the process score is calculated through the basic factors, and then the final score is calculated through the process score. The algorithm reserves space for future expansion, but in the case of insufficient data at this stage, the modulus of the factor is basically 1.\\n\\nIn solving this problem, CVSS adopted the method of manually constructing a set of lookup tables corresponding to the severity of real vulnerabilities through the CVSS Special Interest Group (SIG), and then adjusting the parameters in turn. Finally, it is ensured that the deviation between the manual evaluation vulnerability score and the CVSS framework evaluation score is less than 0.5.\\n\\nDue to the difference between red and blue confrontation exercises and vulnerability, it is currently impossible to adjust parameters through a large number of ready-made samples. However, we will continue to collect new samples, through manual evaluation and reference to updated methodology, to make the RTASS score more accurate. This also requires more participation and strong support from you who read this specification.","collaborateAndContribute":"Collaborate And Contribute","collaborateAndContributeDesc":"This framework uses JSON format for system description, see \\"/src/RTASS.json\\" file for details, where:\\n\\n- The ability score is placed in the \\"abilities\\" object, including Chinese and English from 0 to 4 for each factor Score description. \\n- Scoring factors are placed in the \\"factors\\" object, including a description of each factor\'s scores in Chinese and English from 0 to 4. \\n- Process scores are described by \\"processScores\\", where \\"algorithm\\" is the scoring algorithm. \\n- Final scores are described by \\"finalScores\\", where \\"algorithm\\" is the scoring algorithm. \\n- The \\"levels\\" object stores the correspondence between the scores and the extremes, highs, mediums, and lows. \\n- The \\"factorGroups\\" object stores the corresponding relationship between the two groups of offensive and defensive factors and business factors and the process score. \\n\\nCollaborators can cooperate with us to develop the system framework by modifying the description of each scoring factor and scoring algorithm in the RTASS.json file.","thanks":"Thanks","reference":"References","onlineCalculator":"Online Calculator"}'
        );
      },
      384: (t) => {
        "use strict";
        t.exports = JSON.parse(
          '{"language":"English","reset":"Reset","inThisAssessment":"During this Red Team Assessment: ","processingScore":"Processing score:","inProcessingScore":"in this processing score,","current":"This Time"}'
        );
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(t) {
    var e = __webpack_module_cache__[t];
    if (void 0 !== e) return e.exports;
    var n = (__webpack_module_cache__[t] = { id: t, exports: {} });
    return __webpack_modules__[t](n, n.exports, __webpack_require__), n.exports;
  }
  (__webpack_require__.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return __webpack_require__.d(e, { a: e }), e;
  }),
    (__webpack_require__.d = (t, e) => {
      for (var n in e)
        __webpack_require__.o(e, n) &&
          !__webpack_require__.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = (t, e) =>
      Object.prototype.hasOwnProperty.call(t, e)),
    (__webpack_require__.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    });
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    var t = __webpack_require__(199);
    function e(t, e) {
      const n = Object.create(null),
        i = t.split(",");
      for (let t = 0; t < i.length; t++) n[i[t]] = !0;
      return e ? (t) => !!n[t.toLowerCase()] : (t) => !!n[t];
    }
    const n = e(
        "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"
      ),
      i = e(
        "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
      );
    function o(t) {
      return !!t || "" === t;
    }
    function s(t) {
      if (A(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
          const i = t[n],
            o = O(i) ? l(i) : s(i);
          if (o) for (const t in o) e[t] = o[t];
        }
        return e;
      }
      return O(t) || L(t) ? t : void 0;
    }
    const r = /;(?![^(]*\))/g,
      a = /:(.+)/;
    function l(t) {
      const e = {};
      return (
        t.split(r).forEach((t) => {
          if (t) {
            const n = t.split(a);
            n.length > 1 && (e[n[0].trim()] = n[1].trim());
          }
        }),
        e
      );
    }
    function c(t) {
      let e = "";
      if (O(t)) e = t;
      else if (A(t))
        for (let n = 0; n < t.length; n++) {
          const i = c(t[n]);
          i && (e += i + " ");
        }
      else if (L(t)) for (const n in t) t[n] && (e += n + " ");
      return e.trim();
    }
    const h = e(
        "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"
      ),
      d = e(
        "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"
      ),
      u = e(
        "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"
      );
    function p(t, e) {
      if (t === e) return !0;
      let n = D(t),
        i = D(e);
      if (n || i) return !(!n || !i) && t.getTime() === e.getTime();
      if (((n = A(t)), (i = A(e)), n || i))
        return (
          !(!n || !i) &&
          (function (t, e) {
            if (t.length !== e.length) return !1;
            let n = !0;
            for (let i = 0; n && i < t.length; i++) n = p(t[i], e[i]);
            return n;
          })(t, e)
        );
      if (((n = L(t)), (i = L(e)), n || i)) {
        if (!n || !i) return !1;
        if (Object.keys(t).length !== Object.keys(e).length) return !1;
        for (const n in t) {
          const i = t.hasOwnProperty(n),
            o = e.hasOwnProperty(n);
          if ((i && !o) || (!i && o) || !p(t[n], e[n])) return !1;
        }
      }
      return String(t) === String(e);
    }
    function f(t, e) {
      return t.findIndex((t) => p(t, e));
    }
    const g = (t, e) =>
        e && e.__v_isRef
          ? g(t, e.value)
          : M(e)
          ? {
              [`Map(${e.size})`]: [...e.entries()].reduce(
                (t, [e, n]) => ((t[`${e} =>`] = n), t),
                {}
              ),
            }
          : P(e)
          ? { [`Set(${e.size})`]: [...e.values()] }
          : !L(e) || A(e) || N(e)
          ? e
          : String(e),
      m = {},
      b = [],
      y = () => {},
      v = () => !1,
      x = /^on[^a-z]/,
      _ = (t) => x.test(t),
      w = (t) => t.startsWith("onUpdate:"),
      k = Object.assign,
      S = (t, e) => {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      },
      C = Object.prototype.hasOwnProperty,
      T = (t, e) => C.call(t, e),
      A = Array.isArray,
      M = (t) => "[object Map]" === F(t),
      P = (t) => "[object Set]" === F(t),
      D = (t) => t instanceof Date,
      R = (t) => "function" == typeof t,
      O = (t) => "string" == typeof t,
      E = (t) => "symbol" == typeof t,
      L = (t) => null !== t && "object" == typeof t,
      I = (t) => L(t) && R(t.then) && R(t.catch),
      V = Object.prototype.toString,
      F = (t) => V.call(t),
      N = (t) => "[object Object]" === F(t),
      B = (t) =>
        O(t) && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t,
      j = e(
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
      ),
      z = e(
        "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
      ),
      $ = (t) => {
        const e = Object.create(null);
        return (n) => e[n] || (e[n] = t(n));
      },
      W = /-(\w)/g,
      H = $((t) => t.replace(W, (t, e) => (e ? e.toUpperCase() : ""))),
      U = /\B([A-Z])/g,
      q = $((t) => t.replace(U, "-$1").toLowerCase()),
      G = $((t) => t.charAt(0).toUpperCase() + t.slice(1)),
      Y = $((t) => (t ? `on${G(t)}` : "")),
      K = (t, e) => !Object.is(t, e),
      J = (t, e) => {
        for (let n = 0; n < t.length; n++) t[n](e);
      },
      X = (t, e, n) => {
        Object.defineProperty(t, e, {
          configurable: !0,
          enumerable: !1,
          value: n,
        });
      },
      Z = (t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      };
    let Q, tt;
    class et {
      constructor(t = !1) {
        (this.active = !0),
          (this.effects = []),
          (this.cleanups = []),
          !t &&
            tt &&
            ((this.parent = tt),
            (this.index = (tt.scopes || (tt.scopes = [])).push(this) - 1));
      }
      run(t) {
        if (this.active)
          try {
            return (tt = this), t();
          } finally {
            tt = this.parent;
          }
      }
      on() {
        tt = this;
      }
      off() {
        tt = this.parent;
      }
      stop(t) {
        if (this.active) {
          let e, n;
          for (e = 0, n = this.effects.length; e < n; e++)
            this.effects[e].stop();
          for (e = 0, n = this.cleanups.length; e < n; e++) this.cleanups[e]();
          if (this.scopes)
            for (e = 0, n = this.scopes.length; e < n; e++)
              this.scopes[e].stop(!0);
          if (this.parent && !t) {
            const t = this.parent.scopes.pop();
            t &&
              t !== this &&
              ((this.parent.scopes[this.index] = t), (t.index = this.index));
          }
          this.active = !1;
        }
      }
    }
    function nt(t, e = tt) {
      e && e.active && e.effects.push(t);
    }
    const it = (t) => {
        const e = new Set(t);
        return (e.w = 0), (e.n = 0), e;
      },
      ot = (t) => (t.w & ct) > 0,
      st = (t) => (t.n & ct) > 0,
      rt = new WeakMap();
    let at,
      lt = 0,
      ct = 1;
    const ht = Symbol(""),
      dt = Symbol("");
    class ut {
      constructor(t, e = null, n) {
        (this.fn = t),
          (this.scheduler = e),
          (this.active = !0),
          (this.deps = []),
          (this.parent = void 0),
          nt(this, n);
      }
      run() {
        if (!this.active) return this.fn();
        let t = at,
          e = ft;
        for (; t; ) {
          if (t === this) return;
          t = t.parent;
        }
        try {
          return (
            (this.parent = at),
            (at = this),
            (ft = !0),
            (ct = 1 << ++lt),
            lt <= 30
              ? (({ deps: t }) => {
                  if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= ct;
                })(this)
              : pt(this),
            this.fn()
          );
        } finally {
          lt <= 30 &&
            ((t) => {
              const { deps: e } = t;
              if (e.length) {
                let n = 0;
                for (let i = 0; i < e.length; i++) {
                  const o = e[i];
                  ot(o) && !st(o) ? o.delete(t) : (e[n++] = o),
                    (o.w &= ~ct),
                    (o.n &= ~ct);
                }
                e.length = n;
              }
            })(this),
            (ct = 1 << --lt),
            (at = this.parent),
            (ft = e),
            (this.parent = void 0);
        }
      }
      stop() {
        this.active &&
          (pt(this), this.onStop && this.onStop(), (this.active = !1));
      }
    }
    function pt(t) {
      const { deps: e } = t;
      if (e.length) {
        for (let n = 0; n < e.length; n++) e[n].delete(t);
        e.length = 0;
      }
    }
    let ft = !0;
    const gt = [];
    function mt() {
      gt.push(ft), (ft = !1);
    }
    function bt() {
      const t = gt.pop();
      ft = void 0 === t || t;
    }
    function yt(t, e, n) {
      if (ft && at) {
        let e = rt.get(t);
        e || rt.set(t, (e = new Map()));
        let i = e.get(n);
        i || e.set(n, (i = it())), vt(i);
      }
    }
    function vt(t, e) {
      let n = !1;
      lt <= 30 ? st(t) || ((t.n |= ct), (n = !ot(t))) : (n = !t.has(at)),
        n && (t.add(at), at.deps.push(t));
    }
    function xt(t, e, n, i, o, s) {
      const r = rt.get(t);
      if (!r) return;
      let a = [];
      if ("clear" === e) a = [...r.values()];
      else if ("length" === n && A(t))
        r.forEach((t, e) => {
          ("length" === e || e >= i) && a.push(t);
        });
      else
        switch ((void 0 !== n && a.push(r.get(n)), e)) {
          case "add":
            A(t)
              ? B(n) && a.push(r.get("length"))
              : (a.push(r.get(ht)), M(t) && a.push(r.get(dt)));
            break;
          case "delete":
            A(t) || (a.push(r.get(ht)), M(t) && a.push(r.get(dt)));
            break;
          case "set":
            M(t) && a.push(r.get(ht));
        }
      if (1 === a.length) a[0] && _t(a[0]);
      else {
        const t = [];
        for (const e of a) e && t.push(...e);
        _t(it(t));
      }
    }
    function _t(t, e) {
      for (const e of A(t) ? t : [...t])
        (e !== at || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
    }
    const wt = e("__proto__,__v_isRef,__isVue"),
      kt = new Set(
        Object.getOwnPropertyNames(Symbol)
          .map((t) => Symbol[t])
          .filter(E)
      ),
      St = Pt(),
      Ct = Pt(!1, !0),
      Tt = Pt(!0),
      At = Pt(!0, !0),
      Mt = (function () {
        const t = {};
        return (
          ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
            t[e] = function (...t) {
              const n = fe(this);
              for (let t = 0, e = this.length; t < e; t++) yt(n, 0, t + "");
              const i = n[e](...t);
              return -1 === i || !1 === i ? n[e](...t.map(fe)) : i;
            };
          }),
          ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
            t[e] = function (...t) {
              mt();
              const n = fe(this)[e].apply(this, t);
              return bt(), n;
            };
          }),
          t
        );
      })();
    function Pt(t = !1, e = !1) {
      return function (n, i, o) {
        if ("__v_isReactive" === i) return !t;
        if ("__v_isReadonly" === i) return t;
        if ("__v_isShallow" === i) return e;
        if ("__v_raw" === i && o === (t ? (e ? se : oe) : e ? ie : ne).get(n))
          return n;
        const s = A(n);
        if (!t && s && T(Mt, i)) return Reflect.get(Mt, i, o);
        const r = Reflect.get(n, i, o);
        return (E(i) ? kt.has(i) : wt(i))
          ? r
          : (t || yt(n, 0, i),
            e
              ? r
              : xe(r)
              ? s && B(i)
                ? r
                : r.value
              : L(r)
              ? t
                ? le(r)
                : re(r)
              : r);
      };
    }
    function Dt(t = !1) {
      return function (e, n, i, o) {
        let s = e[n];
        if (de(s) && xe(s) && !xe(i)) return !1;
        if (
          !t &&
          !de(i) &&
          (ue(i) || ((i = fe(i)), (s = fe(s))), !A(e) && xe(s) && !xe(i))
        )
          return (s.value = i), !0;
        const r = A(e) && B(n) ? Number(n) < e.length : T(e, n),
          a = Reflect.set(e, n, i, o);
        return (
          e === fe(o) &&
            (r ? K(i, s) && xt(e, "set", n, i) : xt(e, "add", n, i)),
          a
        );
      };
    }
    const Rt = {
        get: St,
        set: Dt(),
        deleteProperty: function (t, e) {
          const n = T(t, e),
            i = Reflect.deleteProperty(t, e);
          return i && n && xt(t, "delete", e, void 0), i;
        },
        has: function (t, e) {
          const n = Reflect.has(t, e);
          return (E(e) && kt.has(e)) || yt(t, 0, e), n;
        },
        ownKeys: function (t) {
          return yt(t, 0, A(t) ? "length" : ht), Reflect.ownKeys(t);
        },
      },
      Ot = { get: Tt, set: (t, e) => !0, deleteProperty: (t, e) => !0 },
      Et = k({}, Rt, { get: Ct, set: Dt(!0) }),
      Lt = k({}, Ot, { get: At }),
      It = (t) => t,
      Vt = (t) => Reflect.getPrototypeOf(t);
    function Ft(t, e, n = !1, i = !1) {
      const o = fe((t = t.__v_raw)),
        s = fe(e);
      e !== s && !n && yt(o, 0, e), !n && yt(o, 0, s);
      const { has: r } = Vt(o),
        a = i ? It : n ? be : me;
      return r.call(o, e)
        ? a(t.get(e))
        : r.call(o, s)
        ? a(t.get(s))
        : void (t !== o && t.get(e));
    }
    function Nt(t, e = !1) {
      const n = this.__v_raw,
        i = fe(n),
        o = fe(t);
      return (
        t !== o && !e && yt(i, 0, t),
        !e && yt(i, 0, o),
        t === o ? n.has(t) : n.has(t) || n.has(o)
      );
    }
    function Bt(t, e = !1) {
      return (t = t.__v_raw), !e && yt(fe(t), 0, ht), Reflect.get(t, "size", t);
    }
    function jt(t) {
      t = fe(t);
      const e = fe(this);
      return Vt(e).has.call(e, t) || (e.add(t), xt(e, "add", t, t)), this;
    }
    function zt(t, e) {
      e = fe(e);
      const n = fe(this),
        { has: i, get: o } = Vt(n);
      let s = i.call(n, t);
      s || ((t = fe(t)), (s = i.call(n, t)));
      const r = o.call(n, t);
      return (
        n.set(t, e),
        s ? K(e, r) && xt(n, "set", t, e) : xt(n, "add", t, e),
        this
      );
    }
    function $t(t) {
      const e = fe(this),
        { has: n, get: i } = Vt(e);
      let o = n.call(e, t);
      o || ((t = fe(t)), (o = n.call(e, t))), i && i.call(e, t);
      const s = e.delete(t);
      return o && xt(e, "delete", t, void 0), s;
    }
    function Wt() {
      const t = fe(this),
        e = 0 !== t.size,
        n = t.clear();
      return e && xt(t, "clear", void 0, void 0), n;
    }
    function Ht(t, e) {
      return function (n, i) {
        const o = this,
          s = o.__v_raw,
          r = fe(s),
          a = e ? It : t ? be : me;
        return (
          !t && yt(r, 0, ht), s.forEach((t, e) => n.call(i, a(t), a(e), o))
        );
      };
    }
    function Ut(t, e, n) {
      return function (...i) {
        const o = this.__v_raw,
          s = fe(o),
          r = M(s),
          a = "entries" === t || (t === Symbol.iterator && r),
          l = "keys" === t && r,
          c = o[t](...i),
          h = n ? It : e ? be : me;
        return (
          !e && yt(s, 0, l ? dt : ht),
          {
            next() {
              const { value: t, done: e } = c.next();
              return e
                ? { value: t, done: e }
                : { value: a ? [h(t[0]), h(t[1])] : h(t), done: e };
            },
            [Symbol.iterator]() {
              return this;
            },
          }
        );
      };
    }
    function qt(t) {
      return function (...e) {
        return "delete" !== t && this;
      };
    }
    const [Gt, Yt, Kt, Jt] = (function () {
      const t = {
          get(t) {
            return Ft(this, t);
          },
          get size() {
            return Bt(this);
          },
          has: Nt,
          add: jt,
          set: zt,
          delete: $t,
          clear: Wt,
          forEach: Ht(!1, !1),
        },
        e = {
          get(t) {
            return Ft(this, t, !1, !0);
          },
          get size() {
            return Bt(this);
          },
          has: Nt,
          add: jt,
          set: zt,
          delete: $t,
          clear: Wt,
          forEach: Ht(!1, !0),
        },
        n = {
          get(t) {
            return Ft(this, t, !0);
          },
          get size() {
            return Bt(this, !0);
          },
          has(t) {
            return Nt.call(this, t, !0);
          },
          add: qt("add"),
          set: qt("set"),
          delete: qt("delete"),
          clear: qt("clear"),
          forEach: Ht(!0, !1),
        },
        i = {
          get(t) {
            return Ft(this, t, !0, !0);
          },
          get size() {
            return Bt(this, !0);
          },
          has(t) {
            return Nt.call(this, t, !0);
          },
          add: qt("add"),
          set: qt("set"),
          delete: qt("delete"),
          clear: qt("clear"),
          forEach: Ht(!0, !0),
        };
      return (
        ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
          (t[o] = Ut(o, !1, !1)),
            (n[o] = Ut(o, !0, !1)),
            (e[o] = Ut(o, !1, !0)),
            (i[o] = Ut(o, !0, !0));
        }),
        [t, n, e, i]
      );
    })();
    function Xt(t, e) {
      const n = e ? (t ? Jt : Kt) : t ? Yt : Gt;
      return (e, i, o) =>
        "__v_isReactive" === i
          ? !t
          : "__v_isReadonly" === i
          ? t
          : "__v_raw" === i
          ? e
          : Reflect.get(T(n, i) && i in e ? n : e, i, o);
    }
    const Zt = { get: Xt(!1, !1) },
      Qt = { get: Xt(!1, !0) },
      te = { get: Xt(!0, !1) },
      ee = { get: Xt(!0, !0) },
      ne = new WeakMap(),
      ie = new WeakMap(),
      oe = new WeakMap(),
      se = new WeakMap();
    function re(t) {
      return de(t) ? t : ce(t, !1, Rt, Zt, ne);
    }
    function ae(t) {
      return ce(t, !1, Et, Qt, ie);
    }
    function le(t) {
      return ce(t, !0, Ot, te, oe);
    }
    function ce(t, e, n, i, o) {
      if (!L(t)) return t;
      if (t.__v_raw && (!e || !t.__v_isReactive)) return t;
      const s = o.get(t);
      if (s) return s;
      const r = (function (t) {
        return t.__v_skip || !Object.isExtensible(t)
          ? 0
          : (function (t) {
              switch (t) {
                case "Object":
                case "Array":
                  return 1;
                case "Map":
                case "Set":
                case "WeakMap":
                case "WeakSet":
                  return 2;
                default:
                  return 0;
              }
            })(((t) => F(t).slice(8, -1))(t));
      })(t);
      if (0 === r) return t;
      const a = new Proxy(t, 2 === r ? i : n);
      return o.set(t, a), a;
    }
    function he(t) {
      return de(t) ? he(t.__v_raw) : !(!t || !t.__v_isReactive);
    }
    function de(t) {
      return !(!t || !t.__v_isReadonly);
    }
    function ue(t) {
      return !(!t || !t.__v_isShallow);
    }
    function pe(t) {
      return he(t) || de(t);
    }
    function fe(t) {
      const e = t && t.__v_raw;
      return e ? fe(e) : t;
    }
    function ge(t) {
      return X(t, "__v_skip", !0), t;
    }
    const me = (t) => (L(t) ? re(t) : t),
      be = (t) => (L(t) ? le(t) : t);
    function ye(t) {
      ft && at && vt((t = fe(t)).dep || (t.dep = it()));
    }
    function ve(t, e) {
      (t = fe(t)).dep && _t(t.dep);
    }
    function xe(t) {
      return !(!t || !0 !== t.__v_isRef);
    }
    function _e(t) {
      return we(t, !1);
    }
    function we(t, e) {
      return xe(t) ? t : new ke(t, e);
    }
    class ke {
      constructor(t, e) {
        (this.__v_isShallow = e),
          (this.dep = void 0),
          (this.__v_isRef = !0),
          (this._rawValue = e ? t : fe(t)),
          (this._value = e ? t : me(t));
      }
      get value() {
        return ye(this), this._value;
      }
      set value(t) {
        (t = this.__v_isShallow ? t : fe(t)),
          K(t, this._rawValue) &&
            ((this._rawValue = t),
            (this._value = this.__v_isShallow ? t : me(t)),
            ve(this));
      }
    }
    function Se(t) {
      return xe(t) ? t.value : t;
    }
    const Ce = {
      get: (t, e, n) => Se(Reflect.get(t, e, n)),
      set: (t, e, n, i) => {
        const o = t[e];
        return xe(o) && !xe(n) ? ((o.value = n), !0) : Reflect.set(t, e, n, i);
      },
    };
    function Te(t) {
      return he(t) ? t : new Proxy(t, Ce);
    }
    class Ae {
      constructor(t) {
        (this.dep = void 0), (this.__v_isRef = !0);
        const { get: e, set: n } = t(
          () => ye(this),
          () => ve(this)
        );
        (this._get = e), (this._set = n);
      }
      get value() {
        return this._get();
      }
      set value(t) {
        this._set(t);
      }
    }
    class Me {
      constructor(t, e, n) {
        (this._object = t),
          (this._key = e),
          (this._defaultValue = n),
          (this.__v_isRef = !0);
      }
      get value() {
        const t = this._object[this._key];
        return void 0 === t ? this._defaultValue : t;
      }
      set value(t) {
        this._object[this._key] = t;
      }
    }
    function Pe(t, e, n) {
      const i = t[e];
      return xe(i) ? i : new Me(t, e, n);
    }
    class De {
      constructor(t, e, n, i) {
        (this._setter = e),
          (this.dep = void 0),
          (this.__v_isRef = !0),
          (this._dirty = !0),
          (this.effect = new ut(t, () => {
            this._dirty || ((this._dirty = !0), ve(this));
          })),
          (this.effect.computed = this),
          (this.effect.active = this._cacheable = !i),
          (this.__v_isReadonly = n);
      }
      get value() {
        const t = fe(this);
        return (
          ye(t),
          (!t._dirty && t._cacheable) ||
            ((t._dirty = !1), (t._value = t.effect.run())),
          t._value
        );
      }
      set value(t) {
        this._setter(t);
      }
    }
    const Re = [];
    function Oe(t, ...e) {
      mt();
      const n = Re.length ? Re[Re.length - 1].component : null,
        i = n && n.appContext.config.warnHandler,
        o = (function () {
          let t = Re[Re.length - 1];
          if (!t) return [];
          const e = [];
          for (; t; ) {
            const n = e[0];
            n && n.vnode === t
              ? n.recurseCount++
              : e.push({ vnode: t, recurseCount: 0 });
            const i = t.component && t.component.parent;
            t = i && i.vnode;
          }
          return e;
        })();
      if (i)
        Ie(i, n, 11, [
          t + e.join(""),
          n && n.proxy,
          o.map(({ vnode: t }) => `at <${ns(n, t.type)}>`).join("\n"),
          o,
        ]);
      else {
        const n = [`[Vue warn]: ${t}`, ...e];
        o.length &&
          n.push(
            "\n",
            ...(function (t) {
              const e = [];
              return (
                t.forEach((t, n) => {
                  e.push(
                    ...(0 === n ? [] : ["\n"]),
                    ...(function ({ vnode: t, recurseCount: e }) {
                      const n = e > 0 ? `... (${e} recursive calls)` : "",
                        i = ` at <${ns(
                          t.component,
                          t.type,
                          !!t.component && null == t.component.parent
                        )}`,
                        o = ">" + n;
                      return t.props ? [i, ...Ee(t.props), o] : [i + o];
                    })(t)
                  );
                }),
                e
              );
            })(o)
          ),
          console.warn(...n);
      }
      bt();
    }
    function Ee(t) {
      const e = [],
        n = Object.keys(t);
      return (
        n.slice(0, 3).forEach((n) => {
          e.push(...Le(n, t[n]));
        }),
        n.length > 3 && e.push(" ..."),
        e
      );
    }
    function Le(t, e, n) {
      return O(e)
        ? ((e = JSON.stringify(e)), n ? e : [`${t}=${e}`])
        : "number" == typeof e || "boolean" == typeof e || null == e
        ? n
          ? e
          : [`${t}=${e}`]
        : xe(e)
        ? ((e = Le(t, fe(e.value), !0)), n ? e : [`${t}=Ref<`, e, ">"])
        : R(e)
        ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`]
        : ((e = fe(e)), n ? e : [`${t}=`, e]);
    }
    function Ie(t, e, n, i) {
      let o;
      try {
        o = i ? t(...i) : t();
      } catch (t) {
        Fe(t, e, n);
      }
      return o;
    }
    function Ve(t, e, n, i) {
      if (R(t)) {
        const o = Ie(t, e, n, i);
        return (
          o &&
            I(o) &&
            o.catch((t) => {
              Fe(t, e, n);
            }),
          o
        );
      }
      const o = [];
      for (let s = 0; s < t.length; s++) o.push(Ve(t[s], e, n, i));
      return o;
    }
    function Fe(t, e, n, i = !0) {
      if (e) {
        let i = e.parent;
        const o = e.proxy,
          s = n;
        for (; i; ) {
          const e = i.ec;
          if (e)
            for (let n = 0; n < e.length; n++) if (!1 === e[n](t, o, s)) return;
          i = i.parent;
        }
        const r = e.appContext.config.errorHandler;
        if (r) return void Ie(r, null, 10, [t, o, s]);
      }
      !(function (t, e, n, i = !0) {
        console.error(t);
      })(t, 0, 0, i);
    }
    let Ne = !1,
      Be = !1;
    const je = [];
    let ze = 0;
    const $e = [];
    let We = null,
      He = 0;
    const Ue = [];
    let qe = null,
      Ge = 0;
    const Ye = Promise.resolve();
    let Ke = null,
      Je = null;
    function Xe(t) {
      const e = Ke || Ye;
      return t ? e.then(this ? t.bind(this) : t) : e;
    }
    function Ze(t) {
      (je.length && je.includes(t, Ne && t.allowRecurse ? ze + 1 : ze)) ||
        t === Je ||
        (null == t.id
          ? je.push(t)
          : je.splice(
              (function (t) {
                let e = ze + 1,
                  n = je.length;
                for (; e < n; ) {
                  const i = (e + n) >>> 1;
                  sn(je[i]) < t ? (e = i + 1) : (n = i);
                }
                return e;
              })(t.id),
              0,
              t
            ),
        Qe());
    }
    function Qe() {
      Ne || Be || ((Be = !0), (Ke = Ye.then(rn)));
    }
    function tn(t, e, n, i) {
      A(t)
        ? n.push(...t)
        : (e && e.includes(t, t.allowRecurse ? i + 1 : i)) || n.push(t),
        Qe();
    }
    function en(t) {
      tn(t, qe, Ue, Ge);
    }
    function nn(t, e = null) {
      if ($e.length) {
        for (
          Je = e, We = [...new Set($e)], $e.length = 0, He = 0;
          He < We.length;
          He++
        )
          We[He]();
        (We = null), (He = 0), (Je = null), nn(t, e);
      }
    }
    function on(t) {
      if (Ue.length) {
        const t = [...new Set(Ue)];
        if (((Ue.length = 0), qe)) return void qe.push(...t);
        for (
          qe = t, qe.sort((t, e) => sn(t) - sn(e)), Ge = 0;
          Ge < qe.length;
          Ge++
        )
          qe[Ge]();
        (qe = null), (Ge = 0);
      }
    }
    const sn = (t) => (null == t.id ? 1 / 0 : t.id);
    function rn(t) {
      (Be = !1), (Ne = !0), nn(t), je.sort((t, e) => sn(t) - sn(e));
      try {
        for (ze = 0; ze < je.length; ze++) {
          const t = je[ze];
          t && !1 !== t.active && Ie(t, null, 14);
        }
      } finally {
        (ze = 0),
          (je.length = 0),
          on(),
          (Ne = !1),
          (Ke = null),
          (je.length || $e.length || Ue.length) && rn(t);
      }
    }
    let an,
      ln = [];
    function cn(t, e, ...n) {
      const i = t.vnode.props || m;
      let o = n;
      const s = e.startsWith("update:"),
        r = s && e.slice(7);
      if (r && r in i) {
        const t = `${"modelValue" === r ? "model" : r}Modifiers`,
          { number: e, trim: s } = i[t] || m;
        s ? (o = n.map((t) => t.trim())) : e && (o = n.map(Z));
      }
      let a,
        l = i[(a = Y(e))] || i[(a = Y(H(e)))];
      !l && s && (l = i[(a = Y(q(e)))]), l && Ve(l, t, 6, o);
      const c = i[a + "Once"];
      if (c) {
        if (t.emitted) {
          if (t.emitted[a]) return;
        } else t.emitted = {};
        (t.emitted[a] = !0), Ve(c, t, 6, o);
      }
    }
    function hn(t, e, n = !1) {
      const i = e.emitsCache,
        o = i.get(t);
      if (void 0 !== o) return o;
      const s = t.emits;
      let r = {},
        a = !1;
      if (!R(t)) {
        const i = (t) => {
          const n = hn(t, e, !0);
          n && ((a = !0), k(r, n));
        };
        !n && e.mixins.length && e.mixins.forEach(i),
          t.extends && i(t.extends),
          t.mixins && t.mixins.forEach(i);
      }
      return s || a
        ? (A(s) ? s.forEach((t) => (r[t] = null)) : k(r, s), i.set(t, r), r)
        : (i.set(t, null), null);
    }
    function dn(t, e) {
      return (
        !(!t || !_(e)) &&
        ((e = e.slice(2).replace(/Once$/, "")),
        T(t, e[0].toLowerCase() + e.slice(1)) || T(t, q(e)) || T(t, e))
      );
    }
    let un = null,
      pn = null;
    function fn(t) {
      const e = un;
      return (un = t), (pn = (t && t.type.__scopeId) || null), e;
    }
    function gn(t, e = un, n) {
      if (!e) return t;
      if (t._n) return t;
      const i = (...n) => {
        i._d && mo(-1);
        const o = fn(e),
          s = t(...n);
        return fn(o), i._d && mo(1), s;
      };
      return (i._n = !0), (i._c = !0), (i._d = !0), i;
    }
    function mn(t) {
      const {
        type: e,
        vnode: n,
        proxy: i,
        withProxy: o,
        props: s,
        propsOptions: [r],
        slots: a,
        attrs: l,
        emit: c,
        render: h,
        renderCache: d,
        data: u,
        setupState: p,
        ctx: f,
        inheritAttrs: g,
      } = t;
      let m, b;
      const y = fn(t);
      try {
        if (4 & n.shapeFlag) {
          const t = o || i;
          (m = Po(h.call(t, t, d, s, p, u, f))), (b = l);
        } else
          (m = Po(e(s, e.length > 1 ? { attrs: l, slots: a, emit: c } : null))),
            (b = e.props ? l : bn(l));
      } catch (e) {
        (ho.length = 0), Fe(e, t, 1), (m = Co(lo));
      }
      let v = m;
      if (b && !1 !== g) {
        const t = Object.keys(b),
          { shapeFlag: e } = v;
        t.length && 7 & e && (r && t.some(w) && (b = yn(b, r)), (v = Ao(v, b)));
      }
      return (
        n.dirs && (v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs),
        n.transition && (v.transition = n.transition),
        (m = v),
        fn(y),
        m
      );
    }
    const bn = (t) => {
        let e;
        for (const n in t)
          ("class" === n || "style" === n || _(n)) &&
            ((e || (e = {}))[n] = t[n]);
        return e;
      },
      yn = (t, e) => {
        const n = {};
        for (const i in t) (w(i) && i.slice(9) in e) || (n[i] = t[i]);
        return n;
      };
    function vn(t, e, n) {
      const i = Object.keys(e);
      if (i.length !== Object.keys(t).length) return !0;
      for (let o = 0; o < i.length; o++) {
        const s = i[o];
        if (e[s] !== t[s] && !dn(n, s)) return !0;
      }
      return !1;
    }
    function xn({ vnode: t, parent: e }, n) {
      for (; e && e.subTree === t; ) ((t = e.vnode).el = n), (e = e.parent);
    }
    const _n = {
      name: "Suspense",
      __isSuspense: !0,
      process(t, e, n, i, o, s, r, a, l, c) {
        null == t
          ? (function (t, e, n, i, o, s, r, a, l) {
              const {
                  p: c,
                  o: { createElement: h },
                } = l,
                d = h("div"),
                u = (t.suspense = kn(t, o, i, e, d, n, s, r, a, l));
              c(null, (u.pendingBranch = t.ssContent), d, null, i, u, s, r),
                u.deps > 0
                  ? (wn(t, "onPending"),
                    wn(t, "onFallback"),
                    c(null, t.ssFallback, e, n, i, null, s, r),
                    Tn(u, t.ssFallback))
                  : u.resolve();
            })(e, n, i, o, s, r, a, l, c)
          : (function (
              t,
              e,
              n,
              i,
              o,
              s,
              r,
              a,
              { p: l, um: c, o: { createElement: h } }
            ) {
              const d = (e.suspense = t.suspense);
              (d.vnode = e), (e.el = t.el);
              const u = e.ssContent,
                p = e.ssFallback,
                {
                  activeBranch: f,
                  pendingBranch: g,
                  isInFallback: m,
                  isHydrating: b,
                } = d;
              if (g)
                (d.pendingBranch = u),
                  xo(u, g)
                    ? (l(g, u, d.hiddenContainer, null, o, d, s, r, a),
                      d.deps <= 0
                        ? d.resolve()
                        : m && (l(f, p, n, i, o, null, s, r, a), Tn(d, p)))
                    : (d.pendingId++,
                      b
                        ? ((d.isHydrating = !1), (d.activeBranch = g))
                        : c(g, o, d),
                      (d.deps = 0),
                      (d.effects.length = 0),
                      (d.hiddenContainer = h("div")),
                      m
                        ? (l(null, u, d.hiddenContainer, null, o, d, s, r, a),
                          d.deps <= 0
                            ? d.resolve()
                            : (l(f, p, n, i, o, null, s, r, a), Tn(d, p)))
                        : f && xo(u, f)
                        ? (l(f, u, n, i, o, d, s, r, a), d.resolve(!0))
                        : (l(null, u, d.hiddenContainer, null, o, d, s, r, a),
                          d.deps <= 0 && d.resolve()));
              else if (f && xo(u, f)) l(f, u, n, i, o, d, s, r, a), Tn(d, u);
              else if (
                (wn(e, "onPending"),
                (d.pendingBranch = u),
                d.pendingId++,
                l(null, u, d.hiddenContainer, null, o, d, s, r, a),
                d.deps <= 0)
              )
                d.resolve();
              else {
                const { timeout: t, pendingId: e } = d;
                t > 0
                  ? setTimeout(() => {
                      d.pendingId === e && d.fallback(p);
                    }, t)
                  : 0 === t && d.fallback(p);
              }
            })(t, e, n, i, o, r, a, l, c);
      },
      hydrate: function (t, e, n, i, o, s, r, a, l) {
        const c = (e.suspense = kn(
            e,
            i,
            n,
            t.parentNode,
            document.createElement("div"),
            null,
            o,
            s,
            r,
            a,
            !0
          )),
          h = l(t, (c.pendingBranch = e.ssContent), n, c, s, r);
        return 0 === c.deps && c.resolve(), h;
      },
      create: kn,
      normalize: function (t) {
        const { shapeFlag: e, children: n } = t,
          i = 32 & e;
        (t.ssContent = Sn(i ? n.default : n)),
          (t.ssFallback = i ? Sn(n.fallback) : Co(lo));
      },
    };
    function wn(t, e) {
      const n = t.props && t.props[e];
      R(n) && n();
    }
    function kn(t, e, n, i, o, s, r, a, l, c, h = !1) {
      const {
          p: d,
          m: u,
          um: p,
          n: f,
          o: { parentNode: g, remove: m },
        } = c,
        b = Z(t.props && t.props.timeout),
        y = {
          vnode: t,
          parent: e,
          parentComponent: n,
          isSVG: r,
          container: i,
          hiddenContainer: o,
          anchor: s,
          deps: 0,
          pendingId: 0,
          timeout: "number" == typeof b ? b : -1,
          activeBranch: null,
          pendingBranch: null,
          isInFallback: !0,
          isHydrating: h,
          isUnmounted: !1,
          effects: [],
          resolve(t = !1) {
            const {
              vnode: e,
              activeBranch: n,
              pendingBranch: i,
              pendingId: o,
              effects: s,
              parentComponent: r,
              container: a,
            } = y;
            if (y.isHydrating) y.isHydrating = !1;
            else if (!t) {
              const t = n && i.transition && "out-in" === i.transition.mode;
              t &&
                (n.transition.afterLeave = () => {
                  o === y.pendingId && u(i, a, e, 0);
                });
              let { anchor: e } = y;
              n && ((e = f(n)), p(n, r, y, !0)), t || u(i, a, e, 0);
            }
            Tn(y, i), (y.pendingBranch = null), (y.isInFallback = !1);
            let l = y.parent,
              c = !1;
            for (; l; ) {
              if (l.pendingBranch) {
                l.effects.push(...s), (c = !0);
                break;
              }
              l = l.parent;
            }
            c || en(s), (y.effects = []), wn(e, "onResolve");
          },
          fallback(t) {
            if (!y.pendingBranch) return;
            const {
              vnode: e,
              activeBranch: n,
              parentComponent: i,
              container: o,
              isSVG: s,
            } = y;
            wn(e, "onFallback");
            const r = f(n),
              c = () => {
                y.isInFallback &&
                  (d(null, t, o, r, i, null, s, a, l), Tn(y, t));
              },
              h = t.transition && "out-in" === t.transition.mode;
            h && (n.transition.afterLeave = c),
              (y.isInFallback = !0),
              p(n, i, null, !0),
              h || c();
          },
          move(t, e, n) {
            y.activeBranch && u(y.activeBranch, t, e, n), (y.container = t);
          },
          next: () => y.activeBranch && f(y.activeBranch),
          registerDep(t, e) {
            const n = !!y.pendingBranch;
            n && y.deps++;
            const i = t.vnode.el;
            t.asyncDep
              .catch((e) => {
                Fe(e, t, 0);
              })
              .then((o) => {
                if (
                  t.isUnmounted ||
                  y.isUnmounted ||
                  y.pendingId !== t.suspenseId
                )
                  return;
                t.asyncResolved = !0;
                const { vnode: s } = t;
                Ko(t, o, !1), i && (s.el = i);
                const a = !i && t.subTree.el;
                e(t, s, g(i || t.subTree.el), i ? null : f(t.subTree), y, r, l),
                  a && m(a),
                  xn(t, s.el),
                  n && 0 == --y.deps && y.resolve();
              });
          },
          unmount(t, e) {
            (y.isUnmounted = !0),
              y.activeBranch && p(y.activeBranch, n, t, e),
              y.pendingBranch && p(y.pendingBranch, n, t, e);
          },
        };
      return y;
    }
    function Sn(t) {
      let e;
      if (R(t)) {
        const n = go && t._c;
        n && ((t._d = !1), po()), (t = t()), n && ((t._d = !0), (e = uo), fo());
      }
      if (A(t)) {
        const e = (function (t) {
          let e;
          for (let n = 0; n < t.length; n++) {
            const i = t[n];
            if (!vo(i)) return;
            if (i.type !== lo || "v-if" === i.children) {
              if (e) return;
              e = i;
            }
          }
          return e;
        })(t);
        t = e;
      }
      return (
        (t = Po(t)),
        e &&
          !t.dynamicChildren &&
          (t.dynamicChildren = e.filter((e) => e !== t)),
        t
      );
    }
    function Cn(t, e) {
      e && e.pendingBranch
        ? A(t)
          ? e.effects.push(...t)
          : e.effects.push(t)
        : en(t);
    }
    function Tn(t, e) {
      t.activeBranch = e;
      const { vnode: n, parentComponent: i } = t,
        o = (n.el = e.el);
      i && i.subTree === n && ((i.vnode.el = o), xn(i, o));
    }
    function An(t, e) {
      if (zo) {
        let n = zo.provides;
        const i = zo.parent && zo.parent.provides;
        i === n && (n = zo.provides = Object.create(i)), (n[t] = e);
      }
    }
    function Mn(t, e, n = !1) {
      const i = zo || un;
      if (i) {
        const o =
          null == i.parent
            ? i.vnode.appContext && i.vnode.appContext.provides
            : i.parent.provides;
        if (o && t in o) return o[t];
        if (arguments.length > 1) return n && R(e) ? e.call(i.proxy) : e;
      }
    }
    function Pn(t, e) {
      return On(t, null, { flush: "post" });
    }
    const Dn = {};
    function Rn(t, e, n) {
      return On(t, e, n);
    }
    function On(t, e, { immediate: n, deep: i, flush: o } = m) {
      const s = zo;
      let r,
        a,
        l = !1,
        c = !1;
      if (
        (xe(t)
          ? ((r = () => t.value), (l = ue(t)))
          : he(t)
          ? ((r = () => t), (i = !0))
          : A(t)
          ? ((c = !0),
            (l = t.some(he)),
            (r = () =>
              t.map((t) =>
                xe(t) ? t.value : he(t) ? In(t) : R(t) ? Ie(t, s, 2) : void 0
              )))
          : (r = R(t)
              ? e
                ? () => Ie(t, s, 2)
                : () => {
                    if (!s || !s.isUnmounted) return a && a(), Ve(t, s, 3, [h]);
                  }
              : y),
        e && i)
      ) {
        const t = r;
        r = () => In(t());
      }
      let h = (t) => {
          a = f.onStop = () => {
            Ie(t, s, 4);
          };
        },
        d = c ? [] : Dn;
      const u = () => {
        if (f.active)
          if (e) {
            const t = f.run();
            (i || l || (c ? t.some((t, e) => K(t, d[e])) : K(t, d))) &&
              (a && a(), Ve(e, s, 3, [t, d === Dn ? void 0 : d, h]), (d = t));
          } else f.run();
      };
      let p;
      (u.allowRecurse = !!e),
        (p =
          "sync" === o
            ? u
            : "post" === o
            ? () => qi(u, s && s.suspense)
            : () => {
                !s || s.isMounted
                  ? (function (t) {
                      tn(t, We, $e, He);
                    })(u)
                  : u();
              });
      const f = new ut(r, p);
      return (
        e
          ? n
            ? u()
            : (d = f.run())
          : "post" === o
          ? qi(f.run.bind(f), s && s.suspense)
          : f.run(),
        () => {
          f.stop(), s && s.scope && S(s.scope.effects, f);
        }
      );
    }
    function En(t, e, n) {
      const i = this.proxy,
        o = O(t) ? (t.includes(".") ? Ln(i, t) : () => i[t]) : t.bind(i, i);
      let s;
      R(e) ? (s = e) : ((s = e.handler), (n = e));
      const r = zo;
      Wo(this);
      const a = On(o, s.bind(i), n);
      return r ? Wo(r) : Ho(), a;
    }
    function Ln(t, e) {
      const n = e.split(".");
      return () => {
        let e = t;
        for (let t = 0; t < n.length && e; t++) e = e[n[t]];
        return e;
      };
    }
    function In(t, e) {
      if (!L(t) || t.__v_skip) return t;
      if ((e = e || new Set()).has(t)) return t;
      if ((e.add(t), xe(t))) In(t.value, e);
      else if (A(t)) for (let n = 0; n < t.length; n++) In(t[n], e);
      else if (P(t) || M(t))
        t.forEach((t) => {
          In(t, e);
        });
      else if (N(t)) for (const n in t) In(t[n], e);
      return t;
    }
    function Vn() {
      const t = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map(),
      };
      return (
        ri(() => {
          t.isMounted = !0;
        }),
        ci(() => {
          t.isUnmounting = !0;
        }),
        t
      );
    }
    const Fn = [Function, Array],
      Nn = {
        name: "BaseTransition",
        props: {
          mode: String,
          appear: Boolean,
          persisted: Boolean,
          onBeforeEnter: Fn,
          onEnter: Fn,
          onAfterEnter: Fn,
          onEnterCancelled: Fn,
          onBeforeLeave: Fn,
          onLeave: Fn,
          onAfterLeave: Fn,
          onLeaveCancelled: Fn,
          onBeforeAppear: Fn,
          onAppear: Fn,
          onAfterAppear: Fn,
          onAppearCancelled: Fn,
        },
        setup(t, { slots: e }) {
          const n = $o(),
            i = Vn();
          let o;
          return () => {
            const s = e.default && Hn(e.default(), !0);
            if (!s || !s.length) return;
            const r = fe(t),
              { mode: a } = r,
              l = s[0];
            if (i.isLeaving) return zn(l);
            const c = $n(l);
            if (!c) return zn(l);
            const h = jn(c, r, i, n);
            Wn(c, h);
            const d = n.subTree,
              u = d && $n(d);
            let p = !1;
            const { getTransitionKey: f } = c.type;
            if (f) {
              const t = f();
              void 0 === o ? (o = t) : t !== o && ((o = t), (p = !0));
            }
            if (u && u.type !== lo && (!xo(c, u) || p)) {
              const t = jn(u, r, i, n);
              if ((Wn(u, t), "out-in" === a))
                return (
                  (i.isLeaving = !0),
                  (t.afterLeave = () => {
                    (i.isLeaving = !1), n.update();
                  }),
                  zn(l)
                );
              "in-out" === a &&
                c.type !== lo &&
                (t.delayLeave = (t, e, n) => {
                  (Bn(i, u)[String(u.key)] = u),
                    (t._leaveCb = () => {
                      e(), (t._leaveCb = void 0), delete h.delayedLeave;
                    }),
                    (h.delayedLeave = n);
                });
            }
            return l;
          };
        },
      };
    function Bn(t, e) {
      const { leavingVNodes: n } = t;
      let i = n.get(e.type);
      return i || ((i = Object.create(null)), n.set(e.type, i)), i;
    }
    function jn(t, e, n, i) {
      const {
          appear: o,
          mode: s,
          persisted: r = !1,
          onBeforeEnter: a,
          onEnter: l,
          onAfterEnter: c,
          onEnterCancelled: h,
          onBeforeLeave: d,
          onLeave: u,
          onAfterLeave: p,
          onLeaveCancelled: f,
          onBeforeAppear: g,
          onAppear: m,
          onAfterAppear: b,
          onAppearCancelled: y,
        } = e,
        v = String(t.key),
        x = Bn(n, t),
        _ = (t, e) => {
          t && Ve(t, i, 9, e);
        },
        w = {
          mode: s,
          persisted: r,
          beforeEnter(e) {
            let i = a;
            if (!n.isMounted) {
              if (!o) return;
              i = g || a;
            }
            e._leaveCb && e._leaveCb(!0);
            const s = x[v];
            s && xo(t, s) && s.el._leaveCb && s.el._leaveCb(), _(i, [e]);
          },
          enter(t) {
            let e = l,
              i = c,
              s = h;
            if (!n.isMounted) {
              if (!o) return;
              (e = m || l), (i = b || c), (s = y || h);
            }
            let r = !1;
            const a = (t._enterCb = (e) => {
              r ||
                ((r = !0),
                _(e ? s : i, [t]),
                w.delayedLeave && w.delayedLeave(),
                (t._enterCb = void 0));
            });
            e ? (e(t, a), e.length <= 1 && a()) : a();
          },
          leave(e, i) {
            const o = String(t.key);
            if ((e._enterCb && e._enterCb(!0), n.isUnmounting)) return i();
            _(d, [e]);
            let s = !1;
            const r = (e._leaveCb = (n) => {
              s ||
                ((s = !0),
                i(),
                _(n ? f : p, [e]),
                (e._leaveCb = void 0),
                x[o] === t && delete x[o]);
            });
            (x[o] = t), u ? (u(e, r), u.length <= 1 && r()) : r();
          },
          clone: (t) => jn(t, e, n, i),
        };
      return w;
    }
    function zn(t) {
      if (Yn(t)) return ((t = Ao(t)).children = null), t;
    }
    function $n(t) {
      return Yn(t) ? (t.children ? t.children[0] : void 0) : t;
    }
    function Wn(t, e) {
      6 & t.shapeFlag && t.component
        ? Wn(t.component.subTree, e)
        : 128 & t.shapeFlag
        ? ((t.ssContent.transition = e.clone(t.ssContent)),
          (t.ssFallback.transition = e.clone(t.ssFallback)))
        : (t.transition = e);
    }
    function Hn(t, e = !1) {
      let n = [],
        i = 0;
      for (let o = 0; o < t.length; o++) {
        const s = t[o];
        s.type === ro
          ? (128 & s.patchFlag && i++, (n = n.concat(Hn(s.children, e))))
          : (e || s.type !== lo) && n.push(s);
      }
      if (i > 1) for (let t = 0; t < n.length; t++) n[t].patchFlag = -2;
      return n;
    }
    function Un(t) {
      return R(t) ? { setup: t, name: t.name } : t;
    }
    const qn = (t) => !!t.type.__asyncLoader;
    function Gn(t, { vnode: { ref: e, props: n, children: i } }) {
      const o = Co(t, n, i);
      return (o.ref = e), o;
    }
    const Yn = (t) => t.type.__isKeepAlive,
      Kn = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
          include: [String, RegExp, Array],
          exclude: [String, RegExp, Array],
          max: [String, Number],
        },
        setup(t, { slots: e }) {
          const n = $o(),
            i = n.ctx;
          if (!i.renderer) return e.default;
          const o = new Map(),
            s = new Set();
          let r = null;
          const a = n.suspense,
            {
              renderer: {
                p: l,
                m: c,
                um: h,
                o: { createElement: d },
              },
            } = i,
            u = d("div");
          function p(t) {
            ei(t), h(t, n, a, !0);
          }
          function f(t) {
            o.forEach((e, n) => {
              const i = es(e.type);
              !i || (t && t(i)) || g(n);
            });
          }
          function g(t) {
            const e = o.get(t);
            r && e.type === r.type ? r && ei(r) : p(e),
              o.delete(t),
              s.delete(t);
          }
          (i.activate = (t, e, n, i, o) => {
            const s = t.component;
            c(t, e, n, 0, a),
              l(s.vnode, t, e, n, s, a, i, t.slotScopeIds, o),
              qi(() => {
                (s.isDeactivated = !1), s.a && J(s.a);
                const e = t.props && t.props.onVnodeMounted;
                e && Eo(e, s.parent, t);
              }, a);
          }),
            (i.deactivate = (t) => {
              const e = t.component;
              c(t, u, null, 1, a),
                qi(() => {
                  e.da && J(e.da);
                  const n = t.props && t.props.onVnodeUnmounted;
                  n && Eo(n, e.parent, t), (e.isDeactivated = !0);
                }, a);
            }),
            Rn(
              () => [t.include, t.exclude],
              ([t, e]) => {
                t && f((e) => Jn(t, e)), e && f((t) => !Jn(e, t));
              },
              { flush: "post", deep: !0 }
            );
          let m = null;
          const b = () => {
            null != m && o.set(m, ni(n.subTree));
          };
          return (
            ri(b),
            li(b),
            ci(() => {
              o.forEach((t) => {
                const { subTree: e, suspense: i } = n,
                  o = ni(e);
                if (t.type !== o.type) p(t);
                else {
                  ei(o);
                  const t = o.component.da;
                  t && qi(t, i);
                }
              });
            }),
            () => {
              if (((m = null), !e.default)) return null;
              const n = e.default(),
                i = n[0];
              if (n.length > 1) return (r = null), n;
              if (!vo(i) || !(4 & i.shapeFlag || 128 & i.shapeFlag))
                return (r = null), i;
              let a = ni(i);
              const l = a.type,
                c = es(qn(a) ? a.type.__asyncResolved || {} : l),
                { include: h, exclude: d, max: u } = t;
              if ((h && (!c || !Jn(h, c))) || (d && c && Jn(d, c)))
                return (r = a), i;
              const p = null == a.key ? l : a.key,
                f = o.get(p);
              return (
                a.el && ((a = Ao(a)), 128 & i.shapeFlag && (i.ssContent = a)),
                (m = p),
                f
                  ? ((a.el = f.el),
                    (a.component = f.component),
                    a.transition && Wn(a, a.transition),
                    (a.shapeFlag |= 512),
                    s.delete(p),
                    s.add(p))
                  : (s.add(p),
                    u &&
                      s.size > parseInt(u, 10) &&
                      g(s.values().next().value)),
                (a.shapeFlag |= 256),
                (r = a),
                i
              );
            }
          );
        },
      };
    function Jn(t, e) {
      return A(t)
        ? t.some((t) => Jn(t, e))
        : O(t)
        ? t.split(",").includes(e)
        : !!t.test && t.test(e);
    }
    function Xn(t, e) {
      Qn(t, "a", e);
    }
    function Zn(t, e) {
      Qn(t, "da", e);
    }
    function Qn(t, e, n = zo) {
      const i =
        t.__wdc ||
        (t.__wdc = () => {
          let e = n;
          for (; e; ) {
            if (e.isDeactivated) return;
            e = e.parent;
          }
          return t();
        });
      if ((ii(e, i, n), n)) {
        let t = n.parent;
        for (; t && t.parent; )
          Yn(t.parent.vnode) && ti(i, e, n, t), (t = t.parent);
      }
    }
    function ti(t, e, n, i) {
      const o = ii(e, t, i, !0);
      hi(() => {
        S(i[e], o);
      }, n);
    }
    function ei(t) {
      let e = t.shapeFlag;
      256 & e && (e -= 256), 512 & e && (e -= 512), (t.shapeFlag = e);
    }
    function ni(t) {
      return 128 & t.shapeFlag ? t.ssContent : t;
    }
    function ii(t, e, n = zo, i = !1) {
      if (n) {
        const o = n[t] || (n[t] = []),
          s =
            e.__weh ||
            (e.__weh = (...i) => {
              if (n.isUnmounted) return;
              mt(), Wo(n);
              const o = Ve(e, n, t, i);
              return Ho(), bt(), o;
            });
        return i ? o.unshift(s) : o.push(s), s;
      }
    }
    const oi =
        (t) =>
        (e, n = zo) =>
          (!Yo || "sp" === t) && ii(t, e, n),
      si = oi("bm"),
      ri = oi("m"),
      ai = oi("bu"),
      li = oi("u"),
      ci = oi("bum"),
      hi = oi("um"),
      di = oi("sp"),
      ui = oi("rtg"),
      pi = oi("rtc");
    function fi(t, e = zo) {
      ii("ec", t, e);
    }
    let gi = !0;
    function mi(t, e, n) {
      Ve(A(t) ? t.map((t) => t.bind(e.proxy)) : t.bind(e.proxy), e, n);
    }
    function bi(t, e, n, i) {
      const o = i.includes(".") ? Ln(n, i) : () => n[i];
      if (O(t)) {
        const n = e[t];
        R(n) && Rn(o, n);
      } else if (R(t)) Rn(o, t.bind(n));
      else if (L(t))
        if (A(t)) t.forEach((t) => bi(t, e, n, i));
        else {
          const i = R(t.handler) ? t.handler.bind(n) : e[t.handler];
          R(i) && Rn(o, i, t);
        }
    }
    function yi(t) {
      const e = t.type,
        { mixins: n, extends: i } = e,
        {
          mixins: o,
          optionsCache: s,
          config: { optionMergeStrategies: r },
        } = t.appContext,
        a = s.get(e);
      let l;
      return (
        a
          ? (l = a)
          : o.length || n || i
          ? ((l = {}),
            o.length && o.forEach((t) => vi(l, t, r, !0)),
            vi(l, e, r))
          : (l = e),
        s.set(e, l),
        l
      );
    }
    function vi(t, e, n, i = !1) {
      const { mixins: o, extends: s } = e;
      s && vi(t, s, n, !0), o && o.forEach((e) => vi(t, e, n, !0));
      for (const o in e)
        if (i && "expose" === o);
        else {
          const i = xi[o] || (n && n[o]);
          t[o] = i ? i(t[o], e[o]) : e[o];
        }
      return t;
    }
    const xi = {
      data: _i,
      props: Si,
      emits: Si,
      methods: Si,
      computed: Si,
      beforeCreate: ki,
      created: ki,
      beforeMount: ki,
      mounted: ki,
      beforeUpdate: ki,
      updated: ki,
      beforeDestroy: ki,
      beforeUnmount: ki,
      destroyed: ki,
      unmounted: ki,
      activated: ki,
      deactivated: ki,
      errorCaptured: ki,
      serverPrefetch: ki,
      components: Si,
      directives: Si,
      watch: function (t, e) {
        if (!t) return e;
        if (!e) return t;
        const n = k(Object.create(null), t);
        for (const i in e) n[i] = ki(t[i], e[i]);
        return n;
      },
      provide: _i,
      inject: function (t, e) {
        return Si(wi(t), wi(e));
      },
    };
    function _i(t, e) {
      return e
        ? t
          ? function () {
              return k(
                R(t) ? t.call(this, this) : t,
                R(e) ? e.call(this, this) : e
              );
            }
          : e
        : t;
    }
    function wi(t) {
      if (A(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
        return e;
      }
      return t;
    }
    function ki(t, e) {
      return t ? [...new Set([].concat(t, e))] : e;
    }
    function Si(t, e) {
      return t ? k(k(Object.create(null), t), e) : e;
    }
    function Ci(t, e, n, i) {
      const [o, s] = t.propsOptions;
      let r,
        a = !1;
      if (e)
        for (let l in e) {
          if (j(l)) continue;
          const c = e[l];
          let h;
          o && T(o, (h = H(l)))
            ? s && s.includes(h)
              ? ((r || (r = {}))[h] = c)
              : (n[h] = c)
            : dn(t.emitsOptions, l) ||
              (l in i && c === i[l]) ||
              ((i[l] = c), (a = !0));
        }
      if (s) {
        const e = fe(n),
          i = r || m;
        for (let r = 0; r < s.length; r++) {
          const a = s[r];
          n[a] = Ti(o, e, a, i[a], t, !T(i, a));
        }
      }
      return a;
    }
    function Ti(t, e, n, i, o, s) {
      const r = t[n];
      if (null != r) {
        const t = T(r, "default");
        if (t && void 0 === i) {
          const t = r.default;
          if (r.type !== Function && R(t)) {
            const { propsDefaults: s } = o;
            n in s ? (i = s[n]) : (Wo(o), (i = s[n] = t.call(null, e)), Ho());
          } else i = t;
        }
        r[0] &&
          (s && !t ? (i = !1) : !r[1] || ("" !== i && i !== q(n)) || (i = !0));
      }
      return i;
    }
    function Ai(t, e, n = !1) {
      const i = e.propsCache,
        o = i.get(t);
      if (o) return o;
      const s = t.props,
        r = {},
        a = [];
      let l = !1;
      if (!R(t)) {
        const i = (t) => {
          l = !0;
          const [n, i] = Ai(t, e, !0);
          k(r, n), i && a.push(...i);
        };
        !n && e.mixins.length && e.mixins.forEach(i),
          t.extends && i(t.extends),
          t.mixins && t.mixins.forEach(i);
      }
      if (!s && !l) return i.set(t, b), b;
      if (A(s))
        for (let t = 0; t < s.length; t++) {
          const e = H(s[t]);
          Mi(e) && (r[e] = m);
        }
      else if (s)
        for (const t in s) {
          const e = H(t);
          if (Mi(e)) {
            const n = s[t],
              i = (r[e] = A(n) || R(n) ? { type: n } : n);
            if (i) {
              const t = Ri(Boolean, i.type),
                n = Ri(String, i.type);
              (i[0] = t > -1),
                (i[1] = n < 0 || t < n),
                (t > -1 || T(i, "default")) && a.push(e);
            }
          }
        }
      const c = [r, a];
      return i.set(t, c), c;
    }
    function Mi(t) {
      return "$" !== t[0];
    }
    function Pi(t) {
      const e = t && t.toString().match(/^\s*function (\w+)/);
      return e ? e[1] : null === t ? "null" : "";
    }
    function Di(t, e) {
      return Pi(t) === Pi(e);
    }
    function Ri(t, e) {
      return A(e) ? e.findIndex((e) => Di(e, t)) : R(e) && Di(e, t) ? 0 : -1;
    }
    const Oi = (t) => "_" === t[0] || "$stable" === t,
      Ei = (t) => (A(t) ? t.map(Po) : [Po(t)]),
      Li = (t, e, n) => {
        const i = gn((...t) => Ei(e(...t)), n);
        return (i._c = !1), i;
      },
      Ii = (t, e, n) => {
        const i = t._ctx;
        for (const n in t) {
          if (Oi(n)) continue;
          const o = t[n];
          if (R(o)) e[n] = Li(0, o, i);
          else if (null != o) {
            const t = Ei(o);
            e[n] = () => t;
          }
        }
      },
      Vi = (t, e) => {
        const n = Ei(e);
        t.slots.default = () => n;
      };
    function Fi(t, e, n, i) {
      const o = t.dirs,
        s = e && e.dirs;
      for (let r = 0; r < o.length; r++) {
        const a = o[r];
        s && (a.oldValue = s[r].value);
        let l = a.dir[i];
        l && (mt(), Ve(l, n, 8, [t.el, a, t, e]), bt());
      }
    }
    function Ni() {
      return {
        app: null,
        config: {
          isNativeTag: v,
          performance: !1,
          globalProperties: {},
          optionMergeStrategies: {},
          errorHandler: void 0,
          warnHandler: void 0,
          compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
      };
    }
    let Bi = 0;
    function ji(t, e) {
      return function (n, i = null) {
        null == i || L(i) || (i = null);
        const o = Ni(),
          s = new Set();
        let r = !1;
        const a = (o.app = {
          _uid: Bi++,
          _component: n,
          _props: i,
          _container: null,
          _context: o,
          _instance: null,
          version: ls,
          get config() {
            return o.config;
          },
          set config(t) {},
          use: (t, ...e) => (
            s.has(t) ||
              (t && R(t.install)
                ? (s.add(t), t.install(a, ...e))
                : R(t) && (s.add(t), t(a, ...e))),
            a
          ),
          mixin: (t) => (o.mixins.includes(t) || o.mixins.push(t), a),
          component: (t, e) =>
            e ? ((o.components[t] = e), a) : o.components[t],
          directive: (t, e) =>
            e ? ((o.directives[t] = e), a) : o.directives[t],
          mount(s, l, c) {
            if (!r) {
              const h = Co(n, i);
              return (
                (h.appContext = o),
                l && e ? e(h, s) : t(h, s, c),
                (r = !0),
                (a._container = s),
                (s.__vue_app__ = a),
                Qo(h.component) || h.component.proxy
              );
            }
          },
          unmount() {
            r && (t(null, a._container), delete a._container.__vue_app__);
          },
          provide: (t, e) => ((o.provides[t] = e), a),
        });
        return a;
      };
    }
    function zi(t, e, n, i, o = !1) {
      if (A(t))
        return void t.forEach((t, s) => zi(t, e && (A(e) ? e[s] : e), n, i, o));
      if (qn(i) && !o) return;
      const s = 4 & i.shapeFlag ? Qo(i.component) || i.component.proxy : i.el,
        r = o ? null : s,
        { i: a, r: l } = t,
        c = e && e.r,
        h = a.refs === m ? (a.refs = {}) : a.refs,
        d = a.setupState;
      if (
        (null != c &&
          c !== l &&
          (O(c)
            ? ((h[c] = null), T(d, c) && (d[c] = null))
            : xe(c) && (c.value = null)),
        R(l))
      )
        Ie(l, a, 12, [r, h]);
      else {
        const e = O(l),
          i = xe(l);
        if (e || i) {
          const i = () => {
            if (t.f) {
              const n = e ? h[l] : l.value;
              o
                ? A(n) && S(n, s)
                : A(n)
                ? n.includes(s) || n.push(s)
                : e
                ? (h[l] = [s])
                : ((l.value = [s]), t.k && (h[t.k] = l.value));
            } else
              e
                ? ((h[l] = r), T(d, l) && (d[l] = r))
                : xe(l) && ((l.value = r), t.k && (h[t.k] = r));
          };
          r ? ((i.id = -1), qi(i, n)) : i();
        }
      }
    }
    let $i = !1;
    const Wi = (t) =>
        /svg/.test(t.namespaceURI) && "foreignObject" !== t.tagName,
      Hi = (t) => 8 === t.nodeType;
    function Ui(t) {
      const {
          mt: e,
          p: n,
          o: {
            patchProp: i,
            nextSibling: o,
            parentNode: s,
            remove: r,
            insert: a,
            createComment: l,
          },
        } = t,
        c = (n, i, r, a, l, g = !1) => {
          const m = Hi(n) && "[" === n.data,
            b = () => p(n, i, r, a, l, m),
            { type: y, ref: v, shapeFlag: x } = i,
            _ = n.nodeType;
          i.el = n;
          let w = null;
          switch (y) {
            case ao:
              3 !== _
                ? (w = b())
                : (n.data !== i.children && (($i = !0), (n.data = i.children)),
                  (w = o(n)));
              break;
            case lo:
              w = 8 !== _ || m ? b() : o(n);
              break;
            case co:
              if (1 === _) {
                w = n;
                const t = !i.children.length;
                for (let e = 0; e < i.staticCount; e++)
                  t && (i.children += w.outerHTML),
                    e === i.staticCount - 1 && (i.anchor = w),
                    (w = o(w));
                return w;
              }
              w = b();
              break;
            case ro:
              w = m ? u(n, i, r, a, l, g) : b();
              break;
            default:
              if (1 & x)
                w =
                  1 !== _ || i.type.toLowerCase() !== n.tagName.toLowerCase()
                    ? b()
                    : h(n, i, r, a, l, g);
              else if (6 & x) {
                i.slotScopeIds = l;
                const t = s(n);
                if (
                  (e(i, t, null, r, a, Wi(t), g), (w = m ? f(n) : o(n)), qn(i))
                ) {
                  let e;
                  m
                    ? ((e = Co(ro)),
                      (e.anchor = w ? w.previousSibling : t.lastChild))
                    : (e = 3 === n.nodeType ? Mo("") : Co("div")),
                    (e.el = n),
                    (i.component.subTree = e);
                }
              } else
                64 & x
                  ? (w = 8 !== _ ? b() : i.type.hydrate(n, i, r, a, l, g, t, d))
                  : 128 & x &&
                    (w = i.type.hydrate(n, i, r, a, Wi(s(n)), l, g, t, c));
          }
          return null != v && zi(v, null, a, i), w;
        },
        h = (t, e, n, o, s, a) => {
          a = a || !!e.dynamicChildren;
          const { type: l, props: c, patchFlag: h, shapeFlag: u, dirs: p } = e,
            f = ("input" === l && p) || "option" === l;
          if (f || -1 !== h) {
            if ((p && Fi(e, null, n, "created"), c))
              if (f || !a || 48 & h)
                for (const e in c)
                  ((f && e.endsWith("value")) || (_(e) && !j(e))) &&
                    i(t, e, null, c[e], !1, void 0, n);
              else c.onClick && i(t, "onClick", null, c.onClick, !1, void 0, n);
            let l;
            if (
              ((l = c && c.onVnodeBeforeMount) && Eo(l, n, e),
              p && Fi(e, null, n, "beforeMount"),
              ((l = c && c.onVnodeMounted) || p) &&
                Cn(() => {
                  l && Eo(l, n, e), p && Fi(e, null, n, "mounted");
                }, o),
              16 & u && (!c || (!c.innerHTML && !c.textContent)))
            ) {
              let i = d(t.firstChild, e, t, n, o, s, a);
              for (; i; ) {
                $i = !0;
                const t = i;
                (i = i.nextSibling), r(t);
              }
            } else
              8 & u &&
                t.textContent !== e.children &&
                (($i = !0), (t.textContent = e.children));
          }
          return t.nextSibling;
        },
        d = (t, e, i, o, s, r, a) => {
          a = a || !!e.dynamicChildren;
          const l = e.children,
            h = l.length;
          for (let e = 0; e < h; e++) {
            const h = a ? l[e] : (l[e] = Po(l[e]));
            if (t) t = c(t, h, o, s, r, a);
            else {
              if (h.type === ao && !h.children) continue;
              ($i = !0), n(null, h, i, null, o, s, Wi(i), r);
            }
          }
          return t;
        },
        u = (t, e, n, i, r, c) => {
          const { slotScopeIds: h } = e;
          h && (r = r ? r.concat(h) : h);
          const u = s(t),
            p = d(o(t), e, u, n, i, r, c);
          return p && Hi(p) && "]" === p.data
            ? o((e.anchor = p))
            : (($i = !0), a((e.anchor = l("]")), u, p), p);
        },
        p = (t, e, i, a, l, c) => {
          if ((($i = !0), (e.el = null), c)) {
            const e = f(t);
            for (;;) {
              const n = o(t);
              if (!n || n === e) break;
              r(n);
            }
          }
          const h = o(t),
            d = s(t);
          return r(t), n(null, e, d, h, i, a, Wi(d), l), h;
        },
        f = (t) => {
          let e = 0;
          for (; t; )
            if (
              (t = o(t)) &&
              Hi(t) &&
              ("[" === t.data && e++, "]" === t.data)
            ) {
              if (0 === e) return o(t);
              e--;
            }
          return t;
        };
      return [
        (t, e) => {
          if (!e.hasChildNodes()) return n(null, t, e), void on();
          ($i = !1),
            c(e.firstChild, t, null, null, null),
            on(),
            $i && console.error("Hydration completed but contains mismatches.");
        },
        c,
      ];
    }
    const qi = Cn;
    function Gi(t) {
      return Ki(t);
    }
    function Yi(t) {
      return Ki(t, Ui);
    }
    function Ki(t, e) {
      (
        Q ||
        (Q =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : void 0 !== __webpack_require__.g
            ? __webpack_require__.g
            : {})
      ).__VUE__ = !0;
      const {
          insert: n,
          remove: i,
          patchProp: o,
          createElement: s,
          createText: r,
          createComment: a,
          setText: l,
          setElementText: c,
          parentNode: h,
          nextSibling: d,
          setScopeId: u = y,
          cloneNode: p,
          insertStaticContent: f,
        } = t,
        g = (
          t,
          e,
          n,
          i = null,
          o = null,
          s = null,
          r = !1,
          a = null,
          l = !!e.dynamicChildren
        ) => {
          if (t === e) return;
          t && !xo(t, e) && ((i = Z(t)), W(t, o, s, !0), (t = null)),
            -2 === e.patchFlag && ((l = !1), (e.dynamicChildren = null));
          const { type: c, ref: h, shapeFlag: d } = e;
          switch (c) {
            case ao:
              v(t, e, n, i);
              break;
            case lo:
              x(t, e, n, i);
              break;
            case co:
              null == t && _(e, n, i, r);
              break;
            case ro:
              R(t, e, n, i, o, s, r, a, l);
              break;
            default:
              1 & d
                ? w(t, e, n, i, o, s, r, a, l)
                : 6 & d
                ? O(t, e, n, i, o, s, r, a, l)
                : (64 & d || 128 & d) &&
                  c.process(t, e, n, i, o, s, r, a, l, nt);
          }
          null != h && o && zi(h, t && t.ref, s, e || t, !e);
        },
        v = (t, e, i, o) => {
          if (null == t) n((e.el = r(e.children)), i, o);
          else {
            const n = (e.el = t.el);
            e.children !== t.children && l(n, e.children);
          }
        },
        x = (t, e, i, o) => {
          null == t ? n((e.el = a(e.children || "")), i, o) : (e.el = t.el);
        },
        _ = (t, e, n, i) => {
          [t.el, t.anchor] = f(t.children, e, n, i, t.el, t.anchor);
        },
        w = (t, e, n, i, o, s, r, a, l) => {
          (r = r || "svg" === e.type),
            null == t ? S(e, n, i, o, s, r, a, l) : M(t, e, o, s, r, a, l);
        },
        S = (t, e, i, r, a, l, h, d) => {
          let u, f;
          const {
            type: g,
            props: m,
            shapeFlag: b,
            transition: y,
            patchFlag: v,
            dirs: x,
          } = t;
          if (t.el && void 0 !== p && -1 === v) u = t.el = p(t.el);
          else {
            if (
              ((u = t.el = s(t.type, l, m && m.is, m)),
              8 & b
                ? c(u, t.children)
                : 16 & b &&
                  A(
                    t.children,
                    u,
                    null,
                    r,
                    a,
                    l && "foreignObject" !== g,
                    h,
                    d
                  ),
              x && Fi(t, null, r, "created"),
              m)
            ) {
              for (const e in m)
                "value" === e ||
                  j(e) ||
                  o(u, e, null, m[e], l, t.children, r, a, K);
              "value" in m && o(u, "value", null, m.value),
                (f = m.onVnodeBeforeMount) && Eo(f, r, t);
            }
            C(u, t, t.scopeId, h, r);
          }
          x && Fi(t, null, r, "beforeMount");
          const _ = (!a || (a && !a.pendingBranch)) && y && !y.persisted;
          _ && y.beforeEnter(u),
            n(u, e, i),
            ((f = m && m.onVnodeMounted) || _ || x) &&
              qi(() => {
                f && Eo(f, r, t),
                  _ && y.enter(u),
                  x && Fi(t, null, r, "mounted");
              }, a);
        },
        C = (t, e, n, i, o) => {
          if ((n && u(t, n), i)) for (let e = 0; e < i.length; e++) u(t, i[e]);
          if (o && e === o.subTree) {
            const e = o.vnode;
            C(t, e, e.scopeId, e.slotScopeIds, o.parent);
          }
        },
        A = (t, e, n, i, o, s, r, a, l = 0) => {
          for (let c = l; c < t.length; c++) {
            const l = (t[c] = a ? Do(t[c]) : Po(t[c]));
            g(null, l, e, n, i, o, s, r, a);
          }
        },
        M = (t, e, n, i, s, r, a) => {
          const l = (e.el = t.el);
          let { patchFlag: h, dynamicChildren: d, dirs: u } = e;
          h |= 16 & t.patchFlag;
          const p = t.props || m,
            f = e.props || m;
          let g;
          n && Ji(n, !1),
            (g = f.onVnodeBeforeUpdate) && Eo(g, n, e, t),
            u && Fi(e, t, n, "beforeUpdate"),
            n && Ji(n, !0);
          const b = s && "foreignObject" !== e.type;
          if (
            (d
              ? P(t.dynamicChildren, d, l, n, i, b, r)
              : a || N(t, e, l, null, n, i, b, r, !1),
            h > 0)
          ) {
            if (16 & h) D(l, e, p, f, n, i, s);
            else if (
              (2 & h && p.class !== f.class && o(l, "class", null, f.class, s),
              4 & h && o(l, "style", p.style, f.style, s),
              8 & h)
            ) {
              const r = e.dynamicProps;
              for (let e = 0; e < r.length; e++) {
                const a = r[e],
                  c = p[a],
                  h = f[a];
                (h === c && "value" !== a) ||
                  o(l, a, c, h, s, t.children, n, i, K);
              }
            }
            1 & h && t.children !== e.children && c(l, e.children);
          } else a || null != d || D(l, e, p, f, n, i, s);
          ((g = f.onVnodeUpdated) || u) &&
            qi(() => {
              g && Eo(g, n, e, t), u && Fi(e, t, n, "updated");
            }, i);
        },
        P = (t, e, n, i, o, s, r) => {
          for (let a = 0; a < e.length; a++) {
            const l = t[a],
              c = e[a],
              d =
                l.el && (l.type === ro || !xo(l, c) || 70 & l.shapeFlag)
                  ? h(l.el)
                  : n;
            g(l, c, d, null, i, o, s, r, !0);
          }
        },
        D = (t, e, n, i, s, r, a) => {
          if (n !== i) {
            for (const l in i) {
              if (j(l)) continue;
              const c = i[l],
                h = n[l];
              c !== h && "value" !== l && o(t, l, h, c, a, e.children, s, r, K);
            }
            if (n !== m)
              for (const l in n)
                j(l) || l in i || o(t, l, n[l], null, a, e.children, s, r, K);
            "value" in i && o(t, "value", n.value, i.value);
          }
        },
        R = (t, e, i, o, s, a, l, c, h) => {
          const d = (e.el = t ? t.el : r("")),
            u = (e.anchor = t ? t.anchor : r(""));
          let { patchFlag: p, dynamicChildren: f, slotScopeIds: g } = e;
          g && (c = c ? c.concat(g) : g),
            null == t
              ? (n(d, i, o), n(u, i, o), A(e.children, i, u, s, a, l, c, h))
              : p > 0 && 64 & p && f && t.dynamicChildren
              ? (P(t.dynamicChildren, f, i, s, a, l, c),
                (null != e.key || (s && e === s.subTree)) && Xi(t, e, !0))
              : N(t, e, i, u, s, a, l, c, h);
        },
        O = (t, e, n, i, o, s, r, a, l) => {
          (e.slotScopeIds = a),
            null == t
              ? 512 & e.shapeFlag
                ? o.ctx.activate(e, n, i, r, l)
                : E(e, n, i, o, s, r, l)
              : L(t, e, l);
        },
        E = (t, e, n, i, o, s, r) => {
          const a = (t.component = (function (t, e, n) {
            const i = t.type,
              o = (e ? e.appContext : t.appContext) || Bo,
              s = {
                uid: jo++,
                vnode: t,
                type: i,
                parent: e,
                appContext: o,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new et(!0),
                render: null,
                proxy: null,
                exposed: null,
                exposeProxy: null,
                withProxy: null,
                provides: e ? e.provides : Object.create(o.provides),
                accessCache: null,
                renderCache: [],
                components: null,
                directives: null,
                propsOptions: Ai(i, o),
                emitsOptions: hn(i, o),
                emit: null,
                emitted: null,
                propsDefaults: m,
                inheritAttrs: i.inheritAttrs,
                ctx: m,
                data: m,
                props: m,
                attrs: m,
                slots: m,
                refs: m,
                setupState: m,
                setupContext: null,
                suspense: n,
                suspenseId: n ? n.pendingId : 0,
                asyncDep: null,
                asyncResolved: !1,
                isMounted: !1,
                isUnmounted: !1,
                isDeactivated: !1,
                bc: null,
                c: null,
                bm: null,
                m: null,
                bu: null,
                u: null,
                um: null,
                bum: null,
                da: null,
                a: null,
                rtg: null,
                rtc: null,
                ec: null,
                sp: null,
              };
            return (
              (s.ctx = { _: s }),
              (s.root = e ? e.root : s),
              (s.emit = cn.bind(null, s)),
              t.ce && t.ce(s),
              s
            );
          })(t, i, o));
          if (
            (Yn(t) && (a.ctx.renderer = nt),
            (function (t, e = !1) {
              Yo = e;
              const { props: n, children: i } = t.vnode,
                o = Uo(t);
              (function (t, e, n, i = !1) {
                const o = {},
                  s = {};
                X(s, _o, 1),
                  (t.propsDefaults = Object.create(null)),
                  Ci(t, e, o, s);
                for (const e in t.propsOptions[0]) e in o || (o[e] = void 0);
                (t.props = n ? (i ? o : ae(o)) : t.type.props ? o : s),
                  (t.attrs = s);
              })(t, n, o, e),
                ((t, e) => {
                  if (32 & t.vnode.shapeFlag) {
                    const n = e._;
                    n
                      ? ((t.slots = fe(e)), X(e, "_", n))
                      : Ii(e, (t.slots = {}));
                  } else (t.slots = {}), e && Vi(t, e);
                  X(t.slots, _o, 1);
                })(t, i),
                o &&
                  (function (t, e) {
                    const n = t.type;
                    (t.accessCache = Object.create(null)),
                      (t.proxy = ge(new Proxy(t.ctx, Fo)));
                    const { setup: i } = n;
                    if (i) {
                      const n = (t.setupContext = i.length > 1 ? Zo(t) : null);
                      Wo(t), mt();
                      const o = Ie(i, t, 0, [t.props, n]);
                      if ((bt(), Ho(), I(o))) {
                        if ((o.then(Ho, Ho), e))
                          return o
                            .then((n) => {
                              Ko(t, n, e);
                            })
                            .catch((e) => {
                              Fe(e, t, 0);
                            });
                        t.asyncDep = o;
                      } else Ko(t, o, e);
                    } else Xo(t, e);
                  })(t, e),
                (Yo = !1);
            })(a),
            a.asyncDep)
          ) {
            if ((o && o.registerDep(a, V), !t.el)) {
              const t = (a.subTree = Co(lo));
              x(null, t, e, n);
            }
          } else V(a, t, e, n, o, s, r);
        },
        L = (t, e, n) => {
          const i = (e.component = t.component);
          if (
            (function (t, e, n) {
              const { props: i, children: o, component: s } = t,
                { props: r, children: a, patchFlag: l } = e,
                c = s.emitsOptions;
              if (e.dirs || e.transition) return !0;
              if (!(n && l >= 0))
                return (
                  !((!o && !a) || (a && a.$stable)) ||
                  (i !== r && (i ? !r || vn(i, r, c) : !!r))
                );
              if (1024 & l) return !0;
              if (16 & l) return i ? vn(i, r, c) : !!r;
              if (8 & l) {
                const t = e.dynamicProps;
                for (let e = 0; e < t.length; e++) {
                  const n = t[e];
                  if (r[n] !== i[n] && !dn(c, n)) return !0;
                }
              }
              return !1;
            })(t, e, n)
          ) {
            if (i.asyncDep && !i.asyncResolved) return void F(i, e, n);
            (i.next = e),
              (function (t) {
                const e = je.indexOf(t);
                e > ze && je.splice(e, 1);
              })(i.update),
              i.update();
          } else (e.component = t.component), (e.el = t.el), (i.vnode = e);
        },
        V = (t, e, n, i, o, s, r) => {
          const a = (t.effect = new ut(
              () => {
                if (t.isMounted) {
                  let e,
                    { next: n, bu: i, u: a, parent: l, vnode: c } = t,
                    d = n;
                  Ji(t, !1),
                    n ? ((n.el = c.el), F(t, n, r)) : (n = c),
                    i && J(i),
                    (e = n.props && n.props.onVnodeBeforeUpdate) &&
                      Eo(e, l, n, c),
                    Ji(t, !0);
                  const u = mn(t),
                    p = t.subTree;
                  (t.subTree = u),
                    g(p, u, h(p.el), Z(p), t, o, s),
                    (n.el = u.el),
                    null === d && xn(t, u.el),
                    a && qi(a, o),
                    (e = n.props && n.props.onVnodeUpdated) &&
                      qi(() => Eo(e, l, n, c), o);
                } else {
                  let r;
                  const { el: a, props: l } = e,
                    { bm: c, m: h, parent: d } = t,
                    u = qn(e);
                  if (
                    (Ji(t, !1),
                    c && J(c),
                    !u && (r = l && l.onVnodeBeforeMount) && Eo(r, d, e),
                    Ji(t, !0),
                    a && ot)
                  ) {
                    const n = () => {
                      (t.subTree = mn(t)), ot(a, t.subTree, t, o, null);
                    };
                    u
                      ? e.type.__asyncLoader().then(() => !t.isUnmounted && n())
                      : n();
                  } else {
                    const r = (t.subTree = mn(t));
                    g(null, r, n, i, t, o, s), (e.el = r.el);
                  }
                  if ((h && qi(h, o), !u && (r = l && l.onVnodeMounted))) {
                    const t = e;
                    qi(() => Eo(r, d, t), o);
                  }
                  256 & e.shapeFlag && t.a && qi(t.a, o),
                    (t.isMounted = !0),
                    (e = n = i = null);
                }
              },
              () => Ze(t.update),
              t.scope
            )),
            l = (t.update = a.run.bind(a));
          (l.id = t.uid), Ji(t, !0), l();
        },
        F = (t, e, n) => {
          e.component = t;
          const i = t.vnode.props;
          (t.vnode = e),
            (t.next = null),
            (function (t, e, n, i) {
              const {
                  props: o,
                  attrs: s,
                  vnode: { patchFlag: r },
                } = t,
                a = fe(o),
                [l] = t.propsOptions;
              let c = !1;
              if (!(i || r > 0) || 16 & r) {
                let i;
                Ci(t, e, o, s) && (c = !0);
                for (const s in a)
                  (e && (T(e, s) || ((i = q(s)) !== s && T(e, i)))) ||
                    (l
                      ? !n ||
                        (void 0 === n[s] && void 0 === n[i]) ||
                        (o[s] = Ti(l, a, s, void 0, t, !0))
                      : delete o[s]);
                if (s !== a)
                  for (const t in s) (e && T(e, t)) || (delete s[t], (c = !0));
              } else if (8 & r) {
                const n = t.vnode.dynamicProps;
                for (let i = 0; i < n.length; i++) {
                  let r = n[i];
                  const h = e[r];
                  if (l)
                    if (T(s, r)) h !== s[r] && ((s[r] = h), (c = !0));
                    else {
                      const e = H(r);
                      o[e] = Ti(l, a, e, h, t, !1);
                    }
                  else h !== s[r] && ((s[r] = h), (c = !0));
                }
              }
              c && xt(t, "set", "$attrs");
            })(t, e.props, i, n),
            ((t, e, n) => {
              const { vnode: i, slots: o } = t;
              let s = !0,
                r = m;
              if (32 & i.shapeFlag) {
                const t = e._;
                t
                  ? n && 1 === t
                    ? (s = !1)
                    : (k(o, e), n || 1 !== t || delete o._)
                  : ((s = !e.$stable), Ii(e, o)),
                  (r = e);
              } else e && (Vi(t, e), (r = { default: 1 }));
              if (s) for (const t in o) Oi(t) || t in r || delete o[t];
            })(t, e.children, n),
            mt(),
            nn(void 0, t.update),
            bt();
        },
        N = (t, e, n, i, o, s, r, a, l = !1) => {
          const h = t && t.children,
            d = t ? t.shapeFlag : 0,
            u = e.children,
            { patchFlag: p, shapeFlag: f } = e;
          if (p > 0) {
            if (128 & p) return void z(h, u, n, i, o, s, r, a, l);
            if (256 & p) return void B(h, u, n, i, o, s, r, a, l);
          }
          8 & f
            ? (16 & d && K(h, o, s), u !== h && c(n, u))
            : 16 & d
            ? 16 & f
              ? z(h, u, n, i, o, s, r, a, l)
              : K(h, o, s, !0)
            : (8 & d && c(n, ""), 16 & f && A(u, n, i, o, s, r, a, l));
        },
        B = (t, e, n, i, o, s, r, a, l) => {
          const c = (t = t || b).length,
            h = (e = e || b).length,
            d = Math.min(c, h);
          let u;
          for (u = 0; u < d; u++) {
            const i = (e[u] = l ? Do(e[u]) : Po(e[u]));
            g(t[u], i, n, null, o, s, r, a, l);
          }
          c > h ? K(t, o, s, !0, !1, d) : A(e, n, i, o, s, r, a, l, d);
        },
        z = (t, e, n, i, o, s, r, a, l) => {
          let c = 0;
          const h = e.length;
          let d = t.length - 1,
            u = h - 1;
          for (; c <= d && c <= u; ) {
            const i = t[c],
              h = (e[c] = l ? Do(e[c]) : Po(e[c]));
            if (!xo(i, h)) break;
            g(i, h, n, null, o, s, r, a, l), c++;
          }
          for (; c <= d && c <= u; ) {
            const i = t[d],
              c = (e[u] = l ? Do(e[u]) : Po(e[u]));
            if (!xo(i, c)) break;
            g(i, c, n, null, o, s, r, a, l), d--, u--;
          }
          if (c > d) {
            if (c <= u) {
              const t = u + 1,
                d = t < h ? e[t].el : i;
              for (; c <= u; )
                g(null, (e[c] = l ? Do(e[c]) : Po(e[c])), n, d, o, s, r, a, l),
                  c++;
            }
          } else if (c > u) for (; c <= d; ) W(t[c], o, s, !0), c++;
          else {
            const p = c,
              f = c,
              m = new Map();
            for (c = f; c <= u; c++) {
              const t = (e[c] = l ? Do(e[c]) : Po(e[c]));
              null != t.key && m.set(t.key, c);
            }
            let y,
              v = 0;
            const x = u - f + 1;
            let _ = !1,
              w = 0;
            const k = new Array(x);
            for (c = 0; c < x; c++) k[c] = 0;
            for (c = p; c <= d; c++) {
              const i = t[c];
              if (v >= x) {
                W(i, o, s, !0);
                continue;
              }
              let h;
              if (null != i.key) h = m.get(i.key);
              else
                for (y = f; y <= u; y++)
                  if (0 === k[y - f] && xo(i, e[y])) {
                    h = y;
                    break;
                  }
              void 0 === h
                ? W(i, o, s, !0)
                : ((k[h - f] = c + 1),
                  h >= w ? (w = h) : (_ = !0),
                  g(i, e[h], n, null, o, s, r, a, l),
                  v++);
            }
            const S = _
              ? (function (t) {
                  const e = t.slice(),
                    n = [0];
                  let i, o, s, r, a;
                  const l = t.length;
                  for (i = 0; i < l; i++) {
                    const l = t[i];
                    if (0 !== l) {
                      if (((o = n[n.length - 1]), t[o] < l)) {
                        (e[i] = o), n.push(i);
                        continue;
                      }
                      for (s = 0, r = n.length - 1; s < r; )
                        (a = (s + r) >> 1), t[n[a]] < l ? (s = a + 1) : (r = a);
                      l < t[n[s]] && (s > 0 && (e[i] = n[s - 1]), (n[s] = i));
                    }
                  }
                  for (s = n.length, r = n[s - 1]; s-- > 0; )
                    (n[s] = r), (r = e[r]);
                  return n;
                })(k)
              : b;
            for (y = S.length - 1, c = x - 1; c >= 0; c--) {
              const t = f + c,
                d = e[t],
                u = t + 1 < h ? e[t + 1].el : i;
              0 === k[c]
                ? g(null, d, n, u, o, s, r, a, l)
                : _ && (y < 0 || c !== S[y] ? $(d, n, u, 2) : y--);
            }
          }
        },
        $ = (t, e, i, o, s = null) => {
          const {
            el: r,
            type: a,
            transition: l,
            children: c,
            shapeFlag: h,
          } = t;
          if (6 & h) $(t.component.subTree, e, i, o);
          else if (128 & h) t.suspense.move(e, i, o);
          else if (64 & h) a.move(t, e, i, nt);
          else if (a !== ro)
            if (a !== co)
              if (2 !== o && 1 & h && l)
                if (0 === o)
                  l.beforeEnter(r), n(r, e, i), qi(() => l.enter(r), s);
                else {
                  const { leave: t, delayLeave: o, afterLeave: s } = l,
                    a = () => n(r, e, i),
                    c = () => {
                      t(r, () => {
                        a(), s && s();
                      });
                    };
                  o ? o(r, a, c) : c();
                }
              else n(r, e, i);
            else
              (({ el: t, anchor: e }, i, o) => {
                let s;
                for (; t && t !== e; ) (s = d(t)), n(t, i, o), (t = s);
                n(e, i, o);
              })(t, e, i);
          else {
            n(r, e, i);
            for (let t = 0; t < c.length; t++) $(c[t], e, i, o);
            n(t.anchor, e, i);
          }
        },
        W = (t, e, n, i = !1, o = !1) => {
          const {
            type: s,
            props: r,
            ref: a,
            children: l,
            dynamicChildren: c,
            shapeFlag: h,
            patchFlag: d,
            dirs: u,
          } = t;
          if ((null != a && zi(a, null, n, t, !0), 256 & h))
            return void e.ctx.deactivate(t);
          const p = 1 & h && u,
            f = !qn(t);
          let g;
          if ((f && (g = r && r.onVnodeBeforeUnmount) && Eo(g, e, t), 6 & h))
            Y(t.component, n, i);
          else {
            if (128 & h) return void t.suspense.unmount(n, i);
            p && Fi(t, null, e, "beforeUnmount"),
              64 & h
                ? t.type.remove(t, e, n, o, nt, i)
                : c && (s !== ro || (d > 0 && 64 & d))
                ? K(c, e, n, !1, !0)
                : ((s === ro && 384 & d) || (!o && 16 & h)) && K(l, e, n),
              i && U(t);
          }
          ((f && (g = r && r.onVnodeUnmounted)) || p) &&
            qi(() => {
              g && Eo(g, e, t), p && Fi(t, null, e, "unmounted");
            }, n);
        },
        U = (t) => {
          const { type: e, el: n, anchor: o, transition: s } = t;
          if (e === ro) return void G(n, o);
          if (e === co)
            return void (({ el: t, anchor: e }) => {
              let n;
              for (; t && t !== e; ) (n = d(t)), i(t), (t = n);
              i(e);
            })(t);
          const r = () => {
            i(n), s && !s.persisted && s.afterLeave && s.afterLeave();
          };
          if (1 & t.shapeFlag && s && !s.persisted) {
            const { leave: e, delayLeave: i } = s,
              o = () => e(n, r);
            i ? i(t.el, r, o) : o();
          } else r();
        },
        G = (t, e) => {
          let n;
          for (; t !== e; ) (n = d(t)), i(t), (t = n);
          i(e);
        },
        Y = (t, e, n) => {
          const { bum: i, scope: o, update: s, subTree: r, um: a } = t;
          i && J(i),
            o.stop(),
            s && ((s.active = !1), W(r, t, e, n)),
            a && qi(a, e),
            qi(() => {
              t.isUnmounted = !0;
            }, e),
            e &&
              e.pendingBranch &&
              !e.isUnmounted &&
              t.asyncDep &&
              !t.asyncResolved &&
              t.suspenseId === e.pendingId &&
              (e.deps--, 0 === e.deps && e.resolve());
        },
        K = (t, e, n, i = !1, o = !1, s = 0) => {
          for (let r = s; r < t.length; r++) W(t[r], e, n, i, o);
        },
        Z = (t) =>
          6 & t.shapeFlag
            ? Z(t.component.subTree)
            : 128 & t.shapeFlag
            ? t.suspense.next()
            : d(t.anchor || t.el),
        tt = (t, e, n) => {
          null == t
            ? e._vnode && W(e._vnode, null, null, !0)
            : g(e._vnode || null, t, e, null, null, null, n),
            on(),
            (e._vnode = t);
        },
        nt = {
          p: g,
          um: W,
          m: $,
          r: U,
          mt: E,
          mc: A,
          pc: N,
          pbc: P,
          n: Z,
          o: t,
        };
      let it, ot;
      return (
        e && ([it, ot] = e(nt)),
        { render: tt, hydrate: it, createApp: ji(tt, it) }
      );
    }
    function Ji({ effect: t, update: e }, n) {
      t.allowRecurse = e.allowRecurse = n;
    }
    function Xi(t, e, n = !1) {
      const i = t.children,
        o = e.children;
      if (A(i) && A(o))
        for (let t = 0; t < i.length; t++) {
          const e = i[t];
          let s = o[t];
          1 & s.shapeFlag &&
            !s.dynamicChildren &&
            ((s.patchFlag <= 0 || 32 === s.patchFlag) &&
              ((s = o[t] = Do(o[t])), (s.el = e.el)),
            n || Xi(e, s));
        }
    }
    const Zi = (t) => t && (t.disabled || "" === t.disabled),
      Qi = (t) => "undefined" != typeof SVGElement && t instanceof SVGElement,
      to = (t, e) => {
        const n = t && t.to;
        return O(n) ? (e ? e(n) : null) : n;
      };
    function eo(t, e, n, { o: { insert: i }, m: o }, s = 2) {
      0 === s && i(t.targetAnchor, e, n);
      const { el: r, anchor: a, shapeFlag: l, children: c, props: h } = t,
        d = 2 === s;
      if ((d && i(r, e, n), (!d || Zi(h)) && 16 & l))
        for (let t = 0; t < c.length; t++) o(c[t], e, n, 2);
      d && i(a, e, n);
    }
    const no = {
        __isTeleport: !0,
        process(t, e, n, i, o, s, r, a, l, c) {
          const {
              mc: h,
              pc: d,
              pbc: u,
              o: { insert: p, querySelector: f, createText: g },
            } = c,
            m = Zi(e.props);
          let { shapeFlag: b, children: y, dynamicChildren: v } = e;
          if (null == t) {
            const t = (e.el = g("")),
              c = (e.anchor = g(""));
            p(t, n, i), p(c, n, i);
            const d = (e.target = to(e.props, f)),
              u = (e.targetAnchor = g(""));
            d && (p(u, d), (r = r || Qi(d)));
            const v = (t, e) => {
              16 & b && h(y, t, e, o, s, r, a, l);
            };
            m ? v(n, c) : d && v(d, u);
          } else {
            e.el = t.el;
            const i = (e.anchor = t.anchor),
              h = (e.target = t.target),
              p = (e.targetAnchor = t.targetAnchor),
              g = Zi(t.props),
              b = g ? n : h,
              y = g ? i : p;
            if (
              ((r = r || Qi(h)),
              v
                ? (u(t.dynamicChildren, v, b, o, s, r, a), Xi(t, e, !0))
                : l || d(t, e, b, y, o, s, r, a, !1),
              m)
            )
              g || eo(e, n, i, c, 1);
            else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
              const t = (e.target = to(e.props, f));
              t && eo(e, t, null, c, 0);
            } else g && eo(e, h, p, c, 1);
          }
        },
        remove(t, e, n, i, { um: o, o: { remove: s } }, r) {
          const {
            shapeFlag: a,
            children: l,
            anchor: c,
            targetAnchor: h,
            target: d,
            props: u,
          } = t;
          if ((d && s(h), (r || !Zi(u)) && (s(c), 16 & a)))
            for (let t = 0; t < l.length; t++) {
              const i = l[t];
              o(i, e, n, !0, !!i.dynamicChildren);
            }
        },
        move: eo,
        hydrate: function (
          t,
          e,
          n,
          i,
          o,
          s,
          { o: { nextSibling: r, parentNode: a, querySelector: l } },
          c
        ) {
          const h = (e.target = to(e.props, l));
          if (h) {
            const l = h._lpa || h.firstChild;
            16 & e.shapeFlag &&
              (Zi(e.props)
                ? ((e.anchor = c(r(t), e, a(t), n, i, o, s)),
                  (e.targetAnchor = l))
                : ((e.anchor = r(t)),
                  (e.targetAnchor = c(l, e, h, n, i, o, s))),
              (h._lpa = e.targetAnchor && r(e.targetAnchor)));
          }
          return e.anchor && r(e.anchor);
        },
      },
      io = Symbol();
    function oo(t, e, n = !0, i = !1) {
      const o = un || zo;
      if (o) {
        const n = o.type;
        if ("components" === t) {
          const t = es(n);
          if (t && (t === e || t === H(e) || t === G(H(e)))) return n;
        }
        const s = so(o[t] || n[t], e) || so(o.appContext[t], e);
        return !s && i ? n : s;
      }
    }
    function so(t, e) {
      return t && (t[e] || t[H(e)] || t[G(H(e))]);
    }
    const ro = Symbol(void 0),
      ao = Symbol(void 0),
      lo = Symbol(void 0),
      co = Symbol(void 0),
      ho = [];
    let uo = null;
    function po(t = !1) {
      ho.push((uo = t ? null : []));
    }
    function fo() {
      ho.pop(), (uo = ho[ho.length - 1] || null);
    }
    let go = 1;
    function mo(t) {
      go += t;
    }
    function bo(t) {
      return (
        (t.dynamicChildren = go > 0 ? uo || b : null),
        fo(),
        go > 0 && uo && uo.push(t),
        t
      );
    }
    function yo(t, e, n, i, o) {
      return bo(Co(t, e, n, i, o, !0));
    }
    function vo(t) {
      return !!t && !0 === t.__v_isVNode;
    }
    function xo(t, e) {
      return t.type === e.type && t.key === e.key;
    }
    const _o = "__vInternal",
      wo = ({ key: t }) => (null != t ? t : null),
      ko = ({ ref: t, ref_key: e, ref_for: n }) =>
        null != t
          ? O(t) || xe(t) || R(t)
            ? { i: un, r: t, k: e, f: !!n }
            : t
          : null;
    function So(
      t,
      e = null,
      n = null,
      i = 0,
      o = null,
      s = t === ro ? 0 : 1,
      r = !1,
      a = !1
    ) {
      const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t,
        props: e,
        key: e && wo(e),
        ref: e && ko(e),
        scopeId: pn,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: i,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
      };
      return (
        a
          ? (Ro(l, n), 128 & s && t.normalize(l))
          : n && (l.shapeFlag |= O(n) ? 8 : 16),
        go > 0 &&
          !r &&
          uo &&
          (l.patchFlag > 0 || 6 & s) &&
          32 !== l.patchFlag &&
          uo.push(l),
        l
      );
    }
    const Co = function (t, e = null, n = null, i = 0, o = null, r = !1) {
      if (((t && t !== io) || (t = lo), vo(t))) {
        const i = Ao(t, e, !0);
        return n && Ro(i, n), i;
      }
      var a;
      if ((R((a = t)) && "__vccOpts" in a && (t = t.__vccOpts), e)) {
        e = To(e);
        let { class: t, style: n } = e;
        t && !O(t) && (e.class = c(t)),
          L(n) && (pe(n) && !A(n) && (n = k({}, n)), (e.style = s(n)));
      }
      return So(
        t,
        e,
        n,
        i,
        o,
        O(t)
          ? 1
          : ((t) => t.__isSuspense)(t)
          ? 128
          : ((t) => t.__isTeleport)(t)
          ? 64
          : L(t)
          ? 4
          : R(t)
          ? 2
          : 0,
        r,
        !0
      );
    };
    function To(t) {
      return t ? (pe(t) || _o in t ? k({}, t) : t) : null;
    }
    function Ao(t, e, n = !1) {
      const { props: i, ref: o, patchFlag: s, children: r } = t,
        a = e ? Oo(i || {}, e) : i;
      return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: a,
        key: a && wo(a),
        ref:
          e && e.ref
            ? n && o
              ? A(o)
                ? o.concat(ko(e))
                : [o, ko(e)]
              : ko(e)
            : o,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: r,
        target: t.target,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== ro ? (-1 === s ? 16 : 16 | s) : s,
        dynamicProps: t.dynamicProps,
        dynamicChildren: t.dynamicChildren,
        appContext: t.appContext,
        dirs: t.dirs,
        transition: t.transition,
        component: t.component,
        suspense: t.suspense,
        ssContent: t.ssContent && Ao(t.ssContent),
        ssFallback: t.ssFallback && Ao(t.ssFallback),
        el: t.el,
        anchor: t.anchor,
      };
    }
    function Mo(t = " ", e = 0) {
      return Co(ao, null, t, e);
    }
    function Po(t) {
      return null == t || "boolean" == typeof t
        ? Co(lo)
        : A(t)
        ? Co(ro, null, t.slice())
        : "object" == typeof t
        ? Do(t)
        : Co(ao, null, String(t));
    }
    function Do(t) {
      return null === t.el || t.memo ? t : Ao(t);
    }
    function Ro(t, e) {
      let n = 0;
      const { shapeFlag: i } = t;
      if (null == e) e = null;
      else if (A(e)) n = 16;
      else if ("object" == typeof e) {
        if (65 & i) {
          const n = e.default;
          return void (
            n && (n._c && (n._d = !1), Ro(t, n()), n._c && (n._d = !0))
          );
        }
        {
          n = 32;
          const i = e._;
          i || _o in e
            ? 3 === i &&
              un &&
              (1 === un.slots._
                ? (e._ = 1)
                : ((e._ = 2), (t.patchFlag |= 1024)))
            : (e._ctx = un);
        }
      } else
        R(e)
          ? ((e = { default: e, _ctx: un }), (n = 32))
          : ((e = String(e)), 64 & i ? ((n = 16), (e = [Mo(e)])) : (n = 8));
      (t.children = e), (t.shapeFlag |= n);
    }
    function Oo(...t) {
      const e = {};
      for (let n = 0; n < t.length; n++) {
        const i = t[n];
        for (const t in i)
          if ("class" === t)
            e.class !== i.class && (e.class = c([e.class, i.class]));
          else if ("style" === t) e.style = s([e.style, i.style]);
          else if (_(t)) {
            const n = e[t],
              o = i[t];
            !o ||
              n === o ||
              (A(n) && n.includes(o)) ||
              (e[t] = n ? [].concat(n, o) : o);
          } else "" !== t && (e[t] = i[t]);
      }
      return e;
    }
    function Eo(t, e, n, i = null) {
      Ve(t, e, 7, [n, i]);
    }
    function Lo(t) {
      return t.some(
        (t) => !vo(t) || (t.type !== lo && !(t.type === ro && !Lo(t.children)))
      )
        ? t
        : null;
    }
    const Io = (t) => (t ? (Uo(t) ? Qo(t) || t.proxy : Io(t.parent)) : null),
      Vo = k(Object.create(null), {
        $: (t) => t,
        $el: (t) => t.vnode.el,
        $data: (t) => t.data,
        $props: (t) => t.props,
        $attrs: (t) => t.attrs,
        $slots: (t) => t.slots,
        $refs: (t) => t.refs,
        $parent: (t) => Io(t.parent),
        $root: (t) => Io(t.root),
        $emit: (t) => t.emit,
        $options: (t) => yi(t),
        $forceUpdate: (t) => () => Ze(t.update),
        $nextTick: (t) => Xe.bind(t.proxy),
        $watch: (t) => En.bind(t),
      }),
      Fo = {
        get({ _: t }, e) {
          const {
            ctx: n,
            setupState: i,
            data: o,
            props: s,
            accessCache: r,
            type: a,
            appContext: l,
          } = t;
          let c;
          if ("$" !== e[0]) {
            const a = r[e];
            if (void 0 !== a)
              switch (a) {
                case 1:
                  return i[e];
                case 2:
                  return o[e];
                case 4:
                  return n[e];
                case 3:
                  return s[e];
              }
            else {
              if (i !== m && T(i, e)) return (r[e] = 1), i[e];
              if (o !== m && T(o, e)) return (r[e] = 2), o[e];
              if ((c = t.propsOptions[0]) && T(c, e)) return (r[e] = 3), s[e];
              if (n !== m && T(n, e)) return (r[e] = 4), n[e];
              gi && (r[e] = 0);
            }
          }
          const h = Vo[e];
          let d, u;
          return h
            ? ("$attrs" === e && yt(t, 0, e), h(t))
            : (d = a.__cssModules) && (d = d[e])
            ? d
            : n !== m && T(n, e)
            ? ((r[e] = 4), n[e])
            : ((u = l.config.globalProperties), T(u, e) ? u[e] : void 0);
        },
        set({ _: t }, e, n) {
          const { data: i, setupState: o, ctx: s } = t;
          return o !== m && T(o, e)
            ? ((o[e] = n), !0)
            : i !== m && T(i, e)
            ? ((i[e] = n), !0)
            : !(
                T(t.props, e) ||
                ("$" === e[0] && e.slice(1) in t) ||
                ((s[e] = n), 0)
              );
        },
        has(
          {
            _: {
              data: t,
              setupState: e,
              accessCache: n,
              ctx: i,
              appContext: o,
              propsOptions: s,
            },
          },
          r
        ) {
          let a;
          return (
            !!n[r] ||
            (t !== m && T(t, r)) ||
            (e !== m && T(e, r)) ||
            ((a = s[0]) && T(a, r)) ||
            T(i, r) ||
            T(Vo, r) ||
            T(o.config.globalProperties, r)
          );
        },
        defineProperty(t, e, n) {
          return (
            null != n.get
              ? this.set(t, e, n.get(), null)
              : null != n.value && this.set(t, e, n.value, null),
            Reflect.defineProperty(t, e, n)
          );
        },
      },
      No = k({}, Fo, {
        get(t, e) {
          if (e !== Symbol.unscopables) return Fo.get(t, e, t);
        },
        has: (t, e) => "_" !== e[0] && !n(e),
      }),
      Bo = Ni();
    let jo = 0,
      zo = null;
    const $o = () => zo || un,
      Wo = (t) => {
        (zo = t), t.scope.on();
      },
      Ho = () => {
        zo && zo.scope.off(), (zo = null);
      };
    function Uo(t) {
      return 4 & t.vnode.shapeFlag;
    }
    let qo,
      Go,
      Yo = !1;
    function Ko(t, e, n) {
      R(e) ? (t.render = e) : L(e) && (t.setupState = Te(e)), Xo(t, n);
    }
    function Jo(t) {
      (qo = t),
        (Go = (t) => {
          t.render._rc && (t.withProxy = new Proxy(t.ctx, No));
        });
    }
    function Xo(t, e, n) {
      const i = t.type;
      if (!t.render) {
        if (!e && qo && !i.render) {
          const e = i.template;
          if (e) {
            const { isCustomElement: n, compilerOptions: o } =
                t.appContext.config,
              { delimiters: s, compilerOptions: r } = i,
              a = k(k({ isCustomElement: n, delimiters: s }, o), r);
            i.render = qo(e, a);
          }
        }
        (t.render = i.render || y), Go && Go(t);
      }
      Wo(t),
        mt(),
        (function (t) {
          const e = yi(t),
            n = t.proxy,
            i = t.ctx;
          (gi = !1), e.beforeCreate && mi(e.beforeCreate, t, "bc");
          const {
            data: o,
            computed: s,
            methods: r,
            watch: a,
            provide: l,
            inject: c,
            created: h,
            beforeMount: d,
            mounted: u,
            beforeUpdate: p,
            updated: f,
            activated: g,
            deactivated: m,
            beforeUnmount: b,
            unmounted: v,
            render: x,
            renderTracked: _,
            renderTriggered: w,
            errorCaptured: k,
            serverPrefetch: S,
            expose: C,
            inheritAttrs: T,
            components: M,
            directives: P,
          } = e;
          if (
            (c &&
              (function (t, e, n = y, i = !1) {
                A(t) && (t = wi(t));
                for (const n in t) {
                  const o = t[n];
                  let s;
                  (s = L(o)
                    ? "default" in o
                      ? Mn(o.from || n, o.default, !0)
                      : Mn(o.from || n)
                    : Mn(o)),
                    xe(s) && i
                      ? Object.defineProperty(e, n, {
                          enumerable: !0,
                          configurable: !0,
                          get: () => s.value,
                          set: (t) => (s.value = t),
                        })
                      : (e[n] = s);
                }
              })(c, i, null, t.appContext.config.unwrapInjectedRef),
            r)
          )
            for (const t in r) {
              const e = r[t];
              R(e) && (i[t] = e.bind(n));
            }
          if (o) {
            const e = o.call(n, n);
            L(e) && (t.data = re(e));
          }
          if (((gi = !0), s))
            for (const t in s) {
              const e = s[t],
                o = R(e) ? e.bind(n, n) : R(e.get) ? e.get.bind(n, n) : y,
                r = !R(e) && R(e.set) ? e.set.bind(n) : y,
                a = is({ get: o, set: r });
              Object.defineProperty(i, t, {
                enumerable: !0,
                configurable: !0,
                get: () => a.value,
                set: (t) => (a.value = t),
              });
            }
          if (a) for (const t in a) bi(a[t], i, n, t);
          if (l) {
            const t = R(l) ? l.call(n) : l;
            Reflect.ownKeys(t).forEach((e) => {
              An(e, t[e]);
            });
          }
          function D(t, e) {
            A(e) ? e.forEach((e) => t(e.bind(n))) : e && t(e.bind(n));
          }
          if (
            (h && mi(h, t, "c"),
            D(si, d),
            D(ri, u),
            D(ai, p),
            D(li, f),
            D(Xn, g),
            D(Zn, m),
            D(fi, k),
            D(pi, _),
            D(ui, w),
            D(ci, b),
            D(hi, v),
            D(di, S),
            A(C))
          )
            if (C.length) {
              const e = t.exposed || (t.exposed = {});
              C.forEach((t) => {
                Object.defineProperty(e, t, {
                  get: () => n[t],
                  set: (e) => (n[t] = e),
                });
              });
            } else t.exposed || (t.exposed = {});
          x && t.render === y && (t.render = x),
            null != T && (t.inheritAttrs = T),
            M && (t.components = M),
            P && (t.directives = P);
        })(t),
        bt(),
        Ho();
    }
    function Zo(t) {
      let e;
      return {
        get attrs() {
          return (
            e ||
            (e = (function (t) {
              return new Proxy(t.attrs, {
                get: (e, n) => (yt(t, 0, "$attrs"), e[n]),
              });
            })(t))
          );
        },
        slots: t.slots,
        emit: t.emit,
        expose: (e) => {
          t.exposed = e || {};
        },
      };
    }
    function Qo(t) {
      if (t.exposed)
        return (
          t.exposeProxy ||
          (t.exposeProxy = new Proxy(Te(ge(t.exposed)), {
            get: (e, n) => (n in e ? e[n] : n in Vo ? Vo[n](t) : void 0),
          }))
        );
    }
    const ts = /(?:^|[-_])(\w)/g;
    function es(t) {
      return (R(t) && t.displayName) || t.name;
    }
    function ns(t, e, n = !1) {
      let i = es(e);
      if (!i && e.__file) {
        const t = e.__file.match(/([^/\\]+)\.\w+$/);
        t && (i = t[1]);
      }
      if (!i && t && t.parent) {
        const n = (t) => {
          for (const n in t) if (t[n] === e) return n;
        };
        i =
          n(t.components || t.parent.type.components) ||
          n(t.appContext.components);
      }
      return i
        ? i.replace(ts, (t) => t.toUpperCase()).replace(/[-_]/g, "")
        : n
        ? "App"
        : "Anonymous";
    }
    const is = (t, e) =>
      (function (t, e, n = !1) {
        let i, o;
        const s = R(t);
        return (
          s ? ((i = t), (o = y)) : ((i = t.get), (o = t.set)),
          new De(i, o, s || !o, n)
        );
      })(t, 0, Yo);
    function os() {
      const t = $o();
      return t.setupContext || (t.setupContext = Zo(t));
    }
    function ss(t, e, n) {
      const i = arguments.length;
      return 2 === i
        ? L(e) && !A(e)
          ? vo(e)
            ? Co(t, null, [e])
            : Co(t, e)
          : Co(t, null, e)
        : (i > 3
            ? (n = Array.prototype.slice.call(arguments, 2))
            : 3 === i && vo(n) && (n = [n]),
          Co(t, e, n));
    }
    const rs = Symbol("");
    function as(t, e) {
      const n = t.memo;
      if (n.length != e.length) return !1;
      for (let t = 0; t < n.length; t++) if (n[t] !== e[t]) return !1;
      return go > 0 && uo && uo.push(t), !0;
    }
    const ls = "3.2.31",
      cs = "undefined" != typeof document ? document : null,
      hs = cs && cs.createElement("template"),
      ds = {
        insert: (t, e, n) => {
          e.insertBefore(t, n || null);
        },
        remove: (t) => {
          const e = t.parentNode;
          e && e.removeChild(t);
        },
        createElement: (t, e, n, i) => {
          const o = e
            ? cs.createElementNS("http://www.w3.org/2000/svg", t)
            : cs.createElement(t, n ? { is: n } : void 0);
          return (
            "select" === t &&
              i &&
              null != i.multiple &&
              o.setAttribute("multiple", i.multiple),
            o
          );
        },
        createText: (t) => cs.createTextNode(t),
        createComment: (t) => cs.createComment(t),
        setText: (t, e) => {
          t.nodeValue = e;
        },
        setElementText: (t, e) => {
          t.textContent = e;
        },
        parentNode: (t) => t.parentNode,
        nextSibling: (t) => t.nextSibling,
        querySelector: (t) => cs.querySelector(t),
        setScopeId(t, e) {
          t.setAttribute(e, "");
        },
        cloneNode(t) {
          const e = t.cloneNode(!0);
          return "_value" in t && (e._value = t._value), e;
        },
        insertStaticContent(t, e, n, i, o, s) {
          const r = n ? n.previousSibling : e.lastChild;
          if (o && (o === s || o.nextSibling))
            for (
              ;
              e.insertBefore(o.cloneNode(!0), n),
                o !== s && (o = o.nextSibling);

            );
          else {
            hs.innerHTML = i ? `<svg>${t}</svg>` : t;
            const o = hs.content;
            if (i) {
              const t = o.firstChild;
              for (; t.firstChild; ) o.appendChild(t.firstChild);
              o.removeChild(t);
            }
            e.insertBefore(o, n);
          }
          return [
            r ? r.nextSibling : e.firstChild,
            n ? n.previousSibling : e.lastChild,
          ];
        },
      },
      us = /\s*!important$/;
    function ps(t, e, n) {
      if (A(n)) n.forEach((n) => ps(t, e, n));
      else if (e.startsWith("--")) t.setProperty(e, n);
      else {
        const i = (function (t, e) {
          const n = gs[e];
          if (n) return n;
          let i = H(e);
          if ("filter" !== i && i in t) return (gs[e] = i);
          i = G(i);
          for (let n = 0; n < fs.length; n++) {
            const o = fs[n] + i;
            if (o in t) return (gs[e] = o);
          }
          return e;
        })(t, e);
        us.test(n)
          ? t.setProperty(q(i), n.replace(us, ""), "important")
          : (t[i] = n);
      }
    }
    const fs = ["Webkit", "Moz", "ms"],
      gs = {},
      ms = "http://www.w3.org/1999/xlink";
    let bs = Date.now,
      ys = !1;
    if ("undefined" != typeof window) {
      bs() > document.createEvent("Event").timeStamp &&
        (bs = () => performance.now());
      const t = navigator.userAgent.match(/firefox\/(\d+)/i);
      ys = !!(t && Number(t[1]) <= 53);
    }
    let vs = 0;
    const xs = Promise.resolve(),
      _s = () => {
        vs = 0;
      };
    function ws(t, e, n, i) {
      t.addEventListener(e, n, i);
    }
    const ks = /(?:Once|Passive|Capture)$/,
      Ss = /^on[a-z]/;
    function Cs(t, e) {
      const n = Un(t);
      class i extends As {
        constructor(t) {
          super(n, t, e);
        }
      }
      return (i.def = n), i;
    }
    const Ts = "undefined" != typeof HTMLElement ? HTMLElement : class {};
    class As extends Ts {
      constructor(t, e = {}, n) {
        super(),
          (this._def = t),
          (this._props = e),
          (this._instance = null),
          (this._connected = !1),
          (this._resolved = !1),
          (this._numberProps = null),
          this.shadowRoot && n
            ? n(this._createVNode(), this.shadowRoot)
            : this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        (this._connected = !0), this._instance || this._resolveDef();
      }
      disconnectedCallback() {
        (this._connected = !1),
          Xe(() => {
            this._connected ||
              (_r(null, this.shadowRoot), (this._instance = null));
          });
      }
      _resolveDef() {
        if (this._resolved) return;
        this._resolved = !0;
        for (let t = 0; t < this.attributes.length; t++)
          this._setAttr(this.attributes[t].name);
        new MutationObserver((t) => {
          for (const e of t) this._setAttr(e.attributeName);
        }).observe(this, { attributes: !0 });
        const t = (t) => {
            const { props: e, styles: n } = t,
              i = !A(e),
              o = e ? (i ? Object.keys(e) : e) : [];
            let s;
            if (i)
              for (const t in this._props) {
                const n = e[t];
                (n === Number || (n && n.type === Number)) &&
                  ((this._props[t] = Z(this._props[t])),
                  ((s || (s = Object.create(null)))[t] = !0));
              }
            this._numberProps = s;
            for (const t of Object.keys(this))
              "_" !== t[0] && this._setProp(t, this[t], !0, !1);
            for (const t of o.map(H))
              Object.defineProperty(this, t, {
                get() {
                  return this._getProp(t);
                },
                set(e) {
                  this._setProp(t, e);
                },
              });
            this._applyStyles(n), this._update();
          },
          e = this._def.__asyncLoader;
        e ? e().then(t) : t(this._def);
      }
      _setAttr(t) {
        let e = this.getAttribute(t);
        this._numberProps && this._numberProps[t] && (e = Z(e)),
          this._setProp(H(t), e, !1);
      }
      _getProp(t) {
        return this._props[t];
      }
      _setProp(t, e, n = !0, i = !0) {
        e !== this._props[t] &&
          ((this._props[t] = e),
          i && this._instance && this._update(),
          n &&
            (!0 === e
              ? this.setAttribute(q(t), "")
              : "string" == typeof e || "number" == typeof e
              ? this.setAttribute(q(t), e + "")
              : e || this.removeAttribute(q(t))));
      }
      _update() {
        _r(this._createVNode(), this.shadowRoot);
      }
      _createVNode() {
        const t = Co(this._def, k({}, this._props));
        return (
          this._instance ||
            (t.ce = (t) => {
              (this._instance = t),
                (t.isCE = !0),
                (t.emit = (t, ...e) => {
                  this.dispatchEvent(new CustomEvent(t, { detail: e }));
                });
              let e = this;
              for (; (e = e && (e.parentNode || e.host)); )
                if (e instanceof As) {
                  t.parent = e._instance;
                  break;
                }
            }),
          t
        );
      }
      _applyStyles(t) {
        t &&
          t.forEach((t) => {
            const e = document.createElement("style");
            (e.textContent = t), this.shadowRoot.appendChild(e);
          });
      }
    }
    function Ms(t, e) {
      if (128 & t.shapeFlag) {
        const n = t.suspense;
        (t = n.activeBranch),
          n.pendingBranch &&
            !n.isHydrating &&
            n.effects.push(() => {
              Ms(n.activeBranch, e);
            });
      }
      for (; t.component; ) t = t.component.subTree;
      if (1 & t.shapeFlag && t.el) Ps(t.el, e);
      else if (t.type === ro) t.children.forEach((t) => Ms(t, e));
      else if (t.type === co) {
        let { el: n, anchor: i } = t;
        for (; n && (Ps(n, e), n !== i); ) n = n.nextSibling;
      }
    }
    function Ps(t, e) {
      if (1 === t.nodeType) {
        const n = t.style;
        for (const t in e) n.setProperty(`--${t}`, e[t]);
      }
    }
    const Ds = (t, { slots: e }) => ss(Nn, Is(t), e);
    Ds.displayName = "Transition";
    const Rs = {
        name: String,
        type: String,
        css: { type: Boolean, default: !0 },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String,
      },
      Os = (Ds.props = k({}, Nn.props, Rs)),
      Es = (t, e = []) => {
        A(t) ? t.forEach((t) => t(...e)) : t && t(...e);
      },
      Ls = (t) => !!t && (A(t) ? t.some((t) => t.length > 1) : t.length > 1);
    function Is(t) {
      const e = {};
      for (const n in t) n in Rs || (e[n] = t[n]);
      if (!1 === t.css) return e;
      const {
          name: n = "v",
          type: i,
          duration: o,
          enterFromClass: s = `${n}-enter-from`,
          enterActiveClass: r = `${n}-enter-active`,
          enterToClass: a = `${n}-enter-to`,
          appearFromClass: l = s,
          appearActiveClass: c = r,
          appearToClass: h = a,
          leaveFromClass: d = `${n}-leave-from`,
          leaveActiveClass: u = `${n}-leave-active`,
          leaveToClass: p = `${n}-leave-to`,
        } = t,
        f = (function (t) {
          if (null == t) return null;
          if (L(t)) return [Vs(t.enter), Vs(t.leave)];
          {
            const e = Vs(t);
            return [e, e];
          }
        })(o),
        g = f && f[0],
        m = f && f[1],
        {
          onBeforeEnter: b,
          onEnter: y,
          onEnterCancelled: v,
          onLeave: x,
          onLeaveCancelled: _,
          onBeforeAppear: w = b,
          onAppear: S = y,
          onAppearCancelled: C = v,
        } = e,
        T = (t, e, n) => {
          Ns(t, e ? h : a), Ns(t, e ? c : r), n && n();
        },
        A = (t, e) => {
          Ns(t, p), Ns(t, u), e && e();
        },
        M = (t) => (e, n) => {
          const o = t ? S : y,
            r = () => T(e, t, n);
          Es(o, [e, r]),
            Bs(() => {
              Ns(e, t ? l : s), Fs(e, t ? h : a), Ls(o) || zs(e, i, g, r);
            });
        };
      return k(e, {
        onBeforeEnter(t) {
          Es(b, [t]), Fs(t, s), Fs(t, r);
        },
        onBeforeAppear(t) {
          Es(w, [t]), Fs(t, l), Fs(t, c);
        },
        onEnter: M(!1),
        onAppear: M(!0),
        onLeave(t, e) {
          const n = () => A(t, e);
          Fs(t, d),
            Us(),
            Fs(t, u),
            Bs(() => {
              Ns(t, d), Fs(t, p), Ls(x) || zs(t, i, m, n);
            }),
            Es(x, [t, n]);
        },
        onEnterCancelled(t) {
          T(t, !1), Es(v, [t]);
        },
        onAppearCancelled(t) {
          T(t, !0), Es(C, [t]);
        },
        onLeaveCancelled(t) {
          A(t), Es(_, [t]);
        },
      });
    }
    function Vs(t) {
      return Z(t);
    }
    function Fs(t, e) {
      e.split(/\s+/).forEach((e) => e && t.classList.add(e)),
        (t._vtc || (t._vtc = new Set())).add(e);
    }
    function Ns(t, e) {
      e.split(/\s+/).forEach((e) => e && t.classList.remove(e));
      const { _vtc: n } = t;
      n && (n.delete(e), n.size || (t._vtc = void 0));
    }
    function Bs(t) {
      requestAnimationFrame(() => {
        requestAnimationFrame(t);
      });
    }
    let js = 0;
    function zs(t, e, n, i) {
      const o = (t._endId = ++js),
        s = () => {
          o === t._endId && i();
        };
      if (n) return setTimeout(s, n);
      const { type: r, timeout: a, propCount: l } = $s(t, e);
      if (!r) return i();
      const c = r + "end";
      let h = 0;
      const d = () => {
          t.removeEventListener(c, u), s();
        },
        u = (e) => {
          e.target === t && ++h >= l && d();
        };
      setTimeout(() => {
        h < l && d();
      }, a + 1),
        t.addEventListener(c, u);
    }
    function $s(t, e) {
      const n = window.getComputedStyle(t),
        i = (t) => (n[t] || "").split(", "),
        o = i("transitionDelay"),
        s = i("transitionDuration"),
        r = Ws(o, s),
        a = i("animationDelay"),
        l = i("animationDuration"),
        c = Ws(a, l);
      let h = null,
        d = 0,
        u = 0;
      return (
        "transition" === e
          ? r > 0 && ((h = "transition"), (d = r), (u = s.length))
          : "animation" === e
          ? c > 0 && ((h = "animation"), (d = c), (u = l.length))
          : ((d = Math.max(r, c)),
            (h = d > 0 ? (r > c ? "transition" : "animation") : null),
            (u = h ? ("transition" === h ? s.length : l.length) : 0)),
        {
          type: h,
          timeout: d,
          propCount: u,
          hasTransform:
            "transition" === h &&
            /\b(transform|all)(,|$)/.test(n.transitionProperty),
        }
      );
    }
    function Ws(t, e) {
      for (; t.length < e.length; ) t = t.concat(t);
      return Math.max(...e.map((e, n) => Hs(e) + Hs(t[n])));
    }
    function Hs(t) {
      return 1e3 * Number(t.slice(0, -1).replace(",", "."));
    }
    function Us() {
      return document.body.offsetHeight;
    }
    const qs = new WeakMap(),
      Gs = new WeakMap(),
      Ys = {
        name: "TransitionGroup",
        props: k({}, Os, { tag: String, moveClass: String }),
        setup(t, { slots: e }) {
          const n = $o(),
            i = Vn();
          let o, s;
          return (
            li(() => {
              if (!o.length) return;
              const e = t.moveClass || `${t.name || "v"}-move`;
              if (
                !(function (t, e, n) {
                  const i = t.cloneNode();
                  t._vtc &&
                    t._vtc.forEach((t) => {
                      t.split(/\s+/).forEach((t) => t && i.classList.remove(t));
                    }),
                    n.split(/\s+/).forEach((t) => t && i.classList.add(t)),
                    (i.style.display = "none");
                  const o = 1 === e.nodeType ? e : e.parentNode;
                  o.appendChild(i);
                  const { hasTransform: s } = $s(i);
                  return o.removeChild(i), s;
                })(o[0].el, n.vnode.el, e)
              )
                return;
              o.forEach(Ks), o.forEach(Js);
              const i = o.filter(Xs);
              Us(),
                i.forEach((t) => {
                  const n = t.el,
                    i = n.style;
                  Fs(n, e),
                    (i.transform =
                      i.webkitTransform =
                      i.transitionDuration =
                        "");
                  const o = (n._moveCb = (t) => {
                    (t && t.target !== n) ||
                      (t && !/transform$/.test(t.propertyName)) ||
                      (n.removeEventListener("transitionend", o),
                      (n._moveCb = null),
                      Ns(n, e));
                  });
                  n.addEventListener("transitionend", o);
                });
            }),
            () => {
              const r = fe(t),
                a = Is(r);
              let l = r.tag || ro;
              (o = s), (s = e.default ? Hn(e.default()) : []);
              for (let t = 0; t < s.length; t++) {
                const e = s[t];
                null != e.key && Wn(e, jn(e, a, i, n));
              }
              if (o)
                for (let t = 0; t < o.length; t++) {
                  const e = o[t];
                  Wn(e, jn(e, a, i, n)),
                    qs.set(e, e.el.getBoundingClientRect());
                }
              return Co(l, null, s);
            }
          );
        },
      };
    function Ks(t) {
      const e = t.el;
      e._moveCb && e._moveCb(), e._enterCb && e._enterCb();
    }
    function Js(t) {
      Gs.set(t, t.el.getBoundingClientRect());
    }
    function Xs(t) {
      const e = qs.get(t),
        n = Gs.get(t),
        i = e.left - n.left,
        o = e.top - n.top;
      if (i || o) {
        const e = t.el.style;
        return (
          (e.transform = e.webkitTransform = `translate(${i}px,${o}px)`),
          (e.transitionDuration = "0s"),
          t
        );
      }
    }
    const Zs = (t) => {
      const e = t.props["onUpdate:modelValue"];
      return A(e) ? (t) => J(e, t) : e;
    };
    function Qs(t) {
      t.target.composing = !0;
    }
    function tr(t) {
      const e = t.target;
      e.composing &&
        ((e.composing = !1),
        (function (t, e) {
          const n = document.createEvent("HTMLEvents");
          n.initEvent("input", !0, !0), t.dispatchEvent(n);
        })(e));
    }
    const er = {
        created(t, { modifiers: { lazy: e, trim: n, number: i } }, o) {
          t._assign = Zs(o);
          const s = i || (o.props && "number" === o.props.type);
          ws(t, e ? "change" : "input", (e) => {
            if (e.target.composing) return;
            let i = t.value;
            n ? (i = i.trim()) : s && (i = Z(i)), t._assign(i);
          }),
            n &&
              ws(t, "change", () => {
                t.value = t.value.trim();
              }),
            e ||
              (ws(t, "compositionstart", Qs),
              ws(t, "compositionend", tr),
              ws(t, "change", tr));
        },
        mounted(t, { value: e }) {
          t.value = null == e ? "" : e;
        },
        beforeUpdate(
          t,
          { value: e, modifiers: { lazy: n, trim: i, number: o } },
          s
        ) {
          if (((t._assign = Zs(s)), t.composing)) return;
          if (document.activeElement === t) {
            if (n) return;
            if (i && t.value.trim() === e) return;
            if ((o || "number" === t.type) && Z(t.value) === e) return;
          }
          const r = null == e ? "" : e;
          t.value !== r && (t.value = r);
        },
      },
      nr = {
        deep: !0,
        created(t, e, n) {
          (t._assign = Zs(n)),
            ws(t, "change", () => {
              const e = t._modelValue,
                n = ar(t),
                i = t.checked,
                o = t._assign;
              if (A(e)) {
                const t = f(e, n),
                  s = -1 !== t;
                if (i && !s) o(e.concat(n));
                else if (!i && s) {
                  const n = [...e];
                  n.splice(t, 1), o(n);
                }
              } else if (P(e)) {
                const t = new Set(e);
                i ? t.add(n) : t.delete(n), o(t);
              } else o(lr(t, i));
            });
        },
        mounted: ir,
        beforeUpdate(t, e, n) {
          (t._assign = Zs(n)), ir(t, e, n);
        },
      };
    function ir(t, { value: e, oldValue: n }, i) {
      (t._modelValue = e),
        A(e)
          ? (t.checked = f(e, i.props.value) > -1)
          : P(e)
          ? (t.checked = e.has(i.props.value))
          : e !== n && (t.checked = p(e, lr(t, !0)));
    }
    const or = {
        created(t, { value: e }, n) {
          (t.checked = p(e, n.props.value)),
            (t._assign = Zs(n)),
            ws(t, "change", () => {
              t._assign(ar(t));
            });
        },
        beforeUpdate(t, { value: e, oldValue: n }, i) {
          (t._assign = Zs(i)), e !== n && (t.checked = p(e, i.props.value));
        },
      },
      sr = {
        deep: !0,
        created(t, { value: e, modifiers: { number: n } }, i) {
          const o = P(e);
          ws(t, "change", () => {
            const e = Array.prototype.filter
              .call(t.options, (t) => t.selected)
              .map((t) => (n ? Z(ar(t)) : ar(t)));
            t._assign(t.multiple ? (o ? new Set(e) : e) : e[0]);
          }),
            (t._assign = Zs(i));
        },
        mounted(t, { value: e }) {
          rr(t, e);
        },
        beforeUpdate(t, e, n) {
          t._assign = Zs(n);
        },
        updated(t, { value: e }) {
          rr(t, e);
        },
      };
    function rr(t, e) {
      const n = t.multiple;
      if (!n || A(e) || P(e)) {
        for (let i = 0, o = t.options.length; i < o; i++) {
          const o = t.options[i],
            s = ar(o);
          if (n) o.selected = A(e) ? f(e, s) > -1 : e.has(s);
          else if (p(ar(o), e))
            return void (t.selectedIndex !== i && (t.selectedIndex = i));
        }
        n || -1 === t.selectedIndex || (t.selectedIndex = -1);
      }
    }
    function ar(t) {
      return "_value" in t ? t._value : t.value;
    }
    function lr(t, e) {
      const n = e ? "_trueValue" : "_falseValue";
      return n in t ? t[n] : e;
    }
    const cr = {
      created(t, e, n) {
        hr(t, e, n, null, "created");
      },
      mounted(t, e, n) {
        hr(t, e, n, null, "mounted");
      },
      beforeUpdate(t, e, n, i) {
        hr(t, e, n, i, "beforeUpdate");
      },
      updated(t, e, n, i) {
        hr(t, e, n, i, "updated");
      },
    };
    function hr(t, e, n, i, o) {
      let s;
      switch (t.tagName) {
        case "SELECT":
          s = sr;
          break;
        case "TEXTAREA":
          s = er;
          break;
        default:
          switch (n.props && n.props.type) {
            case "checkbox":
              s = nr;
              break;
            case "radio":
              s = or;
              break;
            default:
              s = er;
          }
      }
      const r = s[o];
      r && r(t, e, n, i);
    }
    const dr = ["ctrl", "shift", "alt", "meta"],
      ur = {
        stop: (t) => t.stopPropagation(),
        prevent: (t) => t.preventDefault(),
        self: (t) => t.target !== t.currentTarget,
        ctrl: (t) => !t.ctrlKey,
        shift: (t) => !t.shiftKey,
        alt: (t) => !t.altKey,
        meta: (t) => !t.metaKey,
        left: (t) => "button" in t && 0 !== t.button,
        middle: (t) => "button" in t && 1 !== t.button,
        right: (t) => "button" in t && 2 !== t.button,
        exact: (t, e) => dr.some((n) => t[`${n}Key`] && !e.includes(n)),
      },
      pr = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace",
      },
      fr = {
        beforeMount(t, { value: e }, { transition: n }) {
          (t._vod = "none" === t.style.display ? "" : t.style.display),
            n && e ? n.beforeEnter(t) : gr(t, e);
        },
        mounted(t, { value: e }, { transition: n }) {
          n && e && n.enter(t);
        },
        updated(t, { value: e, oldValue: n }, { transition: i }) {
          !e != !n &&
            (i
              ? e
                ? (i.beforeEnter(t), gr(t, !0), i.enter(t))
                : i.leave(t, () => {
                    gr(t, !1);
                  })
              : gr(t, e));
        },
        beforeUnmount(t, { value: e }) {
          gr(t, e);
        },
      };
    function gr(t, e) {
      t.style.display = e ? t._vod : "none";
    }
    const mr = k(
      {
        patchProp: (t, e, n, s, r = !1, a, l, c, h) => {
          "class" === e
            ? (function (t, e, n) {
                const i = t._vtc;
                i && (e = (e ? [e, ...i] : [...i]).join(" ")),
                  null == e
                    ? t.removeAttribute("class")
                    : n
                    ? t.setAttribute("class", e)
                    : (t.className = e);
              })(t, s, r)
            : "style" === e
            ? (function (t, e, n) {
                const i = t.style,
                  o = O(n);
                if (n && !o) {
                  for (const t in n) ps(i, t, n[t]);
                  if (e && !O(e))
                    for (const t in e) null == n[t] && ps(i, t, "");
                } else {
                  const s = i.display;
                  o
                    ? e !== n && (i.cssText = n)
                    : e && t.removeAttribute("style"),
                    "_vod" in t && (i.display = s);
                }
              })(t, n, s)
            : _(e)
            ? w(e) ||
              (function (t, e, n, i, o = null) {
                const s = t._vei || (t._vei = {}),
                  r = s[e];
                if (i && r) r.value = i;
                else {
                  const [n, a] = (function (t) {
                    let e;
                    if (ks.test(t)) {
                      let n;
                      for (e = {}; (n = t.match(ks)); )
                        (t = t.slice(0, t.length - n[0].length)),
                          (e[n[0].toLowerCase()] = !0);
                    }
                    return [q(t.slice(2)), e];
                  })(e);
                  if (i) {
                    const r = (s[e] = (function (t, e) {
                      const n = (t) => {
                        const i = t.timeStamp || bs();
                        (ys || i >= n.attached - 1) &&
                          Ve(
                            (function (t, e) {
                              if (A(e)) {
                                const n = t.stopImmediatePropagation;
                                return (
                                  (t.stopImmediatePropagation = () => {
                                    n.call(t), (t._stopped = !0);
                                  }),
                                  e.map((t) => (e) => !e._stopped && t && t(e))
                                );
                              }
                              return e;
                            })(t, n.value),
                            e,
                            5,
                            [t]
                          );
                      };
                      return (
                        (n.value = t),
                        (n.attached = vs || (xs.then(_s), (vs = bs()))),
                        n
                      );
                    })(i, o));
                    ws(t, n, r, a);
                  } else
                    r &&
                      ((function (t, e, n, i) {
                        t.removeEventListener(e, n, i);
                      })(t, n, r, a),
                      (s[e] = void 0));
                }
              })(t, e, 0, s, l)
            : (
                "." === e[0]
                  ? ((e = e.slice(1)), 1)
                  : "^" === e[0]
                  ? ((e = e.slice(1)), 0)
                  : (function (t, e, n, i) {
                      return i
                        ? "innerHTML" === e ||
                            "textContent" === e ||
                            !!(e in t && Ss.test(e) && R(n))
                        : !(
                            "spellcheck" === e ||
                            "draggable" === e ||
                            "form" === e ||
                            ("list" === e && "INPUT" === t.tagName) ||
                            ("type" === e && "TEXTAREA" === t.tagName) ||
                            (Ss.test(e) && O(n)) ||
                            !(e in t)
                          );
                    })(t, e, s, r)
              )
            ? (function (t, e, n, i, s, r, a) {
                if ("innerHTML" === e || "textContent" === e)
                  return i && a(i, s, r), void (t[e] = null == n ? "" : n);
                if (
                  "value" === e &&
                  "PROGRESS" !== t.tagName &&
                  !t.tagName.includes("-")
                ) {
                  t._value = n;
                  const i = null == n ? "" : n;
                  return (
                    (t.value === i && "OPTION" !== t.tagName) || (t.value = i),
                    void (null == n && t.removeAttribute(e))
                  );
                }
                if ("" === n || null == n) {
                  const i = typeof t[e];
                  if ("boolean" === i) return void (t[e] = o(n));
                  if (null == n && "string" === i)
                    return (t[e] = ""), void t.removeAttribute(e);
                  if ("number" === i) {
                    try {
                      t[e] = 0;
                    } catch (t) {}
                    return void t.removeAttribute(e);
                  }
                }
                try {
                  t[e] = n;
                } catch (t) {}
              })(t, e, s, a, l, c, h)
            : ("true-value" === e
                ? (t._trueValue = s)
                : "false-value" === e && (t._falseValue = s),
              (function (t, e, n, s, r) {
                if (s && e.startsWith("xlink:"))
                  null == n
                    ? t.removeAttributeNS(ms, e.slice(6, e.length))
                    : t.setAttributeNS(ms, e, n);
                else {
                  const s = i(e);
                  null == n || (s && !o(n))
                    ? t.removeAttribute(e)
                    : t.setAttribute(e, s ? "" : n);
                }
              })(t, e, s, r));
        },
      },
      ds
    );
    let br,
      yr = !1;
    function vr() {
      return br || (br = Gi(mr));
    }
    function xr() {
      return (br = yr ? br : Yi(mr)), (yr = !0), br;
    }
    const _r = (...t) => {
        vr().render(...t);
      },
      wr = (...t) => {
        xr().hydrate(...t);
      },
      kr = (...t) => {
        const e = vr().createApp(...t),
          { mount: n } = e;
        return (
          (e.mount = (t) => {
            const i = Sr(t);
            if (!i) return;
            const o = e._component;
            R(o) || o.render || o.template || (o.template = i.innerHTML),
              (i.innerHTML = "");
            const s = n(i, !1, i instanceof SVGElement);
            return (
              i instanceof Element &&
                (i.removeAttribute("v-cloak"),
                i.setAttribute("data-v-app", "")),
              s
            );
          }),
          e
        );
      };
    function Sr(t) {
      return O(t) ? document.querySelector(t) : t;
    }
    const Cr = y;
    var Tr = Object.freeze({
      __proto__: null,
      render: _r,
      hydrate: wr,
      createApp: kr,
      createSSRApp: (...t) => {
        const e = xr().createApp(...t),
          { mount: n } = e;
        return (
          (e.mount = (t) => {
            const e = Sr(t);
            if (e) return n(e, !0, e instanceof SVGElement);
          }),
          e
        );
      },
      initDirectivesForSSR: Cr,
      defineCustomElement: Cs,
      defineSSRCustomElement: (t) => Cs(t, wr),
      VueElement: As,
      useCssModule: function (t = "$style") {
        {
          const e = $o();
          if (!e) return m;
          const n = e.type.__cssModules;
          return (n && n[t]) || m;
        }
      },
      useCssVars: function (t) {
        const e = $o();
        if (!e) return;
        const n = () => Ms(e.subTree, t(e.proxy));
        Pn(n),
          ri(() => {
            const t = new MutationObserver(n);
            t.observe(e.subTree.el.parentNode, { childList: !0 }),
              hi(() => t.disconnect());
          });
      },
      Transition: Ds,
      TransitionGroup: Ys,
      vModelText: er,
      vModelCheckbox: nr,
      vModelRadio: or,
      vModelSelect: sr,
      vModelDynamic: cr,
      withModifiers:
        (t, e) =>
        (n, ...i) => {
          for (let t = 0; t < e.length; t++) {
            const i = ur[e[t]];
            if (i && i(n, e)) return;
          }
          return t(n, ...i);
        },
      withKeys: (t, e) => (n) => {
        if (!("key" in n)) return;
        const i = q(n.key);
        return e.some((t) => t === i || pr[t] === i) ? t(n) : void 0;
      },
      vShow: fr,
      reactive: re,
      ref: _e,
      readonly: le,
      unref: Se,
      proxyRefs: Te,
      isRef: xe,
      toRef: Pe,
      toRefs: function (t) {
        const e = A(t) ? new Array(t.length) : {};
        for (const n in t) e[n] = Pe(t, n);
        return e;
      },
      isProxy: pe,
      isReactive: he,
      isReadonly: de,
      isShallow: ue,
      customRef: function (t) {
        return new Ae(t);
      },
      triggerRef: function (t) {
        ve(t);
      },
      shallowRef: function (t) {
        return we(t, !0);
      },
      shallowReactive: ae,
      shallowReadonly: function (t) {
        return ce(t, !0, Lt, ee, se);
      },
      markRaw: ge,
      toRaw: fe,
      effect: function (t, e) {
        t.effect && (t = t.effect.fn);
        const n = new ut(t);
        e && (k(n, e), e.scope && nt(n, e.scope)), (e && e.lazy) || n.run();
        const i = n.run.bind(n);
        return (i.effect = n), i;
      },
      stop: function (t) {
        t.effect.stop();
      },
      ReactiveEffect: ut,
      effectScope: function (t) {
        return new et(t);
      },
      EffectScope: et,
      getCurrentScope: function () {
        return tt;
      },
      onScopeDispose: function (t) {
        tt && tt.cleanups.push(t);
      },
      computed: is,
      watch: Rn,
      watchEffect: function (t, e) {
        return On(t, null, e);
      },
      watchPostEffect: Pn,
      watchSyncEffect: function (t, e) {
        return On(t, null, { flush: "sync" });
      },
      onBeforeMount: si,
      onMounted: ri,
      onBeforeUpdate: ai,
      onUpdated: li,
      onBeforeUnmount: ci,
      onUnmounted: hi,
      onActivated: Xn,
      onDeactivated: Zn,
      onRenderTracked: pi,
      onRenderTriggered: ui,
      onErrorCaptured: fi,
      onServerPrefetch: di,
      provide: An,
      inject: Mn,
      nextTick: Xe,
      defineComponent: Un,
      defineAsyncComponent: function (t) {
        R(t) && (t = { loader: t });
        const {
          loader: e,
          loadingComponent: n,
          errorComponent: i,
          delay: o = 200,
          timeout: s,
          suspensible: r = !0,
          onError: a,
        } = t;
        let l,
          c = null,
          h = 0;
        const d = () => {
          let t;
          return (
            c ||
            (t = c =
              e()
                .catch((t) => {
                  if (((t = t instanceof Error ? t : new Error(String(t))), a))
                    return new Promise((e, n) => {
                      a(
                        t,
                        () => e((h++, (c = null), d())),
                        () => n(t),
                        h + 1
                      );
                    });
                  throw t;
                })
                .then((e) =>
                  t !== c && c
                    ? c
                    : (e &&
                        (e.__esModule || "Module" === e[Symbol.toStringTag]) &&
                        (e = e.default),
                      (l = e),
                      e)
                ))
          );
        };
        return Un({
          name: "AsyncComponentWrapper",
          __asyncLoader: d,
          get __asyncResolved() {
            return l;
          },
          setup() {
            const t = zo;
            if (l) return () => Gn(l, t);
            const e = (e) => {
              (c = null), Fe(e, t, 13, !i);
            };
            if (r && t.suspense)
              return d()
                .then((e) => () => Gn(e, t))
                .catch((t) => (e(t), () => (i ? Co(i, { error: t }) : null)));
            const a = _e(!1),
              h = _e(),
              u = _e(!!o);
            return (
              o &&
                setTimeout(() => {
                  u.value = !1;
                }, o),
              null != s &&
                setTimeout(() => {
                  if (!a.value && !h.value) {
                    const t = new Error(
                      `Async component timed out after ${s}ms.`
                    );
                    e(t), (h.value = t);
                  }
                }, s),
              d()
                .then(() => {
                  (a.value = !0),
                    t.parent && Yn(t.parent.vnode) && Ze(t.parent.update);
                })
                .catch((t) => {
                  e(t), (h.value = t);
                }),
              () =>
                a.value && l
                  ? Gn(l, t)
                  : h.value && i
                  ? Co(i, { error: h.value })
                  : n && !u.value
                  ? Co(n)
                  : void 0
            );
          },
        });
      },
      useAttrs: function () {
        return os().attrs;
      },
      useSlots: function () {
        return os().slots;
      },
      defineProps: function () {
        return null;
      },
      defineEmits: function () {
        return null;
      },
      defineExpose: function (t) {},
      withDefaults: function (t, e) {
        return null;
      },
      mergeDefaults: function (t, e) {
        const n = A(t) ? t.reduce((t, e) => ((t[e] = {}), t), {}) : t;
        for (const t in e) {
          const i = n[t];
          i
            ? A(i) || R(i)
              ? (n[t] = { type: i, default: e[t] })
              : (i.default = e[t])
            : null === i && (n[t] = { default: e[t] });
        }
        return n;
      },
      createPropsRestProxy: function (t, e) {
        const n = {};
        for (const i in t)
          e.includes(i) ||
            Object.defineProperty(n, i, { enumerable: !0, get: () => t[i] });
        return n;
      },
      withAsyncContext: function (t) {
        const e = $o();
        let n = t();
        return (
          Ho(),
          I(n) &&
            (n = n.catch((t) => {
              throw (Wo(e), t);
            })),
          [n, () => Wo(e)]
        );
      },
      getCurrentInstance: $o,
      h: ss,
      createVNode: Co,
      cloneVNode: Ao,
      mergeProps: Oo,
      isVNode: vo,
      Fragment: ro,
      Text: ao,
      Comment: lo,
      Static: co,
      Teleport: no,
      Suspense: _n,
      KeepAlive: Kn,
      BaseTransition: Nn,
      withDirectives: function (t, e) {
        if (null === un) return t;
        const n = un.proxy,
          i = t.dirs || (t.dirs = []);
        for (let t = 0; t < e.length; t++) {
          let [o, s, r, a = m] = e[t];
          R(o) && (o = { mounted: o, updated: o }),
            o.deep && In(s),
            i.push({
              dir: o,
              instance: n,
              value: s,
              oldValue: void 0,
              arg: r,
              modifiers: a,
            });
        }
        return t;
      },
      useSSRContext: () => {
        {
          const t = Mn(rs);
          return (
            t ||
              Oe(
                "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
              ),
            t
          );
        }
      },
      ssrContextKey: rs,
      createRenderer: Gi,
      createHydrationRenderer: Yi,
      queuePostFlushCb: en,
      warn: Oe,
      handleError: Fe,
      callWithErrorHandling: Ie,
      callWithAsyncErrorHandling: Ve,
      resolveComponent: function (t, e) {
        return oo("components", t, !0, e) || t;
      },
      resolveDirective: function (t) {
        return oo("directives", t);
      },
      resolveDynamicComponent: function (t) {
        return O(t) ? oo("components", t, !1) || t : t || io;
      },
      registerRuntimeCompiler: Jo,
      isRuntimeOnly: () => !qo,
      useTransitionState: Vn,
      resolveTransitionHooks: jn,
      setTransitionHooks: Wn,
      getTransitionRawChildren: Hn,
      initCustomFormatter: function () {},
      get devtools() {
        return an;
      },
      setDevtoolsHook: function t(e, n) {
        var i, o;
        (an = e),
          an
            ? ((an.enabled = !0),
              ln.forEach(({ event: t, args: e }) => an.emit(t, ...e)),
              (ln = []))
            : "undefined" != typeof window &&
              window.HTMLElement &&
              !(null ===
                (o =
                  null === (i = window.navigator) || void 0 === i
                    ? void 0
                    : i.userAgent) || void 0 === o
                ? void 0
                : o.includes("jsdom"))
            ? ((n.__VUE_DEVTOOLS_HOOK_REPLAY__ =
                n.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
                t(e, n);
              }),
              setTimeout(() => {
                an || ((n.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (ln = []));
              }, 3e3))
            : (ln = []);
      },
      withCtx: gn,
      pushScopeId: function (t) {
        pn = t;
      },
      popScopeId: function () {
        pn = null;
      },
      withScopeId: (t) => gn,
      renderList: function (t, e, n, i) {
        let o;
        const s = n && n[i];
        if (A(t) || O(t)) {
          o = new Array(t.length);
          for (let n = 0, i = t.length; n < i; n++)
            o[n] = e(t[n], n, void 0, s && s[n]);
        } else if ("number" == typeof t) {
          o = new Array(t);
          for (let n = 0; n < t; n++) o[n] = e(n + 1, n, void 0, s && s[n]);
        } else if (L(t))
          if (t[Symbol.iterator])
            o = Array.from(t, (t, n) => e(t, n, void 0, s && s[n]));
          else {
            const n = Object.keys(t);
            o = new Array(n.length);
            for (let i = 0, r = n.length; i < r; i++) {
              const r = n[i];
              o[i] = e(t[r], r, i, s && s[i]);
            }
          }
        else o = [];
        return n && (n[i] = o), o;
      },
      toHandlers: function (t) {
        const e = {};
        for (const n in t) e[Y(n)] = t[n];
        return e;
      },
      renderSlot: function (t, e, n = {}, i, o) {
        if (un.isCE)
          return Co("slot", "default" === e ? null : { name: e }, i && i());
        let s = t[e];
        s && s._c && (s._d = !1), po();
        const r = s && Lo(s(n)),
          a = yo(
            ro,
            { key: n.key || `_${e}` },
            r || (i ? i() : []),
            r && 1 === t._ ? 64 : -2
          );
        return (
          !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
          s && s._c && (s._d = !0),
          a
        );
      },
      createSlots: function (t, e) {
        for (let n = 0; n < e.length; n++) {
          const i = e[n];
          if (A(i)) for (let e = 0; e < i.length; e++) t[i[e].name] = i[e].fn;
          else i && (t[i.name] = i.fn);
        }
        return t;
      },
      withMemo: function (t, e, n, i) {
        const o = n[i];
        if (o && as(o, t)) return o;
        const s = e();
        return (s.memo = t.slice()), (n[i] = s);
      },
      isMemoSame: as,
      openBlock: po,
      createBlock: yo,
      setBlockTracking: mo,
      createTextVNode: Mo,
      createCommentVNode: function (t = "", e = !1) {
        return e ? (po(), yo(lo, null, t)) : Co(lo, null, t);
      },
      createStaticVNode: function (t, e) {
        const n = Co(co, null, t);
        return (n.staticCount = e), n;
      },
      createElementVNode: So,
      createElementBlock: function (t, e, n, i, o, s) {
        return bo(So(t, e, n, i, o, s, !0));
      },
      guardReactiveProps: To,
      toDisplayString: (t) =>
        O(t)
          ? t
          : null == t
          ? ""
          : A(t) || (L(t) && (t.toString === V || !R(t.toString)))
          ? JSON.stringify(t, g, 2)
          : String(t),
      camelize: H,
      capitalize: G,
      toHandlerKey: Y,
      normalizeProps: function (t) {
        if (!t) return null;
        let { class: e, style: n } = t;
        return e && !O(e) && (t.class = c(e)), n && (t.style = s(n)), t;
      },
      normalizeClass: c,
      normalizeStyle: s,
      transformVNodeArgs: function (t) {},
      version: ls,
      ssrUtils: null,
      resolveFilter: null,
      compatUtils: null,
    });
    function Ar(t) {
      throw t;
    }
    function Mr(t) {}
    function Pr(t, e, n, i) {
      const o = new SyntaxError(String(t));
      return (o.code = t), (o.loc = e), o;
    }
    const Dr = Symbol(""),
      Rr = Symbol(""),
      Or = Symbol(""),
      Er = Symbol(""),
      Lr = Symbol(""),
      Ir = Symbol(""),
      Vr = Symbol(""),
      Fr = Symbol(""),
      Nr = Symbol(""),
      Br = Symbol(""),
      jr = Symbol(""),
      zr = Symbol(""),
      $r = Symbol(""),
      Wr = Symbol(""),
      Hr = Symbol(""),
      Ur = Symbol(""),
      qr = Symbol(""),
      Gr = Symbol(""),
      Yr = Symbol(""),
      Kr = Symbol(""),
      Jr = Symbol(""),
      Xr = Symbol(""),
      Zr = Symbol(""),
      Qr = Symbol(""),
      ta = Symbol(""),
      ea = Symbol(""),
      na = Symbol(""),
      ia = Symbol(""),
      oa = Symbol(""),
      sa = Symbol(""),
      ra = Symbol(""),
      aa = Symbol(""),
      la = Symbol(""),
      ca = Symbol(""),
      ha = Symbol(""),
      da = Symbol(""),
      ua = Symbol(""),
      pa = Symbol(""),
      fa = Symbol(""),
      ga = {
        [Dr]: "Fragment",
        [Rr]: "Teleport",
        [Or]: "Suspense",
        [Er]: "KeepAlive",
        [Lr]: "BaseTransition",
        [Ir]: "openBlock",
        [Vr]: "createBlock",
        [Fr]: "createElementBlock",
        [Nr]: "createVNode",
        [Br]: "createElementVNode",
        [jr]: "createCommentVNode",
        [zr]: "createTextVNode",
        [$r]: "createStaticVNode",
        [Wr]: "resolveComponent",
        [Hr]: "resolveDynamicComponent",
        [Ur]: "resolveDirective",
        [qr]: "resolveFilter",
        [Gr]: "withDirectives",
        [Yr]: "renderList",
        [Kr]: "renderSlot",
        [Jr]: "createSlots",
        [Xr]: "toDisplayString",
        [Zr]: "mergeProps",
        [Qr]: "normalizeClass",
        [ta]: "normalizeStyle",
        [ea]: "normalizeProps",
        [na]: "guardReactiveProps",
        [ia]: "toHandlers",
        [oa]: "camelize",
        [sa]: "capitalize",
        [ra]: "toHandlerKey",
        [aa]: "setBlockTracking",
        [la]: "pushScopeId",
        [ca]: "popScopeId",
        [ha]: "withCtx",
        [da]: "unref",
        [ua]: "isRef",
        [pa]: "withMemo",
        [fa]: "isMemoSame",
      },
      ma = {
        source: "",
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 1, offset: 0 },
      };
    function ba(t, e, n, i, o, s, r, a = !1, l = !1, c = !1, h = ma) {
      return (
        t &&
          (a
            ? (t.helper(Ir), t.helper(qa(t.inSSR, c)))
            : t.helper(Ua(t.inSSR, c)),
          r && t.helper(Gr)),
        {
          type: 13,
          tag: e,
          props: n,
          children: i,
          patchFlag: o,
          dynamicProps: s,
          directives: r,
          isBlock: a,
          disableTracking: l,
          isComponent: c,
          loc: h,
        }
      );
    }
    function ya(t, e = ma) {
      return { type: 17, loc: e, elements: t };
    }
    function va(t, e = ma) {
      return { type: 15, loc: e, properties: t };
    }
    function xa(t, e) {
      return { type: 16, loc: ma, key: O(t) ? _a(t, !0) : t, value: e };
    }
    function _a(t, e = !1, n = ma, i = 0) {
      return { type: 4, loc: n, content: t, isStatic: e, constType: e ? 3 : i };
    }
    function wa(t, e = ma) {
      return { type: 8, loc: e, children: t };
    }
    function ka(t, e = [], n = ma) {
      return { type: 14, loc: n, callee: t, arguments: e };
    }
    function Sa(t, e, n = !1, i = !1, o = ma) {
      return { type: 18, params: t, returns: e, newline: n, isSlot: i, loc: o };
    }
    function Ca(t, e, n, i = !0) {
      return {
        type: 19,
        test: t,
        consequent: e,
        alternate: n,
        newline: i,
        loc: ma,
      };
    }
    const Ta = (t) => 4 === t.type && t.isStatic,
      Aa = (t, e) => t === e || t === q(e);
    function Ma(t) {
      return Aa(t, "Teleport")
        ? Rr
        : Aa(t, "Suspense")
        ? Or
        : Aa(t, "KeepAlive")
        ? Er
        : Aa(t, "BaseTransition")
        ? Lr
        : void 0;
    }
    const Pa = /^\d|[^\$\w]/,
      Da = (t) => !Pa.test(t),
      Ra = /[A-Za-z_$\xA0-\uFFFF]/,
      Oa = /[\.\?\w$\xA0-\uFFFF]/,
      Ea = /\s+[.[]\s*|\s*[.[]\s+/g,
      La = (t) => {
        t = t.trim().replace(Ea, (t) => t.trim());
        let e = 0,
          n = [],
          i = 0,
          o = 0,
          s = null;
        for (let r = 0; r < t.length; r++) {
          const a = t.charAt(r);
          switch (e) {
            case 0:
              if ("[" === a) n.push(e), (e = 1), i++;
              else if ("(" === a) n.push(e), (e = 2), o++;
              else if (!(0 === r ? Ra : Oa).test(a)) return !1;
              break;
            case 1:
              "'" === a || '"' === a || "`" === a
                ? (n.push(e), (e = 3), (s = a))
                : "[" === a
                ? i++
                : "]" === a && (--i || (e = n.pop()));
              break;
            case 2:
              if ("'" === a || '"' === a || "`" === a)
                n.push(e), (e = 3), (s = a);
              else if ("(" === a) o++;
              else if (")" === a) {
                if (r === t.length - 1) return !1;
                --o || (e = n.pop());
              }
              break;
            case 3:
              a === s && ((e = n.pop()), (s = null));
          }
        }
        return !i && !o;
      };
    function Ia(t, e, n) {
      const i = {
        source: t.source.slice(e, e + n),
        start: Va(t.start, t.source, e),
        end: t.end,
      };
      return null != n && (i.end = Va(t.start, t.source, e + n)), i;
    }
    function Va(t, e, n = e.length) {
      return Fa(k({}, t), e, n);
    }
    function Fa(t, e, n = e.length) {
      let i = 0,
        o = -1;
      for (let t = 0; t < n; t++) 10 === e.charCodeAt(t) && (i++, (o = t));
      return (
        (t.offset += n),
        (t.line += i),
        (t.column = -1 === o ? t.column + n : n - o),
        t
      );
    }
    function Na(t, e, n = !1) {
      for (let i = 0; i < t.props.length; i++) {
        const o = t.props[i];
        if (
          7 === o.type &&
          (n || o.exp) &&
          (O(e) ? o.name === e : e.test(o.name))
        )
          return o;
      }
    }
    function Ba(t, e, n = !1, i = !1) {
      for (let o = 0; o < t.props.length; o++) {
        const s = t.props[o];
        if (6 === s.type) {
          if (n) continue;
          if (s.name === e && (s.value || i)) return s;
        } else if ("bind" === s.name && (s.exp || i) && ja(s.arg, e)) return s;
      }
    }
    function ja(t, e) {
      return !(!t || !Ta(t) || t.content !== e);
    }
    function za(t) {
      return 5 === t.type || 2 === t.type;
    }
    function $a(t) {
      return 7 === t.type && "slot" === t.name;
    }
    function Wa(t) {
      return 1 === t.type && 3 === t.tagType;
    }
    function Ha(t) {
      return 1 === t.type && 2 === t.tagType;
    }
    function Ua(t, e) {
      return t || e ? Nr : Br;
    }
    function qa(t, e) {
      return t || e ? Vr : Fr;
    }
    const Ga = new Set([ea, na]);
    function Ya(t, e = []) {
      if (t && !O(t) && 14 === t.type) {
        const n = t.callee;
        if (!O(n) && Ga.has(n)) return Ya(t.arguments[0], e.concat(t));
      }
      return [t, e];
    }
    function Ka(t, e, n) {
      let i,
        o,
        s = 13 === t.type ? t.props : t.arguments[2],
        r = [];
      if (s && !O(s) && 14 === s.type) {
        const t = Ya(s);
        (s = t[0]), (r = t[1]), (o = r[r.length - 1]);
      }
      if (null == s || O(s)) i = va([e]);
      else if (14 === s.type) {
        const t = s.arguments[0];
        O(t) || 15 !== t.type
          ? s.callee === ia
            ? (i = ka(n.helper(Zr), [va([e]), s]))
            : s.arguments.unshift(va([e]))
          : t.properties.unshift(e),
          !i && (i = s);
      } else if (15 === s.type) {
        let t = !1;
        if (4 === e.key.type) {
          const n = e.key.content;
          t = s.properties.some((t) => 4 === t.key.type && t.key.content === n);
        }
        t || s.properties.unshift(e), (i = s);
      } else
        (i = ka(n.helper(Zr), [va([e]), s])),
          o && o.callee === na && (o = r[r.length - 2]);
      13 === t.type
        ? o
          ? (o.arguments[0] = i)
          : (t.props = i)
        : o
        ? (o.arguments[0] = i)
        : (t.arguments[2] = i);
    }
    function Ja(t, e) {
      return `_${e}_${t.replace(/[^\w]/g, (e, n) =>
        "-" === e ? "_" : t.charCodeAt(n).toString()
      )}`;
    }
    function Xa(t, { helper: e, removeHelper: n, inSSR: i }) {
      t.isBlock ||
        ((t.isBlock = !0),
        n(Ua(i, t.isComponent)),
        e(Ir),
        e(qa(i, t.isComponent)));
    }
    const Za = /&(gt|lt|amp|apos|quot);/g,
      Qa = { gt: ">", lt: "<", amp: "&", apos: "'", quot: '"' },
      tl = {
        delimiters: ["{{", "}}"],
        getNamespace: () => 0,
        getTextMode: () => 0,
        isVoidTag: v,
        isPreTag: v,
        isCustomElement: v,
        decodeEntities: (t) => t.replace(Za, (t, e) => Qa[e]),
        onError: Ar,
        onWarn: Mr,
        comments: !1,
      };
    function el(t, e, n) {
      const i = ml(n),
        o = i ? i.ns : 0,
        s = [];
      for (; !_l(t, e, n); ) {
        const r = t.source;
        let a;
        if (0 === e || 1 === e)
          if (!t.inVPre && bl(r, t.options.delimiters[0])) a = dl(t, e);
          else if (0 === e && "<" === r[0])
            if (1 === r.length);
            else if ("!" === r[1])
              a = bl(r, "\x3c!--")
                ? ol(t)
                : bl(r, "<!DOCTYPE")
                ? sl(t)
                : bl(r, "<![CDATA[") && 0 !== o
                ? il(t, n)
                : sl(t);
            else if ("/" === r[1])
              if (2 === r.length);
              else {
                if (">" === r[2]) {
                  yl(t, 3);
                  continue;
                }
                if (/[a-z]/i.test(r[2])) {
                  ll(t, 1, i);
                  continue;
                }
                a = sl(t);
              }
            else
              /[a-z]/i.test(r[1])
                ? (a = rl(t, n))
                : "?" === r[1] && (a = sl(t));
        if ((a || (a = ul(t, e)), A(a)))
          for (let t = 0; t < a.length; t++) nl(s, a[t]);
        else nl(s, a);
      }
      let r = !1;
      if (2 !== e && 1 !== e) {
        const e = "preserve" !== t.options.whitespace;
        for (let n = 0; n < s.length; n++) {
          const i = s[n];
          if (t.inPre || 2 !== i.type)
            3 !== i.type || t.options.comments || ((r = !0), (s[n] = null));
          else if (/[^\t\r\n\f ]/.test(i.content))
            e && (i.content = i.content.replace(/[\t\r\n\f ]+/g, " "));
          else {
            const t = s[n - 1],
              o = s[n + 1];
            !t ||
            !o ||
            (e &&
              (3 === t.type ||
                3 === o.type ||
                (1 === t.type && 1 === o.type && /[\r\n]/.test(i.content))))
              ? ((r = !0), (s[n] = null))
              : (i.content = " ");
          }
        }
        if (t.inPre && i && t.options.isPreTag(i.tag)) {
          const t = s[0];
          t && 2 === t.type && (t.content = t.content.replace(/^\r?\n/, ""));
        }
      }
      return r ? s.filter(Boolean) : s;
    }
    function nl(t, e) {
      if (2 === e.type) {
        const n = ml(t);
        if (n && 2 === n.type && n.loc.end.offset === e.loc.start.offset)
          return (
            (n.content += e.content),
            (n.loc.end = e.loc.end),
            void (n.loc.source += e.loc.source)
          );
      }
      t.push(e);
    }
    function il(t, e) {
      yl(t, 9);
      const n = el(t, 3, e);
      return 0 === t.source.length || yl(t, 3), n;
    }
    function ol(t) {
      const e = fl(t);
      let n;
      const i = /--(\!)?>/.exec(t.source);
      if (i) {
        n = t.source.slice(4, i.index);
        const e = t.source.slice(0, i.index);
        let o = 1,
          s = 0;
        for (; -1 !== (s = e.indexOf("\x3c!--", o)); )
          yl(t, s - o + 1), (o = s + 1);
        yl(t, i.index + i[0].length - o + 1);
      } else (n = t.source.slice(4)), yl(t, t.source.length);
      return { type: 3, content: n, loc: gl(t, e) };
    }
    function sl(t) {
      const e = fl(t),
        n = "?" === t.source[1] ? 1 : 2;
      let i;
      const o = t.source.indexOf(">");
      return (
        -1 === o
          ? ((i = t.source.slice(n)), yl(t, t.source.length))
          : ((i = t.source.slice(n, o)), yl(t, o + 1)),
        { type: 3, content: i, loc: gl(t, e) }
      );
    }
    function rl(t, e) {
      const n = t.inPre,
        i = t.inVPre,
        o = ml(e),
        s = ll(t, 0, o),
        r = t.inPre && !n,
        a = t.inVPre && !i;
      if (s.isSelfClosing || t.options.isVoidTag(s.tag))
        return r && (t.inPre = !1), a && (t.inVPre = !1), s;
      e.push(s);
      const l = t.options.getTextMode(s, o),
        c = el(t, l, e);
      if ((e.pop(), (s.children = c), wl(t.source, s.tag))) ll(t, 1, o);
      else if (0 === t.source.length && "script" === s.tag.toLowerCase()) {
        const t = c[0];
        t && bl(t.loc.source, "\x3c!--");
      }
      return (
        (s.loc = gl(t, s.loc.start)),
        r && (t.inPre = !1),
        a && (t.inVPre = !1),
        s
      );
    }
    const al = e("if,else,else-if,for,slot");
    function ll(t, e, n) {
      const i = fl(t),
        o = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(t.source),
        s = o[1],
        r = t.options.getNamespace(s, n);
      yl(t, o[0].length), vl(t);
      const a = fl(t),
        l = t.source;
      t.options.isPreTag(s) && (t.inPre = !0);
      let c = cl(t, e);
      0 === e &&
        !t.inVPre &&
        c.some((t) => 7 === t.type && "pre" === t.name) &&
        ((t.inVPre = !0),
        k(t, a),
        (t.source = l),
        (c = cl(t, e).filter((t) => "v-pre" !== t.name)));
      let h = !1;
      if (
        (0 === t.source.length || ((h = bl(t.source, "/>")), yl(t, h ? 2 : 1)),
        1 === e)
      )
        return;
      let d = 0;
      return (
        t.inVPre ||
          ("slot" === s
            ? (d = 2)
            : "template" === s
            ? c.some((t) => 7 === t.type && al(t.name)) && (d = 3)
            : (function (t, e, n) {
                const i = n.options;
                if (i.isCustomElement(t)) return !1;
                if (
                  "component" === t ||
                  /^[A-Z]/.test(t) ||
                  Ma(t) ||
                  (i.isBuiltInComponent && i.isBuiltInComponent(t)) ||
                  (i.isNativeTag && !i.isNativeTag(t))
                )
                  return !0;
                for (let t = 0; t < e.length; t++) {
                  const n = e[t];
                  if (6 === n.type) {
                    if (
                      "is" === n.name &&
                      n.value &&
                      n.value.content.startsWith("vue:")
                    )
                      return !0;
                  } else {
                    if ("is" === n.name) return !0;
                    "bind" === n.name && ja(n.arg, "is");
                  }
                }
              })(s, c, t) && (d = 1)),
        {
          type: 1,
          ns: r,
          tag: s,
          tagType: d,
          props: c,
          isSelfClosing: h,
          children: [],
          loc: gl(t, i),
          codegenNode: void 0,
        }
      );
    }
    function cl(t, e) {
      const n = [],
        i = new Set();
      for (
        ;
        t.source.length > 0 && !bl(t.source, ">") && !bl(t.source, "/>");

      ) {
        if (bl(t.source, "/")) {
          yl(t, 1), vl(t);
          continue;
        }
        const o = hl(t, i);
        6 === o.type &&
          o.value &&
          "class" === o.name &&
          (o.value.content = o.value.content.replace(/\s+/g, " ").trim()),
          0 === e && n.push(o),
          /^[^\t\r\n\f />]/.test(t.source),
          vl(t);
      }
      return n;
    }
    function hl(t, e) {
      const n = fl(t),
        i = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(t.source)[0];
      e.has(i), e.add(i);
      {
        const t = /["'<]/g;
        let e;
        for (; (e = t.exec(i)); );
      }
      let o;
      yl(t, i.length),
        /^[\t\r\n\f ]*=/.test(t.source) &&
          (vl(t),
          yl(t, 1),
          vl(t),
          (o = (function (t) {
            const e = fl(t);
            let n;
            const i = t.source[0],
              o = '"' === i || "'" === i;
            if (o) {
              yl(t, 1);
              const e = t.source.indexOf(i);
              -1 === e
                ? (n = pl(t, t.source.length, 4))
                : ((n = pl(t, e, 4)), yl(t, 1));
            } else {
              const e = /^[^\t\r\n\f >]+/.exec(t.source);
              if (!e) return;
              const i = /["'<=`]/g;
              let o;
              for (; (o = i.exec(e[0])); );
              n = pl(t, e[0].length, 4);
            }
            return { content: n, isQuoted: o, loc: gl(t, e) };
          })(t)));
      const s = gl(t, n);
      if (!t.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(i)) {
        const e =
          /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(
            i
          );
        let r,
          a = bl(i, "."),
          l = e[1] || (a || bl(i, ":") ? "bind" : bl(i, "@") ? "on" : "slot");
        if (e[2]) {
          const o = "slot" === l,
            s = i.lastIndexOf(e[2]),
            a = gl(
              t,
              xl(t, n, s),
              xl(t, n, s + e[2].length + ((o && e[3]) || "").length)
            );
          let c = e[2],
            h = !0;
          c.startsWith("[")
            ? ((h = !1),
              (c = c.endsWith("]") ? c.slice(1, c.length - 1) : c.slice(1)))
            : o && (c += e[3] || ""),
            (r = {
              type: 4,
              content: c,
              isStatic: h,
              constType: h ? 3 : 0,
              loc: a,
            });
        }
        if (o && o.isQuoted) {
          const t = o.loc;
          t.start.offset++,
            t.start.column++,
            (t.end = Va(t.start, o.content)),
            (t.source = t.source.slice(1, -1));
        }
        const c = e[3] ? e[3].slice(1).split(".") : [];
        return (
          a && c.push("prop"),
          {
            type: 7,
            name: l,
            exp: o && {
              type: 4,
              content: o.content,
              isStatic: !1,
              constType: 0,
              loc: o.loc,
            },
            arg: r,
            modifiers: c,
            loc: s,
          }
        );
      }
      return (
        !t.inVPre && bl(i, "v-"),
        {
          type: 6,
          name: i,
          value: o && { type: 2, content: o.content, loc: o.loc },
          loc: s,
        }
      );
    }
    function dl(t, e) {
      const [n, i] = t.options.delimiters,
        o = t.source.indexOf(i, n.length);
      if (-1 === o) return;
      const s = fl(t);
      yl(t, n.length);
      const r = fl(t),
        a = fl(t),
        l = o - n.length,
        c = t.source.slice(0, l),
        h = pl(t, l, e),
        d = h.trim(),
        u = h.indexOf(d);
      return (
        u > 0 && Fa(r, c, u),
        Fa(a, c, l - (h.length - d.length - u)),
        yl(t, i.length),
        {
          type: 5,
          content: {
            type: 4,
            isStatic: !1,
            constType: 0,
            content: d,
            loc: gl(t, r, a),
          },
          loc: gl(t, s),
        }
      );
    }
    function ul(t, e) {
      const n = 3 === e ? ["]]>"] : ["<", t.options.delimiters[0]];
      let i = t.source.length;
      for (let e = 0; e < n.length; e++) {
        const o = t.source.indexOf(n[e], 1);
        -1 !== o && i > o && (i = o);
      }
      const o = fl(t);
      return { type: 2, content: pl(t, i, e), loc: gl(t, o) };
    }
    function pl(t, e, n) {
      const i = t.source.slice(0, e);
      return (
        yl(t, e),
        2 !== n && 3 !== n && i.includes("&")
          ? t.options.decodeEntities(i, 4 === n)
          : i
      );
    }
    function fl(t) {
      const { column: e, line: n, offset: i } = t;
      return { column: e, line: n, offset: i };
    }
    function gl(t, e, n) {
      return {
        start: e,
        end: (n = n || fl(t)),
        source: t.originalSource.slice(e.offset, n.offset),
      };
    }
    function ml(t) {
      return t[t.length - 1];
    }
    function bl(t, e) {
      return t.startsWith(e);
    }
    function yl(t, e) {
      const { source: n } = t;
      Fa(t, n, e), (t.source = n.slice(e));
    }
    function vl(t) {
      const e = /^[\t\r\n\f ]+/.exec(t.source);
      e && yl(t, e[0].length);
    }
    function xl(t, e, n) {
      return Va(e, t.originalSource.slice(e.offset, n), n);
    }
    function _l(t, e, n) {
      const i = t.source;
      switch (e) {
        case 0:
          if (bl(i, "</"))
            for (let t = n.length - 1; t >= 0; --t)
              if (wl(i, n[t].tag)) return !0;
          break;
        case 1:
        case 2: {
          const t = ml(n);
          if (t && wl(i, t.tag)) return !0;
          break;
        }
        case 3:
          if (bl(i, "]]>")) return !0;
      }
      return !i;
    }
    function wl(t, e) {
      return (
        bl(t, "</") &&
        t.slice(2, 2 + e.length).toLowerCase() === e.toLowerCase() &&
        /[\t\r\n\f />]/.test(t[2 + e.length] || ">")
      );
    }
    function kl(t, e) {
      Cl(t, e, Sl(t, t.children[0]));
    }
    function Sl(t, e) {
      const { children: n } = t;
      return 1 === n.length && 1 === e.type && !Ha(e);
    }
    function Cl(t, e, n = !1) {
      const { children: i } = t,
        o = i.length;
      let s = 0;
      for (let t = 0; t < i.length; t++) {
        const o = i[t];
        if (1 === o.type && 0 === o.tagType) {
          const t = n ? 0 : Tl(o, e);
          if (t > 0) {
            if (t >= 2) {
              (o.codegenNode.patchFlag = "-1"),
                (o.codegenNode = e.hoist(o.codegenNode)),
                s++;
              continue;
            }
          } else {
            const t = o.codegenNode;
            if (13 === t.type) {
              const n = Rl(t);
              if ((!n || 512 === n || 1 === n) && Pl(o, e) >= 2) {
                const n = Dl(o);
                n && (t.props = e.hoist(n));
              }
              t.dynamicProps && (t.dynamicProps = e.hoist(t.dynamicProps));
            }
          }
        } else
          12 === o.type &&
            Tl(o.content, e) >= 2 &&
            ((o.codegenNode = e.hoist(o.codegenNode)), s++);
        if (1 === o.type) {
          const t = 1 === o.tagType;
          t && e.scopes.vSlot++, Cl(o, e), t && e.scopes.vSlot--;
        } else if (11 === o.type) Cl(o, e, 1 === o.children.length);
        else if (9 === o.type)
          for (let t = 0; t < o.branches.length; t++)
            Cl(o.branches[t], e, 1 === o.branches[t].children.length);
      }
      s && e.transformHoist && e.transformHoist(i, e, t),
        s &&
          s === o &&
          1 === t.type &&
          0 === t.tagType &&
          t.codegenNode &&
          13 === t.codegenNode.type &&
          A(t.codegenNode.children) &&
          (t.codegenNode.children = e.hoist(ya(t.codegenNode.children)));
    }
    function Tl(t, e) {
      const { constantCache: n } = e;
      switch (t.type) {
        case 1:
          if (0 !== t.tagType) return 0;
          const i = n.get(t);
          if (void 0 !== i) return i;
          const o = t.codegenNode;
          if (13 !== o.type) return 0;
          if (o.isBlock && "svg" !== t.tag && "foreignObject" !== t.tag)
            return 0;
          if (Rl(o)) return n.set(t, 0), 0;
          {
            let i = 3;
            const s = Pl(t, e);
            if (0 === s) return n.set(t, 0), 0;
            s < i && (i = s);
            for (let o = 0; o < t.children.length; o++) {
              const s = Tl(t.children[o], e);
              if (0 === s) return n.set(t, 0), 0;
              s < i && (i = s);
            }
            if (i > 1)
              for (let o = 0; o < t.props.length; o++) {
                const s = t.props[o];
                if (7 === s.type && "bind" === s.name && s.exp) {
                  const o = Tl(s.exp, e);
                  if (0 === o) return n.set(t, 0), 0;
                  o < i && (i = o);
                }
              }
            return (
              o.isBlock &&
                (e.removeHelper(Ir),
                e.removeHelper(qa(e.inSSR, o.isComponent)),
                (o.isBlock = !1),
                e.helper(Ua(e.inSSR, o.isComponent))),
              n.set(t, i),
              i
            );
          }
        case 2:
        case 3:
          return 3;
        default:
          return 0;
        case 5:
        case 12:
          return Tl(t.content, e);
        case 4:
          return t.constType;
        case 8:
          let s = 3;
          for (let n = 0; n < t.children.length; n++) {
            const i = t.children[n];
            if (O(i) || E(i)) continue;
            const o = Tl(i, e);
            if (0 === o) return 0;
            o < s && (s = o);
          }
          return s;
      }
    }
    const Al = new Set([Qr, ta, ea, na]);
    function Ml(t, e) {
      if (14 === t.type && !O(t.callee) && Al.has(t.callee)) {
        const n = t.arguments[0];
        if (4 === n.type) return Tl(n, e);
        if (14 === n.type) return Ml(n, e);
      }
      return 0;
    }
    function Pl(t, e) {
      let n = 3;
      const i = Dl(t);
      if (i && 15 === i.type) {
        const { properties: t } = i;
        for (let i = 0; i < t.length; i++) {
          const { key: o, value: s } = t[i],
            r = Tl(o, e);
          if (0 === r) return r;
          let a;
          if (
            (r < n && (n = r),
            (a = 4 === s.type ? Tl(s, e) : 14 === s.type ? Ml(s, e) : 0),
            0 === a)
          )
            return a;
          a < n && (n = a);
        }
      }
      return n;
    }
    function Dl(t) {
      const e = t.codegenNode;
      if (13 === e.type) return e.props;
    }
    function Rl(t) {
      const e = t.patchFlag;
      return e ? parseInt(e, 10) : void 0;
    }
    function Ol(t, e) {
      e.currentNode = t;
      const { nodeTransforms: n } = e,
        i = [];
      for (let o = 0; o < n.length; o++) {
        const s = n[o](t, e);
        if ((s && (A(s) ? i.push(...s) : i.push(s)), !e.currentNode)) return;
        t = e.currentNode;
      }
      switch (t.type) {
        case 3:
          e.ssr || e.helper(jr);
          break;
        case 5:
          e.ssr || e.helper(Xr);
          break;
        case 9:
          for (let n = 0; n < t.branches.length; n++) Ol(t.branches[n], e);
          break;
        case 10:
        case 11:
        case 1:
        case 0:
          !(function (t, e) {
            let n = 0;
            const i = () => {
              n--;
            };
            for (; n < t.children.length; n++) {
              const o = t.children[n];
              O(o) ||
                ((e.parent = t),
                (e.childIndex = n),
                (e.onNodeRemoved = i),
                Ol(o, e));
            }
          })(t, e);
      }
      e.currentNode = t;
      let o = i.length;
      for (; o--; ) i[o]();
    }
    function El(t, e) {
      const n = O(t) ? (e) => e === t : (e) => t.test(e);
      return (t, i) => {
        if (1 === t.type) {
          const { props: o } = t;
          if (3 === t.tagType && o.some($a)) return;
          const s = [];
          for (let r = 0; r < o.length; r++) {
            const a = o[r];
            if (7 === a.type && n(a.name)) {
              o.splice(r, 1), r--;
              const n = e(t, a, i);
              n && s.push(n);
            }
          }
          return s;
        }
      };
    }
    function Ll(t, e, { helper: n, push: i, newline: o, isTS: s }) {
      const r = n("component" === e ? Wr : Ur);
      for (let n = 0; n < t.length; n++) {
        let a = t[n];
        const l = a.endsWith("__self");
        l && (a = a.slice(0, -6)),
          i(
            `const ${Ja(a, e)} = ${r}(${JSON.stringify(a)}${
              l ? ", true" : ""
            })${s ? "!" : ""}`
          ),
          n < t.length - 1 && o();
      }
    }
    function Il(t, e) {
      const n = t.length > 3 || !1;
      e.push("["), n && e.indent(), Vl(t, e, n), n && e.deindent(), e.push("]");
    }
    function Vl(t, e, n = !1, i = !0) {
      const { push: o, newline: s } = e;
      for (let r = 0; r < t.length; r++) {
        const a = t[r];
        O(a) ? o(a) : A(a) ? Il(a, e) : Fl(a, e),
          r < t.length - 1 && (n ? (i && o(","), s()) : i && o(", "));
      }
    }
    function Fl(t, e) {
      if (O(t)) e.push(t);
      else if (E(t)) e.push(e.helper(t));
      else
        switch (t.type) {
          case 1:
          case 9:
          case 11:
          case 12:
            Fl(t.codegenNode, e);
            break;
          case 2:
            !(function (t, e) {
              e.push(JSON.stringify(t.content), t);
            })(t, e);
            break;
          case 4:
            Nl(t, e);
            break;
          case 5:
            !(function (t, e) {
              const { push: n, helper: i, pure: o } = e;
              o && n("/*#__PURE__*/"), n(`${i(Xr)}(`), Fl(t.content, e), n(")");
            })(t, e);
            break;
          case 8:
            Bl(t, e);
            break;
          case 3:
            !(function (t, e) {
              const { push: n, helper: i, pure: o } = e;
              o && n("/*#__PURE__*/"),
                n(`${i(jr)}(${JSON.stringify(t.content)})`, t);
            })(t, e);
            break;
          case 13:
            !(function (t, e) {
              const { push: n, helper: i, pure: o } = e,
                {
                  tag: s,
                  props: r,
                  children: a,
                  patchFlag: l,
                  dynamicProps: c,
                  directives: h,
                  isBlock: d,
                  disableTracking: u,
                  isComponent: p,
                } = t;
              h && n(i(Gr) + "("),
                d && n(`(${i(Ir)}(${u ? "true" : ""}), `),
                o && n("/*#__PURE__*/"),
                n(i(d ? qa(e.inSSR, p) : Ua(e.inSSR, p)) + "(", t),
                Vl(
                  (function (t) {
                    let e = t.length;
                    for (; e-- && null == t[e]; );
                    return t.slice(0, e + 1).map((t) => t || "null");
                  })([s, r, a, l, c]),
                  e
                ),
                n(")"),
                d && n(")"),
                h && (n(", "), Fl(h, e), n(")"));
            })(t, e);
            break;
          case 14:
            !(function (t, e) {
              const { push: n, helper: i, pure: o } = e,
                s = O(t.callee) ? t.callee : i(t.callee);
              o && n("/*#__PURE__*/"),
                n(s + "(", t),
                Vl(t.arguments, e),
                n(")");
            })(t, e);
            break;
          case 15:
            !(function (t, e) {
              const { push: n, indent: i, deindent: o, newline: s } = e,
                { properties: r } = t;
              if (!r.length) return void n("{}", t);
              const a = r.length > 1 || !1;
              n(a ? "{" : "{ "), a && i();
              for (let t = 0; t < r.length; t++) {
                const { key: i, value: o } = r[t];
                jl(i, e), n(": "), Fl(o, e), t < r.length - 1 && (n(","), s());
              }
              a && o(), n(a ? "}" : " }");
            })(t, e);
            break;
          case 17:
            !(function (t, e) {
              Il(t.elements, e);
            })(t, e);
            break;
          case 18:
            !(function (t, e) {
              const { push: n, indent: i, deindent: o } = e,
                { params: s, returns: r, body: a, newline: l, isSlot: c } = t;
              c && n(`_${ga[ha]}(`),
                n("(", t),
                A(s) ? Vl(s, e) : s && Fl(s, e),
                n(") => "),
                (l || a) && (n("{"), i()),
                r
                  ? (l && n("return "), A(r) ? Il(r, e) : Fl(r, e))
                  : a && Fl(a, e),
                (l || a) && (o(), n("}")),
                c && n(")");
            })(t, e);
            break;
          case 19:
            !(function (t, e) {
              const { test: n, consequent: i, alternate: o, newline: s } = t,
                { push: r, indent: a, deindent: l, newline: c } = e;
              if (4 === n.type) {
                const t = !Da(n.content);
                t && r("("), Nl(n, e), t && r(")");
              } else r("("), Fl(n, e), r(")");
              s && a(),
                e.indentLevel++,
                s || r(" "),
                r("? "),
                Fl(i, e),
                e.indentLevel--,
                s && c(),
                s || r(" "),
                r(": ");
              const h = 19 === o.type;
              h || e.indentLevel++, Fl(o, e), h || e.indentLevel--, s && l(!0);
            })(t, e);
            break;
          case 20:
            !(function (t, e) {
              const {
                push: n,
                helper: i,
                indent: o,
                deindent: s,
                newline: r,
              } = e;
              n(`_cache[${t.index}] || (`),
                t.isVNode && (o(), n(`${i(aa)}(-1),`), r()),
                n(`_cache[${t.index}] = `),
                Fl(t.value, e),
                t.isVNode &&
                  (n(","),
                  r(),
                  n(`${i(aa)}(1),`),
                  r(),
                  n(`_cache[${t.index}]`),
                  s()),
                n(")");
            })(t, e);
            break;
          case 21:
            Vl(t.body, e, !0, !1);
        }
    }
    function Nl(t, e) {
      const { content: n, isStatic: i } = t;
      e.push(i ? JSON.stringify(n) : n, t);
    }
    function Bl(t, e) {
      for (let n = 0; n < t.children.length; n++) {
        const i = t.children[n];
        O(i) ? e.push(i) : Fl(i, e);
      }
    }
    function jl(t, e) {
      const { push: n } = e;
      8 === t.type
        ? (n("["), Bl(t, e), n("]"))
        : t.isStatic
        ? n(Da(t.content) ? t.content : JSON.stringify(t.content), t)
        : n(`[${t.content}]`, t);
    }
    const zl = El(/^(if|else|else-if)$/, (t, e, n) =>
      (function (t, e, n, i) {
        if (
          ("else" === e.name ||
            (e.exp && e.exp.content.trim()) ||
            (e.exp = _a("true", !1, e.exp ? e.exp.loc : t.loc)),
          "if" === e.name)
        ) {
          const o = $l(t, e),
            s = { type: 9, loc: t.loc, branches: [o] };
          if ((n.replaceNode(s), i)) return i(s, o, !0);
        } else {
          const o = n.parent.children;
          let s = o.indexOf(t);
          for (; s-- >= -1; ) {
            const r = o[s];
            if (!r || 2 !== r.type || r.content.trim().length) {
              if (r && 9 === r.type) {
                n.removeNode();
                const o = $l(t, e);
                r.branches.push(o);
                const s = i && i(r, o, !1);
                Ol(o, n), s && s(), (n.currentNode = null);
              }
              break;
            }
            n.removeNode(r);
          }
        }
      })(t, e, n, (t, e, i) => {
        const o = n.parent.children;
        let s = o.indexOf(t),
          r = 0;
        for (; s-- >= 0; ) {
          const t = o[s];
          t && 9 === t.type && (r += t.branches.length);
        }
        return () => {
          if (i) t.codegenNode = Wl(e, r, n);
          else {
            const i = (function (t) {
              for (;;)
                if (19 === t.type) {
                  if (19 !== t.alternate.type) return t;
                  t = t.alternate;
                } else 20 === t.type && (t = t.value);
            })(t.codegenNode);
            i.alternate = Wl(e, r + t.branches.length - 1, n);
          }
        };
      })
    );
    function $l(t, e) {
      return {
        type: 10,
        loc: t.loc,
        condition: "else" === e.name ? void 0 : e.exp,
        children: 3 !== t.tagType || Na(t, "for") ? [t] : t.children,
        userKey: Ba(t, "key"),
      };
    }
    function Wl(t, e, n) {
      return t.condition
        ? Ca(t.condition, Hl(t, e, n), ka(n.helper(jr), ['""', "true"]))
        : Hl(t, e, n);
    }
    function Hl(t, e, n) {
      const { helper: i } = n,
        o = xa("key", _a(`${e}`, !1, ma, 2)),
        { children: s } = t,
        r = s[0];
      if (1 !== s.length || 1 !== r.type) {
        if (1 === s.length && 11 === r.type) {
          const t = r.codegenNode;
          return Ka(t, o, n), t;
        }
        {
          let e = 64;
          return ba(
            n,
            i(Dr),
            va([o]),
            s,
            e + "",
            void 0,
            void 0,
            !0,
            !1,
            !1,
            t.loc
          );
        }
      }
      {
        const t = r.codegenNode,
          e =
            14 === (a = t).type && a.callee === pa ? a.arguments[1].returns : a;
        return 13 === e.type && Xa(e, n), Ka(e, o, n), t;
      }
      var a;
    }
    const Ul = El("for", (t, e, n) => {
        const { helper: i, removeHelper: o } = n;
        return (function (t, e, n, i) {
          if (!e.exp) return;
          const o = Kl(e.exp);
          if (!o) return;
          const { scopes: s } = n,
            { source: r, value: a, key: l, index: c } = o,
            h = {
              type: 11,
              loc: e.loc,
              source: r,
              valueAlias: a,
              keyAlias: l,
              objectIndexAlias: c,
              parseResult: o,
              children: Wa(t) ? t.children : [t],
            };
          n.replaceNode(h), s.vFor++;
          const d = i && i(h);
          return () => {
            s.vFor--, d && d();
          };
        })(t, e, n, (e) => {
          const s = ka(i(Yr), [e.source]),
            r = Wa(t),
            a = Na(t, "memo"),
            l = Ba(t, "key"),
            c = l && (6 === l.type ? _a(l.value.content, !0) : l.exp),
            h = l ? xa("key", c) : null,
            d = 4 === e.source.type && e.source.constType > 0,
            u = d ? 64 : l ? 128 : 256;
          return (
            (e.codegenNode = ba(
              n,
              i(Dr),
              void 0,
              s,
              u + "",
              void 0,
              void 0,
              !0,
              !d,
              !1,
              t.loc
            )),
            () => {
              let l;
              const { children: u } = e,
                p = 1 !== u.length || 1 !== u[0].type,
                f = Ha(t)
                  ? t
                  : r && 1 === t.children.length && Ha(t.children[0])
                  ? t.children[0]
                  : null;
              if (
                (f
                  ? ((l = f.codegenNode), r && h && Ka(l, h, n))
                  : p
                  ? (l = ba(
                      n,
                      i(Dr),
                      h ? va([h]) : void 0,
                      t.children,
                      "64",
                      void 0,
                      void 0,
                      !0,
                      void 0,
                      !1
                    ))
                  : ((l = u[0].codegenNode),
                    r && h && Ka(l, h, n),
                    l.isBlock !== !d &&
                      (l.isBlock
                        ? (o(Ir), o(qa(n.inSSR, l.isComponent)))
                        : o(Ua(n.inSSR, l.isComponent))),
                    (l.isBlock = !d),
                    l.isBlock
                      ? (i(Ir), i(qa(n.inSSR, l.isComponent)))
                      : i(Ua(n.inSSR, l.isComponent))),
                a)
              ) {
                const t = Sa(Xl(e.parseResult, [_a("_cached")]));
                (t.body = {
                  type: 21,
                  body: [
                    wa(["const _memo = (", a.exp, ")"]),
                    wa([
                      "if (_cached",
                      ...(c ? [" && _cached.key === ", c] : []),
                      ` && ${n.helperString(
                        fa
                      )}(_cached, _memo)) return _cached`,
                    ]),
                    wa(["const _item = ", l]),
                    _a("_item.memo = _memo"),
                    _a("return _item"),
                  ],
                  loc: ma,
                }),
                  s.arguments.push(t, _a("_cache"), _a(String(n.cached++)));
              } else s.arguments.push(Sa(Xl(e.parseResult), l, !0));
            }
          );
        });
      }),
      ql = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
      Gl = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
      Yl = /^\(|\)$/g;
    function Kl(t, e) {
      const n = t.loc,
        i = t.content,
        o = i.match(ql);
      if (!o) return;
      const [, s, r] = o,
        a = {
          source: Jl(n, r.trim(), i.indexOf(r, s.length)),
          value: void 0,
          key: void 0,
          index: void 0,
        };
      let l = s.trim().replace(Yl, "").trim();
      const c = s.indexOf(l),
        h = l.match(Gl);
      if (h) {
        l = l.replace(Gl, "").trim();
        const t = h[1].trim();
        let e;
        if (
          (t && ((e = i.indexOf(t, c + l.length)), (a.key = Jl(n, t, e))), h[2])
        ) {
          const o = h[2].trim();
          o &&
            (a.index = Jl(
              n,
              o,
              i.indexOf(o, a.key ? e + t.length : c + l.length)
            ));
        }
      }
      return l && (a.value = Jl(n, l, c)), a;
    }
    function Jl(t, e, n) {
      return _a(e, !1, Ia(t, n, e.length));
    }
    function Xl({ value: t, key: e, index: n }, i = []) {
      return (function (t) {
        let e = t.length;
        for (; e-- && !t[e]; );
        return t.slice(0, e + 1).map((t, e) => t || _a("_".repeat(e + 1), !1));
      })([t, e, n, ...i]);
    }
    const Zl = _a("undefined", !1),
      Ql = (t, e) => {
        if (
          1 === t.type &&
          (1 === t.tagType || 3 === t.tagType) &&
          Na(t, "slot")
        )
          return (
            e.scopes.vSlot++,
            () => {
              e.scopes.vSlot--;
            }
          );
      },
      tc = (t, e, n) => Sa(t, e, !1, !0, e.length ? e[0].loc : n);
    function ec(t, e, n = tc) {
      e.helper(ha);
      const { children: i, loc: o } = t,
        s = [],
        r = [];
      let a = e.scopes.vSlot > 0 || e.scopes.vFor > 0;
      const l = Na(t, "slot", !0);
      if (l) {
        const { arg: t, exp: e } = l;
        t && !Ta(t) && (a = !0), s.push(xa(t || _a("default", !0), n(e, i, o)));
      }
      let c = !1,
        h = !1;
      const d = [],
        u = new Set();
      for (let t = 0; t < i.length; t++) {
        const o = i[t];
        let p;
        if (!Wa(o) || !(p = Na(o, "slot", !0))) {
          3 !== o.type && d.push(o);
          continue;
        }
        if (l) break;
        c = !0;
        const { children: f, loc: g } = o,
          { arg: m = _a("default", !0), exp: b } = p;
        let y;
        Ta(m) ? (y = m ? m.content : "default") : (a = !0);
        const v = n(b, f, g);
        let x, _, w;
        if ((x = Na(o, "if"))) (a = !0), r.push(Ca(x.exp, nc(m, v), Zl));
        else if ((_ = Na(o, /^else(-if)?$/, !0))) {
          let e,
            n = t;
          for (; n-- && ((e = i[n]), 3 === e.type); );
          if (e && Wa(e) && Na(e, "if")) {
            i.splice(t, 1), t--;
            let e = r[r.length - 1];
            for (; 19 === e.alternate.type; ) e = e.alternate;
            e.alternate = _.exp ? Ca(_.exp, nc(m, v), Zl) : nc(m, v);
          }
        } else if ((w = Na(o, "for"))) {
          a = !0;
          const t = w.parseResult || Kl(w.exp);
          t && r.push(ka(e.helper(Yr), [t.source, Sa(Xl(t), nc(m, v), !0)]));
        } else {
          if (y) {
            if (u.has(y)) continue;
            u.add(y), "default" === y && (h = !0);
          }
          s.push(xa(m, v));
        }
      }
      if (!l) {
        const t = (t, e) => xa("default", n(t, e, o));
        c
          ? d.length && d.some((t) => oc(t)) && (h || s.push(t(void 0, d)))
          : s.push(t(void 0, i));
      }
      const p = a ? 2 : ic(t.children) ? 3 : 1;
      let f = va(s.concat(xa("_", _a(p + "", !1))), o);
      return (
        r.length && (f = ka(e.helper(Jr), [f, ya(r)])),
        { slots: f, hasDynamicSlots: a }
      );
    }
    function nc(t, e) {
      return va([xa("name", t), xa("fn", e)]);
    }
    function ic(t) {
      for (let e = 0; e < t.length; e++) {
        const n = t[e];
        switch (n.type) {
          case 1:
            if (2 === n.tagType || ic(n.children)) return !0;
            break;
          case 9:
            if (ic(n.branches)) return !0;
            break;
          case 10:
          case 11:
            if (ic(n.children)) return !0;
        }
      }
      return !1;
    }
    function oc(t) {
      return (
        (2 !== t.type && 12 !== t.type) ||
        (2 === t.type ? !!t.content.trim() : oc(t.content))
      );
    }
    const sc = new WeakMap(),
      rc = (t, e) =>
        function () {
          if (
            1 !== (t = e.currentNode).type ||
            (0 !== t.tagType && 1 !== t.tagType)
          )
            return;
          const { tag: n, props: i } = t,
            o = 1 === t.tagType;
          let s,
            r,
            a,
            l,
            c,
            h,
            d = o
              ? (function (t, e, n = !1) {
                  let { tag: i } = t;
                  const o = hc(i),
                    s = Ba(t, "is");
                  if (s)
                    if (o) {
                      const t =
                        6 === s.type
                          ? s.value && _a(s.value.content, !0)
                          : s.exp;
                      if (t) return ka(e.helper(Hr), [t]);
                    } else
                      6 === s.type &&
                        s.value.content.startsWith("vue:") &&
                        (i = s.value.content.slice(4));
                  const r = !o && Na(t, "is");
                  if (r && r.exp) return ka(e.helper(Hr), [r.exp]);
                  const a = Ma(i) || e.isBuiltInComponent(i);
                  return a
                    ? (n || e.helper(a), a)
                    : (e.helper(Wr), e.components.add(i), Ja(i, "component"));
                })(t, e)
              : `"${n}"`,
            u = 0,
            p =
              (L(d) && d.callee === Hr) ||
              d === Rr ||
              d === Or ||
              (!o && ("svg" === n || "foreignObject" === n));
          if (i.length > 0) {
            const n = ac(t, e);
            (s = n.props), (u = n.patchFlag), (c = n.dynamicPropNames);
            const i = n.directives;
            (h =
              i && i.length
                ? ya(
                    i.map((t) =>
                      (function (t, e) {
                        const n = [],
                          i = sc.get(t);
                        i
                          ? n.push(e.helperString(i))
                          : (e.helper(Ur),
                            e.directives.add(t.name),
                            n.push(Ja(t.name, "directive")));
                        const { loc: o } = t;
                        if (
                          (t.exp && n.push(t.exp),
                          t.arg && (t.exp || n.push("void 0"), n.push(t.arg)),
                          Object.keys(t.modifiers).length)
                        ) {
                          t.arg ||
                            (t.exp || n.push("void 0"), n.push("void 0"));
                          const e = _a("true", !1, o);
                          n.push(
                            va(
                              t.modifiers.map((t) => xa(t, e)),
                              o
                            )
                          );
                        }
                        return ya(n, t.loc);
                      })(t, e)
                    )
                  )
                : void 0),
              n.shouldUseBlock && (p = !0);
          }
          if (t.children.length > 0)
            if (
              (d === Er && ((p = !0), (u |= 1024)), o && d !== Rr && d !== Er)
            ) {
              const { slots: n, hasDynamicSlots: i } = ec(t, e);
              (r = n), i && (u |= 1024);
            } else if (1 === t.children.length && d !== Rr) {
              const n = t.children[0],
                i = n.type,
                o = 5 === i || 8 === i;
              o && 0 === Tl(n, e) && (u |= 1),
                (r = o || 2 === i ? n : t.children);
            } else r = t.children;
          0 !== u &&
            ((a = String(u)),
            c &&
              c.length &&
              (l = (function (t) {
                let e = "[";
                for (let n = 0, i = t.length; n < i; n++)
                  (e += JSON.stringify(t[n])), n < i - 1 && (e += ", ");
                return e + "]";
              })(c))),
            (t.codegenNode = ba(e, d, s, r, a, l, h, !!p, !1, o, t.loc));
        };
    function ac(t, e, n = t.props, i = !1) {
      const { tag: o, loc: s, children: r } = t,
        a = 1 === t.tagType;
      let l = [];
      const c = [],
        h = [],
        d = r.length > 0;
      let u = !1,
        p = 0,
        f = !1,
        g = !1,
        m = !1,
        b = !1,
        y = !1,
        v = !1;
      const x = [],
        w = ({ key: t, value: n }) => {
          if (Ta(t)) {
            const i = t.content,
              o = _(i);
            if (
              (a ||
                !o ||
                "onclick" === i.toLowerCase() ||
                "onUpdate:modelValue" === i ||
                j(i) ||
                (b = !0),
              o && j(i) && (v = !0),
              20 === n.type || ((4 === n.type || 8 === n.type) && Tl(n, e) > 0))
            )
              return;
            "ref" === i
              ? (f = !0)
              : "class" === i
              ? (g = !0)
              : "style" === i
              ? (m = !0)
              : "key" === i || x.includes(i) || x.push(i),
              !a ||
                ("class" !== i && "style" !== i) ||
                x.includes(i) ||
                x.push(i);
          } else y = !0;
        };
      for (let r = 0; r < n.length; r++) {
        const a = n[r];
        if (6 === a.type) {
          const { loc: t, name: n, value: i } = a;
          let s = !0;
          if (
            ("ref" === n &&
              ((f = !0),
              e.scopes.vFor > 0 && l.push(xa(_a("ref_for", !0), _a("true")))),
            "is" === n && (hc(o) || (i && i.content.startsWith("vue:"))))
          )
            continue;
          l.push(
            xa(
              _a(n, !0, Ia(t, 0, n.length)),
              _a(i ? i.content : "", s, i ? i.loc : t)
            )
          );
        } else {
          const { name: n, arg: r, exp: p, loc: f } = a,
            g = "bind" === n,
            m = "on" === n;
          if ("slot" === n) continue;
          if ("once" === n || "memo" === n) continue;
          if ("is" === n || (g && ja(r, "is") && hc(o))) continue;
          if (m && i) continue;
          if (
            (((g && ja(r, "key")) || (m && d && ja(r, "vue:before-update"))) &&
              (u = !0),
            g &&
              ja(r, "ref") &&
              e.scopes.vFor > 0 &&
              l.push(xa(_a("ref_for", !0), _a("true"))),
            !r && (g || m))
          ) {
            (y = !0),
              p &&
                (l.length && (c.push(va(lc(l), s)), (l = [])),
                c.push(
                  g
                    ? p
                    : { type: 14, loc: f, callee: e.helper(ia), arguments: [p] }
                ));
            continue;
          }
          const b = e.directiveTransforms[n];
          if (b) {
            const { props: n, needRuntime: o } = b(a, t, e);
            !i && n.forEach(w),
              l.push(...n),
              o && (h.push(a), E(o) && sc.set(a, o));
          } else z(n) || (h.push(a), d && (u = !0));
        }
      }
      let k;
      if (
        (c.length
          ? (l.length && c.push(va(lc(l), s)),
            (k = c.length > 1 ? ka(e.helper(Zr), c, s) : c[0]))
          : l.length && (k = va(lc(l), s)),
        y
          ? (p |= 16)
          : (g && !a && (p |= 2),
            m && !a && (p |= 4),
            x.length && (p |= 8),
            b && (p |= 32)),
        u || (0 !== p && 32 !== p) || !(f || v || h.length > 0) || (p |= 512),
        !e.inSSR && k)
      )
        switch (k.type) {
          case 15:
            let t = -1,
              n = -1,
              i = !1;
            for (let e = 0; e < k.properties.length; e++) {
              const o = k.properties[e].key;
              Ta(o)
                ? "class" === o.content
                  ? (t = e)
                  : "style" === o.content && (n = e)
                : o.isHandlerKey || (i = !0);
            }
            const o = k.properties[t],
              s = k.properties[n];
            i
              ? (k = ka(e.helper(ea), [k]))
              : (o && !Ta(o.value) && (o.value = ka(e.helper(Qr), [o.value])),
                !s ||
                  Ta(s.value) ||
                  (!m && 17 !== s.value.type) ||
                  (s.value = ka(e.helper(ta), [s.value])));
            break;
          case 14:
            break;
          default:
            k = ka(e.helper(ea), [ka(e.helper(na), [k])]);
        }
      return {
        props: k,
        directives: h,
        patchFlag: p,
        dynamicPropNames: x,
        shouldUseBlock: u,
      };
    }
    function lc(t) {
      const e = new Map(),
        n = [];
      for (let i = 0; i < t.length; i++) {
        const o = t[i];
        if (8 === o.key.type || !o.key.isStatic) {
          n.push(o);
          continue;
        }
        const s = o.key.content,
          r = e.get(s);
        r
          ? ("style" === s || "class" === s || _(s)) && cc(r, o)
          : (e.set(s, o), n.push(o));
      }
      return n;
    }
    function cc(t, e) {
      17 === t.value.type
        ? t.value.elements.push(e.value)
        : (t.value = ya([t.value, e.value], t.loc));
    }
    function hc(t) {
      return "component" === t || "Component" === t;
    }
    const dc = (t, e) => {
        if (Ha(t)) {
          const { children: n, loc: i } = t,
            { slotName: o, slotProps: s } = (function (t, e) {
              let n,
                i = '"default"';
              const o = [];
              for (let e = 0; e < t.props.length; e++) {
                const n = t.props[e];
                6 === n.type
                  ? n.value &&
                    ("name" === n.name
                      ? (i = JSON.stringify(n.value.content))
                      : ((n.name = H(n.name)), o.push(n)))
                  : "bind" === n.name && ja(n.arg, "name")
                  ? n.exp && (i = n.exp)
                  : ("bind" === n.name &&
                      n.arg &&
                      Ta(n.arg) &&
                      (n.arg.content = H(n.arg.content)),
                    o.push(n));
              }
              if (o.length > 0) {
                const { props: i, directives: s } = ac(t, e, o);
                n = i;
              }
              return { slotName: i, slotProps: n };
            })(t, e),
            r = [
              e.prefixIdentifiers ? "_ctx.$slots" : "$slots",
              o,
              "{}",
              "undefined",
              "true",
            ];
          let a = 2;
          s && ((r[2] = s), (a = 3)),
            n.length && ((r[3] = Sa([], n, !1, !1, i)), (a = 4)),
            e.scopeId && !e.slotted && (a = 5),
            r.splice(a),
            (t.codegenNode = ka(e.helper(Kr), r, i));
        }
      },
      uc =
        /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,
      pc = (t, e, n, i) => {
        const { loc: o, modifiers: s, arg: r } = t;
        let a;
        if (4 === r.type)
          if (r.isStatic) {
            let t = r.content;
            t.startsWith("vue:") && (t = `vnode-${t.slice(4)}`),
              (a = _a(Y(H(t)), !0, r.loc));
          } else a = wa([`${n.helperString(ra)}(`, r, ")"]);
        else
          (a = r),
            a.children.unshift(`${n.helperString(ra)}(`),
            a.children.push(")");
        let l = t.exp;
        l && !l.content.trim() && (l = void 0);
        let c = n.cacheHandlers && !l && !n.inVOnce;
        if (l) {
          const t = La(l.content),
            e = !(t || uc.test(l.content)),
            n = l.content.includes(";");
          (e || (c && t)) &&
            (l = wa([
              `${e ? "$event" : "(...args)"} => ${n ? "{" : "("}`,
              l,
              n ? "}" : ")",
            ]));
        }
        let h = { props: [xa(a, l || _a("() => {}", !1, o))] };
        return (
          i && (h = i(h)),
          c && (h.props[0].value = n.cache(h.props[0].value)),
          h.props.forEach((t) => (t.key.isHandlerKey = !0)),
          h
        );
      },
      fc = (t, e, n) => {
        const { exp: i, modifiers: o, loc: s } = t,
          r = t.arg;
        return (
          4 !== r.type
            ? (r.children.unshift("("), r.children.push(') || ""'))
            : r.isStatic || (r.content = `${r.content} || ""`),
          o.includes("camel") &&
            (4 === r.type
              ? (r.content = r.isStatic
                  ? H(r.content)
                  : `${n.helperString(oa)}(${r.content})`)
              : (r.children.unshift(`${n.helperString(oa)}(`),
                r.children.push(")"))),
          n.inSSR ||
            (o.includes("prop") && gc(r, "."),
            o.includes("attr") && gc(r, "^")),
          !i || (4 === i.type && !i.content.trim())
            ? { props: [xa(r, _a("", !0, s))] }
            : { props: [xa(r, i)] }
        );
      },
      gc = (t, e) => {
        4 === t.type
          ? (t.content = t.isStatic
              ? e + t.content
              : `\`${e}\${${t.content}}\``)
          : (t.children.unshift(`'${e}' + (`), t.children.push(")"));
      },
      mc = (t, e) => {
        if (0 === t.type || 1 === t.type || 11 === t.type || 10 === t.type)
          return () => {
            const n = t.children;
            let i,
              o = !1;
            for (let t = 0; t < n.length; t++) {
              const e = n[t];
              if (za(e)) {
                o = !0;
                for (let o = t + 1; o < n.length; o++) {
                  const s = n[o];
                  if (!za(s)) {
                    i = void 0;
                    break;
                  }
                  i || (i = n[t] = { type: 8, loc: e.loc, children: [e] }),
                    i.children.push(" + ", s),
                    n.splice(o, 1),
                    o--;
                }
              }
            }
            if (
              o &&
              (1 !== n.length ||
                (0 !== t.type &&
                  (1 !== t.type ||
                    0 !== t.tagType ||
                    t.props.find(
                      (t) => 7 === t.type && !e.directiveTransforms[t.name]
                    ))))
            )
              for (let t = 0; t < n.length; t++) {
                const i = n[t];
                if (za(i) || 8 === i.type) {
                  const o = [];
                  (2 === i.type && " " === i.content) || o.push(i),
                    e.ssr || 0 !== Tl(i, e) || o.push("1"),
                    (n[t] = {
                      type: 12,
                      content: i,
                      loc: i.loc,
                      codegenNode: ka(e.helper(zr), o),
                    });
                }
              }
          };
      },
      bc = new WeakSet(),
      yc = (t, e) => {
        if (1 === t.type && Na(t, "once", !0)) {
          if (bc.has(t) || e.inVOnce) return;
          return (
            bc.add(t),
            (e.inVOnce = !0),
            e.helper(aa),
            () => {
              e.inVOnce = !1;
              const t = e.currentNode;
              t.codegenNode && (t.codegenNode = e.cache(t.codegenNode, !0));
            }
          );
        }
      },
      vc = (t, e, n) => {
        const { exp: i, arg: o } = t;
        if (!i) return xc();
        const s = i.loc.source,
          r = 4 === i.type ? i.content : s;
        if (!r.trim() || !La(r)) return xc();
        const a = o || _a("modelValue", !0),
          l = o
            ? Ta(o)
              ? `onUpdate:${o.content}`
              : wa(['"onUpdate:" + ', o])
            : "onUpdate:modelValue";
        let c;
        c = wa([
          (n.isTS ? "($event: any)" : "$event") + " => ((",
          i,
          ") = $event)",
        ]);
        const h = [xa(a, t.exp), xa(l, c)];
        if (t.modifiers.length && 1 === e.tagType) {
          const e = t.modifiers
              .map((t) => (Da(t) ? t : JSON.stringify(t)) + ": true")
              .join(", "),
            n = o
              ? Ta(o)
                ? `${o.content}Modifiers`
                : wa([o, ' + "Modifiers"'])
              : "modelModifiers";
          h.push(xa(n, _a(`{ ${e} }`, !1, t.loc, 2)));
        }
        return xc(h);
      };
    function xc(t = []) {
      return { props: t };
    }
    const _c = new WeakSet(),
      wc = (t, e) => {
        if (1 === t.type) {
          const n = Na(t, "memo");
          if (!n || _c.has(t)) return;
          return (
            _c.add(t),
            () => {
              const i = t.codegenNode || e.currentNode.codegenNode;
              i &&
                13 === i.type &&
                (1 !== t.tagType && Xa(i, e),
                (t.codegenNode = ka(e.helper(pa), [
                  n.exp,
                  Sa(void 0, i),
                  "_cache",
                  String(e.cached++),
                ])));
            }
          );
        }
      };
    function kc(t, e = {}) {
      const n = e.onError || Ar,
        i = "module" === e.mode;
      !0 === e.prefixIdentifiers ? n(Pr(46)) : i && n(Pr(47)),
        e.cacheHandlers && n(Pr(48)),
        e.scopeId && !i && n(Pr(49));
      const o = O(t)
          ? (function (t, e = {}) {
              const n = (function (t, e) {
                  const n = k({}, tl);
                  let i;
                  for (i in e) n[i] = void 0 === e[i] ? tl[i] : e[i];
                  return {
                    options: n,
                    column: 1,
                    line: 1,
                    offset: 0,
                    originalSource: t,
                    source: t,
                    inPre: !1,
                    inVPre: !1,
                    onWarn: n.onWarn,
                  };
                })(t, e),
                i = fl(n);
              return (function (t, e = ma) {
                return {
                  type: 0,
                  children: t,
                  helpers: [],
                  components: [],
                  directives: [],
                  hoists: [],
                  imports: [],
                  cached: 0,
                  temps: 0,
                  codegenNode: void 0,
                  loc: e,
                };
              })(el(n, 0, []), gl(n, i));
            })(t, e)
          : t,
        [s, r] = [
          [yc, zl, wc, Ul, dc, rc, Ql, mc],
          { on: pc, bind: fc, model: vc },
        ];
      return (
        (function (t, e) {
          const n = (function (
            t,
            {
              filename: e = "",
              prefixIdentifiers: n = !1,
              hoistStatic: i = !1,
              cacheHandlers: o = !1,
              nodeTransforms: s = [],
              directiveTransforms: r = {},
              transformHoist: a = null,
              isBuiltInComponent: l = y,
              isCustomElement: c = y,
              expressionPlugins: h = [],
              scopeId: d = null,
              slotted: u = !0,
              ssr: p = !1,
              inSSR: f = !1,
              ssrCssVars: g = "",
              bindingMetadata: b = m,
              inline: v = !1,
              isTS: x = !1,
              onError: _ = Ar,
              onWarn: w = Mr,
              compatConfig: k,
            }
          ) {
            const S = e.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/),
              C = {
                selfName: S && G(H(S[1])),
                prefixIdentifiers: n,
                hoistStatic: i,
                cacheHandlers: o,
                nodeTransforms: s,
                directiveTransforms: r,
                transformHoist: a,
                isBuiltInComponent: l,
                isCustomElement: c,
                expressionPlugins: h,
                scopeId: d,
                slotted: u,
                ssr: p,
                inSSR: f,
                ssrCssVars: g,
                bindingMetadata: b,
                inline: v,
                isTS: x,
                onError: _,
                onWarn: w,
                compatConfig: k,
                root: t,
                helpers: new Map(),
                components: new Set(),
                directives: new Set(),
                hoists: [],
                imports: [],
                constantCache: new Map(),
                temps: 0,
                cached: 0,
                identifiers: Object.create(null),
                scopes: { vFor: 0, vSlot: 0, vPre: 0, vOnce: 0 },
                parent: null,
                currentNode: t,
                childIndex: 0,
                inVOnce: !1,
                helper(t) {
                  const e = C.helpers.get(t) || 0;
                  return C.helpers.set(t, e + 1), t;
                },
                removeHelper(t) {
                  const e = C.helpers.get(t);
                  if (e) {
                    const n = e - 1;
                    n ? C.helpers.set(t, n) : C.helpers.delete(t);
                  }
                },
                helperString: (t) => `_${ga[C.helper(t)]}`,
                replaceNode(t) {
                  C.parent.children[C.childIndex] = C.currentNode = t;
                },
                removeNode(t) {
                  const e = t
                    ? C.parent.children.indexOf(t)
                    : C.currentNode
                    ? C.childIndex
                    : -1;
                  t && t !== C.currentNode
                    ? C.childIndex > e && (C.childIndex--, C.onNodeRemoved())
                    : ((C.currentNode = null), C.onNodeRemoved()),
                    C.parent.children.splice(e, 1);
                },
                onNodeRemoved: () => {},
                addIdentifiers(t) {},
                removeIdentifiers(t) {},
                hoist(t) {
                  O(t) && (t = _a(t)), C.hoists.push(t);
                  const e = _a(`_hoisted_${C.hoists.length}`, !1, t.loc, 2);
                  return (e.hoisted = t), e;
                },
                cache: (t, e = !1) =>
                  (function (t, e, n = !1) {
                    return {
                      type: 20,
                      index: t,
                      value: e,
                      isVNode: n,
                      loc: ma,
                    };
                  })(C.cached++, t, e),
              };
            return C;
          })(t, e);
          Ol(t, n),
            e.hoistStatic && kl(t, n),
            e.ssr ||
              (function (t, e) {
                const { helper: n } = e,
                  { children: i } = t;
                if (1 === i.length) {
                  const n = i[0];
                  if (Sl(t, n) && n.codegenNode) {
                    const i = n.codegenNode;
                    13 === i.type && Xa(i, e), (t.codegenNode = i);
                  } else t.codegenNode = n;
                } else if (i.length > 1) {
                  let i = 64;
                  t.codegenNode = ba(
                    e,
                    n(Dr),
                    void 0,
                    t.children,
                    i + "",
                    void 0,
                    void 0,
                    !0,
                    void 0,
                    !1
                  );
                }
              })(t, n),
            (t.helpers = [...n.helpers.keys()]),
            (t.components = [...n.components]),
            (t.directives = [...n.directives]),
            (t.imports = n.imports),
            (t.hoists = n.hoists),
            (t.temps = n.temps),
            (t.cached = n.cached);
        })(
          o,
          k({}, e, {
            prefixIdentifiers: !1,
            nodeTransforms: [...s, ...(e.nodeTransforms || [])],
            directiveTransforms: k({}, r, e.directiveTransforms || {}),
          })
        ),
        (function (t, e = {}) {
          const n = (function (
            t,
            {
              mode: e = "function",
              prefixIdentifiers: n = "module" === e,
              sourceMap: i = !1,
              filename: o = "template.vue.html",
              scopeId: s = null,
              optimizeImports: r = !1,
              runtimeGlobalName: a = "Vue",
              runtimeModuleName: l = "vue",
              ssrRuntimeModuleName: c = "vue/server-renderer",
              ssr: h = !1,
              isTS: d = !1,
              inSSR: u = !1,
            }
          ) {
            const p = {
              mode: e,
              prefixIdentifiers: n,
              sourceMap: i,
              filename: o,
              scopeId: s,
              optimizeImports: r,
              runtimeGlobalName: a,
              runtimeModuleName: l,
              ssrRuntimeModuleName: c,
              ssr: h,
              isTS: d,
              inSSR: u,
              source: t.loc.source,
              code: "",
              column: 1,
              line: 1,
              offset: 0,
              indentLevel: 0,
              pure: !1,
              map: void 0,
              helper: (t) => `_${ga[t]}`,
              push(t, e) {
                p.code += t;
              },
              indent() {
                f(++p.indentLevel);
              },
              deindent(t = !1) {
                t ? --p.indentLevel : f(--p.indentLevel);
              },
              newline() {
                f(p.indentLevel);
              },
            };
            function f(t) {
              p.push("\n" + "  ".repeat(t));
            }
            return p;
          })(t, e);
          e.onContextCreated && e.onContextCreated(n);
          const {
              mode: i,
              push: o,
              prefixIdentifiers: s,
              indent: r,
              deindent: a,
              newline: l,
              ssr: c,
            } = n,
            h = t.helpers.length > 0,
            d = !s && "module" !== i;
          if (
            ((function (t, e) {
              const { push: n, newline: i, runtimeGlobalName: o } = e,
                s = o;
              t.helpers.length > 0 &&
                (n(`const _Vue = ${s}\n`), t.hoists.length) &&
                n(
                  `const { ${[Nr, Br, jr, zr, $r]
                    .filter((e) => t.helpers.includes(e))
                    .map((t) => `${ga[t]}: _${ga[t]}`)
                    .join(", ")} } = _Vue\n`
                ),
                (function (t, e) {
                  if (!t.length) return;
                  e.pure = !0;
                  const { push: n, newline: i } = e;
                  i();
                  for (let o = 0; o < t.length; o++) {
                    const s = t[o];
                    s && (n(`const _hoisted_${o + 1} = `), Fl(s, e), i());
                  }
                  e.pure = !1;
                })(t.hoists, e),
                i(),
                n("return ");
            })(t, n),
            o(
              `function ${c ? "ssrRender" : "render"}(${(c
                ? ["_ctx", "_push", "_parent", "_attrs"]
                : ["_ctx", "_cache"]
              ).join(", ")}) {`
            ),
            r(),
            d &&
              (o("with (_ctx) {"),
              r(),
              h &&
                (o(
                  `const { ${t.helpers
                    .map((t) => `${ga[t]}: _${ga[t]}`)
                    .join(", ")} } = _Vue`
                ),
                o("\n"),
                l())),
            t.components.length &&
              (Ll(t.components, "component", n),
              (t.directives.length || t.temps > 0) && l()),
            t.directives.length &&
              (Ll(t.directives, "directive", n), t.temps > 0 && l()),
            t.temps > 0)
          ) {
            o("let ");
            for (let e = 0; e < t.temps; e++)
              o(`${e > 0 ? ", " : ""}_temp${e}`);
          }
          return (
            (t.components.length || t.directives.length || t.temps) &&
              (o("\n"), l()),
            c || o("return "),
            t.codegenNode ? Fl(t.codegenNode, n) : o("null"),
            d && (a(), o("}")),
            a(),
            o("}"),
            {
              ast: t,
              code: n.code,
              preamble: "",
              map: n.map ? n.map.toJSON() : void 0,
            }
          );
        })(o, k({}, e, { prefixIdentifiers: !1 }))
      );
    }
    const Sc = Symbol(""),
      Cc = Symbol(""),
      Tc = Symbol(""),
      Ac = Symbol(""),
      Mc = Symbol(""),
      Pc = Symbol(""),
      Dc = Symbol(""),
      Rc = Symbol(""),
      Oc = Symbol(""),
      Ec = Symbol("");
    var Lc;
    let Ic;
    (Lc = {
      [Sc]: "vModelRadio",
      [Cc]: "vModelCheckbox",
      [Tc]: "vModelText",
      [Ac]: "vModelSelect",
      [Mc]: "vModelDynamic",
      [Pc]: "withModifiers",
      [Dc]: "withKeys",
      [Rc]: "vShow",
      [Oc]: "Transition",
      [Ec]: "TransitionGroup",
    }),
      Object.getOwnPropertySymbols(Lc).forEach((t) => {
        ga[t] = Lc[t];
      });
    const Vc = e("style,iframe,script,noscript", !0),
      Fc = {
        isVoidTag: u,
        isNativeTag: (t) => h(t) || d(t),
        isPreTag: (t) => "pre" === t,
        decodeEntities: function (t, e = !1) {
          return (
            Ic || (Ic = document.createElement("div")),
            e
              ? ((Ic.innerHTML = `<div foo="${t.replace(/"/g, "&quot;")}">`),
                Ic.children[0].getAttribute("foo"))
              : ((Ic.innerHTML = t), Ic.textContent)
          );
        },
        isBuiltInComponent: (t) =>
          Aa(t, "Transition") ? Oc : Aa(t, "TransitionGroup") ? Ec : void 0,
        getNamespace(t, e) {
          let n = e ? e.ns : 0;
          if (e && 2 === n)
            if ("annotation-xml" === e.tag) {
              if ("svg" === t) return 1;
              e.props.some(
                (t) =>
                  6 === t.type &&
                  "encoding" === t.name &&
                  null != t.value &&
                  ("text/html" === t.value.content ||
                    "application/xhtml+xml" === t.value.content)
              ) && (n = 0);
            } else
              /^m(?:[ions]|text)$/.test(e.tag) &&
                "mglyph" !== t &&
                "malignmark" !== t &&
                (n = 0);
          else
            e &&
              1 === n &&
              (("foreignObject" !== e.tag &&
                "desc" !== e.tag &&
                "title" !== e.tag) ||
                (n = 0));
          if (0 === n) {
            if ("svg" === t) return 1;
            if ("math" === t) return 2;
          }
          return n;
        },
        getTextMode({ tag: t, ns: e }) {
          if (0 === e) {
            if ("textarea" === t || "title" === t) return 1;
            if (Vc(t)) return 2;
          }
          return 0;
        },
      },
      Nc = (t, e) => {
        const n = l(t);
        return _a(JSON.stringify(n), !1, e, 3);
      },
      Bc = e("passive,once,capture"),
      jc = e("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),
      zc = e("left,right"),
      $c = e("onkeyup,onkeydown,onkeypress", !0),
      Wc = (t, e) =>
        Ta(t) && "onclick" === t.content.toLowerCase()
          ? _a(e, !0)
          : 4 !== t.type
          ? wa(["(", t, `) === "onClick" ? "${e}" : (`, t, ")"])
          : t,
      Hc = (t, e) => {
        1 !== t.type ||
          0 !== t.tagType ||
          ("script" !== t.tag && "style" !== t.tag) ||
          e.removeNode();
      },
      Uc = [
        (t) => {
          1 === t.type &&
            t.props.forEach((e, n) => {
              6 === e.type &&
                "style" === e.name &&
                e.value &&
                (t.props[n] = {
                  type: 7,
                  name: "bind",
                  arg: _a("style", !0, e.loc),
                  exp: Nc(e.value.content, e.loc),
                  modifiers: [],
                  loc: e.loc,
                });
            });
        },
      ],
      qc = {
        cloak: () => ({ props: [] }),
        html: (t, e, n) => {
          const { exp: i, loc: o } = t;
          return (
            e.children.length && (e.children.length = 0),
            { props: [xa(_a("innerHTML", !0, o), i || _a("", !0))] }
          );
        },
        text: (t, e, n) => {
          const { exp: i, loc: o } = t;
          return (
            e.children.length && (e.children.length = 0),
            {
              props: [
                xa(
                  _a("textContent", !0),
                  i ? ka(n.helperString(Xr), [i], o) : _a("", !0)
                ),
              ],
            }
          );
        },
        model: (t, e, n) => {
          const i = vc(t, e, n);
          if (!i.props.length || 1 === e.tagType) return i;
          const { tag: o } = e,
            s = n.isCustomElement(o);
          if ("input" === o || "textarea" === o || "select" === o || s) {
            let t = Tc,
              r = !1;
            if ("input" === o || s) {
              const n = Ba(e, "type");
              if (n) {
                if (7 === n.type) t = Mc;
                else if (n.value)
                  switch (n.value.content) {
                    case "radio":
                      t = Sc;
                      break;
                    case "checkbox":
                      t = Cc;
                      break;
                    case "file":
                      r = !0;
                  }
              } else
                (function (t) {
                  return t.props.some(
                    (t) =>
                      !(
                        7 !== t.type ||
                        "bind" !== t.name ||
                        (t.arg && 4 === t.arg.type && t.arg.isStatic)
                      )
                  );
                })(e) && (t = Mc);
            } else "select" === o && (t = Ac);
            r || (i.needRuntime = n.helper(t));
          }
          return (
            (i.props = i.props.filter(
              (t) => !(4 === t.key.type && "modelValue" === t.key.content)
            )),
            i
          );
        },
        on: (t, e, n) =>
          pc(t, 0, n, (e) => {
            const { modifiers: i } = t;
            if (!i.length) return e;
            let { key: o, value: s } = e.props[0];
            const {
              keyModifiers: r,
              nonKeyModifiers: a,
              eventOptionModifiers: l,
            } = ((t, e, n, i) => {
              const o = [],
                s = [],
                r = [];
              for (let n = 0; n < e.length; n++) {
                const i = e[n];
                Bc(i)
                  ? r.push(i)
                  : zc(i)
                  ? Ta(t)
                    ? $c(t.content)
                      ? o.push(i)
                      : s.push(i)
                    : (o.push(i), s.push(i))
                  : jc(i)
                  ? s.push(i)
                  : o.push(i);
              }
              return {
                keyModifiers: o,
                nonKeyModifiers: s,
                eventOptionModifiers: r,
              };
            })(o, i);
            if (
              (a.includes("right") && (o = Wc(o, "onContextmenu")),
              a.includes("middle") && (o = Wc(o, "onMouseup")),
              a.length && (s = ka(n.helper(Pc), [s, JSON.stringify(a)])),
              !r.length ||
                (Ta(o) && !$c(o.content)) ||
                (s = ka(n.helper(Dc), [s, JSON.stringify(r)])),
              l.length)
            ) {
              const t = l.map(G).join("");
              o = Ta(o)
                ? _a(`${o.content}${t}`, !0)
                : wa(["(", o, `) + "${t}"`]);
            }
            return { props: [xa(o, s)] };
          }),
        show: (t, e, n) => ({ props: [], needRuntime: n.helper(Rc) }),
      },
      Gc = Object.create(null);
    Jo(function (t, e) {
      if (!O(t)) {
        if (!t.nodeType) return y;
        t = t.innerHTML;
      }
      const n = t,
        i = Gc[n];
      if (i) return i;
      if ("#" === t[0]) {
        const e = document.querySelector(t);
        t = e ? e.innerHTML : "";
      }
      const { code: o } = (function (t, e = {}) {
          return kc(
            t,
            k({}, Fc, e, {
              nodeTransforms: [Hc, ...Uc, ...(e.nodeTransforms || [])],
              directiveTransforms: k({}, qc, e.directiveTransforms || {}),
              transformHoist: null,
            })
          );
        })(t, k({ hoistStatic: !0, onError: void 0, onWarn: y }, e)),
        s = new Function("Vue", o)(Tr);
      return (s._rc = !0), (Gc[n] = s);
    });
    var Yc = __webpack_require__(379),
      Kc = __webpack_require__.n(Yc),
      Jc = __webpack_require__(795),
      Xc = __webpack_require__.n(Jc),
      Zc = __webpack_require__(569),
      Qc = __webpack_require__.n(Zc),
      th = __webpack_require__(565),
      eh = __webpack_require__.n(th),
      nh = __webpack_require__(216),
      ih = __webpack_require__.n(nh),
      oh = __webpack_require__(589),
      sh = __webpack_require__.n(oh),
      rh = __webpack_require__(150),
      ah = {};
    (ah.styleTagTransform = sh()),
      (ah.setAttributes = eh()),
      (ah.insert = Qc().bind(null, "head")),
      (ah.domAPI = Xc()),
      (ah.insertStyleElement = ih()),
      Kc()(rh.Z, ah),
      rh.Z && rh.Z.locals && rh.Z.locals;
    var lh = __webpack_require__(140),
      ch = __webpack_require__.n(lh);
    const hh =
      "undefined" == typeof window
        ? function (t) {
            return t();
          }
        : window.requestAnimationFrame;
    function dh(t, e, n) {
      const i = n || ((t) => Array.prototype.slice.call(t));
      let o = !1,
        s = [];
      return function (...n) {
        (s = i(n)),
          o ||
            ((o = !0),
            hh.call(window, () => {
              (o = !1), t.apply(e, s);
            }));
      };
    }
    const uh = (t) =>
        "start" === t ? "left" : "end" === t ? "right" : "center",
      ph = (t, e, n) => ("start" === t ? e : "end" === t ? n : (e + n) / 2);
    function fh() {}
    const gh = (function () {
      let t = 0;
      return function () {
        return t++;
      };
    })();
    function mh(t) {
      return null == t;
    }
    function bh(t) {
      if (Array.isArray && Array.isArray(t)) return !0;
      const e = Object.prototype.toString.call(t);
      return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
    }
    function yh(t) {
      return (
        null !== t && "[object Object]" === Object.prototype.toString.call(t)
      );
    }
    const vh = (t) =>
      ("number" == typeof t || t instanceof Number) && isFinite(+t);
    function xh(t, e) {
      return vh(t) ? t : e;
    }
    function _h(t, e) {
      return void 0 === t ? e : t;
    }
    const wh = (t, e) =>
      "string" == typeof t && t.endsWith("%") ? (parseFloat(t) / 100) * e : +t;
    function kh(t, e, n) {
      if (t && "function" == typeof t.call) return t.apply(n, e);
    }
    function Sh(t, e, n, i) {
      let o, s, r;
      if (bh(t))
        if (((s = t.length), i))
          for (o = s - 1; o >= 0; o--) e.call(n, t[o], o);
        else for (o = 0; o < s; o++) e.call(n, t[o], o);
      else if (yh(t))
        for (r = Object.keys(t), s = r.length, o = 0; o < s; o++)
          e.call(n, t[r[o]], r[o]);
    }
    function Ch(t, e) {
      let n, i, o, s;
      if (!t || !e || t.length !== e.length) return !1;
      for (n = 0, i = t.length; n < i; ++n)
        if (
          ((o = t[n]),
          (s = e[n]),
          o.datasetIndex !== s.datasetIndex || o.index !== s.index)
        )
          return !1;
      return !0;
    }
    function Th(t) {
      if (bh(t)) return t.map(Th);
      if (yh(t)) {
        const e = Object.create(null),
          n = Object.keys(t),
          i = n.length;
        let o = 0;
        for (; o < i; ++o) e[n[o]] = Th(t[n[o]]);
        return e;
      }
      return t;
    }
    function Ah(t) {
      return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
    }
    function Mh(t, e, n, i) {
      if (!Ah(t)) return;
      const o = e[t],
        s = n[t];
      yh(o) && yh(s) ? Ph(o, s, i) : (e[t] = Th(s));
    }
    function Ph(t, e, n) {
      const i = bh(e) ? e : [e],
        o = i.length;
      if (!yh(t)) return t;
      const s = (n = n || {}).merger || Mh;
      for (let r = 0; r < o; ++r) {
        if (((e = i[r]), !yh(e))) continue;
        const o = Object.keys(e);
        for (let i = 0, r = o.length; i < r; ++i) s(o[i], t, e, n);
      }
      return t;
    }
    function Dh(t, e) {
      return Ph(t, e, { merger: Rh });
    }
    function Rh(t, e, n) {
      if (!Ah(t)) return;
      const i = e[t],
        o = n[t];
      yh(i) && yh(o)
        ? Dh(i, o)
        : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Th(o));
    }
    function Oh(t, e) {
      const n = t.indexOf(".", e);
      return -1 === n ? t.length : n;
    }
    function Eh(t, e) {
      if ("" === e) return t;
      let n = 0,
        i = Oh(e, n);
      for (; t && i > n; )
        (t = t[e.substr(n, i - n)]), (n = i + 1), (i = Oh(e, n));
      return t;
    }
    function Lh(t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    }
    const Ih = (t) => void 0 !== t,
      Vh = (t) => "function" == typeof t,
      Fh = (t, e) => {
        if (t.size !== e.size) return !1;
        for (const n of t) if (!e.has(n)) return !1;
        return !0;
      },
      Nh = Math.PI,
      Bh = 2 * Nh,
      jh = Bh + Nh,
      zh = Number.POSITIVE_INFINITY,
      $h = Nh / 180,
      Wh = Nh / 2,
      Hh = Nh / 4,
      Uh = (2 * Nh) / 3,
      qh = Math.log10,
      Gh = Math.sign;
    function Yh(t) {
      const e = Math.round(t);
      t = Jh(t, e, t / 1e3) ? e : t;
      const n = Math.pow(10, Math.floor(qh(t))),
        i = t / n;
      return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
    }
    function Kh(t) {
      return !isNaN(parseFloat(t)) && isFinite(t);
    }
    function Jh(t, e, n) {
      return Math.abs(t - e) < n;
    }
    function Xh(t, e, n) {
      let i, o, s;
      for (i = 0, o = t.length; i < o; i++)
        (s = t[i][n]),
          isNaN(s) ||
            ((e.min = Math.min(e.min, s)), (e.max = Math.max(e.max, s)));
    }
    function Zh(t) {
      return t * (Nh / 180);
    }
    function Qh(t) {
      return t * (180 / Nh);
    }
    function td(t) {
      if (!vh(t)) return;
      let e = 1,
        n = 0;
      for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
      return n;
    }
    function ed(t, e) {
      const n = e.x - t.x,
        i = e.y - t.y,
        o = Math.sqrt(n * n + i * i);
      let s = Math.atan2(i, n);
      return s < -0.5 * Nh && (s += Bh), { angle: s, distance: o };
    }
    function nd(t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }
    function id(t, e) {
      return ((t - e + jh) % Bh) - Nh;
    }
    function od(t) {
      return ((t % Bh) + Bh) % Bh;
    }
    function sd(t, e, n, i) {
      const o = od(t),
        s = od(e),
        r = od(n),
        a = od(s - o),
        l = od(r - o),
        c = od(o - s),
        h = od(o - r);
      return o === s || o === r || (i && s === r) || (a > l && c < h);
    }
    function rd(t, e, n) {
      return Math.max(e, Math.min(n, t));
    }
    function ad(t, e, n, i = 1e-6) {
      return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
    }
    const ld = (t) => 0 === t || 1 === t,
      cd = (t, e, n) =>
        -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * Bh) / n),
      hd = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * Bh) / n) + 1,
      dd = {
        linear: (t) => t,
        easeInQuad: (t) => t * t,
        easeOutQuad: (t) => -t * (t - 2),
        easeInOutQuad: (t) =>
          (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
        easeInCubic: (t) => t * t * t,
        easeOutCubic: (t) => (t -= 1) * t * t + 1,
        easeInOutCubic: (t) =>
          (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
        easeInQuart: (t) => t * t * t * t,
        easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
        easeInOutQuart: (t) =>
          (t /= 0.5) < 1
            ? 0.5 * t * t * t * t
            : -0.5 * ((t -= 2) * t * t * t - 2),
        easeInQuint: (t) => t * t * t * t * t,
        easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
        easeInOutQuint: (t) =>
          (t /= 0.5) < 1
            ? 0.5 * t * t * t * t * t
            : 0.5 * ((t -= 2) * t * t * t * t + 2),
        easeInSine: (t) => 1 - Math.cos(t * Wh),
        easeOutSine: (t) => Math.sin(t * Wh),
        easeInOutSine: (t) => -0.5 * (Math.cos(Nh * t) - 1),
        easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
        easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
        easeInOutExpo: (t) =>
          ld(t)
            ? t
            : t < 0.5
            ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
            : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
        easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
        easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
        easeInOutCirc: (t) =>
          (t /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - t * t) - 1)
            : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
        easeInElastic: (t) => (ld(t) ? t : cd(t, 0.075, 0.3)),
        easeOutElastic: (t) => (ld(t) ? t : hd(t, 0.075, 0.3)),
        easeInOutElastic(t) {
          const e = 0.1125;
          return ld(t)
            ? t
            : t < 0.5
            ? 0.5 * cd(2 * t, e, 0.45)
            : 0.5 + 0.5 * hd(2 * t - 1, e, 0.45);
        },
        easeInBack(t) {
          const e = 1.70158;
          return t * t * ((e + 1) * t - e);
        },
        easeOutBack(t) {
          const e = 1.70158;
          return (t -= 1) * t * ((e + 1) * t + e) + 1;
        },
        easeInOutBack(t) {
          let e = 1.70158;
          return (t /= 0.5) < 1
            ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
            : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        },
        easeInBounce: (t) => 1 - dd.easeOutBounce(1 - t),
        easeOutBounce(t) {
          const e = 7.5625,
            n = 2.75;
          return t < 1 / n
            ? e * t * t
            : t < 2 / n
            ? e * (t -= 1.5 / n) * t + 0.75
            : t < 2.5 / n
            ? e * (t -= 2.25 / n) * t + 0.9375
            : e * (t -= 2.625 / n) * t + 0.984375;
        },
        easeInOutBounce: (t) =>
          t < 0.5
            ? 0.5 * dd.easeInBounce(2 * t)
            : 0.5 * dd.easeOutBounce(2 * t - 1) + 0.5,
      },
      ud = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
      },
      pd = "0123456789ABCDEF",
      fd = (t) => pd[15 & t],
      gd = (t) => pd[(240 & t) >> 4] + pd[15 & t],
      md = (t) => (240 & t) >> 4 == (15 & t);
    function bd(t) {
      return (t + 0.5) | 0;
    }
    const yd = (t, e, n) => Math.max(Math.min(t, n), e);
    function vd(t) {
      return yd(bd(2.55 * t), 0, 255);
    }
    function xd(t) {
      return yd(bd(255 * t), 0, 255);
    }
    function _d(t) {
      return yd(bd(t / 2.55) / 100, 0, 1);
    }
    function wd(t) {
      return yd(bd(100 * t), 0, 100);
    }
    const kd =
        /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
      Sd =
        /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
    function Cd(t, e, n) {
      const i = e * Math.min(n, 1 - n),
        o = (e, o = (e + t / 30) % 12) =>
          n - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
      return [o(0), o(8), o(4)];
    }
    function Td(t, e, n) {
      const i = (i, o = (i + t / 60) % 6) =>
        n - n * e * Math.max(Math.min(o, 4 - o, 1), 0);
      return [i(5), i(3), i(1)];
    }
    function Ad(t, e, n) {
      const i = Cd(t, 1, 0.5);
      let o;
      for (
        e + n > 1 && ((o = 1 / (e + n)), (e *= o), (n *= o)), o = 0;
        o < 3;
        o++
      )
        (i[o] *= 1 - e - n), (i[o] += e);
      return i;
    }
    function Md(t) {
      const e = t.r / 255,
        n = t.g / 255,
        i = t.b / 255,
        o = Math.max(e, n, i),
        s = Math.min(e, n, i),
        r = (o + s) / 2;
      let a, l, c;
      return (
        o !== s &&
          ((c = o - s),
          (l = r > 0.5 ? c / (2 - o - s) : c / (o + s)),
          (a =
            o === e
              ? (n - i) / c + (n < i ? 6 : 0)
              : o === n
              ? (i - e) / c + 2
              : (e - n) / c + 4),
          (a = 60 * a + 0.5)),
        [0 | a, l || 0, r]
      );
    }
    function Pd(t, e, n, i) {
      return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(xd);
    }
    function Dd(t, e, n) {
      return Pd(Cd, t, e, n);
    }
    function Rd(t) {
      return ((t % 360) + 360) % 360;
    }
    const Od = {
        x: "dark",
        Z: "light",
        Y: "re",
        X: "blu",
        W: "gr",
        V: "medium",
        U: "slate",
        A: "ee",
        T: "ol",
        S: "or",
        B: "ra",
        C: "lateg",
        D: "ights",
        R: "in",
        Q: "turquois",
        E: "hi",
        P: "ro",
        O: "al",
        N: "le",
        M: "de",
        L: "yello",
        F: "en",
        K: "ch",
        G: "arks",
        H: "ea",
        I: "ightg",
        J: "wh",
      },
      Ed = {
        OiceXe: "f0f8ff",
        antiquewEte: "faebd7",
        aqua: "ffff",
        aquamarRe: "7fffd4",
        azuY: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "0",
        blanKedOmond: "ffebcd",
        Xe: "ff",
        XeviTet: "8a2be2",
        bPwn: "a52a2a",
        burlywood: "deb887",
        caMtXe: "5f9ea0",
        KartYuse: "7fff00",
        KocTate: "d2691e",
        cSO: "ff7f50",
        cSnflowerXe: "6495ed",
        cSnsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "ffff",
        xXe: "8b",
        xcyan: "8b8b",
        xgTMnPd: "b8860b",
        xWay: "a9a9a9",
        xgYF: "6400",
        xgYy: "a9a9a9",
        xkhaki: "bdb76b",
        xmagFta: "8b008b",
        xTivegYF: "556b2f",
        xSange: "ff8c00",
        xScEd: "9932cc",
        xYd: "8b0000",
        xsOmon: "e9967a",
        xsHgYF: "8fbc8f",
        xUXe: "483d8b",
        xUWay: "2f4f4f",
        xUgYy: "2f4f4f",
        xQe: "ced1",
        xviTet: "9400d3",
        dAppRk: "ff1493",
        dApskyXe: "bfff",
        dimWay: "696969",
        dimgYy: "696969",
        dodgerXe: "1e90ff",
        fiYbrick: "b22222",
        flSOwEte: "fffaf0",
        foYstWAn: "228b22",
        fuKsia: "ff00ff",
        gaRsbSo: "dcdcdc",
        ghostwEte: "f8f8ff",
        gTd: "ffd700",
        gTMnPd: "daa520",
        Way: "808080",
        gYF: "8000",
        gYFLw: "adff2f",
        gYy: "808080",
        honeyMw: "f0fff0",
        hotpRk: "ff69b4",
        RdianYd: "cd5c5c",
        Rdigo: "4b0082",
        ivSy: "fffff0",
        khaki: "f0e68c",
        lavFMr: "e6e6fa",
        lavFMrXsh: "fff0f5",
        lawngYF: "7cfc00",
        NmoncEffon: "fffacd",
        ZXe: "add8e6",
        ZcSO: "f08080",
        Zcyan: "e0ffff",
        ZgTMnPdLw: "fafad2",
        ZWay: "d3d3d3",
        ZgYF: "90ee90",
        ZgYy: "d3d3d3",
        ZpRk: "ffb6c1",
        ZsOmon: "ffa07a",
        ZsHgYF: "20b2aa",
        ZskyXe: "87cefa",
        ZUWay: "778899",
        ZUgYy: "778899",
        ZstAlXe: "b0c4de",
        ZLw: "ffffe0",
        lime: "ff00",
        limegYF: "32cd32",
        lRF: "faf0e6",
        magFta: "ff00ff",
        maPon: "800000",
        VaquamarRe: "66cdaa",
        VXe: "cd",
        VScEd: "ba55d3",
        VpurpN: "9370db",
        VsHgYF: "3cb371",
        VUXe: "7b68ee",
        VsprRggYF: "fa9a",
        VQe: "48d1cc",
        VviTetYd: "c71585",
        midnightXe: "191970",
        mRtcYam: "f5fffa",
        mistyPse: "ffe4e1",
        moccasR: "ffe4b5",
        navajowEte: "ffdead",
        navy: "80",
        Tdlace: "fdf5e6",
        Tive: "808000",
        TivedBb: "6b8e23",
        Sange: "ffa500",
        SangeYd: "ff4500",
        ScEd: "da70d6",
        pOegTMnPd: "eee8aa",
        pOegYF: "98fb98",
        pOeQe: "afeeee",
        pOeviTetYd: "db7093",
        papayawEp: "ffefd5",
        pHKpuff: "ffdab9",
        peru: "cd853f",
        pRk: "ffc0cb",
        plum: "dda0dd",
        powMrXe: "b0e0e6",
        purpN: "800080",
        YbeccapurpN: "663399",
        Yd: "ff0000",
        Psybrown: "bc8f8f",
        PyOXe: "4169e1",
        saddNbPwn: "8b4513",
        sOmon: "fa8072",
        sandybPwn: "f4a460",
        sHgYF: "2e8b57",
        sHshell: "fff5ee",
        siFna: "a0522d",
        silver: "c0c0c0",
        skyXe: "87ceeb",
        UXe: "6a5acd",
        UWay: "708090",
        UgYy: "708090",
        snow: "fffafa",
        sprRggYF: "ff7f",
        stAlXe: "4682b4",
        tan: "d2b48c",
        teO: "8080",
        tEstN: "d8bfd8",
        tomato: "ff6347",
        Qe: "40e0d0",
        viTet: "ee82ee",
        JHt: "f5deb3",
        wEte: "ffffff",
        wEtesmoke: "f5f5f5",
        Lw: "ffff00",
        LwgYF: "9acd32",
      };
    let Ld;
    function Id(t, e, n) {
      if (t) {
        let i = Md(t);
        (i[e] = Math.max(0, Math.min(i[e] + i[e] * n, 0 === e ? 360 : 1))),
          (i = Dd(i)),
          (t.r = i[0]),
          (t.g = i[1]),
          (t.b = i[2]);
      }
    }
    function Vd(t, e) {
      return t ? Object.assign(e || {}, t) : t;
    }
    function Fd(t) {
      var e = { r: 0, g: 0, b: 0, a: 255 };
      return (
        Array.isArray(t)
          ? t.length >= 3 &&
            ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
            t.length > 3 && (e.a = xd(t[3])))
          : ((e = Vd(t, { r: 0, g: 0, b: 0, a: 1 })).a = xd(e.a)),
        e
      );
    }
    function Nd(t) {
      return "r" === t.charAt(0)
        ? (function (t) {
            const e = kd.exec(t);
            let n,
              i,
              o,
              s = 255;
            if (e) {
              if (e[7] !== n) {
                const t = +e[7];
                s = 255 & (e[8] ? vd(t) : 255 * t);
              }
              return (
                (n = +e[1]),
                (i = +e[3]),
                (o = +e[5]),
                (n = 255 & (e[2] ? vd(n) : n)),
                (i = 255 & (e[4] ? vd(i) : i)),
                (o = 255 & (e[6] ? vd(o) : o)),
                { r: n, g: i, b: o, a: s }
              );
            }
          })(t)
        : (function (t) {
            const e = Sd.exec(t);
            let n,
              i = 255;
            if (!e) return;
            e[5] !== n && (i = e[6] ? vd(+e[5]) : xd(+e[5]));
            const o = Rd(+e[2]),
              s = +e[3] / 100,
              r = +e[4] / 100;
            return (
              (n =
                "hwb" === e[1]
                  ? (function (t, e, n) {
                      return Pd(Ad, t, e, n);
                    })(o, s, r)
                  : "hsv" === e[1]
                  ? (function (t, e, n) {
                      return Pd(Td, t, e, n);
                    })(o, s, r)
                  : Dd(o, s, r)),
              { r: n[0], g: n[1], b: n[2], a: i }
            );
          })(t);
    }
    class Bd {
      constructor(t) {
        if (t instanceof Bd) return t;
        const e = typeof t;
        let n;
        var i, o, s;
        "object" === e
          ? (n = Fd(t))
          : "string" === e &&
            ((s = (i = t).length),
            "#" === i[0] &&
              (4 === s || 5 === s
                ? (o = {
                    r: 255 & (17 * ud[i[1]]),
                    g: 255 & (17 * ud[i[2]]),
                    b: 255 & (17 * ud[i[3]]),
                    a: 5 === s ? 17 * ud[i[4]] : 255,
                  })
                : (7 !== s && 9 !== s) ||
                  (o = {
                    r: (ud[i[1]] << 4) | ud[i[2]],
                    g: (ud[i[3]] << 4) | ud[i[4]],
                    b: (ud[i[5]] << 4) | ud[i[6]],
                    a: 9 === s ? (ud[i[7]] << 4) | ud[i[8]] : 255,
                  })),
            (n =
              o ||
              (function (t) {
                Ld ||
                  ((Ld = (function () {
                    const t = {},
                      e = Object.keys(Ed),
                      n = Object.keys(Od);
                    let i, o, s, r, a;
                    for (i = 0; i < e.length; i++) {
                      for (r = a = e[i], o = 0; o < n.length; o++)
                        (s = n[o]), (a = a.replace(s, Od[s]));
                      (s = parseInt(Ed[r], 16)),
                        (t[a] = [(s >> 16) & 255, (s >> 8) & 255, 255 & s]);
                    }
                    return t;
                  })()),
                  (Ld.transparent = [0, 0, 0, 0]));
                const e = Ld[t.toLowerCase()];
                return (
                  e && {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: 4 === e.length ? e[3] : 255,
                  }
                );
              })(t) ||
              Nd(t))),
          (this._rgb = n),
          (this._valid = !!n);
      }
      get valid() {
        return this._valid;
      }
      get rgb() {
        var t = Vd(this._rgb);
        return t && (t.a = _d(t.a)), t;
      }
      set rgb(t) {
        this._rgb = Fd(t);
      }
      rgbString() {
        return this._valid
          ? (function (t) {
              return (
                t &&
                (t.a < 255
                  ? `rgba(${t.r}, ${t.g}, ${t.b}, ${_d(t.a)})`
                  : `rgb(${t.r}, ${t.g}, ${t.b})`)
              );
            })(this._rgb)
          : this._rgb;
      }
      hexString() {
        return this._valid
          ? (function (t) {
              var e = (function (t) {
                return md(t.r) && md(t.g) && md(t.b) && md(t.a);
              })(t)
                ? fd
                : gd;
              return t
                ? "#" + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : "")
                : t;
            })(this._rgb)
          : this._rgb;
      }
      hslString() {
        return this._valid
          ? (function (t) {
              if (!t) return;
              const e = Md(t),
                n = e[0],
                i = wd(e[1]),
                o = wd(e[2]);
              return t.a < 255
                ? `hsla(${n}, ${i}%, ${o}%, ${_d(t.a)})`
                : `hsl(${n}, ${i}%, ${o}%)`;
            })(this._rgb)
          : this._rgb;
      }
      mix(t, e) {
        const n = this;
        if (t) {
          const i = n.rgb,
            o = t.rgb;
          let s;
          const r = e === s ? 0.5 : e,
            a = 2 * r - 1,
            l = i.a - o.a,
            c = ((a * l == -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
          (s = 1 - c),
            (i.r = 255 & (c * i.r + s * o.r + 0.5)),
            (i.g = 255 & (c * i.g + s * o.g + 0.5)),
            (i.b = 255 & (c * i.b + s * o.b + 0.5)),
            (i.a = r * i.a + (1 - r) * o.a),
            (n.rgb = i);
        }
        return n;
      }
      clone() {
        return new Bd(this.rgb);
      }
      alpha(t) {
        return (this._rgb.a = xd(t)), this;
      }
      clearer(t) {
        return (this._rgb.a *= 1 - t), this;
      }
      greyscale() {
        const t = this._rgb,
          e = bd(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
        return (t.r = t.g = t.b = e), this;
      }
      opaquer(t) {
        return (this._rgb.a *= 1 + t), this;
      }
      negate() {
        const t = this._rgb;
        return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
      }
      lighten(t) {
        return Id(this._rgb, 2, t), this;
      }
      darken(t) {
        return Id(this._rgb, 2, -t), this;
      }
      saturate(t) {
        return Id(this._rgb, 1, t), this;
      }
      desaturate(t) {
        return Id(this._rgb, 1, -t), this;
      }
      rotate(t) {
        return (
          (function (t, e) {
            var n = Md(t);
            (n[0] = Rd(n[0] + e)),
              (n = Dd(n)),
              (t.r = n[0]),
              (t.g = n[1]),
              (t.b = n[2]);
          })(this._rgb, t),
          this
        );
      }
    }
    function jd(t) {
      return new Bd(t);
    }
    const zd = (t) => t instanceof CanvasGradient || t instanceof CanvasPattern;
    function $d(t) {
      return zd(t) ? t : jd(t);
    }
    function Wd(t) {
      return zd(t) ? t : jd(t).saturate(0.5).darken(0.1).hexString();
    }
    const Hd = Object.create(null),
      Ud = Object.create(null);
    function qd(t, e) {
      if (!e) return t;
      const n = e.split(".");
      for (let e = 0, i = n.length; e < i; ++e) {
        const i = n[e];
        t = t[i] || (t[i] = Object.create(null));
      }
      return t;
    }
    function Gd(t, e, n) {
      return "string" == typeof e ? Ph(qd(t, e), n) : Ph(qd(t, ""), e);
    }
    var Yd = new (class {
      constructor(t) {
        (this.animation = void 0),
          (this.backgroundColor = "rgba(0,0,0,0.1)"),
          (this.borderColor = "rgba(0,0,0,0.1)"),
          (this.color = "#666"),
          (this.datasets = {}),
          (this.devicePixelRatio = (t) =>
            t.chart.platform.getDevicePixelRatio()),
          (this.elements = {}),
          (this.events = [
            "mousemove",
            "mouseout",
            "click",
            "touchstart",
            "touchmove",
          ]),
          (this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null,
          }),
          (this.hover = {}),
          (this.hoverBackgroundColor = (t, e) => Wd(e.backgroundColor)),
          (this.hoverBorderColor = (t, e) => Wd(e.borderColor)),
          (this.hoverColor = (t, e) => Wd(e.color)),
          (this.indexAxis = "x"),
          (this.interaction = { mode: "nearest", intersect: !0 }),
          (this.maintainAspectRatio = !0),
          (this.onHover = null),
          (this.onClick = null),
          (this.parsing = !0),
          (this.plugins = {}),
          (this.responsive = !0),
          (this.scale = void 0),
          (this.scales = {}),
          (this.showLine = !0),
          (this.drawActiveElementsOnTop = !0),
          this.describe(t);
      }
      set(t, e) {
        return Gd(this, t, e);
      }
      get(t) {
        return qd(this, t);
      }
      describe(t, e) {
        return Gd(Ud, t, e);
      }
      override(t, e) {
        return Gd(Hd, t, e);
      }
      route(t, e, n, i) {
        const o = qd(this, t),
          s = qd(this, n),
          r = "_" + e;
        Object.defineProperties(o, {
          [r]: { value: o[e], writable: !0 },
          [e]: {
            enumerable: !0,
            get() {
              const t = this[r],
                e = s[i];
              return yh(t) ? Object.assign({}, e, t) : _h(t, e);
            },
            set(t) {
              this[r] = t;
            },
          },
        });
      }
    })({
      _scriptable: (t) => !t.startsWith("on"),
      _indexable: (t) => "events" !== t,
      hover: { _fallback: "interaction" },
      interaction: { _scriptable: !1, _indexable: !1 },
    });
    function Kd(t, e, n, i, o) {
      let s = e[o];
      return (
        s || ((s = e[o] = t.measureText(o).width), n.push(o)),
        s > i && (i = s),
        i
      );
    }
    function Jd(t, e, n, i) {
      let o = ((i = i || {}).data = i.data || {}),
        s = (i.garbageCollect = i.garbageCollect || []);
      i.font !== e &&
        ((o = i.data = {}), (s = i.garbageCollect = []), (i.font = e)),
        t.save(),
        (t.font = e);
      let r = 0;
      const a = n.length;
      let l, c, h, d, u;
      for (l = 0; l < a; l++)
        if (((d = n[l]), null != d && !0 !== bh(d))) r = Kd(t, o, s, r, d);
        else if (bh(d))
          for (c = 0, h = d.length; c < h; c++)
            (u = d[c]), null == u || bh(u) || (r = Kd(t, o, s, r, u));
      t.restore();
      const p = s.length / 2;
      if (p > n.length) {
        for (l = 0; l < p; l++) delete o[s[l]];
        s.splice(0, p);
      }
      return r;
    }
    function Xd(t, e, n) {
      const i = t.currentDevicePixelRatio,
        o = 0 !== n ? Math.max(n / 2, 0.5) : 0;
      return Math.round((e - o) * i) / i + o;
    }
    function Zd(t, e) {
      (e = e || t.getContext("2d")).save(),
        e.resetTransform(),
        e.clearRect(0, 0, t.width, t.height),
        e.restore();
    }
    function Qd(t, e, n, i) {
      let o, s, r, a, l;
      const c = e.pointStyle,
        h = e.rotation,
        d = e.radius;
      let u = (h || 0) * $h;
      if (
        c &&
        "object" == typeof c &&
        ((o = c.toString()),
        "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)
      )
        return (
          t.save(),
          t.translate(n, i),
          t.rotate(u),
          t.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height),
          void t.restore()
        );
      if (!(isNaN(d) || d <= 0)) {
        switch ((t.beginPath(), c)) {
          default:
            t.arc(n, i, d, 0, Bh), t.closePath();
            break;
          case "triangle":
            t.moveTo(n + Math.sin(u) * d, i - Math.cos(u) * d),
              (u += Uh),
              t.lineTo(n + Math.sin(u) * d, i - Math.cos(u) * d),
              (u += Uh),
              t.lineTo(n + Math.sin(u) * d, i - Math.cos(u) * d),
              t.closePath();
            break;
          case "rectRounded":
            (l = 0.516 * d),
              (a = d - l),
              (s = Math.cos(u + Hh) * a),
              (r = Math.sin(u + Hh) * a),
              t.arc(n - s, i - r, l, u - Nh, u - Wh),
              t.arc(n + r, i - s, l, u - Wh, u),
              t.arc(n + s, i + r, l, u, u + Wh),
              t.arc(n - r, i + s, l, u + Wh, u + Nh),
              t.closePath();
            break;
          case "rect":
            if (!h) {
              (a = Math.SQRT1_2 * d), t.rect(n - a, i - a, 2 * a, 2 * a);
              break;
            }
            u += Hh;
          case "rectRot":
            (s = Math.cos(u) * d),
              (r = Math.sin(u) * d),
              t.moveTo(n - s, i - r),
              t.lineTo(n + r, i - s),
              t.lineTo(n + s, i + r),
              t.lineTo(n - r, i + s),
              t.closePath();
            break;
          case "crossRot":
            u += Hh;
          case "cross":
            (s = Math.cos(u) * d),
              (r = Math.sin(u) * d),
              t.moveTo(n - s, i - r),
              t.lineTo(n + s, i + r),
              t.moveTo(n + r, i - s),
              t.lineTo(n - r, i + s);
            break;
          case "star":
            (s = Math.cos(u) * d),
              (r = Math.sin(u) * d),
              t.moveTo(n - s, i - r),
              t.lineTo(n + s, i + r),
              t.moveTo(n + r, i - s),
              t.lineTo(n - r, i + s),
              (u += Hh),
              (s = Math.cos(u) * d),
              (r = Math.sin(u) * d),
              t.moveTo(n - s, i - r),
              t.lineTo(n + s, i + r),
              t.moveTo(n + r, i - s),
              t.lineTo(n - r, i + s);
            break;
          case "line":
            (s = Math.cos(u) * d),
              (r = Math.sin(u) * d),
              t.moveTo(n - s, i - r),
              t.lineTo(n + s, i + r);
            break;
          case "dash":
            t.moveTo(n, i), t.lineTo(n + Math.cos(u) * d, i + Math.sin(u) * d);
        }
        t.fill(), e.borderWidth > 0 && t.stroke();
      }
    }
    function tu(t, e, n) {
      return (
        (n = n || 0.5),
        !e ||
          (t &&
            t.x > e.left - n &&
            t.x < e.right + n &&
            t.y > e.top - n &&
            t.y < e.bottom + n)
      );
    }
    function eu(t, e) {
      t.save(),
        t.beginPath(),
        t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
        t.clip();
    }
    function nu(t) {
      t.restore();
    }
    function iu(t, e, n, i, o) {
      if (!e) return t.lineTo(n.x, n.y);
      if ("middle" === o) {
        const i = (e.x + n.x) / 2;
        t.lineTo(i, e.y), t.lineTo(i, n.y);
      } else ("after" === o) != !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
      t.lineTo(n.x, n.y);
    }
    function ou(t, e, n, i) {
      if (!e) return t.lineTo(n.x, n.y);
      t.bezierCurveTo(
        i ? e.cp1x : e.cp2x,
        i ? e.cp1y : e.cp2y,
        i ? n.cp2x : n.cp1x,
        i ? n.cp2y : n.cp1y,
        n.x,
        n.y
      );
    }
    function su(t, e, n, i, o, s = {}) {
      const r = bh(e) ? e : [e],
        a = s.strokeWidth > 0 && "" !== s.strokeColor;
      let l, c;
      for (
        t.save(),
          t.font = o.string,
          (function (t, e) {
            e.translation && t.translate(e.translation[0], e.translation[1]),
              mh(e.rotation) || t.rotate(e.rotation),
              e.color && (t.fillStyle = e.color),
              e.textAlign && (t.textAlign = e.textAlign),
              e.textBaseline && (t.textBaseline = e.textBaseline);
          })(t, s),
          l = 0;
        l < r.length;
        ++l
      )
        (c = r[l]),
          a &&
            (s.strokeColor && (t.strokeStyle = s.strokeColor),
            mh(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
            t.strokeText(c, n, i, s.maxWidth)),
          t.fillText(c, n, i, s.maxWidth),
          ru(t, n, i, c, s),
          (i += o.lineHeight);
      t.restore();
    }
    function ru(t, e, n, i, o) {
      if (o.strikethrough || o.underline) {
        const s = t.measureText(i),
          r = e - s.actualBoundingBoxLeft,
          a = e + s.actualBoundingBoxRight,
          l = n - s.actualBoundingBoxAscent,
          c = n + s.actualBoundingBoxDescent,
          h = o.strikethrough ? (l + c) / 2 : c;
        (t.strokeStyle = t.fillStyle),
          t.beginPath(),
          (t.lineWidth = o.decorationWidth || 2),
          t.moveTo(r, h),
          t.lineTo(a, h),
          t.stroke();
      }
    }
    function au(t, e) {
      const { x: n, y: i, w: o, h: s, radius: r } = e;
      t.arc(n + r.topLeft, i + r.topLeft, r.topLeft, -Wh, Nh, !0),
        t.lineTo(n, i + s - r.bottomLeft),
        t.arc(n + r.bottomLeft, i + s - r.bottomLeft, r.bottomLeft, Nh, Wh, !0),
        t.lineTo(n + o - r.bottomRight, i + s),
        t.arc(
          n + o - r.bottomRight,
          i + s - r.bottomRight,
          r.bottomRight,
          Wh,
          0,
          !0
        ),
        t.lineTo(n + o, i + r.topRight),
        t.arc(n + o - r.topRight, i + r.topRight, r.topRight, 0, -Wh, !0),
        t.lineTo(n + r.topLeft, i);
    }
    const lu = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
      cu = new RegExp(
        /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
      );
    function hu(t, e) {
      const n = ("" + t).match(lu);
      if (!n || "normal" === n[1]) return 1.2 * e;
      switch (((t = +n[2]), n[3])) {
        case "px":
          return t;
        case "%":
          t /= 100;
      }
      return e * t;
    }
    const du = (t) => +t || 0;
    function uu(t, e) {
      const n = {},
        i = yh(e),
        o = i ? Object.keys(e) : e,
        s = yh(t) ? (i ? (n) => _h(t[n], t[e[n]]) : (e) => t[e]) : () => t;
      for (const t of o) n[t] = du(s(t));
      return n;
    }
    function pu(t) {
      return uu(t, { top: "y", right: "x", bottom: "y", left: "x" });
    }
    function fu(t) {
      return uu(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
    }
    function gu(t) {
      const e = pu(t);
      return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
    }
    function mu(t, e) {
      (t = t || {}), (e = e || Yd.font);
      let n = _h(t.size, e.size);
      "string" == typeof n && (n = parseInt(n, 10));
      let i = _h(t.style, e.style);
      i &&
        !("" + i).match(cu) &&
        (console.warn('Invalid font style specified: "' + i + '"'), (i = ""));
      const o = {
        family: _h(t.family, e.family),
        lineHeight: hu(_h(t.lineHeight, e.lineHeight), n),
        size: n,
        style: i,
        weight: _h(t.weight, e.weight),
        string: "",
      };
      return (
        (o.string = (function (t) {
          return !t || mh(t.size) || mh(t.family)
            ? null
            : (t.style ? t.style + " " : "") +
                (t.weight ? t.weight + " " : "") +
                t.size +
                "px " +
                t.family;
        })(o)),
        o
      );
    }
    function bu(t, e, n, i) {
      let o,
        s,
        r,
        a = !0;
      for (o = 0, s = t.length; o < s; ++o)
        if (
          ((r = t[o]),
          void 0 !== r &&
            (void 0 !== e && "function" == typeof r && ((r = r(e)), (a = !1)),
            void 0 !== n && bh(r) && ((r = r[n % r.length]), (a = !1)),
            void 0 !== r))
        )
          return i && !a && (i.cacheable = !1), r;
    }
    function yu(t, e) {
      return Object.assign(Object.create(t), e);
    }
    function vu(t, e, n) {
      n = n || ((n) => t[n] < e);
      let i,
        o = t.length - 1,
        s = 0;
      for (; o - s > 1; ) (i = (s + o) >> 1), n(i) ? (s = i) : (o = i);
      return { lo: s, hi: o };
    }
    const xu = (t, e, n) => vu(t, n, (i) => t[i][e] < n),
      _u = (t, e, n) => vu(t, n, (i) => t[i][e] >= n),
      wu = ["push", "pop", "shift", "splice", "unshift"];
    function ku(t, e) {
      const n = t._chartjs;
      if (!n) return;
      const i = n.listeners,
        o = i.indexOf(e);
      -1 !== o && i.splice(o, 1),
        i.length > 0 ||
          (wu.forEach((e) => {
            delete t[e];
          }),
          delete t._chartjs);
    }
    function Su(t) {
      const e = new Set();
      let n, i;
      for (n = 0, i = t.length; n < i; ++n) e.add(t[n]);
      return e.size === i ? t : Array.from(e);
    }
    function Cu(t, e = [""], n = t, i, o = () => t[0]) {
      Ih(i) || (i = Vu("_fallback", t));
      const s = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: t,
        _rootScopes: n,
        _fallback: i,
        _getTarget: o,
        override: (o) => Cu([o, ...t], e, n, i),
      };
      return new Proxy(s, {
        deleteProperty: (e, n) => (
          delete e[n], delete e._keys, delete t[0][n], !0
        ),
        get: (n, i) =>
          Du(n, i, () =>
            (function (t, e, n, i) {
              let o;
              for (const s of e)
                if (((o = Vu(Mu(s, t), n)), Ih(o)))
                  return Pu(t, o) ? Lu(n, i, t, o) : o;
            })(i, e, t, n)
          ),
        getOwnPropertyDescriptor: (t, e) =>
          Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
        getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
        has: (t, e) => Fu(t).includes(e),
        ownKeys: (t) => Fu(t),
        set(t, e, n) {
          const i = t._storage || (t._storage = o());
          return (t[e] = i[e] = n), delete t._keys, !0;
        },
      });
    }
    function Tu(t, e, n, i) {
      const o = {
        _cacheable: !1,
        _proxy: t,
        _context: e,
        _subProxy: n,
        _stack: new Set(),
        _descriptors: Au(t, i),
        setContext: (e) => Tu(t, e, n, i),
        override: (o) => Tu(t.override(o), e, n, i),
      };
      return new Proxy(o, {
        deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
        get: (t, e, n) =>
          Du(t, e, () =>
            (function (t, e, n) {
              const {
                _proxy: i,
                _context: o,
                _subProxy: s,
                _descriptors: r,
              } = t;
              let a = i[e];
              return (
                Vh(a) &&
                  r.isScriptable(e) &&
                  (a = (function (t, e, n, i) {
                    const {
                      _proxy: o,
                      _context: s,
                      _subProxy: r,
                      _stack: a,
                    } = n;
                    if (a.has(t))
                      throw new Error(
                        "Recursion detected: " +
                          Array.from(a).join("->") +
                          "->" +
                          t
                      );
                    return (
                      a.add(t),
                      (e = e(s, r || i)),
                      a.delete(t),
                      Pu(t, e) && (e = Lu(o._scopes, o, t, e)),
                      e
                    );
                  })(e, a, t, n)),
                bh(a) &&
                  a.length &&
                  (a = (function (t, e, n, i) {
                    const {
                      _proxy: o,
                      _context: s,
                      _subProxy: r,
                      _descriptors: a,
                    } = n;
                    if (Ih(s.index) && i(t)) e = e[s.index % e.length];
                    else if (yh(e[0])) {
                      const n = e,
                        i = o._scopes.filter((t) => t !== n);
                      e = [];
                      for (const l of n) {
                        const n = Lu(i, o, t, l);
                        e.push(Tu(n, s, r && r[t], a));
                      }
                    }
                    return e;
                  })(e, a, t, r.isIndexable)),
                Pu(e, a) && (a = Tu(a, o, s && s[e], r)),
                a
              );
            })(t, e, n)
          ),
        getOwnPropertyDescriptor: (e, n) =>
          e._descriptors.allKeys
            ? Reflect.has(t, n)
              ? { enumerable: !0, configurable: !0 }
              : void 0
            : Reflect.getOwnPropertyDescriptor(t, n),
        getPrototypeOf: () => Reflect.getPrototypeOf(t),
        has: (e, n) => Reflect.has(t, n),
        ownKeys: () => Reflect.ownKeys(t),
        set: (e, n, i) => ((t[n] = i), delete e[n], !0),
      });
    }
    function Au(t, e = { scriptable: !0, indexable: !0 }) {
      const {
        _scriptable: n = e.scriptable,
        _indexable: i = e.indexable,
        _allKeys: o = e.allKeys,
      } = t;
      return {
        allKeys: o,
        scriptable: n,
        indexable: i,
        isScriptable: Vh(n) ? n : () => n,
        isIndexable: Vh(i) ? i : () => i,
      };
    }
    const Mu = (t, e) => (t ? t + Lh(e) : e),
      Pu = (t, e) =>
        yh(e) &&
        "adapters" !== t &&
        (null === Object.getPrototypeOf(e) || e.constructor === Object);
    function Du(t, e, n) {
      if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
      const i = n();
      return (t[e] = i), i;
    }
    function Ru(t, e, n) {
      return Vh(t) ? t(e, n) : t;
    }
    const Ou = (t, e) =>
      !0 === t ? e : "string" == typeof t ? Eh(e, t) : void 0;
    function Eu(t, e, n, i, o) {
      for (const s of e) {
        const e = Ou(n, s);
        if (e) {
          t.add(e);
          const s = Ru(e._fallback, n, o);
          if (Ih(s) && s !== n && s !== i) return s;
        } else if (!1 === e && Ih(i) && n !== i) return null;
      }
      return !1;
    }
    function Lu(t, e, n, i) {
      const o = e._rootScopes,
        s = Ru(e._fallback, n, i),
        r = [...t, ...o],
        a = new Set();
      a.add(i);
      let l = Iu(a, r, n, s || n, i);
      return (
        null !== l &&
        (!Ih(s) || s === n || ((l = Iu(a, r, s, l, i)), null !== l)) &&
        Cu(Array.from(a), [""], o, s, () =>
          (function (t, e, n) {
            const i = t._getTarget();
            e in i || (i[e] = {});
            const o = i[e];
            return bh(o) && yh(n) ? n : o;
          })(e, n, i)
        )
      );
    }
    function Iu(t, e, n, i, o) {
      for (; n; ) n = Eu(t, e, n, i, o);
      return n;
    }
    function Vu(t, e) {
      for (const n of e) {
        if (!n) continue;
        const e = n[t];
        if (Ih(e)) return e;
      }
    }
    function Fu(t) {
      let e = t._keys;
      return (
        e ||
          (e = t._keys =
            (function (t) {
              const e = new Set();
              for (const n of t)
                for (const t of Object.keys(n).filter(
                  (t) => !t.startsWith("_")
                ))
                  e.add(t);
              return Array.from(e);
            })(t._scopes)),
        e
      );
    }
    const Nu = Number.EPSILON || 1e-14,
      Bu = (t, e) => e < t.length && !t[e].skip && t[e],
      ju = (t) => ("x" === t ? "y" : "x");
    function zu(t, e, n, i) {
      const o = t.skip ? e : t,
        s = e,
        r = n.skip ? e : n,
        a = nd(s, o),
        l = nd(r, s);
      let c = a / (a + l),
        h = l / (a + l);
      (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
      const d = i * c,
        u = i * h;
      return {
        previous: { x: s.x - d * (r.x - o.x), y: s.y - d * (r.y - o.y) },
        next: { x: s.x + u * (r.x - o.x), y: s.y + u * (r.y - o.y) },
      };
    }
    function $u(t, e, n) {
      return Math.max(Math.min(t, n), e);
    }
    function Wu(t, e, n, i, o) {
      let s, r, a, l;
      if (
        (e.spanGaps && (t = t.filter((t) => !t.skip)),
        "monotone" === e.cubicInterpolationMode)
      )
        !(function (t, e = "x") {
          const n = ju(e),
            i = t.length,
            o = Array(i).fill(0),
            s = Array(i);
          let r,
            a,
            l,
            c = Bu(t, 0);
          for (r = 0; r < i; ++r)
            if (((a = l), (l = c), (c = Bu(t, r + 1)), l)) {
              if (c) {
                const t = c[e] - l[e];
                o[r] = 0 !== t ? (c[n] - l[n]) / t : 0;
              }
              s[r] = a
                ? c
                  ? Gh(o[r - 1]) !== Gh(o[r])
                    ? 0
                    : (o[r - 1] + o[r]) / 2
                  : o[r - 1]
                : o[r];
            }
          !(function (t, e, n) {
            const i = t.length;
            let o,
              s,
              r,
              a,
              l,
              c = Bu(t, 0);
            for (let h = 0; h < i - 1; ++h)
              (l = c),
                (c = Bu(t, h + 1)),
                l &&
                  c &&
                  (Jh(e[h], 0, Nu)
                    ? (n[h] = n[h + 1] = 0)
                    : ((o = n[h] / e[h]),
                      (s = n[h + 1] / e[h]),
                      (a = Math.pow(o, 2) + Math.pow(s, 2)),
                      a <= 9 ||
                        ((r = 3 / Math.sqrt(a)),
                        (n[h] = o * r * e[h]),
                        (n[h + 1] = s * r * e[h]))));
          })(t, o, s),
            (function (t, e, n = "x") {
              const i = ju(n),
                o = t.length;
              let s,
                r,
                a,
                l = Bu(t, 0);
              for (let c = 0; c < o; ++c) {
                if (((r = a), (a = l), (l = Bu(t, c + 1)), !a)) continue;
                const o = a[n],
                  h = a[i];
                r &&
                  ((s = (o - r[n]) / 3),
                  (a[`cp1${n}`] = o - s),
                  (a[`cp1${i}`] = h - s * e[c])),
                  l &&
                    ((s = (l[n] - o) / 3),
                    (a[`cp2${n}`] = o + s),
                    (a[`cp2${i}`] = h + s * e[c]));
              }
            })(t, s, e);
        })(t, o);
      else {
        let n = i ? t[t.length - 1] : t[0];
        for (s = 0, r = t.length; s < r; ++s)
          (a = t[s]),
            (l = zu(n, a, t[Math.min(s + 1, r - (i ? 0 : 1)) % r], e.tension)),
            (a.cp1x = l.previous.x),
            (a.cp1y = l.previous.y),
            (a.cp2x = l.next.x),
            (a.cp2y = l.next.y),
            (n = a);
      }
      e.capBezierPoints &&
        (function (t, e) {
          let n,
            i,
            o,
            s,
            r,
            a = tu(t[0], e);
          for (n = 0, i = t.length; n < i; ++n)
            (r = s),
              (s = a),
              (a = n < i - 1 && tu(t[n + 1], e)),
              s &&
                ((o = t[n]),
                r &&
                  ((o.cp1x = $u(o.cp1x, e.left, e.right)),
                  (o.cp1y = $u(o.cp1y, e.top, e.bottom))),
                a &&
                  ((o.cp2x = $u(o.cp2x, e.left, e.right)),
                  (o.cp2y = $u(o.cp2y, e.top, e.bottom))));
        })(t, n);
    }
    function Hu() {
      return "undefined" != typeof window && "undefined" != typeof document;
    }
    function Uu(t) {
      let e = t.parentNode;
      return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
    }
    function qu(t, e, n) {
      let i;
      return (
        "string" == typeof t
          ? ((i = parseInt(t, 10)),
            -1 !== t.indexOf("%") && (i = (i / 100) * e.parentNode[n]))
          : (i = t),
        i
      );
    }
    const Gu = (t) => window.getComputedStyle(t, null),
      Yu = ["top", "right", "bottom", "left"];
    function Ku(t, e, n) {
      const i = {};
      n = n ? "-" + n : "";
      for (let o = 0; o < 4; o++) {
        const s = Yu[o];
        i[s] = parseFloat(t[e + "-" + s + n]) || 0;
      }
      return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
    }
    function Ju(t, e) {
      const { canvas: n, currentDevicePixelRatio: i } = e,
        o = Gu(n),
        s = "border-box" === o.boxSizing,
        r = Ku(o, "padding"),
        a = Ku(o, "border", "width"),
        {
          x: l,
          y: c,
          box: h,
        } = (function (t, e) {
          const n = t.native || t,
            i = n.touches,
            o = i && i.length ? i[0] : n,
            { offsetX: s, offsetY: r } = o;
          let a,
            l,
            c = !1;
          if (
            ((t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot))(
              s,
              r,
              n.target
            )
          )
            (a = s), (l = r);
          else {
            const t = e.getBoundingClientRect();
            (a = o.clientX - t.left), (l = o.clientY - t.top), (c = !0);
          }
          return { x: a, y: l, box: c };
        })(t, n),
        d = r.left + (h && a.left),
        u = r.top + (h && a.top);
      let { width: p, height: f } = e;
      return (
        s && ((p -= r.width + a.width), (f -= r.height + a.height)),
        {
          x: Math.round((((l - d) / p) * n.width) / i),
          y: Math.round((((c - u) / f) * n.height) / i),
        }
      );
    }
    const Xu = (t) => Math.round(10 * t) / 10;
    function Zu(t, e, n) {
      const i = e || 1,
        o = Math.floor(t.height * i),
        s = Math.floor(t.width * i);
      (t.height = o / i), (t.width = s / i);
      const r = t.canvas;
      return (
        r.style &&
          (n || (!r.style.height && !r.style.width)) &&
          ((r.style.height = `${t.height}px`),
          (r.style.width = `${t.width}px`)),
        (t.currentDevicePixelRatio !== i || r.height !== o || r.width !== s) &&
          ((t.currentDevicePixelRatio = i),
          (r.height = o),
          (r.width = s),
          t.ctx.setTransform(i, 0, 0, i, 0, 0),
          !0)
      );
    }
    const Qu = (function () {
      let t = !1;
      try {
        const e = {
          get passive() {
            return (t = !0), !1;
          },
        };
        window.addEventListener("test", null, e),
          window.removeEventListener("test", null, e);
      } catch (t) {}
      return t;
    })();
    function tp(t, e) {
      const n = (function (t, e) {
          return Gu(t).getPropertyValue(e);
        })(t, e),
        i = n && n.match(/^(\d+)(\.\d+)?px$/);
      return i ? +i[1] : void 0;
    }
    function ep(t, e, n, i) {
      return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
    }
    function np(t, e, n, i) {
      return {
        x: t.x + n * (e.x - t.x),
        y:
          "middle" === i
            ? n < 0.5
              ? t.y
              : e.y
            : "after" === i
            ? n < 1
              ? t.y
              : e.y
            : n > 0
            ? e.y
            : t.y,
      };
    }
    function ip(t, e, n, i) {
      const o = { x: t.cp2x, y: t.cp2y },
        s = { x: e.cp1x, y: e.cp1y },
        r = ep(t, o, n),
        a = ep(o, s, n),
        l = ep(s, e, n),
        c = ep(r, a, n),
        h = ep(a, l, n);
      return ep(c, h, n);
    }
    const op = new Map();
    function sp(t, e, n) {
      return (function (t, e) {
        e = e || {};
        const n = t + JSON.stringify(e);
        let i = op.get(n);
        return i || ((i = new Intl.NumberFormat(t, e)), op.set(n, i)), i;
      })(e, n).format(t);
    }
    function rp(t, e, n) {
      return t
        ? (function (t, e) {
            return {
              x: (n) => t + t + e - n,
              setWidth(t) {
                e = t;
              },
              textAlign: (t) =>
                "center" === t ? t : "right" === t ? "left" : "right",
              xPlus: (t, e) => t - e,
              leftForLtr: (t, e) => t - e,
            };
          })(e, n)
        : {
            x: (t) => t,
            setWidth(t) {},
            textAlign: (t) => t,
            xPlus: (t, e) => t + e,
            leftForLtr: (t, e) => t,
          };
    }
    function ap(t, e) {
      let n, i;
      ("ltr" !== e && "rtl" !== e) ||
        ((n = t.canvas.style),
        (i = [
          n.getPropertyValue("direction"),
          n.getPropertyPriority("direction"),
        ]),
        n.setProperty("direction", e, "important"),
        (t.prevTextDirection = i));
    }
    function lp(t, e) {
      void 0 !== e &&
        (delete t.prevTextDirection,
        t.canvas.style.setProperty("direction", e[0], e[1]));
    }
    function cp(t) {
      return "angle" === t
        ? { between: sd, compare: id, normalize: od }
        : { between: ad, compare: (t, e) => t - e, normalize: (t) => t };
    }
    function hp({ start: t, end: e, count: n, loop: i, style: o }) {
      return {
        start: t % n,
        end: e % n,
        loop: i && (e - t + 1) % n == 0,
        style: o,
      };
    }
    function dp(t, e, n) {
      if (!n) return [t];
      const { property: i, start: o, end: s } = n,
        r = e.length,
        { compare: a, between: l, normalize: c } = cp(i),
        {
          start: h,
          end: d,
          loop: u,
          style: p,
        } = (function (t, e, n) {
          const { property: i, start: o, end: s } = n,
            { between: r, normalize: a } = cp(i),
            l = e.length;
          let c,
            h,
            { start: d, end: u, loop: p } = t;
          if (p) {
            for (
              d += l, u += l, c = 0, h = l;
              c < h && r(a(e[d % l][i]), o, s);
              ++c
            )
              d--, u--;
            (d %= l), (u %= l);
          }
          return (
            u < d && (u += l), { start: d, end: u, loop: p, style: t.style }
          );
        })(t, e, n),
        f = [];
      let g,
        m,
        b,
        y = !1,
        v = null;
      for (let t = h, n = h; t <= d; ++t)
        (m = e[t % r]),
          m.skip ||
            ((g = c(m[i])),
            g !== b &&
              ((y = l(g, o, s)),
              null === v &&
                (y || (l(o, b, g) && 0 !== a(o, b))) &&
                (v = 0 === a(g, o) ? t : n),
              null !== v &&
                (!y || 0 === a(s, g) || l(s, b, g)) &&
                (f.push(hp({ start: v, end: t, loop: u, count: r, style: p })),
                (v = null)),
              (n = t),
              (b = g)));
      return (
        null !== v &&
          f.push(hp({ start: v, end: d, loop: u, count: r, style: p })),
        f
      );
    }
    function up(t, e) {
      const n = [],
        i = t.segments;
      for (let o = 0; o < i.length; o++) {
        const s = dp(i[o], t.points, e);
        s.length && n.push(...s);
      }
      return n;
    }
    function pp(t) {
      return {
        backgroundColor: t.backgroundColor,
        borderCapStyle: t.borderCapStyle,
        borderDash: t.borderDash,
        borderDashOffset: t.borderDashOffset,
        borderJoinStyle: t.borderJoinStyle,
        borderWidth: t.borderWidth,
        borderColor: t.borderColor,
      };
    }
    function fp(t, e) {
      return e && JSON.stringify(t) !== JSON.stringify(e);
    }
    var gp = new (class {
      constructor() {
        (this._request = null),
          (this._charts = new Map()),
          (this._running = !1),
          (this._lastDate = void 0);
      }
      _notify(t, e, n, i) {
        const o = e.listeners[i],
          s = e.duration;
        o.forEach((i) =>
          i({
            chart: t,
            initial: e.initial,
            numSteps: s,
            currentStep: Math.min(n - e.start, s),
          })
        );
      }
      _refresh() {
        this._request ||
          ((this._running = !0),
          (this._request = hh.call(window, () => {
            this._update(),
              (this._request = null),
              this._running && this._refresh();
          })));
      }
      _update(t = Date.now()) {
        let e = 0;
        this._charts.forEach((n, i) => {
          if (!n.running || !n.items.length) return;
          const o = n.items;
          let s,
            r = o.length - 1,
            a = !1;
          for (; r >= 0; --r)
            (s = o[r]),
              s._active
                ? (s._total > n.duration && (n.duration = s._total),
                  s.tick(t),
                  (a = !0))
                : ((o[r] = o[o.length - 1]), o.pop());
          a && (i.draw(), this._notify(i, n, t, "progress")),
            o.length ||
              ((n.running = !1),
              this._notify(i, n, t, "complete"),
              (n.initial = !1)),
            (e += o.length);
        }),
          (this._lastDate = t),
          0 === e && (this._running = !1);
      }
      _getAnims(t) {
        const e = this._charts;
        let n = e.get(t);
        return (
          n ||
            ((n = {
              running: !1,
              initial: !0,
              items: [],
              listeners: { complete: [], progress: [] },
            }),
            e.set(t, n)),
          n
        );
      }
      listen(t, e, n) {
        this._getAnims(t).listeners[e].push(n);
      }
      add(t, e) {
        e && e.length && this._getAnims(t).items.push(...e);
      }
      has(t) {
        return this._getAnims(t).items.length > 0;
      }
      start(t) {
        const e = this._charts.get(t);
        e &&
          ((e.running = !0),
          (e.start = Date.now()),
          (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
          this._refresh());
      }
      running(t) {
        if (!this._running) return !1;
        const e = this._charts.get(t);
        return !!(e && e.running && e.items.length);
      }
      stop(t) {
        const e = this._charts.get(t);
        if (!e || !e.items.length) return;
        const n = e.items;
        let i = n.length - 1;
        for (; i >= 0; --i) n[i].cancel();
        (e.items = []), this._notify(t, e, Date.now(), "complete");
      }
      remove(t) {
        return this._charts.delete(t);
      }
    })();
    const mp = "transparent",
      bp = {
        boolean: (t, e, n) => (n > 0.5 ? e : t),
        color(t, e, n) {
          const i = $d(t || mp),
            o = i.valid && $d(e || mp);
          return o && o.valid ? o.mix(i, n).hexString() : e;
        },
        number: (t, e, n) => t + (e - t) * n,
      };
    class yp {
      constructor(t, e, n, i) {
        const o = e[n];
        i = bu([t.to, i, o, t.from]);
        const s = bu([t.from, o, i]);
        (this._active = !0),
          (this._fn = t.fn || bp[t.type || typeof s]),
          (this._easing = dd[t.easing] || dd.linear),
          (this._start = Math.floor(Date.now() + (t.delay || 0))),
          (this._duration = this._total = Math.floor(t.duration)),
          (this._loop = !!t.loop),
          (this._target = e),
          (this._prop = n),
          (this._from = s),
          (this._to = i),
          (this._promises = void 0);
      }
      active() {
        return this._active;
      }
      update(t, e, n) {
        if (this._active) {
          this._notify(!1);
          const i = this._target[this._prop],
            o = n - this._start,
            s = this._duration - o;
          (this._start = n),
            (this._duration = Math.floor(Math.max(s, t.duration))),
            (this._total += o),
            (this._loop = !!t.loop),
            (this._to = bu([t.to, e, i, t.from])),
            (this._from = bu([t.from, i, e]));
        }
      }
      cancel() {
        this._active &&
          (this.tick(Date.now()), (this._active = !1), this._notify(!1));
      }
      tick(t) {
        const e = t - this._start,
          n = this._duration,
          i = this._prop,
          o = this._from,
          s = this._loop,
          r = this._to;
        let a;
        if (((this._active = o !== r && (s || e < n)), !this._active))
          return (this._target[i] = r), void this._notify(!0);
        e < 0
          ? (this._target[i] = o)
          : ((a = (e / n) % 2),
            (a = s && a > 1 ? 2 - a : a),
            (a = this._easing(Math.min(1, Math.max(0, a)))),
            (this._target[i] = this._fn(o, r, a)));
      }
      wait() {
        const t = this._promises || (this._promises = []);
        return new Promise((e, n) => {
          t.push({ res: e, rej: n });
        });
      }
      _notify(t) {
        const e = t ? "res" : "rej",
          n = this._promises || [];
        for (let t = 0; t < n.length; t++) n[t][e]();
      }
    }
    Yd.set("animation", {
      delay: void 0,
      duration: 1e3,
      easing: "easeOutQuart",
      fn: void 0,
      from: void 0,
      loop: void 0,
      to: void 0,
      type: void 0,
    });
    const vp = Object.keys(Yd.animation);
    Yd.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        "onProgress" !== t && "onComplete" !== t && "fn" !== t,
    }),
      Yd.set("animations", {
        colors: {
          type: "color",
          properties: ["color", "borderColor", "backgroundColor"],
        },
        numbers: {
          type: "number",
          properties: ["x", "y", "borderWidth", "radius", "tension"],
        },
      }),
      Yd.describe("animations", { _fallback: "animation" }),
      Yd.set("transitions", {
        active: { animation: { duration: 400 } },
        resize: { animation: { duration: 0 } },
        show: {
          animations: {
            colors: { from: "transparent" },
            visible: { type: "boolean", duration: 0 },
          },
        },
        hide: {
          animations: {
            colors: { to: "transparent" },
            visible: { type: "boolean", easing: "linear", fn: (t) => 0 | t },
          },
        },
      });
    class xp {
      constructor(t, e) {
        (this._chart = t), (this._properties = new Map()), this.configure(e);
      }
      configure(t) {
        if (!yh(t)) return;
        const e = this._properties;
        Object.getOwnPropertyNames(t).forEach((n) => {
          const i = t[n];
          if (!yh(i)) return;
          const o = {};
          for (const t of vp) o[t] = i[t];
          ((bh(i.properties) && i.properties) || [n]).forEach((t) => {
            (t !== n && e.has(t)) || e.set(t, o);
          });
        });
      }
      _animateOptions(t, e) {
        const n = e.options,
          i = (function (t, e) {
            if (!e) return;
            let n = t.options;
            if (n)
              return (
                n.$shared &&
                  (t.options = n =
                    Object.assign({}, n, { $shared: !1, $animations: {} })),
                n
              );
            t.options = e;
          })(t, n);
        if (!i) return [];
        const o = this._createAnimations(i, n);
        return (
          n.$shared &&
            (function (t, e) {
              const n = [],
                i = Object.keys(e);
              for (let e = 0; e < i.length; e++) {
                const o = t[i[e]];
                o && o.active() && n.push(o.wait());
              }
              return Promise.all(n);
            })(t.options.$animations, n).then(
              () => {
                t.options = n;
              },
              () => {}
            ),
          o
        );
      }
      _createAnimations(t, e) {
        const n = this._properties,
          i = [],
          o = t.$animations || (t.$animations = {}),
          s = Object.keys(e),
          r = Date.now();
        let a;
        for (a = s.length - 1; a >= 0; --a) {
          const l = s[a];
          if ("$" === l.charAt(0)) continue;
          if ("options" === l) {
            i.push(...this._animateOptions(t, e));
            continue;
          }
          const c = e[l];
          let h = o[l];
          const d = n.get(l);
          if (h) {
            if (d && h.active()) {
              h.update(d, c, r);
              continue;
            }
            h.cancel();
          }
          d && d.duration
            ? ((o[l] = h = new yp(d, t, l, c)), i.push(h))
            : (t[l] = c);
        }
        return i;
      }
      update(t, e) {
        if (0 === this._properties.size) return void Object.assign(t, e);
        const n = this._createAnimations(t, e);
        return n.length ? (gp.add(this._chart, n), !0) : void 0;
      }
    }
    function _p(t, e) {
      const n = (t && t.options) || {},
        i = n.reverse,
        o = void 0 === n.min ? e : 0,
        s = void 0 === n.max ? e : 0;
      return { start: i ? s : o, end: i ? o : s };
    }
    function wp(t, e) {
      const n = [],
        i = t._getSortedDatasetMetas(e);
      let o, s;
      for (o = 0, s = i.length; o < s; ++o) n.push(i[o].index);
      return n;
    }
    function kp(t, e, n, i = {}) {
      const o = t.keys,
        s = "single" === i.mode;
      let r, a, l, c;
      if (null !== e) {
        for (r = 0, a = o.length; r < a; ++r) {
          if (((l = +o[r]), l === n)) {
            if (i.all) continue;
            break;
          }
          (c = t.values[l]),
            vh(c) && (s || 0 === e || Gh(e) === Gh(c)) && (e += c);
        }
        return e;
      }
    }
    function Sp(t, e) {
      const n = t && t.options.stacked;
      return n || (void 0 === n && void 0 !== e.stack);
    }
    function Cp(t, e, n) {
      const i = t[e] || (t[e] = {});
      return i[n] || (i[n] = {});
    }
    function Tp(t, e, n, i) {
      for (const o of e.getMatchingVisibleMetas(i).reverse()) {
        const e = t[o.index];
        if ((n && e > 0) || (!n && e < 0)) return o.index;
      }
      return null;
    }
    function Ap(t, e) {
      const { chart: n, _cachedMeta: i } = t,
        o = n._stacks || (n._stacks = {}),
        { iScale: s, vScale: r, index: a } = i,
        l = s.axis,
        c = r.axis,
        h = (function (t, e, n) {
          return `${t.id}.${e.id}.${n.stack || n.type}`;
        })(s, r, i),
        d = e.length;
      let u;
      for (let t = 0; t < d; ++t) {
        const n = e[t],
          { [l]: s, [c]: d } = n;
        (u = (n._stacks || (n._stacks = {}))[c] = Cp(o, h, s)),
          (u[a] = d),
          (u._top = Tp(u, r, !0, i.type)),
          (u._bottom = Tp(u, r, !1, i.type));
      }
    }
    function Mp(t, e) {
      const n = t.scales;
      return Object.keys(n)
        .filter((t) => n[t].axis === e)
        .shift();
    }
    function Pp(t, e) {
      const n = t.controller.index,
        i = t.vScale && t.vScale.axis;
      if (i) {
        e = e || t._parsed;
        for (const t of e) {
          const e = t._stacks;
          if (!e || void 0 === e[i] || void 0 === e[i][n]) return;
          delete e[i][n];
        }
      }
    }
    const Dp = (t) => "reset" === t || "none" === t,
      Rp = (t, e) => (e ? t : Object.assign({}, t));
    class Op {
      constructor(t, e) {
        (this.chart = t),
          (this._ctx = t.ctx),
          (this.index = e),
          (this._cachedDataOpts = {}),
          (this._cachedMeta = this.getMeta()),
          (this._type = this._cachedMeta.type),
          (this.options = void 0),
          (this._parsing = !1),
          (this._data = void 0),
          (this._objectData = void 0),
          (this._sharedOptions = void 0),
          (this._drawStart = void 0),
          (this._drawCount = void 0),
          (this.enableOptionSharing = !1),
          (this.$context = void 0),
          (this._syncList = []),
          this.initialize();
      }
      initialize() {
        const t = this._cachedMeta;
        this.configure(),
          this.linkScales(),
          (t._stacked = Sp(t.vScale, t)),
          this.addElements();
      }
      updateIndex(t) {
        this.index !== t && Pp(this._cachedMeta), (this.index = t);
      }
      linkScales() {
        const t = this.chart,
          e = this._cachedMeta,
          n = this.getDataset(),
          i = (t, e, n, i) => ("x" === t ? e : "r" === t ? i : n),
          o = (e.xAxisID = _h(n.xAxisID, Mp(t, "x"))),
          s = (e.yAxisID = _h(n.yAxisID, Mp(t, "y"))),
          r = (e.rAxisID = _h(n.rAxisID, Mp(t, "r"))),
          a = e.indexAxis,
          l = (e.iAxisID = i(a, o, s, r)),
          c = (e.vAxisID = i(a, s, o, r));
        (e.xScale = this.getScaleForId(o)),
          (e.yScale = this.getScaleForId(s)),
          (e.rScale = this.getScaleForId(r)),
          (e.iScale = this.getScaleForId(l)),
          (e.vScale = this.getScaleForId(c));
      }
      getDataset() {
        return this.chart.data.datasets[this.index];
      }
      getMeta() {
        return this.chart.getDatasetMeta(this.index);
      }
      getScaleForId(t) {
        return this.chart.scales[t];
      }
      _getOtherScale(t) {
        const e = this._cachedMeta;
        return t === e.iScale ? e.vScale : e.iScale;
      }
      reset() {
        this._update("reset");
      }
      _destroy() {
        const t = this._cachedMeta;
        this._data && ku(this._data, this), t._stacked && Pp(t);
      }
      _dataCheck() {
        const t = this.getDataset(),
          e = t.data || (t.data = []),
          n = this._data;
        if (yh(e))
          this._data = (function (t) {
            const e = Object.keys(t),
              n = new Array(e.length);
            let i, o, s;
            for (i = 0, o = e.length; i < o; ++i)
              (s = e[i]), (n[i] = { x: s, y: t[s] });
            return n;
          })(e);
        else if (n !== e) {
          if (n) {
            ku(n, this);
            const t = this._cachedMeta;
            Pp(t), (t._parsed = []);
          }
          e &&
            Object.isExtensible(e) &&
            (this,
            (i = e)._chartjs
              ? i._chartjs.listeners.push(this)
              : (Object.defineProperty(i, "_chartjs", {
                  configurable: !0,
                  enumerable: !1,
                  value: { listeners: [this] },
                }),
                wu.forEach((t) => {
                  const e = "_onData" + Lh(t),
                    n = i[t];
                  Object.defineProperty(i, t, {
                    configurable: !0,
                    enumerable: !1,
                    value(...t) {
                      const o = n.apply(this, t);
                      return (
                        i._chartjs.listeners.forEach((n) => {
                          "function" == typeof n[e] && n[e](...t);
                        }),
                        o
                      );
                    },
                  });
                }))),
            (this._syncList = []),
            (this._data = e);
        }
        var i;
      }
      addElements() {
        const t = this._cachedMeta;
        this._dataCheck(),
          this.datasetElementType &&
            (t.dataset = new this.datasetElementType());
      }
      buildOrUpdateElements(t) {
        const e = this._cachedMeta,
          n = this.getDataset();
        let i = !1;
        this._dataCheck();
        const o = e._stacked;
        (e._stacked = Sp(e.vScale, e)),
          e.stack !== n.stack && ((i = !0), Pp(e), (e.stack = n.stack)),
          this._resyncElements(t),
          (i || o !== e._stacked) && Ap(this, e._parsed);
      }
      configure() {
        const t = this.chart.config,
          e = t.datasetScopeKeys(this._type),
          n = t.getOptionScopes(this.getDataset(), e, !0);
        (this.options = t.createResolver(n, this.getContext())),
          (this._parsing = this.options.parsing),
          (this._cachedDataOpts = {});
      }
      parse(t, e) {
        const { _cachedMeta: n, _data: i } = this,
          { iScale: o, _stacked: s } = n,
          r = o.axis;
        let a,
          l,
          c,
          h = (0 === t && e === i.length) || n._sorted,
          d = t > 0 && n._parsed[t - 1];
        if (!1 === this._parsing) (n._parsed = i), (n._sorted = !0), (c = i);
        else {
          c = bh(i[t])
            ? this.parseArrayData(n, i, t, e)
            : yh(i[t])
            ? this.parseObjectData(n, i, t, e)
            : this.parsePrimitiveData(n, i, t, e);
          const o = () => null === l[r] || (d && l[r] < d[r]);
          for (a = 0; a < e; ++a)
            (n._parsed[a + t] = l = c[a]), h && (o() && (h = !1), (d = l));
          n._sorted = h;
        }
        s && Ap(this, c);
      }
      parsePrimitiveData(t, e, n, i) {
        const { iScale: o, vScale: s } = t,
          r = o.axis,
          a = s.axis,
          l = o.getLabels(),
          c = o === s,
          h = new Array(i);
        let d, u, p;
        for (d = 0, u = i; d < u; ++d)
          (p = d + n),
            (h[d] = { [r]: c || o.parse(l[p], p), [a]: s.parse(e[p], p) });
        return h;
      }
      parseArrayData(t, e, n, i) {
        const { xScale: o, yScale: s } = t,
          r = new Array(i);
        let a, l, c, h;
        for (a = 0, l = i; a < l; ++a)
          (c = a + n),
            (h = e[c]),
            (r[a] = { x: o.parse(h[0], c), y: s.parse(h[1], c) });
        return r;
      }
      parseObjectData(t, e, n, i) {
        const { xScale: o, yScale: s } = t,
          { xAxisKey: r = "x", yAxisKey: a = "y" } = this._parsing,
          l = new Array(i);
        let c, h, d, u;
        for (c = 0, h = i; c < h; ++c)
          (d = c + n),
            (u = e[d]),
            (l[c] = { x: o.parse(Eh(u, r), d), y: s.parse(Eh(u, a), d) });
        return l;
      }
      getParsed(t) {
        return this._cachedMeta._parsed[t];
      }
      getDataElement(t) {
        return this._cachedMeta.data[t];
      }
      applyStack(t, e, n) {
        const i = this.chart,
          o = this._cachedMeta,
          s = e[t.axis];
        return kp({ keys: wp(i, !0), values: e._stacks[t.axis] }, s, o.index, {
          mode: n,
        });
      }
      updateRangeFromParsed(t, e, n, i) {
        const o = n[e.axis];
        let s = null === o ? NaN : o;
        const r = i && n._stacks[e.axis];
        i && r && ((i.values = r), (s = kp(i, o, this._cachedMeta.index))),
          (t.min = Math.min(t.min, s)),
          (t.max = Math.max(t.max, s));
      }
      getMinMax(t, e) {
        const n = this._cachedMeta,
          i = n._parsed,
          o = n._sorted && t === n.iScale,
          s = i.length,
          r = this._getOtherScale(t),
          a = ((t, e, n) =>
            t && !e.hidden && e._stacked && { keys: wp(n, !0), values: null })(
            e,
            n,
            this.chart
          ),
          l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
          { min: c, max: h } = (function (t) {
            const {
              min: e,
              max: n,
              minDefined: i,
              maxDefined: o,
            } = t.getUserBounds();
            return {
              min: i ? e : Number.NEGATIVE_INFINITY,
              max: o ? n : Number.POSITIVE_INFINITY,
            };
          })(r);
        let d, u;
        function p() {
          u = i[d];
          const e = u[r.axis];
          return !vh(u[t.axis]) || c > e || h < e;
        }
        for (
          d = 0;
          d < s && (p() || (this.updateRangeFromParsed(l, t, u, a), !o));
          ++d
        );
        if (o)
          for (d = s - 1; d >= 0; --d)
            if (!p()) {
              this.updateRangeFromParsed(l, t, u, a);
              break;
            }
        return l;
      }
      getAllParsedValues(t) {
        const e = this._cachedMeta._parsed,
          n = [];
        let i, o, s;
        for (i = 0, o = e.length; i < o; ++i)
          (s = e[i][t.axis]), vh(s) && n.push(s);
        return n;
      }
      getMaxOverflow() {
        return !1;
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          n = e.iScale,
          i = e.vScale,
          o = this.getParsed(t);
        return {
          label: n ? "" + n.getLabelForValue(o[n.axis]) : "",
          value: i ? "" + i.getLabelForValue(o[i.axis]) : "",
        };
      }
      _update(t) {
        const e = this._cachedMeta;
        this.update(t || "default"),
          (e._clip = (function (t) {
            let e, n, i, o;
            return (
              yh(t)
                ? ((e = t.top), (n = t.right), (i = t.bottom), (o = t.left))
                : (e = n = i = o = t),
              { top: e, right: n, bottom: i, left: o, disabled: !1 === t }
            );
          })(
            _h(
              this.options.clip,
              (function (t, e, n) {
                if (!1 === n) return !1;
                const i = _p(t, n),
                  o = _p(e, n);
                return {
                  top: o.end,
                  right: i.end,
                  bottom: o.start,
                  left: i.start,
                };
              })(e.xScale, e.yScale, this.getMaxOverflow())
            )
          ));
      }
      update(t) {}
      draw() {
        const t = this._ctx,
          e = this.chart,
          n = this._cachedMeta,
          i = n.data || [],
          o = e.chartArea,
          s = [],
          r = this._drawStart || 0,
          a = this._drawCount || i.length - r,
          l = this.options.drawActiveElementsOnTop;
        let c;
        for (n.dataset && n.dataset.draw(t, o, r, a), c = r; c < r + a; ++c) {
          const e = i[c];
          e.hidden || (e.active && l ? s.push(e) : e.draw(t, o));
        }
        for (c = 0; c < s.length; ++c) s[c].draw(t, o);
      }
      getStyle(t, e) {
        const n = e ? "active" : "default";
        return void 0 === t && this._cachedMeta.dataset
          ? this.resolveDatasetElementOptions(n)
          : this.resolveDataElementOptions(t || 0, n);
      }
      getContext(t, e, n) {
        const i = this.getDataset();
        let o;
        if (t >= 0 && t < this._cachedMeta.data.length) {
          const e = this._cachedMeta.data[t];
          (o =
            e.$context ||
            (e.$context = (function (t, e, n) {
              return yu(t, {
                active: !1,
                dataIndex: e,
                parsed: void 0,
                raw: void 0,
                element: n,
                index: e,
                mode: "default",
                type: "data",
              });
            })(this.getContext(), t, e))),
            (o.parsed = this.getParsed(t)),
            (o.raw = i.data[t]),
            (o.index = o.dataIndex = t);
        } else
          (o =
            this.$context ||
            (this.$context = (function (t, e) {
              return yu(t, {
                active: !1,
                dataset: void 0,
                datasetIndex: e,
                index: e,
                mode: "default",
                type: "dataset",
              });
            })(this.chart.getContext(), this.index))),
            (o.dataset = i),
            (o.index = o.datasetIndex = this.index);
        return (o.active = !!e), (o.mode = n), o;
      }
      resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t);
      }
      resolveDataElementOptions(t, e) {
        return this._resolveElementOptions(this.dataElementType.id, e, t);
      }
      _resolveElementOptions(t, e = "default", n) {
        const i = "active" === e,
          o = this._cachedDataOpts,
          s = t + "-" + e,
          r = o[s],
          a = this.enableOptionSharing && Ih(n);
        if (r) return Rp(r, a);
        const l = this.chart.config,
          c = l.datasetElementScopeKeys(this._type, t),
          h = i ? [`${t}Hover`, "hover", t, ""] : [t, ""],
          d = l.getOptionScopes(this.getDataset(), c),
          u = Object.keys(Yd.elements[t]),
          p = l.resolveNamedOptions(d, u, () => this.getContext(n, i), h);
        return (
          p.$shared && ((p.$shared = a), (o[s] = Object.freeze(Rp(p, a)))), p
        );
      }
      _resolveAnimations(t, e, n) {
        const i = this.chart,
          o = this._cachedDataOpts,
          s = `animation-${e}`,
          r = o[s];
        if (r) return r;
        let a;
        if (!1 !== i.options.animation) {
          const i = this.chart.config,
            o = i.datasetAnimationScopeKeys(this._type, e),
            s = i.getOptionScopes(this.getDataset(), o);
          a = i.createResolver(s, this.getContext(t, n, e));
        }
        const l = new xp(i, a && a.animations);
        return a && a._cacheable && (o[s] = Object.freeze(l)), l;
      }
      getSharedOptions(t) {
        if (t.$shared)
          return (
            this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
          );
      }
      includeOptions(t, e) {
        return !e || Dp(t) || this.chart._animationsDisabled;
      }
      updateElement(t, e, n, i) {
        Dp(i)
          ? Object.assign(t, n)
          : this._resolveAnimations(e, i).update(t, n);
      }
      updateSharedOptions(t, e, n) {
        t && !Dp(e) && this._resolveAnimations(void 0, e).update(t, n);
      }
      _setStyle(t, e, n, i) {
        t.active = i;
        const o = this.getStyle(e, i);
        this._resolveAnimations(e, n, i).update(t, {
          options: (!i && this.getSharedOptions(o)) || o,
        });
      }
      removeHoverStyle(t, e, n) {
        this._setStyle(t, n, "active", !1);
      }
      setHoverStyle(t, e, n) {
        this._setStyle(t, n, "active", !0);
      }
      _removeDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !1);
      }
      _setDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !0);
      }
      _resyncElements(t) {
        const e = this._data,
          n = this._cachedMeta.data;
        for (const [t, e, n] of this._syncList) this[t](e, n);
        this._syncList = [];
        const i = n.length,
          o = e.length,
          s = Math.min(o, i);
        s && this.parse(0, s),
          o > i
            ? this._insertElements(i, o - i, t)
            : o < i && this._removeElements(o, i - o);
      }
      _insertElements(t, e, n = !0) {
        const i = this._cachedMeta,
          o = i.data,
          s = t + e;
        let r;
        const a = (t) => {
          for (t.length += e, r = t.length - 1; r >= s; r--) t[r] = t[r - e];
        };
        for (a(o), r = t; r < s; ++r) o[r] = new this.dataElementType();
        this._parsing && a(i._parsed),
          this.parse(t, e),
          n && this.updateElements(o, t, e, "reset");
      }
      updateElements(t, e, n, i) {}
      _removeElements(t, e) {
        const n = this._cachedMeta;
        if (this._parsing) {
          const i = n._parsed.splice(t, e);
          n._stacked && Pp(n, i);
        }
        n.data.splice(t, e);
      }
      _sync(t) {
        if (this._parsing) this._syncList.push(t);
        else {
          const [e, n, i] = t;
          this[e](n, i);
        }
        this.chart._dataChanges.push([this.index, ...t]);
      }
      _onDataPush() {
        const t = arguments.length;
        this._sync(["_insertElements", this.getDataset().data.length - t, t]);
      }
      _onDataPop() {
        this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
      }
      _onDataShift() {
        this._sync(["_removeElements", 0, 1]);
      }
      _onDataSplice(t, e) {
        e && this._sync(["_removeElements", t, e]);
        const n = arguments.length - 2;
        n && this._sync(["_insertElements", t, n]);
      }
      _onDataUnshift() {
        this._sync(["_insertElements", 0, arguments.length]);
      }
    }
    function Ep(t) {
      const e = t.iScale,
        n = (function (t, e) {
          if (!t._cache.$bar) {
            const n = t.getMatchingVisibleMetas(e);
            let i = [];
            for (let e = 0, o = n.length; e < o; e++)
              i = i.concat(n[e].controller.getAllParsedValues(t));
            t._cache.$bar = Su(i.sort((t, e) => t - e));
          }
          return t._cache.$bar;
        })(e, t.type);
      let i,
        o,
        s,
        r,
        a = e._length;
      const l = () => {
        32767 !== s &&
          -32768 !== s &&
          (Ih(r) && (a = Math.min(a, Math.abs(s - r) || a)), (r = s));
      };
      for (i = 0, o = n.length; i < o; ++i) (s = e.getPixelForValue(n[i])), l();
      for (r = void 0, i = 0, o = e.ticks.length; i < o; ++i)
        (s = e.getPixelForTick(i)), l();
      return a;
    }
    function Lp(t, e, n, i) {
      return (
        bh(t)
          ? (function (t, e, n, i) {
              const o = n.parse(t[0], i),
                s = n.parse(t[1], i),
                r = Math.min(o, s),
                a = Math.max(o, s);
              let l = r,
                c = a;
              Math.abs(r) > Math.abs(a) && ((l = a), (c = r)),
                (e[n.axis] = c),
                (e._custom = {
                  barStart: l,
                  barEnd: c,
                  start: o,
                  end: s,
                  min: r,
                  max: a,
                });
            })(t, e, n, i)
          : (e[n.axis] = n.parse(t, i)),
        e
      );
    }
    function Ip(t, e, n, i) {
      const o = t.iScale,
        s = t.vScale,
        r = o.getLabels(),
        a = o === s,
        l = [];
      let c, h, d, u;
      for (c = n, h = n + i; c < h; ++c)
        (u = e[c]),
          (d = {}),
          (d[o.axis] = a || o.parse(r[c], c)),
          l.push(Lp(u, d, s, c));
      return l;
    }
    function Vp(t) {
      return t && void 0 !== t.barStart && void 0 !== t.barEnd;
    }
    function Fp(t, e, n, i) {
      let o = e.borderSkipped;
      const s = {};
      if (!o) return void (t.borderSkipped = s);
      const {
        start: r,
        end: a,
        reverse: l,
        top: c,
        bottom: h,
      } = (function (t) {
        let e, n, i, o, s;
        return (
          t.horizontal
            ? ((e = t.base > t.x), (n = "left"), (i = "right"))
            : ((e = t.base < t.y), (n = "bottom"), (i = "top")),
          e ? ((o = "end"), (s = "start")) : ((o = "start"), (s = "end")),
          { start: n, end: i, reverse: e, top: o, bottom: s }
        );
      })(t);
      "middle" === o &&
        n &&
        ((t.enableBorderRadius = !0),
        (n._top || 0) === i
          ? (o = c)
          : (n._bottom || 0) === i
          ? (o = h)
          : ((s[Np(h, r, a, l)] = !0), (o = c))),
        (s[Np(o, r, a, l)] = !0),
        (t.borderSkipped = s);
    }
    function Np(t, e, n, i) {
      var o, s, r;
      return (
        i
          ? ((r = n),
            (t = Bp((t = (o = t) === (s = e) ? r : o === r ? s : o), n, e)))
          : (t = Bp(t, e, n)),
        t
      );
    }
    function Bp(t, e, n) {
      return "start" === t ? e : "end" === t ? n : t;
    }
    function jp(t, { inflateAmount: e }, n) {
      t.inflateAmount = "auto" === e ? (1 === n ? 0.33 : 0) : e;
    }
    (Op.defaults = {}),
      (Op.prototype.datasetElementType = null),
      (Op.prototype.dataElementType = null);
    class zp extends Op {
      parsePrimitiveData(t, e, n, i) {
        return Ip(t, e, n, i);
      }
      parseArrayData(t, e, n, i) {
        return Ip(t, e, n, i);
      }
      parseObjectData(t, e, n, i) {
        const { iScale: o, vScale: s } = t,
          { xAxisKey: r = "x", yAxisKey: a = "y" } = this._parsing,
          l = "x" === o.axis ? r : a,
          c = "x" === s.axis ? r : a,
          h = [];
        let d, u, p, f;
        for (d = n, u = n + i; d < u; ++d)
          (f = e[d]),
            (p = {}),
            (p[o.axis] = o.parse(Eh(f, l), d)),
            h.push(Lp(Eh(f, c), p, s, d));
        return h;
      }
      updateRangeFromParsed(t, e, n, i) {
        super.updateRangeFromParsed(t, e, n, i);
        const o = n._custom;
        o &&
          e === this._cachedMeta.vScale &&
          ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)));
      }
      getMaxOverflow() {
        return 0;
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          { iScale: n, vScale: i } = e,
          o = this.getParsed(t),
          s = o._custom,
          r = Vp(s)
            ? "[" + s.start + ", " + s.end + "]"
            : "" + i.getLabelForValue(o[i.axis]);
        return { label: "" + n.getLabelForValue(o[n.axis]), value: r };
      }
      initialize() {
        (this.enableOptionSharing = !0),
          super.initialize(),
          (this._cachedMeta.stack = this.getDataset().stack);
      }
      update(t) {
        const e = this._cachedMeta;
        this.updateElements(e.data, 0, e.data.length, t);
      }
      updateElements(t, e, n, i) {
        const o = "reset" === i,
          {
            index: s,
            _cachedMeta: { vScale: r },
          } = this,
          a = r.getBasePixel(),
          l = r.isHorizontal(),
          c = this._getRuler(),
          h = this.resolveDataElementOptions(e, i),
          d = this.getSharedOptions(h),
          u = this.includeOptions(i, d);
        this.updateSharedOptions(d, i, h);
        for (let h = e; h < e + n; h++) {
          const e = this.getParsed(h),
            n =
              o || mh(e[r.axis])
                ? { base: a, head: a }
                : this._calculateBarValuePixels(h),
            p = this._calculateBarIndexPixels(h, c),
            f = (e._stacks || {})[r.axis],
            g = {
              horizontal: l,
              base: n.base,
              enableBorderRadius:
                !f || Vp(e._custom) || s === f._top || s === f._bottom,
              x: l ? n.head : p.center,
              y: l ? p.center : n.head,
              height: l ? p.size : Math.abs(n.size),
              width: l ? Math.abs(n.size) : p.size,
            };
          u &&
            (g.options =
              d ||
              this.resolveDataElementOptions(h, t[h].active ? "active" : i));
          const m = g.options || t[h].options;
          Fp(g, m, f, s), jp(g, m, c.ratio), this.updateElement(t[h], h, g, i);
        }
      }
      _getStacks(t, e) {
        const n = this._cachedMeta.iScale,
          i = n.getMatchingVisibleMetas(this._type),
          o = n.options.stacked,
          s = i.length,
          r = [];
        let a, l;
        for (a = 0; a < s; ++a)
          if (((l = i[a]), l.controller.options.grouped)) {
            if (void 0 !== e) {
              const t =
                l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];
              if (mh(t) || isNaN(t)) continue;
            }
            if (
              ((!1 === o ||
                -1 === r.indexOf(l.stack) ||
                (void 0 === o && void 0 === l.stack)) &&
                r.push(l.stack),
              l.index === t)
            )
              break;
          }
        return r.length || r.push(void 0), r;
      }
      _getStackCount(t) {
        return this._getStacks(void 0, t).length;
      }
      _getStackIndex(t, e, n) {
        const i = this._getStacks(t, n),
          o = void 0 !== e ? i.indexOf(e) : -1;
        return -1 === o ? i.length - 1 : o;
      }
      _getRuler() {
        const t = this.options,
          e = this._cachedMeta,
          n = e.iScale,
          i = [];
        let o, s;
        for (o = 0, s = e.data.length; o < s; ++o)
          i.push(n.getPixelForValue(this.getParsed(o)[n.axis], o));
        const r = t.barThickness;
        return {
          min: r || Ep(e),
          pixels: i,
          start: n._startPixel,
          end: n._endPixel,
          stackCount: this._getStackCount(),
          scale: n,
          grouped: t.grouped,
          ratio: r ? 1 : t.categoryPercentage * t.barPercentage,
        };
      }
      _calculateBarValuePixels(t) {
        const {
            _cachedMeta: { vScale: e, _stacked: n },
            options: { base: i, minBarLength: o },
          } = this,
          s = i || 0,
          r = this.getParsed(t),
          a = r._custom,
          l = Vp(a);
        let c,
          h,
          d = r[e.axis],
          u = 0,
          p = n ? this.applyStack(e, r, n) : d;
        p !== d && ((u = p - d), (p = d)),
          l &&
            ((d = a.barStart),
            (p = a.barEnd - a.barStart),
            0 !== d && Gh(d) !== Gh(a.barEnd) && (u = 0),
            (u += d));
        const f = mh(i) || l ? u : i;
        let g = e.getPixelForValue(f);
        if (
          ((c = this.chart.getDataVisibility(t)
            ? e.getPixelForValue(u + p)
            : g),
          (h = c - g),
          Math.abs(h) < o &&
            ((h =
              (function (t, e, n) {
                return 0 !== t
                  ? Gh(t)
                  : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1);
              })(h, e, s) * o),
            d === s && (g -= h / 2),
            (c = g + h)),
          g === e.getPixelForValue(s))
        ) {
          const t = (Gh(h) * e.getLineWidthForValue(s)) / 2;
          (g += t), (h -= t);
        }
        return { size: h, base: g, head: c, center: c + h / 2 };
      }
      _calculateBarIndexPixels(t, e) {
        const n = e.scale,
          i = this.options,
          o = i.skipNull,
          s = _h(i.maxBarThickness, 1 / 0);
        let r, a;
        if (e.grouped) {
          const n = o ? this._getStackCount(t) : e.stackCount,
            l =
              "flex" === i.barThickness
                ? (function (t, e, n, i) {
                    const o = e.pixels,
                      s = o[t];
                    let r = t > 0 ? o[t - 1] : null,
                      a = t < o.length - 1 ? o[t + 1] : null;
                    const l = n.categoryPercentage;
                    null === r &&
                      (r = s - (null === a ? e.end - e.start : a - s)),
                      null === a && (a = s + s - r);
                    const c = s - ((s - Math.min(r, a)) / 2) * l;
                    return {
                      chunk: ((Math.abs(a - r) / 2) * l) / i,
                      ratio: n.barPercentage,
                      start: c,
                    };
                  })(t, e, i, n)
                : (function (t, e, n, i) {
                    const o = n.barThickness;
                    let s, r;
                    return (
                      mh(o)
                        ? ((s = e.min * n.categoryPercentage),
                          (r = n.barPercentage))
                        : ((s = o * i), (r = 1)),
                      { chunk: s / i, ratio: r, start: e.pixels[t] - s / 2 }
                    );
                  })(t, e, i, n),
            c = this._getStackIndex(
              this.index,
              this._cachedMeta.stack,
              o ? t : void 0
            );
          (r = l.start + l.chunk * c + l.chunk / 2),
            (a = Math.min(s, l.chunk * l.ratio));
        } else
          (r = n.getPixelForValue(this.getParsed(t)[n.axis], t)),
            (a = Math.min(s, e.min * e.ratio));
        return { base: r - a / 2, head: r + a / 2, center: r, size: a };
      }
      draw() {
        const t = this._cachedMeta,
          e = t.vScale,
          n = t.data,
          i = n.length;
        let o = 0;
        for (; o < i; ++o)
          null !== this.getParsed(o)[e.axis] && n[o].draw(this._ctx);
      }
    }
    (zp.id = "bar"),
      (zp.defaults = {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: !0,
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "base", "width", "height"],
          },
        },
      }),
      (zp.overrides = {
        scales: {
          _index_: { type: "category", offset: !0, grid: { offset: !0 } },
          _value_: { type: "linear", beginAtZero: !0 },
        },
      });
    class $p extends Op {
      initialize() {
        (this.enableOptionSharing = !0), super.initialize();
      }
      parsePrimitiveData(t, e, n, i) {
        const o = super.parsePrimitiveData(t, e, n, i);
        for (let t = 0; t < o.length; t++)
          o[t]._custom = this.resolveDataElementOptions(t + n).radius;
        return o;
      }
      parseArrayData(t, e, n, i) {
        const o = super.parseArrayData(t, e, n, i);
        for (let t = 0; t < o.length; t++) {
          const i = e[n + t];
          o[t]._custom = _h(i[2], this.resolveDataElementOptions(t + n).radius);
        }
        return o;
      }
      parseObjectData(t, e, n, i) {
        const o = super.parseObjectData(t, e, n, i);
        for (let t = 0; t < o.length; t++) {
          const i = e[n + t];
          o[t]._custom = _h(
            i && i.r && +i.r,
            this.resolveDataElementOptions(t + n).radius
          );
        }
        return o;
      }
      getMaxOverflow() {
        const t = this._cachedMeta.data;
        let e = 0;
        for (let n = t.length - 1; n >= 0; --n)
          e = Math.max(e, t[n].size(this.resolveDataElementOptions(n)) / 2);
        return e > 0 && e;
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          { xScale: n, yScale: i } = e,
          o = this.getParsed(t),
          s = n.getLabelForValue(o.x),
          r = i.getLabelForValue(o.y),
          a = o._custom;
        return {
          label: e.label,
          value: "(" + s + ", " + r + (a ? ", " + a : "") + ")",
        };
      }
      update(t) {
        const e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t);
      }
      updateElements(t, e, n, i) {
        const o = "reset" === i,
          { iScale: s, vScale: r } = this._cachedMeta,
          a = this.resolveDataElementOptions(e, i),
          l = this.getSharedOptions(a),
          c = this.includeOptions(i, l),
          h = s.axis,
          d = r.axis;
        for (let a = e; a < e + n; a++) {
          const e = t[a],
            n = !o && this.getParsed(a),
            l = {},
            u = (l[h] = o
              ? s.getPixelForDecimal(0.5)
              : s.getPixelForValue(n[h])),
            p = (l[d] = o ? r.getBasePixel() : r.getPixelForValue(n[d]));
          (l.skip = isNaN(u) || isNaN(p)),
            c &&
              ((l.options = this.resolveDataElementOptions(
                a,
                e.active ? "active" : i
              )),
              o && (l.options.radius = 0)),
            this.updateElement(e, a, l, i);
        }
        this.updateSharedOptions(l, i, a);
      }
      resolveDataElementOptions(t, e) {
        const n = this.getParsed(t);
        let i = super.resolveDataElementOptions(t, e);
        i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
        const o = i.radius;
        return (
          "active" !== e && (i.radius = 0),
          (i.radius += _h(n && n._custom, o)),
          i
        );
      }
    }
    ($p.id = "bubble"),
      ($p.defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius"],
          },
        },
      }),
      ($p.overrides = {
        scales: { x: { type: "linear" }, y: { type: "linear" } },
        plugins: { tooltip: { callbacks: { title: () => "" } } },
      });
    class Wp extends Op {
      constructor(t, e) {
        super(t, e),
          (this.enableOptionSharing = !0),
          (this.innerRadius = void 0),
          (this.outerRadius = void 0),
          (this.offsetX = void 0),
          (this.offsetY = void 0);
      }
      linkScales() {}
      parse(t, e) {
        const n = this.getDataset().data,
          i = this._cachedMeta;
        if (!1 === this._parsing) i._parsed = n;
        else {
          let o,
            s,
            r = (t) => +n[t];
          if (yh(n[t])) {
            const { key: t = "value" } = this._parsing;
            r = (e) => +Eh(n[e], t);
          }
          for (o = t, s = t + e; o < s; ++o) i._parsed[o] = r(o);
        }
      }
      _getRotation() {
        return Zh(this.options.rotation - 90);
      }
      _getCircumference() {
        return Zh(this.options.circumference);
      }
      _getRotationExtents() {
        let t = Bh,
          e = -Bh;
        for (let n = 0; n < this.chart.data.datasets.length; ++n)
          if (this.chart.isDatasetVisible(n)) {
            const i = this.chart.getDatasetMeta(n).controller,
              o = i._getRotation(),
              s = i._getCircumference();
            (t = Math.min(t, o)), (e = Math.max(e, o + s));
          }
        return { rotation: t, circumference: e - t };
      }
      update(t) {
        const e = this.chart,
          { chartArea: n } = e,
          i = this._cachedMeta,
          o = i.data,
          s =
            this.getMaxBorderWidth() +
            this.getMaxOffset(o) +
            this.options.spacing,
          r = Math.max((Math.min(n.width, n.height) - s) / 2, 0),
          a = Math.min(
            ((c = r),
            "string" == typeof (l = this.options.cutout) && l.endsWith("%")
              ? parseFloat(l) / 100
              : l / c),
            1
          );
        var l, c;
        const h = this._getRingWeight(this.index),
          { circumference: d, rotation: u } = this._getRotationExtents(),
          {
            ratioX: p,
            ratioY: f,
            offsetX: g,
            offsetY: m,
          } = (function (t, e, n) {
            let i = 1,
              o = 1,
              s = 0,
              r = 0;
            if (e < Bh) {
              const a = t,
                l = a + e,
                c = Math.cos(a),
                h = Math.sin(a),
                d = Math.cos(l),
                u = Math.sin(l),
                p = (t, e, i) =>
                  sd(t, a, l, !0) ? 1 : Math.max(e, e * n, i, i * n),
                f = (t, e, i) =>
                  sd(t, a, l, !0) ? -1 : Math.min(e, e * n, i, i * n),
                g = p(0, c, d),
                m = p(Wh, h, u),
                b = f(Nh, c, d),
                y = f(Nh + Wh, h, u);
              (i = (g - b) / 2),
                (o = (m - y) / 2),
                (s = -(g + b) / 2),
                (r = -(m + y) / 2);
            }
            return { ratioX: i, ratioY: o, offsetX: s, offsetY: r };
          })(u, d, a),
          b = (n.width - s) / p,
          y = (n.height - s) / f,
          v = Math.max(Math.min(b, y) / 2, 0),
          x = wh(this.options.radius, v),
          _ = (x - Math.max(x * a, 0)) / this._getVisibleDatasetWeightTotal();
        (this.offsetX = g * x),
          (this.offsetY = m * x),
          (i.total = this.calculateTotal()),
          (this.outerRadius = x - _ * this._getRingWeightOffset(this.index)),
          (this.innerRadius = Math.max(this.outerRadius - _ * h, 0)),
          this.updateElements(o, 0, o.length, t);
      }
      _circumference(t, e) {
        const n = this.options,
          i = this._cachedMeta,
          o = this._getCircumference();
        return (e && n.animation.animateRotate) ||
          !this.chart.getDataVisibility(t) ||
          null === i._parsed[t] ||
          i.data[t].hidden
          ? 0
          : this.calculateCircumference((i._parsed[t] * o) / Bh);
      }
      updateElements(t, e, n, i) {
        const o = "reset" === i,
          s = this.chart,
          r = s.chartArea,
          a = s.options.animation,
          l = (r.left + r.right) / 2,
          c = (r.top + r.bottom) / 2,
          h = o && a.animateScale,
          d = h ? 0 : this.innerRadius,
          u = h ? 0 : this.outerRadius,
          p = this.resolveDataElementOptions(e, i),
          f = this.getSharedOptions(p),
          g = this.includeOptions(i, f);
        let m,
          b = this._getRotation();
        for (m = 0; m < e; ++m) b += this._circumference(m, o);
        for (m = e; m < e + n; ++m) {
          const e = this._circumference(m, o),
            n = t[m],
            s = {
              x: l + this.offsetX,
              y: c + this.offsetY,
              startAngle: b,
              endAngle: b + e,
              circumference: e,
              outerRadius: u,
              innerRadius: d,
            };
          g &&
            (s.options =
              f || this.resolveDataElementOptions(m, n.active ? "active" : i)),
            (b += e),
            this.updateElement(n, m, s, i);
        }
        this.updateSharedOptions(f, i, p);
      }
      calculateTotal() {
        const t = this._cachedMeta,
          e = t.data;
        let n,
          i = 0;
        for (n = 0; n < e.length; n++) {
          const o = t._parsed[n];
          null === o ||
            isNaN(o) ||
            !this.chart.getDataVisibility(n) ||
            e[n].hidden ||
            (i += Math.abs(o));
        }
        return i;
      }
      calculateCircumference(t) {
        const e = this._cachedMeta.total;
        return e > 0 && !isNaN(t) ? Bh * (Math.abs(t) / e) : 0;
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          n = this.chart,
          i = n.data.labels || [],
          o = sp(e._parsed[t], n.options.locale);
        return { label: i[t] || "", value: o };
      }
      getMaxBorderWidth(t) {
        let e = 0;
        const n = this.chart;
        let i, o, s, r, a;
        if (!t)
          for (i = 0, o = n.data.datasets.length; i < o; ++i)
            if (n.isDatasetVisible(i)) {
              (s = n.getDatasetMeta(i)), (t = s.data), (r = s.controller);
              break;
            }
        if (!t) return 0;
        for (i = 0, o = t.length; i < o; ++i)
          (a = r.resolveDataElementOptions(i)),
            "inner" !== a.borderAlign &&
              (e = Math.max(e, a.borderWidth || 0, a.hoverBorderWidth || 0));
        return e;
      }
      getMaxOffset(t) {
        let e = 0;
        for (let n = 0, i = t.length; n < i; ++n) {
          const t = this.resolveDataElementOptions(n);
          e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
        }
        return e;
      }
      _getRingWeightOffset(t) {
        let e = 0;
        for (let n = 0; n < t; ++n)
          this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
        return e;
      }
      _getRingWeight(t) {
        return Math.max(_h(this.chart.data.datasets[t].weight, 1), 0);
      }
      _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
      }
    }
    (Wp.id = "doughnut"),
      (Wp.defaults = {
        datasetElementType: !1,
        dataElementType: "arc",
        animation: { animateRotate: !0, animateScale: !1 },
        animations: {
          numbers: {
            type: "number",
            properties: [
              "circumference",
              "endAngle",
              "innerRadius",
              "outerRadius",
              "startAngle",
              "x",
              "y",
              "offset",
              "borderWidth",
              "spacing",
            ],
          },
        },
        cutout: "50%",
        rotation: 0,
        circumference: 360,
        radius: "100%",
        spacing: 0,
        indexAxis: "r",
      }),
      (Wp.descriptors = {
        _scriptable: (t) => "spacing" !== t,
        _indexable: (t) => "spacing" !== t,
      }),
      (Wp.overrides = {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels(t) {
                const e = t.data;
                if (e.labels.length && e.datasets.length) {
                  const {
                    labels: { pointStyle: n },
                  } = t.legend.options;
                  return e.labels.map((e, i) => {
                    const o = t.getDatasetMeta(0).controller.getStyle(i);
                    return {
                      text: e,
                      fillStyle: o.backgroundColor,
                      strokeStyle: o.borderColor,
                      lineWidth: o.borderWidth,
                      pointStyle: n,
                      hidden: !t.getDataVisibility(i),
                      index: i,
                    };
                  });
                }
                return [];
              },
            },
            onClick(t, e, n) {
              n.chart.toggleDataVisibility(e.index), n.chart.update();
            },
          },
          tooltip: {
            callbacks: {
              title: () => "",
              label(t) {
                let e = t.label;
                const n = ": " + t.formattedValue;
                return bh(e) ? ((e = e.slice()), (e[0] += n)) : (e += n), e;
              },
            },
          },
        },
      });
    class Hp extends Op {
      initialize() {
        (this.enableOptionSharing = !0), super.initialize();
      }
      update(t) {
        const e = this._cachedMeta,
          { dataset: n, data: i = [], _dataset: o } = e,
          s = this.chart._animationsDisabled;
        let { start: r, count: a } = (function (t, e, n) {
          const i = e.length;
          let o = 0,
            s = i;
          if (t._sorted) {
            const { iScale: r, _parsed: a } = t,
              l = r.axis,
              {
                min: c,
                max: h,
                minDefined: d,
                maxDefined: u,
              } = r.getUserBounds();
            d &&
              (o = rd(
                Math.min(
                  xu(a, r.axis, c).lo,
                  n ? i : xu(e, l, r.getPixelForValue(c)).lo
                ),
                0,
                i - 1
              )),
              (s = u
                ? rd(
                    Math.max(
                      xu(a, r.axis, h).hi + 1,
                      n ? 0 : xu(e, l, r.getPixelForValue(h)).hi + 1
                    ),
                    o,
                    i
                  ) - o
                : i - o);
          }
          return { start: o, count: s };
        })(e, i, s);
        (this._drawStart = r),
          (this._drawCount = a),
          (function (t) {
            const { xScale: e, yScale: n, _scaleRanges: i } = t,
              o = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
            if (!i) return (t._scaleRanges = o), !0;
            const s =
              i.xmin !== e.min ||
              i.xmax !== e.max ||
              i.ymin !== n.min ||
              i.ymax !== n.max;
            return Object.assign(i, o), s;
          })(e) && ((r = 0), (a = i.length)),
          (n._chart = this.chart),
          (n._datasetIndex = this.index),
          (n._decimated = !!o._decimated),
          (n.points = i);
        const l = this.resolveDatasetElementOptions(t);
        this.options.showLine || (l.borderWidth = 0),
          (l.segment = this.options.segment),
          this.updateElement(n, void 0, { animated: !s, options: l }, t),
          this.updateElements(i, r, a, t);
      }
      updateElements(t, e, n, i) {
        const o = "reset" === i,
          { iScale: s, vScale: r, _stacked: a, _dataset: l } = this._cachedMeta,
          c = this.resolveDataElementOptions(e, i),
          h = this.getSharedOptions(c),
          d = this.includeOptions(i, h),
          u = s.axis,
          p = r.axis,
          { spanGaps: f, segment: g } = this.options,
          m = Kh(f) ? f : Number.POSITIVE_INFINITY,
          b = this.chart._animationsDisabled || o || "none" === i;
        let y = e > 0 && this.getParsed(e - 1);
        for (let c = e; c < e + n; ++c) {
          const e = t[c],
            n = this.getParsed(c),
            f = b ? e : {},
            v = mh(n[p]),
            x = (f[u] = s.getPixelForValue(n[u], c)),
            _ = (f[p] =
              o || v
                ? r.getBasePixel()
                : r.getPixelForValue(a ? this.applyStack(r, n, a) : n[p], c));
          (f.skip = isNaN(x) || isNaN(_) || v),
            (f.stop = c > 0 && n[u] - y[u] > m),
            g && ((f.parsed = n), (f.raw = l.data[c])),
            d &&
              (f.options =
                h ||
                this.resolveDataElementOptions(c, e.active ? "active" : i)),
            b || this.updateElement(e, c, f, i),
            (y = n);
        }
        this.updateSharedOptions(h, i, c);
      }
      getMaxOverflow() {
        const t = this._cachedMeta,
          e = t.dataset,
          n = (e.options && e.options.borderWidth) || 0,
          i = t.data || [];
        if (!i.length) return n;
        const o = i[0].size(this.resolveDataElementOptions(0)),
          s = i[i.length - 1].size(
            this.resolveDataElementOptions(i.length - 1)
          );
        return Math.max(n, o, s) / 2;
      }
      draw() {
        const t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
          super.draw();
      }
    }
    (Hp.id = "line"),
      (Hp.defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: !0,
        spanGaps: !1,
      }),
      (Hp.overrides = {
        scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
      });
    class Up extends Op {
      constructor(t, e) {
        super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          n = this.chart,
          i = n.data.labels || [],
          o = sp(e._parsed[t].r, n.options.locale);
        return { label: i[t] || "", value: o };
      }
      update(t) {
        const e = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(e, 0, e.length, t);
      }
      _updateRadius() {
        const t = this.chart,
          e = t.chartArea,
          n = t.options,
          i = Math.min(e.right - e.left, e.bottom - e.top),
          o = Math.max(i / 2, 0),
          s =
            (o -
              Math.max(
                n.cutoutPercentage ? (o / 100) * n.cutoutPercentage : 1,
                0
              )) /
            t.getVisibleDatasetCount();
        (this.outerRadius = o - s * this.index),
          (this.innerRadius = this.outerRadius - s);
      }
      updateElements(t, e, n, i) {
        const o = "reset" === i,
          s = this.chart,
          r = this.getDataset(),
          a = s.options.animation,
          l = this._cachedMeta.rScale,
          c = l.xCenter,
          h = l.yCenter,
          d = l.getIndexAngle(0) - 0.5 * Nh;
        let u,
          p = d;
        const f = 360 / this.countVisibleElements();
        for (u = 0; u < e; ++u) p += this._computeAngle(u, i, f);
        for (u = e; u < e + n; u++) {
          const e = t[u];
          let n = p,
            g = p + this._computeAngle(u, i, f),
            m = s.getDataVisibility(u)
              ? l.getDistanceFromCenterForValue(r.data[u])
              : 0;
          (p = g),
            o && (a.animateScale && (m = 0), a.animateRotate && (n = g = d));
          const b = {
            x: c,
            y: h,
            innerRadius: 0,
            outerRadius: m,
            startAngle: n,
            endAngle: g,
            options: this.resolveDataElementOptions(u, e.active ? "active" : i),
          };
          this.updateElement(e, u, b, i);
        }
      }
      countVisibleElements() {
        const t = this.getDataset(),
          e = this._cachedMeta;
        let n = 0;
        return (
          e.data.forEach((e, i) => {
            !isNaN(t.data[i]) && this.chart.getDataVisibility(i) && n++;
          }),
          n
        );
      }
      _computeAngle(t, e, n) {
        return this.chart.getDataVisibility(t)
          ? Zh(this.resolveDataElementOptions(t, e).angle || n)
          : 0;
      }
    }
    (Up.id = "polarArea"),
      (Up.defaults = {
        dataElementType: "arc",
        animation: { animateRotate: !0, animateScale: !0 },
        animations: {
          numbers: {
            type: "number",
            properties: [
              "x",
              "y",
              "startAngle",
              "endAngle",
              "innerRadius",
              "outerRadius",
            ],
          },
        },
        indexAxis: "r",
        startAngle: 0,
      }),
      (Up.overrides = {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels(t) {
                const e = t.data;
                if (e.labels.length && e.datasets.length) {
                  const {
                    labels: { pointStyle: n },
                  } = t.legend.options;
                  return e.labels.map((e, i) => {
                    const o = t.getDatasetMeta(0).controller.getStyle(i);
                    return {
                      text: e,
                      fillStyle: o.backgroundColor,
                      strokeStyle: o.borderColor,
                      lineWidth: o.borderWidth,
                      pointStyle: n,
                      hidden: !t.getDataVisibility(i),
                      index: i,
                    };
                  });
                }
                return [];
              },
            },
            onClick(t, e, n) {
              n.chart.toggleDataVisibility(e.index), n.chart.update();
            },
          },
          tooltip: {
            callbacks: {
              title: () => "",
              label: (t) =>
                t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue,
            },
          },
        },
        scales: {
          r: {
            type: "radialLinear",
            angleLines: { display: !1 },
            beginAtZero: !0,
            grid: { circular: !0 },
            pointLabels: { display: !1 },
            startAngle: 0,
          },
        },
      });
    class qp extends Wp {}
    (qp.id = "pie"),
      (qp.defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%",
      });
    class Gp extends Op {
      getLabelAndValue(t) {
        const e = this._cachedMeta.vScale,
          n = this.getParsed(t);
        return {
          label: e.getLabels()[t],
          value: "" + e.getLabelForValue(n[e.axis]),
        };
      }
      update(t) {
        const e = this._cachedMeta,
          n = e.dataset,
          i = e.data || [],
          o = e.iScale.getLabels();
        if (((n.points = i), "resize" !== t)) {
          const e = this.resolveDatasetElementOptions(t);
          this.options.showLine || (e.borderWidth = 0);
          const s = { _loop: !0, _fullLoop: o.length === i.length, options: e };
          this.updateElement(n, void 0, s, t);
        }
        this.updateElements(i, 0, i.length, t);
      }
      updateElements(t, e, n, i) {
        const o = this.getDataset(),
          s = this._cachedMeta.rScale,
          r = "reset" === i;
        for (let a = e; a < e + n; a++) {
          const e = t[a],
            n = this.resolveDataElementOptions(a, e.active ? "active" : i),
            l = s.getPointPositionForValue(a, o.data[a]),
            c = r ? s.xCenter : l.x,
            h = r ? s.yCenter : l.y,
            d = {
              x: c,
              y: h,
              angle: l.angle,
              skip: isNaN(c) || isNaN(h),
              options: n,
            };
          this.updateElement(e, a, d, i);
        }
      }
    }
    (Gp.id = "radar"),
      (Gp.defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: { line: { fill: "start" } },
      }),
      (Gp.overrides = {
        aspectRatio: 1,
        scales: { r: { type: "radialLinear" } },
      });
    class Yp extends Hp {}
    (Yp.id = "scatter"),
      (Yp.defaults = { showLine: !1, fill: !1 }),
      (Yp.overrides = {
        interaction: { mode: "point" },
        plugins: {
          tooltip: {
            callbacks: {
              title: () => "",
              label: (t) => "(" + t.label + ", " + t.formattedValue + ")",
            },
          },
        },
        scales: { x: { type: "linear" }, y: { type: "linear" } },
      });
    var Kp = Object.freeze({
      __proto__: null,
      BarController: zp,
      BubbleController: $p,
      DoughnutController: Wp,
      LineController: Hp,
      PolarAreaController: Up,
      PieController: qp,
      RadarController: Gp,
      ScatterController: Yp,
    });
    function Jp() {
      throw new Error(
        "This method is not implemented: Check that a complete date adapter is provided."
      );
    }
    class Xp {
      constructor(t) {
        this.options = t || {};
      }
      formats() {
        return Jp();
      }
      parse(t, e) {
        return Jp();
      }
      format(t, e) {
        return Jp();
      }
      add(t, e, n) {
        return Jp();
      }
      diff(t, e, n) {
        return Jp();
      }
      startOf(t, e, n) {
        return Jp();
      }
      endOf(t, e) {
        return Jp();
      }
    }
    Xp.override = function (t) {
      Object.assign(Xp.prototype, t);
    };
    var Zp = { _date: Xp };
    function Qp(t, e) {
      return "native" in t ? { x: t.x, y: t.y } : Ju(t, e);
    }
    function tf(t, e, n, i) {
      const { controller: o, data: s, _sorted: r } = t,
        a = o._cachedMeta.iScale;
      if (a && e === a.axis && "r" !== e && r && s.length) {
        const t = a._reversePixels ? _u : xu;
        if (!i) return t(s, e, n);
        if (o._sharedOptions) {
          const i = s[0],
            o = "function" == typeof i.getRange && i.getRange(e);
          if (o) {
            const i = t(s, e, n - o),
              r = t(s, e, n + o);
            return { lo: i.lo, hi: r.hi };
          }
        }
      }
      return { lo: 0, hi: s.length - 1 };
    }
    function ef(t, e, n, i, o) {
      const s = t.getSortedVisibleDatasetMetas(),
        r = n[e];
      for (let t = 0, n = s.length; t < n; ++t) {
        const { index: n, data: a } = s[t],
          { lo: l, hi: c } = tf(s[t], e, r, o);
        for (let t = l; t <= c; ++t) {
          const e = a[t];
          e.skip || i(e, n, t);
        }
      }
    }
    function nf(t, e, n, i) {
      const o = [];
      return tu(e, t.chartArea, t._minPadding)
        ? (ef(
            t,
            n,
            e,
            function (t, n, s) {
              t.inRange(e.x, e.y, i) &&
                o.push({ element: t, datasetIndex: n, index: s });
            },
            !0
          ),
          o)
        : o;
    }
    function of(t, e, n, i, o) {
      return tu(e, t.chartArea, t._minPadding)
        ? "r" !== n || i
          ? (function (t, e, n, i, o) {
              let s = [];
              const r = (function (t) {
                const e = -1 !== t.indexOf("x"),
                  n = -1 !== t.indexOf("y");
                return function (t, i) {
                  const o = e ? Math.abs(t.x - i.x) : 0,
                    s = n ? Math.abs(t.y - i.y) : 0;
                  return Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2));
                };
              })(n);
              let a = Number.POSITIVE_INFINITY;
              return (
                ef(t, n, e, function (n, l, c) {
                  const h = n.inRange(e.x, e.y, o);
                  if (i && !h) return;
                  const d = n.getCenterPoint(o);
                  if (!tu(d, t.chartArea, t._minPadding) && !h) return;
                  const u = r(e, d);
                  u < a
                    ? ((s = [{ element: n, datasetIndex: l, index: c }]),
                      (a = u))
                    : u === a &&
                      s.push({ element: n, datasetIndex: l, index: c });
                }),
                s
              );
            })(t, e, n, i, o)
          : (function (t, e, n, i) {
              let o = [];
              return (
                ef(t, n, e, function (t, n, s) {
                  const { startAngle: r, endAngle: a } = t.getProps(
                      ["startAngle", "endAngle"],
                      i
                    ),
                    { angle: l } = ed(t, { x: e.x, y: e.y });
                  sd(l, r, a) &&
                    o.push({ element: t, datasetIndex: n, index: s });
                }),
                o
              );
            })(t, e, n, o)
        : [];
    }
    function sf(t, e, n, i) {
      const o = Qp(e, t),
        s = [],
        r = n.axis,
        a = "x" === r ? "inXRange" : "inYRange";
      let l = !1;
      return (
        (function (t, e) {
          const n = t.getSortedVisibleDatasetMetas();
          let i, o, s;
          for (let t = 0, r = n.length; t < r; ++t) {
            ({ index: i, data: o } = n[t]);
            for (let t = 0, n = o.length; t < n; ++t)
              (s = o[t]), s.skip || e(s, i, t);
          }
        })(t, (t, e, n) => {
          t[a](o[r], i) && s.push({ element: t, datasetIndex: e, index: n }),
            t.inRange(o.x, o.y, i) && (l = !0);
        }),
        n.intersect && !l ? [] : s
      );
    }
    var rf = {
      modes: {
        index(t, e, n, i) {
          const o = Qp(e, t),
            s = n.axis || "x",
            r = n.intersect ? nf(t, o, s, i) : of(t, o, s, !1, i),
            a = [];
          return r.length
            ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                const e = r[0].index,
                  n = t.data[e];
                n &&
                  !n.skip &&
                  a.push({ element: n, datasetIndex: t.index, index: e });
              }),
              a)
            : [];
        },
        dataset(t, e, n, i) {
          const o = Qp(e, t),
            s = n.axis || "xy";
          let r = n.intersect ? nf(t, o, s, i) : of(t, o, s, !1, i);
          if (r.length > 0) {
            const e = r[0].datasetIndex,
              n = t.getDatasetMeta(e).data;
            r = [];
            for (let t = 0; t < n.length; ++t)
              r.push({ element: n[t], datasetIndex: e, index: t });
          }
          return r;
        },
        point: (t, e, n, i) => nf(t, Qp(e, t), n.axis || "xy", i),
        nearest: (t, e, n, i) =>
          of(t, Qp(e, t), n.axis || "xy", n.intersect, i),
        x: (t, e, n, i) => sf(t, e, { axis: "x", intersect: n.intersect }, i),
        y: (t, e, n, i) => sf(t, e, { axis: "y", intersect: n.intersect }, i),
      },
    };
    const af = ["left", "top", "right", "bottom"];
    function lf(t, e) {
      return t.filter((t) => t.pos === e);
    }
    function cf(t, e) {
      return t.filter((t) => -1 === af.indexOf(t.pos) && t.box.axis === e);
    }
    function hf(t, e) {
      return t.sort((t, n) => {
        const i = e ? n : t,
          o = e ? t : n;
        return i.weight === o.weight ? i.index - o.index : i.weight - o.weight;
      });
    }
    function df(t, e, n, i) {
      return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
    }
    function uf(t, e) {
      (t.top = Math.max(t.top, e.top)),
        (t.left = Math.max(t.left, e.left)),
        (t.bottom = Math.max(t.bottom, e.bottom)),
        (t.right = Math.max(t.right, e.right));
    }
    function pf(t, e, n, i) {
      const { pos: o, box: s } = n,
        r = t.maxPadding;
      if (!yh(o)) {
        n.size && (t[o] -= n.size);
        const e = i[n.stack] || { size: 0, count: 1 };
        (e.size = Math.max(e.size, n.horizontal ? s.height : s.width)),
          (n.size = e.size / e.count),
          (t[o] += n.size);
      }
      s.getPadding && uf(r, s.getPadding());
      const a = Math.max(0, e.outerWidth - df(r, t, "left", "right")),
        l = Math.max(0, e.outerHeight - df(r, t, "top", "bottom")),
        c = a !== t.w,
        h = l !== t.h;
      return (
        (t.w = a),
        (t.h = l),
        n.horizontal ? { same: c, other: h } : { same: h, other: c }
      );
    }
    function ff(t, e) {
      const n = e.maxPadding;
      return (function (t) {
        const i = { left: 0, top: 0, right: 0, bottom: 0 };
        return (
          t.forEach((t) => {
            i[t] = Math.max(e[t], n[t]);
          }),
          i
        );
      })(t ? ["left", "right"] : ["top", "bottom"]);
    }
    function gf(t, e, n, i) {
      const o = [];
      let s, r, a, l, c, h;
      for (s = 0, r = t.length, c = 0; s < r; ++s) {
        (a = t[s]),
          (l = a.box),
          l.update(a.width || e.w, a.height || e.h, ff(a.horizontal, e));
        const { same: r, other: d } = pf(e, n, a, i);
        (c |= r && o.length), (h = h || d), l.fullSize || o.push(a);
      }
      return (c && gf(o, e, n, i)) || h;
    }
    function mf(t, e, n, i, o) {
      (t.top = n),
        (t.left = e),
        (t.right = e + i),
        (t.bottom = n + o),
        (t.width = i),
        (t.height = o);
    }
    function bf(t, e, n, i) {
      const o = n.padding;
      let { x: s, y: r } = e;
      for (const a of t) {
        const t = a.box,
          l = i[a.stack] || { count: 1, placed: 0, weight: 1 },
          c = a.stackWeight / l.weight || 1;
        if (a.horizontal) {
          const i = e.w * c,
            s = l.size || t.height;
          Ih(l.start) && (r = l.start),
            t.fullSize
              ? mf(t, o.left, r, n.outerWidth - o.right - o.left, s)
              : mf(t, e.left + l.placed, r, i, s),
            (l.start = r),
            (l.placed += i),
            (r = t.bottom);
        } else {
          const i = e.h * c,
            r = l.size || t.width;
          Ih(l.start) && (s = l.start),
            t.fullSize
              ? mf(t, s, o.top, r, n.outerHeight - o.bottom - o.top)
              : mf(t, s, e.top + l.placed, r, i),
            (l.start = s),
            (l.placed += i),
            (s = t.right);
        }
      }
      (e.x = s), (e.y = r);
    }
    Yd.set("layout", {
      autoPadding: !0,
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    var yf = {
      addBox(t, e) {
        t.boxes || (t.boxes = []),
          (e.fullSize = e.fullSize || !1),
          (e.position = e.position || "top"),
          (e.weight = e.weight || 0),
          (e._layers =
            e._layers ||
            function () {
              return [
                {
                  z: 0,
                  draw(t) {
                    e.draw(t);
                  },
                },
              ];
            }),
          t.boxes.push(e);
      },
      removeBox(t, e) {
        const n = t.boxes ? t.boxes.indexOf(e) : -1;
        -1 !== n && t.boxes.splice(n, 1);
      },
      configure(t, e, n) {
        (e.fullSize = n.fullSize),
          (e.position = n.position),
          (e.weight = n.weight);
      },
      update(t, e, n, i) {
        if (!t) return;
        const o = gu(t.options.layout.padding),
          s = Math.max(e - o.width, 0),
          r = Math.max(n - o.height, 0),
          a = (function (t) {
            const e = (function (t) {
                const e = [];
                let n, i, o, s, r, a;
                for (n = 0, i = (t || []).length; n < i; ++n)
                  (o = t[n]),
                    ({
                      position: s,
                      options: { stack: r, stackWeight: a = 1 },
                    } = o),
                    e.push({
                      index: n,
                      box: o,
                      pos: s,
                      horizontal: o.isHorizontal(),
                      weight: o.weight,
                      stack: r && s + r,
                      stackWeight: a,
                    });
                return e;
              })(t),
              n = hf(
                e.filter((t) => t.box.fullSize),
                !0
              ),
              i = hf(lf(e, "left"), !0),
              o = hf(lf(e, "right")),
              s = hf(lf(e, "top"), !0),
              r = hf(lf(e, "bottom")),
              a = cf(e, "x"),
              l = cf(e, "y");
            return {
              fullSize: n,
              leftAndTop: i.concat(s),
              rightAndBottom: o.concat(l).concat(r).concat(a),
              chartArea: lf(e, "chartArea"),
              vertical: i.concat(o).concat(l),
              horizontal: s.concat(r).concat(a),
            };
          })(t.boxes),
          l = a.vertical,
          c = a.horizontal;
        Sh(t.boxes, (t) => {
          "function" == typeof t.beforeLayout && t.beforeLayout();
        });
        const h =
            l.reduce(
              (t, e) =>
                e.box.options && !1 === e.box.options.display ? t : t + 1,
              0
            ) || 1,
          d = Object.freeze({
            outerWidth: e,
            outerHeight: n,
            padding: o,
            availableWidth: s,
            availableHeight: r,
            vBoxMaxWidth: s / 2 / h,
            hBoxMaxHeight: r / 2,
          }),
          u = Object.assign({}, o);
        uf(u, gu(i));
        const p = Object.assign(
            { maxPadding: u, w: s, h: r, x: o.left, y: o.top },
            o
          ),
          f = (function (t, e) {
            const n = (function (t) {
                const e = {};
                for (const n of t) {
                  const { stack: t, pos: i, stackWeight: o } = n;
                  if (!t || !af.includes(i)) continue;
                  const s =
                    e[t] ||
                    (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
                  s.count++, (s.weight += o);
                }
                return e;
              })(t),
              { vBoxMaxWidth: i, hBoxMaxHeight: o } = e;
            let s, r, a;
            for (s = 0, r = t.length; s < r; ++s) {
              a = t[s];
              const { fullSize: r } = a.box,
                l = n[a.stack],
                c = l && a.stackWeight / l.weight;
              a.horizontal
                ? ((a.width = c ? c * i : r && e.availableWidth),
                  (a.height = o))
                : ((a.width = i),
                  (a.height = c ? c * o : r && e.availableHeight));
            }
            return n;
          })(l.concat(c), d);
        gf(a.fullSize, p, d, f),
          gf(l, p, d, f),
          gf(c, p, d, f) && gf(l, p, d, f),
          (function (t) {
            const e = t.maxPadding;
            function n(n) {
              const i = Math.max(e[n] - t[n], 0);
              return (t[n] += i), i;
            }
            (t.y += n("top")), (t.x += n("left")), n("right"), n("bottom");
          })(p),
          bf(a.leftAndTop, p, d, f),
          (p.x += p.w),
          (p.y += p.h),
          bf(a.rightAndBottom, p, d, f),
          (t.chartArea = {
            left: p.left,
            top: p.top,
            right: p.left + p.w,
            bottom: p.top + p.h,
            height: p.h,
            width: p.w,
          }),
          Sh(a.chartArea, (e) => {
            const n = e.box;
            Object.assign(n, t.chartArea),
              n.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 });
          });
      },
    };
    class vf {
      acquireContext(t, e) {}
      releaseContext(t) {
        return !1;
      }
      addEventListener(t, e, n) {}
      removeEventListener(t, e, n) {}
      getDevicePixelRatio() {
        return 1;
      }
      getMaximumSize(t, e, n, i) {
        return (
          (e = Math.max(0, e || t.width)),
          (n = n || t.height),
          { width: e, height: Math.max(0, i ? Math.floor(e / i) : n) }
        );
      }
      isAttached(t) {
        return !0;
      }
      updateConfig(t) {}
    }
    class xf extends vf {
      acquireContext(t) {
        return (t && t.getContext && t.getContext("2d")) || null;
      }
      updateConfig(t) {
        t.options.animation = !1;
      }
    }
    const _f = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout",
      },
      wf = (t) => null === t || "" === t,
      kf = !!Qu && { passive: !0 };
    function Sf(t, e, n) {
      t.canvas.removeEventListener(e, n, kf);
    }
    function Cf(t, e) {
      for (const n of t) if (n === e || n.contains(e)) return !0;
    }
    function Tf(t, e, n) {
      const i = t.canvas,
        o = new MutationObserver((t) => {
          let e = !1;
          for (const n of t)
            (e = e || Cf(n.addedNodes, i)), (e = e && !Cf(n.removedNodes, i));
          e && n();
        });
      return o.observe(document, { childList: !0, subtree: !0 }), o;
    }
    function Af(t, e, n) {
      const i = t.canvas,
        o = new MutationObserver((t) => {
          let e = !1;
          for (const n of t)
            (e = e || Cf(n.removedNodes, i)), (e = e && !Cf(n.addedNodes, i));
          e && n();
        });
      return o.observe(document, { childList: !0, subtree: !0 }), o;
    }
    const Mf = new Map();
    let Pf = 0;
    function Df() {
      const t = window.devicePixelRatio;
      t !== Pf &&
        ((Pf = t),
        Mf.forEach((e, n) => {
          n.currentDevicePixelRatio !== t && e();
        }));
    }
    function Rf(t, e, n) {
      const i = t.canvas,
        o = i && Uu(i);
      if (!o) return;
      const s = dh((t, e) => {
          const i = o.clientWidth;
          n(t, e), i < o.clientWidth && n();
        }, window),
        r = new ResizeObserver((t) => {
          const e = t[0],
            n = e.contentRect.width,
            i = e.contentRect.height;
          (0 === n && 0 === i) || s(n, i);
        });
      return (
        r.observe(o),
        (function (t, e) {
          Mf.size || window.addEventListener("resize", Df), Mf.set(t, e);
        })(t, s),
        r
      );
    }
    function Of(t, e, n) {
      n && n.disconnect(),
        "resize" === e &&
          (function (t) {
            Mf.delete(t), Mf.size || window.removeEventListener("resize", Df);
          })(t);
    }
    function Ef(t, e, n) {
      const i = t.canvas,
        o = dh(
          (e) => {
            null !== t.ctx &&
              n(
                (function (t, e) {
                  const n = _f[t.type] || t.type,
                    { x: i, y: o } = Ju(t, e);
                  return {
                    type: n,
                    chart: e,
                    native: t,
                    x: void 0 !== i ? i : null,
                    y: void 0 !== o ? o : null,
                  };
                })(e, t)
              );
          },
          t,
          (t) => {
            const e = t[0];
            return [e, e.offsetX, e.offsetY];
          }
        );
      return (
        (function (t, e, n) {
          t.addEventListener(e, n, kf);
        })(i, e, o),
        o
      );
    }
    class Lf extends vf {
      acquireContext(t, e) {
        const n = t && t.getContext && t.getContext("2d");
        return n && n.canvas === t
          ? ((function (t, e) {
              const n = t.style,
                i = t.getAttribute("height"),
                o = t.getAttribute("width");
              if (
                ((t.$chartjs = {
                  initial: {
                    height: i,
                    width: o,
                    style: {
                      display: n.display,
                      height: n.height,
                      width: n.width,
                    },
                  },
                }),
                (n.display = n.display || "block"),
                (n.boxSizing = n.boxSizing || "border-box"),
                wf(o))
              ) {
                const e = tp(t, "width");
                void 0 !== e && (t.width = e);
              }
              if (wf(i))
                if ("" === t.style.height) t.height = t.width / (e || 2);
                else {
                  const e = tp(t, "height");
                  void 0 !== e && (t.height = e);
                }
            })(t, e),
            n)
          : null;
      }
      releaseContext(t) {
        const e = t.canvas;
        if (!e.$chartjs) return !1;
        const n = e.$chartjs.initial;
        ["height", "width"].forEach((t) => {
          const i = n[t];
          mh(i) ? e.removeAttribute(t) : e.setAttribute(t, i);
        });
        const i = n.style || {};
        return (
          Object.keys(i).forEach((t) => {
            e.style[t] = i[t];
          }),
          (e.width = e.width),
          delete e.$chartjs,
          !0
        );
      }
      addEventListener(t, e, n) {
        this.removeEventListener(t, e);
        const i = t.$proxies || (t.$proxies = {}),
          o = { attach: Tf, detach: Af, resize: Rf }[e] || Ef;
        i[e] = o(t, e, n);
      }
      removeEventListener(t, e) {
        const n = t.$proxies || (t.$proxies = {}),
          i = n[e];
        i &&
          (({ attach: Of, detach: Of, resize: Of }[e] || Sf)(t, e, i),
          (n[e] = void 0));
      }
      getDevicePixelRatio() {
        return window.devicePixelRatio;
      }
      getMaximumSize(t, e, n, i) {
        return (function (t, e, n, i) {
          const o = Gu(t),
            s = Ku(o, "margin"),
            r = qu(o.maxWidth, t, "clientWidth") || zh,
            a = qu(o.maxHeight, t, "clientHeight") || zh,
            l = (function (t, e, n) {
              let i, o;
              if (void 0 === e || void 0 === n) {
                const s = Uu(t);
                if (s) {
                  const t = s.getBoundingClientRect(),
                    r = Gu(s),
                    a = Ku(r, "border", "width"),
                    l = Ku(r, "padding");
                  (e = t.width - l.width - a.width),
                    (n = t.height - l.height - a.height),
                    (i = qu(r.maxWidth, s, "clientWidth")),
                    (o = qu(r.maxHeight, s, "clientHeight"));
                } else (e = t.clientWidth), (n = t.clientHeight);
              }
              return {
                width: e,
                height: n,
                maxWidth: i || zh,
                maxHeight: o || zh,
              };
            })(t, e, n);
          let { width: c, height: h } = l;
          if ("content-box" === o.boxSizing) {
            const t = Ku(o, "border", "width"),
              e = Ku(o, "padding");
            (c -= e.width + t.width), (h -= e.height + t.height);
          }
          return (
            (c = Math.max(0, c - s.width)),
            (h = Math.max(0, i ? Math.floor(c / i) : h - s.height)),
            (c = Xu(Math.min(c, r, l.maxWidth))),
            (h = Xu(Math.min(h, a, l.maxHeight))),
            c && !h && (h = Xu(c / 2)),
            { width: c, height: h }
          );
        })(t, e, n, i);
      }
      isAttached(t) {
        const e = Uu(t);
        return !(!e || !e.isConnected);
      }
    }
    class If {
      constructor() {
        (this.x = void 0),
          (this.y = void 0),
          (this.active = !1),
          (this.options = void 0),
          (this.$animations = void 0);
      }
      tooltipPosition(t) {
        const { x: e, y: n } = this.getProps(["x", "y"], t);
        return { x: e, y: n };
      }
      hasValue() {
        return Kh(this.x) && Kh(this.y);
      }
      getProps(t, e) {
        const n = this.$animations;
        if (!e || !n) return this;
        const i = {};
        return (
          t.forEach((t) => {
            i[t] = n[t] && n[t].active() ? n[t]._to : this[t];
          }),
          i
        );
      }
    }
    (If.defaults = {}), (If.defaultRoutes = void 0);
    const Vf = {
      values: (t) => (bh(t) ? t : "" + t),
      numeric(t, e, n) {
        if (0 === t) return "0";
        const i = this.chart.options.locale;
        let o,
          s = t;
        if (n.length > 1) {
          const e = Math.max(
            Math.abs(n[0].value),
            Math.abs(n[n.length - 1].value)
          );
          (e < 1e-4 || e > 1e15) && (o = "scientific"),
            (s = (function (t, e) {
              let n =
                e.length > 3
                  ? e[2].value - e[1].value
                  : e[1].value - e[0].value;
              return (
                Math.abs(n) >= 1 &&
                  t !== Math.floor(t) &&
                  (n = t - Math.floor(t)),
                n
              );
            })(t, n));
        }
        const r = qh(Math.abs(s)),
          a = Math.max(Math.min(-1 * Math.floor(r), 20), 0),
          l = {
            notation: o,
            minimumFractionDigits: a,
            maximumFractionDigits: a,
          };
        return Object.assign(l, this.options.ticks.format), sp(t, i, l);
      },
      logarithmic(t, e, n) {
        if (0 === t) return "0";
        const i = t / Math.pow(10, Math.floor(qh(t)));
        return 1 === i || 2 === i || 5 === i
          ? Vf.numeric.call(this, t, e, n)
          : "";
      },
    };
    var Ff = { formatters: Vf };
    function Nf(t, e, n, i, o) {
      const s = _h(i, 0),
        r = Math.min(_h(o, t.length), t.length);
      let a,
        l,
        c,
        h = 0;
      for (
        n = Math.ceil(n),
          o && ((a = o - i), (n = a / Math.floor(a / n))),
          c = s;
        c < 0;

      )
        h++, (c = Math.round(s + h * n));
      for (l = Math.max(s, 0); l < r; l++)
        l === c && (e.push(t[l]), h++, (c = Math.round(s + h * n)));
    }
    Yd.set("scale", {
      display: !0,
      offset: !1,
      reverse: !1,
      beginAtZero: !1,
      bounds: "ticks",
      grace: 0,
      grid: {
        display: !0,
        lineWidth: 1,
        drawBorder: !0,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickLength: 8,
        tickWidth: (t, e) => e.lineWidth,
        tickColor: (t, e) => e.color,
        offset: !1,
        borderDash: [],
        borderDashOffset: 0,
        borderWidth: 1,
      },
      title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
      ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        textStrokeWidth: 0,
        textStrokeColor: "",
        padding: 3,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: Ff.formatters.values,
        minor: {},
        major: {},
        align: "center",
        crossAlign: "near",
        showLabelBackdrop: !1,
        backdropColor: "rgba(255, 255, 255, 0.75)",
        backdropPadding: 2,
      },
    }),
      Yd.route("scale.ticks", "color", "", "color"),
      Yd.route("scale.grid", "color", "", "borderColor"),
      Yd.route("scale.grid", "borderColor", "", "borderColor"),
      Yd.route("scale.title", "color", "", "color"),
      Yd.describe("scale", {
        _fallback: !1,
        _scriptable: (t) =>
          !t.startsWith("before") &&
          !t.startsWith("after") &&
          "callback" !== t &&
          "parser" !== t,
        _indexable: (t) => "borderDash" !== t && "tickBorderDash" !== t,
      }),
      Yd.describe("scales", { _fallback: "scale" }),
      Yd.describe("scale.ticks", {
        _scriptable: (t) => "backdropPadding" !== t && "callback" !== t,
        _indexable: (t) => "backdropPadding" !== t,
      });
    const Bf = (t, e, n) => ("top" === e || "left" === e ? t[e] + n : t[e] - n);
    function jf(t, e) {
      const n = [],
        i = t.length / e,
        o = t.length;
      let s = 0;
      for (; s < o; s += i) n.push(t[Math.floor(s)]);
      return n;
    }
    function zf(t, e, n) {
      const i = t.ticks.length,
        o = Math.min(e, i - 1),
        s = t._startPixel,
        r = t._endPixel,
        a = 1e-6;
      let l,
        c = t.getPixelForTick(o);
      if (
        !(
          n &&
          ((l =
            1 === i
              ? Math.max(c - s, r - c)
              : 0 === e
              ? (t.getPixelForTick(1) - c) / 2
              : (c - t.getPixelForTick(o - 1)) / 2),
          (c += o < e ? l : -l),
          c < s - a || c > r + a)
        )
      )
        return c;
    }
    function $f(t) {
      return t.drawTicks ? t.tickLength : 0;
    }
    function Wf(t, e) {
      if (!t.display) return 0;
      const n = mu(t.font, e),
        i = gu(t.padding);
      return (bh(t.text) ? t.text.length : 1) * n.lineHeight + i.height;
    }
    function Hf(t, e, n) {
      let i = uh(t);
      return (
        ((n && "right" !== e) || (!n && "right" === e)) &&
          (i = ((t) => ("left" === t ? "right" : "right" === t ? "left" : t))(
            i
          )),
        i
      );
    }
    class Uf extends If {
      constructor(t) {
        super(),
          (this.id = t.id),
          (this.type = t.type),
          (this.options = void 0),
          (this.ctx = t.ctx),
          (this.chart = t.chart),
          (this.top = void 0),
          (this.bottom = void 0),
          (this.left = void 0),
          (this.right = void 0),
          (this.width = void 0),
          (this.height = void 0),
          (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
          (this.maxWidth = void 0),
          (this.maxHeight = void 0),
          (this.paddingTop = void 0),
          (this.paddingBottom = void 0),
          (this.paddingLeft = void 0),
          (this.paddingRight = void 0),
          (this.axis = void 0),
          (this.labelRotation = void 0),
          (this.min = void 0),
          (this.max = void 0),
          (this._range = void 0),
          (this.ticks = []),
          (this._gridLineItems = null),
          (this._labelItems = null),
          (this._labelSizes = null),
          (this._length = 0),
          (this._maxLength = 0),
          (this._longestTextCache = {}),
          (this._startPixel = void 0),
          (this._endPixel = void 0),
          (this._reversePixels = !1),
          (this._userMax = void 0),
          (this._userMin = void 0),
          (this._suggestedMax = void 0),
          (this._suggestedMin = void 0),
          (this._ticksLength = 0),
          (this._borderValue = 0),
          (this._cache = {}),
          (this._dataLimitsCached = !1),
          (this.$context = void 0);
      }
      init(t) {
        (this.options = t.setContext(this.getContext())),
          (this.axis = t.axis),
          (this._userMin = this.parse(t.min)),
          (this._userMax = this.parse(t.max)),
          (this._suggestedMin = this.parse(t.suggestedMin)),
          (this._suggestedMax = this.parse(t.suggestedMax));
      }
      parse(t, e) {
        return t;
      }
      getUserBounds() {
        let {
          _userMin: t,
          _userMax: e,
          _suggestedMin: n,
          _suggestedMax: i,
        } = this;
        return (
          (t = xh(t, Number.POSITIVE_INFINITY)),
          (e = xh(e, Number.NEGATIVE_INFINITY)),
          (n = xh(n, Number.POSITIVE_INFINITY)),
          (i = xh(i, Number.NEGATIVE_INFINITY)),
          { min: xh(t, n), max: xh(e, i), minDefined: vh(t), maxDefined: vh(e) }
        );
      }
      getMinMax(t) {
        let e,
          {
            min: n,
            max: i,
            minDefined: o,
            maxDefined: s,
          } = this.getUserBounds();
        if (o && s) return { min: n, max: i };
        const r = this.getMatchingVisibleMetas();
        for (let a = 0, l = r.length; a < l; ++a)
          (e = r[a].controller.getMinMax(this, t)),
            o || (n = Math.min(n, e.min)),
            s || (i = Math.max(i, e.max));
        return (
          (n = s && n > i ? i : n),
          (i = o && n > i ? n : i),
          { min: xh(n, xh(i, n)), max: xh(i, xh(n, i)) }
        );
      }
      getPadding() {
        return {
          left: this.paddingLeft || 0,
          top: this.paddingTop || 0,
          right: this.paddingRight || 0,
          bottom: this.paddingBottom || 0,
        };
      }
      getTicks() {
        return this.ticks;
      }
      getLabels() {
        const t = this.chart.data;
        return (
          this.options.labels ||
          (this.isHorizontal() ? t.xLabels : t.yLabels) ||
          t.labels ||
          []
        );
      }
      beforeLayout() {
        (this._cache = {}), (this._dataLimitsCached = !1);
      }
      beforeUpdate() {
        kh(this.options.beforeUpdate, [this]);
      }
      update(t, e, n) {
        const { beginAtZero: i, grace: o, ticks: s } = this.options,
          r = s.sampleSize;
        this.beforeUpdate(),
          (this.maxWidth = t),
          (this.maxHeight = e),
          (this._margins = n =
            Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
          (this.ticks = null),
          (this._labelSizes = null),
          (this._gridLineItems = null),
          (this._labelItems = null),
          this.beforeSetDimensions(),
          this.setDimensions(),
          this.afterSetDimensions(),
          (this._maxLength = this.isHorizontal()
            ? this.width + n.left + n.right
            : this.height + n.top + n.bottom),
          this._dataLimitsCached ||
            (this.beforeDataLimits(),
            this.determineDataLimits(),
            this.afterDataLimits(),
            (this._range = (function (t, e, n) {
              const { min: i, max: o } = t,
                s = wh(e, (o - i) / 2),
                r = (t, e) => (n && 0 === t ? 0 : t + e);
              return { min: r(i, -Math.abs(s)), max: r(o, s) };
            })(this, o, i)),
            (this._dataLimitsCached = !0)),
          this.beforeBuildTicks(),
          (this.ticks = this.buildTicks() || []),
          this.afterBuildTicks();
        const a = r < this.ticks.length;
        this._convertTicksToLabels(a ? jf(this.ticks, r) : this.ticks),
          this.configure(),
          this.beforeCalculateLabelRotation(),
          this.calculateLabelRotation(),
          this.afterCalculateLabelRotation(),
          s.display &&
            (s.autoSkip || "auto" === s.source) &&
            ((this.ticks = (function (t, e) {
              const n = t.options.ticks,
                i =
                  n.maxTicksLimit ||
                  (function (t) {
                    const e = t.options.offset,
                      n = t._tickSize(),
                      i = t._length / n + (e ? 0 : 1),
                      o = t._maxLength / n;
                    return Math.floor(Math.min(i, o));
                  })(t),
                o = n.major.enabled
                  ? (function (t) {
                      const e = [];
                      let n, i;
                      for (n = 0, i = t.length; n < i; n++)
                        t[n].major && e.push(n);
                      return e;
                    })(e)
                  : [],
                s = o.length,
                r = o[0],
                a = o[s - 1],
                l = [];
              if (s > i)
                return (
                  (function (t, e, n, i) {
                    let o,
                      s = 0,
                      r = n[0];
                    for (i = Math.ceil(i), o = 0; o < t.length; o++)
                      o === r && (e.push(t[o]), s++, (r = n[s * i]));
                  })(e, l, o, s / i),
                  l
                );
              const c = (function (t, e, n) {
                const i = (function (t) {
                    const e = t.length;
                    let n, i;
                    if (e < 2) return !1;
                    for (i = t[0], n = 1; n < e; ++n)
                      if (t[n] - t[n - 1] !== i) return !1;
                    return i;
                  })(t),
                  o = e.length / n;
                if (!i) return Math.max(o, 1);
                const s = (function (t) {
                  const e = [],
                    n = Math.sqrt(t);
                  let i;
                  for (i = 1; i < n; i++)
                    t % i == 0 && (e.push(i), e.push(t / i));
                  return (
                    n === (0 | n) && e.push(n), e.sort((t, e) => t - e).pop(), e
                  );
                })(i);
                for (let t = 0, e = s.length - 1; t < e; t++) {
                  const e = s[t];
                  if (e > o) return e;
                }
                return Math.max(o, 1);
              })(o, e, i);
              if (s > 0) {
                let t, n;
                const i = s > 1 ? Math.round((a - r) / (s - 1)) : null;
                for (
                  Nf(e, l, c, mh(i) ? 0 : r - i, r), t = 0, n = s - 1;
                  t < n;
                  t++
                )
                  Nf(e, l, c, o[t], o[t + 1]);
                return Nf(e, l, c, a, mh(i) ? e.length : a + i), l;
              }
              return Nf(e, l, c), l;
            })(this, this.ticks)),
            (this._labelSizes = null)),
          a && this._convertTicksToLabels(this.ticks),
          this.beforeFit(),
          this.fit(),
          this.afterFit(),
          this.afterUpdate();
      }
      configure() {
        let t,
          e,
          n = this.options.reverse;
        this.isHorizontal()
          ? ((t = this.left), (e = this.right))
          : ((t = this.top), (e = this.bottom), (n = !n)),
          (this._startPixel = t),
          (this._endPixel = e),
          (this._reversePixels = n),
          (this._length = e - t),
          (this._alignToPixels = this.options.alignToPixels);
      }
      afterUpdate() {
        kh(this.options.afterUpdate, [this]);
      }
      beforeSetDimensions() {
        kh(this.options.beforeSetDimensions, [this]);
      }
      setDimensions() {
        this.isHorizontal()
          ? ((this.width = this.maxWidth),
            (this.left = 0),
            (this.right = this.width))
          : ((this.height = this.maxHeight),
            (this.top = 0),
            (this.bottom = this.height)),
          (this.paddingLeft = 0),
          (this.paddingTop = 0),
          (this.paddingRight = 0),
          (this.paddingBottom = 0);
      }
      afterSetDimensions() {
        kh(this.options.afterSetDimensions, [this]);
      }
      _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()),
          kh(this.options[t], [this]);
      }
      beforeDataLimits() {
        this._callHooks("beforeDataLimits");
      }
      determineDataLimits() {}
      afterDataLimits() {
        this._callHooks("afterDataLimits");
      }
      beforeBuildTicks() {
        this._callHooks("beforeBuildTicks");
      }
      buildTicks() {
        return [];
      }
      afterBuildTicks() {
        this._callHooks("afterBuildTicks");
      }
      beforeTickToLabelConversion() {
        kh(this.options.beforeTickToLabelConversion, [this]);
      }
      generateTickLabels(t) {
        const e = this.options.ticks;
        let n, i, o;
        for (n = 0, i = t.length; n < i; n++)
          (o = t[n]), (o.label = kh(e.callback, [o.value, n, t], this));
      }
      afterTickToLabelConversion() {
        kh(this.options.afterTickToLabelConversion, [this]);
      }
      beforeCalculateLabelRotation() {
        kh(this.options.beforeCalculateLabelRotation, [this]);
      }
      calculateLabelRotation() {
        const t = this.options,
          e = t.ticks,
          n = this.ticks.length,
          i = e.minRotation || 0,
          o = e.maxRotation;
        let s,
          r,
          a,
          l = i;
        if (
          !this._isVisible() ||
          !e.display ||
          i >= o ||
          n <= 1 ||
          !this.isHorizontal()
        )
          return void (this.labelRotation = i);
        const c = this._getLabelSizes(),
          h = c.widest.width,
          d = c.highest.height,
          u = rd(this.chart.width - h, 0, this.maxWidth);
        (s = t.offset ? this.maxWidth / n : u / (n - 1)),
          h + 6 > s &&
            ((s = u / (n - (t.offset ? 0.5 : 1))),
            (r =
              this.maxHeight -
              $f(t.grid) -
              e.padding -
              Wf(t.title, this.chart.options.font)),
            (a = Math.sqrt(h * h + d * d)),
            (l = Qh(
              Math.min(
                Math.asin(rd((c.highest.height + 6) / s, -1, 1)),
                Math.asin(rd(r / a, -1, 1)) - Math.asin(rd(d / a, -1, 1))
              )
            )),
            (l = Math.max(i, Math.min(o, l)))),
          (this.labelRotation = l);
      }
      afterCalculateLabelRotation() {
        kh(this.options.afterCalculateLabelRotation, [this]);
      }
      beforeFit() {
        kh(this.options.beforeFit, [this]);
      }
      fit() {
        const t = { width: 0, height: 0 },
          {
            chart: e,
            options: { ticks: n, title: i, grid: o },
          } = this,
          s = this._isVisible(),
          r = this.isHorizontal();
        if (s) {
          const s = Wf(i, e.options.font);
          if (
            (r
              ? ((t.width = this.maxWidth), (t.height = $f(o) + s))
              : ((t.height = this.maxHeight), (t.width = $f(o) + s)),
            n.display && this.ticks.length)
          ) {
            const {
                first: e,
                last: i,
                widest: o,
                highest: s,
              } = this._getLabelSizes(),
              a = 2 * n.padding,
              l = Zh(this.labelRotation),
              c = Math.cos(l),
              h = Math.sin(l);
            if (r) {
              const e = n.mirror ? 0 : h * o.width + c * s.height;
              t.height = Math.min(this.maxHeight, t.height + e + a);
            } else {
              const e = n.mirror ? 0 : c * o.width + h * s.height;
              t.width = Math.min(this.maxWidth, t.width + e + a);
            }
            this._calculatePadding(e, i, h, c);
          }
        }
        this._handleMargins(),
          r
            ? ((this.width = this._length =
                e.width - this._margins.left - this._margins.right),
              (this.height = t.height))
            : ((this.width = t.width),
              (this.height = this._length =
                e.height - this._margins.top - this._margins.bottom));
      }
      _calculatePadding(t, e, n, i) {
        const {
            ticks: { align: o, padding: s },
            position: r,
          } = this.options,
          a = 0 !== this.labelRotation,
          l = "top" !== r && "x" === this.axis;
        if (this.isHorizontal()) {
          const r = this.getPixelForTick(0) - this.left,
            c = this.right - this.getPixelForTick(this.ticks.length - 1);
          let h = 0,
            d = 0;
          a
            ? l
              ? ((h = i * t.width), (d = n * e.height))
              : ((h = n * t.height), (d = i * e.width))
            : "start" === o
            ? (d = e.width)
            : "end" === o
            ? (h = t.width)
            : ((h = t.width / 2), (d = e.width / 2)),
            (this.paddingLeft = Math.max(
              ((h - r + s) * this.width) / (this.width - r),
              0
            )),
            (this.paddingRight = Math.max(
              ((d - c + s) * this.width) / (this.width - c),
              0
            ));
        } else {
          let n = e.height / 2,
            i = t.height / 2;
          "start" === o
            ? ((n = 0), (i = t.height))
            : "end" === o && ((n = e.height), (i = 0)),
            (this.paddingTop = n + s),
            (this.paddingBottom = i + s);
        }
      }
      _handleMargins() {
        this._margins &&
          ((this._margins.left = Math.max(
            this.paddingLeft,
            this._margins.left
          )),
          (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
          (this._margins.right = Math.max(
            this.paddingRight,
            this._margins.right
          )),
          (this._margins.bottom = Math.max(
            this.paddingBottom,
            this._margins.bottom
          )));
      }
      afterFit() {
        kh(this.options.afterFit, [this]);
      }
      isHorizontal() {
        const { axis: t, position: e } = this.options;
        return "top" === e || "bottom" === e || "x" === t;
      }
      isFullSize() {
        return this.options.fullSize;
      }
      _convertTicksToLabels(t) {
        let e, n;
        for (
          this.beforeTickToLabelConversion(),
            this.generateTickLabels(t),
            e = 0,
            n = t.length;
          e < n;
          e++
        )
          mh(t[e].label) && (t.splice(e, 1), n--, e--);
        this.afterTickToLabelConversion();
      }
      _getLabelSizes() {
        let t = this._labelSizes;
        if (!t) {
          const e = this.options.ticks.sampleSize;
          let n = this.ticks;
          e < n.length && (n = jf(n, e)),
            (this._labelSizes = t = this._computeLabelSizes(n, n.length));
        }
        return t;
      }
      _computeLabelSizes(t, e) {
        const { ctx: n, _longestTextCache: i } = this,
          o = [],
          s = [];
        let r,
          a,
          l,
          c,
          h,
          d,
          u,
          p,
          f,
          g,
          m,
          b = 0,
          y = 0;
        for (r = 0; r < e; ++r) {
          if (
            ((c = t[r].label),
            (h = this._resolveTickFontOptions(r)),
            (n.font = d = h.string),
            (u = i[d] = i[d] || { data: {}, gc: [] }),
            (p = h.lineHeight),
            (f = g = 0),
            mh(c) || bh(c))
          ) {
            if (bh(c))
              for (a = 0, l = c.length; a < l; ++a)
                (m = c[a]),
                  mh(m) || bh(m) || ((f = Kd(n, u.data, u.gc, f, m)), (g += p));
          } else (f = Kd(n, u.data, u.gc, f, c)), (g = p);
          o.push(f), s.push(g), (b = Math.max(f, b)), (y = Math.max(g, y));
        }
        !(function (t, e) {
          Sh(t, (t) => {
            const n = t.gc,
              i = n.length / 2;
            let o;
            if (i > e) {
              for (o = 0; o < i; ++o) delete t.data[n[o]];
              n.splice(0, i);
            }
          });
        })(i, e);
        const v = o.indexOf(b),
          x = s.indexOf(y),
          _ = (t) => ({ width: o[t] || 0, height: s[t] || 0 });
        return {
          first: _(0),
          last: _(e - 1),
          widest: _(v),
          highest: _(x),
          widths: o,
          heights: s,
        };
      }
      getLabelForValue(t) {
        return t;
      }
      getPixelForValue(t, e) {
        return NaN;
      }
      getValueForPixel(t) {}
      getPixelForTick(t) {
        const e = this.ticks;
        return t < 0 || t > e.length - 1
          ? null
          : this.getPixelForValue(e[t].value);
      }
      getPixelForDecimal(t) {
        this._reversePixels && (t = 1 - t);
        const e = this._startPixel + t * this._length;
        return rd(
          this._alignToPixels ? Xd(this.chart, e, 0) : e,
          -32768,
          32767
        );
      }
      getDecimalForPixel(t) {
        const e = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - e : e;
      }
      getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
      }
      getBaseValue() {
        const { min: t, max: e } = this;
        return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
      }
      getContext(t) {
        const e = this.ticks || [];
        if (t >= 0 && t < e.length) {
          const n = e[t];
          return (
            n.$context ||
            (n.$context = (function (t, e, n) {
              return yu(t, { tick: n, index: e, type: "tick" });
            })(this.getContext(), t, n))
          );
        }
        return (
          this.$context ||
          (this.$context = yu(this.chart.getContext(), {
            scale: this,
            type: "scale",
          }))
        );
      }
      _tickSize() {
        const t = this.options.ticks,
          e = Zh(this.labelRotation),
          n = Math.abs(Math.cos(e)),
          i = Math.abs(Math.sin(e)),
          o = this._getLabelSizes(),
          s = t.autoSkipPadding || 0,
          r = o ? o.widest.width + s : 0,
          a = o ? o.highest.height + s : 0;
        return this.isHorizontal()
          ? a * n > r * i
            ? r / n
            : a / i
          : a * i < r * n
          ? a / n
          : r / i;
      }
      _isVisible() {
        const t = this.options.display;
        return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
      }
      _computeGridLineItems(t) {
        const e = this.axis,
          n = this.chart,
          i = this.options,
          { grid: o, position: s } = i,
          r = o.offset,
          a = this.isHorizontal(),
          l = this.ticks.length + (r ? 1 : 0),
          c = $f(o),
          h = [],
          d = o.setContext(this.getContext()),
          u = d.drawBorder ? d.borderWidth : 0,
          p = u / 2,
          f = function (t) {
            return Xd(n, t, u);
          };
        let g, m, b, y, v, x, _, w, k, S, C, T;
        if ("top" === s)
          (g = f(this.bottom)),
            (x = this.bottom - c),
            (w = g - p),
            (S = f(t.top) + p),
            (T = t.bottom);
        else if ("bottom" === s)
          (g = f(this.top)),
            (S = t.top),
            (T = f(t.bottom) - p),
            (x = g + p),
            (w = this.top + c);
        else if ("left" === s)
          (g = f(this.right)),
            (v = this.right - c),
            (_ = g - p),
            (k = f(t.left) + p),
            (C = t.right);
        else if ("right" === s)
          (g = f(this.left)),
            (k = t.left),
            (C = f(t.right) - p),
            (v = g + p),
            (_ = this.left + c);
        else if ("x" === e) {
          if ("center" === s) g = f((t.top + t.bottom) / 2 + 0.5);
          else if (yh(s)) {
            const t = Object.keys(s)[0],
              e = s[t];
            g = f(this.chart.scales[t].getPixelForValue(e));
          }
          (S = t.top), (T = t.bottom), (x = g + p), (w = x + c);
        } else if ("y" === e) {
          if ("center" === s) g = f((t.left + t.right) / 2);
          else if (yh(s)) {
            const t = Object.keys(s)[0],
              e = s[t];
            g = f(this.chart.scales[t].getPixelForValue(e));
          }
          (v = g - p), (_ = v - c), (k = t.left), (C = t.right);
        }
        const A = _h(i.ticks.maxTicksLimit, l),
          M = Math.max(1, Math.ceil(l / A));
        for (m = 0; m < l; m += M) {
          const t = o.setContext(this.getContext(m)),
            e = t.lineWidth,
            i = t.color,
            s = o.borderDash || [],
            l = t.borderDashOffset,
            c = t.tickWidth,
            d = t.tickColor,
            u = t.tickBorderDash || [],
            p = t.tickBorderDashOffset;
          (b = zf(this, m, r)),
            void 0 !== b &&
              ((y = Xd(n, b, e)),
              a ? (v = _ = k = C = y) : (x = w = S = T = y),
              h.push({
                tx1: v,
                ty1: x,
                tx2: _,
                ty2: w,
                x1: k,
                y1: S,
                x2: C,
                y2: T,
                width: e,
                color: i,
                borderDash: s,
                borderDashOffset: l,
                tickWidth: c,
                tickColor: d,
                tickBorderDash: u,
                tickBorderDashOffset: p,
              }));
        }
        return (this._ticksLength = l), (this._borderValue = g), h;
      }
      _computeLabelItems(t) {
        const e = this.axis,
          n = this.options,
          { position: i, ticks: o } = n,
          s = this.isHorizontal(),
          r = this.ticks,
          { align: a, crossAlign: l, padding: c, mirror: h } = o,
          d = $f(n.grid),
          u = d + c,
          p = h ? -c : u,
          f = -Zh(this.labelRotation),
          g = [];
        let m,
          b,
          y,
          v,
          x,
          _,
          w,
          k,
          S,
          C,
          T,
          A,
          M = "middle";
        if ("top" === i)
          (_ = this.bottom - p), (w = this._getXAxisLabelAlignment());
        else if ("bottom" === i)
          (_ = this.top + p), (w = this._getXAxisLabelAlignment());
        else if ("left" === i) {
          const t = this._getYAxisLabelAlignment(d);
          (w = t.textAlign), (x = t.x);
        } else if ("right" === i) {
          const t = this._getYAxisLabelAlignment(d);
          (w = t.textAlign), (x = t.x);
        } else if ("x" === e) {
          if ("center" === i) _ = (t.top + t.bottom) / 2 + u;
          else if (yh(i)) {
            const t = Object.keys(i)[0],
              e = i[t];
            _ = this.chart.scales[t].getPixelForValue(e) + u;
          }
          w = this._getXAxisLabelAlignment();
        } else if ("y" === e) {
          if ("center" === i) x = (t.left + t.right) / 2 - u;
          else if (yh(i)) {
            const t = Object.keys(i)[0],
              e = i[t];
            x = this.chart.scales[t].getPixelForValue(e);
          }
          w = this._getYAxisLabelAlignment(d).textAlign;
        }
        "y" === e &&
          ("start" === a ? (M = "top") : "end" === a && (M = "bottom"));
        const P = this._getLabelSizes();
        for (m = 0, b = r.length; m < b; ++m) {
          (y = r[m]), (v = y.label);
          const t = o.setContext(this.getContext(m));
          (k = this.getPixelForTick(m) + o.labelOffset),
            (S = this._resolveTickFontOptions(m)),
            (C = S.lineHeight),
            (T = bh(v) ? v.length : 1);
          const e = T / 2,
            n = t.color,
            a = t.textStrokeColor,
            c = t.textStrokeWidth;
          let d;
          if (
            (s
              ? ((x = k),
                (A =
                  "top" === i
                    ? "near" === l || 0 !== f
                      ? -T * C + C / 2
                      : "center" === l
                      ? -P.highest.height / 2 - e * C + C
                      : -P.highest.height + C / 2
                    : "near" === l || 0 !== f
                    ? C / 2
                    : "center" === l
                    ? P.highest.height / 2 - e * C
                    : P.highest.height - T * C),
                h && (A *= -1))
              : ((_ = k), (A = ((1 - T) * C) / 2)),
            t.showLabelBackdrop)
          ) {
            const e = gu(t.backdropPadding),
              n = P.heights[m],
              i = P.widths[m];
            let o = _ + A - e.top,
              s = x - e.left;
            switch (M) {
              case "middle":
                o -= n / 2;
                break;
              case "bottom":
                o -= n;
            }
            switch (w) {
              case "center":
                s -= i / 2;
                break;
              case "right":
                s -= i;
            }
            d = {
              left: s,
              top: o,
              width: i + e.width,
              height: n + e.height,
              color: t.backdropColor,
            };
          }
          g.push({
            rotation: f,
            label: v,
            font: S,
            color: n,
            strokeColor: a,
            strokeWidth: c,
            textOffset: A,
            textAlign: w,
            textBaseline: M,
            translation: [x, _],
            backdrop: d,
          });
        }
        return g;
      }
      _getXAxisLabelAlignment() {
        const { position: t, ticks: e } = this.options;
        if (-Zh(this.labelRotation)) return "top" === t ? "left" : "right";
        let n = "center";
        return (
          "start" === e.align
            ? (n = "left")
            : "end" === e.align && (n = "right"),
          n
        );
      }
      _getYAxisLabelAlignment(t) {
        const {
            position: e,
            ticks: { crossAlign: n, mirror: i, padding: o },
          } = this.options,
          s = t + o,
          r = this._getLabelSizes().widest.width;
        let a, l;
        return (
          "left" === e
            ? i
              ? ((l = this.right + o),
                "near" === n
                  ? (a = "left")
                  : "center" === n
                  ? ((a = "center"), (l += r / 2))
                  : ((a = "right"), (l += r)))
              : ((l = this.right - s),
                "near" === n
                  ? (a = "right")
                  : "center" === n
                  ? ((a = "center"), (l -= r / 2))
                  : ((a = "left"), (l = this.left)))
            : "right" === e
            ? i
              ? ((l = this.left + o),
                "near" === n
                  ? (a = "right")
                  : "center" === n
                  ? ((a = "center"), (l -= r / 2))
                  : ((a = "left"), (l -= r)))
              : ((l = this.left + s),
                "near" === n
                  ? (a = "left")
                  : "center" === n
                  ? ((a = "center"), (l += r / 2))
                  : ((a = "right"), (l = this.right)))
            : (a = "right"),
          { textAlign: a, x: l }
        );
      }
      _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const t = this.chart,
          e = this.options.position;
        return "left" === e || "right" === e
          ? { top: 0, left: this.left, bottom: t.height, right: this.right }
          : "top" === e || "bottom" === e
          ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
          : void 0;
      }
      drawBackground() {
        const {
          ctx: t,
          options: { backgroundColor: e },
          left: n,
          top: i,
          width: o,
          height: s,
        } = this;
        e && (t.save(), (t.fillStyle = e), t.fillRect(n, i, o, s), t.restore());
      }
      getLineWidthForValue(t) {
        const e = this.options.grid;
        if (!this._isVisible() || !e.display) return 0;
        const n = this.ticks.findIndex((e) => e.value === t);
        return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
      }
      drawGrid(t) {
        const e = this.options.grid,
          n = this.ctx,
          i =
            this._gridLineItems ||
            (this._gridLineItems = this._computeGridLineItems(t));
        let o, s;
        const r = (t, e, i) => {
          i.width &&
            i.color &&
            (n.save(),
            (n.lineWidth = i.width),
            (n.strokeStyle = i.color),
            n.setLineDash(i.borderDash || []),
            (n.lineDashOffset = i.borderDashOffset),
            n.beginPath(),
            n.moveTo(t.x, t.y),
            n.lineTo(e.x, e.y),
            n.stroke(),
            n.restore());
        };
        if (e.display)
          for (o = 0, s = i.length; o < s; ++o) {
            const t = i[o];
            e.drawOnChartArea &&
              r({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
              e.drawTicks &&
                r(
                  { x: t.tx1, y: t.ty1 },
                  { x: t.tx2, y: t.ty2 },
                  {
                    color: t.tickColor,
                    width: t.tickWidth,
                    borderDash: t.tickBorderDash,
                    borderDashOffset: t.tickBorderDashOffset,
                  }
                );
          }
      }
      drawBorder() {
        const {
            chart: t,
            ctx: e,
            options: { grid: n },
          } = this,
          i = n.setContext(this.getContext()),
          o = n.drawBorder ? i.borderWidth : 0;
        if (!o) return;
        const s = n.setContext(this.getContext(0)).lineWidth,
          r = this._borderValue;
        let a, l, c, h;
        this.isHorizontal()
          ? ((a = Xd(t, this.left, o) - o / 2),
            (l = Xd(t, this.right, s) + s / 2),
            (c = h = r))
          : ((c = Xd(t, this.top, o) - o / 2),
            (h = Xd(t, this.bottom, s) + s / 2),
            (a = l = r)),
          e.save(),
          (e.lineWidth = i.borderWidth),
          (e.strokeStyle = i.borderColor),
          e.beginPath(),
          e.moveTo(a, c),
          e.lineTo(l, h),
          e.stroke(),
          e.restore();
      }
      drawLabels(t) {
        if (!this.options.ticks.display) return;
        const e = this.ctx,
          n = this._computeLabelArea();
        n && eu(e, n);
        const i =
          this._labelItems || (this._labelItems = this._computeLabelItems(t));
        let o, s;
        for (o = 0, s = i.length; o < s; ++o) {
          const t = i[o],
            n = t.font,
            s = t.label;
          t.backdrop &&
            ((e.fillStyle = t.backdrop.color),
            e.fillRect(
              t.backdrop.left,
              t.backdrop.top,
              t.backdrop.width,
              t.backdrop.height
            )),
            su(e, s, 0, t.textOffset, n, t);
        }
        n && nu(e);
      }
      drawTitle() {
        const {
          ctx: t,
          options: { position: e, title: n, reverse: i },
        } = this;
        if (!n.display) return;
        const o = mu(n.font),
          s = gu(n.padding),
          r = n.align;
        let a = o.lineHeight / 2;
        "bottom" === e || "center" === e || yh(e)
          ? ((a += s.bottom),
            bh(n.text) && (a += o.lineHeight * (n.text.length - 1)))
          : (a += s.top);
        const {
          titleX: l,
          titleY: c,
          maxWidth: h,
          rotation: d,
        } = (function (t, e, n, i) {
          const { top: o, left: s, bottom: r, right: a, chart: l } = t,
            { chartArea: c, scales: h } = l;
          let d,
            u,
            p,
            f = 0;
          const g = r - o,
            m = a - s;
          if (t.isHorizontal()) {
            if (((u = ph(i, s, a)), yh(n))) {
              const t = Object.keys(n)[0],
                i = n[t];
              p = h[t].getPixelForValue(i) + g - e;
            } else
              p = "center" === n ? (c.bottom + c.top) / 2 + g - e : Bf(t, n, e);
            d = a - s;
          } else {
            if (yh(n)) {
              const t = Object.keys(n)[0],
                i = n[t];
              u = h[t].getPixelForValue(i) - m + e;
            } else
              u = "center" === n ? (c.left + c.right) / 2 - m + e : Bf(t, n, e);
            (p = ph(i, r, o)), (f = "left" === n ? -Wh : Wh);
          }
          return { titleX: u, titleY: p, maxWidth: d, rotation: f };
        })(this, a, e, r);
        su(t, n.text, 0, 0, o, {
          color: n.color,
          maxWidth: h,
          rotation: d,
          textAlign: Hf(r, e, i),
          textBaseline: "middle",
          translation: [l, c],
        });
      }
      draw(t) {
        this._isVisible() &&
          (this.drawBackground(),
          this.drawGrid(t),
          this.drawBorder(),
          this.drawTitle(),
          this.drawLabels(t));
      }
      _layers() {
        const t = this.options,
          e = (t.ticks && t.ticks.z) || 0,
          n = _h(t.grid && t.grid.z, -1);
        return this._isVisible() && this.draw === Uf.prototype.draw
          ? [
              {
                z: n,
                draw: (t) => {
                  this.drawBackground(), this.drawGrid(t), this.drawTitle();
                },
              },
              {
                z: n + 1,
                draw: () => {
                  this.drawBorder();
                },
              },
              {
                z: e,
                draw: (t) => {
                  this.drawLabels(t);
                },
              },
            ]
          : [
              {
                z: e,
                draw: (t) => {
                  this.draw(t);
                },
              },
            ];
      }
      getMatchingVisibleMetas(t) {
        const e = this.chart.getSortedVisibleDatasetMetas(),
          n = this.axis + "AxisID",
          i = [];
        let o, s;
        for (o = 0, s = e.length; o < s; ++o) {
          const s = e[o];
          s[n] !== this.id || (t && s.type !== t) || i.push(s);
        }
        return i;
      }
      _resolveTickFontOptions(t) {
        return mu(this.options.ticks.setContext(this.getContext(t)).font);
      }
      _maxDigits() {
        const t = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / t;
      }
    }
    class qf {
      constructor(t, e, n) {
        (this.type = t),
          (this.scope = e),
          (this.override = n),
          (this.items = Object.create(null));
      }
      isForType(t) {
        return Object.prototype.isPrototypeOf.call(
          this.type.prototype,
          t.prototype
        );
      }
      register(t) {
        const e = Object.getPrototypeOf(t);
        let n;
        (function (t) {
          return "id" in t && "defaults" in t;
        })(e) && (n = this.register(e));
        const i = this.items,
          o = t.id,
          s = this.scope + "." + o;
        if (!o) throw new Error("class does not have id: " + t);
        return (
          o in i ||
            ((i[o] = t),
            (function (t, e, n) {
              const i = Ph(Object.create(null), [
                n ? Yd.get(n) : {},
                Yd.get(e),
                t.defaults,
              ]);
              Yd.set(e, i),
                t.defaultRoutes &&
                  (function (t, e) {
                    Object.keys(e).forEach((n) => {
                      const i = n.split("."),
                        o = i.pop(),
                        s = [t].concat(i).join("."),
                        r = e[n].split("."),
                        a = r.pop(),
                        l = r.join(".");
                      Yd.route(s, o, l, a);
                    });
                  })(e, t.defaultRoutes),
                t.descriptors && Yd.describe(e, t.descriptors);
            })(t, s, n),
            this.override && Yd.override(t.id, t.overrides)),
          s
        );
      }
      get(t) {
        return this.items[t];
      }
      unregister(t) {
        const e = this.items,
          n = t.id,
          i = this.scope;
        n in e && delete e[n],
          i && n in Yd[i] && (delete Yd[i][n], this.override && delete Hd[n]);
      }
    }
    var Gf = new (class {
      constructor() {
        (this.controllers = new qf(Op, "datasets", !0)),
          (this.elements = new qf(If, "elements")),
          (this.plugins = new qf(Object, "plugins")),
          (this.scales = new qf(Uf, "scales")),
          (this._typedRegistries = [
            this.controllers,
            this.scales,
            this.elements,
          ]);
      }
      add(...t) {
        this._each("register", t);
      }
      remove(...t) {
        this._each("unregister", t);
      }
      addControllers(...t) {
        this._each("register", t, this.controllers);
      }
      addElements(...t) {
        this._each("register", t, this.elements);
      }
      addPlugins(...t) {
        this._each("register", t, this.plugins);
      }
      addScales(...t) {
        this._each("register", t, this.scales);
      }
      getController(t) {
        return this._get(t, this.controllers, "controller");
      }
      getElement(t) {
        return this._get(t, this.elements, "element");
      }
      getPlugin(t) {
        return this._get(t, this.plugins, "plugin");
      }
      getScale(t) {
        return this._get(t, this.scales, "scale");
      }
      removeControllers(...t) {
        this._each("unregister", t, this.controllers);
      }
      removeElements(...t) {
        this._each("unregister", t, this.elements);
      }
      removePlugins(...t) {
        this._each("unregister", t, this.plugins);
      }
      removeScales(...t) {
        this._each("unregister", t, this.scales);
      }
      _each(t, e, n) {
        [...e].forEach((e) => {
          const i = n || this._getRegistryForType(e);
          n || i.isForType(e) || (i === this.plugins && e.id)
            ? this._exec(t, i, e)
            : Sh(e, (e) => {
                const i = n || this._getRegistryForType(e);
                this._exec(t, i, e);
              });
        });
      }
      _exec(t, e, n) {
        const i = Lh(t);
        kh(n["before" + i], [], n), e[t](n), kh(n["after" + i], [], n);
      }
      _getRegistryForType(t) {
        for (let e = 0; e < this._typedRegistries.length; e++) {
          const n = this._typedRegistries[e];
          if (n.isForType(t)) return n;
        }
        return this.plugins;
      }
      _get(t, e, n) {
        const i = e.get(t);
        if (void 0 === i)
          throw new Error('"' + t + '" is not a registered ' + n + ".");
        return i;
      }
    })();
    class Yf {
      constructor() {
        this._init = [];
      }
      notify(t, e, n, i) {
        "beforeInit" === e &&
          ((this._init = this._createDescriptors(t, !0)),
          this._notify(this._init, t, "install"));
        const o = i ? this._descriptors(t).filter(i) : this._descriptors(t),
          s = this._notify(o, t, e, n);
        return (
          "afterDestroy" === e &&
            (this._notify(o, t, "stop"),
            this._notify(this._init, t, "uninstall")),
          s
        );
      }
      _notify(t, e, n, i) {
        i = i || {};
        for (const o of t) {
          const t = o.plugin;
          if (!1 === kh(t[n], [e, i, o.options], t) && i.cancelable) return !1;
        }
        return !0;
      }
      invalidate() {
        mh(this._cache) ||
          ((this._oldCache = this._cache), (this._cache = void 0));
      }
      _descriptors(t) {
        if (this._cache) return this._cache;
        const e = (this._cache = this._createDescriptors(t));
        return this._notifyStateChanges(t), e;
      }
      _createDescriptors(t, e) {
        const n = t && t.config,
          i = _h(n.options && n.options.plugins, {}),
          o = (function (t) {
            const e = [],
              n = Object.keys(Gf.plugins.items);
            for (let t = 0; t < n.length; t++) e.push(Gf.getPlugin(n[t]));
            const i = t.plugins || [];
            for (let t = 0; t < i.length; t++) {
              const n = i[t];
              -1 === e.indexOf(n) && e.push(n);
            }
            return e;
          })(n);
        return !1 !== i || e
          ? (function (t, e, n, i) {
              const o = [],
                s = t.getContext();
              for (let r = 0; r < e.length; r++) {
                const a = e[r],
                  l = Kf(n[a.id], i);
                null !== l &&
                  o.push({ plugin: a, options: Jf(t.config, a, l, s) });
              }
              return o;
            })(t, o, i, e)
          : [];
      }
      _notifyStateChanges(t) {
        const e = this._oldCache || [],
          n = this._cache,
          i = (t, e) =>
            t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
        this._notify(i(e, n), t, "stop"), this._notify(i(n, e), t, "start");
      }
    }
    function Kf(t, e) {
      return e || !1 !== t ? (!0 === t ? {} : t) : null;
    }
    function Jf(t, e, n, i) {
      const o = t.pluginScopeKeys(e),
        s = t.getOptionScopes(n, o);
      return t.createResolver(s, i, [""], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0,
      });
    }
    function Xf(t, e) {
      const n = Yd.datasets[t] || {};
      return (
        ((e.datasets || {})[t] || {}).indexAxis ||
        e.indexAxis ||
        n.indexAxis ||
        "x"
      );
    }
    function Zf(t, e) {
      return "x" === t || "y" === t
        ? t
        : e.axis ||
            ("top" === (n = e.position) || "bottom" === n
              ? "x"
              : "left" === n || "right" === n
              ? "y"
              : void 0) ||
            t.charAt(0).toLowerCase();
      var n;
    }
    function Qf(t) {
      const e = t.options || (t.options = {});
      (e.plugins = _h(e.plugins, {})),
        (e.scales = (function (t, e) {
          const n = Hd[t.type] || { scales: {} },
            i = e.scales || {},
            o = Xf(t.type, e),
            s = Object.create(null),
            r = Object.create(null);
          return (
            Object.keys(i).forEach((t) => {
              const e = i[t];
              if (!yh(e))
                return console.error(
                  `Invalid scale configuration for scale: ${t}`
                );
              if (e._proxy)
                return console.warn(
                  `Ignoring resolver passed as options for scale: ${t}`
                );
              const a = Zf(t, e),
                l = (function (t, e) {
                  return t === e ? "_index_" : "_value_";
                })(a, o),
                c = n.scales || {};
              (s[a] = s[a] || t),
                (r[t] = Dh(Object.create(null), [{ axis: a }, e, c[a], c[l]]));
            }),
            t.data.datasets.forEach((n) => {
              const o = n.type || t.type,
                a = n.indexAxis || Xf(o, e),
                l = (Hd[o] || {}).scales || {};
              Object.keys(l).forEach((t) => {
                const e = (function (t, e) {
                    let n = t;
                    return (
                      "_index_" === t
                        ? (n = e)
                        : "_value_" === t && (n = "x" === e ? "y" : "x"),
                      n
                    );
                  })(t, a),
                  o = n[e + "AxisID"] || s[e] || e;
                (r[o] = r[o] || Object.create(null)),
                  Dh(r[o], [{ axis: e }, i[o], l[t]]);
              });
            }),
            Object.keys(r).forEach((t) => {
              const e = r[t];
              Dh(e, [Yd.scales[e.type], Yd.scale]);
            }),
            r
          );
        })(t, e));
    }
    function tg(t) {
      return (
        ((t = t || {}).datasets = t.datasets || []),
        (t.labels = t.labels || []),
        t
      );
    }
    const eg = new Map(),
      ng = new Set();
    function ig(t, e) {
      let n = eg.get(t);
      return n || ((n = e()), eg.set(t, n), ng.add(n)), n;
    }
    const og = (t, e, n) => {
      const i = Eh(e, n);
      void 0 !== i && t.add(i);
    };
    class sg {
      constructor(t) {
        (this._config = (function (t) {
          return ((t = t || {}).data = tg(t.data)), Qf(t), t;
        })(t)),
          (this._scopeCache = new Map()),
          (this._resolverCache = new Map());
      }
      get platform() {
        return this._config.platform;
      }
      get type() {
        return this._config.type;
      }
      set type(t) {
        this._config.type = t;
      }
      get data() {
        return this._config.data;
      }
      set data(t) {
        this._config.data = tg(t);
      }
      get options() {
        return this._config.options;
      }
      set options(t) {
        this._config.options = t;
      }
      get plugins() {
        return this._config.plugins;
      }
      update() {
        const t = this._config;
        this.clearCache(), Qf(t);
      }
      clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear();
      }
      datasetScopeKeys(t) {
        return ig(t, () => [[`datasets.${t}`, ""]]);
      }
      datasetAnimationScopeKeys(t, e) {
        return ig(`${t}.transition.${e}`, () => [
          [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
          [`datasets.${t}`, ""],
        ]);
      }
      datasetElementScopeKeys(t, e) {
        return ig(`${t}-${e}`, () => [
          [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""],
        ]);
      }
      pluginScopeKeys(t) {
        const e = t.id;
        return ig(`${this.type}-plugin-${e}`, () => [
          [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
        ]);
      }
      _cachedScopes(t, e) {
        const n = this._scopeCache;
        let i = n.get(t);
        return (i && !e) || ((i = new Map()), n.set(t, i)), i;
      }
      getOptionScopes(t, e, n) {
        const { options: i, type: o } = this,
          s = this._cachedScopes(t, n),
          r = s.get(e);
        if (r) return r;
        const a = new Set();
        e.forEach((e) => {
          t && (a.add(t), e.forEach((e) => og(a, t, e))),
            e.forEach((t) => og(a, i, t)),
            e.forEach((t) => og(a, Hd[o] || {}, t)),
            e.forEach((t) => og(a, Yd, t)),
            e.forEach((t) => og(a, Ud, t));
        });
        const l = Array.from(a);
        return (
          0 === l.length && l.push(Object.create(null)),
          ng.has(e) && s.set(e, l),
          l
        );
      }
      chartOptionScopes() {
        const { options: t, type: e } = this;
        return [t, Hd[e] || {}, Yd.datasets[e] || {}, { type: e }, Yd, Ud];
      }
      resolveNamedOptions(t, e, n, i = [""]) {
        const o = { $shared: !0 },
          { resolver: s, subPrefixes: r } = rg(this._resolverCache, t, i);
        let a = s;
        (function (t, e) {
          const { isScriptable: n, isIndexable: i } = Au(t);
          for (const o of e) {
            const e = n(o),
              s = i(o),
              r = (s || e) && t[o];
            if ((e && (Vh(r) || ag(r))) || (s && bh(r))) return !0;
          }
          return !1;
        })(s, e) &&
          ((o.$shared = !1),
          (a = Tu(s, (n = Vh(n) ? n() : n), this.createResolver(t, n, r))));
        for (const t of e) o[t] = a[t];
        return o;
      }
      createResolver(t, e, n = [""], i) {
        const { resolver: o } = rg(this._resolverCache, t, n);
        return yh(e) ? Tu(o, e, void 0, i) : o;
      }
    }
    function rg(t, e, n) {
      let i = t.get(e);
      i || ((i = new Map()), t.set(e, i));
      const o = n.join();
      let s = i.get(o);
      return (
        s ||
          ((s = {
            resolver: Cu(e, n),
            subPrefixes: n.filter((t) => !t.toLowerCase().includes("hover")),
          }),
          i.set(o, s)),
        s
      );
    }
    const ag = (t) =>
        yh(t) &&
        Object.getOwnPropertyNames(t).reduce((e, n) => e || Vh(t[n]), !1),
      lg = ["top", "bottom", "left", "right", "chartArea"];
    function cg(t, e) {
      return (
        "top" === t || "bottom" === t || (-1 === lg.indexOf(t) && "x" === e)
      );
    }
    function hg(t, e) {
      return function (n, i) {
        return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
      };
    }
    function dg(t) {
      const e = t.chart,
        n = e.options.animation;
      e.notifyPlugins("afterRender"), kh(n && n.onComplete, [t], e);
    }
    function ug(t) {
      const e = t.chart,
        n = e.options.animation;
      kh(n && n.onProgress, [t], e);
    }
    function pg(t) {
      return (
        Hu() && "string" == typeof t
          ? (t = document.getElementById(t))
          : t && t.length && (t = t[0]),
        t && t.canvas && (t = t.canvas),
        t
      );
    }
    const fg = {},
      gg = (t) => {
        const e = pg(t);
        return Object.values(fg)
          .filter((t) => t.canvas === e)
          .pop();
      };
    function mg(t, e, n) {
      const i = Object.keys(t);
      for (const o of i) {
        const i = +o;
        if (i >= e) {
          const s = t[o];
          delete t[o], (n > 0 || i > e) && (t[i + n] = s);
        }
      }
    }
    class bg {
      constructor(t, e) {
        const n = (this.config = new sg(e)),
          i = pg(t),
          o = gg(i);
        if (o)
          throw new Error(
            "Canvas is already in use. Chart with ID '" +
              o.id +
              "' must be destroyed before the canvas can be reused."
          );
        const s = n.createResolver(n.chartOptionScopes(), this.getContext());
        (this.platform = new (n.platform ||
          (function (t) {
            return !Hu() ||
              ("undefined" != typeof OffscreenCanvas &&
                t instanceof OffscreenCanvas)
              ? xf
              : Lf;
          })(i))()),
          this.platform.updateConfig(n);
        const r = this.platform.acquireContext(i, s.aspectRatio),
          a = r && r.canvas,
          l = a && a.height,
          c = a && a.width;
        (this.id = gh()),
          (this.ctx = r),
          (this.canvas = a),
          (this.width = c),
          (this.height = l),
          (this._options = s),
          (this._aspectRatio = this.aspectRatio),
          (this._layers = []),
          (this._metasets = []),
          (this._stacks = void 0),
          (this.boxes = []),
          (this.currentDevicePixelRatio = void 0),
          (this.chartArea = void 0),
          (this._active = []),
          (this._lastEvent = void 0),
          (this._listeners = {}),
          (this._responsiveListeners = void 0),
          (this._sortedMetasets = []),
          (this.scales = {}),
          (this._plugins = new Yf()),
          (this.$proxies = {}),
          (this._hiddenIndices = {}),
          (this.attached = !1),
          (this._animationsDisabled = void 0),
          (this.$context = void 0),
          (this._doResize = (function (t, e) {
            let n;
            return function (...i) {
              return (
                e
                  ? (clearTimeout(n), (n = setTimeout(t, e, i)))
                  : t.apply(this, i),
                e
              );
            };
          })((t) => this.update(t), s.resizeDelay || 0)),
          (this._dataChanges = []),
          (fg[this.id] = this),
          r && a
            ? (gp.listen(this, "complete", dg),
              gp.listen(this, "progress", ug),
              this._initialize(),
              this.attached && this.update())
            : console.error(
                "Failed to create chart: can't acquire context from the given item"
              );
      }
      get aspectRatio() {
        const {
          options: { aspectRatio: t, maintainAspectRatio: e },
          width: n,
          height: i,
          _aspectRatio: o,
        } = this;
        return mh(t) ? (e && o ? o : i ? n / i : null) : t;
      }
      get data() {
        return this.config.data;
      }
      set data(t) {
        this.config.data = t;
      }
      get options() {
        return this._options;
      }
      set options(t) {
        this.config.options = t;
      }
      _initialize() {
        return (
          this.notifyPlugins("beforeInit"),
          this.options.responsive
            ? this.resize()
            : Zu(this, this.options.devicePixelRatio),
          this.bindEvents(),
          this.notifyPlugins("afterInit"),
          this
        );
      }
      clear() {
        return Zd(this.canvas, this.ctx), this;
      }
      stop() {
        return gp.stop(this), this;
      }
      resize(t, e) {
        gp.running(this)
          ? (this._resizeBeforeDraw = { width: t, height: e })
          : this._resize(t, e);
      }
      _resize(t, e) {
        const n = this.options,
          i = this.canvas,
          o = n.maintainAspectRatio && this.aspectRatio,
          s = this.platform.getMaximumSize(i, t, e, o),
          r = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
          a = this.width ? "resize" : "attach";
        (this.width = s.width),
          (this.height = s.height),
          (this._aspectRatio = this.aspectRatio),
          Zu(this, r, !0) &&
            (this.notifyPlugins("resize", { size: s }),
            kh(n.onResize, [this, s], this),
            this.attached && this._doResize(a) && this.render());
      }
      ensureScalesHaveIDs() {
        Sh(this.options.scales || {}, (t, e) => {
          t.id = e;
        });
      }
      buildOrUpdateScales() {
        const t = this.options,
          e = t.scales,
          n = this.scales,
          i = Object.keys(n).reduce((t, e) => ((t[e] = !1), t), {});
        let o = [];
        e &&
          (o = o.concat(
            Object.keys(e).map((t) => {
              const n = e[t],
                i = Zf(t, n),
                o = "r" === i,
                s = "x" === i;
              return {
                options: n,
                dposition: o ? "chartArea" : s ? "bottom" : "left",
                dtype: o ? "radialLinear" : s ? "category" : "linear",
              };
            })
          )),
          Sh(o, (e) => {
            const o = e.options,
              s = o.id,
              r = Zf(s, o),
              a = _h(o.type, e.dtype);
            (void 0 !== o.position && cg(o.position, r) === cg(e.dposition)) ||
              (o.position = e.dposition),
              (i[s] = !0);
            let l = null;
            s in n && n[s].type === a
              ? (l = n[s])
              : ((l = new (Gf.getScale(a))({
                  id: s,
                  type: a,
                  ctx: this.ctx,
                  chart: this,
                })),
                (n[l.id] = l)),
              l.init(o, t);
          }),
          Sh(i, (t, e) => {
            t || delete n[e];
          }),
          Sh(n, (t) => {
            yf.configure(this, t, t.options), yf.addBox(this, t);
          });
      }
      _updateMetasets() {
        const t = this._metasets,
          e = this.data.datasets.length,
          n = t.length;
        if ((t.sort((t, e) => t.index - e.index), n > e)) {
          for (let t = e; t < n; ++t) this._destroyDatasetMeta(t);
          t.splice(e, n - e);
        }
        this._sortedMetasets = t.slice(0).sort(hg("order", "index"));
      }
      _removeUnreferencedMetasets() {
        const {
          _metasets: t,
          data: { datasets: e },
        } = this;
        t.length > e.length && delete this._stacks,
          t.forEach((t, n) => {
            0 === e.filter((e) => e === t._dataset).length &&
              this._destroyDatasetMeta(n);
          });
      }
      buildOrUpdateControllers() {
        const t = [],
          e = this.data.datasets;
        let n, i;
        for (
          this._removeUnreferencedMetasets(), n = 0, i = e.length;
          n < i;
          n++
        ) {
          const i = e[n];
          let o = this.getDatasetMeta(n);
          const s = i.type || this.config.type;
          if (
            (o.type &&
              o.type !== s &&
              (this._destroyDatasetMeta(n), (o = this.getDatasetMeta(n))),
            (o.type = s),
            (o.indexAxis = i.indexAxis || Xf(s, this.options)),
            (o.order = i.order || 0),
            (o.index = n),
            (o.label = "" + i.label),
            (o.visible = this.isDatasetVisible(n)),
            o.controller)
          )
            o.controller.updateIndex(n), o.controller.linkScales();
          else {
            const e = Gf.getController(s),
              { datasetElementType: i, dataElementType: r } = Yd.datasets[s];
            Object.assign(e.prototype, {
              dataElementType: Gf.getElement(r),
              datasetElementType: i && Gf.getElement(i),
            }),
              (o.controller = new e(this, n)),
              t.push(o.controller);
          }
        }
        return this._updateMetasets(), t;
      }
      _resetElements() {
        Sh(
          this.data.datasets,
          (t, e) => {
            this.getDatasetMeta(e).controller.reset();
          },
          this
        );
      }
      reset() {
        this._resetElements(), this.notifyPlugins("reset");
      }
      update(t) {
        const e = this.config;
        e.update();
        const n = (this._options = e.createResolver(
            e.chartOptionScopes(),
            this.getContext()
          )),
          i = (this._animationsDisabled = !n.animation);
        if (
          (this._updateScales(),
          this._checkEventBindings(),
          this._updateHiddenIndices(),
          this._plugins.invalidate(),
          !1 ===
            this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))
        )
          return;
        const o = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let s = 0;
        for (let t = 0, e = this.data.datasets.length; t < e; t++) {
          const { controller: e } = this.getDatasetMeta(t),
            n = !i && -1 === o.indexOf(e);
          e.buildOrUpdateElements(n), (s = Math.max(+e.getMaxOverflow(), s));
        }
        (s = this._minPadding = n.layout.autoPadding ? s : 0),
          this._updateLayout(s),
          i ||
            Sh(o, (t) => {
              t.reset();
            }),
          this._updateDatasets(t),
          this.notifyPlugins("afterUpdate", { mode: t }),
          this._layers.sort(hg("z", "_idx"));
        const { _active: r, _lastEvent: a } = this;
        a
          ? this._eventHandler(a, !0)
          : r.length && this._updateHoverStyles(r, r, !0),
          this.render();
      }
      _updateScales() {
        Sh(this.scales, (t) => {
          yf.removeBox(this, t);
        }),
          this.ensureScalesHaveIDs(),
          this.buildOrUpdateScales();
      }
      _checkEventBindings() {
        const t = this.options,
          e = new Set(Object.keys(this._listeners)),
          n = new Set(t.events);
        (Fh(e, n) && !!this._responsiveListeners === t.responsive) ||
          (this.unbindEvents(), this.bindEvents());
      }
      _updateHiddenIndices() {
        const { _hiddenIndices: t } = this,
          e = this._getUniformDataChanges() || [];
        for (const { method: n, start: i, count: o } of e)
          mg(t, i, "_removeElements" === n ? -o : o);
      }
      _getUniformDataChanges() {
        const t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];
        const e = this.data.datasets.length,
          n = (e) =>
            new Set(
              t
                .filter((t) => t[0] === e)
                .map((t, e) => e + "," + t.splice(1).join(","))
            ),
          i = n(0);
        for (let t = 1; t < e; t++) if (!Fh(i, n(t))) return;
        return Array.from(i)
          .map((t) => t.split(","))
          .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
      }
      _updateLayout(t) {
        if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 }))
          return;
        yf.update(this, this.width, this.height, t);
        const e = this.chartArea,
          n = e.width <= 0 || e.height <= 0;
        (this._layers = []),
          Sh(
            this.boxes,
            (t) => {
              (n && "chartArea" === t.position) ||
                (t.configure && t.configure(),
                this._layers.push(...t._layers()));
            },
            this
          ),
          this._layers.forEach((t, e) => {
            t._idx = e;
          }),
          this.notifyPlugins("afterLayout");
      }
      _updateDatasets(t) {
        if (
          !1 !==
          this.notifyPlugins("beforeDatasetsUpdate", {
            mode: t,
            cancelable: !0,
          })
        ) {
          for (let t = 0, e = this.data.datasets.length; t < e; ++t)
            this.getDatasetMeta(t).controller.configure();
          for (let e = 0, n = this.data.datasets.length; e < n; ++e)
            this._updateDataset(e, Vh(t) ? t({ datasetIndex: e }) : t);
          this.notifyPlugins("afterDatasetsUpdate", { mode: t });
        }
      }
      _updateDataset(t, e) {
        const n = this.getDatasetMeta(t),
          i = { meta: n, index: t, mode: e, cancelable: !0 };
        !1 !== this.notifyPlugins("beforeDatasetUpdate", i) &&
          (n.controller._update(e),
          (i.cancelable = !1),
          this.notifyPlugins("afterDatasetUpdate", i));
      }
      render() {
        !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
          (gp.has(this)
            ? this.attached && !gp.running(this) && gp.start(this)
            : (this.draw(), dg({ chart: this })));
      }
      draw() {
        let t;
        if (this._resizeBeforeDraw) {
          const { width: t, height: e } = this._resizeBeforeDraw;
          this._resize(t, e), (this._resizeBeforeDraw = null);
        }
        if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
        if (!1 === this.notifyPlugins("beforeDraw", { cancelable: !0 })) return;
        const e = this._layers;
        for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
        for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
        this.notifyPlugins("afterDraw");
      }
      _getSortedDatasetMetas(t) {
        const e = this._sortedMetasets,
          n = [];
        let i, o;
        for (i = 0, o = e.length; i < o; ++i) {
          const o = e[i];
          (t && !o.visible) || n.push(o);
        }
        return n;
      }
      getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
      }
      _drawDatasets() {
        if (!1 === this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }))
          return;
        const t = this.getSortedVisibleDatasetMetas();
        for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
        this.notifyPlugins("afterDatasetsDraw");
      }
      _drawDataset(t) {
        const e = this.ctx,
          n = t._clip,
          i = !n.disabled,
          o = this.chartArea,
          s = { meta: t, index: t.index, cancelable: !0 };
        !1 !== this.notifyPlugins("beforeDatasetDraw", s) &&
          (i &&
            eu(e, {
              left: !1 === n.left ? 0 : o.left - n.left,
              right: !1 === n.right ? this.width : o.right + n.right,
              top: !1 === n.top ? 0 : o.top - n.top,
              bottom: !1 === n.bottom ? this.height : o.bottom + n.bottom,
            }),
          t.controller.draw(),
          i && nu(e),
          (s.cancelable = !1),
          this.notifyPlugins("afterDatasetDraw", s));
      }
      getElementsAtEventForMode(t, e, n, i) {
        const o = rf.modes[e];
        return "function" == typeof o ? o(this, t, n, i) : [];
      }
      getDatasetMeta(t) {
        const e = this.data.datasets[t],
          n = this._metasets;
        let i = n.filter((t) => t && t._dataset === e).pop();
        return (
          i ||
            ((i = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null,
              order: (e && e.order) || 0,
              index: t,
              _dataset: e,
              _parsed: [],
              _sorted: !1,
            }),
            n.push(i)),
          i
        );
      }
      getContext() {
        return (
          this.$context ||
          (this.$context = yu(null, { chart: this, type: "chart" }))
        );
      }
      getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
      }
      isDatasetVisible(t) {
        const e = this.data.datasets[t];
        if (!e) return !1;
        const n = this.getDatasetMeta(t);
        return "boolean" == typeof n.hidden ? !n.hidden : !e.hidden;
      }
      setDatasetVisibility(t, e) {
        this.getDatasetMeta(t).hidden = !e;
      }
      toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t];
      }
      getDataVisibility(t) {
        return !this._hiddenIndices[t];
      }
      _updateVisibility(t, e, n) {
        const i = n ? "show" : "hide",
          o = this.getDatasetMeta(t),
          s = o.controller._resolveAnimations(void 0, i);
        Ih(e)
          ? ((o.data[e].hidden = !n), this.update())
          : (this.setDatasetVisibility(t, n),
            s.update(o, { visible: n }),
            this.update((e) => (e.datasetIndex === t ? i : void 0)));
      }
      hide(t, e) {
        this._updateVisibility(t, e, !1);
      }
      show(t, e) {
        this._updateVisibility(t, e, !0);
      }
      _destroyDatasetMeta(t) {
        const e = this._metasets[t];
        e && e.controller && e.controller._destroy(), delete this._metasets[t];
      }
      _stop() {
        let t, e;
        for (
          this.stop(), gp.remove(this), t = 0, e = this.data.datasets.length;
          t < e;
          ++t
        )
          this._destroyDatasetMeta(t);
      }
      destroy() {
        this.notifyPlugins("beforeDestroy");
        const { canvas: t, ctx: e } = this;
        this._stop(),
          this.config.clearCache(),
          t &&
            (this.unbindEvents(),
            Zd(t, e),
            this.platform.releaseContext(e),
            (this.canvas = null),
            (this.ctx = null)),
          this.notifyPlugins("destroy"),
          delete fg[this.id],
          this.notifyPlugins("afterDestroy");
      }
      toBase64Image(...t) {
        return this.canvas.toDataURL(...t);
      }
      bindEvents() {
        this.bindUserEvents(),
          this.options.responsive
            ? this.bindResponsiveEvents()
            : (this.attached = !0);
      }
      bindUserEvents() {
        const t = this._listeners,
          e = this.platform,
          n = (n, i) => {
            e.addEventListener(this, n, i), (t[n] = i);
          },
          i = (t, e, n) => {
            (t.offsetX = e), (t.offsetY = n), this._eventHandler(t);
          };
        Sh(this.options.events, (t) => n(t, i));
      }
      bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const t = this._responsiveListeners,
          e = this.platform,
          n = (n, i) => {
            e.addEventListener(this, n, i), (t[n] = i);
          },
          i = (n, i) => {
            t[n] && (e.removeEventListener(this, n, i), delete t[n]);
          },
          o = (t, e) => {
            this.canvas && this.resize(t, e);
          };
        let s;
        const r = () => {
          i("attach", r),
            (this.attached = !0),
            this.resize(),
            n("resize", o),
            n("detach", s);
        };
        (s = () => {
          (this.attached = !1),
            i("resize", o),
            this._stop(),
            this._resize(0, 0),
            n("attach", r);
        }),
          e.isAttached(this.canvas) ? r() : s();
      }
      unbindEvents() {
        Sh(this._listeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }),
          (this._listeners = {}),
          Sh(this._responsiveListeners, (t, e) => {
            this.platform.removeEventListener(this, e, t);
          }),
          (this._responsiveListeners = void 0);
      }
      updateHoverStyle(t, e, n) {
        const i = n ? "set" : "remove";
        let o, s, r, a;
        for (
          "dataset" === e &&
            ((o = this.getDatasetMeta(t[0].datasetIndex)),
            o.controller["_" + i + "DatasetHoverStyle"]()),
            r = 0,
            a = t.length;
          r < a;
          ++r
        ) {
          s = t[r];
          const e = s && this.getDatasetMeta(s.datasetIndex).controller;
          e && e[i + "HoverStyle"](s.element, s.datasetIndex, s.index);
        }
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(t) {
        const e = this._active || [],
          n = t.map(({ datasetIndex: t, index: e }) => {
            const n = this.getDatasetMeta(t);
            if (!n) throw new Error("No dataset found at index " + t);
            return { datasetIndex: t, element: n.data[e], index: e };
          });
        !Ch(n, e) &&
          ((this._active = n),
          (this._lastEvent = null),
          this._updateHoverStyles(n, e));
      }
      notifyPlugins(t, e, n) {
        return this._plugins.notify(this, t, e, n);
      }
      _updateHoverStyles(t, e, n) {
        const i = this.options.hover,
          o = (t, e) =>
            t.filter(
              (t) =>
                !e.some(
                  (e) =>
                    t.datasetIndex === e.datasetIndex && t.index === e.index
                )
            ),
          s = o(e, t),
          r = n ? t : o(t, e);
        s.length && this.updateHoverStyle(s, i.mode, !1),
          r.length && i.mode && this.updateHoverStyle(r, i.mode, !0);
      }
      _eventHandler(t, e) {
        const n = {
            event: t,
            replay: e,
            cancelable: !0,
            inChartArea: tu(t, this.chartArea, this._minPadding),
          },
          i = (e) =>
            (e.options.events || this.options.events).includes(t.native.type);
        if (!1 === this.notifyPlugins("beforeEvent", n, i)) return;
        const o = this._handleEvent(t, e, n.inChartArea);
        return (
          (n.cancelable = !1),
          this.notifyPlugins("afterEvent", n, i),
          (o || n.changed) && this.render(),
          this
        );
      }
      _handleEvent(t, e, n) {
        const { _active: i = [], options: o } = this,
          s = e,
          r = this._getActiveElements(t, i, n, s),
          a = (function (t) {
            return (
              "mouseup" === t.type ||
              "click" === t.type ||
              "contextmenu" === t.type
            );
          })(t),
          l = (function (t, e, n, i) {
            return n && "mouseout" !== t.type ? (i ? e : t) : null;
          })(t, this._lastEvent, n, a);
        n &&
          ((this._lastEvent = null),
          kh(o.onHover, [t, r, this], this),
          a && kh(o.onClick, [t, r, this], this));
        const c = !Ch(r, i);
        return (
          (c || e) && ((this._active = r), this._updateHoverStyles(r, i, e)),
          (this._lastEvent = l),
          c
        );
      }
      _getActiveElements(t, e, n, i) {
        if ("mouseout" === t.type) return [];
        if (!n) return e;
        const o = this.options.hover;
        return this.getElementsAtEventForMode(t, o.mode, o, i);
      }
    }
    const yg = () => Sh(bg.instances, (t) => t._plugins.invalidate()),
      vg = !0;
    function xg(t, e, n) {
      const {
        startAngle: i,
        pixelMargin: o,
        x: s,
        y: r,
        outerRadius: a,
        innerRadius: l,
      } = e;
      let c = o / a;
      t.beginPath(),
        t.arc(s, r, a, i - c, n + c),
        l > o
          ? ((c = o / l), t.arc(s, r, l, n + c, i - c, !0))
          : t.arc(s, r, o, n + Wh, i - Wh),
        t.closePath(),
        t.clip();
    }
    function _g(t, e, n, i) {
      return { x: n + t * Math.cos(e), y: i + t * Math.sin(e) };
    }
    function wg(t, e, n, i, o) {
      const { x: s, y: r, startAngle: a, pixelMargin: l, innerRadius: c } = e,
        h = Math.max(e.outerRadius + i + n - l, 0),
        d = c > 0 ? c + i + n + l : 0;
      let u = 0;
      const p = o - a;
      if (i) {
        const t = ((c > 0 ? c - i : 0) + (h > 0 ? h - i : 0)) / 2;
        u = (p - (0 !== t ? (p * t) / (t + i) : p)) / 2;
      }
      const f = (p - Math.max(0.001, p * h - n / Nh) / h) / 2,
        g = a + f + u,
        m = o - f - u,
        {
          outerStart: b,
          outerEnd: y,
          innerStart: v,
          innerEnd: x,
        } = (function (t, e, n, i) {
          const o = uu(t.options.borderRadius, [
              "outerStart",
              "outerEnd",
              "innerStart",
              "innerEnd",
            ]),
            s = (n - e) / 2,
            r = Math.min(s, (i * e) / 2),
            a = (t) => {
              const e = ((n - Math.min(s, t)) * i) / 2;
              return rd(t, 0, Math.min(s, e));
            };
          return {
            outerStart: a(o.outerStart),
            outerEnd: a(o.outerEnd),
            innerStart: rd(o.innerStart, 0, r),
            innerEnd: rd(o.innerEnd, 0, r),
          };
        })(e, d, h, m - g),
        _ = h - b,
        w = h - y,
        k = g + b / _,
        S = m - y / w,
        C = d + v,
        T = d + x,
        A = g + v / C,
        M = m - x / T;
      if ((t.beginPath(), t.arc(s, r, h, k, S), y > 0)) {
        const e = _g(w, S, s, r);
        t.arc(e.x, e.y, y, S, m + Wh);
      }
      const P = _g(T, m, s, r);
      if ((t.lineTo(P.x, P.y), x > 0)) {
        const e = _g(T, M, s, r);
        t.arc(e.x, e.y, x, m + Wh, M + Math.PI);
      }
      if ((t.arc(s, r, d, m - x / d, g + v / d, !0), v > 0)) {
        const e = _g(C, A, s, r);
        t.arc(e.x, e.y, v, A + Math.PI, g - Wh);
      }
      const D = _g(_, g, s, r);
      if ((t.lineTo(D.x, D.y), b > 0)) {
        const e = _g(_, k, s, r);
        t.arc(e.x, e.y, b, g - Wh, k);
      }
      t.closePath();
    }
    Object.defineProperties(bg, {
      defaults: { enumerable: vg, value: Yd },
      instances: { enumerable: vg, value: fg },
      overrides: { enumerable: vg, value: Hd },
      registry: { enumerable: vg, value: Gf },
      version: { enumerable: vg, value: "3.7.1" },
      getChart: { enumerable: vg, value: gg },
      register: {
        enumerable: vg,
        value: (...t) => {
          Gf.add(...t), yg();
        },
      },
      unregister: {
        enumerable: vg,
        value: (...t) => {
          Gf.remove(...t), yg();
        },
      },
    });
    class kg extends If {
      constructor(t) {
        super(),
          (this.options = void 0),
          (this.circumference = void 0),
          (this.startAngle = void 0),
          (this.endAngle = void 0),
          (this.innerRadius = void 0),
          (this.outerRadius = void 0),
          (this.pixelMargin = 0),
          (this.fullCircles = 0),
          t && Object.assign(this, t);
      }
      inRange(t, e, n) {
        const i = this.getProps(["x", "y"], n),
          { angle: o, distance: s } = ed(i, { x: t, y: e }),
          {
            startAngle: r,
            endAngle: a,
            innerRadius: l,
            outerRadius: c,
            circumference: h,
          } = this.getProps(
            [
              "startAngle",
              "endAngle",
              "innerRadius",
              "outerRadius",
              "circumference",
            ],
            n
          ),
          d = this.options.spacing / 2,
          u = _h(h, a - r) >= Bh || sd(o, r, a),
          p = ad(s, l + d, c + d);
        return u && p;
      }
      getCenterPoint(t) {
        const {
            x: e,
            y: n,
            startAngle: i,
            endAngle: o,
            innerRadius: s,
            outerRadius: r,
          } = this.getProps(
            [
              "x",
              "y",
              "startAngle",
              "endAngle",
              "innerRadius",
              "outerRadius",
              "circumference",
            ],
            t
          ),
          { offset: a, spacing: l } = this.options,
          c = (i + o) / 2,
          h = (s + r + l + a) / 2;
        return { x: e + Math.cos(c) * h, y: n + Math.sin(c) * h };
      }
      tooltipPosition(t) {
        return this.getCenterPoint(t);
      }
      draw(t) {
        const { options: e, circumference: n } = this,
          i = (e.offset || 0) / 2,
          o = (e.spacing || 0) / 2;
        if (
          ((this.pixelMargin = "inner" === e.borderAlign ? 0.33 : 0),
          (this.fullCircles = n > Bh ? Math.floor(n / Bh) : 0),
          0 === n || this.innerRadius < 0 || this.outerRadius < 0)
        )
          return;
        t.save();
        let s = 0;
        if (i) {
          s = i / 2;
          const e = (this.startAngle + this.endAngle) / 2;
          t.translate(Math.cos(e) * s, Math.sin(e) * s),
            this.circumference >= Nh && (s = i);
        }
        (t.fillStyle = e.backgroundColor), (t.strokeStyle = e.borderColor);
        const r = (function (t, e, n, i) {
          const { fullCircles: o, startAngle: s, circumference: r } = e;
          let a = e.endAngle;
          if (o) {
            wg(t, e, n, i, s + Bh);
            for (let e = 0; e < o; ++e) t.fill();
            isNaN(r) || ((a = s + (r % Bh)), r % Bh == 0 && (a += Bh));
          }
          return wg(t, e, n, i, a), t.fill(), a;
        })(t, this, s, o);
        (function (t, e, n, i, o) {
          const { options: s } = e,
            { borderWidth: r, borderJoinStyle: a } = s,
            l = "inner" === s.borderAlign;
          r &&
            (l
              ? ((t.lineWidth = 2 * r), (t.lineJoin = a || "round"))
              : ((t.lineWidth = r), (t.lineJoin = a || "bevel")),
            e.fullCircles &&
              (function (t, e, n) {
                const {
                    x: i,
                    y: o,
                    startAngle: s,
                    pixelMargin: r,
                    fullCircles: a,
                  } = e,
                  l = Math.max(e.outerRadius - r, 0),
                  c = e.innerRadius + r;
                let h;
                for (
                  n && xg(t, e, s + Bh),
                    t.beginPath(),
                    t.arc(i, o, c, s + Bh, s, !0),
                    h = 0;
                  h < a;
                  ++h
                )
                  t.stroke();
                for (
                  t.beginPath(), t.arc(i, o, l, s, s + Bh), h = 0;
                  h < a;
                  ++h
                )
                  t.stroke();
              })(t, e, l),
            l && xg(t, e, o),
            wg(t, e, n, i, o),
            t.stroke());
        })(t, this, s, o, r),
          t.restore();
      }
    }
    function Sg(t, e, n = e) {
      (t.lineCap = _h(n.borderCapStyle, e.borderCapStyle)),
        t.setLineDash(_h(n.borderDash, e.borderDash)),
        (t.lineDashOffset = _h(n.borderDashOffset, e.borderDashOffset)),
        (t.lineJoin = _h(n.borderJoinStyle, e.borderJoinStyle)),
        (t.lineWidth = _h(n.borderWidth, e.borderWidth)),
        (t.strokeStyle = _h(n.borderColor, e.borderColor));
    }
    function Cg(t, e, n) {
      t.lineTo(n.x, n.y);
    }
    function Tg(t, e, n = {}) {
      const i = t.length,
        { start: o = 0, end: s = i - 1 } = n,
        { start: r, end: a } = e,
        l = Math.max(o, r),
        c = Math.min(s, a),
        h = (o < r && s < r) || (o > a && s > a);
      return {
        count: i,
        start: l,
        loop: e.loop,
        ilen: c < l && !h ? i + c - l : c - l,
      };
    }
    function Ag(t, e, n, i) {
      const { points: o, options: s } = e,
        { count: r, start: a, loop: l, ilen: c } = Tg(o, n, i),
        h = (function (t) {
          return t.stepped
            ? iu
            : t.tension || "monotone" === t.cubicInterpolationMode
            ? ou
            : Cg;
        })(s);
      let d,
        u,
        p,
        { move: f = !0, reverse: g } = i || {};
      for (d = 0; d <= c; ++d)
        (u = o[(a + (g ? c - d : d)) % r]),
          u.skip ||
            (f ? (t.moveTo(u.x, u.y), (f = !1)) : h(t, p, u, g, s.stepped),
            (p = u));
      return (
        l && ((u = o[(a + (g ? c : 0)) % r]), h(t, p, u, g, s.stepped)), !!l
      );
    }
    function Mg(t, e, n, i) {
      const o = e.points,
        { count: s, start: r, ilen: a } = Tg(o, n, i),
        { move: l = !0, reverse: c } = i || {};
      let h,
        d,
        u,
        p,
        f,
        g,
        m = 0,
        b = 0;
      const y = (t) => (r + (c ? a - t : t)) % s,
        v = () => {
          p !== f && (t.lineTo(m, f), t.lineTo(m, p), t.lineTo(m, g));
        };
      for (l && ((d = o[y(0)]), t.moveTo(d.x, d.y)), h = 0; h <= a; ++h) {
        if (((d = o[y(h)]), d.skip)) continue;
        const e = d.x,
          n = d.y,
          i = 0 | e;
        i === u
          ? (n < p ? (p = n) : n > f && (f = n), (m = (b * m + e) / ++b))
          : (v(), t.lineTo(e, n), (u = i), (b = 0), (p = f = n)),
          (g = n);
      }
      v();
    }
    function Pg(t) {
      const e = t.options,
        n = e.borderDash && e.borderDash.length;
      return t._decimated ||
        t._loop ||
        e.tension ||
        "monotone" === e.cubicInterpolationMode ||
        e.stepped ||
        n
        ? Ag
        : Mg;
    }
    (kg.id = "arc"),
      (kg.defaults = {
        borderAlign: "center",
        borderColor: "#fff",
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
      }),
      (kg.defaultRoutes = { backgroundColor: "backgroundColor" });
    const Dg = "function" == typeof Path2D;
    class Rg extends If {
      constructor(t) {
        super(),
          (this.animated = !0),
          (this.options = void 0),
          (this._chart = void 0),
          (this._loop = void 0),
          (this._fullLoop = void 0),
          (this._path = void 0),
          (this._points = void 0),
          (this._segments = void 0),
          (this._decimated = !1),
          (this._pointsUpdated = !1),
          (this._datasetIndex = void 0),
          t && Object.assign(this, t);
      }
      updateControlPoints(t, e) {
        const n = this.options;
        if (
          (n.tension || "monotone" === n.cubicInterpolationMode) &&
          !n.stepped &&
          !this._pointsUpdated
        ) {
          const i = n.spanGaps ? this._loop : this._fullLoop;
          Wu(this._points, n, t, i, e), (this._pointsUpdated = !0);
        }
      }
      set points(t) {
        (this._points = t),
          delete this._segments,
          delete this._path,
          (this._pointsUpdated = !1);
      }
      get points() {
        return this._points;
      }
      get segments() {
        return (
          this._segments ||
          (this._segments = (function (t, e) {
            const n = t.points,
              i = t.options.spanGaps,
              o = n.length;
            if (!o) return [];
            const s = !!t._loop,
              { start: r, end: a } = (function (t, e, n, i) {
                let o = 0,
                  s = e - 1;
                if (n && !i) for (; o < e && !t[o].skip; ) o++;
                for (; o < e && t[o].skip; ) o++;
                for (o %= e, n && (s += o); s > o && t[s % e].skip; ) s--;
                return (s %= e), { start: o, end: s };
              })(n, o, s, i);
            return (function (t, e, n, i) {
              return i && i.setContext && n
                ? (function (t, e, n, i) {
                    const o = t._chart.getContext(),
                      s = pp(t.options),
                      {
                        _datasetIndex: r,
                        options: { spanGaps: a },
                      } = t,
                      l = n.length,
                      c = [];
                    let h = s,
                      d = e[0].start,
                      u = d;
                    function p(t, e, i, o) {
                      const s = a ? -1 : 1;
                      if (t !== e) {
                        for (t += l; n[t % l].skip; ) t -= s;
                        for (; n[e % l].skip; ) e += s;
                        t % l != e % l &&
                          (c.push({
                            start: t % l,
                            end: e % l,
                            loop: i,
                            style: o,
                          }),
                          (h = o),
                          (d = e % l));
                      }
                    }
                    for (const t of e) {
                      d = a ? d : t.start;
                      let e,
                        s = n[d % l];
                      for (u = d + 1; u <= t.end; u++) {
                        const a = n[u % l];
                        (e = pp(
                          i.setContext(
                            yu(o, {
                              type: "segment",
                              p0: s,
                              p1: a,
                              p0DataIndex: (u - 1) % l,
                              p1DataIndex: u % l,
                              datasetIndex: r,
                            })
                          )
                        )),
                          fp(e, h) && p(d, u - 1, t.loop, h),
                          (s = a),
                          (h = e);
                      }
                      d < u - 1 && p(d, u - 1, t.loop, h);
                    }
                    return c;
                  })(t, e, n, i)
                : e;
            })(
              t,
              !0 === i
                ? [{ start: r, end: a, loop: s }]
                : (function (t, e, n, i) {
                    const o = t.length,
                      s = [];
                    let r,
                      a = e,
                      l = t[e];
                    for (r = e + 1; r <= n; ++r) {
                      const n = t[r % o];
                      n.skip || n.stop
                        ? l.skip ||
                          ((i = !1),
                          s.push({ start: e % o, end: (r - 1) % o, loop: i }),
                          (e = a = n.stop ? r : null))
                        : ((a = r), l.skip && (e = r)),
                        (l = n);
                    }
                    return (
                      null !== a &&
                        s.push({ start: e % o, end: a % o, loop: i }),
                      s
                    );
                  })(
                    n,
                    r,
                    a < r ? a + o : a,
                    !!t._fullLoop && 0 === r && a === o - 1
                  ),
              n,
              e
            );
          })(this, this.options.segment))
        );
      }
      first() {
        const t = this.segments,
          e = this.points;
        return t.length && e[t[0].start];
      }
      last() {
        const t = this.segments,
          e = this.points,
          n = t.length;
        return n && e[t[n - 1].end];
      }
      interpolate(t, e) {
        const n = this.options,
          i = t[e],
          o = this.points,
          s = up(this, { property: e, start: i, end: i });
        if (!s.length) return;
        const r = [],
          a = (function (t) {
            return t.stepped
              ? np
              : t.tension || "monotone" === t.cubicInterpolationMode
              ? ip
              : ep;
          })(n);
        let l, c;
        for (l = 0, c = s.length; l < c; ++l) {
          const { start: c, end: h } = s[l],
            d = o[c],
            u = o[h];
          if (d === u) {
            r.push(d);
            continue;
          }
          const p = a(d, u, Math.abs((i - d[e]) / (u[e] - d[e])), n.stepped);
          (p[e] = t[e]), r.push(p);
        }
        return 1 === r.length ? r[0] : r;
      }
      pathSegment(t, e, n) {
        return Pg(this)(t, this, e, n);
      }
      path(t, e, n) {
        const i = this.segments,
          o = Pg(this);
        let s = this._loop;
        (e = e || 0), (n = n || this.points.length - e);
        for (const r of i) s &= o(t, this, r, { start: e, end: e + n - 1 });
        return !!s;
      }
      draw(t, e, n, i) {
        const o = this.options || {};
        (this.points || []).length &&
          o.borderWidth &&
          (t.save(),
          (function (t, e, n, i) {
            Dg && !e.options.segment
              ? (function (t, e, n, i) {
                  let o = e._path;
                  o ||
                    ((o = e._path = new Path2D()),
                    e.path(o, n, i) && o.closePath()),
                    Sg(t, e.options),
                    t.stroke(o);
                })(t, e, n, i)
              : (function (t, e, n, i) {
                  const { segments: o, options: s } = e,
                    r = Pg(e);
                  for (const a of o)
                    Sg(t, s, a.style),
                      t.beginPath(),
                      r(t, e, a, { start: n, end: n + i - 1 }) && t.closePath(),
                      t.stroke();
                })(t, e, n, i);
          })(t, this, n, i),
          t.restore()),
          this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
      }
    }
    function Og(t, e, n, i) {
      const o = t.options,
        { [n]: s } = t.getProps([n], i);
      return Math.abs(e - s) < o.radius + o.hitRadius;
    }
    (Rg.id = "line"),
      (Rg.defaults = {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: "default",
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0,
      }),
      (Rg.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      }),
      (Rg.descriptors = {
        _scriptable: !0,
        _indexable: (t) => "borderDash" !== t && "fill" !== t,
      });
    class Eg extends If {
      constructor(t) {
        super(),
          (this.options = void 0),
          (this.parsed = void 0),
          (this.skip = void 0),
          (this.stop = void 0),
          t && Object.assign(this, t);
      }
      inRange(t, e, n) {
        const i = this.options,
          { x: o, y: s } = this.getProps(["x", "y"], n);
        return (
          Math.pow(t - o, 2) + Math.pow(e - s, 2) <
          Math.pow(i.hitRadius + i.radius, 2)
        );
      }
      inXRange(t, e) {
        return Og(this, t, "x", e);
      }
      inYRange(t, e) {
        return Og(this, t, "y", e);
      }
      getCenterPoint(t) {
        const { x: e, y: n } = this.getProps(["x", "y"], t);
        return { x: e, y: n };
      }
      size(t) {
        let e = (t = t || this.options || {}).radius || 0;
        return (
          (e = Math.max(e, (e && t.hoverRadius) || 0)),
          2 * (e + ((e && t.borderWidth) || 0))
        );
      }
      draw(t, e) {
        const n = this.options;
        this.skip ||
          n.radius < 0.1 ||
          !tu(this, e, this.size(n) / 2) ||
          ((t.strokeStyle = n.borderColor),
          (t.lineWidth = n.borderWidth),
          (t.fillStyle = n.backgroundColor),
          Qd(t, n, this.x, this.y));
      }
      getRange() {
        const t = this.options || {};
        return t.radius + t.hitRadius;
      }
    }
    function Lg(t, e) {
      const {
        x: n,
        y: i,
        base: o,
        width: s,
        height: r,
      } = t.getProps(["x", "y", "base", "width", "height"], e);
      let a, l, c, h, d;
      return (
        t.horizontal
          ? ((d = r / 2),
            (a = Math.min(n, o)),
            (l = Math.max(n, o)),
            (c = i - d),
            (h = i + d))
          : ((d = s / 2),
            (a = n - d),
            (l = n + d),
            (c = Math.min(i, o)),
            (h = Math.max(i, o))),
        { left: a, top: c, right: l, bottom: h }
      );
    }
    function Ig(t, e, n, i) {
      return t ? 0 : rd(e, n, i);
    }
    function Vg(t, e, n, i) {
      const o = null === e,
        s = null === n,
        r = t && !(o && s) && Lg(t, i);
      return (
        r && (o || ad(e, r.left, r.right)) && (s || ad(n, r.top, r.bottom))
      );
    }
    function Fg(t, e) {
      t.rect(e.x, e.y, e.w, e.h);
    }
    function Ng(t, e, n = {}) {
      const i = t.x !== n.x ? -e : 0,
        o = t.y !== n.y ? -e : 0,
        s = (t.x + t.w !== n.x + n.w ? e : 0) - i,
        r = (t.y + t.h !== n.y + n.h ? e : 0) - o;
      return {
        x: t.x + i,
        y: t.y + o,
        w: t.w + s,
        h: t.h + r,
        radius: t.radius,
      };
    }
    (Eg.id = "point"),
      (Eg.defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0,
      }),
      (Eg.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      });
    class Bg extends If {
      constructor(t) {
        super(),
          (this.options = void 0),
          (this.horizontal = void 0),
          (this.base = void 0),
          (this.width = void 0),
          (this.height = void 0),
          (this.inflateAmount = void 0),
          t && Object.assign(this, t);
      }
      draw(t) {
        const {
            inflateAmount: e,
            options: { borderColor: n, backgroundColor: i },
          } = this,
          { inner: o, outer: s } = (function (t) {
            const e = Lg(t),
              n = e.right - e.left,
              i = e.bottom - e.top,
              o = (function (t, e, n) {
                const i = t.options.borderWidth,
                  o = t.borderSkipped,
                  s = pu(i);
                return {
                  t: Ig(o.top, s.top, 0, n),
                  r: Ig(o.right, s.right, 0, e),
                  b: Ig(o.bottom, s.bottom, 0, n),
                  l: Ig(o.left, s.left, 0, e),
                };
              })(t, n / 2, i / 2),
              s = (function (t, e, n) {
                const { enableBorderRadius: i } = t.getProps([
                    "enableBorderRadius",
                  ]),
                  o = t.options.borderRadius,
                  s = fu(o),
                  r = Math.min(e, n),
                  a = t.borderSkipped,
                  l = i || yh(o);
                return {
                  topLeft: Ig(!l || a.top || a.left, s.topLeft, 0, r),
                  topRight: Ig(!l || a.top || a.right, s.topRight, 0, r),
                  bottomLeft: Ig(!l || a.bottom || a.left, s.bottomLeft, 0, r),
                  bottomRight: Ig(
                    !l || a.bottom || a.right,
                    s.bottomRight,
                    0,
                    r
                  ),
                };
              })(t, n / 2, i / 2);
            return {
              outer: { x: e.left, y: e.top, w: n, h: i, radius: s },
              inner: {
                x: e.left + o.l,
                y: e.top + o.t,
                w: n - o.l - o.r,
                h: i - o.t - o.b,
                radius: {
                  topLeft: Math.max(0, s.topLeft - Math.max(o.t, o.l)),
                  topRight: Math.max(0, s.topRight - Math.max(o.t, o.r)),
                  bottomLeft: Math.max(0, s.bottomLeft - Math.max(o.b, o.l)),
                  bottomRight: Math.max(0, s.bottomRight - Math.max(o.b, o.r)),
                },
              },
            };
          })(this),
          r =
            (a = s.radius).topLeft ||
            a.topRight ||
            a.bottomLeft ||
            a.bottomRight
              ? au
              : Fg;
        var a;
        t.save(),
          (s.w === o.w && s.h === o.h) ||
            (t.beginPath(),
            r(t, Ng(s, e, o)),
            t.clip(),
            r(t, Ng(o, -e, s)),
            (t.fillStyle = n),
            t.fill("evenodd")),
          t.beginPath(),
          r(t, Ng(o, e)),
          (t.fillStyle = i),
          t.fill(),
          t.restore();
      }
      inRange(t, e, n) {
        return Vg(this, t, e, n);
      }
      inXRange(t, e) {
        return Vg(this, t, null, e);
      }
      inYRange(t, e) {
        return Vg(this, null, t, e);
      }
      getCenterPoint(t) {
        const {
          x: e,
          y: n,
          base: i,
          horizontal: o,
        } = this.getProps(["x", "y", "base", "horizontal"], t);
        return { x: o ? (e + i) / 2 : e, y: o ? n : (n + i) / 2 };
      }
      getRange(t) {
        return "x" === t ? this.width / 2 : this.height / 2;
      }
    }
    (Bg.id = "bar"),
      (Bg.defaults = {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0,
      }),
      (Bg.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      });
    var jg = Object.freeze({
      __proto__: null,
      ArcElement: kg,
      LineElement: Rg,
      PointElement: Eg,
      BarElement: Bg,
    });
    function zg(t) {
      if (t._decimated) {
        const e = t._data;
        delete t._decimated,
          delete t._data,
          Object.defineProperty(t, "data", { value: e });
      }
    }
    function $g(t) {
      t.data.datasets.forEach((t) => {
        zg(t);
      });
    }
    var Wg = {
      id: "decimation",
      defaults: { algorithm: "min-max", enabled: !1 },
      beforeElementsUpdate: (t, e, n) => {
        if (!n.enabled) return void $g(t);
        const i = t.width;
        t.data.datasets.forEach((e, o) => {
          const { _data: s, indexAxis: r } = e,
            a = t.getDatasetMeta(o),
            l = s || e.data;
          if ("y" === bu([r, t.options.indexAxis])) return;
          if ("line" !== a.type) return;
          const c = t.scales[a.xAxisID];
          if ("linear" !== c.type && "time" !== c.type) return;
          if (t.options.parsing) return;
          let h,
            { start: d, count: u } = (function (t, e) {
              const n = e.length;
              let i,
                o = 0;
              const { iScale: s } = t,
                {
                  min: r,
                  max: a,
                  minDefined: l,
                  maxDefined: c,
                } = s.getUserBounds();
              return (
                l && (o = rd(xu(e, s.axis, r).lo, 0, n - 1)),
                (i = c ? rd(xu(e, s.axis, a).hi + 1, o, n) - o : n - o),
                { start: o, count: i }
              );
            })(a, l);
          if (u <= (n.threshold || 4 * i)) zg(e);
          else {
            switch (
              (mh(s) &&
                ((e._data = l),
                delete e.data,
                Object.defineProperty(e, "data", {
                  configurable: !0,
                  enumerable: !0,
                  get: function () {
                    return this._decimated;
                  },
                  set: function (t) {
                    this._data = t;
                  },
                })),
              n.algorithm)
            ) {
              case "lttb":
                h = (function (t, e, n, i, o) {
                  const s = o.samples || i;
                  if (s >= n) return t.slice(e, e + n);
                  const r = [],
                    a = (n - 2) / (s - 2);
                  let l = 0;
                  const c = e + n - 1;
                  let h,
                    d,
                    u,
                    p,
                    f,
                    g = e;
                  for (r[l++] = t[g], h = 0; h < s - 2; h++) {
                    let i,
                      o = 0,
                      s = 0;
                    const c = Math.floor((h + 1) * a) + 1 + e,
                      m = Math.min(Math.floor((h + 2) * a) + 1, n) + e,
                      b = m - c;
                    for (i = c; i < m; i++) (o += t[i].x), (s += t[i].y);
                    (o /= b), (s /= b);
                    const y = Math.floor(h * a) + 1 + e,
                      v = Math.min(Math.floor((h + 1) * a) + 1, n) + e,
                      { x, y: _ } = t[g];
                    for (u = p = -1, i = y; i < v; i++)
                      (p =
                        0.5 *
                        Math.abs(
                          (x - o) * (t[i].y - _) - (x - t[i].x) * (s - _)
                        )),
                        p > u && ((u = p), (d = t[i]), (f = i));
                    (r[l++] = d), (g = f);
                  }
                  return (r[l++] = t[c]), r;
                })(l, d, u, i, n);
                break;
              case "min-max":
                h = (function (t, e, n, i) {
                  let o,
                    s,
                    r,
                    a,
                    l,
                    c,
                    h,
                    d,
                    u,
                    p,
                    f = 0,
                    g = 0;
                  const m = [],
                    b = e + n - 1,
                    y = t[e].x,
                    v = t[b].x - y;
                  for (o = e; o < e + n; ++o) {
                    (s = t[o]), (r = ((s.x - y) / v) * i), (a = s.y);
                    const e = 0 | r;
                    if (e === l)
                      a < u ? ((u = a), (c = o)) : a > p && ((p = a), (h = o)),
                        (f = (g * f + s.x) / ++g);
                    else {
                      const n = o - 1;
                      if (!mh(c) && !mh(h)) {
                        const e = Math.min(c, h),
                          i = Math.max(c, h);
                        e !== d && e !== n && m.push({ ...t[e], x: f }),
                          i !== d && i !== n && m.push({ ...t[i], x: f });
                      }
                      o > 0 && n !== d && m.push(t[n]),
                        m.push(s),
                        (l = e),
                        (g = 0),
                        (u = p = a),
                        (c = h = d = o);
                    }
                  }
                  return m;
                })(l, d, u, i);
                break;
              default:
                throw new Error(
                  `Unsupported decimation algorithm '${n.algorithm}'`
                );
            }
            e._decimated = h;
          }
        });
      },
      destroy(t) {
        $g(t);
      },
    };
    function Hg(t, e, n) {
      const i = (function (t) {
        const e = t.options,
          n = e.fill;
        let i = _h(n && n.target, n);
        return (
          void 0 === i && (i = !!e.backgroundColor),
          !1 !== i && null !== i && (!0 === i ? "origin" : i)
        );
      })(t);
      if (yh(i)) return !isNaN(i.value) && i;
      let o = parseFloat(i);
      return vh(o) && Math.floor(o) === o
        ? (("-" !== i[0] && "+" !== i[0]) || (o = e + o),
          !(o === e || o < 0 || o >= n) && o)
        : ["origin", "start", "end", "stack", "shape"].indexOf(i) >= 0 && i;
    }
    class Ug {
      constructor(t) {
        (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
      }
      pathSegment(t, e, n) {
        const { x: i, y: o, radius: s } = this;
        return (
          (e = e || { start: 0, end: Bh }),
          t.arc(i, o, s, e.end, e.start, !0),
          !n.bounds
        );
      }
      interpolate(t) {
        const { x: e, y: n, radius: i } = this,
          o = t.angle;
        return { x: e + Math.cos(o) * i, y: n + Math.sin(o) * i, angle: o };
      }
    }
    function qg(t, e, n) {
      for (; e > t; e--) {
        const t = n[e];
        if (!isNaN(t.x) && !isNaN(t.y)) break;
      }
      return e;
    }
    function Gg(t, e, n) {
      const i = [];
      for (let o = 0; o < n.length; o++) {
        const s = n[o],
          { first: r, last: a, point: l } = Yg(s, e, "x");
        if (!(!l || (r && a)))
          if (r) i.unshift(l);
          else if ((t.push(l), !a)) break;
      }
      t.push(...i);
    }
    function Yg(t, e, n) {
      const i = t.interpolate(e, n);
      if (!i) return {};
      const o = i[n],
        s = t.segments,
        r = t.points;
      let a = !1,
        l = !1;
      for (let t = 0; t < s.length; t++) {
        const e = s[t],
          i = r[e.start][n],
          c = r[e.end][n];
        if (ad(o, i, c)) {
          (a = o === i), (l = o === c);
          break;
        }
      }
      return { first: a, last: l, point: i };
    }
    function Kg(t) {
      const { chart: e, fill: n, line: i } = t;
      if (vh(n))
        return (function (t, e) {
          const n = t.getDatasetMeta(e);
          return n && t.isDatasetVisible(e) ? n.dataset : null;
        })(e, n);
      if ("stack" === n)
        return (function (t) {
          const { scale: e, index: n, line: i } = t,
            o = [],
            s = i.segments,
            r = i.points,
            a = (function (t, e) {
              const n = [],
                i = t.getMatchingVisibleMetas("line");
              for (let t = 0; t < i.length; t++) {
                const o = i[t];
                if (o.index === e) break;
                o.hidden || n.unshift(o.dataset);
              }
              return n;
            })(e, n);
          a.push(Jg({ x: null, y: e.bottom }, i));
          for (let t = 0; t < s.length; t++) {
            const e = s[t];
            for (let t = e.start; t <= e.end; t++) Gg(o, r[t], a);
          }
          return new Rg({ points: o, options: {} });
        })(t);
      if ("shape" === n) return !0;
      const o = (function (t) {
        return (t.scale || {}).getPointPositionForValue
          ? (function (t) {
              const { scale: e, fill: n } = t,
                i = e.options,
                o = e.getLabels().length,
                s = [],
                r = i.reverse ? e.max : e.min,
                a = i.reverse ? e.min : e.max;
              let l, c, h;
              if (
                ((h =
                  "start" === n
                    ? r
                    : "end" === n
                    ? a
                    : yh(n)
                    ? n.value
                    : e.getBaseValue()),
                i.grid.circular)
              )
                return (
                  (c = e.getPointPositionForValue(0, r)),
                  new Ug({
                    x: c.x,
                    y: c.y,
                    radius: e.getDistanceFromCenterForValue(h),
                  })
                );
              for (l = 0; l < o; ++l) s.push(e.getPointPositionForValue(l, h));
              return s;
            })(t)
          : (function (t) {
              const { scale: e = {}, fill: n } = t;
              let i,
                o = null;
              return (
                "start" === n
                  ? (o = e.bottom)
                  : "end" === n
                  ? (o = e.top)
                  : yh(n)
                  ? (o = e.getPixelForValue(n.value))
                  : e.getBasePixel && (o = e.getBasePixel()),
                vh(o)
                  ? ((i = e.isHorizontal()),
                    { x: i ? o : null, y: i ? null : o })
                  : null
              );
            })(t);
      })(t);
      return o instanceof Ug ? o : Jg(o, i);
    }
    function Jg(t, e) {
      let n = [],
        i = !1;
      return (
        bh(t)
          ? ((i = !0), (n = t))
          : (n = (function (t, e) {
              const { x: n = null, y: i = null } = t || {},
                o = e.points,
                s = [];
              return (
                e.segments.forEach(({ start: t, end: e }) => {
                  e = qg(t, e, o);
                  const r = o[t],
                    a = o[e];
                  null !== i
                    ? (s.push({ x: r.x, y: i }), s.push({ x: a.x, y: i }))
                    : null !== n &&
                      (s.push({ x: n, y: r.y }), s.push({ x: n, y: a.y }));
                }),
                s
              );
            })(t, e)),
        n.length
          ? new Rg({
              points: n,
              options: { tension: 0 },
              _loop: i,
              _fullLoop: i,
            })
          : null
      );
    }
    function Xg(t, e, n) {
      let i = t[e].fill;
      const o = [e];
      let s;
      if (!n) return i;
      for (; !1 !== i && -1 === o.indexOf(i); ) {
        if (!vh(i)) return i;
        if (((s = t[i]), !s)) return !1;
        if (s.visible) return i;
        o.push(i), (i = s.fill);
      }
      return !1;
    }
    function Zg(t, e, n) {
      const { segments: i, points: o } = e;
      let s = !0,
        r = !1;
      t.beginPath();
      for (const a of i) {
        const { start: i, end: l } = a,
          c = o[i],
          h = o[qg(i, l, o)];
        s
          ? (t.moveTo(c.x, c.y), (s = !1))
          : (t.lineTo(c.x, n), t.lineTo(c.x, c.y)),
          (r = !!e.pathSegment(t, a, { move: r })),
          r ? t.closePath() : t.lineTo(h.x, n);
      }
      t.lineTo(e.first().x, n), t.closePath(), t.clip();
    }
    function Qg(t, e, n, i) {
      if (i) return;
      let o = e[t],
        s = n[t];
      return (
        "angle" === t && ((o = od(o)), (s = od(s))),
        { property: t, start: o, end: s }
      );
    }
    function tm(t, e, n, i) {
      return t && e ? i(t[n], e[n]) : t ? t[n] : e ? e[n] : 0;
    }
    function em(t, e, n) {
      const { top: i, bottom: o } = e.chart.chartArea,
        { property: s, start: r, end: a } = n || {};
      "x" === s && (t.beginPath(), t.rect(r, i, a - r, o - i), t.clip());
    }
    function nm(t, e, n, i) {
      const o = e.interpolate(n, i);
      o && t.lineTo(o.x, o.y);
    }
    function im(t, e) {
      const { line: n, target: i, property: o, color: s, scale: r } = e,
        a = (function (t, e, n) {
          const i = t.segments,
            o = t.points,
            s = e.points,
            r = [];
          for (const t of i) {
            let { start: i, end: a } = t;
            a = qg(i, a, o);
            const l = Qg(n, o[i], o[a], t.loop);
            if (!e.segments) {
              r.push({ source: t, target: l, start: o[i], end: o[a] });
              continue;
            }
            const c = up(e, l);
            for (const e of c) {
              const i = Qg(n, s[e.start], s[e.end], e.loop),
                a = dp(t, o, i);
              for (const t of a)
                r.push({
                  source: t,
                  target: e,
                  start: { [n]: tm(l, i, "start", Math.max) },
                  end: { [n]: tm(l, i, "end", Math.min) },
                });
            }
          }
          return r;
        })(n, i, o);
      for (const { source: e, target: l, start: c, end: h } of a) {
        const { style: { backgroundColor: a = s } = {} } = e,
          d = !0 !== i;
        t.save(), (t.fillStyle = a), em(t, r, d && Qg(o, c, h)), t.beginPath();
        const u = !!n.pathSegment(t, e);
        let p;
        if (d) {
          u ? t.closePath() : nm(t, i, h, o);
          const e = !!i.pathSegment(t, l, { move: u, reverse: !0 });
          (p = u && e), p || nm(t, i, c, o);
        }
        t.closePath(), t.fill(p ? "evenodd" : "nonzero"), t.restore();
      }
    }
    function om(t, e, n) {
      const i = Kg(e),
        { line: o, scale: s, axis: r } = e,
        a = o.options,
        l = a.fill,
        c = a.backgroundColor,
        { above: h = c, below: d = c } = l || {};
      i &&
        o.points.length &&
        (eu(t, n),
        (function (t, e) {
          const {
              line: n,
              target: i,
              above: o,
              below: s,
              area: r,
              scale: a,
            } = e,
            l = n._loop ? "angle" : e.axis;
          t.save(),
            "x" === l &&
              s !== o &&
              (Zg(t, i, r.top),
              im(t, { line: n, target: i, color: o, scale: a, property: l }),
              t.restore(),
              t.save(),
              Zg(t, i, r.bottom)),
            im(t, { line: n, target: i, color: s, scale: a, property: l }),
            t.restore();
        })(t, {
          line: o,
          target: i,
          above: h,
          below: d,
          area: n,
          scale: s,
          axis: r,
        }),
        nu(t));
    }
    var sm = {
      id: "filler",
      afterDatasetsUpdate(t, e, n) {
        const i = (t.data.datasets || []).length,
          o = [];
        let s, r, a, l;
        for (r = 0; r < i; ++r)
          (s = t.getDatasetMeta(r)),
            (a = s.dataset),
            (l = null),
            a &&
              a.options &&
              a instanceof Rg &&
              (l = {
                visible: t.isDatasetVisible(r),
                index: r,
                fill: Hg(a, r, i),
                chart: t,
                axis: s.controller.options.indexAxis,
                scale: s.vScale,
                line: a,
              }),
            (s.$filler = l),
            o.push(l);
        for (r = 0; r < i; ++r)
          (l = o[r]), l && !1 !== l.fill && (l.fill = Xg(o, r, n.propagate));
      },
      beforeDraw(t, e, n) {
        const i = "beforeDraw" === n.drawTime,
          o = t.getSortedVisibleDatasetMetas(),
          s = t.chartArea;
        for (let e = o.length - 1; e >= 0; --e) {
          const n = o[e].$filler;
          n && (n.line.updateControlPoints(s, n.axis), i && om(t.ctx, n, s));
        }
      },
      beforeDatasetsDraw(t, e, n) {
        if ("beforeDatasetsDraw" !== n.drawTime) return;
        const i = t.getSortedVisibleDatasetMetas();
        for (let e = i.length - 1; e >= 0; --e) {
          const n = i[e].$filler;
          n && om(t.ctx, n, t.chartArea);
        }
      },
      beforeDatasetDraw(t, e, n) {
        const i = e.meta.$filler;
        i &&
          !1 !== i.fill &&
          "beforeDatasetDraw" === n.drawTime &&
          om(t.ctx, i, t.chartArea);
      },
      defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
    };
    const rm = (t, e) => {
      let { boxHeight: n = e, boxWidth: i = e } = t;
      return (
        t.usePointStyle && ((n = Math.min(n, e)), (i = Math.min(i, e))),
        { boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n) }
      );
    };
    class am extends If {
      constructor(t) {
        super(),
          (this._added = !1),
          (this.legendHitBoxes = []),
          (this._hoveredItem = null),
          (this.doughnutMode = !1),
          (this.chart = t.chart),
          (this.options = t.options),
          (this.ctx = t.ctx),
          (this.legendItems = void 0),
          (this.columnSizes = void 0),
          (this.lineWidths = void 0),
          (this.maxHeight = void 0),
          (this.maxWidth = void 0),
          (this.top = void 0),
          (this.bottom = void 0),
          (this.left = void 0),
          (this.right = void 0),
          (this.height = void 0),
          (this.width = void 0),
          (this._margins = void 0),
          (this.position = void 0),
          (this.weight = void 0),
          (this.fullSize = void 0);
      }
      update(t, e, n) {
        (this.maxWidth = t),
          (this.maxHeight = e),
          (this._margins = n),
          this.setDimensions(),
          this.buildLabels(),
          this.fit();
      }
      setDimensions() {
        this.isHorizontal()
          ? ((this.width = this.maxWidth),
            (this.left = this._margins.left),
            (this.right = this.width))
          : ((this.height = this.maxHeight),
            (this.top = this._margins.top),
            (this.bottom = this.height));
      }
      buildLabels() {
        const t = this.options.labels || {};
        let e = kh(t.generateLabels, [this.chart], this) || [];
        t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
          t.sort && (e = e.sort((e, n) => t.sort(e, n, this.chart.data))),
          this.options.reverse && e.reverse(),
          (this.legendItems = e);
      }
      fit() {
        const { options: t, ctx: e } = this;
        if (!t.display) return void (this.width = this.height = 0);
        const n = t.labels,
          i = mu(n.font),
          o = i.size,
          s = this._computeTitleHeight(),
          { boxWidth: r, itemHeight: a } = rm(n, o);
        let l, c;
        (e.font = i.string),
          this.isHorizontal()
            ? ((l = this.maxWidth), (c = this._fitRows(s, o, r, a) + 10))
            : ((c = this.maxHeight), (l = this._fitCols(s, o, r, a) + 10)),
          (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
          (this.height = Math.min(c, t.maxHeight || this.maxHeight));
      }
      _fitRows(t, e, n, i) {
        const {
            ctx: o,
            maxWidth: s,
            options: {
              labels: { padding: r },
            },
          } = this,
          a = (this.legendHitBoxes = []),
          l = (this.lineWidths = [0]),
          c = i + r;
        let h = t;
        (o.textAlign = "left"), (o.textBaseline = "middle");
        let d = -1,
          u = -c;
        return (
          this.legendItems.forEach((t, p) => {
            const f = n + e / 2 + o.measureText(t.text).width;
            (0 === p || l[l.length - 1] + f + 2 * r > s) &&
              ((h += c), (l[l.length - (p > 0 ? 0 : 1)] = 0), (u += c), d++),
              (a[p] = { left: 0, top: u, row: d, width: f, height: i }),
              (l[l.length - 1] += f + r);
          }),
          h
        );
      }
      _fitCols(t, e, n, i) {
        const {
            ctx: o,
            maxHeight: s,
            options: {
              labels: { padding: r },
            },
          } = this,
          a = (this.legendHitBoxes = []),
          l = (this.columnSizes = []),
          c = s - t;
        let h = r,
          d = 0,
          u = 0,
          p = 0,
          f = 0;
        return (
          this.legendItems.forEach((t, s) => {
            const g = n + e / 2 + o.measureText(t.text).width;
            s > 0 &&
              u + i + 2 * r > c &&
              ((h += d + r),
              l.push({ width: d, height: u }),
              (p += d + r),
              f++,
              (d = u = 0)),
              (a[s] = { left: p, top: u, col: f, width: g, height: i }),
              (d = Math.max(d, g)),
              (u += i + r);
          }),
          (h += d),
          l.push({ width: d, height: u }),
          h
        );
      }
      adjustHitBoxes() {
        if (!this.options.display) return;
        const t = this._computeTitleHeight(),
          {
            legendHitBoxes: e,
            options: {
              align: n,
              labels: { padding: i },
              rtl: o,
            },
          } = this,
          s = rp(o, this.left, this.width);
        if (this.isHorizontal()) {
          let o = 0,
            r = ph(n, this.left + i, this.right - this.lineWidths[o]);
          for (const a of e)
            o !== a.row &&
              ((o = a.row),
              (r = ph(n, this.left + i, this.right - this.lineWidths[o]))),
              (a.top += this.top + t + i),
              (a.left = s.leftForLtr(s.x(r), a.width)),
              (r += a.width + i);
        } else {
          let o = 0,
            r = ph(
              n,
              this.top + t + i,
              this.bottom - this.columnSizes[o].height
            );
          for (const a of e)
            a.col !== o &&
              ((o = a.col),
              (r = ph(
                n,
                this.top + t + i,
                this.bottom - this.columnSizes[o].height
              ))),
              (a.top = r),
              (a.left += this.left + i),
              (a.left = s.leftForLtr(s.x(a.left), a.width)),
              (r += a.height + i);
        }
      }
      isHorizontal() {
        return (
          "top" === this.options.position || "bottom" === this.options.position
        );
      }
      draw() {
        if (this.options.display) {
          const t = this.ctx;
          eu(t, this), this._draw(), nu(t);
        }
      }
      _draw() {
        const { options: t, columnSizes: e, lineWidths: n, ctx: i } = this,
          { align: o, labels: s } = t,
          r = Yd.color,
          a = rp(t.rtl, this.left, this.width),
          l = mu(s.font),
          { color: c, padding: h } = s,
          d = l.size,
          u = d / 2;
        let p;
        this.drawTitle(),
          (i.textAlign = a.textAlign("left")),
          (i.textBaseline = "middle"),
          (i.lineWidth = 0.5),
          (i.font = l.string);
        const { boxWidth: f, boxHeight: g, itemHeight: m } = rm(s, d),
          b = this.isHorizontal(),
          y = this._computeTitleHeight();
        (p = b
          ? {
              x: ph(o, this.left + h, this.right - n[0]),
              y: this.top + h + y,
              line: 0,
            }
          : {
              x: this.left + h,
              y: ph(o, this.top + y + h, this.bottom - e[0].height),
              line: 0,
            }),
          ap(this.ctx, t.textDirection);
        const v = m + h;
        this.legendItems.forEach((x, _) => {
          (i.strokeStyle = x.fontColor || c), (i.fillStyle = x.fontColor || c);
          const w = i.measureText(x.text).width,
            k = a.textAlign(x.textAlign || (x.textAlign = s.textAlign)),
            S = f + u + w;
          let C = p.x,
            T = p.y;
          a.setWidth(this.width),
            b
              ? _ > 0 &&
                C + S + h > this.right &&
                ((T = p.y += v),
                p.line++,
                (C = p.x = ph(o, this.left + h, this.right - n[p.line])))
              : _ > 0 &&
                T + v > this.bottom &&
                ((C = p.x = C + e[p.line].width + h),
                p.line++,
                (T = p.y =
                  ph(o, this.top + y + h, this.bottom - e[p.line].height))),
            (function (t, e, n) {
              if (isNaN(f) || f <= 0 || isNaN(g) || g < 0) return;
              i.save();
              const o = _h(n.lineWidth, 1);
              if (
                ((i.fillStyle = _h(n.fillStyle, r)),
                (i.lineCap = _h(n.lineCap, "butt")),
                (i.lineDashOffset = _h(n.lineDashOffset, 0)),
                (i.lineJoin = _h(n.lineJoin, "miter")),
                (i.lineWidth = o),
                (i.strokeStyle = _h(n.strokeStyle, r)),
                i.setLineDash(_h(n.lineDash, [])),
                s.usePointStyle)
              ) {
                const s = {
                    radius: (f * Math.SQRT2) / 2,
                    pointStyle: n.pointStyle,
                    rotation: n.rotation,
                    borderWidth: o,
                  },
                  r = a.xPlus(t, f / 2);
                Qd(i, s, r, e + u);
              } else {
                const s = e + Math.max((d - g) / 2, 0),
                  r = a.leftForLtr(t, f),
                  l = fu(n.borderRadius);
                i.beginPath(),
                  Object.values(l).some((t) => 0 !== t)
                    ? au(i, { x: r, y: s, w: f, h: g, radius: l })
                    : i.rect(r, s, f, g),
                  i.fill(),
                  0 !== o && i.stroke();
              }
              i.restore();
            })(a.x(C), T, x),
            (C = ((t, e, n, i) =>
              t === (i ? "left" : "right")
                ? n
                : "center" === t
                ? (e + n) / 2
                : e)(k, C + f + u, b ? C + S : this.right, t.rtl)),
            (function (t, e, n) {
              su(i, n.text, t, e + m / 2, l, {
                strikethrough: n.hidden,
                textAlign: a.textAlign(n.textAlign),
              });
            })(a.x(C), T, x),
            b ? (p.x += S + h) : (p.y += v);
        }),
          lp(this.ctx, t.textDirection);
      }
      drawTitle() {
        const t = this.options,
          e = t.title,
          n = mu(e.font),
          i = gu(e.padding);
        if (!e.display) return;
        const o = rp(t.rtl, this.left, this.width),
          s = this.ctx,
          r = e.position,
          a = n.size / 2,
          l = i.top + a;
        let c,
          h = this.left,
          d = this.width;
        if (this.isHorizontal())
          (d = Math.max(...this.lineWidths)),
            (c = this.top + l),
            (h = ph(t.align, h, this.right - d));
        else {
          const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
          c =
            l +
            ph(
              t.align,
              this.top,
              this.bottom - e - t.labels.padding - this._computeTitleHeight()
            );
        }
        const u = ph(r, h, h + d);
        (s.textAlign = o.textAlign(uh(r))),
          (s.textBaseline = "middle"),
          (s.strokeStyle = e.color),
          (s.fillStyle = e.color),
          (s.font = n.string),
          su(s, e.text, u, c, n);
      }
      _computeTitleHeight() {
        const t = this.options.title,
          e = mu(t.font),
          n = gu(t.padding);
        return t.display ? e.lineHeight + n.height : 0;
      }
      _getLegendItemAt(t, e) {
        let n, i, o;
        if (ad(t, this.left, this.right) && ad(e, this.top, this.bottom))
          for (o = this.legendHitBoxes, n = 0; n < o.length; ++n)
            if (
              ((i = o[n]),
              ad(t, i.left, i.left + i.width) && ad(e, i.top, i.top + i.height))
            )
              return this.legendItems[n];
        return null;
      }
      handleEvent(t) {
        const e = this.options;
        if (
          !(function (t, e) {
            return (
              !("mousemove" !== t || (!e.onHover && !e.onLeave)) ||
              !(!e.onClick || ("click" !== t && "mouseup" !== t))
            );
          })(t.type, e)
        )
          return;
        const n = this._getLegendItemAt(t.x, t.y);
        if ("mousemove" === t.type) {
          const i = this._hoveredItem,
            o = ((t, e) =>
              null !== t &&
              null !== e &&
              t.datasetIndex === e.datasetIndex &&
              t.index === e.index)(i, n);
          i && !o && kh(e.onLeave, [t, i, this], this),
            (this._hoveredItem = n),
            n && !o && kh(e.onHover, [t, n, this], this);
        } else n && kh(e.onClick, [t, n, this], this);
      }
    }
    var lm = {
      id: "legend",
      _element: am,
      start(t, e, n) {
        const i = (t.legend = new am({ ctx: t.ctx, options: n, chart: t }));
        yf.configure(t, i, n), yf.addBox(t, i);
      },
      stop(t) {
        yf.removeBox(t, t.legend), delete t.legend;
      },
      beforeUpdate(t, e, n) {
        const i = t.legend;
        yf.configure(t, i, n), (i.options = n);
      },
      afterUpdate(t) {
        const e = t.legend;
        e.buildLabels(), e.adjustHitBoxes();
      },
      afterEvent(t, e) {
        e.replay || t.legend.handleEvent(e.event);
      },
      defaults: {
        display: !0,
        position: "top",
        align: "center",
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick(t, e, n) {
          const i = e.datasetIndex,
            o = n.chart;
          o.isDatasetVisible(i)
            ? (o.hide(i), (e.hidden = !0))
            : (o.show(i), (e.hidden = !1));
        },
        onHover: null,
        onLeave: null,
        labels: {
          color: (t) => t.chart.options.color,
          boxWidth: 40,
          padding: 10,
          generateLabels(t) {
            const e = t.data.datasets,
              {
                labels: {
                  usePointStyle: n,
                  pointStyle: i,
                  textAlign: o,
                  color: s,
                },
              } = t.legend.options;
            return t._getSortedDatasetMetas().map((t) => {
              const r = t.controller.getStyle(n ? 0 : void 0),
                a = gu(r.borderWidth);
              return {
                text: e[t.index].label,
                fillStyle: r.backgroundColor,
                fontColor: s,
                hidden: !t.visible,
                lineCap: r.borderCapStyle,
                lineDash: r.borderDash,
                lineDashOffset: r.borderDashOffset,
                lineJoin: r.borderJoinStyle,
                lineWidth: (a.width + a.height) / 4,
                strokeStyle: r.borderColor,
                pointStyle: i || r.pointStyle,
                rotation: r.rotation,
                textAlign: o || r.textAlign,
                borderRadius: 0,
                datasetIndex: t.index,
              };
            }, this);
          },
        },
        title: {
          color: (t) => t.chart.options.color,
          display: !1,
          position: "center",
          text: "",
        },
      },
      descriptors: {
        _scriptable: (t) => !t.startsWith("on"),
        labels: {
          _scriptable: (t) => !["generateLabels", "filter", "sort"].includes(t),
        },
      },
    };
    class cm extends If {
      constructor(t) {
        super(),
          (this.chart = t.chart),
          (this.options = t.options),
          (this.ctx = t.ctx),
          (this._padding = void 0),
          (this.top = void 0),
          (this.bottom = void 0),
          (this.left = void 0),
          (this.right = void 0),
          (this.width = void 0),
          (this.height = void 0),
          (this.position = void 0),
          (this.weight = void 0),
          (this.fullSize = void 0);
      }
      update(t, e) {
        const n = this.options;
        if (((this.left = 0), (this.top = 0), !n.display))
          return void (this.width = this.height = this.right = this.bottom = 0);
        (this.width = this.right = t), (this.height = this.bottom = e);
        const i = bh(n.text) ? n.text.length : 1;
        this._padding = gu(n.padding);
        const o = i * mu(n.font).lineHeight + this._padding.height;
        this.isHorizontal() ? (this.height = o) : (this.width = o);
      }
      isHorizontal() {
        const t = this.options.position;
        return "top" === t || "bottom" === t;
      }
      _drawArgs(t) {
        const { top: e, left: n, bottom: i, right: o, options: s } = this,
          r = s.align;
        let a,
          l,
          c,
          h = 0;
        return (
          this.isHorizontal()
            ? ((l = ph(r, n, o)), (c = e + t), (a = o - n))
            : ("left" === s.position
                ? ((l = n + t), (c = ph(r, i, e)), (h = -0.5 * Nh))
                : ((l = o - t), (c = ph(r, e, i)), (h = 0.5 * Nh)),
              (a = i - e)),
          { titleX: l, titleY: c, maxWidth: a, rotation: h }
        );
      }
      draw() {
        const t = this.ctx,
          e = this.options;
        if (!e.display) return;
        const n = mu(e.font),
          i = n.lineHeight / 2 + this._padding.top,
          {
            titleX: o,
            titleY: s,
            maxWidth: r,
            rotation: a,
          } = this._drawArgs(i);
        su(t, e.text, 0, 0, n, {
          color: e.color,
          maxWidth: r,
          rotation: a,
          textAlign: uh(e.align),
          textBaseline: "middle",
          translation: [o, s],
        });
      }
    }
    var hm = {
      id: "title",
      _element: cm,
      start(t, e, n) {
        !(function (t, e) {
          const n = new cm({ ctx: t.ctx, options: e, chart: t });
          yf.configure(t, n, e), yf.addBox(t, n), (t.titleBlock = n);
        })(t, n);
      },
      stop(t) {
        const e = t.titleBlock;
        yf.removeBox(t, e), delete t.titleBlock;
      },
      beforeUpdate(t, e, n) {
        const i = t.titleBlock;
        yf.configure(t, i, n), (i.options = n);
      },
      defaults: {
        align: "center",
        display: !1,
        font: { weight: "bold" },
        fullSize: !0,
        padding: 10,
        position: "top",
        text: "",
        weight: 2e3,
      },
      defaultRoutes: { color: "color" },
      descriptors: { _scriptable: !0, _indexable: !1 },
    };
    const dm = new WeakMap();
    var um = {
      id: "subtitle",
      start(t, e, n) {
        const i = new cm({ ctx: t.ctx, options: n, chart: t });
        yf.configure(t, i, n), yf.addBox(t, i), dm.set(t, i);
      },
      stop(t) {
        yf.removeBox(t, dm.get(t)), dm.delete(t);
      },
      beforeUpdate(t, e, n) {
        const i = dm.get(t);
        yf.configure(t, i, n), (i.options = n);
      },
      defaults: {
        align: "center",
        display: !1,
        font: { weight: "normal" },
        fullSize: !0,
        padding: 0,
        position: "top",
        text: "",
        weight: 1500,
      },
      defaultRoutes: { color: "color" },
      descriptors: { _scriptable: !0, _indexable: !1 },
    };
    const pm = {
      average(t) {
        if (!t.length) return !1;
        let e,
          n,
          i = 0,
          o = 0,
          s = 0;
        for (e = 0, n = t.length; e < n; ++e) {
          const n = t[e].element;
          if (n && n.hasValue()) {
            const t = n.tooltipPosition();
            (i += t.x), (o += t.y), ++s;
          }
        }
        return { x: i / s, y: o / s };
      },
      nearest(t, e) {
        if (!t.length) return !1;
        let n,
          i,
          o,
          s = e.x,
          r = e.y,
          a = Number.POSITIVE_INFINITY;
        for (n = 0, i = t.length; n < i; ++n) {
          const i = t[n].element;
          if (i && i.hasValue()) {
            const t = nd(e, i.getCenterPoint());
            t < a && ((a = t), (o = i));
          }
        }
        if (o) {
          const t = o.tooltipPosition();
          (s = t.x), (r = t.y);
        }
        return { x: s, y: r };
      },
    };
    function fm(t, e) {
      return e && (bh(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
    }
    function gm(t) {
      return ("string" == typeof t || t instanceof String) &&
        t.indexOf("\n") > -1
        ? t.split("\n")
        : t;
    }
    function mm(t, e) {
      const { element: n, datasetIndex: i, index: o } = e,
        s = t.getDatasetMeta(i).controller,
        { label: r, value: a } = s.getLabelAndValue(o);
      return {
        chart: t,
        label: r,
        parsed: s.getParsed(o),
        raw: t.data.datasets[i].data[o],
        formattedValue: a,
        dataset: s.getDataset(),
        dataIndex: o,
        datasetIndex: i,
        element: n,
      };
    }
    function bm(t, e) {
      const n = t.chart.ctx,
        { body: i, footer: o, title: s } = t,
        { boxWidth: r, boxHeight: a } = e,
        l = mu(e.bodyFont),
        c = mu(e.titleFont),
        h = mu(e.footerFont),
        d = s.length,
        u = o.length,
        p = i.length,
        f = gu(e.padding);
      let g = f.height,
        m = 0,
        b = i.reduce(
          (t, e) => t + e.before.length + e.lines.length + e.after.length,
          0
        );
      (b += t.beforeBody.length + t.afterBody.length),
        d &&
          (g +=
            d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
        b &&
          (g +=
            p * (e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight) +
            (b - p) * l.lineHeight +
            (b - 1) * e.bodySpacing),
        u &&
          (g +=
            e.footerMarginTop + u * h.lineHeight + (u - 1) * e.footerSpacing);
      let y = 0;
      const v = function (t) {
        m = Math.max(m, n.measureText(t).width + y);
      };
      return (
        n.save(),
        (n.font = c.string),
        Sh(t.title, v),
        (n.font = l.string),
        Sh(t.beforeBody.concat(t.afterBody), v),
        (y = e.displayColors ? r + 2 + e.boxPadding : 0),
        Sh(i, (t) => {
          Sh(t.before, v), Sh(t.lines, v), Sh(t.after, v);
        }),
        (y = 0),
        (n.font = h.string),
        Sh(t.footer, v),
        n.restore(),
        (m += f.width),
        { width: m, height: g }
      );
    }
    function ym(t, e, n, i) {
      const { x: o, width: s } = n,
        {
          width: r,
          chartArea: { left: a, right: l },
        } = t;
      let c = "center";
      return (
        "center" === i
          ? (c = o <= (a + l) / 2 ? "left" : "right")
          : o <= s / 2
          ? (c = "left")
          : o >= r - s / 2 && (c = "right"),
        (function (t, e, n, i) {
          const { x: o, width: s } = i,
            r = n.caretSize + n.caretPadding;
          return (
            ("left" === t && o + s + r > e.width) ||
            ("right" === t && o - s - r < 0) ||
            void 0
          );
        })(c, t, e, n) && (c = "center"),
        c
      );
    }
    function vm(t, e, n) {
      const i =
        n.yAlign ||
        e.yAlign ||
        (function (t, e) {
          const { y: n, height: i } = e;
          return n < i / 2 ? "top" : n > t.height - i / 2 ? "bottom" : "center";
        })(t, n);
      return { xAlign: n.xAlign || e.xAlign || ym(t, e, n, i), yAlign: i };
    }
    function xm(t, e, n, i) {
      const { caretSize: o, caretPadding: s, cornerRadius: r } = t,
        { xAlign: a, yAlign: l } = n,
        c = o + s,
        { topLeft: h, topRight: d, bottomLeft: u, bottomRight: p } = fu(r);
      let f = (function (t, e) {
        let { x: n, width: i } = t;
        return "right" === e ? (n -= i) : "center" === e && (n -= i / 2), n;
      })(e, a);
      const g = (function (t, e, n) {
        let { y: i, height: o } = t;
        return (
          "top" === e ? (i += n) : (i -= "bottom" === e ? o + n : o / 2), i
        );
      })(e, l, c);
      return (
        "center" === l
          ? "left" === a
            ? (f += c)
            : "right" === a && (f -= c)
          : "left" === a
          ? (f -= Math.max(h, u) + o)
          : "right" === a && (f += Math.max(d, p) + o),
        { x: rd(f, 0, i.width - e.width), y: rd(g, 0, i.height - e.height) }
      );
    }
    function _m(t, e, n) {
      const i = gu(n.padding);
      return "center" === e
        ? t.x + t.width / 2
        : "right" === e
        ? t.x + t.width - i.right
        : t.x + i.left;
    }
    function wm(t) {
      return fm([], gm(t));
    }
    function km(t, e) {
      const n =
        e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
      return n ? t.override(n) : t;
    }
    class Sm extends If {
      constructor(t) {
        super(),
          (this.opacity = 0),
          (this._active = []),
          (this._eventPosition = void 0),
          (this._size = void 0),
          (this._cachedAnimations = void 0),
          (this._tooltipItems = []),
          (this.$animations = void 0),
          (this.$context = void 0),
          (this.chart = t.chart || t._chart),
          (this._chart = this.chart),
          (this.options = t.options),
          (this.dataPoints = void 0),
          (this.title = void 0),
          (this.beforeBody = void 0),
          (this.body = void 0),
          (this.afterBody = void 0),
          (this.footer = void 0),
          (this.xAlign = void 0),
          (this.yAlign = void 0),
          (this.x = void 0),
          (this.y = void 0),
          (this.height = void 0),
          (this.width = void 0),
          (this.caretX = void 0),
          (this.caretY = void 0),
          (this.labelColors = void 0),
          (this.labelPointStyles = void 0),
          (this.labelTextColors = void 0);
      }
      initialize(t) {
        (this.options = t),
          (this._cachedAnimations = void 0),
          (this.$context = void 0);
      }
      _resolveAnimations() {
        const t = this._cachedAnimations;
        if (t) return t;
        const e = this.chart,
          n = this.options.setContext(this.getContext()),
          i = n.enabled && e.options.animation && n.animations,
          o = new xp(this.chart, i);
        return i._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
      }
      getContext() {
        return (
          this.$context ||
          (this.$context =
            (this,
            yu(this.chart.getContext(), {
              tooltip: this,
              tooltipItems: this._tooltipItems,
              type: "tooltip",
            })))
        );
      }
      getTitle(t, e) {
        const { callbacks: n } = e,
          i = n.beforeTitle.apply(this, [t]),
          o = n.title.apply(this, [t]),
          s = n.afterTitle.apply(this, [t]);
        let r = [];
        return (r = fm(r, gm(i))), (r = fm(r, gm(o))), (r = fm(r, gm(s))), r;
      }
      getBeforeBody(t, e) {
        return wm(e.callbacks.beforeBody.apply(this, [t]));
      }
      getBody(t, e) {
        const { callbacks: n } = e,
          i = [];
        return (
          Sh(t, (t) => {
            const e = { before: [], lines: [], after: [] },
              o = km(n, t);
            fm(e.before, gm(o.beforeLabel.call(this, t))),
              fm(e.lines, o.label.call(this, t)),
              fm(e.after, gm(o.afterLabel.call(this, t))),
              i.push(e);
          }),
          i
        );
      }
      getAfterBody(t, e) {
        return wm(e.callbacks.afterBody.apply(this, [t]));
      }
      getFooter(t, e) {
        const { callbacks: n } = e,
          i = n.beforeFooter.apply(this, [t]),
          o = n.footer.apply(this, [t]),
          s = n.afterFooter.apply(this, [t]);
        let r = [];
        return (r = fm(r, gm(i))), (r = fm(r, gm(o))), (r = fm(r, gm(s))), r;
      }
      _createItems(t) {
        const e = this._active,
          n = this.chart.data,
          i = [],
          o = [],
          s = [];
        let r,
          a,
          l = [];
        for (r = 0, a = e.length; r < a; ++r) l.push(mm(this.chart, e[r]));
        return (
          t.filter && (l = l.filter((e, i, o) => t.filter(e, i, o, n))),
          t.itemSort && (l = l.sort((e, i) => t.itemSort(e, i, n))),
          Sh(l, (e) => {
            const n = km(t.callbacks, e);
            i.push(n.labelColor.call(this, e)),
              o.push(n.labelPointStyle.call(this, e)),
              s.push(n.labelTextColor.call(this, e));
          }),
          (this.labelColors = i),
          (this.labelPointStyles = o),
          (this.labelTextColors = s),
          (this.dataPoints = l),
          l
        );
      }
      update(t, e) {
        const n = this.options.setContext(this.getContext()),
          i = this._active;
        let o,
          s = [];
        if (i.length) {
          const t = pm[n.position].call(this, i, this._eventPosition);
          (s = this._createItems(n)),
            (this.title = this.getTitle(s, n)),
            (this.beforeBody = this.getBeforeBody(s, n)),
            (this.body = this.getBody(s, n)),
            (this.afterBody = this.getAfterBody(s, n)),
            (this.footer = this.getFooter(s, n));
          const e = (this._size = bm(this, n)),
            r = Object.assign({}, t, e),
            a = vm(this.chart, n, r),
            l = xm(n, r, a, this.chart);
          (this.xAlign = a.xAlign),
            (this.yAlign = a.yAlign),
            (o = {
              opacity: 1,
              x: l.x,
              y: l.y,
              width: e.width,
              height: e.height,
              caretX: t.x,
              caretY: t.y,
            });
        } else 0 !== this.opacity && (o = { opacity: 0 });
        (this._tooltipItems = s),
          (this.$context = void 0),
          o && this._resolveAnimations().update(this, o),
          t &&
            n.external &&
            n.external.call(this, {
              chart: this.chart,
              tooltip: this,
              replay: e,
            });
      }
      drawCaret(t, e, n, i) {
        const o = this.getCaretPosition(t, n, i);
        e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
      }
      getCaretPosition(t, e, n) {
        const { xAlign: i, yAlign: o } = this,
          { caretSize: s, cornerRadius: r } = n,
          { topLeft: a, topRight: l, bottomLeft: c, bottomRight: h } = fu(r),
          { x: d, y: u } = t,
          { width: p, height: f } = e;
        let g, m, b, y, v, x;
        return (
          "center" === o
            ? ((v = u + f / 2),
              "left" === i
                ? ((g = d), (m = g - s), (y = v + s), (x = v - s))
                : ((g = d + p), (m = g + s), (y = v - s), (x = v + s)),
              (b = g))
            : ((m =
                "left" === i
                  ? d + Math.max(a, c) + s
                  : "right" === i
                  ? d + p - Math.max(l, h) - s
                  : this.caretX),
              "top" === o
                ? ((y = u), (v = y - s), (g = m - s), (b = m + s))
                : ((y = u + f), (v = y + s), (g = m + s), (b = m - s)),
              (x = y)),
          { x1: g, x2: m, x3: b, y1: y, y2: v, y3: x }
        );
      }
      drawTitle(t, e, n) {
        const i = this.title,
          o = i.length;
        let s, r, a;
        if (o) {
          const l = rp(n.rtl, this.x, this.width);
          for (
            t.x = _m(this, n.titleAlign, n),
              e.textAlign = l.textAlign(n.titleAlign),
              e.textBaseline = "middle",
              s = mu(n.titleFont),
              r = n.titleSpacing,
              e.fillStyle = n.titleColor,
              e.font = s.string,
              a = 0;
            a < o;
            ++a
          )
            e.fillText(i[a], l.x(t.x), t.y + s.lineHeight / 2),
              (t.y += s.lineHeight + r),
              a + 1 === o && (t.y += n.titleMarginBottom - r);
        }
      }
      _drawColorBox(t, e, n, i, o) {
        const s = this.labelColors[n],
          r = this.labelPointStyles[n],
          { boxHeight: a, boxWidth: l, boxPadding: c } = o,
          h = mu(o.bodyFont),
          d = _m(this, "left", o),
          u = i.x(d),
          p = a < h.lineHeight ? (h.lineHeight - a) / 2 : 0,
          f = e.y + p;
        if (o.usePointStyle) {
          const e = {
              radius: Math.min(l, a) / 2,
              pointStyle: r.pointStyle,
              rotation: r.rotation,
              borderWidth: 1,
            },
            n = i.leftForLtr(u, l) + l / 2,
            c = f + a / 2;
          (t.strokeStyle = o.multiKeyBackground),
            (t.fillStyle = o.multiKeyBackground),
            Qd(t, e, n, c),
            (t.strokeStyle = s.borderColor),
            (t.fillStyle = s.backgroundColor),
            Qd(t, e, n, c);
        } else {
          (t.lineWidth = s.borderWidth || 1),
            (t.strokeStyle = s.borderColor),
            t.setLineDash(s.borderDash || []),
            (t.lineDashOffset = s.borderDashOffset || 0);
          const e = i.leftForLtr(u, l - c),
            n = i.leftForLtr(i.xPlus(u, 1), l - c - 2),
            r = fu(s.borderRadius);
          Object.values(r).some((t) => 0 !== t)
            ? (t.beginPath(),
              (t.fillStyle = o.multiKeyBackground),
              au(t, { x: e, y: f, w: l, h: a, radius: r }),
              t.fill(),
              t.stroke(),
              (t.fillStyle = s.backgroundColor),
              t.beginPath(),
              au(t, { x: n, y: f + 1, w: l - 2, h: a - 2, radius: r }),
              t.fill())
            : ((t.fillStyle = o.multiKeyBackground),
              t.fillRect(e, f, l, a),
              t.strokeRect(e, f, l, a),
              (t.fillStyle = s.backgroundColor),
              t.fillRect(n, f + 1, l - 2, a - 2));
        }
        t.fillStyle = this.labelTextColors[n];
      }
      drawBody(t, e, n) {
        const { body: i } = this,
          {
            bodySpacing: o,
            bodyAlign: s,
            displayColors: r,
            boxHeight: a,
            boxWidth: l,
            boxPadding: c,
          } = n,
          h = mu(n.bodyFont);
        let d = h.lineHeight,
          u = 0;
        const p = rp(n.rtl, this.x, this.width),
          f = function (n) {
            e.fillText(n, p.x(t.x + u), t.y + d / 2), (t.y += d + o);
          },
          g = p.textAlign(s);
        let m, b, y, v, x, _, w;
        for (
          e.textAlign = s,
            e.textBaseline = "middle",
            e.font = h.string,
            t.x = _m(this, g, n),
            e.fillStyle = n.bodyColor,
            Sh(this.beforeBody, f),
            u =
              r && "right" !== g ? ("center" === s ? l / 2 + c : l + 2 + c) : 0,
            v = 0,
            _ = i.length;
          v < _;
          ++v
        ) {
          for (
            m = i[v],
              b = this.labelTextColors[v],
              e.fillStyle = b,
              Sh(m.before, f),
              y = m.lines,
              r &&
                y.length &&
                (this._drawColorBox(e, t, v, p, n),
                (d = Math.max(h.lineHeight, a))),
              x = 0,
              w = y.length;
            x < w;
            ++x
          )
            f(y[x]), (d = h.lineHeight);
          Sh(m.after, f);
        }
        (u = 0), (d = h.lineHeight), Sh(this.afterBody, f), (t.y -= o);
      }
      drawFooter(t, e, n) {
        const i = this.footer,
          o = i.length;
        let s, r;
        if (o) {
          const a = rp(n.rtl, this.x, this.width);
          for (
            t.x = _m(this, n.footerAlign, n),
              t.y += n.footerMarginTop,
              e.textAlign = a.textAlign(n.footerAlign),
              e.textBaseline = "middle",
              s = mu(n.footerFont),
              e.fillStyle = n.footerColor,
              e.font = s.string,
              r = 0;
            r < o;
            ++r
          )
            e.fillText(i[r], a.x(t.x), t.y + s.lineHeight / 2),
              (t.y += s.lineHeight + n.footerSpacing);
        }
      }
      drawBackground(t, e, n, i) {
        const { xAlign: o, yAlign: s } = this,
          { x: r, y: a } = t,
          { width: l, height: c } = n,
          {
            topLeft: h,
            topRight: d,
            bottomLeft: u,
            bottomRight: p,
          } = fu(i.cornerRadius);
        (e.fillStyle = i.backgroundColor),
          (e.strokeStyle = i.borderColor),
          (e.lineWidth = i.borderWidth),
          e.beginPath(),
          e.moveTo(r + h, a),
          "top" === s && this.drawCaret(t, e, n, i),
          e.lineTo(r + l - d, a),
          e.quadraticCurveTo(r + l, a, r + l, a + d),
          "center" === s && "right" === o && this.drawCaret(t, e, n, i),
          e.lineTo(r + l, a + c - p),
          e.quadraticCurveTo(r + l, a + c, r + l - p, a + c),
          "bottom" === s && this.drawCaret(t, e, n, i),
          e.lineTo(r + u, a + c),
          e.quadraticCurveTo(r, a + c, r, a + c - u),
          "center" === s && "left" === o && this.drawCaret(t, e, n, i),
          e.lineTo(r, a + h),
          e.quadraticCurveTo(r, a, r + h, a),
          e.closePath(),
          e.fill(),
          i.borderWidth > 0 && e.stroke();
      }
      _updateAnimationTarget(t) {
        const e = this.chart,
          n = this.$animations,
          i = n && n.x,
          o = n && n.y;
        if (i || o) {
          const n = pm[t.position].call(
            this,
            this._active,
            this._eventPosition
          );
          if (!n) return;
          const s = (this._size = bm(this, t)),
            r = Object.assign({}, n, this._size),
            a = vm(e, t, r),
            l = xm(t, r, a, e);
          (i._to === l.x && o._to === l.y) ||
            ((this.xAlign = a.xAlign),
            (this.yAlign = a.yAlign),
            (this.width = s.width),
            (this.height = s.height),
            (this.caretX = n.x),
            (this.caretY = n.y),
            this._resolveAnimations().update(this, l));
        }
      }
      draw(t) {
        const e = this.options.setContext(this.getContext());
        let n = this.opacity;
        if (!n) return;
        this._updateAnimationTarget(e);
        const i = { width: this.width, height: this.height },
          o = { x: this.x, y: this.y };
        n = Math.abs(n) < 0.001 ? 0 : n;
        const s = gu(e.padding),
          r =
            this.title.length ||
            this.beforeBody.length ||
            this.body.length ||
            this.afterBody.length ||
            this.footer.length;
        e.enabled &&
          r &&
          (t.save(),
          (t.globalAlpha = n),
          this.drawBackground(o, t, i, e),
          ap(t, e.textDirection),
          (o.y += s.top),
          this.drawTitle(o, t, e),
          this.drawBody(o, t, e),
          this.drawFooter(o, t, e),
          lp(t, e.textDirection),
          t.restore());
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(t, e) {
        const n = this._active,
          i = t.map(({ datasetIndex: t, index: e }) => {
            const n = this.chart.getDatasetMeta(t);
            if (!n) throw new Error("Cannot find a dataset at index " + t);
            return { datasetIndex: t, element: n.data[e], index: e };
          }),
          o = !Ch(n, i),
          s = this._positionChanged(i, e);
        (o || s) &&
          ((this._active = i),
          (this._eventPosition = e),
          (this._ignoreReplayEvents = !0),
          this.update(!0));
      }
      handleEvent(t, e, n = !0) {
        if (e && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        const i = this.options,
          o = this._active || [],
          s = this._getActiveElements(t, o, e, n),
          r = this._positionChanged(s, t),
          a = e || !Ch(s, o) || r;
        return (
          a &&
            ((this._active = s),
            (i.enabled || i.external) &&
              ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
          a
        );
      }
      _getActiveElements(t, e, n, i) {
        const o = this.options;
        if ("mouseout" === t.type) return [];
        if (!i) return e;
        const s = this.chart.getElementsAtEventForMode(t, o.mode, o, n);
        return o.reverse && s.reverse(), s;
      }
      _positionChanged(t, e) {
        const { caretX: n, caretY: i, options: o } = this,
          s = pm[o.position].call(this, t, e);
        return !1 !== s && (n !== s.x || i !== s.y);
      }
    }
    Sm.positioners = pm;
    var Cm = {
        id: "tooltip",
        _element: Sm,
        positioners: pm,
        afterInit(t, e, n) {
          n && (t.tooltip = new Sm({ chart: t, options: n }));
        },
        beforeUpdate(t, e, n) {
          t.tooltip && t.tooltip.initialize(n);
        },
        reset(t, e, n) {
          t.tooltip && t.tooltip.initialize(n);
        },
        afterDraw(t) {
          const e = t.tooltip,
            n = { tooltip: e };
          !1 !== t.notifyPlugins("beforeTooltipDraw", n) &&
            (e && e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", n));
        },
        afterEvent(t, e) {
          if (t.tooltip) {
            const n = e.replay;
            t.tooltip.handleEvent(e.event, n, e.inChartArea) &&
              (e.changed = !0);
          }
        },
        defaults: {
          enabled: !0,
          external: null,
          position: "average",
          backgroundColor: "rgba(0,0,0,0.8)",
          titleColor: "#fff",
          titleFont: { weight: "bold" },
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleAlign: "left",
          bodyColor: "#fff",
          bodySpacing: 2,
          bodyFont: {},
          bodyAlign: "left",
          footerColor: "#fff",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFont: { weight: "bold" },
          footerAlign: "left",
          padding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          boxHeight: (t, e) => e.bodyFont.size,
          boxWidth: (t, e) => e.bodyFont.size,
          multiKeyBackground: "#fff",
          displayColors: !0,
          boxPadding: 0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          animation: { duration: 400, easing: "easeOutQuart" },
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "width", "height", "caretX", "caretY"],
            },
            opacity: { easing: "linear", duration: 200 },
          },
          callbacks: {
            beforeTitle: fh,
            title(t) {
              if (t.length > 0) {
                const e = t[0],
                  n = e.chart.data.labels,
                  i = n ? n.length : 0;
                if (this && this.options && "dataset" === this.options.mode)
                  return e.dataset.label || "";
                if (e.label) return e.label;
                if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
              }
              return "";
            },
            afterTitle: fh,
            beforeBody: fh,
            beforeLabel: fh,
            label(t) {
              if (this && this.options && "dataset" === this.options.mode)
                return t.label + ": " + t.formattedValue || t.formattedValue;
              let e = t.dataset.label || "";
              e && (e += ": ");
              const n = t.formattedValue;
              return mh(n) || (e += n), e;
            },
            labelColor(t) {
              const e = t.chart
                .getDatasetMeta(t.datasetIndex)
                .controller.getStyle(t.dataIndex);
              return {
                borderColor: e.borderColor,
                backgroundColor: e.backgroundColor,
                borderWidth: e.borderWidth,
                borderDash: e.borderDash,
                borderDashOffset: e.borderDashOffset,
                borderRadius: 0,
              };
            },
            labelTextColor() {
              return this.options.bodyColor;
            },
            labelPointStyle(t) {
              const e = t.chart
                .getDatasetMeta(t.datasetIndex)
                .controller.getStyle(t.dataIndex);
              return { pointStyle: e.pointStyle, rotation: e.rotation };
            },
            afterLabel: fh,
            afterBody: fh,
            beforeFooter: fh,
            footer: fh,
            afterFooter: fh,
          },
        },
        defaultRoutes: {
          bodyFont: "font",
          footerFont: "font",
          titleFont: "font",
        },
        descriptors: {
          _scriptable: (t) =>
            "filter" !== t && "itemSort" !== t && "external" !== t,
          _indexable: !1,
          callbacks: { _scriptable: !1, _indexable: !1 },
          animation: { _fallback: !1 },
          animations: { _fallback: "animation" },
        },
        additionalOptionScopes: ["interaction"],
      },
      Tm = Object.freeze({
        __proto__: null,
        Decimation: Wg,
        Filler: sm,
        Legend: lm,
        SubTitle: um,
        Title: hm,
        Tooltip: Cm,
      });
    class Am extends Uf {
      constructor(t) {
        super(t),
          (this._startValue = void 0),
          (this._valueRange = 0),
          (this._addedLabels = []);
      }
      init(t) {
        const e = this._addedLabels;
        if (e.length) {
          const t = this.getLabels();
          for (const { index: n, label: i } of e) t[n] === i && t.splice(n, 1);
          this._addedLabels = [];
        }
        super.init(t);
      }
      parse(t, e) {
        if (mh(t)) return null;
        const n = this.getLabels();
        return ((t, e) => (null === t ? null : rd(Math.round(t), 0, e)))(
          (e =
            isFinite(e) && n[e] === t
              ? e
              : (function (t, e, n, i) {
                  const o = t.indexOf(e);
                  return -1 === o
                    ? ((t, e, n, i) => (
                        "string" == typeof e
                          ? ((n = t.push(e) - 1),
                            i.unshift({ index: n, label: e }))
                          : isNaN(e) && (n = null),
                        n
                      ))(t, e, n, i)
                    : o !== t.lastIndexOf(e)
                    ? n
                    : o;
                })(n, t, _h(e, t), this._addedLabels)),
          n.length - 1
        );
      }
      determineDataLimits() {
        const { minDefined: t, maxDefined: e } = this.getUserBounds();
        let { min: n, max: i } = this.getMinMax(!0);
        "ticks" === this.options.bounds &&
          (t || (n = 0), e || (i = this.getLabels().length - 1)),
          (this.min = n),
          (this.max = i);
      }
      buildTicks() {
        const t = this.min,
          e = this.max,
          n = this.options.offset,
          i = [];
        let o = this.getLabels();
        (o = 0 === t && e === o.length - 1 ? o : o.slice(t, e + 1)),
          (this._valueRange = Math.max(o.length - (n ? 0 : 1), 1)),
          (this._startValue = this.min - (n ? 0.5 : 0));
        for (let n = t; n <= e; n++) i.push({ value: n });
        return i;
      }
      getLabelForValue(t) {
        const e = this.getLabels();
        return t >= 0 && t < e.length ? e[t] : t;
      }
      configure() {
        super.configure(),
          this.isHorizontal() || (this._reversePixels = !this._reversePixels);
      }
      getPixelForValue(t) {
        return (
          "number" != typeof t && (t = this.parse(t)),
          null === t
            ? NaN
            : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
        );
      }
      getPixelForTick(t) {
        const e = this.ticks;
        return t < 0 || t > e.length - 1
          ? null
          : this.getPixelForValue(e[t].value);
      }
      getValueForPixel(t) {
        return Math.round(
          this._startValue + this.getDecimalForPixel(t) * this._valueRange
        );
      }
      getBasePixel() {
        return this.bottom;
      }
    }
    function Mm(t, e, { horizontal: n, minRotation: i }) {
      const o = Zh(i),
        s = (n ? Math.sin(o) : Math.cos(o)) || 0.001,
        r = 0.75 * e * ("" + t).length;
      return Math.min(e / s, r);
    }
    (Am.id = "category"),
      (Am.defaults = { ticks: { callback: Am.prototype.getLabelForValue } });
    class Pm extends Uf {
      constructor(t) {
        super(t),
          (this.start = void 0),
          (this.end = void 0),
          (this._startValue = void 0),
          (this._endValue = void 0),
          (this._valueRange = 0);
      }
      parse(t, e) {
        return mh(t) ||
          (("number" == typeof t || t instanceof Number) && !isFinite(+t))
          ? null
          : +t;
      }
      handleTickRangeOptions() {
        const { beginAtZero: t } = this.options,
          { minDefined: e, maxDefined: n } = this.getUserBounds();
        let { min: i, max: o } = this;
        const s = (t) => (i = e ? i : t),
          r = (t) => (o = n ? o : t);
        if (t) {
          const t = Gh(i),
            e = Gh(o);
          t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && s(0);
        }
        if (i === o) {
          let e = 1;
          (o >= Number.MAX_SAFE_INTEGER || i <= Number.MIN_SAFE_INTEGER) &&
            (e = Math.abs(0.05 * o)),
            r(o + e),
            t || s(i - e);
        }
        (this.min = i), (this.max = o);
      }
      getTickLimit() {
        const t = this.options.ticks;
        let e,
          { maxTicksLimit: n, stepSize: i } = t;
        return (
          i
            ? ((e = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
              e > 1e3 &&
                (console.warn(
                  `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${e} ticks. Limiting to 1000.`
                ),
                (e = 1e3)))
            : ((e = this.computeTickLimit()), (n = n || 11)),
          n && (e = Math.min(n, e)),
          e
        );
      }
      computeTickLimit() {
        return Number.POSITIVE_INFINITY;
      }
      buildTicks() {
        const t = this.options,
          e = t.ticks;
        let n = this.getTickLimit();
        n = Math.max(2, n);
        const i = (function (t, e) {
          const n = [],
            {
              bounds: i,
              step: o,
              min: s,
              max: r,
              precision: a,
              count: l,
              maxTicks: c,
              maxDigits: h,
              includeBounds: d,
            } = t,
            u = o || 1,
            p = c - 1,
            { min: f, max: g } = e,
            m = !mh(s),
            b = !mh(r),
            y = !mh(l),
            v = (g - f) / (h + 1);
          let x,
            _,
            w,
            k,
            S = Yh((g - f) / p / u) * u;
          if (S < 1e-14 && !m && !b) return [{ value: f }, { value: g }];
          (k = Math.ceil(g / S) - Math.floor(f / S)),
            k > p && (S = Yh((k * S) / p / u) * u),
            mh(a) || ((x = Math.pow(10, a)), (S = Math.ceil(S * x) / x)),
            "ticks" === i
              ? ((_ = Math.floor(f / S) * S), (w = Math.ceil(g / S) * S))
              : ((_ = f), (w = g)),
            m &&
            b &&
            o &&
            (function (t, e) {
              const n = Math.round(t);
              return n - e <= t && n + e >= t;
            })((r - s) / o, S / 1e3)
              ? ((k = Math.round(Math.min((r - s) / S, c))),
                (S = (r - s) / k),
                (_ = s),
                (w = r))
              : y
              ? ((_ = m ? s : _),
                (w = b ? r : w),
                (k = l - 1),
                (S = (w - _) / k))
              : ((k = (w - _) / S),
                (k = Jh(k, Math.round(k), S / 1e3)
                  ? Math.round(k)
                  : Math.ceil(k)));
          const C = Math.max(td(S), td(_));
          (x = Math.pow(10, mh(a) ? C : a)),
            (_ = Math.round(_ * x) / x),
            (w = Math.round(w * x) / x);
          let T = 0;
          for (
            m &&
            (d && _ !== s
              ? (n.push({ value: s }),
                _ < s && T++,
                Jh(Math.round((_ + T * S) * x) / x, s, Mm(s, v, t)) && T++)
              : _ < s && T++);
            T < k;
            ++T
          )
            n.push({ value: Math.round((_ + T * S) * x) / x });
          return (
            b && d && w !== r
              ? n.length && Jh(n[n.length - 1].value, r, Mm(r, v, t))
                ? (n[n.length - 1].value = r)
                : n.push({ value: r })
              : (b && w !== r) || n.push({ value: w }),
            n
          );
        })(
          {
            maxTicks: n,
            bounds: t.bounds,
            min: t.min,
            max: t.max,
            precision: e.precision,
            step: e.stepSize,
            count: e.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: e.minRotation || 0,
            includeBounds: !1 !== e.includeBounds,
          },
          this._range || this
        );
        return (
          "ticks" === t.bounds && Xh(i, this, "value"),
          t.reverse
            ? (i.reverse(), (this.start = this.max), (this.end = this.min))
            : ((this.start = this.min), (this.end = this.max)),
          i
        );
      }
      configure() {
        const t = this.ticks;
        let e = this.min,
          n = this.max;
        if ((super.configure(), this.options.offset && t.length)) {
          const i = (n - e) / Math.max(t.length - 1, 1) / 2;
          (e -= i), (n += i);
        }
        (this._startValue = e),
          (this._endValue = n),
          (this._valueRange = n - e);
      }
      getLabelForValue(t) {
        return sp(t, this.chart.options.locale, this.options.ticks.format);
      }
    }
    class Dm extends Pm {
      determineDataLimits() {
        const { min: t, max: e } = this.getMinMax(!0);
        (this.min = vh(t) ? t : 0),
          (this.max = vh(e) ? e : 1),
          this.handleTickRangeOptions();
      }
      computeTickLimit() {
        const t = this.isHorizontal(),
          e = t ? this.width : this.height,
          n = Zh(this.options.ticks.minRotation),
          i = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
          o = this._resolveTickFontOptions(0);
        return Math.ceil(e / Math.min(40, o.lineHeight / i));
      }
      getPixelForValue(t) {
        return null === t
          ? NaN
          : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
      }
      getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
      }
    }
    function Rm(t) {
      return 1 == t / Math.pow(10, Math.floor(qh(t)));
    }
    (Dm.id = "linear"),
      (Dm.defaults = { ticks: { callback: Ff.formatters.numeric } });
    class Om extends Uf {
      constructor(t) {
        super(t),
          (this.start = void 0),
          (this.end = void 0),
          (this._startValue = void 0),
          (this._valueRange = 0);
      }
      parse(t, e) {
        const n = Pm.prototype.parse.apply(this, [t, e]);
        if (0 !== n) return vh(n) && n > 0 ? n : null;
        this._zero = !0;
      }
      determineDataLimits() {
        const { min: t, max: e } = this.getMinMax(!0);
        (this.min = vh(t) ? Math.max(0, t) : null),
          (this.max = vh(e) ? Math.max(0, e) : null),
          this.options.beginAtZero && (this._zero = !0),
          this.handleTickRangeOptions();
      }
      handleTickRangeOptions() {
        const { minDefined: t, maxDefined: e } = this.getUserBounds();
        let n = this.min,
          i = this.max;
        const o = (e) => (n = t ? n : e),
          s = (t) => (i = e ? i : t),
          r = (t, e) => Math.pow(10, Math.floor(qh(t)) + e);
        n === i && (n <= 0 ? (o(1), s(10)) : (o(r(n, -1)), s(r(i, 1)))),
          n <= 0 && o(r(i, -1)),
          i <= 0 && s(r(n, 1)),
          this._zero &&
            this.min !== this._suggestedMin &&
            n === r(this.min, 0) &&
            o(r(n, -1)),
          (this.min = n),
          (this.max = i);
      }
      buildTicks() {
        const t = this.options,
          e = (function (t, e) {
            const n = Math.floor(qh(e.max)),
              i = Math.ceil(e.max / Math.pow(10, n)),
              o = [];
            let s = xh(t.min, Math.pow(10, Math.floor(qh(e.min)))),
              r = Math.floor(qh(s)),
              a = Math.floor(s / Math.pow(10, r)),
              l = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
            do {
              o.push({ value: s, major: Rm(s) }),
                ++a,
                10 === a && ((a = 1), ++r, (l = r >= 0 ? 1 : l)),
                (s = Math.round(a * Math.pow(10, r) * l) / l);
            } while (r < n || (r === n && a < i));
            const c = xh(t.max, s);
            return o.push({ value: c, major: Rm(s) }), o;
          })({ min: this._userMin, max: this._userMax }, this);
        return (
          "ticks" === t.bounds && Xh(e, this, "value"),
          t.reverse
            ? (e.reverse(), (this.start = this.max), (this.end = this.min))
            : ((this.start = this.min), (this.end = this.max)),
          e
        );
      }
      getLabelForValue(t) {
        return void 0 === t
          ? "0"
          : sp(t, this.chart.options.locale, this.options.ticks.format);
      }
      configure() {
        const t = this.min;
        super.configure(),
          (this._startValue = qh(t)),
          (this._valueRange = qh(this.max) - qh(t));
      }
      getPixelForValue(t) {
        return (
          (void 0 !== t && 0 !== t) || (t = this.min),
          null === t || isNaN(t)
            ? NaN
            : this.getPixelForDecimal(
                t === this.min
                  ? 0
                  : (qh(t) - this._startValue) / this._valueRange
              )
        );
      }
      getValueForPixel(t) {
        const e = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + e * this._valueRange);
      }
    }
    function Em(t) {
      const e = t.ticks;
      if (e.display && t.display) {
        const t = gu(e.backdropPadding);
        return _h(e.font && e.font.size, Yd.font.size) + t.height;
      }
      return 0;
    }
    function Lm(t, e, n, i, o) {
      return t === i || t === o
        ? { start: e - n / 2, end: e + n / 2 }
        : t < i || t > o
        ? { start: e - n, end: e }
        : { start: e, end: e + n };
    }
    function Im(t, e, n, i, o) {
      const s = Math.abs(Math.sin(n)),
        r = Math.abs(Math.cos(n));
      let a = 0,
        l = 0;
      i.start < e.l
        ? ((a = (e.l - i.start) / s), (t.l = Math.min(t.l, e.l - a)))
        : i.end > e.r &&
          ((a = (i.end - e.r) / s), (t.r = Math.max(t.r, e.r + a))),
        o.start < e.t
          ? ((l = (e.t - o.start) / r), (t.t = Math.min(t.t, e.t - l)))
          : o.end > e.b &&
            ((l = (o.end - e.b) / r), (t.b = Math.max(t.b, e.b + l)));
    }
    function Vm(t) {
      return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
    }
    function Fm(t, e, n) {
      return "right" === n ? (t -= e) : "center" === n && (t -= e / 2), t;
    }
    function Nm(t, e, n) {
      return (
        90 === n || 270 === n ? (t -= e / 2) : (n > 270 || n < 90) && (t -= e),
        t
      );
    }
    function Bm(t, e, n, i) {
      const { ctx: o } = t;
      if (n) o.arc(t.xCenter, t.yCenter, e, 0, Bh);
      else {
        let n = t.getPointPosition(0, e);
        o.moveTo(n.x, n.y);
        for (let s = 1; s < i; s++)
          (n = t.getPointPosition(s, e)), o.lineTo(n.x, n.y);
      }
    }
    (Om.id = "logarithmic"),
      (Om.defaults = {
        ticks: { callback: Ff.formatters.logarithmic, major: { enabled: !0 } },
      });
    class jm extends Pm {
      constructor(t) {
        super(t),
          (this.xCenter = void 0),
          (this.yCenter = void 0),
          (this.drawingArea = void 0),
          (this._pointLabels = []),
          (this._pointLabelItems = []);
      }
      setDimensions() {
        const t = (this._padding = gu(Em(this.options) / 2)),
          e = (this.width = this.maxWidth - t.width),
          n = (this.height = this.maxHeight - t.height);
        (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
          (this.yCenter = Math.floor(this.top + n / 2 + t.top)),
          (this.drawingArea = Math.floor(Math.min(e, n) / 2));
      }
      determineDataLimits() {
        const { min: t, max: e } = this.getMinMax(!1);
        (this.min = vh(t) && !isNaN(t) ? t : 0),
          (this.max = vh(e) && !isNaN(e) ? e : 0),
          this.handleTickRangeOptions();
      }
      computeTickLimit() {
        return Math.ceil(this.drawingArea / Em(this.options));
      }
      generateTickLabels(t) {
        Pm.prototype.generateTickLabels.call(this, t),
          (this._pointLabels = this.getLabels()
            .map((t, e) => {
              const n = kh(this.options.pointLabels.callback, [t, e], this);
              return n || 0 === n ? n : "";
            })
            .filter((t, e) => this.chart.getDataVisibility(e)));
      }
      fit() {
        const t = this.options;
        t.display && t.pointLabels.display
          ? (function (t) {
              const e = {
                  l: t.left + t._padding.left,
                  r: t.right - t._padding.right,
                  t: t.top + t._padding.top,
                  b: t.bottom - t._padding.bottom,
                },
                n = Object.assign({}, e),
                i = [],
                o = [],
                s = t._pointLabels.length,
                r = t.options.pointLabels,
                a = r.centerPointLabels ? Nh / s : 0;
              for (let d = 0; d < s; d++) {
                const s = r.setContext(t.getPointLabelContext(d));
                o[d] = s.padding;
                const u = t.getPointPosition(d, t.drawingArea + o[d], a),
                  p = mu(s.font),
                  f =
                    ((l = t.ctx),
                    (c = p),
                    (h = bh((h = t._pointLabels[d])) ? h : [h]),
                    { w: Jd(l, c.string, h), h: h.length * c.lineHeight });
                i[d] = f;
                const g = od(t.getIndexAngle(d) + a),
                  m = Math.round(Qh(g));
                Im(n, e, g, Lm(m, u.x, f.w, 0, 180), Lm(m, u.y, f.h, 90, 270));
              }
              var l, c, h;
              t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
                (t._pointLabelItems = (function (t, e, n) {
                  const i = [],
                    o = t._pointLabels.length,
                    s = t.options,
                    r = Em(s) / 2,
                    a = t.drawingArea,
                    l = s.pointLabels.centerPointLabels ? Nh / o : 0;
                  for (let s = 0; s < o; s++) {
                    const o = t.getPointPosition(s, a + r + n[s], l),
                      c = Math.round(Qh(od(o.angle + Wh))),
                      h = e[s],
                      d = Nm(o.y, h.h, c),
                      u = Vm(c),
                      p = Fm(o.x, h.w, u);
                    i.push({
                      x: o.x,
                      y: d,
                      textAlign: u,
                      left: p,
                      top: d,
                      right: p + h.w,
                      bottom: d + h.h,
                    });
                  }
                  return i;
                })(t, i, o));
            })(this)
          : this.setCenterPoint(0, 0, 0, 0);
      }
      setCenterPoint(t, e, n, i) {
        (this.xCenter += Math.floor((t - e) / 2)),
          (this.yCenter += Math.floor((n - i) / 2)),
          (this.drawingArea -= Math.min(
            this.drawingArea / 2,
            Math.max(t, e, n, i)
          ));
      }
      getIndexAngle(t) {
        return od(
          t * (Bh / (this._pointLabels.length || 1)) +
            Zh(this.options.startAngle || 0)
        );
      }
      getDistanceFromCenterForValue(t) {
        if (mh(t)) return NaN;
        const e = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
      }
      getValueForDistanceFromCenter(t) {
        if (mh(t)) return NaN;
        const e = t / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - e : this.min + e;
      }
      getPointLabelContext(t) {
        const e = this._pointLabels || [];
        if (t >= 0 && t < e.length) {
          const n = e[t];
          return (function (t, e, n) {
            return yu(t, { label: n, index: e, type: "pointLabel" });
          })(this.getContext(), t, n);
        }
      }
      getPointPosition(t, e, n = 0) {
        const i = this.getIndexAngle(t) - Wh + n;
        return {
          x: Math.cos(i) * e + this.xCenter,
          y: Math.sin(i) * e + this.yCenter,
          angle: i,
        };
      }
      getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
      }
      getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue());
      }
      getPointLabelPosition(t) {
        const {
          left: e,
          top: n,
          right: i,
          bottom: o,
        } = this._pointLabelItems[t];
        return { left: e, top: n, right: i, bottom: o };
      }
      drawBackground() {
        const {
          backgroundColor: t,
          grid: { circular: e },
        } = this.options;
        if (t) {
          const n = this.ctx;
          n.save(),
            n.beginPath(),
            Bm(
              this,
              this.getDistanceFromCenterForValue(this._endValue),
              e,
              this._pointLabels.length
            ),
            n.closePath(),
            (n.fillStyle = t),
            n.fill(),
            n.restore();
        }
      }
      drawGrid() {
        const t = this.ctx,
          e = this.options,
          { angleLines: n, grid: i } = e,
          o = this._pointLabels.length;
        let s, r, a;
        if (
          (e.pointLabels.display &&
            (function (t, e) {
              const {
                ctx: n,
                options: { pointLabels: i },
              } = t;
              for (let o = e - 1; o >= 0; o--) {
                const e = i.setContext(t.getPointLabelContext(o)),
                  s = mu(e.font),
                  {
                    x: r,
                    y: a,
                    textAlign: l,
                    left: c,
                    top: h,
                    right: d,
                    bottom: u,
                  } = t._pointLabelItems[o],
                  { backdropColor: p } = e;
                if (!mh(p)) {
                  const t = gu(e.backdropPadding);
                  (n.fillStyle = p),
                    n.fillRect(
                      c - t.left,
                      h - t.top,
                      d - c + t.width,
                      u - h + t.height
                    );
                }
                su(n, t._pointLabels[o], r, a + s.lineHeight / 2, s, {
                  color: e.color,
                  textAlign: l,
                  textBaseline: "middle",
                });
              }
            })(this, o),
          i.display &&
            this.ticks.forEach((t, e) => {
              0 !== e &&
                ((r = this.getDistanceFromCenterForValue(t.value)),
                (function (t, e, n, i) {
                  const o = t.ctx,
                    s = e.circular,
                    { color: r, lineWidth: a } = e;
                  (!s && !i) ||
                    !r ||
                    !a ||
                    n < 0 ||
                    (o.save(),
                    (o.strokeStyle = r),
                    (o.lineWidth = a),
                    o.setLineDash(e.borderDash),
                    (o.lineDashOffset = e.borderDashOffset),
                    o.beginPath(),
                    Bm(t, n, s, i),
                    o.closePath(),
                    o.stroke(),
                    o.restore());
                })(this, i.setContext(this.getContext(e - 1)), r, o));
            }),
          n.display)
        ) {
          for (t.save(), s = o - 1; s >= 0; s--) {
            const i = n.setContext(this.getPointLabelContext(s)),
              { color: o, lineWidth: l } = i;
            l &&
              o &&
              ((t.lineWidth = l),
              (t.strokeStyle = o),
              t.setLineDash(i.borderDash),
              (t.lineDashOffset = i.borderDashOffset),
              (r = this.getDistanceFromCenterForValue(
                e.ticks.reverse ? this.min : this.max
              )),
              (a = this.getPointPosition(s, r)),
              t.beginPath(),
              t.moveTo(this.xCenter, this.yCenter),
              t.lineTo(a.x, a.y),
              t.stroke());
          }
          t.restore();
        }
      }
      drawBorder() {}
      drawLabels() {
        const t = this.ctx,
          e = this.options,
          n = e.ticks;
        if (!n.display) return;
        const i = this.getIndexAngle(0);
        let o, s;
        t.save(),
          t.translate(this.xCenter, this.yCenter),
          t.rotate(i),
          (t.textAlign = "center"),
          (t.textBaseline = "middle"),
          this.ticks.forEach((i, r) => {
            if (0 === r && !e.reverse) return;
            const a = n.setContext(this.getContext(r)),
              l = mu(a.font);
            if (
              ((o = this.getDistanceFromCenterForValue(this.ticks[r].value)),
              a.showLabelBackdrop)
            ) {
              (t.font = l.string),
                (s = t.measureText(i.label).width),
                (t.fillStyle = a.backdropColor);
              const e = gu(a.backdropPadding);
              t.fillRect(
                -s / 2 - e.left,
                -o - l.size / 2 - e.top,
                s + e.width,
                l.size + e.height
              );
            }
            su(t, i.label, 0, -o, l, { color: a.color });
          }),
          t.restore();
      }
      drawTitle() {}
    }
    (jm.id = "radialLinear"),
      (jm.defaults = {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {
          display: !0,
          lineWidth: 1,
          borderDash: [],
          borderDashOffset: 0,
        },
        grid: { circular: !1 },
        startAngle: 0,
        ticks: { showLabelBackdrop: !0, callback: Ff.formatters.numeric },
        pointLabels: {
          backdropColor: void 0,
          backdropPadding: 2,
          display: !0,
          font: { size: 10 },
          callback: (t) => t,
          padding: 5,
          centerPointLabels: !1,
        },
      }),
      (jm.defaultRoutes = {
        "angleLines.color": "borderColor",
        "pointLabels.color": "color",
        "ticks.color": "color",
      }),
      (jm.descriptors = { angleLines: { _fallback: "grid" } });
    const zm = {
        millisecond: { common: !0, size: 1, steps: 1e3 },
        second: { common: !0, size: 1e3, steps: 60 },
        minute: { common: !0, size: 6e4, steps: 60 },
        hour: { common: !0, size: 36e5, steps: 24 },
        day: { common: !0, size: 864e5, steps: 30 },
        week: { common: !1, size: 6048e5, steps: 4 },
        month: { common: !0, size: 2628e6, steps: 12 },
        quarter: { common: !1, size: 7884e6, steps: 4 },
        year: { common: !0, size: 3154e7 },
      },
      $m = Object.keys(zm);
    function Wm(t, e) {
      return t - e;
    }
    function Hm(t, e) {
      if (mh(e)) return null;
      const n = t._adapter,
        { parser: i, round: o, isoWeekday: s } = t._parseOpts;
      let r = e;
      return (
        "function" == typeof i && (r = i(r)),
        vh(r) || (r = "string" == typeof i ? n.parse(r, i) : n.parse(r)),
        null === r
          ? null
          : (o &&
              (r =
                "week" !== o || (!Kh(s) && !0 !== s)
                  ? n.startOf(r, o)
                  : n.startOf(r, "isoWeek", s)),
            +r)
      );
    }
    function Um(t, e, n, i) {
      const o = $m.length;
      for (let s = $m.indexOf(t); s < o - 1; ++s) {
        const t = zm[$m[s]],
          o = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
        if (t.common && Math.ceil((n - e) / (o * t.size)) <= i) return $m[s];
      }
      return $m[o - 1];
    }
    function qm(t, e, n) {
      if (n) {
        if (n.length) {
          const { lo: i, hi: o } = vu(n, e);
          t[n[i] >= e ? n[i] : n[o]] = !0;
        }
      } else t[e] = !0;
    }
    function Gm(t, e, n) {
      const i = [],
        o = {},
        s = e.length;
      let r, a;
      for (r = 0; r < s; ++r)
        (a = e[r]), (o[a] = r), i.push({ value: a, major: !1 });
      return 0 !== s && n
        ? (function (t, e, n, i) {
            const o = t._adapter,
              s = +o.startOf(e[0].value, i),
              r = e[e.length - 1].value;
            let a, l;
            for (a = s; a <= r; a = +o.add(a, 1, i))
              (l = n[a]), l >= 0 && (e[l].major = !0);
            return e;
          })(t, i, o, n)
        : i;
    }
    class Ym extends Uf {
      constructor(t) {
        super(t),
          (this._cache = { data: [], labels: [], all: [] }),
          (this._unit = "day"),
          (this._majorUnit = void 0),
          (this._offsets = {}),
          (this._normalized = !1),
          (this._parseOpts = void 0);
      }
      init(t, e) {
        const n = t.time || (t.time = {}),
          i = (this._adapter = new Zp._date(t.adapters.date));
        Dh(n.displayFormats, i.formats()),
          (this._parseOpts = {
            parser: n.parser,
            round: n.round,
            isoWeekday: n.isoWeekday,
          }),
          super.init(t),
          (this._normalized = e.normalized);
      }
      parse(t, e) {
        return void 0 === t ? null : Hm(this, t);
      }
      beforeLayout() {
        super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
      }
      determineDataLimits() {
        const t = this.options,
          e = this._adapter,
          n = t.time.unit || "day";
        let {
          min: i,
          max: o,
          minDefined: s,
          maxDefined: r,
        } = this.getUserBounds();
        function a(t) {
          s || isNaN(t.min) || (i = Math.min(i, t.min)),
            r || isNaN(t.max) || (o = Math.max(o, t.max));
        }
        (s && r) ||
          (a(this._getLabelBounds()),
          ("ticks" === t.bounds && "labels" === t.ticks.source) ||
            a(this.getMinMax(!1))),
          (i = vh(i) && !isNaN(i) ? i : +e.startOf(Date.now(), n)),
          (o = vh(o) && !isNaN(o) ? o : +e.endOf(Date.now(), n) + 1),
          (this.min = Math.min(i, o - 1)),
          (this.max = Math.max(i + 1, o));
      }
      _getLabelBounds() {
        const t = this.getLabelTimestamps();
        let e = Number.POSITIVE_INFINITY,
          n = Number.NEGATIVE_INFINITY;
        return (
          t.length && ((e = t[0]), (n = t[t.length - 1])), { min: e, max: n }
        );
      }
      buildTicks() {
        const t = this.options,
          e = t.time,
          n = t.ticks,
          i =
            "labels" === n.source
              ? this.getLabelTimestamps()
              : this._generate();
        "ticks" === t.bounds &&
          i.length &&
          ((this.min = this._userMin || i[0]),
          (this.max = this._userMax || i[i.length - 1]));
        const o = this.min,
          s = (function (t, e, n) {
            let i = 0,
              o = t.length;
            for (; i < o && t[i] < e; ) i++;
            for (; o > i && t[o - 1] > n; ) o--;
            return i > 0 || o < t.length ? t.slice(i, o) : t;
          })(i, o, this.max);
        return (
          (this._unit =
            e.unit ||
            (n.autoSkip
              ? Um(e.minUnit, this.min, this.max, this._getLabelCapacity(o))
              : (function (t, e, n, i, o) {
                  for (let s = $m.length - 1; s >= $m.indexOf(n); s--) {
                    const n = $m[s];
                    if (zm[n].common && t._adapter.diff(o, i, n) >= e - 1)
                      return n;
                  }
                  return $m[n ? $m.indexOf(n) : 0];
                })(this, s.length, e.minUnit, this.min, this.max))),
          (this._majorUnit =
            n.major.enabled && "year" !== this._unit
              ? (function (t) {
                  for (let e = $m.indexOf(t) + 1, n = $m.length; e < n; ++e)
                    if (zm[$m[e]].common) return $m[e];
                })(this._unit)
              : void 0),
          this.initOffsets(i),
          t.reverse && s.reverse(),
          Gm(this, s, this._majorUnit)
        );
      }
      initOffsets(t) {
        let e,
          n,
          i = 0,
          o = 0;
        this.options.offset &&
          t.length &&
          ((e = this.getDecimalForValue(t[0])),
          (i =
            1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
          (n = this.getDecimalForValue(t[t.length - 1])),
          (o =
            1 === t.length
              ? n
              : (n - this.getDecimalForValue(t[t.length - 2])) / 2));
        const s = t.length < 3 ? 0.5 : 0.25;
        (i = rd(i, 0, s)),
          (o = rd(o, 0, s)),
          (this._offsets = { start: i, end: o, factor: 1 / (i + 1 + o) });
      }
      _generate() {
        const t = this._adapter,
          e = this.min,
          n = this.max,
          i = this.options,
          o = i.time,
          s = o.unit || Um(o.minUnit, e, n, this._getLabelCapacity(e)),
          r = _h(o.stepSize, 1),
          a = "week" === s && o.isoWeekday,
          l = Kh(a) || !0 === a,
          c = {};
        let h,
          d,
          u = e;
        if (
          (l && (u = +t.startOf(u, "isoWeek", a)),
          (u = +t.startOf(u, l ? "day" : s)),
          t.diff(n, e, s) > 1e5 * r)
        )
          throw new Error(
            e +
              " and " +
              n +
              " are too far apart with stepSize of " +
              r +
              " " +
              s
          );
        const p = "data" === i.ticks.source && this.getDataTimestamps();
        for (h = u, d = 0; h < n; h = +t.add(h, r, s), d++) qm(c, h, p);
        return (
          (h !== n && "ticks" !== i.bounds && 1 !== d) || qm(c, h, p),
          Object.keys(c)
            .sort((t, e) => t - e)
            .map((t) => +t)
        );
      }
      getLabelForValue(t) {
        const e = this._adapter,
          n = this.options.time;
        return n.tooltipFormat
          ? e.format(t, n.tooltipFormat)
          : e.format(t, n.displayFormats.datetime);
      }
      _tickFormatFunction(t, e, n, i) {
        const o = this.options,
          s = o.time.displayFormats,
          r = this._unit,
          a = this._majorUnit,
          l = r && s[r],
          c = a && s[a],
          h = n[e],
          d = a && c && h && h.major,
          u = this._adapter.format(t, i || (d ? c : l)),
          p = o.ticks.callback;
        return p ? kh(p, [u, e, n], this) : u;
      }
      generateTickLabels(t) {
        let e, n, i;
        for (e = 0, n = t.length; e < n; ++e)
          (i = t[e]), (i.label = this._tickFormatFunction(i.value, e, t));
      }
      getDecimalForValue(t) {
        return null === t ? NaN : (t - this.min) / (this.max - this.min);
      }
      getPixelForValue(t) {
        const e = this._offsets,
          n = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + n) * e.factor);
      }
      getValueForPixel(t) {
        const e = this._offsets,
          n = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + n * (this.max - this.min);
      }
      _getLabelSize(t) {
        const e = this.options.ticks,
          n = this.ctx.measureText(t).width,
          i = Zh(this.isHorizontal() ? e.maxRotation : e.minRotation),
          o = Math.cos(i),
          s = Math.sin(i),
          r = this._resolveTickFontOptions(0).size;
        return { w: n * o + r * s, h: n * s + r * o };
      }
      _getLabelCapacity(t) {
        const e = this.options.time,
          n = e.displayFormats,
          i = n[e.unit] || n.millisecond,
          o = this._tickFormatFunction(t, 0, Gm(this, [t], this._majorUnit), i),
          s = this._getLabelSize(o),
          r =
            Math.floor(
              this.isHorizontal() ? this.width / s.w : this.height / s.h
            ) - 1;
        return r > 0 ? r : 1;
      }
      getDataTimestamps() {
        let t,
          e,
          n = this._cache.data || [];
        if (n.length) return n;
        const i = this.getMatchingVisibleMetas();
        if (this._normalized && i.length)
          return (this._cache.data = i[0].controller.getAllParsedValues(this));
        for (t = 0, e = i.length; t < e; ++t)
          n = n.concat(i[t].controller.getAllParsedValues(this));
        return (this._cache.data = this.normalize(n));
      }
      getLabelTimestamps() {
        const t = this._cache.labels || [];
        let e, n;
        if (t.length) return t;
        const i = this.getLabels();
        for (e = 0, n = i.length; e < n; ++e) t.push(Hm(this, i[e]));
        return (this._cache.labels = this._normalized ? t : this.normalize(t));
      }
      normalize(t) {
        return Su(t.sort(Wm));
      }
    }
    function Km(t, e, n) {
      let i,
        o,
        s,
        r,
        a = 0,
        l = t.length - 1;
      n
        ? (e >= t[a].pos &&
            e <= t[l].pos &&
            ({ lo: a, hi: l } = xu(t, "pos", e)),
          ({ pos: i, time: s } = t[a]),
          ({ pos: o, time: r } = t[l]))
        : (e >= t[a].time &&
            e <= t[l].time &&
            ({ lo: a, hi: l } = xu(t, "time", e)),
          ({ time: i, pos: s } = t[a]),
          ({ time: o, pos: r } = t[l]));
      const c = o - i;
      return c ? s + ((r - s) * (e - i)) / c : s;
    }
    (Ym.id = "time"),
      (Ym.defaults = {
        bounds: "data",
        adapters: {},
        time: {
          parser: !1,
          unit: !1,
          round: !1,
          isoWeekday: !1,
          minUnit: "millisecond",
          displayFormats: {},
        },
        ticks: { source: "auto", major: { enabled: !1 } },
      });
    class Jm extends Ym {
      constructor(t) {
        super(t),
          (this._table = []),
          (this._minPos = void 0),
          (this._tableRange = void 0);
      }
      initOffsets() {
        const t = this._getTimestampsForTable(),
          e = (this._table = this.buildLookupTable(t));
        (this._minPos = Km(e, this.min)),
          (this._tableRange = Km(e, this.max) - this._minPos),
          super.initOffsets(t);
      }
      buildLookupTable(t) {
        const { min: e, max: n } = this,
          i = [],
          o = [];
        let s, r, a, l, c;
        for (s = 0, r = t.length; s < r; ++s)
          (l = t[s]), l >= e && l <= n && i.push(l);
        if (i.length < 2)
          return [
            { time: e, pos: 0 },
            { time: n, pos: 1 },
          ];
        for (s = 0, r = i.length; s < r; ++s)
          (c = i[s + 1]),
            (a = i[s - 1]),
            (l = i[s]),
            Math.round((c + a) / 2) !== l &&
              o.push({ time: l, pos: s / (r - 1) });
        return o;
      }
      _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length) return t;
        const e = this.getDataTimestamps(),
          n = this.getLabelTimestamps();
        return (
          (t =
            e.length && n.length
              ? this.normalize(e.concat(n))
              : e.length
              ? e
              : n),
          (t = this._cache.all = t),
          t
        );
      }
      getDecimalForValue(t) {
        return (Km(this._table, t) - this._minPos) / this._tableRange;
      }
      getValueForPixel(t) {
        const e = this._offsets,
          n = this.getDecimalForPixel(t) / e.factor - e.end;
        return Km(this._table, n * this._tableRange + this._minPos, !0);
      }
    }
    (Jm.id = "timeseries"), (Jm.defaults = Ym.defaults);
    const Xm = [
      Kp,
      jg,
      Tm,
      Object.freeze({
        __proto__: null,
        CategoryScale: Am,
        LinearScale: Dm,
        LogarithmicScale: Om,
        RadialLinearScale: jm,
        TimeScale: Ym,
        TimeSeriesScale: Jm,
      }),
    ];
    bg.register(...Xm);
    const Zm = bg;
    var Qm = __webpack_require__(354),
      tb = {
        data: () => ({
          RTASS: t,
          plusmode: !1,
          languages: Qm.M,
          lang: "cn",
          vectorVal: {},
          scores: {},
          levels: {},
          scoreVector: "",
          scoreVectorUrl: "",
          charts: {},
        }),
        methods: {
          calcFinally: function () {
            this.plusmode && this.calcFactors(),
              this.calcScores(t.processScores, this.vectorVal),
              this.calcScores(t.finalScores, this.scores),
              this.genVectorUri(),
              history.replaceState(null, null, this.scoreVectorUrl),
              this.initCharts(),
              this.$forceUpdate();
          },
          calcFactors: function () {
            Object.keys(t.factors).map((e) => {
              if (void 0 !== t.factors[e].vectors) {
                let n = t.factors[e].vectors,
                  i = Object.values(n)
                    .map((t) => t.algorithm)
                    .join("+"),
                  o = ch()
                    .runInNewContext(
                      `(${i})/${Object.keys(n).length}`,
                      this.vectorVal
                    )
                    .toFixed(0);
                this.vectorVal[e] = o;
              }
            });
          },
          calcScores: function (t, e) {
            Object.keys(t).map((n) => {
              let i = t[n].vectors,
                o = Object.values(i)
                  .map((t) => t.algorithm)
                  .join("+"),
                s = ch()
                  .runInNewContext(`(${o})/${Object.keys(i).length}`, e)
                  .toFixed(2);
              this.scores[n] = parseFloat(s);
              let r = s > 0 && s < 1 ? 1 : s;
              this.levels[n] = Math.floor(r);
            });
          },
          getUrlParameter: function (t) {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(
              location.search
            );
            return null === e
              ? ""
              : decodeURIComponent(e[1].replace(/\+/g, " "));
          },
          resetVector: function () {
            Object.keys(t.factors).map((t) => {
              this.vectorVal[t] = 0;
            }),
              Object.keys(t.abilities).map((t) => {
                this.vectorVal[t] = 0;
              }),
              this.calcFinally();
          },
          genVectorUri: function () {
            let e = "RTASS:" + t.version;
            Object.keys(t.factors).map((t) => {
              e += `/${t}:${this.vectorVal[t]}`;
            }),
              this.plusmode &&
                Object.keys(t.abilities).map((t) => {
                  e += `/${t}:${this.vectorVal[t]}`;
                }),
              (this.scoreVector = e),
              (this.scoreVectorUrl =
                "?lang=" +
                this.lang +
                "&plusmode=" +
                this.plusmode +
                "&vector=" +
                this.scoreVector);
          },
          parseVectorUri: function (t) {
            let e = {};
            return (
              t &&
                /^RTASS:/.test(t) &&
                t.split("/").map((t) => {
                  e[t.split(":")[0]] = parseInt(t.split(":")[1]);
                }),
              e
            );
          },
          initCharts: function () {
            let e = t.charts.references,
              n = {};
            Object.keys(e).map((t) => {
              n[t] = this.parseVectorUri(e[t].vectorStr);
            }),
              (n.current = this.vectorVal),
              this.chartsToRender.map((i) => {
                let o = [],
                  s = [];
                Object.keys(n).map((t) => {
                  s[t] = [];
                });
                let r = t.charts.data[i].factors;
                Object.keys(r).map((e) => {
                  if (void 0 !== t.factors[e].vectors) {
                    let i = t.factors[e].vectors;
                    Object.keys(i).map((t) => {
                      o.push(Qm.a.t(`RTASS.abilities.${t}.name`)),
                        Object.keys(n).map((e) => {
                          s[e].push(n[e][t]);
                        });
                    });
                  } else
                    o.push(Qm.a.t(`RTASS.factors.${e}.name`)),
                      -1 == t.charts.data[i].factors[e]
                        ? Object.keys(n).map((t) => {
                            s[t].push(4 - n[t][e]);
                          })
                        : Object.keys(n).map((t) => {
                            s[t].push(n[t][e]);
                          });
                });
                let a = [];
                Object.keys(s).map((t) => {
                  a.push({
                    label: Qm.a.t(`RTASS.charts.references.${t}.name`),
                    backgroundColor: e[t].backgroundColor,
                    borderColor: e[t].borderColor,
                    data: s[t],
                  });
                }),
                  this.initChart("chart-" + i, o, a);
              });
          },
          initChart: function (t, e, n) {
            const i = {
              type: "radar",
              data: { labels: e, datasets: n },
              options: {
                scales: {
                  r: {
                    suggestedMin: 0,
                    suggestedMax: 4,
                    ticks: { stepSize: 1 },
                  },
                },
              },
            };
            void 0 !== this.charts[t] && this.charts[t].destroy(),
              (this.charts[t] = new Zm(t, i));
          },
        },
        watch: {
          lang(t) {
            Qm.a.setLocale(t);
          },
        },
        computed: {
          chartsToRender() {
            let e = [];
            return (
              Object.keys(t.charts.data).map((n) => {
                !0 !== t.charts.data[n].plusmode && e.push(n),
                  !0 === this.plusmode &&
                    !0 === t.charts.data[n].plusmode &&
                    e.push(n);
              }),
              e
            );
          },
        },
        mounted() {
          this.calcFinally();
        },
        created() {
          Object.keys(t.abilities).map((t) => {
            this.vectorVal[t] = Math.floor(5 * Math.random());
          }),
            Object.keys(t.factors).map((t) => {
              this.vectorVal[t] = Math.floor(5 * Math.random());
            }),
            [
              ...Object.keys(t.processScores),
              ...Object.keys(t.finalScores),
            ].map((t) => {
              this.levels[t] = 0;
            });
          let e = this.getUrlParameter("vector");
          "" != e && (this.vectorVal = this.parseVectorUri(e));
          let n = this.getUrlParameter("plusmode");
          "" != n && (this.plusmode = "true" == n);
          let i = this.getUrlParameter("lang");
          "" != i && (this.lang = i);
        },
      };
    const eb = kr(tb);
    eb.use(Qm.a), eb.mount("#pane");
  })();
})();
