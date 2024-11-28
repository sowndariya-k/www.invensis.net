/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var Kv = Object.create;
    var Dr = Object.defineProperty;
    var jv = Object.getOwnPropertyDescriptor;
    var Yv = Object.getOwnPropertyNames;
    var Qv = Object.getPrototypeOf,
        $v = Object.prototype.hasOwnProperty;
    var me = (e, t) => () => (e && (t = e(e = 0)), t);
    var d = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Ne = (e, t) => {
            for (var r in t) Dr(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        fa = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of Yv(t)) !$v.call(e, i) && i !== r && Dr(e, i, {
                    get: () => t[i],
                    enumerable: !(n = jv(t, i)) || n.enumerable
                });
            return e
        };
    var le = (e, t, r) => (r = e != null ? Kv(Qv(e)) : {}, fa(t || !e || !e.__esModule ? Dr(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        Qe = e => fa(Dr({}, "__esModule", {
            value: !0
        }), e);
    var jn = d(() => {
        "use strict";
        window.tram = function(e) {
            function t(l, T) {
                var x = new _.Bare;
                return x.init(l, T)
            }

            function r(l) {
                return l.replace(/[A-Z]/g, function(T) {
                    return "-" + T.toLowerCase()
                })
            }

            function n(l) {
                var T = parseInt(l.slice(1), 16),
                    x = T >> 16 & 255,
                    P = T >> 8 & 255,
                    O = 255 & T;
                return [x, P, O]
            }

            function i(l, T, x) {
                return "#" + (1 << 24 | l << 16 | T << 8 | x).toString(16).slice(1)
            }

            function o() {}

            function a(l, T) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof T + "] " + T)
            }

            function u(l, T, x) {
                f("Units do not match [" + l + "]: " + T + ", " + x)
            }

            function s(l, T, x) {
                if (T !== void 0 && (x = T), l === void 0) return x;
                var P = x;
                return Le.test(l) || !Xe.test(l) ? P = parseInt(l, 10) : Xe.test(l) && (P = 1e3 * parseFloat(l)), 0 > P && (P = 0), P === P ? P : x
            }

            function f(l) {
                oe.debug && window && window.console.warn(l)
            }

            function y(l) {
                for (var T = -1, x = l ? l.length : 0, P = []; ++T < x;) {
                    var O = l[T];
                    O && P.push(O)
                }
                return P
            }
            var g = function(l, T, x) {
                    function P(ae) {
                        return typeof ae == "object"
                    }

                    function O(ae) {
                        return typeof ae == "function"
                    }

                    function q() {}

                    function te(ae, he) {
                        function Q() {
                            var Oe = new se;
                            return O(Oe.init) && Oe.init.apply(Oe, arguments), Oe
                        }

                        function se() {}
                        he === x && (he = ae, ae = Object), Q.Bare = se;
                        var ue, _e = q[l] = ae[l],
                            Ye = se[l] = Q[l] = new q;
                        return Ye.constructor = Q, Q.mixin = function(Oe) {
                            return se[l] = Q[l] = te(Q, Oe)[l], Q
                        }, Q.open = function(Oe) {
                            if (ue = {}, O(Oe) ? ue = Oe.call(Q, Ye, _e, Q, ae) : P(Oe) && (ue = Oe), P(ue))
                                for (var ir in ue) T.call(ue, ir) && (Ye[ir] = ue[ir]);
                            return O(Ye.init) || (Ye.init = ae), Q
                        }, Q.open(he)
                    }
                    return te
                }("prototype", {}.hasOwnProperty),
                h = {
                    ease: ["ease", function(l, T, x, P) {
                        var O = (l /= P) * l,
                            q = O * l;
                        return T + x * (-2.75 * q * O + 11 * O * O + -15.5 * q + 8 * O + .25 * l)
                    }],
                    "ease-in": ["ease-in", function(l, T, x, P) {
                        var O = (l /= P) * l,
                            q = O * l;
                        return T + x * (-1 * q * O + 3 * O * O + -3 * q + 2 * O)
                    }],
                    "ease-out": ["ease-out", function(l, T, x, P) {
                        var O = (l /= P) * l,
                            q = O * l;
                        return T + x * (.3 * q * O + -1.6 * O * O + 2.2 * q + -1.8 * O + 1.9 * l)
                    }],
                    "ease-in-out": ["ease-in-out", function(l, T, x, P) {
                        var O = (l /= P) * l,
                            q = O * l;
                        return T + x * (2 * q * O + -5 * O * O + 2 * q + 2 * O)
                    }],
                    linear: ["linear", function(l, T, x, P) {
                        return x * l / P + T
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, T, x, P) {
                        return x * (l /= P) * l + T
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, T, x, P) {
                        return -x * (l /= P) * (l - 2) + T
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, T, x, P) {
                        return (l /= P / 2) < 1 ? x / 2 * l * l + T : -x / 2 * (--l * (l - 2) - 1) + T
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, T, x, P) {
                        return x * (l /= P) * l * l + T
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, T, x, P) {
                        return x * ((l = l / P - 1) * l * l + 1) + T
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, T, x, P) {
                        return (l /= P / 2) < 1 ? x / 2 * l * l * l + T : x / 2 * ((l -= 2) * l * l + 2) + T
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, T, x, P) {
                        return x * (l /= P) * l * l * l + T
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, T, x, P) {
                        return -x * ((l = l / P - 1) * l * l * l - 1) + T
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, T, x, P) {
                        return (l /= P / 2) < 1 ? x / 2 * l * l * l * l + T : -x / 2 * ((l -= 2) * l * l * l - 2) + T
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, T, x, P) {
                        return x * (l /= P) * l * l * l * l + T
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, T, x, P) {
                        return x * ((l = l / P - 1) * l * l * l * l + 1) + T
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, T, x, P) {
                        return (l /= P / 2) < 1 ? x / 2 * l * l * l * l * l + T : x / 2 * ((l -= 2) * l * l * l * l + 2) + T
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, T, x, P) {
                        return -x * Math.cos(l / P * (Math.PI / 2)) + x + T
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, T, x, P) {
                        return x * Math.sin(l / P * (Math.PI / 2)) + T
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, T, x, P) {
                        return -x / 2 * (Math.cos(Math.PI * l / P) - 1) + T
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, T, x, P) {
                        return l === 0 ? T : x * Math.pow(2, 10 * (l / P - 1)) + T
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, T, x, P) {
                        return l === P ? T + x : x * (-Math.pow(2, -10 * l / P) + 1) + T
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, T, x, P) {
                        return l === 0 ? T : l === P ? T + x : (l /= P / 2) < 1 ? x / 2 * Math.pow(2, 10 * (l - 1)) + T : x / 2 * (-Math.pow(2, -10 * --l) + 2) + T
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, T, x, P) {
                        return -x * (Math.sqrt(1 - (l /= P) * l) - 1) + T
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, T, x, P) {
                        return x * Math.sqrt(1 - (l = l / P - 1) * l) + T
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, T, x, P) {
                        return (l /= P / 2) < 1 ? -x / 2 * (Math.sqrt(1 - l * l) - 1) + T : x / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + T
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, T, x, P, O) {
                        return O === void 0 && (O = 1.70158), x * (l /= P) * l * ((O + 1) * l - O) + T
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, T, x, P, O) {
                        return O === void 0 && (O = 1.70158), x * ((l = l / P - 1) * l * ((O + 1) * l + O) + 1) + T
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, T, x, P, O) {
                        return O === void 0 && (O = 1.70158), (l /= P / 2) < 1 ? x / 2 * l * l * (((O *= 1.525) + 1) * l - O) + T : x / 2 * ((l -= 2) * l * (((O *= 1.525) + 1) * l + O) + 2) + T
                    }]
                },
                E = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                A = document,
                b = window,
                R = "bkwld-tram",
                w = /[\-\.0-9]/g,
                N = /[A-Z]/,
                C = "number",
                M = /^(rgb|#)/,
                k = /(em|cm|mm|in|pt|pc|px)$/,
                F = /(em|cm|mm|in|pt|pc|px|%)$/,
                K = /(deg|rad|turn)$/,
                j = "unitless",
                $ = /(all|none) 0s ease 0s/,
                ee = /^(width|height)$/,
                V = " ",
                S = A.createElement("a"),
                m = ["Webkit", "Moz", "O", "ms"],
                D = ["-webkit-", "-moz-", "-o-", "-ms-"],
                G = function(l) {
                    if (l in S.style) return {
                        dom: l,
                        css: l
                    };
                    var T, x, P = "",
                        O = l.split("-");
                    for (T = 0; T < O.length; T++) P += O[T].charAt(0).toUpperCase() + O[T].slice(1);
                    for (T = 0; T < m.length; T++)
                        if (x = m[T] + P, x in S.style) return {
                            dom: x,
                            css: D[T] + l
                        }
                },
                H = t.support = {
                    bind: Function.prototype.bind,
                    transform: G("transform"),
                    transition: G("transition"),
                    backface: G("backface-visibility"),
                    timing: G("transition-timing-function")
                };
            if (H.transition) {
                var J = H.timing.dom;
                if (S.style[J] = h["ease-in-back"][0], !S.style[J])
                    for (var re in E) h[re][0] = E[re]
            }
            var U = t.frame = function() {
                    var l = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame;
                    return l && H.bind ? l.bind(b) : function(T) {
                        b.setTimeout(T, 16)
                    }
                }(),
                z = t.now = function() {
                    var l = b.performance,
                        T = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                    return T && H.bind ? T.bind(l) : Date.now || function() {
                        return +new Date
                    }
                }(),
                p = g(function(l) {
                    function T(ne, ce) {
                        var Ee = y(("" + ne).split(V)),
                            pe = Ee[0];
                        ce = ce || {};
                        var xe = Y[pe];
                        if (!xe) return f("Unsupported property: " + pe);
                        if (!ce.weak || !this.props[pe]) {
                            var Ue = xe[0],
                                Pe = this.props[pe];
                            return Pe || (Pe = this.props[pe] = new Ue.Bare), Pe.init(this.$el, Ee, xe, ce), Pe
                        }
                    }

                    function x(ne, ce, Ee) {
                        if (ne) {
                            var pe = typeof ne;
                            if (ce || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), pe == "number" && ce) return this.timer = new ie({
                                duration: ne,
                                context: this,
                                complete: q
                            }), void(this.active = !0);
                            if (pe == "string" && ce) {
                                switch (ne) {
                                    case "hide":
                                        Q.call(this);
                                        break;
                                    case "stop":
                                        te.call(this);
                                        break;
                                    case "redraw":
                                        se.call(this);
                                        break;
                                    default:
                                        T.call(this, ne, Ee && Ee[1])
                                }
                                return q.call(this)
                            }
                            if (pe == "function") return void ne.call(this, this);
                            if (pe == "object") {
                                var xe = 0;
                                Ye.call(this, ne, function(Ie, zv) {
                                    Ie.span > xe && (xe = Ie.span), Ie.stop(), Ie.animate(zv)
                                }, function(Ie) {
                                    "wait" in Ie && (xe = s(Ie.wait, 0))
                                }), _e.call(this), xe > 0 && (this.timer = new ie({
                                    duration: xe,
                                    context: this
                                }), this.active = !0, ce && (this.timer.complete = q));
                                var Ue = this,
                                    Pe = !1,
                                    Nr = {};
                                U(function() {
                                    Ye.call(Ue, ne, function(Ie) {
                                        Ie.active && (Pe = !0, Nr[Ie.name] = Ie.nextStyle)
                                    }), Pe && Ue.$el.css(Nr)
                                })
                            }
                        }
                    }

                    function P(ne) {
                        ne = s(ne, 0), this.active ? this.queue.push({
                            options: ne
                        }) : (this.timer = new ie({
                            duration: ne,
                            context: this,
                            complete: q
                        }), this.active = !0)
                    }

                    function O(ne) {
                        return this.active ? (this.queue.push({
                            options: ne,
                            args: arguments
                        }), void(this.timer.complete = q)) : f("No active transition timer. Use start() or wait() before then().")
                    }

                    function q() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ne = this.queue.shift();
                            x.call(this, ne.options, !0, ne.args)
                        }
                    }

                    function te(ne) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var ce;
                        typeof ne == "string" ? (ce = {}, ce[ne] = 1) : ce = typeof ne == "object" && ne != null ? ne : this.props, Ye.call(this, ce, Oe), _e.call(this)
                    }

                    function ae(ne) {
                        te.call(this, ne), Ye.call(this, ne, ir, Hv)
                    }

                    function he(ne) {
                        typeof ne != "string" && (ne = "block"), this.el.style.display = ne
                    }

                    function Q() {
                        te.call(this), this.el.style.display = "none"
                    }

                    function se() {
                        this.el.offsetHeight
                    }

                    function ue() {
                        te.call(this), e.removeData(this.el, R), this.$el = this.el = null
                    }

                    function _e() {
                        var ne, ce, Ee = [];
                        this.upstream && Ee.push(this.upstream);
                        for (ne in this.props) ce = this.props[ne], ce.active && Ee.push(ce.string);
                        Ee = Ee.join(","), this.style !== Ee && (this.style = Ee, this.el.style[H.transition.dom] = Ee)
                    }

                    function Ye(ne, ce, Ee) {
                        var pe, xe, Ue, Pe, Nr = ce !== Oe,
                            Ie = {};
                        for (pe in ne) Ue = ne[pe], pe in de ? (Ie.transform || (Ie.transform = {}), Ie.transform[pe] = Ue) : (N.test(pe) && (pe = r(pe)), pe in Y ? Ie[pe] = Ue : (Pe || (Pe = {}), Pe[pe] = Ue));
                        for (pe in Ie) {
                            if (Ue = Ie[pe], xe = this.props[pe], !xe) {
                                if (!Nr) continue;
                                xe = T.call(this, pe)
                            }
                            ce.call(this, xe, Ue)
                        }
                        Ee && Pe && Ee.call(this, Pe)
                    }

                    function Oe(ne) {
                        ne.stop()
                    }

                    function ir(ne, ce) {
                        ne.set(ce)
                    }

                    function Hv(ne) {
                        this.$el.css(ne)
                    }

                    function Ge(ne, ce) {
                        l[ne] = function() {
                            return this.children ? Bv.call(this, ce, arguments) : (this.el && ce.apply(this, arguments), this)
                        }
                    }

                    function Bv(ne, ce) {
                        var Ee, pe = this.children.length;
                        for (Ee = 0; pe > Ee; Ee++) ne.apply(this.children[Ee], ce);
                        return this
                    }
                    l.init = function(ne) {
                        if (this.$el = e(ne), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, oe.keepInherited && !oe.fallback) {
                            var ce = B(this.el, "transition");
                            ce && !$.test(ce) && (this.upstream = ce)
                        }
                        H.backface && oe.hideBackface && v(this.el, H.backface.css, "hidden")
                    }, Ge("add", T), Ge("start", x), Ge("wait", P), Ge("then", O), Ge("next", q), Ge("stop", te), Ge("set", ae), Ge("show", he), Ge("hide", Q), Ge("redraw", se), Ge("destroy", ue)
                }),
                _ = g(p, function(l) {
                    function T(x, P) {
                        var O = e.data(x, R) || e.data(x, R, new p.Bare);
                        return O.el || O.init(x), P ? O.start(P) : O
                    }
                    l.init = function(x, P) {
                        var O = e(x);
                        if (!O.length) return this;
                        if (O.length === 1) return T(O[0], P);
                        var q = [];
                        return O.each(function(te, ae) {
                            q.push(T(ae, P))
                        }), this.children = q, this
                    }
                }),
                I = g(function(l) {
                    function T() {
                        var q = this.get();
                        this.update("auto");
                        var te = this.get();
                        return this.update(q), te
                    }

                    function x(q, te, ae) {
                        return te !== void 0 && (ae = te), q in h ? q : ae
                    }

                    function P(q) {
                        var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(q);
                        return (te ? i(te[1], te[2], te[3]) : q).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var O = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    l.init = function(q, te, ae, he) {
                        this.$el = q, this.el = q[0];
                        var Q = te[0];
                        ae[2] && (Q = ae[2]), Z[Q] && (Q = Z[Q]), this.name = Q, this.type = ae[1], this.duration = s(te[1], this.duration, O.duration), this.ease = x(te[2], this.ease, O.ease), this.delay = s(te[3], this.delay, O.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = ee.test(this.name), this.unit = he.unit || this.unit || oe.defaultUnit, this.angle = he.angle || this.angle || oe.defaultAngle, oe.fallback || he.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + V + this.duration + "ms" + (this.ease != "ease" ? V + h[this.ease][0] : "") + (this.delay ? V + this.delay + "ms" : ""))
                    }, l.set = function(q) {
                        q = this.convert(q, this.type), this.update(q), this.redraw()
                    }, l.transition = function(q) {
                        this.active = !0, q = this.convert(q, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), q == "auto" && (q = T.call(this))), this.nextStyle = q
                    }, l.fallback = function(q) {
                        var te = this.el.style[this.name] || this.convert(this.get(), this.type);
                        q = this.convert(q, this.type), this.auto && (te == "auto" && (te = this.convert(this.get(), this.type)), q == "auto" && (q = T.call(this))), this.tween = new L({
                            from: te,
                            to: q,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.get = function() {
                        return B(this.el, this.name)
                    }, l.update = function(q) {
                        v(this.el, this.name, q)
                    }, l.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, v(this.el, this.name, this.get()));
                        var q = this.tween;
                        q && q.context && q.destroy()
                    }, l.convert = function(q, te) {
                        if (q == "auto" && this.auto) return q;
                        var ae, he = typeof q == "number",
                            Q = typeof q == "string";
                        switch (te) {
                            case C:
                                if (he) return q;
                                if (Q && q.replace(w, "") === "") return +q;
                                ae = "number(unitless)";
                                break;
                            case M:
                                if (Q) {
                                    if (q === "" && this.original) return this.original;
                                    if (te.test(q)) return q.charAt(0) == "#" && q.length == 7 ? q : P(q)
                                }
                                ae = "hex or rgb string";
                                break;
                            case k:
                                if (he) return q + this.unit;
                                if (Q && te.test(q)) return q;
                                ae = "number(px) or string(unit)";
                                break;
                            case F:
                                if (he) return q + this.unit;
                                if (Q && te.test(q)) return q;
                                ae = "number(px) or string(unit or %)";
                                break;
                            case K:
                                if (he) return q + this.angle;
                                if (Q && te.test(q)) return q;
                                ae = "number(deg) or string(angle)";
                                break;
                            case j:
                                if (he || Q && F.test(q)) return q;
                                ae = "number(unitless) or string(unit or %)"
                        }
                        return a(ae, q), q
                    }, l.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                c = g(I, function(l, T) {
                    l.init = function() {
                        T.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), M))
                    }
                }),
                X = g(I, function(l, T) {
                    l.init = function() {
                        T.init.apply(this, arguments), this.animate = this.fallback
                    }, l.get = function() {
                        return this.$el[this.name]()
                    }, l.update = function(x) {
                        this.$el[this.name](x)
                    }
                }),
                W = g(I, function(l, T) {
                    function x(P, O) {
                        var q, te, ae, he, Q;
                        for (q in P) he = de[q], ae = he[0], te = he[1] || q, Q = this.convert(P[q], ae), O.call(this, te, Q, ae)
                    }
                    l.init = function() {
                        T.init.apply(this, arguments), this.current || (this.current = {}, de.perspective && oe.perspective && (this.current.perspective = oe.perspective, v(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, l.set = function(P) {
                        x.call(this, P, function(O, q) {
                            this.current[O] = q
                        }), v(this.el, this.name, this.style(this.current)), this.redraw()
                    }, l.transition = function(P) {
                        var O = this.values(P);
                        this.tween = new fe({
                            current: this.current,
                            values: O,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var q, te = {};
                        for (q in this.current) te[q] = q in O ? O[q] : this.current[q];
                        this.active = !0, this.nextStyle = this.style(te)
                    }, l.fallback = function(P) {
                        var O = this.values(P);
                        this.tween = new fe({
                            current: this.current,
                            values: O,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.update = function() {
                        v(this.el, this.name, this.style(this.current))
                    }, l.style = function(P) {
                        var O, q = "";
                        for (O in P) q += O + "(" + P[O] + ") ";
                        return q
                    }, l.values = function(P) {
                        var O, q = {};
                        return x.call(this, P, function(te, ae, he) {
                            q[te] = ae, this.current[te] === void 0 && (O = 0, ~te.indexOf("scale") && (O = 1), this.current[te] = this.convert(O, he))
                        }), q
                    }
                }),
                L = g(function(l) {
                    function T(Q) {
                        ae.push(Q) === 1 && U(x)
                    }

                    function x() {
                        var Q, se, ue, _e = ae.length;
                        if (_e)
                            for (U(x), se = z(), Q = _e; Q--;) ue = ae[Q], ue && ue.render(se)
                    }

                    function P(Q) {
                        var se, ue = e.inArray(Q, ae);
                        ue >= 0 && (se = ae.slice(ue + 1), ae.length = ue, se.length && (ae = ae.concat(se)))
                    }

                    function O(Q) {
                        return Math.round(Q * he) / he
                    }

                    function q(Q, se, ue) {
                        return i(Q[0] + ue * (se[0] - Q[0]), Q[1] + ue * (se[1] - Q[1]), Q[2] + ue * (se[2] - Q[2]))
                    }
                    var te = {
                        ease: h.ease[1],
                        from: 0,
                        to: 1
                    };
                    l.init = function(Q) {
                        this.duration = Q.duration || 0, this.delay = Q.delay || 0;
                        var se = Q.ease || te.ease;
                        h[se] && (se = h[se][1]), typeof se != "function" && (se = te.ease), this.ease = se, this.update = Q.update || o, this.complete = Q.complete || o, this.context = Q.context || this, this.name = Q.name;
                        var ue = Q.from,
                            _e = Q.to;
                        ue === void 0 && (ue = te.from), _e === void 0 && (_e = te.to), this.unit = Q.unit || "", typeof ue == "number" && typeof _e == "number" ? (this.begin = ue, this.change = _e - ue) : this.format(_e, ue), this.value = this.begin + this.unit, this.start = z(), Q.autoplay !== !1 && this.play()
                    }, l.play = function() {
                        this.active || (this.start || (this.start = z()), this.active = !0, T(this))
                    }, l.stop = function() {
                        this.active && (this.active = !1, P(this))
                    }, l.render = function(Q) {
                        var se, ue = Q - this.start;
                        if (this.delay) {
                            if (ue <= this.delay) return;
                            ue -= this.delay
                        }
                        if (ue < this.duration) {
                            var _e = this.ease(ue, 0, 1, this.duration);
                            return se = this.startRGB ? q(this.startRGB, this.endRGB, _e) : O(this.begin + _e * this.change), this.value = se + this.unit, void this.update.call(this.context, this.value)
                        }
                        se = this.endHex || this.begin + this.change, this.value = se + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, l.format = function(Q, se) {
                        if (se += "", Q += "", Q.charAt(0) == "#") return this.startRGB = n(se), this.endRGB = n(Q), this.endHex = Q, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ue = se.replace(w, ""),
                                _e = Q.replace(w, "");
                            ue !== _e && u("tween", se, Q), this.unit = ue
                        }
                        se = parseFloat(se), Q = parseFloat(Q), this.begin = this.value = se, this.change = Q - se
                    }, l.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var ae = [],
                        he = 1e3
                }),
                ie = g(L, function(l) {
                    l.init = function(T) {
                        this.duration = T.duration || 0, this.complete = T.complete || o, this.context = T.context, this.play()
                    }, l.render = function(T) {
                        var x = T - this.start;
                        x < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                fe = g(L, function(l, T) {
                    l.init = function(x) {
                        this.context = x.context, this.update = x.update, this.tweens = [], this.current = x.current;
                        var P, O;
                        for (P in x.values) O = x.values[P], this.current[P] !== O && this.tweens.push(new L({
                            name: P,
                            from: this.current[P],
                            to: O,
                            duration: x.duration,
                            delay: x.delay,
                            ease: x.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, l.render = function(x) {
                        var P, O, q = this.tweens.length,
                            te = !1;
                        for (P = q; P--;) O = this.tweens[P], O.context && (O.render(x), this.current[O.name] = O.value, te = !0);
                        return te ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, l.destroy = function() {
                        if (T.destroy.call(this), this.tweens) {
                            var x, P = this.tweens.length;
                            for (x = P; x--;) this.tweens[x].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                oe = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !H.transition,
                    agentTests: []
                };
            t.fallback = function(l) {
                if (!H.transition) return oe.fallback = !0;
                oe.agentTests.push("(" + l + ")");
                var T = new RegExp(oe.agentTests.join("|"), "i");
                oe.fallback = T.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
                return new L(l)
            }, t.delay = function(l, T, x) {
                return new ie({
                    complete: T,
                    duration: l,
                    context: x
                })
            }, e.fn.tram = function(l) {
                return t.call(null, this, l)
            };
            var v = e.style,
                B = e.css,
                Z = {
                    transform: H.transform && H.transform.css
                },
                Y = {
                    color: [c, M],
                    background: [c, M, "background-color"],
                    "outline-color": [c, M],
                    "border-color": [c, M],
                    "border-top-color": [c, M],
                    "border-right-color": [c, M],
                    "border-bottom-color": [c, M],
                    "border-left-color": [c, M],
                    "border-width": [I, k],
                    "border-top-width": [I, k],
                    "border-right-width": [I, k],
                    "border-bottom-width": [I, k],
                    "border-left-width": [I, k],
                    "border-spacing": [I, k],
                    "letter-spacing": [I, k],
                    margin: [I, k],
                    "margin-top": [I, k],
                    "margin-right": [I, k],
                    "margin-bottom": [I, k],
                    "margin-left": [I, k],
                    padding: [I, k],
                    "padding-top": [I, k],
                    "padding-right": [I, k],
                    "padding-bottom": [I, k],
                    "padding-left": [I, k],
                    "outline-width": [I, k],
                    opacity: [I, C],
                    top: [I, F],
                    right: [I, F],
                    bottom: [I, F],
                    left: [I, F],
                    "font-size": [I, F],
                    "text-indent": [I, F],
                    "word-spacing": [I, F],
                    width: [I, F],
                    "min-width": [I, F],
                    "max-width": [I, F],
                    height: [I, F],
                    "min-height": [I, F],
                    "max-height": [I, F],
                    "line-height": [I, j],
                    "scroll-top": [X, C, "scrollTop"],
                    "scroll-left": [X, C, "scrollLeft"]
                },
                de = {};
            H.transform && (Y.transform = [W], de = {
                x: [F, "translateX"],
                y: [F, "translateY"],
                rotate: [K],
                rotateX: [K],
                rotateY: [K],
                scale: [C],
                scaleX: [C],
                scaleY: [C],
                skew: [K],
                skewX: [K],
                skewY: [K]
            }), H.transform && H.backface && (de.z = [F, "translateZ"], de.rotateZ = [K], de.scaleZ = [C], de.perspective = [k]);
            var Le = /ms/,
                Xe = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var pa = d((bF, da) => {
        "use strict";
        var Zv = window.$,
            Jv = jn() && Zv.tram;
        da.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                a = r.slice,
                u = r.concat,
                s = n.toString,
                f = n.hasOwnProperty,
                y = r.forEach,
                g = r.map,
                h = r.reduce,
                E = r.reduceRight,
                A = r.filter,
                b = r.every,
                R = r.some,
                w = r.indexOf,
                N = r.lastIndexOf,
                C = Array.isArray,
                M = Object.keys,
                k = i.bind,
                F = e.each = e.forEach = function(m, D, G) {
                    if (m == null) return m;
                    if (y && m.forEach === y) m.forEach(D, G);
                    else if (m.length === +m.length) {
                        for (var H = 0, J = m.length; H < J; H++)
                            if (D.call(G, m[H], H, m) === t) return
                    } else
                        for (var re = e.keys(m), H = 0, J = re.length; H < J; H++)
                            if (D.call(G, m[re[H]], re[H], m) === t) return;
                    return m
                };
            e.map = e.collect = function(m, D, G) {
                var H = [];
                return m == null ? H : g && m.map === g ? m.map(D, G) : (F(m, function(J, re, U) {
                    H.push(D.call(G, J, re, U))
                }), H)
            }, e.find = e.detect = function(m, D, G) {
                var H;
                return K(m, function(J, re, U) {
                    if (D.call(G, J, re, U)) return H = J, !0
                }), H
            }, e.filter = e.select = function(m, D, G) {
                var H = [];
                return m == null ? H : A && m.filter === A ? m.filter(D, G) : (F(m, function(J, re, U) {
                    D.call(G, J, re, U) && H.push(J)
                }), H)
            };
            var K = e.some = e.any = function(m, D, G) {
                D || (D = e.identity);
                var H = !1;
                return m == null ? H : R && m.some === R ? m.some(D, G) : (F(m, function(J, re, U) {
                    if (H || (H = D.call(G, J, re, U))) return t
                }), !!H)
            };
            e.contains = e.include = function(m, D) {
                return m == null ? !1 : w && m.indexOf === w ? m.indexOf(D) != -1 : K(m, function(G) {
                    return G === D
                })
            }, e.delay = function(m, D) {
                var G = a.call(arguments, 2);
                return setTimeout(function() {
                    return m.apply(null, G)
                }, D)
            }, e.defer = function(m) {
                return e.delay.apply(e, [m, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function(m) {
                var D, G, H;
                return function() {
                    D || (D = !0, G = arguments, H = this, Jv.frame(function() {
                        D = !1, m.apply(H, G)
                    }))
                }
            }, e.debounce = function(m, D, G) {
                var H, J, re, U, z, p = function() {
                    var _ = e.now() - U;
                    _ < D ? H = setTimeout(p, D - _) : (H = null, G || (z = m.apply(re, J), re = J = null))
                };
                return function() {
                    re = this, J = arguments, U = e.now();
                    var _ = G && !H;
                    return H || (H = setTimeout(p, D)), _ && (z = m.apply(re, J), re = J = null), z
                }
            }, e.defaults = function(m) {
                if (!e.isObject(m)) return m;
                for (var D = 1, G = arguments.length; D < G; D++) {
                    var H = arguments[D];
                    for (var J in H) m[J] === void 0 && (m[J] = H[J])
                }
                return m
            }, e.keys = function(m) {
                if (!e.isObject(m)) return [];
                if (M) return M(m);
                var D = [];
                for (var G in m) e.has(m, G) && D.push(G);
                return D
            }, e.has = function(m, D) {
                return f.call(m, D)
            }, e.isObject = function(m) {
                return m === Object(m)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var j = /(.)^/,
                $ = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                ee = /\\|'|\r|\n|\u2028|\u2029/g,
                V = function(m) {
                    return "\\" + $[m]
                },
                S = /^\s*(\w|\$)+\s*$/;
            return e.template = function(m, D, G) {
                !D && G && (D = G), D = e.defaults({}, D, e.templateSettings);
                var H = RegExp([(D.escape || j).source, (D.interpolate || j).source, (D.evaluate || j).source].join("|") + "|$", "g"),
                    J = 0,
                    re = "__p+='";
                m.replace(H, function(_, I, c, X, W) {
                    return re += m.slice(J, W).replace(ee, V), J = W + _.length, I ? re += `'+
((__t=(` + I + `))==null?'':_.escape(__t))+
'` : c ? re += `'+
((__t=(` + c + `))==null?'':__t)+
'` : X && (re += `';
` + X + `
__p+='`), _
                }), re += `';
`;
                var U = D.variable;
                if (U) {
                    if (!S.test(U)) throw new Error("variable is not a bare identifier: " + U)
                } else re = `with(obj||{}){
` + re + `}
`, U = "obj";
                re = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + re + `return __p;
`;
                var z;
                try {
                    z = new Function(D.variable || "obj", "_", re)
                } catch (_) {
                    throw _.source = re, _
                }
                var p = function(_) {
                    return z.call(this, _, e)
                };
                return p.source = "function(" + U + `){
` + re + "}", p
            }, e
        }()
    });
    var Se = d((wF, Ia) => {
        "use strict";
        var ge = {},
            St = {},
            Rt = [],
            Qn = window.Webflow || [],
            lt = window.jQuery,
            Ve = lt(window),
            em = lt(document),
            $e = lt.isFunction,
            We = ge._ = pa(),
            ha = ge.tram = jn() && lt.tram,
            Fr = !1,
            $n = !1;
        ha.config.hideBackface = !1;
        ha.config.keepInherited = !0;
        ge.define = function(e, t, r) {
            St[e] && ma(St[e]);
            var n = St[e] = t(lt, We, r) || {};
            return va(n), n
        };
        ge.require = function(e) {
            return St[e]
        };

        function va(e) {
            ge.env() && ($e(e.design) && Ve.on("__wf_design", e.design), $e(e.preview) && Ve.on("__wf_preview", e.preview)), $e(e.destroy) && Ve.on("__wf_destroy", e.destroy), e.ready && $e(e.ready) && tm(e)
        }

        function tm(e) {
            if (Fr) {
                e.ready();
                return
            }
            We.contains(Rt, e.ready) || Rt.push(e.ready)
        }

        function ma(e) {
            $e(e.design) && Ve.off("__wf_design", e.design), $e(e.preview) && Ve.off("__wf_preview", e.preview), $e(e.destroy) && Ve.off("__wf_destroy", e.destroy), e.ready && $e(e.ready) && rm(e)
        }

        function rm(e) {
            Rt = We.filter(Rt, function(t) {
                return t !== e.ready
            })
        }
        ge.push = function(e) {
            if (Fr) {
                $e(e) && e();
                return
            }
            Qn.push(e)
        };
        ge.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var Mr = navigator.userAgent.toLowerCase(),
            Ea = ge.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            nm = ge.env.chrome = /chrome/.test(Mr) && /Google/.test(navigator.vendor) && parseInt(Mr.match(/chrome\/(\d+)\./)[1], 10),
            im = ge.env.ios = /(ipod|iphone|ipad)/.test(Mr);
        ge.env.safari = /safari/.test(Mr) && !nm && !im;
        var Yn;
        Ea && em.on("touchstart mousedown", function(e) {
            Yn = e.target
        });
        ge.validClick = Ea ? function(e) {
            return e === Yn || lt.contains(e, Yn)
        } : function() {
            return !0
        };
        var ya = "resize.webflow orientationchange.webflow load.webflow",
            om = "scroll.webflow " + ya;
        ge.resize = Zn(Ve, ya);
        ge.scroll = Zn(Ve, om);
        ge.redraw = Zn();

        function Zn(e, t) {
            var r = [],
                n = {};
            return n.up = We.throttle(function(i) {
                We.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (We.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = We.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        ge.location = function(e) {
            window.location = e
        };
        ge.env() && (ge.location = function() {});
        ge.ready = function() {
            Fr = !0, $n ? am() : We.each(Rt, ga), We.each(Qn, ga), ge.resize.up()
        };

        function ga(e) {
            $e(e) && e()
        }

        function am() {
            $n = !1, We.each(St, va)
        }
        var yt;
        ge.load = function(e) {
            yt.then(e)
        };

        function _a() {
            yt && (yt.reject(), Ve.off("load", yt.resolve)), yt = new lt.Deferred, Ve.on("load", yt.resolve)
        }
        ge.destroy = function(e) {
            e = e || {}, $n = !0, Ve.triggerHandler("__wf_destroy"), e.domready != null && (Fr = e.domready), We.each(St, ma), ge.resize.off(), ge.scroll.off(), ge.redraw.off(), Rt = [], Qn = [], yt.state() === "pending" && _a()
        };
        lt(ge.ready);
        _a();
        Ia.exports = window.Webflow = ge
    });
    var wa = d((AF, ba) => {
        "use strict";
        var Ta = Se();
        Ta.define("brand", ba.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                a = window.location,
                u = /PhantomJS/i.test(navigator.userAgent),
                s = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                f;
            t.ready = function() {
                var E = n.attr("data-wf-status"),
                    A = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(A) && a.hostname !== A && (E = !0), E && !u && (f = f || g(), h(), setTimeout(h, 500), e(r).off(s, y).on(s, y))
            };

            function y() {
                var E = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", E ? "display: none !important;" : "")
            }

            function g() {
                var E = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    A = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    b = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return E.append(A, b), E[0]
            }

            function h() {
                var E = i.children(o),
                    A = E.length && E.get(0) === f,
                    b = Ta.env("editor");
                if (A) {
                    b && E.remove();
                    return
                }
                E.length && E.remove(), b || i.append(f)
            }
            return t
        })
    });
    var Oa = d((OF, Aa) => {
        "use strict";
        var Jn = Se();
        Jn.define("edit", Aa.exports = function(e, t, r) {
            if (r = r || {}, (Jn.env("test") || Jn.env("frame")) && !r.fixture && !sm()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                a = document.location,
                u = "hashchange",
                s, f = r.load || h,
                y = !1;
            try {
                y = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            y ? f() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && f() : i.on(u, g).triggerHandler(u);

            function g() {
                s || /\?edit/.test(a.hash) && f()
            }

            function h() {
                s = !0, window.WebflowEditor = !0, i.off(u, g), N(function(M) {
                    e.ajax({
                        url: w("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: E(M)
                    })
                })
            }

            function E(M) {
                return function(k) {
                    if (!k) {
                        console.error("Could not load editor data");
                        return
                    }
                    k.thirdPartyCookiesSupported = M, A(R(k.scriptPath), function() {
                        window.WebflowEditor(k)
                    })
                }
            }

            function A(M, k) {
                e.ajax({
                    type: "GET",
                    url: M,
                    dataType: "script",
                    cache: !0
                }).then(k, b)
            }

            function b(M, k, F) {
                throw console.error("Could not load editor script: " + k), F
            }

            function R(M) {
                return M.indexOf("//") >= 0 ? M : w("https://editor-api.webflow.com" + M)
            }

            function w(M) {
                return M.replace(/([^:])\/\//g, "$1/")
            }

            function N(M) {
                var k = window.document.createElement("iframe");
                k.src = "https://webflow.com/site/third-party-cookie-check.html", k.style.display = "none", k.sandbox = "allow-scripts allow-same-origin";
                var F = function(K) {
                    K.data === "WF_third_party_cookies_unsupported" ? (C(k, F), M(!1)) : K.data === "WF_third_party_cookies_supported" && (C(k, F), M(!0))
                };
                k.onerror = function() {
                    C(k, F), M(!1)
                }, window.addEventListener("message", F, !1), window.document.body.appendChild(k)
            }

            function C(M, k) {
                window.removeEventListener("message", k, !1), M.remove()
            }
            return n
        });

        function sm() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Sa = d((xF, xa) => {
        "use strict";
        var um = Se();
        um.define("focus-visible", xa.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function u(C) {
                    return !!(C && C !== document && C.nodeName !== "HTML" && C.nodeName !== "BODY" && "classList" in C && "contains" in C.classList)
                }

                function s(C) {
                    var M = C.type,
                        k = C.tagName;
                    return !!(k === "INPUT" && a[M] && !C.readOnly || k === "TEXTAREA" && !C.readOnly || C.isContentEditable)
                }

                function f(C) {
                    C.getAttribute("data-wf-focus-visible") || C.setAttribute("data-wf-focus-visible", "true")
                }

                function y(C) {
                    C.getAttribute("data-wf-focus-visible") && C.removeAttribute("data-wf-focus-visible")
                }

                function g(C) {
                    C.metaKey || C.altKey || C.ctrlKey || (u(r.activeElement) && f(r.activeElement), n = !0)
                }

                function h() {
                    n = !1
                }

                function E(C) {
                    u(C.target) && (n || s(C.target)) && f(C.target)
                }

                function A(C) {
                    u(C.target) && C.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), y(C.target))
                }

                function b() {
                    document.visibilityState === "hidden" && (i && (n = !0), R())
                }

                function R() {
                    document.addEventListener("mousemove", N), document.addEventListener("mousedown", N), document.addEventListener("mouseup", N), document.addEventListener("pointermove", N), document.addEventListener("pointerdown", N), document.addEventListener("pointerup", N), document.addEventListener("touchmove", N), document.addEventListener("touchstart", N), document.addEventListener("touchend", N)
                }

                function w() {
                    document.removeEventListener("mousemove", N), document.removeEventListener("mousedown", N), document.removeEventListener("mouseup", N), document.removeEventListener("pointermove", N), document.removeEventListener("pointerdown", N), document.removeEventListener("pointerup", N), document.removeEventListener("touchmove", N), document.removeEventListener("touchstart", N), document.removeEventListener("touchend", N)
                }

                function N(C) {
                    C.target.nodeName && C.target.nodeName.toLowerCase() === "html" || (n = !1, w())
                }
                document.addEventListener("keydown", g, !0), document.addEventListener("mousedown", h, !0), document.addEventListener("pointerdown", h, !0), document.addEventListener("touchstart", h, !0), document.addEventListener("visibilitychange", b, !0), R(), r.addEventListener("focus", E, !0), r.addEventListener("blur", A, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var La = d((SF, Ca) => {
        "use strict";
        var Ra = Se();
        Ra.define("focus", Ca.exports = function() {
            var e = [],
                t = !1;

            function r(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function n(a) {
                var u = a.target,
                    s = u.tagName;
                return /^a$/i.test(s) && u.href != null || /^(button|textarea)$/i.test(s) && u.disabled !== !0 || /^input$/i.test(s) && /^(button|reset|submit|radio|checkbox)$/i.test(u.type) && !u.disabled || !/^(button|input|textarea|select|a)$/i.test(s) && !Number.isNaN(Number.parseFloat(u.tabIndex)) || /^audio$/i.test(s) || /^video$/i.test(s) && u.controls === !0
            }

            function i(a) {
                n(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var u = e.pop();
                        u.target.dispatchEvent(new MouseEvent(u.type, u))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ra.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var Da = d((RF, Na) => {
        "use strict";
        var ei = window.jQuery,
            Ze = {},
            qr = [],
            Pa = ".w-ix",
            kr = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, ei(t).triggerHandler(Ze.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, ei(t).triggerHandler(Ze.types.OUTRO))
                }
            };
        Ze.triggers = {};
        Ze.types = {
            INTRO: "w-ix-intro" + Pa,
            OUTRO: "w-ix-outro" + Pa
        };
        Ze.init = function() {
            for (var e = qr.length, t = 0; t < e; t++) {
                var r = qr[t];
                r[0](0, r[1])
            }
            qr = [], ei.extend(Ze.triggers, kr)
        };
        Ze.async = function() {
            for (var e in kr) {
                var t = kr[e];
                kr.hasOwnProperty(e) && (Ze.triggers[e] = function(r, n) {
                    qr.push([t, n])
                })
            }
        };
        Ze.async();
        Na.exports = Ze
    });
    var Ct = d((CF, qa) => {
        "use strict";
        var ti = Da();

        function Ma(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var cm = window.jQuery,
            Xr = {},
            Fa = ".w-ix",
            lm = {
                reset: function(e, t) {
                    ti.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    ti.triggers.intro(e, t), Ma(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    ti.triggers.outro(e, t), Ma(t, "COMPONENT_INACTIVE")
                }
            };
        Xr.triggers = {};
        Xr.types = {
            INTRO: "w-ix-intro" + Fa,
            OUTRO: "w-ix-outro" + Fa
        };
        cm.extend(Xr.triggers, lm);
        qa.exports = Xr
    });
    var ri = d((LF, ka) => {
        var fm = typeof global == "object" && global && global.Object === Object && global;
        ka.exports = fm
    });
    var He = d((PF, Xa) => {
        var dm = ri(),
            pm = typeof self == "object" && self && self.Object === Object && self,
            gm = dm || pm || Function("return this")();
        Xa.exports = gm
    });
    var Lt = d((NF, Ga) => {
        var hm = He(),
            vm = hm.Symbol;
        Ga.exports = vm
    });
    var Ha = d((DF, Va) => {
        var Ua = Lt(),
            Wa = Object.prototype,
            mm = Wa.hasOwnProperty,
            Em = Wa.toString,
            or = Ua ? Ua.toStringTag : void 0;

        function ym(e) {
            var t = mm.call(e, or),
                r = e[or];
            try {
                e[or] = void 0;
                var n = !0
            } catch {}
            var i = Em.call(e);
            return n && (t ? e[or] = r : delete e[or]), i
        }
        Va.exports = ym
    });
    var za = d((MF, Ba) => {
        var _m = Object.prototype,
            Im = _m.toString;

        function Tm(e) {
            return Im.call(e)
        }
        Ba.exports = Tm
    });
    var ft = d((FF, Ya) => {
        var Ka = Lt(),
            bm = Ha(),
            wm = za(),
            Am = "[object Null]",
            Om = "[object Undefined]",
            ja = Ka ? Ka.toStringTag : void 0;

        function xm(e) {
            return e == null ? e === void 0 ? Om : Am : ja && ja in Object(e) ? bm(e) : wm(e)
        }
        Ya.exports = xm
    });
    var ni = d((qF, Qa) => {
        function Sm(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        Qa.exports = Sm
    });
    var ii = d((kF, $a) => {
        var Rm = ni(),
            Cm = Rm(Object.getPrototypeOf, Object);
        $a.exports = Cm
    });
    var ot = d((XF, Za) => {
        function Lm(e) {
            return e != null && typeof e == "object"
        }
        Za.exports = Lm
    });
    var oi = d((GF, es) => {
        var Pm = ft(),
            Nm = ii(),
            Dm = ot(),
            Mm = "[object Object]",
            Fm = Function.prototype,
            qm = Object.prototype,
            Ja = Fm.toString,
            km = qm.hasOwnProperty,
            Xm = Ja.call(Object);

        function Gm(e) {
            if (!Dm(e) || Pm(e) != Mm) return !1;
            var t = Nm(e);
            if (t === null) return !0;
            var r = km.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && Ja.call(r) == Xm
        }
        es.exports = Gm
    });
    var ts = d(ai => {
        "use strict";
        Object.defineProperty(ai, "__esModule", {
            value: !0
        });
        ai.default = Um;

        function Um(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var rs = d((ui, si) => {
        "use strict";
        Object.defineProperty(ui, "__esModule", {
            value: !0
        });
        var Wm = ts(),
            Vm = Hm(Wm);

        function Hm(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Pt;
        typeof self < "u" ? Pt = self : typeof window < "u" ? Pt = window : typeof global < "u" ? Pt = global : typeof si < "u" ? Pt = si : Pt = Function("return this")();
        var Bm = (0, Vm.default)(Pt);
        ui.default = Bm
    });
    var ci = d(ar => {
        "use strict";
        ar.__esModule = !0;
        ar.ActionTypes = void 0;
        ar.default = as;
        var zm = oi(),
            Km = os(zm),
            jm = rs(),
            ns = os(jm);

        function os(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var is = ar.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function as(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(as)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                a = [],
                u = a,
                s = !1;

            function f() {
                u === a && (u = a.slice())
            }

            function y() {
                return o
            }

            function g(b) {
                if (typeof b != "function") throw new Error("Expected listener to be a function.");
                var R = !0;
                return f(), u.push(b),
                    function() {
                        if (R) {
                            R = !1, f();
                            var N = u.indexOf(b);
                            u.splice(N, 1)
                        }
                    }
            }

            function h(b) {
                if (!(0, Km.default)(b)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof b.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (s) throw new Error("Reducers may not dispatch actions.");
                try {
                    s = !0, o = i(o, b)
                } finally {
                    s = !1
                }
                for (var R = a = u, w = 0; w < R.length; w++) R[w]();
                return b
            }

            function E(b) {
                if (typeof b != "function") throw new Error("Expected the nextReducer to be a function.");
                i = b, h({
                    type: is.INIT
                })
            }

            function A() {
                var b, R = g;
                return b = {
                    subscribe: function(N) {
                        if (typeof N != "object") throw new TypeError("Expected the observer to be an object.");

                        function C() {
                            N.next && N.next(y())
                        }
                        C();
                        var M = R(C);
                        return {
                            unsubscribe: M
                        }
                    }
                }, b[ns.default] = function() {
                    return this
                }, b
            }
            return h({
                type: is.INIT
            }), n = {
                dispatch: h,
                subscribe: g,
                getState: y,
                replaceReducer: E
            }, n[ns.default] = A, n
        }
    });
    var fi = d(li => {
        "use strict";
        li.__esModule = !0;
        li.default = Ym;

        function Ym(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var cs = d(di => {
        "use strict";
        di.__esModule = !0;
        di.default = eE;
        var ss = ci(),
            Qm = oi(),
            HF = us(Qm),
            $m = fi(),
            BF = us($m);

        function us(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Zm(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function Jm(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: ss.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + ss.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function eE(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var a;
            var u;
            try {
                Jm(r)
            } catch (s) {
                u = s
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    y = arguments[1];
                if (u) throw u;
                if (!1) var g;
                for (var h = !1, E = {}, A = 0; A < o.length; A++) {
                    var b = o[A],
                        R = r[b],
                        w = f[b],
                        N = R(w, y);
                    if (typeof N > "u") {
                        var C = Zm(b, y);
                        throw new Error(C)
                    }
                    E[b] = N, h = h || N !== w
                }
                return h ? E : f
            }
        }
    });
    var fs = d(pi => {
        "use strict";
        pi.__esModule = !0;
        pi.default = tE;

        function ls(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function tE(e, t) {
            if (typeof e == "function") return ls(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    a = e[o];
                typeof a == "function" && (n[o] = ls(a, t))
            }
            return n
        }
    });
    var hi = d(gi => {
        "use strict";
        gi.__esModule = !0;
        gi.default = rE;

        function rE() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var ds = d(vi => {
        "use strict";
        vi.__esModule = !0;
        var nE = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        vi.default = sE;
        var iE = hi(),
            oE = aE(iE);

        function aE(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function sE() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var u = n(i, o, a),
                        s = u.dispatch,
                        f = [],
                        y = {
                            getState: u.getState,
                            dispatch: function(h) {
                                return s(h)
                            }
                        };
                    return f = t.map(function(g) {
                        return g(y)
                    }), s = oE.default.apply(void 0, f)(u.dispatch), nE({}, u, {
                        dispatch: s
                    })
                }
            }
        }
    });
    var mi = d(ke => {
        "use strict";
        ke.__esModule = !0;
        ke.compose = ke.applyMiddleware = ke.bindActionCreators = ke.combineReducers = ke.createStore = void 0;
        var uE = ci(),
            cE = Nt(uE),
            lE = cs(),
            fE = Nt(lE),
            dE = fs(),
            pE = Nt(dE),
            gE = ds(),
            hE = Nt(gE),
            vE = hi(),
            mE = Nt(vE),
            EE = fi(),
            QF = Nt(EE);

        function Nt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ke.createStore = cE.default;
        ke.combineReducers = fE.default;
        ke.bindActionCreators = pE.default;
        ke.applyMiddleware = hE.default;
        ke.compose = mE.default
    });
    var Be, Ei, Je, yE, _E, Gr, IE, yi = me(() => {
        "use strict";
        Be = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Ei = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, Je = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, yE = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, _E = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, Gr = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, IE = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var De, TE, Ur = me(() => {
        "use strict";
        De = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, TE = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var bE, ps = me(() => {
        "use strict";
        bE = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var wE, AE, OE, xE, SE, RE, CE, _i, gs = me(() => {
        "use strict";
        Ur();
        ({
            TRANSFORM_MOVE: wE,
            TRANSFORM_SCALE: AE,
            TRANSFORM_ROTATE: OE,
            TRANSFORM_SKEW: xE,
            STYLE_SIZE: SE,
            STYLE_FILTER: RE,
            STYLE_FONT_VARIATION: CE
        } = De), _i = {
            [wE]: !0,
            [AE]: !0,
            [OE]: !0,
            [xE]: !0,
            [SE]: !0,
            [RE]: !0,
            [CE]: !0
        }
    });
    var Te = {};
    Ne(Te, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => KE,
        IX2_ANIMATION_FRAME_CHANGED: () => UE,
        IX2_CLEAR_REQUESTED: () => kE,
        IX2_ELEMENT_STATE_CHANGED: () => zE,
        IX2_EVENT_LISTENER_ADDED: () => XE,
        IX2_EVENT_STATE_CHANGED: () => GE,
        IX2_INSTANCE_ADDED: () => VE,
        IX2_INSTANCE_REMOVED: () => BE,
        IX2_INSTANCE_STARTED: () => HE,
        IX2_MEDIA_QUERIES_DEFINED: () => YE,
        IX2_PARAMETER_CHANGED: () => WE,
        IX2_PLAYBACK_REQUESTED: () => FE,
        IX2_PREVIEW_REQUESTED: () => ME,
        IX2_RAW_DATA_IMPORTED: () => LE,
        IX2_SESSION_INITIALIZED: () => PE,
        IX2_SESSION_STARTED: () => NE,
        IX2_SESSION_STOPPED: () => DE,
        IX2_STOP_REQUESTED: () => qE,
        IX2_TEST_FRAME_RENDERED: () => QE,
        IX2_VIEWPORT_WIDTH_CHANGED: () => jE
    });
    var LE, PE, NE, DE, ME, FE, qE, kE, XE, GE, UE, WE, VE, HE, BE, zE, KE, jE, YE, QE, hs = me(() => {
        "use strict";
        LE = "IX2_RAW_DATA_IMPORTED", PE = "IX2_SESSION_INITIALIZED", NE = "IX2_SESSION_STARTED", DE = "IX2_SESSION_STOPPED", ME = "IX2_PREVIEW_REQUESTED", FE = "IX2_PLAYBACK_REQUESTED", qE = "IX2_STOP_REQUESTED", kE = "IX2_CLEAR_REQUESTED", XE = "IX2_EVENT_LISTENER_ADDED", GE = "IX2_EVENT_STATE_CHANGED", UE = "IX2_ANIMATION_FRAME_CHANGED", WE = "IX2_PARAMETER_CHANGED", VE = "IX2_INSTANCE_ADDED", HE = "IX2_INSTANCE_STARTED", BE = "IX2_INSTANCE_REMOVED", zE = "IX2_ELEMENT_STATE_CHANGED", KE = "IX2_ACTION_LIST_PLAYBACK_CHANGED", jE = "IX2_VIEWPORT_WIDTH_CHANGED", YE = "IX2_MEDIA_QUERIES_DEFINED", QE = "IX2_TEST_FRAME_RENDERED"
    });
    var Ae = {};
    Ne(Ae, {
        ABSTRACT_NODE: () => jy,
        AUTO: () => qy,
        BACKGROUND: () => Ly,
        BACKGROUND_COLOR: () => Cy,
        BAR_DELIMITER: () => Gy,
        BORDER_COLOR: () => Py,
        BOUNDARY_SELECTOR: () => ty,
        CHILDREN: () => Uy,
        COLON_DELIMITER: () => Xy,
        COLOR: () => Ny,
        COMMA_DELIMITER: () => ky,
        CONFIG_UNIT: () => cy,
        CONFIG_VALUE: () => oy,
        CONFIG_X_UNIT: () => ay,
        CONFIG_X_VALUE: () => ry,
        CONFIG_Y_UNIT: () => sy,
        CONFIG_Y_VALUE: () => ny,
        CONFIG_Z_UNIT: () => uy,
        CONFIG_Z_VALUE: () => iy,
        DISPLAY: () => Dy,
        FILTER: () => Oy,
        FLEX: () => My,
        FONT_VARIATION_SETTINGS: () => xy,
        HEIGHT: () => Ry,
        HTML_ELEMENT: () => zy,
        IMMEDIATE_CHILDREN: () => Wy,
        IX2_ID_DELIMITER: () => $E,
        OPACITY: () => Ay,
        PARENT: () => Hy,
        PLAIN_OBJECT: () => Ky,
        PRESERVE_3D: () => By,
        RENDER_GENERAL: () => Qy,
        RENDER_PLUGIN: () => Zy,
        RENDER_STYLE: () => $y,
        RENDER_TRANSFORM: () => Yy,
        ROTATE_X: () => yy,
        ROTATE_Y: () => _y,
        ROTATE_Z: () => Iy,
        SCALE_3D: () => Ey,
        SCALE_X: () => hy,
        SCALE_Y: () => vy,
        SCALE_Z: () => my,
        SIBLINGS: () => Vy,
        SKEW: () => Ty,
        SKEW_X: () => by,
        SKEW_Y: () => wy,
        TRANSFORM: () => ly,
        TRANSLATE_3D: () => gy,
        TRANSLATE_X: () => fy,
        TRANSLATE_Y: () => dy,
        TRANSLATE_Z: () => py,
        WF_PAGE: () => ZE,
        WIDTH: () => Sy,
        WILL_CHANGE: () => Fy,
        W_MOD_IX: () => ey,
        W_MOD_JS: () => JE
    });
    var $E, ZE, JE, ey, ty, ry, ny, iy, oy, ay, sy, uy, cy, ly, fy, dy, py, gy, hy, vy, my, Ey, yy, _y, Iy, Ty, by, wy, Ay, Oy, xy, Sy, Ry, Cy, Ly, Py, Ny, Dy, My, Fy, qy, ky, Xy, Gy, Uy, Wy, Vy, Hy, By, zy, Ky, jy, Yy, Qy, $y, Zy, vs = me(() => {
        "use strict";
        $E = "|", ZE = "data-wf-page", JE = "w-mod-js", ey = "w-mod-ix", ty = ".w-dyn-item", ry = "xValue", ny = "yValue", iy = "zValue", oy = "value", ay = "xUnit", sy = "yUnit", uy = "zUnit", cy = "unit", ly = "transform", fy = "translateX", dy = "translateY", py = "translateZ", gy = "translate3d", hy = "scaleX", vy = "scaleY", my = "scaleZ", Ey = "scale3d", yy = "rotateX", _y = "rotateY", Iy = "rotateZ", Ty = "skew", by = "skewX", wy = "skewY", Ay = "opacity", Oy = "filter", xy = "font-variation-settings", Sy = "width", Ry = "height", Cy = "backgroundColor", Ly = "background", Py = "borderColor", Ny = "color", Dy = "display", My = "flex", Fy = "willChange", qy = "AUTO", ky = ",", Xy = ":", Gy = "|", Uy = "CHILDREN", Wy = "IMMEDIATE_CHILDREN", Vy = "SIBLINGS", Hy = "PARENT", By = "preserve-3d", zy = "HTML_ELEMENT", Ky = "PLAIN_OBJECT", jy = "ABSTRACT_NODE", Yy = "RENDER_TRANSFORM", Qy = "RENDER_GENERAL", $y = "RENDER_STYLE", Zy = "RENDER_PLUGIN"
    });
    var ms = {};
    Ne(ms, {
        ActionAppliesTo: () => TE,
        ActionTypeConsts: () => De,
        EventAppliesTo: () => Ei,
        EventBasedOn: () => Je,
        EventContinuousMouseAxes: () => yE,
        EventLimitAffectedElements: () => _E,
        EventTypeConsts: () => Be,
        IX2EngineActionTypes: () => Te,
        IX2EngineConstants: () => Ae,
        InteractionTypeConsts: () => bE,
        QuickEffectDirectionConsts: () => IE,
        QuickEffectIds: () => Gr,
        ReducedMotionTypes: () => _i
    });
    var Me = me(() => {
        "use strict";
        yi();
        Ur();
        ps();
        gs();
        hs();
        vs();
        Ur();
        yi()
    });
    var Jy, Es, ys = me(() => {
        "use strict";
        Me();
        ({
            IX2_RAW_DATA_IMPORTED: Jy
        } = Te), Es = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case Jy:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Dt = d(ye => {
        "use strict";
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        var e_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ye.clone = Vr;
        ye.addLast = Ts;
        ye.addFirst = bs;
        ye.removeLast = ws;
        ye.removeFirst = As;
        ye.insert = Os;
        ye.removeAt = xs;
        ye.replaceAt = Ss;
        ye.getIn = Hr;
        ye.set = Br;
        ye.setIn = zr;
        ye.update = Cs;
        ye.updateIn = Ls;
        ye.merge = Ps;
        ye.mergeDeep = Ns;
        ye.mergeIn = Ds;
        ye.omit = Ms;
        ye.addDefaults = Fs;
        var _s = "INVALID_ARGS";

        function Is(e) {
            throw new Error(e)
        }

        function Ii(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var t_ = {}.hasOwnProperty;

        function Vr(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = Ii(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Fe(e, t, r) {
            var n = r;
            n == null && Is(_s);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3; u < o; u++) a[u - 3] = arguments[u];
            for (var s = 0; s < a.length; s++) {
                var f = a[s];
                if (f != null) {
                    var y = Ii(f);
                    if (y.length)
                        for (var g = 0; g <= y.length; g++) {
                            var h = y[g];
                            if (!(e && n[h] !== void 0)) {
                                var E = f[h];
                                t && Wr(n[h]) && Wr(E) && (E = Fe(e, t, n[h], E)), !(E === void 0 || E === n[h]) && (i || (i = !0, n = Vr(n)), n[h] = E)
                            }
                        }
                }
            }
            return n
        }

        function Wr(e) {
            var t = typeof e > "u" ? "undefined" : e_(e);
            return e != null && (t === "object" || t === "function")
        }

        function Ts(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function bs(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function ws(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function As(e) {
            return e.length ? e.slice(1) : e
        }

        function Os(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function xs(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Ss(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function Hr(e, t) {
            if (!Array.isArray(t) && Is(_s), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function Br(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = Vr(i);
            return o[t] = r, o
        }

        function Rs(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var a = Wr(e) && Wr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Rs(a, t, r, n + 1)
            }
            return Br(e, o, i)
        }

        function zr(e, t, r) {
            return t.length ? Rs(e, t, r, 0) : r
        }

        function Cs(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return Br(e, t, i)
        }

        function Ls(e, t, r) {
            var n = Hr(e, t),
                i = r(n);
            return zr(e, t, i)
        }

        function Ps(e, t, r, n, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++) u[s - 6] = arguments[s];
            return u.length ? Fe.call.apply(Fe, [null, !1, !1, e, t, r, n, i, o].concat(u)) : Fe(!1, !1, e, t, r, n, i, o)
        }

        function Ns(e, t, r, n, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++) u[s - 6] = arguments[s];
            return u.length ? Fe.call.apply(Fe, [null, !1, !0, e, t, r, n, i, o].concat(u)) : Fe(!1, !0, e, t, r, n, i, o)
        }

        function Ds(e, t, r, n, i, o, a) {
            var u = Hr(e, t);
            u == null && (u = {});
            for (var s = void 0, f = arguments.length, y = Array(f > 7 ? f - 7 : 0), g = 7; g < f; g++) y[g - 7] = arguments[g];
            return y.length ? s = Fe.call.apply(Fe, [null, !1, !1, u, r, n, i, o, a].concat(y)) : s = Fe(!1, !1, u, r, n, i, o, a), zr(e, t, s)
        }

        function Ms(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (t_.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, a = Ii(e), u = 0; u < a.length; u++) {
                var s = a[u];
                r.indexOf(s) >= 0 || (o[s] = e[s])
            }
            return o
        }

        function Fs(e, t, r, n, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++) u[s - 6] = arguments[s];
            return u.length ? Fe.call.apply(Fe, [null, !0, !1, e, t, r, n, i, o].concat(u)) : Fe(!0, !1, e, t, r, n, i, o)
        }
        var r_ = {
            clone: Vr,
            addLast: Ts,
            addFirst: bs,
            removeLast: ws,
            removeFirst: As,
            insert: Os,
            removeAt: xs,
            replaceAt: Ss,
            getIn: Hr,
            set: Br,
            setIn: zr,
            update: Cs,
            updateIn: Ls,
            merge: Ps,
            mergeDeep: Ns,
            mergeIn: Ds,
            omit: Ms,
            addDefaults: Fs
        };
        ye.default = r_
    });
    var ks, n_, i_, o_, a_, s_, qs, Xs, Gs = me(() => {
        "use strict";
        Me();
        ks = le(Dt()), {
            IX2_PREVIEW_REQUESTED: n_,
            IX2_PLAYBACK_REQUESTED: i_,
            IX2_STOP_REQUESTED: o_,
            IX2_CLEAR_REQUESTED: a_
        } = Te, s_ = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, qs = Object.create(null, {
            [n_]: {
                value: "preview"
            },
            [i_]: {
                value: "playback"
            },
            [o_]: {
                value: "stop"
            },
            [a_]: {
                value: "clear"
            }
        }), Xs = (e = s_, t) => {
            if (t.type in qs) {
                let r = [qs[t.type]];
                return (0, ks.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var Re, u_, c_, l_, f_, d_, p_, g_, h_, v_, m_, Us, E_, Ws, Vs = me(() => {
        "use strict";
        Me();
        Re = le(Dt()), {
            IX2_SESSION_INITIALIZED: u_,
            IX2_SESSION_STARTED: c_,
            IX2_TEST_FRAME_RENDERED: l_,
            IX2_SESSION_STOPPED: f_,
            IX2_EVENT_LISTENER_ADDED: d_,
            IX2_EVENT_STATE_CHANGED: p_,
            IX2_ANIMATION_FRAME_CHANGED: g_,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: h_,
            IX2_VIEWPORT_WIDTH_CHANGED: v_,
            IX2_MEDIA_QUERIES_DEFINED: m_
        } = Te, Us = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, E_ = 20, Ws = (e = Us, t) => {
            switch (t.type) {
                case u_:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, Re.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case c_:
                    return (0, Re.set)(e, "active", !0);
                case l_:
                    {
                        let {
                            payload: {
                                step: r = E_
                            }
                        } = t;
                        return (0, Re.set)(e, "tick", e.tick + r)
                    }
                case f_:
                    return Us;
                case g_:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, Re.set)(e, "tick", r)
                    }
                case d_:
                    {
                        let r = (0, Re.addLast)(e.eventListeners, t.payload);
                        return (0, Re.set)(e, "eventListeners", r)
                    }
                case p_:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, Re.setIn)(e, ["eventState", r], n)
                    }
                case h_:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, Re.setIn)(e, ["playbackState", r], n)
                    }
                case v_:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let a = 0; a < i; a++) {
                            let {
                                key: u,
                                min: s,
                                max: f
                            } = n[a];
                            if (r >= s && r <= f) {
                                o = u;
                                break
                            }
                        }
                        return (0, Re.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case m_:
                    return (0, Re.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var Bs = d((v1, Hs) => {
        function y_() {
            this.__data__ = [], this.size = 0
        }
        Hs.exports = y_
    });
    var Kr = d((m1, zs) => {
        function __(e, t) {
            return e === t || e !== e && t !== t
        }
        zs.exports = __
    });
    var sr = d((E1, Ks) => {
        var I_ = Kr();

        function T_(e, t) {
            for (var r = e.length; r--;)
                if (I_(e[r][0], t)) return r;
            return -1
        }
        Ks.exports = T_
    });
    var Ys = d((y1, js) => {
        var b_ = sr(),
            w_ = Array.prototype,
            A_ = w_.splice;

        function O_(e) {
            var t = this.__data__,
                r = b_(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : A_.call(t, r, 1), --this.size, !0
        }
        js.exports = O_
    });
    var $s = d((_1, Qs) => {
        var x_ = sr();

        function S_(e) {
            var t = this.__data__,
                r = x_(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        Qs.exports = S_
    });
    var Js = d((I1, Zs) => {
        var R_ = sr();

        function C_(e) {
            return R_(this.__data__, e) > -1
        }
        Zs.exports = C_
    });
    var tu = d((T1, eu) => {
        var L_ = sr();

        function P_(e, t) {
            var r = this.__data__,
                n = L_(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        eu.exports = P_
    });
    var ur = d((b1, ru) => {
        var N_ = Bs(),
            D_ = Ys(),
            M_ = $s(),
            F_ = Js(),
            q_ = tu();

        function Mt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Mt.prototype.clear = N_;
        Mt.prototype.delete = D_;
        Mt.prototype.get = M_;
        Mt.prototype.has = F_;
        Mt.prototype.set = q_;
        ru.exports = Mt
    });
    var iu = d((w1, nu) => {
        var k_ = ur();

        function X_() {
            this.__data__ = new k_, this.size = 0
        }
        nu.exports = X_
    });
    var au = d((A1, ou) => {
        function G_(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        ou.exports = G_
    });
    var uu = d((O1, su) => {
        function U_(e) {
            return this.__data__.get(e)
        }
        su.exports = U_
    });
    var lu = d((x1, cu) => {
        function W_(e) {
            return this.__data__.has(e)
        }
        cu.exports = W_
    });
    var et = d((S1, fu) => {
        function V_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        fu.exports = V_
    });
    var Ti = d((R1, du) => {
        var H_ = ft(),
            B_ = et(),
            z_ = "[object AsyncFunction]",
            K_ = "[object Function]",
            j_ = "[object GeneratorFunction]",
            Y_ = "[object Proxy]";

        function Q_(e) {
            if (!B_(e)) return !1;
            var t = H_(e);
            return t == K_ || t == j_ || t == z_ || t == Y_
        }
        du.exports = Q_
    });
    var gu = d((C1, pu) => {
        var $_ = He(),
            Z_ = $_["__core-js_shared__"];
        pu.exports = Z_
    });
    var mu = d((L1, vu) => {
        var bi = gu(),
            hu = function() {
                var e = /[^.]+$/.exec(bi && bi.keys && bi.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function J_(e) {
            return !!hu && hu in e
        }
        vu.exports = J_
    });
    var wi = d((P1, Eu) => {
        var eI = Function.prototype,
            tI = eI.toString;

        function rI(e) {
            if (e != null) {
                try {
                    return tI.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Eu.exports = rI
    });
    var _u = d((N1, yu) => {
        var nI = Ti(),
            iI = mu(),
            oI = et(),
            aI = wi(),
            sI = /[\\^$.*+?()[\]{}|]/g,
            uI = /^\[object .+?Constructor\]$/,
            cI = Function.prototype,
            lI = Object.prototype,
            fI = cI.toString,
            dI = lI.hasOwnProperty,
            pI = RegExp("^" + fI.call(dI).replace(sI, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function gI(e) {
            if (!oI(e) || iI(e)) return !1;
            var t = nI(e) ? pI : uI;
            return t.test(aI(e))
        }
        yu.exports = gI
    });
    var Tu = d((D1, Iu) => {
        function hI(e, t) {
            return e ? .[t]
        }
        Iu.exports = hI
    });
    var dt = d((M1, bu) => {
        var vI = _u(),
            mI = Tu();

        function EI(e, t) {
            var r = mI(e, t);
            return vI(r) ? r : void 0
        }
        bu.exports = EI
    });
    var jr = d((F1, wu) => {
        var yI = dt(),
            _I = He(),
            II = yI(_I, "Map");
        wu.exports = II
    });
    var cr = d((q1, Au) => {
        var TI = dt(),
            bI = TI(Object, "create");
        Au.exports = bI
    });
    var Su = d((k1, xu) => {
        var Ou = cr();

        function wI() {
            this.__data__ = Ou ? Ou(null) : {}, this.size = 0
        }
        xu.exports = wI
    });
    var Cu = d((X1, Ru) => {
        function AI(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Ru.exports = AI
    });
    var Pu = d((G1, Lu) => {
        var OI = cr(),
            xI = "__lodash_hash_undefined__",
            SI = Object.prototype,
            RI = SI.hasOwnProperty;

        function CI(e) {
            var t = this.__data__;
            if (OI) {
                var r = t[e];
                return r === xI ? void 0 : r
            }
            return RI.call(t, e) ? t[e] : void 0
        }
        Lu.exports = CI
    });
    var Du = d((U1, Nu) => {
        var LI = cr(),
            PI = Object.prototype,
            NI = PI.hasOwnProperty;

        function DI(e) {
            var t = this.__data__;
            return LI ? t[e] !== void 0 : NI.call(t, e)
        }
        Nu.exports = DI
    });
    var Fu = d((W1, Mu) => {
        var MI = cr(),
            FI = "__lodash_hash_undefined__";

        function qI(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = MI && t === void 0 ? FI : t, this
        }
        Mu.exports = qI
    });
    var ku = d((V1, qu) => {
        var kI = Su(),
            XI = Cu(),
            GI = Pu(),
            UI = Du(),
            WI = Fu();

        function Ft(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Ft.prototype.clear = kI;
        Ft.prototype.delete = XI;
        Ft.prototype.get = GI;
        Ft.prototype.has = UI;
        Ft.prototype.set = WI;
        qu.exports = Ft
    });
    var Uu = d((H1, Gu) => {
        var Xu = ku(),
            VI = ur(),
            HI = jr();

        function BI() {
            this.size = 0, this.__data__ = {
                hash: new Xu,
                map: new(HI || VI),
                string: new Xu
            }
        }
        Gu.exports = BI
    });
    var Vu = d((B1, Wu) => {
        function zI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Wu.exports = zI
    });
    var lr = d((z1, Hu) => {
        var KI = Vu();

        function jI(e, t) {
            var r = e.__data__;
            return KI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Hu.exports = jI
    });
    var zu = d((K1, Bu) => {
        var YI = lr();

        function QI(e) {
            var t = YI(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        Bu.exports = QI
    });
    var ju = d((j1, Ku) => {
        var $I = lr();

        function ZI(e) {
            return $I(this, e).get(e)
        }
        Ku.exports = ZI
    });
    var Qu = d((Y1, Yu) => {
        var JI = lr();

        function eT(e) {
            return JI(this, e).has(e)
        }
        Yu.exports = eT
    });
    var Zu = d((Q1, $u) => {
        var tT = lr();

        function rT(e, t) {
            var r = tT(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        $u.exports = rT
    });
    var Yr = d(($1, Ju) => {
        var nT = Uu(),
            iT = zu(),
            oT = ju(),
            aT = Qu(),
            sT = Zu();

        function qt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        qt.prototype.clear = nT;
        qt.prototype.delete = iT;
        qt.prototype.get = oT;
        qt.prototype.has = aT;
        qt.prototype.set = sT;
        Ju.exports = qt
    });
    var tc = d((Z1, ec) => {
        var uT = ur(),
            cT = jr(),
            lT = Yr(),
            fT = 200;

        function dT(e, t) {
            var r = this.__data__;
            if (r instanceof uT) {
                var n = r.__data__;
                if (!cT || n.length < fT - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new lT(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        ec.exports = dT
    });
    var Ai = d((J1, rc) => {
        var pT = ur(),
            gT = iu(),
            hT = au(),
            vT = uu(),
            mT = lu(),
            ET = tc();

        function kt(e) {
            var t = this.__data__ = new pT(e);
            this.size = t.size
        }
        kt.prototype.clear = gT;
        kt.prototype.delete = hT;
        kt.prototype.get = vT;
        kt.prototype.has = mT;
        kt.prototype.set = ET;
        rc.exports = kt
    });
    var ic = d((e2, nc) => {
        var yT = "__lodash_hash_undefined__";

        function _T(e) {
            return this.__data__.set(e, yT), this
        }
        nc.exports = _T
    });
    var ac = d((t2, oc) => {
        function IT(e) {
            return this.__data__.has(e)
        }
        oc.exports = IT
    });
    var uc = d((r2, sc) => {
        var TT = Yr(),
            bT = ic(),
            wT = ac();

        function Qr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new TT; ++t < r;) this.add(e[t])
        }
        Qr.prototype.add = Qr.prototype.push = bT;
        Qr.prototype.has = wT;
        sc.exports = Qr
    });
    var lc = d((n2, cc) => {
        function AT(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        cc.exports = AT
    });
    var dc = d((i2, fc) => {
        function OT(e, t) {
            return e.has(t)
        }
        fc.exports = OT
    });
    var Oi = d((o2, pc) => {
        var xT = uc(),
            ST = lc(),
            RT = dc(),
            CT = 1,
            LT = 2;

        function PT(e, t, r, n, i, o) {
            var a = r & CT,
                u = e.length,
                s = t.length;
            if (u != s && !(a && s > u)) return !1;
            var f = o.get(e),
                y = o.get(t);
            if (f && y) return f == t && y == e;
            var g = -1,
                h = !0,
                E = r & LT ? new xT : void 0;
            for (o.set(e, t), o.set(t, e); ++g < u;) {
                var A = e[g],
                    b = t[g];
                if (n) var R = a ? n(b, A, g, t, e, o) : n(A, b, g, e, t, o);
                if (R !== void 0) {
                    if (R) continue;
                    h = !1;
                    break
                }
                if (E) {
                    if (!ST(t, function(w, N) {
                            if (!RT(E, N) && (A === w || i(A, w, r, n, o))) return E.push(N)
                        })) {
                        h = !1;
                        break
                    }
                } else if (!(A === b || i(A, b, r, n, o))) {
                    h = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), h
        }
        pc.exports = PT
    });
    var hc = d((a2, gc) => {
        var NT = He(),
            DT = NT.Uint8Array;
        gc.exports = DT
    });
    var mc = d((s2, vc) => {
        function MT(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        vc.exports = MT
    });
    var yc = d((u2, Ec) => {
        function FT(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Ec.exports = FT
    });
    var wc = d((c2, bc) => {
        var _c = Lt(),
            Ic = hc(),
            qT = Kr(),
            kT = Oi(),
            XT = mc(),
            GT = yc(),
            UT = 1,
            WT = 2,
            VT = "[object Boolean]",
            HT = "[object Date]",
            BT = "[object Error]",
            zT = "[object Map]",
            KT = "[object Number]",
            jT = "[object RegExp]",
            YT = "[object Set]",
            QT = "[object String]",
            $T = "[object Symbol]",
            ZT = "[object ArrayBuffer]",
            JT = "[object DataView]",
            Tc = _c ? _c.prototype : void 0,
            xi = Tc ? Tc.valueOf : void 0;

        function eb(e, t, r, n, i, o, a) {
            switch (r) {
                case JT:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case ZT:
                    return !(e.byteLength != t.byteLength || !o(new Ic(e), new Ic(t)));
                case VT:
                case HT:
                case KT:
                    return qT(+e, +t);
                case BT:
                    return e.name == t.name && e.message == t.message;
                case jT:
                case QT:
                    return e == t + "";
                case zT:
                    var u = XT;
                case YT:
                    var s = n & UT;
                    if (u || (u = GT), e.size != t.size && !s) return !1;
                    var f = a.get(e);
                    if (f) return f == t;
                    n |= WT, a.set(e, t);
                    var y = kT(u(e), u(t), n, i, o, a);
                    return a.delete(e), y;
                case $T:
                    if (xi) return xi.call(e) == xi.call(t)
            }
            return !1
        }
        bc.exports = eb
    });
    var $r = d((l2, Ac) => {
        function tb(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        Ac.exports = tb
    });
    var be = d((f2, Oc) => {
        var rb = Array.isArray;
        Oc.exports = rb
    });
    var Si = d((d2, xc) => {
        var nb = $r(),
            ib = be();

        function ob(e, t, r) {
            var n = t(e);
            return ib(e) ? n : nb(n, r(e))
        }
        xc.exports = ob
    });
    var Rc = d((p2, Sc) => {
        function ab(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        Sc.exports = ab
    });
    var Ri = d((g2, Cc) => {
        function sb() {
            return []
        }
        Cc.exports = sb
    });
    var Ci = d((h2, Pc) => {
        var ub = Rc(),
            cb = Ri(),
            lb = Object.prototype,
            fb = lb.propertyIsEnumerable,
            Lc = Object.getOwnPropertySymbols,
            db = Lc ? function(e) {
                return e == null ? [] : (e = Object(e), ub(Lc(e), function(t) {
                    return fb.call(e, t)
                }))
            } : cb;
        Pc.exports = db
    });
    var Dc = d((v2, Nc) => {
        function pb(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        Nc.exports = pb
    });
    var Fc = d((m2, Mc) => {
        var gb = ft(),
            hb = ot(),
            vb = "[object Arguments]";

        function mb(e) {
            return hb(e) && gb(e) == vb
        }
        Mc.exports = mb
    });
    var fr = d((E2, Xc) => {
        var qc = Fc(),
            Eb = ot(),
            kc = Object.prototype,
            yb = kc.hasOwnProperty,
            _b = kc.propertyIsEnumerable,
            Ib = qc(function() {
                return arguments
            }()) ? qc : function(e) {
                return Eb(e) && yb.call(e, "callee") && !_b.call(e, "callee")
            };
        Xc.exports = Ib
    });
    var Uc = d((y2, Gc) => {
        function Tb() {
            return !1
        }
        Gc.exports = Tb
    });
    var Zr = d((dr, Xt) => {
        var bb = He(),
            wb = Uc(),
            Hc = typeof dr == "object" && dr && !dr.nodeType && dr,
            Wc = Hc && typeof Xt == "object" && Xt && !Xt.nodeType && Xt,
            Ab = Wc && Wc.exports === Hc,
            Vc = Ab ? bb.Buffer : void 0,
            Ob = Vc ? Vc.isBuffer : void 0,
            xb = Ob || wb;
        Xt.exports = xb
    });
    var Jr = d((_2, Bc) => {
        var Sb = 9007199254740991,
            Rb = /^(?:0|[1-9]\d*)$/;

        function Cb(e, t) {
            var r = typeof e;
            return t = t ? ? Sb, !!t && (r == "number" || r != "symbol" && Rb.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Bc.exports = Cb
    });
    var en = d((I2, zc) => {
        var Lb = 9007199254740991;

        function Pb(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Lb
        }
        zc.exports = Pb
    });
    var jc = d((T2, Kc) => {
        var Nb = ft(),
            Db = en(),
            Mb = ot(),
            Fb = "[object Arguments]",
            qb = "[object Array]",
            kb = "[object Boolean]",
            Xb = "[object Date]",
            Gb = "[object Error]",
            Ub = "[object Function]",
            Wb = "[object Map]",
            Vb = "[object Number]",
            Hb = "[object Object]",
            Bb = "[object RegExp]",
            zb = "[object Set]",
            Kb = "[object String]",
            jb = "[object WeakMap]",
            Yb = "[object ArrayBuffer]",
            Qb = "[object DataView]",
            $b = "[object Float32Array]",
            Zb = "[object Float64Array]",
            Jb = "[object Int8Array]",
            ew = "[object Int16Array]",
            tw = "[object Int32Array]",
            rw = "[object Uint8Array]",
            nw = "[object Uint8ClampedArray]",
            iw = "[object Uint16Array]",
            ow = "[object Uint32Array]",
            ve = {};
        ve[$b] = ve[Zb] = ve[Jb] = ve[ew] = ve[tw] = ve[rw] = ve[nw] = ve[iw] = ve[ow] = !0;
        ve[Fb] = ve[qb] = ve[Yb] = ve[kb] = ve[Qb] = ve[Xb] = ve[Gb] = ve[Ub] = ve[Wb] = ve[Vb] = ve[Hb] = ve[Bb] = ve[zb] = ve[Kb] = ve[jb] = !1;

        function aw(e) {
            return Mb(e) && Db(e.length) && !!ve[Nb(e)]
        }
        Kc.exports = aw
    });
    var Qc = d((b2, Yc) => {
        function sw(e) {
            return function(t) {
                return e(t)
            }
        }
        Yc.exports = sw
    });
    var Zc = d((pr, Gt) => {
        var uw = ri(),
            $c = typeof pr == "object" && pr && !pr.nodeType && pr,
            gr = $c && typeof Gt == "object" && Gt && !Gt.nodeType && Gt,
            cw = gr && gr.exports === $c,
            Li = cw && uw.process,
            lw = function() {
                try {
                    var e = gr && gr.require && gr.require("util").types;
                    return e || Li && Li.binding && Li.binding("util")
                } catch {}
            }();
        Gt.exports = lw
    });
    var tn = d((w2, tl) => {
        var fw = jc(),
            dw = Qc(),
            Jc = Zc(),
            el = Jc && Jc.isTypedArray,
            pw = el ? dw(el) : fw;
        tl.exports = pw
    });
    var Pi = d((A2, rl) => {
        var gw = Dc(),
            hw = fr(),
            vw = be(),
            mw = Zr(),
            Ew = Jr(),
            yw = tn(),
            _w = Object.prototype,
            Iw = _w.hasOwnProperty;

        function Tw(e, t) {
            var r = vw(e),
                n = !r && hw(e),
                i = !r && !n && mw(e),
                o = !r && !n && !i && yw(e),
                a = r || n || i || o,
                u = a ? gw(e.length, String) : [],
                s = u.length;
            for (var f in e)(t || Iw.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || Ew(f, s))) && u.push(f);
            return u
        }
        rl.exports = Tw
    });
    var rn = d((O2, nl) => {
        var bw = Object.prototype;

        function ww(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || bw;
            return e === r
        }
        nl.exports = ww
    });
    var ol = d((x2, il) => {
        var Aw = ni(),
            Ow = Aw(Object.keys, Object);
        il.exports = Ow
    });
    var nn = d((S2, al) => {
        var xw = rn(),
            Sw = ol(),
            Rw = Object.prototype,
            Cw = Rw.hasOwnProperty;

        function Lw(e) {
            if (!xw(e)) return Sw(e);
            var t = [];
            for (var r in Object(e)) Cw.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        al.exports = Lw
    });
    var _t = d((R2, sl) => {
        var Pw = Ti(),
            Nw = en();

        function Dw(e) {
            return e != null && Nw(e.length) && !Pw(e)
        }
        sl.exports = Dw
    });
    var hr = d((C2, ul) => {
        var Mw = Pi(),
            Fw = nn(),
            qw = _t();

        function kw(e) {
            return qw(e) ? Mw(e) : Fw(e)
        }
        ul.exports = kw
    });
    var ll = d((L2, cl) => {
        var Xw = Si(),
            Gw = Ci(),
            Uw = hr();

        function Ww(e) {
            return Xw(e, Uw, Gw)
        }
        cl.exports = Ww
    });
    var pl = d((P2, dl) => {
        var fl = ll(),
            Vw = 1,
            Hw = Object.prototype,
            Bw = Hw.hasOwnProperty;

        function zw(e, t, r, n, i, o) {
            var a = r & Vw,
                u = fl(e),
                s = u.length,
                f = fl(t),
                y = f.length;
            if (s != y && !a) return !1;
            for (var g = s; g--;) {
                var h = u[g];
                if (!(a ? h in t : Bw.call(t, h))) return !1
            }
            var E = o.get(e),
                A = o.get(t);
            if (E && A) return E == t && A == e;
            var b = !0;
            o.set(e, t), o.set(t, e);
            for (var R = a; ++g < s;) {
                h = u[g];
                var w = e[h],
                    N = t[h];
                if (n) var C = a ? n(N, w, h, t, e, o) : n(w, N, h, e, t, o);
                if (!(C === void 0 ? w === N || i(w, N, r, n, o) : C)) {
                    b = !1;
                    break
                }
                R || (R = h == "constructor")
            }
            if (b && !R) {
                var M = e.constructor,
                    k = t.constructor;
                M != k && "constructor" in e && "constructor" in t && !(typeof M == "function" && M instanceof M && typeof k == "function" && k instanceof k) && (b = !1)
            }
            return o.delete(e), o.delete(t), b
        }
        dl.exports = zw
    });
    var hl = d((N2, gl) => {
        var Kw = dt(),
            jw = He(),
            Yw = Kw(jw, "DataView");
        gl.exports = Yw
    });
    var ml = d((D2, vl) => {
        var Qw = dt(),
            $w = He(),
            Zw = Qw($w, "Promise");
        vl.exports = Zw
    });
    var yl = d((M2, El) => {
        var Jw = dt(),
            eA = He(),
            tA = Jw(eA, "Set");
        El.exports = tA
    });
    var Ni = d((F2, _l) => {
        var rA = dt(),
            nA = He(),
            iA = rA(nA, "WeakMap");
        _l.exports = iA
    });
    var on = d((q2, xl) => {
        var Di = hl(),
            Mi = jr(),
            Fi = ml(),
            qi = yl(),
            ki = Ni(),
            Ol = ft(),
            Ut = wi(),
            Il = "[object Map]",
            oA = "[object Object]",
            Tl = "[object Promise]",
            bl = "[object Set]",
            wl = "[object WeakMap]",
            Al = "[object DataView]",
            aA = Ut(Di),
            sA = Ut(Mi),
            uA = Ut(Fi),
            cA = Ut(qi),
            lA = Ut(ki),
            It = Ol;
        (Di && It(new Di(new ArrayBuffer(1))) != Al || Mi && It(new Mi) != Il || Fi && It(Fi.resolve()) != Tl || qi && It(new qi) != bl || ki && It(new ki) != wl) && (It = function(e) {
            var t = Ol(e),
                r = t == oA ? e.constructor : void 0,
                n = r ? Ut(r) : "";
            if (n) switch (n) {
                case aA:
                    return Al;
                case sA:
                    return Il;
                case uA:
                    return Tl;
                case cA:
                    return bl;
                case lA:
                    return wl
            }
            return t
        });
        xl.exports = It
    });
    var Ml = d((k2, Dl) => {
        var Xi = Ai(),
            fA = Oi(),
            dA = wc(),
            pA = pl(),
            Sl = on(),
            Rl = be(),
            Cl = Zr(),
            gA = tn(),
            hA = 1,
            Ll = "[object Arguments]",
            Pl = "[object Array]",
            an = "[object Object]",
            vA = Object.prototype,
            Nl = vA.hasOwnProperty;

        function mA(e, t, r, n, i, o) {
            var a = Rl(e),
                u = Rl(t),
                s = a ? Pl : Sl(e),
                f = u ? Pl : Sl(t);
            s = s == Ll ? an : s, f = f == Ll ? an : f;
            var y = s == an,
                g = f == an,
                h = s == f;
            if (h && Cl(e)) {
                if (!Cl(t)) return !1;
                a = !0, y = !1
            }
            if (h && !y) return o || (o = new Xi), a || gA(e) ? fA(e, t, r, n, i, o) : dA(e, t, s, r, n, i, o);
            if (!(r & hA)) {
                var E = y && Nl.call(e, "__wrapped__"),
                    A = g && Nl.call(t, "__wrapped__");
                if (E || A) {
                    var b = E ? e.value() : e,
                        R = A ? t.value() : t;
                    return o || (o = new Xi), i(b, R, r, n, o)
                }
            }
            return h ? (o || (o = new Xi), pA(e, t, r, n, i, o)) : !1
        }
        Dl.exports = mA
    });
    var Gi = d((X2, kl) => {
        var EA = Ml(),
            Fl = ot();

        function ql(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Fl(e) && !Fl(t) ? e !== e && t !== t : EA(e, t, r, n, ql, i)
        }
        kl.exports = ql
    });
    var Gl = d((G2, Xl) => {
        var yA = Ai(),
            _A = Gi(),
            IA = 1,
            TA = 2;

        function bA(e, t, r, n) {
            var i = r.length,
                o = i,
                a = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var u = r[i];
                if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
            }
            for (; ++i < o;) {
                u = r[i];
                var s = u[0],
                    f = e[s],
                    y = u[1];
                if (a && u[2]) {
                    if (f === void 0 && !(s in e)) return !1
                } else {
                    var g = new yA;
                    if (n) var h = n(f, y, s, e, t, g);
                    if (!(h === void 0 ? _A(y, f, IA | TA, n, g) : h)) return !1
                }
            }
            return !0
        }
        Xl.exports = bA
    });
    var Ui = d((U2, Ul) => {
        var wA = et();

        function AA(e) {
            return e === e && !wA(e)
        }
        Ul.exports = AA
    });
    var Vl = d((W2, Wl) => {
        var OA = Ui(),
            xA = hr();

        function SA(e) {
            for (var t = xA(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, OA(i)]
            }
            return t
        }
        Wl.exports = SA
    });
    var Wi = d((V2, Hl) => {
        function RA(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Hl.exports = RA
    });
    var zl = d((H2, Bl) => {
        var CA = Gl(),
            LA = Vl(),
            PA = Wi();

        function NA(e) {
            var t = LA(e);
            return t.length == 1 && t[0][2] ? PA(t[0][0], t[0][1]) : function(r) {
                return r === e || CA(r, e, t)
            }
        }
        Bl.exports = NA
    });
    var vr = d((B2, Kl) => {
        var DA = ft(),
            MA = ot(),
            FA = "[object Symbol]";

        function qA(e) {
            return typeof e == "symbol" || MA(e) && DA(e) == FA
        }
        Kl.exports = qA
    });
    var sn = d((z2, jl) => {
        var kA = be(),
            XA = vr(),
            GA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            UA = /^\w*$/;

        function WA(e, t) {
            if (kA(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || XA(e) ? !0 : UA.test(e) || !GA.test(e) || t != null && e in Object(t)
        }
        jl.exports = WA
    });
    var $l = d((K2, Ql) => {
        var Yl = Yr(),
            VA = "Expected a function";

        function Vi(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(VA);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o, a
            };
            return r.cache = new(Vi.Cache || Yl), r
        }
        Vi.Cache = Yl;
        Ql.exports = Vi
    });
    var Jl = d((j2, Zl) => {
        var HA = $l(),
            BA = 500;

        function zA(e) {
            var t = HA(e, function(n) {
                    return r.size === BA && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        Zl.exports = zA
    });
    var tf = d((Y2, ef) => {
        var KA = Jl(),
            jA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            YA = /\\(\\)?/g,
            QA = KA(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(jA, function(r, n, i, o) {
                    t.push(i ? o.replace(YA, "$1") : n || r)
                }), t
            });
        ef.exports = QA
    });
    var Hi = d((Q2, rf) => {
        function $A(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        rf.exports = $A
    });
    var cf = d(($2, uf) => {
        var nf = Lt(),
            ZA = Hi(),
            JA = be(),
            e0 = vr(),
            t0 = 1 / 0,
            of = nf ? nf.prototype : void 0,
            af = of ? of .toString : void 0;

        function sf(e) {
            if (typeof e == "string") return e;
            if (JA(e)) return ZA(e, sf) + "";
            if (e0(e)) return af ? af.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -t0 ? "-0" : t
        }
        uf.exports = sf
    });
    var ff = d((Z2, lf) => {
        var r0 = cf();

        function n0(e) {
            return e == null ? "" : r0(e)
        }
        lf.exports = n0
    });
    var mr = d((J2, df) => {
        var i0 = be(),
            o0 = sn(),
            a0 = tf(),
            s0 = ff();

        function u0(e, t) {
            return i0(e) ? e : o0(e, t) ? [e] : a0(s0(e))
        }
        df.exports = u0
    });
    var Wt = d((eq, pf) => {
        var c0 = vr(),
            l0 = 1 / 0;

        function f0(e) {
            if (typeof e == "string" || c0(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -l0 ? "-0" : t
        }
        pf.exports = f0
    });
    var un = d((tq, gf) => {
        var d0 = mr(),
            p0 = Wt();

        function g0(e, t) {
            t = d0(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[p0(t[r++])];
            return r && r == n ? e : void 0
        }
        gf.exports = g0
    });
    var cn = d((rq, hf) => {
        var h0 = un();

        function v0(e, t, r) {
            var n = e == null ? void 0 : h0(e, t);
            return n === void 0 ? r : n
        }
        hf.exports = v0
    });
    var mf = d((nq, vf) => {
        function m0(e, t) {
            return e != null && t in Object(e)
        }
        vf.exports = m0
    });
    var yf = d((iq, Ef) => {
        var E0 = mr(),
            y0 = fr(),
            _0 = be(),
            I0 = Jr(),
            T0 = en(),
            b0 = Wt();

        function w0(e, t, r) {
            t = E0(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var a = b0(t[n]);
                if (!(o = e != null && r(e, a))) break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && T0(i) && I0(a, i) && (_0(e) || y0(e)))
        }
        Ef.exports = w0
    });
    var If = d((oq, _f) => {
        var A0 = mf(),
            O0 = yf();

        function x0(e, t) {
            return e != null && O0(e, t, A0)
        }
        _f.exports = x0
    });
    var bf = d((aq, Tf) => {
        var S0 = Gi(),
            R0 = cn(),
            C0 = If(),
            L0 = sn(),
            P0 = Ui(),
            N0 = Wi(),
            D0 = Wt(),
            M0 = 1,
            F0 = 2;

        function q0(e, t) {
            return L0(e) && P0(t) ? N0(D0(e), t) : function(r) {
                var n = R0(r, e);
                return n === void 0 && n === t ? C0(r, e) : S0(t, n, M0 | F0)
            }
        }
        Tf.exports = q0
    });
    var ln = d((sq, wf) => {
        function k0(e) {
            return e
        }
        wf.exports = k0
    });
    var Bi = d((uq, Af) => {
        function X0(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Af.exports = X0
    });
    var xf = d((cq, Of) => {
        var G0 = un();

        function U0(e) {
            return function(t) {
                return G0(t, e)
            }
        }
        Of.exports = U0
    });
    var Rf = d((lq, Sf) => {
        var W0 = Bi(),
            V0 = xf(),
            H0 = sn(),
            B0 = Wt();

        function z0(e) {
            return H0(e) ? W0(B0(e)) : V0(e)
        }
        Sf.exports = z0
    });
    var pt = d((fq, Cf) => {
        var K0 = zl(),
            j0 = bf(),
            Y0 = ln(),
            Q0 = be(),
            $0 = Rf();

        function Z0(e) {
            return typeof e == "function" ? e : e == null ? Y0 : typeof e == "object" ? Q0(e) ? j0(e[0], e[1]) : K0(e) : $0(e)
        }
        Cf.exports = Z0
    });
    var zi = d((dq, Lf) => {
        var J0 = pt(),
            eO = _t(),
            tO = hr();

        function rO(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!eO(t)) {
                    var o = J0(r, 3);
                    t = tO(t), r = function(u) {
                        return o(i[u], u, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Lf.exports = rO
    });
    var Ki = d((pq, Pf) => {
        function nO(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Pf.exports = nO
    });
    var Df = d((gq, Nf) => {
        var iO = /\s/;

        function oO(e) {
            for (var t = e.length; t-- && iO.test(e.charAt(t)););
            return t
        }
        Nf.exports = oO
    });
    var Ff = d((hq, Mf) => {
        var aO = Df(),
            sO = /^\s+/;

        function uO(e) {
            return e && e.slice(0, aO(e) + 1).replace(sO, "")
        }
        Mf.exports = uO
    });
    var fn = d((vq, Xf) => {
        var cO = Ff(),
            qf = et(),
            lO = vr(),
            kf = 0 / 0,
            fO = /^[-+]0x[0-9a-f]+$/i,
            dO = /^0b[01]+$/i,
            pO = /^0o[0-7]+$/i,
            gO = parseInt;

        function hO(e) {
            if (typeof e == "number") return e;
            if (lO(e)) return kf;
            if (qf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = qf(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = cO(e);
            var r = dO.test(e);
            return r || pO.test(e) ? gO(e.slice(2), r ? 2 : 8) : fO.test(e) ? kf : +e
        }
        Xf.exports = hO
    });
    var Wf = d((mq, Uf) => {
        var vO = fn(),
            Gf = 1 / 0,
            mO = 17976931348623157e292;

        function EO(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = vO(e), e === Gf || e === -Gf) {
                var t = e < 0 ? -1 : 1;
                return t * mO
            }
            return e === e ? e : 0
        }
        Uf.exports = EO
    });
    var ji = d((Eq, Vf) => {
        var yO = Wf();

        function _O(e) {
            var t = yO(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Vf.exports = _O
    });
    var Bf = d((yq, Hf) => {
        var IO = Ki(),
            TO = pt(),
            bO = ji(),
            wO = Math.max;

        function AO(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : bO(r);
            return i < 0 && (i = wO(n + i, 0)), IO(e, TO(t, 3), i)
        }
        Hf.exports = AO
    });
    var Yi = d((_q, zf) => {
        var OO = zi(),
            xO = Bf(),
            SO = OO(xO);
        zf.exports = SO
    });
    var Yf = {};
    Ne(Yf, {
        ELEMENT_MATCHES: () => RO,
        FLEX_PREFIXED: () => Qi,
        IS_BROWSER_ENV: () => ze,
        TRANSFORM_PREFIXED: () => gt,
        TRANSFORM_STYLE_PREFIXED: () => pn,
        withBrowser: () => dn
    });
    var jf, ze, dn, RO, Qi, gt, Kf, pn, gn = me(() => {
        "use strict";
        jf = le(Yi()), ze = typeof window < "u", dn = (e, t) => ze ? e() : t, RO = dn(() => (0, jf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Qi = dn(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), gt = dn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), Kf = gt.split("transform")[0], pn = Kf ? Kf + "TransformStyle" : "transformStyle"
    });
    var $i = d((Iq, ed) => {
        var CO = 4,
            LO = .001,
            PO = 1e-7,
            NO = 10,
            Er = 11,
            hn = 1 / (Er - 1),
            DO = typeof Float32Array == "function";

        function Qf(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function $f(e, t) {
            return 3 * t - 6 * e
        }

        function Zf(e) {
            return 3 * e
        }

        function vn(e, t, r) {
            return ((Qf(t, r) * e + $f(t, r)) * e + Zf(t)) * e
        }

        function Jf(e, t, r) {
            return 3 * Qf(t, r) * e * e + 2 * $f(t, r) * e + Zf(t)
        }

        function MO(e, t, r, n, i) {
            var o, a, u = 0;
            do a = t + (r - t) / 2, o = vn(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > PO && ++u < NO);
            return a
        }

        function FO(e, t, r, n) {
            for (var i = 0; i < CO; ++i) {
                var o = Jf(t, r, n);
                if (o === 0) return t;
                var a = vn(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        ed.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = DO ? new Float32Array(Er) : new Array(Er);
            if (t !== r || n !== i)
                for (var a = 0; a < Er; ++a) o[a] = vn(a * hn, t, n);

            function u(s) {
                for (var f = 0, y = 1, g = Er - 1; y !== g && o[y] <= s; ++y) f += hn;
                --y;
                var h = (s - o[y]) / (o[y + 1] - o[y]),
                    E = f + h * hn,
                    A = Jf(E, t, n);
                return A >= LO ? FO(s, E, t, n) : A === 0 ? E : MO(s, f, f + hn, t, n)
            }
            return function(f) {
                return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : vn(u(f), r, i)
            }
        }
    });
    var _r = {};
    Ne(_r, {
        bounce: () => Ex,
        bouncePast: () => yx,
        ease: () => qO,
        easeIn: () => kO,
        easeInOut: () => GO,
        easeOut: () => XO,
        inBack: () => cx,
        inCirc: () => ox,
        inCubic: () => HO,
        inElastic: () => dx,
        inExpo: () => rx,
        inOutBack: () => fx,
        inOutCirc: () => sx,
        inOutCubic: () => zO,
        inOutElastic: () => gx,
        inOutExpo: () => ix,
        inOutQuad: () => VO,
        inOutQuart: () => YO,
        inOutQuint: () => ZO,
        inOutSine: () => tx,
        inQuad: () => UO,
        inQuart: () => KO,
        inQuint: () => QO,
        inSine: () => JO,
        outBack: () => lx,
        outBounce: () => ux,
        outCirc: () => ax,
        outCubic: () => BO,
        outElastic: () => px,
        outExpo: () => nx,
        outQuad: () => WO,
        outQuart: () => jO,
        outQuint: () => $O,
        outSine: () => ex,
        swingFrom: () => vx,
        swingFromTo: () => hx,
        swingTo: () => mx
    });

    function UO(e) {
        return Math.pow(e, 2)
    }

    function WO(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function VO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function HO(e) {
        return Math.pow(e, 3)
    }

    function BO(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function zO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function KO(e) {
        return Math.pow(e, 4)
    }

    function jO(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function YO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function QO(e) {
        return Math.pow(e, 5)
    }

    function $O(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function ZO(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function JO(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function ex(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function tx(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function rx(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function nx(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function ix(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function ox(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function ax(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function sx(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function ux(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function cx(e) {
        let t = at;
        return e * e * ((t + 1) * e - t)
    }

    function lx(e) {
        let t = at;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function fx(e) {
        let t = at;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function dx(e) {
        let t = at,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function px(e) {
        let t = at,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function gx(e) {
        let t = at,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function hx(e) {
        let t = at;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function vx(e) {
        let t = at;
        return e * e * ((t + 1) * e - t)
    }

    function mx(e) {
        let t = at;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Ex(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function yx(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var yr, at, qO, kO, XO, GO, Zi = me(() => {
        "use strict";
        yr = le($i()), at = 1.70158, qO = (0, yr.default)(.25, .1, .25, 1), kO = (0, yr.default)(.42, 0, 1, 1), XO = (0, yr.default)(0, 0, .58, 1), GO = (0, yr.default)(.42, 0, .58, 1)
    });
    var rd = {};
    Ne(rd, {
        applyEasing: () => Ix,
        createBezierEasing: () => _x,
        optimizeFloat: () => Ir
    });

    function Ir(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function _x(e) {
        return (0, td.default)(...e)
    }

    function Ix(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Ir(r ? t > 0 ? r(t) : t : t > 0 && e && _r[e] ? _r[e](t) : t)
    }
    var td, Ji = me(() => {
        "use strict";
        Zi();
        td = le($i())
    });
    var od = {};
    Ne(od, {
        createElementState: () => id,
        ixElements: () => Mx,
        mergeActionState: () => eo
    });

    function id(e, t, r, n, i) {
        let o = r === Tx ? (0, Vt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, Vt.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function eo(e, t, r, n, i) {
        let o = qx(i);
        return (0, Vt.mergeIn)(e, [t, Dx, r], n, o)
    }

    function qx(e) {
        let {
            config: t
        } = e;
        return Fx.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                a = t[i],
                u = t[o];
            return a != null && u != null && (r[o] = u), r
        }, {})
    }
    var Vt, bq, Tx, wq, bx, wx, Ax, Ox, xx, Sx, Rx, Cx, Lx, Px, Nx, nd, Dx, Mx, Fx, ad = me(() => {
        "use strict";
        Vt = le(Dt());
        Me();
        ({
            HTML_ELEMENT: bq,
            PLAIN_OBJECT: Tx,
            ABSTRACT_NODE: wq,
            CONFIG_X_VALUE: bx,
            CONFIG_Y_VALUE: wx,
            CONFIG_Z_VALUE: Ax,
            CONFIG_VALUE: Ox,
            CONFIG_X_UNIT: xx,
            CONFIG_Y_UNIT: Sx,
            CONFIG_Z_UNIT: Rx,
            CONFIG_UNIT: Cx
        } = Ae), {
            IX2_SESSION_STOPPED: Lx,
            IX2_INSTANCE_ADDED: Px,
            IX2_ELEMENT_STATE_CHANGED: Nx
        } = Te, nd = {}, Dx = "refState", Mx = (e = nd, t = {}) => {
            switch (t.type) {
                case Lx:
                    return nd;
                case Px:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: a
                        } = t.payload,
                        {
                            actionTypeId: u
                        } = o,
                        s = e;
                        return (0, Vt.getIn)(s, [r, n]) !== n && (s = id(s, n, a, r, o)),
                        eo(s, r, u, i, o)
                    }
                case Nx:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return eo(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        Fx = [
            [bx, xx],
            [wx, Sx],
            [Ax, Rx],
            [Ox, Cx]
        ]
    });
    var sd = d(to => {
        "use strict";
        Object.defineProperty(to, "__esModule", {
            value: !0
        });

        function kx(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        kx(to, {
            clearPlugin: function() {
                return Bx
            },
            createPluginInstance: function() {
                return Vx
            },
            getPluginConfig: function() {
                return Xx
            },
            getPluginDestination: function() {
                return Wx
            },
            getPluginDuration: function() {
                return Gx
            },
            getPluginOrigin: function() {
                return Ux
            },
            renderPlugin: function() {
                return Hx
            }
        });
        var Xx = e => e.value,
            Gx = (e, t) => {
                if (t.config.duration !== "auto") return null;
                let r = parseFloat(e.getAttribute("data-duration"));
                return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
            },
            Ux = e => e || {
                value: 0
            },
            Wx = e => ({
                value: e.value
            }),
            Vx = e => {
                let t = window.Webflow.require("lottie").createInstance(e);
                return t.stop(), t.setSubframe(!0), t
            },
            Hx = (e, t, r) => {
                if (!e) return;
                let n = t[r.actionTypeId].value / 100;
                e.goToFrame(e.frames * n)
            },
            Bx = e => {
                window.Webflow.require("lottie").createInstance(e).stop()
            }
    });
    var cd = d(ro => {
        "use strict";
        Object.defineProperty(ro, "__esModule", {
            value: !0
        });

        function zx(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        zx(ro, {
            clearPlugin: function() {
                return rS
            },
            createPluginInstance: function() {
                return eS
            },
            getPluginConfig: function() {
                return Qx
            },
            getPluginDestination: function() {
                return Jx
            },
            getPluginDuration: function() {
                return $x
            },
            getPluginOrigin: function() {
                return Zx
            },
            renderPlugin: function() {
                return tS
            }
        });
        var Kx = e => document.querySelector(`[data-w-id="${e}"]`),
            jx = () => window.Webflow.require("spline"),
            Yx = (e, t) => e.filter(r => !t.includes(r)),
            Qx = (e, t) => e.value[t],
            $x = () => null,
            ud = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            Zx = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        a = Yx(n, o);
                    return a.length ? a.reduce((s, f) => (s[f] = ud[f], s), e) : e
                }
                return n.reduce((o, a) => (o[a] = ud[a], o), {})
            },
            Jx = e => e.value,
            eS = (e, t) => {
                let r = t ? .config ? .target ? .pluginElement;
                return r ? Kx(r) : null
            },
            tS = (e, t, r) => {
                let n = jx(),
                    i = n.getInstance(e),
                    o = r.config.target.objectId,
                    a = u => {
                        if (!u) throw new Error("Invalid spline app passed to renderSpline");
                        let s = o && u.findObjectById(o);
                        if (!s) return;
                        let {
                            PLUGIN_SPLINE: f
                        } = t;
                        f.positionX != null && (s.position.x = f.positionX), f.positionY != null && (s.position.y = f.positionY), f.positionZ != null && (s.position.z = f.positionZ), f.rotationX != null && (s.rotation.x = f.rotationX), f.rotationY != null && (s.rotation.y = f.rotationY), f.rotationZ != null && (s.rotation.z = f.rotationZ), f.scaleX != null && (s.scale.x = f.scaleX), f.scaleY != null && (s.scale.y = f.scaleY), f.scaleZ != null && (s.scale.z = f.scaleZ)
                    };
                i ? a(i.spline) : n.setLoadHandler(e, a)
            },
            rS = () => null
    });
    var io = d(no => {
        "use strict";
        Object.defineProperty(no, "__esModule", {
            value: !0
        });
        Object.defineProperty(no, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return nS
            }
        });
        var ld = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function nS(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                u = (typeof ld[o] == "string" ? ld[o].toLowerCase() : null) || o;
            if (u.startsWith("#")) {
                let s = u.substring(1);
                s.length === 3 || s.length === 4 ? (t = parseInt(s[0] + s[0], 16), r = parseInt(s[1] + s[1], 16), n = parseInt(s[2] + s[2], 16), s.length === 4 && (i = parseInt(s[3] + s[3], 16) / 255)) : (s.length === 6 || s.length === 8) && (t = parseInt(s.substring(0, 2), 16), r = parseInt(s.substring(2, 4), 16), n = parseInt(s.substring(4, 6), 16), s.length === 8 && (i = parseInt(s.substring(6, 8), 16) / 255))
            } else if (u.startsWith("rgba")) {
                let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10), i = parseFloat(s[3])
            } else if (u.startsWith("rgb")) {
                let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10)
            } else if (u.startsWith("hsla")) {
                let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
                    f = parseFloat(s[0]),
                    y = parseFloat(s[1].replace("%", "")) / 100,
                    g = parseFloat(s[2].replace("%", "")) / 100;
                i = parseFloat(s[3]);
                let h = (1 - Math.abs(2 * g - 1)) * y,
                    E = h * (1 - Math.abs(f / 60 % 2 - 1)),
                    A = g - h / 2,
                    b, R, w;
                f >= 0 && f < 60 ? (b = h, R = E, w = 0) : f >= 60 && f < 120 ? (b = E, R = h, w = 0) : f >= 120 && f < 180 ? (b = 0, R = h, w = E) : f >= 180 && f < 240 ? (b = 0, R = E, w = h) : f >= 240 && f < 300 ? (b = E, R = 0, w = h) : (b = h, R = 0, w = E), t = Math.round((b + A) * 255), r = Math.round((R + A) * 255), n = Math.round((w + A) * 255)
            } else if (u.startsWith("hsl")) {
                let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
                    f = parseFloat(s[0]),
                    y = parseFloat(s[1].replace("%", "")) / 100,
                    g = parseFloat(s[2].replace("%", "")) / 100,
                    h = (1 - Math.abs(2 * g - 1)) * y,
                    E = h * (1 - Math.abs(f / 60 % 2 - 1)),
                    A = g - h / 2,
                    b, R, w;
                f >= 0 && f < 60 ? (b = h, R = E, w = 0) : f >= 60 && f < 120 ? (b = E, R = h, w = 0) : f >= 120 && f < 180 ? (b = 0, R = h, w = E) : f >= 180 && f < 240 ? (b = 0, R = E, w = h) : f >= 240 && f < 300 ? (b = E, R = 0, w = h) : (b = h, R = 0, w = E), t = Math.round((b + A) * 255), r = Math.round((R + A) * 255), n = Math.round((w + A) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    });
    var fd = d(oo => {
        "use strict";
        Object.defineProperty(oo, "__esModule", {
            value: !0
        });

        function iS(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        iS(oo, {
            clearPlugin: function() {
                return dS
            },
            createPluginInstance: function() {
                return lS
            },
            getPluginConfig: function() {
                return aS
            },
            getPluginDestination: function() {
                return cS
            },
            getPluginDuration: function() {
                return sS
            },
            getPluginOrigin: function() {
                return uS
            },
            renderPlugin: function() {
                return fS
            }
        });
        var oS = io(),
            aS = (e, t) => e.value[t],
            sS = () => null,
            uS = (e, t) => {
                if (e) return e;
                let r = t.config.value,
                    n = t.config.target.objectId,
                    i = getComputedStyle(document.documentElement).getPropertyValue(n);
                if (r.size != null) return {
                    size: parseInt(i, 10)
                };
                if (r.red != null && r.green != null && r.blue != null) return (0, oS.normalizeColor)(i)
            },
            cS = e => e.value,
            lS = () => null,
            fS = (e, t, r) => {
                let n = r.config.target.objectId,
                    i = r.config.value.unit,
                    {
                        PLUGIN_VARIABLE: o
                    } = t,
                    {
                        size: a,
                        red: u,
                        green: s,
                        blue: f,
                        alpha: y
                    } = o,
                    g;
                a != null && (g = a + i), u != null && f != null && s != null && y != null && (g = `rgba(${u}, ${s}, ${f}, ${y})`), g != null && document.documentElement.style.setProperty(n, g)
            },
            dS = (e, t) => {
                let r = t.config.target.objectId;
                document.documentElement.style.removeProperty(r)
            }
    });
    var pd = d(uo => {
        "use strict";
        Object.defineProperty(uo, "__esModule", {
            value: !0
        });
        Object.defineProperty(uo, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return vS
            }
        });
        var ao = (Me(), Qe(ms)),
            pS = so(sd()),
            gS = so(cd()),
            hS = so(fd());

        function dd(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (dd = function(n) {
                return n ? r : t
            })(e)
        }

        function so(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var r = dd(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        var vS = new Map([
            [ao.ActionTypeConsts.PLUGIN_LOTTIE, { ...pS
            }],
            [ao.ActionTypeConsts.PLUGIN_SPLINE, { ...gS
            }],
            [ao.ActionTypeConsts.PLUGIN_VARIABLE, { ...hS
            }]
        ])
    });
    var gd = {};
    Ne(gd, {
        clearPlugin: () => ho,
        createPluginInstance: () => ES,
        getPluginConfig: () => lo,
        getPluginDestination: () => po,
        getPluginDuration: () => mS,
        getPluginOrigin: () => fo,
        isPluginType: () => Tt,
        renderPlugin: () => go
    });

    function Tt(e) {
        return co.pluginMethodMap.has(e)
    }
    var co, bt, lo, fo, mS, po, ES, go, ho, vo = me(() => {
        "use strict";
        gn();
        co = le(pd());
        bt = e => t => {
            if (!ze) return () => null;
            let r = co.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, lo = bt("getPluginConfig"), fo = bt("getPluginOrigin"), mS = bt("getPluginDuration"), po = bt("getPluginDestination"), ES = bt("createPluginInstance"), go = bt("renderPlugin"), ho = bt("clearPlugin")
    });
    var vd = d((Lq, hd) => {
        function yS(e, t) {
            return e == null || e !== e ? t : e
        }
        hd.exports = yS
    });
    var Ed = d((Pq, md) => {
        function _S(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        md.exports = _S
    });
    var _d = d((Nq, yd) => {
        function IS(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), u = a.length; u--;) {
                    var s = a[e ? u : ++i];
                    if (r(o[s], s, o) === !1) break
                }
                return t
            }
        }
        yd.exports = IS
    });
    var Td = d((Dq, Id) => {
        var TS = _d(),
            bS = TS();
        Id.exports = bS
    });
    var mo = d((Mq, bd) => {
        var wS = Td(),
            AS = hr();

        function OS(e, t) {
            return e && wS(e, t, AS)
        }
        bd.exports = OS
    });
    var Ad = d((Fq, wd) => {
        var xS = _t();

        function SS(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!xS(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r);
                    (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
                return r
            }
        }
        wd.exports = SS
    });
    var Eo = d((qq, Od) => {
        var RS = mo(),
            CS = Ad(),
            LS = CS(RS);
        Od.exports = LS
    });
    var Sd = d((kq, xd) => {
        function PS(e, t, r, n, i) {
            return i(e, function(o, a, u) {
                r = n ? (n = !1, o) : t(r, o, a, u)
            }), r
        }
        xd.exports = PS
    });
    var Cd = d((Xq, Rd) => {
        var NS = Ed(),
            DS = Eo(),
            MS = pt(),
            FS = Sd(),
            qS = be();

        function kS(e, t, r) {
            var n = qS(e) ? NS : FS,
                i = arguments.length < 3;
            return n(e, MS(t, 4), r, i, DS)
        }
        Rd.exports = kS
    });
    var Pd = d((Gq, Ld) => {
        var XS = Ki(),
            GS = pt(),
            US = ji(),
            WS = Math.max,
            VS = Math.min;

        function HS(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = US(r), i = r < 0 ? WS(n + i, 0) : VS(i, n - 1)), XS(e, GS(t, 3), i, !0)
        }
        Ld.exports = HS
    });
    var Dd = d((Uq, Nd) => {
        var BS = zi(),
            zS = Pd(),
            KS = BS(zS);
        Nd.exports = KS
    });

    function Md(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function jS(e, t) {
        if (Md(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !Md(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var yo, Fd = me(() => {
        "use strict";
        yo = jS
    });
    var ep = {};
    Ne(ep, {
        cleanupHTMLElement: () => BR,
        clearAllStyles: () => HR,
        clearObjectCache: () => fR,
        getActionListProgress: () => KR,
        getAffectedElements: () => wo,
        getComputedStyle: () => yR,
        getDestinationValues: () => OR,
        getElementId: () => hR,
        getInstanceId: () => pR,
        getInstanceOrigin: () => TR,
        getItemConfigByKey: () => AR,
        getMaxDurationItemIndex: () => Jd,
        getNamespacedParameterId: () => QR,
        getRenderType: () => Qd,
        getStyleProp: () => xR,
        mediaQueriesEqual: () => ZR,
        observeStore: () => ER,
        reduceListToGroup: () => jR,
        reifyState: () => vR,
        renderHTMLElement: () => SR,
        shallowEqual: () => yo,
        shouldAllowMediaQuery: () => $R,
        shouldNamespaceEventParameter: () => YR,
        stringifyTarget: () => JR
    });

    function fR() {
        mn.clear()
    }

    function pR() {
        return "i" + dR++
    }

    function hR(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + gR++
    }

    function vR({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, In.default)(e, (a, u) => {
                let {
                    eventTypeId: s
                } = u;
                return a[s] || (a[s] = {}), a[s][u.id] = u, a
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function ER({
        store: e,
        select: t,
        onChange: r,
        comparator: n = mR
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, a = o(s), u = t(i());

        function s() {
            let f = t(i());
            if (f == null) {
                a();
                return
            }
            n(f, u) || (u = f, r(u, e))
        }
        return a
    }

    function Xd(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: u
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: u
            }
        }
        return {}
    }

    function wo({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((S, m) => S.concat(wo({
            config: {
                target: m
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: a,
            getQuerySelector: u,
            queryDocument: s,
            getChildElements: f,
            getSiblingElements: y,
            matchSelector: g,
            elementContains: h,
            isSiblingNode: E
        } = i, {
            target: A
        } = e;
        if (!A) return [];
        let {
            id: b,
            objectId: R,
            selector: w,
            selectorGuids: N,
            appliesTo: C,
            useEventTarget: M
        } = Xd(A);
        if (R) return [mn.has(R) ? mn.get(R) : mn.set(R, {}).get(R)];
        if (C === Ei.PAGE) {
            let S = a(b);
            return S ? [S] : []
        }
        let F = (t ? .action ? .config ? .affectedElements ? ? {})[b || w] || {},
            K = !!(F.id || F.selector),
            j, $, ee, V = t && u(Xd(t.target));
        if (K ? (j = F.limitAffectedElements, $ = V, ee = u(F)) : $ = ee = u({
                id: b,
                selector: w,
                selectorGuids: N
            }), t && M) {
            let S = r && (ee || M === !0) ? [r] : s(V);
            if (ee) {
                if (M === uR) return s(ee).filter(m => S.some(D => h(m, D)));
                if (M === qd) return s(ee).filter(m => S.some(D => h(D, m)));
                if (M === kd) return s(ee).filter(m => S.some(D => E(D, m)))
            }
            return S
        }
        return $ == null || ee == null ? [] : ze && n ? s(ee).filter(S => n.contains(S)) : j === qd ? s($, ee) : j === sR ? f(s($)).filter(g(ee)) : j === kd ? y(s($)).filter(g(ee)) : s(ee)
    }

    function yR({
        element: e,
        actionItem: t
    }) {
        if (!ze) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case jt:
            case Yt:
            case Qt:
            case $t:
            case bn:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function TR(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: a
        } = n;
        if (Tt(a)) return fo(a)(t[a], n);
        switch (n.actionTypeId) {
            case Bt:
            case zt:
            case Kt:
            case Ar:
                return t[n.actionTypeId] || Ao[n.actionTypeId];
            case Or:
                return _R(t[n.actionTypeId], n.config.filters);
            case xr:
                return IR(t[n.actionTypeId], n.config.fontVariations);
            case Kd:
                return {
                    value: (0, st.default)(parseFloat(o(e, yn)), 1)
                };
            case jt:
                {
                    let u = o(e, tt),
                        s = o(e, rt),
                        f, y;
                    return n.config.widthUnit === ht ? f = Gd.test(u) ? parseFloat(u) : parseFloat(r.width) : f = (0, st.default)(parseFloat(u), parseFloat(r.width)),
                    n.config.heightUnit === ht ? y = Gd.test(s) ? parseFloat(s) : parseFloat(r.height) : y = (0, st.default)(parseFloat(s), parseFloat(r.height)),
                    {
                        widthValue: f,
                        heightValue: y
                    }
                }
            case Yt:
            case Qt:
            case $t:
                return UR({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case bn:
                return {
                    value: (0, st.default)(o(e, _n), r.display)
                };
            case lR:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function OR({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (Tt(t.actionTypeId)) return po(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case Bt:
            case zt:
            case Kt:
            case Ar:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case jt:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: a,
                        heightUnit: u
                    } = t.config,
                    {
                        widthValue: s,
                        heightValue: f
                    } = t.config;
                    if (!ze) return {
                        widthValue: s,
                        heightValue: f
                    };
                    if (a === ht) {
                        let y = n(e, tt);
                        i(e, tt, ""), s = o(e, "offsetWidth"), i(e, tt, y)
                    }
                    if (u === ht) {
                        let y = n(e, rt);
                        i(e, rt, ""), f = o(e, "offsetHeight"), i(e, rt, y)
                    }
                    return {
                        widthValue: s,
                        heightValue: f
                    }
                }
            case Yt:
            case Qt:
            case $t:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a,
                        globalSwatchId: u
                    } = t.config;
                    if (u && u.startsWith("--")) {
                        let {
                            getStyle: s
                        } = r, f = s(e, u), y = (0, Vd.normalizeColor)(f);
                        return {
                            rValue: y.red,
                            gValue: y.green,
                            bValue: y.blue,
                            aValue: y.alpha
                        }
                    }
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a
                    }
                }
            case Or:
                return t.config.filters.reduce(bR, {});
            case xr:
                return t.config.fontVariations.reduce(wR, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function Qd(e) {
        if (/^TRANSFORM_/.test(e)) return Bd;
        if (/^STYLE_/.test(e)) return To;
        if (/^GENERAL_/.test(e)) return Io;
        if (/^PLUGIN_/.test(e)) return zd
    }

    function xR(e, t) {
        return e === To ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function SR(e, t, r, n, i, o, a, u, s) {
        switch (u) {
            case Bd:
                return NR(e, t, r, i, a);
            case To:
                return WR(e, t, r, i, o, a);
            case Io:
                return VR(e, i, a);
            case zd:
                {
                    let {
                        actionTypeId: f
                    } = i;
                    if (Tt(f)) return go(f)(s, t, i)
                }
        }
    }

    function NR(e, t, r, n, i) {
        let o = PR.map(u => {
                let s = Ao[u],
                    {
                        xValue: f = s.xValue,
                        yValue: y = s.yValue,
                        zValue: g = s.zValue,
                        xUnit: h = "",
                        yUnit: E = "",
                        zUnit: A = ""
                    } = t[u] || {};
                switch (u) {
                    case Bt:
                        return `${$S}(${f}${h}, ${y}${E}, ${g}${A})`;
                    case zt:
                        return `${ZS}(${f}${h}, ${y}${E}, ${g}${A})`;
                    case Kt:
                        return `${JS}(${f}${h}) ${eR}(${y}${E}) ${tR}(${g}${A})`;
                    case Ar:
                        return `${rR}(${f}${h}, ${y}${E})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: a
            } = i;
        wt(e, gt, i), a(e, gt, o), FR(n, r) && a(e, pn, nR)
    }

    function DR(e, t, r, n) {
        let i = (0, In.default)(t, (a, u, s) => `${a} ${s}(${u}${LR(s,r)})`, ""),
            {
                setStyle: o
            } = n;
        wt(e, Tr, n), o(e, Tr, i)
    }

    function MR(e, t, r, n) {
        let i = (0, In.default)(t, (a, u, s) => (a.push(`"${s}" ${u}`), a), []).join(", "),
            {
                setStyle: o
            } = n;
        wt(e, br, n), o(e, br, i)
    }

    function FR({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === Bt && n !== void 0 || e === zt && n !== void 0 || e === Kt && (t !== void 0 || r !== void 0)
    }

    function GR(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function UR({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = bo[t],
            o = n(e, i),
            a = kR.test(o) ? o : r[i],
            u = GR(XR, a).split(wr);
        return {
            rValue: (0, st.default)(parseInt(u[0], 10), 255),
            gValue: (0, st.default)(parseInt(u[1], 10), 255),
            bValue: (0, st.default)(parseInt(u[2], 10), 255),
            aValue: (0, st.default)(parseFloat(u[3]), 1)
        }
    }

    function WR(e, t, r, n, i, o) {
        let {
            setStyle: a
        } = o;
        switch (n.actionTypeId) {
            case jt:
                {
                    let {
                        widthUnit: u = "",
                        heightUnit: s = ""
                    } = n.config,
                    {
                        widthValue: f,
                        heightValue: y
                    } = r;f !== void 0 && (u === ht && (u = "px"), wt(e, tt, o), a(e, tt, f + u)),
                    y !== void 0 && (s === ht && (s = "px"), wt(e, rt, o), a(e, rt, y + s));
                    break
                }
            case Or:
                {
                    DR(e, r, n.config, o);
                    break
                }
            case xr:
                {
                    MR(e, r, n.config, o);
                    break
                }
            case Yt:
            case Qt:
            case $t:
                {
                    let u = bo[n.actionTypeId],
                        s = Math.round(r.rValue),
                        f = Math.round(r.gValue),
                        y = Math.round(r.bValue),
                        g = r.aValue;wt(e, u, o),
                    a(e, u, g >= 1 ? `rgb(${s},${f},${y})` : `rgba(${s},${f},${y},${g})`);
                    break
                }
            default:
                {
                    let {
                        unit: u = ""
                    } = n.config;wt(e, i, o),
                    a(e, i, r.value + u);
                    break
                }
        }
    }

    function VR(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case bn:
                {
                    let {
                        value: i
                    } = t.config;i === iR && ze ? n(e, _n, Qi) : n(e, _n, i);
                    return
                }
        }
    }

    function wt(e, t, r) {
        if (!ze) return;
        let n = Yd[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, Ht);
        if (!a) {
            o(e, Ht, n);
            return
        }
        let u = a.split(wr).map(jd);
        u.indexOf(n) === -1 && o(e, Ht, u.concat(n).join(wr))
    }

    function $d(e, t, r) {
        if (!ze) return;
        let n = Yd[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, Ht);
        !a || a.indexOf(n) === -1 || o(e, Ht, a.split(wr).map(jd).filter(u => u !== n).join(wr))
    }

    function HR({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let a = n[o],
                {
                    config: u
                } = a.action,
                {
                    actionListId: s
                } = u,
                f = i[s];
            f && Ud({
                actionList: f,
                event: a,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            Ud({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function Ud({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            Wd({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: a
            } = o;
            a.forEach(u => {
                Wd({
                    actionGroup: u,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function Wd({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: a
            } = i, u;
            Tt(o) ? u = s => ho(o)(s, i) : u = Zd({
                effect: zR,
                actionTypeId: o,
                elementApi: r
            }), wo({
                config: a,
                event: t,
                elementApi: r
            }).forEach(u)
        })
    }

    function BR(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === jt) {
            let {
                config: a
            } = t;
            a.widthUnit === ht && n(e, tt, ""), a.heightUnit === ht && n(e, rt, "")
        }
        i(e, Ht) && Zd({
            effect: $d,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function zR(e, t, r) {
        let {
            setStyle: n
        } = r;
        $d(e, t, r), n(e, t, ""), t === gt && n(e, pn, "")
    }

    function Jd(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, a = o.delay + o.duration;
            a >= t && (t = a, r = i)
        }), r
    }

    function KR(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, a = 0, u = 0;
        return r.forEach((s, f) => {
            if (n && f === 0) return;
            let {
                actionItems: y
            } = s, g = y[Jd(y)], {
                config: h,
                actionTypeId: E
            } = g;
            i.id === g.id && (u = a + o);
            let A = Qd(E) === Io ? 0 : h.duration;
            a += h.delay + A
        }), a > 0 ? Ir(u / a) : 0
    }

    function jR({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], a = u => (o.push((0, Tn.mergeIn)(u, ["config"], {
            delay: 0,
            duration: 0
        })), u.id === t);
        return n && n.some(({
            actionItems: u
        }) => u.some(a)), i && i.some(u => {
            let {
                continuousActionGroups: s
            } = u;
            return s.some(({
                actionItems: f
            }) => f.some(a))
        }), (0, Tn.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function YR(e, {
        basedOn: t
    }) {
        return e === Be.SCROLLING_IN_VIEW && (t === Je.ELEMENT || t == null) || e === Be.MOUSE_MOVE && t === Je.ELEMENT
    }

    function QR(e, t) {
        return e + cR + t
    }

    function $R(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function ZR(e, t) {
        return yo(e && e.sort(), t && t.sort())
    }

    function JR(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + _o + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + _o + r + _o + n
    }
    var st, In, En, Tn, Vd, YS, QS, $S, ZS, JS, eR, tR, rR, nR, iR, yn, Tr, br, tt, rt, Hd, oR, aR, qd, sR, kd, uR, _n, Ht, ht, wr, cR, _o, Bd, Io, To, zd, Bt, zt, Kt, Ar, Kd, Or, xr, jt, Yt, Qt, $t, bn, lR, jd, bo, Yd, mn, dR, gR, mR, Gd, _R, IR, bR, wR, AR, Ao, RR, CR, LR, PR, qR, kR, XR, Zd, tp = me(() => {
        "use strict";
        st = le(vd()), In = le(Cd()), En = le(Dd()), Tn = le(Dt());
        Me();
        Fd();
        Ji();
        Vd = le(io());
        vo();
        gn();
        ({
            BACKGROUND: YS,
            TRANSFORM: QS,
            TRANSLATE_3D: $S,
            SCALE_3D: ZS,
            ROTATE_X: JS,
            ROTATE_Y: eR,
            ROTATE_Z: tR,
            SKEW: rR,
            PRESERVE_3D: nR,
            FLEX: iR,
            OPACITY: yn,
            FILTER: Tr,
            FONT_VARIATION_SETTINGS: br,
            WIDTH: tt,
            HEIGHT: rt,
            BACKGROUND_COLOR: Hd,
            BORDER_COLOR: oR,
            COLOR: aR,
            CHILDREN: qd,
            IMMEDIATE_CHILDREN: sR,
            SIBLINGS: kd,
            PARENT: uR,
            DISPLAY: _n,
            WILL_CHANGE: Ht,
            AUTO: ht,
            COMMA_DELIMITER: wr,
            COLON_DELIMITER: cR,
            BAR_DELIMITER: _o,
            RENDER_TRANSFORM: Bd,
            RENDER_GENERAL: Io,
            RENDER_STYLE: To,
            RENDER_PLUGIN: zd
        } = Ae), {
            TRANSFORM_MOVE: Bt,
            TRANSFORM_SCALE: zt,
            TRANSFORM_ROTATE: Kt,
            TRANSFORM_SKEW: Ar,
            STYLE_OPACITY: Kd,
            STYLE_FILTER: Or,
            STYLE_FONT_VARIATION: xr,
            STYLE_SIZE: jt,
            STYLE_BACKGROUND_COLOR: Yt,
            STYLE_BORDER: Qt,
            STYLE_TEXT_COLOR: $t,
            GENERAL_DISPLAY: bn,
            OBJECT_VALUE: lR
        } = De, jd = e => e.trim(), bo = Object.freeze({
            [Yt]: Hd,
            [Qt]: oR,
            [$t]: aR
        }), Yd = Object.freeze({
            [gt]: QS,
            [Hd]: YS,
            [yn]: yn,
            [Tr]: Tr,
            [tt]: tt,
            [rt]: rt,
            [br]: br
        }), mn = new Map;
        dR = 1;
        gR = 1;
        mR = (e, t) => e === t;
        Gd = /px/, _R = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = RR[n.type]), r), e || {}), IR = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = CR[n.type] || n.defaultValue || 0), r), e || {});
        bR = (e, t) => (t && (e[t.type] = t.value || 0), e), wR = (e, t) => (t && (e[t.type] = t.value || 0), e), AR = (e, t, r) => {
            if (Tt(e)) return lo(e)(r, t);
            switch (e) {
                case Or:
                    {
                        let n = (0, En.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case xr:
                    {
                        let n = (0, En.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        Ao = {
            [Bt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [zt]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Kt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Ar]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, RR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), CR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), LR = (e, t) => {
            let r = (0, En.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, PR = Object.keys(Ao);
        qR = "\\(([^)]+)\\)", kR = /^rgb/, XR = RegExp(`rgba?${qR}`);
        Zd = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case Bt:
                case zt:
                case Kt:
                case Ar:
                    e(n, gt, r);
                    break;
                case Or:
                    e(n, Tr, r);
                    break;
                case xr:
                    e(n, br, r);
                    break;
                case Kd:
                    e(n, yn, r);
                    break;
                case jt:
                    e(n, tt, r), e(n, rt, r);
                    break;
                case Yt:
                case Qt:
                case $t:
                    e(n, bo[t], r);
                    break;
                case bn:
                    e(n, _n, r);
                    break
            }
        }
    });
    var At = d(Oo => {
        "use strict";
        Object.defineProperty(Oo, "__esModule", {
            value: !0
        });

        function eC(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        eC(Oo, {
            IX2BrowserSupport: function() {
                return tC
            },
            IX2EasingUtils: function() {
                return nC
            },
            IX2Easings: function() {
                return rC
            },
            IX2ElementsReducer: function() {
                return iC
            },
            IX2VanillaPlugins: function() {
                return oC
            },
            IX2VanillaUtils: function() {
                return aC
            }
        });
        var tC = Zt((gn(), Qe(Yf))),
            rC = Zt((Zi(), Qe(_r))),
            nC = Zt((Ji(), Qe(rd))),
            iC = Zt((ad(), Qe(od))),
            oC = Zt((vo(), Qe(gd))),
            aC = Zt((tp(), Qe(ep)));

        function rp(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (rp = function(n) {
                return n ? r : t
            })(e)
        }

        function Zt(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var r = rp(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
    });
    var An, ut, sC, uC, cC, lC, fC, dC, wn, np, pC, gC, xo, hC, vC, mC, EC, ip, op = me(() => {
        "use strict";
        Me();
        An = le(At()), ut = le(Dt()), {
            IX2_RAW_DATA_IMPORTED: sC,
            IX2_SESSION_STOPPED: uC,
            IX2_INSTANCE_ADDED: cC,
            IX2_INSTANCE_STARTED: lC,
            IX2_INSTANCE_REMOVED: fC,
            IX2_ANIMATION_FRAME_CHANGED: dC
        } = Te, {
            optimizeFloat: wn,
            applyEasing: np,
            createBezierEasing: pC
        } = An.IX2EasingUtils, {
            RENDER_GENERAL: gC
        } = Ae, {
            getItemConfigByKey: xo,
            getRenderType: hC,
            getStyleProp: vC
        } = An.IX2VanillaUtils, mC = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: a,
                restingValue: u,
                actionTypeId: s,
                customEasingFn: f,
                skipMotion: y,
                skipToValue: g
            } = e, {
                parameters: h
            } = t.payload, E = Math.max(1 - a, .01), A = h[n];
            A == null && (E = 1, A = u);
            let b = Math.max(A, 0) || 0,
                R = wn(b - r),
                w = y ? g : wn(r + R * E),
                N = w * 100;
            if (w === r && e.current) return e;
            let C, M, k, F;
            for (let j = 0, {
                    length: $
                } = i; j < $; j++) {
                let {
                    keyframe: ee,
                    actionItems: V
                } = i[j];
                if (j === 0 && (C = V[0]), N >= ee) {
                    C = V[0];
                    let S = i[j + 1],
                        m = S && N !== ee;
                    M = m ? S.actionItems[0] : null, m && (k = ee / 100, F = (S.keyframe - ee) / 100)
                }
            }
            let K = {};
            if (C && !M)
                for (let j = 0, {
                        length: $
                    } = o; j < $; j++) {
                    let ee = o[j];
                    K[ee] = xo(s, ee, C.config)
                } else if (C && M && k !== void 0 && F !== void 0) {
                    let j = (w - k) / F,
                        $ = C.config.easing,
                        ee = np($, j, f);
                    for (let V = 0, {
                            length: S
                        } = o; V < S; V++) {
                        let m = o[V],
                            D = xo(s, m, C.config),
                            J = (xo(s, m, M.config) - D) * ee + D;
                        K[m] = J
                    }
                }
            return (0, ut.merge)(e, {
                position: w,
                current: K
            })
        }, EC = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: a,
                verbose: u,
                actionItem: s,
                destination: f,
                destinationKeys: y,
                pluginDuration: g,
                instanceDelay: h,
                customEasingFn: E,
                skipMotion: A
            } = e, b = s.config.easing, {
                duration: R,
                delay: w
            } = s.config;
            g != null && (R = g), w = h ? ? w, a === gC ? R = 0 : (o || A) && (R = w = 0);
            let {
                now: N
            } = t.payload;
            if (r && n) {
                let C = N - (i + w);
                if (u) {
                    let j = N - i,
                        $ = R + w,
                        ee = wn(Math.min(Math.max(0, j / $), 1));
                    e = (0, ut.set)(e, "verboseTimeElapsed", $ * ee)
                }
                if (C < 0) return e;
                let M = wn(Math.min(Math.max(0, C / R), 1)),
                    k = np(b, M, E),
                    F = {},
                    K = null;
                return y.length && (K = y.reduce((j, $) => {
                    let ee = f[$],
                        V = parseFloat(n[$]) || 0,
                        m = (parseFloat(ee) - V) * k + V;
                    return j[$] = m, j
                }, {})), F.current = K, F.position = M, M === 1 && (F.active = !1, F.complete = !0), (0, ut.merge)(e, F)
            }
            return e
        }, ip = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case sC:
                    return t.payload.ixInstances || Object.freeze({});
                case uC:
                    return Object.freeze({});
                case cC:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: u,
                            actionListId: s,
                            groupIndex: f,
                            isCarrier: y,
                            origin: g,
                            destination: h,
                            immediate: E,
                            verbose: A,
                            continuous: b,
                            parameterId: R,
                            actionGroups: w,
                            smoothing: N,
                            restingValue: C,
                            pluginInstance: M,
                            pluginDuration: k,
                            instanceDelay: F,
                            skipMotion: K,
                            skipToValue: j
                        } = t.payload,
                        {
                            actionTypeId: $
                        } = i,
                        ee = hC($),
                        V = vC(ee, $),
                        S = Object.keys(h).filter(D => h[D] != null && typeof h[D] != "string"),
                        {
                            easing: m
                        } = i.config;
                        return (0, ut.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: g,
                            destination: h,
                            destinationKeys: S,
                            immediate: E,
                            verbose: A,
                            current: null,
                            actionItem: i,
                            actionTypeId: $,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: u,
                            actionListId: s,
                            groupIndex: f,
                            renderType: ee,
                            isCarrier: y,
                            styleProp: V,
                            continuous: b,
                            parameterId: R,
                            actionGroups: w,
                            smoothing: N,
                            restingValue: C,
                            pluginInstance: M,
                            pluginDuration: k,
                            instanceDelay: F,
                            skipMotion: K,
                            skipToValue: j,
                            customEasingFn: Array.isArray(m) && m.length === 4 ? pC(m) : void 0
                        })
                    }
                case lC:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, ut.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case fC:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let a = 0; a < o; a++) {
                            let u = i[a];
                            u !== r && (n[u] = e[u])
                        }
                        return n
                    }
                case dC:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let a = n[o],
                                u = e[a],
                                s = u.continuous ? mC : EC;
                            r = (0, ut.set)(r, a, s(u, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var yC, _C, IC, ap, sp = me(() => {
        "use strict";
        Me();
        ({
            IX2_RAW_DATA_IMPORTED: yC,
            IX2_SESSION_STOPPED: _C,
            IX2_PARAMETER_CHANGED: IC
        } = Te), ap = (e = {}, t) => {
            switch (t.type) {
                case yC:
                    return t.payload.ixParameters || {};
                case _C:
                    return {};
                case IC:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var lp = {};
    Ne(lp, {
        default: () => bC
    });
    var up, cp, TC, bC, fp = me(() => {
        "use strict";
        up = le(mi());
        ys();
        Gs();
        Vs();
        cp = le(At());
        op();
        sp();
        ({
            ixElements: TC
        } = cp.IX2ElementsReducer), bC = (0, up.combineReducers)({
            ixData: Es,
            ixRequest: Xs,
            ixSession: Ws,
            ixElements: TC,
            ixInstances: ip,
            ixParameters: ap
        })
    });
    var pp = d((ok, dp) => {
        var wC = ft(),
            AC = be(),
            OC = ot(),
            xC = "[object String]";

        function SC(e) {
            return typeof e == "string" || !AC(e) && OC(e) && wC(e) == xC
        }
        dp.exports = SC
    });
    var hp = d((ak, gp) => {
        var RC = Bi(),
            CC = RC("length");
        gp.exports = CC
    });
    var mp = d((sk, vp) => {
        var LC = "\\ud800-\\udfff",
            PC = "\\u0300-\\u036f",
            NC = "\\ufe20-\\ufe2f",
            DC = "\\u20d0-\\u20ff",
            MC = PC + NC + DC,
            FC = "\\ufe0e\\ufe0f",
            qC = "\\u200d",
            kC = RegExp("[" + qC + LC + MC + FC + "]");

        function XC(e) {
            return kC.test(e)
        }
        vp.exports = XC
    });
    var Op = d((uk, Ap) => {
        var yp = "\\ud800-\\udfff",
            GC = "\\u0300-\\u036f",
            UC = "\\ufe20-\\ufe2f",
            WC = "\\u20d0-\\u20ff",
            VC = GC + UC + WC,
            HC = "\\ufe0e\\ufe0f",
            BC = "[" + yp + "]",
            So = "[" + VC + "]",
            Ro = "\\ud83c[\\udffb-\\udfff]",
            zC = "(?:" + So + "|" + Ro + ")",
            _p = "[^" + yp + "]",
            Ip = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Tp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            KC = "\\u200d",
            bp = zC + "?",
            wp = "[" + HC + "]?",
            jC = "(?:" + KC + "(?:" + [_p, Ip, Tp].join("|") + ")" + wp + bp + ")*",
            YC = wp + bp + jC,
            QC = "(?:" + [_p + So + "?", So, Ip, Tp, BC].join("|") + ")",
            Ep = RegExp(Ro + "(?=" + Ro + ")|" + QC + YC, "g");

        function $C(e) {
            for (var t = Ep.lastIndex = 0; Ep.test(e);) ++t;
            return t
        }
        Ap.exports = $C
    });
    var Sp = d((ck, xp) => {
        var ZC = hp(),
            JC = mp(),
            eL = Op();

        function tL(e) {
            return JC(e) ? eL(e) : ZC(e)
        }
        xp.exports = tL
    });
    var Cp = d((lk, Rp) => {
        var rL = nn(),
            nL = on(),
            iL = _t(),
            oL = pp(),
            aL = Sp(),
            sL = "[object Map]",
            uL = "[object Set]";

        function cL(e) {
            if (e == null) return 0;
            if (iL(e)) return oL(e) ? aL(e) : e.length;
            var t = nL(e);
            return t == sL || t == uL ? e.size : rL(e).length
        }
        Rp.exports = cL
    });
    var Pp = d((fk, Lp) => {
        var lL = "Expected a function";

        function fL(e) {
            if (typeof e != "function") throw new TypeError(lL);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Lp.exports = fL
    });
    var Co = d((dk, Np) => {
        var dL = dt(),
            pL = function() {
                try {
                    var e = dL(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Np.exports = pL
    });
    var Lo = d((pk, Mp) => {
        var Dp = Co();

        function gL(e, t, r) {
            t == "__proto__" && Dp ? Dp(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Mp.exports = gL
    });
    var qp = d((gk, Fp) => {
        var hL = Lo(),
            vL = Kr(),
            mL = Object.prototype,
            EL = mL.hasOwnProperty;

        function yL(e, t, r) {
            var n = e[t];
            (!(EL.call(e, t) && vL(n, r)) || r === void 0 && !(t in e)) && hL(e, t, r)
        }
        Fp.exports = yL
    });
    var Gp = d((hk, Xp) => {
        var _L = qp(),
            IL = mr(),
            TL = Jr(),
            kp = et(),
            bL = Wt();

        function wL(e, t, r, n) {
            if (!kp(e)) return e;
            t = IL(t, e);
            for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o;) {
                var s = bL(t[i]),
                    f = r;
                if (s === "__proto__" || s === "constructor" || s === "prototype") return e;
                if (i != a) {
                    var y = u[s];
                    f = n ? n(y, s, u) : void 0, f === void 0 && (f = kp(y) ? y : TL(t[i + 1]) ? [] : {})
                }
                _L(u, s, f), u = u[s]
            }
            return e
        }
        Xp.exports = wL
    });
    var Wp = d((vk, Up) => {
        var AL = un(),
            OL = Gp(),
            xL = mr();

        function SL(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var a = t[n],
                    u = AL(e, a);
                r(u, a) && OL(o, xL(a, e), u)
            }
            return o
        }
        Up.exports = SL
    });
    var Hp = d((mk, Vp) => {
        var RL = $r(),
            CL = ii(),
            LL = Ci(),
            PL = Ri(),
            NL = Object.getOwnPropertySymbols,
            DL = NL ? function(e) {
                for (var t = []; e;) RL(t, LL(e)), e = CL(e);
                return t
            } : PL;
        Vp.exports = DL
    });
    var zp = d((Ek, Bp) => {
        function ML(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        Bp.exports = ML
    });
    var jp = d((yk, Kp) => {
        var FL = et(),
            qL = rn(),
            kL = zp(),
            XL = Object.prototype,
            GL = XL.hasOwnProperty;

        function UL(e) {
            if (!FL(e)) return kL(e);
            var t = qL(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !GL.call(e, n)) || r.push(n);
            return r
        }
        Kp.exports = UL
    });
    var Qp = d((_k, Yp) => {
        var WL = Pi(),
            VL = jp(),
            HL = _t();

        function BL(e) {
            return HL(e) ? WL(e, !0) : VL(e)
        }
        Yp.exports = BL
    });
    var Zp = d((Ik, $p) => {
        var zL = Si(),
            KL = Hp(),
            jL = Qp();

        function YL(e) {
            return zL(e, jL, KL)
        }
        $p.exports = YL
    });
    var eg = d((Tk, Jp) => {
        var QL = Hi(),
            $L = pt(),
            ZL = Wp(),
            JL = Zp();

        function eP(e, t) {
            if (e == null) return {};
            var r = QL(JL(e), function(n) {
                return [n]
            });
            return t = $L(t), ZL(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        Jp.exports = eP
    });
    var rg = d((bk, tg) => {
        var tP = pt(),
            rP = Pp(),
            nP = eg();

        function iP(e, t) {
            return nP(e, rP(tP(t)))
        }
        tg.exports = iP
    });
    var ig = d((wk, ng) => {
        var oP = nn(),
            aP = on(),
            sP = fr(),
            uP = be(),
            cP = _t(),
            lP = Zr(),
            fP = rn(),
            dP = tn(),
            pP = "[object Map]",
            gP = "[object Set]",
            hP = Object.prototype,
            vP = hP.hasOwnProperty;

        function mP(e) {
            if (e == null) return !0;
            if (cP(e) && (uP(e) || typeof e == "string" || typeof e.splice == "function" || lP(e) || dP(e) || sP(e))) return !e.length;
            var t = aP(e);
            if (t == pP || t == gP) return !e.size;
            if (fP(e)) return !oP(e).length;
            for (var r in e)
                if (vP.call(e, r)) return !1;
            return !0
        }
        ng.exports = mP
    });
    var ag = d((Ak, og) => {
        var EP = Lo(),
            yP = mo(),
            _P = pt();

        function IP(e, t) {
            var r = {};
            return t = _P(t, 3), yP(e, function(n, i, o) {
                EP(r, i, t(n, i, o))
            }), r
        }
        og.exports = IP
    });
    var ug = d((Ok, sg) => {
        function TP(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        sg.exports = TP
    });
    var lg = d((xk, cg) => {
        var bP = ln();

        function wP(e) {
            return typeof e == "function" ? e : bP
        }
        cg.exports = wP
    });
    var dg = d((Sk, fg) => {
        var AP = ug(),
            OP = Eo(),
            xP = lg(),
            SP = be();

        function RP(e, t) {
            var r = SP(e) ? AP : OP;
            return r(e, xP(t))
        }
        fg.exports = RP
    });
    var gg = d((Rk, pg) => {
        var CP = He(),
            LP = function() {
                return CP.Date.now()
            };
        pg.exports = LP
    });
    var mg = d((Ck, vg) => {
        var PP = et(),
            Po = gg(),
            hg = fn(),
            NP = "Expected a function",
            DP = Math.max,
            MP = Math.min;

        function FP(e, t, r) {
            var n, i, o, a, u, s, f = 0,
                y = !1,
                g = !1,
                h = !0;
            if (typeof e != "function") throw new TypeError(NP);
            t = hg(t) || 0, PP(r) && (y = !!r.leading, g = "maxWait" in r, o = g ? DP(hg(r.maxWait) || 0, t) : o, h = "trailing" in r ? !!r.trailing : h);

            function E(F) {
                var K = n,
                    j = i;
                return n = i = void 0, f = F, a = e.apply(j, K), a
            }

            function A(F) {
                return f = F, u = setTimeout(w, t), y ? E(F) : a
            }

            function b(F) {
                var K = F - s,
                    j = F - f,
                    $ = t - K;
                return g ? MP($, o - j) : $
            }

            function R(F) {
                var K = F - s,
                    j = F - f;
                return s === void 0 || K >= t || K < 0 || g && j >= o
            }

            function w() {
                var F = Po();
                if (R(F)) return N(F);
                u = setTimeout(w, b(F))
            }

            function N(F) {
                return u = void 0, h && n ? E(F) : (n = i = void 0, a)
            }

            function C() {
                u !== void 0 && clearTimeout(u), f = 0, n = s = i = u = void 0
            }

            function M() {
                return u === void 0 ? a : N(Po())
            }

            function k() {
                var F = Po(),
                    K = R(F);
                if (n = arguments, i = this, s = F, K) {
                    if (u === void 0) return A(s);
                    if (g) return clearTimeout(u), u = setTimeout(w, t), E(s)
                }
                return u === void 0 && (u = setTimeout(w, t)), a
            }
            return k.cancel = C, k.flush = M, k
        }
        vg.exports = FP
    });
    var yg = d((Lk, Eg) => {
        var qP = mg(),
            kP = et(),
            XP = "Expected a function";

        function GP(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(XP);
            return kP(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), qP(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        Eg.exports = GP
    });
    var Ig = {};
    Ne(Ig, {
        actionListPlaybackChanged: () => er,
        animationFrameChanged: () => xn,
        clearRequested: () => fN,
        elementStateChanged: () => Go,
        eventListenerAdded: () => On,
        eventStateChanged: () => qo,
        instanceAdded: () => ko,
        instanceRemoved: () => Xo,
        instanceStarted: () => Sn,
        mediaQueriesDefined: () => Wo,
        parameterChanged: () => Jt,
        playbackRequested: () => cN,
        previewRequested: () => uN,
        rawDataImported: () => No,
        sessionInitialized: () => Do,
        sessionStarted: () => Mo,
        sessionStopped: () => Fo,
        stopRequested: () => lN,
        testFrameRendered: () => dN,
        viewportWidthChanged: () => Uo
    });
    var _g, UP, WP, VP, HP, BP, zP, KP, jP, YP, QP, $P, ZP, JP, eN, tN, rN, nN, iN, oN, aN, sN, No, Do, Mo, Fo, uN, cN, lN, fN, On, dN, qo, xn, Jt, ko, Sn, Xo, Go, er, Uo, Wo, Rn = me(() => {
        "use strict";
        Me();
        _g = le(At()), {
            IX2_RAW_DATA_IMPORTED: UP,
            IX2_SESSION_INITIALIZED: WP,
            IX2_SESSION_STARTED: VP,
            IX2_SESSION_STOPPED: HP,
            IX2_PREVIEW_REQUESTED: BP,
            IX2_PLAYBACK_REQUESTED: zP,
            IX2_STOP_REQUESTED: KP,
            IX2_CLEAR_REQUESTED: jP,
            IX2_EVENT_LISTENER_ADDED: YP,
            IX2_TEST_FRAME_RENDERED: QP,
            IX2_EVENT_STATE_CHANGED: $P,
            IX2_ANIMATION_FRAME_CHANGED: ZP,
            IX2_PARAMETER_CHANGED: JP,
            IX2_INSTANCE_ADDED: eN,
            IX2_INSTANCE_STARTED: tN,
            IX2_INSTANCE_REMOVED: rN,
            IX2_ELEMENT_STATE_CHANGED: nN,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: iN,
            IX2_VIEWPORT_WIDTH_CHANGED: oN,
            IX2_MEDIA_QUERIES_DEFINED: aN
        } = Te, {
            reifyState: sN
        } = _g.IX2VanillaUtils, No = e => ({
            type: UP,
            payload: { ...sN(e)
            }
        }), Do = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: WP,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), Mo = () => ({
            type: VP
        }), Fo = () => ({
            type: HP
        }), uN = ({
            rawData: e,
            defer: t
        }) => ({
            type: BP,
            payload: {
                defer: t,
                rawData: e
            }
        }), cN = ({
            actionTypeId: e = De.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: a,
            verbose: u,
            rawData: s
        }) => ({
            type: zP,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: u,
                rawData: s
            }
        }), lN = e => ({
            type: KP,
            payload: {
                actionListId: e
            }
        }), fN = () => ({
            type: jP
        }), On = (e, t) => ({
            type: YP,
            payload: {
                target: e,
                listenerParams: t
            }
        }), dN = (e = 1) => ({
            type: QP,
            payload: {
                step: e
            }
        }), qo = (e, t) => ({
            type: $P,
            payload: {
                stateKey: e,
                newState: t
            }
        }), xn = (e, t) => ({
            type: ZP,
            payload: {
                now: e,
                parameters: t
            }
        }), Jt = (e, t) => ({
            type: JP,
            payload: {
                key: e,
                value: t
            }
        }), ko = e => ({
            type: eN,
            payload: { ...e
            }
        }), Sn = (e, t) => ({
            type: tN,
            payload: {
                instanceId: e,
                time: t
            }
        }), Xo = e => ({
            type: rN,
            payload: {
                instanceId: e
            }
        }), Go = (e, t, r, n) => ({
            type: nN,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), er = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: iN,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), Uo = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: oN,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), Wo = () => ({
            type: aN
        })
    });
    var Ce = {};
    Ne(Ce, {
        elementContains: () => Bo,
        getChildElements: () => TN,
        getClosestElement: () => Sr,
        getProperty: () => mN,
        getQuerySelector: () => Ho,
        getRefType: () => zo,
        getSiblingElements: () => bN,
        getStyle: () => vN,
        getValidDocument: () => yN,
        isSiblingNode: () => IN,
        matchSelector: () => EN,
        queryDocument: () => _N,
        setStyle: () => hN
    });

    function hN(e, t, r) {
        e.style[t] = r
    }

    function vN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function mN(e, t) {
        return e[t]
    }

    function EN(e) {
        return t => t[Vo](e)
    }

    function Ho({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(Tg) !== -1) {
                let n = e.split(Tg),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(wg)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function yN(e) {
        return e == null || e === document.documentElement.getAttribute(wg) ? document : null
    }

    function _N(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function Bo(e, t) {
        return e.contains(t)
    }

    function IN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function TN(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let a = 0; a < o; a++) t.push(i[a])
        }
        return t
    }

    function bN(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
        }
        return t
    }

    function zo(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? pN : gN : null
    }
    var bg, Vo, Tg, pN, gN, wg, Sr, Ag = me(() => {
        "use strict";
        bg = le(At());
        Me();
        ({
            ELEMENT_MATCHES: Vo
        } = bg.IX2BrowserSupport), {
            IX2_ID_DELIMITER: Tg,
            HTML_ELEMENT: pN,
            PLAIN_OBJECT: gN,
            WF_PAGE: wg
        } = Ae;
        Sr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[Vo] && r[Vo](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var Ko = d((Dk, xg) => {
        var wN = et(),
            Og = Object.create,
            AN = function() {
                function e() {}
                return function(t) {
                    if (!wN(t)) return {};
                    if (Og) return Og(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        xg.exports = AN
    });
    var Cn = d((Mk, Sg) => {
        function ON() {}
        Sg.exports = ON
    });
    var Pn = d((Fk, Rg) => {
        var xN = Ko(),
            SN = Cn();

        function Ln(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        Ln.prototype = xN(SN.prototype);
        Ln.prototype.constructor = Ln;
        Rg.exports = Ln
    });
    var Ng = d((qk, Pg) => {
        var Cg = Lt(),
            RN = fr(),
            CN = be(),
            Lg = Cg ? Cg.isConcatSpreadable : void 0;

        function LN(e) {
            return CN(e) || RN(e) || !!(Lg && e && e[Lg])
        }
        Pg.exports = LN
    });
    var Fg = d((kk, Mg) => {
        var PN = $r(),
            NN = Ng();

        function Dg(e, t, r, n, i) {
            var o = -1,
                a = e.length;
            for (r || (r = NN), i || (i = []); ++o < a;) {
                var u = e[o];
                t > 0 && r(u) ? t > 1 ? Dg(u, t - 1, r, n, i) : PN(i, u) : n || (i[i.length] = u)
            }
            return i
        }
        Mg.exports = Dg
    });
    var kg = d((Xk, qg) => {
        var DN = Fg();

        function MN(e) {
            var t = e == null ? 0 : e.length;
            return t ? DN(e, 1) : []
        }
        qg.exports = MN
    });
    var Gg = d((Gk, Xg) => {
        function FN(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Xg.exports = FN
    });
    var Vg = d((Uk, Wg) => {
        var qN = Gg(),
            Ug = Math.max;

        function kN(e, t, r) {
            return t = Ug(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = Ug(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                    i = -1;
                    for (var u = Array(t + 1); ++i < t;) u[i] = n[i];
                    return u[t] = r(a), qN(e, this, u)
                }
        }
        Wg.exports = kN
    });
    var Bg = d((Wk, Hg) => {
        function XN(e) {
            return function() {
                return e
            }
        }
        Hg.exports = XN
    });
    var jg = d((Vk, Kg) => {
        var GN = Bg(),
            zg = Co(),
            UN = ln(),
            WN = zg ? function(e, t) {
                return zg(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: GN(t),
                    writable: !0
                })
            } : UN;
        Kg.exports = WN
    });
    var Qg = d((Hk, Yg) => {
        var VN = 800,
            HN = 16,
            BN = Date.now;

        function zN(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = BN(),
                    i = HN - (n - r);
                if (r = n, i > 0) {
                    if (++t >= VN) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        Yg.exports = zN
    });
    var Zg = d((Bk, $g) => {
        var KN = jg(),
            jN = Qg(),
            YN = jN(KN);
        $g.exports = YN
    });
    var eh = d((zk, Jg) => {
        var QN = kg(),
            $N = Vg(),
            ZN = Zg();

        function JN(e) {
            return ZN($N(e, void 0, QN), e + "")
        }
        Jg.exports = JN
    });
    var nh = d((Kk, rh) => {
        var th = Ni(),
            eD = th && new th;
        rh.exports = eD
    });
    var oh = d((jk, ih) => {
        function tD() {}
        ih.exports = tD
    });
    var jo = d((Yk, sh) => {
        var ah = nh(),
            rD = oh(),
            nD = ah ? function(e) {
                return ah.get(e)
            } : rD;
        sh.exports = nD
    });
    var ch = d((Qk, uh) => {
        var iD = {};
        uh.exports = iD
    });
    var Yo = d(($k, fh) => {
        var lh = ch(),
            oD = Object.prototype,
            aD = oD.hasOwnProperty;

        function sD(e) {
            for (var t = e.name + "", r = lh[t], n = aD.call(lh, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        fh.exports = sD
    });
    var Dn = d((Zk, dh) => {
        var uD = Ko(),
            cD = Cn(),
            lD = 4294967295;

        function Nn(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = lD, this.__views__ = []
        }
        Nn.prototype = uD(cD.prototype);
        Nn.prototype.constructor = Nn;
        dh.exports = Nn
    });
    var gh = d((Jk, ph) => {
        function fD(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        ph.exports = fD
    });
    var vh = d((eX, hh) => {
        var dD = Dn(),
            pD = Pn(),
            gD = gh();

        function hD(e) {
            if (e instanceof dD) return e.clone();
            var t = new pD(e.__wrapped__, e.__chain__);
            return t.__actions__ = gD(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        hh.exports = hD
    });
    var yh = d((tX, Eh) => {
        var vD = Dn(),
            mh = Pn(),
            mD = Cn(),
            ED = be(),
            yD = ot(),
            _D = vh(),
            ID = Object.prototype,
            TD = ID.hasOwnProperty;

        function Mn(e) {
            if (yD(e) && !ED(e) && !(e instanceof vD)) {
                if (e instanceof mh) return e;
                if (TD.call(e, "__wrapped__")) return _D(e)
            }
            return new mh(e)
        }
        Mn.prototype = mD.prototype;
        Mn.prototype.constructor = Mn;
        Eh.exports = Mn
    });
    var Ih = d((rX, _h) => {
        var bD = Dn(),
            wD = jo(),
            AD = Yo(),
            OD = yh();

        function xD(e) {
            var t = AD(e),
                r = OD[t];
            if (typeof r != "function" || !(t in bD.prototype)) return !1;
            if (e === r) return !0;
            var n = wD(r);
            return !!n && e === n[0]
        }
        _h.exports = xD
    });
    var Ah = d((nX, wh) => {
        var Th = Pn(),
            SD = eh(),
            RD = jo(),
            Qo = Yo(),
            CD = be(),
            bh = Ih(),
            LD = "Expected a function",
            PD = 8,
            ND = 32,
            DD = 128,
            MD = 256;

        function FD(e) {
            return SD(function(t) {
                var r = t.length,
                    n = r,
                    i = Th.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(LD);
                    if (i && !a && Qo(o) == "wrapper") var a = new Th([], !0)
                }
                for (n = a ? n : r; ++n < r;) {
                    o = t[n];
                    var u = Qo(o),
                        s = u == "wrapper" ? RD(o) : void 0;
                    s && bh(s[0]) && s[1] == (DD | PD | ND | MD) && !s[4].length && s[9] == 1 ? a = a[Qo(s[0])].apply(a, s[3]) : a = o.length == 1 && bh(o) ? a[u]() : a.thru(o)
                }
                return function() {
                    var f = arguments,
                        y = f[0];
                    if (a && f.length == 1 && CD(y)) return a.plant(y).value();
                    for (var g = 0, h = r ? t[g].apply(this, f) : y; ++g < r;) h = t[g].call(this, h);
                    return h
                }
            })
        }
        wh.exports = FD
    });
    var xh = d((iX, Oh) => {
        var qD = Ah(),
            kD = qD();
        Oh.exports = kD
    });
    var Rh = d((oX, Sh) => {
        function XD(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        Sh.exports = XD
    });
    var Lh = d((aX, Ch) => {
        var GD = Rh(),
            $o = fn();

        function UD(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = $o(r), r = r === r ? r : 0), t !== void 0 && (t = $o(t), t = t === t ? t : 0), GD($o(e), t, r)
        }
        Ch.exports = UD
    });
    var Gh, Uh, Wh, Vh, WD, VD, HD, BD, zD, KD, jD, YD, QD, $D, ZD, JD, eM, tM, rM, Hh, Bh, nM, iM, oM, zh, aM, sM, Kh, uM, Zo, jh, Ph, Nh, Yh, Cr, cM, nt, Qh, lM, qe, Ke, Lr, $h, Jo, Dh, ea, fM, Rr, dM, pM, gM, Zh, Mh, hM, Fh, vM, mM, EM, qh, Fn, qn, kh, Xh, Jh, ev = me(() => {
        "use strict";
        Gh = le(xh()), Uh = le(cn()), Wh = le(Lh());
        Me();
        ta();
        Rn();
        Vh = le(At()), {
            MOUSE_CLICK: WD,
            MOUSE_SECOND_CLICK: VD,
            MOUSE_DOWN: HD,
            MOUSE_UP: BD,
            MOUSE_OVER: zD,
            MOUSE_OUT: KD,
            DROPDOWN_CLOSE: jD,
            DROPDOWN_OPEN: YD,
            SLIDER_ACTIVE: QD,
            SLIDER_INACTIVE: $D,
            TAB_ACTIVE: ZD,
            TAB_INACTIVE: JD,
            NAVBAR_CLOSE: eM,
            NAVBAR_OPEN: tM,
            MOUSE_MOVE: rM,
            PAGE_SCROLL_DOWN: Hh,
            SCROLL_INTO_VIEW: Bh,
            SCROLL_OUT_OF_VIEW: nM,
            PAGE_SCROLL_UP: iM,
            SCROLLING_IN_VIEW: oM,
            PAGE_FINISH: zh,
            ECOMMERCE_CART_CLOSE: aM,
            ECOMMERCE_CART_OPEN: sM,
            PAGE_START: Kh,
            PAGE_SCROLL: uM
        } = Be, Zo = "COMPONENT_ACTIVE", jh = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: Ph
        } = Ae, {
            getNamespacedParameterId: Nh
        } = Vh.IX2VanillaUtils, Yh = e => t => typeof t == "object" && e(t) ? !0 : t, Cr = Yh(({
            element: e,
            nativeEvent: t
        }) => e === t.target), cM = Yh(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), nt = (0, Gh.default)([Cr, cM]), Qh = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !fM[i.eventTypeId]) return i
            }
            return null
        }, lM = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!Qh(e, n)
        }, qe = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: a
            } = t, {
                actionListId: u,
                autoStopEventId: s
            } = o.config, f = Qh(e, s);
            return f && tr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: s + Ph + n.split(Ph)[1],
                actionListId: (0, Uh.default)(f, "action.config.actionListId")
            }), tr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: u
            }), Pr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: u
            }), i
        }, Ke = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Lr = {
            handler: Ke(nt, qe)
        }, $h = { ...Lr,
            types: [Zo, jh].join(" ")
        }, Jo = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], Dh = "mouseover mouseout", ea = {
            types: Jo
        }, fM = {
            PAGE_START: Kh,
            PAGE_FINISH: zh
        }, Rr = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, Wh.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), dM = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), pM = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }, gM = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = Rr(), o = r.scrollOffsetValue, s = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return dM(t.getBoundingClientRect(), {
                left: 0,
                top: s,
                right: n,
                bottom: i - s
            })
        }, Zh = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [Zo, jh].indexOf(n) !== -1 ? n === Zo : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, Mh = e => (t, r) => {
            let n = {
                elementHovered: pM(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, hM = e => (t, r) => {
            let n = { ...r,
                elementVisible: gM(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, Fh = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = Rr(), {
                event: {
                    config: a,
                    eventTypeId: u
                }
            } = t, {
                scrollOffsetValue: s,
                scrollOffsetUnit: f
            } = a, y = f === "PX", g = i - o, h = Number((n / g).toFixed(2));
            if (r && r.percentTop === h) return r;
            let E = (y ? s : o * (s || 0) / 100) / g,
                A, b, R = 0;
            r && (A = h > r.percentTop, b = r.scrollingDown !== A, R = b ? h : r.anchorTop);
            let w = u === Hh ? h >= R + E : h <= R - E,
                N = { ...r,
                    percentTop: h,
                    inBounds: w,
                    anchorTop: R,
                    scrollingDown: A
                };
            return r && w && (b || N.inBounds !== r.inBounds) && e(t, N) || N
        }, vM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, mM = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, EM = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, qh = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, Fn = (e = !0) => ({ ...$h,
            handler: Ke(e ? nt : Cr, Zh((t, r) => r.isActive ? Lr.handler(t, r) : r))
        }), qn = (e = !0) => ({ ...$h,
            handler: Ke(e ? nt : Cr, Zh((t, r) => r.isActive ? r : Lr.handler(t, r)))
        }), kh = { ...ea,
            handler: hM((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: a
                } = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Bh === r ? (qe(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, Xh = .05, Jh = {
            [QD]: Fn(),
            [$D]: qn(),
            [YD]: Fn(),
            [jD]: qn(),
            [tM]: Fn(!1),
            [eM]: qn(!1),
            [ZD]: Fn(),
            [JD]: qn(),
            [sM]: {
                types: "ecommerce-cart-open",
                handler: Ke(nt, qe)
            },
            [aM]: {
                types: "ecommerce-cart-close",
                handler: Ke(nt, qe)
            },
            [WD]: {
                types: "click",
                handler: Ke(nt, qh((e, {
                    clickCount: t
                }) => {
                    lM(e) ? t === 1 && qe(e) : qe(e)
                }))
            },
            [VD]: {
                types: "click",
                handler: Ke(nt, qh((e, {
                    clickCount: t
                }) => {
                    t === 2 && qe(e)
                }))
            },
            [HD]: { ...Lr,
                types: "mousedown"
            },
            [BD]: { ...Lr,
                types: "mouseup"
            },
            [zD]: {
                types: Dh,
                handler: Ke(nt, Mh((e, t) => {
                    t.elementHovered && qe(e)
                }))
            },
            [KD]: {
                types: Dh,
                handler: Ke(nt, Mh((e, t) => {
                    t.elementHovered || qe(e)
                }))
            },
            [rM]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: a,
                        selectedAxis: u,
                        continuousParameterGroupId: s,
                        reverse: f,
                        restingState: y = 0
                    } = r, {
                        clientX: g = o.clientX,
                        clientY: h = o.clientY,
                        pageX: E = o.pageX,
                        pageY: A = o.pageY
                    } = n, b = u === "X_AXIS", R = n.type === "mouseout", w = y / 100, N = s, C = !1;
                    switch (a) {
                        case Je.VIEWPORT:
                            {
                                w = b ? Math.min(g, window.innerWidth) / window.innerWidth : Math.min(h, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case Je.PAGE:
                            {
                                let {
                                    scrollLeft: M,
                                    scrollTop: k,
                                    scrollWidth: F,
                                    scrollHeight: K
                                } = Rr();w = b ? Math.min(M + E, F) / F : Math.min(k + A, K) / K;
                                break
                            }
                        case Je.ELEMENT:
                        default:
                            {
                                N = Nh(i, s);
                                let M = n.type.indexOf("mouse") === 0;
                                if (M && nt({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let k = t.getBoundingClientRect(),
                                    {
                                        left: F,
                                        top: K,
                                        width: j,
                                        height: $
                                    } = k;
                                if (!M && !vM({
                                        left: g,
                                        top: h
                                    }, k)) break;C = !0,
                                w = b ? (g - F) / j : (h - K) / $;
                                break
                            }
                    }
                    return R && (w > 1 - Xh || w < Xh) && (w = Math.round(w)), (a !== Je.ELEMENT || C || C !== o.elementHovered) && (w = f ? 1 - w : w, e.dispatch(Jt(N, w))), {
                        elementHovered: C,
                        clientX: g,
                        clientY: h,
                        pageX: E,
                        pageY: A
                    }
                }
            },
            [uM]: {
                types: Jo,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: a
                    } = Rr(), u = i / (o - a);
                    u = n ? 1 - u : u, e.dispatch(Jt(r, u))
                }
            },
            [oM]: {
                types: Jo,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: a,
                        scrollWidth: u,
                        scrollHeight: s,
                        clientHeight: f
                    } = Rr(), {
                        basedOn: y,
                        selectedAxis: g,
                        continuousParameterGroupId: h,
                        startsEntering: E,
                        startsExiting: A,
                        addEndOffset: b,
                        addStartOffset: R,
                        addOffsetValue: w = 0,
                        endOffsetValue: N = 0
                    } = r, C = g === "X_AXIS";
                    if (y === Je.VIEWPORT) {
                        let M = C ? o / u : a / s;
                        return M !== i.scrollPercent && t.dispatch(Jt(h, M)), {
                            scrollPercent: M
                        }
                    } else {
                        let M = Nh(n, h),
                            k = e.getBoundingClientRect(),
                            F = (R ? w : 0) / 100,
                            K = (b ? N : 0) / 100;
                        F = E ? F : 1 - F, K = A ? K : 1 - K;
                        let j = k.top + Math.min(k.height * F, f),
                            ee = k.top + k.height * K - j,
                            V = Math.min(f + ee, s),
                            m = Math.min(Math.max(0, f - j), V) / V;
                        return m !== i.scrollPercent && t.dispatch(Jt(M, m)), {
                            scrollPercent: m
                        }
                    }
                }
            },
            [Bh]: kh,
            [nM]: kh,
            [Hh]: { ...ea,
                handler: Fh((e, t) => {
                    t.scrollingDown && qe(e)
                })
            },
            [iM]: { ...ea,
                handler: Fh((e, t) => {
                    t.scrollingDown || qe(e)
                })
            },
            [zh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Cr, mM(qe))
            },
            [Kh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Cr, EM(qe))
            }
        }
    });
    var mv = {};
    Ne(mv, {
        observeRequests: () => kM,
        startActionGroup: () => Pr,
        startEngine: () => Vn,
        stopActionGroup: () => tr,
        stopAllActionGroups: () => gv,
        stopEngine: () => Hn
    });

    function kM(e) {
        Ot({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: UM
        }), Ot({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: WM
        }), Ot({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: VM
        }), Ot({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: HM
        })
    }

    function XM(e) {
        Ot({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Hn(e), lv({
                    store: e,
                    elementApi: Ce
                }), Vn({
                    store: e,
                    allowEvents: !0
                }), fv()
            }
        })
    }

    function GM(e, t) {
        let r = Ot({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function UM({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Vn({
                store: r,
                rawData: e,
                allowEvents: !0
            }), fv()
        };
        t ? setTimeout(n, 0) : n()
    }

    function fv() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function WM(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: u,
            testManual: s,
            verbose: f = !0
        } = e, {
            rawData: y
        } = e;
        if (n && i && y && u) {
            let g = y.actionLists[n];
            g && (y = xM({
                actionList: g,
                actionItemId: i,
                rawData: y
            }))
        }
        if (Vn({
                store: t,
                rawData: y,
                allowEvents: a,
                testManual: s
            }), n && r === De.GENERAL_START_ACTION || ra(r)) {
            tr({
                store: t,
                actionListId: n
            }), pv({
                store: t,
                actionListId: n,
                eventId: o
            });
            let g = Pr({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: u,
                verbose: f
            });
            f && g && t.dispatch(er({
                actionListId: n,
                isPlaying: !u
            }))
        }
    }

    function VM({
        actionListId: e
    }, t) {
        e ? tr({
            store: t,
            actionListId: e
        }) : gv({
            store: t
        }), Hn(t)
    }

    function HM(e, t) {
        Hn(t), lv({
            store: t,
            elementApi: Ce
        })
    }

    function Vn({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(No(t)), i.active || (e.dispatch(Do({
            hasBoundaryNodes: !!document.querySelector(Xn),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (QM(e), BM(), e.getState().ixSession.hasDefinedMediaQueries && XM(e)), e.dispatch(Mo()), zM(e, n))
    }

    function BM() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(tv) === -1 && (e.className += ` ${tv}`)
    }

    function zM(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(xn(n, o)), t ? GM(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Hn(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(KM), LM(), e.dispatch(Fo())
        }
    }

    function KM({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function jM({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: a,
        smoothing: u,
        restingValue: s
    }) {
        let {
            ixData: f,
            ixSession: y
        } = e.getState(), {
            events: g
        } = f, h = g[n], {
            eventTypeId: E
        } = h, A = {}, b = {}, R = [], {
            continuousActionGroups: w
        } = a, {
            id: N
        } = a;
        SM(E, i) && (N = RM(t, N));
        let C = y.hasBoundaryNodes && r ? Sr(r, Xn) : null;
        w.forEach(M => {
            let {
                keyframe: k,
                actionItems: F
            } = M;
            F.forEach(K => {
                let {
                    actionTypeId: j
                } = K, {
                    target: $
                } = K.config;
                if (!$) return;
                let ee = $.boundaryMode ? C : null,
                    V = PM($) + na + j;
                if (b[V] = YM(b[V], k, K), !A[V]) {
                    A[V] = !0;
                    let {
                        config: S
                    } = K;
                    Gn({
                        config: S,
                        event: h,
                        eventTarget: r,
                        elementRoot: ee,
                        elementApi: Ce
                    }).forEach(m => {
                        R.push({
                            element: m,
                            key: V
                        })
                    })
                }
            })
        }), R.forEach(({
            element: M,
            key: k
        }) => {
            let F = b[k],
                K = (0, ct.default)(F, "[0].actionItems[0]", {}),
                {
                    actionTypeId: j
                } = K,
                $ = Wn(j) ? oa(j)(M, K) : null,
                ee = ia({
                    element: M,
                    actionItem: K,
                    elementApi: Ce
                }, $);
            aa({
                store: e,
                element: M,
                eventId: n,
                actionListId: o,
                actionItem: K,
                destination: ee,
                continuous: !0,
                parameterId: N,
                actionGroups: F,
                smoothing: u,
                restingValue: s,
                pluginInstance: $
            })
        })
    }

    function YM(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function QM(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        dv(e), (0, rr.default)(r, (i, o) => {
            let a = Jh[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            rF({
                logic: a,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && ZM(e)
    }

    function ZM(e) {
        let t = () => {
            dv(e)
        };
        $M.forEach(r => {
            window.addEventListener(r, t), e.dispatch(On(window, [r, t]))
        }), t()
    }

    function dv(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(Uo({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function rF({
        logic: e,
        store: t,
        events: r
    }) {
        nF(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: a
        } = o, u = JM(r, tF);
        if (!(0, iv.default)(u)) return;
        (0, rr.default)(u, (g, h) => {
            let E = r[h],
                {
                    action: A,
                    id: b,
                    mediaQueries: R = o.mediaQueryKeys
                } = E,
                {
                    actionListId: w
                } = A.config;
            NM(R, o.mediaQueryKeys) || t.dispatch(Wo()), A.actionTypeId === De.GENERAL_CONTINUOUS_ACTION && (Array.isArray(E.config) ? E.config : [E.config]).forEach(C => {
                let {
                    continuousParameterGroupId: M
                } = C, k = (0, ct.default)(a, `${w}.continuousParameterGroups`, []), F = (0, nv.default)(k, ({
                    id: $
                }) => $ === M), K = (C.smoothing || 0) / 100, j = (C.restingState || 0) / 100;
                F && g.forEach(($, ee) => {
                    let V = b + na + ee;
                    jM({
                        store: t,
                        eventStateKey: V,
                        eventTarget: $,
                        eventId: b,
                        eventConfig: C,
                        actionListId: w,
                        parameterGroup: F,
                        smoothing: K,
                        restingValue: j
                    })
                })
            }), (A.actionTypeId === De.GENERAL_START_ACTION || ra(A.actionTypeId)) && pv({
                store: t,
                actionListId: w,
                eventId: b
            })
        });
        let s = g => {
                let {
                    ixSession: h
                } = t.getState();
                eF(u, (E, A, b) => {
                    let R = r[A],
                        w = h.eventState[b],
                        {
                            action: N,
                            mediaQueries: C = o.mediaQueryKeys
                        } = R;
                    if (!Un(C, h.mediaQueryKey)) return;
                    let M = (k = {}) => {
                        let F = i({
                            store: t,
                            element: E,
                            event: R,
                            eventConfig: k,
                            nativeEvent: g,
                            eventStateKey: b
                        }, w);
                        DM(F, w) || t.dispatch(qo(b, F))
                    };
                    N.actionTypeId === De.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(M) : M()
                })
            },
            f = (0, uv.default)(s, qM),
            y = ({
                target: g = document,
                types: h,
                throttle: E
            }) => {
                h.split(" ").filter(Boolean).forEach(A => {
                    let b = E ? f : s;
                    g.addEventListener(A, b), t.dispatch(On(g, [A, b]))
                })
            };
        Array.isArray(n) ? n.forEach(y) : typeof n == "string" && y(e)
    }

    function nF(e) {
        if (!FM) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], a = Ho(o);
            t[a] || (i === Be.MOUSE_CLICK || i === Be.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function pv({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: a
        } = n, u = a[r], s = o[t];
        if (s && s.useFirstGroupAsInitialState) {
            let f = (0, ct.default)(s, "actionItemGroups[0].actionItems", []),
                y = (0, ct.default)(u, "mediaQueries", n.mediaQueryKeys);
            if (!Un(y, i.mediaQueryKey)) return;
            f.forEach(g => {
                let {
                    config: h,
                    actionTypeId: E
                } = g, A = h ? .target ? .useEventTarget === !0 && h ? .target ? .objectId == null ? {
                    target: u.target,
                    targets: u.targets
                } : h, b = Gn({
                    config: A,
                    event: u,
                    elementApi: Ce
                }), R = Wn(E);
                b.forEach(w => {
                    let N = R ? oa(E)(w, g) : null;
                    aa({
                        destination: ia({
                            element: w,
                            actionItem: g,
                            elementApi: Ce
                        }, N),
                        immediate: !0,
                        store: e,
                        element: w,
                        eventId: r,
                        actionItem: g,
                        actionListId: t,
                        pluginInstance: N
                    })
                })
            })
        }
    }

    function gv({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, rr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                sa(r, e), i && e.dispatch(er({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function tr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: a
        } = e.getState(), u = a.hasBoundaryNodes && r ? Sr(r, Xn) : null;
        (0, rr.default)(o, s => {
            let f = (0, ct.default)(s, "actionItem.config.target.boundaryMode"),
                y = n ? s.eventStateKey === n : !0;
            if (s.actionListId === i && s.eventId === t && y) {
                if (u && f && !Bo(u, s.element)) return;
                sa(s, e), s.verbose && e.dispatch(er({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function Pr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: a,
        verbose: u
    }) {
        let {
            ixData: s,
            ixSession: f
        } = e.getState(), {
            events: y
        } = s, g = y[t] || {}, {
            mediaQueries: h = s.mediaQueryKeys
        } = g, E = (0, ct.default)(s, `actionLists.${i}`, {}), {
            actionItemGroups: A,
            useFirstGroupAsInitialState: b
        } = E;
        if (!A || !A.length) return !1;
        o >= A.length && (0, ct.default)(g, "config.loop") && (o = 0), o === 0 && b && o++;
        let w = (o === 0 || o === 1 && b) && ra(g.action ? .actionTypeId) ? g.config.delay : void 0,
            N = (0, ct.default)(A, [o, "actionItems"], []);
        if (!N.length || !Un(h, f.mediaQueryKey)) return !1;
        let C = f.hasBoundaryNodes && r ? Sr(r, Xn) : null,
            M = wM(N),
            k = !1;
        return N.forEach((F, K) => {
            let {
                config: j,
                actionTypeId: $
            } = F, ee = Wn($), {
                target: V
            } = j;
            if (!V) return;
            let S = V.boundaryMode ? C : null;
            Gn({
                config: j,
                event: g,
                eventTarget: r,
                elementRoot: S,
                elementApi: Ce
            }).forEach((D, G) => {
                let H = ee ? oa($)(D, F) : null,
                    J = ee ? MM($)(D, F) : null;
                k = !0;
                let re = M === K && G === 0,
                    U = AM({
                        element: D,
                        actionItem: F
                    }),
                    z = ia({
                        element: D,
                        actionItem: F,
                        elementApi: Ce
                    }, H);
                aa({
                    store: e,
                    element: D,
                    actionItem: F,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: re,
                    computedStyle: U,
                    destination: z,
                    immediate: a,
                    verbose: u,
                    pluginInstance: H,
                    pluginDuration: J,
                    instanceDelay: w
                })
            })
        }), k
    }

    function aa(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: a,
            pluginInstance: u,
            continuous: s,
            restingValue: f,
            eventId: y
        } = n, g = !s, h = TM(), {
            ixElements: E,
            ixSession: A,
            ixData: b
        } = t.getState(), R = IM(E, i), {
            refState: w
        } = E[R] || {}, N = zo(i), C = A.reducedMotion && _i[o.actionTypeId], M;
        if (C && s) switch (b.events[y] ? .eventTypeId) {
            case Be.MOUSE_MOVE:
            case Be.MOUSE_MOVE_IN_VIEWPORT:
                M = f;
                break;
            default:
                M = .5;
                break
        }
        let k = OM(i, w, r, o, Ce, u);
        if (t.dispatch(ko({
                instanceId: h,
                elementId: R,
                origin: k,
                refType: N,
                skipMotion: C,
                skipToValue: M,
                ...n
            })), hv(document.body, "ix2-animation-started", h), a) {
            iF(t, h);
            return
        }
        Ot({
            store: t,
            select: ({
                ixInstances: F
            }) => F[h],
            onChange: vv
        }), g && t.dispatch(Sn(h, A.tick))
    }

    function sa(e, t) {
        hv(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: a
        } = i[r] || {};
        a === cv && CM(o, n, Ce), t.dispatch(Xo(e.id))
    }

    function hv(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function iF(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(Sn(t, 0)), e.dispatch(xn(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        vv(n[t], e)
    }

    function vv(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: a,
            actionTypeId: u,
            renderType: s,
            current: f,
            groupIndex: y,
            eventId: g,
            eventTarget: h,
            eventStateKey: E,
            actionListId: A,
            isCarrier: b,
            styleProp: R,
            verbose: w,
            pluginInstance: N
        } = e, {
            ixData: C,
            ixSession: M
        } = t.getState(), {
            events: k
        } = C, F = k && k[g] ? k[g] : {}, {
            mediaQueries: K = C.mediaQueryKeys
        } = F;
        if (Un(K, M.mediaQueryKey) && (n || r || i)) {
            if (f || s === _M && i) {
                t.dispatch(Go(o, u, f, a));
                let {
                    ixElements: j
                } = t.getState(), {
                    ref: $,
                    refType: ee,
                    refState: V
                } = j[o] || {}, S = V && V[u];
                (ee === cv || Wn(u)) && bM($, V, S, g, a, R, Ce, s, N)
            }
            if (i) {
                if (b) {
                    let j = Pr({
                        store: t,
                        eventId: g,
                        eventTarget: h,
                        eventStateKey: E,
                        actionListId: A,
                        groupIndex: y + 1,
                        verbose: w
                    });
                    w && !j && t.dispatch(er({
                        actionListId: A,
                        isPlaying: !1
                    }))
                }
                sa(e, t)
            }
        }
    }
    var nv, ct, iv, ov, av, sv, rr, uv, kn, yM, ra, na, Xn, cv, _M, tv, Gn, IM, ia, Ot, TM, bM, lv, wM, AM, OM, xM, SM, RM, Un, CM, LM, PM, NM, DM, Wn, oa, MM, rv, FM, qM, $M, JM, eF, tF, ta = me(() => {
        "use strict";
        nv = le(Yi()), ct = le(cn()), iv = le(Cp()), ov = le(rg()), av = le(ig()), sv = le(ag()), rr = le(dg()), uv = le(yg());
        Me();
        kn = le(At());
        Rn();
        Ag();
        ev();
        yM = Object.keys(Gr), ra = e => yM.includes(e), {
            COLON_DELIMITER: na,
            BOUNDARY_SELECTOR: Xn,
            HTML_ELEMENT: cv,
            RENDER_GENERAL: _M,
            W_MOD_IX: tv
        } = Ae, {
            getAffectedElements: Gn,
            getElementId: IM,
            getDestinationValues: ia,
            observeStore: Ot,
            getInstanceId: TM,
            renderHTMLElement: bM,
            clearAllStyles: lv,
            getMaxDurationItemIndex: wM,
            getComputedStyle: AM,
            getInstanceOrigin: OM,
            reduceListToGroup: xM,
            shouldNamespaceEventParameter: SM,
            getNamespacedParameterId: RM,
            shouldAllowMediaQuery: Un,
            cleanupHTMLElement: CM,
            clearObjectCache: LM,
            stringifyTarget: PM,
            mediaQueriesEqual: NM,
            shallowEqual: DM
        } = kn.IX2VanillaUtils, {
            isPluginType: Wn,
            createPluginInstance: oa,
            getPluginDuration: MM
        } = kn.IX2VanillaPlugins, rv = navigator.userAgent, FM = rv.match(/iPad/i) || rv.match(/iPhone/), qM = 12;
        $M = ["resize", "orientationchange"];
        JM = (e, t) => (0, ov.default)((0, sv.default)(e, t), av.default), eF = (e, t) => {
            (0, rr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let a = n + na + o;
                    t(i, n, a)
                })
            })
        }, tF = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Gn({
                config: t,
                elementApi: Ce
            })
        }
    });
    var _v = d(ca => {
        "use strict";
        Object.defineProperty(ca, "__esModule", {
            value: !0
        });

        function oF(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        oF(ca, {
            actions: function() {
                return uF
            },
            destroy: function() {
                return yv
            },
            init: function() {
                return dF
            },
            setEnv: function() {
                return fF
            },
            store: function() {
                return Bn
            }
        });
        var aF = mi(),
            sF = cF((fp(), Qe(lp))),
            ua = (ta(), Qe(mv)),
            uF = lF((Rn(), Qe(Ig)));

        function cF(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Ev(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (Ev = function(n) {
                return n ? r : t
            })(e)
        }

        function lF(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var r = Ev(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        var Bn = (0, aF.createStore)(sF.default);

        function fF(e) {
            e() && (0, ua.observeRequests)(Bn)
        }

        function dF(e) {
            yv(), (0, ua.startEngine)({
                store: Bn,
                rawData: e,
                allowEvents: !0
            })
        }

        function yv() {
            (0, ua.stopEngine)(Bn)
        }
    });
    var wv = d((vX, bv) => {
        "use strict";
        var Iv = Se(),
            Tv = _v();
        Tv.setEnv(Iv.env);
        Iv.define("ix2", bv.exports = function() {
            return Tv
        })
    });
    var Ov = d((mX, Av) => {
        "use strict";
        var nr = Se();
        nr.define("links", Av.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = nr.env(),
                a = window.location,
                u = document.createElement("a"),
                s = "w--current",
                f = /index\.(html|php)$/,
                y = /\/$/,
                g, h;
            r.ready = r.design = r.preview = E;

            function E() {
                i = o && nr.env("design"), h = nr.env("slug") || a.pathname || "", nr.scroll.off(b), g = [];
                for (var w = document.links, N = 0; N < w.length; ++N) A(w[N]);
                g.length && (nr.scroll.on(b), b())
            }

            function A(w) {
                if (!w.getAttribute("hreflang")) {
                    var N = i && w.getAttribute("href-disabled") || w.getAttribute("href");
                    if (u.href = N, !(N.indexOf(":") >= 0)) {
                        var C = e(w);
                        if (u.hash.length > 1 && u.host + u.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                            var M = e(u.hash);
                            M.length && g.push({
                                link: C,
                                sec: M,
                                active: !1
                            });
                            return
                        }
                        if (!(N === "#" || N === "")) {
                            var k = u.href === a.href || N === h || f.test(N) && y.test(h);
                            R(C, s, k)
                        }
                    }
                }
            }

            function b() {
                var w = n.scrollTop(),
                    N = n.height();
                t.each(g, function(C) {
                    if (!C.link.attr("hreflang")) {
                        var M = C.link,
                            k = C.sec,
                            F = k.offset().top,
                            K = k.outerHeight(),
                            j = N * .5,
                            $ = k.is(":visible") && F + K - j >= w && F + j <= w + N;
                        C.active !== $ && (C.active = $, R(M, s, $))
                    }
                })
            }

            function R(w, N, C) {
                var M = w.hasClass(N);
                C && M || !C && !M || (C ? w.addClass(N) : w.removeClass(N))
            }
            return r
        })
    });
    var Sv = d((EX, xv) => {
        "use strict";
        var zn = Se();
        zn.define("scroll", xv.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = A() ? null : window.history,
                i = e(window),
                o = e(document),
                a = e(document.body),
                u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(S) {
                    window.setTimeout(S, 15)
                },
                s = zn.env("editor") ? ".w-editor-body" : "body",
                f = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])",
                y = 'a[href="#"]',
                g = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
                h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                E = document.createElement("style");
            E.appendChild(document.createTextNode(h));

            function A() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var b = /^#[a-zA-Z0-9][\w:.-]*$/;

            function R(S) {
                return b.test(S.hash) && S.host + S.pathname === r.host + r.pathname
            }
            let w = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function N() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || w.matches
            }

            function C(S, m) {
                var D;
                switch (m) {
                    case "add":
                        D = S.attr("tabindex"), D ? S.attr("data-wf-tabindex-swap", D) : S.attr("tabindex", "-1");
                        break;
                    case "remove":
                        D = S.attr("data-wf-tabindex-swap"), D ? (S.attr("tabindex", D), S.removeAttr("data-wf-tabindex-swap")) : S.removeAttr("tabindex");
                        break
                }
                S.toggleClass("wf-force-outline-none", m === "add")
            }

            function M(S) {
                var m = S.currentTarget;
                if (!(zn.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(m.className))) {
                    var D = R(m) ? m.hash : "";
                    if (D !== "") {
                        var G = e(D);
                        G.length && (S && (S.preventDefault(), S.stopPropagation()), k(D, S), window.setTimeout(function() {
                            F(G, function() {
                                C(G, "add"), G.get(0).focus({
                                    preventScroll: !0
                                }), C(G, "remove")
                            })
                        }, S ? 0 : 300))
                    }
                }
            }

            function k(S) {
                if (r.hash !== S && n && n.pushState && !(zn.env.chrome && r.protocol === "file:")) {
                    var m = n.state && n.state.hash;
                    m !== S && n.pushState({
                        hash: S
                    }, "", S)
                }
            }

            function F(S, m) {
                var D = i.scrollTop(),
                    G = K(S);
                if (D !== G) {
                    var H = j(S, D, G),
                        J = Date.now(),
                        re = function() {
                            var U = Date.now() - J;
                            window.scroll(0, $(D, G, U, H)), U <= H ? u(re) : typeof m == "function" && m()
                        };
                    u(re)
                }
            }

            function K(S) {
                var m = e(f),
                    D = m.css("position") === "fixed" ? m.outerHeight() : 0,
                    G = S.offset().top - D;
                if (S.data("scroll") === "mid") {
                    var H = i.height() - D,
                        J = S.outerHeight();
                    J < H && (G -= Math.round((H - J) / 2))
                }
                return G
            }

            function j(S, m, D) {
                if (N()) return 0;
                var G = 1;
                return a.add(S).each(function(H, J) {
                    var re = parseFloat(J.getAttribute("data-scroll-time"));
                    !isNaN(re) && re >= 0 && (G = re)
                }), (472.143 * Math.log(Math.abs(m - D) + 125) - 2e3) * G
            }

            function $(S, m, D, G) {
                return D > G ? m : S + (m - S) * ee(D / G)
            }

            function ee(S) {
                return S < .5 ? 4 * S * S * S : (S - 1) * (2 * S - 2) * (2 * S - 2) + 1
            }

            function V() {
                var {
                    WF_CLICK_EMPTY: S,
                    WF_CLICK_SCROLL: m
                } = t;
                o.on(m, g, M), o.on(S, y, function(D) {
                    D.preventDefault()
                }), document.head.insertBefore(E, document.head.firstChild)
            }
            return {
                ready: V
            }
        })
    });
    var Cv = d((yX, Rv) => {
        "use strict";
        var pF = Se();
        pF.define("touch", Rv.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var a = !1,
                    u = !1,
                    s = Math.min(Math.round(window.innerWidth * .04), 40),
                    f, y;
                o.addEventListener("touchstart", g, !1), o.addEventListener("touchmove", h, !1), o.addEventListener("touchend", E, !1), o.addEventListener("touchcancel", A, !1), o.addEventListener("mousedown", g, !1), o.addEventListener("mousemove", h, !1), o.addEventListener("mouseup", E, !1), o.addEventListener("mouseout", A, !1);

                function g(R) {
                    var w = R.touches;
                    w && w.length > 1 || (a = !0, w ? (u = !0, f = w[0].clientX) : f = R.clientX, y = f)
                }

                function h(R) {
                    if (a) {
                        if (u && R.type === "mousemove") {
                            R.preventDefault(), R.stopPropagation();
                            return
                        }
                        var w = R.touches,
                            N = w ? w[0].clientX : R.clientX,
                            C = N - y;
                        y = N, Math.abs(C) > s && r && String(r()) === "" && (i("swipe", R, {
                            direction: C > 0 ? "right" : "left"
                        }), A())
                    }
                }

                function E(R) {
                    if (a && (a = !1, u && R.type === "mouseup")) {
                        R.preventDefault(), R.stopPropagation(), u = !1;
                        return
                    }
                }

                function A() {
                    a = !1
                }

                function b() {
                    o.removeEventListener("touchstart", g, !1), o.removeEventListener("touchmove", h, !1), o.removeEventListener("touchend", E, !1), o.removeEventListener("touchcancel", A, !1), o.removeEventListener("mousedown", g, !1), o.removeEventListener("mousemove", h, !1), o.removeEventListener("mouseup", E, !1), o.removeEventListener("mouseout", A, !1), o = null
                }
                this.destroy = b
            }

            function i(o, a, u) {
                var s = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(s, u)
            }
            return t.instance = t.init(document), t
        })
    });
    var Nv = d((_X, Pv) => {
        "use strict";
        var xt = Se(),
            gF = Ct(),
            je = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            Lv = !0,
            hF = /^#[a-zA-Z0-9\-_]+$/;
        xt.define("dropdown", Pv.exports = function(e, t) {
            var r = t.debounce,
                n = {},
                i = xt.env(),
                o = !1,
                a, u = xt.env.touch,
                s = ".w-dropdown",
                f = "w--open",
                y = gF.triggers,
                g = 900,
                h = "focusout" + s,
                E = "keydown" + s,
                A = "mouseenter" + s,
                b = "mousemove" + s,
                R = "mouseleave" + s,
                w = (u ? "click" : "mouseup") + s,
                N = "w-close" + s,
                C = "setting" + s,
                M = e(document),
                k;
            n.ready = F, n.design = function() {
                o && m(), o = !1, F()
            }, n.preview = function() {
                o = !0, F()
            };

            function F() {
                a = i && xt.env("design"), k = M.find(s), k.each(K)
            }

            function K(c, X) {
                var W = e(X),
                    L = e.data(X, s);
                L || (L = e.data(X, s, {
                    open: !1,
                    el: W,
                    config: {},
                    selectedIdx: -1
                })), L.toggle = L.el.children(".w-dropdown-toggle"), L.list = L.el.children(".w-dropdown-list"), L.links = L.list.find("a:not(.w-dropdown .w-dropdown a)"), L.complete = H(L), L.mouseLeave = re(L), L.mouseUpOutside = G(L), L.mouseMoveOutside = U(L), j(L);
                var ie = L.toggle.attr("id"),
                    fe = L.list.attr("id");
                ie || (ie = "w-dropdown-toggle-" + c), fe || (fe = "w-dropdown-list-" + c), L.toggle.attr("id", ie), L.toggle.attr("aria-controls", fe), L.toggle.attr("aria-haspopup", "menu"), L.toggle.attr("aria-expanded", "false"), L.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), L.toggle.prop("tagName") !== "BUTTON" && (L.toggle.attr("role", "button"), L.toggle.attr("tabindex") || L.toggle.attr("tabindex", "0")), L.list.attr("id", fe), L.list.attr("aria-labelledby", ie), L.links.each(function(v, B) {
                    B.hasAttribute("tabindex") || B.setAttribute("tabindex", "0"), hF.test(B.hash) && B.addEventListener("click", S.bind(null, L))
                }), L.el.off(s), L.toggle.off(s), L.nav && L.nav.off(s);
                var oe = ee(L, Lv);
                a && L.el.on(C, $(L)), a || (i && (L.hovering = !1, S(L)), L.config.hover && L.toggle.on(A, J(L)), L.el.on(N, oe), L.el.on(E, z(L)), L.el.on(h, I(L)), L.toggle.on(w, oe), L.toggle.on(E, _(L)), L.nav = L.el.closest(".w-nav"), L.nav.on(N, oe))
            }

            function j(c) {
                var X = Number(c.el.css("z-index"));
                c.manageZ = X === g || X === g + 1, c.config = {
                    hover: c.el.attr("data-hover") === "true" && !u,
                    delay: c.el.attr("data-delay")
                }
            }

            function $(c) {
                return function(X, W) {
                    W = W || {}, j(c), W.open === !0 && V(c, !0), W.open === !1 && S(c, {
                        immediate: !0
                    })
                }
            }

            function ee(c, X) {
                return r(function(W) {
                    if (c.open || W && W.type === "w-close") return S(c, {
                        forceClose: X
                    });
                    V(c)
                })
            }

            function V(c) {
                if (!c.open) {
                    D(c), c.open = !0, c.list.addClass(f), c.toggle.addClass(f), c.toggle.attr("aria-expanded", "true"), y.intro(0, c.el[0]), xt.redraw.up(), c.manageZ && c.el.css("z-index", g + 1);
                    var X = xt.env("editor");
                    a || M.on(w, c.mouseUpOutside), c.hovering && !X && c.el.on(R, c.mouseLeave), c.hovering && X && M.on(b, c.mouseMoveOutside), window.clearTimeout(c.delayId)
                }
            }

            function S(c, {
                immediate: X,
                forceClose: W
            } = {}) {
                if (c.open && !(c.config.hover && c.hovering && !W)) {
                    c.toggle.attr("aria-expanded", "false"), c.open = !1;
                    var L = c.config;
                    if (y.outro(0, c.el[0]), M.off(w, c.mouseUpOutside), M.off(b, c.mouseMoveOutside), c.el.off(R, c.mouseLeave), window.clearTimeout(c.delayId), !L.delay || X) return c.complete();
                    c.delayId = window.setTimeout(c.complete, L.delay)
                }
            }

            function m() {
                M.find(s).each(function(c, X) {
                    e(X).triggerHandler(N)
                })
            }

            function D(c) {
                var X = c.el[0];
                k.each(function(W, L) {
                    var ie = e(L);
                    ie.is(X) || ie.has(X).length || ie.triggerHandler(N)
                })
            }

            function G(c) {
                return c.mouseUpOutside && M.off(w, c.mouseUpOutside), r(function(X) {
                    if (c.open) {
                        var W = e(X.target);
                        if (!W.closest(".w-dropdown-toggle").length) {
                            var L = e.inArray(c.el[0], W.parents(s)) === -1,
                                ie = xt.env("editor");
                            if (L) {
                                if (ie) {
                                    var fe = W.parents().length === 1 && W.parents("svg").length === 1,
                                        oe = W.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (fe || oe) return
                                }
                                S(c)
                            }
                        }
                    }
                })
            }

            function H(c) {
                return function() {
                    c.list.removeClass(f), c.toggle.removeClass(f), c.manageZ && c.el.css("z-index", "")
                }
            }

            function J(c) {
                return function() {
                    c.hovering = !0, V(c)
                }
            }

            function re(c) {
                return function() {
                    c.hovering = !1, c.links.is(":focus") || S(c)
                }
            }

            function U(c) {
                return r(function(X) {
                    if (c.open) {
                        var W = e(X.target),
                            L = e.inArray(c.el[0], W.parents(s)) === -1;
                        if (L) {
                            var ie = W.parents(".w-editor-bem-EditorHoverControls").length,
                                fe = W.parents(".w-editor-bem-RTToolbar").length,
                                oe = e(".w-editor-bem-EditorOverlay"),
                                v = oe.find(".w-editor-edit-outline").length || oe.find(".w-editor-bem-RTToolbar").length;
                            if (ie || fe || v) return;
                            c.hovering = !1, S(c)
                        }
                    }
                })
            }

            function z(c) {
                return function(X) {
                    if (!(a || !c.open)) switch (c.selectedIdx = c.links.index(document.activeElement), X.keyCode) {
                        case je.HOME:
                            return c.open ? (c.selectedIdx = 0, p(c), X.preventDefault()) : void 0;
                        case je.END:
                            return c.open ? (c.selectedIdx = c.links.length - 1, p(c), X.preventDefault()) : void 0;
                        case je.ESCAPE:
                            return S(c), c.toggle.focus(), X.stopPropagation();
                        case je.ARROW_RIGHT:
                        case je.ARROW_DOWN:
                            return c.selectedIdx = Math.min(c.links.length - 1, c.selectedIdx + 1), p(c), X.preventDefault();
                        case je.ARROW_LEFT:
                        case je.ARROW_UP:
                            return c.selectedIdx = Math.max(-1, c.selectedIdx - 1), p(c), X.preventDefault()
                    }
                }
            }

            function p(c) {
                c.links[c.selectedIdx] && c.links[c.selectedIdx].focus()
            }

            function _(c) {
                var X = ee(c, Lv);
                return function(W) {
                    if (!a) {
                        if (!c.open) switch (W.keyCode) {
                            case je.ARROW_UP:
                            case je.ARROW_DOWN:
                                return W.stopPropagation()
                        }
                        switch (W.keyCode) {
                            case je.SPACE:
                            case je.ENTER:
                                return X(), W.stopPropagation(), W.preventDefault()
                        }
                    }
                }
            }

            function I(c) {
                return r(function(X) {
                    var {
                        relatedTarget: W,
                        target: L
                    } = X, ie = c.el[0], fe = ie.contains(W) || ie.contains(L);
                    return fe || S(c), X.stopPropagation()
                })
            }
            return n
        })
    });
    var Dv = d(la => {
        "use strict";
        Object.defineProperty(la, "__esModule", {
            value: !0
        });
        Object.defineProperty(la, "default", {
            enumerable: !0,
            get: function() {
                return vF
            }
        });

        function vF(e, t, r, n, i, o, a, u, s, f, y, g, h) {
            return function(E) {
                e(E);
                var A = E.form,
                    b = {
                        name: A.attr("data-name") || A.attr("name") || "Untitled Form",
                        pageId: A.attr("data-wf-page-id") || "",
                        elementId: A.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(A.html()),
                        trackingCookies: n()
                    };
                let R = A.attr("data-wf-flow");
                R && (b.wfFlow = R), i(E);
                var w = o(A, b.fields);
                if (w) return a(w);
                if (b.fileUploads = u(A), s(E), !f) {
                    y(E);
                    return
                }
                g.ajax({
                    url: h,
                    type: "POST",
                    data: b,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(N) {
                    N && N.code === 200 && (E.success = !0), y(E)
                }).fail(function() {
                    y(E)
                })
            }
        }
    });
    var Fv = d((TX, Mv) => {
        "use strict";
        var Kn = Se();
        Kn.define("forms", Mv.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                a = window.XDomainRequest && !window.atob,
                u = ".w-form",
                s, f = /e(-)?mail/i,
                y = /^\S+@\S+$/,
                g = window.alert,
                h = Kn.env(),
                E, A, b, R = /list-manage[1-9]?.com/i,
                w = t.debounce(function() {
                    g("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                N(), !h && !E && M()
            };

            function N() {
                s = e("html").attr("data-wf-site"), A = "https://webflow.com/api/v1/form/" + s, a && A.indexOf("https://webflow.com") >= 0 && (A = A.replace("https://webflow.com", "https://formdata.webflow.com")), b = `${A}/signFile`, i = e(u + " form"), i.length && i.each(C)
            }

            function C(U, z) {
                var p = e(z),
                    _ = e.data(z, u);
                _ || (_ = e.data(z, u, {
                    form: p
                })), k(_);
                var I = p.closest("div.w-form");
                _.done = I.find("> .w-form-done"), _.fail = I.find("> .w-form-fail"), _.fileUploads = I.find(".w-file-upload"), _.fileUploads.each(function(W) {
                    H(W, _)
                });
                var c = _.form.attr("aria-label") || _.form.attr("data-name") || "Form";
                _.done.attr("aria-label") || _.form.attr("aria-label", c), _.done.attr("tabindex", "-1"), _.done.attr("role", "region"), _.done.attr("aria-label") || _.done.attr("aria-label", c + " success"), _.fail.attr("tabindex", "-1"), _.fail.attr("role", "region"), _.fail.attr("aria-label") || _.fail.attr("aria-label", c + " failure");
                var X = _.action = p.attr("action");
                if (_.handler = null, _.redirect = p.attr("data-redirect"), R.test(X)) {
                    _.handler = m;
                    return
                }
                if (!X) {
                    if (s) {
                        _.handler = (() => {
                            let W = Dv().default;
                            return W(k, o, Kn, ee, G, K, g, j, F, s, D, e, A)
                        })();
                        return
                    }
                    w()
                }
            }

            function M() {
                E = !0, n.on("submit", u + " form", function(W) {
                    var L = e.data(this, u);
                    L.handler && (L.evt = W, L.handler(L))
                });
                let U = ".w-checkbox-input",
                    z = ".w-radio-input",
                    p = "w--redirected-checked",
                    _ = "w--redirected-focus",
                    I = "w--redirected-focus-visible",
                    c = ":focus-visible, [data-wf-focus-visible]",
                    X = [
                        ["checkbox", U],
                        ["radio", z]
                    ];
                n.on("change", u + ' form input[type="checkbox"]:not(' + U + ")", W => {
                    e(W.target).siblings(U).toggleClass(p)
                }), n.on("change", u + ' form input[type="radio"]', W => {
                    e(`input[name="${W.target.name}"]:not(${U})`).map((ie, fe) => e(fe).siblings(z).removeClass(p));
                    let L = e(W.target);
                    L.hasClass("w-radio-input") || L.siblings(z).addClass(p)
                }), X.forEach(([W, L]) => {
                    n.on("focus", u + ` form input[type="${W}"]:not(` + L + ")", ie => {
                        e(ie.target).siblings(L).addClass(_), e(ie.target).filter(c).siblings(L).addClass(I)
                    }), n.on("blur", u + ` form input[type="${W}"]:not(` + L + ")", ie => {
                        e(ie.target).siblings(L).removeClass(`${_} ${I}`)
                    })
                })
            }

            function k(U) {
                var z = U.btn = U.form.find(':input[type="submit"]');
                U.wait = U.btn.attr("data-wait") || null, U.success = !1, z.prop("disabled", !1), U.label && z.val(U.label)
            }

            function F(U) {
                var z = U.btn,
                    p = U.wait;
                z.prop("disabled", !0), p && (U.label = z.val(), z.val(p))
            }

            function K(U, z) {
                var p = null;
                return z = z || {}, U.find(':input:not([type="submit"]):not([type="file"])').each(function(_, I) {
                    var c = e(I),
                        X = c.attr("type"),
                        W = c.attr("data-name") || c.attr("name") || "Field " + (_ + 1);
                    W = encodeURIComponent(W);
                    var L = c.val();
                    if (X === "checkbox") L = c.is(":checked");
                    else if (X === "radio") {
                        if (z[W] === null || typeof z[W] == "string") return;
                        L = U.find('input[name="' + c.attr("name") + '"]:checked').val() || null
                    }
                    typeof L == "string" && (L = e.trim(L)), z[W] = L, p = p || V(c, X, W, L)
                }), p
            }

            function j(U) {
                var z = {};
                return U.find(':input[type="file"]').each(function(p, _) {
                    var I = e(_),
                        c = I.attr("data-name") || I.attr("name") || "File " + (p + 1),
                        X = I.attr("data-value");
                    typeof X == "string" && (X = e.trim(X)), z[c] = X
                }), z
            }
            let $ = {
                _mkto_trk: "marketo"
            };

            function ee() {
                return document.cookie.split("; ").reduce(function(z, p) {
                    let _ = p.split("="),
                        I = _[0];
                    if (I in $) {
                        let c = $[I],
                            X = _.slice(1).join("=");
                        z[c] = X
                    }
                    return z
                }, {})
            }

            function V(U, z, p, _) {
                var I = null;
                return z === "password" ? I = "Passwords cannot be submitted." : U.attr("required") ? _ ? f.test(U.attr("type")) && (y.test(_) || (I = "Please enter a valid email address for: " + p)) : I = "Please fill out the required field: " + p : p === "g-recaptcha-response" && !_ && (I = "Please confirm you\u2019re not a robot."), I
            }

            function S(U) {
                G(U), D(U)
            }

            function m(U) {
                k(U);
                var z = U.form,
                    p = {};
                if (/^https/.test(o.href) && !/^https/.test(U.action)) {
                    z.attr("method", "post");
                    return
                }
                G(U);
                var _ = K(z, p);
                if (_) return g(_);
                F(U);
                var I;
                t.each(p, function(L, ie) {
                    f.test(ie) && (p.EMAIL = L), /^((full[ _-]?)?name)$/i.test(ie) && (I = L), /^(first[ _-]?name)$/i.test(ie) && (p.FNAME = L), /^(last[ _-]?name)$/i.test(ie) && (p.LNAME = L)
                }), I && !p.FNAME && (I = I.split(" "), p.FNAME = I[0], p.LNAME = p.LNAME || I[1]);
                var c = U.action.replace("/post?", "/post-json?") + "&c=?",
                    X = c.indexOf("u=") + 2;
                X = c.substring(X, c.indexOf("&", X));
                var W = c.indexOf("id=") + 3;
                W = c.substring(W, c.indexOf("&", W)), p["b_" + X + "_" + W] = "", e.ajax({
                    url: c,
                    data: p,
                    dataType: "jsonp"
                }).done(function(L) {
                    U.success = L.result === "success" || /already/.test(L.msg), U.success || console.info("MailChimp error: " + L.msg), D(U)
                }).fail(function() {
                    D(U)
                })
            }

            function D(U) {
                var z = U.form,
                    p = U.redirect,
                    _ = U.success;
                if (_ && p) {
                    Kn.location(p);
                    return
                }
                U.done.toggle(_), U.fail.toggle(!_), _ ? U.done.focus() : U.fail.focus(), z.toggle(!_), k(U)
            }

            function G(U) {
                U.evt && U.evt.preventDefault(), U.evt = null
            }

            function H(U, z) {
                if (!z.fileUploads || !z.fileUploads[U]) return;
                var p, _ = e(z.fileUploads[U]),
                    I = _.find("> .w-file-upload-default"),
                    c = _.find("> .w-file-upload-uploading"),
                    X = _.find("> .w-file-upload-success"),
                    W = _.find("> .w-file-upload-error"),
                    L = I.find(".w-file-upload-input"),
                    ie = I.find(".w-file-upload-label"),
                    fe = ie.children(),
                    oe = W.find(".w-file-upload-error-msg"),
                    v = X.find(".w-file-upload-file"),
                    B = X.find(".w-file-remove-link"),
                    Z = v.find(".w-file-upload-file-name"),
                    Y = oe.attr("data-w-size-error"),
                    de = oe.attr("data-w-type-error"),
                    Le = oe.attr("data-w-generic-error");
                if (h || ie.on("click keydown", function(O) {
                        O.type === "keydown" && O.which !== 13 && O.which !== 32 || (O.preventDefault(), L.click())
                    }), ie.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), h) L.on("click", function(O) {
                    O.preventDefault()
                }), ie.on("click", function(O) {
                    O.preventDefault()
                }), fe.on("click", function(O) {
                    O.preventDefault()
                });
                else {
                    B.on("click keydown", function(O) {
                        if (O.type === "keydown") {
                            if (O.which !== 13 && O.which !== 32) return;
                            O.preventDefault()
                        }
                        L.removeAttr("data-value"), L.val(""), Z.html(""), I.toggle(!0), X.toggle(!1), ie.focus()
                    }), L.on("change", function(O) {
                        p = O.target && O.target.files && O.target.files[0], p && (I.toggle(!1), W.toggle(!1), c.toggle(!0), c.focus(), Z.text(p.name), P() || F(z), z.fileUploads[U].uploading = !0, J(p, T))
                    });
                    var Xe = ie.outerHeight();
                    L.height(Xe), L.width(1)
                }

                function l(O) {
                    var q = O.responseJSON && O.responseJSON.msg,
                        te = Le;
                    typeof q == "string" && q.indexOf("InvalidFileTypeError") === 0 ? te = de : typeof q == "string" && q.indexOf("MaxFileSizeError") === 0 && (te = Y), oe.text(te), L.removeAttr("data-value"), L.val(""), c.toggle(!1), I.toggle(!0), W.toggle(!0), W.focus(), z.fileUploads[U].uploading = !1, P() || k(z)
                }

                function T(O, q) {
                    if (O) return l(O);
                    var te = q.fileName,
                        ae = q.postData,
                        he = q.fileId,
                        Q = q.s3Url;
                    L.attr("data-value", he), re(Q, ae, p, te, x)
                }

                function x(O) {
                    if (O) return l(O);
                    c.toggle(!1), X.css("display", "inline-block"), X.focus(), z.fileUploads[U].uploading = !1, P() || k(z)
                }

                function P() {
                    var O = z.fileUploads && z.fileUploads.toArray() || [];
                    return O.some(function(q) {
                        return q.uploading
                    })
                }
            }

            function J(U, z) {
                var p = new URLSearchParams({
                    name: U.name,
                    size: U.size
                });
                e.ajax({
                    type: "GET",
                    url: `${b}?${p}`,
                    crossDomain: !0
                }).done(function(_) {
                    z(null, _)
                }).fail(function(_) {
                    z(_)
                })
            }

            function re(U, z, p, _, I) {
                var c = new FormData;
                for (var X in z) c.append(X, z[X]);
                c.append("file", p, _), e.ajax({
                    type: "POST",
                    url: U,
                    data: c,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    I(null)
                }).fail(function(W) {
                    I(W)
                })
            }
            return r
        })
    });
    var kv = d((bX, qv) => {
        "use strict";
        var vt = Se(),
            mF = Ct(),
            we = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        vt.define("navbar", qv.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                a = t.debounce,
                u, s, f, y, g = vt.env(),
                h = '<div class="w-nav-overlay" data-wf-ignore />',
                E = ".w-nav",
                A = "w--open",
                b = "w--nav-dropdown-open",
                R = "w--nav-dropdown-toggle-open",
                w = "w--nav-dropdown-list-open",
                N = "w--nav-link-open",
                C = mF.triggers,
                M = e();
            r.ready = r.design = r.preview = k, r.destroy = function() {
                M = e(), F(), s && s.length && s.each(ee)
            };

            function k() {
                f = g && vt.env("design"), y = vt.env("editor"), u = e(document.body), s = o.find(E), s.length && (s.each($), F(), K())
            }

            function F() {
                vt.resize.off(j)
            }

            function K() {
                vt.resize.on(j)
            }

            function j() {
                s.each(I)
            }

            function $(v, B) {
                var Z = e(B),
                    Y = e.data(B, E);
                Y || (Y = e.data(B, E, {
                    open: !1,
                    el: Z,
                    config: {},
                    selectedIdx: -1
                })), Y.menu = Z.find(".w-nav-menu"), Y.links = Y.menu.find(".w-nav-link"), Y.dropdowns = Y.menu.find(".w-dropdown"), Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle"), Y.dropdownList = Y.menu.find(".w-dropdown-list"), Y.button = Z.find(".w-nav-button"), Y.container = Z.find(".w-container"), Y.overlayContainerId = "w-nav-overlay-" + v, Y.outside = p(Y);
                var de = Z.find(".w-nav-brand");
                de && de.attr("href") === "/" && de.attr("aria-label") == null && de.attr("aria-label", "home"), Y.button.attr("style", "-webkit-user-select: text;"), Y.button.attr("aria-label") == null && Y.button.attr("aria-label", "menu"), Y.button.attr("role", "button"), Y.button.attr("tabindex", "0"), Y.button.attr("aria-controls", Y.overlayContainerId), Y.button.attr("aria-haspopup", "menu"), Y.button.attr("aria-expanded", "false"), Y.el.off(E), Y.button.off(E), Y.menu.off(E), m(Y), f ? (V(Y), Y.el.on("setting" + E, D(Y))) : (S(Y), Y.button.on("click" + E, U(Y)), Y.menu.on("click" + E, "a", z(Y)), Y.button.on("keydown" + E, G(Y)), Y.el.on("keydown" + E, H(Y))), I(v, B)
            }

            function ee(v, B) {
                var Z = e.data(B, E);
                Z && (V(Z), e.removeData(B, E))
            }

            function V(v) {
                v.overlay && (oe(v, !0), v.overlay.remove(), v.overlay = null)
            }

            function S(v) {
                v.overlay || (v.overlay = e(h).appendTo(v.el), v.overlay.attr("id", v.overlayContainerId), v.parent = v.menu.parent(), oe(v, !0))
            }

            function m(v) {
                var B = {},
                    Z = v.config || {},
                    Y = B.animation = v.el.attr("data-animation") || "default";
                B.animOver = /^over/.test(Y), B.animDirect = /left$/.test(Y) ? -1 : 1, Z.animation !== Y && v.open && t.defer(re, v), B.easing = v.el.attr("data-easing") || "ease", B.easing2 = v.el.attr("data-easing2") || "ease";
                var de = v.el.attr("data-duration");
                B.duration = de != null ? Number(de) : 400, B.docHeight = v.el.attr("data-doc-height"), v.config = B
            }

            function D(v) {
                return function(B, Z) {
                    Z = Z || {};
                    var Y = i.width();
                    m(v), Z.open === !0 && ie(v, !0), Z.open === !1 && oe(v, !0), v.open && t.defer(function() {
                        Y !== i.width() && re(v)
                    })
                }
            }

            function G(v) {
                return function(B) {
                    switch (B.keyCode) {
                        case we.SPACE:
                        case we.ENTER:
                            return U(v)(), B.preventDefault(), B.stopPropagation();
                        case we.ESCAPE:
                            return oe(v), B.preventDefault(), B.stopPropagation();
                        case we.ARROW_RIGHT:
                        case we.ARROW_DOWN:
                        case we.HOME:
                        case we.END:
                            return v.open ? (B.keyCode === we.END ? v.selectedIdx = v.links.length - 1 : v.selectedIdx = 0, J(v), B.preventDefault(), B.stopPropagation()) : (B.preventDefault(), B.stopPropagation())
                    }
                }
            }

            function H(v) {
                return function(B) {
                    if (v.open) switch (v.selectedIdx = v.links.index(document.activeElement), B.keyCode) {
                        case we.HOME:
                        case we.END:
                            return B.keyCode === we.END ? v.selectedIdx = v.links.length - 1 : v.selectedIdx = 0, J(v), B.preventDefault(), B.stopPropagation();
                        case we.ESCAPE:
                            return oe(v), v.button.focus(), B.preventDefault(), B.stopPropagation();
                        case we.ARROW_LEFT:
                        case we.ARROW_UP:
                            return v.selectedIdx = Math.max(-1, v.selectedIdx - 1), J(v), B.preventDefault(), B.stopPropagation();
                        case we.ARROW_RIGHT:
                        case we.ARROW_DOWN:
                            return v.selectedIdx = Math.min(v.links.length - 1, v.selectedIdx + 1), J(v), B.preventDefault(), B.stopPropagation()
                    }
                }
            }

            function J(v) {
                if (v.links[v.selectedIdx]) {
                    var B = v.links[v.selectedIdx];
                    B.focus(), z(B)
                }
            }

            function re(v) {
                v.open && (oe(v, !0), ie(v, !0))
            }

            function U(v) {
                return a(function() {
                    v.open ? oe(v) : ie(v)
                })
            }

            function z(v) {
                return function(B) {
                    var Z = e(this),
                        Y = Z.attr("href");
                    if (!vt.validClick(B.currentTarget)) {
                        B.preventDefault();
                        return
                    }
                    Y && Y.indexOf("#") === 0 && v.open && oe(v)
                }
            }

            function p(v) {
                return v.outside && o.off("click" + E, v.outside),
                    function(B) {
                        var Z = e(B.target);
                        y && Z.closest(".w-editor-bem-EditorOverlay").length || _(v, Z)
                    }
            }
            var _ = a(function(v, B) {
                if (v.open) {
                    var Z = B.closest(".w-nav-menu");
                    v.menu.is(Z) || oe(v)
                }
            });

            function I(v, B) {
                var Z = e.data(B, E),
                    Y = Z.collapsed = Z.button.css("display") !== "none";
                if (Z.open && !Y && !f && oe(Z, !0), Z.container.length) {
                    var de = X(Z);
                    Z.links.each(de), Z.dropdowns.each(de)
                }
                Z.open && fe(Z)
            }
            var c = "max-width";

            function X(v) {
                var B = v.container.css(c);
                return B === "none" && (B = ""),
                    function(Z, Y) {
                        Y = e(Y), Y.css(c, ""), Y.css(c) === "none" && Y.css(c, B)
                    }
            }

            function W(v, B) {
                B.setAttribute("data-nav-menu-open", "")
            }

            function L(v, B) {
                B.removeAttribute("data-nav-menu-open")
            }

            function ie(v, B) {
                if (v.open) return;
                v.open = !0, v.menu.each(W), v.links.addClass(N), v.dropdowns.addClass(b), v.dropdownToggle.addClass(R), v.dropdownList.addClass(w), v.button.addClass(A);
                var Z = v.config,
                    Y = Z.animation;
                (Y === "none" || !n.support.transform || Z.duration <= 0) && (B = !0);
                var de = fe(v),
                    Le = v.menu.outerHeight(!0),
                    Xe = v.menu.outerWidth(!0),
                    l = v.el.height(),
                    T = v.el[0];
                if (I(0, T), C.intro(0, T), vt.redraw.up(), f || o.on("click" + E, v.outside), B) {
                    O();
                    return
                }
                var x = "transform " + Z.duration + "ms " + Z.easing;
                if (v.overlay && (M = v.menu.prev(), v.overlay.show().append(v.menu)), Z.animOver) {
                    n(v.menu).add(x).set({
                        x: Z.animDirect * Xe,
                        height: de
                    }).start({
                        x: 0
                    }).then(O), v.overlay && v.overlay.width(Xe);
                    return
                }
                var P = l + Le;
                n(v.menu).add(x).set({
                    y: -P
                }).start({
                    y: 0
                }).then(O);

                function O() {
                    v.button.attr("aria-expanded", "true")
                }
            }

            function fe(v) {
                var B = v.config,
                    Z = B.docHeight ? o.height() : u.height();
                return B.animOver ? v.menu.height(Z) : v.el.css("position") !== "fixed" && (Z -= v.el.outerHeight(!0)), v.overlay && v.overlay.height(Z), Z
            }

            function oe(v, B) {
                if (!v.open) return;
                v.open = !1, v.button.removeClass(A);
                var Z = v.config;
                if ((Z.animation === "none" || !n.support.transform || Z.duration <= 0) && (B = !0), C.outro(0, v.el[0]), o.off("click" + E, v.outside), B) {
                    n(v.menu).stop(), T();
                    return
                }
                var Y = "transform " + Z.duration + "ms " + Z.easing2,
                    de = v.menu.outerHeight(!0),
                    Le = v.menu.outerWidth(!0),
                    Xe = v.el.height();
                if (Z.animOver) {
                    n(v.menu).add(Y).start({
                        x: Le * Z.animDirect
                    }).then(T);
                    return
                }
                var l = Xe + de;
                n(v.menu).add(Y).start({
                    y: -l
                }).then(T);

                function T() {
                    v.menu.height(""), n(v.menu).set({
                        x: 0,
                        y: 0
                    }), v.menu.each(L), v.links.removeClass(N), v.dropdowns.removeClass(b), v.dropdownToggle.removeClass(R), v.dropdownList.removeClass(w), v.overlay && v.overlay.children().length && (M.length ? v.menu.insertAfter(M) : v.menu.prependTo(v.parent), v.overlay.attr("style", "").hide()), v.el.triggerHandler("w-close"), v.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    var Uv = d((wX, Gv) => {
        "use strict";
        var mt = Se(),
            EF = Ct(),
            it = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            Xv = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        mt.define("slider", Gv.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(document),
                o, a, u = mt.env(),
                s = ".w-slider",
                f = '<div class="w-slider-dot" data-wf-ignore />',
                y = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                g = "w-slider-force-show",
                h = EF.triggers,
                E, A = !1;
            r.ready = function() {
                a = mt.env("design"), b()
            }, r.design = function() {
                a = !0, setTimeout(b, 1e3)
            }, r.preview = function() {
                a = !1, b()
            }, r.redraw = function() {
                A = !0, b(), A = !1
            }, r.destroy = R;

            function b() {
                o = i.find(s), o.length && (o.each(C), !E && (R(), w()))
            }

            function R() {
                mt.resize.off(N), mt.redraw.off(r.redraw)
            }

            function w() {
                mt.resize.on(N), mt.redraw.on(r.redraw)
            }

            function N() {
                o.filter(":visible").each(H)
            }

            function C(p, _) {
                var I = e(_),
                    c = e.data(_, s);
                c || (c = e.data(_, s, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: I,
                    config: {}
                })), c.mask = I.children(".w-slider-mask"), c.left = I.children(".w-slider-arrow-left"), c.right = I.children(".w-slider-arrow-right"), c.nav = I.children(".w-slider-nav"), c.slides = c.mask.children(".w-slide"), c.slides.each(h.reset), A && (c.maskWidth = 0), I.attr("role") === void 0 && I.attr("role", "region"), I.attr("aria-label") === void 0 && I.attr("aria-label", "carousel");
                var X = c.mask.attr("id");
                if (X || (X = "w-slider-mask-" + p, c.mask.attr("id", X)), !a && !c.ariaLiveLabel && (c.ariaLiveLabel = e(y).appendTo(c.mask)), c.left.attr("role", "button"), c.left.attr("tabindex", "0"), c.left.attr("aria-controls", X), c.left.attr("aria-label") === void 0 && c.left.attr("aria-label", "previous slide"), c.right.attr("role", "button"), c.right.attr("tabindex", "0"), c.right.attr("aria-controls", X), c.right.attr("aria-label") === void 0 && c.right.attr("aria-label", "next slide"), !n.support.transform) {
                    c.left.hide(), c.right.hide(), c.nav.hide(), E = !0;
                    return
                }
                c.el.off(s), c.left.off(s), c.right.off(s), c.nav.off(s), M(c), a ? (c.el.on("setting" + s, m(c)), S(c), c.hasTimer = !1) : (c.el.on("swipe" + s, m(c)), c.left.on("click" + s, j(c)), c.right.on("click" + s, $(c)), c.left.on("keydown" + s, K(c, j)), c.right.on("keydown" + s, K(c, $)), c.nav.on("keydown" + s, "> div", m(c)), c.config.autoplay && !c.hasTimer && (c.hasTimer = !0, c.timerCount = 1, V(c)), c.el.on("mouseenter" + s, F(c, !0, "mouse")), c.el.on("focusin" + s, F(c, !0, "keyboard")), c.el.on("mouseleave" + s, F(c, !1, "mouse")), c.el.on("focusout" + s, F(c, !1, "keyboard"))), c.nav.on("click" + s, "> div", m(c)), u || c.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var W = I.filter(":hidden");
                W.addClass(g);
                var L = I.parents(":hidden");
                L.addClass(g), A || H(p, _), W.removeClass(g), L.removeClass(g)
            }

            function M(p) {
                var _ = {};
                _.crossOver = 0, _.animation = p.el.attr("data-animation") || "slide", _.animation === "outin" && (_.animation = "cross", _.crossOver = .5), _.easing = p.el.attr("data-easing") || "ease";
                var I = p.el.attr("data-duration");
                if (_.duration = I != null ? parseInt(I, 10) : 500, k(p.el.attr("data-infinite")) && (_.infinite = !0), k(p.el.attr("data-disable-swipe")) && (_.disableSwipe = !0), k(p.el.attr("data-hide-arrows")) ? _.hideArrows = !0 : p.config.hideArrows && (p.left.show(), p.right.show()), k(p.el.attr("data-autoplay"))) {
                    _.autoplay = !0, _.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3, _.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10);
                    var c = "mousedown" + s + " touchstart" + s;
                    a || p.el.off(c).one(c, function() {
                        S(p)
                    })
                }
                var X = p.right.width();
                _.edge = X ? X + 40 : 100, p.config = _
            }

            function k(p) {
                return p === "1" || p === "true"
            }

            function F(p, _, I) {
                return function(c) {
                    if (_) p.hasFocus[I] = _;
                    else if (e.contains(p.el.get(0), c.relatedTarget) || (p.hasFocus[I] = _, p.hasFocus.mouse && I === "keyboard" || p.hasFocus.keyboard && I === "mouse")) return;
                    _ ? (p.ariaLiveLabel.attr("aria-live", "polite"), p.hasTimer && S(p)) : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && V(p))
                }
            }

            function K(p, _) {
                return function(I) {
                    switch (I.keyCode) {
                        case it.SPACE:
                        case it.ENTER:
                            return _(p)(), I.preventDefault(), I.stopPropagation()
                    }
                }
            }

            function j(p) {
                return function() {
                    G(p, {
                        index: p.index - 1,
                        vector: -1
                    })
                }
            }

            function $(p) {
                return function() {
                    G(p, {
                        index: p.index + 1,
                        vector: 1
                    })
                }
            }

            function ee(p, _) {
                var I = null;
                _ === p.slides.length && (b(), J(p)), t.each(p.anchors, function(c, X) {
                    e(c.els).each(function(W, L) {
                        e(L).index() === _ && (I = X)
                    })
                }), I != null && G(p, {
                    index: I,
                    immediate: !0
                })
            }

            function V(p) {
                S(p);
                var _ = p.config,
                    I = _.timerMax;
                I && p.timerCount++ > I || (p.timerId = window.setTimeout(function() {
                    p.timerId == null || a || ($(p)(), V(p))
                }, _.delay))
            }

            function S(p) {
                window.clearTimeout(p.timerId), p.timerId = null
            }

            function m(p) {
                return function(_, I) {
                    I = I || {};
                    var c = p.config;
                    if (a && _.type === "setting") {
                        if (I.select === "prev") return j(p)();
                        if (I.select === "next") return $(p)();
                        if (M(p), J(p), I.select == null) return;
                        ee(p, I.select);
                        return
                    }
                    if (_.type === "swipe") return c.disableSwipe || mt.env("editor") ? void 0 : I.direction === "left" ? $(p)() : I.direction === "right" ? j(p)() : void 0;
                    if (p.nav.has(_.target).length) {
                        var X = e(_.target).index();
                        if (_.type === "click" && G(p, {
                                index: X
                            }), _.type === "keydown") switch (_.keyCode) {
                            case it.ENTER:
                            case it.SPACE:
                                {
                                    G(p, {
                                        index: X
                                    }),
                                    _.preventDefault();
                                    break
                                }
                            case it.ARROW_LEFT:
                            case it.ARROW_UP:
                                {
                                    D(p.nav, Math.max(X - 1, 0)),
                                    _.preventDefault();
                                    break
                                }
                            case it.ARROW_RIGHT:
                            case it.ARROW_DOWN:
                                {
                                    D(p.nav, Math.min(X + 1, p.pages)),
                                    _.preventDefault();
                                    break
                                }
                            case it.HOME:
                                {
                                    D(p.nav, 0),
                                    _.preventDefault();
                                    break
                                }
                            case it.END:
                                {
                                    D(p.nav, p.pages),
                                    _.preventDefault();
                                    break
                                }
                            default:
                                return
                        }
                    }
                }
            }

            function D(p, _) {
                var I = p.children().eq(_).focus();
                p.children().not(I)
            }

            function G(p, _) {
                _ = _ || {};
                var I = p.config,
                    c = p.anchors;
                p.previous = p.index;
                var X = _.index,
                    W = {};
                X < 0 ? (X = c.length - 1, I.infinite && (W.x = -p.endX, W.from = 0, W.to = c[0].width)) : X >= c.length && (X = 0, I.infinite && (W.x = c[c.length - 1].width, W.from = -c[c.length - 1].x, W.to = W.from - W.x)), p.index = X;
                var L = p.nav.children().eq(X).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                p.nav.children().not(L).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), I.hideArrows && (p.index === c.length - 1 ? p.right.hide() : p.right.show(), p.index === 0 ? p.left.hide() : p.left.show());
                var ie = p.offsetX || 0,
                    fe = p.offsetX = -c[p.index].x,
                    oe = {
                        x: fe,
                        opacity: 1,
                        visibility: ""
                    },
                    v = e(c[p.index].els),
                    B = e(c[p.previous] && c[p.previous].els),
                    Z = p.slides.not(v),
                    Y = I.animation,
                    de = I.easing,
                    Le = Math.round(I.duration),
                    Xe = _.vector || (p.index > p.previous ? 1 : -1),
                    l = "opacity " + Le + "ms " + de,
                    T = "transform " + Le + "ms " + de;
                if (v.find(Xv).removeAttr("tabindex"), v.removeAttr("aria-hidden"), v.find("*").removeAttr("aria-hidden"), Z.find(Xv).attr("tabindex", "-1"), Z.attr("aria-hidden", "true"), Z.find("*").attr("aria-hidden", "true"), a || (v.each(h.intro), Z.each(h.outro)), _.immediate && !A) {
                    n(v).set(oe), O();
                    return
                }
                if (p.index === p.previous) return;
                if (a || p.ariaLiveLabel.text(`Slide ${X+1} of ${c.length}.`), Y === "cross") {
                    var x = Math.round(Le - Le * I.crossOver),
                        P = Math.round(Le - x);
                    l = "opacity " + x + "ms " + de, n(B).set({
                        visibility: ""
                    }).add(l).start({
                        opacity: 0
                    }), n(v).set({
                        visibility: "",
                        x: fe,
                        opacity: 0,
                        zIndex: p.depth++
                    }).add(l).wait(P).then({
                        opacity: 1
                    }).then(O);
                    return
                }
                if (Y === "fade") {
                    n(B).set({
                        visibility: ""
                    }).stop(), n(v).set({
                        visibility: "",
                        x: fe,
                        opacity: 0,
                        zIndex: p.depth++
                    }).add(l).start({
                        opacity: 1
                    }).then(O);
                    return
                }
                if (Y === "over") {
                    oe = {
                        x: p.endX
                    }, n(B).set({
                        visibility: ""
                    }).stop(), n(v).set({
                        visibility: "",
                        zIndex: p.depth++,
                        x: fe + c[p.index].width * Xe
                    }).add(T).start({
                        x: fe
                    }).then(O);
                    return
                }
                I.infinite && W.x ? (n(p.slides.not(B)).set({
                    visibility: "",
                    x: W.x
                }).add(T).start({
                    x: fe
                }), n(B).set({
                    visibility: "",
                    x: W.from
                }).add(T).start({
                    x: W.to
                }), p.shifted = B) : (I.infinite && p.shifted && (n(p.shifted).set({
                    visibility: "",
                    x: ie
                }), p.shifted = null), n(p.slides).set({
                    visibility: ""
                }).add(T).start({
                    x: fe
                }));

                function O() {
                    v = e(c[p.index].els), Z = p.slides.not(v), Y !== "slide" && (oe.visibility = "hidden"), n(Z).set(oe)
                }
            }

            function H(p, _) {
                var I = e.data(_, s);
                if (I) {
                    if (U(I)) return J(I);
                    a && z(I) && J(I)
                }
            }

            function J(p) {
                var _ = 1,
                    I = 0,
                    c = 0,
                    X = 0,
                    W = p.maskWidth,
                    L = W - p.config.edge;
                L < 0 && (L = 0), p.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }], p.slides.each(function(fe, oe) {
                    c - I > L && (_++, I += W, p.anchors[_ - 1] = {
                        els: [],
                        x: c,
                        width: 0
                    }), X = e(oe).outerWidth(!0), c += X, p.anchors[_ - 1].width += X, p.anchors[_ - 1].els.push(oe);
                    var v = fe + 1 + " of " + p.slides.length;
                    e(oe).attr("aria-label", v), e(oe).attr("role", "group")
                }), p.endX = c, a && (p.pages = null), p.nav.length && p.pages !== _ && (p.pages = _, re(p));
                var ie = p.index;
                ie >= _ && (ie = _ - 1), G(p, {
                    immediate: !0,
                    index: ie
                })
            }

            function re(p) {
                var _ = [],
                    I, c = p.el.attr("data-nav-spacing");
                c && (c = parseFloat(c) + "px");
                for (var X = 0, W = p.pages; X < W; X++) I = e(f), I.attr("aria-label", "Show slide " + (X + 1) + " of " + W).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), p.nav.hasClass("w-num") && I.text(X + 1), c != null && I.css({
                    "margin-left": c,
                    "margin-right": c
                }), _.push(I);
                p.nav.empty().append(_)
            }

            function U(p) {
                var _ = p.mask.width();
                return p.maskWidth !== _ ? (p.maskWidth = _, !0) : !1
            }

            function z(p) {
                var _ = 0;
                return p.slides.each(function(I, c) {
                    _ += e(c).outerWidth(!0)
                }), p.slidesWidth !== _ ? (p.slidesWidth = _, !0) : !1
            }
            return r
        })
    });
    var Vv = d((AX, Wv) => {
        "use strict";
        var Et = Se(),
            yF = Ct();
        Et.define("tabs", Wv.exports = function(e) {
            var t = {},
                r = e.tram,
                n = e(document),
                i, o, a = Et.env,
                u = a.safari,
                s = a(),
                f = "data-w-tab",
                y = "data-w-pane",
                g = ".w-tabs",
                h = "w--current",
                E = "w--tab-active",
                A = yF.triggers,
                b = !1;
            t.ready = t.design = t.preview = R, t.redraw = function() {
                b = !0, R(), b = !1
            }, t.destroy = function() {
                i = n.find(g), i.length && (i.each(C), w())
            };

            function R() {
                o = s && Et.env("design"), i = n.find(g), i.length && (i.each(M), Et.env("preview") && !b && i.each(C), w(), N())
            }

            function w() {
                Et.redraw.off(t.redraw)
            }

            function N() {
                Et.redraw.on(t.redraw)
            }

            function C(V, S) {
                var m = e.data(S, g);
                m && (m.links && m.links.each(A.reset), m.panes && m.panes.each(A.reset))
            }

            function M(V, S) {
                var m = g.substr(1) + "-" + V,
                    D = e(S),
                    G = e.data(S, g);
                if (G || (G = e.data(S, g, {
                        el: D,
                        config: {}
                    })), G.current = null, G.tabIdentifier = m + "-" + f, G.paneIdentifier = m + "-" + y, G.menu = D.children(".w-tab-menu"), G.links = G.menu.children(".w-tab-link"), G.content = D.children(".w-tab-content"), G.panes = G.content.children(".w-tab-pane"), G.el.off(g), G.links.off(g), G.menu.attr("role", "tablist"), G.links.attr("tabindex", "-1"), k(G), !o) {
                    G.links.on("click" + g, K(G)), G.links.on("keydown" + g, j(G));
                    var H = G.links.filter("." + h),
                        J = H.attr(f);
                    J && $(G, {
                        tab: J,
                        immediate: !0
                    })
                }
            }

            function k(V) {
                var S = {};
                S.easing = V.el.attr("data-easing") || "ease";
                var m = parseInt(V.el.attr("data-duration-in"), 10);
                m = S.intro = m === m ? m : 0;
                var D = parseInt(V.el.attr("data-duration-out"), 10);
                D = S.outro = D === D ? D : 0, S.immediate = !m && !D, V.config = S
            }

            function F(V) {
                var S = V.current;
                return Array.prototype.findIndex.call(V.links, m => m.getAttribute(f) === S, null)
            }

            function K(V) {
                return function(S) {
                    S.preventDefault();
                    var m = S.currentTarget.getAttribute(f);
                    m && $(V, {
                        tab: m
                    })
                }
            }

            function j(V) {
                return function(S) {
                    var m = F(V),
                        D = S.key,
                        G = {
                            ArrowLeft: m - 1,
                            ArrowUp: m - 1,
                            ArrowRight: m + 1,
                            ArrowDown: m + 1,
                            End: V.links.length - 1,
                            Home: 0
                        };
                    if (D in G) {
                        S.preventDefault();
                        var H = G[D];
                        H === -1 && (H = V.links.length - 1), H === V.links.length && (H = 0);
                        var J = V.links[H],
                            re = J.getAttribute(f);
                        re && $(V, {
                            tab: re
                        })
                    }
                }
            }

            function $(V, S) {
                S = S || {};
                var m = V.config,
                    D = m.easing,
                    G = S.tab;
                if (G !== V.current) {
                    V.current = G;
                    var H;
                    V.links.each(function(I, c) {
                        var X = e(c);
                        if (S.immediate || m.immediate) {
                            var W = V.panes[I];
                            c.id || (c.id = V.tabIdentifier + "-" + I), W.id || (W.id = V.paneIdentifier + "-" + I), c.href = "#" + W.id, c.setAttribute("role", "tab"), c.setAttribute("aria-controls", W.id), c.setAttribute("aria-selected", "false"), W.setAttribute("role", "tabpanel"), W.setAttribute("aria-labelledby", c.id)
                        }
                        c.getAttribute(f) === G ? (H = c, X.addClass(h).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(A.intro)) : X.hasClass(h) && X.removeClass(h).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(A.outro)
                    });
                    var J = [],
                        re = [];
                    V.panes.each(function(I, c) {
                        var X = e(c);
                        c.getAttribute(f) === G ? J.push(c) : X.hasClass(E) && re.push(c)
                    });
                    var U = e(J),
                        z = e(re);
                    if (S.immediate || m.immediate) {
                        U.addClass(E).each(A.intro), z.removeClass(E), b || Et.redraw.up();
                        return
                    } else {
                        var p = window.scrollX,
                            _ = window.scrollY;
                        H.focus(), window.scrollTo(p, _)
                    }
                    z.length && m.outro ? (z.each(A.outro), r(z).add("opacity " + m.outro + "ms " + D, {
                        fallback: u
                    }).start({
                        opacity: 0
                    }).then(() => ee(m, z, U))) : ee(m, z, U)
                }
            }

            function ee(V, S, m) {
                if (S.removeClass(E).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), m.addClass(E).each(A.intro), Et.redraw.up(), !V.intro) return r(m).set({
                    opacity: 1
                });
                r(m).set({
                    opacity: 0
                }).redraw().add("opacity " + V.intro + "ms " + V.easing, {
                    fallback: u
                }).start({
                    opacity: 1
                })
            }
            return t
        })
    });
    wa();
    Oa();
    Sa();
    La();
    Ct();
    wv();
    Ov();
    Sv();
    Cv();
    Nv();
    Fv();
    kv();
    Uv();
    Vv();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item-wrapper",
                "originalId": "6225d20eb2da99d735fd9cbf|5392950f-698c-8fe7-1778-8cf90ebd5838",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item-wrapper",
                "originalId": "6225d20eb2da99d735fd9cbf|5392950f-698c-8fe7-1778-8cf90ebd5838",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1607092328150
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item-wrapper",
                "originalId": "6225d20eb2da99d735fd9cbf|5392950f-698c-8fe7-1778-8cf90ebd5838",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item-wrapper",
                "originalId": "6225d20eb2da99d735fd9cbf|5392950f-698c-8fe7-1778-8cf90ebd5838",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1607092328151
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-17"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item-wrapper",
                "originalId": "064fc7b9-a700-8b33-3558-5f7e407de559",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item-wrapper",
                "originalId": "064fc7b9-a700-8b33-3558-5f7e407de559",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1607092328150
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item-wrapper",
                "originalId": "064fc7b9-a700-8b33-3558-5f7e407de559",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item-wrapper",
                "originalId": "064fc7b9-a700-8b33-3558-5f7e407de559",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1607092328151
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item",
                "originalId": "64676f9ed9310cf21ec988fc|7e52ab75-45c4-d05b-0fed-792afde86b6a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item",
                "originalId": "64676f9ed9310cf21ec988fc|7e52ab75-45c4-d05b-0fed-792afde86b6a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630185340398
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-25"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item",
                "originalId": "64676f9ed9310cf21ec988fc|7e52ab75-45c4-d05b-0fed-792afde86b6a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item",
                "originalId": "64676f9ed9310cf21ec988fc|7e52ab75-45c4-d05b-0fed-792afde86b6a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630185340400
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item-line",
                "originalId": "61ef7f445c03bc13aa721b01|bcd7b69a-90e9-fa95-907a-8147b8eea56e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item-line",
                "originalId": "61ef7f445c03bc13aa721b01|bcd7b69a-90e9-fa95-907a-8147b8eea56e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646655723184
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-13"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item-line",
                "originalId": "61ef7f445c03bc13aa721b01|bcd7b69a-90e9-fa95-907a-8147b8eea56e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item-line",
                "originalId": "61ef7f445c03bc13aa721b01|bcd7b69a-90e9-fa95-907a-8147b8eea56e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646655723184
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".milestone-circle",
                "originalId": "64676f9ed9310cf21ec98938|588bd729-e617-76ec-4770-28ec646c4781",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".milestone-circle",
                "originalId": "64676f9ed9310cf21ec98938|588bd729-e617-76ec-4770-28ec646c4781",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1642478274035
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "aee60728-5118-d71c-9b7f-9ac1c7a0d560",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "aee60728-5118-d71c-9b7f-9ac1c7a0d560",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666866207885
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-27"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "aee60728-5118-d71c-9b7f-9ac1c7a0d560",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "aee60728-5118-d71c-9b7f-9ac1c7a0d560",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666866207885
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".card-blog-standard",
                "originalId": "64676f9ed9310cf21ec9898b|7cf0a4bb-dae9-5f8c-c6f9-7a05ef2ecc96",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".card-blog-standard",
                "originalId": "64676f9ed9310cf21ec9898b|7cf0a4bb-dae9-5f8c-c6f9-7a05ef2ecc96",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1642294922826
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".card-blog-standard",
                "originalId": "64676f9ed9310cf21ec9898b|7cf0a4bb-dae9-5f8c-c6f9-7a05ef2ecc96",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".card-blog-standard",
                "originalId": "64676f9ed9310cf21ec9898b|7cf0a4bb-dae9-5f8c-c6f9-7a05ef2ecc96",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1642294922826
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button-arrow",
                "originalId": "61c867efe37fb09ab3df4195|4342e8a2-dc35-e851-2fbb-56d5218b160f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-arrow",
                "originalId": "61c867efe37fb09ab3df4195|4342e8a2-dc35-e851-2fbb-56d5218b160f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626053729706
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button-arrow",
                "originalId": "61c867efe37fb09ab3df4195|4342e8a2-dc35-e851-2fbb-56d5218b160f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-arrow",
                "originalId": "61c867efe37fb09ab3df4195|4342e8a2-dc35-e851-2fbb-56d5218b160f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626053729706
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|3638c1fc-856e-0abe-5a37-ae99924dbd91",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|3638c1fc-856e-0abe-5a37-ae99924dbd91",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625203284353
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|3638c1fc-856e-0abe-5a37-ae99924dbd85",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|3638c1fc-856e-0abe-5a37-ae99924dbd85",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1623214178673
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|3638c1fc-856e-0abe-5a37-ae99924dbd91",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|3638c1fc-856e-0abe-5a37-ae99924dbd91",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625203284353
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|3638c1fc-856e-0abe-5a37-ae99924dbd85",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|3638c1fc-856e-0abe-5a37-ae99924dbd85",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1623214178672
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|3638c1fc-856e-0abe-5a37-ae99924dbd9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|3638c1fc-856e-0abe-5a37-ae99924dbd9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625203284930
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|3638c1fc-856e-0abe-5a37-ae99924dbd9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|3638c1fc-856e-0abe-5a37-ae99924dbd9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1625203284930
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec989f1|c7a8dd6e-d06a-1e0d-0c32-b9bcac1120b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec989f1|c7a8dd6e-d06a-1e0d-0c32-b9bcac1120b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1670416806629
        },
        "e-84": {
            "id": "e-84",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-83"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec989f1|c7a8dd6e-d06a-1e0d-0c32-b9bcac1120b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec989f1|c7a8dd6e-d06a-1e0d-0c32-b9bcac1120b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1670416806629
        },
        "e-171": {
            "id": "e-171",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-172"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec9895b|e2bcbf79-bc22-bfe7-c423-ddd0209dba9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec9895b|e2bcbf79-bc22-bfe7-c423-ddd0209dba9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1670572735062
        },
        "e-172": {
            "id": "e-172",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec9895b|e2bcbf79-bc22-bfe7-c423-ddd0209dba9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec9895b|e2bcbf79-bc22-bfe7-c423-ddd0209dba9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1670572735062
        },
        "e-245": {
            "id": "e-245",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-246"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7165",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7165",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672212455782
        },
        "e-246": {
            "id": "e-246",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-245"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7165",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7165",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672212455782
        },
        "e-247": {
            "id": "e-247",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-248"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc716b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc716b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672212455782
        },
        "e-248": {
            "id": "e-248",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-247"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc716b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc716b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672212455782
        },
        "e-249": {
            "id": "e-249",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-250"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7170",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7170",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672212455782
        },
        "e-250": {
            "id": "e-250",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-249"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7170",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7170",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672212455782
        },
        "e-255": {
            "id": "e-255",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item",
                "originalId": "63a2ce557c36efed9d745e21|7e52ab75-45c4-d05b-0fed-792afde86b6a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item",
                "originalId": "63a2ce557c36efed9d745e21|7e52ab75-45c4-d05b-0fed-792afde86b6a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630185340398
        },
        "e-256": {
            "id": "e-256",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-25"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item",
                "originalId": "63a2ce557c36efed9d745e21|7e52ab75-45c4-d05b-0fed-792afde86b6a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item",
                "originalId": "63a2ce557c36efed9d745e21|7e52ab75-45c4-d05b-0fed-792afde86b6a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630185340400
        },
        "e-271": {
            "id": "e-271",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-272"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "e0789524-178b-2461-46bc-1184a2600b3b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e0789524-178b-2461-46bc-1184a2600b3b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674488751838
        },
        "e-272": {
            "id": "e-272",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-271"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "e0789524-178b-2461-46bc-1184a2600b3b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e0789524-178b-2461-46bc-1184a2600b3b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674488751841
        },
        "e-273": {
            "id": "e-273",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-274"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "e0789524-178b-2461-46bc-1184a2600b40",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e0789524-178b-2461-46bc-1184a2600b40",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674488919843
        },
        "e-274": {
            "id": "e-274",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-273"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "e0789524-178b-2461-46bc-1184a2600b40",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e0789524-178b-2461-46bc-1184a2600b40",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674488919846
        },
        "e-275": {
            "id": "e-275",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-276"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "e0789524-178b-2461-46bc-1184a2600b45",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e0789524-178b-2461-46bc-1184a2600b45",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674488987154
        },
        "e-276": {
            "id": "e-276",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-275"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "e0789524-178b-2461-46bc-1184a2600b45",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e0789524-178b-2461-46bc-1184a2600b45",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674488987156
        },
        "e-277": {
            "id": "e-277",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-278"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98989|259a028e-b0ab-696f-d0b1-9df37d57ad48",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98989|259a028e-b0ab-696f-d0b1-9df37d57ad48",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674490506611
        },
        "e-278": {
            "id": "e-278",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-277"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98989|259a028e-b0ab-696f-d0b1-9df37d57ad48",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98989|259a028e-b0ab-696f-d0b1-9df37d57ad48",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674490506611
        },
        "e-279": {
            "id": "e-279",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-280"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98989|259a028e-b0ab-696f-d0b1-9df37d57ad4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98989|259a028e-b0ab-696f-d0b1-9df37d57ad4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674490506611
        },
        "e-280": {
            "id": "e-280",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-279"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98989|259a028e-b0ab-696f-d0b1-9df37d57ad4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98989|259a028e-b0ab-696f-d0b1-9df37d57ad4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674490506611
        },
        "e-281": {
            "id": "e-281",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-282"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98989|259a028e-b0ab-696f-d0b1-9df37d57ad52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98989|259a028e-b0ab-696f-d0b1-9df37d57ad52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674490506611
        },
        "e-282": {
            "id": "e-282",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-281"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98989|259a028e-b0ab-696f-d0b1-9df37d57ad52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98989|259a028e-b0ab-696f-d0b1-9df37d57ad52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1674490506611
        },
        "e-359": {
            "id": "e-359",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-371"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1685414695088
        },
        "e-360": {
            "id": "e-360",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-385"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be6e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be6e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1685414677538
        },
        "e-361": {
            "id": "e-361",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-379"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1685414732353
        },
        "e-362": {
            "id": "e-362",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-358"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be37",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be37",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1685414471561
        },
        "e-363": {
            "id": "e-363",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-365"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1685414705920
        },
        "e-364": {
            "id": "e-364",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-368"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".timeline-content-box",
                "originalId": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be4a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1685414489950
        },
        "e-366": {
            "id": "e-366",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-376"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1685414721398
        },
        "e-369": {
            "id": "e-369",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-384"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be52",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1685414547018
        },
        "e-370": {
            "id": "e-370",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-367"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be44",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be44",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1685414519486
        },
        "e-372": {
            "id": "e-372",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-375"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be5f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be5f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1685414640297
        },
        "e-373": {
            "id": "e-373",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-377"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be7c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1685414653119
        },
        "e-378": {
            "id": "e-378",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-374"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be43",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be43",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1685414415528
        },
        "e-381": {
            "id": "e-381",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-357"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1685414576335
        },
        "e-382": {
            "id": "e-382",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be35",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be35",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-65-p",
                "smoothing": 40,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 20,
                "startsExiting": true,
                "addEndOffset": true,
                "endOffsetValue": 80
            }],
            "createdOn": 1685421976926
        },
        "e-383": {
            "id": "e-383",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-380"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be5d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98938|4e8ad70c-295e-bed0-f920-f300d134be5d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1685414533159
        },
        "e-386": {
            "id": "e-386",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-387"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec989f8|01d5b5dd-29e5-03cc-0c81-c03556c9c1af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec989f8|01d5b5dd-29e5-03cc-0c81-c03556c9c1af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685435747368
        },
        "e-388": {
            "id": "e-388",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-389"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec989f8|01d5b5dd-29e5-03cc-0c81-c03556c9c1b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec989f8|01d5b5dd-29e5-03cc-0c81-c03556c9c1b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685435747368
        },
        "e-390": {
            "id": "e-390",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-391"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec989f8|01d5b5dd-29e5-03cc-0c81-c03556c9c1c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec989f8|01d5b5dd-29e5-03cc-0c81-c03556c9c1c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685435747368
        },
        "e-392": {
            "id": "e-392",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-393"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec989f8|01d5b5dd-29e5-03cc-0c81-c03556c9c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec989f8|01d5b5dd-29e5-03cc-0c81-c03556c9c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685435747368
        },
        "e-398": {
            "id": "e-398",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-399"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec988fc|13cf9aef-0a48-41c9-e975-5c0cb5e99dcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec988fc|13cf9aef-0a48-41c9-e975-5c0cb5e99dcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1688462468053
        },
        "e-399": {
            "id": "e-399",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-398"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec988fc|13cf9aef-0a48-41c9-e975-5c0cb5e99dcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec988fc|13cf9aef-0a48-41c9-e975-5c0cb5e99dcf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1688462468053
        },
        "e-400": {
            "id": "e-400",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-401"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|5bce55c9-e824-020e-1c68-853be9a4da1c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|5bce55c9-e824-020e-1c68-853be9a4da1c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696931693741
        },
        "e-401": {
            "id": "e-401",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-400"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|5bce55c9-e824-020e-1c68-853be9a4da1c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|5bce55c9-e824-020e-1c68-853be9a4da1c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696931693741
        },
        "e-402": {
            "id": "e-402",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-403"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|1f40b54f-8f6d-2f82-9cf0-61e29aa4a76d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|1f40b54f-8f6d-2f82-9cf0-61e29aa4a76d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696931695720
        },
        "e-403": {
            "id": "e-403",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-402"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|1f40b54f-8f6d-2f82-9cf0-61e29aa4a76d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|1f40b54f-8f6d-2f82-9cf0-61e29aa4a76d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696931695720
        },
        "e-404": {
            "id": "e-404",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-405"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|1205207d-2f2a-18fa-88c3-60ea6a772680",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|1205207d-2f2a-18fa-88c3-60ea6a772680",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696931696257
        },
        "e-405": {
            "id": "e-405",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-404"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|1205207d-2f2a-18fa-88c3-60ea6a772680",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|1205207d-2f2a-18fa-88c3-60ea6a772680",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696931696257
        },
        "e-406": {
            "id": "e-406",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-407"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|5e00b4c0-5fd7-fc45-3c26-cf2910e4152a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|5e00b4c0-5fd7-fc45-3c26-cf2910e4152a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698672680212
        },
        "e-407": {
            "id": "e-407",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-406"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|5e00b4c0-5fd7-fc45-3c26-cf2910e4152a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|5e00b4c0-5fd7-fc45-3c26-cf2910e4152a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698672680212
        },
        "e-408": {
            "id": "e-408",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-409"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec989f8|6eb405ec-9970-3e97-56f6-3842953ddfbe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec989f8|6eb405ec-9970-3e97-56f6-3842953ddfbe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698731645109
        },
        "e-409": {
            "id": "e-409",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-408"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec989f8|6eb405ec-9970-3e97-56f6-3842953ddfbe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec989f8|6eb405ec-9970-3e97-56f6-3842953ddfbe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698731645109
        },
        "e-410": {
            "id": "e-410",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-411"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec989f8|f13290aa-a048-5d4c-925c-27ed29d22339",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec989f8|f13290aa-a048-5d4c-925c-27ed29d22339",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698731694996
        },
        "e-411": {
            "id": "e-411",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-410"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec989f8|f13290aa-a048-5d4c-925c-27ed29d22339",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec989f8|f13290aa-a048-5d4c-925c-27ed29d22339",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698731694996
        },
        "e-412": {
            "id": "e-412",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-413"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|0471bd2e-437b-acf1-84fd-f97566a47be3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|0471bd2e-437b-acf1-84fd-f97566a47be3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698924557804
        },
        "e-413": {
            "id": "e-413",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-412"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|0471bd2e-437b-acf1-84fd-f97566a47be3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|0471bd2e-437b-acf1-84fd-f97566a47be3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698924557804
        },
        "e-414": {
            "id": "e-414",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-415"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|cf22768d-07a0-2ca8-837d-d1df476f5a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|cf22768d-07a0-2ca8-837d-d1df476f5a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698924831795
        },
        "e-415": {
            "id": "e-415",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-414"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|cf22768d-07a0-2ca8-837d-d1df476f5a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|cf22768d-07a0-2ca8-837d-d1df476f5a60",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1698924831795
        },
        "e-434": {
            "id": "e-434",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-435"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec989ee|e68544c6-c39f-2fbf-1df6-d23e61d9aa18",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec989ee|e68544c6-c39f-2fbf-1df6-d23e61d9aa18",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699511465842
        },
        "e-435": {
            "id": "e-435",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-434"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64676f9ed9310cf21ec989ee|e68544c6-c39f-2fbf-1df6-d23e61d9aa18",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec989ee|e68544c6-c39f-2fbf-1df6-d23e61d9aa18",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699511465842
        },
        "e-436": {
            "id": "e-436",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-437"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|342831a3-c484-4c06-d2e1-6bd1658fedb4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|342831a3-c484-4c06-d2e1-6bd1658fedb4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699515215888
        },
        "e-437": {
            "id": "e-437",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-436"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|342831a3-c484-4c06-d2e1-6bd1658fedb4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|342831a3-c484-4c06-d2e1-6bd1658fedb4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699515215888
        },
        "e-438": {
            "id": "e-438",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-439"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|f7aa2be8-59fb-732b-787d-3f355d6ecfd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|f7aa2be8-59fb-732b-787d-3f355d6ecfd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699515216402
        },
        "e-439": {
            "id": "e-439",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-438"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|f7aa2be8-59fb-732b-787d-3f355d6ecfd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|f7aa2be8-59fb-732b-787d-3f355d6ecfd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699515216402
        },
        "e-444": {
            "id": "e-444",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-445"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|9040049d-cbd3-6fdc-43ea-242b861b85fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|9040049d-cbd3-6fdc-43ea-242b861b85fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700721526986
        },
        "e-445": {
            "id": "e-445",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-444"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98973|9040049d-cbd3-6fdc-43ea-242b861b85fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98973|9040049d-cbd3-6fdc-43ea-242b861b85fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700721526986
        },
        "e-448": {
            "id": "e-448",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-69",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-449"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|a0ae88ae-4110-ab0e-0c13-ddc61d82c043",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|a0ae88ae-4110-ab0e-0c13-ddc61d82c043",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888786
        },
        "e-449": {
            "id": "e-449",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-448"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|a0ae88ae-4110-ab0e-0c13-ddc61d82c043",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|a0ae88ae-4110-ab0e-0c13-ddc61d82c043",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888790
        },
        "e-450": {
            "id": "e-450",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-451"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|84c471aa-a16a-1fb6-a838-2eba883aa725",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|84c471aa-a16a-1fb6-a838-2eba883aa725",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888786
        },
        "e-451": {
            "id": "e-451",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-72",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-450"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|84c471aa-a16a-1fb6-a838-2eba883aa725",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|84c471aa-a16a-1fb6-a838-2eba883aa725",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888790
        },
        "e-452": {
            "id": "e-452",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-73",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-453"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|1f79e34d-a2b9-6219-c420-819a74199fa8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|1f79e34d-a2b9-6219-c420-819a74199fa8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888786
        },
        "e-453": {
            "id": "e-453",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-74",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-452"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|1f79e34d-a2b9-6219-c420-819a74199fa8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|1f79e34d-a2b9-6219-c420-819a74199fa8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888790
        },
        "e-454": {
            "id": "e-454",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-75",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-455"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|27cff4b5-3b35-39b9-08b5-d0d8b791e28d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|27cff4b5-3b35-39b9-08b5-d0d8b791e28d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888786
        },
        "e-455": {
            "id": "e-455",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-76",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-454"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|27cff4b5-3b35-39b9-08b5-d0d8b791e28d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|27cff4b5-3b35-39b9-08b5-d0d8b791e28d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888790
        },
        "e-456": {
            "id": "e-456",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-77",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-457"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|ffa63839-d9fc-f0c4-9b3d-209d8d80610a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|ffa63839-d9fc-f0c4-9b3d-209d8d80610a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888786
        },
        "e-457": {
            "id": "e-457",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-456"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|ffa63839-d9fc-f0c4-9b3d-209d8d80610a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|ffa63839-d9fc-f0c4-9b3d-209d8d80610a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888790
        },
        "e-458": {
            "id": "e-458",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-79",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-459"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|1da73f41-7620-fca7-f3a9-0bbb4b2c1fab",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|1da73f41-7620-fca7-f3a9-0bbb4b2c1fab",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888786
        },
        "e-459": {
            "id": "e-459",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-80",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-458"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|1da73f41-7620-fca7-f3a9-0bbb4b2c1fab",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|1da73f41-7620-fca7-f3a9-0bbb4b2c1fab",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888790
        },
        "e-461": {
            "id": "e-461",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-82",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-462"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|b067baea-9085-4fb5-2147-044b1def8ef6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|b067baea-9085-4fb5-2147-044b1def8ef6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888786
        },
        "e-462": {
            "id": "e-462",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-83",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-461"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|b067baea-9085-4fb5-2147-044b1def8ef6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-toc_h-trigger",
                "originalId": "64676f9ed9310cf21ec989c6|b067baea-9085-4fb5-2147-044b1def8ef6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651960888790
        },
        "e-463": {
            "id": "e-463",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-84",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec989c6|b067baea-9085-4fb5-2147-044b1def8f10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec989c6|b067baea-9085-4fb5-2147-044b1def8f10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-84-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1705433754031
        },
        "e-476": {
            "id": "e-476",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-477"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|09b15d9e-6fdc-0030-10a5-5bd4c649ffeb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|09b15d9e-6fdc-0030-10a5-5bd4c649ffeb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709286764063
        },
        "e-477": {
            "id": "e-477",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-476"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|09b15d9e-6fdc-0030-10a5-5bd4c649ffeb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|09b15d9e-6fdc-0030-10a5-5bd4c649ffeb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709286764063
        },
        "e-478": {
            "id": "e-478",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-479"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|44ed387b-3dfe-1ab3-7be2-fe25730c6030",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|44ed387b-3dfe-1ab3-7be2-fe25730c6030",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709298130876
        },
        "e-479": {
            "id": "e-479",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-478"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|44ed387b-3dfe-1ab3-7be2-fe25730c6030",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|44ed387b-3dfe-1ab3-7be2-fe25730c6030",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709298130876
        },
        "e-480": {
            "id": "e-480",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-481"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|d0f0f5ad-7f8b-1232-3956-3125854feec4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|d0f0f5ad-7f8b-1232-3956-3125854feec4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709298235020
        },
        "e-481": {
            "id": "e-481",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-480"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|d0f0f5ad-7f8b-1232-3956-3125854feec4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|d0f0f5ad-7f8b-1232-3956-3125854feec4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709298235020
        },
        "e-482": {
            "id": "e-482",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-483"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|06af0249-4170-fafb-790b-f9a0a68b41ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|06af0249-4170-fafb-790b-f9a0a68b41ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709298338137
        },
        "e-483": {
            "id": "e-483",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-482"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|06af0249-4170-fafb-790b-f9a0a68b41ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|06af0249-4170-fafb-790b-f9a0a68b41ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709298338137
        },
        "e-484": {
            "id": "e-484",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-485"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|95359a90-8229-951b-0d58-ca8faae9a5ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|95359a90-8229-951b-0d58-ca8faae9a5ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709298397127
        },
        "e-485": {
            "id": "e-485",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-484"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|95359a90-8229-951b-0d58-ca8faae9a5ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|95359a90-8229-951b-0d58-ca8faae9a5ab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709298397127
        },
        "e-486": {
            "id": "e-486",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-487"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|892d0b5d-0d18-2eb7-5370-9e64dddb1c00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|892d0b5d-0d18-2eb7-5370-9e64dddb1c00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709298470673
        },
        "e-487": {
            "id": "e-487",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-486"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|892d0b5d-0d18-2eb7-5370-9e64dddb1c00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|892d0b5d-0d18-2eb7-5370-9e64dddb1c00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709298470673
        },
        "e-488": {
            "id": "e-488",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-489"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|728424d4-38b8-a8b0-8ac2-0c80ff7ceb36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|728424d4-38b8-a8b0-8ac2-0c80ff7ceb36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709298565743
        },
        "e-489": {
            "id": "e-489",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-488"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64676f9ed9310cf21ec98a2a|728424d4-38b8-a8b0-8ac2-0c80ff7ceb36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64676f9ed9310cf21ec98a2a|728424d4-38b8-a8b0-8ac2-0c80ff7ceb36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709298565743
        },
        "e-508": {
            "id": "e-508",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-509"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|1651e1fa-dec8-8064-a3ec-ea5bad84259e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|1651e1fa-dec8-8064-a3ec-ea5bad84259e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709549141414
        },
        "e-509": {
            "id": "e-509",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-508"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|1651e1fa-dec8-8064-a3ec-ea5bad84259e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|1651e1fa-dec8-8064-a3ec-ea5bad84259e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709549141414
        },
        "e-510": {
            "id": "e-510",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-511"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|1651e1fa-dec8-8064-a3ec-ea5bad8425a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|1651e1fa-dec8-8064-a3ec-ea5bad8425a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709549141414
        },
        "e-511": {
            "id": "e-511",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-510"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|1651e1fa-dec8-8064-a3ec-ea5bad8425a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|1651e1fa-dec8-8064-a3ec-ea5bad8425a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709549141414
        },
        "e-512": {
            "id": "e-512",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-513"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|1651e1fa-dec8-8064-a3ec-ea5bad8425ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|1651e1fa-dec8-8064-a3ec-ea5bad8425ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709549141414
        },
        "e-513": {
            "id": "e-513",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-512"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|1651e1fa-dec8-8064-a3ec-ea5bad8425ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|1651e1fa-dec8-8064-a3ec-ea5bad8425ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709549141414
        },
        "e-524": {
            "id": "e-524",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-525"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|de1828f9-bb2c-8126-b35a-26ab4b7cfdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|de1828f9-bb2c-8126-b35a-26ab4b7cfdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553195554
        },
        "e-525": {
            "id": "e-525",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-524"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|de1828f9-bb2c-8126-b35a-26ab4b7cfdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|de1828f9-bb2c-8126-b35a-26ab4b7cfdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553195554
        },
        "e-526": {
            "id": "e-526",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-527"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|5a47eea1-eb55-8f63-976c-d9fc7893d821",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|5a47eea1-eb55-8f63-976c-d9fc7893d821",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553308134
        },
        "e-527": {
            "id": "e-527",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-526"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|5a47eea1-eb55-8f63-976c-d9fc7893d821",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|5a47eea1-eb55-8f63-976c-d9fc7893d821",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553308134
        },
        "e-528": {
            "id": "e-528",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-529"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|2505ef2d-9378-29c1-8325-23b89dc97f10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|2505ef2d-9378-29c1-8325-23b89dc97f10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553449369
        },
        "e-529": {
            "id": "e-529",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-528"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|2505ef2d-9378-29c1-8325-23b89dc97f10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|2505ef2d-9378-29c1-8325-23b89dc97f10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553449369
        },
        "e-530": {
            "id": "e-530",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-531"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|a9206432-11ca-cb89-a8df-f8ae160ef415",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|a9206432-11ca-cb89-a8df-f8ae160ef415",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553481946
        },
        "e-531": {
            "id": "e-531",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-530"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|a9206432-11ca-cb89-a8df-f8ae160ef415",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|a9206432-11ca-cb89-a8df-f8ae160ef415",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553481946
        },
        "e-532": {
            "id": "e-532",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-533"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|c3ba7d2d-1a1b-4a23-9ee5-240561a352da",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|c3ba7d2d-1a1b-4a23-9ee5-240561a352da",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553524150
        },
        "e-533": {
            "id": "e-533",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-532"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|c3ba7d2d-1a1b-4a23-9ee5-240561a352da",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|c3ba7d2d-1a1b-4a23-9ee5-240561a352da",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553524150
        },
        "e-534": {
            "id": "e-534",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-535"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|ead12ece-8468-1ccd-e780-0725f5a10a28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|ead12ece-8468-1ccd-e780-0725f5a10a28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553547161
        },
        "e-535": {
            "id": "e-535",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-534"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|ead12ece-8468-1ccd-e780-0725f5a10a28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|ead12ece-8468-1ccd-e780-0725f5a10a28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553547161
        },
        "e-536": {
            "id": "e-536",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-537"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|8542aa9f-5448-886e-6c92-d9ef2f6d7826",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|8542aa9f-5448-886e-6c92-d9ef2f6d7826",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553579197
        },
        "e-537": {
            "id": "e-537",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-536"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|8542aa9f-5448-886e-6c92-d9ef2f6d7826",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|8542aa9f-5448-886e-6c92-d9ef2f6d7826",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553579197
        },
        "e-538": {
            "id": "e-538",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-539"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|ba9e67f9-3f48-78db-015c-7f9e41b048ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|ba9e67f9-3f48-78db-015c-7f9e41b048ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553607922
        },
        "e-539": {
            "id": "e-539",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-538"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|ba9e67f9-3f48-78db-015c-7f9e41b048ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|ba9e67f9-3f48-78db-015c-7f9e41b048ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553607922
        },
        "e-540": {
            "id": "e-540",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-541"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|fedb50b2-c03f-3aca-5ba3-b4b8d00533eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|fedb50b2-c03f-3aca-5ba3-b4b8d00533eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553643625
        },
        "e-541": {
            "id": "e-541",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-540"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|fedb50b2-c03f-3aca-5ba3-b4b8d00533eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|fedb50b2-c03f-3aca-5ba3-b4b8d00533eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553643625
        },
        "e-542": {
            "id": "e-542",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-543"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|94e0fd08-6a98-df83-419d-6385a0b1549d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|94e0fd08-6a98-df83-419d-6385a0b1549d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553676779
        },
        "e-543": {
            "id": "e-543",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-542"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|94e0fd08-6a98-df83-419d-6385a0b1549d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|94e0fd08-6a98-df83-419d-6385a0b1549d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709553676779
        },
        "e-544": {
            "id": "e-544",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-545"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|14b1042c-56d7-e228-4988-64acb9e6c73c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|14b1042c-56d7-e228-4988-64acb9e6c73c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1712749887928
        },
        "e-545": {
            "id": "e-545",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-544"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|14b1042c-56d7-e228-4988-64acb9e6c73c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|14b1042c-56d7-e228-4988-64acb9e6c73c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1712749887928
        },
        "e-546": {
            "id": "e-546",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-547"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|a54814df-cf92-963d-662f-811856ae4a6b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|a54814df-cf92-963d-662f-811856ae4a6b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1712749890613
        },
        "e-547": {
            "id": "e-547",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-546"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|a54814df-cf92-963d-662f-811856ae4a6b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|a54814df-cf92-963d-662f-811856ae4a6b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1712749890613
        },
        "e-548": {
            "id": "e-548",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-549"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|14d6d3c2-9acd-ce98-bb2d-d28f9d4a4233",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|14d6d3c2-9acd-ce98-bb2d-d28f9d4a4233",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1712749892368
        },
        "e-549": {
            "id": "e-549",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-548"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|14d6d3c2-9acd-ce98-bb2d-d28f9d4a4233",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|14d6d3c2-9acd-ce98-bb2d-d28f9d4a4233",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1712749892368
        },
        "e-550": {
            "id": "e-550",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-551"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|854169c9-4d2d-7b1d-6440-840dbdaef83b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|854169c9-4d2d-7b1d-6440-840dbdaef83b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1712749893808
        },
        "e-551": {
            "id": "e-551",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-550"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "654c73ebea4ff5f9c08ba59b|854169c9-4d2d-7b1d-6440-840dbdaef83b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "654c73ebea4ff5f9c08ba59b|854169c9-4d2d-7b1d-6440-840dbdaef83b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1712749893808
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Show Answer",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "zValue": -90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 100,
                        "easing": "ease",
                        "duration": 500,
                        "target": {},
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1607091352620
        },
        "a-2": {
            "id": "a-2",
            "title": "Hide Answer",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 300,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1607091352620
        },
        "a-3": {
            "id": "a-3",
            "title": "Show Answer 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-3-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-3-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "zValue": -90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-3-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 100,
                        "easing": "ease",
                        "duration": 500,
                        "target": {},
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-3-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1607091352620
        },
        "a-4": {
            "id": "a-4",
            "title": "Hide Answer 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 300,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1607091352620
        },
        "a-9": {
            "id": "a-9",
            "title": "Tab (Open)",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-content-wrap",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b3"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab-content",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b5"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab-content",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b5"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-content-wrap",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b3"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab-content",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b5"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab-content",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b5"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outBack",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-icon",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b7"]
                        },
                        "zValue": 135,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1630185343811
        },
        "a-10": {
            "id": "a-10",
            "title": "Tab (Close)",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-content-wrap",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b3"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab-content",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b5"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab-content",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b5"]
                        },
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outBack",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-icon",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b7"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1630185343811
        },
        "a-15": {
            "id": "a-15",
            "title": "Click / Accordian / OPEN 🟢",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-15-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {},
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-15-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 400,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-15-n-7",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "globalSwatchId": "2d1581e5",
                        "rValue": 100,
                        "bValue": 255,
                        "gValue": 46,
                        "aValue": 1
                    }
                }, {
                    "id": "a-15-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "swingFromTo",
                        "duration": 500,
                        "target": {},
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-15-n-9",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "globalSwatchId": "2d1581e5",
                        "rValue": 100,
                        "bValue": 255,
                        "gValue": 46,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1630185343811
        },
        "a-16": {
            "id": "a-16",
            "title": "Click / Accordian / CLOSE 🔴",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 200,
                        "target": {},
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "globalSwatchId": "7b64cafb",
                        "rValue": 22,
                        "bValue": 66,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-16-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-16-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "globalSwatchId": "2268f126",
                        "rValue": 107,
                        "bValue": 148,
                        "gValue": 112,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1630185343811
        },
        "a-17": {
            "id": "a-17",
            "title": "Milestone Circle",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64676f9ed9310cf21ec98938|588bd729-e617-76ec-4770-28ec646c4781"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64676f9ed9310cf21ec98938|588bd729-e617-76ec-4770-28ec646c4781"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1642478280725
        },
        "a-21": {
            "id": "a-21",
            "title": "NAVBAR-DROPDOWN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-28",
                            "selectorGuids": ["7051968d-3f74-024d-7d6f-7c6695bcdc87"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-21-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-27",
                            "selectorGuids": ["7051968d-3f74-024d-7d6f-7c6695bcdc8c"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-28",
                            "selectorGuids": ["7051968d-3f74-024d-7d6f-7c6695bcdc87"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-21-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-27",
                            "selectorGuids": ["7051968d-3f74-024d-7d6f-7c6695bcdc8c"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1666866213623
        },
        "a-22": {
            "id": "a-22",
            "title": "NAVBAR-DROPDOWN 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-28",
                            "selectorGuids": ["7051968d-3f74-024d-7d6f-7c6695bcdc87"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-22-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-27",
                            "selectorGuids": ["7051968d-3f74-024d-7d6f-7c6695bcdc8c"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1666866213623
        },
        "a-23": {
            "id": "a-23",
            "title": "Hover / Blog Card / In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 400,
                        "target": {},
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1642294928289
        },
        "a-24": {
            "id": "a-24",
            "title": "Hover / Blog Card / Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 400,
                        "target": {},
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1642294928289
        },
        "a-25": {
            "id": "a-25",
            "title": "Link Arrow",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {},
                        "xValue": 4,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626053737390
        },
        "a-26": {
            "id": "a-26",
            "title": "Link Arrow (OUT)",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626053737390
        },
        "a-27": {
            "id": "a-27",
            "title": "Image Zoom In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumbnail-2",
                            "selectorGuids": ["8260c70d-5a7f-8139-1244-26a05c339929"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1623214183996
        },
        "a-28": {
            "id": "a-28",
            "title": "Image Zoom Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumbnail-2",
                            "selectorGuids": ["8260c70d-5a7f-8139-1244-26a05c339929"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1623214212404
        },
        "a-43": {
            "id": "a-43",
            "title": "service-card-on-hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64676f9ed9310cf21ec989f1|3ebafe57-2c46-f381-d4f4-a7a4f8ae0fc1"
                        },
                        "globalSwatchId": "",
                        "rValue": 21,
                        "bValue": 62,
                        "gValue": 21,
                        "aValue": 1
                    }
                }, {
                    "id": "a-43-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-arrow",
                            "selectorGuids": ["6bf45c85-f242-d05a-92cf-aa22a264c873"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-43-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": true,
                            "id": "64676f9ed9310cf21ec989f1|3ebafe57-2c46-f381-d4f4-a7a4f8ae0fc1"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 212,
                        "gValue": 139,
                        "aValue": 0.15
                    }
                }, {
                    "id": "a-43-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-arrow",
                            "selectorGuids": ["6bf45c85-f242-d05a-92cf-aa22a264c873"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1670415095774
        },
        "a-44": {
            "id": "a-44",
            "title": "Service-card-hover-out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": true,
                            "id": "64676f9ed9310cf21ec989f1|3ebafe57-2c46-f381-d4f4-a7a4f8ae0fc1"
                        },
                        "globalSwatchId": "",
                        "rValue": 21,
                        "bValue": 62,
                        "gValue": 21,
                        "aValue": 1
                    }
                }, {
                    "id": "a-44-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-arrow",
                            "selectorGuids": ["6bf45c85-f242-d05a-92cf-aa22a264c873"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1670415095774
        },
        "a-45": {
            "id": "a-45",
            "title": "bottom nav 7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".div-block-1372",
                            "selectorGuids": ["118db983-afec-2a8d-e57c-c7d05d0e3546"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-45-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7167"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-45-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7166"
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-45-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".div-block-1372",
                            "selectorGuids": ["118db983-afec-2a8d-e57c-c7d05d0e3546"]
                        },
                        "xValue": 1.05,
                        "yValue": 1.05,
                        "locked": true
                    }
                }, {
                    "id": "a-45-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7167"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-45-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7166"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1669120123082
        },
        "a-46": {
            "id": "a-46",
            "title": "bottom nav 8",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".div-block-1372",
                            "selectorGuids": ["118db983-afec-2a8d-e57c-c7d05d0e3546"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-46-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7167"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-46-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7166"
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1669120123082
        },
        "a-47": {
            "id": "a-47",
            "title": "bottom nav 9",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".div-block-1373",
                            "selectorGuids": ["cff591fd-0226-88d4-2daa-5c63c00538da"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-47-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc716d"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-47-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc716c"
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-47-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".div-block-1373",
                            "selectorGuids": ["cff591fd-0226-88d4-2daa-5c63c00538da"]
                        },
                        "xValue": 1.05,
                        "yValue": 1.05,
                        "locked": true
                    }
                }, {
                    "id": "a-47-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc716d"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-47-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc716c"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1669120123082
        },
        "a-48": {
            "id": "a-48",
            "title": "bottom nav 10",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".div-block-1373",
                            "selectorGuids": ["cff591fd-0226-88d4-2daa-5c63c00538da"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-48-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc716d"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-48-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc716c"
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1669120123082
        },
        "a-49": {
            "id": "a-49",
            "title": "bottom nav 11",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-49-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".enquire",
                            "selectorGuids": ["7a24c7d9-155a-cf40-cdd6-ec9b799fcc77"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-49-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7172"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-49-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7171"
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-49-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".enquire",
                            "selectorGuids": ["7a24c7d9-155a-cf40-cdd6-ec9b799fcc77"]
                        },
                        "xValue": 1.05,
                        "yValue": 1.05,
                        "locked": true
                    }
                }, {
                    "id": "a-49-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7172"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-49-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7171"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1669120123082
        },
        "a-50": {
            "id": "a-50",
            "title": "bottom nav 12",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".enquire",
                            "selectorGuids": ["7a24c7d9-155a-cf40-cdd6-ec9b799fcc77"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-50-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7171"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-50-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "64676f9ed9310cf21ec9893e|605fda9d-2e4c-b2b9-b58a-2adb82bc7172"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1669120123082
        },
        "a-55": {
            "id": "a-55",
            "title": "Tab (Open) 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-55-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-content-wrap",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b3"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-55-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-55-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-55-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-content-wrap",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b3"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-55-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 400,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-55-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-55-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outBack",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-icon",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b7"]
                        },
                        "zValue": 135,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1630185343811
        },
        "a-56": {
            "id": "a-56",
            "title": "Tab (Close) 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-56-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-content-wrap",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b3"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-56-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-56-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 200,
                        "target": {},
                        "yValue": -10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-56-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outBack",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-icon",
                            "selectorGuids": ["44697146-6803-5b52-294e-7473252939b7"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1630185343811
        },
        "a-33": {
            "id": "a-33",
            "title": "bottom nav",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".div-block-1372",
                            "selectorGuids": ["118db983-afec-2a8d-e57c-c7d05d0e3546"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".div-block-1372",
                            "selectorGuids": ["118db983-afec-2a8d-e57c-c7d05d0e3546"]
                        },
                        "xValue": 1.02,
                        "yValue": 1.02,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1669120123082
        },
        "a-34": {
            "id": "a-34",
            "title": "bottom nav 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".div-block-1372",
                            "selectorGuids": ["118db983-afec-2a8d-e57c-c7d05d0e3546"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1669120123082
        },
        "a-35": {
            "id": "a-35",
            "title": "bottom nav 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".div-block-1373",
                            "selectorGuids": ["cff591fd-0226-88d4-2daa-5c63c00538da"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-35-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".div-block-1373",
                            "selectorGuids": ["cff591fd-0226-88d4-2daa-5c63c00538da"]
                        },
                        "xValue": 1.02,
                        "yValue": 1.02,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1669120123082
        },
        "a-36": {
            "id": "a-36",
            "title": "bottom nav 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".div-block-1373",
                            "selectorGuids": ["cff591fd-0226-88d4-2daa-5c63c00538da"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1669120123082
        },
        "a-37": {
            "id": "a-37",
            "title": "bottom nav 5",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".enquire",
                            "selectorGuids": ["7a24c7d9-155a-cf40-cdd6-ec9b799fcc77"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".enquire",
                            "selectorGuids": ["7a24c7d9-155a-cf40-cdd6-ec9b799fcc77"]
                        },
                        "xValue": 1.02,
                        "yValue": 1.02,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1669120123082
        },
        "a-38": {
            "id": "a-38",
            "title": "bottom nav 6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".enquire",
                            "selectorGuids": ["7a24c7d9-155a-cf40-cdd6-ec9b799fcc77"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1669120123082
        },
        "a-57": {
            "id": "a-57",
            "title": "bottom nav 17",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".div-block-1372",
                            "selectorGuids": ["118db983-afec-2a8d-e57c-c7d05d0e3546"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".div-block-1372",
                            "selectorGuids": ["118db983-afec-2a8d-e57c-c7d05d0e3546"]
                        },
                        "xValue": 1.02,
                        "yValue": 1.02,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1669120123082
        },
        "a-58": {
            "id": "a-58",
            "title": "bottom nav 18",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-58-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".div-block-1372",
                            "selectorGuids": ["118db983-afec-2a8d-e57c-c7d05d0e3546"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1669120123082
        },
        "a-59": {
            "id": "a-59",
            "title": "bottom nav 19",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-59-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".div-block-1373",
                            "selectorGuids": ["cff591fd-0226-88d4-2daa-5c63c00538da"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-59-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".div-block-1373",
                            "selectorGuids": ["cff591fd-0226-88d4-2daa-5c63c00538da"]
                        },
                        "xValue": 1.02,
                        "yValue": 1.02,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1669120123082
        },
        "a-60": {
            "id": "a-60",
            "title": "bottom nav 20",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-60-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".div-block-1373",
                            "selectorGuids": ["cff591fd-0226-88d4-2daa-5c63c00538da"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1669120123082
        },
        "a-61": {
            "id": "a-61",
            "title": "bottom nav 21",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-61-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".enquire",
                            "selectorGuids": ["7a24c7d9-155a-cf40-cdd6-ec9b799fcc77"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-61-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".enquire",
                            "selectorGuids": ["7a24c7d9-155a-cf40-cdd6-ec9b799fcc77"]
                        },
                        "xValue": 1.02,
                        "yValue": 1.02,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1669120123082
        },
        "a-62": {
            "id": "a-62",
            "title": "bottom nav 22",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-62-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "selector": ".enquire",
                            "selectorGuids": ["7a24c7d9-155a-cf40-cdd6-ec9b799fcc77"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1669120123082
        },
        "a-65": {
            "id": "a-65",
            "title": "scroll",
            "continuousParameterGroups": [{
                "id": "a-65-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-65-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-1",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4808"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-2",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4810"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-3",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-3",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4807"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-4",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-4",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4823"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-5",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-5",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4825"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-6",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-6",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d481f"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-7",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-7",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4817"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 14,
                    "actionItems": [{
                        "id": "a-65-n-8",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-1",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4808"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-9",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-2",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4810"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-10",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-3",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4807"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-11",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-4",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4823"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-12",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-5",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4825"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-13",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-6",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d481f"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-14",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-7",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4817"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 28,
                    "actionItems": [{
                        "id": "a-65-n-15",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-1",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4808"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-16",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-2",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4810"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-17",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-3",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4807"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-18",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-4",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4823"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-19",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-5",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4825"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-20",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-6",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d481f"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-21",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-7",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4817"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 42,
                    "actionItems": [{
                        "id": "a-65-n-22",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-3",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4807"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-23",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-1",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4808"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-24",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-2",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4810"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-25",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-4",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4823"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-26",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-5",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4825"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-27",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-6",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d481f"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-28",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-7",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4817"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 56,
                    "actionItems": [{
                        "id": "a-65-n-29",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-4",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4823"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-30",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-1",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4808"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-31",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-2",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4810"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-32",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-3",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4807"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-33",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-5",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4825"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-34",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-6",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d481f"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-35",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-7",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4817"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 71,
                    "actionItems": [{
                        "id": "a-65-n-36",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-5",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4825"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-37",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-1",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4808"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-38",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-2",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4810"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-39",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-3",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4807"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-40",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-4",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4823"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-41",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-6",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d481f"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-42",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-7",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4817"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 86,
                    "actionItems": [{
                        "id": "a-65-n-43",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-5",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4825"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-44",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-1",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4808"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-45",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-2",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4810"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-46",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-3",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4807"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-47",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-4",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4823"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-48",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-6",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d481f"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-49",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-7",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4817"]
                            },
                            "widthValue": 2,
                            "heightValue": 0,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-65-n-50",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-5",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4825"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-51",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-1",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4808"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-52",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-2",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4810"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-53",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-3",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4807"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-54",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-4",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4823"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-55",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-6",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d481f"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-65-n-56",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".div-blue-line-7",
                                "selectorGuids": ["584dccd6-b772-5f8a-20ac-9fc4332d4817"]
                            },
                            "widthValue": 2,
                            "heightValue": 100,
                            "widthUnit": "px",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1685356488741
        },
        "a-18": {
            "id": "a-18",
            "title": "Milestone Card / Right",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".card-timeline-large",
                            "selectorGuids": ["6f824b0a-edaa-a1bb-a151-1f515d2a32e7"]
                        },
                        "xValue": 44,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".card-timeline-large",
                            "selectorGuids": ["6f824b0a-edaa-a1bb-a151-1f515d2a32e7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".card-timeline-large",
                            "selectorGuids": ["6f824b0a-edaa-a1bb-a151-1f515d2a32e7"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".card-timeline-large",
                            "selectorGuids": ["6f824b0a-edaa-a1bb-a151-1f515d2a32e7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1642477909442
        },
        "a-19": {
            "id": "a-19",
            "title": "Milestone Card / Left",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".card-timeline-large",
                            "selectorGuids": ["6f824b0a-edaa-a1bb-a151-1f515d2a32e7"]
                        },
                        "xValue": -44,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".card-timeline-large",
                            "selectorGuids": ["6f824b0a-edaa-a1bb-a151-1f515d2a32e7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".card-timeline-large",
                            "selectorGuids": ["6f824b0a-edaa-a1bb-a151-1f515d2a32e7"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".card-timeline-large",
                            "selectorGuids": ["6f824b0a-edaa-a1bb-a151-1f515d2a32e7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1642477909442
        },
        "a-39": {
            "id": "a-39",
            "title": "Ind dropdown",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".mullish-semibold-normal.blk",
                            "selectorGuids": ["7051968d-3f74-024d-7d6f-7c6695bcdc94", "7051968d-3f74-024d-7d6f-7c6695bcdca5"]
                        },
                        "globalSwatchId": "",
                        "rValue": 92,
                        "bValue": 120,
                        "gValue": 107,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-39-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".mullish-semibold-normal.blk",
                            "selectorGuids": ["7051968d-3f74-024d-7d6f-7c6695bcdc94", "7051968d-3f74-024d-7d6f-7c6695bcdca5"]
                        },
                        "globalSwatchId": "",
                        "rValue": 31,
                        "bValue": 219,
                        "gValue": 100,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1669566978760
        },
        "a-40": {
            "id": "a-40",
            "title": "Ind dropdown 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".mullish-semibold-normal.blk",
                            "selectorGuids": ["7051968d-3f74-024d-7d6f-7c6695bcdc94", "7051968d-3f74-024d-7d6f-7c6695bcdca5"]
                        },
                        "globalSwatchId": "",
                        "rValue": 92,
                        "bValue": 120,
                        "gValue": 107,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1669566978760
        },
        "a-69": {
            "id": "a-69",
            "title": "fs-toc EXPAND",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-69-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-69-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {},
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1651177342310
        },
        "a-70": {
            "id": "a-70",
            "title": "fs-toc COLLAPSE",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-70-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651177342310
        },
        "a-71": {
            "id": "a-71",
            "title": "fs-toc EXPAND 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-71-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-71-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {},
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1651177342310
        },
        "a-72": {
            "id": "a-72",
            "title": "fs-toc COLLAPSE 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-72-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651177342310
        },
        "a-73": {
            "id": "a-73",
            "title": "fs-toc EXPAND 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-73-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-73-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {},
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1651177342310
        },
        "a-74": {
            "id": "a-74",
            "title": "fs-toc COLLAPSE 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-74-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651177342310
        },
        "a-75": {
            "id": "a-75",
            "title": "fs-toc EXPAND 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-75-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-75-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {},
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1651177342310
        },
        "a-76": {
            "id": "a-76",
            "title": "fs-toc COLLAPSE 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-76-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651177342310
        },
        "a-77": {
            "id": "a-77",
            "title": "fs-toc EXPAND 5",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-77-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-77-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {},
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1651177342310
        },
        "a-78": {
            "id": "a-78",
            "title": "fs-toc COLLAPSE 5",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-78-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651177342310
        },
        "a-79": {
            "id": "a-79",
            "title": "fs-toc EXPAND 6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-79-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-79-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {},
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1651177342310
        },
        "a-80": {
            "id": "a-80",
            "title": "fs-toc COLLAPSE 6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-80-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651177342310
        },
        "a-82": {
            "id": "a-82",
            "title": "fs-toc EXPAND 7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-82-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".fs-toc_link-wrapper",
                            "selectorGuids": ["f6cf61a2-4974-42f1-616e-b8b4468f5fc4"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-82-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".fs-toc_link-wrapper",
                            "selectorGuids": ["f6cf61a2-4974-42f1-616e-b8b4468f5fc4"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1651177342310
        },
        "a-83": {
            "id": "a-83",
            "title": "fs-toc COLLAPSE 7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-83-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".fs-toc_link-wrapper",
                            "selectorGuids": ["f6cf61a2-4974-42f1-616e-b8b4468f5fc4"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651177342310
        },
        "a-84": {
            "id": "a-84",
            "title": "blog-scroll",
            "continuousParameterGroups": [{
                "id": "a-84-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-84-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "selector": ".blog-progress-bg-color",
                                "selectorGuids": ["030e9dfa-dcf0-be9e-c03c-498c87fe4cf2"]
                            },
                            "widthValue": 0,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-84-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "selector": ".blog-progress-bg-color",
                                "selectorGuids": ["030e9dfa-dcf0-be9e-c03c-498c87fe4cf2"]
                            },
                            "widthValue": 100,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1705433761623
        },
        "slideInRight": {
            "id": "slideInRight",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInLeft": {
            "id": "slideInLeft",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});